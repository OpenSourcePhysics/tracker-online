(function(){var P$=Clazz.newPackage("test"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Derivative");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['f','java.util.function.DoubleUnaryOperator','+wrappedFirst']]]

Clazz.newMeth(C$, 'math$D',  function (x) {
return x * Math.log(x) * Math.sin(x) * Math.cos(x) ;
}, 1);

Clazz.newMeth(C$, 'getFirst$java_util_function_DoubleUnaryOperator$D$D',  function (f, x, h) {
return (f.applyAsDouble$D(x + h) - f.applyAsDouble$D(x - h)) / h / 2.0 ;
}, 1);

Clazz.newMeth(C$, 'getFirstWrapped$java_util_function_DoubleUnaryOperator$D',  function (f, h) {
return ((P$.Derivative$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Derivative$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleUnaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'applyAsDouble$D',  function (x) {
return (this.$finals$.f.applyAsDouble$D(x + this.$finals$.h) - this.$finals$.f.applyAsDouble$D(x - this.$finals$.h)) / this.$finals$.h / 2.0 ;
});
})()
), Clazz.new_(P$.Derivative$2.$init$,[this, {f:f,h:h}]));
}, 1);

Clazz.newMeth(C$, 'directCalc$Z',  function (report) {
System.gc$();
var result=0;
var h=0.1;
var t0=System.currentTimeMillis$();
for (var i=1; i < 1000000; i++) {
result+=(C$.math$D(i + h) - C$.math$D(i - h)) / h / 2 ;
}
if (report) System.out.println$S("Direct: ..........." + new Double(result).toString() + "........" + Long.$s((Long.$sub(System.currentTimeMillis$(),t0))) );
}, 1);

Clazz.newMeth(C$, 'unwrappedFI$java_util_function_DoubleUnaryOperator$Z',  function (f, report) {
System.gc$();
var result=0;
var t0=System.currentTimeMillis$();
for (var i=1; i < 1000000; i++) result+=C$.getFirst$java_util_function_DoubleUnaryOperator$D$D(f, i, 0.1);

if (report) System.out.println$S("Unwrapped: ........" + new Double(result).toString() + "................ " + Long.$s((Long.$sub(System.currentTimeMillis$(),t0))) );
}, 1);

Clazz.newMeth(C$, 'wrappedFI$java_util_function_DoubleUnaryOperator$Z',  function (wrappedFirst, report) {
System.gc$();
var result=0;
var t0=System.currentTimeMillis$();
for (var i=1; i < 1000000; i++) result+=wrappedFirst.applyAsDouble$D(i);

if (report) System.out.println$S("Wrapped: .........." + new Double(result).toString() + "........................" + Long.$s((Long.$sub(System.currentTimeMillis$(),t0))) );
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
System.out.println$S(System.getProperty$S("java.version") + " " + System.getProperty$S("os.arch") );
C$.unwrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.f, false);
C$.wrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.wrappedFirst, false);
C$.directCalc$Z(false);
C$.directCalc$Z(true);
C$.directCalc$Z(true);
C$.directCalc$Z(true);
C$.unwrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.f, true);
C$.unwrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.f, true);
C$.unwrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.f, true);
C$.wrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.wrappedFirst, true);
C$.wrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.wrappedFirst, true);
C$.wrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.wrappedFirst, true);
C$.directCalc$Z(true);
C$.unwrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.f, true);
C$.wrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.wrappedFirst, true);
C$.directCalc$Z(true);
C$.unwrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.f, true);
C$.wrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.wrappedFirst, true);
C$.directCalc$Z(true);
C$.unwrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.f, true);
C$.wrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.wrappedFirst, true);
C$.wrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.wrappedFirst, true);
C$.wrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.wrappedFirst, true);
C$.wrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.wrappedFirst, true);
C$.unwrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.f, true);
C$.unwrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.f, true);
C$.unwrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.f, true);
C$.directCalc$Z(true);
C$.directCalc$Z(true);
C$.directCalc$Z(true);
C$.wrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.wrappedFirst, false);
C$.unwrappedFI$java_util_function_DoubleUnaryOperator$Z(C$.f, false);
C$.directCalc$Z(false);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.f=((P$.Derivative$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Derivative$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleUnaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'applyAsDouble$D',  function (x) {
return x * Math.log(x) * Math.sin(x) * Math.cos(x) ;
});
})()
), Clazz.new_(P$.Derivative$1.$init$,[this, null]));
C$.wrappedFirst=C$.getFirstWrapped$java_util_function_DoubleUnaryOperator$D(C$.f, 0.1);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
