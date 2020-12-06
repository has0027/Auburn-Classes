"use strict";
eesy.define(['json!language'], function (language) {
    return {
        helpItemModel: helpItemModel
    };
    function helpItemModel(helpItem) {
        return {
            LNG: language.LNG,
            var_dashboard_url: var_dashboard_url,
            var_proactive_lms: var_proactive_lms,
            var_proactive_dark: var_proactive_dark,
            var_proactive_version: var_proactive_version,
            helpItem: helpItem,
            isLoggedIn: !!var_key,
            isVersion4: var_proactive_version === 4
        };
    }
});
//# sourceMappingURL=presentation-helper.js.map