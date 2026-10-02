const tombol = document.querySelector("#tombolSapa");
const pesan = document.querySelector("#pesan");

tombol.addEventListener("click", function() {
    pesan.textContent = "Halo! Senang kenalan dengan kamu 👋";
});


const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "🌙";
    } else {
        themeBtn.textContent = "☀️";
    }
});


const contactForm = document.querySelector("#contactForm");
const hasilPesan = document.querySelector("#hasilPesan");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const usernameTelegram = "Q_1erty";

    const url = "https://t.me/" + usernameTelegram;

    window.open(url, "_blank");

    contactForm.reset();
});

const menuBtn = document.querySelector("#menuBtn");
const navLinks = document.querySelector("#navLinks");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});
