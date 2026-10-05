(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.tools.FontSizer','java.awt.Dimension','java.awt.Component','javax.swing.JLabel','javax.swing.BorderFactory',['org.opensourcephysics.cabrillo.tracker.ModelBuilder','.ModelFrameSpinner'],'javax.swing.SpinnerNumberModel','javax.swing.JComboBox',['org.opensourcephysics.tools.FunctionTool','.DropdownRenderer'],'org.opensourcephysics.cabrillo.tracker.ModelBuilder','org.opensourcephysics.cabrillo.tracker.TrackerRes','javax.swing.SwingUtilities','java.awt.Toolkit',['org.opensourcephysics.tools.FunctionTool','.FTObject'],'org.opensourcephysics.cabrillo.tracker.ShapeIcon','org.opensourcephysics.cabrillo.tracker.PointMass','org.opensourcephysics.tools.ToolsRes','org.opensourcephysics.controls.OSPLog']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ModelBuilder", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.tools.FunctionTool');
C$.$classes$=[['ModelFrameSpinner',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['refreshingLayout','repaintDelayed'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','startFrameLabel','javax.swing.JLabel','+endFrameLabel','+boosterLabel','startFrameSpinner','org.opensourcephysics.cabrillo.tracker.ModelBuilder.ModelFrameSpinner','+endFrameSpinner','boosterDropdown','javax.swing.JComboBox','+solverDropdown','myFollower','java.awt.event.ComponentListener']]
,['O',['solverClassNames','String[]']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
;C$.superclazz.c$$java_awt_Component$Z$Z.apply(this,[trackerPanel, false, true]);C$.$init$.apply(this);
this.setVisible$Z(false);
this.repaintDelayed=true;
this.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[400, 600]));
this.frame=trackerPanel.getTFrame$();
this.panelID=trackerPanel.getID$();
if (this.frame != null ) {
this.myFollower=this.frame.addFollower$java_awt_Component$java_awt_Point(this, null);
}this.setFontLevel$I($I$(1).getLevel$());
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("panel", trackerPanel);
this.repaintDelayed=false;
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
if (this.haveGUI$()) return;
C$.superclazz.prototype.createGUI$.apply(this, []);
this.createToolbarComponents$();
this.setToolbarComponents$java_awt_ComponentA(Clazz.array($I$(3), -1, [this.startFrameLabel, this.startFrameSpinner, this.endFrameLabel, this.endFrameSpinner, this.boosterLabel, this.boosterDropdown]));
});

