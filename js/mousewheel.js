/*******************************/
/* Mouse wheel scroll function */


$(document).ready(function(){
$(window).bind('mousewheel DOMMouseScroll', function(event){
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {		
		
		$(".content > *").css("opacity", "0");	/* opacity = 0 */

		if ($("#aboutus-content").css("display") === "flex") {
				
			$("#aboutus-content").animate({width: "0px"}, 151, function(){
				$(".content > *").animate({opacity: '1'}, 151);	/* opacity = 1 */
				$("#aboutus-content").css("display", "none");
			});

			$(".outer-div").animate({width: x/6}, 151);
			
			$("#aboutus-image").animate({width: x/6}, 151, function(){
				$("#aboutus-grey").attr("src", "images/aboutus_grey.jpg");
				$("#aboutus-color").attr("src", "images/aboutus_color.jpg");
			});
			$("#news-grey").attr("src", "images/news_grey_small.jpg");
			$("#news-color").attr("src", "images/news_color_small_empty.jpg");
			$("#news-image").animate({width: x/6}, 151, function(){
				$("#news-grey").attr("src", "images/news_grey.jpg");
				$("#news-color").attr("src", "images/news_color.jpg");
			});
			$("#services-grey").attr("src", "images/services_grey_small.jpg");
			$("#services-color").attr("src", "images/services_color_small_empty.jpg");
			$("#services-image").animate({width: x/6}, 151, function(){
				$("#services-grey").attr("src", "images/services_grey.jpg");
				$("#services-color").attr("src", "images/services_color.jpg");
			});
			$("#customers-grey").attr("src", "images/customers_grey_small.jpg");
			$("#customers-color").attr("src", "images/customers_color_small_empty.jpg");
			$("#customers-image").animate({width: x/6}, 151, function(){
				$("#customers-grey").attr("src", "images/customers_grey.jpg");
				$("#customers-color").attr("src", "images/customers_color.jpg");
			});
			$("#blog-grey").attr("src", "images/blog_grey_small.jpg");
			$("#blog-color").attr("src", "images/blog_color_small_empty.jpg");
			$("#blog-image").animate({width: x/6}, 151, function(){
				$("#blog-grey").attr("src", "images/blog_grey.jpg");
				$("#blog-color").attr("src", "images/blog_color.jpg");
			});
			$("#contact-grey").attr("src", "images/contact_grey_small.jpg");
			$("#contact-color").attr("src", "images/contact_color_small_empty.jpg");
			$("#contact-image").animate({width: x/6}, 151, function(){
				$("#contact-grey").attr("src", "images/contact_grey.jpg");
				$("#contact-color").attr("src", "images/contact_color.jpg");
			});
			$("#header-line").attr("src", "images/header_with_logo.png");
				
		} else if ($("#news-content").css("display") === "flex") {
				
			$("#aboutus-grey").attr("src", "images/aboutus_color.jpg");
			$("#aboutus-color").attr("src", "images/aboutus_color.jpg");				
			$("#aboutus").animate({width: x*5/6}, 151);
			$("#aboutus-image").animate({top: '20px'}, 151, function(){
				$(".content > *").animate({opacity: '1'}, 151);	/* opacity = 1 */
				$("#aboutus-image").animate({top: '0px'}, 151);
			});
			$("#aboutus-content").css("display", "flex");
			$("#aboutus-content").animate({width: x*4/6}, 151);
			$("#aboutus-image").css("width", x/6);        
       
			$(".outer-div").css("width", "auto");		

			$("#news-content").animate({width: "0px"}, 151, function(){
				$("#news-content").css("display", "none");
			});
			
			$("#news-grey").attr("src", "images/news_grey_small.jpg");
			$("#news-color").attr("src", "images/news_color_small_empty.jpg");			
			$("#news-image").animate({width: x/30}, 151, function(){
				$("#news-grey").attr("src", "images/news_grey_small.jpg");
				$("#news-color").attr("src", "images/news_color_small.jpg");
			});		

			$("#header-line").attr("src", "images/header_with_x.png");
				
		} else if ($("#services-content").css("display") === "flex") {
			
			$("#news-grey").attr("src", "images/news_color.jpg");
			$("#news-color").attr("src", "images/news_color.jpg");
			$("#news").animate({width: x*5/6}, 151);
			$("#news-image").animate({top: '20px'}, 151, function(){
				$(".content > *").animate({opacity: '1'}, 151);	/* opacity = 1 */
				$("#news-image").animate({top: '0px'}, 151);
			});
			$("#news-content").css("display", "flex");
			$("#news-content").animate({width: x*4/6}, 151);
			$("#news-image").css("width", x/6);
			$(".outer-div").css("width", "auto");

			$("#services-content").animate({width: "0px"}, 151, function(){
				$("#services-content").css("display", "none");
			});
			
			$("#services-grey").attr("src", "images/services_grey_small.jpg");
			$("#services-color").attr("src", "images/services_color_small_empty.jpg");			
			$("#services-image").animate({width: x/30}, 151, function(){
				$("#services-grey").attr("src", "images/services_grey_small.jpg");
				$("#services-color").attr("src", "images/services_color_small.jpg");
			});

			$("#header-line").attr("src", "images/header_with_x.png");
			
		} else if ($("#customers-content").css("display") === "flex") {
			
			$("#services-grey").attr("src", "images/services_color.jpg");
			$("#services-color").attr("src", "images/services_color.jpg");
			$("#services").animate({width: x*5/6}, 151);
			$("#services-image").animate({top: '20px'}, 151, function(){
				$(".content > *").animate({opacity: '1'}, 151);	/* opacity = 1 */
				$("#services-image").animate({top: '0px'}, 151);
			});
			$("#services-content").css("display", "flex");
			$("#services-content").animate({width: x*4/6}, 151);
			$("#services-image").css("width", x/6);
			$(".outer-div").css("width", "auto");		

			$("#customers-content").animate({width: "0px"}, 151, function(){
				$("#customers-content").css("display", "none");
			});
			
			$("#customers-grey").attr("src", "images/customers_grey_small.jpg");
			$("#customers-color").attr("src", "images/customers_color_small_empty.jpg");
			$("#customers-image").animate({width: x/30}, 151, function(){
				$("#customers-grey").attr("src", "images/customers_grey_small.jpg");
				$("#customers-color").attr("src", "images/customers_color_small.jpg");
			});

			$("#header-line").attr("src", "images/header_with_x.png");
			
		} else if ($("#blog-content").css("display") === "flex") {
			
			$("#customers-grey").attr("src", "images/customers_color.jpg");
			$("#customers-color").attr("src", "images/customers_color.jpg");
			$("#customers").animate({width: x*5/6}, 151);
			$("#customers-image").animate({top: '20px'}, 151, function(){
				$(".content > *").animate({opacity: '1'}, 151);	/* opacity = 1 */
				$("#customers-image").animate({top: '0px'}, 151);
			});
			$("#customers-content").css("display", "flex");
			$("#customers-content").animate({width: x*4/6}, 151);
			$("#customers-image").css("width", x/6);
			$(".outer-div").css("width", "auto");		

			$("#blog-content").animate({width: "0px"}, 151, function(){
				$("#blog-content").css("display", "none");
			});
			
			$("#blog-grey").attr("src", "images/blog_grey_small.jpg");
			$("#blog-color").attr("src", "images/blog_color_small_empty.jpg");			
			$("#blog-image").animate({width: x/30}, 151, function(){
				$("#blog-grey").attr("src", "images/blog_grey_small.jpg");
				$("#blog-color").attr("src", "images/blog_color_small.jpg");
			});

			$("#header-line").attr("src", "images/header_with_x.png");
				
		} else if ($("#contact-content").css("display") === "flex") {
				
			$("#blog-grey").attr("src", "images/blog_color.jpg");
			$("#blog-color").attr("src", "images/blog_color.jpg");
			$("#blog").animate({width: x*5/6}, 151);
			$("#blog-image").animate({top: '20px'}, 151, function(){
				$(".content > *").animate({opacity: '1'}, 151);	/* opacity = 1 */
				$("#blog-image").animate({top: '0px'}, 151);
			});
			$("#blog-content").css("display", "flex");
			$("#blog-content").animate({width: x*4/6}, 151);
			$("#blog-image").css("width", x/6);
			$(".outer-div").css("width", "auto");		

			$("#contact-content").animate({width: "0px"}, 151, function(){
				$("#contact-content").css("display", "none");
			});
			
			$("#contact-grey").attr("src", "images/contact_grey_small.jpg");
			$("#contact-color").attr("src", "images/contact_color_small_empty.jpg");			
			$("#contact-image").animate({width: x/30}, 151, function(){
				$("#contact-grey").attr("src", "images/contact_grey_small.jpg");
				$("#contact-color").attr("src", "images/contact_color_small.jpg");
			});

			$("#header-line").attr("src", "images/header_with_x.png");
			
		} else if ($(".content").css("display") === "none") {
			
			$("#contact-grey").attr("src", "images/contact_color.jpg");
			$("#contact-color").attr("src", "images/contact_color.jpg");
			$("#contact").animate({width: x*5/6}, 151);
			$("#contact-image").animate({top: '20px'}, 151, function(){			
				$(".content > *").animate({opacity: '1'}, 151);	/* opacity = 1 */			
				$("#contact-image").animate({top: '0px'}, 151);
			});
			$("#contact-content").css("display", "flex");
			$("#contact-content").animate({width: x*4/6}, 151);
			$("#contact-image").css("width", x/6);        
        
			$(".outer-div").css("width", "auto");
			
			$("#news-grey").attr("src", "images/news_grey_small.jpg");
			$("#news-color").attr("src", "images/news_color_small_empty.jpg");			
			$("#news-image").animate({width: x/30}, 151, function(){
				$("#news-grey").attr("src", "images/news_grey_small.jpg");
				$("#news-color").attr("src", "images/news_color_small.jpg");
			});
			$("#services-grey").attr("src", "images/services_grey_small.jpg");
			$("#services-color").attr("src", "images/services_color_small_empty.jpg");			
			$("#services-image").animate({width: x/30}, 151, function(){
				$("#services-grey").attr("src", "images/services_grey_small.jpg");
				$("#services-color").attr("src", "images/services_color_small.jpg");
			});
			$("#customers-grey").attr("src", "images/customers_grey_small.jpg");
			$("#customers-color").attr("src", "images/customers_color_small_empty.jpg");			
			$("#customers-image").animate({width: x/30}, 151, function(){
				$("#customers-grey").attr("src", "images/customers_grey_small.jpg");
				$("#customers-color").attr("src", "images/customers_color_small.jpg");
			});
			$("#blog-grey").attr("src", "images/blog_grey_small.jpg");
			$("#blog-color").attr("src", "images/blog_color_small_empty.jpg");			
			$("#blog-image").animate({width: x/30}, 151, function(){
				$("#blog-grey").attr("src", "images/blog_grey_small.jpg");
				$("#blog-color").attr("src", "images/blog_color_small.jpg");
			});
			$("#aboutus-grey").attr("src", "images/aboutus_grey_small.jpg");
			$("#aboutus-color").attr("src", "images/aboutus_color_small_empty.jpg");			
			$("#aboutus-image").animate({width: x/30}, 151, function(){
				$("#aboutus-grey").attr("src", "images/aboutus_grey_small.jpg");
				$("#aboutus-color").attr("src", "images/aboutus_color_small.jpg");
			});
			
			$("#header-line").attr("src", "images/header_with_x.png");
		
		}
		
        console.log('scrolling up !');
			
    } else {
		
		$(".content > *").css("opacity", "0");	/* opacity = 0 */
		
		if ($("#contact-content").css("display") === "flex") {
				
			$("#contact-content").animate({width: "0px"}, 151, function(){
				$(".content > *").animate({opacity: '1'}, 151);	/* opacity = 1 */
				$("#contact-content").css("display", "none");
			});

			$(".outer-div").animate({width: x/6}, 151);
	
			$("#aboutus-grey").attr("src", "images/aboutus_grey_small.jpg");
			$("#aboutus-color").attr("src", "images/aboutus_color_small_empty.jpg");			
			$("#aboutus-image").animate({width: x/6}, 151, function(){
				$("#aboutus-grey").attr("src", "images/aboutus_grey.jpg");
				$("#aboutus-color").attr("src", "images/aboutus_color.jpg");
			});
			$("#news-grey").attr("src", "images/news_grey_small.jpg");
			$("#news-color").attr("src", "images/news_color_small_empty.jpg");			
			$("#news-image").animate({width: x/6}, 151, function(){
				$("#news-grey").attr("src", "images/news_grey.jpg");
				$("#news-color").attr("src", "images/news_color.jpg");
			});
			$("#services-grey").attr("src", "images/services_grey_small.jpg");
			$("#services-color").attr("src", "images/services_color_small_empty.jpg");			
			$("#services-image").animate({width: x/6}, 151, function(){
				$("#services-grey").attr("src", "images/services_grey.jpg");
				$("#services-color").attr("src", "images/services_color.jpg");
			});
			$("#customers-grey").attr("src", "images/customers_grey_small.jpg");
			$("#customers-color").attr("src", "images/customers_color_small_empty.jpg");			
			$("#customers-image").animate({width: x/6}, 151, function(){
				$("#customers-grey").attr("src", "images/customers_grey.jpg");
				$("#customers-color").attr("src", "images/customers_color.jpg");
			});
			$("#blog-grey").attr("src", "images/blog_grey_small.jpg");
			$("#blog-color").attr("src", "images/blog_color_small_empty.jpg");			
			$("#blog-image").animate({width: x/6}, 151, function(){
				$("#blog-grey").attr("src", "images/blog_grey.jpg");
				$("#blog-color").attr("src", "images/blog_color.jpg");
			});
			$("#contact-grey").attr("src", "images/contact_grey_small.jpg");
			$("#contact-color").attr("src", "images/contact_color_small_empty.jpg");			
			$("#contact-image").animate({width: x/6}, 151, function(){
				$("#contact-grey").attr("src", "images/contact_grey.jpg");
				$("#contact-color").attr("src", "images/contact_color.jpg");
			});
			$("#header-line").attr("src", "images/header_with_logo.png");
			
		} else if ($("#blog-content").css("display") === "flex") {
			
			$("#contact-grey").attr("src", "images/contact_color.jpg");
			$("#contact-color").attr("src", "images/contact_color.jpg");
			$("#contact").animate({width: x*5/6}, 151);
			$("#contact-image").animate({top: '20px'}, 151, function(){
				$(".content > *").animate({opacity: '1'}, 151);	/* opacity = 1 */
				$("#contact-image").animate({top: '0px'}, 151);
			});
			$("#contact-content").css("display", "flex");
			$("#contact-content").animate({width: x*4/6}, 151);
			$("#contact-image").css("width", x/6);
			$(".outer-div").css("width", "auto");		

			$("#blog-content").animate({width: "0px"}, 151, function(){
				$("#blog-content").css("display", "none");
			});
			
			$("#blog-grey").attr("src", "images/blog_grey_small.jpg");
			$("#blog-color").attr("src", "images/blog_color_small_empty.jpg");			
			$("#blog-image").animate({width: x/30}, 151, function(){
				$("#blog-grey").attr("src", "images/blog_grey_small.jpg");
				$("#blog-color").attr("src", "images/blog_color_small.jpg");
			});

			$("#header-line").attr("src", "images/header_with_x.png");
		
		} else if ($("#customers-content").css("display") === "flex") {
			
			$("#blog-grey").attr("src", "images/blog_color.jpg");
			$("#blog-color").attr("src", "images/blog_color.jpg");
			$("#blog").animate({width: x*5/6}, 151);
			$("#blog-image").animate({top: '20px'}, 151, function(){
				$(".content > *").animate({opacity: '1'}, 151);	/* opacity = 1 */
				$("#blog-image").animate({top: '0px'}, 151);
			});
			$("#blog-content").css("display", "flex");
			$("#blog-content").animate({width: x*4/6}, 151);
			$("#blog-image").css("width", x/6);
			$(".outer-div").css("width", "auto");		

			$("#customers-content").animate({width: "0px"}, 151, function(){
				$("#customers-content").css("display", "none");
			});
			
			$("#customers-grey").attr("src", "images/customers_grey_small.jpg");
			$("#customers-color").attr("src", "images/customers_color_small_empty.jpg");			
			$("#customers-image").animate({width: x/30}, 151, function(){
				$("#customers-grey").attr("src", "images/customers_grey_small.jpg");
				$("#customers-color").attr("src", "images/customers_color_small.jpg");
			});

			$("#header-line").attr("src", "images/header_with_x.png");
		
		} else if ($("#services-content").css("display") === "flex") {
			
			$("#customers-grey").attr("src", "images/customers_color.jpg");
			$("#customers-color").attr("src", "images/customers_color.jpg");
			$("#customers").animate({width: x*5/6}, 151);
			$("#customers-image").animate({top: '20px'}, 151, function(){
				$(".content > *").animate({opacity: '1'}, 151);	/* opacity = 1 */
				$("#customers-image").animate({top: '0px'}, 151);
			});
			$("#customers-content").css("display", "flex");
			$("#customers-content").animate({width: x*4/6}, 151);
			$("#customers-image").css("width", x/6);
			$(".outer-div").css("width", "auto");		

			$("#services-content").animate({width: "0px"}, 151, function(){
				$("#services-content").css("display", "none");
			});
			
			$("#services-grey").attr("src", "images/services_grey_small.jpg");
			$("#services-color").attr("src", "images/services_color_small_empty.jpg");			
			$("#services-image").animate({width: x/30}, 151, function(){
				$("#services-grey").attr("src", "images/services_grey_small.jpg");
				$("#services-color").attr("src", "images/services_color_small.jpg");
			});

			$("#header-line").attr("src", "images/header_with_x.png");
		
		} else if ($("#news-content").css("display") === "flex") {
			
			$("#services-grey").attr("src", "images/services_color.jpg");
			$("#services-color").attr("src", "images/services_color.jpg");
			$("#services").animate({width: x*5/6}, 151);
			$("#services-image").animate({top: '20px'}, 151, function(){
				$(".content > *").animate({opacity: '1'}, 151);	/* opacity = 1 */
				$("#services-image").animate({top: '0px'}, 151);
			});
			$("#services-content").css("display", "flex");
			$("#services-content").animate({width: x*4/6}, 151);
			$("#services-image").css("width", x/6);
			$(".outer-div").css("width", "auto");		

			$("#news-content").animate({width: "0px"}, 151, function(){
				$("#news-content").css("display", "none");
			});
			
			$("#news-grey").attr("src", "images/news_grey_small.jpg");
			$("#news-color").attr("src", "images/news_color_small_empty.jpg");			
			$("#news-image").animate({width: x/30}, 151, function(){
				$("#news-grey").attr("src", "images/news_grey_small.jpg");
				$("#news-color").attr("src", "images/news_color_small.jpg");
			});

			$("#header-line").attr("src", "images/header_with_x.png");
		
		} else if ($("#aboutus-content").css("display") === "flex") {
			
			$("#news-grey").attr("src", "images/news_color.jpg");
			$("#news-color").attr("src", "images/news_color.jpg");
			$("#news").animate({width: x*5/6}, 151);
			$("#news-image").animate({top: '20px'}, 151, function(){
				$(".content > *").animate({opacity: '1'}, 151);	/* opacity = 1 */
				$("#news-image").animate({top: '0px'}, 151);
			});
			$("#news-content").css("display", "flex");
			$("#news-content").animate({width: x*4/6}, 151);
			$("#news-image").css("width", x/6);
			$(".outer-div").css("width", "auto");		
	
			$("#aboutus-content").animate({width: "0px"}, 151, function(){
				$("#aboutus-content").css("display", "none");
			});
	
			$("#aboutus-grey").attr("src", "images/aboutus_grey_small.jpg");
			$("#aboutus-color").attr("src", "images/aboutus_color_small_empty.jpg");			
			$("#aboutus-image").animate({width: x/30}, 151, function(){
				$("#aboutus-grey").attr("src", "images/aboutus_grey_small.jpg");
				$("#aboutus-color").attr("src", "images/aboutus_color_small.jpg");
			});

			$("#header-line").attr("src", "images/header_with_x.png");
		
		} else if ($(".content").css("display") === "none") {
			
			$("#aboutus-grey").attr("src", "images/aboutus_color.jpg");
			$("#aboutus-color").attr("src", "images/aboutus_color.jpg");
			$("#aboutus").animate({width: x*5/6}, 151);
			$("#aboutus-image").animate({top: '20px'}, 151, function(){			
				$(".content > *").animate({opacity: '1'}, 151);	/* opacity = 1 */			
				$("#aboutus-image").animate({top: '0px'}, 151);
			});
			$("#aboutus-content").css("display", "flex");
			$("#aboutus-content").animate({width: x*4/6}, 151);
			$("#aboutus-image").css("width", x/6);        
        
			$(".outer-div").css("width", "auto");
			
			$("#news-grey").attr("src", "images/news_grey_small.jpg");
			$("#news-color").attr("src", "images/news_color_small_empty.jpg");			
			$("#news-image").animate({width: x/30}, 151, function(){
				$("#news-grey").attr("src", "images/news_grey_small.jpg");
				$("#news-color").attr("src", "images/news_color_small.jpg");
			});
			$("#services-grey").attr("src", "images/services_grey_small.jpg");
			$("#services-color").attr("src", "images/services_color_small_empty.jpg");			
			$("#services-image").animate({width: x/30}, 151, function(){
				$("#services-grey").attr("src", "images/services_grey_small.jpg");
				$("#services-color").attr("src", "images/services_color_small.jpg");
			});
			$("#customers-grey").attr("src", "images/customers_grey_small.jpg");
			$("#customers-color").attr("src", "images/customers_color_small_empty.jpg");			
			$("#customers-image").animate({width: x/30}, 151, function(){
				$("#customers-grey").attr("src", "images/customers_grey_small.jpg");
				$("#customers-color").attr("src", "images/customers_color_small.jpg");
			});
			$("#blog-grey").attr("src", "images/blog_grey_small.jpg");
			$("#blog-color").attr("src", "images/blog_color_small_empty.jpg");			
			$("#blog-image").animate({width: x/30}, 151, function(){
				$("#blog-grey").attr("src", "images/blog_grey_small.jpg");
				$("#blog-color").attr("src", "images/blog_color_small.jpg");
			});
			$("#contact-grey").attr("src", "images/contact_grey_small.jpg");
			$("#contact-color").attr("src", "images/contact_color_small_empty.jpg");			
			$("#contact-image").animate({width: x/30}, 151, function(){
				$("#contact-grey").attr("src", "images/contact_grey_small.jpg");
				$("#contact-color").attr("src", "images/contact_color_small.jpg");
			});

			$("#header-line").attr("src", "images/header_with_x.png");
		
		}
			
		
        console.log('scrolling down !');
    }
});
});
