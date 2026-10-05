(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),I$=[[0,'org.opensourcephysics.display3d.simple3d.ElementPlane',['org.opensourcephysics.display3d.simple3d.ElementPlane','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ElementPlane", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display3d.simple3d.AbstractTile', 'org.opensourcephysics.display3d.core.ElementPlane');
C$.$classes$=[['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.vectorU=Clazz.array(Double.TYPE, -1, [1.0, 0.0, 0.0]);
this.vectorV=Clazz.array(Double.TYPE, -1, [0.0, 1.0, 0.0]);
this.nu=-1;
this.nv=-1;
this.vectorUSize=1.0;
this.vectorVSize=1.0;
{
this.setXYZ$D$D$D(0.0, 0.0, 0.0);
this.setSizeXYZ$D$D$D(1.0, 1.0, 1.0);
}
},1);

C$.$fields$=[['D',['vectorUSize','vectorVSize'],'I',['nu','nv'],'O',['vectorU','double[]','+vectorV']]]

Clazz.newMeth(C$, 'setFirstDirection$DA',  function (vector) {
this.vectorU[0]=vector[0];
this.vectorU[1]=vector[1];
this.vectorU[2]=vector[2];
this.vectorUSize=Math.sqrt(this.vectorU[0] * this.vectorU[0] + this.vectorU[1] * this.vectorU[1] + this.vectorU[2] * this.vectorU[2]);
this.setElementChanged$Z(true);
});

Clazz.newMeth(C$, 'getFirstDirection$',  function () {
return Clazz.array(Double.TYPE, -1, [this.vectorU[0], this.vectorU[1], this.vectorU[2]]);
});

Clazz.newMeth(C$, 'setSecondDirection$DA',  function (vector) {
this.vectorV[0]=vector[0];
this.vectorV[1]=vector[1];
this.vectorV[2]=vector[2];
this.vectorVSize=Math.sqrt(this.vectorV[0] * this.vectorV[0] + this.vectorV[1] * this.vectorV[1] + this.vectorV[2] * this.vectorV[2]);
this.setElementChanged$Z(true);
});

Clazz.newMeth(C$, 'getSecondDirection$',  function () {
return Clazz.array(Double.TYPE, -1, [this.vectorV[0], this.vectorV[1], this.vectorV[2]]);
});

Clazz.newMeth(C$, 'computeCorners$',  function () {
var theNu=1;
var theNv=1;
var res=this.getRealStyle$().getResolution$();
if (res != null ) {
switch (res.getType$()) {
case 0:
theNu=Math.max(res.getN1$(), 1);
theNv=Math.max(res.getN2$(), 1);
break;
case 1:
theNu=Math.max(Long.$ival(Math.round$D(0.49 + Math.abs(this.getSizeX$()) * this.vectorUSize / res.getMaxLength$())), 1);
theNv=Math.max(Long.$ival(Math.round$D(0.49 + Math.abs(this.getSizeY$()) * this.vectorVSize / res.getMaxLength$())), 1);
break;
}
}if ((this.nu != theNu) || (this.nv != theNv) ) {
this.nu=theNu;
this.nv=theNv;
this.setCorners$DAAA(Clazz.array(Double.TYPE, [this.nu * this.nv, 4, 3]));
}var tile=0;
var du=this.getSizeX$() / this.nu;
var dv=this.getSizeY$() / this.nv;
for (var i=0; i < this.nu; i++) {
var u=i * du - this.getSizeX$() / 2;
for (var j=0; j < this.nv; j++) {
var v=j * dv - this.getSizeY$() / 2;
for (var k=0; k < 3; k++) {
this.corners[tile][0][k]=u * this.vectorU[k] + v * this.vectorV[k];
}
for (var k=0; k < 3; k++) {
this.corners[tile][1][k]=(u + du) * this.vectorU[k] + v * this.vectorV[k];
}
for (var k=0; k < 3; k++) {
this.corners[tile][2][k]=(u + du) * this.vectorU[k] + (v + dv) * this.vectorV[k];
}
for (var k=0; k < 3; k++) {
this.corners[tile][3][k]=u * this.vectorU[k] + (v + dv) * this.vectorV[k];
}
++tile;
}
}
for (var i=0; i < this.numberOfTiles; i++) {
for (var j=0, sides=this.corners[i].length; j < sides; j++) {
this.toSpaceFrame$DA(this.corners[i][j]);
}
}
this.setElementChanged$Z(false);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(2,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ElementPlane, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.Element','.Loader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
