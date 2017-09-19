$(document).ready(function(){

// carousels
    $('.flip-carousel').flipster({
        style: 'carousel',
        start:4,
        loop: true,
        autoplay: 3000,
        scrollwheel: false,
        spacing: -0.5,
        buttons: false,

    });
// /carousels
    //website page icons
    function myfuunc1() {
        var elem = $(this).clone();
        $(this).parent().prepend(elem);
        $(this).remove();
    }
    $('.cont').on('click', 'a', myfuunc1);
    //website page icons

    // DATAPICKER

    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    })
    // DATAPICKER

// owl-HomePage
    $('.owl-HomePage2').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout: 4000,
        responsiveClass:true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            460:{
                items:2,
            },
            600:{
                items:3,
            },
            1000:{
                items:3,
                nav:true,
            }
        }
    })

// owl-HomePage
// owl-HomePage
    $('.owl-HomePage').owlCarousel({
        loop:true,
        margin:10,
        autoplay:false,
        autoplayTimeout: 3000,
        responsiveClass:true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            460:{
                items:2,
            },
            600:{
                items:2,
            }
        }
    })

// owl-HomePage

    // toolTip
    $('[data-toggle="tooltip"]').tooltip();
    //toolTip


// chckbox check ALL
    $("#checkAll").click(function () {
        $(".check").prop('checked', $(this).prop('checked'));
    });
// chckbox check ALL





// veiw number
    $("#hideNumber").hide();
    $("#shownum").click(function(){
        $("#hideNumber").toggle();
        $("#showNumber").toggle();

    });


    /*__________Listing Details Slider Starts ________*/

    /* Function for Flex Slider Initialization */
    /*__________Listing Details Gallery Starts________*/
    /* Lightbox Gallery */
    $(function(){
        if($('.listing-dtl-gallery').length)
        {
            var gallery = $('.listing-dtl-gallery .gal-class').simpleLightbox({
                navText:['',''],
            })
            var gallery1 = $('.listing-dtl-gallery .gal-class1').simpleLightbox({
                navText:['',''],
            })

            var galCustomStyleForNav=function(){
                setTimeout(function () {
                    var imgWidth = $('.sl-image').width();
                    var windowWidth = window.innerWidth;
                    var marg=(windowWidth-imgWidth)/2;
                    $('.sl-prev').css('left', marg);
                    $('.sl-next').css('right', marg);
                    $('.sl-prev').css('visibility', 'visible');
                    $('.sl-next').css('visibility', 'visible');

                }, 1000);
            };

            $('.listing-dtl-gallery .gal-class').on('shown.simplelightbox', function () {
                galCustomStyleForNav();
            });
            $('.listing-dtl-gallery .gal-class1').on('shown.simplelightbox', function () {
                galCustomStyleForNav();
            });
            $(window).bind('resize', function(){
                galCustomStyleForNav();
            });

        }
    });
    /*__________Listing Details Gallery Ends________*/

    if($('#thumbnails').length)
        $('#thumbnails').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 94,
            itemMargin: 2,
            asNavFor: '#slider'
        });


    if($('#slider').length)
        $('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: true,
            slideshow: false,
            sync: "#thumbnails",
            start: function(slider){
                $('body').removeClass('loading');
                //setListItmDtlDescHeight();
            }
        });



    /* Function for Adding Listing Details Gallery Thumbnails Starts */
    function addFakeThumbs() {
        $('#thumbnails').css('width', 'auto');
        var curThumbCnt=$('.real-thumb').length;
        var thumbContWidth=$('#thumbnails').outerWidth()-36;
        var fitThumbCnt=thumbContWidth/96;
        var addThumbCnt= Math.floor(fitThumbCnt-curThumbCnt);
        for(i=0; i<addThumbCnt; i++)
        {
            if(i==0)
                $('.real-thumb').last().
                after('<li style="margin-right: 2px; float: left; display: block;" class="fake-thumb"><div class="row-col lst-itm-dtl-thumb" ></div></li>');
            else
                $('.fake-thumb').last().
                after('<li style="margin-right: 2px; float: left; display: block;" class="fake-thumb"><div class="row-col lst-itm-dtl-thumb" ></div></li>');
        }
        if(addThumbCnt>0)
            $('#thumbnails .flex-direction-nav').css('display','none');

        $('.fake-thumb').unbind('click');
    };

    $(function(){
        addFakeThumbs();
    });
    $(window).bind('resize', function() {
        addFakeThumbs();
    });
    addFakeThumbs();
    /*__________Listing Details Slider Ends ________*/


