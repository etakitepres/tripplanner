var currentDay = 1;

var dayPicker = function() {
	var dayNum = 1;

	var daySwitcher = function(){
		var daynamesplit = $(this).text().split(" ");
		currentDay = Number(daynamesplit[1]);
		clearDay();
		setDay();
		$("#day-buttons button").removeClass("btn-primary").addClass("btn-default");
		$(this).removeClass("btn-default").addClass("btn-primary");
	}

	$("#add-day").click(function(){
		dayNum++;
		plan[dayNum] = {"Hotels":[], "Activities":[], "Restaurants":[]};
		var newButton = '<button type="button" class="btn btn-primary">Day ' + dayNum + '</button>';
		$("#day-buttons").append(newButton);
		$("#day-buttons button:last-child").click(daySwitcher).trigger(jQuery.Event("click"));
	});

	$("#day-buttons button").click(daySwitcher);

}


function clearDay() {
	$("#plan-daynum").text("");
	$("#hotel-list").text("");
	$("#activity-list").text("");
	$("#restaurant-list").text("");
}

function setDay() {
	$("#plan-daynum").text("Day " + currentDay);
	$.each(plan[currentDay].Hotels, function(key, hotel){
		$("#hotel-list").append("<li>" + hotel + "</li>");
	});
	$.each(plan[currentDay].Activities, function(key, activity){
		$("#activity-list").append("<li>" + activity + "</li>");
	});
	$.each(plan[currentDay].Restaurants, function(key, restaurant){
		$("#restaurant-list").append("<li>" + restaurant + "</li>");
	});
}



$(document).ready(function() {
  dayPicker();
});