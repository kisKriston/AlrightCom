/*****************************************/
/***** Mouse hover menu color change *****/

$("#aboutus").mouseenter(function() {
    $("#aboutus-grey").animate({
        opacity: 0
    }, 200 );
});
$("#aboutus").mouseleave(function() {
    $("#aboutus-grey").animate({
        opacity: 1
    }, 200 );
});

$("#news").mouseenter(function() {
    $("#news-grey").animate({
        opacity: 0
    }, 200 );
});
$("#news").mouseleave(function() {
    $("#news-grey").animate({
        opacity: 1
    }, 200 );
});

$("#services").mouseenter(function() {
    $("#services-grey").animate({
        opacity: 0
    }, 200 );
});
$("#services").mouseleave(function() {
    $("#services-grey").animate({
        opacity: 1
    }, 200 );
});

$("#customers").mouseenter(function() {
    $("#customers-grey").animate({
        opacity: 0
    }, 200 );
});
$("#customers").mouseleave(function() {
    $("#customers-grey").animate({
        opacity: 1
    }, 200 );
});

$("#blog").mouseenter(function() {
    $("#blog-grey").animate({
        opacity: 0
    }, 200 );
});
$("#blog").mouseleave(function() {
    $("#blog-grey").animate({
        opacity: 1
    }, 200 );
});

$("#contact").mouseenter(function() {
    $("#contact-grey").animate({
        opacity: 0
    }, 200 );
});
$("#contact").mouseleave(function() {
    $("#contact-grey").animate({
        opacity: 1
    }, 200 );
});


/******************************/
/***** Basic declarations *****/


$("main").css("height", "100%");

    var x = $("main").width();
    var y = $(window).height();
    var z = $("main").height();

    $("div.images img").css("maxHeight", y);
    $("div.images img").css("height", z);


/*****************************************/
/***** About us menu click functions *****/

