

(function ($) {
    $('#heroslider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             dosts: true,
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             dosts: true,
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });
    $('#spotLightSlide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             dosts: true,
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             dosts: true,
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });

    $('#news-content-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             dosts: true,
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             dosts: true,
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });


    $('#wearehpiting').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             dosts: true,
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             dosts: true,
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });



    $('#events-content-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             dosts: true,
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             dosts: true,
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });

    $('#press-content-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             dosts: true,
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             dosts: true,
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });

    $('#wearehpit').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             dosts: true,
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             dosts: true,
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });

    $('#clientSlide').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
    })

    $(document).ready(function () {

        $(".help_block .btn_svg").click(function () {
            // Remove 'active' class from all .help_block elements
            $(".help_block").removeClass("active");

            // Add 'active' class to the parent .help_block element of the clicked svg
            $(this).parent().addClass("active");


        });

        $('button.contarct_btn').on('click', function () {

            var isExpanded = $(this).attr('aria-expanded') === 'true';
            $(this).attr('aria-expanded', !isExpanded);
            $(this).toggleClass('collapsed');

            // Toggle SVG icons
            if (isExpanded) {

                $(this).find('.plus').show();
                $(this).find('.minus').hide();
            } else {
                $(this).find('.plus').hide();
                $(this).find('.minus').show();
            }
        });

        $(".language-switcher nav ul li a").click(function () {
            var language = $(this).data("lang"); // Get the value of data-lang attribute
            $("#lang-open option").text(language); // Insert the language value into the div
        });

        $("#lang-open").click(function () {
            $(".language-switcher").toggleClass("hide");
        });
        $("#menuToggler").click(function () {
            $("#mega-menu").css("display", "none"); // Hide the mega menu when toggling
            $(".navbar-nav li").removeClass("active");
            $(".top-menu").toggleClass("active");
            if ($(".top-menu").hasClass("active")) {
                $("div#menuToggler img").attr("src", "assets/img/icons/hamburger-colse.svg");
            } else {
                $("div#menuToggler img").attr("src", "assets/img/icons/hamburger-open.svg");
            }
        });
    });



}(jQuery));



