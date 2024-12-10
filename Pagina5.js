document.querySelector(".logosito").onclick = function () {

    window.location.href = "Pagina1.html"; // Nome del file della prima pagina
    
};


document.getElementById("modulo").onsubmit=function(e){

    e.preventDefault()


let campo1 = document.getElementById("nome");
console.log(campo1);

if(campo1.value.trim().length == 0){
    document.getElementById("nome").classList.add("errore");
    document.getElementById("nome").nextElementSibling.innerHTML = " <br> Inserisci il tuo nome";
}
else{
    document.getElementById("nome").classList.remove("errore");
    document.getElementById("nome").nextElementSibling.innerHTML = "";
}


let campo2 = document.getElementById("email");
console.log(campo2);

if(campo2.value.trim().length == 0){
    document.getElementById("email").classList.add("errore");
    document.getElementById("email").nextElementSibling.innerHTML = " <br> Inserisci la tua email";
}
else{
    document.getElementById("email").classList.remove("errore");
    document.getElementById("email").nextElementSibling.innerHTML = "";
}

let campo3 = document.getElementById("oggetto");
console.log(campo3);

if(campo3.value.trim().length == 0){
    document.getElementById("oggetto").classList.add("errore");
    document.getElementById("oggetto").nextElementSibling.innerHTML = " <br> Inserisci l'oggetto";
}
else{
    document.getElementById("oggetto").classList.remove("errore");
    document.getElementById("oggetto").nextElementSibling.innerHTML = "";
}

if(!document.getElementById("accetta").checked){
    document.getElementById("accetta").nextElementSibling.nextElementSibling.innerHTML= " <br> accetta le condizioni per proseguire"
}
else{
    document.getElementById("accetta").nextElementSibling.nextElementSibling.innerHTML= ""
}


}

