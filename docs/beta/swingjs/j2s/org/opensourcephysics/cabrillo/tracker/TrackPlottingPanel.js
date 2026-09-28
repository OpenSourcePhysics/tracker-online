(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},p$2={},I$=[[0,'org.opensourcephysics.tools.FontSizer','java.awt.Cursor','org.opensourcephysics.cabrillo.tracker.TTrack','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.display.HighlightableDataset','java.util.ArrayList','java.util.HashMap','javax.swing.JTextField','java.awt.Rectangle','java.util.LinkedHashMap','java.util.BitSet','org.opensourcephysics.cabrillo.tracker.TCoordinateStringBuilder',['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel','.PlotMouseListener'],'java.awt.event.KeyAdapter',['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel','.ClickableAxes'],'org.opensourcephysics.display.TeXParser','org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.cabrillo.tracker.PointMass','org.opensourcephysics.cabrillo.tracker.Vector',['org.opensourcephysics.cabrillo.tracker.TrackerIO','.ComponentImage'],'org.opensourcephysics.cabrillo.tracker.TViewChooser','org.opensourcephysics.display.MeasuredImage','org.opensourcephysics.display.DisplayRes','javax.swing.JPopupMenu','javax.swing.JCheckBoxMenuItem','javax.swing.JMenuItem','javax.swing.AbstractAction','org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel','java.util.TreeSet','org.opensourcephysics.display.GUIUtils','org.opensourcephysics.display.Dataset','org.opensourcephysics.cabrillo.tracker.TrackView','javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem','javax.swing.BorderFactory',['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel','.Loader'],'org.opensourcephysics.tools.DataTool','org.opensourcephysics.display.DatasetManager','org.opensourcephysics.tools.DataRefreshTool','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.tools.LocalJob','org.opensourcephysics.controls.OSPLog']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrackPlottingPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.PlottingPanel', 'org.opensourcephysics.tools.Tool');
C$.$classes$=[['ClickableAxes',0],['PlotMouseListener',0],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dataset=Clazz.new_($I$(6,1));
this.guests=Clazz.new_($I$(7,1));
this.guestDatasets=Clazz.new_($I$(8,1));
this.xIndex=-1;
this.yIndex=0;
this.$font=Clazz.new_($I$(9,1)).getFont$();
this.hitRect=Clazz.new_($I$(10,1).c$$I$I,[24, 24]);
this.linesItemSelected=true;
this.pointsItemSelected=true;
this.htVarToItem=Clazz.new_($I$(11,1));
this.selectionEnabled=true;
this.bsFrameHighlights=Clazz.new_($I$(12,1));
},1);

C$.$fields$=[['Z',['isCustom','isZoomMode','linesItemSelected','pointsItemSelected','selectionEnabled'],'I',['trackID','xIndex','yIndex','datasetCount'],'S',['xName','yName','xLabel','yLabel','title'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','datasetManager','org.opensourcephysics.display.DatasetManager','dataset','org.opensourcephysics.display.HighlightableDataset','guests','java.util.ArrayList','guestDatasets','java.util.HashMap','xPopup','javax.swing.JPopupMenu','+yPopup','+popup','linesItem','javax.swing.JCheckBoxMenuItem','+pointsItem','dataToolItem','javax.swing.JMenuItem','xChoices','javax.swing.JRadioButtonMenuItem[]','+yChoices','xGroup','javax.swing.ButtonGroup','+yGroup','dataFunctionListener','javax.swing.Action','+guestListener','copyImageItem','javax.swing.JMenuItem','+dataBuilderItem','+showXZeroItem','+showYZeroItem','+selectPointsItem','+deselectPointsItem','+algorithmItem','+printItem','+helpItem','+mergeYScalesItem','+guestsItem','xListener','java.awt.event.ItemListener','+yListener','plotTrackView','org.opensourcephysics.cabrillo.tracker.PlotTrackView','$font','java.awt.Font','hitRect','java.awt.Rectangle','plotAxes','org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel.ClickableAxes','$mouseListener','org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel.PlotMouseListener','playerListener','java.beans.PropertyChangeListener','clickedStep','org.opensourcephysics.cabrillo.tracker.Step','coordStringBuilder','org.opensourcephysics.cabrillo.tracker.TCoordinateStringBuilder','htVarToItem','java.util.Map','bsFrameHighlights','java.util.BitSet']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_display_DatasetManager',  function (track, data) {
;C$.superclazz.c$$S$S$S.apply(this,[" ", " ", " "]);C$.$init$.apply(this);
this.displayCoordsOnMouseMoved=false;
this.frame=track.tframe;
this.panelID=track.tp.getID$();
this.trackID=track.getID$();
this.datasetManager=data;
this.dataset.setConnected$Z(true);
this.dataset.setMarkerShape$I(2);
this.coordStringBuilder=Clazz.new_($I$(13,1));
this.setCoordinateStringBuilder$org_opensourcephysics_display_axes_CoordinateStringBuilder(this.coordStringBuilder);
this.setVariables$();
this.$mouseListener=Clazz.new_($I$(14,1),[this, null]);
this.addMouseListener$java_awt_event_MouseListener(this.$mouseListener);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this.$mouseListener);
this.addKeyListener$java_awt_event_KeyListener(((P$.TrackPlottingPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackPlottingPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].panelID);
var player=trackerPanel.getPlayer$();
if (!player.isEnabled$()) return;
switch (e.getKeyCode$()) {
case 33:
if (e.isShiftDown$()) {
var n=player.getStepNumber$() - 5;
player.setStepNumber$I(n);
} else player.back$();
break;
case 34:
if (e.isShiftDown$()) {
var n=player.getStepNumber$() + 5;
player.setStepNumber$I(n);
} else player.step$();
break;
case 36:
player.setStepNumber$I(0);
break;
case 35:
var clip=player.getVideoClip$();
player.setStepNumber$I(clip.getStepCount$() - 1);
break;
case 127:
trackerPanel.deleteSelectedSteps$();
if (trackerPanel.getSelectedPoint$() != null  && trackerPanel.getSelectingPanelID$() === trackerPanel.getID$()  ) {
trackerPanel.deletePoint$org_opensourcephysics_media_core_TPoint(trackerPanel.getSelectedPoint$());
}return;
}
});
})()
), Clazz.new_($I$(15,1),[this, null],P$.TrackPlottingPanel$1)));
}, 1);

Clazz.newMeth(C$, 'initAxes$',  function () {
this.setAxes$org_opensourcephysics_display_axes_DrawableAxes(this.plotAxes=Clazz.new_($I$(16,1).c$$org_opensourcephysics_display_PlottingPanel,[this, null, this]));
});

Clazz.newMeth(C$, 'send$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool',  function (job, noReply) {
this.receiveToolReply$org_opensourcephysics_tools_Job(job);
$I$(5).repaintT$java_awt_Component(this);
});

Clazz.newMeth(C$, 'getDataset$',  function () {
return this.dataset;
});

Clazz.newMeth(C$, 'setXLabel$S',  function (label) {
this.dataset.setXYColumnNames$S$S(label, this.yLabel);
this.xLabel=label;
var xStr=$I$(17).removeSubscripting$S(this.xLabel) + "=";
var yStr="  " + $I$(17).removeSubscripting$S(this.yLabel) + "=" ;
this.getCoordinateStringBuilder$().setCoordinateLabels$S$S(xStr, yStr);
var track=$I$(3).getTrack$I(this.trackID);
if (track.tp != null ) {
var units=track.tp.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(track, label);
if (!"".equals$O(units)) {
label+=" (" + units.trim$() + ")" ;
}}C$.superclazz.prototype.setXLabel$S.apply(this, [label]);
});

Clazz.newMeth(C$, 'getXLabel$',  function () {
return this.xLabel;
});

Clazz.newMeth(C$, 'setYLabel$S',  function (label) {
this.yLabel=label;
this.dataset.setXYColumnNames$S$S(this.xLabel, label);
var xStr=$I$(17).removeSubscripting$S(this.xLabel) + "=";
var yStr="  " + $I$(17).removeSubscripting$S(this.yLabel) + "=" ;
this.getCoordinateStringBuilder$().setCoordinateLabels$S$S(xStr, yStr);
var track=$I$(3).getTrack$I(this.trackID);
if (track.tp != null ) {
var units=track.tp.getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S(track, label);
if (!"".equals$O(units)) {
label+=" (" + units.trim$() + ")" ;
}}C$.superclazz.prototype.setYLabel$S.apply(this, [label]);
});

