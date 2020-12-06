"use strict";
eesy.define(['jquery-private', 'sessionInfo'], function ($, sessionInfo) {
    /*
      private functions:
    */
    function KeepAliveTimer() {
        $.ajax({
            type: 'GET',
            url: sessionInfo.dashboardUrl() + "/Scripts/KeepAlive.jsp?key=" + sessionInfo.sessionKey(),
            async: true,
            jsonpCallback: 'jsonKeepAlive',
            contentType: "application/json",
            dataType: 'jsonp',
            success: function (json) { }
        });
        setTimeout(KeepAliveTimer, 600000);
    }
    /*
    public functions:
    */
    function start() {
        setTimeout(KeepAliveTimer, 600000);
    }
    return {
        start: start
    };
});
//# sourceMappingURL=keep-alive.js.map