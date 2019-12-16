$(document).ready(function(){

    $('.mm_btn').on('click',function () {
        $(this).toggleClass('act');
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');
        $('.mm_close').click(function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main_menu.open").length) {
            $(".mm_btn").removeClass('act');
            $(".main_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });


});