$("#aboutus-image").click(function() {
    $("#aboutus-grey").attr("src", "images/aboutus_color.jpg");
    $("#aboutus-color").attr("src", "images/aboutus_color.jpg");
	
	$(".content > *").css("opacity", "0");	/* opacity = 0 */
	
    if ($("#aboutus-content").css("display") === "none") {        
        $("#aboutus").animate({width: x*5/6}, 297);
        $("#aboutus-image").animate({top: '20px'}, 297, function(){
			
			$(".content > *").animate({opacity: '1'}, 297);	/* opacity = 1 */
			
			$("#aboutus-image").animate({top: '0px'}, 297);
        });
        $("#aboutus-content").css("display", "flex");
        $("#aboutus-content").animate({width: x*4/6}, 297);
		$("#aboutus-image").css("width", x/6);        
        
		$(".outer-div").css("width", "auto");		
		
		$("#news-content").animate({width: "0px"}, 297, function(){
			$("#news-content").css("display", "none");
		});
		$("#services-content").animate({width: "0px"}, 297, function(){
			$("#services-content").css("display", "none");
		});
		$("#customers-content").animate({width: "0px"}, 297, function(){
			$("#customers-content").css("display", "none");
		});
		$("#blog-content").animate({width: "0px"}, 297, function(){
			$("#blog-content").css("display", "none");
		});
		$("#contact-content").animate({width: "0px"}, 297, function(){
			$("#contact-content").css("display", "none");
		});
		
		$("#news-image").animate({width: x/30}, 297);
        $("#news-grey").attr("src", "images/news_grey_small.jpg");
		$("#news-color").attr("src", "images/news_color_small.jpg");
		$("#services-image").animate({width: x/30}, 297);
        $("#services-grey").attr("src", "images/services_grey_small.jpg");
		$("#services-color").attr("src", "images/services_color_small.jpg");
		$("#customers-image").animate({width: x/30}, 297);
        $("#customers-grey").attr("src", "images/customers_grey_small.jpg");
		$("#customers-color").attr("src", "images/customers_color_small.jpg");
		$("#blog-image").animate({width: x/30}, 297);
        $("#blog-grey").attr("src", "images/blog_grey_small.jpg");
		$("#blog-color").attr("src", "images/blog_color_small.jpg");
		$("#contact-image").animate({width: x/30}, 297);
        $("#contact-grey").attr("src", "images/contact_grey_small.jpg");
		$("#contact-color").attr("src", "images/contact_color_small.jpg");
		
        $("#header-line").attr("src", "images/header_with_x.png");
    } else {
        $("#aboutus").animate({width: x/6}, 297, function(){
			$("#aboutus-content").css("display", "none");
		});
        $("#aboutus-image").animate({top: '20px'}, 297, function(){
			$("#aboutus-image").animate({top: '0px'}, 297);
        });
		$("#aboutus-content").animate({width: "0px"}, 297);
        $("#aboutus-grey").attr("src", "images/aboutus_grey.jpg");
        $(".outer-div").animate({width: x/6}, 297);
		
        $("#news-color").attr("src", "images/news_grey_small.jpg");
		$("#news-image").animate({width: x/6}, 297, function(){
			$("#news-grey").attr("src", "images/news_grey.jpg");
			$("#news-color").attr("src", "images/news_color.jpg");
		});
        $("#services-color").attr("src", "images/services_grey_small.jpg");
		$("#services-image").animate({width: x/6}, 297, function(){
			$("#services-grey").attr("src", "images/services_grey.jpg");
			$("#services-color").attr("src", "images/services_color.jpg");
		});
        $("#customers-color").attr("src", "images/customers_grey_small.jpg");
		$("#customers-image").animate({width: x/6}, 297, function(){
			$("#customers-grey").attr("src", "images/customers_grey.jpg");
			$("#customers-color").attr("src", "images/customers_color.jpg");
		});
        $("#blog-color").attr("src", "images/blog_grey_small.jpg");
		$("#blog-image").animate({width: x/6}, 297, function(){
			$("#blog-grey").attr("src", "images/blog_grey.jpg");
			$("#blog-color").attr("src", "images/blog_color.jpg");
		});
        $("#contact-color").attr("src", "images/contact_grey_small.jpg");
		$("#contact-image").animate({width: x/6}, 297, function(){
			$("#contact-grey").attr("src", "images/contact_grey.jpg");
			$("#contact-color").attr("src", "images/contact_color.jpg");
		});
        $("#header-line").attr("src", "images/header_with_logo.png");
    }
});


/*************************************/
/***** News menu click functions *****/

