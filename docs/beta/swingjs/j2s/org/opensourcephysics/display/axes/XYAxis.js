(function(){var P$=Clazz.newPackage("org.opensourcephysics.display.axes"),p$1={},I$=[[0,'org.opensourcephysics.numerics.Util','org.opensourcephysics.display.DrawableTextLine','java.awt.Font','java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XYAxis", null, null, 'org.opensourcephysics.display.Interactive');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.x=0;
this.y=0;
this.enabled=false;
this.locationType=0;
this.axisType=0;
this.logBase="10";
this.labelFormat=$I$(1).newDecimalFormat$S("0.0");
this.integerFormat=$I$(1).newDecimalFormat$S("000");
this.label_step=-14;
this.label_start=2;
this.axisLabel=Clazz.new_($I$(2,1).c$$S$D$D,["x", 0, 0]);
this.labelFont=Clazz.new_($I$(3,1).c$$S$I$I,["Dialog", 0, 12]);
this.label_exponent=0;
this.label_string=Clazz.array(String, [0]);
this.label_value=Clazz.array(Double.TYPE, [0]);
this.decade_multiplier=1;
this.label_count=0;
this.location=0;
this.titleFont=Clazz.new_($I$(3,1).c$$S$I$I,["Dialog", 0, 12]);
this.showMajorGrid=false;
this.majorGridColor=Clazz.new_($I$(4,1).c$$I$I$I$I,[0, 0, 0, 32]);
},1);

C$.$fields$=[['Z',['enabled','showMajorGrid'],'D',['x','y','label_step','label_start','decade_multiplier','location'],'I',['locationType','axisType','label_exponent','label_count'],'S',['logBase'],'O',['labelFormat','java.text.DecimalFormat','+integerFormat','axisLabel','org.opensourcephysics.display.DrawableTextLine','labelFont','java.awt.Font','label_string','String[]','label_value','double[]','titleFont','java.awt.Font','majorGridColor','java.awt.Color']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.axisLabel.setJustification$I(0);
this.axisLabel.setFont$java_awt_Font(this.labelFont);
}, 1);

Clazz.newMeth(C$, 'setLabelFormat$java_text_DecimalFormat',  function (format) {
if (format != null ) {
this.labelFormat=format;
}});

Clazz.newMeth(C$, 'setLabelFormat$S',  function (formatString) {
this.labelFormat=$I$(1).newDecimalFormat$S(formatString);
});

Clazz.newMeth(C$, 'setLocationType$I',  function (_locationType) {
this.locationType=_locationType;
});

Clazz.newMeth(C$, 'setLocation$D',  function (_location) {
this.location=_location;
});

Clazz.newMeth(C$, 'setAxisType$I',  function (type) {
this.axisType=type;
});

Clazz.newMeth(C$, 'setTitle$S$S',  function (title, font_name) {
this.axisLabel.setText$S(title);
if ((font_name == null ) || font_name.equals$O("") ) {
return;
}this.axisLabel.setFont$java_awt_Font($I$(3).decode$S(font_name));
});

Clazz.newMeth(C$, 'setTitle$S',  function (title) {
this.axisLabel.setText$S(title);
});

Clazz.newMeth(C$, 'setTitleFont$S',  function (name) {
if ((name != null ) && !name.equals$O("") ) {
this.titleFont=$I$(3).decode$S(name);
}});

Clazz.newMeth(C$, 'setShowMajorGrid$Z',  function (show) {
this.showMajorGrid=show;
});

Clazz.newMeth(C$, 'drawMultiplier$I$I$I$java_awt_Graphics2D',  function (xpix, ypix, exponent, g2) {
var oldFont=g2.getFont$();
g2.drawString$S$I$I("10", xpix, ypix);
g2.setFont$java_awt_Font(g2.getFont$().deriveFont$I$F(0, 9.0));
g2.drawString$S$I$I("" + exponent, xpix + 16, ypix - 6);
g2.setFont$java_awt_Font(oldFont);
});

Clazz.newMeth(C$, 'calculateLabels$D$D$I',  function (minimum, maximum, numTicks) {
numTicks=Math.min(19, numTicks);
var min=minimum;
var max=maximum;
if (maximum < minimum ) {
min=maximum;
max=minimum;
} else {
max=maximum;
min=minimum;
}switch (this.axisType) {
case 0:
p$1.calculateLinearLabels$D$D$I.apply(this, [min, max, numTicks]);
break;
case 1:
p$1.calculateLogLabels$D$D$I.apply(this, [min, max, numTicks]);
break;
default:
p$1.calculateLinearLabels$D$D$I.apply(this, [min, max, numTicks]);
break;
}
});

Clazz.newMeth(C$, 'calculateLogLabels$D$D$I',  function (minimum, maximum, numTicks) {
this.label_exponent=0;
this.decade_multiplier=1;
var label_step=1;
var label_start=(Math.ceil(minimum)|0);
if (label_start - minimum > 0.998 ) {
label_start-=1;
}var val=label_start;
this.label_count=1;
do {
val+=label_step;
++this.label_count;
} while (val <= maximum - label_step );
this.label_string=Clazz.array(String, [this.label_count]);
this.label_value=Clazz.array(Double.TYPE, [this.label_count]);
for (var i=0; i < this.label_count; i++) {
val=label_start + i * label_step;
this.label_string[i]=this.integerFormat.format$J(val);
this.label_value[i]=val;
}
}, p$1);

Clazz.newMeth(C$, 'calculateLinearLabels$D$D$I',  function (minimum, maximum, numTicks) {
var val;
var i;
var j;
if ((Math.abs(minimum) == 0 ) && (Math.abs(maximum) == 0 ) ) {
maximum=minimum + 1.0E-6;
}if (Math.abs(minimum) > Math.abs(maximum) ) {
this.label_exponent=((Math.floor(C$.log10$D(Math.abs(minimum)) / 2.0)|0)) * 2;
} else {
this.label_exponent=((Math.floor(C$.log10$D(Math.abs(maximum)) / 2.0)|0)) * 2;
}if ((maximum - minimum) > 10 * numTicks * 4.9E-324  ) {
this.label_step=p$1.RoundUp$D.apply(this, [(maximum - minimum) / numTicks]);
} else {
this.label_step=1;
}this.label_start=Math.floor(minimum / this.label_step) * this.label_step;
while ((this.label_step > 0 ) && (this.label_start < minimum ) ){
this.label_start+=this.label_step;
}
val=this.label_start;
this.label_count=1;
while (val <= maximum - this.label_step ){
val+=this.label_step;
++this.label_count;
}
this.label_string=Clazz.array(String, [this.label_count]);
this.label_value=Clazz.array(Double.TYPE, [this.label_count]);
for (i=0; i < this.label_count; i++) {
val=this.label_start + i * this.label_step;
if (this.label_exponent < 0) {
for (j=this.label_exponent; j < 0; j++) {
val*=10;
}
} else {
for (j=0; j < this.label_exponent; j++) {
val/=10;
}
}this.label_string[i]=this.labelFormat.format$D(val);
this.label_value[i]=val;
}
this.decade_multiplier=1;
if (this.label_exponent < 0) {
for (j=this.label_exponent; j < 0; j++) {
this.decade_multiplier/=10;
}
} else {
for (j=0; j < this.label_exponent; j++) {
this.decade_multiplier*=10;
}
}}, p$1);

Clazz.newMeth(C$, 'RoundUp$D',  function (val) {
var exponent;
var i;
exponent=((Math.floor(C$.log10$D(val)))|0);
if (exponent < 0) {
for (i=exponent; i < 0; i++) {
val*=10.0;
}
} else {
for (i=0; i < exponent; i++) {
val/=10.0;
}
}if (val > 5.0 ) {
val=10.0;
} else if (val > 2.0 ) {
val=5.0;
} else if (val > 1.0 ) {
val=2.0;
} else {
val=1.0;
}if (exponent < 0) {
for (i=exponent; i < 0; i++) {
val/=10.0;
}
} else {
for (i=0; i < exponent; i++) {
val*=10.0;
}
}return val;
}, p$1);

Clazz.newMeth(C$, 'getXMin$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return 0;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return false;
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, _xpix, _ypix) {
return null;
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (_enabled) {
this.enabled=_enabled;
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return this.enabled;
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
});

Clazz.newMeth(C$, 'setX$D',  function (x) {
});

Clazz.newMeth(C$, 'setY$D',  function (y) {
});

Clazz.newMeth(C$, 'getX$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getY$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'log10$D',  function (x) {
if (x <= 0.0 ) {
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["range exception"]);
}return Math.log(x) / 2.302585092994046;
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
