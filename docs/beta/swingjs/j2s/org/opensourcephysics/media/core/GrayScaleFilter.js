(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,'javax.swing.JLabel','org.opensourcephysics.media.core.DecimalField','javax.swing.AbstractAction','java.awt.GridBagLayout','javax.swing.JPanel','java.awt.GridBagConstraints','java.awt.Insets','javax.swing.JRadioButton','javax.swing.ButtonGroup','javax.swing.Box','java.awt.BorderLayout','java.awt.FlowLayout','org.opensourcephysics.media.core.GrayScaleFilter','org.opensourcephysics.media.core.NumberField',['org.opensourcephysics.media.core.GrayScaleFilter','.Inspector'],'javax.swing.BorderFactory','org.opensourcephysics.media.core.MediaRes',['org.opensourcephysics.media.core.GrayScaleFilter','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GrayScaleFilter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.Filter');
C$.$classes$=[['Inspector',2],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.colorLabels=Clazz.array($I$(1), [3]);
this.colorFields=Clazz.array($I$(14), [3]);
},1);

C$.$fields$=[['D',['redWt','greenWt','blueWt','rgbWt'],'O',['inspector','org.opensourcephysics.media.core.GrayScaleFilter.Inspector','vidButton','javax.swing.JRadioButton','+flatButton','+customButton','buttons','javax.swing.ButtonGroup','colorLabels','javax.swing.JLabel[]','colorFields','org.opensourcephysics.media.core.NumberField[]','typePanel','javax.swing.JComponent','+rgbPanel']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setWeights$D$D$D(0.3, 0.59, 0.11);
this.hasInspector=true;
}, 1);

Clazz.newMeth(C$, 'newInspector$',  function () {
return this.inspector=Clazz.new_($I$(15,1),[this, null]);
});

Clazz.newMeth(C$, 'initInspector$',  function () {
this.inspector.initialize$();
return this.inspector;
});

Clazz.newMeth(C$, 'setWeights$D$D$D',  function (r, g, b) {
this.redWt=r;
this.greenWt=g;
this.blueWt=b;
this.rgbWt=this.redWt + this.greenWt + this.blueWt ;
});

Clazz.newMeth(C$, 'refresh$',  function () {
if (this.inspector == null  || !this.haveGUI ) return;
C$.superclazz.prototype.refresh$.apply(this, []);
this.typePanel.setBorder$javax_swing_border_Border($I$(16,"createTitledBorder$S",[$I$(17).getString$S("Filter.GrayScale.Label.Type")]));
this.rgbPanel.setBorder$javax_swing_border_Border($I$(16,"createTitledBorder$S",[$I$(17).getString$S("Filter.GrayScale.Label.Weight")]));
this.vidButton.setText$S($I$(17).getString$S("Filter.GrayScale.Button.Video"));
this.flatButton.setText$S($I$(17).getString$S("Filter.GrayScale.Button.Flat"));
this.customButton.setText$S($I$(17).getString$S("Filter.GrayScale.Button.Custom"));
this.colorLabels[0].setText$S($I$(17).getString$S("Filter.GrayScale.Label.Red"));
this.colorLabels[1].setText$S($I$(17).getString$S("Filter.GrayScale.Label.Green"));
this.colorLabels[2].setText$S($I$(17).getString$S("Filter.GrayScale.Label.Blue"));
this.vidButton.setEnabled$Z(this.isEnabled$());
this.flatButton.setEnabled$Z(this.isEnabled$());
this.customButton.setEnabled$Z(this.isEnabled$());
for (var i=0; i < 3; i++) {
this.colorFields[i].setEditable$Z(this.buttons.isSelected$javax_swing_ButtonModel(this.customButton.getModel$()));
this.colorFields[i].setEnabled$Z(this.isEnabled$());
this.colorLabels[i].setEnabled$Z(this.isEnabled$());
}
this.inspector.setTitle$S($I$(17).getString$S("Filter.GrayScale.Title"));
this.inspector.pack$();
});

Clazz.newMeth(C$, 'initializeSubclass$',  function () {
});

Clazz.newMeth(C$, 'setOutputPixels$',  function () {
this.getPixelsIn$();
this.getPixelsOut$();
for (var i=0; i < this.nPixelsIn; i++) {
var pixel=this.pixelsIn[i];
var v=p$1.getGray$I$I$I.apply(this, [((pixel >> 16) & 255), ((pixel >> 8) & 255), (pixel & 255)]);
this.pixelsOut[i]=(v << 16) | (v << 8) | v ;
}
});

Clazz.newMeth(C$, 'getGray$I$I$I',  function (r, g, b) {
var gray=(this.redWt * r + this.greenWt * g + this.blueWt * b) / this.rgbWt;
return (gray|0);
}, p$1);

Clazz.newMeth(C$, 'setWeights$DA',  function (weights) {
this.redWt=weights[0];
this.greenWt=weights[1];
this.blueWt=weights[2];
this.rgbWt=this.redWt + this.greenWt + this.blueWt ;
}, p$1);

