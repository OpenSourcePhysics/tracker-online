(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'org.opensourcephysics.numerics.Complex','org.opensourcephysics.numerics.ComplexMatrix']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ComplexEigenvalueDecomposition", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'eigen$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexA$org_opensourcephysics_numerics_ComplexAA$ZA',  function (A, lambda, vec, fail) {
if ((A == null ) || (lambda == null ) || (vec == null )  ) {
C$.err$S("null or inconsistent array sizes.");
return;
}var n=A.length;
if ((A[0].length != n) || (vec.length != n) || (vec[0].length != n) || (lambda.length != n)  ) {
C$.err$S("inconsistent array sizes.");
return;
}fail[0]=false;
if (n < 1) {
C$.err$S("zero size matrix");
return;
}var rowcol=Clazz.array(Integer.TYPE, [n]);
var B=Clazz.array($I$(1), [n, n]);
$I$(2).copy$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA(A, B);
if (n == 1) {
lambda[0]=B[0][0];
vec[0][0]=Clazz.new_($I$(1,1).c$$D$D,[1.0, 0.0]);
return;
}if (n == 2) {
C$.twobytwo$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexA$org_opensourcephysics_numerics_ComplexAA(B, lambda, vec);
return;
}C$.cxhess$org_opensourcephysics_numerics_ComplexAA$IA(B, rowcol);
for (var i=0; i < n; i++) {
lambda[i]=Clazz.new_($I$(1,1).c$$D$D,[-999.0, -999.0]);
}
C$.cxeig2c$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexA$org_opensourcephysics_numerics_ComplexAA$IA$ZA(B, lambda, vec, rowcol, fail);
}, 1);

Clazz.newMeth(C$, 'err$S',  function (msg) {
System.out.println$S("ComplexEigenvalue: " + msg);
}, 1);

Clazz.newMeth(C$, 'twobytwo$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexA$org_opensourcephysics_numerics_ComplexAA',  function (A, lambda, vec) {
var b;
var c;
var rad;
var l1;
var l2;
var Z=Clazz.array($I$(1), [2]);
var t;
b=A[0][0].add$org_opensourcephysics_numerics_Complex(A[1][1]);
c=A[0][0].mul$org_opensourcephysics_numerics_Complex(A[1][1]);
c=c.subtract$org_opensourcephysics_numerics_Complex(A[0][1].mul$org_opensourcephysics_numerics_Complex(A[1][0]));
rad=(b.mul$org_opensourcephysics_numerics_Complex(b)).subtract$org_opensourcephysics_numerics_Complex(c.mul$D(4.0));
rad=rad.sqrt$();
l1=(b.add$org_opensourcephysics_numerics_Complex(rad)).div$D(2.0);
l2=(b.subtract$org_opensourcephysics_numerics_Complex(rad)).div$D(2.0);
lambda[0]=l1;
lambda[1]=l2;
Z[0]=A[0][1].neg$();
Z[1]=A[0][0].subtract$org_opensourcephysics_numerics_Complex(l1);
t=$I$(2).norm2$org_opensourcephysics_numerics_ComplexA(Z);
vec[0][0]=Z[0].div$D(t);
vec[1][0]=Z[1].div$D(t);
Z[0]=A[1][1].subtract$org_opensourcephysics_numerics_Complex(l2);
Z[1]=A[1][0].neg$();
t=$I$(2).norm2$org_opensourcephysics_numerics_ComplexA(Z);
vec[0][1]=Z[0].div$D(t);
vec[1][1]=Z[1].div$D(t);
}, 1);

Clazz.newMeth(C$, 'sumabs$org_opensourcephysics_numerics_Complex',  function (Z) {
return Math.abs(Z.re$()) + Math.abs(Z.im$());
}, 1);

