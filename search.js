let searchBox = document.getElementById("searchBox")
let searchButton = document.getElementById("search-button")

let search = ""
searchBox.value = ""


searchBox.addEventListener


searchBox.onkeyup = searchFor = (event) => {



     search = event.target.value
     console.log(search)
     searchButton.href = search

}


searchBox.onkeydown = searchFor = (event) => {
     var key = event.charCode || event.keyCode || 0;     
      if (key == 13) {
     
         event.preventDefault()

         if (searchBox.value.length < 3) {
          searchBox.placeholder = "Ingrese al menos 3 caracteres"
          search = ""
      }
      else {
       
           window.location = `/products/results.html?nombre=${search}`
           search = ""
      }



    }

    
}




searchButton.addEventListener("click", (e) => {

   e.preventDefault()

   if (searchBox.value.length < 3) {
       searchBox.placeholder = "Ingrese al menos 3 caracteres"
       search = ""
   }
   else {
    
        window.location = `/products/results.html?nombre=${search}`
        search = ""
   }



})
