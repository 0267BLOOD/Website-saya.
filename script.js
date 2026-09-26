const tombol = document.querySelector("#tombolSapa");
const pesan = document.querySelector("#pesan");

tombol.addEventListener("click", function() {
    pesan.textContent = "Halo! Senang kenalan dengan kamu 👋";
});
