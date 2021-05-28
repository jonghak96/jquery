// $(function(){});

// IIFE 즉시 표현(실행) 함수식
// (function($) { // 매개변수로 $ 기호 사용. >> 충돌을 피할 수 있음.
// })(jQuery); // argument에서 jQuery 함수 매개변수에 전달.
// ; : 이전에 발생한 모든 것을 종결.

;(function($, window, document, undefined) {

    var litho = {
        init: function() {
            this.popupFn();
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


        popupFn() {
            
            var popupDetails = [
                ["./popup/popup_20210528_01.html", "popup_20210528_01", "width=250,height=712,top=100,left=0"],
                ["./popup/popup_20210528_02.html", "popup_20210528_02", "width=250,height=712,top=100,left=300"],
                ["./popup/popup_20210528_03.html", "popup_20210528_03", "width=250,height=712,top=100,left=600"]
            ];

            var getCookieValue = function(name) {
                var value = "";
                var cookies = document.cookie.split(";");
                // for(i in cookies), for(i=0;i<cookies.length;i++)
                $.each(cookies, function(index, element) {
                    let cookie = element.trim();
                    let start = name.length;
                    let cookieName = cookie.slice(0, start);
                    let cookieValue = cookie.slice(start+1);
                    if(cookieName==name) value=cookieValue;
                });
                console.log(value);
                return value;
            }
            
            var openPopup = function(location, name, option) {
                var isExpired = getCookieValue(name);
                if(isExpired!="yes") {
                    window.open(location, name, option);
                }
            }
            
            $.each(popupDetails, function(index, element) {
                openPopup(element[0], element[1], element[2]);
            });

            // var getCookieValue = function(name) {
            //     var value = "";
            //     var cookies = document.cookie.split(";");
            //     $.each(cookies, function(index, element) {
            //         let cookie = element.trim();
            //         if(cookie.replace(name+"=", "")=="yes") value="yes";
            //     });
            //     return value;
            // }

            // 모달창 닫기 & 쿠키 설정
            $("#layer_modal .close-btn").on({
                click(e) {
                    e.preventDefault();
                    $("#layer_modal").stop().fadeOut(600);
                    // $("#layer_modal").stop().hide();
                }
            });

            // 모달창 보이기 (열기) & 쿠키 가져오기
            function openModal() {
                $("#layer_modal").stop().fadeIn(600);
            }

            openModal();

            /*
            // 2. 윈도우 팝업창 열기 (리터럴 함수)
            var openPopup01 = function() {
                // 만료일 설정된 쿠키는 열리지 않음.
                var isExpired = getCookieValue("popup_20210528_01");
                if(isExpired!="yes") {
                    window.open("./popup/popup_20210528_01.html", "popup_20210528_01", "width=250,height=712,top=100,left=0");
                }
            }
            var openPopup02 = function() {
                var isExpired = getCookieValue("popup_20210528_02");
                if(isExpired!="yes") {
                    window.open("./popup/popup_20210528_02.html", "popup_20210528_02", "width=250,height=712,top=100,left=300");
                }
            }
            var openPopup03 = function() {
                var isExpired = getCookieValue("popup_20210528_03");
                if(isExpired!="yes") {
                    window.open("./popup/popup_20210528_03.html", "popup_20210528_03", "width=250,height=712,top=100,left=600");
                }
            }

            openPopup01();
            openPopup02();
            openPopup03();
            */

        },


        headerFn() {
            var t = 0;
            // 상단에서 (BOM)(윈도우)스크롤이 10px 이상 발생하면 헤더에 클래스 추가하여
            // 헤더에 영역이 검은 투명색으로 나타남.
            // 그렇지 않으면 배경을 없애서 투명하게 처리.
            $(window).scroll(function() {
                // console.log("현재 scrollTop 값 :", $(window).scrollTop());
                if ($(window).scrollTop() >= 100) {
                    if (t==0) { // 1회만 실행하는(버블링 막는) 토글 변수
                        t = 1;
                        $("#header").addClass("addHeader");
                        $("html,body").stop().animate({scrollTop: $("#section02").offset().top}, 600);
                    }
                } else {
                    t = 0; // 초기화
                    $("#header").removeClass("addHeader");
                }
            });
        },

        
        mainFn() {},// mainFn() //


        section01Fn() {
            // 페이드 인아웃 슬라이드 알고리즘
            // 스토리보드 (머릿속에 추상화 한다음, 디버깅하면서 코드작성.)
            // 1. 메인 슬라이드 애니메이션(페이드 인아웃) 함수()
            // 2. 다음 슬라이드 카운트 함수()
            // 3. 다음화살버튼 클릭 이벤트
            // 4. 페이지(인디게이터) 버튼
            // 5. 페이지 버튼 클릭 이벤트
            var cnt = 0;
            var n = $(".slide").length - 1; // 슬라이드의 전체 갯수 - 1
            var num = null; // 이전에 실행중인 슬라이드 번호를 기억하는 변수.

            function nextSlideFn() {
                cnt>n ? cnt=0 : cnt;
                if(num!=null) { // 페이지버튼을 클릭한 경우.
                    var x = num;
                } else {
                    var x = cnt-1<0 ? n : cnt-1;
                }
                $(".slide").css({zIndex:1});
                $(".slide").eq(cnt).css({zIndex:(n+1)}).stop().animate({opacity:0}, 0).animate({opacity:1}, 1000);
                $(".slide").eq(x).css({zIndex:n});
                pageBtnFn();
                num = null;
            }

            function prevSlideFn() {
                cnt<0 ? cnt=n : cnt;
                if(num!=null) { // 페이지버튼을 클릭한 경우.
                    var x = num;
                } else {
                    var x = cnt+1>n ? 0 : cnt+1;
                }
                $(".slide").css({zIndex:1}).stop().animate({opacity:1}, 0);
                $(".slide").eq(x).css({zIndex:(n+1)}).stop().animate({opacity:1}, 0).animate({opacity:0}, 1000);
                $(".slide").eq(cnt).css({zIndex:n});
                pageBtnFn();
                num = null;
            }

            // 다음 버튼은 다음장을 밝히는 것. (이전장을 뒤로 보내기.)
            // 이전 버튼은 이전장을 밝히는 것. (다음장을 뒤로 보내기.)
            // >> 같은 함수를 두고 '대상'장을 밝히고 '현재'장을 뒤로 보내면 되겠네.
            // >> 다음 버튼의 대상 장 = cnt++ 현재 장 = cnt
            // >> 이전 버튼의 대상 장 = cnt-- 현재 장 = cnt
            // function mainSlideFn(goal, present) {

            // }

            $(".next").on({
                click(e) {
                    e.preventDefault();
                    nextSlideFn(cnt++);
                }
            });

            $(".prev").on({
                click(e) {
                    e.preventDefault();
                    prevSlideFn(cnt--);
                }
            });

            function pageBtnFn() {
                $(".page-btn").removeClass("addPage");
                $(".page-btn").eq(cnt).addClass("addPage");
                console.log(cnt);
            }

            // $.each(배열, function() {});
            $(".page-btn").each(function(index, element) {
                // console.log(index);
                $(this).on({
                    click(e) {
                        e.preventDefault();
                        num = cnt;
                        if (cnt > index) {
                            cnt = index;
                            nextSlideFn();
                        }
                        if (cnt < index) {
                            cnt = index;
                            prevSlideFn();
                        }

                    }
                });
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