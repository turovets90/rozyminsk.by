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



    if($('.main_slider > div').length >1){
        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:true,
            fade:true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed:9000,
        });
    }


    $('.main_slider .slick_prev').click(function(){
        $('.main_slider').slick('slickPrev');
    });
    $('.main_slider .slick_next').click(function(){
        $('.main_slider').slick('slickNext');
    });


    $('.mm_catalogbtn').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('act');
    });




    $('.product_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        dotsClass: 'slider__dots',
        customPaging: function(slick, index) {
            var image = $(slick.$slides[index]).find('.slider__img').attr('src');
            return '<img src="' + image + '" alt="" /> '
        }
    });


    $('.amount .down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.amount .up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });



    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [53.907684, 27.484621],
                zoom:12,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                balloonContent: '220092, Республика Беларусь, г. Минск, Ул. Притыцкого 29, ТЦ Тивали, 3 этаж, пав.340'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/map_icon.svg',
                // Размеры метки.
                iconImageSize: [45, 57],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-10, -60]
            });

        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
    });



});


