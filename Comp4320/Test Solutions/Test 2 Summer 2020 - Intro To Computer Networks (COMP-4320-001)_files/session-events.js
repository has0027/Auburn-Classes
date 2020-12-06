eesy.define(['jquery-private', 'sessionInfo'], function($, sessionInfo) {
  /*
    private functions:
  */
  function addEvent(eventName, eventData) {
    var url = sessionInfo.dashboardUrl() + "/restapi/service.jsp";
    $.get(url, {
        u: 'sessionkey',
        p: sessionInfo.sessionKey,
        userUpdate: 'addSessionEvent',
        event_name: eventName,
        event_data: JSON.stringify(eventData)
    }, function() {});
  }

  function addEventEx(eventName, eventData) {
      $.post(sessionInfo.dashboardUrl() + "/rest/public/sessionEvent?sessionkey=" + sessionInfo.sessionKey(), {
        event_name: eventName,
        event_data: JSON.stringify(eventData)
      }, function() {});
  }
  
  /*
  public functions:
  */

  function addSearchEvent(_searchString) {
    addEvent('SEARCH', {searchString: _searchString});
  }

  function addAssistedSupportRequest(_channel, _node) {
    addEvent('ASSISTED_SUPPORT_REQUEST', {channel: _channel, node: _node});
  }

  function addAssistedSupportRequestInitiated(_channel, _node) {
    addEvent('ASSISTED_SUPPORT_REQUEST_INITIATED', {channel: _channel, node: _node});
  }

  function addCloseEvent(_channel, _node) {
    addEvent('SUPPORT_CENTER_CLOSE', {});
  }

  function addShowHelpItemEvent(_helpItemId) {
    addEvent('SUPPORT_CENTER_HELPITEM_VIEW', {helpItemId: _helpItemId});
  }

  
  function addHelpitemLinkClickedEvent(eventData) {
    addEventEx('HELPITEM_LINK_CLICKED', eventData);
  }

  function addHelpitemOpenedInContext(eventData) {
    addEventEx('HELPITEM_OPENED_IN_CONTEXT', eventData);
  }


  function addNodeSelectedEvent(_nodeId) {
    addEvent('SUPPORT_CENTER_NODE_SELECTED', {nodeId: _nodeId});
  }

  return {
    addSearchEvent: addSearchEvent,
    addAssistedSupportRequest: addAssistedSupportRequest,
    addAssistedSupportRequestInitiated: addAssistedSupportRequestInitiated,
    addCloseEvent: addCloseEvent,
    addShowHelpItemEvent: addShowHelpItemEvent,
    addNodeSelectedEvent: addNodeSelectedEvent,
    addHelpitemLinkClickedEvent: addHelpitemLinkClickedEvent,
    addHelpitemOpenedInContext: addHelpitemOpenedInContext
  };
});