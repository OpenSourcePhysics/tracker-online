(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.util.HashSet',['java.awt.geom.Ellipse2D','.Double'],'java.awt.Rectangle',['java.awt.geom.Line2D','.Double'],'java.awt.geom.AffineTransform',['java.awt.geom.Arc2D','.Float'],'java.awt.BasicStroke','java.awt.Color','java.util.ArrayList','java.awt.geom.GeneralPath','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.cabrillo.tracker.MultiShape','java.awt.Shape','org.opensourcephysics.cabrillo.tracker.ShapeIcon','org.opensourcephysics.display.ResizableIcon','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CircleFitterFootprint", null, null, ['org.opensourcephysics.cabrillo.tracker.Footprint', 'Cloneable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.color=$I$(8).black;
this.hitShapes=Clazz.new_($I$(9,1));
this.drawCircle=true;
},1);

C$.$fields$=[['Z',['drawCircle'],'D',['radius'],'I',['markerSize','markedPointCount'],'S',['name'],'O',['baseStroke','java.awt.BasicStroke','+stroke','color','java.awt.Color','hitShapes','java.util.ArrayList','circle','java.awt.geom.Ellipse2D','marker','java.awt.Shape','+crosshatch','selectedPoint','java.awt.Point']]
,['O',['CIRCLE_4','org.opensourcephysics.cabrillo.tracker.CircleFitterFootprint','+CIRCLE_7','+CIRCLE_4_BOLD','+CIRCLE_7_BOLD','+CIRCLE_4_POINTS_ONLY','footprints','java.util.Collection','hitShape','java.awt.Shape','+emptyHitShape','line','java.awt.geom.Line2D','transform','java.awt.geom.AffineTransform','iconArc','java.awt.geom.Arc2D.Float']]]

Clazz.newMeth(C$, 'c$$S$I',  function (name, size) {
;C$.$init$.apply(this);
this.name=name;
this.markerSize=size;
this.circle=Clazz.new_($I$(2,1));
this.marker=Clazz.new_($I$(2,1).c$$D$D$D$D,[-size, -size, 2 * size, 2 * size]);
var d=size * 0.707;
var path=Clazz.new_($I$(10,1));
path.moveTo$D$D(-d, -d);
path.lineTo$D$D(d, d);
path.moveTo$D$D(-d, d);
path.lineTo$D$D(d, -d);
this.crosshatch=path;
this.setStroke$java_awt_BasicStroke(Clazz.new_($I$(7,1)));
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getDisplayName$',  function () {
return $I$(11).getString$S(this.name);
});

Clazz.newMeth(C$, 'getLength$',  function () {
return 3;
});

Clazz.newMeth(C$, 'getIcon$I$I',  function (w, h) {
if (this.stroke == null  || this.stroke.getLineWidth$() != this.baseStroke.getLineWidth$()  ) {
this.stroke=Clazz.new_([this.baseStroke.getLineWidth$()],$I$(7,1).c$$F);
}var drawShape=Clazz.new_([Clazz.array($I$(13), -1, [])],$I$(12,1).c$$java_awt_ShapeA);
if (this.drawCircle) {
C$.iconArc.setArc$D$D$D$D$D$D$I(0, 0, 20, 20, 200, 140, 0);
drawShape.addDrawShape$java_awt_Shape$java_awt_Stroke(C$.iconArc.clone$(), this.stroke);
}var r=(this.markerSize/2|0);
this.circle.setFrameFromCenter$D$D$D$D(10, 20, 10 + r, 20 + r);
drawShape.addDrawShape$java_awt_Shape$java_awt_Stroke(this.circle.clone$(), this.stroke);
C$.transform.setToTranslation$D$D(0, 10);
drawShape=drawShape.transform$java_awt_geom_AffineTransform(C$.transform);
var icon=Clazz.new_($I$(14,1).c$$org_opensourcephysics_cabrillo_tracker_MultiShape$I$I,[drawShape, w, h]);
icon.setColor$java_awt_Color(this.color);
return Clazz.new_($I$(15,1).c$$javax_swing_Icon,[icon]);
});

Clazz.newMeth(C$, 'getMark$java_awt_PointA',  function (points) {
var shape=this.getShape$java_awt_PointA$I(points, $I$(16).getIntegerFactor$());
var color=this.color;
return ((P$.CircleFitterFootprint$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFitterFootprint$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
var gcolor=g.getColor$();
var gstroke=g.getStroke$();
g.setColor$java_awt_Color(this.$finals$.color);
g.setStroke$java_awt_Stroke(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFitterFootprint'].stroke);
if ($I$(17).setRenderingHints) g.setRenderingHint$java_awt_RenderingHints_Key$O($I$(18).KEY_ANTIALIASING, $I$(18).VALUE_ANTIALIAS_ON);
this.$finals$.shape.draw$java_awt_Graphics2D(g);
g.setColor$java_awt_Color(gcolor);
g.setStroke$java_awt_Stroke(gstroke);
});
})()
), Clazz.new_(P$.CircleFitterFootprint$1.$init$,[this, {shape:shape,color:color}]));
});

Clazz.newMeth(C$, 'getHitShapes$',  function () {
return this.hitShapes.toArray$OA(Clazz.array($I$(13), [this.hitShapes.size$()]));
});

