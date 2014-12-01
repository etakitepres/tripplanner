var dayPicker = function() {
	var dayNum = 1;

	var daySwitcher = function(){
		$("#day-buttons button").removeClass("btn-primary").addClass("btn-default");
		$(this).removeClass("btn-default").addClass("btn-primary");
	}

	$("#add-day").click(function(){
		dayNum++;
		var newButton = '<button type="button" class="btn btn-primary">Day ' + dayNum + '</button>';
		$("#day-buttons").append(newButton);
		$("#day-buttons button:last-child").click(daySwitcher).trigger(jQuery.Event("click"));
	});

	$("#day-buttons button").click(daySwitcher);

}

$(document).ready(function() {
  dayPicker();
});