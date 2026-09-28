(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,'org.opensourcephysics.media.core.MediaRes','java.awt.event.WindowAdapter','javax.swing.JLabel','javax.swing.BorderFactory','org.opensourcephysics.media.core.IntegerField','javax.swing.JSlider','org.opensourcephysics.media.core.DecimalField','javax.swing.JTextField','java.awt.GridBagLayout','javax.swing.JPanel','java.awt.GridBagConstraints','java.awt.Insets','java.awt.BorderLayout','org.opensourcephysics.media.core.BrightnessFilter','org.opensourcephysics.controls.XMLControlElement',['org.opensourcephysics.media.core.BrightnessFilter','.Inspector'],['org.opensourcephysics.media.core.BrightnessFilter','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BrightnessFilter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.Filter');
C$.$classes$=[['Inspector',2],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultBrightness=0;
this.defaultContrast=50;
this.brightness=this.defaultBrightness;
this.contrast=this.defaultContrast;
},1);

C$.$fields$=[['D',['defaultContrast','contrast','previousContrast','slope','offset1','offset2'],'I',['defaultBrightness','brightness','previousBrightness'],'O',['inspector','org.opensourcephysics.media.core.BrightnessFilter.Inspector','brightnessLabel','javax.swing.JLabel','brightnessField','org.opensourcephysics.media.core.IntegerField','brightnessSlider','javax.swing.JSlider','contrastLabel','javax.swing.JLabel','contrastField','org.opensourcephysics.media.core.NumberField','contrastSlider','javax.swing.JSlider']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setBrightness$I(this.defaultBrightness);
this.setContrast$D(this.defaultContrast);
this.hasInspector=true;
}, 1);

Clazz.newMeth(C$, 'setContrast$D',  function (contrast) {
if (this.previousState == null ) {
this.previousState=Clazz.new_($I$(15,1).c$$O,[this]).toXML$();
this.previousBrightness=this.brightness;
this.previousContrast=contrast;
}this.changed=this.changed || this.contrast != contrast  ;
var prev=Double.valueOf$D(this.contrast);
this.contrast=contrast;
p$1.updateFactors.apply(this, []);
this.firePropertyChange$S$O$O("contrast", prev, Double.valueOf$D(contrast));
});

Clazz.newMeth(C$, 'getContrast$',  function () {
return this.contrast;
});

Clazz.newMeth(C$, 'setBrightness$I',  function (brightness) {
if (this.previousState == null ) {
this.previousState=Clazz.new_($I$(15,1).c$$O,[this]).toXML$();
this.previousBrightness=this.brightness;
this.previousContrast=this.contrast;
}this.changed=this.changed || this.brightness != brightness ;
var prev=Integer.valueOf$I(this.brightness);
this.brightness=brightness;
p$1.updateFactors.apply(this, []);
this.firePropertyChange$S$O$O("brightness", prev, Integer.valueOf$I(brightness));
});

Clazz.newMeth(C$, 'getBrightness$',  function () {
return this.brightness;
});

Clazz.newMeth(C$, 'isChanged$',  function () {
if (!this.changed) return false;
return this.previousBrightness != this.brightness || this.previousContrast != this.contrast  ;
});

Clazz.newMeth(C$, 'newInspector$',  function () {
return this.inspector=Clazz.new_($I$(16,1),[this, null]);
});

Clazz.newMeth(C$, 'initInspector$',  function () {
this.inspector.initialize$();
return this.inspector;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.setBrightness$I(this.defaultBrightness);
this.setContrast$D(this.defaultContrast);
if (this.inspector != null ) {
this.inspector.updateDisplay$();
}});

