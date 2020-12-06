"use strict";
eesy.define(['jquery-private', 'context-probe', 'context-handling', 'monitor-handling',
    'events-urlchange', 'events-domchange', 'events-iframe', 'engine-state', 'keep-alive', 'presentation',
    'found-items-handler', 'mouse', 'context-tree-matcher', 'eesy-timers', 'hints', 'helpitem-handling', 'support-tab',
    'utils', 'sessionInfo', 'session-events'], function ($, ctxProbe, ctxHandling, monitorHandling, eventsUrlChange, eventsDOMChange, eventsIframe, engineState, keepAlive, presentation, foundItemsHandler, mouse, contextTreeMatcher, eesyTimers, hints, helpitemHandling, supportTab, utils, sessionInfo, sessionEvents) {
    var mouseOverElement = undefined;
    var lookuptimer;
    window.addEventListener('eesy_launchSupportTab', function () {
        supportTab.launchSupportCenter();
    }, true);
    window.addEventListener("eesy_launchSupportCenterBySessionStorage", function () {
        supportTab.launchSupportCenterBySessionStorage();
    }, true);
    $(document).on('helpitemArticleHandle', function (e, opts) {
        if (var_uefModeOriginal && var_uefModeOriginalUseUefSupportCenter) {
            showUltraOriginalSupportCenter(e.originalEvent.detail.helpitemGuid);
        }
        else {
            eesyRequire(['supportCenter'], function (supportCenter) {
                supportCenter.showHelpItemInNode(e.originalEvent.detail.helpitemGuid);
            });
        }
    });
    return {
        start: start
    };
    function inBuildMode() {
        return window.sessionStorage.build_mode && window.sessionStorage.build_mode == "true";
    }
    function showUltraOriginalSupportCenter(helpItemGuid) {
        for (var i = 0; i < window.parent.frames.length; i++) {
            window.parent.frames[i].postMessage({
                "type": "showUltraOriginalSupportCenter",
                "foundHelpItems": helpitemHandling.getFoundItemsString(),
                "foundNodes": engineState.foundNodes.get().getFoundItemsString(),
                "helpItemGuid": helpItemGuid,
                "supportUrl": window.location.href
            }, "*");
        }
    }
    function start() {
        engineState.foundNodes.set(foundItemsHandler.create());
        if (var_show_tab) {
            supportTab.show(function () {
                if (var_uefModeOriginal && var_uefModeOriginalUseUefSupportCenter) {
                    showUltraOriginalSupportCenter();
                }
                else {
                    supportTab.launchSupportCenter();
                    utils.focusElement("#supportCenterMainHeading", 500);
                }
            });
        }
        if (var_isExpert && var_loadExpertTool) {
            eesyRequire(['expert-tools'], function (expertTools) {
                expertTools.show();
            });
        }
        monitorHandling.handleUnhandledMonitors();
        // Do not handle monitors when in build mode, uef expert tool or uef support center
        if ((!inBuildMode() && !var_uefMode)
            || (var_uefMode && (window.location !== window.parent.location && !sessionStorage.getItem("eesy_UEFDefaultHelp_loaded")))) {
            handleContentChanges();
        }
        //
        // Allow iframes/lti tools to load the engine directly()
        //
        window.addEventListener("message", function (e) {
            if (e.data.messageName === "lti.ready") {
                if (e.source !== null) {
                    var dashboardUrl = sessionInfo.dashboardUrl().indexOf("//") > -1
                        ? sessionInfo.dashboardUrl().split("//")[1]
                        : sessionInfo.dashboardUrl();
                    var showSupportTab = (e.data.supportTab == "inherited")
                        ? (var_show_tab ? "true" : "false")
                        : e.data.supportTab;
                    e.source.postMessage({ eesysoftloader: "//" + dashboardUrl
                            + "/loader.jsp?stmp=" + new Date().getTime()
                            + "&listento=top.nav&embedded=true&showquicklink=" + showSupportTab + "&k=" + sessionInfo.sessionKey() }, "*");
                }
            }
        }, false);
        if (!var_uefMode || var_uefModeOriginal) {
            registerGuardedHandler(document, "mousemove", handleMouseMove);
            registerGuardedHandler(document, "iframe.mousemove", function (e, orgEvent) { return handleMouseMove(orgEvent); });
            registerGuardedHandler(document, "mouseup", function (e) { return probeForMonitors($(e.target)); });
            registerGuardedHandler(document, "iframe.mouseup", function (e, orgEvent) { return probeForMonitors($(orgEvent.target)); });
            registerGuardedHandler(document, "iframes.changed presentation.hide.item", handleContentChanges);
            registerGuardedHandler(window, "domchanged", handleContentChanges);
            registerGuardedHandler(document, "iframe.focus iframe.added", function (e, iframe) { return probeForMonitors($(iframe).find('body')); });
            registerGuardedHandler(window, "urlchanged", handleContentChanges);
        }
        //link tracking
        $(document).on("click", "[data-helpitemid] a", function () {
            var helpItemId = $(this).closest("[data-helpitemid]").data("helpitemid");
            sessionEvents.addHelpitemLinkClickedEvent(getLinkClickEventData(helpItemId, this));
        });
        // UEF Events
        if (var_uefMode && (window.location !== window.parent.location) && !inBuildMode() && !var_uefModeOriginal) {
            window.addEventListener('uefIntegration.routeChange', handleUEFIntegrationRouteChange, true);
            window.addEventListener('uefIntegration.click', handleUEFIntegrationClick, true);
            window.addEventListener('uefIntegration.hover', handleUEFIntegrationHover, true);
            window.addEventListener('uefIntegration.helpRequest', handleUEFIntegrationHelpRequest, true);
            window.addEventListener('uefIntegration.dontshowagain', handleUEFIntegrationDontShowAgain, true);
            eventsIframe.start();
            eventsUrlChange.start();
            eventsDOMChange.start();
        }
        keepAlive.start();
        if (var_uefMode && window.location.pathname === "/rest/bbultra/iframe-panel") {
            window.dispatchEvent(new CustomEvent('eesy_launchSupportCenterBySessionStorage'));
        }
    } //main end
    function getLinkClickEventData(_helpItemId, link) {
        var onClick = $(link).attr("onClick");
        var linkType = onClick !== undefined && onClick.indexOf("handleHelpItemByGuid") > -1 ? "helpitem" : "href";
        var target = linkType === "helpitem"
            ? onClick.trim().match(/handleHelpItemByGuid\(["'](.*)["']\)/)[1]
            : $(link).attr("href");
        return {
            linkType: linkType,
            target: target,
            text: $(link).attr("href"),
            helpItemId: _helpItemId
        };
    }
    function handleUEFIntegrationDontShowAgain() {
        var hid = sessionStorage.getItem("dontshowagain");
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
        sessionStorage.removeItem("dontshowagain");
    }
    function handleUEFIntegrationHelpRequest() {
        sessionStorage.setItem("eesy_foundHelpItems", helpitemHandling.getFoundItemsString());
        sessionStorage.setItem("eesy_foundNodes", engineState.foundNodes.get().getFoundItemsString());
    }
    function handleUEFIntegrationRouteChange() {
        handleContentChanges();
    }
    function handleUEFIntegrationClick(e) {
        probeForMonitors($('body'));
    }
    function handleUEFIntegrationHover(e) {
        helpitemHandling.hideHints();
        ProbeForHelp($('body'));
    }
    function handleMouseMove(e) {
        mouse.x = e.pageX;
        mouse.y = e.pageY;
        if (e.target != mouse.lastelement) {
            clearTimeout(lookuptimer);
            mouse.lastelement = e.target;
            lookuptimer = setTimeout(timedLookup, $("#hintcontainer").length > 0 ? 1000 : 10);
        }
    }
    function registerGuardedHandler(target, eventName, handler) {
        $(target).on(eventName, function (e, data) {
            if (inBuildMode())
                return true;
            handler(e, data);
            return true;
        });
    }
    function probeForContexts(element) {
        ctxProbe.probeForElementContexts(ctxHandling.handlePresentContext, element);
        ctxProbe.probeForPresentContexts(element.get(0).ownerDocument, ctxHandling.handlePresentContext);
    }
    function handleContentChanges() {
        ctxHandling.clearQueuedContextLinks();
        ctxHandling.clearQueuedMonitors();
        engineState.foundNodes.get().clearFoundItems();
        probeForContexts($('body'));
        eventsIframe.getIFrames().forEach(function (iframe) {
            probeForContexts($(iframe.iframe.documentElement).find('body'));
        });
        if (mouseOverElement) {
            helpitemHandling.hideHints();
            ProbeForHelp(mouseOverElement);
        }
        ctxHandling.handleQueuedContextLinks();
        ctxHandling.handleQueuedMonitors();
    }
    function timedLookup() {
        if (!eventsDOMChange.isEesyElement(mouse.lastelement)) {
            mouseOverElement = mouse.lastelement;
            helpitemHandling.hideHints();
            ProbeForHelp(mouseOverElement);
        }
    }
    function probeForMonitors(element) {
        ctxProbe.eesy_traversePathForMatchingContexts(element, function (contextRule) {
            ctxHandling.handleMonitors(contextRule);
        });
        ctxHandling.handleQueuedMonitors();
    }
    function ProbeForHelp(element) {
        ctxProbe.eesy_traversePathForMatchingContexts(element, function (contextRule) {
            ctxHandling.handleContextLinks(contextRule, element, 0);
        });
        ctxHandling.handleQueuedContextLinks();
    }
});
//# sourceMappingURL=engine_core.js.map