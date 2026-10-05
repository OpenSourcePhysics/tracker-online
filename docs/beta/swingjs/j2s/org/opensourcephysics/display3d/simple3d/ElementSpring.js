(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),p$1={},I$=[[0,'org.opensourcephysics.display3d.simple3d.ElementSpring','org.opensourcephysics.display3d.simple3d.Resolution','org.opensourcephysics.display3d.simple3d.Object3D','org.opensourcephysics.display3d.simple3d.utils.VectorAlgebra',['org.opensourcephysics.display3d.simple3d.ElementSpring','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ElementSpring", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display3d.simple3d.Element', 'org.opensourcephysics.display3d.core.ElementSpring');
C$.$classes$=[['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.radius=0.1;
this.loops=-1;
this.pointsPerLoop=-1;
this.segments=0;
this.aPoints=(null|0);
this.bPoints=(null|0);
this.points=null;
this.pixel=Clazz.array(Double.TYPE, [3]);
this.objects=null;
{
this.getStyle$().setResolution$org_opensourcephysics_display3d_core_Resolution(Clazz.new_($I$(2,1).c$$I$I$I,[8, 15, 1]));
}
},1);

C$.$fields$=[['D',['radius'],'I',['loops','pointsPerLoop','segments'],'O',['aPoints','int[]','+bPoints','points','double[][]','pixel','double[]','objects','org.opensourcephysics.display3d.simple3d.Object3D[]']]]

Clazz.newMeth(C$, 'setRadius$D',  function (radius) {
this.radius=radius;
this.setElementChanged$Z(true);
});

Clazz.newMeth(C$, 'getRadius$',  function () {
return this.radius;
});

Clazz.newMeth(C$, 'getObjects3D$',  function () {
if (!this.isReallyVisible$()) {
return null;
}if (this.hasChanged$()) {
p$1.computePoints.apply(this, []);
this.projectPoints$();
} else if (this.needsToProject$()) {
this.projectPoints$();
}return this.objects;
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$I',  function (_g2, _index) {
var theColor=this.getDrawingPanel3D$().projectColor$java_awt_Color$D(this.getRealStyle$().getLineColor$(), this.objects[_index].getDistance$());
_g2.setColor$java_awt_Color(theColor);
_g2.setStroke$java_awt_Stroke(this.getRealStyle$().getLineStroke$());
_g2.drawLine$I$I$I$I(this.aPoints[_index], this.bPoints[_index], this.aPoints[_index + 1], this.bPoints[_index + 1]);
});

Clazz.newMeth(C$, 'drawQuickly$java_awt_Graphics2D',  function (_g2) {
if (!this.isReallyVisible$()) {
return;
}if (this.hasChanged$()) {
p$1.computePoints.apply(this, []);
this.projectPoints$();
} else if (this.needsToProject$()) {
this.projectPoints$();
}_g2.setStroke$java_awt_Stroke(this.getRealStyle$().getLineStroke$());
_g2.setColor$java_awt_Color(this.getRealStyle$().getLineColor$());
_g2.drawPolyline$IA$IA$I(this.aPoints, this.bPoints, this.segments + 1);
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
p$1.computePoints.apply(this, []);
this.projectPoints$();
} else if (this.needsToProject$()) {
this.projectPoints$();
}if (this.targetPosition.isEnabled$() && (Math.abs(this.aPoints[0] - x) < 5) && (Math.abs(this.bPoints[0] - y) < 5)  ) {
return this.targetPosition;
}if (this.targetSize.isEnabled$() && (Math.abs(this.aPoints[this.segments] - x) < 5) && (Math.abs(this.bPoints[this.segments] - y) < 5)  ) {
return this.targetSize;
}return null;
});

Clazz.newMeth(C$, 'projectPoints$',  function () {
for (var i=0; i < this.segments; i++) {
this.getDrawingPanel3D$().project$DA$DA(this.points[i], this.pixel);
this.aPoints[i]=(this.pixel[0]|0);
this.bPoints[i]=(this.pixel[1]|0);
this.objects[i].setDistance$D(this.pixel[2] * this.getStyle$().getDepthFactor$());
}
this.getDrawingPanel3D$().project$DA$DA(this.points[this.segments], this.pixel);
this.aPoints[this.segments]=(this.pixel[0]|0);
this.bPoints[this.segments]=(this.pixel[1]|0);
this.setNeedToProject$Z(false);
});

Clazz.newMeth(C$, 'computePoints',  function () {
var theLoops=this.loops;
var thePPL=this.pointsPerLoop;
var res=this.getRealStyle$().getResolution$();
if (res != null ) {
switch (res.getType$()) {
case 0:
theLoops=Math.max(res.getN1$(), 0);
thePPL=Math.max(res.getN2$(), 1);
break;
}
}if ((theLoops == this.loops) && (thePPL == this.pointsPerLoop) ) {
} else {
this.loops=theLoops;
this.pointsPerLoop=thePPL;
this.segments=this.loops * this.pointsPerLoop + 3;
this.points=Clazz.array(Double.TYPE, [this.segments + 1, 3]);
this.aPoints=Clazz.array(Integer.TYPE, [this.segments + 1]);
this.bPoints=Clazz.array(Integer.TYPE, [this.segments + 1]);
this.objects=Clazz.array($I$(3), [this.segments]);
for (var i=0; i < this.segments; i++) {
this.objects[i]=Clazz.new_($I$(3,1).c$$org_opensourcephysics_display3d_simple3d_Element$I,[this, i]);
}
}var size=Clazz.array(Double.TYPE, -1, [this.getSizeX$(), this.getSizeY$(), this.getSizeZ$()]);
var u1=$I$(4).normalTo$DA(size);
var u2=$I$(4,"normalize$DA",[$I$(4).crossProduct$DA$DA(size, u1)]);
var delta=6.283185307179586 / this.pointsPerLoop;
var pre=(this.pointsPerLoop/2|0);
for (var i=0; i <= this.segments; i++) {
var k;
if (i < pre) {
k=0;
} else if (i < this.pointsPerLoop) {
k=i - pre;
} else if (i > (this.segments - pre)) {
k=0;
} else if (i > (this.segments - this.pointsPerLoop)) {
k=this.segments - i - pre ;
} else {
k=pre;
}var angle=i * delta;
var cos=Math.cos(angle);
var sin=Math.sin(angle);
this.points[i][0]=i * this.getSizeX$() / this.segments + k * this.radius * (cos * u1[0] + sin * u2[0])  / pre;
this.points[i][1]=i * this.getSizeY$() / this.segments + k * this.radius * (cos * u1[1] + sin * u2[1])  / pre;
this.points[i][2]=i * this.getSizeZ$() / this.segments + k * this.radius * (cos * u1[2] + sin * u2[2])  / pre;
this.toSpaceFrame$DA(this.points[i]);
}
this.setElementChanged$Z(false);
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(5,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ElementSpring, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.ElementSpring','.Loader']);

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
