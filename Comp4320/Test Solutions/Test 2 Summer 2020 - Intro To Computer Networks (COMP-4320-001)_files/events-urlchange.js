"use strict";
eesy.define(['jquery-private'], function ($) {
    var currentHref;
    /*
     * Private functions
     */
    //
    // polling loop for detecting url changes that are not otherwise recognized
    //
    function checkHrefLoop() {
        if (currentHref != document.location.href) {
            currentHref = document.location.href;
            setTimeout(function () {
                $(document).trigger("urlchanged");
            }, 1000);
        }
        setTimeout(checkHrefLoop, 500);
    }
    ;
    /*
     * Public functions
     */
    function start() {
        currentHref = document.location.href;
        checkHrefLoop();
    }
    return {
        start: start
    };
});
//# sourceMappingURL=events-urlchange.js.map