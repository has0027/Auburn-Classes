(window.eesy ? eesy.define : define)([], function() {

  var __initialized = false;

  var dashboardUrl = undefined;
  var stylePath = undefined;
  var sessionKey = undefined;
  var hasReportAccess = undefined;
/*
  var values = {};
*/
  function checkInitialized() {
    if (!__initialized) {
      throw 'sessionInfo not initialized';
    }
  }

  function init(_dashboardUrl, _stylePath, _sessionKey, _hasReportAccess) { // +onInitied
    dashboardUrl = _dashboardUrl;
    stylePath = _stylePath;
    sessionKey = _sessionKey;
    hasReportAccess = _hasReportAccess;
    __initialized = true;


    // kall init handlere

    // når init handlere er ferid, kall onInited



  }

/*
  var listeners = [];

  function onInited(listener) {
    if __initialized {
      listener();
    } else {
      listeners.push(listener);
    }
  };
*/
  return {
    init: init,
    dashboardUrl: function () { checkInitialized(); return dashboardUrl; },
    stylePath: function () { checkInitialized(); return stylePath; },
    sessionKey: function () { checkInitialized(); return sessionKey; },
    hasReportAccess: function () { checkInitialized(); return hasReportAccess; }
    /*
    get: function(key) { return values[key]; },
    put: function(key, value) { values[key] = value; },
    onInited: onInited
    */
  };
});