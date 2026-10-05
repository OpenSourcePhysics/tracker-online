(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'javax.swing.JTextField','org.opensourcephysics.cabrillo.tracker.Tracker','javax.swing.JLabel','javax.swing.Box','javax.swing.JPopupMenu','org.opensourcephysics.controls.OSPLog','javax.swing.JButton','org.opensourcephysics.cabrillo.tracker.TTrackBar','javax.swing.Timer','org.opensourcephysics.tools.FontSizer','javax.swing.JMenu','java.awt.event.MouseAdapter','javax.swing.BorderFactory','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.cabrillo.tracker.TButton','org.opensourcephysics.cabrillo.tracker.TViewChooser','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.cabrillo.tracker.TToolBar','javax.swing.JMenuItem','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.cabrillo.tracker.TTrack']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TTrackBar", null, 'javax.swing.JToolBar', [['org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.display.OSPRuntime.Disposable'], 'java.beans.PropertyChangeListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.viewLabel=Clazz.new_($I$(3,1));
this.toolbarEnd=$I$(4).createGlue$();
this.emptyLabel=Clazz.new_($I$(3,1));
this.selectPopup=Clazz.new_($I$(5,1));
this.panesPopup=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['Z',['buildRequested'],'I',['toolbarComponentHeight','numberFieldWidth'],'O',['viewLabel','javax.swing.JLabel','toolbarEnd','java.awt.Component','trackButton','org.opensourcephysics.cabrillo.tracker.TButton','maximizeButton','javax.swing.JButton','chooseViewButton','org.opensourcephysics.cabrillo.tracker.TButton','mainViewIconLabel','javax.swing.JLabel','selectButton','org.opensourcephysics.cabrillo.tracker.TButton','emptyLabel','javax.swing.JLabel','selectPopup','javax.swing.JPopupMenu','+panesPopup','frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer']]
,['Z',['showOutOfMemoryDialog'],'I',['testIndex'],'O',['newVersionButton','javax.swing.JButton','selectTrackIcon','javax.swing.Icon','testButton','javax.swing.JButton','testTimer','javax.swing.Timer','sizingField','javax.swing.JTextField','panelProps','String[]']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
Clazz.super_(C$, this);
System.out.println$S("Creating trackbar for " + panel);
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
panel.addListeners$SA$java_beans_PropertyChangeListener(C$.panelProps, this);
}, 1);

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(6).finalized$O(this);
});

Clazz.newMeth(C$, 'setTestOn$Z',  function (on) {
if (on) {
C$.testButton=Clazz.new_($I$(7,1).c$$S,["test"]);
C$.testButton.addActionListener$java_awt_event_ActionListener(((P$.TTrackBar$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrackBar$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var frame=$I$(8).testButton.getTopLevelAncestor$();
if (frame != null  && frame.getSelectedPanel$() != null  ) {
if ($I$(8).testTimer == null ) {
$I$(8).testTimer=Clazz.new_([20, ((P$.TTrackBar$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrackBar$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var trackerPanel=this.$finals$.frame.getSelectedPanel$();
if (!$I$(8).testTimer.isRepeats$()) {
$I$(8).testTimer.stop$();
$I$(8).testTimer=null;
}});
})()
), Clazz.new_(P$.TTrackBar$1$1.$init$,[this, {frame:frame}]))],$I$(9,1).c$$I$java_awt_event_ActionListener);
$I$(8).testTimer.setInitialDelay$I(0);
$I$(8).testTimer.setRepeats$Z(false);
$I$(8).testTimer.start$();
} else {
$I$(8).testTimer.stop$();
$I$(8).testTimer=null;
}}});
})()
), Clazz.new_(P$.TTrackBar$1.$init$,[this, null])));
}}, 1);

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
var objectsToSize=Clazz.array(java.lang.Object, -1, [C$.sizingField, C$.newVersionButton, this.trackButton, C$.testButton, this.maximizeButton]);
$I$(10).setFonts$O$I(objectsToSize, level);
this.numberFieldWidth=C$.sizingField.getPreferredSize$().width;
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (enable) {
C$.superclazz.prototype.setEnabled$Z.apply(this, [enable]);
var comps=this.getComponents$();
for (var i=0; i < comps.length; i++) {
comps[i].setEnabled$Z(enable);
}
});

