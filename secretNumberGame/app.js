//let title = document.querySelector ('h1');
//    title.innerHTML = 'Welcome to the Secret Number game'; 
// let paragraph = document.querySelector ('p');
//     paragraph.innerHTML = 'Choose a number between 1 to 10';

let arrayDrawnNumber = [];
let numbersDeathLine = 10;
let secretNumber = randomNumberGenerator();
let attempts = 1;

// ⬇ another way to do the same thing ⬇
function showTextOnScreen (tag,Text) {
   let camp = document.querySelector (tag);
    camp.innerHTML = Text;
    responsiveVoice.speak(Text,'UK English Female',{rate:1.1})
 }
 
 function showBegginingMessages() {
 showTextOnScreen ('h1', 'Welcome to the Secret Number game');
 showTextOnScreen ('p','Choose a number between 1 to 10');
 }

 showBegginingMessages();

function checkTheAttempt () {
   let trying = document.querySelector ('input').value;
   console.log ( trying == secretNumber);
   
   if (trying == secretNumber) {
      showTextOnScreen ('h1','Congratulations, you are right !');
   
   let wordAttempts = attempts >1? 'attempts !' : 'attempt !';
   let showAttemptsMessage = `You found it in ${attempts} ${wordAttempts}`;

      showTextOnScreen ('p', showAttemptsMessage);
      document.getElementById('reiniciar').removeAttribute('disabled');
 } 
 else {
   if (trying > secretNumber) {
      showTextOnScreen ('p','That is smaller.');
   }
   else {showTextOnScreen ('p','That is bigger.');
   } attempts++;
   cleanTheCamp ()
}
}
function randomNumberGenerator() {
   let chosenNumber = parseInt(Math.random() *numbersDeathLine +1);
   let elementsInTheList = arrayDrawnNumber.length;

   if (elementsInTheList == numbersDeathLine) {
      arrayDrawnNumber = [];
   }

   if (arrayDrawnNumber.includes(chosenNumber)) {
      return randomNumberGenerator();
}  else {
      arrayDrawnNumber.push(chosenNumber);
      console.log(arrayDrawnNumber);
       return chosenNumber;
     
   }
}
function cleanTheCamp() {
   trying = document.querySelector('input');
   trying.value = '';
}
function restartTheGame () {
   secretNumber = randomNumberGenerator();
   cleanTheCamp();
   attempts = 1;
   showBegginingMessages()
   document.getElementById('reiniciar').setAttribute('disabled',true);
}