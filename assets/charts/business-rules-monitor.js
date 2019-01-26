      google.charts.load('current', {
      	'packages': ['bar']
      });
      google.charts.setOnLoadCallback(drawSet1Chart);
      google.charts.setOnLoadCallback(drawSet2Chart);
      google.charts.setOnLoadCallback(drawSet3Chart);
      google.charts.setOnLoadCallback(drawPSChart);




      function drawSet1Chart() {
      	var range = 'A:B';

      	var query = new google.visualization.Query(
      		'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=BRM-Performance&headers=1&tq&range=' + range);
      	query.send(handleSet1QueryResponse);

      }

      function handleSet1QueryResponse(response) {
      	if (response.isError()) {
      		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      		return;
      	}

      	var options = {
      		title: 'Business Rule Monitor',
      		subtitle: 'Average runtime of App Review',
      		colors: ['#d53880'],
      		legend: {
      			position: 'none'
      		},
      		vAxis: {
      			title: 'minutes',
      		},
      	};


      	var data = response.getDataTable();
      	var chart = new google.charts.Bar(document.getElementById('business-rules-monitor'));
      	chart.draw(data, {
      		height: 400
      	});
      	chart.draw(data, google.charts.Bar.convertOptions(options));
      }


      