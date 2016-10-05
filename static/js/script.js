(function ($) {

    //running only in desktop
    if (Modernizr.touch) {
       
        $(".slider").owlCarousel({
            navigation : true, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true
        });
    } else {
       
        //home slider setting on desktop
        $(".slider").owlCarousel({
            navigation : true, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true
        });
    }
	
	
    if($(window).width() < 767){
         $(".img-bg").each(function () {
            var imG = $(this).data('mobile-background');
            $(this).css('background-image', "url('" + imG + "') ");
        });
         $(".service").each(function(){
            var servimG = $(this).data('mobile-background');
            $(this).css('background-image', "url('" + servimG + "') ");

         });
    }
    else{
        $(".img-bg").each(function () {
            var imG = $(this).data('background');
            $(this).css('background-image', "url('" + imG + "') ");
        });
        $(".service").each(function(){
            var servimG = $(this).data('background');
            $(this).css('background-image', "url('" + servimG + "') ");
        });
    }
    
   
    $( window ).resize(function() {
       
        if($(window).width() < 767){
             $(".img-bg").each(function () {
                var imG = $(this).data('mobile-background');
                $(this).css('background-image', "url('" + imG + "') ");
            });
             $(".service").each(function(){
                var servimG = $(this).data('mobile-background');
                $(this).css('background-image', "url('" + servimG + "') ");

             });
        }
        else{
            $(".img-bg").each(function () {
                var imG = $(this).data('background');
                $(this).css('background-image', "url('" + imG + "') ");
            });
            $(".service").each(function(){
                var servimG = $(this).data('background');
                $(this).css('background-image', "url('" + servimG + "') ");
            });
        }
        
    });
   
})(jQuery);