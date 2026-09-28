(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel','org.opensourcephysics.tools.FontSizer','java.awt.Color','org.opensourcephysics.cabrillo.tracker.TrackerRes','javax.swing.SwingUtilities','java.awt.Dimension','javax.swing.JPanel','javax.swing.BoxLayout','javax.swing.JCheckBox','org.opensourcephysics.cabrillo.tracker.TViewChooser','org.opensourcephysics.cabrillo.tracker.TButton','javax.swing.JRadioButtonMenuItem','javax.swing.ButtonGroup','javax.swing.JPopupMenu',['org.opensourcephysics.cabrillo.tracker.PlotTrackView','.Loader'],'java.awt.image.BufferedImage','org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.controls.OSPLog']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PlotTrackView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.TrackView');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.plots=Clazz.array($I$(1), [3]);
this.liveUpdates=true;
},1);

C$.$fields$=[['Z',['isCustom','xAxesLinked','liveUpdates'],'I',['selectedPlot'],'O',['datasetManager','org.opensourcephysics.display.DatasetManager','mainView','javax.swing.JPanel','plots','org.opensourcephysics.cabrillo.tracker.TrackPlottingPanel[]','plotsButton','javax.swing.JButton','linkCheckBox','javax.swing.JCheckBox']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_PlotTView',  function (track, panel, view) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackChooserTView$I.apply(this,[track, panel, view, 0]);C$.$init$.apply(this);
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
this.datasetManager=track.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(trackerPanel, this.myDatasetIndex);
p$1.createGUI.apply(this, []);
this.highlightVisible=!"false".equals$O(track.getProperty$S("highlights"));
for (var i=0; i < this.plots.length; i++) {
this.plots[i].setXVariable$S(track.getProperty$S("xVarPlot" + i));
this.plots[i].setYVariable$S(track.getProperty$S("yVarPlot" + i));
var lines=!"false".equals$O(track.getProperty$S("connectedPlot" + i));
this.plots[i].dataset.setConnected$Z(lines);
this.plots[i].linesItemSelected=lines;
var pts=!"false".equals$O(track.getProperty$S("pointsPlot" + i));
this.plots[i].dataset.setMarkerShape$I(pts ? 2 : 0);
this.plots[i].pointsItemSelected=pts;
this.plots[i].dataset.setMarkerColor$java_awt_Color(track.getColor$());
var D=track.getProperty$S("yMinPlot" + i);
if (D != null ) {
this.plots[i].setPreferredMinMaxY$D$D(D.doubleValue$(), this.plots[i].getPreferredYMax$());
}D=track.getProperty$S("yMaxPlot" + i);
if (D != null ) {
this.plots[i].setPreferredMinMaxY$D$D(this.plots[i].getPreferredYMin$(), D.doubleValue$());
}this.plots[i].isCustom=false;
}
this.setPlotCount$I(p$1.getDefaultPlotCount.apply(this, []));
this.refresh$I$I(trackerPanel.getFrameNumber$(), 0);
}, 1);

