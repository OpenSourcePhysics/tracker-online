(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.util.HashMap','org.opensourcephysics.cabrillo.tracker.TViewChooser','java.awt.Dimension','javax.swing.JComboBox','javax.swing.BorderFactory','org.opensourcephysics.cabrillo.tracker.TrackRenderer','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JLabel','javax.swing.JTextField','org.opensourcephysics.display.OSPRuntime','javax.swing.JPopupMenu','javax.swing.JMenuItem','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.tools.FontSizer','java.awt.event.MouseAdapter','java.beans.PropertyChangeEvent','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.cabrillo.tracker.Tracker','java.awt.CardLayout','org.opensourcephysics.cabrillo.tracker.TTrack']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrackChooserTView", null, 'org.opensourcephysics.cabrillo.tracker.TView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tracks=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['refreshing'],'O',['tracks','java.util.Map','+trackViews','selectedTrack','org.opensourcephysics.cabrillo.tracker.TTrack','trackComboBox','javax.swing.JComboBox','noData','javax.swing.JPanel','noDataLabel','javax.swing.JLabel','+viewTypeLabel']]
,['Z',['ignoreRefresh'],'O',['panelProps','String[]']]]

Clazz.newMeth(C$, 'getPanel$',  function () {
return this.frame.getTrackerPanelForID$Integer(this.panelID);
});

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this,[panel]);C$.$init$.apply(this);
if (panel == null ) {
return;
}this.init$();
this.setBackground$java_awt_Color(panel.getBackground$());
this.trackComboBox=((P$.TrackChooserTView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackChooserTView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JComboBox'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
return $I$(2,"getButtonMaxSize$java_awt_Container$java_awt_Dimension$I",[this, Clazz.new_([this.getPreferredSize$().width, C$.superclazz.prototype.getMaximumSize$.apply(this, []).height],$I$(3,1).c$$I$I), this.getMinimumSize$().height]);
});
})()
), Clazz.new_($I$(4,1),[this, null],P$.TrackChooserTView$1));
this.trackComboBox.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(0, 0, 1, 1));
this.toolbarComponents.add$O(this.trackComboBox);
this.trackComboBox.setRenderer$javax_swing_ListCellRenderer(Clazz.new_($I$(6,1)));
this.trackComboBox.addActionListener$java_awt_event_ActionListener(((P$.TrackChooserTView$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackChooserTView$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackChooserTView'].dropDownAction$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackChooserTView'], []);
});
})()
), Clazz.new_(P$.TrackChooserTView$2.$init$,[this, null])));
this.noData=Clazz.new_([Clazz.new_($I$(8,1))],$I$(7,1).c$$java_awt_LayoutManager);
this.noDataLabel=Clazz.new_($I$(9,1));
this.noDataLabel.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(4, 4, 0, 0));
var font=Clazz.new_($I$(10,1)).getFont$();
this.noDataLabel.setFont$java_awt_Font(font);
this.noData.add$java_awt_Component$O(this.noDataLabel, "North");
this.noData.setBackground$java_awt_Color(this.getBackground$());
this.noData.addMouseListener$java_awt_event_MouseListener(((P$.TrackChooserTView$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackChooserTView$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(11).isPopupTrigger$java_awt_event_InputEvent(e)) {
var popup=Clazz.new_($I$(12,1));
var helpItem=Clazz.new_([$I$(14).getString$S("Dialog.Button.Help") + "..."],$I$(13,1).c$$S);
helpItem.addActionListener$java_awt_event_ActionListener(((P$.TrackChooserTView$3$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackChooserTView$3$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TrackChooserTView'].getViewType$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackChooserTView'], []) == 1) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackChooserTView'].frame.showHelp$S$I("datatable", 0);
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackChooserTView'].frame.showHelp$S$I("plot", 0);
}});
})()
), Clazz.new_(P$.TrackChooserTView$3$1.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(helpItem);
$I$(15,"setFonts$O$I",[popup, $I$(15).getLevel$()]);
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.cabrillo.tracker.TrackChooserTView'].noData, e.getX$(), e.getY$());
}});
})()
), Clazz.new_($I$(16,1),[this, null],P$.TrackChooserTView$3)));
this.viewTypeLabel=Clazz.new_($I$(9,1));
this.viewTypeLabel.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(2, 6, 2, 0));
}, 1);

