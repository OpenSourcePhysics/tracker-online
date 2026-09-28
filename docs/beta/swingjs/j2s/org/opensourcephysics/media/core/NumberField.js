(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'java.util.Hashtable','org.opensourcephysics.display.OSPRuntime','java.text.NumberFormat','java.awt.Color',['org.opensourcephysics.media.core.NumberField','.NumberFormatter'],'javax.swing.SwingUtilities','java.awt.event.KeyAdapter','java.awt.event.MouseAdapter','java.awt.Toolkit','org.opensourcephysics.js.AIPatch']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NumberField", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JTextField');
C$.$classes$=[['NumberFormatter',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.conversionFactor=1;
},1);

C$.$fields$=[['Z',['haveVirtualNumberPad'],'D',['prevValue','conversionFactor'],'S',['units'],'O',['maxValue','Double','+minValue','nf','org.opensourcephysics.media.core.NumberField.NumberFormatter']]
,['O',['DISABLED_COLOR','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$I',  function (columns) {
C$.c$$I$I$Z.apply(this, [columns, 4, false]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (columns, sigfigs) {
C$.c$$I$I$Z.apply(this, [columns, sigfigs, false]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$Z',  function (columns, sigfigs, fixed) {
;C$.superclazz.c$$I.apply(this,[columns]);C$.$init$.apply(this);
this.nf=Clazz.new_($I$(5,1).c$$Z,[fixed]);
this.setBackground$java_awt_Color($I$(4).white);
this.setDisabledTextColor$java_awt_Color(C$.DISABLED_COLOR);
this.setText$S("0");
this.addKeyListener$java_awt_event_KeyListener(((P$.NumberField$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "NumberField$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (!this.b$['javax.swing.text.JTextComponent'].isEditable$.apply(this.b$['javax.swing.text.JTextComponent'], [])) return;
if (e.getKeyCode$() == 10) {
var runner=((P$.NumberField$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "NumberField$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['javax.swing.JComponent'].setBackground$java_awt_Color.apply(this.b$['javax.swing.JComponent'], [$I$(4).white]);
this.b$['org.opensourcephysics.media.core.NumberField'].setValue$D.apply(this.b$['org.opensourcephysics.media.core.NumberField'], [this.b$['org.opensourcephysics.media.core.NumberField'].getValue$.apply(this.b$['org.opensourcephysics.media.core.NumberField'], [])]);
});
})()
), Clazz.new_(P$.NumberField$1$1.$init$,[this, null]));
$I$(6).invokeLater$Runnable(runner);
} else {
this.b$['javax.swing.JComponent'].setBackground$java_awt_Color.apply(this.b$['javax.swing.JComponent'], [$I$(4).yellow]);
}});
})()
), Clazz.new_($I$(7,1),[this, null],P$.NumberField$1)));
this.addFocusListener$java_awt_event_FocusListener(((P$.NumberField$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "NumberField$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
if (!this.b$['javax.swing.text.JTextComponent'].isEditable$.apply(this.b$['javax.swing.text.JTextComponent'], []) || !$I$(2).isJS ) return;
$I$(2).checkMobileKeyboard$org_opensourcephysics_media_core_NumberField(this.b$['org.opensourcephysics.media.core.NumberField']);
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (!this.b$['javax.swing.text.JTextComponent'].isEditable$.apply(this.b$['javax.swing.text.JTextComponent'], [])) return;
var runner=((P$.NumberField$2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "NumberField$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['javax.swing.JComponent'].setBackground$java_awt_Color.apply(this.b$['javax.swing.JComponent'], [$I$(4).white]);
this.b$['org.opensourcephysics.media.core.NumberField'].setValue$D.apply(this.b$['org.opensourcephysics.media.core.NumberField'], [this.b$['org.opensourcephysics.media.core.NumberField'].getValue$.apply(this.b$['org.opensourcephysics.media.core.NumberField'], [])]);
});
})()
), Clazz.new_(P$.NumberField$2$1.$init$,[this, null]));
$I$(6).invokeLater$Runnable(runner);
});
})()
), Clazz.new_(P$.NumberField$2.$init$,[this, null])));
this.addMouseListener$java_awt_event_MouseListener(((P$.NumberField$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "NumberField$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if (!this.b$['javax.swing.text.JTextComponent'].isEditable$.apply(this.b$['javax.swing.text.JTextComponent'], [])) return;
if (e.getClickCount$() == 2) {
this.b$['javax.swing.text.JTextComponent'].selectAll$.apply(this.b$['javax.swing.text.JTextComponent'], []);
}});
})()
), Clazz.new_($I$(8,1),[this, null],P$.NumberField$3)));
this.nf.setSigFigs$I(sigfigs);
}, 1);

