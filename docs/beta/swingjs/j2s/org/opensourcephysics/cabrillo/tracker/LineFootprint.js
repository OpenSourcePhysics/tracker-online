(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,['java.awt.geom.Arc2D','.Double'],['java.awt.geom.Line2D','.Double'],'java.awt.geom.GeneralPath','java.util.HashSet','java.awt.BasicStroke','org.opensourcephysics.cabrillo.tracker.OutlineFootprint','org.opensourcephysics.cabrillo.tracker.DoubleArrowFootprint','org.opensourcephysics.cabrillo.tracker.ArrowFootprint','org.opensourcephysics.cabrillo.tracker.DoubleCrosshairFootprint','java.awt.geom.AffineTransform','java.awt.Color','java.awt.Shape','org.opensourcephysics.cabrillo.tracker.TrackerRes','java.awt.Point','org.opensourcephysics.cabrillo.tracker.ShapeIcon','org.opensourcephysics.display.ResizableIcon','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints','java.awt.Rectangle','org.opensourcephysics.cabrillo.tracker.MultiShape','java.awt.Stroke']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LineFootprint", null, null, ['org.opensourcephysics.cabrillo.tracker.Footprint', 'Cloneable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.transform=Clazz.new_($I$(10,1));
this.baseStroke=Clazz.new_($I$(5,1));
this.color=$I$(11).black;
this.path=Clazz.new_($I$(3,1));
this.line=Clazz.new_($I$(2,1));
this.hitShapes=Clazz.array($I$(12), [5]);
},1);

C$.$fields$=[['S',['name'],'O',['highlight','org.opensourcephysics.cabrillo.tracker.MultiShape','transform','java.awt.geom.AffineTransform','baseStroke','java.awt.BasicStroke','+stroke','color','java.awt.Color','path','java.awt.geom.GeneralPath','line','java.awt.geom.Line2D','hitShapes','java.awt.Shape[]','rotatorStroke','java.awt.BasicStroke']]
,['O',['arrowhead','java.awt.Shape','arc','java.awt.geom.Arc2D','hitLine','java.awt.geom.Line2D','footprints','java.util.Collection','DASHED_LINE','float[]','+DOTTED_LINE','+WIDE_DOTTED_LINE','LINE','org.opensourcephysics.cabrillo.tracker.LineFootprint','+BOLD_LINE','+OUTLINE','+BOLD_OUTLINE','+DOUBLE_ARROW','+BOLD_DOUBLE_ARROW','ARROW','org.opensourcephysics.cabrillo.tracker.ArrowFootprint','+BOLD_ARROW','+BIG_ARROW','+DASH_ARROW','+BOLD_DASH_ARROW','+BIG_DASH_ARROW','DOUBLE_TARGET','org.opensourcephysics.cabrillo.tracker.DoubleCrosshairFootprint','+BOLD_DOUBLE_TARGET']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'getFootprint$S',  function (name) {
return C$.getFootprint$java_util_Collection$S(C$.footprints, name);
}, 1);

Clazz.newMeth(C$, 'getFootprint$java_util_Collection$S',  function (footprints, name) {
var it=footprints.iterator$();
while (it.hasNext$()){
var footprint=it.next$();
if (name == footprint.getName$()) try {
return footprint.clone$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"CloneNotSupportedException")){
} else {
throw ex;
}
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getDisplayName$',  function () {
return $I$(13).getString$S(this.name);
});

Clazz.newMeth(C$, 'getLength$',  function () {
return 2;
});

Clazz.newMeth(C$, 'getIcon$I$I',  function (w, h) {
var points=Clazz.array($I$(14), -1, [Clazz.new_($I$(14,1)), Clazz.new_($I$(14,1).c$$I$I,[w - 2, 2 - h])]);
var shape=this.getShape$java_awt_PointA$I(points, 1);
var icon=Clazz.new_($I$(15,1).c$$org_opensourcephysics_cabrillo_tracker_MultiShape$I$I,[shape, w, h]);
icon.setColor$java_awt_Color(this.color);
icon.setStroke$java_awt_BasicStroke(this.stroke);
return Clazz.new_($I$(16,1).c$$javax_swing_Icon,[icon]);
});

Clazz.newMeth(C$, 'getMark$java_awt_PointA',  function (points) {
var shape=this.getShape$java_awt_PointA$I(points, $I$(17).getIntegerFactor$());
var hilite=this.getHighlightShape$();
return ((P$.LineFootprint$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LineFootprint$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
var gcolor=g.getColor$();
var gstroke=g.getStroke$();
g.setColor$java_awt_Color(this.b$['org.opensourcephysics.cabrillo.tracker.LineFootprint'].color);
g.setStroke$java_awt_Stroke(this.b$['org.opensourcephysics.cabrillo.tracker.LineFootprint'].stroke);
if ($I$(18).setRenderingHints) g.setRenderingHint$java_awt_RenderingHints_Key$O($I$(19).KEY_ANTIALIASING, $I$(19).VALUE_ANTIALIAS_ON);
this.$finals$.shape.draw$java_awt_Graphics2D(g);
if (highlighted && this.$finals$.hilite != null  ) {
this.$finals$.hilite.draw$java_awt_Graphics2D(g);
}g.setColor$java_awt_Color(gcolor);
g.setStroke$java_awt_Stroke(gstroke);
});
})()
), Clazz.new_(P$.LineFootprint$1.$init$,[this, {hilite:hilite,shape:shape}]));
});

