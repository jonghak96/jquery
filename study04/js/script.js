;(function($, window, document, undefined) {

    var litho = {
        init() {
            this.headerFn();
            this.mainFn();
            this.section01Fn();
            this.footerFn();
        },
        headerFn() {
            
        },
        mainFn() {

        },
        section01Fn() {

            // 페이드 인아웃 알고리즘
            // 스토리보드
            // 1. 메인 슬라이드 함수
            // 2. 다음 슬라이드 함수
            // 3. 다음화살버튼 클릭 이벤트
            // 4. 페이지버튼 함수
            // 5. 페이지버튼 클릭 이벤트
            var cnt = 0;

            function mainSlideFn() {
                // $(".slide").css({zIndex:1});
                $(".slide").eq(cnt).css({zIndex:3}).stop().animate({opacity:0}, 0).animate({opacity:1}, 1000);
                $(".slide").eq(cnt-1).css({zIndex:2});
            }

            function nextSlideFn() {
                cnt++;
                mainSlideFn();
            }

            function prevSlideFn() {

            }

            $(".next").on({
                click(e) {
                    e.preventDefault();
                    nextSlideFn();
                }
            });
            
            $(".prev").on({
                click(e) {
                    e.preventDefault();

                }
            });

            function pageBtnFn() {

            }

            $(".page-btn").each(function(index, element) {
                $(this).on({
                    click(e) {
                        e.preventDefault();

                    }
                });
            });

        },
        footerFn() {

        }
    };
    litho.init();

})(jQuery, window, document);