Clazz.newMeth(C$, 'refresh$',  function () {
if (this.inspector == null  || !this.haveGUI ) return;
C$.superclazz.prototype.refresh$.apply(this, []);
this.brightnessLabel.setText$S($I$(1).getString$S("Filter.Brightness.Label.Brightness"));
this.brightnessSlider.setToolTipText$S($I$(1).getString$S("Filter.Brightness.ToolTip.Brightness"));
this.contrastLabel.setText$S($I$(1).getString$S("Filter.Brightness.Label.Contrast"));
this.contrastSlider.setToolTipText$S($I$(1).getString$S("Filter.Brightness.ToolTip.Contrast"));
var enabled=this.isEnabled$();
this.brightnessLabel.setEnabled$Z(enabled);
this.brightnessSlider.setEnabled$Z(enabled);
this.brightnessField.setEnabled$Z(enabled);
this.contrastLabel.setEnabled$Z(enabled);
this.contrastSlider.setEnabled$Z(enabled);
this.contrastField.setEnabled$Z(enabled);
this.clearButton.setText$S($I$(1).getString$S("Dialog.Button.Reset"));
this.inspector.setTitle$S($I$(1).getString$S("Filter.Brightness.Title"));
this.inspector.updateDisplay$();
this.inspector.pack$();
});

Clazz.newMeth(C$, 'dispose$',  function () {
C$.superclazz.prototype.dispose$.apply(this, []);
this.inspector=null;
});

Clazz.newMeth(C$, 'initializeSubclass$',  function () {
});

Clazz.newMeth(C$, 'setOutputPixels$',  function () {
this.getPixelsIn$();
this.getPixelsOut$();
var pixel;
var r;
var g;
var b;
for (var i=0; i < this.nPixelsIn; i++) {
pixel=this.pixelsIn[i];
r=(pixel >> 16) & 255;
r=Math.max(((this.slope * (r + this.offset1) + this.offset2)|0), 0);
r=Math.min(r, 255);
g=(pixel >> 8) & 255;
g=Math.max(((this.slope * (g + this.offset1) + this.offset2)|0), 0);
g=Math.min(g, 255);
b=(pixel) & 255;
b=Math.max(((this.slope * (b + this.offset1) + this.offset2)|0), 0);
b=Math.min(b, 255);
this.pixelsOut[i]=(r << 16) | (g << 8) | b ;
}
});

