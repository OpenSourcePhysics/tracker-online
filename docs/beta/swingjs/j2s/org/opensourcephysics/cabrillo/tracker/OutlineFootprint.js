(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.awt.Point','org.opensourcephysics.cabrillo.tracker.ShapeIcon','org.opensourcephysics.display.ResizableIcon','java.awt.BasicStroke','org.opensourcephysics.cabrillo.tracker.MultiShape','java.awt.Shape','java.awt.Stroke']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OutlineFootprint", null, 'org.opensourcephysics.cabrillo.tracker.LineFootprint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['spread']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
this.setStroke$java_awt_BasicStroke(this.baseStroke);
}, 1);

Clazz.newMeth(C$, 'setSpread$I',  function (spread) {
this.spread=spread;
});

Clazz.newMeth(C$, 'getSpread$',  function () {
return this.spread;
});

Clazz.newMeth(C$, 'getIcon$I$I',  function (w, h) {
var points=Clazz.array($I$(1), -1, [Clazz.new_($I$(1,1)), Clazz.new_($I$(1,1).c$$I$I,[w - 2, 2 - h])]);
var prevSpread=this.spread;
this.spread=1;
var shape=this.getShape$java_awt_PointA$I(points, 1);
var icon=Clazz.new_($I$(2,1).c$$org_opensourcephysics_cabrillo_tracker_MultiShape$I$I,[shape, w, h]);
icon.setColor$java_awt_Color(this.color);
this.spread=prevSpread;
return Clazz.new_($I$(3,1).c$$javax_swing_Icon,[icon]);
});

Clazz.newMeth(C$, 'setStroke$java_awt_BasicStroke',  function (stroke) {
C$.superclazz.prototype.setStroke$java_awt_BasicStroke.apply(this, [stroke]);
});

Clazz.newMeth(C$, 'getShape$java_awt_PointA$I',  function (points, scale) {
var p1=points[0];
var p2=points[1];
var theta=Math.atan2(p1.y - p2.y, p1.x - p2.x);
this.transform.setToRotation$D$D$D(theta, p2.x, p2.y);
this.transform.translate$D$D(p2.x, p2.y);
var d=p1.distance$java_awt_geom_Point2D(p2);
this.path.reset$();
this.path.moveTo$F$F(0, -1 - this.spread);
this.path.lineTo$F$F(0, 1 + this.spread);
this.path.lineTo$F$F(d, 1 + this.spread);
this.path.lineTo$F$F(d, -1 - this.spread);
this.path.closePath$();
var w=Math.min(this.spread + 1, 4);
this.path.moveTo$F$F(d / 2, w);
this.path.lineTo$F$F(d / 2, -w);
if (this.getSpread$() > 4 + 2 * scale) {
this.path.moveTo$F$F(0, 0);
this.path.lineTo$F$F(d, 0);
}var outline=this.transform.createTransformedShape$java_awt_Shape(this.path);
var lineWidth=Math.min(scale * this.baseStroke.getLineWidth$(), this.spread + 1);
lineWidth=Math.max(lineWidth, this.baseStroke.getLineWidth$());
if (this.stroke == null  || this.stroke.getLineWidth$() != lineWidth  ) {
this.stroke=Clazz.new_($I$(4,1).c$$F,[lineWidth]);
}this.path.reset$();
this.path.moveTo$F$F(d, -1 - this.spread);
this.path.lineTo$F$F(d, 1 + this.spread);
this.hitShapes[0]=this.transform.createTransformedShape$java_awt_Shape(this.path);
this.path.reset$();
this.path.moveTo$F$F(0, -1 - this.spread);
this.path.lineTo$F$F(0, 1 + this.spread);
this.hitShapes[1]=this.transform.createTransformedShape$java_awt_Shape(this.path);
var f=0.45;
this.path.reset$();
this.path.moveTo$F$F(d * (0.5 + f), 0);
this.path.lineTo$F$F(d * (0.5 - f), 0);
this.hitShapes[2]=this.transform.createTransformedShape$java_awt_Shape(this.path);
return Clazz.new_([Clazz.array($I$(6), -1, [outline])],$I$(5,1).c$$java_awt_ShapeA).andStroke$java_awt_StrokeA(Clazz.array($I$(7), -1, [this.stroke]));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
