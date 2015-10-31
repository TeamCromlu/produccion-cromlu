// var $btnMenu= $('#btn-menu');
// var $menu= $('#menu');
// $btnMenu.on("click",Palanca);
// function Palanca(){
// 	$menu.slideToggle();
// 	return false
// }

// $('#link').on("click", Palanca)



var $form= $('#formulario'),
	$button= $('#btn-menu'),
	$post =$('.item').first();
function mostrarFormulario()
{
	$form.slideToggle();
	return false;
	// Al retornarlo false evita el scroll de la pagina
	// del link original
	// SlideToggles es que lo hace oculto o muestra
}
// EVENTOS
$button.click(mostrarFormulario);
var $haf= $('.nav_link');
$haf.on("click",Ocultar);
function Ocultar(){
	$form.slideToggle();
}
