(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.cabrillo.tracker.PencilDrawing','java.awt.Color','org.opensourcephysics.controls.XML','java.util.ArrayList','java.awt.geom.GeneralPath','org.opensourcephysics.cabrillo.tracker.PencilDrawer',['java.awt.geom.Line2D','.Double'],['java.awt.geom.Ellipse2D','.Double'],['org.opensourcephysics.cabrillo.tracker.PencilDrawing','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PencilDrawing", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['org.opensourcephysics.display.Drawable', 'org.opensourcephysics.display.Measurable']);
C$.$classes$=[['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.color=$I$(2).black;
this.numpts=0;
this.pointArray=Clazz.new_($I$(4,1));
this.coords=Clazz.array(Double.TYPE, [6]);
this.xmin=1.7976931348623157E308;
this.xmax=-1.7976931348623157E308;
this.ymin=1.7976931348623157E308;
this.ymax=-1.7976931348623157E308;
this.generalPath=Clazz.new_($I$(5,1));
this.arrowheadLength=20;
},1);

C$.$fields$=[['D',['xmin','xmax','ymin','ymax'],'I',['style','numpts','arrowheadLength'],'O',['color','java.awt.Color','pointArray','java.util.ArrayList','coords','double[]','drawingStroke','java.awt.Stroke','generalPath','java.awt.geom.GeneralPath','ellipse','java.awt.geom.Ellipse2D','arrowhead','java.awt.geom.Line2D[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.setStroke$java_awt_Stroke($I$(6).lightStroke);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color',  function (c) {
C$.c$.apply(this, []);
this.color=c;
}, 1);

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (this.numpts == 0) return;
var g2=g;
var c=g2.getColor$();
var stroke=g2.getStroke$();
g2.setColor$java_awt_Color(this.color);
g2.setStroke$java_awt_Stroke(this.drawingStroke);
switch (this.style) {
case 0:
if (this.arrowhead == null ) p$1.drawArrow.apply(this, []);
var s=panel.transformShape$java_awt_Shape(this.arrowhead[0]);
g2.draw$java_awt_Shape(s);
s=panel.transformShape$java_awt_Shape(this.arrowhead[1]);
g2.draw$java_awt_Shape(s);
case 2:
s=panel.transformPath$java_awt_geom_GeneralPath(this.generalPath);
g2.draw$java_awt_Shape(s);
break;
case 1:
s=panel.transformShape$java_awt_Shape(this.ellipse);
g2.draw$java_awt_Shape(s);
}
g2.setStroke$java_awt_Stroke(stroke);
g2.setColor$java_awt_Color(c);
});

Clazz.newMeth(C$, 'setStyle$I',  function (newStyle) {
if (newStyle < 0 || newStyle > 2 ) return;
this.style=newStyle;
});

Clazz.newMeth(C$, 'setArrowheadLength$I',  function (length) {
this.arrowheadLength=Math.min(Math.max(length, 10), 80);
});

Clazz.newMeth(C$, 'getPointCount$',  function () {
return this.numpts;
});

Clazz.newMeth(C$, 'getStroke$',  function () {
return this.drawingStroke;
});

Clazz.newMeth(C$, 'setStroke$java_awt_Stroke',  function (stroke) {
this.drawingStroke=stroke;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.numpts=0;
this.xmax=-1.7976931348623157E308;
this.ymax=-1.7976931348623157E308;
this.xmin=1.7976931348623157E308;
this.ymin=1.7976931348623157E308;
this.generalPath.reset$();
});

Clazz.newMeth(C$, 'markPoint$D$D',  function (x, y) {
p$1.addPoint$D$D.apply(this, [x, y]);
switch (this.style) {
case 2:
break;
case 0:
p$1.drawArrow.apply(this, []);
break;
case 1:
p$1.drawCircle.apply(this, []);
}
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.xmin;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.xmax;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return this.ymin;
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return this.ymax;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return this.numpts > 0;
});

Clazz.newMeth(C$, 'addPoint$D$D',  function (x, y) {
if (this.numpts == 0) {
this.generalPath.moveTo$F$F(x, y);
}this.generalPath.lineTo$F$F(x, y);
this.xmin=Math.min(this.xmin, x);
this.xmax=Math.max(this.xmax, x);
this.ymin=Math.min(this.ymin, y);
this.ymax=Math.max(this.ymax, y);
++this.numpts;
}, p$1);

Clazz.newMeth(C$, 'getPathPoints',  function () {
this.pointArray.clear$();
for (var pi=this.generalPath.getPathIterator$java_awt_geom_AffineTransform(null); !pi.isDone$(); pi.next$()) {
var type=pi.currentSegment$DA(this.coords);
if (type == 1) {
this.pointArray.add$O(Clazz.array(Double.TYPE, -1, [this.coords[0], this.coords[1]]));
}}
return this.pointArray.toArray$OA(Clazz.array(Double.TYPE, [this.pointArray.size$(), 3]));
}, p$1);

Clazz.newMeth(C$, 'getEnds',  function () {
var pts=p$1.getPathPoints.apply(this, []);
var ends=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [pts[0][0], pts[0][1]]), Clazz.array(Double.TYPE, -1, [pts[this.numpts - 1][0], pts[this.numpts - 1][1]])]);
this.clear$();
p$1.addPoint$D$D.apply(this, [ends[0][0], ends[0][1]]);
p$1.addPoint$D$D.apply(this, [ends[1][0], ends[1][1]]);
return ends;
}, p$1);

