// $(function(){});

// IIFE 즉시 표현(실행) 함수식
// (function($) { // 매개변수로 $ 기호 사용. >> 충돌을 피할 수 있음.
// })(jQuery); // argument에서 jQuery 함수 매개변수에 전달.
// ; : 이전에 발생한 모든 것을 종결.

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
            var t = 0;
            // 상단에서 (BOM)(윈도우)스크롤이 10px 이상 발생하면 헤더에 클래스 추가하여
            // 헤더에 영역이 검은 투명색으로 나타남.
            // 그렇지 않으면 배경을 없애서 투명하게 처리.
            // $(window).scroll(function() {
            //     // console.log("현재 scrollTop 값 :", $(window).scrollTop());
            //     if ($(window).scrollTop() >= 100) {
            //         if (t==0) { // 1회만 실행하는(버블링 막는) 토글 변수
            //             t = 1;
            //             $("#header").addClass("addHeader");
            //             // $("html,body").stop().animate({scrollTop: $("#section02").offset().top}, 600);
            //         }
            //     } else {
            //         t = 0; // 초기화
            //         $("#header").removeClass("addHeader");
            //     }

            //     // ScrollEventUpDownFn();

            // });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // ScrollEvent의 위아래 방향을 이용하여 MouseWheelEvent 만들기.
            // var newScrollTop = 0;
            // var oldScrollTop = 0;
            // var toogle = 0;
            // function ScrollEventUpDownFn() {

            //     $(".section").each(function(index, element) {
            //         // console.log("현재창(window)의 스크롤 탑값 :", $(this).scrollTop());
            //         newScrollTop = $(window).scrollTop();
    
            //         // console.log("이동 :", oldScrollTop - newScrollTop);
            //         // 이동한 값이 (-)이면 아래로, (+)이면 위로.
            //         var move = 0;
            //         if(!$("html,body").is(":animated")) {
            //             move = oldScrollTop - newScrollTop;
            //         }
            //         if(move < 0 && toogle == 0) {
            //             toogle = 1;
            //             console.log("아래로");
            //             $("html,body").stop().animate({scrollTop: $(".section").eq(index).next().offset().top}, 1000); // eq(n) 배열처리 필요.
            //         }
            //         if(move > 0 && toogle == 0) {
            //             toogle = 1;
            //             console.log("위로");
            //             $("html,body").stop().animate({scrollTop: $(".section").eq(index).prev().offset().top}, 1000); // eq(n) 배열처리 필요.
            //         }
            //         oldScrollTop = newScrollTop;
            //     });

            // }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            var newScrollTop = 0;
            var oldScrollTop = 0;
            var toggle = 0;

            var $section = $(".section");
            $section.each(function(index, element) {
                $(window).scroll(function() {

                    newScrollTop = $(window).scrollTop();
                    // 이동한 값이 (-)이면 아래로, (+)이면 위로.
                    var toggle = 0;
                    move = oldScrollTop - newScrollTop;
                    if(move < 0 && !$("html,body").is(":animated") && index<$section.length-1) {
                        console.log("아래로");
                        toggle = 1;
                        $("html,body").stop().animate({scrollTop: $(".section").eq(index).next().offset().top}, 1000); // eq(n) 배열처리 필요.
                    }
                    if(move > 0 && !$("html,body").is(":animated") && index>0) {
                        toggle = 1;
                        console.log("위로");
                        $("html,body").stop().animate({scrollTop: $(".section").eq(index).prev().offset().top}, 1000); // eq(n) 배열처리 필요.
                    }
                    if(!$("html,body").is(":animated")) {
                        oldScrollTop = newScrollTop;
                        toggle = 0;
                    }
                });
            });





        },
        mainFn() {
            var a;
            var b=0;
            var c=null;
            console.log(a);
            console.log(b);
            console.log(c);
        },// mainFn() //
        section01Fn() {

            var cnt = 0;
            var winW = 0; // 창너비
            var winH = 0; // 창높이
            var arrowW = 0; // 화살표 너비
            var arrowGap = 0; // 화살표 여백
            
            // 반응형 함수
            setTimeout(resizeFn, 100); // resizeFn();
            function resizeFn() {
                winH = $(window).innerHeight(); // javascript : .innerWidth 괄호없음.
                winW = $(window).innerWidth();
                winW>1903 ? winW=1903 : winW;
                arrowW = winW*0.036784025;
                arrowW<20 ? arrowW=20 : arrowW;
                arrowGap = winW * 0.026274304;
                arrowGap<20 ? arrowGap=20 : arrowGap;

                console.log("창너비", winW);
                console.log("창높이", winH);

                $("#section01").css({width:winW, height:winH});
                $(".slide-wrap").css({width:winW*5, marginLeft:-winW});
                $(".slide").css({maxWidth:winW});
                $(".slide-wrap").stop().animate({left:-winW*cnt}, 0); // mainSlideFn();
                $(".prev, .next").css({width:arrowW, height:arrowW, marginTop:(-arrowW/2)}); // 좌우 화살 크기 비율계산 (그리드 계산)
                $(".prev").css({left:arrowGap});
                $(".next").css({right:arrowGap});
            }

            // 윈도우 반응형 (BOM) : 1px이라도 변경되면 resize() 호출.
            $(window).resize(function() {
                resizeFn();
            });

            // 스토리
            // 1. 메인 슬라이드 함수
            // 2. 다음 슬라이드 카운트 함수
            // 3. 이전 슬라이드 카운트 함수
            // 4. 다음 버튼 클릭 이벤트

            $(".page-btn").removeClass("addPage"); // 초기화
            $(".page-btn").eq(0).addClass("addPage"); // eq()
            
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
                }); /*stop() : 마지막 한 번만 실행.*/ /*콜백함수 : 이미지가 끝나고 실행 (transitionend)*/
                
                $(".page-btn").removeClass("addPage"); // 초기화
                // $(".page-btn").eq(cnt).addClass("addPage");
                $(".page-btn").eq(cnt>2 ? 0 : cnt).addClass("addPage");
                // $(".page-btn").eq(cnt<0 ? 2 : cnt).addClass("addPage");
                // nth:child(), eq()가 0보다 작으면 자동으로 인식합니다.
                console.log(cnt);
            }

            // function nextSlideCountFn() {
            //     cnt++;
            //     mainSlideFn();
            // }
            // function prevSlideCountFn() {
            //     cnt--;
            //     mainSlideFn();
            // }
            
            $(".next").on({
                click: function(event) {
                    event.preventDefault();
                    // 만약 애니메이션이 실행되지 않을 때만 클릭 허용 !! (javascript : transitionend)
                    if(!$(".slide-wrap").is(":animated")) {
                        // nextSlideCountFn();
                        mainSlideFn(cnt++);
                    }
                }
            });
            $(".prev").on({
                click: function(event) {
                    event.preventDefault();
                    if(!$(".slide-wrap").is(":animated")) {
                        // prevSlideCountFn();
                        mainSlideFn(cnt--);
                    }
                }
            });

            // 페이지(인디케이터) 버튼
            /*
            $(".page-btn").eq(0).on({
                click: function(event) {
                    event.preventDefault();
                    cnt = 0;
                    mainSlideFn();
                }
            });
            $(".page-btn").eq(1).on({
                click(event) {
                    event.preventDefault();
                    cnt = 1;
                    mainSlideFn();
                }
            });
            $(".page-btn").eq(2).on({
                click(event) {
                    event.preventDefault();
                    cnt = 2;
                    mainSlideFn();
                }
            });
            */

            // 페이지 버튼이 여러개인 경우, 동일한 클래스 이름을 each() 객체배열처리
            // $(".page-btn").each();
            // $(".page-btn").each(function() {});
            // $(".page-btn").each(function(index, element) {
            //     console.log("index :", index);
            //     console.log("element :", element);
            // });
            $(".page-btn").each(function(index, element) {
                $(this).on({ // this == element
                    click: function(event) {
                        event.preventDefault();
                        cnt = index;
                        mainSlideFn();
                        console.log(element);
                    }
                });
            });

            // 배열값 each() 메서드 배열처리
            var a = ["클레", "유라", "알베도"];
            console.log(a);
            $.each(a, function(index, element) { // ex) 객체 : a.성적 a.이름
                console.log(a[index]);
                // console.log(element);
            });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // 터치 스와이프 제작 알고리즘

            /*
            // 1. 내가 터치할 요소 선택 (가장 큰 범위) : slide-view
            $(".slide-view").swipe({
                swipeLeft: function() {
                    // 다음 슬라이드
                    if(!$(".slide-wrap").is(":animated")) {
                        // nextSlideCountFn();
                        mainSlideFn(cnt++);
                    }
                },
                swipeRight(event) {
                    // 이전 슬라이드
                    if(!$(".slide-wrap").is(":animated")) {
                        // prevSlideCountFn();
                        mainSlideFn(cnt--);
                    }
                }
            });
            */

            // var mouseDown = null;
            var touchStart = null;
            var touchEnd = null;

            $(".slide-view").on({

                mousedown: function(event) {
                    // 터치 시작
                    // mouseDown = true;
                    touchStart = event.pageX; // or clientX
                },
                mouseup(event) {
                    // 터치 끝
                    // mouseDown = false;
                    touchEnd = event.pageX; // or clientX

                    var swipe_direction = touchStart - touchEnd;

                    if(swipe_direction < 0) {
                        // console.log("<<");
                        if(!$(".slide-wrap").is(":animated")) {
                            // prevSlideCountFn();
                            mainSlideFn(cnt--);
                        }
                    }
                    if(swipe_direction > 0) {
                        // console.log(">>");
                        if(!$(".slide-wrap").is(":animated")) {
                            // nextSlideCountFn();
                            mainSlideFn(cnt++);
                        }
                    }
                },

                touchstart: function(event) {
                    // 터치 시작
                    // mouseDown = true;
                    // touchStart = event.pageX; // clientX 불가.
                    touchStart = event.originalEvent.changedTouches[0].screenX;
                    // console.log(event);
                    console.log(event.originalEvent);
                    // console.log(event.originalEvent.changedTouches);
                    // console.log(event.originalEvent.changedTouches[0].screenX);
                },
                touchend(event) {
                    // 터치 끝
                    // mouseDown = false;
                    // touchEnd = event.pageX; // or clientX
                    touchEnd = event.originalEvent.changedTouches[0].screenX;

                    var swipe_direction = touchStart - touchEnd;

                    if(swipe_direction < 0) {
                        // console.log("<<");
                        if(!$(".slide-wrap").is(":animated")) {
                            // prevSlideCountFn();
                            mainSlideFn(cnt--);
                        }
                    }
                    if(swipe_direction > 0) {
                        // console.log(">>");
                        if(!$(".slide-wrap").is(":animated")) {
                            // nextSlideCountFn();
                            mainSlideFn(cnt++);
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