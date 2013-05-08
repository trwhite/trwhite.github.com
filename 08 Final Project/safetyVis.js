$(function() {
	var mapOptions = {
        center: new google.maps.LatLng(42.3583,-71.0603 ),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map($("#map-canvas")[0],mapOptions);
      
 	var crimeMarkers = [];
	
	console.log(crimes);
		
	var i = 0;
	while(i < crimes.data.length) { 
	var crime = crimes.data[i];
	
	var x = parseFloat(crime[34]);
	var y = parseFloat(crime[35]);
	
	var lon = (x-764440.9182)*0.000003501335749 + -71.0968157;
	var lat = (y-2939425.52)*0.00000295309965022 + 42.310838;
	
	var marker = new google.maps.Marker({
    	position: new google.maps.LatLng(lat,lon),
        title: "Crime",
        map: map
    });    

       crimeMarkers.push(marker);
          
    	i++;   
	}	

    console.log(hospitals.meta);
    console.log(hospitals.data);

  var markers = [];
	
    
    var i = 0;
    while(i < hospitals.data.length) { 
      var hospital = hospitals.data[i];

      (function(hospital) {
      var lon = parseFloat(hospital[14][2]);
      var lat = parseFloat(hospital[14][1]);

    var hospitalIcon = {url: 'Images/hospital.png',
    					size: new google.maps.Size(71, 71),
    					origin: new google.maps.Point(0, 0),
    					anchor: new google.maps.Point(17, 34),
    					scaledSize: new google.maps.Size(17, 32)
    					};

      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat,lon),
          title: "MassArt",
          icon: hospitalIcon,
          map: map
      });

      markers.push(marker);
    
    var contentString = '<div id="content">'+
    	'<div id="siteNotice">'+
    	'<div id="bodyContent">'+ hospital[8] +
    	'</div>'+
    	'</div>';
    	
    var infowindow = new google.maps.InfoWindow({
    	content: contentString
    	});
    	
    google.maps.event.addListener(marker,"click",function(){
    infowindow.open(map,marker);
    });
      }(hospital));

    	i++;   
	}
	
	var visible = true;
     $("#whitebox-one").click(function () {
         visible = !visible; // this toggles between true and false

         for (var i = 0; i < markers.length; i++ ) {
          // loop over all the markers and either add them to the map or remove them
          markers[i].setMap(visible ? map : null);  
       }
    });
    
    var crime = true;
     $("#whitebox-two").click(function () {
         crime = !crime; // this toggles between true and false

         for (var i = 0; i < crimeMarkers.length; i++ ) {
          // loop over all the markers and either add them to the map or remove them
          crimeMarkers[i].setMap(crime ? map : null);  
       }
    });
    
});
    