Clazz.newMeth(C$, 'getPopup$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
var trackMenu=track.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu(this.panel$(), Clazz.new_($I$(11,1)));
$I$(10,"setFonts$O$I",[trackMenu, $I$(10).getLevel$()]);
return trackMenu.getPopupMenu$();
});

Clazz.newMeth(C$, 'createGUI$',  function () {
this.addMouseListener$java_awt_event_MouseListener(((P$.TTrackBar$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrackBar$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if (e.getClickCount$() == 2) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].maximizeButton.doClick$I(0);
}});
})()
), Clazz.new_($I$(12,1),[this, null],P$.TTrackBar$8)));
this.setFloatable$Z(false);
this.viewLabel.setBorder$javax_swing_border_Border($I$(13).createEmptyBorder$I$I$I$I(2, 6, 2, 0));
if ($I$(14).isJS) {
this.viewLabel.setEnabled$Z(false);
}this.selectButton=((P$.TTrackBar$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrackBar$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].getSelectTrackPopup$javax_swing_JPopupMenu.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'], [this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].selectPopup]);
});
})()
), Clazz.new_($I$(15,1).c$$javax_swing_Icon,[this, null, C$.selectTrackIcon],P$.TTrackBar$9));
this.trackButton=((P$.TTrackBar$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrackBar$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
var track=this.getTrack$();
if (Clazz.instanceOf(track, "org.opensourcephysics.cabrillo.tracker.ParticleDataTrack")) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].trackButton.context.contains$CharSequence("point")) {
var dt=track;
var trackMenu=dt.getPointMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel(track.tp);
$I$(10,"setFonts$O$I",[trackMenu, $I$(10).getLevel$()]);
return trackMenu.getPopupMenu$();
}var dt=(track).getLeader$();
var trackMenu=dt.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu(track.tp, Clazz.new_($I$(11,1)));
$I$(10,"setFonts$O$I",[trackMenu, $I$(10).getLevel$()]);
return trackMenu.getPopupMenu$();
}return C$.superclazz.prototype.getPopup$.apply(this, []);
});
})()
), Clazz.new_($I$(15,1),[this, null],P$.TTrackBar$10));
this.trackButton.setOpaque$Z(false);
this.emptyLabel.setOpaque$Z(false);
var empty=$I$(13).createEmptyBorder$I$I$I$I(7, 3, 7, 3);
var etched=$I$(13).createEtchedBorder$();
this.maximizeButton=Clazz.new_([$I$(16).MAXIMIZE_ICON, $I$(16).RESTORE_ICON],$I$(15,1).c$$javax_swing_Icon$javax_swing_Icon);
this.maximizeButton.setBorder$javax_swing_border_Border($I$(13).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, empty));
this.maximizeButton.setToolTipText$S($I$(17).getString$S("TViewChooser.Maximize.Tooltip"));
this.maximizeButton.setHorizontalTextPosition$I(2);
this.maximizeButton.addActionListener$java_awt_event_ActionListener(((P$.TTrackBar$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrackBar$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var maximize=(this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'], []).getMaximizedView$() == -1);
if (maximize) {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].frame.maximizeView$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'], []), 4);
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].frame.restoreViews$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'], []));
}this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].rebuild$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'], []);
});
})()
), Clazz.new_(P$.TTrackBar$11.$init$,[this, null])));
this.chooseViewButton=((P$.TTrackBar$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrackBar$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].panesPopup.removeAll$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].frame.currentMenuBar == null ) return this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].panesPopup;
this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].frame.currentMenuBar.refreshViewMenu$Z(true);
this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].panesPopup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].frame.currentMenuBar.getMenuItem$S("view_mainItem"));
this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].panesPopup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].frame.currentMenuBar.getMenuItem$S("view_1Item"));
this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].panesPopup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].frame.currentMenuBar.getMenuItem$S("view_2Item"));
this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].panesPopup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].frame.currentMenuBar.getMenuItem$S("view_3Item"));
this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].panesPopup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].frame.currentMenuBar.getMenuItem$S("view_4Item"));
return this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].panesPopup;
});
})()
), Clazz.new_([this, null, $I$(16).RIGHT_ARROW_ICON],$I$(15,1).c$$javax_swing_Icon,P$.TTrackBar$12));
this.chooseViewButton.setBorder$javax_swing_border_Border($I$(13).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, empty));
this.chooseViewButton.alignPopup=4;
this.mainViewIconLabel=Clazz.new_([$I$(18).pointmassOffIcon],$I$(3,1).c$$javax_swing_Icon);
this.mainViewIconLabel.setBorder$javax_swing_border_Border($I$(13).createEmptyBorder$I$I$I$I(2, 0, 2, 6));
});

