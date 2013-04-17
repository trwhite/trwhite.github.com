$(function() {

	var myParagraph = $("<p>").text("Boston Crime Rates")
							  .appendTo("body");

});

$(function() {

	var i = 0;
    while(i < data.length) {

  
	    var area = data[i];
		var neighborhoods = area.name;
		var incidents = parseInt(area.incidents);
		var domestic = parseInt(area.domestic);
		
	

	var maxIncidents = 10651;
	var fraction = incidents / maxIncidents;
	var incidentWidth = fraction * 1000;
	
	var maxDomestic = 2840;
	var fraction = domestic / maxIncidents;
	var domesticWidth = fraction * 1000;
	
	var row = $("<div>").addClass("row");
	
	var neighborhoodDiv = $("<div>").addClass("neighborhood")
					.text(neighborhoods)
					.appendTo(row);
					
	var incidentDiv = $("<div>")
					.text(incidents).addClass("incidents")
					.appendTo(row)
					.css({ width:incidentWidth,
        			backgroundColor: "pink" }); 
        			
    var domesticDiv = $("<div>")
					.text(domestic).addClass("domestic")
					.appendTo(row)
					.css({ width:domesticWidth,
        			backgroundColor: "light-grey" }); 


    $("body").append(row);        
    i++;
    
    
   }
});