function formationOfDate(e) {
	
	'use strict';
	
    if (e < 10) {
        e = '0' + e;
    }
    return e;
}

/* snazzy map */
function initializeMap() {
	if (typeof google == 'undefined') {
		setTimeout(initializeMap, 200);
		return;
	}
	
	'use strict';
	
    var mapOptions1 = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e7f8fd"
            }]
            }, {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "gamma": 0.01
                    }, {
                        "lightness": 20
                }]
            }, {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "saturation": -31
                    }, {
                        "lightness": -33
                    }, {
                        "weight": 2
                    }, {
                        "gamma": 0.8
                }]
            }, {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "lightness": 30
                    }, {
                        "saturation": 30
                }]
            }, {
                "featureType": "landscape",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "saturation": 20
                }]
            }, {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "lightness": 20
                    }, {
                        "saturation": -20
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "lightness": 10
                    }, {
                        "saturation": -30
                    }, {
                        "visibility": "off"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "saturation": 25
                    }, {
                        "lightness": 25
                }]
            }, {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "lightness": -20
                }]
            }, {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
        }]
    };
    var mapOptions2 = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"administrative.province","elementType":"geometry.fill","stylers":[{"color":"#ff0000"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#e5e8e7"},{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#f9fafb"},{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#f5f5f2"},{"visibility":"on"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#f9fafb"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#f9fafb"}]},{"featureType":"landscape.natural.terrain","elementType":"labels.icon","stylers":[{"hue":"#ff0000"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"color":"#91b65d"},{"gamma":1.51}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#f9fafb"},{"gamma":"1"},{"weight":"1"}]},{"featureType":"poi.park","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"geometry","stylers":[{"color":"#c7c7c7"},{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"color":"#ffffff"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#ffffff"},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"color":"#ffffff"},{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"all","stylers":[{"color":"#ffffff"},{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#a0d3d3"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#dfe4ec"}]}]
    };
    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('google_map');
    var markerImage;
    if ($('#google_map.type1').length){
        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions1);   
        markerImage='img/marker1.png';
    }
    else if ($('#google_map.type2').length){
        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions2);    
        markerImage='img/marker2.png';
    }

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        icon: markerImage,
        title: 'Snazzy!'
    });
}

/* Set owl carousel on menu */
function initializeMenuCarousel() {
	
	'use strict';
	
    $('.menu-slider').owlCarousel({
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplay: true,
        dots: true,
        items: 1,
        loop: true,
        margin: 10,
        mouseDrag: true,
        nav: false,
        touchDrag: true
    });
}

/* set or unset menu fixed when you scroll */
function menuFixed(fixedClass,flag) {
	
	'use strict';
	
    if (flag == 'add') {
        if (!fixedClass.hasClass('fixed-top')) {
            fixedClass.addClass('fixed-top');
        }
    }
    else {
        if (fixedClass.hasClass('fixed-top')) {
            fixedClass.removeClass('fixed-top');
        }    
    }        
}

/* refresh Header3 */
function refreshHeader3() {

	'use strict';
	
    var headerHeight = $('.header-body').height();
    var windowHeight = $(window).height();
    var difference = headerHeight - windowHeight;

    if (difference > 0) { 
        if ($(window).scrollTop() > difference) { 
            $('.header-body').addClass('fixed-bottom');
            $('.header-body').removeClass('scroll-middle-state');
        }
        else if ($(window).scrollTop() <= difference){
            $('.header-body').removeClass('fixed-bottom');
            $('.header-body').addClass('scroll-middle-state');
        } 
    }
    else {
        $('.header-body').removeClass('scroll-middle-state');
    }
}