Clazz.newMeth(C$, 'getYLabel$',  function () {
return this.yLabel;
});

Clazz.newMeth(C$, 'setTitle$S',  function (title) {
C$.superclazz.prototype.setTitle$S.apply(this, [title]);
this.title=title;
this.dataset.setName$S(title);
});

Clazz.newMeth(C$, 'getTitle$',  function () {
return this.title;
});

Clazz.newMeth(C$, 'addGuest$org_opensourcephysics_cabrillo_tracker_TTrack',  function (guest) {
if (guest == null  || this.guests.contains$O(guest) ) return;
this.guests.add$O(guest);
this.isCustom=true;
var guestDataset=this.guestDatasets.get$O(guest);
if (guestDataset == null ) {
guestDataset=Clazz.new_($I$(6,1));
this.guestDatasets.put$O$O(guest, guestDataset);
}guest.removeStepListener$java_beans_PropertyChangeListener(this.plotTrackView);
guest.addStepListener$java_beans_PropertyChangeListener(this.plotTrackView);
});

Clazz.newMeth(C$, 'removeGuest$org_opensourcephysics_cabrillo_tracker_TTrack',  function (guest) {
this.guests.remove$O(guest);
guest.removeStepListener$java_beans_PropertyChangeListener(this.plotTrackView);
});

Clazz.newMeth(C$, 'scale$java_util_ArrayList',  function (list) {
if (this.autoscaleXMin && !this.autoscaleXMax ) {
this.scaleXMin$();
} else if (!this.autoscaleXMin && this.autoscaleXMax ) {
this.scaleXMax$();
} else if (this.autoscaleXMin && this.autoscaleXMax ) {
this.scaleX$java_util_ArrayList(list);
}if (this.autoscaleYMin && !this.autoscaleYMax ) {
this.scaleYMin$();
} else if (!this.autoscaleYMin && this.autoscaleYMax ) {
this.scaleYMax$();
} else if (this.autoscaleYMin && this.autoscaleYMax ) {
this.scaleY$java_util_ArrayList(list);
}});

Clazz.newMeth(C$, 'getPopupMenu$',  function () {
if (!$I$(18).allowMenuRefresh) return null;
if (this.popupmenu == null ) {
this.buildPopupMenu$();
}this.mergeYScalesItem.setText$S($I$(4).getString$S("TrackPlottingPanel.Popup.MenuItem.MergeYAxes"));
this.linesItem.setText$S($I$(4).getString$S("TrackPlottingPanel.Popup.MenuItem.Lines"));
this.pointsItem.setText$S($I$(4).getString$S("TrackPlottingPanel.Popup.MenuItem.Points"));
this.selectPointsItem.setText$S($I$(4).getString$S("MainTView.Popup.MenuItem.Select"));
this.deselectPointsItem.setText$S($I$(4).getString$S("MainTView.Popup.MenuItem.Deselect"));
this.printItem.setText$S($I$(4).getString$S("TActions.Action.Print"));
this.copyImageItem.setText$S($I$(4).getString$S("TMenuBar.Menu.CopyImage"));
this.dataBuilderItem.setText$S($I$(4).getString$S("TView.Menuitem.Define"));
this.dataToolItem.setText$S($I$(4).getString$S("TableTrackView.Popup.MenuItem.Analyze"));
this.algorithmItem.setText$S($I$(4).getString$S("Popup.MenuItem.Algorithm"));
this.helpItem.setText$S($I$(4).getString$S("Tracker.Popup.MenuItem.Help"));
this.guestsItem.setText$S($I$(4).getString$S("TrackPlottingPanel.Popup.Menu.CompareWith") + "...");
if (this.plotTrackView.getPlotCount$() > 1) {
this.popupmenu.add$java_awt_Component$I(this.mergeYScalesItem, 3);
} else this.popupmenu.remove$java_awt_Component(this.mergeYScalesItem);
this.popupmenu.remove$java_awt_Component(this.showXZeroItem);
this.popupmenu.remove$java_awt_Component(this.showYZeroItem);
if (this.getXMin$() * this.getXMax$() > 0 ) {
var s=$I$(17,"removeSubscripting$S",[this.dataset.getColumnName$I(0)]);
s=$I$(4).getString$S("TrackPlottingPanel.Popup.MenuItem.ShowZero") + " " + s + "=0" ;
this.showXZeroItem.setText$S(s);
this.popupmenu.insert$java_awt_Component$I(this.showXZeroItem, this.popupmenu.getComponentIndex$java_awt_Component(this.scaleItem));
}if (this.getYMin$() * this.getYMax$() > 0 ) {
var s=$I$(17,"removeSubscripting$S",[this.dataset.getColumnName$I(1)]);
s=$I$(4).getString$S("TrackPlottingPanel.Popup.MenuItem.ShowZero") + " " + s + "=0" ;
this.showYZeroItem.setText$S(s);
this.popupmenu.insert$java_awt_Component$I(this.showYZeroItem, this.popupmenu.getComponentIndex$java_awt_Component(this.scaleItem));
}var track=$I$(3).getTrack$I(this.trackID);
var type=track.ttype == 5 ? Clazz.getClass($I$(19)) : track.ttype == 9 ? Clazz.getClass($I$(20)) : track.getClass$();
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var tracks=trackerPanel.getDrawablesTemp$Class(type);
tracks.removeAll$java_util_Collection(trackerPanel.calibrationTools);
tracks.remove$O(track);
this.guestsItem.setEnabled$Z(!tracks.isEmpty$());
tracks.clear$();
$I$(1,"setFonts$O$I",[this.popup, $I$(1).getLevel$()]);
this.algorithmItem.setEnabled$Z(track.ttype == 5);
return this.popupmenu;
});

