"use strict";
eesy.define(['jquery-private'], function ($) {
    function conditionMatches(url, element, condition) {
        if (Array.isArray(condition.value)) {
            return condition.value
                .map(function (v) { return ({ type: condition.type, value: v }); })
                .filter(function (condition) { return reduceCandidates(url, element.get(0).ownerDocument, element, condition).length > 0; })
                .length > 0;
        }
        else {
            return reduceCandidates(url, element.get(0).ownerDocument, element, condition).length > 0;
        }
    }
    function isMatchedConditionFromSessionStorage(conditionValue) {
        if (var_uefModeOriginal) {
            return false;
        }
        var values = conditionValue.split("=");
        var itemName = values[0];
        var matchValue = values[1];
        var stateValue = sessionStorage.getItem(itemName);
        if (stateValue === null)
            return false;
        // Check if we simply should use a comparison of the two strings
        if (matchValue.match("^\\w+(\\.\\w+)*$") !== null)
            return stateValue === matchValue;
        return stateValue.match(matchValue) !== null;
    }
    /**
     * Processes a jQuery collection of candidate elements according to some condition, returning a
     * new collection that has had the elements that don't match the condition removed.
     *
     * @param url the current url
     * @param candidates collection of candidate elements or undefined meaning ALL elements
     * @param condition the condition to match against
     * @returns a new collection with non-matching elements removed
     */
    function reduceCandidates(url, document, candidates, condition) {
        try {
            if (condition.evaluate == "false") {
                return candidates;
            }
            switch (condition.type) {
                case 'sessionStorage':
                    return isMatchedConditionFromSessionStorage(condition.value) ? candidates : $();
                case 'mismatch':
                    return $();
                case 'element_tag':
                case 'is':
                    return selectOrFilter(candidates, condition.value);
                case 'path_matches':
                    return document.location.pathname.match(condition.value.replace("^$", "^/?$")) == null ? $() : candidates;
                case 'path_template':
                    return candidates; // find a better solution
                case 'url_contains':
                    return url.indexOf(condition.value) !== -1 ? candidates : $();
                case 'url_contains_not':
                    return url.indexOf(condition.value) !== -1 ? $() : candidates;
                case 'selector_matches_not':
                    return $(document).find(condition.value).length ? $() : candidates;
                case 'selector_matches':
                case 'body_contains_child':
                    return $(document).find(condition.value).length ? candidates : $();
                case 'has_parent':
                    return selectOrFilter(candidates, condition.value + " *");
                case 'text_contains':
                    return selectOrFilter(candidates, ":contains(" + condition.value.trim() + ")");
                case 'contains_child':
                    return candidates
                        ? $('* ' + condition.value).length
                            ? candidates.filter(":has(" + condition.value + ")")
                            : $()
                        : $('* ' + condition.value).parents(":has(" + condition.value + ")");
                case 'text_equals':
                    return selectOrFilter(candidates, ":contains(" + condition.value.trim() + ")")
                        .filter(function (i, candidate) { return $(candidate).text().trim() === condition.value.trim(); });
                default:
                    if (window.console)
                        console.log("Unimplemented condition type: \"" + condition.type + "\"");
                    return $();
            }
        }
        catch (err) {
            if (window.console)
                console.log('Problems with condition', condition.type, condition.value);
            return $();
        }
    }
    function selectOrFilter(candidates, selector) {
        try {
            return candidates ? candidates.filter(selector) : $(selector);
        }
        catch (err) {
            if (window.console)
                console.log("Problems with selector: \"" + selector + "\"");
            return $();
        }
    }
    function isNegativeCondition(condition) {
        switch (condition.type) {
            case 'url_contains_not':
            case 'selector_matches_not':
                return true;
            default:
                return false;
        }
    }
    return {
        conditionMatches: conditionMatches,
        reduceCandidates: reduceCandidates,
        isNegativeCondition: isNegativeCondition
    };
});
//# sourceMappingURL=condition-matcher.js.map