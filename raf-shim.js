module.exports = function (win) {
  var vendors = ['ms', 'moz', 'webkit', 'o']
    , raf = win.requestAnimationFrame
    , caf = win.cancelAnimationFrame
    , i
    , j;

  for (i = 0; i < vendors.length && !raf; ++i) {
    raf = win[vendors[i]+"RequestAnimationFrame"];
  }

  for (j = 0; j < vendors.length && !caf; ++j) {
    caf = win[vendors[j]+"CancelAnimationFrame"] 
       || win[vendors[j]+"CancelRequestAnimationFrame"];
  }

  return {
    requestAnimationFrame: raf,
    cancelAnimationFrame: caf
  };
};
