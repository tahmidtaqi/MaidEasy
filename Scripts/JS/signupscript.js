﻿const form = document.getElementById('form');
const username = document.getElementById('username');
const name = document.getElementById('name');
const phone = document.getElementById('phoneno');
const permanentaddress = document.getElementById('permanentaddress');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const nameValue = name.value.trim();
	const phoneValue = phone.value.trim();
	const permanentaddressValue = permanentaddress.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	if (usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	if (nameValue === '') {
		setErrorFor(name, 'Name cannot be blank');
	} else {
		setSuccessFor(name);
	}

	if (permanentaddressValue === '') {
		setErrorFor(permanentaddress, 'Permanent address cannot be blank');
	} else {
		setSuccessFor(permanentaddress);
	}
	/*if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	} */
<<<<<<< Updated upstream
	
=======

>>>>>>> Stashed changes
	if (phoneValue === '') {
		setErrorFor(phone, 'Phone no. cannot be blank');
	} else if (!isPhone(phoneValue)) {
		setErrorFor(phone, 'Not a valid Phone No.');
	} else {
		setSuccessFor(phone);
<<<<<<< Updated upstream
	}  
=======
	}
>>>>>>> Stashed changes
	if (passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}

	if (password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if (passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else {
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isPhone(phone) {
	return /01d{ 9 }/.test(phone);
<<<<<<< Updated upstream
} 
=======
}
>>>>>>> Stashed changes

/*function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
  */

<<<<<<< Updated upstream
=======
/*code for autocomplete thana */

>>>>>>> Stashed changes











