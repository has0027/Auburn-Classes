"use strict";
eesy.define(['jquery-private'], function ($) {
    var timer = undefined;
    function isEesyElement(node) {
        var $node = $(node);
        return !!$node.closest(".eesy_container").length
            || !!$node.closest(".eesy").length
            || !!$node.closest(".eesy_dark").length;
    }
    function start() {
        new MutationObserver(function (mutationsList, observer) {
            if (!timer) {
                var nonEesyNodes = [];
                mutationsList.forEach(function (mutation) {
                    var addUnlessEesy = function (node) {
                        if (!isEesyElement(node)) {
                            nonEesyNodes.push(node);
                        }
                    };
                    mutation.addedNodes.forEach(addUnlessEesy);
                    mutation.removedNodes.forEach(addUnlessEesy);
                });
                if (nonEesyNodes.length) {
                    timer = setTimeout(function () {
                        $(document).trigger("domchanged");
                        timer = undefined;
                    }, 250);
                }
            }
        }).observe(document.getElementsByTagName("BODY")[0], {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        });
    }
    return {
        start: start,
        isEesyElement: isEesyElement
    };
});
//# sourceMappingURL=events-domchange.js.map