///Active Link - Needs to be refactored this
$("#home a:contains('Home')").parent().addClass('active');
$("#walkthrough a:contains('Walkthroughs')").parent().addClass('active');
$("#gettingStarted a:contains('Getting Started')").parent().addClass('active');
$("#faqs a:contains('FAQS')").parent().addClass('active');
$("#student a:contains('Student')").parent().addClass('active');
//faqs
$("#teacher a:contains('Teacher')").parent().addClass('active');
$("#lessons a:contains('Teacher')").parent().addClass('active');
$("#markbook a:contains('Teacher')").parent().addClass('active');
$("#resources a:contains('Teacher')").parent().addClass('active');
$("#digitalbook a:contains('Teacher')").parent().addClass('active');
$("#assessment a:contains('Teacher')").parent().addClass('active');
$("#usermanager a:contains('Teacher')").parent().addClass('active');
$("#administrator a:contains('Administrator')").parent().addClass('active');

//technical
$("#technical a:contains('Technical')").parent().addClass('active');
$("#login a:contains('Technical')").parent().addClass('active');
$("#filtering a:contains('Technical')").parent().addClass('active');
$("#browsers a:contains('Technical')").parent().addClass('active');



$("#news a:contains('News')").parent().addClass('active');
$("#tools a:contains('Tools')").parent().addClass('active');

//tools
$("#parent a:contains('Parent Letter')").parent().addClass('active');


//appending nav when resizing to mobile
$( "#navlist" ).children().clone().appendTo( $( "#topnavlist" ) );

//loading and appending the headline to the homepage
$( "#head-date" ).load("news.html .media-left:first>div");
$( "#head-text" ).load( "news.html .media:first-of-type .media-body>p:nth-child(-n+3)", function() {
	$( "#head-text" ).append("<p><a class='pull-right' href='news.html'>...Read more</a></p>");
});
