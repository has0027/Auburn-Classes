"use strict";
eesy.define(['jquery-private'], function ($) {
    var domIframes = [];
    var mouseoveriframe = null;
    /*
     * Private functions
     */
    function getDomChildIframes(parentFrame) {
        return getDomIframesInIframes($(parentFrame).contents().find('iframe'));
    }
    function getDomIframes() {
        return getDomIframesInIframes($("iframe"));
    }
    function getDomIframesInIframes(iframes) {
        var tmpDomIframes = [];
        iframes.each(function (i, iframe) {
            try {
                var hostname = new RegExp(location.host);
                if (hostname.test(iframe.src)) {
                    var ifrm = $(iframe).contents().get(0);
                    if (ifrm.readyState == "complete") {
                        tmpDomIframes.push({
                            iframe: ifrm,
                            src: ifrm.location.href,
                            handled: $(iframe).contents().find('body').data("eesy")
                        });
                        tmpDomIframes = tmpDomIframes.concat(getDomChildIframes(iframe));
                    }
                }
            }
            catch (err) {
            }
        });
        return tmpDomIframes;
    }
    function isIframeInArray(ar, src) {
        for (var i = 0; i < ar.length; i++) {
            if (ar[i].src == src)
                return true;
        }
        return false;
    }
    function setupIframe(ifrm) {
        $(ifrm).find('body').data("eesy", true);
        $(ifrm).mousemove(function (e) {
            $(document).trigger("iframe.mousemove", [e]);
            return true;
        });
        $(ifrm).mouseup(function (e) {
            $(document).trigger("iframe.mouseup", [e]);
            return true;
        });
    }
    /*
     * Public functions
     */
    function iframeTimer(notFirst) {
        try {
            var changed = false;
            var ar = getDomIframes();
            //
            // find unhandled iframes
            //
            ar.forEach(function (frm) {
                if (!$(frm.iframe).contents().find('body').data("eesy")) {
                    setupIframe(frm.iframe);
                    $(document).trigger("iframe.added", [frm.iframe]);
                    changed = true;
                }
            });
            //
            //  figure out if any frames is gone
            //
            domIframes.forEach(function (domFrm) {
                if (!isIframeInArray(ar, domFrm.src)) {
                    $(document).trigger("iframe.srcremoved", [domFrm.src]);
                    changed = true;
                }
            });
            domIframes = ar;
            if (changed) {
                $(document).trigger("iframes.changed");
            }
        }
        finally {
            setTimeout(function () { iframeTimer(true); }, 2000);
        }
    }
    function start() {
        $("iframe").mouseover(function (e) {
            mouseoveriframe = e.target;
        });
        $("iframe").mouseleave(function (e) {
            mouseoveriframe = null;
        });
        $(window).blur(function (e) {
            if (mouseoveriframe != null) {
                $(document).trigger("iframe.focus", [mouseoveriframe]);
            }
        });
        iframeTimer(false);
    }
    function getIFrames() {
        return domIframes;
    }
    return {
        start: start,
        getIFrames: getIFrames
    };
});
//# sourceMappingURL=events-iframe.js.map