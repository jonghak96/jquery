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

            // var $year = $(".year");
            // var $month = $(".month");
            var today = new Date();
            var year = null;
            var month = null;
            
            getYearMonthFn();
            mainCalendarFn();
            
            // 년월 구하기 함수
            function getYearMonthFn() {
                year = today.getFullYear();
                month = today.getMonth();
            }

            // 달력 메인 함수
            function mainCalendarFn() {

                $(".year").text(year+"년");
                $(".month").text((month+1)+"월");

                var prevMonth_lastDate = new Date(year, month, 0).getDate();
                var thisMonth_firstDay = new Date(year, month, 1).getDay();
                var thisMonth_lastDate = new Date(year, month+1, 0).getDate();
                
                
                var lastDate = prevMonth_lastDate;
                for(let i=thisMonth_firstDay-1; i>=0; i--) {
                    $("td").eq(i).text(lastDate--).css({color:"#555"});
                }

                var firstDay = thisMonth_firstDay;
                for(let i=1; i<=thisMonth_lastDate; i++) {
                    $("td").eq(firstDay++).text(i).css({color:"#fff"});
                }

                var nextDate = 1;
                for(let i=(thisMonth_firstDay+thisMonth_lastDate); i<=42; i++) {
                    $("td").eq(i).text(nextDate++).css({color:"#555"});
                }

                getTodayFn();
            }

            // 오늘 표시 함수
            function getTodayFn() {

                var now = new Date();
                var isNow = (now.getFullYear() == year) && (now.getMonth() == month);
    
                if(isNow) {
                    // $("td").eq(now.getDay()).css({background:"royalblue", outline:"2px solid #222", outlineOffset: "-4px"});
                    $("td").eq(now.getDay()).addClass("addToday");
                } else {
                    // $("td").eq(now.getDay()).css({background:"transparent", outline:"0px transparent"});
                    $("td").eq(now.getDay()).removeClass("addToday");
                }
            }

            $(".prevMonth").on({
                click(e) {
                    e.preventDefault();
                    today.setMonth(today.getMonth()-1);
                    getYearMonthFn();
                    mainCalendarFn();
                }
            });

            $(".nextMonth").on({
                click(e) {
                    e.preventDefault();
                    today.setMonth(today.getMonth()+1);
                    getYearMonthFn();
                    mainCalendarFn();
                }
            });

        }

    };
    clock.init();

})(jQuery, window, document);