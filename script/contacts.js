let validate = () => {

	// Validation for name
	let name = document.getElementById("firstName")
	if(name.value.length !== 0){
		// field is not empty
		name.classList = "form-control"
		document.getElementById('nameValidation').classList = "d-none text-danger"
	} else {
		// field is empty
		name.classList = "form-control is-invalid"
		document.getElementById('nameValidation').classList = "text-danger"
	}

	// Validation for email
	let email = document.getElementById("email")
	if(email.value.length !== 0){
		// field is not empty
		email.classList = "form-control"
		document.getElementById('emailValidation').classList = "d-none text-danger"
	} else {
		// field is empty
		email.classList = "form-control is-invalid"
		document.getElementById('emailValidation').classList = "text-danger"
	}

	// Validation for subject
	let subject = document.getElementById("subject")
	if(subject.value.length !== 0){
		// field is not empty
		subject.classList = "form-control"
		document.getElementById('subjectValidation').classList = "d-none text-danger"
	} else {
		// field is empty
		subject.classList = "form-control is-invalid"
		document.getElementById('subjectValidation').classList = "text-danger"
	}

	// Validation for description
	let description = document.getElementById("subjectDescription")
	if(description.value.length > 50){		
		// field is more than 50
		description.classList = "form-control is-invalid";
		document.getElementById('descriptionValidation').classList = "text-danger";

	} else if (description.value.length !== 0){
		// field is not empty
		description.classList = "form-control"
		document.getElementById('descriptionValidation').classList = "d-none text-danger";
	}
	else {
		// field is empty
		description.classList = "form-control is-invalid";
		document.getElementById('descriptionValidation').classList = "text-danger";
	}


}