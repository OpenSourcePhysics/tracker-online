(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.awt.geom.GeneralPath','java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FunctionDrawer", null, null, ['org.opensourcephysics.display.Drawable', 'org.opensourcephysics.display.Measurable', 'org.opensourcephysics.numerics.Function']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.xrange=Clazz.array(Double.TYPE, [2]);
this.yrange=Clazz.array(Double.TYPE, [2]);
this.numpts=0;
this.generalPath=Clazz.new_($I$(1,1));
this.filled=false;
this.measured=false;
this.color=$I$(2).black;
this.functionChanged=false;
this.enabled=true;
},1);

C$.$fields$=[['Z',['filled','measured','functionChanged','enabled'],'I',['numpts'],'O',['xrange','double[]','+yrange','generalPath','java.awt.geom.GeneralPath','$function','org.opensourcephysics.numerics.Function','color','java.awt.Color']]]

Clazz.newMeth(C$, 'setEnabled$Z',  function (b) {
this.enabled=b;
});

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_Function',  function (f) {
;C$.$init$.apply(this);
this.$function=f;
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_Function$D$D$I$Z',  function (f, xmin, xmax, numpts, filled) {
C$.c$$org_opensourcephysics_numerics_Function.apply(this, [f]);
this.initialize$D$D$I$Z(xmin, xmax, numpts, filled);
}, 1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
return this.$function.evaluate$D(x);
});

Clazz.newMeth(C$, 'initialize$D$D$I$Z',  function (xmin, xmax, numpts, filled) {
if (numpts < 1) {
return;
}this.filled=filled;
this.xrange[0]=xmin;
this.xrange[1]=xmax;
this.numpts=numpts;
this.generalPath.reset$();
if (numpts < 1) {
return;
}this.yrange[0]=this.$function.evaluate$D(xmin);
this.yrange[1]=this.yrange[0];
if (filled) {
this.generalPath.moveTo$F$F(this.xrange[0], 0);
this.generalPath.lineTo$F$F(this.xrange[0], this.yrange[0]);
} else {
this.generalPath.moveTo$F$F(this.xrange[0], this.yrange[0]);
}var x=this.xrange[0];
var dx=(xmax - xmin) / (numpts);
for (var i=0; i < numpts; i++) {
x=x + dx;
var y=this.$function.evaluate$D(x);
this.generalPath.lineTo$F$F(x, y);
if (y < this.yrange[0] ) {
this.yrange[0]=y;
}if (y > this.yrange[1] ) {
this.yrange[1]=y;
}}
if (filled) {
this.generalPath.lineTo$F$F(x, 0);
this.generalPath.closePath$();
}this.measured=true;
});

Clazz.newMeth(C$, 'getPath$',  function () {
return (this.generalPath.clone$());
});

Clazz.newMeth(C$, 'getXRange$',  function () {
return this.xrange;
});

Clazz.newMeth(C$, 'getYRange$',  function () {
return this.yrange;
});

Clazz.newMeth(C$, 'checkRange$org_opensourcephysics_display_DrawingPanel',  function (panel) {
if ((this.xrange[0] == panel.getXMin$() ) && (this.xrange[1] == panel.getXMax$() ) && (this.numpts == panel.getWidth$()) && !this.functionChanged  ) {
return;
}this.functionChanged=false;
this.xrange[0]=panel.getXMin$();
this.xrange[1]=panel.getXMax$();
this.numpts=panel.getWidth$();
this.generalPath.reset$();
if (this.numpts < 1) {
return;
}this.yrange[0]=this.$function.evaluate$D(this.xrange[0]);
this.yrange[1]=this.yrange[0];
if (this.filled) {
this.generalPath.moveTo$F$F(this.xrange[0], 0);
this.generalPath.lineTo$F$F(this.xrange[0], this.yrange[0]);
} else {
this.generalPath.moveTo$F$F(this.xrange[0], this.yrange[0]);
}var x=this.xrange[0];
var dx=(this.xrange[1] - this.xrange[0]) / (this.numpts);
for (var i=0; i < this.numpts; i++) {
x=x + dx;
var y=this.$function.evaluate$D(x);
if (!Double.isNaN$D(x) && !Double.isNaN$D(y) ) {
y=Math.min(y, 1.0E12);
y=Math.max(y, -1.0E12);
this.generalPath.lineTo$F$F(x, y);
if (y < this.yrange[0] ) {
this.yrange[0]=y;
}if (y > this.yrange[1] ) {
this.yrange[1]=y;
}}}
if (this.filled) {
this.generalPath.lineTo$F$F(x, 0);
this.generalPath.closePath$();
}});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
if (!this.enabled) return;
if (!this.measured) {
this.checkRange$org_opensourcephysics_display_DrawingPanel(panel);
}var g2=g;
g2.setColor$java_awt_Color(this.color);
var s=this.generalPath.createTransformedShape$java_awt_geom_AffineTransform(panel.getPixelTransform$());
if (this.filled) {
g2.fill$java_awt_Shape(s);
g2.draw$java_awt_Shape(s);
} else {
g2.draw$java_awt_Shape(s);
}});

Clazz.newMeth(C$, 'setFilled$Z',  function (_filled) {
this.filled=_filled;
});

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (c) {
this.color=c;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return this.measured;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.xrange[0];
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.xrange[1];
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return this.yrange[0];
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return this.yrange[1];
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