document.addEventListener("DOMContentLoaded", function () {
    const navigationItems = document.querySelectorAll(".fullpage-navigation__item button");

    // Intersection Observer configuration
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.5 // 50% of the target element is visible
    };

    // Callback function for Intersection Observer
    const intersectionCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove 'active' class from all navigation items
                navigationItems.forEach(navItem => {
                    navItem.parentNode.classList.remove("fullpage-navigation__item--active");
                });

                // Add 'active' class to the corresponding navigation item
                const sectionId = entry.target.getAttribute("id").replace('section', '');
                const navItem = document.querySelector(`[data-section="${sectionId}"]`);
                if (navItem) {
                    navItem.parentNode.classList.add("fullpage-navigation__item--active");
                }
            }
        });
    };

    // Create Intersection Observer instance
    const observer = new IntersectionObserver(intersectionCallback, observerOptions);

    // Observe each section
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        observer.observe(section);
    });

    // Add click event listener to each navigation item
    navigationItems.forEach(item => {
        item.addEventListener("click", function () {
            // Remove 'active' class from all navigation items
            navigationItems.forEach(navItem => {
                navItem.parentNode.classList.remove("fullpage-navigation__item--active");
            });

            // Add 'active' class to the clicked navigation item
            this.parentNode.classList.add("fullpage-navigation__item--active");

            // Get the section ID to scroll to
            const sectionId = this.getAttribute("data-section");

            // Scroll to the corresponding section
            const section = document.getElementById(`section${sectionId}`);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});







(function ($) {
    $(document.body).on('click', 'ul#megamenu1 li a', function () {
        // Get the inner text content of the clicked anchor element
        $('ul#megamenu1 li a').removeClass('active');
        $(this).addClass('active');
        const anchorText = $(this).text().trim();

        // Check if the anchorText matches a condition
        if (anchorText === 'Business') {
            $('#megamenu3').removeClass('hide');
            $('#megamenu2').addClass('hide');
            $('#megamenu4').addClass('hide');
            $('#megamenu5').addClass('hide');
            $('#megamenu6').addClass('hide');

        }

        else if (anchorText === 'Engineering') {
            $('#megamenu3').addClass('hide');
            $('#megamenu2').addClass('hide');
            $('#megamenu4').removeClass('hide');
            $('#megamenu5').addClass('hide');
            $('#megamenu6').addClass('hide');
        }


        else if (anchorText === 'Mission') {
            $('#megamenu3').addClass('hide');
            $('#megamenu2').addClass('hide');
            $('#megamenu4').addClass('hide');
            $('#megamenu5').removeClass('hide');
            $('#megamenu6').addClass('hide');
        }

        else if (anchorText === 'Technology') {
            $('#megamenu3').addClass('hide');
            $('#megamenu2').removeClass('hide');
            $('#megamenu4').addClass('hide');
            $('#megamenu5').addClass('hide');
            $('#megamenu6').addClass('hide');
        }
        else if (anchorText === 'Consulting') {
            $('#megamenu3').addClass('hide');
            $('#megamenu2').addClass('hide');
            $('#megamenu4').addClass('hide');
            $('#megamenu5').addClass('hide');
            $('#megamenu6').removeClass('hide');
        }


    })

    $('.accordion-button').click(function () {
        // Get the text content of the clicked button
        var buttonData = $(this).text().trim();
        // Get the text content of the corresponding accordion-body
        var accordionBodyText = $(this).closest('.accordion-item').find('.accordion-body').text().trim();
        // Update the content of h3 and p elements
        var parent = $(this).closest('.row').find('.box-inner-content');
        parent.find('h3').text(buttonData);
        parent.find('.subPera').text(accordionBodyText);
    });
}
)(jQuery);


// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menus");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
    document.querySelector("div#menuToggler img").src = "assets/img/icons/hamburger-open.svg";
}


let htmlcssArrows = document.querySelectorAll(".htmlcss-arrow");

htmlcssArrows.forEach(function (htmlcssArrow) {
    htmlcssArrow.onclick = function () {
        this.parentNode.classList.toggle("show1");
        this.classList.toggle("show1-rotate-icon");
    };
});

// Get all elements with the class "more-arrow"
let moreArrows = document.querySelectorAll(".more-arrow");

// Loop through each "more-arrow" element
moreArrows.forEach(function (moreArrow) {
    // Attach click event listener
    moreArrow.onclick = function () {
        // Toggle class "show2" on the parent of the parent of the clicked element
        this.classList.toggle("rotate-icon");
        this.parentNode.parentNode.classList.toggle("show2");
    };
});

let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
    navLinks.classList.toggle("show3");

}


// play the targeted video (and hide the poster frame)
function videoPlay($wrapper) {
    var $iframe = $wrapper.find(".js-videoIframe");
    var src = $iframe.data("src");
    // hide poster
    $wrapper.addClass("videoWrapperActive");
    // add iframe src in, starting the video
    $iframe.attr("src", src);
    $(".home-video-close").removeClass("is-hidden");
}

// stop the targeted/all videos (and re-instate the poster frames)
function videoStop($wrapper) {
    // if we're stopping all videos on page
    if (!$wrapper) {
        var $wrapper = $(".js-videoWrapper");
        var $iframe = $(".js-videoIframe");
        // if we're stopping a particular video
    } else {
        var $iframe = $wrapper.find(".js-videoIframe");
    }
    // reveal poster
    $wrapper.removeClass("videoWrapperActive");
    // remove youtube link, stopping the video from playing in the background
    $iframe.attr("src", "");
    $(".home-video-close").addClass("is-hidden");
}

// Function to prevent double tap to play the video on touch devices. Hides poster image.
function touchVideo() {
    // Checks if #js-point-detector is made visible by the pointer:coarse media query
    var isVisible = $("#js-pointer-detector").is(":visible");
    // If it is visible...
    if (isVisible === true) {
        // Add active wrapper class
        $(".videoWrapper").addClass("videoWrapperActive");
        // Get video source
        var source = $(".js-videoIframe").data("src");
        // Load video source
        $(".js-videoIframe").attr("src", source);
    } else {
    }
}

// poster frame click event
$(document).on("click", ".js-videoPoster", function (ev) {
    ev.preventDefault();
    var $poster = $(this);
    var $wrapper = $poster.closest(".js-videoWrapper");
    videoPlay($wrapper);
});

$(document).ready(function () {
    touchVideo();
});


