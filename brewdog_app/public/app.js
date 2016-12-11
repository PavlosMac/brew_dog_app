
window.onload = function(){
  var url = ' https://punkapi.com/api/v1/beers?abv_gt=8';
  makeRequest(url, requestComplete);
}


var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.setRequestHeader("Authorization", "Basic " + btoa("95bad4e5ed3b44798e81c64475e1b6ea"));
  request.onload = callback;
  request.send();
}

// when request complete create the pie chart with data
var requestComplete = function(){
   if(this.status != 200) return;



   var jsonString = this.responseText;
   var beers = JSON.parse(jsonString);
   console.log(beers);

   var abv = populateABV(beers);
   var names = populateNames(beers);

   var beerData = {
      container: document.getElementById("pie-chart"),
      title: "Beers over 8% alcohol",
      seriesName: "Percentage alcohol",
      data: constructData(abv, names)
    };
    new PieChart( beerData );





    var largestAbvTag = document.getElementByTagName('p');
    largestAbvTag.innerHTML = "The beer with highest alcholo percentage by volume is "
    //  + findLargestBeer(beers);


}




var findLargestBeer = function(beers){
  var max = beers.reduce(function(x,y){
    (x.abv > y.abv) ? x : y;
    return x.name;
  })


};



// construct array of objects from list of beers and list of associated abvs
var constructData = function(countryData, labels) {
  var data = [];
  for(var i = 0; i < countryData.length; i++ ){
    var column = {};
    column.name = labels[i];
    column.y = countryData[i];
    data.push(column);
    column.color = colorGenerator();
  }
  return data;
};

// create list of all beers
var populateNames = function(beers){
  var names = [];
  beers.forEach(function(beer){
    if(beer.name.charAt(0) === "A"){
      names.push(beer.tagline);
    }
    else{names.push(beer.name);}
  });
  return names;
}
//
// // create list of all ABV values
var populateABV = function(beers){
  var abv = [];
  beers.forEach(function(beer){
    abv.push(beer.abv);
  });
  return abv;
}


var colorGenerator = function(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}