Clazz.newMeth(C$, 'createToolbarComponents$',  function () {
this.startFrameLabel=Clazz.new_($I$(4,1));
this.startFrameLabel.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(0, 4, 0, 2));
this.endFrameLabel=Clazz.new_($I$(4,1));
this.endFrameLabel.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(0, 8, 0, 2));
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var first=trackerPanel.getPlayer$().getVideoClip$().getFirstFrameNumber$();
var last=trackerPanel.getPlayer$().getVideoClip$().getLastFrameNumber$();
this.startFrameSpinner=Clazz.new_([this, null, Clazz.new_($I$(7,1).c$$I$I$I$I,[first, first, last, 1])],$I$(6,1).c$$javax_swing_SpinnerNumberModel);
this.endFrameSpinner=Clazz.new_([this, null, Clazz.new_($I$(7,1).c$$I$I$I$I,[last, first, last, 1])],$I$(6,1).c$$javax_swing_SpinnerNumberModel);
this.boosterLabel=Clazz.new_($I$(4,1));
this.boosterLabel.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(0, 8, 0, 2));
this.boosterDropdown=Clazz.new_($I$(8,1));
this.boosterDropdown.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(0, 0, 1, 0));
this.boosterDropdown.addActionListener$java_awt_event_ActionListener(((P$.ModelBuilder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ModelBuilder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.ModelBuilder'].boosterDropdown.isEnabled$()) return;
var panel=this.b$['org.opensourcephysics.tools.FunctionTool'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], []);
if (panel != null ) {
var part=(panel).model;
if (!(Clazz.instanceOf(part, "org.opensourcephysics.cabrillo.tracker.DynamicParticle"))) return;
var model=part;
var item=this.b$['org.opensourcephysics.cabrillo.tracker.ModelBuilder'].boosterDropdown.getSelectedItem$();
if (item != null ) {
var target=item.track;
model.setBooster$org_opensourcephysics_cabrillo_tracker_PointMass(target);
if (target != null ) {
var step=this.$finals$.trackerPanel.getSelectedStep$();
if (step != null  && Clazz.instanceOf(step, "org.opensourcephysics.cabrillo.tracker.PositionStep") ) {
var pm=step.getTrack$();
if (pm === target ) {
model.setStartFrame$I(step.getFrameNumber$());
}}}}}});
})()
), Clazz.new_(P$.ModelBuilder$1.$init$,[this, {trackerPanel:trackerPanel}])));
var renderer=Clazz.new_($I$(9,1),[this, null]);
this.boosterDropdown.setRenderer$javax_swing_ListCellRenderer(renderer);
this.refreshBoosterDropdown$();
var solverShortNames=Clazz.array(String, [C$.solverClassNames.length]);
for (var i=0; i < solverShortNames.length; i++) {
var n="org.opensourcephysics.numerics.".length$();
solverShortNames[i]=C$.solverClassNames[i].substring$I(n);
}
this.solverDropdown=Clazz.new_($I$(8,1).c$$OA,[solverShortNames]);
this.solverDropdown.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(0, 0, 1, 0));
this.solverDropdown.addActionListener$java_awt_event_ActionListener(((P$.ModelBuilder$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ModelBuilder$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.ModelBuilder'].solverDropdown.isEnabled$() || this.b$['org.opensourcephysics.cabrillo.tracker.ModelBuilder'].solverDropdown.getSelectedIndex$() < 0 ) return;
var modelpanel=this.b$['org.opensourcephysics.tools.FunctionTool'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], []);
var solver=$I$(10).solverClassNames[this.b$['org.opensourcephysics.cabrillo.tracker.ModelBuilder'].solverDropdown.getSelectedIndex$()];
if (solver != null  && Clazz.instanceOf(modelpanel.model, "org.opensourcephysics.cabrillo.tracker.DynamicParticle") ) {
var dyna=modelpanel.model;
try {
var solverClass=Clazz.forName(solver);
dyna.setSolver$Class(solverClass);
} catch (ex2) {
if (Clazz.exceptionOf(ex2,"Exception")){
} else {
throw ex2;
}
}
}});
})()
), Clazz.new_(P$.ModelBuilder$2.$init$,[this, null])));
trackerPanel.addPropertyChangeListener$S$java_beans_PropertyChangeListener("track", this);
this.setHelpAction$java_awt_event_ActionListener(((P$.ModelBuilder$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ModelBuilder$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.ModelBuilder'].frame != null ) {
var panel=this.b$['org.opensourcephysics.tools.FunctionTool'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], []);
if (Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.ParticleDataTrackFunctionPanel")) {
this.b$['org.opensourcephysics.cabrillo.tracker.ModelBuilder'].frame.showHelp$S$I("datatrack", 0);
} else if (Clazz.instanceOf(panel.model, "org.opensourcephysics.cabrillo.tracker.DynamicSystem")) {
this.b$['org.opensourcephysics.cabrillo.tracker.ModelBuilder'].frame.showHelp$S$I("system", 0);
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.ModelBuilder'].frame.showHelp$S$I("particle", 0);
}}});
})()
), Clazz.new_(P$.ModelBuilder$3.$init$,[this, null])));
});

