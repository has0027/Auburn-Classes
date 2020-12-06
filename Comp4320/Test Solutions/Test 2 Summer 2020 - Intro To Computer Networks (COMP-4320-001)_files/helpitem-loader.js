"use strict";
eesy.define(['jquery-private', 'sessionInfo', 'mustachejs', 'json!user-context-variables'], function ($, sessionInfo, Mustache, userContextVariables) {
    var helpitems = {};
    function parseVoting(json) {
        return {
            enabled: json.voting.enabled == "true",
            votedUp: json.voting.votedUp == "true",
            votedDown: json.voting.votedDown == "true"
        };
    }
    /*
     * Public functions
     */
    function loadHelpItem(hid, success) {
        var hi = helpitems[hid];
        if (hi !== undefined) {
            if (!hi.loading) {
                success(hi);
            }
        }
        else {
            helpitems[hid] = { loading: true };
            var loadurl = sessionInfo.dashboardUrl() + "/Scripts/HelpItemLoader.jsp?id=" + hid + "&key="
                + sessionInfo.sessionKey() + '&u=' + var_eesy_dbUpdateCount + '&languageId=' + var_language;
            $.ajax({
                type: 'GET',
                url: loadurl,
                async: true,
                contentType: "application/json",
                dataType: 'jsonp',
                success: function (json) {
                    helpitems[hid] = {
                        id: hid,
                        title: Mustache.to_html(json.title, userContextVariables),
                        embed: Mustache.to_html(json.embed, userContextVariables),
                        itemtype: json.itemtype,
                        orientation: json.orientation,
                        width: json.width,
                        height: json.height,
                        voting: parseVoting(json),
                        loading: false
                    };
                    success(helpitems[hid]);
                }
            });
        }
    }
    return {
        loadHelpItem: loadHelpItem
    };
});
//# sourceMappingURL=helpitem-loader.js.map