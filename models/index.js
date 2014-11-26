var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripplanner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var placeSchema = require('./place');
var hotelSchema = require('./hotel');
var thingtodoSchema = require('./thingtodo');
var restaurantSchema = require('./restaurant');

Place = mongoose.model('Place', placeSchema);
Hotel = mongoose.model('Hotel', hotelSchema);
ThingToDo = mongoose.model('ThingToDo', thingtodoSchema);
Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = {
	Place: Place,
	Hotel: Hotel, 
	ThingsToDo: ThingToDo,
	Restaurant: Restaurant
}

