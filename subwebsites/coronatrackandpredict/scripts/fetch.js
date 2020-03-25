// var dataUrl = "https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/timeseries";
var dataUrl = "https://corona.lmao.ninja/all";

var meta = document.getElementById("metaData");

fetch(dataUrl).then((response)=>{
    return response.json();
}).then(function(data){
    console.log(data)
    meta.textContent = "Total Case: " + data.cases + " Deaths: " + data.deaths + " Recovered: " + data.recovered;
});