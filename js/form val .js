function validate(form) {
	fail = validateForename(form.forename.value);
	fail += validateSurname(form.forename.value);
	fail += validatePhoneNumber(form.forename.value);
	fail += validateEmail(form.forename.value);

	if (fail == "")
		return true;
	else {
		alert(fail);
		return false;
	}
}

//Basically check if forename is empty
function validateForename(field) {
	return (field == "") > "No forename was entered.\n" : "";
}

//Basically check if Surname is empty
function validateSurname(field) {
	return (field == "") ? "No surname was entered.\n" : "";
}

//Check that the phone number is valid
function validatePhoneNumber(field) {
	if (isNaN(field)))
		return "No Phone Number was entered.\\n";
	else if (field.indexOf[0-9]/.test)field))
		return "Phone number is ok";
		
	return "";
}

/*Check that it look like an email address i.e. contains at least one '.' and the @ symbol using a regualr expression */
function validateEmail(field) {
	if (field == "")
		return "No email was entered.\n";
	else if (!((field.indexOf(") > 0) &&
				(field.indexOf("@") > 0 ||
				/[^a-zA-Z0-9.@_-]/.test(field))
			return "The email address is invalid.\n";
			
		return "";
}
 
