"use strict";
eesy.define(['jquery-private', 'condition-matcher', 'json!context-rule-tree'], function ($, conditionMatcher, contextRuleData) {
    return {
        scanForContext: scanForContext,
        getElementMatches: getElementMatches
    };
    function scanForContext(url, document) {
        var result = {};
        processScanForContext(undefined, url, document, contextRuleData.scanForContext, result);
        return result;
    }
    function processScanForContext(candidateCollection, url, document, hive, result) {
        if (candidateCollection && !candidateCollection.length) {
            return;
        }
        hive.matches.forEach(function (ruleId) {
            (candidateCollection ? candidateCollection : $(document).find('*')).each(function (i, element) {
                (result[ruleId] || (result[ruleId] = [])).push(element);
            });
        });
        hive.conditions.forEach(function (condition) {
            var remainingCandidates = conditionMatcher.reduceCandidates(url, document, candidateCollection, condition);
            processScanForContext(remainingCandidates, url, document, condition, result);
        });
    }
    function _getElementMatches(element, url, startHive) {
        var matchingRules = [];
        processHive(startHive);
        return matchingRules;
        function processHive(hive) {
            Array.prototype.push.apply(matchingRules, hive.matches);
            hive.conditions.forEach(function (condition) {
                if (conditionMatcher.conditionMatches(url, element, condition)) {
                    processHive(condition);
                }
            });
        }
    }
    function getElementMatches(element, url) {
        return _getElementMatches(element, url, contextRuleData.normal);
    }
});
//# sourceMappingURL=context-tree-matcher.js.map