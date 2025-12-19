function afficherResultat(score, total) {
    let div = document.querySelector(".affichageScore span p")
    let affichageScore = `${score} / ${total} `

    div.innerText = affichageScore
}

function ecritureValue(input) {

    return input.value
    // input.value = "" //Dans le corrigé, le clear de l'input est intégrer dans le if.
}


function afficherProposition(proposition) {

    let div = document.querySelector(".motProposition")
    div.innerText = proposition
}

function resetJeu () {

                i = 0;
                score = 0;
                inputEcriture.value = '';
                boutonValider.disabled = false;
                inputEcriture.disabled = false;
}


function lancerJeu() {


    let i = 0
    let score = 0
    let inputEcriture = document.getElementById("inputEcriture")
    let listeProposition = listMots
    const btnPartager = document.querySelector (".btnPartager button")
    const btnRetour = document.getElementById ("btnRetour")

    btnPartager.disabled = true
    
    
    afficherProposition(listeProposition[i])
    
    let boutonValider = document.querySelector(".reponseUser button")
    boutonValider.addEventListener("click", () => {
        const valeurUtilisateur = ecritureValue(inputEcriture)
        inputEcriture.value = ''
        
            // if (i === 0) {
            // radio.forEach(r => r.disabled = true);
        // }

        if(listeProposition[i] === valeurUtilisateur) {
            score++
        }
        
        i++
        afficherResultat(score, i)
        if (listeProposition[i] === undefined) {
            let div = document.querySelector(".motProposition")
            div.innerText = ("Jeu Terminé !")
            boutonValider.disabled = true
            inputEcriture.disabled = true
            btnPartager.disabled = false

        } else {
            afficherProposition(listeProposition[i])}
            
        })
        
        let radio = document.querySelectorAll(".inputChoix input")
        for (let j = 0; j < radio.length; j++) {
            radio[j].addEventListener("change", (event) =>  {
                
                

                if(event.target.value === "mots") {
                    
                    listeProposition = listMots
                }
                else {
                    
                    listeProposition = listPhrases
                }

                 afficherProposition(listeProposition[i])
            })
        }
          
    afficherResultat(score, i)   
}


