/*_________jQuery to Collapse the Navbar on Scroll Starts__________*/
$(window).scroll(function() {
	//alert($(".main-nav2").offset().top);
    if ($(".main-nav2").offset().top > 50) {
        $(".secondary-nav").addClass("top-nav-collapse");
    } else {
        $(".secondary-nav").removeClass("top-nav-collapse");
    }
});
/*_________jQuery to Collapse the Navbar on Scroll Ends__________*/


/*__________jQuery for Page Scrolling Feature Starts_________*/
/* Requires jQuery Easing plugin */
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
/*__________jQuery for Page Scrolling Feature Ends_________*/


/*__________Carousel Initializer Starts_________*/
$(document).ready(function() {
	var owl=$(".slider");
	
	owl.owlCarousel({
		singleItem:true,
		navigation: true,
		loop:true,
		autoPlay:true,
		autoPlayTimeout:5000,
		autoPlaySpeed:5000,
		/*transitionStyle : "fade",*/
		/* Calling Text Image Aligning Function for Page1 Block5 after slide move */
		afterMove: function (elem) {
			fixImageTextFloatBlockCentering('#page1-block5');
			setOwlPaginationMargin();
		},
		/* Calling Text Image Aligning Function for Page1 Block5 before slide move */
		beforeMove: function (elem) {
		  	fixImageTextFloatBlockCentering('#page1-block5');
			setOwlPaginationMargin();
		}
		
	});
	
	$( ".owl-next" ).empty();
	$( ".owl-prev" ).empty();
	
	
});

var setOwlPaginationMargin= function()
{
	var pageMargTop=($(".image-slider .owl-item").height()-$(".image-slider .owl-item img").height()) / 2;
	$(".image-slider .owl-pagination").css('bottom',pageMargTop+"px");
};
/*__________Carousel Initializer Ends_________*/


/*__________Fix Home Page Heights Starts_________*/
var fixHomePageHeight = function(){
    var homePageBtmHeight=parseFloat($('.home-page-bottom-inner').height())+20;
    $('.home-page-bottom').height(homePageBtmHeight);

    var homePageTopHeight = window.innerWidth>=480 ? parseFloat($('.home-desctop-wrapper').height()):
        parseFloat($('.home-mobile-wrapper').height());
    var homePageHeight=homePageTopHeight + parseFloat($('.home-page-bottom').height())+30+50;
    var homePageBottomHeight=homePageHeight-parseFloat($('.home-page-bottom').height());
    //alert(homePageTopHeight);

    $('.home-section').height(homePageHeight);
    $('.home-page-bottom').css('top',homePageBottomHeight);
};

var applyFixHomePageHeight = function(){
    $('.home-page-bottom-inner').css('height','auto');
    $('.home-page-bottom').css('height','auto');
    $('.home-section-inner-wrapper').css('height','auto');
    $('.home-section').css('height','auto');
    fixHomePageHeight();
};
/*__________Fix Home Page Heights Ends_________*/


/*__________Match Height for Footer Col Starts_________*/
var matchHeightForFooterCol= function() {
	$('.footer-col').css('height','auto');
	if( window.innerWidth>768)
		$('.footer-col').matchHeight();
		
	applySetLineHeight('.footer-logo');
};
/*__________Match Height for Footer Col Ends_________*/


/*__________Center Header Image on Resizing Starts_________*/
var  centerHeaderImage=function(){
	var imageHeight, wrapperHeight, overlap, container = $('.intro-background');  
	imageHeight = container.find('img').height();
	wrapperHeight = container.height();
	overlapHeight = (wrapperHeight - imageHeight) / 2;
	container.find('img').css('margin-top', overlapHeight);
	
	imageWidth = container.find('img').width();
	wrapperWidth = container.width();
	overlapWidth = (wrapperWidth - imageWidth) / 2;
	container.find('img').css('margin-left', overlapWidth);
}
/*__________Center Header Image on Resizing Ends_________*/


/*__________Navigation on Secondary Pages Starts_________*/

// Set Margins for Main Navigation 
var setHeaderMargins= function() {
	var topHeaderDistanceFromTop=(window.innerWidth>768) ? $(".main-nav2").height(): 0;
	var topMarg=$(".main-nav2").height();
	$(".top-header").css("margin-top",topHeaderDistanceFromTop);
}

// Controls fixed position of main navigation
var setHeaderFixed =function() {
	if( window.innerWidth>768)
		$('.main-nav2').addClass('navbar-fixed-top');
	else
		$('.main-nav2').removeClass('navbar-fixed-top');
}

