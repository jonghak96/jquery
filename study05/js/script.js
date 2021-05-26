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
                $.each(cookies, function() {
                    let cookie = cookies[i].trim();
                    let startIdx = name.length + 1;
                    let endInx = cookie.length;
                    let cookieName = cookie.slice(0, startIdx-1);
                    let cookieValue = cookie.slice(startIdx, endInx);
                    if(cookieName==name) value=cookieValue;
                });
                return value;
            }

            // 클로즈버튼 클릭 이벤트
            $(".close-btn").on({
                click(e) {
                    e.preventDefault();
                    // 쿠키 설정
                    if(document.closeForm.checkboxName.checked) {
                        setCookieFn("popup20210528", "no", 1);
                    } 
                    // 팝업창 닫기
                    window.close();
                    // self.close();
                }
            });
            // 쿠키 설정 함수
            function setCookieFn(name, value, expires) {
                var today = new Date();
                today.setDate(today.getDate()+expires);
                var txt = `${name}=${value}; expires=${today};`;
                document.cookie = txt;
            }
        }
    };
    litho.init();

})(jQuery, window, document);