Clazz.newMeth(C$, 'snapshot$',  function () {
var image=Clazz.new_([$I$(22).getChooserParent$java_awt_Container(this)],$I$(21,1).c$$java_awt_Component).getImage$();
var w=image.getWidth$();
var h=image.getHeight$();
if ((w == 0) || (h == 0) ) {
return;
}var mi=Clazz.new_($I$(23,1).c$$java_awt_image_BufferedImage$D$D$D$D,[image, 0, w, h, 0]);
var frame=null;
try {
var type=Clazz.forName("org.opensourcephysics.frames.ImageFrame");
var constructors=type.getConstructors$();
for (var i=0; i < constructors.length; i++) {
var parameters=constructors[i].getParameterTypes$();
if (parameters.length == 1 && parameters[0] === Clazz.getClass($I$(23))  ) {
frame=constructors[i].newInstance$OA(Clazz.array(java.lang.Object, -1, [mi]));
break;
}}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
if (frame == null ) return;
frame.setTitle$S($I$(24).getString$S("Snapshot.Title"));
frame.setDefaultCloseOperation$I(2);
frame.setKeepHidden$Z(false);
$I$(1,"setFonts$O$I",[frame, $I$(1).getLevel$()]);
frame.pack$();
frame.setVisible$Z(true);
});

Clazz.newMeth(C$, 'buildPopupMenu$',  function () {
if (this.popup == null ) {
this.popup=((P$.TrackPlottingPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackPlottingPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JPopupMenu'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
if (!vis) this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].zoomBox.hide$();
});
})()
), Clazz.new_($I$(25,1),[this, null],P$.TrackPlottingPanel$2));
this.setPopupMenu$javax_swing_JPopupMenu(this.popup);
C$.superclazz.prototype.buildPopupMenu$.apply(this, []);
this.linesItem=Clazz.new_($I$(26,1).c$$S$Z,["lines", this.linesItemSelected]);
this.pointsItem=Clazz.new_($I$(26,1).c$$S$Z,["points", this.pointsItemSelected]);
this.dataToolItem=Clazz.new_($I$(27,1).c$$S,["datatool"]);
this.linesItem.addActionListener$java_awt_event_ActionListener(((P$.TrackPlottingPanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackPlottingPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].dataset.setConnected$Z(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].linesItem.isSelected$());
for (var next, $next = this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].guests.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var nextDataset=this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].guestDatasets.get$O(next);
nextDataset.setConnected$Z(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].linesItem.isSelected$());
}
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].isCustom=true;
$I$(5).repaintT$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel']);
});
})()
), Clazz.new_(P$.TrackPlottingPanel$3.$init$,[this, null])));
this.linesItem.setSelected$Z(true);
this.pointsItem.addActionListener$java_awt_event_ActionListener(((P$.TrackPlottingPanel$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackPlottingPanel$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].pointsItem.isSelected$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].dataset.setMarkerShape$I(2);
for (var next, $next = this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].guests.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var nextDataset=this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].guestDatasets.get$O(next);
nextDataset.setMarkerShape$I(2);
}
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].dataset.setMarkerShape$I(0);
for (var next, $next = this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].guests.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var nextDataset=this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].guestDatasets.get$O(next);
nextDataset.setMarkerShape$I(0);
}
}this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].isCustom=true;
$I$(5).repaintT$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel']);
});
})()
), Clazz.new_(P$.TrackPlottingPanel$4.$init$,[this, null])));
this.pointsItem.setSelected$Z(true);
this.showXZeroItem=Clazz.new_($I$(27,1));
this.showXZeroItem.addActionListener$java_awt_event_ActionListener(((P$.TrackPlottingPanel$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackPlottingPanel$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].showZeroOnAxis$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], ["x"]);
});
})()
), Clazz.new_(P$.TrackPlottingPanel$5.$init$,[this, null])));
this.showYZeroItem=Clazz.new_($I$(27,1));
this.showYZeroItem.addActionListener$java_awt_event_ActionListener(((P$.TrackPlottingPanel$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackPlottingPanel$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].showZeroOnAxis$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], ["y"]);
});
})()
), Clazz.new_(P$.TrackPlottingPanel$6.$init$,[this, null])));
this.printItem=Clazz.new_($I$(27,1));
this.printItem.addActionListener$java_awt_event_ActionListener(((P$.TrackPlottingPanel$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackPlottingPanel$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var chooser=this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].getOwner$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], []);
if (chooser != null ) {
Clazz.new_($I$(21,1).c$$java_awt_Component,[chooser]).print$();
}});
})()
), Clazz.new_(P$.TrackPlottingPanel$7.$init$,[this, null])));
this.dataToolItem.addActionListener$java_awt_event_ActionListener(((P$.TrackPlottingPanel$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackPlottingPanel$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].showDataTool$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], []);
});
})()
), Clazz.new_(P$.TrackPlottingPanel$8.$init$,[this, null])));
this.algorithmItem=Clazz.new_($I$(27,1));
this.algorithmItem.addActionListener$java_awt_event_ActionListener(((P$.TrackPlottingPanel$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackPlottingPanel$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var dialog=this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].panelID).getAlgorithmDialog$();
var track=$I$(3).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].trackID);
if (track.ttype == 5) {
dialog.setTargetMass$org_opensourcephysics_cabrillo_tracker_PointMass(track);
}$I$(1,"setFonts$O$I",[dialog, $I$(1).getLevel$()]);
dialog.pack$();
dialog.setVisible$Z(true);
});
})()
), Clazz.new_(P$.TrackPlottingPanel$9.$init$,[this, null])));
var copyImageAction=((P$.TrackPlottingPanel$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackPlottingPanel$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var chooser=this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].getOwner$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], []);
if (chooser != null ) {
Clazz.new_($I$(21,1).c$$java_awt_Component,[chooser]).copyToClipboard$();
}});
})()
), Clazz.new_($I$(28,1),[this, null],P$.TrackPlottingPanel$10));
this.copyImageItem=Clazz.new_($I$(27,1).c$$javax_swing_Action,[copyImageAction]);
this.dataFunctionListener=((P$.TrackPlottingPanel$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackPlottingPanel$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var track=$I$(3).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].trackID);
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].panelID);
trackerPanel.getDataBuilder$().setSelectedPanel$S(track.getName$());
trackerPanel.getDataBuilder$().setVisible$Z(true);
});
})()
), Clazz.new_($I$(28,1),[this, null],P$.TrackPlottingPanel$11));
this.dataBuilderItem=Clazz.new_($I$(27,1));
this.dataBuilderItem.addActionListener$java_awt_event_ActionListener(this.dataFunctionListener);
this.helpItem=Clazz.new_($I$(27,1));
this.helpItem.addActionListener$java_awt_event_ActionListener(((P$.TrackPlottingPanel$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackPlottingPanel$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var c=this.b$['javax.swing.JComponent'].getTopLevelAncestor$.apply(this.b$['javax.swing.JComponent'], []);
if (Clazz.instanceOf(c, "org.opensourcephysics.cabrillo.tracker.TFrame")) {
var frame=c;
frame.showHelp$S$I("plot", 0);
}});
})()
), Clazz.new_(P$.TrackPlottingPanel$12.$init$,[this, null])));
this.mergeYScalesItem=Clazz.new_($I$(27,1));
this.mergeYScalesItem.addActionListener$java_awt_event_ActionListener(((P$.TrackPlottingPanel$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackPlottingPanel$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
switch (this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].plotTrackView.getPlotCount$()) {
case 2:
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].plotTrackView.syncYAxes$org_opensourcephysics_cabrillo_tracker_TrackPlottingPanelA(Clazz.array($I$(29), -1, [this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].plotTrackView.plots[0], this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].plotTrackView.plots[1]]));
break;
case 3:
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].plotTrackView.syncYAxes$org_opensourcephysics_cabrillo_tracker_TrackPlottingPanelA(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].plotTrackView.plots);
break;
}
});
})()
), Clazz.new_(P$.TrackPlottingPanel$13.$init$,[this, null])));
}this.guestsItem=Clazz.new_($I$(27,1));
this.guestsItem.addActionListener$java_awt_event_ActionListener(((P$.TrackPlottingPanel$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackPlottingPanel$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var dialog=this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].panelID).getPlotGuestDialog$org_opensourcephysics_cabrillo_tracker_TrackPlottingPanel(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel']);
dialog.setLocationRelativeTo$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel']);
dialog.setVisible$Z(true);
});
})()
), Clazz.new_(P$.TrackPlottingPanel$14.$init$,[this, null])));
var selectAction=((P$.TrackPlottingPanel$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackPlottingPanel$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].selectAction$O.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], [e.getSource$()]);
});
})()
), Clazz.new_($I$(28,1),[this, null],P$.TrackPlottingPanel$15));
this.selectPointsItem=Clazz.new_($I$(27,1));
this.selectPointsItem.addActionListener$java_awt_event_ActionListener(selectAction);
this.deselectPointsItem=Clazz.new_($I$(27,1));
this.deselectPointsItem.addActionListener$java_awt_event_ActionListener(selectAction);
this.popupmenu.removeAll$();
this.popupmenu.add$javax_swing_JMenuItem(this.zoomInItem);
this.popupmenu.add$javax_swing_JMenuItem(this.zoomOutItem);
this.popupmenu.add$javax_swing_JMenuItem(this.autoscaleItem);
this.popupmenu.add$javax_swing_JMenuItem(this.showYZeroItem);
this.popupmenu.add$javax_swing_JMenuItem(this.showXZeroItem);
this.popupmenu.add$javax_swing_JMenuItem(this.scaleItem);
this.popupmenu.addSeparator$();
this.popupmenu.add$javax_swing_JMenuItem(this.selectPointsItem);
this.popupmenu.add$javax_swing_JMenuItem(this.deselectPointsItem);
this.popupmenu.addSeparator$();
this.popupmenu.add$javax_swing_JMenuItem(this.pointsItem);
this.popupmenu.add$javax_swing_JMenuItem(this.linesItem);
if (this.panelID != null ) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if (trackerPanel.isEnabled$S("edit.copyImage")) {
this.popupmenu.addSeparator$();
this.popupmenu.add$javax_swing_JMenuItem(this.copyImageItem);
this.popupmenu.add$javax_swing_JMenuItem(this.snapshotItem);
}if (trackerPanel.isEnabled$S("plot.compare")) {
this.popupmenu.addSeparator$();
this.popupmenu.add$javax_swing_JMenuItem(this.guestsItem);
}if (trackerPanel.isEnabled$S("data.builder") || trackerPanel.isEnabled$S("data.tool") ) {
this.popupmenu.addSeparator$();
if (trackerPanel.isEnabled$S("data.builder")) this.popupmenu.add$javax_swing_JMenuItem(this.dataBuilderItem);
if (trackerPanel.isEnabled$S("data.tool")) this.popupmenu.add$javax_swing_JMenuItem(this.dataToolItem);
}if (trackerPanel.isEnabled$S("data.algorithm")) {
this.popupmenu.addSeparator$();
this.popupmenu.add$javax_swing_JMenuItem(this.algorithmItem);
}if (trackerPanel.isEnabled$S("file.print")) {
this.popupmenu.addSeparator$();
this.popupmenu.add$javax_swing_JMenuItem(this.printItem);
}}this.popupmenu.addSeparator$();
this.popupmenu.add$javax_swing_JMenuItem(this.helpItem);
});

