const form = document.getElementById('form');
const email = document.getElementById('email');

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const validateInputs = () => {
  const mailformat = /^[a-z0-9_!#$%&'*+=?`{|}~^.-]+@[a-z0-9.-]+$/gm;
  if (email.value.match(mailformat)) {
    form.submit();
  } else {
    setError(email, 'The form is not sent, Email accept lowerCase only');
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  validateInputs();
});