Clazz.newMeth(C$, 'refresh$I$I',  function (frameNumber, mode) {
if (mode == 6400) {
$I$(2).setFonts$java_awt_Container(this.plotsButton);
$I$(2).setFonts$java_awt_Container(this.linkCheckBox);
}if (!this.liveUpdates && this.isClipAdjusting$() ) return;
var track;
if (!this.isRefreshEnabled$() || !this.viewParent.isViewPaneVisible$() || (track=this.getTrack$()) == null   ) return;
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
track.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(trackerPanel, this.myDatasetIndex);
var haveSelection=(trackerPanel.selectedSteps.size$() > 0);
var trackColor=track.getColor$();
var mc=(trackColor.equals$O($I$(3).WHITE) ? $I$(3).GRAY : trackColor);
var hc=(haveSelection ? trackColor : $I$(3).GRAY);
this.highlightFrames$I(frameNumber);
for (var i=0; i < this.plots.length; i++) {
var data=this.plots[i].getDataset$();
data.setMarkerColor$java_awt_Color(mc);
data.setHighlightColor$java_awt_Color(hc);
this.plots[i].setHighlights$java_util_BitSet(this.highlightFrames);
this.plots[i].plotData$();
}
this.mainView.repaint$();
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.datasetManager=null;
for (var next, $next = 0, $$next = this.plots; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
next.dispose$();
}
this.plots=null;
this.mainView.removeAll$();
this.viewParent=null;
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.linkCheckBox.setText$S($I$(4).getString$S("PlotTrackView.Checkbox.Synchronize"));
this.linkCheckBox.setToolTipText$S($I$(4).getString$S("PlotTrackView.Checkbox.Synchronize.Tooltip"));
this.plotsButton.setText$S($I$(4).getString$S("PlotTrackView.Button.PlotCount"));
this.plotsButton.setToolTipText$S($I$(4).getString$S("PlotTrackView.Button.PlotCount.ToolTip"));
this.plotsButton.setVerticalAlignment$I(0);
this.plotsButton.setHorizontalTextPosition$I(10);
this.plotsButton.setHorizontalAlignment$I(2);
var track=this.getTrack$();
track.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(this.frame.getTrackerPanelForID$Integer(this.panelID), this.myDatasetIndex);
for (var i=0; i < this.plots.length; i++) {
var custom=this.plots[i].isCustom;
this.plots[i].setVariables$();
this.plots[i].isCustom=custom;
}
});

Clazz.newMeth(C$, 'getViewButton$',  function () {
return this.plotsButton;
});

Clazz.newMeth(C$, 'isCustomState$',  function () {
var n=this.mainView.getComponentCount$();
if (this.isCustom || n != p$1.getDefaultPlotCount.apply(this, []) ) return true;
for (var i=0; i < n; i++) {
if (this.plots[i].isCustom) return true;
}
return false;
});

Clazz.newMeth(C$, 'getDefaultPlotCount',  function () {
var track=this.getTrack$();
switch (track.ttype) {
case 3:
case 7:
case 1:
case 6:
return 1;
default:
return 2;
}
}, p$1);

Clazz.newMeth(C$, 'setPlotCount$I',  function (plotCount) {
if (plotCount == this.mainView.getComponentCount$()) return;
var track=this.getTrack$();
track.tp.changed=true;
plotCount=Math.min(plotCount, this.plots.length);
this.selectedPlot=plotCount - 1;
this.mainView.removeAll$();
this.mainView.add$java_awt_Component(this.plots[0]);
for (var i=1; i < plotCount; i++) {
this.mainView.add$java_awt_Component(this.plots[i]);
}
this.mainView.validate$();
if (plotCount > 1) this.toolbarComponents.add$O(this.linkCheckBox);
 else this.toolbarComponents.remove$O(this.linkCheckBox);
var runner=((P$.PlotTrackView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PlotTrackView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var chooser=this.b$['org.opensourcephysics.cabrillo.tracker.PlotTrackView'].plots[0].getOwner$();
if (chooser != null ) chooser.refreshToolbar$();
});
})()
), Clazz.new_(P$.PlotTrackView$1.$init$,[this, null]));
$I$(5).invokeLater$Runnable(runner);
});

Clazz.newMeth(C$, 'getPlots$',  function () {
var n=this.mainView.getComponentCount$();
var visiblePlots=Clazz.array($I$(1), [n]);
for (var i=0; i < n; i++) {
visiblePlots[i]=this.plots[i];
}
return visiblePlots;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "units":
for (var plot, $plot = 0, $$plot = this.plots; $plot<$$plot.length&&((plot=($$plot[$plot])),1);$plot++) {
plot.plotData$();
plot.repaint$();
}
return;
case "track":
if (!(Clazz.instanceOf(e.getNewValue$(), "org.opensourcephysics.cabrillo.tracker.WorldTView.WorldPanel"))) {
for (var plot, $plot = 0, $$plot = this.getPlots$(); $plot<$$plot.length&&((plot=($$plot[$plot])),1);$plot++) {
plot.plotAxes.hideScaleSetter$();
}
for (var plot, $plot = 0, $$plot = this.plots; $plot<$$plot.length&&((plot=($$plot[$plot])),1);$plot++) {
plot.clearPopup$();
}
return;
}break;
}
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'setXAxesLinked$Z',  function (linked) {
this.xAxesLinked=linked;
this.linkCheckBox.setSelected$Z(linked);
if (linked) this.syncXAxesTo$org_opensourcephysics_cabrillo_tracker_TrackPlottingPanel(this.plots[0]);
});

