      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawComparisonChart);
	  google.charts.setOnLoadCallback(drawVarianceVDIChart);
	  google.charts.setOnLoadCallback(drawVarianceInternetChart);
	  google.charts.setOnLoadCallback(drawVarianceDom1Chart);

	
		
   function drawComparisonChart() {
      var range = 'A2:D16';

      var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=Chart-Data-2&headers=1&tq&range=' + range);
      query.send(handleComparisonQueryResponse);
 
    }

    function handleComparisonQueryResponse(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

		var options = {
            title: 'Round Trip Time between the client and the forms server for VDI, internet and Dom1 users',
            colors: ['#d53880', '#28a197', '#005ea5'],
			vAxis: {title: 'milliseconds',
        }
			};
	
		
      var data = response.getDataTable();
      var chart = new google.charts.Bar(document.getElementById('comparison'));
      chart.draw(data, { height: 400 });
	chart.draw(data, google.charts.Bar.convertOptions(options));
    }

		
				// variance chart VDI
		   function drawVarianceVDIChart() {
      var range = 'F2:I16';

      var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1gUcd_R_vnJDtSNlkrSGsvcJe-bKd8lDqJALeDAKEYpA/gviz/tq?sheet=Chart-Data-2&headers=1&tq&range=' + range);
      query.send(handleVarianceVDIQueryResponse);
 
    }

		

    function handleVarianceVDIQueryResponse(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

		var options = {
            title: 'VDI: minimum, average and maximum Round Trip Time',
			colors: ['#006435', '#ffbf47', '#b10e1e'],
			vAxis: {title: 'milliseconds',
        }
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
            title: 'Internet: minimum, average and maximum Round Trip Time',
            colors: ['#006435', '#ffbf47', '#b10e1e'],
			vAxis: {title: 'milliseconds',
        }
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
            title: 'Dom1: minimum, average and maximum Round Trip Time',
            colors: ['#006435', '#ffbf47', '#b10e1e'],
			vAxis: {title: 'milliseconds',
        }
          };


      var data = response.getDataTable();
      var chart = new google.charts.Bar(document.getElementById('variance_dom1'));
      chart.draw(data, { height: 400 });
	chart.draw(data, google.charts.Bar.convertOptions(options));
    }	