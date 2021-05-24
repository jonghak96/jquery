;(function($, window, document, undefined) {

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
        headerFn() {
            var t = 0;
            // 상단에서 스크롤이 10px 이상 발생하면 헤더에 클래스 추가하여
            // 헤더에 영역이 검은 투명색으로 나타남.
            // 그렇지 않으면 배경을 없애서 투명하게 처리.
            $(window).scroll(function() {
                if($(window).scrollTop() >= 1) {
                    if(t==0) {
                        t = 1;
                        $("#header").addClass("addHeader");
                        $("html,body").stop().animate({scrollTop: $("#section02").offset().top}, 600);
                    }
                } else {
                    t = 0;
                    $("header").removeClass("addHeader");
                }
            });
        },
        mainFn() {},
        section01Fn() {

            var cnt = 0;
            var winW = 0;
            var winH = 0;
            var arrowW = 0;
            var arrowGap = 0;

            function resizeFn() {
                winW = $(window).innerWidth();
                winH = $(window).innerHeight();
                arrowW = winW * 0.036784025;
                arrowGap = winW * 0.026274304;
                winW>1903 ? winW=1903 : winW;
                arrowW<20 ? arrowW=20 : arrowW;
                arrowGap<20 ? arrowGap=20 : arrowGap;

                $("#section01").css({width:winW, height:winH});
                $(".slide-wrap").css({width:winW*5, marginLeft:-winW});
                $(".slide").css({maxWidth:winW});
                $(".slide-wrap").stop().animate({left:-winW*cnt}, 0);
                $(".prev, .next").css({width:arrowW, height:arrowW, marginTop:-arrowW/2});
                $(".prev").css({left:arrowGap});
                $(".next").css({right:arrowGap});
            }

            setTimeout(resizeFn, 100);

            $(window).resize(function() {
                resizeFn();
            });

            $(".page-btn").eq(0).addClass("addPage");

            // 메인 슬라이드 함수
            function mainSlideFn() {
                $(".slide-wrap").stop().animate({left:-winW*cnt}, 600, function() {
                    if(cnt==3) {
                        cnt = 0;
                        $(".slide-wrap").stop().animate({left:-winW*cnt}, 0);
                    }
                    if(cnt<0) {
                        cnt = 2;
                        $(".slide-wrap").stop().animate({left:-winW*cnt}, 0);
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

})(jQuery, window, document);