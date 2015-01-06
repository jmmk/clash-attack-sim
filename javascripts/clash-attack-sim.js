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
function p(a) {
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
ga.prototype.clear = function() {
  this.Za = "";
};
ga.prototype.toString = function() {
  return this.Za;
};
var ha = null;
function ia() {
  return new q(null, 5, [ka, !0, ma, !0, na, !1, pa, !1, qa, null], null);
}
function t(a) {
  return null != a && !1 !== a;
}
function u(a, b) {
  return a[p(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function ra(a) {
  return null == a ? null : a.constructor;
}
function v(a, b) {
  var c = ra(b), c = t(t(c) ? c.Zb : c) ? c.Yb : p(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function sa(a) {
  var b = a.Yb;
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
var ua = {}, va = {};
function xa(a) {
  if (a ? a.O : a) {
    return a.O(a);
  }
  var b;
  b = xa[p(null == a ? null : a)];
  if (!b && (b = xa._, !b)) {
    throw v("ICounted.-count", a);
  }
  return b.call(null, a);
}
function ya(a) {
  if (a ? a.X : a) {
    return a.X(a);
  }
  var b;
  b = ya[p(null == a ? null : a)];
  if (!b && (b = ya._, !b)) {
    throw v("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
function za(a, b) {
  if (a ? a.L : a) {
    return a.L(a, b);
  }
  var c;
  c = za[p(null == a ? null : a)];
  if (!c && (c = za._, !c)) {
    throw v("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Aa = {}, z = function() {
  function a(a, b, c) {
    if (a ? a.ka : a) {
      return a.ka(a, b, c);
    }
    var h;
    h = z[p(null == a ? null : a)];
    if (!h && (h = z._, !h)) {
      throw v("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.Y : a) {
      return a.Y(a, b);
    }
    var c;
    c = z[p(null == a ? null : a)];
    if (!c && (c = z._, !c)) {
      throw v("IIndexed.-nth", a);
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
  c.e = b;
  c.i = a;
  return c;
}(), Ca = {};
function Da(a) {
  if (a ? a.ba : a) {
    return a.ba(a);
  }
  var b;
  b = Da[p(null == a ? null : a)];
  if (!b && (b = Da._, !b)) {
    throw v("ISeq.-first", a);
  }
  return b.call(null, a);
}
function Ea(a) {
  if (a ? a.ja : a) {
    return a.ja(a);
  }
  var b;
  b = Ea[p(null == a ? null : a)];
  if (!b && (b = Ea._, !b)) {
    throw v("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Ha = {}, Ia = {}, A = function() {
  function a(a, b, c) {
    if (a ? a.G : a) {
      return a.G(a, b, c);
    }
    var h;
    h = A[p(null == a ? null : a)];
    if (!h && (h = A._, !h)) {
      throw v("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.J : a) {
      return a.J(a, b);
    }
    var c;
    c = A[p(null == a ? null : a)];
    if (!c && (c = A._, !c)) {
      throw v("ILookup.-lookup", a);
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
  c.e = b;
  c.i = a;
  return c;
}();
function Ja(a, b) {
  if (a ? a.ub : a) {
    return a.ub(a, b);
  }
  var c;
  c = Ja[p(null == a ? null : a)];
  if (!c && (c = Ja._, !c)) {
    throw v("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function La(a, b, c) {
  if (a ? a.V : a) {
    return a.V(a, b, c);
  }
  var d;
  d = La[p(null == a ? null : a)];
  if (!d && (d = La._, !d)) {
    throw v("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Ma = {};
function Na(a, b) {
  if (a ? a.Z : a) {
    return a.Z(a, b);
  }
  var c;
  c = Na[p(null == a ? null : a)];
  if (!c && (c = Na._, !c)) {
    throw v("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Oa = {};
function Qa(a) {
  if (a ? a.zb : a) {
    return a.zb();
  }
  var b;
  b = Qa[p(null == a ? null : a)];
  if (!b && (b = Qa._, !b)) {
    throw v("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Ra(a) {
  if (a ? a.Ab : a) {
    return a.Ab();
  }
  var b;
  b = Ra[p(null == a ? null : a)];
  if (!b && (b = Ra._, !b)) {
    throw v("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Sa = {}, Ua = {};
function Va(a, b, c) {
  if (a ? a.Bb : a) {
    return a.Bb(a, b, c);
  }
  var d;
  d = Va[p(null == a ? null : a)];
  if (!d && (d = Va._, !d)) {
    throw v("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Wa(a) {
  if (a ? a.yb : a) {
    return a.yb(a);
  }
  var b;
  b = Wa[p(null == a ? null : a)];
  if (!b && (b = Wa._, !b)) {
    throw v("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Xa = {};
function Za(a) {
  if (a ? a.K : a) {
    return a.K(a);
  }
  var b;
  b = Za[p(null == a ? null : a)];
  if (!b && (b = Za._, !b)) {
    throw v("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var $a = {};
function ab(a, b) {
  if (a ? a.N : a) {
    return a.N(a, b);
  }
  var c;
  c = ab[p(null == a ? null : a)];
  if (!c && (c = ab._, !c)) {
    throw v("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var bb = {}, cb = function() {
  function a(a, b, c) {
    if (a ? a.aa : a) {
      return a.aa(a, b, c);
    }
    var h;
    h = cb[p(null == a ? null : a)];
    if (!h && (h = cb._, !h)) {
      throw v("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.$ : a) {
      return a.$(a, b);
    }
    var c;
    c = cb[p(null == a ? null : a)];
    if (!c && (c = cb._, !c)) {
      throw v("IReduce.-reduce", a);
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
  c.e = b;
  c.i = a;
  return c;
}();
function eb(a, b) {
  if (a ? a.F : a) {
    return a.F(a, b);
  }
  var c;
  c = eb[p(null == a ? null : a)];
  if (!c && (c = eb._, !c)) {
    throw v("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function fb(a) {
  if (a ? a.I : a) {
    return a.I(a);
  }
  var b;
  b = fb[p(null == a ? null : a)];
  if (!b && (b = fb._, !b)) {
    throw v("IHash.-hash", a);
  }
  return b.call(null, a);
}
var gb = {};
function hb(a) {
  if (a ? a.M : a) {
    return a.M(a);
  }
  var b;
  b = hb[p(null == a ? null : a)];
  if (!b && (b = hb._, !b)) {
    throw v("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var ib = {};
function B(a, b) {
  if (a ? a.Ib : a) {
    return a.Ib(0, b);
  }
  var c;
  c = B[p(null == a ? null : a)];
  if (!c && (c = B._, !c)) {
    throw v("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var kb = {};
function lb(a, b, c) {
  if (a ? a.H : a) {
    return a.H(a, b, c);
  }
  var d;
  d = lb[p(null == a ? null : a)];
  if (!d && (d = lb._, !d)) {
    throw v("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function mb(a, b, c) {
  if (a ? a.Hb : a) {
    return a.Hb(0, b, c);
  }
  var d;
  d = mb[p(null == a ? null : a)];
  if (!d && (d = mb._, !d)) {
    throw v("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function nb(a) {
  if (a ? a.fb : a) {
    return a.fb(a);
  }
  var b;
  b = nb[p(null == a ? null : a)];
  if (!b && (b = nb._, !b)) {
    throw v("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function ob(a, b) {
  if (a ? a.ib : a) {
    return a.ib(a, b);
  }
  var c;
  c = ob[p(null == a ? null : a)];
  if (!c && (c = ob._, !c)) {
    throw v("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function pb(a) {
  if (a ? a.jb : a) {
    return a.jb(a);
  }
  var b;
  b = pb[p(null == a ? null : a)];
  if (!b && (b = pb._, !b)) {
    throw v("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function qb(a, b, c) {
  if (a ? a.hb : a) {
    return a.hb(a, b, c);
  }
  var d;
  d = qb[p(null == a ? null : a)];
  if (!d && (d = qb._, !d)) {
    throw v("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function rb(a, b, c) {
  if (a ? a.Gb : a) {
    return a.Gb(0, b, c);
  }
  var d;
  d = rb[p(null == a ? null : a)];
  if (!d && (d = rb._, !d)) {
    throw v("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function sb(a) {
  if (a ? a.Db : a) {
    return a.Db();
  }
  var b;
  b = sb[p(null == a ? null : a)];
  if (!b && (b = sb._, !b)) {
    throw v("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function tb(a) {
  if (a ? a.wb : a) {
    return a.wb(a);
  }
  var b;
  b = tb[p(null == a ? null : a)];
  if (!b && (b = tb._, !b)) {
    throw v("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function ub(a) {
  if (a ? a.xb : a) {
    return a.xb(a);
  }
  var b;
  b = ub[p(null == a ? null : a)];
  if (!b && (b = ub._, !b)) {
    throw v("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function vb(a) {
  if (a ? a.vb : a) {
    return a.vb(a);
  }
  var b;
  b = vb[p(null == a ? null : a)];
  if (!b && (b = vb._, !b)) {
    throw v("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function xb(a, b) {
  if (a ? a.Tb : a) {
    return a.Tb(a, b);
  }
  var c;
  c = xb[p(null == a ? null : a)];
  if (!c && (c = xb._, !c)) {
    throw v("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var yb = function() {
  function a(a, b, c, d, e) {
    if (a ? a.Xb : a) {
      return a.Xb(a, b, c, d, e);
    }
    var n;
    n = yb[p(null == a ? null : a)];
    if (!n && (n = yb._, !n)) {
      throw v("ISwap.-swap!", a);
    }
    return n.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.Wb : a) {
      return a.Wb(a, b, c, d);
    }
    var e;
    e = yb[p(null == a ? null : a)];
    if (!e && (e = yb._, !e)) {
      throw v("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.Vb : a) {
      return a.Vb(a, b, c);
    }
    var d;
    d = yb[p(null == a ? null : a)];
    if (!d && (d = yb._, !d)) {
      throw v("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.Ub : a) {
      return a.Ub(a, b);
    }
    var c;
    c = yb[p(null == a ? null : a)];
    if (!c && (c = yb._, !c)) {
      throw v("ISwap.-swap!", a);
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
  e.P = a;
  return e;
}();
function zb(a) {
  if (a ? a.qb : a) {
    return a.qb(a);
  }
  var b;
  b = zb[p(null == a ? null : a)];
  if (!b && (b = zb._, !b)) {
    throw v("IIterable.-iterator", a);
  }
  return b.call(null, a);
}
function Ab(a) {
  this.$b = a;
  this.B = 0;
  this.n = 1073741824;
}
Ab.prototype.Ib = function(a, b) {
  return this.$b.append(b);
};
function Bb(a) {
  var b = new ga;
  a.H(null, new Ab(b), ia());
  return "" + w.f(b);
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
  a && (a.n & 4194304 || a.cc) ? a = a.I(null) : "number" === typeof a ? a = (Math.floor.f ? Math.floor.f(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Jb(a), 0 !== a && (a = Db(a), a = Eb(0, a), a = Fb(a, 4))) : a = null == a ? 0 : fb(a);
  return a;
}
function Lb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Mb(a, b) {
  if (t(Ob.e ? Ob.e(a, b) : Ob.call(null, a, b))) {
    return 0;
  }
  if (t(function() {
    var c = t(a.va) ? !1 : !0;
    return c ? b.va : c;
  }())) {
    return-1;
  }
  if (t(a.va)) {
    if (!t(b.va)) {
      return 1;
    }
    var c = function() {
      var c = a.va, d = b.va;
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
  this.va = a;
  this.name = b;
  this.Ua = c;
  this.Ya = d;
  this.ea = e;
  this.n = 2154168321;
  this.B = 4096;
}
f = Qb.prototype;
f.H = function(a, b) {
  return B(b, this.Ua);
};
f.I = function() {
  var a = this.Ya;
  return null != a ? a : this.Ya = a = Lb(Gb(this.name), Jb(this.va));
};
f.N = function(a, b) {
  return new Qb(this.va, this.name, this.Ua, this.Ya, b);
};
f.K = function() {
  return this.ea;
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return A.i(c, this, null);
      case 3:
        return A.i(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return A.i(c, this, null);
  };
  a.i = function(a, c, d) {
    return A.i(c, this, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
f.f = function(a) {
  return A.i(a, this, null);
};
f.e = function(a, b) {
  return A.i(a, this, b);
};
f.F = function(a, b) {
  return b instanceof Qb ? this.Ua === b.Ua : !1;
};
f.toString = function() {
  return this.Ua;
};
function D(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.n & 8388608 || a.dc)) {
    return a.M(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Rb(a, 0);
  }
  if (u(gb, a)) {
    return hb(a);
  }
  throw Error("" + w.f(a) + " is not ISeqable");
}
function F(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.n & 64 || a.gb)) {
    return a.ba(null);
  }
  a = D(a);
  return null == a ? null : Da(a);
}
function G(a) {
  return null != a ? a && (a.n & 64 || a.gb) ? a.ja(null) : (a = D(a)) ? Ea(a) : Sb : Sb;
}
function J(a) {
  return null == a ? null : a && (a.n & 128 || a.rb) ? a.ia(null) : D(G(a));
}
var Ob = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || eb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
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
      a = G(a);
      return c(b, d, a);
    };
    a.p = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.p(b, e, K(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.s = c.s;
  b.f = function() {
    return!0;
  };
  b.e = a;
  b.p = c.p;
  return b;
}();
function Tb(a, b) {
  var c = Db(a), c = Eb(0, c);
  return Fb(c, b);
}
function Ub(a) {
  var b = 0, c = 1;
  for (a = D(a);;) {
    if (null != a) {
      b += 1, c = Cb(31, c) + Kb(F(a)) | 0, a = J(a);
    } else {
      return Tb(c, b);
    }
  }
}
function Vb(a) {
  var b = 0, c = 0;
  for (a = D(a);;) {
    if (null != a) {
      b += 1, c = c + Kb(F(a)) | 0, a = J(a);
    } else {
      return Tb(c, b);
    }
  }
}
va["null"] = !0;
xa["null"] = function() {
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
ua["function"] = !0;
fb._ = function(a) {
  return a[ba] || (a[ba] = ++ca);
};
function Wb(a) {
  this.oa = a;
  this.B = 0;
  this.n = 32768;
}
Wb.prototype.yb = function() {
  return this.oa;
};
function Xb(a) {
  return a instanceof Wb;
}
function Yb(a) {
  return Wa(a);
}
var Zb = function() {
  function a(a, b, c, d) {
    for (var l = xa(a);;) {
      if (d < l) {
        var m = z.e(a, d);
        c = b.e ? b.e(c, m) : b.call(null, c, m);
        if (Xb(c)) {
          return Wa(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    var d = xa(a), l = c;
    for (c = 0;;) {
      if (c < d) {
        var m = z.e(a, c), l = b.e ? b.e(l, m) : b.call(null, l, m);
        if (Xb(l)) {
          return Wa(l);
        }
        c += 1;
      } else {
        return l;
      }
    }
  }
  function c(a, b) {
    var c = xa(a);
    if (0 === c) {
      return b.D ? b.D() : b.call(null);
    }
    for (var d = z.e(a, 0), l = 1;;) {
      if (l < c) {
        var m = z.e(a, l), d = b.e ? b.e(d, m) : b.call(null, d, m);
        if (Xb(d)) {
          return Wa(d);
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
  d.e = c;
  d.i = b;
  d.t = a;
  return d;
}(), $b = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        var m = a[d];
        c = b.e ? b.e(c, m) : b.call(null, c, m);
        if (Xb(c)) {
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
        if (Xb(l)) {
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
      return b.D ? b.D() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        var m = a[l], d = b.e ? b.e(d, m) : b.call(null, d, m);
        if (Xb(d)) {
          return Wa(d);
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
  d.e = c;
  d.i = b;
  d.t = a;
  return d;
}();
function ac(a) {
  return a ? a.n & 2 || a.Lb ? !0 : a.n ? !1 : u(va, a) : u(va, a);
}
function bc(a) {
  return a ? a.n & 16 || a.Eb ? !0 : a.n ? !1 : u(Aa, a) : u(Aa, a);
}
function cc(a, b) {
  this.k = a;
  this.A = b;
}
cc.prototype.Cb = function() {
  return this.A < this.k.length;
};
cc.prototype.next = function() {
  var a = this.k[this.A];
  this.A += 1;
  return a;
};
function Rb(a, b) {
  this.k = a;
  this.A = b;
  this.n = 166199550;
  this.B = 8192;
}
f = Rb.prototype;
f.toString = function() {
  return Bb(this);
};
f.Y = function(a, b) {
  var c = b + this.A;
  return c < this.k.length ? this.k[c] : null;
};
f.ka = function(a, b, c) {
  a = b + this.A;
  return a < this.k.length ? this.k[a] : c;
};
f.qb = function() {
  return new cc(this.k, this.A);
};
f.ia = function() {
  return this.A + 1 < this.k.length ? new Rb(this.k, this.A + 1) : null;
};
f.O = function() {
  return this.k.length - this.A;
};
f.I = function() {
  return Ub(this);
};
f.F = function(a, b) {
  return dc.e ? dc.e(this, b) : dc.call(null, this, b);
};
f.X = function() {
  return Sb;
};
f.$ = function(a, b) {
  return $b.t(this.k, b, this.k[this.A], this.A + 1);
};
f.aa = function(a, b, c) {
  return $b.t(this.k, b, c, this.A);
};
f.ba = function() {
  return this.k[this.A];
};
f.ja = function() {
  return this.A + 1 < this.k.length ? new Rb(this.k, this.A + 1) : Sb;
};
f.M = function() {
  return this;
};
f.L = function(a, b) {
  return L.e ? L.e(b, this) : L.call(null, b, this);
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
}(), K = function() {
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
    return null != a ? za(a, b) : za(Sb, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (t(e)) {
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
      a = G(a);
      return c(b, d, a);
    };
    a.p = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 0:
        return fc;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.p(b, e, K(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.s = c.s;
  b.D = function() {
    return fc;
  };
  b.f = function(a) {
    return a;
  };
  b.e = a;
  b.p = c.p;
  return b;
}();
function M(a) {
  if (null != a) {
    if (a && (a.n & 2 || a.Lb)) {
      a = a.O(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (u(va, a)) {
            a = xa(a);
          } else {
            a: {
              a = D(a);
              for (var b = 0;;) {
                if (ac(a)) {
                  a = b + xa(a);
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
var hc = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return D(a) ? F(a) : c;
      }
      if (bc(a)) {
        return z.i(a, b, c);
      }
      if (D(a)) {
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
        if (D(a)) {
          return F(a);
        }
        throw Error("Index out of bounds");
      }
      if (bc(a)) {
        return z.e(a, b);
      }
      if (D(a)) {
        var c = J(a), h = b - 1;
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
  c.e = b;
  c.i = a;
  return c;
}(), N = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.n & 16 || a.Eb)) {
      return a.ka(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (u(Aa, a)) {
      return z.e(a, b);
    }
    if (a ? a.n & 64 || a.gb || (a.n ? 0 : u(Ca, a)) : u(Ca, a)) {
      return hc.i(a, b, c);
    }
    throw Error("nth not supported on this type " + w.f(sa(ra(a))));
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.n & 16 || a.Eb)) {
      return a.Y(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (u(Aa, a)) {
      return z.e(a, b);
    }
    if (a ? a.n & 64 || a.gb || (a.n ? 0 : u(Ca, a)) : u(Ca, a)) {
      return hc.e(a, b);
    }
    throw Error("nth not supported on this type " + w.f(sa(ra(a))));
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
  c.e = b;
  c.i = a;
  return c;
}(), O = function() {
  function a(a, b, c) {
    return null != a ? a && (a.n & 256 || a.Fb) ? a.G(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : u(Ia, a) ? A.i(a, b, c) : c : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.n & 256 || a.Fb) ? a.J(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : u(Ia, a) ? A.e(a, b) : null;
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
  c.e = b;
  c.i = a;
  return c;
}(), kc = function() {
  function a(a, b, c) {
    if (null != a) {
      a = La(a, b, c);
    } else {
      a: {
        a = [b];
        c = [c];
        b = a.length;
        var h = 0, k;
        for (k = nb(ic);;) {
          if (h < b) {
            var l = h + 1;
            k = k.hb(null, a[h], c[h]);
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
      3 < arguments.length && (m = K(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.i(a, d, e), t(l)) {
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
      a = G(a);
      return c(b, d, l, a);
    };
    a.p = c;
    return a;
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.p(b, e, g, K(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 3;
  b.s = c.s;
  b.i = a;
  b.p = c.p;
  return b;
}(), Q = function() {
  function a(a, b) {
    return null == a ? null : Na(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.e(a, d);
        if (t(e)) {
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
      a = G(a);
      return c(b, d, a);
    };
    a.p = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.p(b, e, K(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.s = c.s;
  b.f = function(a) {
    return a;
  };
  b.e = a;
  b.p = c.p;
  return b;
}();
function lc(a) {
  var b = "function" == p(a);
  return t(b) ? b : a ? t(t(null) ? null : a.Kb) ? !0 : a.jc ? !1 : u(ua, a) : u(ua, a);
}
function mc(a, b) {
  this.m = a;
  this.meta = b;
  this.B = 0;
  this.n = 393217;
}
f = mc.prototype;
f.call = function() {
  function a(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U, fa, Ga) {
    a = this.m;
    return R.pb ? R.pb(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U, fa, Ga) : R.call(null, a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U, fa, Ga);
  }
  function b(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U, fa) {
    a = this;
    return a.m.Ia ? a.m.Ia(b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U, fa) : a.m.call(null, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U, fa);
  }
  function c(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U) {
    a = this;
    return a.m.Ha ? a.m.Ha(b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U) : a.m.call(null, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U);
  }
  function d(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P) {
    a = this;
    return a.m.Ga ? a.m.Ga(b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P) : a.m.call(null, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P);
  }
  function e(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H) {
    a = this;
    return a.m.Fa ? a.m.Fa(b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H) : a.m.call(null, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H);
  }
  function g(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E) {
    a = this;
    return a.m.Ea ? a.m.Ea(b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E) : a.m.call(null, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E);
  }
  function h(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C) {
    a = this;
    return a.m.Da ? a.m.Da(b, c, d, e, g, h, k, l, m, n, r, s, x, y, C) : a.m.call(null, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C);
  }
  function k(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y) {
    a = this;
    return a.m.Ca ? a.m.Ca(b, c, d, e, g, h, k, l, m, n, r, s, x, y) : a.m.call(null, b, c, d, e, g, h, k, l, m, n, r, s, x, y);
  }
  function l(a, b, c, d, e, g, h, k, l, m, n, r, s, x) {
    a = this;
    return a.m.Ba ? a.m.Ba(b, c, d, e, g, h, k, l, m, n, r, s, x) : a.m.call(null, b, c, d, e, g, h, k, l, m, n, r, s, x);
  }
  function m(a, b, c, d, e, g, h, k, l, m, n, r, s) {
    a = this;
    return a.m.Aa ? a.m.Aa(b, c, d, e, g, h, k, l, m, n, r, s) : a.m.call(null, b, c, d, e, g, h, k, l, m, n, r, s);
  }
  function n(a, b, c, d, e, g, h, k, l, m, n, r) {
    a = this;
    return a.m.za ? a.m.za(b, c, d, e, g, h, k, l, m, n, r) : a.m.call(null, b, c, d, e, g, h, k, l, m, n, r);
  }
  function r(a, b, c, d, e, g, h, k, l, m, n) {
    a = this;
    return a.m.ya ? a.m.ya(b, c, d, e, g, h, k, l, m, n) : a.m.call(null, b, c, d, e, g, h, k, l, m, n);
  }
  function s(a, b, c, d, e, g, h, k, l, m) {
    a = this;
    return a.m.Ka ? a.m.Ka(b, c, d, e, g, h, k, l, m) : a.m.call(null, b, c, d, e, g, h, k, l, m);
  }
  function x(a, b, c, d, e, g, h, k, l) {
    a = this;
    return a.m.Ja ? a.m.Ja(b, c, d, e, g, h, k, l) : a.m.call(null, b, c, d, e, g, h, k, l);
  }
  function y(a, b, c, d, e, g, h, k) {
    a = this;
    return a.m.na ? a.m.na(b, c, d, e, g, h, k) : a.m.call(null, b, c, d, e, g, h, k);
  }
  function C(a, b, c, d, e, g, h) {
    a = this;
    return a.m.ha ? a.m.ha(b, c, d, e, g, h) : a.m.call(null, b, c, d, e, g, h);
  }
  function E(a, b, c, d, e, g) {
    a = this;
    return a.m.P ? a.m.P(b, c, d, e, g) : a.m.call(null, b, c, d, e, g);
  }
  function H(a, b, c, d, e) {
    a = this;
    return a.m.t ? a.m.t(b, c, d, e) : a.m.call(null, b, c, d, e);
  }
  function P(a, b, c, d) {
    a = this;
    return a.m.i ? a.m.i(b, c, d) : a.m.call(null, b, c, d);
  }
  function U(a, b, c) {
    a = this;
    return a.m.e ? a.m.e(b, c) : a.m.call(null, b, c);
  }
  function fa(a, b) {
    a = this;
    return a.m.f ? a.m.f(b) : a.m.call(null, b);
  }
  function Ga(a) {
    a = this;
    return a.m.D ? a.m.D() : a.m.call(null);
  }
  var I = null, I = function(I, ja, la, oa, wa, Ba, Fa, Ka, Pa, Ta, Ya, db, jb, wb, Nb, jc, Mc, wd, $d, Ne, Rf, Pg) {
    switch(arguments.length) {
      case 1:
        return Ga.call(this, I);
      case 2:
        return fa.call(this, I, ja);
      case 3:
        return U.call(this, I, ja, la);
      case 4:
        return P.call(this, I, ja, la, oa);
      case 5:
        return H.call(this, I, ja, la, oa, wa);
      case 6:
        return E.call(this, I, ja, la, oa, wa, Ba);
      case 7:
        return C.call(this, I, ja, la, oa, wa, Ba, Fa);
      case 8:
        return y.call(this, I, ja, la, oa, wa, Ba, Fa, Ka);
      case 9:
        return x.call(this, I, ja, la, oa, wa, Ba, Fa, Ka, Pa);
      case 10:
        return s.call(this, I, ja, la, oa, wa, Ba, Fa, Ka, Pa, Ta);
      case 11:
        return r.call(this, I, ja, la, oa, wa, Ba, Fa, Ka, Pa, Ta, Ya);
      case 12:
        return n.call(this, I, ja, la, oa, wa, Ba, Fa, Ka, Pa, Ta, Ya, db);
      case 13:
        return m.call(this, I, ja, la, oa, wa, Ba, Fa, Ka, Pa, Ta, Ya, db, jb);
      case 14:
        return l.call(this, I, ja, la, oa, wa, Ba, Fa, Ka, Pa, Ta, Ya, db, jb, wb);
      case 15:
        return k.call(this, I, ja, la, oa, wa, Ba, Fa, Ka, Pa, Ta, Ya, db, jb, wb, Nb);
      case 16:
        return h.call(this, I, ja, la, oa, wa, Ba, Fa, Ka, Pa, Ta, Ya, db, jb, wb, Nb, jc);
      case 17:
        return g.call(this, I, ja, la, oa, wa, Ba, Fa, Ka, Pa, Ta, Ya, db, jb, wb, Nb, jc, Mc);
      case 18:
        return e.call(this, I, ja, la, oa, wa, Ba, Fa, Ka, Pa, Ta, Ya, db, jb, wb, Nb, jc, Mc, wd);
      case 19:
        return d.call(this, I, ja, la, oa, wa, Ba, Fa, Ka, Pa, Ta, Ya, db, jb, wb, Nb, jc, Mc, wd, $d);
      case 20:
        return c.call(this, I, ja, la, oa, wa, Ba, Fa, Ka, Pa, Ta, Ya, db, jb, wb, Nb, jc, Mc, wd, $d, Ne);
      case 21:
        return b.call(this, I, ja, la, oa, wa, Ba, Fa, Ka, Pa, Ta, Ya, db, jb, wb, Nb, jc, Mc, wd, $d, Ne, Rf);
      case 22:
        return a.call(this, I, ja, la, oa, wa, Ba, Fa, Ka, Pa, Ta, Ya, db, jb, wb, Nb, jc, Mc, wd, $d, Ne, Rf, Pg);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  I.f = Ga;
  I.e = fa;
  I.i = U;
  I.t = P;
  I.P = H;
  I.ha = E;
  I.na = C;
  I.Ja = y;
  I.Ka = x;
  I.ya = s;
  I.za = r;
  I.Aa = n;
  I.Ba = m;
  I.Ca = l;
  I.Da = k;
  I.Ea = h;
  I.Fa = g;
  I.Ga = e;
  I.Ha = d;
  I.Ia = c;
  I.Nb = b;
  I.pb = a;
  return I;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
f.D = function() {
  return this.m.D ? this.m.D() : this.m.call(null);
};
f.f = function(a) {
  return this.m.f ? this.m.f(a) : this.m.call(null, a);
};
f.e = function(a, b) {
  return this.m.e ? this.m.e(a, b) : this.m.call(null, a, b);
};
f.i = function(a, b, c) {
  return this.m.i ? this.m.i(a, b, c) : this.m.call(null, a, b, c);
};
f.t = function(a, b, c, d) {
  return this.m.t ? this.m.t(a, b, c, d) : this.m.call(null, a, b, c, d);
};
f.P = function(a, b, c, d, e) {
  return this.m.P ? this.m.P(a, b, c, d, e) : this.m.call(null, a, b, c, d, e);
};
f.ha = function(a, b, c, d, e, g) {
  return this.m.ha ? this.m.ha(a, b, c, d, e, g) : this.m.call(null, a, b, c, d, e, g);
};
f.na = function(a, b, c, d, e, g, h) {
  return this.m.na ? this.m.na(a, b, c, d, e, g, h) : this.m.call(null, a, b, c, d, e, g, h);
};
f.Ja = function(a, b, c, d, e, g, h, k) {
  return this.m.Ja ? this.m.Ja(a, b, c, d, e, g, h, k) : this.m.call(null, a, b, c, d, e, g, h, k);
};
f.Ka = function(a, b, c, d, e, g, h, k, l) {
  return this.m.Ka ? this.m.Ka(a, b, c, d, e, g, h, k, l) : this.m.call(null, a, b, c, d, e, g, h, k, l);
};
f.ya = function(a, b, c, d, e, g, h, k, l, m) {
  return this.m.ya ? this.m.ya(a, b, c, d, e, g, h, k, l, m) : this.m.call(null, a, b, c, d, e, g, h, k, l, m);
};
f.za = function(a, b, c, d, e, g, h, k, l, m, n) {
  return this.m.za ? this.m.za(a, b, c, d, e, g, h, k, l, m, n) : this.m.call(null, a, b, c, d, e, g, h, k, l, m, n);
};
f.Aa = function(a, b, c, d, e, g, h, k, l, m, n, r) {
  return this.m.Aa ? this.m.Aa(a, b, c, d, e, g, h, k, l, m, n, r) : this.m.call(null, a, b, c, d, e, g, h, k, l, m, n, r);
};
f.Ba = function(a, b, c, d, e, g, h, k, l, m, n, r, s) {
  return this.m.Ba ? this.m.Ba(a, b, c, d, e, g, h, k, l, m, n, r, s) : this.m.call(null, a, b, c, d, e, g, h, k, l, m, n, r, s);
};
f.Ca = function(a, b, c, d, e, g, h, k, l, m, n, r, s, x) {
  return this.m.Ca ? this.m.Ca(a, b, c, d, e, g, h, k, l, m, n, r, s, x) : this.m.call(null, a, b, c, d, e, g, h, k, l, m, n, r, s, x);
};
f.Da = function(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y) {
  return this.m.Da ? this.m.Da(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y) : this.m.call(null, a, b, c, d, e, g, h, k, l, m, n, r, s, x, y);
};
f.Ea = function(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C) {
  return this.m.Ea ? this.m.Ea(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C) : this.m.call(null, a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C);
};
f.Fa = function(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E) {
  return this.m.Fa ? this.m.Fa(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E) : this.m.call(null, a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E);
};
f.Ga = function(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H) {
  return this.m.Ga ? this.m.Ga(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H) : this.m.call(null, a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H);
};
f.Ha = function(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P) {
  return this.m.Ha ? this.m.Ha(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P) : this.m.call(null, a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P);
};
f.Ia = function(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U) {
  return this.m.Ia ? this.m.Ia(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U) : this.m.call(null, a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U);
};
f.Nb = function(a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U, fa) {
  var Ga = this.m;
  return R.pb ? R.pb(Ga, a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U, fa) : R.call(null, Ga, a, b, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U, fa);
};
f.Kb = !0;
f.N = function(a, b) {
  return new mc(this.m, b);
};
f.K = function() {
  return this.meta;
};
function nc(a, b) {
  return lc(a) && !(a ? a.n & 262144 || a.hc || (a.n ? 0 : u($a, a)) : u($a, a)) ? new mc(a, b) : null == a ? null : ab(a, b);
}
function oc(a) {
  var b = null != a;
  return(b ? a ? a.n & 131072 || a.Qb || (a.n ? 0 : u(Xa, a)) : u(Xa, a) : b) ? Za(a) : null;
}
function pc(a) {
  return null == a ? !1 : a ? a.n & 4096 || a.fc ? !0 : a.n ? !1 : u(Sa, a) : u(Sa, a);
}
function qc(a) {
  return null == a ? !1 : a ? a.n & 1024 || a.Ob ? !0 : a.n ? !1 : u(Ma, a) : u(Ma, a);
}
function rc(a) {
  return a ? a.n & 16384 || a.gc ? !0 : a.n ? !1 : u(Ua, a) : u(Ua, a);
}
function sc(a) {
  return a ? a.B & 512 || a.bc ? !0 : !1 : !1;
}
function tc(a) {
  var b = [];
  ea(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function uc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
function vc(a, b, c, d, e) {
  b += e - 1;
  for (d += e - 1;0 !== e;) {
    c[d] = a[b], d -= 1, e -= 1, b -= 1;
  }
}
var wc = {};
function xc(a) {
  return t(a) ? !0 : !1;
}
function yc(a, b) {
  return O.i(a, b, wc) === wc ? !1 : !0;
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
  if (ra(a) === ra(b)) {
    return a && (a.B & 2048 || a.nb) ? a.ob(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  throw Error("compare on non-nil objects of different types");
}
var zc = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = Pb(N.e(a, h), N.e(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var g = M(a), h = M(b);
    return g < h ? -1 : g > h ? 1 : c.t(a, b, g, 0);
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
  c.e = b;
  c.t = a;
  return c;
}(), Bc = function() {
  function a(a, b, c) {
    for (c = D(c);;) {
      if (c) {
        var h = F(c);
        b = a.e ? a.e(b, h) : a.call(null, b, h);
        if (Xb(b)) {
          return Wa(b);
        }
        c = J(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = D(b);
    if (c) {
      var h = F(c), c = J(c);
      return Ac.i ? Ac.i(a, h, c) : Ac.call(null, a, h, c);
    }
    return a.D ? a.D() : a.call(null);
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
  c.e = b;
  c.i = a;
  return c;
}(), Ac = function() {
  function a(a, b, c) {
    return c && (c.n & 524288 || c.Sb) ? c.aa(null, a, b) : c instanceof Array ? $b.i(c, a, b) : "string" === typeof c ? $b.i(c, a, b) : u(bb, c) ? cb.i(c, a, b) : Bc.i(a, b, c);
  }
  function b(a, b) {
    return b && (b.n & 524288 || b.Sb) ? b.$(null, a) : b instanceof Array ? $b.e(b, a) : "string" === typeof b ? $b.e(b, a) : u(bb, b) ? cb.e(b, a) : Bc.e(a, b);
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
  c.e = b;
  c.i = a;
  return c;
}();
function Cc(a) {
  return a;
}
var Dc = function() {
  function a(a, b, c, h) {
    a = a.f ? a.f(b) : a.call(null, b);
    c = Ac.i(a, c, h);
    return a.f ? a.f(c) : a.call(null, c);
  }
  function b(a, b, g) {
    return c.t(a, b, b.D ? b.D() : b.call(null), g);
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
  c.i = b;
  c.t = a;
  return c;
}();
function Ec(a) {
  return a - 1;
}
function Fc(a) {
  return 0 <= a ? Math.floor.f ? Math.floor.f(a) : Math.floor.call(null, a) : Math.ceil.f ? Math.ceil.f(a) : Math.ceil.call(null, a);
}
function Gc(a, b) {
  return(a % b + b) % b;
}
function Hc(a) {
  return Fc((a - a % 2) / 2);
}
var Ic = function() {
  function a(a) {
    return a * c.D();
  }
  function b() {
    return Math.random.D ? Math.random.D() : Math.random.call(null);
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
  c.D = b;
  c.f = a;
  return c;
}();
function Jc(a) {
  return Fc(Ic.f(a));
}
function Kc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var w = function() {
  function a(a) {
    return null == a ? "" : "" + a;
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = K(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new ga(b.f(a)), l = d;;) {
        if (t(l)) {
          e = e.append(b.f(F(l))), l = J(l);
        } else {
          return e.toString();
        }
      }
    }
    a.C = 1;
    a.s = function(a) {
      var b = F(a);
      a = G(a);
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
        return c.p(b, K(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 1;
  b.s = c.s;
  b.D = function() {
    return "";
  };
  b.f = a;
  b.p = c.p;
  return b;
}();
function dc(a, b) {
  var c;
  if (b ? b.n & 16777216 || b.ec || (b.n ? 0 : u(ib, b)) : u(ib, b)) {
    if (ac(a) && ac(b) && M(a) !== M(b)) {
      c = !1;
    } else {
      a: {
        c = D(a);
        for (var d = D(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && Ob.e(F(c), F(d))) {
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
  return xc(c);
}
function Lc(a) {
  var b = 0;
  for (a = D(a);;) {
    if (a) {
      var c = F(a), b = (b + (Kb(function() {
        var a = c;
        return Nc.f ? Nc.f(a) : Nc.call(null, a);
      }()) ^ Kb(function() {
        var a = c;
        return Oc.f ? Oc.f(a) : Oc.call(null, a);
      }()))) % 4503599627370496;
      a = J(a);
    } else {
      return b;
    }
  }
}
function Pc(a, b, c, d, e) {
  this.meta = a;
  this.first = b;
  this.Pa = c;
  this.count = d;
  this.o = e;
  this.n = 65937646;
  this.B = 8192;
}
f = Pc.prototype;
f.toString = function() {
  return Bb(this);
};
f.K = function() {
  return this.meta;
};
f.ia = function() {
  return 1 === this.count ? null : this.Pa;
};
f.O = function() {
  return this.count;
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return Sb;
};
f.$ = function(a, b) {
  return Bc.e(b, this);
};
f.aa = function(a, b, c) {
  return Bc.i(b, c, this);
};
f.ba = function() {
  return this.first;
};
f.ja = function() {
  return 1 === this.count ? Sb : this.Pa;
};
f.M = function() {
  return this;
};
f.N = function(a, b) {
  return new Pc(b, this.first, this.Pa, this.count, this.o);
};
f.L = function(a, b) {
  return new Pc(this.meta, b, this, this.count + 1, null);
};
function Qc(a) {
  this.meta = a;
  this.n = 65937614;
  this.B = 8192;
}
f = Qc.prototype;
f.toString = function() {
  return Bb(this);
};
f.K = function() {
  return this.meta;
};
f.ia = function() {
  return null;
};
f.O = function() {
  return 0;
};
f.I = function() {
  return 0;
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return this;
};
f.$ = function(a, b) {
  return Bc.e(b, this);
};
f.aa = function(a, b, c) {
  return Bc.i(b, c, this);
};
f.ba = function() {
  return null;
};
f.ja = function() {
  return Sb;
};
f.M = function() {
  return null;
};
f.N = function(a, b) {
  return new Qc(b);
};
f.L = function(a, b) {
  return new Pc(this.meta, b, null, 1, null);
};
var Sb = new Qc(null), Rc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Rb && 0 === a.A) {
      b = a.k;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.ba(null)), a = a.ia(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = Sb;;) {
      if (0 < a) {
        var g = a - 1, e = e.L(null, b[a - 1]);
        a = g;
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
function Sc(a, b, c, d) {
  this.meta = a;
  this.first = b;
  this.Pa = c;
  this.o = d;
  this.n = 65929452;
  this.B = 8192;
}
f = Sc.prototype;
f.toString = function() {
  return Bb(this);
};
f.K = function() {
  return this.meta;
};
f.ia = function() {
  return null == this.Pa ? null : D(this.Pa);
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return nc(Sb, this.meta);
};
f.$ = function(a, b) {
  return Bc.e(b, this);
};
f.aa = function(a, b, c) {
  return Bc.i(b, c, this);
};
f.ba = function() {
  return this.first;
};
f.ja = function() {
  return null == this.Pa ? Sb : this.Pa;
};
f.M = function() {
  return this;
};
f.N = function(a, b) {
  return new Sc(b, this.first, this.Pa, this.o);
};
f.L = function(a, b) {
  return new Sc(null, b, this, this.o);
};
function L(a, b) {
  var c = null == b;
  return(c ? c : b && (b.n & 64 || b.gb)) ? new Sc(null, a, b, null) : new Sc(null, a, D(b), null);
}
function S(a, b, c, d) {
  this.va = a;
  this.name = b;
  this.U = c;
  this.Ya = d;
  this.n = 2153775105;
  this.B = 4096;
}
f = S.prototype;
f.H = function(a, b) {
  return B(b, ":" + w.f(this.U));
};
f.I = function() {
  var a = this.Ya;
  return null != a ? a : this.Ya = a = Lb(Gb(this.name), Jb(this.va)) + 2654435769 | 0;
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return O.e(c, this);
      case 3:
        return O.i(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.e = function(a, c) {
    return O.e(c, this);
  };
  a.i = function(a, c, d) {
    return O.i(c, this, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
f.f = function(a) {
  return O.e(a, this);
};
f.e = function(a, b) {
  return O.i(a, this, b);
};
f.F = function(a, b) {
  return b instanceof S ? this.U === b.U : !1;
};
f.toString = function() {
  return ":" + w.f(this.U);
};
function T(a, b) {
  return a === b ? !0 : a instanceof S && b instanceof S ? a.U === b.U : !1;
}
var Uc = function() {
  function a(a, b) {
    return new S(a, b, "" + w.f(t(a) ? "" + w.f(a) + "/" : null) + w.f(b), null);
  }
  function b(a) {
    if (a instanceof S) {
      return a;
    }
    if (a instanceof Qb) {
      var b;
      if (a && (a.B & 4096 || a.Rb)) {
        b = a.va;
      } else {
        throw Error("Doesn't support namespace: " + w.f(a));
      }
      return new S(b, Tc.f ? Tc.f(a) : Tc.call(null, a), a.Ua, null);
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
function Vc(a, b, c, d) {
  this.meta = a;
  this.bb = b;
  this.T = c;
  this.o = d;
  this.B = 0;
  this.n = 32374988;
}
f = Vc.prototype;
f.toString = function() {
  return Bb(this);
};
function Wc(a) {
  null != a.bb && (a.T = a.bb.D ? a.bb.D() : a.bb.call(null), a.bb = null);
  return a.T;
}
f.K = function() {
  return this.meta;
};
f.ia = function() {
  hb(this);
  return null == this.T ? null : J(this.T);
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return nc(Sb, this.meta);
};
f.$ = function(a, b) {
  return Bc.e(b, this);
};
f.aa = function(a, b, c) {
  return Bc.i(b, c, this);
};
f.ba = function() {
  hb(this);
  return null == this.T ? null : F(this.T);
};
f.ja = function() {
  hb(this);
  return null != this.T ? G(this.T) : Sb;
};
f.M = function() {
  Wc(this);
  if (null == this.T) {
    return null;
  }
  for (var a = this.T;;) {
    if (a instanceof Vc) {
      a = Wc(a);
    } else {
      return this.T = a, D(this.T);
    }
  }
};
f.N = function(a, b) {
  return new Vc(b, this.bb, this.T, this.o);
};
f.L = function(a, b) {
  return L(b, this);
};
function Xc(a, b) {
  this.tb = a;
  this.end = b;
  this.B = 0;
  this.n = 2;
}
Xc.prototype.O = function() {
  return this.end;
};
Xc.prototype.add = function(a) {
  this.tb[this.end] = a;
  return this.end += 1;
};
Xc.prototype.S = function() {
  var a = new Yc(this.tb, 0, this.end);
  this.tb = null;
  return a;
};
function Zc(a) {
  return new Xc(Array(a), 0);
}
function Yc(a, b, c) {
  this.k = a;
  this.off = b;
  this.end = c;
  this.B = 0;
  this.n = 524306;
}
f = Yc.prototype;
f.$ = function(a, b) {
  return $b.t(this.k, b, this.k[this.off], this.off + 1);
};
f.aa = function(a, b, c) {
  return $b.t(this.k, b, c, this.off);
};
f.Db = function() {
  if (this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Yc(this.k, this.off + 1, this.end);
};
f.Y = function(a, b) {
  return this.k[this.off + b];
};
f.ka = function(a, b, c) {
  return 0 <= b && b < this.end - this.off ? this.k[this.off + b] : c;
};
f.O = function() {
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
  d.e = b;
  d.i = a;
  return d;
}();
function ad(a, b, c, d) {
  this.S = a;
  this.wa = b;
  this.meta = c;
  this.o = d;
  this.n = 31850732;
  this.B = 1536;
}
f = ad.prototype;
f.toString = function() {
  return Bb(this);
};
f.K = function() {
  return this.meta;
};
f.ia = function() {
  if (1 < xa(this.S)) {
    return new ad(sb(this.S), this.wa, this.meta, null);
  }
  var a = hb(this.wa);
  return null == a ? null : a;
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return nc(Sb, this.meta);
};
f.ba = function() {
  return z.e(this.S, 0);
};
f.ja = function() {
  return 1 < xa(this.S) ? new ad(sb(this.S), this.wa, this.meta, null) : null == this.wa ? Sb : this.wa;
};
f.M = function() {
  return this;
};
f.wb = function() {
  return this.S;
};
f.xb = function() {
  return null == this.wa ? Sb : this.wa;
};
f.N = function(a, b) {
  return new ad(this.S, this.wa, b, this.o);
};
f.L = function(a, b) {
  return L(b, this);
};
f.vb = function() {
  return null == this.wa ? null : this.wa;
};
function bd(a, b) {
  return 0 === xa(a) ? b : new ad(a, b, null, null);
}
function cd(a, b) {
  a.add(b);
}
function dd(a) {
  for (var b = [];;) {
    if (D(a)) {
      b.push(F(a)), a = J(a);
    } else {
      return b;
    }
  }
}
function ed(a, b) {
  if (ac(a)) {
    return M(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && D(c)) {
      c = J(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var gd = function fd(b) {
  return null == b ? null : null == J(b) ? D(F(b)) : L(F(b), fd(J(b)));
}, V = function() {
  function a(a, b) {
    return new Vc(null, function() {
      var c = D(a);
      return c ? sc(c) ? bd(tb(c), d.e(ub(c), b)) : L(F(c), d.e(G(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new Vc(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new Vc(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var g = null;
      2 < arguments.length && (g = K(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, g);
    }
    function b(a, c, e) {
      return function r(a, b) {
        return new Vc(null, function() {
          var c = D(a);
          return c ? sc(c) ? bd(tb(c), r(ub(c), b)) : L(F(c), r(G(c), b)) : t(b) ? r(F(b), J(b)) : null;
        }, null, null);
      }(d.e(a, c), e);
    }
    a.C = 2;
    a.s = function(a) {
      var c = F(a);
      a = J(a);
      var d = F(a);
      a = G(a);
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
        return e.p(d, h, K(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.C = 2;
  d.s = e.s;
  d.D = c;
  d.f = b;
  d.e = a;
  d.p = e.p;
  return d;
}(), hd = function() {
  function a(a, b, c, d) {
    return L(a, L(b, L(c, d)));
  }
  function b(a, b, c) {
    return L(a, L(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, n) {
      var r = null;
      4 < arguments.length && (r = K(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, r);
    }
    function b(a, c, d, e, g) {
      return L(a, L(c, L(d, L(e, gd(g)))));
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
      a = G(a);
      return b(c, d, e, n, a);
    };
    a.p = b;
    return a;
  }(), c = function(c, g, h, k, l) {
    switch(arguments.length) {
      case 1:
        return D(c);
      case 2:
        return L(c, g);
      case 3:
        return b.call(this, c, g, h);
      case 4:
        return a.call(this, c, g, h, k);
      default:
        return d.p(c, g, h, k, K(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.C = 4;
  c.s = d.s;
  c.f = function(a) {
    return D(a);
  };
  c.e = function(a, b) {
    return L(a, b);
  };
  c.i = b;
  c.t = a;
  c.p = d.p;
  return c;
}(), id = function() {
  function a() {
    return nb(fc);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = ob(a, c), t(d)) {
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
      a = G(a);
      return b(c, d, a);
    };
    a.p = b;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 0:
        return a.call(this);
      case 1:
        return b;
      case 2:
        return ob(b, e);
      default:
        return c.p(b, e, K(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.s = c.s;
  b.D = a;
  b.f = function(a) {
    return a;
  };
  b.e = function(a, b) {
    return ob(a, b);
  };
  b.p = c.p;
  return b;
}(), jd = function() {
  var a = null, b = function() {
    function a(c, g, h, k) {
      var l = null;
      3 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, g, h, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = qb(a, c, d), t(k)) {
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
      a = G(a);
      return b(c, h, k, a);
    };
    a.p = b;
    return a;
  }(), a = function(a, d, e, g) {
    switch(arguments.length) {
      case 3:
        return qb(a, d, e);
      default:
        return b.p(a, d, e, K(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.C = 3;
  a.s = b.s;
  a.i = function(a, b, e) {
    return qb(a, b, e);
  };
  a.p = b.p;
  return a;
}();
function kd(a, b, c) {
  var d = D(c);
  if (0 === b) {
    return a.D ? a.D() : a.call(null);
  }
  c = Da(d);
  var e = Ea(d);
  if (1 === b) {
    return a.f ? a.f(c) : a.f ? a.f(c) : a.call(null, c);
  }
  var d = Da(e), g = Ea(e);
  if (2 === b) {
    return a.e ? a.e(c, d) : a.e ? a.e(c, d) : a.call(null, c, d);
  }
  var e = Da(g), h = Ea(g);
  if (3 === b) {
    return a.i ? a.i(c, d, e) : a.i ? a.i(c, d, e) : a.call(null, c, d, e);
  }
  var g = Da(h), k = Ea(h);
  if (4 === b) {
    return a.t ? a.t(c, d, e, g) : a.t ? a.t(c, d, e, g) : a.call(null, c, d, e, g);
  }
  var h = Da(k), l = Ea(k);
  if (5 === b) {
    return a.P ? a.P(c, d, e, g, h) : a.P ? a.P(c, d, e, g, h) : a.call(null, c, d, e, g, h);
  }
  var k = Da(l), m = Ea(l);
  if (6 === b) {
    return a.ha ? a.ha(c, d, e, g, h, k) : a.ha ? a.ha(c, d, e, g, h, k) : a.call(null, c, d, e, g, h, k);
  }
  var l = Da(m), n = Ea(m);
  if (7 === b) {
    return a.na ? a.na(c, d, e, g, h, k, l) : a.na ? a.na(c, d, e, g, h, k, l) : a.call(null, c, d, e, g, h, k, l);
  }
  var m = Da(n), r = Ea(n);
  if (8 === b) {
    return a.Ja ? a.Ja(c, d, e, g, h, k, l, m) : a.Ja ? a.Ja(c, d, e, g, h, k, l, m) : a.call(null, c, d, e, g, h, k, l, m);
  }
  var n = Da(r), s = Ea(r);
  if (9 === b) {
    return a.Ka ? a.Ka(c, d, e, g, h, k, l, m, n) : a.Ka ? a.Ka(c, d, e, g, h, k, l, m, n) : a.call(null, c, d, e, g, h, k, l, m, n);
  }
  var r = Da(s), x = Ea(s);
  if (10 === b) {
    return a.ya ? a.ya(c, d, e, g, h, k, l, m, n, r) : a.ya ? a.ya(c, d, e, g, h, k, l, m, n, r) : a.call(null, c, d, e, g, h, k, l, m, n, r);
  }
  var s = Da(x), y = Ea(x);
  if (11 === b) {
    return a.za ? a.za(c, d, e, g, h, k, l, m, n, r, s) : a.za ? a.za(c, d, e, g, h, k, l, m, n, r, s) : a.call(null, c, d, e, g, h, k, l, m, n, r, s);
  }
  var x = Da(y), C = Ea(y);
  if (12 === b) {
    return a.Aa ? a.Aa(c, d, e, g, h, k, l, m, n, r, s, x) : a.Aa ? a.Aa(c, d, e, g, h, k, l, m, n, r, s, x) : a.call(null, c, d, e, g, h, k, l, m, n, r, s, x);
  }
  var y = Da(C), E = Ea(C);
  if (13 === b) {
    return a.Ba ? a.Ba(c, d, e, g, h, k, l, m, n, r, s, x, y) : a.Ba ? a.Ba(c, d, e, g, h, k, l, m, n, r, s, x, y) : a.call(null, c, d, e, g, h, k, l, m, n, r, s, x, y);
  }
  var C = Da(E), H = Ea(E);
  if (14 === b) {
    return a.Ca ? a.Ca(c, d, e, g, h, k, l, m, n, r, s, x, y, C) : a.Ca ? a.Ca(c, d, e, g, h, k, l, m, n, r, s, x, y, C) : a.call(null, c, d, e, g, h, k, l, m, n, r, s, x, y, C);
  }
  var E = Da(H), P = Ea(H);
  if (15 === b) {
    return a.Da ? a.Da(c, d, e, g, h, k, l, m, n, r, s, x, y, C, E) : a.Da ? a.Da(c, d, e, g, h, k, l, m, n, r, s, x, y, C, E) : a.call(null, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E);
  }
  var H = Da(P), U = Ea(P);
  if (16 === b) {
    return a.Ea ? a.Ea(c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H) : a.Ea ? a.Ea(c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H) : a.call(null, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H);
  }
  var P = Da(U), fa = Ea(U);
  if (17 === b) {
    return a.Fa ? a.Fa(c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P) : a.Fa ? a.Fa(c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P) : a.call(null, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P);
  }
  var U = Da(fa), Ga = Ea(fa);
  if (18 === b) {
    return a.Ga ? a.Ga(c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U) : a.Ga ? a.Ga(c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U) : a.call(null, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U);
  }
  fa = Da(Ga);
  Ga = Ea(Ga);
  if (19 === b) {
    return a.Ha ? a.Ha(c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U, fa) : a.Ha ? a.Ha(c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U, fa) : a.call(null, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U, fa);
  }
  var I = Da(Ga);
  Ea(Ga);
  if (20 === b) {
    return a.Ia ? a.Ia(c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U, fa, I) : a.Ia ? a.Ia(c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U, fa, I) : a.call(null, c, d, e, g, h, k, l, m, n, r, s, x, y, C, E, H, P, U, fa, I);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var R = function() {
  function a(a, b, c, d, e) {
    b = hd.t(b, c, d, e);
    c = a.C;
    return a.s ? (d = ed(b, c + 1), d <= c ? kd(a, d, b) : a.s(b)) : a.apply(a, dd(b));
  }
  function b(a, b, c, d) {
    b = hd.i(b, c, d);
    c = a.C;
    return a.s ? (d = ed(b, c + 1), d <= c ? kd(a, d, b) : a.s(b)) : a.apply(a, dd(b));
  }
  function c(a, b, c) {
    b = hd.e(b, c);
    c = a.C;
    if (a.s) {
      var d = ed(b, c + 1);
      return d <= c ? kd(a, d, b) : a.s(b);
    }
    return a.apply(a, dd(b));
  }
  function d(a, b) {
    var c = a.C;
    if (a.s) {
      var d = ed(b, c + 1);
      return d <= c ? kd(a, d, b) : a.s(b);
    }
    return a.apply(a, dd(b));
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, x) {
      var y = null;
      5 < arguments.length && (y = K(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, g, h, y);
    }
    function b(a, c, d, e, g, h) {
      c = L(c, L(d, L(e, L(g, gd(h)))));
      d = a.C;
      return a.s ? (e = ed(c, d + 1), e <= d ? kd(a, e, c) : a.s(c)) : a.apply(a, dd(c));
    }
    a.C = 5;
    a.s = function(a) {
      var c = F(a);
      a = J(a);
      var d = F(a);
      a = J(a);
      var e = F(a);
      a = J(a);
      var g = F(a);
      a = J(a);
      var h = F(a);
      a = G(a);
      return b(c, d, e, g, h, a);
    };
    a.p = b;
    return a;
  }(), e = function(e, k, l, m, n, r) {
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
        return g.p(e, k, l, m, n, K(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.C = 5;
  e.s = g.s;
  e.e = d;
  e.i = c;
  e.t = b;
  e.P = a;
  e.p = g.p;
  return e;
}();
function ld(a) {
  return D(a) ? a : null;
}
function md(a, b) {
  for (;;) {
    if (null == D(b)) {
      return!0;
    }
    var c;
    c = F(b);
    c = a.f ? a.f(c) : a.call(null, c);
    if (t(c)) {
      c = a;
      var d = J(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
var nd = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = K(Array.prototype.slice.call(arguments, 0), 0));
        return n.call(this, b);
      }
      function n(e) {
        return R.P(a, b, c, d, e);
      }
      e.C = 0;
      e.s = function(a) {
        a = D(a);
        return n(a);
      };
      e.p = n;
      return e;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = K(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return R.t(a, b, c, d);
      }
      d.C = 0;
      d.s = function(a) {
        a = D(a);
        return e(a);
      };
      d.p = e;
      return d;
    }();
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = null;
        0 < arguments.length && (b = K(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return R.i(a, b, c);
      }
      c.C = 0;
      c.s = function(a) {
        a = D(a);
        return d(a);
      };
      c.p = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, g, r) {
      var s = null;
      4 < arguments.length && (s = K(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, s);
    }
    function b(a, c, d, e, g) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = K(Array.prototype.slice.call(arguments, 0), 0));
          return h.call(this, c);
        }
        function h(b) {
          return R.P(a, c, d, e, V.e(g, b));
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
      var c = F(a);
      a = J(a);
      var d = F(a);
      a = J(a);
      var e = F(a);
      a = J(a);
      var g = F(a);
      a = G(a);
      return b(c, d, e, g, a);
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
        return e.p(d, h, k, l, K(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.C = 4;
  d.s = e.s;
  d.f = function(a) {
    return a;
  };
  d.e = c;
  d.i = b;
  d.t = a;
  d.p = e.p;
  return d;
}();
function od(a, b, c, d) {
  this.state = a;
  this.meta = b;
  this.ac = c;
  this.Jb = d;
  this.n = 6455296;
  this.B = 16386;
}
f = od.prototype;
f.I = function() {
  return this[ba] || (this[ba] = ++ca);
};
f.Hb = function(a, b, c) {
  for (var d = D(this.Jb), e = null, g = 0, h = 0;;) {
    if (h < g) {
      a = e.Y(null, h);
      var k = N.i(a, 0, null);
      a = N.i(a, 1, null);
      var l = b, m = c;
      a.t ? a.t(k, this, l, m) : a.call(null, k, this, l, m);
      h += 1;
    } else {
      if (a = D(d)) {
        d = a, sc(d) ? (e = tb(d), d = ub(d), a = e, g = M(e), e = a) : (a = F(d), k = N.i(a, 0, null), a = N.i(a, 1, null), e = k, g = b, h = c, a.t ? a.t(e, this, g, h) : a.call(null, e, this, g, h), d = J(d), e = null, g = 0), h = 0;
      } else {
        return null;
      }
    }
  }
};
f.K = function() {
  return this.meta;
};
f.yb = function() {
  return this.state;
};
f.F = function(a, b) {
  return this === b;
};
var rd = function() {
  function a(a) {
    return new od(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = K(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = (null == c ? 0 : c ? c.n & 64 || c.gb || (c.n ? 0 : u(Ca, c)) : u(Ca, c)) ? R.e(pd, c) : c, e = O.e(d, qd), d = O.e(d, na);
      return new od(a, d, e, null);
    }
    a.C = 1;
    a.s = function(a) {
      var c = F(a);
      a = G(a);
      return b(c, a);
    };
    a.p = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.p(b, K(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 1;
  b.s = c.s;
  b.f = a;
  b.p = c.p;
  return b;
}();
function sd(a, b) {
  if (a instanceof od) {
    var c = a.ac;
    if (null != c && !t(c.f ? c.f(b) : c.call(null, b))) {
      throw Error("Assert failed: Validator rejected reference state\n" + w.f(function() {
        var a = Rc(new Qb(null, "validate", "validate", 1439230700, null), new Qb(null, "new-value", "new-value", -1567397401, null));
        return td.f ? td.f(a) : td.call(null, a);
      }()));
    }
    c = a.state;
    a.state = b;
    null != a.Jb && mb(a, c, b);
    return b;
  }
  return xb(a, b);
}
var ud = function() {
  function a(a, b, c, d) {
    if (a instanceof od) {
      var e = a.state;
      b = b.i ? b.i(e, c, d) : b.call(null, e, c, d);
      a = sd(a, b);
    } else {
      a = yb.t(a, b, c, d);
    }
    return a;
  }
  function b(a, b, c) {
    if (a instanceof od) {
      var d = a.state;
      b = b.e ? b.e(d, c) : b.call(null, d, c);
      a = sd(a, b);
    } else {
      a = yb.i(a, b, c);
    }
    return a;
  }
  function c(a, b) {
    var c;
    a instanceof od ? (c = a.state, c = b.f ? b.f(c) : b.call(null, c), c = sd(a, c)) : c = yb.e(a, b);
    return c;
  }
  var d = null, e = function() {
    function a(c, d, e, g, r) {
      var s = null;
      4 < arguments.length && (s = K(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, s);
    }
    function b(a, c, d, e, g) {
      return a instanceof od ? sd(a, R.P(c, a.state, d, e, g)) : yb.P(a, c, d, e, g);
    }
    a.C = 4;
    a.s = function(a) {
      var c = F(a);
      a = J(a);
      var d = F(a);
      a = J(a);
      var e = F(a);
      a = J(a);
      var g = F(a);
      a = G(a);
      return b(c, d, e, g, a);
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
        return e.p(d, h, k, l, K(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.C = 4;
  d.s = e.s;
  d.e = c;
  d.i = b;
  d.t = a;
  d.p = e.p;
  return d;
}(), vd = function() {
  function a(a, b, c, d) {
    return new Vc(null, function() {
      var g = D(b), r = D(c), s = D(d);
      if (g && r && s) {
        var x = L, y;
        y = F(g);
        var C = F(r), E = F(s);
        y = a.i ? a.i(y, C, E) : a.call(null, y, C, E);
        g = x(y, e.t(a, G(g), G(r), G(s)));
      } else {
        g = null;
      }
      return g;
    }, null, null);
  }
  function b(a, b, c) {
    return new Vc(null, function() {
      var d = D(b), g = D(c);
      if (d && g) {
        var r = L, s;
        s = F(d);
        var x = F(g);
        s = a.e ? a.e(s, x) : a.call(null, s, x);
        d = r(s, e.i(a, G(d), G(g)));
      } else {
        d = null;
      }
      return d;
    }, null, null);
  }
  function c(a, b) {
    return new Vc(null, function() {
      var c = D(b);
      if (c) {
        if (sc(c)) {
          for (var d = tb(c), g = M(d), r = Zc(g), s = 0;;) {
            if (s < g) {
              cd(r, function() {
                var b = z.e(d, s);
                return a.f ? a.f(b) : a.call(null, b);
              }()), s += 1;
            } else {
              break;
            }
          }
          return bd(r.S(), e.e(a, ub(c)));
        }
        return L(function() {
          var b = F(c);
          return a.f ? a.f(b) : a.call(null, b);
        }(), e.e(a, G(c)));
      }
      return null;
    }, null, null);
  }
  function d(a) {
    return function(b) {
      return function() {
        function c(d, e) {
          var g = a.f ? a.f(e) : a.call(null, e);
          return b.e ? b.e(d, g) : b.call(null, d, g);
        }
        function d(a) {
          return b.f ? b.f(a) : b.call(null, a);
        }
        function e() {
          return b.D ? b.D() : b.call(null);
        }
        var g = null, s = function() {
          function c(a, b, e) {
            var g = null;
            2 < arguments.length && (g = K(Array.prototype.slice.call(arguments, 2), 0));
            return d.call(this, a, b, g);
          }
          function d(c, e, g) {
            e = R.i(a, e, g);
            return b.e ? b.e(c, e) : b.call(null, c, e);
          }
          c.C = 2;
          c.s = function(a) {
            var b = F(a);
            a = J(a);
            var c = F(a);
            a = G(a);
            return d(b, c, a);
          };
          c.p = d;
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
              return s.p(a, b, K(arguments, 2));
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        g.C = 2;
        g.s = s.s;
        g.D = e;
        g.f = d;
        g.e = c;
        g.p = s.p;
        return g;
      }();
    };
  }
  var e = null, g = function() {
    function a(c, d, e, g, h) {
      var x = null;
      4 < arguments.length && (x = K(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, x);
    }
    function b(a, c, d, g, h) {
      var k = function C(a) {
        return new Vc(null, function() {
          var b = e.e(D, a);
          return md(Cc, b) ? L(e.e(F, b), C(e.e(G, b))) : null;
        }, null, null);
      };
      return e.e(function() {
        return function(b) {
          return R.e(a, b);
        };
      }(k), k(gc.p(h, g, K([d, c], 0))));
    }
    a.C = 4;
    a.s = function(a) {
      var c = F(a);
      a = J(a);
      var d = F(a);
      a = J(a);
      var e = F(a);
      a = J(a);
      var g = F(a);
      a = G(a);
      return b(c, d, e, g, a);
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
        return g.p(e, k, l, m, K(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.C = 4;
  e.s = g.s;
  e.f = d;
  e.e = c;
  e.i = b;
  e.t = a;
  e.p = g.p;
  return e;
}(), xd = function() {
  function a(a, b) {
    return new Vc(null, function() {
      if (0 < a) {
        var g = D(b);
        return g ? L(F(g), c.e(a - 1, G(g))) : null;
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, h) {
            var k = Wa(a), l = ud.e(a, Ec), k = 0 < k ? b.e ? b.e(d, h) : b.call(null, d, h) : d;
            return 0 < l ? k : new Wb(k);
          }
          function d(a) {
            return b.f ? b.f(a) : b.call(null, a);
          }
          function l() {
            return b.D ? b.D() : b.call(null);
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
          m.D = l;
          m.f = d;
          m.e = c;
          return m;
        }();
      }(rd.f(a));
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
    return new Vc(null, function(c) {
      return function() {
        return c(a, b);
      };
    }(function(a, b) {
      for (;;) {
        var c = D(b);
        if (0 < a && c) {
          var d = a - 1, c = G(c);
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
            ud.e(a, Ec);
            return 0 < k ? d : b.e ? b.e(d, h) : b.call(null, d, h);
          }
          function d(a) {
            return b.f ? b.f(a) : b.call(null, a);
          }
          function l() {
            return b.D ? b.D() : b.call(null);
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
          m.D = l;
          m.f = d;
          m.e = c;
          return m;
        }();
      }(rd.f(a));
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
    return new Vc(null, function() {
      return L(a, c.f(a));
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
}(), Ad = function() {
  function a(a, b) {
    return xd.e(a, c.f(b));
  }
  function b(a) {
    return new Vc(null, function() {
      return L(a.D ? a.D() : a.call(null), c.f(a));
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
  function a(a, c) {
    return new Vc(null, function() {
      var g = D(a), h = D(c);
      return g && h ? L(F(g), L(F(h), b.e(G(g), G(h)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return new Vc(null, function() {
        var c = vd.e(D, gc.p(e, d, K([a], 0)));
        return md(Cc, c) ? V.e(vd.e(F, c), R.e(b, vd.e(G, c))) : null;
      }, null, null);
    }
    a.C = 2;
    a.s = function(a) {
      var b = F(a);
      a = J(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a);
    };
    a.p = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.p(b, e, K(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.s = c.s;
  b.e = a;
  b.p = c.p;
  return b;
}();
function Cd(a, b) {
  return yd.e(1, Bd.e(zd.f(a), b));
}
var Dd = function() {
  function a(a, b) {
    return new Vc(null, function() {
      var g = D(b);
      if (g) {
        if (sc(g)) {
          for (var h = tb(g), k = M(h), l = Zc(k), m = 0;;) {
            if (m < k) {
              var n;
              n = z.e(h, m);
              n = a.f ? a.f(n) : a.call(null, n);
              t(n) && (n = z.e(h, m), l.add(n));
              m += 1;
            } else {
              break;
            }
          }
          return bd(l.S(), c.e(a, ub(g)));
        }
        h = F(g);
        g = G(g);
        return t(a.f ? a.f(h) : a.call(null, h)) ? L(h, c.e(a, g)) : c.e(a, g);
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function() {
        function c(g, h) {
          return t(a.f ? a.f(h) : a.call(null, h)) ? b.e ? b.e(g, h) : b.call(null, g, h) : g;
        }
        function h(a) {
          return b.f ? b.f(a) : b.call(null, a);
        }
        function k() {
          return b.D ? b.D() : b.call(null);
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
        l.D = k;
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
}(), Ed = function() {
  function a(a, b, c) {
    a && (a.B & 4 || a.Mb) ? (b = Dc.t(b, id, nb(a), c), b = pb(b), a = nc(b, oc(a))) : a = Dc.t(b, gc, a, c);
    return a;
  }
  function b(a, b) {
    var c;
    null != a ? a && (a.B & 4 || a.Mb) ? (c = Ac.i(ob, nb(a), b), c = pb(c), c = nc(c, oc(a))) : c = Ac.i(za, a, b) : c = Ac.i(gc, Sb, b);
    return c;
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
  c.e = b;
  c.i = a;
  return c;
}(), Fd = function() {
  function a(a, b, c) {
    var h = wc;
    for (b = D(b);;) {
      if (b) {
        var k = a;
        if (k ? k.n & 256 || k.Fb || (k.n ? 0 : u(Ia, k)) : u(Ia, k)) {
          a = O.i(a, F(b), h);
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
    return c.i(a, b, null);
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
  c.e = b;
  c.i = a;
  return c;
}();
function Gd(a, b) {
  this.Q = a;
  this.k = b;
}
function Hd(a) {
  return new Gd(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Id(a) {
  a = a.q;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Jd(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Hd(a);
    d.k[0] = c;
    c = d;
    b -= 5;
  }
}
var Ld = function Kd(b, c, d, e) {
  var g = new Gd(d.Q, ta(d.k)), h = b.q - 1 >>> c & 31;
  5 === c ? g.k[h] = e : (d = d.k[h], b = null != d ? Kd(b, c - 5, d, e) : Jd(null, c - 5, e), g.k[h] = b);
  return g;
};
function Md(a, b) {
  throw Error("No item " + w.f(a) + " in vector of length " + w.f(b));
}
function Nd(a, b) {
  if (b >= Id(a)) {
    return a.ga;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.k[b >>> d & 31], d = e
    } else {
      return c.k;
    }
  }
}
function Od(a, b) {
  return 0 <= b && b < a.q ? Nd(a, b) : Md(b, a.q);
}
var Qd = function Pd(b, c, d, e, g) {
  var h = new Gd(d.Q, ta(d.k));
  if (0 === c) {
    h.k[e & 31] = g;
  } else {
    var k = e >>> c & 31;
    b = Pd(b, c - 5, d.k[k], e, g);
    h.k[k] = b;
  }
  return h;
};
function Rd(a, b, c, d, e, g) {
  this.A = a;
  this.sb = b;
  this.k = c;
  this.v = d;
  this.start = e;
  this.end = g;
}
Rd.prototype.Cb = function() {
  return this.A < this.end;
};
Rd.prototype.next = function() {
  32 === this.A - this.sb && (this.k = Nd(this.v, this.A), this.sb += 32);
  var a = this.k[this.A & 31];
  this.A += 1;
  return a;
};
function W(a, b, c, d, e, g) {
  this.meta = a;
  this.q = b;
  this.shift = c;
  this.root = d;
  this.ga = e;
  this.o = g;
  this.n = 167668511;
  this.B = 8196;
}
f = W.prototype;
f.toString = function() {
  return Bb(this);
};
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  return "number" === typeof b ? z.i(this, b, c) : c;
};
f.Y = function(a, b) {
  return Od(this, b)[b & 31];
};
f.ka = function(a, b, c) {
  return 0 <= b && b < this.q ? Nd(this, b)[b & 31] : c;
};
f.Bb = function(a, b, c) {
  if (0 <= b && b < this.q) {
    return Id(this) <= b ? (a = ta(this.ga), a[b & 31] = c, new W(this.meta, this.q, this.shift, this.root, a, null)) : new W(this.meta, this.q, this.shift, Qd(this, this.shift, this.root, b, c), this.ga, null);
  }
  if (b === this.q) {
    return za(this, c);
  }
  throw Error("Index " + w.f(b) + " out of bounds  [0," + w.f(this.q) + "]");
};
f.qb = function() {
  var a = this.q;
  return new Rd(0, 0, 0 < M(this) ? Nd(this, 0) : null, this, 0, a);
};
f.K = function() {
  return this.meta;
};
f.O = function() {
  return this.q;
};
f.zb = function() {
  return z.e(this, 0);
};
f.Ab = function() {
  return z.e(this, 1);
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Ub(this);
};
f.F = function(a, b) {
  if (b instanceof W) {
    if (this.q === M(b)) {
      for (var c = zb(this), d = zb(b);;) {
        if (t(c.Cb())) {
          var e = c.next(), g = d.next();
          if (!Ob.e(e, g)) {
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
f.fb = function() {
  var a = this;
  return new Sd(a.q, a.shift, function() {
    var b = a.root;
    return Td.f ? Td.f(b) : Td.call(null, b);
  }(), function() {
    var b = a.ga;
    return Ud.f ? Ud.f(b) : Ud.call(null, b);
  }());
};
f.X = function() {
  return nc(fc, this.meta);
};
f.$ = function(a, b) {
  return Zb.e(this, b);
};
f.aa = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.q) {
      var e = Nd(this, a);
      c = e.length;
      a: {
        for (var g = 0;;) {
          if (g < c) {
            var h = e[g], d = b.e ? b.e(d, h) : b.call(null, d, h);
            if (Xb(d)) {
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
      if (Xb(e)) {
        return b = e, Yb.f ? Yb.f(b) : Yb.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
f.V = function(a, b, c) {
  if ("number" === typeof b) {
    return Va(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
f.M = function() {
  if (0 === this.q) {
    return null;
  }
  if (32 >= this.q) {
    return new Rb(this.ga, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.k[0];
      } else {
        a = a.k;
        break a;
      }
    }
    a = void 0;
  }
  return Vd.t ? Vd.t(this, a, 0, 0) : Vd.call(null, this, a, 0, 0);
};
f.N = function(a, b) {
  return new W(b, this.q, this.shift, this.root, this.ga, this.o);
};
f.L = function(a, b) {
  if (32 > this.q - Id(this)) {
    for (var c = this.ga.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.ga[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new W(this.meta, this.q + 1, this.shift, this.root, d, null);
  }
  c = (d = this.q >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Hd(null), d.k[0] = this.root, e = Jd(null, this.shift, new Gd(null, this.ga)), d.k[1] = e) : d = Ld(this, this.shift, this.root, new Gd(null, this.ga));
  return new W(this.meta, this.q + 1, c, d, [b], null);
};
f.call = function() {
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
  a.i = function(a, c, d) {
    return this.ka(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
f.f = function(a) {
  return this.Y(null, a);
};
f.e = function(a, b) {
  return this.ka(null, a, b);
};
var X = new Gd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), fc = new W(null, 0, 5, X, [], 0);
function Wd(a, b, c, d, e, g) {
  this.ma = a;
  this.Oa = b;
  this.A = c;
  this.off = d;
  this.meta = e;
  this.o = g;
  this.n = 32375020;
  this.B = 1536;
}
f = Wd.prototype;
f.toString = function() {
  return Bb(this);
};
f.K = function() {
  return this.meta;
};
f.ia = function() {
  if (this.off + 1 < this.Oa.length) {
    var a;
    a = this.ma;
    var b = this.Oa, c = this.A, d = this.off + 1;
    a = Vd.t ? Vd.t(a, b, c, d) : Vd.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return vb(this);
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return nc(fc, this.meta);
};
f.$ = function(a, b) {
  var c = this;
  return Zb.e(function() {
    var a = c.ma, b = c.A + c.off, g = M(c.ma);
    return Xd.i ? Xd.i(a, b, g) : Xd.call(null, a, b, g);
  }(), b);
};
f.aa = function(a, b, c) {
  var d = this;
  return Zb.i(function() {
    var a = d.ma, b = d.A + d.off, c = M(d.ma);
    return Xd.i ? Xd.i(a, b, c) : Xd.call(null, a, b, c);
  }(), b, c);
};
f.ba = function() {
  return this.Oa[this.off];
};
f.ja = function() {
  if (this.off + 1 < this.Oa.length) {
    var a;
    a = this.ma;
    var b = this.Oa, c = this.A, d = this.off + 1;
    a = Vd.t ? Vd.t(a, b, c, d) : Vd.call(null, a, b, c, d);
    return null == a ? Sb : a;
  }
  return ub(this);
};
f.M = function() {
  return this;
};
f.wb = function() {
  return $c.e(this.Oa, this.off);
};
f.xb = function() {
  var a = this.A + this.Oa.length;
  if (a < xa(this.ma)) {
    var b = this.ma, c = Nd(this.ma, a);
    return Vd.t ? Vd.t(b, c, a, 0) : Vd.call(null, b, c, a, 0);
  }
  return Sb;
};
f.N = function(a, b) {
  var c = this.ma, d = this.Oa, e = this.A, g = this.off;
  return Vd.P ? Vd.P(c, d, e, g, b) : Vd.call(null, c, d, e, g, b);
};
f.L = function(a, b) {
  return L(b, this);
};
f.vb = function() {
  var a = this.A + this.Oa.length;
  if (a < xa(this.ma)) {
    var b = this.ma, c = Nd(this.ma, a);
    return Vd.t ? Vd.t(b, c, a, 0) : Vd.call(null, b, c, a, 0);
  }
  return null;
};
var Vd = function() {
  function a(a, b, c, d, l) {
    return new Wd(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Wd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Wd(a, Od(a, b), b, c, null, null);
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
  d.i = c;
  d.t = b;
  d.P = a;
  return d;
}();
function Yd(a, b, c, d, e) {
  this.meta = a;
  this.v = b;
  this.start = c;
  this.end = d;
  this.o = e;
  this.n = 166617887;
  this.B = 8192;
}
f = Yd.prototype;
f.toString = function() {
  return Bb(this);
};
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  return "number" === typeof b ? z.i(this, b, c) : c;
};
f.Y = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Md(b, this.end - this.start) : z.e(this.v, this.start + b);
};
f.ka = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : z.i(this.v, this.start + b, c);
};
f.Bb = function(a, b, c) {
  var d = this.start + b;
  a = this.meta;
  c = kc.i(this.v, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return Zd.P ? Zd.P(a, c, b, d, null) : Zd.call(null, a, c, b, d, null);
};
f.K = function() {
  return this.meta;
};
f.O = function() {
  return this.end - this.start;
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return nc(fc, this.meta);
};
f.$ = function(a, b) {
  return Zb.e(this, b);
};
f.aa = function(a, b, c) {
  return Zb.i(this, b, c);
};
f.V = function(a, b, c) {
  if ("number" === typeof b) {
    return Va(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
f.M = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : L(z.e(a.v, e), new Vc(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
f.N = function(a, b) {
  var c = this.v, d = this.start, e = this.end, g = this.o;
  return Zd.P ? Zd.P(b, c, d, e, g) : Zd.call(null, b, c, d, e, g);
};
f.L = function(a, b) {
  var c = this.meta, d = Va(this.v, this.end, b), e = this.start, g = this.end + 1;
  return Zd.P ? Zd.P(c, d, e, g, null) : Zd.call(null, c, d, e, g, null);
};
f.call = function() {
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
  a.i = function(a, c, d) {
    return this.ka(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
f.f = function(a) {
  return this.Y(null, a);
};
f.e = function(a, b) {
  return this.ka(null, a, b);
};
function Zd(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Yd) {
      c = b.start + c, d = b.start + d, b = b.v;
    } else {
      var g = M(b);
      if (0 > c || 0 > d || c > g || d > g) {
        throw Error("Index out of bounds");
      }
      return new Yd(a, b, c, d, e);
    }
  }
}
var Xd = function() {
  function a(a, b, c) {
    return Zd(null, a, b, c, null);
  }
  function b(a, b) {
    return c.i(a, b, M(a));
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
  c.e = b;
  c.i = a;
  return c;
}();
function ae(a, b) {
  return a === b.Q ? b : new Gd(a, ta(b.k));
}
function Td(a) {
  return new Gd({}, ta(a.k));
}
function Ud(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  uc(a, 0, b, 0, a.length);
  return b;
}
var ce = function be(b, c, d, e) {
  d = ae(b.root.Q, d);
  var g = b.q - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.k[g];
    b = null != h ? be(b, c - 5, h, e) : Jd(b.root.Q, c - 5, e);
  }
  d.k[g] = b;
  return d;
};
function Sd(a, b, c, d) {
  this.q = a;
  this.shift = b;
  this.root = c;
  this.ga = d;
  this.n = 275;
  this.B = 88;
}
f = Sd.prototype;
f.call = function() {
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
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
f.f = function(a) {
  return this.J(null, a);
};
f.e = function(a, b) {
  return this.G(null, a, b);
};
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  return "number" === typeof b ? z.i(this, b, c) : c;
};
f.Y = function(a, b) {
  if (this.root.Q) {
    return Od(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
f.ka = function(a, b, c) {
  return 0 <= b && b < this.q ? z.e(this, b) : c;
};
f.O = function() {
  if (this.root.Q) {
    return this.q;
  }
  throw Error("count after persistent!");
};
f.Gb = function(a, b, c) {
  var d = this;
  if (d.root.Q) {
    if (0 <= b && b < d.q) {
      return Id(this) <= b ? d.ga[b & 31] = c : (a = function() {
        return function g(a, k) {
          var l = ae(d.root.Q, k);
          if (0 === a) {
            l.k[b & 31] = c;
          } else {
            var m = b >>> a & 31, n = g(a - 5, l.k[m]);
            l.k[m] = n;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.q) {
      return ob(this, c);
    }
    throw Error("Index " + w.f(b) + " out of bounds for TransientVector of length" + w.f(d.q));
  }
  throw Error("assoc! after persistent!");
};
f.hb = function(a, b, c) {
  if ("number" === typeof b) {
    return rb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
f.ib = function(a, b) {
  if (this.root.Q) {
    if (32 > this.q - Id(this)) {
      this.ga[this.q & 31] = b;
    } else {
      var c = new Gd(this.root.Q, this.ga), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.ga = d;
      if (this.q >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Jd(this.root.Q, this.shift, c);
        this.root = new Gd(this.root.Q, d);
        this.shift = e;
      } else {
        this.root = ce(this, this.shift, this.root, c);
      }
    }
    this.q += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
f.jb = function() {
  if (this.root.Q) {
    this.root.Q = null;
    var a = this.q - Id(this), b = Array(a);
    uc(this.ga, 0, b, 0, a);
    return new W(null, this.q, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function de() {
  this.B = 0;
  this.n = 2097152;
}
de.prototype.F = function() {
  return!1;
};
var ee = new de;
function fe(a, b) {
  return xc(qc(b) ? M(a) === M(b) ? md(Cc, vd.e(function(a) {
    return Ob.e(O.i(b, F(a), ee), F(J(a)));
  }, a)) : null : null);
}
function ge(a, b) {
  var c = a.k;
  if (b instanceof S) {
    a: {
      for (var d = c.length, e = b.U, g = 0;;) {
        if (d <= g) {
          c = -1;
          break a;
        }
        var h = c[g];
        if (h instanceof S && e === h.U) {
          c = g;
          break a;
        }
        g += 2;
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
          e = b.Ua;
          for (g = 0;;) {
            if (d <= g) {
              c = -1;
              break a;
            }
            h = c[g];
            if (h instanceof Qb && e === h.Ua) {
              c = g;
              break a;
            }
            g += 2;
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
function he(a, b, c) {
  this.k = a;
  this.A = b;
  this.ea = c;
  this.B = 0;
  this.n = 32374990;
}
f = he.prototype;
f.toString = function() {
  return Bb(this);
};
f.K = function() {
  return this.ea;
};
f.ia = function() {
  return this.A < this.k.length - 2 ? new he(this.k, this.A + 2, this.ea) : null;
};
f.O = function() {
  return(this.k.length - this.A) / 2;
};
f.I = function() {
  return Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return nc(Sb, this.ea);
};
f.$ = function(a, b) {
  return Bc.e(b, this);
};
f.aa = function(a, b, c) {
  return Bc.i(b, c, this);
};
f.ba = function() {
  return new W(null, 2, 5, X, [this.k[this.A], this.k[this.A + 1]], null);
};
f.ja = function() {
  return this.A < this.k.length - 2 ? new he(this.k, this.A + 2, this.ea) : Sb;
};
f.M = function() {
  return this;
};
f.N = function(a, b) {
  return new he(this.k, this.A, b);
};
f.L = function(a, b) {
  return L(b, this);
};
function ie(a, b, c) {
  this.k = a;
  this.A = b;
  this.q = c;
}
ie.prototype.Cb = function() {
  return this.A < this.q;
};
ie.prototype.next = function() {
  var a = new W(null, 2, 5, X, [this.k[this.A], this.k[this.A + 1]], null);
  this.A += 2;
  return a;
};
function q(a, b, c, d) {
  this.meta = a;
  this.q = b;
  this.k = c;
  this.o = d;
  this.n = 16647951;
  this.B = 8196;
}
f = q.prototype;
f.toString = function() {
  return Bb(this);
};
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  a = ge(this, b);
  return-1 === a ? c : this.k[a + 1];
};
f.qb = function() {
  return new ie(this.k, 0, 2 * this.q);
};
f.K = function() {
  return this.meta;
};
f.O = function() {
  return this.q;
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Vb(this);
};
f.F = function(a, b) {
  if (b && (b.n & 1024 || b.Ob)) {
    var c = this.k.length;
    if (this.q === b.O(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.G(null, this.k[d], wc);
          if (e !== wc) {
            if (Ob.e(this.k[d + 1], e)) {
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
    return fe(this, b);
  }
};
f.fb = function() {
  return new je({}, this.k.length, ta(this.k));
};
f.X = function() {
  return ab(ke, this.meta);
};
f.$ = function(a, b) {
  return Bc.e(b, this);
};
f.aa = function(a, b, c) {
  return Bc.i(b, c, this);
};
f.Z = function(a, b) {
  if (0 <= ge(this, b)) {
    var c = this.k.length, d = c - 2;
    if (0 === d) {
      return ya(this);
    }
    for (var d = Array(d), e = 0, g = 0;;) {
      if (e >= c) {
        return new q(this.meta, this.q - 1, d, null);
      }
      Ob.e(b, this.k[e]) || (d[g] = this.k[e], d[g + 1] = this.k[e + 1], g += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
f.V = function(a, b, c) {
  a = ge(this, b);
  if (-1 === a) {
    if (this.q < le) {
      a = this.k;
      for (var d = a.length, e = Array(d + 2), g = 0;;) {
        if (g < d) {
          e[g] = a[g], g += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new q(this.meta, this.q + 1, e, null);
    }
    return ab(La(Ed.e(ic, this), b, c), this.meta);
  }
  if (c === this.k[a + 1]) {
    return this;
  }
  b = ta(this.k);
  b[a + 1] = c;
  return new q(this.meta, this.q, b, null);
};
f.ub = function(a, b) {
  return-1 !== ge(this, b);
};
f.M = function() {
  var a = this.k;
  return 0 <= a.length - 2 ? new he(a, 0, null) : null;
};
f.N = function(a, b) {
  return new q(b, this.q, this.k, this.o);
};
f.L = function(a, b) {
  if (rc(b)) {
    return La(this, z.e(b, 0), z.e(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (rc(e)) {
      c = La(c, z.e(e, 0), z.e(e, 1)), d = J(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
f.call = function() {
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
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
f.f = function(a) {
  return this.J(null, a);
};
f.e = function(a, b) {
  return this.G(null, a, b);
};
var ke = new q(null, 0, [], null), le = 8;
function je(a, b, c) {
  this.$a = a;
  this.eb = b;
  this.k = c;
  this.B = 56;
  this.n = 258;
}
f = je.prototype;
f.hb = function(a, b, c) {
  var d = this;
  if (t(d.$a)) {
    a = ge(this, b);
    if (-1 === a) {
      return d.eb + 2 <= 2 * le ? (d.eb += 2, d.k.push(b), d.k.push(c), this) : jd.i(function() {
        var a = d.eb, b = d.k;
        return me.e ? me.e(a, b) : me.call(null, a, b);
      }(), b, c);
    }
    c !== d.k[a + 1] && (d.k[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
f.ib = function(a, b) {
  if (t(this.$a)) {
    if (b ? b.n & 2048 || b.Pb || (b.n ? 0 : u(Oa, b)) : u(Oa, b)) {
      return qb(this, Nc.f ? Nc.f(b) : Nc.call(null, b), Oc.f ? Oc.f(b) : Oc.call(null, b));
    }
    for (var c = D(b), d = this;;) {
      var e = F(c);
      if (t(e)) {
        var g = e, c = J(c), d = qb(d, function() {
          var a = g;
          return Nc.f ? Nc.f(a) : Nc.call(null, a);
        }(), function() {
          var a = g;
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
f.jb = function() {
  if (t(this.$a)) {
    return this.$a = !1, new q(null, Hc(this.eb), this.k, null);
  }
  throw Error("persistent! called twice");
};
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  if (t(this.$a)) {
    return a = ge(this, b), -1 === a ? c : this.k[a + 1];
  }
  throw Error("lookup after persistent!");
};
f.O = function() {
  if (t(this.$a)) {
    return Hc(this.eb);
  }
  throw Error("count after persistent!");
};
function me(a, b) {
  for (var c = nb(ic), d = 0;;) {
    if (d < a) {
      c = jd.i(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function ne() {
  this.oa = !1;
}
function oe(a, b) {
  return a === b ? !0 : T(a, b) ? !0 : Ob.e(a, b);
}
var pe = function() {
  function a(a, b, c, h, k) {
    a = ta(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = ta(a);
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
  c.i = b;
  c.P = a;
  return c;
}();
function qe(a, b) {
  var c = Array(a.length - 2);
  uc(a, 0, c, 0, 2 * b);
  uc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var re = function() {
  function a(a, b, c, h, k, l) {
    a = a.ab(b);
    a.k[c] = h;
    a.k[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.ab(b);
    a.k[c] = h;
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
  c.t = b;
  c.ha = a;
  return c;
}();
function se(a, b, c) {
  this.Q = a;
  this.R = b;
  this.k = c;
}
f = se.prototype;
f.ab = function(a) {
  if (a === this.Q) {
    return this;
  }
  var b = Kc(this.R), c = Array(0 > b ? 4 : 2 * (b + 1));
  uc(this.k, 0, c, 0, 2 * b);
  return new se(a, this.R, c);
};
f.kb = function() {
  var a = this.k;
  return te.f ? te.f(a) : te.call(null, a);
};
f.Sa = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.R & e)) {
    return d;
  }
  var g = Kc(this.R & e - 1), e = this.k[2 * g], g = this.k[2 * g + 1];
  return null == e ? g.Sa(a + 5, b, c, d) : oe(c, e) ? g : d;
};
f.ta = function(a, b, c, d, e, g) {
  var h = 1 << (c >>> b & 31), k = Kc(this.R & h - 1);
  if (0 === (this.R & h)) {
    var l = Kc(this.R);
    if (2 * l < this.k.length) {
      var m = this.ab(a), n = m.k;
      g.oa = !0;
      vc(n, 2 * k, n, 2 * (k + 1), 2 * (l - k));
      n[2 * k] = d;
      n[2 * k + 1] = e;
      m.R |= h;
      return m;
    }
    if (16 <= l) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[c >>> b & 31] = ue.ta(a, b + 5, c, d, e, g);
      for (m = k = 0;;) {
        if (32 > k) {
          0 !== (this.R >>> k & 1) && (h[k] = null != this.k[m] ? ue.ta(a, b + 5, Kb(this.k[m]), this.k[m], this.k[m + 1], g) : this.k[m + 1], m += 2), k += 1;
        } else {
          break;
        }
      }
      return new ve(a, l + 1, h);
    }
    n = Array(2 * (l + 4));
    uc(this.k, 0, n, 0, 2 * k);
    n[2 * k] = d;
    n[2 * k + 1] = e;
    uc(this.k, 2 * k, n, 2 * (k + 1), 2 * (l - k));
    g.oa = !0;
    m = this.ab(a);
    m.k = n;
    m.R |= h;
    return m;
  }
  var r = this.k[2 * k], s = this.k[2 * k + 1];
  if (null == r) {
    return l = s.ta(a, b + 5, c, d, e, g), l === s ? this : re.t(this, a, 2 * k + 1, l);
  }
  if (oe(d, r)) {
    return e === s ? this : re.t(this, a, 2 * k + 1, e);
  }
  g.oa = !0;
  return re.ha(this, a, 2 * k, null, 2 * k + 1, function() {
    var g = b + 5;
    return we.na ? we.na(a, g, r, s, c, d, e) : we.call(null, a, g, r, s, c, d, e);
  }());
};
f.sa = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), h = Kc(this.R & g - 1);
  if (0 === (this.R & g)) {
    var k = Kc(this.R);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = ue.sa(a + 5, b, c, d, e);
      for (var l = h = 0;;) {
        if (32 > h) {
          0 !== (this.R >>> h & 1) && (g[h] = null != this.k[l] ? ue.sa(a + 5, Kb(this.k[l]), this.k[l], this.k[l + 1], e) : this.k[l + 1], l += 2), h += 1;
        } else {
          break;
        }
      }
      return new ve(null, k + 1, g);
    }
    l = Array(2 * (k + 1));
    uc(this.k, 0, l, 0, 2 * h);
    l[2 * h] = c;
    l[2 * h + 1] = d;
    uc(this.k, 2 * h, l, 2 * (h + 1), 2 * (k - h));
    e.oa = !0;
    return new se(null, this.R | g, l);
  }
  var m = this.k[2 * h], n = this.k[2 * h + 1];
  if (null == m) {
    return k = n.sa(a + 5, b, c, d, e), k === n ? this : new se(null, this.R, pe.i(this.k, 2 * h + 1, k));
  }
  if (oe(c, m)) {
    return d === n ? this : new se(null, this.R, pe.i(this.k, 2 * h + 1, d));
  }
  e.oa = !0;
  return new se(null, this.R, pe.P(this.k, 2 * h, null, 2 * h + 1, function() {
    var e = a + 5;
    return we.ha ? we.ha(e, m, n, b, c, d) : we.call(null, e, m, n, b, c, d);
  }()));
};
f.lb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.R & d)) {
    return this;
  }
  var e = Kc(this.R & d - 1), g = this.k[2 * e], h = this.k[2 * e + 1];
  return null == g ? (a = h.lb(a + 5, b, c), a === h ? this : null != a ? new se(null, this.R, pe.i(this.k, 2 * e + 1, a)) : this.R === d ? null : new se(null, this.R ^ d, qe(this.k, e))) : oe(c, g) ? new se(null, this.R ^ d, qe(this.k, e)) : this;
};
var ue = new se(null, 0, []);
function ve(a, b, c) {
  this.Q = a;
  this.q = b;
  this.k = c;
}
f = ve.prototype;
f.ab = function(a) {
  return a === this.Q ? this : new ve(a, this.q, ta(this.k));
};
f.kb = function() {
  var a = this.k;
  return xe.f ? xe.f(a) : xe.call(null, a);
};
f.Sa = function(a, b, c, d) {
  var e = this.k[b >>> a & 31];
  return null != e ? e.Sa(a + 5, b, c, d) : d;
};
f.ta = function(a, b, c, d, e, g) {
  var h = c >>> b & 31, k = this.k[h];
  if (null == k) {
    return a = re.t(this, a, h, ue.ta(a, b + 5, c, d, e, g)), a.q += 1, a;
  }
  b = k.ta(a, b + 5, c, d, e, g);
  return b === k ? this : re.t(this, a, h, b);
};
f.sa = function(a, b, c, d, e) {
  var g = b >>> a & 31, h = this.k[g];
  if (null == h) {
    return new ve(null, this.q + 1, pe.i(this.k, g, ue.sa(a + 5, b, c, d, e)));
  }
  a = h.sa(a + 5, b, c, d, e);
  return a === h ? this : new ve(null, this.q, pe.i(this.k, g, a));
};
f.lb = function(a, b, c) {
  var d = b >>> a & 31, e = this.k[d];
  if (null != e) {
    a = e.lb(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.q) {
          a: {
            e = this.k;
            a = e.length;
            b = Array(2 * (this.q - 1));
            c = 0;
            for (var g = 1, h = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[g] = e[c], g += 2, h |= 1 << c), c += 1;
              } else {
                d = new se(null, h, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new ve(null, this.q - 1, pe.i(this.k, d, a));
        }
      } else {
        d = new ve(null, this.q, pe.i(this.k, d, a));
      }
    }
    return d;
  }
  return this;
};
function ye(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (oe(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function ze(a, b, c, d) {
  this.Q = a;
  this.La = b;
  this.q = c;
  this.k = d;
}
f = ze.prototype;
f.ab = function(a) {
  if (a === this.Q) {
    return this;
  }
  var b = Array(2 * (this.q + 1));
  uc(this.k, 0, b, 0, 2 * this.q);
  return new ze(a, this.La, this.q, b);
};
f.kb = function() {
  var a = this.k;
  return te.f ? te.f(a) : te.call(null, a);
};
f.Sa = function(a, b, c, d) {
  a = ye(this.k, this.q, c);
  return 0 > a ? d : oe(c, this.k[a]) ? this.k[a + 1] : d;
};
f.ta = function(a, b, c, d, e, g) {
  if (c === this.La) {
    b = ye(this.k, this.q, d);
    if (-1 === b) {
      if (this.k.length > 2 * this.q) {
        return a = re.ha(this, a, 2 * this.q, d, 2 * this.q + 1, e), g.oa = !0, a.q += 1, a;
      }
      c = this.k.length;
      b = Array(c + 2);
      uc(this.k, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.oa = !0;
      g = this.q + 1;
      a === this.Q ? (this.k = b, this.q = g, a = this) : a = new ze(this.Q, this.La, g, b);
      return a;
    }
    return this.k[b + 1] === e ? this : re.t(this, a, b + 1, e);
  }
  return(new se(a, 1 << (this.La >>> b & 31), [null, this, null, null])).ta(a, b, c, d, e, g);
};
f.sa = function(a, b, c, d, e) {
  return b === this.La ? (a = ye(this.k, this.q, c), -1 === a ? (a = 2 * this.q, b = Array(a + 2), uc(this.k, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.oa = !0, new ze(null, this.La, this.q + 1, b)) : Ob.e(this.k[a], d) ? this : new ze(null, this.La, this.q, pe.i(this.k, a + 1, d))) : (new se(null, 1 << (this.La >>> a & 31), [null, this])).sa(a, b, c, d, e);
};
f.lb = function(a, b, c) {
  a = ye(this.k, this.q, c);
  return-1 === a ? this : 1 === this.q ? null : new ze(null, this.La, this.q - 1, qe(this.k, Hc(a)));
};
var we = function() {
  function a(a, b, c, h, k, l, m) {
    var n = Kb(c);
    if (n === k) {
      return new ze(null, n, 2, [c, h, l, m]);
    }
    var r = new ne;
    return ue.ta(a, b, n, c, h, r).ta(a, b, k, l, m, r);
  }
  function b(a, b, c, h, k, l) {
    var m = Kb(b);
    if (m === h) {
      return new ze(null, m, 2, [b, c, k, l]);
    }
    var n = new ne;
    return ue.sa(a, m, b, c, n).sa(a, h, k, l, n);
  }
  var c = null, c = function(c, e, g, h, k, l, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, g, h, k, l);
      case 7:
        return a.call(this, c, e, g, h, k, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ha = b;
  c.na = a;
  return c;
}();
function Ae(a, b, c, d, e) {
  this.meta = a;
  this.Ta = b;
  this.A = c;
  this.T = d;
  this.o = e;
  this.B = 0;
  this.n = 32374860;
}
f = Ae.prototype;
f.toString = function() {
  return Bb(this);
};
f.K = function() {
  return this.meta;
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return nc(Sb, this.meta);
};
f.$ = function(a, b) {
  return Bc.e(b, this);
};
f.aa = function(a, b, c) {
  return Bc.i(b, c, this);
};
f.ba = function() {
  return null == this.T ? new W(null, 2, 5, X, [this.Ta[this.A], this.Ta[this.A + 1]], null) : F(this.T);
};
f.ja = function() {
  if (null == this.T) {
    var a = this.Ta, b = this.A + 2;
    return te.i ? te.i(a, b, null) : te.call(null, a, b, null);
  }
  var a = this.Ta, b = this.A, c = J(this.T);
  return te.i ? te.i(a, b, c) : te.call(null, a, b, c);
};
f.M = function() {
  return this;
};
f.N = function(a, b) {
  return new Ae(b, this.Ta, this.A, this.T, this.o);
};
f.L = function(a, b) {
  return L(b, this);
};
var te = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Ae(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (t(h) && (h = h.kb(), t(h))) {
            return new Ae(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Ae(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.i(a, 0, null);
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
  c.i = a;
  return c;
}();
function Be(a, b, c, d, e) {
  this.meta = a;
  this.Ta = b;
  this.A = c;
  this.T = d;
  this.o = e;
  this.B = 0;
  this.n = 32374860;
}
f = Be.prototype;
f.toString = function() {
  return Bb(this);
};
f.K = function() {
  return this.meta;
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return nc(Sb, this.meta);
};
f.$ = function(a, b) {
  return Bc.e(b, this);
};
f.aa = function(a, b, c) {
  return Bc.i(b, c, this);
};
f.ba = function() {
  return F(this.T);
};
f.ja = function() {
  var a = this.Ta, b = this.A, c = J(this.T);
  return xe.t ? xe.t(null, a, b, c) : xe.call(null, null, a, b, c);
};
f.M = function() {
  return this;
};
f.N = function(a, b) {
  return new Be(b, this.Ta, this.A, this.T, this.o);
};
f.L = function(a, b) {
  return L(b, this);
};
var xe = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (t(k) && (k = k.kb(), t(k))) {
            return new Be(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Be(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.t(null, a, 0, null);
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
  c.t = a;
  return c;
}();
function Ce(a, b, c, d, e, g) {
  this.meta = a;
  this.q = b;
  this.root = c;
  this.fa = d;
  this.la = e;
  this.o = g;
  this.n = 16123663;
  this.B = 8196;
}
f = Ce.prototype;
f.toString = function() {
  return Bb(this);
};
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  return null == b ? this.fa ? this.la : c : null == this.root ? c : this.root.Sa(0, Kb(b), b, c);
};
f.K = function() {
  return this.meta;
};
f.O = function() {
  return this.q;
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Vb(this);
};
f.F = function(a, b) {
  return fe(this, b);
};
f.fb = function() {
  return new De({}, this.root, this.q, this.fa, this.la);
};
f.X = function() {
  return ab(ic, this.meta);
};
f.Z = function(a, b) {
  if (null == b) {
    return this.fa ? new Ce(this.meta, this.q - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.lb(0, Kb(b), b);
  return c === this.root ? this : new Ce(this.meta, this.q - 1, c, this.fa, this.la, null);
};
f.V = function(a, b, c) {
  if (null == b) {
    return this.fa && c === this.la ? this : new Ce(this.meta, this.fa ? this.q : this.q + 1, this.root, !0, c, null);
  }
  a = new ne;
  b = (null == this.root ? ue : this.root).sa(0, Kb(b), b, c, a);
  return b === this.root ? this : new Ce(this.meta, a.oa ? this.q + 1 : this.q, b, this.fa, this.la, null);
};
f.ub = function(a, b) {
  return null == b ? this.fa : null == this.root ? !1 : this.root.Sa(0, Kb(b), b, wc) !== wc;
};
f.M = function() {
  if (0 < this.q) {
    var a = null != this.root ? this.root.kb() : null;
    return this.fa ? L(new W(null, 2, 5, X, [null, this.la], null), a) : a;
  }
  return null;
};
f.N = function(a, b) {
  return new Ce(b, this.q, this.root, this.fa, this.la, this.o);
};
f.L = function(a, b) {
  if (rc(b)) {
    return La(this, z.e(b, 0), z.e(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (rc(e)) {
      c = La(c, z.e(e, 0), z.e(e, 1)), d = J(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
f.call = function() {
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
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
f.f = function(a) {
  return this.J(null, a);
};
f.e = function(a, b) {
  return this.G(null, a, b);
};
var ic = new Ce(null, 0, null, !1, null, 0);
function De(a, b, c, d, e) {
  this.Q = a;
  this.root = b;
  this.count = c;
  this.fa = d;
  this.la = e;
  this.B = 56;
  this.n = 258;
}
f = De.prototype;
f.hb = function(a, b, c) {
  return Ee(this, b, c);
};
f.ib = function(a, b) {
  return Fe(this, b);
};
f.jb = function() {
  var a;
  if (this.Q) {
    this.Q = null, a = new Ce(null, this.count, this.root, this.fa, this.la, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
f.J = function(a, b) {
  return null == b ? this.fa ? this.la : null : null == this.root ? null : this.root.Sa(0, Kb(b), b);
};
f.G = function(a, b, c) {
  return null == b ? this.fa ? this.la : c : null == this.root ? c : this.root.Sa(0, Kb(b), b, c);
};
f.O = function() {
  if (this.Q) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Fe(a, b) {
  if (a.Q) {
    if (b ? b.n & 2048 || b.Pb || (b.n ? 0 : u(Oa, b)) : u(Oa, b)) {
      return Ee(a, Nc.f ? Nc.f(b) : Nc.call(null, b), Oc.f ? Oc.f(b) : Oc.call(null, b));
    }
    for (var c = D(b), d = a;;) {
      var e = F(c);
      if (t(e)) {
        var g = e, c = J(c), d = Ee(d, function() {
          var a = g;
          return Nc.f ? Nc.f(a) : Nc.call(null, a);
        }(), function() {
          var a = g;
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
function Ee(a, b, c) {
  if (a.Q) {
    if (null == b) {
      a.la !== c && (a.la = c), a.fa || (a.count += 1, a.fa = !0);
    } else {
      var d = new ne;
      b = (null == a.root ? ue : a.root).ta(a.Q, 0, Kb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.oa && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var pd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = D(a);
    for (var b = nb(ic);;) {
      if (a) {
        var e = J(J(a)), b = jd.i(b, F(a), F(J(a)));
        a = e;
      } else {
        return pb(b);
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
function Ge(a, b) {
  this.ca = a;
  this.ea = b;
  this.B = 0;
  this.n = 32374988;
}
f = Ge.prototype;
f.toString = function() {
  return Bb(this);
};
f.K = function() {
  return this.ea;
};
f.ia = function() {
  var a = this.ca, a = (a ? a.n & 128 || a.rb || (a.n ? 0 : u(Ha, a)) : u(Ha, a)) ? this.ca.ia(null) : J(this.ca);
  return null == a ? null : new Ge(a, this.ea);
};
f.I = function() {
  return Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return nc(Sb, this.ea);
};
f.$ = function(a, b) {
  return Bc.e(b, this);
};
f.aa = function(a, b, c) {
  return Bc.i(b, c, this);
};
f.ba = function() {
  return this.ca.ba(null).zb();
};
f.ja = function() {
  var a = this.ca, a = (a ? a.n & 128 || a.rb || (a.n ? 0 : u(Ha, a)) : u(Ha, a)) ? this.ca.ia(null) : J(this.ca);
  return null != a ? new Ge(a, this.ea) : Sb;
};
f.M = function() {
  return this;
};
f.N = function(a, b) {
  return new Ge(this.ca, b);
};
f.L = function(a, b) {
  return L(b, this);
};
function Nc(a) {
  return Qa(a);
}
function He(a, b) {
  this.ca = a;
  this.ea = b;
  this.B = 0;
  this.n = 32374988;
}
f = He.prototype;
f.toString = function() {
  return Bb(this);
};
f.K = function() {
  return this.ea;
};
f.ia = function() {
  var a = this.ca, a = (a ? a.n & 128 || a.rb || (a.n ? 0 : u(Ha, a)) : u(Ha, a)) ? this.ca.ia(null) : J(this.ca);
  return null == a ? null : new He(a, this.ea);
};
f.I = function() {
  return Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return nc(Sb, this.ea);
};
f.$ = function(a, b) {
  return Bc.e(b, this);
};
f.aa = function(a, b, c) {
  return Bc.i(b, c, this);
};
f.ba = function() {
  return this.ca.ba(null).Ab();
};
f.ja = function() {
  var a = this.ca, a = (a ? a.n & 128 || a.rb || (a.n ? 0 : u(Ha, a)) : u(Ha, a)) ? this.ca.ia(null) : J(this.ca);
  return null != a ? new He(a, this.ea) : Sb;
};
f.M = function() {
  return this;
};
f.N = function(a, b) {
  return new He(this.ca, b);
};
f.L = function(a, b) {
  return L(b, this);
};
function Ie(a) {
  return(a = D(a)) ? new He(a, null) : null;
}
function Oc(a) {
  return Ra(a);
}
function Je(a, b, c) {
  this.meta = a;
  this.cb = b;
  this.o = c;
  this.n = 15077647;
  this.B = 8196;
}
f = Je.prototype;
f.toString = function() {
  return Bb(this);
};
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  return Ja(this.cb, b) ? b : c;
};
f.K = function() {
  return this.meta;
};
f.O = function() {
  return xa(this.cb);
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Vb(this);
};
f.F = function(a, b) {
  return pc(b) && M(this) === M(b) && md(function(a) {
    return function(b) {
      return yc(a, b);
    };
  }(this), b);
};
f.fb = function() {
  return new Ke(nb(this.cb));
};
f.X = function() {
  return nc(Le, this.meta);
};
f.M = function() {
  var a = D(this.cb);
  return a ? new Ge(a, null) : null;
};
f.N = function(a, b) {
  return new Je(b, this.cb, this.o);
};
f.L = function(a, b) {
  return new Je(this.meta, kc.i(this.cb, b, null), null);
};
f.call = function() {
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
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
f.f = function(a) {
  return this.J(null, a);
};
f.e = function(a, b) {
  return this.G(null, a, b);
};
var Le = new Je(null, ke, 0);
function Ke(a) {
  this.Ra = a;
  this.n = 259;
  this.B = 136;
}
f = Ke.prototype;
f.call = function() {
  function a(a, b, c) {
    return A.i(this.Ra, b, wc) === wc ? c : b;
  }
  function b(a, b) {
    return A.i(this.Ra, b, wc) === wc ? null : b;
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
  c.e = b;
  c.i = a;
  return c;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
f.f = function(a) {
  return A.i(this.Ra, a, wc) === wc ? null : a;
};
f.e = function(a, b) {
  return A.i(this.Ra, a, wc) === wc ? b : a;
};
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  return A.i(this.Ra, b, wc) === wc ? c : b;
};
f.O = function() {
  return M(this.Ra);
};
f.ib = function(a, b) {
  this.Ra = jd.i(this.Ra, b, null);
  return this;
};
f.jb = function() {
  return new Je(null, pb(this.Ra), null);
};
function Tc(a) {
  if (a && (a.B & 4096 || a.Rb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error("Doesn't support name: " + w.f(a));
}
var Me = function() {
  function a(a, b, c) {
    return(a.f ? a.f(b) : a.call(null, b)) < (a.f ? a.f(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = K(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m);
    }
    function c(a, d, e, l) {
      return Ac.i(function(c, d) {
        return b.i(a, c, d);
      }, b.i(a, d, e), l);
    }
    a.C = 3;
    a.s = function(a) {
      var b = F(a);
      a = J(a);
      var d = F(a);
      a = J(a);
      var l = F(a);
      a = G(a);
      return c(b, d, l, a);
    };
    a.p = c;
    return a;
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.p(b, e, g, K(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 3;
  b.s = c.s;
  b.e = function(a, b) {
    return b;
  };
  b.i = a;
  b.p = c.p;
  return b;
}();
function Y(a, b, c, d, e, g, h) {
  var k = ha;
  try {
    ha = null == ha ? null : ha - 1;
    if (null != ha && 0 > ha) {
      return B(a, "#");
    }
    B(a, c);
    if (D(h)) {
      var l = F(h);
      b.i ? b.i(l, a, g) : b.call(null, l, a, g);
    }
    for (var m = J(h), n = qa.f(g) - 1;;) {
      if (!m || null != n && 0 === n) {
        D(m) && 0 === n && (B(a, d), B(a, "..."));
        break;
      } else {
        B(a, d);
        var r = F(m);
        c = a;
        h = g;
        b.i ? b.i(r, c, h) : b.call(null, r, c, h);
        var s = J(m);
        c = n - 1;
        m = s;
        n = c;
      }
    }
    return B(a, e);
  } finally {
    ha = k;
  }
}
var Oe = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = K(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = D(b), g = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = g.Y(null, k);
        B(a, l);
        k += 1;
      } else {
        if (e = D(e)) {
          g = e, sc(g) ? (e = tb(g), h = ub(g), g = e, l = M(e), e = h, h = l) : (l = F(g), B(a, l), e = J(g), g = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.C = 1;
  a.s = function(a) {
    var d = F(a);
    a = G(a);
    return b(d, a);
  };
  a.p = b;
  return a;
}(), Pe = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Qe(a) {
  return'"' + w.f(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Pe[a];
  })) + '"';
}
var Z = function Re(b, c, d) {
  if (null == b) {
    return B(c, "nil");
  }
  if (void 0 === b) {
    return B(c, "#\x3cundefined\x3e");
  }
  t(function() {
    var c = O.e(d, na);
    return t(c) ? (c = b ? b.n & 131072 || b.Qb ? !0 : b.n ? !1 : u(Xa, b) : u(Xa, b)) ? oc(b) : c : c;
  }()) && (B(c, "^"), Re(oc(b), c, d), B(c, " "));
  if (null == b) {
    return B(c, "nil");
  }
  if (b.Zb) {
    return b.ic(b, c, d);
  }
  if (b && (b.n & 2147483648 || b.W)) {
    return b.H(null, c, d);
  }
  if (ra(b) === Boolean || "number" === typeof b) {
    return B(c, "" + w.f(b));
  }
  if (null != b && b.constructor === Object) {
    B(c, "#js ");
    var e = vd.e(function(c) {
      return new W(null, 2, 5, X, [Uc.f(c), b[c]], null);
    }, tc(b));
    return Se.t ? Se.t(e, Re, c, d) : Se.call(null, e, Re, c, d);
  }
  return b instanceof Array ? Y(c, Re, "#js [", " ", "]", d, b) : t("string" == typeof b) ? t(ma.f(d)) ? B(c, Qe(b)) : B(c, b) : lc(b) ? Oe.p(c, K(["#\x3c", "" + w.f(b), "\x3e"], 0)) : b instanceof Date ? (e = function(b, c) {
    for (var d = "" + w.f(b);;) {
      if (M(d) < c) {
        d = "0" + w.f(d);
      } else {
        return d;
      }
    }
  }, Oe.p(c, K(['#inst "', "" + w.f(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : b instanceof RegExp ? Oe.p(c, K(['#"', b.source, '"'], 0)) : (b ? b.n & 2147483648 || b.W || (b.n ? 0 : u(kb, b)) : u(kb, b)) ? lb(b, c, d) : Oe.p(c, K(["#\x3c", "" + w.f(b), "\x3e"], 0));
};
function Te(a, b) {
  var c = new ga;
  a: {
    var d = new Ab(c);
    Z(F(a), d, b);
    for (var e = D(J(a)), g = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = g.Y(null, k);
        B(d, " ");
        Z(l, d, b);
        k += 1;
      } else {
        if (e = D(e)) {
          g = e, sc(g) ? (e = tb(g), h = ub(g), g = e, l = M(e), e = h, h = l) : (l = F(g), B(d, " "), Z(l, d, b), e = J(g), g = null, h = 0), k = 0;
        } else {
          break a;
        }
      }
    }
  }
  return c;
}
var td = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = ia(), e;
    (e = null == a) || (e = D(a), e = t(e) ? !1 : !0);
    return e ? "" : "" + w.f(Te(a, b));
  }
  a.C = 0;
  a.s = function(a) {
    a = D(a);
    return b(a);
  };
  a.p = b;
  return a;
}();
function Se(a, b, c, d) {
  return Y(c, function(a, c, d) {
    var k = Qa(a);
    b.i ? b.i(k, c, d) : b.call(null, k, c, d);
    B(c, " ");
    a = Ra(a);
    return b.i ? b.i(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, D(a));
}
Rb.prototype.W = !0;
Rb.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Vc.prototype.W = !0;
Vc.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Ae.prototype.W = !0;
Ae.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
he.prototype.W = !0;
he.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Wd.prototype.W = !0;
Wd.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Sc.prototype.W = !0;
Sc.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Ce.prototype.W = !0;
Ce.prototype.H = function(a, b, c) {
  return Se(this, Z, b, c);
};
Be.prototype.W = !0;
Be.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Yd.prototype.W = !0;
Yd.prototype.H = function(a, b, c) {
  return Y(b, Z, "[", " ", "]", c, this);
};
Je.prototype.W = !0;
Je.prototype.H = function(a, b, c) {
  return Y(b, Z, "#{", " ", "}", c, this);
};
ad.prototype.W = !0;
ad.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
od.prototype.W = !0;
od.prototype.H = function(a, b, c) {
  B(b, "#\x3cAtom: ");
  Z(this.state, b, c);
  return B(b, "\x3e");
};
He.prototype.W = !0;
He.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
W.prototype.W = !0;
W.prototype.H = function(a, b, c) {
  return Y(b, Z, "[", " ", "]", c, this);
};
Qc.prototype.W = !0;
Qc.prototype.H = function(a, b) {
  return B(b, "()");
};
q.prototype.W = !0;
q.prototype.H = function(a, b, c) {
  return Se(this, Z, b, c);
};
Ge.prototype.W = !0;
Ge.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Pc.prototype.W = !0;
Pc.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
W.prototype.nb = !0;
W.prototype.ob = function(a, b) {
  return zc.e(this, b);
};
Yd.prototype.nb = !0;
Yd.prototype.ob = function(a, b) {
  return zc.e(this, b);
};
S.prototype.nb = !0;
S.prototype.ob = function(a, b) {
  return Mb(this, b);
};
Qb.prototype.nb = !0;
Qb.prototype.ob = function(a, b) {
  return Mb(this, b);
};
Ic = function() {
  function a(a) {
    return(Math.random.D ? Math.random.D() : Math.random.call(null)) * a;
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
  c.D = b;
  c.f = a;
  return c;
}();
Jc = function(a) {
  a *= Math.random.D ? Math.random.D() : Math.random.call(null);
  return Math.floor.f ? Math.floor.f(a) : Math.floor.call(null, a);
};
function Ue(a) {
  this.mb = a;
  this.B = 0;
  this.n = 2153775104;
}
Ue.prototype.I = function() {
  for (var a = td.p(K([this], 0)), b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
};
Ue.prototype.H = function(a, b) {
  return B(b, '#uuid "' + w.f(this.mb) + '"');
};
Ue.prototype.F = function(a, b) {
  return b instanceof Ue && this.mb === b.mb;
};
Ue.prototype.toString = function() {
  return this.mb;
};
var Ve = new S(null, "y", "y", -1757859776), We = new S(null, "movement", "movement", 1777030977), na = new S(null, "meta", "meta", 1499536964), Xe = new S(null, "animation", "animation", -1248293244), Ye = new S(null, "stage", "stage", 1843544772), Ze = new S(null, "color", "color", 1011675173), $e = new S(null, "movement-speed", "movement-speed", -1779674971), pa = new S(null, "dup", "dup", 556298533), af = new S(null, "dead", "dead", -1946604091), bf = new S(null, "standing", "standing", -1248340762), 
cf = new S(null, "last-attack-frame", "last-attack-frame", 658442790), qd = new S(null, "validator", "validator", -1966190681), df = new S(null, "max-hp", "max-hp", -1065196696), $ = new S(null, "name", "name", 1843675177), ef = new S(null, "neutral", "neutral", -1941956087), ff = new S(null, "tile-width", "tile-width", -1131996343), gf = new S(null, "alive", "alive", 1424929930), hf = new S(null, "renderable", "renderable", -1247325782), jf = new S(null, "background", "background", -863952629), 
kf = new S(null, "facing", "facing", -854439413), lf = new S(null, "entities", "entities", 1940967403), mf = new S(null, "attacker", "attacker", 48869964), ka = new S(null, "flush-on-newline", "flush-on-newline", -151457939), nf = new S(null, "angle", "angle", 1622094254), of = new S(null, "animation-seq", "animation-seq", 1939833135), pf = new S(null, "renderer", "renderer", 336841071), qf = new S(null, "size", "size", 1098693007), rf = new S(null, "sprite", "sprite", 172516848), ma = new S(null, 
"readably", "readably", 1129599760), sf = new S(null, "damage", "damage", 970520018), qa = new S(null, "print-length", "print-length", 1931866356), tf = new S(null, "id", "id", -1388402092), uf = new S(null, "hp-color", "hp-color", -2010496268), vf = new S(null, "current", "current", -1088038603), wf = new S(null, "graphics", "graphics", -2079995979), xf = new S(null, "identifier", "identifier", -805503498), yf = new S(null, "right", "right", -452581833), zf = new S(null, "position", "position", 
-2011731912), Af = new S(null, "point", "point", 1813198264), Bf = new S(null, "moving", "moving", 1760797240), Cf = new S(null, "attack-range", "attack-range", 519031033), Df = new S(null, "x", "x", 2099068185), Ef = new S(null, "anchor", "anchor", 1549638489), Ff = new S(null, "hp", "hp", -1541237831), Gf = new S(null, "target", "target", 253001721), Hf = new S(null, "frame-count", "frame-count", 1616946810), If = new S(null, "attack-speed", "attack-speed", -393485413), Jf = new S(null, "velocity", 
"velocity", -581524355), Kf = new S(null, "health-bar", "health-bar", -570979971), Lf = new S(null, "attackable", "attackable", 2099301245), Mf = new S(null, "tile-height", "tile-height", -905667651), Nf = new S(null, "sprite-list", "sprite-list", -1086684897), Of = new S(null, "left", "left", -399115937), Pf = new S(null, "attacking", "attacking", 492336639);
function Sf(a, b, c, d) {
  this.name = a;
  this.Wa = b;
  this.l = c;
  this.j = d;
  this.n = 2229667594;
  this.B = 8192;
  2 < arguments.length ? (this.l = c, this.j = d) : this.j = this.l = null;
}
f = Sf.prototype;
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "point":
      return this.Wa;
    case "name":
      return this.name;
    default:
      return O.i(this.j, b, c);
  }
};
f.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Position{", ", ", "}", c, V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Af, this.Wa], null)], null), this.j));
};
f.K = function() {
  return this.l;
};
f.O = function() {
  return 2 + M(this.j);
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Lc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.Z = function(a, b) {
  return yc(new Je(null, new q(null, 2, [$, null, Af, null], null), null), b) ? Q.e(nc(Ed.e(ke, this), this.l), b) : new Sf(this.name, this.Wa, this.l, ld(Q.e(this.j, b)), null);
};
f.V = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new Sf(c, this.Wa, this.l, this.j, null) : t(T.e ? T.e(Af, b) : T.call(null, Af, b)) ? new Sf(this.name, c, this.l, this.j, null) : new Sf(this.name, this.Wa, this.l, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Af, this.Wa], null)], null), this.j));
};
f.N = function(a, b) {
  return new Sf(this.name, this.Wa, b, this.j, this.o);
};
f.L = function(a, b) {
  return rc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function Tf(a) {
  return new Sf(zf, a);
}
function Uf(a, b, c, d, e, g) {
  this.name = a;
  this.da = b;
  this.anchor = c;
  this.size = d;
  this.l = e;
  this.j = g;
  this.n = 2229667594;
  this.B = 8192;
  4 < arguments.length ? (this.l = e, this.j = g) : this.j = this.l = null;
}
f = Uf.prototype;
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "size":
      return this.size;
    case "anchor":
      return this.anchor;
    case "sprite":
      return this.da;
    case "name":
      return this.name;
    default:
      return O.i(this.j, b, c);
  }
};
f.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Renderable{", ", ", "}", c, V.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [rf, this.da], null), new W(null, 2, 5, X, [Ef, this.anchor], null), new W(null, 2, 5, X, [qf, this.size], null)], null), this.j));
};
f.K = function() {
  return this.l;
};
f.O = function() {
  return 4 + M(this.j);
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Lc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.Z = function(a, b) {
  return yc(new Je(null, new q(null, 4, [$, null, qf, null, rf, null, Ef, null], null), null), b) ? Q.e(nc(Ed.e(ke, this), this.l), b) : new Uf(this.name, this.da, this.anchor, this.size, this.l, ld(Q.e(this.j, b)), null);
};
f.V = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new Uf(c, this.da, this.anchor, this.size, this.l, this.j, null) : t(T.e ? T.e(rf, b) : T.call(null, rf, b)) ? new Uf(this.name, c, this.anchor, this.size, this.l, this.j, null) : t(T.e ? T.e(Ef, b) : T.call(null, Ef, b)) ? new Uf(this.name, this.da, c, this.size, this.l, this.j, null) : t(T.e ? T.e(qf, b) : T.call(null, qf, b)) ? new Uf(this.name, this.da, this.anchor, c, this.l, this.j, null) : new Uf(this.name, this.da, this.anchor, this.size, 
  this.l, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [rf, this.da], null), new W(null, 2, 5, X, [Ef, this.anchor], null), new W(null, 2, 5, X, [qf, this.size], null)], null), this.j));
};
f.N = function(a, b) {
  return new Uf(this.name, this.da, this.anchor, this.size, b, this.j, this.o);
};
f.L = function(a, b) {
  return rc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function Vf(a, b, c) {
  return new Uf(hf, a, b, c);
}
function Wf(a, b, c, d) {
  this.name = a;
  this.da = b;
  this.l = c;
  this.j = d;
  this.n = 2229667594;
  this.B = 8192;
  2 < arguments.length ? (this.l = c, this.j = d) : this.j = this.l = null;
}
f = Wf.prototype;
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "sprite":
      return this.da;
    case "name":
      return this.name;
    default:
      return O.i(this.j, b, c);
  }
};
f.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Background{", ", ", "}", c, V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [rf, this.da], null)], null), this.j));
};
f.K = function() {
  return this.l;
};
f.O = function() {
  return 2 + M(this.j);
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Lc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.Z = function(a, b) {
  return yc(new Je(null, new q(null, 2, [$, null, rf, null], null), null), b) ? Q.e(nc(Ed.e(ke, this), this.l), b) : new Wf(this.name, this.da, this.l, ld(Q.e(this.j, b)), null);
};
f.V = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new Wf(c, this.da, this.l, this.j, null) : t(T.e ? T.e(rf, b) : T.call(null, rf, b)) ? new Wf(this.name, c, this.l, this.j, null) : new Wf(this.name, this.da, this.l, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [rf, this.da], null)], null), this.j));
};
f.N = function(a, b) {
  return new Wf(this.name, this.da, b, this.j, this.o);
};
f.L = function(a, b) {
  return rc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function Xf(a, b, c, d, e, g, h, k) {
  this.name = a;
  this.pa = b;
  this.qa = c;
  this.ra = d;
  this.target = e;
  this.ua = g;
  this.l = h;
  this.j = k;
  this.n = 2229667594;
  this.B = 8192;
  6 < arguments.length ? (this.l = h, this.j = k) : this.j = this.l = null;
}
f = Xf.prototype;
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
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
      return O.i(this.j, b, c);
  }
};
f.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Attacker{", ", ", "}", c, V.e(new W(null, 6, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Cf, this.pa], null), new W(null, 2, 5, X, [If, this.qa], null), new W(null, 2, 5, X, [sf, this.ra], null), new W(null, 2, 5, X, [Gf, this.target], null), new W(null, 2, 5, X, [cf, this.ua], null)], null), this.j));
};
f.K = function() {
  return this.l;
};
f.O = function() {
  return 6 + M(this.j);
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Lc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.Z = function(a, b) {
  return yc(new Je(null, new q(null, 6, [cf, null, $, null, sf, null, Cf, null, Gf, null, If, null], null), null), b) ? Q.e(nc(Ed.e(ke, this), this.l), b) : new Xf(this.name, this.pa, this.qa, this.ra, this.target, this.ua, this.l, ld(Q.e(this.j, b)), null);
};
f.V = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new Xf(c, this.pa, this.qa, this.ra, this.target, this.ua, this.l, this.j, null) : t(T.e ? T.e(Cf, b) : T.call(null, Cf, b)) ? new Xf(this.name, c, this.qa, this.ra, this.target, this.ua, this.l, this.j, null) : t(T.e ? T.e(If, b) : T.call(null, If, b)) ? new Xf(this.name, this.pa, c, this.ra, this.target, this.ua, this.l, this.j, null) : t(T.e ? T.e(sf, b) : T.call(null, sf, b)) ? new Xf(this.name, this.pa, this.qa, c, this.target, this.ua, this.l, 
  this.j, null) : t(T.e ? T.e(Gf, b) : T.call(null, Gf, b)) ? new Xf(this.name, this.pa, this.qa, this.ra, c, this.ua, this.l, this.j, null) : t(T.e ? T.e(cf, b) : T.call(null, cf, b)) ? new Xf(this.name, this.pa, this.qa, this.ra, this.target, c, this.l, this.j, null) : new Xf(this.name, this.pa, this.qa, this.ra, this.target, this.ua, this.l, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 6, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Cf, this.pa], null), new W(null, 2, 5, X, [If, this.qa], null), new W(null, 2, 5, X, [sf, this.ra], null), new W(null, 2, 5, X, [Gf, this.target], null), new W(null, 2, 5, X, [cf, this.ua], null)], null), this.j));
};
f.N = function(a, b) {
  return new Xf(this.name, this.pa, this.qa, this.ra, this.target, this.ua, b, this.j, this.o);
};
f.L = function(a, b) {
  return rc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function Yf(a, b, c, d, e) {
  return new Xf(mf, a, b, c, d, e);
}
function Zf(a, b, c, d) {
  this.name = a;
  this.Va = b;
  this.l = c;
  this.j = d;
  this.n = 2229667594;
  this.B = 8192;
  2 < arguments.length ? (this.l = c, this.j = d) : this.j = this.l = null;
}
f = Zf.prototype;
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "hp":
      return this.Va;
    case "name":
      return this.name;
    default:
      return O.i(this.j, b, c);
  }
};
f.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Attackable{", ", ", "}", c, V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Ff, this.Va], null)], null), this.j));
};
f.K = function() {
  return this.l;
};
f.O = function() {
  return 2 + M(this.j);
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Lc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.Z = function(a, b) {
  return yc(new Je(null, new q(null, 2, [$, null, Ff, null], null), null), b) ? Q.e(nc(Ed.e(ke, this), this.l), b) : new Zf(this.name, this.Va, this.l, ld(Q.e(this.j, b)), null);
};
f.V = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new Zf(c, this.Va, this.l, this.j, null) : t(T.e ? T.e(Ff, b) : T.call(null, Ff, b)) ? new Zf(this.name, c, this.l, this.j, null) : new Zf(this.name, this.Va, this.l, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Ff, this.Va], null)], null), this.j));
};
f.N = function(a, b) {
  return new Zf(this.name, this.Va, b, this.j, this.o);
};
f.L = function(a, b) {
  return rc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function $f(a, b, c, d) {
  this.name = a;
  this.Xa = b;
  this.l = c;
  this.j = d;
  this.n = 2229667594;
  this.B = 8192;
  2 < arguments.length ? (this.l = c, this.j = d) : this.j = this.l = null;
}
f = $f.prototype;
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "velocity":
      return this.Xa;
    case "name":
      return this.name;
    default:
      return O.i(this.j, b, c);
  }
};
f.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Movement{", ", ", "}", c, V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Jf, this.Xa], null)], null), this.j));
};
f.K = function() {
  return this.l;
};
f.O = function() {
  return 2 + M(this.j);
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Lc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.Z = function(a, b) {
  return yc(new Je(null, new q(null, 2, [$, null, Jf, null], null), null), b) ? Q.e(nc(Ed.e(ke, this), this.l), b) : new $f(this.name, this.Xa, this.l, ld(Q.e(this.j, b)), null);
};
f.V = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new $f(c, this.Xa, this.l, this.j, null) : t(T.e ? T.e(Jf, b) : T.call(null, Jf, b)) ? new $f(this.name, c, this.l, this.j, null) : new $f(this.name, this.Xa, this.l, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Jf, this.Xa], null)], null), this.j));
};
f.N = function(a, b) {
  return new $f(this.name, this.Xa, b, this.j, this.o);
};
f.L = function(a, b) {
  return rc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function ag(a, b, c, d) {
  this.name = a;
  this.angle = b;
  this.l = c;
  this.j = d;
  this.n = 2229667594;
  this.B = 8192;
  2 < arguments.length ? (this.l = c, this.j = d) : this.j = this.l = null;
}
f = ag.prototype;
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "angle":
      return this.angle;
    case "name":
      return this.name;
    default:
      return O.i(this.j, b, c);
  }
};
f.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Facing{", ", ", "}", c, V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [nf, this.angle], null)], null), this.j));
};
f.K = function() {
  return this.l;
};
f.O = function() {
  return 2 + M(this.j);
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Lc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.Z = function(a, b) {
  return yc(new Je(null, new q(null, 2, [$, null, nf, null], null), null), b) ? Q.e(nc(Ed.e(ke, this), this.l), b) : new ag(this.name, this.angle, this.l, ld(Q.e(this.j, b)), null);
};
f.V = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new ag(c, this.angle, this.l, this.j, null) : t(T.e ? T.e(nf, b) : T.call(null, nf, b)) ? new ag(this.name, c, this.l, this.j, null) : new ag(this.name, this.angle, this.l, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [nf, this.angle], null)], null), this.j));
};
f.N = function(a, b) {
  return new ag(this.name, this.angle, b, this.j, this.o);
};
f.L = function(a, b) {
  return rc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function bg(a, b, c, d, e, g) {
  this.name = a;
  this.Qa = b;
  this.xa = c;
  this.current = d;
  this.l = e;
  this.j = g;
  this.n = 2229667594;
  this.B = 8192;
  4 < arguments.length ? (this.l = e, this.j = g) : this.j = this.l = null;
}
f = bg.prototype;
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "current":
      return this.current;
    case "animation-seq":
      return this.xa;
    case "sprite-list":
      return this.Qa;
    case "name":
      return this.name;
    default:
      return O.i(this.j, b, c);
  }
};
f.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Animation{", ", ", "}", c, V.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Nf, this.Qa], null), new W(null, 2, 5, X, [of, this.xa], null), new W(null, 2, 5, X, [vf, this.current], null)], null), this.j));
};
f.K = function() {
  return this.l;
};
f.O = function() {
  return 4 + M(this.j);
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Lc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.Z = function(a, b) {
  return yc(new Je(null, new q(null, 4, [$, null, of, null, vf, null, Nf, null], null), null), b) ? Q.e(nc(Ed.e(ke, this), this.l), b) : new bg(this.name, this.Qa, this.xa, this.current, this.l, ld(Q.e(this.j, b)), null);
};
f.V = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new bg(c, this.Qa, this.xa, this.current, this.l, this.j, null) : t(T.e ? T.e(Nf, b) : T.call(null, Nf, b)) ? new bg(this.name, c, this.xa, this.current, this.l, this.j, null) : t(T.e ? T.e(of, b) : T.call(null, of, b)) ? new bg(this.name, this.Qa, c, this.current, this.l, this.j, null) : t(T.e ? T.e(vf, b) : T.call(null, vf, b)) ? new bg(this.name, this.Qa, this.xa, c, this.l, this.j, null) : new bg(this.name, this.Qa, this.xa, this.current, this.l, 
  kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Nf, this.Qa], null), new W(null, 2, 5, X, [of, this.xa], null), new W(null, 2, 5, X, [vf, this.current], null)], null), this.j));
};
f.N = function(a, b) {
  return new bg(this.name, this.Qa, this.xa, this.current, b, this.j, this.o);
};
f.L = function(a, b) {
  return rc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function cg(a, b, c) {
  return new bg(Xe, a, b, c);
}
function dg(a, b, c, d, e, g) {
  this.name = a;
  this.Ma = b;
  this.color = c;
  this.Na = d;
  this.l = e;
  this.j = g;
  this.n = 2229667594;
  this.B = 8192;
  4 < arguments.length ? (this.l = e, this.j = g) : this.j = this.l = null;
}
f = dg.prototype;
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "max-hp":
      return this.Na;
    case "color":
      return this.color;
    case "graphics":
      return this.Ma;
    case "name":
      return this.name;
    default:
      return O.i(this.j, b, c);
  }
};
f.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Health-bar{", ", ", "}", c, V.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [wf, this.Ma], null), new W(null, 2, 5, X, [Ze, this.color], null), new W(null, 2, 5, X, [df, this.Na], null)], null), this.j));
};
f.K = function() {
  return this.l;
};
f.O = function() {
  return 4 + M(this.j);
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Lc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.Z = function(a, b) {
  return yc(new Je(null, new q(null, 4, [Ze, null, df, null, $, null, wf, null], null), null), b) ? Q.e(nc(Ed.e(ke, this), this.l), b) : new dg(this.name, this.Ma, this.color, this.Na, this.l, ld(Q.e(this.j, b)), null);
};
f.V = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new dg(c, this.Ma, this.color, this.Na, this.l, this.j, null) : t(T.e ? T.e(wf, b) : T.call(null, wf, b)) ? new dg(this.name, c, this.color, this.Na, this.l, this.j, null) : t(T.e ? T.e(Ze, b) : T.call(null, Ze, b)) ? new dg(this.name, this.Ma, c, this.Na, this.l, this.j, null) : t(T.e ? T.e(df, b) : T.call(null, df, b)) ? new dg(this.name, this.Ma, this.color, c, this.l, this.j, null) : new dg(this.name, this.Ma, this.color, this.Na, this.l, kc.i(this.j, 
  b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [wf, this.Ma], null), new W(null, 2, 5, X, [Ze, this.color], null), new W(null, 2, 5, X, [df, this.Na], null)], null), this.j));
};
f.N = function(a, b) {
  return new dg(this.name, this.Ma, this.color, this.Na, b, this.j, this.o);
};
f.L = function(a, b) {
  return rc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function eg(a, b, c) {
  return new dg(Kf, a, b, c);
}
function fg(a, b, c) {
  this.name = a;
  this.l = b;
  this.j = c;
  this.n = 2229667594;
  this.B = 8192;
  1 < arguments.length ? (this.l = b, this.j = c) : this.j = this.l = null;
}
f = fg.prototype;
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "name":
      return this.name;
    default:
      return O.i(this.j, b, c);
  }
};
f.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Attacking{", ", ", "}", c, V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.j));
};
f.K = function() {
  return this.l;
};
f.O = function() {
  return 1 + M(this.j);
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Lc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.Z = function(a, b) {
  return yc(new Je(null, new q(null, 1, [$, null], null), null), b) ? Q.e(nc(Ed.e(ke, this), this.l), b) : new fg(this.name, this.l, ld(Q.e(this.j, b)), null);
};
f.V = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new fg(c, this.l, this.j, null) : new fg(this.name, this.l, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.j));
};
f.N = function(a, b) {
  return new fg(this.name, b, this.j, this.o);
};
f.L = function(a, b) {
  return rc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function gg(a, b, c) {
  this.name = a;
  this.l = b;
  this.j = c;
  this.n = 2229667594;
  this.B = 8192;
  1 < arguments.length ? (this.l = b, this.j = c) : this.j = this.l = null;
}
f = gg.prototype;
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "name":
      return this.name;
    default:
      return O.i(this.j, b, c);
  }
};
f.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Alive{", ", ", "}", c, V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.j));
};
f.K = function() {
  return this.l;
};
f.O = function() {
  return 1 + M(this.j);
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Lc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.Z = function(a, b) {
  return yc(new Je(null, new q(null, 1, [$, null], null), null), b) ? Q.e(nc(Ed.e(ke, this), this.l), b) : new gg(this.name, this.l, ld(Q.e(this.j, b)), null);
};
f.V = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new gg(c, this.l, this.j, null) : new gg(this.name, this.l, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.j));
};
f.N = function(a, b) {
  return new gg(this.name, b, this.j, this.o);
};
f.L = function(a, b) {
  return rc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function hg(a, b, c) {
  this.name = a;
  this.l = b;
  this.j = c;
  this.n = 2229667594;
  this.B = 8192;
  1 < arguments.length ? (this.l = b, this.j = c) : this.j = this.l = null;
}
f = hg.prototype;
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "name":
      return this.name;
    default:
      return O.i(this.j, b, c);
  }
};
f.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Dead{", ", ", "}", c, V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.j));
};
f.K = function() {
  return this.l;
};
f.O = function() {
  return 1 + M(this.j);
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Lc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.Z = function(a, b) {
  return yc(new Je(null, new q(null, 1, [$, null], null), null), b) ? Q.e(nc(Ed.e(ke, this), this.l), b) : new hg(this.name, this.l, ld(Q.e(this.j, b)), null);
};
f.V = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new hg(c, this.l, this.j, null) : new hg(this.name, this.l, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.j));
};
f.N = function(a, b) {
  return new hg(this.name, b, this.j, this.o);
};
f.L = function(a, b) {
  return rc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function ig(a, b, c) {
  this.name = a;
  this.l = b;
  this.j = c;
  this.n = 2229667594;
  this.B = 8192;
  1 < arguments.length ? (this.l = b, this.j = c) : this.j = this.l = null;
}
f = ig.prototype;
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "name":
      return this.name;
    default:
      return O.i(this.j, b, c);
  }
};
f.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Moving{", ", ", "}", c, V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.j));
};
f.K = function() {
  return this.l;
};
f.O = function() {
  return 1 + M(this.j);
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Lc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.Z = function(a, b) {
  return yc(new Je(null, new q(null, 1, [$, null], null), null), b) ? Q.e(nc(Ed.e(ke, this), this.l), b) : new ig(this.name, this.l, ld(Q.e(this.j, b)), null);
};
f.V = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new ig(c, this.l, this.j, null) : new ig(this.name, this.l, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.j));
};
f.N = function(a, b) {
  return new ig(this.name, b, this.j, this.o);
};
f.L = function(a, b) {
  return rc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function jg(a, b, c) {
  this.name = a;
  this.l = b;
  this.j = c;
  this.n = 2229667594;
  this.B = 8192;
  1 < arguments.length ? (this.l = b, this.j = c) : this.j = this.l = null;
}
f = jg.prototype;
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "name":
      return this.name;
    default:
      return O.i(this.j, b, c);
  }
};
f.H = function(a, b, c) {
  return Y(b, function() {
    return function(a) {
      return Y(b, Z, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Standing{", ", ", "}", c, V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.j));
};
f.K = function() {
  return this.l;
};
f.O = function() {
  return 1 + M(this.j);
};
f.I = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Lc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.Z = function(a, b) {
  return yc(new Je(null, new q(null, 1, [$, null], null), null), b) ? Q.e(nc(Ed.e(ke, this), this.l), b) : new jg(this.name, this.l, ld(Q.e(this.j, b)), null);
};
f.V = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new jg(c, this.l, this.j, null) : new jg(this.name, this.l, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.j));
};
f.N = function(a, b) {
  return new jg(this.name, b, this.j, this.o);
};
f.L = function(a, b) {
  return rc(b) ? La(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function kg(a, b) {
  return yc(a, b);
}
function lg(a, b) {
  return kc.i(a, $.f(b), b);
}
function mg(a) {
  return Ac.i(function(a, c) {
    return Q.e(a, $.f(c));
  }, a, new W(null, 2, 5, X, [new ig(Bf), new fg(Pf)], null));
}
function ng(a, b) {
  return Ac.i(function(a, b) {
    return kc.i(a, $.f(b), b);
  }, a, b);
}
function og() {
  var a = pg.D ? pg.D() : pg.call(null);
  return qg.f ? qg.f(a) : qg.call(null, a);
}
var rg = function() {
  function a(a) {
    return new q(null, 2, [$, xf, tf, a], null);
  }
  function b() {
    return c.f(og());
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
  c.D = b;
  c.f = a;
  return c;
}(), sg = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = Ac.i(function(a, b) {
      return kc.i(a, $.f(b), b);
    }, ke, a);
    return yc(a, xf) ? a : lg(a, rg.D());
  }
  a.C = 0;
  a.s = function(a) {
    a = D(a);
    return b(a);
  };
  a.p = b;
  return a;
}(), tg = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = K(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = Ie(lf.f(a));
    return Dd.e(function() {
      return function(a) {
        return md(nd.e(kg, a), b);
      };
    }(e), e);
  }
  a.C = 1;
  a.s = function(a) {
    var d = F(a);
    a = G(a);
    return b(d, a);
  };
  a.p = b;
  return a;
}();
function ug(a, b) {
  var c = function() {
    var b = lf.f(a);
    return t(b) ? b : ke;
  }();
  return kc.i(a, lf, Ac.i(function() {
    return function(a, b) {
      return kc.i(a, Fd.e(b, new W(null, 2, 5, X, [xf, tf], null)), b);
    };
  }(c), c, b));
}
function vg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [zf, Af], null));
}
function wg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [mf, Gf], null));
}
function xg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [We, Jf], null));
}
function yg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [hf, Ef], null));
}
function zg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [hf, qf], null));
}
function Ag(a) {
  return Fd.e(a, new W(null, 2, 5, X, [Xe, Nf], null));
}
function Bg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [Xe, of], null));
}
function Cg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [Xe, vf], null));
}
function Dg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [mf, Cf], null));
}
function Eg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [mf, If], null));
}
function Fg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [mf, sf], null));
}
function Gg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [Lf, Ff], null));
}
function Hg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [mf, cf], null));
}
function Ig(a, b) {
  return Dd.e(function(b) {
    return Ob.e(wg(b), a);
  }, b);
}
function Jg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [hf, rf], null)).getBounds();
}
;function Kg(a, b, c) {
  var d = Jg(a), e = Jg(b), g = vg(a);
  a = N.i(g, 0, null);
  var g = N.i(g, 1, null), h = vg(b);
  b = N.i(h, 0, null);
  var h = N.i(h, 1, null), k = d.height / 2, d = d.width / 2, l = e.height / 2, e = e.width / 2;
  return!(a - d - c > b + e || b - e > a + d + c || g - k - c > h + l || h - l > g + k + c);
}
function Lg(a, b) {
  var c = vg(a), d = N.i(c, 0, null), c = N.i(c, 1, null), e = vg(b), g = N.i(e, 0, null), e = N.i(e, 1, null);
  return Math.sqrt(Math.pow(Math.abs(d - g), 2) + Math.pow(Math.abs(c - e), 2));
}
function Mg(a, b) {
  return R.i(Me, nd.e(Lg, a), b);
}
function Ng(a, b, c) {
  return ug(a, function() {
    return function e(a) {
      return new Vc(null, function() {
        for (;;) {
          var b = D(a);
          if (b) {
            if (sc(b)) {
              var k = tb(b), l = M(k), m = Zc(l);
              return function() {
                for (var a = 0;;) {
                  if (a < l) {
                    var b = z.e(k, a), e = m, g = xg(b), h = Dg(b), n = Eg(b), H = Fg(b), P = Hg(b), U = Mg(b, c), fa = !Kg(b, U, h), b = ng(mg(b), new W(null, 3, 5, X, [new $f(We, g), t(fa) ? new ig(Bf) : new fg(Pf), Yf(h, n, H, U, P)], null));
                    e.add(b);
                    a += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? bd(m.S(), e(ub(b))) : bd(m.S(), null);
            }
            var n = F(b);
            return L(function() {
              var a = xg(n), b = Dg(n), e = Eg(n), g = Fg(n), h = Hg(n), k = Mg(n, c), l = !Kg(n, k, b);
              return ng(mg(n), new W(null, 3, 5, X, [new $f(We, a), t(l) ? new ig(Bf) : new fg(Pf), Yf(b, e, g, k, h)], null));
            }(), e(G(b)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
function Og(a) {
  if (Ob.e(Gc(Hf.f(a), 5), 0)) {
    var b = R.e(tg, Ed.e(new W(null, 1, 5, X, [a], null), new W(null, 1, 5, X, [mf], null))), c = R.e(tg, Ed.e(new W(null, 1, 5, X, [a], null), new W(null, 2, 5, X, [Lf, gf], null)));
    return D(b) && D(c) ? R.e(Ng, new W(null, 3, 5, X, [a, b, c], null)) : a;
  }
  return a;
}
;var Qg;
a: {
  var Rg = aa.navigator;
  if (Rg) {
    var Sg = Rg.userAgent;
    if (Sg) {
      Qg = Sg;
      break a;
    }
  }
  Qg = "";
}
function Tg(a) {
  return-1 != Qg.indexOf(a);
}
;var Ug = Tg("Opera") || Tg("OPR"), Vg = Tg("Trident") || Tg("MSIE"), Wg = Tg("Gecko") && -1 == Qg.toLowerCase().indexOf("webkit") && !(Tg("Trident") || Tg("MSIE")), Xg = -1 != Qg.toLowerCase().indexOf("webkit"), Yg = function() {
  var a = "", b;
  if (Ug && aa.opera) {
    return a = aa.opera.version, "function" == p(a) ? a() : a;
  }
  Wg ? b = /rv\:([^\);]+)(\)|;)/ : Vg ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Xg && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(Qg)) ? a[1] : "");
  return Vg && (b = (b = aa.document) ? b.documentMode : void 0, b > parseFloat(a)) ? String(b) : a;
}(), Zg = {};
function $g(a) {
  var b;
  if (!(b = Zg[a])) {
    b = 0;
    for (var c = String(Yg).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), g = 0;0 == b && g < e;g++) {
      var h = c[g] || "", k = d[g] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(h) || ["", "", ""], r = m.exec(k) || ["", "", ""];
        if (0 == n[0].length && 0 == r[0].length) {
          break;
        }
        b = da(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || da(0 == n[2].length, 0 == r[2].length) || da(n[2], r[2]);
      } while (0 == b);
    }
    b = Zg[a] = 0 <= b;
  }
  return b;
}
;Vg && $g("9");
!Xg || $g("528");
Wg && $g("1.9b") || Vg && $g("8") || Ug && $g("9.5") || Xg && $g("528");
Wg && !$g("8") || Vg && $g("9");
var ah = function() {
  function a(a, b) {
    return R.e(w, Cd(a, b));
  }
  function b(a) {
    return R.e(w, a);
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
function qg(a) {
  return "" + w.f(a.mb);
}
function pg() {
  function a() {
    return Jc(16).toString(16);
  }
  return new Ue(ah.f(V.p(Ad.e(8, a), "-", K([Ad.e(4, a), "-4", Ad.e(3, a), "-", (8 | 3 & Jc(15)).toString(16), Ad.e(3, a), "-", Ad.e(12, a)], 0))));
}
var bh = "^" + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + "-" + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + "-" + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + "-" + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + "-" + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + 
w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + w.f("[0-9a-fA-F]") + "$";
if (!(bh instanceof RegExp)) {
  var ch;
  var dh = /^(?:\(\?([idmsux]*)\))?(.*)/;
  if ("string" === typeof bh) {
    var eh = dh.exec(bh);
    ch = null == eh ? null : 1 === M(eh) ? F(eh) : pb(Ac.i(ob, nb(fc), eh));
  } else {
    throw new TypeError("re-find must match against a string.");
  }
  N.i(ch, 0, null);
  N.i(ch, 1, null);
  N.i(ch, 2, null);
}
;function fh(a, b) {
  for (var c = a, d = b;;) {
    if (D(d)) {
      var e = F(d), e = Fg(e), c = c - e, d = G(d)
    } else {
      return c;
    }
  }
}
function gh(a, b, c) {
  var d = Hf.f(a), e = Dd.e(function(a) {
    return function(b) {
      return Ob.e(a, Hg(b));
    };
  }(d), b);
  return ug(a, function() {
    return function(a, b) {
      return function l(c) {
        return new Vc(null, function(a, b) {
          return function() {
            for (;;) {
              var a = D(c);
              if (a) {
                if (sc(a)) {
                  var d = tb(a), e = M(d), g = Zc(e);
                  return function() {
                    for (var a = 0;;) {
                      if (a < e) {
                        var c = z.e(d, a), h = g, l = Ig(c, b), m = Gg(c), l = fh(m, l), c = ng(Q.e(c, $.f(new gg(gf))), new W(null, 2, 5, X, [new Zf(Lf, l), 0 < l ? new gg(gf) : new hg(af)], null));
                        h.add(c);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? bd(g.S(), l(ub(a))) : bd(g.S(), null);
                }
                var h = F(a);
                return L(function() {
                  var a = Ig(h, b), c = Gg(h), a = fh(c, a);
                  return ng(Q.e(h, $.f(new gg(gf))), new W(null, 2, 5, X, [new Zf(Lf, a), 0 < a ? new gg(gf) : new hg(af)], null));
                }(), l(G(a)));
              }
              return null;
            }
          };
        }(a, b), null, null);
      };
    }(d, e)(c);
  }());
}
;function hh(a, b, c) {
  a = Hg.f ? Hg.f(a) : Hg.call(null, a);
  return c - a >= b ? c : a;
}
function ih(a, b) {
  var c = function() {
    return function(b) {
      return function g(c) {
        return new Vc(null, function() {
          return function() {
            for (;;) {
              var b = D(c);
              if (b) {
                if (sc(b)) {
                  var d = tb(b), m = M(d), n = Zc(m);
                  return function() {
                    for (var b = 0;;) {
                      if (b < m) {
                        var c = z.e(d, b);
                        cd(n, function() {
                          var b = function() {
                            var a = c;
                            return wg.f ? wg.f(a) : wg.call(null, a);
                          }(), d = Hf.f(a);
                          Gg.f ? Gg.f(b) : Gg.call(null, b);
                          var g = function() {
                            var a = c;
                            return Dg.f ? Dg.f(a) : Dg.call(null, a);
                          }(), h = function() {
                            var a = c;
                            return Eg.f ? Eg.f(a) : Eg.call(null, a);
                          }(), k = function() {
                            var a = c;
                            return Fg.f ? Fg.f(a) : Fg.call(null, a);
                          }(), l = hh(c, h, d), d = c, b = Yf.P ? Yf.P(g, h, k, b, l) : Yf.call(null, g, h, k, b, l);
                          return lg.e ? lg.e(d, b) : lg.call(null, d, b);
                        }());
                        b += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? bd(n.S(), g(ub(b))) : bd(n.S(), null);
                }
                var r = F(b);
                return L(function() {
                  var b = function() {
                    var a = r;
                    return wg.f ? wg.f(a) : wg.call(null, a);
                  }(), c = Hf.f(a);
                  Gg.f ? Gg.f(b) : Gg.call(null, b);
                  var d = function() {
                    var a = r;
                    return Dg.f ? Dg.f(a) : Dg.call(null, a);
                  }(), g = function() {
                    var a = r;
                    return Eg.f ? Eg.f(a) : Eg.call(null, a);
                  }(), h = function() {
                    var a = r;
                    return Fg.f ? Fg.f(a) : Fg.call(null, a);
                  }(), k = hh(r, g, c), c = r, b = Yf.P ? Yf.P(d, g, h, b, k) : Yf.call(null, d, g, h, b, k);
                  return lg.e ? lg.e(c, b) : lg.call(null, c, b);
                }(), g(G(b)));
              }
              return null;
            }
          };
        }(b), null, null);
      };
    }(a)(b);
  }();
  return ug.e ? ug.e(a, c) : ug.call(null, a, c);
}
;function jh(a) {
  return 16 * a;
}
function kh(a, b, c) {
  a[b] = c;
  return a;
}
;function lh(a) {
  return PIXI.Sprite.fromFrame(a);
}
function mh(a) {
  return PIXI.Sprite.fromImage(a);
}
function nh(a) {
  return PIXI.Texture.fromImage(a, !1);
}
;var oh = new q(null, 6, [$e, .25, Cf, 1, sf, 5, If, 180, Mf, 1, ff, 1], null), ph = new q(null, 4, [Ff, 2E3, uf, 16711680, Mf, 4, ff, 4], null), qh = new PIXI.Point(.5, .5);
function rh(a, b) {
  var c = lh.f ? lh.f("barbarian-neutral-down.png") : lh.call(null, "barbarian-neutral-down.png"), d = lh.f ? lh.f("barbarian-run-right-down.png") : lh.call(null, "barbarian-run-right-down.png"), e = lh.f ? lh.f("barbarian-run-left-down.png") : lh.call(null, "barbarian-run-left-down.png"), d = new q(null, 3, [ef, c, yf, d, Of, e], null), e = new W(null, 4, 5, X, [ef, Of, ef, yf], null), g = $e.f(oh), h = Cf.f(oh), k = sf.f(oh), l = If.f(oh), m = Mf.f(oh), n = ff.f(oh);
  jh.f && jh.f(m);
  jh.f && jh.f(n);
  return sg.p(K([Tf(new W(null, 2, 5, X, [a, b], null)), new jg(bf), new $f(We, g), cg(d, e, 0), Vf(c, qh, new W(null, 2, 5, X, [m, n], null)), Yf(h, l, k, null, 0)], 0));
}
function sh(a, b) {
  var c = mh.f ? mh.f("images/town-hall.png") : mh.call(null, "images/town-hall.png"), d = Ff.f(ph), e = uf.f(ph), g = Mf.f(ph), h = ff.f(ph);
  jh.f && jh.f(g);
  jh.f && jh.f(h);
  return sg.p(K([Tf(new W(null, 2, 5, X, [a, b], null)), Vf(c, qh, new W(null, 2, 5, X, [g, h], null)), new gg(gf), eg(new PIXI.Graphics, e, d), new Zf(Lf, d)], 0));
}
;var th = rd.f ? rd.f(fc) : rd.call(null, fc);
function uh(a) {
  a = a.getLocalPosition(a.target);
  return ud.i(th, gc, new q(null, 2, [Df, a.x, Ve, a.y], null));
}
function vh(a) {
  var b = Yb.f ? Yb.f(th) : Yb.call(null, th);
  sd.e ? sd.e(th, fc) : sd.call(null, th, fc);
  return D(b) ? ug(a, function() {
    return function(a) {
      return function e(b) {
        return new Vc(null, function() {
          return function() {
            for (;;) {
              var a = D(b);
              if (a) {
                if (sc(a)) {
                  var c = tb(a), l = M(c), m = Zc(l);
                  return function() {
                    for (var a = 0;;) {
                      if (a < l) {
                        var b = z.e(c, a), e = m, g;
                        g = Df.f(b);
                        b = Ve.f(b);
                        g = rh(g, b);
                        e.add(g);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? bd(m.S(), e(ub(a))) : bd(m.S(), null);
                }
                var n = F(a);
                return L(function() {
                  var a = Df.f(n), b = Ve.f(n);
                  return rh(a, b);
                }(), e(G(a)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(b)(b);
  }()) : a;
}
;function wh(a, b) {
  return ug(a, function() {
    return function d(a) {
      return new Vc(null, function() {
        for (;;) {
          var b = D(a);
          if (b) {
            if (sc(b)) {
              var h = tb(b), k = M(h), l = Zc(k);
              return function() {
                for (var a = 0;;) {
                  if (a < k) {
                    var b = z.e(h, a), d = l, e = Fd.e(b, new W(null, 2, 5, X, [kf, nf], null)), g = xg(b), m = vg(b), E = N.i(m, 0, null), m = N.i(m, 1, null), g = new W(null, 2, 5, X, [E + g * Math.cos(e), m + g * Math.sin(e)], null), e = N.i(g, 0, null), g = N.i(g, 1, null), b = lg(b, Tf(new W(null, 2, 5, X, [e, g], null)));
                    d.add(b);
                    a += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? bd(l.S(), d(ub(b))) : bd(l.S(), null);
            }
            var m = F(b);
            return L(function() {
              var a = Fd.e(m, new W(null, 2, 5, X, [kf, nf], null)), b = xg(m), d = vg(m), e = N.i(d, 0, null), d = N.i(d, 1, null), b = new W(null, 2, 5, X, [e + b * Math.cos(a), d + b * Math.sin(a)], null), a = N.i(b, 0, null), b = N.i(b, 1, null);
              return lg(m, Tf(new W(null, 2, 5, X, [a, b], null)));
            }(), d(G(b)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
function xh(a) {
  if (Ob.e(Gc(Hf.f(a), 1), 0)) {
    var b = R.e(tg, Ed.e(new W(null, 1, 5, X, [a], null), new W(null, 3, 5, X, [We, kf, Bf], null)));
    return D(b) ? R.e(wh, new W(null, 2, 5, X, [a, b], null)) : a;
  }
  return a;
}
;function yh(a, b) {
  var c = M(a);
  return Ob.e(b, c - 1) ? 0 : b + 1;
}
function zh(a, b) {
  var c = function() {
    return function(a) {
      return function g(b) {
        return new Vc(null, function() {
          return function() {
            for (;;) {
              var a = D(b);
              if (a) {
                if (sc(a)) {
                  var c = tb(a), d = M(c), n = Zc(d);
                  return function() {
                    for (var a = 0;;) {
                      if (a < d) {
                        var b = z.e(c, a);
                        cd(n, function() {
                          var a = function() {
                            var a = b;
                            return yg.f ? yg.f(a) : yg.call(null, a);
                          }(), c = function() {
                            var a = b;
                            return zg.f ? zg.f(a) : zg.call(null, a);
                          }(), d = function() {
                            var a = b;
                            return Ag.f ? Ag.f(a) : Ag.call(null, a);
                          }(), g = function() {
                            var a = b;
                            return Bg.f ? Bg.f(a) : Bg.call(null, a);
                          }(), h = function() {
                            var a = b;
                            return Cg.f ? Cg.f(a) : Cg.call(null, a);
                          }(), h = yh(g, h), k = O.e(g, h), l = O.e(d, k), k = b, a = new W(null, 2, 5, X, [cg.i ? cg.i(d, g, h) : cg.call(null, d, g, h), Vf.i ? Vf.i(l, a, c) : Vf.call(null, l, a, c)], null);
                          return ng.e ? ng.e(k, a) : ng.call(null, k, a);
                        }());
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? bd(n.S(), g(ub(a))) : bd(n.S(), null);
                }
                var r = F(a);
                return L(function() {
                  var a = function() {
                    var a = r;
                    return yg.f ? yg.f(a) : yg.call(null, a);
                  }(), b = function() {
                    var a = r;
                    return zg.f ? zg.f(a) : zg.call(null, a);
                  }(), c = function() {
                    var a = r;
                    return Ag.f ? Ag.f(a) : Ag.call(null, a);
                  }(), d = function() {
                    var a = r;
                    return Bg.f ? Bg.f(a) : Bg.call(null, a);
                  }(), g = function() {
                    var a = r;
                    return Cg.f ? Cg.f(a) : Cg.call(null, a);
                  }(), g = yh(d, g), h = O.e(d, g), k = O.e(c, h), h = r, a = new W(null, 2, 5, X, [cg.i ? cg.i(c, d, g) : cg.call(null, c, d, g), Vf.i ? Vf.i(k, a, b) : Vf.call(null, k, a, b)], null);
                  return ng.e ? ng.e(h, a) : ng.call(null, h, a);
                }(), g(G(a)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(a)(b);
  }();
  return ug.e ? ug.e(a, c) : ug.call(null, a, c);
}
;function Ah(a, b) {
  a.addChild(b);
}
function Bh(a, b, c) {
  kh(kh(a.position, "x", b), "y", c);
  return a;
}
function Ch(a, b) {
  return kh(a, "anchor", b);
}
function Dh(a, b, c) {
  a = kh(a, "height", 16 * b);
  return kh(a, "width", 16 * c);
}
function Eh(a, b, c) {
  var d = Ye.f(a), e = pf.f(a);
  b = D(b);
  for (var g = null, h = 0, k = 0;;) {
    if (k < h) {
      var l = g.Y(null, k);
      Ah(d, Fd.e(l, new W(null, 2, 5, X, [jf, rf], null)));
      k += 1;
    } else {
      if (b = D(b)) {
        g = b, sc(g) ? (b = tb(g), k = ub(g), g = b, h = M(b), b = k) : (b = F(g), Ah(d, Fd.e(b, new W(null, 2, 5, X, [jf, rf], null))), b = J(g), g = null, h = 0), k = 0;
      } else {
        break;
      }
    }
  }
  c = D(c);
  b = null;
  for (h = g = 0;;) {
    if (h < g) {
      var k = b.Y(null, h), m = Fd.e(k, new W(null, 2, 5, X, [hf, rf], null)), n = yg(k), r = zg(k), l = N.i(r, 0, null), r = N.i(r, 1, null), s = vg(k), x = N.i(s, 0, null), s = N.i(s, 1, null), x = Math.round(x), y = Math.round(s), s = Kf.f(k);
      Ah(d, Ch(Bh(Dh(m, l, r), x, y), n));
      if (t(s)) {
        var C = wf.f(s), m = df.f(s), E = Ze.f(s), m = Gg(k) / m, H = l / 8 * 16, P = 16 * m * r, k = Jg(k), U = k.x, fa = k.y + H;
        Ah(d, function() {
          var a = C;
          a.clear();
          a.beginFill(E);
          a.drawRect(U, fa, P, H);
          a.endFill();
          return a;
        }());
      }
      h += 1;
    } else {
      if (c = D(c)) {
        if (sc(c)) {
          g = tb(c), c = ub(c), b = g, g = M(g);
        } else {
          b = F(c);
          k = Fd.e(b, new W(null, 2, 5, X, [hf, rf], null));
          l = yg(b);
          h = zg(b);
          g = N.i(h, 0, null);
          h = N.i(h, 1, null);
          m = vg(b);
          r = N.i(m, 0, null);
          m = N.i(m, 1, null);
          r = Math.round(r);
          n = Math.round(m);
          m = Kf.f(b);
          Ah(d, Ch(Bh(Dh(k, g, h), r, n), l));
          if (t(m)) {
            var Ga = wf.f(m), k = df.f(m), I = Ze.f(m), k = Gg(b) / k, Qf = g / 8 * 16, ja = 16 * k * h;
            b = Jg(b);
            var la = b.x, oa = b.y + Qf;
            Ah(d, function() {
              var a = Ga;
              a.clear();
              a.beginFill(I);
              a.drawRect(la, oa, ja, Qf);
              a.endFill();
              return a;
            }());
          }
          c = J(c);
          b = null;
          g = 0;
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
function Fh(a) {
  if (Ob.e(Gc(Hf.f(a), 1), 0)) {
    var b = R.e(tg, Ed.e(new W(null, 1, 5, X, [a], null), new W(null, 1, 5, X, [jf], null))), c = R.e(tg, Ed.e(new W(null, 1, 5, X, [a], null), new W(null, 1, 5, X, [hf], null)));
    return D(b) && D(c) ? R.e(Eh, new W(null, 3, 5, X, [a, b, c], null)) : a;
  }
  return a;
}
;function Gh(a, b) {
  return ug(a, function() {
    return function d(a) {
      return new Vc(null, function() {
        for (;;) {
          var b = D(a);
          if (b) {
            if (sc(b)) {
              var h = tb(b), k = M(h), l = Zc(k);
              return function() {
                for (var a = 0;;) {
                  if (a < k) {
                    var b = z.e(h, a), d = l, e = wg(b), g = vg(e), e = N.i(g, 0, null), g = N.i(g, 1, null), m = vg(b), E = N.i(m, 0, null), m = N.i(m, 1, null), b = lg(b, new ag(kf, Math.atan2(g - m, e - E)));
                    d.add(b);
                    a += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? bd(l.S(), d(ub(b))) : bd(l.S(), null);
            }
            var m = F(b);
            return L(function() {
              var a = wg(m), b = vg(a), a = N.i(b, 0, null), b = N.i(b, 1, null), d = vg(m), e = N.i(d, 0, null), d = N.i(d, 1, null);
              return lg(m, new ag(kf, Math.atan2(b - d, a - e)));
            }(), d(G(b)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
function Hh(a) {
  if (Ob.e(Gc(Hf.f(a), 5), 0)) {
    var b = R.e(tg, Ed.e(new W(null, 1, 5, X, [a], null), new W(null, 2, 5, X, [mf, We], null)));
    return D(b) ? R.e(Gh, new W(null, 2, 5, X, [a, b], null)) : a;
  }
  return a;
}
;function Ih() {
  var a = new PIXI.autoDetectRenderer(640, 640);
  document.getElementById("battlefield").appendChild(a.view);
  return a;
}
function Jh() {
  var a = new PIXI.Stage(16777215);
  kh(a, "interactive", !0);
  kh(a, "click", uh);
  return a;
}
function Kh(a) {
  a = kc.i(kc.i(kc.i(a, pf, Ih()), Ye, Jh()), Hf, 0);
  var b;
  b = new PIXI.TilingSprite(nh.f ? nh.f("images/grass-tile.png") : nh.call(null, "images/grass-tile.png"), 640, 640);
  b = sg.p(K([new Wf(jf, b)], 0));
  return ug(a, new W(null, 4, 5, X, [b, rh(160, 160), sh(400, 400), sh(320, 320)], null));
}
var Lh = rd.f ? rd.f(ke) : rd.call(null, ke);
function Mh(a) {
  var b = Hf.f(a);
  a = kc.i(a, Hf, b + 1);
  a = vh(a);
  a = Og.f ? Og.f(a) : Og.call(null, a);
  a = Hh.f ? Hh.f(a) : Hh.call(null, a);
  a = xh.f ? xh.f(a) : xh.call(null, a);
  Ob.e(Gc(Hf.f(a), 5), 0) && (b = R.e(tg, Ed.e(new W(null, 1, 5, X, [a], null), new W(null, 2, 5, X, [mf, Pf], null))), a = D(b) ? R.e(ih, new W(null, 2, 5, X, [a, b], null)) : a);
  if (Ob.e(Gc(Hf.f(a), 5), 0)) {
    var b = R.e(tg, Ed.e(new W(null, 1, 5, X, [a], null), new W(null, 2, 5, X, [mf, Pf], null))), c = R.e(tg, Ed.e(new W(null, 1, 5, X, [a], null), new W(null, 2, 5, X, [Lf, gf], null)));
    a = D(b) && D(c) ? R.e(gh, new W(null, 3, 5, X, [a, b, c], null)) : a;
  }
  Ob.e(Gc(Hf.f(a), 15), 0) && (b = R.e(tg, Ed.e(new W(null, 1, 5, X, [a], null), new W(null, 1, 5, X, [Xe], null))), a = D(b) ? R.e(zh, new W(null, 2, 5, X, [a, b], null)) : a);
  return Fh.f ? Fh.f(a) : Fh.call(null, a);
}
var Oh = function Nh() {
  ud.e(Lh, Mh);
  return requestAnimFrame(Nh);
}, Ph = new PIXI.AssetLoader(["images/barbarian-run-down.json", "images/grass-tile.png", "images/town-hall.png"], !1);
kh(Ph, "onComplete", function() {
  ud.e(Lh, Kh);
  return requestAnimFrame(Oh);
});
Ph.load();

})();
