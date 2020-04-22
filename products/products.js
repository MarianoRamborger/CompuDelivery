const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const productId = urlParams.get('id')






let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status== 200) {

            
          
           const productList = JSON.parse(this.response)
           
    

            for (let index = 0; index < productList.length; index++) { 
                
            }

        
                    for (let index = 0; index < productList.length; index++) {
                      
                        if ( productList[index].id == productId ) {

                            

                            let productImg = document.getElementById("productImg")
                            let productTitle = document.getElementById("productTitle")
                            let productPrice = document.getElementById("productPrice")
                            let productDesc = document.getElementById("productDesc")

                            productImg.src = productList[index].imagen
                            productTitle.innerText = productList[index].nombre
                            productPrice.innerText = productList[index].precio
                            productDesc.innerText = productList[index].descripcion

                        }
                        
                    }
           
            
        }
    }

    xhttp.open("GET", "productList.js", true)
    xhttp.send();





