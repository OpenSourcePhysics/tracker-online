(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'org.opensourcephysics.numerics.Util']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Vec3D");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['x','y','z']]]

Clazz.newMeth(C$, 'c$$D$D$D',  function (x, y, z) {
;C$.$init$.apply(this);
this.x=x;
this.y=y;
this.z=z;
}, 1);

Clazz.newMeth(C$, 'c$$DA',  function (v) {
;C$.$init$.apply(this);
this.x=v[0];
this.y=v[1];
this.z=v[2];
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_Vec3D',  function (v1) {
;C$.$init$.apply(this);
this.x=v1.x;
this.y=v1.y;
this.z=v1.z;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$D$D$D.apply(this, [0, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'subtract$org_opensourcephysics_numerics_Vec3D$org_opensourcephysics_numerics_Vec3D',  function (v1, v2) {
this.x=v1.x - v2.x;
this.y=v1.y - v2.y;
this.z=v1.z - v2.z;
});

Clazz.newMeth(C$, 'add$org_opensourcephysics_numerics_Vec3D$org_opensourcephysics_numerics_Vec3D',  function (v1, v2) {
this.x=v1.x + v2.x;
this.y=v1.y + v2.y;
this.z=v1.z + v2.z;
});

Clazz.newMeth(C$, 'cross$org_opensourcephysics_numerics_Vec3D$org_opensourcephysics_numerics_Vec3D',  function (v1, v2) {
var x;
var y;
x=v1.y * v2.z - v1.z * v2.y;
y=v2.x * v1.z - v2.z * v1.x;
this.z=v1.x * v2.y - v1.y * v2.x;
this.x=x;
this.y=y;
});

Clazz.newMeth(C$, 'multiply$org_opensourcephysics_numerics_Vec3D$D',  function (v1, number) {
this.x=v1.x * number;
this.y=v1.y * number;
this.z=v1.z * number;
});

Clazz.newMeth(C$, 'normalize$',  function () {
var norm=this.x * this.x + this.y * this.y + this.z * this.z;
if (norm < $I$(1).defaultNumericalPrecision ) {
return;
}if (norm == 1 ) {
return;
}norm=1 / Math.sqrt(norm);
this.x*=norm;
this.y*=norm;
this.z*=norm;
});

Clazz.newMeth(C$, 'dot$org_opensourcephysics_numerics_Vec3D',  function (v1) {
return (this.x * v1.x + this.y * v1.y + this.z * v1.z);
});

Clazz.newMeth(C$, 'magnitudeSquared$',  function () {
return (this.x * this.x + this.y * this.y + this.z * this.z);
});

Clazz.newMeth(C$, 'magnitude$',  function () {
return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
});

Clazz.newMeth(C$, 'angle$org_opensourcephysics_numerics_Vec3D',  function (v1) {
var vDot=this.dot$org_opensourcephysics_numerics_Vec3D(v1) / (this.magnitude$() * v1.magnitude$());
if (vDot < -1.0 ) {
vDot=-1.0;
}if (vDot > 1.0 ) {
vDot=1.0;
}return ((Math.acos(vDot)));
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
