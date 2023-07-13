//*********************VARIABLE DUMP*************************************
let timer1 = document.querySelector('.timer1');
let button1 = document.querySelector('.start1');
let startButton = document.createElement("button");
let timerInterval; // Variable to store the timer interval ID
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
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    minutes = parseInt(duration / 60, 10);
    seconds = parseInt(duration % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer.innerHTML = minutes + ":" + seconds;

    if (--duration < 0) {
      clearInterval(timerInterval);

      // Create a new start button element
      
      startButton.innerText = "Start";
      startButton.classList.add("start1");

      // Replace the timer element with the start button
      timer.replaceWith(startButton);

      // Add event listener to the new start button
      startButton.addEventListener("click", startButtonClick);

    }
  }, 1000);
});

//function to make the start button work again
function startButtonClick() {
  // Restart the timer by triggering the button click
  button1.click();
  startButton.replaceWith(timer1);
}
