const sessionObj = {
  name: '',
  email: '',
  message: '',
};

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const msgInput = document.getElementById('msg');

nameInput.addEventListener('input', () => {
  sessionObj.name = nameInput.value;
  localStorage.setItem('data', JSON.stringify(sessionObj));
});

emailInput.addEventListener('input', () => {
  sessionObj.email = emailInput.value;
  localStorage.setItem('data', JSON.stringify(sessionObj));
});

msgInput.addEventListener('input', () => {
  sessionObj.message = msgInput.value;
  localStorage.setItem('data', JSON.stringify(sessionObj));
});
