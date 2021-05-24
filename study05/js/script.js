;(function($, window, document, undefined) {

    var litho = {
        init() {
            this.popupFn();
        },
        popupFn() {
            // 팝업창 만들기
            // 팝업창 열기
            window.open("./popup.html", "popup20210524", "width=500, height=500, top=100, left=100");
            // 클로즈버튼 클릭 이벤트
            $(".close-btn").on({
                click(e) {
                    e.preventDefault();
                    // 쿠키 설정
                    if(document.closeForm.checkboxName.checked) {
                        setCookieFn("popup20210524", "no", 1);
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