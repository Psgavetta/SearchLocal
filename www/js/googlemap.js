function GoogleMap(lat,lon,arr){
	
	this.initialize = function(){
	var map = showMap();
	addMarkersToMap(map);	//Second step
	addOtherMarkersToMap(map);	//Second step
	}
 
	var addMarkersToMap = function(map){
		var mapBounds = new google.maps.LatLngBounds();
		DoIt=0;
		
		var latitudeAndLongitudeOne = new google.maps.LatLng(lat,lon);
		
		var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeOne,
		map: map,
		optimized: false,
		title: 'Posizione Utente'
		});
		

		var searchCircle = new google.maps.Circle({
			fillColor: '#c0e4dd',
			strokeColor: '#f15f22',
			fillOpacity: 0.5,
			radius: 1000,
			map:map
		});  
		searchCircle.setCenter(latitudeAndLongitudeOne);	

		
		mapBounds.extend(latitudeAndLongitudeOne);
		DoIt++;


		map.fitBounds(mapBounds);
	}
	
	var addOtherMarkersToMap = function(map){
	
		var ii;
		var mapBounds = new google.maps.LatLngBounds();
		
		for(ii=0;ii<arr.lenght;ii++)
		{
			var latitudeAndLongitude = new google.maps.LatLng(arr[ii].lat,arr[ii].lon);
		
			var marker = new google.maps.Marker({
			position: latitudeAndLongitude,
			map: map,
			optimized: false
			});
			

			var searchCircle = new google.maps.Circle({
				fillColor: '#c0e4dd',
				strokeColor: '#f15f22',
				fillOpacity: 0.5,
				radius: 1000,
				map:map
			});  
			searchCircle.setCenter(latitudeAndLongitude);	

			mapBounds.extend(latitudeAndLongitude);
		}

		map.fitBounds(mapBounds);
	}
	
	var showMap = function(){
		var mapOptions = {
			zoom: 4,
			center: new google.maps.LatLng(lat,lon),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		 
		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		 
		return map;
	}
}