Clazz.newMeth(C$, 'setTitles$',  function () {
this.dropdownTipText=($I$(11).getString$S("TrackerPanel.ModelBuilder.Spinner.Tooltip"));
var title=$I$(11).getString$S("TrackerPanel.ModelBuilder.Title");
var panel=this.getSelectedPanel$();
if (panel != null ) {
var track=this.frame.getTrackerPanelForID$Integer(this.panelID).getTrack$S(panel.getName$());
if (track != null ) {
var type=track.getClass$().getSimpleName$();
title+=": " + $I$(11).getString$S(type + ".Builder.Title");
}}this.titleText=title;
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
if (!this.haveGUI$()) return;
C$.superclazz.prototype.refreshGUI$.apply(this, []);
if (this.boosterDropdown != null ) {
this.boosterDropdown.setToolTipText$S($I$(11).getString$S("TrackerPanel.Dropdown.Booster.Tooltip"));
this.boosterLabel.setText$S($I$(11).getString$S("TrackerPanel.Label.Booster"));
this.startFrameLabel.setText$S($I$(11).getString$S("TrackerPanel.Label.ModelStart"));
this.endFrameLabel.setText$S($I$(11).getString$S("TrackerPanel.Label.ModelEnd"));
this.startFrameSpinner.setToolTipText$S($I$(11).getString$S("TrackerPanel.Spinner.ModelStart.Tooltip"));
this.endFrameSpinner.setToolTipText$S($I$(11).getString$S("TrackerPanel.Spinner.ModelEnd.Tooltip"));
this.refreshBoosterDropdown$();
}this.setTitles$();
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
if (vis == this.isVisible$()  || this.repaintDelayed ) return;
this.repaintDelayed=true;
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
this.repaintDelayed=false;
if (vis) this.repaint$();
this.frame.getTrackerPanelForID$Integer(this.panelID).isModelBuilderVisible=vis;
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
C$.superclazz.prototype.setFontLevel$I.apply(this, [level]);
this.refreshBoosterDropdown$();
this.refreshLayoutAsync$();
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (e.getPropertyName$().equals$O("track")) {
this.refreshBoosterDropdown$();
this.refreshLayoutAsync$();
} else {
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
}});

Clazz.newMeth(C$, 'getTrackerPanel$',  function () {
return this.frame.getTrackerPanelForID$Integer(this.panelID);
});

Clazz.newMeth(C$, 'refreshLayoutAsync$',  function () {
if (this.refreshingLayout) return;
this.refreshingLayout=true;
$I$(12,"invokeLater$Runnable",[((P$.ModelBuilder$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ModelBuilder$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.ModelBuilder'].refreshingLayout=false;
this.b$['org.opensourcephysics.cabrillo.tracker.ModelBuilder'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.ModelBuilder'], []);
this.b$['java.awt.Container'].validate$.apply(this.b$['java.awt.Container'], []);
var dim=this.b$['java.awt.Component'].getSize$.apply(this.b$['java.awt.Component'], []);
dim.width=Math.max(dim.width, this.b$['org.opensourcephysics.tools.FunctionTool'].getToolbar$.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], []).getMinimumSize$().width);
var height=$I$(13).getDefaultToolkit$().getScreenSize$().height;
height=Math.min(((0.9 * height)|0), ((550 * (1 + this.b$['org.opensourcephysics.cabrillo.tracker.ModelBuilder'].fontLevel / 4.0))|0));
dim.height=height;
this.b$['java.awt.Window'].setSize$java_awt_Dimension.apply(this.b$['java.awt.Window'], [dim]);
});
})()
), Clazz.new_(P$.ModelBuilder$4.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'refreshSpinners$',  function () {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var last=trackerPanel.getPlayer$().getVideoClip$().getLastFrameNumber$();
var first=trackerPanel.getPlayer$().getVideoClip$().getFirstFrameNumber$();
var panel=this.getSelectedPanel$();
this.startFrameSpinner.setEnabled$Z(panel != null );
this.endFrameSpinner.setEnabled$Z(panel != null );
this.startFrameLabel.setEnabled$Z(panel != null );
this.endFrameLabel.setEnabled$Z(panel != null );
var end=last;
var model=null;
if (panel != null ) {
model=(panel).model;
end=Math.min(last, model.getEndFrame$());
}(this.startFrameSpinner.getModel$()).setMaximum$Comparable(Integer.valueOf$I(last));
(this.endFrameSpinner.getModel$()).setMaximum$Comparable(Integer.valueOf$I(last));
(this.startFrameSpinner.getModel$()).setMinimum$Comparable(Integer.valueOf$I(first));
(this.endFrameSpinner.getModel$()).setMinimum$Comparable(Integer.valueOf$I(first));
if (model != null ) {
this.startFrameSpinner.setValue$O(Integer.valueOf$I(model.getStartFrame$()));
this.endFrameSpinner.setValue$O(Integer.valueOf$I(end));
} else {
this.startFrameSpinner.setValue$O(Integer.valueOf$I(first));
this.endFrameSpinner.setValue$O(Integer.valueOf$I(last));
}this.validate$();
});

