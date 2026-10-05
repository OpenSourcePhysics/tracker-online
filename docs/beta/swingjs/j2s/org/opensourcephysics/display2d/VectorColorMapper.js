(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),p$1={},I$=[[0,'java.awt.Color','org.opensourcephysics.display.InteractivePanel','java.awt.Dimension','javax.swing.JFrame','org.opensourcephysics.display.DisplayRes','org.opensourcephysics.display2d.GridPointData','org.opensourcephysics.display2d.VectorPlot','org.opensourcephysics.display.axes.XAxis']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VectorColorMapper");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.background=$I$(1).WHITE;
},1);

C$.$fields$=[['D',['ceil','floor'],'I',['numColors','paletteType'],'O',['background','java.awt.Color','colors','java.awt.Color[]','+compColors','legendFrame','javax.swing.JFrame','legendPlot','org.opensourcephysics.display2d.VectorPlot','legendPanel','org.opensourcephysics.display.InteractivePanel']]
,['O',['RED_COMP','java.awt.Color','+GREEN_COMP','+BLUE_COMP','hsb','float[]']]]

Clazz.newMeth(C$, 'c$$I$D',  function (_numColors, _ceil) {
;C$.$init$.apply(this);
this.ceil=_ceil;
this.numColors=_numColors;
this.floor=(this.numColors < 2) ? 0 : this.ceil / (this.numColors - 1);
this.paletteType=0;
p$1.createSpectrumPalette.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'setNumberOfColors$I',  function (_numColors) {
if (_numColors == this.numColors) {
return;
}this.numColors=_numColors;
this.floor=(this.numColors < 2) ? 0 : this.ceil / (this.numColors - 1);
this.setPaletteType$I(this.paletteType);
});

Clazz.newMeth(C$, 'getFloor$',  function () {
return this.floor;
});

Clazz.newMeth(C$, 'getCeiling$',  function () {
return this.ceil;
});

Clazz.newMeth(C$, 'setPaletteType$I',  function (_paletteType) {
if (this.paletteType == _paletteType && this.numColors == this.colors.length ) {
return;
}this.floor=(this.numColors < 2) ? 0 : this.ceil / (this.numColors - 1);
this.paletteType=_paletteType;
switch (this.paletteType) {
case 1:
p$1.createRedSpectrumPalette.apply(this, []);
return;
case 2:
p$1.createBlueSpectrumPalette.apply(this, []);
return;
case 3:
p$1.createGreenSpectrumPalette.apply(this, []);
return;
case 5:
return;
case 4:
p$1.createGraySpectrumPalette.apply(this, []);
return;
default:
p$1.createSpectrumPalette.apply(this, []);
}
});

Clazz.newMeth(C$, 'checkPallet$java_awt_Color',  function (backgroundColor) {
if (this.background === backgroundColor ) {
return;
}this.background=backgroundColor;
switch (this.paletteType) {
case 1:
p$1.createRedSpectrumPalette.apply(this, []);
return;
case 2:
p$1.createBlueSpectrumPalette.apply(this, []);
return;
case 3:
p$1.createGreenSpectrumPalette.apply(this, []);
return;
case 5:
return;
case 4:
p$1.createGraySpectrumPalette.apply(this, []);
return;
default:
p$1.createSpectrumPalette.apply(this, []);
}
});

Clazz.newMeth(C$, 'setScale$D',  function (_ceil) {
this.ceil=_ceil;
this.floor=(this.numColors < 2) ? 0 : this.ceil / (this.numColors - 1);
});

Clazz.newMeth(C$, 'doubleToCompColor$D',  function (mag) {
if (mag <= this.floor ) {
return this.background;
}var index;
switch (this.paletteType) {
case 1:
if (mag >= this.ceil ) {
return C$.RED_COMP;
}index=(((this.numColors - 1) * (mag / this.ceil))|0);
return this.compColors[index];
case 2:
if (mag >= this.ceil ) {
return C$.BLUE_COMP;
}index=(((this.numColors - 1) * (mag / this.ceil))|0);
return this.compColors[index];
case 3:
if (mag >= this.ceil ) {
return C$.GREEN_COMP;
}index=(((this.numColors - 1) * (mag / this.ceil))|0);
return this.compColors[index];
case 5:
return $I$(1).WHITE;
case 4:
if (mag >= this.ceil ) {
return $I$(1).black;
}index=(((this.numColors - 1) * (mag / this.ceil))|0);
return this.colors[index];
default:
var c=p$1.getSpectrumColor$D.apply(this, [mag]);
var hsbBack_0=$I$(1,"RGBtoHSB$I$I$I$FA",[this.background.getRed$(), this.background.getGreen$(), this.background.getBlue$(), C$.hsb])[0];
$I$(1,"RGBtoHSB$I$I$I$FA",[c.getRed$(), c.getGreen$(), c.getBlue$(), C$.hsb]);
return $I$(1,"getHSBColor$F$F$F",[(2 * hsbBack_0 - C$.hsb[0] + 0.5) % 1, C$.hsb[1], C$.hsb[2]]);
}
});

Clazz.newMeth(C$, 'doubleToColor$D',  function (mag) {
if (mag <= this.floor ) {
return this.background;
}var index;
switch (this.paletteType) {
case 1:
if (mag >= this.ceil ) {
return $I$(1).RED;
}index=(((this.numColors - 1) * (mag / this.ceil))|0);
return this.colors[index];
case 2:
if (mag >= this.ceil ) {
return $I$(1).BLUE;
}index=(((this.numColors - 1) * (mag / this.ceil))|0);
return this.colors[index];
case 3:
if (mag >= this.ceil ) {
return $I$(1).GREEN;
}index=(((this.numColors - 1) * (mag / this.ceil))|0);
return this.colors[index];
case 5:
return $I$(1).black;
case 4:
if (mag >= this.ceil ) {
return $I$(1).black;
}index=(((this.numColors - 1) * (mag / this.ceil))|0);
return this.colors[index];
default:
return p$1.getSpectrumColor$D.apply(this, [mag]);
}
});

Clazz.newMeth(C$, 'getSpectrumColor$D',  function (mag) {
if ((this.background === $I$(1).BLACK ) && (mag >= this.ceil ) ) {
var s=((255 * (1 - this.ceil / mag))|0);
return Clazz.new_($I$(1,1).c$$I$I$I,[255, s, s]);
} else if (mag >= this.ceil ) {
return Clazz.new_([((255.0 * this.ceil / mag)|0), 0, 0],$I$(1,1).c$$I$I$I);
}var index=(((this.numColors - 1) * (mag / this.ceil))|0);
return this.colors[index];
}, p$1);

Clazz.newMeth(C$, 'createRedSpectrumPalette',  function () {
this.colors=Clazz.array($I$(1), [this.numColors]);
this.compColors=Clazz.array($I$(1), [this.numColors]);
var bgr=this.background.getRed$();
var bgg=this.background.getGreen$();
var bgb=this.background.getBlue$();
for (var i=0; i < this.numColors; i++) {
var tr=bgr + ((255 - bgr) * i/this.numColors|0);
var tg=bgg - (bgg * i/this.numColors|0);
var tb=bgb - (bgb * i/this.numColors|0);
this.colors[i]=Clazz.new_($I$(1,1).c$$I$I$I,[tr, tg, tb]);
$I$(1).RGBtoHSB$I$I$I$FA(tr, tg, tb, C$.hsb);
var c=$I$(1,"getHSBColor$F$F$F",[(C$.hsb[0] + 0.5) % 1, C$.hsb[1], C$.hsb[2]]);
tr=bgr + ((c.getRed$() - bgr) * i/this.numColors|0);
tg=bgg + ((c.getGreen$() - bgg) * i/this.numColors|0);
tb=bgb + ((c.getBlue$() - bgb) * i/this.numColors|0);
this.compColors[i]=Clazz.new_($I$(1,1).c$$I$I$I,[tr, tg, tb]);
}
}, p$1);

Clazz.newMeth(C$, 'createGreenSpectrumPalette',  function () {
this.colors=Clazz.array($I$(1), [this.numColors]);
this.compColors=Clazz.array($I$(1), [this.numColors]);
var bgr=this.background.getRed$();
var bgg=this.background.getGreen$();
var bgb=this.background.getBlue$();
for (var i=0; i < this.numColors; i++) {
var tr=bgr - (bgr * i/this.numColors|0);
var tg=bgg + ((255 - bgg) * i/this.numColors|0);
var tb=bgb - (bgb * i/this.numColors|0);
this.colors[i]=Clazz.new_($I$(1,1).c$$I$I$I,[tr, tg, tb]);
$I$(1).RGBtoHSB$I$I$I$FA(tr, tg, tb, C$.hsb);
var c=$I$(1,"getHSBColor$F$F$F",[(C$.hsb[0] + 0.5) % 1, C$.hsb[1], C$.hsb[2]]);
tr=bgr + ((c.getRed$() - bgr) * i/this.numColors|0);
tg=bgg + ((c.getGreen$() - bgg) * i/this.numColors|0);
tb=bgb + ((c.getBlue$() - bgb) * i/this.numColors|0);
this.compColors[i]=Clazz.new_($I$(1,1).c$$I$I$I,[tr, tg, tb]);
}
}, p$1);

Clazz.newMeth(C$, 'createBlueSpectrumPalette',  function () {
this.colors=Clazz.array($I$(1), [this.numColors]);
this.compColors=Clazz.array($I$(1), [this.numColors]);
var bgr=this.background.getRed$();
var bgg=this.background.getGreen$();
var bgb=this.background.getBlue$();
for (var i=0; i < this.numColors; i++) {
var tr=bgr - (bgr * i/this.numColors|0);
var tg=bgg - (bgg * i/this.numColors|0);
var tb=bgb + ((255 - bgb) * i/this.numColors|0);
this.colors[i]=Clazz.new_($I$(1,1).c$$I$I$I,[tr, tg, tb]);
$I$(1).RGBtoHSB$I$I$I$FA(tr, tg, tb, C$.hsb);
var c=$I$(1,"getHSBColor$F$F$F",[(C$.hsb[0] + 0.5) % 1, C$.hsb[1], C$.hsb[2]]);
tr=bgr + ((c.getRed$() - bgr) * i/this.numColors|0);
tg=bgg + ((c.getGreen$() - bgg) * i/this.numColors|0);
tb=bgb + ((c.getBlue$() - bgb) * i/this.numColors|0);
this.compColors[i]=Clazz.new_($I$(1,1).c$$I$I$I,[tr, tg, tb]);
}
}, p$1);

Clazz.newMeth(C$, 'createGraySpectrumPalette',  function () {
this.compColors=this.colors=Clazz.array($I$(1), [this.numColors]);
if (this.background === $I$(1).BLACK ) {
for (var i=0; i < this.numColors; i++) {
var sat=(255 * i/this.numColors|0);
this.colors[i]=Clazz.new_($I$(1,1).c$$I$I$I,[sat, sat, sat]);
}
return;
}var bgr=this.background.getRed$();
var bgg=this.background.getGreen$();
var bgb=this.background.getBlue$();
for (var i=0; i < this.numColors; i++) {
var tr=bgr - (bgr * i/this.numColors|0);
var tg=bgg - (bgg * i/this.numColors|0);
var tb=bgb - (bgb * i/this.numColors|0);
this.colors[i]=Clazz.new_($I$(1,1).c$$I$I$I,[tr, tg, tb]);
}
}, p$1);

Clazz.newMeth(C$, 'createSpectrumPalette',  function () {
this.compColors=this.colors=Clazz.array($I$(1), [this.numColors]);
var n1=(this.numColors/3|0);
n1=Math.max(1, n1);
var bgr=this.background.getRed$();
var bgg=this.background.getGreen$();
var bgb=this.background.getBlue$();
for (var i=0; i < n1; i++) {
var tr=bgr - (bgr * i/n1|0);
var tg=bgg - (bgg * i/n1|0);
var tb=Math.min(255, bgg + ((255 - bgb) * i/n1|0));
this.colors[i]=Clazz.new_($I$(1,1).c$$I$I$I,[tr, tg, tb]);
}
for (var i=n1; i < this.numColors; i++) {
var sigma=n1 / 1.2;
var arg1=(i - n1) / sigma;
var arg2=(i - 2 * n1) / sigma;
var arg3=(i - this.numColors) / sigma;
var b=((255 * Math.exp(-arg1 * arg1))|0);
var g=((255 * Math.exp(-arg2 * arg2))|0);
var r=((255 * Math.exp(-arg3 * arg3))|0);
r=Math.min(255, r);
b=Math.min(255, b);
g=Math.min(255, g);
this.colors[i]=Clazz.new_($I$(1,1).c$$I$I$I,[r, g, b]);
}
}, p$1);

Clazz.newMeth(C$, 'showLegend$',  function () {
var floor=0;
var ceil=this.ceil * 2;
this.legendPanel=Clazz.new_($I$(2,1));
this.legendPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3,1).c$$I$I,[300, 120]));
this.legendPanel.setPreferredGutters$I$I$I$I(0, 0, 0, 35);
this.legendPanel.setClipAtGutter$Z(false);
this.legendPanel.setSquareAspect$Z(false);
if ((this.legendFrame == null ) || !this.legendFrame.isDisplayable$() ) {
this.legendFrame=Clazz.new_([$I$(5).getString$S("GUIUtils.Legend")],$I$(4,1).c$$S);
}this.legendFrame.setDefaultCloseOperation$I(2);
this.legendFrame.setResizable$Z(true);
this.legendFrame.setContentPane$java_awt_Container(this.legendPanel);
var numVecs=30;
var pointdata=Clazz.new_($I$(6,1).c$$I$I$I,[numVecs, 2, 3]);
var data=pointdata.getData$();
var delta=1.5 * ceil / numVecs;
var cval=floor - delta / 2;
for (var i=0, n=data.length; i < n; i++) {
data[i][1][2]=cval;
data[i][1][3]=0;
data[i][1][4]=4;
cval+=delta;
}
pointdata.setScale$D$D$D$D(0, 1.5 * ceil + delta, 0, 1);
this.legendPlot=Clazz.new_($I$(7,1).c$$org_opensourcephysics_display2d_GridData,[pointdata]);
this.legendPlot.setPaletteType$I(this.paletteType);
this.legendPlot.setAutoscaleZ$Z$D$D(false, 0.5 * ceil, ceil);
this.legendPlot.update$();
this.legendPanel.addDrawable$org_opensourcephysics_display_Drawable(this.legendPlot);
var xaxis=Clazz.new_($I$(8,1).c$$S,[""]);
xaxis.setLocationType$I(2);
xaxis.setLocation$D(-0.0);
xaxis.setEnabled$Z(true);
this.legendPanel.addDrawable$org_opensourcephysics_display_Drawable(xaxis);
this.legendFrame.pack$();
this.legendFrame.setVisible$Z(true);
return this.legendFrame;
});

