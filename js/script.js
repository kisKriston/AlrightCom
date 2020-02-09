// On click About Us

document.querySelector('.aboutus-image').addEventListener('click', function() {
        
    if (document.querySelector('#grid-wrapper').style.gridTemplateColumns !== "5fr 20fr 1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr 0px") {
        
        document.querySelector('#grid-wrapper').style.gridTemplateColumns = "5fr 20fr 1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr 0px";
        document.querySelector('.aboutus-image img').src = "images/aboutus_color.jpg";
        document.querySelector('.news-image img').src = "images/news_small.jpg";
        document.querySelector('.services-image img').src = "images/services_small.jpg";
        document.querySelector('.customers-image img').src = "images/customers_small.jpg";
        document.querySelector('.blog-image img').src = "images/blog_small.jpg";
        document.querySelector('.contact-image img').src = "images/contact_small.jpg";
    } else {
        document.querySelector('#grid-wrapper').style.gridTemplateColumns = "1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr 0px";
        document.querySelector('.aboutus-image img').src = "images/aboutus_grey.jpg";
        document.querySelector('.news-image img').src = "images/news_grey.jpg";
        document.querySelector('.services-image img').src = "images/services_grey.jpg";
        document.querySelector('.customers-image img').src = "images/customers_grey.jpg";
        document.querySelector('.blog-image img').src = "images/blog_grey.jpg";
        document.querySelector('.contact-image img').src = "images/contact_grey.jpg";
    }
});



// On click News

document.querySelector('.news-image').addEventListener('click', function() {
        
    if (document.querySelector('#grid-wrapper').style.gridTemplateColumns !== "1fr 0px 5fr 20fr 1fr 0px 1fr 0px 1fr 0px 1fr 0px") {
        
        document.querySelector('#grid-wrapper').style.gridTemplateColumns = "1fr 0px 5fr 20fr 1fr 0px 1fr 0px 1fr 0px 1fr 0px";
        document.querySelector('.aboutus-image img').src = "images/aboutus_small.jpg";
        document.querySelector('.news-image img').src = "images/news_grey.jpg";
        document.querySelector('.services-image img').src = "images/services_small.jpg";
        document.querySelector('.customers-image img').src = "images/customers_small.jpg";
        document.querySelector('.blog-image img').src = "images/blog_small.jpg";
        document.querySelector('.contact-image img').src = "images/contact_small.jpg";
    } else {
        document.querySelector('#grid-wrapper').style.gridTemplateColumns = "1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr 0px";
        document.querySelector('.news-image img').src = "images/news_grey.jpg";
        document.querySelector('.aboutus-image img').src = "images/aboutus_grey.jpg";
        document.querySelector('.services-image img').src = "images/services_grey.jpg";
        document.querySelector('.customers-image img').src = "images/customers_grey.jpg";
        document.querySelector('.blog-image img').src = "images/blog_grey.jpg";
        document.querySelector('.contact-image img').src = "images/contact_grey.jpg";
    }
});



// On click Services

document.querySelector('.services-image').addEventListener('click', function() {
        
    if (document.querySelector('#grid-wrapper').style.gridTemplateColumns !== "1fr 0px 1fr 0px 5fr 20fr 1fr 0px 1fr 0px 1fr 0px") {
        
        document.querySelector('#grid-wrapper').style.gridTemplateColumns = "1fr 0px 1fr 0px 5fr 20fr 1fr 0px 1fr 0px 1fr 0px";
        document.querySelector('.services-image img').src = "images/services_color.jpg";
        document.querySelector('.aboutus-image img').src = "images/aboutus_small.jpg";
        document.querySelector('.news-image img').src = "images/news_small.jpg";
        document.querySelector('.customers-image img').src = "images/customers_small.jpg";
        document.querySelector('.blog-image img').src = "images/blog_small.jpg";
        document.querySelector('.contact-image img').src = "images/contact_small.jpg";
    } else {
        document.querySelector('#grid-wrapper').style.gridTemplateColumns = "1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr 0px";
        document.querySelector('.aboutus-image img').src = "images/aboutus_grey.jpg";
        document.querySelector('.news-image img').src = "images/news_grey.jpg";
        document.querySelector('.services-image img').src = "images/services_grey.jpg";
        document.querySelector('.customers-image img').src = "images/customers_grey.jpg";
        document.querySelector('.blog-image img').src = "images/blog_grey.jpg";
        document.querySelector('.contact-image img').src = "images/contact_grey.jpg";
    }
});



// On click Customers

document.querySelector('.customers-image').addEventListener('click', function() {
        
    if (document.querySelector('#grid-wrapper').style.gridTemplateColumns !== "1fr 0px 1fr 0px 1fr 0px 5fr 20fr 1fr 0px 1fr 0px") {
        
        document.querySelector('#grid-wrapper').style.gridTemplateColumns = "1fr 0px 1fr 0px 1fr 0px 5fr 20fr 1fr 0px 1fr 0px";
        document.querySelector('.customers-image img').src = "images/customers_color.jpg";
        document.querySelector('.aboutus-image img').src = "images/aboutus_small.jpg";
        document.querySelector('.news-image img').src = "images/news_small.jpg";
        document.querySelector('.services-image img').src = "images/services_small.jpg";
        document.querySelector('.blog-image img').src = "images/blog_small.jpg";
        document.querySelector('.contact-image img').src = "images/contact_small.jpg";
    } else {
        document.querySelector('#grid-wrapper').style.gridTemplateColumns = "1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr 0px";
        document.querySelector('.aboutus-image img').src = "images/aboutus_grey.jpg";
        document.querySelector('.news-image img').src = "images/news_grey.jpg";
        document.querySelector('.services-image img').src = "images/services_grey.jpg";
        document.querySelector('.customers-image img').src = "images/customers_grey.jpg";
        document.querySelector('.blog-image img').src = "images/blog_grey.jpg";
        document.querySelector('.contact-image img').src = "images/contact_grey.jpg";
    }
});



