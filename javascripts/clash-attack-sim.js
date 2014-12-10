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
;function ha(a, b) {
  null != a && this.append.apply(this, arguments);
}
ha.prototype.Xa = "";
ha.prototype.append = function(a, b, c) {
  this.Xa += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Xa += arguments[d];
    }
  }
  return this;
};
ha.prototype.toString = function() {
  return this.Xa;
};
var ja = null;
function la() {
  return new na(null, 5, [oa, !0, pa, !0, qa, !1, sa, !1, ta, null], null);
}
function s(a) {
  return null != a && !1 !== a;
}
function u(a, b) {
  return a[r(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function ua(a) {
  return null == a ? null : a.constructor;
}
function w(a, b) {
  var c = ua(b), c = s(s(c) ? c.Sb : c) ? c.Rb : r(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function va(a) {
  var b = a.Rb;
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
function D(a) {
  if (a ? a.ha : a) {
    return a.ha(a);
  }
  var b;
  b = D[r(null == a ? null : a)];
  if (!b && (b = D._, !b)) {
    throw w("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Ha = {}, Ia = {}, E = function() {
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
  if (a ? a.nb : a) {
    return a.nb(a, b);
  }
  var c;
  c = Ja[r(null == a ? null : a)];
  if (!c && (c = Ja._, !c)) {
    throw w("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function La(a, b, c) {
  if (a ? a.ia : a) {
    return a.ia(a, b, c);
  }
  var d;
  d = La[r(null == a ? null : a)];
  if (!d && (d = La._, !d)) {
    throw w("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Ma = {};
function Na(a, b) {
  if (a ? a.oa : a) {
    return a.oa(a, b);
  }
  var c;
  c = Na[r(null == a ? null : a)];
  if (!c && (c = Na._, !c)) {
    throw w("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Oa = {};
function Pa(a) {
  if (a ? a.sb : a) {
    return a.sb();
  }
  var b;
  b = Pa[r(null == a ? null : a)];
  if (!b && (b = Pa._, !b)) {
    throw w("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Ra(a) {
  if (a ? a.tb : a) {
    return a.tb();
  }
  var b;
  b = Ra[r(null == a ? null : a)];
  if (!b && (b = Ra._, !b)) {
    throw w("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Sa = {}, Ta = {};
function Ua(a, b, c) {
  if (a ? a.ub : a) {
    return a.ub(a, b, c);
  }
  var d;
  d = Ua[r(null == a ? null : a)];
  if (!d && (d = Ua._, !d)) {
    throw w("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Va(a) {
  if (a ? a.rb : a) {
    return a.rb(a);
  }
  var b;
  b = Va[r(null == a ? null : a)];
  if (!b && (b = Va._, !b)) {
    throw w("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Ya = {};
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
  if (a ? a.Bb : a) {
    return a.Bb(0, b);
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
function mb(a, b, c) {
  if (a ? a.Ab : a) {
    return a.Ab(0, b, c);
  }
  var d;
  d = mb[r(null == a ? null : a)];
  if (!d && (d = mb._, !d)) {
    throw w("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function nb(a) {
  if (a ? a.Ya : a) {
    return a.Ya(a);
  }
  var b;
  b = nb[r(null == a ? null : a)];
  if (!b && (b = nb._, !b)) {
    throw w("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function ob(a, b) {
  if (a ? a.ab : a) {
    return a.ab(a, b);
  }
  var c;
  c = ob[r(null == a ? null : a)];
  if (!c && (c = ob._, !c)) {
    throw w("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function pb(a) {
  if (a ? a.bb : a) {
    return a.bb(a);
  }
  var b;
  b = pb[r(null == a ? null : a)];
  if (!b && (b = pb._, !b)) {
    throw w("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function qb(a, b, c) {
  if (a ? a.$a : a) {
    return a.$a(a, b, c);
  }
  var d;
  d = qb[r(null == a ? null : a)];
  if (!d && (d = qb._, !d)) {
    throw w("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function rb(a, b, c) {
  if (a ? a.zb : a) {
    return a.zb(0, b, c);
  }
  var d;
  d = rb[r(null == a ? null : a)];
  if (!d && (d = rb._, !d)) {
    throw w("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function sb(a) {
  if (a ? a.wb : a) {
    return a.wb();
  }
  var b;
  b = sb[r(null == a ? null : a)];
  if (!b && (b = sb._, !b)) {
    throw w("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function tb(a) {
  if (a ? a.pb : a) {
    return a.pb(a);
  }
  var b;
  b = tb[r(null == a ? null : a)];
  if (!b && (b = tb._, !b)) {
    throw w("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function ub(a) {
  if (a ? a.qb : a) {
    return a.qb(a);
  }
  var b;
  b = ub[r(null == a ? null : a)];
  if (!b && (b = ub._, !b)) {
    throw w("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function vb(a) {
  if (a ? a.ob : a) {
    return a.ob(a);
  }
  var b;
  b = vb[r(null == a ? null : a)];
  if (!b && (b = vb._, !b)) {
    throw w("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function wb(a, b) {
  if (a ? a.Mb : a) {
    return a.Mb(a, b);
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
    if (a ? a.Qb : a) {
      return a.Qb(a, b, c, d, e);
    }
    var n;
    n = xb[r(null == a ? null : a)];
    if (!n && (n = xb._, !n)) {
      throw w("ISwap.-swap!", a);
    }
    return n.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.Pb : a) {
      return a.Pb(a, b, c, d);
    }
    var e;
    e = xb[r(null == a ? null : a)];
    if (!e && (e = xb._, !e)) {
      throw w("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.Ob : a) {
      return a.Ob(a, b, c);
    }
    var d;
    d = xb[r(null == a ? null : a)];
    if (!d && (d = xb._, !d)) {
      throw w("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.Nb : a) {
      return a.Nb(a, b);
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
function zb(a) {
  if (a ? a.jb : a) {
    return a.jb(a);
  }
  var b;
  b = zb[r(null == a ? null : a)];
  if (!b && (b = zb._, !b)) {
    throw w("IIterable.-iterator", a);
  }
  return b.call(null, a);
}
function Ab(a) {
  this.Tb = a;
  this.D = 0;
  this.m = 1073741824;
}
Ab.prototype.Bb = function(a, b) {
  return this.Tb.append(b);
};
function Bb(a) {
  var b = new ha;
  a.H(null, new Ab(b), la());
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
  a && (a.m & 4194304 || a.Wb) ? a = a.I(null) : "number" === typeof a ? a = (Math.floor.f ? Math.floor.f(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Jb(a), 0 !== a && (a = Db(a), a = Eb(0, a), a = Fb(a, 4))) : a = null == a ? 0 : fb(a);
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
  this.Oa = c;
  this.Ra = d;
  this.ba = e;
  this.m = 2154168321;
  this.D = 4096;
}
g = Qb.prototype;
g.H = function(a, b) {
  return F(b, this.Oa);
};
g.I = function() {
  var a = this.Ra;
  return null != a ? a : this.Ra = a = Lb(Gb(this.name), Jb(this.ra));
};
g.O = function(a, b) {
  return new Qb(this.ra, this.name, this.Oa, this.Ra, b);
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
  return b instanceof Qb ? this.Oa === b.Oa : !1;
};
g.toString = function() {
  return this.Oa;
};
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.m & 8388608 || a.Xb)) {
    return a.N(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Rb(a, 0);
  }
  if (u(gb, a)) {
    return hb(a);
  }
  throw Error("" + x.f(a) + " is not ISeqable");
}
function I(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.m & 64 || a.Za)) {
    return a.Z(null);
  }
  a = G(a);
  return null == a ? null : A(a);
}
function J(a) {
  return null != a ? a && (a.m & 64 || a.Za) ? a.ha(null) : (a = G(a)) ? D(a) : K : K;
}
function L(a) {
  return null == a ? null : a && (a.m & 128 || a.kb) ? a.ga(null) : G(J(a));
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
            a = d, d = I(e), e = L(e);
          } else {
            return b.e(d, I(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.B = 2;
    a.s = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
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
      b += 1, c = Cb(31, c) + Kb(I(a)) | 0, a = L(a);
    } else {
      return Sb(c, b);
    }
  }
}
function Ub(a) {
  var b = 0, c = 0;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = c + Kb(I(a)) | 0, a = L(a);
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
Ya["function"] = !0;
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
Vb.prototype.rb = function() {
  return this.na;
};
function Wb(a) {
  return a instanceof Vb;
}
function Xb(a) {
  return Va(a);
}
var Yb = function() {
  function a(a, b, c, d) {
    for (var l = Ba(a);;) {
      if (d < l) {
        var m = y.e(a, d);
        c = b.e ? b.e(c, m) : b.call(null, c, m);
        if (Wb(c)) {
          return Va(c);
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
          return Va(l);
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
          return Va(d);
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
          return Va(c);
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
          return Va(l);
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
          return Va(d);
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
  return a ? a.m & 2 || a.Eb ? !0 : a.m ? !1 : u(za, a) : u(za, a);
}
function ac(a) {
  return a ? a.m & 16 || a.xb ? !0 : a.m ? !1 : u(Ea, a) : u(Ea, a);
}
function bc(a, b) {
  this.j = a;
  this.A = b;
}
bc.prototype.vb = function() {
  return this.A < this.j.length;
};
bc.prototype.next = function() {
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
g.jb = function() {
  return new bc(this.j, this.A);
};
g.ga = function() {
  return this.A + 1 < this.j.length ? new Rb(this.j, this.A + 1) : null;
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
  return this.A + 1 < this.j.length ? new Rb(this.j, this.A + 1) : K;
};
g.N = function() {
  return this;
};
g.M = function(a, b) {
  return N.e ? N.e(b, this) : N.call(null, b, this);
};
var dc = function() {
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
          a = b.e(a, d), d = I(e), e = L(e);
        } else {
          return b.e(a, d);
        }
      }
    }
    a.B = 2;
    a.s = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
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
    if (a && (a.m & 2 || a.Eb)) {
      a = a.Q(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (u(za, a)) {
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
        return G(a) ? I(a) : c;
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
          return I(a);
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
}(), Q = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.m & 16 || a.xb)) {
      return a.ja(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (u(Ea, a)) {
      return y.e(a, b);
    }
    if (a ? a.m & 64 || a.Za || (a.m ? 0 : u(Fa, a)) : u(Fa, a)) {
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
    if (a && (a.m & 16 || a.xb)) {
      return a.W(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (u(Ea, a)) {
      return y.e(a, b);
    }
    if (a ? a.m & 64 || a.Za || (a.m ? 0 : u(Fa, a)) : u(Fa, a)) {
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
    return null != a ? a && (a.m & 256 || a.yb) ? a.G(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : u(Ia, a) ? E.i(a, b, c) : c : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.m & 256 || a.yb) ? a.J(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : u(Ia, a) ? E.e(a, b) : null;
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
      a = La(a, b, c);
    } else {
      a: {
        a = [b];
        c = [c];
        b = a.length;
        var h = 0, k;
        for (k = nb(hc);;) {
          if (h < b) {
            var l = h + 1;
            k = k.$a(null, a[h], c[h]);
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
          d = I(l), e = I(L(l)), l = L(L(l));
        } else {
          return a;
        }
      }
    }
    a.B = 3;
    a.s = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var l = I(a);
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
    return null == a ? null : Na(a, b);
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
          d = I(e), e = L(e);
        } else {
          return a;
        }
      }
    }
    a.B = 2;
    a.s = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
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
  return s(b) ? b : a ? s(s(null) ? null : a.Db) ? !0 : a.cc ? !1 : u(ya, a) : u(ya, a);
}
function lc(a, b) {
  this.k = a;
  this.meta = b;
  this.D = 0;
  this.m = 393217;
}
g = lc.prototype;
g.call = function() {
  function a(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, B, P, W, ma) {
    a = this.k;
    return mc.ib ? mc.ib(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, B, P, W, ma) : mc.call(null, a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, B, P, W, ma);
  }
  function b(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, B, P, W) {
    a = this;
    return a.k.Ea ? a.k.Ea(b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, B, P, W) : a.k.call(null, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, B, P, W);
  }
  function c(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, B, P) {
    a = this;
    return a.k.Da ? a.k.Da(b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, B, P) : a.k.call(null, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, B, P);
  }
  function d(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, B) {
    a = this;
    return a.k.Ca ? a.k.Ca(b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, B) : a.k.call(null, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, B);
  }
  function e(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H) {
    a = this;
    return a.k.Ba ? a.k.Ba(b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H) : a.k.call(null, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H);
  }
  function f(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C) {
    a = this;
    return a.k.Aa ? a.k.Aa(b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C) : a.k.call(null, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C);
  }
  function h(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z) {
    a = this;
    return a.k.za ? a.k.za(b, c, d, e, f, h, k, l, m, n, p, q, t, v, z) : a.k.call(null, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z);
  }
  function k(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v) {
    a = this;
    return a.k.ya ? a.k.ya(b, c, d, e, f, h, k, l, m, n, p, q, t, v) : a.k.call(null, b, c, d, e, f, h, k, l, m, n, p, q, t, v);
  }
  function l(a, b, c, d, e, f, h, k, l, m, n, p, q, t) {
    a = this;
    return a.k.xa ? a.k.xa(b, c, d, e, f, h, k, l, m, n, p, q, t) : a.k.call(null, b, c, d, e, f, h, k, l, m, n, p, q, t);
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
  function t(a, b, c, d, e, f, h, k, l) {
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
  function C(a, b, c, d, e, f) {
    a = this;
    return a.k.R ? a.k.R(b, c, d, e, f) : a.k.call(null, b, c, d, e, f);
  }
  function H(a, b, c, d, e) {
    a = this;
    return a.k.t ? a.k.t(b, c, d, e) : a.k.call(null, b, c, d, e);
  }
  function P(a, b, c, d) {
    a = this;
    return a.k.i ? a.k.i(b, c, d) : a.k.call(null, b, c, d);
  }
  function W(a, b, c) {
    a = this;
    return a.k.e ? a.k.e(b, c) : a.k.call(null, b, c);
  }
  function ma(a, b) {
    a = this;
    return a.k.f ? a.k.f(b) : a.k.call(null, b);
  }
  function Xa(a) {
    a = this;
    return a.k.C ? a.k.C() : a.k.call(null);
  }
  var B = null, B = function(B, ea, ga, ia, ka, ra, xa, Aa, Ga, Ka, Qa, Wa, ab, lb, yb, Ob, pc, Wc, yd, ie, df, $f) {
    switch(arguments.length) {
      case 1:
        return Xa.call(this, B);
      case 2:
        return ma.call(this, B, ea);
      case 3:
        return W.call(this, B, ea, ga);
      case 4:
        return P.call(this, B, ea, ga, ia);
      case 5:
        return H.call(this, B, ea, ga, ia, ka);
      case 6:
        return C.call(this, B, ea, ga, ia, ka, ra);
      case 7:
        return z.call(this, B, ea, ga, ia, ka, ra, xa);
      case 8:
        return v.call(this, B, ea, ga, ia, ka, ra, xa, Aa);
      case 9:
        return t.call(this, B, ea, ga, ia, ka, ra, xa, Aa, Ga);
      case 10:
        return q.call(this, B, ea, ga, ia, ka, ra, xa, Aa, Ga, Ka);
      case 11:
        return p.call(this, B, ea, ga, ia, ka, ra, xa, Aa, Ga, Ka, Qa);
      case 12:
        return n.call(this, B, ea, ga, ia, ka, ra, xa, Aa, Ga, Ka, Qa, Wa);
      case 13:
        return m.call(this, B, ea, ga, ia, ka, ra, xa, Aa, Ga, Ka, Qa, Wa, ab);
      case 14:
        return l.call(this, B, ea, ga, ia, ka, ra, xa, Aa, Ga, Ka, Qa, Wa, ab, lb);
      case 15:
        return k.call(this, B, ea, ga, ia, ka, ra, xa, Aa, Ga, Ka, Qa, Wa, ab, lb, yb);
      case 16:
        return h.call(this, B, ea, ga, ia, ka, ra, xa, Aa, Ga, Ka, Qa, Wa, ab, lb, yb, Ob);
      case 17:
        return f.call(this, B, ea, ga, ia, ka, ra, xa, Aa, Ga, Ka, Qa, Wa, ab, lb, yb, Ob, pc);
      case 18:
        return e.call(this, B, ea, ga, ia, ka, ra, xa, Aa, Ga, Ka, Qa, Wa, ab, lb, yb, Ob, pc, Wc);
      case 19:
        return d.call(this, B, ea, ga, ia, ka, ra, xa, Aa, Ga, Ka, Qa, Wa, ab, lb, yb, Ob, pc, Wc, yd);
      case 20:
        return c.call(this, B, ea, ga, ia, ka, ra, xa, Aa, Ga, Ka, Qa, Wa, ab, lb, yb, Ob, pc, Wc, yd, ie);
      case 21:
        return b.call(this, B, ea, ga, ia, ka, ra, xa, Aa, Ga, Ka, Qa, Wa, ab, lb, yb, Ob, pc, Wc, yd, ie, df);
      case 22:
        return a.call(this, B, ea, ga, ia, ka, ra, xa, Aa, Ga, Ka, Qa, Wa, ab, lb, yb, Ob, pc, Wc, yd, ie, df, $f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  B.f = Xa;
  B.e = ma;
  B.i = W;
  B.t = P;
  B.R = H;
  B.fa = C;
  B.ma = z;
  B.Fa = v;
  B.Ga = t;
  B.ua = q;
  B.va = p;
  B.wa = n;
  B.xa = m;
  B.ya = l;
  B.za = k;
  B.Aa = h;
  B.Ba = f;
  B.Ca = e;
  B.Da = d;
  B.Ea = c;
  B.Gb = b;
  B.ib = a;
  return B;
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
g.ya = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t) {
  return this.k.ya ? this.k.ya(a, b, c, d, e, f, h, k, l, m, n, p, q, t) : this.k.call(null, a, b, c, d, e, f, h, k, l, m, n, p, q, t);
};
g.za = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v) {
  return this.k.za ? this.k.za(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v) : this.k.call(null, a, b, c, d, e, f, h, k, l, m, n, p, q, t, v);
};
g.Aa = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z) {
  return this.k.Aa ? this.k.Aa(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z) : this.k.call(null, a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z);
};
g.Ba = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C) {
  return this.k.Ba ? this.k.Ba(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C) : this.k.call(null, a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C);
};
g.Ca = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H) {
  return this.k.Ca ? this.k.Ca(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H) : this.k.call(null, a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H);
};
g.Da = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P) {
  return this.k.Da ? this.k.Da(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P) : this.k.call(null, a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P);
};
g.Ea = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P, W) {
  return this.k.Ea ? this.k.Ea(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P, W) : this.k.call(null, a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P, W);
};
g.Gb = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P, W, ma) {
  var Xa = this.k;
  return mc.ib ? mc.ib(Xa, a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P, W, ma) : mc.call(null, Xa, a, b, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P, W, ma);
};
g.Db = !0;
g.O = function(a, b) {
  return new lc(this.k, b);
};
g.L = function() {
  return this.meta;
};
function nc(a, b) {
  return kc(a) && !(a ? a.m & 262144 || a.ac || (a.m ? 0 : u($a, a)) : u($a, a)) ? new lc(a, b) : null == a ? null : bb(a, b);
}
function oc(a) {
  var b = null != a;
  return(b ? a ? a.m & 131072 || a.Jb || (a.m ? 0 : u(Ya, a)) : u(Ya, a) : b) ? Za(a) : null;
}
function qc(a) {
  var b;
  (b = null == a) || (a = G(a), b = s(a) ? !1 : !0);
  return b;
}
function rc(a) {
  return null == a ? !1 : a ? a.m & 4096 || a.Zb ? !0 : a.m ? !1 : u(Sa, a) : u(Sa, a);
}
function sc(a) {
  return null == a ? !1 : a ? a.m & 1024 || a.Hb ? !0 : a.m ? !1 : u(Ma, a) : u(Ma, a);
}
function tc(a) {
  return a ? a.m & 16384 || a.$b ? !0 : a.m ? !1 : u(Ta, a) : u(Ta, a);
}
function uc(a) {
  return a ? a.D & 512 || a.Vb ? !0 : !1 : !1;
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
  if (ua(a) === ua(b)) {
    return a && (a.D & 2048 || a.gb) ? a.hb(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  throw Error("compare on non-nil objects of different types");
}
var Bc = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = Pb(Q.e(a, h), Q.e(b, h));
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
        var h = I(c);
        b = a.e ? a.e(b, h) : a.call(null, b, h);
        if (Wb(b)) {
          return Va(b);
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
      var h = I(c), c = L(c);
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
    return c && (c.m & 524288 || c.Lb) ? c.Y(null, a, b) : c instanceof Array ? Zb.i(c, a, b) : "string" === typeof c ? Zb.i(c, a, b) : u(cb, c) ? db.i(c, a, b) : Dc.i(a, b, c);
  }
  function b(a, b) {
    return b && (b.m & 524288 || b.Lb) ? b.X(null, a) : b instanceof Array ? Zb.e(b, a) : "string" === typeof b ? Zb.e(b, a) : u(cb, b) ? db.e(b, a) : Dc.e(a, b);
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
      for (var e = new ha(b.f(a)), l = d;;) {
        if (s(l)) {
          e = e.append(b.f(I(l))), l = L(l);
        } else {
          return e.toString();
        }
      }
    }
    a.B = 1;
    a.s = function(a) {
      var b = I(a);
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
  if (b ? b.m & 16777216 || b.Yb || (b.m ? 0 : u(ib, b)) : u(ib, b)) {
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
          if (null != d && Nb.e(I(c), I(d))) {
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
      var c = I(a), b = (b + (Kb(function() {
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
  return Bb(this);
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
  return Bb(this);
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
  return Bb(this);
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
  return(c ? c : b && (b.m & 64 || b.Za)) ? new Sc(null, a, b, null) : new Sc(null, a, G(b), null);
}
function S(a, b, c, d) {
  this.ra = a;
  this.name = b;
  this.ca = c;
  this.Ra = d;
  this.m = 2153775105;
  this.D = 4096;
}
g = S.prototype;
g.H = function(a, b) {
  return F(b, ":" + x.f(this.ca));
};
g.I = function() {
  var a = this.Ra;
  return null != a ? a : this.Ra = a = Lb(Gb(this.name), Jb(this.ra)) + 2654435769 | 0;
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
function T(a, b) {
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
    if (a instanceof Qb) {
      var b;
      if (a && (a.D & 4096 || a.Kb)) {
        b = a.ra;
      } else {
        throw Error("Doesn't support namespace: " + x.f(a));
      }
      return new S(b, Tc.f ? Tc.f(a) : Tc.call(null, a), a.Oa, null);
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
function U(a, b, c, d) {
  this.meta = a;
  this.Ua = b;
  this.S = c;
  this.q = d;
  this.D = 0;
  this.m = 32374988;
}
g = U.prototype;
g.toString = function() {
  return Bb(this);
};
function Vc(a) {
  null != a.Ua && (a.S = a.Ua.C ? a.Ua.C() : a.Ua.call(null), a.Ua = null);
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
  return null == this.S ? null : I(this.S);
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
    if (a instanceof U) {
      a = Vc(a);
    } else {
      return this.S = a, G(this.S);
    }
  }
};
g.O = function(a, b) {
  return new U(b, this.Ua, this.S, this.q);
};
g.M = function(a, b) {
  return N(b, this);
};
function Xc(a, b) {
  this.mb = a;
  this.end = b;
  this.D = 0;
  this.m = 2;
}
Xc.prototype.Q = function() {
  return this.end;
};
Xc.prototype.add = function(a) {
  this.mb[this.end] = a;
  return this.end += 1;
};
Xc.prototype.U = function() {
  var a = new Yc(this.mb, 0, this.end);
  this.mb = null;
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
g.wb = function() {
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
g.Q = function() {
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
  this.U = a;
  this.sa = b;
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
g.pb = function() {
  return this.U;
};
g.qb = function() {
  return null == this.sa ? K : this.sa;
};
g.O = function(a, b) {
  return new ad(this.U, this.sa, b, this.q);
};
g.M = function(a, b) {
  return N(b, this);
};
g.ob = function() {
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
      b.push(I(a)), a = L(a);
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
  return null == b ? null : null == L(b) ? G(I(b)) : N(I(b), fd(L(b)));
}, hd = function() {
  function a(a, b) {
    return new U(null, function() {
      var c = G(a);
      return c ? uc(c) ? bd(tb(c), d.e(ub(c), b)) : N(I(c), d.e(J(c), b)) : b;
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
      2 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function p(a, b) {
        return new U(null, function() {
          var c = G(a);
          return c ? uc(c) ? bd(tb(c), p(ub(c), b)) : N(I(c), p(J(c), b)) : s(b) ? p(I(b), L(b)) : null;
        }, null, null);
      }(d.e(a, c), e);
    }
    a.B = 2;
    a.s = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
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
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var n = I(a);
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
    return nb(ec);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = ob(a, c), s(d)) {
          c = I(d), d = L(d);
        } else {
          return a;
        }
      }
    }
    a.B = 2;
    a.s = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
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
        return ob(b, e);
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
    return ob(a, b);
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
          c = I(k), d = I(L(k)), k = L(L(k));
        } else {
          return a;
        }
      }
    }
    a.B = 3;
    a.s = function(a) {
      var c = I(a);
      a = L(a);
      var h = I(a);
      a = L(a);
      var k = I(a);
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
  var e = D(d);
  if (1 === b) {
    return a.f ? a.f(c) : a.f ? a.f(c) : a.call(null, c);
  }
  var d = A(e), f = D(e);
  if (2 === b) {
    return a.e ? a.e(c, d) : a.e ? a.e(c, d) : a.call(null, c, d);
  }
  var e = A(f), h = D(f);
  if (3 === b) {
    return a.i ? a.i(c, d, e) : a.i ? a.i(c, d, e) : a.call(null, c, d, e);
  }
  var f = A(h), k = D(h);
  if (4 === b) {
    return a.t ? a.t(c, d, e, f) : a.t ? a.t(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = A(k), l = D(k);
  if (5 === b) {
    return a.R ? a.R(c, d, e, f, h) : a.R ? a.R(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = A(l), m = D(l);
  if (6 === b) {
    return a.fa ? a.fa(c, d, e, f, h, k) : a.fa ? a.fa(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = A(m), n = D(m);
  if (7 === b) {
    return a.ma ? a.ma(c, d, e, f, h, k, l) : a.ma ? a.ma(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var m = A(n), p = D(n);
  if (8 === b) {
    return a.Fa ? a.Fa(c, d, e, f, h, k, l, m) : a.Fa ? a.Fa(c, d, e, f, h, k, l, m) : a.call(null, c, d, e, f, h, k, l, m);
  }
  var n = A(p), q = D(p);
  if (9 === b) {
    return a.Ga ? a.Ga(c, d, e, f, h, k, l, m, n) : a.Ga ? a.Ga(c, d, e, f, h, k, l, m, n) : a.call(null, c, d, e, f, h, k, l, m, n);
  }
  var p = A(q), t = D(q);
  if (10 === b) {
    return a.ua ? a.ua(c, d, e, f, h, k, l, m, n, p) : a.ua ? a.ua(c, d, e, f, h, k, l, m, n, p) : a.call(null, c, d, e, f, h, k, l, m, n, p);
  }
  var q = A(t), v = D(t);
  if (11 === b) {
    return a.va ? a.va(c, d, e, f, h, k, l, m, n, p, q) : a.va ? a.va(c, d, e, f, h, k, l, m, n, p, q) : a.call(null, c, d, e, f, h, k, l, m, n, p, q);
  }
  var t = A(v), z = D(v);
  if (12 === b) {
    return a.wa ? a.wa(c, d, e, f, h, k, l, m, n, p, q, t) : a.wa ? a.wa(c, d, e, f, h, k, l, m, n, p, q, t) : a.call(null, c, d, e, f, h, k, l, m, n, p, q, t);
  }
  var v = A(z), C = D(z);
  if (13 === b) {
    return a.xa ? a.xa(c, d, e, f, h, k, l, m, n, p, q, t, v) : a.xa ? a.xa(c, d, e, f, h, k, l, m, n, p, q, t, v) : a.call(null, c, d, e, f, h, k, l, m, n, p, q, t, v);
  }
  var z = A(C), H = D(C);
  if (14 === b) {
    return a.ya ? a.ya(c, d, e, f, h, k, l, m, n, p, q, t, v, z) : a.ya ? a.ya(c, d, e, f, h, k, l, m, n, p, q, t, v, z) : a.call(null, c, d, e, f, h, k, l, m, n, p, q, t, v, z);
  }
  var C = A(H), P = D(H);
  if (15 === b) {
    return a.za ? a.za(c, d, e, f, h, k, l, m, n, p, q, t, v, z, C) : a.za ? a.za(c, d, e, f, h, k, l, m, n, p, q, t, v, z, C) : a.call(null, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C);
  }
  var H = A(P), W = D(P);
  if (16 === b) {
    return a.Aa ? a.Aa(c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H) : a.Aa ? a.Aa(c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H) : a.call(null, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H);
  }
  var P = A(W), ma = D(W);
  if (17 === b) {
    return a.Ba ? a.Ba(c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P) : a.Ba ? a.Ba(c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P) : a.call(null, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P);
  }
  var W = A(ma), Xa = D(ma);
  if (18 === b) {
    return a.Ca ? a.Ca(c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P, W) : a.Ca ? a.Ca(c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P, W) : a.call(null, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P, W);
  }
  ma = A(Xa);
  Xa = D(Xa);
  if (19 === b) {
    return a.Da ? a.Da(c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P, W, ma) : a.Da ? a.Da(c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P, W, ma) : a.call(null, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P, W, ma);
  }
  var B = A(Xa);
  D(Xa);
  if (20 === b) {
    return a.Ea ? a.Ea(c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P, W, ma, B) : a.Ea ? a.Ea(c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P, W, ma, B) : a.call(null, c, d, e, f, h, k, l, m, n, p, q, t, v, z, C, H, P, W, ma, B);
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
    function a(c, d, e, f, h, t) {
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
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var f = I(a);
      a = L(a);
      var h = I(a);
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
    c = I(b);
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
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var f = I(a);
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
  this.Ub = c;
  this.Cb = d;
  this.m = 6455296;
  this.D = 16386;
}
g = pd.prototype;
g.I = function() {
  return this[ba] || (this[ba] = ++ca);
};
g.Ab = function(a, b, c) {
  for (var d = G(this.Cb), e = null, f = 0, h = 0;;) {
    if (h < f) {
      a = e.W(null, h);
      var k = Q.i(a, 0, null);
      a = Q.i(a, 1, null);
      var l = b, m = c;
      a.t ? a.t(k, this, l, m) : a.call(null, k, this, l, m);
      h += 1;
    } else {
      if (a = G(d)) {
        d = a, uc(d) ? (e = tb(d), d = ub(d), a = e, f = O(e), e = a) : (a = I(d), k = Q.i(a, 0, null), a = Q.i(a, 1, null), e = k, f = b, h = c, a.t ? a.t(e, this, f, h) : a.call(null, e, this, f, h), d = L(d), e = null, f = 0), h = 0;
      } else {
        return null;
      }
    }
  }
};
g.L = function() {
  return this.meta;
};
g.rb = function() {
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
      var d = (null == c ? 0 : c ? c.m & 64 || c.Za || (c.m ? 0 : u(Fa, c)) : u(Fa, c)) ? mc.e(qd, c) : c, e = R.e(d, rd), d = R.e(d, qa);
      return new pd(a, d, e, null);
    }
    a.B = 1;
    a.s = function(a) {
      var c = I(a);
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
    var c = a.Ub;
    if (null != c && !s(c.f ? c.f(b) : c.call(null, b))) {
      throw Error("Assert failed: Validator rejected reference state\n" + x.f(function() {
        var a = Rc(new Qb(null, "validate", "validate", 1439230700, null), new Qb(null, "new-value", "new-value", -1567397401, null));
        return ud.f ? ud.f(a) : ud.call(null, a);
      }()));
    }
    c = a.state;
    a.state = b;
    null != a.Cb && mb(a, c, b);
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
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var f = I(a);
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
    return new U(null, function() {
      var f = G(b), p = G(c), q = G(d);
      if (f && p && q) {
        var t = N, v;
        v = I(f);
        var z = I(p), C = I(q);
        v = a.i ? a.i(v, z, C) : a.call(null, v, z, C);
        f = t(v, e.t(a, J(f), J(p), J(q)));
      } else {
        f = null;
      }
      return f;
    }, null, null);
  }
  function b(a, b, c) {
    return new U(null, function() {
      var d = G(b), f = G(c);
      if (d && f) {
        var p = N, q;
        q = I(d);
        var t = I(f);
        q = a.e ? a.e(q, t) : a.call(null, q, t);
        d = p(q, e.i(a, J(d), J(f)));
      } else {
        d = null;
      }
      return d;
    }, null, null);
  }
  function c(a, b) {
    return new U(null, function() {
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
          var b = I(c);
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
            var b = I(a);
            a = L(a);
            var c = I(a);
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
      var t = null;
      4 < arguments.length && (t = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, t);
    }
    function b(a, c, d, f, h) {
      var k = function z(a) {
        return new U(null, function() {
          var b = e.e(G, a);
          return nd(Ec, b) ? N(e.e(I, b), z(e.e(J, b))) : null;
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
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var f = I(a);
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
    return new U(null, function() {
      if (0 < a) {
        var f = G(b);
        return f ? N(I(f), c.e(a - 1, J(f))) : null;
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, h) {
            var k = Va(a), l = vd.e(a, Gc), k = 0 < k ? b.e ? b.e(d, h) : b.call(null, d, h) : d;
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
}(), zd = function() {
  function a(a, b) {
    return new U(null, function(c) {
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
            var k = Va(a);
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
}(), Ad = function() {
  function a(a, b) {
    return xd.e(a, c.f(b));
  }
  function b(a) {
    return new U(null, function() {
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
    return new U(null, function() {
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
    return new U(null, function() {
      var f = G(a), h = G(c);
      return f && h ? N(I(f), N(I(h), b.e(J(f), J(h)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return new U(null, function() {
        var c = wd.e(G, fc.n(e, d, M([a], 0)));
        return nd(Ec, c) ? hd.e(wd.e(I, c), mc.e(b, wd.e(J, c))) : null;
      }, null, null);
    }
    a.B = 2;
    a.s = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
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
  return zd.e(1, Cd.e(Ad.f(a), b));
}
var Ed = function() {
  function a(a, b) {
    return new U(null, function() {
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
        h = I(f);
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
    a && (a.D & 4 || a.Fb) ? (b = Fc.t(b, jd, nb(a), c), b = pb(b), a = nc(b, oc(a))) : a = Fc.t(b, fc, a, c);
    return a;
  }
  function b(a, b) {
    var c;
    null != a ? a && (a.D & 4 || a.Fb) ? (c = Cc.i(ob, nb(a), b), c = pb(c), c = nc(c, oc(a))) : c = Cc.i(Da, a, b) : c = Cc.i(fc, K, b);
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
        if (k ? k.m & 256 || k.yb || (k.m ? 0 : u(Ia, k)) : u(Ia, k)) {
          a = R.i(a, I(b), h);
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
  var e = Q.i(c, 0, null), f;
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
  this.lb = b;
  this.j = c;
  this.v = d;
  this.start = e;
  this.end = f;
}
Ud.prototype.vb = function() {
  return this.A < this.end;
};
Ud.prototype.next = function() {
  32 === this.A - this.lb && (this.j = Qd(this.v, this.A), this.lb += 32);
  var a = this.j[this.A & 31];
  this.A += 1;
  return a;
};
function V(a, b, c, d, e, f) {
  this.meta = a;
  this.o = b;
  this.shift = c;
  this.root = d;
  this.ea = e;
  this.q = f;
  this.m = 167668511;
  this.D = 8196;
}
g = V.prototype;
g.toString = function() {
  return Bb(this);
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
g.ub = function(a, b, c) {
  if (0 <= b && b < this.o) {
    return Ld(this) <= b ? (a = wa(this.ea), a[b & 31] = c, new V(this.meta, this.o, this.shift, this.root, a, null)) : new V(this.meta, this.o, this.shift, Td(this, this.shift, this.root, b, c), this.ea, null);
  }
  if (b === this.o) {
    return Da(this, c);
  }
  throw Error("Index " + x.f(b) + " out of bounds  [0," + x.f(this.o) + "]");
};
g.jb = function() {
  var a = this.o;
  return new Ud(0, 0, 0 < O(this) ? Qd(this, 0) : null, this, 0, a);
};
g.L = function() {
  return this.meta;
};
g.Q = function() {
  return this.o;
};
g.sb = function() {
  return y.e(this, 0);
};
g.tb = function() {
  return y.e(this, 1);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Tb(this);
};
g.F = function(a, b) {
  if (b instanceof V) {
    if (this.o === O(b)) {
      for (var c = zb(this), d = zb(b);;) {
        if (s(c.vb())) {
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
g.Ya = function() {
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
    return Ua(this, b, c);
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
  return new V(b, this.o, this.shift, this.root, this.ea, this.q);
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
    return new V(this.meta, this.o + 1, this.shift, this.root, d, null);
  }
  c = (d = this.o >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Kd(null), d.j[0] = this.root, e = Md(null, this.shift, new Jd(null, this.ea)), d.j[1] = e) : d = Od(this, this.shift, this.root, new Jd(null, this.ea));
  return new V(this.meta, this.o + 1, c, d, [b], null);
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
var X = new Jd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), ec = new V(null, 0, 5, X, [], 0);
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
  return Bb(this);
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
g.pb = function() {
  return $c.e(this.Ia, this.off);
};
g.qb = function() {
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
g.ob = function() {
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
  return Bb(this);
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
g.ub = function(a, b, c) {
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
    return Ua(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.N = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : N(y.e(a.v, e), new U(null, function() {
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
  var c = this.meta, d = Ua(this.v, this.end, b), e = this.start, f = this.end + 1;
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
g.zb = function(a, b, c) {
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
      return ob(this, c);
    }
    throw Error("Index " + x.f(b) + " out of bounds for TransientVector of length" + x.f(d.o));
  }
  throw Error("assoc! after persistent!");
};
g.$a = function(a, b, c) {
  if ("number" === typeof b) {
    return rb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.ab = function(a, b) {
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
g.bb = function() {
  if (this.root.K) {
    this.root.K = null;
    var a = this.o - Ld(this), b = Array(a);
    wc(this.ea, 0, b, 0, a);
    return new V(null, this.o, this.shift, this.root, b, null);
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
    return Nb.e(R.i(b, I(a), ge), I(L(a)));
  }, a)) : null : null);
}
function je(a, b) {
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
      if (b instanceof Qb) {
        a: {
          d = c.length;
          e = b.Oa;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            h = c[f];
            if (h instanceof Qb && e === h.Oa) {
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
function ke(a, b, c) {
  this.j = a;
  this.A = b;
  this.ba = c;
  this.D = 0;
  this.m = 32374990;
}
g = ke.prototype;
g.toString = function() {
  return Bb(this);
};
g.L = function() {
  return this.ba;
};
g.ga = function() {
  return this.A < this.j.length - 2 ? new ke(this.j, this.A + 2, this.ba) : null;
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
  return new V(null, 2, 5, X, [this.j[this.A], this.j[this.A + 1]], null);
};
g.ha = function() {
  return this.A < this.j.length - 2 ? new ke(this.j, this.A + 2, this.ba) : K;
};
g.N = function() {
  return this;
};
g.O = function(a, b) {
  return new ke(this.j, this.A, b);
};
g.M = function(a, b) {
  return N(b, this);
};
function le(a, b, c) {
  this.j = a;
  this.A = b;
  this.o = c;
}
le.prototype.vb = function() {
  return this.A < this.o;
};
le.prototype.next = function() {
  var a = new V(null, 2, 5, X, [this.j[this.A], this.j[this.A + 1]], null);
  this.A += 2;
  return a;
};
function na(a, b, c, d) {
  this.meta = a;
  this.o = b;
  this.j = c;
  this.q = d;
  this.m = 16647951;
  this.D = 8196;
}
g = na.prototype;
g.toString = function() {
  return Bb(this);
};
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  a = je(this, b);
  return-1 === a ? c : this.j[a + 1];
};
g.jb = function() {
  return new le(this.j, 0, 2 * this.o);
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
  if (b && (b.m & 1024 || b.Hb)) {
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
g.Ya = function() {
  return new me({}, this.j.length, wa(this.j));
};
g.V = function() {
  return bb(ne, this.meta);
};
g.X = function(a, b) {
  return Dc.e(b, this);
};
g.Y = function(a, b, c) {
  return Dc.i(b, c, this);
};
g.oa = function(a, b) {
  if (0 <= je(this, b)) {
    var c = this.j.length, d = c - 2;
    if (0 === d) {
      return Ca(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new na(this.meta, this.o - 1, d, null);
      }
      Nb.e(b, this.j[e]) || (d[f] = this.j[e], d[f + 1] = this.j[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
g.ia = function(a, b, c) {
  a = je(this, b);
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
      return new na(this.meta, this.o + 1, e, null);
    }
    return bb(La(Fd.e(hc, this), b, c), this.meta);
  }
  if (c === this.j[a + 1]) {
    return this;
  }
  b = wa(this.j);
  b[a + 1] = c;
  return new na(this.meta, this.o, b, null);
};
g.nb = function(a, b) {
  return-1 !== je(this, b);
};
g.N = function() {
  var a = this.j;
  return 0 <= a.length - 2 ? new ke(a, 0, null) : null;
};
g.O = function(a, b) {
  return new na(b, this.o, this.j, this.q);
};
g.M = function(a, b) {
  if (tc(b)) {
    return La(this, y.e(b, 0), y.e(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = I(d);
    if (tc(e)) {
      c = La(c, y.e(e, 0), y.e(e, 1)), d = L(d);
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
var ne = new na(null, 0, [], null), oe = 8;
function me(a, b, c) {
  this.Sa = a;
  this.Wa = b;
  this.j = c;
  this.D = 56;
  this.m = 258;
}
g = me.prototype;
g.$a = function(a, b, c) {
  var d = this;
  if (s(d.Sa)) {
    a = je(this, b);
    if (-1 === a) {
      return d.Wa + 2 <= 2 * oe ? (d.Wa += 2, d.j.push(b), d.j.push(c), this) : kd.i(function() {
        var a = d.Wa, b = d.j;
        return pe.e ? pe.e(a, b) : pe.call(null, a, b);
      }(), b, c);
    }
    c !== d.j[a + 1] && (d.j[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
g.ab = function(a, b) {
  if (s(this.Sa)) {
    if (b ? b.m & 2048 || b.Ib || (b.m ? 0 : u(Oa, b)) : u(Oa, b)) {
      return qb(this, Nc.f ? Nc.f(b) : Nc.call(null, b), Oc.f ? Oc.f(b) : Oc.call(null, b));
    }
    for (var c = G(b), d = this;;) {
      var e = I(c);
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
g.bb = function() {
  if (s(this.Sa)) {
    return this.Sa = !1, new na(null, Ic(this.Wa), this.j, null);
  }
  throw Error("persistent! called twice");
};
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  if (s(this.Sa)) {
    return a = je(this, b), -1 === a ? c : this.j[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.Q = function() {
  if (s(this.Sa)) {
    return Ic(this.Wa);
  }
  throw Error("count after persistent!");
};
function pe(a, b) {
  for (var c = nb(hc), d = 0;;) {
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
  return a === b ? !0 : T(a, b) ? !0 : Nb.e(a, b);
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
    a = a.Ta(b);
    a.j[c] = h;
    a.j[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.Ta(b);
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
g.Ta = function(a) {
  if (a === this.K) {
    return this;
  }
  var b = Lc(this.P), c = Array(0 > b ? 4 : 2 * (b + 1));
  wc(this.j, 0, c, 0, 2 * b);
  return new ve(a, this.P, c);
};
g.cb = function() {
  var a = this.j;
  return we.f ? we.f(a) : we.call(null, a);
};
g.Ma = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.P & e)) {
    return d;
  }
  var f = Lc(this.P & e - 1), e = this.j[2 * f], f = this.j[2 * f + 1];
  return null == e ? f.Ma(a + 5, b, c, d) : re(c, e) ? f : d;
};
g.qa = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = Lc(this.P & h - 1);
  if (0 === (this.P & h)) {
    var l = Lc(this.P);
    if (2 * l < this.j.length) {
      var m = this.Ta(a), n = m.j;
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
    m = this.Ta(a);
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
g.eb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.P & d)) {
    return this;
  }
  var e = Lc(this.P & d - 1), f = this.j[2 * e], h = this.j[2 * e + 1];
  return null == f ? (a = h.eb(a + 5, b, c), a === h ? this : null != a ? new ve(null, this.P, se.i(this.j, 2 * e + 1, a)) : this.P === d ? null : new ve(null, this.P ^ d, te(this.j, e))) : re(c, f) ? new ve(null, this.P ^ d, te(this.j, e)) : this;
};
var xe = new ve(null, 0, []);
function ye(a, b, c) {
  this.K = a;
  this.o = b;
  this.j = c;
}
g = ye.prototype;
g.Ta = function(a) {
  return a === this.K ? this : new ye(a, this.o, wa(this.j));
};
g.cb = function() {
  var a = this.j;
  return Ae.f ? Ae.f(a) : Ae.call(null, a);
};
g.Ma = function(a, b, c, d) {
  var e = this.j[b >>> a & 31];
  return null != e ? e.Ma(a + 5, b, c, d) : d;
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
g.eb = function(a, b, c) {
  var d = b >>> a & 31, e = this.j[d];
  if (null != e) {
    a = e.eb(a + 5, b, c);
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
g.Ta = function(a) {
  if (a === this.K) {
    return this;
  }
  var b = Array(2 * (this.o + 1));
  wc(this.j, 0, b, 0, 2 * this.o);
  return new Ce(a, this.Ha, this.o, b);
};
g.cb = function() {
  var a = this.j;
  return we.f ? we.f(a) : we.call(null, a);
};
g.Ma = function(a, b, c, d) {
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
g.eb = function(a, b, c) {
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
  this.Na = b;
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
  return null == this.S ? new V(null, 2, 5, X, [this.Na[this.A], this.Na[this.A + 1]], null) : I(this.S);
};
g.ha = function() {
  if (null == this.S) {
    var a = this.Na, b = this.A + 2;
    return we.i ? we.i(a, b, null) : we.call(null, a, b, null);
  }
  var a = this.Na, b = this.A, c = L(this.S);
  return we.i ? we.i(a, b, c) : we.call(null, a, b, c);
};
g.N = function() {
  return this;
};
g.O = function(a, b) {
  return new De(b, this.Na, this.A, this.S, this.q);
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
          if (s(h) && (h = h.cb(), s(h))) {
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
  this.Na = b;
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
  return I(this.S);
};
g.ha = function() {
  var a = this.Na, b = this.A, c = L(this.S);
  return Ae.t ? Ae.t(null, a, b, c) : Ae.call(null, null, a, b, c);
};
g.N = function() {
  return this;
};
g.O = function(a, b) {
  return new Ee(b, this.Na, this.A, this.S, this.q);
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
          if (s(k) && (k = k.cb(), s(k))) {
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
  return Bb(this);
};
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  return null == b ? this.da ? this.ka : c : null == this.root ? c : this.root.Ma(0, Kb(b), b, c);
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
g.Ya = function() {
  return new Ge({}, this.root, this.o, this.da, this.ka);
};
g.V = function() {
  return bb(hc, this.meta);
};
g.oa = function(a, b) {
  if (null == b) {
    return this.da ? new Fe(this.meta, this.o - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.eb(0, Kb(b), b);
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
g.nb = function(a, b) {
  return null == b ? this.da : null == this.root ? !1 : this.root.Ma(0, Kb(b), b, yc) !== yc;
};
g.N = function() {
  if (0 < this.o) {
    var a = null != this.root ? this.root.cb() : null;
    return this.da ? N(new V(null, 2, 5, X, [null, this.ka], null), a) : a;
  }
  return null;
};
g.O = function(a, b) {
  return new Fe(b, this.o, this.root, this.da, this.ka, this.q);
};
g.M = function(a, b) {
  if (tc(b)) {
    return La(this, y.e(b, 0), y.e(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = I(d);
    if (tc(e)) {
      c = La(c, y.e(e, 0), y.e(e, 1)), d = L(d);
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
g.$a = function(a, b, c) {
  return He(this, b, c);
};
g.ab = function(a, b) {
  return Ie(this, b);
};
g.bb = function() {
  var a;
  if (this.K) {
    this.K = null, a = new Fe(null, this.count, this.root, this.da, this.ka, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.J = function(a, b) {
  return null == b ? this.da ? this.ka : null : null == this.root ? null : this.root.Ma(0, Kb(b), b);
};
g.G = function(a, b, c) {
  return null == b ? this.da ? this.ka : c : null == this.root ? c : this.root.Ma(0, Kb(b), b, c);
};
g.Q = function() {
  if (this.K) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Ie(a, b) {
  if (a.K) {
    if (b ? b.m & 2048 || b.Ib || (b.m ? 0 : u(Oa, b)) : u(Oa, b)) {
      return He(a, Nc.f ? Nc.f(b) : Nc.call(null, b), Oc.f ? Oc.f(b) : Oc.call(null, b));
    }
    for (var c = G(b), d = a;;) {
      var e = I(c);
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
    for (var b = nb(hc);;) {
      if (a) {
        var e = L(L(a)), b = kd.i(b, I(a), I(L(a)));
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
  return Bb(this);
};
g.L = function() {
  return this.ba;
};
g.ga = function() {
  var a = this.$, a = (a ? a.m & 128 || a.kb || (a.m ? 0 : u(Ha, a)) : u(Ha, a)) ? this.$.ga(null) : L(this.$);
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
  return this.$.Z(null).sb();
};
g.ha = function() {
  var a = this.$, a = (a ? a.m & 128 || a.kb || (a.m ? 0 : u(Ha, a)) : u(Ha, a)) ? this.$.ga(null) : L(this.$);
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
  return Pa(a);
}
function Ke(a, b) {
  this.$ = a;
  this.ba = b;
  this.D = 0;
  this.m = 32374988;
}
g = Ke.prototype;
g.toString = function() {
  return Bb(this);
};
g.L = function() {
  return this.ba;
};
g.ga = function() {
  var a = this.$, a = (a ? a.m & 128 || a.kb || (a.m ? 0 : u(Ha, a)) : u(Ha, a)) ? this.$.ga(null) : L(this.$);
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
  return this.$.Z(null).tb();
};
g.ha = function() {
  var a = this.$, a = (a ? a.m & 128 || a.kb || (a.m ? 0 : u(Ha, a)) : u(Ha, a)) ? this.$.ga(null) : L(this.$);
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
  return Ra(a);
}
function Me(a, b, c) {
  this.meta = a;
  this.Va = b;
  this.q = c;
  this.m = 15077647;
  this.D = 8196;
}
g = Me.prototype;
g.toString = function() {
  return Bb(this);
};
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  return Ja(this.Va, b) ? b : c;
};
g.L = function() {
  return this.meta;
};
g.Q = function() {
  return Ba(this.Va);
};
g.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Ub(this);
};
g.F = function(a, b) {
  return rc(b) && O(this) === O(b) && nd(function(a) {
    return function(b) {
      return Ac(a, b);
    };
  }(this), b);
};
g.Ya = function() {
  return new Ne(nb(this.Va));
};
g.V = function() {
  return nc(Oe, this.meta);
};
g.N = function() {
  var a = G(this.Va);
  return a ? new Je(a, null) : null;
};
g.O = function(a, b) {
  return new Me(b, this.Va, this.q);
};
g.M = function(a, b) {
  return new Me(this.meta, ic.i(this.Va, b, null), null);
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
g.ab = function(a, b) {
  this.La = kd.i(this.La, b, null);
  return this;
};
g.bb = function() {
  return new Me(null, pb(this.La), null);
};
function Tc(a) {
  if (a && (a.D & 4096 || a.Kb)) {
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
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var l = I(a);
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
  var k = ja;
  try {
    ja = null == ja ? null : ja - 1;
    if (null != ja && 0 > ja) {
      return F(a, "#");
    }
    F(a, c);
    if (G(h)) {
      var l = I(h);
      b.i ? b.i(l, a, f) : b.call(null, l, a, f);
    }
    for (var m = L(h), n = ta.f(f) - 1;;) {
      if (!m || null != n && 0 === n) {
        G(m) && 0 === n && (F(a, d), F(a, "..."));
        break;
      } else {
        F(a, d);
        var p = I(m);
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
    ja = k;
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
          f = e, uc(f) ? (e = tb(f), h = ub(f), f = e, l = O(e), e = h, h = l) : (l = I(f), F(a, l), e = L(f), f = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.B = 1;
  a.s = function(a) {
    var d = I(a);
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
    return s(c) ? (c = b ? b.m & 131072 || b.Jb ? !0 : b.m ? !1 : u(Ya, b) : u(Ya, b)) ? oc(b) : c : c;
  }()) && (F(c, "^"), Te(oc(b), c, d), F(c, " "));
  if (null == b) {
    return F(c, "nil");
  }
  if (b.Sb) {
    return b.bc(b, c, d);
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
      return new V(null, 2, 5, X, [Uc.f(c), b[c]], null);
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
  }, Qe.n(c, M(['#inst "', "" + x.f(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : b instanceof RegExp ? Qe.n(c, M(['#"', b.source, '"'], 0)) : (b ? b.m & 2147483648 || b.T || (b.m ? 0 : u(jb, b)) : u(jb, b)) ? kb(b, c, d) : Qe.n(c, M(["#\x3c", "" + x.f(b), "\x3e"], 0));
};
function Ve(a, b) {
  var c = new ha;
  a: {
    var d = new Ab(c);
    Z(I(a), d, b);
    for (var e = G(L(a)), f = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = f.W(null, k);
        F(d, " ");
        Z(l, d, b);
        k += 1;
      } else {
        if (e = G(e)) {
          f = e, uc(f) ? (e = tb(f), h = ub(f), f = e, l = O(e), e = h, h = l) : (l = I(f), F(d, " "), Z(l, d, b), e = L(f), f = null, h = 0), k = 0;
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
    var b = la();
    return qc(a) ? "" : "" + x.f(Ve(a, b));
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
    var k = Pa(a);
    b.i ? b.i(k, c, d) : b.call(null, k, c, d);
    F(c, " ");
    a = Ra(a);
    return b.i ? b.i(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, G(a));
}
Rb.prototype.T = !0;
Rb.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
U.prototype.T = !0;
U.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
De.prototype.T = !0;
De.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
ke.prototype.T = !0;
ke.prototype.H = function(a, b, c) {
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
V.prototype.T = !0;
V.prototype.H = function(a, b, c) {
  return Y(b, Z, "[", " ", "]", c, this);
};
Qc.prototype.T = !0;
Qc.prototype.H = function(a, b) {
  return F(b, "()");
};
na.prototype.T = !0;
na.prototype.H = function(a, b, c) {
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
V.prototype.gb = !0;
V.prototype.hb = function(a, b) {
  return Bc.e(this, b);
};
ae.prototype.gb = !0;
ae.prototype.hb = function(a, b) {
  return Bc.e(this, b);
};
S.prototype.gb = !0;
S.prototype.hb = function(a, b) {
  return Mb(this, b);
};
Qb.prototype.gb = !0;
Qb.prototype.hb = function(a, b) {
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
  this.fb = a;
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
  return F(b, '#uuid "' + x.f(this.fb) + '"');
};
We.prototype.F = function(a, b) {
  return b instanceof We && this.fb === b.fb;
};
We.prototype.toString = function() {
  return this.fb;
};
var Xe = new S(null, "y", "y", -1757859776), Ye = new S(null, "movement", "movement", 1777030977), qa = new S(null, "meta", "meta", 1499536964), Ze = new S(null, "animation", "animation", -1248293244), $e = new S(null, "stage", "stage", 1843544772), sa = new S(null, "dup", "dup", 556298533), rd = new S(null, "validator", "validator", -1966190681), $ = new S(null, "name", "name", 1843675177), af = new S(null, "neutral", "neutral", -1941956087), bf = new S(null, "renderable", "renderable", -1247325782), 
cf = new S(null, "background", "background", -863952629), ef = new S(null, "facing", "facing", -854439413), ff = new S(null, "entities", "entities", 1940967403), gf = new S(null, "attacker", "attacker", 48869964), oa = new S(null, "flush-on-newline", "flush-on-newline", -151457939), hf = new S(null, "angle", "angle", 1622094254), jf = new S(null, "animation-seq", "animation-seq", 1939833135), kf = new S(null, "renderer", "renderer", 336841071), lf = new S(null, "size", "size", 1098693007), mf = new S(null, 
"sprite", "sprite", 172516848), pa = new S(null, "readably", "readably", 1129599760), ta = new S(null, "print-length", "print-length", 1931866356), nf = new S(null, "id", "id", -1388402092), of = new S(null, "current", "current", -1088038603), pf = new S(null, "identifier", "identifier", -805503498), qf = new S(null, "right", "right", -452581833), rf = new S(null, "position", "position", -2011731912), sf = new S(null, "point", "point", 1813198264), tf = new S(null, "x", "x", 2099068185), uf = new S(null, 
"anchor", "anchor", 1549638489), vf = new S(null, "target", "target", 253001721), wf = new S(null, "frame-count", "frame-count", 1616946810), xf = new S(null, "velocity", "velocity", -581524355), yf = new S(null, "attackable", "attackable", 2099301245), zf = new S(null, "sprite-list", "sprite-list", -1086684897), Af = new S(null, "left", "left", -399115937);
function Bf(a, b, c, d) {
  this.name = a;
  this.Pa = b;
  this.p = c;
  this.l = d;
  this.m = 2229667594;
  this.D = 8192;
  2 < arguments.length ? (this.p = c, this.l = d) : this.l = this.p = null;
}
g = Bf.prototype;
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.ca : null) {
    case "point":
      return this.Pa;
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
  }(this), "#clash-attack-sim.component.Position{", ", ", "}", c, hd.e(new V(null, 2, 5, X, [new V(null, 2, 5, X, [$, this.name], null), new V(null, 2, 5, X, [sf, this.Pa], null)], null), this.l));
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
  return Ac(new Me(null, new na(null, 2, [$, null, sf, null], null), null), b) ? jc.e(nc(Fd.e(ne, this), this.p), b) : new Bf(this.name, this.Pa, this.p, md(jc.e(this.l, b)), null);
};
g.ia = function(a, b, c) {
  return s(T.e ? T.e($, b) : T.call(null, $, b)) ? new Bf(c, this.Pa, this.p, this.l, null) : s(T.e ? T.e(sf, b) : T.call(null, sf, b)) ? new Bf(this.name, c, this.p, this.l, null) : new Bf(this.name, this.Pa, this.p, ic.i(this.l, b, c), null);
};
g.N = function() {
  return G(hd.e(new V(null, 2, 5, X, [new V(null, 2, 5, X, [$, this.name], null), new V(null, 2, 5, X, [sf, this.Pa], null)], null), this.l));
};
g.O = function(a, b) {
  return new Bf(this.name, this.Pa, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? La(this, y.e(b, 0), y.e(b, 1)) : Cc.i(Da, this, b);
};
function Cf(a) {
  return new Bf(rf, a);
}
function Df(a, b, c, d, e, f) {
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
g = Df.prototype;
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
  }(this), "#clash-attack-sim.component.Renderable{", ", ", "}", c, hd.e(new V(null, 4, 5, X, [new V(null, 2, 5, X, [$, this.name], null), new V(null, 2, 5, X, [mf, this.aa], null), new V(null, 2, 5, X, [uf, this.anchor], null), new V(null, 2, 5, X, [lf, this.size], null)], null), this.l));
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
  return Ac(new Me(null, new na(null, 4, [$, null, lf, null, mf, null, uf, null], null), null), b) ? jc.e(nc(Fd.e(ne, this), this.p), b) : new Df(this.name, this.aa, this.anchor, this.size, this.p, md(jc.e(this.l, b)), null);
};
g.ia = function(a, b, c) {
  return s(T.e ? T.e($, b) : T.call(null, $, b)) ? new Df(c, this.aa, this.anchor, this.size, this.p, this.l, null) : s(T.e ? T.e(mf, b) : T.call(null, mf, b)) ? new Df(this.name, c, this.anchor, this.size, this.p, this.l, null) : s(T.e ? T.e(uf, b) : T.call(null, uf, b)) ? new Df(this.name, this.aa, c, this.size, this.p, this.l, null) : s(T.e ? T.e(lf, b) : T.call(null, lf, b)) ? new Df(this.name, this.aa, this.anchor, c, this.p, this.l, null) : new Df(this.name, this.aa, this.anchor, this.size, 
  this.p, ic.i(this.l, b, c), null);
};
g.N = function() {
  return G(hd.e(new V(null, 4, 5, X, [new V(null, 2, 5, X, [$, this.name], null), new V(null, 2, 5, X, [mf, this.aa], null), new V(null, 2, 5, X, [uf, this.anchor], null), new V(null, 2, 5, X, [lf, this.size], null)], null), this.l));
};
g.O = function(a, b) {
  return new Df(this.name, this.aa, this.anchor, this.size, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? La(this, y.e(b, 0), y.e(b, 1)) : Cc.i(Da, this, b);
};
function Ef(a, b, c) {
  return new Df(bf, a, b, c);
}
function Ff(a, b, c, d) {
  this.name = a;
  this.aa = b;
  this.p = c;
  this.l = d;
  this.m = 2229667594;
  this.D = 8192;
  2 < arguments.length ? (this.p = c, this.l = d) : this.l = this.p = null;
}
g = Ff.prototype;
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
  }(this), "#clash-attack-sim.component.Background{", ", ", "}", c, hd.e(new V(null, 2, 5, X, [new V(null, 2, 5, X, [$, this.name], null), new V(null, 2, 5, X, [mf, this.aa], null)], null), this.l));
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
  return Ac(new Me(null, new na(null, 2, [$, null, mf, null], null), null), b) ? jc.e(nc(Fd.e(ne, this), this.p), b) : new Ff(this.name, this.aa, this.p, md(jc.e(this.l, b)), null);
};
g.ia = function(a, b, c) {
  return s(T.e ? T.e($, b) : T.call(null, $, b)) ? new Ff(c, this.aa, this.p, this.l, null) : s(T.e ? T.e(mf, b) : T.call(null, mf, b)) ? new Ff(this.name, c, this.p, this.l, null) : new Ff(this.name, this.aa, this.p, ic.i(this.l, b, c), null);
};
g.N = function() {
  return G(hd.e(new V(null, 2, 5, X, [new V(null, 2, 5, X, [$, this.name], null), new V(null, 2, 5, X, [mf, this.aa], null)], null), this.l));
};
g.O = function(a, b) {
  return new Ff(this.name, this.aa, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? La(this, y.e(b, 0), y.e(b, 1)) : Cc.i(Da, this, b);
};
function Gf(a, b, c, d) {
  this.name = a;
  this.target = b;
  this.p = c;
  this.l = d;
  this.m = 2229667594;
  this.D = 8192;
  2 < arguments.length ? (this.p = c, this.l = d) : this.l = this.p = null;
}
g = Gf.prototype;
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.ca : null) {
    case "target":
      return this.target;
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
  }(this), "#clash-attack-sim.component.Attacker{", ", ", "}", c, hd.e(new V(null, 2, 5, X, [new V(null, 2, 5, X, [$, this.name], null), new V(null, 2, 5, X, [vf, this.target], null)], null), this.l));
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
  return Ac(new Me(null, new na(null, 2, [$, null, vf, null], null), null), b) ? jc.e(nc(Fd.e(ne, this), this.p), b) : new Gf(this.name, this.target, this.p, md(jc.e(this.l, b)), null);
};
g.ia = function(a, b, c) {
  return s(T.e ? T.e($, b) : T.call(null, $, b)) ? new Gf(c, this.target, this.p, this.l, null) : s(T.e ? T.e(vf, b) : T.call(null, vf, b)) ? new Gf(this.name, c, this.p, this.l, null) : new Gf(this.name, this.target, this.p, ic.i(this.l, b, c), null);
};
g.N = function() {
  return G(hd.e(new V(null, 2, 5, X, [new V(null, 2, 5, X, [$, this.name], null), new V(null, 2, 5, X, [vf, this.target], null)], null), this.l));
};
g.O = function(a, b) {
  return new Gf(this.name, this.target, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? La(this, y.e(b, 0), y.e(b, 1)) : Cc.i(Da, this, b);
};
function Hf(a, b, c) {
  this.name = a;
  this.p = b;
  this.l = c;
  this.m = 2229667594;
  this.D = 8192;
  1 < arguments.length ? (this.p = b, this.l = c) : this.l = this.p = null;
}
g = Hf.prototype;
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
  }(this), "#clash-attack-sim.component.Attackable{", ", ", "}", c, hd.e(new V(null, 1, 5, X, [new V(null, 2, 5, X, [$, this.name], null)], null), this.l));
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
  return Ac(new Me(null, new na(null, 1, [$, null], null), null), b) ? jc.e(nc(Fd.e(ne, this), this.p), b) : new Hf(this.name, this.p, md(jc.e(this.l, b)), null);
};
g.ia = function(a, b, c) {
  return s(T.e ? T.e($, b) : T.call(null, $, b)) ? new Hf(c, this.p, this.l, null) : new Hf(this.name, this.p, ic.i(this.l, b, c), null);
};
g.N = function() {
  return G(hd.e(new V(null, 1, 5, X, [new V(null, 2, 5, X, [$, this.name], null)], null), this.l));
};
g.O = function(a, b) {
  return new Hf(this.name, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? La(this, y.e(b, 0), y.e(b, 1)) : Cc.i(Da, this, b);
};
function If(a, b, c, d) {
  this.name = a;
  this.Qa = b;
  this.p = c;
  this.l = d;
  this.m = 2229667594;
  this.D = 8192;
  2 < arguments.length ? (this.p = c, this.l = d) : this.l = this.p = null;
}
g = If.prototype;
g.J = function(a, b) {
  return E.i(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof S ? b.ca : null) {
    case "velocity":
      return this.Qa;
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
  }(this), "#clash-attack-sim.component.Movement{", ", ", "}", c, hd.e(new V(null, 2, 5, X, [new V(null, 2, 5, X, [$, this.name], null), new V(null, 2, 5, X, [xf, this.Qa], null)], null), this.l));
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
  return Ac(new Me(null, new na(null, 2, [$, null, xf, null], null), null), b) ? jc.e(nc(Fd.e(ne, this), this.p), b) : new If(this.name, this.Qa, this.p, md(jc.e(this.l, b)), null);
};
g.ia = function(a, b, c) {
  return s(T.e ? T.e($, b) : T.call(null, $, b)) ? new If(c, this.Qa, this.p, this.l, null) : s(T.e ? T.e(xf, b) : T.call(null, xf, b)) ? new If(this.name, c, this.p, this.l, null) : new If(this.name, this.Qa, this.p, ic.i(this.l, b, c), null);
};
g.N = function() {
  return G(hd.e(new V(null, 2, 5, X, [new V(null, 2, 5, X, [$, this.name], null), new V(null, 2, 5, X, [xf, this.Qa], null)], null), this.l));
};
g.O = function(a, b) {
  return new If(this.name, this.Qa, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? La(this, y.e(b, 0), y.e(b, 1)) : Cc.i(Da, this, b);
};
function Jf(a, b, c, d) {
  this.name = a;
  this.angle = b;
  this.p = c;
  this.l = d;
  this.m = 2229667594;
  this.D = 8192;
  2 < arguments.length ? (this.p = c, this.l = d) : this.l = this.p = null;
}
g = Jf.prototype;
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
  }(this), "#clash-attack-sim.component.Facing{", ", ", "}", c, hd.e(new V(null, 2, 5, X, [new V(null, 2, 5, X, [$, this.name], null), new V(null, 2, 5, X, [hf, this.angle], null)], null), this.l));
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
  return Ac(new Me(null, new na(null, 2, [$, null, hf, null], null), null), b) ? jc.e(nc(Fd.e(ne, this), this.p), b) : new Jf(this.name, this.angle, this.p, md(jc.e(this.l, b)), null);
};
g.ia = function(a, b, c) {
  return s(T.e ? T.e($, b) : T.call(null, $, b)) ? new Jf(c, this.angle, this.p, this.l, null) : s(T.e ? T.e(hf, b) : T.call(null, hf, b)) ? new Jf(this.name, c, this.p, this.l, null) : new Jf(this.name, this.angle, this.p, ic.i(this.l, b, c), null);
};
g.N = function() {
  return G(hd.e(new V(null, 2, 5, X, [new V(null, 2, 5, X, [$, this.name], null), new V(null, 2, 5, X, [hf, this.angle], null)], null), this.l));
};
g.O = function(a, b) {
  return new Jf(this.name, this.angle, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? La(this, y.e(b, 0), y.e(b, 1)) : Cc.i(Da, this, b);
};
function Kf(a, b, c, d, e, f) {
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
g = Kf.prototype;
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
  }(this), "#clash-attack-sim.component.Animation{", ", ", "}", c, hd.e(new V(null, 4, 5, X, [new V(null, 2, 5, X, [$, this.name], null), new V(null, 2, 5, X, [zf, this.Ka], null), new V(null, 2, 5, X, [jf, this.ta], null), new V(null, 2, 5, X, [of, this.current], null)], null), this.l));
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
  return Ac(new Me(null, new na(null, 4, [$, null, jf, null, of, null, zf, null], null), null), b) ? jc.e(nc(Fd.e(ne, this), this.p), b) : new Kf(this.name, this.Ka, this.ta, this.current, this.p, md(jc.e(this.l, b)), null);
};
g.ia = function(a, b, c) {
  return s(T.e ? T.e($, b) : T.call(null, $, b)) ? new Kf(c, this.Ka, this.ta, this.current, this.p, this.l, null) : s(T.e ? T.e(zf, b) : T.call(null, zf, b)) ? new Kf(this.name, c, this.ta, this.current, this.p, this.l, null) : s(T.e ? T.e(jf, b) : T.call(null, jf, b)) ? new Kf(this.name, this.Ka, c, this.current, this.p, this.l, null) : s(T.e ? T.e(of, b) : T.call(null, of, b)) ? new Kf(this.name, this.Ka, this.ta, c, this.p, this.l, null) : new Kf(this.name, this.Ka, this.ta, this.current, this.p, 
  ic.i(this.l, b, c), null);
};
g.N = function() {
  return G(hd.e(new V(null, 4, 5, X, [new V(null, 2, 5, X, [$, this.name], null), new V(null, 2, 5, X, [zf, this.Ka], null), new V(null, 2, 5, X, [jf, this.ta], null), new V(null, 2, 5, X, [of, this.current], null)], null), this.l));
};
g.O = function(a, b) {
  return new Kf(this.name, this.Ka, this.ta, this.current, b, this.l, this.q);
};
g.M = function(a, b) {
  return tc(b) ? La(this, y.e(b, 0), y.e(b, 1)) : Cc.i(Da, this, b);
};
function Lf(a, b, c) {
  return new Kf(Ze, a, b, c);
}
;function Mf(a, b) {
  return Ac(a, b);
}
function Nf(a, b) {
  return ic.i(a, $.f(b), b);
}
function Of(a, b) {
  return Cc.i(function(a, b) {
    return ic.i(a, $.f(b), b);
  }, a, b);
}
function Pf() {
  var a = Qf.C ? Qf.C() : Qf.call(null);
  return Rf.f ? Rf.f(a) : Rf.call(null, a);
}
var Sf = function() {
  function a(a) {
    return new na(null, 2, [$, pf, nf, a], null);
  }
  function b() {
    return c.f(Pf());
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
}(), Tf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = Cc.i(function(a, b) {
      return ic.i(a, $.f(b), b);
    }, ne, a);
    return Ac(a, pf) ? a : Nf(a, Sf.C());
  }
  a.B = 0;
  a.s = function(a) {
    a = G(a);
    return b(a);
  };
  a.n = b;
  return a;
}();
function Uf(a, b) {
  var c = Le(ff.f(a));
  return Ed.e(function() {
    return function(a) {
      return Ac(a, b);
    };
  }(c), c);
}
var Vf = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = Le(ff.f(a));
    return Ed.e(function() {
      return function(a) {
        return nd(od.e(Mf, a), b);
      };
    }(e), e);
  }
  a.B = 1;
  a.s = function(a) {
    var d = I(a);
    a = J(a);
    return b(d, a);
  };
  a.n = b;
  return a;
}();
function Wf(a, b) {
  var c = function() {
    var b = ff.f(a);
    return s(b) ? b : ne;
  }();
  return ic.i(a, ff, Cc.i(function() {
    return function(a, b) {
      return ic.i(a, Gd.e(b, new V(null, 2, 5, X, [pf, nf], null)), b);
    };
  }(c), c, b));
}
function Xf(a) {
  return Gd.e(a, new V(null, 2, 5, X, [rf, sf], null));
}
function Yf(a) {
  return Gd.e(a, new V(null, 2, 5, X, [bf, uf], null));
}
function Zf(a) {
  return Gd.e(a, new V(null, 2, 5, X, [bf, lf], null));
}
function ag(a) {
  return Gd.e(a, new V(null, 2, 5, X, [Ze, zf], null));
}
function bg(a) {
  return Gd.e(a, new V(null, 2, 5, X, [Ze, jf], null));
}
function cg(a) {
  return Gd.e(a, new V(null, 2, 5, X, [Ze, of], null));
}
;function dg(a, b) {
  return Math.sqrt(Math.abs(a.x - b.x) + Math.abs(a.y - b.y));
}
function eg(a, b) {
  return mc.i(Pe, od.e(dg, a), b);
}
function fg(a) {
  var b = Uf(a, gf), c = Uf(a, yf);
  return qc(c) ? a : Wf(a, function() {
    return function(a, b) {
      return function h(c) {
        return new U(null, function(a, b) {
          return function() {
            for (;;) {
              var a = G(c);
              if (a) {
                if (uc(a)) {
                  var d = tb(a), e = O(d), l = Zc(e);
                  return function() {
                    for (var a = 0;;) {
                      if (a < e) {
                        var c = y.e(d, a), h = l, k = eg(c, b), c = Nf(c, new Gf(gf, k));
                        h.add(c);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? bd(l.U(), h(ub(a))) : bd(l.U(), null);
                }
                var v = I(a);
                return N(function() {
                  var a = eg(v, b);
                  return Nf(v, new Gf(gf, a));
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
;var gg;
a: {
  var hg = aa.navigator;
  if (hg) {
    var ig = hg.userAgent;
    if (ig) {
      gg = ig;
      break a;
    }
  }
  gg = "";
}
function jg(a) {
  return-1 != gg.indexOf(a);
}
;var kg = jg("Opera") || jg("OPR"), lg = jg("Trident") || jg("MSIE"), mg = jg("Gecko") && -1 == gg.toLowerCase().indexOf("webkit") && !(jg("Trident") || jg("MSIE")), ng = -1 != gg.toLowerCase().indexOf("webkit"), og = function() {
  var a = "", b;
  if (kg && aa.opera) {
    return a = aa.opera.version, "function" == r(a) ? a() : a;
  }
  mg ? b = /rv\:([^\);]+)(\)|;)/ : lg ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : ng && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(gg)) ? a[1] : "");
  return lg && (b = (b = aa.document) ? b.documentMode : void 0, b > parseFloat(a)) ? String(b) : a;
}(), pg = {};
function qg(a) {
  var b;
  if (!(b = pg[a])) {
    b = 0;
    for (var c = String(og).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(h) || ["", "", ""], p = m.exec(k) || ["", "", ""];
        if (0 == n[0].length && 0 == p[0].length) {
          break;
        }
        b = da(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == p[1].length ? 0 : parseInt(p[1], 10)) || da(0 == n[2].length, 0 == p[2].length) || da(n[2], p[2]);
      } while (0 == b);
    }
    b = pg[a] = 0 <= b;
  }
  return b;
}
;lg && qg("9");
!ng || qg("528");
mg && qg("1.9b") || lg && qg("8") || kg && qg("9.5") || ng && qg("528");
mg && !qg("8") || lg && qg("9");
var rg = function() {
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
function Rf(a) {
  return "" + x.f(a.fb);
}
function Qf() {
  function a() {
    return Kc(16).toString(16);
  }
  return new We(rg.f(hd.n(Bd.e(8, a), "-", M([Bd.e(4, a), "-4", Bd.e(3, a), "-", (8 | 3 & Kc(15)).toString(16), Bd.e(3, a), "-", Bd.e(12, a)], 0))));
}
var sg = "^" + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + "-" + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + "-" + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + "-" + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + "-" + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + 
x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + "$";
if (!(sg instanceof RegExp)) {
  var tg;
  var ug = /^(?:\(\?([idmsux]*)\))?(.*)/;
  if ("string" === typeof sg) {
    var vg = ug.exec(sg);
    tg = null == vg ? null : 1 === O(vg) ? I(vg) : pb(Cc.i(ob, nb(ec), vg));
  } else {
    throw new TypeError("re-find must match against a string.");
  }
  Q.i(tg, 0, null);
  Q.i(tg, 1, null);
  Q.i(tg, 2, null);
}
;function wg(a, b, c) {
  a[b] = c;
  return a;
}
;function xg(a) {
  return PIXI.Sprite.fromFrame(a);
}
function yg(a) {
  return PIXI.Sprite.fromImage(a);
}
function zg(a) {
  return PIXI.Texture.fromImage(a, !1);
}
;var Ag = new PIXI.Point(.5, .5);
function Bg(a, b) {
  var c = xg.f ? xg.f("barbarian-neutral-down.png") : xg.call(null, "barbarian-neutral-down.png"), d = xg.f ? xg.f("barbarian-run-right-down.png") : xg.call(null, "barbarian-run-right-down.png"), e = xg.f ? xg.f("barbarian-run-left-down.png") : xg.call(null, "barbarian-run-left-down.png");
  return Tf.n(M([Cf(new V(null, 2, 5, X, [a, b], null)), new If(Ye, .25), Lf(new na(null, 3, [af, c, qf, d, Af, e], null), new V(null, 4, 5, X, [af, Af, af, qf], null), 0), Ef(c, Ag, new V(null, 2, 5, X, [1, 1], null)), new Gf(gf, null)], 0));
}
;var Cg = sd.f ? sd.f(ne) : sd.call(null, ne);
function Dg(a) {
  a = a.getLocalPosition(a.target);
  a = new na(null, 2, [tf, a.x, Xe, a.y], null);
  return td.e ? td.e(Cg, a) : td.call(null, Cg, a);
}
;function Eg(a) {
  var b = Vf.n(a, M([Ye, ef], 0));
  return qc(b) ? a : Wf(a, function() {
    return function(a) {
      return function e(b) {
        return new U(null, function() {
          return function() {
            for (;;) {
              var a = G(b);
              if (a) {
                if (uc(a)) {
                  var c = tb(a), l = O(c), m = Zc(l);
                  return function() {
                    for (var a = 0;;) {
                      if (a < l) {
                        var b = y.e(c, a), e = m, f = Gd.e(b, new V(null, 2, 5, X, [ef, hf], null)), h = Gd.e(b, new V(null, 2, 5, X, [Ye, xf], null)), n = Xf(b), H = Q.i(n, 0, null), n = Q.i(n, 1, null), h = new V(null, 2, 5, X, [H + h * Math.cos(f), n + h * Math.sin(f)], null), f = Q.i(h, 0, null), h = Q.i(h, 1, null), b = Nf(b, Cf(new V(null, 2, 5, X, [f, h], null)));
                        e.add(b);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? bd(m.U(), e(ub(a))) : bd(m.U(), null);
                }
                var n = I(a);
                return N(function() {
                  var a = Gd.e(n, new V(null, 2, 5, X, [ef, hf], null)), b = Gd.e(n, new V(null, 2, 5, X, [Ye, xf], null)), c = Xf(n), e = Q.i(c, 0, null), c = Q.i(c, 1, null), b = new V(null, 2, 5, X, [e + b * Math.cos(a), c + b * Math.sin(a)], null), a = Q.i(b, 0, null), b = Q.i(b, 1, null);
                  return Nf(n, Cf(new V(null, 2, 5, X, [a, b], null)));
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
;function Fg(a, b) {
  var c = O(a);
  return Nb.e(b, c - 1) ? 0 : b + 1;
}
function Gg(a) {
  var b = wf.f(a), c = Uf.e ? Uf.e(a, Ze) : Uf.call(null, a, Ze);
  if (Nb.e((b % 15 + 15) % 15, 0)) {
    if (qc(c)) {
      return a;
    }
    var d = function() {
      return function(a, b, c) {
        return function l(d) {
          return new U(null, function() {
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
                              return Yf.f ? Yf.f(a) : Yf.call(null, a);
                            }(), b = function() {
                              var a = d;
                              return Zf.f ? Zf.f(a) : Zf.call(null, a);
                            }(), c = function() {
                              var a = d;
                              return ag.f ? ag.f(a) : ag.call(null, a);
                            }(), e = function() {
                              var a = d;
                              return bg.f ? bg.f(a) : bg.call(null, a);
                            }(), f = function() {
                              var a = d;
                              return cg.f ? cg.f(a) : cg.call(null, a);
                            }(), f = Fg(e, f), h = R.e(e, f), l = R.e(c, h), h = d, a = new V(null, 2, 5, X, [Lf.i ? Lf.i(c, e, f) : Lf.call(null, c, e, f), Ef.i ? Ef.i(l, a, b) : Ef.call(null, l, a, b)], null);
                            return Of.e ? Of.e(h, a) : Of.call(null, h, a);
                          }());
                          a += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? bd(e.U(), l(ub(a))) : bd(e.U(), null);
                  }
                  var f = I(a);
                  return N(function() {
                    var a = function() {
                      var a = f;
                      return Yf.f ? Yf.f(a) : Yf.call(null, a);
                    }(), b = function() {
                      var a = f;
                      return Zf.f ? Zf.f(a) : Zf.call(null, a);
                    }(), c = function() {
                      var a = f;
                      return ag.f ? ag.f(a) : ag.call(null, a);
                    }(), d = function() {
                      var a = f;
                      return bg.f ? bg.f(a) : bg.call(null, a);
                    }(), e = function() {
                      var a = f;
                      return cg.f ? cg.f(a) : cg.call(null, a);
                    }(), e = Fg(d, e), h = R.e(d, e), l = R.e(c, h), h = f, a = new V(null, 2, 5, X, [Lf.i ? Lf.i(c, d, e) : Lf.call(null, c, d, e), Ef.i ? Ef.i(l, a, b) : Ef.call(null, l, a, b)], null);
                    return Of.e ? Of.e(h, a) : Of.call(null, h, a);
                  }(), l(J(a)));
                }
                return null;
              }
            };
          }(a, b, c), null, null);
        };
      }(a, b, c)(c);
    }();
    return Wf.e ? Wf.e(a, d) : Wf.call(null, a, d);
  }
  return a;
}
;function Hg(a, b, c) {
  wg(wg(a.position, "x", b), "y", c);
  return a;
}
function Ig(a, b, c) {
  a = wg(a, "height", 16 * b);
  return wg(a, "width", 16 * c);
}
function Jg(a) {
  for (var b = $e.f(a), c = kf.f(a), d = G(Uf(a, cf)), e = null, f = 0, h = 0;;) {
    if (h < f) {
      var k = e.W(null, h), k = Gd.e(k, new V(null, 2, 5, X, [cf, mf], null));
      b.addChild(k);
      h += 1;
    } else {
      if (d = G(d)) {
        uc(d) ? (f = tb(d), d = ub(d), e = f, f = O(f)) : (e = I(d), e = Gd.e(e, new V(null, 2, 5, X, [cf, mf], null)), b.addChild(e), d = L(d), e = null, f = 0), h = 0;
      } else {
        break;
      }
    }
  }
  d = G(Uf(a, bf));
  e = null;
  for (h = f = 0;;) {
    if (h < f) {
      var l = e.W(null, h), m = Gd.e(l, new V(null, 2, 5, X, [bf, mf], null)), k = Yf(l), n = Zf(l), p = Q.i(n, 0, null), n = Q.i(n, 1, null), q = Xf(l), l = Q.i(q, 0, null), q = Q.i(q, 1, null), l = Math.round(l), q = Math.round(q), m = Hg(Ig(m, p, n), l, q), k = wg(m, "anchor", k);
      b.addChild(k);
      h += 1;
    } else {
      if (d = G(d)) {
        uc(d) ? (f = tb(d), d = ub(d), e = f, f = O(f)) : (m = I(d), f = Gd.e(m, new V(null, 2, 5, X, [bf, mf], null)), e = Yf(m), k = Zf(m), h = Q.i(k, 0, null), k = Q.i(k, 1, null), p = Xf(m), m = Q.i(p, 0, null), p = Q.i(p, 1, null), m = Math.round(m), p = Math.round(p), f = Hg(Ig(f, h, k), m, p), e = wg(f, "anchor", e), b.addChild(e), d = L(d), e = null, f = 0), h = 0;
      } else {
        break;
      }
    }
  }
  c.render(b);
  return a;
}
;function Kg(a) {
  var b = Vf.n(a, M([gf, Ye], 0));
  return qc(b) ? a : Wf(a, function() {
    return function(a) {
      return function e(b) {
        return new U(null, function() {
          return function() {
            for (;;) {
              var a = G(b);
              if (a) {
                if (uc(a)) {
                  var c = tb(a), l = O(c), m = Zc(l);
                  return function() {
                    for (var a = 0;;) {
                      if (a < l) {
                        var b = y.e(c, a), e = m, f = Gd.e(b, new V(null, 2, 5, X, [gf, vf], null)), h = Xf(f), f = Q.i(h, 0, null), h = Q.i(h, 1, null), n = Xf(b), H = Q.i(n, 0, null), n = Q.i(n, 1, null), b = Nf(b, new Jf(ef, Math.atan2(h - n, f - H)));
                        e.add(b);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? bd(m.U(), e(ub(a))) : bd(m.U(), null);
                }
                var n = I(a);
                return N(function() {
                  var a = Gd.e(n, new V(null, 2, 5, X, [gf, vf], null)), b = Xf(a), a = Q.i(b, 0, null), b = Q.i(b, 1, null), c = Xf(n), e = Q.i(c, 0, null), c = Q.i(c, 1, null);
                  return Nf(n, new Jf(ef, Math.atan2(b - c, a - e)));
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
;function Lg() {
  var a = new PIXI.autoDetectRenderer(640, 640);
  document.getElementById("battlefield").appendChild(a.view);
  return a;
}
function Mg() {
  var a = new PIXI.Stage(16777215);
  wg(a, "interactive", !0);
  wg(a, "click", Dg);
  return a;
}
function Ng(a) {
  a = ic.i(ic.i(ic.i(a, kf, Lg()), $e, Mg()), wf, 0);
  var b;
  b = new PIXI.TilingSprite(zg.f ? zg.f("images/grass-tile.png") : zg.call(null, "images/grass-tile.png"), 640, 640);
  b = Tf.n(M([new Ff(cf, b)], 0));
  var c = Bg(160, 160), d;
  d = yg.f ? yg.f("images/town-hall.png") : yg.call(null, "images/town-hall.png");
  d = Tf.n(M([Cf(new V(null, 2, 5, X, [320, 320], null)), Ef(d, Ag, new V(null, 2, 5, X, [4, 4], null)), new Hf(yf)], 0));
  return Wf(a, new V(null, 3, 5, X, [b, c, d], null));
}
var Og = sd.f ? sd.f(ne) : sd.call(null, ne);
function Pg(a) {
  var b = wf.f(a);
  a = ic.i(a, wf, b + 1);
  if (!qc(Xb.f ? Xb.f(Cg) : Xb.call(null, Cg))) {
    var b = tf.f(Xb.f ? Xb.f(Cg) : Xb.call(null, Cg)), c = Xe.f(Xb.f ? Xb.f(Cg) : Xb.call(null, Cg));
    td.e ? td.e(Cg, ne) : td.call(null, Cg, ne);
    b = Bg(b, c);
    c = Gd.e(b, new V(null, 2, 5, X, [pf, nf], null));
    a = Id(a, new V(null, 2, 5, X, [ff, c], null), b);
  }
  a = fg.f ? fg.f(a) : fg.call(null, a);
  a = Kg.f ? Kg.f(a) : Kg.call(null, a);
  a = Eg.f ? Eg.f(a) : Eg.call(null, a);
  a = Gg(a);
  return Jg.f ? Jg.f(a) : Jg.call(null, a);
}
var Rg = function Qg() {
  vd.e(Og, Pg);
  return requestAnimFrame(Qg);
}, Sg = new PIXI.AssetLoader(["images/barbarian-run-down.json", "images/grass-tile.png", "images/town-hall.png"], !1);
wg(Sg, "onComplete", function() {
  vd.e(Og, Ng);
  return requestAnimFrame(Rg);
});
Sg.load();

})();
