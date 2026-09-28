(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'javax.swing.JLabel','org.opensourcephysics.media.core.IntegerField','javax.swing.JPanel','java.awt.BorderLayout','java.awt.GridBagLayout','java.awt.GridBagConstraints','java.awt.Insets','java.awt.FlowLayout','org.opensourcephysics.media.core.ResizeFilter','java.awt.geom.AffineTransform',['org.opensourcephysics.media.core.ResizeFilter','.Inspector'],'org.opensourcephysics.media.core.MediaRes',['org.opensourcephysics.media.core.ResizeFilter','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ResizeFilter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.Filter');
C$.$classes$=[['Inspector',2],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['gOut','java.awt.Graphics2D','inspector','org.opensourcephysics.media.core.ResizeFilter.Inspector','widthLabel','javax.swing.JLabel','+heightLabel','+inputLabel','+outputLabel','widthInField','org.opensourcephysics.media.core.IntegerField','+heightInField','+widthOutField','+heightOutField']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.hasInspector=true;
this.autoScale720x480=true;
}, 1);

Clazz.newMeth(C$, 'setWidthFactor$D',  function (factor) {
this.source=null;
var prev=Double.valueOf$D(this.widthFactor);
this.widthFactor=Math.min(Math.abs(factor), 10);
this.widthFactor=Math.max(this.widthFactor, 0.01);
this.firePropertyChange$S$O$O("width", prev, Double.valueOf$D(this.widthFactor));
});

Clazz.newMeth(C$, 'setHeightFactor$D',  function (factor) {
this.source=null;
var prev=Double.valueOf$D(this.heightFactor);
this.heightFactor=Math.min(Math.abs(factor), 10);
this.heightFactor=Math.max(this.heightFactor, 0.01);
this.firePropertyChange$S$O$O("height", prev, Double.valueOf$D(this.heightFactor));
});

Clazz.newMeth(C$, 'getWidthFactor$',  function () {
return this.widthFactor;
});

Clazz.newMeth(C$, 'getHeightFactor$',  function () {
return this.heightFactor;
});

Clazz.newMeth(C$, 'initializeSubclass$',  function () {
});

Clazz.newMeth(C$, 'setOutputPixels$',  function () {
var transform=$I$(10).getScaleInstance$D$D(this.widthFactor, this.heightFactor);
this.gOut=this.output.createGraphics$();
this.gOut.setTransform$java_awt_geom_AffineTransform(transform);
this.gOut.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.input, 0, 0, null);
});

Clazz.newMeth(C$, 'newInspector$',  function () {
return this.inspector=Clazz.new_($I$(11,1),[this, null]);
});

Clazz.newMeth(C$, 'initInspector$',  function () {
return this.inspector;
});

