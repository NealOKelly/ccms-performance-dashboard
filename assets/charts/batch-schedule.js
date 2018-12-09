      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawSet1Chart);
	  google.charts.setOnLoadCallback(drawSet2Chart);
	  google.charts.setOnLoadCallback(drawSet3Chart);
	  google.charts.setOnLoadCallback(drawPSChart);


	
		
   function drawSet1Chart() {
      var range = 'A2:B16';

      var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=Chart-Data&headers=1&tq&range=' + range);
      query.send(handleSet1QueryResponse);
 
    }

    function handleSet1QueryResponse(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

		var options = {
            title: 'Average runtime for the last 14 days',
            subtitle: '(minutes)',
			colors: ['#d53880'],
			legend: {position: 'none'},
          };
	
		
      var data = response.getDataTable();
      var chart = new google.charts.Bar(document.getElementById('continuous-background-set-1'));
      chart.draw(data, { height: 400 });
	chart.draw(data, google.charts.Bar.convertOptions(options));
    }

		
   function drawSet2Chart() {
      var range = 'C2:D16';

      var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=Chart-Data&headers=1&tq&range=' + range);
      query.send(handleSet2QueryResponse);
 
    }

    function handleSet2QueryResponse(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

		var options = {
            title: 'Average runtime for the last 14 days',
            subtitle: '(minutes)',
			colors: ['#d53880'],
			legend: {position: 'none'},
          };
	
		
      var data = response.getDataTable();
      var chart = new google.charts.Bar(document.getElementById('continuous-background-set-2'));
      chart.draw(data, { height: 400 });
	chart.draw(data, google.charts.Bar.convertOptions(options));
    }

   function drawSet3Chart() {
      var range = 'E2:F16';

      var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=Chart-Data&headers=1&tq&range=' + range);
      query.send(handleSet3QueryResponse);
 
    }

    function handleSet3QueryResponse(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

		var options = {
            title: 'Average runtime for the last 14 days',
            subtitle: '(minutes)',
			colors: ['#d53880'],
			legend: {position: 'none'},
          };
	
		
      var data = response.getDataTable();
      var chart = new google.charts.Bar(document.getElementById('continuous-background-set-3'));
      chart.draw(data, { height: 400 });
	chart.draw(data, google.charts.Bar.convertOptions(options));
    }

   function drawPSChart() {
      var range = 'G2:H16';

      var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=Chart-Data&headers=1&tq&range=' + range);
      query.send(handlePSQueryResponse);
 
    }

    function handlePSQueryResponse(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

		var options = {
            title: 'Average runtime for the last 14 days',
            subtitle: '(minutes)',
			colors: ['#d53880'],
			legend: {position: 'none'},
          };
	
		
      var data = response.getDataTable();
      var chart = new google.charts.Bar(document.getElementById('provider-synchronisation'));
      chart.draw(data, { height: 400 });
	chart.draw(data, google.charts.Bar.convertOptions(options));
    }