/* Create Carousels */
function setCarousel() 
{
	'use strict';
	
    /* HOME3 revolution slider */    
    if (($.isFunction($.fn.show) && $.isFunction($.fn.revolution))) {
        $('.rev_slider3').each(function(){
			
			'use strict';
			
            var revapi = $(this).show().revolution({
                sliderType: 'standard',  
                gridwidth: 1650,
                gridheight: 750,
                responsiveLevels: [1920,992,750,480],
                sliderLayout: 'fullscreen',
                disableProgressBar: 'on',
                navigation: {
                    keyboardNavigation: 'off',
                    keyboard_direction: 'horizontal',
                    mouseScrollNavigation: 'off',
                    onHoverStop: 'off',
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style: 'rev_pesto',
                        enable: true,
                        hide_onmobile: true,
                        hide_under: 600,
                        hide_onleave: true,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        left: {
                            h_align: 'left',
                            v_align: 'center',
                            h_offset: 42,
                            v_offset: 0
                        },
                        right: {
                            h_align: 'right',
                            v_align: 'center',
                            h_offset: 42,
                            v_offset: 0
                        }
                    }
                    ,
                    thumbnails: {
                        style: 'rev_pesto',
                        enable: true,
                        width: 20,
                        height: 20,
                        min_width: 14,
                        wrapper_padding: 0,
                        wrapper_color: 'transparent',
                        wrapper_opacity: '1',
                        tmp: '<span class="tp-thumb-icon-circle"><i class="theme-icon pesto-icon-circle"></i></span>',
                        visibleAmount: 5,
                        hide_onmobile: false,
                        hide_under: 300,
                        hide_onleave: true,
                        direction: 'horizontal',
                        span: false,
                        position: 'inner',
                        space: 5,
                        h_align: 'center',
                        v_align: 'bottom',
                        h_offset: 0,
                        v_offset: 20
                    }
                },
                carousel:{
                    horizontal_align: 'center',
                    vertical_align : 'center',
                    infinity : 'on',
                    space : 0,
                    maxVisibleItems : 3,                        
                    stretch: 'on',                        
                    fadeout: 'on',                        
                    maxRotation: 0,                        
                    minScale: 0,
                    vary_fade: 'off',
                    vary_rotation: 'on',
                    vary_scale: 'off',                        
                    border_radius: '0px',
                    padding_top: 0,
                    padding_bottom: 0
                }
            });  	
        });
    }

    /* Set Owl carousel on category */
    if ($.isFunction($.fn.owlCarousel)) {
        $(".theme-owl-carousel.owl-theme").each(function() {
			
			'use strict';
			
            $(this).owlCarousel({
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                autoplay: true,
                loop: true,
                margin: 10,
                nav: false,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });
        });
        /* Index owl-carousel */
        $(".theme-owl-carousel.over-comment").each(function() {
			
			'use strict';
			
            var $owl=$(this);
            $owl.owlCarousel({
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                autoplay: true,
                loop: true,
                margin: 10,
                nav: false,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                responsive:{
                    0:{
                        items:1
                    },
                    720: {
                        items: 2                                
                    },
                    992: {
                        items: 1                                  
                    }
                },
                onResized: setHeightOfAdvertisements
            });
            setTimeout(setHeightOfAdvertisements,8000);

        });
        /* Owl carousel has Image and Right comment.*/
        $(".theme-owl-carousel.right-comment").each(function() {
			
			'use strict';
			
            $(this).owlCarousel({
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                autoplay: true,
                loop: true,
                margin: 40,
                nav: true,
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                navText: ['<span> <i class="demo-icon pesto-icon-left-arrow"></i> </span>','<span> <i class="demo-icon pesto-icon-right-arrow"></i> </span>'],
                responsive:{
                    0:{
                        items:1,
                        margin: 5
                    },
                    768:{
                        items:2,
                        margin: 25
                    },
                    1450:{
                        items:3,
                        margin: 40
                    }

                }
            });
        });
    }
}

/* Connect Event */
function setEvent() {
	
	'use strict';
	
    setVisualState();

    //add event here
    $('.smart_input').on('change',function() {
		
		'use strict';
		
        setVisualState();
    });
}

function setHeightOfAdvertisements(){
	
	'use strict';
	
    var heightOfAdvertisement = $('.home1 .advertisements').css('height');
    $('.home1 .newsletter').css('height',heightOfAdvertisement);                    
}

/* Set checked states */
function setVisualState() {
	
	'use strict';
	
    $('.smart_input').each(function() {
		
		'use strict';
		
        var $value = $(this).val();

        if ($(this).is(':checked')) {
            $(this).next().addClass("checked");
        }
        else {
            $(this).next().removeClass("checked");
        }
    });
}

/* Bootstrap Select*/
function setSelect() {
	
	'use strict';
	
    // Override defaults
    if (($.isFunction($.fn.selectpicker))) {
        $.fn.selectpicker.defaults = {
            iconBase: '',
            tickIcon: 'icon-checkmark3'
        }

        // Basic select
        if ($('.bootstrap-select').length)
        {
            $('.bootstrap-select').selectpicker();
        }
    }
}