$("#news-image").click(function() {
    $("#news-grey").attr("src", "images/news_color.jpg");
    $("#news-color").attr("src", "images/news_color.jpg");
	
	$(".content > *").css("opacity", "0");	/* opacity = 0 */
	
    if ($("#news-content").css("display") === "none") {        
        $("#news").animate({width: x*5/6}, 297);
        $("#news-image").animate({top: '20px'}, 297, function(){
			
			$(".content > *").animate({opacity: '1'}, 297);	/* opacity = 1 */
			
			$("#news-image").animate({top: '0px'}, 297);
        });
		$("#news-content").css("display", "flex");
		$("#news-content").animate({width: x*4/6}, 297);
		$("#news-image").css("width", x/6);
		$(".outer-div").css("width", "auto");
		
		$("#aboutus-content").animate({width: "0px"}, 297, function(){
			$("#aboutus-content").css("display", "none");
		});
		$("#services-content").animate({width: "0px"}, 297, function(){
			$("#services-content").css("display", "none");
		});
		$("#customers-content").animate({width: "0px"}, 297, function(){
			$("#customers-content").css("display", "none");
		});
		$("#blog-content").animate({width: "0px"}, 297, function(){
			$("#blog-content").css("display", "none");
		});
		$("#contact-content").animate({width: "0px"}, 297, function(){
			$("#contact-content").css("display", "none");
		});
		
		$("#aboutus-image").animate({width: x/30}, 297);
        $("#aboutus-grey").attr("src", "images/aboutus_grey_small.jpg");
		$("#aboutus-color").attr("src", "images/aboutus_color_small.jpg");
		$("#services-image").animate({width: x/30}, 297);
        $("#services-grey").attr("src", "images/services_grey_small.jpg");
		$("#services-color").attr("src", "images/services_color_small.jpg");
		$("#customers-image").animate({width: x/30}, 297);
        $("#customers-grey").attr("src", "images/customers_grey_small.jpg");
		$("#customers-color").attr("src", "images/customers_color_small.jpg");
		$("#blog-image").animate({width: x/30}, 297);
        $("#blog-grey").attr("src", "images/blog_grey_small.jpg");
		$("#blog-color").attr("src", "images/blog_color_small.jpg");
		$("#contact-image").animate({width: x/30}, 297);
        $("#contact-grey").attr("src", "images/contact_grey_small.jpg");
		$("#contact-color").attr("src", "images/contact_color_small.jpg");

        $("#header-line").attr("src", "images/header_with_x.png");
    } else {
        $("#news").animate({width: x/6}, 297, function(){
			$("#news-content").css("display", "none");
		});
        $("#news-image").animate({top: '20px'}, 297, function(){
			$("#news-image").animate({top: '0px'}, 297);
        });
		$("#news-content").animate({width: "0px"}, 297);
        $("#news-grey").attr("src", "images/news_grey.jpg");
		$(".outer-div").animate({width: x/6}, 297);
		
        $("#aboutus-color").attr("src", "images/aboutus_grey_small.jpg");
		$("#aboutus-image").animate({width: x/6}, 297, function(){
			$("#aboutus-grey").attr("src", "images/aboutus_grey.jpg");
			$("#aboutus-color").attr("src", "images/aboutus_color.jpg");
		});
        $("#services-color").attr("src", "images/services_grey_small.jpg");
		$("#services-image").animate({width: x/6}, 297, function(){
			$("#services-grey").attr("src", "images/services_grey.jpg");
			$("#services-color").attr("src", "images/services_color.jpg");
		});
        $("#customers-color").attr("src", "images/customers_grey_small.jpg");
		$("#customers-image").animate({width: x/6}, 297, function(){
			$("#customers-grey").attr("src", "images/customers_grey.jpg");
			$("#customers-color").attr("src", "images/customers_color.jpg");
		});
        $("#blog-color").attr("src", "images/blog_grey_small.jpg");
		$("#blog-image").animate({width: x/6}, 297, function(){
			$("#blog-grey").attr("src", "images/blog_grey.jpg");
			$("#blog-color").attr("src", "images/blog_color.jpg");
		});
        $("#contact-color").attr("src", "images/contact_grey_small.jpg");
		$("#contact-image").animate({width: x/6}, 297, function(){
			$("#contact-grey").attr("src", "images/contact_grey.jpg");
			$("#contact-color").attr("src", "images/contact_color.jpg");
		});
        $("#header-line").attr("src", "images/header_with_logo.png");
    }
});


/*****************************************/
/***** Services menu click functions *****/

