window.onscroll = function() {
	"use strict";
	var dolphin = document.getElementById("dolphin");
	var rectDolphin = dolphin.getBoundingClientRect();
	var positionDolphin = (parseInt(rectDolphin.top, 10) * -1) + 300;
	dolphin.style.left =  positionDolphin + "px";

	var whale = document.getElementById("whale");
	var rectWhale = whale.getBoundingClientRect();
	var positionWhale = (parseInt(rectWhale.top, 10) * -1) + 200;
	whale.style.left =  positionWhale + "px";

	var turtle = document.getElementById("turtle");
	var rectTurtle = turtle.getBoundingClientRect();
	var positionTurtle = (parseInt(rectTurtle.top, 10)) + 300;
	turtle.style.left =  positionTurtle + "px";
	
	var fish1 = document.getElementById("fish1");
	var rectFish1 = fish1.getBoundingClientRect();
	var positionFish1 = (parseInt(rectFish1.top, 10) * 2) + 300;
	fish1.style.left =  positionFish1 + "px";

	var fish2 = document.getElementById("fish2");
	var rectFish2 = fish2.getBoundingClientRect();
	var positionFish2 = (parseInt(rectFish2.top, 10) * -1.5) + 700;
	fish2.style.left =  positionFish2 + "px";
};

$("#bycatchingLink").click(function(e) { 
	"use strict";
	e.preventDefault();
    $('html, body').animate({
		scrollTop: $("#what-is-anchor").offset().top
    }, 1000);
});

$("#impactsLink").click(function(e) { 
	"use strict";
	e.preventDefault();
    $('html, body').animate({
		scrollTop: $("#impacts-anchor").offset().top
    }, 1000);
});

$("#solutionsLink").click(function(e) { 
	"use strict";
	e.preventDefault();
    $('html, body').animate({
		scrollTop: $("#solutions-anchor").offset().top
    }, 1000);
});

$("#takeActionLink").click(function(e) { 
	"use strict";
	e.preventDefault();
    $('html, body').animate({
		scrollTop: $("#take-action-anchor").offset().top
    }, 1000);
});

$("#topOfPage").click(function(e) { 
	"use strict";
	e.preventDefault();
    $('html, body').animate({
		scrollTop: 0
    }, 1000);
});

$(document).on("scroll", function() {
	"use strict";
	if($(document).scrollTop()>100) {
		$("#navigation").removeClass("navigationLarge").addClass("navigationMini");
		$("#logo").removeClass("logoLarge", {duration:400}).addClass("logoMini", {duration:400});
	} else {
		$("#navigation").removeClass("navigationMini").addClass("navigationLarge");
		$("#logo").removeClass("logoMini", {duration:400}).addClass("logoLarge", {duration:400});
	}
	
});