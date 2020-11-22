var dpi = {
  v: 0,
  get: function (noCache) {
     if (noCache || dpi.v == 0) {
        e = document.body.appendChild(document.createElement('DIV'));
        e.style.width = '1in';
        e.style.padding = '0';
        dpi.v = e.offsetWidth;
        e.parentNode.removeChild(e);
     }
     return dpi.v;
  }
};

window.onload = function() {
	console.log('dpi: ' + dpi.get(true));
	console.log('dpi: ' + dpi.get(false));
};
