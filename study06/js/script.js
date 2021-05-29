;(function($, window, document, undefined) {

    var litho = {

        init() {
            this.popupFn();
        },
        popupFn() {
            
            // 팝업창 만들기

            // 팝업창 열기
            // window.open("파일디렉토리", "팝업창이름", "옵션");
            function popupOpenFn() {
                var isCookie = getCookieFn("popup20210528_01");
                if(isCookie!="no") {
                    window.open("./popup.html", "popup20210528_01", "width=420,height=712,top=150,left=200");
                }
            }
            popupOpenFn();



            // 클로즈 버튼 클릭 이벤트
            $(".close-btn").on({
                click(e) {
                    e.preventDefault();
                    // 만약 '다시열지않기' 체크가 되었으면
                    // if(document.checkForm.chkName.checked) {
                    if($("#checkboxId").is(":checked")) {
                        // 함수이름("쿠키이름", "쿠키값", 만료일수)
                        setCookieFn("popup20210528_01", "no", 1);
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
                var txt = `${name}=${value};expires=${today};`;
                document.cookie = txt;
            }

            // 쿠키 가져오기
            function getCookieFn(name) {
                var value = "";
                var cookies = document.cookie.split(";");
                $.each(cookies, function(index, element) {
                    var cookie = element.trim();
                    var startIndex = name.length + 1;
                    var endIndex = cookie.length;
                    var cookieName = cookie.slice(0, startIndex-1);
                    var cookieValue = cookie.slice(startIndex, endIndex);
                    if(cookieName==name) value = cookieValue;
                });
                return value;
            }

        }
    };
    litho.init();

})(jQuery, window, document);