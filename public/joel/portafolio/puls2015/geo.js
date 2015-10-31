$(function(){
	var geo= navigator.geolocation;
	var opciones={};
	function geo_ok(posicion)
	{
		var lat	 =posicion.coords.latitude;
		var lon  =posicion.coords.longitude;
		var mapa =new Image();
		mapa.src="http://maps.googleapis.com/maps/api/staticmap?&zoom=13&size=300x300&sensor=false&center="+lat+","+lon;
	/* API DE GOOGLE STATIC MAP en google
		this de form correctly
		"http://maps.googleapis.com/maps/api/staticmap?zoom=13&size=300x300&sensor=false&center="+lat+","+lon;

		FORMAS DE VER EL MAPA EN SATELITE E HIBRIDO (satellite and hybrid)
		en http://maps.googleapis.com/maps/api/staticmap?&maptype=hybrid
		maptype=hybrid
		maptype=satellite
	*/
		$('#geo').append(mapa);

		obtenerGeoInformacion(lat,lon);
	}
	function geo_error()
	{
		console.log("Fail!! not find your ubication");
	}
	geo.getCurrentPosition(geo_ok,geo_error,opciones);

});







