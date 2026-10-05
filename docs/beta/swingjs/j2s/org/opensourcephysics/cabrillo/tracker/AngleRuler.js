(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.display.OSPRuntime',['java.awt.geom.Line2D','.Double'],'org.opensourcephysics.tools.FontSizer',['org.opensourcephysics.cabrillo.tracker.Ruler','.Label'],['java.awt.geom.Arc2D','.Double'],'org.opensourcephysics.cabrillo.tracker.MultiShape','java.awt.Shape','java.awt.Stroke','java.awt.geom.Line2D','java.util.Arrays','java.awt.geom.AffineTransform','java.awt.RenderingHints']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AngleRuler", null, 'org.opensourcephysics.cabrillo.tracker.Ruler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_Protractor',  function (protractor) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_InputTrack.apply(this,[protractor]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getMark$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I',  function (trackerPanel, n) {
if (trackerPanel.isWorldPanel$()) return null;
this.refreshStrokes$();
this.format.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(1).getDecimalFormatSymbols$());
var vertex=this.track.getStep$I(n).getPoints$()[0];
var baseEnd=this.track.getStep$I(n).getPoints$()[1];
var screenVertex=vertex.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
var screenRadius=screenVertex.distance$java_awt_geom_Point2D(baseEnd.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel));
var baseAngle=-vertex.angle$java_awt_geom_Point2D_Double(baseEnd);
this.transform.setToRotation$D$D$D(-baseAngle, screenVertex.x, screenVertex.y);
var isDegrees=!this.track.tp.isAnglesInRadians$();
var delta=this.rulerLineSpacing / screenRadius;
if (isDegrees) delta*=57.29577951308232;
var majorSpacing=0;
var halfSpacing=0;
if (isDegrees && delta > 0.5  ) {
var spacing=delta <= 1  ? 1 : delta <= 2  ? 2 : delta <= 5  ? 5 : delta <= 10  ? 10 : delta <= 15  ? 15 : 30;
switch (spacing) {
case 1:
majorSpacing=10;
halfSpacing=5;
break;
case 2:
majorSpacing=15;
halfSpacing=5;
break;
case 5:
majorSpacing=18;
halfSpacing=2;
break;
case 10:
majorSpacing=9;
halfSpacing=1;
break;
case 15:
majorSpacing=3;
halfSpacing=1;
break;
case 30:
majorSpacing=3;
halfSpacing=1;
break;
}
delta=spacing;
} else {
var power=1;
while (power * 10 < delta )power*=10;

while (power > delta )power/=10;

var significand=delta / power;
var spacing=significand <= 2  ? 2 : significand <= 5  ? 5 : 10;
majorSpacing=spacing == 2 ? 25 : 10;
halfSpacing=spacing == 5 ? 2 : 5;
delta=spacing * power;
}var armLine=null;
var step=this.track.getStep$I(n);
var armEnd=step.getPoints$()[2];
var armRadius=screenVertex.distance$java_awt_geom_Point2D(armEnd.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel));
var armAngle=step.getProtractorAngle$Z(false);
var cos=Math.cos(armAngle);
var sin=Math.sin(armAngle);
if (armRadius < screenRadius ) {
armLine=Clazz.new_($I$(2,1).c$$D$D$D$D,[screenVertex.x + armRadius * cos, screenVertex.y - armRadius * sin, screenVertex.x + screenRadius * cos, screenVertex.y - screenRadius * sin]);
}for (var i=0; i < this.lines.size$(); i++) {
this.lines.get$I(i).clear$();
}
this.labelMarks.clear$();
var inset=this.rulerSize > 0  ? this.insetPerLevel : -this.insetPerLevel;
var factor=$I$(3).getFactor$();
var formatMinValue=majorSpacing * delta;
var labelRadius=screenRadius + factor * this.labelGap;
var ang=isDegrees ? 180 : 3.141592653589793;
var lineCount=(Math.ceil(ang / delta)|0);
for (var i=1; i < lineCount; i++) {
var level=i % majorSpacing == 0 ? 0 : i % halfSpacing == 0 ? 1 : 2;
var angleInRadians=isDegrees ? i * delta * 3.141592653589793  / 180 : i * delta;
var drawLines=this.lines.get$I(level);
var lineLength=this.rulerSize - inset * level;
var inside=screenRadius - lineLength;
cos=Math.cos(angleInRadians);
sin=Math.sin(angleInRadians);
var line=Clazz.new_($I$(2,1));
drawLines.add$O(line);
line.setLine$D$D$D$D(screenVertex.x + inside * cos, screenVertex.y - inside * sin, screenVertex.x + screenRadius * cos, screenVertex.y - screenRadius * sin);
line=Clazz.new_($I$(2,1));
drawLines.add$O(line);
line.setLine$D$D$D$D(screenVertex.x + inside * cos, screenVertex.y + inside * sin, screenVertex.x + screenRadius * cos, screenVertex.y + screenRadius * sin);
if (level == 0) {
var s=this.getFormattedValue$D$D(i * delta, formatMinValue);
if (isDegrees) s+="\u00b0";
var label=Clazz.new_($I$(4,1).c$$S$D$D,[this, null, s, screenVertex.x + labelRadius * cos, screenVertex.y - labelRadius * sin]);
label.rotation=Double.valueOf$D((1.5707963267948966 - angleInRadians) + (p$1.isLabelFlipped$D.apply(this, [baseAngle + angleInRadians]) ? 3.141592653589793 : 0));
this.labelMarks.add$O(label);
s=this.getFormattedValue$D$D(-i * delta, formatMinValue);
if (isDegrees) s+="\u00b0";
label=Clazz.new_($I$(4,1).c$$S$D$D,[this, null, s, screenVertex.x + labelRadius * cos, screenVertex.y + labelRadius * sin]);
label.rotation=Double.valueOf$D(angleInRadians + 1.5707963267948966 + (p$1.isLabelFlipped$D.apply(this, [baseAngle - angleInRadians]) ? 3.141592653589793 : 0));
this.labelMarks.add$O(label);
}}
var s=this.getFormattedValue$D$D(0, formatMinValue);
if (isDegrees) s+="\u00b0";
var label=Clazz.new_($I$(4,1).c$$S$D$D,[this, null, s, screenVertex.x + labelRadius, screenVertex.y]);
label.rotation=Double.valueOf$D(p$1.isLabelFlipped$D.apply(this, [baseAngle]) ? -1.5707963267948966 : 1.5707963267948966);
this.labelMarks.add$O(label);
if (isDegrees) {
s=this.getFormattedValue$D$D(180, formatMinValue);
s+="\u00b0";
label=Clazz.new_($I$(4,1).c$$S$D$D,[this, null, s, screenVertex.x - labelRadius, screenVertex.y]);
label.rotation=Double.valueOf$D(p$1.isLabelFlipped$D.apply(this, [baseAngle - 3.141592653589793]) ? 1.5707963267948966 : -1.5707963267948966);
this.labelMarks.add$O(label);
}var vertexLine=Clazz.new_([screenVertex.x, screenVertex.y - (this.insetPerLevel/2|0), screenVertex.x, screenVertex.y + (this.insetPerLevel/2|0)],$I$(2,1).c$$D$D$D$D);
var base=Clazz.new_($I$(2,1).c$$D$D$D$D,[screenVertex.x, screenVertex.y, screenVertex.x - screenRadius, screenVertex.y]);
var arc=Clazz.new_($I$(5,1));
arc.setArcByCenter$D$D$D$D$D$I(screenVertex.x, screenVertex.y, screenRadius, 0, 360, 0);
var str=this.strokes[0];
var arcMultiShape=armLine != null  ? Clazz.new_([Clazz.array($I$(7), -1, [arc, base, vertexLine, armLine])],$I$(6,1).c$$java_awt_ShapeA).andStroke$java_awt_StrokeA(Clazz.array($I$(8), -1, [str, str, str, this.dashedStroke])).transform$java_awt_geom_AffineTransform(this.transform) : Clazz.new_([Clazz.array($I$(7), -1, [arc, base, vertexLine])],$I$(6,1).c$$java_awt_ShapeA).andStroke$java_awt_StrokeA(Clazz.array($I$(8), -1, [str, str, str])).transform$java_awt_geom_AffineTransform(this.transform);
for (var i=0; i < this.lines.size$(); i++) {
var drawLines=this.lines.get$I(i);
var lineArray=drawLines.toArray$OA(Clazz.array($I$(9), [drawLines.size$()]));
var lineStrokes=Clazz.array($I$(8), [lineArray.length]);
$I$(10).fill$OA$O(lineStrokes, this.strokes[i]);
this.multiShapes[i]=Clazz.new_($I$(6,1).c$$java_awt_ShapeA,[lineArray]).andStroke$java_awt_StrokeA(lineStrokes).transform$java_awt_geom_AffineTransform(this.transform);
}
var myShapes=$I$(10).copyOf$OA$I(this.multiShapes, this.multiShapes.length);
var myTransform=Clazz.new_($I$(11,1).c$$java_awt_geom_AffineTransform,[this.transform]);
var myLabels=this.labelMarks.toArray$OA(Clazz.array($I$(4), [this.labelMarks.size$()]));
return ((P$.AngleRuler$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AngleRuler$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
var g2=g.create$();
if ($I$(1).setRenderingHints) g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(12).KEY_ANTIALIASING, $I$(12).VALUE_ANTIALIAS_ON);
for (var i=0; i < this.$finals$.myShapes.length; i++) {
g2.setPaint$java_awt_Paint(this.b$['org.opensourcephysics.cabrillo.tracker.AngleRuler'].colors[i]);
this.$finals$.myShapes[i].draw$java_awt_Graphics2D(g2);
}
g2.setPaint$java_awt_Paint(this.b$['org.opensourcephysics.cabrillo.tracker.AngleRuler'].colors[0]);
this.$finals$.arcMultiShape.draw$java_awt_Graphics2D(g2);
var t=g2.getTransform$();
t.concatenate$java_awt_geom_AffineTransform(this.$finals$.myTransform);
g2.setTransform$java_awt_geom_AffineTransform(t);
for (var i=0; i < this.$finals$.myLabels.length; i++) {
this.$finals$.myLabels[i].draw$java_awt_Graphics2D(g2);
}
g2.dispose$();
});
})()
), Clazz.new_(P$.AngleRuler$1.$init$,[this, {myShapes:myShapes,arcMultiShape:arcMultiShape,myLabels:myLabels,myTransform:myTransform}]));
});

Clazz.newMeth(C$, 'isLabelFlipped$D',  function (angle) {
angle=angle < -3.141592653589793  ? angle + 6.283185307179586 : angle > 3.141592653589793  ? angle - 6.283185307179586 : angle;
var offset=0.1;
return (angle < -offset  && angle > -3.141592653589793 + offset  );
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