Clazz.newMeth(C$, 'syncXAxesTo$org_opensourcephysics_cabrillo_tracker_TrackPlottingPanel',  function (plot) {
if (!this.xAxesLinked) return;
this.xAxesLinked=false;
var $var=plot.getXVariable$();
for (var next, $next = 0, $$next = this.plots; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (next !== plot ) {
var xMin=plot.isAutoscaleXMin$() ? NaN : plot.getPreferredXMin$();
var xMax=plot.isAutoscaleXMax$() ? NaN : plot.getPreferredXMax$();
next.setXVariable$S($var);
next.setPreferredMinMaxX$D$D(xMin, xMax);
next.scale$();
next.repaint$();
}}
this.xAxesLinked=true;
});

Clazz.newMeth(C$, 'syncYAxes$org_opensourcephysics_cabrillo_tracker_TrackPlottingPanelA',  function (plots) {
var yMin=NaN;
var yMax=NaN;
var sync=false;
for (var plot, $plot = 0, $$plot = plots; $plot<$$plot.length&&((plot=($$plot[$plot])),1);$plot++) {
if (!Double.isNaN$D(yMin)) sync=true;
yMin=Double.isNaN$D(yMin) ? plot.getPreferredYMin$() : Math.min(plot.getPreferredYMin$(), yMin);
yMax=Double.isNaN$D(yMax) ? plot.getPreferredYMax$() : Math.max(plot.getPreferredYMax$(), yMax);
}
if (sync) for (var plot, $plot = 0, $$plot = plots; $plot<$$plot.length&&((plot=($$plot[$plot])),1);$plot++) {
plot.setPreferredMinMaxY$D$D(yMin, yMax);
plot.scale$();
plot.repaint$();
}
});

Clazz.newMeth(C$, 'createPlotPanel',  function () {
var track=this.getTrack$();
var plotPanel=Clazz.new_($I$(1,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_display_DatasetManager,[track, this.datasetManager]);
plotPanel.enableInspector$Z(true);
plotPanel.setAutoscaleX$Z(true);
plotPanel.setAutoscaleY$Z(true);
plotPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(6,1).c$$I$I,[140, 140]));
plotPanel.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(6,1).c$$I$I,[100, 100]));
plotPanel.setPlotTrackView$org_opensourcephysics_cabrillo_tracker_PlotTrackView(this);
return plotPanel;
}, p$1);

Clazz.newMeth(C$, 'createGUI',  function () {
this.mainView=Clazz.new_($I$(7,1));
this.mainView.setDoubleBuffered$Z(true);
this.mainView.setLayout$java_awt_LayoutManager(Clazz.new_($I$(8,1).c$$java_awt_Container$I,[this.mainView, 1]));
for (var i=0; i < this.plots.length; i++) {
if (this.plots[i] == null ) this.plots[i]=p$1.createPlotPanel.apply(this, []);
}
this.setViewportView$java_awt_Component(this.mainView);
this.linkCheckBox=Clazz.new_($I$(9,1));
this.linkCheckBox.setOpaque$Z(false);
this.linkCheckBox.addActionListener$java_awt_event_ActionListener(((P$.PlotTrackView$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PlotTrackView$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.PlotTrackView'].setXAxesLinked$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PlotTrackView'], [this.b$['org.opensourcephysics.cabrillo.tracker.PlotTrackView'].linkCheckBox.isSelected$()]);
});
})()
), Clazz.new_(P$.PlotTrackView$2.$init$,[this, null])));
this.plotsButton=((P$.PlotTrackView$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "PlotTrackView$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
return $I$(10,"getButtonMaxSize$java_awt_Container$java_awt_Dimension$I",[this, C$.superclazz.prototype.getMaximumSize$.apply(this, []), this.getMinimumSize$().height]);
});

