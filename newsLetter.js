newsLetterButton.addEventListener("click", (event) => {


    let name = document.getElementById("newsLetterName")
    let email = document.getElementById("newsLetterEmail")
    let newsLetter = document.getElementById("newsletter")

    nameToSend = name.value
    emailToSend = email.value

    let gracias = document.createElement("h4");
    gracias.innerText = "Gracias por suscribirte!"
    gracias.className = "greenYellow"

    newsLetter.innerHTML = ""
    newsLetter.appendChild(gracias);


    

    let xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://powerful-ridge-18870.herokuapp.com/newsletter', true);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log("yay")
        }
    }


    xhr.send(`name=${nameToSend}&email=${emailToSend}`);

   







})

