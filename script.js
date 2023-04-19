const form = document.querySelector('form');
const alertMessage = document.querySelector('.error-msg');
form.addEventListener('submit', (event) => {
  const email = document.querySelector('.email');
  const emailRegularExperession = /[A-Z]/;
  event.preventDefault();
  if (!emailRegularExperession.test(email.value)) {
    form.submit();
  } else {
    alertMessage.innerText = '* Please Enter Your Email Only In Lower Case';
  }
});