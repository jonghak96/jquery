;(function($, window, document, undefined) {

    var clock = {

        init : function() {
            this.mainFn();
        },
        mainFn : function() {

            setInterval(tictocFn, 1000);
            function tictocFn() {
                var time = new Date();
                var hour = time.getHours();
                var minute = time.getMinutes();
                var second = time.getSeconds();
                $(".hour").css({"transform":"rotate("+(hour*30 + minute*0.5 + second*0.008333333333333333)+"deg)"});
                $(".minute").css({"transform":"rotate("+(minute*6 + second*0.1)+"deg)"});
                $(".second").css({"transform":"rotate("+(second*6)+"deg)"});
            }

        }

    };
    clock.init();

})(jQuery, window, document);