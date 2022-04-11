//console.log(cityGrowths);

// var topFiveCityNames = cityGrowths.slice(0,5).map(city => city.City);
// var topFiveCityGrowths = cityGrowths.slice(0,5).map(city => parseInt(city.Increase_from_2016));
// console.log(topFiveCityNames);
// parseInt()

// var trace = {
//     x: topFiveCityNames,
//     y: topFiveCityGrowths,
//     type: "bar"
//   };
//   var data = [trace];
//   var layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: {title: "City" },
//     yaxis: {title: "Population Growth, 2016-2017"}
//   };
//   Plotly.newPlot("bar-plot", data, layout);

d3.json("samples.json").then(function(data){
  console.log("hello");
});