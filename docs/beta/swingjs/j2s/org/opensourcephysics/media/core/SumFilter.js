(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,'javax.swing.JLabel','org.opensourcephysics.media.core.DecimalField','javax.swing.JSlider','javax.swing.JCheckBox','org.opensourcephysics.media.core.IntegerField','javax.swing.JPanel','java.awt.BorderLayout','java.awt.GridBagLayout','java.awt.GridBagConstraints','java.awt.Insets','java.awt.FlowLayout','org.opensourcephysics.media.core.SumFilter',['org.opensourcephysics.media.core.SumFilter','.Inspector'],'org.opensourcephysics.media.core.MediaRes',['org.opensourcephysics.media.core.SumFilter','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SumFilter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.Filter');
C$.$classes$=[['Inspector',2],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.imageCount=1;
this.brightness=1;
this.skipSum=true;
},1);

C$.$fields$=[['Z',['mean','skipSum'],'D',['brightness'],'I',['imageCount'],'O',['rsums','int[]','+gsums','+bsums','inspector','org.opensourcephysics.media.core.SumFilter.Inspector','percentLabel','javax.swing.JLabel','percentField','org.opensourcephysics.media.core.DecimalField','percentSlider','javax.swing.JSlider','showMeanCheckBox','javax.swing.JCheckBox','frameCountLabel','javax.swing.JLabel','frameCountField','org.opensourcephysics.media.core.IntegerField']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.hasInspector=true;
}, 1);

Clazz.newMeth(C$, 'setBrightness$D',  function (fraction) {
if (fraction != this.brightness ) {
this.brightness=Math.abs(fraction);
this.firePropertyChange$S$O$O("brightness", null, null);
}});

Clazz.newMeth(C$, 'setMean$Z',  function (mean) {
if (this.mean != mean ) {
this.mean=mean;
this.refresh$();
this.firePropertyChange$S$O$O("mean", null, null);
}});

Clazz.newMeth(C$, 'setEnabled$Z',  function (enabled) {
C$.superclazz.prototype.setEnabled$Z.apply(this, [enabled]);
this.refresh$();
});

Clazz.newMeth(C$, 'newInspector$',  function () {
return this.inspector=Clazz.new_($I$(13,1),[this, null]);
});

Clazz.newMeth(C$, 'initInspector$',  function () {
this.inspector.initialize$();
return this.inspector;
});

Clazz.newMeth(C$, 'clear$',  function () {
if (this.source != null ) {
this.initializeSubclass$();
this.brightness=1;
this.skipSum=true;
this.firePropertyChange$S$O$O("reset", null, null);
}});

Clazz.newMeth(C$, 'refresh$',  function () {
if (this.inspector == null  || !this.haveGUI ) return;
C$.superclazz.prototype.refresh$.apply(this, []);
this.percentLabel.setText$S($I$(14).getString$S("Filter.Sum.Label.Percent"));
this.percentField.setToolTipText$S($I$(14).getString$S("Filter.Sum.ToolTip.Percent"));
this.percentSlider.setToolTipText$S($I$(14).getString$S("Filter.Sum.ToolTip.Percent"));
this.showMeanCheckBox.setText$S($I$(14).getString$S("Filter.Sum.CheckBox.ShowMean"));
this.frameCountLabel.setText$S($I$(14).getString$S("Filter.Sum.Label.FrameCount"));
var enabled=this.isEnabled$();
this.showMeanCheckBox.setEnabled$Z(enabled);
this.frameCountLabel.setEnabled$Z(enabled);
this.frameCountField.setEnabled$Z(enabled);
this.percentLabel.setEnabled$Z(enabled && !this.mean );
this.percentField.setEnabled$Z(enabled && !this.mean );
this.percentSlider.setEnabled$Z(enabled && !this.mean );
this.frameCountField.setIntValue$I(this.imageCount);
if (this.mean) {
this.percentField.setValue$D(100.0 / this.imageCount);
this.percentSlider.setValue$I(Math.round(100.0 / this.imageCount));
} else {
this.percentField.setValue$D(this.brightness * 100);
this.percentSlider.setValue$I(Math.round(this.brightness * 100));
}this.inspector.setTitle$S($I$(14).getString$S("Filter.Sum.Title"));
this.inspector.pack$();
});

Clazz.newMeth(C$, 'addNextImage$',  function () {
this.skipSum=false;
});

