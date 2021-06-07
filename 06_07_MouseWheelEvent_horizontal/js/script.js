;(function($, window, document, undefined) {

    var mouseWheel = {

        init() {
            this.wheelEventFn();
        },
        wheelEventFn() {

            /*
            // each(), scroll()
            $(".section").each(function(index, element) {
                // 스크롤 : 모바일, PC 가능.
                $(window).scroll(function(event) {
                    // console.log( "현재 스크롤 탑 값 + 969 :", $(window).scrollTop() + 969 );
                    // console.log( "높이 :", $("#section01").height(), " / ", "섹션01의 탑 값 :", $("#section01").offset().top );
                    // console.log( "높이 :", $("#section02").height(), " / ", "섹션02의 탑 값 :", $("#section02").offset().top );
                    // console.log( "높이 :", $("#section03").height(), " / ", "섹션03의 탑 값 :", $("#section03").offset().top );
                    // console.log( "높이 :", $("#section04").height(), " / ", "섹션04의 탑 값 :", $("#section04").offset().top );
                    // console.log( "높이 :", $("#section05").height(), " / ", "섹션05의 탑 값 :", $("#section05").offset().top );
                    // console.log( "높이 :", $("#section06").height(), " / ", "섹션06의 탑 값 :", $("#section06").offset().top );
                    // console.log( "높이 :", $("#section07").height(), " / ", "섹션07의 탑 값 :", $("#section07").offset().top );
                    // console.log( "높이 :", $("#section08").height(), " / ", "섹션08의 탑 값 :", $("#section08").offset().top );
                    // console.log( "높이 :", $("#section09").height(), " / ", "섹션09의 탑 값 :", $("#section09").offset().top );
                    // console.log( "높이 :", $("#section10").height(), " / ", "섹션10의 탑 값 :", $("#section10").offset().top );
                    // console.log("웹문서 전체 높이 :", $(document).height());
                });
                // console.log( $(".section").eq(index).offset().top );
                // console.log( $(this).offset().top );
                // console.log( $(this).height() );
            });
            */

            var $section = $(".section");
            $section.each(function(index, element) {
                // $section.eq(index)
                var $this = $(this);
                // $this.on({
                //     mousewheel(event) {
                //         console.log(event);
                //     }
                // });
                $this.on("mousewheel DOMMouseScroll", function(event) {
                    event.preventDefault();
                    // console.log(event);
                    // console.log(event.originalEvent);
                    // console.log(event.originalEvent.wheelDelta);

                    // 브라우저 폴리필 (크로스 브라우징)
                    var delta = null;
                    if(event.originalEvent.wheelDelta) {
                        delta = event.originalEvent.wheelDelta;
                    } else {
                        delta = event.detail*-40;
                    }

                    if(delta<0 && !$("html,body").is(":animated") && index<$section.length-1) {
                        // console.log("아래로");
                        // 다음 섹션으로 부드럽게 이동. (smooth scrolling)
                        $("html,body").stop().animate({scrollLeft:$this.next().offset().left}, 1000, "easeOutBounce");
                    }
                    if(delta>0 && !$("html,body").is(":animated") && index>0) {
                        // console.log("위로");
                        // 이전 섹션으로 부드럽게 이동. (smooth scrolling)
                        $("html,body").stop().animate({scrollLeft:$this.prev().offset().left}, 1000, "easeOutBounce"); // scrollTop - scrollLeft / top - left
                    }
                });
            });

        } //wheelEventFn()//

    };
    mouseWheel.init();

})(jQuery, window, document);