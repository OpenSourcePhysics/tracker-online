(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),p$1={},I$=[[0,'org.opensourcephysics.numerics.Matrix3DTransformation','org.opensourcephysics.numerics.VectorMath','org.opensourcephysics.numerics.LUPDecomposition',['org.opensourcephysics.numerics.Matrix3DTransformation','.Affine3DTransformationLoader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Matrix3DTransformation", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.opensourcephysics.numerics.MatrixTransformation');
C$.$classes$=[['Affine3DTransformationLoader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.origin=Clazz.array(Double.TYPE, [3]);
this.matrix=Clazz.array(Double.TYPE, [3, 3]);
this.inverseMatrix=null;
},1);

C$.$fields$=[['O',['origin','double[]','matrix','double[][]','+inverseMatrix']]]

Clazz.newMeth(C$, 'c$$DAA',  function (matrix) {
;C$.$init$.apply(this);
if (matrix == null ) {
this.matrix[0][0]=this.matrix[1][1]=this.matrix[2][2]=1;
return;
}for (var i=0; i < matrix.length; i++) {
System.arraycopy$O$I$O$I$I(matrix[i], 0, this.matrix[i], 0, matrix[i].length);
}
}, 1);

Clazz.newMeth(C$, 'rotationX$D',  function (theta) {
var at=Clazz.new_(C$.c$$DAA,[null]);
var mat=at.matrix;
var sin=Math.sin(theta);
var cos=Math.cos(theta);
mat[0][0]=1;
mat[1][1]=cos;
mat[1][2]=-sin;
mat[2][1]=sin;
mat[2][2]=cos;
var inv=Clazz.array(Double.TYPE, [3, 3]);
at.inverseMatrix=inv;
inv[0][0]=1;
inv[1][1]=cos;
inv[1][2]=sin;
inv[2][1]=-sin;
inv[2][2]=cos;
return at;
}, 1);

Clazz.newMeth(C$, 'rotationY$D',  function (theta) {
var at=Clazz.new_(C$.c$$DAA,[null]);
var mat=at.matrix;
var sin=Math.sin(theta);
var cos=Math.cos(theta);
mat[1][1]=1;
mat[0][0]=cos;
mat[0][2]=sin;
mat[2][0]=-sin;
mat[2][2]=cos;
var inv=Clazz.array(Double.TYPE, [3, 3]);
at.inverseMatrix=inv;
inv[1][1]=1;
inv[0][0]=cos;
inv[0][2]=-sin;
inv[2][0]=sin;
inv[2][2]=cos;
return at;
}, 1);

Clazz.newMeth(C$, 'rotationZ$D',  function (theta) {
var at=Clazz.new_(C$.c$$DAA,[null]);
var mat=at.matrix;
var sin=Math.sin(theta);
var cos=Math.cos(theta);
mat[0][0]=cos;
mat[0][1]=-sin;
mat[1][0]=sin;
mat[1][1]=cos;
mat[2][2]=1;
var inv=Clazz.array(Double.TYPE, [3, 3]);
at.inverseMatrix=inv;
inv[0][0]=cos;
inv[0][1]=sin;
inv[1][0]=-sin;
inv[1][1]=cos;
inv[2][2]=1;
return at;
}, 1);

Clazz.newMeth(C$, 'rotation$D$DA',  function (theta, axis) {
var at=Clazz.new_(C$.c$$DAA,[null]);
var mat=at.matrix;
var x=axis[0];
var y=axis[1];
var z=axis[2];
var norm=x * x + y * y + z * z;
if (norm != 1 ) {
norm=1 / Math.sqrt(norm);
x*=norm;
y*=norm;
z*=norm;
}var c=Math.cos(theta);
var s=Math.sin(theta);
var t=1 - c;
mat[0][0]=t * x * x  + c;
mat[0][1]=t * x * y  - s * z;
mat[0][2]=t * x * z  + s * y;
mat[1][0]=t * x * y  + s * z;
mat[1][1]=t * y * y  + c;
mat[1][2]=t * y * z  - s * x;
mat[2][0]=t * x * z  - s * y;
mat[2][1]=t * y * z  + s * x;
mat[2][2]=t * z * z  + c;
var inv=Clazz.array(Double.TYPE, [3, 3]);
at.inverseMatrix=inv;
inv[0][0]=mat[0][0];
inv[1][0]=mat[0][1];
inv[2][0]=mat[0][2];
inv[0][1]=mat[1][0];
inv[1][1]=mat[1][1];
inv[2][1]=mat[1][2];
inv[0][2]=mat[2][0];
inv[1][2]=mat[2][1];
inv[2][2]=mat[2][2];
return at;
}, 1);

Clazz.newMeth(C$, 'Quaternion$DA',  function (quaternion) {
return C$.Quaternion$D$D$D$D(quaternion[0], quaternion[1], quaternion[2], quaternion[3]);
}, 1);

Clazz.newMeth(C$, 'Quaternion$D$D$D$D',  function (q0, q1, q2, q3) {
var at=Clazz.new_(C$.c$$DAA,[null]);
var atMatrix=at.matrix;
var norm=q0 * q0 + q1 * q1 + q2 * q2 + q3 * q3;
if (norm != 1 ) {
norm=1 / Math.sqrt(norm);
q0*=norm;
q1*=norm;
q2*=norm;
q3*=norm;
}var q11=2 * q1 * q1 ;
var q22=2 * q2 * q2 ;
var q33=2 * q3 * q3 ;
var q12=2 * q1 * q2 ;
var q13=2 * q1 * q3 ;
var q23=2 * q2 * q3 ;
var q01=2 * q0 * q1 ;
var q02=2 * q0 * q2 ;
var q03=2 * q0 * q3 ;
atMatrix[0][0]=1 - q22 - q33 ;
atMatrix[0][1]=q12 - q03;
atMatrix[0][2]=q13 + q02;
atMatrix[1][0]=q12 + q03;
atMatrix[1][1]=1 - q11 - q33 ;
atMatrix[1][2]=q23 - q01;
atMatrix[2][0]=q13 - q02;
atMatrix[2][1]=q23 + q01;
atMatrix[2][2]=1 - q11 - q22 ;
var inv=Clazz.array(Double.TYPE, [3, 3]);
at.inverseMatrix=inv;
inv[0][0]=atMatrix[0][0];
inv[1][0]=atMatrix[0][1];
inv[2][0]=atMatrix[0][2];
inv[0][1]=atMatrix[1][0];
inv[1][1]=atMatrix[1][1];
inv[2][1]=atMatrix[1][2];
inv[0][2]=atMatrix[2][0];
inv[1][2]=atMatrix[2][1];
inv[2][2]=atMatrix[2][2];
return at;
}, 1);

Clazz.newMeth(C$, 'setMatrix$DAA',  function (newMatrix) {
if (this.matrix.equals$O(newMatrix)) return false;
for (var i=0; i < 3; i++) {
System.arraycopy$O$I$O$I$I(newMatrix[i], 0, this.matrix[i], 0, 3);
}
this.inverseMatrix=null;
return true;
});

Clazz.newMeth(C$, 'setMatrix$DA',  function (newMatrix) {
var changed=false;
for (var i=0, j=0; i < 3; i++) {
if (this.matrix[i][0] != newMatrix[j++] ) {
this.matrix[i][0]=newMatrix[j];
changed=true;
}if (this.matrix[i][1] != newMatrix[j++] ) {
this.matrix[i][1]=newMatrix[j];
changed=true;
}if (this.matrix[i][2] != newMatrix[j++] ) {
this.matrix[i][2]=newMatrix[j];
changed=true;
}}
if (changed) this.inverseMatrix=null;
return changed;
});

Clazz.newMeth(C$, 'clone$',  function () {
var m=Clazz.new_(C$.c$$DAA,[this.matrix]);
m.origin=this.origin.clone$();
if (this.inverseMatrix == null ) {
return m;
}m.inverseMatrix=Clazz.array(Double.TYPE, [3, 3]);
for (var i=0; i < this.inverseMatrix.length; i++) {
System.arraycopy$O$I$O$I$I(this.inverseMatrix[i], 0, m.inverseMatrix[i], 0, this.inverseMatrix[i].length);
}
return m;
});

Clazz.newMeth(C$, 'getFlatMatrix$DA',  function (mat) {
if (mat == null ) {
mat=Clazz.array(Double.TYPE, [16]);
}mat[0]=this.matrix[0][0];
mat[4]=this.matrix[0][1];
mat[8]=this.matrix[0][2];
mat[1]=this.matrix[1][0];
mat[5]=this.matrix[1][1];
mat[9]=this.matrix[1][2];
mat[2]=this.matrix[2][0];
mat[3]=0;
mat[6]=this.matrix[2][1];
mat[7]=0;
mat[10]=this.matrix[2][2];
mat[11]=0;
mat[12]=this.origin[0];
mat[13]=this.origin[1];
mat[14]=this.origin[2];
mat[15]=1;
return mat;
});

Clazz.newMeth(C$, 'getTransposedFlatMatrix$DA',  function (mat) {
if (mat == null ) {
mat=Clazz.array(Double.TYPE, [16]);
}mat[0]=this.matrix[0][0];
mat[1]=this.matrix[0][1];
mat[2]=this.matrix[0][2];
mat[3]=0;
mat[4]=this.matrix[1][0];
mat[5]=this.matrix[1][1];
mat[6]=this.matrix[1][2];
mat[7]=0;
mat[8]=this.matrix[2][0];
mat[9]=this.matrix[2][1];
mat[10]=this.matrix[2][2];
mat[11]=0;
mat[12]=this.origin[0];
mat[13]=this.origin[1];
mat[14]=this.origin[2];
mat[15]=1;
return mat;
});

Clazz.newMeth(C$, 'toQuaternion$DA',  function (q) {
var kx;
var ky;
var kz;
var kx1;
var ky1;
var kz1;
var add;
var strace=Math.sqrt(this.matrix[0][0] + this.matrix[1][1] + this.matrix[2][2] + 1 ) / 2.0;
kx=this.matrix[2][1] - this.matrix[1][2];
ky=this.matrix[0][2] - this.matrix[2][0];
kz=this.matrix[1][0] - this.matrix[0][1];
if ((this.matrix[0][0] >= this.matrix[1][1] ) && (this.matrix[0][0] >= this.matrix[2][2] ) ) {
kx1=this.matrix[0][0] - this.matrix[1][1] - this.matrix[2][2]  + 1;
ky1=this.matrix[1][0] + this.matrix[0][1];
kz1=this.matrix[2][0] + this.matrix[0][2];
add=(kx >= 0 );
} else if (this.matrix[1][1] >= this.matrix[2][2] ) {
kx1=this.matrix[1][0] + this.matrix[0][1];
ky1=this.matrix[1][1] - this.matrix[0][0] - this.matrix[2][2]  + 1;
kz1=this.matrix[2][1] + this.matrix[1][2];
add=(ky >= 0 );
} else {
kx1=this.matrix[2][0] + this.matrix[0][2];
ky1=this.matrix[2][1] + this.matrix[1][2];
kz1=this.matrix[2][2] - this.matrix[0][0] - this.matrix[1][1]  + 1;
add=(kz >= 0 );
}if (add) {
kx=kx + kx1;
ky=ky + ky1;
kz=kz + kz1;
} else {
kx=kx - kx1;
ky=ky - ky1;
kz=kz - kz1;
}var nm=Math.sqrt(kx * kx + ky * ky + kz * kz);
if (nm == 0 ) {
q[0]=1;
q[1]=0;
q[2]=0;
q[3]=0;
} else {
var s=Math.sqrt(1 - strace * strace) / nm;
q[0]=strace;
q[1]=s * kx;
q[2]=s * ky;
q[3]=s * kz;
}return q;
});

Clazz.newMeth(C$, 'createAlignmentTransformation$DA$DA',  function (v1, v2) {
v1=$I$(2,"normalize$DA",[v1.clone$()]);
v2=$I$(2,"normalize$DA",[v2.clone$()]);
var theta=Math.acos($I$(2).dot$DA$DA(v1, v2));
var axis=$I$(2).cross3D$DA$DA(v1, v2);
return C$.rotation$D$DA(theta, axis);
}, 1);

Clazz.newMeth(C$, 'setOrigin$D$D$D',  function (ox, oy, oz) {
this.origin[0]=ox;
this.origin[1]=oy;
this.origin[2]=oz;
});

Clazz.newMeth(C$, 'multiply$org_opensourcephysics_numerics_Matrix3DTransformation',  function (trans) {
this.multiply$DAA(trans.matrix);
});

Clazz.newMeth(C$, 'multiply$DAA',  function (mat) {
for (var i=0, n=this.matrix.length; i < n; i++) {
var row=this.matrix[i].clone$();
for (var j=0, m=this.matrix[0].length; j < m; j++) {
this.matrix[i][j]=0;
for (var k=0; k < m; k++) {
this.matrix[i][j]+=row[k] * mat[k][j];
}
}
}
this.inverseMatrix=null;
});

Clazz.newMeth(C$, 'setOrigin$DA',  function (origin) {
this.origin[0]=origin[0];
this.origin[1]=origin[1];
this.origin[2]=origin[2];
return origin;
});

Clazz.newMeth(C$, 'direct$DA',  function (point) {
point[0]-=this.origin[0];
point[1]-=this.origin[1];
point[2]-=this.origin[2];
var tempPoint=point.clone$();
for (var i=0, n=point.length; i < n; i++) {
point[i]=this.origin[i];
for (var j=0; j < n; j++) {
point[i]+=this.matrix[i][j] * tempPoint[j];
}
}
return point;
});

Clazz.newMeth(C$, 'direct$DAA',  function (mat) {
if (this.inverseMatrix == null ) {
p$1.calcInverse.apply(this, []);
if (this.inverseMatrix == null ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["The inverse matrix does not exist."]);
}}for (var i=0; i < 3; i++) {
var row=mat[i].clone$();
for (var j=0; j < 3; j++) {
mat[i][j]=0;
for (var k=0; k < 3; k++) {
mat[i][j]+=row[k] * this.inverseMatrix[k][j];
}
}
}
for (var j=0; j < 3; j++) {
var col=Clazz.array(Double.TYPE, -1, [mat[0][j], mat[1][j], mat[2][j]]);
for (var i=0; i < 3; i++) {
mat[i][j]=0;
for (var k=0; k < 3; k++) {
mat[i][j]+=this.matrix[i][k] * col[k];
}
}
}
return mat;
});

Clazz.newMeth(C$, 'inverse$DA',  function (point) {
if (this.inverseMatrix == null ) {
p$1.calcInverse.apply(this, []);
if (this.inverseMatrix == null ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["The inverse matrix does not exist."]);
}}point[0]-=this.origin[0];
point[1]-=this.origin[1];
point[2]-=this.origin[2];
var tempPoint=point.clone$();
for (var i=0, n=point.length; i < n; i++) {
point[i]=this.origin[i];
for (var j=0; j < n; j++) {
point[i]+=this.inverseMatrix[i][j] * tempPoint[j];
}
}
return point;
});