Clazz.newMeth(C$, 'getValue$',  function () {
var s=this.getText$().trim$().toUpperCase$();
if (s.length$() == 0) return this.prevValue;
if ((this.units != null ) && !this.units.equals$O("") ) {
var n=s.indexOf$S(this.units.toUpperCase$());
if (n > 0) s=s.substring$I$I(0, n).trim$();
}if (s.equals$O(this.nf.format$D(this.prevValue * this.conversionFactor))) {
return this.prevValue;
}var retValue;
try {
retValue=(s.equals$O("0") ? 0 : this.nf.parse$S(s).doubleValue$() / this.conversionFactor);
if (this.minValue != null  && retValue < (this.minValue).$c()  ) {
this.setValue$D((this.minValue).valueOf());
return (this.minValue).valueOf();
}if (this.maxValue != null  && retValue > (this.maxValue).$c()  ) {
this.setValue$D((this.maxValue).valueOf());
return (this.maxValue).valueOf();
}} catch (e) {
if (Clazz.exceptionOf(e,"java.text.ParseException")){
$I$(9).getDefaultToolkit$().beep$();
this.setValue$D(this.prevValue);
return this.prevValue;
} else {
throw e;
}
}
return retValue;
});

Clazz.newMeth(C$, 'format$D',  function (d) {
return this.nf.format$D(d);
});

Clazz.newMeth(C$, 'setValue$D',  function (value) {
if (!this.isVisible$()) {
return;
}if (this.minValue != null ) {
value=Math.max(value, this.minValue.doubleValue$());
}if (this.maxValue != null ) {
value=Math.min(value, this.maxValue.doubleValue$());
}this.prevValue=value;
var s=this.nf.getText$D(this.conversionFactor * value);
if (this.units != null ) {
s+=this.units;
}if (!s.equals$O(this.getText$())) {
this.setText$S(s);
}});

Clazz.newMeth(C$, 'setExpectedRange$D$D',  function (lower, upper) {
this.nf.setExpectedRange$D$D(lower, upper);
});

Clazz.newMeth(C$, 'setSigFigs$I',  function (sigfigs) {
this.nf.setSigFigs$I(sigfigs);
});

Clazz.newMeth(C$, 'setMinValue$D',  function (min) {
if (Double.isNaN$D(min)) {
this.minValue=null;
} else {
this.minValue=Double.valueOf$D(min);
}});

Clazz.newMeth(C$, 'setMaxValue$D',  function (max) {
if (Double.isNaN$D(max)) {
this.maxValue=null;
} else {
this.maxValue=Double.valueOf$D(max);
}});

Clazz.newMeth(C$, 'setUnits$S',  function (units) {
var val=this.getValue$();
this.units=units;
this.setValue$D(val);
});

Clazz.newMeth(C$, 'getUnits$',  function () {
return this.units;
});

Clazz.newMeth(C$, 'setConversionFactor$D',  function (factor) {
this.conversionFactor=factor;
this.setValue$D(this.prevValue);
});

Clazz.newMeth(C$, 'getConversionFactor$',  function () {
return this.conversionFactor;
});

Clazz.newMeth(C$, 'applyPattern$S',  function (pattern) {
try {
this.nf.applyPattern$S(pattern);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getPattern$',  function () {
return this.nf.currentPattern;
});

Clazz.newMeth(C$, 'getFormat$',  function () {
return this.nf.format;
});

Clazz.newMeth(C$, 'setPatterns$SA',  function (patterns) {
this.setPatterns$SA$DA(patterns, Clazz.array(Double.TYPE, -1, [0.1, 10, 100, 1000]));
});

Clazz.newMeth(C$, 'setPatterns$SA$DA',  function (patterns, limits) {
this.nf.setPatterns$SA$DA(patterns, limits);
});

Clazz.newMeth(C$, 'setFixedPattern$S',  function (pattern) {
this.nf.setFixedPattern$S$D(pattern, this.getValue$());
this.setValue$D(this.prevValue);
});

Clazz.newMeth(C$, 'getFixedPattern$',  function () {
return this.nf.userPattern;
});

Clazz.newMeth(C$, 'setParseIntegerOnly$',  function () {
this.nf.setParseIntegerOnly$();
});

Clazz.newMeth(C$, 'setFormatFor$D',  function (d) {
this.nf.setFormatFor$D(d);
});

Clazz.newMeth(C$, 'refreshDecimalSeparators$Z',  function (redraw) {
if (this.nf.format != null ) {
this.nf.format.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(2).getDecimalFormatSymbols$());
}if (redraw) this.setValue$D(this.getValue$());
});

