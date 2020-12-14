// var dataUrl = "https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/timeseries";
var dataUrl = "https://corona.lmao.ninja/v2/all";
// Old Url
//var dataUrl = "https://corona.lmao.ninja/all";

var meta = document.getElementById("metaData");

fetch(dataUrl).then((response)=>{
    return response.json();
}).then(function(data){
    console.log(data)
    meta.textContent = "Total Case: " + data.cases.toLocaleString() + " Deaths: " + data.deaths.toLocaleString() + " Recovered: " + data.recovered.toLocaleString();
});