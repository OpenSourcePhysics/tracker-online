(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),p$1={},I$=[[0,'java.awt.Color','org.opensourcephysics.display.InteractivePanel','java.awt.Dimension','javax.swing.JFrame','org.opensourcephysics.display2d.GridPointData','org.opensourcephysics.display2d.ComplexGridPlot','org.opensourcephysics.display.axes.XAxis','org.opensourcephysics.display.OSPRuntime']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ComplexColorMapper");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ceilColor=$I$(1).lightGray;
this.reds=Clazz.array(Double.TYPE, [256]);
this.greens=Clazz.array(Double.TYPE, [256]);
this.blues=Clazz.array(Double.TYPE, [256]);
this.zMap=null;
this.colorTemp=Clazz.new_($I$(1,1).c$$I,[0]);
this.rgbCeil=Clazz.array(Byte.TYPE, [3]);
this.rgbBlack=Clazz.array(Byte.TYPE, [3]);
},1);

C$.$fields$=[['D',['ceil'],'O',['ceilColor','java.awt.Color','legendFrame','javax.swing.JFrame','reds','double[]','+greens','+blues','zMap','org.opensourcephysics.display2d.ZExpansion','colorTemp','java.awt.Color','rgbCeil','byte[]','+rgbBlack']]]

Clazz.newMeth(C$, 'c$$D',  function (_ceil) {
;C$.$init$.apply(this);
this.ceil=_ceil;
if (this.zMap != null ) {
this.zMap.setMinMax$D$D(0, this.ceil);
}p$1.initColors.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'showPhaseLegend$',  function () {
var dp=Clazz.new_($I$(2,1));
dp.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3,1).c$$I$I,[300, 66]));
dp.setPreferredGutters$I$I$I$I(0, 0, 0, 35);
dp.setClipAtGutter$Z(false);
var legendFrame=Clazz.new_($I$(4,1).c$$S,["Complex Phase"]);
legendFrame.setResizable$Z(false);
legendFrame.setContentPane$java_awt_Container(dp);
var numPts=360;
var pointdata=Clazz.new_($I$(5,1).c$$I$I$I,[numPts, 1, 3]);
var data=pointdata.getData$();
var theta=-3.141592653589793;
var delta=6.283185307179586 / (numPts);
for (var i=0, n=data.length; i < n; i++) {
data[i][0][2]=0.999;
data[i][0][3]=Math.cos(theta);
data[i][0][4]=Math.sin(theta);
theta+=delta;
}
pointdata.setScale$D$D$D$D(-3.141592653589793, 3.141592653589793, 0, 1);
var plot=Clazz.new_($I$(6,1).c$$org_opensourcephysics_display2d_GridData,[pointdata]);
plot.setShowGridLines$Z(false);
plot.update$();
dp.addDrawable$org_opensourcephysics_display_Drawable(plot);
var xaxis=Clazz.new_($I$(7,1).c$$S,[""]);
xaxis.setLocationType$I(2);
xaxis.setLocation$D(-0.5);
xaxis.setEnabled$Z(true);
dp.addDrawable$org_opensourcephysics_display_Drawable(xaxis);
legendFrame.pack$();
legendFrame.setVisible$Z(true);
return legendFrame;
}, 1);

Clazz.newMeth(C$, 'showLegend$',  function () {
var dp=Clazz.new_($I$(2,1));
dp.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3,1).c$$I$I,[300, 66]));
dp.setPreferredGutters$I$I$I$I(0, 0, 0, 35);
dp.setClipAtGutter$Z(false);
if ((this.legendFrame == null ) || !this.legendFrame.isDisplayable$() ) {
this.legendFrame=Clazz.new_($I$(4,1).c$$S,["Complex Phase"]);
}this.legendFrame.setDefaultCloseOperation$I(2);
this.legendFrame.setResizable$Z(false);
this.legendFrame.setContentPane$java_awt_Container(dp);
var numPts=360;
var pointdata=Clazz.new_($I$(5,1).c$$I$I$I,[numPts, 1, 3]);
var data=pointdata.getData$();
var theta=-3.141592653589793;
var delta=6.283185307179586 / (numPts);
for (var i=0, n=data.length; i < n; i++) {
data[i][0][2]=0.999;
data[i][0][3]=Math.cos(theta);
data[i][0][4]=Math.sin(theta);
theta+=delta;
}
pointdata.setScale$D$D$D$D(-3.141592653589793, 3.141592653589793, 0, 1);
var plot=Clazz.new_($I$(6,1).c$$org_opensourcephysics_display2d_GridData,[pointdata]);
plot.setShowGridLines$Z(false);
plot.update$();
dp.addDrawable$org_opensourcephysics_display_Drawable(plot);
var xaxis=Clazz.new_($I$(7,1).c$$S,[""]);
xaxis.setLocationType$I(2);
xaxis.setLocation$D(-0.5);
xaxis.setEnabled$Z(true);
dp.addDrawable$org_opensourcephysics_display_Drawable(xaxis);
this.legendFrame.pack$();
this.legendFrame.setVisible$Z(true);
return this.legendFrame;
});