$("#services-image").click(function() {
    $("#services-grey").attr("src", "images/services_color.jpg");
    $("#services-color").attr("src", "images/services_color.jpg");
	
	$(".content > *").css("opacity", "0");	/* opacity = 0 */
	
    if ($("#services-content").css("display") === "none") {
        $("#services").animate({width: x*5/6}, 297);
        $("#services-image").animate({top: '20px'}, 297, function(){
			
			$(".content > *").animate({opacity: '1'}, 297);	/* opacity = 1 */
			
			$("#services-image").animate({top: '0px'}, 297);
        });
        $("#services-content").css("display", "flex");
        $("#services-content").animate({width: x*4/6}, 297);
		$("#services-image").css("width", x/6);
		$(".outer-div").css("width", "auto");		
		
		$("#aboutus-content").animate({width: "0px"}, 297, function(){
			$("#aboutus-content").css("display", "none");
		});
		$("#news-content").animate({width: "0px"}, 297, function(){
			$("#news-content").css("display", "none");
		});
		$("#customers-content").animate({width: "0px"}, 297, function(){
			$("#customers-content").css("display", "none");
		});
		$("#blog-content").animate({width: "0px"}, 297, function(){
			$("#blog-content").css("display", "none");
		});
		$("#contact-content").animate({width: "0px"}, 297, function(){
			$("#contact-content").css("display", "none");
		});
		
		$("#aboutus-image").animate({width: x/30}, 297);
        $("#aboutus-grey").attr("src", "images/aboutus_grey_small.jpg");
		$("#aboutus-color").attr("src", "images/aboutus_color_small.jpg");
		$("#news-image").animate({width: x/30}, 297);
        $("#news-grey").attr("src", "images/news_grey_small.jpg");
		$("#news-color").attr("src", "images/news_color_small.jpg");
		$("#customers-image").animate({width: x/30}, 297);
        $("#customers-grey").attr("src", "images/customers_grey_small.jpg");
		$("#customers-color").attr("src", "images/customers_color_small.jpg");
		$("#blog-image").animate({width: x/30}, 297);
        $("#blog-grey").attr("src", "images/blog_grey_small.jpg");
		$("#blog-color").attr("src", "images/blog_color_small.jpg");
		$("#contact-image").animate({width: x/30}, 297);
        $("#contact-grey").attr("src", "images/contact_grey_small.jpg");
		$("#contact-color").attr("src", "images/contact_color_small.jpg");
		
        $("#header-line").attr("src", "images/header_with_x.png");
    } else {
        $("#services").animate({width: x/6}, 297, function(){
			$("#services-content").css("display", "none");
		});
        $("#services-image").animate({top: '20px'}, 297, function(){
			$("#services-image").animate({top: '0px'}, 297);
        });
		$("#services-content").animate({width: "0px"}, 297);
        $("#services-grey").attr("src", "images/services_grey.jpg");
		$(".outer-div").animate({width: x/6}, 297);
		
        $("#aboutus-color").attr("src", "images/aboutus_grey_small.jpg");
		$("#aboutus-image").animate({width: x/6}, 297, function(){
			$("#aboutus-grey").attr("src", "images/aboutus_grey.jpg");
			$("#aboutus-color").attr("src", "images/aboutus_color.jpg");
		});
        $("#news-color").attr("src", "images/news_grey_small.jpg");
		$("#news-image").animate({width: x/6}, 297, function(){
			$("#news-grey").attr("src", "images/news_grey.jpg");
			$("#news-color").attr("src", "images/news_color.jpg");
		});
        $("#customers-color").attr("src", "images/customers_grey_small.jpg");
		$("#customers-image").animate({width: x/6}, 297, function(){
			$("#customers-grey").attr("src", "images/customers_grey.jpg");
			$("#customers-color").attr("src", "images/customers_color.jpg");
		});
        $("#blog-color").attr("src", "images/blog_grey_small.jpg");
		$("#blog-image").animate({width: x/6}, 297, function(){
			$("#blog-grey").attr("src", "images/blog_grey.jpg");
			$("#blog-color").attr("src", "images/blog_color.jpg");
		});
        $("#contact-color").attr("src", "images/contact_grey_small.jpg");
		$("#contact-image").animate({width: x/6}, 297, function(){
			$("#contact-grey").attr("src", "images/contact_grey.jpg");
			$("#contact-color").attr("src", "images/contact_color.jpg");
		});
        $("#header-line").attr("src", "images/header_with_logo.png");
    }
});


/******************************************/
/***** Customers menu click functions *****/

