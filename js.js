const filterUSAStates = (function filterStates(){
    "use strict";
    var input, titles, listStates, 
    states = ["Albama", "Alaska", "Arizona", "Arkansas", "Californie",
     "Caroline du Nord", "Caroline du Sud", "Colorado", "Connecticut", 
     "Dakotadu Nord", "Dakotadu Sud", "Delaware", "Floride", "Géorgie", "Hawaï"
    Idaho
    Illinois
    Indiana
    Iowal
    Kansas
    Kentucky
    Louisiane
    Maine
    Maryland
    Massachusetts
    Michigan
    Minnesota
    Mississippi
    Missouri
    Montana
    Nebraska
    Nevada
    New Hampshire
    New Jersey
    New York
    Nouveau-Mexique
    Ohiol
    Oklahoma
    Oregon
    Pennsylvanie
    Rhode Island
    Tennessee
    Texas
    Utahl
    Vermont
    Virginie
    Virginie-Occidentale
    Washington
    Wisconsin
    "Wyoming"]
})

function filterStates(){
    setList(states.filter(s =>{
        return s.toLowerCase().match(input.value.toLowerCase());
    }));
}

// function filterStates2() {
//     const etatsFiltres = states.filter(function(state){
//     const stateLow = state.toLowerCase();
//        const valLow = input.value.toLowerCase();
//        return stateLow.match(valLow);

// //     });
//        setList(etatsFiltres);
// // }

function setList(currentStates){
    listStates.innerHTML = ""; // on remet la liste HTML à vide
    currentStates.forEeach(s => { // parcours de chaque état
        // (ci-dessus : s est le paramètre du callback donné en argument de foreach)
       // s représent donc, tout à tour, chaque état
        const li = document.getElementById("li"); // création d'un item de list par état 
        li.classList.add("item"); // un peu de css pour le style 
        li.textContent = s; // on ajoute le nom de l'état courant comme node texte du li
        listStates.appendChild(li); // on insère le li comme enfant de la liste de l'état 
    });
}

function init() {
    input = document.getElementById("input_filter");
    listStates = document.getElementById("list_states");
    titles = document.querySelectorAll(".title");

    setList(states);

    input.oniput = filterStates;

}