Clazz.newMeth(C$, 'getHitShapes$',  function () {
return this.hitShapes;
});

Clazz.newMeth(C$, 'setStroke$java_awt_BasicStroke',  function (stroke) {
if (stroke == null ) return;
this.baseStroke=Clazz.new_([stroke.getLineWidth$(), 0, 0, 8, stroke.getDashArray$(), stroke.getDashPhase$()],$I$(5,1).c$$F$I$I$F$FA$F);
});

Clazz.newMeth(C$, 'getStroke$',  function () {
return this.baseStroke;
});

Clazz.newMeth(C$, 'setDashArray$FA',  function (dashArray) {
this.baseStroke=Clazz.new_([this.baseStroke.getLineWidth$(), 0, 0, 8, dashArray, this.baseStroke.getDashPhase$()],$I$(5,1).c$$F$I$I$F$FA$F);
});

Clazz.newMeth(C$, 'setLineWidth$D',  function (w) {
this.baseStroke=Clazz.new_([w, 0, 0, 8, this.baseStroke.getDashArray$(), this.baseStroke.getDashPhase$()],$I$(5,1).c$$F$I$I$F$FA$F);
});

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (color) {
this.color=color;
});

Clazz.newMeth(C$, 'getColor$',  function () {
return this.color;
});

Clazz.newMeth(C$, 'getShape$java_awt_PointA$I',  function (points, scale) {
this.checkStrokes$();
var lineWidth=this.stroke.getLineWidth$();
var p1=points[0];
var p2=points[1];
var theta=Math.atan2(p1.y - p2.y, p1.x - p2.x);
this.transform.setToRotation$D$D$D(theta, p2.x, p2.y);
this.transform.translate$D$D(p2.x, p2.y);
var d=p1.distance$java_awt_geom_Point2D(p2);
this.hitShapes[0]=Clazz.new_($I$(20,1).c$$I$I$I$I,[p1.x - 1, p1.y - 1, 2, 2]);
this.hitShapes[1]=Clazz.new_($I$(20,1).c$$I$I$I$I,[p2.x - 1, p2.y - 1, 2, 2]);
this.line.setLine$java_awt_geom_Point2D$java_awt_geom_Point2D(p1, p2);
var center=d / 2;
C$.hitLine.setLine$D$D$D$D(center - 0.3 * d, 0, center + 0.3 * d, 0);
this.hitShapes[2]=this.transform.createTransformedShape$java_awt_Shape(C$.hitLine);
C$.hitLine.setLine$D$D$D$D(center + 0.35 * d, 0, center + 0.45 * d, 0);
this.hitShapes[3]=this.transform.createTransformedShape$java_awt_Shape(C$.hitLine);
C$.hitLine.setLine$D$D$D$D(center - 0.45 * d, 0, center - 0.35 * d, 0);
this.hitShapes[4]=this.transform.createTransformedShape$java_awt_Shape(C$.hitLine);
{
this.path.reset$();
this.path.moveTo$D$D(0, 0.5 * lineWidth);
this.path.lineTo$D$D(d, 0.5 * lineWidth);
this.path.lineTo$D$D(d, -0.5 * lineWidth);
this.path.lineTo$D$D(0, -0.5 * lineWidth);
this.path.closePath$();
}return Clazz.new_([Clazz.array($I$(12), -1, [this.transform.createTransformedShape$java_awt_Shape(this.path)])],$I$(21,1).c$$java_awt_ShapeA).andFill$ZA(Clazz.array(Boolean.TYPE, -1, [true]));
});