Clazz.newMeth(C$, 'inverse$DAA',  function (mat) {
if (this.inverseMatrix == null ) {
p$1.calcInverse.apply(this, []);
if (this.inverseMatrix == null ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["The inverse matrix does not exist."]);
}}for (var i=0; i < 3; i++) {
var row=mat[i].clone$();
for (var j=0; j < 3; j++) {
mat[i][j]=0;
for (var k=0; k < 3; k++) {
mat[i][j]+=row[k] * this.matrix[k][j];
}
}
}
for (var j=0; j < 3; j++) {
var col=Clazz.array(Double.TYPE, -1, [mat[0][j], mat[1][j], mat[2][j]]);
for (var i=0; i < 3; i++) {
mat[i][j]=0;
for (var k=0; k < 3; k++) {
mat[i][j]+=this.inverseMatrix[i][k] * col[k];
}
}
}
return mat;
});

Clazz.newMeth(C$, 'getOrigin$',  function () {
return this.origin;
});

Clazz.newMeth(C$, 'calcInverse',  function () {
var lupd=Clazz.new_($I$(3,1).c$$DAA,[this.matrix]);
this.inverseMatrix=lupd.inverseMatrixComponents$();
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(4,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Matrix3DTransformation, "Affine3DTransformationLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var transf=obj;
control.setValue$S$O("matrix", transf.matrix);
if (transf.inverseMatrix != null ) {
control.setValue$S$O("inverse", transf.inverseMatrix);
}control.setValue$S$O("origin", transf.origin);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1).c$$DAA,[null]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var transf=obj;
transf.matrix=control.getObject$S("matrix");
transf.inverseMatrix=control.getObject$S("inverse");
transf.origin=control.getObject$S("origin");
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
