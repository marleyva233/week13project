var pets = [];
function pet(pet, lazySrc, happySrc, grouchySrc, evilSrc, id) {
	this.type = pet.value;
	this.lazy = lazySrc;
	this.happy = happySrc;
	this.grouchy = grouchySrc;
	this.evil = evilSrc;
	this.id = id;
	pets.push(this);
}
new pet(cat, "img/lazycat.jpg", "img/happycat.jpg", "img/grouchycat.jpg", "img/evilcat.gif", 0);
new pet(dog, "img/lazydog.jpg", "img/happydog.jpg", "img/grouchydog.jpg", "img/evildog.png", 1);
new pet(fox, "img/lazyfox.jpg", "img/happyfox.jpg", "img/grouchyfox.jpg", "img/evilfox.jpg", 2);
new pet(rabbit, "img/lazyrabbit.jpg", "img/happyrabbit.jpg", "img/grouchyrabbit.jpg", "img/evilrabbit.jpg", 3);
function submit() {
	var errors= [];
	//collecting data
	var inputs = document.getElementsByTagName("input");
	for (j = 0; j < inputs.length; j++) {
		inputs[j].classList.add("correct");
	}
	var span = document.getElementsByTagName("span");
	for (k = 0; k < span.length; k++) {
		span[k].classList.add("correct");
	}
	var userName = document.getElementById("userName").value.replace(/[^A-Z]/gi, "");
	var lastName = document.getElementById("lastName").value.replace(/[^A-Z]/gi, "");
	var email = document.getElementById("email").value.trim();
	var regEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
	var phoneNumber = document.getElementById("phoneNumber").value.replace(/[^0-9]/g, "").toString();
	var characterName = document.getElementById("characterName").value.replace(/[^A-Z]/gi, "");
	var character = document.querySelector("input[name=character]:checked");
	var personality = document.querySelector("input[name=personality]:checked");
	// checking data
	if (userName.length < 1) {
		errors.push("userName");
	} 
	if (lastName.length < 1) {
		errors.push("lastName");
	}
	if (regEx.test(email) === false) {
		errors.push("email");
	}
	if(phoneNumber.length < 10) {
		errors.push("phoneNumber");
	}
	if(characterName.length < 1) {
		errors.push("characterName");
	}
	if(character == null) {
		errors.push("character");
	}
	if(personality == null) {
		errors.push("personality");
	}
	if (errors.length  === 0) {
 		// processing data
		document.getElementById("createAccount").classList.add("hide");
		document.getElementById("results").classList.remove("hide");
		//creating html to display data
		var displayArea = document.getElementById("results");
			displayArea.innerHTML = "<h1>Welcome to aniWorld &trade;!</h1><h6>Name: " + userName + "</h6>";
			displayArea.innerHTML += "<h6>Last Name: " + lastName + "</h6>" + "<h6>Email: " + email + "</h6>"+ "<h6>Phone Number: "+phoneNumber+ "</h6>";
			displayArea.innerHTML += "<h6>Character Name: " + characterName + "</h6>";
			displayArea.innerHTML += "<h6>The pet you created is a beautiful " + personality.value + " " + character.value + "!</h6>";
		// testing image sources
		var petSrc;
		switch (character.value) {
			case "cat":
			petSrc = pets[0][personality.value];
			break;
			case "dog":
			petSrc = pets[1][personality.value];
			break;
			case "fox":
			petSrc = pets[2][personality.value];
			break;
			case "rabbit":
			petSrc = pets[3][personality.value];
		}
		// ending tests
			displayArea.innerHTML += "<div class='petImg'><img src='" + petSrc + "' alt='" + personality.value + " " + character.value + "' id='petImg'></div>";
	} else {
		for (var i = 0; i < errors.length; i++) {
			document.getElementById(errors[i]).classList.remove("correct");
			document.getElementById(errors[i]).classList.add("wrong");
		} 
	}
}