var PieChart = function(params) {
  var container = document.getElementById('pie-chart');

  var chart = new Highcharts.Chart({
    chart: {
      type: "pie",
      renderTo: params.container,
      margin: [0, 0, 0, 0],
          spacingTop: 0,
          spacingBottom: 0,
          spacingLeft: 0,
          spacingRight: 0
    },
    title: {
      text: params.title
    },
    plotOptions: {
        pie: {
            slicedOffset: 0,
            size:'70%',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [ {name: params.seriesName, data: params.data} ]
  });
  console.log(chart);
};
