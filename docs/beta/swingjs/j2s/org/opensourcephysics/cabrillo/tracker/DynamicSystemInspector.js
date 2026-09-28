(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'javax.swing.JOptionPane','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.DynamicParticle','javax.swing.JPopupMenu','javax.swing.JMenu','org.opensourcephysics.cabrillo.tracker.TrackerRes','javax.swing.JMenuItem','org.opensourcephysics.cabrillo.tracker.TActions','java.awt.event.MouseAdapter','javax.swing.JPanel','java.awt.BorderLayout','java.awt.GridLayout','javax.swing.JButton','javax.swing.JLabel','org.opensourcephysics.cabrillo.tracker.TButton','javax.swing.BoxLayout','java.awt.Color','javax.swing.BorderFactory','org.opensourcephysics.cabrillo.tracker.TFrame']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DynamicSystemInspector", null, 'javax.swing.JDialog', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isVisible'],'I',['particleCount'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','system','org.opensourcephysics.cabrillo.tracker.DynamicSystem','closeButton','javax.swing.JButton','+helpButton','changeParticleListener','java.awt.event.ActionListener','particlePanels','javax.swing.JPanel[]','changeButtons','javax.swing.JButton[]','selectedParticles','org.opensourcephysics.cabrillo.tracker.DynamicParticle[]','particleLabels','javax.swing.JLabel[]','particleButtons','org.opensourcephysics.cabrillo.tracker.TButton[]','labelPanels','javax.swing.JPanel[]','newParticle','org.opensourcephysics.cabrillo.tracker.DynamicParticle','systemButton','org.opensourcephysics.cabrillo.tracker.TButton','selectListener','java.awt.event.MouseListener']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_DynamicSystem',  function (track) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[$I$(1).getFrameForComponent$java_awt_Component(track.tp), false]);C$.$init$.apply(this);
this.system=track;
this.particleCount=2;
var panel=track.tp;
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
if (this.panelID != null ) {
panel.addPropertyChangeListener$S$java_beans_PropertyChangeListener("track", this);
if (this.frame != null ) {
this.frame.addPropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
}}this.setResizable$Z(false);
p$1.createGUI.apply(this, []);
this.initialize$();
}, 1);

