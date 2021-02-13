const form = document.querySelector('.answer');
const btn = document.querySelector('.attempts');
const tryHtml = document.querySelector('#tries');
const info = document.querySelector('.info');

let answer; // For storing the user enteres answer.
let tries = 6;
const correctAns = Math.floor((Math.random() * 100) + 1); // Returns random number between 1 and 100.

// User submits.
// We call function with our entered value -> Function checks how many tries are remaining. If 0 or less, we tell user they lost.
// And put a button to reset.
// If correct,alert.
function resetCounter() {
    // Delete button.
    // Reset tries to 6.
    tries = 6;
    form.guess.disabled = false; // Re-enables the input field.
    info.style.setProperty('display', 'none');
};

function checkAnswer(ans) {
    if ( tries <= 1){ // Make sure user has only 6 chances.
        info.style.setProperty('display', 'none');
        btn.innerText = 'You have lost the game';
        form.guess.disabled = true; // Disables input on the answer field.
        return;
    }

    tries--;
    tryHtml.innerHTML = tries; // Change the value of tries remaining.
    if(ans < correctAns){
        console.log('Value too low', correctAns);
        info.innerHTML = "Your guess was too <span class=\"text\"> LOW </span>";
        info.style.setProperty('display', 'block');
    } else if ( ans > correctAns){
        info.innerHTML = "Your guess was too <span class=\"text\"> HIGH </span>";
        info.style.setProperty('display', 'block');
    } else {
        info.innerHTML = "<span class =\"text\"> CONGRATULATIONS!!!</span> Your answer was <span class =\"text\"> CORRECT!!!</span>";
        info.style.setProperty('display', 'block');
    }
};

form.addEventListener('submit', e => {
    e.preventDefault();

    answer = form.guess.value;
    checkAnswer(answer); // Function to check answer.

    form.reset();
});


