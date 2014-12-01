var plan = {1:{"Hotels":[], "Activities":[], "Restaurants":[]}};


function addThing() {

	var finder = function(name, array) {
		var obj;
		array.forEach(function(el){
			if (el.name == name) {
				obj = el;
			}
		});
		return obj.place[0].location;
	}

	$("#hotel-picker").submit(function(e) {
		var hotel = $("#hotel-picker option:selected").text();
		plan[currentDay].Hotels.push(hotel);
		var location = finder(hotel, all_hotels);
		e.preventDefault();
		$("#hotel-list").append("<li>" + hotel + "</li>");
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(location[0], location[1]),
			map: map, 
			title: hotel
		});

	})

	$("#activity-picker").submit(function(e) {
		var activity = $("#activity-picker option:selected").text();
		plan[currentDay].Activities.push(activity);
		var location = finder(activity, all_activities);
		e.preventDefault();
		$("#activity-list").append("<li>" + activity + "</li>");
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(location[0], location[1]),
			map: map, 
			title: activity
		});
	})

	$("#restaurant-picker").submit(function(e) {
		var restaurant = $("#restaurant-picker option:selected").text();
		plan[currentDay].Restaurants.push(restaurant);
		var location = finder(restaurant, all_restaurants);
		e.preventDefault();
		$("#restaurant-list").append("<li>" + restaurant + "</li>");
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(location[0], location[1]),
			map: map, 
			title: restaurant
		});
	})

}


$(document).ready(function() {
  addThing();
});