Clazz.newMeth(C$, 'initialize$',  function () {
$I$(2,"setFonts$O$I",[this, $I$(2).getLevel$()]);
this.updateDisplay$();
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "tab":
if (this.panelID != null  && (e.getNewValue$()).getID$() === this.panelID  ) {
this.setVisible$Z(this.isVisible);
} else {
var vis=this.isVisible;
this.setVisible$Z(false);
this.isVisible=vis;
}return;
case "track":
if (Clazz.instanceOf(e.getNewValue$(), "org.opensourcephysics.cabrillo.tracker.DynamicParticle")) {
this.newParticle=e.getNewValue$();
}break;
}
this.updateDisplay$();
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
this.isVisible=vis;
});

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.panelID != null ) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
trackerPanel.removePropertyChangeListener$S$java_beans_PropertyChangeListener("track", this);
var list=trackerPanel.getDrawablesTemp$Class(Clazz.getClass($I$(3)));
for (var i=0, ni=list.size$(); i < ni; i++) {
list.get$I(ni).removeListenerNCF$java_beans_PropertyChangeListener(this);
}
list.clear$();
if (this.frame != null ) {
this.frame.removePropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
}this.frame=null;
this.panelID=null;
}C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'createGUI',  function () {
this.changeParticleListener=((P$.DynamicSystemInspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DynamicSystemInspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var button=e.getSource$();
var n=button === this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].changeButtons[0]  ? 0 : 1;
var popup=Clazz.new_($I$(4,1));
var hasPopupItems=false;
var cloneMenu=Clazz.new_([$I$(6).getString$S("TMenuBar.MenuItem.Clone")],$I$(5,1).c$$S);
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].panelID);
var list=trackerPanel.getDrawablesTemp$Class(Clazz.getClass($I$(3)));
for (var i=0, ni=list.size$(); i < ni; i++) {
var p=list.get$I(i);
if (Clazz.instanceOf(p, "org.opensourcephysics.cabrillo.tracker.DynamicSystem")) continue;
var cloneItem=Clazz.new_([p.getName$(), p.getFootprint$().getIcon$I$I(21, 16)],$I$(7,1).c$$S$javax_swing_Icon);
var name=p.getName$();
cloneItem.addActionListener$java_awt_event_ActionListener(((P$.DynamicSystemInspector$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DynamicSystemInspector$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].newParticle=null;
$I$(8).cloneAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel$S(this.$finals$.trackerPanel, this.$finals$.name);
if (this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].newParticle != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].newParticle.getModelBuilder$();
this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].selectedParticles[this.$finals$.n]=this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].newParticle;
p$1.updateSystem.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'], []);
}});
})()
), Clazz.new_(P$.DynamicSystemInspector$1$1.$init$,[this, {trackerPanel:trackerPanel,n:n,name:name}])));
cloneMenu.add$javax_swing_JMenuItem(cloneItem);
if (p === this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].selectedParticles[0]  || p === this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].selectedParticles[1]   || p.system != null  ) continue;
hasPopupItems=true;
var item=((P$.DynamicSystemInspector$1$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DynamicSystemInspector$1$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JMenuItem'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
var w=this.$finals$.button.getPreferredSize$().width - 2;
dim.width=Math.max(w, dim.width);
return dim;
});
})()
), Clazz.new_([this, {button:button}, p.getName$(), p.getFootprint$().getIcon$I$I(21, 16)],$I$(7,1).c$$S$javax_swing_Icon,P$.DynamicSystemInspector$1$2));
item.addActionListener$java_awt_event_ActionListener(((P$.DynamicSystemInspector$1$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DynamicSystemInspector$1$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].selectedParticles[this.$finals$.n]=p$1.getParticle$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'], [this.$finals$.item.getText$()]);
p$1.updateSystem.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'], []);
});
})()
), Clazz.new_(P$.DynamicSystemInspector$1$3.$init$,[this, {n:n,item:item}])));
popup.add$javax_swing_JMenuItem(item);
}
list.clear$();
if (hasPopupItems) popup.addSeparator$();
var newMenu=((P$.DynamicSystemInspector$1$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DynamicSystemInspector$1$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JMenu'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
var w=this.$finals$.button.getPreferredSize$().width - 2;
dim.width=Math.max(w, dim.width);
return dim;
});
})()
), Clazz.new_([this, {button:button}, $I$(6).getString$S("TrackControl.Button.NewTrack")],$I$(5,1).c$$S,P$.DynamicSystemInspector$1$4));
popup.add$javax_swing_JMenuItem(newMenu);
var cartesianItem=Clazz.new_([$I$(6).getString$S("TMenuBar.MenuItem.Cartesian")],$I$(7,1).c$$S);
cartesianItem.addActionListener$java_awt_event_ActionListener(((P$.DynamicSystemInspector$1$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "DynamicSystemInspector$1$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].newParticle=null;
$I$(8).dynamicParticleAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.$finals$.trackerPanel);
if (this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].newParticle != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].newParticle.getModelBuilder$();
this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].selectedParticles[this.$finals$.n]=this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].newParticle;
p$1.updateSystem.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'], []);
}});
})()
), Clazz.new_(P$.DynamicSystemInspector$1$5.$init$,[this, {trackerPanel:trackerPanel,n:n}])));
newMenu.add$javax_swing_JMenuItem(cartesianItem);
var polarItem=Clazz.new_([$I$(6).getString$S("TMenuBar.MenuItem.Polar")],$I$(7,1).c$$S);
polarItem.addActionListener$java_awt_event_ActionListener(((P$.DynamicSystemInspector$1$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "DynamicSystemInspector$1$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].newParticle=null;
$I$(8).dynamicParticlePolarAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.$finals$.trackerPanel);
if (this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].newParticle != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].newParticle.getModelBuilder$();
this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].selectedParticles[this.$finals$.n]=this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].newParticle;
p$1.updateSystem.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'], []);
}});
})()
), Clazz.new_(P$.DynamicSystemInspector$1$6.$init$,[this, {trackerPanel:trackerPanel,n:n}])));
newMenu.add$javax_swing_JMenuItem(polarItem);
if (cloneMenu.getItemCount$() > 0) popup.add$javax_swing_JMenuItem(cloneMenu);
var noneItem=Clazz.new_([$I$(6).getString$S("DynamicSystemInspector.ParticleName.None")],$I$(7,1).c$$S);
noneItem.addActionListener$java_awt_event_ActionListener(((P$.DynamicSystemInspector$1$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "DynamicSystemInspector$1$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].newParticle=null;
this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].selectedParticles[this.$finals$.n]=null;
p$1.updateSystem.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'], []);
});
})()
), Clazz.new_(P$.DynamicSystemInspector$1$7.$init$,[this, {n:n}])));
popup.addSeparator$();
popup.add$javax_swing_JMenuItem(noneItem);
$I$(2,"setFonts$O$I",[popup, $I$(2).getLevel$()]);
popup.show$java_awt_Component$I$I(button, 0, button.getHeight$());
});
})()
), Clazz.new_(P$.DynamicSystemInspector$1.$init$,[this, null]));
this.selectListener=((P$.DynamicSystemInspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DynamicSystemInspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
var button=e.getSource$();
var track=p$1.getParticle$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'], [button.getText$()]);
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].panelID);
trackerPanel.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].closeButton.requestFocusInWindow$();
});
})()
), Clazz.new_($I$(9,1),[this, null],P$.DynamicSystemInspector$2));
var contentPane=Clazz.new_([Clazz.new_($I$(11,1))],$I$(10,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
var inspectorPanel=Clazz.new_([Clazz.new_($I$(12,1).c$$I$I,[1, 2])],$I$(10,1).c$$java_awt_LayoutManager);
contentPane.add$java_awt_Component$O(inspectorPanel, "Center");
this.particlePanels=Clazz.array($I$(10), [this.particleCount]);
this.changeButtons=Clazz.array($I$(13), [this.particleCount]);
this.particleLabels=Clazz.array($I$(14), [this.particleCount]);
this.particleButtons=Clazz.array($I$(15), [this.particleCount]);
this.labelPanels=Clazz.array($I$(10), [this.particleCount]);
for (var i=0; i < this.particleCount; i++) {
this.particlePanels[i]=Clazz.new_([Clazz.new_($I$(11,1))],$I$(10,1).c$$java_awt_LayoutManager);
inspectorPanel.add$java_awt_Component(this.particlePanels[i]);
this.changeButtons[i]=Clazz.new_($I$(13,1));
this.changeButtons[i].addActionListener$java_awt_event_ActionListener(this.changeParticleListener);
this.particleLabels[i]=((P$.DynamicSystemInspector$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DynamicSystemInspector$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JLabel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
dim.height=this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].systemButton.getPreferredSize$().height;
return dim;
});
})()
), Clazz.new_([this, null, $I$(6).getString$S("DynamicSystemInspector.ParticleName.None")],$I$(14,1).c$$S,P$.DynamicSystemInspector$3));
this.particleLabels[i].setHorizontalAlignment$I(0);
this.particleLabels[i].setAlignmentX$F(0.5);
this.particleButtons[i]=Clazz.new_($I$(15,1));
this.particleButtons[i].setContentAreaFilled$Z(false);
this.particleButtons[i].addMouseListener$java_awt_event_MouseListener(this.selectListener);
this.particleButtons[i].setAlignmentX$F(0.5);
this.labelPanels[i]=Clazz.new_($I$(10,1));
this.labelPanels[i].setLayout$java_awt_LayoutManager(Clazz.new_($I$(16,1).c$$java_awt_Container$I,[this.labelPanels[i], 1]));
this.labelPanels[i].add$java_awt_Component(this.particleLabels[i]);
this.particlePanels[i].add$java_awt_Component$O(this.labelPanels[i], "North");
var center=Clazz.new_($I$(10,1));
center.add$java_awt_Component(this.changeButtons[i]);
this.particlePanels[i].add$java_awt_Component$O(center, "Center");
}
this.systemButton=Clazz.new_($I$(15,1));
this.systemButton.setText$S(this.system.getName$());
this.systemButton.setIcon$javax_swing_Icon(this.system.getFootprint$().getIcon$I$I(21, 16));
this.systemButton.setContentAreaFilled$Z(false);
this.systemButton.addMouseListener$java_awt_event_MouseListener(this.selectListener);
this.systemButton.setAlignmentX$F(0.5);
this.helpButton=Clazz.new_($I$(13,1));
this.helpButton.setForeground$java_awt_Color(Clazz.new_($I$(17,1).c$$I$I$I,[0, 0, 102]));
this.helpButton.addActionListener$java_awt_event_ActionListener(((P$.DynamicSystemInspector$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DynamicSystemInspector$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].frame.showHelp$S$I("system", 0);
});
})()
), Clazz.new_(P$.DynamicSystemInspector$4.$init$,[this, null])));
this.closeButton=Clazz.new_($I$(13,1));
this.closeButton.setForeground$java_awt_Color(Clazz.new_($I$(17,1).c$$I$I$I,[0, 0, 102]));
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.DynamicSystemInspector$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "DynamicSystemInspector$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DynamicSystemInspector'], [false]);
});
})()
), Clazz.new_(P$.DynamicSystemInspector$5.$init$,[this, null])));
var buttonbar=Clazz.new_($I$(10,1));
contentPane.add$java_awt_Component$O(buttonbar, "South");
buttonbar.add$java_awt_Component(this.helpButton);
buttonbar.add$java_awt_Component(this.closeButton);
var panel=Clazz.new_($I$(10,1));
panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(16,1).c$$java_awt_Container$I,[panel, 3]));
panel.add$java_awt_Component(this.systemButton);
panel.setBorder$javax_swing_border_Border($I$(18).createEmptyBorder$I$I$I$I(4, 0, 2, 0));
contentPane.add$java_awt_Component$O(panel, "North");
}, p$1);

