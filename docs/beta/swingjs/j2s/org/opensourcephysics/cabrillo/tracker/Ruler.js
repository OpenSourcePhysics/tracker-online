(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.awt.Color','org.opensourcephysics.cabrillo.tracker.MultiShape','java.awt.geom.AffineTransform','java.text.NumberFormat',['org.opensourcephysics.cabrillo.tracker.Ruler','.Handle'],'org.opensourcephysics.media.core.TPoint','java.util.ArrayList','java.awt.BasicStroke','org.opensourcephysics.tools.FontSizer',['java.awt.geom.Line2D','.Double']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Ruler", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Handle',0],['Label',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.colors=Clazz.array($I$(1), [3]);
this.alpha=255;
this.multiShapes=Clazz.array($I$(2), [3]);
this.rulerLineSpacing=4.0;
this.insetPerLevel=5;
this.labelGap=12;
this.lineGap=4;
this.transform=Clazz.new_($I$(3,1));
this.labelTransform=Clazz.new_($I$(3,1));
this.format=$I$(4).getInstance$();
this.prevSigFigs=0;
},1);

C$.$fields$=[['Z',['visible','hitShapeVisible'],'D',['rulerSize','rulerLineSpacing','previousLineSpacing','previousAngle'],'I',['alpha','insetPerLevel','labelGap','lineGap','prevSigFigs'],'O',['track','org.opensourcephysics.cabrillo.tracker.InputTrack','baseStrokes','java.awt.BasicStroke[]','+strokes','dashedStroke','java.awt.BasicStroke','colors','java.awt.Color[]','lines','java.util.ArrayList','multiShapes','org.opensourcephysics.cabrillo.tracker.MultiShape[]','labelMarks','java.util.ArrayList','handle','org.opensourcephysics.cabrillo.tracker.Ruler.Handle','utilityPoint','org.opensourcephysics.media.core.TPoint','transform','java.awt.geom.AffineTransform','+labelTransform','format','java.text.DecimalFormat','previousDistFromLineEnd','Double']]
,['O',['DASHED_LINE','float[]']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_InputTrack',  function (track) {
;C$.$init$.apply(this);
this.track=track;
this.handle=Clazz.new_($I$(5,1),[this, null]);
this.utilityPoint=Clazz.new_($I$(6,1));
this.lines=Clazz.new_($I$(7,1));
this.labelMarks=Clazz.new_($I$(7,1));
for (var i=0; i < 3; i++) {
this.lines.add$O(Clazz.new_($I$(7,1)));
}
this.setRulerSize$D(30);
this.setStrokeWidth$F(1);
this.setColor$java_awt_Color(track.getColor$());
}, 1);

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_awt_Rectangle',  function (trackerPanel, hitRect) {
return null;
});

Clazz.newMeth(C$, 'setHandleXY$D$D',  function (x, y) {
});

Clazz.newMeth(C$, 'getHandle$',  function () {
return this.handle;
});

Clazz.newMeth(C$, 'setHitShapeVisible$Z',  function (vis) {
this.hitShapeVisible=vis && !this.track.isLocked$() ;
});

Clazz.newMeth(C$, 'setStrokeWidth$F',  function (width) {
this.baseStrokes=Clazz.array($I$(8), -1, [Clazz.new_($I$(8,1).c$$F,[width]), Clazz.new_($I$(8,1).c$$F,[width]), Clazz.new_($I$(8,1).c$$F,[width])]);
this.dashedStroke=Clazz.new_($I$(8,1).c$$F$I$I$F$FA$F,[width, 0, 0, 8, C$.DASHED_LINE, 0]);
this.strokes=Clazz.array($I$(8), [this.baseStrokes.length]);
});

Clazz.newMeth(C$, 'getStrokeWidth$',  function () {
return this.baseStrokes[0].getLineWidth$();
});

Clazz.newMeth(C$, 'refreshStrokes$',  function () {
var scale=$I$(9).getIntegerFactor$();
if (this.strokes[0] == null  || this.strokes[0].getLineWidth$() != scale * this.baseStrokes[0].getLineWidth$()  ) {
for (var i=0; i < this.strokes.length; i++) {
this.strokes[i]=Clazz.new_([scale * this.baseStrokes[i].getLineWidth$()],$I$(8,1).c$$F);
}
this.dashedStroke=Clazz.new_([scale * this.baseStrokes[0].getLineWidth$(), 0, 0, 8, C$.DASHED_LINE, 0],$I$(8,1).c$$F$I$I$F$FA$F);
}});

Clazz.newMeth(C$, 'setRulerSize$D',  function (size) {
var minSize=15;
if (Math.abs(size) < minSize ) return;
this.rulerSize=size >= 0  ? Math.max(Math.min(size, 200), minSize) : Math.min(Math.max(size, -200), -minSize);
this.insetPerLevel=Math.max(((Math.abs(this.rulerSize) / 3)|0), 5);
});

Clazz.newMeth(C$, 'getRulerSize$',  function () {
return this.rulerSize;
});

