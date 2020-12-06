"use strict";
eesy.define([], function () {
    var eesyTimers = {};
    function set(key, millis, fn) {
        eesyTimers[key] = setTimeout(fn, millis);
    }
    function stopAll() {
        for (var eesyTimer in eesyTimers) {
            clearTimeout(eesyTimers[eesyTimer]);
        }
        eesyTimers = {};
    }
    function stop(key) {
        if (eesyTimers[key]) {
            clearTimeout(eesyTimers[key]);
            delete eesyTimers[key];
        }
    }
    return {
        set: set,
        stop: stop,
        stopAll: stopAll
    };
});
//# sourceMappingURL=eesy-timers.js.map