Clazz.newMeth(C$, 'getSelectTrackPopup$javax_swing_JPopupMenu',  function (popup) {
popup.removeAll$();
var listener=((P$.TTrackBar$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "TTrackBar$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var item=e.getSource$();
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'], []);
var track=panel.getTrack$S(item.getText$());
if (track == null ) return;
if (panel.calibrationTools.contains$O(track) || panel.measuringTools.contains$O(track) || track === panel.getAxes$()   ) {
track.setVisible$Z(true);
}panel.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
});
})()
), Clazz.new_(P$.TTrackBar$13.$init$,[this, null]));
var hasTracks=false;
var panel=this.panel$();
var userTracks=panel.getUserTracks$();
for (var track, $track = userTracks.iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
hasTracks=true;
var item=Clazz.new_([track.getName$S("track"), track.getIcon$I$I$S(21, 16, "track")],$I$(19,1).c$$S$javax_swing_Icon);
item.addActionListener$java_awt_event_ActionListener(listener);
popup.add$javax_swing_JMenuItem(item);
}
if (hasTracks) {
popup.addSeparator$();
}for (var track, $track = panel.getTracks$().iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
if (!userTracks.contains$O(track)) {
if (track === panel.getAxes$()  && !panel.isEnabled$S("button.axes") ) continue;
switch (track.ttype) {
case 8:
if (panel.calibrationTools.contains$O(track)) {
var tape=track;
if (tape.isStickMode$() ? !panel.isEnabled$S("calibration.stick") : !panel.isEnabled$S("calibration.tape")) continue;
}break;
case 0:
if (!panel.isEnabled$S("calibration.points")) continue;
break;
case 5:
if (Clazz.instanceOf(track, "org.opensourcephysics.cabrillo.tracker.ParticleDataTrack")) continue;
break;
case 4:
if (!panel.isEnabled$S("calibration.offsetOrigin")) continue;
break;
case 10:
continue;
}
var item=Clazz.new_([track.getName$(), track.getFootprint$().getIcon$I$I(21, 16)],$I$(19,1).c$$S$javax_swing_Icon);
item.addActionListener$java_awt_event_ActionListener(listener);
popup.add$javax_swing_JMenuItem(item);
}}
$I$(10,"setFonts$O$I",[popup, $I$(10).getLevel$()]);
return popup;
});