// Secondary Navigation on Scroll Functionality 
var navScrollFunc= function()
{
	var navHeight =(window.innerWidth>768) ? parseInt($(".top-header").height()) : (parseInt($(".top-header").height())+parseInt($(".main-nav2").height())-parseInt($('.secondary-nav').height()));
	//alert(navHeight);
	if(parseInt($(window).scrollTop()) > navHeight )
	{
		//alert('kkk');
		$('.secondary-nav').addClass('goToTop');
		var secNavDistanceFromTop=(window.innerWidth>768) ? $(".main-nav2").height(): 0;
		$('.secondary-nav').css("top",parseInt(secNavDistanceFromTop));
		$(".bg-box").each(function(index, element) {
			$(this).find('.section-header').removeClass("bg-toggled");
			//alert($(".box2").offset().top);
			if($(this).is(':visible'))
				$(this).find('.section-header').addClass("bg-toggled");
			else
				$(this).find('.section-header').removeClass("bg-toggled");
				
		}); 
	}
	else
	{
		$('.secondary-nav').removeClass('goToTop');
		$('.secondary-nav').css('top','auto');
		$('.top-header').addClass("bg-toggled");
		$('.section-header').removeClass("bg-toggled");
	}	
	
};

// Binding Functions for Navigation on Secondary Pages
var applyNavScrollFunc =function() {
	setHeaderMargins();
	setHeaderFixed();
	$(window).bind('scroll', function() {
		navScrollFunc();
	});
	navScrollFunc();
};
/*__________Navigation on Secondary Pages Ends_________*/


/*__________Image Text Float Block Aligning Function Starts_________*/
var fixImageTextFloatBlockCentering =function(parentElSelector) {
	if(window.innerWidth>768)
	{
		$(parentElSelector+' .txt-img-float-block1-txt').css('height', 'auto');
		$(parentElSelector+' .item-middle-centered-d').css('height', 'auto');
		equalHeightsSimple(parentElSelector+' .txt-img-float-block1-txt', parentElSelector+' .item-middle-centered-d');
		applyEqualHeights(parentElSelector+ '.page1-content1-col-right', parentElSelector+ '.item-middle-centered-d');
		$(parentElSelector+' .txt-img-float-block1-img').css('line-height','normal');
		$(parentElSelector+' .txt-img-float-block1-img').css('height', 'auto');
		equalHeightsSimple(parentElSelector+' .txt-img-float-block1-img', parentElSelector+' .txt-img-float-block1-txt');
		applySetLineHeight(parentElSelector+' .txt-img-float-block1-img');
	}
	else
	{
		$(parentElSelector+' .txt-img-float-block1-txt').css('height', 'auto');
		$(parentElSelector+' .item-middle-centered-d').css('height', 'auto');
		$(parentElSelector +' .txt-img-float-block1-img').css('line-height','normal');
		$(parentElSelector+' .txt-img-float-block1-img').css('height', 'auto');
	}
};
/*__________Image Text Float Block Aligning Function Ends_________*/


/*__________Fix Heights for Page Nav Block Starts_________*/
var applyLineHeightforPageNavImg = function() {
	applySetLineHeight('.page-nav-block-img');
};

var fixHeightsforPageNavBlock = function() {
	$('.menu-icon-description').matchHeight();
    $('.page-nav-block-img').matchHeight();
    $('.page-nav-block-content').matchHeight();
	applyLineHeightforPageNavImg();
}
/*__________Fix Heights for Page Nav Block Ends_________*/


/*__________Home Page Document Ready, Resize and Load Functions Start_________*/
$(function(){
    centerHeaderImage();    
	applyFixHomePageHeight();
	fixHeightsforPageNavBlock();
	matchHeightForFooterCol();
});

$(window).resize(function(){
	centerHeaderImage();    
	applyFixHomePageHeight();
	applyLineHeightforPageNavImg();
	matchHeightForFooterCol();
});

$(window).load(function(){
	centerHeaderImage();    
	applyFixHomePageHeight();
	applyLineHeightforPageNavImg();
	matchHeightForFooterCol();
});
/*__________Home Page Document Ready, Resize and Load Functions End_________*/


/*__________Page General Document Ready, Resize and Load Functions Start_________*/
$(function(){
	applyNavScrollFunc();
});

$(window).resize(function(){
	applyNavScrollFunc();
});

$(window).load(function(){
	applyNavScrollFunc();
});
/*__________Page General Document Ready, Resize and Load Functions End_________*/

/*__________Page1 Document Ready, Resize and Load Functions Start_________*/
$(function(){
	fixImageTextFloatBlockCentering('#page1-block1');
	fixImageTextFloatBlockCentering('#page1-block5');
	fixImageTextFloatBlockCentering('#page2-block2');
	setOwlPaginationMargin();
});

$(window).resize(function(){
	fixImageTextFloatBlockCentering('#page1-block1');
	fixImageTextFloatBlockCentering('#page1-block5');
	fixImageTextFloatBlockCentering('#page2-block2');
	
	setOwlPaginationMargin();
});

$(window).load(function(){
	fixImageTextFloatBlockCentering('#page1-block1');
	fixImageTextFloatBlockCentering('#page1-block5');
	fixImageTextFloatBlockCentering('#page2-block2');
	setOwlPaginationMargin();
});
/*__________Page1 Document Ready, Resize and Load Functions End_________*/




