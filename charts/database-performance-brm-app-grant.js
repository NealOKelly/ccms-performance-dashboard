google.charts.load('current', {
	'packages': ['corechart']
}).then(drawDBPerformanceBRMChartAppReview);
google.charts.setOnLoadCallback(drawDBPerformanceBRMChartAppGrant);


function drawDBPerformanceBRMChartAppReview() {
	var range = 'A2:B';

      	var query = new google.visualization.Query(
      		'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=BRM-Performance-App-Grant&headers=1&tq&range=' + range);
      	query.send(handleDBPerformanceBRMAppGrantQueryResponse);

      }

function handleDBPerformanceBRMAppGrantQueryResponse(response) {
	if (response.isError()) {
		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
		return;
	}

	var options = {
   		title: 'Average runtime of App Grant',
		colors: ['#006435'],
		legend: {
			position: 'none'
		},
		vAxis: {
		title: 'Minutes',
   		},
		chartArea: {
			width: 500
					}
	};


	var data = response.getDataTable();
	var chart = new google.visualization.AreaChart(document.getElementById('database-performance-brm-chart-app-grant'));
	chart.draw(data, options);
window.addEventListener('resize', handleDBPerformanceBRMAppGrantQueryResponse, false);
}
      