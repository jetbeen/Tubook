// index.js rewrite
//*From https://github.com/FromAmericanJack/jackOA  MIT LICENSE*/

var ICON_SHRINK="layui-icon-shrink-right",ICON_SPREAD="layui-icon-spread-left",APP_SPREAD_SM="layRe-side-spread-sm",SIDE_SHRINK="layRe-side-shrink",full=1,status="";function fullScreen(){if(1==full){var e=document.documentElement,l=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullscreen;void 0!==l&&l&&l.call(e),full=2}else document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen(),full=1}function shrink(){var e=$("#LAY_app"),l=$("#LAY_app_flexible");"spread"===status?(l.removeClass(ICON_SPREAD).addClass(ICON_SHRINK),screen()<2?e.addClass(APP_SPREAD_SM):e.removeClass(APP_SPREAD_SM),e.removeClass(SIDE_SHRINK),status=""):(l.removeClass(ICON_SHRINK).addClass(ICON_SPREAD),screen()<2?e.removeClass(SIDE_SHRINK):e.addClass(SIDE_SHRINK),e.removeClass(APP_SPREAD_SM),status="spread")}function screen(){var e=$(window).width(); resetMainHeight($("iframe"));return e>1200?3:e>992?2:e>768?1:0}function escape(e){return String(e||"").replace(/&(?!#?[a-zA-Z0-9]+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;")}