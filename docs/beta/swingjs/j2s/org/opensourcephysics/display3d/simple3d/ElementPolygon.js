(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),I$=[[0,'org.opensourcephysics.display3d.simple3d.ElementPolygon','org.opensourcephysics.display3d.simple3d.Object3D',['org.opensourcephysics.display3d.simple3d.ElementPolygon','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ElementPolygon", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display3d.simple3d.Element', 'org.opensourcephysics.display3d.core.ElementPolygon');
C$.$classes$=[['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.closed=true;
this.coordinates=Clazz.array(Double.TYPE, [0, 0]);
this.aPoints=(null|0);
this.bPoints=(null|0);
this.transformedCoordinates=Clazz.array(Double.TYPE, [0, 0]);
this.center=Clazz.array(Double.TYPE, [3]);
this.pixel=Clazz.array(Double.TYPE, [3]);
this.originpixel=Clazz.array(Double.TYPE, [3]);
this.lineObjects=null;
this.closedObject=Clazz.array($I$(2), -1, [Clazz.new_($I$(2,1).c$$org_opensourcephysics_display3d_simple3d_Element$I,[this, -1])]);
},1);

C$.$fields$=[['Z',['closed'],'O',['coordinates','double[][]','aPoints','int[]','+bPoints','transformedCoordinates','double[][]','center','double[]','+pixel','+originpixel','lineObjects','org.opensourcephysics.display3d.simple3d.Object3D[]','+closedObject']]]

Clazz.newMeth(C$, 'setClosed$Z',  function (closed) {
this.closed=closed;
});

Clazz.newMeth(C$, 'isClosed$',  function () {
return this.closed;
});

Clazz.newMeth(C$, 'setData$DAA',  function (data) {
if (this.coordinates.length != data.length) {
var n=data.length;
this.coordinates=Clazz.array(Double.TYPE, [n, 3]);
this.transformedCoordinates=Clazz.array(Double.TYPE, [n, 3]);
this.aPoints=Clazz.array(Integer.TYPE, [n]);
this.bPoints=Clazz.array(Integer.TYPE, [n]);
this.lineObjects=Clazz.array($I$(2), [n]);
for (var i=0; i < n; i++) {
this.lineObjects[i]=Clazz.new_($I$(2,1).c$$org_opensourcephysics_display3d_simple3d_Element$I,[this, i]);
}
}for (var i=0, n=data.length; i < n; i++) {
System.arraycopy$O$I$O$I$I(data[i], 0, this.coordinates[i], 0, 3);
}
this.setElementChanged$Z(true);
});

Clazz.newMeth(C$, 'setData$DA$DA$DA',  function (xArray, yArray, zArray) {
if ((xArray == null ) || (yArray == null ) || (zArray == null )  ) {
return;
}var n=Math.max(xArray.length, Math.max(yArray.length, zArray.length));
if (this.coordinates.length != n) {
this.coordinates=Clazz.array(Double.TYPE, [n, 3]);
this.transformedCoordinates=Clazz.array(Double.TYPE, [n, 3]);
this.aPoints=Clazz.array(Integer.TYPE, [n]);
this.bPoints=Clazz.array(Integer.TYPE, [n]);
this.lineObjects=Clazz.array($I$(2), [n]);
for (var i=0; i < n; i++) {
this.lineObjects[i]=Clazz.new_($I$(2,1).c$$org_opensourcephysics_display3d_simple3d_Element$I,[this, i]);
}
}if ((xArray.length == yArray.length) && (xArray.length == zArray.length) ) {
for (var i=0; i < n; i++) {
this.coordinates[i][0]=xArray[i];
this.coordinates[i][1]=yArray[i];
this.coordinates[i][2]=zArray[i];
}
} else {
var lastX=xArray[xArray.length - 1];
var lastY=yArray[yArray.length - 1];
var lastZ=zArray[zArray.length - 1];
for (var i=0; i < n; i++) {
this.coordinates[i][0]=(i < xArray.length) ? xArray[i] : lastX;
this.coordinates[i][1]=(i < yArray.length) ? yArray[i] : lastY;
this.coordinates[i][2]=(i < zArray.length) ? zArray[i] : lastZ;
}
}this.setElementChanged$Z(true);
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
}if (this.closed && this.getRealStyle$().isDrawingFill$() ) {
return this.closedObject;
}return this.lineObjects;
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$I',  function (_g2, _index) {
if (_index < 0) {
var theFillColor=this.getDrawingPanel3D$().projectColor$java_awt_Color$D(this.getRealStyle$().getFillColor$(), this.closedObject[0].getDistance$());
_g2.setPaint$java_awt_Paint(theFillColor);
_g2.fillPolygon$IA$IA$I(this.aPoints, this.bPoints, this.aPoints.length);
if (this.getRealStyle$().isDrawingLines$()) {
var theColor=this.getDrawingPanel3D$().projectColor$java_awt_Color$D(this.getRealStyle$().getLineColor$(), this.closedObject[0].getDistance$());
_g2.setStroke$java_awt_Stroke(this.getRealStyle$().getLineStroke$());
_g2.setColor$java_awt_Color(theColor);
var n=this.aPoints.length - 1;
for (var i=0; i < n; i++) {
_g2.drawLine$I$I$I$I(this.aPoints[i], this.bPoints[i], this.aPoints[i + 1], this.bPoints[i + 1]);
}
_g2.drawLine$I$I$I$I(this.aPoints[n], this.bPoints[n], this.aPoints[0], this.bPoints[0]);
}return;
}if (!this.getRealStyle$().isDrawingLines$()) {
return;
}var theColor=this.getDrawingPanel3D$().projectColor$java_awt_Color$D(this.getRealStyle$().getLineColor$(), this.lineObjects[_index].getDistance$());
_g2.setStroke$java_awt_Stroke(this.getRealStyle$().getLineStroke$());
_g2.setColor$java_awt_Color(theColor);
var sides=this.aPoints.length - 1;
if (_index < sides) {
_g2.drawLine$I$I$I$I(this.aPoints[_index], this.bPoints[_index], this.aPoints[_index + 1], this.bPoints[_index + 1]);
} else {
_g2.drawLine$I$I$I$I(this.aPoints[sides], this.bPoints[sides], this.aPoints[0], this.bPoints[0]);
}});

Clazz.newMeth(C$, 'drawQuickly$java_awt_Graphics2D',  function (_g2) {
if (!this.isReallyVisible$() || (this.coordinates.length == 0) ) {
return;
}if (this.hasChanged$()) {
this.transformAndProject$();
} else if (this.needsToProject$()) {
this.project$();
}_g2.setStroke$java_awt_Stroke(this.getRealStyle$().getLineStroke$());
_g2.setColor$java_awt_Color(this.getRealStyle$().getLineColor$());
_g2.drawPolyline$IA$IA$I(this.aPoints, this.bPoints, this.aPoints.length);
var sides=this.aPoints.length - 1;
if (this.closed) {
_g2.drawLine$I$I$I$I(this.aPoints[sides], this.bPoints[sides], this.aPoints[0], this.bPoints[0]);
}});

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
this.center[0]=this.center[1]=this.center[2]=0.0;
this.sizeAndToSpaceFrame$DA(this.center);
this.getDrawingPanel3D$().project$DA$DA(this.center, this.originpixel);
this.center[0]=this.center[1]=this.center[2]=0.0;
for (var i=0, n=this.coordinates.length; i < n; i++) {
for (var k=0; k < 3; k++) {
this.center[k]+=this.coordinates[i][k];
this.transformedCoordinates[i][k]=this.coordinates[i][k];
}
this.sizeAndToSpaceFrame$DA(this.transformedCoordinates[i]);
this.getDrawingPanel3D$().project$DA$DA(this.transformedCoordinates[i], this.pixel);
this.aPoints[i]=(this.pixel[0]|0);
this.bPoints[i]=(this.pixel[1]|0);
this.lineObjects[i].setDistance$D(this.pixel[2] * this.getStyle$().getDepthFactor$());
}
if (!this.closed) {
this.lineObjects[this.coordinates.length - 1].setDistance$D(NaN);
}for (var k=0; k < 3; k++) {
this.center[k]/=this.coordinates.length;
}
if (this.closed && this.getRealStyle$().isDrawingFill$() ) {
this.getDrawingPanel3D$().project$DA$DA(this.center, this.pixel);
this.closedObject[0].setDistance$D(this.pixel[2] * this.getStyle$().getDepthFactor$());
} else {
this.closedObject[0].setDistance$D(NaN);
}this.setElementChanged$Z(false);
this.setNeedToProject$Z(false);
});

Clazz.newMeth(C$, 'project$',  function () {
for (var i=0, n=this.coordinates.length; i < n; i++) {
this.getDrawingPanel3D$().project$DA$DA(this.transformedCoordinates[i], this.pixel);
this.aPoints[i]=(this.pixel[0]|0);
this.bPoints[i]=(this.pixel[1]|0);
this.lineObjects[i].setDistance$D(this.pixel[2] * this.getStyle$().getDepthFactor$());
}
if (!this.closed) {
this.lineObjects[this.coordinates.length - 1].setDistance$D(NaN);
}if (this.closed && this.getRealStyle$().isDrawingFill$() ) {
this.getDrawingPanel3D$().project$DA$DA(this.center, this.pixel);
this.closedObject[0].setDistance$D(this.pixel[2] * this.getStyle$().getDepthFactor$());
} else {
this.closedObject[0].setDistance$D(NaN);
}this.setNeedToProject$Z(false);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(3,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ElementPolygon, "Loader", function(){
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