Clazz.newMeth(C$, 'cxhess$org_opensourcephysics_numerics_ComplexAA$IA',  function (A, rowcol) {
var i;
var k;
var t;
var x;
var y;
var n=A.length;
for (var j=0; j < n; j++) {
rowcol[j]=j;
}
k=0;
for (var m=k + 1; m < n - 1; m++) {
i=m;
x=Clazz.new_($I$(1,1).c$$D$D,[0.0, 0.0]);
for (var j=m; j < n; j++) {
if (C$.sumabs$org_opensourcephysics_numerics_Complex(A[j][m - 1]) > C$.sumabs$org_opensourcephysics_numerics_Complex(x) ) {
x=A[j][m - 1];
i=j;
}}
if (i != m) {
t=rowcol[m];
rowcol[m]=rowcol[i];
rowcol[i]=t;
for (var j=m - 1; j < n; j++) {
y=A[i][j];
A[i][j]=A[m][j];
A[m][j]=y;
}
for (var j=0; j < n; j++) {
y=A[j][i];
A[j][i]=A[j][m];
A[j][m]=y;
}
}if (C$.sumabs$org_opensourcephysics_numerics_Complex(x) != 0.0 ) {
for (var ii=m + 1; ii < n; ii++) {
y=A[ii][m - 1];
if (C$.sumabs$org_opensourcephysics_numerics_Complex(y) > 0.0 ) {
y=y.div$org_opensourcephysics_numerics_Complex(x);
A[ii][m - 1]=y;
for (var j=m; j < n; j++) {
A[ii][j]=A[ii][j].subtract$org_opensourcephysics_numerics_Complex(y.mul$org_opensourcephysics_numerics_Complex(A[m][j]));
}
for (var j=0; j < n; j++) {
A[j][m]=A[j][m].add$org_opensourcephysics_numerics_Complex(y.mul$org_opensourcephysics_numerics_Complex(A[j][ii]));
}
}A[ii][m - 1]=Clazz.new_($I$(1,1).c$$D$D,[0.0, 0.0]);
}
}}
}, 1);