Clazz.newMeth(C$, 'selectAction$O',  function (source) {
var rect=this.zoomBox.reportZoom$();
var x=this.pixToX$I(rect.x);
var x2=this.pixToX$I(rect.x + rect.width);
var y=this.pixToY$I(rect.y + rect.height);
var y2=this.pixToY$I(rect.y);
var xmin=Math.min(x, x2);
var xmax=Math.max(x, x2);
var ymin=Math.min(y, y2);
var ymax=Math.max(y, y2);
var xPoints=this.dataset.getXPointsRaw$();
var yPoints=this.dataset.getYPointsRaw$();
var len=this.dataset.getIndex$();
var track=$I$(3).getTrack$I(this.trackID);
var frames=Clazz.new_($I$(30,1));
for (var i=0; i < len; i++) {
if (Double.isNaN$D(xPoints[i]) || Double.isNaN$D(yPoints[i]) ) continue;
if (xPoints[i] >= xmin  && xPoints[i] <= xmax   && yPoints[i] >= ymin   && yPoints[i] <= ymax  ) {
var frame=track.getFrameForData$S$S$DA(this.getXLabel$(), this.getYLabel$(), Clazz.array(Double.TYPE, -1, [xPoints[i], yPoints[i]]));
if (frame >= 0) {
frames.add$O(Integer.valueOf$I(frame));
}}}
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
for (var frame, $frame = frames.iterator$(); $frame.hasNext$()&&((frame=($frame.next$()).intValue$()),1);) {
var step=track.getStep$I(frame);
if (source === this.selectPointsItem ) trackerPanel.selectedSteps.add$org_opensourcephysics_cabrillo_tracker_Step(step);
 else trackerPanel.selectedSteps.remove$O(step);
step.erase$();
}
this.fireRepaint$org_opensourcephysics_cabrillo_tracker_TTrack(track);
});

Clazz.newMeth(C$, 'findViewRect$',  function () {
var c=$I$(31).getParentViewport$java_awt_Container(this);
var rect=(c == null  ? C$.superclazz.prototype.findViewRect$.apply(this, []) : c.getViewRect$());
var bounds=this.getBounds$();
rect=rect.intersection$java_awt_Rectangle(bounds);
rect.y-=bounds.y;
return rect;
});

Clazz.newMeth(C$, 'showZeroOnAxis$S',  function (axis) {
if (axis.equals$O("x")) {
if (this.xmin * this.xmax > 0 ) {
if (this.xmax > 0 ) this.xmin=0;
 else this.xmax=0;
this.setPreferredMinMax$D$D$D$D(this.xmin, this.xmax, this.ymin, this.ymax);
$I$(5).repaintT$java_awt_Component(this);
this.isCustom=true;
}} else {
if (this.ymin * this.ymax > 0 ) {
if (this.ymax > 0 ) this.ymin=0;
 else this.ymax=0;
this.setPreferredMinMax$D$D$D$D(this.xmin, this.xmax, this.ymin, this.ymax);
$I$(5).repaintT$java_awt_Component(this);
this.isCustom=true;
}}});

Clazz.newMeth(C$, 'scaleXMin$',  function () {
var newXMin=1.7976931348623157E308;
var dataset=this.getDataset$();
if (dataset != null  && dataset.isMeasured$() ) {
if (!Double.isNaN$D(dataset.getXMin$())) {
newXMin=Math.min(newXMin, dataset.getXMin$());
}if (newXMin == this.xmaxPreferred ) {
newXMin=0.9 * newXMin - 0.5;
}var range=this.xmaxPreferred - newXMin;
this.xminPreferred=newXMin - this.autoscaleMargin * range;
}if (!Double.isNaN$D(this.xfloor)) {
this.xminPreferred=Math.min(this.xfloor, this.xminPreferred);
}});

Clazz.newMeth(C$, 'scaleXMax$',  function () {
var newXMax=-1.7976931348623157E308;
var dataset=this.getDataset$();
if (dataset != null  && dataset.isMeasured$() ) {
if (!Double.isNaN$D(dataset.getXMax$())) {
newXMax=Math.max(newXMax, dataset.getXMax$());
}if (this.xminPreferred == newXMax ) {
newXMax=1.1 * newXMax + 0.5;
}var range=newXMax - this.xminPreferred;
this.xmaxPreferred=newXMax + this.autoscaleMargin * range;
}if (!Double.isNaN$D(this.xceil)) {
this.xmaxPreferred=Math.max(this.xceil, this.xmaxPreferred);
}});

Clazz.newMeth(C$, 'scaleYMin$',  function () {
var newYMin=1.7976931348623157E308;
var range=0;
var dataset=this.getDataset$();
if (dataset != null  && dataset.isMeasured$() ) {
if (!Double.isNaN$D(dataset.getYMin$())) {
newYMin=Math.min(newYMin, dataset.getYMin$());
}if (newYMin == this.ymaxPreferred ) {
newYMin=0.9 * newYMin - 0.5;
}range=this.ymaxPreferred - newYMin;
this.yminPreferred=newYMin - this.autoscaleMargin * range;
}if (!Double.isNaN$D(this.yfloor)) {
this.yminPreferred=Math.min(this.yfloor, this.yminPreferred);
}});

Clazz.newMeth(C$, 'scaleYMax$',  function () {
var newYMax=-1.7976931348623157E308;
var dataset=this.getDataset$();
var range=0;
if (dataset != null  && dataset.isMeasured$() ) {
if (!Double.isNaN$D(dataset.getYMax$())) {
newYMax=Math.max(newYMax, dataset.getYMax$());
}if (this.yminPreferred == newYMax ) {
newYMax=1.1 * newYMax + 0.5;
}range=newYMax - this.yminPreferred;
this.ymaxPreferred=newYMax + this.autoscaleMargin * range;
}if (!Double.isNaN$D(this.yceil)) {
this.ymaxPreferred=Math.max(this.yceil, this.ymaxPreferred);
}});

Clazz.newMeth(C$, 'getOwner$',  function () {
return this.plotTrackView.getOwner$();
});

Clazz.newMeth(C$, 'plotData$',  function () {
var track=$I$(3).getTrack$I(this.trackID);
var lp=(track.ttype == 3 ? track : null);
if (lp != null ) {
if (lp.datasetIndex != this.plotTrackView.myDatasetIndex) {
this.datasetManager=lp.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(track.tp, this.plotTrackView.myDatasetIndex);
}}this.removeDrawables$Class(Clazz.getClass($I$(32)));
var xData;
if (this.xIndex == -1) xData=this.datasetManager.getDataset$I(0);
 else xData=this.datasetManager.getDataset$I(this.xIndex);
var yData=this.datasetManager.getDataset$I(this.yIndex);
var xTitle=xData.getColumnName$I(this.xIndex >= 0 ? 1 : 0);
var yTitle=yData.getColumnName$I(1);
this.setTitle$S(track.getName$() + " (" + xTitle + ", " + yTitle + ")" );
this.setXLabel$S(xTitle);
this.setYLabel$S(yTitle);
var xIsAngle=xTitle.startsWith$S($I$(18).THETA) || xTitle.startsWith$S($I$(18).OMEGA) || xTitle.startsWith$S($I$(18).ALPHA)  ;
var yIsAngle=yTitle.startsWith$S($I$(18).THETA) || yTitle.startsWith$S($I$(18).OMEGA) || yTitle.startsWith$S($I$(18).ALPHA)  ;
var degrees=(this.panelID != null  && track.tp != null   && !track.tp.isAnglesInRadians$() );
this.coordStringBuilder.setUnitsAndPatterns$org_opensourcephysics_cabrillo_tracker_TTrack$S$S(track, xTitle, yTitle);
this.refreshDataset$org_opensourcephysics_display_HighlightableDataset$org_opensourcephysics_display_DatasetManager$Z$Z$Z(this.dataset, this.datasetManager, xIsAngle, yIsAngle, degrees);
this.addDrawable$org_opensourcephysics_display_Drawable(this.dataset);
var n=this.guests.size$();
if (n > 0) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var tracks=trackerPanel.getTracks$();
for (var i=n; --i >= 0; ) {
if ((track=this.guests.get$I(i)) != null  && trackerPanel.getTrack$S$java_util_ArrayList(track.getName$(), tracks) == null  ) {
this.guests.remove$I(i);
--n;
}}
tracks.clear$();
if (n > 0 && track != null  ) {
for (var i=0; i < n; i++) {
track=this.guests.get$I(i);
var manager=track.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(track.tp, this.plotTrackView.myDatasetIndex);
var dataset=this.guestDatasets.get$O(track);
dataset.setMarkerColor$java_awt_Color(track.getColor$());
dataset.setHighlightColor$java_awt_Color(track.getColor$());
this.refreshDataset$org_opensourcephysics_display_HighlightableDataset$org_opensourcephysics_display_DatasetManager$Z$Z$Z(dataset, manager, xIsAngle, yIsAngle, degrees);
this.addDrawable$org_opensourcephysics_display_Drawable(dataset);
}
}}if (lp != null ) return;
var bsSteps=this.bsFrameHighlights;
track=$I$(3).getTrack$I(this.trackID);
if (track != null  && !track.dataFrames.isEmpty$() ) {
var frameNum=bsSteps.nextSetBit$I(0);
if (bsSteps.cardinality$() != 1 || track.dataFrames.size$() <= frameNum  || (track.dataFrames.get$I(frameNum)).$c() !== frameNum  ) {
bsSteps=Clazz.new_($I$(12,1));
var dataIndex=0;
var end=track.dataFrames.size$();
 outer : for (; frameNum >= 0; frameNum=this.bsFrameHighlights.nextSetBit$I(frameNum + 1)) {
for (; dataIndex < end; dataIndex++) {
var k=(track.dataFrames.get$I(dataIndex)).$c();
if (k == frameNum) {
bsSteps.set$I(dataIndex);
continue outer;
}}
}
}}this.dataset.setHighlights$java_util_BitSet(bsSteps);
var plotIndex=-1;
if (bsSteps.cardinality$() == 1) {
plotIndex=bsSteps.nextSetBit$I(0);
}this.showPlotCoordinates$I(plotIndex);
});