$("#customers-image").click(function() {
    $("#customers-grey").attr("src", "images/customers_color.jpg");
    $("#customers-color").attr("src", "images/customers_color.jpg");
	
	$(".content > *").css("opacity", "0");	/* opacity = 0 */
	
    if ($("#customers-content").css("display") === "none") {
        $("#customers").animate({width: x*5/6}, 297);
        $("#customers-image").animate({top: '20px'}, 297, function(){
			
			$(".content > *").animate({opacity: '1'}, 297);	/* opacity = 1 */
			
			$("#customers-image").animate({top: '0px'}, 297);
        });
        $("#customers-content").css("display", "flex");
        $("#customers-content").animate({width: x*4/6}, 297);
		$("#customers-image").css("width", x/6);
		$(".outer-div").css("width", "auto");		
		
		$("#aboutus-content").animate({width: "0px"}, 297, function(){
			$("#aboutus-content").css("display", "none");
		});
		$("#news-content").animate({width: "0px"}, 297, function(){
			$("#news-content").css("display", "none");
		});
		$("#services-content").animate({width: "0px"}, 297, function(){
			$("#services-content").css("display", "none");
		});
		$("#blog-content").animate({width: "0px"}, 297, function(){
			$("#blog-content").css("display", "none");
		});
		$("#contact-content").animate({width: "0px"}, 297, function(){
			$("#contact-content").css("display", "none");
		});
		
		$("#aboutus-image").animate({width: x/30}, 297);
        $("#aboutus-grey").attr("src", "images/aboutus_grey_small.jpg");
		$("#aboutus-color").attr("src", "images/aboutus_color_small.jpg");
		$("#news-image").animate({width: x/30}, 297);
        $("#news-grey").attr("src", "images/news_grey_small.jpg");
		$("#news-color").attr("src", "images/news_color_small.jpg");
		$("#services-image").animate({width: x/30}, 297);
        $("#services-grey").attr("src", "images/services_grey_small.jpg");
		$("#services-color").attr("src", "images/services_color_small.jpg");
		$("#blog-image").animate({width: x/30}, 297);
        $("#blog-grey").attr("src", "images/blog_grey_small.jpg");
		$("#blog-color").attr("src", "images/blog_color_small.jpg");
		$("#contact-image").animate({width: x/30}, 297);
        $("#contact-grey").attr("src", "images/contact_grey_small.jpg");
		$("#contact-color").attr("src", "images/contact_color_small.jpg");
		
        $("#header-line").attr("src", "images/header_with_x.png");
    } else {
        $("#customers").animate({width: x/6}, 297, function(){
			$("#customers-content").css("display", "none");
		});
        $("#customers-image").animate({top: '20px'}, 297, function(){
			$("#customers-image").animate({top: '0px'}, 297);
        });
		$("#customers-content").animate({width: "0px"}, 297);
        $("#customers-grey").attr("src", "images/customers_grey.jpg");
		$(".outer-div").animate({width: x/6}, 297);
		
        $("#aboutus-color").attr("src", "images/aboutus_grey_small.jpg");
		$("#aboutus-image").animate({width: x/6}, 297, function(){
			$("#aboutus-grey").attr("src", "images/aboutus_grey.jpg");
			$("#aboutus-color").attr("src", "images/aboutus_color.jpg");
		});
        $("#news-color").attr("src", "images/news_grey_small.jpg");
		$("#news-image").animate({width: x/6}, 297, function(){
			$("#news-grey").attr("src", "images/news_grey.jpg");
			$("#news-color").attr("src", "images/news_color.jpg");
		});
        $("#services-color").attr("src", "images/services_grey_small.jpg");
		$("#services-image").animate({width: x/6}, 297, function(){
			$("#services-grey").attr("src", "images/services_grey.jpg");
			$("#services-color").attr("src", "images/services_color.jpg");
		});
        $("#blog-color").attr("src", "images/blog_grey_small.jpg");
		$("#blog-image").animate({width: x/6}, 297, function(){
			$("#blog-grey").attr("src", "images/blog_grey.jpg");
			$("#blog-color").attr("src", "images/blog_color.jpg");
		});
        $("#contact-color").attr("src", "images/contact_grey_small.jpg");
		$("#contact-image").animate({width: x/6}, 297, function(){
			$("#contact-grey").attr("src", "images/contact_grey.jpg");
			$("#contact-color").attr("src", "images/contact_color.jpg");
		});
        $("#header-line").attr("src", "images/header_with_logo.png");
    }
});


