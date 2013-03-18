function easeElement(element, _timing) {

  element.style.webkitTransition = "all " + _timing + "ms ease-in-out";
  element.style.mozTransition = "all " + _timing + "ms ease-in-out";
  element.style.oTransition = "all " + _timing + "ms ease-in-out";
  element.style.msTransition = "all " + _timing + "ms ease-in-out";
  element.style.transition = "all " + _timing + "ms ease-in-out";

}

function translateElement(element, _valueX, _valueY) {

  element.style.webkitTransform += "translate(" + _valueX + "px," + _valueY +
      "px)";
  element.style.msTransform += "translate(" + _valueX + "px," + _valueY + "px)";
  element.style.MozTransform += "translate(" + _valueX + "px," + _valueY +
      "px)";
  element.style.OTransform += "translate(" + _valueX + "px," + _valueY + "px)";
  element.style.transform += "translate(" + _valueX + "px," + _valueY + "px)";

}

function rotateElement(element, _value) {

  element.style.webkitTransform = "rotate(" + _value + "deg)";
  element.style.msTransform = "rotate(" + _value + "deg)";
  element.style.MozTransform = "rotate(" + _value + "deg)";
  element.style.OTransform = "rotate(" + _value + "deg)";
  element.style.transform = "rotate(" + _value + "deg)";

}

function openTitle() {

  var e = $('upper_title');

  rotateElement(e, -60);
  translateElement(e, -e.clientHeight, -e.clientWidth);

  e = $('lower_title');
  rotateElement(e, -60);
  translateElement(e, e.clientHeight, e.clientWidth);

}

window.onload = function() {

  easeElement($('upper_title'), 1000);
  easeElement($('lower_title'), 1000);

  $('title').onclick = openTitle;
  window.onkeypress = openTitle;

  // add callbacks
  $('second').addEventListener('impress:stepenter', function() {
    console.log('entering 2nd');
  });

};

function $(id) {

  return document.getElementById(id);

};
