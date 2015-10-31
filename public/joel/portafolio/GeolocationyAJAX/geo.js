var geo= navigator.geolocation;
var opciones={};
function geo_ok(posicion)
{
	var lat  =posicion.coords.latitude;
	var lon  =posicion.coords.longitude;
	var mapa =new Image();
	mapa.src="http://maps.googleapis.com/maps/api/staticmap?zoom=15&size=450x400&sensor=false&center="+lat+','+lon;

	$('#geo').append(mapa);
}
function geo_error()
{
	console.log("Error no encontrado");
}
geo.getCurrentPosition(geo_ok,geo_error,opciones);