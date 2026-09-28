(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'StrictMath']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Complex");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['re','im']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.re=0;
this.im=0;
}, 1);

Clazz.newMeth(C$, 'c$$D',  function (re_in) {
;C$.$init$.apply(this);
this.re=re_in;
this.im=0;
}, 1);

Clazz.newMeth(C$, 'c$$Number',  function (re_in) {
;C$.$init$.apply(this);
this.re=re_in.doubleValue$();
this.im=0;
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_Complex',  function (z) {
;C$.$init$.apply(this);
this.re=z.re;
this.im=z.im;
}, 1);

Clazz.newMeth(C$, 'c$$D$D',  function (re_in, im_in) {
;C$.$init$.apply(this);
this.re=re_in;
this.im=im_in;
}, 1);

Clazz.newMeth(C$, 'polar$',  function () {
var r=$I$(1).sqrt$D(this.re * this.re + this.im * this.im);
var a=$I$(1).atan2$D$D(this.im, this.re);
return Clazz.new_(C$.c$$D$D,[r, a]);
});

Clazz.newMeth(C$, 'cartesian$',  function () {
return Clazz.new_(C$.c$$D$D,[this.re * $I$(1).cos$D(this.im), this.re * $I$(1).sin$D(this.im)]);
});

Clazz.newMeth(C$, 're$',  function () {
return this.re;
});

Clazz.newMeth(C$, 'im$',  function () {
return this.im;
});

Clazz.newMeth(C$, 'set$org_opensourcephysics_numerics_Complex',  function (z) {
this.re=z.re;
this.im=z.im;
});

Clazz.newMeth(C$, 'set$D$D',  function (re_in, im_in) {
this.re=re_in;
this.im=im_in;
});

Clazz.newMeth(C$, 'setRe$D',  function (re_in) {
this.re=re_in;
});

Clazz.newMeth(C$, 'setIm$D',  function (im_in) {
this.im=im_in;
});

Clazz.newMeth(C$, 'equals$org_opensourcephysics_numerics_Complex$D',  function (b, tolerance) {
var temp1=(this.re - b.re);
var temp2=(this.im - b.im);
return (temp1 * temp1 + temp2 * temp2) <= tolerance * tolerance ;
});

Clazz.newMeth(C$, 'toString',  function () {
return "(" + new Double(this.re).toString() + ", " + new Double(this.im).toString() + ")" ;
});

Clazz.newMeth(C$, 'abs$',  function () {
var absRe=Math.abs(this.re);
var absIm=Math.abs(this.im);
if ((absRe == 0 ) && (absIm == 0 ) ) {
return 0;
} else if (absRe > absIm ) {
var temp=absIm / absRe;
return absRe * Math.sqrt(1 + temp * temp);
} else {
var temp=absRe / absIm;
return absIm * Math.sqrt(1 + temp * temp);
}});

Clazz.newMeth(C$, 'abs2$',  function () {
return this.re * this.re + this.im * this.im;
});

Clazz.newMeth(C$, 'mag$',  function () {
return $I$(1).sqrt$D(this.re * this.re + this.im * this.im);
});

Clazz.newMeth(C$, 'arg$',  function () {
return Math.atan2(this.im, this.re);
});

Clazz.newMeth(C$, 'parseComplex$S',  function (s) {
var from=s.indexOf$I("(");
if (from == -1) {
return null;
}var to=s.indexOf$I$I(",", from);
var x=Double.parseDouble$S(s.substring$I$I(from + 1, to));
from=to;
to=s.indexOf$I$I(")", from);
var y=Double.parseDouble$S(s.substring$I$I(from + 1, to));
return Clazz.new_(C$.c$$D$D,[x, y]);
}, 1);

Clazz.newMeth(C$, 'add$org_opensourcephysics_numerics_Complex',  function (z) {
return Clazz.new_(C$.c$$D$D,[this.re + z.re, this.im + z.im]);
});