/* set slider */
function setSlider()
{
	'use strict';
	
    // Set Slider
    if (($.isFunction($.fn.slider))) {
        $('.slider-range').each(function(){
			
			'use strict';
			
            var $start_value, $end_value;
            $start_value 	= 250;
            $end_value 		= 750;

            $(this).slider({
                range: true,
                min: 0,
                max: 1000,
                values: [ $start_value, $end_value ],
                slide: function( event, ui ) {
                    $( ".amount-start", $(this).parent()).val('$'+ui.values[ 0 ]);
                    $( ".amount-end", $(this).parent()).val('$'+ui.values[ 1 ]);
                }
            });

            $(".amount-start", $(this).parent()).val('$'+$(this).slider( "values", 0 ));
            $(".amount-end", $(this).parent()).val('$'+$(this).slider( "values", 1 ));	
        });

        $('.slider-default').each(function(){
			
			'use strict';
			
            $(this).slider();
        });

        $('.slider-range-min').each(function(){
			
			'use strict';
			
            $(this).slider({
                range: "min",
                value: 100,
                min: 1,
                max: 700,
                slide: function( event, ui ) {
                    $( ".amount", $(this).parent() ).val( "$" + ui.value );
                }
            });
            $( ".amount", $(this).parent() ).val( "$" + $(this).slider( "value" ) );
        });

        $('.slider-range-max').each(function(){
			
			'use strict';
			
            $(this).slider({
                range: "max",
                value: 100,
                min: 1,
                max: 700,
                slide: function( event, ui ) {
                    $( ".amount", $(this).parent() ).val( "$" + ui.value );
                }
            });
            $( ".amount", $(this).parent() ).val( "$" + $(this).slider( "value" ) );
        });
    }
}


