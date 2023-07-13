// Variable dump
let timer1 = document.querySelector('.timer1');
let button1 = document.querySelector('.start1');
let timer2 = document.querySelector('.timer2');
let button2 = document.querySelector('.start2');
let timer3 = document.querySelector('.timer3');
let button3 = document.querySelector('.start3');
let timer4 = document.querySelector('.timer4');
let button4 = document.querySelector('.start4');
let timerInterval1, timerInterval2, timerInterval3, timerInterval4; // Variable to store the timer interval ID

// Arrays to define the types of workouts
const chestExercise = ['Pushups', 'Bench Press', 'Incline Dumbbell Press', 'Dumbbell Flys', 'Dips'];
const backExercise = ['Pull-ups', 'Deadlifts', 'Bent Over Rows', 'Lat Pulldowns', 'Seated Cable Rows'];
const shoulderExercise = ['Overhead Press', 'Dumbbell Shoulder Press', 'Arnold Press', 'Lateral Raises', 'Front Raises'];
const legExercise = ['Squats', 'Lunges', 'Deadlifts', 'Leg Press', 'Calf Raises'];

// Action listeners to make the buttons work
button1.addEventListener('click', startWorkout.bind(null, chestExercise, timer1, button1));
button2.addEventListener('click', startWorkout.bind(null, backExercise, timer2, button2));
button3.addEventListener('click', startWorkout.bind(null, shoulderExercise, timer3, button3));
button4.addEventListener('click', startWorkout.bind(null, legExercise, timer4, button4));

// Function to start the workout
function startWorkout(exercises, timerElement, buttonElement) {
  let exerciseIndex = 0;
  let duration = 45; // Duration in seconds

  // Clear any existing timer interval
  clearInterval(timerInterval1);
  clearInterval(timerInterval2);
  clearInterval(timerInterval3);
  clearInterval(timerInterval4);

  // Function to update the timer display
  const updateTimer = () => {
    let minutes = parseInt(duration / 60, 10);
    let seconds = parseInt(duration % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerElement.textContent = minutes + ':' + seconds;
  };

  // Function to start the next exercise
  const startNextExercise = () => {
    // Increment exercise index
    exerciseIndex++;

    if (exerciseIndex < exercises.length) {
      // Update exercise name for the next exercise
      timerElement.previousElementSibling.textContent = exercises[exerciseIndex];

      // Reset the duration for the next exercise
      duration = 45;

      // Start the timer for the next exercise after a 5-second delay
      setTimeout(startTimer, 5000);
    } else {
      // Reset the timer and show "Start" button
      timerElement.textContent = 'Start';
      buttonElement.disabled = false;
    }
  };

  // Function to start the timer for the current exercise
  const startTimer = () => {
    updateTimer();

    // Decrement duration
    duration--;

    if (duration < 0) {
      // Start the next exercise
      startNextExercise();
    }
  };

  // Disable the button to prevent multiple clicks
  buttonElement.disabled = true;

  // Update exercise name for the first exercise
  timerElement.previousElementSibling.textContent = exercises[exerciseIndex];

  // Start the timer
  startTimer();

  // Set the timer interval for the workout
  if (timerElement === timer1) {
    timerInterval1 = setInterval(startTimer, 1000);
  } else if (timerElement === timer2) {
    timerInterval2 = setInterval(startTimer, 1000);
  } else if (timerElement === timer3) {
    timerInterval3 = setInterval(startTimer, 1000);
  } else if (timerElement === timer4) {
    timerInterval4 = setInterval(startTimer, 1000);
  }
}
