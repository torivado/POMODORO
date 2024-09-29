let boutonDemarage = document.getElementById("demaree")
let boutonParametrer = document.getElementById("parametrer")
let corp = document.getElementById("corp")
let travailText = document.getElementById("travail")
let pauseText = document.getElementById("pause")
let verifDemaree = 0
var boucle

boutonDemarage.addEventListener('click',()=>{
    verif()
    verifDemaree++
})



let departMinutes
if(window.localStorage.getItem("tempsCronoTravail") == null){
    departMinutes = 25;
}else {
    departMinutes = window.localStorage.getItem("tempsCronoTravail")
}



let departPause
if(window.localStorage.getItem("tempsCronoPause") == null){
    departPause = 5
}else {
    departPause = window.localStorage.getItem("tempsCronoPause")
}


let pause = false
const tempsElement = document.getElementById("temps")


let temps = departMinutes * 60

horloge()



function Demarer(){
    boucle = setInterval(() => {
        if(temps == 0){
            if(pause == false){
                couleurPause();
            }else {
                couleurTravail();
            }
        }
        temps = temps <= 0 ? 0 : temps - 1

        horloge();
        
    }, 1000)
}



function verif(){
    if (verifDemaree != 0){
        clearInterval(boucle)
        couleurTravail();
        horloge();
        document.querySelector("#demaree").innerHTML = '<i class="fa-solid fa-play fa-3x"></i>';
        verifDemaree = -1
        return
    }
    else{
        Demarer()
        document.querySelector("#demaree").innerHTML = '<i class="fa-solid fa-arrows-rotate fa-3x"></i>';
    }
}



function horloge(){
    
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
    
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes
    
    tempsElement.innerText = `${minutes} : ${secondes}`
}





function couleurPause(){
    temps = departPause * 60  + 1
    corp.style.backgroundColor = 'green'
    demaree.style.backgroundColor= 'green'
    parametrer.style.backgroundColor= 'green'
    pauseText.style.color = 'white'
    travailText.style.color = 'gray'
    pause = true
}

function couleurTravail(){
    temps = departMinutes * 60
    corp.style.backgroundColor = 'red'
    demaree.style.backgroundColor = 'red'
    parametrer.style.backgroundColor= 'red'
    pauseText.style.color = 'gray'
    travailText.style.color = 'white'
    pause = false
}






let boutonValidee = document.getElementById("validee")
let boutonAnnulee = document.getElementById("annulee")
let tempsTravail = document.getElementById("cronoTravail")
let tempsPause = document.getElementById("cronoPause")


boutonValidee.addEventListener('click',()=>{
    change()
    formulaire.style.display = 'none'
})

boutonAnnulee.addEventListener('click',()=>{
    formulaire.style.display = 'none'
})




boutonParametrer.addEventListener('click',()=>{
    if(formulaire.style.display == 'flex'){
        formulaire.style.display = 'none'
    }
    else{
        clearInterval(boucle);
        couleurTravail();
        horloge();
        document.querySelector("#demaree").innerHTML = '<i class="fa-solid fa-play fa-3x"></i>';
        verifDemaree = 0
        formulaire.style.display = 'flex'
    }
})




function change(){
    if(verifFormulaire(tempsTravail.value) == false || verifFormulaire(tempsPause.value) == false){
        return
    }
    window.localStorage.setItem("tempsCronoTravail",tempsTravail.value )
    window.localStorage.setItem("tempsCronoPause",tempsPause.value )
    departMinutes = tempsTravail.value
    departPause = tempsPause.value
    
    temps = departMinutes * 60
    horloge();
}


function verifFormulaire(valeur){
    if (valeur <= 1 || valeur > 120){
        alert("Attention le temps doit etre comppris entre 1 et 120 min");
        return false
    }
    return true
}