Clazz.newMeth(C$, 'checkGUI$',  function () {
if (this.haveGUI$()) return;
C$.superclazz.prototype.checkGUI$.apply(this, []);
});

Clazz.newMeth(C$, 'refreshBoosterDropdown$',  function () {
this.checkGUI$();
var panel=this.getSelectedPanel$();
var dynamicModel=null;
if (panel != null ) {
var model=(panel).model;
if (Clazz.instanceOf(model, "org.opensourcephysics.cabrillo.tracker.DynamicParticle")) {
dynamicModel=model;
}this.boosterDropdown.setEnabled$Z(false);
var s=$I$(11).getString$S("TrackerPanel.Booster.None");
var none=Clazz.new_([Clazz.new_($I$(15,1).c$$org_opensourcephysics_cabrillo_tracker_MultiShape$I$I,[null, 21, 16]), null, s],$I$(14,1).c$$javax_swing_Icon$org_opensourcephysics_media_core_Trackable$S);
var selected=none;
var targetExists=false;
this.boosterDropdown.removeAllItems$();
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var masses=trackerPanel.getDrawablesTemp$Class(Clazz.getClass($I$(16)));
 outer : for (var i=0, n=masses.size$(); i < n; i++) {
var m=masses.get$I(i);
if (m === model  || Clazz.instanceOf(m, "org.opensourcephysics.cabrillo.tracker.DynamicSystem") ) continue;
var name=m.getName$();
var item=Clazz.new_([m.getFootprint$().getIcon$I$I(21, 16), m, name],$I$(14,1).c$$javax_swing_Icon$org_opensourcephysics_media_core_Trackable$S);
if (Clazz.instanceOf(m, "org.opensourcephysics.cabrillo.tracker.DynamicParticle")) {
var dynamic=m;
if (dynamic.isBoostedBy$org_opensourcephysics_cabrillo_tracker_PointMass(model)) continue;
if (dynamic.system != null ) {
for (var part, $part = 0, $$part = dynamic.system.particles; $part<$$part.length&&((part=($$part[$part])),1);$part++) {
if (part.isBoostedBy$org_opensourcephysics_cabrillo_tracker_PointMass(model)) continue outer;
}
}}if (dynamicModel != null ) {
if (dynamicModel.system != null  && Clazz.instanceOf(m, "org.opensourcephysics.cabrillo.tracker.DynamicParticle") ) {
var dynamicNext=m;
if (dynamicNext.system === dynamicModel.system ) {
continue outer;
}}if (dynamicModel.modelBooster != null ) {
var booster=dynamicModel.modelBooster.booster;
if (booster === m ) {
selected=item;
targetExists=true;
}}}this.boosterDropdown.addItem$O(item);
}
masses.clear$();
this.boosterDropdown.addItem$O(none);
this.boosterDropdown.setSelectedItem$O(selected);
if (dynamicModel != null  && !targetExists ) {
dynamicModel.setBooster$org_opensourcephysics_cabrillo_tracker_PointMass(null);
}var enable=dynamicModel != null  && !(Clazz.instanceOf(dynamicModel, "org.opensourcephysics.cabrillo.tracker.DynamicSystem")) ;
this.boosterLabel.setEnabled$Z(enable);
this.boosterDropdown.setEnabled$Z(enable);
} else {
this.boosterDropdown.setEnabled$Z(false);
this.boosterDropdown.removeAllItems$();
}this.validate$();
});

