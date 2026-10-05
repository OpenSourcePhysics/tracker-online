(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'javax.swing.JLabel','javax.swing.BorderFactory','org.opensourcephysics.media.core.DecimalField','javax.swing.JSlider','java.awt.GridBagLayout','javax.swing.JPanel','java.awt.GridBagConstraints','java.awt.Insets','java.awt.BorderLayout','org.opensourcephysics.media.core.GhostFilter',['org.opensourcephysics.media.core.GhostFilter','.Inspector'],'org.opensourcephysics.media.core.MediaRes',['org.opensourcephysics.media.core.GhostFilter','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GhostFilter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.Filter');
C$.$classes$=[['Inspector',4],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultFade=0.05;
this.prefix="Filter.Ghost";
},1);

C$.$fields$=[['D',['fade','defaultFade'],'S',['prefix'],'O',['inspector','org.opensourcephysics.media.core.GhostFilter.Inspector','fadeLabel','javax.swing.JLabel','fadeField','org.opensourcephysics.media.core.NumberField','fadeSlider','javax.swing.JSlider','values','int[]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setFade$D(this.defaultFade);
this.hasInspector=true;
}, 1);

Clazz.newMeth(C$, 'setFade$D',  function (fade) {
var prev=Double.valueOf$D(this.fade);
this.fade=Math.min(Math.abs(fade), 1);
this.firePropertyChange$S$O$O("fade", prev, Double.valueOf$D(fade));
});

Clazz.newMeth(C$, 'getFade$',  function () {
return this.fade;
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (enabled) {
if (this.isEnabled$() == enabled ) {
return;
}this.source=null;
C$.superclazz.prototype.setEnabled$Z.apply(this, [enabled]);
});

Clazz.newMeth(C$, 'newInspector$',  function () {
return this.inspector=Clazz.new_($I$(11,1),[this, null]);
});

Clazz.newMeth(C$, 'initInspector$',  function () {
this.inspector.initialize$();
return this.inspector;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.source=null;
this.firePropertyChange$S$O$O("image", null, null);
});

Clazz.newMeth(C$, 'refresh$',  function () {
if (this.inspector == null  || !this.haveGUI ) return;
C$.superclazz.prototype.refresh$.apply(this, []);
this.fadeLabel.setText$S($I$(12).getString$S(this.prefix + ".Label.Fade"));
this.fadeSlider.setToolTipText$S($I$(12).getString$S(this.prefix + ".ToolTip.Fade"));
var enabled=this.isEnabled$();
this.fadeLabel.setEnabled$Z(enabled);
this.fadeSlider.setEnabled$Z(enabled);
this.fadeField.setEnabled$Z(enabled);
this.inspector.setTitle$S($I$(12).getString$S(this.prefix + ".Title"));
this.inspector.pack$();
});

Clazz.newMeth(C$, 'initializeSubclass$',  function () {
this.getPixelsIn$();
this.values=Clazz.array(Integer.TYPE, [this.nPixelsIn]);
for (var i=0; i < this.nPixelsIn; i++) {
var pixel=this.pixelsIn[i];
this.values[i]=((((pixel >> 16) & 255) + ((pixel >> 8) & 255) + (pixel & 255) )/3|0);
}
});

Clazz.newMeth(C$, 'setOutputPixels$',  function () {
this.getPixelsIn$();
this.getPixelsOut$();
for (var i=0; i < this.nPixelsIn; i++) {
var pixel=this.pixelsIn[i];
var v=((((pixel >> 16) & 255) + ((pixel >> 8) & 255) + (pixel & 255) )/3|0);
var ghost=(((1 - this.fade) * this.values[i])|0);
if (ghost > v) {
this.pixelsOut[i]=(ghost << 16) | (ghost << 8) | ghost ;
this.values[i]=ghost;
} else {
this.pixelsOut[i]=pixel;
this.values[i]=v;
}}
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(13,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.GhostFilter, "Inspector", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.media.core.Filter','.InspectorDlg']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,[this.b$['org.opensourcephysics.media.core.GhostFilter'].prefix + ".Title"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeLabel=Clazz.new_($I$(1,1));
this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeLabel.setBorder$javax_swing_border_Border($I$(2).createEmptyBorder$I$I$I$I(0, 4, 0, 0));
this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeField=Clazz.new_($I$(3,1).c$$I$I,[4, 2]);
this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeField.setMaxValue$D(0.5);
this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeField.setMinValue$D(0);
this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeField.addActionListener$java_awt_event_ActionListener(((P$.GhostFilter$Inspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GhostFilter$Inspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.GhostFilter'].setFade$D.apply(this.b$['org.opensourcephysics.media.core.GhostFilter'], [this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeField.getValue$()]);
this.b$['org.opensourcephysics.media.core.GhostFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.GhostFilter.Inspector'], []);
this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeField.selectAll$();
});
})()
), Clazz.new_(P$.GhostFilter$Inspector$1.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeField.addFocusListener$java_awt_event_FocusListener(((P$.GhostFilter$Inspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "GhostFilter$Inspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeField.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.GhostFilter'].setFade$D.apply(this.b$['org.opensourcephysics.media.core.GhostFilter'], [this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeField.getValue$()]);
this.b$['org.opensourcephysics.media.core.GhostFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.GhostFilter.Inspector'], []);
});
})()
), Clazz.new_(P$.GhostFilter$Inspector$2.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeSlider=Clazz.new_($I$(4,1).c$$I$I$I,[0, 0, 0]);
this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeSlider.setMaximum$I(50);
this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeSlider.setMinimum$I(0);
this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeSlider.setBorder$javax_swing_border_Border($I$(2).createEmptyBorder$I$I$I$I(0, 2, 0, 2));
this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.GhostFilter$Inspector$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "GhostFilter$Inspector$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var i=this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeSlider.getValue$();
if (i != ((this.b$['org.opensourcephysics.media.core.GhostFilter'].getFade$.apply(this.b$['org.opensourcephysics.media.core.GhostFilter'], []) * 100)|0)) {
this.b$['org.opensourcephysics.media.core.GhostFilter'].setFade$D.apply(this.b$['org.opensourcephysics.media.core.GhostFilter'], [i / 100.0]);
this.b$['org.opensourcephysics.media.core.GhostFilter.Inspector'].updateDisplay$.apply(this.b$['org.opensourcephysics.media.core.GhostFilter.Inspector'], []);
}});
})()
), Clazz.new_(P$.GhostFilter$Inspector$3.$init$,[this, null])));
var gridbag=Clazz.new_($I$(5,1));
var panel=Clazz.new_($I$(6,1).c$$java_awt_LayoutManager,[gridbag]);
var c=Clazz.new_($I$(7,1));
c.anchor=13;
c.fill=0;
c.weightx=0.0;
c.gridx=0;
c.insets=Clazz.new_($I$(8,1).c$$I$I$I$I,[5, 5, 0, 2]);
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeLabel, c);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeLabel);
c.fill=2;
c.gridx=1;
c.insets=Clazz.new_($I$(8,1).c$$I$I$I$I,[5, 0, 0, 0]);
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeField, c);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeField);
c.gridx=2;
c.insets=Clazz.new_($I$(8,1).c$$I$I$I$I,[5, 0, 0, 0]);
c.weightx=1.0;
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeSlider, c);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeSlider);
var buttonbar=Clazz.new_($I$(6,1));
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.GhostFilter'].ableButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.GhostFilter'].clearButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.GhostFilter'].closeButton);
var contentPane=Clazz.new_([Clazz.new_($I$(9,1))],$I$(6,1).c$$java_awt_LayoutManager);
contentPane.add$java_awt_Component$O(panel, "North");
this.setContentPane$java_awt_Container(contentPane);
contentPane.add$java_awt_Component$O(buttonbar, "South");
});

Clazz.newMeth(C$, 'initialize$',  function () {
this.updateDisplay$();
this.b$['org.opensourcephysics.media.core.GhostFilter'].refresh$.apply(this.b$['org.opensourcephysics.media.core.GhostFilter'], []);
});

Clazz.newMeth(C$, 'updateDisplay$',  function () {
this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeField.setValue$D(this.b$['org.opensourcephysics.media.core.GhostFilter'].getFade$.apply(this.b$['org.opensourcephysics.media.core.GhostFilter'], []));
this.b$['org.opensourcephysics.media.core.GhostFilter'].fadeSlider.setValue$I(((100 * this.b$['org.opensourcephysics.media.core.GhostFilter'].getFade$.apply(this.b$['org.opensourcephysics.media.core.GhostFilter'], []))|0));
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GhostFilter, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
control.setValue$S$D("fade", filter.getFade$());
filter.addLocation$org_opensourcephysics_controls_XMLControl(control);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(10,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
if (control.getPropertyNamesRaw$().contains$O("fade")) {
filter.setFade$D(control.getDouble$S("fade"));
}filter.inspectorX=control.getInt$S("inspector_x");
filter.inspectorY=control.getInt$S("inspector_y");
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
