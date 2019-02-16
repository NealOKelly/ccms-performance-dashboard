      google.charts.load('current', {
      	'packages': ['bar', 'corechart', 'line']
      });
      google.charts.setOnLoadCallback(drawDBSizeChart);
      google.charts.setOnLoadCallback(drawDBPerformanceChart);

	// Database size
	function drawDBSizeChart() {
      	var range = 'A:D';

      	var query = new google.visualization.Query(
      		'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=Purging&headers=1&tq&range=' + range);
      	query.send(handlePurgingQueryResponse);

      }

      function handlePurgingQueryResponse(response) {
      	if (response.isError()) {
      		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      		return;
      	}

      	var options = {
      		title: 'Purging',
      		legend: {
      		position: 'bottom'
      		},
      		isStacked: 'false',
			colors: ['#2b8cc4', '#ffbf47', '#df3034'],
      		vAxis: {
      			format: 'long',
				ticks: [0, 1000000000, 2000000000, 3000000000, 4000000000, 5000000000]
      		}
      	};


      	var data = response.getDataTable();
      	var chart = new google.visualization.LineChart(document.getElementById('database-size'));
		chart.draw(data, {
      		height: 400
      	});
      	chart.draw(data, options);

      }

     function drawDBPerformanceChart() {
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
      			title: 'Minutes',
      		},
      	};


      	var data = response.getDataTable();
      	var chart = new google.charts.Bar(document.getElementById('database-performance'));
      	chart.draw(data, {
      		height: 400
      	});
      	chart.draw(data, google.charts.Bar.convertOptions(options));
      }

