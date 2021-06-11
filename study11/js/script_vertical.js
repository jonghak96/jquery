;(function($, window, document, undefined) {

    var mouseWheel_vertical = {

        init : function() {
            this.wheelEventFn();
        },
        wheelEventFn : function() {

            /*
            $(".section").each(function(index, element) {
                $(window).scroll(function(event) {
                    console.log(index, element);
                    console.log( "$(window).scrollTop() :", $(window).scrollTop() );
                    console.log( '$("#section01").height() :', $("#section01").height() );
                    console.log( '$("#section01").offset().top :', $("#section01").offset().top );
                });
                console.log( "$(this).offset().top :", $(this).offset().top );
            });
            */

            var $section = $(".section");

            $section.each(function(index, element) {
                // console.log( $section.eq(index) );
                // console.log( element );
                var $this = $(this);
                $this.on("DOMMouseScroll mousewheel", function(event) {
                    // console.log(event);
                    // console.log(event.originalEvent);
                    // console.log(event.originalEvent.wheelDelta);
                    var delta = null;
                    if(event.originalEvent.wheelDelta) {
                        delta = event.originalEvent.wheelDelta;
                    } else {
                        delta = event.detail * -40;
                    }

                    if(delta<0 && !$("html,body").is(":animated") && index<$section.length-1) {
                        $("html, body").stop().animate({scrollTop:$this.next().offset().top}, 1000, "easeOutBounce");
                    }
                    if(delta>0 && !$("html,body").is(":animated") && index>0) {
                        $("html, body").stop().animate({scrollTop:$this.prev().offset().top}, 1000, "easeOutBounce");
                    }
                });
            });

        }

    };
    mouseWheel_vertical.init();

})(jQuery, window, document);