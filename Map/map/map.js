


$(document).ready(function () {
	var myLatlng = new google.maps.LatLng(43.656922, -79.380888);
	var Y_point = 43.656922;
	var X_point = -79.380888;
	var zoomLevel = 18;
	//var markerTitle = "Chipotle";
	//var markerMaxWidth = 300;



	var myLatlng = new google.maps.LatLng(Y_point, X_point);
	var mapOptions = {
		zoom: zoomLevel,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		//title: markerTitle
	});
	//var infowindow = new google.maps.InfoWindow(
	//	{
	//		content: contentString,
	//		maxWizzzdth: markerMaxWidth
	//	}
	//);
	google.maps.event.addListener(marker, 'click', function () {
		infowindow.open(map, marker);
	});
});


