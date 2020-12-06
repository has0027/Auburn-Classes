"use strict";
eesy.define(['jquery-private', 'context-probe', 'monitor-handling', 'helpitem-handling', 'engine-state'], function ($, ctxProbe, monitorhandling, helpitemhandling, engineState) {
    return {
        handleQueuedContextLinks: helpitemhandling.handleQueuedContextLinks,
        clearQueuedContextLinks: helpitemhandling.clearQueuedContextLinks,
        handleQueuedMonitors: monitorhandling.handleQueuedMonitors,
        clearQueuedMonitors: monitorhandling.clearQueuedMonitors,
        handlePresentContext: handlePresentContext,
        handleMonitors: handleMonitors,
        handleContextLinks: handleContextLinks
    };
    function handlePresentContext(contextRule, element) {
        //
        //  check if any monitors is connected
        //
        handleMonitors(contextRule);
        //
        //  check if any helpitems is connected
        //
        handleContextLinks(contextRule, element, 1); // Context Rule Mode 1: By presence
        //
        //  check if any support center nodes is connected
        //
        handleNodes(contextRule);
    }
    function handleMonitors(contextRule) {
        $.each(ctxProbe.connectedMonitors(contextRule), function (j, monitor) {
            monitorhandling.queueMonitor(monitor, !(typeof eesy_course_id === 'undefined') ? eesy_course_id : -1);
        });
    }
    function handleNodes(contextRule) {
        $.each(ctxProbe.connectedContextNodeLinks(contextRule), function (i, nodeLink) {
            engineState.foundNodes.get().addFoundItem(nodeLink.nodeId);
        });
    }
    function handleContextLinks(contextRule, element, mode) {
        $.each(ctxProbe.connectedContextLinks(contextRule), function (j, contextLink) {
            helpitemhandling.queueContextLink(contextLink, mode, element, ctxProbe.getElementLocation(element));
        });
    }
});
//# sourceMappingURL=context-handling.js.map