Clazz.newMeth(C$, 'refreshDataset$org_opensourcephysics_display_HighlightableDataset$org_opensourcephysics_display_DatasetManager$Z$Z$Z',  function (hds, manager, xIsAngle, yIsAngle, degrees) {
var id=manager.hashCode$() & 65535;
hds.setID$I(id + this.xIndex * 100 + this.yIndex * 10);
hds.setConnected$Z(this.dataset.isConnected$());
hds.setMarkerShape$I(this.dataset.getMarkerShape$());
hds.clear$();
var xData=manager.getDataset$I(this.xIndex >= 0 ? this.xIndex : 0);
var yData=manager.getDataset$I(this.yIndex);
xData.setYColumnVisible$Z(true);
yData.setYColumnVisible$Z(true);
var xcol=(this.xIndex >= 0 ? 1 : 0);
var xMean=xData.getMean$I(xcol);
var n;
if (xMean != xMean  || (n=yData.getRowCount$()) == 0 ) return;
var _x=Clazz.array(Double.TYPE, [n]);
var _y=Clazz.array(Double.TYPE, [n]);
for (var i=0; i < n; i++) {
var x=xData.getValueAt$I$I(i, xcol);
var y=yData.getValueAt$I$I(i, 1);
if (x == x ) {
if (xIsAngle && degrees ) {
x*=57.29577951308232;
}if (y == y  && yIsAngle  && degrees ) {
y*=57.29577951308232;
}} else {
x=xMean;
y=NaN;
}_x[i]=x;
_y[i]=y;
}
hds.append$DA$DA(_x, _y);
});

Clazz.newMeth(C$, 'showPlotCoordinates$I',  function (index) {
var msg="";
if (index >= 0 && this.dataset.getIndex$() > index ) {
var x=this.dataset.getX$I(index);
var y=this.dataset.getYShifted$I(index);
var track=$I$(3).getTrack$I(this.trackID);
msg=this.coordStringBuilder.getCoordinateString$org_opensourcephysics_media_core_VideoPanel$D$D(track.tp, x, y);
this.setMessage$S$I(msg, 0);
}});

Clazz.newMeth(C$, 'refreshDecimalSeparators$',  function () {
C$.superclazz.prototype.refreshDecimalSeparators$.apply(this, []);
this.coordStringBuilder.refreshDecimalSeparators$();
this.plotAxes.refreshDecimalSeparators$();
});

Clazz.newMeth(C$, 'setPreferredMinMax$D$D$D$D$Z',  function (xmin, xmax, ymin, ymax, invalidateImage) {
this.frame.getTrackerPanelForID$Integer(this.panelID).changed=true;
this.isCustom=true;
C$.superclazz.prototype.setPreferredMinMax$D$D$D$D$Z.apply(this, [xmin, xmax, ymin, ymax, invalidateImage]);
if (this.plotTrackView != null ) this.plotTrackView.syncXAxesTo$org_opensourcephysics_cabrillo_tracker_TrackPlottingPanel(this);
});

Clazz.newMeth(C$, 'setPreferredMinMaxX$D$D',  function (xmin, xmax) {
this.frame.getTrackerPanelForID$Integer(this.panelID).changed=true;
this.isCustom=true;
C$.superclazz.prototype.setPreferredMinMaxX$D$D.apply(this, [xmin, xmax]);
if (this.plotTrackView != null ) this.plotTrackView.syncXAxesTo$org_opensourcephysics_cabrillo_tracker_TrackPlottingPanel(this);
});

Clazz.newMeth(C$, 'setPreferredMinMaxY$D$D',  function (ymin, ymax) {
this.frame.getTrackerPanelForID$Integer(this.panelID).changed=true;
this.isCustom=true;
C$.superclazz.prototype.setPreferredMinMaxY$D$D.apply(this, [ymin, ymax]);
});

Clazz.newMeth(C$, 'requestFocusInWindow$',  function () {
return this.plotAxes.getScaleSetter$().isVisible$() && C$.superclazz.prototype.requestFocusInWindow$.apply(this, []) ;
});

Clazz.newMeth(C$, 'setXVariable$S',  function (name) {
var n=p$2.getVarIndexFromName$S.apply(this, [name]);
switch (n) {
case -2147483648:
break;
case -2:
this.xName=name;
break;
default:
this.xName=name;
if (this.xIndex != n) {
this.xIndex=n;
if (this.plotTrackView != null ) this.plotTrackView.syncXAxesTo$org_opensourcephysics_cabrillo_tracker_TrackPlottingPanel(this);
}break;
}
});

Clazz.newMeth(C$, 'getXVariable$',  function () {
return this.xName;
});

Clazz.newMeth(C$, 'setYVariable$S',  function (name) {
var n=p$2.getVarIndexFromName$S.apply(this, [name]);
switch (n) {
case -2147483648:
break;
case -2:
this.yName=name;
break;
default:
this.yName=name;
if (this.yIndex != n) {
this.yIndex=n;
C$.superclazz.prototype.setPreferredMinMaxY$D$D.apply(this, [NaN, NaN]);
}break;
}
});

Clazz.newMeth(C$, 'getVarIndexFromName$S',  function (name) {
if ((name=$I$(33).trimDefined$S(name)) == null ) return -2147483648;
var ii=this.htVarToItem.get$O(name);
return (ii == null  ? -2 : ii.intValue$());
}, p$2);

Clazz.newMeth(C$, 'getYVariable$',  function () {
return this.yName;
});

Clazz.newMeth(C$, 'setPlotTrackView$org_opensourcephysics_cabrillo_tracker_PlotTrackView',  function (view) {
if (this.playerListener == null ) {
this.playerListener=((P$.TrackPlottingPanel$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackPlottingPanel$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].clickedStep == null ) return;
var pt=this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].clickedStep.getDefaultPoint$();
var trackerPanel=p$2.getPlotPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], []);
trackerPanel.setSelectedPoint$org_opensourcephysics_media_core_TPoint(pt);
if (pt != null ) {
pt.showCoordinates$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
}this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].clickedStep=null;
$I$(5).repaintT$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel']);
});
})()
), Clazz.new_(P$.TrackPlottingPanel$16.$init$,[this, null]));
}this.plotTrackView=view;
var trackerPanel=p$2.getPlotPanel.apply(this, []);
var player=trackerPanel.getPlayer$();
player.removePropertyChangeListener$S$java_beans_PropertyChangeListener("stepnumber", this.playerListener);
player.addPropertyChangeListener$S$java_beans_PropertyChangeListener("stepnumber", this.playerListener);
});

Clazz.newMeth(C$, 'getPlotPanel',  function () {
return this.plotTrackView.frame.getTrackerPanelForID$Integer(this.plotTrackView.panelID);
}, p$2);

