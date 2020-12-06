"use strict";
eesy.define(['jquery-private', 'monitor-handling', 'context-links', 'context-tree-matcher', 'json!context-node-link-data',
    'json!monitor-data'], function ($, monitorHandling, contextLinks, contextTreeMatcher, contextNodeLinks, monitors) {
    /*
     * This module deals with the relationship between urls, context rules,
     * context links and monitors.
     */
    return {
        // public API:
        probeForPresentContexts: probeForPresentContexts,
        probeForElementContexts: probeForElementContexts,
        connectedMonitors: connectedMonitors,
        connectedContextLinks: connectedContextLinks,
        connectedContextNodeLinks: connectedContextNodeLinks,
        probeForMonitor: probeForMonitor,
        eesy_traversePathForMatchingContexts: eesy_traversePathForMatchingContexts,
        getDocumentLocation: getDocumentLocation,
        getElementLocation: getElementLocation
    };
    function probeForMonitor(element) {
        eesy_traversePathForMatchingContexts(element, function (contextRule) {
            $.each(connectedMonitors(contextRule), function (i, monitor) {
                // TODO implicit dependency: eesy_course_id
                monitorHandling.handleMonitor(monitor, !(typeof eesy_course_id === 'undefined') ? eesy_course_id : -1);
            });
        });
    }
    function eesy_traversePathForMatchingContexts(element, matchingContextOperation) {
        var inurl = getElementLocation(element);
        [element].concat($(element).parents().toArray()).forEach(function (element) {
            contextTreeMatcher
                .getElementMatches($(element), inurl)
                .forEach(function (matchingRule) { return matchingContextOperation({ id: matchingRule }); });
        });
    }
    function probeForElementContexts(onPresentContext, element) {
        contextTreeMatcher
            .getElementMatches(element, getElementLocation(element))
            .forEach(function (ruleId) { return onPresentContext({ id: ruleId }, element); });
    }
    function probeForPresentContexts(document, onPresentContext) {
        var match = contextTreeMatcher.scanForContext(getDocumentLocation(document), document);
        var _loop_1 = function (ruleId) {
            match[ruleId].forEach(function (element) { return onPresentContext({ id: ruleId }, element); });
        };
        for (var ruleId in match) {
            _loop_1(ruleId);
        }
    }
    function connectedContextLinks(contextRule) {
        return contextLinks.filter(function (contextLink) { return contextLink.contextid == contextRule.id; });
    }
    function connectedContextNodeLinks(contextRule) {
        return contextNodeLinks.filter(function (nodeLink) { return nodeLink.contextId == contextRule.id; });
    }
    function connectedMonitors(contextRule) {
        return monitors.filter(function (monitor) { return monitor.contextid == contextRule.id; });
    }
    function getDocumentLocation(document) {
        if (var_uefMode)
            return "";
        var defurl = document.location.href;
        if (defurl.toUpperCase().indexOf("LAUNCHLINK") > -1) {
            if ($(document).find("#eesy_realurl").length) {
                return decodeURIComponent($(document).find("#eesy_realurl").html());
            }
        }
        return defurl;
    }
    function getElementLocation(element) {
        return getDocumentLocation($(element).get(0).ownerDocument);
    }
});
//# sourceMappingURL=context-probe.js.map