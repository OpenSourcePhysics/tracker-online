(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'org.opensourcephysics.numerics.Complex','StrictMath','java.io.BufferedReader','java.io.FileReader','java.io.BufferedWriter','java.io.FileWriter','java.io.PrintWriter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ComplexMatrix");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['input_file_name','output_file_name'],'O',['$in','java.io.BufferedReader','out','java.io.BufferedWriter','file_out','java.io.PrintWriter']]]

Clazz.newMeth(C$, 'solve$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexA$org_opensourcephysics_numerics_ComplexA',  function (A, Y, X) {
var n=A.length;
var m=n + 1;
var B=Clazz.array($I$(1), [n, m]);
var row=Clazz.array(Integer.TYPE, [n]);
var hold;
var I_pivot;
var pivot;
var abs_pivot;
if ((A[0].length != n) || (Y.length != n) || (X.length != n)  ) {
C$.err$S("Error in ComplexMatrix.solve inconsistent array sizes.");
}for (var i=0; i < n; i++) {
for (var j=0; j < n; j++) {
B[i][j]=A[i][j];
}
B[i][n]=Y[i];
}
for (var k=0; k < n; k++) {
row[k]=k;
}
for (var k=0; k < n; k++) {
pivot=B[row[k]][k];
abs_pivot=pivot.abs$();
I_pivot=k;
for (var i=k + 1; i < n; i++) {
if (B[row[i]][k].abs$() > abs_pivot ) {
I_pivot=i;
pivot=B[row[i]][k];
abs_pivot=pivot.abs$();
}}
hold=row[k];
row[k]=row[I_pivot];
row[I_pivot]=hold;
if (abs_pivot < 1.0E-10 ) {
for (var j=k + 1; j < n + 1; j++) {
B[row[k]][j]=Clazz.new_($I$(1,1).c$$D$D,[0.0, 0.0]);
}
C$.err$S("redundant row (singular) " + row[k]);
} else {
for (var j=k + 1; j < n + 1; j++) {
B[row[k]][j]=B[row[k]][j].div$org_opensourcephysics_numerics_Complex(B[row[k]][k]);
}
for (var i=0; i < n; i++) {
if (i != k) {
for (var j=k + 1; j < n + 1; j++) {
B[row[i]][j]=B[row[i]][j].subtract$org_opensourcephysics_numerics_Complex(B[row[i]][k].mul$org_opensourcephysics_numerics_Complex(B[row[k]][j]));
}
}}
}}
for (var i=0; i < n; i++) {
X[i]=B[row[i]][n];
}
}, 1);

Clazz.newMeth(C$, 'invert$org_opensourcephysics_numerics_ComplexAA',  function (A) {
var n=A.length;
var row=Clazz.array(Integer.TYPE, [n]);
var col=Clazz.array(Integer.TYPE, [n]);
var temp=Clazz.array($I$(1), [n]);
var hold;
var I_pivot;
var J_pivot;
var pivot;
var abs_pivot;
if (A[0].length != n) {
C$.err$S("Error in Complex.Matrix.invert, matrix not square.");
}for (var k=0; k < n; k++) {
row[k]=k;
col[k]=k;
}
for (var k=0; k < n; k++) {
pivot=A[row[k]][col[k]];
I_pivot=k;
J_pivot=k;
for (var i=k; i < n; i++) {
for (var j=k; j < n; j++) {
abs_pivot=pivot.abs$();
if (A[row[i]][col[j]].abs$() > abs_pivot ) {
I_pivot=i;
J_pivot=j;
pivot=A[row[i]][col[j]];
}}
}
if (pivot.abs$() < 1.0E-10 ) {
C$.err$S("ComplexMatrix is singular !");
return;
}hold=row[k];
row[k]=row[I_pivot];
row[I_pivot]=hold;
hold=col[k];
col[k]=col[J_pivot];
col[J_pivot]=hold;
A[row[k]][col[k]]=(Clazz.new_($I$(1,1).c$$D$D,[1.0, 0.0])).div$org_opensourcephysics_numerics_Complex(pivot);
for (var j=0; j < n; j++) {
if (j != k) {
A[row[k]][col[j]]=A[row[k]][col[j]].mul$org_opensourcephysics_numerics_Complex(A[row[k]][col[k]]);
}}
for (var i=0; i < n; i++) {
if (k != i) {
for (var j=0; j < n; j++) {
if (k != j) {
A[row[i]][col[j]]=A[row[i]][col[j]].subtract$org_opensourcephysics_numerics_Complex(A[row[i]][col[k]].mul$org_opensourcephysics_numerics_Complex(A[row[k]][col[j]]));
}}
A[row[i]][col[k]]=A[row[i]][col[k]].mul$org_opensourcephysics_numerics_Complex(A[row[k]][col[k]]).neg$();
}}
}
for (var j=0; j < n; j++) {
for (var i=0; i < n; i++) {
temp[col[i]]=A[row[i]][j];
}
for (var i=0; i < n; i++) {
A[i][j]=temp[i];
}
}
for (var i=0; i < n; i++) {
for (var j=0; j < n; j++) {
temp[row[j]]=A[i][col[j]];
}
for (var j=0; j < n; j++) {
A[i][j]=temp[j];
}
}
}, 1);

Clazz.newMeth(C$, 'determinant$org_opensourcephysics_numerics_ComplexAA',  function (A) {
var n=A.length;
var D=Clazz.new_($I$(1,1).c$$D$D,[1.0, 0.0]);
var B=Clazz.array($I$(1), [n, n]);
var row=Clazz.array(Integer.TYPE, [n]);
var hold;
var I_pivot;
var pivot;
var abs_pivot;
if (A[0].length != n) {
C$.err$S("Error in ComplexMatrix.determinant, inconsistent array sizes.");
}for (var i=0; i < n; i++) {
for (var j=0; j < n; j++) {
B[i][j]=A[i][j];
}
}
for (var k=0; k < n; k++) {
row[k]=k;
}
for (var k=0; k < n - 1; k++) {
pivot=B[row[k]][k];
abs_pivot=pivot.abs$();
I_pivot=k;
for (var i=k; i < n; i++) {
if (B[row[i]][k].abs$() > abs_pivot ) {
I_pivot=i;
pivot=B[row[i]][k];
abs_pivot=pivot.abs$();
}}
if (I_pivot != k) {
hold=row[k];
row[k]=row[I_pivot];
row[I_pivot]=hold;
D=D.neg$();
}if (abs_pivot < 1.0E-10 ) {
return Clazz.new_($I$(1,1).c$$D$D,[0.0, 0.0]);
}D=D.mul$org_opensourcephysics_numerics_Complex(pivot);
for (var j=k + 1; j < n; j++) {
B[row[k]][j]=B[row[k]][j].div$org_opensourcephysics_numerics_Complex(B[row[k]][k]);
}
for (var i=0; i < n; i++) {
if (i != k) {
for (var j=k + 1; j < n; j++) {
B[row[i]][j]=B[row[i]][j].subtract$org_opensourcephysics_numerics_Complex(B[row[i]][k].mul$org_opensourcephysics_numerics_Complex(B[row[k]][j]));
}
}}
}
return D.mul$org_opensourcephysics_numerics_Complex(B[row[n - 1]][n - 1]);
}, 1);

Clazz.newMeth(C$, 'eigenvalues$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexA',  function (A, V, Y) {
var n=A.length;
var AA=Clazz.array($I$(1), [n, n]);
var c=Clazz.new_($I$(1,1).c$$D$D,[1.0, 0.0]);
var s=Clazz.new_($I$(1,1).c$$D$D,[0.0, 0.0]);
if ((A[0].length != n) || (V.length != n) || (V[0].length != n) || (Y.length != n)  ) {
C$.err$S("Error in ComplexMatrix.eigenvalues, inconsistent array sizes.");
}C$.identity$org_opensourcephysics_numerics_ComplexAA(V);
C$.copy$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA(A, AA);
for (var k=0; k < n; k++) {
for (var i=0; i < n - 1; i++) {
for (var j=i + 1; j < n; j++) {
C$.schur2$org_opensourcephysics_numerics_ComplexAA$I$I$org_opensourcephysics_numerics_Complex$org_opensourcephysics_numerics_Complex(AA, i, j, c, s);
C$.mat44$I$I$org_opensourcephysics_numerics_Complex$org_opensourcephysics_numerics_Complex$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA(i, j, c, s, AA, V);
}
}
}
for (var i=0; i < n; i++) {
Y[i]=AA[i][i];
}
}, 1);

Clazz.newMeth(C$, 'eigenCheck$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexA',  function (A, V, Y) {
if ((A == null ) || (V == null ) || (Y == null )  ) {
return;
}var n=A.length;
var B=Clazz.array($I$(1), [n, n]);
var C=Clazz.array($I$(1), [n, n]);
var X=Clazz.array($I$(1), [n]);
var Z=Clazz.array($I$(1), [n]);
var T=Clazz.array($I$(1), [n]);
var norm=0.0;
if ((A[0].length != n) || (V.length != n) || (V[0].length != n) || (Y.length != n)  ) {
C$.err$S("Error in ComplexMatrix.eigenCheck, inconsistent array sizes.");
}for (var i=0; i < n; i++) {
for (var j=0; j < n; j++) {
X[j]=V[j][i];
}
C$.mul$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexA$org_opensourcephysics_numerics_ComplexA(A, X, T);
for (var j=0; j < n; j++) {
Z[j]=T[j].subtract$org_opensourcephysics_numerics_Complex(Y[i].mul$org_opensourcephysics_numerics_Complex(X[j]));
}
C$.err$S("check for near zero norm of Z[" + i + "]=" + Z[i] );
}
norm=C$.norm2$org_opensourcephysics_numerics_ComplexA(Z);
C$.err$S("norm =" + new Double(norm).toString() + " is eigen vector error indication 1." );
C$.err$S("det V = " + C$.determinant$org_opensourcephysics_numerics_ComplexAA(V));
for (var i=0; i < n; i++) {
for (var j=0; j < n; j++) {
Z[j]=V[j][i];
}
C$.err$S("check for 1.0 = " + new Double(C$.norm2$org_opensourcephysics_numerics_ComplexA(Z)).toString());
}
for (var i=0; i < n; i++) {
C$.identity$org_opensourcephysics_numerics_ComplexAA(B);
C$.mul$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_Complex$org_opensourcephysics_numerics_ComplexAA(B, Y[i], C);
C$.subtract$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA(A, C, B);
Z[i]=C$.determinant$org_opensourcephysics_numerics_ComplexAA(B);
}
norm=C$.norm2$org_opensourcephysics_numerics_ComplexA(Z);
C$.err$S("norm =" + new Double(norm).toString() + " is eigen value error indication." );
}, 1);

Clazz.newMeth(C$, 'schur2$org_opensourcephysics_numerics_ComplexAA$I$I$org_opensourcephysics_numerics_Complex$org_opensourcephysics_numerics_Complex',  function (A, p, q, c, s) {
var tau;
var tau_tau_1;
var t;
if (A[0].length != A.length) {
C$.err$S("Error in schur2 of Complex jacobi, inconsistent array sizes.");
}if (A[p][q].abs$() != 0.0 ) {
tau=(A[q][q].subtract$org_opensourcephysics_numerics_Complex(A[p][p])).div$org_opensourcephysics_numerics_Complex((A[p][q].mul$D(2.0)));
tau_tau_1=(tau.mul$org_opensourcephysics_numerics_Complex(tau).add$D(1.0)).sqrt$();
if (tau.abs$() >= 0.0 ) {
t=tau.add$org_opensourcephysics_numerics_Complex(tau_tau_1).invert$();
} else {
t=(tau_tau_1.subtract$org_opensourcephysics_numerics_Complex(tau)).invert$().neg$();
}c=(t.mul$org_opensourcephysics_numerics_Complex(t)).add$D(1.0).sqrt$().invert$();
s=t.mul$org_opensourcephysics_numerics_Complex(c);
} else {
c=Clazz.new_($I$(1,1).c$$D$D,[1.0, 0.0]);
s=Clazz.new_($I$(1,1).c$$D$D,[0.0, 0.0]);
}}, 1);

Clazz.newMeth(C$, 'mat22$org_opensourcephysics_numerics_Complex$org_opensourcephysics_numerics_Complex$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA',  function (c, s, A, B) {
if ((A.length != 2) || (A[0].length != 2) || (B.length != 2) || (B[0].length != 2)  ) {
C$.err$S("Error in mat22 of Jacobi, not both 2 by 2");
}var T=Clazz.array($I$(1), [2, 2]);
T[0][0]=c.mul$org_opensourcephysics_numerics_Complex(A[0][0]).subtract$org_opensourcephysics_numerics_Complex(s.mul$org_opensourcephysics_numerics_Complex(A[0][1]));
T[0][1]=s.mul$org_opensourcephysics_numerics_Complex(A[0][0]).add$org_opensourcephysics_numerics_Complex(c.mul$org_opensourcephysics_numerics_Complex(A[0][1]));
T[1][0]=c.mul$org_opensourcephysics_numerics_Complex(A[1][0]).subtract$org_opensourcephysics_numerics_Complex(s.mul$org_opensourcephysics_numerics_Complex(A[1][1]));
T[1][1]=s.mul$org_opensourcephysics_numerics_Complex(A[1][0]).add$org_opensourcephysics_numerics_Complex(c.mul$org_opensourcephysics_numerics_Complex(A[1][1]));
B[0][0]=c.mul$org_opensourcephysics_numerics_Complex(T[0][0]).subtract$org_opensourcephysics_numerics_Complex(s.mul$org_opensourcephysics_numerics_Complex(T[1][0]));
B[0][1]=c.mul$org_opensourcephysics_numerics_Complex(T[0][1]).subtract$org_opensourcephysics_numerics_Complex(s.mul$org_opensourcephysics_numerics_Complex(T[1][1]));
B[1][0]=s.mul$org_opensourcephysics_numerics_Complex(T[0][0]).add$org_opensourcephysics_numerics_Complex(c.mul$org_opensourcephysics_numerics_Complex(T[1][0]));
B[1][1]=s.mul$org_opensourcephysics_numerics_Complex(T[0][1]).add$org_opensourcephysics_numerics_Complex(c.mul$org_opensourcephysics_numerics_Complex(T[1][1]));
}, 1);

Clazz.newMeth(C$, 'mat44$I$I$org_opensourcephysics_numerics_Complex$org_opensourcephysics_numerics_Complex$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA',  function (p, q, c, s, A, V) {
var n=A.length;
var B=Clazz.array($I$(1), [n, n]);
var J=Clazz.array($I$(1), [n, n]);
if ((A[0].length != n) || (V.length != n) || (V[0].length != n)  ) {
C$.err$S("Error in mat44 of Complex Jacobi, A or V not same and square");
}for (var i=0; i < n; i++) {
for (var j=0; j < n; j++) {
J[i][j]=Clazz.new_($I$(1,1).c$$D$D,[0.0, 0.0]);
}
J[i][i]=Clazz.new_($I$(1,1).c$$D$D,[1.0, 0.0]);
}
J[p][p]=c;
J[p][q]=s.neg$();
J[q][q]=c;
J[q][p]=s;
C$.mul$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA(J, A, B);
J[p][q]=s;
J[q][p]=s.neg$();
C$.mul$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA(B, J, A);
C$.mul$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA(V, J, B);
C$.copy$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA(B, V);
}, 1);

Clazz.newMeth(C$, 'norm4$org_opensourcephysics_numerics_ComplexAA',  function (A) {
var n=A.length;
var nr=A[0].length;
var nrm=0.0;
if (n != nr) {
C$.err$S("Error in Complex norm4, non square A[" + n + "][" + nr + "]" );
}for (var i=0; i < n - 1; i++) {
for (var j=i + 1; j < n; j++) {
nrm=nrm + A[i][j].abs$() + A[j][i].abs$() ;
}
}
return nrm / (n * n - n);
}, 1);

Clazz.newMeth(C$, 'mul$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA',  function (A, B, C) {
var ni=A.length;
var nk=A[0].length;
var nj=B[0].length;
if ((B.length != nk) || (C.length != ni) || (C[0].length != nj)  ) {
C$.err$S("Error in ComplexMatrix.mul, incompatible sizes");
}for (var i=0; i < ni; i++) {
for (var j=0; j < nj; j++) {
C[i][j]=Clazz.new_($I$(1,1).c$$D$D,[0.0, 0.0]);
for (var k=0; k < nk; k++) {
C[i][j]=C[i][j].add$org_opensourcephysics_numerics_Complex(A[i][k].mul$org_opensourcephysics_numerics_Complex(B[k][j]));
}
}
}
}, 1);

Clazz.newMeth(C$, 'mul$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_Complex$org_opensourcephysics_numerics_ComplexAA',  function (A, B, C) {
var ni=A.length;
var nj=A[0].length;
if ((C.length != ni) || (C[0].length != nj) ) {
C$.err$S("Error in ComplexMatrix.mul, incompatible sizes");
}for (var i=0; i < ni; i++) {
for (var j=0; j < nj; j++) {
C[i][j]=A[i][j].mul$org_opensourcephysics_numerics_Complex(B);
}
}
}, 1);

Clazz.newMeth(C$, 'add$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA',  function (A, B, C) {
var ni=A.length;
var nj=A[0].length;
if ((B.length != ni) || (C.length != ni) || (B[0].length != nj) || (C[0].length != nj)  ) {
C$.err$S("Error in ComplexMatrix.add, incompatible sizes");
}for (var i=0; i < ni; i++) {
for (var j=0; j < nj; j++) {
C[i][j]=A[i][j].add$org_opensourcephysics_numerics_Complex(B[i][j]);
}
}
}, 1);

Clazz.newMeth(C$, 'add$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_Complex$org_opensourcephysics_numerics_ComplexAA',  function (A, B, C) {
var ni=A.length;
var nj=A[0].length;
if ((C.length != ni) || (C[0].length != nj) ) {
C$.err$S("Error in ComplexMatrix.add, incompatible sizes");
}for (var i=0; i < ni; i++) {
for (var j=0; j < nj; j++) {
C[i][j]=A[i][j].add$org_opensourcephysics_numerics_Complex(B);
}
}
}, 1);

Clazz.newMeth(C$, 'subtract$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA',  function (A, B, C) {
var ni=A.length;
var nj=A[0].length;
if ((B.length != ni) || (C.length != ni) || (B[0].length != nj) || (C[0].length != nj)  ) {
C$.err$S("Error in ComplexMatrix.subtract, incompatible sizes");
}for (var i=0; i < ni; i++) {
for (var j=0; j < nj; j++) {
C[i][j]=A[i][j].subtract$org_opensourcephysics_numerics_Complex(B[i][j]);
}
}
}, 1);

Clazz.newMeth(C$, 'subtract$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_Complex$org_opensourcephysics_numerics_ComplexAA',  function (A, B, C) {
var ni=A.length;
var nj=A[0].length;
if ((C.length != ni) || (C[0].length != nj) ) {
C$.err$S("Error in ComplexMatrix.subtract, incompatible sizes");
}for (var i=0; i < ni; i++) {
for (var j=0; j < nj; j++) {
C[i][j]=A[i][j].subtract$org_opensourcephysics_numerics_Complex(B);
}
}
}, 1);

Clazz.newMeth(C$, 'norm1$org_opensourcephysics_numerics_ComplexAA',  function (A) {
var norm=0.0;
var colSum;
var ni=A.length;
var nj=A[0].length;
for (var j=0; j < nj; j++) {
colSum=0.0;
for (var i=0; i < ni; i++) {
colSum=colSum + A[i][j].abs$();
}
norm=Math.max(norm, colSum);
}
return norm;
}, 1);

Clazz.newMeth(C$, 'normInf$org_opensourcephysics_numerics_ComplexAA',  function (A) {
var norm=0.0;
var rowSum;
var ni=A.length;
var nj=A[0].length;
for (var i=0; i < ni; i++) {
rowSum=0.0;
for (var j=0; j < nj; j++) {
rowSum=rowSum + A[i][j].abs$();
}
norm=Math.max(norm, rowSum);
}
return norm;
}, 1);

Clazz.newMeth(C$, 'normFro$org_opensourcephysics_numerics_ComplexAA',  function (A) {
var norm=0.0;
var n=A.length;
for (var i=0; i < n; i++) {
for (var j=0; j < n; j++) {
norm=norm + A[i][j].abs$() * A[i][j].abs$();
}
}
return Math.sqrt(norm);
}, 1);

Clazz.newMeth(C$, 'norm2$org_opensourcephysics_numerics_ComplexAA',  function (A) {
var r=0.0;
var n=A.length;
var B=Clazz.array($I$(1), [n, n]);
var V=Clazz.array($I$(1), [n, n]);
var BI=Clazz.array($I$(1), [n]);
if (A[0].length != n) {
C$.err$S("Error in ComplexMatrix.norm2, matrix not square.");
}for (var i=0; i < n; i++) {
for (var j=0; j < n; j++) {
B[i][j]=Clazz.new_($I$(1,1).c$$D$D,[0.0, 0.0]);
for (var k=0; k < n; k++) {
B[i][j]=B[i][j].add$org_opensourcephysics_numerics_Complex(A[k][i].mul$org_opensourcephysics_numerics_Complex(A[k][j]));
}
}
}
C$.eigenvalues$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexA(B, V, BI);
for (var i=0; i < n; i++) {
r=Math.max(r, BI[i].abs$());
}
return Math.sqrt(r);
}, 1);

Clazz.newMeth(C$, 'copy$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA',  function (A, B) {
var ni=A.length;
var nj=A[0].length;
if ((B.length != ni) || (B[0].length != nj) ) {
C$.err$S("Error in ComplexMatrix.copy, inconsistent sizes.");
}for (var i=0; i < ni; i++) {
for (var j=0; j < nj; j++) {
B[i][j]=A[i][j];
}
}
}, 1);

Clazz.newMeth(C$, 'equals$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexAA',  function (A, B) {
var ni=A.length;
var nj=A[0].length;
var same=true;
if ((B.length != ni) || (B[0].length != nj) ) {
C$.err$S("Error in ComplexMatrix.equals, inconsistent sizes.");
}for (var i=0; i < ni; i++) {
for (var j=0; j < nj; j++) {
same=same && A[i][j].equals$O(B[i][j]) ;
}
}
return same;
}, 1);

Clazz.newMeth(C$, 'fromDouble$DAA$DAA$org_opensourcephysics_numerics_ComplexAA',  function (A, B, C) {
var ni=A.length;
var nj=A[0].length;
if ((C.length != ni) || (C[0].length != nj) || (B.length != ni) || (B[0].length != nj)  ) {
C$.err$S("Error in ComplexMatrix.fromDouble, inconsistent sizes.");
}for (var i=0; i < ni; i++) {
for (var j=0; j < nj; j++) {
C[i][j]=Clazz.new_($I$(1,1).c$$D$D,[A[i][j], B[i][j]]);
}
}
}, 1);

Clazz.newMeth(C$, 'fromDouble$DAA$org_opensourcephysics_numerics_ComplexAA',  function (A, C) {
var ni=A.length;
var nj=A[0].length;
if ((C.length != ni) || (C[0].length != nj) ) {
C$.err$S("Error in ComplexMatrix.fromDouble, inconsistent sizes.");
}for (var i=0; i < ni; i++) {
for (var j=0; j < nj; j++) {
C[i][j]=Clazz.new_($I$(1,1).c$$D,[A[i][j]]);
}
}
}, 1);

Clazz.newMeth(C$, 'identity$org_opensourcephysics_numerics_ComplexAA',  function (A) {
var n=A.length;
if (n != A[0].length) {
C$.err$S("Error in ComplexMatrix.identity, inconsistent sizes.");
}for (var i=0; i < n; i++) {
for (var j=0; j < n; j++) {
A[i][j]=Clazz.new_($I$(1,1).c$$D,[0.0]);
}
A[i][i]=Clazz.new_($I$(1,1).c$$D,[1.0]);
}
}, 1);

Clazz.newMeth(C$, 'zero$org_opensourcephysics_numerics_ComplexAA',  function (A) {
var ni=A.length;
var nj=A[0].length;
for (var i=0; i < ni; i++) {
for (var j=0; j < nj; j++) {
A[i][j]=Clazz.new_($I$(1,1).c$$D,[0.0]);
}
}
}, 1);

Clazz.newMeth(C$, 'print$org_opensourcephysics_numerics_ComplexAA',  function (A) {
var ni=A.length;
var nj=A[0].length;
for (var i=0; i < ni; i++) {
for (var j=0; j < nj; j++) {
C$.err$S("A[" + i + "][" + j + "]=" + A[i][j] );
}
}
}, 1);

Clazz.newMeth(C$, 'mul$org_opensourcephysics_numerics_ComplexAA$org_opensourcephysics_numerics_ComplexA$org_opensourcephysics_numerics_ComplexA',  function (A, B, C) {
var ni=A.length;
var nj=A[0].length;
if ((B.length != nj) || (C.length != ni) ) {
C$.err$S("Error in ComplexMatrix.mul, incompatible sizes.");
}for (var i=0; i < ni; i++) {
C[i]=Clazz.new_($I$(1,1).c$$D$D,[0.0, 0.0]);
for (var j=0; j < nj; j++) {
C[i]=C[i].add$org_opensourcephysics_numerics_Complex(A[i][j].mul$org_opensourcephysics_numerics_Complex(B[j]));
}
}
}, 1);

Clazz.newMeth(C$, 'add$org_opensourcephysics_numerics_ComplexA$org_opensourcephysics_numerics_ComplexA$org_opensourcephysics_numerics_ComplexA',  function (X, Y, Z) {
var n=X.length;
if ((Y.length != n) || (Z.length != n) ) {
C$.err$S("Error in ComplexMatrix.add, incompatible sizes.");
}for (var i=0; i < n; i++) {
Z[i]=X[i].add$org_opensourcephysics_numerics_Complex(Y[i]);
}
}, 1);

Clazz.newMeth(C$, 'subtract$org_opensourcephysics_numerics_ComplexA$org_opensourcephysics_numerics_ComplexA$org_opensourcephysics_numerics_ComplexA',  function (X, Y, Z) {
var n=X.length;
if ((Y.length != n) || (Z.length != n) ) {
C$.err$S("Error in ComplexMatrix.subtract, incompatible sizes.");
}for (var i=0; i < n; i++) {
Z[i]=X[i].subtract$org_opensourcephysics_numerics_Complex(Y[i]);
}
}, 1);

Clazz.newMeth(C$, 'norm1$org_opensourcephysics_numerics_ComplexA',  function (X) {
var norm=0.0;
var n=X.length;
for (var i=0; i < n; i++) {
norm=norm + X[i].abs$();
}
return norm;
}, 1);

Clazz.newMeth(C$, 'norm2$org_opensourcephysics_numerics_ComplexA',  function (X) {
var norm=0.0;
var n=X.length;
for (var i=0; i < n; i++) {
norm=norm + X[i].abs$() * X[i].abs$();
}
return $I$(2).sqrt$D(norm);
}, 1);

Clazz.newMeth(C$, 'normInf$org_opensourcephysics_numerics_ComplexA',  function (X) {
var norm=0.0;
var n=X.length;
for (var i=0; i < n; i++) {
norm=Math.max(norm, X[i].abs$());
}
return norm;
}, 1);

Clazz.newMeth(C$, 'copy$org_opensourcephysics_numerics_ComplexA$org_opensourcephysics_numerics_ComplexA',  function (X, Y) {
var n=X.length;
if (Y.length != n) {
C$.err$S("Error in ComplexMatrix.copy, incompatible sizes");
}for (var i=0; i < n; i++) {
Y[i]=X[i];
}
}, 1);

Clazz.newMeth(C$, 'equals$org_opensourcephysics_numerics_ComplexA$org_opensourcephysics_numerics_ComplexA',  function (X, Y) {
var n=X.length;
var same=true;
if (Y.length != n) {
C$.err$S("Error in ComplexMatrix.equals, incompatible sizes");
}for (var i=0; i < n; i++) {
same=same && X[i].equals$O(Y[i]) ;
}
return same;
}, 1);

Clazz.newMeth(C$, 'fromDouble$DA$org_opensourcephysics_numerics_ComplexA',  function (X, Z) {
var n=X.length;
if (Z.length != n) {
C$.err$S("Error in ComplexMatrix.fromDouble, incompatible sizes");
}for (var i=0; i < n; i++) {
Z[i]=Clazz.new_($I$(1,1).c$$D,[X[i]]);
}
}, 1);

Clazz.newMeth(C$, 'fromDouble$DA$DA$org_opensourcephysics_numerics_ComplexA',  function (X, Y, Z) {
var n=X.length;
if ((Z.length != n) || (Y.length != n) ) {
C$.err$S("Error in ComplexMatrix.fromDouble, incompatible sizes");
}for (var i=0; i < n; i++) {
Z[i]=Clazz.new_($I$(1,1).c$$D$D,[X[i], Y[i]]);
}
}, 1);

Clazz.newMeth(C$, 'fromRoots$org_opensourcephysics_numerics_ComplexA$org_opensourcephysics_numerics_ComplexA',  function (X, Y) {
var n=X.length;
if (Y.length != n + 1) {
C$.err$S("Error in ComplexMatrix.fromRoots, incompatible sizes");
}Y[0]=X[0].neg$();
Y[1]=Clazz.new_($I$(1,1).c$$D,[1.0]);
if (n == 1) {
return;
}for (var i=1; i < n; i++) {
Y[i + 1]=Clazz.new_($I$(1,1).c$$D,[0.0]);
for (var j=0; j <= i; j++) {
Y[i + 1 - j]=Y[i - j].subtract$org_opensourcephysics_numerics_Complex(Y[i + 1 - j].mul$org_opensourcephysics_numerics_Complex(X[i]));
}
Y[0]=Y[0].mul$org_opensourcephysics_numerics_Complex(X[i]).neg$();
}
}, 1);

Clazz.newMeth(C$, 'unitVector$org_opensourcephysics_numerics_ComplexA$I',  function (X, j) {
var n=X.length;
for (var i=0; i < n; i++) {
X[i]=Clazz.new_($I$(1,1).c$$D,[0.0]);
}
X[j]=Clazz.new_($I$(1,1).c$$D,[1.0]);
}, 1);

Clazz.newMeth(C$, 'zero$org_opensourcephysics_numerics_ComplexA',  function (X) {
var n=X.length;
for (var i=0; i < n; i++) {
X[i]=Clazz.new_($I$(1,1).c$$D,[0.0]);
}
}, 1);

Clazz.newMeth(C$, 'print$org_opensourcephysics_numerics_ComplexA',  function (X) {
var n=X.length;
for (var i=0; i < n; i++) {
C$.err$S("X[" + i + "]=" + X[i] );
}
}, 1);

Clazz.newMeth(C$, 'readSize$S$IA',  function (file_name, rowCol) {
var input_line= String.instantialize("@");
var len;
var index;
var last;
var intStr;
var ni;
var nj;
if ((C$.input_file_name == null ) || !file_name.equals$O(C$.input_file_name) ) {
C$.input_file_name=file_name;
try {
C$.$in=Clazz.new_([Clazz.new_($I$(4,1).c$$S,[file_name])],$I$(3,1).c$$java_io_Reader);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.err$S("ComplexMatrix.read unable to open file " + file_name);
return;
} else {
throw e;
}
}
}ni=0;
nj=0;
try {
input_line=C$.$in.readLine$();
while (input_line != null ){
input_line=input_line.trim$();
len=input_line.length$();
if (len == 0) {
input_line=C$.$in.readLine$();
continue;
}if (input_line.charAt$I(0) == "(") {
C$.err$S("ComplexMatrix.readSize unable to get size " + file_name);
break;
}index=0;
last=input_line.indexOf$I(" ");
if (last == -1) {
last=len;
}intStr=input_line.substring$I$I(index, last);
ni=Integer.parseInt$S(intStr);
input_line=input_line.substring$I$I(last, len);
input_line=input_line.trim$();
len=input_line.length$();
if (len == 0) {
nj=ni;
break;
}index=0;
last=input_line.indexOf$I(" ");
if (last == -1) {
last=len;
}intStr=input_line.substring$I$I(index, last);
nj=Integer.parseInt$S(intStr);
break;
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.err$S("ComplexMatrix.readSize unable to get size " + file_name);
} else {
throw e;
}
}
rowCol[0]=ni;
rowCol[1]=nj;
}, 1);

