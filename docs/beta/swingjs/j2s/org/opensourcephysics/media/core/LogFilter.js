(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,'javax.swing.JLabel','javax.swing.BorderFactory','org.opensourcephysics.media.core.IntegerField','javax.swing.JSlider','javax.swing.JCheckBox','javax.swing.JPanel','java.awt.BorderLayout','org.opensourcephysics.media.core.LogFilter',['org.opensourcephysics.media.core.LogFilter','.Inspector'],'org.opensourcephysics.media.core.MediaRes','java.awt.Color',['org.opensourcephysics.media.core.LogFilter','.Loader'],'java.util.Arrays']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LogFilter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.Filter');
C$.$classes$=[['Inspector',2],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.level=2147483647;
this.lookup=Clazz.array(Integer.TYPE, [256]);
},1);

C$.$fields$=[['Z',['grayscale'],'I',['level'],'O',['lookup','int[]','inspector','org.opensourcephysics.media.core.LogFilter.Inspector','levelLabel','javax.swing.JLabel','+highlightLabel','+shadowLabel','field','org.opensourcephysics.media.core.IntegerField','slider','javax.swing.JSlider','grayCheckbox','javax.swing.JCheckBox']]
,['O',['hsb','float[]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.hasInspector=true;
p$1.setLevel$I.apply(this, [0]);
}, 1);

Clazz.newMeth(C$, 'newInspector$',  function () {
return this.inspector=Clazz.new_($I$(9,1),[this, null]);
});

Clazz.newMeth(C$, 'initInspector$',  function () {
this.inspector.initialize$();
return this.inspector;
});

Clazz.newMeth(C$, 'refresh$',  function () {
if (this.inspector == null  || !this.haveGUI ) return;
C$.superclazz.prototype.refresh$.apply(this, []);
this.levelLabel.setText$S($I$(10).getString$S("Filter.Log.Label.Level"));
this.highlightLabel.setText$S($I$(10).getString$S("Filter.Log.Label.Highlights"));
this.shadowLabel.setText$S($I$(10).getString$S("Filter.Log.Label.Shadows"));
this.slider.setToolTipText$S($I$(10).getString$S("Filter.Log.ToolTip.Level"));
this.field.setToolTipText$S($I$(10).getString$S("Filter.Log.ToolTip.Level"));
this.grayCheckbox.setText$S($I$(10).getString$S("Filter.Log.Checkbox.Grayscale"));
this.field.setEnabled$Z(this.isEnabled$());
this.slider.setEnabled$Z(this.isEnabled$());
this.grayCheckbox.setEnabled$Z(this.isEnabled$());
this.grayCheckbox.setSelected$Z(this.grayscale);
this.inspector.setTitle$S($I$(10).getString$S("Filter.Log.Title"));
this.inspector.pack$();
});

Clazz.newMeth(C$, 'initializeSubclass$',  function () {
});

Clazz.newMeth(C$, 'setOutputPixels$',  function () {
this.getPixelsIn$();
this.getPixelsOut$();
for (var i=0; i < this.nPixelsIn; i++) {
var pixel=this.pixelsIn[i];
var r=(pixel >> 16) & 255;
var g=(pixel >> 8) & 255;
var b=pixel & 255;
if (this.grayscale) {
var gray=C$.getGray$I$I$I(r, g, b);
gray=this.lookup[gray];
this.pixelsOut[i]=(gray << 16) | (gray << 8) | gray ;
} else {
$I$(11).RGBtoHSB$I$I$I$FA(r, g, b, C$.hsb);
var gray=((C$.hsb[2] * 255)|0);
gray=this.lookup[gray];
this.pixelsOut[i]=$I$(11,"HSBtoRGB$F$F$F",[C$.hsb[0], C$.hsb[1], (gray / 255.0)]);
}}
});

Clazz.newMeth(C$, 'getGray$I$I$I',  function (r, g, b) {
return (((r + g + b )/3|0));
}, 1);

Clazz.newMeth(C$, 'setLevelOrig$I',  function (level) {
if (level != 0 && this.level == level ) return;
this.level=level;
var lim=Math.abs(0.01 * level);
var a=Math.min(1, 5 * lim);
lim=a * Math.exp(6 * lim);
var b=lim / Math.log10(lim + 1);
var c=level == 0 ? 1 : 255 / lim;
for (var i=0; i < 256; i++) {
this.lookup[i]=(level == 0 ? i : Long.$ival(Math.round$D(c * b * Math.log10(1 + i / c) )));
}
if (level < 0) {
var newLookup=Clazz.array(Integer.TYPE, [256]);
for (var i=0; i < 256; i++) {
newLookup[i]=255 - this.lookup[255 - i];
}
this.lookup=newLookup;
}this.firePropertyChange$S$O$O("level", null, null);
}, p$1);

Clazz.newMeth(C$, 'setLevel$I',  function (level) {
if (this.level == level) return;
this.level=level;
if (level == 0) {
for (var i=0; i < 256; i++) {
this.lookup[i]=i;
}
return;
}var lim=Math.abs(0.01 * level);
lim=Math.min(1, 5 * lim) * Math.exp(6 * lim);
var c=255 / lim;
var bc=255 / Math.log10(lim + 1);
if (level > 0) {
for (var i=0; i < 256; i++) {
this.lookup[i]=Long.$ival(Math.round$D(bc * Math.log10(1 + i / c)));
}
} else {
for (var i=0; i < 256; i++) {
this.lookup[i]=255 - (Long.$ival(Math.round$D(bc * Math.log10(1 + (255 - i) / c))));
}
}this.firePropertyChange$S$O$O("level", null, null);
}, p$1);

Clazz.newMeth(C$, 'getLevel',  function () {
return this.level;
}, p$1);

Clazz.newMeth(C$, 'setGrayscale$Z',  function (gray) {
if (this.grayscale == gray ) return;
this.grayscale=gray;
this.firePropertyChange$S$O$O("grayscale", null, null);
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(12,1));
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
var f;
var l;
for (var i=-100; i <= 100; i++) {
f=Clazz.new_(C$);
p$1.setLevelOrig$I.apply(f, [i]);
l=f.lookup;
f=Clazz.new_(C$);
p$1.setLevel$I.apply(f, [i]);
if (!$I$(13).equals$IA$IA(l, f.lookup)) {
System.out.println$S($I$(13).toString$IA(l));
System.out.println$S($I$(13).toString$IA(f.lookup));
throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["oops"]);
}}
System.out.println$S("OK");
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.hsb=Clazz.array(Float.TYPE, [3]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.LogFilter, "Inspector", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.media.core.Filter','.InspectorDlg']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["Filter.GrayScale.Title"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
this.b$['org.opensourcephysics.media.core.LogFilter'].levelLabel=Clazz.new_($I$(1,1));
this.b$['org.opensourcephysics.media.core.LogFilter'].levelLabel.setBorder$javax_swing_border_Border($I$(2).createEmptyBorder$I$I$I$I(0, 4, 0, 0));
this.b$['org.opensourcephysics.media.core.LogFilter'].highlightLabel=Clazz.new_($I$(1,1));
this.b$['org.opensourcephysics.media.core.LogFilter'].highlightLabel.setBorder$javax_swing_border_Border($I$(2).createEmptyBorder$I$I$I$I(0, 4, 0, 0));
this.b$['org.opensourcephysics.media.core.LogFilter'].shadowLabel=Clazz.new_($I$(1,1));
this.b$['org.opensourcephysics.media.core.LogFilter'].shadowLabel.setBorder$javax_swing_border_Border($I$(2).createEmptyBorder$I$I$I$I(0, 0, 0, 4));
this.b$['org.opensourcephysics.media.core.LogFilter'].field=Clazz.new_($I$(3,1).c$$I,[3]);
this.b$['org.opensourcephysics.media.core.LogFilter'].field.setMaxValue$D(100);
this.b$['org.opensourcephysics.media.core.LogFilter'].field.setMinValue$D(-100);
this.b$['org.opensourcephysics.media.core.LogFilter'].field.addActionListener$java_awt_event_ActionListener(((P$.LogFilter$Inspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LogFilter$Inspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.setLevel$I.apply(this.b$['org.opensourcephysics.media.core.LogFilter'], [this.b$['org.opensourcephysics.media.core.LogFilter'].field.getIntValue$()]);
this.b$['org.opensourcephysics.media.core.LogFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.LogFilter.Inspector'], []);
this.b$['org.opensourcephysics.media.core.LogFilter'].field.selectAll$();
});
})()
), Clazz.new_(P$.LogFilter$Inspector$1.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.LogFilter'].field.addFocusListener$java_awt_event_FocusListener(((P$.LogFilter$Inspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LogFilter$Inspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.LogFilter'].field.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
p$1.setLevel$I.apply(this.b$['org.opensourcephysics.media.core.LogFilter'], [this.b$['org.opensourcephysics.media.core.LogFilter'].field.getIntValue$()]);
this.b$['org.opensourcephysics.media.core.LogFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.LogFilter.Inspector'], []);
});
})()
), Clazz.new_(P$.LogFilter$Inspector$2.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.LogFilter'].slider=Clazz.new_($I$(4,1).c$$I$I$I,[0, 0, 0]);
this.b$['org.opensourcephysics.media.core.LogFilter'].slider.setMaximum$I(100);
this.b$['org.opensourcephysics.media.core.LogFilter'].slider.setMinimum$I(-100);
this.b$['org.opensourcephysics.media.core.LogFilter'].slider.setBorder$javax_swing_border_Border($I$(2).createEmptyBorder$I$I$I$I(0, 2, 0, 2));
this.b$['org.opensourcephysics.media.core.LogFilter'].slider.addChangeListener$javax_swing_event_ChangeListener(((P$.LogFilter$Inspector$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "LogFilter$Inspector$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var i=this.b$['org.opensourcephysics.media.core.LogFilter'].slider.getValue$();
if (i != p$1.getLevel.apply(this.b$['org.opensourcephysics.media.core.LogFilter'], [])) {
p$1.setLevel$I.apply(this.b$['org.opensourcephysics.media.core.LogFilter'], [i]);
this.b$['org.opensourcephysics.media.core.LogFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.LogFilter.Inspector'], []);
}});
})()
), Clazz.new_(P$.LogFilter$Inspector$3.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.LogFilter'].grayCheckbox=Clazz.new_($I$(5,1));
this.b$['org.opensourcephysics.media.core.LogFilter'].grayCheckbox.addActionListener$java_awt_event_ActionListener(((P$.LogFilter$Inspector$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "LogFilter$Inspector$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.setGrayscale$Z.apply(this.b$['org.opensourcephysics.media.core.LogFilter'], [this.b$['org.opensourcephysics.media.core.LogFilter'].grayCheckbox.isSelected$()]);
});
})()
), Clazz.new_(P$.LogFilter$Inspector$4.$init$,[this, null])));
var contentPane=Clazz.new_([Clazz.new_($I$(7,1))],$I$(6,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
var panel=Clazz.new_($I$(6,1));
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.LogFilter'].highlightLabel);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.LogFilter'].slider);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.LogFilter'].shadowLabel);
contentPane.add$java_awt_Component$O(panel, "North");
panel=Clazz.new_($I$(6,1));
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.LogFilter'].levelLabel);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.LogFilter'].field);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.LogFilter'].grayCheckbox);
contentPane.add$java_awt_Component$O(panel, "Center");
var buttonbar=Clazz.new_($I$(6,1));
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.LogFilter'].ableButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.LogFilter'].closeButton);
contentPane.add$java_awt_Component$O(buttonbar, "South");
});

