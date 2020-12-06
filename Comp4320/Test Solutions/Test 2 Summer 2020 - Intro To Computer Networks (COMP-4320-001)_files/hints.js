"use strict";
eesy.define(['jquery-private', 'utils', 'mouse', 'mustachejs',
    'presentation-helper'], function ($, utils, mouse, Mustache, presentationHelper) {
    function preview(helpItem) {
        $('#hintcontainer[data-helpitemid="preview"]').remove();
        $("body").append(Mustache.to_html(templates.hint, presentationHelper.helpItemModel(helpItem), templates));
        $('#hintcontainer[data-helpitemid="preview"]').css({
            'position': 'fixed',
            'height': helpItem.height + 'px',
            'width': helpItem.width + 'px',
            'top': '100px',
            'right': '440px'
        }).show();
    }
    function isHint(elm) {
        return utils.isOrHas(elm, "#hintcontainer");
    }
    function show(helpItem) {
        $("body").append(Mustache.to_html(templates.hint, presentationHelper.helpItemModel(helpItem), templates));
        var xpos = mouse.x + 20;
        if ((xpos + parseInt(helpItem.width)) > $("body").width()) {
            xpos = mouse.x - 20 - helpItem.width;
        }
        var ypos = mouse.y + 20;
        if ((ypos + parseInt(helpItem.height)) > $("body").height()) {
            ypos = mouse.y - 20 - helpItem.height;
        }
        $('#hintcontainer[data-helpitemid="' + helpItem.id + '"]').css({
            'position': 'absolute',
            'height': helpItem.height + 'px',
            'width': helpItem.width + 'px',
            'top': ypos,
            'left': xpos
        }).fadeIn('fast');
    }
    function hide() {
        $("#hintcontainer").remove();
    }
    return {
        preview: preview,
        isHint: isHint,
        show: show,
        hide: hide
    };
});
//# sourceMappingURL=hints.js.map