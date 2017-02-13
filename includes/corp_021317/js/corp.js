/*
####################################################################
Corp Scripts -----------------------------------------------
####################################################################
*/

$(document).ready(function() {

	// Give the body a class so that you can write styles to target the page
	$("body").addClass('altair');

	// Add placeholders for header and footer html
	$("body").prepend('<div id="altairHeader" class="corp"></div>');
	$("body").append('<div id="altairFooter" class="corp"></div>');

	// load header html
	$( "#altairHeader" ).load( includesPath + "/header.html?v=1", function() {
		console.log( "header loaded" );

		// adds hover state to menu items
		$(".menu_hover_item").hover(function () {
	        $('#top_nav_product_image').attr('src', $(this).attr('data-thumbnail'));
	        //$('#top_nav_product_name').text($(this).text());
	        $('#top_nav_product_description').html($(this).attr('data-title').replace('\n', '<br />'));
	    });

	    $(".menu_hover_item1").hover(function () {
	        $('#top_nav_product_image1').attr('src', $(this).attr('data-thumbnail'));
	        //$('#top_nav_product_name').text($(this).text());
	        $('#top_nav_product_description1').html($(this).attr('data-title').replace('\n', '<br />'));
	    });

	    new UISearch(document.getElementById('sb-search'));
	});

	// includes/footer-nav.html
	$( "#altairFooter" ).load( includesPath + "/footer.html?v=1", function() {
			console.log( "footer loaded" );
	});

    // load custom styles and scripts
	$("head").append('<link rel="stylesheet" href="' + includesPath + '/css/font-awesome/css/font-awesome.min.css" type="text/css"/>');
	$("head").append('<link rel="stylesheet" href="' + includesPath + '/css/normalize-min.css" type="text/css"/>');
	$("head").append('<link rel="stylesheet" href="' + includesPath + '/css/corp.css" type="text/css"/>');
	$("head").append('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i" type="text/css"/>');

    /* MOBILE ONLY - NAVIGATION TOGGLE */
    /* ----------------------------------------- */
	$("#mobile-toggler").on("click", function () {
	    window.scrollTo(0, 0);
	    $(this).toggleClass("open");
	    $("#mobile-menu").toggleClass("menu-opened");
	    $("body").toggleClass("active-nav");
	});

	$(".root-menu").on("click", function () {
	    $(this).toggleClass("open");
	    $(this).next().stop().slideToggle(400);
	    return false;
	});

    //touch pagination fix on mobile, applied in css
	function is_touch_device() {
	    return 'ontouchstart' in window        // works on most browsers 
	  	|| navigator.maxTouchPoints;       // works on IE10/11 and Surface
	};

	if (is_touch_device()) {
	    $("html").addClass('touch')
	} else {
	    $("html").addClass('no-touch')
	}

    // disable comments validation if Other selected for Interests
	$("#InterestedInDD").change(function () {
	    var validator = document.getElementById('CommentsTBRFV');
	    if ($(this).val() == "Other") {
	        ValidatorEnable(validator, true);
	        $("#comments_required").show();
	    } else {
	        ValidatorEnable(validator, false);
	        $("#comments_required").hide();
	    }
	});


//END DOC READY
});



function popupsized(ff, toscroll, w, h) {
    window.open(ff, "", "toolbar=no,directories=no,resizable=no,scrollbars=" + toscroll + ",location=no,menubar=no,width=" + w + ",height=" + h + ",top=0,left=0");
}