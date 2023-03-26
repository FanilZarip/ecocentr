$(document).ready(function () {
  $("a.menu__link, a.toUp, a.top__link, a.offer__link").click(function () {
    var t = "#" + $(this).attr("href").split("#")[1],
      n = $(t).offset().top;
    return (
      jQuery("html:not(:animated),body:not(:animated)").animate(
        { scrollTop: n },
        800
      ),
      !1
    );
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsImVsZW1lbnRDbGljayIsInRoaXMiLCJhdHRyIiwic3BsaXQiLCJkZXN0aW5hdGlvbiIsIm9mZnNldCIsInRvcCIsImpRdWVyeSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFQyxVQUFVQyxNQUFNLFdBRWpCRixFQUFFLG9EQUFvREcsTUFBTSxXQUNyRCxJQUFJQyxFQUFlLElBQUlKLEVBQUVLLE1BQU1DLEtBQUssUUFBUUMsTUFBTSxLQUFLLEdBQ25EQyxFQUFjUixFQUFFSSxHQUFjSyxTQUFTQyxJQUUzQyxPQURBQyxPQUFPLDJDQUEyQ0MsU0FBU0MsVUFBV0wsR0FBYyxNQUM3RSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcblx0JChcImEubWVudV9fbGluaywgYS50b1VwLCBhLnRvcF9fbGluaywgYS5vZmZlcl9fbGlua1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRDbGljayA9ICcjJyskKHRoaXMpLmF0dHIoXCJocmVmXCIpLnNwbGl0KFwiI1wiKVsxXVxyXG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9ICQoZWxlbWVudENsaWNrKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgalF1ZXJ5KFwiaHRtbDpub3QoOmFuaW1hdGVkKSxib2R5Om5vdCg6YW5pbWF0ZWQpXCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogZGVzdGluYXRpb259LCA4MDApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxufSk7Il19
