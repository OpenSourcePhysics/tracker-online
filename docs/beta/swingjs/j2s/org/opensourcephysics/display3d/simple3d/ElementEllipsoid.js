(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),I$=[[0,'org.opensourcephysics.display3d.simple3d.ElementEllipsoid','org.opensourcephysics.display3d.simple3d.Resolution','org.opensourcephysics.display3d.simple3d.utils.EllipsoidUtils',['org.opensourcephysics.display3d.simple3d.ElementEllipsoid','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ElementEllipsoid", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display3d.simple3d.AbstractTile', 'org.opensourcephysics.display3d.core.ElementEllipsoid');
C$.$classes$=[['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.closedBottom=true;
this.closedTop=true;
this.closedLeft=true;
this.closedRight=true;
this.minAngleU=0;
this.maxAngleU=360;
this.minAngleV=-90;
this.maxAngleV=90;
this.changeNTiles=true;
this.nr=-1;
this.nu=-1;
this.nv=-1;
this.standardSphere=null;
{
this.getStyle$().setResolution$org_opensourcephysics_display3d_core_Resolution(Clazz.new_($I$(2,1).c$$I$I$I,[3, 12, 12]));
}
},1);

C$.$fields$=[['Z',['closedBottom','closedTop','closedLeft','closedRight','changeNTiles'],'I',['minAngleU','maxAngleU','minAngleV','maxAngleV','nr','nu','nv'],'O',['standardSphere','double[][][]']]]

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

Clazz.newMeth(C$, 'setClosedLeft$Z',  function (close) {
this.closedLeft=close;
this.setElementChanged$Z(true);
this.changeNTiles=true;
});

Clazz.newMeth(C$, 'isClosedLeft$',  function () {
return this.closedLeft;
});

Clazz.newMeth(C$, 'setClosedRight$Z',  function (close) {
this.closedRight=close;
this.setElementChanged$Z(true);
this.changeNTiles=true;
});

Clazz.newMeth(C$, 'isClosedRight$',  function () {
return this.closedRight;
});

Clazz.newMeth(C$, 'setMinimumAngleU$I',  function (angle) {
this.minAngleU=angle;
this.setElementChanged$Z(true);
this.changeNTiles=true;
});

Clazz.newMeth(C$, 'getMinimumAngleU$',  function () {
return this.minAngleU;
});

Clazz.newMeth(C$, 'setMaximumAngleU$I',  function (angle) {
this.maxAngleU=angle;
this.setElementChanged$Z(true);
this.changeNTiles=true;
});

Clazz.newMeth(C$, 'getMaximumAngleU$',  function () {
return this.maxAngleU;
});

Clazz.newMeth(C$, 'setMinimumAngleV$I',  function (angle) {
this.minAngleV=angle;
this.setElementChanged$Z(true);
this.changeNTiles=true;
});

Clazz.newMeth(C$, 'getMinimumAngleV$',  function () {
return this.minAngleV;
});

Clazz.newMeth(C$, 'setMaximumAngleV$I',  function (angle) {
this.maxAngleV=angle;
this.setElementChanged$Z(true);
this.changeNTiles=true;
});

Clazz.newMeth(C$, 'getMaximumAngleV$',  function () {
return this.maxAngleV;
});

Clazz.newMeth(C$, 'computeCorners$',  function () {
var theNr=1;
var theNu=1;
var theNv=1;
var angleu1=this.minAngleU;
var angleu2=this.maxAngleU;
if (Math.abs(angleu2 - angleu1) > 360 ) {
angleu2=angleu1 + 360;
}var anglev1=this.minAngleV;
var anglev2=this.maxAngleV;
if (Math.abs(anglev2 - anglev1) > 180 ) {
anglev2=anglev1 + 180;
}var res=this.getRealStyle$().getResolution$();
if (res != null ) {
switch (res.getType$()) {
case 0:
theNr=Math.max(res.getN1$(), 1);
theNu=Math.max(res.getN2$(), 1);
theNv=Math.max(res.getN3$(), 1);
break;
case 1:
var maxRadius=Math.max(Math.max(Math.abs(this.getSizeX$()), Math.abs(this.getSizeY$())), Math.abs(this.getSizeZ$())) / 2;
theNr=Math.max(Long.$ival(Math.round$D(0.49 + maxRadius / res.getMaxLength$())), 1);
theNu=Math.max(Long.$ival(Math.round$D(0.49 + Math.abs(angleu2 - angleu1) * 0.017453292519943295 * maxRadius  / res.getMaxLength$())), 1);
theNv=Math.max(Long.$ival(Math.round$D(0.49 + Math.abs(anglev2 - anglev1) * 0.017453292519943295 * maxRadius  / res.getMaxLength$())), 1);
break;
}
}if ((this.nr != theNr) || (this.nu != theNu) || (this.nv != theNv) || this.changeNTiles  ) {
this.nr=theNr;
this.nu=theNu;
this.nv=theNv;
this.standardSphere=$I$(3).createStandardEllipsoid$I$I$I$D$D$D$D$Z$Z$Z$Z(this.nr, this.nu, this.nv, angleu1, angleu2, anglev1, anglev2, this.closedTop, this.closedBottom, this.closedLeft, this.closedRight);
this.setCorners$DAAA(Clazz.array(Double.TYPE, [this.standardSphere.length, 4, 3]));
this.changeNTiles=false;
}for (var i=0; i < this.numberOfTiles; i++) {
for (var j=0, sides=this.corners[i].length; j < sides; j++) {
System.arraycopy$O$I$O$I$I(this.standardSphere[i][j], 0, this.corners[i][j], 0, 3);
this.sizeAndToSpaceFrame$DA(this.corners[i][j]);
}
}
this.setElementChanged$Z(false);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(4,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ElementEllipsoid, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.ElementEllipsoid','.Loader']);

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
