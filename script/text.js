let targetNumber = 322;

let userNumber = prompt(`Devinez un nombre entre 1 et 500 pigeon`)

while(userNumber != targetNumber){
   

    if(userNumber > targetNumber) {
        alert(`C'est trop grand !`)
    } else {
        alert(`C'est trop petit !`)
    }

    userNumber = prompt(`Devinez un nombre entre 1 et 500 pigeon`)

}

alert(`Bravo vous avez trouvé pigeon !!`)


 