Clazz.newMeth(C$, 'initializeSubclass$',  function () {
this.rsums=Clazz.array(Integer.TYPE, [this.nPixelsIn]);
this.gsums=Clazz.array(Integer.TYPE, [this.nPixelsIn]);
this.bsums=Clazz.array(Integer.TYPE, [this.nPixelsIn]);
this.getPixelsIn$();
this.getPixelsOut$();
System.arraycopy$O$I$O$I$I(this.pixelsIn, 0, this.pixelsOut, 0, this.nPixelsIn);
this.imageCount=0;
p$1.addPixels.apply(this, []);
});

Clazz.newMeth(C$, 'addPixels',  function () {
++this.imageCount;
this.getPixelsIn$();
for (var i=0; i < this.nPixelsIn; i++) {
var pixel=this.pixelsIn[i];
this.rsums[i]+=(pixel >> 16) & 255;
this.gsums[i]+=(pixel >> 8) & 255;
this.bsums[i]+=(pixel) & 255;
}
if ((this.inspector != null ) && this.inspector.isVisible$() ) {
this.refresh$();
}}, p$1);

Clazz.newMeth(C$, 'setOutputPixels$',  function () {
if (!this.skipSum) {
p$1.addPixels.apply(this, []);
this.skipSum=true;
}this.getPixelsOut$();
var f=(this.mean ? 1.0 / this.imageCount : this.brightness);
for (var i=0; i < this.nPixelsIn; i++) {
this.pixelsOut[i]=(((Math.min(this.rsums[i] * f, 255)|0)) << 16) | (((Math.min(this.gsums[i] * f, 255)|0)) << 8) | ((Math.min(this.bsums[i] * f, 255)|0)) ;
}
if (this.mean && (this.inspector != null ) ) {
this.refresh$();
}});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(15,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.SumFilter, "Inspector", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.media.core.Filter','.InspectorDlg']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["Filter.Sum.Title"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
this.b$['org.opensourcephysics.media.core.SumFilter'].percentLabel=Clazz.new_($I$(1,1));
this.b$['org.opensourcephysics.media.core.SumFilter'].percentLabel.setHorizontalAlignment$I(11);
this.b$['org.opensourcephysics.media.core.SumFilter'].percentField=Clazz.new_($I$(2,1).c$$I$I,[3, 1]);
this.b$['org.opensourcephysics.media.core.SumFilter'].percentField.setMaxValue$D(100);
this.b$['org.opensourcephysics.media.core.SumFilter'].percentField.setMinValue$D(0);
this.b$['org.opensourcephysics.media.core.SumFilter'].percentField.addActionListener$java_awt_event_ActionListener(((P$.SumFilter$Inspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SumFilter$Inspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.SumFilter'].setBrightness$D.apply(this.b$['org.opensourcephysics.media.core.SumFilter'], [this.b$['org.opensourcephysics.media.core.SumFilter'].percentField.getValue$() / 100]);
this.b$['org.opensourcephysics.media.core.SumFilter'].refresh$.apply(this.b$['org.opensourcephysics.media.core.SumFilter'], []);
this.b$['org.opensourcephysics.media.core.SumFilter'].percentField.selectAll$();
});
})()
), Clazz.new_(P$.SumFilter$Inspector$1.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.SumFilter'].percentField.addFocusListener$java_awt_event_FocusListener(((P$.SumFilter$Inspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "SumFilter$Inspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.SumFilter'].percentField.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.SumFilter'].setBrightness$D.apply(this.b$['org.opensourcephysics.media.core.SumFilter'], [this.b$['org.opensourcephysics.media.core.SumFilter'].percentField.getValue$() / 100]);
this.b$['org.opensourcephysics.media.core.SumFilter'].refresh$.apply(this.b$['org.opensourcephysics.media.core.SumFilter'], []);
});
})()
), Clazz.new_(P$.SumFilter$Inspector$2.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.SumFilter'].percentSlider=Clazz.new_($I$(3,1).c$$I$I$I,[0, 100, 100]);
this.b$['org.opensourcephysics.media.core.SumFilter'].percentSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.SumFilter$Inspector$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "SumFilter$Inspector$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (this.b$['org.opensourcephysics.media.core.SumFilter'].percentSlider.isEnabled$() && (this.b$['org.opensourcephysics.media.core.SumFilter'].percentSlider.getValue$() != Math.round(this.b$['org.opensourcephysics.media.core.SumFilter'].brightness * 100)) ) {
this.b$['org.opensourcephysics.media.core.SumFilter'].setBrightness$D.apply(this.b$['org.opensourcephysics.media.core.SumFilter'], [this.b$['org.opensourcephysics.media.core.SumFilter'].percentSlider.getValue$() / 100.0]);
this.b$['org.opensourcephysics.media.core.SumFilter'].refresh$.apply(this.b$['org.opensourcephysics.media.core.SumFilter'], []);
}});
})()
), Clazz.new_(P$.SumFilter$Inspector$3.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.SumFilter'].showMeanCheckBox=Clazz.new_($I$(4,1));
this.b$['org.opensourcephysics.media.core.SumFilter'].showMeanCheckBox.addActionListener$java_awt_event_ActionListener(((P$.SumFilter$Inspector$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "SumFilter$Inspector$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.SumFilter'].setMean$Z.apply(this.b$['org.opensourcephysics.media.core.SumFilter'], [this.b$['org.opensourcephysics.media.core.SumFilter'].showMeanCheckBox.isSelected$()]);
this.b$['org.opensourcephysics.media.core.SumFilter'].refresh$.apply(this.b$['org.opensourcephysics.media.core.SumFilter'], []);
});
})()
), Clazz.new_(P$.SumFilter$Inspector$4.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.SumFilter'].frameCountLabel=Clazz.new_($I$(1,1));
this.b$['org.opensourcephysics.media.core.SumFilter'].frameCountLabel.setHorizontalAlignment$I(11);
this.b$['org.opensourcephysics.media.core.SumFilter'].frameCountField=Clazz.new_($I$(5,1).c$$I,[3]);
this.b$['org.opensourcephysics.media.core.SumFilter'].frameCountField.setEditable$Z(false);
var contentPane=Clazz.new_([Clazz.new_($I$(7,1))],$I$(6,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
var gridbag=Clazz.new_($I$(8,1));
var panel=Clazz.new_($I$(6,1).c$$java_awt_LayoutManager,[gridbag]);
contentPane.add$java_awt_Component$O(panel, "Center");
var c=Clazz.new_($I$(9,1));
c.anchor=17;
c.fill=0;
c.weightx=0.0;
c.gridx=0;
c.insets=Clazz.new_($I$(10,1).c$$I$I$I$I,[5, 5, 0, 2]);
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(this.b$['org.opensourcephysics.media.core.SumFilter'].percentLabel, c);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.SumFilter'].percentLabel);
c.anchor=13;
c.fill=2;
c.gridx=1;
c.insets=Clazz.new_($I$(10,1).c$$I$I$I$I,[5, 0, 0, 0]);
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(this.b$['org.opensourcephysics.media.core.SumFilter'].percentField, c);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.SumFilter'].percentField);
c.gridx=2;
c.weightx=1.0;
c.insets=Clazz.new_($I$(10,1).c$$I$I$I$I,[5, 0, 0, 5]);
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(this.b$['org.opensourcephysics.media.core.SumFilter'].percentSlider, c);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.SumFilter'].percentSlider);
c.weightx=0.0;
c.gridx=0;
c.gridy=1;
c.insets=Clazz.new_($I$(10,1).c$$I$I$I$I,[5, 5, 0, 2]);
c.anchor=17;
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(this.b$['org.opensourcephysics.media.core.SumFilter'].frameCountLabel, c);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.SumFilter'].frameCountLabel);
c.gridx=1;
c.insets=Clazz.new_($I$(10,1).c$$I$I$I$I,[5, 0, 0, 0]);
c.anchor=13;
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(this.b$['org.opensourcephysics.media.core.SumFilter'].frameCountField, c);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.SumFilter'].frameCountField);
c.gridx=2;
c.insets=Clazz.new_($I$(10,1).c$$I$I$I$I,[8, 0, 0, 0]);
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(this.b$['org.opensourcephysics.media.core.SumFilter'].showMeanCheckBox, c);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.SumFilter'].showMeanCheckBox);
var buttonbar=Clazz.new_([Clazz.new_($I$(11,1))],$I$(6,1).c$$java_awt_LayoutManager);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.SumFilter'].ableButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.SumFilter'].clearButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.SumFilter'].closeButton);
contentPane.add$java_awt_Component$O(buttonbar, "South");
});

Clazz.newMeth(C$, 'initialize$',  function () {
this.b$['org.opensourcephysics.media.core.SumFilter'].showMeanCheckBox.setSelected$Z(this.b$['org.opensourcephysics.media.core.SumFilter'].mean);
this.b$['org.opensourcephysics.media.core.SumFilter'].refresh$.apply(this.b$['org.opensourcephysics.media.core.SumFilter'], []);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SumFilter, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
filter.addLocation$org_opensourcephysics_controls_XMLControl(control);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(12,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
filter.inspectorX=control.getInt$S("inspector_x");
filter.inspectorY=control.getInt$S("inspector_y");
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
