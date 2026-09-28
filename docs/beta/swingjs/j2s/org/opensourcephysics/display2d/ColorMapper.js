(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[[0,'org.opensourcephysics.display2d.ColorMapper','org.opensourcephysics.display.InteractivePanel','java.awt.Dimension','javax.swing.JFrame','org.opensourcephysics.display.DisplayRes','org.opensourcephysics.display2d.GridPointData','org.opensourcephysics.display2d.GridPlot','org.opensourcephysics.display.axes.XAxis','java.awt.Color',['org.opensourcephysics.display2d.ColorMapper','.ColorMapperLoader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ColorMapper", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ColorMapperLoader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.zMap=null;
},1);

C$.$fields$=[['D',['floor','ceil'],'I',['numColors','paletteType'],'O',['colors','java.awt.Color[]','rgbs','byte[][]','floorColor','java.awt.Color','+ceilColor','floorColorRGB','byte[]','+ceilColorRGB','legendFrame','javax.swing.JFrame','zMap','org.opensourcephysics.display2d.ZExpansion']]]

Clazz.newMeth(C$, 'c$$I$D$D$I',  function (_numColors, _floor, _ceil, palette) {
;C$.$init$.apply(this);
this.floor=_floor;
this.ceil=_ceil;
this.numColors=_numColors;
this.setPaletteType$I(palette);
}, 1);

Clazz.newMeth(C$, 'updateLegend$org_opensourcephysics_display2d_ZExpansion',  function (zMap) {
if ((this.legendFrame != null ) && this.legendFrame.isVisible$() && this.legendFrame.isDisplayable$()  ) {
if (zMap == null ) {
zMap=this.zMap;
}this.showLegend$org_opensourcephysics_display2d_ZExpansion(zMap);
}});

Clazz.newMeth(C$, 'getLegendFrame$',  function () {
return this.legendFrame;
});

Clazz.newMeth(C$, 'showLegend$',  function () {
if (this.zMap != null ) {
return this.showLegend$org_opensourcephysics_display2d_ZExpansion(this.zMap);
}var dp=Clazz.new_($I$(2,1));
dp.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3,1).c$$I$I,[300, 66]));
dp.setPreferredGutters$I$I$I$I(0, 0, 0, 35);
dp.setClipAtGutter$Z(false);
if ((this.legendFrame == null ) || !this.legendFrame.isDisplayable$() ) {
this.legendFrame=Clazz.new_([$I$(5).getString$S("GUIUtils.Legend")],$I$(4,1).c$$S);
}this.legendFrame.setDefaultCloseOperation$I(2);
this.legendFrame.setResizable$Z(false);
this.legendFrame.setContentPane$java_awt_Container(dp);
var pointdata=Clazz.new_($I$(6,1).c$$I$I$I,[this.numColors + 2, 1, 1]);
var data=pointdata.getData$();
var delta=(this.ceil - this.floor) / (this.numColors);
var cval=this.floor - delta / 2;
for (var i=0, n=data.length; i < n; i++) {
data[i][0][2]=cval;
cval+=delta;
}
pointdata.setScale$D$D$D$D(this.floor - delta, this.ceil + delta, 0, 1);
var cb=Clazz.new_($I$(7,1).c$$org_opensourcephysics_display2d_GridData,[pointdata]);
cb.setShowGridLines$Z(false);
cb.setAutoscaleZ$Z$D$D(false, this.floor, this.ceil);
cb.setColorPalette$java_awt_ColorA(this.colors);
cb.update$();
dp.addDrawable$org_opensourcephysics_display_Drawable(cb);
var xaxis=Clazz.new_($I$(8,1).c$$S,[""]);
xaxis.setLocationType$I(2);
xaxis.setLocation$D(-0.5);
xaxis.setEnabled$Z(true);
dp.addDrawable$org_opensourcephysics_display_Drawable(xaxis);
this.legendFrame.pack$();
this.legendFrame.setVisible$Z(true);
return this.legendFrame;
});

