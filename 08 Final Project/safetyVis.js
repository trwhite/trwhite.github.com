$(function() {
	var mapOptions = {
        center: new google.maps.LatLng(42.3583,-71.0603 ),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map($("#map-canvas")[0],mapOptions);
      

	
	console.log(crimes);
		
	var i = 0;
	while(i < crimes.data.length) { 
	var crime = crimes.data[i];
	
	var x = parseFloat(crime[34]);
	var y = parseFloat(crime[35]);
	
	var lon = (x-764440.9182)*0.000003501335749 + -71.0968157;
	var lat = (y-2939425.52)*0.00000295309965022 + 42.310838;
	
	console.log(lat);
    console.log(lon);
	
	var marker = new google.maps.Marker({
    	position: new google.maps.LatLng(lat,lon),
        title: "Crime",
        iconNam: "dollar",
        map: map
    });    
    
    
    
    	i++;   
	}	

    console.log(hospitals.meta);
    console.log(hospitals.data);

  var markers = [];

    var i = 0;
    while(i < hospitals.data.length) { 
      var hospital = hospitals.data[i];

      var lon = parseFloat(hospital[14][2]);
      var lat = parseFloat(hospital[14][1]);

      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat,lon),
          title: "MassArt",
          map: map,
      });

      markers.push(marker);
    
    var contentString = '<div id="content">'+
    	'<div id="siteNotice">'+
    	'<div id="bodyContent">'+ hospitals.data[15][8] +
    	'</div>'+
    	'</div>';
    	
    var infowindow = new google.maps.InfoWindow({
    	content: contentString
    	});
    	
    google.maps.event.addListener(marker,"click",function(){
    infowindow.open(map,marker);
    });

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
    
});
    