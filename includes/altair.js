

/*
####################################################################
Start Custom Scripts -----------------------------------------------
####################################################################
*/

$(document).ready(function() {

	$("body").addClass('altair');

	// Add placeholders for header and footer html
	$("body").prepend('<div id="altairHeader"></div>');
	$("body").append('<div id="altairFooter"></div>');

	// load header html
	$( "#altairHeader" ).load( "//www.altair.com/altair-header-footer/includes/header-nav.html?v=1", function() {
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
	});

	// includes/footer-nav.html

	$( "#altairFooter" ).load( "//www.altair.com/altair-header-footer/includes/footer-nav.html?v=1", function() {
			console.log( "footer loaded" );
	});
	// load custom styles and scripts
	$("head").append('<link rel="stylesheet" href="//www.altair.com/altair-header-footer/includes/altair.css" type="text/css"/>');













//END DOC READY
});


$(window).load(function() {

setTimeout(function() {
   	/* PRODUCT IMAGERY NAVIGATION CODE */
    /* ----------------------------------------- */



$("#SearchTB").keyup(function(event){
    if(event.keyCode == 13){
        $("#SearchBtn").click();
        //alert("Enter");
        var q = $(this).val();
     window.location = 'http://www.altair.com/SearchResults.aspx?q=' + q +'%20site:www.altair.com';
    }

   
});



}, 2000);















 //END Window Load
});

