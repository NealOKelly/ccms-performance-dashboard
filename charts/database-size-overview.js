      google.charts.load('current', {
      	'packages': ['bar', 'corechart', 'line']
      });
      google.charts.setOnLoadCallback(drawDBSizeChart);
      
	// Database size
	function drawDBSizeChart() {
      	var range = 'A:F';

      	var query = new google.visualization.Query(
      		'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=Database-Size&headers=1&tq&range=' + range);
      	query.send(handlePurgingQueryResponse);

      }

      function handlePurgingQueryResponse(response) {
      	if (response.isError()) {
      		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      		return;
      	}

      	var options = {
      		title: 'Size, Used Space & High Water Mark (kB).',
      		legend: {
      		position: 'bottom'
      		},
      		isStacked: 'false',
			colors: ['#6f777b', '#005ea5', '#b10e1e', '#006435', '#ffbf47'],
      		vAxis: {
      			format: 'long',
				ticks: [0, 1000000000, 2000000000, 3000000000, 4000000000, 5000000000]
      		},
			series: {
            2: { lineDashStyle: [7, 3] },
			4: { lineDashStyle: [7, 3] }
          },chartArea: {
    			width: 500
		  	}
      	};


      	var data = response.getDataTable();
      	var chart = new google.visualization.LineChart(document.getElementById('database-size-overview-chart'));
		chart.draw(data, {
      		height: 400
      	});
      	chart.draw(data, options);

      }