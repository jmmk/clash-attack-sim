if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

;(function(){
var g, aa = this;
function r(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
var ba = "closure_uid_" + (1E9 * Math.random() >>> 0), ca = 0;
function da(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
;function fa(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ga(a, b) {
  null != a && this.append.apply(this, arguments);
}
ga.prototype.Za = "";
ga.prototype.append = function(a, b, c) {
  this.Za += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Za += arguments[d];
    }
  }
  return this;
};
ga.prototype.toString = function() {
  return this.Za;
};
var ia = null;
function ka() {
  return new ma(null, 5, [oa, !0, pa, !0, qa, !1, sa, !1, ta, null], null);
}
function s(a) {
  return null != a && !1 !== a;
}
function t(a, b) {
  return a[r(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function ua(a) {
  return null == a ? null : a.constructor;
}
function w(a, b) {
  var c = ua(b), c = s(s(c) ? c.Ub : c) ? c.Tb : r(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function va(a) {
  var b = a.Tb;
  return s(b) ? b : "" + x.f(a);
}
function wa(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var ya = {}, za = {};
function Ba(a) {
  if (a ? a.Q : a) {
    return a.Q(a);
  }
  var b;
  b = Ba[r(null == a ? null : a)];
  if (!b && (b = Ba._, !b)) {
    throw w("ICounted.-count", a);
  }
  return b.call(null, a);
}
function Ca(a) {
  if (a ? a.V : a) {
    return a.V(a);
  }
  var b;
  b = Ca[r(null == a ? null : a)];
  if (!b && (b = Ca._, !b)) {
    throw w("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
function Da(a, b) {
  if (a ? a.M : a) {
    return a.M(a, b);
  }
  var c;
  c = Da[r(null == a ? null : a)];
  if (!c && (c = Da._, !c)) {
    throw w("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Ea = {}, y = function() {
  function a(a, b, c) {
    if (a ? a.ja : a) {
      return a.ja(a, b, c);
    }
    var h;
    h = y[r(null == a ? null : a)];
    if (!h && (h = y._, !h)) {
      throw w("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.W : a) {
      return a.W(a, b);
    }
    var c;
    c = y[r(null == a ? null : a)];
    if (!c && (c = y._, !c)) {
      throw w("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.e = b;
  c.i = a;
  return c;
}(), Fa = {};
function A(a) {
  if (a ? a.Z : a) {
    return a.Z(a);
  }
  var b;
  b = A[r(null == a ? null : a)];
  if (!b && (b = A._, !b)) {
    throw w("ISeq.-first", a);
  }
  return b.call(null, a);
}
function B(a) {
  if (a ? a.ha : a) {
    return a.ha(a);
  }
  var b;
  b = B[r(null == a ? null : a)];
  if (!b && (b = B._, !b)) {
    throw w("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Ga = {}, Ia = {}, E = function() {
  function a(a, b, c) {
    if (a ? a.G : a) {
      return a.G(a, b, c);
    }
    var h;
    h = E[r(null == a ? null : a)];
    if (!h && (h = E._, !h)) {
      throw w("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.J : a) {
      return a.J(a, b);
    }
    var c;
    c = E[r(null == a ? null : a)];
    if (!c && (c = E._, !c)) {
      throw w("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.e = b;
  c.i = a;
  return c;
}();
function Ja(a, b) {
  if (a ? a.pb : a) {
    return a.pb(a, b);
  }
  var c;
  c = Ja[r(null == a ? null : a)];
  if (!c && (c = Ja._, !c)) {
    throw w("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Ma(a, b, c) {
  if (a ? a.ia : a) {
    return a.ia(a, b, c);
  }
  var d;
  d = Ma[r(null == a ? null : a)];
  if (!d && (d = Ma._, !d)) {
    throw w("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Na = {};
function Oa(a, b) {
  if (a ? a.oa : a) {
    return a.oa(a, b);
  }
  var c;
  c = Oa[r(null == a ? null : a)];
  if (!c && (c = Oa._, !c)) {
    throw w("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Pa = {};
function Qa(a) {
  if (a ? a.ub : a) {
    return a.ub();
  }
  var b;
  b = Qa[r(null == a ? null : a)];
  if (!b && (b = Qa._, !b)) {
    throw w("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Sa(a) {
  if (a ? a.vb : a) {
    return a.vb();
  }
  var b;
  b = Sa[r(null == a ? null : a)];
  if (!b && (b = Sa._, !b)) {
    throw w("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Ta = {}, Ua = {};
function Va(a, b, c) {
  if (a ? a.wb : a) {
    return a.wb(a, b, c);
  }
  var d;
  d = Va[r(null == a ? null : a)];
  if (!d && (d = Va._, !d)) {
    throw w("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Wa(a) {
  if (a ? a.tb : a) {
    return a.tb(a);
  }
  var b;
  b = Wa[r(null == a ? null : a)];
  if (!b && (b = Wa._, !b)) {
    throw w("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Xa = {};
function Za(a) {
  if (a ? a.L : a) {
    return a.L(a);
  }
  var b;
  b = Za[r(null == a ? null : a)];
  if (!b && (b = Za._, !b)) {
    throw w("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var $a = {};
function ab(a, b) {
  if (a ? a.O : a) {
    return a.O(a, b);
  }
  var c;
  c = ab[r(null == a ? null : a)];
  if (!c && (c = ab._, !c)) {
    throw w("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var cb = {}, db = function() {
  function a(a, b, c) {
    if (a ? a.Y : a) {
      return a.Y(a, b, c);
    }
    var h;
    h = db[r(null == a ? null : a)];
    if (!h && (h = db._, !h)) {
      throw w("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.X : a) {
      return a.X(a, b);
    }
    var c;
    c = db[r(null == a ? null : a)];
    if (!c && (c = db._, !c)) {
      throw w("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.e = b;
  c.i = a;
  return c;
}();
function eb(a, b) {
  if (a ? a.F : a) {
    return a.F(a, b);
  }
  var c;
  c = eb[r(null == a ? null : a)];
  if (!c && (c = eb._, !c)) {
    throw w("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function fb(a) {
  if (a ? a.I : a) {
    return a.I(a);
  }
  var b;
  b = fb[r(null == a ? null : a)];
  if (!b && (b = fb._, !b)) {
    throw w("IHash.-hash", a);
  }
  return b.call(null, a);
}
var gb = {};
function hb(a) {
  if (a ? a.N : a) {
    return a.N(a);
  }
  var b;
  b = hb[r(null == a ? null : a)];
  if (!b && (b = hb._, !b)) {
    throw w("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var ib = {};
function F(a, b) {
  if (a ? a.Db : a) {
    return a.Db(0, b);
  }
  var c;
  c = F[r(null == a ? null : a)];
  if (!c && (c = F._, !c)) {
    throw w("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var jb = {};
function kb(a, b, c) {
  if (a ? a.H : a) {
    return a.H(a, b, c);
  }
  var d;
  d = kb[r(null == a ? null : a)];
  if (!d && (d = kb._, !d)) {
    throw w("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function lb(a, b, c) {
  if (a ? a.Cb : a) {
    return a.Cb(0, b, c);
  }
  var d;
  d = lb[r(null == a ? null : a)];
  if (!d && (d = lb._, !d)) {
    throw w("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function mb(a) {
  if (a ? a.$a : a) {
    return a.$a(a);
  }
  var b;
  b = mb[r(null == a ? null : a)];
  if (!b && (b = mb._, !b)) {
    throw w("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function nb(a, b) {
  if (a ? a.cb : a) {
    return a.cb(a, b);
  }
  var c;
  c = nb[r(null == a ? null : a)];
  if (!c && (c = nb._, !c)) {
    throw w("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function pb(a) {
  if (a ? a.eb : a) {
    return a.eb(a);
  }
  var b;
  b = pb[r(null == a ? null : a)];
  if (!b && (b = pb._, !b)) {
    throw w("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function qb(a, b, c) {
  if (a ? a.bb : a) {
    return a.bb(a, b, c);
  }
  var d;
  d = qb[r(null == a ? null : a)];
  if (!d && (d = qb._, !d)) {
    throw w("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function rb(a, b, c) {
  if (a ? a.Bb : a) {
    return a.Bb(0, b, c);
  }
  var d;
  d = rb[r(null == a ? null : a)];
  if (!d && (d = rb._, !d)) {
    throw w("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function sb(a) {
  if (a ? a.yb : a) {
    return a.yb();
  }
  var b;
  b = sb[r(null == a ? null : a)];
  if (!b && (b = sb._, !b)) {
    throw w("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function tb(a) {
  if (a ? a.rb : a) {
    return a.rb(a);
  }
  var b;
  b = tb[r(null == a ? null : a)];
  if (!b && (b = tb._, !b)) {
    throw w("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function ub(a) {
  if (a ? a.sb : a) {
    return a.sb(a);
  }
  var b;
  b = ub[r(null == a ? null : a)];
  if (!b && (b = ub._, !b)) {
    throw w("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function vb(a) {
  if (a ? a.qb : a) {
    return a.qb(a);
  }
  var b;
  b = vb[r(null == a ? null : a)];
  if (!b && (b = vb._, !b)) {
    throw w("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function wb(a, b) {
  if (a ? a.Ob : a) {
    return a.Ob(a, b);
  }
  var c;
  c = wb[r(null == a ? null : a)];
  if (!c && (c = wb._, !c)) {
    throw w("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var xb = function() {
  function a(a, b, c, d, e) {
    if (a ? a.Sb : a) {
      return a.Sb(a, b, c, d, e);
    }
    var n;
    n = xb[r(null == a ? null : a)];
    if (!n && (n = xb._, !n)) {
      throw w("ISwap.-swap!", a);
    }
    return n.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.Rb : a) {
      return a.Rb(a, b, c, d);
    }
    var e;
    e = xb[r(null == a ? null : a)];
    if (!e && (e = xb._, !e)) {
      throw w("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.Qb : a) {
      return a.Qb(a, b, c);
    }
    var d;
    d = xb[r(null == a ? null : a)];
    if (!d && (d = xb._, !d)) {
      throw w("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.Pb : a) {
      return a.Pb(a, b);
    }
    var c;
    c = xb[r(null == a ? null : a)];
    if (!c && (c = xb._, !c)) {
      throw w("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, h, k, l, m) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
      case 4:
        return b.call(this, e, h, k, l);
      case 5:
        return a.call(this, e, h, k, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.i = c;
  e.t = b;
  e.R = a;
  return e;
}();
function yb(a) {
  if (a ? a.lb : a) {
    return a.lb(a);
  }
  var b;
  b = yb[r(null == a ? null : a)];
  if (!b && (b = yb._, !b)) {
    throw w("IIterable.-iterator", a);
  }
  return b.call(null, a);
}
function zb(a) {
  this.Vb = a;
  this.D = 0;
  this.m = 1073741824;
}
zb.prototype.Db = function(a, b) {
  return this.Vb.append(b);
};
function Ab(a) {
  var b = new ga;
  a.H(null, new zb(b), ka());
  return "" + x.f(b);
}
var Cb = "undefined" !== typeof Math.imul && 0 !== (Math.imul.e ? Math.imul.e(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.e ? Math.imul.e(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Db(a) {
  a = Cb(a, 3432918353);
  return Cb(a << 15 | a >>> -15, 461845907);
}
function Eb(a, b) {
  var c = a ^ b;
  return Cb(c << 13 | c >>> -13, 5) + 3864292196;
}
function Fb(a, b) {
  var c = a ^ b, c = Cb(c ^ c >>> 16, 2246822507), c = Cb(c ^ c >>> 13, 3266489909);
  return c ^ c >>> 16;
}
function Gb(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Eb(c, Db(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
    b = void 0;
  }
  b = 1 === (a.length & 1) ? b ^ Db(a.charCodeAt(a.length - 1)) : b;
  return Fb(b, Cb(2, a.length));
}
var Hb = {}, Ib = 0;
function Jb(a) {
  255 < Ib && (Hb = {}, Ib = 0);
  var b = Hb[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Cb(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
          b = void 0;
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    Hb[a] = b;
    Ib += 1;
  }
  return a = b;
}
function Kb(a) {
  a && (a.m & 4194304 || a.Yb) ? a = a.I(null) : "number" === typeof a ? a = (Math.floor.f ? Math.floor.f(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Jb(a), 0 !== a && (a = Db(a), a = Eb(0, a), a = Fb(a, 4))) : a = null == a ? 0 : fb(a);
  return a;
}
function Lb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Mb(a, b) {
  if (s(Nb.e ? Nb.e(a, b) : Nb.call(null, a, b))) {
    return 0;
  }
  if (s(function() {
    var c = s(a.ra) ? !1 : !0;
    return c ? b.ra : c;
  }())) {
    return-1;
  }
  if (s(a.ra)) {
    if (!s(b.ra)) {
      return 1;
    }
    var c = function() {
      var c = a.ra, d = b.ra;
      return Ob.e ? Ob.e(c, d) : Ob.call(null, c, d);
    }();
    if (0 === c) {
      var c = a.name, d = b.name;
      return Ob.e ? Ob.e(c, d) : Ob.call(null, c, d);
    }
    return c;
  }
  c = a.name;
  d = b.name;
  return Ob.e ? Ob.e(c, d) : Ob.call(null, c, d);
}
function Pb(a, b, c, d, e) {
  this.ra = a;
  this.name = b;
  this.Qa = c;
  this.Ta = d;
  this.ba = e;
  this.m = 2154168321;
  this.D = 4096;
}
g = Pb.prototype;
g.H = function(a, b) {
  return F(b, this.Qa);
};
g.I = function() {
  var a = this.Ta;
  return null != a ? a : this.Ta = a = Lb(Gb(this.name), Jb(this.ra));
};
g.O = function(a, b) {
  return new Pb(this.ra, this.name, this.Qa, this.Ta, b);
};
g.L = function() {
  return this.ba;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return E.i(c, this, null);
      case 3:
        return E.i(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return E.i(c, this, null);
  };
  a.i = function(a, c, d) {
    return E.i(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(wa(b)));
};
g.f = function(a) {
  return E.i(a, this, null);
};
g.e = function(a, b) {
  return E.i(a, this, b);
};
g.F = function(a, b) {
  return b instanceof Pb ? this.Qa === b.Qa : !1;
};
g.toString = function() {
  return this.Qa;
};
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.m & 8388608 || a.Zb)) {
    return a.N(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Qb(a, 0);
  }
  if (t(gb, a)) {
    return hb(a);
  }
  throw Error("" + x.f(a) + " is not ISeqable");
}
function H(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.m & 64 || a.ab)) {
    return a.Z(null);
  }
  a = G(a);
  return null == a ? null : A(a);
}
function J(a) {
  return null != a ? a && (a.m & 64 || a.ab) ? a.ha(null) : (a = G(a)) ? B(a) : K : K;
}
function L(a) {
  return null == a ? null : a && (a.m & 128 || a.mb) ? a.ga(null) : G(J(a));
}
var Nb = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || eb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.e(a, d)) {
          if (L(e)) {
            a = d, d = H(e), e = L(e);
          } else {
            return b.e(d, H(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.B = 2;
    a.s = function(a) {
      var b = H(a);
      a = L(a);
      var d = H(a);
      a = J(a);
      return c(b, d, a);
    };
    a.n = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.n(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 2;
  b.s = c.s;
  b.f = function() {
    return!0;
  };
  b.e = a;
  b.n = c.n;
  return b;
}();
function Sb(a, b) {
  var c = Db(a), c = Eb(0, c);
  return Fb(c, b);
}
function Tb(a) {
  var b = 0, c = 1;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = Cb(31, c) + Kb(H(a)) | 0, a = L(a);
    } else {
      return Sb(c, b);
    }
  }
}
function Ub(a) {
  var b = 0, c = 0;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = c + Kb(H(a)) | 0, a = L(a);
    } else {
      return Sb(c, b);
    }
  }
}
za["null"] = !0;
Ba["null"] = function() {
  return 0;
};
Date.prototype.F = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
eb.number = function(a, b) {
  return a === b;
};
Xa["function"] = !0;
Za["function"] = function() {
  return null;
};
ya["function"] = !0;
fb._ = function(a) {
  return a[ba] || (a[ba] = ++ca);
};
function Vb(a) {
  this.na = a;
  this.D = 0;
  this.m = 32768;
}
Vb.prototype.tb = function() {
  return this.na;
};
function Wb(a) {
  return a instanceof Vb;
}
function Xb(a) {
  return Wa(a);
}
var Yb = function() {
  function a(a, b, c, d) {
    for (var l = Ba(a);;) {
      if (d < l) {
        var m = y.e(a, d);
        c = b.e ? b.e(c, m) : b.call(null, c, m);
        if (Wb(c)) {
          return Wa(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    var d = Ba(a), l = c;
    for (c = 0;;) {
      if (c < d) {
        var m = y.e(a, c), l = b.e ? b.e(l, m) : b.call(null, l, m);
        if (Wb(l)) {
          return Wa(l);
        }
        c += 1;
      } else {
        return l;
      }
    }
  }
  function c(a, b) {
    var c = Ba(a);
    if (0 === c) {
      return b.C ? b.C() : b.call(null);
    }
    for (var d = y.e(a, 0), l = 1;;) {
      if (l < c) {
        var m = y.e(a, l), d = b.e ? b.e(d, m) : b.call(null, d, m);
        if (Wb(d)) {
          return Wa(d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.e = c;
  d.i = b;
  d.t = a;
  return d;
}(), Zb = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        var m = a[d];
        c = b.e ? b.e(c, m) : b.call(null, c, m);
        if (Wb(c)) {
          return Wa(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    var d = a.length, l = c;
    for (c = 0;;) {
      if (c < d) {
        var m = a[c], l = b.e ? b.e(l, m) : b.call(null, l, m);
        if (Wb(l)) {
          return Wa(l);
        }
        c += 1;
      } else {
        return l;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.C ? b.C() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        var m = a[l], d = b.e ? b.e(d, m) : b.call(null, d, m);
        if (Wb(d)) {
          return Wa(d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.e = c;
  d.i = b;
  d.t = a;
  return d;
}();
function $b(a) {
  return a ? a.m & 2 || a.Gb ? !0 : a.m ? !1 : t(za, a) : t(za, a);
}
function ac(a) {
  return a ? a.m & 16 || a.zb ? !0 : a.m ? !1 : t(Ea, a) : t(Ea, a);
}
function bc(a, b) {
  this.j = a;
  this.A = b;
}
bc.prototype.xb = function() {
  return this.A < this.j.length;
};
bc.prototype.next = function() {
  var a = this.j[this.A];
  this.A += 1;
  return a;
};
function Qb(a, b) {
  this.j = a;
  this.A = b;
  this.m = 166199550;
  this.D = 8192;
}
g = Qb.prototype;
g.toString = function() {
  return Ab(this);
};
g.W = function(a, b) {
  var c = b + this.A;
  return c < this.j.length ? this.j[c] : null;
};
g.ja = function(a, b, c) {
  a = b + this.A;
  return a < this.j.length ? this.j[a] : c;
};
g.lb = function() {
  return new bc(this.j, this.A);
};
g.ga = function() {
  return this.A + 1 < this.j.length ? new Qb(this.j, this.A + 1) : null;
};
g.Q = function() {
  return this.j.length - this.A;
};
g.I = function() {
  return Tb(this);
};
g.F = function(a, b) {
  return cc.e ? cc.e(this, b) : cc.call(null, this, b);
};
g.V = function() {
  return K;
};
g.X = function(a, b) {
  return Zb.t(this.j, b, this.j[this.A], this.A + 1);
};
g.Y = function(a, b, c) {
  return Zb.t(this.j, b, c, this.A);
};
g.Z = function() {
  return this.j[this.A];
};
g.ha = function() {
  return this.A + 1 < this.j.length ? new Qb(this.j, this.A + 1) : K;
};
g.N = function() {
  return this;
};
g.M = function(a, b) {
  return N.e ? N.e(b, this) : N.call(null, b, this);
};
var dc = function() {
  function a(a, b) {
    return b < a.length ? new Qb(a, b) : null;
  }
  function b(a) {
    return c.e(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.f = b;
  c.e = a;
  return c;
}(), M = function() {
  function a(a, b) {
    return dc.e(a, b);
  }
  function b(a) {
    return dc.e(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.f = b;
  c.e = a;
  return c;
}();
eb._ = function(a, b) {
  return a === b;
};
var fc = function() {
  function a(a, b) {
    return null != a ? Da(a, b) : Da(K, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (s(e)) {
          a = b.e(a, d), d = H(e), e = L(e);
        } else {
          return b.e(a, d);
        }
      }
    }
    a.B = 2;
    a.s = function(a) {
      var b = H(a);
      a = L(a);
      var d = H(a);
      a = J(a);
      return c(b, d, a);
    };
    a.n = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return ec;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.n(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 2;
  b.s = c.s;
  b.C = function() {
    return ec;
  };
  b.f = function(a) {
    return a;
  };
  b.e = a;
  b.n = c.n;
  return b;
}();
function O(a) {
  if (null != a) {
    if (a && (a.m & 2 || a.Gb)) {
      a = a.Q(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (t(za, a)) {
            a = Ba(a);
          } else {
            a: {
              a = G(a);
              for (var b = 0;;) {
                if ($b(a)) {
                  a = b + Ba(a);
                  break a;
                }
                a = L(a);
                b += 1;
              }
              a = void 0;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var gc = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return G(a) ? H(a) : c;
      }
      if (ac(a)) {
        return y.i(a, b, c);
      }
      if (G(a)) {
        a = L(a), b -= 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (G(a)) {
          return H(a);
        }
        throw Error("Index out of bounds");
      }
      if (ac(a)) {
        return y.e(a, b);
      }
      if (G(a)) {
        var c = L(a), h = b - 1;
        a = c;
        b = h;
      } else {
        throw Error("Index out of bounds");
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.e = b;
  c.i = a;
  return c;
}(), P = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.m & 16 || a.zb)) {
      return a.ja(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (t(Ea, a)) {
      return y.e(a, b);
    }
    if (a ? a.m & 64 || a.ab || (a.m ? 0 : t(Fa, a)) : t(Fa, a)) {
      return gc.i(a, b, c);
    }
    throw Error("nth not supported on this type " + x.f(va(ua(a))));
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.m & 16 || a.zb)) {
      return a.W(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (t(Ea, a)) {
      return y.e(a, b);
    }
    if (a ? a.m & 64 || a.ab || (a.m ? 0 : t(Fa, a)) : t(Fa, a)) {
      return gc.e(a, b);
    }
    throw Error("nth not supported on this type " + x.f(va(ua(a))));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.e = b;
  c.i = a;
  return c;
}(), R = function() {
  function a(a, b, c) {
    return null != a ? a && (a.m & 256 || a.Ab) ? a.G(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : t(Ia, a) ? E.i(a, b, c) : c : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.m & 256 || a.Ab) ? a.J(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : t(Ia, a) ? E.e(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.e = b;
  c.i = a;
  return c;
}(), ic = function() {
  function a(a, b, c) {
    if (null != a) {
      a = Ma(a, b, c);
    } else {
      a: {
        a = [b];
        c = [c];
        b = a.length;
        var h = 0, k;
        for (k = mb(hc);;) {
          if (h < b) {
            var l = h + 1;
            k = k.bb(null, a[h], c[h]);
            h = l;
          } else {
            a = pb(k);
            break a;
          }
        }
        a = void 0;
      }
    }
    return a;
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = M(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.i(a, d, e), s(l)) {
          d = H(l), e = H(L(l)), l = L(L(l));
        } else {
          return a;
        }
      }
    }
    a.B = 3;
    a.s = function(a) {
      var b = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var l = H(a);
      a = J(a);
      return c(b, d, l, a);
    };
    a.n = c;
    return a;
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.n(b, e, f, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 3;
  b.s = c.s;
  b.i = a;
  b.n = c.n;
  return b;
}(), jc = function() {
  function a(a, b) {
    return null == a ? null : Oa(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.e(a, d);
        if (s(e)) {
          d = H(e), e = L(e);
        } else {
          return a;
        }
      }
    }
    a.B = 2;
    a.s = function(a) {
      var b = H(a);
      a = L(a);
      var d = H(a);
      a = J(a);
      return c(b, d, a);
    };
    a.n = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.n(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 2;
  b.s = c.s;
  b.f = function(a) {
    return a;
  };
  b.e = a;
  b.n = c.n;
  return b;
}();
function kc(a) {
  var b = "function" == r(a);
  return s(b) ? b : a ? s(s(null) ? null : a.Fb) ? !0 : a.ec ? !1 : t(ya, a) : t(ya, a);
}
function lc(a, b) {
  this.k = a;
  this.meta = b;
  this.D = 0;
  this.m = 393217;
}
g = lc.prototype;
g.call = function() {
  function a(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, C, Q, T, na) {
    a = this.k;
    return mc.kb ? mc.kb(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, C, Q, T, na) : mc.call(null, a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, C, Q, T, na);
  }
  function b(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, C, Q, T) {
    a = this;
    return a.k.Ea ? a.k.Ea(b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, C, Q, T) : a.k.call(null, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, C, Q, T);
  }
  function c(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, C, Q) {
    a = this;
    return a.k.Da ? a.k.Da(b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, C, Q) : a.k.call(null, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, C, Q);
  }
  function d(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, C) {
    a = this;
    return a.k.Ca ? a.k.Ca(b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, C) : a.k.call(null, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, C);
  }
  function e(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I) {
    a = this;
    return a.k.Ba ? a.k.Ba(b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I) : a.k.call(null, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I);
  }
  function f(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D) {
    a = this;
    return a.k.Aa ? a.k.Aa(b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D) : a.k.call(null, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D);
  }
  function h(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z) {
    a = this;
    return a.k.za ? a.k.za(b, c, d, e, f, h, k, l, m, n, p, q, u, v, z) : a.k.call(null, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z);
  }
  function k(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v) {
    a = this;
    return a.k.ya ? a.k.ya(b, c, d, e, f, h, k, l, m, n, p, q, u, v) : a.k.call(null, b, c, d, e, f, h, k, l, m, n, p, q, u, v);
  }
  function l(a, b, c, d, e, f, h, k, l, m, n, p, q, u) {
    a = this;
    return a.k.xa ? a.k.xa(b, c, d, e, f, h, k, l, m, n, p, q, u) : a.k.call(null, b, c, d, e, f, h, k, l, m, n, p, q, u);
  }
  function m(a, b, c, d, e, f, h, k, l, m, n, p, q) {
    a = this;
    return a.k.wa ? a.k.wa(b, c, d, e, f, h, k, l, m, n, p, q) : a.k.call(null, b, c, d, e, f, h, k, l, m, n, p, q);
  }
  function n(a, b, c, d, e, f, h, k, l, m, n, p) {
    a = this;
    return a.k.va ? a.k.va(b, c, d, e, f, h, k, l, m, n, p) : a.k.call(null, b, c, d, e, f, h, k, l, m, n, p);
  }
  function p(a, b, c, d, e, f, h, k, l, m, n) {
    a = this;
    return a.k.ua ? a.k.ua(b, c, d, e, f, h, k, l, m, n) : a.k.call(null, b, c, d, e, f, h, k, l, m, n);
  }
  function q(a, b, c, d, e, f, h, k, l, m) {
    a = this;
    return a.k.Ga ? a.k.Ga(b, c, d, e, f, h, k, l, m) : a.k.call(null, b, c, d, e, f, h, k, l, m);
  }
  function u(a, b, c, d, e, f, h, k, l) {
    a = this;
    return a.k.Fa ? a.k.Fa(b, c, d, e, f, h, k, l) : a.k.call(null, b, c, d, e, f, h, k, l);
  }
  function v(a, b, c, d, e, f, h, k) {
    a = this;
    return a.k.ma ? a.k.ma(b, c, d, e, f, h, k) : a.k.call(null, b, c, d, e, f, h, k);
  }
  function z(a, b, c, d, e, f, h) {
    a = this;
    return a.k.fa ? a.k.fa(b, c, d, e, f, h) : a.k.call(null, b, c, d, e, f, h);
  }
  function D(a, b, c, d, e, f) {
    a = this;
    return a.k.R ? a.k.R(b, c, d, e, f) : a.k.call(null, b, c, d, e, f);
  }
  function I(a, b, c, d, e) {
    a = this;
    return a.k.t ? a.k.t(b, c, d, e) : a.k.call(null, b, c, d, e);
  }
  function Q(a, b, c, d) {
    a = this;
    return a.k.i ? a.k.i(b, c, d) : a.k.call(null, b, c, d);
  }
  function T(a, b, c) {
    a = this;
    return a.k.e ? a.k.e(b, c) : a.k.call(null, b, c);
  }
  function na(a, b) {
    a = this;
    return a.k.f ? a.k.f(b) : a.k.call(null, b);
  }
  function La(a) {
    a = this;
    return a.k.C ? a.k.C() : a.k.call(null);
  }
  var C = null, C = function(C, ea, ha, ja, la, ra, xa, Aa, Ha, Ka, Ra, Ya, bb, ob, Bb, Rb, rc, Yc, Ad, le, hf, eg) {
    switch(arguments.length) {
      case 1:
        return La.call(this, C);
      case 2:
        return na.call(this, C, ea);
      case 3:
        return T.call(this, C, ea, ha);
      case 4:
        return Q.call(this, C, ea, ha, ja);
      case 5:
        return I.call(this, C, ea, ha, ja, la);
      case 6:
        return D.call(this, C, ea, ha, ja, la, ra);
      case 7:
        return z.call(this, C, ea, ha, ja, la, ra, xa);
      case 8:
        return v.call(this, C, ea, ha, ja, la, ra, xa, Aa);
      case 9:
        return u.call(this, C, ea, ha, ja, la, ra, xa, Aa, Ha);
      case 10:
        return q.call(this, C, ea, ha, ja, la, ra, xa, Aa, Ha, Ka);
      case 11:
        return p.call(this, C, ea, ha, ja, la, ra, xa, Aa, Ha, Ka, Ra);
      case 12:
        return n.call(this, C, ea, ha, ja, la, ra, xa, Aa, Ha, Ka, Ra, Ya);
      case 13:
        return m.call(this, C, ea, ha, ja, la, ra, xa, Aa, Ha, Ka, Ra, Ya, bb);
      case 14:
        return l.call(this, C, ea, ha, ja, la, ra, xa, Aa, Ha, Ka, Ra, Ya, bb, ob);
      case 15:
        return k.call(this, C, ea, ha, ja, la, ra, xa, Aa, Ha, Ka, Ra, Ya, bb, ob, Bb);
      case 16:
        return h.call(this, C, ea, ha, ja, la, ra, xa, Aa, Ha, Ka, Ra, Ya, bb, ob, Bb, Rb);
      case 17:
        return f.call(this, C, ea, ha, ja, la, ra, xa, Aa, Ha, Ka, Ra, Ya, bb, ob, Bb, Rb, rc);
      case 18:
        return e.call(this, C, ea, ha, ja, la, ra, xa, Aa, Ha, Ka, Ra, Ya, bb, ob, Bb, Rb, rc, Yc);
      case 19:
        return d.call(this, C, ea, ha, ja, la, ra, xa, Aa, Ha, Ka, Ra, Ya, bb, ob, Bb, Rb, rc, Yc, Ad);
      case 20:
        return c.call(this, C, ea, ha, ja, la, ra, xa, Aa, Ha, Ka, Ra, Ya, bb, ob, Bb, Rb, rc, Yc, Ad, le);
      case 21:
        return b.call(this, C, ea, ha, ja, la, ra, xa, Aa, Ha, Ka, Ra, Ya, bb, ob, Bb, Rb, rc, Yc, Ad, le, hf);
      case 22:
        return a.call(this, C, ea, ha, ja, la, ra, xa, Aa, Ha, Ka, Ra, Ya, bb, ob, Bb, Rb, rc, Yc, Ad, le, hf, eg);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  C.f = La;
  C.e = na;
  C.i = T;
  C.t = Q;
  C.R = I;
  C.fa = D;
  C.ma = z;
  C.Fa = v;
  C.Ga = u;
  C.ua = q;
  C.va = p;
  C.wa = n;
  C.xa = m;
  C.ya = l;
  C.za = k;
  C.Aa = h;
  C.Ba = f;
  C.Ca = e;
  C.Da = d;
  C.Ea = c;
  C.Ib = b;
  C.kb = a;
  return C;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(wa(b)));
};
g.C = function() {
  return this.k.C ? this.k.C() : this.k.call(null);
};
g.f = function(a) {
  return this.k.f ? this.k.f(a) : this.k.call(null, a);
};
g.e = function(a, b) {
  return this.k.e ? this.k.e(a, b) : this.k.call(null, a, b);
};
g.i = function(a, b, c) {
  return this.k.i ? this.k.i(a, b, c) : this.k.call(null, a, b, c);
};
g.t = function(a, b, c, d) {
  return this.k.t ? this.k.t(a, b, c, d) : this.k.call(null, a, b, c, d);
};
g.R = function(a, b, c, d, e) {
  return this.k.R ? this.k.R(a, b, c, d, e) : this.k.call(null, a, b, c, d, e);
};
g.fa = function(a, b, c, d, e, f) {
  return this.k.fa ? this.k.fa(a, b, c, d, e, f) : this.k.call(null, a, b, c, d, e, f);
};
g.ma = function(a, b, c, d, e, f, h) {
  return this.k.ma ? this.k.ma(a, b, c, d, e, f, h) : this.k.call(null, a, b, c, d, e, f, h);
};
g.Fa = function(a, b, c, d, e, f, h, k) {
  return this.k.Fa ? this.k.Fa(a, b, c, d, e, f, h, k) : this.k.call(null, a, b, c, d, e, f, h, k);
};
g.Ga = function(a, b, c, d, e, f, h, k, l) {
  return this.k.Ga ? this.k.Ga(a, b, c, d, e, f, h, k, l) : this.k.call(null, a, b, c, d, e, f, h, k, l);
};
g.ua = function(a, b, c, d, e, f, h, k, l, m) {
  return this.k.ua ? this.k.ua(a, b, c, d, e, f, h, k, l, m) : this.k.call(null, a, b, c, d, e, f, h, k, l, m);
};
g.va = function(a, b, c, d, e, f, h, k, l, m, n) {
  return this.k.va ? this.k.va(a, b, c, d, e, f, h, k, l, m, n) : this.k.call(null, a, b, c, d, e, f, h, k, l, m, n);
};
g.wa = function(a, b, c, d, e, f, h, k, l, m, n, p) {
  return this.k.wa ? this.k.wa(a, b, c, d, e, f, h, k, l, m, n, p) : this.k.call(null, a, b, c, d, e, f, h, k, l, m, n, p);
};
g.xa = function(a, b, c, d, e, f, h, k, l, m, n, p, q) {
  return this.k.xa ? this.k.xa(a, b, c, d, e, f, h, k, l, m, n, p, q) : this.k.call(null, a, b, c, d, e, f, h, k, l, m, n, p, q);
};
g.ya = function(a, b, c, d, e, f, h, k, l, m, n, p, q, u) {
  return this.k.ya ? this.k.ya(a, b, c, d, e, f, h, k, l, m, n, p, q, u) : this.k.call(null, a, b, c, d, e, f, h, k, l, m, n, p, q, u);
};
g.za = function(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v) {
  return this.k.za ? this.k.za(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v) : this.k.call(null, a, b, c, d, e, f, h, k, l, m, n, p, q, u, v);
};
g.Aa = function(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z) {
  return this.k.Aa ? this.k.Aa(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z) : this.k.call(null, a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z);
};
g.Ba = function(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D) {
  return this.k.Ba ? this.k.Ba(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D) : this.k.call(null, a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D);
};
g.Ca = function(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I) {
  return this.k.Ca ? this.k.Ca(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I) : this.k.call(null, a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I);
};
g.Da = function(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q) {
  return this.k.Da ? this.k.Da(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q) : this.k.call(null, a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q);
};
g.Ea = function(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q, T) {
  return this.k.Ea ? this.k.Ea(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q, T) : this.k.call(null, a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q, T);
};
g.Ib = function(a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q, T, na) {
  var La = this.k;
  return mc.kb ? mc.kb(La, a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q, T, na) : mc.call(null, La, a, b, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q, T, na);
};
g.Fb = !0;
g.O = function(a, b) {
  return new lc(this.k, b);
};
g.L = function() {
  return this.meta;
};
function nc(a, b) {
  return kc(a) && !(a ? a.m & 262144 || a.cc || (a.m ? 0 : t($a, a)) : t($a, a)) ? new lc(a, b) : null == a ? null : ab(a, b);
}
function oc(a) {
  var b = null != a;
  return(b ? a ? a.m & 131072 || a.Lb || (a.m ? 0 : t(Xa, a)) : t(Xa, a) : b) ? Za(a) : null;
}
function pc(a) {
  var b;
  (b = null == a) || (a = G(a), b = s(a) ? !1 : !0);
  return b;
}
function qc(a) {
  return null == a ? !1 : a ? a.m & 4096 || a.ac ? !0 : a.m ? !1 : t(Ta, a) : t(Ta, a);
}
function sc(a) {
  return null == a ? !1 : a ? a.m & 1024 || a.Jb ? !0 : a.m ? !1 : t(Na, a) : t(Na, a);
}
function tc(a) {
  return a ? a.m & 16384 || a.bc ? !0 : a.m ? !1 : t(Ua, a) : t(Ua, a);
}
function uc(a) {
  return a ? a.D & 512 || a.Xb ? !0 : !1 : !1;
}
function vc(a) {
  var b = [];
  fa(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function wc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
function xc(a, b, c, d, e) {
  b += e - 1;
  for (d += e - 1;0 !== e;) {
    c[d] = a[b], d -= 1, e -= 1, b -= 1;
  }
}
var yc = {};
function zc(a) {
  return s(a) ? !0 : !1;
}
function Ac(a, b) {
  return R.i(a, b, yc) === yc ? !1 : !0;
}
function Ob(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (ua(a) === ua(b)) {
    return a && (a.D & 2048 || a.ib) ? a.jb(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  throw Error("compare on non-nil objects of different types");
}
var Bc = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = Ob(P.e(a, h), P.e(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = O(a), h = O(b);
    return f < h ? -1 : f > h ? 1 : c.t(a, b, f, 0);
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.e = b;
  c.t = a;
  return c;
}(), Dc = function() {
  function a(a, b, c) {
    for (c = G(c);;) {
      if (c) {
        var h = H(c);
        b = a.e ? a.e(b, h) : a.call(null, b, h);
        if (Wb(b)) {
          return Wa(b);
        }
        c = L(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = G(b);
    if (c) {
      var h = H(c), c = L(c);
      return Cc.i ? Cc.i(a, h, c) : Cc.call(null, a, h, c);
    }
    return a.C ? a.C() : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.e = b;
  c.i = a;
  return c;
}(), Cc = function() {
  function a(a, b, c) {
    return c && (c.m & 524288 || c.Nb) ? c.Y(null, a, b) : c instanceof Array ? Zb.i(c, a, b) : "string" === typeof c ? Zb.i(c, a, b) : t(cb, c) ? db.i(c, a, b) : Dc.i(a, b, c);
  }
  function b(a, b) {
    return b && (b.m & 524288 || b.Nb) ? b.X(null, a) : b instanceof Array ? Zb.e(b, a) : "string" === typeof b ? Zb.e(b, a) : t(cb, b) ? db.e(b, a) : Dc.e(a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.e = b;
  c.i = a;
  return c;
}();
function Ec(a) {
  return a;
}
var Fc = function() {
  function a(a, b, c, h) {
    a = a.f ? a.f(b) : a.call(null, b);
    c = Cc.i(a, c, h);
    return a.f ? a.f(c) : a.call(null, c);
  }
  function b(a, b, f) {
    return c.t(a, b, b.C ? b.C() : b.call(null), f);
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.t = a;
  return c;
}();
function Gc(a) {
  return a - 1;
}
function Hc(a) {
  return 0 <= a ? Math.floor.f ? Math.floor.f(a) : Math.floor.call(null, a) : Math.ceil.f ? Math.ceil.f(a) : Math.ceil.call(null, a);
}
function Ic(a) {
  return Hc((a - a % 2) / 2);
}
var Jc = function() {
  function a(a) {
    return a * c.C();
  }
  function b() {
    return Math.random.C ? Math.random.C() : Math.random.call(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.C = b;
  c.f = a;
  return c;
}();
function Kc(a) {
  return Hc(Jc.f(a));
}
function Lc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var x = function() {
  function a(a) {
    return null == a ? "" : "" + a;
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new ga(b.f(a)), l = d;;) {
        if (s(l)) {
          e = e.append(b.f(H(l))), l = L(l);
        } else {
          return e.toString();
        }
      }
    }
    a.B = 1;
    a.s = function(a) {
      var b = H(a);
      a = J(a);
      return c(b, a);
    };
    a.n = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.n(b, M(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 1;
  b.s = c.s;
  b.C = function() {
    return "";
  };
  b.f = a;
  b.n = c.n;
  return b;
}();
function cc(a, b) {
  var c;
  if (b ? b.m & 16777216 || b.$b || (b.m ? 0 : t(ib, b)) : t(ib, b)) {
    if ($b(a) && $b(b) && O(a) !== O(b)) {
      c = !1;
    } else {
      a: {
        c = G(a);
        for (var d = G(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && Nb.e(H(c), H(d))) {
            c = L(c), d = L(d);
          } else {
            c = !1;
            break a;
          }
        }
        c = void 0;
      }
    }
  } else {
    c = null;
  }
  return zc(c);
}
function Mc(a) {
  var b = 0;
  for (a = G(a);;) {
    if (a) {
      var c = H(a), b = (b + (Kb(function() {
        var a = c;
        return Nc.f ? Nc.f(a) : Nc.call(null, a);
      }()) ^ Kb(function() {
        var a = c;
        return Oc.f ? Oc.f(a) : Oc.call(null, a);
      }()))) % 4503599627370496;
      a = L(a);
    } else {
      return b;
    }
  }
}
function Pc(a, b, c, d, e) {
  this.meta = a;
  this.first = b;
  this.Ja = c;
  this.count = d;
  this.q = e;
  this.m = 65937646;
  this.D = 8192;
}
g = Pc.prototype;
g.toString = function() {
  return Ab(this);
};
g.L = function() {
  return this.meta;
};
g.ga = function() {
  return 1 === this.count ? null : this.Ja;
};
g.Q = function() {
  return this.count;
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Tb(this);
};
g.F = function(a, b) {
  return cc(this, b);
};
g.V = function() {
  return K;
};
g.X = function(a, b) {
  return Dc.e(b, this);
};
g.Y = function(a, b, c) {
  return Dc.i(b, c, this);
};
g.Z = function() {
  return this.first;
};
g.ha = function() {
  return 1 === this.count ? K : this.Ja;
};
g.N = function() {
  return this;
};
g.O = function(a, b) {
  return new Pc(b, this.first, this.Ja, this.count, this.q);
};
g.M = function(a, b) {
  return new Pc(this.meta, b, this, this.count + 1, null);
};
function Qc(a) {
  this.meta = a;
  this.m = 65937614;
  this.D = 8192;
}
g = Qc.prototype;
g.toString = function() {
  return Ab(this);
};
g.L = function() {
  return this.meta;
};
g.ga = function() {
  return null;
};
g.Q = function() {
  return 0;
};
g.I = function() {
  return 0;
};
g.F = function(a, b) {
  return cc(this, b);
};
g.V = function() {
  return this;
};
g.X = function(a, b) {
  return Dc.e(b, this);
};
g.Y = function(a, b, c) {
  return Dc.i(b, c, this);
};
g.Z = function() {
  return null;
};
g.ha = function() {
  return K;
};
g.N = function() {
  return null;
};
g.O = function(a, b) {
  return new Qc(b);
};
g.M = function(a, b) {
  return new Pc(this.meta, b, null, 1, null);
};
var K = new Qc(null), Rc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Qb && 0 === a.A) {
      b = a.j;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.Z(null)), a = a.ga(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = K;;) {
      if (0 < a) {
        var f = a - 1, e = e.M(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.B = 0;
  a.s = function(a) {
    a = G(a);
    return b(a);
  };
  a.n = b;
  return a;
}();
function Sc(a, b, c, d) {
  this.meta = a;
  this.first = b;
  this.Ja = c;
  this.q = d;
  this.m = 65929452;
  this.D = 8192;
}
g = Sc.prototype;
g.toString = function() {
  return Ab(this);
};
g.L = function() {
  return this.meta;
};
g.ga = function() {
  return null == this.Ja ? null : G(this.Ja);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Tb(this);
};
g.F = function(a, b) {
  return cc(this, b);
};
g.V = function() {
  return nc(K, this.meta);
};
g.X = function(a, b) {
  return Dc.e(b, this);
};
g.Y = function(a, b, c) {
  return Dc.i(b, c, this);
};
g.Z = function() {
  return this.first;
};
g.ha = function() {
  return null == this.Ja ? K : this.Ja;
};
g.N = function() {
  return this;
};
g.O = function(a, b) {
  return new Sc(b, this.first, this.Ja, this.q);
};
g.M = function(a, b) {
  return new Sc(null, b, this, this.q);
};
function N(a, b) {
  var c = null == b;
  return(c ? c : b && (b.m & 64 || b.ab)) ? new Sc(null, a, b, null) : new Sc(null, a, G(b), null);
}
function S(a, b, c, d) {
  this.ra = a;
  this.name = b;
  this.ca = c;
  this.Ta = d;
  this.m = 2153775105;
  this.D = 4096;
}
g = S.prototype;
g.H = function(a, b) {
  return F(b, ":" + x.f(this.ca));
};
g.I = function() {
  var a = this.Ta;
  return null != a ? a : this.Ta = a = Lb(Gb(this.name), Jb(this.ra)) + 2654435769 | 0;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return R.e(c, this);
      case 3:
        return R.i(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return R.e(c, this);
  };
  a.i = function(a, c, d) {
    return R.i(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(wa(b)));
};
g.f = function(a) {
  return R.e(a, this);
};
g.e = function(a, b) {
  return R.i(a, this, b);
};
g.F = function(a, b) {
  return b instanceof S ? this.ca === b.ca : !1;
};
g.toString = function() {
  return ":" + x.f(this.ca);
};
function U(a, b) {
  return a === b ? !0 : a instanceof S && b instanceof S ? a.ca === b.ca : !1;
}
var Uc = function() {
  function a(a, b) {
    return new S(a, b, "" + x.f(s(a) ? "" + x.f(a) + "/" : null) + x.f(b), null);
  }
  function b(a) {
    if (a instanceof S) {
      return a;
    }
    if (a instanceof Pb) {
      var b;
      if (a && (a.D & 4096 || a.Mb)) {
        b = a.ra;
      } else {
        throw Error("Doesn't support namespace: " + x.f(a));
      }
      return new S(b, Tc.f ? Tc.f(a) : Tc.call(null, a), a.Qa, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new S(b[0], b[1], a, null) : new S(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.f = b;
  c.e = a;
  return c;
}();
function V(a, b, c, d) {
  this.meta = a;
  this.Wa = b;
  this.S = c;
  this.q = d;
  this.D = 0;
  this.m = 32374988;
}
g = V.prototype;
g.toString = function() {
  return Ab(this);
};
function Vc(a) {
  null != a.Wa && (a.S = a.Wa.C ? a.Wa.C() : a.Wa.call(null), a.Wa = null);
  return a.S;
}
g.L = function() {
  return this.meta;
};
g.ga = function() {
  hb(this);
  return null == this.S ? null : L(this.S);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Tb(this);
};
g.F = function(a, b) {
  return cc(this, b);
};
g.V = function() {
  return nc(K, this.meta);
};
g.X = function(a, b) {
  return Dc.e(b, this);
};
g.Y = function(a, b, c) {
  return Dc.i(b, c, this);
};
g.Z = function() {
  hb(this);
  return null == this.S ? null : H(this.S);
};
g.ha = function() {
  hb(this);
  return null != this.S ? J(this.S) : K;
};
g.N = function() {
  Vc(this);
  if (null == this.S) {
    return null;
  }
  for (var a = this.S;;) {
    if (a instanceof V) {
      a = Vc(a);
    } else {
      return this.S = a, G(this.S);
    }
  }
};
g.O = function(a, b) {
  return new V(b, this.Wa, this.S, this.q);
};
g.M = function(a, b) {
  return N(b, this);
};
function Wc(a, b) {
  this.ob = a;
  this.end = b;
  this.D = 0;
  this.m = 2;
}
Wc.prototype.Q = function() {
  return this.end;
};
Wc.prototype.add = function(a) {
  this.ob[this.end] = a;
  return this.end += 1;
};
Wc.prototype.U = function() {
  var a = new Xc(this.ob, 0, this.end);
  this.ob = null;
  return a;
};
function Zc(a) {
  return new Wc(Array(a), 0);
}
function Xc(a, b, c) {
  this.j = a;
  this.off = b;
  this.end = c;
  this.D = 0;
  this.m = 524306;
}
g = Xc.prototype;
g.X = function(a, b) {
  return Zb.t(this.j, b, this.j[this.off], this.off + 1);
};
g.Y = function(a, b, c) {
  return Zb.t(this.j, b, c, this.off);
};
g.yb = function() {
  if (this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Xc(this.j, this.off + 1, this.end);
};
g.W = function(a, b) {
  return this.j[this.off + b];
};
g.ja = function(a, b, c) {
  return 0 <= b && b < this.end - this.off ? this.j[this.off + b] : c;
};
g.Q = function() {
  return this.end - this.off;
};
var $c = function() {
  function a(a, b, c) {
    return new Xc(a, b, c);
  }
  function b(a, b) {
    return new Xc(a, b, a.length);
  }
  function c(a) {
    return new Xc(a, 0, a.length);
  }
  var d = null, d = function(d, f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.f = c;
  d.e = b;
  d.i = a;
  return d;
}();
function ad(a, b, c, d) {
  this.U = a;
  this.sa = b;
  this.meta = c;
  this.q = d;
  this.m = 31850732;
  this.D = 1536;
}
g = ad.prototype;
g.toString = function() {
  return Ab(this);
};
g.L = function() {
  return this.meta;
};
g.ga = function() {
  if (1 < Ba(this.U)) {
    return new ad(sb(this.U), this.sa, this.meta, null);
  }
  var a = hb(this.sa);
  return null == a ? null : a;
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Tb(this);
};
g.F = function(a, b) {
  return cc(this, b);
};
g.V = function() {
  return nc(K, this.meta);
};
g.Z = function() {
  return y.e(this.U, 0);
};
g.ha = function() {
  return 1 < Ba(this.U) ? new ad(sb(this.U), this.sa, this.meta, null) : null == this.sa ? K : this.sa;
};
g.N = function() {
  return this;
};
g.rb = function() {
  return this.U;
};
g.sb = function() {
  return null == this.sa ? K : this.sa;
};
g.O = function(a, b) {
  return new ad(this.U, this.sa, b, this.q);
};
g.M = function(a, b) {
  return N(b, this);
};
g.qb = function() {
  return null == this.sa ? null : this.sa;
};
function bd(a, b) {
  return 0 === Ba(a) ? b : new ad(a, b, null, null);
}
function cd(a, b) {
  a.add(b);
}
function dd(a) {
  for (var b = [];;) {
    if (G(a)) {
      b.push(H(a)), a = L(a);
    } else {
      return b;
    }
  }
}
function ed(a, b) {
  if ($b(a)) {
    return O(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && G(c)) {
      c = L(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var gd = function fd(b) {
  return null == b ? null : null == L(b) ? G(H(b)) : N(H(b), fd(L(b)));
}, hd = function() {
  function a(a, b) {
    return new V(null, function() {
      var c = G(a);
      return c ? uc(c) ? bd(tb(c), d.e(ub(c), b)) : N(H(c), d.e(J(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new V(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new V(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function p(a, b) {
        return new V(null, function() {
          var c = G(a);
          return c ? uc(c) ? bd(tb(c), p(ub(c), b)) : N(H(c), p(J(c), b)) : s(b) ? p(H(b), L(b)) : null;
        }, null, null);
      }(d.e(a, c), e);
    }
    a.B = 2;
    a.s = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = J(a);
      return b(c, d, a);
    };
    a.n = b;
    return a;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, h);
      default:
        return e.n(d, h, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.B = 2;
  d.s = e.s;
  d.C = c;
  d.f = b;
  d.e = a;
  d.n = e.n;
  return d;
}(), id = function() {
  function a(a, b, c, d) {
    return N(a, N(b, N(c, d)));
  }
  function b(a, b, c) {
    return N(a, N(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, n) {
      var p = null;
      4 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, p);
    }
    function b(a, c, d, e, f) {
      return N(a, N(c, N(d, N(e, gd(f)))));
    }
    a.B = 4;
    a.s = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var e = H(a);
      a = L(a);
      var n = H(a);
      a = J(a);
      return b(c, d, e, n, a);
    };
    a.n = b;
    return a;
  }(), c = function(c, f, h, k, l) {
    switch(arguments.length) {
      case 1:
        return G(c);
      case 2:
        return N(c, f);
      case 3:
        return b.call(this, c, f, h);
      case 4:
        return a.call(this, c, f, h, k);
      default:
        return d.n(c, f, h, k, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.B = 4;
  c.s = d.s;
  c.f = function(a) {
    return G(a);
  };
  c.e = function(a, b) {
    return N(a, b);
  };
  c.i = b;
  c.t = a;
  c.n = d.n;
  return c;
}(), jd = function() {
  function a() {
    return mb(ec);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = nb(a, c), s(d)) {
          c = H(d), d = L(d);
        } else {
          return a;
        }
      }
    }
    a.B = 2;
    a.s = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = J(a);
      return b(c, d, a);
    };
    a.n = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return a.call(this);
      case 1:
        return b;
      case 2:
        return nb(b, e);
      default:
        return c.n(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 2;
  b.s = c.s;
  b.C = a;
  b.f = function(a) {
    return a;
  };
  b.e = function(a, b) {
    return nb(a, b);
  };
  b.n = c.n;
  return b;
}(), kd = function() {
  var a = null, b = function() {
    function a(c, f, h, k) {
      var l = null;
      3 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, h, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = qb(a, c, d), s(k)) {
          c = H(k), d = H(L(k)), k = L(L(k));
        } else {
          return a;
        }
      }
    }
    a.B = 3;
    a.s = function(a) {
      var c = H(a);
      a = L(a);
      var h = H(a);
      a = L(a);
      var k = H(a);
      a = J(a);
      return b(c, h, k, a);
    };
    a.n = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return qb(a, d, e);
      default:
        return b.n(a, d, e, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.B = 3;
  a.s = b.s;
  a.i = function(a, b, e) {
    return qb(a, b, e);
  };
  a.n = b.n;
  return a;
}();
function ld(a, b, c) {
  var d = G(c);
  if (0 === b) {
    return a.C ? a.C() : a.call(null);
  }
  c = A(d);
  var e = B(d);
  if (1 === b) {
    return a.f ? a.f(c) : a.f ? a.f(c) : a.call(null, c);
  }
  var d = A(e), f = B(e);
  if (2 === b) {
    return a.e ? a.e(c, d) : a.e ? a.e(c, d) : a.call(null, c, d);
  }
  var e = A(f), h = B(f);
  if (3 === b) {
    return a.i ? a.i(c, d, e) : a.i ? a.i(c, d, e) : a.call(null, c, d, e);
  }
  var f = A(h), k = B(h);
  if (4 === b) {
    return a.t ? a.t(c, d, e, f) : a.t ? a.t(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = A(k), l = B(k);
  if (5 === b) {
    return a.R ? a.R(c, d, e, f, h) : a.R ? a.R(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = A(l), m = B(l);
  if (6 === b) {
    return a.fa ? a.fa(c, d, e, f, h, k) : a.fa ? a.fa(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = A(m), n = B(m);
  if (7 === b) {
    return a.ma ? a.ma(c, d, e, f, h, k, l) : a.ma ? a.ma(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var m = A(n), p = B(n);
  if (8 === b) {
    return a.Fa ? a.Fa(c, d, e, f, h, k, l, m) : a.Fa ? a.Fa(c, d, e, f, h, k, l, m) : a.call(null, c, d, e, f, h, k, l, m);
  }
  var n = A(p), q = B(p);
  if (9 === b) {
    return a.Ga ? a.Ga(c, d, e, f, h, k, l, m, n) : a.Ga ? a.Ga(c, d, e, f, h, k, l, m, n) : a.call(null, c, d, e, f, h, k, l, m, n);
  }
  var p = A(q), u = B(q);
  if (10 === b) {
    return a.ua ? a.ua(c, d, e, f, h, k, l, m, n, p) : a.ua ? a.ua(c, d, e, f, h, k, l, m, n, p) : a.call(null, c, d, e, f, h, k, l, m, n, p);
  }
  var q = A(u), v = B(u);
  if (11 === b) {
    return a.va ? a.va(c, d, e, f, h, k, l, m, n, p, q) : a.va ? a.va(c, d, e, f, h, k, l, m, n, p, q) : a.call(null, c, d, e, f, h, k, l, m, n, p, q);
  }
  var u = A(v), z = B(v);
  if (12 === b) {
    return a.wa ? a.wa(c, d, e, f, h, k, l, m, n, p, q, u) : a.wa ? a.wa(c, d, e, f, h, k, l, m, n, p, q, u) : a.call(null, c, d, e, f, h, k, l, m, n, p, q, u);
  }
  var v = A(z), D = B(z);
  if (13 === b) {
    return a.xa ? a.xa(c, d, e, f, h, k, l, m, n, p, q, u, v) : a.xa ? a.xa(c, d, e, f, h, k, l, m, n, p, q, u, v) : a.call(null, c, d, e, f, h, k, l, m, n, p, q, u, v);
  }
  var z = A(D), I = B(D);
  if (14 === b) {
    return a.ya ? a.ya(c, d, e, f, h, k, l, m, n, p, q, u, v, z) : a.ya ? a.ya(c, d, e, f, h, k, l, m, n, p, q, u, v, z) : a.call(null, c, d, e, f, h, k, l, m, n, p, q, u, v, z);
  }
  var D = A(I), Q = B(I);
  if (15 === b) {
    return a.za ? a.za(c, d, e, f, h, k, l, m, n, p, q, u, v, z, D) : a.za ? a.za(c, d, e, f, h, k, l, m, n, p, q, u, v, z, D) : a.call(null, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D);
  }
  var I = A(Q), T = B(Q);
  if (16 === b) {
    return a.Aa ? a.Aa(c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I) : a.Aa ? a.Aa(c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I) : a.call(null, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I);
  }
  var Q = A(T), na = B(T);
  if (17 === b) {
    return a.Ba ? a.Ba(c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q) : a.Ba ? a.Ba(c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q) : a.call(null, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q);
  }
  var T = A(na), La = B(na);
  if (18 === b) {
    return a.Ca ? a.Ca(c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q, T) : a.Ca ? a.Ca(c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q, T) : a.call(null, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q, T);
  }
  na = A(La);
  La = B(La);
  if (19 === b) {
    return a.Da ? a.Da(c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q, T, na) : a.Da ? a.Da(c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q, T, na) : a.call(null, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q, T, na);
  }
  var C = A(La);
  B(La);
  if (20 === b) {
    return a.Ea ? a.Ea(c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q, T, na, C) : a.Ea ? a.Ea(c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q, T, na, C) : a.call(null, c, d, e, f, h, k, l, m, n, p, q, u, v, z, D, I, Q, T, na, C);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var mc = function() {
  function a(a, b, c, d, e) {
    b = id.t(b, c, d, e);
    c = a.B;
    return a.s ? (d = ed(b, c + 1), d <= c ? ld(a, d, b) : a.s(b)) : a.apply(a, dd(b));
  }
  function b(a, b, c, d) {
    b = id.i(b, c, d);
    c = a.B;
    return a.s ? (d = ed(b, c + 1), d <= c ? ld(a, d, b) : a.s(b)) : a.apply(a, dd(b));
  }
  function c(a, b, c) {
    b = id.e(b, c);
    c = a.B;
    if (a.s) {
      var d = ed(b, c + 1);
      return d <= c ? ld(a, d, b) : a.s(b);
    }
    return a.apply(a, dd(b));
  }
  function d(a, b) {
    var c = a.B;
    if (a.s) {
      var d = ed(b, c + 1);
      return d <= c ? ld(a, d, b) : a.s(b);
    }
    return a.apply(a, dd(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, u) {
      var v = null;
      5 < arguments.length && (v = M(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, v);
    }
    function b(a, c, d, e, f, h) {
      c = N(c, N(d, N(e, N(f, gd(h)))));
      d = a.B;
      return a.s ? (e = ed(c, d + 1), e <= d ? ld(a, e, c) : a.s(c)) : a.apply(a, dd(c));
    }
    a.B = 5;
    a.s = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var e = H(a);
      a = L(a);
      var f = H(a);
      a = L(a);
      var h = H(a);
      a = J(a);
      return b(c, d, e, f, h, a);
    };
    a.n = b;
    return a;
  }(), e = function(e, k, l, m, n, p) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, n);
      default:
        return f.n(e, k, l, m, n, M(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.B = 5;
  e.s = f.s;
  e.e = d;
  e.i = c;
  e.t = b;
  e.R = a;
  e.n = f.n;
  return e;
}();
function md(a) {
  return G(a) ? a : null;
}
function nd(a, b) {
  for (;;) {
    if (null == G(b)) {
      return!0;
    }
    var c;
    c = H(b);
    c = a.f ? a.f(c) : a.call(null, c);
    if (s(c)) {
      c = a;
      var d = L(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
var od = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = M(Array.prototype.slice.call(arguments, 0), 0));
        return n.call(this, b);
      }
      function n(e) {
        return mc.R(a, b, c, d, e);
      }
      e.B = 0;
      e.s = function(a) {
        a = G(a);
        return n(a);
      };
      e.n = n;
      return e;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = M(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return mc.t(a, b, c, d);
      }
      d.B = 0;
      d.s = function(a) {
        a = G(a);
        return e(a);
      };
      d.n = e;
      return d;
    }();
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = null;
        0 < arguments.length && (b = M(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return mc.i(a, b, c);
      }
      c.B = 0;
      c.s = function(a) {
        a = G(a);
        return d(a);
      };
      c.n = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, p) {
      var q = null;
      4 < arguments.length && (q = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, q);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = M(Array.prototype.slice.call(arguments, 0), 0));
          return h.call(this, c);
        }
        function h(b) {
          return mc.R(a, c, d, e, hd.e(f, b));
        }
        b.B = 0;
        b.s = function(a) {
          a = G(a);
          return h(a);
        };
        b.n = h;
        return b;
      }();
    }
    a.B = 4;
    a.s = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var e = H(a);
      a = L(a);
      var f = H(a);
      a = J(a);
      return b(c, d, e, f, a);
    };
    a.n = b;
    return a;
  }(), d = function(d, h, k, l, m) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.n(d, h, k, l, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.B = 4;
  d.s = e.s;
  d.f = function(a) {
    return a;
  };
  d.e = c;
  d.i = b;
  d.t = a;
  d.n = e.n;
  return d;
}();
function pd(a, b, c, d) {
  this.state = a;
  this.meta = b;
  this.Wb = c;
  this.Eb = d;
  this.m = 6455296;
  this.D = 16386;
}
g = pd.prototype;
g.I = function() {
  return this[ba] || (this[ba] = ++ca);
};
g.Cb = function(a, b, c) {
  for (var d = G(this.Eb), e = null, f = 0, h = 0;;) {
    if (h < f) {
      a = e.W(null, h);
      var k = P.i(a, 0, null);
      a = P.i(a, 1, null);
      var l = b, m = c;
      a.t ? a.t(k, this, l, m) : a.call(null, k, this, l, m);
      h += 1;
    } else {
      if (a = G(d)) {
        d = a, uc(d) ? (e = tb(d), d = ub(d), a = e, f = O(e), e = a) : (a = H(d), k = P.i(a, 0, null), a = P.i(a, 1, null), e = k, f = b, h = c, a.t ? a.t(e, this, f, h) : a.call(null, e, this, f, h), d = L(d), e = null, f = 0), h = 0;
      } else {
        return null;
      }
    }
  }
};
g.L = function() {
  return this.meta;
};
g.tb = function() {
  return this.state;
};
g.F = function(a, b) {
  return this === b;
};
var sd = function() {
  function a(a) {
    return new pd(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = (null == c ? 0 : c ? c.m & 64 || c.ab || (c.m ? 0 : t(Fa, c)) : t(Fa, c)) ? mc.e(qd, c) : c, e = R.e(d, rd), d = R.e(d, qa);
      return new pd(a, d, e, null);
    }
    a.B = 1;
    a.s = function(a) {
      var c = H(a);
      a = J(a);
      return b(c, a);
    };
    a.n = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.n(b, M(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 1;
  b.s = c.s;
  b.f = a;
  b.n = c.n;
  return b;
}();
function td(a, b) {
  if (a instanceof pd) {
    var c = a.Wb;
    if (null != c && !s(c.f ? c.f(b) : c.call(null, b))) {
      throw Error("Assert failed: Validator rejected reference state\n" + x.f(function() {
        var a = Rc(new Pb(null, "validate", "validate", 1439230700, null), new Pb(null, "new-value", "new-value", -1567397401, null));
        return ud.f ? ud.f(a) : ud.call(null, a);
      }()));
    }
    c = a.state;
    a.state = b;
    null != a.Eb && lb(a, c, b);
    return b;
  }
  return wb(a, b);
}
var vd = function() {
  function a(a, b, c, d) {
    if (a instanceof pd) {
      var e = a.state;
      b = b.i ? b.i(e, c, d) : b.call(null, e, c, d);
      a = td(a, b);
    } else {
      a = xb.t(a, b, c, d);
    }
    return a;
  }
  function b(a, b, c) {
    if (a instanceof pd) {
      var d = a.state;
      b = b.e ? b.e(d, c) : b.call(null, d, c);
      a = td(a, b);
    } else {
      a = xb.i(a, b, c);
    }
    return a;
  }
  function c(a, b) {
    var c;
    a instanceof pd ? (c = a.state, c = b.f ? b.f(c) : b.call(null, c), c = td(a, c)) : c = xb.e(a, b);
    return c;
  }
  var d = null, e = function() {
    function a(c, d, e, f, p) {
      var q = null;
      4 < arguments.length && (q = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, q);
    }
    function b(a, c, d, e, f) {
      return a instanceof pd ? td(a, mc.R(c, a.state, d, e, f)) : xb.R(a, c, d, e, f);
    }
    a.B = 4;
    a.s = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var e = H(a);
      a = L(a);
      var f = H(a);
      a = J(a);
      return b(c, d, e, f, a);
    };
    a.n = b;
    return a;
  }(), d = function(d, h, k, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.n(d, h, k, l, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.B = 4;
  d.s = e.s;
  d.e = c;
  d.i = b;
  d.t = a;
  d.n = e.n;
  return d;
}(), wd = function() {
  function a(a, b, c, d) {
    return new V(null, function() {
      var f = G(b), p = G(c), q = G(d);
      if (f && p && q) {
        var u = N, v;
        v = H(f);
        var z = H(p), D = H(q);
        v = a.i ? a.i(v, z, D) : a.call(null, v, z, D);
        f = u(v, e.t(a, J(f), J(p), J(q)));
      } else {
        f = null;
      }
      return f;
    }, null, null);
  }
  function b(a, b, c) {
    return new V(null, function() {
      var d = G(b), f = G(c);
      if (d && f) {
        var p = N, q;
        q = H(d);
        var u = H(f);
        q = a.e ? a.e(q, u) : a.call(null, q, u);
        d = p(q, e.i(a, J(d), J(f)));
      } else {
        d = null;
      }
      return d;
    }, null, null);
  }
  function c(a, b) {
    return new V(null, function() {
      var c = G(b);
      if (c) {
        if (uc(c)) {
          for (var d = tb(c), f = O(d), p = Zc(f), q = 0;;) {
            if (q < f) {
              cd(p, function() {
                var b = y.e(d, q);
                return a.f ? a.f(b) : a.call(null, b);
              }()), q += 1;
            } else {
              break;
            }
          }
          return bd(p.U(), e.e(a, ub(c)));
        }
        return N(function() {
          var b = H(c);
          return a.f ? a.f(b) : a.call(null, b);
        }(), e.e(a, J(c)));
      }
      return null;
    }, null, null);
  }
  function d(a) {
    return function(b) {
      return function() {
        function c(d, e) {
          var f = a.f ? a.f(e) : a.call(null, e);
          return b.e ? b.e(d, f) : b.call(null, d, f);
        }
        function d(a) {
          return b.f ? b.f(a) : b.call(null, a);
        }
        function e() {
          return b.C ? b.C() : b.call(null);
        }
        var f = null, q = function() {
          function c(a, b, e) {
            var f = null;
            2 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 2), 0));
            return d.call(this, a, b, f);
          }
          function d(c, e, f) {
            e = mc.i(a, e, f);
            return b.e ? b.e(c, e) : b.call(null, c, e);
          }
          c.B = 2;
          c.s = function(a) {
            var b = H(a);
            a = L(a);
            var c = H(a);
            a = J(a);
            return d(b, c, a);
          };
          c.n = d;
          return c;
        }(), f = function(a, b, f) {
          switch(arguments.length) {
            case 0:
              return e.call(this);
            case 1:
              return d.call(this, a);
            case 2:
              return c.call(this, a, b);
            default:
              return q.n(a, b, M(arguments, 2));
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        f.B = 2;
        f.s = q.s;
        f.C = e;
        f.f = d;
        f.e = c;
        f.n = q.n;
        return f;
      }();
    };
  }
  var e = null, f = function() {
    function a(c, d, e, f, h) {
      var u = null;
      4 < arguments.length && (u = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, u);
    }
    function b(a, c, d, f, h) {
      var k = function z(a) {
        return new V(null, function() {
          var b = e.e(G, a);
          return nd(Ec, b) ? N(e.e(H, b), z(e.e(J, b))) : null;
        }, null, null);
      };
      return e.e(function() {
        return function(b) {
          return mc.e(a, b);
        };
      }(k), k(fc.n(h, f, M([d, c], 0))));
    }
    a.B = 4;
    a.s = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var e = H(a);
      a = L(a);
      var f = H(a);
      a = J(a);
      return b(c, d, e, f, a);
    };
    a.n = b;
    return a;
  }(), e = function(e, k, l, m, n) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, k);
      case 3:
        return b.call(this, e, k, l);
      case 4:
        return a.call(this, e, k, l, m);
      default:
        return f.n(e, k, l, m, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.B = 4;
  e.s = f.s;
  e.f = d;
  e.e = c;
  e.i = b;
  e.t = a;
  e.n = f.n;
  return e;
}(), xd = function() {
  function a(a, b) {
    return new V(null, function() {
      if (0 < a) {
        var f = G(b);
        return f ? N(H(f), c.e(a - 1, J(f))) : null;
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, h) {
            var k = Wa(a), l = vd.e(a, Gc), k = 0 < k ? b.e ? b.e(d, h) : b.call(null, d, h) : d;
            return 0 < l ? k : new Vb(k);
          }
          function d(a) {
            return b.f ? b.f(a) : b.call(null, a);
          }
          function l() {
            return b.C ? b.C() : b.call(null);
          }
          var m = null, m = function(a, b) {
            switch(arguments.length) {
              case 0:
                return l.call(this);
              case 1:
                return d.call(this, a);
              case 2:
                return c.call(this, a, b);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          m.C = l;
          m.f = d;
          m.e = c;
          return m;
        }();
      }(sd.f(a));
    };
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.f = b;
  c.e = a;
  return c;
}(), yd = function() {
  function a(a, b) {
    return new V(null, function(c) {
      return function() {
        return c(a, b);
      };
    }(function(a, b) {
      for (;;) {
        var c = G(b);
        if (0 < a && c) {
          var d = a - 1, c = J(c);
          a = d;
          b = c;
        } else {
          return c;
        }
      }
    }), null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, h) {
            var k = Wa(a);
            vd.e(a, Gc);
            return 0 < k ? d : b.e ? b.e(d, h) : b.call(null, d, h);
          }
          function d(a) {
            return b.f ? b.f(a) : b.call(null, a);
          }
          function l() {
            return b.C ? b.C() : b.call(null);
          }
          var m = null, m = function(a, b) {
            switch(arguments.length) {
              case 0:
                return l.call(this);
              case 1:
                return d.call(this, a);
              case 2:
                return c.call(this, a, b);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          m.C = l;
          m.f = d;
          m.e = c;
          return m;
        }();
      }(sd.f(a));
    };
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.f = b;
  c.e = a;
  return c;
}(), zd = function() {
  function a(a, b) {
    return xd.e(a, c.f(b));
  }
  function b(a) {
    return new V(null, function() {
      return N(a, c.f(a));
    }, null, null);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.f = b;
  c.e = a;
  return c;
}(), Bd = function() {
  function a(a, b) {
    return xd.e(a, c.f(b));
  }
  function b(a) {
    return new V(null, function() {
      return N(a.C ? a.C() : a.call(null), c.f(a));
    }, null, null);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.f = b;
  c.e = a;
  return c;
}(), Cd = function() {
  function a(a, c) {
    return new V(null, function() {
      var f = G(a), h = G(c);
      return f && h ? N(H(f), N(H(h), b.e(J(f), J(h)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return new V(null, function() {
        var c = wd.e(G, fc.n(e, d, M([a], 0)));
        return nd(Ec, c) ? hd.e(wd.e(H, c), mc.e(b, wd.e(J, c))) : null;
      }, null, null);
    }
    a.B = 2;
    a.s = function(a) {
      var b = H(a);
      a = L(a);
      var d = H(a);
      a = J(a);
      return c(b, d, a);
    };
    a.n = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.n(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 2;
  b.s = c.s;
  b.e = a;
  b.n = c.n;
  return b;
}();
function Dd(a, b) {
  return yd.e(1, Cd.e(zd.f(a), b));
}
var Ed = function() {
  function a(a, b) {
    return new V(null, function() {
      var f = G(b);
      if (f) {
        if (uc(f)) {
          for (var h = tb(f), k = O(h), l = Zc(k), m = 0;;) {
            if (m < k) {
              var n;
              n = y.e(h, m);
              n = a.f ? a.f(n) : a.call(null, n);
              s(n) && (n = y.e(h, m), l.add(n));
              m += 1;
            } else {
              break;
            }
          }
          return bd(l.U(), c.e(a, ub(f)));
        }
        h = H(f);
        f = J(f);
        return s(a.f ? a.f(h) : a.call(null, h)) ? N(h, c.e(a, f)) : c.e(a, f);
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function() {
        function c(f, h) {
          return s(a.f ? a.f(h) : a.call(null, h)) ? b.e ? b.e(f, h) : b.call(null, f, h) : f;
        }
        function h(a) {
          return b.f ? b.f(a) : b.call(null, a);
        }
        function k() {
          return b.C ? b.C() : b.call(null);
        }
        var l = null, l = function(a, b) {
          switch(arguments.length) {
            case 0:
              return k.call(this);
            case 1:
              return h.call(this, a);
            case 2:
              return c.call(this, a, b);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        l.C = k;
        l.f = h;
        l.e = c;
        return l;
      }();
    };
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.f = b;
  c.e = a;
  return c;
}(), Fd = function() {
  function a(a, b, c) {
    a && (a.D & 4 || a.Hb) ? (b = Fc.t(b, jd, mb(a), c), b = pb(b), a = nc(b, oc(a))) : a = Fc.t(b, fc, a, c);
    return a;
  }
  function b(a, b) {
    var c;
    null != a ? a && (a.D & 4 || a.Hb) ? (c = Cc.i(nb, mb(a), b), c = pb(c), c = nc(c, oc(a))) : c = Cc.i(Da, a, b) : c = Cc.i(fc, K, b);
    return c;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.e = b;
  c.i = a;
  return c;
}(), Gd = function() {
  function a(a, b, c) {
    var h = yc;
    for (b = G(b);;) {
      if (b) {
        var k = a;
        if (k ? k.m & 256 || k.Ab || (k.m ? 0 : t(Ia, k)) : t(Ia, k)) {
          a = R.i(a, H(b), h);
          if (h === a) {
            return c;
          }
          b = L(b);
        } else {
          return c;
        }
      } else {
        return a;
      }
    }
  }
  function b(a, b) {
    return c.i(a, b, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.e = b;
  c.i = a;
  return c;
}(), Id = function Hd(b, c, d) {
  var e = P.i(c, 0, null), f;
  a: {
    f = 1;
    for (c = G(c);;) {
      if (c && 0 < f) {
        f -= 1, c = L(c);
      } else {
        f = c;
        break a;
      }
    }
    f = void 0;
  }
  return f ? ic.i(b, e, Hd(R.e(b, e), f, d)) : ic.i(b, e, d);
};
function Jd(a, b) {
  this.K = a;
  this.j = b;
}
function Kd(a) {
  return new Jd(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Ld(a) {
  a = a.o;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Md(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Kd(a);
    d.j[0] = c;
    c = d;
    b -= 5;
  }
}
var Od = function Nd(b, c, d, e) {
  var f = new Jd(d.K, wa(d.j)), h = b.o - 1 >>> c & 31;
  5 === c ? f.j[h] = e : (d = d.j[h], b = null != d ? Nd(b, c - 5, d, e) : Md(null, c - 5, e), f.j[h] = b);
  return f;
};
function Pd(a, b) {
  throw Error("No item " + x.f(a) + " in vector of length " + x.f(b));
}
function Qd(a, b) {
  if (b >= Ld(a)) {
    return a.ea;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.j[b >>> d & 31], d = e
    } else {
      return c.j;
    }
  }
}
function Rd(a, b) {
  return 0 <= b && b < a.o ? Qd(a, b) : Pd(b, a.o);
}
var Td = function Sd(b, c, d, e, f) {
  var h = new Jd(d.K, wa(d.j));
  if (0 === c) {
    h.j[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Sd(b, c - 5, d.j[k], e, f);
    h.j[k] = b;
  }
  return h;
};
function Ud(a, b, c, d, e, f) {
  this.A = a;
  this.nb = b;
  this.j = c;
  this.v = d;
  this.start = e;
  this.end = f;
}
Ud.prototype.xb = function() {
  return this.A < this.end;
};
Ud.prototype.next = function() {
  32 === this.A - this.nb && (this.j = Qd(this.v, this.A), this.nb += 32);
  var a = this.j[this.A & 31];
  this.A += 1;
  return a;
};
function W(a, b, c, d, e, f) {
  this.meta = a;
  this.o = b;
  this.shift = c;
  this.root = d;
  this.ea = e;
  this.q = f;
  this.m = 167668511;
  this.D = 8196;
}
g = W.prototype;
g.toString = function() {
  return Ab(this);
};
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  return "number" === typeof b ? y.i(this, b, c) : c;
};
g.W = function(a, b) {
  return Rd(this, b)[b & 31];
};
g.ja = function(a, b, c) {
  return 0 <= b && b < this.o ? Qd(this, b)[b & 31] : c;
};
g.wb = function(a, b, c) {
  if (0 <= b && b < this.o) {
    return Ld(this) <= b ? (a = wa(this.ea), a[b & 31] = c, new W(this.meta, this.o, this.shift, this.root, a, null)) : new W(this.meta, this.o, this.shift, Td(this, this.shift, this.root, b, c), this.ea, null);
  }
  if (b === this.o) {
    return Da(this, c);
  }
  throw Error("Index " + x.f(b) + " out of bounds  [0," + x.f(this.o) + "]");
};
g.lb = function() {
  var a = this.o;
  return new Ud(0, 0, 0 < O(this) ? Qd(this, 0) : null, this, 0, a);
};
g.L = function() {
  return this.meta;
};
g.Q = function() {
  return this.o;
};
g.ub = function() {
  return y.e(this, 0);
};
g.vb = function() {
  return y.e(this, 1);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Tb(this);
};
g.F = function(a, b) {
  if (b instanceof W) {
    if (this.o === O(b)) {
      for (var c = yb(this), d = yb(b);;) {
        if (s(c.xb())) {
          var e = c.next(), f = d.next();
          if (!Nb.e(e, f)) {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return cc(this, b);
  }
};
g.$a = function() {
  var a = this;
  return new Vd(a.o, a.shift, function() {
    var b = a.root;
    return Wd.f ? Wd.f(b) : Wd.call(null, b);
  }(), function() {
    var b = a.ea;
    return Xd.f ? Xd.f(b) : Xd.call(null, b);
  }());
};
g.V = function() {
  return nc(ec, this.meta);
};
g.X = function(a, b) {
  return Yb.e(this, b);
};
g.Y = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.o) {
      var e = Qd(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var h = e[f], d = b.e ? b.e(d, h) : b.call(null, d, h);
            if (Wb(d)) {
              e = d;
              break a;
            }
            f += 1;
          } else {
            e = d;
            break a;
          }
        }
        e = void 0;
      }
      if (Wb(e)) {
        return b = e, Xb.f ? Xb.f(b) : Xb.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
g.ia = function(a, b, c) {
  if ("number" === typeof b) {
    return Va(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
g.N = function() {
  if (0 === this.o) {
    return null;
  }
  if (32 >= this.o) {
    return new Qb(this.ea, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.j[0];
      } else {
        a = a.j;
        break a;
      }
    }
    a = void 0;
  }
  return Yd.t ? Yd.t(this, a, 0, 0) : Yd.call(null, this, a, 0, 0);
};
g.O = function(a, b) {
  return new W(b, this.o, this.shift, this.root, this.ea, this.q);
};
g.M = function(a, b) {
  if (32 > this.o - Ld(this)) {
    for (var c = this.ea.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.ea[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new W(this.meta, this.o + 1, this.shift, this.root, d, null);
  }
  c = (d = this.o >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Kd(null), d.j[0] = this.root, e = Md(null, this.shift, new Jd(null, this.ea)), d.j[1] = e) : d = Od(this, this.shift, this.root, new Jd(null, this.ea));
  return new W(this.meta, this.o + 1, c, d, [b], null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.W(null, c);
      case 3:
        return this.ja(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return this.W(null, c);
  };
  a.i = function(a, c, d) {
    return this.ja(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(wa(b)));
};
g.f = function(a) {
  return this.W(null, a);
};
g.e = function(a, b) {
  return this.ja(null, a, b);
};
var X = new Jd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), ec = new W(null, 0, 5, X, [], 0);
function Zd(a, b, c, d, e, f) {
  this.la = a;
  this.Ia = b;
  this.A = c;
  this.off = d;
  this.meta = e;
  this.q = f;
  this.m = 32375020;
  this.D = 1536;
}
g = Zd.prototype;
g.toString = function() {
  return Ab(this);
};
g.L = function() {
  return this.meta;
};
g.ga = function() {
  if (this.off + 1 < this.Ia.length) {
    var a;
    a = this.la;
    var b = this.Ia, c = this.A, d = this.off + 1;
    a = Yd.t ? Yd.t(a, b, c, d) : Yd.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return vb(this);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Tb(this);
};
g.F = function(a, b) {
  return cc(this, b);
};
g.V = function() {
  return nc(ec, this.meta);
};
g.X = function(a, b) {
  var c = this;
  return Yb.e(function() {
    var a = c.la, b = c.A + c.off, f = O(c.la);
    return $d.i ? $d.i(a, b, f) : $d.call(null, a, b, f);
  }(), b);
};
g.Y = function(a, b, c) {
  var d = this;
  return Yb.i(function() {
    var a = d.la, b = d.A + d.off, c = O(d.la);
    return $d.i ? $d.i(a, b, c) : $d.call(null, a, b, c);
  }(), b, c);
};
g.Z = function() {
  return this.Ia[this.off];
};
g.ha = function() {
  if (this.off + 1 < this.Ia.length) {
    var a;
    a = this.la;
    var b = this.Ia, c = this.A, d = this.off + 1;
    a = Yd.t ? Yd.t(a, b, c, d) : Yd.call(null, a, b, c, d);
    return null == a ? K : a;
  }
  return ub(this);
};
g.N = function() {
  return this;
};
g.rb = function() {
  return $c.e(this.Ia, this.off);
};
g.sb = function() {
  var a = this.A + this.Ia.length;
  if (a < Ba(this.la)) {
    var b = this.la, c = Qd(this.la, a);
    return Yd.t ? Yd.t(b, c, a, 0) : Yd.call(null, b, c, a, 0);
  }
  return K;
};
g.O = function(a, b) {
  var c = this.la, d = this.Ia, e = this.A, f = this.off;
  return Yd.R ? Yd.R(c, d, e, f, b) : Yd.call(null, c, d, e, f, b);
};
g.M = function(a, b) {
  return N(b, this);
};
g.qb = function() {
  var a = this.A + this.Ia.length;
  if (a < Ba(this.la)) {
    var b = this.la, c = Qd(this.la, a);
    return Yd.t ? Yd.t(b, c, a, 0) : Yd.call(null, b, c, a, 0);
  }
  return null;
};
var Yd = function() {
  function a(a, b, c, d, l) {
    return new Zd(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Zd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Zd(a, Rd(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, h);
      case 4:
        return b.call(this, d, f, h, k);
      case 5:
        return a.call(this, d, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.i = c;
  d.t = b;
  d.R = a;
  return d;
}();
function ae(a, b, c, d, e) {
  this.meta = a;
  this.v = b;
  this.start = c;
  this.end = d;
  this.q = e;
  this.m = 166617887;
  this.D = 8192;
}
g = ae.prototype;
g.toString = function() {
  return Ab(this);
};
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  return "number" === typeof b ? y.i(this, b, c) : c;
};
g.W = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Pd(b, this.end - this.start) : y.e(this.v, this.start + b);
};
g.ja = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : y.i(this.v, this.start + b, c);
};
g.wb = function(a, b, c) {
  var d = this.start + b;
  a = this.meta;
  c = ic.i(this.v, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return be.R ? be.R(a, c, b, d, null) : be.call(null, a, c, b, d, null);
};
g.L = function() {
  return this.meta;
};
g.Q = function() {
  return this.end - this.start;
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Tb(this);
};
g.F = function(a, b) {
  return cc(this, b);
};
g.V = function() {
  return nc(ec, this.meta);
};
g.X = function(a, b) {
  return Yb.e(this, b);
};
g.Y = function(a, b, c) {
  return Yb.i(this, b, c);
};
g.ia = function(a, b, c) {
  if ("number" === typeof b) {
    return Va(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.N = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : N(y.e(a.v, e), new V(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
g.O = function(a, b) {
  var c = this.v, d = this.start, e = this.end, f = this.q;
  return be.R ? be.R(b, c, d, e, f) : be.call(null, b, c, d, e, f);
};
g.M = function(a, b) {
  var c = this.meta, d = Va(this.v, this.end, b), e = this.start, f = this.end + 1;
  return be.R ? be.R(c, d, e, f, null) : be.call(null, c, d, e, f, null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.W(null, c);
      case 3:
        return this.ja(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return this.W(null, c);
  };
  a.i = function(a, c, d) {
    return this.ja(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(wa(b)));
};
g.f = function(a) {
  return this.W(null, a);
};
g.e = function(a, b) {
  return this.ja(null, a, b);
};
function be(a, b, c, d, e) {
  for (;;) {
    if (b instanceof ae) {
      c = b.start + c, d = b.start + d, b = b.v;
    } else {
      var f = O(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new ae(a, b, c, d, e);
    }
  }
}
var $d = function() {
  function a(a, b, c) {
    return be(null, a, b, c, null);
  }
  function b(a, b) {
    return c.i(a, b, O(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.e = b;
  c.i = a;
  return c;
}();
function ce(a, b) {
  return a === b.K ? b : new Jd(a, wa(b.j));
}
function Wd(a) {
  return new Jd({}, wa(a.j));
}
function Xd(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  wc(a, 0, b, 0, a.length);
  return b;
}
var ee = function de(b, c, d, e) {
  d = ce(b.root.K, d);
  var f = b.o - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.j[f];
    b = null != h ? de(b, c - 5, h, e) : Md(b.root.K, c - 5, e);
  }
  d.j[f] = b;
  return d;
};
function Vd(a, b, c, d) {
  this.o = a;
  this.shift = b;
  this.root = c;
  this.ea = d;
  this.m = 275;
  this.D = 88;
}
g = Vd.prototype;
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.G(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return this.J(null, c);
  };
  a.i = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(wa(b)));
};
g.f = function(a) {
  return this.J(null, a);
};
g.e = function(a, b) {
  return this.G(null, a, b);
};
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  return "number" === typeof b ? y.i(this, b, c) : c;
};
g.W = function(a, b) {
  if (this.root.K) {
    return Rd(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.ja = function(a, b, c) {
  return 0 <= b && b < this.o ? y.e(this, b) : c;
};
g.Q = function() {
  if (this.root.K) {
    return this.o;
  }
  throw Error("count after persistent!");
};
g.Bb = function(a, b, c) {
  var d = this;
  if (d.root.K) {
    if (0 <= b && b < d.o) {
      return Ld(this) <= b ? d.ea[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = ce(d.root.K, k);
          if (0 === a) {
            l.j[b & 31] = c;
          } else {
            var m = b >>> a & 31, n = f(a - 5, l.j[m]);
            l.j[m] = n;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.o) {
      return nb(this, c);
    }
    throw Error("Index " + x.f(b) + " out of bounds for TransientVector of length" + x.f(d.o));
  }
  throw Error("assoc! after persistent!");
};
g.bb = function(a, b, c) {
  if ("number" === typeof b) {
    return rb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.cb = function(a, b) {
  if (this.root.K) {
    if (32 > this.o - Ld(this)) {
      this.ea[this.o & 31] = b;
    } else {
      var c = new Jd(this.root.K, this.ea), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.ea = d;
      if (this.o >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Md(this.root.K, this.shift, c);
        this.root = new Jd(this.root.K, d);
        this.shift = e;
      } else {
        this.root = ee(this, this.shift, this.root, c);
      }
    }
    this.o += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.eb = function() {
  if (this.root.K) {
    this.root.K = null;
    var a = this.o - Ld(this), b = Array(a);
    wc(this.ea, 0, b, 0, a);
    return new W(null, this.o, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function fe() {
  this.D = 0;
  this.m = 2097152;
}
fe.prototype.F = function() {
  return!1;
};
var ge = new fe;
function he(a, b) {
  return zc(sc(b) ? O(a) === O(b) ? nd(Ec, wd.e(function(a) {
    return Nb.e(R.i(b, H(a), ge), H(L(a)));
  }, a)) : null : null);
}
function ie(a, b) {
  var c = a.j;
  if (b instanceof S) {
    a: {
      for (var d = c.length, e = b.ca, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var h = c[f];
        if (h instanceof S && e === h.ca) {
          c = f;
          break a;
        }
        f += 2;
      }
      c = void 0;
    }
  } else {
    if (d = "string" == typeof b, s(s(d) ? d : "number" === typeof b)) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          e += 2;
        }
        c = void 0;
      }
    } else {
      if (b instanceof Pb) {
        a: {
          d = c.length;
          e = b.Qa;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            h = c[f];
            if (h instanceof Pb && e === h.Qa) {
              c = f;
              break a;
            }
            f += 2;
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              e += 2;
            }
            c = void 0;
          }
        } else {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (Nb.e(b, c[e])) {
                c = e;
                break a;
              }
              e += 2;
            }
            c = void 0;
          }
        }
      }
    }
  }
  return c;
}
function je(a, b, c) {
  this.j = a;
  this.A = b;
  this.ba = c;
  this.D = 0;
  this.m = 32374990;
}
g = je.prototype;
g.toString = function() {
  return Ab(this);
};
g.L = function() {
  return this.ba;
};
g.ga = function() {
  return this.A < this.j.length - 2 ? new je(this.j, this.A + 2, this.ba) : null;
};
g.Q = function() {
  return(this.j.length - this.A) / 2;
};
g.I = function() {
  return Tb(this);
};
g.F = function(a, b) {
  return cc(this, b);
};
g.V = function() {
  return nc(K, this.ba);
};
g.X = function(a, b) {
  return Dc.e(b, this);
};
g.Y = function(a, b, c) {
  return Dc.i(b, c, this);
};
g.Z = function() {
  return new W(null, 2, 5, X, [this.j[this.A], this.j[this.A + 1]], null);
};
g.ha = function() {
  return this.A < this.j.length - 2 ? new je(this.j, this.A + 2, this.ba) : K;
};
g.N = function() {
  return this;
};
g.O = function(a, b) {
  return new je(this.j, this.A, b);
};
g.M = function(a, b) {
  return N(b, this);
};
function ke(a, b, c) {
  this.j = a;
  this.A = b;
  this.o = c;
}
ke.prototype.xb = function() {
  return this.A < this.o;
};
ke.prototype.next = function() {
  var a = new W(null, 2, 5, X, [this.j[this.A], this.j[this.A + 1]], null);
  this.A += 2;
  return a;
};
function ma(a, b, c, d) {
  this.meta = a;
  this.o = b;
  this.j = c;
  this.q = d;
  this.m = 16647951;
  this.D = 8196;
}
g = ma.prototype;
g.toString = function() {
  return Ab(this);
};
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  a = ie(this, b);
  return-1 === a ? c : this.j[a + 1];
};
g.lb = function() {
  return new ke(this.j, 0, 2 * this.o);
};
g.L = function() {
  return this.meta;
};
g.Q = function() {
  return this.o;
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Ub(this);
};
g.F = function(a, b) {
  if (b && (b.m & 1024 || b.Jb)) {
    var c = this.j.length;
    if (this.o === b.Q(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.G(null, this.j[d], yc);
          if (e !== yc) {
            if (Nb.e(this.j[d + 1], e)) {
              d += 2;
            } else {
              return!1;
            }
          } else {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return he(this, b);
  }
};
g.$a = function() {
  return new me({}, this.j.length, wa(this.j));
};
g.V = function() {
  return ab(ne, this.meta);
};
g.X = function(a, b) {
  return Dc.e(b, this);
};
g.Y = function(a, b, c) {
  return Dc.i(b, c, this);
};
g.oa = function(a, b) {
  if (0 <= ie(this, b)) {
    var c = this.j.length, d = c - 2;
    if (0 === d) {
      return Ca(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new ma(this.meta, this.o - 1, d, null);
      }
      Nb.e(b, this.j[e]) || (d[f] = this.j[e], d[f + 1] = this.j[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
g.ia = function(a, b, c) {
  a = ie(this, b);
  if (-1 === a) {
    if (this.o < oe) {
      a = this.j;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new ma(this.meta, this.o + 1, e, null);
    }
    return ab(Ma(Fd.e(hc, this), b, c), this.meta);
  }
  if (c === this.j[a + 1]) {
    return this;
  }
  b = wa(this.j);
  b[a + 1] = c;
  return new ma(this.meta, this.o, b, null);
};
g.pb = function(a, b) {
  return-1 !== ie(this, b);
};
g.N = function() {
  var a = this.j;
  return 0 <= a.length - 2 ? new je(a, 0, null) : null;
};
g.O = function(a, b) {
  return new ma(b, this.o, this.j, this.q);
};
g.M = function(a, b) {
  if (tc(b)) {
    return Ma(this, y.e(b, 0), y.e(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = H(d);
    if (tc(e)) {
      c = Ma(c, y.e(e, 0), y.e(e, 1)), d = L(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.G(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return this.J(null, c);
  };
  a.i = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(wa(b)));
};
g.f = function(a) {
  return this.J(null, a);
};
g.e = function(a, b) {
  return this.G(null, a, b);
};
var ne = new ma(null, 0, [], null), oe = 8;
function me(a, b, c) {
  this.Ua = a;
  this.Ya = b;
  this.j = c;
  this.D = 56;
  this.m = 258;
}
g = me.prototype;
g.bb = function(a, b, c) {
  var d = this;
  if (s(d.Ua)) {
    a = ie(this, b);
    if (-1 === a) {
      return d.Ya + 2 <= 2 * oe ? (d.Ya += 2, d.j.push(b), d.j.push(c), this) : kd.i(function() {
        var a = d.Ya, b = d.j;
        return pe.e ? pe.e(a, b) : pe.call(null, a, b);
      }(), b, c);
    }
    c !== d.j[a + 1] && (d.j[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
g.cb = function(a, b) {
  if (s(this.Ua)) {
    if (b ? b.m & 2048 || b.Kb || (b.m ? 0 : t(Pa, b)) : t(Pa, b)) {
      return qb(this, Nc.f ? Nc.f(b) : Nc.call(null, b), Oc.f ? Oc.f(b) : Oc.call(null, b));
    }
    for (var c = G(b), d = this;;) {
      var e = H(c);
      if (s(e)) {
        var f = e, c = L(c), d = qb(d, function() {
          var a = f;
          return Nc.f ? Nc.f(a) : Nc.call(null, a);
        }(), function() {
          var a = f;
          return Oc.f ? Oc.f(a) : Oc.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.eb = function() {
  if (s(this.Ua)) {
    return this.Ua = !1, new ma(null, Ic(this.Ya), this.j, null);
  }
  throw Error("persistent! called twice");
};
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  if (s(this.Ua)) {
    return a = ie(this, b), -1 === a ? c : this.j[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.Q = function() {
  if (s(this.Ua)) {
    return Ic(this.Ya);
  }
  throw Error("count after persistent!");
};
function pe(a, b) {
  for (var c = mb(hc), d = 0;;) {
    if (d < a) {
      c = kd.i(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function qe() {
  this.na = !1;
}
function re(a, b) {
  return a === b ? !0 : U(a, b) ? !0 : Nb.e(a, b);
}
var se = function() {
  function a(a, b, c, h, k) {
    a = wa(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = wa(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.R = a;
  return c;
}();
function te(a, b) {
  var c = Array(a.length - 2);
  wc(a, 0, c, 0, 2 * b);
  wc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var ue = function() {
  function a(a, b, c, h, k, l) {
    a = a.Va(b);
    a.j[c] = h;
    a.j[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.Va(b);
    a.j[c] = h;
    return a;
  }
  var c = null, c = function(c, e, f, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, h);
      case 6:
        return a.call(this, c, e, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.t = b;
  c.fa = a;
  return c;
}();
function ve(a, b, c) {
  this.K = a;
  this.P = b;
  this.j = c;
}
g = ve.prototype;
g.Va = function(a) {
  if (a === this.K) {
    return this;
  }
  var b = Lc(this.P), c = Array(0 > b ? 4 : 2 * (b + 1));
  wc(this.j, 0, c, 0, 2 * b);
  return new ve(a, this.P, c);
};
g.fb = function() {
  var a = this.j;
  return we.f ? we.f(a) : we.call(null, a);
};
g.Na = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.P & e)) {
    return d;
  }
  var f = Lc(this.P & e - 1), e = this.j[2 * f], f = this.j[2 * f + 1];
  return null == e ? f.Na(a + 5, b, c, d) : re(c, e) ? f : d;
};
g.qa = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = Lc(this.P & h - 1);
  if (0 === (this.P & h)) {
    var l = Lc(this.P);
    if (2 * l < this.j.length) {
      var m = this.Va(a), n = m.j;
      f.na = !0;
      xc(n, 2 * k, n, 2 * (k + 1), 2 * (l - k));
      n[2 * k] = d;
      n[2 * k + 1] = e;
      m.P |= h;
      return m;
    }
    if (16 <= l) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[c >>> b & 31] = xe.qa(a, b + 5, c, d, e, f);
      for (m = k = 0;;) {
        if (32 > k) {
          0 !== (this.P >>> k & 1) && (h[k] = null != this.j[m] ? xe.qa(a, b + 5, Kb(this.j[m]), this.j[m], this.j[m + 1], f) : this.j[m + 1], m += 2), k += 1;
        } else {
          break;
        }
      }
      return new ye(a, l + 1, h);
    }
    n = Array(2 * (l + 4));
    wc(this.j, 0, n, 0, 2 * k);
    n[2 * k] = d;
    n[2 * k + 1] = e;
    wc(this.j, 2 * k, n, 2 * (k + 1), 2 * (l - k));
    f.na = !0;
    m = this.Va(a);
    m.j = n;
    m.P |= h;
    return m;
  }
  var p = this.j[2 * k], q = this.j[2 * k + 1];
  if (null == p) {
    return l = q.qa(a, b + 5, c, d, e, f), l === q ? this : ue.t(this, a, 2 * k + 1, l);
  }
  if (re(d, p)) {
    return e === q ? this : ue.t(this, a, 2 * k + 1, e);
  }
  f.na = !0;
  return ue.fa(this, a, 2 * k, null, 2 * k + 1, function() {
    var f = b + 5;
    return ze.ma ? ze.ma(a, f, p, q, c, d, e) : ze.call(null, a, f, p, q, c, d, e);
  }());
};
g.pa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = Lc(this.P & f - 1);
  if (0 === (this.P & f)) {
    var k = Lc(this.P);
    if (16 <= k) {
      f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      f[b >>> a & 31] = xe.pa(a + 5, b, c, d, e);
      for (var l = h = 0;;) {
        if (32 > h) {
          0 !== (this.P >>> h & 1) && (f[h] = null != this.j[l] ? xe.pa(a + 5, Kb(this.j[l]), this.j[l], this.j[l + 1], e) : this.j[l + 1], l += 2), h += 1;
        } else {
          break;
        }
      }
      return new ye(null, k + 1, f);
    }
    l = Array(2 * (k + 1));
    wc(this.j, 0, l, 0, 2 * h);
    l[2 * h] = c;
    l[2 * h + 1] = d;
    wc(this.j, 2 * h, l, 2 * (h + 1), 2 * (k - h));
    e.na = !0;
    return new ve(null, this.P | f, l);
  }
  var m = this.j[2 * h], n = this.j[2 * h + 1];
  if (null == m) {
    return k = n.pa(a + 5, b, c, d, e), k === n ? this : new ve(null, this.P, se.i(this.j, 2 * h + 1, k));
  }
  if (re(c, m)) {
    return d === n ? this : new ve(null, this.P, se.i(this.j, 2 * h + 1, d));
  }
  e.na = !0;
  return new ve(null, this.P, se.R(this.j, 2 * h, null, 2 * h + 1, function() {
    var e = a + 5;
    return ze.fa ? ze.fa(e, m, n, b, c, d) : ze.call(null, e, m, n, b, c, d);
  }()));
};
g.gb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.P & d)) {
    return this;
  }
  var e = Lc(this.P & d - 1), f = this.j[2 * e], h = this.j[2 * e + 1];
  return null == f ? (a = h.gb(a + 5, b, c), a === h ? this : null != a ? new ve(null, this.P, se.i(this.j, 2 * e + 1, a)) : this.P === d ? null : new ve(null, this.P ^ d, te(this.j, e))) : re(c, f) ? new ve(null, this.P ^ d, te(this.j, e)) : this;
};
var xe = new ve(null, 0, []);
function ye(a, b, c) {
  this.K = a;
  this.o = b;
  this.j = c;
}
g = ye.prototype;
g.Va = function(a) {
  return a === this.K ? this : new ye(a, this.o, wa(this.j));
};
g.fb = function() {
  var a = this.j;
  return Ae.f ? Ae.f(a) : Ae.call(null, a);
};
g.Na = function(a, b, c, d) {
  var e = this.j[b >>> a & 31];
  return null != e ? e.Na(a + 5, b, c, d) : d;
};
g.qa = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.j[h];
  if (null == k) {
    return a = ue.t(this, a, h, xe.qa(a, b + 5, c, d, e, f)), a.o += 1, a;
  }
  b = k.qa(a, b + 5, c, d, e, f);
  return b === k ? this : ue.t(this, a, h, b);
};
g.pa = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.j[f];
  if (null == h) {
    return new ye(null, this.o + 1, se.i(this.j, f, xe.pa(a + 5, b, c, d, e)));
  }
  a = h.pa(a + 5, b, c, d, e);
  return a === h ? this : new ye(null, this.o, se.i(this.j, f, a));
};
g.gb = function(a, b, c) {
  var d = b >>> a & 31, e = this.j[d];
  if (null != e) {
    a = e.gb(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.o) {
          a: {
            e = this.j;
            a = e.length;
            b = Array(2 * (this.o - 1));
            c = 0;
            for (var f = 1, h = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, h |= 1 << c), c += 1;
              } else {
                d = new ve(null, h, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new ye(null, this.o - 1, se.i(this.j, d, a));
        }
      } else {
        d = new ye(null, this.o, se.i(this.j, d, a));
      }
    }
    return d;
  }
  return this;
};
function Be(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (re(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Ce(a, b, c, d) {
  this.K = a;
  this.Ha = b;
  this.o = c;
  this.j = d;
}
g = Ce.prototype;
g.Va = function(a) {
  if (a === this.K) {
    return this;
  }
  var b = Array(2 * (this.o + 1));
  wc(this.j, 0, b, 0, 2 * this.o);
  return new Ce(a, this.Ha, this.o, b);
};
g.fb = function() {
  var a = this.j;
  return we.f ? we.f(a) : we.call(null, a);
};
g.Na = function(a, b, c, d) {
  a = Be(this.j, this.o, c);
  return 0 > a ? d : re(c, this.j[a]) ? this.j[a + 1] : d;
};
g.qa = function(a, b, c, d, e, f) {
  if (c === this.Ha) {
    b = Be(this.j, this.o, d);
    if (-1 === b) {
      if (this.j.length > 2 * this.o) {
        return a = ue.fa(this, a, 2 * this.o, d, 2 * this.o + 1, e), f.na = !0, a.o += 1, a;
      }
      c = this.j.length;
      b = Array(c + 2);
      wc(this.j, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.na = !0;
      f = this.o + 1;
      a === this.K ? (this.j = b, this.o = f, a = this) : a = new Ce(this.K, this.Ha, f, b);
      return a;
    }
    return this.j[b + 1] === e ? this : ue.t(this, a, b + 1, e);
  }
  return(new ve(a, 1 << (this.Ha >>> b & 31), [null, this, null, null])).qa(a, b, c, d, e, f);
};
g.pa = function(a, b, c, d, e) {
  return b === this.Ha ? (a = Be(this.j, this.o, c), -1 === a ? (a = 2 * this.o, b = Array(a + 2), wc(this.j, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.na = !0, new Ce(null, this.Ha, this.o + 1, b)) : Nb.e(this.j[a], d) ? this : new Ce(null, this.Ha, this.o, se.i(this.j, a + 1, d))) : (new ve(null, 1 << (this.Ha >>> a & 31), [null, this])).pa(a, b, c, d, e);
};
g.gb = function(a, b, c) {
  a = Be(this.j, this.o, c);
  return-1 === a ? this : 1 === this.o ? null : new Ce(null, this.Ha, this.o - 1, te(this.j, Ic(a)));
};
var ze = function() {
  function a(a, b, c, h, k, l, m) {
    var n = Kb(c);
    if (n === k) {
      return new Ce(null, n, 2, [c, h, l, m]);
    }
    var p = new qe;
    return xe.qa(a, b, n, c, h, p).qa(a, b, k, l, m, p);
  }
  function b(a, b, c, h, k, l) {
    var m = Kb(b);
    if (m === h) {
      return new Ce(null, m, 2, [b, c, k, l]);
    }
    var n = new qe;
    return xe.pa(a, m, b, c, n).pa(a, h, k, l, n);
  }
  var c = null, c = function(c, e, f, h, k, l, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, h, k, l);
      case 7:
        return a.call(this, c, e, f, h, k, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.fa = b;
  c.ma = a;
  return c;
}();
function De(a, b, c, d, e) {
  this.meta = a;
  this.Pa = b;
  this.A = c;
  this.S = d;
  this.q = e;
  this.D = 0;
  this.m = 32374860;
}
g = De.prototype;
g.toString = function() {
  return Ab(this);
};
g.L = function() {
  return this.meta;
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Tb(this);
};
g.F = function(a, b) {
  return cc(this, b);
};
g.V = function() {
  return nc(K, this.meta);
};
g.X = function(a, b) {
  return Dc.e(b, this);
};
g.Y = function(a, b, c) {
  return Dc.i(b, c, this);
};
g.Z = function() {
  return null == this.S ? new W(null, 2, 5, X, [this.Pa[this.A], this.Pa[this.A + 1]], null) : H(this.S);
};
g.ha = function() {
  if (null == this.S) {
    var a = this.Pa, b = this.A + 2;
    return we.i ? we.i(a, b, null) : we.call(null, a, b, null);
  }
  var a = this.Pa, b = this.A, c = L(this.S);
  return we.i ? we.i(a, b, c) : we.call(null, a, b, c);
};
g.N = function() {
  return this;
};
g.O = function(a, b) {
  return new De(b, this.Pa, this.A, this.S, this.q);
};
g.M = function(a, b) {
  return N(b, this);
};
var we = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new De(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (s(h) && (h = h.fb(), s(h))) {
            return new De(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new De(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.i(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.f = b;
  c.i = a;
  return c;
}();
function Ee(a, b, c, d, e) {
  this.meta = a;
  this.Pa = b;
  this.A = c;
  this.S = d;
  this.q = e;
  this.D = 0;
  this.m = 32374860;
}
g = Ee.prototype;
g.toString = function() {
  return Ab(this);
};
g.L = function() {
  return this.meta;
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Tb(this);
};
g.F = function(a, b) {
  return cc(this, b);
};
g.V = function() {
  return nc(K, this.meta);
};
g.X = function(a, b) {
  return Dc.e(b, this);
};
g.Y = function(a, b, c) {
  return Dc.i(b, c, this);
};
g.Z = function() {
  return H(this.S);
};
g.ha = function() {
  var a = this.Pa, b = this.A, c = L(this.S);
  return Ae.t ? Ae.t(null, a, b, c) : Ae.call(null, null, a, b, c);
};
g.N = function() {
  return this;
};
g.O = function(a, b) {
  return new Ee(b, this.Pa, this.A, this.S, this.q);
};
g.M = function(a, b) {
  return N(b, this);
};
var Ae = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (s(k) && (k = k.fb(), s(k))) {
            return new Ee(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Ee(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.t(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.f = b;
  c.t = a;
  return c;
}();
function Fe(a, b, c, d, e, f) {
  this.meta = a;
  this.o = b;
  this.root = c;
  this.da = d;
  this.ka = e;
  this.q = f;
  this.m = 16123663;
  this.D = 8196;
}
g = Fe.prototype;
g.toString = function() {
  return Ab(this);
};
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  return null == b ? this.da ? this.ka : c : null == this.root ? c : this.root.Na(0, Kb(b), b, c);
};
g.L = function() {
  return this.meta;
};
g.Q = function() {
  return this.o;
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Ub(this);
};
g.F = function(a, b) {
  return he(this, b);
};
g.$a = function() {
  return new Ge({}, this.root, this.o, this.da, this.ka);
};
g.V = function() {
  return ab(hc, this.meta);
};
g.oa = function(a, b) {
  if (null == b) {
    return this.da ? new Fe(this.meta, this.o - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.gb(0, Kb(b), b);
  return c === this.root ? this : new Fe(this.meta, this.o - 1, c, this.da, this.ka, null);
};
g.ia = function(a, b, c) {
  if (null == b) {
    return this.da && c === this.ka ? this : new Fe(this.meta, this.da ? this.o : this.o + 1, this.root, !0, c, null);
  }
  a = new qe;
  b = (null == this.root ? xe : this.root).pa(0, Kb(b), b, c, a);
  return b === this.root ? this : new Fe(this.meta, a.na ? this.o + 1 : this.o, b, this.da, this.ka, null);
};
g.pb = function(a, b) {
  return null == b ? this.da : null == this.root ? !1 : this.root.Na(0, Kb(b), b, yc) !== yc;
};
g.N = function() {
  if (0 < this.o) {
    var a = null != this.root ? this.root.fb() : null;
    return this.da ? N(new W(null, 2, 5, X, [null, this.ka], null), a) : a;
  }
  return null;
};
g.O = function(a, b) {
  return new Fe(b, this.o, this.root, this.da, this.ka, this.q);
};
g.M = function(a, b) {
  if (tc(b)) {
    return Ma(this, y.e(b, 0), y.e(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = H(d);
    if (tc(e)) {
      c = Ma(c, y.e(e, 0), y.e(e, 1)), d = L(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.G(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return this.J(null, c);
  };
  a.i = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(wa(b)));
};
g.f = function(a) {
  return this.J(null, a);
};
g.e = function(a, b) {
  return this.G(null, a, b);
};
var hc = new Fe(null, 0, null, !1, null, 0);
function Ge(a, b, c, d, e) {
  this.K = a;
  this.root = b;
  this.count = c;
  this.da = d;
  this.ka = e;
  this.D = 56;
  this.m = 258;
}
g = Ge.prototype;
g.bb = function(a, b, c) {
  return He(this, b, c);
};
g.cb = function(a, b) {
  return Ie(this, b);
};
g.eb = function() {
  var a;
  if (this.K) {
    this.K = null, a = new Fe(null, this.count, this.root, this.da, this.ka, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.J = function(a, b) {
  return null == b ? this.da ? this.ka : null : null == this.root ? null : this.root.Na(0, Kb(b), b);
};
g.G = function(a, b, c) {
  return null == b ? this.da ? this.ka : c : null == this.root ? c : this.root.Na(0, Kb(b), b, c);
};
g.Q = function() {
  if (this.K) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Ie(a, b) {
  if (a.K) {
    if (b ? b.m & 2048 || b.Kb || (b.m ? 0 : t(Pa, b)) : t(Pa, b)) {
      return He(a, Nc.f ? Nc.f(b) : Nc.call(null, b), Oc.f ? Oc.f(b) : Oc.call(null, b));
    }
    for (var c = G(b), d = a;;) {
      var e = H(c);
      if (s(e)) {
        var f = e, c = L(c), d = He(d, function() {
          var a = f;
          return Nc.f ? Nc.f(a) : Nc.call(null, a);
        }(), function() {
          var a = f;
          return Oc.f ? Oc.f(a) : Oc.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function He(a, b, c) {
  if (a.K) {
    if (null == b) {
      a.ka !== c && (a.ka = c), a.da || (a.count += 1, a.da = !0);
    } else {
      var d = new qe;
      b = (null == a.root ? xe : a.root).qa(a.K, 0, Kb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.na && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var qd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = G(a);
    for (var b = mb(hc);;) {
      if (a) {
        var e = L(L(a)), b = kd.i(b, H(a), H(L(a)));
        a = e;
      } else {
        return pb(b);
      }
    }
  }
  a.B = 0;
  a.s = function(a) {
    a = G(a);
    return b(a);
  };
  a.n = b;
  return a;
}();
function Je(a, b) {
  this.$ = a;
  this.ba = b;
  this.D = 0;
  this.m = 32374988;
}
g = Je.prototype;
g.toString = function() {
  return Ab(this);
};
g.L = function() {
  return this.ba;
};
g.ga = function() {
  var a = this.$, a = (a ? a.m & 128 || a.mb || (a.m ? 0 : t(Ga, a)) : t(Ga, a)) ? this.$.ga(null) : L(this.$);
  return null == a ? null : new Je(a, this.ba);
};
g.I = function() {
  return Tb(this);
};
g.F = function(a, b) {
  return cc(this, b);
};
g.V = function() {
  return nc(K, this.ba);
};
g.X = function(a, b) {
  return Dc.e(b, this);
};
g.Y = function(a, b, c) {
  return Dc.i(b, c, this);
};
g.Z = function() {
  return this.$.Z(null).ub();
};
g.ha = function() {
  var a = this.$, a = (a ? a.m & 128 || a.mb || (a.m ? 0 : t(Ga, a)) : t(Ga, a)) ? this.$.ga(null) : L(this.$);
  return null != a ? new Je(a, this.ba) : K;
};
g.N = function() {
  return this;
};
g.O = function(a, b) {
  return new Je(this.$, b);
};
g.M = function(a, b) {
  return N(b, this);
};
function Nc(a) {
  return Qa(a);
}
function Ke(a, b) {
  this.$ = a;
  this.ba = b;
  this.D = 0;
  this.m = 32374988;
}
g = Ke.prototype;
g.toString = function() {
  return Ab(this);
};
g.L = function() {
  return this.ba;
};
g.ga = function() {
  var a = this.$, a = (a ? a.m & 128 || a.mb || (a.m ? 0 : t(Ga, a)) : t(Ga, a)) ? this.$.ga(null) : L(this.$);
  return null == a ? null : new Ke(a, this.ba);
};
g.I = function() {
  return Tb(this);
};
g.F = function(a, b) {
  return cc(this, b);
};
g.V = function() {
  return nc(K, this.ba);
};
g.X = function(a, b) {
  return Dc.e(b, this);
};
g.Y = function(a, b, c) {
  return Dc.i(b, c, this);
};
g.Z = function() {
  return this.$.Z(null).vb();
};
g.ha = function() {
  var a = this.$, a = (a ? a.m & 128 || a.mb || (a.m ? 0 : t(Ga, a)) : t(Ga, a)) ? this.$.ga(null) : L(this.$);
  return null != a ? new Ke(a, this.ba) : K;
};
g.N = function() {
  return this;
};
g.O = function(a, b) {
  return new Ke(this.$, b);
};
g.M = function(a, b) {
  return N(b, this);
};
function Le(a) {
  return(a = G(a)) ? new Ke(a, null) : null;
}
function Oc(a) {
  return Sa(a);
}
function Me(a, b, c) {
  this.meta = a;
  this.Xa = b;
  this.q = c;
  this.m = 15077647;
  this.D = 8196;
}
g = Me.prototype;
g.toString = function() {
  return Ab(this);
};
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  return Ja(this.Xa, b) ? b : c;
};
g.L = function() {
  return this.meta;
};
g.Q = function() {
  return Ba(this.Xa);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Ub(this);
};
g.F = function(a, b) {
  return qc(b) && O(this) === O(b) && nd(function(a) {
    return function(b) {
      return Ac(a, b);
    };
  }(this), b);
};
g.$a = function() {
  return new Ne(mb(this.Xa));
};
g.V = function() {
  return nc(Oe, this.meta);
};
g.N = function() {
  var a = G(this.Xa);
  return a ? new Je(a, null) : null;
};
g.O = function(a, b) {
  return new Me(b, this.Xa, this.q);
};
g.M = function(a, b) {
  return new Me(this.meta, ic.i(this.Xa, b, null), null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.G(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return this.J(null, c);
  };
  a.i = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(wa(b)));
};
g.f = function(a) {
  return this.J(null, a);
};
g.e = function(a, b) {
  return this.G(null, a, b);
};
var Oe = new Me(null, ne, 0);
function Ne(a) {
  this.La = a;
  this.m = 259;
  this.D = 136;
}
g = Ne.prototype;
g.call = function() {
  function a(a, b, c) {
    return E.i(this.La, b, yc) === yc ? c : b;
  }
  function b(a, b) {
    return E.i(this.La, b, yc) === yc ? null : b;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.e = b;
  c.i = a;
  return c;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(wa(b)));
};
g.f = function(a) {
  return E.i(this.La, a, yc) === yc ? null : a;
};
g.e = function(a, b) {
  return E.i(this.La, a, yc) === yc ? b : a;
};
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  return E.i(this.La, b, yc) === yc ? c : b;
};
g.Q = function() {
  return O(this.La);
};
g.cb = function(a, b) {
  this.La = kd.i(this.La, b, null);
  return this;
};
g.eb = function() {
  return new Me(null, pb(this.La), null);
};
function Tc(a) {
  if (a && (a.D & 4096 || a.Mb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error("Doesn't support name: " + x.f(a));
}
var Pe = function() {
  function a(a, b, c) {
    return(a.f ? a.f(b) : a.call(null, b)) < (a.f ? a.f(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = M(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m);
    }
    function c(a, d, e, l) {
      return Cc.i(function(c, d) {
        return b.i(a, c, d);
      }, b.i(a, d, e), l);
    }
    a.B = 3;
    a.s = function(a) {
      var b = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var l = H(a);
      a = J(a);
      return c(b, d, l, a);
    };
    a.n = c;
    return a;
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.n(b, e, f, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 3;
  b.s = c.s;
  b.e = function(a, b) {
    return b;
  };
  b.i = a;
  b.n = c.n;
  return b;
}();
function Y(a, b, c, d, e, f, h) {
  var k = ia;
  try {
    ia = null == ia ? null : ia - 1;
    if (null != ia && 0 > ia) {
      return F(a, "#");
    }
    F(a, c);
    if (G(h)) {
      var l = H(h);
      b.i ? b.i(l, a, f) : b.call(null, l, a, f);
    }
    for (var m = L(h), n = ta.f(f) - 1;;) {
      if (!m || null != n && 0 === n) {
        G(m) && 0 === n && (F(a, d), F(a, "..."));
        break;
      } else {
        F(a, d);
        var p = H(m);
        c = a;
        h = f;
        b.i ? b.i(p, c, h) : b.call(null, p, c, h);
        var q = L(m);
        c = n - 1;
        m = q;
        n = c;
      }
    }
    return F(a, e);
  } finally {
    ia = k;
  }
}
var Qe = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = G(b), f = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = f.W(null, k);
        F(a, l);
        k += 1;
      } else {
        if (e = G(e)) {
          f = e, uc(f) ? (e = tb(f), h = ub(f), f = e, l = O(e), e = h, h = l) : (l = H(f), F(a, l), e = L(f), f = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.B = 1;
  a.s = function(a) {
    var d = H(a);
    a = J(a);
    return b(d, a);
  };
  a.n = b;
  return a;
}(), Re = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Se(a) {
  return'"' + x.f(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Re[a];
  })) + '"';
}
var Z = function Te(b, c, d) {
  if (null == b) {
    return F(c, "nil");
  }
  if (void 0 === b) {
    return F(c, "#\x3cundefined\x3e");
  }
  s(function() {
    var c = R.e(d, qa);
    return s(c) ? (c = b ? b.m & 131072 || b.Lb ? !0 : b.m ? !1 : t(Xa, b) : t(Xa, b)) ? oc(b) : c : c;
  }()) && (F(c, "^"), Te(oc(b), c, d), F(c, " "));
  if (null == b) {
    return F(c, "nil");
  }
  if (b.Ub) {
    return b.dc(b, c, d);
  }
  if (b && (b.m & 2147483648 || b.T)) {
    return b.H(null, c, d);
  }
  if (ua(b) === Boolean || "number" === typeof b) {
    return F(c, "" + x.f(b));
  }
  if (null != b && b.constructor === Object) {
    F(c, "#js ");
    var e = wd.e(function(c) {
      return new W(null, 2, 5, X, [Uc.f(c), b[c]], null);
    }, vc(b));
    return Ue.t ? Ue.t(e, Te, c, d) : Ue.call(null, e, Te, c, d);
  }
  return b instanceof Array ? Y(c, Te, "#js [", " ", "]", d, b) : s("string" == typeof b) ? s(pa.f(d)) ? F(c, Se(b)) : F(c, b) : kc(b) ? Qe.n(c, M(["#\x3c", "" + x.f(b), "\x3e"], 0)) : b instanceof Date ? (e = function(b, c) {
    for (var d = "" + x.f(b);;) {
      if (O(d) < c) {
        d = "0" + x.f(d);
      } else {
        return d;
      }
    }
  }, Qe.n(c, M(['#inst "', "" + x.f(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : b instanceof RegExp ? Qe.n(c, M(['#"', b.source, '"'], 0)) : (b ? b.m & 2147483648 || b.T || (b.m ? 0 : t(jb, b)) : t(jb, b)) ? kb(b, c, d) : Qe.n(c, M(["#\x3c", "" + x.f(b), "\x3e"], 0));
};
function Ve(a, b) {
  var c = new ga;
  a: {
    var d = new zb(c);
    Z(H(a), d, b);
    for (var e = G(L(a)), f = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = f.W(null, k);
        F(d, " ");
        Z(l, d, b);
        k += 1;
      } else {
        if (e = G(e)) {
          f = e, uc(f) ? (e = tb(f), h = ub(f), f = e, l = O(e), e = h, h = l) : (l = H(f), F(d, " "), Z(l, d, b), e = L(f), f = null, h = 0), k = 0;
        } else {
          break a;
        }
      }
    }
  }
  return c;
}
var ud = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = ka();
    return pc(a) ? "" : "" + x.f(Ve(a, b));
  }
  a.B = 0;
  a.s = function(a) {
    a = G(a);
    return b(a);
  };
  a.n = b;
  return a;
}();
function Ue(a, b, c, d) {
  return Y(c, function(a, c, d) {
    var k = Qa(a);
    b.i ? b.i(k, c, d) : b.call(null, k, c, d);
    F(c, " ");
    a = Sa(a);
    return b.i ? b.i(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, G(a));
}
Qb.prototype.T = !0;
Qb.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
V.prototype.T = !0;
V.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
De.prototype.T = !0;
De.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
je.prototype.T = !0;
je.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Zd.prototype.T = !0;
Zd.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Sc.prototype.T = !0;
Sc.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Fe.prototype.T = !0;
Fe.prototype.H = function(a, b, c) {
  return Ue(this, Z, b, c);
};
Ee.prototype.T = !0;
Ee.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
ae.prototype.T = !0;
ae.prototype.H = function(a, b, c) {
  return Y(b, Z, "[", " ", "]", c, this);
};
Me.prototype.T = !0;
Me.prototype.H = function(a, b, c) {
  return Y(b, Z, "#{", " ", "}", c, this);
};
ad.prototype.T = !0;
ad.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
pd.prototype.T = !0;
pd.prototype.H = function(a, b, c) {
  F(b, "#\x3cAtom: ");
  Z(this.state, b, c);
  return F(b, "\x3e");
};
Ke.prototype.T = !0;
Ke.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
W.prototype.T = !0;
W.prototype.H = function(a, b, c) {
  return Y(b, Z, "[", " ", "]", c, this);
};
Qc.prototype.T = !0;
Qc.prototype.H = function(a, b) {
  return F(b, "()");
};
ma.prototype.T = !0;
ma.prototype.H = function(a, b, c) {
  return Ue(this, Z, b, c);
};
Je.prototype.T = !0;
Je.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Pc.prototype.T = !0;
Pc.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
W.prototype.ib = !0;
W.prototype.jb = function(a, b) {
  return Bc.e(this, b);
};
ae.prototype.ib = !0;
ae.prototype.jb = function(a, b) {
  return Bc.e(this, b);
};
S.prototype.ib = !0;
S.prototype.jb = function(a, b) {
  return Mb(this, b);
};
Pb.prototype.ib = !0;
Pb.prototype.jb = function(a, b) {
  return Mb(this, b);
};
Jc = function() {
  function a(a) {
    return(Math.random.C ? Math.random.C() : Math.random.call(null)) * a;
  }
  function b() {
    return c.f(1);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.C = b;
  c.f = a;
  return c;
}();
Kc = function(a) {
  a *= Math.random.C ? Math.random.C() : Math.random.call(null);
  return Math.floor.f ? Math.floor.f(a) : Math.floor.call(null, a);
};
function We(a) {
  this.hb = a;
  this.D = 0;
  this.m = 2153775104;
}
We.prototype.I = function() {
  for (var a = ud.n(M([this], 0)), b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
};
We.prototype.H = function(a, b) {
  return F(b, '#uuid "' + x.f(this.hb) + '"');
};
We.prototype.F = function(a, b) {
  return b instanceof We && this.hb === b.hb;
};
We.prototype.toString = function() {
  return this.hb;
};
var Xe = new S(null, "y", "y", -1757859776), Ye = new S(null, "movement", "movement", 1777030977), qa = new S(null, "meta", "meta", 1499536964), Ze = new S(null, "animation", "animation", -1248293244), $e = new S(null, "stage", "stage", 1843544772), sa = new S(null, "dup", "dup", 556298533), rd = new S(null, "validator", "validator", -1966190681), $ = new S(null, "name", "name", 1843675177), af = new S(null, "neutral", "neutral", -1941956087), bf = new S(null, "renderable", "renderable", -1247325782), 
cf = new S(null, "background", "background", -863952629), df = new S(null, "facing", "facing", -854439413), ef = new S(null, "entities", "entities", 1940967403), ff = new S(null, "attacker", "attacker", 48869964), oa = new S(null, "flush-on-newline", "flush-on-newline", -151457939), gf = new S(null, "angle", "angle", 1622094254), jf = new S(null, "animation-seq", "animation-seq", 1939833135), kf = new S(null, "renderer", "renderer", 336841071), lf = new S(null, "size", "size", 1098693007), mf = new S(null, 
"sprite", "sprite", 172516848), pa = new S(null, "readably", "readably", 1129599760), nf = new S(null, "moving?", "moving?", 1843710132), ta = new S(null, "print-length", "print-length", 1931866356), of = new S(null, "id", "id", -1388402092), pf = new S(null, "current", "current", -1088038603), qf = new S(null, "identifier", "identifier", -805503498), rf = new S(null, "right", "right", -452581833), sf = new S(null, "position", "position", -2011731912), tf = new S(null, "point", "point", 1813198264), 
uf = new S(null, "attack-range", "attack-range", 519031033), vf = new S(null, "x", "x", 2099068185), wf = new S(null, "anchor", "anchor", 1549638489), xf = new S(null, "target", "target", 253001721), yf = new S(null, "frame-count", "frame-count", 1616946810), zf = new S(null, "velocity", "velocity", -581524355), Af = new S(null, "attackable", "attackable", 2099301245), Bf = new S(null, "sprite-list", "sprite-list", -1086684897), Cf = new S(null, "left", "left", -399115937);
function Df(a, b, c, d) {
  this.name = a;
  this.Sa = b;
  this.p = c;
  this.l = d;
  this.m = 2229667594;
  this.D = 8192;
  2 < arguments.length ? (this.p = c, this.l = d) : this.l = this.p = null;
}
g = Df.prototype;
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.ca : null) {
    case "point":
      return this.Sa;
    case "name":
      return this.name;
    default:
      return R.i(this.l, b, c);
  }
};
g.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Position{", ", ", "}", c, hd.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [tf, this.Sa], null)], null), this.l));
};
g.L = function() {
  return this.p;
};
g.Q = function() {
  return 2 + O(this.l);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
g.F = function(a, b) {
  return s(s(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.oa = function(a, b) {
  return Ac(new Me(null, new ma(null, 2, [$, null, tf, null], null), null), b) ? jc.e(nc(Fd.e(ne, this), this.p), b) : new Df(this.name, this.Sa, this.p, md(jc.e(this.l, b)), null);
};
g.ia = function(a, b, c) {
  return s(U.e ? U.e($, b) : U.call(null, $, b)) ? new Df(c, this.Sa, this.p, this.l, null) : s(U.e ? U.e(tf, b) : U.call(null, tf, b)) ? new Df(this.name, c, this.p, this.l, null) : new Df(this.name, this.Sa, this.p, ic.i(this.l, b, c), null);
};
g.N = function() {
  return G(hd.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [tf, this.Sa], null)], null), this.l));
};
g.O = function(a, b) {
  return new Df(this.name, this.Sa, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? Ma(this, y.e(b, 0), y.e(b, 1)) : Cc.i(Da, this, b);
};
function Ef(a) {
  return new Df(sf, a);
}
function Ff(a, b, c, d, e, f) {
  this.name = a;
  this.aa = b;
  this.anchor = c;
  this.size = d;
  this.p = e;
  this.l = f;
  this.m = 2229667594;
  this.D = 8192;
  4 < arguments.length ? (this.p = e, this.l = f) : this.l = this.p = null;
}
g = Ff.prototype;
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.ca : null) {
    case "size":
      return this.size;
    case "anchor":
      return this.anchor;
    case "sprite":
      return this.aa;
    case "name":
      return this.name;
    default:
      return R.i(this.l, b, c);
  }
};
g.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Renderable{", ", ", "}", c, hd.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [mf, this.aa], null), new W(null, 2, 5, X, [wf, this.anchor], null), new W(null, 2, 5, X, [lf, this.size], null)], null), this.l));
};
g.L = function() {
  return this.p;
};
g.Q = function() {
  return 4 + O(this.l);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
g.F = function(a, b) {
  return s(s(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.oa = function(a, b) {
  return Ac(new Me(null, new ma(null, 4, [$, null, lf, null, mf, null, wf, null], null), null), b) ? jc.e(nc(Fd.e(ne, this), this.p), b) : new Ff(this.name, this.aa, this.anchor, this.size, this.p, md(jc.e(this.l, b)), null);
};
g.ia = function(a, b, c) {
  return s(U.e ? U.e($, b) : U.call(null, $, b)) ? new Ff(c, this.aa, this.anchor, this.size, this.p, this.l, null) : s(U.e ? U.e(mf, b) : U.call(null, mf, b)) ? new Ff(this.name, c, this.anchor, this.size, this.p, this.l, null) : s(U.e ? U.e(wf, b) : U.call(null, wf, b)) ? new Ff(this.name, this.aa, c, this.size, this.p, this.l, null) : s(U.e ? U.e(lf, b) : U.call(null, lf, b)) ? new Ff(this.name, this.aa, this.anchor, c, this.p, this.l, null) : new Ff(this.name, this.aa, this.anchor, this.size, 
  this.p, ic.i(this.l, b, c), null);
};
g.N = function() {
  return G(hd.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [mf, this.aa], null), new W(null, 2, 5, X, [wf, this.anchor], null), new W(null, 2, 5, X, [lf, this.size], null)], null), this.l));
};
g.O = function(a, b) {
  return new Ff(this.name, this.aa, this.anchor, this.size, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? Ma(this, y.e(b, 0), y.e(b, 1)) : Cc.i(Da, this, b);
};
function Gf(a, b, c) {
  return new Ff(bf, a, b, c);
}
function Hf(a, b, c, d) {
  this.name = a;
  this.aa = b;
  this.p = c;
  this.l = d;
  this.m = 2229667594;
  this.D = 8192;
  2 < arguments.length ? (this.p = c, this.l = d) : this.l = this.p = null;
}
g = Hf.prototype;
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.ca : null) {
    case "sprite":
      return this.aa;
    case "name":
      return this.name;
    default:
      return R.i(this.l, b, c);
  }
};
g.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Background{", ", ", "}", c, hd.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [mf, this.aa], null)], null), this.l));
};
g.L = function() {
  return this.p;
};
g.Q = function() {
  return 2 + O(this.l);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
g.F = function(a, b) {
  return s(s(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.oa = function(a, b) {
  return Ac(new Me(null, new ma(null, 2, [$, null, mf, null], null), null), b) ? jc.e(nc(Fd.e(ne, this), this.p), b) : new Hf(this.name, this.aa, this.p, md(jc.e(this.l, b)), null);
};
g.ia = function(a, b, c) {
  return s(U.e ? U.e($, b) : U.call(null, $, b)) ? new Hf(c, this.aa, this.p, this.l, null) : s(U.e ? U.e(mf, b) : U.call(null, mf, b)) ? new Hf(this.name, c, this.p, this.l, null) : new Hf(this.name, this.aa, this.p, ic.i(this.l, b, c), null);
};
g.N = function() {
  return G(hd.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [mf, this.aa], null)], null), this.l));
};
g.O = function(a, b) {
  return new Hf(this.name, this.aa, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? Ma(this, y.e(b, 0), y.e(b, 1)) : Cc.i(Da, this, b);
};
function If(a, b, c, d, e) {
  this.name = a;
  this.Ma = b;
  this.target = c;
  this.p = d;
  this.l = e;
  this.m = 2229667594;
  this.D = 8192;
  3 < arguments.length ? (this.p = d, this.l = e) : this.l = this.p = null;
}
g = If.prototype;
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.ca : null) {
    case "target":
      return this.target;
    case "attack-range":
      return this.Ma;
    case "name":
      return this.name;
    default:
      return R.i(this.l, b, c);
  }
};
g.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Attacker{", ", ", "}", c, hd.e(new W(null, 3, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [uf, this.Ma], null), new W(null, 2, 5, X, [xf, this.target], null)], null), this.l));
};
g.L = function() {
  return this.p;
};
g.Q = function() {
  return 3 + O(this.l);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
g.F = function(a, b) {
  return s(s(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.oa = function(a, b) {
  return Ac(new Me(null, new ma(null, 3, [$, null, uf, null, xf, null], null), null), b) ? jc.e(nc(Fd.e(ne, this), this.p), b) : new If(this.name, this.Ma, this.target, this.p, md(jc.e(this.l, b)), null);
};
g.ia = function(a, b, c) {
  return s(U.e ? U.e($, b) : U.call(null, $, b)) ? new If(c, this.Ma, this.target, this.p, this.l, null) : s(U.e ? U.e(uf, b) : U.call(null, uf, b)) ? new If(this.name, c, this.target, this.p, this.l, null) : s(U.e ? U.e(xf, b) : U.call(null, xf, b)) ? new If(this.name, this.Ma, c, this.p, this.l, null) : new If(this.name, this.Ma, this.target, this.p, ic.i(this.l, b, c), null);
};
g.N = function() {
  return G(hd.e(new W(null, 3, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [uf, this.Ma], null), new W(null, 2, 5, X, [xf, this.target], null)], null), this.l));
};
g.O = function(a, b) {
  return new If(this.name, this.Ma, this.target, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? Ma(this, y.e(b, 0), y.e(b, 1)) : Cc.i(Da, this, b);
};
function Jf(a, b, c) {
  this.name = a;
  this.p = b;
  this.l = c;
  this.m = 2229667594;
  this.D = 8192;
  1 < arguments.length ? (this.p = b, this.l = c) : this.l = this.p = null;
}
g = Jf.prototype;
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.ca : null) {
    case "name":
      return this.name;
    default:
      return R.i(this.l, b, c);
  }
};
g.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Attackable{", ", ", "}", c, hd.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.l));
};
g.L = function() {
  return this.p;
};
g.Q = function() {
  return 1 + O(this.l);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
g.F = function(a, b) {
  return s(s(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.oa = function(a, b) {
  return Ac(new Me(null, new ma(null, 1, [$, null], null), null), b) ? jc.e(nc(Fd.e(ne, this), this.p), b) : new Jf(this.name, this.p, md(jc.e(this.l, b)), null);
};
g.ia = function(a, b, c) {
  return s(U.e ? U.e($, b) : U.call(null, $, b)) ? new Jf(c, this.p, this.l, null) : new Jf(this.name, this.p, ic.i(this.l, b, c), null);
};
g.N = function() {
  return G(hd.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.l));
};
g.O = function(a, b) {
  return new Jf(this.name, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? Ma(this, y.e(b, 0), y.e(b, 1)) : Cc.i(Da, this, b);
};
function Kf(a, b, c, d, e) {
  this.name = a;
  this.Ra = b;
  this.Oa = c;
  this.p = d;
  this.l = e;
  this.m = 2229667594;
  this.D = 8192;
  3 < arguments.length ? (this.p = d, this.l = e) : this.l = this.p = null;
}
g = Kf.prototype;
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.ca : null) {
    case "moving?":
      return this.Oa;
    case "velocity":
      return this.Ra;
    case "name":
      return this.name;
    default:
      return R.i(this.l, b, c);
  }
};
g.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Movement{", ", ", "}", c, hd.e(new W(null, 3, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [zf, this.Ra], null), new W(null, 2, 5, X, [nf, this.Oa], null)], null), this.l));
};
g.L = function() {
  return this.p;
};
g.Q = function() {
  return 3 + O(this.l);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
g.F = function(a, b) {
  return s(s(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.oa = function(a, b) {
  return Ac(new Me(null, new ma(null, 3, [$, null, nf, null, zf, null], null), null), b) ? jc.e(nc(Fd.e(ne, this), this.p), b) : new Kf(this.name, this.Ra, this.Oa, this.p, md(jc.e(this.l, b)), null);
};
g.ia = function(a, b, c) {
  return s(U.e ? U.e($, b) : U.call(null, $, b)) ? new Kf(c, this.Ra, this.Oa, this.p, this.l, null) : s(U.e ? U.e(zf, b) : U.call(null, zf, b)) ? new Kf(this.name, c, this.Oa, this.p, this.l, null) : s(U.e ? U.e(nf, b) : U.call(null, nf, b)) ? new Kf(this.name, this.Ra, c, this.p, this.l, null) : new Kf(this.name, this.Ra, this.Oa, this.p, ic.i(this.l, b, c), null);
};
g.N = function() {
  return G(hd.e(new W(null, 3, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [zf, this.Ra], null), new W(null, 2, 5, X, [nf, this.Oa], null)], null), this.l));
};
g.O = function(a, b) {
  return new Kf(this.name, this.Ra, this.Oa, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? Ma(this, y.e(b, 0), y.e(b, 1)) : Cc.i(Da, this, b);
};
function Lf(a, b, c, d) {
  this.name = a;
  this.angle = b;
  this.p = c;
  this.l = d;
  this.m = 2229667594;
  this.D = 8192;
  2 < arguments.length ? (this.p = c, this.l = d) : this.l = this.p = null;
}
g = Lf.prototype;
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.ca : null) {
    case "angle":
      return this.angle;
    case "name":
      return this.name;
    default:
      return R.i(this.l, b, c);
  }
};
g.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Facing{", ", ", "}", c, hd.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [gf, this.angle], null)], null), this.l));
};
g.L = function() {
  return this.p;
};
g.Q = function() {
  return 2 + O(this.l);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
g.F = function(a, b) {
  return s(s(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.oa = function(a, b) {
  return Ac(new Me(null, new ma(null, 2, [$, null, gf, null], null), null), b) ? jc.e(nc(Fd.e(ne, this), this.p), b) : new Lf(this.name, this.angle, this.p, md(jc.e(this.l, b)), null);
};
g.ia = function(a, b, c) {
  return s(U.e ? U.e($, b) : U.call(null, $, b)) ? new Lf(c, this.angle, this.p, this.l, null) : s(U.e ? U.e(gf, b) : U.call(null, gf, b)) ? new Lf(this.name, c, this.p, this.l, null) : new Lf(this.name, this.angle, this.p, ic.i(this.l, b, c), null);
};
g.N = function() {
  return G(hd.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [gf, this.angle], null)], null), this.l));
};
g.O = function(a, b) {
  return new Lf(this.name, this.angle, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? Ma(this, y.e(b, 0), y.e(b, 1)) : Cc.i(Da, this, b);
};
function Mf(a, b, c, d, e, f) {
  this.name = a;
  this.Ka = b;
  this.ta = c;
  this.current = d;
  this.p = e;
  this.l = f;
  this.m = 2229667594;
  this.D = 8192;
  4 < arguments.length ? (this.p = e, this.l = f) : this.l = this.p = null;
}
g = Mf.prototype;
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.ca : null) {
    case "current":
      return this.current;
    case "animation-seq":
      return this.ta;
    case "sprite-list":
      return this.Ka;
    case "name":
      return this.name;
    default:
      return R.i(this.l, b, c);
  }
};
g.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Animation{", ", ", "}", c, hd.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Bf, this.Ka], null), new W(null, 2, 5, X, [jf, this.ta], null), new W(null, 2, 5, X, [pf, this.current], null)], null), this.l));
};
g.L = function() {
  return this.p;
};
g.Q = function() {
  return 4 + O(this.l);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
g.F = function(a, b) {
  return s(s(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.oa = function(a, b) {
  return Ac(new Me(null, new ma(null, 4, [$, null, jf, null, pf, null, Bf, null], null), null), b) ? jc.e(nc(Fd.e(ne, this), this.p), b) : new Mf(this.name, this.Ka, this.ta, this.current, this.p, md(jc.e(this.l, b)), null);
};
g.ia = function(a, b, c) {
  return s(U.e ? U.e($, b) : U.call(null, $, b)) ? new Mf(c, this.Ka, this.ta, this.current, this.p, this.l, null) : s(U.e ? U.e(Bf, b) : U.call(null, Bf, b)) ? new Mf(this.name, c, this.ta, this.current, this.p, this.l, null) : s(U.e ? U.e(jf, b) : U.call(null, jf, b)) ? new Mf(this.name, this.Ka, c, this.current, this.p, this.l, null) : s(U.e ? U.e(pf, b) : U.call(null, pf, b)) ? new Mf(this.name, this.Ka, this.ta, c, this.p, this.l, null) : new Mf(this.name, this.Ka, this.ta, this.current, this.p, 
  ic.i(this.l, b, c), null);
};
g.N = function() {
  return G(hd.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Bf, this.Ka], null), new W(null, 2, 5, X, [jf, this.ta], null), new W(null, 2, 5, X, [pf, this.current], null)], null), this.l));
};
g.O = function(a, b) {
  return new Mf(this.name, this.Ka, this.ta, this.current, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? Ma(this, y.e(b, 0), y.e(b, 1)) : Cc.i(Da, this, b);
};
function Nf(a, b, c) {
  return new Mf(Ze, a, b, c);
}
;function Of(a, b) {
  return Ac(a, b);
}
function Pf(a, b) {
  return ic.i(a, $.f(b), b);
}
function Qf(a, b) {
  return Cc.i(function(a, b) {
    return ic.i(a, $.f(b), b);
  }, a, b);
}
function Rf() {
  var a = Sf.C ? Sf.C() : Sf.call(null);
  return Tf.f ? Tf.f(a) : Tf.call(null, a);
}
var Uf = function() {
  function a(a) {
    return new ma(null, 2, [$, qf, of, a], null);
  }
  function b() {
    return c.f(Rf());
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.C = b;
  c.f = a;
  return c;
}(), Vf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = Cc.i(function(a, b) {
      return ic.i(a, $.f(b), b);
    }, ne, a);
    return Ac(a, qf) ? a : Pf(a, Uf.C());
  }
  a.B = 0;
  a.s = function(a) {
    a = G(a);
    return b(a);
  };
  a.n = b;
  return a;
}();
function Wf(a, b) {
  var c = Le(ef.f(a));
  return Ed.e(function() {
    return function(a) {
      return Ac(a, b);
    };
  }(c), c);
}
var Xf = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = Le(ef.f(a));
    return Ed.e(function() {
      return function(a) {
        return nd(od.e(Of, a), b);
      };
    }(e), e);
  }
  a.B = 1;
  a.s = function(a) {
    var d = H(a);
    a = J(a);
    return b(d, a);
  };
  a.n = b;
  return a;
}();
function Yf(a, b) {
  var c = function() {
    var b = ef.f(a);
    return s(b) ? b : ne;
  }();
  return ic.i(a, ef, Cc.i(function() {
    return function(a, b) {
      return ic.i(a, Gd.e(b, new W(null, 2, 5, X, [qf, of], null)), b);
    };
  }(c), c, b));
}
function Zf(a) {
  return Gd.e(a, new W(null, 2, 5, X, [sf, tf], null));
}
function $f(a) {
  return Gd.e(a, new W(null, 2, 5, X, [Ye, zf], null));
}
function ag(a) {
  return Gd.e(a, new W(null, 2, 5, X, [bf, wf], null));
}
function bg(a) {
  return Gd.e(a, new W(null, 2, 5, X, [bf, lf], null));
}
function cg(a) {
  return Gd.e(a, new W(null, 2, 5, X, [Ze, Bf], null));
}
function dg(a) {
  return Gd.e(a, new W(null, 2, 5, X, [Ze, jf], null));
}
function fg(a) {
  return Gd.e(a, new W(null, 2, 5, X, [Ze, pf], null));
}
function gg(a) {
  return Gd.e(a, new W(null, 2, 5, X, [bf, mf], null)).getBounds();
}
;function hg(a, b, c) {
  var d = gg(a), e = gg(b), f = Zf(a);
  a = P.i(f, 0, null);
  var f = P.i(f, 1, null), h = Zf(b);
  b = P.i(h, 0, null);
  var h = P.i(h, 1, null), k = d.height / 2, d = d.width / 2, l = e.height / 2, e = e.width / 2;
  return!(a - d - c > b + e || b - e > a + d + c || f - k - c > h + l || h - l > f + k + c);
}
function ig(a, b) {
  var c = Zf(a), d = P.i(c, 0, null), c = P.i(c, 1, null), e = Zf(b), f = P.i(e, 0, null), e = P.i(e, 1, null);
  return Math.sqrt(Math.pow(Math.abs(d - f), 2) + Math.pow(Math.abs(c - e), 2));
}
function jg(a, b) {
  return mc.i(Pe, od.e(ig, a), b);
}
function kg(a) {
  var b = Wf(a, ff), c = Wf(a, Af);
  return pc(c) ? a : Yf(a, function() {
    return function(a, b) {
      return function h(c) {
        return new V(null, function(a, b) {
          return function() {
            for (;;) {
              var a = G(c);
              if (a) {
                if (uc(a)) {
                  var d = tb(a), e = O(d), l = Zc(e);
                  return function() {
                    for (var a = 0;;) {
                      if (a < e) {
                        var c = y.e(d, a), h = l, k = $f(c), n = Gd.e(c, new W(null, 2, 5, X, [ff, uf], null)), v = jg(c, b), La = !hg(c, v, n), c = Qf(c, new W(null, 2, 5, X, [new Kf(Ye, k, La), new If(ff, n, v)], null));
                        h.add(c);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? bd(l.U(), h(ub(a))) : bd(l.U(), null);
                }
                var v = H(a);
                return N(function() {
                  var a = $f(v), c = Gd.e(v, new W(null, 2, 5, X, [ff, uf], null)), d = jg(v, b), e = !hg(v, d, c);
                  return Qf(v, new W(null, 2, 5, X, [new Kf(Ye, a, e), new If(ff, c, d)], null));
                }(), h(J(a)));
              }
              return null;
            }
          };
        }(a, b), null, null);
      };
    }(b, c)(b);
  }());
}
;var lg;
a: {
  var mg = aa.navigator;
  if (mg) {
    var ng = mg.userAgent;
    if (ng) {
      lg = ng;
      break a;
    }
  }
  lg = "";
}
function og(a) {
  return-1 != lg.indexOf(a);
}
;var pg = og("Opera") || og("OPR"), qg = og("Trident") || og("MSIE"), rg = og("Gecko") && -1 == lg.toLowerCase().indexOf("webkit") && !(og("Trident") || og("MSIE")), sg = -1 != lg.toLowerCase().indexOf("webkit"), tg = function() {
  var a = "", b;
  if (pg && aa.opera) {
    return a = aa.opera.version, "function" == r(a) ? a() : a;
  }
  rg ? b = /rv\:([^\);]+)(\)|;)/ : qg ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : sg && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(lg)) ? a[1] : "");
  return qg && (b = (b = aa.document) ? b.documentMode : void 0, b > parseFloat(a)) ? String(b) : a;
}(), ug = {};
function vg(a) {
  var b;
  if (!(b = ug[a])) {
    b = 0;
    for (var c = String(tg).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(h) || ["", "", ""], p = m.exec(k) || ["", "", ""];
        if (0 == n[0].length && 0 == p[0].length) {
          break;
        }
        b = da(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == p[1].length ? 0 : parseInt(p[1], 10)) || da(0 == n[2].length, 0 == p[2].length) || da(n[2], p[2]);
      } while (0 == b);
    }
    b = ug[a] = 0 <= b;
  }
  return b;
}
;qg && vg("9");
!sg || vg("528");
rg && vg("1.9b") || qg && vg("8") || pg && vg("9.5") || sg && vg("528");
rg && !vg("8") || qg && vg("9");
var wg = function() {
  function a(a, b) {
    return mc.e(x, Dd(a, b));
  }
  function b(a) {
    return mc.e(x, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.f = b;
  c.e = a;
  return c;
}();
function Tf(a) {
  return "" + x.f(a.hb);
}
function Sf() {
  function a() {
    return Kc(16).toString(16);
  }
  return new We(wg.f(hd.n(Bd.e(8, a), "-", M([Bd.e(4, a), "-4", Bd.e(3, a), "-", (8 | 3 & Kc(15)).toString(16), Bd.e(3, a), "-", Bd.e(12, a)], 0))));
}
var xg = "^" + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + "-" + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + "-" + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + "-" + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + "-" + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + 
x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + "$";
if (!(xg instanceof RegExp)) {
  var yg;
  var zg = /^(?:\(\?([idmsux]*)\))?(.*)/;
  if ("string" === typeof xg) {
    var Ag = zg.exec(xg);
    yg = null == Ag ? null : 1 === O(Ag) ? H(Ag) : pb(Cc.i(nb, mb(ec), Ag));
  } else {
    throw new TypeError("re-find must match against a string.");
  }
  P.i(yg, 0, null);
  P.i(yg, 1, null);
  P.i(yg, 2, null);
}
;function Bg(a, b, c) {
  a[b] = c;
  return a;
}
;function Cg(a) {
  return PIXI.Sprite.fromFrame(a);
}
function Dg(a) {
  return PIXI.Sprite.fromImage(a);
}
function Eg(a) {
  return PIXI.Texture.fromImage(a, !1);
}
;var Fg = new PIXI.Point(.5, .5);
function Gg(a, b) {
  var c = Cg.f ? Cg.f("barbarian-neutral-down.png") : Cg.call(null, "barbarian-neutral-down.png"), d = Cg.f ? Cg.f("barbarian-run-right-down.png") : Cg.call(null, "barbarian-run-right-down.png"), e = Cg.f ? Cg.f("barbarian-run-left-down.png") : Cg.call(null, "barbarian-run-left-down.png");
  return Vf.n(M([Ef(new W(null, 2, 5, X, [a, b], null)), new Kf(Ye, .25, !1), Nf(new ma(null, 3, [af, c, rf, d, Cf, e], null), new W(null, 4, 5, X, [af, Cf, af, rf], null), 0), Gf(c, Fg, new W(null, 2, 5, X, [1, 1], null)), new If(ff, 1, null)], 0));
}
;var Hg = sd.f ? sd.f(ne) : sd.call(null, ne);
function Ig(a) {
  a = a.getLocalPosition(a.target);
  a = new ma(null, 2, [vf, a.x, Xe, a.y], null);
  return td.e ? td.e(Hg, a) : td.call(null, Hg, a);
}
;function Jg(a) {
  var b = Xf.n(a, M([Ye, df], 0)), c = Ed.e(function() {
    return function(a) {
      return Gd.e(a, new W(null, 2, 5, X, [Ye, nf], null));
    };
  }(b), b);
  return pc(c) ? a : Yf(a, function() {
    return function(a, b) {
      return function h(c) {
        return new V(null, function() {
          return function() {
            for (;;) {
              var a = G(c);
              if (a) {
                if (uc(a)) {
                  var b = tb(a), d = O(b), e = Zc(d);
                  return function() {
                    for (var a = 0;;) {
                      if (a < d) {
                        var c = y.e(b, a), h = e, k = Gd.e(c, new W(null, 2, 5, X, [df, gf], null)), l = $f(c), q = Zf(c), T = P.i(q, 0, null), q = P.i(q, 1, null), l = new W(null, 2, 5, X, [T + l * Math.cos(k), q + l * Math.sin(k)], null), k = P.i(l, 0, null), l = P.i(l, 1, null), c = Pf(c, Ef(new W(null, 2, 5, X, [k, l], null)));
                        h.add(c);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? bd(e.U(), h(ub(a))) : bd(e.U(), null);
                }
                var q = H(a);
                return N(function() {
                  var a = Gd.e(q, new W(null, 2, 5, X, [df, gf], null)), b = $f(q), c = Zf(q), d = P.i(c, 0, null), c = P.i(c, 1, null), b = new W(null, 2, 5, X, [d + b * Math.cos(a), c + b * Math.sin(a)], null), a = P.i(b, 0, null), b = P.i(b, 1, null);
                  return Pf(q, Ef(new W(null, 2, 5, X, [a, b], null)));
                }(), h(J(a)));
              }
              return null;
            }
          };
        }(a, b), null, null);
      };
    }(b, c)(c);
  }());
}
;function Kg(a, b) {
  var c = O(a);
  return Nb.e(b, c - 1) ? 0 : b + 1;
}
function Lg(a) {
  var b = yf.f(a), c = Wf.e ? Wf.e(a, Ze) : Wf.call(null, a, Ze);
  if (Nb.e((b % 15 + 15) % 15, 0)) {
    if (pc(c)) {
      return a;
    }
    var d = function() {
      return function(a, b, c) {
        return function l(d) {
          return new V(null, function() {
            return function() {
              for (;;) {
                var a = G(d);
                if (a) {
                  if (uc(a)) {
                    var b = tb(a), c = O(b), e = Zc(c);
                    return function() {
                      for (var a = 0;;) {
                        if (a < c) {
                          var d = y.e(b, a);
                          cd(e, function() {
                            var a = function() {
                              var a = d;
                              return ag.f ? ag.f(a) : ag.call(null, a);
                            }(), b = function() {
                              var a = d;
                              return bg.f ? bg.f(a) : bg.call(null, a);
                            }(), c = function() {
                              var a = d;
                              return cg.f ? cg.f(a) : cg.call(null, a);
                            }(), e = function() {
                              var a = d;
                              return dg.f ? dg.f(a) : dg.call(null, a);
                            }(), f = function() {
                              var a = d;
                              return fg.f ? fg.f(a) : fg.call(null, a);
                            }(), f = Kg(e, f), h = R.e(e, f), l = R.e(c, h), h = d, a = new W(null, 2, 5, X, [Nf.i ? Nf.i(c, e, f) : Nf.call(null, c, e, f), Gf.i ? Gf.i(l, a, b) : Gf.call(null, l, a, b)], null);
                            return Qf.e ? Qf.e(h, a) : Qf.call(null, h, a);
                          }());
                          a += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? bd(e.U(), l(ub(a))) : bd(e.U(), null);
                  }
                  var f = H(a);
                  return N(function() {
                    var a = function() {
                      var a = f;
                      return ag.f ? ag.f(a) : ag.call(null, a);
                    }(), b = function() {
                      var a = f;
                      return bg.f ? bg.f(a) : bg.call(null, a);
                    }(), c = function() {
                      var a = f;
                      return cg.f ? cg.f(a) : cg.call(null, a);
                    }(), d = function() {
                      var a = f;
                      return dg.f ? dg.f(a) : dg.call(null, a);
                    }(), e = function() {
                      var a = f;
                      return fg.f ? fg.f(a) : fg.call(null, a);
                    }(), e = Kg(d, e), h = R.e(d, e), l = R.e(c, h), h = f, a = new W(null, 2, 5, X, [Nf.i ? Nf.i(c, d, e) : Nf.call(null, c, d, e), Gf.i ? Gf.i(l, a, b) : Gf.call(null, l, a, b)], null);
                    return Qf.e ? Qf.e(h, a) : Qf.call(null, h, a);
                  }(), l(J(a)));
                }
                return null;
              }
            };
          }(a, b, c), null, null);
        };
      }(a, b, c)(c);
    }();
    return Yf.e ? Yf.e(a, d) : Yf.call(null, a, d);
  }
  return a;
}
;function Mg(a, b, c) {
  Bg(Bg(a.position, "x", b), "y", c);
  return a;
}
function Ng(a, b, c) {
  a = Bg(a, "height", 16 * b);
  return Bg(a, "width", 16 * c);
}
function Og(a) {
  for (var b = $e.f(a), c = kf.f(a), d = G(Wf(a, cf)), e = null, f = 0, h = 0;;) {
    if (h < f) {
      var k = e.W(null, h), k = Gd.e(k, new W(null, 2, 5, X, [cf, mf], null));
      b.addChild(k);
      h += 1;
    } else {
      if (d = G(d)) {
        uc(d) ? (f = tb(d), d = ub(d), e = f, f = O(f)) : (e = H(d), e = Gd.e(e, new W(null, 2, 5, X, [cf, mf], null)), b.addChild(e), d = L(d), e = null, f = 0), h = 0;
      } else {
        break;
      }
    }
  }
  d = G(Wf(a, bf));
  e = null;
  for (h = f = 0;;) {
    if (h < f) {
      var l = e.W(null, h), m = Gd.e(l, new W(null, 2, 5, X, [bf, mf], null)), k = ag(l), n = bg(l), p = P.i(n, 0, null), n = P.i(n, 1, null), q = Zf(l), l = P.i(q, 0, null), q = P.i(q, 1, null), l = Math.round(l), q = Math.round(q), m = Mg(Ng(m, p, n), l, q), k = Bg(m, "anchor", k);
      b.addChild(k);
      h += 1;
    } else {
      if (d = G(d)) {
        uc(d) ? (f = tb(d), d = ub(d), e = f, f = O(f)) : (m = H(d), f = Gd.e(m, new W(null, 2, 5, X, [bf, mf], null)), e = ag(m), k = bg(m), h = P.i(k, 0, null), k = P.i(k, 1, null), p = Zf(m), m = P.i(p, 0, null), p = P.i(p, 1, null), m = Math.round(m), p = Math.round(p), f = Mg(Ng(f, h, k), m, p), e = Bg(f, "anchor", e), b.addChild(e), d = L(d), e = null, f = 0), h = 0;
      } else {
        break;
      }
    }
  }
  c.render(b);
  return a;
}
;function Pg(a) {
  var b = Xf.n(a, M([ff, Ye], 0));
  return pc(b) ? a : Yf(a, function() {
    return function(a) {
      return function e(b) {
        return new V(null, function() {
          return function() {
            for (;;) {
              var a = G(b);
              if (a) {
                if (uc(a)) {
                  var c = tb(a), l = O(c), m = Zc(l);
                  return function() {
                    for (var a = 0;;) {
                      if (a < l) {
                        var b = y.e(c, a), e = m, f = Gd.e(b, new W(null, 2, 5, X, [ff, xf], null)), h = Zf(f), f = P.i(h, 0, null), h = P.i(h, 1, null), n = Zf(b), I = P.i(n, 0, null), n = P.i(n, 1, null), b = Pf(b, new Lf(df, Math.atan2(h - n, f - I)));
                        e.add(b);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? bd(m.U(), e(ub(a))) : bd(m.U(), null);
                }
                var n = H(a);
                return N(function() {
                  var a = Gd.e(n, new W(null, 2, 5, X, [ff, xf], null)), b = Zf(a), a = P.i(b, 0, null), b = P.i(b, 1, null), c = Zf(n), e = P.i(c, 0, null), c = P.i(c, 1, null);
                  return Pf(n, new Lf(df, Math.atan2(b - c, a - e)));
                }(), e(J(a)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(b)(b);
  }());
}
;function Qg() {
  var a = new PIXI.autoDetectRenderer(640, 640);
  document.getElementById("battlefield").appendChild(a.view);
  return a;
}
function Rg() {
  var a = new PIXI.Stage(16777215);
  Bg(a, "interactive", !0);
  Bg(a, "click", Ig);
  return a;
}
function Sg(a) {
  a = ic.i(ic.i(ic.i(a, kf, Qg()), $e, Rg()), yf, 0);
  var b;
  b = new PIXI.TilingSprite(Eg.f ? Eg.f("images/grass-tile.png") : Eg.call(null, "images/grass-tile.png"), 640, 640);
  b = Vf.n(M([new Hf(cf, b)], 0));
  var c = Gg(160, 160), d;
  d = Dg.f ? Dg.f("images/town-hall.png") : Dg.call(null, "images/town-hall.png");
  d = Vf.n(M([Ef(new W(null, 2, 5, X, [320, 320], null)), Gf(d, Fg, new W(null, 2, 5, X, [4, 4], null)), new Jf(Af)], 0));
  return Yf(a, new W(null, 3, 5, X, [b, c, d], null));
}
var Tg = sd.f ? sd.f(ne) : sd.call(null, ne);
function Ug(a) {
  var b = yf.f(a);
  a = ic.i(a, yf, b + 1);
  if (!pc(Xb.f ? Xb.f(Hg) : Xb.call(null, Hg))) {
    var b = vf.f(Xb.f ? Xb.f(Hg) : Xb.call(null, Hg)), c = Xe.f(Xb.f ? Xb.f(Hg) : Xb.call(null, Hg));
    td.e ? td.e(Hg, ne) : td.call(null, Hg, ne);
    b = Gg(b, c);
    c = Gd.e(b, new W(null, 2, 5, X, [qf, of], null));
    a = Id(a, new W(null, 2, 5, X, [ef, c], null), b);
  }
  a = kg.f ? kg.f(a) : kg.call(null, a);
  a = Pg.f ? Pg.f(a) : Pg.call(null, a);
  a = Jg.f ? Jg.f(a) : Jg.call(null, a);
  a = Lg(a);
  return Og.f ? Og.f(a) : Og.call(null, a);
}
var Wg = function Vg() {
  vd.e(Tg, Ug);
  return requestAnimFrame(Vg);
}, Xg = new PIXI.AssetLoader(["images/barbarian-run-down.json", "images/grass-tile.png", "images/town-hall.png"], !1);
Bg(Xg, "onComplete", function() {
  vd.e(Tg, Sg);
  return requestAnimFrame(Wg);
});
Xg.load();

})();