Clazz.newMeth(C$, 'getHighlightShape$',  function () {
if (this.highlight != null ) {
return Clazz.new_([Clazz.array($I$(12), -1, [this.highlight])],$I$(21,1).c$$java_awt_ShapeA);
}return null;
});

Clazz.newMeth(C$, 'getRotatorShape$java_awt_Point$java_awt_Point$java_awt_Point',  function (center, anchor, rotator) {
if (rotator == null ) {
var scale=$I$(17).getIntegerFactor$();
var r=15 * scale;
var ang=50;
var arrowAngleOffset=10;
var d=center.distance$java_awt_geom_Point2D(anchor);
var sin=-(anchor.y - center.y) / d;
var cos=(anchor.x - center.x) / d;
var theta=180 * Math.atan2(sin, cos) / 3.141592653589793;
C$.arc.setArcByCenter$D$D$D$D$D$I(anchor.x - r * cos, anchor.y + r * sin, r, theta - ang, 2 * ang, 0);
var toDraw=Clazz.new_([Clazz.array($I$(12), -1, [C$.arc])],$I$(21,1).c$$java_awt_ShapeA).andStroke$java_awt_StrokeA(Clazz.array($I$(22), -1, [this.stroke]));
var pt=C$.arc.getEndPoint$();
var rotationAngle=3.141592653589793 * (theta + ang - arrowAngleOffset) / 180 + 1.5707963267948966;
this.transform.setToRotation$D$D$D(-rotationAngle, pt.getX$(), pt.getY$());
this.transform.translate$D$D(pt.getX$(), pt.getY$());
if (scale > 1) {
this.transform.scale$D$D(scale, scale);
}toDraw.addDrawShape$java_awt_Shape$java_awt_Stroke(this.transform.createTransformedShape$java_awt_Shape(C$.arrowhead), this.stroke);
pt=C$.arc.getStartPoint$();
rotationAngle=3.141592653589793 * (theta - ang + arrowAngleOffset) / 180 - 1.5707963267948966;
this.transform.setToRotation$D$D$D(-rotationAngle, pt.getX$(), pt.getY$());
this.transform.translate$D$D(pt.getX$(), pt.getY$());
if (scale > 1) {
this.transform.scale$D$D(scale, scale);
}toDraw.addDrawShape$java_awt_Shape$java_awt_Stroke(this.transform.createTransformedShape$java_awt_Shape(C$.arrowhead), this.stroke);
return toDraw;
}if (rotator.distanceSq$java_awt_geom_Point2D(center) > anchor.distanceSq$java_awt_geom_Point2D(center) ) {
var line=Clazz.new_($I$(2,1).c$$D$D$D$D,[anchor.x, anchor.y, rotator.x, rotator.y]);
return Clazz.new_([Clazz.array($I$(12), -1, [line])],$I$(21,1).c$$java_awt_ShapeA).andStroke$java_awt_StrokeA(Clazz.array($I$(22), -1, [this.rotatorStroke]));
}return null;
});

Clazz.newMeth(C$, 'checkStrokes$',  function () {
var scale=$I$(17).getIntegerFactor$();
if (this.stroke == null  || this.stroke.getLineWidth$() != scale * this.baseStroke.getLineWidth$()  ) {
this.stroke=Clazz.new_([scale * this.baseStroke.getLineWidth$()],$I$(5,1).c$$F);
this.rotatorStroke=Clazz.new_([this.stroke.getLineWidth$(), 0, 0, 8, C$.WIDE_DOTTED_LINE, this.stroke.getDashPhase$()],$I$(5,1).c$$F$I$I$F$FA$F);
}});

