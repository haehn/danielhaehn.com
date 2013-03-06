/*
 * dstack.js Daniel's div stack.
 */

/**
 * @constructor
 */
DStack = function(id) {

  this._parent = window.document.getElementById(id);

  // grab the children of the element
  this._children = this._parent.children;

  this._timing = 500;

  this.setup();

};

DStack.prototype.setup = function() {

  var _children = this._children;
  var _childrenCount = _children.length;

  var _lastValue = 0;

  for ( var i = 0; i < _childrenCount; ++i) {

    var c = _children[i];

    // configure the animation
    c.style.webkitTransition = "all "+this._timing+"ms ease-in-out";
    c.style.mozTransition = "all "+this._timing+"ms ease-in-out";
    c.style.oTransition = "all "+this._timing+"ms ease-in-out";
    c.style.msTransition = "all "+this._timing+"ms ease-in-out";
    c.style.transition = "all "+this._timing+"ms ease-in-out";

    // rotate now
    _lastValue = DStack.randomlyRotate(c, _lastValue);

    c.style.zIndex = i;
    c.style.position = 'absolute';

    c.onclick = this.onClick.bind(this, c);

  }

};

DStack.randomlyRotate = function(element, lastValue) {

  // activate rotation
  var _value = lastValue - Math.floor(Math.random() * 11);

  element.style.webkitTransform = "rotate(" + _value + "deg)";
  element.style.msTransform = "rotate(" + _value + "deg)";
  element.style.MozTransform = "rotate(" + _value + "deg)";
  element.style.OTransform = "rotate(" + _value + "deg)";
  element.style.transform = "rotate(" + _value + "deg)";

  return _value;

};

DStack.prototype.onClick = function(_div) {

  var _children = this._children;
  var _childrenCount = _children.length;

  // loop through the children and adjust the zIndex
  for ( var i = 0; i < _childrenCount; ++i) {

    var c = _children[i];
    c.style.zIndex++;

  }

  //
  // make sure the last top one is now in the bottom
  // but perform an animated translation

  var _valueX = _div.clientWidth / 2;
  var _valueY = -_div.clientHeight / 2;
  _div.style.webkitTransform += "translate(" + _valueX + "px," + _valueY
      + "px)";
  _div.style.msTransform += "translate(" + _valueX + "px," + _valueY + "px)";
  _div.style.MozTransform += "translate(" + _valueX + "px," + _valueY + "px)";
  _div.style.OTransform += "translate(" + _valueX + "px," + _valueY + "px)";
  _div.style.transform += "translate(" + _valueX + "px," + _valueY + "px)";

  setTimeout(function() {
    _div.style.zIndex = 0;

    DStack.randomlyRotate(_div, 0);

  }, this._timing);

};