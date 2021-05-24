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
            
            // 스토리보드 2
            // 1. 메인 슬라이드 함수
            // 2. 다음화살버튼 클릭 이벤트
            // 3. 이전화살버튼 클릭 이벤트
            // 4. 페이지버튼 함수
            // 5. 페이지버튼 클릭 이벤트

            var n = $(".slide").length;
            var presentPage = 0;
            var targetPage = 0;

            function mainSlideFn() {
                $(".slide").css({zIndex:1});
                $(".slide").eq(targetPage).css({zIndex:3}).stop().animate({opacity:0}, 0).animate({opacity:1}, 1000);
                $(".slide").eq(presentPage).css({zIndex:2});
                presentPage = targetPage;
                pageBtnFn();
            }

            function pageBtnFn() {
                $(".page-btn").removeClass("addPage");
                $(".page-btn").eq(targetPage).addClass("addPage");
            }

            $(".next").on({
                click(e) {
                    e.preventDefault();
                    targetPage++;
                    targetPage>(n-1) ? targetPage=0 : targetPage;
                    mainSlideFn();
                }
            });
            
            $(".prev").on({
                click(e) {
                    e.preventDefault();
                    targetPage--;
                    targetPage<0 ? targetPage=(n-1) : targetPage;
                    mainSlideFn();
                }
            });

            $(".page-btn").each(function(index) {
                $(this).on({
                    click(e) {
                        e.preventDefault();
                        targetPage = index;
                        mainSlideFn();
                    }
                });
            });

        },
        footerFn() {

        }
    };
    litho.init();

})(jQuery, window, document);