Clazz.newMeth(C$, 'dropDownAction$',  function () {
if (this.refreshing) return;
var item=this.trackComboBox.getSelectedItem$();
var track=this.tracks.get$O(item);
var name=(item)[1];
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if (track != null ) {
trackerPanel.changed=true;
var trackView=this.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track);
var prevTrack=this.selectedTrack;
var prevView=null;
if (prevTrack != null ) {
prevView=this.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(prevTrack);
prevTrack.removeStepListener$java_beans_PropertyChangeListener(prevView);
if (Clazz.instanceOf(prevView, "org.opensourcephysics.cabrillo.tracker.PlotTrackView")) {
var plotView=prevView;
for (var plot, $plot = 0, $$plot = plotView.plots; $plot<$$plot.length&&((plot=($$plot[$plot])),1);$plot++) {
for (var guest, $guest = plot.guests.iterator$(); $guest.hasNext$()&&((guest=($guest.next$())),1);) {
guest.removeStepListener$java_beans_PropertyChangeListener(prevView);
}
}
}}track.addStepListener$java_beans_PropertyChangeListener(trackView);
if (Clazz.instanceOf(trackView, "org.opensourcephysics.cabrillo.tracker.PlotTrackView")) {
var plotView=trackView;
for (var plot, $plot = 0, $$plot = plotView.plots; $plot<$$plot.length&&((plot=($$plot[$plot])),1);$plot++) {
for (var guest, $guest = plot.guests.iterator$(); $guest.hasNext$()&&((guest=($guest.next$())),1);) {
guest.addStepListener$java_beans_PropertyChangeListener(trackView);
}
}
}this.selectedTrack=track;
var step=trackerPanel.getSelectedStep$();
if (step != null  && step.getTrack$() === track  ) trackView.refresh$I$I(step.getFrameNumber$(), 6400);
 else trackView.refresh$I$I(trackerPanel.getFrameNumber$(), 6400);
this.firePropertyChange$S$O$O("trackview", trackView, prevView);
var event=Clazz.new_($I$(17,1).c$$O$S$O$O,[this, "track", null, track]);
var it=this.trackViews.keySet$().iterator$();
while (it.hasNext$()){
this.trackViews.get$O(it.next$()).propertyChange$java_beans_PropertyChangeEvent(event);
}
(this.getLayout$()).show$java_awt_Container$S(this, name);
$I$(18).repaintT$java_awt_Component(this);
}});

Clazz.newMeth(C$, 'refresh$',  function () {
if ($I$(19).timeLogEnabled) $I$(19,"logTime$S",[this.getClass$().getSimpleName$() + this.hashCode$() + " refresh" ]);
this.refreshing=true;
var selectedTrack=this.getSelectedTrack$();
var defaultTrack=null;
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var newViews=Clazz.new_($I$(1,1));
this.removeAll$();
this.tracks.clear$();
this.trackComboBox.removeAllItems$();
for (var track, $track = trackerPanel.getTracksTemp$().iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
if (!track.isViewable$()) continue;
if (defaultTrack == null ) {
defaultTrack=track;
}var trackView=this.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track);
if (trackView == null ) trackView=this.createTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track);
trackView.refreshGUI$();
newViews.put$O$O(track, trackView);
var trackName=track.getName$S("point");
var item=Clazz.array(java.lang.Object, -1, [trackView.getIcon$(), trackName]);
this.trackComboBox.addItem$O(item);
this.add$java_awt_Component$O(trackView, trackName);
this.tracks.put$O$O(item, track);
}
trackerPanel.clearTemp$();
this.validate$();
this.trackViews=newViews;
this.refreshing=false;
this.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(selectedTrack == null  || this.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(selectedTrack) == null   ? defaultTrack : selectedTrack);
this.trackComboBox.setToolTipText$S($I$(14).getString$S("TrackChooserTView.DropDown.Tooltip"));
});