Clazz.newMeth(C$, 'showLegend$org_opensourcephysics_display2d_ZExpansion',  function (zMap) {
if (zMap == null ) {
return this.showLegend$();
}var dp=Clazz.new_($I$(2,1));
dp.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3,1).c$$I$I,[300, 66]));
dp.setPreferredGutters$I$I$I$I(0, 0, 0, 35);
dp.setClipAtGutter$Z(false);
if ((this.legendFrame == null ) || !this.legendFrame.isDisplayable$() ) {
this.legendFrame=Clazz.new_([$I$(5).getString$S("GUIUtils.Legend")],$I$(4,1).c$$S);
}this.legendFrame.setDefaultCloseOperation$I(2);
this.legendFrame.setResizable$Z(true);
this.legendFrame.setContentPane$java_awt_Container(dp);
var numColors=256;
if (this.paletteType == -1) {
numColors=this.colors.length;
}var pointdata=Clazz.new_($I$(6,1).c$$I$I$I,[numColors + 2, 1, 1]);
var data=pointdata.getData$();
var delta=(this.ceil - this.floor) / (numColors);
var cval=this.floor - delta / 2;
for (var i=0, n=data.length; i < n; i++) {
data[i][0][2]=zMap.evaluate$D(cval);
cval+=delta;
}
pointdata.setScale$D$D$D$D(this.floor - delta, this.ceil + delta, 0, 1);
var cb=Clazz.new_($I$(7,1).c$$org_opensourcephysics_display2d_GridData,[pointdata]);
cb.setShowGridLines$Z(false);
cb.setAutoscaleZ$Z$D$D(false, this.floor, this.ceil);
if (this.paletteType == -1) {
cb.setColorPalette$java_awt_ColorA(this.colors);
} else {
cb.setPaletteType$I(this.paletteType);
}cb.update$();
dp.addDrawable$org_opensourcephysics_display_Drawable(cb);
var xaxis=Clazz.new_($I$(8,1).c$$S,[""]);
xaxis.setLocationType$I(2);
xaxis.setLocation$D(-0.5);
xaxis.setEnabled$Z(true);
dp.addDrawable$org_opensourcephysics_display_Drawable(xaxis);
this.legendFrame.pack$();
this.legendFrame.setVisible$Z(true);
return this.legendFrame;
});

Clazz.newMeth(C$, 'setScale$D$D',  function (_floor, _ceil) {
this.floor=_floor;
this.ceil=_ceil;
if (this.zMap != null ) {
this.zMap.setMinMax$D$D(this.floor, this.ceil);
}});

Clazz.newMeth(C$, 'doubleToComponents$D',  function (value) {
if (this.zMap != null ) {
value=this.zMap.evaluate$D(value);
}var index=this.doubleToIndex$D(value);
return (index < 0 ? this.floorColorRGB : index >= this.colors.length ? this.ceilColorRGB : this.rgbs[index]);
});

Clazz.newMeth(C$, 'doubleToColor$D',  function (value) {
var index=this.doubleToIndex$D(value);
if (index < 0) return this.floorColor;
if (index >= this.colors.length) return this.ceilColor;
return this.colors[index];
});

Clazz.newMeth(C$, 'doubleToIndex$D',  function (value) {
if (this.zMap != null ) {
value=this.zMap.evaluate$D(value);
}if (this.floor - value > 1.4E-45 ) {
return -1;
} else if (value - this.ceil > 1.4E-45 ) {
return this.colors.length;
}var index=((this.colors.length * (value - this.floor) / (this.ceil - this.floor))|0);
index=Math.max(0, index);
return Math.min(index, this.colors.length - 1);
});

Clazz.newMeth(C$, 'indexToColor$I',  function (index) {
if (index < 0) return this.floorColor;
if (index >= this.colors.length) return this.ceilColor;
return this.colors[index];
});

