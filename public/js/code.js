$(document).ready(main);
$(document).ready(adiosMenu);
// $(document).ready(validarFormulario);


var contador = 1;

function main(){
	$('.Header__icon-menu').click(function (){
		if (contador==1) {
			$('.Header__nav').animate({
				left:'0'
			});
			contador = 0;
		}
		else {
			contador = 1;
			$('.Header__nav').animate({
				left:'-100%'
			});
		}
	});
};


function adiosMenu(){
	$('.Header__botones').click(function (){
		if (contador==0) {
			contador = 0;
			$('.Header__nav').animate({
				left:'-100%'
			});
			contador = 1;
		}
	});
};



// function validarFormulario(){
//   var nombre = document.forms["form1"]["nombre"].value;
//   var email = document.forms["form1"]["email"].value;
  
//   if(nombre == "" && email == ""){
//     document.getElementById("name").style.border="1px solid red";
//     document.getElementById("mail").style.border="1px solid red";
//     error = true;
//   }
// }