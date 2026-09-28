(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),I$=[[0,'org.opensourcephysics.display3d.simple3d.ElementCone','org.opensourcephysics.display3d.simple3d.Resolution','org.opensourcephysics.display3d.simple3d.utils.ConeUtils',['org.opensourcephysics.display3d.simple3d.ElementCone','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ElementCone", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display3d.simple3d.AbstractTile', 'org.opensourcephysics.display3d.core.ElementCone');
C$.$classes$=[['Loader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.closedBottom=true;
this.closedTop=true;
this.closedLeft=true;
this.closedRight=true;
this.minAngle=0;
this.maxAngle=360;
this.truncationHeight=NaN;
this.changeNTiles=true;
this.nr=-1;
this.nu=-1;
this.nz=-1;
this.standardCone=null;
{
this.getStyle$().setResolution$org_opensourcephysics_display3d_core_Resolution(Clazz.new_($I$(2,1).c$$I$I$I,[3, 12, 5]));
}
},1);

C$.$fields$=[['Z',['closedBottom','closedTop','closedLeft','closedRight','changeNTiles'],'D',['truncationHeight'],'I',['minAngle','maxAngle','nr','nu','nz'],'O',['standardCone','double[][][]']]]

Clazz.newMeth(C$, 'setTruncationHeight$D',  function (height) {
if (height < 0 ) {
height=NaN;
}this.truncationHeight=height;
this.setElementChanged$Z(true);
this.changeNTiles=true;
});

Clazz.newMeth(C$, 'getTruncationHeight$',  function () {
return this.truncationHeight;
});

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

Clazz.newMeth(C$, 'setMinimumAngle$I',  function (angle) {
this.minAngle=angle;
this.setElementChanged$Z(true);
this.changeNTiles=true;
});

Clazz.newMeth(C$, 'getMinimumAngle$',  function () {
return this.minAngle;
});

Clazz.newMeth(C$, 'setMaximumAngle$I',  function (angle) {
this.maxAngle=angle;
this.setElementChanged$Z(true);
this.changeNTiles=true;
});

Clazz.newMeth(C$, 'getMaximumAngle$',  function () {
return this.maxAngle;
});

Clazz.newMeth(C$, 'computeCorners$',  function () {
var theNr=1;
var theNu=1;
var theNz=1;
var angle1=this.minAngle;
var angle2=this.maxAngle;
if (Math.abs(angle2 - angle1) > 360 ) {
angle2=angle1 + 360;
}var res=this.getRealStyle$().getResolution$();
if (res != null ) {
switch (res.getType$()) {
case 0:
theNr=Math.max(res.getN1$(), 1);
theNu=Math.max(res.getN2$(), 1);
theNz=Math.max(res.getN3$(), 1);
break;
case 1:
var dx=Math.abs(this.getSizeX$()) / 2;
var dy=Math.abs(this.getSizeY$()) / 2;
var dz=Math.abs(this.getSizeZ$());
if (!Double.isNaN$D(this.truncationHeight)) {
dz=Math.min(dz, this.truncationHeight);
}theNr=Math.max(Long.$ival(Math.round$D(0.49 + Math.max(dx, dy) / res.getMaxLength$())), 1);
theNu=Math.max(Long.$ival(Math.round$D(0.49 + Math.abs(angle2 - angle1) * 0.017453292519943295 * (dx + dy)  / res.getMaxLength$())), 1);
theNz=Math.max(Long.$ival(Math.round$D(0.49 + dz / res.getMaxLength$())), 1);
break;
}
}if ((this.nr != theNr) || (this.nu != theNu) || (this.nz != theNz) || this.changeNTiles  ) {
this.nr=theNr;
this.nu=theNu;
this.nz=theNz;
this.changeNTiles=false;
var height=this.truncationHeight / this.getSizeZ$();
if (!Double.isNaN$D(height)) {
height=Math.min(height, 1.0);
}this.standardCone=$I$(3).createStandardCone$I$I$I$D$D$Z$Z$Z$Z$D(this.nr, this.nu, this.nz, angle1, angle2, this.closedTop, this.closedBottom, this.closedLeft, this.closedRight, height);
this.setCorners$DAAA(Clazz.array(Double.TYPE, [this.standardCone.length, 4, 3]));
}for (var i=0; i < this.numberOfTiles; i++) {
for (var j=0, sides=this.corners[i].length; j < sides; j++) {
System.arraycopy$O$I$O$I$I(this.standardCone[i][j], 0, this.corners[i][j], 0, 3);
this.sizeAndToSpaceFrame$DA(this.corners[i][j]);
}
}
this.setElementChanged$Z(false);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(4,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ElementCone, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.ElementCone','.Loader']);

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
