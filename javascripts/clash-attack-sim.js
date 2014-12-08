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
var f, aa = this;
function m(a) {
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
function ea(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
;function ha(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ja(a, b) {
  null != a && this.append.apply(this, arguments);
}
ja.prototype.Ga = "";
ja.prototype.append = function(a, b, c) {
  this.Ga += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ga += arguments[d];
    }
  }
  return this;
};
ja.prototype.toString = function() {
  return this.Ga;
};
var ka = null;
function la() {
  return new ma(null, 5, [new q(null, "flush-on-newline", "flush-on-newline", -151457939), !0, new q(null, "readably", "readably", 1129599760), !0, new q(null, "meta", "meta", 1499536964), !1, new q(null, "dup", "dup", 556298533), !1, new q(null, "print-length", "print-length", 1931866356), null], null);
}
function t(a) {
  return null != a && !1 !== a;
}
function na(a) {
  return t(a) ? !1 : !0;
}
function pa(a) {
  return null != a ? a.constructor === Object : !1;
}
function u(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function qa(a) {
  return null == a ? null : a.constructor;
}
function v(a, b) {
  var c = qa.call(null, b), c = t(t(c) ? c.Tb : c) ? c.Sb : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function sa(a) {
  var b = a.Sb;
  return t(b) ? b : "" + w.f(a);
}
function ta(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var ua = {}, wa = {};
function ya(a) {
  if (a ? a.O : a) {
    return a.O(a);
  }
  var b;
  b = ya[m(null == a ? null : a)];
  if (!b && (b = ya._, !b)) {
    throw v.call(null, "ICounted.-count", a);
  }
  return b.call(null, a);
}
function za(a) {
  if (a ? a.R : a) {
    return a.R(a);
  }
  var b;
  b = za[m(null == a ? null : a)];
  if (!b && (b = za._, !b)) {
    throw v.call(null, "IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
function Aa(a, b) {
  if (a ? a.M : a) {
    return a.M(a, b);
  }
  var c;
  c = Aa[m(null == a ? null : a)];
  if (!c && (c = Aa._, !c)) {
    throw v.call(null, "ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Ba = {}, y = function() {
  function a(a, b, c) {
    if (a ? a.fa : a) {
      return a.fa(a, b, c);
    }
    var h;
    h = y[m(null == a ? null : a)];
    if (!h && (h = y._, !h)) {
      throw v.call(null, "IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.ea : a) {
      return a.ea(a, b);
    }
    var c;
    c = y[m(null == a ? null : a)];
    if (!c && (c = y._, !c)) {
      throw v.call(null, "IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.B = a;
  return c;
}(), Da = {};
function z(a) {
  if (a ? a.$ : a) {
    return a.$(a);
  }
  var b;
  b = z[m(null == a ? null : a)];
  if (!b && (b = z._, !b)) {
    throw v.call(null, "ISeq.-first", a);
  }
  return b.call(null, a);
}
function A(a) {
  if (a ? a.aa : a) {
    return a.aa(a);
  }
  var b;
  b = A[m(null == a ? null : a)];
  if (!b && (b = A._, !b)) {
    throw v.call(null, "ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Ea = {};
function Ga(a) {
  if (a ? a.ja : a) {
    return a.ja(a);
  }
  var b;
  b = Ga[m(null == a ? null : a)];
  if (!b && (b = Ga._, !b)) {
    throw v.call(null, "INext.-next", a);
  }
  return b.call(null, a);
}
var Ha = {}, D = function() {
  function a(a, b, c) {
    if (a ? a.G : a) {
      return a.G(a, b, c);
    }
    var h;
    h = D[m(null == a ? null : a)];
    if (!h && (h = D._, !h)) {
      throw v.call(null, "ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.F : a) {
      return a.F(a, b);
    }
    var c;
    c = D[m(null == a ? null : a)];
    if (!c && (c = D._, !c)) {
      throw v.call(null, "ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.B = a;
  return c;
}();
function Ia(a, b) {
  if (a ? a.Ya : a) {
    return a.Ya(a, b);
  }
  var c;
  c = Ia[m(null == a ? null : a)];
  if (!c && (c = Ia._, !c)) {
    throw v.call(null, "IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Ja(a, b, c) {
  if (a ? a.da : a) {
    return a.da(a, b, c);
  }
  var d;
  d = Ja[m(null == a ? null : a)];
  if (!d && (d = Ja._, !d)) {
    throw v.call(null, "IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Ka = {};
function La(a, b) {
  if (a ? a.ma : a) {
    return a.ma(a, b);
  }
  var c;
  c = La[m(null == a ? null : a)];
  if (!c && (c = La._, !c)) {
    throw v.call(null, "IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Na = {};
function Oa(a) {
  if (a ? a.vb : a) {
    return a.vb();
  }
  var b;
  b = Oa[m(null == a ? null : a)];
  if (!b && (b = Oa._, !b)) {
    throw v.call(null, "IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Qa(a) {
  if (a ? a.wb : a) {
    return a.wb();
  }
  var b;
  b = Qa[m(null == a ? null : a)];
  if (!b && (b = Qa._, !b)) {
    throw v.call(null, "IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Ra = {}, Sa = {};
function Ta(a, b, c) {
  if (a ? a.qb : a) {
    return a.qb(a, b, c);
  }
  var d;
  d = Ta[m(null == a ? null : a)];
  if (!d && (d = Ta._, !d)) {
    throw v.call(null, "IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Ua(a) {
  if (a ? a.bb : a) {
    return a.bb(a);
  }
  var b;
  b = Ua[m(null == a ? null : a)];
  if (!b && (b = Ua._, !b)) {
    throw v.call(null, "IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Va = {};
function Wa(a) {
  if (a ? a.J : a) {
    return a.J(a);
  }
  var b;
  b = Wa[m(null == a ? null : a)];
  if (!b && (b = Wa._, !b)) {
    throw v.call(null, "IMeta.-meta", a);
  }
  return b.call(null, a);
}
var Xa = {};
function Za(a, b) {
  if (a ? a.L : a) {
    return a.L(a, b);
  }
  var c;
  c = Za[m(null == a ? null : a)];
  if (!c && (c = Za._, !c)) {
    throw v.call(null, "IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var $a = {}, ab = function() {
  function a(a, b, c) {
    if (a ? a.W : a) {
      return a.W(a, b, c);
    }
    var h;
    h = ab[m(null == a ? null : a)];
    if (!h && (h = ab._, !h)) {
      throw v.call(null, "IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.V : a) {
      return a.V(a, b);
    }
    var c;
    c = ab[m(null == a ? null : a)];
    if (!c && (c = ab._, !c)) {
      throw v.call(null, "IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.B = a;
  return c;
}();
function bb(a, b) {
  if (a ? a.C : a) {
    return a.C(a, b);
  }
  var c;
  c = bb[m(null == a ? null : a)];
  if (!c && (c = bb._, !c)) {
    throw v.call(null, "IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function cb(a) {
  if (a ? a.D : a) {
    return a.D(a);
  }
  var b;
  b = cb[m(null == a ? null : a)];
  if (!b && (b = cb._, !b)) {
    throw v.call(null, "IHash.-hash", a);
  }
  return b.call(null, a);
}
var db = {};
function eb(a) {
  if (a ? a.N : a) {
    return a.N(a);
  }
  var b;
  b = eb[m(null == a ? null : a)];
  if (!b && (b = eb._, !b)) {
    throw v.call(null, "ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var fb = {};
function E(a, b) {
  if (a ? a.Bb : a) {
    return a.Bb(0, b);
  }
  var c;
  c = E[m(null == a ? null : a)];
  if (!c && (c = E._, !c)) {
    throw v.call(null, "IWriter.-write", a);
  }
  return c.call(null, a, b);
}
function gb(a) {
  if (a ? a.Rb : a) {
    return null;
  }
  var b;
  b = gb[m(null == a ? null : a)];
  if (!b && (b = gb._, !b)) {
    throw v.call(null, "IWriter.-flush", a);
  }
  return b.call(null, a);
}
var hb = {};
function kb(a, b, c) {
  if (a ? a.H : a) {
    return a.H(a, b, c);
  }
  var d;
  d = kb[m(null == a ? null : a)];
  if (!d && (d = kb._, !d)) {
    throw v.call(null, "IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function lb(a, b, c) {
  if (a ? a.Ab : a) {
    return a.Ab(0, b, c);
  }
  var d;
  d = lb[m(null == a ? null : a)];
  if (!d && (d = lb._, !d)) {
    throw v.call(null, "IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function mb(a) {
  if (a ? a.Ia : a) {
    return a.Ia(a);
  }
  var b;
  b = mb[m(null == a ? null : a)];
  if (!b && (b = mb._, !b)) {
    throw v.call(null, "IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function nb(a, b) {
  if (a ? a.La : a) {
    return a.La(a, b);
  }
  var c;
  c = nb[m(null == a ? null : a)];
  if (!c && (c = nb._, !c)) {
    throw v.call(null, "ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function ob(a) {
  if (a ? a.Ma : a) {
    return a.Ma(a);
  }
  var b;
  b = ob[m(null == a ? null : a)];
  if (!b && (b = ob._, !b)) {
    throw v.call(null, "ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function pb(a, b, c) {
  if (a ? a.Ua : a) {
    return a.Ua(a, b, c);
  }
  var d;
  d = pb[m(null == a ? null : a)];
  if (!d && (d = pb._, !d)) {
    throw v.call(null, "ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function qb(a, b, c) {
  if (a ? a.zb : a) {
    return a.zb(0, b, c);
  }
  var d;
  d = qb[m(null == a ? null : a)];
  if (!d && (d = qb._, !d)) {
    throw v.call(null, "ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function rb(a, b) {
  if (a ? a.Ha : a) {
    return a.Ha(a, b);
  }
  var c;
  c = rb[m(null == a ? null : a)];
  if (!c && (c = rb._, !c)) {
    throw v.call(null, "IComparable.-compare", a);
  }
  return c.call(null, a, b);
}
function sb(a) {
  if (a ? a.sb : a) {
    return a.sb();
  }
  var b;
  b = sb[m(null == a ? null : a)];
  if (!b && (b = sb._, !b)) {
    throw v.call(null, "IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function tb(a) {
  if (a ? a.$a : a) {
    return a.$a(a);
  }
  var b;
  b = tb[m(null == a ? null : a)];
  if (!b && (b = tb._, !b)) {
    throw v.call(null, "IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function ub(a) {
  if (a ? a.ab : a) {
    return a.ab(a);
  }
  var b;
  b = ub[m(null == a ? null : a)];
  if (!b && (b = ub._, !b)) {
    throw v.call(null, "IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function vb(a) {
  if (a ? a.Za : a) {
    return a.Za(a);
  }
  var b;
  b = vb[m(null == a ? null : a)];
  if (!b && (b = vb._, !b)) {
    throw v.call(null, "IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function wb(a) {
  if (a ? a.xb : a) {
    return a.name;
  }
  var b;
  b = wb[m(null == a ? null : a)];
  if (!b && (b = wb._, !b)) {
    throw v.call(null, "INamed.-name", a);
  }
  return b.call(null, a);
}
function xb(a) {
  if (a ? a.yb : a) {
    return a.ga;
  }
  var b;
  b = xb[m(null == a ? null : a)];
  if (!b && (b = xb._, !b)) {
    throw v.call(null, "INamed.-namespace", a);
  }
  return b.call(null, a);
}
function zb(a, b) {
  if (a ? a.Mb : a) {
    return a.Mb(a, b);
  }
  var c;
  c = zb[m(null == a ? null : a)];
  if (!c && (c = zb._, !c)) {
    throw v.call(null, "IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var Ab = function() {
  function a(a, b, c, d, e) {
    if (a ? a.Qb : a) {
      return a.Qb(a, b, c, d, e);
    }
    var p;
    p = Ab[m(null == a ? null : a)];
    if (!p && (p = Ab._, !p)) {
      throw v.call(null, "ISwap.-swap!", a);
    }
    return p.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.Pb : a) {
      return a.Pb(a, b, c, d);
    }
    var e;
    e = Ab[m(null == a ? null : a)];
    if (!e && (e = Ab._, !e)) {
      throw v.call(null, "ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.Ob : a) {
      return a.Ob(a, b, c);
    }
    var d;
    d = Ab[m(null == a ? null : a)];
    if (!d && (d = Ab._, !d)) {
      throw v.call(null, "ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.Nb : a) {
      return a.Nb(a, b);
    }
    var c;
    c = Ab[m(null == a ? null : a)];
    if (!c && (c = Ab._, !c)) {
      throw v.call(null, "ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
      case 4:
        return b.call(this, e, h, k, l);
      case 5:
        return a.call(this, e, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.p = d;
  e.B = c;
  e.U = b;
  e.za = a;
  return e;
}();
function Bb(a) {
  if (a ? a.Sa : a) {
    return a.Sa(a);
  }
  var b;
  b = Bb[m(null == a ? null : a)];
  if (!b && (b = Bb._, !b)) {
    throw v.call(null, "IIterable.-iterator", a);
  }
  return b.call(null, a);
}
function Cb(a) {
  this.Ub = a;
  this.A = 0;
  this.i = 1073741824;
}
Cb.prototype.Bb = function(a, b) {
  return this.Ub.append(b);
};
Cb.prototype.Rb = function() {
  return null;
};
function Db(a) {
  var b = new ja, c = new Cb(b);
  kb.call(null, a, c, la.call(null));
  gb.call(null, c);
  return "" + w.f(b);
}
function Eb(a, b) {
  return a << b | a >>> -b;
}
var Fb = "undefined" !== typeof Math.imul && 0 !== Math.imul.call(null, 4294967295, 5) ? function(a, b) {
  return Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Gb(a) {
  return Fb.call(null, Eb.call(null, Fb.call(null, a, 3432918353), 15), 461845907);
}
function Hb(a, b) {
  return Fb.call(null, Eb.call(null, a ^ b, 13), 5) + 3864292196;
}
function Ib(a, b) {
  var c = a ^ b, c = Fb.call(null, c ^ c >>> 16, 2246822507), c = Fb.call(null, c ^ c >>> 13, 3266489909);
  return c ^ c >>> 16;
}
function Jb(a) {
  if (0 === a) {
    return a;
  }
  a = Gb.call(null, a);
  a = Hb.call(null, 0, a);
  return Ib.call(null, a, 4);
}
function Kb(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Hb.call(null, c, Gb.call(null, a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
    b = void 0;
  }
  b = 1 === (a.length & 1) ? b ^ Gb.call(null, a.charCodeAt(a.length - 1)) : b;
  return Ib.call(null, b, Fb.call(null, 2, a.length));
}
var Lb = {}, Mb = 0;
function Nb(a) {
  if (null != a) {
    var b = a.length;
    if (0 < b) {
      for (var c = 0, d = 0;;) {
        if (c < b) {
          var e = c + 1, d = Fb.call(null, 31, d) + a.charCodeAt(c), c = e
        } else {
          return d;
        }
      }
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}
function Ob(a) {
  var b = Nb.call(null, a);
  Lb[a] = b;
  Mb += 1;
  return b;
}
function Pb(a) {
  255 < Mb && (Lb = {}, Mb = 0);
  var b = Lb[a];
  return "number" === typeof b ? b : Ob.call(null, a);
}
function Qb(a) {
  return a && (a.i & 4194304 || a.Yb) ? cb.call(null, a) : "number" === typeof a ? Math.floor.call(null, a) % 2147483647 : !0 === a ? 1 : !1 === a ? 0 : "string" === typeof a ? Jb.call(null, Pb.call(null, a)) : null == a ? 0 : cb.call(null, a);
}
function Rb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Sb(a) {
  return Rb.call(null, Kb.call(null, a.name), Pb.call(null, a.ga));
}
function Tb(a, b) {
  if (t(Ub.call(null, a, b))) {
    return 0;
  }
  var c = na.call(null, a.ga);
  if (t(c ? b.ga : c)) {
    return-1;
  }
  if (t(a.ga)) {
    if (na.call(null, b.ga)) {
      return 1;
    }
    c = Wb.call(null, a.ga, b.ga);
    return 0 === c ? Wb.call(null, a.name, b.name) : c;
  }
  return Wb.call(null, a.name, b.name);
}
function Xb(a, b, c, d, e) {
  this.ga = a;
  this.name = b;
  this.ya = c;
  this.Ba = d;
  this.T = e;
  this.i = 2154168321;
  this.A = 4096;
}
f = Xb.prototype;
f.H = function(a, b) {
  return E.call(null, b, this.ya);
};
f.xb = function() {
  return this.name;
};
f.yb = function() {
  return this.ga;
};
f.D = function() {
  var a = this.Ba;
  return null != a ? a : this.Ba = a = Sb.call(null, this);
};
f.L = function(a, b) {
  return new Xb(this.ga, this.name, this.ya, this.Ba, b);
};
f.J = function() {
  return this.T;
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return D.call(null, c, this, null);
      case 3:
        return D.call(null, c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = function(a, c) {
    return D.call(null, c, this, null);
  };
  a.B = function(a, c, d) {
    return D.call(null, c, this, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta.call(null, b)));
};
f.f = function(a) {
  return D.call(null, a, this, null);
};
f.p = function(a, b) {
  return D.call(null, a, this, b);
};
f.C = function(a, b) {
  return b instanceof Xb ? this.ya === b.ya : !1;
};
f.toString = function() {
  return this.ya;
};
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 8388608 || a.Zb)) {
    return eb.call(null, a);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Yb(a, 0);
  }
  if (u.call(null, db, a)) {
    return eb.call(null, a);
  }
  throw Error("" + w.f(a) + " is not ISeqable");
}
function H(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 64 || a.Ka)) {
    return z.call(null, a);
  }
  a = G.call(null, a);
  return null == a ? null : z.call(null, a);
}
function I(a) {
  return null != a ? a && (a.i & 64 || a.Ka) ? A.call(null, a) : (a = G.call(null, a)) ? A.call(null, a) : K : K;
}
function L(a) {
  return null == a ? null : a && (a.i & 128 || a.Ta) ? Ga.call(null, a) : G.call(null, I.call(null, a));
}
var Ub = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || bb.call(null, a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.call(null, a, d)) {
          if (L.call(null, e)) {
            a = d, d = H.call(null, e), e = L.call(null, e);
          } else {
            return b.call(null, d, H.call(null, e));
          }
        } else {
          return!1;
        }
      }
    }
    a.s = 2;
    a.m = function(a) {
      var b = H(a);
      a = L(a);
      var d = H(a);
      a = I(a);
      return c(b, d, a);
    };
    a.l = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.l(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 2;
  b.m = c.m;
  b.f = function() {
    return!0;
  };
  b.p = a;
  b.l = c.l;
  return b;
}();
function Zb(a, b) {
  var c = Gb.call(null, a), c = Hb.call(null, 0, c);
  return Ib.call(null, c, b);
}
function $b(a) {
  var b = 0, c = 1;
  for (a = G.call(null, a);;) {
    if (null != a) {
      b += 1, c = Fb.call(null, 31, c) + Qb.call(null, H.call(null, a)) | 0, a = L.call(null, a);
    } else {
      return Zb.call(null, c, b);
    }
  }
}
function ac(a) {
  var b = 0, c = 0;
  for (a = G.call(null, a);;) {
    if (null != a) {
      b += 1, c = c + Qb.call(null, H.call(null, a)) | 0, a = L.call(null, a);
    } else {
      return Zb.call(null, c, b);
    }
  }
}
wa["null"] = !0;
ya["null"] = function() {
  return 0;
};
Date.prototype.C = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
bb.number = function(a, b) {
  return a === b;
};
Va["function"] = !0;
Wa["function"] = function() {
  return null;
};
ua["function"] = !0;
cb._ = function(a) {
  return a[ba] || (a[ba] = ++ca);
};
function bc(a) {
  this.ha = a;
  this.A = 0;
  this.i = 32768;
}
bc.prototype.bb = function() {
  return this.ha;
};
function cc(a) {
  return new bc(a);
}
function dc(a) {
  return a instanceof bc;
}
function ec(a) {
  return Ua.call(null, a);
}
var fc = function() {
  function a(a, b, c, d) {
    for (var l = ya.call(null, a);;) {
      if (d < l) {
        c = b.call(null, c, y.call(null, a, d));
        if (dc.call(null, c)) {
          return ec.call(null, c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = ya.call(null, a), l = 0;;) {
      if (l < d) {
        c = b.call(null, c, y.call(null, a, l));
        if (dc.call(null, c)) {
          return ec.call(null, c);
        }
        l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = ya.call(null, a);
    if (0 === c) {
      return b.call(null);
    }
    for (var d = y.call(null, a, 0), l = 1;;) {
      if (l < c) {
        d = b.call(null, d, y.call(null, a, l));
        if (dc.call(null, d)) {
          return ec.call(null, d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.p = c;
  d.B = b;
  d.U = a;
  return d;
}(), gc = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.call(null, c, a[d]);
        if (dc.call(null, c)) {
          return ec.call(null, c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.call(null, c, a[l]);
        if (dc.call(null, c)) {
          return ec.call(null, c);
        }
        l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.call(null, d, a[l]);
        if (dc.call(null, d)) {
          return ec.call(null, d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.p = c;
  d.B = b;
  d.U = a;
  return d;
}();
function hc(a) {
  return a ? a.i & 2 || a.Eb ? !0 : a.i ? !1 : u.call(null, wa, a) : u.call(null, wa, a);
}
function ic(a) {
  return a ? a.i & 16 || a.tb ? !0 : a.i ? !1 : u.call(null, Ba, a) : u.call(null, Ba, a);
}
function jc(a, b) {
  this.e = a;
  this.q = b;
}
jc.prototype.rb = function() {
  return this.q < this.e.length;
};
jc.prototype.next = function() {
  var a = this.e[this.q];
  this.q += 1;
  return a;
};
function Yb(a, b) {
  this.e = a;
  this.q = b;
  this.i = 166199550;
  this.A = 8192;
}
f = Yb.prototype;
f.toString = function() {
  return Db.call(null, this);
};
f.ea = function(a, b) {
  var c = b + this.q;
  return c < this.e.length ? this.e[c] : null;
};
f.fa = function(a, b, c) {
  a = b + this.q;
  return a < this.e.length ? this.e[a] : c;
};
f.Sa = function() {
  return new jc(this.e, this.q);
};
f.ja = function() {
  return this.q + 1 < this.e.length ? new Yb(this.e, this.q + 1) : null;
};
f.O = function() {
  return this.e.length - this.q;
};
f.D = function() {
  return $b.call(null, this);
};
f.C = function(a, b) {
  return kc.call(null, this, b);
};
f.R = function() {
  return K;
};
f.V = function(a, b) {
  return gc.call(null, this.e, b, this.e[this.q], this.q + 1);
};
f.W = function(a, b, c) {
  return gc.call(null, this.e, b, c, this.q);
};
f.$ = function() {
  return this.e[this.q];
};
f.aa = function() {
  return this.q + 1 < this.e.length ? new Yb(this.e, this.q + 1) : K;
};
f.N = function() {
  return this;
};
f.M = function(a, b) {
  return O.call(null, b, this);
};
var lc = function() {
  function a(a, b) {
    return b < a.length ? new Yb(a, b) : null;
  }
  function b(a) {
    return c.call(null, a, 0);
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
  c.p = a;
  return c;
}(), M = function() {
  function a(a, b) {
    return lc.call(null, a, b);
  }
  function b(a) {
    return lc.call(null, a, 0);
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
  c.p = a;
  return c;
}();
function mc(a) {
  return H.call(null, L.call(null, a));
}
function nc(a) {
  return L.call(null, L.call(null, a));
}
bb._ = function(a, b) {
  return a === b;
};
var pc = function() {
  function a(a, b) {
    return null != a ? Aa.call(null, a, b) : Aa.call(null, K, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (t(e)) {
          a = b.call(null, a, d), d = H.call(null, e), e = L.call(null, e);
        } else {
          return b.call(null, a, d);
        }
      }
    }
    a.s = 2;
    a.m = function(a) {
      var b = H(a);
      a = L(a);
      var d = H(a);
      a = I(a);
      return c(b, d, a);
    };
    a.l = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 0:
        return oc;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.l(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 2;
  b.m = c.m;
  b.ia = function() {
    return oc;
  };
  b.f = function(a) {
    return a;
  };
  b.p = a;
  b.l = c.l;
  return b;
}();
function qc(a) {
  a = G.call(null, a);
  for (var b = 0;;) {
    if (hc.call(null, a)) {
      return b + ya.call(null, a);
    }
    a = L.call(null, a);
    b += 1;
  }
}
function P(a) {
  return null != a ? a && (a.i & 2 || a.Eb) ? ya.call(null, a) : a instanceof Array ? a.length : "string" === typeof a ? a.length : u.call(null, wa, a) ? ya.call(null, a) : qc.call(null, a) : 0;
}
var rc = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return G.call(null, a) ? H.call(null, a) : c;
      }
      if (ic.call(null, a)) {
        return y.call(null, a, b, c);
      }
      if (G.call(null, a)) {
        a = L.call(null, a), b -= 1;
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
        if (G.call(null, a)) {
          return H.call(null, a);
        }
        throw Error("Index out of bounds");
      }
      if (ic.call(null, a)) {
        return y.call(null, a, b);
      }
      if (G.call(null, a)) {
        var c = L.call(null, a), h = b - 1;
        a = c;
        b = h;
      } else {
        throw Error("Index out of bounds");
      }
    }
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.B = a;
  return c;
}(), Q = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.i & 16 || a.tb)) {
      return y.call(null, a, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (u.call(null, Ba, a)) {
      return y.call(null, a, b);
    }
    if (a ? a.i & 64 || a.Ka || (a.i ? 0 : u.call(null, Da, a)) : u.call(null, Da, a)) {
      return rc.call(null, a, b, c);
    }
    throw Error("nth not supported on this type " + w.f(sa.call(null, qa.call(null, a))));
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.i & 16 || a.tb)) {
      return y.call(null, a, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (u.call(null, Ba, a)) {
      return y.call(null, a, b);
    }
    if (a ? a.i & 64 || a.Ka || (a.i ? 0 : u.call(null, Da, a)) : u.call(null, Da, a)) {
      return rc.call(null, a, b);
    }
    throw Error("nth not supported on this type " + w.f(sa.call(null, qa.call(null, a))));
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.B = a;
  return c;
}(), S = function() {
  function a(a, b, c) {
    return null != a ? a && (a.i & 256 || a.ub) ? D.call(null, a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : u.call(null, Ha, a) ? D.call(null, a, b, c) : c : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.i & 256 || a.ub) ? D.call(null, a, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : u.call(null, Ha, a) ? D.call(null, a, b) : null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.B = a;
  return c;
}(), vc = function() {
  function a(a, b, c) {
    if (null != a) {
      a = Ja.call(null, a, b, c);
    } else {
      a: {
        a = [b];
        c = [c];
        b = a.length;
        for (var h = 0, k = sc.call(null, tc);;) {
          if (h < b) {
            var l = h + 1, k = pb.call(null, k, a[h], c[h]), h = l
          } else {
            a = uc.call(null, k);
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
      var n = null;
      3 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, n);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.call(null, a, d, e), t(l)) {
          d = H.call(null, l), e = mc.call(null, l), l = nc.call(null, l);
        } else {
          return a;
        }
      }
    }
    a.s = 3;
    a.m = function(a) {
      var b = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var l = H(a);
      a = I(a);
      return c(b, d, l, a);
    };
    a.l = c;
    return a;
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.l(b, e, g, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 3;
  b.m = c.m;
  b.B = a;
  b.l = c.l;
  return b;
}(), wc = function() {
  function a(a, b) {
    return null == a ? null : La.call(null, a, b);
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
        a = b.call(null, a, d);
        if (t(e)) {
          d = H.call(null, e), e = L.call(null, e);
        } else {
          return a;
        }
      }
    }
    a.s = 2;
    a.m = function(a) {
      var b = H(a);
      a = L(a);
      var d = H(a);
      a = I(a);
      return c(b, d, a);
    };
    a.l = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.l(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 2;
  b.m = c.m;
  b.f = function(a) {
    return a;
  };
  b.p = a;
  b.l = c.l;
  return b;
}();
function yc(a) {
  var b = "function" == m(a);
  return b ? b : a ? t(t(null) ? null : a.Db) ? !0 : a.ec ? !1 : u.call(null, ua, a) : u.call(null, ua, a);
}
function zc(a, b) {
  this.t = a;
  this.meta = b;
  this.A = 0;
  this.i = 393217;
}
f = zc.prototype;
f.call = function() {
  function a(a, b, c, d, e, g, h, k, l, n, p, r, s, x, F, C, J, N, R, Y, B, xa) {
    return Ac.call(null, this.t, b, c, d, e, g, h, k, l, n, p, r, s, x, F, C, J, N, R, Y, B, xa);
  }
  function b(a, b, c, d, e, g, h, k, l, n, p, r, s, x, F, C, J, N, R, Y, B) {
    return this.t.call(null, b, c, d, e, g, h, k, l, n, p, r, s, x, F, C, J, N, R, Y, B);
  }
  function c(a, b, c, d, e, g, h, k, l, n, p, r, s, x, F, C, J, N, R, Y) {
    return this.t.call(null, b, c, d, e, g, h, k, l, n, p, r, s, x, F, C, J, N, R, Y);
  }
  function d(a, b, c, d, e, g, h, k, l, n, p, r, s, x, F, C, J, N, R) {
    return this.t.call(null, b, c, d, e, g, h, k, l, n, p, r, s, x, F, C, J, N, R);
  }
  function e(a, b, c, d, e, g, h, k, l, n, p, r, s, x, F, C, J, N) {
    return this.t.call(null, b, c, d, e, g, h, k, l, n, p, r, s, x, F, C, J, N);
  }
  function g(a, b, c, d, e, g, h, k, l, n, p, r, s, x, F, C, J) {
    return this.t.call(null, b, c, d, e, g, h, k, l, n, p, r, s, x, F, C, J);
  }
  function h(a, b, c, d, e, g, h, k, l, n, p, r, s, x, F, C) {
    return this.t.call(null, b, c, d, e, g, h, k, l, n, p, r, s, x, F, C);
  }
  function k(a, b, c, d, e, g, h, k, l, n, p, r, s, x, F) {
    return this.t.call(null, b, c, d, e, g, h, k, l, n, p, r, s, x, F);
  }
  function l(a, b, c, d, e, g, h, k, l, n, p, r, s, x) {
    return this.t.call(null, b, c, d, e, g, h, k, l, n, p, r, s, x);
  }
  function n(a, b, c, d, e, g, h, k, l, n, p, r, s) {
    return this.t.call(null, b, c, d, e, g, h, k, l, n, p, r, s);
  }
  function p(a, b, c, d, e, g, h, k, l, n, p, r) {
    return this.t.call(null, b, c, d, e, g, h, k, l, n, p, r);
  }
  function r(a, b, c, d, e, g, h, k, l, n, p) {
    return this.t.call(null, b, c, d, e, g, h, k, l, n, p);
  }
  function s(a, b, c, d, e, g, h, k, l, n) {
    return this.t.call(null, b, c, d, e, g, h, k, l, n);
  }
  function x(a, b, c, d, e, g, h, k, l) {
    return this.t.call(null, b, c, d, e, g, h, k, l);
  }
  function C(a, b, c, d, e, g, h, k) {
    return this.t.call(null, b, c, d, e, g, h, k);
  }
  function F(a, b, c, d, e, g, h) {
    return this.t.call(null, b, c, d, e, g, h);
  }
  function J(a, b, c, d, e, g) {
    return this.t.call(null, b, c, d, e, g);
  }
  function N(a, b, c, d, e) {
    return this.t.call(null, b, c, d, e);
  }
  function R(a, b, c, d) {
    return this.t.call(null, b, c, d);
  }
  function Y(a, b, c) {
    return this.t.call(null, b, c);
  }
  function xa(a, b) {
    return this.t.call(null, b);
  }
  function jb() {
    return this.t.call(null);
  }
  var B = null, B = function(B, $, da, fa, ga, ia, oa, ra, va, Ca, Fa, Ma, Pa, Ya, ib, yb, Vb, xc, ed, Td, Ce, Ff) {
    switch(arguments.length) {
      case 1:
        return jb.call(this, B);
      case 2:
        return xa.call(this, B, $);
      case 3:
        return Y.call(this, B, $, da);
      case 4:
        return R.call(this, B, $, da, fa);
      case 5:
        return N.call(this, B, $, da, fa, ga);
      case 6:
        return J.call(this, B, $, da, fa, ga, ia);
      case 7:
        return F.call(this, B, $, da, fa, ga, ia, oa);
      case 8:
        return C.call(this, B, $, da, fa, ga, ia, oa, ra);
      case 9:
        return x.call(this, B, $, da, fa, ga, ia, oa, ra, va);
      case 10:
        return s.call(this, B, $, da, fa, ga, ia, oa, ra, va, Ca);
      case 11:
        return r.call(this, B, $, da, fa, ga, ia, oa, ra, va, Ca, Fa);
      case 12:
        return p.call(this, B, $, da, fa, ga, ia, oa, ra, va, Ca, Fa, Ma);
      case 13:
        return n.call(this, B, $, da, fa, ga, ia, oa, ra, va, Ca, Fa, Ma, Pa);
      case 14:
        return l.call(this, B, $, da, fa, ga, ia, oa, ra, va, Ca, Fa, Ma, Pa, Ya);
      case 15:
        return k.call(this, B, $, da, fa, ga, ia, oa, ra, va, Ca, Fa, Ma, Pa, Ya, ib);
      case 16:
        return h.call(this, B, $, da, fa, ga, ia, oa, ra, va, Ca, Fa, Ma, Pa, Ya, ib, yb);
      case 17:
        return g.call(this, B, $, da, fa, ga, ia, oa, ra, va, Ca, Fa, Ma, Pa, Ya, ib, yb, Vb);
      case 18:
        return e.call(this, B, $, da, fa, ga, ia, oa, ra, va, Ca, Fa, Ma, Pa, Ya, ib, yb, Vb, xc);
      case 19:
        return d.call(this, B, $, da, fa, ga, ia, oa, ra, va, Ca, Fa, Ma, Pa, Ya, ib, yb, Vb, xc, ed);
      case 20:
        return c.call(this, B, $, da, fa, ga, ia, oa, ra, va, Ca, Fa, Ma, Pa, Ya, ib, yb, Vb, xc, ed, Td);
      case 21:
        return b.call(this, B, $, da, fa, ga, ia, oa, ra, va, Ca, Fa, Ma, Pa, Ya, ib, yb, Vb, xc, ed, Td, Ce);
      case 22:
        return a.call(this, B, $, da, fa, ga, ia, oa, ra, va, Ca, Fa, Ma, Pa, Ya, ib, yb, Vb, xc, ed, Td, Ce, Ff);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  B.f = jb;
  B.p = xa;
  B.B = Y;
  B.U = R;
  B.za = N;
  B.Ja = J;
  B.Ra = F;
  B.ob = C;
  B.pb = x;
  B.cb = s;
  B.eb = r;
  B.fb = p;
  B.gb = n;
  B.hb = l;
  B.ib = k;
  B.jb = h;
  B.kb = g;
  B.lb = e;
  B.mb = d;
  B.nb = c;
  B.Gb = b;
  B.Xb = a;
  return B;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta.call(null, b)));
};
f.ia = function() {
  return this.t.call(null);
};
f.f = function(a) {
  return this.t.call(null, a);
};
f.p = function(a, b) {
  return this.t.call(null, a, b);
};
f.B = function(a, b, c) {
  return this.t.call(null, a, b, c);
};
f.U = function(a, b, c, d) {
  return this.t.call(null, a, b, c, d);
};
f.za = function(a, b, c, d, e) {
  return this.t.call(null, a, b, c, d, e);
};
f.Ja = function(a, b, c, d, e, g) {
  return this.t.call(null, a, b, c, d, e, g);
};
f.Ra = function(a, b, c, d, e, g, h) {
  return this.t.call(null, a, b, c, d, e, g, h);
};
f.ob = function(a, b, c, d, e, g, h, k) {
  return this.t.call(null, a, b, c, d, e, g, h, k);
};
f.pb = function(a, b, c, d, e, g, h, k, l) {
  return this.t.call(null, a, b, c, d, e, g, h, k, l);
};
f.cb = function(a, b, c, d, e, g, h, k, l, n) {
  return this.t.call(null, a, b, c, d, e, g, h, k, l, n);
};
f.eb = function(a, b, c, d, e, g, h, k, l, n, p) {
  return this.t.call(null, a, b, c, d, e, g, h, k, l, n, p);
};
f.fb = function(a, b, c, d, e, g, h, k, l, n, p, r) {
  return this.t.call(null, a, b, c, d, e, g, h, k, l, n, p, r);
};
f.gb = function(a, b, c, d, e, g, h, k, l, n, p, r, s) {
  return this.t.call(null, a, b, c, d, e, g, h, k, l, n, p, r, s);
};
f.hb = function(a, b, c, d, e, g, h, k, l, n, p, r, s, x) {
  return this.t.call(null, a, b, c, d, e, g, h, k, l, n, p, r, s, x);
};
f.ib = function(a, b, c, d, e, g, h, k, l, n, p, r, s, x, C) {
  return this.t.call(null, a, b, c, d, e, g, h, k, l, n, p, r, s, x, C);
};
f.jb = function(a, b, c, d, e, g, h, k, l, n, p, r, s, x, C, F) {
  return this.t.call(null, a, b, c, d, e, g, h, k, l, n, p, r, s, x, C, F);
};
f.kb = function(a, b, c, d, e, g, h, k, l, n, p, r, s, x, C, F, J) {
  return this.t.call(null, a, b, c, d, e, g, h, k, l, n, p, r, s, x, C, F, J);
};
f.lb = function(a, b, c, d, e, g, h, k, l, n, p, r, s, x, C, F, J, N) {
  return this.t.call(null, a, b, c, d, e, g, h, k, l, n, p, r, s, x, C, F, J, N);
};
f.mb = function(a, b, c, d, e, g, h, k, l, n, p, r, s, x, C, F, J, N, R) {
  return this.t.call(null, a, b, c, d, e, g, h, k, l, n, p, r, s, x, C, F, J, N, R);
};
f.nb = function(a, b, c, d, e, g, h, k, l, n, p, r, s, x, C, F, J, N, R, Y) {
  return this.t.call(null, a, b, c, d, e, g, h, k, l, n, p, r, s, x, C, F, J, N, R, Y);
};
f.Gb = function(a, b, c, d, e, g, h, k, l, n, p, r, s, x, C, F, J, N, R, Y, xa) {
  return Ac.call(null, this.t, a, b, c, d, e, g, h, k, l, n, p, r, s, x, C, F, J, N, R, Y, xa);
};
f.Db = !0;
f.L = function(a, b) {
  return new zc(this.t, b);
};
f.J = function() {
  return this.meta;
};
function Bc(a, b) {
  return yc.call(null, a) && !(a ? a.i & 262144 || a.cc || (a.i ? 0 : u.call(null, Xa, a)) : u.call(null, Xa, a)) ? new zc(a, b) : null == a ? null : Za.call(null, a, b);
}
function Cc(a) {
  var b = null != a;
  return(b ? a ? a.i & 131072 || a.Jb || (a.i ? 0 : u.call(null, Va, a)) : u.call(null, Va, a) : b) ? Wa.call(null, a) : null;
}
function Dc(a) {
  return null == a || na.call(null, G.call(null, a));
}
function Ec(a) {
  return null == a ? !1 : a ? a.i & 4096 || a.ac ? !0 : a.i ? !1 : u.call(null, Ra, a) : u.call(null, Ra, a);
}
function Fc(a) {
  return a ? a.i & 16777216 || a.$b ? !0 : a.i ? !1 : u.call(null, fb, a) : u.call(null, fb, a);
}
function Gc(a) {
  return null == a ? !1 : a ? a.i & 1024 || a.Hb ? !0 : a.i ? !1 : u.call(null, Ka, a) : u.call(null, Ka, a);
}
function Hc(a) {
  return a ? a.i & 16384 || a.bc ? !0 : a.i ? !1 : u.call(null, Sa, a) : u.call(null, Sa, a);
}
function Ic(a) {
  return a ? a.A & 512 || a.Wb ? !0 : !1 : !1;
}
function Jc(a) {
  var b = [];
  ha(a, function(a) {
    return function(b, e) {
      return a.push(e);
    };
  }(b));
  return b;
}
function Kc(a, b, c, d, e) {
  for (;;) {
    if (0 === e) {
      return c;
    }
    c[d] = a[b];
    d += 1;
    e -= 1;
    b += 1;
  }
}
function Lc(a, b, c, d, e) {
  b += e - 1;
  for (d += e - 1;;) {
    if (0 === e) {
      return c;
    }
    c[d] = a[b];
    d -= 1;
    e -= 1;
    b -= 1;
  }
}
var Mc = {};
function Nc(a) {
  return null == a ? !1 : a ? a.i & 64 || a.Ka ? !0 : a.i ? !1 : u.call(null, Da, a) : u.call(null, Da, a);
}
function Oc(a) {
  return t(a) ? !0 : !1;
}
function Pc(a, b) {
  return S.call(null, a, b, Mc) === Mc ? !1 : !0;
}
function Wb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (qa.call(null, a) === qa.call(null, b)) {
    return a && (a.A & 2048 || a.Qa) ? rb.call(null, a, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  throw Error("compare on non-nil objects of different types");
}
var Qc = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = Wb.call(null, Q.call(null, a, h), Q.call(null, b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var g = P.call(null, a), h = P.call(null, b);
    return g < h ? -1 : g > h ? 1 : c.call(null, a, b, g, 0);
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.U = a;
  return c;
}(), T = function() {
  function a(a, b, c) {
    for (c = G.call(null, c);;) {
      if (c) {
        b = a.call(null, b, H.call(null, c));
        if (dc.call(null, b)) {
          return ec.call(null, b);
        }
        c = L.call(null, c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = G.call(null, b);
    return c ? Rc.call(null, a, H.call(null, c), L.call(null, c)) : a.call(null);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.B = a;
  return c;
}(), Rc = function() {
  function a(a, b, c) {
    return c && (c.i & 524288 || c.Lb) ? ab.call(null, c, a, b) : c instanceof Array ? gc.call(null, c, a, b) : "string" === typeof c ? gc.call(null, c, a, b) : u.call(null, $a, c) ? ab.call(null, c, a, b) : T.call(null, a, b, c);
  }
  function b(a, b) {
    return b && (b.i & 524288 || b.Lb) ? ab.call(null, b, a) : b instanceof Array ? gc.call(null, b, a) : "string" === typeof b ? gc.call(null, b, a) : u.call(null, $a, b) ? ab.call(null, b, a) : T.call(null, a, b);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.B = a;
  return c;
}();
function Sc(a) {
  return a;
}
var Tc = function() {
  function a(a, b, c, h) {
    a = a.call(null, b);
    c = Rc.call(null, a, c, h);
    return a.call(null, c);
  }
  function b(a, b, g) {
    return c.call(null, a, b, b.call(null), g);
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, g);
      case 4:
        return a.call(this, c, e, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.B = b;
  c.U = a;
  return c;
}();
function Uc(a) {
  return a - 1;
}
function Vc(a) {
  return 0 <= a ? Math.floor.call(null, a) : Math.ceil.call(null, a);
}
function Wc(a, b) {
  return(a % b + b) % b;
}
function Xc(a, b) {
  return Vc.call(null, (a - a % b) / b);
}
var Yc = function() {
  function a(a) {
    return a * c.call(null);
  }
  function b() {
    return Math.random.call(null);
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
  c.ia = b;
  c.f = a;
  return c;
}();
function Zc(a) {
  return Vc.call(null, Yc.call(null, a));
}
function $c(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function ad(a, b) {
  for (var c = b, d = G.call(null, a);;) {
    if (d && 0 < c) {
      c -= 1, d = L.call(null, d);
    } else {
      return d;
    }
  }
}
var w = function() {
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
      for (var e = new ja(b.call(null, a)), l = d;;) {
        if (t(l)) {
          e = e.append(b.call(null, H.call(null, l))), l = L.call(null, l);
        } else {
          return e.toString();
        }
      }
    }
    a.s = 1;
    a.m = function(a) {
      var b = H(a);
      a = I(a);
      return c(b, a);
    };
    a.l = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.l(b, M(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 1;
  b.m = c.m;
  b.ia = function() {
    return "";
  };
  b.f = a;
  b.l = c.l;
  return b;
}();
function kc(a, b) {
  return Oc.call(null, Fc.call(null, b) ? hc.call(null, a) && hc.call(null, b) && P.call(null, a) !== P.call(null, b) ? !1 : function() {
    for (var c = G.call(null, a), d = G.call(null, b);;) {
      if (null == c) {
        return null == d;
      }
      if (null != d && Ub.call(null, H.call(null, c), H.call(null, d))) {
        c = L.call(null, c), d = L.call(null, d);
      } else {
        return!1;
      }
    }
  }() : null);
}
function bd(a) {
  var b = 0;
  for (a = G.call(null, a);;) {
    if (a) {
      var c = H.call(null, a), b = (b + (Qb.call(null, cd.call(null, c)) ^ Qb.call(null, dd.call(null, c)))) % 4503599627370496;
      a = L.call(null, a);
    } else {
      return b;
    }
  }
}
function fd(a, b, c, d, e) {
  this.meta = a;
  this.first = b;
  this.sa = c;
  this.count = d;
  this.n = e;
  this.i = 65937646;
  this.A = 8192;
}
f = fd.prototype;
f.toString = function() {
  return Db.call(null, this);
};
f.J = function() {
  return this.meta;
};
f.ja = function() {
  return 1 === this.count ? null : this.sa;
};
f.O = function() {
  return this.count;
};
f.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b.call(null, this);
};
f.C = function(a, b) {
  return kc.call(null, this, b);
};
f.R = function() {
  return K;
};
f.V = function(a, b) {
  return T.call(null, b, this);
};
f.W = function(a, b, c) {
  return T.call(null, b, c, this);
};
f.$ = function() {
  return this.first;
};
f.aa = function() {
  return 1 === this.count ? K : this.sa;
};
f.N = function() {
  return this;
};
f.L = function(a, b) {
  return new fd(b, this.first, this.sa, this.count, this.n);
};
f.M = function(a, b) {
  return new fd(this.meta, b, this, this.count + 1, null);
};
function gd(a) {
  this.meta = a;
  this.i = 65937614;
  this.A = 8192;
}
f = gd.prototype;
f.toString = function() {
  return Db.call(null, this);
};
f.J = function() {
  return this.meta;
};
f.ja = function() {
  return null;
};
f.O = function() {
  return 0;
};
f.D = function() {
  return 0;
};
f.C = function(a, b) {
  return kc.call(null, this, b);
};
f.R = function() {
  return this;
};
f.V = function(a, b) {
  return T.call(null, b, this);
};
f.W = function(a, b, c) {
  return T.call(null, b, c, this);
};
f.$ = function() {
  return null;
};
f.aa = function() {
  return K;
};
f.N = function() {
  return null;
};
f.L = function(a, b) {
  return new gd(b);
};
f.M = function(a, b) {
  return new fd(this.meta, b, null, 1, null);
};
var K = new gd(null), hd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Yb && 0 === a.q) {
      b = a.e;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(z.call(null, a)), a = Ga.call(null, a);
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
        var g = a - 1, e = Aa.call(null, e, b[a - 1]);
        a = g;
      } else {
        return e;
      }
    }
  }
  a.s = 0;
  a.m = function(a) {
    a = G(a);
    return b(a);
  };
  a.l = b;
  return a;
}();
function id(a, b, c, d) {
  this.meta = a;
  this.first = b;
  this.sa = c;
  this.n = d;
  this.i = 65929452;
  this.A = 8192;
}
f = id.prototype;
f.toString = function() {
  return Db.call(null, this);
};
f.J = function() {
  return this.meta;
};
f.ja = function() {
  return null == this.sa ? null : G.call(null, this.sa);
};
f.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b.call(null, this);
};
f.C = function(a, b) {
  return kc.call(null, this, b);
};
f.R = function() {
  return Bc.call(null, K, this.meta);
};
f.V = function(a, b) {
  return T.call(null, b, this);
};
f.W = function(a, b, c) {
  return T.call(null, b, c, this);
};
f.$ = function() {
  return this.first;
};
f.aa = function() {
  return null == this.sa ? K : this.sa;
};
f.N = function() {
  return this;
};
f.L = function(a, b) {
  return new id(b, this.first, this.sa, this.n);
};
f.M = function(a, b) {
  return new id(null, b, this, this.n);
};
function O(a, b) {
  var c = null == b;
  return(c ? c : b && (b.i & 64 || b.Ka)) ? new id(null, a, b, null) : new id(null, a, G.call(null, b), null);
}
function jd(a) {
  return Sb.call(null, a) + 2654435769 | 0;
}
function q(a, b, c, d) {
  this.ga = a;
  this.name = b;
  this.Z = c;
  this.Ba = d;
  this.i = 2153775105;
  this.A = 4096;
}
f = q.prototype;
f.H = function(a, b) {
  return E.call(null, b, ":" + w.f(this.Z));
};
f.xb = function() {
  return this.name;
};
f.yb = function() {
  return this.ga;
};
f.D = function() {
  var a = this.Ba;
  return null != a ? a : this.Ba = a = jd.call(null, this);
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return S.call(null, c, this);
      case 3:
        return S.call(null, c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = function(a, c) {
    return S.call(null, c, this);
  };
  a.B = function(a, c, d) {
    return S.call(null, c, this, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta.call(null, b)));
};
f.f = function(a) {
  return S.call(null, a, this);
};
f.p = function(a, b) {
  return S.call(null, a, this, b);
};
f.C = function(a, b) {
  return b instanceof q ? this.Z === b.Z : !1;
};
f.toString = function() {
  return ":" + w.f(this.Z);
};
function kd(a, b) {
  return a === b ? !0 : a instanceof q && b instanceof q ? a.Z === b.Z : !1;
}
function ld(a) {
  if (a && (a.A & 4096 || a.Kb)) {
    return xb.call(null, a);
  }
  throw Error("Doesn't support namespace: " + w.f(a));
}
var nd = function() {
  function a(a, b) {
    return new q(a, b, "" + w.f(t(a) ? "" + w.f(a) + "/" : null) + w.f(b), null);
  }
  function b(a) {
    if (a instanceof q) {
      return a;
    }
    if (a instanceof Xb) {
      return new q(ld.call(null, a), md.call(null, a), a.ya, null);
    }
    if ("string" === typeof a) {
      var b = a.split("/");
      return 2 === b.length ? new q(b[0], b[1], a, null) : new q(null, b[0], a, null);
    }
    return null;
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
  c.p = a;
  return c;
}();
function U(a, b, c, d) {
  this.meta = a;
  this.Va = b;
  this.P = c;
  this.n = d;
  this.A = 0;
  this.i = 32374988;
}
f = U.prototype;
f.toString = function() {
  return Db.call(null, this);
};
function od(a) {
  null != a.Va && (a.P = a.Va.call(null), a.Va = null);
  return a.P;
}
f.J = function() {
  return this.meta;
};
f.ja = function() {
  eb.call(null, this);
  return null == this.P ? null : L.call(null, this.P);
};
f.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b.call(null, this);
};
f.C = function(a, b) {
  return kc.call(null, this, b);
};
f.R = function() {
  return Bc.call(null, K, this.meta);
};
f.V = function(a, b) {
  return T.call(null, b, this);
};
f.W = function(a, b, c) {
  return T.call(null, b, c, this);
};
f.$ = function() {
  eb.call(null, this);
  return null == this.P ? null : H.call(null, this.P);
};
f.aa = function() {
  eb.call(null, this);
  return null != this.P ? I.call(null, this.P) : K;
};
f.N = function() {
  od(this);
  if (null == this.P) {
    return null;
  }
  for (var a = this.P;;) {
    if (a instanceof U) {
      a = od(a);
    } else {
      return this.P = a, G.call(null, this.P);
    }
  }
};
f.L = function(a, b) {
  return new U(b, this.Va, this.P, this.n);
};
f.M = function(a, b) {
  return O.call(null, b, this);
};
function pd(a, b) {
  this.Xa = a;
  this.end = b;
  this.A = 0;
  this.i = 2;
}
pd.prototype.O = function() {
  return this.end;
};
pd.prototype.add = function(a) {
  this.Xa[this.end] = a;
  return this.end += 1;
};
pd.prototype.pa = function() {
  var a = new qd(this.Xa, 0, this.end);
  this.Xa = null;
  return a;
};
function rd(a) {
  return new pd(Array(a), 0);
}
function qd(a, b, c) {
  this.e = a;
  this.off = b;
  this.end = c;
  this.A = 0;
  this.i = 524306;
}
f = qd.prototype;
f.V = function(a, b) {
  return gc.call(null, this.e, b, this.e[this.off], this.off + 1);
};
f.W = function(a, b, c) {
  return gc.call(null, this.e, b, c, this.off);
};
f.sb = function() {
  if (this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new qd(this.e, this.off + 1, this.end);
};
f.ea = function(a, b) {
  return this.e[this.off + b];
};
f.fa = function(a, b, c) {
  return 0 <= b && b < this.end - this.off ? this.e[this.off + b] : c;
};
f.O = function() {
  return this.end - this.off;
};
var sd = function() {
  function a(a, b, c) {
    return new qd(a, b, c);
  }
  function b(a, b) {
    return new qd(a, b, a.length);
  }
  function c(a) {
    return new qd(a, 0, a.length);
  }
  var d = null, d = function(d, g, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, g);
      case 3:
        return a.call(this, d, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.f = c;
  d.p = b;
  d.B = a;
  return d;
}();
function td(a, b, c, d) {
  this.pa = a;
  this.na = b;
  this.meta = c;
  this.n = d;
  this.i = 31850732;
  this.A = 1536;
}
f = td.prototype;
f.toString = function() {
  return Db.call(null, this);
};
f.J = function() {
  return this.meta;
};
f.ja = function() {
  if (1 < ya.call(null, this.pa)) {
    return new td(sb.call(null, this.pa), this.na, this.meta, null);
  }
  var a = eb.call(null, this.na);
  return null == a ? null : a;
};
f.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b.call(null, this);
};
f.C = function(a, b) {
  return kc.call(null, this, b);
};
f.R = function() {
  return Bc.call(null, K, this.meta);
};
f.$ = function() {
  return y.call(null, this.pa, 0);
};
f.aa = function() {
  return 1 < ya.call(null, this.pa) ? new td(sb.call(null, this.pa), this.na, this.meta, null) : null == this.na ? K : this.na;
};
f.N = function() {
  return this;
};
f.$a = function() {
  return this.pa;
};
f.ab = function() {
  return null == this.na ? K : this.na;
};
f.L = function(a, b) {
  return new td(this.pa, this.na, b, this.n);
};
f.M = function(a, b) {
  return O.call(null, b, this);
};
f.Za = function() {
  return null == this.na ? null : this.na;
};
function ud(a, b) {
  return 0 === ya.call(null, a) ? b : new td(a, b, null, null);
}
function vd(a, b) {
  return a.add(b);
}
function wd(a) {
  return a.pa();
}
function xd(a) {
  return tb.call(null, a);
}
function yd(a) {
  return ub.call(null, a);
}
function zd(a) {
  for (var b = [];;) {
    if (G.call(null, a)) {
      b.push(H.call(null, a)), a = L.call(null, a);
    } else {
      return b;
    }
  }
}
function Ad(a, b) {
  if (hc.call(null, a)) {
    return P.call(null, a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && G.call(null, c)) {
      c = L.call(null, c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var Cd = function Bd(b) {
  return null == b ? null : null == L.call(null, b) ? G.call(null, H.call(null, b)) : O.call(null, H.call(null, b), Bd.call(null, L.call(null, b)));
}, Dd = function() {
  function a(a, b) {
    return new U(null, function() {
      var c = G.call(null, a);
      return c ? Ic.call(null, c) ? ud.call(null, xd.call(null, c), d.call(null, yd.call(null, c), b)) : O.call(null, H.call(null, c), d.call(null, I.call(null, c), b)) : b;
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
      var g = null;
      2 < arguments.length && (g = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, g);
    }
    function b(a, c, e) {
      return function r(a, b) {
        return new U(null, function() {
          var c = G.call(null, a);
          return c ? Ic.call(null, c) ? ud.call(null, xd.call(null, c), r.call(null, yd.call(null, c), b)) : O.call(null, H.call(null, c), r.call(null, I.call(null, c), b)) : t(b) ? r.call(null, H.call(null, b), L.call(null, b)) : null;
        }, null, null);
      }.call(null, d.call(null, a, c), e);
    }
    a.s = 2;
    a.m = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = I(a);
      return b(c, d, a);
    };
    a.l = b;
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
        return e.l(d, h, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.s = 2;
  d.m = e.m;
  d.ia = c;
  d.f = b;
  d.p = a;
  d.l = e.l;
  return d;
}(), Ed = function() {
  function a(a, b, c, d) {
    return O.call(null, a, O.call(null, b, O.call(null, c, d)));
  }
  function b(a, b, c) {
    return O.call(null, a, O.call(null, b, c));
  }
  function c(a, b) {
    return O.call(null, a, b);
  }
  function d(a) {
    return G.call(null, a);
  }
  var e = null, g = function() {
    function a(c, d, e, g, h) {
      var x = null;
      4 < arguments.length && (x = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, x);
    }
    function b(a, c, d, e, g) {
      return O.call(null, a, O.call(null, c, O.call(null, d, O.call(null, e, Cd.call(null, g)))));
    }
    a.s = 4;
    a.m = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var e = H(a);
      a = L(a);
      var g = H(a);
      a = I(a);
      return b(c, d, e, g, a);
    };
    a.l = b;
    return a;
  }(), e = function(e, k, l, n, p) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, k);
      case 3:
        return b.call(this, e, k, l);
      case 4:
        return a.call(this, e, k, l, n);
      default:
        return g.l(e, k, l, n, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.s = 4;
  e.m = g.m;
  e.f = d;
  e.p = c;
  e.B = b;
  e.U = a;
  e.l = g.l;
  return e;
}();
function sc(a) {
  return mb.call(null, a);
}
function uc(a) {
  return ob.call(null, a);
}
var Fd = function() {
  function a(a, b) {
    return nb.call(null, a, b);
  }
  function b() {
    return sc.call(null, oc);
  }
  var c = null, d = function() {
    function a(c, d, e) {
      var n = null;
      2 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, n);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = nb.call(null, a, c), t(d)) {
          c = H.call(null, d), d = L.call(null, d);
        } else {
          return a;
        }
      }
    }
    a.s = 2;
    a.m = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = I(a);
      return b(c, d, a);
    };
    a.l = b;
    return a;
  }(), c = function(c, g, h) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return c;
      case 2:
        return a.call(this, c, g);
      default:
        return d.l(c, g, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.s = 2;
  c.m = d.m;
  c.ia = b;
  c.f = function(a) {
    return a;
  };
  c.p = a;
  c.l = d.l;
  return c;
}(), Gd = function() {
  function a(a, b, c) {
    return pb.call(null, a, b, c);
  }
  var b = null, c = function() {
    function a(c, d, k, l) {
      var n = null;
      3 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, k, n);
    }
    function b(a, c, d, e) {
      for (;;) {
        if (a = pb.call(null, a, c, d), t(e)) {
          c = H.call(null, e), d = mc.call(null, e), e = nc.call(null, e);
        } else {
          return a;
        }
      }
    }
    a.s = 3;
    a.m = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var l = H(a);
      a = I(a);
      return b(c, d, l, a);
    };
    a.l = b;
    return a;
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.l(b, e, g, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 3;
  b.m = c.m;
  b.B = a;
  b.l = c.l;
  return b;
}();
function Hd(a, b, c) {
  var d = G.call(null, c);
  if (0 === b) {
    return a.call(null);
  }
  c = z.call(null, d);
  var e = A.call(null, d);
  if (1 === b) {
    return a.f ? a.f(c) : a.call(null, c);
  }
  var d = z.call(null, e), g = A.call(null, e);
  if (2 === b) {
    return a.p ? a.p(c, d) : a.call(null, c, d);
  }
  var e = z.call(null, g), h = A.call(null, g);
  if (3 === b) {
    return a.B ? a.B(c, d, e) : a.call(null, c, d, e);
  }
  var g = z.call(null, h), k = A.call(null, h);
  if (4 === b) {
    return a.U ? a.U(c, d, e, g) : a.call(null, c, d, e, g);
  }
  var h = z.call(null, k), l = A.call(null, k);
  if (5 === b) {
    return a.za ? a.za(c, d, e, g, h) : a.call(null, c, d, e, g, h);
  }
  var k = z.call(null, l), n = A.call(null, l);
  if (6 === b) {
    return a.Ja ? a.Ja(c, d, e, g, h, k) : a.call(null, c, d, e, g, h, k);
  }
  var l = z.call(null, n), p = A.call(null, n);
  if (7 === b) {
    return a.Ra ? a.Ra(c, d, e, g, h, k, l) : a.call(null, c, d, e, g, h, k, l);
  }
  var n = z.call(null, p), r = A.call(null, p);
  if (8 === b) {
    return a.ob ? a.ob(c, d, e, g, h, k, l, n) : a.call(null, c, d, e, g, h, k, l, n);
  }
  var p = z.call(null, r), s = A.call(null, r);
  if (9 === b) {
    return a.pb ? a.pb(c, d, e, g, h, k, l, n, p) : a.call(null, c, d, e, g, h, k, l, n, p);
  }
  var r = z.call(null, s), x = A.call(null, s);
  if (10 === b) {
    return a.cb ? a.cb(c, d, e, g, h, k, l, n, p, r) : a.call(null, c, d, e, g, h, k, l, n, p, r);
  }
  var s = z.call(null, x), C = A.call(null, x);
  if (11 === b) {
    return a.eb ? a.eb(c, d, e, g, h, k, l, n, p, r, s) : a.call(null, c, d, e, g, h, k, l, n, p, r, s);
  }
  var x = z.call(null, C), F = A.call(null, C);
  if (12 === b) {
    return a.fb ? a.fb(c, d, e, g, h, k, l, n, p, r, s, x) : a.call(null, c, d, e, g, h, k, l, n, p, r, s, x);
  }
  var C = z.call(null, F), J = A.call(null, F);
  if (13 === b) {
    return a.gb ? a.gb(c, d, e, g, h, k, l, n, p, r, s, x, C) : a.call(null, c, d, e, g, h, k, l, n, p, r, s, x, C);
  }
  var F = z.call(null, J), N = A.call(null, J);
  if (14 === b) {
    return a.hb ? a.hb(c, d, e, g, h, k, l, n, p, r, s, x, C, F) : a.call(null, c, d, e, g, h, k, l, n, p, r, s, x, C, F);
  }
  var J = z.call(null, N), R = A.call(null, N);
  if (15 === b) {
    return a.ib ? a.ib(c, d, e, g, h, k, l, n, p, r, s, x, C, F, J) : a.call(null, c, d, e, g, h, k, l, n, p, r, s, x, C, F, J);
  }
  var N = z.call(null, R), Y = A.call(null, R);
  if (16 === b) {
    return a.jb ? a.jb(c, d, e, g, h, k, l, n, p, r, s, x, C, F, J, N) : a.call(null, c, d, e, g, h, k, l, n, p, r, s, x, C, F, J, N);
  }
  var R = z.call(null, Y), xa = A.call(null, Y);
  if (17 === b) {
    return a.kb ? a.kb(c, d, e, g, h, k, l, n, p, r, s, x, C, F, J, N, R) : a.call(null, c, d, e, g, h, k, l, n, p, r, s, x, C, F, J, N, R);
  }
  var Y = z.call(null, xa), jb = A.call(null, xa);
  if (18 === b) {
    return a.lb ? a.lb(c, d, e, g, h, k, l, n, p, r, s, x, C, F, J, N, R, Y) : a.call(null, c, d, e, g, h, k, l, n, p, r, s, x, C, F, J, N, R, Y);
  }
  xa = z.call(null, jb);
  jb = A.call(null, jb);
  if (19 === b) {
    return a.mb ? a.mb(c, d, e, g, h, k, l, n, p, r, s, x, C, F, J, N, R, Y, xa) : a.call(null, c, d, e, g, h, k, l, n, p, r, s, x, C, F, J, N, R, Y, xa);
  }
  var B = z.call(null, jb);
  A.call(null, jb);
  if (20 === b) {
    return a.nb ? a.nb(c, d, e, g, h, k, l, n, p, r, s, x, C, F, J, N, R, Y, xa, B) : a.call(null, c, d, e, g, h, k, l, n, p, r, s, x, C, F, J, N, R, Y, xa, B);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var Ac = function() {
  function a(a, b, c, d, e) {
    b = Ed.call(null, b, c, d, e);
    c = a.s;
    return a.m ? (d = Ad.call(null, b, c + 1), d <= c ? Hd.call(null, a, d, b) : a.m(b)) : a.apply(a, zd.call(null, b));
  }
  function b(a, b, c, d) {
    b = Ed.call(null, b, c, d);
    c = a.s;
    return a.m ? (d = Ad.call(null, b, c + 1), d <= c ? Hd.call(null, a, d, b) : a.m(b)) : a.apply(a, zd.call(null, b));
  }
  function c(a, b, c) {
    b = Ed.call(null, b, c);
    c = a.s;
    if (a.m) {
      var d = Ad.call(null, b, c + 1);
      return d <= c ? Hd.call(null, a, d, b) : a.m(b);
    }
    return a.apply(a, zd.call(null, b));
  }
  function d(a, b) {
    var c = a.s;
    if (a.m) {
      var d = Ad.call(null, b, c + 1);
      return d <= c ? Hd.call(null, a, d, b) : a.m(b);
    }
    return a.apply(a, zd.call(null, b));
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, x) {
      var C = null;
      5 < arguments.length && (C = M(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, g, h, C);
    }
    function b(a, c, d, e, g, h) {
      c = O.call(null, c, O.call(null, d, O.call(null, e, O.call(null, g, Cd.call(null, h)))));
      d = a.s;
      return a.m ? (e = Ad.call(null, c, d + 1), e <= d ? Hd.call(null, a, e, c) : a.m(c)) : a.apply(a, zd.call(null, c));
    }
    a.s = 5;
    a.m = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var e = H(a);
      a = L(a);
      var g = H(a);
      a = L(a);
      var h = H(a);
      a = I(a);
      return b(c, d, e, g, h, a);
    };
    a.l = b;
    return a;
  }(), e = function(e, k, l, n, p, r) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, n);
      case 5:
        return a.call(this, e, k, l, n, p);
      default:
        return g.l(e, k, l, n, p, M(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.s = 5;
  e.m = g.m;
  e.p = d;
  e.B = c;
  e.U = b;
  e.za = a;
  e.l = g.l;
  return e;
}();
function Id(a) {
  return G.call(null, a) ? a : null;
}
function Jd(a, b) {
  for (;;) {
    if (null == G.call(null, b)) {
      return!0;
    }
    if (t(a.call(null, H.call(null, b)))) {
      var c = a, d = L.call(null, b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
var Kd = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = M(Array.prototype.slice.call(arguments, 0), 0));
        return p.call(this, b);
      }
      function p(e) {
        return Ac.call(null, a, b, c, d, e);
      }
      e.s = 0;
      e.m = function(a) {
        a = G(a);
        return p(a);
      };
      e.l = p;
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
        return Ac.call(null, a, b, c, d);
      }
      d.s = 0;
      d.m = function(a) {
        a = G(a);
        return e(a);
      };
      d.l = e;
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
        return Ac.call(null, a, b, c);
      }
      c.s = 0;
      c.m = function(a) {
        a = G(a);
        return d(a);
      };
      c.l = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, g, r) {
      var s = null;
      4 < arguments.length && (s = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, s);
    }
    function b(a, c, d, e, g) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = M(Array.prototype.slice.call(arguments, 0), 0));
          return h.call(this, c);
        }
        function h(b) {
          return Ac.call(null, a, c, d, e, Dd.call(null, g, b));
        }
        b.s = 0;
        b.m = function(a) {
          a = G(a);
          return h(a);
        };
        b.l = h;
        return b;
      }();
    }
    a.s = 4;
    a.m = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var e = H(a);
      a = L(a);
      var g = H(a);
      a = I(a);
      return b(c, d, e, g, a);
    };
    a.l = b;
    return a;
  }(), d = function(d, h, k, l, n) {
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
        return e.l(d, h, k, l, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.s = 4;
  d.m = e.m;
  d.f = function(a) {
    return a;
  };
  d.p = c;
  d.B = b;
  d.U = a;
  d.l = e.l;
  return d;
}();
function Ld(a, b, c, d) {
  this.state = a;
  this.meta = b;
  this.Vb = c;
  this.Cb = d;
  this.i = 6455296;
  this.A = 16386;
}
f = Ld.prototype;
f.D = function() {
  return this[ba] || (this[ba] = ++ca);
};
f.Ab = function(a, b, c) {
  a = G.call(null, this.Cb);
  for (var d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = y.call(null, d, g), k = Q.call(null, h, 0, null), h = Q.call(null, h, 1, null);
      h.call(null, k, this, b, c);
      g += 1;
    } else {
      if (a = G.call(null, a)) {
        Ic.call(null, a) ? (d = xd.call(null, a), a = yd.call(null, a), k = d, e = P.call(null, d), d = k) : (d = H.call(null, a), k = Q.call(null, d, 0, null), h = Q.call(null, d, 1, null), h.call(null, k, this, b, c), a = L.call(null, a), d = null, e = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
f.J = function() {
  return this.meta;
};
f.bb = function() {
  return this.state;
};
f.C = function(a, b) {
  return this === b;
};
var Nd = function() {
  function a(a) {
    return new Ld(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = Nc.call(null, c) ? Ac.call(null, Md, c) : c, e = S.call(null, d, new q(null, "validator", "validator", -1966190681)), d = S.call(null, d, new q(null, "meta", "meta", 1499536964));
      return new Ld(a, d, e, null);
    }
    a.s = 1;
    a.m = function(a) {
      var c = H(a);
      a = I(a);
      return b(c, a);
    };
    a.l = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.l(b, M(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 1;
  b.m = c.m;
  b.f = a;
  b.l = c.l;
  return b;
}();
function Od(a, b) {
  if (a instanceof Ld) {
    var c = a.Vb;
    if (null != c && !t(c.call(null, b))) {
      throw Error("Assert failed: Validator rejected reference state\n" + w.f(Pd.call(null, hd(new Xb(null, "validate", "validate", 1439230700, null), new Xb(null, "new-value", "new-value", -1567397401, null)))));
    }
    c = a.state;
    a.state = b;
    null != a.Cb && lb.call(null, a, c, b);
    return b;
  }
  return zb.call(null, a, b);
}
var Qd = function() {
  function a(a, b, c, d) {
    return a instanceof Ld ? Od.call(null, a, b.call(null, a.state, c, d)) : Ab.call(null, a, b, c, d);
  }
  function b(a, b, c) {
    return a instanceof Ld ? Od.call(null, a, b.call(null, a.state, c)) : Ab.call(null, a, b, c);
  }
  function c(a, b) {
    return a instanceof Ld ? Od.call(null, a, b.call(null, a.state)) : Ab.call(null, a, b);
  }
  var d = null, e = function() {
    function a(c, d, e, g, r) {
      var s = null;
      4 < arguments.length && (s = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, s);
    }
    function b(a, c, d, e, g) {
      return a instanceof Ld ? Od.call(null, a, Ac.call(null, c, a.state, d, e, g)) : Ab.call(null, a, c, d, e, g);
    }
    a.s = 4;
    a.m = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var e = H(a);
      a = L(a);
      var g = H(a);
      a = I(a);
      return b(c, d, e, g, a);
    };
    a.l = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.l(d, h, k, l, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.s = 4;
  d.m = e.m;
  d.p = c;
  d.B = b;
  d.U = a;
  d.l = e.l;
  return d;
}(), Rd = function() {
  function a(a, b, c, d) {
    return new U(null, function() {
      var g = G.call(null, b), r = G.call(null, c), s = G.call(null, d);
      return g && r && s ? O.call(null, a.call(null, H.call(null, g), H.call(null, r), H.call(null, s)), e.call(null, a, I.call(null, g), I.call(null, r), I.call(null, s))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new U(null, function() {
      var d = G.call(null, b), g = G.call(null, c);
      return d && g ? O.call(null, a.call(null, H.call(null, d), H.call(null, g)), e.call(null, a, I.call(null, d), I.call(null, g))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new U(null, function() {
      var c = G.call(null, b);
      if (c) {
        if (Ic.call(null, c)) {
          for (var d = xd.call(null, c), g = P.call(null, d), r = rd.call(null, g), s = 0;;) {
            if (s < g) {
              vd.call(null, r, a.call(null, y.call(null, d, s))), s += 1;
            } else {
              break;
            }
          }
          return ud.call(null, wd.call(null, r), e.call(null, a, yd.call(null, c)));
        }
        return O.call(null, a.call(null, H.call(null, c)), e.call(null, a, I.call(null, c)));
      }
      return null;
    }, null, null);
  }
  function d(a) {
    return function(b) {
      return function() {
        function c(d, e) {
          return b.call(null, d, a.call(null, e));
        }
        function d(a) {
          return b.call(null, a);
        }
        function e() {
          return b.call(null);
        }
        var g = null, s = function() {
          function c(a, b, e) {
            var g = null;
            2 < arguments.length && (g = M(Array.prototype.slice.call(arguments, 2), 0));
            return d.call(this, a, b, g);
          }
          function d(c, e, g) {
            return b.call(null, c, Ac.call(null, a, e, g));
          }
          c.s = 2;
          c.m = function(a) {
            var b = H(a);
            a = L(a);
            var c = H(a);
            a = I(a);
            return d(b, c, a);
          };
          c.l = d;
          return c;
        }(), g = function(a, b, g) {
          switch(arguments.length) {
            case 0:
              return e.call(this);
            case 1:
              return d.call(this, a);
            case 2:
              return c.call(this, a, b);
            default:
              return s.l(a, b, M(arguments, 2));
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        g.s = 2;
        g.m = s.m;
        g.ia = e;
        g.f = d;
        g.p = c;
        g.l = s.l;
        return g;
      }();
    };
  }
  var e = null, g = function() {
    function a(c, d, e, g, h) {
      var x = null;
      4 < arguments.length && (x = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, x);
    }
    function b(a, c, d, g, h) {
      var k = function F(a) {
        return new U(null, function() {
          var b = e.call(null, G, a);
          return Jd.call(null, Sc, b) ? O.call(null, e.call(null, H, b), F.call(null, e.call(null, I, b))) : null;
        }, null, null);
      };
      return e.call(null, function() {
        return function(b) {
          return Ac.call(null, a, b);
        };
      }(k), k.call(null, pc.call(null, h, g, d, c)));
    }
    a.s = 4;
    a.m = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var e = H(a);
      a = L(a);
      var g = H(a);
      a = I(a);
      return b(c, d, e, g, a);
    };
    a.l = b;
    return a;
  }(), e = function(e, k, l, n, p) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, k);
      case 3:
        return b.call(this, e, k, l);
      case 4:
        return a.call(this, e, k, l, n);
      default:
        return g.l(e, k, l, n, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.s = 4;
  e.m = g.m;
  e.f = d;
  e.p = c;
  e.B = b;
  e.U = a;
  e.l = g.l;
  return e;
}(), Sd = function() {
  function a(a, b) {
    return new U(null, function() {
      if (0 < a) {
        var g = G.call(null, b);
        return g ? O.call(null, H.call(null, g), c.call(null, a - 1, I.call(null, g))) : null;
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, h) {
            var k = ec.call(null, a), l = Qd.call(null, a, Uc), k = 0 < k ? b.call(null, d, h) : d;
            return 0 < l ? k : cc.call(null, k);
          }
          function d(a) {
            return b.call(null, a);
          }
          function l() {
            return b.call(null);
          }
          var n = null, n = function(a, b) {
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
          n.ia = l;
          n.f = d;
          n.p = c;
          return n;
        }();
      }(Nd.call(null, a));
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
  c.p = a;
  return c;
}(), Ud = function() {
  function a(a, b) {
    return new U(null, function(c) {
      return function() {
        return c.call(null, a, b);
      };
    }(function(a, b) {
      for (;;) {
        var c = G.call(null, b);
        if (0 < a && c) {
          var d = a - 1, c = I.call(null, c);
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
            var k = ec.call(null, a);
            Qd.call(null, a, Uc);
            return 0 < k ? d : b.call(null, d, h);
          }
          function d(a) {
            return b.call(null, a);
          }
          function l() {
            return b.call(null);
          }
          var n = null, n = function(a, b) {
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
          n.ia = l;
          n.f = d;
          n.p = c;
          return n;
        }();
      }(Nd.call(null, a));
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
  c.p = a;
  return c;
}(), Vd = function() {
  function a(a, b) {
    return Sd.call(null, a, c.call(null, b));
  }
  function b(a) {
    return new U(null, function() {
      return O.call(null, a, c.call(null, a));
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
  c.p = a;
  return c;
}(), Wd = function() {
  function a(a, b) {
    return Sd.call(null, a, c.call(null, b));
  }
  function b(a) {
    return new U(null, function() {
      return O.call(null, a.call(null), c.call(null, a));
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
  c.p = a;
  return c;
}(), Xd = function() {
  function a(a, c) {
    return new U(null, function() {
      var g = G.call(null, a), h = G.call(null, c);
      return g && h ? O.call(null, H.call(null, g), O.call(null, H.call(null, h), b.call(null, I.call(null, g), I.call(null, h)))) : null;
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
        var c = Rd.call(null, G, pc.call(null, e, d, a));
        return Jd.call(null, Sc, c) ? Dd.call(null, Rd.call(null, H, c), Ac.call(null, b, Rd.call(null, I, c))) : null;
      }, null, null);
    }
    a.s = 2;
    a.m = function(a) {
      var b = H(a);
      a = L(a);
      var d = H(a);
      a = I(a);
      return c(b, d, a);
    };
    a.l = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.l(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 2;
  b.m = c.m;
  b.p = a;
  b.l = c.l;
  return b;
}();
function Yd(a, b) {
  return Ud.call(null, 1, Xd.call(null, Vd.call(null, a), b));
}
var Zd = function() {
  function a(a, b) {
    return new U(null, function() {
      var g = G.call(null, b);
      if (g) {
        if (Ic.call(null, g)) {
          for (var h = xd.call(null, g), k = P.call(null, h), l = rd.call(null, k), n = 0;;) {
            if (n < k) {
              t(a.call(null, y.call(null, h, n))) && vd.call(null, l, y.call(null, h, n)), n += 1;
            } else {
              break;
            }
          }
          return ud.call(null, wd.call(null, l), c.call(null, a, yd.call(null, g)));
        }
        h = H.call(null, g);
        g = I.call(null, g);
        return t(a.call(null, h)) ? O.call(null, h, c.call(null, a, g)) : c.call(null, a, g);
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function() {
        function c(g, h) {
          return t(a.call(null, h)) ? b.call(null, g, h) : g;
        }
        function h(a) {
          return b.call(null, a);
        }
        function k() {
          return b.call(null);
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
        l.ia = k;
        l.f = h;
        l.p = c;
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
  c.p = a;
  return c;
}(), $d = function() {
  function a(a, b, c) {
    return a && (a.A & 4 || a.Fb) ? Bc.call(null, uc.call(null, Tc.call(null, b, Fd, sc.call(null, a), c)), Cc.call(null, a)) : Tc.call(null, b, pc, a, c);
  }
  function b(a, b) {
    return null != a ? a && (a.A & 4 || a.Fb) ? Bc.call(null, uc.call(null, Rc.call(null, nb, sc.call(null, a), b)), Cc.call(null, a)) : Rc.call(null, Aa, a, b) : Rc.call(null, pc, K, b);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.B = a;
  return c;
}(), ae = function() {
  function a(a, b, c) {
    var h = Mc;
    for (b = G.call(null, b);;) {
      if (b) {
        var k = a;
        if (k ? k.i & 256 || k.ub || (k.i ? 0 : u.call(null, Ha, k)) : u.call(null, Ha, k)) {
          a = S.call(null, a, H.call(null, b), h);
          if (h === a) {
            return c;
          }
          b = L.call(null, b);
        } else {
          return c;
        }
      } else {
        return a;
      }
    }
  }
  function b(a, b) {
    return c.call(null, a, b, null);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.B = a;
  return c;
}(), ce = function be(b, c, d) {
  var e = Q.call(null, c, 0, null);
  return(c = ad.call(null, c, 1)) ? vc.call(null, b, e, be.call(null, S.call(null, b, e), c, d)) : vc.call(null, b, e, d);
};
function de(a, b) {
  this.I = a;
  this.e = b;
}
function ee(a) {
  return new de(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function fe(a, b) {
  return a.e[b];
}
function ge(a, b, c) {
  return a.e[b] = c;
}
function he(a) {
  return new de(a.I, ta.call(null, a.e));
}
function ie(a) {
  a = a.j;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function je(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = ee.call(null, a);
    ge.call(null, d, 0, c);
    c = d;
    b -= 5;
  }
}
var le = function ke(b, c, d, e) {
  var g = he.call(null, d), h = b.j - 1 >>> c & 31;
  5 === c ? ge.call(null, g, h, e) : (d = fe.call(null, d, h), b = null != d ? ke.call(null, b, c - 5, d, e) : je.call(null, null, c - 5, e), ge.call(null, g, h, b));
  return g;
};
function me(a, b) {
  throw Error("No item " + w.f(a) + " in vector of length " + w.f(b));
}
function ne(a) {
  var b = a.root;
  for (a = a.shift;;) {
    if (0 < a) {
      a -= 5, b = fe.call(null, b, 0);
    } else {
      return b.e;
    }
  }
}
function oe(a, b) {
  if (b >= ie.call(null, a)) {
    return a.Y;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = fe.call(null, c, b >>> d & 31), d = e
    } else {
      return c.e;
    }
  }
}
function pe(a, b) {
  return 0 <= b && b < a.j ? oe.call(null, a, b) : me.call(null, b, a.j);
}
var re = function qe(b, c, d, e, g) {
  var h = he.call(null, d);
  if (0 === c) {
    ge.call(null, h, e & 31, g);
  } else {
    var k = e >>> c & 31;
    ge.call(null, h, k, qe.call(null, b, c - 5, fe.call(null, d, k), e, g));
  }
  return h;
};
function se(a, b, c, d, e, g) {
  this.q = a;
  this.Wa = b;
  this.e = c;
  this.v = d;
  this.start = e;
  this.end = g;
}
se.prototype.rb = function() {
  return this.q < this.end;
};
se.prototype.next = function() {
  32 === this.q - this.Wa && (this.e = oe.call(null, this.v, this.q), this.Wa += 32);
  var a = this.e[this.q & 31];
  this.q += 1;
  return a;
};
function te(a, b, c) {
  return new se(b, b - b % 32, b < P.call(null, a) ? oe.call(null, a, b) : null, a, b, c);
}
function V(a, b, c, d, e, g) {
  this.meta = a;
  this.j = b;
  this.shift = c;
  this.root = d;
  this.Y = e;
  this.n = g;
  this.i = 167668511;
  this.A = 8196;
}
f = V.prototype;
f.toString = function() {
  return Db.call(null, this);
};
f.F = function(a, b) {
  return D.call(null, this, b, null);
};
f.G = function(a, b, c) {
  return "number" === typeof b ? y.call(null, this, b, c) : c;
};
f.ea = function(a, b) {
  return pe.call(null, this, b)[b & 31];
};
f.fa = function(a, b, c) {
  return 0 <= b && b < this.j ? oe.call(null, this, b)[b & 31] : c;
};
f.qb = function(a, b, c) {
  if (0 <= b && b < this.j) {
    return ie.call(null, this) <= b ? (a = ta.call(null, this.Y), a[b & 31] = c, new V(this.meta, this.j, this.shift, this.root, a, null)) : new V(this.meta, this.j, this.shift, re.call(null, this, this.shift, this.root, b, c), this.Y, null);
  }
  if (b === this.j) {
    return Aa.call(null, this, c);
  }
  throw Error("Index " + w.f(b) + " out of bounds  [0," + w.f(this.j) + "]");
};
f.Sa = function() {
  return te.call(null, this, 0, this.j);
};
f.J = function() {
  return this.meta;
};
f.O = function() {
  return this.j;
};
f.vb = function() {
  return y.call(null, this, 0);
};
f.wb = function() {
  return y.call(null, this, 1);
};
f.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b.call(null, this);
};
f.C = function(a, b) {
  if (b instanceof V) {
    if (this.j === P.call(null, b)) {
      for (var c = Bb.call(null, this), d = Bb.call(null, b);;) {
        if (t(c.rb())) {
          var e = c.next(), g = d.next();
          if (!Ub.call(null, e, g)) {
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
    return kc.call(null, this, b);
  }
};
f.Ia = function() {
  return new ue(this.j, this.shift, ve.call(null, this.root), we.call(null, this.Y));
};
f.R = function() {
  return Bc.call(null, oc, this.meta);
};
f.V = function(a, b) {
  return fc.call(null, this, b);
};
f.W = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.j) {
      var e = oe.call(null, this, a);
      c = e.length;
      a: {
        for (var g = 0;;) {
          if (g < c) {
            d = b.call(null, d, e[g]);
            if (dc.call(null, d)) {
              e = d;
              break a;
            }
            g += 1;
          } else {
            e = d;
            break a;
          }
        }
        e = void 0;
      }
      if (dc.call(null, e)) {
        return ec.call(null, e);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
f.da = function(a, b, c) {
  if ("number" === typeof b) {
    return Ta.call(null, this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
f.N = function() {
  return 0 === this.j ? null : 32 >= this.j ? new Yb(this.Y, 0) : xe.call(null, this, ne.call(null, this), 0, 0);
};
f.L = function(a, b) {
  return new V(b, this.j, this.shift, this.root, this.Y, this.n);
};
f.M = function(a, b) {
  if (32 > this.j - ie.call(null, this)) {
    for (var c = this.Y.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.Y[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new V(this.meta, this.j + 1, this.shift, this.root, d, null);
  }
  c = (d = this.j >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = ee.call(null, null), ge.call(null, d, 0, this.root), ge.call(null, d, 1, je.call(null, null, this.shift, new de(null, this.Y)))) : d = le.call(null, this, this.shift, this.root, new de(null, this.Y));
  return new V(this.meta, this.j + 1, c, d, [b], null);
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.ea(null, c);
      case 3:
        return this.fa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = function(a, c) {
    return this.ea(null, c);
  };
  a.B = function(a, c, d) {
    return this.fa(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta.call(null, b)));
};
f.f = function(a) {
  return this.ea(null, a);
};
f.p = function(a, b) {
  return this.fa(null, a, b);
};
var W = new de(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), oc = new V(null, 0, 5, W, [], 0);
function ye(a) {
  return ob.call(null, Rc.call(null, nb, mb.call(null, oc), a));
}
function ze(a, b, c, d, e, g) {
  this.ca = a;
  this.ra = b;
  this.q = c;
  this.off = d;
  this.meta = e;
  this.n = g;
  this.i = 32375020;
  this.A = 1536;
}
f = ze.prototype;
f.toString = function() {
  return Db.call(null, this);
};
f.J = function() {
  return this.meta;
};
f.ja = function() {
  if (this.off + 1 < this.ra.length) {
    var a = xe.call(null, this.ca, this.ra, this.q, this.off + 1);
    return null == a ? null : a;
  }
  return vb.call(null, this);
};
f.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b.call(null, this);
};
f.C = function(a, b) {
  return kc.call(null, this, b);
};
f.R = function() {
  return Bc.call(null, oc, this.meta);
};
f.V = function(a, b) {
  return fc.call(null, Ae.call(null, this.ca, this.q + this.off, P.call(null, this.ca)), b);
};
f.W = function(a, b, c) {
  return fc.call(null, Ae.call(null, this.ca, this.q + this.off, P.call(null, this.ca)), b, c);
};
f.$ = function() {
  return this.ra[this.off];
};
f.aa = function() {
  if (this.off + 1 < this.ra.length) {
    var a = xe.call(null, this.ca, this.ra, this.q, this.off + 1);
    return null == a ? K : a;
  }
  return ub.call(null, this);
};
f.N = function() {
  return this;
};
f.$a = function() {
  return sd.call(null, this.ra, this.off);
};
f.ab = function() {
  var a = this.q + this.ra.length;
  return a < ya.call(null, this.ca) ? xe.call(null, this.ca, oe.call(null, this.ca, a), a, 0) : K;
};
f.L = function(a, b) {
  return xe.call(null, this.ca, this.ra, this.q, this.off, b);
};
f.M = function(a, b) {
  return O.call(null, b, this);
};
f.Za = function() {
  var a = this.q + this.ra.length;
  return a < ya.call(null, this.ca) ? xe.call(null, this.ca, oe.call(null, this.ca, a), a, 0) : null;
};
var xe = function() {
  function a(a, b, c, d, l) {
    return new ze(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new ze(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new ze(a, pe.call(null, a, b), b, c, null, null);
  }
  var d = null, d = function(d, g, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, g, h);
      case 4:
        return b.call(this, d, g, h, k);
      case 5:
        return a.call(this, d, g, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.B = c;
  d.U = b;
  d.za = a;
  return d;
}();
function Be(a, b, c, d, e) {
  this.meta = a;
  this.v = b;
  this.start = c;
  this.end = d;
  this.n = e;
  this.i = 166617887;
  this.A = 8192;
}
f = Be.prototype;
f.toString = function() {
  return Db.call(null, this);
};
f.F = function(a, b) {
  return D.call(null, this, b, null);
};
f.G = function(a, b, c) {
  return "number" === typeof b ? y.call(null, this, b, c) : c;
};
f.ea = function(a, b) {
  return 0 > b || this.end <= this.start + b ? me.call(null, b, this.end - this.start) : y.call(null, this.v, this.start + b);
};
f.fa = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : y.call(null, this.v, this.start + b, c);
};
f.qb = function(a, b, c) {
  var d = this, e = d.start + b;
  return De.call(null, d.meta, vc.call(null, d.v, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
f.J = function() {
  return this.meta;
};
f.O = function() {
  return this.end - this.start;
};
f.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b.call(null, this);
};
f.C = function(a, b) {
  return kc.call(null, this, b);
};
f.R = function() {
  return Bc.call(null, oc, this.meta);
};
f.V = function(a, b) {
  return fc.call(null, this, b);
};
f.W = function(a, b, c) {
  return fc.call(null, this, b, c);
};
f.da = function(a, b, c) {
  if ("number" === typeof b) {
    return Ta.call(null, this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
f.N = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : O.call(null, y.call(null, a.v, e), new U(null, function() {
        return function() {
          return d.call(null, e + 1);
        };
      }(b), null, null));
    };
  }(this).call(null, a.start);
};
f.L = function(a, b) {
  return De.call(null, b, this.v, this.start, this.end, this.n);
};
f.M = function(a, b) {
  return De.call(null, this.meta, Ta.call(null, this.v, this.end, b), this.start, this.end + 1, null);
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.ea(null, c);
      case 3:
        return this.fa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = function(a, c) {
    return this.ea(null, c);
  };
  a.B = function(a, c, d) {
    return this.fa(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta.call(null, b)));
};
f.f = function(a) {
  return this.ea(null, a);
};
f.p = function(a, b) {
  return this.fa(null, a, b);
};
function De(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Be) {
      c = b.start + c, d = b.start + d, b = b.v;
    } else {
      var g = P.call(null, b);
      if (0 > c || 0 > d || c > g || d > g) {
        throw Error("Index out of bounds");
      }
      return new Be(a, b, c, d, e);
    }
  }
}
var Ae = function() {
  function a(a, b, c) {
    return De.call(null, null, a, b, c, null);
  }
  function b(a, b) {
    return c.call(null, a, b, P.call(null, a));
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.B = a;
  return c;
}();
function Ee(a, b) {
  return a === b.I ? b : new de(a, ta.call(null, b.e));
}
function ve(a) {
  return new de({}, ta.call(null, a.e));
}
function we(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Kc.call(null, a, 0, b, 0, a.length);
  return b;
}
var Ge = function Fe(b, c, d, e) {
  var g = Ee.call(null, b.root.I, d), h = b.j - 1 >>> c & 31;
  ge.call(null, g, h, 5 === c ? e : function() {
    var d = fe.call(null, g, h);
    return null != d ? Fe.call(null, b, c - 5, d, e) : je.call(null, b.root.I, c - 5, e);
  }());
  return g;
};
function ue(a, b, c, d) {
  this.j = a;
  this.shift = b;
  this.root = c;
  this.Y = d;
  this.i = 275;
  this.A = 88;
}
f = ue.prototype;
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.F(null, c);
      case 3:
        return this.G(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = function(a, c) {
    return this.F(null, c);
  };
  a.B = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta.call(null, b)));
};
f.f = function(a) {
  return this.F(null, a);
};
f.p = function(a, b) {
  return this.G(null, a, b);
};
f.F = function(a, b) {
  return D.call(null, this, b, null);
};
f.G = function(a, b, c) {
  return "number" === typeof b ? y.call(null, this, b, c) : c;
};
f.ea = function(a, b) {
  if (this.root.I) {
    return pe.call(null, this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
f.fa = function(a, b, c) {
  return 0 <= b && b < this.j ? y.call(null, this, b) : c;
};
f.O = function() {
  if (this.root.I) {
    return this.j;
  }
  throw Error("count after persistent!");
};
f.zb = function(a, b, c) {
  var d = this;
  if (d.root.I) {
    if (0 <= b && b < d.j) {
      return ie.call(null, this) <= b ? d.Y[b & 31] = c : (a = function() {
        return function g(a, k) {
          var l = Ee.call(null, d.root.I, k);
          if (0 === a) {
            ge.call(null, l, b & 31, c);
          } else {
            var n = b >>> a & 31;
            ge.call(null, l, n, g.call(null, a - 5, fe.call(null, l, n)));
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.j) {
      return nb.call(null, this, c);
    }
    throw Error("Index " + w.f(b) + " out of bounds for TransientVector of length" + w.f(d.j));
  }
  throw Error("assoc! after persistent!");
};
f.Ua = function(a, b, c) {
  if ("number" === typeof b) {
    return qb.call(null, this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
f.La = function(a, b) {
  if (this.root.I) {
    if (32 > this.j - ie.call(null, this)) {
      this.Y[this.j & 31] = b;
    } else {
      var c = new de(this.root.I, this.Y), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.Y = d;
      if (this.j >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = je.call(null, this.root.I, this.shift, c);
        this.root = new de(this.root.I, d);
        this.shift = e;
      } else {
        this.root = Ge.call(null, this, this.shift, this.root, c);
      }
    }
    this.j += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
f.Ma = function() {
  if (this.root.I) {
    this.root.I = null;
    var a = this.j - ie.call(null, this), b = Array(a);
    Kc.call(null, this.Y, 0, b, 0, a);
    return new V(null, this.j, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function He() {
  this.A = 0;
  this.i = 2097152;
}
He.prototype.C = function() {
  return!1;
};
var Ie = new He;
function Je(a, b) {
  return Oc.call(null, Gc.call(null, b) ? P.call(null, a) === P.call(null, b) ? Jd.call(null, Sc, Rd.call(null, function(a) {
    return Ub.call(null, S.call(null, b, H.call(null, a), Ie), mc.call(null, a));
  }, a)) : null : null);
}
function Ke(a) {
  for (var b = a.length, c = 0;;) {
    if (b <= c) {
      return-1;
    }
    if (null == a[c]) {
      return c;
    }
    c += 2;
  }
}
function Le(a, b, c) {
  b = a.length;
  c = c.Z;
  for (var d = 0;;) {
    if (b <= d) {
      return-1;
    }
    var e = a[d];
    if (e instanceof q && c === e.Z) {
      return d;
    }
    d += 2;
  }
}
function Me(a, b, c) {
  b = a.length;
  c = c.ya;
  for (var d = 0;;) {
    if (b <= d) {
      return-1;
    }
    var e = a[d];
    if (e instanceof Xb && c === e.ya) {
      return d;
    }
    d += 2;
  }
}
function Ne(a, b, c) {
  b = a.length;
  for (var d = 0;;) {
    if (b <= d) {
      return-1;
    }
    if (c === a[d]) {
      return d;
    }
    d += 2;
  }
}
function Oe(a, b, c) {
  b = a.length;
  for (var d = 0;;) {
    if (b <= d) {
      return-1;
    }
    if (Ub.call(null, c, a[d])) {
      return d;
    }
    d += 2;
  }
}
function Pe(a, b) {
  var c = a.e;
  return b instanceof q ? Le.call(null, c, 0, b) : "string" == typeof b || "number" === typeof b ? Ne.call(null, c, 0, b) : b instanceof Xb ? Me.call(null, c, 0, b) : null == b ? Ke.call(null, c) : Oe.call(null, c, 0, b);
}
function Qe(a, b, c) {
  a = a.e;
  for (var d = a.length, e = Array(d + 2), g = 0;;) {
    if (g < d) {
      e[g] = a[g], g += 1;
    } else {
      break;
    }
  }
  e[d] = b;
  e[d + 1] = c;
  return e;
}
function Re(a, b, c) {
  this.e = a;
  this.q = b;
  this.T = c;
  this.A = 0;
  this.i = 32374990;
}
f = Re.prototype;
f.toString = function() {
  return Db.call(null, this);
};
f.J = function() {
  return this.T;
};
f.ja = function() {
  return this.q < this.e.length - 2 ? new Re(this.e, this.q + 2, this.T) : null;
};
f.O = function() {
  return(this.e.length - this.q) / 2;
};
f.D = function() {
  return $b.call(null, this);
};
f.C = function(a, b) {
  return kc.call(null, this, b);
};
f.R = function() {
  return Bc.call(null, K, this.T);
};
f.V = function(a, b) {
  return T.call(null, b, this);
};
f.W = function(a, b, c) {
  return T.call(null, b, c, this);
};
f.$ = function() {
  return new V(null, 2, 5, W, [this.e[this.q], this.e[this.q + 1]], null);
};
f.aa = function() {
  return this.q < this.e.length - 2 ? new Re(this.e, this.q + 2, this.T) : K;
};
f.N = function() {
  return this;
};
f.L = function(a, b) {
  return new Re(this.e, this.q, b);
};
f.M = function(a, b) {
  return O.call(null, b, this);
};
function Se(a, b, c) {
  return b <= a.length - 2 ? new Re(a, b, c) : null;
}
function Te(a, b, c) {
  this.e = a;
  this.q = b;
  this.j = c;
}
Te.prototype.rb = function() {
  return this.q < this.j;
};
Te.prototype.next = function() {
  var a = new V(null, 2, 5, W, [this.e[this.q], this.e[this.q + 1]], null);
  this.q += 2;
  return a;
};
function ma(a, b, c, d) {
  this.meta = a;
  this.j = b;
  this.e = c;
  this.n = d;
  this.i = 16647951;
  this.A = 8196;
}
f = ma.prototype;
f.toString = function() {
  return Db.call(null, this);
};
f.F = function(a, b) {
  return D.call(null, this, b, null);
};
f.G = function(a, b, c) {
  a = Pe.call(null, this, b);
  return-1 === a ? c : this.e[a + 1];
};
f.Sa = function() {
  return new Te(this.e, 0, 2 * this.j);
};
f.J = function() {
  return this.meta;
};
f.O = function() {
  return this.j;
};
f.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = ac.call(null, this);
};
f.C = function(a, b) {
  if (b && (b.i & 1024 || b.Hb)) {
    var c = this.e.length;
    if (this.j === ya.call(null, b)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = D.call(null, b, this.e[d], Mc);
          if (e !== Mc) {
            if (Ub.call(null, this.e[d + 1], e)) {
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
    return Je.call(null, this, b);
  }
};
f.Ia = function() {
  return new Ue({}, this.e.length, ta.call(null, this.e));
};
f.R = function() {
  return Za.call(null, Ve, this.meta);
};
f.V = function(a, b) {
  return T.call(null, b, this);
};
f.W = function(a, b, c) {
  return T.call(null, b, c, this);
};
f.ma = function(a, b) {
  if (0 <= Pe.call(null, this, b)) {
    var c = this.e.length, d = c - 2;
    if (0 === d) {
      return za.call(null, this);
    }
    for (var d = Array(d), e = 0, g = 0;;) {
      if (e >= c) {
        return new ma(this.meta, this.j - 1, d, null);
      }
      Ub.call(null, b, this.e[e]) || (d[g] = this.e[e], d[g + 1] = this.e[e + 1], g += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
f.da = function(a, b, c) {
  a = Pe.call(null, this, b);
  if (-1 === a) {
    return this.j < We ? (c = Qe.call(null, this, b, c), new ma(this.meta, this.j + 1, c, null)) : Za.call(null, Ja.call(null, $d.call(null, tc, this), b, c), this.meta);
  }
  if (c === this.e[a + 1]) {
    return this;
  }
  b = ta.call(null, this.e);
  b[a + 1] = c;
  return new ma(this.meta, this.j, b, null);
};
f.Ya = function(a, b) {
  return-1 !== Pe.call(null, this, b);
};
f.N = function() {
  return Se.call(null, this.e, 0, null);
};
f.L = function(a, b) {
  return new ma(b, this.j, this.e, this.n);
};
f.M = function(a, b) {
  if (Hc.call(null, b)) {
    return Ja.call(null, this, y.call(null, b, 0), y.call(null, b, 1));
  }
  for (var c = this, d = G.call(null, b);;) {
    if (null == d) {
      return c;
    }
    var e = H.call(null, d);
    if (Hc.call(null, e)) {
      c = Ja.call(null, c, y.call(null, e, 0), y.call(null, e, 1)), d = L.call(null, d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.F(null, c);
      case 3:
        return this.G(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = function(a, c) {
    return this.F(null, c);
  };
  a.B = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta.call(null, b)));
};
f.f = function(a) {
  return this.F(null, a);
};
f.p = function(a, b) {
  return this.G(null, a, b);
};
var Ve = new ma(null, 0, [], null), We = 8;
function Ue(a, b, c) {
  this.Ca = a;
  this.Fa = b;
  this.e = c;
  this.A = 56;
  this.i = 258;
}
f = Ue.prototype;
f.Ua = function(a, b, c) {
  if (t(this.Ca)) {
    a = Pe.call(null, this, b);
    if (-1 === a) {
      return this.Fa + 2 <= 2 * We ? (this.Fa += 2, this.e.push(b), this.e.push(c), this) : Gd.call(null, Xe.call(null, this.Fa, this.e), b, c);
    }
    c !== this.e[a + 1] && (this.e[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
f.La = function(a, b) {
  if (t(this.Ca)) {
    if (b ? b.i & 2048 || b.Ib || (b.i ? 0 : u.call(null, Na, b)) : u.call(null, Na, b)) {
      return pb.call(null, this, cd.call(null, b), dd.call(null, b));
    }
    for (var c = G.call(null, b), d = this;;) {
      var e = H.call(null, c);
      if (t(e)) {
        c = L.call(null, c), d = pb.call(null, d, cd.call(null, e), dd.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
f.Ma = function() {
  if (t(this.Ca)) {
    return this.Ca = !1, new ma(null, Xc.call(null, this.Fa, 2), this.e, null);
  }
  throw Error("persistent! called twice");
};
f.F = function(a, b) {
  return D.call(null, this, b, null);
};
f.G = function(a, b, c) {
  if (t(this.Ca)) {
    return a = Pe.call(null, this, b), -1 === a ? c : this.e[a + 1];
  }
  throw Error("lookup after persistent!");
};
f.O = function() {
  if (t(this.Ca)) {
    return Xc.call(null, this.Fa, 2);
  }
  throw Error("count after persistent!");
};
function Xe(a, b) {
  for (var c = sc.call(null, tc), d = 0;;) {
    if (d < a) {
      c = Gd.call(null, c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Ye() {
  this.ha = !1;
}
function Ze(a, b) {
  return a === b ? !0 : kd.call(null, a, b) ? !0 : Ub.call(null, a, b);
}
var $e = function() {
  function a(a, b, c, h, k) {
    a = ta.call(null, a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = ta.call(null, a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, g, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, g);
      case 5:
        return a.call(this, c, e, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.B = b;
  c.za = a;
  return c;
}();
function af(a, b) {
  var c = Array(a.length - 2);
  Kc.call(null, a, 0, c, 0, 2 * b);
  Kc.call(null, a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function bf(a, b) {
  return $c.call(null, a & b - 1);
}
var cf = function() {
  function a(a, b, c, h, k, l) {
    a = a.Da(b);
    a.e[c] = h;
    a.e[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.Da(b);
    a.e[c] = h;
    return a;
  }
  var c = null, c = function(c, e, g, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, g, h);
      case 6:
        return a.call(this, c, e, g, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.U = b;
  c.Ja = a;
  return c;
}();
function df(a, b, c) {
  this.I = a;
  this.K = b;
  this.e = c;
}
f = df.prototype;
f.Da = function(a) {
  if (a === this.I) {
    return this;
  }
  var b = $c.call(null, this.K), c = Array(0 > b ? 4 : 2 * (b + 1));
  Kc.call(null, this.e, 0, c, 0, 2 * b);
  return new df(a, this.K, c);
};
f.Na = function() {
  return ef.call(null, this.e);
};
f.wa = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.K & e)) {
    return d;
  }
  var g = bf.call(null, this.K, e), e = this.e[2 * g], g = this.e[2 * g + 1];
  return null == e ? g.wa(a + 5, b, c, d) : Ze.call(null, c, e) ? g : d;
};
f.la = function(a, b, c, d, e, g) {
  var h = 1 << (c >>> b & 31), k = bf.call(null, this.K, h);
  if (0 === (this.K & h)) {
    var l = $c.call(null, this.K);
    if (2 * l < this.e.length) {
      return a = this.Da(a), b = a.e, g.ha = !0, Lc.call(null, b, 2 * k, b, 2 * (k + 1), 2 * (l - k)), b[2 * k] = d, b[2 * k + 1] = e, a.K |= h, a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = ff.la(a, b + 5, c, d, e, g);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.K >>> d & 1) && (k[d] = null != this.e[e] ? ff.la(a, b + 5, Qb.call(null, this.e[e]), this.e[e], this.e[e + 1], g) : this.e[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new gf(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    Kc.call(null, this.e, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    Kc.call(null, this.e, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    g.ha = !0;
    a = this.Da(a);
    a.e = b;
    a.K |= h;
    return a;
  }
  l = this.e[2 * k];
  h = this.e[2 * k + 1];
  if (null == l) {
    return l = h.la(a, b + 5, c, d, e, g), l === h ? this : cf.call(null, this, a, 2 * k + 1, l);
  }
  if (Ze.call(null, d, l)) {
    return e === h ? this : cf.call(null, this, a, 2 * k + 1, e);
  }
  g.ha = !0;
  return cf.call(null, this, a, 2 * k, null, 2 * k + 1, hf.call(null, a, b + 5, l, h, c, d, e));
};
f.ka = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), h = bf.call(null, this.K, g);
  if (0 === (this.K & g)) {
    var k = $c.call(null, this.K);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = ff.ka(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.K >>> c & 1) && (h[c] = null != this.e[d] ? ff.ka(a + 5, Qb.call(null, this.e[d]), this.e[d], this.e[d + 1], e) : this.e[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new gf(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    Kc.call(null, this.e, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    Kc.call(null, this.e, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.ha = !0;
    return new df(null, this.K | g, a);
  }
  k = this.e[2 * h];
  g = this.e[2 * h + 1];
  if (null == k) {
    return k = g.ka(a + 5, b, c, d, e), k === g ? this : new df(null, this.K, $e.call(null, this.e, 2 * h + 1, k));
  }
  if (Ze.call(null, c, k)) {
    return d === g ? this : new df(null, this.K, $e.call(null, this.e, 2 * h + 1, d));
  }
  e.ha = !0;
  return new df(null, this.K, $e.call(null, this.e, 2 * h, null, 2 * h + 1, hf.call(null, a + 5, k, g, b, c, d)));
};
f.Oa = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.K & d)) {
    return this;
  }
  var e = bf.call(null, this.K, d), g = this.e[2 * e], h = this.e[2 * e + 1];
  return null == g ? (a = h.Oa(a + 5, b, c), a === h ? this : null != a ? new df(null, this.K, $e.call(null, this.e, 2 * e + 1, a)) : this.K === d ? null : new df(null, this.K ^ d, af.call(null, this.e, e))) : Ze.call(null, c, g) ? new df(null, this.K ^ d, af.call(null, this.e, e)) : this;
};
var ff = new df(null, 0, []);
function jf(a, b, c) {
  var d = a.e, e = d.length;
  a = Array(2 * (a.j - 1));
  for (var g = 0, h = 1, k = 0;;) {
    if (g < e) {
      g !== c && null != d[g] && (a[h] = d[g], h += 2, k |= 1 << g), g += 1;
    } else {
      return new df(b, k, a);
    }
  }
}
function gf(a, b, c) {
  this.I = a;
  this.j = b;
  this.e = c;
}
f = gf.prototype;
f.Da = function(a) {
  return a === this.I ? this : new gf(a, this.j, ta.call(null, this.e));
};
f.Na = function() {
  return kf.call(null, this.e);
};
f.wa = function(a, b, c, d) {
  var e = this.e[b >>> a & 31];
  return null != e ? e.wa(a + 5, b, c, d) : d;
};
f.la = function(a, b, c, d, e, g) {
  var h = c >>> b & 31, k = this.e[h];
  if (null == k) {
    return a = cf.call(null, this, a, h, ff.la(a, b + 5, c, d, e, g)), a.j += 1, a;
  }
  b = k.la(a, b + 5, c, d, e, g);
  return b === k ? this : cf.call(null, this, a, h, b);
};
f.ka = function(a, b, c, d, e) {
  var g = b >>> a & 31, h = this.e[g];
  if (null == h) {
    return new gf(null, this.j + 1, $e.call(null, this.e, g, ff.ka(a + 5, b, c, d, e)));
  }
  a = h.ka(a + 5, b, c, d, e);
  return a === h ? this : new gf(null, this.j, $e.call(null, this.e, g, a));
};
f.Oa = function(a, b, c) {
  var d = b >>> a & 31, e = this.e[d];
  return null != e ? (a = e.Oa(a + 5, b, c), a === e ? this : null == a ? 8 >= this.j ? jf.call(null, this, null, d) : new gf(null, this.j - 1, $e.call(null, this.e, d, a)) : new gf(null, this.j, $e.call(null, this.e, d, a))) : this;
};
function lf(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Ze.call(null, c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function mf(a, b, c, d) {
  this.I = a;
  this.qa = b;
  this.j = c;
  this.e = d;
}
f = mf.prototype;
f.Da = function(a) {
  if (a === this.I) {
    return this;
  }
  var b = Array(2 * (this.j + 1));
  Kc.call(null, this.e, 0, b, 0, 2 * this.j);
  return new mf(a, this.qa, this.j, b);
};
f.Na = function() {
  return ef.call(null, this.e);
};
f.wa = function(a, b, c, d) {
  a = lf.call(null, this.e, this.j, c);
  return 0 > a ? d : Ze.call(null, c, this.e[a]) ? this.e[a + 1] : d;
};
f.la = function(a, b, c, d, e, g) {
  if (c === this.qa) {
    b = lf.call(null, this.e, this.j, d);
    if (-1 === b) {
      if (this.e.length > 2 * this.j) {
        return a = cf.call(null, this, a, 2 * this.j, d, 2 * this.j + 1, e), g.ha = !0, a.j += 1, a;
      }
      c = this.e.length;
      b = Array(c + 2);
      Kc.call(null, this.e, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.ha = !0;
      g = this.j + 1;
      a === this.I ? (this.e = b, this.j = g, a = this) : a = new mf(this.I, this.qa, g, b);
      return a;
    }
    return this.e[b + 1] === e ? this : cf.call(null, this, a, b + 1, e);
  }
  return(new df(a, 1 << (this.qa >>> b & 31), [null, this, null, null])).la(a, b, c, d, e, g);
};
f.ka = function(a, b, c, d, e) {
  return b === this.qa ? (a = lf.call(null, this.e, this.j, c), -1 === a ? (a = 2 * this.j, b = Array(a + 2), Kc.call(null, this.e, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ha = !0, new mf(null, this.qa, this.j + 1, b)) : Ub.call(null, this.e[a], d) ? this : new mf(null, this.qa, this.j, $e.call(null, this.e, a + 1, d))) : (new df(null, 1 << (this.qa >>> a & 31), [null, this])).ka(a, b, c, d, e);
};
f.Oa = function(a, b, c) {
  a = lf.call(null, this.e, this.j, c);
  return-1 === a ? this : 1 === this.j ? null : new mf(null, this.qa, this.j - 1, af.call(null, this.e, Xc.call(null, a, 2)));
};
var hf = function() {
  function a(a, b, c, h, k, l, n) {
    var p = Qb.call(null, c);
    if (p === k) {
      return new mf(null, p, 2, [c, h, l, n]);
    }
    var r = new Ye;
    return ff.la(a, b, p, c, h, r).la(a, b, k, l, n, r);
  }
  function b(a, b, c, h, k, l) {
    var n = Qb.call(null, b);
    if (n === h) {
      return new mf(null, n, 2, [b, c, k, l]);
    }
    var p = new Ye;
    return ff.ka(a, n, b, c, p).ka(a, h, k, l, p);
  }
  var c = null, c = function(c, e, g, h, k, l, n) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, g, h, k, l);
      case 7:
        return a.call(this, c, e, g, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.Ja = b;
  c.Ra = a;
  return c;
}();
function nf(a, b, c, d, e) {
  this.meta = a;
  this.xa = b;
  this.q = c;
  this.P = d;
  this.n = e;
  this.A = 0;
  this.i = 32374860;
}
f = nf.prototype;
f.toString = function() {
  return Db.call(null, this);
};
f.J = function() {
  return this.meta;
};
f.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b.call(null, this);
};
f.C = function(a, b) {
  return kc.call(null, this, b);
};
f.R = function() {
  return Bc.call(null, K, this.meta);
};
f.V = function(a, b) {
  return T.call(null, b, this);
};
f.W = function(a, b, c) {
  return T.call(null, b, c, this);
};
f.$ = function() {
  return null == this.P ? new V(null, 2, 5, W, [this.xa[this.q], this.xa[this.q + 1]], null) : H.call(null, this.P);
};
f.aa = function() {
  return null == this.P ? ef.call(null, this.xa, this.q + 2, null) : ef.call(null, this.xa, this.q, L.call(null, this.P));
};
f.N = function() {
  return this;
};
f.L = function(a, b) {
  return new nf(b, this.xa, this.q, this.P, this.n);
};
f.M = function(a, b) {
  return O.call(null, b, this);
};
var ef = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new nf(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (t(h) && (h = h.Na(), t(h))) {
            return new nf(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new nf(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.call(null, a, 0, null);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.f = b;
  c.B = a;
  return c;
}();
function of(a, b, c, d, e) {
  this.meta = a;
  this.xa = b;
  this.q = c;
  this.P = d;
  this.n = e;
  this.A = 0;
  this.i = 32374860;
}
f = of.prototype;
f.toString = function() {
  return Db.call(null, this);
};
f.J = function() {
  return this.meta;
};
f.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b.call(null, this);
};
f.C = function(a, b) {
  return kc.call(null, this, b);
};
f.R = function() {
  return Bc.call(null, K, this.meta);
};
f.V = function(a, b) {
  return T.call(null, b, this);
};
f.W = function(a, b, c) {
  return T.call(null, b, c, this);
};
f.$ = function() {
  return H.call(null, this.P);
};
f.aa = function() {
  return kf.call(null, null, this.xa, this.q, L.call(null, this.P));
};
f.N = function() {
  return this;
};
f.L = function(a, b) {
  return new of(b, this.xa, this.q, this.P, this.n);
};
f.M = function(a, b) {
  return O.call(null, b, this);
};
var kf = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (t(k) && (k = k.Na(), t(k))) {
            return new of(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new of(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.call(null, null, a, 0, null);
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.f = b;
  c.U = a;
  return c;
}();
function pf(a, b, c, d, e, g) {
  this.meta = a;
  this.j = b;
  this.root = c;
  this.X = d;
  this.ba = e;
  this.n = g;
  this.i = 16123663;
  this.A = 8196;
}
f = pf.prototype;
f.toString = function() {
  return Db.call(null, this);
};
f.F = function(a, b) {
  return D.call(null, this, b, null);
};
f.G = function(a, b, c) {
  return null == b ? this.X ? this.ba : c : null == this.root ? c : this.root.wa(0, Qb.call(null, b), b, c);
};
f.J = function() {
  return this.meta;
};
f.O = function() {
  return this.j;
};
f.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = ac.call(null, this);
};
f.C = function(a, b) {
  return Je.call(null, this, b);
};
f.Ia = function() {
  return new qf({}, this.root, this.j, this.X, this.ba);
};
f.R = function() {
  return Za.call(null, tc, this.meta);
};
f.ma = function(a, b) {
  if (null == b) {
    return this.X ? new pf(this.meta, this.j - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.Oa(0, Qb.call(null, b), b);
  return c === this.root ? this : new pf(this.meta, this.j - 1, c, this.X, this.ba, null);
};
f.da = function(a, b, c) {
  if (null == b) {
    return this.X && c === this.ba ? this : new pf(this.meta, this.X ? this.j : this.j + 1, this.root, !0, c, null);
  }
  a = new Ye;
  b = (null == this.root ? ff : this.root).ka(0, Qb.call(null, b), b, c, a);
  return b === this.root ? this : new pf(this.meta, a.ha ? this.j + 1 : this.j, b, this.X, this.ba, null);
};
f.Ya = function(a, b) {
  return null == b ? this.X : null == this.root ? !1 : this.root.wa(0, Qb.call(null, b), b, Mc) !== Mc;
};
f.N = function() {
  if (0 < this.j) {
    var a = null != this.root ? this.root.Na() : null;
    return this.X ? O.call(null, new V(null, 2, 5, W, [null, this.ba], null), a) : a;
  }
  return null;
};
f.L = function(a, b) {
  return new pf(b, this.j, this.root, this.X, this.ba, this.n);
};
f.M = function(a, b) {
  if (Hc.call(null, b)) {
    return Ja.call(null, this, y.call(null, b, 0), y.call(null, b, 1));
  }
  for (var c = this, d = G.call(null, b);;) {
    if (null == d) {
      return c;
    }
    var e = H.call(null, d);
    if (Hc.call(null, e)) {
      c = Ja.call(null, c, y.call(null, e, 0), y.call(null, e, 1)), d = L.call(null, d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.F(null, c);
      case 3:
        return this.G(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = function(a, c) {
    return this.F(null, c);
  };
  a.B = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta.call(null, b)));
};
f.f = function(a) {
  return this.F(null, a);
};
f.p = function(a, b) {
  return this.G(null, a, b);
};
var tc = new pf(null, 0, null, !1, null, 0);
function qf(a, b, c, d, e) {
  this.I = a;
  this.root = b;
  this.count = c;
  this.X = d;
  this.ba = e;
  this.A = 56;
  this.i = 258;
}
f = qf.prototype;
f.Ua = function(a, b, c) {
  return rf(this, b, c);
};
f.La = function(a, b) {
  var c;
  a: {
    if (this.I) {
      if (b ? b.i & 2048 || b.Ib || (b.i ? 0 : u.call(null, Na, b)) : u.call(null, Na, b)) {
        c = rf(this, cd.call(null, b), dd.call(null, b));
        break a;
      }
      c = G.call(null, b);
      for (var d = this;;) {
        var e = H.call(null, c);
        if (t(e)) {
          c = L.call(null, c), d = rf(d, cd.call(null, e), dd.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
f.Ma = function() {
  var a;
  if (this.I) {
    this.I = null, a = new pf(null, this.count, this.root, this.X, this.ba, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
f.F = function(a, b) {
  return null == b ? this.X ? this.ba : null : null == this.root ? null : this.root.wa(0, Qb.call(null, b), b);
};
f.G = function(a, b, c) {
  return null == b ? this.X ? this.ba : c : null == this.root ? c : this.root.wa(0, Qb.call(null, b), b, c);
};
f.O = function() {
  if (this.I) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function rf(a, b, c) {
  if (a.I) {
    if (null == b) {
      a.ba !== c && (a.ba = c), a.X || (a.count += 1, a.X = !0);
    } else {
      var d = new Ye;
      b = (null == a.root ? ff : a.root).la(a.I, 0, Qb.call(null, b), b, c, d);
      b !== a.root && (a.root = b);
      d.ha && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var Md = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = G.call(null, a);
    for (var b = sc.call(null, tc);;) {
      if (a) {
        var e = nc.call(null, a), b = Gd.call(null, b, H.call(null, a), mc.call(null, a));
        a = e;
      } else {
        return uc.call(null, b);
      }
    }
  }
  a.s = 0;
  a.m = function(a) {
    a = G(a);
    return b(a);
  };
  a.l = b;
  return a;
}();
function sf(a, b) {
  this.S = a;
  this.T = b;
  this.A = 0;
  this.i = 32374988;
}
f = sf.prototype;
f.toString = function() {
  return Db.call(null, this);
};
f.J = function() {
  return this.T;
};
f.ja = function() {
  var a = this.S, a = (a ? a.i & 128 || a.Ta || (a.i ? 0 : u.call(null, Ea, a)) : u.call(null, Ea, a)) ? Ga.call(null, this.S) : L.call(null, this.S);
  return null == a ? null : new sf(a, this.T);
};
f.D = function() {
  return $b.call(null, this);
};
f.C = function(a, b) {
  return kc.call(null, this, b);
};
f.R = function() {
  return Bc.call(null, K, this.T);
};
f.V = function(a, b) {
  return T.call(null, b, this);
};
f.W = function(a, b, c) {
  return T.call(null, b, c, this);
};
f.$ = function() {
  var a = z.call(null, this.S);
  return Oa.call(null, a);
};
f.aa = function() {
  var a = this.S, a = (a ? a.i & 128 || a.Ta || (a.i ? 0 : u.call(null, Ea, a)) : u.call(null, Ea, a)) ? Ga.call(null, this.S) : L.call(null, this.S);
  return null != a ? new sf(a, this.T) : K;
};
f.N = function() {
  return this;
};
f.L = function(a, b) {
  return new sf(this.S, b);
};
f.M = function(a, b) {
  return O.call(null, b, this);
};
function tf(a) {
  return(a = G.call(null, a)) ? new sf(a, null) : null;
}
function cd(a) {
  return Oa.call(null, a);
}
function uf(a, b) {
  this.S = a;
  this.T = b;
  this.A = 0;
  this.i = 32374988;
}
f = uf.prototype;
f.toString = function() {
  return Db.call(null, this);
};
f.J = function() {
  return this.T;
};
f.ja = function() {
  var a = this.S, a = (a ? a.i & 128 || a.Ta || (a.i ? 0 : u.call(null, Ea, a)) : u.call(null, Ea, a)) ? Ga.call(null, this.S) : L.call(null, this.S);
  return null == a ? null : new uf(a, this.T);
};
f.D = function() {
  return $b.call(null, this);
};
f.C = function(a, b) {
  return kc.call(null, this, b);
};
f.R = function() {
  return Bc.call(null, K, this.T);
};
f.V = function(a, b) {
  return T.call(null, b, this);
};
f.W = function(a, b, c) {
  return T.call(null, b, c, this);
};
f.$ = function() {
  var a = z.call(null, this.S);
  return Qa.call(null, a);
};
f.aa = function() {
  var a = this.S, a = (a ? a.i & 128 || a.Ta || (a.i ? 0 : u.call(null, Ea, a)) : u.call(null, Ea, a)) ? Ga.call(null, this.S) : L.call(null, this.S);
  return null != a ? new uf(a, this.T) : K;
};
f.N = function() {
  return this;
};
f.L = function(a, b) {
  return new uf(this.S, b);
};
f.M = function(a, b) {
  return O.call(null, b, this);
};
function vf(a) {
  return(a = G.call(null, a)) ? new uf(a, null) : null;
}
function dd(a) {
  return Qa.call(null, a);
}
function wf(a, b, c) {
  this.meta = a;
  this.Ea = b;
  this.n = c;
  this.i = 15077647;
  this.A = 8196;
}
f = wf.prototype;
f.toString = function() {
  return Db.call(null, this);
};
f.F = function(a, b) {
  return D.call(null, this, b, null);
};
f.G = function(a, b, c) {
  return Ia.call(null, this.Ea, b) ? b : c;
};
f.J = function() {
  return this.meta;
};
f.O = function() {
  return ya.call(null, this.Ea);
};
f.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = ac.call(null, this);
};
f.C = function(a, b) {
  return Ec.call(null, b) && P.call(null, this) === P.call(null, b) && Jd.call(null, function(a) {
    return function(b) {
      return Pc.call(null, a, b);
    };
  }(this), b);
};
f.Ia = function() {
  return new xf(mb.call(null, this.Ea));
};
f.R = function() {
  return Bc.call(null, yf, this.meta);
};
f.N = function() {
  return tf.call(null, this.Ea);
};
f.L = function(a, b) {
  return new wf(b, this.Ea, this.n);
};
f.M = function(a, b) {
  return new wf(this.meta, vc.call(null, this.Ea, b, null), null);
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.F(null, c);
      case 3:
        return this.G(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = function(a, c) {
    return this.F(null, c);
  };
  a.B = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta.call(null, b)));
};
f.f = function(a) {
  return this.F(null, a);
};
f.p = function(a, b) {
  return this.G(null, a, b);
};
var yf = new wf(null, Ve, 0);
function xf(a) {
  this.va = a;
  this.i = 259;
  this.A = 136;
}
f = xf.prototype;
f.call = function() {
  function a(a, b, c) {
    return D.call(null, this.va, b, Mc) === Mc ? c : b;
  }
  function b(a, b) {
    return D.call(null, this.va, b, Mc) === Mc ? null : b;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.B = a;
  return c;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta.call(null, b)));
};
f.f = function(a) {
  return D.call(null, this.va, a, Mc) === Mc ? null : a;
};
f.p = function(a, b) {
  return D.call(null, this.va, a, Mc) === Mc ? b : a;
};
f.F = function(a, b) {
  return D.call(null, this, b, null);
};
f.G = function(a, b, c) {
  return D.call(null, this.va, b, Mc) === Mc ? c : b;
};
f.O = function() {
  return P.call(null, this.va);
};
f.La = function(a, b) {
  this.va = Gd.call(null, this.va, b, null);
  return this;
};
f.Ma = function() {
  return new wf(null, uc.call(null, this.va), null);
};
function md(a) {
  if (a && (a.A & 4096 || a.Kb)) {
    return wb.call(null, a);
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error("Doesn't support name: " + w.f(a));
}
var zf = function() {
  function a(a, b, c) {
    return a.call(null, b) < a.call(null, c) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var n = null;
      3 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, n);
    }
    function c(a, d, e, l) {
      return Rc.call(null, function(c, d) {
        return b.call(null, a, c, d);
      }, b.call(null, a, d, e), l);
    }
    a.s = 3;
    a.m = function(a) {
      var b = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var l = H(a);
      a = I(a);
      return c(b, d, l, a);
    };
    a.l = c;
    return a;
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.l(b, e, g, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 3;
  b.m = c.m;
  b.p = function(a, b) {
    return b;
  };
  b.B = a;
  b.l = c.l;
  return b;
}();
function Af(a) {
  return a instanceof RegExp;
}
function Bf(a, b) {
  if ("string" === typeof b) {
    var c = a.exec(b);
    return null == c ? null : 1 === P.call(null, c) ? H.call(null, c) : ye.call(null, c);
  }
  throw new TypeError("re-find must match against a string.");
}
function X(a, b, c, d, e, g, h) {
  var k = ka;
  try {
    ka = null == ka ? null : ka - 1;
    if (null != ka && 0 > ka) {
      return E.call(null, a, "#");
    }
    E.call(null, a, c);
    G.call(null, h) && b.call(null, H.call(null, h), a, g);
    for (var l = L.call(null, h), n = (new q(null, "print-length", "print-length", 1931866356)).f(g) - 1;;) {
      if (!l || null != n && 0 === n) {
        G.call(null, l) && 0 === n && (E.call(null, a, d), E.call(null, a, "..."));
        break;
      } else {
        E.call(null, a, d);
        b.call(null, H.call(null, l), a, g);
        var p = L.call(null, l);
        c = n - 1;
        l = p;
        n = c;
      }
    }
    return E.call(null, a, e);
  } finally {
    ka = k;
  }
}
var Cf = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = G.call(null, b), g = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = y.call(null, g, k);
        E.call(null, a, l);
        k += 1;
      } else {
        if (e = G.call(null, e)) {
          g = e, Ic.call(null, g) ? (e = xd.call(null, g), h = yd.call(null, g), g = e, l = P.call(null, e), e = h, h = l) : (l = H.call(null, g), E.call(null, a, l), e = L.call(null, g), g = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.s = 1;
  a.m = function(a) {
    var d = H(a);
    a = I(a);
    return b(d, a);
  };
  a.l = b;
  return a;
}(), Df = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Ef(a) {
  return'"' + w.f(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Df[a];
  })) + '"';
}
var Z = function Gf(b, c, d) {
  if (null == b) {
    return E.call(null, c, "nil");
  }
  if (void 0 === b) {
    return E.call(null, c, "#\x3cundefined\x3e");
  }
  t(function() {
    var c = S.call(null, d, new q(null, "meta", "meta", 1499536964));
    return t(c) ? (c = b ? b.i & 131072 || b.Jb ? !0 : b.i ? !1 : u.call(null, Va, b) : u.call(null, Va, b)) ? Cc.call(null, b) : c : c;
  }()) && (E.call(null, c, "^"), Gf.call(null, Cc.call(null, b), c, d), E.call(null, c, " "));
  if (null == b) {
    return E.call(null, c, "nil");
  }
  if (b.Tb) {
    return b.dc(b, c, d);
  }
  if (b && (b.i & 2147483648 || b.Q)) {
    return kb.call(null, b, c, d);
  }
  if (qa.call(null, b) === Boolean || "number" === typeof b) {
    return E.call(null, c, "" + w.f(b));
  }
  if (pa.call(null, b)) {
    return E.call(null, c, "#js "), Hf.call(null, Rd.call(null, function(c) {
      return new V(null, 2, 5, W, [nd.call(null, c), b[c]], null);
    }, Jc.call(null, b)), Gf, c, d);
  }
  if (b instanceof Array) {
    return X.call(null, c, Gf, "#js [", " ", "]", d, b);
  }
  if ("string" == typeof b) {
    return t((new q(null, "readably", "readably", 1129599760)).f(d)) ? E.call(null, c, Ef.call(null, b)) : E.call(null, c, b);
  }
  if (yc.call(null, b)) {
    return Cf.call(null, c, "#\x3c", "" + w.f(b), "\x3e");
  }
  if (b instanceof Date) {
    var e = function(b, c) {
      for (var d = "" + w.f(b);;) {
        if (P.call(null, d) < c) {
          d = "0" + w.f(d);
        } else {
          return d;
        }
      }
    };
    return Cf.call(null, c, '#inst "', "" + w.f(b.getUTCFullYear()), "-", e.call(null, b.getUTCMonth() + 1, 2), "-", e.call(null, b.getUTCDate(), 2), "T", e.call(null, b.getUTCHours(), 2), ":", e.call(null, b.getUTCMinutes(), 2), ":", e.call(null, b.getUTCSeconds(), 2), ".", e.call(null, b.getUTCMilliseconds(), 3), "-", '00:00"');
  }
  return Af.call(null, b) ? Cf.call(null, c, '#"', b.source, '"') : (b ? b.i & 2147483648 || b.Q || (b.i ? 0 : u.call(null, hb, b)) : u.call(null, hb, b)) ? kb.call(null, b, c, d) : Cf.call(null, c, "#\x3c", "" + w.f(b), "\x3e");
};
function If(a, b, c) {
  Z.call(null, H.call(null, a), b, c);
  a = G.call(null, L.call(null, a));
  for (var d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = y.call(null, d, g);
      E.call(null, b, " ");
      Z.call(null, h, b, c);
      g += 1;
    } else {
      if (a = G.call(null, a)) {
        d = a, Ic.call(null, d) ? (a = xd.call(null, d), e = yd.call(null, d), d = a, h = P.call(null, a), a = e, e = h) : (h = H.call(null, d), E.call(null, b, " "), Z.call(null, h, b, c), a = L.call(null, d), d = null, e = 0), g = 0;
      } else {
        return null;
      }
    }
  }
}
function Jf(a, b) {
  var c = new ja, d = new Cb(c);
  If.call(null, a, d, b);
  gb.call(null, d);
  return c;
}
function Kf(a, b) {
  return Dc.call(null, a) ? "" : "" + w.f(Jf.call(null, a, b));
}
var Pd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return Kf.call(null, a, la.call(null));
  }
  a.s = 0;
  a.m = function(a) {
    a = G(a);
    return b(a);
  };
  a.l = b;
  return a;
}();
function Hf(a, b, c, d) {
  return X.call(null, c, function(a, c, d) {
    b.call(null, cd.call(null, a), c, d);
    E.call(null, c, " ");
    return b.call(null, dd.call(null, a), c, d);
  }, "{", ", ", "}", d, G.call(null, a));
}
Yb.prototype.Q = !0;
Yb.prototype.H = function(a, b, c) {
  return X.call(null, b, Z, "(", " ", ")", c, this);
};
U.prototype.Q = !0;
U.prototype.H = function(a, b, c) {
  return X.call(null, b, Z, "(", " ", ")", c, this);
};
nf.prototype.Q = !0;
nf.prototype.H = function(a, b, c) {
  return X.call(null, b, Z, "(", " ", ")", c, this);
};
Re.prototype.Q = !0;
Re.prototype.H = function(a, b, c) {
  return X.call(null, b, Z, "(", " ", ")", c, this);
};
ze.prototype.Q = !0;
ze.prototype.H = function(a, b, c) {
  return X.call(null, b, Z, "(", " ", ")", c, this);
};
id.prototype.Q = !0;
id.prototype.H = function(a, b, c) {
  return X.call(null, b, Z, "(", " ", ")", c, this);
};
pf.prototype.Q = !0;
pf.prototype.H = function(a, b, c) {
  return Hf.call(null, this, Z, b, c);
};
of.prototype.Q = !0;
of.prototype.H = function(a, b, c) {
  return X.call(null, b, Z, "(", " ", ")", c, this);
};
Be.prototype.Q = !0;
Be.prototype.H = function(a, b, c) {
  return X.call(null, b, Z, "[", " ", "]", c, this);
};
wf.prototype.Q = !0;
wf.prototype.H = function(a, b, c) {
  return X.call(null, b, Z, "#{", " ", "}", c, this);
};
td.prototype.Q = !0;
td.prototype.H = function(a, b, c) {
  return X.call(null, b, Z, "(", " ", ")", c, this);
};
Ld.prototype.Q = !0;
Ld.prototype.H = function(a, b, c) {
  E.call(null, b, "#\x3cAtom: ");
  Z.call(null, this.state, b, c);
  return E.call(null, b, "\x3e");
};
uf.prototype.Q = !0;
uf.prototype.H = function(a, b, c) {
  return X.call(null, b, Z, "(", " ", ")", c, this);
};
V.prototype.Q = !0;
V.prototype.H = function(a, b, c) {
  return X.call(null, b, Z, "[", " ", "]", c, this);
};
gd.prototype.Q = !0;
gd.prototype.H = function(a, b) {
  return E.call(null, b, "()");
};
ma.prototype.Q = !0;
ma.prototype.H = function(a, b, c) {
  return Hf.call(null, this, Z, b, c);
};
sf.prototype.Q = !0;
sf.prototype.H = function(a, b, c) {
  return X.call(null, b, Z, "(", " ", ")", c, this);
};
fd.prototype.Q = !0;
fd.prototype.H = function(a, b, c) {
  return X.call(null, b, Z, "(", " ", ")", c, this);
};
V.prototype.Qa = !0;
V.prototype.Ha = function(a, b) {
  return Qc.call(null, this, b);
};
Be.prototype.Qa = !0;
Be.prototype.Ha = function(a, b) {
  return Qc.call(null, this, b);
};
q.prototype.Qa = !0;
q.prototype.Ha = function(a, b) {
  return Tb.call(null, this, b);
};
Xb.prototype.Qa = !0;
Xb.prototype.Ha = function(a, b) {
  return Tb.call(null, this, b);
};
Yc = function() {
  function a(a) {
    return Math.random.call(null) * a;
  }
  function b() {
    return c.call(null, 1);
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
  c.ia = b;
  c.f = a;
  return c;
}();
Zc = function(a) {
  return Math.floor.call(null, Math.random.call(null) * a);
};
function Lf(a) {
  this.Pa = a;
  this.A = 0;
  this.i = 2153775104;
}
Lf.prototype.D = function() {
  for (var a = Pd.call(null, this), b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
};
Lf.prototype.H = function(a, b) {
  return E.call(null, b, '#uuid "' + w.f(this.Pa) + '"');
};
Lf.prototype.C = function(a, b) {
  return b instanceof Lf && this.Pa === b.Pa;
};
Lf.prototype.toString = function() {
  return this.Pa;
};
function Mf(a, b, c, d, e) {
  this.name = a;
  this.x = b;
  this.y = c;
  this.o = d;
  this.k = e;
  this.i = 2229667594;
  this.A = 8192;
  3 < arguments.length ? (this.o = d, this.k = e) : this.k = this.o = null;
}
f = Mf.prototype;
f.F = function(a, b) {
  return D.call(null, this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof q ? b.Z : null) {
    case "y":
      return this.y;
    case "x":
      return this.x;
    case "name":
      return this.name;
    default:
      return S.call(null, this.k, b, c);
  }
};
f.H = function(a, b, c) {
  return X.call(null, b, function() {
    return function(a) {
      return X.call(null, b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Position{", ", ", "}", c, Dd.call(null, new V(null, 3, 5, W, [new V(null, 2, 5, W, [new q(null, "name", "name", 1843675177), this.name], null), new V(null, 2, 5, W, [new q(null, "x", "x", 2099068185), this.x], null), new V(null, 2, 5, W, [new q(null, "y", "y", -1757859776), this.y], null)], null), this.k));
};
f.J = function() {
  return this.o;
};
f.O = function() {
  return 3 + P.call(null, this.k);
};
f.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = bd.call(null, this);
};
f.C = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && Je.call(null, this, b) : b) ? !0 : !1;
};
f.ma = function(a, b) {
  return Pc.call(null, new wf(null, new ma(null, 3, [new q(null, "y", "y", -1757859776), null, new q(null, "name", "name", 1843675177), null, new q(null, "x", "x", 2099068185), null], null), null), b) ? wc.call(null, Bc.call(null, $d.call(null, Ve, this), this.o), b) : new Mf(this.name, this.x, this.y, this.o, Id.call(null, wc.call(null, this.k, b)), null);
};
f.da = function(a, b, c) {
  return t(kd.call(null, new q(null, "name", "name", 1843675177), b)) ? new Mf(c, this.x, this.y, this.o, this.k, null) : t(kd.call(null, new q(null, "x", "x", 2099068185), b)) ? new Mf(this.name, c, this.y, this.o, this.k, null) : t(kd.call(null, new q(null, "y", "y", -1757859776), b)) ? new Mf(this.name, this.x, c, this.o, this.k, null) : new Mf(this.name, this.x, this.y, this.o, vc.call(null, this.k, b, c), null);
};
f.N = function() {
  return G.call(null, Dd.call(null, new V(null, 3, 5, W, [new V(null, 2, 5, W, [new q(null, "name", "name", 1843675177), this.name], null), new V(null, 2, 5, W, [new q(null, "x", "x", 2099068185), this.x], null), new V(null, 2, 5, W, [new q(null, "y", "y", -1757859776), this.y], null)], null), this.k));
};
f.L = function(a, b) {
  return new Mf(this.name, this.x, this.y, b, this.k, this.n);
};
f.M = function(a, b) {
  return Hc.call(null, b) ? Ja.call(null, this, y.call(null, b, 0), y.call(null, b, 1)) : Rc.call(null, Aa, this, b);
};
function Nf(a, b) {
  return new Mf(new q(null, "position", "position", -2011731912), a, b);
}
function Of(a, b, c, d) {
  this.name = a;
  this.ta = b;
  this.o = c;
  this.k = d;
  this.i = 2229667594;
  this.A = 8192;
  2 < arguments.length ? (this.o = c, this.k = d) : this.k = this.o = null;
}
f = Of.prototype;
f.F = function(a, b) {
  return D.call(null, this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof q ? b.Z : null) {
    case "sprite":
      return this.ta;
    case "name":
      return this.name;
    default:
      return S.call(null, this.k, b, c);
  }
};
f.H = function(a, b, c) {
  return X.call(null, b, function() {
    return function(a) {
      return X.call(null, b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Renderable{", ", ", "}", c, Dd.call(null, new V(null, 2, 5, W, [new V(null, 2, 5, W, [new q(null, "name", "name", 1843675177), this.name], null), new V(null, 2, 5, W, [new q(null, "sprite", "sprite", 172516848), this.ta], null)], null), this.k));
};
f.J = function() {
  return this.o;
};
f.O = function() {
  return 2 + P.call(null, this.k);
};
f.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = bd.call(null, this);
};
f.C = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && Je.call(null, this, b) : b) ? !0 : !1;
};
f.ma = function(a, b) {
  return Pc.call(null, new wf(null, new ma(null, 2, [new q(null, "name", "name", 1843675177), null, new q(null, "sprite", "sprite", 172516848), null], null), null), b) ? wc.call(null, Bc.call(null, $d.call(null, Ve, this), this.o), b) : new Of(this.name, this.ta, this.o, Id.call(null, wc.call(null, this.k, b)), null);
};
f.da = function(a, b, c) {
  return t(kd.call(null, new q(null, "name", "name", 1843675177), b)) ? new Of(c, this.ta, this.o, this.k, null) : t(kd.call(null, new q(null, "sprite", "sprite", 172516848), b)) ? new Of(this.name, c, this.o, this.k, null) : new Of(this.name, this.ta, this.o, vc.call(null, this.k, b, c), null);
};
f.N = function() {
  return G.call(null, Dd.call(null, new V(null, 2, 5, W, [new V(null, 2, 5, W, [new q(null, "name", "name", 1843675177), this.name], null), new V(null, 2, 5, W, [new q(null, "sprite", "sprite", 172516848), this.ta], null)], null), this.k));
};
f.L = function(a, b) {
  return new Of(this.name, this.ta, b, this.k, this.n);
};
f.M = function(a, b) {
  return Hc.call(null, b) ? Ja.call(null, this, y.call(null, b, 0), y.call(null, b, 1)) : Rc.call(null, Aa, this, b);
};
function Pf(a) {
  return new Of(new q(null, "renderable", "renderable", -1247325782), a);
}
function Qf(a, b, c, d) {
  this.name = a;
  this.target = b;
  this.o = c;
  this.k = d;
  this.i = 2229667594;
  this.A = 8192;
  2 < arguments.length ? (this.o = c, this.k = d) : this.k = this.o = null;
}
f = Qf.prototype;
f.F = function(a, b) {
  return D.call(null, this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof q ? b.Z : null) {
    case "target":
      return this.target;
    case "name":
      return this.name;
    default:
      return S.call(null, this.k, b, c);
  }
};
f.H = function(a, b, c) {
  return X.call(null, b, function() {
    return function(a) {
      return X.call(null, b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Attacker{", ", ", "}", c, Dd.call(null, new V(null, 2, 5, W, [new V(null, 2, 5, W, [new q(null, "name", "name", 1843675177), this.name], null), new V(null, 2, 5, W, [new q(null, "target", "target", 253001721), this.target], null)], null), this.k));
};
f.J = function() {
  return this.o;
};
f.O = function() {
  return 2 + P.call(null, this.k);
};
f.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = bd.call(null, this);
};
f.C = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && Je.call(null, this, b) : b) ? !0 : !1;
};
f.ma = function(a, b) {
  return Pc.call(null, new wf(null, new ma(null, 2, [new q(null, "name", "name", 1843675177), null, new q(null, "target", "target", 253001721), null], null), null), b) ? wc.call(null, Bc.call(null, $d.call(null, Ve, this), this.o), b) : new Qf(this.name, this.target, this.o, Id.call(null, wc.call(null, this.k, b)), null);
};
f.da = function(a, b, c) {
  return t(kd.call(null, new q(null, "name", "name", 1843675177), b)) ? new Qf(c, this.target, this.o, this.k, null) : t(kd.call(null, new q(null, "target", "target", 253001721), b)) ? new Qf(this.name, c, this.o, this.k, null) : new Qf(this.name, this.target, this.o, vc.call(null, this.k, b, c), null);
};
f.N = function() {
  return G.call(null, Dd.call(null, new V(null, 2, 5, W, [new V(null, 2, 5, W, [new q(null, "name", "name", 1843675177), this.name], null), new V(null, 2, 5, W, [new q(null, "target", "target", 253001721), this.target], null)], null), this.k));
};
f.L = function(a, b) {
  return new Qf(this.name, this.target, b, this.k, this.n);
};
f.M = function(a, b) {
  return Hc.call(null, b) ? Ja.call(null, this, y.call(null, b, 0), y.call(null, b, 1)) : Rc.call(null, Aa, this, b);
};
function Rf(a) {
  return new Qf(new q(null, "attacker", "attacker", 48869964), a);
}
function Sf(a, b, c) {
  this.name = a;
  this.o = b;
  this.k = c;
  this.i = 2229667594;
  this.A = 8192;
  1 < arguments.length ? (this.o = b, this.k = c) : this.k = this.o = null;
}
f = Sf.prototype;
f.F = function(a, b) {
  return D.call(null, this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof q ? b.Z : null) {
    case "name":
      return this.name;
    default:
      return S.call(null, this.k, b, c);
  }
};
f.H = function(a, b, c) {
  return X.call(null, b, function() {
    return function(a) {
      return X.call(null, b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Attackable{", ", ", "}", c, Dd.call(null, new V(null, 1, 5, W, [new V(null, 2, 5, W, [new q(null, "name", "name", 1843675177), this.name], null)], null), this.k));
};
f.J = function() {
  return this.o;
};
f.O = function() {
  return 1 + P.call(null, this.k);
};
f.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = bd.call(null, this);
};
f.C = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && Je.call(null, this, b) : b) ? !0 : !1;
};
f.ma = function(a, b) {
  return Pc.call(null, new wf(null, new ma(null, 1, [new q(null, "name", "name", 1843675177), null], null), null), b) ? wc.call(null, Bc.call(null, $d.call(null, Ve, this), this.o), b) : new Sf(this.name, this.o, Id.call(null, wc.call(null, this.k, b)), null);
};
f.da = function(a, b, c) {
  return t(kd.call(null, new q(null, "name", "name", 1843675177), b)) ? new Sf(c, this.o, this.k, null) : new Sf(this.name, this.o, vc.call(null, this.k, b, c), null);
};
f.N = function() {
  return G.call(null, Dd.call(null, new V(null, 1, 5, W, [new V(null, 2, 5, W, [new q(null, "name", "name", 1843675177), this.name], null)], null), this.k));
};
f.L = function(a, b) {
  return new Sf(this.name, b, this.k, this.n);
};
f.M = function(a, b) {
  return Hc.call(null, b) ? Ja.call(null, this, y.call(null, b, 0), y.call(null, b, 1)) : Rc.call(null, Aa, this, b);
};
function Tf() {
  return new Sf(new q(null, "attackable", "attackable", 2099301245));
}
function Uf(a, b, c, d) {
  this.name = a;
  this.Aa = b;
  this.o = c;
  this.k = d;
  this.i = 2229667594;
  this.A = 8192;
  2 < arguments.length ? (this.o = c, this.k = d) : this.k = this.o = null;
}
f = Uf.prototype;
f.F = function(a, b) {
  return D.call(null, this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof q ? b.Z : null) {
    case "velocity":
      return this.Aa;
    case "name":
      return this.name;
    default:
      return S.call(null, this.k, b, c);
  }
};
f.H = function(a, b, c) {
  return X.call(null, b, function() {
    return function(a) {
      return X.call(null, b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Movement{", ", ", "}", c, Dd.call(null, new V(null, 2, 5, W, [new V(null, 2, 5, W, [new q(null, "name", "name", 1843675177), this.name], null), new V(null, 2, 5, W, [new q(null, "velocity", "velocity", -581524355), this.Aa], null)], null), this.k));
};
f.J = function() {
  return this.o;
};
f.O = function() {
  return 2 + P.call(null, this.k);
};
f.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = bd.call(null, this);
};
f.C = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && Je.call(null, this, b) : b) ? !0 : !1;
};
f.ma = function(a, b) {
  return Pc.call(null, new wf(null, new ma(null, 2, [new q(null, "name", "name", 1843675177), null, new q(null, "velocity", "velocity", -581524355), null], null), null), b) ? wc.call(null, Bc.call(null, $d.call(null, Ve, this), this.o), b) : new Uf(this.name, this.Aa, this.o, Id.call(null, wc.call(null, this.k, b)), null);
};
f.da = function(a, b, c) {
  return t(kd.call(null, new q(null, "name", "name", 1843675177), b)) ? new Uf(c, this.Aa, this.o, this.k, null) : t(kd.call(null, new q(null, "velocity", "velocity", -581524355), b)) ? new Uf(this.name, c, this.o, this.k, null) : new Uf(this.name, this.Aa, this.o, vc.call(null, this.k, b, c), null);
};
f.N = function() {
  return G.call(null, Dd.call(null, new V(null, 2, 5, W, [new V(null, 2, 5, W, [new q(null, "name", "name", 1843675177), this.name], null), new V(null, 2, 5, W, [new q(null, "velocity", "velocity", -581524355), this.Aa], null)], null), this.k));
};
f.L = function(a, b) {
  return new Uf(this.name, this.Aa, b, this.k, this.n);
};
f.M = function(a, b) {
  return Hc.call(null, b) ? Ja.call(null, this, y.call(null, b, 0), y.call(null, b, 1)) : Rc.call(null, Aa, this, b);
};
function Vf(a) {
  return new Uf(new q(null, "movement", "movement", 1777030977), a);
}
function Wf(a, b, c, d) {
  this.name = a;
  this.angle = b;
  this.o = c;
  this.k = d;
  this.i = 2229667594;
  this.A = 8192;
  2 < arguments.length ? (this.o = c, this.k = d) : this.k = this.o = null;
}
f = Wf.prototype;
f.F = function(a, b) {
  return D.call(null, this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof q ? b.Z : null) {
    case "angle":
      return this.angle;
    case "name":
      return this.name;
    default:
      return S.call(null, this.k, b, c);
  }
};
f.H = function(a, b, c) {
  return X.call(null, b, function() {
    return function(a) {
      return X.call(null, b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Facing{", ", ", "}", c, Dd.call(null, new V(null, 2, 5, W, [new V(null, 2, 5, W, [new q(null, "name", "name", 1843675177), this.name], null), new V(null, 2, 5, W, [new q(null, "angle", "angle", 1622094254), this.angle], null)], null), this.k));
};
f.J = function() {
  return this.o;
};
f.O = function() {
  return 2 + P.call(null, this.k);
};
f.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = bd.call(null, this);
};
f.C = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && Je.call(null, this, b) : b) ? !0 : !1;
};
f.ma = function(a, b) {
  return Pc.call(null, new wf(null, new ma(null, 2, [new q(null, "name", "name", 1843675177), null, new q(null, "angle", "angle", 1622094254), null], null), null), b) ? wc.call(null, Bc.call(null, $d.call(null, Ve, this), this.o), b) : new Wf(this.name, this.angle, this.o, Id.call(null, wc.call(null, this.k, b)), null);
};
f.da = function(a, b, c) {
  return t(kd.call(null, new q(null, "name", "name", 1843675177), b)) ? new Wf(c, this.angle, this.o, this.k, null) : t(kd.call(null, new q(null, "angle", "angle", 1622094254), b)) ? new Wf(this.name, c, this.o, this.k, null) : new Wf(this.name, this.angle, this.o, vc.call(null, this.k, b, c), null);
};
f.N = function() {
  return G.call(null, Dd.call(null, new V(null, 2, 5, W, [new V(null, 2, 5, W, [new q(null, "name", "name", 1843675177), this.name], null), new V(null, 2, 5, W, [new q(null, "angle", "angle", 1622094254), this.angle], null)], null), this.k));
};
f.L = function(a, b) {
  return new Wf(this.name, this.angle, b, this.k, this.n);
};
f.M = function(a, b) {
  return Hc.call(null, b) ? Ja.call(null, this, y.call(null, b, 0), y.call(null, b, 1)) : Rc.call(null, Aa, this, b);
};
function Xf(a) {
  return new Wf(new q(null, "facing", "facing", -854439413), a);
}
function Yf(a, b, c, d, e, g) {
  this.name = a;
  this.ua = b;
  this.oa = c;
  this.current = d;
  this.o = e;
  this.k = g;
  this.i = 2229667594;
  this.A = 8192;
  4 < arguments.length ? (this.o = e, this.k = g) : this.k = this.o = null;
}
f = Yf.prototype;
f.F = function(a, b) {
  return D.call(null, this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof q ? b.Z : null) {
    case "current":
      return this.current;
    case "animation-seq":
      return this.oa;
    case "sprite-list":
      return this.ua;
    case "name":
      return this.name;
    default:
      return S.call(null, this.k, b, c);
  }
};
f.H = function(a, b, c) {
  return X.call(null, b, function() {
    return function(a) {
      return X.call(null, b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Animation{", ", ", "}", c, Dd.call(null, new V(null, 4, 5, W, [new V(null, 2, 5, W, [new q(null, "name", "name", 1843675177), this.name], null), new V(null, 2, 5, W, [new q(null, "sprite-list", "sprite-list", -1086684897), this.ua], null), new V(null, 2, 5, W, [new q(null, "animation-seq", "animation-seq", 1939833135), this.oa], null), new V(null, 2, 5, W, [new q(null, "current", "current", -1088038603), this.current], null)], null), this.k));
};
f.J = function() {
  return this.o;
};
f.O = function() {
  return 4 + P.call(null, this.k);
};
f.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = bd.call(null, this);
};
f.C = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && Je.call(null, this, b) : b) ? !0 : !1;
};
f.ma = function(a, b) {
  return Pc.call(null, new wf(null, new ma(null, 4, [new q(null, "name", "name", 1843675177), null, new q(null, "animation-seq", "animation-seq", 1939833135), null, new q(null, "current", "current", -1088038603), null, new q(null, "sprite-list", "sprite-list", -1086684897), null], null), null), b) ? wc.call(null, Bc.call(null, $d.call(null, Ve, this), this.o), b) : new Yf(this.name, this.ua, this.oa, this.current, this.o, Id.call(null, wc.call(null, this.k, b)), null);
};
f.da = function(a, b, c) {
  return t(kd.call(null, new q(null, "name", "name", 1843675177), b)) ? new Yf(c, this.ua, this.oa, this.current, this.o, this.k, null) : t(kd.call(null, new q(null, "sprite-list", "sprite-list", -1086684897), b)) ? new Yf(this.name, c, this.oa, this.current, this.o, this.k, null) : t(kd.call(null, new q(null, "animation-seq", "animation-seq", 1939833135), b)) ? new Yf(this.name, this.ua, c, this.current, this.o, this.k, null) : t(kd.call(null, new q(null, "current", "current", -1088038603), b)) ? 
  new Yf(this.name, this.ua, this.oa, c, this.o, this.k, null) : new Yf(this.name, this.ua, this.oa, this.current, this.o, vc.call(null, this.k, b, c), null);
};
f.N = function() {
  return G.call(null, Dd.call(null, new V(null, 4, 5, W, [new V(null, 2, 5, W, [new q(null, "name", "name", 1843675177), this.name], null), new V(null, 2, 5, W, [new q(null, "sprite-list", "sprite-list", -1086684897), this.ua], null), new V(null, 2, 5, W, [new q(null, "animation-seq", "animation-seq", 1939833135), this.oa], null), new V(null, 2, 5, W, [new q(null, "current", "current", -1088038603), this.current], null)], null), this.k));
};
f.L = function(a, b) {
  return new Yf(this.name, this.ua, this.oa, this.current, b, this.k, this.n);
};
f.M = function(a, b) {
  return Hc.call(null, b) ? Ja.call(null, this, y.call(null, b, 0), y.call(null, b, 1)) : Rc.call(null, Aa, this, b);
};
function Zf(a, b, c) {
  return new Yf(new q(null, "animation", "animation", -1248293244), a, b, c);
}
;function $f(a, b) {
  return Pc.call(null, a, b);
}
function ag(a, b) {
  return S.call(null, a, b);
}
function bg(a, b) {
  return vc.call(null, a, (new q(null, "name", "name", 1843675177)).f(b), b);
}
function cg(a, b) {
  return Rc.call(null, function(a, b) {
    return vc.call(null, a, (new q(null, "name", "name", 1843675177)).f(b), b);
  }, a, b);
}
function dg() {
  return eg.call(null, fg.call(null));
}
var gg = function() {
  function a(a) {
    return new ma(null, 2, [new q(null, "name", "name", 1843675177), new q(null, "identifier", "identifier", -805503498), new q(null, "id", "id", -1388402092), a], null);
  }
  function b() {
    return c.call(null, dg.call(null));
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
  c.ia = b;
  c.f = a;
  return c;
}(), hg = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = Rc.call(null, function(a, b) {
      return vc.call(null, a, (new q(null, "name", "name", 1843675177)).f(b), b);
    }, Ve, a);
    return Pc.call(null, a, new q(null, "identifier", "identifier", -805503498)) ? a : bg.call(null, a, gg.call(null));
  }
  a.s = 0;
  a.m = function(a) {
    a = G(a);
    return b(a);
  };
  a.l = b;
  return a;
}();
function ig(a) {
  return vf.call(null, (new q(null, "entities", "entities", 1940967403)).f(a));
}
function jg(a, b) {
  var c = (new q(null, "id", "id", -1388402092)).f(ag.call(null, b, new q(null, "identifier", "identifier", -805503498)));
  return ce.call(null, a, new V(null, 2, 5, W, [new q(null, "entities", "entities", 1940967403), c], null), b);
}
function kg(a) {
  return(new q(null, "id", "id", -1388402092)).f(ag.call(null, a, new q(null, "identifier", "identifier", -805503498)));
}
function lg(a, b) {
  var c = function() {
    var b = (new q(null, "entities", "entities", 1940967403)).f(a);
    return t(b) ? b : Ve;
  }();
  return vc.call(null, a, new q(null, "entities", "entities", 1940967403), Rc.call(null, function() {
    return function(a, b) {
      return vc.call(null, a, kg.call(null, b), b);
    };
  }(c), c, b));
}
function mg(a) {
  a = ag.call(null, a, new q(null, "position", "position", -2011731912));
  return t(a) ? new V(null, 2, 5, W, [a.x, a.y], null) : null;
}
function ng(a) {
  return ae.call(null, a, new V(null, 2, 5, W, [new q(null, "attacker", "attacker", 48869964), new q(null, "target", "target", 253001721)], null));
}
function og(a) {
  return ae.call(null, a, new V(null, 2, 5, W, [new q(null, "movement", "movement", 1777030977), new q(null, "velocity", "velocity", -581524355)], null));
}
function pg(a) {
  return ae.call(null, a, new V(null, 2, 5, W, [new q(null, "facing", "facing", -854439413), new q(null, "angle", "angle", 1622094254)], null));
}
function qg(a) {
  return ae.call(null, a, new V(null, 2, 5, W, [new q(null, "animation", "animation", -1248293244), new q(null, "sprite-list", "sprite-list", -1086684897)], null));
}
function rg(a) {
  return ae.call(null, a, new V(null, 2, 5, W, [new q(null, "animation", "animation", -1248293244), new q(null, "animation-seq", "animation-seq", 1939833135)], null));
}
function sg(a) {
  return ae.call(null, a, new V(null, 2, 5, W, [new q(null, "animation", "animation", -1248293244), new q(null, "current", "current", -1088038603)], null));
}
;function tg(a, b) {
  return Math.sqrt(Math.abs(a.x - b.x) + Math.abs(a.y - b.y));
}
function ug(a, b) {
  return Ac.call(null, zf, Kd.call(null, tg, a), G.call(null, b));
}
function vg(a) {
  var b = ig.call(null, a), c = Zd.call(null, function() {
    return function(a) {
      return $f.call(null, a, new q(null, "attacker", "attacker", 48869964));
    };
  }(b), b), d = Zd.call(null, function() {
    return function(a) {
      return $f.call(null, a, new q(null, "attackable", "attackable", 2099301245));
    };
  }(b, c), b);
  return Dc.call(null, d) ? a : lg.call(null, a, function() {
    return function(a, b, c) {
      return function l(d) {
        return new U(null, function(a, b, c) {
          return function() {
            for (;;) {
              var a = G.call(null, d);
              if (a) {
                if (Ic.call(null, a)) {
                  var b = xd.call(null, a), e = P.call(null, b), g = rd.call(null, e);
                  return function() {
                    for (var a = 0;;) {
                      if (a < e) {
                        var d = y.call(null, b, a);
                        vd.call(null, g, function() {
                          var a = ug.call(null, d, c);
                          return bg.call(null, d, Rf.call(null, a));
                        }());
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? ud.call(null, wd.call(null, g), l.call(null, yd.call(null, a))) : ud.call(null, wd.call(null, g), null);
                }
                var h = H.call(null, a);
                return O.call(null, function() {
                  var a = ug.call(null, h, c);
                  return bg.call(null, h, Rf.call(null, a));
                }(), l.call(null, I.call(null, a)));
              }
              return null;
            }
          };
        }(a, b, c), null, null);
      };
    }(b, c, d).call(null, c);
  }());
}
;var wg;
a: {
  var xg = aa.navigator;
  if (xg) {
    var yg = xg.userAgent;
    if (yg) {
      wg = yg;
      break a;
    }
  }
  wg = "";
}
function zg(a) {
  return-1 != wg.indexOf(a);
}
;var Ag = zg("Opera") || zg("OPR"), Bg = zg("Trident") || zg("MSIE"), Cg = zg("Gecko") && -1 == wg.toLowerCase().indexOf("webkit") && !(zg("Trident") || zg("MSIE")), Dg = -1 != wg.toLowerCase().indexOf("webkit"), Eg = function() {
  var a = "", b;
  if (Ag && aa.opera) {
    return a = aa.opera.version, "function" == m(a) ? a() : a;
  }
  Cg ? b = /rv\:([^\);]+)(\)|;)/ : Bg ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Dg && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(wg)) ? a[1] : "");
  return Bg && (b = (b = aa.document) ? b.documentMode : void 0, b > parseFloat(a)) ? String(b) : a;
}(), Fg = {};
function Gg(a) {
  var b;
  if (!(b = Fg[a])) {
    b = 0;
    for (var c = String(Eg).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), g = 0;0 == b && g < e;g++) {
      var h = c[g] || "", k = d[g] || "", l = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
      do {
        var p = l.exec(h) || ["", "", ""], r = n.exec(k) || ["", "", ""];
        if (0 == p[0].length && 0 == r[0].length) {
          break;
        }
        b = ea(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || ea(0 == p[2].length, 0 == r[2].length) || ea(p[2], r[2]);
      } while (0 == b);
    }
    b = Fg[a] = 0 <= b;
  }
  return b;
}
;Bg && Gg("9");
!Dg || Gg("528");
Cg && Gg("1.9b") || Bg && Gg("8") || Ag && Gg("9.5") || Dg && Gg("528");
Cg && !Gg("8") || Bg && Gg("9");
var Hg = function() {
  function a(a, b) {
    return Ac.call(null, w, Yd.call(null, a, b));
  }
  function b(a) {
    return Ac.call(null, w, a);
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
  c.p = a;
  return c;
}();
function eg(a) {
  return "" + w.f(a.Pa);
}
function fg() {
  function a() {
    return Zc.call(null, 16).toString(16);
  }
  return new Lf(Hg.call(null, Dd.call(null, Wd.call(null, 8, a), "-", Wd.call(null, 4, a), "-4", Wd.call(null, 3, a), "-", function() {
    return(8 | 3 & Zc.call(null, 15)).toString(16);
  }.call(null), Wd.call(null, 3, a), "-", Wd.call(null, 12, a))));
}
(function(a) {
  if (a instanceof RegExp) {
    return a;
  }
  var b = Bf.call(null, /^(?:\(\?([idmsux]*)\))?(.*)/, a);
  Q.call(null, b, 0, null);
  a = Q.call(null, b, 1, null);
  b = Q.call(null, b, 2, null);
  return new RegExp(b, a);
}).call(null, "^" + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + "-" + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + "-" + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + "-" + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + "-" + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + 
w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + "$");
function Ig(a) {
  return 16 * a;
}
var Jg = Ig.call(null, 40), Kg = Ig.call(null, 40);
function Lg(a) {
  return PIXI.Texture.fromImage(a, !1);
}
function Mg(a, b, c) {
  a[b] = c;
  return a;
}
;function Ng(a, b, c) {
  Mg.call(null, a.position, b, c);
  return a;
}
function Og(a, b, c) {
  Mg.call(null, a, b, Ig.call(null, c));
  return a;
}
;function Pg(a, b) {
  var c = new PIXI.Sprite(Lg.call(null, "images/barbarian-neutral-down.png")), d = new PIXI.Sprite(Lg.call(null, "images/barbarian-run-right-down.png")), e = new PIXI.Sprite(Lg.call(null, "images/barbarian-run-left-down.png")), g = new ma(null, 3, [new q(null, "neutral", "neutral", -1941956087), c, new q(null, "right", "right", -452581833), d, new q(null, "left", "left", -399115937), e], null), h = new V(null, 4, 5, W, [new q(null, "neutral", "neutral", -1941956087), new q(null, "left", "left", -399115937), 
  new q(null, "neutral", "neutral", -1941956087), new q(null, "right", "right", -452581833)], null);
  Ng.call(null, c, "x", a);
  Ng.call(null, c, "y", b);
  Og.call(null, c, "height", 1);
  Og.call(null, c, "width", 1);
  Og.call(null, d, "height", 1);
  Og.call(null, d, "width", 1);
  Og.call(null, e, "height", 1);
  Og.call(null, e, "width", 1);
  return hg.call(null, Nf.call(null, a, b), Vf.call(null, .25), Zf.call(null, g, h, 0), Pf.call(null, c), Rf.call(null, null));
}
function Qg(a, b) {
  var c = new PIXI.Sprite(Lg.call(null, "images/town-hall.png"));
  Ng.call(null, c, "x", a);
  Ng.call(null, c, "y", b);
  Og.call(null, c, "height", 4);
  Og.call(null, c, "width", 4);
  return hg.call(null, Nf.call(null, a, b), Pf.call(null, c), Tf.call(null));
}
;var Rg = Nd.call(null, Ve);
function Sg(a) {
  a = a.getLocalPosition(a.target);
  return Od.call(null, Rg, new ma(null, 2, [new q(null, "x", "x", 2099068185), a.x, new q(null, "y", "y", -1757859776), a.y], null));
}
function Tg(a) {
  if (Dc.call(null, ec.call(null, Rg))) {
    return a;
  }
  var b = (new q(null, "x", "x", 2099068185)).f(ec.call(null, Rg)), c = (new q(null, "y", "y", -1757859776)).f(ec.call(null, Rg));
  Od.call(null, Rg, Ve);
  return jg.call(null, a, Pg.call(null, b, c));
}
;function Ug(a, b, c, d) {
  return new V(null, 2, 5, W, [a + d * Math.cos(c), b + d * Math.sin(c)], null);
}
function Vg(a) {
  var b = ig.call(null, a), c = Zd.call(null, function() {
    return function(a) {
      return $f.call(null, a, new q(null, "movement", "movement", 1777030977));
    };
  }(b), b), d = Zd.call(null, function() {
    return function(a) {
      return $f.call(null, a, new q(null, "facing", "facing", -854439413));
    };
  }(b, c), c);
  return Dc.call(null, d) ? a : lg.call(null, a, function() {
    return function(a, b, c) {
      return function l(d) {
        return new U(null, function() {
          return function() {
            for (;;) {
              var a = G.call(null, d);
              if (a) {
                if (Ic.call(null, a)) {
                  var b = xd.call(null, a), c = P.call(null, b), e = rd.call(null, c);
                  return function() {
                    for (var a = 0;;) {
                      if (a < c) {
                        var d = y.call(null, b, a);
                        vd.call(null, e, function() {
                          var a = pg.call(null, d), b = og.call(null, d), c = mg.call(null, d), e = Q.call(null, c, 0, null), c = Q.call(null, c, 1, null), b = Ug.call(null, e, c, a, b), a = Q.call(null, b, 0, null), b = Q.call(null, b, 1, null);
                          return bg.call(null, d, Nf.call(null, a, b));
                        }());
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? ud.call(null, wd.call(null, e), l.call(null, yd.call(null, a))) : ud.call(null, wd.call(null, e), null);
                }
                var g = H.call(null, a);
                return O.call(null, function() {
                  var a = pg.call(null, g), b = og.call(null, g), c = mg.call(null, g), d = Q.call(null, c, 0, null), c = Q.call(null, c, 1, null), b = Ug.call(null, d, c, a, b), a = Q.call(null, b, 0, null), b = Q.call(null, b, 1, null);
                  return bg.call(null, g, Nf.call(null, a, b));
                }(), l.call(null, I.call(null, a)));
              }
              return null;
            }
          };
        }(a, b, c), null, null);
      };
    }(b, c, d).call(null, d);
  }());
}
;function Wg(a, b) {
  var c = P.call(null, a);
  return Ub.call(null, b, c - 1) ? 0 : b + 1;
}
function Xg(a) {
  var b = (new q(null, "frame-count", "frame-count", 1616946810)).f(a), c = ig.call(null, a), d = Zd.call(null, function() {
    return function(a) {
      return $f.call(null, a, new q(null, "animation", "animation", -1248293244));
    };
  }(b, c), c);
  return Ub.call(null, Wc.call(null, b, 15), 0) ? Dc.call(null, d) ? a : lg.call(null, a, function() {
    return function(a, b, c) {
      return function l(d) {
        return new U(null, function() {
          return function() {
            for (;;) {
              var a = G.call(null, d);
              if (a) {
                if (Ic.call(null, a)) {
                  var b = xd.call(null, a), c = P.call(null, b), e = rd.call(null, c);
                  return function() {
                    for (var a = 0;;) {
                      if (a < c) {
                        var d = y.call(null, b, a);
                        vd.call(null, e, function() {
                          var a = qg.call(null, d), b = rg.call(null, d), c = sg.call(null, d), c = Wg.call(null, b, c), e = S.call(null, b, c), e = S.call(null, a, e);
                          return cg.call(null, d, new V(null, 2, 5, W, [Zf.call(null, a, b, c), Pf.call(null, e)], null));
                        }());
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? ud.call(null, wd.call(null, e), l.call(null, yd.call(null, a))) : ud.call(null, wd.call(null, e), null);
                }
                var g = H.call(null, a);
                return O.call(null, function() {
                  var a = qg.call(null, g), b = rg.call(null, g), c = sg.call(null, g), c = Wg.call(null, b, c), d = S.call(null, b, c), d = S.call(null, a, d);
                  return cg.call(null, g, new V(null, 2, 5, W, [Zf.call(null, a, b, c), Pf.call(null, d)], null));
                }(), l.call(null, I.call(null, a)));
              }
              return null;
            }
          };
        }(a, b, c), null, null);
      };
    }(b, c, d).call(null, d);
  }()) : a;
}
;var Yg = new PIXI.TilingSprite(Lg.call(null, "images/grass-tile.png"), Kg, Jg);
function Zg(a) {
  var b = (new q(null, "stage", "stage", 1843544772)).f(a), c = (new q(null, "renderer", "renderer", 336841071)).f(a);
  b.removeChildren();
  b.addChild(Yg);
  for (var d = G.call(null, Zd.call(null, function() {
    return function(a) {
      return $f.call(null, a, new q(null, "renderable", "renderable", -1247325782));
    };
  }(b, c), ig.call(null, a))), e = null, g = 0, h = 0;;) {
    if (h < g) {
      var k = y.call(null, e, h), l = ag.call(null, k, new q(null, "renderable", "renderable", -1247325782)).ta;
      if (null != l) {
        var n = mg.call(null, k), k = Q.call(null, n, 0, null), n = Q.call(null, n, 1, null), p = l.position;
        Mg.call(null, p, "x", k);
        Mg.call(null, p, "y", n);
        b.addChild(l);
      }
      h += 1;
    } else {
      if (d = G.call(null, d)) {
        Ic.call(null, d) ? (g = xd.call(null, d), d = yd.call(null, d), e = g, g = P.call(null, g)) : (g = H.call(null, d), e = ag.call(null, g, new q(null, "renderable", "renderable", -1247325782)).ta, null != e && (h = mg.call(null, g), g = Q.call(null, h, 0, null), h = Q.call(null, h, 1, null), l = e.position, Mg.call(null, l, "x", g), Mg.call(null, l, "y", h), b.addChild(e)), d = L.call(null, d), e = null, g = 0), h = 0;
      } else {
        break;
      }
    }
  }
  c.render(b);
  return a;
}
;function $g(a, b, c, d) {
  return Math.atan2(b - d, a - c);
}
function ah(a) {
  var b = ig.call(null, a), c = Zd.call(null, function() {
    return function(a) {
      return $f.call(null, a, new q(null, "movement", "movement", 1777030977));
    };
  }(b), b), d = Zd.call(null, function() {
    return function(a) {
      return $f.call(null, a, new q(null, "attacker", "attacker", 48869964));
    };
  }(b, c), c);
  return Dc.call(null, d) ? a : lg.call(null, a, function() {
    return function(a, b, c) {
      return function l(d) {
        return new U(null, function() {
          return function() {
            for (;;) {
              var a = G.call(null, d);
              if (a) {
                if (Ic.call(null, a)) {
                  var b = xd.call(null, a), c = P.call(null, b), e = rd.call(null, c);
                  return function() {
                    for (var a = 0;;) {
                      if (a < c) {
                        var d = y.call(null, b, a);
                        vd.call(null, e, function() {
                          var a = ng.call(null, d), b = mg.call(null, a), a = Q.call(null, b, 0, null), b = Q.call(null, b, 1, null), c = mg.call(null, d), e = Q.call(null, c, 0, null), c = Q.call(null, c, 1, null);
                          return bg.call(null, d, Xf.call(null, $g.call(null, a, b, e, c)));
                        }());
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? ud.call(null, wd.call(null, e), l.call(null, yd.call(null, a))) : ud.call(null, wd.call(null, e), null);
                }
                var g = H.call(null, a);
                return O.call(null, function() {
                  var a = ng.call(null, g), b = mg.call(null, a), a = Q.call(null, b, 0, null), b = Q.call(null, b, 1, null), c = mg.call(null, g), d = Q.call(null, c, 0, null), c = Q.call(null, c, 1, null);
                  return bg.call(null, g, Xf.call(null, $g.call(null, a, b, d, c)));
                }(), l.call(null, I.call(null, a)));
              }
              return null;
            }
          };
        }(a, b, c), null, null);
      };
    }(b, c, d).call(null, d);
  }());
}
;function bh() {
  var a = new PIXI.autoDetectRenderer(Jg, Kg);
  document.getElementById("battlefield").appendChild(a.view);
  return a;
}
function ch() {
  var a = new PIXI.Stage(16777215);
  Mg.call(null, a, "interactive", !0);
  Mg.call(null, a, "click", Sg);
  return a;
}
function dh(a) {
  var b = (new q(null, "frame-count", "frame-count", 1616946810)).f(a);
  return vc.call(null, a, new q(null, "frame-count", "frame-count", 1616946810), b + 1);
}
var eh = Nd.call(null, Ve);
Qd.call(null, eh, function(a) {
  return lg.call(null, vc.call(null, vc.call(null, vc.call(null, a, new q(null, "renderer", "renderer", 336841071), bh.call(null)), new q(null, "stage", "stage", 1843544772), ch.call(null)), new q(null, "frame-count", "frame-count", 1616946810), 0), new V(null, 2, 5, W, [Pg.call(null, 160, 160), Qg.call(null, 320, 320)], null));
});
function fh(a) {
  return Zg.call(null, Xg.call(null, Vg.call(null, ah.call(null, vg.call(null, Tg.call(null, dh.call(null, a)))))));
}
requestAnimFrame(function gh() {
  Qd.call(null, eh, fh);
  return requestAnimFrame(gh);
});

})();
