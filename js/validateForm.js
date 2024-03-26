// validation.js


var selectins = document.getElementById("selectins")
var vis=document.getElementById('vis')
var status="non"
var	dateofins=document.getElementById('dateofins')
var	mmbf=document.getElementById('mmbf')
var status="non"
selectins.addEventListener('change',()=>{
	if(selectins.value==="oui"){
		vis.style.visibility="visible"
		vis.style.height="auto"
     	status="oui"
	}else{
		vis.style.visibility="hidden"
		vis.style.height="0"

	}
})




function validateContactForm(event) {
	event.preventDefault() // Empêcher le comportement de soumission par défaut du formulaire
	var fullName = document.getElementById("inputFullName").value
	var email = document.getElementById("inputEmail").value
	var message = document.getElementById("formMessage").value
	var cin = document.getElementById("cin").value
	var nbrphone = document.getElementById("nbrphone").value

  
   console.log(mmbf)
	if (!fullName || !email || !message || !cin || !nbrphone) {
		// Afficher un message Toastr d'erreur pour les champs vides
		toastr.error("Veuillez remplir tous les champs.")
	} else {
		sendContactPostRequest({
			status,
			dateofins,
			mmbf,
			fullName,
			cin,
			nbrphone,
			email,
			message,
		})
	}
}
async function sendContactPostRequest(options) {
	const message = `Un nouveau message
        Le Nom complet : ${options.fullName} 
        Status: ${options.status} 
		date : ${options.dateofins.value}
		Memebre de famille : ${options.mmbf.value}
		CIN : ${options.cin}
		Numéro de telephone : ${options.nbrphone}
        Adresse e-mail :${options.email}  
        Message : ${options.message}
    `
	try {
		const response = await fetch("http://localhost:3000/api/v1/rendezs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ message }),
		})

		if (!response.ok) {
			document.getElementById("formSubmit").value = "SOUMETTRE"
			throw new Error("Erreur lors de l'envoi du message, veuillez réessayer.")
		}

		toastr.success(
			"Merci de nous avoir contactés. Nous vous recontacterons bientôt."
		)
		document.getElementById("formSubmit").value = "SOUMETTRE"
	} catch (error) {
		document.getElementById("formSubmit").value = "SOUMETTRE"
		toastr.error("Erreur lors de l'envoi du message, veuillez réessayer.")
	}
}

function validateForm(event) {
	event.preventDefault() // Empêcher le comportement de soumission par défaut du formulaire
	// change the value of the submit button to please wait

	var fullName = document.getElementById("inputFullName").value
	var phoneNumber = document.getElementById("inputNumber").value
	var email = document.getElementById("inputEmail").value
	var selectValue = document.getElementById("FormSelect").value
	var dateValue = document.getElementById("formDate").value
	var message = document.getElementById("formMessage").value

	// Valider les champs (ajoutez votre logique de validation ici)
	if (
		!fullName ||
		!phoneNumber ||
		!email ||
		!selectValue ||
		!dateValue ||
		!message
	) {
		// Afficher un message Toastr d'erreur pour les champs vides
		toastr.error("Veuillez remplir tous les champs.")
	} else {
		// Afficher un message Toastr de succès pour une validation réussie
		// Effectuer une requête POST vers le serveur avec le message
		sendPostRequest({
			fullName,
			phoneNumber,
			email,
			selectValue,
			dateValue,
			message,
		})
	}
}

async function sendPostRequest(options) {
	selectedValue = options.selectValue
	const message = `Un nouveau rendez-vous pour : ${selectedValue.trim()} 
        Le Nom complet : ${options.fullName} 
        Numéro de téléphone : ${options.phoneNumber}
        Adresse e-mail :${options.email}  
        La date sélectionnée : ${options.dateValue}
        Message : ${options.message}

    `
	try {
		document.getElementById("formSubmit").value = "...."

		const response = await fetch("http://localhost:3000/api/v1/rendezs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ message }),
		})

		if (!response.ok) {
			document.getElementById("formSubmit").value = "SOUMETTRE"
			throw new Error("Erreur lors de l'envoi du message, veuillez réessayer.")
		}

		toastr.success(
			"Merci de nous avoir contactés. Nous vous recontacterons bientôt."
		)
		document.getElementById("formSubmit").value = "SOUMETTRE"
	} catch (error) {
		document.getElementById("formSubmit").value = "SOUMETTRE"
		toastr.error("Erreur lors de l'envoi du message, veuillez réessayer.")
	}
}