Clazz.newMeth(C$, 'add$D',  function (d) {
return Clazz.new_(C$.c$$D$D,[this.re + d, this.im]);
});

Clazz.newMeth(C$, 'subtract$org_opensourcephysics_numerics_Complex',  function (z) {
return Clazz.new_(C$.c$$D$D,[this.re - z.re, this.im - z.im]);
});

Clazz.newMeth(C$, 'subtract$D',  function (d) {
return Clazz.new_(C$.c$$D$D,[this.re - d, this.im]);
});

Clazz.newMeth(C$, 'neg$',  function () {
return Clazz.new_(C$.c$$D$D,[-this.re, -this.im]);
});

Clazz.newMeth(C$, 'mul$D',  function (b) {
return Clazz.new_(C$.c$$D$D,[this.re * b, this.im * b]);
});

Clazz.newMeth(C$, 'mul$org_opensourcephysics_numerics_Complex',  function (b) {
return Clazz.new_(C$.c$$D$D,[this.re * b.re - this.im * b.im, this.im * b.re + this.re * b.im]);
});

Clazz.newMeth(C$, 'div$org_opensourcephysics_numerics_Complex',  function (b) {
var resRe;
var resIm;
var r;
var den;
if (Math.abs(b.re) >= Math.abs(b.im) ) {
r=b.im / b.re;
den=b.re + r * b.im;
resRe=(this.re + r * this.im) / den;
resIm=(this.im - r * this.re) / den;
} else {
r=b.re / b.im;
den=b.im + r * b.re;
resRe=(this.re * r + this.im) / den;
resIm=(this.im * r - this.re) / den;
}return Clazz.new_(C$.c$$D$D,[resRe, resIm]);
});

Clazz.newMeth(C$, 'div$D',  function (d) {
return Clazz.new_(C$.c$$D$D,[this.re / d, this.im / d]);
});

Clazz.newMeth(C$, 'invert$',  function () {
var r=this.re * this.re + this.im * this.im;
return Clazz.new_(C$.c$$D$D,[this.re / r, -this.im / r]);
});

Clazz.newMeth(C$, 'conjugate$',  function () {
return Clazz.new_(C$.c$$D$D,[this.re, -this.im]);
});

Clazz.newMeth(C$, 'power$D',  function (exponent) {
var scalar=Math.pow(this.abs$(), exponent);
var specialCase=false;
var factor=0;
if ((this.im == 0 ) && (this.re < 0 ) ) {
specialCase=true;
factor=2;
}if ((this.re == 0 ) && (this.im > 0 ) ) {
specialCase=true;
factor=1;
}if ((this.re == 0 ) && (this.im < 0 ) ) {
specialCase=true;
factor=-1;
}if (specialCase && (factor * exponent == ((factor * exponent)|0) ) ) {
var cSin=Clazz.array(Short.TYPE, -1, [0, 1, 0, -1]);
var cCos=Clazz.array(Short.TYPE, -1, [1, 0, -1, 0]);
var x=(((factor * exponent)|0)) % 4;
if (x < 0) {
x=4 + x;
}return Clazz.new_(C$.c$$D$D,[scalar * cCos[x], scalar * cSin[x]]);
}var temp=exponent * this.arg$();
return Clazz.new_(C$.c$$D$D,[scalar * Math.cos(temp), scalar * Math.sin(temp)]);
});

Clazz.newMeth(C$, 'cart$D$D',  function (re, im) {
return Clazz.new_(C$.c$$D$D,[re, im]);
}, 1);

Clazz.newMeth(C$, 'power$org_opensourcephysics_numerics_Complex',  function (exponent) {
if (exponent.im == 0 ) {
return this.power$D(exponent.re);
}var temp1Re=Math.log(this.abs$());
var temp1Im=this.arg$();
var temp2Re=(temp1Re * exponent.re) - (temp1Im * exponent.im);
var temp2Im=(temp1Re * exponent.im) + (temp1Im * exponent.re);
var scalar=Math.exp(temp2Re);
return Clazz.new_(C$.c$$D$D,[scalar * Math.cos(temp2Im), scalar * Math.sin(temp2Im)]);
});

