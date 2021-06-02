;(function($, window, document, undefined) {

    var clock = {

        init : function() {
            this.clockFn();
            this.calendarFn();
        },

        clockFn : function() {
            // var $hour = $(".hour");
            // var $minute = $(".minute");
            // var $second = $(".second");
            tictocFn();
            setInterval(tictocFn, 1000);
            function tictocFn() {
                var time = new Date();
                var hour = time.getHours();
                var minute = time.getMinutes();
                var second = time.getSeconds();
                if(hour>=12) hour-=12; 
                $(".hour").css({transform:`rotate(${hour*30 + minute*0.5 + second*0.008333333333333333}deg)`});
                $(".minute").css({transform:`rotate(${minute*6 + second*0.1}deg)`});
                $(".second").css({transform:`rotate(${second*6}deg)`});
            }
            // setInterval(function() {
            //     tictocFn();
            // }, 1000);
        },

        calendarFn : function() {

            var $year = $(".year");
            var $month = $(".month");

            // 달력 메인 함수
            function mainCalendarFn() {

                var today = new Date();
                var year = today.getFullYear();
                var month = today.getMonth()+1;

                $year.text(year+"년");
                $month.text(month+"월");

                // 이전 달의 끝날
                // var prevMonth = new Date(year, month-2, -1);
                // var prevMonth_lastDate = prevMonth.getDate();
                // 달의 첫날
                var thisMonth = new Date(year, month-1, 1);
                var firstDay = thisMonth.getDay();
                // 달의 끝날
                var lastDate = new Date(year, month, 0).getDate();

                for(var i=1;i<=lastDate;i++) {
                    console.log(i);
                    $("td").eq(firstDay).text(i);
                    firstDay++;
                }

            }
            mainCalendarFn();

        }

    };
    clock.init();

})(jQuery, window, document);