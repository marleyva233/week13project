function submit( ){
	//petArray
	var cat=[{
		personality:"lazy",
		src:"http://www.pet-happy.com/files/up/2013/01/lazy-cat-not-playing.jpg",
	},
	{
		personality:"happy",
		src:"http://pm1.narvii.com/6546/ace478eadc46578c5363d4774e83d52c3da96eae_00.jpg",
	},
	{
		personality:"grouchy",
		src:"https://i.kym-cdn.com/photos/images/newsfeed/000/406/325/b31.jpg",
	},
	{
		personality:"evil",
		src:"https://media1.tenor.com/images/f7c1ea72162e56d69dc0a008bb3bd489/tenor.gif",
	}];

	var dog=[
	{
		personality:"lazy",
		src:"http://img-cdn.jg.jugem.jp/3f6/2141855/20120218_2863375.jpg",
	},
	{
		personality:"happy",
		src:"https://hips.hearstapps.com/countryliving.cdnds.net/17/51/2048x1365/gallery-1513864692-yorkshire-terrier-happy-dog.jpg",
	},
	{
		personality:"grouchy",
		src:"https://www.denherdervet.com/wp-content/uploads/2014/12/Grumpy-dog-face.jpg",
	},
	{
		personality:"evil",
		src:"https://vignette.wikia.nocookie.net/disney/images/e/e7/Demon-snow-dogs.png/revision/latest?cb=20121202081659",
	}];
	var fox=[
	{
		personality:"lazy",
		src:"https://orig00.deviantart.net/c460/f/2011/228/1/0/10362fd7dcfc422ec07283e72c199583-d46rfrb.jpg",
	},
	{
		personality:"happy",
		src:"https://orig00.deviantart.net/7c91/f/2016/143/e/f/efe5bd5c538f86cc5381c51cf4314de0-da3h3r2.jpg",
	},
	{
		personality:"grouchy",
		src:"http://cdn.attackofthecute.com/October-30-2012-01-08-02-ee.jpg",
	},
	{
		personality:"evil",
		src:"http://tomthefanboy.com/misc/Foxy.jpg",
	}];
	var rabbit=[
	{
		personality:"lazy rabbit",
		src:"http://images6.fanpop.com/image/photos/35800000/lazy-bunns-bunny-rabbits-35835093-500-357.jpg",
	},
	{
		personality:"happy rabbit",
		src:"https://dingo.care2.com/pictures/greenliving/1389/1388647.large.jpg",
	},
	{
		personality:"grouchy rabbit",
		src:"https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/29/2015/04/iStock_000018893338_Large.jpg",
	},
	{
		personality:"evil rabbit",
		src:"https://data.whicdn.com/images/61383711/large.jpg",
	}];
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
	//creating character
	var characterName=document.getElementById("characterName").value.trim();
	var character=document.getElementsByName("character");
	for (var i=0; i<character.length; i++)
		if (character[i].checked){
		var petForm=character[i].value;
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
	displayArea.innerHTML+="The pet you created is a beautiful "+ petPersonality+" " +petForm+ "!";
	displayArea.innerHTML+="<img id='petImg'>";
//next we display a picture of the character
function displayPet(array, personality, image){
	array=petForm;
	personality=petPersonality;
	image.src=petForm[i].src;
}

displayPet(petForm, document.getElementById("petImg"));
}