Clazz.newMeth(C$, 'pow$org_opensourcephysics_numerics_Complex$D',  function (base, exponent) {
var re=exponent * Math.log(base.abs$());
var im=exponent * base.arg$();
var scalar=Math.exp(re);
return C$.cart$D$D(scalar * Math.cos(im), scalar * Math.sin(im));
}, 1);

Clazz.newMeth(C$, 'pow$D$org_opensourcephysics_numerics_Complex',  function (base, exponent) {
var re=Math.log(Math.abs(base));
var im=Math.atan2(0.0, base);
var re2=(re * exponent.re) - (im * exponent.im);
var im2=(re * exponent.im) + (im * exponent.re);
var scalar=Math.exp(re2);
return C$.cart$D$D(scalar * Math.cos(im2), scalar * Math.sin(im2));
}, 1);

Clazz.newMeth(C$, 'pow$org_opensourcephysics_numerics_Complex$org_opensourcephysics_numerics_Complex',  function (base, exponent) {
var re=Math.log(base.abs$());
var im=base.arg$();
var re2=(re * exponent.re) - (im * exponent.im);
var im2=(re * exponent.im) + (im * exponent.re);
var scalar=Math.exp(re2);
return C$.cart$D$D(scalar * Math.cos(im2), scalar * Math.sin(im2));
}, 1);

Clazz.newMeth(C$, 'exp$',  function () {
var exp_x=$I$(1).exp$D(this.re);
return Clazz.new_(C$.c$$D$D,[exp_x * $I$(1).cos$D(this.im), exp_x * $I$(1).sin$D(this.im)]);
});

Clazz.newMeth(C$, 'log$',  function () {
return Clazz.new_(C$.c$$D$D,[Math.log(this.abs$()), this.arg$()]);
});

Clazz.newMeth(C$, 'sqrt$',  function () {
var c;
var absRe;
var absIm;
var w;
var r;
if ((this.re == 0 ) && (this.im == 0 ) ) {
c=Clazz.new_(C$.c$$D$D,[0, 0]);
} else {
absRe=Math.abs(this.re);
absIm=Math.abs(this.im);
if (absRe >= absIm ) {
r=absIm / absRe;
w=Math.sqrt(absRe) * Math.sqrt(0.5 * (1.0 + Math.sqrt(1.0 + r * r)));
} else {
r=absRe / absIm;
w=Math.sqrt(absIm) * Math.sqrt(0.5 * (r + Math.sqrt(1.0 + r * r)));
}if (this.re >= 0 ) {
c=Clazz.new_(C$.c$$D$D,[w, this.im / (2.0 * w)]);
} else {
if (this.im < 0 ) {
w=-w;
}c=Clazz.new_(C$.c$$D$D,[this.im / (2.0 * w), w]);
}}return c;
});

Clazz.newMeth(C$, 'sin$',  function () {
var izRe;
var izIm;
var temp1Re;
var temp1Im;
var temp2Re;
var temp2Im;
var scalar;
izRe=-this.im;
izIm=this.re;
scalar=Math.exp(izRe);
temp1Re=scalar * Math.cos(izIm);
temp1Im=scalar * Math.sin(izIm);
scalar=Math.exp(-izRe);
temp2Re=scalar * Math.cos(-izIm);
temp2Im=scalar * Math.sin(-izIm);
temp1Re-=temp2Re;
temp1Im-=temp2Im;
return Clazz.new_(C$.c$$D$D,[0.5 * temp1Im, -0.5 * temp1Re]);
});

