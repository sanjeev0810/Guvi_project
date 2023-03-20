// Validation code for login form
const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
// Add an event listener to the form's submit event
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form inputs
  const usernameInput = document.querySelector('#username');
  const emailInput = document.querySelector('#email');
  const mobileInput = document.querySelector('#mobile');
  const passwordInput = document.querySelector('#password');
  const confirmPasswordInput = document.querySelector('#confirm_password');

  // Validate the form inputs
  if (!usernameInput.value) {
    alert('Please enter a username.');
    return;
  }

  if (!emailInput.value) {
    alert('Please enter an email.');
    return;
  }

  if (!mobileInput.value) {
    alert('Please enter a mobile number.');
    return;
  }

  if (!passwordInput.value) {
    alert('Please enter a password.');
    return;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Passwords do not match.');
    return;
  }

  // Submit the form
  form.submit();
});