/*************************************/
/***** Blog menu click functions *****/

$("#blog-image").click(function() {
    $("#blog-grey").attr("src", "images/blog_color.jpg");
    $("#blog-color").attr("src", "images/blog_color.jpg");
	
	$(".content > *").css("opacity", "0");	/* opacity = 0 */
	
    if ($("#blog-content").css("display") === "none") {
        $("#blog").animate({width: x*5/6}, 297);
        $("#blog-image").animate({top: '20px'}, 297, function(){
			
			$(".content > *").animate({opacity: '1'}, 297);	/* opacity = 1 */
			
			$("#blog-image").animate({top: '0px'}, 297);
        });
        $("#blog-content").css("display", "flex");
        $("#blog-content").animate({width: x*4/6}, 297);
		$("#blog-image").css("width", x/6);
		$(".outer-div").css("width", "auto");		
		
		$("#aboutus-content").animate({width: "0px"}, 297, function(){
			$("#aboutus-content").css("display", "none");
		});
		$("#news-content").animate({width: "0px"}, 297, function(){
			$("#news-content").css("display", "none");
		});
		$("#services-content").animate({width: "0px"}, 297, function(){
			$("#services-content").css("display", "none");
		});
		$("#customers-content").animate({width: "0px"}, 297, function(){
			$("#customers-content").css("display", "none");
		});
		$("#contact-content").animate({width: "0px"}, 297, function(){
			$("#contact-content").css("display", "none");
		});
		
		$("#aboutus-image").animate({width: x/30}, 297);
        $("#aboutus-grey").attr("src", "images/aboutus_grey_small.jpg");
		$("#aboutus-color").attr("src", "images/aboutus_color_small.jpg");
		$("#news-image").animate({width: x/30}, 297);
        $("#news-grey").attr("src", "images/news_grey_small.jpg");
		$("#news-color").attr("src", "images/news_color_small.jpg");
		$("#services-image").animate({width: x/30}, 297);
        $("#services-grey").attr("src", "images/services_grey_small.jpg");
		$("#services-color").attr("src", "images/services_color_small.jpg");
		$("#customers-image").animate({width: x/30}, 297);
        $("#customers-grey").attr("src", "images/customers_grey_small.jpg");
		$("#customers-color").attr("src", "images/customers_color_small.jpg");
		$("#contact-image").animate({width: x/30}, 297);
        $("#contact-grey").attr("src", "images/contact_grey_small.jpg");
		$("#contact-color").attr("src", "images/contact_color_small.jpg");
		
        $("#header-line").attr("src", "images/header_with_x.png");
    } else {
        $("#blog").animate({width: x/6}, 297, function(){
			$("#blog-content").css("display", "none");
		});
        $("#blog-image").animate({top: '20px'}, 297, function(){
			$("#blog-image").animate({top: '0px'}, 297);
        });
		$("#blog-content").animate({width: "0px"}, 297);
        $("#blog-grey").attr("src", "images/blog_grey.jpg");
		$(".outer-div").animate({width: x/6}, 297);
		
        $("#aboutus-color").attr("src", "images/aboutus_grey_small.jpg");
		$("#aboutus-image").animate({width: x/6}, 297, function(){
			$("#aboutus-grey").attr("src", "images/aboutus_grey.jpg");
			$("#aboutus-color").attr("src", "images/aboutus_color.jpg");
		});
        $("#news-color").attr("src", "images/news_grey_small.jpg");
		$("#news-image").animate({width: x/6}, 297, function(){
			$("#news-grey").attr("src", "images/news_grey.jpg");
			$("#news-color").attr("src", "images/news_color.jpg");
		});
        $("#services-color").attr("src", "images/services_grey_small.jpg");
		$("#services-image").animate({width: x/6}, 297, function(){
			$("#services-grey").attr("src", "images/services_grey.jpg");
			$("#services-color").attr("src", "images/services_color.jpg");
		});
        $("#customers-color").attr("src", "images/customers_grey_small.jpg");
		$("#customers-image").animate({width: x/6}, 297, function(){
			$("#customers-grey").attr("src", "images/customers_grey.jpg");
			$("#customers-color").attr("src", "images/customers_color.jpg");
		});
        $("#contact-color").attr("src", "images/contact_grey_small.jpg");
		$("#contact-image").animate({width: x/6}, 297, function(){
			$("#contact-grey").attr("src", "images/contact_grey.jpg");
			$("#contact-color").attr("src", "images/contact_color.jpg");
		});
        $("#header-line").attr("src", "images/header_with_logo.png");
    }
});


