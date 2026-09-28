(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.awt.BasicStroke','java.awt.Point','org.opensourcephysics.cabrillo.tracker.ShapeIcon','org.opensourcephysics.display.ResizableIcon','java.awt.Rectangle','org.opensourcephysics.cabrillo.tracker.MultiShape','java.awt.Shape',['java.awt.geom.Line2D','.Double']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ArrowFootprint", null, 'org.opensourcephysics.cabrillo.tracker.LineFootprint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.stretch=1;
this.tipLength=16;
this.tipWidth=4;
this.openHead=true;
this.headStroke=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['openHead'],'D',['stretch'],'I',['tipLength','tipWidth'],'O',['headStroke','java.awt.BasicStroke','+tipStroke']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setStretch$D',  function (stretch) {
this.stretch=stretch;
});

Clazz.newMeth(C$, 'getStretch$',  function () {
return this.stretch;
});

Clazz.newMeth(C$, 'setTipLength$I',  function (tipLength) {
tipLength=Math.max(32, tipLength);
this.tipWidth=(tipLength/4|0);
this.tipLength=4 * this.tipWidth;
});

Clazz.newMeth(C$, 'setSolidHead$Z',  function (solid) {
this.openHead=!solid;
});

Clazz.newMeth(C$, 'setStroke$java_awt_BasicStroke',  function (stroke) {
if (stroke == null ) return;
C$.superclazz.prototype.setStroke$java_awt_BasicStroke.apply(this, [stroke]);
this.headStroke=Clazz.new_([stroke.getLineWidth$(), 0, 0, 8, null, stroke.getDashPhase$()],$I$(1,1).c$$F$I$I$F$FA$F);
});

Clazz.newMeth(C$, 'getIcon$I$I',  function (w, h) {
var points=Clazz.array($I$(2), -1, [Clazz.new_($I$(2,1)), Clazz.new_($I$(2,1).c$$I$I,[w - 2, 2 - h])]);
var shape=this.getShape$java_awt_PointA$I(points, 1);
var icon=Clazz.new_($I$(3,1).c$$org_opensourcephysics_cabrillo_tracker_MultiShape$I$I,[shape, w, h]);
icon.setColor$java_awt_Color(this.color);
icon.setStroke$java_awt_BasicStroke(this.stroke);
return Clazz.new_($I$(4,1).c$$javax_swing_Icon,[icon]);
});

Clazz.newMeth(C$, 'getShape$java_awt_PointA$I',  function (points, scale) {
this.highlight=null;
var p1=points[0];
var p2=points[1];
if (points.length > 3) {
p1=points[3];
}var theta=Math.atan2(p1.y - p2.y, p1.x - p2.x);
this.transform.setToRotation$D$D$D(theta, p1.x, p1.y);
this.transform.translate$D$D(p1.x, p1.y);
if (scale > 1) {
this.transform.scale$D$D(scale, scale);
}this.transform.setToRotation$D$D$D(theta, p2.x, p2.y);
this.transform.translate$D$D(p2.x, p2.y);
var d=(p1.distance$java_awt_geom_Point2D(p2));
var tiplen=this.tipLength * scale;
var tipL=Math.min(tiplen, Math.round(d - 4));
tipL=Math.max(8, tipL);
var tipW=Math.max((tipL/4|0), 2);
var f=scale * this.baseStroke.getLineWidth$();
var lineWidth=f < (tipL/4|0)  ? f : Math.max((tipL/4|0), 0.8);
if (this.stroke == null  || this.stroke.getLineWidth$() != lineWidth  ) {
this.stroke=Clazz.new_([lineWidth, 0, 0, 8, this.baseStroke.getDashArray$(), this.baseStroke.getDashPhase$()],$I$(1,1).c$$F$I$I$F$FA$F);
this.headStroke=Clazz.new_([lineWidth, 0, 0, 8, null, this.stroke.getDashPhase$()],$I$(1,1).c$$F$I$I$F$FA$F);
}try {
this.path.reset$();
this.path.moveTo$F$F(d - 4, 0);
this.path.lineTo$F$F(d - 6, -2);
this.path.lineTo$F$F(d, 0);
this.path.lineTo$F$F(d - 6, 2);
this.path.closePath$();
this.hitShapes[0]=this.transform.createTransformedShape$java_awt_Shape(this.path);
d=d - (this.stroke.getLineWidth$() * 1.58) + 1;
this.path.reset$();
this.path.moveTo$F$F(0, 0);
this.path.lineTo$F$F(d - tipL, 0);
this.hitShapes[2]=this.transform.createTransformedShape$java_awt_Shape(this.path);
this.hitShapes[1]=Clazz.new_($I$(5,1).c$$I$I$I$I,[p2.x - 1, p2.y - 1, 2, 2]);
this.path.reset$();
this.path.moveTo$F$F(0, 0);
this.path.lineTo$F$F(d - tipL + tipW, 0);
var shaft=this.transform.createTransformedShape$java_awt_Shape(this.path);
this.path.reset$();
this.path.moveTo$F$F(d - tipL + tipW, 0);
this.path.lineTo$F$F(d - tipL, -tipW);
this.path.lineTo$F$F(d, 0);
this.path.lineTo$F$F(d - tipL, tipW);
this.path.closePath$();
var head=this.transform.createTransformedShape$java_awt_Shape(this.path);
this.highlight=Clazz.new_([Clazz.array($I$(7), -1, [head])],$I$(6,1).c$$java_awt_ShapeA).andFill$ZA(Clazz.array(Boolean.TYPE, -1, [true]));
return Clazz.new_([Clazz.array($I$(7), -1, [shaft, head])],$I$(6,1).c$$java_awt_ShapeA).andFill$ZA(Clazz.array(Boolean.TYPE, -1, [false, !this.openHead]));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
d=(p1.distance$java_awt_geom_Point2D(p2));
var line=Clazz.new_($I$(8,1).c$$D$D$D$D,[0, 0, d, 0]);
return Clazz.new_([Clazz.array($I$(7), -1, [this.transform.createTransformedShape$java_awt_Shape(line)])],$I$(6,1).c$$java_awt_ShapeA);
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
