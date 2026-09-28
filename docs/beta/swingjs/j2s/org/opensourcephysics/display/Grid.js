(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.awt.Color','java.awt.geom.GeneralPath','java.awt.BasicStroke',['java.awt.geom.Point2D','.Double']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Grid", null, null, 'org.opensourcephysics.display.Drawable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.color=Clazz.new_($I$(1,1).c$$I$I$I$I,[200, 200, 200, 100]);
this.generalPath=Clazz.new_($I$(2,1));
this.visible=true;
this.stroke2=Clazz.new_($I$(3,1).c$$F,[2]);
},1);

C$.$fields$=[['Z',['visible'],'D',['xmin','xmax','ymin','ymax','dx','dy'],'I',['nx','ny'],'O',['color','java.awt.Color','generalPath','java.awt.geom.GeneralPath','stroke2','java.awt.BasicStroke']]]

Clazz.newMeth(C$, 'c$$I',  function (n) {
C$.c$$I$I$D$D$D$D.apply(this, [n, n, 0, n, 0, n]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (nx, ny) {
C$.c$$I$I$D$D$D$D.apply(this, [nx, ny, 0, nx, 0, ny]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$D$D$D$D',  function (_nx, _ny, xmin, xmax, ymin, ymax) {
;C$.$init$.apply(this);
this.nx=_nx;
this.ny=_ny;
this.setMinMax$D$D$D$D(xmin, xmax, ymin, ymax);
}, 1);

Clazz.newMeth(C$, 'setVisible$Z',  function (isVisible) {
this.visible=isVisible;
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (_color) {
this.color=_color;
});

Clazz.newMeth(C$, 'getColor$',  function () {
return this.color;
});

Clazz.newMeth(C$, 'getDx$',  function () {
return this.dx;
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

Clazz.newMeth(C$, 'getDy$',  function () {
return this.dy;
});

Clazz.newMeth(C$, 'setMinMax$D$D$D$D',  function (_xmin, _xmax, _ymin, _ymax) {
this.generalPath.reset$();
this.xmin=_xmin;
this.xmax=_xmax;
this.ymin=_ymin;
this.ymax=_ymax;
if (this.nx > 0) {
this.dx=((this.xmax - this.xmin) / this.nx);
} else {
this.dx=1;
}if (this.ny > 0) {
this.dy=((this.ymax - this.ymin) / this.ny);
} else {
this.dy=1;
}if (!this.visible) {
return;
}var y=this.ymin;
if (this.ny <= 512) {
for (var i=0; i <= this.ny; i++) {
this.generalPath.moveTo$F$F(this.xmin, y);
this.generalPath.lineTo$F$F(this.xmax, y);
y+=this.dy;
}
}var x=this.xmin;
if (this.nx <= 512) {
for (var i=0; i <= this.nx; i++) {
this.generalPath.moveTo$F$F(x, this.ymin);
this.generalPath.lineTo$F$F(x, this.ymax);
x+=this.dx;
}
}});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.visible) {
return;
}if (Math.abs(panel.getXPixPerUnit$() * (this.xmax - this.xmin) / this.nx) < 4 ) {
return;
}if (Math.abs(panel.getYPixPerUnit$() * (this.ymax - this.ymin) / this.ny) < 4 ) {
return;
}var g2=g;
var s=this.generalPath.createTransformedShape$java_awt_geom_AffineTransform(panel.getPixelTransform$());
g2.setColor$java_awt_Color(this.color);
g2.setStroke$java_awt_Stroke(this.stroke2);
g2.draw$java_awt_Shape(s);
g2.setColor$java_awt_Color($I$(1).black);
});

Clazz.newMeth(C$, 'getCellPoint$D$D',  function (x, y) {
var xindex=0;
xindex=(Math.floor((x - this.xmin) / this.dx)|0);
xindex=Math.max(0, xindex);
xindex=Math.min(this.nx, xindex);
var yindex=0;
yindex=(Math.floor((y - this.ymin) / this.dy)|0);
yindex=Math.max(0, yindex);
yindex=Math.min(this.ny, yindex);
return Clazz.array(Integer.TYPE, -1, [xindex, xindex]);
});

Clazz.newMeth(C$, 'getClosestGridPoint$D$D',  function (x, y) {
var index=0;
index=Long.$ival(Math.round$D((x - this.xmin) / this.dx));
index=Math.max(0, index);
index=Math.min(this.nx, index);
var gridx=this.xmin + this.dx * index;
index=Long.$ival(Math.round$D((y - this.ymin) / this.dy));
index=Math.max(0, index);
index=Math.min(this.ny, index);
var gridy=this.ymin + this.dy * index;
return Clazz.new_($I$(4,1).c$$D$D,[gridx, gridy]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