Clazz.newMeth(C$, 'cos$',  function () {
var izRe;
var izIm;
var temp1Re;
var temp1Im;
var temp2Re;
var temp2Im;
var scalar;
izRe=-this.im;
izIm=this.re;
scalar=Math.exp(izRe);
temp1Re=scalar * Math.cos(izIm);
temp1Im=scalar * Math.sin(izIm);
scalar=Math.exp(-izRe);
temp2Re=scalar * Math.cos(-izIm);
temp2Im=scalar * Math.sin(-izIm);
temp1Re+=temp2Re;
temp1Im+=temp2Im;
return Clazz.new_(C$.c$$D$D,[0.5 * temp1Re, 0.5 * temp1Im]);
});

Clazz.newMeth(C$, 'tan$',  function () {
var izRe;
var izIm;
var temp1Re;
var temp1Im;
var temp2Re;
var temp2Im;
var scalar;
var sinResult;
var cosResult;
izRe=-this.im;
izIm=this.re;
scalar=Math.exp(izRe);
temp1Re=scalar * Math.cos(izIm);
temp1Im=scalar * Math.sin(izIm);
scalar=Math.exp(-izRe);
temp2Re=scalar * Math.cos(-izIm);
temp2Im=scalar * Math.sin(-izIm);
temp1Re-=temp2Re;
temp1Im-=temp2Im;
sinResult=Clazz.new_(C$.c$$D$D,[0.5 * temp1Re, 0.5 * temp1Im]);
izRe=-this.im;
izIm=this.re;
scalar=Math.exp(izRe);
temp1Re=scalar * Math.cos(izIm);
temp1Im=scalar * Math.sin(izIm);
scalar=Math.exp(-izRe);
temp2Re=scalar * Math.cos(-izIm);
temp2Im=scalar * Math.sin(-izIm);
temp1Re+=temp2Re;
temp1Im+=temp2Im;
cosResult=Clazz.new_(C$.c$$D$D,[0.5 * temp1Re, 0.5 * temp1Im]);
return sinResult.div$org_opensourcephysics_numerics_Complex(cosResult);
});

Clazz.newMeth(C$, 'asin$',  function () {
var result;
var tempRe;
var tempIm;
tempRe=1.0 - ((this.re * this.re) - (this.im * this.im));
tempIm=0.0 - ((this.re * this.im) + (this.im * this.re));
result=Clazz.new_(C$.c$$D$D,[tempRe, tempIm]);
result=result.sqrt$();
result.re+=-this.im;
result.im+=this.re;
tempRe=Math.log(result.abs$());
tempIm=result.arg$();
result.re=tempIm;
result.im=-tempRe;
return result;
});

Clazz.newMeth(C$, 'acos$',  function () {
var result;
var tempRe;
var tempIm;
tempRe=1.0 - ((this.re * this.re) - (this.im * this.im));
tempIm=0.0 - ((this.re * this.im) + (this.im * this.re));
result=Clazz.new_(C$.c$$D$D,[tempRe, tempIm]);
result=result.sqrt$();
tempRe=-result.im;
tempIm=result.re;
result.re=this.re + tempRe;
result.im=this.im + tempIm;
tempRe=Math.log(result.abs$());
tempIm=result.arg$();
result.re=tempIm;
result.im=-tempRe;
return result;
});

Clazz.newMeth(C$, 'atan$',  function () {
var tempRe;
var tempIm;
var result=Clazz.new_(C$.c$$D$D,[-this.re, 1.0 - this.im]);
tempRe=this.re;
tempIm=1.0 + this.im;
result=result.div$org_opensourcephysics_numerics_Complex(Clazz.new_(C$.c$$D$D,[tempRe, tempIm]));
tempRe=Math.log(result.abs$());
tempIm=result.arg$();
result.re=0.5 * tempIm;
result.im=-0.5 * tempRe;
return result;
});

Clazz.newMeth(C$, 'sinh$',  function () {
var scalar;
var temp1Re;
var temp1Im;
var temp2Re;
var temp2Im;
scalar=Math.exp(this.re);
temp1Re=scalar * Math.cos(this.im);
temp1Im=scalar * Math.sin(this.im);
scalar=Math.exp(-this.re);
temp2Re=scalar * Math.cos(-this.im);
temp2Im=scalar * Math.sin(-this.im);
temp1Re-=temp2Re;
temp1Im-=temp2Im;
return Clazz.new_(C$.c$$D$D,[0.5 * temp1Re, 0.5 * temp1Im]);
});

