      google.charts.load('current', {
      	'packages': ['corechart', 'line']
      });
      google.charts.setOnLoadCallback(drawPurgingChart);




      function drawPurgingChart() {
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
      	var chart = new google.visualization.LineChart(document.getElementById('purging-chart'));
		chart.draw(data, {
      		height: 400
      	});
      	chart.draw(data, options);

      }
