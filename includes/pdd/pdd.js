/*
####################################################################
Corp Scripts -----------------------------------------------
####################################################################
*/

$(document).ready(function() {

	// Give the body a class so that you can write styles to target the page
	$("body").addClass('altair-pdd');

	// Add placeholders for header and footer html
	$("body").prepend('<div id="altairHeader"></div>');
	$("body").append('<div id="altairFooter"></div>');

	// load header html
	$( "#altairHeader" ).load( "http://www.altair.com/include-header-footer/includes/pdd/header.html?v=1", function() {
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
	$( "#altairFooter" ).load( "http://www.altair.com/include-header-footer/includes/pdd/footer.html?v=1", function() {
			console.log( "footer loaded" );
	});

	// load custom styles and scripts
	$("head").append('<link rel="stylesheet" href="http://www.altair.com/include-header-footer/includes/pdd/pdd.css?v=1" type="text/css"/>');




//END DOC READY
});


$(window).load(function() {

		setTimeout(function() {

// newsletterBtn
function newsletter_form() {
    var email = $("#email").val();
    $("#email").val("Email Address");
    window.open("//altair.us4.list-manage.com/subscribe/post?u=7e22dfe3c2726b19bec83ca10&amp;id=e867aa62f3&MERGE0=" + email, "_blank");
}


$( "#newsletterBtn" ).click(function() {
      var email = $("#email").val();
    $("#email").val("Email Address");
    window.open("//altair.us4.list-manage.com/subscribe/post?u=7e22dfe3c2726b19bec83ca10&amp;id=e867aa62f3&MERGE0=" + email, "_blank");

});

					// When enter is hit submit form
					$(".search_text").keyup(function(event){
					    if(event.keyCode == 13){
					        $(".search_btn").click();
					        //alert("Enter");
					        var q = $(this).val();
					     window.location = 'http://www.altair.com/SearchResults.aspx?q=' + q +'%20site:www.altair.com';
					    }
					});

			}, 2000);



$( ".pdd nav#site li" ).each(function( index ) {
  console.log( index + ": " + $( this ).text() );

  var navHeight = $( this ).find( "a" ).first().width();

  $( this ).find( ".overlay" ).first().css("width","calc(" + navHeight + "px - 1px)");

});




 //END Window Load
});

