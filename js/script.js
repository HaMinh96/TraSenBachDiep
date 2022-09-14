$(document).ready(function(){
    $('.slick-products').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-circle-chevron-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-circle-chevron-right'></i></button>",
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                }
            },
        ]
    });

    $( function() {
        $( "#slider-range" ).slider({
            range: true,
            min: 50000,
            max: 500000,
            step: 5000,
            values: [ 50000, 200000 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "Từ " + ui.values[ 0 ] + " đến " + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "Từ " + $( "#slider-range" ).slider( "values", 0 ) +
            " đến " + $( "#slider-range" ).slider( "values", 1 ) );
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        prevArrow:"<button type='button' class='slick-prev slick-product-btn pull-left sm-rotate'><i class='fa-solid fa-circle-chevron-up'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-product-btn pull-right sm-rotate'><i class='fa-solid fa-circle-chevron-down'></i></button>",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    vertical: false,
                }
            },
        ]
    });

    $('.cart-qty').change(function() {
        let quantity = $(this).val();
        let price = $(this).siblings(".cart-price").attr("data-value");
        let total = parseInt(quantity)*parseFloat(price);

        $(this).siblings().children(".total").attr("data-value", total);
        $(this).siblings().children(".total").text(`${total}VND`);

        getGrandTotal()
    })

    var getGrandTotal = () => {
        let grandTotal = 0;
        $('.total').each(function() {
            let t = parseFloat($(this).attr("data-value"));
            grandTotal += t
        })
        $('.grand-total').text(`${grandTotal}VND`)
    }

    $('.nav-link-cart').click(function() {
        $('.cart-wrap').css({
            'right':'0',
        });
    })

    $('.cart-close').click(function() {
        $('.cart-wrap').css({
            'right':'-200%',
        });
    })
});