(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),I$=[[0,'org.opensourcephysics.display3d.simple3d.ElementSegment','org.opensourcephysics.display3d.simple3d.Object3D',['org.opensourcephysics.display3d.simple3d.ElementSegment','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ElementSegment", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display3d.simple3d.Element', 'org.opensourcephysics.display3d.core.ElementSegment');
C$.$classes$=[['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.div=-1;
this.aCoord=(null|0);
this.bCoord=(null|0);
this.objects=null;
this.points=null;
this.coordinates=Clazz.array(Double.TYPE, [3]);
this.pixel=Clazz.array(Double.TYPE, [3]);
{
this.getStyle$().setRelativePosition$I(5);
}
},1);

C$.$fields$=[['I',['div'],'O',['aCoord','int[]','+bCoord','objects','org.opensourcephysics.display3d.simple3d.Object3D[]','points','double[][]','coordinates','double[]','+pixel']]]

Clazz.newMeth(C$, 'getObjects3D$',  function () {
if (!this.isReallyVisible$()) {
return null;
}if (this.hasChanged$()) {
this.computeDivisions$();
this.projectPoints$();
} else if (this.needsToProject$()) {
this.projectPoints$();
}return this.objects;
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$I',  function (_g2, _index) {
var theColor=this.getDrawingPanel3D$().projectColor$java_awt_Color$D(this.getRealStyle$().getLineColor$(), this.objects[_index].getDistance$());
_g2.setStroke$java_awt_Stroke(this.getRealStyle$().getLineStroke$());
_g2.setColor$java_awt_Color(theColor);
_g2.drawLine$I$I$I$I(this.aCoord[_index], this.bCoord[_index], this.aCoord[_index + 1], this.bCoord[_index + 1]);
});

Clazz.newMeth(C$, 'drawQuickly$java_awt_Graphics2D',  function (_g2) {
if (!this.isReallyVisible$()) {
return;
}if (this.hasChanged$()) {
this.computeDivisions$();
this.projectPoints$();
} else if (this.needsToProject$()) {
this.projectPoints$();
}_g2.setStroke$java_awt_Stroke(this.getRealStyle$().getLineStroke$());
_g2.setColor$java_awt_Color(this.getRealStyle$().getLineColor$());
_g2.drawLine$I$I$I$I(this.aCoord[0], this.bCoord[0], this.aCoord[this.div], this.bCoord[this.div]);
});

Clazz.newMeth(C$, 'getExtrema$DA$DA',  function (min, max) {
min[0]=0;
max[0]=1;
min[1]=0;
max[1]=1;
min[2]=0;
max[2]=1;
this.sizeAndToSpaceFrame$DA(min);
this.sizeAndToSpaceFrame$DA(max);
});

Clazz.newMeth(C$, 'getTargetHit$I$I',  function (x, y) {
if (!this.isReallyVisible$()) {
return null;
}if (this.hasChanged$()) {
this.computeDivisions$();
this.projectPoints$();
} else if (this.needsToProject$()) {
this.projectPoints$();
}if (this.targetPosition.isEnabled$() && (Math.abs(this.aCoord[0] - x) < 5) && (Math.abs(this.bCoord[0] - y) < 5)  ) {
return this.targetPosition;
}if (this.targetSize.isEnabled$() && (Math.abs(this.aCoord[this.div] - x) < 5) && (Math.abs(this.bCoord[this.div] - y) < 5)  ) {
return this.targetSize;
}return null;
});

Clazz.newMeth(C$, 'projectPoints$',  function () {
for (var i=0; i < this.div; i++) {
this.getDrawingPanel3D$().project$DA$DA(this.points[i], this.pixel);
this.aCoord[i]=(this.pixel[0]|0);
this.bCoord[i]=(this.pixel[1]|0);
for (var j=0; j < 3; j++) {
this.coordinates[j]=(this.points[i][j] + this.points[i + 1][j]) / 2;
}
this.getDrawingPanel3D$().project$DA$DA(this.coordinates, this.pixel);
this.objects[i].setDistance$D(this.pixel[2] * this.getStyle$().getDepthFactor$());
}
this.getDrawingPanel3D$().project$DA$DA(this.points[this.div], this.pixel);
this.aCoord[this.div]=(this.pixel[0]|0);
this.bCoord[this.div]=(this.pixel[1]|0);
this.setNeedToProject$Z(false);
});

Clazz.newMeth(C$, 'computeDivisions$',  function () {
var theDiv=1;
var res=this.getRealStyle$().getResolution$();
if (res != null ) {
switch (res.getType$()) {
case 1:
theDiv=Math.max(Long.$ival(Math.round$D(0.49 + this.getDiagonalSize$() / res.getMaxLength$())), 1);
break;
case 0:
theDiv=Math.max(res.getN1$(), 1);
break;
}
}if (this.div != theDiv) {
this.div=theDiv;
this.points=Clazz.array(Double.TYPE, [this.div + 1, 3]);
this.aCoord=Clazz.array(Integer.TYPE, [this.div + 1]);
this.bCoord=Clazz.array(Integer.TYPE, [this.div + 1]);
this.objects=Clazz.array($I$(2), [this.div]);
for (var i=0; i < this.div; i++) {
this.objects[i]=Clazz.new_($I$(2,1).c$$org_opensourcephysics_display3d_simple3d_Element$I,[this, i]);
}
}var first=0;
var last=1;
switch (this.getStyle$().getRelativePosition$()) {
default:
first=0;
last=1;
break;
case 0:
first=-0.5;
last=0.5;
break;
case 8:
first=1;
last=0;
break;
}
this.points[0][0]=this.points[0][1]=this.points[0][2]=first;
this.points[this.div][0]=this.points[this.div][1]=this.points[this.div][2]=last;
var delta=(last - first) / this.div;
for (var i=1; i < this.div; i++) {
this.points[i][0]=this.points[i][1]=this.points[i][2]=first + i * delta;
}
for (var i=0; i <= this.div; i++) {
this.sizeAndToSpaceFrame$DA(this.points[i]);
}
this.setElementChanged$Z(false);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(3,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ElementSegment, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.ElementSegment','.Loader']);

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
