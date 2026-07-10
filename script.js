const boton = document.getElementById("abrir");
const carta = document.getElementById("carta");

boton.addEventListener("click", () => {
    carta.classList.remove("oculto");
    boton.style.display = "none";
});
