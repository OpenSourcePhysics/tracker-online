(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'javax.swing.JOptionPane','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.Vector','javax.swing.JCheckBoxMenuItem','org.opensourcephysics.cabrillo.tracker.TFrame','javax.swing.JPanel','java.awt.BorderLayout','java.awt.GridLayout','javax.swing.BorderFactory','javax.swing.JButton','java.awt.Color','javax.swing.Box']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VectorSumInspector", null, 'javax.swing.JDialog', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isVisible'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','sum','org.opensourcephysics.cabrillo.tracker.VectorSum','okButton','javax.swing.JButton','mainPanel','javax.swing.JPanel','+checkboxPanel','+sumPanel','listener','java.awt.event.ActionListener']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_VectorSum',  function (sum) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[$I$(1).getFrameForComponent$java_awt_Component(sum.tp), false]);C$.$init$.apply(this);
this.sum=sum;
this.frame=sum.tframe;
this.panelID=sum.tp.getID$();
if (this.panelID != null ) {
sum.tp.addPropertyChangeListener$S$java_beans_PropertyChangeListener("track", this);
if (this.frame != null ) {
this.frame.addPropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
}}this.listener=((P$.VectorSumInspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VectorSumInspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.updateSum.apply(this.b$['org.opensourcephysics.cabrillo.tracker.VectorSumInspector'], []);
});
})()
), Clazz.new_(P$.VectorSumInspector$1.$init$,[this, null]));
this.setTitle$S($I$(2).getString$S("VectorSumInspector.Title") + " \"" + sum.getName$() + "\"" );
this.setResizable$Z(false);
p$1.createGUI.apply(this, []);
this.initialize$();
this.pack$();
}, 1);

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
if (vis) {
$I$(3,"setFonts$O$I",[this, $I$(3).getLevel$()]);
this.pack$();
}C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
this.isVisible=vis;
});

Clazz.newMeth(C$, 'initialize$',  function () {
this.updateDisplay$();
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.checkboxPanel.removeAll$();
if (this.panelID != null ) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
trackerPanel.removePropertyChangeListener$S$java_beans_PropertyChangeListener("track", this);
var list=trackerPanel.getDrawablesTemp$Class(Clazz.getClass($I$(4)));
for (var k=0, n=list.size$(); k < n; k++) {
list.get$I(k).removeListenerNCF$java_beans_PropertyChangeListener(this);
}
list.clear$();
if (this.frame != null ) {
this.frame.removePropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
}this.panelID=null;
}C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (e.getPropertyName$().equals$O("tab")) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if (!this.frame.isRemovingAll$() && trackerPanel != null   && e.getNewValue$() === trackerPanel  ) {
this.setVisible$Z(this.isVisible);
} else {
var vis=this.isVisible;
this.setVisible$Z(false);
this.isVisible=vis;
}} else {
this.updateDisplay$();
}});

Clazz.newMeth(C$, 'updateDisplay$',  function () {
this.setTitle$S($I$(2).getString$S("VectorSumInspector.Title") + " \"" + this.sum.getName$() + "\"" );
this.checkboxPanel.removeAll$();
var list=this.frame.getTrackerPanelForID$Integer(this.panelID).getDrawablesTemp$Class(Clazz.getClass($I$(4)));
for (var k=0, n=list.size$(); k < n; k++) {
var v=list.get$I(k);
v.removeListenerNCF$java_beans_PropertyChangeListener(this);
v.addListenerNCF$java_beans_PropertyChangeListener(this);
if (Clazz.instanceOf(v, "org.opensourcephysics.cabrillo.tracker.VectorSum")) continue;
var checkbox=Clazz.new_([v.getName$(), v.getFootprint$().getIcon$I$I(21, 16)],$I$(5,1).c$$S$javax_swing_Icon);
if (this.sum.contains$org_opensourcephysics_cabrillo_tracker_Vector(v)) {
checkbox.setSelected$Z(true);
}checkbox.addActionListener$java_awt_event_ActionListener(this.listener);
this.checkboxPanel.add$java_awt_Component(checkbox);
}
list.clear$();
$I$(3,"setFonts$O$I",[this.checkboxPanel, $I$(3).getLevel$()]);
this.pack$();
$I$(6).repaintT$java_awt_Component(this);
});