Clazz.newMeth(C$, 'updateFactors',  function () {
var theta=3.141592653589793 * this.contrast / 200;
var sin=Math.sin(theta);
this.offset1=sin * sin * this.brightness  - 127;
var cos=Math.cos(theta);
this.offset2=127 + cos * cos * this.brightness ;
this.slope=sin / cos;
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(17,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.BrightnessFilter, "Inspector", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.media.core.Filter','.InspectorDlg']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["Filter.Brightness.Title"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
this.setTitle$S($I$(1).getString$S("Filter.Brightness.Title"));
this.addWindowFocusListener$java_awt_event_WindowFocusListener(((P$.BrightnessFilter$Inspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "BrightnessFilter$Inspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowLostFocus$java_awt_event_WindowEvent',  function (e) {
if (this.b$['org.opensourcephysics.media.core.BrightnessFilter'].isChanged$.apply(this.b$['org.opensourcephysics.media.core.BrightnessFilter'], []) && this.b$['org.opensourcephysics.media.core.BrightnessFilter'].previousState != null  ) {
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].changed=false;
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["filterChanged", this.b$['org.opensourcephysics.media.core.BrightnessFilter'].previousState, this.b$['org.opensourcephysics.media.core.BrightnessFilter']]);
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].previousState=null;
}});
})()
), Clazz.new_($I$(2,1),[this, null],P$.BrightnessFilter$Inspector$1)));
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessLabel=Clazz.new_($I$(3,1));
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessLabel.setBorder$javax_swing_border_Border($I$(4).createEmptyBorder$I$I$I$I(0, 4, 0, 0));
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessField=Clazz.new_($I$(5,1).c$$I,[3]);
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessField.setMaxValue$D(128);
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessField.setMinValue$D(-128);
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessField.addActionListener$java_awt_event_ActionListener(((P$.BrightnessFilter$Inspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "BrightnessFilter$Inspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].setBrightness$I.apply(this.b$['org.opensourcephysics.media.core.BrightnessFilter'], [this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessField.getIntValue$()]);
this.b$['org.opensourcephysics.media.core.BrightnessFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.BrightnessFilter.Inspector'], []);
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessField.selectAll$();
});
})()
), Clazz.new_(P$.BrightnessFilter$Inspector$2.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessField.addFocusListener$java_awt_event_FocusListener(((P$.BrightnessFilter$Inspector$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "BrightnessFilter$Inspector$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessField.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].setBrightness$I.apply(this.b$['org.opensourcephysics.media.core.BrightnessFilter'], [this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessField.getIntValue$()]);
this.b$['org.opensourcephysics.media.core.BrightnessFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.BrightnessFilter.Inspector'], []);
});
})()
), Clazz.new_(P$.BrightnessFilter$Inspector$3.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessSlider=Clazz.new_($I$(6,1).c$$I$I$I,[0, 0, 0]);
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessSlider.setMaximum$I(128);
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessSlider.setMinimum$I(-128);
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessSlider.setBorder$javax_swing_border_Border($I$(4).createEmptyBorder$I$I$I$I(0, 2, 0, 2));
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.BrightnessFilter$Inspector$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "BrightnessFilter$Inspector$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var i=this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessSlider.getValue$();
if (i != this.b$['org.opensourcephysics.media.core.BrightnessFilter'].getBrightness$.apply(this.b$['org.opensourcephysics.media.core.BrightnessFilter'], [])) {
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].setBrightness$I.apply(this.b$['org.opensourcephysics.media.core.BrightnessFilter'], [i]);
this.b$['org.opensourcephysics.media.core.BrightnessFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.BrightnessFilter.Inspector'], []);
}});
})()
), Clazz.new_(P$.BrightnessFilter$Inspector$4.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].contrastLabel=Clazz.new_($I$(3,1));
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].contrastField=Clazz.new_($I$(7,1).c$$I$I,[4, 1]);
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].contrastField.setMaxValue$D(100);
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].contrastField.setMinValue$D(0);
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].contrastField.addActionListener$java_awt_event_ActionListener(((P$.BrightnessFilter$Inspector$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "BrightnessFilter$Inspector$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].setContrast$D.apply(this.b$['org.opensourcephysics.media.core.BrightnessFilter'], [this.b$['org.opensourcephysics.media.core.BrightnessFilter'].contrastField.getValue$()]);
this.b$['org.opensourcephysics.media.core.BrightnessFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.BrightnessFilter.Inspector'], []);
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].contrastField.selectAll$();
});
})()
), Clazz.new_(P$.BrightnessFilter$Inspector$5.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].contrastField.addFocusListener$java_awt_event_FocusListener(((P$.BrightnessFilter$Inspector$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "BrightnessFilter$Inspector$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].contrastField.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].setContrast$D.apply(this.b$['org.opensourcephysics.media.core.BrightnessFilter'], [this.b$['org.opensourcephysics.media.core.BrightnessFilter'].contrastField.getValue$()]);
this.b$['org.opensourcephysics.media.core.BrightnessFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.BrightnessFilter.Inspector'], []);
});
})()
), Clazz.new_(P$.BrightnessFilter$Inspector$6.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].contrastSlider=Clazz.new_($I$(6,1).c$$I$I$I,[0, 0, 0]);
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].contrastSlider.setMaximum$I(100);
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].contrastSlider.setBorder$javax_swing_border_Border($I$(4).createEmptyBorder$I$I$I$I(0, 2, 0, 2));
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].contrastSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.BrightnessFilter$Inspector$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "BrightnessFilter$Inspector$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var i=this.b$['org.opensourcephysics.media.core.BrightnessFilter'].contrastSlider.getValue$();
if (i != (this.b$['org.opensourcephysics.media.core.BrightnessFilter'].getContrast$.apply(this.b$['org.opensourcephysics.media.core.BrightnessFilter'], [])|0)) {
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].setContrast$D.apply(this.b$['org.opensourcephysics.media.core.BrightnessFilter'], [i]);
this.b$['org.opensourcephysics.media.core.BrightnessFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.BrightnessFilter.Inspector'], []);
}});
})()
), Clazz.new_(P$.BrightnessFilter$Inspector$7.$init$,[this, null])));
var labels=Clazz.array($I$(3), -1, [this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessLabel, this.b$['org.opensourcephysics.media.core.BrightnessFilter'].contrastLabel]);
var fields=Clazz.array($I$(8), -1, [this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessField, this.b$['org.opensourcephysics.media.core.BrightnessFilter'].contrastField]);
var sliders=Clazz.array($I$(6), -1, [this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessSlider, this.b$['org.opensourcephysics.media.core.BrightnessFilter'].contrastSlider]);
var gridbag=Clazz.new_($I$(9,1));
var panel=Clazz.new_($I$(10,1).c$$java_awt_LayoutManager,[gridbag]);
var c=Clazz.new_($I$(11,1));
c.anchor=13;
var i=0;
for (; i < labels.length; i++) {
c.gridy=i;
c.fill=0;
c.weightx=0.0;
c.gridx=0;
c.insets=Clazz.new_($I$(12,1).c$$I$I$I$I,[5, 5, 0, 2]);
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(labels[i], c);
panel.add$java_awt_Component(labels[i]);
c.fill=2;
c.gridx=1;
c.insets=Clazz.new_($I$(12,1).c$$I$I$I$I,[5, 0, 0, 0]);
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(fields[i], c);
panel.add$java_awt_Component(fields[i]);
c.gridx=2;
c.insets=Clazz.new_($I$(12,1).c$$I$I$I$I,[5, 0, 0, 0]);
c.weightx=1.0;
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(sliders[i], c);
panel.add$java_awt_Component(sliders[i]);
}
var buttonbar=Clazz.new_($I$(10,1));
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.BrightnessFilter'].ableButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.BrightnessFilter'].clearButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.BrightnessFilter'].closeButton);
var contentPane=Clazz.new_([Clazz.new_($I$(13,1))],$I$(10,1).c$$java_awt_LayoutManager);
contentPane.add$java_awt_Component$O(panel, "North");
this.setContentPane$java_awt_Container(contentPane);
contentPane.add$java_awt_Component$O(buttonbar, "South");
});

