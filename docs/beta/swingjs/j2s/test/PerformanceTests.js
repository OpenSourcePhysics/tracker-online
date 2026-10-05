(function(){var P$=Clazz.newPackage("test"),I$=[[0,['javajs.async.SwingJSUtils','.Performance'],'java.util.ArrayList','java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PerformanceTests");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
C$.testDataToolTabFindNearestXIndex$();
}, 1);

Clazz.newMeth(C$, 'testDataToolTabFindNearestXIndex$',  function () {
var xp=Clazz.array(Double.TYPE, -1, [1, 2, 3, 4, 5, 6, 0, 0, 0]);
var yp=Clazz.array(Double.TYPE, -1, [0, 0, NaN, 0, 0, 0]);
System.out.println$Z(C$.findNearestXIndex0$D$DA$DA$I$D$D(3.1, xp, yp, 6, 0, 10) == 3);
System.out.println$Z(C$.findNearestXIndex0$D$DA$DA$I$D$D(3.1, xp, yp, 3, 0, 10) == 1);
System.out.println$Z(C$.findNearestXIndex0$D$DA$DA$I$D$D(3.1, xp, yp, 6, 0, 3) == 1);
System.out.println$Z(C$.findNearestXIndex0$D$DA$DA$I$D$D(3.1, xp, yp, 6, 5, 10) == 4);
System.out.println$Z(C$.findNearestXIndex$D$DA$DA$I$D$D(3.1, xp, yp, 6, 0, 10) == 3);
System.out.println$Z(C$.findNearestXIndex$D$DA$DA$I$D$D(3.1, xp, yp, 3, 0, 10) == 1);
System.out.println$Z(C$.findNearestXIndex$D$DA$DA$I$D$D(3.1, xp, yp, 6, 0, 3) == 1);
System.out.println$Z(C$.findNearestXIndex$D$DA$DA$I$D$D(3.1, xp, yp, 6, 5, 10) == 4);
var t0;
t0=$I$(1).now$J(0);
for (var i=0; i < 100000; i++) {
C$.findNearestXIndex0$D$DA$DA$I$D$D(3.1, xp, yp, 6, 0, 10);
}
System.out.println$J($I$(1).now$J(t0));
t0=$I$(1).now$J(0);
for (var i=0; i < 100000; i++) {
C$.findNearestXIndex$D$DA$DA$I$D$D(3.1, xp, yp, 6, 0, 10);
}
System.out.println$J($I$(1).now$J(t0));
xp=Clazz.array(Double.TYPE, [1000000]);
for (var i=0; i < xp.length; i++) xp[i]=Math.random();

var x=Math.random();
System.out.println$I(C$.findNearestXIndex0$D$DA$DA$I$D$D(x, xp, xp, xp.length, 0, 1));
System.out.println$I(C$.findNearestXIndex$D$DA$DA$I$D$D(x, xp, xp, xp.length, 0, 1));
t0=$I$(1).now$J(0);
for (var i=0; i < 10; i++) {
C$.findNearestXIndex0$D$DA$DA$I$D$D(x, xp, xp, xp.length, 0, 1);
}
System.out.println$J($I$(1).now$J(t0));
t0=$I$(1).now$J(0);
for (var i=0; i < 10; i++) {
C$.findNearestXIndex$D$DA$DA$I$D$D(x, xp, xp, xp.length, 0, 1);
}
System.out.println$J($I$(1).now$J(t0));
System.out.println$S("");
}, 1);

Clazz.newMeth(C$, 'findNearestXIndex$D$DA$DA$I$D$D',  function (x, xpoints, ypoints, len, min, max) {
x=Math.min(max, Math.max(min, x));
var imin=-1;
var dxmin=1.7976931348623157E308;
for (var i=0; i < len; i++) {
if (Double.isNaN$D(ypoints[i])) continue;
var dx=Math.abs(x - xpoints[i]);
if (dx < dxmin ) {
dxmin=dx;
imin=i;
}}
if (xpoints[imin] < min ) ++imin;
if (imin == len || xpoints[imin] > max  ) imin=len - 1;
return imin;
}, 1);

Clazz.newMeth(C$, 'findNearestXIndex0$D$DA$DA$I$D$D',  function (x, xpoints, ypoints, len, min, max) {
x=Math.min(max, Math.max(min, x));
var valid=Clazz.new_($I$(2,1));
for (var i=0; i < len; i++) {
if (Double.isNaN$D(ypoints[i])) continue;
valid.add$O(Double.valueOf$D(xpoints[i]));
}
var sorted=valid.toArray$OA(Clazz.array(Double, [valid.size$()]));
$I$(3).sort$OA(sorted);
var last=sorted.length - 1;
if (x < (sorted[0]).$c() ) {
return 0;
}if (x >= (sorted[last]).$c() ) {
return last;
}for (var i=1; i < sorted.length; i++) {
if (x >= (sorted[i - 1]).$c()  && x < (sorted[i]).$c()  ) {
if ((sorted[i - 1]).$c() < min ) {
x=(sorted[i]).valueOf();
} else if ((sorted[i]).$c() > max ) {
x=(sorted[i - 1]).valueOf();
} else {
x=((Math.abs(x - (sorted[i - 1]).$c()) < Math.abs(x - (sorted[i]).$c()) ) ? sorted[i - 1] : sorted[i]).valueOf();
}for (var j=0; j < xpoints.length; j++) {
if (xpoints[j] == x  && !Double.isNaN$D(ypoints[j]) ) {
return j;
}}
return -1;
}}
return -1;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
