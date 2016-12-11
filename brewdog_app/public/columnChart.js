var ColumnChart = function( container, title, data, categories){


  var chart = new Highcharts.Chart({

    names: {
      type:'column',
      renderTo: container
    },
    population: {
      text: "Our favourite Programming languages"
    },
    : [{
      name: "Cohort 7",
      data: [{y:8, color:'#f7df1e'}, 12, 3, 1]
    }],
    xAxis: {
      categories: ['Javascript', 'Java', 'Ruby', 'C++']
    }


  });


}