Clazz.newMeth(C$, 'refresh$',  function () {
if (!this.panel$().isPaintable$() || this.buildRequested ) return;
if (this.selectButton == null ) this.createGUI$();
this.buildRequested=true;
$I$(14,"postEvent$Runnable",[((P$.TTrackBar$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TTrackBar$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'].rebuild$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TTrackBar'], []);
});
})()
), Clazz.new_(P$.TTrackBar$lambda1.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'rebuild$',  function () {
if (this.selectButton == null ) this.createGUI$();
this.buildRequested=false;
this.numberFieldWidth=C$.sizingField.getPreferredSize$().width;
this.selectButton.setToolTipText$S($I$(17).getString$S("TToolBar.Button.SelectTrack.Tooltip"));
this.removeAll$();
var panel=this.panel$();
var track=this.trackButton.getTrack$();
if (track == null ) {
var axes=panel.getAxes$();
if (axes != null ) {
this.trackButton.setTrack$org_opensourcephysics_cabrillo_tracker_TTrack(axes);
}} else {
track.removeListenerNCF$java_beans_PropertyChangeListener(this);
}this.add$java_awt_Component(this.selectButton);
this.trackButton.context="track";
track=panel.getSelectedTrack$();
if (track != null  && track.ttype != 10 ) {
if (Clazz.instanceOf(track, "org.opensourcephysics.cabrillo.tracker.ParticleDataTrack")) {
var p=panel.getSelectedPoint$();
if (p != null ) {
var step=track.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel(p, panel);
if (step != null  && step.getTrack$() === track  ) {
this.trackButton.context="point";
}}}this.trackButton.setTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
track.addListenerNCF$java_beans_PropertyChangeListener(this);
this.add$java_awt_Component(this.trackButton);
this.toolbarComponentHeight=this.selectButton.getPreferredSize$().height;
var list=track.getToolbarTrackComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel);
for (var c, $c = list.iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) {
if (Clazz.instanceOf(c, "javax.swing.JComponent") && !(Clazz.instanceOf(c, "javax.swing.JButton")) && !(Clazz.instanceOf(c, "javax.swing.JCheckBox"))  ) {
p$1.updateSize$javax_swing_JComponent.apply(this, [c]);
}this.add$java_awt_Component(c);
}
var p=panel.getSelectedPoint$();
if (p != null ) {
list=track.getToolbarPointComponents$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_TPoint(panel, p);
for (var c, $c = list.iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) {
if (Clazz.instanceOf(c, "javax.swing.JComponent") && !(Clazz.instanceOf(c, "javax.swing.JButton")) ) {
p$1.updateSize$javax_swing_JComponent.apply(this, [c]);
}this.add$java_awt_Component(c);
}
}}var userTracks=panel.getUserTracks$();
var frame=panel.getTFrame$();
if ((userTracks == null  || userTracks.isEmpty$() ) && panel.measuringTools.isEmpty$() ) {
var choosers=frame.getViewChoosers$Integer(this.panelID);
var close=true;
for (var i=0; i < choosers.length; i++) {
if (choosers[i] == null ) continue;
var viewType=choosers[i].getSelectedViewType$();
if (viewType == 2 || viewType == 3 ) close=false;
}
if (close) {
if (!$I$(20).isPortraitOrientation) frame.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(panel, 0, 1.0);
 else frame.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(panel, 2, 1.0);
}}if (panel.getSelectedTrack$() == null ) {
var name=$I$(17).getString$S("TFrame.View.Main");
this.viewLabel.setText$S(name);
$I$(10).setFonts$java_awt_Container(this.viewLabel);
this.add$java_awt_Component(this.viewLabel);
}this.add$java_awt_Component(this.toolbarEnd);

{}
this.maximizeButton.setText$S($I$(17).getString$S("TFrame.View.Main"));
this.add$java_awt_Component(this.mainViewIconLabel);
this.add$java_awt_Component(this.maximizeButton);
if (this.panel$().getMaximizedView$() != -1) {
this.maximizeButton.setIcon$javax_swing_Icon($I$(16).RESTORE_ICON);
this.maximizeButton.setToolTipText$S($I$(17).getString$S("TViewChooser.Restore.Tooltip"));
this.chooseViewButton.setToolTipText$S($I$(17).getString$S("TViewChooser.NextView.Tooltip"));
this.add$java_awt_Component(this.chooseViewButton);
} else {
this.maximizeButton.setIcon$javax_swing_Icon($I$(16).MAXIMIZE_ICON);
this.maximizeButton.setToolTipText$S($I$(17).getString$S("TViewChooser.Maximize.Tooltip"));
}$I$(10).setFonts$java_awt_Container(this.maximizeButton);
this.revalidate$();
$I$(20).repaintT$java_awt_Component(this);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
if (this.selectButton == null ) {
return;
}C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'updateSize$javax_swing_JComponent',  function (jc) {
var w=jc.getPreferredSize$().width;
jc.setMaximumSize$java_awt_Dimension(null);
jc.setPreferredSize$java_awt_Dimension(null);
var dim=jc.getPreferredSize$();
dim.height=this.toolbarComponentHeight;
if (Clazz.instanceOf(jc, "org.opensourcephysics.media.core.NumberField")) {
dim.width=Math.max(this.numberFieldWidth, dim.width);
} else if (Clazz.instanceOf(jc, "org.opensourcephysics.cabrillo.tracker.TTrack.TextLineLabel")) {
dim.width=w;
} else if (Clazz.instanceOf(jc, "javax.swing.JLabel")) {
var lab=jc;
lab.setToolTipText$S(lab.getText$());
dim.width+=4;
}jc.setPreferredSize$java_awt_Dimension(dim);
jc.setMaximumSize$java_awt_Dimension(dim);
}, p$1);

