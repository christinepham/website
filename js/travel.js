angular.module('xtiney').controller('travel', function(){
	var cities = [
		['barca', 41.391099, 2.165760, '../img/euro-flags/png/16/Spain.png'],
		['bern/lucerne/zurich', 46.753028, 8.123503, '../img/euro-flags/png/16/Switzerland.png'],
		['brussels', 50.844333, 4.343115, '../img/euro-flags/png/16/Belgium.png'],
		['dublin', 53.553739, -6.341240, '../img/euro-flags/png/16/Ireland.png'],
		['edinburgh', 55.945516, -3.188820, '../img/euro-flags/scotland.png'],
		['florence/milan/rome/venice', 43.519444, 12.324123, '../img/euro-flags/png/16/Italy.png'],
		['lisbon', 38.726964, -9.140459, '../img/euro-flags/png/16/Portugal.png'],
		['london', 51.508742, -0.120850, '../img/euro-flags/png/16/United-kingdom.png'],
		['lund', 55.699425, 13.198576, '../img/euro-flags/png/16/Sweden.png'],
		['paris', 48.885513, 2.328968, '../img/euro-flags/png/16/France.png'],
		['prague', 50.360793, 15.673441, '../img/euro-flags/png/16/Czech-republic.png']
	];

	function initialize() {
		var mapProp = {
		  center: {lat: 48.727267, lng: 8.713955},
		  zoom: 4,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

		for(var i = 0; i < cities.length; i++) {
			var flags = cities[i];
			var marker = new google.maps.Marker({
				position: {lat: flags[1], lng: flags[2]},
	      map: map,
	      icon: flags[3],
	      title: flags[0] 
			});
		} 

		marker.setMap(map);	
	}

	google.maps.event.addDomListener(window, 'load', initialize);
});
