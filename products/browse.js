const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const productTipo = urlParams.get('tipo')
const productSubTipo = urlParams.get("subtipo")



let resultsSection = document.getElementById("resultsSection")


let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status== 200) {

          
           const productList = JSON.parse(this.response)


           let browseTarget;
           let browseReference = "tipo";

           if (productTipo == null) {

            for (let index = 0; index < productList.length; index++) { 
                
            }
      
                    for (let index = 0; index < productList.length; index++) {
                      
                       
                        if (productList[index].subtipo == productSubTipo ) {

                       
                            createCards(productList[index])                 
                        }
                        
                    } 
            


           } 
           
           else 

           {
            for (let index = 0; index < productList.length; index++) { 
                
            }
      
                    for (let index = 0; index < productList.length; index++) {
                      
                       
                        if (productList[index].tipo == productTipo ) {

                       
                            createCards(productList[index])                 
                        }
                        
                    }  
            
        }

        }
    }

    xhttp.open("GET", "productList.js", true)
    xhttp.send();


    const createCards = (product) => {

        let resultLink = document.createElement("a")
        resultLink.className = "resultsCard"
        resultLink.href = `/products/product.html?id=${product.id}`
    
        let resultDiv = document.createElement("div")
    
        let resultImg = document.createElement("img")
        resultImg.src = `${product.imagen}`
    
        let resultTitle = document.createElement("h4")
        resultTitle.innerText = `${product.nombre}`
    
        let resultPrice = document.createElement("h5")
        resultPrice.innerText = `${product.precio}` 
    
        resultDiv.appendChild(resultImg)
        resultDiv.appendChild(resultTitle)
        resultDiv.appendChild(resultPrice)
        resultLink.appendChild(resultDiv)
    
        resultsSection.appendChild(resultLink)
    
    
    }
    