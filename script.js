 let ofertaCards = document.getElementById("ofertaCards")
 let caruPlace = document.getElementById("ofertasCarrusel")


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








    let ofertArray = [
        {
            Img  : "https://us.123rf.com/450wm/aalbedouin/aalbedouin1711/aalbedouin171100787/90065129-mini-pc-icon-symbol-premium-quality-isolated-nettop-element-in-trendy-style-.jpg?ver=6",
            Producto : "Pc1",
            Precio : "8000",
            Url : "#"
        },
        
    ];




// ofertaCards.innerHTML = ``