C$.$static$=function(){C$.$static$=0;
C$.arc=Clazz.new_($I$(1,1).c$$I,[0]);
C$.hitLine=Clazz.new_($I$(2,1));
{
var path=Clazz.new_($I$(3,1));
path.moveTo$F$F(-6, 3);
path.lineTo$F$F(0, 0);
path.lineTo$F$F(-6, -3);
C$.arrowhead=path;
};
C$.footprints=Clazz.new_($I$(4,1));
C$.DASHED_LINE=Clazz.array(Float.TYPE, -1, [10, 4]);
C$.DOTTED_LINE=Clazz.array(Float.TYPE, -1, [2, 1]);
C$.WIDE_DOTTED_LINE=Clazz.array(Float.TYPE, -1, [2, 6]);
{
C$.LINE=Clazz.new_(C$.c$$S,["Footprint.Line"]);
C$.footprints.add$O(C$.LINE);
C$.BOLD_LINE=Clazz.new_(C$.c$$S,["Footprint.BoldLine"]);
C$.BOLD_LINE.setStroke$java_awt_BasicStroke(Clazz.new_($I$(5,1).c$$F,[2]));
C$.footprints.add$O(C$.BOLD_LINE);
C$.OUTLINE=Clazz.new_($I$(6,1).c$$S,["Footprint.Outline"]);
C$.footprints.add$O(C$.OUTLINE);
C$.BOLD_OUTLINE=Clazz.new_($I$(6,1).c$$S,["Footprint.BoldOutline"]);
C$.BOLD_OUTLINE.setStroke$java_awt_BasicStroke(Clazz.new_($I$(5,1).c$$F,[2]));
C$.footprints.add$O(C$.BOLD_OUTLINE);
C$.DOUBLE_ARROW=Clazz.new_($I$(7,1).c$$S,["Footprint.DoubleArrow"]);
C$.footprints.add$O(C$.DOUBLE_ARROW);
C$.BOLD_DOUBLE_ARROW=Clazz.new_($I$(7,1).c$$S,["Footprint.BoldDoubleArrow"]);
C$.BOLD_DOUBLE_ARROW.setStroke$java_awt_BasicStroke(Clazz.new_($I$(5,1).c$$F,[2]));
C$.footprints.add$O(C$.BOLD_DOUBLE_ARROW);
C$.ARROW=Clazz.new_($I$(8,1).c$$S,["Footprint.Arrow"]);
C$.footprints.add$O(C$.ARROW);
C$.BOLD_ARROW=Clazz.new_($I$(8,1).c$$S,["Footprint.BoldArrow"]);
C$.BOLD_ARROW.setStroke$java_awt_BasicStroke(Clazz.new_($I$(5,1).c$$F,[2]));
C$.footprints.add$O(C$.BOLD_ARROW);
C$.BIG_ARROW=Clazz.new_($I$(8,1).c$$S,["Footprint.BigArrow"]);
C$.BIG_ARROW.setStroke$java_awt_BasicStroke(Clazz.new_($I$(5,1).c$$F,[4]));
C$.BIG_ARROW.setTipLength$I(32);
C$.footprints.add$O(C$.BIG_ARROW);
C$.DASH_ARROW=Clazz.new_($I$(8,1).c$$S,["Footprint.DashArrow"]);
C$.DASH_ARROW.setDashArray$FA(C$.DASHED_LINE);
C$.footprints.add$O(C$.DASH_ARROW);
C$.BOLD_DASH_ARROW=Clazz.new_($I$(8,1).c$$S,["Footprint.BoldDashArrow"]);
C$.BOLD_DASH_ARROW.setStroke$java_awt_BasicStroke(Clazz.new_($I$(5,1).c$$F,[2]));
C$.BOLD_DASH_ARROW.setDashArray$FA(C$.DASHED_LINE);
C$.footprints.add$O(C$.BOLD_DASH_ARROW);
C$.BIG_DASH_ARROW=Clazz.new_($I$(8,1).c$$S,["Footprint.BigDashArrow"]);
C$.BIG_DASH_ARROW.setStroke$java_awt_BasicStroke(Clazz.new_($I$(5,1).c$$F,[4]));
C$.BIG_DASH_ARROW.setDashArray$FA(C$.DASHED_LINE);
C$.BIG_DASH_ARROW.setTipLength$I(32);
C$.footprints.add$O(C$.BIG_DASH_ARROW);
C$.DOUBLE_TARGET=Clazz.new_($I$(9,1).c$$S,["Footprint.DoubleTarget"]);
C$.footprints.add$O(C$.DOUBLE_TARGET);
C$.BOLD_DOUBLE_TARGET=Clazz.new_($I$(9,1).c$$S,["Footprint.BoldDoubleTarget"]);
C$.BOLD_DOUBLE_TARGET.setStroke$java_awt_BasicStroke(Clazz.new_($I$(5,1).c$$F,[2]));
C$.footprints.add$O(C$.BOLD_DOUBLE_TARGET);
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