Clazz.newMeth(C$, 'getPopup$',  function () {
var plotsPopup=p$1.rebuildPlotsPopup.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PlotTrackView'], []);
$I$(2,"setFonts$O$I",[plotsPopup, $I$(2).getLevel$()]);
return plotsPopup;
});
})()
), Clazz.new_($I$(11,1),[this, null],P$.PlotTrackView$3));
this.plotsButton.setIcon$javax_swing_Icon($I$(10).DOWN_ARROW_ICON);
this.plotsButton.setHorizontalTextPosition$I(2);
this.plotsButton.setHorizontalAlignment$I(2);
this.plotsButton.setVerticalTextPosition$I(0);
this.plotsButton.setVerticalAlignment$I(1);
}, p$1);

Clazz.newMeth(C$, 'rebuildPlotsPopup',  function () {
var plotCountSetter=((P$.PlotTrackView$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "PlotTrackView$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var item=e.getSource$();
this.b$['org.opensourcephysics.cabrillo.tracker.PlotTrackView'].setPlotCount$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PlotTrackView'], [Integer.parseInt$S(item.getText$())]);
this.b$['org.opensourcephysics.cabrillo.tracker.PlotTrackView'].refresh$I$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PlotTrackView'], [this.b$['org.opensourcephysics.cabrillo.tracker.PlotTrackView'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.PlotTrackView'].panelID).getFrameNumber$(), 0]);
});
})()
), Clazz.new_(P$.PlotTrackView$4.$init$,[this, null]));
var plotCountItems=Clazz.array($I$(12), [this.plots.length]);
var plotCountGroup=Clazz.new_($I$(13,1));
var plotsPopup=Clazz.new_($I$(14,1));
for (var i=0; i < this.plots.length; i++) {
plotCountItems[i]=Clazz.new_([String.valueOf$I(i + 1)],$I$(12,1).c$$S);
plotCountItems[i].addActionListener$java_awt_event_ActionListener(plotCountSetter);
plotsPopup.add$javax_swing_JMenuItem(plotCountItems[i]);
plotCountGroup.add$javax_swing_AbstractButton(plotCountItems[i]);
}
plotCountItems[this.selectedPlot].setSelected$Z(true);
return plotsPopup;
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(15,1));
}, 1);

Clazz.newMeth(C$, 'getPanelSize$',  function () {
return this.mainView.getSize$();
});

Clazz.newMeth(C$, 'exportImage$I$I',  function (w, h) {
var image=this.mainView.createImage$I$I(w, h);
if (image == null ) return Clazz.new_($I$(16,1).c$$I$I$I,[w, h, 2]);
var g2=image.createGraphics$();
this.mainView.paint$java_awt_Graphics(g2);
g2.dispose$();
return image;
});

Clazz.newMeth(C$, 'getPlotCount$',  function () {
return this.mainView.getComponentCount$();
});

Clazz.newMeth(C$, 'isRefreshEnabled$',  function () {
return C$.superclazz.prototype.isRefreshEnabled$.apply(this, []) && $I$(17).allowPlotRefresh ;
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(18).finalized$O(this);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.PlotTrackView, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var trackView=obj;
control.setValue$S$O("track", trackView.getTrack$().getName$());
var plots=trackView.getPlots$();
for (var i=0; i < plots.length; i++) {
control.setValue$S$O("plot" + i, plots[i]);
}
control.setValue$S$Z("linked", trackView.xAxesLinked);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var trackView=obj;
trackView.setXAxesLinked$Z(control.getBoolean$S("linked"));
var plots=trackView.plots;
var plotCount=1;
for (var i=0; i < plots.length; i++) {
var child=control.getChildControl$S("plot" + i);
if (child != null ) {
child.loadObject$O(plots[i]);
plotCount=i + 1;
}}
trackView.setPlotCount$I(plotCount);
trackView.isCustom=true;
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
