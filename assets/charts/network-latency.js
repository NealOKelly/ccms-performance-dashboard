      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawComparisonChart);
	  google.charts.setOnLoadCallback(drawVarianceVDIChart);
	  google.charts.setOnLoadCallback(drawVarianceInternetChart);
	  google.charts.setOnLoadCallback(drawVarianceDom1Chart);

	
		
   function drawComparisonChart() {
      var range = 'A1:A,C1:C,F1:F,I1:I';

      var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=Network-Latency&headers=1&tq&range=' + range);
      query.send(handleComparisonQueryResponse);
 
    }

    function handleComparisonQueryResponse(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

		var options = {
            title: 'Round Trip Time: Client <> Forms Server',
            subtitle: 'Comparison of network journeys',
			colors: ['#d53880', '#28a197', '#005ea5'],
			vAxis: {title: 'ms', ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        }
			};
	
		
      var data = response.getDataTable();
      var chart = new google.charts.Bar(document.getElementById('comparison'));
      chart.draw(data, { height: 400 });
	chart.draw(data, google.charts.Bar.convertOptions(options));
    }

		
				// variance chart VDI
		   function drawVarianceVDIChart() {
      var range = 'A:D';

      var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=Network-Latency&headers=1&tq&range=' + range);
      query.send(handleVarianceVDIQueryResponse);
 
    }

		

    function handleVarianceVDIQueryResponse(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

		var options = {
            title: 'Variance: VDI',
            subtitle: 'Minmimum, Average and Maximum',
			colors: ['#006435', '#ffbf47', '#b10e1e'],
			vAxis: {title: 'ms', ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],}
          };

      var data = response.getDataTable();
      var chart = new google.charts.Bar(document.getElementById('variance_vdi'));
      chart.draw(data, { height: 400 });
	chart.draw(data, google.charts.Bar.convertOptions(options));
    }
		
					// variance chart internet
		   function drawVarianceInternetChart() {
			   
      var range = 'A1:A,E:G';

      var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=Network-Latency&headers=1&tq&range=' + range);
      query.send(handleVarianceInternetQueryResponse);
 
    }

		

    function handleVarianceInternetQueryResponse(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

		var options = {
            title: 'Variance: Internet',
            subtitle: 'Minmimum, Average and Maximum',
			colors: ['#006435', '#ffbf47', '#b10e1e'],
        };

      var data = response.getDataTable();
      var chart = new google.charts.Bar(document.getElementById('variance_internet'));
      chart.draw(data, { height: 400 });
	chart.draw(data, google.charts.Bar.convertOptions(options));
    }	
	
						// variance dom1 internet
		   function drawVarianceDom1Chart() {
			   
      var range = 'A1:A,H:J';

      var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=Network-Latency&headers=1&tq&range=' + range);
      query.send(handleVarianceDom1QueryResponse);
 
    }

		

    function handleVarianceDom1QueryResponse(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

var options = {
  title: 'Variance: dom1',
subtitle: 'Minmimum, Average and Maximum',
  colors: ['#006435', '#ffbf47', '#b10e1e'],
};


      var data = response.getDataTable();
      var chart = new google.charts.Bar(document.getElementById('variance_dom1'));
      chart.draw(data, { height: 400 });
	chart.draw(data, google.charts.Bar.convertOptions(options));
    }	