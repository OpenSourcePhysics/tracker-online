(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FirstDerivative", null, null, 'org.opensourcephysics.cabrillo.tracker.Derivative');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.xDeriv=Clazz.array(Double.TYPE, [0]);
this.result=Clazz.array(java.lang.Object, [4]);
},1);

C$.$fields$=[['I',['spill','start','step','count'],'O',['xDeriv','double[]','+yDeriv','result','Object[]']]]

Clazz.newMeth(C$, 'evaluate$OA',  function (data) {
var params=data[0];
this.spill=params[0];
this.start=params[1];
this.step=params[2];
this.count=params[3];
var x=data[1];
var y=data[2];
var valid=data[3];
if (this.xDeriv.length != x.length) {
this.result[0]=this.xDeriv=Clazz.array(Double.TYPE, [x.length]);
this.result[1]=this.yDeriv=Clazz.array(Double.TYPE, [x.length]);
}var lower=this.start;
var upper=Math.min(this.start + this.step * (this.count - 1), x.length);
 outer : for (var i=lower; i <= upper; i+=this.step) {
for (var j=i - this.spill * this.step; j <= i + this.spill * this.step; j+=this.step) {
if (j < 0 || j >= valid.length  || !valid[j] ) {
if (i < valid.length) {
this.xDeriv[i]=NaN;
if (y != null ) this.yDeriv[i]=NaN;
}continue outer;
}}
if (this.spill == 1) {
this.xDeriv[i]=(-x[i - this.step] + x[i + this.step]) / 2;
if (y != null ) this.yDeriv[i]=(-y[i - this.step] + y[i + this.step]) / 2;
} else {
this.xDeriv[i]=(-2 * x[i - 2 * this.step] - x[i - this.step] + x[i + this.step] + 2 * x[i + 2 * this.step]) / 10;
if (y != null ) this.yDeriv[i]=(-2 * y[i - 2 * this.step] - y[i - this.step] + y[i + this.step] + 2 * y[i + 2 * this.step]) / 10;
}}
return this.result;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