// flexslider
    //Listing carousel
    $('.owl-carousel-listing').owlCarousel({
        margin:10,
        responsiveClass:true,
        items:1,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots:false,
        nav:true,
        onInitialized  : counter, //When the plugin has initialized.
        onTranslated : counter //When the translation of the stage has finished.

    });
          function counter(event) {
            var element   = event.target;         // DOM element, in this example .owl-carousel
            var items     = event.item.count;     // Number of items
            var item      = event.item.index + 1;     // Position of the current item
            $('#counter').html(item+" / "+items);
            $('.photo').html(items)
        }


    //Listing carousel

    $('.bxslider').bxSlider({
        mode: 'vertical',
        moveSlides: 1,
        slideMargin: 5,
        infiniteLoop: true,
        slideWidth: 470,
        minSlides: 4,
        maxSlides: 4,
        speed: 500,
        autoControls: false,
        touchEnabled:false,
        auto: true,
        pager: true,

    });
/*
ASQ DESQ change icon
*/

    $("#show").hide();
    $(".asc-desc").click(function(){
        $("#hide").toggle();
        $("#show").toggle();

    });

    // data

    var day = (new Date()).toString().split(' ').splice(1,3).join(' ');
    document.getElementById("data").innerHTML = day;
    // date


// homepage slider
    $('.homepage-slider').owlCarousel({
        loop:true,
        nav:false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        items:1,
        dots:false,
        autoplay:true,
        autoplayTimeout: 5000,

        // animateOut: 'fadeOut',

    })
    // location select
    /**
     * This function select2 repo. Write data after ajax call
     * @param repo
     * @returns {*}
     */
    function formatRepo (repo) {
        if (repo.loading) return repo.text;
        var markup = '<div class="clearfix">' +
            '<div class="col-sm-12">' + repo.show_name + '</div>' +
            '</div>';
        return markup;
    }
    /**
     *
     * @param repo
     * @returns {string|*}
     */
    function formatRepoSelection (repo) {

        var selected ;
        // if not found repo get data from post
        if(!repo.id ) {
            repo.id = "<?= $localité ? $localité : 0 ?>";
            repo.secteur_nom = "<?= $secteurNom ? $secteurNom : '' ?>";
            repo.secteur_insee = "<?= $secteurInsee ? $secteurInsee : '' ?>";
            repo.show_name = "<?= $showName ? $showName : $localitéLabel ?>";
            selected = repo.show_name ;
        }
        else {
            // if not found repo get data from post
            $('input[name="Departement"]').val(repo.dep_nom);
            $('input[name="Secteur"]').val(repo.secteur_depcode);
            $('input[name="fiche_cp"]').val(repo.secteur_nom);
            $('input[name="fiche_villereal"]').val(repo.secteur_insee);
            $('input[name="secteur_nom"]').val(repo.secteur_nom);
            $('input[name="secteur_insee"]').val(repo.secteur_insee);
            $('input[name="show_name"]').val(repo.show_name);
            selected = repo.show_name ;
        }
        // Write data in select
        return selected || repo.text;
    }

    // This function get villes use select2
    function getLocation()
    {
        /**
         * get se4lect2
         * @type {*|jQuery|HTMLElement}
         */
        var location = $("#location");

        // check specific functions for this design
        location.select2().on("select2:open", function() {
            // TODO created bug after new version select2 fixed
        });
        // get data for select use ajax
        location.select2({
            minimumResultsForSearch: -1,
            allowClear: false,
            closeOnSelect: true,
            ajax: {
                url: "get_villes_Ajax.php",
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    return {
                        q: params.term, // search term
                        page: params.page
                    };
                },
                // calculate result
                processResults: function (data, page) {
                    $('.select2-results').show();
                    var results = [];
                    if(data.total_count > 0){
                        t = data.items;
                        return {
                            results: data.items
                        };
                    } else {
                        $('.select2-results__message').show();
                        $('.select2-results > .select2-results__options').html('<li role="treeitem" aria-live="assertive" class="select2-results__option select2-results__message">Aucun résultat trouvé</li>')

                        results[0]['id']= null;
                        return results;
                    }
                },
                cache: true
            },
            width: '100%',
            containerCssClass: "select2-sel-v2-container",
            language: {
                searching: function() {
                    return "Recherche...";
                }
            },
            escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
            minimumInputLength: 2,
            templateResult: formatRepo, // omitted for brevity, see the source of this page
            templateSelection: formatRepoSelection, // omitted for brevity, see the source of this page
        });
    }

    getLocation();
    // hide selection clear

    //location select


    // pagescroll_navbarSize start
window.onload=function() {
    if (window.pageYOffset >30){
        $('.navbar-inverse').css({'backgroundColor':'','top':'30px'});
    }
    else {
        $('.navbar-inverse').css({'backgroundColor': '','top':''});
    }
};

    window.onscroll = function() {
        if (window.pageYOffset > 30){
            $('.navbar-inverse').css({'backgroundColor':'','top':'30px'});
         }
        else {
            $('.navbar-inverse').css({'backgroundColor': '','top':''});
         }
    }

    // pagescroll_navbarSize END
