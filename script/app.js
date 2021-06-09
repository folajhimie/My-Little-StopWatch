let startButton = document.querySelector('.start')
const display = document.querySelector('.display')

// single variable
let seconds = 0;
let minutes = 0;
let hours = 0;

//double variable
let secondValue = 0;
let minuteValue = 0;
let hourValue = 0;

// Define the variable that holds the setIntreval Function
let interval;

let status = 'stopped';

function start (){
    seconds++;
    if(seconds / 60 === 1){
        seconds = 0
        minutes++;
    }
    if(minutes / 60 === 1){
        minutes = 0
        hours++;
    }
    if(hours > 24){
        hours = 0
    }

    if(seconds < 10){
        secondValue = "0" + seconds.toString();  
    }
    else {
        secondValue = seconds;
    }
    
    if(minutes < 10){
        minuteValue = "0" + minutes.toString();  
    }
    else {
        minuteValue = minutes;
    }

    if(hours < 10){
        hourValue = "0" + hours.toString();  
    }
    else {
        hourValue = hours;
    }

    const display = document.querySelector('.display')
    display.innerHTML = hourValue +" : "+ minuteValue + " : " + secondValue

}

// window.setInterval(startFunc, 100)

function startFunc(){
    if (status === 'stopped') {
        interval = window.setInterval(start, 100)
        startButton.innerHTML = "Pause";
        status = "started"
        console.log(status) 
    } else {
        window.clearInterval(interval)
        startButton.innerHTML = "Start";
        status = "stopped"
        console.log(status) 

    }
}


function stopFunc(){
    window.clearInterval(interval)
    seconds = 0;
    minutes = 0;
    hours = 0;
    // const display = document.querySelector('.display')
    display.innerHTML = "00 : 00 : 00"
    status = "stopped"
    console.log(status) 
    startButton.innerHTML = "Start";
}

function reset(){
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.innerHTML = "00 : 00 : 00"
    // interval = window.setInterval(start, 100)
}