Clazz.newMeth(C$, 'getColorThresholds$',  function () {
var thresholds=Clazz.array(Double.TYPE, [this.colors.length + 1]);
var delta=(this.ceil - this.floor) / this.colors.length;
for (var i=0, n=this.colors.length; i < n; i++) thresholds[i]=this.floor + i * delta;

thresholds[this.colors.length]=this.ceil;
return thresholds;
});

Clazz.newMeth(C$, 'setZMap$org_opensourcephysics_display2d_ZExpansion',  function (map) {
this.zMap=map;
if (this.zMap != null ) {
this.zMap.setMinMax$D$D(this.floor, this.ceil);
}});

Clazz.newMeth(C$, 'getFloor$',  function () {
return this.floor;
});

Clazz.newMeth(C$, 'getFloorColor$',  function () {
return this.floorColor;
});

Clazz.newMeth(C$, 'getCeil$',  function () {
return this.ceil;
});

Clazz.newMeth(C$, 'getCeilColor$',  function () {
return this.ceilColor;
});

Clazz.newMeth(C$, 'getNumColors$',  function () {
return this.numColors;
});

Clazz.newMeth(C$, 'setFloorCeilColor$java_awt_Color$java_awt_Color',  function (_floorColor, _ceilColor) {
if (_floorColor == null ) _floorColor=$I$(9).DARK_GRAY;
if (_ceilColor == null ) _ceilColor=$I$(9).LIGHT_GRAY;
this.floorColor=_floorColor;
this.ceilColor=_ceilColor;
this.floorColorRGB=C$.toRGB$java_awt_Color(this.floorColor);
this.ceilColorRGB=C$.toRGB$java_awt_Color(this.ceilColor);
});

Clazz.newMeth(C$, 'getPaletteType$',  function () {
return this.paletteType;
});

Clazz.newMeth(C$, 'setColorPalette$java_awt_ColorA',  function (_colors) {
this.setFloorCeilColor$java_awt_Color$java_awt_Color(null, null);
this.colors=_colors;
this.numColors=this.colors.length;
this.rgbs=Clazz.array(Byte.TYPE, [this.numColors, null]);
for (var i=0; i < this.numColors; i++) {
this.rgbs[i]=C$.toRGB$java_awt_Color(this.colors[i]);
}
this.paletteType=-1;
});

Clazz.newMeth(C$, 'toRGB$java_awt_Color',  function (c) {
var rgb=Clazz.array(Byte.TYPE, [3]);
rgb[0]=(c.getRed$()|0);
rgb[1]=(c.getGreen$()|0);
rgb[2]=(c.getBlue$()|0);
return rgb;
}, 1);

Clazz.newMeth(C$, 'setNumberOfColors$I',  function (_numColors) {
if (_numColors == this.numColors) {
return;
}this.numColors=_numColors;
if (this.paletteType == -1) {
var newColors=Clazz.array($I$(9), [this.numColors]);
var newRGBs=Clazz.array(Byte.TYPE, [this.numColors, 3]);
for (var i=0, n=Math.min(this.colors.length, this.numColors); i < n; i++) {
newColors[i]=this.colors[i];
newRGBs[i]=this.rgbs[i];
}
for (var i=this.colors.length; i < this.numColors; i++) {
newColors[i]=this.colors[this.colors.length - 1];
newRGBs[i]=this.rgbs[this.colors.length - 1];
}
this.colors=newColors;
this.rgbs=newRGBs;
} else {
this.setPaletteType$I(this.paletteType);
}});