Clazz.newMeth(C$, 'createXYPopups$',  function () {
if (this.popup == null ) this.buildPopupMenu$();
this.xPopup=Clazz.new_($I$(25,1));
this.yPopup=Clazz.new_($I$(25,1));
this.createVarItems$();
for (var i=0; i < this.xChoices.length; i++) this.xPopup.add$javax_swing_JMenuItem(this.xChoices[i]);

for (var i=0; i < this.yChoices.length; i++) this.yPopup.add$javax_swing_JMenuItem(this.yChoices[i]);

var def=$I$(4).getString$S("TView.Menuitem.Define");
var item=Clazz.new_($I$(27,1).c$$S,[def]);
item.addActionListener$java_awt_event_ActionListener(this.dataFunctionListener);
this.xPopup.addSeparator$();
this.xPopup.add$javax_swing_JMenuItem(item);
item=Clazz.new_($I$(27,1).c$$S,[def]);
item.addActionListener$java_awt_event_ActionListener(this.dataFunctionListener);
this.yPopup.addSeparator$();
this.yPopup.add$javax_swing_JMenuItem(item);
});

Clazz.newMeth(C$, 'createVarItems$',  function () {
this.xListener=((P$.TrackPlottingPanel$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackPlottingPanel$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].selectionEnabled && e.getStateChange$() == 1 ) {
var item=e.getSource$();
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].setXVariable$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], [item.getText$()]);
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].plotData$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].isCustom=true;
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].panelID).changed=true;
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], []);
}});
})()
), Clazz.new_(P$.TrackPlottingPanel$17.$init$,[this, null]));
this.yListener=((P$.TrackPlottingPanel$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackPlottingPanel$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].selectionEnabled && e.getStateChange$() == 1 ) {
var item=e.getSource$();
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].setYVariable$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], [item.getText$()]);
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].plotData$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].isCustom=true;
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].panelID).changed=true;
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], []);
}});
})()
), Clazz.new_(P$.TrackPlottingPanel$18.$init$,[this, null]));
this.xGroup=Clazz.new_($I$(34,1));
this.yGroup=Clazz.new_($I$(34,1));
this.xChoices=Clazz.array($I$(35), [this.datasetCount + 1]);
this.yChoices=Clazz.array($I$(35), [this.datasetCount]);
var track=$I$(3).getTrack$I(this.trackID);
for (var e, $e = this.htVarToItem.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var name=e.getKey$();
var i=e.getValue$().intValue$() + 1;
var desc=track.getDataDescription$I(i);
if (desc != null  && desc.length$() > 0 ) name+=": " + track.getDataDescription$I(i);
this.xChoices[i]=Clazz.new_($I$(35,1).c$$S,[name]);
this.xChoices[i].setFont$java_awt_Font(this.$font);
this.xChoices[i].setBorder$javax_swing_border_Border($I$(36).createEmptyBorder$I$I$I$I(1, 0, 2, 0));
this.xChoices[i].addItemListener$java_awt_event_ItemListener(this.xListener);
this.xGroup.add$javax_swing_AbstractButton(this.xChoices[i]);
if (i == 0) continue;
--i;
this.yChoices[i]=Clazz.new_($I$(35,1).c$$S,[name]);
this.yChoices[i].setFont$java_awt_Font(this.$font);
this.yChoices[i].setBorder$javax_swing_border_Border($I$(36).createEmptyBorder$I$I$I$I(0, 0, 1, 0));
this.yChoices[i].addItemListener$java_awt_event_ItemListener(this.yListener);
this.yGroup.add$javax_swing_AbstractButton(this.yChoices[i]);
}
});

Clazz.newMeth(C$, 'updateVarSelection$',  function () {
this.selectionEnabled=false;
this.xChoices[this.xIndex + 1].setSelected$Z(true);
this.yChoices[this.yIndex].setSelected$Z(true);
this.selectionEnabled=true;
});

Clazz.newMeth(C$, 'setVariables$',  function () {
this.datasetCount=this.datasetManager.getDatasetsRaw$().size$();
var smaller=this.yChoices == null  ? false : this.datasetCount < this.yChoices.length;
var xName=this.getXVariable$();
var yName=this.getYVariable$();
this.xPopup=this.yPopup=null;
this.htVarToItem.clear$();
var track=$I$(3).getTrack$I(this.trackID);
var foundY=false;
var foundX=false;
var name=$I$(17,"removeSubscripting$S",[track.getDataName$I(0)]);
this.htVarToItem.put$O$O(name, Integer.valueOf$I(-1));
this.xIndex=-1;
if (name == xName) foundX=true;
for (var i=0; i < this.datasetCount; i++) {
name=$I$(17,"removeSubscripting$S",[track.getDataName$I(i + 1)]);
var isXVar=name.equals$O(xName);
var isYVar=name.equals$O(yName);
this.htVarToItem.put$O$O(name, Integer.valueOf$I(i));
if (isXVar) {
this.xIndex=i;
foundX=true;
}if (isYVar) {
this.yIndex=i;
this.yName=yName;
foundY=true;
}}
if (this.xIndex >= this.datasetCount || (smaller && !foundX ) ) this.xIndex=-1;
if (this.yIndex >= this.datasetCount || (smaller && !foundY ) ) this.yIndex=0;
if (!foundX) this.setXVariable$S(xName);
if (!foundY) this.setYVariable$S(yName);
});

Clazz.newMeth(C$, 'padDataset$org_opensourcephysics_display_Dataset$DA',  function (dataset, newXArray) {
var xArray=dataset.getXPointsRaw$();
var yArray=dataset.getYPointsRaw$();
var valueMap=Clazz.new_($I$(8,1));
for (var k=0, n=dataset.getIndex$(); k < n; k++) {
valueMap.put$O$O(Double.valueOf$D(xArray[k]), Double.valueOf$D(yArray[k]));
}
var newYArray=Clazz.array(Double.TYPE, [newXArray.length]);
for (var k=0; k < newXArray.length; k++) {
var x=newXArray[k];
newYArray[k]=valueMap.keySet$().contains$O(Double.valueOf$D(x)) ? (valueMap.get$O(Double.valueOf$D(x))).valueOf() : NaN;
}
dataset.clear$();
dataset.append$DA$DA(newXArray, newYArray);
}, p$2);

Clazz.newMeth(C$, 'isShowCoordinates$',  function () {
var inside=this.$mouseListener.region == 0;
var stepSelected=p$2.getPlotPanel.apply(this, []).selectedSteps.size$() == 1;
return inside && !stepSelected && this.showCoordinates  ;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(37,1));
}, 1);

Clazz.newMeth(C$, 'fireRepaint$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
$I$(5,"repaintT$java_awt_Component",[this.frame.getTrackerPanelForID$Integer(this.panelID)]);
track.fireStepsChanged$();
});

