let timer = document.querySelector('.timer');
let button = document.querySelector('.start');
let timerInterval; // Variable to store the timer interval ID

const chestExercise = ['Pushup', 'Bench Press', 'Incline Dumbell Press', 'Dumbel Flys', 'Dips'];
const backExercise = ['Pull-ups', 'Deadlifts', 'Bent Over Rows', 'Lat Pulldowns', 'Seated Cable Rows'];
const legExercise = ['Squats', 'Lunges', 'Deadlifts', 'Leg Press', 'Calf Raises'];
const absExercise = ['Crunches', 'Plank', 'Russian Twists', 'Leg Raises', 'Bicycle Crunches'];
const shoulderExercise = ['Overhead Press', 'Dumbbell Shoulder Press', 'Arnold Press', 'Lateral Raises', 'Front Raises'];

button.addEventListener("click", () => {
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
      let startButton = document.createElement("button");
      startButton.innerText = "Start";
      startButton.classList.add("start");

      // Replace the timer element with the start button
      timer.replaceWith(startButton);

      // Add event listener to the new start button
      startButton.addEventListener("click", startButtonClick);
    }
  }, 1000);
});

function startButtonClick() {
  // Restart the timer by triggering the button click
  button.click();
}
