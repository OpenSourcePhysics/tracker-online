(function(){var P$=Clazz.newPackage("org.opensourcephysics.display.axes"),I$=[[0,'org.opensourcephysics.numerics.Util','java.awt.Color',['java.awt.geom.Rectangle2D','.Double']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractPolarAxis", null, 'org.opensourcephysics.display.axes.AbstractAxes', 'org.opensourcephysics.display.axes.PolarAxes');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dr=1;
this.dtheta=0.39269908169872414;
this.autospaceRings=true;
},1);

C$.$fields$=[['Z',['autospaceRings'],'D',['dr','dtheta']]
,['D',['LOG10'],'I',['MAJOR_TIC']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_DrawingPanel',  function (drawingPanel) {
;C$.superclazz.c$$org_opensourcephysics_display_DrawingPanel.apply(this,[drawingPanel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'autospaceRings$Z',  function (autospace) {
this.autospaceRings=autospace;
});

Clazz.newMeth(C$, 'getDeltaR$',  function () {
return this.dr;
});

Clazz.newMeth(C$, 'setDeltaR$D',  function (dr) {
this.dr=dr;
});

Clazz.newMeth(C$, 'getDeltaTheta$',  function () {
return this.dtheta;
});

Clazz.newMeth(C$, 'setDeltaTheta$D',  function (dtheta) {
this.dtheta=Math.abs(dtheta);
});

Clazz.newMeth(C$, 'setLabelFormat$S',  function (formatString) {
this.labelFormat=$I$(1).newDecimalFormat$S(formatString);
});

Clazz.newMeth(C$, 'drawRAxis$D$D$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (dr, rmax, panel, g) {
var g2=g;
g.setColor$java_awt_Color(this.gridcolor.darker$());
var x1=panel.xToPix$D(0);
var y1=panel.yToPix$D(0);
var x2=panel.xToPix$D(rmax);
g.drawLine$I$I$I$I(x1, y1, Math.min(x2, panel.getWidth$() - panel.getRightGutter$()), y1);
var fm=g2.getFontMetrics$();
var nLabels=((panel.getXMax$() / dr / C$.MAJOR_TIC )|0);
var stride=(nLabels > 3) ? 2 : 1;
var rm=Math.min(rmax, panel.getXMax$());
for (var r=(nLabels > 3) ? stride * C$.MAJOR_TIC * dr  : C$.MAJOR_TIC * dr; r <= rm ; r+=(stride * C$.MAJOR_TIC * dr )) {
var label=this.getLabel$D(r);
var sW=fm.stringWidth$S(label) + 4;
var sH=fm.getHeight$();
g2.setColor$java_awt_Color(Clazz.new_($I$(2,1).c$$I$I$I,[247, 247, 247]));
var x0=panel.xToPix$D(r);
var y0=panel.yToPix$D(0);
g2.fill$java_awt_Shape(Clazz.new_([x0 - (sW/2|0), y0 + 3, sW, sH],$I$(3,1).c$$D$D$D$D));
g2.setColor$java_awt_Color($I$(2).black);
g2.draw$java_awt_Shape(Clazz.new_([x0 - (sW/2|0), y0 + 3, sW, sH],$I$(3,1).c$$D$D$D$D));
g2.setColor$java_awt_Color(this.drawingPanel.getForeground$());
g2.drawString$S$I$I(label, x0 - (sW/2|0) + 2, y0 + 1 + sH );
}
});

Clazz.newMeth(C$, 'getLabel$D',  function (r) {
if (r >= 10 ) {
return Integer.toString$I((r|0));
}return Double.toString$D(r);
});

Clazz.newMeth(C$, 'drawRings$D$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (rmax, panel, g) {
var dr=Math.max(this.dr, 1.0E-9);
if (this.autospaceRings) {
var exponent=((Math.log(rmax) / C$.LOG10)|0);
var decade=Math.pow(10, exponent - 1);
dr=decade;
while (rmax / dr > 5 * C$.MAJOR_TIC ){
dr*=2;
if ((dr / decade > 3.5 ) && (dr / decade < 4.5 ) ) {
dr=5 * decade;
decade*=10;
}}
} else {
var nrings=((rmax / dr)|0);
while (nrings > 10 * C$.MAJOR_TIC){
dr*=2;
nrings=((rmax / dr)|0);
}
}var xcenter=panel.xToPix$D(0);
var ycenter=panel.yToPix$D(0);
var xrad=((panel.getXPixPerUnit$() * rmax)|0);
var yrad=((panel.getYPixPerUnit$() * rmax)|0);
if (this.interiorColor != null ) {
g.setColor$java_awt_Color(this.interiorColor);
g.fillOval$I$I$I$I(xcenter - xrad, ycenter - yrad, 2 * xrad, 2 * yrad);
}var counter=0;
for (var r=0; r <= rmax ; r+=dr) {
g.setColor$java_awt_Color(this.gridcolor);
xrad=panel.xToPix$D(r) - xcenter;
yrad=ycenter - panel.yToPix$D(r);
if (counter % C$.MAJOR_TIC == 0) {
g.setColor$java_awt_Color(this.gridcolor.darker$());
}g.drawOval$I$I$I$I(xcenter - xrad, ycenter - yrad, 2 * xrad, 2 * yrad);
++counter;
}
return dr;
});

Clazz.newMeth(C$, 'drawSpokes$D$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (rmax, panel, g) {
g.setColor$java_awt_Color(this.gridcolor);
for (var theta=0; theta < 3.141592653589793 ; theta+=this.dtheta) {
var x1=panel.xToPix$D(rmax * Math.cos(theta));
var y1=panel.yToPix$D(rmax * Math.sin(theta));
var x2=panel.xToPix$D(-rmax * Math.cos(theta));
var y2=panel.yToPix$D(-rmax * Math.sin(theta));
g.drawLine$I$I$I$I(x1, y1, x2, y2);
}
});

C$.$static$=function(){C$.$static$=0;
C$.LOG10=Math.log(10);
C$.MAJOR_TIC=5;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
