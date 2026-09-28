(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'org.opensourcephysics.numerics.Quaternion','org.opensourcephysics.numerics.VectorMath',['org.opensourcephysics.numerics.Quaternion','.QuaternionLoader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Quaternion", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.opensourcephysics.numerics.MatrixTransformation');
C$.$classes$=[['QuaternionLoader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ox=0;
this.oy=0;
this.oz=0;
},1);

C$.$fields$=[['D',['q0','q1','q2','q3','ox','oy','oz']]
,['D',['SQRT2']]]

Clazz.newMeth(C$, 'c$$D$D$D$D',  function (q0, q1, q2, q3) {
;C$.$init$.apply(this);
this.q0=q0;
this.q1=q1;
this.q2=q2;
this.q3=q3;
this.normalize$();
}, 1);

Clazz.newMeth(C$, 'c$$D$org_opensourcephysics_numerics_Vec3D',  function (q0, vector) {
C$.c$$D$D$D$D.apply(this, [q0, vector.x, vector.y, vector.z]);
}, 1);

Clazz.newMeth(C$, 'c$$DA',  function (q) {
;C$.$init$.apply(this);
this.q0=q[0];
this.q1=q[1];
this.q2=q[2];
this.q3=q[3];
this.normalize$();
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_Quaternion',  function (q) {
;C$.$init$.apply(this);
this.q0=q.q0;
this.q1=q.q1;
this.q2=q.q2;
this.q3=q.q3;
this.normalize$();
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$D$D$D$D.apply(this, [1, 0, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'createAlignmentTransformation$DA$DA',  function (v1, v2) {
v1=$I$(2,"normalize$DA",[v1.clone$()]);
v2=$I$(2,"normalize$DA",[v2.clone$()]);
var r=$I$(2).cross3D$DA$DA(v1, v2);
var s=Math.sqrt(2 * (1 + $I$(2).dot$DA$DA(v1, v2)));
return Clazz.new_(C$.c$$D$D$D$D,[s / 2, r[0] / s, r[1] / s, r[2] / s]);
}, 1);

Clazz.newMeth(C$, 'setOrigin$D$D$D',  function (ox, oy, oz) {
this.ox=ox;
this.oy=oy;
this.oz=oz;
});

Clazz.newMeth(C$, 'setOrigin$DA',  function (origin) {
this.ox=origin[0];
this.oy=origin[1];
this.oz=origin[2];
return origin;
});

Clazz.newMeth(C$, 'getOrigin$',  function () {
return Clazz.array(Double.TYPE, -1, [this.ox, this.oy, this.oz]);
});

Clazz.newMeth(C$, 'getRotationMatrix$DAA',  function (mat) {
var q0q0=this.q0 * this.q0;
var q0q1=this.q0 * this.q1;
var q0q2=this.q0 * this.q2;
var q0q3=this.q0 * this.q3;
var q1q1=this.q1 * this.q1;
var q1q2=this.q1 * this.q2;
var q1q3=this.q1 * this.q3;
var q2q2=this.q2 * this.q2;
var q2q3=this.q2 * this.q3;
var q3q3=this.q3 * this.q3;
if (mat == null ) {
mat=Clazz.array(Double.TYPE, [3, 3]);
}mat[0][0]=(q0q0 + q1q1 - q2q2 - q3q3);
mat[0][1]=2 * (-q0q3 + q1q2);
mat[0][2]=2 * (q0q2 + q1q3);
mat[1][0]=2 * (q0q3 + q1q2);
mat[1][1]=(q0q0 - q1q1 + q2q2 - q3q3);
mat[1][2]=2 * (-q0q1 + q2q3);
mat[2][0]=2 * (-q0q2 + q1q3);
mat[2][1]=2 * (q0q1 + q2q3);
mat[2][2]=(q0q0 - q1q1 - q2q2  + q3q3);
return mat;
});

Clazz.newMeth(C$, 'getFlatMatrix$DA',  function (mat) {
var q0q0=this.q0 * this.q0;
var q0q1=this.q0 * this.q1;
var q0q2=this.q0 * this.q2;
var q0q3=this.q0 * this.q3;
var q1q1=this.q1 * this.q1;
var q1q2=this.q1 * this.q2;
var q1q3=this.q1 * this.q3;
var q2q2=this.q2 * this.q2;
var q2q3=this.q2 * this.q3;
var q3q3=this.q3 * this.q3;
if (mat == null ) {
mat=Clazz.array(Double.TYPE, [16]);
}mat[0]=(q0q0 + q1q1 - q2q2 - q3q3);
mat[4]=2 * (-q0q3 + q1q2);
mat[8]=2 * (q0q2 + q1q3);
mat[1]=2 * (q0q3 + q1q2);
mat[5]=(q0q0 - q1q1 + q2q2 - q3q3);
mat[9]=2 * (-q0q1 + q2q3);
mat[2]=2 * (-q0q2 + q1q3);
mat[3]=0;
mat[6]=2 * (q0q1 + q2q3);
mat[7]=0;
mat[10]=(q0q0 - q1q1 - q2q2  + q3q3);
mat[11]=0;
mat[12]=this.ox - this.ox * mat[0] - this.oy * mat[4] - this.oz * mat[8];
mat[13]=this.oy - this.ox * mat[1] - this.oy * mat[5] - this.oz * mat[9];
mat[14]=this.oz - this.ox * mat[2] - this.oy * mat[6] - this.oz * mat[10];
mat[15]=1;
return mat;
});

Clazz.newMeth(C$, 'getCoordinates$',  function () {
return Clazz.array(Double.TYPE, -1, [this.q0, this.q1, this.q2, this.q3]);
});

Clazz.newMeth(C$, 'setCoordinates$D$D$D$D',  function (q0, q1, q2, q3) {
this.q0=q0;
this.q1=q1;
this.q2=q2;
this.q3=q3;
this.normalize$();
});

Clazz.newMeth(C$, 'setCoordinates$DA',  function (q) {
this.q0=q[0];
this.q1=q[1];
this.q2=q[2];
this.q3=q[3];
this.normalize$();
return q;
});

Clazz.newMeth(C$, 'normalize$',  function () {
var norm=this.q0 * this.q0 + this.q1 * this.q1 + this.q2 * this.q2 + this.q3 * this.q3;
if (norm == 1 ) {
return;
}norm=1.0 / Math.sqrt(norm);
this.q0*=norm;
this.q1*=norm;
this.q2*=norm;
this.q3*=norm;
});

Clazz.newMeth(C$, 'conjugate$',  function () {
this.q1=-this.q1;
this.q2=-this.q2;
this.q3=-this.q3;
});

Clazz.newMeth(C$, 'add$org_opensourcephysics_numerics_Quaternion',  function (q) {
this.q0+=q.q0;
this.q1+=q.q1;
this.q2+=q.q2;
this.q3+=q.q3;
});

Clazz.newMeth(C$, 'subtract$org_opensourcephysics_numerics_Quaternion',  function (q) {
this.q0-=q.q0;
this.q1-=q.q1;
this.q2-=q.q2;
this.q3-=q.q3;
});

Clazz.newMeth(C$, 'multiply$org_opensourcephysics_numerics_Quaternion',  function (q) {
var w=this.q0 * q.q0 - this.q1 * q.q1 - this.q2 * q.q2 - this.q3 * q.q3;
var x=this.q3 * q.q2 - this.q2 * q.q3 + this.q1 * q.q0 + this.q0 * q.q1;
var y=this.q1 * q.q3 - this.q3 * q.q1 + this.q2 * q.q0 + this.q0 * q.q2;
var z=this.q2 * q.q1 - this.q1 * q.q2 + this.q3 * q.q0 + this.q0 * q.q3;
this.q0=w;
this.q1=x;
this.q2=y;
this.q3=z;
this.normalize$();
});

Clazz.newMeth(C$, 'dot$org_opensourcephysics_numerics_Quaternion',  function (q) {
return (this.q0 * q.q0 + this.q1 * q.q1 + this.q2 * q.q2 + this.q3 * q.q3);
});

Clazz.newMeth(C$, 'magnitudeSquared$',  function () {
return (this.q0 * this.q0 + this.q1 * this.q1 + this.q2 * this.q2 + this.q3 * this.q3);
});

Clazz.newMeth(C$, 'magnitude$',  function () {
return Math.sqrt(this.q0 * this.q0 + this.q1 * this.q1 + this.q2 * this.q2 + this.q3 * this.q3);
});

Clazz.newMeth(C$, 'angle$org_opensourcephysics_numerics_Quaternion',  function (q) {
var norm1=Math.sqrt(this.q1 * this.q1 + this.q2 * this.q2 + this.q3 * this.q3);
var norm2=Math.sqrt(q.q1 * q.q1 + q.q2 * q.q2 + q.q3 * q.q3);
var w=Math.sqrt(1 + (this.q1 * q.q1 + this.q2 * q.q2 + this.q3 * q.q3) / norm1 / norm2 );
return (2 * Math.acos(w / C$.SQRT2));
});

Clazz.newMeth(C$, 'clone$',  function () {
var q=Clazz.new_(C$.c$$D$D$D$D,[this.q0, this.q1, this.q2, this.q3]);
q.setOrigin$D$D$D(this.ox, this.oy, this.oz);
return q;
});

Clazz.newMeth(C$, 'direct$DA',  function (p) {
p[0]-=this.ox;
p[1]-=this.oy;
p[2]-=this.oz;
var pMult=2 * this.q0 * this.q0  - 1;
var vMult=2 * (this.q1 * p[0] + this.q2 * p[1] + this.q3 * p[2]);
var crossMult=2 * this.q0;
var x=pMult * p[0] + vMult * this.q1 + crossMult * (this.q2 * p[2] - this.q3 * p[1]);
var y=pMult * p[1] + vMult * this.q2 + crossMult * (this.q3 * p[0] - this.q1 * p[2]);
p[2]=pMult * p[2] + vMult * this.q3 + crossMult * (this.q1 * p[1] - this.q2 * p[0]) + this.oz;
p[0]=x + this.ox;
p[1]=y + this.oy;
return p;
});

Clazz.newMeth(C$, 'inverse$DA',  function (p) {
p[0]-=this.ox;
p[1]-=this.oy;
p[2]-=this.oz;
var pMult=2 * this.q0 * this.q0  - 1;
var vMult=2 * (this.q1 * p[0] + this.q2 * p[1] + this.q3 * p[2]);
var crossMult=-2 * this.q0;
var x=pMult * p[0] + vMult * this.q1 + crossMult * (this.q2 * p[2] - this.q3 * p[1]);
var y=pMult * p[1] + vMult * this.q2 + crossMult * (this.q3 * p[0] - this.q1 * p[2]);
p[2]=pMult * p[2] + vMult * this.q3 + crossMult * (this.q1 * p[1] - this.q2 * p[0]) + this.oz;
p[0]=x + this.ox;
p[1]=y + this.oy;
return p;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(3,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.SQRT2=Math.sqrt(2);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Quaternion, "QuaternionLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var qr=obj;
control.setValue$S$D("q0", qr.q0);
control.setValue$S$D("q1", qr.q1);
control.setValue$S$D("q2", qr.q2);
control.setValue$S$D("q3", qr.q3);
control.setValue$S$D("ox", qr.ox);
control.setValue$S$D("oy", qr.oy);
control.setValue$S$D("oz", qr.oz);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var qr=obj;
var q0=control.getDouble$S("q0");
var q1=control.getDouble$S("q0");
var q2=control.getDouble$S("q0");
var q3=control.getDouble$S("q0");
qr.setCoordinates$D$D$D$D(q0, q1, q2, q3);
var ox=control.getDouble$S("ox");
var oy=control.getDouble$S("oy");
var oz=control.getDouble$S("oz");
qr.setOrigin$D$D$D(ox, oy, oz);
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
