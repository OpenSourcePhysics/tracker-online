(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.util.HashSet',['java.awt.geom.Ellipse2D','.Double'],['java.awt.geom.Line2D','.Double'],'java.awt.Point','java.awt.geom.AffineTransform',['java.awt.geom.Arc2D','.Double'],'java.awt.BasicStroke','java.awt.geom.GeneralPath','org.opensourcephysics.cabrillo.tracker.MultiShape','java.awt.Shape','java.awt.Stroke','java.awt.Color','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.cabrillo.tracker.ShapeIcon','org.opensourcephysics.display.ResizableIcon','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ProtractorFootprint", null, null, ['org.opensourcephysics.cabrillo.tracker.Footprint', 'Cloneable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.color=$I$(12).black;
this.hitShapes=Clazz.array($I$(10), [6]);
},1);

C$.$fields$=[['Z',['isArcVisible'],'I',['radius'],'S',['name'],'O',['baseStroke','java.awt.BasicStroke','+stroke','color','java.awt.Color','hitShapes','java.awt.Shape[]','circle','java.awt.Shape','arcStroke','java.awt.Stroke','+arcAdjustStroke','+armStroke']]
,['I',['arcRadius'],'O',['DOTTED_LINE','float[]','+STIPPLED_LINE','CIRCLE_3','org.opensourcephysics.cabrillo.tracker.ProtractorFootprint','+CIRCLE_5','+CIRCLE_3_BOLD','+CIRCLE_5_BOLD','footprints','java.util.Collection','hitShape','java.awt.Shape','arrowhead','org.opensourcephysics.cabrillo.tracker.MultiShape','line1','java.awt.geom.Line2D','+line2','p','java.awt.Point','transform','java.awt.geom.AffineTransform','arc','java.awt.geom.Arc2D']]]

Clazz.newMeth(C$, 'c$$S$I',  function (name, r) {
;C$.$init$.apply(this);
this.name=name;
this.radius=r;
this.circle=Clazz.new_($I$(2,1).c$$D$D$D$D,[-r, -r, 2 * r, 2 * r]);
this.setStroke$java_awt_BasicStroke(Clazz.new_($I$(7,1)));
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getDisplayName$',  function () {
return $I$(13).getString$S(this.name);
});

Clazz.newMeth(C$, 'getLength$',  function () {
return 3;
});

Clazz.newMeth(C$, 'getIcon$I$I',  function (w, h) {
C$.transform.setToScale$D$D(1, 1);
var shape=C$.transform.createTransformedShape$java_awt_Shape(this.circle);
if (this.stroke == null  || this.stroke.getLineWidth$() != this.baseStroke.getLineWidth$()  ) {
this.stroke=Clazz.new_([this.baseStroke.getLineWidth$()],$I$(7,1).c$$F);
this.arcStroke=Clazz.new_($I$(7,1).c$$F,[1]);
this.arcAdjustStroke=Clazz.new_([this.stroke.getLineWidth$(), 0, 0, 8, C$.DOTTED_LINE, this.stroke.getDashPhase$()],$I$(7,1).c$$F$I$I$F$FA$F);
}var drawShape=Clazz.new_([Clazz.array($I$(10), -1, [shape])],$I$(9,1).c$$java_awt_ShapeA).andStroke$java_awt_StrokeA(Clazz.array($I$(11), -1, [this.stroke]));
var x0=(this.radius + 2) - w;
var y0=h - (this.radius + 2);
var d=Math.sqrt(x0 * x0 + y0 * y0);
var x1=x0 * this.radius / d;
var y1=y0 * this.radius / d;
drawShape.addDrawShape$java_awt_Shape$java_awt_Stroke(Clazz.new_($I$(3,1).c$$D$D$D$D,[x0, y0, x1, y1]), this.stroke);
drawShape.addDrawShape$java_awt_Shape$java_awt_Stroke(Clazz.new_($I$(3,1).c$$D$D$D$D,[x0, y0, this.radius - 2, y0]), this.stroke);
var icon=Clazz.new_($I$(14,1).c$$org_opensourcephysics_cabrillo_tracker_MultiShape$I$I,[drawShape, w, h]);
icon.setColor$java_awt_Color(this.color);
return Clazz.new_($I$(15,1).c$$javax_swing_Icon,[icon]);
});

