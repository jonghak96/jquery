;(function($, window, document, undefined) {

    var litho = {
        init() {
            this.popupFn();
        },
        popupFn() {
            // 팝업창 만들기
            // 팝업창 열기
            openPopupFn();
            function openPopupFn() {
                var isCookie = getCookieFn("popup20210528");
                // console.log("TEST :", isCookie);
                if(isCookie!="no") {
                    window.open("./popup.html", "popup20210528", "width=500, height=500, top=100, left=100");
                }
            }

            // 쿠키 가져오기
            function getCookieFn(name) {
                var value = "";
                var cookies = document.cookie.split(";");
                // for (let i=0;i<cookies.length;i++) {
                $.each(cookies, function(index, element) {
                    let cookie = element.trim();
                    let startIdx = name.length + 1;
                    let endInx = cookie.length;
                    let cookieName = cookie.slice(0, startIdx-1);
                    let cookieValue = cookie.slice(startIdx, endInx);
                    if(cookieName==name) value=cookieValue;
                });
                return value;
            }


        }
    };
    litho.init();

})(jQuery, window, document);