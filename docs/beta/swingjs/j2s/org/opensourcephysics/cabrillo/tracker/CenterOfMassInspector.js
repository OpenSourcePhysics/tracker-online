(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'javax.swing.JOptionPane','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.PointMass','javax.swing.JPanel','java.awt.BorderLayout','java.awt.GridLayout','javax.swing.BorderFactory','org.opensourcephysics.cabrillo.tracker.TrackerRes','javax.swing.JButton','java.awt.Color','javax.swing.Box','org.opensourcephysics.cabrillo.tracker.TFrame','javax.swing.JCheckBoxMenuItem']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CenterOfMassInspector", null, 'javax.swing.JDialog', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isVisible'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','cm','org.opensourcephysics.cabrillo.tracker.CenterOfMass','okButton','javax.swing.JButton','checkboxPanel','javax.swing.JPanel','listener','java.awt.event.ActionListener']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_CenterOfMass',  function (track) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[$I$(1).getFrameForComponent$java_awt_Component(track.tp), false]);C$.$init$.apply(this);
this.cm=track;
this.frame=track.tp.getTFrame$();
this.panelID=track.tp.getID$();
track.tp.addPropertyChangeListener$S$java_beans_PropertyChangeListener("track", this);
if (this.frame != null ) {
this.frame.addPropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
}this.listener=((P$.CenterOfMassInspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CenterOfMassInspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.updateCM.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CenterOfMassInspector'], []);
});
})()
), Clazz.new_(P$.CenterOfMassInspector$1.$init$,[this, null]));
this.setResizable$Z(false);
p$1.createGUI.apply(this, []);
this.initialize$();
this.pack$();
}, 1);

Clazz.newMeth(C$, 'initialize$',  function () {
this.updateDisplay$();
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "tab":
if (e.getNewValue$() != null  && !this.frame.isRemovingAll$()  && this.panelID != null   && (e.getNewValue$()).getID$() === this.panelID  ) {
this.setVisible$Z(this.isVisible);
} else {
var vis=this.isVisible;
this.setVisible$Z(false);
this.isVisible=vis;
}break;
case "track":
default:
this.updateDisplay$();
break;
}
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
if (vis) {
$I$(2,"setFonts$O$I",[this, $I$(2).getLevel$()]);
this.pack$();
}C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
this.isVisible=vis;
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.checkboxPanel.removeAll$();
if (this.panelID != null ) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
trackerPanel.removePropertyChangeListener$S$java_beans_PropertyChangeListener("track", this);
var masses=trackerPanel.getDrawablesTemp$Class(Clazz.getClass($I$(3)));
for (var i=0, n=masses.size$(); i < n; i++) {
masses.get$I(i).removeListenerNCF$java_beans_PropertyChangeListener(this);
}
masses.clear$();
if (this.frame != null ) {
this.frame.removePropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
}trackerPanel=null;
}C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'createGUI',  function () {
var inspectorPanel=Clazz.new_([Clazz.new_($I$(5,1))],$I$(4,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(inspectorPanel);
this.checkboxPanel=Clazz.new_([Clazz.new_($I$(6,1).c$$I$I,[0, 1])],$I$(4,1).c$$java_awt_LayoutManager);
var etched=$I$(7).createEtchedBorder$();
var title=$I$(7,"createTitledBorder$javax_swing_border_Border$S",[etched, $I$(8).getString$S("CenterOfMassInspector.Border.Title")]);
this.checkboxPanel.setBorder$javax_swing_border_Border(title);
inspectorPanel.add$java_awt_Component$O(this.checkboxPanel, "Center");
this.okButton=Clazz.new_([$I$(8).getString$S("Dialog.Button.OK")],$I$(9,1).c$$S);
this.okButton.setForeground$java_awt_Color(Clazz.new_($I$(10,1).c$$I$I$I,[0, 0, 102]));
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.CenterOfMassInspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "CenterOfMassInspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.CenterOfMassInspector'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CenterOfMassInspector'], [false]);
});
})()
), Clazz.new_(P$.CenterOfMassInspector$2.$init$,[this, null])));
var buttonbar=Clazz.new_([Clazz.new_($I$(6,1).c$$I$I,[1, 3])],$I$(4,1).c$$java_awt_LayoutManager);
buttonbar.setBorder$javax_swing_border_Border($I$(7).createEmptyBorder$I$I$I$I(1, 0, 3, 0));
inspectorPanel.add$java_awt_Component$O(buttonbar, "South");
var box=$I$(11).createHorizontalBox$();
buttonbar.add$java_awt_Component(box);
buttonbar.add$java_awt_Component(this.okButton);
box=$I$(11).createHorizontalBox$();
buttonbar.add$java_awt_Component(box);
}, p$1);

Clazz.newMeth(C$, 'updateCM',  function () {
var checkboxes=this.checkboxPanel.getComponents$();
for (var i=0; i < checkboxes.length; i++) {
var checkbox=checkboxes[i];
var m=p$1.getPointMass$S.apply(this, [checkbox.getActionCommand$()]);
if (checkbox.isSelected$() && !this.cm.containsMass$org_opensourcephysics_cabrillo_tracker_PointMass(m) ) this.cm.addMass$org_opensourcephysics_cabrillo_tracker_PointMass(m);
if (!checkbox.isSelected$() && this.cm.containsMass$org_opensourcephysics_cabrillo_tracker_PointMass(m) ) this.cm.removeMass$org_opensourcephysics_cabrillo_tracker_PointMass(m);
}
$I$(12).repaintT$java_awt_Component(this.cm.tp);
}, p$1);

Clazz.newMeth(C$, 'getPointMass$S',  function (name) {
return this.frame.getTrackerPanelForID$Integer(this.panelID).getTrackByName$Class$S(Clazz.getClass($I$(3)), name);
}, p$1);

Clazz.newMeth(C$, 'updateDisplay$',  function () {
this.setTitle$S($I$(8).getString$S("CenterOfMassInspector.Title") + " \"" + this.cm.getName$() + "\"" );
this.checkboxPanel.removeAll$();
var masses=this.frame.getTrackerPanelForID$Integer(this.panelID).getDrawablesTemp$Class(Clazz.getClass($I$(3)));
for (var i=0, n=masses.size$(); i < n; i++) {
var m=masses.get$I(i);
m.removeListenerNCF$java_beans_PropertyChangeListener(this);
m.addListenerNCF$java_beans_PropertyChangeListener(this);
if (Clazz.instanceOf(m, "org.opensourcephysics.cabrillo.tracker.CenterOfMass")) continue;
var checkbox=Clazz.new_([m.getName$(), m.getFootprint$().getIcon$I$I(21, 16)],$I$(13,1).c$$S$javax_swing_Icon);
if (this.cm.containsMass$org_opensourcephysics_cabrillo_tracker_PointMass(m)) checkbox.setSelected$Z(true);
checkbox.addActionListener$java_awt_event_ActionListener(this.listener);
this.checkboxPanel.add$java_awt_Component(checkbox);
}
masses.clear$();
$I$(2,"setFonts$O$I",[this.checkboxPanel, $I$(2).getLevel$()]);
this.pack$();
$I$(12).repaintT$java_awt_Component(this);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
