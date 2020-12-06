"use strict";
eesy.define(['jquery-private', 'sessionInfo', 'engine-state', 'presentation', 'helpitem-loader',
    'utils', 'helpitem-visibility', 'view-controller', var_uefMode ? 'uef-helpitem-handlers' : 'helpitem-handlers'
], function ($, sessionInfo, engineState, presentation, helpitemLoader, utils, helpitemVisibility, viewController, helpitemHandlers) {
    clearQueuedContextLinks();
    $(document).on('helpitemHandle', function (e, opts) {
        var showingModal = viewController.getModalShowing();
        if (!!showingModal) {
            showingModal.hide();
        }
        if (e.originalEvent.detail.helpitemGuid !== undefined) {
            $.get(sessionInfo.dashboardUrl() + "/rest/public/helpitemid?guid=" + e.originalEvent.detail.helpitemGuid, function (response) {
                if (e.originalEvent.detail.isUefSupportCenterPopupHandle) {
                    new helpitemHandlers.PopupHandler({ helpitemid: response.id }, undefined, undefined).show(false, e.originalEvent.detail.isUefSupportCenterPopupHandle);
                    sessionStorage.setItem("closeUefSupportCenter", "true");
                }
                else {
                    new helpitemHandlers.PopupHandler({ helpitemid: response.id }, undefined, undefined).show(false);
                }
            });
        }
        else {
            new helpitemHandlers.PopupHandler(e.originalEvent.detail, undefined, undefined).show(false);
        }
    });
    window.addEventListener("message", onPostMessageReceived, false);
    function onPostMessageReceived(evt) {
        if (evt.data.type === "closeUefMessages") {
            helpitemVisibility.closeUefItem(evt.data.itemID);
            if (evt.data.isPopupHandler && evt.data.isPopupHandler === "true") {
                return;
            }
            // Trigger the ProbeForHelp function to enable next message to be displayed
            window.sessionStorage.setItem("eesyState.analyticsId", "");
            window.dispatchEvent(new CustomEvent('uefIntegration.hover'));
        }
    }
    $(document).on('helpitemHandle.hide', function (e, helpitemId) {
        viewController.removeHelpitem(helpitemId);
    });
    return {
        queueContextLink: queueContextLink,
        handleQueuedContextLinks: handleQueuedContextLinks,
        hideHints: hideHints,
        clearQueuedContextLinks: clearQueuedContextLinks,
        checkNormalItems: checkNormalItems,
        getFoundItemsString: getFoundItemsString
    };
    function clearQueuedContextLinks() {
        engineState.viewModel.set({
            items: []
        });
    }
    function hideHints() {
        presentation.hideHint();
        viewController.removeByType(viewController.ITEM_TYPE.HINT);
        var items = engineState.viewModel.get().items;
        for (var i = 0; i < items.length; i++) {
            if (items[i].itemType === viewController.ITEM_TYPE.HINT) {
                items.splice(i--, 1);
            }
        }
    }
    function queueContextLink(cl, mode, triggedby, src) {
        engineState.viewModel.get().items.push(helpitemHandlers.createHelpItemHandler(cl, mode, triggedby, src));
    }
    function checkNormalItems() {
        var items = viewController.getByType(viewController.ITEM_TYPE.ON_DEMAND);
        items.forEach(function (item) {
            console.log(item);
        });
    }
    function getFoundItemsString() {
        var res = "";
        var items = viewController.getByType(viewController.ITEM_TYPE.ON_DEMAND);
        items.forEach(function (item) {
            if (res !== "")
                res += ",";
            res += item.cl.helpitemid;
        });
        return res;
    }
    function helpitemInArray(items, helpitemHandler) {
        var result = false;
        items.forEach(function (modelItem) {
            if (modelItem.cl.helpitemid == helpitemHandler.cl.helpitemid) {
                result = true;
                return;
            }
        });
        return result;
    }
    function handleQueuedContextLinks() {
        var items = engineState.viewModel.get().items;
        viewController.allItems().forEach(function (controllerItem) {
            if (!helpitemInArray(items, controllerItem)) {
                viewController.removeHelpitemByHandler(controllerItem);
                controllerItem.hide();
            }
        });
        for (var i = 0; i < items.length; i++) {
            if (items[i].modal && viewController.isModalShowing()) {
                return;
            }
            if (viewController.isShowing(items[i])) {
                continue;
            }
            if (!items[i].multiSupport && viewController.isTypeShowing(items[i].itemType)) {
                continue;
            }
            if (helpitemVisibility.isVisible(items[i].cl.helpitemid)) {
                viewController.addHelpitem(items[i]);
                items[i].show(true);
            }
        }
    }
});
//# sourceMappingURL=helpitem-handling.js.map