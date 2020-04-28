newsLetterButton.addEventListener("click", (event) => {

    let name = document.getElementById("newsLetterName")
    let email = document.getElementById("newsLetterEmail")

    let xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://localhost:3000/newsletter', true);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log("yay")
        }
    }


    xhr.send(`name=${name.value}&email=${email.value}`);


})