Clazz.newMeth(C$, 'getLegendFrame$',  function () {
return this.legendFrame;
});

Clazz.newMeth(C$, 'updateLegend$',  function () {
if (this.legendPlot == null ) {
return;
}this.legendPlot.setPaletteType$I(this.paletteType);
this.legendPlot.setAutoscaleZ$Z$D$D(false, 0.5 * this.ceil, this.ceil);
this.legendPlot.update$();
this.legendPanel.repaint$();
});

C$.$static$=function(){C$.$static$=0;
C$.hsb=Clazz.array(Float.TYPE, [3]);
{
$I$(1).RGBtoHSB$I$I$I$FA(255, 0, 0, C$.hsb);
C$.RED_COMP=$I$(1,"getHSBColor$F$F$F",[(C$.hsb[0] + 0.5) % 1, C$.hsb[1], C$.hsb[2]]);
$I$(1).RGBtoHSB$I$I$I$FA(0, 255, 0, C$.hsb);
C$.GREEN_COMP=$I$(1,"getHSBColor$F$F$F",[(C$.hsb[0] + 0.5) % 1, C$.hsb[1], C$.hsb[2]]);
$I$(1).RGBtoHSB$I$I$I$FA(0, 255, 0, C$.hsb);
C$.BLUE_COMP=$I$(1,"getHSBColor$F$F$F",[(C$.hsb[0] + 0.5) % 1, C$.hsb[1], C$.hsb[2]]);
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
