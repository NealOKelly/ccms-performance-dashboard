      google.charts.load('current', {
      	'packages': ['corechart']
      });
      google.charts.setOnLoadCallback(drawDeferredUploadChart);




      function drawDeferredUploadChart() {
      	var range = 'M2:U16';

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
      		title: 'Size of seleced table spaces (kB)',
      		colors: ['#d53880', '#006435', '#b10e1e', '#ffbf47', '#912b88', '#f47738', '#28a197', '#b58840'],
      		isStacked: 'true',
      		vAxis: {
      			format: 'long'
      		}
      	};


      	var data = response.getDataTable();
      	var chart = new google.visualization.AreaChart(document.getElementById('database-size-chart'));
      	chart.draw(data, options);

      }
