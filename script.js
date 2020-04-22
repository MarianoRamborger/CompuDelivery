 let ofertaCards = document.getElementById("ofertaCards")
 let caruPlace = document.getElementById("ofertasCarrusel")
 let ofertasSection = document.getElementById("resultsSection")


 function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};



AjaxLoad = (target, request) => {

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status== 200) {

            target.innerHTML = this.responseText
            
        }
    }

    xhttp.open("GET", `${request}`, true)
    xhttp.send();
}


// if (isMobileDevice() == false) {
//     AjaxLoad(caruPlace, "carousel.html  ");


// }


if (true) {
    AjaxLoad(caruPlace, "carousel.html");


}


if (isMobileDevice() == true) {
    let cards = document.querySelectorAll(".ofertasCard")

    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add("mobileCard")
        
    }


}




let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status== 200) {

          
           const productList = JSON.parse(this.response)
               

            for (let index = 0; index < productList.length; index++) { 
                
            }

        
                    for (let index = 0; index < productList.length; index++) {
                    
                      
                 
                        if ( productList[index].oferta == "true" ) {
                      

                            
                            let resultLink = document.createElement("a")
                            resultLink.className = "resultsCard"
                            resultLink.href = `/products/product.html?id=${productList[index].id}`

                            let resultDiv = document.createElement("div")

                            let resultImg = document.createElement("img")
                            resultImg.src = `${productList[index].imagen}`

                            let resultTitle = document.createElement("h4")
                            resultTitle.innerText = `${productList[index].nombre}`

                            let resultPrice = document.createElement("h5")
                            resultPrice.innerText = `${productList[index].precio}` 

                            resultDiv.appendChild(resultImg)
                            resultDiv.appendChild(resultTitle)
                            resultDiv.appendChild(resultPrice)
                            resultLink.appendChild(resultDiv)

                            ofertasSection.appendChild(resultLink)



                 

                  
                        }
                        
                    }  
            
        }
    }

    xhttp.open("GET", "/products/productList.js", true)
    xhttp.send();















