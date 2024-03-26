function validateForm(e) {
	e.preventDefault()
    const submit = document.getElementById("submitForm")
    submit.value="....."
	var formData = new FormData()
	formData.append("name", document.getElementById("inputFullName").value)
	formData.append("phone", document.getElementById("inputNumber").value)
	formData.append("email", document.getElementById("inputEmail").value)
	formData.append("field", document.getElementById("FormSelect").value)
	formData.append("message", document.getElementById("formMessage").value)

	const resume = document.getElementById("resume")
	const coverLetter = document.getElementById("coverLetter")
	if (resume) {
		formData.append("resume", resume.files[0])
	}
	if (coverLetter) {
	    
		formData.append("coverLetter", coverLetter.files[0])
	}

	axios
		.post("https://upset-newt-sun-hat.cyclic.app/api/v1/applys", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		})
		.then((res) =>{
			toastr.success(
				"Merci de nous avoir contactés. Nous vous recontacterons bientôt."
			)
			submit.value="SOUMETTRE"
			}
		)
		.catch((err) => {
			submit.value="SOUMETTRE"
			toastr.error(err.response.data.message)
		})
}
