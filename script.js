let boutonPierre = document.getElementById("Start")
let verifStart = 0;
var refreshIntervalId

boutonPierre.addEventListener('click',()=>{
    verif()
    verifStart++;
})


const departMinutes = 25
let temps = departMinutes * 60

const timerElement = document.getElementById("timer")
timerElement.innerText = departMinutes

function Start(){
    refreshIntervalId = setInterval(() => {
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)

    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes

    timerElement.innerText = `${minutes}:${secondes}`
    temps = temps <= 0 ? 0 : temps - 1
    }, 1000)
}

function verif(){
    if (verifStart != 0){
        clearInterval(refreshIntervalId);
        timerElement.innerText = departMinutes
        return
    }
    else{
        Start()
    }
}
