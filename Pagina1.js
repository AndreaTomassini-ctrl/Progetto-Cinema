
fetch('http://localhost:3000/posts', {
    method: 'GET', // metodo di richiesta (GET in questo caso)
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyYW5jZXNjb0BnbWFpbC5jb20iLCJpYXQiOjE3MzI4MDU0MjUsImV4cCI6MTczMjgwOTAyNSwic3ViIjoiMiJ9.pUzRujS9bJYpUUX30-bZu5VdrffWI1Vseg833I-ZERQ' // Aggiungi qui il tuo token
    }
  })
.then(response => response.json()) // Trasforma la risposta in formato JSON
.then(json => console.log(json)) // Stampa i dati JSON in console


// "email": "andrea@gmail.com", password: 4567 (password degli users creati tramite Postman)
// "email": "francesco@gmail.com", password: 1234 (password degli users creati tramite Postman)

const slider=document.querySelector("#slider");

let intervallo =setInterval(muoviSlider,5000);

function muoviSlider(){
    
    const elemVisibile=document.querySelector(".visibile");
    const fratello=elemVisibile.nextElementSibling;
    const elemAsinistra=document.querySelector(".spostaASinistra");

    if(elemAsinistra!=null){
        elemAsinistra.classList.remove("spostaASinistra");
    }
         
   // tolgo la classe VISIBILE e aggiungo la classe SPOSTAASINISTRA con "replace"

    elemVisibile.classList.replace("visibile","spostaASinistra");
    
    //   utilizzo un ciclo IF per poter dare la classe VISIBILE alla prima immagine

    if(fratello!=null){
        fratello.classList.add("visibile");
        
    }
    else{
        
        document.querySelector(".image").classList.add("visibile");
    }
}


document.getElementById("film").onclick = function() {

    let elencoimmagini = document.querySelectorAll(".film"); // Seleziona tutti i div con la classe 'film'
    console.log(elencoimmagini);

    for (let i = 0; i < elencoimmagini.length; i++) {
        elencoimmagini[i].style.display = "block";
        document.getElementById("frase").style.display="block";
        document.getElementById("frase").innerHTML=" Tutti i nostri  film disponibili !!!"
    }
}


document.getElementById("filmPari").onclick = function() {

    let elencoimmagini = document.querySelectorAll(".film"); 
    console.log(elencoimmagini);

    for (let i = 0; i < elencoimmagini.length; i++) {
        if (i % 2 == 0) { 
            elencoimmagini[i].style.display = "block";
            document.getElementById("frase").style.display="none";
        }
        else {
            elencoimmagini[i].style.display = "none"; 
            
        }
    }
}


document.getElementById("filmDispari").onclick = function() {
    let elencoimmagini = document.querySelectorAll(".film");
    console.log(elencoimmagini);

    for (let i = 0; i < elencoimmagini.length; i++) {
        if (i % 2 !== 0) { 
            elencoimmagini[i].style.display = "block";
            ocument.getElementById("frase").style.display="none";
        }
        else {
            elencoimmagini[i].style.display = "none"; 
        }
    }
}



document.getElementById("TreFilm").onclick = function() {
    let elencoimmagini = document.querySelectorAll(".film"); 
    console.log(elencoimmagini);

    // Nascondi tutti i film
    for (let i = 0; i < elencoimmagini.length; i++) {
        elencoimmagini[i].style.display = "none";
    }

    // Mostra solo i tre film desiderati
    elencoimmagini[1].style.display = "block";
    elencoimmagini[5].style.display = "block";
    elencoimmagini[8].style.display = "block";

    // Nasconde la frase
    document.getElementById("frase").style.display = "none";
}


let elencoselect = document.querySelectorAll("#NomeSala option");

