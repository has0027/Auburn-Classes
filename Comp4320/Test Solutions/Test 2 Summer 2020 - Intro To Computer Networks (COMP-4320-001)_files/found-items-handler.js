"use strict";
eesy.define(['presentation'], function (presentation) {
    return {
        create: foundItemsHandler
    };
    function foundItemsHandler() {
        var __foundItems = [];
        return {
            addFoundItem: addFoundItem,
            clearFoundItems: clearFoundItems,
            getFoundItemsString: getFoundItemsString
        };
        //
        function addFoundItem(id) {
            for (var ihi = 0; ihi < __foundItems.length; ihi++) {
                if (__foundItems[ihi].id == id)
                    return;
            }
            __foundItems[__foundItems.length] = {
                id: id
            };
        }
        function clearFoundItems() {
            __foundItems = [];
        }
        function getFoundItemsString() {
            var res = "";
            for (var ihi = 0; ihi < __foundItems.length; ihi++) {
                if (ihi != 0)
                    res += ",";
                res += __foundItems[ihi].id;
            }
            return res;
        }
    }
});
//# sourceMappingURL=found-items-handler.js.map