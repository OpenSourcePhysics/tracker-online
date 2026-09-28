(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'java.util.Hashtable','org.opensourcephysics.numerics.SuryonoParser','java.text.DecimalFormat','org.opensourcephysics.numerics.Util','javax.swing.SpinnerNumberModel']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Util");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['D',['SQRT2PI','LOG10','defaultNumericalPrecision'],'O',['htFormats','java.util.Map','parser','org.opensourcephysics.numerics.SuryonoParser','format2','java.text.DecimalFormat','+format3','+format4','+format_E2','+format_E3','+format_E4']]]

Clazz.newMeth(C$, 'newDecimalFormat$S',  function (format) {
var f=C$.htFormats.get$O(format);
if (f == null ) {
f=Clazz.new_($I$(3,1).c$$S,[format]);
C$.htFormats.put$O$O(format, f);
}return f;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'f2$D',  function (d) {
return C$.format2.format$D(d);
}, 1);

Clazz.newMeth(C$, 'f3$D',  function (d) {
return C$.format3.format$D(d);
}, 1);

Clazz.newMeth(C$, 'f4$D',  function (d) {
return C$.format4.format$D(d);
}, 1);

Clazz.newMeth(C$, 'relativePrecision$D$D',  function (epsilon, result) {
return (result > C$.defaultNumericalPrecision ) ? epsilon / result : epsilon;
}, 1);

Clazz.newMeth(C$, 'checkSorting$DA',  function (array) {
var sign=(array[0] <= array[array.length - 1] ) ? 1 : -1;
for (var i=1, n=array.length; i < n; i++) {
switch (sign) {
case -1:
if (array[i - 1] < array[i] ) {
return 0;
}break;
case 1:
if (array[i - 1] > array[i] ) {
return 0;
}}
}
return sign;
}, 1);

Clazz.newMeth(C$, 'getRange$org_opensourcephysics_numerics_Function$D$D$I',  function (f, a, b, n) {
var min=f.evaluate$D(a);
var max=f.evaluate$D(a);
var x=a;
var dx=(b - a) / (n - 1);
for (var i=1; i < n; i++) {
var y=f.evaluate$D(x);
min=Math.min(min, y);
max=Math.max(max, y);
x+=dx;
}
return Clazz.array(Double.TYPE, -1, [min, max]);
}, 1);

Clazz.newMeth(C$, 'functionFill$org_opensourcephysics_numerics_Function$D$D$DAA',  function (f, start, stop, data) {
var dx=1;
var n=data[0].length;
if (n > 1) {
dx=(stop - start) / (n - 1);
}var x=start;
for (var i=0; i < n; i++) {
data[0][i]=x;
data[1][i]=f.evaluate$D(x);
x+=dx;
}
return data;
}, 1);

Clazz.newMeth(C$, 'functionFill$org_opensourcephysics_numerics_Function$D$D$DA',  function (f, start, stop, data) {
var dx=1;
var n=data.length;
if (n > 1) {
dx=(stop - start) / (n - 1);
}var x=start;
for (var i=0; i < n; i++) {
data[i]=f.evaluate$D(x);
x+=dx;
}
return data;
}, 1);

Clazz.newMeth(C$, 'computeAverage$DA$I$I',  function (array, start, num) {
var sum=0;
for (var i=start, stop=start + num; i < stop; i++) {
sum+=array[i];
}
return sum / num;
}, 1);

Clazz.newMeth(C$, 'constantFunction$D',  function (c) {
return ((P$.Util$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Util$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.numerics.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
return this.$finals$.c;
});
})()
), Clazz.new_(P$.Util$1.$init$,[this, {c:c}]));
}, 1);

Clazz.newMeth(C$, 'linearFunction$D$D',  function (m, b) {
return ((P$.Util$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Util$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.numerics.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
return this.$finals$.m * x + this.$finals$.b;
});
})()
), Clazz.new_(P$.Util$2.$init$,[this, {b:b,m:m}]));
}, 1);

Clazz.newMeth(C$, 'gaussian$D$D',  function (x0, sigma) {
var s2=2 * sigma * sigma ;
return ((P$.Util$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Util$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.numerics.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
return Math.exp(-(x - this.$finals$.x0) * (x - this.$finals$.x0) / this.$finals$.s2) / this.$finals$.sigma / $I$(4).SQRT2PI ;
});
})()
), Clazz.new_(P$.Util$3.$init$,[this, {x0:x0,sigma:sigma,s2:s2}]));
}, 1);

Clazz.newMeth(C$, 'evalMath$S',  function (str) {
try {
C$.parser.parse$S(str);
return C$.parser.evaluate$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"org.opensourcephysics.numerics.ParserException")){
} else {
throw ex;
}
}
return NaN;
}, 1);

Clazz.newMeth(C$, 'newSpinnerNumberModel$javax_swing_JSpinner$I$I$I$I',  function (spinner, value, min, max, step) {
var m=spinner.getModel$();
if (min == (m.getMinimum$()).intValue$() && max == (m.getMaximum$()).intValue$()  && step == (m.getMaximum$()).intValue$() ) {
spinner.setValue$O(Integer.valueOf$I(value));
} else {
spinner.setModel$javax_swing_SpinnerModel(Clazz.new_($I$(5,1).c$$I$I$I$I,[value, min, max, step]));
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.SQRT2PI=Math.sqrt(6.283185307179586);
C$.LOG10=Math.log(10);
C$.defaultNumericalPrecision=Math.sqrt(4.9E-324);
C$.htFormats=Clazz.new_($I$(1,1));
C$.parser=Clazz.new_($I$(2,1).c$$I,[0]);
C$.format2=C$.newDecimalFormat$S("#0.00");
C$.format3=C$.newDecimalFormat$S("#0.000");
C$.format4=C$.newDecimalFormat$S("#0.0000");
C$.format_E2=C$.newDecimalFormat$S("0.00E0");
C$.format_E3=C$.newDecimalFormat$S("0.000E0");
C$.format_E4=C$.newDecimalFormat$S("0.0000E0");
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
