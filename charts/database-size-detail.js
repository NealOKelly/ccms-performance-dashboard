      google.charts.load('current', {
      	'packages': ['bar', 'corechart', 'line']
      });
      google.charts.setOnLoadCallback(drawDBDetailsChart);

      function drawDBDetailsChart() {
      	var range = 'M2:U16';

      	var query = new google.visualization.Query(
      		'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=Chart-Data&headers=1&tq&range=' + range);
      	query.send(handleDBDetailsQueryResponse);

      }

      function handleDBDetailsQueryResponse(response) {
      	if (response.isError()) {
      		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      		return;
      	}

      	var options = {
      		title: 'Used space of seleced table spaces (kB).',
      		colors: ['#d53880', '#006435', '#b10e1e', '#ffbf47', '#912b88', '#f47738', '#28a197', '#b58840'],
			legend: {
      		position: 'right'
      		},
      		isStacked: 'true',
      		vAxis: {
      			format: 'long',
				ticks: [0, 1000000000, 2000000000, 3000000000, 4000000000, 5000000000]
      		}
      	};


      	var data = response.getDataTable();
      	var chart = new google.visualization.AreaChart(document.getElementById('database-size-detail-chart'));
		chart.draw(data, {
      		height: 400
      	});
      	chart.draw(data, options);

      }