Clazz.newMeth(C$, 'syncParameters$org_opensourcephysics_tools_Parameter',  function (param) {
if (param == null  || !param.isSynced$() ) return;
var panelnames=this.getPanelNames$();
for (var name, $name = panelnames.iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
var panel=this.getPanel$S(name);
if (Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.ParticleDataTrackFunctionPanel")) continue;
var editor=panel.getParamEditor$();
var objects=editor.getObjects$();
for (var i=0; i < objects.size$(); i++) {
var next=objects.get$I(i);
if (next.getName$().equals$O(param.getName$())) {
if (next.equals$O(param)) break;
if (next.isSynced$()) editor.setExpression$S$S$Z(next.getName$(), param.getExpression$(), true);
}}
}
});

Clazz.newMeth(C$, 'setSpinnerStartFrame$O',  function (frameNumber) {
this.startFrameSpinner.setValue$O(frameNumber);
});

Clazz.newMeth(C$, 'setSpinnerEndFrame$O',  function (frameNumber) {
this.endFrameSpinner.setValue$O(frameNumber);
});

Clazz.newMeth(C$, 'getSpinnerHeight$',  function () {
return this.startFrameSpinner.getHeight$();
});

Clazz.newMeth(C$, 'dispose$',  function () {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
trackerPanel.removePropertyChangeListener$S$java_beans_PropertyChangeListener("track", this);
$I$(17).removePropertyChangeListener$S$java_beans_PropertyChangeListener("locale", this);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("panel", trackerPanel);
for (var key, $key = this.trackFunctionPanels.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var next=this.trackFunctionPanels.get$O(key);
next.setFunctionTool$org_opensourcephysics_tools_FunctionTool(null);
}
this.clearPanels$();
this.selectedPanel=null;
trackerPanel.modelBuilder=null;
if (this.frame != null ) this.frame.removeComponentListener$java_awt_event_ComponentListener(this.myFollower);
this.myFollower=null;
this.panelID=null;
this.frame=null;
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(18).finalized$O(this);
});

Clazz.newMeth(C$, 'repaint$J$I$I$I$I',  function (a, b, c, d, e) {
if (this.repaintDelayed) return;
C$.superclazz.prototype.repaint$J$I$I$I$I.apply(this, [a, b, c, d, e]);
});

C$.$static$=function(){C$.$static$=0;
C$.solverClassNames=Clazz.array(String, -1, ["org.opensourcephysics.numerics.RK4", "org.opensourcephysics.numerics.Euler", "org.opensourcephysics.numerics.Ralston2"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ModelBuilder, "ModelFrameSpinner", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JSpinner');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['prevMax','Integer','spinModel','javax.swing.SpinnerNumberModel']]]

Clazz.newMeth(C$, 'c$$javax_swing_SpinnerNumberModel',  function (model) {
;C$.superclazz.c$$javax_swing_SpinnerModel.apply(this,[model]);C$.$init$.apply(this);
this.spinModel=model;
this.prevMax=this.spinModel.getMaximum$();
this.addChangeListener$javax_swing_event_ChangeListener(((P$.ModelBuilder$ModelFrameSpinner$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ModelBuilder$ModelFrameSpinner$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var panel=this.b$['org.opensourcephysics.tools.FunctionTool'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], []);
if (panel == null  || panel.model == null   || panel.model.refreshing ) return;
if (this.b$['org.opensourcephysics.cabrillo.tracker.ModelBuilder.ModelFrameSpinner'].prevMax !== this.b$['org.opensourcephysics.cabrillo.tracker.ModelBuilder.ModelFrameSpinner'].spinModel.getMaximum$() ) {
this.b$['org.opensourcephysics.cabrillo.tracker.ModelBuilder.ModelFrameSpinner'].prevMax=this.b$['org.opensourcephysics.cabrillo.tracker.ModelBuilder.ModelFrameSpinner'].spinModel.getMaximum$();
return;
}var n=(this.b$['javax.swing.JSpinner'].getValue$.apply(this.b$['javax.swing.JSpinner'], [])).$c();
if (this.b$['org.opensourcephysics.cabrillo.tracker.ModelBuilder.ModelFrameSpinner'] === this.b$['org.opensourcephysics.cabrillo.tracker.ModelBuilder'].startFrameSpinner ) panel.model.setStartFrame$I(n);
 else panel.model.setEndFrame$I(n);
});
})()
), Clazz.new_(P$.ModelBuilder$ModelFrameSpinner$1.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$, 'getMinimumSize$',  function () {
var dim=C$.superclazz.prototype.getMinimumSize$.apply(this, []);
dim.width+=(($I$(1).getFactor$() * 4)|0);
return dim;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
