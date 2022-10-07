//Welcome effect
const welcomeTittle = document.querySelector(".welcome_h1");
const welcomeTittleB = document.querySelector(".welcome_h1-b");
const welcomeP1 = document.querySelector(".welcome_p1");

let timer1 = setTimeout(()=>{
	welcomeTittle.style.transition = "margin-top 1.5s, color 1.5s, text-shadow 1.5s"

	welcomeTittle.style.marginTop = "35vh"

	welcomeTittle.style.color = "#a1a1a1"
	welcomeTittle.style.textShadow = "3px 3px black"

	welcomeTittleB.style.transition = "color 1.5s"
	welcomeTittleB.style.color = "var(--color)"

	welcomeP1.style.transition = "color 1.5s"
	welcomeP1.style.color = "#6e6e6e"
},100);

//Scrolls

const habsButton = document.getElementById("menu_habs-button");
const projButton = document.getElementById("menu_proj-button");
const contButton = document.getElementById("menu_cont-button");

habsButton.addEventListener("click",(e)=>{
	document.querySelector(".habilities").scrollIntoView();
})

projButton.addEventListener("click",(e)=>{
	document.querySelector(".projects").scrollIntoView();
})

contButton.addEventListener("click",(e)=>{
	document.querySelector(".contact").scrollIntoView();
})

//LanguageButton

const langButtonES = document.querySelector(".languagebuttonES");
const langButtonEN = document.querySelector(".languagebuttonEN");

function changeLanguageToEN() {
	document.body.style = "--color : #eb4034";
	document.querySelector(".welcome_h1").innerHTML = 'Hi! Im <b class="welcome_h1-b" >Nicolas</b>,<br> front-end developer.';
	document.querySelector(".welcome_h1-b").style.color = "var(--color)";

	document.querySelector(".welcome_p1").innerHTML = "My name is Nicolas Spadola, Im a front-end developer from Argentina and Informatics Enginering student.";

	habsButton.innerHTML = "SKILLS";
	projButton.innerHTML = "PROJECTS";
	contButton.innerHTML = "CONTACT";

	document.querySelector(".downloadcv").innerHTML = "DOWNLOAD CV";

	document.querySelector(".habilities_h2").innerHTML = "Skills";
	document.querySelector(".projects_h2").innerHTML = "Projects";
	document.querySelector(".contact_h2").innerHTML = "Contact";

	document.querySelector(".projects_p").innerHTML = "soon...";
	document.querySelector(".contact_p").innerHTML = "social";
}

function changeLanguageToES() {
	document.body.style = "--color : #0062ff";
	document.querySelector(".welcome_h1").innerHTML = 'Hola! Soy <b class="welcome_h1-b">Nicolas</b>,<br> desarrollador front-end.';
	document.querySelector(".welcome_h1-b").style.color = "var(--color)";

	document.querySelector(".welcome_p1").innerHTML = "Me llamo Nicolas Spadola, soy un desarrollador front-end de Argentina y estudiante de Ingenieria Infomatica.";

	habsButton.innerHTML = "HABILIDADES";
	projButton.innerHTML = "PROYECTOS";
	contButton.innerHTML = "CONTACTO";

	document.querySelector(".downloadcv").innerHTML = "DESCARGAR CV";

	document.querySelector(".habilities_h2").innerHTML = "Habilidades";
	document.querySelector(".projects_h2").innerHTML = "Proyectos";
	document.querySelector(".contact_h2").innerHTML = "Contacto";

	document.querySelector(".projects_p").innerHTML = "proximamente...";
	document.querySelector(".contact_p").innerHTML = "redes sociales";
}

langButtonES.addEventListener("click",(e)=>{
	changeLanguageToEN();

	langButtonEN.style.display = "inline";
	langButtonES.style.display = "none";
})

langButtonEN.addEventListener("click",(e)=>{
	changeLanguageToES();

	langButtonES.style.display = "inline";
	langButtonEN.style.display = "none";
})

//scroll mobile

const scrollMobile = document.querySelector(".expand");

scrollMobile.addEventListener("click",(e)=>{
	document.querySelector(".habilities").scrollIntoView();
})
