/*let targetNumber = Math.floor(Math.random()*30);

let userNumber = prompt(`Devinez un nombre entre 1 et 30 pigeon`)

while(userNumber != targetNumber){
   

    if(userNumber > targetNumber) {
        alert(`C'est trop grand !`)
    } else {
        alert(`C'est trop petit !`)
    }

    userNumber = prompt(`Essaie encore`)

}

alert(`Bravo vous avez trouvé pigeon !!`)
*/

let trigger = document.querySelector('#send-button');
let numberZone = document.querySelector('#user-number');
let displayZone = document.querySelector('#game-display');

let targetNumber = Math.floor(Math.random()*100)+1;

console.log(trigger, numberZone, displayZone, targetNumber);

function compareNumber() {
    //console.log("ça marche");
    let userNumber = numberZone.value;
    let result;
    //console.log(userNumber)


    if (userNumber==targetNumber)
        result='GG'

    else if(userNumber > targetNumber) {
        result=`C'est trop grand !`
    } else {
        result=`C'est trop petit !`
    }

    let resultZone = document.createElement('p');
    resultZone.innerHTML = result;
    resultZone.style.padding = "10px";
    resultZone.style.backgroundColor = "var(--couleur-mifoncé)";
    resultZone.classList.add("result-line")

    displayZone.appendChild(resultZone);
}

trigger.addEventListener('click', compareNumber)