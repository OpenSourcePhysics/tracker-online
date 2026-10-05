(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.awt.Rectangle','java.awt.Point','org.opensourcephysics.cabrillo.tracker.ShapeIcon','org.opensourcephysics.display.ResizableIcon','org.opensourcephysics.cabrillo.tracker.LineFootprint','java.awt.BasicStroke','org.opensourcephysics.cabrillo.tracker.MultiShape','java.awt.Shape']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DoubleCrosshairFootprint", null, 'org.opensourcephysics.cabrillo.tracker.LineFootprint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['size'],'O',['targetShape','java.awt.Shape','+hitShape']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
this.setCrosshairSize$I$I(4, 0);
}, 1);

Clazz.newMeth(C$, 'setCrosshairSize$I$I',  function (out, $in) {
this.size=out;
this.path.reset$();
this.path.moveTo$F$F(-out, 0);
this.path.lineTo$F$F(-$in, 0);
this.path.moveTo$F$F(out, 0);
this.path.lineTo$F$F($in, 0);
this.path.moveTo$F$F(0, out);
this.path.lineTo$F$F(0, $in);
this.path.moveTo$F$F(0, -out);
this.path.lineTo$F$F(0, -$in);
this.transform.setToIdentity$();
this.targetShape=this.transform.createTransformedShape$java_awt_Shape(this.path);
this.hitShape=Clazz.new_([(-this.size/2|0), (-this.size/2|0), this.size, this.size],$I$(1,1).c$$I$I$I$I);
});

Clazz.newMeth(C$, 'getIcon$I$I',  function (w, h) {
var points=Clazz.array($I$(2), -1, [Clazz.new_($I$(2,1)), Clazz.new_($I$(2,1).c$$I$I,[w - 2, 2 - h])]);
var shape=p$1.getShape$java_awt_PointA$Z$I.apply(this, [points, false, 1]);
var icon=Clazz.new_($I$(3,1).c$$org_opensourcephysics_cabrillo_tracker_MultiShape$I$I,[shape, w, h]);
icon.setColor$java_awt_Color(this.color);
icon.setStroke$java_awt_BasicStroke(this.stroke);
return Clazz.new_($I$(4,1).c$$javax_swing_Icon,[icon]);
});

Clazz.newMeth(C$, 'setStroke$java_awt_BasicStroke',  function (stroke) {
if (stroke == null ) return;
this.baseStroke=stroke;
});

Clazz.newMeth(C$, 'getShape$java_awt_PointA$I',  function (points, scale) {
return p$1.getShape$java_awt_PointA$Z$I.apply(this, [points, true, scale]);
});

Clazz.newMeth(C$, 'getShape$java_awt_PointA$Z$I',  function (points, bothEnds, scale) {
var p1=points[0];
var p2=points[1];
var d=p1.distance$java_awt_geom_Point2D(p2);
var center=d / 2;
var l=Math.max(d - scale * 2 * (this.size + 3) , this.size);
this.transform.setToTranslation$D$D(p1.x, p1.y);
if (scale > 1) {
this.transform.scale$D$D(scale, scale);
}var target1=this.transform.createTransformedShape$java_awt_Shape(this.targetShape);
this.hitShapes[0]=this.transform.createTransformedShape$java_awt_Shape(this.hitShape);
this.transform.setToTranslation$D$D(p2.x, p2.y);
if (scale > 1) {
this.transform.scale$D$D(scale, scale);
}var target2=this.transform.createTransformedShape$java_awt_Shape(this.targetShape);
this.hitShapes[1]=this.transform.createTransformedShape$java_awt_Shape(this.hitShape);
var theta=Math.atan2(p1.y - p2.y, p1.x - p2.x);
if (Double.isNaN$D(theta)) {
theta=0;
}this.transform.setToRotation$D$D$D(theta, p2.x, p2.y);
this.transform.translate$D$D(p2.x, p2.y);
$I$(5).hitLine.setLine$D$D$D$D(center - 0.3 * l, 0, center + 0.3 * l, 0);
this.hitShapes[2]=this.transform.createTransformedShape$java_awt_Shape($I$(5).hitLine);
$I$(5).hitLine.setLine$D$D$D$D(center + 0.35 * l, 0, center + 0.45 * l, 0);
this.hitShapes[3]=this.transform.createTransformedShape$java_awt_Shape($I$(5).hitLine);
$I$(5).hitLine.setLine$D$D$D$D(center - 0.45 * l, 0, center - 0.35 * l, 0);
this.hitShapes[4]=this.transform.createTransformedShape$java_awt_Shape($I$(5).hitLine);
this.path.reset$();
this.path.moveTo$F$F(center - l / 2, 0);
this.path.lineTo$F$F(center + l / 2, 0);
var line=this.transform.createTransformedShape$java_awt_Shape(this.path);
if (this.stroke == null  || this.stroke.getLineWidth$() != scale * this.baseStroke.getLineWidth$()  ) {
this.stroke=Clazz.new_([scale * this.baseStroke.getLineWidth$()],$I$(6,1).c$$F);
this.rotatorStroke=Clazz.new_([this.stroke.getLineWidth$(), 0, 0, 8, $I$(5).WIDE_DOTTED_LINE, this.stroke.getDashPhase$()],$I$(6,1).c$$F$I$I$F$FA$F);
}return bothEnds ? Clazz.new_([Clazz.array($I$(8), -1, [line, target1, target2])],$I$(7,1).c$$java_awt_ShapeA) : Clazz.new_([Clazz.array($I$(8), -1, [line, target2])],$I$(7,1).c$$java_awt_ShapeA);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
