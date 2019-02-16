      google.charts.load('current', {
      	'packages': ['bar']
      });
      google.charts.setOnLoadCallback(drawDBPerformanceBRMChart);


      function drawDBPerformanceBRMChart() {
      	var range = 'A:B';

      	var query = new google.visualization.Query(
      		'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=BRM-Performance&headers=1&tq&range=' + range);
      	query.send(handleDBPerformanceBRMQueryResponse);

      }

      function handleDBPerformanceBRMQueryResponse(response) {
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
      	var chart = new google.charts.Bar(document.getElementById('database-performance-brm-chart'));
      	chart.draw(data, {
      		height: 400
      	});
      	chart.draw(data, google.charts.Bar.convertOptions(options));
      }


      