/****************************************/
/***** Contact menu click functions *****/

$("#contact-image").click(function() {
    $("#contact-grey").attr("src", "images/contact_color.jpg");
    $("#contact-color").attr("src", "images/contact_color.jpg");
	
	$(".content > *").css("opacity", "0");	/* opacity = 0 */
	
    if ($("#contact-content").css("display") === "none") {
        $("#contact").animate({width: x*5/6}, 297);
        $("#contact-image").animate({top: '20px'}, 297, function(){
			
			$(".content > *").animate({opacity: '1'}, 297);	/* opacity = 1 */
			
			$("#contact-image").animate({top: '0px'}, 297);
        });
        $("#contact-content").css("display", "flex");
        $("#contact-content").animate({width: x*4/6}, 297);
		$("#contact-image").css("width", x/6);
		$(".outer-div").css("width", "auto");		
		
		$("#aboutus-content").animate({width: "0px"}, 297, function(){
			$("#aboutus-content").css("display", "none");
		});
		$("#news-content").animate({width: "0px"}, 297, function(){
			$("#news-content").css("display", "none");
		});
		$("#services-content").animate({width: "0px"}, 297, function(){
			$("#services-content").css("display", "none");
		});
		$("#customers-content").animate({width: "0px"}, 297, function(){
			$("#customers-content").css("display", "none");
		});
		$("#blog-content").animate({width: "0px"}, 297, function(){
			$("#blog-content").css("display", "none");
		});
		
		$("#aboutus-image").animate({width: x/30}, 297);
        $("#aboutus-grey").attr("src", "images/aboutus_grey_small.jpg");
		$("#aboutus-color").attr("src", "images/aboutus_color_small.jpg");
		$("#news-image").animate({width: x/30}, 297);
        $("#news-grey").attr("src", "images/news_grey_small.jpg");
		$("#news-color").attr("src", "images/news_color_small.jpg");
		$("#services-image").animate({width: x/30}, 297);
        $("#services-grey").attr("src", "images/services_grey_small.jpg");
		$("#services-color").attr("src", "images/services_color_small.jpg");
		$("#customers-image").animate({width: x/30}, 297);
        $("#customers-grey").attr("src", "images/customers_grey_small.jpg");
		$("#customers-color").attr("src", "images/customers_color_small.jpg");
		$("#blog-image").animate({width: x/30}, 297);
        $("#blog-grey").attr("src", "images/blog_grey_small.jpg");
		$("#blog-color").attr("src", "images/blog_color_small.jpg");
		
        $("#header-line").attr("src", "images/header_with_x.png");
    } else {
        $("#contact").animate({width: x/6}, 297, function(){
			$("#contact-content").css("display", "none");
		});
        $("#contact-image").animate({top: '20px'}, 297, function(){
			$("#contact-image").animate({top: '0px'}, 297);
        });
		$(".outer-div").animate({width: x/6}, 297);
		$("#contact-content").animate({width: "0px"}, 297);
        $("#contact-grey").attr("src", "images/contact_grey.jpg");
		
        $("#aboutus-color").attr("src", "images/aboutus_grey_small.jpg");
		$("#aboutus-image").animate({width: x/6}, 297, function(){
			$("#aboutus-grey").attr("src", "images/aboutus_grey.jpg");
			$("#aboutus-color").attr("src", "images/aboutus_color.jpg");
		});
        $("#news-color").attr("src", "images/news_grey_small.jpg");
		$("#news-image").animate({width: x/6}, 297, function(){
			$("#news-grey").attr("src", "images/news_grey.jpg");
			$("#news-color").attr("src", "images/news_color.jpg");
		});
        $("#services-color").attr("src", "images/services_grey_small.jpg");
		$("#services-image").animate({width: x/6}, 297, function(){
			$("#services-grey").attr("src", "images/services_grey.jpg");
			$("#services-color").attr("src", "images/services_color.jpg");
		});
        $("#customers-color").attr("src", "images/customers_grey_small.jpg");
		$("#customers-image").animate({width: x/6}, 297, function(){
			$("#customers-grey").attr("src", "images/customers_grey.jpg");
			$("#customers-color").attr("src", "images/customers_color.jpg");
		});
        $("#blog-color").attr("src", "images/blog_grey_small.jpg");
		$("#blog-image").animate({width: x/6}, 297, function(){
			$("#blog-grey").attr("src", "images/blog_grey.jpg");
			$("#blog-color").attr("src", "images/blog_color.jpg");
		});
        $("#header-line").attr("src", "images/header_with_logo.png");
    }
});


