// $(function(){});

// IIFE 즉시 표현(실행) 함수식
// (function($) { // 매개변수로 $ 기호 사용. >> 충돌을 피할 수 있음.
// })(jQuery); // argument에서 jQuery 함수 매개변수에 전달.
// ; : 이전에 발생한 모든 것을 종결.

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

        headerFn() {
        },

        section01Fn() {
            // 스토리
            // 1. 메인 슬라이드 함수
            // 2. 다음 슬라이드 카운트 함수
            // 3. 이전 슬라이드 카운트 함수
            // 4. 다음 버튼 클릭 이벤트

            var cnt = 0;
            
            function mainSlideFn() {
                console.log(cnt);
                $(".slide-wrap").stop().animate({left:-1903*cnt}, 1000, function() {
                    if(cnt > 2) {
                        cnt = 0;
                        $(".slide-wrap").stop().animate({left:-1903*cnt}, 0);
                    }
                    if(cnt < 0) {
                        cnt = 2;
                        $(".slide-wrap").stop().animate({left:-1903*cnt}, 0);
                    }
                }); /*stop() : 마지막 한 번만 실행.*/ /*콜백함수 : 이미지가 끝나고 실행 (transitionend)*/
            }

            function nextSlideCountFn() {
                cnt++;
                mainSlideFn();
            }
            function prevSlideCountFn() {
                cnt--;
                mainSlideFn();
            }
            
            $(".next").on({
                click: function() {
                    nextSlideCountFn();
                }
            });
            $(".prev").on({
                click: function() {
                    prevSlideCountFn();
                }
            });

        },// section01Fn() //

        section02Fn() {
        },
        section03Fn() {
        },
        section04Fn() {
        },
        section05Fn() {
        },
        section06Fn() {
        },
        section07Fn() {
        },
        section08Fn() {
        },
        section09Fn() {
        },
        section10Fn() {
        },
        footerFn() {
        }
    };// litho //
    litho.init();

})(jQuery);