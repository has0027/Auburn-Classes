"use strict";
eesy.define([], function () {
    /**
     * engine-state.js
     *
     * This module carries shared state for the engine. The idea is to
     * explicitly define properties here rather than relying on implicit
     * access to global variables.
     *
     * A small sanity mechanism will print a warning if an uninitialized value is being read
     * or if a property gets defined more than once.
     */
    var __data = {};
    return {
        foundNodes: __property('foundNodes'),
        viewModel: __property('viewModel'),
    };
    //
    /**
     * Bind a property by unique name and give it two functions: get() + set(value)
     */
    function __property(name) {
        __data[name] && window.console && console.log &&
            console.log('warning: duplicate property "' + name + '"');
        __data[name] = {};
        return {
            set: function (value) {
                __data[name].value = value;
                __data[name].initialized = true;
            },
            get: function () {
                __data[name].initialized || window.console && console.log &&
                    console.log('warning: read uninitialized value from "' + name + '"');
                return __data[name].value;
            }
        };
    }
});
//# sourceMappingURL=engine-state.js.map