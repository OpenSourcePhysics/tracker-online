(function(){var P$=Clazz.newPackage("org.opensourcephysics.display3d.simple3d"),p$1={},I$=[[0,'org.opensourcephysics.display3d.simple3d.ElementCircle','org.opensourcephysics.display3d.simple3d.Object3D','java.awt.geom.AffineTransform',['org.opensourcephysics.display3d.simple3d.ElementCircle','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ElementCircle", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display3d.simple3d.Element', 'org.opensourcephysics.display3d.core.ElementCircle');
C$.$classes$=[['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.angle=0.0;
this.coordinates=Clazz.array(Double.TYPE, [3]);
this.size=Clazz.array(Double.TYPE, [3]);
this.pixel=Clazz.array(Double.TYPE, [3]);
this.pixelSize=Clazz.array(Double.TYPE, [2]);
this.objects=Clazz.array($I$(2), -1, [Clazz.new_($I$(2,1).c$$org_opensourcephysics_display3d_simple3d_Element$I,[this, 0])]);
this.transform=Clazz.new_($I$(3,1));
{
this.setSizeXYZ$D$D$D(0, 0, 0);
}
},1);

C$.$fields$=[['D',['angle'],'O',['coordinates','double[]','+size','+pixel','+pixelSize','objects','org.opensourcephysics.display3d.simple3d.Object3D[]','transform','java.awt.geom.AffineTransform']]]

Clazz.newMeth(C$, 'setRotationAngle$D',  function (angle) {
this.angle=angle;
});

Clazz.newMeth(C$, 'getRotationAngle$',  function () {
return this.angle;
});

Clazz.newMeth(C$, 'getObjects3D$',  function () {
if (!this.isReallyVisible$()) {
return null;
}if (this.hasChanged$() || this.needsToProject$() ) {
p$1.projectPoints.apply(this, []);
}return this.objects;
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$I',  function (_g2, _index) {
var theColor=this.getDrawingPanel3D$().projectColor$java_awt_Color$D(this.getRealStyle$().getLineColor$(), this.objects[0].getDistance$());
var theFillColor=this.getDrawingPanel3D$().projectColor$java_awt_Color$D(this.getRealStyle$().getFillColor$(), this.objects[0].getDistance$());
p$1.drawIt$java_awt_Graphics2D$java_awt_Color$java_awt_Color.apply(this, [_g2, theColor, theFillColor]);
});

Clazz.newMeth(C$, 'drawQuickly$java_awt_Graphics2D',  function (_g2) {
if (!this.isReallyVisible$()) {
return;
}if (this.hasChanged$() || this.needsToProject$() ) {
p$1.projectPoints.apply(this, []);
}p$1.drawIt$java_awt_Graphics2D$java_awt_Color$java_awt_Color.apply(this, [_g2, this.getRealStyle$().getLineColor$(), null]);
});

Clazz.newMeth(C$, 'getTargetHit$I$I',  function (x, y) {
if (!this.isReallyVisible$()) {
return null;
}if (this.hasChanged$() || this.needsToProject$() ) {
p$1.projectPoints.apply(this, []);
}if (this.targetPosition.isEnabled$() && (Math.abs(this.pixel[0] - x) < 5 ) && (Math.abs(this.pixel[1] - y) < 5 )  ) {
return this.targetPosition;
}return null;
});

Clazz.newMeth(C$, 'projectPoints',  function () {
this.coordinates[0]=this.coordinates[1]=this.coordinates[2]=0.0;
this.sizeAndToSpaceFrame$DA(this.coordinates);
this.getDrawingPanel3D$().project$DA$DA(this.coordinates, this.pixel);
this.objects[0].setDistance$D(this.pixel[2] * this.getStyle$().getDepthFactor$());
this.size[0]=this.getSizeX$();
this.size[1]=this.getSizeY$();
this.size[2]=this.getSizeZ$();
this.getDrawingPanel3D$().projectSize$DA$DA$DA(this.coordinates, this.size, this.pixelSize);
this.setElementChanged$Z(false);
this.setNeedToProject$Z(false);
}, p$1);

Clazz.newMeth(C$, 'drawIt$java_awt_Graphics2D$java_awt_Color$java_awt_Color',  function (_g2, _color, _fill) {
var xc=((this.pixel[0] - this.pixelSize[0] / 2)|0);
var yc=((this.pixel[1] - this.pixelSize[1] / 2)|0);
_g2.setStroke$java_awt_Stroke(this.getRealStyle$().getLineStroke$());
if (this.angle != 0.0 ) {
_g2=_g2.create$();
this.transform.setTransform$java_awt_geom_AffineTransform(_g2.getTransform$());
this.transform.rotate$D$D$D(-this.angle, this.pixel[0], this.pixel[1]);
_g2.setTransform$java_awt_geom_AffineTransform(this.transform);
}if (this.getRealStyle$().isDrawingFill$() && (_fill != null ) ) {
_g2.setPaint$java_awt_Paint(_fill);
_g2.fillOval$I$I$I$I(xc, yc, (this.pixelSize[0]|0) + 1, (this.pixelSize[1]|0) + 1);
}if (this.getRealStyle$().isDrawingLines$() && (_color != null ) ) {
_g2.setColor$java_awt_Color(_color);
_g2.drawOval$I$I$I$I(xc, yc, (this.pixelSize[0]|0), (this.pixelSize[1]|0));
}if (this.angle != 0.0 ) {
_g2.dispose$();
}}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(4,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ElementCircle, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display3d.core.ElementCircle','.Loader']);

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