Clazz.newMeth(C$, 'drawArrow',  function () {
if (this.numpts < 2) return;
if (this.arrowhead == null ) this.arrowhead=Clazz.array($I$(7), -1, [Clazz.new_($I$(7,1)), Clazz.new_($I$(7,1))]);
var ends=p$1.getEnds.apply(this, []);
var xTip=ends[1][0];
var yTip=ends[1][1];
var theta=Math.atan2(ends[0][1] - ends[1][1], ends[0][0] - ends[1][0]);
var x=xTip + this.arrowheadLength * Math.cos(theta + 0.5);
var y=yTip + this.arrowheadLength * Math.sin(theta + 0.5);
this.arrowhead[0].setLine$D$D$D$D(ends[1][0], ends[1][1], x, y);
x=xTip + this.arrowheadLength * Math.cos(theta - 0.5);
y=yTip + this.arrowheadLength * Math.sin(theta - 0.5);
this.arrowhead[1].setLine$D$D$D$D(ends[1][0], ends[1][1], x, y);
}, p$1);

Clazz.newMeth(C$, 'drawCircle',  function () {
if (this.numpts < 2) return;
if (this.ellipse == null ) this.ellipse=Clazz.new_($I$(8,1));
var ends=p$1.getEnds.apply(this, []);
this.ellipse.setFrameFromDiagonal$D$D$D$D(ends[0][0], ends[0][1], ends[1][0], ends[1][1]);
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(9,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
{
$I$(3,"setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader",[Clazz.getClass(C$), C$.getLoader$()]);
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.PencilDrawing, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var drawing=obj;
control.setValue$S$I("colorRGB", drawing.color.getRGB$());
control.setValue$S$O("points", p$1.getPathPoints.apply(drawing, []));
control.setValue$S$I("style", drawing.style);
if (drawing.style == 0) control.setValue$S$I("arrowhead", drawing.arrowheadLength);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var drawing=obj;
if (control.getPropertyNamesRaw$().contains$O("style")) drawing.setStyle$I(control.getInt$S("style"));
if (control.getPropertyNamesRaw$().contains$O("arrowhead")) drawing.arrowheadLength=control.getInt$S("arrowhead");
drawing.color=Clazz.new_([control.getInt$S("colorRGB")],$I$(2,1).c$$I);
var points=control.getObject$S("points");
for (var point, $point = 0, $$point = points; $point<$$point.length&&((point=($$point[$point])),1);$point++) {
if (point.length == 3) {
drawing.markPoint$D$D(point[1], point[2]);
} else {
drawing.markPoint$D$D(point[0], point[1]);
}}
return drawing;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