Clazz.newMeth(C$, 'updateSystem',  function () {
if (this.selectedParticles[0] == null  && this.selectedParticles[1] == null  ) {
this.system.setParticles$org_opensourcephysics_cabrillo_tracker_DynamicParticleA(Clazz.array($I$(3), [0]));
} else if (this.selectedParticles[0] == null ) this.system.setParticles$org_opensourcephysics_cabrillo_tracker_DynamicParticleA(Clazz.array($I$(3), -1, [this.selectedParticles[1]]));
 else if (this.selectedParticles[1] == null ) this.system.setParticles$org_opensourcephysics_cabrillo_tracker_DynamicParticleA(Clazz.array($I$(3), -1, [this.selectedParticles[0]]));
 else this.system.setParticles$org_opensourcephysics_cabrillo_tracker_DynamicParticleA(this.selectedParticles);
if (this.newParticle == null ) this.newParticle=this.system;
this.system.getModelBuilder$().setSelectedPanel$S(this.newParticle.getName$());
this.updateDisplay$();
this.setVisible$Z(true);
}, p$1);

Clazz.newMeth(C$, 'getParticle$S',  function (name) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
return trackerPanel.getTrackByName$Class$S(Clazz.getClass($I$(3)), name);
}, p$1);

Clazz.newMeth(C$, 'updateDisplay$',  function () {
this.setTitle$S($I$(6).getString$S("DynamicSystemInspector.Title"));
this.helpButton.setText$S($I$(6).getString$S("Dialog.Button.Help"));
this.closeButton.setText$S($I$(6).getString$S("Dialog.Button.Close"));
this.selectedParticles=Clazz.array($I$(3), [this.particleCount]);
this.systemButton.setText$S(this.system.getName$());
this.systemButton.setIcon$javax_swing_Icon(this.system.getFootprint$().getIcon$I$I(21, 16));
this.systemButton.setToolTipText$S($I$(6).getString$S("TrackControl.Button.Properties.ToolTip") + " " + this.system.getName$() );
var empty=true;
for (var i=0; i < this.particleCount; i++) {
var etched=$I$(18).createEtchedBorder$();
var title=$I$(18,"createTitledBorder$javax_swing_border_Border$S",[etched, $I$(6).getString$S("DynamicSystemInspector.Border.Title") + " " + (i + 1) ]);
$I$(2,"setFonts$O$I",[title, $I$(2).getLevel$()]);
this.particlePanels[i].setBorder$javax_swing_border_Border(title);
this.changeButtons[i].setText$S($I$(6).getString$S("DynamicSystemInspector.Button.Change"));
this.labelPanels[i].removeAll$();
if (this.system.particles.length > i && this.system.particles[i] != null  ) {
empty=false;
this.selectedParticles[i]=this.system.particles[i];
this.particleButtons[i].setText$S(this.selectedParticles[i].getName$());
this.particleButtons[i].setIcon$javax_swing_Icon(this.selectedParticles[i].getFootprint$().getIcon$I$I(21, 16));
this.particleButtons[i].setToolTipText$S($I$(6).getString$S("TrackControl.Button.Properties.ToolTip") + " " + this.selectedParticles[i].getName$() );
this.labelPanels[i].setLayout$java_awt_LayoutManager(Clazz.new_($I$(16,1).c$$java_awt_Container$I,[this.labelPanels[i], 1]));
this.labelPanels[i].add$java_awt_Component(this.particleButtons[i]);
} else {
this.selectedParticles[i]=null;
this.particleLabels[i].setText$S($I$(6).getString$S("DynamicSystemInspector.ParticleName.None"));
this.labelPanels[i].setLayout$java_awt_LayoutManager(Clazz.new_($I$(11,1)));
this.labelPanels[i].add$java_awt_Component(this.particleLabels[i]);
}$I$(2,"setFonts$O$I",[this.labelPanels[i], $I$(2).getLevel$()]);
}
this.changeButtons[this.particleCount - 1].setEnabled$Z(!empty);
this.changeButtons[0].requestFocusInWindow$();
this.pack$();
$I$(19).repaintT$java_awt_Component(this);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
