  google.charts.load('current', {
  	'packages': ['bar']
  });
  google.charts.setOnLoadCallback(drawClientActivityChart);




  function drawClientActivityChart() {
  	var range = 'R2:S';

  	var query = new google.visualization.Query(
  		'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=Activity-By-Client&headers=1&tq&range=' + range);
  	query.send(handleClientActivityQueryResponse);

  }

  function handleClientActivityQueryResponse(response) {
  	if (response.isError()) {
  		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
  		return;
  	}

  	var options = {
  		title: 'HTTP requests to the e-Business Suite application servers.',
  		colors: ['#006435'],
  		legend: {
      		position: 'none'
      		}
  	};


  	var data = response.getDataTable();
  	var chart = new google.charts.Bar(document.getElementById('client-activity-chart'));
  	chart.draw(data, {
  		height: 400
  	});
  	chart.draw(data, google.charts.Bar.convertOptions(options));
  }
