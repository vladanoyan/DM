//
// $(function(){
//     $('.selectpicker').selectpicker();
// });

$(document).ready(function(){

// homepage clients quotes slider
    $('.ninth-section-carousel').owlCarousel({
        loop:true,
        nav:false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots:false,
        items:3,
        mouseDrag:true,
        autoplay:true,
        autoplayTimeout: 5000,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp'
    })
// homepage clients quotes slider

    // data

    var d = (new Date()).toString().split(' ').splice(1,3).join(' ');
    document.getElementById("data").innerHTML = d;
    // date


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
    if (window.pageYOffset > 10){
        $('.navbar').css({'backgroundColor':'#fff','top':0});
    }
    else {
        $('.navbar').css({'backgroundColor': '','top':''});
    }
};

    window.onscroll = function() {
        if (window.pageYOffset > 10){
            $('.navbar').css({'backgroundColor':'#fff','top':0});
         }
        else {
            $('.navbar').css({'backgroundColor': '','top':''});
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






















// homepage slider
$('.homepage-slider').owlCarousel({
    loop:true,
    nav:false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    items:1,
    dots:1,
    autoplay:true,
    autoplayTimeout: 5000,

    // animateOut: 'fadeOut',

})
// /homepage slider
// site second carousel
$('.site-second-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    navText: ["<" ,">"],
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})




$(".next-step").click(function (e) {

    var $active = $('.nav-tabs li.active');
    $active.next().removeClass('disabled');
    nextTab($active);

});
$(".prev-step").click(function (e) {

    var $active = $('.nav-tabs li.active');
    prevTab($active);

});


function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}
// mobileNavTrigger
$(document).ready(function () {
    $('.mobile-nav-trigger').click(function () {
        $('body').toggleClass('no-scroll');
        $('.main-navbar').fadeToggle(700, function () {});
    });
    $('.tabbed-nav-trigger').click(function () {
        $(this).toggleClass('clicked');
        $('.tabbed-nav').slideToggle(500, function () {
        });
    });
});
// /mobileNavTrigger

// /carousels

// page scrolling nagitaion
// $(window).scroll(function() {
//     if ($(this).scrollTop() > 230){
//         $(".page-tabbed-nav").addClass('nav-scrolled');
//         $(".content-sections>section .first-section").addClass('scrolled');
//     }
//     else {
//         $(".page-tabbed-nav").removeClass('nav-scrolled');
//         $(".content-sections>section .first-section").removeClass('scrolled');
//     }
// });
// $(window).scroll();
// $(function() {
//     $(document).on('click', '.tabbed-nav a, .title-link', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top - 5
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });
// $( ".tabbed-nav a" ).click(function() {
//     if ($(window).width() < 992){
//         $('.tabbed-nav-trigger').toggleClass('clicked');
//         $('.tabbed-nav').slideToggle(500, function () {
//         });
//     }
// });
// /page scrolling nagitaion

// forms validation
$("#contact-page-form, #logiciel-page-form-1, #logiciel-page-form-2, #logiciel-page-form-3, #logiciel-page-form-4, #logiciel-page-form-5, #logiciel-page-form-6, #logiciel-page-form-7, #logiciel-page-form-8, #logiciel-page-form-modal-1, #logiciel-page-form-modal-2, #logiciel-page-form-modal-3, #logiciel-page-form-modal-4, #logiciel-page-form-modal-5, #logiciel-page-form-modal-6, #logiciel-page-form-modal-7, #creation-page-form-1, #creation-page-form-2, #creation-page-form-3, #creation-page-form-modal-1, #creation-page-form-modal-2, #creation-page-form-modal-3, #ecommunication-page-form-1, #ecommunication-page-form-2, #ecommunication-page-form-3, #ecommunication-page-form-modal-1, #ecommunication-page-form-modal-2, #enterprise-page-form, #enterprise-page-form-modal, #referencement-page-form, #referencement-page-form-modal, #sav-page-form, #sav-page-form-modal").validetta({
    realTime: true,
    display : 'inline',
    errorTemplateClass : 'validetta-inline',
    bubblePosition: 'bottom',
    validators: {
        regExp: {
            tel : {
                pattern : /^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$/,
                errorMessage : 'Le champ "Téléphone" n\'est pas au format attendu.<br><br>Exemples de formats acceptés :<br><i>0123456789<br>01.23.45.67.89<br>01 23 45 67 89<br>01-23-45-67-89<br>0033123456789<br>0033 123456789<br>+33123456789<br>+33923456789<br>(+33)1.23 45-6789<br>(+33) 123456789<br>0034123456789</i>'
            }
        }
    }
});

// input file
$(document).on('click', '.browse', function(){
    var file = $(this).parent().parent().parent().find('.file');
    file.trigger('click');
});
$(document).on('change', '.file', function(){
    $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
});
// input file



// /forms validation end


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
        background : 'rgba(27, 17, 106, 0.86)', // Background color
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
