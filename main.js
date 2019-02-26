window.onload = init;
window.onload=typeText;

/*sets the variables for String and Index*/
var i = 0;
var txt = 'Enter Your Text Here';
var speed = 50;
/*function for type effect*/
function typeText() {
  if (i < txt.length) {
    document.getElementById("letters").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeText, speed);
  }
}
/*text box*/
function init() {
    document.querySelector('#input')
        .addEventListener('keyup', handleTyping);
}

function handleTyping(event) {
    /*defines input*/
    let userInput = event.target.value.toLowerCase();
    /* makes input to lower-case and creates arrays*/
    /*identifies index at zero*/
    let answer = "";
    let i = 0;
    
    /*Loop Capitalizes the first Letter */
    while (i < userInput.length){
        if (i === 0 || userInput[i-1]===' '){
            answer = answer + userInput[i].toUpperCase();
        } else { 
            answer = answer + userInput[i];

        }
       i++; 
    }
    
    document.querySelector('#blurb').innerText = answer;
}



function myMove() {
    let elem = document.getElementById("animate");   
    let pos = 0;
    let id = setInterval(frame, -20);
    function frame() {
      if (pos == 500) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.left= pos + "px"; 
        elem.style.right= pos + "px"; 
      }
    }
  }