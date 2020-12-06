eesy.define(['jquery-private'],
    function($) {

	
  function focusElement(selector, time) {
      if(document.querySelector(selector)!=null) {
      	$(selector).focus();
          return;
      }
      else {
          setTimeout(function() {
          	focusElement(selector, time);
          }, time);
      }
  };
    
  function replaceLiveHandler(eventName, selector, callback) {
    $(document)
        .off(eventName, selector)
        .on(eventName, selector, callback);
  };

  function onClickOrSelectKey(selector, callback) {
    replaceLiveHandler('click', selector, function(e) {
      if (!$(this).hasClass('___is-disabled')) {
        callback(e, this);
      };
    });
    replaceLiveHandler('keypress', selector, function(e) {
      if (!$(this).hasClass('___is-disabled')) {
        if (isSelectKey(e)) {
          callback(e, this);
        };
      };
    });
  };

  function onEnterKey(selector, callback) {
	replaceLiveHandler('keypress', selector, function (e) {
	  code = e.keyCode || e.which;
	  if (code === 13){
		  callback(e, this);
	  }
	})
  }

  function isSelectKey(e) {
    var code = e.keyCode || e.which;
    return (code === 13) || (code === 32);
  };

  function isInViewport(element) {
    var elementTop = element.offset().top;
    var elementBottom = elementTop + element.outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  function rectangleOf(element) {
    return {
      left: element.offset().left,
      right: element.offset().left + element.width(),
      top: element.offset().top,
      bottom: element.offset().top + element.height()
    };
  }

  function intersectRect(r1, r2) {
    return !(r2.left > r1.right ||
      r2.right < r1.left ||
      r2.top > r1.bottom ||
      r2.bottom < r1.top);
    }

    function isOrHas(element, selector) {
      return !!element.getAttribute &&
        (!!$(element).parents(selector).length || $(element).is(selector));
    }

    function isTargetVisible(target, connectTo) {
      var top = target.top + 2;
      var left = target.left + 2;
      var bottom = target.top + target.height - 2;
      var right = target.left + target.width - 2;

      return isSameOrChildOf(connectTo, elementFromAdjustedPoint(left, top))
                || isSameOrChildOf(connectTo, elementFromAdjustedPoint(right, top))
                || isSameOrChildOf(connectTo, elementFromAdjustedPoint(left, bottom))
                || isSameOrChildOf(connectTo, elementFromAdjustedPoint(right, bottom));
    }

    function elementFromAdjustedPoint(x, y) {
      return document.elementFromPoint(x - window.pageXOffset, y - window.pageYOffset);
    }

    function isSameOrChildOf(connectTo, fromPoint) {
      if (connectTo == fromPoint) return true;
      var parents = $(fromPoint).parents("*");

      for (var i=0; i<parents.length; i++) {
        if (connectTo == parents[i]) {
          return true;
        }
      }

      return false;
    }

    function createStamp() {
      var date = new Date();
      return date.getFullYear().toString() + pad2(date.getMonth() + 1)
                + pad2(date.getDate()) + pad2(date.getHours()) + pad2(date.getMinutes())
                + pad2(date.getSeconds());
    }

    function pad2(n) {
      return n < 10 ? '0' + n : n
    }

    function cookieExists(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for (var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return true;
      }
      return false;
    }



  return {
    replaceLiveHandler: replaceLiveHandler,
    isSelectKey: isSelectKey,
    onClickOrSelectKey: onClickOrSelectKey,
    isInViewport: isInViewport,
    rectangleOf: rectangleOf,
    intersectRect: intersectRect,
    isOrHas: isOrHas,
    isTargetVisible: isTargetVisible,
    createStamp: createStamp,
    focusElement: focusElement,
    cookieExists: cookieExists,
    onEnterKey: onEnterKey
  };
  
});