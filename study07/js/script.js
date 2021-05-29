;(function($, window, document, undefined) {

    var litho = {

        init() {
            this.popupFn();
        },
        popupFn() {

            // 팝업창 상세정보.
            var popupDetails = [
                ["./popup/popup_20210529_01.html", "popup_20210529_01", "width=250,height=712,top=100,left=0"],
                ["./popup/popup_20210529_02.html", "popup_20210529_02", "width=250,height=712,top=100,left=300"],
                ["./popup/popup_20210529_03.html", "popup_20210529_03", "width=250,height=712,top=100,left=600"]
            ];

            // 팝업창 만들기.

            // 팝업창 열기. & 쿠키 가져오기.
            $.each(popupDetails, function(index, element) {
                openPopupFn(element[0], element[1], element[2]);
            });

            function openPopupFn(location , name, value) {
                var isCookie = getCookieFn(name);
                if(isCookie!="yes") {
                    window.open(location , name, value);
                }
            }

            // 팝업창 닫기. & 쿠키 설정.

            // 모달창 닫기.
            $("#modal_layer .close-btn").on({
                click(e) {
                    e.preventDefault();
                    if($("#checkId").is(":checked")) {
                        setCookieFn("popup_20210529_04", "yes", 30);
                    }
                    $("#modal_layer").stop().animate({top:"-100px"}, 300);
                }
            });

            // 모달창 열기.
            openModalFn();
            
            function openModalFn() {
                var isCookie = getCookieFn("popup_20210529_04");
                if(isCookie!="yes") {
                    $("#modal_layer").css({top:0});
                }
            }

            // 쿠키 가져오기 함수.
            function getCookieFn(name) {
                var value = "";
                var cookies = document.cookie.split(";");
                $.each(cookies, function(index, element) {
                    let cookie = element.trim();
                    let start = name.length;
                    let cookieName = cookie.slice(0, start);
                    let cookieValue = cookie.slice(start+1);
                    if(cookieName==name) value=cookieValue;
                });
                return value;
            }

            // 쿠키 설정 함수.
            function setCookieFn(name, value, expires) {
                var today = new Date();
                today.setDate(today.getDate()+expires);
                var txt = `${name}=${value};expires=${today};path=/;`;
                document.cookie = txt;
            }

        }
    };
    litho.init();

})(jQuery, window, document);