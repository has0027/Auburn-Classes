"use strict";
eesy.define([
    'jquery-private', 'sessionInfo', 'json!language', 'json!hipa',
    'view-controller'
], function ($, sessionInfo, language, hipa, viewController) {
    if (!sessionStorage.eesysoft_hidden_items) {
        sessionStorage.eesysoft_hidden_items = JSON.stringify({});
    }
    var hiddenItems = JSON.parse(sessionStorage.eesysoft_hidden_items);
    return {
        dontShowAgain: dontShowAgain,
        closeItem: closeItem,
        closeUefItem: closeUefItem,
        isVisible: isVisible,
        hasAccessToHelpitem: hasAccessToHelpitem
    };
    function dontShowAgain(hid) {
        closeItem(hid);
        if (confirm(language.LNG.PROACTIVE.CONFIRM_HIDE_MESSAGE)) {
            var_eesy_hiddenHelpItems[hid] = true;
            var url = sessionInfo.dashboardUrl() + "/Scripts/HelpitemHide.jsp?helpitemid=" + hid
                + "&key=" + sessionInfo.sessionKey() + "&callback=jsonHideHelpitem";
            $.ajax({
                type: 'GET',
                url: url,
                async: true,
                jsonpCallback: 'jsonHideHelpitem',
                contentType: "application/json",
                dataType: 'jsonp',
                success: function (json) { }
            });
        }
    }
    function closeItem(hid) {
        viewController.removeHelpitem(hid);
        if (hid !== undefined) {
            hiddenItems[hid] = true;
            sessionStorage.eesysoft_hidden_items = JSON.stringify(hiddenItems);
        }
    }
    function closeUefItem(hid) {
        viewController.removeHelpitem(hid);
        if (hid !== undefined) {
            hiddenItems[hid] = true;
        }
    }
    function isVisible(hid) {
        if (hid in hiddenItems) {
            return false;
        }
        if (!hasAccessToHelpitem(hid)) {
            return false;
        }
        if (hasHiddenHelpitem(hid)) {
            return false; // user has hidden it
        }
        if ($('.eesy_dark').length) {
            return false; // some modal is showing
        }
        return true;
    }
    function hasAccessToHelpitem(helpItemId) {
        var h = hipa['' + helpItemId] || [];
        var s = var_eesy_sac;
        for (var i = 0; i < h.length; i++) {
            if (s[h[i]]) {
                if (s[h[i]].enabled) {
                    return true;
                }
            }
        }
        return false;
    }
    function hasHiddenHelpitem(helpItemId) {
        return var_eesy_hiddenHelpItems[helpItemId];
    }
});
//# sourceMappingURL=helpitem-visibility.js.map