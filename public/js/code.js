$(document).ready(main);
$(document).ready(adios);


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


function adios(){
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