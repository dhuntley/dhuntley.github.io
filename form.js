$(document).ready(function() {
	$(window).keydown(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			return false;
		}
	});

	$("#codenameButton").on("click", function() {
		let codename = $("#codename").val().trim().toLowerCase();
		$.ajax({
			url: "https://huntleysecretsanta.herokuapp.com/",
			data: {
				codename: codename
			},
			dataType: "json",
			success: function(result) {
				$(".startPanel").css({display: "none"});
				$(".confirmationPanel").css({display: "block"});
				$(".realName").html(result.realName);
				$(".targetName").html(result.targetName);
			}
		});
	});

	$("#confirmationYesButton").on("click", function() {	
		$(".confirmationPanel").css({display: "none"});
		$(".startPanel").css({display: "block"});
	});

	$("#confirmationNoButton").on("click", function() {	
		$(".confirmationPanel").css({display: "none"});
		$(".finalPanel").css({display: "block"});
	});
});