(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.awt.Color',['java.awt.geom.Point2D','.Double'],'java.awt.geom.AffineTransform',['java.awt.geom.Line2D','.Double'],'java.awt.geom.GeneralPath','org.opensourcephysics.display.ArrowLoader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Arrow", null, null, 'org.opensourcephysics.display.Drawable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.headSize=8;
this.color=$I$(1).black;
this.x=0;
this.y=0;
this.a=0;
this.b=0;
this.ptA=Clazz.new_($I$(2,1));
this.lastTheta=NaN;
this.trA=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['D',['x','y','a','b','lastTheta','lastX','lastY','lastHeadSize'],'F',['headSize'],'O',['color','java.awt.Color','ptA','java.awt.geom.Point2D.Double','head','java.awt.Shape','trA','java.awt.geom.AffineTransform']]]

Clazz.newMeth(C$, 'c$$D$D$D$D',  function (_x, _y, _a, _b) {
;C$.$init$.apply(this);
this.x=_x;
this.y=_y;
this.a=_a;
this.b=_b;
}, 1);

Clazz.newMeth(C$, 'getX$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'setX$D',  function (x) {
this.setXY$D$D(x, this.y);
});

Clazz.newMeth(C$, 'getY$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'setY$D',  function (y) {
this.setXY$D$D(this.x, y);
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
this.x=x;
this.y=y;
});

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (c) {
this.color=c;
});

Clazz.newMeth(C$, 'setXlength$D',  function (dx) {
this.a=dx;
});

Clazz.newMeth(C$, 'setYlength$D',  function (dy) {
this.b=dy;
});

Clazz.newMeth(C$, 'getXlength$',  function () {
return this.a;
});

Clazz.newMeth(C$, 'getYlength$',  function () {
return this.b;
});

Clazz.newMeth(C$, 'getHeadSize$',  function () {
return this.headSize;
});

Clazz.newMeth(C$, 'setHeadSize$F',  function (size) {
this.headSize=size;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
var g2=g;
var tr=panel.getPixelTransform$();
g2.setPaint$java_awt_Paint(this.color);
g2.draw$java_awt_Shape(tr.createTransformedShape$java_awt_Shape(Clazz.new_($I$(4,1).c$$D$D$D$D,[this.x, this.y, this.x + this.a, this.y + this.b])));
this.ptA.setLocation$D$D(this.x + this.a, this.y + this.b);
tr.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.ptA, this.ptA);
var aspect=panel.isSquareAspect$() ? 1 : -tr.getScaleX$() / tr.getScaleY$();
var temp=this.getHead$java_awt_geom_Point2D_Double$D(this.ptA, Math.atan2(this.b, aspect * this.a));
g2.fill$java_awt_Shape(temp);
g2.setPaint$java_awt_Paint($I$(1).BLACK);
});

Clazz.newMeth(C$, 'getHead$java_awt_geom_Point2D_Double$D',  function (ptA, theta) {
if (theta == this.lastTheta  && this.lastX == ptA.x   && this.lastY == ptA.y   && this.headSize == this.lastHeadSize  ) return this.head;
this.lastTheta=theta;
this.lastX=ptA.x;
this.lastY=ptA.y;
this.lastHeadSize=this.headSize;
var path=Clazz.new_($I$(5,1));
path.moveTo$F$F(1, 0);
path.lineTo$F$F(-this.headSize, -this.headSize / 2);
path.lineTo$F$F(-this.headSize, this.headSize / 2);
path.closePath$();
this.trA.setToTranslation$D$D(ptA.x, ptA.y);
this.trA.rotate$D(-theta);
return this.head=this.trA.createTransformedShape$java_awt_Shape(path);
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(6,1));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
