let boutonDemarage = document.getElementById("Demaree")
let verifDemaree = 0
var boucle

boutonDemarage.addEventListener('click',()=>{
    verif()
    verifDemaree++
})




const departMinutes = 25
let temps = departMinutes * 60 - 1

const tempsElement = document.getElementById("temps")
tempsElement.innerText = departMinutes + " : 00"

function Demarer(){
    boucle = setInterval(() => {
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)

    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes

    tempsElement.innerText = `${minutes} : ${secondes}`
    temps = temps <= 0 ? 0 : temps - 1
    }, 1000)
}

function verif(){
    if (verifDemaree != 0){
        clearInterval(boucle)
        temps = departMinutes * 60
        tempsElement.innerText = departMinutes + " : 00"
        document.querySelector(".icone").innerHTML = '<i class="fa-solid fa-play"></i>';
        verifDemaree = -1
        return
    }
    else{
        Demarer()
        document.querySelector(".icone").innerHTML = '<i class="fa-solid fa-arrows-rotate"></i>';
    }
}