Clazz.newMeth(C$, 'read$S$org_opensourcephysics_numerics_ComplexAA',  function (file_name, A) {
var input_line= String.instantialize("@");
var len;
var index;
var last;
var intStr;
var i;
var ni;
var j;
var nj;
var have_line=false;
if ((C$.input_file_name == null ) || !file_name.equals$O(C$.input_file_name) ) {
C$.input_file_name=file_name;
try {
C$.$in=Clazz.new_([Clazz.new_($I$(4,1).c$$S,[file_name])],$I$(3,1).c$$java_io_Reader);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.err$S("ComplexMatrix.read unable to open file " + file_name);
return;
} else {
throw e;
}
}
}ni=0;
nj=0;
try {
input_line=C$.$in.readLine$();
while (input_line != null ){
input_line=input_line.trim$();
len=input_line.length$();
if (len == 0) {
input_line=C$.$in.readLine$();
continue;
}if (input_line.charAt$I(0) == "(") {
ni=A.length;
nj=A[0].length;
have_line=true;
break;
}index=0;
last=input_line.indexOf$I(" ");
if (last == -1) {
last=len;
}intStr=input_line.substring$I$I(index, last);
ni=Integer.parseInt$S(intStr);
input_line=input_line.substring$I$I(last, len);
input_line=input_line.trim$();
len=input_line.length$();
if (len == 0) {
nj=ni;
break;
}index=0;
last=input_line.indexOf$I(" ");
if (last == -1) {
last=len;
}intStr=input_line.substring$I$I(index, last);
nj=Integer.parseInt$S(intStr);
break;
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.err$S("ComplexMatrix.read unable to get size " + file_name);
} else {
throw e;
}
}
i=0;
j=0;
if ((A.length != ni) || (A[0].length != nj) ) {
C$.err$S("incompatible size in ComplexMatrix.read");
return;
}try {
if (!have_line) {
input_line=C$.$in.readLine$();
}have_line=false;
while (input_line != null ){
input_line=input_line.trim$();
len=input_line.length$();
if (len == 0) {
input_line=C$.$in.readLine$();
continue;
}index=0;
last=input_line.indexOf$I(")");
if (last == -1) {
input_line=C$.$in.readLine$();
continue;
}intStr=input_line.substring$I$I(index, last + 1);
A[i][j]=$I$(1).parseComplex$S(intStr);
++j;
if (j == nj) {
j=0;
++i;
}if (i == ni) {
break;
}input_line=input_line.substring$I(last + 1);
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.err$S("ComplexMatrix.read unable to read data " + file_name);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'closeInput$',  function () {
try {
C$.$in.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.err$S("ComplexMatrix.closeInput not closed");
} else {
throw e;
}
}
C$.input_file_name=null;
}, 1);

Clazz.newMeth(C$, 'write$S$org_opensourcephysics_numerics_ComplexAA',  function (file_name, A) {
var ni=A.length;
var nj=A[0].length;
if ((C$.output_file_name == null ) || !file_name.equals$O(C$.output_file_name) ) {
C$.output_file_name=file_name;
try {
C$.out=Clazz.new_([Clazz.new_($I$(6,1).c$$S,[file_name])],$I$(5,1).c$$java_io_Writer);
C$.file_out=Clazz.new_($I$(7,1).c$$java_io_Writer,[C$.out]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.err$S("ComplexMatrix.write unable to open file " + file_name);
return;
} else {
throw e;
}
}
}if (ni == nj) {
C$.file_out.println$I(ni);
} else {
C$.file_out.println$S(ni + " " + nj );
}try {
for (var i=0; i < ni; i++) {
for (var j=0; j < nj; j++) {
C$.file_out.println$S(A[i][j].toString());
}
}
C$.file_out.println$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.err$S("ComplexMatrix.write unable to write data " + file_name);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'err$S',  function (msg) {
System.out.println$S("ComplexMatrix: " + msg);
}, 1);

Clazz.newMeth(C$, 'closeOutput$',  function () {
C$.file_out.close$();
C$.output_file_name=null;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
