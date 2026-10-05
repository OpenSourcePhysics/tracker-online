(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'org.opensourcephysics.display.TrailBezier','java.awt.geom.GeneralPath',['org.opensourcephysics.display.TrailBezier','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrailBezier", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.AbstractTrail');
C$.$classes$=[['Loader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.path=Clazz.new_($I$(2,1));
this.pathStart=Clazz.new_($I$(2,1));
this.pathEnd=Clazz.new_($I$(2,1));
this.endPts=Clazz.array(Float.TYPE, [4]);
this.dxEstimate=0;
this.dyEstimate=0;
this.slack=0.15;
},1);

C$.$fields$=[['F',['x0','y0','x1','y1','x2','y2','dxEstimate','dyEstimate','slack','dx2','dy2'],'O',['path','java.awt.geom.GeneralPath','+pathStart','+pathEnd','endPts','float[]']]]

Clazz.newMeth(C$, 'addPoint$D$D',  function (x, y) {
if (this.closed) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Cannot add points to a closed trail."]);
}this.xmin=Math.min(this.xmin, x);
this.xmax=Math.max(this.xmax, x);
this.ymin=Math.min(this.ymin, y);
this.ymax=Math.max(this.ymax, y);
if (this.numpts == 0) {
this.pathStart.moveTo$F$F(x, y);
this.endPts[0]=this.x0=x;
this.endPts[1]=this.y0=y;
} else if (this.numpts == 1) {
this.endPts[2]=this.x1=x;
this.endPts[3]=this.y1=y;
this.path.moveTo$F$F(this.x1, this.y1);
} else if (this.numpts == 2) {
this.x2=x;
this.y2=y;
this.dx2=this.x2 - this.endPts[0];
this.dy2=this.y2 - this.endPts[1];
var dx1=-2 * this.x2 - 4 * this.endPts[0] + 6 * this.endPts[2];
var dy1=-2 * this.y2 - 4 * this.endPts[1] + 6 * this.endPts[3];
this.pathStart.curveTo$F$F$F$F$F$F(this.endPts[0] + this.slack * dx1, this.endPts[1] + this.slack * dy1, this.endPts[2] - this.slack * this.dx2, this.endPts[3] - this.slack * this.dy2, this.endPts[2], this.endPts[3]);
this.endPts[0]=this.endPts[2];
this.endPts[1]=this.endPts[3];
this.endPts[2]=this.x2;
this.endPts[3]=this.y2;
} else {
var dx1=this.dx2;
var dy1=this.dy2;
var fx=x;
var fy=y;
this.dx2=fx - this.endPts[0];
this.dy2=fy - this.endPts[1];
this.path.curveTo$F$F$F$F$F$F(this.endPts[0] + this.slack * dx1, this.endPts[1] + this.slack * dy1, this.endPts[2] - this.slack * this.dx2, this.endPts[3] - this.slack * this.dy2, this.endPts[2], this.endPts[3]);
this.dxEstimate=2 * this.endPts[0] + 4 * fx - 6 * this.endPts[2];
this.dyEstimate=2 * this.endPts[1] + 4 * fy - 6 * this.endPts[3];
this.endPts[0]=this.endPts[2];
this.endPts[1]=this.endPts[3];
this.endPts[2]=fx;
this.endPts[3]=fy;
}++this.numpts;
});

Clazz.newMeth(C$, 'setSlack$D',  function (slack) {
this.slack=slack;
});

Clazz.newMeth(C$, 'closeTrail$',  function () {
this.addPoint$D$D(this.x0, this.y0);
this.addPoint$D$D(this.x1, this.y1);
this.addPoint$D$D(this.x2, this.y2);
this.closed=true;
this.pathStart.reset$();
this.pathEnd.reset$();
this.path.closePath$();
});

Clazz.newMeth(C$, 'clear$',  function () {
this.numpts=0;
this.xmin=1.7976931348623157E308;
this.xmax=-1.7976931348623157E308;
this.ymin=1.7976931348623157E308;
this.ymax=-1.7976931348623157E308;
this.path.reset$();
this.pathStart.reset$();
this.pathEnd.reset$();
this.closed=false;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (this.numpts == 0) {
return;
}var g2=g;
g2.setColor$java_awt_Color(this.color);
var s=panel.transformPath$java_awt_geom_GeneralPath(this.path);
if (this.drawingStroke != null ) {
var stroke=g2.getStroke$();
g2.setStroke$java_awt_Stroke(this.drawingStroke);
g2.draw$java_awt_Shape(s);
g2.setStroke$java_awt_Stroke(stroke);
} else {
g2.draw$java_awt_Shape(s);
}if (this.closed) {
return;
}g2.draw$java_awt_Shape(panel.transformPath$java_awt_geom_GeneralPath(this.pathStart));
if (this.numpts > 2) {
this.pathEnd.reset$();
this.path.moveTo$F$F(this.endPts[0], this.endPts[1]);
this.path.curveTo$F$F$F$F$F$F(this.endPts[0] + this.slack * this.dx2, this.endPts[1] + this.slack * this.dy2, this.endPts[2] - this.slack * this.dxEstimate, this.endPts[3] - this.slack * this.dyEstimate, this.endPts[2], this.endPts[3]);
g2.draw$java_awt_Shape(panel.transformPath$java_awt_geom_GeneralPath(this.pathEnd));
}});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(3,1));
}, 1);

Clazz.newMeth(C$, 'isMeasured$',  function () {
return this.enableMeasure && (this.numpts > 0) ;
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
;
(function(){/*c*/var C$=Clazz.newClass(P$.TrailBezier, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var trail=obj;
control.setValue$S$Z("closed", trail.closed);
control.setValue$S$O("color", trail.color);
control.setValue$S$I("number of pts", trail.numpts);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var trail=obj;
trail.closed=control.getBoolean$S("closed");
trail.color=control.getObject$S("color");
trail.numpts=control.getInt$S("number of pts");
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
