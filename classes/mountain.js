const postcodeAPI = require("../APIs/postcodeAPI")



module.exports = class mountain {
    constructor(name, height, lat, long) {
        this.name = name;
        this.height = height;
        this.lat = lat;
        this.long = long;
    }
}