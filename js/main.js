
console.log('%cFREE KEVIN', 'font-weight:1000;color: black; background: orange; padding:10px; font-size: 120px');

RAINBOW = false;
toggle_rainbow = function() {
  if (!RAINBOW) {
    document.getElementById('rainbow').style.display = 'block';
    RAINBOW = true;
  } else {
    document.getElementById('rainbow').style.display = 'none';
    RAINBOW = false;
  }
  
};

