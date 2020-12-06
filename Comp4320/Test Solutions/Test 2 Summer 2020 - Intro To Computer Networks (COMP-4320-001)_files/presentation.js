"use strict";
eesy.define([
    'jquery-private', 'sessionInfo', 'engine-state', 'utils', 'helpitem-loader',
    'context-links', 'mouse', 'json!settings-supportcenter', 'mustachejs',
    'json!language', 'proactive-hints', 'presentation-helper',
    'helpitem-visibility', 'systrays', 'quick-survey', 'hints', 'popups', 'helpitem-handling'
], function ($, sessionInfo, engineState, utils, helpitemLoader, contextlinks, mouse, settings, Mustache, language, proactiveHints, presentationHelper, helpitemVisibility, systrays, quickSurvey, hints, popups, helpitemHandling) {
    window.addEventListener('previewhelp', function (event) {
        if (event.detail.helpItem.itemtype === "Hint") {
            hints.preview(event.detail.helpItem);
        }
        else if (event.detail.helpItem.itemtype === "Systray") {
            systrays.preview(event.detail.helpItem);
        }
        else if (["Message", "HtmlCode", "File"].indexOf(event.detail.helpItem.itemtype) > -1) {
            popups.preview(event.detail.helpItem);
        }
    }, true);
    window.addEventListener('previewhelphide', function (event) {
        $('#hintcontainer[data-helpitemid="preview"]').remove();
        $('#systraycontainer').remove();
        $('.eesy_dark').remove();
        $('#eesy-dark-screen').remove();
        $('#eesy-standardcontainer').remove();
    }, true);
    function showHintProactive(helpItem, connectTo) {
        proactiveHints.show(helpItem, connectTo);
    }
    function showHint(helpItem) {
        hints.show(helpItem);
    }
    function hideHint() {
        hints.hide();
    }
    function showPopup(helpItem) {
        popups.show(helpItem);
    }
    function showSystray(helpItem) {
        systrays.show(helpItem);
    }
    function showSupportTab() {
        supportTab.show(function () {
            supportTab.launchSupportCenter();
            utils.focusElement("#supportCenterMainHeading", 500);
        });
    }
    function fadeAndRemoveWithDark(target, onFaded) {
        target.fadeOut('fast', function () {
            $(this).remove();
            if ($('.eesy_dark').length) {
                $('.eesy_dark').fadeOut('fast', function () {
                    $(this).remove();
                    onFaded();
                });
            }
            else {
                onFaded();
            }
        });
    }
    function closeHelpitem(target) {
        var container = $(target).closest(".eesy_container");
        var helpitemId = container.data("helpitemid");
        helpitemVisibility.closeItem(helpitemId);
        if (var_proactive_version > 2 && container.find('.eesy_hide_switch input').is(':checked')) {
            helpitemVisibility.dontShowAgain(helpitemId);
        }
        fadeAndRemoveWithDark(container, function () {
            $('body').removeClass('eesy_modal_open');
            $(document).trigger("presentation.hide.item");
        });
    }
    utils.onClickOrSelectKey('.eesy_hint_close', function (e, target) { return closeHelpitem(target); });
    utils.onClickOrSelectKey('.eesy_close', function (e, target) { return closeHelpitem(target); });
    utils.onClickOrSelectKey('.eesy_systray_close', function (e, target) { return closeHelpitem(target); });
    function hideAndFade(selector, element, onFaded) {
        helpitemVisibility.dontShowAgain($(selector).data("helpitemid"));
        fadeAndRemoveWithDark($(element).parents(".eesy_container"), onFaded);
    }
    utils.onClickOrSelectKey('#hintcontainer .eesy_hint_hide', function (e, element) {
        hideAndFade('#hintcontainer', element, function () { });
    });
    utils.onClickOrSelectKey('.eesy_systray_hide', function (e, element) {
        hideAndFade('#systraycontainer', element, function () { });
    });
    utils.onClickOrSelectKey('.eesy_standard_hide', function (e, element) {
        hideAndFade('#eesy-standardcontainer', element, function () {
            $(document).trigger("presentation.hide.item");
        });
    });
    utils.onClickOrSelectKey('.eesy_hintfixed_dontshowanymore', function (e, target) {
        var helpitemId = $(target).parents(".eesy_container").data("helpitemid");
        helpitemVisibility.dontShowAgain(helpitemId);
    });
    return {
        showHint: showHint,
        showHintProactive: showHintProactive,
        showPopup: showPopup,
        showSystray: showSystray,
        showSupportTab: showSupportTab,
        hideHint: hideHint
    };
});
//# sourceMappingURL=presentation.js.map