// Multiselect
$('#select-box2-filter,#select-box2-filter2,#select-box2-filter3,#select-box2-filter4').multiselect({
    includeSelectAllOption: true,
    selectAllText:'Tout sélectionner',
    allSelectedText:'Tout sélectionné',
    nSelectedText: 'Sélectionné',
    numberDisplayed: 1,
});
$('#localisation_multi').multiselect({
    includeSelectAllOption: true,
    selectAllText:'Tout sélectionner',
    allSelectedText:'Tout sélectionné',
    nSelectedText: 'Sélectionné',
    numberDisplayed: 1,
});
});
// /Multiselect


// scroll start
/**
 * jQuery Plugin to show up the button which scroll the page up to top.
 * @author	Tommaso Simeone
 * @link https://github.com/tomaggio83/Scroll-to-Top
 * @version 1.0
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * THIS SOFTWARE AND DOCUMENTATION IS PROVIDED "AS IS," AND COPYRIGHT
 * HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR
 * FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE
 * OR DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS,
 * COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.COPYRIGHT HOLDERS WILL NOT
 * BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL
 * DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENTATION.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://gnu.org/licenses/>.
 */
(function($){
    'use strict';

    var defaults = {
        background : '#9696d9', // Background color
        color: '#fff', // Icon color
        rounded: true, // if true make the button rounded
        width: '40px',
        height: '40px',
        bottom : '25px', // Button bottom position
        right : '25px', // Button right position
        windowScrollShow: 400, // Window height after which show the button
        speed: 800,
        customHtml: '', // Set custom html for icon
        mobileOnly: false // Show button only on mobile device
    }

// ----------------------------------

    $.fn.gotop = function( options ){

        var opts = $.extend(true, {}, defaults, options)
            ,   isMobile = $.fn.gotop.isMobile()
            ,   $el = this;


        return this.each(function(){
// Hide the element
            $el.hide();

// ----------------------------------

// Make the button rounded
            if(opts.rounded == true) {
                $el.css('border-radius', '4px');
            }

// ----------------------------------

// CSS
            $el.css({
                cursor: 'pointer',
                position: 'fixed',
                'align-items': 'center',
                'justify-content': 'center',
                zIndex:999,
                background: opts.background,
                color: opts.color,
                width: opts.width,
                height: opts.height,
                bottom: opts.bottom,
                right: opts.right
            });

// ----------------------------------

// Set default icon if customHtml option is empty
            if(opts.customHtml != '') {
                $el.append(opts.customHtml);
            } else {
                $el.append('&uarr;');
            }

// ----------------------------------

// Back to top
            $el.click(function (e) {
                e.preventDefault();
                $('html, body').animate({scrollTop: 0}, opts.speed);
            });

// ----------------------------------

// Show the scroll to top button only on mobile devices
            if (opts.mobileOnly == true) {
                if(isMobile) {
                    $(window).scroll(function() {
                        $.fn.gotop.showButton($el, opts.windowScrollShow);
                    });
                } else {
                    return false;
                }
            }
            else
            {
// Show the scroll to top button on all devices
                $(window).scroll(function() {
                    $.fn.gotop.showButton($el, opts.windowScrollShow);
                });
            }

// ----------------------------------

        });
    };

// --------------------------------------------------------------------------

    $.fn.gotop.isMobile = function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

// --------------------------------------------------------------------------

    $.fn.gotop.showButton = function(element, windowScrollHeight) {

        if( $(window).scrollTop() > windowScrollHeight ) {
            element.fadeIn(400)
                .css('display', 'flex');
        } else {
            element.fadeOut(400);
        }
    }

// --------------------------------------------------------------------------
    $('#gotop').gotop({
        customHtml: '<i class="fa fa-angle-up fa-2x"></i>',
        bottom: '2em',
        right: '1em'
    });
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36251023-1']);
    _gaq.push(['_setDomainName', 'jqueryscript.net']);
    _gaq.push(['_trackPageview']);

    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

}(jQuery));
// scroll end
//


// pagescroll_navbarSize start homepage

window.onscroll = function() {
    if (window.pageYOffset > 2){
        $('.secondPage .header').css({'background-image':''});
        $('.nav-home-page').css({'position':'fixed','background-image':'linear-gradient(90deg, rgba(19, 22, 45, 0.9) 0%, rgba(6, 8, 22, 0.9) 100%)'});
        // $('.nav-home-page').css({'position':'fixed','background-image':'linear-gradient(-180deg, rgb(12, 10, 21) 53%, rgba(32, 41, 78, 0.86) 100%)'});
    }
    else {
        $('.nav-home-page').css({'position':'','background-image':''});
        $('.secondPage .header').css({'background-image':'linear-gradient(90deg, rgba(19, 22, 45, 0.9) 0%, rgba(6, 8, 22, 0.9) 100%)'});
        // $('.secondPage .header').css({'background-image':'linear-gradient(-180deg, rgb(12, 10, 21) 100%, rgba(32, 41, 78, 0.86) 100%)'});

    }
}

// pagescroll_navbarSize END homepage