Clazz.newMeth(C$, 'initialize$',  function () {
this.b$['org.opensourcephysics.media.core.LogFilter'].refresh$.apply(this.b$['org.opensourcephysics.media.core.LogFilter'], []);
this.updateDisplay$();
});

Clazz.newMeth(C$, 'updateDisplay$',  function () {
this.b$['org.opensourcephysics.media.core.LogFilter'].field.setIntValue$I(p$1.getLevel.apply(this.b$['org.opensourcephysics.media.core.LogFilter'], []));
this.b$['org.opensourcephysics.media.core.LogFilter'].slider.setValue$I(p$1.getLevel.apply(this.b$['org.opensourcephysics.media.core.LogFilter'], []));
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LogFilter, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
control.setValue$S$I("level", p$1.getLevel.apply(filter, []));
control.setValue$S$Z("grayscale", filter.grayscale);
filter.addLocation$org_opensourcephysics_controls_XMLControl(control);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(8,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
if (control.getPropertyNamesRaw$().contains$O("level")) {
p$1.setLevel$I.apply(filter, [control.getInt$S("level")]);
}filter.grayscale=control.getBoolean$S("grayscale");
filter.inspectorX=control.getInt$S("inspector_x");
filter.inspectorY=control.getInt$S("inspector_y");
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
