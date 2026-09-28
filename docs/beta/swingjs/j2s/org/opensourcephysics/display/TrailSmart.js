(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TrailSmart", null, 'org.opensourcephysics.display.TrailBezier');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.max_error=0.001;
},1);

C$.$fields$=[['D',['$x1','$y1','$x2','$y2','dx1','dy1','ds1','max_error']]]

Clazz.newMeth(C$, 'setMaxError$D',  function (max) {
this.max_error=max;
});

Clazz.newMeth(C$, 'addPoint$D$D',  function (x, y) {
var dx2=x - this.endPts[2];
var dy2=y - this.endPts[3];
var ds2=Math.sqrt(dy2 * dy2 + dx2 * dx2);
if ((this.numpts > 1) && (ds2 == 0 ) ) {
return;
}var xx=this.endPts[2] + ds2 * this.dx1 / this.ds1;
var yy=this.endPts[3] + ds2 * this.dy1 / this.ds1;
var err=Math.sqrt((x - xx) * (x - xx) + (y - yy) * (y - yy));
var cos=(this.dx1 * dx2 + this.dy1 * dy2) / this.ds1 / ds2 ;
if ((this.numpts < 3) || (err > this.max_error ) || (cos < 0.99 ) || Double.isNaN$D(cos)  ) {
C$.superclazz.prototype.addPoint$D$D.apply(this, [x, y]);
this.ds1=ds2;
this.dx1=dx2;
this.dy1=dy2;
}this.$x1=this.$x2;
this.$y1=this.$y2;
this.$x2=x;
this.$y2=y;
});

Clazz.newMeth(C$, 'drawPathEnd$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics2D',  function (panel, g2) {
this.pathEnd.reset$();
this.path.moveTo$F$F(this.endPts[0], this.endPts[1]);
this.path.lineTo$F$F(this.endPts[2], this.endPts[3]);
this.path.lineTo$F$F(this.$x1, this.$y1);
this.path.lineTo$F$F(this.$x2, this.$y2);
g2.draw$java_awt_Shape(panel.transformPath$java_awt_geom_GeneralPath(this.pathEnd));
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return Math.min(this.$x2, this.xmin);
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return Math.max(this.$x2, this.xmax);
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return Math.min(this.$y2, this.ymin);
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return Math.max(this.$y2, this.ymax);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