Clazz.newMeth(C$, 'refresh$',  function () {
if (this.inspector == null  || !this.haveGUI ) return;
C$.superclazz.prototype.refresh$.apply(this, []);
this.widthLabel.setText$S($I$(12).getString$S("Filter.Resize.Label.Width"));
this.heightLabel.setText$S($I$(12).getString$S("Filter.Resize.Label.Height"));
this.inputLabel.setText$S($I$(12).getString$S("Filter.Resize.Label.Input"));
this.outputLabel.setText$S($I$(12).getString$S("Filter.Resize.Label.Output"));
var enabled=this.isEnabled$();
this.inputLabel.setEnabled$Z(enabled);
this.outputLabel.setEnabled$Z(enabled);
this.heightLabel.setEnabled$Z(enabled);
this.widthLabel.setEnabled$Z(enabled);
this.widthInField.setEnabled$Z(enabled);
this.heightInField.setEnabled$Z(enabled);
this.widthOutField.setEnabled$Z(enabled);
this.heightOutField.setEnabled$Z(enabled);
var wOut=((this.w * this.widthFactor)|0);
var hOut=((this.h * this.heightFactor)|0);
this.widthInField.setIntValue$I(this.w);
this.widthOutField.setIntValue$I(wOut);
this.heightInField.setIntValue$I(this.h);
this.heightOutField.setIntValue$I(hOut);
this.inspector.setTitle$S($I$(12).getString$S("Filter.Resize.Title"));
this.inspector.pack$();
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(13,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ResizeFilter, "Inspector", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.media.core.Filter','.InspectorDlg']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["Filter.Resize.Title"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
this.b$['org.opensourcephysics.media.core.ResizeFilter'].inputLabel=Clazz.new_($I$(1,1));
this.b$['org.opensourcephysics.media.core.ResizeFilter'].outputLabel=Clazz.new_($I$(1,1));
this.b$['org.opensourcephysics.media.core.ResizeFilter'].widthLabel=Clazz.new_($I$(1,1));
this.b$['org.opensourcephysics.media.core.ResizeFilter'].widthInField=Clazz.new_($I$(2,1).c$$I,[4]);
this.b$['org.opensourcephysics.media.core.ResizeFilter'].widthInField.setEditable$Z(false);
this.b$['org.opensourcephysics.media.core.ResizeFilter'].widthInField.applyPattern$S("0");
this.b$['org.opensourcephysics.media.core.ResizeFilter'].widthOutField=Clazz.new_($I$(2,1).c$$I,[4]);
this.b$['org.opensourcephysics.media.core.ResizeFilter'].widthOutField.applyPattern$S("0");
this.b$['org.opensourcephysics.media.core.ResizeFilter'].widthOutField.addActionListener$java_awt_event_ActionListener(((P$.ResizeFilter$Inspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ResizeFilter$Inspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.ResizeFilter'].setWidthFactor$D.apply(this.b$['org.opensourcephysics.media.core.ResizeFilter'], [1.0 * this.b$['org.opensourcephysics.media.core.ResizeFilter'].widthOutField.getIntValue$() / this.b$['org.opensourcephysics.media.core.ResizeFilter'].w]);
this.b$['org.opensourcephysics.media.core.ResizeFilter'].refresh$.apply(this.b$['org.opensourcephysics.media.core.ResizeFilter'], []);
this.b$['org.opensourcephysics.media.core.ResizeFilter'].widthOutField.selectAll$();
});
})()
), Clazz.new_(P$.ResizeFilter$Inspector$1.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.ResizeFilter'].widthOutField.addFocusListener$java_awt_event_FocusListener(((P$.ResizeFilter$Inspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ResizeFilter$Inspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.ResizeFilter'].widthOutField.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.ResizeFilter'].setWidthFactor$D.apply(this.b$['org.opensourcephysics.media.core.ResizeFilter'], [1.0 * this.b$['org.opensourcephysics.media.core.ResizeFilter'].widthOutField.getIntValue$() / this.b$['org.opensourcephysics.media.core.ResizeFilter'].w]);
this.b$['org.opensourcephysics.media.core.ResizeFilter'].refresh$.apply(this.b$['org.opensourcephysics.media.core.ResizeFilter'], []);
});
})()
), Clazz.new_(P$.ResizeFilter$Inspector$2.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.ResizeFilter'].heightLabel=Clazz.new_($I$(1,1));
this.b$['org.opensourcephysics.media.core.ResizeFilter'].heightInField=Clazz.new_($I$(2,1).c$$I,[4]);
this.b$['org.opensourcephysics.media.core.ResizeFilter'].heightInField.setEditable$Z(false);
this.b$['org.opensourcephysics.media.core.ResizeFilter'].heightInField.applyPattern$S("0");
this.b$['org.opensourcephysics.media.core.ResizeFilter'].heightOutField=Clazz.new_($I$(2,1).c$$I,[4]);
this.b$['org.opensourcephysics.media.core.ResizeFilter'].heightOutField.applyPattern$S("0");
this.b$['org.opensourcephysics.media.core.ResizeFilter'].heightOutField.addActionListener$java_awt_event_ActionListener(((P$.ResizeFilter$Inspector$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ResizeFilter$Inspector$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.ResizeFilter'].setHeightFactor$D.apply(this.b$['org.opensourcephysics.media.core.ResizeFilter'], [1.0 * this.b$['org.opensourcephysics.media.core.ResizeFilter'].heightOutField.getIntValue$() / this.b$['org.opensourcephysics.media.core.ResizeFilter'].h]);
this.b$['org.opensourcephysics.media.core.ResizeFilter'].refresh$.apply(this.b$['org.opensourcephysics.media.core.ResizeFilter'], []);
this.b$['org.opensourcephysics.media.core.ResizeFilter'].heightOutField.selectAll$();
});
})()
), Clazz.new_(P$.ResizeFilter$Inspector$3.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.ResizeFilter'].heightOutField.addFocusListener$java_awt_event_FocusListener(((P$.ResizeFilter$Inspector$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ResizeFilter$Inspector$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.ResizeFilter'].heightOutField.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.ResizeFilter'].setHeightFactor$D.apply(this.b$['org.opensourcephysics.media.core.ResizeFilter'], [1.0 * this.b$['org.opensourcephysics.media.core.ResizeFilter'].heightOutField.getIntValue$() / this.b$['org.opensourcephysics.media.core.ResizeFilter'].h]);
this.b$['org.opensourcephysics.media.core.ResizeFilter'].refresh$.apply(this.b$['org.opensourcephysics.media.core.ResizeFilter'], []);
});
})()
), Clazz.new_(P$.ResizeFilter$Inspector$4.$init$,[this, null])));
var contentPane=Clazz.new_([Clazz.new_($I$(4,1))],$I$(3,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
var gridbag=Clazz.new_($I$(5,1));
var panel=Clazz.new_($I$(3,1).c$$java_awt_LayoutManager,[gridbag]);
contentPane.add$java_awt_Component$O(panel, "Center");
var c=Clazz.new_($I$(6,1));
c.anchor=10;
c.fill=0;
c.weightx=0.5;
c.gridx=1;
c.gridy=0;
c.insets=Clazz.new_($I$(7,1).c$$I$I$I$I,[4, 2, 0, 2]);
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(this.b$['org.opensourcephysics.media.core.ResizeFilter'].widthLabel, c);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.ResizeFilter'].widthLabel);
c.gridx=2;
c.insets=Clazz.new_($I$(7,1).c$$I$I$I$I,[4, 0, 0, 8]);
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(this.b$['org.opensourcephysics.media.core.ResizeFilter'].heightLabel, c);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.ResizeFilter'].heightLabel);
c.gridx=0;
c.gridy=1;
c.anchor=13;
c.insets=Clazz.new_($I$(7,1).c$$I$I$I$I,[0, 4, 0, 2]);
c.weightx=0.2;
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(this.b$['org.opensourcephysics.media.core.ResizeFilter'].inputLabel, c);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.ResizeFilter'].inputLabel);
c.gridy=2;
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(this.b$['org.opensourcephysics.media.core.ResizeFilter'].outputLabel, c);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.ResizeFilter'].outputLabel);
c.gridy=1;
c.gridx=1;
c.anchor=10;
c.insets=Clazz.new_($I$(7,1).c$$I$I$I$I,[4, 2, 0, 2]);
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(this.b$['org.opensourcephysics.media.core.ResizeFilter'].widthInField, c);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.ResizeFilter'].widthInField);
c.gridx=2;
c.insets=Clazz.new_($I$(7,1).c$$I$I$I$I,[4, 0, 0, 8]);
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(this.b$['org.opensourcephysics.media.core.ResizeFilter'].heightInField, c);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.ResizeFilter'].heightInField);
c.gridy=2;
c.gridx=1;
c.insets=Clazz.new_($I$(7,1).c$$I$I$I$I,[4, 2, 0, 2]);
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(this.b$['org.opensourcephysics.media.core.ResizeFilter'].widthOutField, c);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.ResizeFilter'].widthOutField);
c.gridx=2;
c.insets=Clazz.new_($I$(7,1).c$$I$I$I$I,[4, 0, 0, 8]);
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(this.b$['org.opensourcephysics.media.core.ResizeFilter'].heightOutField, c);
panel.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.ResizeFilter'].heightOutField);
var buttonbar=Clazz.new_([Clazz.new_($I$(8,1))],$I$(3,1).c$$java_awt_LayoutManager);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.ResizeFilter'].ableButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.ResizeFilter'].closeButton);
contentPane.add$java_awt_Component$O(buttonbar, "South");
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ResizeFilter, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
control.setValue$S$D("width_factor", filter.widthFactor);
control.setValue$S$D("height_factor", filter.heightFactor);
if ((filter.getFrame$() != null ) && (filter.inspector != null ) && filter.inspector.isVisible$()  ) {
var x=filter.inspector.getLocation$().x - filter.frame.getLocation$().x;
var y=filter.inspector.getLocation$().y - filter.frame.getLocation$().y;
control.setValue$S$I("inspector_x", x);
control.setValue$S$I("inspector_y", y);
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(9,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
if (control.getPropertyNamesRaw$().contains$O("width_factor")) {
filter.setWidthFactor$D(control.getDouble$S("width_factor"));
}if (control.getPropertyNamesRaw$().contains$O("height_factor")) {
filter.setHeightFactor$D(control.getDouble$S("height_factor"));
}filter.inspectorX=control.getInt$S("inspector_x");
filter.inspectorY=control.getInt$S("inspector_y");
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
