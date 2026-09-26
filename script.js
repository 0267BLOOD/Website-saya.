const tombol = document.querySelector(".btn");

tombol.addEventListener("click", function(event) {
    event.preventDefault();

    document.querySelector("#about").scrollIntoView({
        behavior: "smooth"
    });
});


const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});
