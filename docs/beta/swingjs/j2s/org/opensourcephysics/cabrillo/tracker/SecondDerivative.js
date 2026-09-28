(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SecondDerivative", null, null, 'org.opensourcephysics.cabrillo.tracker.Derivative');

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
this.result[2]=this.xDeriv=Clazz.array(Double.TYPE, [x.length]);
this.result[3]=this.yDeriv=Clazz.array(Double.TYPE, [x.length]);
}var lower=this.start;
var upper=Math.min(this.start + this.step * (this.count - 1), x.length);
 outer : for (var i=lower; i <= upper; i+=this.step) {
for (var j=i - this.spill * this.step; j <= i + this.spill * this.step; j+=this.step) {
if (j < 0 || j >= valid.length  || !valid[j] ) if (j < 0 || j >= valid.length  || !valid[j] ) {
if (i < valid.length) {
this.xDeriv[i]=NaN;
if (y != null ) this.yDeriv[i]=NaN;
}continue outer;
}}
if (this.spill == 1) {
this.xDeriv[i]=(x[i - this.step] - 2 * x[i] + x[i + this.step]);
if (y != null ) this.yDeriv[i]=(y[i - this.step] - 2 * y[i] + y[i + this.step]);
} else {
this.xDeriv[i]=(2 * x[i - 2 * this.step] - x[i - this.step] - 2 * x[i] - x[i + this.step] + 2 * x[i + 2 * this.step]) / 7;
if (y != null ) this.yDeriv[i]=(2 * y[i - 2 * this.step] - y[i - this.step] - 2 * y[i] - y[i + this.step] + 2 * y[i + 2 * this.step]) / 7;
}}
return this.result;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
