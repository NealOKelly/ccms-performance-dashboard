      google.charts.load('current', {
      	'packages': ['bar']
      });
      google.charts.setOnLoadCallback(drawSet1Chart);


      function drawSet1Chart() {
      	var range = 'A2:A,D2:E';

      	var query = new google.visualization.Query(
      		'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=User-Reported-Performance&headers=1&tq&range=' + range);
      	query.send(handleSet1QueryResponse);

      }

      function handleSet1QueryResponse(response) {
      	if (response.isError()) {
      		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      		return;
      	}

      	var options = {
      		title: 'User-reported slowness',
      		subtitle: 'Percentage of users that have reportes slowness throughout the day.',
      		colors: ['#005ea5', '#006435'],
      		legend: {
      			position: 'bottom'
      		},
			vAxis: {format: 'percent'}
      	};


      	var data = response.getDataTable();
      	var chart = new google.charts.Bar(document.getElementById('user-reported-slowness-chart'));
      	chart.draw(data, {
      		height: 400
      	});
      	chart.draw(data, google.charts.Bar.convertOptions(options));
      }


     