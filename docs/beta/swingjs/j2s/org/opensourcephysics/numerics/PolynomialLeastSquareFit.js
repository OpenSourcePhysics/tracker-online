(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'org.opensourcephysics.numerics.LUPDecomposition']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PolynomialLeastSquareFit", null, 'org.opensourcephysics.numerics.Polynomial');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['systemMatrix','double[][]','systemConstants','double[]']]]

Clazz.newMeth(C$, 'c$$DA$DA$I',  function (xd, yd, degree) {
;C$.superclazz.c$$DA.apply(this,[Clazz.array(Double.TYPE, [degree + 1])]);C$.$init$.apply(this);
var ncoef=degree + 1;
this.systemMatrix=Clazz.array(Double.TYPE, [ncoef, ncoef]);
this.systemConstants=Clazz.array(Double.TYPE, [ncoef]);
this.fitData$DA$DA(xd, yd);
}, 1);

Clazz.newMeth(C$, 'c$$DA',  function (coeffs) {
;C$.superclazz.c$$DA.apply(this,[coeffs]);C$.$init$.apply(this);
var n=coeffs.length;
this.systemMatrix=Clazz.array(Double.TYPE, [n, n]);
this.systemConstants=Clazz.array(Double.TYPE, [n]);
}, 1);

Clazz.newMeth(C$, 'fitData$DA$DA',  function (xd, yd) {
if (xd.length != yd.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Arrays must be of equal length."]);
}if (xd.length < this.degree$() + 1) {
return;
}for (var i=0; i < this.systemConstants.length; i++) {
this.systemConstants[i]=0;
for (var j=0; j < this.systemConstants.length; j++) {
this.systemMatrix[i][j]=0;
}
}
for (var i=0, n=xd.length; i < n; i++) {
var xp1=1;
for (var j=0; j < this.systemConstants.length; j++) {
this.systemConstants[j]+=xp1 * yd[i];
var xp2=xp1;
for (var k=0; k <= j; k++) {
this.systemMatrix[j][k]+=xp2;
xp2*=xd[i];
}
xp1*=xd[i];
}
}
this.computeCoefficients$();
});

Clazz.newMeth(C$, 'computeCoefficients$',  function () {
for (var i=0; i < this.systemConstants.length; i++) {
for (var j=i + 1; j < this.systemConstants.length; j++) {
this.systemMatrix[i][j]=this.systemMatrix[j][i];
}
}
var lupSystem=Clazz.new_($I$(1,1).c$$DAA,[this.systemMatrix]);
var components=lupSystem.inverseMatrixComponents$();
if (components == null ) return;
$I$(1).symmetrizeComponents$DAA(components);
this.coefficients=lupSystem.solve$DA(this.systemConstants);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
