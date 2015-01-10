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
function fa(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
;function ga(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ha(a, b) {
  null != a && this.append.apply(this, arguments);
}
ha.prototype.Za = "";
ha.prototype.append = function(a, b, c) {
  this.Za += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Za += arguments[d];
    }
  }
  return this;
};
ha.prototype.clear = function() {
  this.Za = "";
};
ha.prototype.toString = function() {
  return this.Za;
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
if ("undefined" === typeof na) {
  var na = null
}
function oa() {
  return new s(null, 5, [qa, !0, ra, !0, sa, !1, ta, !1, ua, null], null);
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
  var c = va(b), c = u(u(c) ? c.$b : c) ? c.Zb : q(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function xa(a) {
  var b = a.Zb;
  return u(b) ? b : "" + x(a);
}
var ya = "undefined" !== typeof Symbol && "function" === q(Symbol) ? Symbol.lc : "@@iterator";
function za(a) {
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
function Ea(a) {
  if (a ? a.X : a) {
    return a.X(a);
  }
  var b;
  b = Ea[q(null == a ? null : a)];
  if (!b && (b = Ea._, !b)) {
    throw w("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
function Fa(a, b) {
  if (a ? a.L : a) {
    return a.L(a, b);
  }
  var c;
  c = Fa[q(null == a ? null : a)];
  if (!c && (c = Fa._, !c)) {
    throw w("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Ga = {}, z = function() {
  function a(a, b, c) {
    if (a ? a.la : a) {
      return a.la(a, b, c);
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
}(), Ia = {};
function Ja(a) {
  if (a ? a.ca : a) {
    return a.ca(a);
  }
  var b;
  b = Ja[q(null == a ? null : a)];
  if (!b && (b = Ja._, !b)) {
    throw w("ISeq.-first", a);
  }
  return b.call(null, a);
}
function Ka(a) {
  if (a ? a.ka : a) {
    return a.ka(a);
  }
  var b;
  b = Ka[q(null == a ? null : a)];
  if (!b && (b = Ka._, !b)) {
    throw w("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Ma = {}, Na = {}, A = function() {
  function a(a, b, c) {
    if (a ? a.H : a) {
      return a.H(a, b, c);
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
function Oa(a, b) {
  if (a ? a.vb : a) {
    return a.vb(a, b);
  }
  var c;
  c = Oa[q(null == a ? null : a)];
  if (!c && (c = Oa._, !c)) {
    throw w("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Pa(a, b, c) {
  if (a ? a.W : a) {
    return a.W(a, b, c);
  }
  var d;
  d = Pa[q(null == a ? null : a)];
  if (!d && (d = Pa._, !d)) {
    throw w("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Qa = {};
function Sa(a, b) {
  if (a ? a.$ : a) {
    return a.$(a, b);
  }
  var c;
  c = Sa[q(null == a ? null : a)];
  if (!c && (c = Sa._, !c)) {
    throw w("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Ta = {};
function Ua(a) {
  if (a ? a.zb : a) {
    return a.zb();
  }
  var b;
  b = Ua[q(null == a ? null : a)];
  if (!b && (b = Ua._, !b)) {
    throw w("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Xa(a) {
  if (a ? a.Ab : a) {
    return a.Ab();
  }
  var b;
  b = Xa[q(null == a ? null : a)];
  if (!b && (b = Xa._, !b)) {
    throw w("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Ya = {}, Za = {};
function ab(a, b, c) {
  if (a ? a.Bb : a) {
    return a.Bb(a, b, c);
  }
  var d;
  d = ab[q(null == a ? null : a)];
  if (!d && (d = ab._, !d)) {
    throw w("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function bb(a) {
  if (a ? a.fb : a) {
    return a.fb(a);
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
var hb = {}, ib = function() {
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
var ob = {};
function B(a, b) {
  if (a ? a.Ib : a) {
    return a.Ib(0, b);
  }
  var c;
  c = B[q(null == a ? null : a)];
  if (!c && (c = B._, !c)) {
    throw w("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var pb = {};
function qb(a, b, c) {
  if (a ? a.D : a) {
    return a.D(a, b, c);
  }
  var d;
  d = qb[q(null == a ? null : a)];
  if (!d && (d = qb._, !d)) {
    throw w("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function rb(a, b, c) {
  if (a ? a.Hb : a) {
    return a.Hb(0, b, c);
  }
  var d;
  d = rb[q(null == a ? null : a)];
  if (!d && (d = rb._, !d)) {
    throw w("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function sb(a) {
  if (a ? a.gb : a) {
    return a.gb(a);
  }
  var b;
  b = sb[q(null == a ? null : a)];
  if (!b && (b = sb._, !b)) {
    throw w("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function tb(a, b) {
  if (a ? a.jb : a) {
    return a.jb(a, b);
  }
  var c;
  c = tb[q(null == a ? null : a)];
  if (!c && (c = tb._, !c)) {
    throw w("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function ub(a) {
  if (a ? a.kb : a) {
    return a.kb(a);
  }
  var b;
  b = ub[q(null == a ? null : a)];
  if (!b && (b = ub._, !b)) {
    throw w("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function vb(a, b, c) {
  if (a ? a.ib : a) {
    return a.ib(a, b, c);
  }
  var d;
  d = vb[q(null == a ? null : a)];
  if (!d && (d = vb._, !d)) {
    throw w("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function wb(a, b, c) {
  if (a ? a.Gb : a) {
    return a.Gb(0, b, c);
  }
  var d;
  d = wb[q(null == a ? null : a)];
  if (!d && (d = wb._, !d)) {
    throw w("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function xb(a) {
  if (a ? a.Db : a) {
    return a.Db();
  }
  var b;
  b = xb[q(null == a ? null : a)];
  if (!b && (b = xb._, !b)) {
    throw w("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function zb(a) {
  if (a ? a.xb : a) {
    return a.xb(a);
  }
  var b;
  b = zb[q(null == a ? null : a)];
  if (!b && (b = zb._, !b)) {
    throw w("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function Ab(a) {
  if (a ? a.yb : a) {
    return a.yb(a);
  }
  var b;
  b = Ab[q(null == a ? null : a)];
  if (!b && (b = Ab._, !b)) {
    throw w("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Bb(a) {
  if (a ? a.wb : a) {
    return a.wb(a);
  }
  var b;
  b = Bb[q(null == a ? null : a)];
  if (!b && (b = Bb._, !b)) {
    throw w("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Cb(a, b) {
  if (a ? a.Tb : a) {
    return a.Tb(a, b);
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
    if (a ? a.Xb : a) {
      return a.Xb(a, b, c, d, e);
    }
    var n;
    n = Db[q(null == a ? null : a)];
    if (!n && (n = Db._, !n)) {
      throw w("ISwap.-swap!", a);
    }
    return n.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.Wb : a) {
      return a.Wb(a, b, c, d);
    }
    var e;
    e = Db[q(null == a ? null : a)];
    if (!e && (e = Db._, !e)) {
      throw w("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.Vb : a) {
      return a.Vb(a, b, c);
    }
    var d;
    d = Db[q(null == a ? null : a)];
    if (!d && (d = Db._, !d)) {
      throw w("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.Ub : a) {
      return a.Ub(a, b);
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
  if (a ? a.rb : a) {
    return a.rb(a);
  }
  var b;
  b = Eb[q(null == a ? null : a)];
  if (!b && (b = Eb._, !b)) {
    throw w("IIterable.-iterator", a);
  }
  return b.call(null, a);
}
function Fb(a) {
  this.ac = a;
  this.B = 0;
  this.o = 1073741824;
}
Fb.prototype.Ib = function(a, b) {
  return this.ac.append(b);
};
function Gb(a) {
  var b = new ha;
  a.D(null, new Fb(b), oa());
  return "" + x(b);
}
var Hb = "undefined" !== typeof Math.imul && 0 !== (Math.imul.e ? Math.imul.e(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.e ? Math.imul.e(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Ib(a) {
  a = Hb(a, 3432918353);
  return Hb(a << 15 | a >>> -15, 461845907);
}
function Kb(a, b) {
  var c = a ^ b;
  return Hb(c << 13 | c >>> -13, 5) + 3864292196;
}
function Lb(a, b) {
  var c = a ^ b, c = Hb(c ^ c >>> 16, 2246822507), c = Hb(c ^ c >>> 13, 3266489909);
  return c ^ c >>> 16;
}
function Mb(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Kb(c, Ib(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
    b = void 0;
  }
  b = 1 === (a.length & 1) ? b ^ Ib(a.charCodeAt(a.length - 1)) : b;
  return Lb(b, Hb(2, a.length));
}
var Nb = {}, Ob = 0;
function Pb(a) {
  255 < Ob && (Nb = {}, Ob = 0);
  var b = Nb[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Hb(31, d) + a.charCodeAt(c), c = e
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
function Qb(a) {
  a && (a.o & 4194304 || a.dc) ? a = a.I(null) : "number" === typeof a ? a = (Math.floor.i ? Math.floor.i(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Pb(a), 0 !== a && (a = Ib(a), a = Kb(0, a), a = Lb(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : kb(a);
  return a;
}
function Rb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Sb(a, b) {
  if (a.xa === b.xa) {
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
function Tb(a, b, c, d, e) {
  this.ea = a;
  this.name = b;
  this.xa = c;
  this.Ya = d;
  this.ga = e;
  this.o = 2154168321;
  this.B = 4096;
}
g = Tb.prototype;
g.D = function(a, b) {
  return B(b, this.xa);
};
g.I = function() {
  var a = this.Ya;
  return null != a ? a : this.Ya = a = Rb(Mb(this.name), Pb(this.ea));
};
g.N = function(a, b) {
  return new Tb(this.ea, this.name, this.xa, this.Ya, b);
};
g.K = function() {
  return this.ga;
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
  return this.call.apply(this, [this].concat(za(b)));
};
g.i = function(a) {
  return A.f(a, this, null);
};
g.e = function(a, b) {
  return A.f(a, this, b);
};
g.F = function(a, b) {
  return b instanceof Tb ? this.xa === b.xa : !1;
};
g.toString = function() {
  return this.xa;
};
function D(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.o & 8388608 || a.ec)) {
    return a.M(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new F(a, 0);
  }
  if (v(lb, a)) {
    return mb(a);
  }
  throw Error([x(a), x(" is not ISeqable")].join(""));
}
function I(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.o & 64 || a.hb)) {
    return a.ca(null);
  }
  a = D(a);
  return null == a ? null : Ja(a);
}
function K(a) {
  return null != a ? a && (a.o & 64 || a.hb) ? a.ka(null) : (a = D(a)) ? Ka(a) : Ub : Ub;
}
function L(a) {
  return null == a ? null : a && (a.o & 128 || a.sb) ? a.ja(null) : D(K(a));
}
var Vb = function() {
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
        l = new F(m, 0);
      }
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.e(a, d)) {
          if (L(e)) {
            a = d, d = I(e), e = L(e);
          } else {
            return b.e(d, I(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.C = 2;
    a.s = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = K(a);
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
          h = new F(k, 0);
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
function Wb(a) {
  this.R = a;
}
Wb.prototype.next = function() {
  if (null != this.R) {
    var a = I(this.R);
    this.R = L(this.R);
    return{done:!1, value:a};
  }
  return{done:!0, value:null};
};
function Xb(a) {
  return new Wb(D(a));
}
function Yb(a, b) {
  var c = Ib(a), c = Kb(0, c);
  return Lb(c, b);
}
function Zb(a) {
  var b = 0, c = 1;
  for (a = D(a);;) {
    if (null != a) {
      b += 1, c = Hb(31, c) + Qb(I(a)) | 0, a = L(a);
    } else {
      return Yb(c, b);
    }
  }
}
function $b(a) {
  var b = 0, c = 0;
  for (a = D(a);;) {
    if (null != a) {
      b += 1, c = c + Qb(I(a)) | 0, a = L(a);
    } else {
      return Yb(c, b);
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
function ac(a) {
  this.pa = a;
  this.B = 0;
  this.o = 32768;
}
ac.prototype.fb = function() {
  return this.pa;
};
function bc(a) {
  return a instanceof ac;
}
function cc(a) {
  return bb(a);
}
var dc = function() {
  function a(a, b, c, d) {
    for (var l = Ca(a);;) {
      if (d < l) {
        var m = z.e(a, d);
        c = b.e ? b.e(c, m) : b.call(null, c, m);
        if (bc(c)) {
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
        if (bc(l)) {
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
      return b.G ? b.G() : b.call(null);
    }
    for (var d = z.e(a, 0), l = 1;;) {
      if (l < c) {
        var m = z.e(a, l), d = b.e ? b.e(d, m) : b.call(null, d, m);
        if (bc(d)) {
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
        if (bc(c)) {
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
        if (bc(l)) {
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
      return b.G ? b.G() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        var m = a[l], d = b.e ? b.e(d, m) : b.call(null, d, m);
        if (bc(d)) {
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
  return a ? a.o & 2 || a.Lb ? !0 : a.o ? !1 : v(Ba, a) : v(Ba, a);
}
function hc(a) {
  return a ? a.o & 16 || a.Eb ? !0 : a.o ? !1 : v(Ga, a) : v(Ga, a);
}
function ic(a, b) {
  this.j = a;
  this.A = b;
}
ic.prototype.Cb = function() {
  return this.A < this.j.length;
};
ic.prototype.next = function() {
  var a = this.j[this.A];
  this.A += 1;
  return a;
};
function F(a, b) {
  this.j = a;
  this.A = b;
  this.o = 166199550;
  this.B = 8192;
}
g = F.prototype;
g.toString = function() {
  return Gb(this);
};
g.Y = function(a, b) {
  var c = b + this.A;
  return c < this.j.length ? this.j[c] : null;
};
g.la = function(a, b, c) {
  a = b + this.A;
  return a < this.j.length ? this.j[a] : c;
};
g.rb = function() {
  return new ic(this.j, this.A);
};
g.ja = function() {
  return this.A + 1 < this.j.length ? new F(this.j, this.A + 1) : null;
};
g.O = function() {
  return this.j.length - this.A;
};
g.I = function() {
  return Zb(this);
};
g.F = function(a, b) {
  return jc.e ? jc.e(this, b) : jc.call(null, this, b);
};
g.X = function() {
  return Ub;
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
g.ka = function() {
  return this.A + 1 < this.j.length ? new F(this.j, this.A + 1) : Ub;
};
g.M = function() {
  return this;
};
g.L = function(a, b) {
  return M.e ? M.e(b, this) : M.call(null, b, this);
};
F.prototype[ya] = function() {
  return Xb(this);
};
var kc = function() {
  function a(a, b) {
    return b < a.length ? new F(a, b) : null;
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
}(), lc = function() {
  function a(a, b) {
    return kc.e(a, b);
  }
  function b(a) {
    return kc.e(a, 0);
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
var nc = function() {
  function a(a, b) {
    return null != a ? Fa(a, b) : Fa(Ub, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      if (2 < arguments.length) {
        for (var l = 0, m = Array(arguments.length - 2);l < m.length;) {
          m[l] = arguments[l + 2], ++l;
        }
        l = new F(m, 0);
      }
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (u(e)) {
          a = b.e(a, d), d = I(e), e = L(e);
        } else {
          return b.e(a, d);
        }
      }
    }
    a.C = 2;
    a.s = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = K(a);
      return c(b, d, a);
    };
    a.p = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return mc;
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
          h = new F(k, 0);
        }
        return c.p(b, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.s = c.s;
  b.G = function() {
    return mc;
  };
  b.i = function(a) {
    return a;
  };
  b.e = a;
  b.p = c.p;
  return b;
}();
function N(a) {
  if (null != a) {
    if (a && (a.o & 2 || a.Lb)) {
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
              a = D(a);
              for (var b = 0;;) {
                if (gc(a)) {
                  a = b + Ca(a);
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
var oc = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return D(a) ? I(a) : c;
      }
      if (hc(a)) {
        return z.f(a, b, c);
      }
      if (D(a)) {
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
        if (D(a)) {
          return I(a);
        }
        throw Error("Index out of bounds");
      }
      if (hc(a)) {
        return z.e(a, b);
      }
      if (D(a)) {
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
  c.f = a;
  return c;
}(), O = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.o & 16 || a.Eb)) {
      return a.la(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (v(Ga, a)) {
      return z.e(a, b);
    }
    if (a ? a.o & 64 || a.hb || (a.o ? 0 : v(Ia, a)) : v(Ia, a)) {
      return oc.f(a, b, c);
    }
    throw Error([x("nth not supported on this type "), x(xa(va(a)))].join(""));
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.o & 16 || a.Eb)) {
      return a.Y(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (v(Ga, a)) {
      return z.e(a, b);
    }
    if (a ? a.o & 64 || a.hb || (a.o ? 0 : v(Ia, a)) : v(Ia, a)) {
      return oc.e(a, b);
    }
    throw Error([x("nth not supported on this type "), x(xa(va(a)))].join(""));
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
    return null != a ? a && (a.o & 256 || a.Fb) ? a.H(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : v(Na, a) ? A.f(a, b, c) : c : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.o & 256 || a.Fb) ? a.J(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : v(Na, a) ? A.e(a, b) : null;
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
}(), qc = function() {
  function a(a, b, c) {
    if (null != a) {
      a = Pa(a, b, c);
    } else {
      a: {
        a = [b];
        c = [c];
        b = a.length;
        var h = 0, k;
        for (k = sb(pc);;) {
          if (h < b) {
            var l = h + 1;
            k = k.ib(null, a[h], c[h]);
            h = l;
          } else {
            a = ub(k);
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
        m = new F(n, 0);
      }
      return c.call(this, b, d, k, m);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.f(a, d, e), u(l)) {
          d = I(l), e = I(L(l)), l = L(L(l));
        } else {
          return a;
        }
      }
    }
    a.C = 3;
    a.s = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var l = I(a);
      a = K(a);
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
          k = new F(l, 0);
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
        l = new F(m, 0);
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
          d = I(e), e = L(e);
        } else {
          return a;
        }
      }
    }
    a.C = 2;
    a.s = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = K(a);
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
          h = new F(k, 0);
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
  return u(b) ? b : a ? u(u(null) ? null : a.Kb) ? !0 : a.kc ? !1 : v(Aa, a) : v(Aa, a);
}
function sc(a, b) {
  this.l = a;
  this.meta = b;
  this.B = 0;
  this.o = 393217;
}
g = sc.prototype;
g.call = function() {
  function a(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T, ea, H) {
    a = this.l;
    return R.qb ? R.qb(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T, ea, H) : R.call(null, a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T, ea, H);
  }
  function b(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T, ea) {
    a = this;
    return a.l.Ja ? a.l.Ja(b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T, ea) : a.l.call(null, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T, ea);
  }
  function c(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T) {
    a = this;
    return a.l.Ia ? a.l.Ia(b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T) : a.l.call(null, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T);
  }
  function d(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J) {
    a = this;
    return a.l.Ha ? a.l.Ha(b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J) : a.l.call(null, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J);
  }
  function e(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G) {
    a = this;
    return a.l.Ga ? a.l.Ga(b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G) : a.l.call(null, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G);
  }
  function f(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E) {
    a = this;
    return a.l.Fa ? a.l.Fa(b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E) : a.l.call(null, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E);
  }
  function h(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C) {
    a = this;
    return a.l.Ea ? a.l.Ea(b, c, d, e, f, h, k, l, m, n, p, r, t, y, C) : a.l.call(null, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C);
  }
  function k(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y) {
    a = this;
    return a.l.Da ? a.l.Da(b, c, d, e, f, h, k, l, m, n, p, r, t, y) : a.l.call(null, b, c, d, e, f, h, k, l, m, n, p, r, t, y);
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
    return a.l.oa ? a.l.oa(b, c, d, e, f, h, k) : a.l.call(null, b, c, d, e, f, h, k);
  }
  function C(a, b, c, d, e, f, h) {
    a = this;
    return a.l.Z ? a.l.Z(b, c, d, e, f, h) : a.l.call(null, b, c, d, e, f, h);
  }
  function E(a, b, c, d, e, f) {
    a = this;
    return a.l.Q ? a.l.Q(b, c, d, e, f) : a.l.call(null, b, c, d, e, f);
  }
  function G(a, b, c, d, e) {
    a = this;
    return a.l.t ? a.l.t(b, c, d, e) : a.l.call(null, b, c, d, e);
  }
  function J(a, b, c, d) {
    a = this;
    return a.l.f ? a.l.f(b, c, d) : a.l.call(null, b, c, d);
  }
  function T(a, b, c) {
    a = this;
    return a.l.e ? a.l.e(b, c) : a.l.call(null, b, c);
  }
  function ea(a, b) {
    a = this;
    return a.l.i ? a.l.i(b) : a.l.call(null, b);
  }
  function Wa(a) {
    a = this;
    return a.l.G ? a.l.G() : a.l.call(null);
  }
  var H = null, H = function(H, ka, ma, pa, wa, Da, Ha, La, Ra, Va, $a, gb, nb, yb, Jb, ec, Gc, nd, Td, Pe, Jf, Ig) {
    switch(arguments.length) {
      case 1:
        return Wa.call(this, H);
      case 2:
        return ea.call(this, H, ka);
      case 3:
        return T.call(this, H, ka, ma);
      case 4:
        return J.call(this, H, ka, ma, pa);
      case 5:
        return G.call(this, H, ka, ma, pa, wa);
      case 6:
        return E.call(this, H, ka, ma, pa, wa, Da);
      case 7:
        return C.call(this, H, ka, ma, pa, wa, Da, Ha);
      case 8:
        return y.call(this, H, ka, ma, pa, wa, Da, Ha, La);
      case 9:
        return t.call(this, H, ka, ma, pa, wa, Da, Ha, La, Ra);
      case 10:
        return r.call(this, H, ka, ma, pa, wa, Da, Ha, La, Ra, Va);
      case 11:
        return p.call(this, H, ka, ma, pa, wa, Da, Ha, La, Ra, Va, $a);
      case 12:
        return n.call(this, H, ka, ma, pa, wa, Da, Ha, La, Ra, Va, $a, gb);
      case 13:
        return m.call(this, H, ka, ma, pa, wa, Da, Ha, La, Ra, Va, $a, gb, nb);
      case 14:
        return l.call(this, H, ka, ma, pa, wa, Da, Ha, La, Ra, Va, $a, gb, nb, yb);
      case 15:
        return k.call(this, H, ka, ma, pa, wa, Da, Ha, La, Ra, Va, $a, gb, nb, yb, Jb);
      case 16:
        return h.call(this, H, ka, ma, pa, wa, Da, Ha, La, Ra, Va, $a, gb, nb, yb, Jb, ec);
      case 17:
        return f.call(this, H, ka, ma, pa, wa, Da, Ha, La, Ra, Va, $a, gb, nb, yb, Jb, ec, Gc);
      case 18:
        return e.call(this, H, ka, ma, pa, wa, Da, Ha, La, Ra, Va, $a, gb, nb, yb, Jb, ec, Gc, nd);
      case 19:
        return d.call(this, H, ka, ma, pa, wa, Da, Ha, La, Ra, Va, $a, gb, nb, yb, Jb, ec, Gc, nd, Td);
      case 20:
        return c.call(this, H, ka, ma, pa, wa, Da, Ha, La, Ra, Va, $a, gb, nb, yb, Jb, ec, Gc, nd, Td, Pe);
      case 21:
        return b.call(this, H, ka, ma, pa, wa, Da, Ha, La, Ra, Va, $a, gb, nb, yb, Jb, ec, Gc, nd, Td, Pe, Jf);
      case 22:
        return a.call(this, H, ka, ma, pa, wa, Da, Ha, La, Ra, Va, $a, gb, nb, yb, Jb, ec, Gc, nd, Td, Pe, Jf, Ig);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  H.i = Wa;
  H.e = ea;
  H.f = T;
  H.t = J;
  H.Q = G;
  H.Z = E;
  H.oa = C;
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
  H.Nb = b;
  H.qb = a;
  return H;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(za(b)));
};
g.G = function() {
  return this.l.G ? this.l.G() : this.l.call(null);
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
g.Z = function(a, b, c, d, e, f) {
  return this.l.Z ? this.l.Z(a, b, c, d, e, f) : this.l.call(null, a, b, c, d, e, f);
};
g.oa = function(a, b, c, d, e, f, h) {
  return this.l.oa ? this.l.oa(a, b, c, d, e, f, h) : this.l.call(null, a, b, c, d, e, f, h);
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
g.Ia = function(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J) {
  return this.l.Ia ? this.l.Ia(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J) : this.l.call(null, a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J);
};
g.Ja = function(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T) {
  return this.l.Ja ? this.l.Ja(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T) : this.l.call(null, a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T);
};
g.Nb = function(a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T, ea) {
  var Wa = this.l;
  return R.qb ? R.qb(Wa, a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T, ea) : R.call(null, Wa, a, b, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T, ea);
};
g.Kb = !0;
g.N = function(a, b) {
  return new sc(this.l, b);
};
g.K = function() {
  return this.meta;
};
function tc(a, b) {
  return rc(a) && !(a ? a.o & 262144 || a.ic || (a.o ? 0 : v(eb, a)) : v(eb, a)) ? new sc(a, b) : null == a ? null : fb(a, b);
}
function uc(a) {
  var b = null != a;
  return(b ? a ? a.o & 131072 || a.Qb || (a.o ? 0 : v(cb, a)) : v(cb, a) : b) ? db(a) : null;
}
function vc(a) {
  return null == a ? !1 : a ? a.o & 4096 || a.gc ? !0 : a.o ? !1 : v(Ya, a) : v(Ya, a);
}
function wc(a) {
  return null == a ? !1 : a ? a.o & 1024 || a.Ob ? !0 : a.o ? !1 : v(Qa, a) : v(Qa, a);
}
function xc(a) {
  return a ? a.o & 16384 || a.hc ? !0 : a.o ? !1 : v(Za, a) : v(Za, a);
}
function yc(a) {
  return a ? a.B & 512 || a.cc ? !0 : !1 : !1;
}
function zc(a) {
  var b = [];
  ga(a, function(a, b) {
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
  return P.f(a, b, Cc) === Cc ? !1 : !0;
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
    return a && (a.B & 2048 || a.ob) ? a.pb(null, b) : ia(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
var Hc = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = Fc(O.e(a, h), O.e(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = N(a), h = N(b);
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
}(), Jc = function() {
  function a(a, b, c) {
    for (c = D(c);;) {
      if (c) {
        var h = I(c);
        b = a.e ? a.e(b, h) : a.call(null, b, h);
        if (bc(b)) {
          return bb(b);
        }
        c = L(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = D(b);
    if (c) {
      var h = I(c), c = L(c);
      return Ic.f ? Ic.f(a, h, c) : Ic.call(null, a, h, c);
    }
    return a.G ? a.G() : a.call(null);
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
}(), Ic = function() {
  function a(a, b, c) {
    return c && (c.o & 524288 || c.Sb) ? c.ba(null, a, b) : c instanceof Array ? fc.f(c, a, b) : "string" === typeof c ? fc.f(c, a, b) : v(hb, c) ? ib.f(c, a, b) : Jc.f(a, b, c);
  }
  function b(a, b) {
    return b && (b.o & 524288 || b.Sb) ? b.aa(null, a) : b instanceof Array ? fc.e(b, a) : "string" === typeof b ? fc.e(b, a) : v(hb, b) ? ib.e(b, a) : Jc.e(a, b);
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
function Kc(a) {
  return a;
}
var Lc = function() {
  function a(a, b, c, h) {
    a = a.i ? a.i(b) : a.call(null, b);
    c = Ic.f(a, c, h);
    return a.i ? a.i(c) : a.call(null, c);
  }
  function b(a, b, f) {
    return c.t(a, b, b.G ? b.G() : b.call(null), f);
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
function Mc(a, b) {
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
        k = new F(l, 0);
      }
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new ha(b.i(a)), l = d;;) {
        if (u(l)) {
          e = e.append(b.i(I(l))), l = L(l);
        } else {
          return e.toString();
        }
      }
    }
    a.C = 1;
    a.s = function(a) {
      var b = I(a);
      a = K(a);
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
          f = new F(h, 0);
        }
        return c.p(b, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 1;
  b.s = c.s;
  b.G = function() {
    return "";
  };
  b.i = a;
  b.p = c.p;
  return b;
}();
function jc(a, b) {
  var c;
  if (b ? b.o & 16777216 || b.fc || (b.o ? 0 : v(ob, b)) : v(ob, b)) {
    if (gc(a) && gc(b) && N(a) !== N(b)) {
      c = !1;
    } else {
      a: {
        c = D(a);
        for (var d = D(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && Vb.e(I(c), I(d))) {
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
  return Dc(c);
}
function Pc(a) {
  var b = 0;
  for (a = D(a);;) {
    if (a) {
      var c = I(a), b = (b + (Qb(function() {
        var a = c;
        return Qc.i ? Qc.i(a) : Qc.call(null, a);
      }()) ^ Qb(function() {
        var a = c;
        return Rc.i ? Rc.i(a) : Rc.call(null, a);
      }()))) % 4503599627370496;
      a = L(a);
    } else {
      return b;
    }
  }
}
function Sc(a, b, c, d, e) {
  this.meta = a;
  this.first = b;
  this.Qa = c;
  this.count = d;
  this.m = e;
  this.o = 65937646;
  this.B = 8192;
}
g = Sc.prototype;
g.toString = function() {
  return Gb(this);
};
g.K = function() {
  return this.meta;
};
g.ja = function() {
  return 1 === this.count ? null : this.Qa;
};
g.O = function() {
  return this.count;
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Zb(this);
};
g.F = function(a, b) {
  return jc(this, b);
};
g.X = function() {
  return fb(Ub, this.meta);
};
g.aa = function(a, b) {
  return Jc.e(b, this);
};
g.ba = function(a, b, c) {
  return Jc.f(b, c, this);
};
g.ca = function() {
  return this.first;
};
g.ka = function() {
  return 1 === this.count ? Ub : this.Qa;
};
g.M = function() {
  return this;
};
g.N = function(a, b) {
  return new Sc(b, this.first, this.Qa, this.count, this.m);
};
g.L = function(a, b) {
  return new Sc(this.meta, b, this, this.count + 1, null);
};
Sc.prototype[ya] = function() {
  return Xb(this);
};
function Tc(a) {
  this.meta = a;
  this.o = 65937614;
  this.B = 8192;
}
g = Tc.prototype;
g.toString = function() {
  return Gb(this);
};
g.K = function() {
  return this.meta;
};
g.ja = function() {
  return null;
};
g.O = function() {
  return 0;
};
g.I = function() {
  return 0;
};
g.F = function(a, b) {
  return jc(this, b);
};
g.X = function() {
  return this;
};
g.aa = function(a, b) {
  return Jc.e(b, this);
};
g.ba = function(a, b, c) {
  return Jc.f(b, c, this);
};
g.ca = function() {
  return null;
};
g.ka = function() {
  return Ub;
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
var Ub = new Tc(null);
Tc.prototype[ya] = function() {
  return Xb(this);
};
var Uc = function() {
  function a(a) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new F(e, 0);
    }
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof F && 0 === a.A) {
      b = a.j;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.ca(null)), a = a.ja(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = Ub;;) {
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
    a = D(a);
    return b(a);
  };
  a.p = b;
  return a;
}();
function Vc(a, b, c, d) {
  this.meta = a;
  this.first = b;
  this.Qa = c;
  this.m = d;
  this.o = 65929452;
  this.B = 8192;
}
g = Vc.prototype;
g.toString = function() {
  return Gb(this);
};
g.K = function() {
  return this.meta;
};
g.ja = function() {
  return null == this.Qa ? null : D(this.Qa);
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Zb(this);
};
g.F = function(a, b) {
  return jc(this, b);
};
g.X = function() {
  return tc(Ub, this.meta);
};
g.aa = function(a, b) {
  return Jc.e(b, this);
};
g.ba = function(a, b, c) {
  return Jc.f(b, c, this);
};
g.ca = function() {
  return this.first;
};
g.ka = function() {
  return null == this.Qa ? Ub : this.Qa;
};
g.M = function() {
  return this;
};
g.N = function(a, b) {
  return new Vc(b, this.first, this.Qa, this.m);
};
g.L = function(a, b) {
  return new Vc(null, b, this, this.m);
};
Vc.prototype[ya] = function() {
  return Xb(this);
};
function M(a, b) {
  var c = null == b;
  return(c ? c : b && (b.o & 64 || b.hb)) ? new Vc(null, a, b, null) : new Vc(null, a, D(b), null);
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
  this.Ya = d;
  this.o = 2153775105;
  this.B = 4096;
}
g = S.prototype;
g.D = function(a, b) {
  return B(b, [x(":"), x(this.U)].join(""));
};
g.I = function() {
  var a = this.Ya;
  return null != a ? a : this.Ya = a = Rb(Mb(this.name), Pb(this.ea)) + 2654435769 | 0;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return P.e(c, this);
      case 3:
        return P.f(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return P.e(c, this);
  };
  a.f = function(a, c, d) {
    return P.f(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(za(b)));
};
g.i = function(a) {
  return P.e(a, this);
};
g.e = function(a, b) {
  return P.f(a, this, b);
};
g.F = function(a, b) {
  return b instanceof S ? this.U === b.U : !1;
};
g.toString = function() {
  return[x(":"), x(this.U)].join("");
};
function U(a, b) {
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
    if (a instanceof Tb) {
      var b;
      if (a && (a.B & 4096 || a.Rb)) {
        b = a.ea;
      } else {
        throw Error([x("Doesn't support namespace: "), x(a)].join(""));
      }
      return new S(b, Xc.i ? Xc.i(a) : Xc.call(null, a), a.xa, null);
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
  this.bb = b;
  this.R = c;
  this.m = d;
  this.B = 0;
  this.o = 32374988;
}
g = Zc.prototype;
g.toString = function() {
  return Gb(this);
};
function $c(a) {
  null != a.bb && (a.R = a.bb.G ? a.bb.G() : a.bb.call(null), a.bb = null);
  return a.R;
}
g.K = function() {
  return this.meta;
};
g.ja = function() {
  mb(this);
  return null == this.R ? null : L(this.R);
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Zb(this);
};
g.F = function(a, b) {
  return jc(this, b);
};
g.X = function() {
  return tc(Ub, this.meta);
};
g.aa = function(a, b) {
  return Jc.e(b, this);
};
g.ba = function(a, b, c) {
  return Jc.f(b, c, this);
};
g.ca = function() {
  mb(this);
  return null == this.R ? null : I(this.R);
};
g.ka = function() {
  mb(this);
  return null != this.R ? K(this.R) : Ub;
};
g.M = function() {
  $c(this);
  if (null == this.R) {
    return null;
  }
  for (var a = this.R;;) {
    if (a instanceof Zc) {
      a = $c(a);
    } else {
      return this.R = a, D(this.R);
    }
  }
};
g.N = function(a, b) {
  return new Zc(b, this.bb, this.R, this.m);
};
g.L = function(a, b) {
  return M(b, this);
};
Zc.prototype[ya] = function() {
  return Xb(this);
};
function ad(a, b) {
  this.ub = a;
  this.end = b;
  this.B = 0;
  this.o = 2;
}
ad.prototype.O = function() {
  return this.end;
};
ad.prototype.add = function(a) {
  this.ub[this.end] = a;
  return this.end += 1;
};
ad.prototype.T = function() {
  var a = new bd(this.ub, 0, this.end);
  this.ub = null;
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
g.Db = function() {
  if (this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new bd(this.j, this.off + 1, this.end);
};
g.Y = function(a, b) {
  return this.j[this.off + b];
};
g.la = function(a, b, c) {
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
  this.T = a;
  this.wa = b;
  this.meta = c;
  this.m = d;
  this.o = 31850732;
  this.B = 1536;
}
g = ed.prototype;
g.toString = function() {
  return Gb(this);
};
g.K = function() {
  return this.meta;
};
g.ja = function() {
  if (1 < Ca(this.T)) {
    return new ed(xb(this.T), this.wa, this.meta, null);
  }
  var a = mb(this.wa);
  return null == a ? null : a;
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Zb(this);
};
g.F = function(a, b) {
  return jc(this, b);
};
g.X = function() {
  return tc(Ub, this.meta);
};
g.ca = function() {
  return z.e(this.T, 0);
};
g.ka = function() {
  return 1 < Ca(this.T) ? new ed(xb(this.T), this.wa, this.meta, null) : null == this.wa ? Ub : this.wa;
};
g.M = function() {
  return this;
};
g.xb = function() {
  return this.T;
};
g.yb = function() {
  return null == this.wa ? Ub : this.wa;
};
g.N = function(a, b) {
  return new ed(this.T, this.wa, b, this.m);
};
g.L = function(a, b) {
  return M(b, this);
};
g.wb = function() {
  return null == this.wa ? null : this.wa;
};
ed.prototype[ya] = function() {
  return Xb(this);
};
function fd(a, b) {
  return 0 === Ca(a) ? b : new ed(a, b, null, null);
}
function gd(a, b) {
  a.add(b);
}
function hd(a) {
  for (var b = [];;) {
    if (D(a)) {
      b.push(I(a)), a = L(a);
    } else {
      return b;
    }
  }
}
function id(a, b) {
  if (gc(a)) {
    return N(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && D(c)) {
      c = L(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var kd = function jd(b) {
  return null == b ? null : null == L(b) ? D(I(b)) : M(I(b), jd(L(b)));
}, V = function() {
  function a(a, b) {
    return new Zc(null, function() {
      var c = D(a);
      return c ? yc(c) ? fd(zb(c), d.e(Ab(c), b)) : M(I(c), d.e(K(c), b)) : b;
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
        f = new F(p, 0);
      }
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function p(a, b) {
        return new Zc(null, function() {
          var c = D(a);
          return c ? yc(c) ? fd(zb(c), p(Ab(c), b)) : M(I(c), p(K(c), b)) : u(b) ? p(I(b), L(b)) : null;
        }, null, null);
      }(d.e(a, c), e);
    }
    a.C = 2;
    a.s = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = K(a);
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
          l = new F(m, 0);
        }
        return e.p(d, h, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.C = 2;
  d.s = e.s;
  d.G = c;
  d.i = b;
  d.e = a;
  d.p = e.p;
  return d;
}(), ld = function() {
  function a(a, b, c, d) {
    return M(a, M(b, M(c, d)));
  }
  function b(a, b, c) {
    return M(a, M(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, n) {
      var p = null;
      if (4 < arguments.length) {
        for (var p = 0, r = Array(arguments.length - 4);p < r.length;) {
          r[p] = arguments[p + 4], ++p;
        }
        p = new F(r, 0);
      }
      return b.call(this, c, d, e, m, p);
    }
    function b(a, c, d, e, f) {
      return M(a, M(c, M(d, M(e, kd(f)))));
    }
    a.C = 4;
    a.s = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var n = I(a);
      a = K(a);
      return b(c, d, e, n, a);
    };
    a.p = b;
    return a;
  }(), c = function(c, f, h, k, l) {
    switch(arguments.length) {
      case 1:
        return D(c);
      case 2:
        return M(c, f);
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
          m = new F(n, 0);
        }
        return d.p(c, f, h, k, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.C = 4;
  c.s = d.s;
  c.i = function(a) {
    return D(a);
  };
  c.e = function(a, b) {
    return M(a, b);
  };
  c.f = b;
  c.t = a;
  c.p = d.p;
  return c;
}(), md = function() {
  function a() {
    return sb(mc);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      if (2 < arguments.length) {
        for (var l = 0, m = Array(arguments.length - 2);l < m.length;) {
          m[l] = arguments[l + 2], ++l;
        }
        l = new F(m, 0);
      }
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = tb(a, c), u(d)) {
          c = I(d), d = L(d);
        } else {
          return a;
        }
      }
    }
    a.C = 2;
    a.s = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = K(a);
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
        return tb(b, e);
      default:
        var h = null;
        if (2 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 2);h < k.length;) {
            k[h] = arguments[h + 2], ++h;
          }
          h = new F(k, 0);
        }
        return c.p(b, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.s = c.s;
  b.G = a;
  b.i = function(a) {
    return a;
  };
  b.e = function(a, b) {
    return tb(a, b);
  };
  b.p = c.p;
  return b;
}(), od = function() {
  var a = null, b = function() {
    function a(c, f, h, k) {
      var l = null;
      if (3 < arguments.length) {
        for (var l = 0, m = Array(arguments.length - 3);l < m.length;) {
          m[l] = arguments[l + 3], ++l;
        }
        l = new F(m, 0);
      }
      return b.call(this, c, f, h, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = vb(a, c, d), u(k)) {
          c = I(k), d = I(L(k)), k = L(L(k));
        } else {
          return a;
        }
      }
    }
    a.C = 3;
    a.s = function(a) {
      var c = I(a);
      a = L(a);
      var h = I(a);
      a = L(a);
      var k = I(a);
      a = K(a);
      return b(c, h, k, a);
    };
    a.p = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return vb(a, d, e);
      default:
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new F(k, 0);
        }
        return b.p(a, d, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.C = 3;
  a.s = b.s;
  a.f = function(a, b, e) {
    return vb(a, b, e);
  };
  a.p = b.p;
  return a;
}();
function pd(a, b, c) {
  var d = D(c);
  if (0 === b) {
    return a.G ? a.G() : a.call(null);
  }
  c = Ja(d);
  var e = Ka(d);
  if (1 === b) {
    return a.i ? a.i(c) : a.i ? a.i(c) : a.call(null, c);
  }
  var d = Ja(e), f = Ka(e);
  if (2 === b) {
    return a.e ? a.e(c, d) : a.e ? a.e(c, d) : a.call(null, c, d);
  }
  var e = Ja(f), h = Ka(f);
  if (3 === b) {
    return a.f ? a.f(c, d, e) : a.f ? a.f(c, d, e) : a.call(null, c, d, e);
  }
  var f = Ja(h), k = Ka(h);
  if (4 === b) {
    return a.t ? a.t(c, d, e, f) : a.t ? a.t(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = Ja(k), l = Ka(k);
  if (5 === b) {
    return a.Q ? a.Q(c, d, e, f, h) : a.Q ? a.Q(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = Ja(l), m = Ka(l);
  if (6 === b) {
    return a.Z ? a.Z(c, d, e, f, h, k) : a.Z ? a.Z(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = Ja(m), n = Ka(m);
  if (7 === b) {
    return a.oa ? a.oa(c, d, e, f, h, k, l) : a.oa ? a.oa(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var m = Ja(n), p = Ka(n);
  if (8 === b) {
    return a.Ka ? a.Ka(c, d, e, f, h, k, l, m) : a.Ka ? a.Ka(c, d, e, f, h, k, l, m) : a.call(null, c, d, e, f, h, k, l, m);
  }
  var n = Ja(p), r = Ka(p);
  if (9 === b) {
    return a.La ? a.La(c, d, e, f, h, k, l, m, n) : a.La ? a.La(c, d, e, f, h, k, l, m, n) : a.call(null, c, d, e, f, h, k, l, m, n);
  }
  var p = Ja(r), t = Ka(r);
  if (10 === b) {
    return a.za ? a.za(c, d, e, f, h, k, l, m, n, p) : a.za ? a.za(c, d, e, f, h, k, l, m, n, p) : a.call(null, c, d, e, f, h, k, l, m, n, p);
  }
  var r = Ja(t), y = Ka(t);
  if (11 === b) {
    return a.Aa ? a.Aa(c, d, e, f, h, k, l, m, n, p, r) : a.Aa ? a.Aa(c, d, e, f, h, k, l, m, n, p, r) : a.call(null, c, d, e, f, h, k, l, m, n, p, r);
  }
  var t = Ja(y), C = Ka(y);
  if (12 === b) {
    return a.Ba ? a.Ba(c, d, e, f, h, k, l, m, n, p, r, t) : a.Ba ? a.Ba(c, d, e, f, h, k, l, m, n, p, r, t) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, t);
  }
  var y = Ja(C), E = Ka(C);
  if (13 === b) {
    return a.Ca ? a.Ca(c, d, e, f, h, k, l, m, n, p, r, t, y) : a.Ca ? a.Ca(c, d, e, f, h, k, l, m, n, p, r, t, y) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, t, y);
  }
  var C = Ja(E), G = Ka(E);
  if (14 === b) {
    return a.Da ? a.Da(c, d, e, f, h, k, l, m, n, p, r, t, y, C) : a.Da ? a.Da(c, d, e, f, h, k, l, m, n, p, r, t, y, C) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, t, y, C);
  }
  var E = Ja(G), J = Ka(G);
  if (15 === b) {
    return a.Ea ? a.Ea(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E) : a.Ea ? a.Ea(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E);
  }
  var G = Ja(J), T = Ka(J);
  if (16 === b) {
    return a.Fa ? a.Fa(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G) : a.Fa ? a.Fa(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G);
  }
  var J = Ja(T), ea = Ka(T);
  if (17 === b) {
    return a.Ga ? a.Ga(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J) : a.Ga ? a.Ga(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J);
  }
  var T = Ja(ea), Wa = Ka(ea);
  if (18 === b) {
    return a.Ha ? a.Ha(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T) : a.Ha ? a.Ha(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T);
  }
  ea = Ja(Wa);
  Wa = Ka(Wa);
  if (19 === b) {
    return a.Ia ? a.Ia(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T, ea) : a.Ia ? a.Ia(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T, ea) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T, ea);
  }
  var H = Ja(Wa);
  Ka(Wa);
  if (20 === b) {
    return a.Ja ? a.Ja(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T, ea, H) : a.Ja ? a.Ja(c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T, ea, H) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, t, y, C, E, G, J, T, ea, H);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var R = function() {
  function a(a, b, c, d, e) {
    b = ld.t(b, c, d, e);
    c = a.C;
    return a.s ? (d = id(b, c + 1), d <= c ? pd(a, d, b) : a.s(b)) : a.apply(a, hd(b));
  }
  function b(a, b, c, d) {
    b = ld.f(b, c, d);
    c = a.C;
    return a.s ? (d = id(b, c + 1), d <= c ? pd(a, d, b) : a.s(b)) : a.apply(a, hd(b));
  }
  function c(a, b, c) {
    b = ld.e(b, c);
    c = a.C;
    if (a.s) {
      var d = id(b, c + 1);
      return d <= c ? pd(a, d, b) : a.s(b);
    }
    return a.apply(a, hd(b));
  }
  function d(a, b) {
    var c = a.C;
    if (a.s) {
      var d = id(b, c + 1);
      return d <= c ? pd(a, d, b) : a.s(b);
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
        y = new F(C, 0);
      }
      return b.call(this, c, d, e, f, h, y);
    }
    function b(a, c, d, e, f, h) {
      c = M(c, M(d, M(e, M(f, kd(h)))));
      d = a.C;
      return a.s ? (e = id(c, d + 1), e <= d ? pd(a, e, c) : a.s(c)) : a.apply(a, hd(c));
    }
    a.C = 5;
    a.s = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var f = I(a);
      a = L(a);
      var h = I(a);
      a = K(a);
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
          r = new F(t, 0);
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
function qd(a) {
  return D(a) ? a : null;
}
function rd(a, b) {
  for (;;) {
    if (null == D(b)) {
      return!0;
    }
    var c;
    c = I(b);
    c = a.i ? a.i(c) : a.call(null, c);
    if (u(c)) {
      c = a;
      var d = L(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
var sd = function() {
  function a(a, b, c, d) {
    return function() {
      function e(m, n, p) {
        return a.Z ? a.Z(b, c, d, m, n, p) : a.call(null, b, c, d, m, n, p);
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
            f = new F(h, 0);
          }
          return m.call(this, a, b, c, f);
        }
        function m(e, n, p, r) {
          return R.p(a, b, c, d, e, lc([n, p, r], 0));
        }
        e.C = 3;
        e.s = function(a) {
          var b = I(a);
          a = L(a);
          var c = I(a);
          a = L(a);
          var d = I(a);
          a = K(a);
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
              f = new F(h, 0);
            }
            return y.p(a, b, c, f);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      t.C = 3;
      t.s = y.s;
      t.G = r;
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
            h = new F(k, 0);
          }
          return e.call(this, a, b, c, h);
        }
        function e(d, l, m, n) {
          return R.p(a, b, c, d, l, lc([m, n], 0));
        }
        d.C = 3;
        d.s = function(a) {
          var b = I(a);
          a = L(a);
          var c = I(a);
          a = L(a);
          var d = I(a);
          a = K(a);
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
              h = new F(k, 0);
            }
            return t.p(a, b, c, h);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      r.C = 3;
      r.s = t.s;
      r.G = p;
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
            h = new F(k, 0);
          }
          return d.call(this, a, b, e, h);
        }
        function d(c, e, k, l) {
          return R.p(a, b, c, e, k, lc([l], 0));
        }
        c.C = 3;
        c.s = function(a) {
          var b = I(a);
          a = L(a);
          var c = I(a);
          a = L(a);
          var e = I(a);
          a = K(a);
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
              for (var p = 0, J = Array(arguments.length - 3);p < J.length;) {
                J[p] = arguments[p + 3], ++p;
              }
              p = new F(J, 0);
            }
            return r.p(a, b, f, p);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      p.C = 3;
      p.s = r.s;
      p.G = n;
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
        r = new F(t, 0);
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
            c = new F(d, 0);
          }
          return h.call(this, c);
        }
        function h(b) {
          return R.Q(a, c, d, e, V.e(f, b));
        }
        b.C = 0;
        b.s = function(a) {
          a = D(a);
          return h(a);
        };
        b.p = h;
        return b;
      }();
    }
    a.C = 4;
    a.s = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var f = I(a);
      a = K(a);
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
          n = new F(p, 0);
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
function td(a, b, c, d) {
  this.state = a;
  this.meta = b;
  this.bc = c;
  this.Jb = d;
  this.o = 6455296;
  this.B = 16386;
}
g = td.prototype;
g.I = function() {
  return this[ba] || (this[ba] = ++ca);
};
g.Hb = function(a, b, c) {
  for (var d = D(this.Jb), e = null, f = 0, h = 0;;) {
    if (h < f) {
      a = e.Y(null, h);
      var k = O.f(a, 0, null);
      a = O.f(a, 1, null);
      var l = b, m = c;
      a.t ? a.t(k, this, l, m) : a.call(null, k, this, l, m);
      h += 1;
    } else {
      if (a = D(d)) {
        d = a, yc(d) ? (e = zb(d), d = Ab(d), a = e, f = N(e), e = a) : (a = I(d), k = O.f(a, 0, null), a = O.f(a, 1, null), e = k, f = b, h = c, a.t ? a.t(e, this, f, h) : a.call(null, e, this, f, h), d = L(d), e = null, f = 0), h = 0;
      } else {
        return null;
      }
    }
  }
};
g.K = function() {
  return this.meta;
};
g.fb = function() {
  return this.state;
};
g.F = function(a, b) {
  return this === b;
};
var wd = function() {
  function a(a) {
    return new td(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      if (1 < arguments.length) {
        for (var k = 0, l = Array(arguments.length - 1);k < l.length;) {
          l[k] = arguments[k + 1], ++k;
        }
        k = new F(l, 0);
      }
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = (null == c ? 0 : c ? c.o & 64 || c.hb || (c.o ? 0 : v(Ia, c)) : v(Ia, c)) ? R.e(ud, c) : c, e = P.e(d, vd), d = P.e(d, sa);
      return new td(a, d, e, null);
    }
    a.C = 1;
    a.s = function(a) {
      var c = I(a);
      a = K(a);
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
          f = new F(h, 0);
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
function xd(a, b) {
  if (a instanceof td) {
    var c = a.bc;
    if (null != c && !u(c.i ? c.i(b) : c.call(null, b))) {
      throw Error([x("Assert failed: "), x("Validator rejected reference state"), x("\n"), x(function() {
        var a = Uc(new Tb(null, "validate", "validate", 1439230700, null), new Tb(null, "new-value", "new-value", -1567397401, null));
        return yd.i ? yd.i(a) : yd.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.Jb && rb(a, c, b);
    return b;
  }
  return Cb(a, b);
}
var zd = function() {
  function a(a, b, c, d) {
    if (a instanceof td) {
      var e = a.state;
      b = b.f ? b.f(e, c, d) : b.call(null, e, c, d);
      a = xd(a, b);
    } else {
      a = Db.t(a, b, c, d);
    }
    return a;
  }
  function b(a, b, c) {
    if (a instanceof td) {
      var d = a.state;
      b = b.e ? b.e(d, c) : b.call(null, d, c);
      a = xd(a, b);
    } else {
      a = Db.f(a, b, c);
    }
    return a;
  }
  function c(a, b) {
    var c;
    a instanceof td ? (c = a.state, c = b.i ? b.i(c) : b.call(null, c), c = xd(a, c)) : c = Db.e(a, b);
    return c;
  }
  var d = null, e = function() {
    function a(c, d, e, f, p) {
      var r = null;
      if (4 < arguments.length) {
        for (var r = 0, t = Array(arguments.length - 4);r < t.length;) {
          t[r] = arguments[r + 4], ++r;
        }
        r = new F(t, 0);
      }
      return b.call(this, c, d, e, f, r);
    }
    function b(a, c, d, e, f) {
      return a instanceof td ? xd(a, R.Q(c, a.state, d, e, f)) : Db.Q(a, c, d, e, f);
    }
    a.C = 4;
    a.s = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var f = I(a);
      a = K(a);
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
          n = new F(p, 0);
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
Ad.prototype.fb = function() {
  return this.state;
};
Ad.prototype.Yb = function(a) {
  return this.state = a;
};
var Bd = function() {
  function a(a, b, c, d) {
    return new Zc(null, function() {
      var f = D(b), p = D(c), r = D(d);
      if (f && p && r) {
        var t = M, y;
        y = I(f);
        var C = I(p), E = I(r);
        y = a.f ? a.f(y, C, E) : a.call(null, y, C, E);
        f = t(y, e.t(a, K(f), K(p), K(r)));
      } else {
        f = null;
      }
      return f;
    }, null, null);
  }
  function b(a, b, c) {
    return new Zc(null, function() {
      var d = D(b), f = D(c);
      if (d && f) {
        var p = M, r;
        r = I(d);
        var t = I(f);
        r = a.e ? a.e(r, t) : a.call(null, r, t);
        d = p(r, e.f(a, K(d), K(f)));
      } else {
        d = null;
      }
      return d;
    }, null, null);
  }
  function c(a, b) {
    return new Zc(null, function() {
      var c = D(b);
      if (c) {
        if (yc(c)) {
          for (var d = zb(c), f = N(d), p = cd(f), r = 0;;) {
            if (r < f) {
              gd(p, function() {
                var b = z.e(d, r);
                return a.i ? a.i(b) : a.call(null, b);
              }()), r += 1;
            } else {
              break;
            }
          }
          return fd(p.T(), e.e(a, Ab(c)));
        }
        return M(function() {
          var b = I(c);
          return a.i ? a.i(b) : a.call(null, b);
        }(), e.e(a, K(c)));
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
          return b.G ? b.G() : b.call(null);
        }
        var f = null, r = function() {
          function c(a, b, e) {
            var f = null;
            if (2 < arguments.length) {
              for (var f = 0, h = Array(arguments.length - 2);f < h.length;) {
                h[f] = arguments[f + 2], ++f;
              }
              f = new F(h, 0);
            }
            return d.call(this, a, b, f);
          }
          function d(c, e, f) {
            e = R.f(a, e, f);
            return b.e ? b.e(c, e) : b.call(null, c, e);
          }
          c.C = 2;
          c.s = function(a) {
            var b = I(a);
            a = L(a);
            var c = I(a);
            a = K(a);
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
                h = new F(k, 0);
              }
              return r.p(a, b, h);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        f.C = 2;
        f.s = r.s;
        f.G = e;
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
        t = new F(y, 0);
      }
      return b.call(this, c, d, e, f, t);
    }
    function b(a, c, d, f, h) {
      var k = function C(a) {
        return new Zc(null, function() {
          var b = e.e(D, a);
          return rd(Kc, b) ? M(e.e(I, b), C(e.e(K, b))) : null;
        }, null, null);
      };
      return e.e(function() {
        return function(b) {
          return R.e(a, b);
        };
      }(k), k(nc.p(h, f, lc([d, c], 0))));
    }
    a.C = 4;
    a.s = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var f = I(a);
      a = K(a);
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
          p = new F(r, 0);
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
        var f = D(b);
        return f ? M(I(f), c.e(a - 1, K(f))) : null;
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, h) {
            var k = bb(a), l = a.Yb(a.fb(null) - 1), k = 0 < k ? b.e ? b.e(d, h) : b.call(null, d, h) : d;
            return 0 < l ? k : bc(k) ? k : new ac(k);
          }
          function d(a) {
            return b.i ? b.i(a) : b.call(null, a);
          }
          function l() {
            return b.G ? b.G() : b.call(null);
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
          m.G = l;
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
      return M(a.G ? a.G() : a.call(null), c.i(a));
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
      var f = D(b);
      if (f) {
        if (yc(f)) {
          for (var h = zb(f), k = N(h), l = cd(k), m = 0;;) {
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
          return fd(l.T(), c.e(a, Ab(f)));
        }
        h = I(f);
        f = K(f);
        return u(a.i ? a.i(h) : a.call(null, h)) ? M(h, c.e(a, f)) : c.e(a, f);
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
          return b.G ? b.G() : b.call(null);
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
        l.G = k;
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
    a && (a.B & 4 || a.Mb) ? (b = Lc.t(b, md, sb(a), c), b = ub(b), a = tc(b, uc(a))) : a = Lc.t(b, nc, a, c);
    return a;
  }
  function b(a, b) {
    var c;
    null != a ? a && (a.B & 4 || a.Mb) ? (c = Ic.f(tb, sb(a), b), c = ub(c), c = tc(c, uc(a))) : c = Ic.f(Fa, a, b) : c = Ic.f(nc, Ub, b);
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
    for (b = D(b);;) {
      if (b) {
        var k = a;
        if (k ? k.o & 256 || k.Fb || (k.o ? 0 : v(Na, k)) : v(Na, k)) {
          a = P.f(a, I(b), h);
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
  var f = new Hd(d.P, za(d.j)), h = b.q - 1 >>> c & 31;
  5 === c ? f.j[h] = e : (d = d.j[h], b = null != d ? Ld(b, c - 5, d, e) : Kd(null, c - 5, e), f.j[h] = b);
  return f;
};
function Nd(a, b) {
  throw Error([x("No item "), x(a), x(" in vector of length "), x(b)].join(""));
}
function Od(a, b) {
  if (b >= Jd(a)) {
    return a.ia;
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
  var h = new Hd(d.P, za(d.j));
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
  this.tb = b;
  this.j = c;
  this.v = d;
  this.start = e;
  this.end = f;
}
Sd.prototype.Cb = function() {
  return this.A < this.end;
};
Sd.prototype.next = function() {
  32 === this.A - this.tb && (this.j = Od(this.v, this.A), this.tb += 32);
  var a = this.j[this.A & 31];
  this.A += 1;
  return a;
};
function W(a, b, c, d, e, f) {
  this.meta = a;
  this.q = b;
  this.shift = c;
  this.root = d;
  this.ia = e;
  this.m = f;
  this.o = 167668511;
  this.B = 8196;
}
g = W.prototype;
g.toString = function() {
  return Gb(this);
};
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  return "number" === typeof b ? z.f(this, b, c) : c;
};
g.Y = function(a, b) {
  return Pd(this, b)[b & 31];
};
g.la = function(a, b, c) {
  return 0 <= b && b < this.q ? Od(this, b)[b & 31] : c;
};
g.Bb = function(a, b, c) {
  if (0 <= b && b < this.q) {
    return Jd(this) <= b ? (a = za(this.ia), a[b & 31] = c, new W(this.meta, this.q, this.shift, this.root, a, null)) : new W(this.meta, this.q, this.shift, Rd(this, this.shift, this.root, b, c), this.ia, null);
  }
  if (b === this.q) {
    return Fa(this, c);
  }
  throw Error([x("Index "), x(b), x(" out of bounds  [0,"), x(this.q), x("]")].join(""));
};
g.rb = function() {
  var a = this.q;
  return new Sd(0, 0, 0 < N(this) ? Od(this, 0) : null, this, 0, a);
};
g.K = function() {
  return this.meta;
};
g.O = function() {
  return this.q;
};
g.zb = function() {
  return z.e(this, 0);
};
g.Ab = function() {
  return z.e(this, 1);
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Zb(this);
};
g.F = function(a, b) {
  if (b instanceof W) {
    if (this.q === N(b)) {
      for (var c = Eb(this), d = Eb(b);;) {
        if (u(c.Cb())) {
          var e = c.next(), f = d.next();
          if (!Vb.e(e, f)) {
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
    return jc(this, b);
  }
};
g.gb = function() {
  var a = this;
  return new Ud(a.q, a.shift, function() {
    var b = a.root;
    return Vd.i ? Vd.i(b) : Vd.call(null, b);
  }(), function() {
    var b = a.ia;
    return Wd.i ? Wd.i(b) : Wd.call(null, b);
  }());
};
g.X = function() {
  return tc(mc, this.meta);
};
g.aa = function(a, b) {
  return dc.e(this, b);
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
            if (bc(d)) {
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
      if (bc(e)) {
        return b = e, cc.i ? cc.i(b) : cc.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
g.W = function(a, b, c) {
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
    return new F(this.ia, 0);
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
  return Xd.t ? Xd.t(this, a, 0, 0) : Xd.call(null, this, a, 0, 0);
};
g.N = function(a, b) {
  return new W(b, this.q, this.shift, this.root, this.ia, this.m);
};
g.L = function(a, b) {
  if (32 > this.q - Jd(this)) {
    for (var c = this.ia.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.ia[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new W(this.meta, this.q + 1, this.shift, this.root, d, null);
  }
  c = (d = this.q >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Id(null), d.j[0] = this.root, e = Kd(null, this.shift, new Hd(null, this.ia)), d.j[1] = e) : d = Md(this, this.shift, this.root, new Hd(null, this.ia));
  return new W(this.meta, this.q + 1, c, d, [b], null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.Y(null, c);
      case 3:
        return this.la(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return this.Y(null, c);
  };
  a.f = function(a, c, d) {
    return this.la(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(za(b)));
};
g.i = function(a) {
  return this.Y(null, a);
};
g.e = function(a, b) {
  return this.la(null, a, b);
};
var X = new Hd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), mc = new W(null, 0, 5, X, [], 0);
W.prototype[ya] = function() {
  return Xb(this);
};
function Yd(a, b, c, d, e, f) {
  this.na = a;
  this.Pa = b;
  this.A = c;
  this.off = d;
  this.meta = e;
  this.m = f;
  this.o = 32375020;
  this.B = 1536;
}
g = Yd.prototype;
g.toString = function() {
  return Gb(this);
};
g.K = function() {
  return this.meta;
};
g.ja = function() {
  if (this.off + 1 < this.Pa.length) {
    var a;
    a = this.na;
    var b = this.Pa, c = this.A, d = this.off + 1;
    a = Xd.t ? Xd.t(a, b, c, d) : Xd.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Bb(this);
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Zb(this);
};
g.F = function(a, b) {
  return jc(this, b);
};
g.X = function() {
  return tc(mc, this.meta);
};
g.aa = function(a, b) {
  var c = this;
  return dc.e(function() {
    var a = c.na, b = c.A + c.off, f = N(c.na);
    return Zd.f ? Zd.f(a, b, f) : Zd.call(null, a, b, f);
  }(), b);
};
g.ba = function(a, b, c) {
  var d = this;
  return dc.f(function() {
    var a = d.na, b = d.A + d.off, c = N(d.na);
    return Zd.f ? Zd.f(a, b, c) : Zd.call(null, a, b, c);
  }(), b, c);
};
g.ca = function() {
  return this.Pa[this.off];
};
g.ka = function() {
  if (this.off + 1 < this.Pa.length) {
    var a;
    a = this.na;
    var b = this.Pa, c = this.A, d = this.off + 1;
    a = Xd.t ? Xd.t(a, b, c, d) : Xd.call(null, a, b, c, d);
    return null == a ? Ub : a;
  }
  return Ab(this);
};
g.M = function() {
  return this;
};
g.xb = function() {
  return dd.e(this.Pa, this.off);
};
g.yb = function() {
  var a = this.A + this.Pa.length;
  if (a < Ca(this.na)) {
    var b = this.na, c = Od(this.na, a);
    return Xd.t ? Xd.t(b, c, a, 0) : Xd.call(null, b, c, a, 0);
  }
  return Ub;
};
g.N = function(a, b) {
  var c = this.na, d = this.Pa, e = this.A, f = this.off;
  return Xd.Q ? Xd.Q(c, d, e, f, b) : Xd.call(null, c, d, e, f, b);
};
g.L = function(a, b) {
  return M(b, this);
};
g.wb = function() {
  var a = this.A + this.Pa.length;
  if (a < Ca(this.na)) {
    var b = this.na, c = Od(this.na, a);
    return Xd.t ? Xd.t(b, c, a, 0) : Xd.call(null, b, c, a, 0);
  }
  return null;
};
Yd.prototype[ya] = function() {
  return Xb(this);
};
var Xd = function() {
  function a(a, b, c, d, l) {
    return new Yd(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Yd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Yd(a, Pd(a, b), b, c, null, null);
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
function $d(a, b, c, d, e) {
  this.meta = a;
  this.v = b;
  this.start = c;
  this.end = d;
  this.m = e;
  this.o = 166617887;
  this.B = 8192;
}
g = $d.prototype;
g.toString = function() {
  return Gb(this);
};
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  return "number" === typeof b ? z.f(this, b, c) : c;
};
g.Y = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Nd(b, this.end - this.start) : z.e(this.v, this.start + b);
};
g.la = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : z.f(this.v, this.start + b, c);
};
g.Bb = function(a, b, c) {
  var d = this.start + b;
  a = this.meta;
  c = qc.f(this.v, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return ae.Q ? ae.Q(a, c, b, d, null) : ae.call(null, a, c, b, d, null);
};
g.K = function() {
  return this.meta;
};
g.O = function() {
  return this.end - this.start;
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Zb(this);
};
g.F = function(a, b) {
  return jc(this, b);
};
g.X = function() {
  return tc(mc, this.meta);
};
g.aa = function(a, b) {
  return dc.e(this, b);
};
g.ba = function(a, b, c) {
  return dc.f(this, b, c);
};
g.W = function(a, b, c) {
  if ("number" === typeof b) {
    return ab(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.M = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : M(z.e(a.v, e), new Zc(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
g.N = function(a, b) {
  var c = this.v, d = this.start, e = this.end, f = this.m;
  return ae.Q ? ae.Q(b, c, d, e, f) : ae.call(null, b, c, d, e, f);
};
g.L = function(a, b) {
  var c = this.meta, d = ab(this.v, this.end, b), e = this.start, f = this.end + 1;
  return ae.Q ? ae.Q(c, d, e, f, null) : ae.call(null, c, d, e, f, null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.Y(null, c);
      case 3:
        return this.la(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return this.Y(null, c);
  };
  a.f = function(a, c, d) {
    return this.la(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(za(b)));
};
g.i = function(a) {
  return this.Y(null, a);
};
g.e = function(a, b) {
  return this.la(null, a, b);
};
$d.prototype[ya] = function() {
  return Xb(this);
};
function ae(a, b, c, d, e) {
  for (;;) {
    if (b instanceof $d) {
      c = b.start + c, d = b.start + d, b = b.v;
    } else {
      var f = N(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new $d(a, b, c, d, e);
    }
  }
}
var Zd = function() {
  function a(a, b, c) {
    return ae(null, a, b, c, null);
  }
  function b(a, b) {
    return c.f(a, b, N(a));
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
function be(a, b) {
  return a === b.P ? b : new Hd(a, za(b.j));
}
function Vd(a) {
  return new Hd({}, za(a.j));
}
function Wd(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Ac(a, 0, b, 0, a.length);
  return b;
}
var de = function ce(b, c, d, e) {
  d = be(b.root.P, d);
  var f = b.q - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.j[f];
    b = null != h ? ce(b, c - 5, h, e) : Kd(b.root.P, c - 5, e);
  }
  d.j[f] = b;
  return d;
};
function Ud(a, b, c, d) {
  this.q = a;
  this.shift = b;
  this.root = c;
  this.ia = d;
  this.o = 275;
  this.B = 88;
}
g = Ud.prototype;
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.H(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return this.J(null, c);
  };
  a.f = function(a, c, d) {
    return this.H(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(za(b)));
};
g.i = function(a) {
  return this.J(null, a);
};
g.e = function(a, b) {
  return this.H(null, a, b);
};
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  return "number" === typeof b ? z.f(this, b, c) : c;
};
g.Y = function(a, b) {
  if (this.root.P) {
    return Pd(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.la = function(a, b, c) {
  return 0 <= b && b < this.q ? z.e(this, b) : c;
};
g.O = function() {
  if (this.root.P) {
    return this.q;
  }
  throw Error("count after persistent!");
};
g.Gb = function(a, b, c) {
  var d = this;
  if (d.root.P) {
    if (0 <= b && b < d.q) {
      return Jd(this) <= b ? d.ia[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = be(d.root.P, k);
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
      return tb(this, c);
    }
    throw Error([x("Index "), x(b), x(" out of bounds for TransientVector of length"), x(d.q)].join(""));
  }
  throw Error("assoc! after persistent!");
};
g.ib = function(a, b, c) {
  if ("number" === typeof b) {
    return wb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.jb = function(a, b) {
  if (this.root.P) {
    if (32 > this.q - Jd(this)) {
      this.ia[this.q & 31] = b;
    } else {
      var c = new Hd(this.root.P, this.ia), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.ia = d;
      if (this.q >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Kd(this.root.P, this.shift, c);
        this.root = new Hd(this.root.P, d);
        this.shift = e;
      } else {
        this.root = de(this, this.shift, this.root, c);
      }
    }
    this.q += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.kb = function() {
  if (this.root.P) {
    this.root.P = null;
    var a = this.q - Jd(this), b = Array(a);
    Ac(this.ia, 0, b, 0, a);
    return new W(null, this.q, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function ee() {
  this.B = 0;
  this.o = 2097152;
}
ee.prototype.F = function() {
  return!1;
};
var fe = new ee;
function ge(a, b) {
  return Dc(wc(b) ? N(a) === N(b) ? rd(Kc, Bd.e(function(a) {
    return Vb.e(P.f(b, I(a), fe), I(L(a)));
  }, a)) : null : null);
}
function he(a, b) {
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
      if (b instanceof Tb) {
        a: {
          d = c.length;
          e = b.xa;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            h = c[f];
            if (h instanceof Tb && e === h.xa) {
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
              if (Vb.e(b, c[e])) {
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
function ie(a, b, c) {
  this.j = a;
  this.A = b;
  this.ga = c;
  this.B = 0;
  this.o = 32374990;
}
g = ie.prototype;
g.toString = function() {
  return Gb(this);
};
g.K = function() {
  return this.ga;
};
g.ja = function() {
  return this.A < this.j.length - 2 ? new ie(this.j, this.A + 2, this.ga) : null;
};
g.O = function() {
  return(this.j.length - this.A) / 2;
};
g.I = function() {
  return Zb(this);
};
g.F = function(a, b) {
  return jc(this, b);
};
g.X = function() {
  return tc(Ub, this.ga);
};
g.aa = function(a, b) {
  return Jc.e(b, this);
};
g.ba = function(a, b, c) {
  return Jc.f(b, c, this);
};
g.ca = function() {
  return new W(null, 2, 5, X, [this.j[this.A], this.j[this.A + 1]], null);
};
g.ka = function() {
  return this.A < this.j.length - 2 ? new ie(this.j, this.A + 2, this.ga) : Ub;
};
g.M = function() {
  return this;
};
g.N = function(a, b) {
  return new ie(this.j, this.A, b);
};
g.L = function(a, b) {
  return M(b, this);
};
ie.prototype[ya] = function() {
  return Xb(this);
};
function je(a, b, c) {
  this.j = a;
  this.A = b;
  this.q = c;
}
je.prototype.Cb = function() {
  return this.A < this.q;
};
je.prototype.next = function() {
  var a = new W(null, 2, 5, X, [this.j[this.A], this.j[this.A + 1]], null);
  this.A += 2;
  return a;
};
function s(a, b, c, d) {
  this.meta = a;
  this.q = b;
  this.j = c;
  this.m = d;
  this.o = 16647951;
  this.B = 8196;
}
g = s.prototype;
g.toString = function() {
  return Gb(this);
};
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  a = he(this, b);
  return-1 === a ? c : this.j[a + 1];
};
g.rb = function() {
  return new je(this.j, 0, 2 * this.q);
};
g.K = function() {
  return this.meta;
};
g.O = function() {
  return this.q;
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = $b(this);
};
g.F = function(a, b) {
  if (b && (b.o & 1024 || b.Ob)) {
    var c = this.j.length;
    if (this.q === b.O(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.H(null, this.j[d], Cc);
          if (e !== Cc) {
            if (Vb.e(this.j[d + 1], e)) {
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
    return ge(this, b);
  }
};
g.gb = function() {
  return new ke({}, this.j.length, za(this.j));
};
g.X = function() {
  return fb(le, this.meta);
};
g.aa = function(a, b) {
  return Jc.e(b, this);
};
g.ba = function(a, b, c) {
  return Jc.f(b, c, this);
};
g.$ = function(a, b) {
  if (0 <= he(this, b)) {
    var c = this.j.length, d = c - 2;
    if (0 === d) {
      return Ea(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new s(this.meta, this.q - 1, d, null);
      }
      Vb.e(b, this.j[e]) || (d[f] = this.j[e], d[f + 1] = this.j[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
g.W = function(a, b, c) {
  a = he(this, b);
  if (-1 === a) {
    if (this.q < me) {
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
    return fb(Pa(Fd.e(pc, this), b, c), this.meta);
  }
  if (c === this.j[a + 1]) {
    return this;
  }
  b = za(this.j);
  b[a + 1] = c;
  return new s(this.meta, this.q, b, null);
};
g.vb = function(a, b) {
  return-1 !== he(this, b);
};
g.M = function() {
  var a = this.j;
  return 0 <= a.length - 2 ? new ie(a, 0, null) : null;
};
g.N = function(a, b) {
  return new s(b, this.q, this.j, this.m);
};
g.L = function(a, b) {
  if (xc(b)) {
    return Pa(this, z.e(b, 0), z.e(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = I(d);
    if (xc(e)) {
      c = Pa(c, z.e(e, 0), z.e(e, 1)), d = L(d);
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
        return this.H(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return this.J(null, c);
  };
  a.f = function(a, c, d) {
    return this.H(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(za(b)));
};
g.i = function(a) {
  return this.J(null, a);
};
g.e = function(a, b) {
  return this.H(null, a, b);
};
var le = new s(null, 0, [], null), me = 8;
s.prototype[ya] = function() {
  return Xb(this);
};
function ke(a, b, c) {
  this.$a = a;
  this.eb = b;
  this.j = c;
  this.B = 56;
  this.o = 258;
}
g = ke.prototype;
g.ib = function(a, b, c) {
  var d = this;
  if (u(d.$a)) {
    a = he(this, b);
    if (-1 === a) {
      return d.eb + 2 <= 2 * me ? (d.eb += 2, d.j.push(b), d.j.push(c), this) : od.f(function() {
        var a = d.eb, b = d.j;
        return ne.e ? ne.e(a, b) : ne.call(null, a, b);
      }(), b, c);
    }
    c !== d.j[a + 1] && (d.j[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
g.jb = function(a, b) {
  if (u(this.$a)) {
    if (b ? b.o & 2048 || b.Pb || (b.o ? 0 : v(Ta, b)) : v(Ta, b)) {
      return vb(this, Qc.i ? Qc.i(b) : Qc.call(null, b), Rc.i ? Rc.i(b) : Rc.call(null, b));
    }
    for (var c = D(b), d = this;;) {
      var e = I(c);
      if (u(e)) {
        var f = e, c = L(c), d = vb(d, function() {
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
g.kb = function() {
  if (u(this.$a)) {
    return this.$a = !1, new s(null, Nc(this.eb), this.j, null);
  }
  throw Error("persistent! called twice");
};
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  if (u(this.$a)) {
    return a = he(this, b), -1 === a ? c : this.j[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.O = function() {
  if (u(this.$a)) {
    return Nc(this.eb);
  }
  throw Error("count after persistent!");
};
function ne(a, b) {
  for (var c = sb(pc), d = 0;;) {
    if (d < a) {
      c = od.f(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function oe() {
  this.pa = !1;
}
function pe(a, b) {
  return a === b ? !0 : U(a, b) ? !0 : Vb.e(a, b);
}
var qe = function() {
  function a(a, b, c, h, k) {
    a = za(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = za(a);
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
function re(a, b) {
  var c = Array(a.length - 2);
  Ac(a, 0, c, 0, 2 * b);
  Ac(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var se = function() {
  function a(a, b, c, h, k, l) {
    a = a.ab(b);
    a.j[c] = h;
    a.j[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.ab(b);
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
  c.Z = a;
  return c;
}();
function te(a, b, c) {
  this.P = a;
  this.S = b;
  this.j = c;
}
g = te.prototype;
g.ab = function(a) {
  if (a === this.P) {
    return this;
  }
  var b = Oc(this.S), c = Array(0 > b ? 4 : 2 * (b + 1));
  Ac(this.j, 0, c, 0, 2 * b);
  return new te(a, this.S, c);
};
g.lb = function() {
  var a = this.j;
  return ue.i ? ue.i(a) : ue.call(null, a);
};
g.Ta = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.S & e)) {
    return d;
  }
  var f = Oc(this.S & e - 1), e = this.j[2 * f], f = this.j[2 * f + 1];
  return null == e ? f.Ta(a + 5, b, c, d) : pe(c, e) ? f : d;
};
g.ua = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = Oc(this.S & h - 1);
  if (0 === (this.S & h)) {
    var l = Oc(this.S);
    if (2 * l < this.j.length) {
      var m = this.ab(a), n = m.j;
      f.pa = !0;
      Bc(n, 2 * k, n, 2 * (k + 1), 2 * (l - k));
      n[2 * k] = d;
      n[2 * k + 1] = e;
      m.S |= h;
      return m;
    }
    if (16 <= l) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[c >>> b & 31] = ve.ua(a, b + 5, c, d, e, f);
      for (m = k = 0;;) {
        if (32 > k) {
          0 !== (this.S >>> k & 1) && (h[k] = null != this.j[m] ? ve.ua(a, b + 5, Qb(this.j[m]), this.j[m], this.j[m + 1], f) : this.j[m + 1], m += 2), k += 1;
        } else {
          break;
        }
      }
      return new we(a, l + 1, h);
    }
    n = Array(2 * (l + 4));
    Ac(this.j, 0, n, 0, 2 * k);
    n[2 * k] = d;
    n[2 * k + 1] = e;
    Ac(this.j, 2 * k, n, 2 * (k + 1), 2 * (l - k));
    f.pa = !0;
    m = this.ab(a);
    m.j = n;
    m.S |= h;
    return m;
  }
  var p = this.j[2 * k], r = this.j[2 * k + 1];
  if (null == p) {
    return l = r.ua(a, b + 5, c, d, e, f), l === r ? this : se.t(this, a, 2 * k + 1, l);
  }
  if (pe(d, p)) {
    return e === r ? this : se.t(this, a, 2 * k + 1, e);
  }
  f.pa = !0;
  return se.Z(this, a, 2 * k, null, 2 * k + 1, function() {
    var f = b + 5;
    return xe.oa ? xe.oa(a, f, p, r, c, d, e) : xe.call(null, a, f, p, r, c, d, e);
  }());
};
g.ta = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = Oc(this.S & f - 1);
  if (0 === (this.S & f)) {
    var k = Oc(this.S);
    if (16 <= k) {
      f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      f[b >>> a & 31] = ve.ta(a + 5, b, c, d, e);
      for (var l = h = 0;;) {
        if (32 > h) {
          0 !== (this.S >>> h & 1) && (f[h] = null != this.j[l] ? ve.ta(a + 5, Qb(this.j[l]), this.j[l], this.j[l + 1], e) : this.j[l + 1], l += 2), h += 1;
        } else {
          break;
        }
      }
      return new we(null, k + 1, f);
    }
    l = Array(2 * (k + 1));
    Ac(this.j, 0, l, 0, 2 * h);
    l[2 * h] = c;
    l[2 * h + 1] = d;
    Ac(this.j, 2 * h, l, 2 * (h + 1), 2 * (k - h));
    e.pa = !0;
    return new te(null, this.S | f, l);
  }
  var m = this.j[2 * h], n = this.j[2 * h + 1];
  if (null == m) {
    return k = n.ta(a + 5, b, c, d, e), k === n ? this : new te(null, this.S, qe.f(this.j, 2 * h + 1, k));
  }
  if (pe(c, m)) {
    return d === n ? this : new te(null, this.S, qe.f(this.j, 2 * h + 1, d));
  }
  e.pa = !0;
  return new te(null, this.S, qe.Q(this.j, 2 * h, null, 2 * h + 1, function() {
    var e = a + 5;
    return xe.Z ? xe.Z(e, m, n, b, c, d) : xe.call(null, e, m, n, b, c, d);
  }()));
};
g.mb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.S & d)) {
    return this;
  }
  var e = Oc(this.S & d - 1), f = this.j[2 * e], h = this.j[2 * e + 1];
  return null == f ? (a = h.mb(a + 5, b, c), a === h ? this : null != a ? new te(null, this.S, qe.f(this.j, 2 * e + 1, a)) : this.S === d ? null : new te(null, this.S ^ d, re(this.j, e))) : pe(c, f) ? new te(null, this.S ^ d, re(this.j, e)) : this;
};
var ve = new te(null, 0, []);
function we(a, b, c) {
  this.P = a;
  this.q = b;
  this.j = c;
}
g = we.prototype;
g.ab = function(a) {
  return a === this.P ? this : new we(a, this.q, za(this.j));
};
g.lb = function() {
  var a = this.j;
  return ye.i ? ye.i(a) : ye.call(null, a);
};
g.Ta = function(a, b, c, d) {
  var e = this.j[b >>> a & 31];
  return null != e ? e.Ta(a + 5, b, c, d) : d;
};
g.ua = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.j[h];
  if (null == k) {
    return a = se.t(this, a, h, ve.ua(a, b + 5, c, d, e, f)), a.q += 1, a;
  }
  b = k.ua(a, b + 5, c, d, e, f);
  return b === k ? this : se.t(this, a, h, b);
};
g.ta = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.j[f];
  if (null == h) {
    return new we(null, this.q + 1, qe.f(this.j, f, ve.ta(a + 5, b, c, d, e)));
  }
  a = h.ta(a + 5, b, c, d, e);
  return a === h ? this : new we(null, this.q, qe.f(this.j, f, a));
};
g.mb = function(a, b, c) {
  var d = b >>> a & 31, e = this.j[d];
  if (null != e) {
    a = e.mb(a + 5, b, c);
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
                d = new te(null, h, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new we(null, this.q - 1, qe.f(this.j, d, a));
        }
      } else {
        d = new we(null, this.q, qe.f(this.j, d, a));
      }
    }
    return d;
  }
  return this;
};
function ze(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (pe(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Ae(a, b, c, d) {
  this.P = a;
  this.Ma = b;
  this.q = c;
  this.j = d;
}
g = Ae.prototype;
g.ab = function(a) {
  if (a === this.P) {
    return this;
  }
  var b = Array(2 * (this.q + 1));
  Ac(this.j, 0, b, 0, 2 * this.q);
  return new Ae(a, this.Ma, this.q, b);
};
g.lb = function() {
  var a = this.j;
  return ue.i ? ue.i(a) : ue.call(null, a);
};
g.Ta = function(a, b, c, d) {
  a = ze(this.j, this.q, c);
  return 0 > a ? d : pe(c, this.j[a]) ? this.j[a + 1] : d;
};
g.ua = function(a, b, c, d, e, f) {
  if (c === this.Ma) {
    b = ze(this.j, this.q, d);
    if (-1 === b) {
      if (this.j.length > 2 * this.q) {
        return a = se.Z(this, a, 2 * this.q, d, 2 * this.q + 1, e), f.pa = !0, a.q += 1, a;
      }
      c = this.j.length;
      b = Array(c + 2);
      Ac(this.j, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.pa = !0;
      f = this.q + 1;
      a === this.P ? (this.j = b, this.q = f, a = this) : a = new Ae(this.P, this.Ma, f, b);
      return a;
    }
    return this.j[b + 1] === e ? this : se.t(this, a, b + 1, e);
  }
  return(new te(a, 1 << (this.Ma >>> b & 31), [null, this, null, null])).ua(a, b, c, d, e, f);
};
g.ta = function(a, b, c, d, e) {
  return b === this.Ma ? (a = ze(this.j, this.q, c), -1 === a ? (a = 2 * this.q, b = Array(a + 2), Ac(this.j, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.pa = !0, new Ae(null, this.Ma, this.q + 1, b)) : Vb.e(this.j[a], d) ? this : new Ae(null, this.Ma, this.q, qe.f(this.j, a + 1, d))) : (new te(null, 1 << (this.Ma >>> a & 31), [null, this])).ta(a, b, c, d, e);
};
g.mb = function(a, b, c) {
  a = ze(this.j, this.q, c);
  return-1 === a ? this : 1 === this.q ? null : new Ae(null, this.Ma, this.q - 1, re(this.j, Nc(a)));
};
var xe = function() {
  function a(a, b, c, h, k, l, m) {
    var n = Qb(c);
    if (n === k) {
      return new Ae(null, n, 2, [c, h, l, m]);
    }
    var p = new oe;
    return ve.ua(a, b, n, c, h, p).ua(a, b, k, l, m, p);
  }
  function b(a, b, c, h, k, l) {
    var m = Qb(b);
    if (m === h) {
      return new Ae(null, m, 2, [b, c, k, l]);
    }
    var n = new oe;
    return ve.ta(a, m, b, c, n).ta(a, h, k, l, n);
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
  c.Z = b;
  c.oa = a;
  return c;
}();
function Be(a, b, c, d, e) {
  this.meta = a;
  this.Ua = b;
  this.A = c;
  this.R = d;
  this.m = e;
  this.B = 0;
  this.o = 32374860;
}
g = Be.prototype;
g.toString = function() {
  return Gb(this);
};
g.K = function() {
  return this.meta;
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Zb(this);
};
g.F = function(a, b) {
  return jc(this, b);
};
g.X = function() {
  return tc(Ub, this.meta);
};
g.aa = function(a, b) {
  return Jc.e(b, this);
};
g.ba = function(a, b, c) {
  return Jc.f(b, c, this);
};
g.ca = function() {
  return null == this.R ? new W(null, 2, 5, X, [this.Ua[this.A], this.Ua[this.A + 1]], null) : I(this.R);
};
g.ka = function() {
  if (null == this.R) {
    var a = this.Ua, b = this.A + 2;
    return ue.f ? ue.f(a, b, null) : ue.call(null, a, b, null);
  }
  var a = this.Ua, b = this.A, c = L(this.R);
  return ue.f ? ue.f(a, b, c) : ue.call(null, a, b, c);
};
g.M = function() {
  return this;
};
g.N = function(a, b) {
  return new Be(b, this.Ua, this.A, this.R, this.m);
};
g.L = function(a, b) {
  return M(b, this);
};
Be.prototype[ya] = function() {
  return Xb(this);
};
var ue = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Be(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (u(h) && (h = h.lb(), u(h))) {
            return new Be(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Be(null, a, b, c, null);
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
function Ce(a, b, c, d, e) {
  this.meta = a;
  this.Ua = b;
  this.A = c;
  this.R = d;
  this.m = e;
  this.B = 0;
  this.o = 32374860;
}
g = Ce.prototype;
g.toString = function() {
  return Gb(this);
};
g.K = function() {
  return this.meta;
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Zb(this);
};
g.F = function(a, b) {
  return jc(this, b);
};
g.X = function() {
  return tc(Ub, this.meta);
};
g.aa = function(a, b) {
  return Jc.e(b, this);
};
g.ba = function(a, b, c) {
  return Jc.f(b, c, this);
};
g.ca = function() {
  return I(this.R);
};
g.ka = function() {
  var a = this.Ua, b = this.A, c = L(this.R);
  return ye.t ? ye.t(null, a, b, c) : ye.call(null, null, a, b, c);
};
g.M = function() {
  return this;
};
g.N = function(a, b) {
  return new Ce(b, this.Ua, this.A, this.R, this.m);
};
g.L = function(a, b) {
  return M(b, this);
};
Ce.prototype[ya] = function() {
  return Xb(this);
};
var ye = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (u(k) && (k = k.lb(), u(k))) {
            return new Ce(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Ce(a, b, c, h, null);
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
function De(a, b, c, d, e, f) {
  this.meta = a;
  this.q = b;
  this.root = c;
  this.ha = d;
  this.ma = e;
  this.m = f;
  this.o = 16123663;
  this.B = 8196;
}
g = De.prototype;
g.toString = function() {
  return Gb(this);
};
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  return null == b ? this.ha ? this.ma : c : null == this.root ? c : this.root.Ta(0, Qb(b), b, c);
};
g.K = function() {
  return this.meta;
};
g.O = function() {
  return this.q;
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = $b(this);
};
g.F = function(a, b) {
  return ge(this, b);
};
g.gb = function() {
  return new Ee({}, this.root, this.q, this.ha, this.ma);
};
g.X = function() {
  return fb(pc, this.meta);
};
g.$ = function(a, b) {
  if (null == b) {
    return this.ha ? new De(this.meta, this.q - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.mb(0, Qb(b), b);
  return c === this.root ? this : new De(this.meta, this.q - 1, c, this.ha, this.ma, null);
};
g.W = function(a, b, c) {
  if (null == b) {
    return this.ha && c === this.ma ? this : new De(this.meta, this.ha ? this.q : this.q + 1, this.root, !0, c, null);
  }
  a = new oe;
  b = (null == this.root ? ve : this.root).ta(0, Qb(b), b, c, a);
  return b === this.root ? this : new De(this.meta, a.pa ? this.q + 1 : this.q, b, this.ha, this.ma, null);
};
g.vb = function(a, b) {
  return null == b ? this.ha : null == this.root ? !1 : this.root.Ta(0, Qb(b), b, Cc) !== Cc;
};
g.M = function() {
  if (0 < this.q) {
    var a = null != this.root ? this.root.lb() : null;
    return this.ha ? M(new W(null, 2, 5, X, [null, this.ma], null), a) : a;
  }
  return null;
};
g.N = function(a, b) {
  return new De(b, this.q, this.root, this.ha, this.ma, this.m);
};
g.L = function(a, b) {
  if (xc(b)) {
    return Pa(this, z.e(b, 0), z.e(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = I(d);
    if (xc(e)) {
      c = Pa(c, z.e(e, 0), z.e(e, 1)), d = L(d);
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
        return this.H(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return this.J(null, c);
  };
  a.f = function(a, c, d) {
    return this.H(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(za(b)));
};
g.i = function(a) {
  return this.J(null, a);
};
g.e = function(a, b) {
  return this.H(null, a, b);
};
var pc = new De(null, 0, null, !1, null, 0);
De.prototype[ya] = function() {
  return Xb(this);
};
function Ee(a, b, c, d, e) {
  this.P = a;
  this.root = b;
  this.count = c;
  this.ha = d;
  this.ma = e;
  this.B = 56;
  this.o = 258;
}
g = Ee.prototype;
g.ib = function(a, b, c) {
  return Fe(this, b, c);
};
g.jb = function(a, b) {
  return Ge(this, b);
};
g.kb = function() {
  var a;
  if (this.P) {
    this.P = null, a = new De(null, this.count, this.root, this.ha, this.ma, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.J = function(a, b) {
  return null == b ? this.ha ? this.ma : null : null == this.root ? null : this.root.Ta(0, Qb(b), b);
};
g.H = function(a, b, c) {
  return null == b ? this.ha ? this.ma : c : null == this.root ? c : this.root.Ta(0, Qb(b), b, c);
};
g.O = function() {
  if (this.P) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Ge(a, b) {
  if (a.P) {
    if (b ? b.o & 2048 || b.Pb || (b.o ? 0 : v(Ta, b)) : v(Ta, b)) {
      return Fe(a, Qc.i ? Qc.i(b) : Qc.call(null, b), Rc.i ? Rc.i(b) : Rc.call(null, b));
    }
    for (var c = D(b), d = a;;) {
      var e = I(c);
      if (u(e)) {
        var f = e, c = L(c), d = Fe(d, function() {
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
function Fe(a, b, c) {
  if (a.P) {
    if (null == b) {
      a.ma !== c && (a.ma = c), a.ha || (a.count += 1, a.ha = !0);
    } else {
      var d = new oe;
      b = (null == a.root ? ve : a.root).ua(a.P, 0, Qb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.pa && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var ud = function() {
  function a(a) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new F(e, 0);
    }
    return b.call(this, d);
  }
  function b(a) {
    a = D(a);
    for (var b = sb(pc);;) {
      if (a) {
        var e = L(L(a)), b = od.f(b, I(a), I(L(a)));
        a = e;
      } else {
        return ub(b);
      }
    }
  }
  a.C = 0;
  a.s = function(a) {
    a = D(a);
    return b(a);
  };
  a.p = b;
  return a;
}();
function He(a, b) {
  this.da = a;
  this.ga = b;
  this.B = 0;
  this.o = 32374988;
}
g = He.prototype;
g.toString = function() {
  return Gb(this);
};
g.K = function() {
  return this.ga;
};
g.ja = function() {
  var a = this.da, a = (a ? a.o & 128 || a.sb || (a.o ? 0 : v(Ma, a)) : v(Ma, a)) ? this.da.ja(null) : L(this.da);
  return null == a ? null : new He(a, this.ga);
};
g.I = function() {
  return Zb(this);
};
g.F = function(a, b) {
  return jc(this, b);
};
g.X = function() {
  return tc(Ub, this.ga);
};
g.aa = function(a, b) {
  return Jc.e(b, this);
};
g.ba = function(a, b, c) {
  return Jc.f(b, c, this);
};
g.ca = function() {
  return this.da.ca(null).zb();
};
g.ka = function() {
  var a = this.da, a = (a ? a.o & 128 || a.sb || (a.o ? 0 : v(Ma, a)) : v(Ma, a)) ? this.da.ja(null) : L(this.da);
  return null != a ? new He(a, this.ga) : Ub;
};
g.M = function() {
  return this;
};
g.N = function(a, b) {
  return new He(this.da, b);
};
g.L = function(a, b) {
  return M(b, this);
};
He.prototype[ya] = function() {
  return Xb(this);
};
function Qc(a) {
  return Ua(a);
}
function Ie(a, b) {
  this.da = a;
  this.ga = b;
  this.B = 0;
  this.o = 32374988;
}
g = Ie.prototype;
g.toString = function() {
  return Gb(this);
};
g.K = function() {
  return this.ga;
};
g.ja = function() {
  var a = this.da, a = (a ? a.o & 128 || a.sb || (a.o ? 0 : v(Ma, a)) : v(Ma, a)) ? this.da.ja(null) : L(this.da);
  return null == a ? null : new Ie(a, this.ga);
};
g.I = function() {
  return Zb(this);
};
g.F = function(a, b) {
  return jc(this, b);
};
g.X = function() {
  return tc(Ub, this.ga);
};
g.aa = function(a, b) {
  return Jc.e(b, this);
};
g.ba = function(a, b, c) {
  return Jc.f(b, c, this);
};
g.ca = function() {
  return this.da.ca(null).Ab();
};
g.ka = function() {
  var a = this.da, a = (a ? a.o & 128 || a.sb || (a.o ? 0 : v(Ma, a)) : v(Ma, a)) ? this.da.ja(null) : L(this.da);
  return null != a ? new Ie(a, this.ga) : Ub;
};
g.M = function() {
  return this;
};
g.N = function(a, b) {
  return new Ie(this.da, b);
};
g.L = function(a, b) {
  return M(b, this);
};
Ie.prototype[ya] = function() {
  return Xb(this);
};
function Je(a) {
  return(a = D(a)) ? new Ie(a, null) : null;
}
function Rc(a) {
  return Xa(a);
}
function Ke(a, b, c) {
  this.meta = a;
  this.cb = b;
  this.m = c;
  this.o = 15077647;
  this.B = 8196;
}
g = Ke.prototype;
g.toString = function() {
  return Gb(this);
};
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  return Oa(this.cb, b) ? b : c;
};
g.K = function() {
  return this.meta;
};
g.O = function() {
  return Ca(this.cb);
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = $b(this);
};
g.F = function(a, b) {
  return vc(b) && N(this) === N(b) && rd(function(a) {
    return function(b) {
      return Ec(a, b);
    };
  }(this), b);
};
g.gb = function() {
  return new Le(sb(this.cb));
};
g.X = function() {
  return tc(Me, this.meta);
};
g.M = function() {
  var a = D(this.cb);
  return a ? new He(a, null) : null;
};
g.N = function(a, b) {
  return new Ke(b, this.cb, this.m);
};
g.L = function(a, b) {
  return new Ke(this.meta, qc.f(this.cb, b, null), null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.H(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return this.J(null, c);
  };
  a.f = function(a, c, d) {
    return this.H(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(za(b)));
};
g.i = function(a) {
  return this.J(null, a);
};
g.e = function(a, b) {
  return this.H(null, a, b);
};
var Me = new Ke(null, le, 0);
Ke.prototype[ya] = function() {
  return Xb(this);
};
function Le(a) {
  this.Sa = a;
  this.o = 259;
  this.B = 136;
}
g = Le.prototype;
g.call = function() {
  function a(a, b, c) {
    return A.f(this.Sa, b, Cc) === Cc ? c : b;
  }
  function b(a, b) {
    return A.f(this.Sa, b, Cc) === Cc ? null : b;
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
  return this.call.apply(this, [this].concat(za(b)));
};
g.i = function(a) {
  return A.f(this.Sa, a, Cc) === Cc ? null : a;
};
g.e = function(a, b) {
  return A.f(this.Sa, a, Cc) === Cc ? b : a;
};
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  return A.f(this.Sa, b, Cc) === Cc ? c : b;
};
g.O = function() {
  return N(this.Sa);
};
g.jb = function(a, b) {
  this.Sa = od.f(this.Sa, b, null);
  return this;
};
g.kb = function() {
  return new Ke(null, ub(this.Sa), null);
};
function Xc(a) {
  if (a && (a.B & 4096 || a.Rb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([x("Doesn't support name: "), x(a)].join(""));
}
var Ne = function() {
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
        m = new F(n, 0);
      }
      return c.call(this, b, d, k, m);
    }
    function c(a, d, e, l) {
      return Ic.f(function(c, d) {
        return b.f(a, c, d);
      }, b.f(a, d, e), l);
    }
    a.C = 3;
    a.s = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var l = I(a);
      a = K(a);
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
          k = new F(l, 0);
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
function Y(a, b, c, d, e, f, h) {
  var k = la;
  try {
    la = null == la ? null : la - 1;
    if (null != la && 0 > la) {
      return B(a, "#");
    }
    B(a, c);
    if (D(h)) {
      var l = I(h);
      b.f ? b.f(l, a, f) : b.call(null, l, a, f);
    }
    for (var m = L(h), n = ua.i(f) - 1;;) {
      if (!m || null != n && 0 === n) {
        D(m) && 0 === n && (B(a, d), B(a, "..."));
        break;
      } else {
        B(a, d);
        var p = I(m);
        c = a;
        h = f;
        b.f ? b.f(p, c, h) : b.call(null, p, c, h);
        var r = L(m);
        c = n - 1;
        m = r;
        n = c;
      }
    }
    return B(a, e);
  } finally {
    la = k;
  }
}
var Oe = function() {
  function a(a, d) {
    var e = null;
    if (1 < arguments.length) {
      for (var e = 0, f = Array(arguments.length - 1);e < f.length;) {
        f[e] = arguments[e + 1], ++e;
      }
      e = new F(f, 0);
    }
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = D(b), f = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = f.Y(null, k);
        B(a, l);
        k += 1;
      } else {
        if (e = D(e)) {
          f = e, yc(f) ? (e = zb(f), h = Ab(f), f = e, l = N(e), e = h, h = l) : (l = I(f), B(a, l), e = L(f), f = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.C = 1;
  a.s = function(a) {
    var d = I(a);
    a = K(a);
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
    return B(c, "nil");
  }
  if (void 0 === b) {
    return B(c, "#\x3cundefined\x3e");
  }
  u(function() {
    var c = P.e(d, sa);
    return u(c) ? (c = b ? b.o & 131072 || b.Qb ? !0 : b.o ? !1 : v(cb, b) : v(cb, b)) ? uc(b) : c : c;
  }()) && (B(c, "^"), Se(uc(b), c, d), B(c, " "));
  if (null == b) {
    return B(c, "nil");
  }
  if (b.$b) {
    return b.jc(b, c, d);
  }
  if (b && (b.o & 2147483648 || b.V)) {
    return b.D(null, c, d);
  }
  if (va(b) === Boolean || "number" === typeof b) {
    return B(c, "" + x(b));
  }
  if (null != b && b.constructor === Object) {
    B(c, "#js ");
    var e = Bd.e(function(c) {
      return new W(null, 2, 5, X, [Yc.i(c), b[c]], null);
    }, zc(b));
    return Te.t ? Te.t(e, Se, c, d) : Te.call(null, e, Se, c, d);
  }
  return b instanceof Array ? Y(c, Se, "#js [", " ", "]", d, b) : u("string" == typeof b) ? u(ra.i(d)) ? B(c, Re(b)) : B(c, b) : rc(b) ? Oe.p(c, lc(["#\x3c", "" + x(b), "\x3e"], 0)) : b instanceof Date ? (e = function(b, c) {
    for (var d = "" + x(b);;) {
      if (N(d) < c) {
        d = [x("0"), x(d)].join("");
      } else {
        return d;
      }
    }
  }, Oe.p(c, lc(['#inst "', "" + x(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : b instanceof RegExp ? Oe.p(c, lc(['#"', b.source, '"'], 0)) : (b ? b.o & 2147483648 || b.V || (b.o ? 0 : v(pb, b)) : v(pb, b)) ? qb(b, c, d) : Oe.p(c, lc(["#\x3c", "" + x(b), "\x3e"], 0));
}, yd = function() {
  function a(a) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new F(e, 0);
    }
    return b.call(this, d);
  }
  function b(a) {
    var b = oa(), e;
    (e = null == a) || (e = D(a), e = u(e) ? !1 : !0);
    if (e) {
      b = "";
    } else {
      e = x;
      var f = new ha;
      a: {
        var h = new Fb(f);
        Z(I(a), h, b);
        a = D(L(a));
        for (var k = null, l = 0, m = 0;;) {
          if (m < l) {
            var n = k.Y(null, m);
            B(h, " ");
            Z(n, h, b);
            m += 1;
          } else {
            if (a = D(a)) {
              k = a, yc(k) ? (a = zb(k), l = Ab(k), k = a, n = N(a), a = l, l = n) : (n = I(k), B(h, " "), Z(n, h, b), a = L(k), k = null, l = 0), m = 0;
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
    a = D(a);
    return b(a);
  };
  a.p = b;
  return a;
}();
function Te(a, b, c, d) {
  return Y(c, function(a, c, d) {
    var k = Ua(a);
    b.f ? b.f(k, c, d) : b.call(null, k, c, d);
    B(c, " ");
    a = Xa(a);
    return b.f ? b.f(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, D(a));
}
Ad.prototype.V = !0;
Ad.prototype.D = function(a, b, c) {
  B(b, "#\x3cVolatile: ");
  Z(this.state, b, c);
  return B(b, "\x3e");
};
F.prototype.V = !0;
F.prototype.D = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Zc.prototype.V = !0;
Zc.prototype.D = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Be.prototype.V = !0;
Be.prototype.D = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
ie.prototype.V = !0;
ie.prototype.D = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Yd.prototype.V = !0;
Yd.prototype.D = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Vc.prototype.V = !0;
Vc.prototype.D = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
De.prototype.V = !0;
De.prototype.D = function(a, b, c) {
  return Te(this, Z, b, c);
};
Ce.prototype.V = !0;
Ce.prototype.D = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
$d.prototype.V = !0;
$d.prototype.D = function(a, b, c) {
  return Y(b, Z, "[", " ", "]", c, this);
};
Ke.prototype.V = !0;
Ke.prototype.D = function(a, b, c) {
  return Y(b, Z, "#{", " ", "}", c, this);
};
ed.prototype.V = !0;
ed.prototype.D = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
td.prototype.V = !0;
td.prototype.D = function(a, b, c) {
  B(b, "#\x3cAtom: ");
  Z(this.state, b, c);
  return B(b, "\x3e");
};
Ie.prototype.V = !0;
Ie.prototype.D = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
W.prototype.V = !0;
W.prototype.D = function(a, b, c) {
  return Y(b, Z, "[", " ", "]", c, this);
};
Tc.prototype.V = !0;
Tc.prototype.D = function(a, b) {
  return B(b, "()");
};
s.prototype.V = !0;
s.prototype.D = function(a, b, c) {
  return Te(this, Z, b, c);
};
He.prototype.V = !0;
He.prototype.D = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Sc.prototype.V = !0;
Sc.prototype.D = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
W.prototype.ob = !0;
W.prototype.pb = function(a, b) {
  return Hc.e(this, b);
};
$d.prototype.ob = !0;
$d.prototype.pb = function(a, b) {
  return Hc.e(this, b);
};
S.prototype.ob = !0;
S.prototype.pb = function(a, b) {
  return Wc(this, b);
};
Tb.prototype.ob = !0;
Tb.prototype.pb = function(a, b) {
  return Sb(this, b);
};
function Ue(a) {
  a *= Math.random.G ? Math.random.G() : Math.random.call(null);
  return Math.floor.i ? Math.floor.i(a) : Math.floor.call(null, a);
}
function Ve(a) {
  this.nb = a;
  this.B = 0;
  this.o = 2153775104;
}
Ve.prototype.I = function() {
  for (var a = yd.p(lc([this], 0)), b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
};
Ve.prototype.D = function(a, b) {
  return B(b, [x('#uuid "'), x(this.nb), x('"')].join(""));
};
Ve.prototype.F = function(a, b) {
  return b instanceof Ve && this.nb === b.nb;
};
Ve.prototype.toString = function() {
  return this.nb;
};
var We = new S(null, "y", "y", -1757859776), Xe = new S(null, "movement", "movement", 1777030977), sa = new S(null, "meta", "meta", 1499536964), Ye = new S(null, "animation", "animation", -1248293244), Ze = new S(null, "stage", "stage", 1843544772), $e = new S(null, "color", "color", 1011675173), af = new S(null, "movement-speed", "movement-speed", -1779674971), ta = new S(null, "dup", "dup", 556298533), bf = new S(null, "dead", "dead", -1946604091), cf = new S(null, "standing", "standing", -1248340762), 
df = new S(null, "last-attack-frame", "last-attack-frame", 658442790), vd = new S(null, "validator", "validator", -1966190681), ef = new S(null, "max-hp", "max-hp", -1065196696), $ = new S(null, "name", "name", 1843675177), ff = new S(null, "neutral", "neutral", -1941956087), gf = new S(null, "tile-width", "tile-width", -1131996343), hf = new S(null, "alive", "alive", 1424929930), jf = new S(null, "renderable", "renderable", -1247325782), kf = new S(null, "background", "background", -863952629), 
lf = new S(null, "facing", "facing", -854439413), mf = new S(null, "entities", "entities", 1940967403), nf = new S(null, "attacker", "attacker", 48869964), qa = new S(null, "flush-on-newline", "flush-on-newline", -151457939), of = new S(null, "angle", "angle", 1622094254), pf = new S(null, "animation-seq", "animation-seq", 1939833135), qf = new S(null, "renderer", "renderer", 336841071), rf = new S(null, "size", "size", 1098693007), sf = new S(null, "sprite", "sprite", 172516848), ra = new S(null, 
"readably", "readably", 1129599760), tf = new S(null, "damage", "damage", 970520018), ua = new S(null, "print-length", "print-length", 1931866356), uf = new S(null, "id", "id", -1388402092), vf = new S(null, "hp-color", "hp-color", -2010496268), wf = new S(null, "current", "current", -1088038603), xf = new S(null, "graphics", "graphics", -2079995979), yf = new S(null, "identifier", "identifier", -805503498), zf = new S(null, "right", "right", -452581833), Af = new S(null, "position", "position", 
-2011731912), Bf = new S(null, "point", "point", 1813198264), Cf = new S(null, "moving", "moving", 1760797240), Df = new S(null, "attack-range", "attack-range", 519031033), Ef = new S(null, "x", "x", 2099068185), Ff = new S(null, "anchor", "anchor", 1549638489), Gf = new S(null, "hp", "hp", -1541237831), Hf = new S(null, "target", "target", 253001721), Kf = new S(null, "frame-count", "frame-count", 1616946810), Lf = new S(null, "attack-speed", "attack-speed", -393485413), Mf = new S(null, "velocity", 
"velocity", -581524355), Nf = new S(null, "health-bar", "health-bar", -570979971), Of = new S(null, "attackable", "attackable", 2099301245), Pf = new S(null, "tile-height", "tile-height", -905667651), Qf = new S(null, "sprite-list", "sprite-list", -1086684897), Rf = new S(null, "left", "left", -399115937), Sf = new S(null, "attacking", "attacking", 492336639);
function Tf(a, b, c, d, e) {
  this.name = a;
  this.Wa = b;
  this.n = c;
  this.k = d;
  this.m = e;
  this.o = 2229667594;
  this.B = 8192;
}
g = Tf.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "point":
      return this.Wa;
    case "name":
      return this.name;
    default:
      return P.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Position{", ", ", "}", c, V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Bf, this.Wa], null)], null), this.k));
};
g.K = function() {
  return this.n;
};
g.O = function() {
  return 2 + N(this.k);
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && ge(this, b) : b) ? !0 : !1;
};
g.$ = function(a, b) {
  return Ec(new Ke(null, new s(null, 2, [$, null, Bf, null], null), null), b) ? Q.e(tc(Fd.e(le, this), this.n), b) : new Tf(this.name, this.Wa, this.n, qd(Q.e(this.k, b)), null);
};
g.W = function(a, b, c) {
  return u(U.e ? U.e($, b) : U.call(null, $, b)) ? new Tf(c, this.Wa, this.n, this.k, null) : u(U.e ? U.e(Bf, b) : U.call(null, Bf, b)) ? new Tf(this.name, c, this.n, this.k, null) : new Tf(this.name, this.Wa, this.n, qc.f(this.k, b, c), null);
};
g.M = function() {
  return D(V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Bf, this.Wa], null)], null), this.k));
};
g.N = function(a, b) {
  return new Tf(this.name, this.Wa, b, this.k, this.m);
};
g.L = function(a, b) {
  return xc(b) ? Pa(this, z.e(b, 0), z.e(b, 1)) : Ic.f(Fa, this, b);
};
function Uf(a) {
  return new Tf(Af, a, null, null, null);
}
function Vf(a, b, c, d, e, f, h) {
  this.name = a;
  this.fa = b;
  this.anchor = c;
  this.size = d;
  this.n = e;
  this.k = f;
  this.m = h;
  this.o = 2229667594;
  this.B = 8192;
}
g = Vf.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "size":
      return this.size;
    case "anchor":
      return this.anchor;
    case "sprite":
      return this.fa;
    case "name":
      return this.name;
    default:
      return P.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Renderable{", ", ", "}", c, V.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [sf, this.fa], null), new W(null, 2, 5, X, [Ff, this.anchor], null), new W(null, 2, 5, X, [rf, this.size], null)], null), this.k));
};
g.K = function() {
  return this.n;
};
g.O = function() {
  return 4 + N(this.k);
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && ge(this, b) : b) ? !0 : !1;
};
g.$ = function(a, b) {
  return Ec(new Ke(null, new s(null, 4, [$, null, rf, null, sf, null, Ff, null], null), null), b) ? Q.e(tc(Fd.e(le, this), this.n), b) : new Vf(this.name, this.fa, this.anchor, this.size, this.n, qd(Q.e(this.k, b)), null);
};
g.W = function(a, b, c) {
  return u(U.e ? U.e($, b) : U.call(null, $, b)) ? new Vf(c, this.fa, this.anchor, this.size, this.n, this.k, null) : u(U.e ? U.e(sf, b) : U.call(null, sf, b)) ? new Vf(this.name, c, this.anchor, this.size, this.n, this.k, null) : u(U.e ? U.e(Ff, b) : U.call(null, Ff, b)) ? new Vf(this.name, this.fa, c, this.size, this.n, this.k, null) : u(U.e ? U.e(rf, b) : U.call(null, rf, b)) ? new Vf(this.name, this.fa, this.anchor, c, this.n, this.k, null) : new Vf(this.name, this.fa, this.anchor, this.size, 
  this.n, qc.f(this.k, b, c), null);
};
g.M = function() {
  return D(V.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [sf, this.fa], null), new W(null, 2, 5, X, [Ff, this.anchor], null), new W(null, 2, 5, X, [rf, this.size], null)], null), this.k));
};
g.N = function(a, b) {
  return new Vf(this.name, this.fa, this.anchor, this.size, b, this.k, this.m);
};
g.L = function(a, b) {
  return xc(b) ? Pa(this, z.e(b, 0), z.e(b, 1)) : Ic.f(Fa, this, b);
};
function Wf(a, b, c) {
  return new Vf(jf, a, b, c, null, null, null);
}
function Xf(a, b, c, d, e) {
  this.name = a;
  this.fa = b;
  this.n = c;
  this.k = d;
  this.m = e;
  this.o = 2229667594;
  this.B = 8192;
}
g = Xf.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "sprite":
      return this.fa;
    case "name":
      return this.name;
    default:
      return P.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Background{", ", ", "}", c, V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [sf, this.fa], null)], null), this.k));
};
g.K = function() {
  return this.n;
};
g.O = function() {
  return 2 + N(this.k);
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && ge(this, b) : b) ? !0 : !1;
};
g.$ = function(a, b) {
  return Ec(new Ke(null, new s(null, 2, [$, null, sf, null], null), null), b) ? Q.e(tc(Fd.e(le, this), this.n), b) : new Xf(this.name, this.fa, this.n, qd(Q.e(this.k, b)), null);
};
g.W = function(a, b, c) {
  return u(U.e ? U.e($, b) : U.call(null, $, b)) ? new Xf(c, this.fa, this.n, this.k, null) : u(U.e ? U.e(sf, b) : U.call(null, sf, b)) ? new Xf(this.name, c, this.n, this.k, null) : new Xf(this.name, this.fa, this.n, qc.f(this.k, b, c), null);
};
g.M = function() {
  return D(V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [sf, this.fa], null)], null), this.k));
};
g.N = function(a, b) {
  return new Xf(this.name, this.fa, b, this.k, this.m);
};
g.L = function(a, b) {
  return xc(b) ? Pa(this, z.e(b, 0), z.e(b, 1)) : Ic.f(Fa, this, b);
};
function Yf(a, b, c, d, e, f, h, k, l) {
  this.name = a;
  this.qa = b;
  this.ra = c;
  this.sa = d;
  this.target = e;
  this.va = f;
  this.n = h;
  this.k = k;
  this.m = l;
  this.o = 2229667594;
  this.B = 8192;
}
g = Yf.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "last-attack-frame":
      return this.va;
    case "target":
      return this.target;
    case "damage":
      return this.sa;
    case "attack-speed":
      return this.ra;
    case "attack-range":
      return this.qa;
    case "name":
      return this.name;
    default:
      return P.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Attacker{", ", ", "}", c, V.e(new W(null, 6, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Df, this.qa], null), new W(null, 2, 5, X, [Lf, this.ra], null), new W(null, 2, 5, X, [tf, this.sa], null), new W(null, 2, 5, X, [Hf, this.target], null), new W(null, 2, 5, X, [df, this.va], null)], null), this.k));
};
g.K = function() {
  return this.n;
};
g.O = function() {
  return 6 + N(this.k);
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && ge(this, b) : b) ? !0 : !1;
};
g.$ = function(a, b) {
  return Ec(new Ke(null, new s(null, 6, [df, null, $, null, tf, null, Df, null, Hf, null, Lf, null], null), null), b) ? Q.e(tc(Fd.e(le, this), this.n), b) : new Yf(this.name, this.qa, this.ra, this.sa, this.target, this.va, this.n, qd(Q.e(this.k, b)), null);
};
g.W = function(a, b, c) {
  return u(U.e ? U.e($, b) : U.call(null, $, b)) ? new Yf(c, this.qa, this.ra, this.sa, this.target, this.va, this.n, this.k, null) : u(U.e ? U.e(Df, b) : U.call(null, Df, b)) ? new Yf(this.name, c, this.ra, this.sa, this.target, this.va, this.n, this.k, null) : u(U.e ? U.e(Lf, b) : U.call(null, Lf, b)) ? new Yf(this.name, this.qa, c, this.sa, this.target, this.va, this.n, this.k, null) : u(U.e ? U.e(tf, b) : U.call(null, tf, b)) ? new Yf(this.name, this.qa, this.ra, c, this.target, this.va, this.n, 
  this.k, null) : u(U.e ? U.e(Hf, b) : U.call(null, Hf, b)) ? new Yf(this.name, this.qa, this.ra, this.sa, c, this.va, this.n, this.k, null) : u(U.e ? U.e(df, b) : U.call(null, df, b)) ? new Yf(this.name, this.qa, this.ra, this.sa, this.target, c, this.n, this.k, null) : new Yf(this.name, this.qa, this.ra, this.sa, this.target, this.va, this.n, qc.f(this.k, b, c), null);
};
g.M = function() {
  return D(V.e(new W(null, 6, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Df, this.qa], null), new W(null, 2, 5, X, [Lf, this.ra], null), new W(null, 2, 5, X, [tf, this.sa], null), new W(null, 2, 5, X, [Hf, this.target], null), new W(null, 2, 5, X, [df, this.va], null)], null), this.k));
};
g.N = function(a, b) {
  return new Yf(this.name, this.qa, this.ra, this.sa, this.target, this.va, b, this.k, this.m);
};
g.L = function(a, b) {
  return xc(b) ? Pa(this, z.e(b, 0), z.e(b, 1)) : Ic.f(Fa, this, b);
};
function Zf(a, b, c, d, e) {
  return new Yf(nf, a, b, c, d, e, null, null, null);
}
function $f(a, b, c, d, e) {
  this.name = a;
  this.Va = b;
  this.n = c;
  this.k = d;
  this.m = e;
  this.o = 2229667594;
  this.B = 8192;
}
g = $f.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "hp":
      return this.Va;
    case "name":
      return this.name;
    default:
      return P.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Attackable{", ", ", "}", c, V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Gf, this.Va], null)], null), this.k));
};
g.K = function() {
  return this.n;
};
g.O = function() {
  return 2 + N(this.k);
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && ge(this, b) : b) ? !0 : !1;
};
g.$ = function(a, b) {
  return Ec(new Ke(null, new s(null, 2, [$, null, Gf, null], null), null), b) ? Q.e(tc(Fd.e(le, this), this.n), b) : new $f(this.name, this.Va, this.n, qd(Q.e(this.k, b)), null);
};
g.W = function(a, b, c) {
  return u(U.e ? U.e($, b) : U.call(null, $, b)) ? new $f(c, this.Va, this.n, this.k, null) : u(U.e ? U.e(Gf, b) : U.call(null, Gf, b)) ? new $f(this.name, c, this.n, this.k, null) : new $f(this.name, this.Va, this.n, qc.f(this.k, b, c), null);
};
g.M = function() {
  return D(V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Gf, this.Va], null)], null), this.k));
};
g.N = function(a, b) {
  return new $f(this.name, this.Va, b, this.k, this.m);
};
g.L = function(a, b) {
  return xc(b) ? Pa(this, z.e(b, 0), z.e(b, 1)) : Ic.f(Fa, this, b);
};
function ag(a, b, c, d, e) {
  this.name = a;
  this.Xa = b;
  this.n = c;
  this.k = d;
  this.m = e;
  this.o = 2229667594;
  this.B = 8192;
}
g = ag.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "velocity":
      return this.Xa;
    case "name":
      return this.name;
    default:
      return P.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Movement{", ", ", "}", c, V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Mf, this.Xa], null)], null), this.k));
};
g.K = function() {
  return this.n;
};
g.O = function() {
  return 2 + N(this.k);
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && ge(this, b) : b) ? !0 : !1;
};
g.$ = function(a, b) {
  return Ec(new Ke(null, new s(null, 2, [$, null, Mf, null], null), null), b) ? Q.e(tc(Fd.e(le, this), this.n), b) : new ag(this.name, this.Xa, this.n, qd(Q.e(this.k, b)), null);
};
g.W = function(a, b, c) {
  return u(U.e ? U.e($, b) : U.call(null, $, b)) ? new ag(c, this.Xa, this.n, this.k, null) : u(U.e ? U.e(Mf, b) : U.call(null, Mf, b)) ? new ag(this.name, c, this.n, this.k, null) : new ag(this.name, this.Xa, this.n, qc.f(this.k, b, c), null);
};
g.M = function() {
  return D(V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Mf, this.Xa], null)], null), this.k));
};
g.N = function(a, b) {
  return new ag(this.name, this.Xa, b, this.k, this.m);
};
g.L = function(a, b) {
  return xc(b) ? Pa(this, z.e(b, 0), z.e(b, 1)) : Ic.f(Fa, this, b);
};
function bg(a) {
  return new ag(Xe, a, null, null, null);
}
function cg(a, b, c, d, e) {
  this.name = a;
  this.angle = b;
  this.n = c;
  this.k = d;
  this.m = e;
  this.o = 2229667594;
  this.B = 8192;
}
g = cg.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "angle":
      return this.angle;
    case "name":
      return this.name;
    default:
      return P.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Facing{", ", ", "}", c, V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [of, this.angle], null)], null), this.k));
};
g.K = function() {
  return this.n;
};
g.O = function() {
  return 2 + N(this.k);
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && ge(this, b) : b) ? !0 : !1;
};
g.$ = function(a, b) {
  return Ec(new Ke(null, new s(null, 2, [$, null, of, null], null), null), b) ? Q.e(tc(Fd.e(le, this), this.n), b) : new cg(this.name, this.angle, this.n, qd(Q.e(this.k, b)), null);
};
g.W = function(a, b, c) {
  return u(U.e ? U.e($, b) : U.call(null, $, b)) ? new cg(c, this.angle, this.n, this.k, null) : u(U.e ? U.e(of, b) : U.call(null, of, b)) ? new cg(this.name, c, this.n, this.k, null) : new cg(this.name, this.angle, this.n, qc.f(this.k, b, c), null);
};
g.M = function() {
  return D(V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [of, this.angle], null)], null), this.k));
};
g.N = function(a, b) {
  return new cg(this.name, this.angle, b, this.k, this.m);
};
g.L = function(a, b) {
  return xc(b) ? Pa(this, z.e(b, 0), z.e(b, 1)) : Ic.f(Fa, this, b);
};
function dg(a, b, c, d, e, f, h) {
  this.name = a;
  this.Ra = b;
  this.ya = c;
  this.current = d;
  this.n = e;
  this.k = f;
  this.m = h;
  this.o = 2229667594;
  this.B = 8192;
}
g = dg.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "current":
      return this.current;
    case "animation-seq":
      return this.ya;
    case "sprite-list":
      return this.Ra;
    case "name":
      return this.name;
    default:
      return P.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Animation{", ", ", "}", c, V.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Qf, this.Ra], null), new W(null, 2, 5, X, [pf, this.ya], null), new W(null, 2, 5, X, [wf, this.current], null)], null), this.k));
};
g.K = function() {
  return this.n;
};
g.O = function() {
  return 4 + N(this.k);
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && ge(this, b) : b) ? !0 : !1;
};
g.$ = function(a, b) {
  return Ec(new Ke(null, new s(null, 4, [$, null, pf, null, wf, null, Qf, null], null), null), b) ? Q.e(tc(Fd.e(le, this), this.n), b) : new dg(this.name, this.Ra, this.ya, this.current, this.n, qd(Q.e(this.k, b)), null);
};
g.W = function(a, b, c) {
  return u(U.e ? U.e($, b) : U.call(null, $, b)) ? new dg(c, this.Ra, this.ya, this.current, this.n, this.k, null) : u(U.e ? U.e(Qf, b) : U.call(null, Qf, b)) ? new dg(this.name, c, this.ya, this.current, this.n, this.k, null) : u(U.e ? U.e(pf, b) : U.call(null, pf, b)) ? new dg(this.name, this.Ra, c, this.current, this.n, this.k, null) : u(U.e ? U.e(wf, b) : U.call(null, wf, b)) ? new dg(this.name, this.Ra, this.ya, c, this.n, this.k, null) : new dg(this.name, this.Ra, this.ya, this.current, this.n, 
  qc.f(this.k, b, c), null);
};
g.M = function() {
  return D(V.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Qf, this.Ra], null), new W(null, 2, 5, X, [pf, this.ya], null), new W(null, 2, 5, X, [wf, this.current], null)], null), this.k));
};
g.N = function(a, b) {
  return new dg(this.name, this.Ra, this.ya, this.current, b, this.k, this.m);
};
g.L = function(a, b) {
  return xc(b) ? Pa(this, z.e(b, 0), z.e(b, 1)) : Ic.f(Fa, this, b);
};
function eg(a, b, c, d, e, f, h) {
  this.name = a;
  this.Na = b;
  this.color = c;
  this.Oa = d;
  this.n = e;
  this.k = f;
  this.m = h;
  this.o = 2229667594;
  this.B = 8192;
}
g = eg.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "max-hp":
      return this.Oa;
    case "color":
      return this.color;
    case "graphics":
      return this.Na;
    case "name":
      return this.name;
    default:
      return P.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Health-bar{", ", ", "}", c, V.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [xf, this.Na], null), new W(null, 2, 5, X, [$e, this.color], null), new W(null, 2, 5, X, [ef, this.Oa], null)], null), this.k));
};
g.K = function() {
  return this.n;
};
g.O = function() {
  return 4 + N(this.k);
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && ge(this, b) : b) ? !0 : !1;
};
g.$ = function(a, b) {
  return Ec(new Ke(null, new s(null, 4, [$e, null, ef, null, $, null, xf, null], null), null), b) ? Q.e(tc(Fd.e(le, this), this.n), b) : new eg(this.name, this.Na, this.color, this.Oa, this.n, qd(Q.e(this.k, b)), null);
};
g.W = function(a, b, c) {
  return u(U.e ? U.e($, b) : U.call(null, $, b)) ? new eg(c, this.Na, this.color, this.Oa, this.n, this.k, null) : u(U.e ? U.e(xf, b) : U.call(null, xf, b)) ? new eg(this.name, c, this.color, this.Oa, this.n, this.k, null) : u(U.e ? U.e($e, b) : U.call(null, $e, b)) ? new eg(this.name, this.Na, c, this.Oa, this.n, this.k, null) : u(U.e ? U.e(ef, b) : U.call(null, ef, b)) ? new eg(this.name, this.Na, this.color, c, this.n, this.k, null) : new eg(this.name, this.Na, this.color, this.Oa, this.n, qc.f(this.k, 
  b, c), null);
};
g.M = function() {
  return D(V.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [xf, this.Na], null), new W(null, 2, 5, X, [$e, this.color], null), new W(null, 2, 5, X, [ef, this.Oa], null)], null), this.k));
};
g.N = function(a, b) {
  return new eg(this.name, this.Na, this.color, this.Oa, b, this.k, this.m);
};
g.L = function(a, b) {
  return xc(b) ? Pa(this, z.e(b, 0), z.e(b, 1)) : Ic.f(Fa, this, b);
};
function fg(a, b, c) {
  return new eg(Nf, a, b, c, null, null, null);
}
function gg(a, b, c, d) {
  this.name = a;
  this.n = b;
  this.k = c;
  this.m = d;
  this.o = 2229667594;
  this.B = 8192;
}
g = gg.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "name":
      return this.name;
    default:
      return P.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Attacking{", ", ", "}", c, V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.k));
};
g.K = function() {
  return this.n;
};
g.O = function() {
  return 1 + N(this.k);
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && ge(this, b) : b) ? !0 : !1;
};
g.$ = function(a, b) {
  return Ec(new Ke(null, new s(null, 1, [$, null], null), null), b) ? Q.e(tc(Fd.e(le, this), this.n), b) : new gg(this.name, this.n, qd(Q.e(this.k, b)), null);
};
g.W = function(a, b, c) {
  return u(U.e ? U.e($, b) : U.call(null, $, b)) ? new gg(c, this.n, this.k, null) : new gg(this.name, this.n, qc.f(this.k, b, c), null);
};
g.M = function() {
  return D(V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.k));
};
g.N = function(a, b) {
  return new gg(this.name, b, this.k, this.m);
};
g.L = function(a, b) {
  return xc(b) ? Pa(this, z.e(b, 0), z.e(b, 1)) : Ic.f(Fa, this, b);
};
function hg(a, b, c, d) {
  this.name = a;
  this.n = b;
  this.k = c;
  this.m = d;
  this.o = 2229667594;
  this.B = 8192;
}
g = hg.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "name":
      return this.name;
    default:
      return P.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Alive{", ", ", "}", c, V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.k));
};
g.K = function() {
  return this.n;
};
g.O = function() {
  return 1 + N(this.k);
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && ge(this, b) : b) ? !0 : !1;
};
g.$ = function(a, b) {
  return Ec(new Ke(null, new s(null, 1, [$, null], null), null), b) ? Q.e(tc(Fd.e(le, this), this.n), b) : new hg(this.name, this.n, qd(Q.e(this.k, b)), null);
};
g.W = function(a, b, c) {
  return u(U.e ? U.e($, b) : U.call(null, $, b)) ? new hg(c, this.n, this.k, null) : new hg(this.name, this.n, qc.f(this.k, b, c), null);
};
g.M = function() {
  return D(V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.k));
};
g.N = function(a, b) {
  return new hg(this.name, b, this.k, this.m);
};
g.L = function(a, b) {
  return xc(b) ? Pa(this, z.e(b, 0), z.e(b, 1)) : Ic.f(Fa, this, b);
};
function ig() {
  return new hg(hf, null, null, null);
}
function jg(a, b, c, d) {
  this.name = a;
  this.n = b;
  this.k = c;
  this.m = d;
  this.o = 2229667594;
  this.B = 8192;
}
g = jg.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "name":
      return this.name;
    default:
      return P.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Dead{", ", ", "}", c, V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.k));
};
g.K = function() {
  return this.n;
};
g.O = function() {
  return 1 + N(this.k);
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && ge(this, b) : b) ? !0 : !1;
};
g.$ = function(a, b) {
  return Ec(new Ke(null, new s(null, 1, [$, null], null), null), b) ? Q.e(tc(Fd.e(le, this), this.n), b) : new jg(this.name, this.n, qd(Q.e(this.k, b)), null);
};
g.W = function(a, b, c) {
  return u(U.e ? U.e($, b) : U.call(null, $, b)) ? new jg(c, this.n, this.k, null) : new jg(this.name, this.n, qc.f(this.k, b, c), null);
};
g.M = function() {
  return D(V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.k));
};
g.N = function(a, b) {
  return new jg(this.name, b, this.k, this.m);
};
g.L = function(a, b) {
  return xc(b) ? Pa(this, z.e(b, 0), z.e(b, 1)) : Ic.f(Fa, this, b);
};
function kg(a, b, c, d) {
  this.name = a;
  this.n = b;
  this.k = c;
  this.m = d;
  this.o = 2229667594;
  this.B = 8192;
}
g = kg.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "name":
      return this.name;
    default:
      return P.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Moving{", ", ", "}", c, V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.k));
};
g.K = function() {
  return this.n;
};
g.O = function() {
  return 1 + N(this.k);
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && ge(this, b) : b) ? !0 : !1;
};
g.$ = function(a, b) {
  return Ec(new Ke(null, new s(null, 1, [$, null], null), null), b) ? Q.e(tc(Fd.e(le, this), this.n), b) : new kg(this.name, this.n, qd(Q.e(this.k, b)), null);
};
g.W = function(a, b, c) {
  return u(U.e ? U.e($, b) : U.call(null, $, b)) ? new kg(c, this.n, this.k, null) : new kg(this.name, this.n, qc.f(this.k, b, c), null);
};
g.M = function() {
  return D(V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.k));
};
g.N = function(a, b) {
  return new kg(this.name, b, this.k, this.m);
};
g.L = function(a, b) {
  return xc(b) ? Pa(this, z.e(b, 0), z.e(b, 1)) : Ic.f(Fa, this, b);
};
function lg(a, b, c, d) {
  this.name = a;
  this.n = b;
  this.k = c;
  this.m = d;
  this.o = 2229667594;
  this.B = 8192;
}
g = lg.prototype;
g.J = function(a, b) {
  return A.f(this, b, null);
};
g.H = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "name":
      return this.name;
    default:
      return P.f(this.k, b, c);
  }
};
g.D = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Standing{", ", ", "}", c, V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.k));
};
g.K = function() {
  return this.n;
};
g.O = function() {
  return 1 + N(this.k);
};
g.I = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Pc(this);
};
g.F = function(a, b) {
  return u(u(b) ? this.constructor === b.constructor && ge(this, b) : b) ? !0 : !1;
};
g.$ = function(a, b) {
  return Ec(new Ke(null, new s(null, 1, [$, null], null), null), b) ? Q.e(tc(Fd.e(le, this), this.n), b) : new lg(this.name, this.n, qd(Q.e(this.k, b)), null);
};
g.W = function(a, b, c) {
  return u(U.e ? U.e($, b) : U.call(null, $, b)) ? new lg(c, this.n, this.k, null) : new lg(this.name, this.n, qc.f(this.k, b, c), null);
};
g.M = function() {
  return D(V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.k));
};
g.N = function(a, b) {
  return new lg(this.name, b, this.k, this.m);
};
g.L = function(a, b) {
  return xc(b) ? Pa(this, z.e(b, 0), z.e(b, 1)) : Ic.f(Fa, this, b);
};
var mg = function() {
  function a(a, b) {
    for (var c = new ha, h = D(b);;) {
      if (h) {
        c.append("" + x(I(h))), h = L(h), null != h && c.append(a);
      } else {
        return c.toString();
      }
    }
  }
  function b(a) {
    var b = new ha;
    for (a = D(a);;) {
      if (a) {
        b = b.append("" + x(I(a))), a = L(a);
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
function ng() {
  var a = og();
  return "" + x(a.nb);
}
function og() {
  function a() {
    return Ue(16).toString(16);
  }
  return new Ve(mg.i(V.p(Dd.e(8, a), "-", lc([Dd.e(4, a), "-4", Dd.e(3, a), "-", (8 | 3 & Ue(15)).toString(16), Dd.e(3, a), "-", Dd.e(12, a)], 0))));
}
var pg = [x("^"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("-"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("-"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("-"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("-"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), 
x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("$")].join("");
if (!(pg instanceof RegExp)) {
  var qg;
  var rg = /^(?:\(\?([idmsux]*)\))?(.*)/;
  if ("string" === typeof pg) {
    var sg = rg.exec(pg);
    qg = null == sg ? null : 1 === N(sg) ? I(sg) : ub(Ic.f(tb, sb(mc), sg));
  } else {
    throw new TypeError("re-find must match against a string.");
  }
  O.f(qg, 0, null);
  O.f(qg, 1, null);
  O.f(qg, 2, null);
}
;function tg(a, b) {
  return Ec(a, b);
}
function ug(a, b) {
  return qc.f(a, $.i(b), b);
}
function vg(a) {
  return Ic.f(function(a, c) {
    return Q.e(a, $.i(c));
  }, a, new W(null, 2, 5, X, [new kg(Cf, null, null, null), new gg(Sf, null, null, null)], null));
}
function wg(a, b) {
  return Ic.f(function(a, b) {
    return qc.f(a, $.i(b), b);
  }, a, b);
}
var xg = function() {
  function a(a) {
    return new s(null, 2, [$, yf, uf, a], null);
  }
  function b() {
    return c.i(ng());
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
  c.G = b;
  c.i = a;
  return c;
}(), yg = function() {
  function a(a) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new F(e, 0);
    }
    return b.call(this, d);
  }
  function b(a) {
    a = Ic.f(function(a, b) {
      return qc.f(a, $.i(b), b);
    }, le, a);
    return Ec(a, yf) ? a : ug(a, xg.G());
  }
  a.C = 0;
  a.s = function(a) {
    a = D(a);
    return b(a);
  };
  a.p = b;
  return a;
}(), zg = function() {
  function a(a, d) {
    var e = null;
    if (1 < arguments.length) {
      for (var e = 0, f = Array(arguments.length - 1);e < f.length;) {
        f[e] = arguments[e + 1], ++e;
      }
      e = new F(f, 0);
    }
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = Je(mf.i(a));
    return Ed.e(function() {
      return function(a) {
        return rd(sd.e(tg, a), b);
      };
    }(e), e);
  }
  a.C = 1;
  a.s = function(a) {
    var d = I(a);
    a = K(a);
    return b(d, a);
  };
  a.p = b;
  return a;
}();
function Ag(a, b) {
  var c = function() {
    var b = mf.i(a);
    return u(b) ? b : le;
  }();
  return qc.f(a, mf, Ic.f(function() {
    return function(a, b) {
      return qc.f(a, Gd.e(b, new W(null, 2, 5, X, [yf, uf], null)), b);
    };
  }(c), c, b));
}
function Bg(a) {
  return Gd.e(a, new W(null, 2, 5, X, [Af, Bf], null));
}
function Cg(a) {
  return Gd.e(a, new W(null, 2, 5, X, [nf, Hf], null));
}
function Dg(a) {
  return Gd.e(a, new W(null, 2, 5, X, [Xe, Mf], null));
}
function Eg(a) {
  return Gd.e(a, new W(null, 2, 5, X, [jf, Ff], null));
}
function Fg(a) {
  return Gd.e(a, new W(null, 2, 5, X, [jf, rf], null));
}
function Gg(a) {
  return Gd.e(a, new W(null, 2, 5, X, [nf, Df], null));
}
function Hg(a) {
  return Gd.e(a, new W(null, 2, 5, X, [nf, Lf], null));
}
function Jg(a) {
  return Gd.e(a, new W(null, 2, 5, X, [nf, tf], null));
}
function Kg(a) {
  return Gd.e(a, new W(null, 2, 5, X, [Of, Gf], null));
}
function Lg(a) {
  return Gd.e(a, new W(null, 2, 5, X, [nf, df], null));
}
function Mg(a, b) {
  return Ed.e(function(b) {
    return Vb.e(Cg(b), a);
  }, b);
}
function Ng(a) {
  return Gd.e(a, new W(null, 2, 5, X, [jf, sf], null)).getBounds();
}
;function Og(a, b, c) {
  var d = Ng(a), e = Ng(b), f = Bg(a);
  a = O.f(f, 0, null);
  var f = O.f(f, 1, null), h = Bg(b);
  b = O.f(h, 0, null);
  var h = O.f(h, 1, null), k = d.height / 2, d = d.width / 2, l = e.height / 2, e = e.width / 2;
  return!(a - d - c > b + e || b - e > a + d + c || f - k - c > h + l || h - l > f + k + c);
}
function Pg(a, b) {
  var c = Bg(a), d = O.f(c, 0, null), c = O.f(c, 1, null), e = Bg(b), f = O.f(e, 0, null), e = O.f(e, 1, null);
  return Math.sqrt(Math.pow(Math.abs(d - f), 2) + Math.pow(Math.abs(c - e), 2));
}
function Qg(a, b) {
  return R.f(Ne, sd.e(Pg, a), b);
}
function Rg(a, b, c) {
  return Ag(a, function() {
    return function e(a) {
      return new Zc(null, function() {
        for (;;) {
          var b = D(a);
          if (b) {
            if (yc(b)) {
              var k = zb(b), l = N(k), m = cd(l);
              return function() {
                for (var a = 0;;) {
                  if (a < l) {
                    var b = z.e(k, a), e = m, f = Dg(b), h = Gg(b), n = Hg(b), G = Jg(b), J = Lg(b), T = Qg(b, c), ea = !Og(b, T, h), b = wg(vg(b), new W(null, 3, 5, X, [bg(f), u(ea) ? new kg(Cf, null, null, null) : new gg(Sf, null, null, null), Zf(h, n, G, T, J)], null));
                    e.add(b);
                    a += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? fd(m.T(), e(Ab(b))) : fd(m.T(), null);
            }
            var n = I(b);
            return M(function() {
              var a = Dg(n), b = Gg(n), e = Hg(n), f = Jg(n), h = Lg(n), k = Qg(n, c), l = !Og(n, k, b);
              return wg(vg(n), new W(null, 3, 5, X, [bg(a), u(l) ? new kg(Cf, null, null, null) : new gg(Sf, null, null, null), Zf(b, e, f, k, h)], null));
            }(), e(K(b)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
;var Sg;
a: {
  var Tg = aa.navigator;
  if (Tg) {
    var Ug = Tg.userAgent;
    if (Ug) {
      Sg = Ug;
      break a;
    }
  }
  Sg = "";
}
function Vg(a) {
  return-1 != Sg.indexOf(a);
}
;var Wg = Vg("Opera") || Vg("OPR"), Xg = Vg("Trident") || Vg("MSIE"), Yg = Vg("Gecko") && -1 == Sg.toLowerCase().indexOf("webkit") && !(Vg("Trident") || Vg("MSIE")), Zg = -1 != Sg.toLowerCase().indexOf("webkit"), $g = function() {
  var a = "", b;
  if (Wg && aa.opera) {
    return a = aa.opera.version, "function" == q(a) ? a() : a;
  }
  Yg ? b = /rv\:([^\);]+)(\)|;)/ : Xg ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Zg && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(Sg)) ? a[1] : "");
  return Xg && (b = (b = aa.document) ? b.documentMode : void 0, b > parseFloat(a)) ? String(b) : a;
}(), ah = {};
function bh(a) {
  var b;
  if (!(b = ah[a])) {
    b = 0;
    for (var c = String($g).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(h) || ["", "", ""], p = m.exec(k) || ["", "", ""];
        if (0 == n[0].length && 0 == p[0].length) {
          break;
        }
        b = fa(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == p[1].length ? 0 : parseInt(p[1], 10)) || fa(0 == n[2].length, 0 == p[2].length) || fa(n[2], p[2]);
      } while (0 == b);
    }
    b = ah[a] = 0 <= b;
  }
  return b;
}
;Xg && bh("9");
!Zg || bh("528");
Yg && bh("1.9b") || Xg && bh("8") || Wg && bh("9.5") || Zg && bh("528");
Yg && !bh("8") || Xg && bh("9");
function ch(a, b) {
  for (var c = a, d = b;;) {
    if (D(d)) {
      var e = I(d), e = Jg(e), c = c - e, d = K(d)
    } else {
      return c;
    }
  }
}
function dh(a, b, c) {
  var d = Kf.i(a), e = Ed.e(function(a) {
    return function(b) {
      return Vb.e(a, Lg(b));
    };
  }(d), b);
  return Ag(a, function() {
    return function(a, b) {
      return function l(c) {
        return new Zc(null, function(a, b) {
          return function() {
            for (;;) {
              var a = D(c);
              if (a) {
                if (yc(a)) {
                  var d = zb(a), e = N(d), f = cd(e);
                  return function() {
                    for (var a = 0;;) {
                      if (a < e) {
                        var c = z.e(d, a), h = f, l = Mg(c, b), m = Kg(c), l = ch(m, l), c = wg(Q.e(c, $.i(ig())), new W(null, 2, 5, X, [new $f(Of, l, null, null, null), 0 < l ? ig() : new jg(bf, null, null, null)], null));
                        h.add(c);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? fd(f.T(), l(Ab(a))) : fd(f.T(), null);
                }
                var h = I(a);
                return M(function() {
                  var a = Mg(h, b), c = Kg(h), a = ch(c, a);
                  return wg(Q.e(h, $.i(ig())), new W(null, 2, 5, X, [new $f(Of, a, null, null, null), 0 < a ? ig() : new jg(bf, null, null, null)], null));
                }(), l(K(a)));
              }
              return null;
            }
          };
        }(a, b), null, null);
      };
    }(d, e)(c);
  }());
}
;function eh(a, b, c) {
  a = Lg(a);
  return c - a >= b ? c : a;
}
function fh(a, b) {
  return Ag(a, function() {
    return function d(b) {
      return new Zc(null, function() {
        for (;;) {
          var f = D(b);
          if (f) {
            if (yc(f)) {
              var h = zb(f), k = N(h), l = cd(k);
              return function() {
                for (var b = 0;;) {
                  if (b < k) {
                    var d = z.e(h, b), e = l, f = Cg(d), m = Kf.i(a);
                    Kg(f);
                    var C = Gg(d), E = Hg(d), G = Jg(d), m = eh(d, E, m), d = ug(d, Zf(C, E, G, f, m));
                    e.add(d);
                    b += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? fd(l.T(), d(Ab(f))) : fd(l.T(), null);
            }
            var m = I(f);
            return M(function() {
              var b = Cg(m), d = Kf.i(a);
              Kg(b);
              var e = Gg(m), f = Hg(m), h = Jg(m), d = eh(m, f, d);
              return ug(m, Zf(e, f, h, b, d));
            }(), d(K(f)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
;function gh(a, b, c) {
  a[b] = c;
  return a;
}
;var hh = new s(null, 6, [af, .3, Df, 30, tf, 5, Lf, 180, Pf, 1, gf, 1], null), ih = new s(null, 6, [af, .25, Df, 1, tf, 5, Lf, 180, Pf, 1, gf, 1], null), jh = new s(null, 4, [Gf, 2E3, vf, 16711680, Pf, 4, gf, 4], null), kh = new PIXI.Point(.5, .5);
function lh(a, b) {
  var c = PIXI.Sprite.fromFrame("barbarian-neutral-down.png"), d = PIXI.Sprite.fromFrame("barbarian-run-right-down.png"), e = PIXI.Sprite.fromFrame("barbarian-run-left-down.png"), d = new s(null, 3, [ff, c, zf, d, Rf, e], null), e = new W(null, 4, 5, X, [ff, Rf, ff, zf], null), f = af.i(ih), h = Df.i(ih), k = tf.i(ih), l = Lf.i(ih), m = Pf.i(ih), n = gf.i(ih);
  return yg.p(lc([Uf(new W(null, 2, 5, X, [a, b], null)), new lg(cf, null, null, null), bg(f), new dg(Ye, d, e, 0, null, null, null), Wf(c, kh, new W(null, 2, 5, X, [m, n], null)), Zf(h, l, k, null, 0)], 0));
}
function mh(a, b) {
  var c = PIXI.Sprite.fromFrame("archer-run-neutral-down.png"), d = PIXI.Sprite.fromFrame("archer-run-right-down.png"), e = PIXI.Sprite.fromFrame("archer-run-left-down.png"), d = new s(null, 3, [ff, c, zf, d, Rf, e], null), e = new W(null, 4, 5, X, [ff, Rf, ff, zf], null), f = af.i(hh), h = Df.i(hh), k = tf.i(hh), l = Lf.i(hh), m = Pf.i(hh), n = gf.i(hh);
  return yg.p(lc([Uf(new W(null, 2, 5, X, [a, b], null)), new lg(cf, null, null, null), bg(f), new dg(Ye, d, e, 0, null, null, null), Wf(c, kh, new W(null, 2, 5, X, [m, n], null)), Zf(h, l, k, null, 0)], 0));
}
function nh(a, b) {
  var c = PIXI.Sprite.fromImage("images/town-hall.png"), d = Gf.i(jh), e = vf.i(jh), f = Pf.i(jh), h = gf.i(jh);
  return yg.p(lc([Uf(new W(null, 2, 5, X, [a, b], null)), Wf(c, kh, new W(null, 2, 5, X, [f, h], null)), ig(), fg(new PIXI.Graphics, e, d), new $f(Of, d, null, null, null)], 0));
}
;var oh = wd.i ? wd.i(mc) : wd.call(null, mc);
function ph(a) {
  a = a.getLocalPosition(a.target);
  return zd.f(oh, nc, new s(null, 2, [Ef, a.x, We, a.y], null));
}
function qh(a) {
  var b = cc.i ? cc.i(oh) : cc.call(null, oh);
  xd.e ? xd.e(oh, mc) : xd.call(null, oh, mc);
  return D(b) ? Ag(a, function() {
    return function(a) {
      return function e(b) {
        return new Zc(null, function() {
          return function() {
            for (;;) {
              var a = D(b);
              if (a) {
                if (yc(a)) {
                  var c = zb(a), l = N(c), m = cd(l);
                  return function() {
                    for (var a = 0;;) {
                      if (a < l) {
                        var b = z.e(c, a), e = m, f;
                        f = Ef.i(b);
                        b = We.i(b);
                        f = Math.floor(639 * Math.random()) + 1 < f ? lh(f, b) : mh(f, b);
                        e.add(f);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? fd(m.T(), e(Ab(a))) : fd(m.T(), null);
                }
                var n = I(a);
                return M(function() {
                  var a = Ef.i(n), b = We.i(n);
                  return Math.floor(639 * Math.random()) + 1 < a ? lh(a, b) : mh(a, b);
                }(), e(K(a)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(b)(b);
  }()) : a;
}
;function rh(a, b) {
  return Ag(a, function() {
    return function d(a) {
      return new Zc(null, function() {
        for (;;) {
          var b = D(a);
          if (b) {
            if (yc(b)) {
              var h = zb(b), k = N(h), l = cd(k);
              return function() {
                for (var a = 0;;) {
                  if (a < k) {
                    var b = z.e(h, a), d = l, e = Gd.e(b, new W(null, 2, 5, X, [lf, of], null)), f = Dg(b), m = Bg(b), E = O.f(m, 0, null), m = O.f(m, 1, null), f = new W(null, 2, 5, X, [E + f * Math.cos(e), m + f * Math.sin(e)], null), e = O.f(f, 0, null), f = O.f(f, 1, null), b = ug(b, Uf(new W(null, 2, 5, X, [e, f], null)));
                    d.add(b);
                    a += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? fd(l.T(), d(Ab(b))) : fd(l.T(), null);
            }
            var m = I(b);
            return M(function() {
              var a = Gd.e(m, new W(null, 2, 5, X, [lf, of], null)), b = Dg(m), d = Bg(m), e = O.f(d, 0, null), d = O.f(d, 1, null), b = new W(null, 2, 5, X, [e + b * Math.cos(a), d + b * Math.sin(a)], null), a = O.f(b, 0, null), b = O.f(b, 1, null);
              return ug(m, Uf(new W(null, 2, 5, X, [a, b], null)));
            }(), d(K(b)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
;function sh(a, b) {
  var c = N(a);
  return Vb.e(b, c - 1) ? 0 : b + 1;
}
function th(a, b) {
  return Ag(a, function() {
    return function d(a) {
      return new Zc(null, function() {
        for (;;) {
          var b = D(a);
          if (b) {
            if (yc(b)) {
              var h = zb(b), k = N(h), l = cd(k);
              return function() {
                for (var a = 0;;) {
                  if (a < k) {
                    var b = z.e(h, a), d = l, e = Eg(b), f = Fg(b), m = Gd.e(b, new W(null, 2, 5, X, [Ye, Qf], null)), E = Gd.e(b, new W(null, 2, 5, X, [Ye, pf], null)), G = Gd.e(b, new W(null, 2, 5, X, [Ye, wf], null)), G = sh(E, G), J = P.e(E, G), J = P.e(m, J), b = wg(b, new W(null, 2, 5, X, [new dg(Ye, m, E, G, null, null, null), Wf(J, e, f)], null));
                    d.add(b);
                    a += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? fd(l.T(), d(Ab(b))) : fd(l.T(), null);
            }
            var m = I(b);
            return M(function() {
              var a = Eg(m), b = Fg(m), d = Gd.e(m, new W(null, 2, 5, X, [Ye, Qf], null)), e = Gd.e(m, new W(null, 2, 5, X, [Ye, pf], null)), f = Gd.e(m, new W(null, 2, 5, X, [Ye, wf], null)), f = sh(e, f), h = P.e(e, f), h = P.e(d, h);
              return wg(m, new W(null, 2, 5, X, [new dg(Ye, d, e, f, null, null, null), Wf(h, a, b)], null));
            }(), d(K(b)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
;function uh(a, b) {
  a.addChild(b);
}
function vh(a, b, c) {
  gh(gh(a.position, "x", b), "y", c);
  return a;
}
function wh(a, b) {
  return gh(a, "anchor", b);
}
function xh(a, b, c) {
  a = gh(a, "height", 16 * b);
  return gh(a, "width", 16 * c);
}
function yh(a, b, c) {
  var d = Ze.i(a), e = qf.i(a);
  b = D(b);
  for (var f = null, h = 0, k = 0;;) {
    if (k < h) {
      var l = f.Y(null, k);
      uh(d, Gd.e(l, new W(null, 2, 5, X, [kf, sf], null)));
      k += 1;
    } else {
      if (b = D(b)) {
        f = b, yc(f) ? (b = zb(f), k = Ab(f), f = b, h = N(b), b = k) : (b = I(f), uh(d, Gd.e(b, new W(null, 2, 5, X, [kf, sf], null))), b = L(f), f = null, h = 0), k = 0;
      } else {
        break;
      }
    }
  }
  c = D(c);
  b = null;
  for (h = f = 0;;) {
    if (h < f) {
      var k = b.Y(null, h), m = Gd.e(k, new W(null, 2, 5, X, [jf, sf], null)), n = Eg(k), p = Fg(k), l = O.f(p, 0, null), p = O.f(p, 1, null), r = Bg(k), t = O.f(r, 0, null), r = O.f(r, 1, null), t = Math.round(t), y = Math.round(r), r = Nf.i(k);
      uh(d, wh(vh(xh(m, l, p), t, y), n));
      if (u(r)) {
        var C = xf.i(r), m = ef.i(r), E = $e.i(r), m = Kg(k) / m, G = l / 8 * 16, J = 16 * m * p, k = Ng(k), T = k.x, ea = k.y + G;
        uh(d, function() {
          var a = C;
          a.clear();
          a.beginFill(E);
          a.drawRect(T, ea, J, G);
          a.endFill();
          return a;
        }());
      }
      h += 1;
    } else {
      if (c = D(c)) {
        if (yc(c)) {
          f = zb(c), c = Ab(c), b = f, f = N(f);
        } else {
          b = I(c);
          k = Gd.e(b, new W(null, 2, 5, X, [jf, sf], null));
          l = Eg(b);
          h = Fg(b);
          f = O.f(h, 0, null);
          h = O.f(h, 1, null);
          m = Bg(b);
          p = O.f(m, 0, null);
          m = O.f(m, 1, null);
          p = Math.round(p);
          n = Math.round(m);
          m = Nf.i(b);
          uh(d, wh(vh(xh(k, f, h), p, n), l));
          if (u(m)) {
            var Wa = xf.i(m), k = ef.i(m), H = $e.i(m), k = Kg(b) / k, If = f / 8 * 16, ka = 16 * k * h;
            b = Ng(b);
            var ma = b.x, pa = b.y + If;
            uh(d, function() {
              var a = Wa;
              a.clear();
              a.beginFill(H);
              a.drawRect(ma, pa, ka, If);
              a.endFill();
              return a;
            }());
          }
          c = L(c);
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
;function zh(a, b) {
  return Ag(a, function() {
    return function d(a) {
      return new Zc(null, function() {
        for (;;) {
          var b = D(a);
          if (b) {
            if (yc(b)) {
              var h = zb(b), k = N(h), l = cd(k);
              return function() {
                for (var a = 0;;) {
                  if (a < k) {
                    var b = z.e(h, a), d = l, e = Cg(b), f = Bg(e), e = O.f(f, 0, null), f = O.f(f, 1, null), m = Bg(b), E = O.f(m, 0, null), m = O.f(m, 1, null), b = ug(b, new cg(lf, Math.atan2(f - m, e - E), null, null, null));
                    d.add(b);
                    a += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? fd(l.T(), d(Ab(b))) : fd(l.T(), null);
            }
            var m = I(b);
            return M(function() {
              var a = Cg(m), b = Bg(a), a = O.f(b, 0, null), b = O.f(b, 1, null), d = Bg(m), e = O.f(d, 0, null), d = O.f(d, 1, null);
              return ug(m, new cg(lf, Math.atan2(b - d, a - e), null, null, null));
            }(), d(K(b)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
;function Ah() {
  var a = new PIXI.autoDetectRenderer(640, 640);
  document.getElementById("battlefield").appendChild(a.view);
  return a;
}
function Bh() {
  var a = new PIXI.Stage(16777215);
  gh(a, "interactive", !0);
  gh(a, "click", ph);
  return a;
}
function Ch(a) {
  a = qc.f(qc.f(qc.f(a, qf, Ah()), Ze, Bh()), Kf, 0);
  var b;
  b = PIXI.TilingSprite;
  var c;
  c = PIXI.Texture.fromImage("images/grass-tile.png", !1);
  b = new b(c, 640, 640);
  b = yg.p(lc([new Xf(kf, b, null, null, null)], 0));
  return Ag(a, new W(null, 4, 5, X, [b, lh(160, 160), nh(400, 400), nh(320, 320)], null));
}
var Dh = wd.i ? wd.i(le) : wd.call(null, le);
function Eh(a) {
  var b = Kf.i(a);
  a = qc.f(a, Kf, b + 1);
  a = qh(a);
  if (Vb.e(Mc(Kf.i(a), 5), 0)) {
    var b = R.e(zg, Fd.e(new W(null, 1, 5, X, [a], null), new W(null, 1, 5, X, [nf], null))), c = R.e(zg, Fd.e(new W(null, 1, 5, X, [a], null), new W(null, 2, 5, X, [Of, hf], null)));
    a = D(b) && D(c) ? R.e(Rg, new W(null, 3, 5, X, [a, b, c], null)) : a;
  }
  Vb.e(Mc(Kf.i(a), 5), 0) && (b = R.e(zg, Fd.e(new W(null, 1, 5, X, [a], null), new W(null, 2, 5, X, [nf, Xe], null))), a = D(b) ? R.e(zh, new W(null, 2, 5, X, [a, b], null)) : a);
  Vb.e(Mc(Kf.i(a), 1), 0) && (b = R.e(zg, Fd.e(new W(null, 1, 5, X, [a], null), new W(null, 3, 5, X, [Xe, lf, Cf], null))), a = D(b) ? R.e(rh, new W(null, 2, 5, X, [a, b], null)) : a);
  Vb.e(Mc(Kf.i(a), 5), 0) && (b = R.e(zg, Fd.e(new W(null, 1, 5, X, [a], null), new W(null, 2, 5, X, [nf, Sf], null))), a = D(b) ? R.e(fh, new W(null, 2, 5, X, [a, b], null)) : a);
  Vb.e(Mc(Kf.i(a), 5), 0) && (b = R.e(zg, Fd.e(new W(null, 1, 5, X, [a], null), new W(null, 2, 5, X, [nf, Sf], null))), c = R.e(zg, Fd.e(new W(null, 1, 5, X, [a], null), new W(null, 2, 5, X, [Of, hf], null))), a = D(b) && D(c) ? R.e(dh, new W(null, 3, 5, X, [a, b, c], null)) : a);
  Vb.e(Mc(Kf.i(a), 15), 0) && (b = R.e(zg, Fd.e(new W(null, 1, 5, X, [a], null), new W(null, 1, 5, X, [Ye], null))), a = D(b) ? R.e(th, new W(null, 2, 5, X, [a, b], null)) : a);
  Vb.e(Mc(Kf.i(a), 1), 0) && (b = R.e(zg, Fd.e(new W(null, 1, 5, X, [a], null), new W(null, 1, 5, X, [kf], null))), c = R.e(zg, Fd.e(new W(null, 1, 5, X, [a], null), new W(null, 1, 5, X, [jf], null))), a = D(b) && D(c) ? R.e(yh, new W(null, 3, 5, X, [a, b, c], null)) : a);
  return a;
}
var Gh = function Fh() {
  zd.e(Dh, Eh);
  return requestAnimFrame(Fh);
}, Hh = new PIXI.AssetLoader(["images/barbarian-run-down.json", "images/archer-run-down.json", "images/grass-tile.png", "images/town-hall.png"], !1);
gh(Hh, "onComplete", function() {
  zd.e(Dh, Ch);
  return requestAnimFrame(Gh);
});
Hh.load();

})();