Clazz.newMeth(C$, 'showDataTool$',  function () {
var tool=$I$(38).getTool$Z(true);
var tab=tool.getTab$org_opensourcephysics_display_Data(this.datasetManager);
tool.setUseChooser$Z(false);
tool.setSaveChangesOnClose$Z(false);
var toSend=Clazz.new_($I$(39,1));
var refresher=$I$(40).getTool$org_opensourcephysics_display_Data(this.datasetManager);
toSend.setID$I(this.datasetManager.getID$());
var track=$I$(3).getTrack$I(this.trackID);
toSend.setName$S(track.getName$());
var i=0;
var nextIn=this.datasetManager.getDataset$I(0);
var xColName=nextIn.getXColumnName$();
var control=Clazz.new_($I$(41,1).c$$O,[nextIn]);
var nextOut=toSend.getDataset$I(i++);
control.loadObject$O$Z$Z(nextOut, true, true);
nextOut.setYColumnVisible$Z(false);
nextOut.setConnected$Z(false);
nextOut.setMarkerShape$I(0);
var tArray=nextOut.getXPointsRaw$();
if (!this.guests.isEmpty$()) {
var tSet=Clazz.new_($I$(30,1));
for (var t=0, n=nextOut.getIndex$(); t < n; t++) {
tSet.add$O(Double.valueOf$D(tArray[t]));
}
for (var guest, $guest = this.guests.iterator$(); $guest.hasNext$()&&((guest=($guest.next$())),1);) {
var guestData=guest.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(guest.tp, this.plotTrackView.myDatasetIndex);
var nextGuestIn=guestData.getDataset$I(0);
var guestTArray=nextGuestIn.getXPointsRaw$();
for (var t=0, n=nextOut.getIndex$(); t < n; t++) {
if (t >= guestTArray.length) break;
tSet.add$O(Double.valueOf$D(guestTArray[t]));
}
}
var n=tSet.size$();
tArray=Clazz.array(Double.TYPE, [n]);
var temp=tSet.toArray$OA(Clazz.array(Double, [n]));
for (var k=0; k < n; k++) {
tArray[k]=(temp[k]).valueOf();
}
p$2.padDataset$org_opensourcephysics_display_Dataset$DA.apply(this, [nextOut, tArray]);
}if (this.xIndex >= 0) {
nextIn=this.datasetManager.getDataset$I(this.xIndex);
xColName=nextIn.getYColumnName$();
control=Clazz.new_($I$(41,1).c$$O,[nextIn]);
nextOut=toSend.getDataset$I(i++);
control.loadObject$O$Z$Z(nextOut, true, true);
nextOut.setMarkerColor$java_awt_Color(track.getColor$());
nextOut.setLineColor$java_awt_Color(track.getColor$().darker$());
nextOut.setConnected$Z(true);
nextOut.setXColumnVisible$Z(false);
if (!this.guests.isEmpty$()) {
p$2.padDataset$org_opensourcephysics_display_Dataset$DA.apply(this, [nextOut, tArray]);
}}nextIn=this.datasetManager.getDataset$I(this.yIndex);
var yColName=nextIn.getYColumnName$();
if (this.yIndex != this.xIndex) {
control=Clazz.new_($I$(41,1).c$$O,[nextIn]);
nextOut=toSend.getDataset$I(i++);
control.loadObject$O$Z$Z(nextOut, true, true);
nextOut.setMarkerColor$java_awt_Color(track.getColor$());
nextOut.setLineColor$java_awt_Color(track.getColor$().darker$());
nextOut.setConnected$Z(true);
nextOut.setXColumnVisible$Z(false);
if (!this.guests.isEmpty$()) {
p$2.padDataset$org_opensourcephysics_display_Dataset$DA.apply(this, [nextOut, tArray]);
}}for (var guest, $guest = this.guests.iterator$(); $guest.hasNext$()&&((guest=($guest.next$())),1);) {
var guestData=guest.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(guest.tp);
refresher.addData$org_opensourcephysics_display_Data(guestData);
if (this.xIndex >= 0) {
nextIn=guestData.getDataset$I(this.xIndex);
control=Clazz.new_($I$(41,1).c$$O,[nextIn]);
nextOut=toSend.getDataset$I(i++);
control.loadObject$O$Z$Z(nextOut, true, true);
nextOut.setMarkerColor$java_awt_Color(guest.getColor$());
nextOut.setLineColor$java_awt_Color(guest.getColor$().darker$());
nextOut.setConnected$Z(true);
nextOut.setXColumnVisible$Z(false);
if (tab != null ) {
var newName=tab.getColumnName$I(nextOut.getID$());
if (newName != null ) {
nextOut.setXYColumnNames$S$S(nextOut.getXColumnName$(), newName);
}} else {
var newName=nextOut.getYColumnName$() + "_{" + guest.getName$() + "}" ;
nextOut.setXYColumnNames$S$S(nextOut.getXColumnName$(), newName);
}p$2.padDataset$org_opensourcephysics_display_Dataset$DA.apply(this, [nextOut, tArray]);
}if (this.yIndex != this.xIndex) {
nextIn=guestData.getDataset$I(this.yIndex);
control=Clazz.new_($I$(41,1).c$$O,[nextIn]);
nextOut=toSend.getDataset$I(i++);
control.loadObject$O$Z$Z(nextOut, true, true);
nextOut.setMarkerColor$java_awt_Color(guest.getColor$());
nextOut.setLineColor$java_awt_Color(guest.getColor$().darker$());
nextOut.setConnected$Z(true);
nextOut.setXColumnVisible$Z(false);
if (tab != null ) {
var newName=tab.getColumnName$I(nextOut.getID$());
if (newName != null ) {
nextOut.setXYColumnNames$S$S(nextOut.getXColumnName$(), newName);
}} else {
var newName=nextOut.getYColumnName$() + "_{" + guest.getName$() + "}" ;
nextOut.setXYColumnNames$S$S(nextOut.getXColumnName$(), newName);
}p$2.padDataset$org_opensourcephysics_display_Dataset$DA.apply(this, [nextOut, tArray]);
}}
tool.send$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool(Clazz.new_($I$(42,1).c$$O,[toSend]), refresher);
tab=tool.getTab$org_opensourcephysics_display_Data(toSend);
if (tab != null ) {
tab.setWorkingColumns$S$S(xColName, yColName);
}tool.setVisible$Z(true);
});

Clazz.newMeth(C$, 'clearPopup$',  function () {
this.popup=null;
this.popupmenu=null;
});

Clazz.newMeth(C$, 'setHighlights$java_util_BitSet',  function (highlightFrames) {
this.bsFrameHighlights.clear$();
this.bsFrameHighlights.or$java_util_BitSet(highlightFrames);
});

Clazz.newMeth(C$, 'repaint$',  function () {
if (this.panelID == null  || !this.frame.getTrackerPanelForID$Integer(this.panelID).isPaintable$() ) {
return;
}C$.superclazz.prototype.repaint$.apply(this, []);
});

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.playerListener != null ) {
p$2.getPlotPanel.apply(this, []).getPlayer$().removePropertyChangeListener$S$java_beans_PropertyChangeListener("stepnumber", this.playerListener);
}for (var guest, $guest = this.guests.iterator$(); $guest.hasNext$()&&((guest=($guest.next$())),1);) {
guest.removeStepListener$java_beans_PropertyChangeListener(this.plotTrackView);
}
this.guests.clear$();
this.guestDatasets.clear$();
this.datasetManager=null;
this.plotTrackView=null;
this.panelID=null;
this.frame=null;
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(43).finalized$O(this);
});

Clazz.newMeth(C$, 'toString',  function () {
return "[TrackPlottingPanel " + this.id + " " + $I$(3).getTrack$I(this.trackID).getName$() + " " + this.yName + " vs. " + this.xName + " ]" ;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TrackPlottingPanel, "ClickableAxes", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.display.axes.CartesianInteractive');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_PlottingPanel',  function (panel) {
;C$.superclazz.c$$org_opensourcephysics_display_PlottingPanel.apply(this,[panel]);C$.$init$.apply(this);
this.setDefaultGutters$I$I$I$I(this.defaultLeftGutter, 30, this.defaultRightGutter, this.defaultBottomGutter);
this.b$['org.opensourcephysics.display.DrawingPanel'].setCoordinateStringBuilder$org_opensourcephysics_display_axes_CoordinateStringBuilder.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].coordStringBuilder]);
}, 1);

Clazz.newMeth(C$, 'getScaleSetter$',  function () {
var setter=C$.superclazz.prototype.getScaleSetter$.apply(this, []);
$I$(1).setFonts$java_awt_Container(setter);
return setter;
});

Clazz.newMeth(C$, 'hasHorzVariablesPopup$',  function () {
return true;
});

Clazz.newMeth(C$, 'getHorzVariablesPopup$',  function () {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].xPopup == null ) this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].createXYPopups$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], []);
$I$(1,"setFonts$O$I",[this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].xPopup, $I$(1).getLevel$()]);
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].updateVarSelection$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], []);
return this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].xPopup;
});

Clazz.newMeth(C$, 'hasVertVariablesPopup$',  function () {
return true;
});

