let boutonDemarage = document.getElementById("demaree")
let corp = document.getElementById("corp")
let travailText = document.getElementById("travail")
let pauseText = document.getElementById("pause")
let verifDemaree = 0
var boucle

boutonDemarage.addEventListener('click',()=>{
    verif()
    verifDemaree++
})




const departMinutes = 0.05
const departPause = 0.1
let pause = false
const tempsElement = document.getElementById("temps")

let temps = departMinutes * 60


horloge();



function Demarer(){
    boucle = setInterval(() => {
        
        
        
        if(temps == 0){
            if(pause == false){
                temps = departPause * 60  + 1
                corp.style.backgroundColor = 'green'
                demaree.style.backgroundColor= 'green'
                pauseText.style.color = 'white'
                travailText.style.color = 'gray'
                pause = true
            }else {
                temps = departMinutes * 60 + 1
                corp.style.backgroundColor = 'red'
                demaree.style.backgroundColor = 'red'
                pauseText.style.color = 'gray'
                travailText.style.color = 'white'
                pause = false
            }
        }
        temps = temps <= 0 ? 0 : temps - 1

        horloge();
        
    }, 1000)
}

function verif(){
    if (verifDemaree != 0){
        clearInterval(boucle)
        temps = departMinutes * 60
        horloge();
        document.querySelector(".icone").innerHTML = '<i class="fa-solid fa-play fa-3x"></i>';
        corp.style.backgroundColor = 'red'
        demaree.style.backgroundColor = 'red'
        pauseText.style.color = 'gray'
        travailText.style.color = 'white'
        verifDemaree = -1
        return
    }
    else{
        Demarer()
        document.querySelector(".icone").innerHTML = '<i class="fa-solid fa-arrows-rotate fa-3x"></i>';
    }
}

function horloge(){
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
    
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes
    
    tempsElement.innerText = `${minutes} : ${secondes}`
}