Clazz.newMeth(C$, 'getMenuItems$',  function () {
});

Clazz.newMeth(C$, 'isTrackViewDisplayed$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
return (track === this.getSelectedTrack$()  && $I$(2).isSelectedView$org_opensourcephysics_cabrillo_tracker_TView(this) );
});

Clazz.newMeth(C$, 'init$',  function () {
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(20,1)));
this.cleanup$();
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
trackerPanel.addListeners$SA$java_beans_PropertyChangeListener(C$.panelProps, this);
for (var track, $track = trackerPanel.getTracksTemp$().iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
track.addListenerNCF$java_beans_PropertyChangeListener(this);
}
trackerPanel.clearTemp$();
});

Clazz.newMeth(C$, 'cleanup$',  function () {
if (this.panelID == null ) return;
this.getPanel$().removeListeners$SA$java_beans_PropertyChangeListener(C$.panelProps, this);
for (var t, $t = $I$(21).getValues$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
t.removeListenerNCF$java_beans_PropertyChangeListener(this);
}
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.cleanup$();
if (this.trackViews == null ) return;
for (var next, $next = this.trackViews.entrySet$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.getValue$().dispose$();
next.getKey$().removeListenerNCF$java_beans_PropertyChangeListener(this);
}
this.trackViews.clear$();
this.tracks.clear$();
this.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(null);
this.remove$java_awt_Component(this.noData);
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'getTrackerPanel$',  function () {
return this.getPanel$();
});

Clazz.newMeth(C$, 'getSelectedTrack$',  function () {
return this.selectedTrack;
});

Clazz.newMeth(C$, 'setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
if (track == null ) {
return;
}var trackerPanel=this.getPanel$();
if (!trackerPanel.containsTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track) || !track.isViewable$() ) return;
if (track === this.selectedTrack  && this.tracks.get$O(this.trackComboBox.getSelectedItem$()) === track  ) {
this.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(this.selectedTrack).refresh$I$I(trackerPanel.getFrameNumber$(), 6656);
return;
}var it=this.tracks.keySet$().iterator$();
if (!it.hasNext$()) {
this.selectedTrack=track;
}while (it.hasNext$()){
var item=it.next$();
if (this.tracks.get$O(item) === track ) {
track.removeListenerNCF$java_beans_PropertyChangeListener(this);
track.addListenerNCF$java_beans_PropertyChangeListener(this);
this.trackComboBox.setSelectedItem$O(item);
break;
}}
});

Clazz.newMeth(C$, 'getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
return (this.trackViews == null  ? null : this.trackViews.get$O(track));
});

Clazz.newMeth(C$, 'getToolBarComponents$',  function () {
this.toolbarComponents.clear$();
var trackView=this.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(this.getSelectedTrack$());
if (trackView != null ) {
this.toolbarComponents.add$O(trackView.getViewButton$());
}if (this.trackComboBox.getItemCount$() > 0) {
this.toolbarComponents.add$O(this.trackComboBox);
}if (trackView != null ) {
this.toolbarComponents.addAll$java_util_Collection(trackView.getToolBarComponents$());
} else {
switch (this.getViewType$()) {
case 1:
this.viewTypeLabel.setText$S($I$(14).getString$S("TFrame.View.Table"));
break;
case 0:
this.viewTypeLabel.setText$S($I$(14).getString$S("TFrame.View.Plot"));
break;
default:
}
this.toolbarComponents.add$O(this.viewTypeLabel);
}return this.toolbarComponents;
});