Clazz.newMeth(C$, 'getMark$java_awt_PointA',  function (points) {
var shape=this.getShape$java_awt_PointA$I(points, $I$(16).getIntegerFactor$());
return ((P$.ProtractorFootprint$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ProtractorFootprint$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
var gcolor=g.getColor$();
var gstroke=g.getStroke$();
g.setColor$java_awt_Color(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorFootprint'].color);
g.setStroke$java_awt_Stroke(this.b$['org.opensourcephysics.cabrillo.tracker.ProtractorFootprint'].stroke);
if ($I$(17).setRenderingHints) g.setRenderingHint$java_awt_RenderingHints_Key$O($I$(18).KEY_ANTIALIASING, $I$(18).VALUE_ANTIALIAS_ON);
this.$finals$.shape.draw$java_awt_Graphics2D(g);
g.setColor$java_awt_Color(gcolor);
g.setStroke$java_awt_Stroke(gstroke);
});
})()
), Clazz.new_(P$.ProtractorFootprint$1.$init$,[this, {shape:shape}]));
});

Clazz.newMeth(C$, 'getHitShapes$',  function () {
return this.hitShapes;
});

Clazz.newMeth(C$, 'setStroke$java_awt_BasicStroke',  function (stroke) {
if (stroke == null ) return;
this.baseStroke=Clazz.new_([stroke.getLineWidth$(), 0, 0, 8, stroke.getDashArray$(), stroke.getDashPhase$()],$I$(7,1).c$$F$I$I$F$FA$F);
this.arcAdjustStroke=Clazz.new_([stroke.getLineWidth$(), 0, 0, 8, C$.DOTTED_LINE, stroke.getDashPhase$()],$I$(7,1).c$$F$I$I$F$FA$F);
this.armStroke=Clazz.new_([stroke.getLineWidth$(), 0, 0, 8, C$.STIPPLED_LINE, stroke.getDashPhase$()],$I$(7,1).c$$F$I$I$F$FA$F);
});

Clazz.newMeth(C$, 'getStroke$',  function () {
return this.baseStroke;
});

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (color) {
this.color=color;
});

Clazz.newMeth(C$, 'getColor$',  function () {
return this.color;
});

Clazz.newMeth(C$, 'setArcVisible$Z',  function (vis) {
this.isArcVisible=vis;
});

Clazz.newMeth(C$, 'getCircleShape$java_awt_Point',  function (p) {
C$.transform.setToTranslation$D$D(p.x, p.y);
var scale=$I$(16).getIntegerFactor$();
if (scale > 1) {
C$.transform.scale$D$D(scale, scale);
}var shape=C$.transform.createTransformedShape$java_awt_Shape(this.circle);
return Clazz.new_([Clazz.array($I$(10), -1, [shape])],$I$(9,1).c$$java_awt_ShapeA).andStroke$java_awt_StrokeA(Clazz.array($I$(11), -1, [this.stroke]));
});

Clazz.newMeth(C$, 'getArcAdjustShape$java_awt_Point$java_awt_Point',  function (vertex, rotator) {
var theta=Math.toRadians(C$.arc.getAngleStart$() + C$.arc.getAngleExtent$() / 2);
var scale=$I$(16).getIntegerFactor$();
C$.p.x=Long.$ival(Math.round$D(vertex.x + scale * C$.arcRadius * Math.cos(theta) ));
C$.p.y=Long.$ival(Math.round$D(vertex.y - scale * C$.arcRadius * Math.sin(theta) ));
var circle=this.getCircleShape$java_awt_Point(C$.p);
var drawShape=Clazz.new_([Clazz.array($I$(10), -1, [circle])],$I$(9,1).c$$java_awt_ShapeA);
if (rotator != null ) {
var r=(circle.getBounds$().width/2|0);
var d=C$.p.distance$java_awt_geom_Point2D(rotator);
C$.line1.setLine$D$D$D$D(C$.p.getX$(), C$.p.getY$(), rotator.getX$(), rotator.getY$());
if (d > 1 ) C$.adjustLineLength$java_awt_geom_Line2D$D$D(C$.line1, (d - r) / d, (d - 6) / d);
drawShape.addDrawShape$java_awt_Shape$java_awt_Stroke(C$.line1.clone$(), this.arcAdjustStroke);
}return drawShape;
});