Clazz.newMeth(C$, 'addVirtualNumberPad$',  function () {
if (!this.haveVirtualNumberPad) {
$I$(10).virtualNumberPad$org_opensourcephysics_media_core_NumberField$S(this, "add");
this.haveVirtualNumberPad=true;
}$I$(10).virtualNumberPad$org_opensourcephysics_media_core_NumberField$S(this, "show");
});

Clazz.newMeth(C$, 'getDecimalSeparator$',  function () {
return this.nf.decimalSeparator;
});

C$.$static$=function(){C$.$static$=0;
C$.DISABLED_COLOR=Clazz.new_($I$(4,1).c$$I$I$I,[120, 120, 120]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.NumberField, "NumberFormatter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.patterns=Clazz.array(String, [5]);
this.ranges=Clazz.array(Double.TYPE, -1, [0.1, 10, 100, 1000]);
this.formatCache=Clazz.new_($I$(1,1));
this.userPattern="";
},1);

C$.$fields$=[['Z',['isIntegerOnly','fixedPattern','fixedPatternByDefault'],'C',['decimalSeparator'],'I',['sigfigs'],'S',['currentPattern','userPattern'],'O',['format','java.text.DecimalFormat','patterns','String[]','ranges','double[]','formatCache','java.util.Map']]]

Clazz.newMeth(C$, 'c$$Z',  function (fixed) {
;C$.$init$.apply(this);
this.fixedPattern=this.fixedPatternByDefault=fixed;
}, 1);

Clazz.newMeth(C$, 'setSigFigs$I',  function (sigfigs) {
if (this.sigfigs == sigfigs) {
return;
}this.ranges=Clazz.array(Double.TYPE, -1, [0.1, 10, 100, 1000]);
sigfigs=Math.max(sigfigs, 2);
this.sigfigs=Math.min(sigfigs, 6);
var d=".";
if (sigfigs == 2) {
this.patterns[0]="0" + d + "0E0" ;
this.patterns[1]="0" + d + "0" ;
this.patterns[2]="0";
this.patterns[3]="0" + d + "0E0" ;
this.patterns[4]="0" + d + "0E0" ;
} else if (sigfigs == 3) {
this.patterns[0]="0" + d + "00E0" ;
this.patterns[1]="0" + d + "00" ;
this.patterns[2]="0" + d + "0" ;
this.patterns[3]="0";
this.patterns[4]="0" + d + "00E0" ;
} else if (sigfigs >= 4) {
this.patterns[0]="0" + d + "000E0" ;
this.patterns[1]="0" + d + "000" ;
this.patterns[2]="0" + d + "00" ;
this.patterns[3]="0" + d + "0" ;
this.patterns[4]="0" + d + "000E0" ;
var n=sigfigs - 4;
for (var i=0; i < n; i++) {
for (var j=0; j < this.patterns.length; j++) {
this.patterns[j]="0" + d + "0" + this.patterns[j].substring$I(2) ;
}
}
}});

Clazz.newMeth(C$, 'setFormatFor$D',  function (value) {
if (this.fixedPattern) {
return;
}value=Math.abs(value);
var p=null;
if (value == 0 ) {
if (this.sigfigs == 1) {
p="0";
} else if (this.sigfigs == 2) {
p="0.0";
} else if (this.sigfigs == 3) {
p="0.00";
} else {
p="0.000";
}} else if (value < this.ranges[0] ) {
p=this.patterns[0];
} else if (value < this.ranges[1] ) {
p=this.patterns[1];
} else if (value < this.ranges[2] ) {
p=this.patterns[2];
} else if (value < this.ranges[3] ) {
p=this.patterns[3];
} else {
p=this.patterns[4];
}this.applyPattern$S(p);
});