Clazz.newMeth(C$, 'createGUI',  function () {
var inspectorPanel=Clazz.new_([Clazz.new_($I$(8,1))],$I$(7,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(inspectorPanel);
this.mainPanel=Clazz.new_([Clazz.new_($I$(9,1).c$$I$I,[1, 0])],$I$(7,1).c$$java_awt_LayoutManager);
var etched=$I$(10).createEtchedBorder$();
var title=$I$(10,"createTitledBorder$javax_swing_border_Border$S",[etched, $I$(2).getString$S("VectorSumInspector.Border.Title")]);
this.mainPanel.setBorder$javax_swing_border_Border(title);
inspectorPanel.add$java_awt_Component$O(this.mainPanel, "Center");
this.checkboxPanel=Clazz.new_([Clazz.new_($I$(9,1).c$$I$I,[0, 1])],$I$(7,1).c$$java_awt_LayoutManager);
this.mainPanel.add$java_awt_Component(this.checkboxPanel);
this.sumPanel=Clazz.new_([Clazz.new_($I$(9,1).c$$I$I,[0, 2])],$I$(7,1).c$$java_awt_LayoutManager);
this.okButton=Clazz.new_([$I$(2).getString$S("Dialog.Button.OK")],$I$(11,1).c$$S);
this.okButton.setForeground$java_awt_Color(Clazz.new_($I$(12,1).c$$I$I$I,[0, 0, 102]));
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.VectorSumInspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "VectorSumInspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.VectorSumInspector'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.VectorSumInspector'], [false]);
});
})()
), Clazz.new_(P$.VectorSumInspector$2.$init$,[this, null])));
var buttonbar=Clazz.new_([Clazz.new_($I$(9,1).c$$I$I,[1, 3])],$I$(7,1).c$$java_awt_LayoutManager);
buttonbar.setBorder$javax_swing_border_Border($I$(10).createEmptyBorder$I$I$I$I(1, 0, 3, 0));
inspectorPanel.add$java_awt_Component$O(buttonbar, "South");
var box=$I$(13).createHorizontalBox$();
buttonbar.add$java_awt_Component(box);
buttonbar.add$java_awt_Component(this.okButton);
box=$I$(13).createHorizontalBox$();
buttonbar.add$java_awt_Component(box);
}, p$1);

Clazz.newMeth(C$, 'updateSum',  function () {
var checkboxes=this.checkboxPanel.getComponents$();
for (var i=0; i < checkboxes.length; i++) {
var checkbox=checkboxes[i];
var v=p$1.getVector$S.apply(this, [checkbox.getActionCommand$()]);
if (checkbox.isSelected$() && !this.sum.contains$org_opensourcephysics_cabrillo_tracker_Vector(v) ) {
this.sum.addVector$org_opensourcephysics_cabrillo_tracker_Vector(v);
v.setVisible$Z(true);
}if (!checkbox.isSelected$() && this.sum.contains$org_opensourcephysics_cabrillo_tracker_Vector(v) ) this.sum.removeVector$org_opensourcephysics_cabrillo_tracker_Vector(v);
}
if (this.panelID != null ) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if (trackerPanel.getSelectedTrack$() === this.sum  && trackerPanel.getSelectedPoint$() != null  ) {
trackerPanel.getSelectedPoint$().showCoordinates$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
}$I$(6).repaintT$java_awt_Component(trackerPanel);
}}, p$1);

Clazz.newMeth(C$, 'getVector$S',  function (name) {
return (this.panelID == null  ? null : this.frame.getTrackerPanelForID$Integer(this.panelID).getTrackByName$Class$S(Clazz.getClass($I$(4)), name));
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
