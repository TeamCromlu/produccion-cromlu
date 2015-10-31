$(function(){
	$.get('iconitos_ya.html',function(info){
		$('#geo').append(info);
	});
});


// $(function(){
// 	$('footer').load('iconitos_ya.html');
// });
