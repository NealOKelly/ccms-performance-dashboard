google.charts.load('current', {
	'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawDeferredUploadChart);


function drawDeferredUploadChart() {
	var range = 'J2:K';

	var query = new google.visualization.Query(
		'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=Chart-Data&headers=1&tq&range=' + range);
	query.send(handleDeferredUploadQueryResponse);

}

function handleDeferredUploadQueryResponse(response) {
	if (response.isError()) {
		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
		return;
	}

	var options = {
		title: 'Documents pending upload to Northgate',
		colors: ['#d53880'],
		legend: {
			position: 'none'
		},
		vAxis: {
			ticks: [0, 50000, 100000, 150000, 200000, 250000, 300000, 350000]
		}
	};


	var data = response.getDataTable();
	var chart = new google.visualization.AreaChart(document.getElementById('deferred-upload-chart'));
	chart.draw(data, options);

}
