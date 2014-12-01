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

	var findAndDelete = function(name, array) {
		var obj;
		array.forEach(function(el, index, full_arr){
			if (el.name == name) {
				el.marker.setMap(null);
				full_arr.splice(index, 1);
			}
		});

	}

	var deleteButton = "<button class='btn btn-warning btn-xs delete'>Delete</button>";

	$("#hotel-picker").submit(function(e) {
		var hotel = $("#hotel-picker option:selected").text();
		var location = finder(hotel, all_hotels);
		e.preventDefault();
		$("#hotel-list").append("<li><span>" + hotel + "</span> " + deleteButton + "</li>");
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(location[0], location[1]),
			map: map, 
			title: hotel
		});
		plan[currentDay].Hotels.push({"name": hotel, "marker":marker});
		
		$("#hotel-list .delete").click(function() {
			var parent = $(this).parent();
			var name = parent.find("span").text();
			findAndDelete(name, plan[currentDay].Hotels);
			parent.remove();
		});

	})

	$("#activity-picker").submit(function(e) {
		var activity = $("#activity-picker option:selected").text();
		var location = finder(activity, all_activities);
		e.preventDefault();
		$("#activity-list").append("<li><span>" + activity + "</span> " + deleteButton + "</li>");
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(location[0], location[1]),
			map: map, 
			title: activity
		});
		plan[currentDay].Activities.push({"name": activity, "marker":marker});
		$("#activity-list .delete").click(function() {
			var parent = $(this).parent();
			var name = parent.find("span").text();
			findAndDelete(name, plan[currentDay].Activities);
			parent.remove();
		});
	})

	$("#restaurant-picker").submit(function(e) {
		var restaurant = $("#restaurant-picker option:selected").text();
		var location = finder(restaurant, all_restaurants);
		e.preventDefault();
		$("#restaurant-list").append("<li><span>" + restaurant + "</span> " + deleteButton + "</li>");
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(location[0], location[1]),
			map: map, 
			title: restaurant
		});
		plan[currentDay].Restaurants.push({"name": restaurant, "marker":marker});
		$("#restaurant-list .delete").click(function() {
			var parent = $(this).parent();
			var name = parent.find("span").text();
			findAndDelete(name, plan[currentDay].Restaurants);
			parent.remove();
		});
	})

}


$(document).ready(function() {
	addThing();
});