Clazz.newMeth(C$, 'initialize$',  function () {
this.updateDisplay$();
});

Clazz.newMeth(C$, 'updateDisplay$',  function () {
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessField.setIntValue$I(this.b$['org.opensourcephysics.media.core.BrightnessFilter'].getBrightness$.apply(this.b$['org.opensourcephysics.media.core.BrightnessFilter'], []));
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].contrastField.setValue$D(this.b$['org.opensourcephysics.media.core.BrightnessFilter'].getContrast$.apply(this.b$['org.opensourcephysics.media.core.BrightnessFilter'], []));
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].brightnessSlider.setValue$I(this.b$['org.opensourcephysics.media.core.BrightnessFilter'].getBrightness$.apply(this.b$['org.opensourcephysics.media.core.BrightnessFilter'], []));
this.b$['org.opensourcephysics.media.core.BrightnessFilter'].contrastSlider.setValue$I((this.b$['org.opensourcephysics.media.core.BrightnessFilter'].getContrast$.apply(this.b$['org.opensourcephysics.media.core.BrightnessFilter'], [])|0));
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BrightnessFilter, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
control.setValue$S$I("brightness", filter.getBrightness$());
control.setValue$S$D("contrast", filter.getContrast$());
filter.addLocation$org_opensourcephysics_controls_XMLControl(control);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(14,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
if (control.getPropertyNamesRaw$().contains$O("brightness")) {
filter.setBrightness$I(control.getInt$S("brightness"));
}if (control.getPropertyNamesRaw$().contains$O("contrast")) {
filter.setContrast$D(control.getDouble$S("contrast"));
}filter.inspectorX=control.getInt$S("inspector_x");
filter.inspectorY=control.getInt$S("inspector_y");
filter.previousState=null;
filter.changed=false;
if (filter.inspector != null ) {
filter.inspector.updateDisplay$();
}return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
