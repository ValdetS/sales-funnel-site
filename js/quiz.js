// Elements
// all the progress bar imgs
const tracker1 = document.getElementById('tracker-1');
const tracker2 = document.getElementById('tracker-2');
const tracker3 = document.getElementById('tracker-3');
const tracker4 = document.getElementById('tracker-4');
const tracker5 = document.getElementById('tracker-5');

const mobileTracker1 = document.getElementById('mobile-tracker-1');
const mobileTracker2 = document.getElementById('mobile-tracker-2');
const mobileTracker3 = document.getElementById('mobile-tracker-3');
const mobileTracker4 = document.getElementById('mobile-tracker-4');
const mobileTracker5 = document.getElementById('mobile-tracker-5');

// all question cards and their inputs, and all other quiz cards
const question1 = document.getElementById('question-1');
const question1No = document.getElementById('q1-no');
const question1Yes = document.getElementById('q1-yes');

const question2 = document.getElementById('question-2');
const question2No = document.getElementById('q2-no');
const question2Yes = document.getElementById('q2-yes');

const question3 = document.getElementById('question-3');
const question3No = document.getElementById('q3-no');
const question3Yes = document.getElementById('q3-yes');

const question4 = document.getElementById('question-4');
const question4No = document.getElementById('q4-no');
const question4Yes = document.getElementById('q4-yes');

const question5 = document.getElementById('question-5');
const statesDropdown = document.getElementById('states');

const sorryMsg = document.getElementById('sorry-message');

const contactForm = document.getElementById('contact-form');
const nameField = document.getElementById('name');
const numberField = document.getElementById('number');
const emailField = document.getElementById('email');
const submitBtn = document.getElementById('submit-btn');
// hidden form elements
const roofField = document.getElementById('roof-field');
const stateField = document.getElementById('state-field');
const codeField = document.getElementById('code-field');

// JS styling
// hide all other progress bars
tracker1.style.display = 'none';
tracker2.style.display = 'none';
tracker3.style.display = 'none';
tracker4.style.display = 'none';
tracker5.style.display = 'none';

mobileTracker1.style.display = 'none';
mobileTracker2.style.display = 'none';
mobileTracker3.style.display = 'none';
mobileTracker4.style.display = 'none';
mobileTracker5.style.display = 'none';

// hide all other question cards and quiz cards
question2.style.display = 'none';
question3.style.display = 'none';
question4.style.display = 'none';
question5.style.display = 'none';

sorryMsg.style.display = 'none';
contactForm.style.display = "none";
submitBtn.style.display = 'none';

// Event Listeners
question1No.addEventListener('click', getAnswer);
question1Yes.addEventListener('click', getAnswer);

question2No.addEventListener('click', getAnswer);
question2No.addEventListener('click', updateRoofAge);
question2Yes.addEventListener('click', getAnswer);
question2Yes.addEventListener('click', updateRoofAge);

question3No.addEventListener('click', getAnswer);
question3Yes.addEventListener('click', getAnswer);

question4No.addEventListener('click', getAnswer);
question4Yes.addEventListener('click', getAnswer);

statesDropdown.addEventListener('change', getAnswer);
statesDropdown.addEventListener('change', updateCustomerState);

nameField.addEventListener('keyup', validateName);

numberField.addEventListener('keyup', validateNumber);
numberField.addEventListener('keydown', enforceFormat);
numberField.addEventListener('keyup', formatToPhone);

emailField.addEventListener('keyup', validateForm);

// Variables
let currentQuestion = 0;
let nextQuestion = 0;

let trackerCount = 0;

let roofAge = '';
// let customerState = '';
let code = '';

let randomNumber = 0;

// Functions
function getAnswer() {
    // update variables with current question number
    currentQuestion = Number(this.name) // convert value type from string to number for math operations
    nextQuestion = currentQuestion + 1;

    trackerCount = currentQuestion - 1; // progress bars will always start 1 state/count behind the current question

    // get user's answer and change quiz card dynamically
    // Note: Not all questions/cards change dynamically, for dynamic changing the card must follow the dynamic html syntax structure.
    let answer = this.value;
    if (answer === 'yes' || currentQuestion === 2) { // question 2 is an exception
        changeTracker(trackerCount);
        changeCard(currentQuestion, nextQuestion);
    }
    else if (answer === 'NA') {
        currentQuestion = this.name;
        displaySorryMsg(currentQuestion);
    }
    // Note: If any questions are added in the future and the State question is not the final one, a new final qualifier condition will need to be added, and this current one will just change the card to the next question.
    else if (answer !== 'NA' && answer !== 'yes' && answer !== 'no') {
        currentQuestion = this.name;
        changeTracker(4);
        displayContactForm(currentQuestion);
    }
    else {
        displaySorryMsg(currentQuestion);
    }
}

