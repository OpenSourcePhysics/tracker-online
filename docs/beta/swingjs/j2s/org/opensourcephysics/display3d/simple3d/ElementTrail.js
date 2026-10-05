(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),p$1={},I$=[[0,'org.opensourcephysics.display3d.simple3d.ElementTrail','java.util.ArrayList',['org.opensourcephysics.display3d.simple3d.ElementTrail','.TrailPoint'],'java.awt.Color','org.opensourcephysics.display.DisplayColors',['org.opensourcephysics.display3d.simple3d.ElementTrail','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ElementTrail", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display3d.simple3d.Element', 'org.opensourcephysics.display3d.core.ElementTrail');
C$.$classes$=[['TrailPoint',2],['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.connected=true;
this.maximum=0;
this.inputLabels=Clazz.array(String, -1, ["x", "y", "z"]);
this.points=null;
this.list=Clazz.new_($I$(2,1));
this.ghostPoint=Clazz.new_($I$(3,1).c$$D$D$D$Z,[this, null, NaN, NaN, NaN, true]);
this.datasetID=this.hashCode$();
},1);

C$.$fields$=[['Z',['connected'],'I',['maximum','datasetID'],'O',['inputLabels','String[]','points','org.opensourcephysics.display3d.simple3d.ElementTrail.TrailPoint[]','list','java.util.ArrayList','ghostPoint','org.opensourcephysics.display3d.simple3d.ElementTrail.TrailPoint']]]

Clazz.newMeth(C$, 'addPoint$D$D$D',  function (x, y, z) {
p$1.addPoint$D$D$D$Z.apply(this, [x, y, z, this.connected]);
});

Clazz.newMeth(C$, 'addPoint$DA',  function (point) {
p$1.addPoint$D$D$D$Z.apply(this, [point[0], point[1], point[2], this.connected]);
});

Clazz.newMeth(C$, 'moveToPoint$D$D$D',  function (x, y, z) {
p$1.addPoint$D$D$D$Z.apply(this, [x, y, z, false]);
});

Clazz.newMeth(C$, 'setMaximumPoints$I',  function (maximum) {
this.maximum=maximum;
});

Clazz.newMeth(C$, 'getMaximumPoints$',  function () {
return this.maximum;
});

Clazz.newMeth(C$, 'setConnected$Z',  function (connected) {
this.connected=connected;
});

Clazz.newMeth(C$, 'isConnected$',  function () {
return this.connected;
});

Clazz.newMeth(C$, 'clear$',  function () {
{
this.list.clear$();
}this.points=Clazz.array($I$(3), [0]);
this.ghostPoint.xp=NaN;
});

Clazz.newMeth(C$, 'setXLabel$S',  function (_label) {
this.inputLabels[0]=_label;
});

Clazz.newMeth(C$, 'setYLabel$S',  function (_label) {
this.inputLabels[1]=_label;
});

Clazz.newMeth(C$, 'setZLabel$S',  function (_label) {
this.inputLabels[2]=_label;
});

Clazz.newMeth(C$, 'addPoint$D$D$D$Z',  function (_x, _y, _z, _c) {
{
if ((this.maximum > 0) && (this.list.size$() >= this.maximum) ) {
this.list.remove$I(0);
}var point=Clazz.new_($I$(3,1).c$$D$D$D$Z,[this, null, _x, _y, _z, _c]);
this.list.add$O(point);
if (this.getDrawingPanel3D$() != null ) {
point.transformAndProject$();
}}}, p$1);

Clazz.newMeth(C$, 'getNumberOfPoints$',  function () {
return this.list.size$();
});

Clazz.newMeth(C$, 'setGhostPoint$DA$Z',  function (_point, _connected) {
if (_point == null ) {
this.ghostPoint.xp=NaN;
} else {
this.ghostPoint.xp=_point[0];
this.ghostPoint.yp=_point[1];
this.ghostPoint.zp=_point[2];
this.ghostPoint.connected=_connected;
if (this.getDrawingPanel3D$() != null ) {
this.ghostPoint.transformAndProject$();
}}});

Clazz.newMeth(C$, 'preparePoints',  function () {
var hasGhost=!Double.isNaN$D(this.ghostPoint.xp);
var n=hasGhost ? this.list.size$() + 1 : this.list.size$();
this.points=Clazz.array($I$(3), [n]);
var index=0;
for (var point, $point = this.list.iterator$(); $point.hasNext$()&&((point=($point.next$())),1);) {
this.points[index]=point;
point.setIndex$I(index);
++index;
}
if (hasGhost) {
this.points[index]=this.ghostPoint;
this.ghostPoint.setIndex$I(index);
}}, p$1);

Clazz.newMeth(C$, 'getObjects3D$',  function () {
{
if (!this.isReallyVisible$() || (this.list.size$() <= 0) ) {
return null;
}p$1.preparePoints.apply(this, []);
}if (this.hasChanged$()) {
this.transformAndProjectPoints$();
} else if (this.needsToProject$()) {
this.projectPoints$();
}return this.points;
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$I',  function (_g2, _index) {
var point=this.points[_index];
var theColor=this.getDrawingPanel3D$().projectColor$java_awt_Color$D(this.getRealStyle$().getLineColor$(), point.getDistance$());
_g2.setStroke$java_awt_Stroke(this.getRealStyle$().getLineStroke$());
_g2.setColor$java_awt_Color(theColor);
if ((_index == 0) || !point.connected ) {
_g2.drawLine$I$I$I$I((point.pixel[0]|0), (point.pixel[1]|0), (point.pixel[0]|0), (point.pixel[1]|0));
} else {
var pointPrev=this.points[_index - 1];
_g2.drawLine$I$I$I$I((point.pixel[0]|0), (point.pixel[1]|0), (pointPrev.pixel[0]|0), (pointPrev.pixel[1]|0));
}});

Clazz.newMeth(C$, 'drawQuickly$java_awt_Graphics2D',  function (_g2) {
{
if (!this.isReallyVisible$() || (this.list.size$() <= 0) ) {
return;
}p$1.preparePoints.apply(this, []);
}if (this.hasChanged$()) {
this.transformAndProjectPoints$();
} else if (this.needsToProject$()) {
this.projectPoints$();
}_g2.setStroke$java_awt_Stroke(this.getRealStyle$().getLineStroke$());
_g2.setColor$java_awt_Color(this.getRealStyle$().getLineColor$());
var point=this.points[0];
var aPrev=(point.pixel[0]|0);
var bPrev=(point.pixel[1]|0);
_g2.drawLine$I$I$I$I(aPrev, bPrev, aPrev, bPrev);
for (var i=1, n=this.points.length; i < n; i++) {
point=this.points[i];
if (point.connected) {
_g2.drawLine$I$I$I$I((point.pixel[0]|0), (point.pixel[1]|0), aPrev, bPrev);
} else {
_g2.drawLine$I$I$I$I((point.pixel[0]|0), (point.pixel[1]|0), (point.pixel[0]|0), (point.pixel[1]|0));
}aPrev=(point.pixel[0]|0);
bPrev=(point.pixel[1]|0);
}
});

Clazz.newMeth(C$, 'getExtrema$DA$DA',  function (min, max) {
var minX=Infinity;
var maxX=-Infinity;
var minY=Infinity;
var maxY=-Infinity;
var minZ=Infinity;
var maxZ=-Infinity;
var aPoint=Clazz.array(Double.TYPE, [3]);
{
if (!this.isReallyVisible$() || (this.list.size$() <= 0) ) {
return;
}p$1.preparePoints.apply(this, []);
}for (var i=0, n=this.points.length; i < n; i++) {
aPoint[0]=this.points[i].xp;
aPoint[1]=this.points[i].yp;
aPoint[2]=this.points[i].zp;
this.sizeAndToSpaceFrame$DA(aPoint);
minX=Math.min(minX, aPoint[0]);
maxX=Math.max(maxX, aPoint[0]);
minY=Math.min(minY, aPoint[1]);
maxY=Math.max(maxY, aPoint[1]);
minZ=Math.min(minZ, aPoint[2]);
maxZ=Math.max(maxZ, aPoint[2]);
}
min[0]=minX;
max[0]=maxX;
min[1]=minY;
max[1]=maxY;
min[2]=minZ;
max[2]=maxZ;
});

Clazz.newMeth(C$, 'transformAndProjectPoints$',  function () {
for (var i=0, n=this.points.length; i < n; i++) {
this.points[i].transformAndProject$();
}
this.setNeedToProject$Z(false);
this.setElementChanged$Z(false);
});

Clazz.newMeth(C$, 'projectPoints$',  function () {
for (var i=0, n=this.points.length; i < n; i++) {
this.points[i].transformAndProject$();
}
this.setNeedToProject$Z(false);
});

Clazz.newMeth(C$, 'setID$I',  function (id) {
this.datasetID=id;
});

Clazz.newMeth(C$, 'getID$',  function () {
return this.datasetID;
});

Clazz.newMeth(C$, 'getData2D$',  function () {
{
p$1.preparePoints.apply(this, []);
}var data=Clazz.array(Double.TYPE, [3, this.points.length]);
for (var i=0, n=this.points.length; i < n; i++) {
data[0][i]=this.points[i].xp;
data[1][i]=this.points[i].yp;
data[2][i]=this.points[i].zp;
}
return data;
});

Clazz.newMeth(C$, 'getData3D$',  function () {
return null;
});

Clazz.newMeth(C$, 'getColumnNames$',  function () {
return this.inputLabels;
});

Clazz.newMeth(C$, 'getLineColors$',  function () {
return Clazz.array($I$(4), -1, [$I$(5).getLineColor$I(0), $I$(5).getLineColor$I(1), $I$(5).getLineColor$I(2)]);
});

Clazz.newMeth(C$, 'getFillColors$',  function () {
return Clazz.array($I$(4), -1, [this.getStyle$().getFillColor$(), this.getStyle$().getFillColor$(), this.getStyle$().getFillColor$()]);
});

Clazz.newMeth(C$, 'getDataList$',  function () {
return null;
});

Clazz.newMeth(C$, 'getDatasets$',  function () {
return null;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(6,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ElementTrail, "TrailPoint", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.display3d.simple3d.Object3D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.coordinates=Clazz.array(Double.TYPE, [3]);
this.pixel=Clazz.array(Double.TYPE, [3]);
},1);

C$.$fields$=[['Z',['connected'],'D',['xp','yp','zp'],'O',['coordinates','double[]','+pixel']]]

Clazz.newMeth(C$, 'c$$D$D$D$Z',  function (_x, _y, _z, _c) {
;C$.superclazz.c$$org_opensourcephysics_display3d_simple3d_Element$I.apply(this,[this.b$['org.opensourcephysics.display3d.simple3d.ElementTrail'], -1]);C$.$init$.apply(this);
switch (this.b$['org.opensourcephysics.display3d.simple3d.Element'].getAxesMode$.apply(this.b$['org.opensourcephysics.display3d.simple3d.Element'], [])) {
case 0:
this.xp=_x;
this.yp=_y;
this.zp=_z;
break;
case 2:
this.xp=_x;
this.zp=_y;
this.yp=_z;
break;
case 1:
this.yp=_x;
this.xp=_y;
this.zp=_z;
break;
case 3:
this.zp=_x;
this.xp=_y;
this.yp=_z;
break;
case 5:
this.yp=_x;
this.zp=_y;
this.xp=_z;
break;
case 4:
this.zp=_x;
this.yp=_y;
this.xp=_z;
break;
default:
this.xp=_x;
this.yp=_y;
this.zp=_z;
break;
}
this.connected=_c;
}, 1);

Clazz.newMeth(C$, 'transformAndProject$',  function () {
this.coordinates[0]=this.xp;
this.coordinates[1]=this.yp;
this.coordinates[2]=this.zp;
this.b$['org.opensourcephysics.display3d.simple3d.Element'].sizeAndToSpaceFrame$DA.apply(this.b$['org.opensourcephysics.display3d.simple3d.Element'], [this.coordinates]);
this.b$['org.opensourcephysics.display3d.simple3d.Element'].getDrawingPanel3D$.apply(this.b$['org.opensourcephysics.display3d.simple3d.Element'], []).project$DA$DA(this.coordinates, this.pixel);
C$.superclazz.prototype.setDistance$D.apply(this, [this.pixel[2] * this.b$['org.opensourcephysics.display3d.simple3d.Element'].getStyle$.apply(this.b$['org.opensourcephysics.display3d.simple3d.Element'], []).getDepthFactor$()]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ElementTrail, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.ElementTrail','.Loader']);

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