Clazz.newMeth(C$, 'getShape$java_awt_PointA$I',  function (points, scale) {
var vertex=points[0];
var end1=points[1];
var end2=points[2];
var r=(scale * this.circle.getBounds$().width/2|0);
if (this.stroke == null  || this.stroke.getLineWidth$() != scale * this.baseStroke.getLineWidth$()  ) {
this.stroke=Clazz.new_([scale * this.baseStroke.getLineWidth$()],$I$(7,1).c$$F);
this.arcStroke=Clazz.new_($I$(7,1).c$$F,[scale]);
this.arcAdjustStroke=Clazz.new_([this.stroke.getLineWidth$(), 0, 0, 8, C$.DOTTED_LINE, this.stroke.getDashPhase$()],$I$(7,1).c$$F$I$I$F$FA$F);
this.armStroke=Clazz.new_([this.stroke.getLineWidth$(), 0, 0, 8, C$.STIPPLED_LINE, this.stroke.getDashPhase$()],$I$(7,1).c$$F$I$I$F$FA$F);
}var drawMe=Clazz.new_([Clazz.array($I$(10), -1, [])],$I$(9,1).c$$java_awt_ShapeA);
C$.line1.setLine$java_awt_geom_Point2D$java_awt_geom_Point2D(vertex, end1);
var d1=vertex.distance$java_awt_geom_Point2D(end1);
if (d1 > 1 ) C$.adjustLineLength$java_awt_geom_Line2D$D$D(C$.line1, 1, (d1 - r) / d1);
drawMe.addDrawShape$java_awt_Shape$java_awt_Stroke(C$.line1.clone$(), null);
C$.line2.setLine$java_awt_geom_Point2D$java_awt_geom_Point2D(vertex, end2);
var d2=vertex.distance$java_awt_geom_Point2D(end2);
if (d2 > 1 ) C$.adjustLineLength$java_awt_geom_Line2D$D$D(C$.line2, 1, (d2 - r) / d2);
drawMe.addDrawShape$java_awt_Shape$java_awt_Stroke(C$.line2.clone$(), this.armStroke);
C$.transform.setToTranslation$D$D(end1.x, end1.y);
if (scale > 1) {
C$.transform.scale$D$D(scale, scale);
}var end1Shape=C$.transform.createTransformedShape$java_awt_Shape(this.circle);
drawMe.addDrawShape$java_awt_Shape$java_awt_Stroke(end1Shape, null);
C$.transform.setToTranslation$D$D(end2.x, end2.y);
if (scale > 1) {
C$.transform.scale$D$D(scale, scale);
}var end2Shape=C$.transform.createTransformedShape$java_awt_Shape(this.circle);
drawMe.addDrawShape$java_awt_Shape$java_awt_Stroke(end2Shape, null);
var theta1=-Math.atan2(end1.y - vertex.y, end1.x - vertex.x);
var theta2=-Math.atan2(end2.y - vertex.y, end2.x - vertex.x);
C$.arc.setAngleStart$D(Math.toDegrees(theta1));
var degrees=Math.toDegrees(theta2 - theta1);
if (degrees > 180 ) degrees-=360;
if (degrees < -180 ) degrees+=360;
C$.arc.setAngleExtent$D(degrees);
C$.transform.setToTranslation$D$D(vertex.x, vertex.y);
if (scale > 1) {
C$.transform.scale$D$D(scale, scale);
}var arcShape=C$.transform.createTransformedShape$java_awt_Shape(C$.arc);
if (this.isArcVisible) {
drawMe.addDrawShape$java_awt_Shape$java_awt_Stroke(arcShape, this.arcStroke);
if (Math.abs(degrees) > 10 ) {
var xDot=vertex.getX$() + scale * C$.arcRadius * (end2.getX$() - vertex.getX$())  / d2;
var yDot=vertex.getY$() + scale * C$.arcRadius * (end2.getY$() - vertex.getY$())  / d2;
var angle=-theta2 - 1.5707963267948966;
if (degrees < 0 ) angle+=3.141592653589793;
C$.transform.setToRotation$D$D$D(angle, xDot, yDot);
C$.transform.translate$D$D(xDot, yDot);
if (scale > 1) {
C$.transform.scale$D$D(scale, scale);
}var arrowShape=C$.arrowhead.transform$java_awt_geom_AffineTransform(C$.transform);
drawMe.addFillShape$java_awt_Shape(arrowShape);
}}C$.transform.setToTranslation$D$D(vertex.x, vertex.y);
if (scale > 1) {
C$.transform.scale$D$D(scale, scale);
}this.hitShapes[0]=C$.transform.createTransformedShape$java_awt_Shape(C$.hitShape);
C$.transform.setToTranslation$D$D(end1.x, end1.y);
if (scale > 1) {
C$.transform.scale$D$D(scale, scale);
}this.hitShapes[1]=C$.transform.createTransformedShape$java_awt_Shape(C$.hitShape);
C$.transform.setToTranslation$D$D(end2.x, end2.y);
if (scale > 1) {
C$.transform.scale$D$D(scale, scale);
}this.hitShapes[2]=C$.transform.createTransformedShape$java_awt_Shape(C$.hitShape);
if (d1 > 1 ) C$.adjustLineLength$java_awt_geom_Line2D$D$D(C$.line1, (d1 - scale * C$.arcRadius - 8) / d1, (d1 - 8) / d1);
if (d2 > 1 ) C$.adjustLineLength$java_awt_geom_Line2D$D$D(C$.line2, (d2 - scale * C$.arcRadius - 8) / d2, (d2 - 8) / d2);
this.hitShapes[3]=C$.line1.clone$();
this.hitShapes[4]=C$.line2.clone$();
this.hitShapes[5]=arcShape;
return drawMe;
});

