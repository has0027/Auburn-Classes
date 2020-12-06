"use strict";
eesy.define([
    'jquery-private',
    'json!settings-supportcenter', 'mustachejs',
    'presentation-helper'
], function ($, settings, Mustache, presentationHelper) {
    function preview(helpItem) {
        $('.eesy_dark').remove();
        $("body").append(Mustache.to_html(templates.standard, presentationHelper.helpItemModel(helpItem), templates));
        $('#eesy-dark-screen').show();
        $prepareContainer(helpItem).show();
    }
    function show(helpItem) {
        $('.eesy_dark').remove();
        $("body").append(Mustache.to_html(templates.standard, presentationHelper.helpItemModel(helpItem), templates));
        $('#eesy-dark-screen').fadeIn('fast');
        $prepareContainer(helpItem).fadeIn('fast');
    }
    function $prepareContainer(helpItem) {
        var $container = $('#eesy-standardcontainer[data-helpitemid="' + helpItem.id + '"]');
        if (helpItem.width !== "0" || helpItem.height !== "0") {
            $container.css({
                'width': helpItem.width + 'px',
                'height': helpItem.height + 'px'
            });
        }
        return $container;
    }
    return {
        preview: preview,
        show: show
    };
});
//# sourceMappingURL=popups.js.map