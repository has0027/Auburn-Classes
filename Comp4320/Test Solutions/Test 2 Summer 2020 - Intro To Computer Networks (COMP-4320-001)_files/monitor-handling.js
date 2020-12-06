"use strict";
eesy.define(['jquery-private', 'sessionInfo', 'engine-state', 'json!monitor-data'], function ($, sessionInfo, engineState, contextmonitors) {
    var viewState = [];
    var monitorQueue = [];
    var unhandledMonitors = [];
    if (!sessionStorage.eesysoft_unhandled_monitors) {
        sessionStorage.eesysoft_unhandled_monitors = JSON.stringify([]);
    }
    unhandledMonitors = JSON.parse(sessionStorage.eesysoft_unhandled_monitors);
    clearQueuedMonitors();
    function clearQueuedMonitors() {
        monitorQueue = [];
    }
    /*
     * Private functions
     */
    function addUnhandledMonitor(monitorWithCourseId) {
        if (!monitorWithCourseidInArray(monitorWithCourseId, unhandledMonitors)) {
            unhandledMonitors.push(monitorWithCourseId);
        }
        sessionStorage.eesysoft_unhandled_monitors = JSON.stringify(unhandledMonitors);
    }
    function removeUnhandledMonitor(monitorWithCourseId) {
        removeMonitorWithCourseIdFromArray(monitorWithCourseId, unhandledMonitors);
        sessionStorage.eesysoft_unhandled_monitors = JSON.stringify(unhandledMonitors);
    }
    function handleUnhandledMonitors() {
        unhandledMonitors.forEach(function (monitorWithCourseid) {
            handleMonitor(monitorWithCourseid);
        });
    }
    /*
     * Public functions
     */
    function handleMonitor(monitorWithCourseid) {
        addUnhandledMonitor(monitorWithCourseid);
        if (sessionInfo.sessionKey().trim() === "") {
            removeUnhandledMonitor(monitorWithCourseid);
            return;
        }
        var url = sessionInfo.dashboardUrl() + "/Scripts/MonitorVisited.jsp?id=" + monitorWithCourseid.monitorId + "&key="
            + sessionInfo.sessionKey() + "&courseid=" + monitorWithCourseid.courseId + "&stmp=" + (new Date().getTime());
        $.ajax({
            type: 'GET',
            url: url,
            async: true,
            jsonpCallback: 'jsonMonitorVisited' + monitorWithCourseid.monitorId,
            contentType: "application/json",
            dataType: 'jsonp',
            success: function (json) {
                removeUnhandledMonitor(monitorWithCourseid);
            }
        });
    }
    function monitorWithCourseidInArray(monitorWithCourseid, array) {
        return findIndexInArray(monitorWithCourseid, array) > -1;
    }
    function findIndexInArray(monitorWithCourseid, array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].courseId === monitorWithCourseid.courseId
                && array[i].monitorId === monitorWithCourseid.monitorId) {
                return i;
            }
        }
        return -1;
    }
    function removeMonitorWithCourseIdFromArray(monitorWithCourseid, array) {
        var index = findIndexInArray(monitorWithCourseid, array);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
    function handleQueuedMonitors() {
        //
        //  remove monitors with courseids from viewState that is not in the que
        //
        [].concat(viewState).forEach(function (monitorWithCourseid) {
            if (!monitorWithCourseidInArray(monitorWithCourseid, monitorQueue)) {
                removeMonitorWithCourseIdFromArray(monitorWithCourseid, viewState);
            }
            ;
        });
        monitorQueue.forEach(function (monitorWithCourseid) {
            if (!monitorWithCourseidInArray(monitorWithCourseid, viewState)) {
                viewState.push(monitorWithCourseid);
                handleMonitor(monitorWithCourseid);
            }
        });
    }
    function queueMonitor(monitor, courseId) {
        var monitorWithCourseId = {
            monitorId: monitor.id,
            courseId: courseId
        };
        if (!monitorWithCourseidInArray(monitorWithCourseId, monitorQueue)) {
            monitorQueue.push(monitorWithCourseId);
        }
    }
    return {
        handleQueuedMonitors: handleQueuedMonitors,
        clearQueuedMonitors: clearQueuedMonitors,
        queueMonitor: queueMonitor,
        handleUnhandledMonitors: handleUnhandledMonitors
    };
});
//# sourceMappingURL=monitor-handling.js.map