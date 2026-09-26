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
