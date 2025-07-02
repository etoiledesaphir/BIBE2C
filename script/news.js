let trigger = document.querySelector("#news-trigger");
let aside = document.querySelector("aside");
let croix = document.querySelector("#close");
// Récuperer la croix dans une variable

function showNews() {
    aside.style.right = "20px"
    trigger.style.opacity = "0"


}

function closeNews() {
    // Remettre les éléments style aux valeurs de départ
    aside.style.right = "-33%"
    trigger.style.opacity = "1"
}

trigger.addEventListener("click", showNews);

// La croix détecte un clic et déclenche la fonction closeNews
croix.addEventListener("click", closeNews);