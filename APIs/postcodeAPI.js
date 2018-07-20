//Works


//const rp = require("request-promise");
const request = require("request");
//const readline = require("readline-sync");

// console.log("Please input your postcode: ")
const postcodeInput = "SK6 6HS"

request(`https://api.postcodes.io/postcodes/${postcodeInput}`, function (error, response, body) {
                //console.log('error:', error); // Print the error if one occurred
                //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                let parsedReturn = JSON.parse(body)
                //console.log(parsedReturn);
                //longitude, latitude, postcode, quality, eastings, northings, country, region and others
                console.log(parsedReturn.result.longitude)
                console.log(parsedReturn.result.latitude)
                console.log(parsedReturn.result.postcode)
        });

// new hill ("Scafel Pike", 978, "CA20 1EX")
// new hill ("Great Gable", 899, "CA12 5XJ")