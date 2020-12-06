"use strict";
eesy.define([], function () {
    var viewState = {};
    function allItems() {
        return Object.keys(viewState).map(function (key) { return viewState[key]; });
    }
    function addHelpitem(helpitem) {
        // @ts-ignore
        viewState[helpitem.cl.helpitemid + "_" + helpitem.constructor.name] = helpitem;
    }
    function removeHelpitem(helpitemId) {
        allItems().forEach(function (handler) {
            if (handler.cl.helpitemid === helpitemId) {
                removeHelpitemByHandler(handler);
            }
        });
    }
    function removeHelpitemByHandler(helpitem) {
        // @ts-ignore
        delete viewState[helpitem.cl.helpitemid + "_" + helpitem.constructor.name];
    }
    function isShowing(item) {
        // @ts-ignore
        return !!viewState[item.cl.helpitemid + "_" + item.constructor.name];
    }
    function isTypeShowing(itemType) {
        return numShowingByType(itemType) > 0;
    }
    function numShowingByType(itemType) {
        return getByType(itemType).length;
    }
    function getByType(itemType) {
        return Object.keys(viewState).filter(function (key) { return viewState[key].itemType === itemType; }).map(function (key) { return viewState[key]; });
    }
    function getModalShowing() {
        for (var helpitemId in viewState) {
            if (viewState[helpitemId].modal) {
                return viewState[helpitemId];
            }
        }
        return undefined;
    }
    function isModalShowing() {
        return !!getModalShowing();
    }
    function removeByType(itemType) {
        getByType(itemType).forEach(function (item) {
            // @ts-ignore
            delete viewState[item.cl.helpitemid + "_" + item.constructor.name];
        });
    }
    return {
        allItems: allItems,
        isShowing: isShowing,
        isModalShowing: isModalShowing,
        getModalShowing: getModalShowing,
        isTypeShowing: isTypeShowing,
        addHelpitem: addHelpitem,
        removeHelpitem: removeHelpitem,
        removeByType: removeByType,
        getByType: getByType,
        removeHelpitemByHandler: removeHelpitemByHandler,
        ITEM_TYPE: {
            HINT: "hint",
            SYSTRAY: "systray",
            POPUP: "popup",
            HINT_PROACTIVE: "proactiveHint",
            ON_DEMAND: "onDemand"
        }
    };
});
//# sourceMappingURL=view-controller.js.map