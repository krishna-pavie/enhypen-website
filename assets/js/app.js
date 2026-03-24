// BOTÓN "IR ARRIBA"

// Seleccionamos el botón
const btnArriba = document.getElementById("btnArriba");

// Evento click
btnArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});