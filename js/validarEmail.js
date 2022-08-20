const regExpEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const newsletter__input = document.querySelector(".newsletter__input");

const message = document.querySelector(".message");

function validarEmail(email) {

    if (newsletter__input.value.trim()) {

        if (regExpEmail.test(email)) {
            message.textContent = "Check your email please";
        } else {
            message.textContent = "Enter a valid email";
        }

    } else {
        message.textContent = "Enter an email";
    }

    message.classList.add("visible");

    setTimeout(() => {
        message.classList.remove("visible");
    }, 3000)

}