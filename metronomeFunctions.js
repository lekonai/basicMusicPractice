var metronomeTick = new Audio('static/sound/metTick.mp3');
var tickingPlaying = false;
var currentBPM = document.getElementById('bpmNum').innerHTML;
console.log(currentBPM);
// this function's to change the bpm
function metBPM(x){ 
    if (x == true){
    document.getElementById('bpmNum').innerHTML++;
    currentBPM = document.getElementById('bpmNum').innerHTML;
    console.log(currentBPM); // test
    }
    else {
        document.getElementById('bpmNum').innerHTML--; // it's so weird not using a strongly typed language huh
        currentBPM = document.getElementById('bpmNum').innerHTML;
        console.log(currentBPM); // test
        }
    }
    function metronomeTrigger(){ // this function's to play the beat DO NOT RUN THIS IT WILL CRASH YOUR COMPUTER LOOOOL 
        if (tickingPlaying == true){
            tickingPlaying = false;
        }
        else if (tickingPlaying == false){
            tickingPlaying = true;
        }
        playingFunc(tickingPlaying);
    }
    function playingFunc(x){
        console.log("play reached");
        while (x == true){
            setTimeout(() => {
                metronomeTick.play();
            }, 2000);
        } // why is this so much more complex than expected
    }
            