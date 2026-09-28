(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.util.HashSet',['java.awt.geom.Ellipse2D','.Double'],'java.awt.geom.GeneralPath','java.awt.BasicStroke','java.awt.Rectangle','org.opensourcephysics.cabrillo.tracker.PositionVectorFootprint','java.awt.geom.AffineTransform','java.awt.Color','java.awt.Shape','org.opensourcephysics.cabrillo.tracker.TrackerRes','java.awt.Point','org.opensourcephysics.cabrillo.tracker.ShapeIcon','org.opensourcephysics.display.ResizableIcon','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints','org.opensourcephysics.cabrillo.tracker.MultiShape','java.awt.Stroke']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PointShapeFootprint", null, null, ['org.opensourcephysics.cabrillo.tracker.Footprint', 'Cloneable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.transform=Clazz.new_($I$(7,1));
this.baseStroke=Clazz.new_($I$(4,1));
this.highlightStroke=Clazz.new_($I$(4,1).c$$F,[2]);
this.color=$I$(8).black;
this.hitShapes=Clazz.array($I$(9), [1]);
},1);

C$.$fields$=[['S',['name'],'O',['shape','java.awt.Shape','+highlight','transform','java.awt.geom.AffineTransform','baseStroke','java.awt.BasicStroke','+stroke','+highlightStroke','color','java.awt.Color','hitShapes','java.awt.Shape[]']]
,['O',['footprints','java.util.Collection','HIGHLIGHT','java.awt.geom.Ellipse2D','DIAMOND','org.opensourcephysics.cabrillo.tracker.PointShapeFootprint','+BOLD_DIAMOND','+SOLID_DIAMOND','+TRIANGLE','+BOLD_TRIANGLE','+SOLID_TRIANGLE','+CIRCLE','+BOLD_CIRCLE','+SOLID_CIRCLE','+VERT_LINE','+BOLD_VERT_LINE','+HORZ_LINE','+BOLD_HORZ_LINE','+CROSSHAIR','+BOLD_CROSSHAIR','+SIMPLE_AXES','+BOLD_SIMPLE_AXES','+SMALL_SPOT','+SMALL_CIRCLE','+SOLID_SQUARE','+VECTOR','+BOLD_VECTOR','+SHAPE','+BOLD_SHAPE']]]

Clazz.newMeth(C$, 'c$$S$java_awt_Shape',  function (name, shape) {
;C$.$init$.apply(this);
this.name=name;
this.shape=shape;
}, 1);

Clazz.newMeth(C$, 'getFootprint$S',  function (name) {
var it=C$.footprints.iterator$();
while (it.hasNext$()){
var footprint=it.next$();
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

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getDisplayName$',  function () {
return $I$(10).getString$S(this.name);
});

Clazz.newMeth(C$, 'getLength$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getIcon$I$I',  function (w, h) {
var shape=this.getShape$java_awt_PointA$I(Clazz.array($I$(11), -1, [Clazz.new_($I$(11,1))]), 1);
var icon=Clazz.new_($I$(12,1).c$$org_opensourcephysics_cabrillo_tracker_MultiShape$I$I,[shape, w, h]);
icon.setColor$java_awt_Color(this.color);
icon.setStroke$java_awt_BasicStroke(this.stroke);
return Clazz.new_($I$(13,1).c$$javax_swing_Icon,[icon]);
});

Clazz.newMeth(C$, 'getMark$java_awt_PointA',  function (points) {
var shape=this.getShape$java_awt_PointA$I(points, $I$(14).getIntegerFactor$());
var highlight=this.highlight;
return ((P$.PointShapeFootprint$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PointShapeFootprint$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
var gpaint=g.getPaint$();
var gstroke=g.getStroke$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.PointShapeFootprint'].stroke != null ) g.setStroke$java_awt_Stroke(this.b$['org.opensourcephysics.cabrillo.tracker.PointShapeFootprint'].stroke);
g.setPaint$java_awt_Paint(this.b$['org.opensourcephysics.cabrillo.tracker.PointShapeFootprint'].color);
if ($I$(15).setRenderingHints) g.setRenderingHint$java_awt_RenderingHints_Key$O($I$(16).KEY_ANTIALIASING, $I$(16).VALUE_ANTIALIAS_ON);
this.$finals$.shape.draw$java_awt_Graphics2D(g);
if (highlighted) {
g.setStroke$java_awt_Stroke(this.b$['org.opensourcephysics.cabrillo.tracker.PointShapeFootprint'].highlightStroke);
g.draw$java_awt_Shape(this.$finals$.highlight);
}g.setPaint$java_awt_Paint(gpaint);
g.setStroke$java_awt_Stroke(gstroke);
});
})()
), Clazz.new_(P$.PointShapeFootprint$1.$init$,[this, {shape:shape,highlight:highlight}]));
});