Clazz.newMeth(C$, 'adjustLineLength$java_awt_geom_Line2D$D$D',  function (line, end1Factor, end2Factor) {
var x1=line.getX2$() + (line.getX1$() - line.getX2$()) * end1Factor;
var y1=line.getY2$() + (line.getY1$() - line.getY2$()) * end1Factor;
var x2=line.getX1$() + (line.getX2$() - line.getX1$()) * end2Factor;
var y2=line.getY1$() + (line.getY2$() - line.getY1$()) * end2Factor;
line.setLine$D$D$D$D(x1, y1, x2, y2);
}, 1);

Clazz.newMeth(C$, 'getFootprint$S',  function (name) {
for (var footprint, $footprint = C$.footprints.iterator$(); $footprint.hasNext$()&&((footprint=($footprint.next$())),1);) {
if (name == footprint.getName$()) try {
return footprint.clone$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"CloneNotSupportedException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}
return null;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.DOTTED_LINE=Clazz.array(Float.TYPE, -1, [2, 6]);
C$.STIPPLED_LINE=Clazz.array(Float.TYPE, -1, [2, 2]);
C$.arcRadius=24;
C$.footprints=Clazz.new_($I$(1,1));
C$.hitShape=Clazz.new_($I$(2,1).c$$D$D$D$D,[-6, -6, 12, 12]);
C$.line1=Clazz.new_($I$(3,1));
C$.line2=Clazz.new_($I$(3,1));
C$.p=Clazz.new_($I$(4,1));
C$.transform=Clazz.new_($I$(5,1));
C$.arc=Clazz.new_($I$(6,1).c$$D$D$D$D$D$D$I,[-C$.arcRadius, -C$.arcRadius, 2 * C$.arcRadius, 2 * C$.arcRadius, 0, 0, 0]);
{
var stroke=Clazz.new_($I$(7,1).c$$F,[1]);
var path=Clazz.new_($I$(8,1));
path.moveTo$F$F(-6, 2);
path.lineTo$F$F(0, 0);
path.lineTo$F$F(-6, -3);
C$.arrowhead=Clazz.new_([Clazz.array($I$(10), -1, [path])],$I$(9,1).c$$java_awt_ShapeA).andStroke$java_awt_StrokeA(Clazz.array($I$(11), -1, [stroke]));
C$.CIRCLE_3=Clazz.new_(C$.c$$S$I,["ProtractorFootprint.Circle3", 3]);
C$.CIRCLE_3.setStroke$java_awt_BasicStroke(stroke);
C$.footprints.add$O(C$.CIRCLE_3);
C$.CIRCLE_5=Clazz.new_(C$.c$$S$I,["ProtractorFootprint.Circle5", 8]);
C$.CIRCLE_5.setStroke$java_awt_BasicStroke(stroke);
C$.footprints.add$O(C$.CIRCLE_5);
stroke=Clazz.new_($I$(7,1).c$$F,[2]);
C$.CIRCLE_3_BOLD=Clazz.new_(C$.c$$S$I,["ProtractorFootprint.Circle3Bold", 3]);
C$.CIRCLE_3_BOLD.setStroke$java_awt_BasicStroke(stroke);
C$.footprints.add$O(C$.CIRCLE_3_BOLD);
C$.CIRCLE_5_BOLD=Clazz.new_(C$.c$$S$I,["ProtractorFootprint.Circle5Bold", 8]);
C$.CIRCLE_5_BOLD.setStroke$java_awt_BasicStroke(stroke);
C$.footprints.add$O(C$.CIRCLE_5_BOLD);
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
