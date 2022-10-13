const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', event => {
  event.preventDefault();

    validateInputs();
    
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};



const validateInputs = () => {
const emailValue = email.value.trim();

if(emailValue === '') {
  setError(email, 'Email is required');
} else if (emailValue === emailValue.toUpperCase()) {
  setError(email, 'The form is not send, Email accept lowerCase only');
} else {
  form.submit();
}
}