/************************************/
/***** Header X click functions *****/

$('#hidden-x').click(function() {
	
	$(".content > *").css("opacity", "0");	/* opacity = 0 */
	
	if ($("#header-line").attr("src") === "images/header_with_x.png") {	

		$("#aboutus-content").animate({width: "0px"}, 297, function(){
			
			$(".content > *").animate({opacity: '1'}, 297);	/* opacity = 1 */
			
			$("#aboutus-content").css("display", "none");
		});
		$("#news-content").animate({width: "0px"}, 297, function(){
			$("#news-content").css("display", "none");
		});
		$("#services-content").animate({width: "0px"}, 297, function(){
			$("#services-content").css("display", "none");
		});
		$("#customers-content").animate({width: "0px"}, 297, function(){
			$("#customers-content").css("display", "none");
		});
		$("#blog-content").animate({width: "0px"}, 297, function(){
			$("#blog-content").css("display", "none");
		});
		$("#contact-content").animate({width: "0px"}, 297, function(){
			$("#contact-content").css("display", "none");
		});
		
		$(".outer-div").animate({width: x/6}, 297);
		
        $("#aboutus-image").animate({width: x/6}, 297, function(){
			$("#aboutus-grey").attr("src", "images/aboutus_grey.jpg");
			$("#aboutus-color").attr("src", "images/aboutus_color.jpg");
		});
		$("#news-image").animate({width: x/6}, 297, function(){
			$("#news-grey").attr("src", "images/news_grey.jpg");
			$("#news-color").attr("src", "images/news_color.jpg");
		});
		$("#services-image").animate({width: x/6}, 297, function(){
			$("#services-grey").attr("src", "images/services_grey.jpg");
			$("#services-color").attr("src", "images/services_color.jpg");
		});
		$("#customers-image").animate({width: x/6}, 297, function(){
			$("#customers-grey").attr("src", "images/customers_grey.jpg");
			$("#customers-color").attr("src", "images/customers_color.jpg");
		});
		$("#blog-image").animate({width: x/6}, 297, function(){
			$("#blog-grey").attr("src", "images/blog_grey.jpg");
			$("#blog-color").attr("src", "images/blog_color.jpg");
		});
		$("#contact-image").animate({width: x/6}, 297, function(){
			$("#contact-grey").attr("src", "images/contact_grey.jpg");
			$("#contact-color").attr("src", "images/contact_color.jpg");
		});
        $("#header-line").attr("src", "images/header_with_logo.png");
    } else {		
    }
});
