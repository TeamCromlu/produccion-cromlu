$(document).ready(main);
$(document).ready(adios);

var contador = 1;

function main(){
	$(".icon_menu").click(function(){
		//$("nav").toggle();
		if(contador==1){
			$("nav").animate({
				left:"0"
			});
			contador=0;
		}
		else{
			contador=1;
			$("nav").animate({
				left:"-100%"
			})
		}
	});
};

function adios(){
	$('.nav__li').click(function (){
		if (contador==0) {
			contador = 0;
			$('nav').animate({
				left:'-100%'
			});
			contador = 1;
		}
	});
};