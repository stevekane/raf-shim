var test = require('tape')
  , shim = require('./raf-shim'); 

test("it finds the correct raf shim for a given browser", function (t) {

  var raf = function () {}
    , msraf = function () {}
    , mozraf = function () {}
    , webkitraf = function () {}
    , operaraf = function () {};

  var shimDefault = shim({requestAnimationFrame: raf});
  var shimMs = shim({msRequestAnimationFrame: msraf});
  var shimMoz = shim({mozRequestAnimationFrame: mozraf});
  var shimWebkit = shim({webkitRequestAnimationFrame: webkitraf});
  var shimOpera = shim({oRequestAnimationFrame: operaraf});

  t.plan(5);

  t.equal(shimDefault.requestAnimationFrame, raf, "default raf shim found");
  t.equal(shimMs.requestAnimationFrame, msraf, "ms raf shim found");
  t.equal(shimMoz.requestAnimationFrame, mozraf, "moz raf shim found");
  t.equal(shimWebkit.requestAnimationFrame, webkitraf, "webkit raf shim found");
  t.equal(shimOpera.requestAnimationFrame, operaraf, "opera raf shim found");
});

test("it finds the correct caf shim for a given browser", function (t) {

  var caf = function () {}
    , mscaf = function () {}
    , mozcaf = function () {}
    , webkitcaf = function () {}
    , operacaf = function () {};

  var shimDefault = shim({cancelAnimationFrame: caf});
  var shimMs = shim({msCancelAnimationFrame: mscaf});
  var shimMoz = shim({mozCancelAnimationFrame: mozcaf});
  var shimWebkit = shim({webkitCancelAnimationFrame: webkitcaf});
  var shimOpera = shim({oCancelAnimationFrame: operacaf});

  t.plan(5);

  t.equal(shimDefault.cancelAnimationFrame, caf, "default caf shim found");
  t.equal(shimMs.cancelAnimationFrame, mscaf, "ms caf shim found");
  t.equal(shimMoz.cancelAnimationFrame, mozcaf, "moz caf shim found");
  t.equal(shimWebkit.cancelAnimationFrame, webkitcaf, "webkit caf shim found");
  t.equal(shimOpera.cancelAnimationFrame, operacaf, "opera caf shim found");
});
