var buttonDrink = document.getElementById('button_drink');
var buttonBubbles = document.getElementById('button_bubbles');
var buttonBlock = document.getElementById('button_block');
var video = document.getElementById('video');
var nonActive = document.getElementById('nonActive')

nonActive.addEventListener('hover',speelNonActive)
buttonDrink.addEventListener('click', speelDrink);
buttonBubbles.addEventListener('click', speelBubbles);
buttonBlock.addEventListener('click', speelBlock);

function speelNonActive(){
    video.src = "Video/Nonactive.mp4"
    console.log('play time');
}

function speelDrink() {
    video.src = "Video/Drink.mp4";
    console.log('run drink');
}

function speelBubbles() {
    video.src = "Video/Bubbles.mp4";
    console.log('run bubbles');
}

function speelBlock() {
    video.src = "Video/Block.mp4";
    console.log('sup block');
}