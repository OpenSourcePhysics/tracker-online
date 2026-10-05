(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),I$=[[0,'org.opensourcephysics.display3d.simple3d.ElementBox','org.opensourcephysics.display3d.simple3d.Resolution',['org.opensourcephysics.display3d.simple3d.ElementBox','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ElementBox", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display3d.simple3d.AbstractTile', 'org.opensourcephysics.display3d.core.ElementBox');
C$.$classes$=[['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.closedBottom=true;
this.closedTop=true;
this.changeNTiles=true;
this.nx=-1;
this.ny=-1;
this.nz=-1;
this.standardBox=null;
{
this.getStyle$().setResolution$org_opensourcephysics_display3d_core_Resolution(Clazz.new_($I$(2,1).c$$I$I$I,[3, 3, 3]));
}
},1);

C$.$fields$=[['Z',['closedBottom','closedTop','changeNTiles'],'I',['nx','ny','nz'],'O',['standardBox','double[][][]']]]

Clazz.newMeth(C$, 'setClosedBottom$Z',  function (close) {
this.closedBottom=close;
this.setElementChanged$Z(true);
this.changeNTiles=true;
});

Clazz.newMeth(C$, 'isClosedBottom$',  function () {
return this.closedBottom;
});

Clazz.newMeth(C$, 'setClosedTop$Z',  function (close) {
this.closedTop=close;
this.setElementChanged$Z(true);
this.changeNTiles=true;
});

Clazz.newMeth(C$, 'isClosedTop$',  function () {
return this.closedTop;
});

Clazz.newMeth(C$, 'computeCorners$',  function () {
var theNx=1;
var theNy=1;
var theNz=1;
var res=this.getRealStyle$().getResolution$();
if (res != null ) {
switch (res.getType$()) {
case 0:
theNx=Math.max(res.getN1$(), 1);
theNy=Math.max(res.getN2$(), 1);
theNz=Math.max(res.getN3$(), 1);
break;
case 1:
theNx=Math.max(Long.$ival(Math.round$D(0.49 + Math.abs(this.getSizeX$()) / res.getMaxLength$())), 1);
theNy=Math.max(Long.$ival(Math.round$D(0.49 + Math.abs(this.getSizeY$()) / res.getMaxLength$())), 1);
theNz=Math.max(Long.$ival(Math.round$D(0.49 + Math.abs(this.getSizeZ$()) / res.getMaxLength$())), 1);
break;
}
}if ((this.nx != theNx) || (this.ny != theNy) || (this.nz != theNz) || this.changeNTiles  ) {
this.nx=theNx;
this.ny=theNy;
this.nz=theNz;
this.changeNTiles=false;
this.standardBox=C$.createStandardBox$I$I$I$Z$Z(this.nx, this.ny, this.nz, this.closedTop, this.closedBottom);
this.setCorners$DAAA(Clazz.array(Double.TYPE, [this.standardBox.length, 4, 3]));
}for (var i=0; i < this.numberOfTiles; i++) {
for (var j=0, sides=this.corners[i].length; j < sides; j++) {
System.arraycopy$O$I$O$I$I(this.standardBox[i][j], 0, this.corners[i][j], 0, 3);
this.sizeAndToSpaceFrame$DA(this.corners[i][j]);
}
}
this.setElementChanged$Z(false);
});

Clazz.newMeth(C$, 'createStandardBox$I$I$I$Z$Z',  function (nx, ny, nz, top, bottom) {
var nTotal=2 * nx * nz  + 2 * ny * nz ;
if (bottom) {
nTotal+=nx * ny;
}if (top) {
nTotal+=nx * ny;
}var data=Clazz.array(Double.TYPE, [nTotal, 4, 3]);
var tile=0;
var dx=1.0 / nx;
var dy=1.0 / ny;
var dz=1.0 / nz;
for (var i=0; i < nx; i++) {
var theX=i * dx - 0.5;
for (var j=0; j < ny; j++) {
var theY=j * dy - 0.5;
if (bottom) {
data[tile][0][0]=theX;
data[tile][0][1]=theY;
data[tile][0][2]=-0.5;
data[tile][1][0]=theX + dx;
data[tile][1][1]=theY;
data[tile][1][2]=-0.5;
data[tile][2][0]=theX + dx;
data[tile][2][1]=theY + dy;
data[tile][2][2]=-0.5;
data[tile][3][0]=theX;
data[tile][3][1]=theY + dy;
data[tile][3][2]=-0.5;
++tile;
}if (top) {
data[tile][0][0]=theX;
data[tile][0][1]=theY;
data[tile][0][2]=0.5;
data[tile][1][0]=theX + dx;
data[tile][1][1]=theY;
data[tile][1][2]=0.5;
data[tile][2][0]=theX + dx;
data[tile][2][1]=theY + dy;
data[tile][2][2]=0.5;
data[tile][3][0]=theX;
data[tile][3][1]=theY + dy;
data[tile][3][2]=0.5;
++tile;
}}
}
for (var i=0; i < nx; i++) {
var theX=i * dx - 0.5;
for (var k=0; k < nz; k++) {
var theZ=k * dz - 0.5;
data[tile][0][0]=theX;
data[tile][0][2]=theZ;
data[tile][0][1]=-0.5;
data[tile][1][0]=theX + dx;
data[tile][1][2]=theZ;
data[tile][1][1]=-0.5;
data[tile][2][0]=theX + dx;
data[tile][2][2]=theZ + dz;
data[tile][2][1]=-0.5;
data[tile][3][0]=theX;
data[tile][3][2]=theZ + dz;
data[tile][3][1]=-0.5;
++tile;
data[tile][0][0]=theX;
data[tile][0][2]=theZ;
data[tile][0][1]=0.5;
data[tile][1][0]=theX + dx;
data[tile][1][2]=theZ;
data[tile][1][1]=0.5;
data[tile][2][0]=theX + dx;
data[tile][2][2]=theZ + dz;
data[tile][2][1]=0.5;
data[tile][3][0]=theX;
data[tile][3][2]=theZ + dz;
data[tile][3][1]=0.5;
++tile;
}
}
for (var k=0; k < nz; k++) {
var theZ=k * dz - 0.5;
for (var j=0; j < ny; j++) {
var theY=j * dy - 0.5;
data[tile][0][2]=theZ;
data[tile][0][1]=theY;
data[tile][0][0]=-0.5;
data[tile][1][2]=theZ + dz;
data[tile][1][1]=theY;
data[tile][1][0]=-0.5;
data[tile][2][2]=theZ + dz;
data[tile][2][1]=theY + dy;
data[tile][2][0]=-0.5;
data[tile][3][2]=theZ;
data[tile][3][1]=theY + dy;
data[tile][3][0]=-0.5;
++tile;
data[tile][0][2]=theZ;
data[tile][0][1]=theY;
data[tile][0][0]=0.5;
data[tile][1][2]=theZ + dz;
data[tile][1][1]=theY;
data[tile][1][0]=0.5;
data[tile][2][2]=theZ + dz;
data[tile][2][1]=theY + dy;
data[tile][2][0]=0.5;
data[tile][3][2]=theZ;
data[tile][3][1]=theY + dy;
data[tile][3][0]=0.5;
++tile;
}
}
return data;
}, 1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(3,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ElementBox, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.ElementBox','.Loader']);

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