Clazz.newMeth(C$, 'setScale$D',  function (_ceil) {
this.ceil=_ceil;
if (this.zMap != null ) {
this.zMap.setMinMax$D$D(0, this.ceil);
}});

Clazz.newMeth(C$, 'phaseToColor$D',  function (phi) {
var b=1;
var h=(3.141592653589793 + phi) / 6.283185307179586;
var index=(((255 * h)|0));
return Clazz.new_([((b * this.reds[index])|0), ((b * this.greens[index])|0), ((b * this.blues[index])|0)],$I$(1,1).c$$I$I$I);
});

Clazz.newMeth(C$, 'complexToColor$D$D',  function (re, im) {
var b=1;
var h=(3.141592653589793 + Math.atan2(im, re)) / 6.283185307179586;
var index=(((255 * h)|0));
return Clazz.new_([((b * this.reds[index])|0), ((b * this.greens[index])|0), ((b * this.blues[index])|0)],$I$(1,1).c$$I$I$I);
});

Clazz.newMeth(C$, 'samplesToColor$DA',  function (samples) {
var zval=samples[0];
if (this.zMap != null ) {
zval=this.zMap.evaluate$D(zval);
}if (zval <= 0 ) {
return $I$(1).black;
} else if ((this.zMap == null ) && (zval > this.ceil + 1.0E-9 ) ) {
return this.ceilColor;
} else {
zval=Math.min(zval, this.ceil);
}var bb=zval / this.ceil;
var h=(3.141592653589793 + Math.atan2(samples[2], samples[1])) / 6.283185307179586;
var index=(((255 * h)|0));
var r=((bb * this.reds[index])|0);
var g=((bb * this.greens[index])|0);
var b=((bb * this.blues[index])|0);
var v=(((r & 255) << 16) | ((g & 255) << 8) | (b & 255) ) | -16777216;
var c=($I$(8).isJS ? this.colorTemp : null);
{
c.value = v;
}
return c;
});

Clazz.newMeth(C$, 'sampleToPixel$DA$BA',  function (samples, retRGB) {
var zval=samples[0];
if (this.zMap != null ) {
zval=this.zMap.evaluate$D(zval);
}if (zval <= 0 ) {
return this.rgbBlack;
}if ((this.zMap == null ) && (zval > this.ceil + 1.0E-9 ) ) {
return this.rgbCeil;
}var bb=Math.min(zval, this.ceil) / this.ceil;
var h=(3.141592653589793 + Math.atan2(samples[2], samples[1])) / 6.283185307179586;
var index=(((255 * h)|0));
retRGB[0]=((bb * this.reds[index])|0);
retRGB[1]=((bb * this.greens[index])|0);
retRGB[2]=((bb * this.blues[index])|0);
return retRGB;
});

Clazz.newMeth(C$, 'pointToColor$DA',  function (vertex) {
var zval=vertex[2];
if (this.zMap != null ) {
zval=this.zMap.evaluate$D(zval);
}if (zval <= 0 ) {
return $I$(1).black;
} else if (zval > this.ceil + 1.0E-9 ) {
return this.ceilColor;
}var b=zval / this.ceil;
var h=(3.141592653589793 + Math.atan2(vertex[4], vertex[3])) / 6.283185307179586;
var index=(((255 * h)|0));
return Clazz.new_([((b * this.reds[index])|0), ((b * this.greens[index])|0), ((b * this.blues[index])|0)],$I$(1,1).c$$I$I$I);
});

Clazz.newMeth(C$, 'setZMap$org_opensourcephysics_display2d_ZExpansion',  function (map) {
this.zMap=map;
if (this.zMap != null ) {
this.zMap.setMinMax$D$D(0, this.ceil);
}});

Clazz.newMeth(C$, 'getCeil$',  function () {
return this.ceil;
});

Clazz.newMeth(C$, 'getCeilColor$',  function () {
return this.ceilColor;
});

Clazz.newMeth(C$, 'setCeilColor$java_awt_Color',  function (_ceilColor) {
this.ceilColor=_ceilColor;
this.rgbCeil=Clazz.array(Byte.TYPE, -1, [($b$[0] = this.ceilColor.getRed$(), $b$[0]), ($b$[0] = this.ceilColor.getGreen$(), $b$[0]), ($b$[0] = this.ceilColor.getBlue$(), $b$[0])]);
});

Clazz.newMeth(C$, 'initColors',  function () {
var pi=3.141592653589793;
for (var i=0; i < 256; i++) {
var val=Math.abs(Math.sin(pi * i / 255));
this.blues[i]=((255 * val * val )|0);
val=Math.abs(Math.sin(pi * i / 255 + pi / 3));
this.greens[i]=((255 * val * val * Math.sqrt(val) )|0);
val=Math.abs(Math.sin(pi * i / 255 + 2 * pi / 3));
this.reds[i]=((255 * val * val )|0);
}
}, p$1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
