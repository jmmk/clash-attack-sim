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
;function ea(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ga(a, b) {
  null != a && this.append.apply(this, arguments);
}
ga.prototype.ab = "";
ga.prototype.append = function(a, b, c) {
  this.ab += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.ab += arguments[d];
    }
  }
  return this;
};
ga.prototype.toString = function() {
  return this.ab;
};
var ha = null;
function ia() {
  return new s(null, 5, [la, !0, ma, !0, oa, !1, qa, !1, ra, null], null);
}
function t(a) {
  return null != a && !1 !== a;
}
function v(a, b) {
  return a[r(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function sa(a) {
  return null == a ? null : a.constructor;
}
function w(a, b) {
  var c = sa(b), c = t(t(c) ? c.Wb : c) ? c.Vb : r(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function ta(a) {
  var b = a.Vb;
  return t(b) ? b : "" + y.f(a);
}
function ua(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var wa = {}, xa = {};
function ya(a) {
  if (a ? a.P : a) {
    return a.P(a);
  }
  var b;
  b = ya[r(null == a ? null : a)];
  if (!b && (b = ya._, !b)) {
    throw w("ICounted.-count", a);
  }
  return b.call(null, a);
}
function Aa(a) {
  if (a ? a.V : a) {
    return a.V(a);
  }
  var b;
  b = Aa[r(null == a ? null : a)];
  if (!b && (b = Aa._, !b)) {
    throw w("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
function Ba(a, b) {
  if (a ? a.M : a) {
    return a.M(a, b);
  }
  var c;
  c = Ba[r(null == a ? null : a)];
  if (!c && (c = Ba._, !c)) {
    throw w("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Ca = {}, z = function() {
  function a(a, b, c) {
    if (a ? a.ja : a) {
      return a.ja(a, b, c);
    }
    var h;
    h = z[r(null == a ? null : a)];
    if (!h && (h = z._, !h)) {
      throw w("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.W : a) {
      return a.W(a, b);
    }
    var c;
    c = z[r(null == a ? null : a)];
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
  c.i = a;
  return c;
}(), Ea = {};
function Fa(a) {
  if (a ? a.Z : a) {
    return a.Z(a);
  }
  var b;
  b = Fa[r(null == a ? null : a)];
  if (!b && (b = Fa._, !b)) {
    throw w("ISeq.-first", a);
  }
  return b.call(null, a);
}
function Ga(a) {
  if (a ? a.ia : a) {
    return a.ia(a);
  }
  var b;
  b = Ga[r(null == a ? null : a)];
  if (!b && (b = Ga._, !b)) {
    throw w("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Ha = {}, Ja = {}, B = function() {
  function a(a, b, c) {
    if (a ? a.G : a) {
      return a.G(a, b, c);
    }
    var h;
    h = B[r(null == a ? null : a)];
    if (!h && (h = B._, !h)) {
      throw w("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.J : a) {
      return a.J(a, b);
    }
    var c;
    c = B[r(null == a ? null : a)];
    if (!c && (c = B._, !c)) {
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
function Ka(a, b) {
  if (a ? a.rb : a) {
    return a.rb(a, b);
  }
  var c;
  c = Ka[r(null == a ? null : a)];
  if (!c && (c = Ka._, !c)) {
    throw w("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function La(a, b, c) {
  if (a ? a.ha : a) {
    return a.ha(a, b, c);
  }
  var d;
  d = La[r(null == a ? null : a)];
  if (!d && (d = La._, !d)) {
    throw w("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Na = {};
function Oa(a, b) {
  if (a ? a.na : a) {
    return a.na(a, b);
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
  if (a ? a.wb : a) {
    return a.wb();
  }
  var b;
  b = Qa[r(null == a ? null : a)];
  if (!b && (b = Qa._, !b)) {
    throw w("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Ra(a) {
  if (a ? a.xb : a) {
    return a.xb();
  }
  var b;
  b = Ra[r(null == a ? null : a)];
  if (!b && (b = Ra._, !b)) {
    throw w("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Sa = {}, Ta = {};
function Va(a, b, c) {
  if (a ? a.yb : a) {
    return a.yb(a, b, c);
  }
  var d;
  d = Va[r(null == a ? null : a)];
  if (!d && (d = Va._, !d)) {
    throw w("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Wa(a) {
  if (a ? a.vb : a) {
    return a.vb(a);
  }
  var b;
  b = Wa[r(null == a ? null : a)];
  if (!b && (b = Wa._, !b)) {
    throw w("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Xa = {};
function Ya(a) {
  if (a ? a.L : a) {
    return a.L(a);
  }
  var b;
  b = Ya[r(null == a ? null : a)];
  if (!b && (b = Ya._, !b)) {
    throw w("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var Za = {};
function bb(a, b) {
  if (a ? a.O : a) {
    return a.O(a, b);
  }
  var c;
  c = bb[r(null == a ? null : a)];
  if (!c && (c = bb._, !c)) {
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
var hb = {};
function ib(a) {
  if (a ? a.N : a) {
    return a.N(a);
  }
  var b;
  b = ib[r(null == a ? null : a)];
  if (!b && (b = ib._, !b)) {
    throw w("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var jb = {};
function C(a, b) {
  if (a ? a.Fb : a) {
    return a.Fb(0, b);
  }
  var c;
  c = C[r(null == a ? null : a)];
  if (!c && (c = C._, !c)) {
    throw w("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var kb = {};
function lb(a, b, c) {
  if (a ? a.H : a) {
    return a.H(a, b, c);
  }
  var d;
  d = lb[r(null == a ? null : a)];
  if (!d && (d = lb._, !d)) {
    throw w("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function mb(a, b, c) {
  if (a ? a.Eb : a) {
    return a.Eb(0, b, c);
  }
  var d;
  d = mb[r(null == a ? null : a)];
  if (!d && (d = mb._, !d)) {
    throw w("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function nb(a) {
  if (a ? a.bb : a) {
    return a.bb(a);
  }
  var b;
  b = nb[r(null == a ? null : a)];
  if (!b && (b = nb._, !b)) {
    throw w("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function ob(a, b) {
  if (a ? a.fb : a) {
    return a.fb(a, b);
  }
  var c;
  c = ob[r(null == a ? null : a)];
  if (!c && (c = ob._, !c)) {
    throw w("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function pb(a) {
  if (a ? a.gb : a) {
    return a.gb(a);
  }
  var b;
  b = pb[r(null == a ? null : a)];
  if (!b && (b = pb._, !b)) {
    throw w("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function qb(a, b, c) {
  if (a ? a.eb : a) {
    return a.eb(a, b, c);
  }
  var d;
  d = qb[r(null == a ? null : a)];
  if (!d && (d = qb._, !d)) {
    throw w("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function rb(a, b, c) {
  if (a ? a.Db : a) {
    return a.Db(0, b, c);
  }
  var d;
  d = rb[r(null == a ? null : a)];
  if (!d && (d = rb._, !d)) {
    throw w("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function tb(a) {
  if (a ? a.Ab : a) {
    return a.Ab();
  }
  var b;
  b = tb[r(null == a ? null : a)];
  if (!b && (b = tb._, !b)) {
    throw w("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function ub(a) {
  if (a ? a.tb : a) {
    return a.tb(a);
  }
  var b;
  b = ub[r(null == a ? null : a)];
  if (!b && (b = ub._, !b)) {
    throw w("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function vb(a) {
  if (a ? a.ub : a) {
    return a.ub(a);
  }
  var b;
  b = vb[r(null == a ? null : a)];
  if (!b && (b = vb._, !b)) {
    throw w("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function wb(a) {
  if (a ? a.sb : a) {
    return a.sb(a);
  }
  var b;
  b = wb[r(null == a ? null : a)];
  if (!b && (b = wb._, !b)) {
    throw w("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function xb(a, b) {
  if (a ? a.Qb : a) {
    return a.Qb(a, b);
  }
  var c;
  c = xb[r(null == a ? null : a)];
  if (!c && (c = xb._, !c)) {
    throw w("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var yb = function() {
  function a(a, b, c, d, e) {
    if (a ? a.Ub : a) {
      return a.Ub(a, b, c, d, e);
    }
    var n;
    n = yb[r(null == a ? null : a)];
    if (!n && (n = yb._, !n)) {
      throw w("ISwap.-swap!", a);
    }
    return n.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.Tb : a) {
      return a.Tb(a, b, c, d);
    }
    var e;
    e = yb[r(null == a ? null : a)];
    if (!e && (e = yb._, !e)) {
      throw w("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.Sb : a) {
      return a.Sb(a, b, c);
    }
    var d;
    d = yb[r(null == a ? null : a)];
    if (!d && (d = yb._, !d)) {
      throw w("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.Rb : a) {
      return a.Rb(a, b);
    }
    var c;
    c = yb[r(null == a ? null : a)];
    if (!c && (c = yb._, !c)) {
      throw w("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, h, l, k, m) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, l);
      case 4:
        return b.call(this, e, h, l, k);
      case 5:
        return a.call(this, e, h, l, k, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.e = d;
  e.i = c;
  e.t = b;
  e.R = a;
  return e;
}();
function zb(a) {
  if (a ? a.nb : a) {
    return a.nb(a);
  }
  var b;
  b = zb[r(null == a ? null : a)];
  if (!b && (b = zb._, !b)) {
    throw w("IIterable.-iterator", a);
  }
  return b.call(null, a);
}
function Ab(a) {
  this.Xb = a;
  this.D = 0;
  this.m = 1073741824;
}
Ab.prototype.Fb = function(a, b) {
  return this.Xb.append(b);
};
function Bb(a) {
  var b = new ga;
  a.H(null, new Ab(b), ia());
  return "" + y.f(b);
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
var Hb = {}, Jb = 0;
function Kb(a) {
  255 < Jb && (Hb = {}, Jb = 0);
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
    Jb += 1;
  }
  return a = b;
}
function Lb(a) {
  a && (a.m & 4194304 || a.$b) ? a = a.I(null) : "number" === typeof a ? a = (Math.floor.f ? Math.floor.f(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Kb(a), 0 !== a && (a = Db(a), a = Eb(0, a), a = Fb(a, 4))) : a = null == a ? 0 : fb(a);
  return a;
}
function Mb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Nb(a, b) {
  if (t(Ob.e ? Ob.e(a, b) : Ob.call(null, a, b))) {
    return 0;
  }
  if (t(function() {
    var c = t(a.ra) ? !1 : !0;
    return c ? b.ra : c;
  }())) {
    return-1;
  }
  if (t(a.ra)) {
    if (!t(b.ra)) {
      return 1;
    }
    var c = function() {
      var c = a.ra, d = b.ra;
      return Pb.e ? Pb.e(c, d) : Pb.call(null, c, d);
    }();
    if (0 === c) {
      var c = a.name, d = b.name;
      return Pb.e ? Pb.e(c, d) : Pb.call(null, c, d);
    }
    return c;
  }
  c = a.name;
  d = b.name;
  return Pb.e ? Pb.e(c, d) : Pb.call(null, c, d);
}
function Qb(a, b, c, d, e) {
  this.ra = a;
  this.name = b;
  this.Ra = c;
  this.Va = d;
  this.ca = e;
  this.m = 2154168321;
  this.D = 4096;
}
g = Qb.prototype;
g.H = function(a, b) {
  return C(b, this.Ra);
};
g.I = function() {
  var a = this.Va;
  return null != a ? a : this.Va = a = Mb(Gb(this.name), Kb(this.ra));
};
g.O = function(a, b) {
  return new Qb(this.ra, this.name, this.Ra, this.Va, b);
};
g.L = function() {
  return this.ca;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return B.i(c, this, null);
      case 3:
        return B.i(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return B.i(c, this, null);
  };
  a.i = function(a, c, d) {
    return B.i(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ua(b)));
};
g.f = function(a) {
  return B.i(a, this, null);
};
g.e = function(a, b) {
  return B.i(a, this, b);
};
g.F = function(a, b) {
  return b instanceof Qb ? this.Ra === b.Ra : !1;
};
g.toString = function() {
  return this.Ra;
};
function F(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.m & 8388608 || a.ac)) {
    return a.N(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Rb(a, 0);
  }
  if (v(hb, a)) {
    return ib(a);
  }
  throw Error("" + y.f(a) + " is not ISeqable");
}
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.m & 64 || a.cb)) {
    return a.Z(null);
  }
  a = F(a);
  return null == a ? null : Fa(a);
}
function I(a) {
  return null != a ? a && (a.m & 64 || a.cb) ? a.ia(null) : (a = F(a)) ? Ga(a) : J : J;
}
function K(a) {
  return null == a ? null : a && (a.m & 128 || a.ob) ? a.ga(null) : F(I(a));
}
var Ob = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || eb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var k = null;
      2 < arguments.length && (k = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, k);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.e(a, d)) {
          if (K(e)) {
            a = d, d = G(e), e = K(e);
          } else {
            return b.e(d, G(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.B = 2;
    a.s = function(a) {
      var b = G(a);
      a = K(a);
      var d = G(a);
      a = I(a);
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
        return c.n(b, e, L(arguments, 2));
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
  for (a = F(a);;) {
    if (null != a) {
      b += 1, c = Cb(31, c) + Lb(G(a)) | 0, a = K(a);
    } else {
      return Sb(c, b);
    }
  }
}
function Ub(a) {
  var b = 0, c = 0;
  for (a = F(a);;) {
    if (null != a) {
      b += 1, c = c + Lb(G(a)) | 0, a = K(a);
    } else {
      return Sb(c, b);
    }
  }
}
xa["null"] = !0;
ya["null"] = function() {
  return 0;
};
Date.prototype.F = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
eb.number = function(a, b) {
  return a === b;
};
Xa["function"] = !0;
Ya["function"] = function() {
  return null;
};
wa["function"] = !0;
fb._ = function(a) {
  return a[ba] || (a[ba] = ++ca);
};
function Vb(a) {
  this.oa = a;
  this.D = 0;
  this.m = 32768;
}
Vb.prototype.vb = function() {
  return this.oa;
};
function Wb(a) {
  return a instanceof Vb;
}
function Xb(a) {
  return Wa(a);
}
var Yb = function() {
  function a(a, b, c, d) {
    for (var k = ya(a);;) {
      if (d < k) {
        var m = z.e(a, d);
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
    var d = ya(a), k = c;
    for (c = 0;;) {
      if (c < d) {
        var m = z.e(a, c), k = b.e ? b.e(k, m) : b.call(null, k, m);
        if (Wb(k)) {
          return Wa(k);
        }
        c += 1;
      } else {
        return k;
      }
    }
  }
  function c(a, b) {
    var c = ya(a);
    if (0 === c) {
      return b.C ? b.C() : b.call(null);
    }
    for (var d = z.e(a, 0), k = 1;;) {
      if (k < c) {
        var m = z.e(a, k), d = b.e ? b.e(d, m) : b.call(null, d, m);
        if (Wb(d)) {
          return Wa(d);
        }
        k += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, l) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.e = c;
  d.i = b;
  d.t = a;
  return d;
}(), Zb = function() {
  function a(a, b, c, d) {
    for (var k = a.length;;) {
      if (d < k) {
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
    var d = a.length, k = c;
    for (c = 0;;) {
      if (c < d) {
        var m = a[c], k = b.e ? b.e(k, m) : b.call(null, k, m);
        if (Wb(k)) {
          return Wa(k);
        }
        c += 1;
      } else {
        return k;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.C ? b.C() : b.call(null);
    }
    for (var d = a[0], k = 1;;) {
      if (k < c) {
        var m = a[k], d = b.e ? b.e(d, m) : b.call(null, d, m);
        if (Wb(d)) {
          return Wa(d);
        }
        k += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, l) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.e = c;
  d.i = b;
  d.t = a;
  return d;
}();
function ac(a) {
  return a ? a.m & 2 || a.Ib ? !0 : a.m ? !1 : v(xa, a) : v(xa, a);
}
function bc(a) {
  return a ? a.m & 16 || a.Bb ? !0 : a.m ? !1 : v(Ca, a) : v(Ca, a);
}
function cc(a, b) {
  this.j = a;
  this.A = b;
}
cc.prototype.zb = function() {
  return this.A < this.j.length;
};
cc.prototype.next = function() {
  var a = this.j[this.A];
  this.A += 1;
  return a;
};
function Rb(a, b) {
  this.j = a;
  this.A = b;
  this.m = 166199550;
  this.D = 8192;
}
g = Rb.prototype;
g.toString = function() {
  return Bb(this);
};
g.W = function(a, b) {
  var c = b + this.A;
  return c < this.j.length ? this.j[c] : null;
};
g.ja = function(a, b, c) {
  a = b + this.A;
  return a < this.j.length ? this.j[a] : c;
};
g.nb = function() {
  return new cc(this.j, this.A);
};
g.ga = function() {
  return this.A + 1 < this.j.length ? new Rb(this.j, this.A + 1) : null;
};
g.P = function() {
  return this.j.length - this.A;
};
g.I = function() {
  return Tb(this);
};
g.F = function(a, b) {
  return dc.e ? dc.e(this, b) : dc.call(null, this, b);
};
g.V = function() {
  return J;
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
g.ia = function() {
  return this.A + 1 < this.j.length ? new Rb(this.j, this.A + 1) : J;
};
g.N = function() {
  return this;
};
g.M = function(a, b) {
  return M.e ? M.e(b, this) : M.call(null, b, this);
};
var ec = function() {
  function a(a, b) {
    return b < a.length ? new Rb(a, b) : null;
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
}(), L = function() {
  function a(a, b) {
    return ec.e(a, b);
  }
  function b(a) {
    return ec.e(a, 0);
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
var gc = function() {
  function a(a, b) {
    return null != a ? Ba(a, b) : Ba(J, b);
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var k = null;
      2 < arguments.length && (k = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, k);
    }
    function c(a, d, e) {
      for (;;) {
        if (t(e)) {
          a = b.e(a, d), d = G(e), e = K(e);
        } else {
          return b.e(a, d);
        }
      }
    }
    a.B = 2;
    a.s = function(a) {
      var b = G(a);
      a = K(a);
      var d = G(a);
      a = I(a);
      return c(b, d, a);
    };
    a.n = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return fc;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.n(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 2;
  b.s = c.s;
  b.C = function() {
    return fc;
  };
  b.f = function(a) {
    return a;
  };
  b.e = a;
  b.n = c.n;
  return b;
}();
function N(a) {
  if (null != a) {
    if (a && (a.m & 2 || a.Ib)) {
      a = a.P(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (v(xa, a)) {
            a = ya(a);
          } else {
            a: {
              a = F(a);
              for (var b = 0;;) {
                if (ac(a)) {
                  a = b + ya(a);
                  break a;
                }
                a = K(a);
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
var hc = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return F(a) ? G(a) : c;
      }
      if (bc(a)) {
        return z.i(a, b, c);
      }
      if (F(a)) {
        a = K(a), b -= 1;
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
        if (F(a)) {
          return G(a);
        }
        throw Error("Index out of bounds");
      }
      if (bc(a)) {
        return z.e(a, b);
      }
      if (F(a)) {
        var c = K(a), h = b - 1;
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
}(), O = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.m & 16 || a.Bb)) {
      return a.ja(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (v(Ca, a)) {
      return z.e(a, b);
    }
    if (a ? a.m & 64 || a.cb || (a.m ? 0 : v(Ea, a)) : v(Ea, a)) {
      return hc.i(a, b, c);
    }
    throw Error("nth not supported on this type " + y.f(ta(sa(a))));
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.m & 16 || a.Bb)) {
      return a.W(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (v(Ca, a)) {
      return z.e(a, b);
    }
    if (a ? a.m & 64 || a.cb || (a.m ? 0 : v(Ea, a)) : v(Ea, a)) {
      return hc.e(a, b);
    }
    throw Error("nth not supported on this type " + y.f(ta(sa(a))));
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
    return null != a ? a && (a.m & 256 || a.Cb) ? a.G(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : v(Ja, a) ? B.i(a, b, c) : c : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.m & 256 || a.Cb) ? a.J(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : v(Ja, a) ? B.e(a, b) : null;
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
}(), jc = function() {
  function a(a, b, c) {
    if (null != a) {
      a = La(a, b, c);
    } else {
      a: {
        a = [b];
        c = [c];
        b = a.length;
        var h = 0, l;
        for (l = nb(ic);;) {
          if (h < b) {
            var k = h + 1;
            l = l.eb(null, a[h], c[h]);
            h = k;
          } else {
            a = pb(l);
            break a;
          }
        }
        a = void 0;
      }
    }
    return a;
  }
  var b = null, c = function() {
    function a(b, d, l, k) {
      var m = null;
      3 < arguments.length && (m = L(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, l, m);
    }
    function c(a, d, e, k) {
      for (;;) {
        if (a = b.i(a, d, e), t(k)) {
          d = G(k), e = G(K(k)), k = K(K(k));
        } else {
          return a;
        }
      }
    }
    a.B = 3;
    a.s = function(a) {
      var b = G(a);
      a = K(a);
      var d = G(a);
      a = K(a);
      var k = G(a);
      a = I(a);
      return c(b, d, k, a);
    };
    a.n = c;
    return a;
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.n(b, e, f, L(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 3;
  b.s = c.s;
  b.i = a;
  b.n = c.n;
  return b;
}(), kc = function() {
  function a(a, b) {
    return null == a ? null : Oa(a, b);
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var k = null;
      2 < arguments.length && (k = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, k);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.e(a, d);
        if (t(e)) {
          d = G(e), e = K(e);
        } else {
          return a;
        }
      }
    }
    a.B = 2;
    a.s = function(a) {
      var b = G(a);
      a = K(a);
      var d = G(a);
      a = I(a);
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
        return c.n(b, e, L(arguments, 2));
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
function lc(a) {
  var b = "function" == r(a);
  return t(b) ? b : a ? t(t(null) ? null : a.Hb) ? !0 : a.gc ? !1 : v(wa, a) : v(wa, a);
}
function mc(a, b) {
  this.k = a;
  this.meta = b;
  this.D = 0;
  this.m = 393217;
}
g = mc.prototype;
g.call = function() {
  function a(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, D, Q, T, pa) {
    a = this.k;
    return nc.mb ? nc.mb(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, D, Q, T, pa) : nc.call(null, a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, D, Q, T, pa);
  }
  function b(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, D, Q, T) {
    a = this;
    return a.k.Ha ? a.k.Ha(b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, D, Q, T) : a.k.call(null, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, D, Q, T);
  }
  function c(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, D, Q) {
    a = this;
    return a.k.Ga ? a.k.Ga(b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, D, Q) : a.k.call(null, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, D, Q);
  }
  function d(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, D) {
    a = this;
    return a.k.Fa ? a.k.Fa(b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, D) : a.k.call(null, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, D);
  }
  function e(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H) {
    a = this;
    return a.k.Ea ? a.k.Ea(b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H) : a.k.call(null, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H);
  }
  function f(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E) {
    a = this;
    return a.k.Da ? a.k.Da(b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E) : a.k.call(null, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E);
  }
  function h(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A) {
    a = this;
    return a.k.Ca ? a.k.Ca(b, c, d, e, f, h, l, k, m, n, p, q, u, x, A) : a.k.call(null, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A);
  }
  function l(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x) {
    a = this;
    return a.k.Ba ? a.k.Ba(b, c, d, e, f, h, l, k, m, n, p, q, u, x) : a.k.call(null, b, c, d, e, f, h, l, k, m, n, p, q, u, x);
  }
  function k(a, b, c, d, e, f, h, l, k, m, n, p, q, u) {
    a = this;
    return a.k.Aa ? a.k.Aa(b, c, d, e, f, h, l, k, m, n, p, q, u) : a.k.call(null, b, c, d, e, f, h, l, k, m, n, p, q, u);
  }
  function m(a, b, c, d, e, f, h, l, k, m, n, p, q) {
    a = this;
    return a.k.za ? a.k.za(b, c, d, e, f, h, l, k, m, n, p, q) : a.k.call(null, b, c, d, e, f, h, l, k, m, n, p, q);
  }
  function n(a, b, c, d, e, f, h, l, k, m, n, p) {
    a = this;
    return a.k.ya ? a.k.ya(b, c, d, e, f, h, l, k, m, n, p) : a.k.call(null, b, c, d, e, f, h, l, k, m, n, p);
  }
  function p(a, b, c, d, e, f, h, l, k, m, n) {
    a = this;
    return a.k.xa ? a.k.xa(b, c, d, e, f, h, l, k, m, n) : a.k.call(null, b, c, d, e, f, h, l, k, m, n);
  }
  function q(a, b, c, d, e, f, h, l, k, m) {
    a = this;
    return a.k.Ja ? a.k.Ja(b, c, d, e, f, h, l, k, m) : a.k.call(null, b, c, d, e, f, h, l, k, m);
  }
  function u(a, b, c, d, e, f, h, l, k) {
    a = this;
    return a.k.Ia ? a.k.Ia(b, c, d, e, f, h, l, k) : a.k.call(null, b, c, d, e, f, h, l, k);
  }
  function x(a, b, c, d, e, f, h, l) {
    a = this;
    return a.k.ma ? a.k.ma(b, c, d, e, f, h, l) : a.k.call(null, b, c, d, e, f, h, l);
  }
  function A(a, b, c, d, e, f, h) {
    a = this;
    return a.k.fa ? a.k.fa(b, c, d, e, f, h) : a.k.call(null, b, c, d, e, f, h);
  }
  function E(a, b, c, d, e, f) {
    a = this;
    return a.k.R ? a.k.R(b, c, d, e, f) : a.k.call(null, b, c, d, e, f);
  }
  function H(a, b, c, d, e) {
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
  function pa(a, b) {
    a = this;
    return a.k.f ? a.k.f(b) : a.k.call(null, b);
  }
  function ab(a) {
    a = this;
    return a.k.C ? a.k.C() : a.k.call(null);
  }
  var D = null, D = function(D, fa, ja, ka, na, va, za, Da, Ia, Ma, Ua, $a, gb, sb, Ib, $b, Bc, hd, Nd, ze, Af, xg) {
    switch(arguments.length) {
      case 1:
        return ab.call(this, D);
      case 2:
        return pa.call(this, D, fa);
      case 3:
        return T.call(this, D, fa, ja);
      case 4:
        return Q.call(this, D, fa, ja, ka);
      case 5:
        return H.call(this, D, fa, ja, ka, na);
      case 6:
        return E.call(this, D, fa, ja, ka, na, va);
      case 7:
        return A.call(this, D, fa, ja, ka, na, va, za);
      case 8:
        return x.call(this, D, fa, ja, ka, na, va, za, Da);
      case 9:
        return u.call(this, D, fa, ja, ka, na, va, za, Da, Ia);
      case 10:
        return q.call(this, D, fa, ja, ka, na, va, za, Da, Ia, Ma);
      case 11:
        return p.call(this, D, fa, ja, ka, na, va, za, Da, Ia, Ma, Ua);
      case 12:
        return n.call(this, D, fa, ja, ka, na, va, za, Da, Ia, Ma, Ua, $a);
      case 13:
        return m.call(this, D, fa, ja, ka, na, va, za, Da, Ia, Ma, Ua, $a, gb);
      case 14:
        return k.call(this, D, fa, ja, ka, na, va, za, Da, Ia, Ma, Ua, $a, gb, sb);
      case 15:
        return l.call(this, D, fa, ja, ka, na, va, za, Da, Ia, Ma, Ua, $a, gb, sb, Ib);
      case 16:
        return h.call(this, D, fa, ja, ka, na, va, za, Da, Ia, Ma, Ua, $a, gb, sb, Ib, $b);
      case 17:
        return f.call(this, D, fa, ja, ka, na, va, za, Da, Ia, Ma, Ua, $a, gb, sb, Ib, $b, Bc);
      case 18:
        return e.call(this, D, fa, ja, ka, na, va, za, Da, Ia, Ma, Ua, $a, gb, sb, Ib, $b, Bc, hd);
      case 19:
        return d.call(this, D, fa, ja, ka, na, va, za, Da, Ia, Ma, Ua, $a, gb, sb, Ib, $b, Bc, hd, Nd);
      case 20:
        return c.call(this, D, fa, ja, ka, na, va, za, Da, Ia, Ma, Ua, $a, gb, sb, Ib, $b, Bc, hd, Nd, ze);
      case 21:
        return b.call(this, D, fa, ja, ka, na, va, za, Da, Ia, Ma, Ua, $a, gb, sb, Ib, $b, Bc, hd, Nd, ze, Af);
      case 22:
        return a.call(this, D, fa, ja, ka, na, va, za, Da, Ia, Ma, Ua, $a, gb, sb, Ib, $b, Bc, hd, Nd, ze, Af, xg);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  D.f = ab;
  D.e = pa;
  D.i = T;
  D.t = Q;
  D.R = H;
  D.fa = E;
  D.ma = A;
  D.Ia = x;
  D.Ja = u;
  D.xa = q;
  D.ya = p;
  D.za = n;
  D.Aa = m;
  D.Ba = k;
  D.Ca = l;
  D.Da = h;
  D.Ea = f;
  D.Fa = e;
  D.Ga = d;
  D.Ha = c;
  D.Kb = b;
  D.mb = a;
  return D;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ua(b)));
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
g.Ia = function(a, b, c, d, e, f, h, l) {
  return this.k.Ia ? this.k.Ia(a, b, c, d, e, f, h, l) : this.k.call(null, a, b, c, d, e, f, h, l);
};
g.Ja = function(a, b, c, d, e, f, h, l, k) {
  return this.k.Ja ? this.k.Ja(a, b, c, d, e, f, h, l, k) : this.k.call(null, a, b, c, d, e, f, h, l, k);
};
g.xa = function(a, b, c, d, e, f, h, l, k, m) {
  return this.k.xa ? this.k.xa(a, b, c, d, e, f, h, l, k, m) : this.k.call(null, a, b, c, d, e, f, h, l, k, m);
};
g.ya = function(a, b, c, d, e, f, h, l, k, m, n) {
  return this.k.ya ? this.k.ya(a, b, c, d, e, f, h, l, k, m, n) : this.k.call(null, a, b, c, d, e, f, h, l, k, m, n);
};
g.za = function(a, b, c, d, e, f, h, l, k, m, n, p) {
  return this.k.za ? this.k.za(a, b, c, d, e, f, h, l, k, m, n, p) : this.k.call(null, a, b, c, d, e, f, h, l, k, m, n, p);
};
g.Aa = function(a, b, c, d, e, f, h, l, k, m, n, p, q) {
  return this.k.Aa ? this.k.Aa(a, b, c, d, e, f, h, l, k, m, n, p, q) : this.k.call(null, a, b, c, d, e, f, h, l, k, m, n, p, q);
};
g.Ba = function(a, b, c, d, e, f, h, l, k, m, n, p, q, u) {
  return this.k.Ba ? this.k.Ba(a, b, c, d, e, f, h, l, k, m, n, p, q, u) : this.k.call(null, a, b, c, d, e, f, h, l, k, m, n, p, q, u);
};
g.Ca = function(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x) {
  return this.k.Ca ? this.k.Ca(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x) : this.k.call(null, a, b, c, d, e, f, h, l, k, m, n, p, q, u, x);
};
g.Da = function(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A) {
  return this.k.Da ? this.k.Da(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A) : this.k.call(null, a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A);
};
g.Ea = function(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E) {
  return this.k.Ea ? this.k.Ea(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E) : this.k.call(null, a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E);
};
g.Fa = function(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H) {
  return this.k.Fa ? this.k.Fa(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H) : this.k.call(null, a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H);
};
g.Ga = function(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q) {
  return this.k.Ga ? this.k.Ga(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q) : this.k.call(null, a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q);
};
g.Ha = function(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q, T) {
  return this.k.Ha ? this.k.Ha(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q, T) : this.k.call(null, a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q, T);
};
g.Kb = function(a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q, T, pa) {
  var ab = this.k;
  return nc.mb ? nc.mb(ab, a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q, T, pa) : nc.call(null, ab, a, b, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q, T, pa);
};
g.Hb = !0;
g.O = function(a, b) {
  return new mc(this.k, b);
};
g.L = function() {
  return this.meta;
};
function oc(a, b) {
  return lc(a) && !(a ? a.m & 262144 || a.ec || (a.m ? 0 : v(Za, a)) : v(Za, a)) ? new mc(a, b) : null == a ? null : bb(a, b);
}
function pc(a) {
  var b = null != a;
  return(b ? a ? a.m & 131072 || a.Nb || (a.m ? 0 : v(Xa, a)) : v(Xa, a) : b) ? Ya(a) : null;
}
function qc(a) {
  var b;
  (b = null == a) || (a = F(a), b = t(a) ? !1 : !0);
  return b;
}
function rc(a) {
  return null == a ? !1 : a ? a.m & 4096 || a.cc ? !0 : a.m ? !1 : v(Sa, a) : v(Sa, a);
}
function sc(a) {
  return null == a ? !1 : a ? a.m & 1024 || a.Lb ? !0 : a.m ? !1 : v(Na, a) : v(Na, a);
}
function tc(a) {
  return a ? a.m & 16384 || a.dc ? !0 : a.m ? !1 : v(Ta, a) : v(Ta, a);
}
function uc(a) {
  return a ? a.D & 512 || a.Zb ? !0 : !1 : !1;
}
function vc(a) {
  var b = [];
  ea(a, function(a, b) {
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
  return t(a) ? !0 : !1;
}
function Ac(a, b) {
  return P.i(a, b, yc) === yc ? !1 : !0;
}
function Pb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (sa(a) === sa(b)) {
    return a && (a.D & 2048 || a.kb) ? a.lb(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  throw Error("compare on non-nil objects of different types");
}
var Cc = function() {
  function a(a, b, c, h) {
    for (;;) {
      var l = Pb(O.e(a, h), O.e(b, h));
      if (0 === l && h + 1 < c) {
        h += 1;
      } else {
        return l;
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
}(), Ec = function() {
  function a(a, b, c) {
    for (c = F(c);;) {
      if (c) {
        var h = G(c);
        b = a.e ? a.e(b, h) : a.call(null, b, h);
        if (Wb(b)) {
          return Wa(b);
        }
        c = K(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = F(b);
    if (c) {
      var h = G(c), c = K(c);
      return Dc.i ? Dc.i(a, h, c) : Dc.call(null, a, h, c);
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
}(), Dc = function() {
  function a(a, b, c) {
    return c && (c.m & 524288 || c.Pb) ? c.Y(null, a, b) : c instanceof Array ? Zb.i(c, a, b) : "string" === typeof c ? Zb.i(c, a, b) : v(cb, c) ? db.i(c, a, b) : Ec.i(a, b, c);
  }
  function b(a, b) {
    return b && (b.m & 524288 || b.Pb) ? b.X(null, a) : b instanceof Array ? Zb.e(b, a) : "string" === typeof b ? Zb.e(b, a) : v(cb, b) ? db.e(b, a) : Ec.e(a, b);
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
function Fc(a) {
  return a;
}
var Gc = function() {
  function a(a, b, c, h) {
    a = a.f ? a.f(b) : a.call(null, b);
    c = Dc.i(a, c, h);
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
function Hc(a) {
  return a - 1;
}
function Ic(a) {
  return 0 <= a ? Math.floor.f ? Math.floor.f(a) : Math.floor.call(null, a) : Math.ceil.f ? Math.ceil.f(a) : Math.ceil.call(null, a);
}
function Jc(a) {
  return Ic((a - a % 2) / 2);
}
var Kc = function() {
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
function Lc(a) {
  return Ic(Kc.f(a));
}
function Mc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var y = function() {
  function a(a) {
    return null == a ? "" : "" + a;
  }
  var b = null, c = function() {
    function a(b, d) {
      var l = null;
      1 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, l);
    }
    function c(a, d) {
      for (var e = new ga(b.f(a)), k = d;;) {
        if (t(k)) {
          e = e.append(b.f(G(k))), k = K(k);
        } else {
          return e.toString();
        }
      }
    }
    a.B = 1;
    a.s = function(a) {
      var b = G(a);
      a = I(a);
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
        return c.n(b, L(arguments, 1));
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
function dc(a, b) {
  var c;
  if (b ? b.m & 16777216 || b.bc || (b.m ? 0 : v(jb, b)) : v(jb, b)) {
    if (ac(a) && ac(b) && N(a) !== N(b)) {
      c = !1;
    } else {
      a: {
        c = F(a);
        for (var d = F(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && Ob.e(G(c), G(d))) {
            c = K(c), d = K(d);
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
function Nc(a) {
  var b = 0;
  for (a = F(a);;) {
    if (a) {
      var c = G(a), b = (b + (Lb(function() {
        var a = c;
        return Oc.f ? Oc.f(a) : Oc.call(null, a);
      }()) ^ Lb(function() {
        var a = c;
        return Pc.f ? Pc.f(a) : Pc.call(null, a);
      }()))) % 4503599627370496;
      a = K(a);
    } else {
      return b;
    }
  }
}
function Qc(a, b, c, d, e) {
  this.meta = a;
  this.first = b;
  this.Ma = c;
  this.count = d;
  this.q = e;
  this.m = 65937646;
  this.D = 8192;
}
g = Qc.prototype;
g.toString = function() {
  return Bb(this);
};
g.L = function() {
  return this.meta;
};
g.ga = function() {
  return 1 === this.count ? null : this.Ma;
};
g.P = function() {
  return this.count;
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Tb(this);
};
g.F = function(a, b) {
  return dc(this, b);
};
g.V = function() {
  return J;
};
g.X = function(a, b) {
  return Ec.e(b, this);
};
g.Y = function(a, b, c) {
  return Ec.i(b, c, this);
};
g.Z = function() {
  return this.first;
};
g.ia = function() {
  return 1 === this.count ? J : this.Ma;
};
g.N = function() {
  return this;
};
g.O = function(a, b) {
  return new Qc(b, this.first, this.Ma, this.count, this.q);
};
g.M = function(a, b) {
  return new Qc(this.meta, b, this, this.count + 1, null);
};
function Rc(a) {
  this.meta = a;
  this.m = 65937614;
  this.D = 8192;
}
g = Rc.prototype;
g.toString = function() {
  return Bb(this);
};
g.L = function() {
  return this.meta;
};
g.ga = function() {
  return null;
};
g.P = function() {
  return 0;
};
g.I = function() {
  return 0;
};
g.F = function(a, b) {
  return dc(this, b);
};
g.V = function() {
  return this;
};
g.X = function(a, b) {
  return Ec.e(b, this);
};
g.Y = function(a, b, c) {
  return Ec.i(b, c, this);
};
g.Z = function() {
  return null;
};
g.ia = function() {
  return J;
};
g.N = function() {
  return null;
};
g.O = function(a, b) {
  return new Rc(b);
};
g.M = function(a, b) {
  return new Qc(this.meta, b, null, 1, null);
};
var J = new Rc(null), Sc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Rb && 0 === a.A) {
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
    for (var e = J;;) {
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
    a = F(a);
    return b(a);
  };
  a.n = b;
  return a;
}();
function Tc(a, b, c, d) {
  this.meta = a;
  this.first = b;
  this.Ma = c;
  this.q = d;
  this.m = 65929452;
  this.D = 8192;
}
g = Tc.prototype;
g.toString = function() {
  return Bb(this);
};
g.L = function() {
  return this.meta;
};
g.ga = function() {
  return null == this.Ma ? null : F(this.Ma);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Tb(this);
};
g.F = function(a, b) {
  return dc(this, b);
};
g.V = function() {
  return oc(J, this.meta);
};
g.X = function(a, b) {
  return Ec.e(b, this);
};
g.Y = function(a, b, c) {
  return Ec.i(b, c, this);
};
g.Z = function() {
  return this.first;
};
g.ia = function() {
  return null == this.Ma ? J : this.Ma;
};
g.N = function() {
  return this;
};
g.O = function(a, b) {
  return new Tc(b, this.first, this.Ma, this.q);
};
g.M = function(a, b) {
  return new Tc(null, b, this, this.q);
};
function M(a, b) {
  var c = null == b;
  return(c ? c : b && (b.m & 64 || b.cb)) ? new Tc(null, a, b, null) : new Tc(null, a, F(b), null);
}
function R(a, b, c, d) {
  this.ra = a;
  this.name = b;
  this.$ = c;
  this.Va = d;
  this.m = 2153775105;
  this.D = 4096;
}
g = R.prototype;
g.H = function(a, b) {
  return C(b, ":" + y.f(this.$));
};
g.I = function() {
  var a = this.Va;
  return null != a ? a : this.Va = a = Mb(Gb(this.name), Kb(this.ra)) + 2654435769 | 0;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return P.e(c, this);
      case 3:
        return P.i(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return P.e(c, this);
  };
  a.i = function(a, c, d) {
    return P.i(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ua(b)));
};
g.f = function(a) {
  return P.e(a, this);
};
g.e = function(a, b) {
  return P.i(a, this, b);
};
g.F = function(a, b) {
  return b instanceof R ? this.$ === b.$ : !1;
};
g.toString = function() {
  return ":" + y.f(this.$);
};
function S(a, b) {
  return a === b ? !0 : a instanceof R && b instanceof R ? a.$ === b.$ : !1;
}
var Vc = function() {
  function a(a, b) {
    return new R(a, b, "" + y.f(t(a) ? "" + y.f(a) + "/" : null) + y.f(b), null);
  }
  function b(a) {
    if (a instanceof R) {
      return a;
    }
    if (a instanceof Qb) {
      var b;
      if (a && (a.D & 4096 || a.Ob)) {
        b = a.ra;
      } else {
        throw Error("Doesn't support namespace: " + y.f(a));
      }
      return new R(b, Uc.f ? Uc.f(a) : Uc.call(null, a), a.Ra, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new R(b[0], b[1], a, null) : new R(null, b[0], a, null)) : null;
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
function U(a, b, c, d) {
  this.meta = a;
  this.Ya = b;
  this.S = c;
  this.q = d;
  this.D = 0;
  this.m = 32374988;
}
g = U.prototype;
g.toString = function() {
  return Bb(this);
};
function Wc(a) {
  null != a.Ya && (a.S = a.Ya.C ? a.Ya.C() : a.Ya.call(null), a.Ya = null);
  return a.S;
}
g.L = function() {
  return this.meta;
};
g.ga = function() {
  ib(this);
  return null == this.S ? null : K(this.S);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Tb(this);
};
g.F = function(a, b) {
  return dc(this, b);
};
g.V = function() {
  return oc(J, this.meta);
};
g.X = function(a, b) {
  return Ec.e(b, this);
};
g.Y = function(a, b, c) {
  return Ec.i(b, c, this);
};
g.Z = function() {
  ib(this);
  return null == this.S ? null : G(this.S);
};
g.ia = function() {
  ib(this);
  return null != this.S ? I(this.S) : J;
};
g.N = function() {
  Wc(this);
  if (null == this.S) {
    return null;
  }
  for (var a = this.S;;) {
    if (a instanceof U) {
      a = Wc(a);
    } else {
      return this.S = a, F(this.S);
    }
  }
};
g.O = function(a, b) {
  return new U(b, this.Ya, this.S, this.q);
};
g.M = function(a, b) {
  return M(b, this);
};
function Xc(a, b) {
  this.qb = a;
  this.end = b;
  this.D = 0;
  this.m = 2;
}
Xc.prototype.P = function() {
  return this.end;
};
Xc.prototype.add = function(a) {
  this.qb[this.end] = a;
  return this.end += 1;
};
Xc.prototype.T = function() {
  var a = new Yc(this.qb, 0, this.end);
  this.qb = null;
  return a;
};
function Zc(a) {
  return new Xc(Array(a), 0);
}
function Yc(a, b, c) {
  this.j = a;
  this.off = b;
  this.end = c;
  this.D = 0;
  this.m = 524306;
}
g = Yc.prototype;
g.X = function(a, b) {
  return Zb.t(this.j, b, this.j[this.off], this.off + 1);
};
g.Y = function(a, b, c) {
  return Zb.t(this.j, b, c, this.off);
};
g.Ab = function() {
  if (this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Yc(this.j, this.off + 1, this.end);
};
g.W = function(a, b) {
  return this.j[this.off + b];
};
g.ja = function(a, b, c) {
  return 0 <= b && b < this.end - this.off ? this.j[this.off + b] : c;
};
g.P = function() {
  return this.end - this.off;
};
var $c = function() {
  function a(a, b, c) {
    return new Yc(a, b, c);
  }
  function b(a, b) {
    return new Yc(a, b, a.length);
  }
  function c(a) {
    return new Yc(a, 0, a.length);
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
  this.T = a;
  this.va = b;
  this.meta = c;
  this.q = d;
  this.m = 31850732;
  this.D = 1536;
}
g = ad.prototype;
g.toString = function() {
  return Bb(this);
};
g.L = function() {
  return this.meta;
};
g.ga = function() {
  if (1 < ya(this.T)) {
    return new ad(tb(this.T), this.va, this.meta, null);
  }
  var a = ib(this.va);
  return null == a ? null : a;
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Tb(this);
};
g.F = function(a, b) {
  return dc(this, b);
};
g.V = function() {
  return oc(J, this.meta);
};
g.Z = function() {
  return z.e(this.T, 0);
};
g.ia = function() {
  return 1 < ya(this.T) ? new ad(tb(this.T), this.va, this.meta, null) : null == this.va ? J : this.va;
};
g.N = function() {
  return this;
};
g.tb = function() {
  return this.T;
};
g.ub = function() {
  return null == this.va ? J : this.va;
};
g.O = function(a, b) {
  return new ad(this.T, this.va, b, this.q);
};
g.M = function(a, b) {
  return M(b, this);
};
g.sb = function() {
  return null == this.va ? null : this.va;
};
function bd(a, b) {
  return 0 === ya(a) ? b : new ad(a, b, null, null);
}
function cd(a, b) {
  a.add(b);
}
function dd(a) {
  for (var b = [];;) {
    if (F(a)) {
      b.push(G(a)), a = K(a);
    } else {
      return b;
    }
  }
}
function ed(a, b) {
  if (ac(a)) {
    return N(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && F(c)) {
      c = K(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var gd = function fd(b) {
  return null == b ? null : null == K(b) ? F(G(b)) : M(G(b), fd(K(b)));
}, id = function() {
  function a(a, b) {
    return new U(null, function() {
      var c = F(a);
      return c ? uc(c) ? bd(ub(c), d.e(vb(c), b)) : M(G(c), d.e(I(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new U(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new U(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = L(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function p(a, b) {
        return new U(null, function() {
          var c = F(a);
          return c ? uc(c) ? bd(ub(c), p(vb(c), b)) : M(G(c), p(I(c), b)) : t(b) ? p(G(b), K(b)) : null;
        }, null, null);
      }(d.e(a, c), e);
    }
    a.B = 2;
    a.s = function(a) {
      var c = G(a);
      a = K(a);
      var d = G(a);
      a = I(a);
      return b(c, d, a);
    };
    a.n = b;
    return a;
  }(), d = function(d, h, l) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, h);
      default:
        return e.n(d, h, L(arguments, 2));
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
}(), jd = function() {
  function a(a, b, c, d) {
    return M(a, M(b, M(c, d)));
  }
  function b(a, b, c) {
    return M(a, M(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, n) {
      var p = null;
      4 < arguments.length && (p = L(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, p);
    }
    function b(a, c, d, e, f) {
      return M(a, M(c, M(d, M(e, gd(f)))));
    }
    a.B = 4;
    a.s = function(a) {
      var c = G(a);
      a = K(a);
      var d = G(a);
      a = K(a);
      var e = G(a);
      a = K(a);
      var n = G(a);
      a = I(a);
      return b(c, d, e, n, a);
    };
    a.n = b;
    return a;
  }(), c = function(c, f, h, l, k) {
    switch(arguments.length) {
      case 1:
        return F(c);
      case 2:
        return M(c, f);
      case 3:
        return b.call(this, c, f, h);
      case 4:
        return a.call(this, c, f, h, l);
      default:
        return d.n(c, f, h, l, L(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.B = 4;
  c.s = d.s;
  c.f = function(a) {
    return F(a);
  };
  c.e = function(a, b) {
    return M(a, b);
  };
  c.i = b;
  c.t = a;
  c.n = d.n;
  return c;
}(), kd = function() {
  function a() {
    return nb(fc);
  }
  var b = null, c = function() {
    function a(c, d, l) {
      var k = null;
      2 < arguments.length && (k = L(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = ob(a, c), t(d)) {
          c = G(d), d = K(d);
        } else {
          return a;
        }
      }
    }
    a.B = 2;
    a.s = function(a) {
      var c = G(a);
      a = K(a);
      var d = G(a);
      a = I(a);
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
        return ob(b, e);
      default:
        return c.n(b, e, L(arguments, 2));
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
    return ob(a, b);
  };
  b.n = c.n;
  return b;
}(), ld = function() {
  var a = null, b = function() {
    function a(c, f, h, l) {
      var k = null;
      3 < arguments.length && (k = L(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, h, k);
    }
    function b(a, c, d, l) {
      for (;;) {
        if (a = qb(a, c, d), t(l)) {
          c = G(l), d = G(K(l)), l = K(K(l));
        } else {
          return a;
        }
      }
    }
    a.B = 3;
    a.s = function(a) {
      var c = G(a);
      a = K(a);
      var h = G(a);
      a = K(a);
      var l = G(a);
      a = I(a);
      return b(c, h, l, a);
    };
    a.n = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return qb(a, d, e);
      default:
        return b.n(a, d, e, L(arguments, 3));
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
function md(a, b, c) {
  var d = F(c);
  if (0 === b) {
    return a.C ? a.C() : a.call(null);
  }
  c = Fa(d);
  var e = Ga(d);
  if (1 === b) {
    return a.f ? a.f(c) : a.f ? a.f(c) : a.call(null, c);
  }
  var d = Fa(e), f = Ga(e);
  if (2 === b) {
    return a.e ? a.e(c, d) : a.e ? a.e(c, d) : a.call(null, c, d);
  }
  var e = Fa(f), h = Ga(f);
  if (3 === b) {
    return a.i ? a.i(c, d, e) : a.i ? a.i(c, d, e) : a.call(null, c, d, e);
  }
  var f = Fa(h), l = Ga(h);
  if (4 === b) {
    return a.t ? a.t(c, d, e, f) : a.t ? a.t(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = Fa(l), k = Ga(l);
  if (5 === b) {
    return a.R ? a.R(c, d, e, f, h) : a.R ? a.R(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var l = Fa(k), m = Ga(k);
  if (6 === b) {
    return a.fa ? a.fa(c, d, e, f, h, l) : a.fa ? a.fa(c, d, e, f, h, l) : a.call(null, c, d, e, f, h, l);
  }
  var k = Fa(m), n = Ga(m);
  if (7 === b) {
    return a.ma ? a.ma(c, d, e, f, h, l, k) : a.ma ? a.ma(c, d, e, f, h, l, k) : a.call(null, c, d, e, f, h, l, k);
  }
  var m = Fa(n), p = Ga(n);
  if (8 === b) {
    return a.Ia ? a.Ia(c, d, e, f, h, l, k, m) : a.Ia ? a.Ia(c, d, e, f, h, l, k, m) : a.call(null, c, d, e, f, h, l, k, m);
  }
  var n = Fa(p), q = Ga(p);
  if (9 === b) {
    return a.Ja ? a.Ja(c, d, e, f, h, l, k, m, n) : a.Ja ? a.Ja(c, d, e, f, h, l, k, m, n) : a.call(null, c, d, e, f, h, l, k, m, n);
  }
  var p = Fa(q), u = Ga(q);
  if (10 === b) {
    return a.xa ? a.xa(c, d, e, f, h, l, k, m, n, p) : a.xa ? a.xa(c, d, e, f, h, l, k, m, n, p) : a.call(null, c, d, e, f, h, l, k, m, n, p);
  }
  var q = Fa(u), x = Ga(u);
  if (11 === b) {
    return a.ya ? a.ya(c, d, e, f, h, l, k, m, n, p, q) : a.ya ? a.ya(c, d, e, f, h, l, k, m, n, p, q) : a.call(null, c, d, e, f, h, l, k, m, n, p, q);
  }
  var u = Fa(x), A = Ga(x);
  if (12 === b) {
    return a.za ? a.za(c, d, e, f, h, l, k, m, n, p, q, u) : a.za ? a.za(c, d, e, f, h, l, k, m, n, p, q, u) : a.call(null, c, d, e, f, h, l, k, m, n, p, q, u);
  }
  var x = Fa(A), E = Ga(A);
  if (13 === b) {
    return a.Aa ? a.Aa(c, d, e, f, h, l, k, m, n, p, q, u, x) : a.Aa ? a.Aa(c, d, e, f, h, l, k, m, n, p, q, u, x) : a.call(null, c, d, e, f, h, l, k, m, n, p, q, u, x);
  }
  var A = Fa(E), H = Ga(E);
  if (14 === b) {
    return a.Ba ? a.Ba(c, d, e, f, h, l, k, m, n, p, q, u, x, A) : a.Ba ? a.Ba(c, d, e, f, h, l, k, m, n, p, q, u, x, A) : a.call(null, c, d, e, f, h, l, k, m, n, p, q, u, x, A);
  }
  var E = Fa(H), Q = Ga(H);
  if (15 === b) {
    return a.Ca ? a.Ca(c, d, e, f, h, l, k, m, n, p, q, u, x, A, E) : a.Ca ? a.Ca(c, d, e, f, h, l, k, m, n, p, q, u, x, A, E) : a.call(null, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E);
  }
  var H = Fa(Q), T = Ga(Q);
  if (16 === b) {
    return a.Da ? a.Da(c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H) : a.Da ? a.Da(c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H) : a.call(null, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H);
  }
  var Q = Fa(T), pa = Ga(T);
  if (17 === b) {
    return a.Ea ? a.Ea(c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q) : a.Ea ? a.Ea(c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q) : a.call(null, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q);
  }
  var T = Fa(pa), ab = Ga(pa);
  if (18 === b) {
    return a.Fa ? a.Fa(c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q, T) : a.Fa ? a.Fa(c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q, T) : a.call(null, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q, T);
  }
  pa = Fa(ab);
  ab = Ga(ab);
  if (19 === b) {
    return a.Ga ? a.Ga(c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q, T, pa) : a.Ga ? a.Ga(c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q, T, pa) : a.call(null, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q, T, pa);
  }
  var D = Fa(ab);
  Ga(ab);
  if (20 === b) {
    return a.Ha ? a.Ha(c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q, T, pa, D) : a.Ha ? a.Ha(c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q, T, pa, D) : a.call(null, c, d, e, f, h, l, k, m, n, p, q, u, x, A, E, H, Q, T, pa, D);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var nc = function() {
  function a(a, b, c, d, e) {
    b = jd.t(b, c, d, e);
    c = a.B;
    return a.s ? (d = ed(b, c + 1), d <= c ? md(a, d, b) : a.s(b)) : a.apply(a, dd(b));
  }
  function b(a, b, c, d) {
    b = jd.i(b, c, d);
    c = a.B;
    return a.s ? (d = ed(b, c + 1), d <= c ? md(a, d, b) : a.s(b)) : a.apply(a, dd(b));
  }
  function c(a, b, c) {
    b = jd.e(b, c);
    c = a.B;
    if (a.s) {
      var d = ed(b, c + 1);
      return d <= c ? md(a, d, b) : a.s(b);
    }
    return a.apply(a, dd(b));
  }
  function d(a, b) {
    var c = a.B;
    if (a.s) {
      var d = ed(b, c + 1);
      return d <= c ? md(a, d, b) : a.s(b);
    }
    return a.apply(a, dd(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, u) {
      var x = null;
      5 < arguments.length && (x = L(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, x);
    }
    function b(a, c, d, e, f, h) {
      c = M(c, M(d, M(e, M(f, gd(h)))));
      d = a.B;
      return a.s ? (e = ed(c, d + 1), e <= d ? md(a, e, c) : a.s(c)) : a.apply(a, dd(c));
    }
    a.B = 5;
    a.s = function(a) {
      var c = G(a);
      a = K(a);
      var d = G(a);
      a = K(a);
      var e = G(a);
      a = K(a);
      var f = G(a);
      a = K(a);
      var h = G(a);
      a = I(a);
      return b(c, d, e, f, h, a);
    };
    a.n = b;
    return a;
  }(), e = function(e, l, k, m, n, p) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, l);
      case 3:
        return c.call(this, e, l, k);
      case 4:
        return b.call(this, e, l, k, m);
      case 5:
        return a.call(this, e, l, k, m, n);
      default:
        return f.n(e, l, k, m, n, L(arguments, 5));
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
function nd(a) {
  return F(a) ? a : null;
}
function od(a, b) {
  for (;;) {
    if (null == F(b)) {
      return!0;
    }
    var c;
    c = G(b);
    c = a.f ? a.f(c) : a.call(null, c);
    if (t(c)) {
      c = a;
      var d = K(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
var pd = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = L(Array.prototype.slice.call(arguments, 0), 0));
        return n.call(this, b);
      }
      function n(e) {
        return nc.R(a, b, c, d, e);
      }
      e.B = 0;
      e.s = function(a) {
        a = F(a);
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
        0 < arguments.length && (b = L(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return nc.t(a, b, c, d);
      }
      d.B = 0;
      d.s = function(a) {
        a = F(a);
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
        0 < arguments.length && (b = L(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return nc.i(a, b, c);
      }
      c.B = 0;
      c.s = function(a) {
        a = F(a);
        return d(a);
      };
      c.n = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, p) {
      var q = null;
      4 < arguments.length && (q = L(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, q);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = L(Array.prototype.slice.call(arguments, 0), 0));
          return h.call(this, c);
        }
        function h(b) {
          return nc.R(a, c, d, e, id.e(f, b));
        }
        b.B = 0;
        b.s = function(a) {
          a = F(a);
          return h(a);
        };
        b.n = h;
        return b;
      }();
    }
    a.B = 4;
    a.s = function(a) {
      var c = G(a);
      a = K(a);
      var d = G(a);
      a = K(a);
      var e = G(a);
      a = K(a);
      var f = G(a);
      a = I(a);
      return b(c, d, e, f, a);
    };
    a.n = b;
    return a;
  }(), d = function(d, h, l, k, m) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, l);
      case 4:
        return a.call(this, d, h, l, k);
      default:
        return e.n(d, h, l, k, L(arguments, 4));
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
function qd(a, b, c, d) {
  this.state = a;
  this.meta = b;
  this.Yb = c;
  this.Gb = d;
  this.m = 6455296;
  this.D = 16386;
}
g = qd.prototype;
g.I = function() {
  return this[ba] || (this[ba] = ++ca);
};
g.Eb = function(a, b, c) {
  for (var d = F(this.Gb), e = null, f = 0, h = 0;;) {
    if (h < f) {
      a = e.W(null, h);
      var l = O.i(a, 0, null);
      a = O.i(a, 1, null);
      var k = b, m = c;
      a.t ? a.t(l, this, k, m) : a.call(null, l, this, k, m);
      h += 1;
    } else {
      if (a = F(d)) {
        d = a, uc(d) ? (e = ub(d), d = vb(d), a = e, f = N(e), e = a) : (a = G(d), l = O.i(a, 0, null), a = O.i(a, 1, null), e = l, f = b, h = c, a.t ? a.t(e, this, f, h) : a.call(null, e, this, f, h), d = K(d), e = null, f = 0), h = 0;
      } else {
        return null;
      }
    }
  }
};
g.L = function() {
  return this.meta;
};
g.vb = function() {
  return this.state;
};
g.F = function(a, b) {
  return this === b;
};
var td = function() {
  function a(a) {
    return new qd(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var l = null;
      1 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, l);
    }
    function b(a, c) {
      var d = (null == c ? 0 : c ? c.m & 64 || c.cb || (c.m ? 0 : v(Ea, c)) : v(Ea, c)) ? nc.e(rd, c) : c, e = P.e(d, sd), d = P.e(d, oa);
      return new qd(a, d, e, null);
    }
    a.B = 1;
    a.s = function(a) {
      var c = G(a);
      a = I(a);
      return b(c, a);
    };
    a.n = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.n(b, L(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 1;
  b.s = c.s;
  b.f = a;
  b.n = c.n;
  return b;
}();
function ud(a, b) {
  if (a instanceof qd) {
    var c = a.Yb;
    if (null != c && !t(c.f ? c.f(b) : c.call(null, b))) {
      throw Error("Assert failed: Validator rejected reference state\n" + y.f(function() {
        var a = Sc(new Qb(null, "validate", "validate", 1439230700, null), new Qb(null, "new-value", "new-value", -1567397401, null));
        return vd.f ? vd.f(a) : vd.call(null, a);
      }()));
    }
    c = a.state;
    a.state = b;
    null != a.Gb && mb(a, c, b);
    return b;
  }
  return xb(a, b);
}
var wd = function() {
  function a(a, b, c, d) {
    if (a instanceof qd) {
      var e = a.state;
      b = b.i ? b.i(e, c, d) : b.call(null, e, c, d);
      a = ud(a, b);
    } else {
      a = yb.t(a, b, c, d);
    }
    return a;
  }
  function b(a, b, c) {
    if (a instanceof qd) {
      var d = a.state;
      b = b.e ? b.e(d, c) : b.call(null, d, c);
      a = ud(a, b);
    } else {
      a = yb.i(a, b, c);
    }
    return a;
  }
  function c(a, b) {
    var c;
    a instanceof qd ? (c = a.state, c = b.f ? b.f(c) : b.call(null, c), c = ud(a, c)) : c = yb.e(a, b);
    return c;
  }
  var d = null, e = function() {
    function a(c, d, e, f, p) {
      var q = null;
      4 < arguments.length && (q = L(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, q);
    }
    function b(a, c, d, e, f) {
      return a instanceof qd ? ud(a, nc.R(c, a.state, d, e, f)) : yb.R(a, c, d, e, f);
    }
    a.B = 4;
    a.s = function(a) {
      var c = G(a);
      a = K(a);
      var d = G(a);
      a = K(a);
      var e = G(a);
      a = K(a);
      var f = G(a);
      a = I(a);
      return b(c, d, e, f, a);
    };
    a.n = b;
    return a;
  }(), d = function(d, h, l, k, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, l);
      case 4:
        return a.call(this, d, h, l, k);
      default:
        return e.n(d, h, l, k, L(arguments, 4));
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
}(), xd = function() {
  function a(a, b, c, d) {
    return new U(null, function() {
      var f = F(b), p = F(c), q = F(d);
      if (f && p && q) {
        var u = M, x;
        x = G(f);
        var A = G(p), E = G(q);
        x = a.i ? a.i(x, A, E) : a.call(null, x, A, E);
        f = u(x, e.t(a, I(f), I(p), I(q)));
      } else {
        f = null;
      }
      return f;
    }, null, null);
  }
  function b(a, b, c) {
    return new U(null, function() {
      var d = F(b), f = F(c);
      if (d && f) {
        var p = M, q;
        q = G(d);
        var u = G(f);
        q = a.e ? a.e(q, u) : a.call(null, q, u);
        d = p(q, e.i(a, I(d), I(f)));
      } else {
        d = null;
      }
      return d;
    }, null, null);
  }
  function c(a, b) {
    return new U(null, function() {
      var c = F(b);
      if (c) {
        if (uc(c)) {
          for (var d = ub(c), f = N(d), p = Zc(f), q = 0;;) {
            if (q < f) {
              cd(p, function() {
                var b = z.e(d, q);
                return a.f ? a.f(b) : a.call(null, b);
              }()), q += 1;
            } else {
              break;
            }
          }
          return bd(p.T(), e.e(a, vb(c)));
        }
        return M(function() {
          var b = G(c);
          return a.f ? a.f(b) : a.call(null, b);
        }(), e.e(a, I(c)));
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
            2 < arguments.length && (f = L(Array.prototype.slice.call(arguments, 2), 0));
            return d.call(this, a, b, f);
          }
          function d(c, e, f) {
            e = nc.i(a, e, f);
            return b.e ? b.e(c, e) : b.call(null, c, e);
          }
          c.B = 2;
          c.s = function(a) {
            var b = G(a);
            a = K(a);
            var c = G(a);
            a = I(a);
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
              return q.n(a, b, L(arguments, 2));
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
      4 < arguments.length && (u = L(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, u);
    }
    function b(a, c, d, f, h) {
      var l = function A(a) {
        return new U(null, function() {
          var b = e.e(F, a);
          return od(Fc, b) ? M(e.e(G, b), A(e.e(I, b))) : null;
        }, null, null);
      };
      return e.e(function() {
        return function(b) {
          return nc.e(a, b);
        };
      }(l), l(gc.n(h, f, L([d, c], 0))));
    }
    a.B = 4;
    a.s = function(a) {
      var c = G(a);
      a = K(a);
      var d = G(a);
      a = K(a);
      var e = G(a);
      a = K(a);
      var f = G(a);
      a = I(a);
      return b(c, d, e, f, a);
    };
    a.n = b;
    return a;
  }(), e = function(e, l, k, m, n) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, l);
      case 3:
        return b.call(this, e, l, k);
      case 4:
        return a.call(this, e, l, k, m);
      default:
        return f.n(e, l, k, m, L(arguments, 4));
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
}(), yd = function() {
  function a(a, b) {
    return new U(null, function() {
      if (0 < a) {
        var f = F(b);
        return f ? M(G(f), c.e(a - 1, I(f))) : null;
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, h) {
            var l = Wa(a), k = wd.e(a, Hc), l = 0 < l ? b.e ? b.e(d, h) : b.call(null, d, h) : d;
            return 0 < k ? l : new Vb(l);
          }
          function d(a) {
            return b.f ? b.f(a) : b.call(null, a);
          }
          function k() {
            return b.C ? b.C() : b.call(null);
          }
          var m = null, m = function(a, b) {
            switch(arguments.length) {
              case 0:
                return k.call(this);
              case 1:
                return d.call(this, a);
              case 2:
                return c.call(this, a, b);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          m.C = k;
          m.f = d;
          m.e = c;
          return m;
        }();
      }(td.f(a));
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
    return new U(null, function(c) {
      return function() {
        return c(a, b);
      };
    }(function(a, b) {
      for (;;) {
        var c = F(b);
        if (0 < a && c) {
          var d = a - 1, c = I(c);
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
            var l = Wa(a);
            wd.e(a, Hc);
            return 0 < l ? d : b.e ? b.e(d, h) : b.call(null, d, h);
          }
          function d(a) {
            return b.f ? b.f(a) : b.call(null, a);
          }
          function k() {
            return b.C ? b.C() : b.call(null);
          }
          var m = null, m = function(a, b) {
            switch(arguments.length) {
              case 0:
                return k.call(this);
              case 1:
                return d.call(this, a);
              case 2:
                return c.call(this, a, b);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          m.C = k;
          m.f = d;
          m.e = c;
          return m;
        }();
      }(td.f(a));
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
}(), Ad = function() {
  function a(a, b) {
    return yd.e(a, c.f(b));
  }
  function b(a) {
    return new U(null, function() {
      return M(a, c.f(a));
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
    return yd.e(a, c.f(b));
  }
  function b(a) {
    return new U(null, function() {
      return M(a.C ? a.C() : a.call(null), c.f(a));
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
    return new U(null, function() {
      var f = F(a), h = F(c);
      return f && h ? M(G(f), M(G(h), b.e(I(f), I(h)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var k = null;
      2 < arguments.length && (k = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, k);
    }
    function c(a, d, e) {
      return new U(null, function() {
        var c = xd.e(F, gc.n(e, d, L([a], 0)));
        return od(Fc, c) ? id.e(xd.e(G, c), nc.e(b, xd.e(I, c))) : null;
      }, null, null);
    }
    a.B = 2;
    a.s = function(a) {
      var b = G(a);
      a = K(a);
      var d = G(a);
      a = I(a);
      return c(b, d, a);
    };
    a.n = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.n(b, e, L(arguments, 2));
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
  return zd.e(1, Cd.e(Ad.f(a), b));
}
var Ed = function() {
  function a(a, b) {
    return new U(null, function() {
      var f = F(b);
      if (f) {
        if (uc(f)) {
          for (var h = ub(f), l = N(h), k = Zc(l), m = 0;;) {
            if (m < l) {
              var n;
              n = z.e(h, m);
              n = a.f ? a.f(n) : a.call(null, n);
              t(n) && (n = z.e(h, m), k.add(n));
              m += 1;
            } else {
              break;
            }
          }
          return bd(k.T(), c.e(a, vb(f)));
        }
        h = G(f);
        f = I(f);
        return t(a.f ? a.f(h) : a.call(null, h)) ? M(h, c.e(a, f)) : c.e(a, f);
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function() {
        function c(f, h) {
          return t(a.f ? a.f(h) : a.call(null, h)) ? b.e ? b.e(f, h) : b.call(null, f, h) : f;
        }
        function h(a) {
          return b.f ? b.f(a) : b.call(null, a);
        }
        function l() {
          return b.C ? b.C() : b.call(null);
        }
        var k = null, k = function(a, b) {
          switch(arguments.length) {
            case 0:
              return l.call(this);
            case 1:
              return h.call(this, a);
            case 2:
              return c.call(this, a, b);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        k.C = l;
        k.f = h;
        k.e = c;
        return k;
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
    a && (a.D & 4 || a.Jb) ? (b = Gc.t(b, kd, nb(a), c), b = pb(b), a = oc(b, pc(a))) : a = Gc.t(b, gc, a, c);
    return a;
  }
  function b(a, b) {
    var c;
    null != a ? a && (a.D & 4 || a.Jb) ? (c = Dc.i(ob, nb(a), b), c = pb(c), c = oc(c, pc(a))) : c = Dc.i(Ba, a, b) : c = Dc.i(gc, J, b);
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
}(), V = function() {
  function a(a, b, c) {
    var h = yc;
    for (b = F(b);;) {
      if (b) {
        var l = a;
        if (l ? l.m & 256 || l.Cb || (l.m ? 0 : v(Ja, l)) : v(Ja, l)) {
          a = P.i(a, G(b), h);
          if (h === a) {
            return c;
          }
          b = K(b);
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
}(), Hd = function Gd(b, c, d) {
  var e = O.i(c, 0, null), f;
  a: {
    f = 1;
    for (c = F(c);;) {
      if (c && 0 < f) {
        f -= 1, c = K(c);
      } else {
        f = c;
        break a;
      }
    }
    f = void 0;
  }
  return f ? jc.i(b, e, Gd(P.e(b, e), f, d)) : jc.i(b, e, d);
};
function Id(a, b) {
  this.K = a;
  this.j = b;
}
function Jd(a) {
  return new Id(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Kd(a) {
  a = a.o;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Ld(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Jd(a);
    d.j[0] = c;
    c = d;
    b -= 5;
  }
}
var Od = function Md(b, c, d, e) {
  var f = new Id(d.K, ua(d.j)), h = b.o - 1 >>> c & 31;
  5 === c ? f.j[h] = e : (d = d.j[h], b = null != d ? Md(b, c - 5, d, e) : Ld(null, c - 5, e), f.j[h] = b);
  return f;
};
function Pd(a, b) {
  throw Error("No item " + y.f(a) + " in vector of length " + y.f(b));
}
function Qd(a, b) {
  if (b >= Kd(a)) {
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
  var h = new Id(d.K, ua(d.j));
  if (0 === c) {
    h.j[e & 31] = f;
  } else {
    var l = e >>> c & 31;
    b = Sd(b, c - 5, d.j[l], e, f);
    h.j[l] = b;
  }
  return h;
};
function Ud(a, b, c, d, e, f) {
  this.A = a;
  this.pb = b;
  this.j = c;
  this.v = d;
  this.start = e;
  this.end = f;
}
Ud.prototype.zb = function() {
  return this.A < this.end;
};
Ud.prototype.next = function() {
  32 === this.A - this.pb && (this.j = Qd(this.v, this.A), this.pb += 32);
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
  return Bb(this);
};
g.J = function(a, b) {
  return B.i(this, b, null);
};
g.G = function(a, b, c) {
  return "number" === typeof b ? z.i(this, b, c) : c;
};
g.W = function(a, b) {
  return Rd(this, b)[b & 31];
};
g.ja = function(a, b, c) {
  return 0 <= b && b < this.o ? Qd(this, b)[b & 31] : c;
};
g.yb = function(a, b, c) {
  if (0 <= b && b < this.o) {
    return Kd(this) <= b ? (a = ua(this.ea), a[b & 31] = c, new W(this.meta, this.o, this.shift, this.root, a, null)) : new W(this.meta, this.o, this.shift, Td(this, this.shift, this.root, b, c), this.ea, null);
  }
  if (b === this.o) {
    return Ba(this, c);
  }
  throw Error("Index " + y.f(b) + " out of bounds  [0," + y.f(this.o) + "]");
};
g.nb = function() {
  var a = this.o;
  return new Ud(0, 0, 0 < N(this) ? Qd(this, 0) : null, this, 0, a);
};
g.L = function() {
  return this.meta;
};
g.P = function() {
  return this.o;
};
g.wb = function() {
  return z.e(this, 0);
};
g.xb = function() {
  return z.e(this, 1);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Tb(this);
};
g.F = function(a, b) {
  if (b instanceof W) {
    if (this.o === N(b)) {
      for (var c = zb(this), d = zb(b);;) {
        if (t(c.zb())) {
          var e = c.next(), f = d.next();
          if (!Ob.e(e, f)) {
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
    return dc(this, b);
  }
};
g.bb = function() {
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
  return oc(fc, this.meta);
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
g.ha = function(a, b, c) {
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
    return new Rb(this.ea, 0);
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
  if (32 > this.o - Kd(this)) {
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
  d ? (d = Jd(null), d.j[0] = this.root, e = Ld(null, this.shift, new Id(null, this.ea)), d.j[1] = e) : d = Od(this, this.shift, this.root, new Id(null, this.ea));
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
  return this.call.apply(this, [this].concat(ua(b)));
};
g.f = function(a) {
  return this.W(null, a);
};
g.e = function(a, b) {
  return this.ja(null, a, b);
};
var X = new Id(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), fc = new W(null, 0, 5, X, [], 0);
function Zd(a, b, c, d, e, f) {
  this.la = a;
  this.La = b;
  this.A = c;
  this.off = d;
  this.meta = e;
  this.q = f;
  this.m = 32375020;
  this.D = 1536;
}
g = Zd.prototype;
g.toString = function() {
  return Bb(this);
};
g.L = function() {
  return this.meta;
};
g.ga = function() {
  if (this.off + 1 < this.La.length) {
    var a;
    a = this.la;
    var b = this.La, c = this.A, d = this.off + 1;
    a = Yd.t ? Yd.t(a, b, c, d) : Yd.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return wb(this);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Tb(this);
};
g.F = function(a, b) {
  return dc(this, b);
};
g.V = function() {
  return oc(fc, this.meta);
};
g.X = function(a, b) {
  var c = this;
  return Yb.e(function() {
    var a = c.la, b = c.A + c.off, f = N(c.la);
    return $d.i ? $d.i(a, b, f) : $d.call(null, a, b, f);
  }(), b);
};
g.Y = function(a, b, c) {
  var d = this;
  return Yb.i(function() {
    var a = d.la, b = d.A + d.off, c = N(d.la);
    return $d.i ? $d.i(a, b, c) : $d.call(null, a, b, c);
  }(), b, c);
};
g.Z = function() {
  return this.La[this.off];
};
g.ia = function() {
  if (this.off + 1 < this.La.length) {
    var a;
    a = this.la;
    var b = this.La, c = this.A, d = this.off + 1;
    a = Yd.t ? Yd.t(a, b, c, d) : Yd.call(null, a, b, c, d);
    return null == a ? J : a;
  }
  return vb(this);
};
g.N = function() {
  return this;
};
g.tb = function() {
  return $c.e(this.La, this.off);
};
g.ub = function() {
  var a = this.A + this.La.length;
  if (a < ya(this.la)) {
    var b = this.la, c = Qd(this.la, a);
    return Yd.t ? Yd.t(b, c, a, 0) : Yd.call(null, b, c, a, 0);
  }
  return J;
};
g.O = function(a, b) {
  var c = this.la, d = this.La, e = this.A, f = this.off;
  return Yd.R ? Yd.R(c, d, e, f, b) : Yd.call(null, c, d, e, f, b);
};
g.M = function(a, b) {
  return M(b, this);
};
g.sb = function() {
  var a = this.A + this.La.length;
  if (a < ya(this.la)) {
    var b = this.la, c = Qd(this.la, a);
    return Yd.t ? Yd.t(b, c, a, 0) : Yd.call(null, b, c, a, 0);
  }
  return null;
};
var Yd = function() {
  function a(a, b, c, d, k) {
    return new Zd(a, b, c, d, k, null);
  }
  function b(a, b, c, d) {
    return new Zd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Zd(a, Rd(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, h, l, k) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, h);
      case 4:
        return b.call(this, d, f, h, l);
      case 5:
        return a.call(this, d, f, h, l, k);
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
  return Bb(this);
};
g.J = function(a, b) {
  return B.i(this, b, null);
};
g.G = function(a, b, c) {
  return "number" === typeof b ? z.i(this, b, c) : c;
};
g.W = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Pd(b, this.end - this.start) : z.e(this.v, this.start + b);
};
g.ja = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : z.i(this.v, this.start + b, c);
};
g.yb = function(a, b, c) {
  var d = this.start + b;
  a = this.meta;
  c = jc.i(this.v, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return be.R ? be.R(a, c, b, d, null) : be.call(null, a, c, b, d, null);
};
g.L = function() {
  return this.meta;
};
g.P = function() {
  return this.end - this.start;
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Tb(this);
};
g.F = function(a, b) {
  return dc(this, b);
};
g.V = function() {
  return oc(fc, this.meta);
};
g.X = function(a, b) {
  return Yb.e(this, b);
};
g.Y = function(a, b, c) {
  return Yb.i(this, b, c);
};
g.ha = function(a, b, c) {
  if ("number" === typeof b) {
    return Va(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.N = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : M(z.e(a.v, e), new U(null, function() {
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
  return this.call.apply(this, [this].concat(ua(b)));
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
      var f = N(b);
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
    return c.i(a, b, N(a));
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
  return a === b.K ? b : new Id(a, ua(b.j));
}
function Wd(a) {
  return new Id({}, ua(a.j));
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
    b = null != h ? de(b, c - 5, h, e) : Ld(b.root.K, c - 5, e);
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
  return this.call.apply(this, [this].concat(ua(b)));
};
g.f = function(a) {
  return this.J(null, a);
};
g.e = function(a, b) {
  return this.G(null, a, b);
};
g.J = function(a, b) {
  return B.i(this, b, null);
};
g.G = function(a, b, c) {
  return "number" === typeof b ? z.i(this, b, c) : c;
};
g.W = function(a, b) {
  if (this.root.K) {
    return Rd(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.ja = function(a, b, c) {
  return 0 <= b && b < this.o ? z.e(this, b) : c;
};
g.P = function() {
  if (this.root.K) {
    return this.o;
  }
  throw Error("count after persistent!");
};
g.Db = function(a, b, c) {
  var d = this;
  if (d.root.K) {
    if (0 <= b && b < d.o) {
      return Kd(this) <= b ? d.ea[b & 31] = c : (a = function() {
        return function f(a, l) {
          var k = ce(d.root.K, l);
          if (0 === a) {
            k.j[b & 31] = c;
          } else {
            var m = b >>> a & 31, n = f(a - 5, k.j[m]);
            k.j[m] = n;
          }
          return k;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.o) {
      return ob(this, c);
    }
    throw Error("Index " + y.f(b) + " out of bounds for TransientVector of length" + y.f(d.o));
  }
  throw Error("assoc! after persistent!");
};
g.eb = function(a, b, c) {
  if ("number" === typeof b) {
    return rb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.fb = function(a, b) {
  if (this.root.K) {
    if (32 > this.o - Kd(this)) {
      this.ea[this.o & 31] = b;
    } else {
      var c = new Id(this.root.K, this.ea), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.ea = d;
      if (this.o >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Ld(this.root.K, this.shift, c);
        this.root = new Id(this.root.K, d);
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
g.gb = function() {
  if (this.root.K) {
    this.root.K = null;
    var a = this.o - Kd(this), b = Array(a);
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
  return zc(sc(b) ? N(a) === N(b) ? od(Fc, xd.e(function(a) {
    return Ob.e(P.i(b, G(a), ge), G(K(a)));
  }, a)) : null : null);
}
function ie(a, b) {
  var c = a.j;
  if (b instanceof R) {
    a: {
      for (var d = c.length, e = b.$, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var h = c[f];
        if (h instanceof R && e === h.$) {
          c = f;
          break a;
        }
        f += 2;
      }
      c = void 0;
    }
  } else {
    if (d = "string" == typeof b, t(t(d) ? d : "number" === typeof b)) {
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
      if (b instanceof Qb) {
        a: {
          d = c.length;
          e = b.Ra;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            h = c[f];
            if (h instanceof Qb && e === h.Ra) {
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
              if (Ob.e(b, c[e])) {
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
  this.ca = c;
  this.D = 0;
  this.m = 32374990;
}
g = je.prototype;
g.toString = function() {
  return Bb(this);
};
g.L = function() {
  return this.ca;
};
g.ga = function() {
  return this.A < this.j.length - 2 ? new je(this.j, this.A + 2, this.ca) : null;
};
g.P = function() {
  return(this.j.length - this.A) / 2;
};
g.I = function() {
  return Tb(this);
};
g.F = function(a, b) {
  return dc(this, b);
};
g.V = function() {
  return oc(J, this.ca);
};
g.X = function(a, b) {
  return Ec.e(b, this);
};
g.Y = function(a, b, c) {
  return Ec.i(b, c, this);
};
g.Z = function() {
  return new W(null, 2, 5, X, [this.j[this.A], this.j[this.A + 1]], null);
};
g.ia = function() {
  return this.A < this.j.length - 2 ? new je(this.j, this.A + 2, this.ca) : J;
};
g.N = function() {
  return this;
};
g.O = function(a, b) {
  return new je(this.j, this.A, b);
};
g.M = function(a, b) {
  return M(b, this);
};
function ke(a, b, c) {
  this.j = a;
  this.A = b;
  this.o = c;
}
ke.prototype.zb = function() {
  return this.A < this.o;
};
ke.prototype.next = function() {
  var a = new W(null, 2, 5, X, [this.j[this.A], this.j[this.A + 1]], null);
  this.A += 2;
  return a;
};
function s(a, b, c, d) {
  this.meta = a;
  this.o = b;
  this.j = c;
  this.q = d;
  this.m = 16647951;
  this.D = 8196;
}
g = s.prototype;
g.toString = function() {
  return Bb(this);
};
g.J = function(a, b) {
  return B.i(this, b, null);
};
g.G = function(a, b, c) {
  a = ie(this, b);
  return-1 === a ? c : this.j[a + 1];
};
g.nb = function() {
  return new ke(this.j, 0, 2 * this.o);
};
g.L = function() {
  return this.meta;
};
g.P = function() {
  return this.o;
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Ub(this);
};
g.F = function(a, b) {
  if (b && (b.m & 1024 || b.Lb)) {
    var c = this.j.length;
    if (this.o === b.P(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.G(null, this.j[d], yc);
          if (e !== yc) {
            if (Ob.e(this.j[d + 1], e)) {
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
g.bb = function() {
  return new le({}, this.j.length, ua(this.j));
};
g.V = function() {
  return bb(me, this.meta);
};
g.X = function(a, b) {
  return Ec.e(b, this);
};
g.Y = function(a, b, c) {
  return Ec.i(b, c, this);
};
g.na = function(a, b) {
  if (0 <= ie(this, b)) {
    var c = this.j.length, d = c - 2;
    if (0 === d) {
      return Aa(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new s(this.meta, this.o - 1, d, null);
      }
      Ob.e(b, this.j[e]) || (d[f] = this.j[e], d[f + 1] = this.j[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
g.ha = function(a, b, c) {
  a = ie(this, b);
  if (-1 === a) {
    if (this.o < ne) {
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
      return new s(this.meta, this.o + 1, e, null);
    }
    return bb(La(Fd.e(ic, this), b, c), this.meta);
  }
  if (c === this.j[a + 1]) {
    return this;
  }
  b = ua(this.j);
  b[a + 1] = c;
  return new s(this.meta, this.o, b, null);
};
g.rb = function(a, b) {
  return-1 !== ie(this, b);
};
g.N = function() {
  var a = this.j;
  return 0 <= a.length - 2 ? new je(a, 0, null) : null;
};
g.O = function(a, b) {
  return new s(b, this.o, this.j, this.q);
};
g.M = function(a, b) {
  if (tc(b)) {
    return La(this, z.e(b, 0), z.e(b, 1));
  }
  for (var c = this, d = F(b);;) {
    if (null == d) {
      return c;
    }
    var e = G(d);
    if (tc(e)) {
      c = La(c, z.e(e, 0), z.e(e, 1)), d = K(d);
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
  return this.call.apply(this, [this].concat(ua(b)));
};
g.f = function(a) {
  return this.J(null, a);
};
g.e = function(a, b) {
  return this.G(null, a, b);
};
var me = new s(null, 0, [], null), ne = 8;
function le(a, b, c) {
  this.Wa = a;
  this.$a = b;
  this.j = c;
  this.D = 56;
  this.m = 258;
}
g = le.prototype;
g.eb = function(a, b, c) {
  var d = this;
  if (t(d.Wa)) {
    a = ie(this, b);
    if (-1 === a) {
      return d.$a + 2 <= 2 * ne ? (d.$a += 2, d.j.push(b), d.j.push(c), this) : ld.i(function() {
        var a = d.$a, b = d.j;
        return oe.e ? oe.e(a, b) : oe.call(null, a, b);
      }(), b, c);
    }
    c !== d.j[a + 1] && (d.j[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
g.fb = function(a, b) {
  if (t(this.Wa)) {
    if (b ? b.m & 2048 || b.Mb || (b.m ? 0 : v(Pa, b)) : v(Pa, b)) {
      return qb(this, Oc.f ? Oc.f(b) : Oc.call(null, b), Pc.f ? Pc.f(b) : Pc.call(null, b));
    }
    for (var c = F(b), d = this;;) {
      var e = G(c);
      if (t(e)) {
        var f = e, c = K(c), d = qb(d, function() {
          var a = f;
          return Oc.f ? Oc.f(a) : Oc.call(null, a);
        }(), function() {
          var a = f;
          return Pc.f ? Pc.f(a) : Pc.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.gb = function() {
  if (t(this.Wa)) {
    return this.Wa = !1, new s(null, Jc(this.$a), this.j, null);
  }
  throw Error("persistent! called twice");
};
g.J = function(a, b) {
  return B.i(this, b, null);
};
g.G = function(a, b, c) {
  if (t(this.Wa)) {
    return a = ie(this, b), -1 === a ? c : this.j[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.P = function() {
  if (t(this.Wa)) {
    return Jc(this.$a);
  }
  throw Error("count after persistent!");
};
function oe(a, b) {
  for (var c = nb(ic), d = 0;;) {
    if (d < a) {
      c = ld.i(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function pe() {
  this.oa = !1;
}
function qe(a, b) {
  return a === b ? !0 : S(a, b) ? !0 : Ob.e(a, b);
}
var re = function() {
  function a(a, b, c, h, l) {
    a = ua(a);
    a[b] = c;
    a[h] = l;
    return a;
  }
  function b(a, b, c) {
    a = ua(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, h, l) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, h, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.R = a;
  return c;
}();
function se(a, b) {
  var c = Array(a.length - 2);
  wc(a, 0, c, 0, 2 * b);
  wc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var te = function() {
  function a(a, b, c, h, l, k) {
    a = a.Xa(b);
    a.j[c] = h;
    a.j[l] = k;
    return a;
  }
  function b(a, b, c, h) {
    a = a.Xa(b);
    a.j[c] = h;
    return a;
  }
  var c = null, c = function(c, e, f, h, l, k) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, h);
      case 6:
        return a.call(this, c, e, f, h, l, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.t = b;
  c.fa = a;
  return c;
}();
function ue(a, b, c) {
  this.K = a;
  this.Q = b;
  this.j = c;
}
g = ue.prototype;
g.Xa = function(a) {
  if (a === this.K) {
    return this;
  }
  var b = Mc(this.Q), c = Array(0 > b ? 4 : 2 * (b + 1));
  wc(this.j, 0, c, 0, 2 * b);
  return new ue(a, this.Q, c);
};
g.hb = function() {
  var a = this.j;
  return ve.f ? ve.f(a) : ve.call(null, a);
};
g.Pa = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.Q & e)) {
    return d;
  }
  var f = Mc(this.Q & e - 1), e = this.j[2 * f], f = this.j[2 * f + 1];
  return null == e ? f.Pa(a + 5, b, c, d) : qe(c, e) ? f : d;
};
g.qa = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), l = Mc(this.Q & h - 1);
  if (0 === (this.Q & h)) {
    var k = Mc(this.Q);
    if (2 * k < this.j.length) {
      var m = this.Xa(a), n = m.j;
      f.oa = !0;
      xc(n, 2 * l, n, 2 * (l + 1), 2 * (k - l));
      n[2 * l] = d;
      n[2 * l + 1] = e;
      m.Q |= h;
      return m;
    }
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[c >>> b & 31] = we.qa(a, b + 5, c, d, e, f);
      for (m = l = 0;;) {
        if (32 > l) {
          0 !== (this.Q >>> l & 1) && (h[l] = null != this.j[m] ? we.qa(a, b + 5, Lb(this.j[m]), this.j[m], this.j[m + 1], f) : this.j[m + 1], m += 2), l += 1;
        } else {
          break;
        }
      }
      return new xe(a, k + 1, h);
    }
    n = Array(2 * (k + 4));
    wc(this.j, 0, n, 0, 2 * l);
    n[2 * l] = d;
    n[2 * l + 1] = e;
    wc(this.j, 2 * l, n, 2 * (l + 1), 2 * (k - l));
    f.oa = !0;
    m = this.Xa(a);
    m.j = n;
    m.Q |= h;
    return m;
  }
  var p = this.j[2 * l], q = this.j[2 * l + 1];
  if (null == p) {
    return k = q.qa(a, b + 5, c, d, e, f), k === q ? this : te.t(this, a, 2 * l + 1, k);
  }
  if (qe(d, p)) {
    return e === q ? this : te.t(this, a, 2 * l + 1, e);
  }
  f.oa = !0;
  return te.fa(this, a, 2 * l, null, 2 * l + 1, function() {
    var f = b + 5;
    return ye.ma ? ye.ma(a, f, p, q, c, d, e) : ye.call(null, a, f, p, q, c, d, e);
  }());
};
g.pa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = Mc(this.Q & f - 1);
  if (0 === (this.Q & f)) {
    var l = Mc(this.Q);
    if (16 <= l) {
      f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      f[b >>> a & 31] = we.pa(a + 5, b, c, d, e);
      for (var k = h = 0;;) {
        if (32 > h) {
          0 !== (this.Q >>> h & 1) && (f[h] = null != this.j[k] ? we.pa(a + 5, Lb(this.j[k]), this.j[k], this.j[k + 1], e) : this.j[k + 1], k += 2), h += 1;
        } else {
          break;
        }
      }
      return new xe(null, l + 1, f);
    }
    k = Array(2 * (l + 1));
    wc(this.j, 0, k, 0, 2 * h);
    k[2 * h] = c;
    k[2 * h + 1] = d;
    wc(this.j, 2 * h, k, 2 * (h + 1), 2 * (l - h));
    e.oa = !0;
    return new ue(null, this.Q | f, k);
  }
  var m = this.j[2 * h], n = this.j[2 * h + 1];
  if (null == m) {
    return l = n.pa(a + 5, b, c, d, e), l === n ? this : new ue(null, this.Q, re.i(this.j, 2 * h + 1, l));
  }
  if (qe(c, m)) {
    return d === n ? this : new ue(null, this.Q, re.i(this.j, 2 * h + 1, d));
  }
  e.oa = !0;
  return new ue(null, this.Q, re.R(this.j, 2 * h, null, 2 * h + 1, function() {
    var e = a + 5;
    return ye.fa ? ye.fa(e, m, n, b, c, d) : ye.call(null, e, m, n, b, c, d);
  }()));
};
g.ib = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.Q & d)) {
    return this;
  }
  var e = Mc(this.Q & d - 1), f = this.j[2 * e], h = this.j[2 * e + 1];
  return null == f ? (a = h.ib(a + 5, b, c), a === h ? this : null != a ? new ue(null, this.Q, re.i(this.j, 2 * e + 1, a)) : this.Q === d ? null : new ue(null, this.Q ^ d, se(this.j, e))) : qe(c, f) ? new ue(null, this.Q ^ d, se(this.j, e)) : this;
};
var we = new ue(null, 0, []);
function xe(a, b, c) {
  this.K = a;
  this.o = b;
  this.j = c;
}
g = xe.prototype;
g.Xa = function(a) {
  return a === this.K ? this : new xe(a, this.o, ua(this.j));
};
g.hb = function() {
  var a = this.j;
  return Ae.f ? Ae.f(a) : Ae.call(null, a);
};
g.Pa = function(a, b, c, d) {
  var e = this.j[b >>> a & 31];
  return null != e ? e.Pa(a + 5, b, c, d) : d;
};
g.qa = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, l = this.j[h];
  if (null == l) {
    return a = te.t(this, a, h, we.qa(a, b + 5, c, d, e, f)), a.o += 1, a;
  }
  b = l.qa(a, b + 5, c, d, e, f);
  return b === l ? this : te.t(this, a, h, b);
};
g.pa = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.j[f];
  if (null == h) {
    return new xe(null, this.o + 1, re.i(this.j, f, we.pa(a + 5, b, c, d, e)));
  }
  a = h.pa(a + 5, b, c, d, e);
  return a === h ? this : new xe(null, this.o, re.i(this.j, f, a));
};
g.ib = function(a, b, c) {
  var d = b >>> a & 31, e = this.j[d];
  if (null != e) {
    a = e.ib(a + 5, b, c);
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
                d = new ue(null, h, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new xe(null, this.o - 1, re.i(this.j, d, a));
        }
      } else {
        d = new xe(null, this.o, re.i(this.j, d, a));
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
      if (qe(c, a[d])) {
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
  this.Ka = b;
  this.o = c;
  this.j = d;
}
g = Ce.prototype;
g.Xa = function(a) {
  if (a === this.K) {
    return this;
  }
  var b = Array(2 * (this.o + 1));
  wc(this.j, 0, b, 0, 2 * this.o);
  return new Ce(a, this.Ka, this.o, b);
};
g.hb = function() {
  var a = this.j;
  return ve.f ? ve.f(a) : ve.call(null, a);
};
g.Pa = function(a, b, c, d) {
  a = Be(this.j, this.o, c);
  return 0 > a ? d : qe(c, this.j[a]) ? this.j[a + 1] : d;
};
g.qa = function(a, b, c, d, e, f) {
  if (c === this.Ka) {
    b = Be(this.j, this.o, d);
    if (-1 === b) {
      if (this.j.length > 2 * this.o) {
        return a = te.fa(this, a, 2 * this.o, d, 2 * this.o + 1, e), f.oa = !0, a.o += 1, a;
      }
      c = this.j.length;
      b = Array(c + 2);
      wc(this.j, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.oa = !0;
      f = this.o + 1;
      a === this.K ? (this.j = b, this.o = f, a = this) : a = new Ce(this.K, this.Ka, f, b);
      return a;
    }
    return this.j[b + 1] === e ? this : te.t(this, a, b + 1, e);
  }
  return(new ue(a, 1 << (this.Ka >>> b & 31), [null, this, null, null])).qa(a, b, c, d, e, f);
};
g.pa = function(a, b, c, d, e) {
  return b === this.Ka ? (a = Be(this.j, this.o, c), -1 === a ? (a = 2 * this.o, b = Array(a + 2), wc(this.j, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.oa = !0, new Ce(null, this.Ka, this.o + 1, b)) : Ob.e(this.j[a], d) ? this : new Ce(null, this.Ka, this.o, re.i(this.j, a + 1, d))) : (new ue(null, 1 << (this.Ka >>> a & 31), [null, this])).pa(a, b, c, d, e);
};
g.ib = function(a, b, c) {
  a = Be(this.j, this.o, c);
  return-1 === a ? this : 1 === this.o ? null : new Ce(null, this.Ka, this.o - 1, se(this.j, Jc(a)));
};
var ye = function() {
  function a(a, b, c, h, l, k, m) {
    var n = Lb(c);
    if (n === l) {
      return new Ce(null, n, 2, [c, h, k, m]);
    }
    var p = new pe;
    return we.qa(a, b, n, c, h, p).qa(a, b, l, k, m, p);
  }
  function b(a, b, c, h, l, k) {
    var m = Lb(b);
    if (m === h) {
      return new Ce(null, m, 2, [b, c, l, k]);
    }
    var n = new pe;
    return we.pa(a, m, b, c, n).pa(a, h, l, k, n);
  }
  var c = null, c = function(c, e, f, h, l, k, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, h, l, k);
      case 7:
        return a.call(this, c, e, f, h, l, k, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.fa = b;
  c.ma = a;
  return c;
}();
function De(a, b, c, d, e) {
  this.meta = a;
  this.Qa = b;
  this.A = c;
  this.S = d;
  this.q = e;
  this.D = 0;
  this.m = 32374860;
}
g = De.prototype;
g.toString = function() {
  return Bb(this);
};
g.L = function() {
  return this.meta;
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Tb(this);
};
g.F = function(a, b) {
  return dc(this, b);
};
g.V = function() {
  return oc(J, this.meta);
};
g.X = function(a, b) {
  return Ec.e(b, this);
};
g.Y = function(a, b, c) {
  return Ec.i(b, c, this);
};
g.Z = function() {
  return null == this.S ? new W(null, 2, 5, X, [this.Qa[this.A], this.Qa[this.A + 1]], null) : G(this.S);
};
g.ia = function() {
  if (null == this.S) {
    var a = this.Qa, b = this.A + 2;
    return ve.i ? ve.i(a, b, null) : ve.call(null, a, b, null);
  }
  var a = this.Qa, b = this.A, c = K(this.S);
  return ve.i ? ve.i(a, b, c) : ve.call(null, a, b, c);
};
g.N = function() {
  return this;
};
g.O = function(a, b) {
  return new De(b, this.Qa, this.A, this.S, this.q);
};
g.M = function(a, b) {
  return M(b, this);
};
var ve = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new De(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (t(h) && (h = h.hb(), t(h))) {
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
  this.Qa = b;
  this.A = c;
  this.S = d;
  this.q = e;
  this.D = 0;
  this.m = 32374860;
}
g = Ee.prototype;
g.toString = function() {
  return Bb(this);
};
g.L = function() {
  return this.meta;
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Tb(this);
};
g.F = function(a, b) {
  return dc(this, b);
};
g.V = function() {
  return oc(J, this.meta);
};
g.X = function(a, b) {
  return Ec.e(b, this);
};
g.Y = function(a, b, c) {
  return Ec.i(b, c, this);
};
g.Z = function() {
  return G(this.S);
};
g.ia = function() {
  var a = this.Qa, b = this.A, c = K(this.S);
  return Ae.t ? Ae.t(null, a, b, c) : Ae.call(null, null, a, b, c);
};
g.N = function() {
  return this;
};
g.O = function(a, b) {
  return new Ee(b, this.Qa, this.A, this.S, this.q);
};
g.M = function(a, b) {
  return M(b, this);
};
var Ae = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var l = b[c];
          if (t(l) && (l = l.hb(), t(l))) {
            return new Ee(a, b, c + 1, l, null);
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
  return Bb(this);
};
g.J = function(a, b) {
  return B.i(this, b, null);
};
g.G = function(a, b, c) {
  return null == b ? this.da ? this.ka : c : null == this.root ? c : this.root.Pa(0, Lb(b), b, c);
};
g.L = function() {
  return this.meta;
};
g.P = function() {
  return this.o;
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Ub(this);
};
g.F = function(a, b) {
  return he(this, b);
};
g.bb = function() {
  return new Ge({}, this.root, this.o, this.da, this.ka);
};
g.V = function() {
  return bb(ic, this.meta);
};
g.na = function(a, b) {
  if (null == b) {
    return this.da ? new Fe(this.meta, this.o - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.ib(0, Lb(b), b);
  return c === this.root ? this : new Fe(this.meta, this.o - 1, c, this.da, this.ka, null);
};
g.ha = function(a, b, c) {
  if (null == b) {
    return this.da && c === this.ka ? this : new Fe(this.meta, this.da ? this.o : this.o + 1, this.root, !0, c, null);
  }
  a = new pe;
  b = (null == this.root ? we : this.root).pa(0, Lb(b), b, c, a);
  return b === this.root ? this : new Fe(this.meta, a.oa ? this.o + 1 : this.o, b, this.da, this.ka, null);
};
g.rb = function(a, b) {
  return null == b ? this.da : null == this.root ? !1 : this.root.Pa(0, Lb(b), b, yc) !== yc;
};
g.N = function() {
  if (0 < this.o) {
    var a = null != this.root ? this.root.hb() : null;
    return this.da ? M(new W(null, 2, 5, X, [null, this.ka], null), a) : a;
  }
  return null;
};
g.O = function(a, b) {
  return new Fe(b, this.o, this.root, this.da, this.ka, this.q);
};
g.M = function(a, b) {
  if (tc(b)) {
    return La(this, z.e(b, 0), z.e(b, 1));
  }
  for (var c = this, d = F(b);;) {
    if (null == d) {
      return c;
    }
    var e = G(d);
    if (tc(e)) {
      c = La(c, z.e(e, 0), z.e(e, 1)), d = K(d);
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
  return this.call.apply(this, [this].concat(ua(b)));
};
g.f = function(a) {
  return this.J(null, a);
};
g.e = function(a, b) {
  return this.G(null, a, b);
};
var ic = new Fe(null, 0, null, !1, null, 0);
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
g.eb = function(a, b, c) {
  return He(this, b, c);
};
g.fb = function(a, b) {
  return Ie(this, b);
};
g.gb = function() {
  var a;
  if (this.K) {
    this.K = null, a = new Fe(null, this.count, this.root, this.da, this.ka, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.J = function(a, b) {
  return null == b ? this.da ? this.ka : null : null == this.root ? null : this.root.Pa(0, Lb(b), b);
};
g.G = function(a, b, c) {
  return null == b ? this.da ? this.ka : c : null == this.root ? c : this.root.Pa(0, Lb(b), b, c);
};
g.P = function() {
  if (this.K) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Ie(a, b) {
  if (a.K) {
    if (b ? b.m & 2048 || b.Mb || (b.m ? 0 : v(Pa, b)) : v(Pa, b)) {
      return He(a, Oc.f ? Oc.f(b) : Oc.call(null, b), Pc.f ? Pc.f(b) : Pc.call(null, b));
    }
    for (var c = F(b), d = a;;) {
      var e = G(c);
      if (t(e)) {
        var f = e, c = K(c), d = He(d, function() {
          var a = f;
          return Oc.f ? Oc.f(a) : Oc.call(null, a);
        }(), function() {
          var a = f;
          return Pc.f ? Pc.f(a) : Pc.call(null, a);
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
      var d = new pe;
      b = (null == a.root ? we : a.root).qa(a.K, 0, Lb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.oa && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var rd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = F(a);
    for (var b = nb(ic);;) {
      if (a) {
        var e = K(K(a)), b = ld.i(b, G(a), G(K(a)));
        a = e;
      } else {
        return pb(b);
      }
    }
  }
  a.B = 0;
  a.s = function(a) {
    a = F(a);
    return b(a);
  };
  a.n = b;
  return a;
}();
function Je(a, b) {
  this.aa = a;
  this.ca = b;
  this.D = 0;
  this.m = 32374988;
}
g = Je.prototype;
g.toString = function() {
  return Bb(this);
};
g.L = function() {
  return this.ca;
};
g.ga = function() {
  var a = this.aa, a = (a ? a.m & 128 || a.ob || (a.m ? 0 : v(Ha, a)) : v(Ha, a)) ? this.aa.ga(null) : K(this.aa);
  return null == a ? null : new Je(a, this.ca);
};
g.I = function() {
  return Tb(this);
};
g.F = function(a, b) {
  return dc(this, b);
};
g.V = function() {
  return oc(J, this.ca);
};
g.X = function(a, b) {
  return Ec.e(b, this);
};
g.Y = function(a, b, c) {
  return Ec.i(b, c, this);
};
g.Z = function() {
  return this.aa.Z(null).wb();
};
g.ia = function() {
  var a = this.aa, a = (a ? a.m & 128 || a.ob || (a.m ? 0 : v(Ha, a)) : v(Ha, a)) ? this.aa.ga(null) : K(this.aa);
  return null != a ? new Je(a, this.ca) : J;
};
g.N = function() {
  return this;
};
g.O = function(a, b) {
  return new Je(this.aa, b);
};
g.M = function(a, b) {
  return M(b, this);
};
function Oc(a) {
  return Qa(a);
}
function Ke(a, b) {
  this.aa = a;
  this.ca = b;
  this.D = 0;
  this.m = 32374988;
}
g = Ke.prototype;
g.toString = function() {
  return Bb(this);
};
g.L = function() {
  return this.ca;
};
g.ga = function() {
  var a = this.aa, a = (a ? a.m & 128 || a.ob || (a.m ? 0 : v(Ha, a)) : v(Ha, a)) ? this.aa.ga(null) : K(this.aa);
  return null == a ? null : new Ke(a, this.ca);
};
g.I = function() {
  return Tb(this);
};
g.F = function(a, b) {
  return dc(this, b);
};
g.V = function() {
  return oc(J, this.ca);
};
g.X = function(a, b) {
  return Ec.e(b, this);
};
g.Y = function(a, b, c) {
  return Ec.i(b, c, this);
};
g.Z = function() {
  return this.aa.Z(null).xb();
};
g.ia = function() {
  var a = this.aa, a = (a ? a.m & 128 || a.ob || (a.m ? 0 : v(Ha, a)) : v(Ha, a)) ? this.aa.ga(null) : K(this.aa);
  return null != a ? new Ke(a, this.ca) : J;
};
g.N = function() {
  return this;
};
g.O = function(a, b) {
  return new Ke(this.aa, b);
};
g.M = function(a, b) {
  return M(b, this);
};
function Le(a) {
  return(a = F(a)) ? new Ke(a, null) : null;
}
function Pc(a) {
  return Ra(a);
}
function Me(a, b, c) {
  this.meta = a;
  this.Za = b;
  this.q = c;
  this.m = 15077647;
  this.D = 8196;
}
g = Me.prototype;
g.toString = function() {
  return Bb(this);
};
g.J = function(a, b) {
  return B.i(this, b, null);
};
g.G = function(a, b, c) {
  return Ka(this.Za, b) ? b : c;
};
g.L = function() {
  return this.meta;
};
g.P = function() {
  return ya(this.Za);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Ub(this);
};
g.F = function(a, b) {
  return rc(b) && N(this) === N(b) && od(function(a) {
    return function(b) {
      return Ac(a, b);
    };
  }(this), b);
};
g.bb = function() {
  return new Ne(nb(this.Za));
};
g.V = function() {
  return oc(Oe, this.meta);
};
g.N = function() {
  var a = F(this.Za);
  return a ? new Je(a, null) : null;
};
g.O = function(a, b) {
  return new Me(b, this.Za, this.q);
};
g.M = function(a, b) {
  return new Me(this.meta, jc.i(this.Za, b, null), null);
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
  return this.call.apply(this, [this].concat(ua(b)));
};
g.f = function(a) {
  return this.J(null, a);
};
g.e = function(a, b) {
  return this.G(null, a, b);
};
var Oe = new Me(null, me, 0);
function Ne(a) {
  this.Oa = a;
  this.m = 259;
  this.D = 136;
}
g = Ne.prototype;
g.call = function() {
  function a(a, b, c) {
    return B.i(this.Oa, b, yc) === yc ? c : b;
  }
  function b(a, b) {
    return B.i(this.Oa, b, yc) === yc ? null : b;
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
  return this.call.apply(this, [this].concat(ua(b)));
};
g.f = function(a) {
  return B.i(this.Oa, a, yc) === yc ? null : a;
};
g.e = function(a, b) {
  return B.i(this.Oa, a, yc) === yc ? b : a;
};
g.J = function(a, b) {
  return B.i(this, b, null);
};
g.G = function(a, b, c) {
  return B.i(this.Oa, b, yc) === yc ? c : b;
};
g.P = function() {
  return N(this.Oa);
};
g.fb = function(a, b) {
  this.Oa = ld.i(this.Oa, b, null);
  return this;
};
g.gb = function() {
  return new Me(null, pb(this.Oa), null);
};
function Uc(a) {
  if (a && (a.D & 4096 || a.Ob)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error("Doesn't support name: " + y.f(a));
}
var Pe = function() {
  function a(a, b, c) {
    return(a.f ? a.f(b) : a.call(null, b)) < (a.f ? a.f(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, l, k) {
      var m = null;
      3 < arguments.length && (m = L(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, l, m);
    }
    function c(a, d, e, k) {
      return Dc.i(function(c, d) {
        return b.i(a, c, d);
      }, b.i(a, d, e), k);
    }
    a.B = 3;
    a.s = function(a) {
      var b = G(a);
      a = K(a);
      var d = G(a);
      a = K(a);
      var k = G(a);
      a = I(a);
      return c(b, d, k, a);
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
        return c.n(b, e, f, L(arguments, 3));
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
  var l = ha;
  try {
    ha = null == ha ? null : ha - 1;
    if (null != ha && 0 > ha) {
      return C(a, "#");
    }
    C(a, c);
    if (F(h)) {
      var k = G(h);
      b.i ? b.i(k, a, f) : b.call(null, k, a, f);
    }
    for (var m = K(h), n = ra.f(f) - 1;;) {
      if (!m || null != n && 0 === n) {
        F(m) && 0 === n && (C(a, d), C(a, "..."));
        break;
      } else {
        C(a, d);
        var p = G(m);
        c = a;
        h = f;
        b.i ? b.i(p, c, h) : b.call(null, p, c, h);
        var q = K(m);
        c = n - 1;
        m = q;
        n = c;
      }
    }
    return C(a, e);
  } finally {
    ha = l;
  }
}
var Qe = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = L(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = F(b), f = null, h = 0, l = 0;;) {
      if (l < h) {
        var k = f.W(null, l);
        C(a, k);
        l += 1;
      } else {
        if (e = F(e)) {
          f = e, uc(f) ? (e = ub(f), h = vb(f), f = e, k = N(e), e = h, h = k) : (k = G(f), C(a, k), e = K(f), f = null, h = 0), l = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.B = 1;
  a.s = function(a) {
    var d = G(a);
    a = I(a);
    return b(d, a);
  };
  a.n = b;
  return a;
}(), Re = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Se(a) {
  return'"' + y.f(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Re[a];
  })) + '"';
}
var Z = function Te(b, c, d) {
  if (null == b) {
    return C(c, "nil");
  }
  if (void 0 === b) {
    return C(c, "#\x3cundefined\x3e");
  }
  t(function() {
    var c = P.e(d, oa);
    return t(c) ? (c = b ? b.m & 131072 || b.Nb ? !0 : b.m ? !1 : v(Xa, b) : v(Xa, b)) ? pc(b) : c : c;
  }()) && (C(c, "^"), Te(pc(b), c, d), C(c, " "));
  if (null == b) {
    return C(c, "nil");
  }
  if (b.Wb) {
    return b.fc(b, c, d);
  }
  if (b && (b.m & 2147483648 || b.U)) {
    return b.H(null, c, d);
  }
  if (sa(b) === Boolean || "number" === typeof b) {
    return C(c, "" + y.f(b));
  }
  if (null != b && b.constructor === Object) {
    C(c, "#js ");
    var e = xd.e(function(c) {
      return new W(null, 2, 5, X, [Vc.f(c), b[c]], null);
    }, vc(b));
    return Ue.t ? Ue.t(e, Te, c, d) : Ue.call(null, e, Te, c, d);
  }
  return b instanceof Array ? Y(c, Te, "#js [", " ", "]", d, b) : t("string" == typeof b) ? t(ma.f(d)) ? C(c, Se(b)) : C(c, b) : lc(b) ? Qe.n(c, L(["#\x3c", "" + y.f(b), "\x3e"], 0)) : b instanceof Date ? (e = function(b, c) {
    for (var d = "" + y.f(b);;) {
      if (N(d) < c) {
        d = "0" + y.f(d);
      } else {
        return d;
      }
    }
  }, Qe.n(c, L(['#inst "', "" + y.f(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : b instanceof RegExp ? Qe.n(c, L(['#"', b.source, '"'], 0)) : (b ? b.m & 2147483648 || b.U || (b.m ? 0 : v(kb, b)) : v(kb, b)) ? lb(b, c, d) : Qe.n(c, L(["#\x3c", "" + y.f(b), "\x3e"], 0));
};
function Ve(a, b) {
  var c = new ga;
  a: {
    var d = new Ab(c);
    Z(G(a), d, b);
    for (var e = F(K(a)), f = null, h = 0, l = 0;;) {
      if (l < h) {
        var k = f.W(null, l);
        C(d, " ");
        Z(k, d, b);
        l += 1;
      } else {
        if (e = F(e)) {
          f = e, uc(f) ? (e = ub(f), h = vb(f), f = e, k = N(e), e = h, h = k) : (k = G(f), C(d, " "), Z(k, d, b), e = K(f), f = null, h = 0), l = 0;
        } else {
          break a;
        }
      }
    }
  }
  return c;
}
var vd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = ia();
    return qc(a) ? "" : "" + y.f(Ve(a, b));
  }
  a.B = 0;
  a.s = function(a) {
    a = F(a);
    return b(a);
  };
  a.n = b;
  return a;
}();
function Ue(a, b, c, d) {
  return Y(c, function(a, c, d) {
    var l = Qa(a);
    b.i ? b.i(l, c, d) : b.call(null, l, c, d);
    C(c, " ");
    a = Ra(a);
    return b.i ? b.i(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, F(a));
}
Rb.prototype.U = !0;
Rb.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
U.prototype.U = !0;
U.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
De.prototype.U = !0;
De.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
je.prototype.U = !0;
je.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Zd.prototype.U = !0;
Zd.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Tc.prototype.U = !0;
Tc.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Fe.prototype.U = !0;
Fe.prototype.H = function(a, b, c) {
  return Ue(this, Z, b, c);
};
Ee.prototype.U = !0;
Ee.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
ae.prototype.U = !0;
ae.prototype.H = function(a, b, c) {
  return Y(b, Z, "[", " ", "]", c, this);
};
Me.prototype.U = !0;
Me.prototype.H = function(a, b, c) {
  return Y(b, Z, "#{", " ", "}", c, this);
};
ad.prototype.U = !0;
ad.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
qd.prototype.U = !0;
qd.prototype.H = function(a, b, c) {
  C(b, "#\x3cAtom: ");
  Z(this.state, b, c);
  return C(b, "\x3e");
};
Ke.prototype.U = !0;
Ke.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
W.prototype.U = !0;
W.prototype.H = function(a, b, c) {
  return Y(b, Z, "[", " ", "]", c, this);
};
Rc.prototype.U = !0;
Rc.prototype.H = function(a, b) {
  return C(b, "()");
};
s.prototype.U = !0;
s.prototype.H = function(a, b, c) {
  return Ue(this, Z, b, c);
};
Je.prototype.U = !0;
Je.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Qc.prototype.U = !0;
Qc.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
W.prototype.kb = !0;
W.prototype.lb = function(a, b) {
  return Cc.e(this, b);
};
ae.prototype.kb = !0;
ae.prototype.lb = function(a, b) {
  return Cc.e(this, b);
};
R.prototype.kb = !0;
R.prototype.lb = function(a, b) {
  return Nb(this, b);
};
Qb.prototype.kb = !0;
Qb.prototype.lb = function(a, b) {
  return Nb(this, b);
};
Kc = function() {
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
Lc = function(a) {
  a *= Math.random.C ? Math.random.C() : Math.random.call(null);
  return Math.floor.f ? Math.floor.f(a) : Math.floor.call(null, a);
};
function We(a) {
  this.jb = a;
  this.D = 0;
  this.m = 2153775104;
}
We.prototype.I = function() {
  for (var a = vd.n(L([this], 0)), b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
};
We.prototype.H = function(a, b) {
  return C(b, '#uuid "' + y.f(this.jb) + '"');
};
We.prototype.F = function(a, b) {
  return b instanceof We && this.jb === b.jb;
};
We.prototype.toString = function() {
  return this.jb;
};
var Xe = new R(null, "y", "y", -1757859776), Ye = new R(null, "movement", "movement", 1777030977), oa = new R(null, "meta", "meta", 1499536964), Ze = new R(null, "animation", "animation", -1248293244), $e = new R(null, "stage", "stage", 1843544772), af = new R(null, "movement-speed", "movement-speed", -1779674971), qa = new R(null, "dup", "dup", 556298533), bf = new R(null, "standing", "standing", -1248340762), sd = new R(null, "validator", "validator", -1966190681), $ = new R(null, "name", "name", 
1843675177), cf = new R(null, "neutral", "neutral", -1941956087), df = new R(null, "renderable", "renderable", -1247325782), ef = new R(null, "background", "background", -863952629), ff = new R(null, "facing", "facing", -854439413), gf = new R(null, "entities", "entities", 1940967403), hf = new R(null, "attacker", "attacker", 48869964), jf = new R(null, "state", "state", -1988618099), la = new R(null, "flush-on-newline", "flush-on-newline", -151457939), kf = new R(null, "angle", "angle", 1622094254), 
lf = new R(null, "animation-seq", "animation-seq", 1939833135), mf = new R(null, "renderer", "renderer", 336841071), nf = new R(null, "size", "size", 1098693007), of = new R(null, "sprite", "sprite", 172516848), ma = new R(null, "readably", "readably", 1129599760), pf = new R(null, "damage", "damage", 970520018), ra = new R(null, "print-length", "print-length", 1931866356), qf = new R(null, "id", "id", -1388402092), rf = new R(null, "current", "current", -1088038603), sf = new R(null, "identifier", 
"identifier", -805503498), tf = new R(null, "right", "right", -452581833), uf = new R(null, "position", "position", -2011731912), vf = new R(null, "action", "action", -811238024), wf = new R(null, "point", "point", 1813198264), xf = new R(null, "moving", "moving", 1760797240), yf = new R(null, "attack-range", "attack-range", 519031033), zf = new R(null, "x", "x", 2099068185), Bf = new R(null, "anchor", "anchor", 1549638489), Cf = new R(null, "hp", "hp", -1541237831), Df = new R(null, "target", "target", 
253001721), Ef = new R(null, "frame-count", "frame-count", 1616946810), Ff = new R(null, "attack-speed", "attack-speed", -393485413), Gf = new R(null, "velocity", "velocity", -581524355), Hf = new R(null, "attackable", "attackable", 2099301245), If = new R(null, "sprite-list", "sprite-list", -1086684897), Jf = new R(null, "left", "left", -399115937), Kf = new R(null, "attacking", "attacking", 492336639);
function Lf(a, b, c, d) {
  this.name = a;
  this.Ta = b;
  this.p = c;
  this.l = d;
  this.m = 2229667594;
  this.D = 8192;
  2 < arguments.length ? (this.p = c, this.l = d) : this.l = this.p = null;
}
g = Lf.prototype;
g.J = function(a, b) {
  return B.i(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof R ? b.$ : null) {
    case "point":
      return this.Ta;
    case "name":
      return this.name;
    default:
      return P.i(this.l, b, c);
  }
};
g.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Position{", ", ", "}", c, id.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [wf, this.Ta], null)], null), this.l));
};
g.L = function() {
  return this.p;
};
g.P = function() {
  return 2 + N(this.l);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Nc(this);
};
g.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.na = function(a, b) {
  return Ac(new Me(null, new s(null, 2, [$, null, wf, null], null), null), b) ? kc.e(oc(Fd.e(me, this), this.p), b) : new Lf(this.name, this.Ta, this.p, nd(kc.e(this.l, b)), null);
};
g.ha = function(a, b, c) {
  return t(S.e ? S.e($, b) : S.call(null, $, b)) ? new Lf(c, this.Ta, this.p, this.l, null) : t(S.e ? S.e(wf, b) : S.call(null, wf, b)) ? new Lf(this.name, c, this.p, this.l, null) : new Lf(this.name, this.Ta, this.p, jc.i(this.l, b, c), null);
};
g.N = function() {
  return F(id.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [wf, this.Ta], null)], null), this.l));
};
g.O = function(a, b) {
  return new Lf(this.name, this.Ta, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Dc.i(Ba, this, b);
};
function Mf(a) {
  return new Lf(uf, a);
}
function Nf(a, b, c, d, e, f) {
  this.name = a;
  this.ba = b;
  this.anchor = c;
  this.size = d;
  this.p = e;
  this.l = f;
  this.m = 2229667594;
  this.D = 8192;
  4 < arguments.length ? (this.p = e, this.l = f) : this.l = this.p = null;
}
g = Nf.prototype;
g.J = function(a, b) {
  return B.i(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof R ? b.$ : null) {
    case "size":
      return this.size;
    case "anchor":
      return this.anchor;
    case "sprite":
      return this.ba;
    case "name":
      return this.name;
    default:
      return P.i(this.l, b, c);
  }
};
g.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Renderable{", ", ", "}", c, id.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [of, this.ba], null), new W(null, 2, 5, X, [Bf, this.anchor], null), new W(null, 2, 5, X, [nf, this.size], null)], null), this.l));
};
g.L = function() {
  return this.p;
};
g.P = function() {
  return 4 + N(this.l);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Nc(this);
};
g.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.na = function(a, b) {
  return Ac(new Me(null, new s(null, 4, [$, null, nf, null, of, null, Bf, null], null), null), b) ? kc.e(oc(Fd.e(me, this), this.p), b) : new Nf(this.name, this.ba, this.anchor, this.size, this.p, nd(kc.e(this.l, b)), null);
};
g.ha = function(a, b, c) {
  return t(S.e ? S.e($, b) : S.call(null, $, b)) ? new Nf(c, this.ba, this.anchor, this.size, this.p, this.l, null) : t(S.e ? S.e(of, b) : S.call(null, of, b)) ? new Nf(this.name, c, this.anchor, this.size, this.p, this.l, null) : t(S.e ? S.e(Bf, b) : S.call(null, Bf, b)) ? new Nf(this.name, this.ba, c, this.size, this.p, this.l, null) : t(S.e ? S.e(nf, b) : S.call(null, nf, b)) ? new Nf(this.name, this.ba, this.anchor, c, this.p, this.l, null) : new Nf(this.name, this.ba, this.anchor, this.size, 
  this.p, jc.i(this.l, b, c), null);
};
g.N = function() {
  return F(id.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [of, this.ba], null), new W(null, 2, 5, X, [Bf, this.anchor], null), new W(null, 2, 5, X, [nf, this.size], null)], null), this.l));
};
g.O = function(a, b) {
  return new Nf(this.name, this.ba, this.anchor, this.size, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Dc.i(Ba, this, b);
};
function Of(a, b, c) {
  return new Nf(df, a, b, c);
}
function Pf(a, b, c, d) {
  this.name = a;
  this.ba = b;
  this.p = c;
  this.l = d;
  this.m = 2229667594;
  this.D = 8192;
  2 < arguments.length ? (this.p = c, this.l = d) : this.l = this.p = null;
}
g = Pf.prototype;
g.J = function(a, b) {
  return B.i(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof R ? b.$ : null) {
    case "sprite":
      return this.ba;
    case "name":
      return this.name;
    default:
      return P.i(this.l, b, c);
  }
};
g.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Background{", ", ", "}", c, id.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [of, this.ba], null)], null), this.l));
};
g.L = function() {
  return this.p;
};
g.P = function() {
  return 2 + N(this.l);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Nc(this);
};
g.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.na = function(a, b) {
  return Ac(new Me(null, new s(null, 2, [$, null, of, null], null), null), b) ? kc.e(oc(Fd.e(me, this), this.p), b) : new Pf(this.name, this.ba, this.p, nd(kc.e(this.l, b)), null);
};
g.ha = function(a, b, c) {
  return t(S.e ? S.e($, b) : S.call(null, $, b)) ? new Pf(c, this.ba, this.p, this.l, null) : t(S.e ? S.e(of, b) : S.call(null, of, b)) ? new Pf(this.name, c, this.p, this.l, null) : new Pf(this.name, this.ba, this.p, jc.i(this.l, b, c), null);
};
g.N = function() {
  return F(id.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [of, this.ba], null)], null), this.l));
};
g.O = function(a, b) {
  return new Pf(this.name, this.ba, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Dc.i(Ba, this, b);
};
function Qf(a, b, c, d, e, f, h) {
  this.name = a;
  this.sa = b;
  this.ta = c;
  this.ua = d;
  this.target = e;
  this.p = f;
  this.l = h;
  this.m = 2229667594;
  this.D = 8192;
  5 < arguments.length ? (this.p = f, this.l = h) : this.l = this.p = null;
}
g = Qf.prototype;
g.J = function(a, b) {
  return B.i(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof R ? b.$ : null) {
    case "target":
      return this.target;
    case "damage":
      return this.ua;
    case "attack-speed":
      return this.ta;
    case "attack-range":
      return this.sa;
    case "name":
      return this.name;
    default:
      return P.i(this.l, b, c);
  }
};
g.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Attacker{", ", ", "}", c, id.e(new W(null, 5, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [yf, this.sa], null), new W(null, 2, 5, X, [Ff, this.ta], null), new W(null, 2, 5, X, [pf, this.ua], null), new W(null, 2, 5, X, [Df, this.target], null)], null), this.l));
};
g.L = function() {
  return this.p;
};
g.P = function() {
  return 5 + N(this.l);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Nc(this);
};
g.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.na = function(a, b) {
  return Ac(new Me(null, new s(null, 5, [$, null, pf, null, yf, null, Df, null, Ff, null], null), null), b) ? kc.e(oc(Fd.e(me, this), this.p), b) : new Qf(this.name, this.sa, this.ta, this.ua, this.target, this.p, nd(kc.e(this.l, b)), null);
};
g.ha = function(a, b, c) {
  return t(S.e ? S.e($, b) : S.call(null, $, b)) ? new Qf(c, this.sa, this.ta, this.ua, this.target, this.p, this.l, null) : t(S.e ? S.e(yf, b) : S.call(null, yf, b)) ? new Qf(this.name, c, this.ta, this.ua, this.target, this.p, this.l, null) : t(S.e ? S.e(Ff, b) : S.call(null, Ff, b)) ? new Qf(this.name, this.sa, c, this.ua, this.target, this.p, this.l, null) : t(S.e ? S.e(pf, b) : S.call(null, pf, b)) ? new Qf(this.name, this.sa, this.ta, c, this.target, this.p, this.l, null) : t(S.e ? S.e(Df, 
  b) : S.call(null, Df, b)) ? new Qf(this.name, this.sa, this.ta, this.ua, c, this.p, this.l, null) : new Qf(this.name, this.sa, this.ta, this.ua, this.target, this.p, jc.i(this.l, b, c), null);
};
g.N = function() {
  return F(id.e(new W(null, 5, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [yf, this.sa], null), new W(null, 2, 5, X, [Ff, this.ta], null), new W(null, 2, 5, X, [pf, this.ua], null), new W(null, 2, 5, X, [Df, this.target], null)], null), this.l));
};
g.O = function(a, b) {
  return new Qf(this.name, this.sa, this.ta, this.ua, this.target, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Dc.i(Ba, this, b);
};
function Rf(a, b, c, d) {
  this.name = a;
  this.Sa = b;
  this.p = c;
  this.l = d;
  this.m = 2229667594;
  this.D = 8192;
  2 < arguments.length ? (this.p = c, this.l = d) : this.l = this.p = null;
}
g = Rf.prototype;
g.J = function(a, b) {
  return B.i(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof R ? b.$ : null) {
    case "hp":
      return this.Sa;
    case "name":
      return this.name;
    default:
      return P.i(this.l, b, c);
  }
};
g.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Attackable{", ", ", "}", c, id.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Cf, this.Sa], null)], null), this.l));
};
g.L = function() {
  return this.p;
};
g.P = function() {
  return 2 + N(this.l);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Nc(this);
};
g.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.na = function(a, b) {
  return Ac(new Me(null, new s(null, 2, [$, null, Cf, null], null), null), b) ? kc.e(oc(Fd.e(me, this), this.p), b) : new Rf(this.name, this.Sa, this.p, nd(kc.e(this.l, b)), null);
};
g.ha = function(a, b, c) {
  return t(S.e ? S.e($, b) : S.call(null, $, b)) ? new Rf(c, this.Sa, this.p, this.l, null) : t(S.e ? S.e(Cf, b) : S.call(null, Cf, b)) ? new Rf(this.name, c, this.p, this.l, null) : new Rf(this.name, this.Sa, this.p, jc.i(this.l, b, c), null);
};
g.N = function() {
  return F(id.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Cf, this.Sa], null)], null), this.l));
};
g.O = function(a, b) {
  return new Rf(this.name, this.Sa, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Dc.i(Ba, this, b);
};
function Sf(a) {
  return new Rf(Hf, a);
}
function Tf(a, b, c, d) {
  this.name = a;
  this.Ua = b;
  this.p = c;
  this.l = d;
  this.m = 2229667594;
  this.D = 8192;
  2 < arguments.length ? (this.p = c, this.l = d) : this.l = this.p = null;
}
g = Tf.prototype;
g.J = function(a, b) {
  return B.i(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof R ? b.$ : null) {
    case "velocity":
      return this.Ua;
    case "name":
      return this.name;
    default:
      return P.i(this.l, b, c);
  }
};
g.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Movement{", ", ", "}", c, id.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Gf, this.Ua], null)], null), this.l));
};
g.L = function() {
  return this.p;
};
g.P = function() {
  return 2 + N(this.l);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Nc(this);
};
g.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.na = function(a, b) {
  return Ac(new Me(null, new s(null, 2, [$, null, Gf, null], null), null), b) ? kc.e(oc(Fd.e(me, this), this.p), b) : new Tf(this.name, this.Ua, this.p, nd(kc.e(this.l, b)), null);
};
g.ha = function(a, b, c) {
  return t(S.e ? S.e($, b) : S.call(null, $, b)) ? new Tf(c, this.Ua, this.p, this.l, null) : t(S.e ? S.e(Gf, b) : S.call(null, Gf, b)) ? new Tf(this.name, c, this.p, this.l, null) : new Tf(this.name, this.Ua, this.p, jc.i(this.l, b, c), null);
};
g.N = function() {
  return F(id.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Gf, this.Ua], null)], null), this.l));
};
g.O = function(a, b) {
  return new Tf(this.name, this.Ua, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Dc.i(Ba, this, b);
};
function Uf(a, b, c, d) {
  this.name = a;
  this.state = b;
  this.p = c;
  this.l = d;
  this.m = 2229667594;
  this.D = 8192;
  2 < arguments.length ? (this.p = c, this.l = d) : this.l = this.p = null;
}
g = Uf.prototype;
g.J = function(a, b) {
  return B.i(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof R ? b.$ : null) {
    case "state":
      return this.state;
    case "name":
      return this.name;
    default:
      return P.i(this.l, b, c);
  }
};
g.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Action{", ", ", "}", c, id.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [jf, this.state], null)], null), this.l));
};
g.L = function() {
  return this.p;
};
g.P = function() {
  return 2 + N(this.l);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Nc(this);
};
g.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.na = function(a, b) {
  return Ac(new Me(null, new s(null, 2, [$, null, jf, null], null), null), b) ? kc.e(oc(Fd.e(me, this), this.p), b) : new Uf(this.name, this.state, this.p, nd(kc.e(this.l, b)), null);
};
g.ha = function(a, b, c) {
  return t(S.e ? S.e($, b) : S.call(null, $, b)) ? new Uf(c, this.state, this.p, this.l, null) : t(S.e ? S.e(jf, b) : S.call(null, jf, b)) ? new Uf(this.name, c, this.p, this.l, null) : new Uf(this.name, this.state, this.p, jc.i(this.l, b, c), null);
};
g.N = function() {
  return F(id.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [jf, this.state], null)], null), this.l));
};
g.O = function(a, b) {
  return new Uf(this.name, this.state, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Dc.i(Ba, this, b);
};
function Vf(a, b, c, d) {
  this.name = a;
  this.angle = b;
  this.p = c;
  this.l = d;
  this.m = 2229667594;
  this.D = 8192;
  2 < arguments.length ? (this.p = c, this.l = d) : this.l = this.p = null;
}
g = Vf.prototype;
g.J = function(a, b) {
  return B.i(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof R ? b.$ : null) {
    case "angle":
      return this.angle;
    case "name":
      return this.name;
    default:
      return P.i(this.l, b, c);
  }
};
g.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Facing{", ", ", "}", c, id.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [kf, this.angle], null)], null), this.l));
};
g.L = function() {
  return this.p;
};
g.P = function() {
  return 2 + N(this.l);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Nc(this);
};
g.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.na = function(a, b) {
  return Ac(new Me(null, new s(null, 2, [$, null, kf, null], null), null), b) ? kc.e(oc(Fd.e(me, this), this.p), b) : new Vf(this.name, this.angle, this.p, nd(kc.e(this.l, b)), null);
};
g.ha = function(a, b, c) {
  return t(S.e ? S.e($, b) : S.call(null, $, b)) ? new Vf(c, this.angle, this.p, this.l, null) : t(S.e ? S.e(kf, b) : S.call(null, kf, b)) ? new Vf(this.name, c, this.p, this.l, null) : new Vf(this.name, this.angle, this.p, jc.i(this.l, b, c), null);
};
g.N = function() {
  return F(id.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [kf, this.angle], null)], null), this.l));
};
g.O = function(a, b) {
  return new Vf(this.name, this.angle, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Dc.i(Ba, this, b);
};
function Wf(a, b, c, d, e, f) {
  this.name = a;
  this.Na = b;
  this.wa = c;
  this.current = d;
  this.p = e;
  this.l = f;
  this.m = 2229667594;
  this.D = 8192;
  4 < arguments.length ? (this.p = e, this.l = f) : this.l = this.p = null;
}
g = Wf.prototype;
g.J = function(a, b) {
  return B.i(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof R ? b.$ : null) {
    case "current":
      return this.current;
    case "animation-seq":
      return this.wa;
    case "sprite-list":
      return this.Na;
    case "name":
      return this.name;
    default:
      return P.i(this.l, b, c);
  }
};
g.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Animation{", ", ", "}", c, id.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [If, this.Na], null), new W(null, 2, 5, X, [lf, this.wa], null), new W(null, 2, 5, X, [rf, this.current], null)], null), this.l));
};
g.L = function() {
  return this.p;
};
g.P = function() {
  return 4 + N(this.l);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Nc(this);
};
g.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1;
};
g.na = function(a, b) {
  return Ac(new Me(null, new s(null, 4, [$, null, lf, null, rf, null, If, null], null), null), b) ? kc.e(oc(Fd.e(me, this), this.p), b) : new Wf(this.name, this.Na, this.wa, this.current, this.p, nd(kc.e(this.l, b)), null);
};
g.ha = function(a, b, c) {
  return t(S.e ? S.e($, b) : S.call(null, $, b)) ? new Wf(c, this.Na, this.wa, this.current, this.p, this.l, null) : t(S.e ? S.e(If, b) : S.call(null, If, b)) ? new Wf(this.name, c, this.wa, this.current, this.p, this.l, null) : t(S.e ? S.e(lf, b) : S.call(null, lf, b)) ? new Wf(this.name, this.Na, c, this.current, this.p, this.l, null) : t(S.e ? S.e(rf, b) : S.call(null, rf, b)) ? new Wf(this.name, this.Na, this.wa, c, this.p, this.l, null) : new Wf(this.name, this.Na, this.wa, this.current, this.p, 
  jc.i(this.l, b, c), null);
};
g.N = function() {
  return F(id.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [If, this.Na], null), new W(null, 2, 5, X, [lf, this.wa], null), new W(null, 2, 5, X, [rf, this.current], null)], null), this.l));
};
g.O = function(a, b) {
  return new Wf(this.name, this.Na, this.wa, this.current, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Dc.i(Ba, this, b);
};
function Xf(a, b, c) {
  return new Wf(Ze, a, b, c);
}
;function Yf(a, b) {
  return Ac(a, b);
}
function Zf(a, b) {
  return jc.i(a, $.f(b), b);
}
function $f(a, b) {
  return Dc.i(function(a, b) {
    return jc.i(a, $.f(b), b);
  }, a, b);
}
function ag() {
  var a = bg.C ? bg.C() : bg.call(null);
  return cg.f ? cg.f(a) : cg.call(null, a);
}
var dg = function() {
  function a(a) {
    return new s(null, 2, [$, sf, qf, a], null);
  }
  function b() {
    return c.f(ag());
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
}(), eg = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = Dc.i(function(a, b) {
      return jc.i(a, $.f(b), b);
    }, me, a);
    return Ac(a, sf) ? a : Zf(a, dg.C());
  }
  a.B = 0;
  a.s = function(a) {
    a = F(a);
    return b(a);
  };
  a.n = b;
  return a;
}();
function fg(a, b) {
  var c = Le(gf.f(a));
  return Ed.e(function() {
    return function(a) {
      return Ac(a, b);
    };
  }(c), c);
}
var gg = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = L(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = Le(gf.f(a));
    return Ed.e(function() {
      return function(a) {
        return od(pd.e(Yf, a), b);
      };
    }(e), e);
  }
  a.B = 1;
  a.s = function(a) {
    var d = G(a);
    a = I(a);
    return b(d, a);
  };
  a.n = b;
  return a;
}();
function hg(a, b) {
  var c = function() {
    var b = gf.f(a);
    return t(b) ? b : me;
  }();
  return jc.i(a, gf, Dc.i(function() {
    return function(a, b) {
      return jc.i(a, V.e(b, new W(null, 2, 5, X, [sf, qf], null)), b);
    };
  }(c), c, b));
}
function ig(a) {
  return V.e(a, new W(null, 2, 5, X, [uf, wf], null));
}
function jg(a) {
  return V.e(a, new W(null, 2, 5, X, [hf, Df], null));
}
function kg(a) {
  return V.e(a, new W(null, 2, 5, X, [Ye, Gf], null));
}
function lg(a) {
  return V.e(a, new W(null, 2, 5, X, [df, Bf], null));
}
function mg(a) {
  return V.e(a, new W(null, 2, 5, X, [df, nf], null));
}
function ng(a) {
  return V.e(a, new W(null, 2, 5, X, [Ze, If], null));
}
function og(a) {
  return V.e(a, new W(null, 2, 5, X, [Ze, lf], null));
}
function pg(a) {
  return V.e(a, new W(null, 2, 5, X, [Ze, rf], null));
}
function qg(a) {
  return V.e(a, new W(null, 2, 5, X, [hf, Ff], null));
}
function rg(a) {
  return V.e(a, new W(null, 2, 5, X, [hf, pf], null));
}
function sg(a) {
  return Ob.e(V.e(a, new W(null, 2, 5, X, [vf, jf], null)), Kf);
}
function tg(a) {
  return V.e(a, new W(null, 2, 5, X, [Hf, Cf], null));
}
function ug(a) {
  return 0 < tg(a);
}
function vg(a, b) {
  return Ed.e(function(b) {
    return Ob.e(jg(b), a);
  }, b);
}
function wg(a) {
  return V.e(a, new W(null, 2, 5, X, [df, of], null)).getBounds();
}
;function yg(a, b, c) {
  var d = wg(a), e = wg(b), f = ig(a);
  a = O.i(f, 0, null);
  var f = O.i(f, 1, null), h = ig(b);
  b = O.i(h, 0, null);
  var h = O.i(h, 1, null), l = d.height / 2, d = d.width / 2, k = e.height / 2, e = e.width / 2;
  return!(a - d - c > b + e || b - e > a + d + c || f - l - c > h + k || h - k > f + l + c);
}
function zg(a, b) {
  var c = ig(a), d = O.i(c, 0, null), c = O.i(c, 1, null), e = ig(b), f = O.i(e, 0, null), e = O.i(e, 1, null);
  return Math.sqrt(Math.pow(Math.abs(d - f), 2) + Math.pow(Math.abs(c - e), 2));
}
function Ag(a, b) {
  return nc.i(Pe, pd.e(zg, a), b);
}
function Bg(a) {
  var b = fg(a, hf), c = fg(a, Hf), d = Ed.e(function() {
    return function(a) {
      return ug(a);
    };
  }(b, c), c);
  return qc(d) ? a : hg(a, function() {
    return function(a, b, c) {
      return function k(d) {
        return new U(null, function(a, b, c) {
          return function() {
            for (;;) {
              var a = F(d);
              if (a) {
                if (uc(a)) {
                  var b = ub(a), e = N(b), f = Zc(e);
                  return function() {
                    for (var a = 0;;) {
                      if (a < e) {
                        var d = z.e(b, a), h = f, k = kg(d), m = V.e(d, new W(null, 2, 5, X, [hf, yf], null)), n = qg(d), p = rg(d), u = Ag(d, c), H = !yg(d, u, m), d = $f(d, new W(null, 3, 5, X, [new Tf(Ye, k), new Uf(vf, t(H) ? xf : Kf), new Qf(hf, m, n, p, u)], null));
                        h.add(d);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? bd(f.T(), k(vb(a))) : bd(f.T(), null);
                }
                var h = G(a);
                return M(function() {
                  var a = kg(h), b = V.e(h, new W(null, 2, 5, X, [hf, yf], null)), d = qg(h), e = rg(h), f = Ag(h, c), k = !yg(h, f, b);
                  return $f(h, new W(null, 3, 5, X, [new Tf(Ye, a), new Uf(vf, t(k) ? xf : Kf), new Qf(hf, b, d, e, f)], null));
                }(), k(I(a)));
              }
              return null;
            }
          };
        }(a, b, c), null, null);
      };
    }(b, c, d)(b);
  }());
}
;var Cg;
a: {
  var Dg = aa.navigator;
  if (Dg) {
    var Eg = Dg.userAgent;
    if (Eg) {
      Cg = Eg;
      break a;
    }
  }
  Cg = "";
}
function Fg(a) {
  return-1 != Cg.indexOf(a);
}
;var Gg = Fg("Opera") || Fg("OPR"), Hg = Fg("Trident") || Fg("MSIE"), Ig = Fg("Gecko") && -1 == Cg.toLowerCase().indexOf("webkit") && !(Fg("Trident") || Fg("MSIE")), Jg = -1 != Cg.toLowerCase().indexOf("webkit"), Kg = function() {
  var a = "", b;
  if (Gg && aa.opera) {
    return a = aa.opera.version, "function" == r(a) ? a() : a;
  }
  Ig ? b = /rv\:([^\);]+)(\)|;)/ : Hg ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Jg && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(Cg)) ? a[1] : "");
  return Hg && (b = (b = aa.document) ? b.documentMode : void 0, b > parseFloat(a)) ? String(b) : a;
}(), Lg = {};
function Mg(a) {
  var b;
  if (!(b = Lg[a])) {
    b = 0;
    for (var c = String(Kg).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", l = d[f] || "", k = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = k.exec(h) || ["", "", ""], p = m.exec(l) || ["", "", ""];
        if (0 == n[0].length && 0 == p[0].length) {
          break;
        }
        b = da(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == p[1].length ? 0 : parseInt(p[1], 10)) || da(0 == n[2].length, 0 == p[2].length) || da(n[2], p[2]);
      } while (0 == b);
    }
    b = Lg[a] = 0 <= b;
  }
  return b;
}
;Hg && Mg("9");
!Jg || Mg("528");
Ig && Mg("1.9b") || Hg && Mg("8") || Gg && Mg("9.5") || Jg && Mg("528");
Ig && !Mg("8") || Hg && Mg("9");
var Ng = function() {
  function a(a, b) {
    return nc.e(y, Dd(a, b));
  }
  function b(a) {
    return nc.e(y, a);
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
function cg(a) {
  return "" + y.f(a.jb);
}
function bg() {
  function a() {
    return Lc(16).toString(16);
  }
  return new We(Ng.f(id.n(Bd.e(8, a), "-", L([Bd.e(4, a), "-4", Bd.e(3, a), "-", (8 | 3 & Lc(15)).toString(16), Bd.e(3, a), "-", Bd.e(12, a)], 0))));
}
var Og = "^" + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + "-" + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + "-" + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + "-" + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + "-" + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + 
y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + y.f("[0-9a-fA-F]") + "$";
if (!(Og instanceof RegExp)) {
  var Pg;
  var Qg = /^(?:\(\?([idmsux]*)\))?(.*)/;
  if ("string" === typeof Og) {
    var Rg = Qg.exec(Og);
    Pg = null == Rg ? null : 1 === N(Rg) ? G(Rg) : pb(Dc.i(ob, nb(fc), Rg));
  } else {
    throw new TypeError("re-find must match against a string.");
  }
  O.i(Pg, 0, null);
  O.i(Pg, 1, null);
  O.i(Pg, 2, null);
}
;function Sg(a, b, c) {
  if (0 < a) {
    for (;;) {
      if (F(b)) {
        var d = G(b), e = function() {
          var a = d;
          return rg.f ? rg.f(a) : rg.call(null, a);
        }(), f = function() {
          var a = d;
          return qg.f ? qg.f(a) : qg.call(null, a);
        }();
        Ob.e((c % f + f) % f, 0) && (a -= e);
        b = I(b);
      } else {
        return a;
      }
    }
  } else {
    return a;
  }
}
function Tg(a) {
  var b = fg.e ? fg.e(a, hf) : fg.call(null, a, hf), c = Ed.e(function() {
    return function(a) {
      return sg.f ? sg.f(a) : sg.call(null, a);
    };
  }(b), b), d = fg.e ? fg.e(a, Hf) : fg.call(null, a, Hf), e = Ed.e(function() {
    return function(a) {
      return ug.f ? ug.f(a) : ug.call(null, a);
    };
  }(b, c, d), d);
  if (qc(c) && qc(e)) {
    return a;
  }
  var f = function() {
    return function(b, c, d, e, f) {
      return function q(u) {
        return new U(null, function(b, c, d) {
          return function() {
            for (;;) {
              var b = F(u);
              if (b) {
                if (uc(b)) {
                  var c = ub(b), e = N(c), f = Zc(e);
                  return function() {
                    for (var b = 0;;) {
                      if (b < e) {
                        var h = z.e(c, b);
                        cd(f, function() {
                          var b = function() {
                            var a = h;
                            return vg.e ? vg.e(a, d) : vg.call(null, a, d);
                          }(), c = Ef.f(a), e = function() {
                            var a = h;
                            return tg.f ? tg.f(a) : tg.call(null, a);
                          }(), c = Sg(e, b, c), b = h, c = Sf.f ? Sf.f(c) : Sf.call(null, c);
                          return Zf.e ? Zf.e(b, c) : Zf.call(null, b, c);
                        }());
                        b += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? bd(f.T(), q(vb(b))) : bd(f.T(), null);
                }
                var h = G(b);
                return M(function() {
                  var b = function() {
                    var a = h;
                    return vg.e ? vg.e(a, d) : vg.call(null, a, d);
                  }(), c = Ef.f(a), e = function() {
                    var a = h;
                    return tg.f ? tg.f(a) : tg.call(null, a);
                  }(), c = Sg(e, b, c), b = h, c = Sf.f ? Sf.f(c) : Sf.call(null, c);
                  return Zf.e ? Zf.e(b, c) : Zf.call(null, b, c);
                }(), q(I(b)));
              }
              return null;
            }
          };
        }(b, c, d, e, f), null, null);
      };
    }(a, b, c, d, e)(e);
  }();
  return hg.e ? hg.e(a, f) : hg.call(null, a, f);
}
;function Ug(a, b, c) {
  a[b] = c;
  return a;
}
;function Vg(a) {
  return PIXI.Sprite.fromFrame(a);
}
function Wg(a) {
  return PIXI.Sprite.fromImage(a);
}
function Xg(a) {
  return PIXI.Texture.fromImage(a, !1);
}
;var Yg = new s(null, 4, [af, .25, yf, 1, pf, 5, Ff, 180], null), Zg = new s(null, 1, [Cf, 2E3], null), $g = new PIXI.Point(.5, .5);
function ah(a, b) {
  var c = Vg.f ? Vg.f("barbarian-neutral-down.png") : Vg.call(null, "barbarian-neutral-down.png"), d = Vg.f ? Vg.f("barbarian-run-right-down.png") : Vg.call(null, "barbarian-run-right-down.png"), e = Vg.f ? Vg.f("barbarian-run-left-down.png") : Vg.call(null, "barbarian-run-left-down.png"), d = new s(null, 3, [cf, c, tf, d, Jf, e], null), e = new W(null, 4, 5, X, [cf, Jf, cf, tf], null), f = af.f(Yg), h = yf.f(Yg), l = pf.f(Yg), k = Ff.f(Yg);
  return eg.n(L([Mf(new W(null, 2, 5, X, [a, b], null)), new Tf(Ye, f), new Uf(vf, bf), Xf(d, e, 0), Of(c, $g, new W(null, 2, 5, X, [1, 1], null)), new Qf(hf, h, k, l, null)], 0));
}
function bh(a, b) {
  var c = Wg.f ? Wg.f("images/town-hall.png") : Wg.call(null, "images/town-hall.png"), d = Cf.f(Zg);
  return eg.n(L([Mf(new W(null, 2, 5, X, [a, b], null)), Of(c, $g, new W(null, 2, 5, X, [4, 4], null)), Sf(d)], 0));
}
;var ch = td.f ? td.f(me) : td.call(null, me);
function dh(a) {
  a = a.getLocalPosition(a.target);
  a = new s(null, 2, [zf, a.x, Xe, a.y], null);
  return ud.e ? ud.e(ch, a) : ud.call(null, ch, a);
}
;function eh(a) {
  var b = gg.n(a, L([Ye, ff], 0)), c = Ed.e(function() {
    return function(a) {
      return Ob.e(V.e(a, new W(null, 2, 5, X, [vf, jf], null)), xf);
    };
  }(b), b);
  return qc(c) ? a : hg(a, function() {
    return function(a, b) {
      return function h(c) {
        return new U(null, function() {
          return function() {
            for (;;) {
              var a = F(c);
              if (a) {
                if (uc(a)) {
                  var b = ub(a), d = N(b), e = Zc(d);
                  return function() {
                    for (var a = 0;;) {
                      if (a < d) {
                        var c = z.e(b, a), h = e, l = V.e(c, new W(null, 2, 5, X, [ff, kf], null)), k = kg(c), q = ig(c), T = O.i(q, 0, null), q = O.i(q, 1, null), k = new W(null, 2, 5, X, [T + k * Math.cos(l), q + k * Math.sin(l)], null), l = O.i(k, 0, null), k = O.i(k, 1, null), c = Zf(c, Mf(new W(null, 2, 5, X, [l, k], null)));
                        h.add(c);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? bd(e.T(), h(vb(a))) : bd(e.T(), null);
                }
                var q = G(a);
                return M(function() {
                  var a = V.e(q, new W(null, 2, 5, X, [ff, kf], null)), b = kg(q), c = ig(q), d = O.i(c, 0, null), c = O.i(c, 1, null), b = new W(null, 2, 5, X, [d + b * Math.cos(a), c + b * Math.sin(a)], null), a = O.i(b, 0, null), b = O.i(b, 1, null);
                  return Zf(q, Mf(new W(null, 2, 5, X, [a, b], null)));
                }(), h(I(a)));
              }
              return null;
            }
          };
        }(a, b), null, null);
      };
    }(b, c)(c);
  }());
}
;function fh(a, b) {
  var c = N(a);
  return Ob.e(b, c - 1) ? 0 : b + 1;
}
function gh(a) {
  var b = Ef.f(a), c = fg.e ? fg.e(a, Ze) : fg.call(null, a, Ze);
  if (Ob.e((b % 15 + 15) % 15, 0)) {
    if (qc(c)) {
      return a;
    }
    var d = function() {
      return function(a, b, c) {
        return function k(d) {
          return new U(null, function() {
            return function() {
              for (;;) {
                var a = F(d);
                if (a) {
                  if (uc(a)) {
                    var b = ub(a), c = N(b), e = Zc(c);
                    return function() {
                      for (var a = 0;;) {
                        if (a < c) {
                          var d = z.e(b, a);
                          cd(e, function() {
                            var a = function() {
                              var a = d;
                              return lg.f ? lg.f(a) : lg.call(null, a);
                            }(), b = function() {
                              var a = d;
                              return mg.f ? mg.f(a) : mg.call(null, a);
                            }(), c = function() {
                              var a = d;
                              return ng.f ? ng.f(a) : ng.call(null, a);
                            }(), e = function() {
                              var a = d;
                              return og.f ? og.f(a) : og.call(null, a);
                            }(), f = function() {
                              var a = d;
                              return pg.f ? pg.f(a) : pg.call(null, a);
                            }(), f = fh(e, f), h = P.e(e, f), k = P.e(c, h), h = d, a = new W(null, 2, 5, X, [Xf.i ? Xf.i(c, e, f) : Xf.call(null, c, e, f), Of.i ? Of.i(k, a, b) : Of.call(null, k, a, b)], null);
                            return $f.e ? $f.e(h, a) : $f.call(null, h, a);
                          }());
                          a += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? bd(e.T(), k(vb(a))) : bd(e.T(), null);
                  }
                  var f = G(a);
                  return M(function() {
                    var a = function() {
                      var a = f;
                      return lg.f ? lg.f(a) : lg.call(null, a);
                    }(), b = function() {
                      var a = f;
                      return mg.f ? mg.f(a) : mg.call(null, a);
                    }(), c = function() {
                      var a = f;
                      return ng.f ? ng.f(a) : ng.call(null, a);
                    }(), d = function() {
                      var a = f;
                      return og.f ? og.f(a) : og.call(null, a);
                    }(), e = function() {
                      var a = f;
                      return pg.f ? pg.f(a) : pg.call(null, a);
                    }(), e = fh(d, e), h = P.e(d, e), k = P.e(c, h), h = f, a = new W(null, 2, 5, X, [Xf.i ? Xf.i(c, d, e) : Xf.call(null, c, d, e), Of.i ? Of.i(k, a, b) : Of.call(null, k, a, b)], null);
                    return $f.e ? $f.e(h, a) : $f.call(null, h, a);
                  }(), k(I(a)));
                }
                return null;
              }
            };
          }(a, b, c), null, null);
        };
      }(a, b, c)(c);
    }();
    return hg.e ? hg.e(a, d) : hg.call(null, a, d);
  }
  return a;
}
;function hh(a, b, c) {
  Ug(Ug(a.position, "x", b), "y", c);
  return a;
}
function ih(a, b, c) {
  a = Ug(a, "height", 16 * b);
  return Ug(a, "width", 16 * c);
}
function jh(a) {
  for (var b = $e.f(a), c = mf.f(a), d = F(fg(a, ef)), e = null, f = 0, h = 0;;) {
    if (h < f) {
      var l = e.W(null, h), l = V.e(l, new W(null, 2, 5, X, [ef, of], null));
      b.addChild(l);
      h += 1;
    } else {
      if (d = F(d)) {
        uc(d) ? (f = ub(d), d = vb(d), e = f, f = N(f)) : (e = G(d), e = V.e(e, new W(null, 2, 5, X, [ef, of], null)), b.addChild(e), d = K(d), e = null, f = 0), h = 0;
      } else {
        break;
      }
    }
  }
  d = F(fg(a, df));
  e = null;
  for (h = f = 0;;) {
    if (h < f) {
      var k = e.W(null, h), m = V.e(k, new W(null, 2, 5, X, [df, of], null)), l = lg(k), n = mg(k), p = O.i(n, 0, null), n = O.i(n, 1, null), q = ig(k), k = O.i(q, 0, null), q = O.i(q, 1, null), k = Math.round(k), q = Math.round(q), m = hh(ih(m, p, n), k, q), l = Ug(m, "anchor", l);
      b.addChild(l);
      h += 1;
    } else {
      if (d = F(d)) {
        uc(d) ? (f = ub(d), d = vb(d), e = f, f = N(f)) : (m = G(d), f = V.e(m, new W(null, 2, 5, X, [df, of], null)), e = lg(m), l = mg(m), h = O.i(l, 0, null), l = O.i(l, 1, null), p = ig(m), m = O.i(p, 0, null), p = O.i(p, 1, null), m = Math.round(m), p = Math.round(p), f = hh(ih(f, h, l), m, p), e = Ug(f, "anchor", e), b.addChild(e), d = K(d), e = null, f = 0), h = 0;
      } else {
        break;
      }
    }
  }
  c.render(b);
  return a;
}
;function kh(a) {
  var b = gg.n(a, L([hf, Ye], 0));
  return qc(b) ? a : hg(a, function() {
    return function(a) {
      return function e(b) {
        return new U(null, function() {
          return function() {
            for (;;) {
              var a = F(b);
              if (a) {
                if (uc(a)) {
                  var c = ub(a), k = N(c), m = Zc(k);
                  return function() {
                    for (var a = 0;;) {
                      if (a < k) {
                        var b = z.e(c, a), e = m, f = jg(b), h = ig(f), f = O.i(h, 0, null), h = O.i(h, 1, null), n = ig(b), H = O.i(n, 0, null), n = O.i(n, 1, null), b = Zf(b, new Vf(ff, Math.atan2(h - n, f - H)));
                        e.add(b);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? bd(m.T(), e(vb(a))) : bd(m.T(), null);
                }
                var n = G(a);
                return M(function() {
                  var a = jg(n), b = ig(a), a = O.i(b, 0, null), b = O.i(b, 1, null), c = ig(n), e = O.i(c, 0, null), c = O.i(c, 1, null);
                  return Zf(n, new Vf(ff, Math.atan2(b - c, a - e)));
                }(), e(I(a)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(b)(b);
  }());
}
;function lh() {
  var a = new PIXI.autoDetectRenderer(640, 640);
  document.getElementById("battlefield").appendChild(a.view);
  return a;
}
function mh() {
  var a = new PIXI.Stage(16777215);
  Ug(a, "interactive", !0);
  Ug(a, "click", dh);
  return a;
}
function nh(a) {
  a = jc.i(jc.i(jc.i(a, mf, lh()), $e, mh()), Ef, 0);
  var b;
  b = new PIXI.TilingSprite(Xg.f ? Xg.f("images/grass-tile.png") : Xg.call(null, "images/grass-tile.png"), 640, 640);
  b = eg.n(L([new Pf(ef, b)], 0));
  return hg(a, new W(null, 4, 5, X, [b, ah(160, 160), bh(400, 400), bh(320, 320)], null));
}
var oh = td.f ? td.f(me) : td.call(null, me);
function ph(a) {
  var b = Ef.f(a);
  a = jc.i(a, Ef, b + 1);
  if (!qc(Xb.f ? Xb.f(ch) : Xb.call(null, ch))) {
    var b = zf.f(Xb.f ? Xb.f(ch) : Xb.call(null, ch)), c = Xe.f(Xb.f ? Xb.f(ch) : Xb.call(null, ch));
    ud.e ? ud.e(ch, me) : ud.call(null, ch, me);
    b = ah(b, c);
    c = V.e(b, new W(null, 2, 5, X, [sf, qf], null));
    a = Hd(a, new W(null, 2, 5, X, [gf, c], null), b);
  }
  a = Bg.f ? Bg.f(a) : Bg.call(null, a);
  a = kh.f ? kh.f(a) : kh.call(null, a);
  a = eh.f ? eh.f(a) : eh.call(null, a);
  a = gh(Tg(a));
  return jh.f ? jh.f(a) : jh.call(null, a);
}
var rh = function qh() {
  wd.e(oh, ph);
  return requestAnimFrame(qh);
}, sh = new PIXI.AssetLoader(["images/barbarian-run-down.json", "images/grass-tile.png", "images/town-hall.png"], !1);
Ug(sh, "onComplete", function() {
  wd.e(oh, nh);
  return requestAnimFrame(rh);
});
sh.load();

})();
