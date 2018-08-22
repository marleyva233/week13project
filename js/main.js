function submit( ){
	//collecting data
	var userName=document.getElementById("userName").value.trim().toUpperCase();
	var lastName=document.getElementById("lastName").value.trim().toUpperCase();
	var email=document.getElementById("email").value.trim( );
	var regEx=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
	if (regEx.test(email)===false){
		alert("Please enter a valid email address.");
		return false;
	};
	var phoneNumber=document.getElementById("phoneNumber").value.trim().toString();
		if(phoneNumber.length<10){
			alert("Please enter a valid phone number!");
			return false;
		};
	//creating game character
	var characterName=document.getElementById("characterName").value.trim();
	var character=document.getElementsByName("character");
	for (var i=0; i<character.length; i++)
		if (character[i].checked){
		var petForm=character[i].value;
		break;
	}
	var color=document.getElementsByName("color");
	for (var i=0; i<color.length; i++)
		if (color[i].checked){
		var petColor=color[i].value;
		break;
	}
	var personality=document.getElementsByName("personality");
	for (var i=0; i<personality.length; i++)
		if (personality[i].checked){
		var petPersonality=personality[i].value;
		break;
	}

//clearing the first div by using display none
document.getElementById("createAccount").style.display="none";
//creating html to display data
var displayArea=document.getElementById("results");
	displayArea.innerHTML="<h1>Welcome to aniWorld &trade;!</h1><p>Name: "+userName+ "</p>";
	displayArea.innerHTML+="<p>Last Name: "+ lastName+ "</p>"+ "<p>Email: "+ email+ "</p>"+ "<p>Phone Number: "+phoneNumber+ "</p>";
	displayArea.innerHTML+="<p>Character Name: "+ characterName+ "</p>";
	displayArea.innerHTML+="The pet you created is a beautiful "+ petPersonality+" "+petColor+" " +petForm+ "!";
//next we display a picture of the character
}

