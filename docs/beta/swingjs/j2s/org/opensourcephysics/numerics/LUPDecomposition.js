(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),p$1={},I$=[[0,'StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LUPDecomposition");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.permutation=null;
this.parity=1;
},1);

C$.$fields$=[['I',['parity'],'O',['rows','double[][]','permutation','int[]']]]

Clazz.newMeth(C$, 'c$$DAA',  function (components) {
;C$.$init$.apply(this);
var n=components.length;
if (components[0].length != n) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal system: a" + n + " by " + components[0].length + " matrix is not a square matrix" ]);
}p$1.initialize$DAA.apply(this, [components]);
}, 1);

Clazz.newMeth(C$, 'backwardSubstitution$DA',  function (xTilde) {
var n=this.rows.length;
var answer=Clazz.array(Double.TYPE, [n]);
for (var i=n - 1; i >= 0; i--) {
answer[i]=xTilde[i];
for (var j=i + 1; j < n; j++) {
answer[i]-=this.rows[i][j] * answer[j];
}
answer[i]/=this.rows[i][i];
}
return answer;
}, p$1);

Clazz.newMeth(C$, 'decompose',  function () {
var n=this.rows.length;
this.permutation=Clazz.array(Integer.TYPE, [n]);
for (var i=0; i < n; i++) {
this.permutation[i]=i;
}
this.parity=1;
try {
for (var i=0; i < n; i++) {
p$1.swapRows$I$I.apply(this, [i, p$1.largestPivot$I.apply(this, [i])]);
p$1.pivot$I.apply(this, [i]);
}
} catch (e) {
if (Clazz.exceptionOf(e,"ArithmeticException")){
this.parity=0;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'decomposed',  function () {
if ((this.parity == 1) && (this.permutation == null ) ) {
p$1.decompose.apply(this, []);
}return this.parity != 0;
}, p$1);

Clazz.newMeth(C$, 'determinant$',  function () {
if (!p$1.decomposed.apply(this, [])) {
return NaN;
}var determinant=this.parity;
for (var i=0; i < this.rows.length; i++) {
determinant*=this.rows[i][i];
}
return determinant;
});

Clazz.newMeth(C$, 'forwardSubstitution$DA',  function (c) {
var n=this.rows.length;
var answer=Clazz.array(Double.TYPE, [n]);
for (var i=0; i < n; i++) {
answer[i]=c[this.permutation[i]];
for (var j=0; j <= i - 1; j++) {
answer[i]-=this.rows[i][j] * answer[j];
}
}
return answer;
}, p$1);

Clazz.newMeth(C$, 'initialize$DAA',  function (components) {
var n=components.length;
this.rows=Clazz.array(Double.TYPE, [n, n]);
for (var i=0; i < n; i++) {
System.arraycopy$O$I$O$I$I(components[i], 0, this.rows[i], 0, n);
}
this.permutation=null;
this.parity=1;
}, p$1);

Clazz.newMeth(C$, 'inverseMatrixComponents$',  function () {
if (!p$1.decomposed.apply(this, [])) {
return null;
}var n=this.rows.length;
var inverseMatrix=Clazz.array(Double.TYPE, [n, n]);
var column=Clazz.array(Double.TYPE, [n]);
for (var i=0; i < n; i++) {
for (var j=0; j < n; j++) {
column[j]=0;
}
column[i]=1;
column=this.solve$DA(column);
for (var j=0; j < n; j++) {
if (Double.isNaN$D(column[j])) {
return null;
}inverseMatrix[j][i]=column[j];
}
}
return inverseMatrix;
});

Clazz.newMeth(C$, 'symmetrizeComponents$DAA',  function (components) {
for (var i=0; i < components.length; i++) {
for (var j=i + 1; j < components.length; j++) {
components[i][j]+=components[j][i];
components[i][j]*=0.5;
components[j][i]=components[i][j];
}
}
}, 1);

Clazz.newMeth(C$, 'largestPivot$I',  function (k) {
var maximum=Math.abs(this.rows[k][k]);
var abs;
var index=k;
for (var i=k + 1; i < this.rows.length; i++) {
abs=Math.abs(this.rows[i][k]);
if (abs > maximum ) {
maximum=abs;
index=i;
}}
return index;
}, p$1);

Clazz.newMeth(C$, 'pivot$I',  function (k) {
var inversePivot=1 / this.rows[k][k];
var k1=k + 1;
var n=this.rows.length;
for (var i=k1; i < n; i++) {
this.rows[i][k]*=inversePivot;
for (var j=k1; j < n; j++) {
this.rows[i][j]-=this.rows[i][k] * this.rows[k][j];
}
}
}, p$1);

Clazz.newMeth(C$, 'solve$DA',  function (c) {
return p$1.decomposed.apply(this, []) ? p$1.backwardSubstitution$DA.apply(this, [p$1.forwardSubstitution$DA.apply(this, [c])]) : null;
});

Clazz.newMeth(C$, 'swapRows$I$I',  function (i, k) {
if (i != k) {
var temp;
for (var j=0; j < this.rows.length; j++) {
temp=this.rows[i][j];
this.rows[i][j]=this.rows[k][j];
this.rows[k][j]=temp;
}
var nTemp;
nTemp=this.permutation[i];
this.permutation[i]=this.permutation[k];
this.permutation[k]=nTemp;
this.parity=-this.parity;
}}, p$1);

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(1,1));
var separator=Clazz.array(Character.TYPE, -1, ["[", " "]);
var n=this.rows.length;
for (var i=0; i < n; i++) {
separator[0]="{";
for (var j=0; j < n; j++) {
sb.append$CA(separator);
sb.append$D(this.rows[i][j]);
separator[0]=" ";
}
sb.append$C("}");
sb.append$C("\n");
}
if (this.permutation != null ) {
sb.append$C((this.parity == 1) ? "+" : "-");
sb.append$S("( " + this.permutation[0]);
for (var i=1; i < n; i++) {
sb.append$S(", " + this.permutation[i]);
}
sb.append$C(")");
sb.append$C("\n");
}return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