Clazz.newMeth(C$, 'getVertVariablesPopup$',  function () {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].yPopup == null ) this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].createXYPopups$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], []);
$I$(1,"setFonts$O$I",[this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].yPopup, $I$(1).getLevel$()]);
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].updateVarSelection$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], []);
return this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].yPopup;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TrackPlottingPanel, "PlotMouseListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.event.MouseInputAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['region'],'O',['iad','org.opensourcephysics.display.Interactive']]]

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].mouseEvent=e;
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].mouseAction=5;
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].mouseEvent=e;
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].mouseAction=6;
this.b$['org.opensourcephysics.display.DrawingPanel'].setMouseCursor$java_awt_Cursor.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [$I$(2).getPredefinedCursor$I(0)]);
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].mouseEvent=e;
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].mouseAction=7;
var track=$I$(3).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].trackID);
if (track.ttype != 3) this.iad=this.b$['org.opensourcephysics.display.PlottingPanel'].getInteractive$.apply(this.b$['org.opensourcephysics.display.PlottingPanel'], []);
var p=e.getPoint$();
this.region=p$1.getRegion$java_awt_Point.apply(this, [p]);
if (this.region == 0) {
this.b$['javax.swing.JComponent'].setToolTipText$S.apply(this.b$['javax.swing.JComponent'], [$I$(4).getString$S("TrackPlottingPanel.RightDrag.Hint")]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].isShowCoordinates$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], [])) {
if (this.iad === this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].dataset ) this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].showPlotCoordinates$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], [this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].dataset.getHitIndex$()]);
 else this.b$['org.opensourcephysics.display.DrawingPanel'].displayCoordinates$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [e]);
}} else {
this.b$['javax.swing.JComponent'].setToolTipText$S.apply(this.b$['javax.swing.JComponent'], [null]);
if (p$2.getPlotPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], []).selectedSteps.size$() != 1) this.b$['org.opensourcephysics.display.DrawingPanel'].setMessage$S$I.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [null, 0]);
}});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].mouseEvent=e;
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].mouseAction=1;
var p=e.getPoint$();
this.region=p$1.getRegion$java_awt_Point.apply(this, [p]);
var track=$I$(3).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].trackID);
if (this.iad === this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].dataset ) {
var trackerPanel=p$2.getPlotPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].showPlotCoordinates$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], [this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].dataset.getHitIndex$()]);
var frame=track.getFrameForData$S$S$DA(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].getXLabel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], []), this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].getYLabel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], []), Clazz.array(Double.TYPE, -1, [this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].dataset.getX$(), this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].dataset.getY$()]));
if (frame > -1) {
var step=track.getStep$I(frame);
var steps=trackerPanel.selectedSteps;
if (e.isControlDown$()) {
if (step != null ) {
if (steps.contains$O(step)) steps.remove$O(step);
 else steps.add$org_opensourcephysics_cabrillo_tracker_Step(step);
step.erase$();
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].fireRepaint$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], [track]);
}} else if (step != null ) {
var player=trackerPanel.getPlayer$();
if (player.getFrameNumber$() == frame) {
var pt=step.getDefaultPoint$();
trackerPanel.setSelectedPoint$org_opensourcephysics_media_core_TPoint(pt);
if (pt != null ) {
pt.showCoordinates$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
}step.erase$();
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].fireRepaint$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], [track]);
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].clickedStep=step;
var stepNumber=player.getVideoClip$().frameToStep$I(frame);
player.setStepNumber$I(stepNumber);
}}return;
}} else if (this.region == 0 && e.getClickCount$() == 2  && this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].panelID).isEnabled$S("data.tool") ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].showDataTool$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], []);
}});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].mouseEvent=e;
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].mouseAction=3;
var p=e.getPoint$();
this.region=p$1.getRegion$java_awt_Point.apply(this, [p]);
if (this.b$['org.opensourcephysics.display.PlottingPanel'].getInteractive$.apply(this.b$['org.opensourcephysics.display.PlottingPanel'], []) == null ) {
if (this.region != 0) {
this.b$['org.opensourcephysics.display.DrawingPanel'].setMouseCursor$java_awt_Cursor.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [$I$(2).getDefaultCursor$()]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].isShowCoordinates$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'], [])) this.b$['org.opensourcephysics.display.DrawingPanel'].setMessage$S$I.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [null, 0]);
} else this.b$['org.opensourcephysics.display.DrawingPanel'].setMouseCursor$java_awt_Cursor.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [$I$(2).getPredefinedCursor$I(1)]);
}$I$(5).repaintT$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel']);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].mouseEvent=e;
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].mouseAction=2;
var track=$I$(3).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].trackID);
if (track.ttype != 3 && this.b$['org.opensourcephysics.display.PlottingPanel'].getInteractive$.apply(this.b$['org.opensourcephysics.display.PlottingPanel'], []) != null  ) this.b$['org.opensourcephysics.display.DrawingPanel'].setMouseCursor$java_awt_Cursor.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [$I$(2).getPredefinedCursor$I(12)]);
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].mouseEvent=e;
this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].mouseAction=4;
});

Clazz.newMeth(C$, 'getRegion$java_awt_Point',  function (p) {
var region=this.b$['org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel'].plotAxes.getMouseRegion$();
if (region == 0) {
var l=this.b$['org.opensourcephysics.display.DrawingPanel'].getLeftGutter$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
var r=this.b$['org.opensourcephysics.display.DrawingPanel'].getRightGutter$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
var t=this.b$['org.opensourcephysics.display.PlottingPanel'].getTopGutter$.apply(this.b$['org.opensourcephysics.display.PlottingPanel'], []);
var b=this.b$['org.opensourcephysics.display.PlottingPanel'].getBottomGutter$.apply(this.b$['org.opensourcephysics.display.PlottingPanel'], []);
var plotDim=this.b$['java.awt.Component'].getSize$.apply(this.b$['java.awt.Component'], []);
if (p.x < l || p.y < t  || p.x > plotDim.width - r  || p.y > plotDim.height - b ) {
return -1;
}}return region;
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TrackPlottingPanel, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var plot=obj;
control.setValue$S$O("x_var", plot.getXVariable$());
control.setValue$S$O("y_var", plot.getYVariable$());
if (!plot.autoscaleXMin) {
control.setValue$S$Z("scaled", true);
control.setValue$S$D("xmin", plot.getPreferredXMin$());
}if (!plot.autoscaleXMax) {
control.setValue$S$Z("scaled", true);
control.setValue$S$D("xmax", plot.getPreferredXMax$());
}if (!plot.autoscaleYMin) {
control.setValue$S$Z("scaled", true);
control.setValue$S$D("ymin", plot.getPreferredYMin$());
}if (!plot.autoscaleYMax) {
control.setValue$S$Z("scaled", true);
control.setValue$S$D("ymax", plot.getPreferredYMax$());
}control.setValue$S$Z("lines", plot.dataset.isConnected$());
control.setValue$S$Z("points", plot.dataset.getMarkerShape$() != 0);
if (!plot.guests.isEmpty$()) {
var guestNames=Clazz.array(String, [plot.guests.size$()]);
for (var i=0; i < guestNames.length; i++) {
var track=plot.guests.get$I(i);
guestNames[i]=track.getName$();
}
control.setValue$S$O("guests", guestNames);
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var plot=obj;
var vars=Clazz.array(String, [2]);
vars[0]=control.getString$S("x_var");
vars[1]=control.getString$S("y_var");
var track=$I$(3).getTrack$I(plot.trackID);
var isPointMass=(track.ttype == 5);
for (var i=0; i < 2; i++) {
if (vars[i] != null ) {
switch (vars[i]) {
case "theta":
vars[i]=(isPointMass ? "\u03b8r" : "\u03b8");
break;
case "theta_v":
vars[i]="\u03b8v";
break;
case "theta_a":
vars[i]="\u03b8a";
break;
case "theta_p":
vars[i]="\u03b8p";
break;
case "n":
if (isPointMass) vars[i]="step";
break;
case "KE":
vars[i]="K";
break;
case "x-comp":
vars[i]="x";
break;
case "y-comp":
vars[i]="y";
break;
case "x_tail":
vars[i]="xtail";
break;
case "y_tail":
vars[i]="ytail";
break;
}
}}
plot.setXVariable$S(vars[0]);
plot.setYVariable$S(vars[1]);
if (control.getBoolean$S("scaled")) {
var xmin=control.getDouble$S("xmin");
var xmax=control.getDouble$S("xmax");
var ymin=control.getDouble$S("ymin");
var ymax=control.getDouble$S("ymax");
plot.setPreferredMinMax$D$D$D$D$Z(xmin, xmax, ymin, ymax, false);
}if (control.getPropertyNamesRaw$().contains$O("lines")) plot.dataset.setConnected$Z(control.getBoolean$S("lines"));
if (control.getPropertyNamesRaw$().contains$O("points")) {
if (control.getBoolean$S("points")) {
plot.dataset.setMarkerShape$I(2);
} else plot.dataset.setMarkerShape$I(0);
}var guestnames=control.getObject$S("guests");
if (guestnames != null ) {
var trackerPanel=plot.frame.getTrackerPanelForID$Integer(plot.panelID);
var tracks=trackerPanel.getTracks$();
for (var name, $name = 0, $$name = guestnames; $name<$$name.length&&((name=($$name[$name])),1);$name++) {
var guest=trackerPanel.getTrack$S$java_util_ArrayList(name, tracks);
plot.addGuest$org_opensourcephysics_cabrillo_tracker_TTrack(guest);
}
}plot.plotData$();
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
