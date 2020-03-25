var mymap = L.map('mapid').setView([0, 0], 2);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY3JubWFwIiwiYSI6ImNrODBrbHIwejAwazkzam50M3M1ZzgzZHIifQ.2rjlC0umbYG2UdW4wil4XQ'
}).addTo(mymap);

//Fetch coronavirus data
var dataUrl = "https://corona.lmao.ninja/countries?sort=%7Bparameter%7D";

fetch(dataUrl).then((response)=>{
    return response.json();
}).then(function(data){
    for(var i = 0; i < data.length; i++){
        var circle = L.circle([data[i].countryInfo.lat, data[i].countryInfo.long], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 15000+(data[i].cases*5)
        }).addTo(mymap);

        circle.bindPopup("Country: " + data[i].country + "<br> Total case: " + data[i].cases + "<br> Recovered case: " + data[i].recovered + 
        "<br> Death: " + data[i].deaths);
    }
});