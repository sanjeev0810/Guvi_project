// Validation code for login form
const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// Get the values from the inputs
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();

	if(usernameValue === '') {
		// Show error message for username
		setErrorFor(username, 'Username cannot be blank');
	} else {
		// Show success message for username
		setSuccessFor(username);
	}

	if(passwordValue === '') {
		// Show error message for password
		setErrorFor(password, 'Password cannot be blank');
	} else {
		// Show success message for password
		setSuccessFor(password);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');

	// Add error message and error class
	small.innerText = message;
	formControl.className = 'form-control error';
}

function setSuccessFor(input) {
	const formControl = input.parentElement;

	// Remove error class
	formControl.className = 'form-control success';
}
