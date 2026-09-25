const tombol = document.querySelector(".btn");

tombol.addEventListener("click", function(event) {
    event.preventDefault();

    document.querySelector("#about").scrollIntoView({
        behavior: "smooth"
    });
});
