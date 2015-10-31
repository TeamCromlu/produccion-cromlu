var geo=navigator.geolocation;
var opciones={};
function geo_ok(gatito)
{
	console.log(gatito);
}
function geo_error()
{
	console.log("Lo siento no encontramos tu ubicacion");
}
geo.getCurrentPosition(geo_ok,geo_error,opciones);
