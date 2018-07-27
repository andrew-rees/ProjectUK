//Works:
// first request for long lat from postcode
//second request for sunrise and sunset from preentered long/lat
//third request for weather from preentered long lat

//TO DO:
// build a promise.all that makes 2 and 3 wait for the results of 1


//const rp = require("request-promise");
const request = require("request");
const moment = require("moment");
const readline = require("readline-sync");

console.log("Please input your postcode: ")
const postcodeInput = readline.prompt()

let promisePostcode = new Promise((resolve, reject) => {
        request(`https://api.postcodes.io/postcodes/${postcodeInput}`, function (error, response, body) {
            //console.log('error:', error);
            //console.log('statusCode:', response && response.statusCode);
            let parsedReturn = JSON.parse(body);
            long = parsedReturn.result.longitude;
            lat = parsedReturn.result.latitude;
            if (resolve) {
                resolve(console.log(`Longitude: ${parsedReturn.result.longitude}\nLatitude: ${parsedReturn.result.latitude}`))
            } else {
                reject(console.log("nothing"))
            }
        });
    })
    promisePostcode
        .then(
            function (result) {
                //gets lat and log and requests sunrise and sunset from an API
                request(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&date=today`, function (error, response, body) {
                    //console.log('error:', error);
                    //console.log('statusCode:', response && response.statusCode);
                    let parsedReturn = JSON.parse(body)
                    //console.log(parsedReturn)
                    console.log(`Sunrise: ${parsedReturn.results.sunrise}`)
                    console.log(`Sunset: ${parsedReturn.results.sunset}`)
                });
                //gets lat and log and requests weather from an API
                request(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=29fbf13534ce1c365d6ba2d7c71b8030`, function (error, response, body) {
                    //console.log('error:', error);
                    //console.log('statusCode:', response && response.statusCode);
                    let parsedReturn = JSON.parse(body)
                    //console.log(parsedReturn);
                    console.log(`The weather is: ${parsedReturn.weather[0].description} \nThe temperature here is: ${Math.trunc((parsedReturn.main.temp - 273))} Celcius`)
    
                })
            },
            error => console.log("error")
        )
        .catch()