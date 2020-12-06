"use strict";
eesy.define([
    'jquery-private', 'engine-state', 'utils', 'mouse', 'mustachejs',
    'json!language', 'helpitem-handling', 'context-tree-matcher', 'context-probe'
], function ($, engineState, utils, mouse, Mustache, language, helpitemHandling, contextTreeMatcher, ctxProbe) {
    var onClickSupportTab;
    var supportTabAlign = 'right';
    // install global launch listener
    $(document).on('click', '#eesy-tab-inner', function (e) {
        if (!$('#eesy-tab-inner').hasClass('eesy_draggable')) {
            onClickSupportTab();
        }
    });
    $(document).on('keypress', '#eesy-tab-inner', function (e) {
        var code = e.keyCode || e.which;
        if (code === 13) {
            onClickSupportTab();
        }
    });
    // TODO can we replace these handlers entirely with css pseudo class selectors? (":hover" etc)
    $(document).on("mouseenter focus", "#eesy-tab-inner", function (e) {
        $('#eesy-tab-inner').addClass("___TabIsFocused");
    });
    $(document).on("mouseleave blur", "#eesy-tab-inner", function (e) {
        $('#eesy-tab-inner').removeClass("___TabIsFocused");
    });
    function startMove(e) {
        $('#eesy-tab-inner').addClass('eesy_draggable').parents()
            .on('mousemove touchmove', dragButton)
            .on('mouseup touchcancel touchend', stopMove);
    }
    function dragButton(e) {
        var minY = supportTabMoveLimit; // the top limit
        if (e.type == 'touchmove') {
            var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            var posY = touch.pageY;
        }
        else {
            var posY = e.pageY;
        }
        var maxY = posY - supportTabMoveLimit; // the bottom limit
        $('.eesy_draggable').offset({
            top: Math.max(Math.min(posY - $('.eesy_draggable').outerHeight() / 2, maxY), minY)
        });
        e.preventDefault();
    }
    function stopMove() {
        var currentTabPosition = $('#eesy-tab-inner').position();
        $('#eesy-tab-inner').parents()
            .off('mousemove touchmove', dragButton)
            .off('mouseup touchcancel touchend', stopMove);
        $('.eesy_draggable').removeClass('eesy_draggable');
        $.get(var_dashboard_url + "/restapi/service.jsp?u=sessionkey&p=" + var_key
            + "&userUpdate=setPosition&top=" + currentTabPosition.top);
    }
    function helpAvailableNotify() {
        if (!($('#eesy-tab-inner').length))
            return;
        var numHelpItems = 0;
        var tabData = function (key) { return $('#eesy-tab-inner').data(key); };
        if (var_tab_version == 1) {
            var host = tabData('host');
            var backBorder = parseInt(tabData('bottom-width')) > 0;
            var borderRadius = tabData('border-radius').substring(0, 1);
            var fgColor = encodeURIComponent(tabData('fg-color'));
            var bgColor = encodeURIComponent(tabData('bg-color'));
            supportTabAlign = tabData('align');
            var align = supportTabAlign.toUpperCase();
            var borderColor = tabData('border-style') == 'none'
                ? bgColor
                : encodeURIComponent(tabData('border-color'));
            var imageUrl = "//" + host + "/support_tab_image.jsp?"
                + "backBorder=" + backBorder
                + "&borderRadius=" + borderRadius
                + "&borderColor=" + borderColor
                + "&fgColor=" + fgColor
                + "&bgColor=" + bgColor
                + "&align=" + supportTabAlign.toUpperCase()
                + "&numItems=" + numHelpItems
                + "&language=" + var_language
                + "&extraHeightTop=" + ($('#eesy-tab-inner').data('hideable') ? 20 : 0)
                + "&styleChecksum=" + var_eesy_style_checksum;
            $('#eesy-tab-inner-img').one("load", function () {
                var width = $('#eesy-tab-inner-img').width();
                var height = $('#eesy-tab-inner-img').height();
                var maximizedWidth = eesy_maximizedTabWidth || (width + "px");
                $('#eesy-tab-inner')
                    .css('width', "" + (supportTabMinimized ? eesy_minimizedTabWidth : maximizedWidth))
                    .css('height', "" + height + "px")
                    .css('background-position', supportTabAlign == 'left' ? 'right' : 'left');
                if ($('#eesy-tab-inner').data('hideable')) {
                    $('#tab-locker')
                        .css('display', 'block')
                        .css('height', width + 'px');
                    updateTabLocker(supportTabMinimized);
                }
            });
            $('#eesy-tab-inner').css('background-image', 'url(' + imageUrl + ')');
            $('#eesy-tab-inner-img').attr('src', imageUrl);
            $("#eesy-tab-inner").css(supportTabAlign, "0px");
        }
    }
    function updateTabLocker(drawMinimized) {
        var flip = supportTabAlign == 'left';
        var minimizedCode = flip ? 8676 : 8677;
        var maximizedCode = flip ? 8677 : 8676;
        var characterCode = drawMinimized ? minimizedCode : maximizedCode;
        $('#tab-locker').css('background-image', 'url(//' + $('#eesy-tab-inner').data('host') + '/generateIcon.jsp'
            + '?color=' + encodeURIComponent($('#eesy-tab-inner').data('fg-color'))
            + '&size=' + $('#eesy-tab-inner-img').width()
            + '&char=' + characterCode + ')');
    }
    function positionTab() {
        if (var_tab_version != 1)
            return;
        try {
            if ($('#eesy-tab-inner').height() > 0) { // dont position if the image is not loaded yet
                if (supportTabAlign == 'right') {
                    try {
                        var adjustScrollbar = false;
                        adjustScrollbar = adjustScrollbar ||
                            ($("#globalNavPageContentArea").get(0).scrollHeight > $("#globalNavPageContentArea").height());
                        if (adjustScrollbar) {
                            $('#eesy-tab-inner').css('right', scrollbarRightAdjust);
                        }
                        else {
                            $('#eesy-tab-inner').css('right', '0px');
                        }
                    }
                    catch (e) {
                        $('#eesy-tab-inner').css('right', '0px');
                    }
                }
                $('#eesy-tab-inner').css('margin-top', '-' + ($('#eesy-tab-inner').height() / 2) + 'px');
                $("#eesy-tab-inner").css("display", "inline-block");
            }
        }
        finally {
            setTimeout(function () {
                positionTab();
            }, 500);
        }
    }
    function show(_onClickSupportTab) {
        onClickSupportTab = _onClickSupportTab;
        //jhe20190619 $("body").append(Mustache.to_html(templates.dashboardlinker2, language));
        $("body").append({
            1: templates.dashboardlinker,
            2: Mustache.to_html(templates.dashboardlinker2, language)
        }[var_tab_version]);
        if (var_tab_version == 1) {
            helpAvailableNotify();
            positionTab();
        }
        if (var_moveable_tab === true) {
            if (supportTabPosition !== null) {
                $('#eesy-tab-inner').css({ 'top': supportTabPosition + 'px' });
                if (!utils.isInViewport($('#eesy-tab-inner'))) {
                    $('#eesy-tab-inner').css({ 'top': '' });
                }
            }
            $('.eesy-tab2-btn-handle').removeClass('eesyHidden');
            $('body')
                .on('mousedown', '.eesy-tab2-btn-handle', startMove)
                .on('touchstart', '#eesy-tab-inner', startMove);
        }
    }
    function launchSupportCenter(hid) {
        eesyRequire(['supportCenter'], function (supportCenter) {
            if (var_open_dashboard_in_new_window) {
                reportSupportTabClick(hid, false);
                window.open(generateDashboardUrl(), "", "width=1280,height=800,scrollbars=yes,resizable=yes,menubar=no");
            }
            else {
                reportSupportTabClick(hid, true);
                var match = contextTreeMatcher.scanForContext(ctxProbe.getDocumentLocation(document), document);
                var ruleIds = [];
                for (var ruleId in match) {
                    ruleIds.push(ruleId);
                }
                supportCenter.show(helpitemHandling.getFoundItemsString(), engineState.foundNodes.get().getFoundItemsString(), hid, ruleIds);
            }
        });
    }
    function launchSupportCenterBySessionStorage() {
        eesyRequire(['supportCenter'], function (supportCenter) {
            reportSupportTabClick(undefined, true);
            supportCenter.show(sessionStorage.getItem("eesy_foundHelpItems"), sessionStorage.getItem("eesy_foundNodes"), undefined, []);
        });
    }
    function reportSupportTabClick(hid, async) {
        if (hid === undefined) {
            $.ajax(var_dashboard_url + "/restapi/service.jsp", {
                async: async,
                data: {
                    u: 'sessionkey',
                    p: var_key,
                    userUpdate: 'addSessionEvent',
                    event_name: 'SUPPORT_TAB_TRIGGERED',
                    event_data: JSON.stringify({ url: document.location.href, coursePk1: (!(typeof eesy_course_id === 'undefined') ? eesy_course_id : -1) })
                }
            });
        }
    }
    function generateDashboardUrl() {
        return var_dashboard_url + "/index.jsp?u=sessionkey&p=" + var_key
            + "&cid=" + (typeof eesy_course_id === 'undefined' ? "-1" : eesy_course_id)
            + (helpitemHandling.getFoundItemsString() === ""
                ? ""
                : "&page=helpitems&method=CSI&input=" + helpitemHandling.getFoundItemsString());
    }
    // old handlers start
    /*  $(document).on('click', '#eesy-tab-inner', function(e) {
          if (!$('#eesy-tab-inner').hasClass('eesy_draggable')){
            onClickSupportTab();
            utils.focusElement("#supportCenterMainHeading", 500);
            }
        });
        
        $(document).on('keypress', '#eesy-tab-inner', function(e) {
            var code = e.keyCode || e.which;
            if (code === 13) {
              onClickSupportTab();
              utils.focusElement("#supportCenterMainHeading", 500);
            }
          });
      */
    // TODO can we replace these handlers entirely with css pseudo class selectors? (":hover" etc)
    $(document).on("mouseenter focus", "#eesy-tab-inner", function (e) {
        $('#eesy-tab-inner').addClass("___TabIsFocused");
    });
    $(document).on("mouseleave blur", "#eesy-tab-inner", function (e) {
        $('#eesy-tab-inner').removeClass("___TabIsFocused");
    });
    $(document).on('mouseenter', '#tab-locker', function (e) {
        updateTabLocker(!supportTabMinimized);
    });
    $(document).on('mouseleave', '#tab-locker', function (e) {
        updateTabLocker(supportTabMinimized);
    });
    $(document).on('click', '#tab-locker', function (e) {
        if ($('#eesy-tab-inner').data('hideable')) {
            supportTabMinimized = !supportTabMinimized;
            updateTabLocker(supportTabMinimized);
            var maximizedWidth = eesy_maximizedTabWidth || ($('#eesy-tab-inner-img').width() + "px");
            $('#eesy-tab-inner').animate({ 'width': "" + (supportTabMinimized ? eesy_minimizedTabWidth : maximizedWidth) });
            $.get(var_dashboard_url + "/restapi/service.jsp?u=sessionkey&p=" + var_key
                + "&userUpdate=setMinimized&minimized=" + (supportTabMinimized ? 1 : 0));
            return false;
        }
    });
    // old handler delete
    return {
        show: show,
        //     helpAvailableNotify: helpAvailableNotify,
        launchSupportCenter: launchSupportCenter,
        launchSupportCenterBySessionStorage: launchSupportCenterBySessionStorage
    };
});
//# sourceMappingURL=support-tab.js.map