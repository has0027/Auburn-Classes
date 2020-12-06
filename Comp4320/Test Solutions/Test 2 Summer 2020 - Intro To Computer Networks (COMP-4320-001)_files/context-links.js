"use strict";
eesy.define(['jquery-private', 'json!context-link-data'], function ($, contextLinkData) {
    var contextlinks = [];
    $.each(contextLinkData, function (i, contextLink) {
        contextlinks.push({
            id: contextLink.id,
            contextid: contextLink.contextid,
            helpitemid: contextLink.helpitemid,
            mode: contextLink.mode,
            stamp: contextLink.stamp,
            userid: contextLink.userid
        });
    });
    return contextlinks;
});
//# sourceMappingURL=context-links.js.map