Clazz.newMeth(C$, 'cosh$',  function () {
var scalar;
var temp1Re;
var temp1Im;
var temp2Re;
var temp2Im;
scalar=Math.exp(this.re);
temp1Re=scalar * Math.cos(this.im);
temp1Im=scalar * Math.sin(this.im);
scalar=Math.exp(-this.re);
temp2Re=scalar * Math.cos(-this.im);
temp2Im=scalar * Math.sin(-this.im);
temp1Re+=temp2Re;
temp1Im+=temp2Im;
return Clazz.new_(C$.c$$D$D,[0.5 * temp1Re, 0.5 * temp1Im]);
});

Clazz.newMeth(C$, 'tanh$',  function () {
var scalar;
var temp1Re;
var temp1Im;
var temp2Re;
var temp2Im;
var sinRes;
var cosRes;
scalar=Math.exp(this.re);
temp1Re=scalar * Math.cos(this.im);
temp1Im=scalar * Math.sin(this.im);
scalar=Math.exp(-this.re);
temp2Re=scalar * Math.cos(-this.im);
temp2Im=scalar * Math.sin(-this.im);
temp1Re-=temp2Re;
temp1Im-=temp2Im;
sinRes=Clazz.new_(C$.c$$D$D,[0.5 * temp1Re, 0.5 * temp1Im]);
scalar=Math.exp(this.re);
temp1Re=scalar * Math.cos(this.im);
temp1Im=scalar * Math.sin(this.im);
scalar=Math.exp(-this.re);
temp2Re=scalar * Math.cos(-this.im);
temp2Im=scalar * Math.sin(-this.im);
temp1Re+=temp2Re;
temp1Im+=temp2Im;
cosRes=Clazz.new_(C$.c$$D$D,[0.5 * temp1Re, 0.5 * temp1Im]);
return sinRes.div$org_opensourcephysics_numerics_Complex(cosRes);
});

Clazz.newMeth(C$, 'asinh$',  function () {
var result;
result=Clazz.new_(C$.c$$D$D,[((this.re * this.re) - (this.im * this.im)) + 1, (this.re * this.im) + (this.im * this.re)]);
result=result.sqrt$();
result.re+=this.re;
result.im+=this.im;
var temp=result.arg$();
result.re=Math.log(result.abs$());
result.im=temp;
return result;
});

Clazz.newMeth(C$, 'acosh$',  function () {
var result;
result=Clazz.new_(C$.c$$D$D,[((this.re * this.re) - (this.im * this.im)) - 1, (this.re * this.im) + (this.im * this.re)]);
result=result.sqrt$();
result.re+=this.re;
result.im+=this.im;
var temp=result.arg$();
result.re=Math.log(result.abs$());
result.im=temp;
return result;
});

Clazz.newMeth(C$, 'atanh$',  function () {
var tempRe;
var tempIm;
var result=Clazz.new_(C$.c$$D$D,[1.0 + this.re, this.im]);
tempRe=1.0 - this.re;
tempIm=-this.im;
result=result.div$org_opensourcephysics_numerics_Complex(Clazz.new_(C$.c$$D$D,[tempRe, tempIm]));
tempRe=Math.log(result.abs$());
tempIm=result.arg$();
result.re=0.5 * tempRe;
result.im=0.5 * tempIm;
return result;
});

Clazz.newMeth(C$, 'isInfinite$',  function () {
return (Double.isInfinite$D(this.re) || Double.isInfinite$D(this.im) );
});

Clazz.newMeth(C$, 'isNaN$',  function () {
return (Double.isNaN$D(this.re) || Double.isNaN$D(this.im) );
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
