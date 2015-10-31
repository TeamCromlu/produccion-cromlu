$(function(){
	$(".rslides").responsiveSlides();
	// if(window.matchMedia("(max-width:768px)").matches){
	// 	alert("estoy en chiquito");
	// 	// Gest touch para dispositivos moviles
	// 	var $body= document.querySelector('body');
	// 	var body= new Hammer($body);
	// 	body.on('panright',Open);
	// 	body.on('panleft',Close);
	// }else{
	// 	alert("eres un ipad o más grande");
	// }
});
var $buttonOpen= document.getElementById('b_open');
var $buttonClose= document.getElementById('b_close');
var $Menu= document.getElementById('Menu');

$buttonOpen.addEventListener("click",Open);
function Open(){
	$Menu.classList.add('is-active');
	$buttonClose.classList.add('is-active');
	$buttonOpen.classList.remove('is-active');
}

$buttonClose.addEventListener("click",Close);
function Close(){
	$Menu.classList.remove('is-active');
	$buttonOpen.classList.add('is-active');
	$buttonClose.classList.remove('is-active');
}

