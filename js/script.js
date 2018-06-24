$(document).ready(function() {
        $('.news_slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                prevArrow: '<i class="fas fa-angle-left news_slider_prev news_slider_control"></i>',
                nextArrow: '<i class="fas fa-angle-right news_slider_next news_slider_control"></i>',
        });
        $('.doctors_comments_slider').slick({
                prevArrow: '<i class="fas fa-angle-left comments_slider_prev comments_slider_control"></i>',
                nextArrow: '<i class="fas fa-angle-right comments_slider_next comments_slider_control"></i>'
        });
        $('.slider_comments_content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                asNavFor: '.slider_comments_writer'
        });
        $('.slider_comments_writer').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: '.slider_comments_content',
                centerMode: true,
                focusOnSelect: true
        });
        $('.career_path').niceScroll({
                cursorcolor: "#222",
                cursorwidth: "12px",
                background: "#fcba2e",
                cursorborder: 'none',
                cursorborderradius: 2,
        });
        $('body').niceScroll({
                cursorcolor: "#fcba2e",
                cursoropacitymin: 0.8,
                cursorwidth: "12px",
                background: "#222",
                cursorborder: 'none',
                cursorborderradius: 2,
                horizrailenabled: false,
        });
        $('#collage_control-1').on('click', function() {
                $(this).addClass('active').siblings().addClass('deactive');
                $('#collage_content-1').addClass('active');
                $('.career_path').css('overflow', 'scroll');
                $('.career_path').css('overflow', 'hidden');
        });
        $('#collage_control-2').on('click', function() {
                $(this).addClass('active').siblings().addClass('deactive');
                $('#collage_content-2').addClass('active');
                $('.career_path').css('overflow', 'scroll');
                $('.career_path').css('overflow', 'hidden');
        });
        $('#collage_control-3').on('click', function() {
                $(this).addClass('active').siblings().addClass('deactive');
                $('#collage_content-3').addClass('active');
                $('.career_path').css('overflow', 'scroll');
                $('.career_path').css('overflow', 'hidden');
        });
        $('#collage_control-4').on('click', function() {
                $(this).addClass('active').siblings().addClass('deactive');
                $('#collage_content-4').addClass('active');
                $('.career_path').css('overflow', 'scroll');
                $('.career_path').css('overflow', 'hidden');
        });
        $('.back_to_colleges').on('click', function() {
                $('.career_path_content .paths_content li').removeClass('active deactive');
                $('.career_path_content .college_paths').removeClass('active ');
        });
        $('.career_path .career_path_header .career_path_close').on('click', function() {
                $('.akhbar_navbar').removeClass('blur');
                $('.future_view').removeClass('blur');
                $('.akhbar_home_news').removeClass('blur');
                $('.about_university').removeClass('blur');
                $('.career_path').fadeOut();
        });
        $('#career_path_open').on('click', function() {
                $('.career_path').fadeIn();
                $('.akhbar_navbar').addClass('blur');
                $('.future_view').addClass('blur');
                $('.akhbar_home_news').addClass('blur');
                $('.about_university').addClass('blur');
        });
        // ## End Mahmoud Hamdy ##
        // ## Start Kareem Adel ##
        $(".Department-Projects ul li").click(function() {
                $(this).addClass('active').siblings().removeClass('active');
        });
        $(".list-links  li").click(function() {
                $(this).addClass('active').siblings().removeClass('active');
        });
        $(".heads-departmet li").click(function() {
                $(this).addClass('active').siblings().removeClass('active');
        });
        $(".Department-list li").click(function() {
                $(this).addClass('active').siblings().removeClass('active');
        });
        $(".Department-list   .all").click(function() {
                $(".head-engineering,.head-Computer-Science,.head-Business,.head-Journalism").fadeIn(500);
        });
        $(".Department-list   .Computer").click(function() {
                $(".head-engineering,.head-Business,.head-Journalism").fadeOut(400);
                $(".head-Computer-Science").fadeIn(500);
        });
        $(".Department-list  .engineering").click(function() {
                $(".head-Computer-Science,.head-Business,.head-Journalism").fadeOut(400);
                $(".head-engineering").fadeIn(500);
        });
        $(".Department-list   .Business").click(function() {
                $(".head-Computer-Science,.head-engineering,.head-Journalism").fadeOut(400);
                $(".head-Business").fadeIn(500);
        });
        $(".Department-list  .Journalism").click(function() {
                $(".head-Computer-Science,.head-engineering,.head-Business").fadeOut(400);
                $(".head-Journalism").fadeIn(500);
        });
        $(".image-project p").click(function() {
                $(".toggle").slideToggle(300);
        });
        $('.job-desription span').click(function() {
                $('.job-desription i').toggleClass('fa-chevron-down fa-chevron-up').next('p').slideToggle();

        });
        $('.show-one span').click(function() {
                $('.show-one .icon').toggleClass('fa-chevron-down fa-chevron-up').next('div').slideToggle();

        });
        $('.show-two span').click(function() {
                $('.show-two .icon').toggleClass('fa-chevron-down fa-chevron-up').next('div').slideToggle();

        });
        $('.show-three span').click(function() {
                $('.show-three .icon').toggleClass('fa-chevron-down fa-chevron-up').next('div').slideToggle();

        });
        $('.show-four span').click(function() {
                $('.show-four .icon').toggleClass('fa-chevron-down fa-chevron-up').next('div').slideToggle();

        });
        $(function() {
                if ($('body').is('.page_mixitup')) {
                        var mixer = mixitup('#gallary-image');
                }
        });
        // ## End Kareem Adel ##
        // ## Start Hazem Ibrahim ##
        $(".about .list-links ul li").on('click', function() {
                $(this).parent().find('li.active').removeClass('active');
                $(this).addClass('active');
        });
        // ## End Hazem Ibrahim ##
});