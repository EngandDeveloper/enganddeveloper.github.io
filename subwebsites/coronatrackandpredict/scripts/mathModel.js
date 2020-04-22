/*
This file will model the spread of the Corona Virus by utilizing mathematical
models.
*/

//The SIR Model: Please check the Numberphile video on it: https://www.youtube.com/watch?v=k6nLfCbAzgo

/*
    S: Susceptible
    I: Infected
    R: Recovered (Includes Deaths as well)
*/
var dataUrl = "https://corona.lmao.ninja/countries?sort=%7Bparameter%7D";
var population = 36000000; //Canadian population
// var data = fetch(dataUrl).then(function(data){return data.json()});
fetch(dataUrl).then(function(response){return response.json()
}).then(function(data){
    console.log("Data is: " + data);
    var infectedInitial = data[177].cases;
    var S = population - infectedInitial;
    var I = infectedInitial;
    var R = data[177].recovered + data[177].deaths;
    console.log("S, I, R: " + S + ", " + I +", " + R + " infectedInitial: " + infectedInitial);
    var R0 = 2.79;//R0 symbolizes infection spread speed
    var rec = (data[177].recovered/data[177].cases) + (data[177].deaths/data[177].cases);//rec represents recovery speed (death + healing)

    console.log("R0 is: " + R0 + " recovery rate: " + rec);

    var dS = -R0 * S * I;
    var dI = R0 * S * I - rec*R;
    var dR = rec*I;

    console.log("New infected: " +dR);
});


// console.log("Data is: " + data);
// var infectedInitial = data[177].cases;
// var S = population - infectedInitial;
// var I = infectedInitial;
// var R = data[177].recovered + data[177].deaths;
// console.log("S, I, R: " + S + I + R + " infectedInitial: " + infectedInitial);
// var R0 = 2.79;//R0 symbolizes infection spread speed
// var rec = (data[177].recovered/data[177].cases) + (data[177].deaths/data[177].cases);//rec represents recovery speed (death + healing)

// console.log("R0 is: " + R0 + " recovery rate: " + rec);

// var dS = -R0 * S * I;
// var dI = R0 * S * I - rec*R;
// var dR = rec*I;