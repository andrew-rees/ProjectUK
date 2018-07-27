// const moment = require('moment')
const request = require("request");
const rp = require("request-promise")

// let now = moment()
// console.log(now)

// let date = "17/10/1983"

// let formattedDate = moment(date, "DD/MM/YYYY").format("DD MMM YYYY")
// let formattedNow = moment(now, "YYYY-MM-DD HH:MM:SS:MSMSMS").format("DD MMM YYYY, HH:MM:SS")

// console.log(formattedDate)
// console.log(formattedNow)

// let promise1 = new Promise(function(resolve, reject) { //promise starts with a function that has 2 parameters - resolve and reject
//     if (Math.round(Math.random()) === 0) { //you can then set what you do on resolve
//         resolve("promise1 done!")
//     } else { //and what you do on reject
//         reject("promise1 error...")
//     }
// });

//   // resolve runs the first function in .then
//   promise1.then(
//     result => console.log(result), // shows "done!" after 1 second
//     error => console.log(error) // doesn't run
//   );


let promisePostcode = new Promise((resolve, reject) => {
    request(`https://api.postcodes.io/postcodes/xyz`, function (error, response, body) {
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
                console.log(parsedReturn.results.sunrise)
                console.log(parsedReturn.results.sunset)
            });
            //gets lat and log and requests weather from an API
            request(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=29fbf13534ce1c365d6ba2d7c71b8030`, function (error, response, body) {
                //console.log('error:', error);
                //console.log('statusCode:', response && response.statusCode);
                let parsedReturn = JSON.parse(body)
                console.log(parsedReturn);
                //console.log(`The weather here is: ${parsedReturn.weather}`)

            })
        },
        error => console.log("error")
    )
    .catch()