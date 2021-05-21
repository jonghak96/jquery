// $(function() {});

// (function() {
// })();

// ;(function($) {
// })(jQuery);

;(function($) {

    var litho = {
        init: function() {
            this.headerFn();
            this.section01Fn();
            this.section02Fn();
            this.section03Fn();
            this.section04Fn();
            this.section05Fn();
            this.section06Fn();
            this.section07Fn();
            this.section08Fn();
            this.section09Fn();
            this.section10Fn();
            this.footerFn();
        },
        headerFn() {},
        section01Fn() {

            // 스토리
            // 메인 슬라이드 함수
            // 다음(이전) 슬라이드 카운트 함수
            // 다음(이전) 버튼 클릭 이벤트

            var cnt = 0;

            function mainSlideFn() {
                $(".slide-wrap").stop().animate({left:-1903*cnt}, 1000, function() {
                    console.log(cnt);
                    if(cnt > 2) {
                        cnt = 0;
                        $(".slide-wrap").stop().animate({left:-1903*cnt}, 0);
                    }
                    if(cnt < 0) {
                        cnt = 2;
                        $(".slide-wrap").stop().animate({left:-1903*cnt}, 0);
                    }
                });
            }

            function prevSlideFn() {
                cnt--;
                mainSlideFn();
            }
            function nextSlideFn() {
                cnt++;
                mainSlideFn();
            }

            $(".prev").on({
                click: function(e) {
                    e.preventDefault();
                    prevSlideFn();
                }
            });
            $(".next").on({
                click: function(e) {
                    e.preventDefault();
                    nextSlideFn();
                }
            });

        },// section01Fn() //
        section02Fn() {},
        section03Fn() {},
        section04Fn() {},
        section05Fn() {},
        section06Fn() {},
        section07Fn() {},
        section08Fn() {},
        section09Fn() {},
        section10Fn() {},
        footerFn() {}
    };// litho //
    litho.init();

})(jQuery);// jQuery //
