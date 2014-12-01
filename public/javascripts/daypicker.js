var currentDay = 1;

var dayPicker = function() {
	var dayNum = 1;

	var daySwitcher = function(){
		var daynamesplit = $(this).text().split(" ");
		currentDay = Number(daynamesplit[1]);
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

function setDay() {}



$(document).ready(function() {
  dayPicker();
});