$(document).ready(function() {
	
	'use strict';
	
    setCarousel();
    setEvent();
    setSelect();
    setSlider();
	
	$('#form_personal_details .btn-continue').on('click', function(event) {
		var password_string = $('#password').val();
		var confirmation_password_string = $('#confirm_password').val();
		
		if (confirmation_password_string == password_string) {
			return;
		}
		
		alert('Please Enter same password on Confirmation Field!!!');
		
		event.preventDefault();
	});

    //Calcualte height of left-sidebar header when left-sidebar header is clicked
    $('.left-sidebar .header-body.fixed-bottom *').on('click', function() {
		
		'use strict';
		
        var headerHeight = $('.header-body').height();
        var windowHeight = $(window).height();
        var difference = headerHeight - windowHeight;

        if (difference < 0) { 
            //    $('.header-body').removeClass('fixed-bottom').css('position','absolute');
            //    $('.header-body').css('top','0'); 

        }
    });

    // Refresh Menu when size of window change
    $(window).resize(function(){
		
		'use strict';
		
        if ($(window).scrollTop() > 0) {
            if ($('.left-sidebar').length == 0 || ($('.left-sidebar').length && $(window).width() < 992)) {
                menuFixed($('.header-body'),'add');
            }
            else if ($('.left-sidebar').length) {
                $('.header-body.fixed-top').removeClass('fixed-top');
            }
        }

        if ($(window).width() > 991) {
            $('#header').find('.droped').removeClass('droped').slideUp(100);
            if ($('.left-sidebar').length) {
                $('.header-body.fixed-top').removeClass('fixed-top');
            }
        }

        if ($(window).width() < 767) {
            if ($('.tabs.type2').length) {
                var $active = $('.type2 .nav-tabs li.active');
                $active.append($('.type2 .tab-content').find($active.find('a').attr('href')));        
            }
        }

        if ($(window).width()> 767) {
            if ($('.tabs.type2').length) {
                var $active = $('.type2 .nav-tabs li.active');
                $('.type2 .tab-content').append($active.find('a+div'));        
            }
        }
    });

    // Header fixed
    if (('#header').length) {
        if ($(window).scrollTop() > 0) {
            if ($(window).width() < 992 || $('.left-sidebar').length == 0 ) {
                menuFixed($('.header-body'),'add');
            }
        }
		
        $(window).scroll(function() {
			
			'use strict';
			
            if ($(window).width() < 992 || $('.left-sidebar').length == 0 ) {
                if (0 < $(window).scrollTop())
                {
                    menuFixed($('.header-body'),'add');    
                }
                else {
                    menuFixed($('.header-body'),'remove');
                }          
            }
            else if ($('.left-sidebar').length && $(window).width() > 991 ) {
                refreshHeader3();
            }
        });
    }



    /* search show or hide in header-top-links */
    $('.header-top-links .dropdown-search a.dropdown-toggle').on('click',function(e) {
		
		'use strict';
		
        e.stopPropagation();
        $(this).siblings('.dropdown-menu').not('.droped').slideDown("slow").addClass('droped');
    });

    /* set owl-carousel in product */
    if ($.isFunction($.fn.owlCarousel) ) {
        $('.product-owl-carousel').owlCarousel({
            items:4,
            loop:true,
            margin:22,
            nav: true,
            touchDrag: true,
            mouseDrag: true,
            navText: ['<span> <i class="demo-icon pesto-icon-left-arrow"></i> </span>','<span> <i class="demo-icon pesto-icon-right-arrow"></i> </span>']
        });

        $('.shop .owl-carousel').on('translated.owl.carousel', function(event) {
			
			'use strict';
			
            var items = $(this).find('.owl-item.active > .owl-item');
            $.each(items , function(index,value){
                if (index != 1 && $(value).hasClass('owl-sel')){
                    $(value).removeClass('owl-sel');
                }
                else if(index == 1 && !$(value).hasClass('owl-sel')){
                    $(value).addClass('owl-sel');
                }    
            });
        });
    }

    if ($('.select ul').length) {
        $('.select ul li').on('click',function(){
			
			'use strict';
			
            $.each($(this).siblings(),function(index,value) {
                if ($(value).hasClass('selected')){
                    $(value).removeClass('selected');
                }                  
            })

            if (!$(this).hasClass('selected')) {
                $(this).addClass('selected');
                $(this).parents('.select').children('select').val($(this).attr('value'));
            }    
        });        
    }

    // google map
    if ($('#google_map').length){
        initializeMap();        
    }

    /* fancybox */
    if ($('.fancybox').length){
        $('.fancybox').fancybox({
            tpl: {
                closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            }
        });        
    }

    /* header-main search show or hide */
    if ($('.header-btn-search').length){
        $('.header-btn-search').on('click',function(){
			
			'use strict';
			
            $('.header-top-links .dropdown-search .dropdown-menu').not('.droped').slideDown().addClass('droped');
        });
    }

    /* header-top-links mini-cart show or hide */
    if ($('.header-btn-cart').length){
        $('.header-btn-cart').on('click',function(){
			
			'use strict';
			
            $('.header-top-links .mini-cart .dropdown-menu').not('.droped').slideDown();
            $('.header-top-links .mini-cart .dropdown-menu.droped').slideUp();
            $('.header-top-links .mini-cart .dropdown-menu').toggleClass("droped");
        });
    }

    // menu drop down or collapse 
    if ($('.header-main-nav .dropdown').length) {
        $('.dropdown').on('click',function(e){
			
			'use strict';
			
            if ($(window).width() < 992 || $('.left-sidebar').length) {
                e.stopPropagation();
                $(this).find('>.dropdown-menu').not('.droped').slideDown('slow');
                $(this).find('.dropdown-menu.droped').slideUp('400',function(){
                    if ($('.left-sidebar').length && $(window).width() > 991 ){
                        setTimeout(refreshHeader3(),400);
                    }
                });
				
                $(this).find('>.dropdown-menu').toggleClass('droped');
                $(this).find('.dropdown-menu .dropdown-menu.droped').removeClass('droped');
                $(this).find('>.dropdown-table-sub-nav.droped').removeClass('droped').slideUp('slow');
            }
            else {
                if ($(this).find('>a').length)
                    window.location.assign($(this).find('>a').attr('href'));                            
            }
        });   
    }

    if ($('.header-normal').length) {
		initializeMenuCarousel(); 
    }
    
    // submenu drop or collapse
    if ($('.dropdown-table-sub-title').length) {
        $('.dropdown-table-content >li').on('click',function(e){
			
			'use strict';
			
            e.stopPropagation();

            if ($(window).width() <= 992  || $('.left-sidebar').length){
                $(this).siblings().find('.dropdown-table-sub-nav.droped').slideUp('slow').removeClass('droped');

                if ($(this).find('.dropdown-table-sub-nav').hasClass('droped')) {
                    $(this).find('.dropdown-table-sub-nav').removeClass('droped').slideUp('slow');    
                }
                else {
                    $(this).find('.dropdown-table-sub-nav').addClass('droped').slideDown('slow');
                }
            }
        });
    }

    // time count down automatically
    if ($('.remain-time').length) {
        setInterval(function() {
			
			'use strict';
			
            var date = new Date();
            var day = $('.day h4').html()*1;
            var hour = $('.hour h4').html()*1;
            var minute = $('.minute h4').html()*1;
            var second = $('.second h4').html()*1;

            second -= 1;

            if (second < 0 ) {
                second = 59;
                minute -= 1;
            }

            if (minute < 0) {
                minute = 59;
                hour -= 1;
            }

            if (hour < 0) {
                hour = 23;
                day -= 1;
            }

            if (day < 0) {
                day = hour = minute = second = 0;
            }

            second = formationOfDate(second);
            minute = formationOfDate(minute);
            hour = formationOfDate(hour);
            day = formationOfDate(day);

            $('.day h4').html(day);
            $('.hour h4').html(hour);
            $('.minute h4').html(minute);
            $('.second h4').html(second);
            },1000);	
    }

    /* Isotope setting */
    if ($.isFunction($.fn.isotope)) {
        var $grid = $('.grid').imagesLoaded(function() {
			
			'use strict';
			
            $grid.isotope({
                itemSelector: '.grid-item',
                layoutMode: 'fitRows',
                getSortData:  {
                    special: '.special',
                    latest: '.date',
                    bestsellers: '.sales-volume parseInt',
                    features: '.name,.brand,.price',
                    popular: '.rating',
                    featured: '.category,.brand'
                }
            });  
        });

        var $masonry_grid=$('.masonry-grid').imagesLoaded(function(){
			
			'use strict';
			
            $masonry_grid.isotope({
                layoutMode: 'packery',
                itemSelector: '.grid-item',
                getSortData: {
                    special: '.special',
                    latest: '.date',
                    bestsellers: '.sales-volume parseInt',
                    features: '.name,.brand,.price',
                    popular: '.popular parseInt',
                    featured: '.category,.brand'
                }
            });
        });
    }

    /* show products more */
    $('.btn-load-more').on('click',function() {
		
		'use strict';
		
        $(this).css('display','none');

        if ($('.products .grid').length) {
            var $items = $('.products .load-more .grid-item');
            $grid.append($items).isotope( 'appended', $items );
        }

        if ($('.products .masonry-grid').length) {
            var $items = $('.products .load-more .grid-item');
            $masonry_grid.append($items).isotope( 'appended', $items );
        }
    });

    /* set filter setting */
    $('.filter').on('click',function() {
		
		'use strict';
		
        if ($.isFunction($.fn.isotope)) {
            var filterContainer = $(this).parent().parent().attr('data-object');
            var filterValue = $(this).attr('data-filter');

            if (filterContainer.substr(1,1) == "." || filterContainer.substr(1,1) == "#") {
                filterContainer = filterContainer.substr(1);
            }

            filterContainer = filterContainer.replace("-","_");
            filterContainer = "$" + filterContainer;
            eval(filterContainer).isotope({filter : filterValue});
        }
    });

    /* set sort setting */
    $('.sort').on('click',function(){
		
		'use strict';
		
        if ($.isFunction($.fn.isotope)) {
            var sortContainer = $(this).parent().parent().attr('data-object');
            var sortValue = $(this).attr('data-sort-value');
            $(this).parent().siblings('.active').removeClass('active');
            $(this).parent().addClass('active');
			
            if (sortContainer.substr(1,1) == "." || sortContainer.substr(1,1) == "#") {
                sortContainer = sortContainer.substr(1);
            }

            sortContainer = sortContainer.replace("-","_");
            sortContainer = "$" + sortContainer;
            eval(sortContainer).isotope({sortBy : sortValue});
        }
    });

    $('.image').on('click',function(){
		
		'use strict';
		
        if ($(this).find('>a').length)
            window.location.assign($(this).find('>a').attr('href'));
    });

    $('.over-comment .links > *').on('click',function(e){
		
		'use strict';
		
        e.stopPropagation();
    });

    // mobile menu close
    if ($('.menu-close').length) {
        $('.menu-close').on('click',function(){
			
			'use strict';
			
            $(this).parents('.droped').slideUp('slow').removeClass('droped');
        })
    }

    /* Wow plugin Init */
    if ($('.wow').length) {
        new WOW().init();
    }

    
    if ($('#easy_tabs').length && $.isFunction($.fn.easyResponsiveTabs)) {
        $('#easy_tabs.tabs-vertical').easyResponsiveTabs({
            type: 'vertical', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'tab-part'
        });
    } 
});


