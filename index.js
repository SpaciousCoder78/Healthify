//*********************VARIABLE DUMP*************************************
//########################Timer 1#######################################
let timer1 = document.querySelector('.timer1');
let button1 = document.querySelector('.start1');
let startButton1 = document.createElement("button");
//########################Timer 2#######################################
let timer2 = document.querySelector(".timer2");
let button2= document.querySelector(".start2");
let startButton2 = document.createElement("button");
//########################Timer 3#######################################
let timer3= document.querySelector(".timer3");
let button3 = document.querySelector(".start3");
let startButton3 = document.createElement("button");
//########################Timer 4#######################################
let timer4=document.querySelector(".timer4");
let button4= document.querySelector(".start4");
let startButton4 = document.createElement("button");
let timerInterval1,timerInterval2,timerInterval3,timerInterval4; // Variable to store the timer interval ID
//*********************************************************************** */

//arrays to define the types of workout
const chestExercise = ['Pushup', 'Bench Press', 'Incline Dumbell Press', 'Dumbel Flys', 'Dips'];
const backExercise = ['Pull-ups', 'Deadlifts', 'Bent Over Rows', 'Lat Pulldowns', 'Seated Cable Rows'];
const legExercise = ['Squats', 'Lunges', 'Deadlifts', 'Leg Press', 'Calf Raises'];
const absExercise = ['Crunches', 'Plank', 'Russian Twists', 'Leg Raises', 'Bicycle Crunches'];
const shoulderExercise = ['Overhead Press', 'Dumbbell Shoulder Press', 'Arnold Press', 'Lateral Raises', 'Front Raises'];

//************************************************************************ */
//action listeners to make the buttons actually work
//############################button 1##############################
button1.addEventListener("click", () => {
  let duration = 45; // Duration in seconds
  let minutes, seconds;

  // Clear any existing timer interval
  clearInterval(timerInterval1);

  timerInterval1 = setInterval(() => {
    minutes = parseInt(duration / 60, 10);
    seconds = parseInt(duration % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer1.innerHTML = minutes + ":" + seconds;

    if (--duration < 0) {
      clearInterval(timerInterval1);

      // Create a new start button element
      
      startButton1.innerText = "Start";
      startButton1.classList.add("start1");

      // Replace the timer element with the start button
      timer1.replaceWith(startButton1);

      // Add event listener to the new start button
      startButton1.addEventListener("click", startButtonClick1);

    }
  }, 1000);
});

//function to make the start button work again
function startButtonClick1() {
  // Restart the timer by triggering the button click
  button1.click();
  startButton1.replaceWith(timer1);
}
//***************************************************************************** */
//############################Button 2#########################
button2.addEventListener("click", () => {
  let duration = 45; // Duration in seconds
  let minutes, seconds;

  // Clear any existing timer interval
  clearInterval(timerInterval2);

  timerInterval2 = setInterval(() => {
    minutes = parseInt(duration / 60, 10);
    seconds = parseInt(duration % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer2.innerHTML = minutes + ":" + seconds;

    if (--duration < 0) {
      clearInterval(timerInterval2);

      // Create a new start button element
      
      startButton2.innerText = "Start";
      startButton2.classList.add("start2");

      // Replace the timer element with the start button
      timer2.replaceWith(startButton2);

      // Add event listener to the new start button
      startButton2.addEventListener("click", startButtonClick2);

    }
  }, 1000);
});

//function to make the start button work again
function startButtonClick2() {
  // Restart the timer by triggering the button click
  button2.click();
  startButton2.replaceWith(timer2);
}

//******************************************************************************************************** */
//###############################Button 3##################################
button3.addEventListener("click", () => {
  let duration = 45; // Duration in seconds
  let minutes, seconds;

  // Clear any existing timer interval
  clearInterval(timerInterval3);

  timerInterval3 = setInterval(() => {
    minutes = parseInt(duration / 60, 10);
    seconds = parseInt(duration % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer3.innerHTML = minutes + ":" + seconds;

    if (--duration < 0) {
      clearInterval(timerInterval3);

      // Create a new start button element
      
      startButton3.innerText = "Start";
      startButton3.classList.add("start3");

      // Replace the timer element with the start button
      timer3.replaceWith(startButton3);

      // Add event listener to the new start button
      startButton3.addEventListener("click", startButtonClick3);

    }
  }, 1000);
});

//function to make the start button work again
function startButtonClick3() {
  // Restart the timer by triggering the button click
  button3.click();
  startButton3.replaceWith(timer3);
}

//******************************************************************************************** */
//##############################Button 4##############################
button4.addEventListener("click", () => {
  let duration = 45; // Duration in seconds
  let minutes, seconds;

  // Clear any existing timer interval
  clearInterval(timerInterval4);

  timerInterval4 = setInterval(() => {
    minutes = parseInt(duration / 60, 10);
    seconds = parseInt(duration % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer4.innerHTML = minutes + ":" + seconds;

    if (--duration < 0) {
      clearInterval(timerInterval4);

      // Create a new start button element
      
      startButton4.innerText = "Start";
      startButton4.classList.add("start4");

      // Replace the timer element with the start button
      timer4.replaceWith(startButton4);

      // Add event listener to the new start button
      startButton4.addEventListener("click", startButtonClick4);

    }
  }, 1000);
});

//function to make the start button work again
function startButtonClick4() {
  // Restart the timer by triggering the button click
  button4.click();
  startButton4.replaceWith(timer4);
}

