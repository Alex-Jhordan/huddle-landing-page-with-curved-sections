const links = [...document.querySelectorAll("a")];
links.splice(3, 2);

links.forEach(link => {
    console.log(link);
    link.addEventListener("click", (e) => {
        e.preventDefault();
    });
});


const newsletter__form = document.querySelector(".newsletter__form");

newsletter__form.addEventListener("submit", (e) => {
    e.preventDefault();
    validarEmail(newsletter__input.value);
})