Clazz.newMeth(C$, 'isCustomState$',  function () {
if (this.trackViews == null ) return false;
for (var it=this.trackViews.keySet$().iterator$(); it.hasNext$(); ) {
var view=this.trackViews.get$O(it.next$());
if (view.isCustomState$()) return true;
}
return false;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (C$.ignoreRefresh) return;
var track;
var view;
var panel=this.getPanel$();
switch (e.getPropertyName$()) {
case "track":
track=e.getOldValue$();
if (track != null ) {
track.removeListenerNCF$java_beans_PropertyChangeListener(this);
view=(this.trackViews == null  ? null : this.trackViews.get$O(track));
if (view != null ) {
view.dispose$();
this.trackViews.remove$O(track);
}}this.refresh$();
if (this.frame != null ) $I$(18).repaintT$java_awt_Component(this.frame);
track=e.getNewValue$();
if (track != null ) this.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
break;
case "clear":
for (var t, $t = $I$(21).getValues$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
t.removeListenerNCF$java_beans_PropertyChangeListener(this);
if ((view=this.trackViews.get$O(t)) != null ) {
view.dispose$();
this.trackViews.remove$O(t);
}}
this.refresh$();
if (this.frame != null ) $I$(18).repaintT$java_awt_Component(this.frame);
break;
case "transform":
if ((track=this.getSelectedTrack$()) != null  && (view=this.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track)) != null  ) {
if (Clazz.instanceOf(track, "org.opensourcephysics.cabrillo.tracker.ParticleModel")) {
var coords=panel.getCoords$();
if (coords.isAdjusting$()) return;
}var step=track.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel.getSelectedPoint$(), panel);
view.refresh$I$I(step == null  ? panel.getFrameNumber$() : step.getFrameNumber$(), 6912);
}break;
case "data":
if (Integer.valueOf$I(8585216).equals$O(e.getOldValue$())) {
if (Clazz.instanceOf(this, "org.opensourcephysics.cabrillo.tracker.PlotTView")) {
for (var nextView, $nextView = this.trackViews.values$().iterator$(); $nextView.hasNext$()&&((nextView=($nextView.next$())),1);) {
var plotView=nextView;
for (var plot, $plot = 0, $$plot = plotView.plots; $plot<$$plot.length&&((plot=($$plot[$plot])),1);$plot++) {
plot.refreshDecimalSeparators$();
}
}
}}view=null;
if ((track=this.getSelectedTrack$()) != null  && (view=this.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track)) != null  ) {
var frameNo=panel.getFrameNumber$();
if (e.getNewValue$() === Boolean.FALSE ) {
view.setClipAdjusting$I$Z(frameNo, false);
view.refresh$I$I(frameNo, 134217728);
} else if (e.getNewValue$() === Boolean.TRUE ) {
view.setClipAdjusting$I$Z(frameNo, true);
} else {
view.refresh$I$I(frameNo, 7168);
}}break;
case "function":
case "radian_angles":
for (var t, $t = panel.getTracks$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
if ((view=this.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(t)) != null ) {
view.refreshGUI$();
view.refresh$I$I(panel.getFrameNumber$(), 7424);
}}
break;
case "stepnumber":
if ((track=this.getSelectedTrack$()) != null  && (view=this.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track)) != null  ) {
view.refresh$I$I(panel.getFrameNumber$(), 8650752);
}break;
case "image":
if ((track=this.getSelectedTrack$()) != null  && (view=this.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(track)) != null   && (track.ttype == 3 || track.ttype == 7 ) ) {
view.refresh$I$I(panel.getFrameNumber$(), 5376);
}break;
case "name":
case "color":
case "footprint":
track=e.getSource$();
if (this.trackViews != null ) {
view=this.trackViews.get$O(track);
if (view != null ) view.trackIcon=null;
}this.refresh$();
}
});

Clazz.newMeth(C$, 'getTrack$S',  function (name) {
return this.getPanel$().getTrackByName$Class$S(Clazz.getClass($I$(21)), name);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'repaint$',  function () {
if (this.panelID != null  && this.getPanel$().isPaintable$() ) C$.superclazz.prototype.repaint$.apply(this, []);
});

Clazz.newMeth(C$, 'toString',  function () {
return "[" + this.getClass$().getSimpleName$() + " " + this.panelID + " selected=" + this.selectedTrack + " views=" + (this.trackViews == null  ? 0 : this.trackViews.size$()) + " tracks=" + this.tracks.size$() + "]" ;
});

C$.$static$=function(){C$.$static$=0;
C$.panelProps=Clazz.array(String, -1, ["clear", "transform", "stepnumber", "image", "data", "format", "radian_angles", "function"]);
C$.ignoreRefresh=false;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