function changeTracker(current) {
    // dynamically set the current and next progress bar img
    let currentTrackerMobile = document.getElementById(`mobile-tracker-${current}`);
    let nextTrackerMobile = document.getElementById(`mobile-tracker-${current + 1}`);
    // style the imgs accordingly
    currentTrackerMobile.style.display = 'none';
    nextTrackerMobile.style.display = 'block';
    nextTrackerMobile.style.animationName = 'load';

    let currentTracker = document.getElementById(`tracker-${current}`);
    let nextTracker = document.getElementById(`tracker-${current + 1}`);
    // style the imgs accordingly
    currentTracker.style.display = 'none';
    nextTracker.style.display = 'block';
    nextTracker.style.animationName = 'load';
}

function changeCard(current, next) {
    // dynamically set the current and next question card
    let currentCard = document.getElementById(`question-${current}`);
    let nextCard = document.getElementById(`question-${next}`);

    // style the cards accordingly
    currentCard.style.display = 'none';
    nextCard.style.display = 'block';
    nextCard.style.animationName = 'load';

    // Note: If any questions are added in the future after the State question, create an if else statement to check if the current question is the State question or not. Inorder to dynamically/manually change the question cards.
}

function displaySorryMsg(current) {
    // check to see if the user's answer prevents them from qualifying
    if (current === 'states') { // check to see if the user is on the State question
        // if on State question manually change cards
        question5.style.display = 'none';
        sorryMsg.style.display = 'block';
        sorryMsg.style.animationName = 'load';
    }
    else {
        // if not then dynamically change cards
        let currentCard = document.getElementById(`question-${current}`);

        currentCard.style.display = 'none';
        sorryMsg.style.display = 'block';
        sorryMsg.style.animationName = 'load';
    }
}

function displayContactForm(current) {
    // check to see if the user qualifies for the last question
    if (current === 'states') {
        question5.style.display = 'none';
        contactForm.style.display = 'block';
        contactForm.style.animationName = 'load';
    }
    // Note: If any questions are added in the future, and the State question is no longer the last one. Add an else statement here to dynamically/manually change the cards.
}

function updateRoofAge() {
    let answer = this.value;
    if (answer === 'no') {
        roofAge = 'Customer roof is more than 15 years old';
    }
    else {
        roofAge = 'Customer roof is less than 15 years old';
    }
}

function updateCustomerState() {
    let answer = this.value;
    codeGenerator(answer); //pass answer as parameter since let variabel was not updating for some reason
    // customerState = answer;
}

function codeGenerator(stateValue) {
    // generate a random code for the user
    randomNumber = Math.floor(Math.random() * 20) + 5;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < randomNumber; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    updateHiddenForm(stateValue); //passing State question answer onto the form function
}

function updateHiddenForm(stateValue) {
    roofField.value = roofAge;
    stateField.value = stateValue;
    codeField.value = code;
    console.log(roofAge, stateValue, code);
}

function validateName() {
    const nameRegex = /^[a-zA-Z\s]+$/
    let name = nameField.value;
    let nameTest = nameRegex.test(name);
    if (nameTest === false) {
        nameField.style.borderColor = '#e40707';
    }
    else {
        nameField.style.borderColor = '#00a16b';
    }
}

function validateNumber() {
    const numberRegex = /^[(][\d]{3}[)][\s]{1}[\d]{3}[-][\d]{4}$/;
    let number = numberField.value;
    let numberTest = numberRegex.test(number);
    if (numberTest === false) {
        numberField.style.borderColor = '#e40707';
    }
    else {
        numberField.style.borderColor = '#00a16b';
    }
}

function isNumericInput(event) {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
    );
}

function isModifierKey(event) {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        (
            // Allow Ctrl/Command + A,C,V,X,Z
            (event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
}

function enforceFormat(event) {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if (!isNumericInput(event) && !isModifierKey(event)) {
        event.preventDefault();
    }
}

function formatToPhone(event) {
    if (isModifierKey(event)) { return; }

    const input = event.target.value.replace(/\D/g, '').substring(0, 10); // First ten digits of input only
    const areaCode = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);

    if (input.length > 6) { event.target.value = `(${areaCode}) ${middle}-${last}`; }
    else if (input.length > 3) { event.target.value = `(${areaCode}) ${middle}`; }
    else if (input.length > 0) { event.target.value = `(${areaCode}`; }
}

function validateForm() {
    // validate whole form and reveal submit btn in order to post form without errors
    const nameRegex = /^[a-zA-Z\s]+$/;
    const numberRegex = /^[(][\d]{3}[)][\s]{1}[\d]{3}[-][\d]{4}$/;
    const emailRegex = /^[a-zA-Z\d\._]+@[a-zA-Z\d\._]+[\.][a-zA-Z\d\.]{2,3}$/;
    let name = nameField.value;
    let number = numberField.value;
    let email = emailField.value;

    let nameTest = nameRegex.test(name);
    let numberTest = numberRegex.test(number);
    let emailTest = emailRegex.test(email);

    if (nameTest === true && numberTest === true && emailTest === true) {
        submitBtn.style.animationName = 'load';
        submitBtn.style.display = 'block';
        emailField.style.borderColor = '#00a16b';
    }

    if (emailTest === false) {
        submitBtn.style.display = 'none';
        emailField.style.borderColor = '#e40707';
    }
}