Clazz.newMeth(C$, 'cxeig2c$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexA$org_opensourcephysics_numerics_ComplexAA$IA$ZA',  function (A, lambda, vec, rowcol, fail) {
var j;
var k;
var m;
var mm;
var low;
var its;
var itn;
var ien;
var anorm=0.0;
var ahr;
var aahr;
var acc;
var xr;
var xi;
var yr;
var yi;
var zr;
var accnorm;
var x;
var y;
var z;
var yy;
var T;
var S;
var n=A.length;
low=0;
acc=Math.pow(2.0, -23);
T=Clazz.new_($I$(1,1).c$$D$D,[0.0, 0.0]);
itn=30 * n;
$I$(2).identity$org_opensourcephysics_numerics_ComplexAA(vec);
for (var ii=n - 2; ii > 0; ii--) {
j=rowcol[ii];
for (k=ii + 1; k < n; k++) {
vec[k][ii]=A[k][ii - 1];
}
if (ii != j) {
for (k=ii; k < n; k++) {
vec[ii][k]=vec[j][k];
vec[j][k]=Clazz.new_($I$(1,1).c$$D$D,[0.0, 0.0]);
}
vec[j][ii]=Clazz.new_($I$(1,1).c$$D$D,[1.0, 0.0]);
}}
ien=n - 1;
while (low <= ien){
its=0;
 L280 : while (true){
k=low;
for (var kk=ien; kk > low; kk--) {
ahr=C$.sumabs$org_opensourcephysics_numerics_Complex(A[kk][kk - 1]);
aahr=acc * (C$.sumabs$org_opensourcephysics_numerics_Complex(A[kk - 1][kk - 1]) + C$.sumabs$org_opensourcephysics_numerics_Complex(A[kk][kk]));
if (ahr <= aahr ) {
k=kk;
break;
}}
if (k == ien) {
break L280;
}if (itn <= 0) {
fail[0]=true;
return;
}if ((its == 10) || (its == 20) ) {
S=Clazz.new_([Math.abs(A[ien][ien - 1].re$()) + Math.abs(A[ien - 1][ien - 2].re$()), Math.abs(A[ien][ien - 1].im$()) + Math.abs(A[ien - 1][ien - 2].im$())],$I$(1,1).c$$D$D);
} else {
S=A[ien][ien];
x=A[ien - 1][ien].mul$org_opensourcephysics_numerics_Complex(A[ien][ien - 1]);
if (C$.sumabs$org_opensourcephysics_numerics_Complex(x) > 0.0 ) {
y=(A[ien - 1][ien - 1].subtract$org_opensourcephysics_numerics_Complex(S)).div$org_opensourcephysics_numerics_Complex(Clazz.new_($I$(1,1).c$$D$D,[2.0, 0.0]));
z=((y.mul$org_opensourcephysics_numerics_Complex(y)).add$org_opensourcephysics_numerics_Complex(x)).sqrt$();
if (y.re$() * z.re$() + y.im$() * z.im$() < 0.0 ) {
z=z.neg$();
}yy=y.add$org_opensourcephysics_numerics_Complex(z);
S=S.subtract$org_opensourcephysics_numerics_Complex(x.div$org_opensourcephysics_numerics_Complex(yy));
}}for (var i=low; i <= ien; i++) {
A[i][i]=A[i][i].subtract$org_opensourcephysics_numerics_Complex(S);
}
T=T.add$org_opensourcephysics_numerics_Complex(S);
its=its + 1;
itn=itn - 1;
j=k + 1;
xr=C$.sumabs$org_opensourcephysics_numerics_Complex(A[ien - 1][ien - 1]);
yr=C$.sumabs$org_opensourcephysics_numerics_Complex(A[ien][ien - 1]);
zr=C$.sumabs$org_opensourcephysics_numerics_Complex(A[ien][ien]);
m=k;
for (mm=ien - 1; mm >= j; mm--) {
yi=yr;
yr=C$.sumabs$org_opensourcephysics_numerics_Complex(A[mm][mm - 1]);
xi=zr;
zr=xr;
xr=C$.sumabs$org_opensourcephysics_numerics_Complex(A[mm - 1][mm - 1]);
if (yr <= (acc * zr / yi * (zr + xr + xi )) ) {
m=mm;
break;
}}
for (var i=m + 1; i <= ien; i++) {
x=A[i - 1][i - 1];
y=A[i][i - 1];
if (C$.sumabs$org_opensourcephysics_numerics_Complex(x) >= C$.sumabs$org_opensourcephysics_numerics_Complex(y) ) {
z=y.div$org_opensourcephysics_numerics_Complex(x);
lambda[i]=Clazz.new_($I$(1,1).c$$D$D,[-1.0, 0.0]);
} else {
for (var jj=i - 1; jj < n; jj++) {
z=A[i - 1][jj];
A[i - 1][jj]=A[i][jj];
A[i][jj]=z;
}
z=x.div$org_opensourcephysics_numerics_Complex(y);
lambda[i]=Clazz.new_($I$(1,1).c$$D$D,[1.0, 0.0]);
}A[i][i - 1]=z;
for (var jj=i; jj < n; jj++) {
A[i][jj]=A[i][jj].subtract$org_opensourcephysics_numerics_Complex(z.mul$org_opensourcephysics_numerics_Complex(A[i - 1][jj]));
}
}
for (var jj=m + 1; jj <= ien; jj++) {
x=A[jj][jj - 1];
A[jj][jj - 1]=Clazz.new_($I$(1,1).c$$D$D,[0.0, 0.0]);
if (lambda[jj].re$() > 0.0 ) {
for (var i=low; i <= jj; i++) {
z=A[i][jj - 1];
A[i][jj - 1]=A[i][jj];
A[i][jj]=z;
}
for (var i=low; i < n; i++) {
z=vec[i][jj - 1];
vec[i][jj - 1]=vec[i][jj];
vec[i][jj]=z;
}
}for (var i=low; i <= jj; i++) {
A[i][jj - 1]=A[i][jj - 1].add$org_opensourcephysics_numerics_Complex(x.mul$org_opensourcephysics_numerics_Complex(A[i][jj]));
}
for (var i=low; i < n; i++) {
vec[i][jj - 1]=vec[i][jj - 1].add$org_opensourcephysics_numerics_Complex(x.mul$org_opensourcephysics_numerics_Complex(vec[i][jj]));
}
}
}
lambda[ien]=A[ien][ien].add$org_opensourcephysics_numerics_Complex(T);
ien=ien - 1;
}
for (var i=0; i < n; i++) {
anorm=anorm + C$.sumabs$org_opensourcephysics_numerics_Complex(lambda[i]);
for (var jj=i + 1; jj < n; jj++) {
anorm=anorm + C$.sumabs$org_opensourcephysics_numerics_Complex(A[i][jj]);
}
}
accnorm=Clazz.new_([anorm * Math.pow(2.0, -23), 0.0],$I$(1,1).c$$D$D);
if ((anorm == 0.0 ) || (n < 2) ) {
return;
}for (ien=n - 1; ien > low; ien--) {
x=lambda[ien];
for (var i=ien - 1; i >= low; i--) {
z=A[i][ien];
for (var jj=i + 1; jj < ien; jj++) {
z=z.add$org_opensourcephysics_numerics_Complex(A[i][jj].mul$org_opensourcephysics_numerics_Complex(A[jj][ien]));
}
y=x.subtract$org_opensourcephysics_numerics_Complex(lambda[i]);
if (C$.sumabs$org_opensourcephysics_numerics_Complex(y) == 0.0 ) {
y=accnorm;
}A[i][ien]=z.div$org_opensourcephysics_numerics_Complex(y);
}
}
for (var jj=n - 1; jj >= 0; jj--) {
for (var i=0; i < n; i++) {
z=vec[i][jj];
for (k=0; k < jj; k++) {
z=z.add$org_opensourcephysics_numerics_Complex(vec[i][k].mul$org_opensourcephysics_numerics_Complex(A[k][jj]));
}
vec[i][jj]=z;
}
}
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