Clazz.newMeth(C$, 'getWeights',  function () {
return Clazz.array(Double.TYPE, -1, [this.redWt, this.greenWt, this.blueWt]);
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(18,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.GrayScaleFilter, "Inspector", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.media.core.Filter','.InspectorDlg']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["Filter.GrayScale.Title"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
for (var i=0; i < 3; i++) {
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].colorLabels[i]=Clazz.new_($I$(1,1));
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].colorFields[i]=Clazz.new_($I$(2,1).c$$I$I,[3, 2]);
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].colorFields[i].setMaxValue$D(1.0);
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].colorFields[i].setMinValue$D(0.0);
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].colorFields[i].addActionListener$java_awt_event_ActionListener(((P$.GrayScaleFilter$Inspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GrayScaleFilter$Inspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.GrayScaleFilter.Inspector'].readFields$org_opensourcephysics_media_core_NumberField.apply(this.b$['org.opensourcephysics.media.core.GrayScaleFilter.Inspector'], [e.getSource$()]);
});
})()
), Clazz.new_($I$(3,1),[this, null],P$.GrayScaleFilter$Inspector$1)));
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].colorFields[i].addFocusListener$java_awt_event_FocusListener(((P$.GrayScaleFilter$Inspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "GrayScaleFilter$Inspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
(e.getSource$()).selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.GrayScaleFilter.Inspector'].readFields$org_opensourcephysics_media_core_NumberField.apply(this.b$['org.opensourcephysics.media.core.GrayScaleFilter.Inspector'], [e.getSource$()]);
});
})()
), Clazz.new_(P$.GrayScaleFilter$Inspector$2.$init$,[this, null])));
}
var gridbag=Clazz.new_($I$(4,1));
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].rgbPanel=Clazz.new_($I$(5,1).c$$java_awt_LayoutManager,[gridbag]);
var c=Clazz.new_($I$(6,1));
c.anchor=13;
for (var i=0; i < 3; i++) {
c.gridy=i;
c.fill=0;
c.weightx=0.0;
c.gridx=0;
c.insets=Clazz.new_($I$(7,1).c$$I$I$I$I,[3, 20, 0, 3]);
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].colorLabels[i], c);
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].rgbPanel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].colorLabels[i]);
c.fill=2;
c.gridx=1;
c.insets=Clazz.new_($I$(7,1).c$$I$I$I$I,[3, 0, 0, 5]);
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].colorFields[i], c);
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].rgbPanel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].colorFields[i]);
}
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].vidButton=Clazz.new_($I$(8,1));
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].flatButton=Clazz.new_($I$(8,1));
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].customButton=Clazz.new_($I$(8,1));
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].buttons=Clazz.new_($I$(9,1));
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].buttons.add$javax_swing_AbstractButton(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].vidButton);
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].buttons.add$javax_swing_AbstractButton(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].flatButton);
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].buttons.add$javax_swing_AbstractButton(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].customButton);
var select=((P$.GrayScaleFilter$Inspector$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "GrayScaleFilter$Inspector$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].buttons.isSelected$javax_swing_ButtonModel(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].vidButton.getModel$())) {
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].setWeights$D$D$D.apply(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'], [0.3, 0.59, 0.11]);
} else if (this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].buttons.isSelected$javax_swing_ButtonModel(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].flatButton.getModel$())) {
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].setWeights$D$D$D.apply(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'], [0.3333333333333333, 0.3333333333333333, 0.3333333333333333]);
}this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].refresh$.apply(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'], []);
this.b$['org.opensourcephysics.media.core.GrayScaleFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.GrayScaleFilter.Inspector'], []);
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].firePropertyChange$S$O$O.apply(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'], ["weight", null, null]);
});
})()
), Clazz.new_(P$.GrayScaleFilter$Inspector$3.$init$,[this, null]));
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].vidButton.addActionListener$java_awt_event_ActionListener(select);
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].flatButton.addActionListener$java_awt_event_ActionListener(select);
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].customButton.addActionListener$java_awt_event_ActionListener(select);
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].typePanel=$I$(10).createVerticalBox$();
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].typePanel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].vidButton);
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].typePanel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].flatButton);
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].typePanel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].customButton);
var contentPane=Clazz.new_([Clazz.new_($I$(11,1))],$I$(5,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
contentPane.add$java_awt_Component$O(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].typePanel, "West");
contentPane.add$java_awt_Component$O(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].rgbPanel, "East");
var buttonbar=Clazz.new_([Clazz.new_($I$(12,1))],$I$(5,1).c$$java_awt_LayoutManager);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].ableButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].closeButton);
contentPane.add$java_awt_Component$O(buttonbar, "South");
});

Clazz.newMeth(C$, 'readFields$org_opensourcephysics_media_core_NumberField',  function (source) {
var rgb=Clazz.array(Double.TYPE, [3]);
for (var i=0; i < 3; i++) {
rgb[i]=this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].colorFields[i].getValue$();
}
p$1.setWeights$DA.apply(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'], [rgb]);
this.updateDisplay$();
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].firePropertyChange$S$O$O.apply(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'], ["weight", null, null]);
source.selectAll$();
});

Clazz.newMeth(C$, 'initialize$',  function () {
if ((this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].redWt == 0.3 ) && (this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].greenWt == 0.59 ) && (this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].blueWt == 0.11 )  ) {
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].vidButton.setSelected$Z(true);
} else if ((this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].redWt == 0.3333333333333333 ) && (this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].greenWt == 0.3333333333333333 ) && (this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].blueWt == 0.3333333333333333 )  ) {
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].flatButton.setSelected$Z(true);
} else {
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].customButton.setSelected$Z(true);
}this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].refresh$.apply(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'], []);
this.updateDisplay$();
});

Clazz.newMeth(C$, 'updateDisplay$',  function () {
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].colorFields[0].setValue$D(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].redWt);
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].colorFields[1].setValue$D(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].greenWt);
this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].colorFields[2].setValue$D(this.b$['org.opensourcephysics.media.core.GrayScaleFilter'].blueWt);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GrayScaleFilter, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
control.setValue$S$O("weights", p$1.getWeights.apply(filter, []));
filter.addLocation$org_opensourcephysics_controls_XMLControl(control);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(13,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
if (control.getPropertyNamesRaw$().contains$O("weights")) {
p$1.setWeights$DA.apply(filter, [control.getObject$S("weights")]);
}filter.inspectorX=control.getInt$S("inspector_x");
filter.inspectorY=control.getInt$S("inspector_y");
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