Clazz.newMeth(C$, 'setStroke$java_awt_BasicStroke',  function (stroke) {
if (stroke == null ) return;
this.baseStroke=Clazz.new_([stroke.getLineWidth$(), 0, 0, 8, stroke.getDashArray$(), stroke.getDashPhase$()],$I$(7,1).c$$F$I$I$F$FA$F);
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

Clazz.newMeth(C$, 'setPixelRadius$D',  function (r) {
this.radius=r;
});

Clazz.newMeth(C$, 'setCircleVisible$Z',  function (vis) {
this.drawCircle=vis;
});

Clazz.newMeth(C$, 'setSelectedPoint$java_awt_Point',  function (p) {
this.selectedPoint=p;
});

Clazz.newMeth(C$, 'setMarkedPointCount$I',  function (n) {
this.markedPointCount=n;
});

Clazz.newMeth(C$, 'getShape$java_awt_PointA$I',  function (points, scale) {
var center=points[0];
var edge=points[1];
this.hitShapes.clear$();
if (this.stroke == null  || this.stroke.getLineWidth$() != scale * this.baseStroke.getLineWidth$()  ) {
this.stroke=Clazz.new_([scale * this.baseStroke.getLineWidth$()],$I$(7,1).c$$F);
}var drawMe=Clazz.new_([Clazz.array($I$(13), -1, [])],$I$(12,1).c$$java_awt_ShapeA);
if (this.drawCircle && points.length >= 5 ) {
if (Double.isInfinite$D(this.radius) || this.radius > 100000  ) {
var x=edge.getX$();
var y=edge.getY$();
var dx=points[3].getX$() - points[2].getX$();
var dy=points[3].getY$() - points[2].getY$();
var slope=dy / dx;
var len=10000;
if (dx == 0 ) {
C$.line.setLine$D$D$D$D(x, y - len, x, y + len);
} else {
if (Math.abs(dx) > Math.abs(dy) ) {
C$.line.setLine$D$D$D$D(x - len, y - slope * len, x + len, y + slope * len);
} else {
C$.line.setLine$D$D$D$D(x - len / slope, y - len, x + len / slope, y + len);
}}C$.transform.setToIdentity$();
drawMe.addDrawShape$java_awt_Shape$java_awt_Stroke(C$.transform.createTransformedShape$java_awt_Shape(C$.line), null);
} else {
C$.transform.setToIdentity$();
this.circle.setFrameFromCenter$D$D$D$D(center.x, center.y, center.x + this.radius, center.y + this.radius);
drawMe.addDrawShape$java_awt_Shape$java_awt_Stroke(C$.transform.createTransformedShape$java_awt_Shape(this.circle), null);
C$.transform.setToTranslation$D$D(points[0].x, points[0].y);
if (scale > 1) {
C$.transform.scale$D$D(scale, scale);
}var mark=C$.transform.createTransformedShape$java_awt_Shape(this.marker);
drawMe.addDrawShape$java_awt_Shape$java_awt_Stroke(mark, null);
this.hitShapes.add$O(mark);
var crosshair=C$.transform.createTransformedShape$java_awt_Shape(this.crosshatch);
drawMe.addDrawShape$java_awt_Shape$java_awt_Stroke(crosshair, null);
}}if (this.hitShapes.size$() == 0) {
this.hitShapes.add$O(C$.emptyHitShape);
}for (var i=2; i < points.length; i++) {
C$.transform.setToTranslation$D$D(points[i].x, points[i].y);
if (scale > 1) {
C$.transform.scale$D$D(scale, scale);
}if (points[i] !== this.selectedPoint ) {
var mark=C$.transform.createTransformedShape$java_awt_Shape(this.marker);
drawMe.addDrawShape$java_awt_Shape$java_awt_Stroke(mark, null);
if (i >= 2 + this.markedPointCount) {
drawMe.addFillShape$java_awt_Shape(mark);
}}this.hitShapes.add$O(C$.transform.createTransformedShape$java_awt_Shape(C$.hitShape));
}
return drawMe;
});

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
C$.footprints=Clazz.new_($I$(1,1));
C$.hitShape=Clazz.new_($I$(2,1).c$$D$D$D$D,[-6, -6, 12, 12]);
C$.emptyHitShape=Clazz.new_($I$(3,1));
C$.line=Clazz.new_($I$(4,1));
C$.transform=Clazz.new_($I$(5,1));
C$.iconArc=Clazz.new_($I$(6,1));
{
var stroke=Clazz.new_($I$(7,1).c$$F,[1]);
C$.CIRCLE_4=Clazz.new_(C$.c$$S$I,["CircleFitterFootprint.Circle4", 4]);
C$.CIRCLE_4.setStroke$java_awt_BasicStroke(stroke);
C$.footprints.add$O(C$.CIRCLE_4);
C$.CIRCLE_7=Clazz.new_(C$.c$$S$I,["CircleFitterFootprint.Circle7", 7]);
C$.CIRCLE_7.setStroke$java_awt_BasicStroke(stroke);
C$.footprints.add$O(C$.CIRCLE_7);
C$.CIRCLE_4_POINTS_ONLY=Clazz.new_(C$.c$$S$I,["CircleFitterFootprint.Circle4.PointsOnly", 4]);
C$.CIRCLE_4_POINTS_ONLY.setStroke$java_awt_BasicStroke(stroke);
C$.CIRCLE_4_POINTS_ONLY.setCircleVisible$Z(false);
C$.footprints.add$O(C$.CIRCLE_4_POINTS_ONLY);
stroke=Clazz.new_($I$(7,1).c$$F,[2]);
C$.CIRCLE_4_BOLD=Clazz.new_(C$.c$$S$I,["CircleFitterFootprint.Circle4Bold", 4]);
C$.CIRCLE_4_BOLD.setStroke$java_awt_BasicStroke(stroke);
C$.footprints.add$O(C$.CIRCLE_4_BOLD);
C$.CIRCLE_7_BOLD=Clazz.new_(C$.c$$S$I,["CircleFitterFootprint.Circle7Bold", 7]);
C$.CIRCLE_7_BOLD.setStroke$java_awt_BasicStroke(stroke);
C$.footprints.add$O(C$.CIRCLE_7_BOLD);
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
