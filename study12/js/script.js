;(function($, window, document, undefined) {

    var litho = {
        init: function() {
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
            this.footerFn();
        },

        headerFn() {
        },
        mainFn() {
        },// mainFn() //
        section01Fn() {

            // 윈도우 반응형
            var cnt = 0;
            var winW = 0;
            var winH = 0;
            var arrowW = 0;
            var arrowGap = 0;

            setTimeout(resizeFn, 100);

            $(window).resize(function() {
                resizeFn();
            });

            function resizeFn() {
                winH = $(window).innerHeight();
                winW = $(window).innerWidth();

                winW>1903 ? windW=1903 : winW;
                arrowW = winW * 0.036784025;
                arrowGap = winW * 0.026274304;
                arrowW<20 ? arrowW=20 : arrowW;
                arrowGap<20 ? arrowGap=20 : arrowGap;

                $("#section01").css({width:winW, height:winH});
                $(".slide-wrap").css({width:winW*5, marginLeft:-winW});
                $(".slide").css({maxWidth:winW});
                $(".prev, .next").css({width:arrowW, height:arrowW, marginTop:(-arrowW/2)});
                $(".prev").css({left:arrowGap});
                $(".next").css({right:arrowGap});
                $(".slide-wrap").stop().animate({left:-winW*cnt});
            }

            $(".page-btn").removeClass("addPage");
            $(".page-btn").eq(0).addClass("addPage");

            // 메인 슬라이드
            function mainSlideFn() {

                $(".slide-wrap").stop().animate({left:-winW*cnt}, 600, function() {
                    if(cnt > 2) {
                        cnt = 0;
                        $(".slide-wrap").stop().animate({left:-winW*cnt}, 0);
                    }
                    if(cnt < 0) {
                        cnt = 2;
                        $(".slide-wrap").stop().animate({left:-winW*cnt}, 0);
                    }
                });

                $(".page-btn").removeClass("addPage");
                $(".page-btn").eq(cnt>2 ? 0 : cnt).addClass("addPage");
                $(".page-btn").eq(cnt<0 ? 2 : cnt).addClass("addPage");
            }

            // 다음 슬라이드 버튼
            $(".next").on("click", function(event) {
                event.preventDefault();
                if(!$(".slide-wrap").is(":animated")) {
                    mainSlideFn(cnt++);
                }
            });

            // 이전 슬라이드 버튼
            $(".prev").on("click", function(event) {
                event.preventDefault();
                if(!$(".slide-wrap").is(":animated")) {
                    mainSlideFn(cnt--);
                }
            });

            // 슬라이드 페이지 버튼
            $(".page-btn").each(function(index, element) {
                $(this).on("click", function(event) {
                    event.preventDefault();
                    cnt = index;
                    mainSlideFn();
                });
            });

            // 터치 스와이프 (jQuery)
            /*
            $(".slide-view").swipe({
                swipeLeft : function() {
                    if(!$(".slide-wrap").is(":animated")) {
                        mainSlideFn(cnt++);
                    }
                },
                swipeRight(event) {
                    if(!$(".slide-wrap").is(":animated")) {
                        mainSlideFn(cnt--);
                    }
                }
            });
            */

           // 터치 스와이프 (바닐라)
           var touchStart = null;
           var touchEnd = null;
            $(".slide-view").on({
                mousedown: function(event) {
                    touchStart = event.pageX;
                },
                mouseup: function(event) {
                    touchEnd = event.pageX;
                    var direction = touchStart - touchEnd;
                    if(direction > 0) {
                        if(!$(".slide-wrap").is(":animated")) {
                            mainSlideFn(cnt++);
                        }
                    }
                    if(direction < 0) {
                        if(!$(".slide-wrap").is(":animated")) {
                            mainSlideFn(cnt--);
                        }
                    }
                },
                touchstart: function(event) {
                    touchStart = event.originalEvent.changedTouches[0].screenX;
                },
                touchend: function(event) {
                    touchEnd = event.originalEvent.changedTouches[0].screenX;
                    var direction = touchStart - touchEnd;
                    if(direction > 0) {
                        if(!$(".slide-wrap").is(":animated")) {
                            mainSlideFn(cnt++);
                        }
                    }
                    if(direction < 0) {
                        if(!$(".slide-wrap").is(":animated")) {
                            mainSlideFn(cnt--);
                        }
                    }
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
        footerFn() {
            // goTop 이벤트.
            $("#footer").on({
                click(e) {
                    $('html,body').stop().animate({scrollTop: 0}, 1000); // javascript : Smooth Scroll Event. 선택자는 html,body.
                }
            });
        }
    };// litho //
    litho.init();

})(jQuery, window, document);