;(function($) {

    var litho = {

        init() {
            this.headerFn();
            this.mainFn();
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
            this.goTopFn();
            this.footerFn();
        },
        headerFn() {},
        mainFn() {},
        section01Fn() {

            var cnt = 0;
            $(".page-btn").eq(0).addClass("addPage");

            // 메인 슬라이드 함수
            function mainSlideFn() {
                $(".slide-wrap").stop().animate({left:-1903*cnt}, 600, function() {
                    if(cnt==3) {
                        cnt = 0;
                        $(".slide-wrap").stop().animate({left:-1903*cnt}, 0);
                    }
                    if(cnt<0) {
                        cnt = 2;
                        $(".slide-wrap").stop().animate({left:-1903*cnt}, 0);
                    }
                });
                $(".page-btn").removeClass("addPage");
                $(".page-btn").eq(cnt>2 ? 0 : cnt).addClass("addPage");
                // $(".page-btn").eq(cnt<0 ? 2 : cnt).addClass("addPage");
            }

            // 슬라이드 버튼 클릭 이벤트
            $(".next").on({
                click(e) {
                    e.preventDefault();
                    if(!$(".slide-wrap").is(":animated")) {
                        mainSlideFn(cnt++);
                    }
                }
            });
            $(".prev").on({
                click(e) {
                    e.preventDefault();
                    if(!$(".slide-wrap").is(":animated")) {
                        mainSlideFn(cnt--);
                    }
                }
            });

            // 페이지 버튼 클릭 이벤트
            $(".page-btn").each(function(index, element) {
                $(this).on({
                    click(e) {
                        e.preventDefault();
                        cnt = index;
                        mainSlideFn();
                    }
                });
            });

        },
        section02Fn() {},
        section03Fn() {},
        section04Fn() {},
        section05Fn() {},
        section06Fn() {},
        section07Fn() {},
        section08Fn() {},
        section09Fn() {},
        section10Fn() {},
        goTopFn() {
            $(".goTop-btn").on({
                click(e) {
                    e.preventDefault();
                    $('html,body').stop().animate({scrollTop:0}, 600);
                }
            });
        },
        footerFn() {}
    };
    litho.init();

})(jQuery);