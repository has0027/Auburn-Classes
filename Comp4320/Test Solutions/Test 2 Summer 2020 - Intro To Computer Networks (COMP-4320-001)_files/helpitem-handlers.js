"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
eesy.define(['jquery-private', 'sessionInfo', 'presentation', 'helpitem-loader',
    'view-controller', 'eesy-timers'], function ($, sessionInfo, presentation, helpitemLoader, viewController, eesyTimers) {
    var AbstractHelpItemHandler = /** @class */ (function () {
        function AbstractHelpItemHandler(cl, triggedby, src) {
            this.cl = cl;
            this.triggedby = triggedby;
            this.src = src;
        }
        //abstract hide(): void;
        AbstractHelpItemHandler.prototype.hide = function () {
            $(".eesy_container[data-helpitemid=" + this.cl.helpitemid + "]").remove();
            eesyTimers.stop("helpitem" + this.cl.helpitemid);
        };
        AbstractHelpItemHandler.prototype.show = function (track) {
            var _this = this;
            helpitemLoader.loadHelpItem(this.cl.helpitemid, function (hi) {
                hi.embed = fixEesyLinks(hi.embed);
                _this.handle(hi, _this.triggedby);
                if (track && var_eesy_helpitemsSeen[_this.cl.helpitemid] !== var_key) {
                    var_eesy_helpitemsSeen[_this.cl.helpitemid] = var_key;
                    markHelpitemAsSeen(_this.cl.helpitemid);
                }
            });
        };
        ;
        return AbstractHelpItemHandler;
    }());
    var ProactiveHintHandler = /** @class */ (function (_super) {
        __extends(ProactiveHintHandler, _super);
        function ProactiveHintHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.itemType = viewController.ITEM_TYPE.HINT_PROACTIVE;
            _this.multiSupport = true;
            _this.modal = false;
            return _this;
            //hide(): void {}
        }
        ProactiveHintHandler.prototype.handle = function (hi, triggedby) {
            presentation.showHintProactive(hi, triggedby);
        };
        return ProactiveHintHandler;
    }(AbstractHelpItemHandler));
    var SystrayHandler = /** @class */ (function (_super) {
        __extends(SystrayHandler, _super);
        function SystrayHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.itemType = viewController.ITEM_TYPE.SYSTRAY;
            _this.multiSupport = false;
            _this.modal = false;
            return _this;
            //hide(): void {}
        }
        SystrayHandler.prototype.handle = function (hi) {
            presentation.showSystray(hi, this.triggedby);
        };
        return SystrayHandler;
    }(AbstractHelpItemHandler));
    var HintHandler = /** @class */ (function (_super) {
        __extends(HintHandler, _super);
        function HintHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.itemType = viewController.ITEM_TYPE.HINT;
            _this.multiSupport = false;
            _this.modal = false;
            return _this;
            /*hide(): void {
                $(`.eesy_container[data-helpitemid=${this.cl.helpitemid}]`).remove();
            }*/
        }
        HintHandler.prototype.handle = function (hi, triggedby) {
            presentation.showHint(hi, triggedby);
        };
        return HintHandler;
    }(AbstractHelpItemHandler));
    var PopupHandler = /** @class */ (function (_super) {
        __extends(PopupHandler, _super);
        function PopupHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.itemType = viewController.ITEM_TYPE.POPUP;
            _this.multiSupport = false;
            _this.modal = true;
            return _this;
            /*hide(): void {
            }*/
        }
        PopupHandler.prototype.handle = function (hi, triggedby) {
            presentation.showPopup(hi.itemtype === "Message" ? wrapContentBox(hi) : hi, triggedby);
        };
        return PopupHandler;
    }(AbstractHelpItemHandler));
    var OnDemandItemHandler = /** @class */ (function (_super) {
        __extends(OnDemandItemHandler, _super);
        function OnDemandItemHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.itemType = viewController.ITEM_TYPE.ON_DEMAND;
            _this.modal = false;
            _this.multiSupport = true;
            _this.isVisible = false;
            return _this;
        }
        OnDemandItemHandler.prototype.handle = function (hi, triggedby) { };
        OnDemandItemHandler.prototype.hide = function () { };
        OnDemandItemHandler.prototype.show = function () { };
        return OnDemandItemHandler;
    }(AbstractHelpItemHandler));
    function wrapContentBox(helpItem) {
        return $.extend({}, helpItem, {
            embed: "<div class=\"eesy-proactive-content-box\">" + helpItem.embed + "</div>"
        });
    }
    function createHelpItemHandler(cl, mode, triggedby, src) {
        if (cl.mode === "Normal") {
            return new OnDemandItemHandler(cl, triggedby, src);
        }
        else if (cl.mode === "hint" && mode === 0) {
            return new HintHandler(cl, triggedby, src);
        }
        else if (cl.mode === "hint" && mode === 1) {
            return new ProactiveHintHandler(cl, triggedby, src);
        }
        else if (cl.mode === "systray") {
            return new SystrayHandler(cl, triggedby, src);
        }
        else if (cl.mode === "Proactive" || cl.mode === "Proactive Once") {
            return new PopupHandler(cl, triggedby, src);
        }
    }
    function markHelpitemAsSeen(helpItemId) {
        $.ajax({
            url: sessionInfo.dashboardUrl() + "/rest/public/helpitems/" + helpItemId + "/viewed?sessionkey=" + sessionInfo.sessionKey(),
            type: 'PUT',
            success: function (data) { }
        });
    }
    function fixEesyLinks(intip) {
        var tip = intip;
        var numchars = "0123456789";
        var idx = tip.indexOf("loadfile:");
        while (idx > -1) {
            var hiid = "";
            if (numchars.indexOf("" + tip.charAt(idx + 9)) > -1)
                hiid += tip.charAt(idx + 9);
            if (numchars.indexOf("" + tip.charAt(idx + 10)) > -1)
                hiid += tip.charAt(idx + 10);
            if (numchars.indexOf("" + tip.charAt(idx + 11)) > -1)
                hiid += tip.charAt(idx + 11);
            if (numchars.indexOf("" + tip.charAt(idx + 12)) > -1)
                hiid += tip.charAt(idx + 12);
            var opencall = var_loadfile + "?fileid=" + hiid;
            tip = tip.replace("loadfile:" + hiid, opencall);
            idx = tip.indexOf("loadfile:");
        }
        return tip;
    }
    return {
        createHelpItemHandler: createHelpItemHandler,
        PopupHandler: PopupHandler
    };
});
//# sourceMappingURL=helpitem-handlers.js.map