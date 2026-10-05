(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.cabrillo.tracker.BounceMatrix',['org.opensourcephysics.cabrillo.tracker.BounceMatrix','.LUDecomposition'],['org.opensourcephysics.cabrillo.tracker.BounceMatrix','.QRDecomposition']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BounceMatrix", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['LUDecomposition',8],['QRDecomposition',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['m','n'],'O',['A','double[][]']]]

Clazz.newMeth(C$, 'c$$I$I',  function (m, n) {
;C$.$init$.apply(this);
this.m=m;
this.n=n;
this.A=Clazz.array(Double.TYPE, [m, n]);
}, 1);

Clazz.newMeth(C$, 'c$$DAA',  function (A) {
;C$.$init$.apply(this);
this.m=A.length;
this.n=A[0].length;
for (var i=0; i < this.m; i++) {
if (A[i].length != this.n) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["All rows must have the same length."]);
}}
this.A=A;
}, 1);

Clazz.newMeth(C$, 'c$$DAA$I$I',  function (A, m, n) {
;C$.$init$.apply(this);
this.A=A;
this.m=m;
this.n=n;
}, 1);

Clazz.newMeth(C$, 'getArray$',  function () {
return this.A;
});

Clazz.newMeth(C$, 'getArrayCopy$',  function () {
var C=Clazz.array(Double.TYPE, [this.m, this.n]);
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
C[i][j]=this.A[i][j];
}
}
return C;
});

Clazz.newMeth(C$, 'getRowDimension$',  function () {
return this.m;
});

Clazz.newMeth(C$, 'getColumnDimension$',  function () {
return this.n;
});

Clazz.newMeth(C$, 'get$I$I',  function (i, j) {
return this.A[i][j];
});

Clazz.newMeth(C$, 'getMatrix$I$I$I$I',  function (i0, i1, j0, j1) {
var X=Clazz.new_(C$.c$$I$I,[i1 - i0 + 1, j1 - j0 + 1]);
var B=X.getArray$();
try {
for (var i=i0; i <= i1; i++) {
for (var j=j0; j <= j1; j++) {
B[i - i0][j - j0]=this.A[i][j];
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Submatrix indices"]);
} else {
throw e;
}
}
return X;
});

Clazz.newMeth(C$, 'getMatrix$IA$I$I',  function (r, j0, j1) {
var X=Clazz.new_(C$.c$$I$I,[r.length, j1 - j0 + 1]);
var B=X.getArray$();
try {
for (var i=0; i < r.length; i++) {
for (var j=j0; j <= j1; j++) {
B[i][j - j0]=this.A[r[i]][j];
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Submatrix indices"]);
} else {
throw e;
}
}
return X;
});

Clazz.newMeth(C$, 'minus$org_opensourcephysics_cabrillo_tracker_BounceMatrix',  function (B) {
if (B.m != this.m || B.n != this.n ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Matrix dimensions must agree."]);
}var X=Clazz.new_(C$.c$$I$I,[this.m, this.n]);
var C=X.getArray$();
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
C[i][j]=this.A[i][j] - B.A[i][j];
}
}
return X;
});

Clazz.newMeth(C$, 'times$org_opensourcephysics_cabrillo_tracker_BounceMatrix',  function (B) {
if (B.m != this.n) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Matrix inner dimensions must agree."]);
}var X=Clazz.new_(C$.c$$I$I,[this.m, B.n]);
var C=X.getArray$();
var Bcolj=Clazz.array(Double.TYPE, [this.n]);
for (var j=0; j < B.n; j++) {
for (var k=0; k < this.n; k++) {
Bcolj[k]=B.A[k][j];
}
for (var i=0; i < this.m; i++) {
var Arowi=this.A[i];
var s=0;
for (var k=0; k < this.n; k++) {
s+=Arowi[k] * Bcolj[k];
}
C[i][j]=s;
}
}
return X;
});

Clazz.newMeth(C$, 'solve$org_opensourcephysics_cabrillo_tracker_BounceMatrix',  function (B) {
return (this.m == this.n ? (Clazz.new_($I$(2,1).c$$org_opensourcephysics_cabrillo_tracker_BounceMatrix,[this])).solve$org_opensourcephysics_cabrillo_tracker_BounceMatrix(B) : (Clazz.new_($I$(3,1).c$$org_opensourcephysics_cabrillo_tracker_BounceMatrix,[this])).solve$org_opensourcephysics_cabrillo_tracker_BounceMatrix(B));
});

Clazz.newMeth(C$, 'inverse$',  function () {
return this.solve$org_opensourcephysics_cabrillo_tracker_BounceMatrix(C$.identity$I$I(this.m, this.m));
});

