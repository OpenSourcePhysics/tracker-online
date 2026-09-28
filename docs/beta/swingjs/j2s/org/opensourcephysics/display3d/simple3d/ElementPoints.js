(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),I$=[[0,'org.opensourcephysics.display3d.simple3d.ElementPoints','org.opensourcephysics.display3d.simple3d.Object3D',['org.opensourcephysics.display3d.simple3d.ElementPoints','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ElementPoints", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display3d.simple3d.Element', 'org.opensourcephysics.display3d.core.ElementPoints');
C$.$classes$=[['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.coordinates=Clazz.array(Double.TYPE, [0, 0]);
this.aPoints=(null|0);
this.bPoints=(null|0);
this.transformedCoordinates=Clazz.array(Double.TYPE, [0, 0]);
this.origin=Clazz.array(Double.TYPE, [3]);
this.pixel=Clazz.array(Double.TYPE, [3]);
this.originpixel=Clazz.array(Double.TYPE, [3]);
this.pointObjects=null;
},1);

C$.$fields$=[['O',['coordinates','double[][]','aPoints','int[]','+bPoints','transformedCoordinates','double[][]','origin','double[]','+pixel','+originpixel','pointObjects','org.opensourcephysics.display3d.simple3d.Object3D[]']]]

Clazz.newMeth(C$, 'setData$DAA',  function (data) {
if (this.coordinates.length != data.length) {
var n=data.length;
this.coordinates=Clazz.array(Double.TYPE, [n, 3]);
this.transformedCoordinates=Clazz.array(Double.TYPE, [n, 3]);
this.aPoints=Clazz.array(Integer.TYPE, [n]);
this.bPoints=Clazz.array(Integer.TYPE, [n]);
this.pointObjects=Clazz.array($I$(2), [n]);
for (var i=0; i < n; i++) {
this.pointObjects[i]=Clazz.new_($I$(2,1).c$$org_opensourcephysics_display3d_simple3d_Element$I,[this, i]);
}
}for (var i=0, n=data.length; i < n; i++) {
System.arraycopy$O$I$O$I$I(data[i], 0, this.coordinates[i], 0, 3);
}
this.setElementChanged$Z(true);
});

Clazz.newMeth(C$, 'getData$',  function () {
var data=Clazz.array(Double.TYPE, [this.coordinates.length, 3]);
for (var i=0, n=this.coordinates.length; i < n; i++) {
System.arraycopy$O$I$O$I$I(this.coordinates[i], 0, data[i], 0, 3);
}
return data;
});

Clazz.newMeth(C$, 'getExtrema$DA$DA',  function (min, max) {
var minX=Infinity;
var maxX=-Infinity;
var minY=Infinity;
var maxY=-Infinity;
var minZ=Infinity;
var maxZ=-Infinity;
var aPoint=Clazz.array(Double.TYPE, [3]);
for (var i=0, n=this.coordinates.length; i < n; i++) {
System.arraycopy$O$I$O$I$I(this.coordinates[i], 0, aPoint, 0, 3);
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

Clazz.newMeth(C$, 'getObjects3D$',  function () {
if (!this.isReallyVisible$() || (this.coordinates.length == 0) ) {
return null;
}if (this.hasChanged$()) {
this.transformAndProject$();
} else if (this.needsToProject$()) {
this.project$();
}return this.pointObjects;
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$I',  function (_g2, _index) {
var theColor=this.getDrawingPanel3D$().projectColor$java_awt_Color$D(this.getRealStyle$().getLineColor$(), this.pointObjects[_index].getDistance$());
_g2.setStroke$java_awt_Stroke(this.getRealStyle$().getLineStroke$());
_g2.setColor$java_awt_Color(theColor);
_g2.drawLine$I$I$I$I(this.aPoints[_index], this.bPoints[_index], this.aPoints[_index], this.bPoints[_index]);
});

Clazz.newMeth(C$, 'drawQuickly$java_awt_Graphics2D',  function (_g2) {
if (!this.isReallyVisible$() || (this.coordinates.length == 0) ) {
return;
}if (this.hasChanged$()) {
this.transformAndProject$();
} else if (this.needsToProject$()) {
this.project$();
}_g2.setStroke$java_awt_Stroke(this.getRealStyle$().getLineStroke$());
_g2.setColor$java_awt_Color(this.getRealStyle$().getLineColor$());
for (var i=0, n=this.coordinates.length; i < n; i++) {
_g2.drawLine$I$I$I$I(this.aPoints[i], this.bPoints[i], this.aPoints[i], this.bPoints[i]);
}
});

Clazz.newMeth(C$, 'getTargetHit$I$I',  function (x, y) {
if (!this.isReallyVisible$() || (this.coordinates.length == 0) ) {
return null;
}if (this.hasChanged$()) {
this.transformAndProject$();
} else if (this.needsToProject$()) {
this.project$();
}if (this.targetPosition.isEnabled$() && (Math.abs(this.originpixel[0] - x) < 5 ) && (Math.abs(this.originpixel[1] - y) < 5 )  ) {
return this.targetPosition;
}return null;
});

Clazz.newMeth(C$, 'transformAndProject$',  function () {
this.origin[0]=this.origin[1]=this.origin[2]=0.0;
this.sizeAndToSpaceFrame$DA(this.origin);
this.getDrawingPanel3D$().project$DA$DA(this.origin, this.originpixel);
for (var i=0, n=this.coordinates.length; i < n; i++) {
System.arraycopy$O$I$O$I$I(this.coordinates[i], 0, this.transformedCoordinates[i], 0, 3);
this.sizeAndToSpaceFrame$DA(this.transformedCoordinates[i]);
this.getDrawingPanel3D$().project$DA$DA(this.transformedCoordinates[i], this.pixel);
this.aPoints[i]=(this.pixel[0]|0);
this.bPoints[i]=(this.pixel[1]|0);
this.pointObjects[i].setDistance$D(this.pixel[2] * this.getStyle$().getDepthFactor$());
}
this.setElementChanged$Z(false);
this.setNeedToProject$Z(false);
});

Clazz.newMeth(C$, 'project$',  function () {
for (var i=0, n=this.coordinates.length; i < n; i++) {
this.getDrawingPanel3D$().project$DA$DA(this.transformedCoordinates[i], this.pixel);
this.aPoints[i]=(this.pixel[0]|0);
this.bPoints[i]=(this.pixel[1]|0);
this.pointObjects[i].setDistance$D(this.pixel[2] * this.getStyle$().getDepthFactor$());
}
this.setNeedToProject$Z(false);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(3,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ElementPoints, "Loader", function(){
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
