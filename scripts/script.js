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



function lancerJeu() {
    
    function resetJeu() {
       
        i = 0
        score = 0
        inputEcriture.value = ''
        
        boutonValider.disabled = false
        inputEcriture.disabled = false
        btnPartager.disabled = true
        radio.forEach(element => element.disabled = false)
        
        afficherProposition(listeProposition[i])
        afficherResultat(score, i)
    }

    let i = 0
    let score = 0
    let inputEcriture = document.getElementById("inputEcriture")
    let listeProposition = listMots
    const btnPartager = document.querySelector (".btnPartager button")
    const btnReset = document.getElementById ("reset")
    

    btnPartager.disabled = true
    btnReset.disabled = true
    
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
            btnReset.disabled = false
            radio.forEach(element => element.disabled = true)


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

        btnReset.addEventListener ("click", () => {

            resetJeu()
        })
          
    afficherResultat(score, i)   
}