Clazz.newMeth(C$, 'identity$I$I',  function (m, n) {
var A=Clazz.new_(C$.c$$I$I,[m, n]);
var X=A.getArray$();
for (var i=0; i < m; i++) {
for (var j=0; j < n; j++) {
X[i][j]=(i == j ? 1.0 : 0.0);
}
}
return A;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.BounceMatrix, "LUDecomposition", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['m','n','pivsign'],'O',['LU','double[][]','piv','int[]']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_BounceMatrix',  function (A) {
;C$.$init$.apply(this);
this.LU=A.getArrayCopy$();
this.m=A.getRowDimension$();
this.n=A.getColumnDimension$();
this.piv=Clazz.array(Integer.TYPE, [this.m]);
for (var i=0; i < this.m; i++) {
this.piv[i]=i;
}
this.pivsign=1;
var LUrowi;
var LUcolj=Clazz.array(Double.TYPE, [this.m]);
for (var j=0; j < this.n; j++) {
for (var i=0; i < this.m; i++) {
LUcolj[i]=this.LU[i][j];
}
for (var i=0; i < this.m; i++) {
LUrowi=this.LU[i];
var kmax=Math.min(i, j);
var s=0.0;
for (var k=0; k < kmax; k++) {
s+=LUrowi[k] * LUcolj[k];
}
LUrowi[j]=LUcolj[i]-=s;
}
var p=j;
for (var i=j + 1; i < this.m; i++) {
if (Math.abs(LUcolj[i]) > Math.abs(LUcolj[p]) ) {
p=i;
}}
if (p != j) {
for (var k=0; k < this.n; k++) {
var t=this.LU[p][k];
this.LU[p][k]=this.LU[j][k];
this.LU[j][k]=t;
}
var k=this.piv[p];
this.piv[p]=this.piv[j];
this.piv[j]=k;
this.pivsign=-this.pivsign;
}if (!!(j < this.m & this.LU[j][j] != 0.0 )) {
for (var i=j + 1; i < this.m; i++) {
this.LU[i][j]/=this.LU[j][j];
}
}}
}, 1);

Clazz.newMeth(C$, 'isNonsingular$',  function () {
for (var j=0; j < this.n; j++) {
if (this.LU[j][j] == 0 ) return false;
}
return true;
});

Clazz.newMeth(C$, 'solve$org_opensourcephysics_cabrillo_tracker_BounceMatrix',  function (B) {
if (B.getRowDimension$() != this.m) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Matrix row dimensions must agree."]);
}if (!this.isNonsingular$()) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Matrix is singular."]);
}var nx=B.getColumnDimension$();
var Xmat=B.getMatrix$IA$I$I(this.piv, 0, nx - 1);
var X=Xmat.getArray$();
for (var k=0; k < this.n; k++) {
for (var i=k + 1; i < this.n; i++) {
for (var j=0; j < nx; j++) {
X[i][j]-=X[k][j] * this.LU[i][k];
}
}
}
for (var k=this.n - 1; k >= 0; k--) {
for (var j=0; j < nx; j++) {
X[k][j]/=this.LU[k][k];
}
for (var i=0; i < k; i++) {
for (var j=0; j < nx; j++) {
X[i][j]-=X[k][j] * this.LU[i][k];
}
}
}
return Xmat;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BounceMatrix, "QRDecomposition", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['m','n'],'O',['QR','double[][]','Rdiag','double[]']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_BounceMatrix',  function (A) {
;C$.$init$.apply(this);
this.QR=A.getArrayCopy$();
this.m=A.getRowDimension$();
this.n=A.getColumnDimension$();
this.Rdiag=Clazz.array(Double.TYPE, [this.n]);
for (var k=0; k < this.n; k++) {
var nrm=0;
for (var i=k; i < this.m; i++) {
nrm=this.hypot$D$D(nrm, this.QR[i][k]);
}
if (nrm != 0.0 ) {
if (this.QR[k][k] < 0 ) {
nrm=-nrm;
}for (var i=k; i < this.m; i++) {
this.QR[i][k]/=nrm;
}
this.QR[k][k]+=1.0;
for (var j=k + 1; j < this.n; j++) {
var s=0.0;
for (var i=k; i < this.m; i++) {
s+=this.QR[i][k] * this.QR[i][j];
}
s=-s / this.QR[k][k];
for (var i=k; i < this.m; i++) {
this.QR[i][j]+=s * this.QR[i][k];
}
}
}this.Rdiag[k]=-nrm;
}
}, 1);

Clazz.newMeth(C$, 'isFullRank$',  function () {
for (var j=0; j < this.n; j++) {
if (this.Rdiag[j] == 0 ) return false;
}
return true;
});

Clazz.newMeth(C$, 'solve$org_opensourcephysics_cabrillo_tracker_BounceMatrix',  function (B) {
if (B.getRowDimension$() != this.m) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Matrix row dimensions must agree."]);
}if (!this.isFullRank$()) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Matrix is rank deficient."]);
}var nx=B.getColumnDimension$();
var X=B.getArrayCopy$();
for (var k=0; k < this.n; k++) {
for (var j=0; j < nx; j++) {
var s=0.0;
for (var i=k; i < this.m; i++) {
s+=this.QR[i][k] * X[i][j];
}
s=-s / this.QR[k][k];
for (var i=k; i < this.m; i++) {
X[i][j]+=s * this.QR[i][k];
}
}
}
for (var k=this.n - 1; k >= 0; k--) {
for (var j=0; j < nx; j++) {
X[k][j]/=this.Rdiag[k];
}
for (var i=0; i < k; i++) {
for (var j=0; j < nx; j++) {
X[i][j]-=X[k][j] * this.QR[i][k];
}
}
}
return (Clazz.new_($I$(1,1).c$$DAA$I$I,[X, this.n, nx]).getMatrix$I$I$I$I(0, this.n - 1, 0, nx - 1));
});

Clazz.newMeth(C$, 'hypot$D$D',  function (a, b) {
var r;
if (Math.abs(a) > Math.abs(b) ) {
r=b / a;
r=Math.abs(a) * Math.sqrt(1 + r * r);
} else if (b != 0 ) {
r=a / b;
r=Math.abs(b) * Math.sqrt(1 + r * r);
} else {
r=0.0;
}return r;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