Clazz.newMeth(C$, 'getHitShapes$',  function () {
return this.hitShapes;
});

Clazz.newMeth(C$, 'setShape$java_awt_Shape',  function (shape) {
if (shape != null ) this.shape=shape;
});

Clazz.newMeth(C$, 'setStroke$java_awt_BasicStroke',  function (stroke) {
this.baseStroke=stroke;
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

Clazz.newMeth(C$, 'getShape$java_awt_PointA$I',  function (points, scale) {
var p=points[0];
this.transform.setToTranslation$D$D(p.x, p.y);
if (scale > 1) {
this.transform.scale$D$D(scale, scale);
}var transformedShape=this.transform.createTransformedShape$java_awt_Shape(this.shape);
this.highlight=this.transform.createTransformedShape$java_awt_Shape(C$.HIGHLIGHT);
if (this.baseStroke != null ) {
if (this.stroke == null  || this.stroke.getLineWidth$() != scale * this.baseStroke.getLineWidth$()  ) {
this.stroke=Clazz.new_([scale * this.baseStroke.getLineWidth$()],$I$(4,1).c$$F);
}}this.hitShapes[0]=transformedShape;
return this.stroke != null  ? Clazz.new_([Clazz.array($I$(9), -1, [transformedShape])],$I$(17,1).c$$java_awt_ShapeA).andStroke$java_awt_StrokeA(Clazz.array($I$(18), -1, [this.stroke])) : Clazz.new_([Clazz.array($I$(9), -1, [transformedShape])],$I$(17,1).c$$java_awt_ShapeA).andFill$ZA(Clazz.array(Boolean.TYPE, -1, [true]));
});

C$.$static$=function(){C$.$static$=0;
C$.footprints=Clazz.new_($I$(1,1));
{
var w=3000;
C$.HIGHLIGHT=Clazz.new_($I$(2,1));
C$.HIGHLIGHT.setFrame$D$D$D$D(-6, -6, 12, 12);
var diamond=Clazz.new_($I$(3,1));
diamond.moveTo$F$F(-5, 0);
diamond.lineTo$F$F(0, 5);
diamond.lineTo$F$F(5.01, 0);
diamond.lineTo$F$F(0, -5);
diamond.closePath$();
C$.DIAMOND=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.Diamond", diamond]);
C$.footprints.add$O(C$.DIAMOND);
C$.BOLD_DIAMOND=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.BoldDiamond", diamond]);
C$.BOLD_DIAMOND.setStroke$java_awt_BasicStroke(Clazz.new_($I$(4,1).c$$F,[2]));
C$.footprints.add$O(C$.BOLD_DIAMOND);
C$.SOLID_DIAMOND=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.SolidDiamond", diamond]);
C$.SOLID_DIAMOND.setStroke$java_awt_BasicStroke(null);
C$.footprints.add$O(C$.SOLID_DIAMOND);
var triangle=Clazz.new_($I$(3,1));
triangle.moveTo$F$F(0, -5);
triangle.lineTo$F$F(4, 3);
triangle.lineTo$F$F(-4, 3);
triangle.closePath$();
C$.TRIANGLE=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.Triangle", triangle]);
C$.footprints.add$O(C$.TRIANGLE);
C$.BOLD_TRIANGLE=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.BoldTriangle", triangle]);
C$.BOLD_TRIANGLE.setStroke$java_awt_BasicStroke(Clazz.new_($I$(4,1).c$$F,[2]));
C$.footprints.add$O(C$.BOLD_TRIANGLE);
C$.SOLID_TRIANGLE=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.SolidTriangle", triangle]);
C$.SOLID_TRIANGLE.setStroke$java_awt_BasicStroke(null);
C$.footprints.add$O(C$.SOLID_TRIANGLE);
var circle=Clazz.new_($I$(2,1));
circle.setFrame$D$D$D$D(-5, -5, 10, 10);
C$.CIRCLE=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.Circle", circle]);
C$.footprints.add$O(C$.CIRCLE);
C$.BOLD_CIRCLE=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.BoldCircle", circle]);
C$.BOLD_CIRCLE.setStroke$java_awt_BasicStroke(Clazz.new_($I$(4,1).c$$F,[2]));
C$.footprints.add$O(C$.BOLD_CIRCLE);
C$.SOLID_CIRCLE=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.SolidCircle", circle]);
C$.SOLID_CIRCLE.setStroke$java_awt_BasicStroke(null);
C$.footprints.add$O(C$.SOLID_CIRCLE);
circle=Clazz.new_($I$(2,1));
circle.setFrame$D$D$D$D(-3, -3, 6, 6);
C$.SMALL_CIRCLE=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.SmallCircle", circle]);
C$.footprints.add$O(C$.SMALL_CIRCLE);
var smallSpot=Clazz.new_($I$(2,1).c$$D$D$D$D,[-2, -2, 4, 4]);
C$.SMALL_SPOT=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.Spot", smallSpot]);
C$.SMALL_SPOT.setStroke$java_awt_BasicStroke(null);
C$.footprints.add$O(C$.SMALL_SPOT);
var vertLine=Clazz.new_($I$(3,1));
vertLine.moveTo$F$F(0, -w);
vertLine.lineTo$F$F(0, w);
vertLine.moveTo$F$F(-3, 0);
vertLine.lineTo$F$F(3, 0);
C$.VERT_LINE=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.VerticalLine", vertLine]);
C$.footprints.add$O(C$.VERT_LINE);
C$.BOLD_VERT_LINE=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.BoldVerticalLine", vertLine]);
C$.BOLD_VERT_LINE.setStroke$java_awt_BasicStroke(Clazz.new_($I$(4,1).c$$F,[2]));
C$.footprints.add$O(C$.BOLD_VERT_LINE);
var horzLine=Clazz.new_($I$(3,1));
horzLine.moveTo$F$F(0, -3);
horzLine.lineTo$F$F(0, 3);
horzLine.moveTo$F$F(-w, 0);
horzLine.lineTo$F$F(w, 0);
C$.HORZ_LINE=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.HorizontalLine", horzLine]);
C$.footprints.add$O(C$.HORZ_LINE);
C$.BOLD_HORZ_LINE=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.BoldHorizontalLine", horzLine]);
C$.BOLD_HORZ_LINE.setStroke$java_awt_BasicStroke(Clazz.new_($I$(4,1).c$$F,[2]));
C$.footprints.add$O(C$.BOLD_HORZ_LINE);
var crosshair=Clazz.new_($I$(3,1));
crosshair.moveTo$F$F(0, -4);
crosshair.lineTo$F$F(0, 4);
crosshair.moveTo$F$F(-4, 0);
crosshair.lineTo$F$F(4, 0);
C$.CROSSHAIR=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.Crosshair", crosshair]);
C$.footprints.add$O(C$.CROSSHAIR);
C$.BOLD_CROSSHAIR=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.BoldCrosshair", crosshair]);
C$.BOLD_CROSSHAIR.setStroke$java_awt_BasicStroke(Clazz.new_($I$(4,1).c$$F,[2]));
C$.footprints.add$O(C$.BOLD_CROSSHAIR);
var axes=Clazz.new_($I$(3,1));
axes.reset$();
axes.moveTo$F$F(w, 0);
axes.lineTo$F$F(-w, 0);
axes.moveTo$F$F(0, w);
axes.lineTo$F$F(0, -w);
axes.moveTo$F$F(25, 5);
axes.lineTo$F$F(25, -5);
C$.SIMPLE_AXES=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.SimpleAxes", axes]);
C$.footprints.add$O(C$.SIMPLE_AXES);
C$.BOLD_SIMPLE_AXES=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.BoldSimpleAxes", axes]);
C$.BOLD_SIMPLE_AXES.setStroke$java_awt_BasicStroke(Clazz.new_($I$(4,1).c$$F,[2]));
C$.footprints.add$O(C$.BOLD_SIMPLE_AXES);
var square=Clazz.new_($I$(5,1).c$$I$I$I$I,[-3, -3, 6, 6]);
C$.SOLID_SQUARE=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.SolidSquare", square]);
C$.SOLID_SQUARE.setStroke$java_awt_BasicStroke(null);
C$.footprints.add$O(C$.SOLID_SQUARE);
C$.VECTOR=Clazz.new_($I$(6,1).c$$S$I,["Footprint.PositionVector", 1]);
C$.footprints.add$O(C$.VECTOR);
C$.BOLD_VECTOR=Clazz.new_($I$(6,1).c$$S$I,["Footprint.BoldPositionVector", 2]);
C$.footprints.add$O(C$.BOLD_VECTOR);
circle=Clazz.new_($I$(2,1));
circle.setFrame$D$D$D$D(-5, -5, 10, 10);
C$.SHAPE=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.Shape", circle]);
C$.footprints.add$O(C$.SHAPE);
C$.BOLD_SHAPE=Clazz.new_(C$.c$$S$java_awt_Shape,["Footprint.BoldShape", circle]);
C$.BOLD_SHAPE.setStroke$java_awt_BasicStroke(Clazz.new_($I$(4,1).c$$F,[2]));
C$.footprints.add$O(C$.BOLD_SHAPE);
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
