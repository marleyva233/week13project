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
new pet(cat, "http://www.pet-happy.com/files/up/2013/01/lazy-cat-not-playing.jpg", "http://pm1.narvii.com/6546/ace478eadc46578c5363d4774e83d52c3da96eae_00.jpg", "https://i.kym-cdn.com/photos/images/newsfeed/000/406/325/b31.jpg", "https://media1.tenor.com/images/f7c1ea72162e56d69dc0a008bb3bd489/tenor.gif", 0);
new pet(dog, "http://img-cdn.jg.jugem.jp/3f6/2141855/20120218_2863375.jpg", "https://hips.hearstapps.com/countryliving.cdnds.net/17/51/2048x1365/gallery-1513864692-yorkshire-terrier-happy-dog.jpg", "https://www.denherdervet.com/wp-content/uploads/2014/12/Grumpy-dog-face.jpg", "https://vignette.wikia.nocookie.net/disney/images/e/e7/Demon-snow-dogs.png/revision/latest?cb=20121202081659", 1);
new pet(fox, "https://orig00.deviantart.net/c460/f/2011/228/1/0/10362fd7dcfc422ec07283e72c199583-d46rfrb.jpg", "https://orig00.deviantart.net/7c91/f/2016/143/e/f/efe5bd5c538f86cc5381c51cf4314de0-da3h3r2.jpg", "http://cdn.attackofthecute.com/October-30-2012-01-08-02-ee.jpg", "http://tomthefanboy.com/misc/Foxy.jpg", 2);
new pet(rabbit, "http://images6.fanpop.com/image/photos/35800000/lazy-bunns-bunny-rabbits-35835093-500-357.jpg", "https://dingo.care2.com/pictures/greenliving/1389/1388647.large.jpg", "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/29/2015/04/iStock_000018893338_Large.jpg", "https://data.whicdn.com/images/61383711/large.jpg", 3);
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
			displayArea.innerHTML = "<h1>Welcome to aniWorld &trade;!</h1><p>Name: " + userName + "</p>";
			displayArea.innerHTML += "<p>Last Name: " + lastName + "</p>" + "<p>Email: " + email + "</p>"+ "<p>Phone Number: "+phoneNumber+ "</p>";
			displayArea.innerHTML += "<p>Character Name: " + characterName + "</p>";
			displayArea.innerHTML += "<p>The pet you created is a beautiful " + personality.value + " " + character.value + "!</p>";
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
			displayArea.innerHTML += "<div class='petImg'><img src='" + petSrc + "' alt='" + personality.value + " " + character.value + "' class='petImg'></div>";
	} else {
		for (var i = 0; i < errors.length; i++) {
			document.getElementById(errors[i]).classList.remove("correct");
			document.getElementById(errors[i]).classList.add("wrong");
		} 
	}
}