Clazz.newMeth(C$, 'resizeField$org_opensourcephysics_media_core_NumberField',  function (field) {
if (this.getComponentIndex$java_awt_Component(field) < 0) return;
field.setMaximumSize$java_awt_Dimension(null);
field.setPreferredSize$java_awt_Dimension(null);
var dim=field.getPreferredSize$();
dim.height=this.toolbarComponentHeight;
dim.width=Math.max(this.numberFieldWidth, dim.width);
field.setMaximumSize$java_awt_Dimension(dim);
field.setPreferredSize$java_awt_Dimension(dim);
this.revalidate$();
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "selectedtrack":
this.refresh$();
break;
case "name":
case "color":
case "footprint":
this.refresh$();
break;
case "selectedpoint":
this.refresh$();
break;
case "track":
this.refresh$();
break;
case "clear":
for (var t, $t = $I$(21).getValues$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
t.removeListenerNCF$java_beans_PropertyChangeListener(this);
}
if (this.trackButton != null ) this.trackButton.setTrack$org_opensourcephysics_cabrillo_tracker_TTrack(null);
this.refresh$();
break;
}
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.removeAll$();
this.panel$().removeListeners$SA$java_beans_PropertyChangeListener(C$.panelProps, this);
for (var t, $t = $I$(21).getValues$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
t.removeListenerNCF$java_beans_PropertyChangeListener(this);
}
if (this.trackButton != null ) this.trackButton.setTrack$org_opensourcephysics_cabrillo_tracker_TTrack(null);
this.panelID=null;
this.frame=null;
});

Clazz.newMeth(C$, 'panel$',  function () {
return (this.frame == null  ? null : this.frame.getTrackerPanelForID$Integer(this.panelID));
});

Clazz.newMeth(C$, 'toString',  function () {
return "[TTrackBar " + this.panelID + "]" ;
});

C$.$static$=function(){C$.$static$=0;
C$.showOutOfMemoryDialog=true;
C$.sizingField=Clazz.new_($I$(1,1).c$$S,["1234567"]);
{
C$.selectTrackIcon=$I$(2).getResourceIcon$S$Z("select_track.gif", true);
C$.setTestOn$Z($I$(2).testOn);

{}
};
C$.panelProps=Clazz.array(String, -1, ["track", "clear", "selectedtrack", "selectedpoint"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