for (let i = 0; i < elencoselect.length; i++) {

    elencoselect[i].onclick=function() {
    console.log(this.value); // 'this' si riferisce all'option cliccato

    if(this.value == "SALA A"){
        document.getElementById("nomefilm1").innerHTML = '<option value="">Il Gladiatore II</option>';
        document.getElementById("nomefilm2").innerHTML = '<option value="">Il Ragazzo Dai Pantaloni Rosa</option>';
        document.getElementById("nomefilm3").innerHTML = '<option value="">Napoli - New York</option>';
        document.getElementById("giorno1").innerHTML = '<option value="">26 Novembre 2024</option>';
        document.getElementById("giorno2").innerHTML = '<option value="">28 Novembre 2024</option>';
        document.getElementById("giorno3").innerHTML = '<option value="">30 Novembre 2024</option>';
        document.getElementById("oredisponibile1").innerHTML = '<option value="">ore: 17:00</option>';
        document.getElementById("oredisponibile2").innerHTML = '<option value="">ore: 18:00 </option>';
        document.getElementById("oredisponibile3").innerHTML = '<option value="">ore: 19:00</option>';
        document.getElementById("oredisponibile4").innerHTML = '<option value="">ore: 20:00</option>';
        document.getElementById("oredisponibile5").innerHTML = '<option value="">ore: 21:00</option>';
        
    }
    else if(this.value == "SALA B"){
        document.getElementById("nomefilm1").innerHTML = '<option value="">Una Terapia Di Gruppo</option>';
        document.getElementById("nomefilm2").innerHTML = '<option value="">Tre giorni sulle ali della follia</option>';
        document.getElementById("nomefilm3").innerHTML = '<option value="">Uno Rosso</option>';
        document.getElementById("giorno1").innerHTML = '<option value="">2 Dicembre 2024</option>';
        document.getElementById("giorno2").innerHTML = '<option value="">6 Dicembre 2024</option>';
        document.getElementById("giorno3").innerHTML = '<option value="">10 Dicembre 2024</option>';
        document.getElementById("oredisponibile1").innerHTML = '<option value="">ore: 17:00</option>';
        document.getElementById("oredisponibile2").innerHTML = '<option value="">ore: 18:00 </option>';
        document.getElementById("oredisponibile3").innerHTML = '<option value="">ore: 19:00</option>';
        document.getElementById("oredisponibile4").innerHTML = '<option value="">ore: 20:00</option>';
        document.getElementById("oredisponibile5").innerHTML = '<option value="">ore: 21:00</option>';
        
    }
    else{
        document.getElementById("nomefilm1").innerHTML = '<option value="">Oceania 2</option>';
        document.getElementById("nomefilm2").innerHTML = '<option value="">Wicked</option>';
        document.getElementById("nomefilm3").innerHTML = '<option value="">Giurato Numero 2 </option>';
        document.getElementById("giorno1").innerHTML = '<option value="">4 Dicembre 2024</option>';
        document.getElementById("giorno2").innerHTML = '<option value="">17 Dicembre 2024</option>';
        document.getElementById("giorno3").innerHTML = '<option value="">21 Dicembre 2024</option>';
        document.getElementById("oredisponibile1").innerHTML = '<option value="">ore: 17:00</option>';
        document.getElementById("oredisponibile2").innerHTML = '<option value="">ore: 18:00 </option>';
        document.getElementById("oredisponibile3").innerHTML = '<option value="">ore: 19:00</option>';
        document.getElementById("oredisponibile4").innerHTML = '<option value="">ore: 20:00</option>';
        document.getElementById("oredisponibile5").innerHTML = '<option value="">ore: 21:00</option>'; 
        
    }
  };

}


let totaleimmagini = document.querySelectorAll(".film-container img");

console.log(totaleimmagini);

        for (let i = 0; i < totaleimmagini.length; i++) {
    
            totaleimmagini[i].onclick=function(){
                localStorage.setItem("filmSelezionato", i);
                window.location.href = "Pagina6.html"; // Nome del file della prima pagina
            }
        }