Clazz.newMeth(C$, 'getText$D',  function (d) {
this.setFormatFor$D(d);
return this.format$D(d);
});

Clazz.newMeth(C$, 'format$D',  function (d) {
if (Double.isNaN$D(d)) {
return "";
}if (d == 0 ) d=0;
if (this.decimalSeparator != $I$(2).getCurrentDecimalSeparator$()) {
this.decimalSeparator=$I$(2).getCurrentDecimalSeparator$();
this.formatCache.clear$();
}if (this.currentPattern == null ) this.setFormatFor$D(d);
var i=0;
var f=0;
switch (this.currentPattern) {
case "0":
return "" + (d|0);
case "0.0":
f=10;
i=1;
break;
case "0.00":
f=100;
i=2;
break;
case "0.000":
f=1000;
i=3;
break;
}
var s;
if (i == 0) {
s=this.format.format$D(d);
} else if (d == 0 ) {
s=this.currentPattern;
} else {
var neg=(d < 0  ? "-" : "");
s="" + Long.$s(Math.round$D(Math.abs(d) * f));
var j=s.length$() - i;
if (j < 1) {
i=1;
s="000".substring$I$I(0, 1 - j) + s;
} else {
i=j;
}s=neg + s.substring$I$I(0, i) + this.decimalSeparator + s.substring$I(i) ;
}s=s.replace$CharSequence$CharSequence(".", String.valueOf$C(this.decimalSeparator));
return s;
});

Clazz.newMeth(C$, 'parse$S',  function (s) {
if (this.format == null ) {
var p=this.currentPattern;
this.applyPattern$S("0E0");
this.applyPattern$S(p);
}return this.format.parse$S(s);
});

Clazz.newMeth(C$, 'applyPattern$S',  function (p) {
if (p != this.currentPattern) {
if (this.decimalSeparator != $I$(2).getCurrentDecimalSeparator$()) {
this.decimalSeparator=$I$(2).getCurrentDecimalSeparator$();
this.formatCache.clear$();
}this.currentPattern=p;
switch (p) {
case "0":
case "0.0":
case "0.00":
case "0.000":
return;
}
this.format=this.formatCache.get$O(p);
if (this.format == null ) {
this.format=$I$(3).getInstance$();
this.formatCache.put$O$O(p, this.format);
this.format.applyPattern$S(p);
this.format.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(2).getDecimalFormatSymbols$());
if (this.isIntegerOnly) this.format.setParseIntegerOnly$Z(true);
}}});

Clazz.newMeth(C$, 'setExpectedRange$D$D',  function (lower, upper) {
this.fixedPattern=this.fixedPatternByDefault=true;
var range=Math.max(Math.abs(lower), Math.abs(upper));
if ((range < 0.1 ) || (range >= 1000 ) ) {
var s="";
for (var i=0; i < this.sigfigs - 1; i++) {
s+="0";
}
this.applyPattern$S("0." + s + "E0" );
} else {
var n;
if (range < 1 ) {
n=this.sigfigs;
} else if (range < 10 ) {
n=this.sigfigs - 1;
} else if (range < 100 ) {
n=this.sigfigs - 2;
} else {
n=this.sigfigs - 3;
}var s="";
for (var i=0; i < n; i++) {
s+="0";
}
if (s.equals$O("")) {
this.applyPattern$S("0");
} else {
this.applyPattern$S("0." + s);
}}});

Clazz.newMeth(C$, 'setPatterns$SA$DA',  function (patterns, ranges) {
if (patterns.length > 4 && ranges.length > 3 ) {
this.patterns=patterns;
this.ranges=ranges;
}});

Clazz.newMeth(C$, 'setFixedPattern$S$D',  function (pattern, value) {
if (pattern == null ) pattern="";
pattern=pattern.trim$();
if (pattern.equals$O(this.userPattern)) return;
this.userPattern=pattern;
this.currentPattern=null;
if (this.userPattern.equals$O("")) {
this.fixedPattern=this.fixedPatternByDefault;
this.setFormatFor$D(value);
} else {
this.fixedPattern=true;
this.applyPattern$S(this.userPattern);
}});

Clazz.newMeth(C$, 'setParseIntegerOnly$',  function () {
this.isIntegerOnly=true;
this.applyPattern$S("0");
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
