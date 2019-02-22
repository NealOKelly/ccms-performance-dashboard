      google.charts.load('current', {
      	'packages': ['bar', 'corechart', 'line']
      });
      google.charts.setOnLoadCallback(drawClientTypeChart);

      function drawClientTypeChart() {
      	var range = 'A1:A,N1:Q';

      	var query = new google.visualization.Query(
      		'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=Activity-By-Client&headers=2&tq&range=' + range);
      	query.send(handleClientTypeQueryResponse);

      }

      function handleClientTypeQueryResponse(response) {
      	if (response.isError()) {
      		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      		return;
      	}

      	var options = {
      		title: 'HTTP requests by client type.',
      		colors: ['#0b0c0c', '#b10e1e', '#ffbf47', '#006435'],
			legend: {
      		position: 'bottom'
      		},
			isStacked: 'percent',
			chartArea: {
    		left: 40,
    		top: 10,
    		width: 500,
    
			}
      	};


      	var data = response.getDataTable();
      	var chart = new google.visualization.AreaChart(document.getElementById('client-type-chart'));
		chart.draw(data, {
      		height: 400
      	});
      	chart.draw(data, options);

      }
window.addEventListener('resize', drawClientTypeChart, false);