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
;function fa(a, b) {
  null != a && this.append.apply(this, arguments);
}
fa.prototype.bb = "";
fa.prototype.append = function(a, b, c) {
  this.bb += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.bb += arguments[d];
    }
  }
  return this;
};
fa.prototype.toString = function() {
  return this.bb;
};
var ga = null;
function ha() {
  return new r(null, 5, [ja, !0, ka, !0, la, !1, na, !1, oa, null], null);
}
function t(a) {
  return null != a && !1 !== a;
}
function u(a, b) {
  return a[p(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function qa(a) {
  return null == a ? null : a.constructor;
}
function v(a, b) {
  var c = qa(b), c = t(t(c) ? c.Xb : c) ? c.Wb : p(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function ra(a) {
  var b = a.Wb;
  return t(b) ? b : "" + x.f(a);
}
function sa(a) {
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
var Ba = {}, z = function() {
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
  if (a ? a.aa : a) {
    return a.aa(a);
  }
  var b;
  b = Da[p(null == a ? null : a)];
  if (!b && (b = Da._, !b)) {
    throw v("ISeq.-first", a);
  }
  return b.call(null, a);
}
function Fa(a) {
  if (a ? a.ja : a) {
    return a.ja(a);
  }
  var b;
  b = Fa[p(null == a ? null : a)];
  if (!b && (b = Fa._, !b)) {
    throw v("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Ga = {}, Ha = {}, A = function() {
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
  if (a ? a.sb : a) {
    return a.sb(a, b);
  }
  var c;
  c = Ja[p(null == a ? null : a)];
  if (!c && (c = Ja._, !c)) {
    throw v("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Ka(a, b, c) {
  if (a ? a.W : a) {
    return a.W(a, b, c);
  }
  var d;
  d = Ka[p(null == a ? null : a)];
  if (!d && (d = Ka._, !d)) {
    throw v("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var La = {};
function Ma(a, b) {
  if (a ? a.ea : a) {
    return a.ea(a, b);
  }
  var c;
  c = Ma[p(null == a ? null : a)];
  if (!c && (c = Ma._, !c)) {
    throw v("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Na = {};
function Qa(a) {
  if (a ? a.xb : a) {
    return a.xb();
  }
  var b;
  b = Qa[p(null == a ? null : a)];
  if (!b && (b = Qa._, !b)) {
    throw v("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Sa(a) {
  if (a ? a.yb : a) {
    return a.yb();
  }
  var b;
  b = Sa[p(null == a ? null : a)];
  if (!b && (b = Sa._, !b)) {
    throw v("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Ta = {}, Ua = {};
function Va(a, b, c) {
  if (a ? a.zb : a) {
    return a.zb(a, b, c);
  }
  var d;
  d = Va[p(null == a ? null : a)];
  if (!d && (d = Va._, !d)) {
    throw v("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Wa(a) {
  if (a ? a.wb : a) {
    return a.wb(a);
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
    if (a ? a.$ : a) {
      return a.$(a, b, c);
    }
    var h;
    h = cb[p(null == a ? null : a)];
    if (!h && (h = cb._, !h)) {
      throw v("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.Z : a) {
      return a.Z(a, b);
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
  if (a ? a.Gb : a) {
    return a.Gb(0, b);
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
  if (a ? a.Fb : a) {
    return a.Fb(0, b, c);
  }
  var d;
  d = mb[p(null == a ? null : a)];
  if (!d && (d = mb._, !d)) {
    throw v("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function nb(a) {
  if (a ? a.cb : a) {
    return a.cb(a);
  }
  var b;
  b = nb[p(null == a ? null : a)];
  if (!b && (b = nb._, !b)) {
    throw v("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function ob(a, b) {
  if (a ? a.gb : a) {
    return a.gb(a, b);
  }
  var c;
  c = ob[p(null == a ? null : a)];
  if (!c && (c = ob._, !c)) {
    throw v("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function pb(a) {
  if (a ? a.hb : a) {
    return a.hb(a);
  }
  var b;
  b = pb[p(null == a ? null : a)];
  if (!b && (b = pb._, !b)) {
    throw v("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function qb(a, b, c) {
  if (a ? a.fb : a) {
    return a.fb(a, b, c);
  }
  var d;
  d = qb[p(null == a ? null : a)];
  if (!d && (d = qb._, !d)) {
    throw v("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function rb(a, b, c) {
  if (a ? a.Eb : a) {
    return a.Eb(0, b, c);
  }
  var d;
  d = rb[p(null == a ? null : a)];
  if (!d && (d = rb._, !d)) {
    throw v("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function sb(a) {
  if (a ? a.Bb : a) {
    return a.Bb();
  }
  var b;
  b = sb[p(null == a ? null : a)];
  if (!b && (b = sb._, !b)) {
    throw v("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function tb(a) {
  if (a ? a.ub : a) {
    return a.ub(a);
  }
  var b;
  b = tb[p(null == a ? null : a)];
  if (!b && (b = tb._, !b)) {
    throw v("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function ub(a) {
  if (a ? a.vb : a) {
    return a.vb(a);
  }
  var b;
  b = ub[p(null == a ? null : a)];
  if (!b && (b = ub._, !b)) {
    throw v("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function wb(a) {
  if (a ? a.tb : a) {
    return a.tb(a);
  }
  var b;
  b = wb[p(null == a ? null : a)];
  if (!b && (b = wb._, !b)) {
    throw v("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function xb(a, b) {
  if (a ? a.Rb : a) {
    return a.Rb(a, b);
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
    if (a ? a.Vb : a) {
      return a.Vb(a, b, c, d, e);
    }
    var n;
    n = yb[p(null == a ? null : a)];
    if (!n && (n = yb._, !n)) {
      throw v("ISwap.-swap!", a);
    }
    return n.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.Ub : a) {
      return a.Ub(a, b, c, d);
    }
    var e;
    e = yb[p(null == a ? null : a)];
    if (!e && (e = yb._, !e)) {
      throw v("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.Tb : a) {
      return a.Tb(a, b, c);
    }
    var d;
    d = yb[p(null == a ? null : a)];
    if (!d && (d = yb._, !d)) {
      throw v("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.Sb : a) {
      return a.Sb(a, b);
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
  if (a ? a.ob : a) {
    return a.ob(a);
  }
  var b;
  b = zb[p(null == a ? null : a)];
  if (!b && (b = zb._, !b)) {
    throw v("IIterable.-iterator", a);
  }
  return b.call(null, a);
}
function Ab(a) {
  this.Yb = a;
  this.B = 0;
  this.n = 1073741824;
}
Ab.prototype.Gb = function(a, b) {
  return this.Yb.append(b);
};
function Bb(a) {
  var b = new fa;
  a.H(null, new Ab(b), ha());
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
  a && (a.n & 4194304 || a.ac) ? a = a.I(null) : "number" === typeof a ? a = (Math.floor.f ? Math.floor.f(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Jb(a), 0 !== a && (a = Db(a), a = Eb(0, a), a = Fb(a, 4))) : a = null == a ? 0 : fb(a);
  return a;
}
function Lb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Nb(a, b) {
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
  this.Sa = c;
  this.Wa = d;
  this.da = e;
  this.n = 2154168321;
  this.B = 4096;
}
f = Qb.prototype;
f.H = function(a, b) {
  return B(b, this.Sa);
};
f.I = function() {
  var a = this.Wa;
  return null != a ? a : this.Wa = a = Lb(Gb(this.name), Jb(this.va));
};
f.N = function(a, b) {
  return new Qb(this.va, this.name, this.Sa, this.Wa, b);
};
f.K = function() {
  return this.da;
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
  return this.call.apply(this, [this].concat(sa(b)));
};
f.f = function(a) {
  return A.i(a, this, null);
};
f.e = function(a, b) {
  return A.i(a, this, b);
};
f.F = function(a, b) {
  return b instanceof Qb ? this.Sa === b.Sa : !1;
};
f.toString = function() {
  return this.Sa;
};
function D(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.n & 8388608 || a.bc)) {
    return a.M(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Rb(a, 0);
  }
  if (u(gb, a)) {
    return hb(a);
  }
  throw Error("" + x.f(a) + " is not ISeqable");
}
function F(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.n & 64 || a.eb)) {
    return a.aa(null);
  }
  a = D(a);
  return null == a ? null : Da(a);
}
function G(a) {
  return null != a ? a && (a.n & 64 || a.eb) ? a.ja(null) : (a = D(a)) ? Fa(a) : Sb : Sb;
}
function I(a) {
  return null == a ? null : a && (a.n & 128 || a.pb) ? a.ia(null) : D(G(a));
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
          if (I(e)) {
            a = d, d = F(e), e = I(e);
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
      a = I(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a);
    };
    a.o = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.o(b, e, K(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.s = c.s;
  b.f = function() {
    return!0;
  };
  b.e = a;
  b.o = c.o;
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
      b += 1, c = Cb(31, c) + Kb(F(a)) | 0, a = I(a);
    } else {
      return Tb(c, b);
    }
  }
}
function Vb(a) {
  var b = 0, c = 0;
  for (a = D(a);;) {
    if (null != a) {
      b += 1, c = c + Kb(F(a)) | 0, a = I(a);
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
Wb.prototype.wb = function() {
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
  return a ? a.n & 2 || a.Jb ? !0 : a.n ? !1 : u(va, a) : u(va, a);
}
function bc(a) {
  return a ? a.n & 16 || a.Cb ? !0 : a.n ? !1 : u(Ba, a) : u(Ba, a);
}
function cc(a, b) {
  this.k = a;
  this.A = b;
}
cc.prototype.Ab = function() {
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
f.ob = function() {
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
f.Z = function(a, b) {
  return $b.t(this.k, b, this.k[this.A], this.A + 1);
};
f.$ = function(a, b, c) {
  return $b.t(this.k, b, c, this.A);
};
f.aa = function() {
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
var hc = function() {
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
          a = b.e(a, d), d = F(e), e = I(e);
        } else {
          return b.e(a, d);
        }
      }
    }
    a.C = 2;
    a.s = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a);
    };
    a.o = c;
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
        return c.o(b, e, K(arguments, 2));
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
  b.o = c.o;
  return b;
}();
function M(a) {
  if (null != a) {
    if (a && (a.n & 2 || a.Jb)) {
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
                a = I(a);
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
var ic = function() {
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
        a = I(a), b -= 1;
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
        var c = I(a), h = b - 1;
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
    if (a && (a.n & 16 || a.Cb)) {
      return a.ka(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (u(Ba, a)) {
      return z.e(a, b);
    }
    if (a ? a.n & 64 || a.eb || (a.n ? 0 : u(Ca, a)) : u(Ca, a)) {
      return ic.i(a, b, c);
    }
    throw Error("nth not supported on this type " + x.f(ra(qa(a))));
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.n & 16 || a.Cb)) {
      return a.Y(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (u(Ba, a)) {
      return z.e(a, b);
    }
    if (a ? a.n & 64 || a.eb || (a.n ? 0 : u(Ca, a)) : u(Ca, a)) {
      return ic.e(a, b);
    }
    throw Error("nth not supported on this type " + x.f(ra(qa(a))));
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
    return null != a ? a && (a.n & 256 || a.Db) ? a.G(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : u(Ha, a) ? A.i(a, b, c) : c : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.n & 256 || a.Db) ? a.J(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : u(Ha, a) ? A.e(a, b) : null;
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
      a = Ka(a, b, c);
    } else {
      a: {
        a = [b];
        c = [c];
        b = a.length;
        var h = 0, k;
        for (k = nb(jc);;) {
          if (h < b) {
            var l = h + 1;
            k = k.fb(null, a[h], c[h]);
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
          d = F(l), e = F(I(l)), l = I(I(l));
        } else {
          return a;
        }
      }
    }
    a.C = 3;
    a.s = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var l = F(a);
      a = G(a);
      return c(b, d, l, a);
    };
    a.o = c;
    return a;
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.o(b, e, g, K(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 3;
  b.s = c.s;
  b.i = a;
  b.o = c.o;
  return b;
}(), P = function() {
  function a(a, b) {
    return null == a ? null : Ma(a, b);
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
          d = F(e), e = I(e);
        } else {
          return a;
        }
      }
    }
    a.C = 2;
    a.s = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a);
    };
    a.o = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.o(b, e, K(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.s = c.s;
  b.f = function(a) {
    return a;
  };
  b.e = a;
  b.o = c.o;
  return b;
}();
function lc(a) {
  var b = "function" == p(a);
  return t(b) ? b : a ? t(t(null) ? null : a.Ib) ? !0 : a.hc ? !1 : u(ua, a) : u(ua, a);
}
function mc(a, b) {
  this.l = a;
  this.meta = b;
  this.B = 0;
  this.n = 393217;
}
f = mc.prototype;
f.call = function() {
  function a(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U, ia, Pa) {
    a = this.l;
    return Q.nb ? Q.nb(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U, ia, Pa) : Q.call(null, a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U, ia, Pa);
  }
  function b(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U, ia) {
    a = this;
    return a.l.Ia ? a.l.Ia(b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U, ia) : a.l.call(null, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U, ia);
  }
  function c(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U) {
    a = this;
    return a.l.Ha ? a.l.Ha(b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U) : a.l.call(null, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U);
  }
  function d(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R) {
    a = this;
    return a.l.Ga ? a.l.Ga(b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R) : a.l.call(null, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R);
  }
  function e(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J) {
    a = this;
    return a.l.Fa ? a.l.Fa(b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J) : a.l.call(null, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J);
  }
  function g(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E) {
    a = this;
    return a.l.Ea ? a.l.Ea(b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E) : a.l.call(null, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E);
  }
  function h(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C) {
    a = this;
    return a.l.Da ? a.l.Da(b, c, d, e, g, h, k, l, m, n, q, s, w, y, C) : a.l.call(null, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C);
  }
  function k(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y) {
    a = this;
    return a.l.Ca ? a.l.Ca(b, c, d, e, g, h, k, l, m, n, q, s, w, y) : a.l.call(null, b, c, d, e, g, h, k, l, m, n, q, s, w, y);
  }
  function l(a, b, c, d, e, g, h, k, l, m, n, q, s, w) {
    a = this;
    return a.l.Ba ? a.l.Ba(b, c, d, e, g, h, k, l, m, n, q, s, w) : a.l.call(null, b, c, d, e, g, h, k, l, m, n, q, s, w);
  }
  function m(a, b, c, d, e, g, h, k, l, m, n, q, s) {
    a = this;
    return a.l.Aa ? a.l.Aa(b, c, d, e, g, h, k, l, m, n, q, s) : a.l.call(null, b, c, d, e, g, h, k, l, m, n, q, s);
  }
  function n(a, b, c, d, e, g, h, k, l, m, n, q) {
    a = this;
    return a.l.za ? a.l.za(b, c, d, e, g, h, k, l, m, n, q) : a.l.call(null, b, c, d, e, g, h, k, l, m, n, q);
  }
  function q(a, b, c, d, e, g, h, k, l, m, n) {
    a = this;
    return a.l.ya ? a.l.ya(b, c, d, e, g, h, k, l, m, n) : a.l.call(null, b, c, d, e, g, h, k, l, m, n);
  }
  function s(a, b, c, d, e, g, h, k, l, m) {
    a = this;
    return a.l.Ka ? a.l.Ka(b, c, d, e, g, h, k, l, m) : a.l.call(null, b, c, d, e, g, h, k, l, m);
  }
  function w(a, b, c, d, e, g, h, k, l) {
    a = this;
    return a.l.Ja ? a.l.Ja(b, c, d, e, g, h, k, l) : a.l.call(null, b, c, d, e, g, h, k, l);
  }
  function y(a, b, c, d, e, g, h, k) {
    a = this;
    return a.l.na ? a.l.na(b, c, d, e, g, h, k) : a.l.call(null, b, c, d, e, g, h, k);
  }
  function C(a, b, c, d, e, g, h) {
    a = this;
    return a.l.ha ? a.l.ha(b, c, d, e, g, h) : a.l.call(null, b, c, d, e, g, h);
  }
  function E(a, b, c, d, e, g) {
    a = this;
    return a.l.P ? a.l.P(b, c, d, e, g) : a.l.call(null, b, c, d, e, g);
  }
  function J(a, b, c, d, e) {
    a = this;
    return a.l.t ? a.l.t(b, c, d, e) : a.l.call(null, b, c, d, e);
  }
  function R(a, b, c, d) {
    a = this;
    return a.l.i ? a.l.i(b, c, d) : a.l.call(null, b, c, d);
  }
  function U(a, b, c) {
    a = this;
    return a.l.e ? a.l.e(b, c) : a.l.call(null, b, c);
  }
  function ia(a, b) {
    a = this;
    return a.l.f ? a.l.f(b) : a.l.call(null, b);
  }
  function Pa(a) {
    a = this;
    return a.l.D ? a.l.D() : a.l.call(null);
  }
  var H = null, H = function(H, ma, pa, ta, wa, Aa, Ea, Ia, Oa, Ra, Ya, db, jb, vb, Mb, gc, Hc, pd, Td, De, Ff, Cg) {
    switch(arguments.length) {
      case 1:
        return Pa.call(this, H);
      case 2:
        return ia.call(this, H, ma);
      case 3:
        return U.call(this, H, ma, pa);
      case 4:
        return R.call(this, H, ma, pa, ta);
      case 5:
        return J.call(this, H, ma, pa, ta, wa);
      case 6:
        return E.call(this, H, ma, pa, ta, wa, Aa);
      case 7:
        return C.call(this, H, ma, pa, ta, wa, Aa, Ea);
      case 8:
        return y.call(this, H, ma, pa, ta, wa, Aa, Ea, Ia);
      case 9:
        return w.call(this, H, ma, pa, ta, wa, Aa, Ea, Ia, Oa);
      case 10:
        return s.call(this, H, ma, pa, ta, wa, Aa, Ea, Ia, Oa, Ra);
      case 11:
        return q.call(this, H, ma, pa, ta, wa, Aa, Ea, Ia, Oa, Ra, Ya);
      case 12:
        return n.call(this, H, ma, pa, ta, wa, Aa, Ea, Ia, Oa, Ra, Ya, db);
      case 13:
        return m.call(this, H, ma, pa, ta, wa, Aa, Ea, Ia, Oa, Ra, Ya, db, jb);
      case 14:
        return l.call(this, H, ma, pa, ta, wa, Aa, Ea, Ia, Oa, Ra, Ya, db, jb, vb);
      case 15:
        return k.call(this, H, ma, pa, ta, wa, Aa, Ea, Ia, Oa, Ra, Ya, db, jb, vb, Mb);
      case 16:
        return h.call(this, H, ma, pa, ta, wa, Aa, Ea, Ia, Oa, Ra, Ya, db, jb, vb, Mb, gc);
      case 17:
        return g.call(this, H, ma, pa, ta, wa, Aa, Ea, Ia, Oa, Ra, Ya, db, jb, vb, Mb, gc, Hc);
      case 18:
        return e.call(this, H, ma, pa, ta, wa, Aa, Ea, Ia, Oa, Ra, Ya, db, jb, vb, Mb, gc, Hc, pd);
      case 19:
        return d.call(this, H, ma, pa, ta, wa, Aa, Ea, Ia, Oa, Ra, Ya, db, jb, vb, Mb, gc, Hc, pd, Td);
      case 20:
        return c.call(this, H, ma, pa, ta, wa, Aa, Ea, Ia, Oa, Ra, Ya, db, jb, vb, Mb, gc, Hc, pd, Td, De);
      case 21:
        return b.call(this, H, ma, pa, ta, wa, Aa, Ea, Ia, Oa, Ra, Ya, db, jb, vb, Mb, gc, Hc, pd, Td, De, Ff);
      case 22:
        return a.call(this, H, ma, pa, ta, wa, Aa, Ea, Ia, Oa, Ra, Ya, db, jb, vb, Mb, gc, Hc, pd, Td, De, Ff, Cg);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  H.f = Pa;
  H.e = ia;
  H.i = U;
  H.t = R;
  H.P = J;
  H.ha = E;
  H.na = C;
  H.Ja = y;
  H.Ka = w;
  H.ya = s;
  H.za = q;
  H.Aa = n;
  H.Ba = m;
  H.Ca = l;
  H.Da = k;
  H.Ea = h;
  H.Fa = g;
  H.Ga = e;
  H.Ha = d;
  H.Ia = c;
  H.Lb = b;
  H.nb = a;
  return H;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(sa(b)));
};
f.D = function() {
  return this.l.D ? this.l.D() : this.l.call(null);
};
f.f = function(a) {
  return this.l.f ? this.l.f(a) : this.l.call(null, a);
};
f.e = function(a, b) {
  return this.l.e ? this.l.e(a, b) : this.l.call(null, a, b);
};
f.i = function(a, b, c) {
  return this.l.i ? this.l.i(a, b, c) : this.l.call(null, a, b, c);
};
f.t = function(a, b, c, d) {
  return this.l.t ? this.l.t(a, b, c, d) : this.l.call(null, a, b, c, d);
};
f.P = function(a, b, c, d, e) {
  return this.l.P ? this.l.P(a, b, c, d, e) : this.l.call(null, a, b, c, d, e);
};
f.ha = function(a, b, c, d, e, g) {
  return this.l.ha ? this.l.ha(a, b, c, d, e, g) : this.l.call(null, a, b, c, d, e, g);
};
f.na = function(a, b, c, d, e, g, h) {
  return this.l.na ? this.l.na(a, b, c, d, e, g, h) : this.l.call(null, a, b, c, d, e, g, h);
};
f.Ja = function(a, b, c, d, e, g, h, k) {
  return this.l.Ja ? this.l.Ja(a, b, c, d, e, g, h, k) : this.l.call(null, a, b, c, d, e, g, h, k);
};
f.Ka = function(a, b, c, d, e, g, h, k, l) {
  return this.l.Ka ? this.l.Ka(a, b, c, d, e, g, h, k, l) : this.l.call(null, a, b, c, d, e, g, h, k, l);
};
f.ya = function(a, b, c, d, e, g, h, k, l, m) {
  return this.l.ya ? this.l.ya(a, b, c, d, e, g, h, k, l, m) : this.l.call(null, a, b, c, d, e, g, h, k, l, m);
};
f.za = function(a, b, c, d, e, g, h, k, l, m, n) {
  return this.l.za ? this.l.za(a, b, c, d, e, g, h, k, l, m, n) : this.l.call(null, a, b, c, d, e, g, h, k, l, m, n);
};
f.Aa = function(a, b, c, d, e, g, h, k, l, m, n, q) {
  return this.l.Aa ? this.l.Aa(a, b, c, d, e, g, h, k, l, m, n, q) : this.l.call(null, a, b, c, d, e, g, h, k, l, m, n, q);
};
f.Ba = function(a, b, c, d, e, g, h, k, l, m, n, q, s) {
  return this.l.Ba ? this.l.Ba(a, b, c, d, e, g, h, k, l, m, n, q, s) : this.l.call(null, a, b, c, d, e, g, h, k, l, m, n, q, s);
};
f.Ca = function(a, b, c, d, e, g, h, k, l, m, n, q, s, w) {
  return this.l.Ca ? this.l.Ca(a, b, c, d, e, g, h, k, l, m, n, q, s, w) : this.l.call(null, a, b, c, d, e, g, h, k, l, m, n, q, s, w);
};
f.Da = function(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y) {
  return this.l.Da ? this.l.Da(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y) : this.l.call(null, a, b, c, d, e, g, h, k, l, m, n, q, s, w, y);
};
f.Ea = function(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C) {
  return this.l.Ea ? this.l.Ea(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C) : this.l.call(null, a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C);
};
f.Fa = function(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E) {
  return this.l.Fa ? this.l.Fa(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E) : this.l.call(null, a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E);
};
f.Ga = function(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J) {
  return this.l.Ga ? this.l.Ga(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J) : this.l.call(null, a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J);
};
f.Ha = function(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R) {
  return this.l.Ha ? this.l.Ha(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R) : this.l.call(null, a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R);
};
f.Ia = function(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U) {
  return this.l.Ia ? this.l.Ia(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U) : this.l.call(null, a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U);
};
f.Lb = function(a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U, ia) {
  var Pa = this.l;
  return Q.nb ? Q.nb(Pa, a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U, ia) : Q.call(null, Pa, a, b, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U, ia);
};
f.Ib = !0;
f.N = function(a, b) {
  return new mc(this.l, b);
};
f.K = function() {
  return this.meta;
};
function nc(a, b) {
  return lc(a) && !(a ? a.n & 262144 || a.fc || (a.n ? 0 : u($a, a)) : u($a, a)) ? new mc(a, b) : null == a ? null : ab(a, b);
}
function oc(a) {
  var b = null != a;
  return(b ? a ? a.n & 131072 || a.Ob || (a.n ? 0 : u(Xa, a)) : u(Xa, a) : b) ? Za(a) : null;
}
function pc(a) {
  return null == a ? !1 : a ? a.n & 4096 || a.dc ? !0 : a.n ? !1 : u(Ta, a) : u(Ta, a);
}
function qc(a) {
  return null == a ? !1 : a ? a.n & 1024 || a.Mb ? !0 : a.n ? !1 : u(La, a) : u(La, a);
}
function rc(a) {
  return a ? a.n & 16384 || a.ec ? !0 : a.n ? !1 : u(Ua, a) : u(Ua, a);
}
function sc(a) {
  return a ? a.B & 512 || a.$b ? !0 : !1 : !1;
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
  if (qa(a) === qa(b)) {
    return a && (a.B & 2048 || a.lb) ? a.mb(null, b) : a > b ? 1 : a < b ? -1 : 0;
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
        c = I(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = D(b);
    if (c) {
      var h = F(c), c = I(c);
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
    return c && (c.n & 524288 || c.Qb) ? c.$(null, a, b) : c instanceof Array ? $b.i(c, a, b) : "string" === typeof c ? $b.i(c, a, b) : u(bb, c) ? cb.i(c, a, b) : Bc.i(a, b, c);
  }
  function b(a, b) {
    return b && (b.n & 524288 || b.Qb) ? b.Z(null, a) : b instanceof Array ? $b.e(b, a) : "string" === typeof b ? $b.e(b, a) : u(bb, b) ? cb.e(b, a) : Bc.e(a, b);
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
function Ic(a) {
  return Fc((a - a % 2) / 2);
}
var Jc = function() {
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
function Kc(a) {
  return Fc(Jc.f(a));
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
      1 < arguments.length && (k = K(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new fa(b.f(a)), l = d;;) {
        if (t(l)) {
          e = e.append(b.f(F(l))), l = I(l);
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
    a.o = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.o(b, K(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 1;
  b.s = c.s;
  b.D = function() {
    return "";
  };
  b.f = a;
  b.o = c.o;
  return b;
}();
function dc(a, b) {
  var c;
  if (b ? b.n & 16777216 || b.cc || (b.n ? 0 : u(ib, b)) : u(ib, b)) {
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
            c = I(c), d = I(d);
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
function Mc(a) {
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
      a = I(a);
    } else {
      return b;
    }
  }
}
function Pc(a, b, c, d, e) {
  this.meta = a;
  this.first = b;
  this.Na = c;
  this.count = d;
  this.q = e;
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
  return 1 === this.count ? null : this.Na;
};
f.O = function() {
  return this.count;
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return Sb;
};
f.Z = function(a, b) {
  return Bc.e(b, this);
};
f.$ = function(a, b, c) {
  return Bc.i(b, c, this);
};
f.aa = function() {
  return this.first;
};
f.ja = function() {
  return 1 === this.count ? Sb : this.Na;
};
f.M = function() {
  return this;
};
f.N = function(a, b) {
  return new Pc(b, this.first, this.Na, this.count, this.q);
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
f.Z = function(a, b) {
  return Bc.e(b, this);
};
f.$ = function(a, b, c) {
  return Bc.i(b, c, this);
};
f.aa = function() {
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
            b.push(a.aa(null)), a = a.ia(null);
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
  a.o = b;
  return a;
}();
function Sc(a, b, c, d) {
  this.meta = a;
  this.first = b;
  this.Na = c;
  this.q = d;
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
  return null == this.Na ? null : D(this.Na);
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return nc(Sb, this.meta);
};
f.Z = function(a, b) {
  return Bc.e(b, this);
};
f.$ = function(a, b, c) {
  return Bc.i(b, c, this);
};
f.aa = function() {
  return this.first;
};
f.ja = function() {
  return null == this.Na ? Sb : this.Na;
};
f.M = function() {
  return this;
};
f.N = function(a, b) {
  return new Sc(b, this.first, this.Na, this.q);
};
f.L = function(a, b) {
  return new Sc(null, b, this, this.q);
};
function L(a, b) {
  var c = null == b;
  return(c ? c : b && (b.n & 64 || b.eb)) ? new Sc(null, a, b, null) : new Sc(null, a, D(b), null);
}
function S(a, b, c, d) {
  this.va = a;
  this.name = b;
  this.U = c;
  this.Wa = d;
  this.n = 2153775105;
  this.B = 4096;
}
f = S.prototype;
f.H = function(a, b) {
  return B(b, ":" + x.f(this.U));
};
f.I = function() {
  var a = this.Wa;
  return null != a ? a : this.Wa = a = Lb(Gb(this.name), Jb(this.va)) + 2654435769 | 0;
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
  return this.call.apply(this, [this].concat(sa(b)));
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
  return ":" + x.f(this.U);
};
function T(a, b) {
  return a === b ? !0 : a instanceof S && b instanceof S ? a.U === b.U : !1;
}
var Uc = function() {
  function a(a, b) {
    return new S(a, b, "" + x.f(t(a) ? "" + x.f(a) + "/" : null) + x.f(b), null);
  }
  function b(a) {
    if (a instanceof S) {
      return a;
    }
    if (a instanceof Qb) {
      var b;
      if (a && (a.B & 4096 || a.Pb)) {
        b = a.va;
      } else {
        throw Error("Doesn't support namespace: " + x.f(a));
      }
      return new S(b, Tc.f ? Tc.f(a) : Tc.call(null, a), a.Sa, null);
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
  this.Za = b;
  this.T = c;
  this.q = d;
  this.B = 0;
  this.n = 32374988;
}
f = Vc.prototype;
f.toString = function() {
  return Bb(this);
};
function Wc(a) {
  null != a.Za && (a.T = a.Za.D ? a.Za.D() : a.Za.call(null), a.Za = null);
  return a.T;
}
f.K = function() {
  return this.meta;
};
f.ia = function() {
  hb(this);
  return null == this.T ? null : I(this.T);
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return nc(Sb, this.meta);
};
f.Z = function(a, b) {
  return Bc.e(b, this);
};
f.$ = function(a, b, c) {
  return Bc.i(b, c, this);
};
f.aa = function() {
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
  return new Vc(b, this.Za, this.T, this.q);
};
f.L = function(a, b) {
  return L(b, this);
};
function Xc(a, b) {
  this.rb = a;
  this.end = b;
  this.B = 0;
  this.n = 2;
}
Xc.prototype.O = function() {
  return this.end;
};
Xc.prototype.add = function(a) {
  this.rb[this.end] = a;
  return this.end += 1;
};
Xc.prototype.S = function() {
  var a = new Yc(this.rb, 0, this.end);
  this.rb = null;
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
f.Z = function(a, b) {
  return $b.t(this.k, b, this.k[this.off], this.off + 1);
};
f.$ = function(a, b, c) {
  return $b.t(this.k, b, c, this.off);
};
f.Bb = function() {
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
  this.q = d;
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
  var a = this.q;
  return null != a ? a : this.q = a = Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return nc(Sb, this.meta);
};
f.aa = function() {
  return z.e(this.S, 0);
};
f.ja = function() {
  return 1 < xa(this.S) ? new ad(sb(this.S), this.wa, this.meta, null) : null == this.wa ? Sb : this.wa;
};
f.M = function() {
  return this;
};
f.ub = function() {
  return this.S;
};
f.vb = function() {
  return null == this.wa ? Sb : this.wa;
};
f.N = function(a, b) {
  return new ad(this.S, this.wa, b, this.q);
};
f.L = function(a, b) {
  return L(b, this);
};
f.tb = function() {
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
      b.push(F(a)), a = I(a);
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
      c = I(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var gd = function fd(b) {
  return null == b ? null : null == I(b) ? D(F(b)) : L(F(b), fd(I(b)));
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
      return function q(a, b) {
        return new Vc(null, function() {
          var c = D(a);
          return c ? sc(c) ? bd(tb(c), q(ub(c), b)) : L(F(c), q(G(c), b)) : t(b) ? q(F(b), I(b)) : null;
        }, null, null);
      }(d.e(a, c), e);
    }
    a.C = 2;
    a.s = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
      return b(c, d, a);
    };
    a.o = b;
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
        return e.o(d, h, K(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.C = 2;
  d.s = e.s;
  d.D = c;
  d.f = b;
  d.e = a;
  d.o = e.o;
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
      var q = null;
      4 < arguments.length && (q = K(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, q);
    }
    function b(a, c, d, e, g) {
      return L(a, L(c, L(d, L(e, gd(g)))));
    }
    a.C = 4;
    a.s = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var n = F(a);
      a = G(a);
      return b(c, d, e, n, a);
    };
    a.o = b;
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
        return d.o(c, g, h, k, K(arguments, 4));
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
  c.o = d.o;
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
          c = F(d), d = I(d);
        } else {
          return a;
        }
      }
    }
    a.C = 2;
    a.s = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
      return b(c, d, a);
    };
    a.o = b;
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
        return c.o(b, e, K(arguments, 2));
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
  b.o = c.o;
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
          c = F(k), d = F(I(k)), k = I(I(k));
        } else {
          return a;
        }
      }
    }
    a.C = 3;
    a.s = function(a) {
      var c = F(a);
      a = I(a);
      var h = F(a);
      a = I(a);
      var k = F(a);
      a = G(a);
      return b(c, h, k, a);
    };
    a.o = b;
    return a;
  }(), a = function(a, d, e, g) {
    switch(arguments.length) {
      case 3:
        return qb(a, d, e);
      default:
        return b.o(a, d, e, K(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.C = 3;
  a.s = b.s;
  a.i = function(a, b, e) {
    return qb(a, b, e);
  };
  a.o = b.o;
  return a;
}();
function kd(a, b, c) {
  var d = D(c);
  if (0 === b) {
    return a.D ? a.D() : a.call(null);
  }
  c = Da(d);
  var e = Fa(d);
  if (1 === b) {
    return a.f ? a.f(c) : a.f ? a.f(c) : a.call(null, c);
  }
  var d = Da(e), g = Fa(e);
  if (2 === b) {
    return a.e ? a.e(c, d) : a.e ? a.e(c, d) : a.call(null, c, d);
  }
  var e = Da(g), h = Fa(g);
  if (3 === b) {
    return a.i ? a.i(c, d, e) : a.i ? a.i(c, d, e) : a.call(null, c, d, e);
  }
  var g = Da(h), k = Fa(h);
  if (4 === b) {
    return a.t ? a.t(c, d, e, g) : a.t ? a.t(c, d, e, g) : a.call(null, c, d, e, g);
  }
  var h = Da(k), l = Fa(k);
  if (5 === b) {
    return a.P ? a.P(c, d, e, g, h) : a.P ? a.P(c, d, e, g, h) : a.call(null, c, d, e, g, h);
  }
  var k = Da(l), m = Fa(l);
  if (6 === b) {
    return a.ha ? a.ha(c, d, e, g, h, k) : a.ha ? a.ha(c, d, e, g, h, k) : a.call(null, c, d, e, g, h, k);
  }
  var l = Da(m), n = Fa(m);
  if (7 === b) {
    return a.na ? a.na(c, d, e, g, h, k, l) : a.na ? a.na(c, d, e, g, h, k, l) : a.call(null, c, d, e, g, h, k, l);
  }
  var m = Da(n), q = Fa(n);
  if (8 === b) {
    return a.Ja ? a.Ja(c, d, e, g, h, k, l, m) : a.Ja ? a.Ja(c, d, e, g, h, k, l, m) : a.call(null, c, d, e, g, h, k, l, m);
  }
  var n = Da(q), s = Fa(q);
  if (9 === b) {
    return a.Ka ? a.Ka(c, d, e, g, h, k, l, m, n) : a.Ka ? a.Ka(c, d, e, g, h, k, l, m, n) : a.call(null, c, d, e, g, h, k, l, m, n);
  }
  var q = Da(s), w = Fa(s);
  if (10 === b) {
    return a.ya ? a.ya(c, d, e, g, h, k, l, m, n, q) : a.ya ? a.ya(c, d, e, g, h, k, l, m, n, q) : a.call(null, c, d, e, g, h, k, l, m, n, q);
  }
  var s = Da(w), y = Fa(w);
  if (11 === b) {
    return a.za ? a.za(c, d, e, g, h, k, l, m, n, q, s) : a.za ? a.za(c, d, e, g, h, k, l, m, n, q, s) : a.call(null, c, d, e, g, h, k, l, m, n, q, s);
  }
  var w = Da(y), C = Fa(y);
  if (12 === b) {
    return a.Aa ? a.Aa(c, d, e, g, h, k, l, m, n, q, s, w) : a.Aa ? a.Aa(c, d, e, g, h, k, l, m, n, q, s, w) : a.call(null, c, d, e, g, h, k, l, m, n, q, s, w);
  }
  var y = Da(C), E = Fa(C);
  if (13 === b) {
    return a.Ba ? a.Ba(c, d, e, g, h, k, l, m, n, q, s, w, y) : a.Ba ? a.Ba(c, d, e, g, h, k, l, m, n, q, s, w, y) : a.call(null, c, d, e, g, h, k, l, m, n, q, s, w, y);
  }
  var C = Da(E), J = Fa(E);
  if (14 === b) {
    return a.Ca ? a.Ca(c, d, e, g, h, k, l, m, n, q, s, w, y, C) : a.Ca ? a.Ca(c, d, e, g, h, k, l, m, n, q, s, w, y, C) : a.call(null, c, d, e, g, h, k, l, m, n, q, s, w, y, C);
  }
  var E = Da(J), R = Fa(J);
  if (15 === b) {
    return a.Da ? a.Da(c, d, e, g, h, k, l, m, n, q, s, w, y, C, E) : a.Da ? a.Da(c, d, e, g, h, k, l, m, n, q, s, w, y, C, E) : a.call(null, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E);
  }
  var J = Da(R), U = Fa(R);
  if (16 === b) {
    return a.Ea ? a.Ea(c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J) : a.Ea ? a.Ea(c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J) : a.call(null, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J);
  }
  var R = Da(U), ia = Fa(U);
  if (17 === b) {
    return a.Fa ? a.Fa(c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R) : a.Fa ? a.Fa(c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R) : a.call(null, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R);
  }
  var U = Da(ia), Pa = Fa(ia);
  if (18 === b) {
    return a.Ga ? a.Ga(c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U) : a.Ga ? a.Ga(c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U) : a.call(null, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U);
  }
  ia = Da(Pa);
  Pa = Fa(Pa);
  if (19 === b) {
    return a.Ha ? a.Ha(c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U, ia) : a.Ha ? a.Ha(c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U, ia) : a.call(null, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U, ia);
  }
  var H = Da(Pa);
  Fa(Pa);
  if (20 === b) {
    return a.Ia ? a.Ia(c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U, ia, H) : a.Ia ? a.Ia(c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U, ia, H) : a.call(null, c, d, e, g, h, k, l, m, n, q, s, w, y, C, E, J, R, U, ia, H);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var Q = function() {
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
    function a(c, d, e, g, h, w) {
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
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var g = F(a);
      a = I(a);
      var h = F(a);
      a = G(a);
      return b(c, d, e, g, h, a);
    };
    a.o = b;
    return a;
  }(), e = function(e, k, l, m, n, q) {
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
        return g.o(e, k, l, m, n, K(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.C = 5;
  e.s = g.s;
  e.e = d;
  e.i = c;
  e.t = b;
  e.P = a;
  e.o = g.o;
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
      var d = I(b);
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
        return Q.P(a, b, c, d, e);
      }
      e.C = 0;
      e.s = function(a) {
        a = D(a);
        return n(a);
      };
      e.o = n;
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
        return Q.t(a, b, c, d);
      }
      d.C = 0;
      d.s = function(a) {
        a = D(a);
        return e(a);
      };
      d.o = e;
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
        return Q.i(a, b, c);
      }
      c.C = 0;
      c.s = function(a) {
        a = D(a);
        return d(a);
      };
      c.o = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, g, q) {
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
          return Q.P(a, c, d, e, V.e(g, b));
        }
        b.C = 0;
        b.s = function(a) {
          a = D(a);
          return h(a);
        };
        b.o = h;
        return b;
      }();
    }
    a.C = 4;
    a.s = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var g = F(a);
      a = G(a);
      return b(c, d, e, g, a);
    };
    a.o = b;
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
        return e.o(d, h, k, l, K(arguments, 4));
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
  d.o = e.o;
  return d;
}();
function od(a, b, c, d) {
  this.state = a;
  this.meta = b;
  this.Zb = c;
  this.Hb = d;
  this.n = 6455296;
  this.B = 16386;
}
f = od.prototype;
f.I = function() {
  return this[ba] || (this[ba] = ++ca);
};
f.Fb = function(a, b, c) {
  for (var d = D(this.Hb), e = null, g = 0, h = 0;;) {
    if (h < g) {
      a = e.Y(null, h);
      var k = N.i(a, 0, null);
      a = N.i(a, 1, null);
      var l = b, m = c;
      a.t ? a.t(k, this, l, m) : a.call(null, k, this, l, m);
      h += 1;
    } else {
      if (a = D(d)) {
        d = a, sc(d) ? (e = tb(d), d = ub(d), a = e, g = M(e), e = a) : (a = F(d), k = N.i(a, 0, null), a = N.i(a, 1, null), e = k, g = b, h = c, a.t ? a.t(e, this, g, h) : a.call(null, e, this, g, h), d = I(d), e = null, g = 0), h = 0;
      } else {
        return null;
      }
    }
  }
};
f.K = function() {
  return this.meta;
};
f.wb = function() {
  return this.state;
};
f.F = function(a, b) {
  return this === b;
};
var sd = function() {
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
      var d = (null == c ? 0 : c ? c.n & 64 || c.eb || (c.n ? 0 : u(Ca, c)) : u(Ca, c)) ? Q.e(qd, c) : c, e = O.e(d, rd), d = O.e(d, la);
      return new od(a, d, e, null);
    }
    a.C = 1;
    a.s = function(a) {
      var c = F(a);
      a = G(a);
      return b(c, a);
    };
    a.o = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.o(b, K(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 1;
  b.s = c.s;
  b.f = a;
  b.o = c.o;
  return b;
}();
function td(a, b) {
  if (a instanceof od) {
    var c = a.Zb;
    if (null != c && !t(c.f ? c.f(b) : c.call(null, b))) {
      throw Error("Assert failed: Validator rejected reference state\n" + x.f(function() {
        var a = Rc(new Qb(null, "validate", "validate", 1439230700, null), new Qb(null, "new-value", "new-value", -1567397401, null));
        return ud.f ? ud.f(a) : ud.call(null, a);
      }()));
    }
    c = a.state;
    a.state = b;
    null != a.Hb && mb(a, c, b);
    return b;
  }
  return xb(a, b);
}
var vd = function() {
  function a(a, b, c, d) {
    if (a instanceof od) {
      var e = a.state;
      b = b.i ? b.i(e, c, d) : b.call(null, e, c, d);
      a = td(a, b);
    } else {
      a = yb.t(a, b, c, d);
    }
    return a;
  }
  function b(a, b, c) {
    if (a instanceof od) {
      var d = a.state;
      b = b.e ? b.e(d, c) : b.call(null, d, c);
      a = td(a, b);
    } else {
      a = yb.i(a, b, c);
    }
    return a;
  }
  function c(a, b) {
    var c;
    a instanceof od ? (c = a.state, c = b.f ? b.f(c) : b.call(null, c), c = td(a, c)) : c = yb.e(a, b);
    return c;
  }
  var d = null, e = function() {
    function a(c, d, e, g, q) {
      var s = null;
      4 < arguments.length && (s = K(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, s);
    }
    function b(a, c, d, e, g) {
      return a instanceof od ? td(a, Q.P(c, a.state, d, e, g)) : yb.P(a, c, d, e, g);
    }
    a.C = 4;
    a.s = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var g = F(a);
      a = G(a);
      return b(c, d, e, g, a);
    };
    a.o = b;
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
        return e.o(d, h, k, l, K(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.C = 4;
  d.s = e.s;
  d.e = c;
  d.i = b;
  d.t = a;
  d.o = e.o;
  return d;
}(), wd = function() {
  function a(a, b, c, d) {
    return new Vc(null, function() {
      var g = D(b), q = D(c), s = D(d);
      if (g && q && s) {
        var w = L, y;
        y = F(g);
        var C = F(q), E = F(s);
        y = a.i ? a.i(y, C, E) : a.call(null, y, C, E);
        g = w(y, e.t(a, G(g), G(q), G(s)));
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
        var q = L, s;
        s = F(d);
        var w = F(g);
        s = a.e ? a.e(s, w) : a.call(null, s, w);
        d = q(s, e.i(a, G(d), G(g)));
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
          for (var d = tb(c), g = M(d), q = Zc(g), s = 0;;) {
            if (s < g) {
              cd(q, function() {
                var b = z.e(d, s);
                return a.f ? a.f(b) : a.call(null, b);
              }()), s += 1;
            } else {
              break;
            }
          }
          return bd(q.S(), e.e(a, ub(c)));
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
            e = Q.i(a, e, g);
            return b.e ? b.e(c, e) : b.call(null, c, e);
          }
          c.C = 2;
          c.s = function(a) {
            var b = F(a);
            a = I(a);
            var c = F(a);
            a = G(a);
            return d(b, c, a);
          };
          c.o = d;
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
              return s.o(a, b, K(arguments, 2));
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        g.C = 2;
        g.s = s.s;
        g.D = e;
        g.f = d;
        g.e = c;
        g.o = s.o;
        return g;
      }();
    };
  }
  var e = null, g = function() {
    function a(c, d, e, g, h) {
      var w = null;
      4 < arguments.length && (w = K(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, w);
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
          return Q.e(a, b);
        };
      }(k), k(hc.o(h, g, K([d, c], 0))));
    }
    a.C = 4;
    a.s = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var g = F(a);
      a = G(a);
      return b(c, d, e, g, a);
    };
    a.o = b;
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
        return g.o(e, k, l, m, K(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.C = 4;
  e.s = g.s;
  e.f = d;
  e.e = c;
  e.i = b;
  e.t = a;
  e.o = g.o;
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
            var k = Wa(a), l = vd.e(a, Ec), k = 0 < k ? b.e ? b.e(d, h) : b.call(null, d, h) : d;
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
            vd.e(a, Ec);
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
        var c = wd.e(D, hc.o(e, d, K([a], 0)));
        return md(Cc, c) ? V.e(wd.e(F, c), Q.e(b, wd.e(G, c))) : null;
      }, null, null);
    }
    a.C = 2;
    a.s = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a);
    };
    a.o = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.o(b, e, K(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.s = c.s;
  b.e = a;
  b.o = c.o;
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
    a && (a.B & 4 || a.Kb) ? (b = Dc.t(b, id, nb(a), c), b = pb(b), a = nc(b, oc(a))) : a = Dc.t(b, hc, a, c);
    return a;
  }
  function b(a, b) {
    var c;
    null != a ? a && (a.B & 4 || a.Kb) ? (c = Ac.i(ob, nb(a), b), c = pb(c), c = nc(c, oc(a))) : c = Ac.i(za, a, b) : c = Ac.i(hc, Sb, b);
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
        if (k ? k.n & 256 || k.Db || (k.n ? 0 : u(Ha, k)) : u(Ha, k)) {
          a = O.i(a, F(b), h);
          if (h === a) {
            return c;
          }
          b = I(b);
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
  a = a.p;
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
  var g = new Gd(d.Q, sa(d.k)), h = b.p - 1 >>> c & 31;
  5 === c ? g.k[h] = e : (d = d.k[h], b = null != d ? Kd(b, c - 5, d, e) : Jd(null, c - 5, e), g.k[h] = b);
  return g;
};
function Md(a, b) {
  throw Error("No item " + x.f(a) + " in vector of length " + x.f(b));
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
  return 0 <= b && b < a.p ? Nd(a, b) : Md(b, a.p);
}
var Qd = function Pd(b, c, d, e, g) {
  var h = new Gd(d.Q, sa(d.k));
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
  this.qb = b;
  this.k = c;
  this.v = d;
  this.start = e;
  this.end = g;
}
Rd.prototype.Ab = function() {
  return this.A < this.end;
};
Rd.prototype.next = function() {
  32 === this.A - this.qb && (this.k = Nd(this.v, this.A), this.qb += 32);
  var a = this.k[this.A & 31];
  this.A += 1;
  return a;
};
function W(a, b, c, d, e, g) {
  this.meta = a;
  this.p = b;
  this.shift = c;
  this.root = d;
  this.ga = e;
  this.q = g;
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
  return 0 <= b && b < this.p ? Nd(this, b)[b & 31] : c;
};
f.zb = function(a, b, c) {
  if (0 <= b && b < this.p) {
    return Id(this) <= b ? (a = sa(this.ga), a[b & 31] = c, new W(this.meta, this.p, this.shift, this.root, a, null)) : new W(this.meta, this.p, this.shift, Qd(this, this.shift, this.root, b, c), this.ga, null);
  }
  if (b === this.p) {
    return za(this, c);
  }
  throw Error("Index " + x.f(b) + " out of bounds  [0," + x.f(this.p) + "]");
};
f.ob = function() {
  var a = this.p;
  return new Rd(0, 0, 0 < M(this) ? Nd(this, 0) : null, this, 0, a);
};
f.K = function() {
  return this.meta;
};
f.O = function() {
  return this.p;
};
f.xb = function() {
  return z.e(this, 0);
};
f.yb = function() {
  return z.e(this, 1);
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Ub(this);
};
f.F = function(a, b) {
  if (b instanceof W) {
    if (this.p === M(b)) {
      for (var c = zb(this), d = zb(b);;) {
        if (t(c.Ab())) {
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
f.cb = function() {
  var a = this;
  return new Sd(a.p, a.shift, function() {
    var b = a.root;
    return Ud.f ? Ud.f(b) : Ud.call(null, b);
  }(), function() {
    var b = a.ga;
    return Vd.f ? Vd.f(b) : Vd.call(null, b);
  }());
};
f.X = function() {
  return nc(fc, this.meta);
};
f.Z = function(a, b) {
  return Zb.e(this, b);
};
f.$ = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.p) {
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
f.W = function(a, b, c) {
  if ("number" === typeof b) {
    return Va(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
f.M = function() {
  if (0 === this.p) {
    return null;
  }
  if (32 >= this.p) {
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
  return Wd.t ? Wd.t(this, a, 0, 0) : Wd.call(null, this, a, 0, 0);
};
f.N = function(a, b) {
  return new W(b, this.p, this.shift, this.root, this.ga, this.q);
};
f.L = function(a, b) {
  if (32 > this.p - Id(this)) {
    for (var c = this.ga.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.ga[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new W(this.meta, this.p + 1, this.shift, this.root, d, null);
  }
  c = (d = this.p >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Hd(null), d.k[0] = this.root, e = Jd(null, this.shift, new Gd(null, this.ga)), d.k[1] = e) : d = Ld(this, this.shift, this.root, new Gd(null, this.ga));
  return new W(this.meta, this.p + 1, c, d, [b], null);
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
  return this.call.apply(this, [this].concat(sa(b)));
};
f.f = function(a) {
  return this.Y(null, a);
};
f.e = function(a, b) {
  return this.ka(null, a, b);
};
var X = new Gd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), fc = new W(null, 0, 5, X, [], 0);
function Xd(a, b, c, d, e, g) {
  this.ma = a;
  this.Ma = b;
  this.A = c;
  this.off = d;
  this.meta = e;
  this.q = g;
  this.n = 32375020;
  this.B = 1536;
}
f = Xd.prototype;
f.toString = function() {
  return Bb(this);
};
f.K = function() {
  return this.meta;
};
f.ia = function() {
  if (this.off + 1 < this.Ma.length) {
    var a;
    a = this.ma;
    var b = this.Ma, c = this.A, d = this.off + 1;
    a = Wd.t ? Wd.t(a, b, c, d) : Wd.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return wb(this);
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return nc(fc, this.meta);
};
f.Z = function(a, b) {
  var c = this;
  return Zb.e(function() {
    var a = c.ma, b = c.A + c.off, g = M(c.ma);
    return Yd.i ? Yd.i(a, b, g) : Yd.call(null, a, b, g);
  }(), b);
};
f.$ = function(a, b, c) {
  var d = this;
  return Zb.i(function() {
    var a = d.ma, b = d.A + d.off, c = M(d.ma);
    return Yd.i ? Yd.i(a, b, c) : Yd.call(null, a, b, c);
  }(), b, c);
};
f.aa = function() {
  return this.Ma[this.off];
};
f.ja = function() {
  if (this.off + 1 < this.Ma.length) {
    var a;
    a = this.ma;
    var b = this.Ma, c = this.A, d = this.off + 1;
    a = Wd.t ? Wd.t(a, b, c, d) : Wd.call(null, a, b, c, d);
    return null == a ? Sb : a;
  }
  return ub(this);
};
f.M = function() {
  return this;
};
f.ub = function() {
  return $c.e(this.Ma, this.off);
};
f.vb = function() {
  var a = this.A + this.Ma.length;
  if (a < xa(this.ma)) {
    var b = this.ma, c = Nd(this.ma, a);
    return Wd.t ? Wd.t(b, c, a, 0) : Wd.call(null, b, c, a, 0);
  }
  return Sb;
};
f.N = function(a, b) {
  var c = this.ma, d = this.Ma, e = this.A, g = this.off;
  return Wd.P ? Wd.P(c, d, e, g, b) : Wd.call(null, c, d, e, g, b);
};
f.L = function(a, b) {
  return L(b, this);
};
f.tb = function() {
  var a = this.A + this.Ma.length;
  if (a < xa(this.ma)) {
    var b = this.ma, c = Nd(this.ma, a);
    return Wd.t ? Wd.t(b, c, a, 0) : Wd.call(null, b, c, a, 0);
  }
  return null;
};
var Wd = function() {
  function a(a, b, c, d, l) {
    return new Xd(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Xd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Xd(a, Od(a, b), b, c, null, null);
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
function Zd(a, b, c, d, e) {
  this.meta = a;
  this.v = b;
  this.start = c;
  this.end = d;
  this.q = e;
  this.n = 166617887;
  this.B = 8192;
}
f = Zd.prototype;
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
f.zb = function(a, b, c) {
  var d = this.start + b;
  a = this.meta;
  c = kc.i(this.v, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return $d.P ? $d.P(a, c, b, d, null) : $d.call(null, a, c, b, d, null);
};
f.K = function() {
  return this.meta;
};
f.O = function() {
  return this.end - this.start;
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return nc(fc, this.meta);
};
f.Z = function(a, b) {
  return Zb.e(this, b);
};
f.$ = function(a, b, c) {
  return Zb.i(this, b, c);
};
f.W = function(a, b, c) {
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
  var c = this.v, d = this.start, e = this.end, g = this.q;
  return $d.P ? $d.P(b, c, d, e, g) : $d.call(null, b, c, d, e, g);
};
f.L = function(a, b) {
  var c = this.meta, d = Va(this.v, this.end, b), e = this.start, g = this.end + 1;
  return $d.P ? $d.P(c, d, e, g, null) : $d.call(null, c, d, e, g, null);
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
  return this.call.apply(this, [this].concat(sa(b)));
};
f.f = function(a) {
  return this.Y(null, a);
};
f.e = function(a, b) {
  return this.ka(null, a, b);
};
function $d(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Zd) {
      c = b.start + c, d = b.start + d, b = b.v;
    } else {
      var g = M(b);
      if (0 > c || 0 > d || c > g || d > g) {
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
  return a === b.Q ? b : new Gd(a, sa(b.k));
}
function Ud(a) {
  return new Gd({}, sa(a.k));
}
function Vd(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  uc(a, 0, b, 0, a.length);
  return b;
}
var ce = function be(b, c, d, e) {
  d = ae(b.root.Q, d);
  var g = b.p - 1 >>> c & 31;
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
  this.p = a;
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
  return this.call.apply(this, [this].concat(sa(b)));
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
  return 0 <= b && b < this.p ? z.e(this, b) : c;
};
f.O = function() {
  if (this.root.Q) {
    return this.p;
  }
  throw Error("count after persistent!");
};
f.Eb = function(a, b, c) {
  var d = this;
  if (d.root.Q) {
    if (0 <= b && b < d.p) {
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
    if (b === d.p) {
      return ob(this, c);
    }
    throw Error("Index " + x.f(b) + " out of bounds for TransientVector of length" + x.f(d.p));
  }
  throw Error("assoc! after persistent!");
};
f.fb = function(a, b, c) {
  if ("number" === typeof b) {
    return rb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
f.gb = function(a, b) {
  if (this.root.Q) {
    if (32 > this.p - Id(this)) {
      this.ga[this.p & 31] = b;
    } else {
      var c = new Gd(this.root.Q, this.ga), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.ga = d;
      if (this.p >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Jd(this.root.Q, this.shift, c);
        this.root = new Gd(this.root.Q, d);
        this.shift = e;
      } else {
        this.root = ce(this, this.shift, this.root, c);
      }
    }
    this.p += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
f.hb = function() {
  if (this.root.Q) {
    this.root.Q = null;
    var a = this.p - Id(this), b = Array(a);
    uc(this.ga, 0, b, 0, a);
    return new W(null, this.p, this.shift, this.root, b, null);
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
  return xc(qc(b) ? M(a) === M(b) ? md(Cc, wd.e(function(a) {
    return Ob.e(O.i(b, F(a), ee), F(I(a)));
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
          e = b.Sa;
          for (g = 0;;) {
            if (d <= g) {
              c = -1;
              break a;
            }
            h = c[g];
            if (h instanceof Qb && e === h.Sa) {
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
  this.da = c;
  this.B = 0;
  this.n = 32374990;
}
f = he.prototype;
f.toString = function() {
  return Bb(this);
};
f.K = function() {
  return this.da;
};
f.ia = function() {
  return this.A < this.k.length - 2 ? new he(this.k, this.A + 2, this.da) : null;
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
  return nc(Sb, this.da);
};
f.Z = function(a, b) {
  return Bc.e(b, this);
};
f.$ = function(a, b, c) {
  return Bc.i(b, c, this);
};
f.aa = function() {
  return new W(null, 2, 5, X, [this.k[this.A], this.k[this.A + 1]], null);
};
f.ja = function() {
  return this.A < this.k.length - 2 ? new he(this.k, this.A + 2, this.da) : Sb;
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
  this.p = c;
}
ie.prototype.Ab = function() {
  return this.A < this.p;
};
ie.prototype.next = function() {
  var a = new W(null, 2, 5, X, [this.k[this.A], this.k[this.A + 1]], null);
  this.A += 2;
  return a;
};
function r(a, b, c, d) {
  this.meta = a;
  this.p = b;
  this.k = c;
  this.q = d;
  this.n = 16647951;
  this.B = 8196;
}
f = r.prototype;
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
f.ob = function() {
  return new ie(this.k, 0, 2 * this.p);
};
f.K = function() {
  return this.meta;
};
f.O = function() {
  return this.p;
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Vb(this);
};
f.F = function(a, b) {
  if (b && (b.n & 1024 || b.Mb)) {
    var c = this.k.length;
    if (this.p === b.O(null)) {
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
f.cb = function() {
  return new je({}, this.k.length, sa(this.k));
};
f.X = function() {
  return ab(ke, this.meta);
};
f.Z = function(a, b) {
  return Bc.e(b, this);
};
f.$ = function(a, b, c) {
  return Bc.i(b, c, this);
};
f.ea = function(a, b) {
  if (0 <= ge(this, b)) {
    var c = this.k.length, d = c - 2;
    if (0 === d) {
      return ya(this);
    }
    for (var d = Array(d), e = 0, g = 0;;) {
      if (e >= c) {
        return new r(this.meta, this.p - 1, d, null);
      }
      Ob.e(b, this.k[e]) || (d[g] = this.k[e], d[g + 1] = this.k[e + 1], g += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
f.W = function(a, b, c) {
  a = ge(this, b);
  if (-1 === a) {
    if (this.p < le) {
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
      return new r(this.meta, this.p + 1, e, null);
    }
    return ab(Ka(Ed.e(jc, this), b, c), this.meta);
  }
  if (c === this.k[a + 1]) {
    return this;
  }
  b = sa(this.k);
  b[a + 1] = c;
  return new r(this.meta, this.p, b, null);
};
f.sb = function(a, b) {
  return-1 !== ge(this, b);
};
f.M = function() {
  var a = this.k;
  return 0 <= a.length - 2 ? new he(a, 0, null) : null;
};
f.N = function(a, b) {
  return new r(b, this.p, this.k, this.q);
};
f.L = function(a, b) {
  if (rc(b)) {
    return Ka(this, z.e(b, 0), z.e(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (rc(e)) {
      c = Ka(c, z.e(e, 0), z.e(e, 1)), d = I(d);
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
  return this.call.apply(this, [this].concat(sa(b)));
};
f.f = function(a) {
  return this.J(null, a);
};
f.e = function(a, b) {
  return this.G(null, a, b);
};
var ke = new r(null, 0, [], null), le = 8;
function je(a, b, c) {
  this.Xa = a;
  this.ab = b;
  this.k = c;
  this.B = 56;
  this.n = 258;
}
f = je.prototype;
f.fb = function(a, b, c) {
  var d = this;
  if (t(d.Xa)) {
    a = ge(this, b);
    if (-1 === a) {
      return d.ab + 2 <= 2 * le ? (d.ab += 2, d.k.push(b), d.k.push(c), this) : jd.i(function() {
        var a = d.ab, b = d.k;
        return me.e ? me.e(a, b) : me.call(null, a, b);
      }(), b, c);
    }
    c !== d.k[a + 1] && (d.k[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
f.gb = function(a, b) {
  if (t(this.Xa)) {
    if (b ? b.n & 2048 || b.Nb || (b.n ? 0 : u(Na, b)) : u(Na, b)) {
      return qb(this, Nc.f ? Nc.f(b) : Nc.call(null, b), Oc.f ? Oc.f(b) : Oc.call(null, b));
    }
    for (var c = D(b), d = this;;) {
      var e = F(c);
      if (t(e)) {
        var g = e, c = I(c), d = qb(d, function() {
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
f.hb = function() {
  if (t(this.Xa)) {
    return this.Xa = !1, new r(null, Ic(this.ab), this.k, null);
  }
  throw Error("persistent! called twice");
};
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  if (t(this.Xa)) {
    return a = ge(this, b), -1 === a ? c : this.k[a + 1];
  }
  throw Error("lookup after persistent!");
};
f.O = function() {
  if (t(this.Xa)) {
    return Ic(this.ab);
  }
  throw Error("count after persistent!");
};
function me(a, b) {
  for (var c = nb(jc), d = 0;;) {
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
    a = sa(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = sa(a);
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
    a = a.Ya(b);
    a.k[c] = h;
    a.k[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.Ya(b);
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
f.Ya = function(a) {
  if (a === this.Q) {
    return this;
  }
  var b = Lc(this.R), c = Array(0 > b ? 4 : 2 * (b + 1));
  uc(this.k, 0, c, 0, 2 * b);
  return new se(a, this.R, c);
};
f.ib = function() {
  var a = this.k;
  return te.f ? te.f(a) : te.call(null, a);
};
f.Qa = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.R & e)) {
    return d;
  }
  var g = Lc(this.R & e - 1), e = this.k[2 * g], g = this.k[2 * g + 1];
  return null == e ? g.Qa(a + 5, b, c, d) : oe(c, e) ? g : d;
};
f.ta = function(a, b, c, d, e, g) {
  var h = 1 << (c >>> b & 31), k = Lc(this.R & h - 1);
  if (0 === (this.R & h)) {
    var l = Lc(this.R);
    if (2 * l < this.k.length) {
      var m = this.Ya(a), n = m.k;
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
    m = this.Ya(a);
    m.k = n;
    m.R |= h;
    return m;
  }
  var q = this.k[2 * k], s = this.k[2 * k + 1];
  if (null == q) {
    return l = s.ta(a, b + 5, c, d, e, g), l === s ? this : re.t(this, a, 2 * k + 1, l);
  }
  if (oe(d, q)) {
    return e === s ? this : re.t(this, a, 2 * k + 1, e);
  }
  g.oa = !0;
  return re.ha(this, a, 2 * k, null, 2 * k + 1, function() {
    var g = b + 5;
    return we.na ? we.na(a, g, q, s, c, d, e) : we.call(null, a, g, q, s, c, d, e);
  }());
};
f.sa = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), h = Lc(this.R & g - 1);
  if (0 === (this.R & g)) {
    var k = Lc(this.R);
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
f.jb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.R & d)) {
    return this;
  }
  var e = Lc(this.R & d - 1), g = this.k[2 * e], h = this.k[2 * e + 1];
  return null == g ? (a = h.jb(a + 5, b, c), a === h ? this : null != a ? new se(null, this.R, pe.i(this.k, 2 * e + 1, a)) : this.R === d ? null : new se(null, this.R ^ d, qe(this.k, e))) : oe(c, g) ? new se(null, this.R ^ d, qe(this.k, e)) : this;
};
var ue = new se(null, 0, []);
function ve(a, b, c) {
  this.Q = a;
  this.p = b;
  this.k = c;
}
f = ve.prototype;
f.Ya = function(a) {
  return a === this.Q ? this : new ve(a, this.p, sa(this.k));
};
f.ib = function() {
  var a = this.k;
  return xe.f ? xe.f(a) : xe.call(null, a);
};
f.Qa = function(a, b, c, d) {
  var e = this.k[b >>> a & 31];
  return null != e ? e.Qa(a + 5, b, c, d) : d;
};
f.ta = function(a, b, c, d, e, g) {
  var h = c >>> b & 31, k = this.k[h];
  if (null == k) {
    return a = re.t(this, a, h, ue.ta(a, b + 5, c, d, e, g)), a.p += 1, a;
  }
  b = k.ta(a, b + 5, c, d, e, g);
  return b === k ? this : re.t(this, a, h, b);
};
f.sa = function(a, b, c, d, e) {
  var g = b >>> a & 31, h = this.k[g];
  if (null == h) {
    return new ve(null, this.p + 1, pe.i(this.k, g, ue.sa(a + 5, b, c, d, e)));
  }
  a = h.sa(a + 5, b, c, d, e);
  return a === h ? this : new ve(null, this.p, pe.i(this.k, g, a));
};
f.jb = function(a, b, c) {
  var d = b >>> a & 31, e = this.k[d];
  if (null != e) {
    a = e.jb(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.p) {
          a: {
            e = this.k;
            a = e.length;
            b = Array(2 * (this.p - 1));
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
          d = new ve(null, this.p - 1, pe.i(this.k, d, a));
        }
      } else {
        d = new ve(null, this.p, pe.i(this.k, d, a));
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
  this.p = c;
  this.k = d;
}
f = ze.prototype;
f.Ya = function(a) {
  if (a === this.Q) {
    return this;
  }
  var b = Array(2 * (this.p + 1));
  uc(this.k, 0, b, 0, 2 * this.p);
  return new ze(a, this.La, this.p, b);
};
f.ib = function() {
  var a = this.k;
  return te.f ? te.f(a) : te.call(null, a);
};
f.Qa = function(a, b, c, d) {
  a = ye(this.k, this.p, c);
  return 0 > a ? d : oe(c, this.k[a]) ? this.k[a + 1] : d;
};
f.ta = function(a, b, c, d, e, g) {
  if (c === this.La) {
    b = ye(this.k, this.p, d);
    if (-1 === b) {
      if (this.k.length > 2 * this.p) {
        return a = re.ha(this, a, 2 * this.p, d, 2 * this.p + 1, e), g.oa = !0, a.p += 1, a;
      }
      c = this.k.length;
      b = Array(c + 2);
      uc(this.k, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.oa = !0;
      g = this.p + 1;
      a === this.Q ? (this.k = b, this.p = g, a = this) : a = new ze(this.Q, this.La, g, b);
      return a;
    }
    return this.k[b + 1] === e ? this : re.t(this, a, b + 1, e);
  }
  return(new se(a, 1 << (this.La >>> b & 31), [null, this, null, null])).ta(a, b, c, d, e, g);
};
f.sa = function(a, b, c, d, e) {
  return b === this.La ? (a = ye(this.k, this.p, c), -1 === a ? (a = 2 * this.p, b = Array(a + 2), uc(this.k, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.oa = !0, new ze(null, this.La, this.p + 1, b)) : Ob.e(this.k[a], d) ? this : new ze(null, this.La, this.p, pe.i(this.k, a + 1, d))) : (new se(null, 1 << (this.La >>> a & 31), [null, this])).sa(a, b, c, d, e);
};
f.jb = function(a, b, c) {
  a = ye(this.k, this.p, c);
  return-1 === a ? this : 1 === this.p ? null : new ze(null, this.La, this.p - 1, qe(this.k, Ic(a)));
};
var we = function() {
  function a(a, b, c, h, k, l, m) {
    var n = Kb(c);
    if (n === k) {
      return new ze(null, n, 2, [c, h, l, m]);
    }
    var q = new ne;
    return ue.ta(a, b, n, c, h, q).ta(a, b, k, l, m, q);
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
  this.Ra = b;
  this.A = c;
  this.T = d;
  this.q = e;
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
  var a = this.q;
  return null != a ? a : this.q = a = Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return nc(Sb, this.meta);
};
f.Z = function(a, b) {
  return Bc.e(b, this);
};
f.$ = function(a, b, c) {
  return Bc.i(b, c, this);
};
f.aa = function() {
  return null == this.T ? new W(null, 2, 5, X, [this.Ra[this.A], this.Ra[this.A + 1]], null) : F(this.T);
};
f.ja = function() {
  if (null == this.T) {
    var a = this.Ra, b = this.A + 2;
    return te.i ? te.i(a, b, null) : te.call(null, a, b, null);
  }
  var a = this.Ra, b = this.A, c = I(this.T);
  return te.i ? te.i(a, b, c) : te.call(null, a, b, c);
};
f.M = function() {
  return this;
};
f.N = function(a, b) {
  return new Ae(b, this.Ra, this.A, this.T, this.q);
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
          if (t(h) && (h = h.ib(), t(h))) {
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
  this.Ra = b;
  this.A = c;
  this.T = d;
  this.q = e;
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
  var a = this.q;
  return null != a ? a : this.q = a = Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return nc(Sb, this.meta);
};
f.Z = function(a, b) {
  return Bc.e(b, this);
};
f.$ = function(a, b, c) {
  return Bc.i(b, c, this);
};
f.aa = function() {
  return F(this.T);
};
f.ja = function() {
  var a = this.Ra, b = this.A, c = I(this.T);
  return xe.t ? xe.t(null, a, b, c) : xe.call(null, null, a, b, c);
};
f.M = function() {
  return this;
};
f.N = function(a, b) {
  return new Be(b, this.Ra, this.A, this.T, this.q);
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
          if (t(k) && (k = k.ib(), t(k))) {
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
  this.p = b;
  this.root = c;
  this.fa = d;
  this.la = e;
  this.q = g;
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
  return null == b ? this.fa ? this.la : c : null == this.root ? c : this.root.Qa(0, Kb(b), b, c);
};
f.K = function() {
  return this.meta;
};
f.O = function() {
  return this.p;
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Vb(this);
};
f.F = function(a, b) {
  return fe(this, b);
};
f.cb = function() {
  return new Ee({}, this.root, this.p, this.fa, this.la);
};
f.X = function() {
  return ab(jc, this.meta);
};
f.ea = function(a, b) {
  if (null == b) {
    return this.fa ? new Ce(this.meta, this.p - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.jb(0, Kb(b), b);
  return c === this.root ? this : new Ce(this.meta, this.p - 1, c, this.fa, this.la, null);
};
f.W = function(a, b, c) {
  if (null == b) {
    return this.fa && c === this.la ? this : new Ce(this.meta, this.fa ? this.p : this.p + 1, this.root, !0, c, null);
  }
  a = new ne;
  b = (null == this.root ? ue : this.root).sa(0, Kb(b), b, c, a);
  return b === this.root ? this : new Ce(this.meta, a.oa ? this.p + 1 : this.p, b, this.fa, this.la, null);
};
f.sb = function(a, b) {
  return null == b ? this.fa : null == this.root ? !1 : this.root.Qa(0, Kb(b), b, wc) !== wc;
};
f.M = function() {
  if (0 < this.p) {
    var a = null != this.root ? this.root.ib() : null;
    return this.fa ? L(new W(null, 2, 5, X, [null, this.la], null), a) : a;
  }
  return null;
};
f.N = function(a, b) {
  return new Ce(b, this.p, this.root, this.fa, this.la, this.q);
};
f.L = function(a, b) {
  if (rc(b)) {
    return Ka(this, z.e(b, 0), z.e(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (rc(e)) {
      c = Ka(c, z.e(e, 0), z.e(e, 1)), d = I(d);
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
  return this.call.apply(this, [this].concat(sa(b)));
};
f.f = function(a) {
  return this.J(null, a);
};
f.e = function(a, b) {
  return this.G(null, a, b);
};
var jc = new Ce(null, 0, null, !1, null, 0);
function Ee(a, b, c, d, e) {
  this.Q = a;
  this.root = b;
  this.count = c;
  this.fa = d;
  this.la = e;
  this.B = 56;
  this.n = 258;
}
f = Ee.prototype;
f.fb = function(a, b, c) {
  return Fe(this, b, c);
};
f.gb = function(a, b) {
  return Ge(this, b);
};
f.hb = function() {
  var a;
  if (this.Q) {
    this.Q = null, a = new Ce(null, this.count, this.root, this.fa, this.la, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
f.J = function(a, b) {
  return null == b ? this.fa ? this.la : null : null == this.root ? null : this.root.Qa(0, Kb(b), b);
};
f.G = function(a, b, c) {
  return null == b ? this.fa ? this.la : c : null == this.root ? c : this.root.Qa(0, Kb(b), b, c);
};
f.O = function() {
  if (this.Q) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Ge(a, b) {
  if (a.Q) {
    if (b ? b.n & 2048 || b.Nb || (b.n ? 0 : u(Na, b)) : u(Na, b)) {
      return Fe(a, Nc.f ? Nc.f(b) : Nc.call(null, b), Oc.f ? Oc.f(b) : Oc.call(null, b));
    }
    for (var c = D(b), d = a;;) {
      var e = F(c);
      if (t(e)) {
        var g = e, c = I(c), d = Fe(d, function() {
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
function Fe(a, b, c) {
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
var qd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = D(a);
    for (var b = nb(jc);;) {
      if (a) {
        var e = I(I(a)), b = jd.i(b, F(a), F(I(a)));
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
  a.o = b;
  return a;
}();
function He(a, b) {
  this.ba = a;
  this.da = b;
  this.B = 0;
  this.n = 32374988;
}
f = He.prototype;
f.toString = function() {
  return Bb(this);
};
f.K = function() {
  return this.da;
};
f.ia = function() {
  var a = this.ba, a = (a ? a.n & 128 || a.pb || (a.n ? 0 : u(Ga, a)) : u(Ga, a)) ? this.ba.ia(null) : I(this.ba);
  return null == a ? null : new He(a, this.da);
};
f.I = function() {
  return Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return nc(Sb, this.da);
};
f.Z = function(a, b) {
  return Bc.e(b, this);
};
f.$ = function(a, b, c) {
  return Bc.i(b, c, this);
};
f.aa = function() {
  return this.ba.aa(null).xb();
};
f.ja = function() {
  var a = this.ba, a = (a ? a.n & 128 || a.pb || (a.n ? 0 : u(Ga, a)) : u(Ga, a)) ? this.ba.ia(null) : I(this.ba);
  return null != a ? new He(a, this.da) : Sb;
};
f.M = function() {
  return this;
};
f.N = function(a, b) {
  return new He(this.ba, b);
};
f.L = function(a, b) {
  return L(b, this);
};
function Nc(a) {
  return Qa(a);
}
function Ie(a, b) {
  this.ba = a;
  this.da = b;
  this.B = 0;
  this.n = 32374988;
}
f = Ie.prototype;
f.toString = function() {
  return Bb(this);
};
f.K = function() {
  return this.da;
};
f.ia = function() {
  var a = this.ba, a = (a ? a.n & 128 || a.pb || (a.n ? 0 : u(Ga, a)) : u(Ga, a)) ? this.ba.ia(null) : I(this.ba);
  return null == a ? null : new Ie(a, this.da);
};
f.I = function() {
  return Ub(this);
};
f.F = function(a, b) {
  return dc(this, b);
};
f.X = function() {
  return nc(Sb, this.da);
};
f.Z = function(a, b) {
  return Bc.e(b, this);
};
f.$ = function(a, b, c) {
  return Bc.i(b, c, this);
};
f.aa = function() {
  return this.ba.aa(null).yb();
};
f.ja = function() {
  var a = this.ba, a = (a ? a.n & 128 || a.pb || (a.n ? 0 : u(Ga, a)) : u(Ga, a)) ? this.ba.ia(null) : I(this.ba);
  return null != a ? new Ie(a, this.da) : Sb;
};
f.M = function() {
  return this;
};
f.N = function(a, b) {
  return new Ie(this.ba, b);
};
f.L = function(a, b) {
  return L(b, this);
};
function Je(a) {
  return(a = D(a)) ? new Ie(a, null) : null;
}
function Oc(a) {
  return Sa(a);
}
function Ke(a, b, c) {
  this.meta = a;
  this.$a = b;
  this.q = c;
  this.n = 15077647;
  this.B = 8196;
}
f = Ke.prototype;
f.toString = function() {
  return Bb(this);
};
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  return Ja(this.$a, b) ? b : c;
};
f.K = function() {
  return this.meta;
};
f.O = function() {
  return xa(this.$a);
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Vb(this);
};
f.F = function(a, b) {
  return pc(b) && M(this) === M(b) && md(function(a) {
    return function(b) {
      return yc(a, b);
    };
  }(this), b);
};
f.cb = function() {
  return new Le(nb(this.$a));
};
f.X = function() {
  return nc(Me, this.meta);
};
f.M = function() {
  var a = D(this.$a);
  return a ? new He(a, null) : null;
};
f.N = function(a, b) {
  return new Ke(b, this.$a, this.q);
};
f.L = function(a, b) {
  return new Ke(this.meta, kc.i(this.$a, b, null), null);
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
  return this.call.apply(this, [this].concat(sa(b)));
};
f.f = function(a) {
  return this.J(null, a);
};
f.e = function(a, b) {
  return this.G(null, a, b);
};
var Me = new Ke(null, ke, 0);
function Le(a) {
  this.Pa = a;
  this.n = 259;
  this.B = 136;
}
f = Le.prototype;
f.call = function() {
  function a(a, b, c) {
    return A.i(this.Pa, b, wc) === wc ? c : b;
  }
  function b(a, b) {
    return A.i(this.Pa, b, wc) === wc ? null : b;
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
  return this.call.apply(this, [this].concat(sa(b)));
};
f.f = function(a) {
  return A.i(this.Pa, a, wc) === wc ? null : a;
};
f.e = function(a, b) {
  return A.i(this.Pa, a, wc) === wc ? b : a;
};
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  return A.i(this.Pa, b, wc) === wc ? c : b;
};
f.O = function() {
  return M(this.Pa);
};
f.gb = function(a, b) {
  this.Pa = jd.i(this.Pa, b, null);
  return this;
};
f.hb = function() {
  return new Ke(null, pb(this.Pa), null);
};
function Tc(a) {
  if (a && (a.B & 4096 || a.Pb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error("Doesn't support name: " + x.f(a));
}
var Ne = function() {
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
      a = I(a);
      var d = F(a);
      a = I(a);
      var l = F(a);
      a = G(a);
      return c(b, d, l, a);
    };
    a.o = c;
    return a;
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.o(b, e, g, K(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 3;
  b.s = c.s;
  b.e = function(a, b) {
    return b;
  };
  b.i = a;
  b.o = c.o;
  return b;
}();
function Y(a, b, c, d, e, g, h) {
  var k = ga;
  try {
    ga = null == ga ? null : ga - 1;
    if (null != ga && 0 > ga) {
      return B(a, "#");
    }
    B(a, c);
    if (D(h)) {
      var l = F(h);
      b.i ? b.i(l, a, g) : b.call(null, l, a, g);
    }
    for (var m = I(h), n = oa.f(g) - 1;;) {
      if (!m || null != n && 0 === n) {
        D(m) && 0 === n && (B(a, d), B(a, "..."));
        break;
      } else {
        B(a, d);
        var q = F(m);
        c = a;
        h = g;
        b.i ? b.i(q, c, h) : b.call(null, q, c, h);
        var s = I(m);
        c = n - 1;
        m = s;
        n = c;
      }
    }
    return B(a, e);
  } finally {
    ga = k;
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
          g = e, sc(g) ? (e = tb(g), h = ub(g), g = e, l = M(e), e = h, h = l) : (l = F(g), B(a, l), e = I(g), g = null, h = 0), k = 0;
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
  a.o = b;
  return a;
}(), Pe = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Qe(a) {
  return'"' + x.f(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
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
    var c = O.e(d, la);
    return t(c) ? (c = b ? b.n & 131072 || b.Ob ? !0 : b.n ? !1 : u(Xa, b) : u(Xa, b)) ? oc(b) : c : c;
  }()) && (B(c, "^"), Re(oc(b), c, d), B(c, " "));
  if (null == b) {
    return B(c, "nil");
  }
  if (b.Xb) {
    return b.gc(b, c, d);
  }
  if (b && (b.n & 2147483648 || b.V)) {
    return b.H(null, c, d);
  }
  if (qa(b) === Boolean || "number" === typeof b) {
    return B(c, "" + x.f(b));
  }
  if (null != b && b.constructor === Object) {
    B(c, "#js ");
    var e = wd.e(function(c) {
      return new W(null, 2, 5, X, [Uc.f(c), b[c]], null);
    }, tc(b));
    return Se.t ? Se.t(e, Re, c, d) : Se.call(null, e, Re, c, d);
  }
  return b instanceof Array ? Y(c, Re, "#js [", " ", "]", d, b) : t("string" == typeof b) ? t(ka.f(d)) ? B(c, Qe(b)) : B(c, b) : lc(b) ? Oe.o(c, K(["#\x3c", "" + x.f(b), "\x3e"], 0)) : b instanceof Date ? (e = function(b, c) {
    for (var d = "" + x.f(b);;) {
      if (M(d) < c) {
        d = "0" + x.f(d);
      } else {
        return d;
      }
    }
  }, Oe.o(c, K(['#inst "', "" + x.f(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : b instanceof RegExp ? Oe.o(c, K(['#"', b.source, '"'], 0)) : (b ? b.n & 2147483648 || b.V || (b.n ? 0 : u(kb, b)) : u(kb, b)) ? lb(b, c, d) : Oe.o(c, K(["#\x3c", "" + x.f(b), "\x3e"], 0));
};
function Te(a, b) {
  var c = new fa;
  a: {
    var d = new Ab(c);
    Z(F(a), d, b);
    for (var e = D(I(a)), g = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = g.Y(null, k);
        B(d, " ");
        Z(l, d, b);
        k += 1;
      } else {
        if (e = D(e)) {
          g = e, sc(g) ? (e = tb(g), h = ub(g), g = e, l = M(e), e = h, h = l) : (l = F(g), B(d, " "), Z(l, d, b), e = I(g), g = null, h = 0), k = 0;
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
    0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = ha(), e;
    (e = null == a) || (e = D(a), e = t(e) ? !1 : !0);
    return e ? "" : "" + x.f(Te(a, b));
  }
  a.C = 0;
  a.s = function(a) {
    a = D(a);
    return b(a);
  };
  a.o = b;
  return a;
}();
function Se(a, b, c, d) {
  return Y(c, function(a, c, d) {
    var k = Qa(a);
    b.i ? b.i(k, c, d) : b.call(null, k, c, d);
    B(c, " ");
    a = Sa(a);
    return b.i ? b.i(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, D(a));
}
Rb.prototype.V = !0;
Rb.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Vc.prototype.V = !0;
Vc.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Ae.prototype.V = !0;
Ae.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
he.prototype.V = !0;
he.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Xd.prototype.V = !0;
Xd.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Sc.prototype.V = !0;
Sc.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Ce.prototype.V = !0;
Ce.prototype.H = function(a, b, c) {
  return Se(this, Z, b, c);
};
Be.prototype.V = !0;
Be.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Zd.prototype.V = !0;
Zd.prototype.H = function(a, b, c) {
  return Y(b, Z, "[", " ", "]", c, this);
};
Ke.prototype.V = !0;
Ke.prototype.H = function(a, b, c) {
  return Y(b, Z, "#{", " ", "}", c, this);
};
ad.prototype.V = !0;
ad.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
od.prototype.V = !0;
od.prototype.H = function(a, b, c) {
  B(b, "#\x3cAtom: ");
  Z(this.state, b, c);
  return B(b, "\x3e");
};
Ie.prototype.V = !0;
Ie.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
W.prototype.V = !0;
W.prototype.H = function(a, b, c) {
  return Y(b, Z, "[", " ", "]", c, this);
};
Qc.prototype.V = !0;
Qc.prototype.H = function(a, b) {
  return B(b, "()");
};
r.prototype.V = !0;
r.prototype.H = function(a, b, c) {
  return Se(this, Z, b, c);
};
He.prototype.V = !0;
He.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Pc.prototype.V = !0;
Pc.prototype.H = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
W.prototype.lb = !0;
W.prototype.mb = function(a, b) {
  return zc.e(this, b);
};
Zd.prototype.lb = !0;
Zd.prototype.mb = function(a, b) {
  return zc.e(this, b);
};
S.prototype.lb = !0;
S.prototype.mb = function(a, b) {
  return Nb(this, b);
};
Qb.prototype.lb = !0;
Qb.prototype.mb = function(a, b) {
  return Nb(this, b);
};
Jc = function() {
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
Kc = function(a) {
  a *= Math.random.D ? Math.random.D() : Math.random.call(null);
  return Math.floor.f ? Math.floor.f(a) : Math.floor.call(null, a);
};
function Ue(a) {
  this.kb = a;
  this.B = 0;
  this.n = 2153775104;
}
Ue.prototype.I = function() {
  for (var a = ud.o(K([this], 0)), b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
};
Ue.prototype.H = function(a, b) {
  return B(b, '#uuid "' + x.f(this.kb) + '"');
};
Ue.prototype.F = function(a, b) {
  return b instanceof Ue && this.kb === b.kb;
};
Ue.prototype.toString = function() {
  return this.kb;
};
var Ve = new S(null, "y", "y", -1757859776), We = new S(null, "movement", "movement", 1777030977), la = new S(null, "meta", "meta", 1499536964), Xe = new S(null, "animation", "animation", -1248293244), Ye = new S(null, "stage", "stage", 1843544772), Ze = new S(null, "movement-speed", "movement-speed", -1779674971), na = new S(null, "dup", "dup", 556298533), $e = new S(null, "dead", "dead", -1946604091), af = new S(null, "standing", "standing", -1248340762), bf = new S(null, "last-attack-frame", "last-attack-frame", 
658442790), rd = new S(null, "validator", "validator", -1966190681), $ = new S(null, "name", "name", 1843675177), cf = new S(null, "neutral", "neutral", -1941956087), df = new S(null, "alive", "alive", 1424929930), ef = new S(null, "renderable", "renderable", -1247325782), ff = new S(null, "background", "background", -863952629), gf = new S(null, "facing", "facing", -854439413), hf = new S(null, "entities", "entities", 1940967403), jf = new S(null, "attacker", "attacker", 48869964), ja = new S(null, 
"flush-on-newline", "flush-on-newline", -151457939), kf = new S(null, "angle", "angle", 1622094254), lf = new S(null, "animation-seq", "animation-seq", 1939833135), mf = new S(null, "renderer", "renderer", 336841071), nf = new S(null, "size", "size", 1098693007), of = new S(null, "sprite", "sprite", 172516848), ka = new S(null, "readably", "readably", 1129599760), pf = new S(null, "damage", "damage", 970520018), oa = new S(null, "print-length", "print-length", 1931866356), qf = new S(null, "id", 
"id", -1388402092), rf = new S(null, "current", "current", -1088038603), sf = new S(null, "identifier", "identifier", -805503498), tf = new S(null, "right", "right", -452581833), uf = new S(null, "position", "position", -2011731912), vf = new S(null, "point", "point", 1813198264), wf = new S(null, "moving", "moving", 1760797240), xf = new S(null, "attack-range", "attack-range", 519031033), yf = new S(null, "x", "x", 2099068185), zf = new S(null, "anchor", "anchor", 1549638489), Af = new S(null, "hp", 
"hp", -1541237831), Bf = new S(null, "target", "target", 253001721), Cf = new S(null, "frame-count", "frame-count", 1616946810), Df = new S(null, "attack-speed", "attack-speed", -393485413), Ef = new S(null, "velocity", "velocity", -581524355), Gf = new S(null, "attackable", "attackable", 2099301245), Hf = new S(null, "sprite-list", "sprite-list", -1086684897), If = new S(null, "left", "left", -399115937), Jf = new S(null, "attacking", "attacking", 492336639);
function Kf(a, b, c, d) {
  this.name = a;
  this.Ua = b;
  this.m = c;
  this.j = d;
  this.n = 2229667594;
  this.B = 8192;
  2 < arguments.length ? (this.m = c, this.j = d) : this.j = this.m = null;
}
f = Kf.prototype;
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "point":
      return this.Ua;
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
  }(this), "#clash-attack-sim.component.Position{", ", ", "}", c, V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [vf, this.Ua], null)], null), this.j));
};
f.K = function() {
  return this.m;
};
f.O = function() {
  return 2 + M(this.j);
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.ea = function(a, b) {
  return yc(new Ke(null, new r(null, 2, [$, null, vf, null], null), null), b) ? P.e(nc(Ed.e(ke, this), this.m), b) : new Kf(this.name, this.Ua, this.m, ld(P.e(this.j, b)), null);
};
f.W = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new Kf(c, this.Ua, this.m, this.j, null) : t(T.e ? T.e(vf, b) : T.call(null, vf, b)) ? new Kf(this.name, c, this.m, this.j, null) : new Kf(this.name, this.Ua, this.m, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [vf, this.Ua], null)], null), this.j));
};
f.N = function(a, b) {
  return new Kf(this.name, this.Ua, b, this.j, this.q);
};
f.L = function(a, b) {
  return rc(b) ? Ka(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function Lf(a) {
  return new Kf(uf, a);
}
function Mf(a, b, c, d, e, g) {
  this.name = a;
  this.ca = b;
  this.anchor = c;
  this.size = d;
  this.m = e;
  this.j = g;
  this.n = 2229667594;
  this.B = 8192;
  4 < arguments.length ? (this.m = e, this.j = g) : this.j = this.m = null;
}
f = Mf.prototype;
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
      return this.ca;
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
  }(this), "#clash-attack-sim.component.Renderable{", ", ", "}", c, V.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [of, this.ca], null), new W(null, 2, 5, X, [zf, this.anchor], null), new W(null, 2, 5, X, [nf, this.size], null)], null), this.j));
};
f.K = function() {
  return this.m;
};
f.O = function() {
  return 4 + M(this.j);
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.ea = function(a, b) {
  return yc(new Ke(null, new r(null, 4, [$, null, nf, null, of, null, zf, null], null), null), b) ? P.e(nc(Ed.e(ke, this), this.m), b) : new Mf(this.name, this.ca, this.anchor, this.size, this.m, ld(P.e(this.j, b)), null);
};
f.W = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new Mf(c, this.ca, this.anchor, this.size, this.m, this.j, null) : t(T.e ? T.e(of, b) : T.call(null, of, b)) ? new Mf(this.name, c, this.anchor, this.size, this.m, this.j, null) : t(T.e ? T.e(zf, b) : T.call(null, zf, b)) ? new Mf(this.name, this.ca, c, this.size, this.m, this.j, null) : t(T.e ? T.e(nf, b) : T.call(null, nf, b)) ? new Mf(this.name, this.ca, this.anchor, c, this.m, this.j, null) : new Mf(this.name, this.ca, this.anchor, this.size, 
  this.m, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [of, this.ca], null), new W(null, 2, 5, X, [zf, this.anchor], null), new W(null, 2, 5, X, [nf, this.size], null)], null), this.j));
};
f.N = function(a, b) {
  return new Mf(this.name, this.ca, this.anchor, this.size, b, this.j, this.q);
};
f.L = function(a, b) {
  return rc(b) ? Ka(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function Nf(a, b, c) {
  return new Mf(ef, a, b, c);
}
function Of(a, b, c, d) {
  this.name = a;
  this.ca = b;
  this.m = c;
  this.j = d;
  this.n = 2229667594;
  this.B = 8192;
  2 < arguments.length ? (this.m = c, this.j = d) : this.j = this.m = null;
}
f = Of.prototype;
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "sprite":
      return this.ca;
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
  }(this), "#clash-attack-sim.component.Background{", ", ", "}", c, V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [of, this.ca], null)], null), this.j));
};
f.K = function() {
  return this.m;
};
f.O = function() {
  return 2 + M(this.j);
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.ea = function(a, b) {
  return yc(new Ke(null, new r(null, 2, [$, null, of, null], null), null), b) ? P.e(nc(Ed.e(ke, this), this.m), b) : new Of(this.name, this.ca, this.m, ld(P.e(this.j, b)), null);
};
f.W = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new Of(c, this.ca, this.m, this.j, null) : t(T.e ? T.e(of, b) : T.call(null, of, b)) ? new Of(this.name, c, this.m, this.j, null) : new Of(this.name, this.ca, this.m, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [of, this.ca], null)], null), this.j));
};
f.N = function(a, b) {
  return new Of(this.name, this.ca, b, this.j, this.q);
};
f.L = function(a, b) {
  return rc(b) ? Ka(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function Pf(a, b, c, d, e, g, h, k) {
  this.name = a;
  this.pa = b;
  this.qa = c;
  this.ra = d;
  this.target = e;
  this.ua = g;
  this.m = h;
  this.j = k;
  this.n = 2229667594;
  this.B = 8192;
  6 < arguments.length ? (this.m = h, this.j = k) : this.j = this.m = null;
}
f = Pf.prototype;
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
  }(this), "#clash-attack-sim.component.Attacker{", ", ", "}", c, V.e(new W(null, 6, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [xf, this.pa], null), new W(null, 2, 5, X, [Df, this.qa], null), new W(null, 2, 5, X, [pf, this.ra], null), new W(null, 2, 5, X, [Bf, this.target], null), new W(null, 2, 5, X, [bf, this.ua], null)], null), this.j));
};
f.K = function() {
  return this.m;
};
f.O = function() {
  return 6 + M(this.j);
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.ea = function(a, b) {
  return yc(new Ke(null, new r(null, 6, [bf, null, $, null, pf, null, xf, null, Bf, null, Df, null], null), null), b) ? P.e(nc(Ed.e(ke, this), this.m), b) : new Pf(this.name, this.pa, this.qa, this.ra, this.target, this.ua, this.m, ld(P.e(this.j, b)), null);
};
f.W = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new Pf(c, this.pa, this.qa, this.ra, this.target, this.ua, this.m, this.j, null) : t(T.e ? T.e(xf, b) : T.call(null, xf, b)) ? new Pf(this.name, c, this.qa, this.ra, this.target, this.ua, this.m, this.j, null) : t(T.e ? T.e(Df, b) : T.call(null, Df, b)) ? new Pf(this.name, this.pa, c, this.ra, this.target, this.ua, this.m, this.j, null) : t(T.e ? T.e(pf, b) : T.call(null, pf, b)) ? new Pf(this.name, this.pa, this.qa, c, this.target, this.ua, this.m, 
  this.j, null) : t(T.e ? T.e(Bf, b) : T.call(null, Bf, b)) ? new Pf(this.name, this.pa, this.qa, this.ra, c, this.ua, this.m, this.j, null) : t(T.e ? T.e(bf, b) : T.call(null, bf, b)) ? new Pf(this.name, this.pa, this.qa, this.ra, this.target, c, this.m, this.j, null) : new Pf(this.name, this.pa, this.qa, this.ra, this.target, this.ua, this.m, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 6, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [xf, this.pa], null), new W(null, 2, 5, X, [Df, this.qa], null), new W(null, 2, 5, X, [pf, this.ra], null), new W(null, 2, 5, X, [Bf, this.target], null), new W(null, 2, 5, X, [bf, this.ua], null)], null), this.j));
};
f.N = function(a, b) {
  return new Pf(this.name, this.pa, this.qa, this.ra, this.target, this.ua, b, this.j, this.q);
};
f.L = function(a, b) {
  return rc(b) ? Ka(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function Qf(a, b, c, d, e) {
  return new Pf(jf, a, b, c, d, e);
}
function Rf(a, b, c, d) {
  this.name = a;
  this.Ta = b;
  this.m = c;
  this.j = d;
  this.n = 2229667594;
  this.B = 8192;
  2 < arguments.length ? (this.m = c, this.j = d) : this.j = this.m = null;
}
f = Rf.prototype;
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "hp":
      return this.Ta;
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
  }(this), "#clash-attack-sim.component.Attackable{", ", ", "}", c, V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Af, this.Ta], null)], null), this.j));
};
f.K = function() {
  return this.m;
};
f.O = function() {
  return 2 + M(this.j);
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.ea = function(a, b) {
  return yc(new Ke(null, new r(null, 2, [$, null, Af, null], null), null), b) ? P.e(nc(Ed.e(ke, this), this.m), b) : new Rf(this.name, this.Ta, this.m, ld(P.e(this.j, b)), null);
};
f.W = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new Rf(c, this.Ta, this.m, this.j, null) : t(T.e ? T.e(Af, b) : T.call(null, Af, b)) ? new Rf(this.name, c, this.m, this.j, null) : new Rf(this.name, this.Ta, this.m, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Af, this.Ta], null)], null), this.j));
};
f.N = function(a, b) {
  return new Rf(this.name, this.Ta, b, this.j, this.q);
};
f.L = function(a, b) {
  return rc(b) ? Ka(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function Sf(a, b, c, d) {
  this.name = a;
  this.Va = b;
  this.m = c;
  this.j = d;
  this.n = 2229667594;
  this.B = 8192;
  2 < arguments.length ? (this.m = c, this.j = d) : this.j = this.m = null;
}
f = Sf.prototype;
f.J = function(a, b) {
  return A.i(this, b, null);
};
f.G = function(a, b, c) {
  switch(b instanceof S ? b.U : null) {
    case "velocity":
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
  }(this), "#clash-attack-sim.component.Movement{", ", ", "}", c, V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Ef, this.Va], null)], null), this.j));
};
f.K = function() {
  return this.m;
};
f.O = function() {
  return 2 + M(this.j);
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.ea = function(a, b) {
  return yc(new Ke(null, new r(null, 2, [$, null, Ef, null], null), null), b) ? P.e(nc(Ed.e(ke, this), this.m), b) : new Sf(this.name, this.Va, this.m, ld(P.e(this.j, b)), null);
};
f.W = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new Sf(c, this.Va, this.m, this.j, null) : t(T.e ? T.e(Ef, b) : T.call(null, Ef, b)) ? new Sf(this.name, c, this.m, this.j, null) : new Sf(this.name, this.Va, this.m, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Ef, this.Va], null)], null), this.j));
};
f.N = function(a, b) {
  return new Sf(this.name, this.Va, b, this.j, this.q);
};
f.L = function(a, b) {
  return rc(b) ? Ka(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function Tf(a, b, c, d) {
  this.name = a;
  this.angle = b;
  this.m = c;
  this.j = d;
  this.n = 2229667594;
  this.B = 8192;
  2 < arguments.length ? (this.m = c, this.j = d) : this.j = this.m = null;
}
f = Tf.prototype;
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
  }(this), "#clash-attack-sim.component.Facing{", ", ", "}", c, V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [kf, this.angle], null)], null), this.j));
};
f.K = function() {
  return this.m;
};
f.O = function() {
  return 2 + M(this.j);
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.ea = function(a, b) {
  return yc(new Ke(null, new r(null, 2, [$, null, kf, null], null), null), b) ? P.e(nc(Ed.e(ke, this), this.m), b) : new Tf(this.name, this.angle, this.m, ld(P.e(this.j, b)), null);
};
f.W = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new Tf(c, this.angle, this.m, this.j, null) : t(T.e ? T.e(kf, b) : T.call(null, kf, b)) ? new Tf(this.name, c, this.m, this.j, null) : new Tf(this.name, this.angle, this.m, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 2, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [kf, this.angle], null)], null), this.j));
};
f.N = function(a, b) {
  return new Tf(this.name, this.angle, b, this.j, this.q);
};
f.L = function(a, b) {
  return rc(b) ? Ka(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function Uf(a, b, c, d, e, g) {
  this.name = a;
  this.Oa = b;
  this.xa = c;
  this.current = d;
  this.m = e;
  this.j = g;
  this.n = 2229667594;
  this.B = 8192;
  4 < arguments.length ? (this.m = e, this.j = g) : this.j = this.m = null;
}
f = Uf.prototype;
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
      return this.Oa;
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
  }(this), "#clash-attack-sim.component.Animation{", ", ", "}", c, V.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Hf, this.Oa], null), new W(null, 2, 5, X, [lf, this.xa], null), new W(null, 2, 5, X, [rf, this.current], null)], null), this.j));
};
f.K = function() {
  return this.m;
};
f.O = function() {
  return 4 + M(this.j);
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.ea = function(a, b) {
  return yc(new Ke(null, new r(null, 4, [$, null, lf, null, rf, null, Hf, null], null), null), b) ? P.e(nc(Ed.e(ke, this), this.m), b) : new Uf(this.name, this.Oa, this.xa, this.current, this.m, ld(P.e(this.j, b)), null);
};
f.W = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new Uf(c, this.Oa, this.xa, this.current, this.m, this.j, null) : t(T.e ? T.e(Hf, b) : T.call(null, Hf, b)) ? new Uf(this.name, c, this.xa, this.current, this.m, this.j, null) : t(T.e ? T.e(lf, b) : T.call(null, lf, b)) ? new Uf(this.name, this.Oa, c, this.current, this.m, this.j, null) : t(T.e ? T.e(rf, b) : T.call(null, rf, b)) ? new Uf(this.name, this.Oa, this.xa, c, this.m, this.j, null) : new Uf(this.name, this.Oa, this.xa, this.current, this.m, 
  kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 4, 5, X, [new W(null, 2, 5, X, [$, this.name], null), new W(null, 2, 5, X, [Hf, this.Oa], null), new W(null, 2, 5, X, [lf, this.xa], null), new W(null, 2, 5, X, [rf, this.current], null)], null), this.j));
};
f.N = function(a, b) {
  return new Uf(this.name, this.Oa, this.xa, this.current, b, this.j, this.q);
};
f.L = function(a, b) {
  return rc(b) ? Ka(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function Vf(a, b, c) {
  return new Uf(Xe, a, b, c);
}
function Wf(a, b, c) {
  this.name = a;
  this.m = b;
  this.j = c;
  this.n = 2229667594;
  this.B = 8192;
  1 < arguments.length ? (this.m = b, this.j = c) : this.j = this.m = null;
}
f = Wf.prototype;
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
  return this.m;
};
f.O = function() {
  return 1 + M(this.j);
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.ea = function(a, b) {
  return yc(new Ke(null, new r(null, 1, [$, null], null), null), b) ? P.e(nc(Ed.e(ke, this), this.m), b) : new Wf(this.name, this.m, ld(P.e(this.j, b)), null);
};
f.W = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new Wf(c, this.m, this.j, null) : new Wf(this.name, this.m, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.j));
};
f.N = function(a, b) {
  return new Wf(this.name, b, this.j, this.q);
};
f.L = function(a, b) {
  return rc(b) ? Ka(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function Xf(a, b, c) {
  this.name = a;
  this.m = b;
  this.j = c;
  this.n = 2229667594;
  this.B = 8192;
  1 < arguments.length ? (this.m = b, this.j = c) : this.j = this.m = null;
}
f = Xf.prototype;
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
  return this.m;
};
f.O = function() {
  return 1 + M(this.j);
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.ea = function(a, b) {
  return yc(new Ke(null, new r(null, 1, [$, null], null), null), b) ? P.e(nc(Ed.e(ke, this), this.m), b) : new Xf(this.name, this.m, ld(P.e(this.j, b)), null);
};
f.W = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new Xf(c, this.m, this.j, null) : new Xf(this.name, this.m, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.j));
};
f.N = function(a, b) {
  return new Xf(this.name, b, this.j, this.q);
};
f.L = function(a, b) {
  return rc(b) ? Ka(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function Yf(a, b, c) {
  this.name = a;
  this.m = b;
  this.j = c;
  this.n = 2229667594;
  this.B = 8192;
  1 < arguments.length ? (this.m = b, this.j = c) : this.j = this.m = null;
}
f = Yf.prototype;
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
  return this.m;
};
f.O = function() {
  return 1 + M(this.j);
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.ea = function(a, b) {
  return yc(new Ke(null, new r(null, 1, [$, null], null), null), b) ? P.e(nc(Ed.e(ke, this), this.m), b) : new Yf(this.name, this.m, ld(P.e(this.j, b)), null);
};
f.W = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new Yf(c, this.m, this.j, null) : new Yf(this.name, this.m, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.j));
};
f.N = function(a, b) {
  return new Yf(this.name, b, this.j, this.q);
};
f.L = function(a, b) {
  return rc(b) ? Ka(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function Zf(a, b, c) {
  this.name = a;
  this.m = b;
  this.j = c;
  this.n = 2229667594;
  this.B = 8192;
  1 < arguments.length ? (this.m = b, this.j = c) : this.j = this.m = null;
}
f = Zf.prototype;
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
  return this.m;
};
f.O = function() {
  return 1 + M(this.j);
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.ea = function(a, b) {
  return yc(new Ke(null, new r(null, 1, [$, null], null), null), b) ? P.e(nc(Ed.e(ke, this), this.m), b) : new Zf(this.name, this.m, ld(P.e(this.j, b)), null);
};
f.W = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new Zf(c, this.m, this.j, null) : new Zf(this.name, this.m, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.j));
};
f.N = function(a, b) {
  return new Zf(this.name, b, this.j, this.q);
};
f.L = function(a, b) {
  return rc(b) ? Ka(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function $f(a, b, c) {
  this.name = a;
  this.m = b;
  this.j = c;
  this.n = 2229667594;
  this.B = 8192;
  1 < arguments.length ? (this.m = b, this.j = c) : this.j = this.m = null;
}
f = $f.prototype;
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
  return this.m;
};
f.O = function() {
  return 1 + M(this.j);
};
f.I = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Mc(this);
};
f.F = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && fe(this, b) : b) ? !0 : !1;
};
f.ea = function(a, b) {
  return yc(new Ke(null, new r(null, 1, [$, null], null), null), b) ? P.e(nc(Ed.e(ke, this), this.m), b) : new $f(this.name, this.m, ld(P.e(this.j, b)), null);
};
f.W = function(a, b, c) {
  return t(T.e ? T.e($, b) : T.call(null, $, b)) ? new $f(c, this.m, this.j, null) : new $f(this.name, this.m, kc.i(this.j, b, c), null);
};
f.M = function() {
  return D(V.e(new W(null, 1, 5, X, [new W(null, 2, 5, X, [$, this.name], null)], null), this.j));
};
f.N = function(a, b) {
  return new $f(this.name, b, this.j, this.q);
};
f.L = function(a, b) {
  return rc(b) ? Ka(this, z.e(b, 0), z.e(b, 1)) : Ac.i(za, this, b);
};
function ag(a, b) {
  return yc(a, b);
}
function bg(a, b) {
  return kc.i(a, $.f(b), b);
}
function cg(a) {
  return Ac.i(function(a, c) {
    return P.e(a, $.f(c));
  }, a, new W(null, 2, 5, X, [new Zf(wf), new Wf(Jf)], null));
}
function dg(a, b) {
  return Ac.i(function(a, b) {
    return kc.i(a, $.f(b), b);
  }, a, b);
}
function eg() {
  var a = fg.D ? fg.D() : fg.call(null);
  return gg.f ? gg.f(a) : gg.call(null, a);
}
var hg = function() {
  function a(a) {
    return new r(null, 2, [$, sf, qf, a], null);
  }
  function b() {
    return c.f(eg());
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
}(), ig = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = Ac.i(function(a, b) {
      return kc.i(a, $.f(b), b);
    }, ke, a);
    return yc(a, sf) ? a : bg(a, hg.D());
  }
  a.C = 0;
  a.s = function(a) {
    a = D(a);
    return b(a);
  };
  a.o = b;
  return a;
}(), jg = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = K(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = Je(hf.f(a));
    return Dd.e(function() {
      return function(a) {
        return md(nd.e(ag, a), b);
      };
    }(e), e);
  }
  a.C = 1;
  a.s = function(a) {
    var d = F(a);
    a = G(a);
    return b(d, a);
  };
  a.o = b;
  return a;
}();
function kg(a, b) {
  var c = function() {
    var b = hf.f(a);
    return t(b) ? b : ke;
  }();
  return kc.i(a, hf, Ac.i(function() {
    return function(a, b) {
      return kc.i(a, Fd.e(b, new W(null, 2, 5, X, [sf, qf], null)), b);
    };
  }(c), c, b));
}
function lg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [uf, vf], null));
}
function mg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [jf, Bf], null));
}
function ng(a) {
  return Fd.e(a, new W(null, 2, 5, X, [We, Ef], null));
}
function og(a) {
  return Fd.e(a, new W(null, 2, 5, X, [ef, zf], null));
}
function pg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [ef, nf], null));
}
function qg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [Xe, Hf], null));
}
function rg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [Xe, lf], null));
}
function sg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [Xe, rf], null));
}
function tg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [jf, xf], null));
}
function ug(a) {
  return Fd.e(a, new W(null, 2, 5, X, [jf, Df], null));
}
function vg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [jf, pf], null));
}
function wg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [Gf, Af], null));
}
function xg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [jf, bf], null));
}
function yg(a, b) {
  return Dd.e(function(b) {
    return Ob.e(mg(b), a);
  }, b);
}
function zg(a) {
  return Fd.e(a, new W(null, 2, 5, X, [ef, of], null)).getBounds();
}
;function Ag(a, b, c) {
  var d = zg(a), e = zg(b), g = lg(a);
  a = N.i(g, 0, null);
  var g = N.i(g, 1, null), h = lg(b);
  b = N.i(h, 0, null);
  var h = N.i(h, 1, null), k = d.height / 2, d = d.width / 2, l = e.height / 2, e = e.width / 2;
  return!(a - d - c > b + e || b - e > a + d + c || g - k - c > h + l || h - l > g + k + c);
}
function Bg(a, b) {
  var c = lg(a), d = N.i(c, 0, null), c = N.i(c, 1, null), e = lg(b), g = N.i(e, 0, null), e = N.i(e, 1, null);
  return Math.sqrt(Math.pow(Math.abs(d - g), 2) + Math.pow(Math.abs(c - e), 2));
}
function Dg(a, b) {
  return Q.i(Ne, nd.e(Bg, a), b);
}
function Eg(a, b, c) {
  return kg(a, function() {
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
                    var b = z.e(k, a), e = m, g = ng(b), h = tg(b), n = ug(b), J = vg(b), R = xg(b), U = Dg(b, c), ia = !Ag(b, U, h), b = dg(cg(b), new W(null, 3, 5, X, [new Sf(We, g), t(ia) ? new Zf(wf) : new Wf(Jf), Qf(h, n, J, U, R)], null));
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
              var a = ng(n), b = tg(n), e = ug(n), g = vg(n), h = xg(n), k = Dg(n, c), l = !Ag(n, k, b);
              return dg(cg(n), new W(null, 3, 5, X, [new Sf(We, a), t(l) ? new Zf(wf) : new Wf(Jf), Qf(b, e, g, k, h)], null));
            }(), e(G(b)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
function Fg(a) {
  if (Ob.e(Gc(Cf.f(a), 5), 0)) {
    var b = Q.e(jg, Ed.e(new W(null, 1, 5, X, [a], null), new W(null, 1, 5, X, [jf], null))), c = Q.e(jg, Ed.e(new W(null, 1, 5, X, [a], null), new W(null, 2, 5, X, [Gf, df], null)));
    return D(b) && D(c) ? Q.e(Eg, new W(null, 3, 5, X, [a, b, c], null)) : a;
  }
  return a;
}
;var Gg;
a: {
  var Hg = aa.navigator;
  if (Hg) {
    var Ig = Hg.userAgent;
    if (Ig) {
      Gg = Ig;
      break a;
    }
  }
  Gg = "";
}
function Jg(a) {
  return-1 != Gg.indexOf(a);
}
;var Kg = Jg("Opera") || Jg("OPR"), Lg = Jg("Trident") || Jg("MSIE"), Mg = Jg("Gecko") && -1 == Gg.toLowerCase().indexOf("webkit") && !(Jg("Trident") || Jg("MSIE")), Ng = -1 != Gg.toLowerCase().indexOf("webkit"), Og = function() {
  var a = "", b;
  if (Kg && aa.opera) {
    return a = aa.opera.version, "function" == p(a) ? a() : a;
  }
  Mg ? b = /rv\:([^\);]+)(\)|;)/ : Lg ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Ng && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(Gg)) ? a[1] : "");
  return Lg && (b = (b = aa.document) ? b.documentMode : void 0, b > parseFloat(a)) ? String(b) : a;
}(), Pg = {};
function Qg(a) {
  var b;
  if (!(b = Pg[a])) {
    b = 0;
    for (var c = String(Og).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), g = 0;0 == b && g < e;g++) {
      var h = c[g] || "", k = d[g] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(h) || ["", "", ""], q = m.exec(k) || ["", "", ""];
        if (0 == n[0].length && 0 == q[0].length) {
          break;
        }
        b = da(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == q[1].length ? 0 : parseInt(q[1], 10)) || da(0 == n[2].length, 0 == q[2].length) || da(n[2], q[2]);
      } while (0 == b);
    }
    b = Pg[a] = 0 <= b;
  }
  return b;
}
;Lg && Qg("9");
!Ng || Qg("528");
Mg && Qg("1.9b") || Lg && Qg("8") || Kg && Qg("9.5") || Ng && Qg("528");
Mg && !Qg("8") || Lg && Qg("9");
var Rg = function() {
  function a(a, b) {
    return Q.e(x, Cd(a, b));
  }
  function b(a) {
    return Q.e(x, a);
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
function gg(a) {
  return "" + x.f(a.kb);
}
function fg() {
  function a() {
    return Kc(16).toString(16);
  }
  return new Ue(Rg.f(V.o(Ad.e(8, a), "-", K([Ad.e(4, a), "-4", Ad.e(3, a), "-", (8 | 3 & Kc(15)).toString(16), Ad.e(3, a), "-", Ad.e(12, a)], 0))));
}
var Sg = "^" + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + "-" + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + "-" + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + "-" + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + "-" + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + 
x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + x.f("[0-9a-fA-F]") + "$";
if (!(Sg instanceof RegExp)) {
  var Tg;
  var Ug = /^(?:\(\?([idmsux]*)\))?(.*)/;
  if ("string" === typeof Sg) {
    var Vg = Ug.exec(Sg);
    Tg = null == Vg ? null : 1 === M(Vg) ? F(Vg) : pb(Ac.i(ob, nb(fc), Vg));
  } else {
    throw new TypeError("re-find must match against a string.");
  }
  N.i(Tg, 0, null);
  N.i(Tg, 1, null);
  N.i(Tg, 2, null);
}
;function Wg(a, b) {
  for (var c = a, d = b;;) {
    if (D(d)) {
      var e = F(d), e = vg(e), c = c - e, d = G(d)
    } else {
      return c;
    }
  }
}
function Xg(a, b, c) {
  var d = Cf.f(a), e = Dd.e(function(a) {
    return function(b) {
      return Ob.e(a, xg(b));
    };
  }(d), b);
  return kg(a, function() {
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
                        var c = z.e(d, a), h = g, l = yg(c, b), m = wg(c), l = Wg(m, l), c = dg(P.e(c, $.f(new Xf(df))), new W(null, 2, 5, X, [new Rf(Gf, l), 0 < l ? new Xf(df) : new Yf($e)], null));
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
                  var a = yg(h, b), c = wg(h), a = Wg(c, a);
                  return dg(P.e(h, $.f(new Xf(df))), new W(null, 2, 5, X, [new Rf(Gf, a), 0 < a ? new Xf(df) : new Yf($e)], null));
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
;function Yg(a, b, c) {
  a = xg.f ? xg.f(a) : xg.call(null, a);
  return c - a >= b ? c : a;
}
function Zg(a, b) {
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
                            return mg.f ? mg.f(a) : mg.call(null, a);
                          }(), d = Cf.f(a);
                          wg.f ? wg.f(b) : wg.call(null, b);
                          var g = function() {
                            var a = c;
                            return tg.f ? tg.f(a) : tg.call(null, a);
                          }(), h = function() {
                            var a = c;
                            return ug.f ? ug.f(a) : ug.call(null, a);
                          }(), k = function() {
                            var a = c;
                            return vg.f ? vg.f(a) : vg.call(null, a);
                          }(), l = Yg(c, h, d), d = c, b = Qf.P ? Qf.P(g, h, k, b, l) : Qf.call(null, g, h, k, b, l);
                          return bg.e ? bg.e(d, b) : bg.call(null, d, b);
                        }());
                        b += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? bd(n.S(), g(ub(b))) : bd(n.S(), null);
                }
                var q = F(b);
                return L(function() {
                  var b = function() {
                    var a = q;
                    return mg.f ? mg.f(a) : mg.call(null, a);
                  }(), c = Cf.f(a);
                  wg.f ? wg.f(b) : wg.call(null, b);
                  var d = function() {
                    var a = q;
                    return tg.f ? tg.f(a) : tg.call(null, a);
                  }(), g = function() {
                    var a = q;
                    return ug.f ? ug.f(a) : ug.call(null, a);
                  }(), h = function() {
                    var a = q;
                    return vg.f ? vg.f(a) : vg.call(null, a);
                  }(), k = Yg(q, g, c), c = q, b = Qf.P ? Qf.P(d, g, h, b, k) : Qf.call(null, d, g, h, b, k);
                  return bg.e ? bg.e(c, b) : bg.call(null, c, b);
                }(), g(G(b)));
              }
              return null;
            }
          };
        }(b), null, null);
      };
    }(a)(b);
  }();
  return kg.e ? kg.e(a, c) : kg.call(null, a, c);
}
;function $g(a, b, c) {
  a[b] = c;
  return a;
}
;function ah(a) {
  return PIXI.Sprite.fromFrame(a);
}
function bh(a) {
  return PIXI.Sprite.fromImage(a);
}
function ch(a) {
  return PIXI.Texture.fromImage(a, !1);
}
;var dh = new r(null, 4, [Ze, .25, xf, 1, pf, 5, Df, 180], null), eh = new r(null, 1, [Af, 2E3], null), fh = new PIXI.Point(.5, .5);
function gh(a, b) {
  var c = ah.f ? ah.f("barbarian-neutral-down.png") : ah.call(null, "barbarian-neutral-down.png"), d = ah.f ? ah.f("barbarian-run-right-down.png") : ah.call(null, "barbarian-run-right-down.png"), e = ah.f ? ah.f("barbarian-run-left-down.png") : ah.call(null, "barbarian-run-left-down.png"), d = new r(null, 3, [cf, c, tf, d, If, e], null), e = new W(null, 4, 5, X, [cf, If, cf, tf], null), g = Ze.f(dh), h = xf.f(dh), k = pf.f(dh), l = Df.f(dh);
  return ig.o(K([Lf(new W(null, 2, 5, X, [a, b], null)), new $f(af), new Sf(We, g), Vf(d, e, 0), Nf(c, fh, new W(null, 2, 5, X, [1, 1], null)), Qf(h, l, k, null, 0)], 0));
}
function hh(a, b) {
  var c = bh.f ? bh.f("images/town-hall.png") : bh.call(null, "images/town-hall.png"), d = Af.f(eh);
  return ig.o(K([Lf(new W(null, 2, 5, X, [a, b], null)), Nf(c, fh, new W(null, 2, 5, X, [4, 4], null)), new Xf(df), new Rf(Gf, d)], 0));
}
;var ih = sd.f ? sd.f(fc) : sd.call(null, fc);
function jh(a) {
  a = a.getLocalPosition(a.target);
  return vd.i(ih, hc, new r(null, 2, [yf, a.x, Ve, a.y], null));
}
function kh(a) {
  var b = Yb.f ? Yb.f(ih) : Yb.call(null, ih);
  td.e ? td.e(ih, fc) : td.call(null, ih, fc);
  return D(b) ? kg(a, function() {
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
                        g = yf.f(b);
                        b = Ve.f(b);
                        g = gh(g, b);
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
                  var a = yf.f(n), b = Ve.f(n);
                  return gh(a, b);
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
;function lh(a, b) {
  return kg(a, function() {
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
                    var b = z.e(h, a), d = l, e = Fd.e(b, new W(null, 2, 5, X, [gf, kf], null)), g = ng(b), m = lg(b), E = N.i(m, 0, null), m = N.i(m, 1, null), g = new W(null, 2, 5, X, [E + g * Math.cos(e), m + g * Math.sin(e)], null), e = N.i(g, 0, null), g = N.i(g, 1, null), b = bg(b, Lf(new W(null, 2, 5, X, [e, g], null)));
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
              var a = Fd.e(m, new W(null, 2, 5, X, [gf, kf], null)), b = ng(m), d = lg(m), e = N.i(d, 0, null), d = N.i(d, 1, null), b = new W(null, 2, 5, X, [e + b * Math.cos(a), d + b * Math.sin(a)], null), a = N.i(b, 0, null), b = N.i(b, 1, null);
              return bg(m, Lf(new W(null, 2, 5, X, [a, b], null)));
            }(), d(G(b)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
function mh(a) {
  if (Ob.e(Gc(Cf.f(a), 1), 0)) {
    var b = Q.e(jg, Ed.e(new W(null, 1, 5, X, [a], null), new W(null, 3, 5, X, [We, gf, wf], null)));
    return D(b) ? Q.e(lh, new W(null, 2, 5, X, [a, b], null)) : a;
  }
  return a;
}
;function nh(a, b) {
  var c = M(a);
  return Ob.e(b, c - 1) ? 0 : b + 1;
}
function oh(a, b) {
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
                            return og.f ? og.f(a) : og.call(null, a);
                          }(), c = function() {
                            var a = b;
                            return pg.f ? pg.f(a) : pg.call(null, a);
                          }(), d = function() {
                            var a = b;
                            return qg.f ? qg.f(a) : qg.call(null, a);
                          }(), g = function() {
                            var a = b;
                            return rg.f ? rg.f(a) : rg.call(null, a);
                          }(), h = function() {
                            var a = b;
                            return sg.f ? sg.f(a) : sg.call(null, a);
                          }(), h = nh(g, h), k = O.e(g, h), l = O.e(d, k), k = b, a = new W(null, 2, 5, X, [Vf.i ? Vf.i(d, g, h) : Vf.call(null, d, g, h), Nf.i ? Nf.i(l, a, c) : Nf.call(null, l, a, c)], null);
                          return dg.e ? dg.e(k, a) : dg.call(null, k, a);
                        }());
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? bd(n.S(), g(ub(a))) : bd(n.S(), null);
                }
                var q = F(a);
                return L(function() {
                  var a = function() {
                    var a = q;
                    return og.f ? og.f(a) : og.call(null, a);
                  }(), b = function() {
                    var a = q;
                    return pg.f ? pg.f(a) : pg.call(null, a);
                  }(), c = function() {
                    var a = q;
                    return qg.f ? qg.f(a) : qg.call(null, a);
                  }(), d = function() {
                    var a = q;
                    return rg.f ? rg.f(a) : rg.call(null, a);
                  }(), g = function() {
                    var a = q;
                    return sg.f ? sg.f(a) : sg.call(null, a);
                  }(), g = nh(d, g), h = O.e(d, g), k = O.e(c, h), h = q, a = new W(null, 2, 5, X, [Vf.i ? Vf.i(c, d, g) : Vf.call(null, c, d, g), Nf.i ? Nf.i(k, a, b) : Nf.call(null, k, a, b)], null);
                  return dg.e ? dg.e(h, a) : dg.call(null, h, a);
                }(), g(G(a)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(a)(b);
  }();
  return kg.e ? kg.e(a, c) : kg.call(null, a, c);
}
;function ph(a, b, c) {
  $g($g(a.position, "x", b), "y", c);
  return a;
}
function qh(a, b, c) {
  a = $g(a, "height", 16 * b);
  return $g(a, "width", 16 * c);
}
function rh(a, b, c) {
  var d = Ye.f(a), e = mf.f(a);
  b = D(b);
  for (var g = null, h = 0, k = 0;;) {
    if (k < h) {
      var l = g.Y(null, k), l = Fd.e(l, new W(null, 2, 5, X, [ff, of], null));
      d.addChild(l);
      k += 1;
    } else {
      if (b = D(b)) {
        sc(b) ? (h = tb(b), b = ub(b), g = h, h = M(h)) : (g = F(b), g = Fd.e(g, new W(null, 2, 5, X, [ff, of], null)), d.addChild(g), b = I(b), g = null, h = 0), k = 0;
      } else {
        break;
      }
    }
  }
  c = D(c);
  b = null;
  for (h = g = 0;;) {
    if (h < g) {
      var m = b.Y(null, h), l = Fd.e(m, new W(null, 2, 5, X, [ef, of], null)), k = og(m), n = pg(m), q = N.i(n, 0, null), n = N.i(n, 1, null), s = lg(m), m = N.i(s, 0, null), s = N.i(s, 1, null), m = Math.round(m), s = Math.round(s), l = ph(qh(l, q, n), m, s), k = $g(l, "anchor", k);
      d.addChild(k);
      h += 1;
    } else {
      if (c = D(c)) {
        sc(c) ? (g = tb(c), c = ub(c), b = g, g = M(g)) : (l = F(c), g = Fd.e(l, new W(null, 2, 5, X, [ef, of], null)), b = og(l), k = pg(l), h = N.i(k, 0, null), k = N.i(k, 1, null), q = lg(l), l = N.i(q, 0, null), q = N.i(q, 1, null), l = Math.round(l), q = Math.round(q), g = ph(qh(g, h, k), l, q), b = $g(g, "anchor", b), d.addChild(b), c = I(c), b = null, g = 0), h = 0;
      } else {
        break;
      }
    }
  }
  e.render(d);
  return a;
}
function sh(a) {
  if (Ob.e(Gc(Cf.f(a), 1), 0)) {
    var b = Q.e(jg, Ed.e(new W(null, 1, 5, X, [a], null), new W(null, 1, 5, X, [ff], null))), c = Q.e(jg, Ed.e(new W(null, 1, 5, X, [a], null), new W(null, 1, 5, X, [ef], null)));
    return D(b) && D(c) ? Q.e(rh, new W(null, 3, 5, X, [a, b, c], null)) : a;
  }
  return a;
}
;function th(a, b) {
  return kg(a, function() {
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
                    var b = z.e(h, a), d = l, e = mg(b), g = lg(e), e = N.i(g, 0, null), g = N.i(g, 1, null), m = lg(b), E = N.i(m, 0, null), m = N.i(m, 1, null), b = bg(b, new Tf(gf, Math.atan2(g - m, e - E)));
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
              var a = mg(m), b = lg(a), a = N.i(b, 0, null), b = N.i(b, 1, null), d = lg(m), e = N.i(d, 0, null), d = N.i(d, 1, null);
              return bg(m, new Tf(gf, Math.atan2(b - d, a - e)));
            }(), d(G(b)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
function uh(a) {
  if (Ob.e(Gc(Cf.f(a), 5), 0)) {
    var b = Q.e(jg, Ed.e(new W(null, 1, 5, X, [a], null), new W(null, 2, 5, X, [jf, We], null)));
    return D(b) ? Q.e(th, new W(null, 2, 5, X, [a, b], null)) : a;
  }
  return a;
}
;function vh() {
  var a = new PIXI.autoDetectRenderer(640, 640);
  document.getElementById("battlefield").appendChild(a.view);
  return a;
}
function wh() {
  var a = new PIXI.Stage(16777215);
  $g(a, "interactive", !0);
  $g(a, "click", jh);
  return a;
}
function xh(a) {
  a = kc.i(kc.i(kc.i(a, mf, vh()), Ye, wh()), Cf, 0);
  var b;
  b = new PIXI.TilingSprite(ch.f ? ch.f("images/grass-tile.png") : ch.call(null, "images/grass-tile.png"), 640, 640);
  b = ig.o(K([new Of(ff, b)], 0));
  return kg(a, new W(null, 4, 5, X, [b, gh(160, 160), hh(400, 400), hh(320, 320)], null));
}
var yh = sd.f ? sd.f(ke) : sd.call(null, ke);
function zh(a) {
  var b = Cf.f(a);
  a = kc.i(a, Cf, b + 1);
  a = kh(a);
  a = Fg.f ? Fg.f(a) : Fg.call(null, a);
  a = uh.f ? uh.f(a) : uh.call(null, a);
  a = mh.f ? mh.f(a) : mh.call(null, a);
  Ob.e(Gc(Cf.f(a), 5), 0) && (b = Q.e(jg, Ed.e(new W(null, 1, 5, X, [a], null), new W(null, 2, 5, X, [jf, Jf], null))), a = D(b) ? Q.e(Zg, new W(null, 2, 5, X, [a, b], null)) : a);
  if (Ob.e(Gc(Cf.f(a), 5), 0)) {
    var b = Q.e(jg, Ed.e(new W(null, 1, 5, X, [a], null), new W(null, 2, 5, X, [jf, Jf], null))), c = Q.e(jg, Ed.e(new W(null, 1, 5, X, [a], null), new W(null, 2, 5, X, [Gf, df], null)));
    a = D(b) && D(c) ? Q.e(Xg, new W(null, 3, 5, X, [a, b, c], null)) : a;
  }
  Ob.e(Gc(Cf.f(a), 15), 0) && (b = Q.e(jg, Ed.e(new W(null, 1, 5, X, [a], null), new W(null, 1, 5, X, [Xe], null))), a = D(b) ? Q.e(oh, new W(null, 2, 5, X, [a, b], null)) : a);
  return sh.f ? sh.f(a) : sh.call(null, a);
}
var Bh = function Ah() {
  vd.e(yh, zh);
  return requestAnimFrame(Ah);
}, Ch = new PIXI.AssetLoader(["images/barbarian-run-down.json", "images/grass-tile.png", "images/town-hall.png"], !1);
$g(Ch, "onComplete", function() {
  vd.e(yh, xh);
  return requestAnimFrame(Bh);
});
Ch.load();

})();
