 google.charts.load('current', {
 	'packages': ['geochart'],
 	// Note: you will need to get a mapsApiKey for your project.
 	// See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
 	'mapsApiKey': 'AIzaSyDMp_1L62b1QUl-jQRf3hFMoWi__MpzO08'
 });
 google.charts.setOnLoadCallback(drawRegionsMap);

 function drawRegionsMap() {
 	//var data = google.visualization.arrayToDataTable([
 	// ['Country', 'Popularity'],
 	//  ['South America', 600],
 	//  ['Canada', 500],
 	//  ['France', 600],
 	//  ['Russia', 700],
 	//  ['Australia', 600]
 	//]);
 	var range = 'W:X';

 	var query = new google.visualization.Query(
 		'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=Chart-Data&headers=1&tq&range=' + range);
 	query.send(handleRegionsMapQueryResponse);
 }

 function handleRegionsMapQueryResponse(response) {
 	if (response.isError()) {
 		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
 		return;
 	}

 	var options = {
 		displayMode: 'regions',
 		//		 region: 'GB',
 		colorAxis: {
 			colors: ['#d8878f', '#b10e1e']
 		},
 		//         backgroundColor: '#81d4fa',
 		datalessRegionColor: '#f5f5f5',
 		defaultColor: '#f5f5f5',
 		legend: 'none',
 		//tooltip: {trigger: 'none'},
 	};


 	var data = response.getDataTable();
 	var chart = new google.visualization.GeoChart(document.getElementById('countries-chart'));

 	chart.draw(data, options);
 }
