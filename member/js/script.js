;(function($, window, document, undefined) {

    var member = {
        init() {
            this.ajaxFn();
        },
        ajaxFn() {
            
            // 버튼 클릭 이벤트
            $(".submit-btn").on({
                click(event) {
                    event.preventDefault();

                    var name = $("#name").val(); // javascript : value()
                    var tel = $("#tel").val();
                    var email = $("#email").val();

                    if(name == "") {
                        alert("이름을 입력 하세요.");
                        return false;
                    } else {
                        
                    }

                    $.ajax({
                        url: "./member.php",
                        type: "POST",
                        data: { // 멤버변수(프로퍼티) : { 전달 : 데이터 }
                            name    : name,
                            tel     : tel,
                            email   : email
                        },
                        success: function(result) {
                            console.log(result);
                            $("#name").val(""); // javascript : value()
                            $("#tel").val("");
                            $("#email").val("");
                            $("#name").focus();
                        },
                        error: function(error) { // catch
                            console.log("AJAX 오류 :", error);
                        }
                    });

                }
            });

            $.ajax({
                url: "./members.php",
                type: "POST",
                data: {
                },
                success: function(result) {
                    console.log(result);
                    $("#memberIdx").val();
                    $("#memberName").val();
                    $("#memberTel").val();
                    $("#memberEmail").val();
                },
                error: function(error) {
                    console.log(error);
                }
            });

        }

    };
    member.init();

})(jQuery, window, document);