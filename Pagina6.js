document.querySelector(".logosito").onclick = function () {

    window.location.href = "Pagina1.html"; // Nome del file della prima pagina
    
};

let indiceFilm = localStorage.getItem("filmSelezionato");
console.log(indiceFilm);

let elencocontenitori = document.querySelectorAll(".contenitore");
    
    // Nascondi tutti i contenitori
    for (let i = 0; i < elencocontenitori.length; i++) {
        elencocontenitori[i].style.display = "none";
    }

    // Mostra solo il film selezionato
    elencocontenitori[indiceFilm].style.display = "block";