// On click Blog

document.querySelector('.blog-image').addEventListener('click', function() {
        
    if (document.querySelector('#grid-wrapper').style.gridTemplateColumns !== "1fr 0px 1fr 0px 1fr 0px 1fr 0px 5fr 20fr 1fr 0px") {
        
        document.querySelector('#grid-wrapper').style.gridTemplateColumns = "1fr 0px 1fr 0px 1fr 0px 1fr 0px 5fr 20fr 1fr 0px";
        document.querySelector('.blog-image img').src = "images/blog_color.jpg";
        document.querySelector('.aboutus-image img').src = "images/aboutus_small.jpg";
        document.querySelector('.news-image img').src = "images/news_small.jpg";
        document.querySelector('.services-image img').src = "images/services_small.jpg";
        document.querySelector('.customers-image img').src = "images/customers_small.jpg";
        document.querySelector('.contact-image img').src = "images/contact_small.jpg";
    } else {
        document.querySelector('#grid-wrapper').style.gridTemplateColumns = "1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr 0px";
        document.querySelector('.aboutus-image img').src = "images/aboutus_grey.jpg";
        document.querySelector('.news-image img').src = "images/news_grey.jpg";
        document.querySelector('.services-image img').src = "images/services_grey.jpg";
        document.querySelector('.customers-image img').src = "images/customers_grey.jpg";
        document.querySelector('.blog-image img').src = "images/blog_grey.jpg";
        document.querySelector('.contact-image img').src = "images/contact_grey.jpg";
    }
});



// On click Contact

document.querySelector('.contact-image').addEventListener('click', function() {
        
    if (document.querySelector('#grid-wrapper').style.gridTemplateColumns !== "1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr 0px 5fr 20fr") {
        
        document.querySelector('#grid-wrapper').style.gridTemplateColumns = "1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr 0px 5fr 20fr";
        document.querySelector('.contact-image img').src = "images/contact_color.jpg";
        document.querySelector('.aboutus-image img').src = "images/aboutus_small.jpg";
        document.querySelector('.news-image img').src = "images/news_small.jpg";
        document.querySelector('.services-image img').src = "images/services_small.jpg";
        document.querySelector('.customers-image img').src = "images/customers_small.jpg";
        document.querySelector('.blog-image img').src = "images/blog_small.jpg";
    } else {
        document.querySelector('#grid-wrapper').style.gridTemplateColumns = "1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr 0px";
        document.querySelector('.aboutus-image img').src = "images/aboutus_grey.jpg";
        document.querySelector('.news-image img').src = "images/news_grey.jpg";
        document.querySelector('.services-image img').src = "images/services_grey.jpg";
        document.querySelector('.customers-image img').src = "images/customers_grey.jpg";
        document.querySelector('.blog-image img').src = "images/blog_grey.jpg";
        document.querySelector('.contact-image img').src = "images/contact_grey.jpg";
    }
});



/*
document.querySelector('.aboutus-image img').addEventListener('mouseover', function() {
    document.querySelector('.aboutus-image img').src = "images/aboutus_color.jpg";
});
document.querySelector('.aboutus-image').addEventListener('mouseout', function() {
    document.querySelector('.aboutus-image img').src = "images/aboutus_grey.jpg";
});

document.querySelector('.news-image img').addEventListener('mouseenter', function() {
    document.querySelector('.news-image img').src = "images/news_color.jpg";
});
document.querySelector('.news-image').addEventListener('mouseout', function() {
    document.querySelector('.news-image img').src = "images/news_grey.jpg";
});

document.querySelector('.services-image img').addEventListener('mouseenter', function() {
    document.querySelector('.services-image img').src = "images/services_color.jpg";
});
document.querySelector('.services-image').addEventListener('mouseout', function() {
    document.querySelector('.services-image img').src = "images/services_grey.jpg";
});

document.querySelector('.customers-image img').addEventListener('mouseenter', function() {
    document.querySelector('.customers-image img').src = "images/customers_color.jpg";
});
document.querySelector('.customers-image').addEventListener('mouseout', function() {
    document.querySelector('.customers-image img').src = "images/customers_grey.jpg";
});

document.querySelector('.blog-image img').addEventListener('mouseenter', function() {
    document.querySelector('.blog-image img').src = "images/blog_color.jpg";
});
document.querySelector('.blog-image').addEventListener('mouseout', function() {
    document.querySelector('.blog-image img').src = "images/blog_grey.jpg";
});

document.querySelector('.contact-image img').addEventListener('mouseenter', function() {
    document.querySelector('.contact-image img').src = "images/contact_color.jpg";
});
document.querySelector('.contact-image').addEventListener('mouseout', function() {
    document.querySelector('.contact-image img').src = "images/contact_grey.jpg";
});
*/

