Clazz.newMeth(C$, 'setPaletteType$I',  function (_paletteType) {
this.paletteType=_paletteType;
if ((this.paletteType == 1) || (this.paletteType == 6) ) {
this.setFloorCeilColor$java_awt_Color$java_awt_Color(Clazz.new_($I$(9,1).c$$I$I$I,[64, 64, 128]), Clazz.new_($I$(9,1).c$$I$I$I,[255, 191, 191]));
} else {
this.setFloorCeilColor$java_awt_Color$java_awt_Color(null, null);
}this.numColors=Math.max(2, this.numColors);
this.colors=C$.getColorPalette$I$I$BAA(this.numColors, this.paletteType, this.rgbs=Clazz.array(Byte.TYPE, [this.numColors, null]));
});

Clazz.newMeth(C$, 'getColorPalette$I$I',  function (numColors, paletteType) {
return C$.getColorPalette$I$I$BAA(numColors, paletteType, null);
}, 1);

Clazz.newMeth(C$, 'getColorPalette$I$I$BAA',  function (numColors, paletteType, rgbs) {
if (numColors < 2) {
numColors=2;
}var colors=Clazz.array($I$(9), [numColors]);
for (var i=0; i < numColors; i++) {
var level=0.8 * i / (numColors - 1);
var r=0;
var b=0;
switch (paletteType) {
case 9:
r=((Math.max(0, -numColors - 1 + i * 2) * 255)/(numColors - 1)|0);
b=((Math.max(0, numColors - 1 - i * 2 ) * 255)/(numColors - 1)|0);
colors[i]=Clazz.new_($I$(9,1).c$$I$I$I,[r, 0, b]);
break;
case 0:
level=0.8 - level;
colors[i]=$I$(9).getHSBColor$F$F$F(level, 1.0, 1.0);
break;
case 1:
case 6:
colors[i]=Clazz.new_([(i * 255/(numColors - 1)|0), (i * 255/(numColors - 1)|0), (i * 255/(numColors - 1)|0)],$I$(9,1).c$$I$I$I);
break;
case 3:
colors[i]=Clazz.new_([(i * 255/(numColors - 1)|0), 0, 0],$I$(9,1).c$$I$I$I);
break;
case 4:
colors[i]=Clazz.new_([0, (i * 255/(numColors - 1)|0), 0],$I$(9,1).c$$I$I$I);
break;
case 5:
colors[i]=Clazz.new_([0, 0, (i * 255/(numColors - 1)|0)],$I$(9,1).c$$I$I$I);
break;
case 2:
default:
level=i / (numColors - 1);
colors[i]=$I$(9,"getHSBColor$F$F$F",[0.8 * (1 - level), 1.0, 0.2 + 1.6 * Math.abs(0.5 - level)]);
break;
}
if (rgbs != null ) rgbs[i]=C$.toRGB$java_awt_Color(colors[i]);
}
return colors;
}, 1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(10,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ColorMapper, "ColorMapperLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var mapper=obj;
control.setValue$S$I("palette type", mapper.paletteType);
control.setValue$S$I("number of colors", mapper.numColors);
control.setValue$S$D("floor", mapper.floor);
control.setValue$S$D("ceiling", mapper.ceil);
control.setValue$S$O("floor color", mapper.floorColor);
control.setValue$S$O("ceiling color", mapper.ceilColor);
if (mapper.paletteType == -1) {
control.setValue$S$O("colors", mapper.colors);
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1).c$$I$D$D$I,[100, -1, 1, 0]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var mapper=obj;
var paletteType=control.getInt$S("palette type");
var numColors=control.getInt$S("number of colors");
var floor=control.getDouble$S("floor");
var ceil=control.getDouble$S("ceiling");
if (paletteType == -1) {
var colors=control.getObject$S("colors");
mapper.setColorPalette$java_awt_ColorA(colors);
} else {
mapper.setPaletteType$I(paletteType);
mapper.setNumberOfColors$I(numColors);
}mapper.setScale$D$D(floor, ceil);
var floorColor=control.getObject$S("floor color");
var ceilColor=control.getObject$S("ceiling color");
mapper.setFloorCeilColor$java_awt_Color$java_awt_Color(floorColor, ceilColor);
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
