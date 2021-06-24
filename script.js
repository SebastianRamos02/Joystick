// Al hacer scroll hacia abajo, mostrar el botón, y al volver ocultarlo.
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

window.onscroll = function () { scrollFunction() };

// Volver hacia arriba
function topFunction() {
    document.body.scrollTop = 0; //  Safari
    document.documentElement.scrollTop = 0; //  Chrome, Firefox, IE y Opera
}