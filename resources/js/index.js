$(document).ready(function() {

    const $navBar = $(".nav__bar"),
          $menuBtns = $(".nav__bar-menu-icon"),
          $overlay = $(".nav__bar-overlay"),
          
          $headerShow = $('.header__show'),
          $logocontainer = $('.logo-container');

    // nav__bar overlay
    $menuBtns.each(function() {
        $(this).on("click", function() {
            $navBar.toggleClass("open");
        });
    });

    $overlay.on("click", function() {
        $navBar.removeClass("open");
    });

    // header__show

    let lastScrollTop = 0;

    $(window).on("scroll", function() {

        let scrollTop = $(this).scrollTop();

        if (scrollTop > lastScrollTop) 
            {
                $navBar.css("top", "-70px");
                $headerShow.css("top", "-70px");
                $logocontainer.css("top", "-70px");
            }
            else 
            {
                $navBar.css("top", "0");
                $headerShow.css("top", "0");
                $logocontainer.css("top", "0");
            }

        lastScrollTop = scrollTop;

    });

    // User comments
    $('#comment-form').on('submit', function(event) {

        event.preventDefault();

        var username = $('#username-input').val();
        var comment = $('#comment-input').val();
        var ratings = $('input[name="rating"]');
        var selectedRating = ratings.filter(':checked').val() || "No rating";

        if (username.trim() !== "" && comment.trim() !== "") 
            {
                var commentList = $('#comment-list');
                var commentElement = $('<div>').addClass('comment-item');

                var imgElement = $('<img>')
                    .attr('src', './resources/images/user-profile.jpg') //user profile picture for all comments
                    .attr('alt', 'User Profile Picture')
                    .addClass('profile-pic');
                commentElement.append(imgElement);

                var textElement = $('<span>').text(username + ": " + comment + " - " + selectedRating + " star(s)");
                commentElement.append(textElement);

                commentList.prepend(commentElement);
                $('#comment-input').val("");
                $('#username-input').val("");
                ratings.prop('checked', false);
            }
    });

    // swiper sliders
    var swiper = new Swiper('.mySwiper', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true
    });
});
