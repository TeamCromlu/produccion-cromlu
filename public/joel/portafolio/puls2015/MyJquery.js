var $form= $('#formulario'),
	$titulo= $('#titulo'),
	$url= $('#url'),
	$button= $('#mostrar-form'),
	$list= $('#contenido'),
	$post =$('.item').first();

if(localStorage.getItem('autosave'))
{
	 $titulo.val(sessionStorage.getItem('titulo'));
	 $url.val(sessionStorage.getItem('url'));
}


var id=setInterval(function(){
	sessionStorage.setItem('titulo',$titulo.val());
	sessionStorage.setItem('url',$url.val());	
},1000);

function mostrarFormulario()
{
	$form.slideToggle();
	$list.slideToggle();
	return false;
	// Al retornarlo false evita el scroll de la pagina
	// del link original
	// SlideToggles es que lo hace oculto o muestra
}

function agregarPost()
{
	var url= $url.val(),
		titulo= $titulo.val(),
		$clone= $post.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href',url);

	$clone.hide();

	$list.prepend($clone);
	// con $list.append($clone); se agrega el post al final
	mostrarFormulario();
	$titulo.val('');
	$url.val('');
	$clone.fadeIn();

	return false;
}
// EVENTOS
$button.click(mostrarFormulario);
$form.on('submit',agregarPost);