Clazz.newMeth(C$, 'setLineSpacing$D',  function (space) {
this.rulerLineSpacing=Math.min(Math.max(space, 4.0), 100.0);
});

Clazz.newMeth(C$, 'getLineSpacing$',  function () {
return this.rulerLineSpacing;
});

Clazz.newMeth(C$, 'getColor$',  function () {
return this.colors[0];
});

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (color) {
if (color != null ) {
for (var i=0; i < this.colors.length; i++) {
var alfa=this.alpha - (i * this.alpha/(this.colors.length + 1)|0);
this.colors[i]=Clazz.new_([color.getRed$(), color.getGreen$(), color.getBlue$(), alfa],$I$(1,1).c$$I$I$I$I);
}
}});

Clazz.newMeth(C$, 'getAlpha$',  function () {
return this.alpha;
});

Clazz.newMeth(C$, 'setAlpha$I',  function (alpha) {
alpha=Math.min(alpha, 255);
alpha=Math.max(alpha, 0);
this.alpha=alpha;
this.setColor$java_awt_Color(this.colors[1]);
});

Clazz.newMeth(C$, 'setVisible$Z',  function (isVisible) {
this.visible=isVisible;
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'getFormattedValue$D$D',  function (value, min) {
if (value == 0 ) return "0";
var sigfigs=min >= 1000  ? 4 : min >= 1  ? 0 : min >= 0.1  ? 1 : min >= 0.01  ? 2 : min >= 0.001  ? 3 : 4;
if (this.prevSigFigs != sigfigs) {
switch (sigfigs) {
case 0:
this.format.applyPattern$S("0");
break;
case 1:
this.format.applyPattern$S("0.0");
break;
case 2:
this.format.applyPattern$S("0.00");
break;
case 3:
this.format.applyPattern$S("0.000");
break;
default:
this.format.applyPattern$S("0E0");
}
}this.prevSigFigs=sigfigs;
return this.format.format$D(value);
});

Clazz.newMeth(C$, 'getScreenDistanceToBase$java_awt_Point',  function (p) {
var pts=this.track.getStep$I(this.track.tp.getFrameNumber$()).getPoints$();
var p1=pts[0].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(this.track.tp);
var p2=pts[1].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(this.track.tp);
var tapeLine=Clazz.new_($I$(10,1).c$$java_awt_geom_Point2D$java_awt_geom_Point2D,[p1, p2]);
return tapeLine.ptLineDist$D$D(p.x, p.y);
});

Clazz.newMeth(C$, 'isLeft$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint',  function (p, end1, end2) {
return ((end2.x - end1.x) * (p.y - end1.y) - (end2.y - end1.y) * (p.x - end1.x)) > 0 ;
});

C$.$static$=function(){C$.$static$=0;
C$.DASHED_LINE=Clazz.array(Float.TYPE, -1, [4, 8]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Ruler, "Handle", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$D$D.apply(this,[0, 0]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
this.b$['org.opensourcephysics.cabrillo.tracker.Ruler'].setHandleXY$D$D.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Ruler'], [x, y]);
});

Clazz.newMeth(C$, 'setScreenLocation$I$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (xpix, ypix, trackerPanel) {
this.b$['org.opensourcephysics.cabrillo.tracker.Ruler'].utilityPoint.setScreenPosition$I$I$org_opensourcephysics_media_core_VideoPanel(xpix, ypix, trackerPanel);
this.setLocation$D$D(this.b$['org.opensourcephysics.cabrillo.tracker.Ruler'].utilityPoint.x, this.b$['org.opensourcephysics.cabrillo.tracker.Ruler'].utilityPoint.y);
});

Clazz.newMeth(C$, 'setAdjusting$Z$java_awt_event_MouseEvent',  function (adjust, e) {
if (adjust == this.isAdjusting ) return;
C$.superclazz.prototype.setAdjusting$Z$java_awt_event_MouseEvent.apply(this, [adjust, e]);
if (this.isAdjusting) {
this.b$['org.opensourcephysics.cabrillo.tracker.Ruler'].previousDistFromLineEnd=null;
}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Ruler, "Label", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['x','y'],'S',['text'],'O',['rotation','Double']]]

Clazz.newMeth(C$, 'c$$S$D$D',  function (s, x, y) {
;C$.$init$.apply(this);
this.text=s;
this.x=(x|0);
this.y=(y|0);
}, 1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D',  function (g) {
var g2=g.create$();
var metrics=g2.getFontMetrics$();
var x1=this.x - (metrics.stringWidth$S(this.text)/2|0);
var y1=this.y - (metrics.getHeight$()/2|0) + metrics.getAscent$();
if (this.rotation != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.Ruler'].labelTransform.setToRotation$D$D$D((this.rotation).valueOf(), this.x, this.y);
var t=g2.getTransform$();
t.concatenate$java_awt_geom_AffineTransform(this.b$['org.opensourcephysics.cabrillo.tracker.Ruler'].labelTransform);
g2.setTransform$java_awt_geom_AffineTransform(t);
}g2.drawString$S$I$I(this.text, x1, y1);
g2.dispose$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
