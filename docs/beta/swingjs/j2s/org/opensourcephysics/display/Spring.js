(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'java.awt.geom.GeneralPath','java.awt.Color','java.awt.BasicStroke']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Spring", null, null, 'org.opensourcephysics.display.Measurable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.springPath=Clazz.new_($I$(1,1));
this.thinExtremes=true;
this.visible=true;
this.loops=-1;
this.pointsPerLoop=-1;
this.x=0.0;
this.y=0.0;
this.sizex=0.1;
this.sizey=0.0;
this.radius=0.1;
this.solenoid=0.0;
this.edgeColor=$I$(2).BLACK;
this.edgeStroke=Clazz.new_($I$(3,1).c$$F,[1.0]);
this.hasChanged=true;
this.zeroLength=false;
this.segments=0;
this.xPoints=null;
this.yPoints=null;
},1);

C$.$fields$=[['Z',['thinExtremes','visible','hasChanged','zeroLength'],'F',['x','y','sizex','sizey','radius','solenoid'],'I',['loops','pointsPerLoop','segments'],'O',['springPath','java.awt.geom.GeneralPath','edgeColor','java.awt.Color','edgeStroke','java.awt.Stroke','xPoints','float[]','+yPoints']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$D.apply(this, [0.1]);
}, 1);

Clazz.newMeth(C$, 'c$$D',  function (_radius) {
;C$.$init$.apply(this);
this.setRadius$D(_radius);
this.setResolution$I$I(8, 15);
}, 1);

Clazz.newMeth(C$, 'setX$D',  function (x) {
this.x=x;
this.hasChanged=true;
});

Clazz.newMeth(C$, 'getX$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'setY$D',  function (y) {
this.y=y;
this.hasChanged=true;
});

Clazz.newMeth(C$, 'getY$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
this.x=x;
this.y=y;
this.hasChanged=true;
});

Clazz.newMeth(C$, 'setSizeX$D',  function (sizeX) {
this.sizex=sizeX;
this.hasChanged=true;
});

Clazz.newMeth(C$, 'getSizeX$',  function () {
return this.sizex;
});

Clazz.newMeth(C$, 'setSizeY$D',  function (sizeY) {
this.sizey=sizeY;
this.hasChanged=true;
});

Clazz.newMeth(C$, 'getSizeY$',  function () {
return this.sizey;
});

Clazz.newMeth(C$, 'setSizeXY$D$D',  function (sizeX, sizeY) {
this.sizex=sizeX;
this.sizey=sizeY;
this.hasChanged=true;
});

Clazz.newMeth(C$, 'setRadius$D',  function (radius) {
this.radius=radius;
this.hasChanged=true;
});

Clazz.newMeth(C$, 'getRadius$',  function () {
return this.radius;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (visible) {
this.visible=visible;
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'setEdgeColor$java_awt_Color',  function (color) {
this.edgeColor=color;
});

Clazz.newMeth(C$, 'getEdgeColor$',  function () {
return this.edgeColor;
});

Clazz.newMeth(C$, 'setEdgeStroke$java_awt_Stroke',  function (stroke) {
this.edgeStroke=stroke;
});

Clazz.newMeth(C$, 'getEdgeStroke$',  function () {
return this.edgeStroke;
});

Clazz.newMeth(C$, 'setResolution$I$I',  function (nLoops, nPointsPerLoop) {
if ((nLoops == this.loops) && (nPointsPerLoop == this.pointsPerLoop) ) {
return;
}this.loops=nLoops;
this.pointsPerLoop=nPointsPerLoop;
this.segments=this.loops * this.pointsPerLoop;
var n=this.segments + 1;
this.xPoints=Clazz.array(Float.TYPE, [n]);
this.yPoints=Clazz.array(Float.TYPE, [n]);
this.hasChanged=true;
});

Clazz.newMeth(C$, 'getLoops$',  function () {
return this.loops;
});

Clazz.newMeth(C$, 'getPointsPerLoop$',  function () {
return this.pointsPerLoop;
});

Clazz.newMeth(C$, 'setSolenoid$D',  function (factor) {
this.solenoid=factor;
this.hasChanged=true;
});

Clazz.newMeth(C$, 'setThinExtremes$Z',  function (thin) {
this.thinExtremes=thin;
this.hasChanged=true;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.visible) {
return;
}if (this.hasChanged) {
p$1.computePoints.apply(this, []);
}var g2=g;
g2.setStroke$java_awt_Stroke(this.edgeStroke);
g2.setColor$java_awt_Color(this.edgeColor);
if (this.zeroLength) {
var a=panel.xToPix$D(this.x);
var b=panel.yToPix$D(this.y);
g2.drawLine$I$I$I$I(a, b, a, b);
return;
}g2.draw$java_awt_Shape(panel.transformShape$java_awt_Shape(this.springPath));
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return (this.sizex > 0 ) ? this.x : this.x + this.sizex;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return (this.sizex > 0 ) ? this.x + this.sizex : this.x;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return (this.sizey > 0 ) ? this.y : this.y + this.sizey;
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return (this.sizey > 0 ) ? this.y + this.sizey : this.y;
});

Clazz.newMeth(C$, 'computeGeneralPath',  function () {
if ((this.xPoints == null ) || (this.xPoints.length < 2) ) {
return;
}var n=this.xPoints.length;
this.springPath=Clazz.new_($I$(1,1));
this.springPath.moveTo$F$F(this.xPoints[0], this.yPoints[0]);
for (var i=1; i < n; i++) {
this.springPath.lineTo$F$F(this.xPoints[i], this.yPoints[i]);
}
}, p$1);

Clazz.newMeth(C$, 'computePoints',  function () {
var length=this.sizex * this.sizex + this.sizey * this.sizey;
if (length == 0 ) {
this.zeroLength=true;
return;
}this.zeroLength=false;
length=Math.sqrt(length);
var u2x=-this.sizey / length;
var u2y=this.sizex / length;
var delta=(6.283185307179586 / this.pointsPerLoop);
if (this.radius < 0 ) {
delta*=-1;
}var pre=(this.pointsPerLoop/2|0);
for (var i=0; i <= this.segments; i++) {
var k;
if (this.thinExtremes) {
if (i < pre) {
k=0;
} else if (i < this.pointsPerLoop) {
k=i - pre;
} else if (i > (this.segments - pre)) {
k=0;
} else if (i > (this.segments - this.pointsPerLoop)) {
k=this.segments - i - pre ;
} else {
k=pre;
}} else {
k=pre;
}var angle=(1.5707963267948966 + i * delta);
var cos=Math.cos(angle);
this.xPoints[i]=(this.x + i * this.sizex / this.segments + k * this.radius * cos * u2x  / pre);
this.yPoints[i]=(this.y + i * this.sizey / this.segments + k * this.radius * cos * u2y  / pre);
if (this.solenoid != 0.0 ) {
var cte=k * Math.cos(i * 2 * 3.141592653589793  / this.pointsPerLoop) / pre;
this.xPoints[i]+=this.solenoid * cte * this.sizex ;
this.yPoints[i]+=this.solenoid * cte * this.sizey ;
}}
p$1.computeGeneralPath.apply(this, []);
this.hasChanged=false;
}, p$1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
