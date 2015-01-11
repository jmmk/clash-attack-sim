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
function q(a) {
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
function da(a) {
  return Array.prototype.join.call(arguments, "");
}
function ea(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
;function fa(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ha(a, b) {
  null != a && this.append.apply(this, arguments);
}
ha.prototype.ab = "";
ha.prototype.append = function(a, b, c) {
  this.ab += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.ab += arguments[d];
    }
  }
  return this;
};
ha.prototype.clear = function() {
  this.ab = "";
};
ha.prototype.toString = function() {
  return this.ab;
};
function ia(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;if ("undefined" === typeof ja) {
  var ja = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var la = null;
if ("undefined" === typeof ma) {
  var ma = null
}
function oa() {
  return new s(null, 5, [pa, !0, qa, !0, ra, !1, sa, !1, ua, null], null);
}
function u(a) {
  return null != a && !1 !== a;
}
function v(a, b) {
  return a[q(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function va(a) {
  return null == a ? null : a.constructor;
}
function w(a, b) {
  var c = va(b), c = u(u(c) ? c.bc : c) ? c.ac : q(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function wa(a) {
  var b = a.ac;
  return u(b) ? b : "" + x(a);
}
var xa = "undefined" !== typeof Symbol && "function" === q(Symbol) ? Symbol.nc : "@@iterator";
function ya(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Aa = {}, Ba = {};
function Ca(a) {
  if (a ? a.O : a) {
    return a.O(a);
  }
  var b;
  b = Ca[q(null == a ? null : a)];
  if (!b && (b = Ca._, !b)) {
    throw w("ICounted.-count", a);
  }
  return b.call(null, a);
}
function Da(a) {
  if (a ? a.X : a) {
    return a.X(a);
  }
  var b;
  b = Da[q(null == a ? null : a)];
  if (!b && (b = Da._, !b)) {
    throw w("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
function Ea(a, b) {
  if (a ? a.L : a) {
    return a.L(a, b);
  }
  var c;
  c = Ea[q(null == a ? null : a)];
  if (!c && (c = Ea._, !c)) {
    throw w("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Ga = {}, z = function() {
  function a(a, b, c) {
    if (a ? a.ka : a) {
      return a.ka(a, b, c);
    }
    var h;
    h = z[q(null == a ? null : a)];
    if (!h && (h = z._, !h)) {
      throw w("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.Y : a) {
      return a.Y(a, b);
    }
    var c;
    c = z[q(null == a ? null : a)];
    if (!c && (c = z._, !c)) {
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
  c.f = a;
  return c;
}(), Ha = {};
function Ia(a) {
  if (a ? a.ca : a) {
    return a.ca(a);
  }
  var b;
  b = Ia[q(null == a ? null : a)];
  if (!b && (b = Ia._, !b)) {
    throw w("ISeq.-first", a);
  }
  return b.call(null, a);
}
function Ja(a) {
  if (a ? a.ja : a) {
    return a.ja(a);
  }
  var b;
  b = Ja[q(null == a ? null : a)];
  if (!b && (b = Ja._, !b)) {
    throw w("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var La = {}, Oa = {}, A = function() {
  function a(a, b, c) {
    if (a ? a.G : a) {
      return a.G(a, b, c);
    }
    var h;
    h = A[q(null == a ? null : a)];
    if (!h && (h = A._, !h)) {
      throw w("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.J : a) {
      return a.J(a, b);
    }
    var c;
    c = A[q(null == a ? null : a)];
    if (!c && (c = A._, !c)) {
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
  c.f = a;
  return c;
}();
function Pa(a, b) {
  if (a ? a.xb : a) {
    return a.xb(a, b);
  }
  var c;
  c = Pa[q(null == a ? null : a)];
  if (!c && (c = Pa._, !c)) {
    throw w("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Qa(a, b, c) {
  if (a ? a.V : a) {
    return a.V(a, b, c);
  }
  var d;
  d = Qa[q(null == a ? null : a)];
  if (!d && (d = Qa._, !d)) {
    throw w("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Ra = {};
function Sa(a, b) {
  if (a ? a.Z : a) {
    return a.Z(a, b);
  }
  var c;
  c = Sa[q(null == a ? null : a)];
  if (!c && (c = Sa._, !c)) {
    throw w("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Ua = {};
function Va(a) {
  if (a ? a.Bb : a) {
    return a.Bb();
  }
  var b;
  b = Va[q(null == a ? null : a)];
  if (!b && (b = Va._, !b)) {
    throw w("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Wa(a) {
  if (a ? a.Cb : a) {
    return a.Cb();
  }
  var b;
  b = Wa[q(null == a ? null : a)];
  if (!b && (b = Wa._, !b)) {
    throw w("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Ya = {}, Za = {};
function ab(a, b, c) {
  if (a ? a.Db : a) {
    return a.Db(a, b, c);
  }
  var d;
  d = ab[q(null == a ? null : a)];
  if (!d && (d = ab._, !d)) {
    throw w("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function bb(a) {
  if (a ? a.hb : a) {
    return a.hb(a);
  }
  var b;
  b = bb[q(null == a ? null : a)];
  if (!b && (b = bb._, !b)) {
    throw w("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var cb = {};
function db(a) {
  if (a ? a.K : a) {
    return a.K(a);
  }
  var b;
  b = db[q(null == a ? null : a)];
  if (!b && (b = db._, !b)) {
    throw w("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var eb = {};
function fb(a, b) {
  if (a ? a.N : a) {
    return a.N(a, b);
  }
  var c;
  c = fb[q(null == a ? null : a)];
  if (!c && (c = fb._, !c)) {
    throw w("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var gb = {}, ib = function() {
  function a(a, b, c) {
    if (a ? a.ba : a) {
      return a.ba(a, b, c);
    }
    var h;
    h = ib[q(null == a ? null : a)];
    if (!h && (h = ib._, !h)) {
      throw w("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.aa : a) {
      return a.aa(a, b);
    }
    var c;
    c = ib[q(null == a ? null : a)];
    if (!c && (c = ib._, !c)) {
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
  c.f = a;
  return c;
}();
function jb(a, b) {
  if (a ? a.F : a) {
    return a.F(a, b);
  }
  var c;
  c = jb[q(null == a ? null : a)];
  if (!c && (c = jb._, !c)) {
    throw w("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function kb(a) {
  if (a ? a.I : a) {
    return a.I(a);
  }
  var b;
  b = kb[q(null == a ? null : a)];
  if (!b && (b = kb._, !b)) {
    throw w("IHash.-hash", a);
  }
  return b.call(null, a);
}
var lb = {};
function mb(a) {
  if (a ? a.M : a) {
    return a.M(a);
  }
  var b;
  b = mb[q(null == a ? null : a)];
  if (!b && (b = mb._, !b)) {
    throw w("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var nb = {};
function ob(a, b) {
  if (a ? a.Kb : a) {
    return a.Kb(0, b);
  }
  var c;
  c = ob[q(null == a ? null : a)];
  if (!c && (c = ob._, !c)) {
    throw w("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var pb = {};
function rb(a, b, c) {
  if (a ? a.D : a) {
    return a.D(a, b, c);
  }
  var d;
  d = rb[q(null == a ? null : a)];
  if (!d && (d = rb._, !d)) {
    throw w("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function sb(a, b, c) {
  if (a ? a.Jb : a) {
    return a.Jb(0, b, c);
  }
  var d;
  d = sb[q(null == a ? null : a)];
  if (!d && (d = sb._, !d)) {
    throw w("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function tb(a) {
  if (a ? a.ib : a) {
    return a.ib(a);
  }
  var b;
  b = tb[q(null == a ? null : a)];
  if (!b && (b = tb._, !b)) {
    throw w("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function ub(a, b) {
  if (a ? a.lb : a) {
    return a.lb(a, b);
  }
  var c;
  c = ub[q(null == a ? null : a)];
  if (!c && (c = ub._, !c)) {
    throw w("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function vb(a) {
  if (a ? a.mb : a) {
    return a.mb(a);
  }
  var b;
  b = vb[q(null == a ? null : a)];
  if (!b && (b = vb._, !b)) {
    throw w("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function wb(a, b, c) {
  if (a ? a.kb : a) {
    return a.kb(a, b, c);
  }
  var d;
  d = wb[q(null == a ? null : a)];
  if (!d && (d = wb._, !d)) {
    throw w("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function xb(a, b, c) {
  if (a ? a.Ib : a) {
    return a.Ib(0, b, c);
  }
  var d;
  d = xb[q(null == a ? null : a)];
  if (!d && (d = xb._, !d)) {
    throw w("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function yb(a) {
  if (a ? a.Fb : a) {
    return a.Fb();
  }
  var b;
  b = yb[q(null == a ? null : a)];
  if (!b && (b = yb._, !b)) {
    throw w("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function zb(a) {
  if (a ? a.zb : a) {
    return a.zb(a);
  }
  var b;
  b = zb[q(null == a ? null : a)];
  if (!b && (b = zb._, !b)) {
    throw w("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function Ab(a) {
  if (a ? a.Ab : a) {
    return a.Ab(a);
  }
  var b;
  b = Ab[q(null == a ? null : a)];
  if (!b && (b = Ab._, !b)) {
    throw w("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Bb(a) {
  if (a ? a.yb : a) {
    return a.yb(a);
  }
  var b;
  b = Bb[q(null == a ? null : a)];
  if (!b && (b = Bb._, !b)) {
    throw w("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Cb(a, b) {
  if (a ? a.Vb : a) {
    return a.Vb(a, b);
  }
  var c;
  c = Cb[q(null == a ? null : a)];
  if (!c && (c = Cb._, !c)) {
    throw w("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var Db = function() {
  function a(a, b, c, d, e) {
    if (a ? a.Zb : a) {
      return a.Zb(a, b, c, d, e);
    }
    var n;
    n = Db[q(null == a ? null : a)];
    if (!n && (n = Db._, !n)) {
      throw w("ISwap.-swap!", a);
    }
    return n.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.Yb : a) {
      return a.Yb(a, b, c, d);
    }
    var e;
    e = Db[q(null == a ? null : a)];
    if (!e && (e = Db._, !e)) {
      throw w("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.Xb : a) {
      return a.Xb(a, b, c);
    }
    var d;
    d = Db[q(null == a ? null : a)];
    if (!d && (d = Db._, !d)) {
      throw w("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.Wb : a) {
      return a.Wb(a, b);
    }
    var c;
    c = Db[q(null == a ? null : a)];
    if (!c && (c = Db._, !c)) {
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
  e.f = c;
  e.t = b;
  e.Q = a;
  return e;
}();
function Eb(a) {
  if (a ? a.tb : a) {
    return a.tb(a);
  }
  var b;
  b = Eb[q(null == a ? null : a)];
  if (!b && (b = Eb._, !b)) {
    throw w("IIterable.-iterator", a);
  }
  return b.call(null, a);
}
function Fb(a) {
  this.cc = a;
  this.B = 0;
  this.o = 1073741824;
}
Fb.prototype.Kb = function(a, b) {
  return this.cc.append(b);
};
function Hb(a) {
  var b = new ha;
  a.D(null, new Fb(b), oa());
  return "" + x(b);
}
var Ib = "undefined" !== typeof Math.imul && 0 !== (Math.imul.e ? Math.imul.e(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.e ? Math.imul.e(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Jb(a) {
  a = Ib(a, 3432918353);
  return Ib(a << 15 | a >>> -15, 461845907);
}
function Kb(a, b) {
  var c = a ^ b;
  return Ib(c << 13 | c >>> -13, 5) + 3864292196;
}
function Lb(a, b) {
  var c = a ^ b, c = Ib(c ^ c >>> 16, 2246822507), c = Ib(c ^ c >>> 13, 3266489909);
  return c ^ c >>> 16;
}
function Mb(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Kb(c, Jb(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
    b = void 0;
  }
  b = 1 === (a.length & 1) ? b ^ Jb(a.charCodeAt(a.length - 1)) : b;
  return Lb(b, Ib(2, a.length));
}
var Nb = {}, Ob = 0;
function Qb(a) {
  255 < Ob && (Nb = {}, Ob = 0);
  var b = Nb[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Ib(31, d) + a.charCodeAt(c), c = e
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
    Nb[a] = b;
    Ob += 1;
  }
  return a = b;
}
function Rb(a) {
  a && (a.o & 4194304 || a.fc) ? a = a.I(null) : "number" === typeof a ? a = (Math.floor.i ? Math.floor.i(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Qb(a), 0 !== a && (a = Jb(a), a = Kb(0, a), a = Lb(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : kb(a);
  return a;
}
function Sb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Tb(a, b) {
  if (a.ya === b.ya) {
    return 0;
  }
  var c = u(a.ea) ? !1 : !0;
  if (u(c ? b.ea : c)) {
    return-1;
  }
  if (u(a.ea)) {
    if (!u(b.ea)) {
      return 1;
    }
    c = ia(a.ea, b.ea);
    return 0 === c ? ia(a.name, b.name) : c;
  }
  return ia(a.name, b.name);
}
function Ub(a, b, c, d, e) {
  this.ea = a;
  this.name = b;
  this.ya = c;
  this.$a = d;
  this.fa = e;
  this.o = 2154168321;
  this.B = 4096;
}
g = Ub.prototype;
g.D = function(a, b) {
  return ob(b, this.ya);
};
g.I = function() {
  var a = this.$a;
  return null != a ? a : this.$a = a = Sb(Mb(this.name), Qb(this.ea));
};
g.N = function(a, b) {
  return new Ub(this.ea, this.name, this.ya, this.$a, b);
};
g.K = function() {
  return this.fa;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return A.f(c, this, null);
      case 3:
        return A.f(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return A.f(c, this, null);
  };
  a.f = function(a, c, d) {
    return A.f(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
g.i = function(a) {
  return A.f(a, this, null);
};
g.e = function(a, b) {
  return A.f(a, this, b);
};
g.F = function(a, b) {
  return b instanceof Ub ? this.ya === b.ya : !1;
};
g.toString = function() {
  return this.ya;
};
function B(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.o & 8388608 || a.gc)) {
    return a.M(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new D(a, 0);
  }
  if (v(lb, a)) {
    return mb(a);
  }
  throw Error([x(a), x(" is not ISeqable")].join(""));
}
function F(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.o & 64 || a.jb)) {
    return a.ca(null);
  }
  a = B(a);
  return null == a ? null : Ia(a);
}
function I(a) {
  return null != a ? a && (a.o & 64 || a.jb) ? a.ja(null) : (a = B(a)) ? Ja(a) : Vb : Vb;
}
function J(a) {
  return null == a ? null : a && (a.o & 128 || a.ub) ? a.ia(null) : B(I(a));
}
var Wb = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || jb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      if (2 < arguments.length) {
        for (var l = 0, m = Array(arguments.length - 2);l < m.length;) {
          m[l] = arguments[l + 2], ++l;
        }
        l = new D(m, 0);
      }
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.e(a, d)) {
          if (J(e)) {
            a = d, d = F(e), e = J(e);
          } else {
            return b.e(d, F(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.C = 2;
    a.s = function(a) {
      var b = F(a);
      a = J(a);
      var d = F(a);
      a = I(a);
      return c(b, d, a);
    };
    a.p = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        var h = null;
        if (2 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 2);h < k.length;) {
            k[h] = arguments[h + 2], ++h;
          }
          h = new D(k, 0);
        }
        return c.p(b, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.s = c.s;
  b.i = function() {
    return!0;
  };
  b.e = a;
  b.p = c.p;
  return b;
}();
function Xb(a) {
  this.S = a;
}
Xb.prototype.next = function() {
  if (null != this.S) {
    var a = F(this.S);
    this.S = J(this.S);
    return{done:!1, value:a};
  }
  return{done:!0, value:null};
};
function Yb(a) {
  return new Xb(B(a));
}
function Zb(a, b) {
  var c = Jb(a), c = Kb(0, c);
  return Lb(c, b);
}
function $b(a) {
  var b = 0, c = 1;
  for (a = B(a);;) {
    if (null != a) {
      b += 1, c = Ib(31, c) + Rb(F(a)) | 0, a = J(a);
    } else {
      return Zb(c, b);
    }
  }
}
function ac(a) {
  var b = 0, c = 0;
  for (a = B(a);;) {
    if (null != a) {
      b += 1, c = c + Rb(F(a)) | 0, a = J(a);
    } else {
      return Zb(c, b);
    }
  }
}
Ba["null"] = !0;
Ca["null"] = function() {
  return 0;
};
Date.prototype.F = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
jb.number = function(a, b) {
  return a === b;
};
cb["function"] = !0;
db["function"] = function() {
  return null;
};
Aa["function"] = !0;
kb._ = function(a) {
  return a[ba] || (a[ba] = ++ca);
};
function bc(a) {
  this.oa = a;
  this.B = 0;
  this.o = 32768;
}
bc.prototype.hb = function() {
  return this.oa;
};
function cc(a) {
  return a instanceof bc;
}
function dc(a) {
  return bb(a);
}
var ec = function() {
  function a(a, b, c, d) {
    for (var l = Ca(a);;) {
      if (d < l) {
        var m = z.e(a, d);
        c = b.e ? b.e(c, m) : b.call(null, c, m);
        if (cc(c)) {
          return bb(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    var d = Ca(a), l = c;
    for (c = 0;;) {
      if (c < d) {
        var m = z.e(a, c), l = b.e ? b.e(l, m) : b.call(null, l, m);
        if (cc(l)) {
          return bb(l);
        }
        c += 1;
      } else {
        return l;
      }
    }
  }
  function c(a, b) {
    var c = Ca(a);
    if (0 === c) {
      return b.H ? b.H() : b.call(null);
    }
    for (var d = z.e(a, 0), l = 1;;) {
      if (l < c) {
        var m = z.e(a, l), d = b.e ? b.e(d, m) : b.call(null, d, m);
        if (cc(d)) {
          return bb(d);
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
  d.f = b;
  d.t = a;
  return d;
}(), fc = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        var m = a[d];
        c = b.e ? b.e(c, m) : b.call(null, c, m);
        if (cc(c)) {
          return bb(c);
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
        if (cc(l)) {
          return bb(l);
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
      return b.H ? b.H() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        var m = a[l], d = b.e ? b.e(d, m) : b.call(null, d, m);
        if (cc(d)) {
          return bb(d);
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
  d.f = b;
  d.t = a;
  return d;
}();
function gc(a) {
  return a ? a.o & 2 || a.Nb ? !0 : a.o ? !1 : v(Ba, a) : v(Ba, a);
}
function hc(a) {
  return a ? a.o & 16 || a.Gb ? !0 : a.o ? !1 : v(Ga, a) : v(Ga, a);
}
function ic(a, b) {
  this.j = a;
  this.A = b;
}
ic.prototype.Eb = function() {
  return this.A < this.j.length;
};
ic.prototype.next = function() {
  var a = this.j[this.A];
  this.A += 1;
  return a;
};
function D(a, b) {
  this.j = a;
  this.A = b;
  this.o = 166199550;
  this.B = 8192;
}
g = D.prototype;
g.toString = function() {
  return Hb(this);
};
g.Y = function(a, b) {
  var c = b + this.A;
  return c < this.j.length ? this.j[c] : null;
};
g.ka = function(a, b, c) {
  a = b + this.A;
  return a < this.j.length ? this.j[a] : c;
};
g.tb = function() {
  return new ic(this.j, this.A);
};
g.ia = function() {
  return this.A + 1 < this.j.length ? new D(this.j, this.A + 1) : null;
};
g.O = function() {
  return this.j.length - this.A;
};
g.I = function() {
  return $b(this);
};
g.F = function(a, b) {
  return kc.e ? kc.e(this, b) : kc.call(null, this, b);
};
g.X = function() {
  return Vb;
};
g.aa = function(a, b) {
  return fc.t(this.j, b, this.j[this.A], this.A + 1);
};
g.ba = function(a, b, c) {
  return fc.t(this.j, b, c, this.A);
};
g.ca = function() {
  return this.j[this.A];
};
g.ja = function() {
  return this.A + 1 < this.j.length ? new D(this.j, this.A + 1) : Vb;
};
g.M = function() {
  return this;
};
g.L = function(a, b) {
  return K.e ? K.e(b, this) : K.call(null, b, this);
};
D.prototype[xa] = function() {
  return Yb(this);
};
var lc = function() {
  function a(a, b) {
    return b < a.length ? new D(a, b) : null;
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
  c.i = b;
  c.e = a;
  return c;
}(), mc = function() {
  function a(a, b) {
    return lc.e(a, b);
  }
  function b(a) {
    return lc.e(a, 0);
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
  c.i = b;
  c.e = a;
  return c;
}();
jb._ = function(a, b) {
  return a === b;
};
var oc = function() {
  function a(a, b) {
    return null != a ? Ea(a, b) : Ea(Vb, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      if (2 < arguments.length) {
        for (var l = 0, m = Array(arguments.length - 2);l < m.length;) {
          m[l] = arguments[l + 2], ++l;
        }
        l = new D(m, 0);
      }
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (u(e)) {
          a = b.e(a, d), d = F(e), e = J(e);
        } else {
          return b.e(a, d);
        }
      }
    }
    a.C = 2;
    a.s = function(a) {
      var b = F(a);
      a = J(a);
      var d = F(a);
      a = I(a);
      return c(b, d, a);
    };
    a.p = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return nc;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        var h = null;
        if (2 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 2);h < k.length;) {
            k[h] = arguments[h + 2], ++h;
          }
          h = new D(k, 0);
        }
        return c.p(b, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.s = c.s;
  b.H = function() {
    return nc;
  };
  b.i = function(a) {
    return a;
  };
  b.e = a;
  b.p = c.p;
  return b;
}();
function L(a) {
  if (null != a) {
    if (a && (a.o & 2 || a.Nb)) {
      a = a.O(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (v(Ba, a)) {
            a = Ca(a);
          } else {
            a: {
              a = B(a);
              for (var b = 0;;) {
                if (gc(a)) {
                  a = b + Ca(a);
                  break a;
                }
                a = J(a);
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
var pc = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return B(a) ? F(a) : c;
      }
      if (hc(a)) {
        return z.f(a, b, c);
      }
      if (B(a)) {
        a = J(a), b -= 1;
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
        if (B(a)) {
          return F(a);
        }
        throw Error("Index out of bounds");
      }
      if (hc(a)) {
        return z.e(a, b);
      }
      if (B(a)) {
        var c = J(a), h = b - 1;
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
  c.f = a;
  return c;
}(), N = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.o & 16 || a.Gb)) {
      return a.ka(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (v(Ga, a)) {
      return z.e(a, b);
    }
    if (a ? a.o & 64 || a.jb || (a.o ? 0 : v(Ha, a)) : v(Ha, a)) {
      return pc.f(a, b, c);
    }
    throw Error([x("nth not supported on this type "), x(wa(va(a)))].join(""));
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.o & 16 || a.Gb)) {
      return a.Y(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (v(Ga, a)) {
      return z.e(a, b);
    }
    if (a ? a.o & 64 || a.jb || (a.o ? 0 : v(Ha, a)) : v(Ha, a)) {
      return pc.e(a, b);
    }
    throw Error([x("nth not supported on this type "), x(wa(va(a)))].join(""));
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
  c.f = a;
  return c;
}(), O = function() {
  function a(a, b, c) {
    return null != a ? a && (a.o & 256 || a.Hb) ? a.G(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : v(Oa, a) ? A.f(a, b, c) : c : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.o & 256 || a.Hb) ? a.J(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : v(Oa, a) ? A.e(a, b) : null;
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
  c.f = a;
  return c;
}(), P = function() {
  function a(a, b, c) {
    if (null != a) {
      a = Qa(a, b, c);
    } else {
      a: {
        a = [b];
        c = [c];
        b = a.length;
        var h = 0, k;
        for (k = tb(qc);;) {
          if (h < b) {
            var l = h + 1;
            k = k.kb(null, a[h], c[h]);
            h = l;
          } else {
            a = vb(k);
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
      if (3 < arguments.length) {
        for (var m = 0, n = Array(arguments.length - 3);m < n.length;) {
          n[m] = arguments[m + 3], ++m;
        }
        m = new D(n, 0);
      }
      return c.call(this, b, d, k, m);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.f(a, d, e), u(l)) {
          d = F(l), e = F(J(l)), l = J(J(l));
        } else {
          return a;
        }
      }
    }
    a.C = 3;
    a.s = function(a) {
      var b = F(a);
      a = J(a);
      var d = F(a);
      a = J(a);
      var l = F(a);
      a = I(a);
      return c(b, d, l, a);
    };
    a.p = c;
    return a;
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        var k = null;
        if (3 < arguments.length) {
          for (var k = 0, l = Array(arguments.length - 3);k < l.length;) {
            l[k] = arguments[k + 3], ++k;
          }
          k = new D(l, 0);
        }
        return c.p(b, e, f, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 3;
  b.s = c.s;
  b.f = a;
  b.p = c.p;
  return b;
}(), Q = function() {
  function a(a, b) {
    return null == a ? null : Sa(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      if (2 < arguments.length) {
        for (var l = 0, m = Array(arguments.length - 2);l < m.length;) {
          m[l] = arguments[l + 2], ++l;
        }
        l = new D(m, 0);
      }
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.e(a, d);
        if (u(e)) {
          d = F(e), e = J(e);
        } else {
          return a;
        }
      }
    }
    a.C = 2;
    a.s = function(a) {
      var b = F(a);
      a = J(a);
      var d = F(a);
      a = I(a);
      return c(b, d, a);
    };
    a.p = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        var h = null;
        if (2 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 2);h < k.length;) {
            k[h] = arguments[h + 2], ++h;
          }
          h = new D(k, 0);
        }
        return c.p(b, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.s = c.s;
  b.i = function(a) {
    return a;
  };
  b.e = a;
  b.p = c.p;
  return b;
}();
function rc(a) {
  var b = "function" == q(a);
  return u(b) ? b : a ? u(u(null) ? null : a.Mb) ? !0 : a.mc ? !1 : v(Aa, a) : v(Aa, a);
}
function sc(a, b) {
  this.l = a;
  this.meta = b;
  this.B = 0;
  this.o = 393217;
}
g = sc.prototype;
g.call = function() {
  function a(a, b, c, d, e, f, h, k, l, m, n, p, r, t, C, y, E, G, M, Y, ga, H) {
    a = this.l;
    return R.sb ? R.sb(a, b, c, d, e, f, h, k, l, m, n, p, r, t, C, y, E, G, M, Y, ga, H) : R.call(null, a, b, c, d, e, f, h, k, l, m, n, p, r, t, C, y, E, G, M, Y, ga, H);
  }
  function b(a, b, c, d, e, f, h, k, l, m, n, p, r, t, C, y, E, G, M, Y, ga) {
    a = this;
    return a.l.Ja ? a.l.Ja(b, c, d, e, f, h, k, l, m, n, p, r, t, C, y, E, G, M, Y, ga) : a.l.call(null, b, c, d, e, f, h, k, l, m, n, p, r, t, C, y, E, G, M, Y, ga);
  }
  function c(a, b, c, d, e, f, h, k, l, m, n, p, r, t, C, y, E, G, M, Y) {
    a = this;
    return a.l.Ia ? a.l.Ia(b, c, d, e, f, h, k, l, m, n, p, r, t, C, y, E, G, M, Y) : a.l.call(null, b, c, d, e, f, h, k, l, m, n, p, r, t, C, y, E, G, M, Y);
  }
  function d(a, b, c, d, e, f, h, k, l, m, n, p, r, t, C, y, E, G, M) {
    a = this;
    return a.l.Ha ? a.l.Ha(b, c, d, e, f, h, k, l, m, n, p, r, t, C, y, E, G, M) : a.l.call(null, b, c, d, e, f, h, k, l, m, n, p, r, t, C, y, E, G, M);
  }
  function e(a, b, c, d, e, f, h, k, l, m, n, p, r, t, C, y, E, G) {
    a = this;
    return a.l.Ga ? a.l.Ga(b, c, d, e, f, h, k, l, m, n, p, r, t, C, y, E, G) : a.l.call(null, b, c, d, e, f, h, k, l, m, n, p, r, t, C, y, E, G);
  }
  function f(a, b, c, d, e, f, h, k, l, m, n, p, r, t, C, y, E) {
    a = this;
    return a.l.Fa ? a.l.Fa(b, c, d, e, f, h, k, l, m, n, p, r, t, C, y, E) : a.l.call(null, b, c, d, e, f, h, k, l, m, n, p, r, t, C, y, E);
  }
  function h(a, b, c, d, e, f, h, k, l, m, n, p, r, t, C, y) {
    a = this;
    return a.l.Ea ? a.l.Ea(b, c, d, e, f, h, k, l, m, n, p, r, t, C, y) : a.l.call(null, b, c, d, e, f, h, k, l, m, n, p, r, t, C, y);
  }
  function k(a, b, c, d, e, f, h, k, l, m, n, p, r, t, C) {
    a = this;
    return a.l.Da ? a.l.Da(b, c, d, e, f, h, k, l, m, n, p, r, t, C) : a.l.call(null, b, c, d, e, f, h, k, l, m, n, p, r, t, C);
  }
  function l(a, b, c, d, e, f, h, k, l, m, n, p, r, t) {
    a = this;
    return a.l.Ca ? a.l.Ca(b, c, d, e, f, h, k, l, m, n, p, r, t) : a.l.call(null, b, c, d, e, f, h, k, l, m, n, p, r, t);
  }
  function m(a, b, c, d, e, f, h, k, l, m, n, p, r) {
    a = this;
    return a.l.Ba ? a.l.Ba(b, c, d, e, f, h, k, l, m, n, p, r) : a.l.call(null, b, c, d, e, f, h, k, l, m, n, p, r);
  }
  function n(a, b, c, d, e, f, h, k, l, m, n, p) {
    a = this;
    return a.l.Aa ? a.l.Aa(b, c, d, e, f, h, k, l, m, n, p) : a.l.call(null, b, c, d, e, f, h, k, l, m, n, p);
  }
  function p(a, b, c, d, e, f, h, k, l, m, n) {
    a = this;
    return a.l.za ? a.l.za(b, c, d, e, f, h, k, l, m, n) : a.l.call(null, b, c, d, e, f, h, k, l, m, n);
  }
  function r(a, b, c, d, e, f, h, k, l, m) {
    a = this;
    return a.l.La ? a.l.La(b, c, d, e, f, h, k, l, m) : a.l.call(null, b, c, d, e, f, h, k, l, m);
  }
  function t(a, b, c, d, e, f, h, k, l) {
    a = this;
    return a.l.Ka ? a.l.Ka(b, c, d, e, f, h, k, l) : a.l.call(null, b, c, d, e, f, h, k, l);
  }
  function y(a, b, c, d, e, f, h, k) {
    a = this;
    return a.l.na ? a.l.na(b, c, d, e, f, h, k) : a.l.call(null, b, c, d, e, f, h, k);
  }
  function C(a, b, c, d, e, f, h) {
    a = this;
    return a.l.$ ? a.l.$(b, c, d, e, f, h) : a.l.call(null, b, c, d, e, f, h);
  }
  function E(a, b, c, d, e, f) {
    a = this;
    return a.l.Q ? a.l.Q(b, c, d, e, f) : a.l.call(null, b, c, d, e, f);
  }
  function G(a, b, c, d, e) {
    a = this;
    return a.l.t ? a.l.t(b, c, d, e) : a.l.call(null, b, c, d, e);
  }
  function M(a, b, c, d) {
    a = this;
    return a.l.f ? a.l.f(b, c, d) : a.l.call(null, b, c, d);
  }
  function Y(a, b, c) {
    a = this;
    return a.l.e ? a.l.e(b, c) : a.l.call(null, b, c);
  }
  function ga(a, b) {
    a = this;
    return a.l.i ? a.l.i(b) : a.l.call(null, b);
  }
  function Na(a) {
    a = this;
    return a.l.H ? a.l.H() : a.l.call(null);
  }
  var H = null, H = function(H, ka, na, ta, za, Fa, Ka, Ma, Ta, Xa, $a, hb, qb, Gb, Pb, jc, Mc, zd, de, Ze, Rf, Tg) {
    switch(arguments.length) {
      case 1:
        return Na.call(this, H);
      case 2:
        return ga.call(this, H, ka);
      case 3:
        return Y.call(this, H, ka, na);
      case 4:
        return M.call(this, H, ka, na, ta);
      case 5:
        return G.call(this, H, ka, na, ta, za);
      case 6:
        return E.call(this, H, ka, na, ta, za, Fa);
      case 7:
        return C.call(this, H, ka, na, ta, za, Fa, Ka);
      case 8:
        return y.call(this, H, ka, na, ta, za, Fa, Ka, Ma);
      case 9:
        return t.call(this, H, ka, na, ta, za, Fa, Ka, Ma, Ta);
      case 10:
        return r.call(this, H, ka, na, ta, za, Fa, Ka, Ma, Ta, Xa);
      case 11:
        return p.call(this, H, ka, na, ta, za, Fa, Ka, Ma, Ta, Xa, $a);
      case 12:
        return n.call(this, H, ka, na, ta, za, Fa, Ka, Ma, Ta, Xa, $a, hb);
      case 13:
        return m.call(this, H, ka, na, ta, za, Fa, Ka, Ma, Ta, Xa, $a, hb, qb);
      case 14:
        return l.call(this, H, ka, na, ta, za, Fa, Ka, Ma, Ta, Xa, $a, hb, qb, Gb);
      case 15:
        return k.call(this, H, ka, na, ta, za, Fa, Ka, Ma, Ta, Xa, $a, hb, qb, Gb, Pb);
      case 16:
        return h.call(this, H, ka, na, ta, za, Fa, Ka, Ma, Ta, Xa, $a, hb, qb, Gb, Pb, jc);
      case 17:
        return f.call(this, H, ka, na, ta, za, Fa, Ka, Ma, Ta, Xa, $a, hb, qb, Gb, Pb, jc, Mc);
      case 18:
        return e.call(this, H, ka, na, ta, za, Fa, Ka, Ma, Ta, Xa, $a, hb, qb, Gb, Pb, jc, Mc, zd);
      case 19:
        return d.call(this, H, ka, na, ta, za, Fa, Ka, Ma, Ta, Xa, $a, hb, qb, Gb, Pb, jc, Mc, zd, de);
      case 20:
        return c.call(this, H, ka, na, ta, za, Fa, Ka, Ma, Ta, Xa, $a, hb, qb, Gb, Pb, jc, Mc, zd, de, Ze);
      case 21:
        return b.call(this, H, ka, na, ta, za, Fa, Ka, Ma, Ta, Xa, $a, hb, qb, Gb, Pb, jc, Mc, zd, de, Ze, Rf);
      case 22:
        return a.call(this, H, ka, na, ta, za, Fa, Ka, Ma, Ta, Xa, $a, hb, qb, Gb, Pb, jc, Mc, zd, de, Ze, Rf, Tg);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  H.i = Na;
  H.e = ga;
  H.f = Y;
  H.t = M;
  H.Q = G;
  H.$ = E;
  H.na = C;
  H.Ka = y;
  H.La = t;
  H.za = r;
  H.Aa = p;
  H.Ba = n;
  H.Ca = m;
  H.Da = l;
  H.Ea = k;
  H.Fa = h;
  H.Ga = f;
  H.Ha = e;
  H.Ia = d;
  H.Ja = c;
  H.Pb = b;
  H.sb = a;
  return H;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
g.H = function() {
  return this.l.H ? this.l.H() : this.l.call(null);
};
g.i = function(a) {
  return this.l.i ? this.l.i(a) : this.l.call(null, a);
};
g.e = function(a, b) {
  return this.l.e ? this.l.e(a, b) : this.l.call(null, a, b);
};
g.f = function(a, b, c) {
  return this.l.f ? this.l.f(a, b, c) : this.l.call(null, a, b, c);
};
g.t = function(a, b, c, d) {
  return this.l.t ? this.l.t(a, b, c, d) : this.l.call(null, a, b, c, d);
};
g.Q = function(a, b, c, d, e) {
  return this.l.Q ? this.l.Q(a, b, c, d, e) : this.l.call(null, a, b, c, d, e);
};
g.$ = function(a, b, c, d, e, f) {
  return this.l.$ ? this.l.$(a, b, c, d, e, f) : this.l.call(null, a, b, c, d, e, f);
};
g.na = function(a, b, c, d, e, f, h) {
  return this.l.na ? this.l.na(a, b, c, d, e, f, h) : this.l.call(null, a, b, c, d, e, f, h);
};
g.Ka = function(a, b, c, d, e, f, h, k) {
  return this.l.Ka ? this.l.Ka(a, b, c, d, e, f, h, k) : this.l.call(null, a, b, c, d, e, f, h, k);
};
g.La = function(a, b, c, d, e, f, h, k, l) {
  return this.l.La ? this.l.La(a, b, c, d, e, f, h, k, l) : this.l.call(null, a, b, c, d, e, f, h, k, l);
};
g.za = function(a, b, c, d, e, f, h, k, l, m) {
  return this.l.za ? this.l.za(a, b, c, d, e, f, h, k, l, m) : this.l.call(null, a, b, c, d, e, f, h, k, l, m);
};
g.Aa = function(a, b, c, d, e, f, h, k, l, m, n) {
  return this.l.Aa ? this.l.Aa(a, b, c, d, e, f, h, k, l, m, n) : this.l.call(null, a, b, c, d, e, f, h, k, l, m, n);
};
g.Ba = function(a, b, c, d, e, f, h, k, l, m, n, p) {
  return this.l.Ba ? this.l.Ba(a, b, c, d, e, f, h, k, l, m, n, p) : this.l.call(null, a, b, c, d, e, f, h, k, l, m, n, p);
};
g.Ca = function(a, b, c, d, e, f, h, k, l, m, n, p, r) {
  return this.l.Ca ? this.l.Ca(a, b, c, d, e, f, h, k, l, m, n, p, r) : this.l.call(null, a, b, c, d, e, f, h, k, l, m, n, p, r);
};
g.Da = function(a, b, c, d, e, f, h, k, l, m, n, p, r, t) {
  return this.l.Da ? this.l.Da(a, b, c, d, e, f, h, k, l, m, n, p, r, t) : this.l.call(null, a, b, c, d, e, f, h, k, l, m, n, p, r, t);
};
g.Ea = function(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y) {
  return this.l.Ea ? this.l.Ea(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y) : this.l.call(null, a, b, c, d, e, f, h, k, l, m, n, p, r, t, y);
};
g.Fa = function(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C) {
  return this.l.Fa ? this.l.Fa(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C) : this.l.call(null, a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C);
};
g.Ga = function(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E) {
  return this.l.Ga ? this.l.Ga(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E) : this.l.call(null, a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E);
};
g.Ha = function(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G) {
  return this.l.Ha ? this.l.Ha(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G) : this.l.call(null, a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G);
};
g.Ia = function(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M) {
  return this.l.Ia ? this.l.Ia(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M) : this.l.call(null, a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M);
};
g.Ja = function(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M, Y) {
  return this.l.Ja ? this.l.Ja(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M, Y) : this.l.call(null, a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M, Y);
};
g.Pb = function(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M, Y, ga) {
  var Na = this.l;
  return R.sb ? R.sb(Na, a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M, Y, ga) : R.call(null, Na, a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M, Y, ga);
};
g.Mb = !0;
g.N = function(a, b) {
  return new sc(this.l, b);
};
g.K = function() {
  return this.meta;
};
function tc(a, b) {
  return rc(a) && !(a ? a.o & 262144 || a.kc || (a.o ? 0 : v(eb, a)) : v(eb, a)) ? new sc(a, b) : null == a ? null : fb(a, b);
}
function uc(a) {
  var b = null != a;
  return(b ? a ? a.o & 131072 || a.Sb || (a.o ? 0 : v(cb, a)) : v(cb, a) : b) ? db(a) : null;
}
function vc(a) {
  return null == a ? !1 : a ? a.o & 4096 || a.ic ? !0 : a.o ? !1 : v(Ya, a) : v(Ya, a);
}
function wc(a) {
  return null == a ? !1 : a ? a.o & 1024 || a.Qb ? !0 : a.o ? !1 : v(Ra, a) : v(Ra, a);
}
function xc(a) {
  return a ? a.o & 16384 || a.jc ? !0 : a.o ? !1 : v(Za, a) : v(Za, a);
}
function yc(a) {
  return a ? a.B & 512 || a.ec ? !0 : !1 : !1;
}
function zc(a) {
  var b = [];
  fa(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function Ac(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
function Bc(a, b, c, d, e) {
  b += e - 1;
  for (d += e - 1;0 !== e;) {
    c[d] = a[b], d -= 1, e -= 1, b -= 1;
  }
}
var Cc = {};
function Dc(a) {
  return u(a) ? !0 : !1;
}
function Ec(a, b) {
  return O.f(a, b, Cc) === Cc ? !1 : !0;
}
function Fc(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (va(a) === va(b)) {
    return a && (a.B & 2048 || a.qb) ? a.rb(null, b) : ia(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
var Gc = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = Fc(N.e(a, h), N.e(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = L(a), h = L(b);
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
}(), Ic = function() {
  function a(a, b, c) {
    for (c = B(c);;) {
      if (c) {
        var h = F(c);
        b = a.e ? a.e(b, h) : a.call(null, b, h);
        if (cc(b)) {
          return bb(b);
        }
        c = J(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = B(b);
    if (c) {
      var h = F(c), c = J(c);
      return Hc.f ? Hc.f(a, h, c) : Hc.call(null, a, h, c);
    }
    return a.H ? a.H() : a.call(null);
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
  c.f = a;
  return c;
}(), Hc = function() {
  function a(a, b, c) {
    return c && (c.o & 524288 || c.Ub) ? c.ba(null, a, b) : c instanceof Array ? fc.f(c, a, b) : "string" === typeof c ? fc.f(c, a, b) : v(gb, c) ? ib.f(c, a, b) : Ic.f(a, b, c);
  }
  function b(a, b) {
    return b && (b.o & 524288 || b.Ub) ? b.aa(null, a) : b instanceof Array ? fc.e(b, a) : "string" === typeof b ? fc.e(b, a) : v(gb, b) ? ib.e(b, a) : Ic.e(a, b);
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
  c.f = a;
  return c;
}();
function Jc(a) {
  return a;
}
var Kc = function() {
  function a(a, b, c, h) {
    a = a.i ? a.i(b) : a.call(null, b);
    c = Hc.f(a, c, h);
    return a.i ? a.i(c) : a.call(null, c);
  }
  function b(a, b, f) {
    return c.t(a, b, b.H ? b.H() : b.call(null), f);
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
  c.f = b;
  c.t = a;
  return c;
}();
function Lc(a, b) {
  return(a % b + b) % b;
}
function Nc(a) {
  a = (a - a % 2) / 2;
  return 0 <= a ? Math.floor.i ? Math.floor.i(a) : Math.floor.call(null, a) : Math.ceil.i ? Math.ceil.i(a) : Math.ceil.call(null, a);
}
function Oc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var x = function() {
  function a(a) {
    return null == a ? "" : da(a);
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      if (1 < arguments.length) {
        for (var k = 0, l = Array(arguments.length - 1);k < l.length;) {
          l[k] = arguments[k + 1], ++k;
        }
        k = new D(l, 0);
      }
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new ha(b.i(a)), l = d;;) {
        if (u(l)) {
          e = e.append(b.i(F(l))), l = J(l);
        } else {
          return e.toString();
        }
      }
    }
    a.C = 1;
    a.s = function(a) {
      var b = F(a);
      a = I(a);
      return c(b, a);
    };
    a.p = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        var f = null;
        if (1 < arguments.length) {
          for (var f = 0, h = Array(arguments.length - 1);f < h.length;) {
            h[f] = arguments[f + 1], ++f;
          }
          f = new D(h, 0);
        }
        return c.p(b, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 1;
  b.s = c.s;
  b.H = function() {
    return "";
  };
  b.i = a;
  b.p = c.p;
  return b;
}();
function kc(a, b) {
  var c;
  if (b ? b.o & 16777216 || b.hc || (b.o ? 0 : v(nb, b)) : v(nb, b)) {
    if (gc(a) && gc(b) && L(a) !== L(b)) {
      c = !1;
    } else {
      a: {
        c = B(a);
        for (var d = B(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && Wb.e(F(c), F(d))) {
            c = J(c), d = J(d);
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
  return Dc(c);
}
function Pc(a) {
  var b = 0;
  for (a = B(a);;) {
    if (a) {
      var c = F(a), b = (b + (Rb(function() {
        var a = c;
        return Qc.i ? Qc.i(a) : Qc.call(null, a);
      }()) ^ Rb(function() {
        var a = c;
        return Rc.i ? Rc.i(a) : Rc.call(null, a);
      }()))) % 4503599627370496;
      a = J(a);
    } else {
      return b;
    }
  }
}
function Sc(a, b, c, d, e) {
  this.meta = a;
  this.first = b;
  this.Sa = c;
  this.count = d;
  this.n = e;
  this.o = 65937646;
  this.B = 8192;
}
g = Sc.prototype;
g.toString = function() {
  return Hb(this);
};
g.K = function() {
  return this.meta;
};
g.ia = function() {
  return 1 === this.count ? null : this.Sa;
};
g.O = function() {
  return this.count;
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b(this);
};
g.F = function(a, b) {
  return kc(this, b);
};
g.X = function() {
  return fb(Vb, this.meta);
};
g.aa = function(a, b) {
  return Ic.e(b, this);
};
g.ba = function(a, b, c) {
  return Ic.f(b, c, this);
};
g.ca = function() {
  return this.first;
};
g.ja = function() {
  return 1 === this.count ? Vb : this.Sa;
};
g.M = function() {
  return this;
};
g.N = function(a, b) {
  return new Sc(b, this.first, this.Sa, this.count, this.n);
};
g.L = function(a, b) {
  return new Sc(this.meta, b, this, this.count + 1, null);
};
Sc.prototype[xa] = function() {
  return Yb(this);
};
function Tc(a) {
  this.meta = a;
  this.o = 65937614;
  this.B = 8192;
}
g = Tc.prototype;
g.toString = function() {
  return Hb(this);
};
g.K = function() {
  return this.meta;
};
g.ia = function() {
  return null;
};
g.O = function() {
  return 0;
};
g.I = function() {
  return 0;
};
g.F = function(a, b) {
  return kc(this, b);
};
g.X = function() {
  return this;
};
g.aa = function(a, b) {
  return Ic.e(b, this);
};
g.ba = function(a, b, c) {
  return Ic.f(b, c, this);
};
g.ca = function() {
  return null;
};
g.ja = function() {
  return Vb;
};
g.M = function() {
  return null;
};
g.N = function(a, b) {
  return new Tc(b);
};
g.L = function(a, b) {
  return new Sc(this.meta, b, null, 1, null);
};
var Vb = new Tc(null);
Tc.prototype[xa] = function() {
  return Yb(this);
};
var Uc = function() {
  function a(a) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new D(e, 0);
    }
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof D && 0 === a.A) {
      b = a.j;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.ca(null)), a = a.ia(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = Vb;;) {
      if (0 < a) {
        var f = a - 1, e = e.L(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.C = 0;
  a.s = function(a) {
    a = B(a);
    return b(a);
  };
  a.p = b;
  return a;
}();
function Vc(a, b, c, d) {
  this.meta = a;
  this.first = b;
  this.Sa = c;
  this.n = d;
  this.o = 65929452;
  this.B = 8192;
}
g = Vc.prototype;
g.toString = function() {
  return Hb(this);
};
g.K = function() {
  return this.meta;
};
g.ia = function() {
  return null == this.Sa ? null : B(this.Sa);
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b(this);
};
g.F = function(a, b) {
  return kc(this, b);
};
g.X = function() {
  return tc(Vb, this.meta);
};
g.aa = function(a, b) {
  return Ic.e(b, this);
};
g.ba = function(a, b, c) {
  return Ic.f(b, c, this);
};
g.ca = function() {
  return this.first;
};
g.ja = function() {
  return null == this.Sa ? Vb : this.Sa;
};
g.M = function() {
  return this;
};
g.N = function(a, b) {
  return new Vc(b, this.first, this.Sa, this.n);
};
g.L = function(a, b) {
  return new Vc(null, b, this, this.n);
};
Vc.prototype[xa] = function() {
  return Yb(this);
};
function K(a, b) {
  var c = null == b;
  return(c ? c : b && (b.o & 64 || b.jb)) ? new Vc(null, a, b, null) : new Vc(null, a, B(b), null);
}
function Wc(a, b) {
  if (a.U === b.U) {
    return 0;
  }
  var c = u(a.ea) ? !1 : !0;
  if (u(c ? b.ea : c)) {
    return-1;
  }
  if (u(a.ea)) {
    if (!u(b.ea)) {
      return 1;
    }
    c = ia(a.ea, b.ea);
    return 0 === c ? ia(a.name, b.name) : c;
  }
  return ia(a.name, b.name);
}
function S(a, b, c, d) {
  this.ea = a;
  this.name = b;
  this.U = c;
  this.$a = d;
  this.o = 2153775105;
  this.B = 4096;
}
g = S.prototype;
g.D = function(a, b) {
  return ob(b, [x(":"), x(this.U)].join(""));
};
g.I = function() {
  var a = this.$a;
  return null != a ? a : this.$a = a = Sb(Mb(this.name), Qb(this.ea)) + 2654435769 | 0;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return O.e(c, this);
      case 3:
        return O.f(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return O.e(c, this);
  };
  a.f = function(a, c, d) {
    return O.f(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
g.i = function(a) {
  return O.e(a, this);
};
g.e = function(a, b) {
  return O.f(a, this, b);
};
g.F = function(a, b) {
  return b instanceof S ? this.U === b.U : !1;
};
g.toString = function() {
  return[x(":"), x(this.U)].join("");
};
function T(a, b) {
  return a === b ? !0 : a instanceof S && b instanceof S ? a.U === b.U : !1;
}
var Yc = function() {
  function a(a, b) {
    return new S(a, b, [x(u(a) ? [x(a), x("/")].join("") : null), x(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof S) {
      return a;
    }
    if (a instanceof Ub) {
      var b;
      if (a && (a.B & 4096 || a.Tb)) {
        b = a.ea;
      } else {
        throw Error([x("Doesn't support namespace: "), x(a)].join(""));
      }
      return new S(b, Xc.i ? Xc.i(a) : Xc.call(null, a), a.ya, null);
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
  c.i = b;
  c.e = a;
  return c;
}();
function Zc(a, b, c, d) {
  this.meta = a;
  this.eb = b;
  this.S = c;
  this.n = d;
  this.B = 0;
  this.o = 32374988;
}
g = Zc.prototype;
g.toString = function() {
  return Hb(this);
};
function $c(a) {
  null != a.eb && (a.S = a.eb.H ? a.eb.H() : a.eb.call(null), a.eb = null);
  return a.S;
}
g.K = function() {
  return this.meta;
};
g.ia = function() {
  mb(this);
  return null == this.S ? null : J(this.S);
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b(this);
};
g.F = function(a, b) {
  return kc(this, b);
};
g.X = function() {
  return tc(Vb, this.meta);
};
g.aa = function(a, b) {
  return Ic.e(b, this);
};
g.ba = function(a, b, c) {
  return Ic.f(b, c, this);
};
g.ca = function() {
  mb(this);
  return null == this.S ? null : F(this.S);
};
g.ja = function() {
  mb(this);
  return null != this.S ? I(this.S) : Vb;
};
g.M = function() {
  $c(this);
  if (null == this.S) {
    return null;
  }
  for (var a = this.S;;) {
    if (a instanceof Zc) {
      a = $c(a);
    } else {
      return this.S = a, B(this.S);
    }
  }
};
g.N = function(a, b) {
  return new Zc(b, this.eb, this.S, this.n);
};
g.L = function(a, b) {
  return K(b, this);
};
Zc.prototype[xa] = function() {
  return Yb(this);
};
function ad(a, b) {
  this.wb = a;
  this.end = b;
  this.B = 0;
  this.o = 2;
}
ad.prototype.O = function() {
  return this.end;
};
ad.prototype.add = function(a) {
  this.wb[this.end] = a;
  return this.end += 1;
};
ad.prototype.R = function() {
  var a = new bd(this.wb, 0, this.end);
  this.wb = null;
  return a;
};
function cd(a) {
  return new ad(Array(a), 0);
}
function bd(a, b, c) {
  this.j = a;
  this.off = b;
  this.end = c;
  this.B = 0;
  this.o = 524306;
}
g = bd.prototype;
g.aa = function(a, b) {
  return fc.t(this.j, b, this.j[this.off], this.off + 1);
};
g.ba = function(a, b, c) {
  return fc.t(this.j, b, c, this.off);
};
g.Fb = function() {
  if (this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new bd(this.j, this.off + 1, this.end);
};
g.Y = function(a, b) {
  return this.j[this.off + b];
};
g.ka = function(a, b, c) {
  return 0 <= b && b < this.end - this.off ? this.j[this.off + b] : c;
};
g.O = function() {
  return this.end - this.off;
};
var dd = function() {
  function a(a, b, c) {
    return new bd(a, b, c);
  }
  function b(a, b) {
    return new bd(a, b, a.length);
  }
  function c(a) {
    return new bd(a, 0, a.length);
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
  d.i = c;
  d.e = b;
  d.f = a;
  return d;
}();
function ed(a, b, c, d) {
  this.R = a;
  this.xa = b;
  this.meta = c;
  this.n = d;
  this.o = 31850732;
  this.B = 1536;
}
g = ed.prototype;
g.toString = function() {
  return Hb(this);
};
g.K = function() {
  return this.meta;
};
g.ia = function() {
  if (1 < Ca(this.R)) {
    return new ed(yb(this.R), this.xa, this.meta, null);
  }
  var a = mb(this.xa);
  return null == a ? null : a;
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b(this);
};
g.F = function(a, b) {
  return kc(this, b);
};
g.X = function() {
  return tc(Vb, this.meta);
};
g.ca = function() {
  return z.e(this.R, 0);
};
g.ja = function() {
  return 1 < Ca(this.R) ? new ed(yb(this.R), this.xa, this.meta, null) : null == this.xa ? Vb : this.xa;
};
g.M = function() {
  return this;
};
g.zb = function() {
  return this.R;
};
g.Ab = function() {
  return null == this.xa ? Vb : this.xa;
};
g.N = function(a, b) {
  return new ed(this.R, this.xa, b, this.n);
};
g.L = function(a, b) {
  return K(b, this);
};
g.yb = function() {
  return null == this.xa ? null : this.xa;
};
ed.prototype[xa] = function() {
  return Yb(this);
};
function fd(a, b) {
  return 0 === Ca(a) ? b : new ed(a, b, null, null);
}
function gd(a, b) {
  a.add(b);
}
function hd(a) {
  for (var b = [];;) {
    if (B(a)) {
      b.push(F(a)), a = J(a);
    } else {
      return b;
    }
  }
}
function id(a, b) {
  if (gc(a)) {
    return L(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && B(c)) {
      c = J(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var kd = function jd(b) {
  return null == b ? null : null == J(b) ? B(F(b)) : K(F(b), jd(J(b)));
}, U = function() {
  function a(a, b) {
    return new Zc(null, function() {
      var c = B(a);
      return c ? yc(c) ? fd(zb(c), d.e(Ab(c), b)) : K(F(c), d.e(I(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new Zc(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new Zc(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      if (2 < arguments.length) {
        for (var f = 0, p = Array(arguments.length - 2);f < p.length;) {
          p[f] = arguments[f + 2], ++f;
        }
        f = new D(p, 0);
      }
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function p(a, b) {
        return new Zc(null, function() {
          var c = B(a);
          return c ? yc(c) ? fd(zb(c), p(Ab(c), b)) : K(F(c), p(I(c), b)) : u(b) ? p(F(b), J(b)) : null;
        }, null, null);
      }(d.e(a, c), e);
    }
    a.C = 2;
    a.s = function(a) {
      var c = F(a);
      a = J(a);
      var d = F(a);
      a = I(a);
      return b(c, d, a);
    };
    a.p = b;
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
        var l = null;
        if (2 < arguments.length) {
          for (var l = 0, m = Array(arguments.length - 2);l < m.length;) {
            m[l] = arguments[l + 2], ++l;
          }
          l = new D(m, 0);
        }
        return e.p(d, h, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.C = 2;
  d.s = e.s;
  d.H = c;
  d.i = b;
  d.e = a;
  d.p = e.p;
  return d;
}(), ld = function() {
  function a(a, b, c, d) {
    return K(a, K(b, K(c, d)));
  }
  function b(a, b, c) {
    return K(a, K(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, n) {
      var p = null;
      if (4 < arguments.length) {
        for (var p = 0, r = Array(arguments.length - 4);p < r.length;) {
          r[p] = arguments[p + 4], ++p;
        }
        p = new D(r, 0);
      }
      return b.call(this, c, d, e, m, p);
    }
    function b(a, c, d, e, f) {
      return K(a, K(c, K(d, K(e, kd(f)))));
    }
    a.C = 4;
    a.s = function(a) {
      var c = F(a);
      a = J(a);
      var d = F(a);
      a = J(a);
      var e = F(a);
      a = J(a);
      var n = F(a);
      a = I(a);
      return b(c, d, e, n, a);
    };
    a.p = b;
    return a;
  }(), c = function(c, f, h, k, l) {
    switch(arguments.length) {
      case 1:
        return B(c);
      case 2:
        return K(c, f);
      case 3:
        return b.call(this, c, f, h);
      case 4:
        return a.call(this, c, f, h, k);
      default:
        var m = null;
        if (4 < arguments.length) {
          for (var m = 0, n = Array(arguments.length - 4);m < n.length;) {
            n[m] = arguments[m + 4], ++m;
          }
          m = new D(n, 0);
        }
        return d.p(c, f, h, k, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.C = 4;
  c.s = d.s;
  c.i = function(a) {
    return B(a);
  };
  c.e = function(a, b) {
    return K(a, b);
  };
  c.f = b;
  c.t = a;
  c.p = d.p;
  return c;
}(), md = function() {
  function a() {
    return tb(nc);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      if (2 < arguments.length) {
        for (var l = 0, m = Array(arguments.length - 2);l < m.length;) {
          m[l] = arguments[l + 2], ++l;
        }
        l = new D(m, 0);
      }
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = ub(a, c), u(d)) {
          c = F(d), d = J(d);
        } else {
          return a;
        }
      }
    }
    a.C = 2;
    a.s = function(a) {
      var c = F(a);
      a = J(a);
      var d = F(a);
      a = I(a);
      return b(c, d, a);
    };
    a.p = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return a.call(this);
      case 1:
        return b;
      case 2:
        return ub(b, e);
      default:
        var h = null;
        if (2 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 2);h < k.length;) {
            k[h] = arguments[h + 2], ++h;
          }
          h = new D(k, 0);
        }
        return c.p(b, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.s = c.s;
  b.H = a;
  b.i = function(a) {
    return a;
  };
  b.e = function(a, b) {
    return ub(a, b);
  };
  b.p = c.p;
  return b;
}(), nd = function() {
  var a = null, b = function() {
    function a(c, f, h, k) {
      var l = null;
      if (3 < arguments.length) {
        for (var l = 0, m = Array(arguments.length - 3);l < m.length;) {
          m[l] = arguments[l + 3], ++l;
        }
        l = new D(m, 0);
      }
      return b.call(this, c, f, h, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = wb(a, c, d), u(k)) {
          c = F(k), d = F(J(k)), k = J(J(k));
        } else {
          return a;
        }
      }
    }
    a.C = 3;
    a.s = function(a) {
      var c = F(a);
      a = J(a);
      var h = F(a);
      a = J(a);
      var k = F(a);
      a = I(a);
      return b(c, h, k, a);
    };
    a.p = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return wb(a, d, e);
      default:
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new D(k, 0);
        }
        return b.p(a, d, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.C = 3;
  a.s = b.s;
  a.f = function(a, b, e) {
    return wb(a, b, e);
  };
  a.p = b.p;
  return a;
}();
function od(a, b, c) {
  var d = B(c);
  if (0 === b) {
    return a.H ? a.H() : a.call(null);
  }
  c = Ia(d);
  var e = Ja(d);
  if (1 === b) {
    return a.i ? a.i(c) : a.i ? a.i(c) : a.call(null, c);
  }
  var d = Ia(e), f = Ja(e);
  if (2 === b) {
    return a.e ? a.e(c, d) : a.e ? a.e(c, d) : a.call(null, c, d);
  }
  var e = Ia(f), h = Ja(f);
  if (3 === b) {
    return a.f ? a.f(c, d, e) : a.f ? a.f(c, d, e) : a.call(null, c, d, e);
  }
  var f = Ia(h), k = Ja(h);
  if (4 === b) {
    return a.t ? a.t(c, d, e, f) : a.t ? a.t(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = Ia(k), l = Ja(k);
  if (5 === b) {
    return a.Q ? a.Q(c, d, e, f, h) : a.Q ? a.Q(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = Ia(l), m = Ja(l);
  if (6 === b) {
    return a.$ ? a.$(c, d, e, f, h, k) : a.$ ? a.$(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = Ia(m), n = Ja(m);
  if (7 === b) {
    return a.na ? a.na(c, d, e, f, h, k, l) : a.na ? a.na(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var m = Ia(n), p = Ja(n);
  if (8 === b) {
    return a.Ka ? a.Ka(c, d, e, f, h, k, l, m) : a.Ka ? a.Ka(c, d, e, f, h, k, l, m) : a.call(null, c, d, e, f, h, k, l, m);
  }
  var n = Ia(p), r = Ja(p);
  if (9 === b) {
    return a.La ? a.La(c, d, e, f, h, k, l, m, n) : a.La ? a.La(c, d, e, f, h, k, l, m, n) : a.call(null, c, d, e, f, h, k, l, m, n);
  }
  var p = Ia(r), t = Ja(r);
  if (10 === b) {
    return a.za ? a.za(c, d, e, f, h, k, l, m, n, p) : a.za ? a.za(c, d, e, f, h, k, l, m, n, p) : a.call(null, c, d, e, f, h, k, l, m, n, p);
  }
  var r = Ia(t), y = Ja(t);
  if (11 === b) {
    return a.Aa ? a.Aa(c, d, e, f, h, k, l, m, n, p, r) : a.Aa ? a.Aa(c, d, e, f, h, k, l, m, n, p, r) : a.call(null, c, d, e, f, h, k, l, m, n, p, r);
  }
  var t = Ia(y), C = Ja(y);
  if (12 === b) {
    return a.Ba ? a.Ba(c, d, e, f, h, k, l, m, n, p, r, t) : a.Ba ? a.Ba(c, d, e, f, h, k, l, m, n, p, r, t) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, t);
  }
  var y = Ia(C), E = Ja(C);
  if (13 === b) {
    return a.Ca ? a.Ca(c, d, e, f, h, k, l, m, n, p, r, t, y) : a.Ca ? a.Ca(c, d, e, f, h, k, l, m, n, p, r, t, y) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, t, y);
  }
  var C = Ia(E), G = Ja(E);
  if (14 === b) {
    return a.Da ? a.Da(c, d, e, f, h, k, l, m, n, p, r, t, y, C) : a.Da ? a.Da(c, d, e, f, h, k, l, m, n, p, r, t, y, C) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, t, y, C);
  }
  var E = Ia(G), M = Ja(G);
  if (15 === b) {
    return a.Ea ? a.Ea(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E) : a.Ea ? a.Ea(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E);
  }
  var G = Ia(M), Y = Ja(M);
  if (16 === b) {
    return a.Fa ? a.Fa(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G) : a.Fa ? a.Fa(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G);
  }
  var M = Ia(Y), ga = Ja(Y);
  if (17 === b) {
    return a.Ga ? a.Ga(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M) : a.Ga ? a.Ga(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M);
  }
  var Y = Ia(ga), Na = Ja(ga);
  if (18 === b) {
    return a.Ha ? a.Ha(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M, Y) : a.Ha ? a.Ha(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M, Y) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M, Y);
  }
  ga = Ia(Na);
  Na = Ja(Na);
  if (19 === b) {
    return a.Ia ? a.Ia(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M, Y, ga) : a.Ia ? a.Ia(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M, Y, ga) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M, Y, ga);
  }
  var H = Ia(Na);
  Ja(Na);
  if (20 === b) {
    return a.Ja ? a.Ja(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M, Y, ga, H) : a.Ja ? a.Ja(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M, Y, ga, H) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, M, Y, ga, H);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var R = function() {
  function a(a, b, c, d, e) {
    b = ld.t(b, c, d, e);
    c = a.C;
    return a.s ? (d = id(b, c + 1), d <= c ? od(a, d, b) : a.s(b)) : a.apply(a, hd(b));
  }
  function b(a, b, c, d) {
    b = ld.f(b, c, d);
    c = a.C;
    return a.s ? (d = id(b, c + 1), d <= c ? od(a, d, b) : a.s(b)) : a.apply(a, hd(b));
  }
  function c(a, b, c) {
    b = ld.e(b, c);
    c = a.C;
    if (a.s) {
      var d = id(b, c + 1);
      return d <= c ? od(a, d, b) : a.s(b);
    }
    return a.apply(a, hd(b));
  }
  function d(a, b) {
    var c = a.C;
    if (a.s) {
      var d = id(b, c + 1);
      return d <= c ? od(a, d, b) : a.s(b);
    }
    return a.apply(a, hd(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, t) {
      var y = null;
      if (5 < arguments.length) {
        for (var y = 0, C = Array(arguments.length - 5);y < C.length;) {
          C[y] = arguments[y + 5], ++y;
        }
        y = new D(C, 0);
      }
      return b.call(this, c, d, e, f, h, y);
    }
    function b(a, c, d, e, f, h) {
      c = K(c, K(d, K(e, K(f, kd(h)))));
      d = a.C;
      return a.s ? (e = id(c, d + 1), e <= d ? od(a, e, c) : a.s(c)) : a.apply(a, hd(c));
    }
    a.C = 5;
    a.s = function(a) {
      var c = F(a);
      a = J(a);
      var d = F(a);
      a = J(a);
      var e = F(a);
      a = J(a);
      var f = F(a);
      a = J(a);
      var h = F(a);
      a = I(a);
      return b(c, d, e, f, h, a);
    };
    a.p = b;
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
        var r = null;
        if (5 < arguments.length) {
          for (var r = 0, t = Array(arguments.length - 5);r < t.length;) {
            t[r] = arguments[r + 5], ++r;
          }
          r = new D(t, 0);
        }
        return f.p(e, k, l, m, n, r);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.C = 5;
  e.s = f.s;
  e.e = d;
  e.f = c;
  e.t = b;
  e.Q = a;
  e.p = f.p;
  return e;
}();
function pd(a) {
  return B(a) ? a : null;
}
function qd(a, b) {
  for (;;) {
    if (null == B(b)) {
      return!0;
    }
    var c;
    c = F(b);
    c = a.i ? a.i(c) : a.call(null, c);
    if (u(c)) {
      c = a;
      var d = J(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
var rd = function() {
  function a(a, b, c, d) {
    return function() {
      function e(m, n, p) {
        return a.$ ? a.$(b, c, d, m, n, p) : a.call(null, b, c, d, m, n, p);
      }
      function n(e, m) {
        return a.Q ? a.Q(b, c, d, e, m) : a.call(null, b, c, d, e, m);
      }
      function p(e) {
        return a.t ? a.t(b, c, d, e) : a.call(null, b, c, d, e);
      }
      function r() {
        return a.f ? a.f(b, c, d) : a.call(null, b, c, d);
      }
      var t = null, y = function() {
        function e(a, b, c, d) {
          var f = null;
          if (3 < arguments.length) {
            for (var f = 0, h = Array(arguments.length - 3);f < h.length;) {
              h[f] = arguments[f + 3], ++f;
            }
            f = new D(h, 0);
          }
          return m.call(this, a, b, c, f);
        }
        function m(e, n, p, r) {
          return R.p(a, b, c, d, e, mc([n, p, r], 0));
        }
        e.C = 3;
        e.s = function(a) {
          var b = F(a);
          a = J(a);
          var c = F(a);
          a = J(a);
          var d = F(a);
          a = I(a);
          return m(b, c, d, a);
        };
        e.p = m;
        return e;
      }(), t = function(a, b, c, d) {
        switch(arguments.length) {
          case 0:
            return r.call(this);
          case 1:
            return p.call(this, a);
          case 2:
            return n.call(this, a, b);
          case 3:
            return e.call(this, a, b, c);
          default:
            var f = null;
            if (3 < arguments.length) {
              for (var f = 0, h = Array(arguments.length - 3);f < h.length;) {
                h[f] = arguments[f + 3], ++f;
              }
              f = new D(h, 0);
            }
            return y.p(a, b, c, f);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      t.C = 3;
      t.s = y.s;
      t.H = r;
      t.i = p;
      t.e = n;
      t.f = e;
      t.p = y.p;
      return t;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(e, l, m) {
        return a.Q ? a.Q(b, c, e, l, m) : a.call(null, b, c, e, l, m);
      }
      function e(d, l) {
        return a.t ? a.t(b, c, d, l) : a.call(null, b, c, d, l);
      }
      function n(d) {
        return a.f ? a.f(b, c, d) : a.call(null, b, c, d);
      }
      function p() {
        return a.e ? a.e(b, c) : a.call(null, b, c);
      }
      var r = null, t = function() {
        function d(a, b, c, f) {
          var h = null;
          if (3 < arguments.length) {
            for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
              k[h] = arguments[h + 3], ++h;
            }
            h = new D(k, 0);
          }
          return e.call(this, a, b, c, h);
        }
        function e(d, l, m, n) {
          return R.p(a, b, c, d, l, mc([m, n], 0));
        }
        d.C = 3;
        d.s = function(a) {
          var b = F(a);
          a = J(a);
          var c = F(a);
          a = J(a);
          var d = F(a);
          a = I(a);
          return e(b, c, d, a);
        };
        d.p = e;
        return d;
      }(), r = function(a, b, c, f) {
        switch(arguments.length) {
          case 0:
            return p.call(this);
          case 1:
            return n.call(this, a);
          case 2:
            return e.call(this, a, b);
          case 3:
            return d.call(this, a, b, c);
          default:
            var h = null;
            if (3 < arguments.length) {
              for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
                k[h] = arguments[h + 3], ++h;
              }
              h = new D(k, 0);
            }
            return t.p(a, b, c, h);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      r.C = 3;
      r.s = t.s;
      r.H = p;
      r.i = n;
      r.e = e;
      r.f = d;
      r.p = t.p;
      return r;
    }();
  }
  function c(a, b) {
    return function() {
      function c(d, e, k) {
        return a.t ? a.t(b, d, e, k) : a.call(null, b, d, e, k);
      }
      function d(c, e) {
        return a.f ? a.f(b, c, e) : a.call(null, b, c, e);
      }
      function e(c) {
        return a.e ? a.e(b, c) : a.call(null, b, c);
      }
      function n() {
        return a.i ? a.i(b) : a.call(null, b);
      }
      var p = null, r = function() {
        function c(a, b, e, f) {
          var h = null;
          if (3 < arguments.length) {
            for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
              k[h] = arguments[h + 3], ++h;
            }
            h = new D(k, 0);
          }
          return d.call(this, a, b, e, h);
        }
        function d(c, e, k, l) {
          return R.p(a, b, c, e, k, mc([l], 0));
        }
        c.C = 3;
        c.s = function(a) {
          var b = F(a);
          a = J(a);
          var c = F(a);
          a = J(a);
          var e = F(a);
          a = I(a);
          return d(b, c, e, a);
        };
        c.p = d;
        return c;
      }(), p = function(a, b, f, h) {
        switch(arguments.length) {
          case 0:
            return n.call(this);
          case 1:
            return e.call(this, a);
          case 2:
            return d.call(this, a, b);
          case 3:
            return c.call(this, a, b, f);
          default:
            var p = null;
            if (3 < arguments.length) {
              for (var p = 0, M = Array(arguments.length - 3);p < M.length;) {
                M[p] = arguments[p + 3], ++p;
              }
              p = new D(M, 0);
            }
            return r.p(a, b, f, p);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      p.C = 3;
      p.s = r.s;
      p.H = n;
      p.i = e;
      p.e = d;
      p.f = c;
      p.p = r.p;
      return p;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, p) {
      var r = null;
      if (4 < arguments.length) {
        for (var r = 0, t = Array(arguments.length - 4);r < t.length;) {
          t[r] = arguments[r + 4], ++r;
        }
        r = new D(t, 0);
      }
      return b.call(this, c, d, e, f, r);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          if (0 < arguments.length) {
            for (var c = 0, d = Array(arguments.length - 0);c < d.length;) {
              d[c] = arguments[c + 0], ++c;
            }
            c = new D(d, 0);
          }
          return h.call(this, c);
        }
        function h(b) {
          return R.Q(a, c, d, e, U.e(f, b));
        }
        b.C = 0;
        b.s = function(a) {
          a = B(a);
          return h(a);
        };
        b.p = h;
        return b;
      }();
    }
    a.C = 4;
    a.s = function(a) {
      var c = F(a);
      a = J(a);
      var d = F(a);
      a = J(a);
      var e = F(a);
      a = J(a);
      var f = F(a);
      a = I(a);
      return b(c, d, e, f, a);
    };
    a.p = b;
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
        var n = null;
        if (4 < arguments.length) {
          for (var n = 0, p = Array(arguments.length - 4);n < p.length;) {
            p[n] = arguments[n + 4], ++n;
          }
          n = new D(p, 0);
        }
        return e.p(d, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.C = 4;
  d.s = e.s;
  d.i = function(a) {
    return a;
  };
  d.e = c;
  d.f = b;
  d.t = a;
  d.p = e.p;
  return d;
}();
function sd(a, b, c, d) {
  this.state = a;
  this.meta = b;
  this.dc = c;
  this.Lb = d;
  this.o = 6455296;
  this.B = 16386;
}
g = sd.prototype;
g.I = function() {
  return this[ba] || (this[ba] = ++ca);
};
g.Jb = function(a, b, c) {
  for (var d = B(this.Lb), e = null, f = 0, h = 0;;) {
    if (h < f) {
      a = e.Y(null, h);
      var k = N.f(a, 0, null);
      a = N.f(a, 1, null);
      var l = b, m = c;
      a.t ? a.t(k, this, l, m) : a.call(null, k, this, l, m);
      h += 1;
    } else {
      if (a = B(d)) {
        d = a, yc(d) ? (e = zb(d), d = Ab(d), a = e, f = L(e), e = a) : (a = F(d), k = N.f(a, 0, null), a = N.f(a, 1, null), e = k, f = b, h = c, a.t ? a.t(e, this, f, h) : a.call(null, e, this, f, h), d = J(d), e = null, f = 0), h = 0;
      } else {
        return null;
      }
    }
  }
};
g.K = function() {
  return this.meta;
};
g.hb = function() {
  return this.state;
};
g.F = function(a, b) {
  return this === b;
};
var vd = function() {
  function a(a) {
    return new sd(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      if (1 < arguments.length) {
        for (var k = 0, l = Array(arguments.length - 1);k < l.length;) {
          l[k] = arguments[k + 1], ++k;
        }
        k = new D(l, 0);
      }
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = (null == c ? 0 : c ? c.o & 64 || c.jb || (c.o ? 0 : v(Ha, c)) : v(Ha, c)) ? R.e(td, c) : c, e = O.e(d, ud), d = O.e(d, ra);
      return new sd(a, d, e, null);
    }
    a.C = 1;
    a.s = function(a) {
      var c = F(a);
      a = I(a);
      return b(c, a);
    };
    a.p = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        var f = null;
        if (1 < arguments.length) {
          for (var f = 0, h = Array(arguments.length - 1);f < h.length;) {
            h[f] = arguments[f + 1], ++f;
          }
          f = new D(h, 0);
        }
        return c.p(b, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 1;
  b.s = c.s;
  b.i = a;
  b.p = c.p;
  return b;
}();
function wd(a, b) {
  if (a instanceof sd) {
    var c = a.dc;
    if (null != c && !u(c.i ? c.i(b) : c.call(null, b))) {
      throw Error([x("Assert failed: "), x("Validator rejected reference state"), x("\n"), x(function() {
        var a = Uc(new Ub(null, "validate", "validate", 1439230700, null), new Ub(null, "new-value", "new-value", -1567397401, null));
        return xd.i ? xd.i(a) : xd.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.Lb && sb(a, c, b);
    return b;
  }
  return Cb(a, b);
}
var yd = function() {
  function a(a, b, c, d) {
    if (a instanceof sd) {
      var e = a.state;
      b = b.f ? b.f(e, c, d) : b.call(null, e, c, d);
      a = wd(a, b);
    } else {
      a = Db.t(a, b, c, d);
    }
    return a;
  }
  function b(a, b, c) {
    if (a instanceof sd) {
      var d = a.state;
      b = b.e ? b.e(d, c) : b.call(null, d, c);
      a = wd(a, b);
    } else {
      a = Db.f(a, b, c);
    }
    return a;
  }
  function c(a, b) {
    var c;
    a instanceof sd ? (c = a.state, c = b.i ? b.i(c) : b.call(null, c), c = wd(a, c)) : c = Db.e(a, b);
    return c;
  }
  var d = null, e = function() {
    function a(c, d, e, f, p) {
      var r = null;
      if (4 < arguments.length) {
        for (var r = 0, t = Array(arguments.length - 4);r < t.length;) {
          t[r] = arguments[r + 4], ++r;
        }
        r = new D(t, 0);
      }
      return b.call(this, c, d, e, f, r);
    }
    function b(a, c, d, e, f) {
      return a instanceof sd ? wd(a, R.Q(c, a.state, d, e, f)) : Db.Q(a, c, d, e, f);
    }
    a.C = 4;
    a.s = function(a) {
      var c = F(a);
      a = J(a);
      var d = F(a);
      a = J(a);
      var e = F(a);
      a = J(a);
      var f = F(a);
      a = I(a);
      return b(c, d, e, f, a);
    };
    a.p = b;
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
        var n = null;
        if (4 < arguments.length) {
          for (var n = 0, p = Array(arguments.length - 4);n < p.length;) {
            p[n] = arguments[n + 4], ++n;
          }
          n = new D(p, 0);
        }
        return e.p(d, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.C = 4;
  d.s = e.s;
  d.e = c;
  d.f = b;
  d.t = a;
  d.p = e.p;
  return d;
}();
function Ad(a) {
  this.state = a;
  this.B = 0;
  this.o = 32768;
}
Ad.prototype.hb = function() {
  return this.state;
};
Ad.prototype.$b = function(a) {
  return this.state = a;
};
var Bd = function() {
  function a(a, b, c, d) {
    return new Zc(null, function() {
      var f = B(b), p = B(c), r = B(d);
      if (f && p && r) {
        var t = K, y;
        y = F(f);
        var C = F(p), E = F(r);
        y = a.f ? a.f(y, C, E) : a.call(null, y, C, E);
        f = t(y, e.t(a, I(f), I(p), I(r)));
      } else {
        f = null;
      }
      return f;
    }, null, null);
  }
  function b(a, b, c) {
    return new Zc(null, function() {
      var d = B(b), f = B(c);
      if (d && f) {
        var p = K, r;
        r = F(d);
        var t = F(f);
        r = a.e ? a.e(r, t) : a.call(null, r, t);
        d = p(r, e.f(a, I(d), I(f)));
      } else {
        d = null;
      }
      return d;
    }, null, null);
  }
  function c(a, b) {
    return new Zc(null, function() {
      var c = B(b);
      if (c) {
        if (yc(c)) {
          for (var d = zb(c), f = L(d), p = cd(f), r = 0;;) {
            if (r < f) {
              gd(p, function() {
                var b = z.e(d, r);
                return a.i ? a.i(b) : a.call(null, b);
              }()), r += 1;
            } else {
              break;
            }
          }
          return fd(p.R(), e.e(a, Ab(c)));
        }
        return K(function() {
          var b = F(c);
          return a.i ? a.i(b) : a.call(null, b);
        }(), e.e(a, I(c)));
      }
      return null;
    }, null, null);
  }
  function d(a) {
    return function(b) {
      return function() {
        function c(d, e) {
          var f = a.i ? a.i(e) : a.call(null, e);
          return b.e ? b.e(d, f) : b.call(null, d, f);
        }
        function d(a) {
          return b.i ? b.i(a) : b.call(null, a);
        }
        function e() {
          return b.H ? b.H() : b.call(null);
        }
        var f = null, r = function() {
          function c(a, b, e) {
            var f = null;
            if (2 < arguments.length) {
              for (var f = 0, h = Array(arguments.length - 2);f < h.length;) {
                h[f] = arguments[f + 2], ++f;
              }
              f = new D(h, 0);
            }
            return d.call(this, a, b, f);
          }
          function d(c, e, f) {
            e = R.f(a, e, f);
            return b.e ? b.e(c, e) : b.call(null, c, e);
          }
          c.C = 2;
          c.s = function(a) {
            var b = F(a);
            a = J(a);
            var c = F(a);
            a = I(a);
            return d(b, c, a);
          };
          c.p = d;
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
              var h = null;
              if (2 < arguments.length) {
                for (var h = 0, k = Array(arguments.length - 2);h < k.length;) {
                  k[h] = arguments[h + 2], ++h;
                }
                h = new D(k, 0);
              }
              return r.p(a, b, h);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        f.C = 2;
        f.s = r.s;
        f.H = e;
        f.i = d;
        f.e = c;
        f.p = r.p;
        return f;
      }();
    };
  }
  var e = null, f = function() {
    function a(c, d, e, f, h) {
      var t = null;
      if (4 < arguments.length) {
        for (var t = 0, y = Array(arguments.length - 4);t < y.length;) {
          y[t] = arguments[t + 4], ++t;
        }
        t = new D(y, 0);
      }
      return b.call(this, c, d, e, f, t);
    }
    function b(a, c, d, f, h) {
      var k = function C(a) {
        return new Zc(null, function() {
          var b = e.e(B, a);
          return qd(Jc, b) ? K(e.e(F, b), C(e.e(I, b))) : null;
        }, null, null);
      };
      return e.e(function() {
        return function(b) {
          return R.e(a, b);
        };
      }(k), k(oc.p(h, f, mc([d, c], 0))));
    }
    a.C = 4;
    a.s = function(a) {
      var c = F(a);
      a = J(a);
      var d = F(a);
      a = J(a);
      var e = F(a);
      a = J(a);
      var f = F(a);
      a = I(a);
      return b(c, d, e, f, a);
    };
    a.p = b;
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
        var p = null;
        if (4 < arguments.length) {
          for (var p = 0, r = Array(arguments.length - 4);p < r.length;) {
            r[p] = arguments[p + 4], ++p;
          }
          p = new D(r, 0);
        }
        return f.p(e, k, l, m, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.C = 4;
  e.s = f.s;
  e.i = d;
  e.e = c;
  e.f = b;
  e.t = a;
  e.p = f.p;
  return e;
}(), Cd = function() {
  function a(a, b) {
    return new Zc(null, function() {
      if (0 < a) {
        var f = B(b);
        return f ? K(F(f), c.e(a - 1, I(f))) : null;
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, h) {
            var k = bb(a), l = a.$b(a.hb(null) - 1), k = 0 < k ? b.e ? b.e(d, h) : b.call(null, d, h) : d;
            return 0 < l ? k : cc(k) ? k : new bc(k);
          }
          function d(a) {
            return b.i ? b.i(a) : b.call(null, a);
          }
          function l() {
            return b.H ? b.H() : b.call(null);
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
          m.H = l;
          m.i = d;
          m.e = c;
          return m;
        }();
      }(new Ad(a));
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
  c.i = b;
  c.e = a;
  return c;
}(), Dd = function() {
  function a(a, b) {
    return Cd.e(a, c.i(b));
  }
  function b(a) {
    return new Zc(null, function() {
      return K(a.H ? a.H() : a.call(null), c.i(a));
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
  c.i = b;
  c.e = a;
  return c;
}(), Ed = function() {
  function a(a, b) {
    return new Zc(null, function() {
      var f = B(b);
      if (f) {
        if (yc(f)) {
          for (var h = zb(f), k = L(h), l = cd(k), m = 0;;) {
            if (m < k) {
              var n;
              n = z.e(h, m);
              n = a.i ? a.i(n) : a.call(null, n);
              u(n) && (n = z.e(h, m), l.add(n));
              m += 1;
            } else {
              break;
            }
          }
          return fd(l.R(), c.e(a, Ab(f)));
        }
        h = F(f);
        f = I(f);
        return u(a.i ? a.i(h) : a.call(null, h)) ? K(h, c.e(a, f)) : c.e(a, f);
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function() {
        function c(f, h) {
          return u(a.i ? a.i(h) : a.call(null, h)) ? b.e ? b.e(f, h) : b.call(null, f, h) : f;
        }
        function h(a) {
          return b.i ? b.i(a) : b.call(null, a);
        }
        function k() {
          return b.H ? b.H() : b.call(null);
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
        l.H = k;
        l.i = h;
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
  c.i = b;
  c.e = a;
  return c;
}(), Fd = function() {
  function a(a, b, c) {
    a && (a.B & 4 || a.Ob) ? (b = Kc.t(b, md, tb(a), c), b = vb(b), a = tc(b, uc(a))) : a = Kc.t(b, oc, a, c);
    return a;
  }
  function b(a, b) {
    var c;
    null != a ? a && (a.B & 4 || a.Ob) ? (c = Hc.f(ub, tb(a), b), c = vb(c), c = tc(c, uc(a))) : c = Hc.f(Ea, a, b) : c = Hc.f(oc, Vb, b);
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
  c.f = a;
  return c;
}(), Gd = function() {
  function a(a, b, c) {
    var h = Cc;
    for (b = B(b);;) {
      if (b) {
        var k = a;
        if (k ? k.o & 256 || k.Hb || (k.o ? 0 : v(Oa, k)) : v(Oa, k)) {
          a = O.f(a, F(b), h);
          if (h === a) {
            return c;
          }
          b = J(b);
        } else {
          return c;
        }
      } else {
        return a;
      }
    }
  }
  function b(a, b) {
    return c.f(a, b, null);
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
  c.f = a;
  return c;
}();
function Hd(a, b) {
  this.P = a;
  this.j = b;
}
function Id(a) {
  return new Hd(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Jd(a) {
  a = a.q;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Kd(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Id(a);
    d.j[0] = c;
    c = d;
    b -= 5;
  }
}
var Md = function Ld(b, c, d, e) {
  var f = new Hd(d.P, ya(d.j)), h = b.q - 1 >>> c & 31;
  5 === c ? f.j[h] = e : (d = d.j[h], b = null != d ? Ld(b, c - 5, d, e) : Kd(null, c - 5, e), f.j[h] = b);
  return f;
};
function Nd(a, b) {
  throw Error([x("No item "), x(a), x(" in vector of length "), x(b)].join(""));
}
function Od(a, b) {
  if (b >= Jd(a)) {
    return a.ha;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.j[b >>> d & 31], d = e
    } else {
      return c.j;
    }
  }
}
function Pd(a, b) {
  return 0 <= b && b < a.q ? Od(a, b) : Nd(b, a.q);
}
var Rd = function Qd(b, c, d, e, f) {
  var h = new Hd(d.P, ya(d.j));
  if (0 === c) {
    h.j[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Qd(b, c - 5, d.j[k], e, f);
    h.j[k] = b;
  }
  return h;
};
function Sd(a, b, c, d, e, f) {
  this.A = a;
  this.vb = b;
  this.j = c;
  this.v = d;
  this.start = e;
  this.end = f;
}
Sd.prototype.Eb = function() {
  return this.A < this.end;
};
Sd.prototype.next = function() {
  32 === this.A - this.vb && (this.j = Od(this.v, this.A), this.vb += 32);
  var a = this.j[this.A & 31];
  this.A += 1;
  return a;
};
function V(a, b, c, d, e, f) {
  this.meta = a;
  this.q = b;
  this.shift = c;
  this.root = d;
  this.ha = e;
  this.n = f;
  this.o = 167668511;
  this.B = 8196;
}
g = V.prototype;
g.toString = function() {
  return Hb(this);
};
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  return "number" === typeof b ? z.f(this, b, c) : c;
};
g.Y = function(a, b) {
  return Pd(this, b)[b & 31];
};
g.ka = function(a, b, c) {
  return 0 <= b && b < this.q ? Od(this, b)[b & 31] : c;
};
g.Db = function(a, b, c) {
  if (0 <= b && b < this.q) {
    return Jd(this) <= b ? (a = ya(this.ha), a[b & 31] = c, new V(this.meta, this.q, this.shift, this.root, a, null)) : new V(this.meta, this.q, this.shift, Rd(this, this.shift, this.root, b, c), this.ha, null);
  }
  if (b === this.q) {
    return Ea(this, c);
  }
  throw Error([x("Index "), x(b), x(" out of bounds  [0,"), x(this.q), x("]")].join(""));
};
g.tb = function() {
  var a = this.q;
  return new Sd(0, 0, 0 < L(this) ? Od(this, 0) : null, this, 0, a);
};
g.K = function() {
  return this.meta;
};
g.O = function() {
  return this.q;
};
g.Bb = function() {
  return z.e(this, 0);
};
g.Cb = function() {
  return z.e(this, 1);
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b(this);
};
g.F = function(a, b) {
  if (b instanceof V) {
    if (this.q === L(b)) {
      for (var c = Eb(this), d = Eb(b);;) {
        if (u(c.Eb())) {
          var e = c.next(), f = d.next();
          if (!Wb.e(e, f)) {
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
    return kc(this, b);
  }
};
g.ib = function() {
  var a = this;
  return new Td(a.q, a.shift, function() {
    var b = a.root;
    return Ud.i ? Ud.i(b) : Ud.call(null, b);
  }(), function() {
    var b = a.ha;
    return Vd.i ? Vd.i(b) : Vd.call(null, b);
  }());
};
g.X = function() {
  return tc(nc, this.meta);
};
g.aa = function(a, b) {
  return ec.e(this, b);
};
g.ba = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.q) {
      var e = Od(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var h = e[f], d = b.e ? b.e(d, h) : b.call(null, d, h);
            if (cc(d)) {
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
      if (cc(e)) {
        return b = e, dc.i ? dc.i(b) : dc.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
g.V = function(a, b, c) {
  if ("number" === typeof b) {
    return ab(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
g.M = function() {
  if (0 === this.q) {
    return null;
  }
  if (32 >= this.q) {
    return new D(this.ha, 0);
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
  return Wd.t ? Wd.t(this, a, 0, 0) : Wd.call(null, this, a, 0, 0);
};
g.N = function(a, b) {
  return new V(b, this.q, this.shift, this.root, this.ha, this.n);
};
g.L = function(a, b) {
  if (32 > this.q - Jd(this)) {
    for (var c = this.ha.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.ha[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new V(this.meta, this.q + 1, this.shift, this.root, d, null);
  }
  c = (d = this.q >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Id(null), d.j[0] = this.root, e = Kd(null, this.shift, new Hd(null, this.ha)), d.j[1] = e) : d = Md(this, this.shift, this.root, new Hd(null, this.ha));
  return new V(this.meta, this.q + 1, c, d, [b], null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.Y(null, c);
      case 3:
        return this.ka(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return this.Y(null, c);
  };
  a.f = function(a, c, d) {
    return this.ka(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
g.i = function(a) {
  return this.Y(null, a);
};
g.e = function(a, b) {
  return this.ka(null, a, b);
};
var W = new Hd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), nc = new V(null, 0, 5, W, [], 0);
V.prototype[xa] = function() {
  return Yb(this);
};
function Xd(a, b, c, d, e, f) {
  this.ma = a;
  this.Ra = b;
  this.A = c;
  this.off = d;
  this.meta = e;
  this.n = f;
  this.o = 32375020;
  this.B = 1536;
}
g = Xd.prototype;
g.toString = function() {
  return Hb(this);
};
g.K = function() {
  return this.meta;
};
g.ia = function() {
  if (this.off + 1 < this.Ra.length) {
    var a;
    a = this.ma;
    var b = this.Ra, c = this.A, d = this.off + 1;
    a = Wd.t ? Wd.t(a, b, c, d) : Wd.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Bb(this);
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b(this);
};
g.F = function(a, b) {
  return kc(this, b);
};
g.X = function() {
  return tc(nc, this.meta);
};
g.aa = function(a, b) {
  var c = this;
  return ec.e(function() {
    var a = c.ma, b = c.A + c.off, f = L(c.ma);
    return Yd.f ? Yd.f(a, b, f) : Yd.call(null, a, b, f);
  }(), b);
};
g.ba = function(a, b, c) {
  var d = this;
  return ec.f(function() {
    var a = d.ma, b = d.A + d.off, c = L(d.ma);
    return Yd.f ? Yd.f(a, b, c) : Yd.call(null, a, b, c);
  }(), b, c);
};
g.ca = function() {
  return this.Ra[this.off];
};
g.ja = function() {
  if (this.off + 1 < this.Ra.length) {
    var a;
    a = this.ma;
    var b = this.Ra, c = this.A, d = this.off + 1;
    a = Wd.t ? Wd.t(a, b, c, d) : Wd.call(null, a, b, c, d);
    return null == a ? Vb : a;
  }
  return Ab(this);
};
g.M = function() {
  return this;
};
g.zb = function() {
  return dd.e(this.Ra, this.off);
};
g.Ab = function() {
  var a = this.A + this.Ra.length;
  if (a < Ca(this.ma)) {
    var b = this.ma, c = Od(this.ma, a);
    return Wd.t ? Wd.t(b, c, a, 0) : Wd.call(null, b, c, a, 0);
  }
  return Vb;
};
g.N = function(a, b) {
  var c = this.ma, d = this.Ra, e = this.A, f = this.off;
  return Wd.Q ? Wd.Q(c, d, e, f, b) : Wd.call(null, c, d, e, f, b);
};
g.L = function(a, b) {
  return K(b, this);
};
g.yb = function() {
  var a = this.A + this.Ra.length;
  if (a < Ca(this.ma)) {
    var b = this.ma, c = Od(this.ma, a);
    return Wd.t ? Wd.t(b, c, a, 0) : Wd.call(null, b, c, a, 0);
  }
  return null;
};
Xd.prototype[xa] = function() {
  return Yb(this);
};
var Wd = function() {
  function a(a, b, c, d, l) {
    return new Xd(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Xd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Xd(a, Pd(a, b), b, c, null, null);
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
  d.f = c;
  d.t = b;
  d.Q = a;
  return d;
}();
function Zd(a, b, c, d, e) {
  this.meta = a;
  this.v = b;
  this.start = c;
  this.end = d;
  this.n = e;
  this.o = 166617887;
  this.B = 8192;
}
g = Zd.prototype;
g.toString = function() {
  return Hb(this);
};
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  return "number" === typeof b ? z.f(this, b, c) : c;
};
g.Y = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Nd(b, this.end - this.start) : z.e(this.v, this.start + b);
};
g.ka = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : z.f(this.v, this.start + b, c);
};
g.Db = function(a, b, c) {
  var d = this.start + b;
  a = this.meta;
  c = P.f(this.v, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return $d.Q ? $d.Q(a, c, b, d, null) : $d.call(null, a, c, b, d, null);
};
g.K = function() {
  return this.meta;
};
g.O = function() {
  return this.end - this.start;
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b(this);
};
g.F = function(a, b) {
  return kc(this, b);
};
g.X = function() {
  return tc(nc, this.meta);
};
g.aa = function(a, b) {
  return ec.e(this, b);
};
g.ba = function(a, b, c) {
  return ec.f(this, b, c);
};
g.V = function(a, b, c) {
  if ("number" === typeof b) {
    return ab(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.M = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : K(z.e(a.v, e), new Zc(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
g.N = function(a, b) {
  var c = this.v, d = this.start, e = this.end, f = this.n;
  return $d.Q ? $d.Q(b, c, d, e, f) : $d.call(null, b, c, d, e, f);
};
g.L = function(a, b) {
  var c = this.meta, d = ab(this.v, this.end, b), e = this.start, f = this.end + 1;
  return $d.Q ? $d.Q(c, d, e, f, null) : $d.call(null, c, d, e, f, null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.Y(null, c);
      case 3:
        return this.ka(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return this.Y(null, c);
  };
  a.f = function(a, c, d) {
    return this.ka(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
g.i = function(a) {
  return this.Y(null, a);
};
g.e = function(a, b) {
  return this.ka(null, a, b);
};
Zd.prototype[xa] = function() {
  return Yb(this);
};
function $d(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Zd) {
      c = b.start + c, d = b.start + d, b = b.v;
    } else {
      var f = L(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Zd(a, b, c, d, e);
    }
  }
}
var Yd = function() {
  function a(a, b, c) {
    return $d(null, a, b, c, null);
  }
  function b(a, b) {
    return c.f(a, b, L(a));
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
  c.f = a;
  return c;
}();
function ae(a, b) {
  return a === b.P ? b : new Hd(a, ya(b.j));
}
function Ud(a) {
  return new Hd({}, ya(a.j));
}
function Vd(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Ac(a, 0, b, 0, a.length);
  return b;
}
var ee = function be(b, c, d, e) {
  d = ae(b.root.P, d);
  var f = b.q - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.j[f];
    b = null != h ? be(b, c - 5, h, e) : Kd(b.root.P, c - 5, e);
  }
  d.j[f] = b;
  return d;
};
function Td(a, b, c, d) {
  this.q = a;
  this.shift = b;
  this.root = c;
  this.ha = d;
  this.o = 275;
  this.B = 88;
}
g = Td.prototype;
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
  a.f = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
g.i = function(a) {
  return this.J(null, a);
};
g.e = function(a, b) {
  return this.G(null, a, b);
};
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  return "number" === typeof b ? z.f(this, b, c) : c;
};
g.Y = function(a, b) {
  if (this.root.P) {
    return Pd(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.ka = function(a, b, c) {
  return 0 <= b && b < this.q ? z.e(this, b) : c;
};
g.O = function() {
  if (this.root.P) {
    return this.q;
  }
  throw Error("count after persistent!");
};
g.Ib = function(a, b, c) {
  var d = this;
  if (d.root.P) {
    if (0 <= b && b < d.q) {
      return Jd(this) <= b ? d.ha[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = ae(d.root.P, k);
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
    if (b === d.q) {
      return ub(this, c);
    }
    throw Error([x("Index "), x(b), x(" out of bounds for TransientVector of length"), x(d.q)].join(""));
  }
  throw Error("assoc! after persistent!");
};
g.kb = function(a, b, c) {
  if ("number" === typeof b) {
    return xb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.lb = function(a, b) {
  if (this.root.P) {
    if (32 > this.q - Jd(this)) {
      this.ha[this.q & 31] = b;
    } else {
      var c = new Hd(this.root.P, this.ha), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.ha = d;
      if (this.q >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Kd(this.root.P, this.shift, c);
        this.root = new Hd(this.root.P, d);
        this.shift = e;
      } else {
        this.root = ee(this, this.shift, this.root, c);
      }
    }
    this.q += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.mb = function() {
  if (this.root.P) {
    this.root.P = null;
    var a = this.q - Jd(this), b = Array(a);
    Ac(this.ha, 0, b, 0, a);
    return new V(null, this.q, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function fe() {
  this.B = 0;
  this.o = 2097152;
}
fe.prototype.F = function() {
  return!1;
};
var ge = new fe;
function he(a, b) {
  return Dc(wc(b) ? L(a) === L(b) ? qd(Jc, Bd.e(function(a) {
    return Wb.e(O.f(b, F(a), ge), F(J(a)));
  }, a)) : null : null);
}
function ie(a, b) {
  var c = a.j;
  if (b instanceof S) {
    a: {
      for (var d = c.length, e = b.U, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var h = c[f];
        if (h instanceof S && e === h.U) {
          c = f;
          break a;
        }
        f += 2;
      }
      c = void 0;
    }
  } else {
    if (d = "string" == typeof b, u(u(d) ? d : "number" === typeof b)) {
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
      if (b instanceof Ub) {
        a: {
          d = c.length;
          e = b.ya;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            h = c[f];
            if (h instanceof Ub && e === h.ya) {
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
              if (Wb.e(b, c[e])) {
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
  this.fa = c;
  this.B = 0;
  this.o = 32374990;
}
g = je.prototype;
g.toString = function() {
  return Hb(this);
};
g.K = function() {
  return this.fa;
};
g.ia = function() {
  return this.A < this.j.length - 2 ? new je(this.j, this.A + 2, this.fa) : null;
};
g.O = function() {
  return(this.j.length - this.A) / 2;
};
g.I = function() {
  return $b(this);
};
g.F = function(a, b) {
  return kc(this, b);
};
g.X = function() {
  return tc(Vb, this.fa);
};
g.aa = function(a, b) {
  return Ic.e(b, this);
};
g.ba = function(a, b, c) {
  return Ic.f(b, c, this);
};
g.ca = function() {
  return new V(null, 2, 5, W, [this.j[this.A], this.j[this.A + 1]], null);
};
g.ja = function() {
  return this.A < this.j.length - 2 ? new je(this.j, this.A + 2, this.fa) : Vb;
};
g.M = function() {
  return this;
};
g.N = function(a, b) {
  return new je(this.j, this.A, b);
};
g.L = function(a, b) {
  return K(b, this);
};
je.prototype[xa] = function() {
  return Yb(this);
};
function ke(a, b, c) {
  this.j = a;
  this.A = b;
  this.q = c;
}
ke.prototype.Eb = function() {
  return this.A < this.q;
};
ke.prototype.next = function() {
  var a = new V(null, 2, 5, W, [this.j[this.A], this.j[this.A + 1]], null);
  this.A += 2;
  return a;
};
function s(a, b, c, d) {
  this.meta = a;
  this.q = b;
  this.j = c;
  this.n = d;
  this.o = 16647951;
  this.B = 8196;
}
g = s.prototype;
g.toString = function() {
  return Hb(this);
};
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  a = ie(this, b);
  return-1 === a ? c : this.j[a + 1];
};
g.tb = function() {
  return new ke(this.j, 0, 2 * this.q);
};
g.K = function() {
  return this.meta;
};
g.O = function() {
  return this.q;
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = ac(this);
};
g.F = function(a, b) {
  if (b && (b.o & 1024 || b.Qb)) {
    var c = this.j.length;
    if (this.q === b.O(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.G(null, this.j[d], Cc);
          if (e !== Cc) {
            if (Wb.e(this.j[d + 1], e)) {
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
g.ib = function() {
  return new le({}, this.j.length, ya(this.j));
};
g.X = function() {
  return fb(me, this.meta);
};
g.aa = function(a, b) {
  return Ic.e(b, this);
};
g.ba = function(a, b, c) {
  return Ic.f(b, c, this);
};
g.Z = function(a, b) {
  if (0 <= ie(this, b)) {
    var c = this.j.length, d = c - 2;
    if (0 === d) {
      return Da(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new s(this.meta, this.q - 1, d, null);
      }
      Wb.e(b, this.j[e]) || (d[f] = this.j[e], d[f + 1] = this.j[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
g.V = function(a, b, c) {
  a = ie(this, b);
  if (-1 === a) {
    if (this.q < ne) {
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
      return new s(this.meta, this.q + 1, e, null);
    }
    return fb(Qa(Fd.e(qc, this), b, c), this.meta);
  }
  if (c === this.j[a + 1]) {
    return this;
  }
  b = ya(this.j);
  b[a + 1] = c;
  return new s(this.meta, this.q, b, null);
};
g.xb = function(a, b) {
  return-1 !== ie(this, b);
};
g.M = function() {
  var a = this.j;
  return 0 <= a.length - 2 ? new je(a, 0, null) : null;
};
g.N = function(a, b) {
  return new s(b, this.q, this.j, this.n);
};
g.L = function(a, b) {
  if (xc(b)) {
    return Qa(this, z.e(b, 0), z.e(b, 1));
  }
  for (var c = this, d = B(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (xc(e)) {
      c = Qa(c, z.e(e, 0), z.e(e, 1)), d = J(d);
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
  a.f = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
g.i = function(a) {
  return this.J(null, a);
};
g.e = function(a, b) {
  return this.G(null, a, b);
};
var me = new s(null, 0, [], null), ne = 8;
s.prototype[xa] = function() {
  return Yb(this);
};
function le(a, b, c) {
  this.bb = a;
  this.gb = b;
  this.j = c;
  this.B = 56;
  this.o = 258;
}
g = le.prototype;
g.kb = function(a, b, c) {
  var d = this;
  if (u(d.bb)) {
    a = ie(this, b);
    if (-1 === a) {
      return d.gb + 2 <= 2 * ne ? (d.gb += 2, d.j.push(b), d.j.push(c), this) : nd.f(function() {
        var a = d.gb, b = d.j;
        return oe.e ? oe.e(a, b) : oe.call(null, a, b);
      }(), b, c);
    }
    c !== d.j[a + 1] && (d.j[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
g.lb = function(a, b) {
  if (u(this.bb)) {
    if (b ? b.o & 2048 || b.Rb || (b.o ? 0 : v(Ua, b)) : v(Ua, b)) {
      return wb(this, Qc.i ? Qc.i(b) : Qc.call(null, b), Rc.i ? Rc.i(b) : Rc.call(null, b));
    }
    for (var c = B(b), d = this;;) {
      var e = F(c);
      if (u(e)) {
        var f = e, c = J(c), d = wb(d, function() {
          var a = f;
          return Qc.i ? Qc.i(a) : Qc.call(null, a);
        }(), function() {
          var a = f;
          return Rc.i ? Rc.i(a) : Rc.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.mb = function() {
  if (u(this.bb)) {
    return this.bb = !1, new s(null, Nc(this.gb), this.j, null);
  }
  throw Error("persistent! called twice");
};
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  if (u(this.bb)) {
    return a = ie(this, b), -1 === a ? c : this.j[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.O = function() {
  if (u(this.bb)) {
    return Nc(this.gb);
  }
  throw Error("count after persistent!");
};
function oe(a, b) {
  for (var c = tb(qc), d = 0;;) {
    if (d < a) {
      c = nd.f(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function pe() {
  this.oa = !1;
}
function qe(a, b) {
  return a === b ? !0 : T(a, b) ? !0 : Wb.e(a, b);
}
var re = function() {
  function a(a, b, c, h, k) {
    a = ya(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = ya(a);
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
  c.f = b;
  c.Q = a;
  return c;
}();
function se(a, b) {
  var c = Array(a.length - 2);
  Ac(a, 0, c, 0, 2 * b);
  Ac(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var te = function() {
  function a(a, b, c, h, k, l) {
    a = a.cb(b);
    a.j[c] = h;
    a.j[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.cb(b);
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
  c.$ = a;
  return c;
}();
function ue(a, b, c) {
  this.P = a;
  this.T = b;
  this.j = c;
}
g = ue.prototype;
g.cb = function(a) {
  if (a === this.P) {
    return this;
  }
  var b = Oc(this.T), c = Array(0 > b ? 4 : 2 * (b + 1));
  Ac(this.j, 0, c, 0, 2 * b);
  return new ue(a, this.T, c);
};
g.nb = function() {
  var a = this.j;
  return ve.i ? ve.i(a) : ve.call(null, a);
};
g.Ua = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.T & e)) {
    return d;
  }
  var f = Oc(this.T & e - 1), e = this.j[2 * f], f = this.j[2 * f + 1];
  return null == e ? f.Ua(a + 5, b, c, d) : qe(c, e) ? f : d;
};
g.ta = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = Oc(this.T & h - 1);
  if (0 === (this.T & h)) {
    var l = Oc(this.T);
    if (2 * l < this.j.length) {
      var m = this.cb(a), n = m.j;
      f.oa = !0;
      Bc(n, 2 * k, n, 2 * (k + 1), 2 * (l - k));
      n[2 * k] = d;
      n[2 * k + 1] = e;
      m.T |= h;
      return m;
    }
    if (16 <= l) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[c >>> b & 31] = we.ta(a, b + 5, c, d, e, f);
      for (m = k = 0;;) {
        if (32 > k) {
          0 !== (this.T >>> k & 1) && (h[k] = null != this.j[m] ? we.ta(a, b + 5, Rb(this.j[m]), this.j[m], this.j[m + 1], f) : this.j[m + 1], m += 2), k += 1;
        } else {
          break;
        }
      }
      return new xe(a, l + 1, h);
    }
    n = Array(2 * (l + 4));
    Ac(this.j, 0, n, 0, 2 * k);
    n[2 * k] = d;
    n[2 * k + 1] = e;
    Ac(this.j, 2 * k, n, 2 * (k + 1), 2 * (l - k));
    f.oa = !0;
    m = this.cb(a);
    m.j = n;
    m.T |= h;
    return m;
  }
  var p = this.j[2 * k], r = this.j[2 * k + 1];
  if (null == p) {
    return l = r.ta(a, b + 5, c, d, e, f), l === r ? this : te.t(this, a, 2 * k + 1, l);
  }
  if (qe(d, p)) {
    return e === r ? this : te.t(this, a, 2 * k + 1, e);
  }
  f.oa = !0;
  return te.$(this, a, 2 * k, null, 2 * k + 1, function() {
    var f = b + 5;
    return ye.na ? ye.na(a, f, p, r, c, d, e) : ye.call(null, a, f, p, r, c, d, e);
  }());
};
g.sa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = Oc(this.T & f - 1);
  if (0 === (this.T & f)) {
    var k = Oc(this.T);
    if (16 <= k) {
      f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      f[b >>> a & 31] = we.sa(a + 5, b, c, d, e);
      for (var l = h = 0;;) {
        if (32 > h) {
          0 !== (this.T >>> h & 1) && (f[h] = null != this.j[l] ? we.sa(a + 5, Rb(this.j[l]), this.j[l], this.j[l + 1], e) : this.j[l + 1], l += 2), h += 1;
        } else {
          break;
        }
      }
      return new xe(null, k + 1, f);
    }
    l = Array(2 * (k + 1));
    Ac(this.j, 0, l, 0, 2 * h);
    l[2 * h] = c;
    l[2 * h + 1] = d;
    Ac(this.j, 2 * h, l, 2 * (h + 1), 2 * (k - h));
    e.oa = !0;
    return new ue(null, this.T | f, l);
  }
  var m = this.j[2 * h], n = this.j[2 * h + 1];
  if (null == m) {
    return k = n.sa(a + 5, b, c, d, e), k === n ? this : new ue(null, this.T, re.f(this.j, 2 * h + 1, k));
  }
  if (qe(c, m)) {
    return d === n ? this : new ue(null, this.T, re.f(this.j, 2 * h + 1, d));
  }
  e.oa = !0;
  return new ue(null, this.T, re.Q(this.j, 2 * h, null, 2 * h + 1, function() {
    var e = a + 5;
    return ye.$ ? ye.$(e, m, n, b, c, d) : ye.call(null, e, m, n, b, c, d);
  }()));
};
g.ob = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.T & d)) {
    return this;
  }
  var e = Oc(this.T & d - 1), f = this.j[2 * e], h = this.j[2 * e + 1];
  return null == f ? (a = h.ob(a + 5, b, c), a === h ? this : null != a ? new ue(null, this.T, re.f(this.j, 2 * e + 1, a)) : this.T === d ? null : new ue(null, this.T ^ d, se(this.j, e))) : qe(c, f) ? new ue(null, this.T ^ d, se(this.j, e)) : this;
};
var we = new ue(null, 0, []);
function xe(a, b, c) {
  this.P = a;
  this.q = b;
  this.j = c;
}
g = xe.prototype;
g.cb = function(a) {
  return a === this.P ? this : new xe(a, this.q, ya(this.j));
};
g.nb = function() {
  var a = this.j;
  return ze.i ? ze.i(a) : ze.call(null, a);
};
g.Ua = function(a, b, c, d) {
  var e = this.j[b >>> a & 31];
  return null != e ? e.Ua(a + 5, b, c, d) : d;
};
g.ta = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.j[h];
  if (null == k) {
    return a = te.t(this, a, h, we.ta(a, b + 5, c, d, e, f)), a.q += 1, a;
  }
  b = k.ta(a, b + 5, c, d, e, f);
  return b === k ? this : te.t(this, a, h, b);
};
g.sa = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.j[f];
  if (null == h) {
    return new xe(null, this.q + 1, re.f(this.j, f, we.sa(a + 5, b, c, d, e)));
  }
  a = h.sa(a + 5, b, c, d, e);
  return a === h ? this : new xe(null, this.q, re.f(this.j, f, a));
};
g.ob = function(a, b, c) {
  var d = b >>> a & 31, e = this.j[d];
  if (null != e) {
    a = e.ob(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.q) {
          a: {
            e = this.j;
            a = e.length;
            b = Array(2 * (this.q - 1));
            c = 0;
            for (var f = 1, h = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, h |= 1 << c), c += 1;
              } else {
                d = new ue(null, h, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new xe(null, this.q - 1, re.f(this.j, d, a));
        }
      } else {
        d = new xe(null, this.q, re.f(this.j, d, a));
      }
    }
    return d;
  }
  return this;
};
function Ae(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (qe(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Be(a, b, c, d) {
  this.P = a;
  this.Ma = b;
  this.q = c;
  this.j = d;
}
g = Be.prototype;
g.cb = function(a) {
  if (a === this.P) {
    return this;
  }
  var b = Array(2 * (this.q + 1));
  Ac(this.j, 0, b, 0, 2 * this.q);
  return new Be(a, this.Ma, this.q, b);
};
g.nb = function() {
  var a = this.j;
  return ve.i ? ve.i(a) : ve.call(null, a);
};
g.Ua = function(a, b, c, d) {
  a = Ae(this.j, this.q, c);
  return 0 > a ? d : qe(c, this.j[a]) ? this.j[a + 1] : d;
};
g.ta = function(a, b, c, d, e, f) {
  if (c === this.Ma) {
    b = Ae(this.j, this.q, d);
    if (-1 === b) {
      if (this.j.length > 2 * this.q) {
        return a = te.$(this, a, 2 * this.q, d, 2 * this.q + 1, e), f.oa = !0, a.q += 1, a;
      }
      c = this.j.length;
      b = Array(c + 2);
      Ac(this.j, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.oa = !0;
      f = this.q + 1;
      a === this.P ? (this.j = b, this.q = f, a = this) : a = new Be(this.P, this.Ma, f, b);
      return a;
    }
    return this.j[b + 1] === e ? this : te.t(this, a, b + 1, e);
  }
  return(new ue(a, 1 << (this.Ma >>> b & 31), [null, this, null, null])).ta(a, b, c, d, e, f);
};
g.sa = function(a, b, c, d, e) {
  return b === this.Ma ? (a = Ae(this.j, this.q, c), -1 === a ? (a = 2 * this.q, b = Array(a + 2), Ac(this.j, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.oa = !0, new Be(null, this.Ma, this.q + 1, b)) : Wb.e(this.j[a], d) ? this : new Be(null, this.Ma, this.q, re.f(this.j, a + 1, d))) : (new ue(null, 1 << (this.Ma >>> a & 31), [null, this])).sa(a, b, c, d, e);
};
g.ob = function(a, b, c) {
  a = Ae(this.j, this.q, c);
  return-1 === a ? this : 1 === this.q ? null : new Be(null, this.Ma, this.q - 1, se(this.j, Nc(a)));
};
var ye = function() {
  function a(a, b, c, h, k, l, m) {
    var n = Rb(c);
    if (n === k) {
      return new Be(null, n, 2, [c, h, l, m]);
    }
    var p = new pe;
    return we.ta(a, b, n, c, h, p).ta(a, b, k, l, m, p);
  }
  function b(a, b, c, h, k, l) {
    var m = Rb(b);
    if (m === h) {
      return new Be(null, m, 2, [b, c, k, l]);
    }
    var n = new pe;
    return we.sa(a, m, b, c, n).sa(a, h, k, l, n);
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
  c.$ = b;
  c.na = a;
  return c;
}();
function Ce(a, b, c, d, e) {
  this.meta = a;
  this.Va = b;
  this.A = c;
  this.S = d;
  this.n = e;
  this.B = 0;
  this.o = 32374860;
}
g = Ce.prototype;
g.toString = function() {
  return Hb(this);
};
g.K = function() {
  return this.meta;
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b(this);
};
g.F = function(a, b) {
  return kc(this, b);
};
g.X = function() {
  return tc(Vb, this.meta);
};
g.aa = function(a, b) {
  return Ic.e(b, this);
};
g.ba = function(a, b, c) {
  return Ic.f(b, c, this);
};
g.ca = function() {
  return null == this.S ? new V(null, 2, 5, W, [this.Va[this.A], this.Va[this.A + 1]], null) : F(this.S);
};
g.ja = function() {
  if (null == this.S) {
    var a = this.Va, b = this.A + 2;
    return ve.f ? ve.f(a, b, null) : ve.call(null, a, b, null);
  }
  var a = this.Va, b = this.A, c = J(this.S);
  return ve.f ? ve.f(a, b, c) : ve.call(null, a, b, c);
};
g.M = function() {
  return this;
};
g.N = function(a, b) {
  return new Ce(b, this.Va, this.A, this.S, this.n);
};
g.L = function(a, b) {
  return K(b, this);
};
Ce.prototype[xa] = function() {
  return Yb(this);
};
var ve = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Ce(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (u(h) && (h = h.nb(), u(h))) {
            return new Ce(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Ce(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.f(a, 0, null);
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
  c.i = b;
  c.f = a;
  return c;
}();
function De(a, b, c, d, e) {
  this.meta = a;
  this.Va = b;
  this.A = c;
  this.S = d;
  this.n = e;
  this.B = 0;
  this.o = 32374860;
}
g = De.prototype;
g.toString = function() {
  return Hb(this);
};
g.K = function() {
  return this.meta;
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b(this);
};
g.F = function(a, b) {
  return kc(this, b);
};
g.X = function() {
  return tc(Vb, this.meta);
};
g.aa = function(a, b) {
  return Ic.e(b, this);
};
g.ba = function(a, b, c) {
  return Ic.f(b, c, this);
};
g.ca = function() {
  return F(this.S);
};
g.ja = function() {
  var a = this.Va, b = this.A, c = J(this.S);
  return ze.t ? ze.t(null, a, b, c) : ze.call(null, null, a, b, c);
};
g.M = function() {
  return this;
};
g.N = function(a, b) {
  return new De(b, this.Va, this.A, this.S, this.n);
};
g.L = function(a, b) {
  return K(b, this);
};
De.prototype[xa] = function() {
  return Yb(this);
};
var ze = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (u(k) && (k = k.nb(), u(k))) {
            return new De(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new De(a, b, c, h, null);
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
  c.i = b;
  c.t = a;
  return c;
}();
function Ee(a, b, c, d, e, f) {
  this.meta = a;
  this.q = b;
  this.root = c;
  this.ga = d;
  this.la = e;
  this.n = f;
  this.o = 16123663;
  this.B = 8196;
}
g = Ee.prototype;
g.toString = function() {
  return Hb(this);
};
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  return null == b ? this.ga ? this.la : c : null == this.root ? c : this.root.Ua(0, Rb(b), b, c);
};
g.K = function() {
  return this.meta;
};
g.O = function() {
  return this.q;
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = ac(this);
};
g.F = function(a, b) {
  return he(this, b);
};
g.ib = function() {
  return new Fe({}, this.root, this.q, this.ga, this.la);
};
g.X = function() {
  return fb(qc, this.meta);
};
g.Z = function(a, b) {
  if (null == b) {
    return this.ga ? new Ee(this.meta, this.q - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.ob(0, Rb(b), b);
  return c === this.root ? this : new Ee(this.meta, this.q - 1, c, this.ga, this.la, null);
};
g.V = function(a, b, c) {
  if (null == b) {
    return this.ga && c === this.la ? this : new Ee(this.meta, this.ga ? this.q : this.q + 1, this.root, !0, c, null);
  }
  a = new pe;
  b = (null == this.root ? we : this.root).sa(0, Rb(b), b, c, a);
  return b === this.root ? this : new Ee(this.meta, a.oa ? this.q + 1 : this.q, b, this.ga, this.la, null);
};
g.xb = function(a, b) {
  return null == b ? this.ga : null == this.root ? !1 : this.root.Ua(0, Rb(b), b, Cc) !== Cc;
};
g.M = function() {
  if (0 < this.q) {
    var a = null != this.root ? this.root.nb() : null;
    return this.ga ? K(new V(null, 2, 5, W, [null, this.la], null), a) : a;
  }
  return null;
};
g.N = function(a, b) {
  return new Ee(b, this.q, this.root, this.ga, this.la, this.n);
};
g.L = function(a, b) {
  if (xc(b)) {
    return Qa(this, z.e(b, 0), z.e(b, 1));
  }
  for (var c = this, d = B(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (xc(e)) {
      c = Qa(c, z.e(e, 0), z.e(e, 1)), d = J(d);
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
  a.f = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
g.i = function(a) {
  return this.J(null, a);
};
g.e = function(a, b) {
  return this.G(null, a, b);
};
var qc = new Ee(null, 0, null, !1, null, 0);
Ee.prototype[xa] = function() {
  return Yb(this);
};
function Fe(a, b, c, d, e) {
  this.P = a;
  this.root = b;
  this.count = c;
  this.ga = d;
  this.la = e;
  this.B = 56;
  this.o = 258;
}
g = Fe.prototype;
g.kb = function(a, b, c) {
  return Ge(this, b, c);
};
g.lb = function(a, b) {
  return He(this, b);
};
g.mb = function() {
  var a;
  if (this.P) {
    this.P = null, a = new Ee(null, this.count, this.root, this.ga, this.la, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.J = function(a, b) {
  return null == b ? this.ga ? this.la : null : null == this.root ? null : this.root.Ua(0, Rb(b), b);
};
g.G = function(a, b, c) {
  return null == b ? this.ga ? this.la : c : null == this.root ? c : this.root.Ua(0, Rb(b), b, c);
};
g.O = function() {
  if (this.P) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function He(a, b) {
  if (a.P) {
    if (b ? b.o & 2048 || b.Rb || (b.o ? 0 : v(Ua, b)) : v(Ua, b)) {
      return Ge(a, Qc.i ? Qc.i(b) : Qc.call(null, b), Rc.i ? Rc.i(b) : Rc.call(null, b));
    }
    for (var c = B(b), d = a;;) {
      var e = F(c);
      if (u(e)) {
        var f = e, c = J(c), d = Ge(d, function() {
          var a = f;
          return Qc.i ? Qc.i(a) : Qc.call(null, a);
        }(), function() {
          var a = f;
          return Rc.i ? Rc.i(a) : Rc.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function Ge(a, b, c) {
  if (a.P) {
    if (null == b) {
      a.la !== c && (a.la = c), a.ga || (a.count += 1, a.ga = !0);
    } else {
      var d = new pe;
      b = (null == a.root ? we : a.root).ta(a.P, 0, Rb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.oa && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var td = function() {
  function a(a) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new D(e, 0);
    }
    return b.call(this, d);
  }
  function b(a) {
    a = B(a);
    for (var b = tb(qc);;) {
      if (a) {
        var e = J(J(a)), b = nd.f(b, F(a), F(J(a)));
        a = e;
      } else {
        return vb(b);
      }
    }
  }
  a.C = 0;
  a.s = function(a) {
    a = B(a);
    return b(a);
  };
  a.p = b;
  return a;
}();
function Ie(a, b) {
  this.da = a;
  this.fa = b;
  this.B = 0;
  this.o = 32374988;
}
g = Ie.prototype;
g.toString = function() {
  return Hb(this);
};
g.K = function() {
  return this.fa;
};
g.ia = function() {
  var a = this.da, a = (a ? a.o & 128 || a.ub || (a.o ? 0 : v(La, a)) : v(La, a)) ? this.da.ia(null) : J(this.da);
  return null == a ? null : new Ie(a, this.fa);
};
g.I = function() {
  return $b(this);
};
g.F = function(a, b) {
  return kc(this, b);
};
g.X = function() {
  return tc(Vb, this.fa);
};
g.aa = function(a, b) {
  return Ic.e(b, this);
};
g.ba = function(a, b, c) {
  return Ic.f(b, c, this);
};
g.ca = function() {
  return this.da.ca(null).Bb();
};
g.ja = function() {
  var a = this.da, a = (a ? a.o & 128 || a.ub || (a.o ? 0 : v(La, a)) : v(La, a)) ? this.da.ia(null) : J(this.da);
  return null != a ? new Ie(a, this.fa) : Vb;
};
g.M = function() {
  return this;
};
g.N = function(a, b) {
  return new Ie(this.da, b);
};
g.L = function(a, b) {
  return K(b, this);
};
Ie.prototype[xa] = function() {
  return Yb(this);
};
function Qc(a) {
  return Va(a);
}
function Je(a, b) {
  this.da = a;
  this.fa = b;
  this.B = 0;
  this.o = 32374988;
}
g = Je.prototype;
g.toString = function() {
  return Hb(this);
};
g.K = function() {
  return this.fa;
};
g.ia = function() {
  var a = this.da, a = (a ? a.o & 128 || a.ub || (a.o ? 0 : v(La, a)) : v(La, a)) ? this.da.ia(null) : J(this.da);
  return null == a ? null : new Je(a, this.fa);
};
g.I = function() {
  return $b(this);
};
g.F = function(a, b) {
  return kc(this, b);
};
g.X = function() {
  return tc(Vb, this.fa);
};
g.aa = function(a, b) {
  return Ic.e(b, this);
};
g.ba = function(a, b, c) {
  return Ic.f(b, c, this);
};
g.ca = function() {
  return this.da.ca(null).Cb();
};
g.ja = function() {
  var a = this.da, a = (a ? a.o & 128 || a.ub || (a.o ? 0 : v(La, a)) : v(La, a)) ? this.da.ia(null) : J(this.da);
  return null != a ? new Je(a, this.fa) : Vb;
};
g.M = function() {
  return this;
};
g.N = function(a, b) {
  return new Je(this.da, b);
};
g.L = function(a, b) {
  return K(b, this);
};
Je.prototype[xa] = function() {
  return Yb(this);
};
function Ke(a) {
  return(a = B(a)) ? new Je(a, null) : null;
}
function Rc(a) {
  return Wa(a);
}
function Le(a, b, c) {
  this.meta = a;
  this.fb = b;
  this.n = c;
  this.o = 15077647;
  this.B = 8196;
}
g = Le.prototype;
g.toString = function() {
  return Hb(this);
};
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  return Pa(this.fb, b) ? b : c;
};
g.K = function() {
  return this.meta;
};
g.O = function() {
  return Ca(this.fb);
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = ac(this);
};
g.F = function(a, b) {
  return vc(b) && L(this) === L(b) && qd(function(a) {
    return function(b) {
      return Ec(a, b);
    };
  }(this), b);
};
g.ib = function() {
  return new Me(tb(this.fb));
};
g.X = function() {
  return tc(Ne, this.meta);
};
g.M = function() {
  var a = B(this.fb);
  return a ? new Ie(a, null) : null;
};
g.N = function(a, b) {
  return new Le(b, this.fb, this.n);
};
g.L = function(a, b) {
  return new Le(this.meta, P.f(this.fb, b, null), null);
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
  a.f = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
g.i = function(a) {
  return this.J(null, a);
};
g.e = function(a, b) {
  return this.G(null, a, b);
};
var Ne = new Le(null, me, 0);
Le.prototype[xa] = function() {
  return Yb(this);
};
function Me(a) {
  this.Ta = a;
  this.o = 259;
  this.B = 136;
}
g = Me.prototype;
g.call = function() {
  function a(a, b, c) {
    return A.f(this.Ta, b, Cc) === Cc ? c : b;
  }
  function b(a, b) {
    return A.f(this.Ta, b, Cc) === Cc ? null : b;
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
  c.f = a;
  return c;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
g.i = function(a) {
  return A.f(this.Ta, a, Cc) === Cc ? null : a;
};
g.e = function(a, b) {
  return A.f(this.Ta, a, Cc) === Cc ? b : a;
};
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  return A.f(this.Ta, b, Cc) === Cc ? c : b;
};
g.O = function() {
  return L(this.Ta);
};
g.lb = function(a, b) {
  this.Ta = nd.f(this.Ta, b, null);
  return this;
};
g.mb = function() {
  return new Le(null, vb(this.Ta), null);
};
function Xc(a) {
  if (a && (a.B & 4096 || a.Tb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([x("Doesn't support name: "), x(a)].join(""));
}
var Oe = function() {
  function a(a, b, c) {
    return(a.i ? a.i(b) : a.call(null, b)) < (a.i ? a.i(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      if (3 < arguments.length) {
        for (var m = 0, n = Array(arguments.length - 3);m < n.length;) {
          n[m] = arguments[m + 3], ++m;
        }
        m = new D(n, 0);
      }
      return c.call(this, b, d, k, m);
    }
    function c(a, d, e, l) {
      return Hc.f(function(c, d) {
        return b.f(a, c, d);
      }, b.f(a, d, e), l);
    }
    a.C = 3;
    a.s = function(a) {
      var b = F(a);
      a = J(a);
      var d = F(a);
      a = J(a);
      var l = F(a);
      a = I(a);
      return c(b, d, l, a);
    };
    a.p = c;
    return a;
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return a.call(this, b, e, f);
      default:
        var k = null;
        if (3 < arguments.length) {
          for (var k = 0, l = Array(arguments.length - 3);k < l.length;) {
            l[k] = arguments[k + 3], ++k;
          }
          k = new D(l, 0);
        }
        return c.p(b, e, f, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 3;
  b.s = c.s;
  b.e = function(a, b) {
    return b;
  };
  b.f = a;
  b.p = c.p;
  return b;
}();
function X(a, b, c, d, e, f, h) {
  var k = la;
  try {
    la = null == la ? null : la - 1;
    if (null != la && 0 > la) {
      return ob(a, "#");
    }
    ob(a, c);
    if (B(h)) {
      var l = F(h);
      b.f ? b.f(l, a, f) : b.call(null, l, a, f);
    }
    for (var m = J(h), n = ua.i(f) - 1;;) {
      if (!m || null != n && 0 === n) {
        B(m) && 0 === n && (ob(a, d), ob(a, "..."));
        break;
      } else {
        ob(a, d);
        var p = F(m);
        c = a;
        h = f;
        b.f ? b.f(p, c, h) : b.call(null, p, c, h);
        var r = J(m);
        c = n - 1;
        m = r;
        n = c;
      }
    }
    return ob(a, e);
  } finally {
    la = k;
  }
}
var Pe = function() {
  function a(a, d) {
    var e = null;
    if (1 < arguments.length) {
      for (var e = 0, f = Array(arguments.length - 1);e < f.length;) {
        f[e] = arguments[e + 1], ++e;
      }
      e = new D(f, 0);
    }
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = B(b), f = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = f.Y(null, k);
        ob(a, l);
        k += 1;
      } else {
        if (e = B(e)) {
          f = e, yc(f) ? (e = zb(f), h = Ab(f), f = e, l = L(e), e = h, h = l) : (l = F(f), ob(a, l), e = J(f), f = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.C = 1;
  a.s = function(a) {
    var d = F(a);
    a = I(a);
    return b(d, a);
  };
  a.p = b;
  return a;
}(), Qe = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Re(a) {
  return[x('"'), x(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Qe[a];
  })), x('"')].join("");
}
var Z = function Se(b, c, d) {
  if (null == b) {
    return ob(c, "nil");
  }
  if (void 0 === b) {
    return ob(c, "#\x3cundefined\x3e");
  }
  u(function() {
    var c = O.e(d, ra);
    return u(c) ? (c = b ? b.o & 131072 || b.Sb ? !0 : b.o ? !1 : v(cb, b) : v(cb, b)) ? uc(b) : c : c;
  }()) && (ob(c, "^"), Se(uc(b), c, d), ob(c, " "));
  if (null == b) {
    return ob(c, "nil");
  }
  if (b.bc) {
    return b.lc(b, c, d);
  }
  if (b && (b.o & 2147483648 || b.W)) {
    return b.D(null, c, d);
  }
  if (va(b) === Boolean || "number" === typeof b) {
    return ob(c, "" + x(b));
  }
  if (null != b && b.constructor === Object) {
    ob(c, "#js ");
    var e = Bd.e(function(c) {
      return new V(null, 2, 5, W, [Yc.i(c), b[c]], null);
    }, zc(b));
    return Te.t ? Te.t(e, Se, c, d) : Te.call(null, e, Se, c, d);
  }
  return b instanceof Array ? X(c, Se, "#js [", " ", "]", d, b) : u("string" == typeof b) ? u(qa.i(d)) ? ob(c, Re(b)) : ob(c, b) : rc(b) ? Pe.p(c, mc(["#\x3c", "" + x(b), "\x3e"], 0)) : b instanceof Date ? (e = function(b, c) {
    for (var d = "" + x(b);;) {
      if (L(d) < c) {
        d = [x("0"), x(d)].join("");
      } else {
        return d;
      }
    }
  }, Pe.p(c, mc(['#inst "', "" + x(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : b instanceof RegExp ? Pe.p(c, mc(['#"', b.source, '"'], 0)) : (b ? b.o & 2147483648 || b.W || (b.o ? 0 : v(pb, b)) : v(pb, b)) ? rb(b, c, d) : Pe.p(c, mc(["#\x3c", "" + x(b), "\x3e"], 0));
}, xd = function() {
  function a(a) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new D(e, 0);
    }
    return b.call(this, d);
  }
  function b(a) {
    var b = oa(), e;
    (e = null == a) || (e = B(a), e = u(e) ? !1 : !0);
    if (e) {
      b = "";
    } else {
      e = x;
      var f = new ha;
      a: {
        var h = new Fb(f);
        Z(F(a), h, b);
        a = B(J(a));
        for (var k = null, l = 0, m = 0;;) {
          if (m < l) {
            var n = k.Y(null, m);
            ob(h, " ");
            Z(n, h, b);
            m += 1;
          } else {
            if (a = B(a)) {
              k = a, yc(k) ? (a = zb(k), l = Ab(k), k = a, n = L(a), a = l, l = n) : (n = F(k), ob(h, " "), Z(n, h, b), a = J(k), k = null, l = 0), m = 0;
            } else {
              break a;
            }
          }
        }
      }
      b = "" + e(f);
    }
    return b;
  }
  a.C = 0;
  a.s = function(a) {
    a = B(a);
    return b(a);
  };
  a.p = b;
  return a;
}();
function Te(a, b, c, d) {
  return X(c, function(a, c, d) {
    var k = Va(a);
    b.f ? b.f(k, c, d) : b.call(null, k, c, d);
    ob(c, " ");
    a = Wa(a);
    return b.f ? b.f(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, B(a));
}
Ad.prototype.W = !0;
Ad.prototype.D = function(a, b, c) {
  ob(b, "#\x3cVolatile: ");
  Z(this.state, b, c);
  return ob(b, "\x3e");
};
D.prototype.W = !0;
D.prototype.D = function(a, b, c) {
  return X(b, Z, "(", " ", ")", c, this);
};
Zc.prototype.W = !0;
Zc.prototype.D = function(a, b, c) {
  return X(b, Z, "(", " ", ")", c, this);
};
Ce.prototype.W = !0;
Ce.prototype.D = function(a, b, c) {
  return X(b, Z, "(", " ", ")", c, this);
};
je.prototype.W = !0;
je.prototype.D = function(a, b, c) {
  return X(b, Z, "(", " ", ")", c, this);
};
Xd.prototype.W = !0;
Xd.prototype.D = function(a, b, c) {
  return X(b, Z, "(", " ", ")", c, this);
};
Vc.prototype.W = !0;
Vc.prototype.D = function(a, b, c) {
  return X(b, Z, "(", " ", ")", c, this);
};
Ee.prototype.W = !0;
Ee.prototype.D = function(a, b, c) {
  return Te(this, Z, b, c);
};
De.prototype.W = !0;
De.prototype.D = function(a, b, c) {
  return X(b, Z, "(", " ", ")", c, this);
};
Zd.prototype.W = !0;
Zd.prototype.D = function(a, b, c) {
  return X(b, Z, "[", " ", "]", c, this);
};
Le.prototype.W = !0;
Le.prototype.D = function(a, b, c) {
  return X(b, Z, "#{", " ", "}", c, this);
};
ed.prototype.W = !0;
ed.prototype.D = function(a, b, c) {
  return X(b, Z, "(", " ", ")", c, this);
};
sd.prototype.W = !0;
sd.prototype.D = function(a, b, c) {
  ob(b, "#\x3cAtom: ");
  Z(this.state, b, c);
  return ob(b, "\x3e");
};
Je.prototype.W = !0;
Je.prototype.D = function(a, b, c) {
  return X(b, Z, "(", " ", ")", c, this);
};
V.prototype.W = !0;
V.prototype.D = function(a, b, c) {
  return X(b, Z, "[", " ", "]", c, this);
};
Tc.prototype.W = !0;
Tc.prototype.D = function(a, b) {
  return ob(b, "()");
};
s.prototype.W = !0;
s.prototype.D = function(a, b, c) {
  return Te(this, Z, b, c);
};
Ie.prototype.W = !0;
Ie.prototype.D = function(a, b, c) {
  return X(b, Z, "(", " ", ")", c, this);
};
Sc.prototype.W = !0;
Sc.prototype.D = function(a, b, c) {
  return X(b, Z, "(", " ", ")", c, this);
};
V.prototype.qb = !0;
V.prototype.rb = function(a, b) {
  return Gc.e(this, b);
};
Zd.prototype.qb = !0;
Zd.prototype.rb = function(a, b) {
  return Gc.e(this, b);
};
S.prototype.qb = !0;
S.prototype.rb = function(a, b) {
  return Wc(this, b);
};
Ub.prototype.qb = !0;
Ub.prototype.rb = function(a, b) {
  return Tb(this, b);
};
function Ue(a) {
  a *= Math.random.H ? Math.random.H() : Math.random.call(null);
  return Math.floor.i ? Math.floor.i(a) : Math.floor.call(null, a);
}
function Ve(a) {
  this.pb = a;
  this.B = 0;
  this.o = 2153775104;
}
Ve.prototype.I = function() {
  for (var a = xd.p(mc([this], 0)), b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
};
Ve.prototype.D = function(a, b) {
  return ob(b, [x('#uuid "'), x(this.pb), x('"')].join(""));
};
Ve.prototype.F = function(a, b) {
  return b instanceof Ve && this.pb === b.pb;
};
Ve.prototype.toString = function() {
  return this.pb;
};
var We = new S(null, "y", "y", -1757859776), Xe = new S(null, "animations", "animations", 140711296), Ye = new S(null, "movement", "movement", 1777030977), ra = new S(null, "meta", "meta", 1499536964), $e = new S(null, "animation", "animation", -1248293244), af = new S(null, "stage", "stage", 1843544772), bf = new S(null, "color", "color", 1011675173), cf = new S(null, "movement-speed", "movement-speed", -1779674971), sa = new S(null, "dup", "dup", 556298533), df = new S(null, "dead", "dead", -1946604091), 
ef = new S(null, "standing", "standing", -1248340762), ff = new S(null, "last-attack-frame", "last-attack-frame", 658442790), ud = new S(null, "validator", "validator", -1966190681), gf = new S(null, "max-hp", "max-hp", -1065196696), $ = new S(null, "name", "name", 1843675177), hf = new S(null, "frames", "frames", 1765687497), jf = new S(null, "neutral", "neutral", -1941956087), kf = new S(null, "tile-width", "tile-width", -1131996343), lf = new S(null, "alive", "alive", 1424929930), mf = new S(null, 
"renderable", "renderable", -1247325782), nf = new S(null, "background", "background", -863952629), of = new S(null, "facing", "facing", -854439413), pf = new S(null, "entities", "entities", 1940967403), qf = new S(null, "attacker", "attacker", 48869964), rf = new S(null, "current-frame", "current-frame", 323239981), pa = new S(null, "flush-on-newline", "flush-on-newline", -151457939), sf = new S(null, "angle", "angle", 1622094254), tf = new S(null, "default-sprite", "default-sprite", 1435097678), 
uf = new S(null, "renderer", "renderer", 336841071), vf = new S(null, "size", "size", 1098693007), wf = new S(null, "sprite", "sprite", 172516848), qa = new S(null, "readably", "readably", 1129599760), xf = new S(null, "damage", "damage", 970520018), ua = new S(null, "print-length", "print-length", 1931866356), yf = new S(null, "id", "id", -1388402092), zf = new S(null, "hp-color", "hp-color", -2010496268), Af = new S(null, "graphics", "graphics", -2079995979), Bf = new S(null, "sequence", "sequence", 
926807414), Cf = new S(null, "current-sprite", "current-sprite", -778927658), Df = new S(null, "identifier", "identifier", -805503498), Ef = new S(null, "right", "right", -452581833), Ff = new S(null, "position", "position", -2011731912), Gf = new S(null, "point", "point", 1813198264), Hf = new S(null, "moving", "moving", 1760797240), If = new S(null, "attack-range", "attack-range", 519031033), Jf = new S(null, "x", "x", 2099068185), Kf = new S(null, "anchor", "anchor", 1549638489), Lf = new S(null, 
"hp", "hp", -1541237831), Mf = new S(null, "target", "target", 253001721), Nf = new S(null, "frame-count", "frame-count", 1616946810), Of = new S(null, "attack-speed", "attack-speed", -393485413), Pf = new S(null, "current-animation", "current-animation", 90875932), Qf = new S(null, "velocity", "velocity", -581524355), Sf = new S(null, "health-bar", "health-bar", -570979971), Tf = new S(null, "attackable", "attackable", 2099301245), Uf = new S(null, "tile-height", "tile-height", -905667651), Vf = 
new S(null, "animating", "animating", -109443106), Wf = new S(null, "left", "left", -399115937), Xf = new S(null, "attacking", "attacking", 492336639);
function Yf(a, b, c, d, e) {
  this.name = a;
  this.Xa = b;
  this.m = c;
  this.k = d;
  this.n = e;
  this.o = 2229667594;
  this.B = 8192;
}
g = Yf.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "point":
      return this.Xa;
    case "name":
      return this.name;
    default:
      return O.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Position{", ", ", "}", c, U.e(new V(null, 2, 5, W, [new V(null, 2, 5, W, [$, this.name], null), new V(null, 2, 5, W, [Gf, this.Xa], null)], null), this.k));
};
g.K = function() {
  return this.m;
};
g.O = function() {
  return 2 + L(this.k);
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.Z = function(a, b) {
  return Ec(new Le(null, new s(null, 2, [$, null, Gf, null], null), null), b) ? Q.e(tc(Fd.e(me, this), this.m), b) : new Yf(this.name, this.Xa, this.m, pd(Q.e(this.k, b)), null);
};
g.V = function(a, b, c) {
  return u(T.e ? T.e($, b) : T.call(null, $, b)) ? new Yf(c, this.Xa, this.m, this.k, null) : u(T.e ? T.e(Gf, b) : T.call(null, Gf, b)) ? new Yf(this.name, c, this.m, this.k, null) : new Yf(this.name, this.Xa, this.m, P.f(this.k, b, c), null);
};
g.M = function() {
  return B(U.e(new V(null, 2, 5, W, [new V(null, 2, 5, W, [$, this.name], null), new V(null, 2, 5, W, [Gf, this.Xa], null)], null), this.k));
};
g.N = function(a, b) {
  return new Yf(this.name, this.Xa, b, this.k, this.n);
};
g.L = function(a, b) {
  return xc(b) ? Qa(this, z.e(b, 0), z.e(b, 1)) : Hc.f(Ea, this, b);
};
function Zf(a) {
  return new Yf(Ff, a, null, null, null);
}
function $f(a, b, c, d, e, f, h, k) {
  this.name = a;
  this.wa = b;
  this.va = c;
  this.anchor = d;
  this.size = e;
  this.m = f;
  this.k = h;
  this.n = k;
  this.o = 2229667594;
  this.B = 8192;
}
g = $f.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "size":
      return this.size;
    case "anchor":
      return this.anchor;
    case "current-sprite":
      return this.va;
    case "default-sprite":
      return this.wa;
    case "name":
      return this.name;
    default:
      return O.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Renderable{", ", ", "}", c, U.e(new V(null, 5, 5, W, [new V(null, 2, 5, W, [$, this.name], null), new V(null, 2, 5, W, [tf, this.wa], null), new V(null, 2, 5, W, [Cf, this.va], null), new V(null, 2, 5, W, [Kf, this.anchor], null), new V(null, 2, 5, W, [vf, this.size], null)], null), this.k));
};
g.K = function() {
  return this.m;
};
g.O = function() {
  return 5 + L(this.k);
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.Z = function(a, b) {
  return Ec(new Le(null, new s(null, 5, [$, null, tf, null, vf, null, Cf, null, Kf, null], null), null), b) ? Q.e(tc(Fd.e(me, this), this.m), b) : new $f(this.name, this.wa, this.va, this.anchor, this.size, this.m, pd(Q.e(this.k, b)), null);
};
g.V = function(a, b, c) {
  return u(T.e ? T.e($, b) : T.call(null, $, b)) ? new $f(c, this.wa, this.va, this.anchor, this.size, this.m, this.k, null) : u(T.e ? T.e(tf, b) : T.call(null, tf, b)) ? new $f(this.name, c, this.va, this.anchor, this.size, this.m, this.k, null) : u(T.e ? T.e(Cf, b) : T.call(null, Cf, b)) ? new $f(this.name, this.wa, c, this.anchor, this.size, this.m, this.k, null) : u(T.e ? T.e(Kf, b) : T.call(null, Kf, b)) ? new $f(this.name, this.wa, this.va, c, this.size, this.m, this.k, null) : u(T.e ? T.e(vf, 
  b) : T.call(null, vf, b)) ? new $f(this.name, this.wa, this.va, this.anchor, c, this.m, this.k, null) : new $f(this.name, this.wa, this.va, this.anchor, this.size, this.m, P.f(this.k, b, c), null);
};
g.M = function() {
  return B(U.e(new V(null, 5, 5, W, [new V(null, 2, 5, W, [$, this.name], null), new V(null, 2, 5, W, [tf, this.wa], null), new V(null, 2, 5, W, [Cf, this.va], null), new V(null, 2, 5, W, [Kf, this.anchor], null), new V(null, 2, 5, W, [vf, this.size], null)], null), this.k));
};
g.N = function(a, b) {
  return new $f(this.name, this.wa, this.va, this.anchor, this.size, b, this.k, this.n);
};
g.L = function(a, b) {
  return xc(b) ? Qa(this, z.e(b, 0), z.e(b, 1)) : Hc.f(Ea, this, b);
};
function ag(a, b, c) {
  return new $f(mf, a, b, bg, c, null, null, null);
}
function cg(a, b, c, d, e) {
  this.name = a;
  this.Ya = b;
  this.m = c;
  this.k = d;
  this.n = e;
  this.o = 2229667594;
  this.B = 8192;
}
g = cg.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "sprite":
      return this.Ya;
    case "name":
      return this.name;
    default:
      return O.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Background{", ", ", "}", c, U.e(new V(null, 2, 5, W, [new V(null, 2, 5, W, [$, this.name], null), new V(null, 2, 5, W, [wf, this.Ya], null)], null), this.k));
};
g.K = function() {
  return this.m;
};
g.O = function() {
  return 2 + L(this.k);
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.Z = function(a, b) {
  return Ec(new Le(null, new s(null, 2, [$, null, wf, null], null), null), b) ? Q.e(tc(Fd.e(me, this), this.m), b) : new cg(this.name, this.Ya, this.m, pd(Q.e(this.k, b)), null);
};
g.V = function(a, b, c) {
  return u(T.e ? T.e($, b) : T.call(null, $, b)) ? new cg(c, this.Ya, this.m, this.k, null) : u(T.e ? T.e(wf, b) : T.call(null, wf, b)) ? new cg(this.name, c, this.m, this.k, null) : new cg(this.name, this.Ya, this.m, P.f(this.k, b, c), null);
};
g.M = function() {
  return B(U.e(new V(null, 2, 5, W, [new V(null, 2, 5, W, [$, this.name], null), new V(null, 2, 5, W, [wf, this.Ya], null)], null), this.k));
};
g.N = function(a, b) {
  return new cg(this.name, this.Ya, b, this.k, this.n);
};
g.L = function(a, b) {
  return xc(b) ? Qa(this, z.e(b, 0), z.e(b, 1)) : Hc.f(Ea, this, b);
};
function dg(a, b, c, d, e, f, h, k, l) {
  this.name = a;
  this.pa = b;
  this.qa = c;
  this.ra = d;
  this.target = e;
  this.ua = f;
  this.m = h;
  this.k = k;
  this.n = l;
  this.o = 2229667594;
  this.B = 8192;
}
g = dg.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "last-attack-frame":
      return this.ua;
    case "target":
      return this.target;
    case "damage":
      return this.ra;
    case "attack-speed":
      return this.qa;
    case "attack-range":
      return this.pa;
    case "name":
      return this.name;
    default:
      return O.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Attacker{", ", ", "}", c, U.e(new V(null, 6, 5, W, [new V(null, 2, 5, W, [$, this.name], null), new V(null, 2, 5, W, [If, this.pa], null), new V(null, 2, 5, W, [Of, this.qa], null), new V(null, 2, 5, W, [xf, this.ra], null), new V(null, 2, 5, W, [Mf, this.target], null), new V(null, 2, 5, W, [ff, this.ua], null)], null), this.k));
};
g.K = function() {
  return this.m;
};
g.O = function() {
  return 6 + L(this.k);
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.Z = function(a, b) {
  return Ec(new Le(null, new s(null, 6, [ff, null, $, null, xf, null, If, null, Mf, null, Of, null], null), null), b) ? Q.e(tc(Fd.e(me, this), this.m), b) : new dg(this.name, this.pa, this.qa, this.ra, this.target, this.ua, this.m, pd(Q.e(this.k, b)), null);
};
g.V = function(a, b, c) {
  return u(T.e ? T.e($, b) : T.call(null, $, b)) ? new dg(c, this.pa, this.qa, this.ra, this.target, this.ua, this.m, this.k, null) : u(T.e ? T.e(If, b) : T.call(null, If, b)) ? new dg(this.name, c, this.qa, this.ra, this.target, this.ua, this.m, this.k, null) : u(T.e ? T.e(Of, b) : T.call(null, Of, b)) ? new dg(this.name, this.pa, c, this.ra, this.target, this.ua, this.m, this.k, null) : u(T.e ? T.e(xf, b) : T.call(null, xf, b)) ? new dg(this.name, this.pa, this.qa, c, this.target, this.ua, this.m, 
  this.k, null) : u(T.e ? T.e(Mf, b) : T.call(null, Mf, b)) ? new dg(this.name, this.pa, this.qa, this.ra, c, this.ua, this.m, this.k, null) : u(T.e ? T.e(ff, b) : T.call(null, ff, b)) ? new dg(this.name, this.pa, this.qa, this.ra, this.target, c, this.m, this.k, null) : new dg(this.name, this.pa, this.qa, this.ra, this.target, this.ua, this.m, P.f(this.k, b, c), null);
};
g.M = function() {
  return B(U.e(new V(null, 6, 5, W, [new V(null, 2, 5, W, [$, this.name], null), new V(null, 2, 5, W, [If, this.pa], null), new V(null, 2, 5, W, [Of, this.qa], null), new V(null, 2, 5, W, [xf, this.ra], null), new V(null, 2, 5, W, [Mf, this.target], null), new V(null, 2, 5, W, [ff, this.ua], null)], null), this.k));
};
g.N = function(a, b) {
  return new dg(this.name, this.pa, this.qa, this.ra, this.target, this.ua, b, this.k, this.n);
};
g.L = function(a, b) {
  return xc(b) ? Qa(this, z.e(b, 0), z.e(b, 1)) : Hc.f(Ea, this, b);
};
function eg(a, b, c, d, e) {
  return new dg(qf, a, b, c, d, e, null, null, null);
}
function fg(a, b, c, d, e) {
  this.name = a;
  this.Wa = b;
  this.m = c;
  this.k = d;
  this.n = e;
  this.o = 2229667594;
  this.B = 8192;
}
g = fg.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "hp":
      return this.Wa;
    case "name":
      return this.name;
    default:
      return O.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Attackable{", ", ", "}", c, U.e(new V(null, 2, 5, W, [new V(null, 2, 5, W, [$, this.name], null), new V(null, 2, 5, W, [Lf, this.Wa], null)], null), this.k));
};
g.K = function() {
  return this.m;
};
g.O = function() {
  return 2 + L(this.k);
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.Z = function(a, b) {
  return Ec(new Le(null, new s(null, 2, [$, null, Lf, null], null), null), b) ? Q.e(tc(Fd.e(me, this), this.m), b) : new fg(this.name, this.Wa, this.m, pd(Q.e(this.k, b)), null);
};
g.V = function(a, b, c) {
  return u(T.e ? T.e($, b) : T.call(null, $, b)) ? new fg(c, this.Wa, this.m, this.k, null) : u(T.e ? T.e(Lf, b) : T.call(null, Lf, b)) ? new fg(this.name, c, this.m, this.k, null) : new fg(this.name, this.Wa, this.m, P.f(this.k, b, c), null);
};
g.M = function() {
  return B(U.e(new V(null, 2, 5, W, [new V(null, 2, 5, W, [$, this.name], null), new V(null, 2, 5, W, [Lf, this.Wa], null)], null), this.k));
};
g.N = function(a, b) {
  return new fg(this.name, this.Wa, b, this.k, this.n);
};
g.L = function(a, b) {
  return xc(b) ? Qa(this, z.e(b, 0), z.e(b, 1)) : Hc.f(Ea, this, b);
};
function gg(a, b, c, d, e) {
  this.name = a;
  this.Za = b;
  this.m = c;
  this.k = d;
  this.n = e;
  this.o = 2229667594;
  this.B = 8192;
}
g = gg.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "velocity":
      return this.Za;
    case "name":
      return this.name;
    default:
      return O.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Movement{", ", ", "}", c, U.e(new V(null, 2, 5, W, [new V(null, 2, 5, W, [$, this.name], null), new V(null, 2, 5, W, [Qf, this.Za], null)], null), this.k));
};
g.K = function() {
  return this.m;
};
g.O = function() {
  return 2 + L(this.k);
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.Z = function(a, b) {
  return Ec(new Le(null, new s(null, 2, [$, null, Qf, null], null), null), b) ? Q.e(tc(Fd.e(me, this), this.m), b) : new gg(this.name, this.Za, this.m, pd(Q.e(this.k, b)), null);
};
g.V = function(a, b, c) {
  return u(T.e ? T.e($, b) : T.call(null, $, b)) ? new gg(c, this.Za, this.m, this.k, null) : u(T.e ? T.e(Qf, b) : T.call(null, Qf, b)) ? new gg(this.name, c, this.m, this.k, null) : new gg(this.name, this.Za, this.m, P.f(this.k, b, c), null);
};
g.M = function() {
  return B(U.e(new V(null, 2, 5, W, [new V(null, 2, 5, W, [$, this.name], null), new V(null, 2, 5, W, [Qf, this.Za], null)], null), this.k));
};
g.N = function(a, b) {
  return new gg(this.name, this.Za, b, this.k, this.n);
};
g.L = function(a, b) {
  return xc(b) ? Qa(this, z.e(b, 0), z.e(b, 1)) : Hc.f(Ea, this, b);
};
function hg(a) {
  return new gg(Ye, a, null, null, null);
}
function ig(a, b, c, d, e) {
  this.name = a;
  this.angle = b;
  this.m = c;
  this.k = d;
  this.n = e;
  this.o = 2229667594;
  this.B = 8192;
}
g = ig.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "angle":
      return this.angle;
    case "name":
      return this.name;
    default:
      return O.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Facing{", ", ", "}", c, U.e(new V(null, 2, 5, W, [new V(null, 2, 5, W, [$, this.name], null), new V(null, 2, 5, W, [sf, this.angle], null)], null), this.k));
};
g.K = function() {
  return this.m;
};
g.O = function() {
  return 2 + L(this.k);
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.Z = function(a, b) {
  return Ec(new Le(null, new s(null, 2, [$, null, sf, null], null), null), b) ? Q.e(tc(Fd.e(me, this), this.m), b) : new ig(this.name, this.angle, this.m, pd(Q.e(this.k, b)), null);
};
g.V = function(a, b, c) {
  return u(T.e ? T.e($, b) : T.call(null, $, b)) ? new ig(c, this.angle, this.m, this.k, null) : u(T.e ? T.e(sf, b) : T.call(null, sf, b)) ? new ig(this.name, c, this.m, this.k, null) : new ig(this.name, this.angle, this.m, P.f(this.k, b, c), null);
};
g.M = function() {
  return B(U.e(new V(null, 2, 5, W, [new V(null, 2, 5, W, [$, this.name], null), new V(null, 2, 5, W, [sf, this.angle], null)], null), this.k));
};
g.N = function(a, b) {
  return new ig(this.name, this.angle, b, this.k, this.n);
};
g.L = function(a, b) {
  return xc(b) ? Qa(this, z.e(b, 0), z.e(b, 1)) : Hc.f(Ea, this, b);
};
function jg(a, b, c, d, e, f, h) {
  this.name = a;
  this.animations = b;
  this.Na = c;
  this.Oa = d;
  this.m = e;
  this.k = f;
  this.n = h;
  this.o = 2229667594;
  this.B = 8192;
}
g = jg.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "current-frame":
      return this.Oa;
    case "current-animation":
      return this.Na;
    case "animations":
      return this.animations;
    case "name":
      return this.name;
    default:
      return O.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Animation{", ", ", "}", c, U.e(new V(null, 4, 5, W, [new V(null, 2, 5, W, [$, this.name], null), new V(null, 2, 5, W, [Xe, this.animations], null), new V(null, 2, 5, W, [Pf, this.Na], null), new V(null, 2, 5, W, [rf, this.Oa], null)], null), this.k));
};
g.K = function() {
  return this.m;
};
g.O = function() {
  return 4 + L(this.k);
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.Z = function(a, b) {
  return Ec(new Le(null, new s(null, 4, [Xe, null, $, null, rf, null, Pf, null], null), null), b) ? Q.e(tc(Fd.e(me, this), this.m), b) : new jg(this.name, this.animations, this.Na, this.Oa, this.m, pd(Q.e(this.k, b)), null);
};
g.V = function(a, b, c) {
  return u(T.e ? T.e($, b) : T.call(null, $, b)) ? new jg(c, this.animations, this.Na, this.Oa, this.m, this.k, null) : u(T.e ? T.e(Xe, b) : T.call(null, Xe, b)) ? new jg(this.name, c, this.Na, this.Oa, this.m, this.k, null) : u(T.e ? T.e(Pf, b) : T.call(null, Pf, b)) ? new jg(this.name, this.animations, c, this.Oa, this.m, this.k, null) : u(T.e ? T.e(rf, b) : T.call(null, rf, b)) ? new jg(this.name, this.animations, this.Na, c, this.m, this.k, null) : new jg(this.name, this.animations, this.Na, 
  this.Oa, this.m, P.f(this.k, b, c), null);
};
g.M = function() {
  return B(U.e(new V(null, 4, 5, W, [new V(null, 2, 5, W, [$, this.name], null), new V(null, 2, 5, W, [Xe, this.animations], null), new V(null, 2, 5, W, [Pf, this.Na], null), new V(null, 2, 5, W, [rf, this.Oa], null)], null), this.k));
};
g.N = function(a, b) {
  return new jg(this.name, this.animations, this.Na, this.Oa, b, this.k, this.n);
};
g.L = function(a, b) {
  return xc(b) ? Qa(this, z.e(b, 0), z.e(b, 1)) : Hc.f(Ea, this, b);
};
function kg(a, b, c, d, e, f, h) {
  this.name = a;
  this.Pa = b;
  this.color = c;
  this.Qa = d;
  this.m = e;
  this.k = f;
  this.n = h;
  this.o = 2229667594;
  this.B = 8192;
}
g = kg.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "max-hp":
      return this.Qa;
    case "color":
      return this.color;
    case "graphics":
      return this.Pa;
    case "name":
      return this.name;
    default:
      return O.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Health-bar{", ", ", "}", c, U.e(new V(null, 4, 5, W, [new V(null, 2, 5, W, [$, this.name], null), new V(null, 2, 5, W, [Af, this.Pa], null), new V(null, 2, 5, W, [bf, this.color], null), new V(null, 2, 5, W, [gf, this.Qa], null)], null), this.k));
};
g.K = function() {
  return this.m;
};
g.O = function() {
  return 4 + L(this.k);
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.Z = function(a, b) {
  return Ec(new Le(null, new s(null, 4, [bf, null, gf, null, $, null, Af, null], null), null), b) ? Q.e(tc(Fd.e(me, this), this.m), b) : new kg(this.name, this.Pa, this.color, this.Qa, this.m, pd(Q.e(this.k, b)), null);
};
g.V = function(a, b, c) {
  return u(T.e ? T.e($, b) : T.call(null, $, b)) ? new kg(c, this.Pa, this.color, this.Qa, this.m, this.k, null) : u(T.e ? T.e(Af, b) : T.call(null, Af, b)) ? new kg(this.name, c, this.color, this.Qa, this.m, this.k, null) : u(T.e ? T.e(bf, b) : T.call(null, bf, b)) ? new kg(this.name, this.Pa, c, this.Qa, this.m, this.k, null) : u(T.e ? T.e(gf, b) : T.call(null, gf, b)) ? new kg(this.name, this.Pa, this.color, c, this.m, this.k, null) : new kg(this.name, this.Pa, this.color, this.Qa, this.m, P.f(this.k, 
  b, c), null);
};
g.M = function() {
  return B(U.e(new V(null, 4, 5, W, [new V(null, 2, 5, W, [$, this.name], null), new V(null, 2, 5, W, [Af, this.Pa], null), new V(null, 2, 5, W, [bf, this.color], null), new V(null, 2, 5, W, [gf, this.Qa], null)], null), this.k));
};
g.N = function(a, b) {
  return new kg(this.name, this.Pa, this.color, this.Qa, b, this.k, this.n);
};
g.L = function(a, b) {
  return xc(b) ? Qa(this, z.e(b, 0), z.e(b, 1)) : Hc.f(Ea, this, b);
};
function lg(a, b, c) {
  return new kg(Sf, a, b, c, null, null, null);
}
function mg(a, b, c, d) {
  this.name = a;
  this.m = b;
  this.k = c;
  this.n = d;
  this.o = 2229667594;
  this.B = 8192;
}
g = mg.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "name":
      return this.name;
    default:
      return O.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Attacking{", ", ", "}", c, U.e(new V(null, 1, 5, W, [new V(null, 2, 5, W, [$, this.name], null)], null), this.k));
};
g.K = function() {
  return this.m;
};
g.O = function() {
  return 1 + L(this.k);
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.Z = function(a, b) {
  return Ec(new Le(null, new s(null, 1, [$, null], null), null), b) ? Q.e(tc(Fd.e(me, this), this.m), b) : new mg(this.name, this.m, pd(Q.e(this.k, b)), null);
};
g.V = function(a, b, c) {
  return u(T.e ? T.e($, b) : T.call(null, $, b)) ? new mg(c, this.m, this.k, null) : new mg(this.name, this.m, P.f(this.k, b, c), null);
};
g.M = function() {
  return B(U.e(new V(null, 1, 5, W, [new V(null, 2, 5, W, [$, this.name], null)], null), this.k));
};
g.N = function(a, b) {
  return new mg(this.name, b, this.k, this.n);
};
g.L = function(a, b) {
  return xc(b) ? Qa(this, z.e(b, 0), z.e(b, 1)) : Hc.f(Ea, this, b);
};
function ng() {
  return new mg(Xf, null, null, null);
}
function og(a, b, c, d) {
  this.name = a;
  this.m = b;
  this.k = c;
  this.n = d;
  this.o = 2229667594;
  this.B = 8192;
}
g = og.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "name":
      return this.name;
    default:
      return O.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Animating{", ", ", "}", c, U.e(new V(null, 1, 5, W, [new V(null, 2, 5, W, [$, this.name], null)], null), this.k));
};
g.K = function() {
  return this.m;
};
g.O = function() {
  return 1 + L(this.k);
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.Z = function(a, b) {
  return Ec(new Le(null, new s(null, 1, [$, null], null), null), b) ? Q.e(tc(Fd.e(me, this), this.m), b) : new og(this.name, this.m, pd(Q.e(this.k, b)), null);
};
g.V = function(a, b, c) {
  return u(T.e ? T.e($, b) : T.call(null, $, b)) ? new og(c, this.m, this.k, null) : new og(this.name, this.m, P.f(this.k, b, c), null);
};
g.M = function() {
  return B(U.e(new V(null, 1, 5, W, [new V(null, 2, 5, W, [$, this.name], null)], null), this.k));
};
g.N = function(a, b) {
  return new og(this.name, b, this.k, this.n);
};
g.L = function(a, b) {
  return xc(b) ? Qa(this, z.e(b, 0), z.e(b, 1)) : Hc.f(Ea, this, b);
};
function pg() {
  return new og(Vf, null, null, null);
}
function qg(a, b, c, d) {
  this.name = a;
  this.m = b;
  this.k = c;
  this.n = d;
  this.o = 2229667594;
  this.B = 8192;
}
g = qg.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "name":
      return this.name;
    default:
      return O.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Alive{", ", ", "}", c, U.e(new V(null, 1, 5, W, [new V(null, 2, 5, W, [$, this.name], null)], null), this.k));
};
g.K = function() {
  return this.m;
};
g.O = function() {
  return 1 + L(this.k);
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.Z = function(a, b) {
  return Ec(new Le(null, new s(null, 1, [$, null], null), null), b) ? Q.e(tc(Fd.e(me, this), this.m), b) : new qg(this.name, this.m, pd(Q.e(this.k, b)), null);
};
g.V = function(a, b, c) {
  return u(T.e ? T.e($, b) : T.call(null, $, b)) ? new qg(c, this.m, this.k, null) : new qg(this.name, this.m, P.f(this.k, b, c), null);
};
g.M = function() {
  return B(U.e(new V(null, 1, 5, W, [new V(null, 2, 5, W, [$, this.name], null)], null), this.k));
};
g.N = function(a, b) {
  return new qg(this.name, b, this.k, this.n);
};
g.L = function(a, b) {
  return xc(b) ? Qa(this, z.e(b, 0), z.e(b, 1)) : Hc.f(Ea, this, b);
};
function rg() {
  return new qg(lf, null, null, null);
}
function sg(a, b, c, d) {
  this.name = a;
  this.m = b;
  this.k = c;
  this.n = d;
  this.o = 2229667594;
  this.B = 8192;
}
g = sg.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "name":
      return this.name;
    default:
      return O.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Dead{", ", ", "}", c, U.e(new V(null, 1, 5, W, [new V(null, 2, 5, W, [$, this.name], null)], null), this.k));
};
g.K = function() {
  return this.m;
};
g.O = function() {
  return 1 + L(this.k);
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.Z = function(a, b) {
  return Ec(new Le(null, new s(null, 1, [$, null], null), null), b) ? Q.e(tc(Fd.e(me, this), this.m), b) : new sg(this.name, this.m, pd(Q.e(this.k, b)), null);
};
g.V = function(a, b, c) {
  return u(T.e ? T.e($, b) : T.call(null, $, b)) ? new sg(c, this.m, this.k, null) : new sg(this.name, this.m, P.f(this.k, b, c), null);
};
g.M = function() {
  return B(U.e(new V(null, 1, 5, W, [new V(null, 2, 5, W, [$, this.name], null)], null), this.k));
};
g.N = function(a, b) {
  return new sg(this.name, b, this.k, this.n);
};
g.L = function(a, b) {
  return xc(b) ? Qa(this, z.e(b, 0), z.e(b, 1)) : Hc.f(Ea, this, b);
};
function tg(a, b, c, d) {
  this.name = a;
  this.m = b;
  this.k = c;
  this.n = d;
  this.o = 2229667594;
  this.B = 8192;
}
g = tg.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "name":
      return this.name;
    default:
      return O.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Moving{", ", ", "}", c, U.e(new V(null, 1, 5, W, [new V(null, 2, 5, W, [$, this.name], null)], null), this.k));
};
g.K = function() {
  return this.m;
};
g.O = function() {
  return 1 + L(this.k);
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.Z = function(a, b) {
  return Ec(new Le(null, new s(null, 1, [$, null], null), null), b) ? Q.e(tc(Fd.e(me, this), this.m), b) : new tg(this.name, this.m, pd(Q.e(this.k, b)), null);
};
g.V = function(a, b, c) {
  return u(T.e ? T.e($, b) : T.call(null, $, b)) ? new tg(c, this.m, this.k, null) : new tg(this.name, this.m, P.f(this.k, b, c), null);
};
g.M = function() {
  return B(U.e(new V(null, 1, 5, W, [new V(null, 2, 5, W, [$, this.name], null)], null), this.k));
};
g.N = function(a, b) {
  return new tg(this.name, b, this.k, this.n);
};
g.L = function(a, b) {
  return xc(b) ? Qa(this, z.e(b, 0), z.e(b, 1)) : Hc.f(Ea, this, b);
};
function ug() {
  return new tg(Hf, null, null, null);
}
function vg(a, b, c, d) {
  this.name = a;
  this.m = b;
  this.k = c;
  this.n = d;
  this.o = 2229667594;
  this.B = 8192;
}
g = vg.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "name":
      return this.name;
    default:
      return O.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Standing{", ", ", "}", c, U.e(new V(null, 1, 5, W, [new V(null, 2, 5, W, [$, this.name], null)], null), this.k));
};
g.K = function() {
  return this.m;
};
g.O = function() {
  return 1 + L(this.k);
};
g.I = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.Z = function(a, b) {
  return Ec(new Le(null, new s(null, 1, [$, null], null), null), b) ? Q.e(tc(Fd.e(me, this), this.m), b) : new vg(this.name, this.m, pd(Q.e(this.k, b)), null);
};
g.V = function(a, b, c) {
  return u(T.e ? T.e($, b) : T.call(null, $, b)) ? new vg(c, this.m, this.k, null) : new vg(this.name, this.m, P.f(this.k, b, c), null);
};
g.M = function() {
  return B(U.e(new V(null, 1, 5, W, [new V(null, 2, 5, W, [$, this.name], null)], null), this.k));
};
g.N = function(a, b) {
  return new vg(this.name, b, this.k, this.n);
};
g.L = function(a, b) {
  return xc(b) ? Qa(this, z.e(b, 0), z.e(b, 1)) : Hc.f(Ea, this, b);
};
function wg() {
  return new vg(ef, null, null, null);
}
;var xg = function() {
  function a(a, b) {
    for (var c = new ha, h = B(b);;) {
      if (h) {
        c.append("" + x(F(h))), h = J(h), null != h && c.append(a);
      } else {
        return c.toString();
      }
    }
  }
  function b(a) {
    var b = new ha;
    for (a = B(a);;) {
      if (a) {
        b = b.append("" + x(F(a))), a = J(a);
      } else {
        return b.toString();
      }
    }
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
  c.i = b;
  c.e = a;
  return c;
}();
function yg() {
  var a = zg();
  return "" + x(a.pb);
}
function zg() {
  function a() {
    return Ue(16).toString(16);
  }
  return new Ve(xg.i(U.p(Dd.e(8, a), "-", mc([Dd.e(4, a), "-4", Dd.e(3, a), "-", (8 | 3 & Ue(15)).toString(16), Dd.e(3, a), "-", Dd.e(12, a)], 0))));
}
var Ag = [x("^"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("-"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("-"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("-"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("-"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), 
x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("$")].join("");
if (!(Ag instanceof RegExp)) {
  var Bg;
  var Cg = /^(?:\(\?([idmsux]*)\))?(.*)/;
  if ("string" === typeof Ag) {
    var Dg = Cg.exec(Ag);
    Bg = null == Dg ? null : 1 === L(Dg) ? F(Dg) : vb(Hc.f(ub, tb(nc), Dg));
  } else {
    throw new TypeError("re-find must match against a string.");
  }
  N.f(Bg, 0, null);
  N.f(Bg, 1, null);
  N.f(Bg, 2, null);
}
;function Eg(a, b) {
  return Ec(a, b);
}
function Fg(a, b) {
  return P.f(a, $.i(b), b);
}
function Gg(a, b) {
  return Hc.f(function(a, b) {
    return Q.e(a, $.i(b));
  }, a, b);
}
function Hg(a, b) {
  return Hc.f(function(a, b) {
    return P.f(a, $.i(b), b);
  }, a, b);
}
var Ig = function() {
  function a(a) {
    return new s(null, 2, [$, Df, yf, a], null);
  }
  function b() {
    return c.i(yg());
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
  c.H = b;
  c.i = a;
  return c;
}(), Jg = function() {
  function a(a) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new D(e, 0);
    }
    return b.call(this, d);
  }
  function b(a) {
    a = Hc.f(function(a, b) {
      return P.f(a, $.i(b), b);
    }, me, a);
    return Ec(a, Df) ? a : Fg(a, Ig.H());
  }
  a.C = 0;
  a.s = function(a) {
    a = B(a);
    return b(a);
  };
  a.p = b;
  return a;
}(), Kg = function() {
  function a(a, d) {
    var e = null;
    if (1 < arguments.length) {
      for (var e = 0, f = Array(arguments.length - 1);e < f.length;) {
        f[e] = arguments[e + 1], ++e;
      }
      e = new D(f, 0);
    }
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = Ke(pf.i(a));
    return Ed.e(function() {
      return function(a) {
        return qd(rd.e(Eg, a), b);
      };
    }(e), e);
  }
  a.C = 1;
  a.s = function(a) {
    var d = F(a);
    a = I(a);
    return b(d, a);
  };
  a.p = b;
  return a;
}();
function Lg(a, b) {
  var c = function() {
    var b = pf.i(a);
    return u(b) ? b : me;
  }();
  return P.f(a, pf, Hc.f(function() {
    return function(a, b) {
      return P.f(a, Gd.e(b, new V(null, 2, 5, W, [Df, yf], null)), b);
    };
  }(c), c, b));
}
function Mg(a) {
  return Gd.e(a, new V(null, 2, 5, W, [Ff, Gf], null));
}
function Ng(a) {
  return Gd.e(a, new V(null, 2, 5, W, [qf, Mf], null));
}
function Og(a) {
  return Gd.e(a, new V(null, 2, 5, W, [Ye, Qf], null));
}
function Pg(a) {
  return Gd.e(a, new V(null, 2, 5, W, [qf, If], null));
}
function Qg(a) {
  return Gd.e(a, new V(null, 2, 5, W, [qf, Of], null));
}
function Rg(a) {
  return Gd.e(a, new V(null, 2, 5, W, [qf, xf], null));
}
function Sg(a) {
  return Gd.e(a, new V(null, 2, 5, W, [Tf, Lf], null));
}
function Ug(a) {
  return Gd.e(a, new V(null, 2, 5, W, [qf, ff], null));
}
function Vg(a) {
  var b = Gd.e(a, new V(null, 1, 5, W, [$e], null));
  a = Xe.i(b);
  b = Pf.i(b);
  return b.i ? b.i(a) : b.call(null, a);
}
function Wg(a, b) {
  return Ed.e(function(b) {
    return Wb.e(Ng(b), a);
  }, b);
}
function Xg(a) {
  return Gd.e(a, new V(null, 2, 5, W, [mf, Cf], null)).getBounds();
}
;function Yg(a, b, c) {
  var d = Xg(a), e = Xg(b), f = Mg(a);
  a = N.f(f, 0, null);
  var f = N.f(f, 1, null), h = Mg(b);
  b = N.f(h, 0, null);
  var h = N.f(h, 1, null), k = d.height / 2, d = d.width / 2, l = e.height / 2, e = e.width / 2;
  return!(a - d - c > b + e || b - e > a + d + c || f - k - c > h + l || h - l > f + k + c);
}
function Zg(a, b) {
  var c = Mg(a), d = N.f(c, 0, null), c = N.f(c, 1, null), e = Mg(b), f = N.f(e, 0, null), e = N.f(e, 1, null);
  return Math.sqrt(Math.pow(Math.abs(d - f), 2) + Math.pow(Math.abs(c - e), 2));
}
function $g(a, b) {
  return R.f(Oe, rd.e(Zg, a), b);
}
function ah(a, b, c) {
  var d = Ed.e(function(a) {
    return Ec(a, lf);
  }, c);
  return B(d) ? Lg(a, function() {
    return function(a) {
      return function h(b) {
        return new Zc(null, function(a) {
          return function() {
            for (;;) {
              var c = B(b);
              if (c) {
                if (yc(c)) {
                  var d = zb(c), e = L(d), r = cd(e);
                  return function() {
                    for (var b = 0;;) {
                      if (b < e) {
                        var c = z.e(d, b), h = r, k = Og(c), m = Pg(c), t = Qg(c), ga = Rg(c), Na = Ug(c), H = $g(c, a), ce = !Yg(c, H, m), c = Hg(Gg(c, new V(null, 3, 5, W, [ug(), ng(), wg()], null)), new V(null, 3, 5, W, [hg(k), u(ce) ? ug() : ng(), eg(m, t, ga, H, Na)], null));
                        h.add(c);
                        b += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? fd(r.R(), h(Ab(c))) : fd(r.R(), null);
                }
                var t = F(c);
                return K(function() {
                  var b = Og(t), c = Pg(t), d = Qg(t), e = Rg(t), h = Ug(t), k = $g(t, a), m = !Yg(t, k, c);
                  return Hg(Gg(t, new V(null, 3, 5, W, [ug(), ng(), wg()], null)), new V(null, 3, 5, W, [hg(b), u(m) ? ug() : ng(), eg(c, d, e, k, h)], null));
                }(), h(I(c)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(d)(b);
  }()) : Lg(a, function() {
    return function(a) {
      return function h(b) {
        return new Zc(null, function() {
          return function() {
            for (;;) {
              var a = B(b);
              if (a) {
                if (yc(a)) {
                  var c = zb(a), d = L(c), e = cd(d);
                  a: {
                    for (var r = 0;;) {
                      if (r < d) {
                        var t = z.e(c, r), t = Fg(Gg(t, new V(null, 2, 5, W, [ug(), ng()], null)), wg());
                        e.add(t);
                        r += 1;
                      } else {
                        c = !0;
                        break a;
                      }
                    }
                    c = void 0;
                  }
                  return c ? fd(e.R(), h(Ab(a))) : fd(e.R(), null);
                }
                e = F(a);
                return K(Fg(Gg(e, new V(null, 2, 5, W, [ug(), ng()], null)), wg()), h(I(a)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(d)(b);
  }());
}
;var bh;
a: {
  var ch = aa.navigator;
  if (ch) {
    var dh = ch.userAgent;
    if (dh) {
      bh = dh;
      break a;
    }
  }
  bh = "";
}
function eh(a) {
  return-1 != bh.indexOf(a);
}
;var fh = eh("Opera") || eh("OPR"), gh = eh("Trident") || eh("MSIE"), hh = eh("Gecko") && -1 == bh.toLowerCase().indexOf("webkit") && !(eh("Trident") || eh("MSIE")), ih = -1 != bh.toLowerCase().indexOf("webkit"), jh = function() {
  var a = "", b;
  if (fh && aa.opera) {
    return a = aa.opera.version, "function" == q(a) ? a() : a;
  }
  hh ? b = /rv\:([^\);]+)(\)|;)/ : gh ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : ih && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(bh)) ? a[1] : "");
  return gh && (b = (b = aa.document) ? b.documentMode : void 0, b > parseFloat(a)) ? String(b) : a;
}(), kh = {};
function lh(a) {
  var b;
  if (!(b = kh[a])) {
    b = 0;
    for (var c = String(jh).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(h) || ["", "", ""], p = m.exec(k) || ["", "", ""];
        if (0 == n[0].length && 0 == p[0].length) {
          break;
        }
        b = ea(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == p[1].length ? 0 : parseInt(p[1], 10)) || ea(0 == n[2].length, 0 == p[2].length) || ea(n[2], p[2]);
      } while (0 == b);
    }
    b = kh[a] = 0 <= b;
  }
  return b;
}
;gh && lh("9");
!ih || lh("528");
hh && lh("1.9b") || gh && lh("8") || fh && lh("9.5") || ih && lh("528");
hh && !lh("8") || gh && lh("9");
function mh(a, b) {
  for (var c = a, d = b;;) {
    if (B(d)) {
      var e = F(d), e = Rg(e), c = c - e, d = I(d)
    } else {
      return c;
    }
  }
}
function nh(a, b, c) {
  var d = Nf.i(a), e = Ed.e(function(a) {
    return function(b) {
      return Wb.e(a, Ug(b));
    };
  }(d), b);
  return Lg(a, function() {
    return function(a, b) {
      return function l(c) {
        return new Zc(null, function(a, b) {
          return function() {
            for (;;) {
              var a = B(c);
              if (a) {
                if (yc(a)) {
                  var d = zb(a), e = L(d), f = cd(e);
                  return function() {
                    for (var a = 0;;) {
                      if (a < e) {
                        var c = z.e(d, a), h = f, l = Wg(c, b), m = Sg(c), l = mh(m, l), c = Hg(Q.e(c, $.i(rg())), new V(null, 2, 5, W, [new fg(Tf, l, null, null, null), 0 < l ? rg() : new sg(df, null, null, null)], null));
                        h.add(c);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? fd(f.R(), l(Ab(a))) : fd(f.R(), null);
                }
                var h = F(a);
                return K(function() {
                  var a = Wg(h, b), c = Sg(h), a = mh(c, a);
                  return Hg(Q.e(h, $.i(rg())), new V(null, 2, 5, W, [new fg(Tf, a, null, null, null), 0 < a ? rg() : new sg(df, null, null, null)], null));
                }(), l(I(a)));
              }
              return null;
            }
          };
        }(a, b), null, null);
      };
    }(d, e)(c);
  }());
}
;function oh(a, b, c) {
  a = Ug(a);
  return c - a >= b ? c : a;
}
function ph(a) {
  return Wb.e(Pf.i(a), Xf) ? a : P.p(a, Pf, Xf, mc([rf, 0], 0));
}
function qh(a, b) {
  return Lg(a, function() {
    return function d(b) {
      return new Zc(null, function() {
        for (;;) {
          var f = B(b);
          if (f) {
            if (yc(f)) {
              var h = zb(f), k = L(h), l = cd(k);
              return function() {
                for (var b = 0;;) {
                  if (b < k) {
                    var d = z.e(h, b), e = l, f = Ng(d), m = Nf.i(a);
                    Sg(f);
                    var C = Pg(d), E = Qg(d), G = Rg(d), m = oh(d, E, m), M = $e.i(d), d = Hg(d, new V(null, 3, 5, W, [eg(C, E, G, f, m), pg(), ph(M)], null));
                    e.add(d);
                    b += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? fd(l.R(), d(Ab(f))) : fd(l.R(), null);
            }
            var m = F(f);
            return K(function() {
              var b = Ng(m), d = Nf.i(a);
              Sg(b);
              var e = Pg(m), f = Qg(m), h = Rg(m), d = oh(m, f, d), k = $e.i(m);
              return Hg(m, new V(null, 3, 5, W, [eg(e, f, h, b, d), pg(), ph(k)], null));
            }(), d(I(f)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
;function rh(a, b, c) {
  a[b] = c;
  return a;
}
;function sh(a) {
  return PIXI.Sprite.fromFrame(a);
}
;var th = new s(null, 6, [cf, .3, If, 30, xf, 5, Of, 180, Uf, 1, kf, 1], null), uh = new s(null, 6, [cf, .25, If, 1, xf, 5, Of, 180, Uf, 1, kf, 1], null), vh = new s(null, 4, [Lf, 2E3, zf, 16711680, Uf, 4, kf, 4], null), bg = new PIXI.Point(.5, .5);
function wh(a, b) {
  var c = sh("barbarian/run-down/neutral"), d = sh("barbarian/run-down/right"), e = sh("barbarian/run-down/left"), d = new s(null, 2, [Hf, new s(null, 2, [hf, new s(null, 3, [jf, c, Ef, d, Wf, e], null), Bf, new V(null, 4, 5, W, [jf, Wf, jf, Ef], null)], null), Xf, new s(null, 2, [hf, new s(null, 2, [jf, c, Wf, e], null), Bf, new V(null, 2, 5, W, [jf, Wf], null)], null)], null), e = cf.i(uh), f = If.i(uh), h = xf.i(uh), k = Of.i(uh), l = Uf.i(uh), m = kf.i(uh);
  return Jg.p(mc([Zf(new V(null, 2, 5, W, [a, b], null)), wg(), hg(e), new jg($e, d, null, 0, null, null, null), ag(c, c, new V(null, 2, 5, W, [l, m], null)), eg(f, k, h, null, 0)], 0));
}
function xh(a, b) {
  var c = sh("archer/run-down/neutral"), d = sh("archer/run-down/right"), e = sh("archer/run-down/left"), d = new s(null, 2, [Hf, new s(null, 2, [hf, new s(null, 3, [jf, c, Ef, d, Wf, e], null), Bf, new V(null, 4, 5, W, [jf, Wf, jf, Ef], null)], null), Xf, new s(null, 2, [hf, new s(null, 2, [jf, c, Wf, e], null), Bf, new V(null, 2, 5, W, [jf, Wf], null)], null)], null), e = cf.i(th), f = If.i(th), h = xf.i(th), k = Of.i(th), l = Uf.i(th), m = kf.i(th);
  return Jg.p(mc([Zf(new V(null, 2, 5, W, [a, b], null)), wg(), hg(e), new jg($e, d, null, 0, null, null, null), ag(c, c, new V(null, 2, 5, W, [l, m], null)), eg(f, k, h, null, 0)], 0));
}
function yh(a, b) {
  var c = sh("town-hall/town-hall"), d = Lf.i(vh), e = zf.i(vh), f = Uf.i(vh), h = kf.i(vh);
  return Jg.p(mc([Zf(new V(null, 2, 5, W, [a, b], null)), ag(c, c, new V(null, 2, 5, W, [f, h], null)), rg(), wg(), lg(new PIXI.Graphics, e, d), new fg(Tf, d, null, null, null)], 0));
}
;var zh = vd.i ? vd.i(nc) : vd.call(null, nc);
function Ah(a) {
  a = a.getLocalPosition(a.target);
  return yd.f(zh, oc, new s(null, 2, [Jf, a.x, We, a.y], null));
}
function Bh(a) {
  var b = dc.i ? dc.i(zh) : dc.call(null, zh);
  wd.e ? wd.e(zh, nc) : wd.call(null, zh, nc);
  return B(b) ? Lg(a, function() {
    return function(a) {
      return function e(b) {
        return new Zc(null, function() {
          return function() {
            for (;;) {
              var a = B(b);
              if (a) {
                if (yc(a)) {
                  var c = zb(a), l = L(c), m = cd(l);
                  return function() {
                    for (var a = 0;;) {
                      if (a < l) {
                        var b = z.e(c, a), e = m, f;
                        f = Jf.i(b);
                        b = We.i(b);
                        f = Math.floor(639 * Math.random()) + 1 < f ? wh(f, b) : xh(f, b);
                        e.add(f);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? fd(m.R(), e(Ab(a))) : fd(m.R(), null);
                }
                var n = F(a);
                return K(function() {
                  var a = Jf.i(n), b = We.i(n);
                  return Math.floor(639 * Math.random()) + 1 < a ? wh(a, b) : xh(a, b);
                }(), e(I(a)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(b)(b);
  }()) : a;
}
;function Ch(a) {
  return Wb.e(Pf.i(a), Hf) ? a : P.p(a, Pf, Hf, mc([rf, 0], 0));
}
function Dh(a, b) {
  return Lg(a, function() {
    return function d(a) {
      return new Zc(null, function() {
        for (;;) {
          var b = B(a);
          if (b) {
            if (yc(b)) {
              var h = zb(b), k = L(h), l = cd(k);
              return function() {
                for (var a = 0;;) {
                  if (a < k) {
                    var b = z.e(h, a), d = l, e = $e.i(b), f = Gd.e(b, new V(null, 2, 5, W, [of, sf], null)), m = Og(b), E = Mg(b), G = N.f(E, 0, null), E = N.f(E, 1, null), m = new V(null, 2, 5, W, [G + m * Math.cos(f), E + m * Math.sin(f)], null), f = N.f(m, 0, null), m = N.f(m, 1, null), b = Hg(b, new V(null, 3, 5, W, [Zf(new V(null, 2, 5, W, [f, m], null)), pg(), Ch(e)], null));
                    d.add(b);
                    a += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? fd(l.R(), d(Ab(b))) : fd(l.R(), null);
            }
            var m = F(b);
            return K(function() {
              var a = $e.i(m), b = Gd.e(m, new V(null, 2, 5, W, [of, sf], null)), d = Og(m), e = Mg(m), f = N.f(e, 0, null), e = N.f(e, 1, null), d = new V(null, 2, 5, W, [f + d * Math.cos(b), e + d * Math.sin(b)], null), b = N.f(d, 0, null), d = N.f(d, 1, null);
              return Hg(m, new V(null, 3, 5, W, [Zf(new V(null, 2, 5, W, [b, d], null)), pg(), Ch(a)], null));
            }(), d(I(b)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
;function Eh(a, b) {
  var c = L(a);
  return Wb.e(b, c - 1) ? 0 : b + 1;
}
function Fh(a, b) {
  return Lg(a, function() {
    return function d(a) {
      return new Zc(null, function() {
        for (;;) {
          var b = B(a);
          if (b) {
            if (yc(b)) {
              var h = zb(b), k = L(h), l = cd(k);
              return function() {
                for (var a = 0;;) {
                  if (a < k) {
                    var b = z.e(h, a), d = l, e = mf.i(b), f = $e.i(b), m = Vg(b), E = hf.i(m), G = Bf.i(m), m = Gd.e(b, new V(null, 2, 5, W, [$e, rf], null)), m = Eh(G, m), G = O.e(G, m), E = O.e(E, G), b = Hg(b, new V(null, 2, 5, W, [P.f(f, rf, m), P.f(e, Cf, E)], null));
                    d.add(b);
                    a += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? fd(l.R(), d(Ab(b))) : fd(l.R(), null);
            }
            var m = F(b);
            return K(function() {
              var a = mf.i(m), b = $e.i(m), d = Vg(m), e = hf.i(d), f = Bf.i(d), d = Gd.e(m, new V(null, 2, 5, W, [$e, rf], null)), d = Eh(f, d), f = O.e(f, d), e = O.e(e, f);
              return Hg(m, new V(null, 2, 5, W, [P.f(b, rf, d), P.f(a, Cf, e)], null));
            }(), d(I(b)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
;function Gh(a, b) {
  a.addChild(b);
}
function Hh(a, b, c) {
  rh(rh(a.position, "x", b), "y", c);
  return a;
}
function Ih(a, b) {
  return rh(a, "anchor", b);
}
function Jh(a, b, c) {
  a = rh(a, "height", 16 * b);
  return rh(a, "width", 16 * c);
}
function Kh(a, b, c) {
  var d = af.i(a), e = uf.i(a);
  b = B(b);
  for (var f = null, h = 0, k = 0;;) {
    if (k < h) {
      var l = f.Y(null, k);
      Gh(d, Gd.e(l, new V(null, 2, 5, W, [nf, wf], null)));
      k += 1;
    } else {
      if (b = B(b)) {
        f = b, yc(f) ? (b = zb(f), k = Ab(f), f = b, h = L(b), b = k) : (b = F(f), Gh(d, Gd.e(b, new V(null, 2, 5, W, [nf, wf], null))), b = J(f), f = null, h = 0), k = 0;
      } else {
        break;
      }
    }
  }
  c = B(c);
  b = null;
  for (h = f = 0;;) {
    if (h < f) {
      var k = b.Y(null, h), m = Gd.e(k, new V(null, 2, 5, W, [mf, Cf], null)), n = Gd.e(k, new V(null, 2, 5, W, [mf, Kf], null)), p = Gd.e(k, new V(null, 2, 5, W, [mf, vf], null)), l = N.f(p, 0, null), p = N.f(p, 1, null), r = Mg(k), t = N.f(r, 0, null), r = N.f(r, 1, null), t = Math.round(t), y = Math.round(r), r = Sf.i(k);
      Gh(d, Ih(Hh(Jh(m, l, p), t, y), n));
      if (u(r)) {
        var C = Af.i(r), m = gf.i(r), E = bf.i(r), m = Sg(k) / m, G = l / 8 * 16, M = 16 * m * p, k = Xg(k), Y = k.x, ga = k.y + G;
        Gh(d, function() {
          var a = C;
          a.clear();
          a.beginFill(E);
          a.drawRect(Y, ga, M, G);
          a.endFill();
          return a;
        }());
      }
      h += 1;
    } else {
      if (c = B(c)) {
        if (yc(c)) {
          f = zb(c), c = Ab(c), b = f, f = L(f);
        } else {
          b = F(c);
          k = Gd.e(b, new V(null, 2, 5, W, [mf, Cf], null));
          l = Gd.e(b, new V(null, 2, 5, W, [mf, Kf], null));
          h = Gd.e(b, new V(null, 2, 5, W, [mf, vf], null));
          f = N.f(h, 0, null);
          h = N.f(h, 1, null);
          m = Mg(b);
          p = N.f(m, 0, null);
          m = N.f(m, 1, null);
          p = Math.round(p);
          n = Math.round(m);
          m = Sf.i(b);
          Gh(d, Ih(Hh(Jh(k, f, h), p, n), l));
          if (u(m)) {
            var Na = Af.i(m), k = gf.i(m), H = bf.i(m), k = Sg(b) / k, ce = f / 8 * 16, ka = 16 * k * h;
            b = Xg(b);
            var na = b.x, ta = b.y + ce;
            Gh(d, function() {
              var a = Na;
              a.clear();
              a.beginFill(H);
              a.drawRect(na, ta, ka, ce);
              a.endFill();
              return a;
            }());
          }
          c = J(c);
          b = null;
          f = 0;
        }
        h = 0;
      } else {
        break;
      }
    }
  }
  e.render(d);
  return a;
}
;function Lh(a, b) {
  return Lg(a, function() {
    return function d(a) {
      return new Zc(null, function() {
        for (;;) {
          var b = B(a);
          if (b) {
            if (yc(b)) {
              var h = zb(b), k = L(h), l = cd(k);
              return function() {
                for (var a = 0;;) {
                  if (a < k) {
                    var b = z.e(h, a), d = l, e = mf.i(b), f = tf.i(e), b = Fg(b, P.f(e, Cf, f));
                    d.add(b);
                    a += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? fd(l.R(), d(Ab(b))) : fd(l.R(), null);
            }
            var m = F(b);
            return K(function() {
              var a = mf.i(m), b = tf.i(a);
              return Fg(m, P.f(a, Cf, b));
            }(), d(I(b)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
;function Mh(a, b) {
  return Lg(a, function() {
    return function d(a) {
      return new Zc(null, function() {
        for (;;) {
          var b = B(a);
          if (b) {
            if (yc(b)) {
              var h = zb(b), k = L(h), l = cd(k);
              return function() {
                for (var a = 0;;) {
                  if (a < k) {
                    var b = z.e(h, a), d = l, e = Ng(b), f = Mg(e), e = N.f(f, 0, null), f = N.f(f, 1, null), m = Mg(b), E = N.f(m, 0, null), m = N.f(m, 1, null), b = Fg(b, new ig(of, Math.atan2(f - m, e - E), null, null, null));
                    d.add(b);
                    a += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? fd(l.R(), d(Ab(b))) : fd(l.R(), null);
            }
            var m = F(b);
            return K(function() {
              var a = Ng(m), b = Mg(a), a = N.f(b, 0, null), b = N.f(b, 1, null), d = Mg(m), e = N.f(d, 0, null), d = N.f(d, 1, null);
              return Fg(m, new ig(of, Math.atan2(b - d, a - e), null, null, null));
            }(), d(I(b)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
;function Nh() {
  var a = new PIXI.autoDetectRenderer(640, 640);
  document.getElementById("battlefield").appendChild(a.view);
  return a;
}
function Oh() {
  var a = new PIXI.Stage(16777215);
  rh(a, "interactive", !0);
  rh(a, "click", Ah);
  return a;
}
function Ph(a) {
  a = P.f(P.f(P.f(a, uf, Nh()), af, Oh()), Nf, 0);
  var b;
  b = PIXI.TilingSprite;
  var c;
  c = PIXI.Texture.fromImage("images/grass-tile.png", !1);
  b = new b(c, 640, 640);
  b = Jg.p(mc([new cg(nf, b, null, null, null)], 0));
  return Lg(a, new V(null, 4, 5, W, [b, wh(160, 160), yh(400, 400), yh(320, 320)], null));
}
var Qh = vd.i ? vd.i(me) : vd.call(null, me);
function Rh(a) {
  var b = Nf.i(a);
  a = P.f(a, Nf, b + 1);
  a = Bh(a);
  if (Wb.e(Lc(Nf.i(a), 5), 0)) {
    var b = R.e(Kg, Fd.e(new V(null, 1, 5, W, [a], null), new V(null, 1, 5, W, [qf], null))), c = R.e(Kg, Fd.e(new V(null, 1, 5, W, [a], null), new V(null, 1, 5, W, [Tf], null)));
    a = B(b) && B(c) ? R.e(ah, new V(null, 3, 5, W, [a, b, c], null)) : a;
  }
  Wb.e(Lc(Nf.i(a), 5), 0) && (b = R.e(Kg, Fd.e(new V(null, 1, 5, W, [a], null), new V(null, 2, 5, W, [qf, Ye], null))), a = B(b) ? R.e(Mh, new V(null, 2, 5, W, [a, b], null)) : a);
  Wb.e(Lc(Nf.i(a), 1), 0) && (b = R.e(Kg, Fd.e(new V(null, 1, 5, W, [a], null), new V(null, 3, 5, W, [Ye, of, Hf], null))), a = B(b) ? R.e(Dh, new V(null, 2, 5, W, [a, b], null)) : a);
  Wb.e(Lc(Nf.i(a), 5), 0) && (b = R.e(Kg, Fd.e(new V(null, 1, 5, W, [a], null), new V(null, 2, 5, W, [qf, Xf], null))), a = B(b) ? R.e(qh, new V(null, 2, 5, W, [a, b], null)) : a);
  Wb.e(Lc(Nf.i(a), 5), 0) && (b = R.e(Kg, Fd.e(new V(null, 1, 5, W, [a], null), new V(null, 2, 5, W, [qf, Xf], null))), c = R.e(Kg, Fd.e(new V(null, 1, 5, W, [a], null), new V(null, 2, 5, W, [Tf, lf], null))), a = B(b) && B(c) ? R.e(nh, new V(null, 3, 5, W, [a, b, c], null)) : a);
  Wb.e(Lc(Nf.i(a), 15), 0) && (b = R.e(Kg, Fd.e(new V(null, 1, 5, W, [a], null), new V(null, 3, 5, W, [mf, $e, Vf], null))), a = B(b) ? R.e(Fh, new V(null, 2, 5, W, [a, b], null)) : a);
  Wb.e(Lc(Nf.i(a), 5), 0) && (b = R.e(Kg, Fd.e(new V(null, 1, 5, W, [a], null), new V(null, 1, 5, W, [ef], null))), a = B(b) ? R.e(Lh, new V(null, 2, 5, W, [a, b], null)) : a);
  Wb.e(Lc(Nf.i(a), 1), 0) && (b = R.e(Kg, Fd.e(new V(null, 1, 5, W, [a], null), new V(null, 1, 5, W, [nf], null))), c = R.e(Kg, Fd.e(new V(null, 1, 5, W, [a], null), new V(null, 1, 5, W, [mf], null))), a = B(b) && B(c) ? R.e(Kh, new V(null, 3, 5, W, [a, b, c], null)) : a);
  return a;
}
var Th = function Sh() {
  yd.e(Qh, Rh);
  return requestAnimFrame(Sh);
}, Uh = new PIXI.AssetLoader(["images/spritesheet.json", "images/grass-tile.png"], !1);
rh(Uh, "onComplete", function() {
  yd.e(Qh, Ph);
  return requestAnimFrame(Th);
});
Uh.load();

})();
