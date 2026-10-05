(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},p$2={},I$=[[0,'java.awt.BorderLayout','javax.swing.Box','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.controls.XML','java.util.ArrayList','java.io.File','org.opensourcephysics.media.core.VideoFileFilter','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.display.OSPRuntime','javax.swing.JOptionPane','org.opensourcephysics.media.core.MediaRes','org.opensourcephysics.cabrillo.tracker.TrackerIO','java.awt.datatransfer.DataFlavor','java.awt.image.BufferedImage','java.awt.Toolkit','javax.swing.JMenu','org.opensourcephysics.cabrillo.tracker.TrackerRes','javax.swing.JMenuItem','javax.swing.KeyStroke','org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.cabrillo.tracker.LibraryBrowserDragHandler','org.opensourcephysics.cabrillo.tracker.TMenuBar','javax.swing.JDialog','javax.swing.JTextPane','java.awt.Color',['javax.swing.event.HyperlinkEvent','.EventType'],'org.opensourcephysics.desktop.OSPDesktop','java.awt.Dimension','org.opensourcephysics.cabrillo.tracker.TFrame','java.awt.event.KeyAdapter','java.awt.event.FocusAdapter','javax.swing.JCheckBox','javax.swing.AbstractAction','javax.swing.JPanel','java.awt.FlowLayout','javax.swing.JButton','javax.swing.JScrollPane','javax.swing.JFrame','org.opensourcephysics.tools.FontSizer','javax.swing.JTextField','javax.swing.ToolTipManager','javax.swing.JPopupMenu','java.util.BitSet','org.opensourcephysics.cabrillo.tracker.TrackerPanel','org.opensourcephysics.cabrillo.tracker.TTrackBar','org.opensourcephysics.cabrillo.tracker.TToolBar',['org.opensourcephysics.display.OSPRuntime','.Disposable'],'java.util.HashMap','java.awt.GraphicsEnvironment','java.awt.Rectangle','org.opensourcephysics.tools.FileDropHandler','org.opensourcephysics.js.AIPatch',['org.opensourcephysics.cabrillo.tracker.TFrame','.TTabPanel'],'org.opensourcephysics.cabrillo.tracker.MainTView','org.opensourcephysics.cabrillo.tracker.deploy.TrackerStarter','Thread','org.opensourcephysics.cabrillo.tracker.Undo','org.opensourcephysics.cabrillo.tracker.TViewChooser','javax.swing.SwingUtilities','org.opensourcephysics.cabrillo.tracker.TView','StringBuffer','org.opensourcephysics.media.core.VideoIO',['org.opensourcephysics.cabrillo.tracker.TFrame','.DefaultMenuBar'],'org.opensourcephysics.cabrillo.tracker.TrackControl','org.opensourcephysics.cabrillo.tracker.PencilDrawer','org.opensourcephysics.cabrillo.tracker.HelpFinder','java.awt.Component','org.opensourcephysics.cabrillo.tracker.PrefsDialog','javax.swing.JSplitPane','java.net.URL','org.opensourcephysics.cabrillo.tracker.ExportZipDialog','org.opensourcephysics.cabrillo.tracker.ExportVideoDialog','org.opensourcephysics.cabrillo.tracker.ThumbnailDialog','org.opensourcephysics.tools.LibraryComPADRE','org.opensourcephysics.tools.LibraryBrowser','org.opensourcephysics.cabrillo.tracker.PropertiesDialog','org.opensourcephysics.tools.Launcher','org.opensourcephysics.cabrillo.tracker.ClipboardListener','org.opensourcephysics.media.core.DataTrack','java.awt.event.ComponentAdapter','java.awt.event.WindowAdapter','javax.swing.JTabbedPane','java.awt.event.MouseAdapter',['org.opensourcephysics.cabrillo.tracker.TFrame','.Notes'],['org.opensourcephysics.cabrillo.tracker.TFrame','.DataDropHandler'],'org.opensourcephysics.display.GUIUtils','java.awt.Cursor','org.opensourcephysics.tools.DataTool','org.opensourcephysics.media.core.ImageVideo',['org.opensourcephysics.cabrillo.tracker.TFrame','.Loader'],['org.opensourcephysics.cabrillo.tracker.TFrame','.FrameBlocker'],'java.util.Locale','javax.swing.Timer']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TFrame", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.OSPFrame', ['java.beans.PropertyChangeListener', ['org.opensourcephysics.tools.FileDropHandler','org.opensourcephysics.tools.FileDropHandler.FileImporter']]);
C$.$classes$=[['TTabPanel',0],['Loader',8],['DataDropHandler',1],['FrameBlocker',2],['DeactivatingMenuBar',8],['DefaultMenuBar',1],['Notes',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.popup=Clazz.new_($I$(42,1));
this.loadedFiles=Clazz.new_($I$(5,1));
this.currentLangugae="en";
this.splashing=true;
this.$$state=0;
this.paintHold=0;
this.lastExperiment="";
this._bsPanelIDs=Clazz.new_($I$(43,1));
this._apanels=Clazz.array($I$(44), [127]);
this._amenubars=Clazz.array($I$(22), [127]);
this._atrackbars=Clazz.array($I$(45), [127]);
this._atoolbars=Clazz.array($I$(46), [127]);
{
$I$(47).allocate$org_opensourcephysics_display_OSPRuntime_DisposableA$S(this._apanels, "_apanels");
$I$(47).allocate$org_opensourcephysics_display_OSPRuntime_DisposableA$S(this._amenubars, "_amenubars");
$I$(47).allocate$org_opensourcephysics_display_OSPRuntime_DisposableA$S(this._atrackbars, "_atrackbars");
$I$(47).allocate$org_opensourcephysics_display_OSPRuntime_DisposableA$S(this._atoolbars, "_atoolbars");
}
},1);

C$.$fields$=[['Z',['splashing','alwaysListenToClipboard','removingAll'],'I',['framesLoaded','prevFramesLoaded','$$state','paintHold'],'S',['currentLangugae','lastExperiment'],'O',['maximizedFrameSize','java.awt.Dimension','prevFrameSize','java.awt.Rectangle','clipboardListener','org.opensourcephysics.cabrillo.tracker.ClipboardListener','libraryBrowser','org.opensourcephysics.tools.LibraryBrowser','helpLauncher','org.opensourcephysics.tools.Launcher','playerBar','javax.swing.JToolBar','helpDialog','javax.swing.JDialog','+dataToolDialog','prefsDialog','org.opensourcephysics.cabrillo.tracker.PrefsDialog','currentMenuBar','org.opensourcephysics.cabrillo.tracker.TMenuBar','dataDropHandler','org.opensourcephysics.cabrillo.tracker.TFrame.DataDropHandler','fileDropHandler','org.opensourcephysics.tools.FileDropHandler','popup','javax.swing.JPopupMenu','closeItem','javax.swing.JMenuItem','defaultMenuBar','org.opensourcephysics.cabrillo.tracker.TFrame.DefaultMenuBar','recentMenu','javax.swing.JMenu','tabbedPane','javax.swing.JTabbedPane','saveNotesAction','javax.swing.Action','+openRecentAction','loadedFiles','java.util.ArrayList','tabsetFile','java.io.File','prevPanelID','Integer','notes','org.opensourcephysics.cabrillo.tracker.TFrame.Notes','frameContentPane','javax.swing.JPanel','whenObjectLoadingComplete','java.util.function.Function','frameBlocker','org.opensourcephysics.cabrillo.tracker.TFrame.FrameBlocker','_bsPanelIDs','java.util.BitSet','_apanels','org.opensourcephysics.cabrillo.tracker.TrackerPanel[]','_amenubars','org.opensourcephysics.cabrillo.tracker.TMenuBar[]','_atrackbars','org.opensourcephysics.cabrillo.tracker.TTrackBar[]','_atoolbars','org.opensourcephysics.cabrillo.tracker.TToolBar[]','memoryTimer','javax.swing.Timer']]
,['Z',['isPortraitOrientation','isLayoutChanged','isLayoutAdaptive','loadFailed','haveExportDialog','haveThumbnailDialog','maximize'],'O',['textLayoutFont','java.awt.Font','YELLOW','java.awt.Color','DEFAULT_ORDER','int[]','+PORTRAIT_VIEW_ORDER','+PORTRAIT_DIVIDER_ORDER']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["Tracker"]);C$.$init$.apply(this);
p$1.init$java_util_Map.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
;C$.superclazz.c$$S.apply(this,["Tracker"]);C$.$init$.apply(this);
var options=Clazz.new_($I$(48,1));
options.put$O$O("-panel", trackerPanel);
p$1.init$java_util_Map.apply(this, [options]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map',  function (options) {
;C$.superclazz.c$$S.apply(this,["Tracker"]);C$.$init$.apply(this);
p$1.init$java_util_Map.apply(this, [options]);
}, 1);

Clazz.newMeth(C$, 'init$java_util_Map',  function (options) {
this.setTitle$S("Tracker" + ($I$(9).isJS ? " Online" : ""));
if (options == null ) options=Clazz.new_($I$(48,1));
C$.isLayoutAdaptive=$I$(9).isJS;
var dim=options.get$O("-dim");
var bounds=options.get$O("-bounds");
var video=options.get$O("-video");
var panel=(video != null  ? Clazz.new_($I$(44,1).c$$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_media_core_Video,[this, video]) : options.get$O("-panel"));
this.setName$S("Tracker");
if ($I$(20).TRACKER_ICON != null ) this.setIconImage$java_awt_Image($I$(20).TRACKER_ICON.getImage$());
this.setDefaultCloseOperation$I(0);
$I$(17).addListener$java_beans_PropertyChangeListener(this);
var screenRect=$I$(49).getLocalGraphicsEnvironment$().getMaximumWindowBounds$();
if ($I$(9).isJS) this.setMaximizedBounds$java_awt_Rectangle(screenRect);
if (C$.isLayoutAdaptive) {
bounds=this.getAdaptiveBounds$Z(true);
}if (bounds == null ) {
if (dim == null ) {
var extra=$I$(39,"getFactor$I",[$I$(20).preferredFontLevel]) - 1;
var w=(Math.min(screenRect.width * 0.9, (1024 + extra * 800))|0);
var h=(Math.min(screenRect.height * 0.9, (3 * w/4|0))|0);
dim=Clazz.new_($I$(28,1).c$$I$I,[w, h]);
}var x=((screenRect.width - dim.width)/2|0);
var y=($I$(9).isJS ? 50 : ((screenRect.height - dim.height)/2|0));
bounds=Clazz.new_($I$(50,1).c$$I$I$I$I,[x, y, dim.width, dim.height]);
} else {
dim=Clazz.new_($I$(28,1).c$$I$I,[bounds.width, bounds.height]);
}p$1.createGUI.apply(this, []);
this.setPreferredSize$java_awt_Dimension(dim);
this.pack$();
this.setLocation$I$I(bounds.x, bounds.y);
var rect=this.getBounds$();
C$.isPortraitOrientation=rect.height > rect.width;
this.fileDropHandler=Clazz.new_($I$(51,1).c$$org_opensourcephysics_tools_FileDropHandler_FileImporter,[this]);
this.tabbedPane.setTransferHandler$javax_swing_TransferHandler(this.fileDropHandler);
if (panel != null ) {
this.addTab$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$Runnable(panel, 2, (P$.TFrame$lambda1$||(P$.TFrame$lambda1$=(((P$.TFrame$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TFrame$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
});
})()
), Clazz.new_(P$.TFrame$lambda1.$init$,[this, null]))))));
}$I$(52).installResizeHandler$java_awt_Window(this);
}, p$1);

Clazz.newMeth(C$, 'saveBounds$',  function () {
this.prevFrameSize=this.getBounds$();
});

Clazz.newMeth(C$, 'getAdaptiveBounds$Z',  function (isInit) {
var rect;
if ($I$(9).isJS && C$.maximize ) {
rect=$I$(9).jsutil.getMaximumViewport$I$I(2, 2);
} else if (this.prevFrameSize != null  && !C$.maximize ) {
rect=this.prevFrameSize;
} else {
var dim=$I$(15).getDefaultToolkit$().getScreenSize$();
var wid=C$.maximize ? 1.0 : 0.92;
var ht=C$.maximize ? 1.0 : 0.75;
var ceil=C$.maximize ? 0 : 60;
var w=((wid * dim.width)|0);
var margin=(((1 - wid) * dim.width / 2)|0);
var h=((ht * (dim.height - ceil))|0);
rect=Clazz.new_($I$(50,1).c$$I$I$I$I,[margin, ceil, w, h]);
}this.maximizedFrameSize=(C$.maximize ? Clazz.new_($I$(28,1).c$$I$I,[rect.width, rect.height]) : null);
if (isInit) {
var onOrient=((P$.TFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getAdaptiveBounds$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [false]);
});
})()
), Clazz.new_(P$.TFrame$1.$init$,[this, null]));
$I$(52).addWindowOrientationChangeListener$Runnable(onOrient);
} else {
this.setBounds$java_awt_Rectangle(rect);
this.validate$();
this.repaint$();
}return rect;
});

Clazz.newMeth(C$, 'repaint$J$I$I$I$I',  function (time, x, y, w, h) {
if (!this.isPaintable$()) return;
C$.superclazz.prototype.repaint$J$I$I$I$I.apply(this, [time, x, y, w, h]);
});

Clazz.newMeth(C$, 'repaintT$java_awt_Component',  function (c) {
if (c == null ) return;
if (Clazz.instanceOf(c, "org.opensourcephysics.cabrillo.tracker.TrackerPanel")) {
if (!(c).isPaintable$()) {
return;
}(c).clearTainted$();
}c.repaint$();
}, 1);

Clazz.newMeth(C$, 'update$java_awt_Graphics',  function (g) {
C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
if (!this.isShowing$()) return;
C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'addTab$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$Runnable',  function (trackerPanel, addMode, whenDone) {
this.setFrameBlocker$Z$org_opensourcephysics_cabrillo_tracker_TrackerPanel(false, trackerPanel);
var doSelect=((addMode & 1) != 0);
var doRefresh=((addMode & 2) != 0);
var panelID=trackerPanel.getID$();
var tab=this.getTab$Integer(panelID);
var tabPanel=null;
if (tab >= 0) {
var name=trackerPanel.getTitle$();
{
this.tabbedPane.setTitleAt$I$S(tab, name);
this.tabbedPane.setToolTipTextAt$I$S(tab, trackerPanel.getToolTipPath$());
}tabPanel=this.getTabPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
} else {
this.setIgnoreRepaint$Z(true);
var objects=Clazz.array(java.lang.Object, [3]);
tabPanel=Clazz.new_($I$(53,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$OA,[this, null, trackerPanel, objects]);
trackerPanel.addPropertyChangeListener$S$java_beans_PropertyChangeListener("datafile", this);
trackerPanel.addPropertyChangeListener$S$java_beans_PropertyChangeListener("video", this);
objects[0]=Clazz.new_($I$(54,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[trackerPanel]);
objects[2]=this.getSplitPanes$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
objects[1]=C$.createTViews$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
var name=trackerPanel.getTitle$();
{
this.tabbedPane.addTab$S$java_awt_Component(name, tabPanel);
tab=this.getTab$Integer(panelID);
this.tabbedPane.setToolTipTextAt$I$S(tab, trackerPanel.getToolTipPath$());
}this.getToolBar$Integer$Z(panelID, true);
this.getMenuBar$Integer$Z(panelID, true);
}p$1.setupAddedPanel$org_opensourcephysics_cabrillo_tracker_TFrame_TTabPanel$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z$Z$Runnable.apply(this, [tabPanel, tab, trackerPanel, doSelect, doRefresh, whenDone]);
this.doTabStateChanged$();
});

Clazz.newMeth(C$, 'setupAddedPanel$org_opensourcephysics_cabrillo_tracker_TFrame_TTabPanel$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z$Z$Runnable',  function (tabPanel, tab, trackerPanel, doSelect, doRefresh, whenDone) {
var viewChoosers=this.getViewChoosers$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
if (trackerPanel.customViewsProperty != null ) {
var arrayItems=trackerPanel.customViewsProperty.getPropertyContent$();
var it=arrayItems.iterator$();
while (it.hasNext$()){
var next=it.next$();
if (next == null ) continue;
try {
var index=next.getPropertyName$().substring$I(1);
index=index.substring$I$I(0, index.length$() - 1);
var chooserIndex=Integer.parseInt$S(index);
var viewControls=next.getChildControls$();
for (var j=0; j < viewControls.length; j++) {
var viewClass=viewControls[j].getObjectClass$();
var view=viewChoosers[chooserIndex].getTView$Class(viewClass);
if (view != null ) {
viewControls[j].loadObject$O(view);
viewChoosers[chooserIndex].refresh$();
viewChoosers[chooserIndex].repaint$();
}}
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
e.printStackTrace$();
} else {
throw e;
}
}
}
trackerPanel.customViewsProperty=null;
}if (trackerPanel.selectedViewTypesProperty != null ) {
for (var next, $next = trackerPanel.selectedViewTypesProperty.getPropertyContent$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var viewTypeString=next.toString();
var n=viewTypeString.indexOf$S("{");
if (n > -1) {
viewTypeString=viewTypeString.substring$I(n + 1);
try {
for (var i=0; i < viewChoosers.length; i++) {
var desiredType=Integer.parseInt$S(viewTypeString.substring$I$I(0, 1));
var currentType=viewChoosers[i].getSelectedViewType$();
if (desiredType != currentType) {
viewChoosers[i].setSelectedViewType$I(Integer.parseInt$S(viewTypeString.substring$I$I(0, 1)));
viewChoosers[i].refresh$();
viewChoosers[i].repaint$();
}viewTypeString=viewTypeString.substring$I(2);
}
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
e.printStackTrace$();
} else {
throw e;
}
}
}}
trackerPanel.selectedViewTypesProperty=null;
}if (trackerPanel.selectedViewsProperty != null ) {
var list=trackerPanel.selectedViewsProperty.getPropertyContent$();
for (var i=0; i < list.size$() && i < viewChoosers.length ; i++) {
var next=list.get$I(i);
if (next == null ) continue;
var viewName=(next.getPropertyContent$().get$I(0)).toLowerCase$();
var type=viewName.contains$CharSequence("diagrama") || viewName.contains$CharSequence("plot")  ? 0 : viewName.contains$CharSequence("tabla") || viewName.contains$CharSequence("table")  ? 1 : viewName.contains$CharSequence("mundo") || viewName.contains$CharSequence("world")  ? 2 : viewName.contains$CharSequence("texto") || viewName.contains$CharSequence("page")  ? 3 : -1;
if (type != i) {
if (viewChoosers[i].getSelectedViewType$() != type) {
viewChoosers[i].ignoreSelectedTrack=true;
}viewChoosers[i].setSelectedViewType$I(type);
viewChoosers[i].refresh$();
viewChoosers[i].repaint$();
}}
trackerPanel.selectedViewsProperty=null;
}if (trackerPanel.selectedTrackViewsProperty != null ) {
var val=trackerPanel.selectedTrackViewsProperty.getPropertyContent$().get$I(0).toString();
var forChoosers=val.split$S(";");
for (var i=0; i < viewChoosers.length; i++) {
var selectedNames=forChoosers[i].split$S(",");
var tviews=viewChoosers[i].getTViews$();
for (var k=0; k < selectedNames.length; k++) {
if (!selectedNames[k].equals$O("null") && tviews[k] != null  ) {
var view=tviews[k];
var track=trackerPanel.getTrack$S(selectedNames[k]);
if (view.getSelectedTrack$() !== track ) {
view.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
if (viewChoosers[i].getSelectedView$() === view ) {
viewChoosers[i].refresh$();
viewChoosers[i].repaint$();
}}}}
}
trackerPanel.selectedViewTypesProperty=null;
}this.placeViews$org_opensourcephysics_cabrillo_tracker_TFrame_TTabPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TViewChooserA(tabPanel, trackerPanel, viewChoosers);
tabPanel.setToolbarVisible$Z(true);
p$1.initialize$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [trackerPanel]);
var panel=this.tabbedPane.getComponentAt$I(tab);
$I$(39).setFonts$java_awt_Container(panel);
for (var track, $track = trackerPanel.getTracksTemp$().iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
track.setAnglesInRadians$Z(trackerPanel.anglesInRadians);
}
trackerPanel.clearTemp$();
this.setIgnoreRepaint$Z(false);
trackerPanel.refreshTrackData$I(4);
if (doSelect) this.setSelectedTab$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
if (doRefresh) this.refresh$();
if (whenDone != null ) {
whenDone.run$();
}var panelID=trackerPanel.getID$();
$I$(9,"trigger$I$java_awt_event_ActionListener",[100, ((P$.TFrame$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "TFrame$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var tp=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getTrackerPanelForID$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [this.$finals$.panelID]);
if (this.$finals$.doRefresh) tp.refreshTrackBar$.apply(tp, []);
tp.getDataBuilder$.apply(tp, []);
tp.changed=false;
});
})()
), Clazz.new_(P$.TFrame$lambda2.$init$,[this, {doRefresh:doRefresh,panelID:panelID}]))]);
}, p$1);

Clazz.newMeth(C$, 'saveAllTabs$Z$java_util_function_Function$Runnable$Runnable',  function (isExit, whenEachApproved, whenAllApproved, whenCanceled) {
var tab=Clazz.array(Integer.TYPE, -1, [this.getTabCount$() - 1]);
var trackerPanel=this.getTrackerPanelForTab$I(tab[0]);
if (trackerPanel == null ) return;
var whenClosed=((P$.TFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['apply$Boolean','apply$O'],  function (doSave) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getTrackerPanelForTab$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [this.$finals$.tab[0]]);
if ((!this.$finals$.isExit || (doSave).$c() ) && this.$finals$.whenEachApproved != null  ) {
this.$finals$.whenEachApproved.apply$O(trackerPanel.getID$());
}--this.$finals$.tab[0];
if (this.$finals$.tab[0] > -1) {
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getTrackerPanelForTab$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [this.$finals$.tab[0]]).askSaveIfChanged$java_util_function_Function$Runnable(this, this.$finals$.whenCanceled);
} else if (this.$finals$.whenAllApproved != null ) this.$finals$.whenAllApproved.run$();
return null;
});
})()
), Clazz.new_(P$.TFrame$2.$init$,[this, {whenAllApproved:whenAllApproved,whenCanceled:whenCanceled,tab:tab,isExit:isExit,whenEachApproved:whenEachApproved}]));
trackerPanel.askSaveIfChanged$java_util_function_Function$Runnable(whenClosed, whenCanceled);
});

Clazz.newMeth(C$, 'relaunchCurrentTabs$',  function () {
var filenames=Clazz.new_($I$(5,1));
this.saveAllTabs$Z$java_util_function_Function$Runnable$Runnable(false, ((P$.TFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['apply$Integer','apply$O'],  function (panelID) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getTrackerPanelForID$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [panelID]);
var datafile=trackerPanel.getDataFile$();
if (datafile == null ) {
var path=trackerPanel.openedFromPath;
if (path != null ) {
datafile=Clazz.new_($I$(6,1).c$$S,[path]);
}}if (datafile != null ) {
var fileName=datafile.getAbsolutePath$();
if (!this.$finals$.filenames.contains$O(fileName)) {
this.$finals$.filenames.add$O(fileName);
}}return null;
});
})()
), Clazz.new_(P$.TFrame$3.$init$,[this, {filenames:filenames}])), ((P$.TFrame$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var args=this.$finals$.filenames.isEmpty$() ? null : this.$finals$.filenames.toArray$OA(Clazz.array(String, [0]));
$I$(55).relaunch$SA$Z(args, false);
});
})()
), Clazz.new_(P$.TFrame$4.$init$,[this, {filenames:filenames}])), null);
});

Clazz.newMeth(C$, 'removeAllTabs$Z',  function (isExit) {
if (!this.haveContent$() && this.getTabCount$() == 1 ) {
this.removeTabNow$I(0);
$I$(47).dump$();
if (isExit) System.exit$I(0);
return;
}p$1.hideNotes.apply(this, []);
var panels=Clazz.new_($I$(5,1));
var cancelled=Clazz.array(Boolean.TYPE, -1, [false]);
this.removingAll=true;
this.saveAllTabs$Z$java_util_function_Function$Runnable$Runnable(false, ((P$.TFrame$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "TFrame$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$Integer','apply$O'],  function (panelID) /*block*/{
if (!this.$finals$.cancelled[0]) this.$finals$.panels.add$O.apply(this.$finals$.panels, [panelID]);
return null;
});
})()
), Clazz.new_(P$.TFrame$lambda3.$init$,[this, {cancelled:cancelled,panels:panels}])), ((P$.TFrame$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "TFrame$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
if (this.$finals$.isExit) System.exit$I(0);
while (this.$finals$.panels.size$.apply(this.$finals$.panels, []) > 0){
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].removeTabSynchronously$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getTrackerPanelForID$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [this.$finals$.panels.remove$I.apply(this.$finals$.panels, [0])])]);
}
$I$(47).dump$();
p$1.checkMemTest.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].removingAll=false;
});
})()
), Clazz.new_(P$.TFrame$lambda4.$init$,[this, {isExit:isExit,panels:panels}])), ((P$.TFrame$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "TFrame$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.$finals$.cancelled[0]=true;
this.$finals$.panels.clear$.apply(this.$finals$.panels, []);
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].removingAll=false;
});
})()
), Clazz.new_(P$.TFrame$lambda5.$init$,[this, {cancelled:cancelled,panels:panels}])));
});

Clazz.newMeth(C$, 'checkMemTest',  function () {
if (!$I$(9).isJS) {
System.gc$();
System.gc$();
try {
$I$(56).sleep$J(100);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
e.printStackTrace$();
} else {
throw e;
}
}
System.gc$();
System.gc$();
System.out.println$S("TFrame memory:" + $I$(9).getMemoryStr$());
}}, p$1);

Clazz.newMeth(C$, 'hideNotes',  function () {
if (this.notesVisible$()) {
p$2.setVisible$Z.apply(this.notes, [false]);
}}, p$1);

Clazz.newMeth(C$, 'getState$',  function () {
return this.$$state;
});

Clazz.newMeth(C$, 'isRemovingAll$',  function () {
return this.removingAll;
});

Clazz.newMeth(C$, 'doCloseAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
if (this.getTab$Integer(trackerPanel.getID$()) < 0) return false;
var removeTab=((P$.TFrame$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "TFrame$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$Boolean','apply$O'],  function (doSave) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].removeTabSynchronously$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [this.$finals$.trackerPanel]);
return null;
});
})()
), Clazz.new_(P$.TFrame$lambda6.$init$,[this, {trackerPanel:trackerPanel}]));
trackerPanel.askSaveIfChanged$java_util_function_Function$Runnable(removeTab, null);
return true;
});

Clazz.newMeth(C$, 'removeTabSynchronously$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
if (trackerPanel == null ) return;
this.$$state=3;
var panelID=trackerPanel.getID$();
var id=panelID.intValue$();
var tab=this.getTab$Integer(panelID);
var tabPanel=this.getTabPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
p$1.closeAllDialogs$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TFrame_TTabPanel.apply(this, [trackerPanel, tabPanel]);
try {
this.tabbedPane.remove$I(tab);
this.tabbedPane.remove$java_awt_Component(tabPanel);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
if (trackerPanel.trackControl != null ) {
this.deallocate$org_opensourcephysics_display_OSPRuntime_Disposable(trackerPanel.trackControl);
}var objects=tabPanel.getObjects$();
var sideViews=objects[1];
if (sideViews != null ) for (var i=0; i < sideViews.length; i++) {
this.deallocate$org_opensourcephysics_display_OSPRuntime_Disposable(sideViews[i]);
sideViews[i]=null;
}
objects[1]=null;
if (objects[0] != null ) this.deallocate$org_opensourcephysics_display_OSPRuntime_Disposable(objects[0]);
objects[0]=null;
$I$(47).deallocate$org_opensourcephysics_display_OSPRuntime_DisposableA$I(this._atoolbars, id);
$I$(47).deallocate$org_opensourcephysics_display_OSPRuntime_DisposableA$I(this._atrackbars, id);
$I$(47).deallocate$org_opensourcephysics_display_OSPRuntime_DisposableA$I(this._amenubars, id);
var panes=objects[2];
for (var i=0; i < panes.length; i++) {
var pane=panes[i];
pane.removeAll$();
}
for (var i=0; i < panes.length; i++) {
panes[i]=null;
}
objects[2]=null;
if (this.prefsDialog != null ) {
this.prefsDialog.panelID=null;
}$I$(57).undomap.remove$O(panelID);
$I$(47).deallocate$org_opensourcephysics_display_OSPRuntime_DisposableA$I(this._apanels, id);
this.deallocatePanelID$Integer(panelID);
System.gc$();
$I$(47).deallocate$org_opensourcephysics_display_OSPRuntime_Disposable(tabPanel);
this.firePropertyChange$S$O$O("tab", trackerPanel, null);
trackerPanel=null;
tabPanel=this.tabbedPane.getSelectedComponent$();
objects=(tabPanel == null  ? null : tabPanel.getObjects$());
var currentBar=this.getJMenuBar$();
if (currentBar === this.defaultMenuBar ) {
} else if (objects == null ) {
$I$(39,"setFonts$O$I",[this.defaultMenuBar, $I$(39).getLevel$()]);
this.setJMenuBar$javax_swing_JMenuBar(this.defaultMenuBar);
$I$(47).deallocate$org_opensourcephysics_display_OSPRuntime_DisposableA$I(this._amenubars, id);
} else if (tabPanel != null ) {
id=tabPanel.panelID.intValue$();
this.setJMenuBar$javax_swing_JMenuBar(this.getMenuBar$Integer$Z(Integer.valueOf$I(id), true));
this.getTrackBar$Integer$Z(Integer.valueOf$I(id), true).refresh$();
this.playerBar=(objects[0]).getPlayerBar$();
var frame=this.playerBar.getTopLevelAncestor$();
if (frame != null  && frame !== this  ) frame.setVisible$Z(true);
}if (this.getTabCount$() == 0) {
p$1.clearAllReferences.apply(this, []);
}this.$$state=(this.frameBlocker == null  ? 0 : 2);
});

Clazz.newMeth(C$, 'clearAllReferences',  function () {
if (this.notes != null ) {
p$2.dispose.apply(this.notes, []);
this.notes=null;
}this.playerBar=null;
}, p$1);

Clazz.newMeth(C$, 'closeAllDialogs$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TFrame_TTabPanel',  function (trackerPanel, tabPanel) {
if (this.notesVisible$() && !trackerPanel.getTitle$().equals$O("Untitled") ) {
p$2.dispose.apply(this.notes, []);
}}, p$1);

Clazz.newMeth(C$, 'getTab$Integer',  function (panelID) {
for (var i=this.getTabCount$(); --i >= 0; ) {
var panel=this.tabbedPane.getComponentAt$I(i);
if (panel.panelID === panelID ) return i;
}
return -1;
});

Clazz.newMeth(C$, 'getTabForID$Integer',  function (panelID) {
for (var i=this.getTabCount$(); --i >= 0; ) {
var panel=this.tabbedPane.getComponentAt$I(i);
if (panel.getTrackerPanel$().getID$() === panelID ) return i;
}
return -1;
});

Clazz.newMeth(C$, 'getTab$java_io_File',  function (dataFile) {
if (dataFile == null ) return -1;
try {
var path=dataFile.getCanonicalPath$();
for (var i=this.getTabCount$(); --i >= 0; ) {
var file=(this.tabbedPane.getComponentAt$I(i)).getTrackerPanel$().getDataFile$();
if (file != null  && path.equals$O(file.getCanonicalPath$()) ) {
return i;
}}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return -1;
});

Clazz.newMeth(C$, 'getTabCount$',  function () {
return this.tabbedPane.getTabCount$();
});

Clazz.newMeth(C$, 'getSelectedTab$',  function () {
return this.tabbedPane == null  ? -1 : this.tabbedPane.getSelectedIndex$();
});

Clazz.newMeth(C$, 'setSelectedTab$I',  function (tab) {
if (tab < 0 || tab >= this.getTabCount$() ) return;
this.tabbedPane.setSelectedIndex$I(tab);
this.updateNotesDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.getTrackerPanelForTab$I(tab));
});

Clazz.newMeth(C$, 'setSelectedTab$java_io_File',  function (dataFile) {
this.setSelectedTab$I(this.getTab$java_io_File(dataFile));
});

Clazz.newMeth(C$, 'setSelectedTab$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
this.setSelectedTab$I(this.getTab$Integer(trackerPanel.getID$()));
});

Clazz.newMeth(C$, 'getTrackerPanelForTab$I',  function (tab) {
return (tab < 0 || tab >= this.tabbedPane.getTabCount$()  ? null : (this.tabbedPane.getComponentAt$I(tab)).getTrackerPanel$());
});

Clazz.newMeth(C$, 'getSelectedPanel$',  function () {
return this.getTrackerPanelForTab$I(this.getSelectedTab$());
});

Clazz.newMeth(C$, 'addTrackerPanel$Z$Runnable',  function (changedState, whenDone) {
var newPanel=Clazz.new_($I$(44,1).c$$org_opensourcephysics_cabrillo_tracker_TFrame,[this]);
var panelID=newPanel.getID$();
this.addTab$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$Runnable(newPanel, 1, ((P$.TFrame$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "TFrame$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
if (!this.$finals$.changedState) this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getTrackerPanelForID$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [this.$finals$.panelID]).changed=false;
if (this.$finals$.whenDone == null ) this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].refresh$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
 else this.$finals$.whenDone.run$();
});
})()
), Clazz.new_(P$.TFrame$lambda7.$init$,[this, {panelID:panelID,changedState:changedState,whenDone:whenDone}])));
});

Clazz.newMeth(C$, 'getTabTitle$I',  function (tab) {
return (tab < 0 ? null : this.tabbedPane.getTitleAt$I(tab));
});

Clazz.newMeth(C$, 'refreshTab$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
var tab=this.getTab$Integer(panel.getID$());
this.tabbedPane.setTitleAt$I$S(tab, panel.getTitle$());
this.tabbedPane.setToolTipTextAt$I$S(tab, panel.getToolTipPath$());
});

Clazz.newMeth(C$, 'setTabTitle$I$S',  function (tab, title) {
this.tabbedPane.setTitleAt$I$S(tab, title);
});

Clazz.newMeth(C$, 'placeViews$org_opensourcephysics_cabrillo_tracker_TFrame_TTabPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TViewChooserA',  function (tabPanel, trackerPanel, viewChoosers) {
if (viewChoosers == null ) viewChoosers=Clazz.array($I$(58), [0]);
var order=C$.isPortraitLayout$() ? C$.PORTRAIT_VIEW_ORDER : C$.DEFAULT_ORDER;
var objects=tabPanel.getObjects$();
var choosers=objects[1];
if (choosers != null ) for (var i=0; i < Math.min(viewChoosers.length, choosers.length); i++) {
if (viewChoosers[i] != null ) choosers[i]=viewChoosers[i];
}
if (order == null  || order.length != viewChoosers.length ) {
order=C$.DEFAULT_ORDER;
}var mainView=objects[0];
var panes=objects[2];
if ((tabPanel.getLayout$()).getLayoutComponent$O("Center") !== panes[0] ) {
tabPanel.removeAll$();
tabPanel.add$java_awt_Component$O(panes[0], "Center");
}p$1.addPaneSafely$javax_swing_JSplitPane$I$java_awt_Component.apply(this, [panes[0], 2, panes[2]]);
p$1.addPaneSafely$javax_swing_JSplitPane$I$java_awt_Component.apply(this, [panes[0], 1, panes[1]]);
p$1.addPaneSafely$javax_swing_JSplitPane$I$java_awt_Component.apply(this, [panes[2], 0, mainView]);
p$1.addPaneSafely$javax_swing_JSplitPane$I$java_awt_Component.apply(this, [panes[2], 3, panes[3]]);
if (choosers != null ) {
p$1.addPaneSafely$javax_swing_JSplitPane$I$java_awt_Component.apply(this, [panes[1], 0, choosers[order[0]]]);
p$1.addPaneSafely$javax_swing_JSplitPane$I$java_awt_Component.apply(this, [panes[1], 3, choosers[order[1]]]);
p$1.addPaneSafely$javax_swing_JSplitPane$I$java_awt_Component.apply(this, [panes[3], 1, choosers[order[2]]]);
p$1.addPaneSafely$javax_swing_JSplitPane$I$java_awt_Component.apply(this, [panes[3], 2, choosers[order[3]]]);
}});

Clazz.newMeth(C$, 'getTabPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var tab=this.getTab$Integer(trackerPanel.getID$());
return (tab >= 0 ? this.tabbedPane.getComponentAt$I(tab) : null);
});

Clazz.newMeth(C$, 'addPaneSafely$javax_swing_JSplitPane$I$java_awt_Component',  function (pane, where, c) {
switch (where) {
case 0:
if (pane.getTopComponent$() !== c ) pane.setTopComponent$java_awt_Component(c);
break;
case 1:
if (pane.getRightComponent$() !== c ) pane.setRightComponent$java_awt_Component(c);
break;
case 2:
if (pane.getLeftComponent$() !== c ) pane.setLeftComponent$java_awt_Component(c);
break;
case 3:
if (pane.getBottomComponent$() !== c ) pane.setBottomComponent$java_awt_Component(c);
break;
}
}, p$1);

Clazz.newMeth(C$, 'arrangeViews$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z$Z',  function (trackerPanel, showDefaultViews, showOtherViews) {
if (!C$.isLayoutAdaptive) return;
var tabPanel=this.getTabPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
this.placeViews$org_opensourcephysics_cabrillo_tracker_TFrame_TTabPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TViewChooserA(tabPanel, trackerPanel, this.getViewChoosers$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel));
tabPanel.setToolbarVisible$Z(true);
var showRight=(C$.isPortraitOrientation ? showOtherViews : showDefaultViews);
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, 0, showRight ? 0.67 : 1.0);
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, 1, 0.57);
var showBottom=(C$.isPortraitOrientation ? showDefaultViews : showOtherViews);
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, 2, showBottom ? 0.57 : 1.0);
var panelID=trackerPanel.getID$();
$I$(59,"invokeLater$Runnable",[((P$.TFrame$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "TFrame$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getTrackerPanelForID$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [this.$finals$.panelID]), 3, 0.5]);
});
})()
), Clazz.new_(P$.TFrame$lambda8.$init$,[this, {panelID:panelID}]))]);
});

Clazz.newMeth(C$, 'getTViews$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z',  function (trackerPanel, customOnly) {
var choosers=this.getViewChoosers$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
if (choosers == null ) return null;
var array=Clazz.array($I$(60), [choosers.length, null]);
if (!customOnly) {
for (var i=0; i < choosers.length; i++) {
array[i]=(choosers[i] == null  ? null : choosers[i].getTViews$());
}
return array;
}for (var i=0; i < choosers.length; i++) {
var views=choosers[i].getTViews$();
if (views != null ) for (var j=0; j < views.length; j++) {
var next=views[j];
if (next != null  && next.isCustomState$() ) {
if (array[i] == null ) array[i]=Clazz.array($I$(60), [4]);
array[i][j]=next;
}}
}
return array;
});

Clazz.newMeth(C$, 'getTViews$Integer$I$java_util_List',  function (panelID, viewType, list) {
if (list == null ) list=Clazz.new_($I$(5,1));
var choosers=this.getViewChoosers$Integer(panelID);
for (var i=0; i < choosers.length; i++) {
if (choosers[i] == null ) continue;
var views=choosers[i].getTViews$();
if (viewType == -1) {
for (var j=0; j < views.length; j++) {
if (views[j] != null ) list.add$O(views[j]);
}
} else if (choosers[i].getSelectedViewType$() == viewType) {
list.add$O(views[viewType]);
}}
return list;
});

Clazz.newMeth(C$, 'getSelectedViewTypes$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var choosers=this.getViewChoosers$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
var selectedViews=Clazz.array(Integer.TYPE, [4]);
for (var i=0; i < selectedViews.length; i++) {
selectedViews[i]=choosers[i].getSelectedViewType$();
}
return selectedViews;
});

Clazz.newMeth(C$, 'getSelectedTrackViews$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var buf=Clazz.new_($I$(61,1));
var choosers=this.getViewChoosers$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
for (var i=0; i < choosers.length; i++) {
if (i > 0) buf.append$S(";");
var views=choosers[i].getTViews$();
if (views[0] != null ) {
var view=views[0];
var track=view.getSelectedTrack$();
buf.append$S(track == null  ? "null," : track.getName$() + ",");
} else buf.append$S("null,");
if (views[1] != null ) {
var view=views[1];
var track=view.getSelectedTrack$();
buf.append$S(track == null  ? "null" : track.getName$());
} else buf.append$S("null");
}
return buf.toString();
});

Clazz.newMeth(C$, 'isViewPaneVisible$I$Integer',  function (position, panelID) {
var panes=this.getSplitPanes$Integer(panelID);
var locs=Clazz.array(Double.TYPE, [panes.length]);
for (var i=0; i < panes.length; i++) {
var max=panes[i].getMaximumDividerLocation$();
locs[i]=1.0 * panes[i].getDividerLocation$() / max;
}
switch (position) {
case 0:
return locs[0] < 0.95  && locs[1] > 0.05  ;
case 1:
return locs[0] < 0.95  && locs[1] < 0.95  ;
case 2:
return locs[2] < 0.92  && locs[3] < 0.95  ;
case 3:
return locs[2] < 0.95  && locs[3] > 0.05  ;
}
return false;
});

Clazz.newMeth(C$, 'areViewsVisible$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (whichViews, trackerPanel) {
var standardLayout=this.getSplitPane$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(trackerPanel, 1).getTopComponent$() === this.getViewChoosers$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel)[0] ;
var splitPaneIndex=whichViews == 0 && standardLayout  ? 0 : whichViews == 1 && !standardLayout  ? 0 : 2;
var pane=this.getSplitPane$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(trackerPanel, splitPaneIndex);
var max=pane.getMaximumDividerLocation$();
var cur=pane.getDividerLocation$();
var loc=1.0 * cur / max;
return splitPaneIndex == 0 ? loc < 0.95  : loc < 0.92 ;
});

Clazz.newMeth(C$, 'setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D',  function (trackerPanel, paneIndex, loc) {
var panes=this.getSplitPanes$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
if (paneIndex < panes.length) {
panes[paneIndex].setDividerLocation$D(loc);
}});

Clazz.newMeth(C$, 'setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$I',  function (trackerPanel, paneIndex, loc) {
var panes=this.getSplitPanes$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
if (paneIndex < panes.length) {
panes[paneIndex].setDividerLocation$I(loc);
}});

Clazz.newMeth(C$, 'getSplitPane$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I',  function (trackerPanel, paneIndex) {
var panes=this.getSplitPanes$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
return (paneIndex < panes.length ? panes[paneIndex] : null);
});

Clazz.newMeth(C$, 'getMainView$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var objects=p$1.getObjects$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [trackerPanel]);
return (objects == null  ? null : objects[0] == null  ? Clazz.new_($I$(54,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[trackerPanel]) : objects[0]);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var panel;
var panelID;
switch (e.getPropertyName$()) {
case "datafile":
case "video":
panel=e.getSource$();
this.refreshTab$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel);
break;
case "progress":
var val=e.getNewValue$();
var vidName=$I$(4,"forwardSlash$S",[e.getOldValue$()]);
if (val != null ) try {
this.framesLoaded=Integer.parseInt$S(val.toString());
$I$(12,"setProgress$S$S$I",[vidName, val.toString(), this.framesLoaded]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
break;
case "stalled":
var fileName=$I$(4,"getName$S",[e.getNewValue$()]);
var s=$I$(17).getString$S("TFrame.Dialog.StalledVideo.Message0") + "\n" + $I$(17).getString$S("TFrame.Dialog.StalledVideo.Message1") + "\n" + $I$(17).getString$S("TFrame.Dialog.StalledVideo.Message2") + "\n\n" + $I$(17).getString$S("TFrame.Dialog.StalledVideo.Message3") ;
var stop=$I$(17).getString$S("TFrame.Dialog.StalledVideo.Button.Stop");
var wait=$I$(17).getString$S("TFrame.Dialog.StalledVideo.Button.Wait");
var response=$I$(10,"showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O",[this, s, $I$(17).getString$S("TFrame.Dialog.StalledVideo.Title") + ": " + fileName , 0, 2, null, Clazz.array(String, -1, [stop, wait]), stop]);
if (response == 0) {
$I$(62).setCanceled$Z(true);
$I$(12).closeMonitor$S(fileName);
}break;
case "locale":
$I$(47).deallocate$org_opensourcephysics_display_OSPRuntime_DisposableA$java_util_BitSet(this._amenubars, this._bsPanelIDs);
$I$(20).createActions$();
this.checkLocale$();
this.setJMenuBar$javax_swing_JMenuBar(this.defaultMenuBar=Clazz.new_($I$(63,1),[this, null]));
$I$(39,"setFonts$O$I",[this.defaultMenuBar, $I$(39).getLevel$()]);
for (var i=this.getTabCount$(); --i >= 0; ) {
var objects=this.getObjects$I(i);
var mainView=objects[0];
panel=mainView.getTrackerPanel$();
panelID=panel.getID$();
var changed=panel.changed;
$I$(47,"deallocate$org_opensourcephysics_display_OSPRuntime_DisposableA$I",[this._amenubars, panelID.intValue$()]);
this.getMenuBar$Integer$Z(panelID, true);
var axes=panel.getAxes$();
if (axes != null ) {
axes.setName$S($I$(17).getString$S("CoordAxes.New.Name"));
}panel.changed=changed;
this.getToolBar$Integer$Z(panelID, true).refresh$S("TFrame.locale");
this.getTrackBar$Integer$Z(panelID, true).refresh$();
}
panel=this.getSelectedPanel$();
if (panel != null ) {
var menuBar=this.getMenuBar$Integer$Z(panel.getID$(), false);
if (menuBar != null ) {
this.setJMenuBar$javax_swing_JMenuBar(menuBar);
menuBar.refresh$S("TFrame.locale");
}if ($I$(20).startupHintShown) {
panel.setMessage$S($I$(17).getString$S("Tracker.Startup.Hint"));
} else {
panel.setCursorForMarking$Z$java_awt_event_InputEvent(false, null);
}} else {
$I$(39,"setFonts$O$I",[this.defaultMenuBar, $I$(39).getLevel$()]);
this.setJMenuBar$javax_swing_JMenuBar(this.defaultMenuBar);
}for (var i=this.tabbedPane.getTabCount$(); --i >= 0; ) {
panel=this.getTrackerPanelForTab$I(i);
panelID=panel.getID$();
this.tabbedPane.setTitleAt$I$S(i, panel.getTitle$());
var player=panel.getPlayer$();
player.refresh$();
player.setLocale$java_util_Locale(e.getNewValue$());
var vid=panel.getVideo$();
if (vid != null ) {
vid.getFilterStack$().refresh$();
}$I$(64).getControl$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).refresh$();
this.getToolBar$Integer$Z(panelID, false).refresh$S("TFrame.locale2 ??");
this.getTrackBar$Integer$Z(panelID, false).refresh$();
var choosers=this.getViewChoosers$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel);
for (var j=0; j < choosers.length; j++) {
choosers[j].refresh$();
}
if (panel.autoTracker != null ) {
panel.autoTracker.getWizard$().textPaneSize=null;
panel.autoTracker.getWizard$().refreshGUI$();
panel.autoTracker.getWizard$().pack$();
}if (this.prefsDialog != null  && this.prefsDialog.isVisible$() ) {
this.prefsDialog.refreshGUI$();
}$I$(65).getDrawer$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).refresh$();
if (this.notesVisible$()) p$2.refreshTextAndFonts.apply(this.notes, []);
}
this.validate$();
if (this.helpLauncher != null ) {
var search=$I$(66).getNavComponentsFor$org_opensourcephysics_tools_Launcher(this.helpLauncher);
var comps=Clazz.array($I$(67), [search.length + 2]);
System.arraycopy$O$I$O$I$I(search, 0, comps, 0, search.length);
$I$(20).pdfHelpButton.setText$S($I$(17).getString$S("Tracker.Button.PDFHelp"));
comps[comps.length - 2]=$I$(20).pdfHelpButton;
comps[comps.length - 1]=$I$(2).createHorizontalStrut$I(4);
this.helpLauncher.setNavbarRightEndComponents$java_awt_ComponentA(comps);
}break;
default:
break;
}
});

Clazz.newMeth(C$, 'setVisible$Z',  function (visible) {
C$.superclazz.prototype.setVisible$Z.apply(this, [visible]);
$I$(20).checkSplash$();
});

Clazz.newMeth(C$, 'getPrefsDialog$',  function () {
var trackerPanel=this.getSelectedPanel$();
if (this.prefsDialog != null ) {
var id=trackerPanel == null  ? null : trackerPanel.getID$();
if (this.prefsDialog.panelID !== id ) {
this.prefsDialog.panelID=id;
this.prefsDialog.refreshGUI$();
}} else {
this.prefsDialog=Clazz.new_($I$(68,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TFrame,[trackerPanel, this]);
var dim=$I$(15).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.prefsDialog.getBounds$().width)/2|0);
var y=((dim.height - this.prefsDialog.getBounds$().height)/2|0);
this.prefsDialog.setLocation$I$I(x, y);
}return this.prefsDialog;
});

Clazz.newMeth(C$, 'showPrefsDialog$',  function () {
var runner=((P$.TFrame$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var prefsDialog=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getPrefsDialog$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
prefsDialog.setVisible$Z(true);
prefsDialog.requestFocus$();
});
})()
), Clazz.new_(P$.TFrame$5.$init$,[this, null]));
Clazz.new_($I$(56,1).c$$Runnable,[runner]).start$();
});

Clazz.newMeth(C$, 'showPrefsDialog$S',  function (tabName) {
var runner=((P$.TFrame$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var prefsDialog=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getPrefsDialog$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
if (this.$finals$.tabName != null ) {
if (this.$finals$.tabName.contains$CharSequence("runtime")) prefsDialog.tabbedPane.setSelectedComponent$java_awt_Component(prefsDialog.runtimePanel);
 else if (this.$finals$.tabName.contains$CharSequence("video")) prefsDialog.tabbedPane.setSelectedComponent$java_awt_Component(prefsDialog.videoPanel);
 else if (this.$finals$.tabName.contains$CharSequence("general")) prefsDialog.tabbedPane.setSelectedComponent$java_awt_Component(prefsDialog.generalPanel);
 else if (this.$finals$.tabName.contains$CharSequence("display")) prefsDialog.tabbedPane.setSelectedComponent$java_awt_Component(prefsDialog.displayPanel);
}prefsDialog.setVisible$Z(true);
prefsDialog.requestFocus$();
});
})()
), Clazz.new_(P$.TFrame$6.$init$,[this, {tabName:tabName}]));
Clazz.new_($I$(56,1).c$$Runnable,[runner]).start$();
});

Clazz.newMeth(C$, 'createTViews$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
if (!$I$(20).allowViews) {
return Clazz.array($I$(58), [4]);
}return Clazz.array($I$(58), -1, [C$.newTViewChooser$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(trackerPanel, 0), C$.newTViewChooser$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(trackerPanel, 1), C$.newTViewChooser$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(trackerPanel, 2), C$.newTViewChooser$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(trackerPanel, 3)]);
}, 1);

Clazz.newMeth(C$, 'newTViewChooser$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I',  function (trackerPanel, view) {
var c=Clazz.new_($I$(58,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I,[trackerPanel, view]);
return c;
}, 1);

Clazz.newMeth(C$, 'getSplitPanes$Integer',  function (panelID) {
return this.getSplitPanes$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.getTrackerPanelForID$Integer(panelID));
});

Clazz.newMeth(C$, 'getSplitPanes$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var objects=p$1.getObjects$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [trackerPanel]);
if (objects != null  && objects[2] != null  ) {
return objects[2];
}var panes=Clazz.array($I$(69), [4]);
panes[0]=Clazz.new_($I$(69,1).c$$I,[1]);
panes[1]=Clazz.new_($I$(69,1).c$$I,[0]);
panes[2]=Clazz.new_($I$(69,1).c$$I,[0]);
panes[3]=((P$.TFrame$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JSplitPane'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMinimumSize$',  function () {
return Clazz.new_($I$(28,1).c$$I$I,[0, 0]);
});
})()
), Clazz.new_($I$(69,1).c$$I,[this, null, 1],P$.TFrame$7));
panes[0].setName$S("TOP(0)");
panes[1].setName$S("RIGHT(1)");
panes[2].setName$S("LEFT(2)");
panes[3].setName$S("BOTTOM(3)");
C$.setDefaultWeights$javax_swing_JSplitPaneA(panes);
return panes;
});

Clazz.newMeth(C$, 'setDefaultWeights$javax_swing_JSplitPaneA',  function (panes) {
C$.setDefaultWeight$javax_swing_JSplitPane$D(panes[0], 1.0);
C$.setDefaultWeight$javax_swing_JSplitPane$D(panes[1], 0.5);
C$.setDefaultWeight$javax_swing_JSplitPane$D(panes[2], 1.0);
C$.setDefaultWeight$javax_swing_JSplitPane$D(panes[3], 0.5);
}, 1);

Clazz.newMeth(C$, 'setDefaultWeight$javax_swing_JSplitPane$D',  function (pane, d) {
pane.setDividerSize$I(10);
pane.setResizeWeight$D(d);
pane.setOneTouchExpandable$Z(true);
}, 1);

Clazz.newMeth(C$, 'maximizeView$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I',  function (trackerPanel, viewIndex) {
this.saveCurrentDividerLocations$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
trackerPanel.setMaximizedView$I(viewIndex);
var panes=this.getSplitPanes$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
for (var i=0; i < panes.length; i++) {
panes[i].setDividerSize$I(0);
}
var order=(C$.isPortraitLayout$() ? C$.PORTRAIT_VIEW_ORDER : C$.DEFAULT_ORDER);
var viewPosition=viewIndex < order.length ? order[viewIndex] : viewIndex;
switch (viewPosition) {
case 0:
panes[1].setResizeWeight$D(1);
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, 0, 0.0);
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, 1, 1.0);
break;
case 1:
panes[1].setResizeWeight$D(0);
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, 0, 0.0);
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, 1, 0.0);
break;
case 2:
panes[3].setResizeWeight$D(0);
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, 0, 1.0);
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, 2, 0.0);
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, 3, 0.0);
break;
case 3:
panes[3].setResizeWeight$D(1);
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, 0, 1.0);
var max=panes[0].getMaximumDividerLocation$();
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, 2, 0.0);
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$I(trackerPanel, 3, max);
break;
case 4:
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, 0, 1.0);
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, 2, 1.0);
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, 3, 0.0);
}
var menubar=this.getMenuBar$Integer$Z(trackerPanel.getID$(), true);
menubar.setMenuTainted$I$Z(32, true);
var player=this.getMainView$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel).getPlayerBar$();
if (trackerPanel.getMaximizedView$() == 4) {
this.getMainView$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel).add$java_awt_Component$O(player, "South");
var tbar=this.getTrackBar$Integer$Z(trackerPanel.getID$(), false);
if (tbar != null ) tbar.rebuild$();
} else {
var choosers=this.getViewChoosers$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
for (var i=0; i < choosers.length; i++) {
choosers[i].refreshToolbar$();
if (trackerPanel.getMaximizedView$() == i) {
choosers[i].add$java_awt_Component$O(player, "South");
}}
}});

Clazz.newMeth(C$, 'saveCurrentDividerLocations$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
if (trackerPanel.getMaximizedView$() != -1) return;
if (trackerPanel.dividerLocs == null ) trackerPanel.dividerLocs=Clazz.array(Double.TYPE, [4]);
for (var i=0; i < trackerPanel.dividerFractions.length; i++) {
var pane=this.getSplitPane$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(trackerPanel, i);
var max=pane.getMaximumDividerLocation$();
var cur=Math.min(pane.getDividerLocation$(), max);
trackerPanel.dividerLocs[i]=cur;
var fraction=1.0 * cur / max;
fraction=fraction < 0.07  && (i == 1 || i == 3 )  ? 0 : fraction;
fraction=fraction > 0.9299999999999999  ? 1 : fraction;
trackerPanel.dividerFractions[i]=fraction;
}
});

Clazz.newMeth(C$, 'restoreViews$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
if (trackerPanel.getMaximizedView$() == -1) return;
var closedViews=trackerPanel.dividerFractions[0] > 0.95  && trackerPanel.dividerFractions[2] > 0.95  ;
for (var i=0; i < trackerPanel.dividerFractions.length; i++) {
if (closedViews && i == 0 ) this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, i, 0.67);
 else {
if (trackerPanel.dividerLocs == null ) this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, i, trackerPanel.dividerFractions[i]);
 else this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$I(trackerPanel, i, (trackerPanel.dividerLocs[i]|0));
}}
C$.setDefaultWeights$javax_swing_JSplitPaneA(this.getSplitPanes$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel));
trackerPanel.setMaximizedView$I(-1);
var menubar=this.getMenuBar$Integer$Z(trackerPanel.getID$(), true);
menubar.setMenuTainted$I$Z(32, true);
if (C$.isLayoutChanged) {
this.frameResized$();
}var choosers=this.getViewChoosers$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
for (var i=0; i < choosers.length; i++) {
choosers[i].refreshToolbar$();
}
var tbar=this.getTrackBar$Integer$Z(trackerPanel.getID$(), false);
if (tbar != null ) tbar.rebuild$();
});

Clazz.newMeth(C$, 'getTrackBar$Integer$Z',  function (panelID, forceNew) {
var i=panelID.intValue$();
var bar=this._atrackbars[i];
if (bar == null  && forceNew ) {
this._atrackbars[i]=bar=Clazz.new_($I$(45,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[this._apanels[i]]);
}return bar;
});

Clazz.newMeth(C$, 'getToolBar$Integer$Z',  function (panelID, forceNew) {
var i=panelID.intValue$();
var bar=this._atoolbars[i];
if (bar == null  && forceNew ) {
this._atoolbars[i]=Clazz.new_($I$(46,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[this._apanels[i]]);
}return bar;
});

Clazz.newMeth(C$, 'setToolBar$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TToolBar',  function (trackerPanel, toolbar) {
var i=(trackerPanel.getID$()).$c();
var old=this._atoolbars[i];
if (old != null ) $I$(47).deallocate$org_opensourcephysics_display_OSPRuntime_Disposable(old);
this._atoolbars[i]=toolbar;
});

Clazz.newMeth(C$, 'getMenuBar$Integer$Z',  function (panelID, forceNew) {
var panel=this.getTrackerPanelForID$Integer(panelID);
var i=panelID.intValue$();
var bar=this._amenubars[i];
if (bar == null  && forceNew ) {
bar=this._amenubars[i]=Clazz.new_($I$(22,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[panel]);
$I$(39).setFonts$java_awt_Container(bar);
}return bar;
});

Clazz.newMeth(C$, 'refreshOpenRecentMenu$javax_swing_JMenu',  function (menu) {

{}
});

Clazz.newMeth(C$, 'doRecentFiles$S',  function (path) {
var url=null;
if (!$I$(8).isHTTP$S(path)) {
var file=Clazz.new_($I$(6,1).c$$S,[path]);
if (!file.exists$()) {
var n=path.indexOf$S("!");
if (n >= 0 && !(file=Clazz.new_([path.substring$I$I(0, n)],$I$(6,1).c$$S)).exists$() ) {
try {
url=Clazz.new_($I$(70,1).c$$S,[path]);
} catch (e1) {
if (Clazz.exceptionOf(e1,"java.net.MalformedURLException")){
} else {
throw e1;
}
}
}}if (!file.exists$() && url == null  ) {
$I$(20).recentFiles.remove$O(path);
var panel=this.getSelectedPanel$();
if (panel != null ) {
this.refreshMenus$org_opensourcephysics_cabrillo_tracker_TrackerPanel$S(panel, "TFrame.openRecent");
}this.sayFileNotFound$S(path);
return;
}}this.doOpenURL$S(path);
});

Clazz.newMeth(C$, 'refresh$',  function () {
var panel=this.getSelectedPanel$();
if (panel == null ) return;
var panelID=panel.getID$();
var mb=this.getMenuBar$Integer$Z(panelID, false);
if (mb != null ) mb.refresh$S("TFrame.refresh");
var tb=this.getToolBar$Integer$Z(panelID, false);
if (tb != null ) tb.refresh$S("TFrame.refresh");
var rb=this.getTrackBar$Integer$Z(panelID, false);
if (rb != null ) rb.refresh$();
var choosers=this.getViewChoosers$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel);
if (choosers != null ) {
for (var next, $next = 0, $$next = choosers; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (Clazz.instanceOf(next, "org.opensourcephysics.cabrillo.tracker.TViewChooser")) {
var chooser=next;
chooser.refreshMenus$();
}}
}this.updateNotesDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel);
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
if (!$I$(9).allowSetFonts) return;
try {
C$.superclazz.prototype.setFontLevel$I.apply(this, [level]);
if (this.libraryBrowser != null ) {
this.libraryBrowser.setFontLevel$I(level);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (this.tabbedPane == null ) return;
C$.textLayoutFont=$I$(39).getResizedFont$java_awt_Font$I(C$.textLayoutFont, level);
for (var i=this.getTabCount$(); --i >= 0; ) {
var trackerPanel=this.getTrackerPanelForTab$I(i);
trackerPanel.setFontLevel$I(level);
}
if (C$.haveExportDialog) {
$I$(71).setFontLevels$I(level);
if ($I$(72).videoExporter != null ) {
$I$(72).videoExporter.setFontLevel$I(level);
}}if (C$.haveThumbnailDialog) {
if ($I$(73).thumbnailDialog != null ) {
$I$(39,"setFonts$O$I",[$I$(73).thumbnailDialog, level]);
$I$(73).thumbnailDialog.refreshGUI$();
}}if (this.prefsDialog != null ) {
this.prefsDialog.refreshGUI$();
}if (this.libraryBrowser != null ) {
this.libraryBrowser.setFontLevel$I(level);
}if (this.notesVisible$()) p$2.refreshTextAndFonts.apply(this.notes, []);
$I$(3).setFonts$I(level);
if ($I$(20).readmeDialog != null ) {
$I$(39,"setFonts$O$I",[$I$(20).readmeDialog, level]);
}if ($I$(20).startLogDialog != null ) {
$I$(39,"setFonts$O$I",[$I$(20).startLogDialog, level]);
}$I$(39).setFonts$O$I(this.defaultMenuBar, level);
if (this.helpLauncher != null ) {
this.helpLauncher.setFontLevel$I(level);
for (var i=0; i < this.helpLauncher.getTabCount$(); i++) {
var tab=this.helpLauncher.getTab$I(i);
if (level > 0) {
var newValue="help" + level + ".css" ;
tab.getHTMLSubstitutionMap$().put$O$O("help.css", newValue);
} else {
tab.getHTMLSubstitutionMap$().remove$O("help.css");
}}
for (var i=0; i < this.helpLauncher.getHTMLTabCount$(); i++) {
var pane=this.helpLauncher.getHTMLTab$I(i);
pane.editorPane.getDocument$().putProperty$O$O("stream", null);
}
this.helpLauncher.setDivider$I(((175 * $I$(39).getFactor$I(level))|0));
this.helpLauncher.refreshSelectedTab$();
}});

Clazz.newMeth(C$, 'getLibraryBrowser$',  function () {
if (this.libraryBrowser == null ) {
try {
$I$(74).desiredOSPType="Tracker";
this.libraryBrowser=$I$(75).getBrowser$javax_swing_JDialog(null);
$I$(21).install$org_opensourcephysics_tools_LibraryBrowser(this.libraryBrowser);
this.libraryBrowser.addOSPLibrary$S("https://opensourcephysics.github.io/resources/CAB/tracker_library.xml");
this.libraryBrowser.addOSPLibrary$S("https://opensourcephysics.github.io/resources/CAB/shared_library.xml");
this.libraryBrowser.addComPADRECollection$S("https://www.compadre.org/osp/services/REST/osp_tracker.cfm?verb=Identify&OSPType=Tracker&OSPPrimary=Subject");
this.libraryBrowser.refreshCollectionsMenu$();
this.libraryBrowser.addPropertyChangeListener$S$java_beans_PropertyChangeListener("target", ((P$.TFrame$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if ("LOAD" === e.getOldValue$() ) {
var record=e.getNewValue$();
var toCancel=" [" + $I$(17).getString$S("TFrame.LibraryBrowser.Message.Cancel") + "]" ;
var loading=" " + $I$(17).getString$S("Tracker.Splash.Loading") + " \"" ;
var message=loading + record.getName$() + "\"" + toCancel ;
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].libraryBrowser.setMessage$S$java_awt_Color(message, $I$(25).YELLOW);
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].libraryBrowser.setComandButtonEnabled$Z(false);
$I$(62).setCanceled$Z(false);
$I$(59,"invokeLater$Runnable",[((P$.TFrame$9$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "TFrame$9$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].loadLibraryRecord$org_opensourcephysics_tools_LibraryResource.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [this.$finals$.record]);
});
})()
), Clazz.new_(P$.TFrame$9$lambda9.$init$,[this, {record:record}]))]);
} else if ("DOWNLOAD" === e.getOldValue$() ) {
var file=e.getNewValue$();
if (file != null  && file.exists$() ) {
}}});
})()
), Clazz.new_(P$.TFrame$9.$init$,[this, null])));
$I$(75).fireHelpEvent=true;
this.libraryBrowser.addPropertyChangeListener$S$java_beans_PropertyChangeListener("help", ((P$.TFrame$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].showHelp$S$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], ["library", 0]);
});
})()
), Clazz.new_(P$.TFrame$10.$init$,[this, null])));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}return this.libraryBrowser;
});

Clazz.newMeth(C$, 'getPropertiesDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var dialog=Clazz.new_($I$(76,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[trackerPanel]);
var dim=$I$(15).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - dialog.getBounds$().width)/2|0);
var y=((dim.height - dialog.getBounds$().height)/2|0);
dialog.setLocation$I$I(x, y);
return dialog;
});

Clazz.newMeth(C$, 'getHelpDialog$',  function () {
if (this.helpDialog == null ) {
this.helpDialog=Clazz.new_([this, $I$(17).getString$S("TFrame.Dialog.Help.Title"), false],$I$(23,1).c$$java_awt_Frame$S$Z);
var help_path="/org/opensourcephysics/cabrillo/tracker/resources/help/help_set.xml";
this.helpLauncher=Clazz.new_([help_path, false, this.helpDialog.getContentPane$()],$I$(77,1).c$$S$Z$javax_swing_JPanel);
this.helpLauncher.popupEnabled=false;
var level=$I$(39).getLevel$();
if (this.helpLauncher.getTabCount$() > 0) {
var tab=this.helpLauncher.getTab$I(0);
if (level > 0) {
var newValue="help" + level + ".css" ;
tab.getHTMLSubstitutionMap$().put$O$O("help.css", newValue);
} else {
tab.getHTMLSubstitutionMap$().remove$O("help.css");
}}this.helpLauncher.setDivider$I(((175 * $I$(39).getFactor$I(level))|0));
this.helpLauncher.setNavigationVisible$Z(true);
var screen=$I$(15).getDefaultToolkit$().getScreenSize$();
var dim=this.helpLauncher.getSize$();
dim.width=Math.min(((9 * screen.width)/10|0), (((1 + level * 0.35) * dim.width)|0));
dim.height=Math.min(((9 * screen.height)/10|0), (((1 + level * 0.35) * dim.height)|0));
this.helpLauncher.setSize$java_awt_Dimension(dim);
$I$(39,"setFonts$O$I",[this.helpDialog, $I$(39).getLevel$()]);
this.helpDialog.pack$();
var x=((screen.width - this.helpDialog.getBounds$().width)/2|0);
var y=((screen.height - this.helpDialog.getBounds$().height)/2|0);
this.helpDialog.setLocation$I$I(x, y);
}var search=$I$(66).getNavComponentsFor$org_opensourcephysics_tools_Launcher(this.helpLauncher);
var comps=Clazz.array($I$(67), [search.length + 2]);
System.arraycopy$O$I$O$I$I(search, 0, comps, 0, search.length);
$I$(20).pdfHelpButton.setText$S($I$(17).getString$S("Tracker.Button.PDFHelp"));
comps[comps.length - 2]=$I$(20).pdfHelpButton;
comps[comps.length - 1]=$I$(2).createHorizontalStrut$I(4);
$I$(39,"setFonts$O$I",[comps, $I$(39).getLevel$()]);
this.helpLauncher.setNavbarRightEndComponents$java_awt_ComponentA(comps);
return this.helpDialog;
});

Clazz.newMeth(C$, 'showHelp$S',  function (selectedNode) {
this.getHelpDialog$();
this.helpLauncher.setSelectedNode$S(selectedNode);
this.helpDialog.setVisible$Z(true);
});

Clazz.newMeth(C$, 'showHelp$S$I',  function (keywords, pageNumber) {
var firstTime=this.helpDialog == null ;
this.getHelpDialog$();
if (keywords == null  && firstTime ) {
keywords="help";
}this.helpLauncher.setSelectedNodeByKey$S$I(keywords, pageNumber);
if (firstTime) this.helpLauncher.clearHistory$();
this.helpDialog.setVisible$Z(true);
});

Clazz.newMeth(C$, 'getObjects$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
return this.getObjects$I(this.getTab$Integer(trackerPanel.getID$()));
}, p$1);

Clazz.newMeth(C$, 'getObjects$I',  function (tab) {
return (tab < 0 || tab >= this.tabbedPane.getTabCount$()  ? null : (this.tabbedPane.getComponentAt$I(tab)).getObjects$());
});

Clazz.newMeth(C$, 'getClipboardListener$',  function () {
if (this.clipboardListener == null  && $I$(9).allowAutopaste ) {
this.clipboardListener=Clazz.new_($I$(78,1).c$$org_opensourcephysics_cabrillo_tracker_TFrame,[this]);
this.clipboardListener.start$();
}return this.clipboardListener;
});

Clazz.newMeth(C$, 'getAlwaysListenToClipboard$',  function () {
return this.alwaysListenToClipboard;
});

Clazz.newMeth(C$, 'setAlwaysListenToClipboard$Z',  function (b) {
this.alwaysListenToClipboard=b;
this.checkClipboardListener$();
});

Clazz.newMeth(C$, 'checkClipboardListener$',  function () {
$I$(59,"invokeLater$Runnable",[((P$.TFrame$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "TFrame$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
var needListener=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].alwaysListenToClipboard;
if (!needListener) {
try {
for (var i=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getTabCount$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []); --i >= 0; ) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getTrackerPanelForTab$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [i]);
var list=trackerPanel.getDrawablesTemp$Class.apply(trackerPanel, [Clazz.getClass($I$(79),['addPropertyChangeListener$S$java_beans_PropertyChangeListener','getData$','getDataClip$','getFrameDuration$','getSource$','getStartFrame$','getStartStep$','getVideoPanel$','getVideoStartTime$','isAutoPasteEnabled$','isTimeDataAvailable$','setData$org_opensourcephysics_display_Data$O','setStartFrame$I','setStartStep$I'])]);
for (var m=0, n=list.size$.apply(list, []); m < n; m++) {
var next=list.get$I.apply(list, [m]);
if (next.getSource$.apply(next, []) == null  && next.isAutoPasteEnabled$.apply(next, []) ) {
needListener=true;
break;
}}
list.clear$.apply(list, []);
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}if (needListener) {
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getClipboardListener$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
} else {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].clipboardListener == null ) return;
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].clipboardListener.end$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].clipboardListener, []);
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].clipboardListener=null;
}});
})()
), Clazz.new_(P$.TFrame$lambda9.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'createGUI',  function () {
this.addComponentListener$java_awt_event_ComponentListener(((P$.TFrame$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ComponentAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (e) {
if ($I$(9).isJS && $I$(29).maximize && this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].maximizedFrameSize != null    && !this.b$['java.awt.Component'].getSize$.apply(this.b$['java.awt.Component'], []).equals$O(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].maximizedFrameSize) ) {
$I$(29).maximize=false;
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].maximizedFrameSize=null;
for (var bar, $bar = 0, $$bar = this.b$['org.opensourcephysics.cabrillo.tracker.TFrame']._atoolbars; $bar<$$bar.length&&((bar=($$bar[$bar])),1);$bar++) {
if (bar != null ) bar.refreshMaximizeButton$();
}
}this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].frameResized$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
$I$(52).setupResizer$java_awt_Window(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame']);
});
})()
), Clazz.new_($I$(80,1),[this, null],P$.TFrame$11)));
this.addWindowFocusListener$java_awt_event_WindowFocusListener(((P$.TFrame$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowGainedFocus$java_awt_event_WindowEvent',  function (e) {
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["windowfocus", null, null]);
});
})()
), Clazz.new_($I$(81,1),[this, null],P$.TFrame$12)));
this.saveNotesAction=((P$.TFrame$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$2.save.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getNotes$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []), []);
});
})()
), Clazz.new_($I$(33,1),[this, null],P$.TFrame$13));
this.tabbedPane=Clazz.new_($I$(82,1).c$$I,[3]);
this.frameContentPane=Clazz.new_([Clazz.new_($I$(1,1))],$I$(34,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(this.frameContentPane);
this.getContentPane$().add$java_awt_Component$O(this.tabbedPane, "Center");
this.checkLocale$();
this.setJMenuBar$javax_swing_JMenuBar(this.defaultMenuBar=Clazz.new_($I$(63,1),[this, null]));
$I$(39,"setFonts$O$I",[this.defaultMenuBar, $I$(39).getLevel$()]);
this.tabbedPane.addChangeListener$javax_swing_event_ChangeListener(((P$.TFrame$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].doTabStateChanged$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
});
})()
), Clazz.new_(P$.TFrame$14.$init$,[this, null])));
this.closeItem=Clazz.new_($I$(18,1));
this.closeItem.addActionListener$java_awt_event_ActionListener(((P$.TFrame$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.hideNotes.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].doCloseAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [])]);
});
})()
), Clazz.new_(P$.TFrame$15.$init$,[this, null])));
this.popup.add$javax_swing_JMenuItem(this.closeItem);
this.tabbedPane.addMouseListener$java_awt_event_MouseListener(((P$.TFrame$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
if (panel == null  || !panel.isEnabled$S("file.close") ) return;
if ($I$(9).isPopupTrigger$java_awt_event_InputEvent(e)) {
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].closeItem.setText$S($I$(17).getString$S("TActions.Action.Close") + " \"" + this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].tabbedPane.getTitleAt$I(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getSelectedTab$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [])) + "\"" );
$I$(39,"setFonts$O$I",[this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].popup, $I$(39).getLevel$()]);
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].tabbedPane, e.getX$(), e.getY$());
}});
})()
), Clazz.new_($I$(83,1),[this, null],P$.TFrame$16)));
}, p$1);

Clazz.newMeth(C$, 'getNotes$',  function () {
if (this.notes == null ) this.notes=Clazz.new_($I$(84,1),[this, null]);
return this.notes;
});

Clazz.newMeth(C$, 'doTabStateChanged$',  function () {
var objects=this.getObjects$I(this.tabbedPane.getSelectedIndex$());
var mainView=(objects == null  ? null : objects[0]);
var newPanel=(mainView == null  ? null : mainView.getTrackerPanel$());
if (mainView == null  && objects != null  ) return;
var oldPanel=(newPanel != null  && this.prevPanelID === newPanel.panelID   ? newPanel : p$1.deactivateOldTrackerPanel$Integer.apply(this, [this.prevPanelID]));
if (objects == null ) {
$I$(39,"setFonts$O$I",[this.defaultMenuBar, $I$(39).getLevel$()]);
this.setJMenuBar$javax_swing_JMenuBar(this.defaultMenuBar);
} else if (mainView != null  && newPanel != null  ) {
this.prevPanelID=newPanel.getID$();
if (this.prefsDialog != null ) {
this.prefsDialog.panelID=newPanel.getID$();
}if (oldPanel != null ) oldPanel.isNotesVisible=this.notesVisible$();
if (this.notes != null ) this.notes.dialog.setVisible$Z(newPanel.isNotesVisible);
this.updateNotesDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel(newPanel);
var panelID=newPanel.getID$();
var bar=this.getToolBar$Integer$Z(panelID, true);
if (bar != null ) {
bar.notesButton.setSelected$Z(this.notesVisible$());
}var tbar=this.getTrackBar$Integer$Z(panelID, true);
if (tbar != null ) tbar.refresh$();
var menubar=this.getMenuBar$Integer$Z(panelID, true);
if (menubar != null ) this.setJMenuBar$javax_swing_JMenuBar(menubar);
this.playerBar=mainView.getPlayerBar$();
var frame=this.playerBar.getTopLevelAncestor$();
if (frame != null  && frame !== this  ) frame.setVisible$Z(true);
if (newPanel.dataBuilder != null ) newPanel.dataBuilder.setVisible$Z(newPanel.dataToolVisible);
var vid=newPanel.getVideo$();
if (vid != null ) {
vid.getFilterStack$().setInspectorsVisible$Z(true);
}}if (this.prefsDialog != null  && this.prefsDialog.isVisible$() ) {
this.prefsDialog.refreshGUI$();
}if (oldPanel !== newPanel ) this.firePropertyChange$S$O$O("tab", oldPanel, newPanel);
this.clearHoldPainting$();
C$.repaintT$java_awt_Component(newPanel);
});

Clazz.newMeth(C$, 'deactivateOldTrackerPanel$Integer',  function (panelID) {
var oldPanel=this.getTrackerPanelForID$Integer(panelID);
if (this.prefsDialog != null ) {
this.prefsDialog.panelID=null;
}if (this.playerBar != null ) {
var frame=this.playerBar.getTopLevelAncestor$();
if (frame != null  && frame !== this  ) frame.setVisible$Z(false);
}if (oldPanel != null ) {
if (oldPanel.dataBuilder != null ) {
var vis=oldPanel.dataToolVisible;
oldPanel.dataBuilder.setVisible$Z(false);
oldPanel.dataToolVisible=vis;
}if (oldPanel.getPlayer$() != null ) {
var clip=oldPanel.getPlayer$().getVideoClip$();
var ci=(clip == null  ? null : clip.getClipInspector$());
if (ci != null ) ci.setVisible$Z(false);
}var vid=oldPanel.getVideo$();
if (vid != null ) {
vid.getFilterStack$().setInspectorsVisible$Z(false);
}}return oldPanel;
}, p$1);

Clazz.newMeth(C$, 'frameResized$',  function () {
var trackerPanel=this.getSelectedPanel$();
if (trackerPanel == null ) return;
var viewNum=trackerPanel.getMaximizedView$();
if (viewNum != -1) {
this.maximizeView$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(trackerPanel, viewNum);
trackerPanel.dividerLocs=null;
return;
}if (!C$.isLayoutAdaptive) return;
var rect=this.getBounds$();
C$.isLayoutChanged=C$.isPortraitOrientation != (rect.height > rect.width) ;
if (C$.isLayoutChanged) {
C$.isPortraitOrientation=!C$.isPortraitOrientation;
for (var i=this.getTabCount$(); --i >= 0; ) {
trackerPanel=this.getTrackerPanelForTab$I(i);
var defaultViewsVisible=this.areViewsVisible$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel(0, trackerPanel);
var moreViewsVisible=this.areViewsVisible$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel(1, trackerPanel);
this.arrangeViews$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z$Z(trackerPanel, defaultViewsVisible, moreViewsVisible);
}
C$.isLayoutChanged=false;
}});

Clazz.newMeth(C$, 'getDataDropHandler$',  function () {
return (this.dataDropHandler == null  ? (this.dataDropHandler=Clazz.new_($I$(85,1),[this, null])) : this.dataDropHandler);
});

Clazz.newMeth(C$, 'initialize$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var mbar=this.getMenuBar$Integer$Z(trackerPanel.getID$(), false);
if (mbar != null ) mbar.setAllowRefresh$Z(false);
trackerPanel.initialize$org_opensourcephysics_tools_FileDropHandler(this.fileDropHandler);
this.validate$();
var portrait=C$.isPortraitLayout$();
if (trackerPanel.dividerLocs == null ) {
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, 0, portrait ? 1.0 : 0.67);
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, 0, 1.0);
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, 1, 0.57);
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, 2, portrait ? 0.57 : 1.0);
this.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(trackerPanel, 3, 0.5);
} else {
var w=0;
var order=portrait ? C$.PORTRAIT_DIVIDER_ORDER : C$.DEFAULT_ORDER;
for (var i=0; i < order.length; i++) {
var pane=this.getSplitPane$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(trackerPanel, i);
if (i == 0) w=pane.getMaximumDividerLocation$();
var max=i == 3 ? w : pane.getMaximumDividerLocation$();
var loc=trackerPanel.dividerLocs[order[i]];
loc=this.getConvertedDividerLoc$I$D(i, loc);
pane.setDividerLocation$I(((loc * max)|0));
}
trackerPanel.dividerLocs=null;
}this.validate$();
trackerPanel.initialize$org_opensourcephysics_tools_FileDropHandler(null);
mbar=this.getMenuBar$Integer$Z(trackerPanel.getID$(), false);
if (mbar != null ) mbar.setAllowRefresh$Z(true);
}, p$1);

Clazz.newMeth(C$, 'isPortraitLayout$',  function () {
return C$.isLayoutAdaptive && C$.isPortraitOrientation ;
}, 1);

Clazz.newMeth(C$, 'getConvertedDividerLoc$I$D',  function (splitPaneIndex, loc) {
if (C$.isPortraitLayout$()) switch (splitPaneIndex) {
case 0:
return loc > 0.92  ? 1.0 : 0.67;
case 1:
return loc > 0.92  ? 1.0 : loc < 0.08  ? 0.0 : 0.57;
case 2:
return loc > 0.92  ? 1.0 : 0.57;
case 3:
return loc > 0.92  ? 1.0 : loc < 0.08  ? 0.0 : 0.5;
}
return loc;
});

Clazz.newMeth(C$, 'holdPainting$Z',  function (b) {
if (!$I$(20).doHoldRepaint) return;
this.paintHold+=(b ? 1 : this.paintHold > 0 ? -1 : 0);
});

Clazz.newMeth(C$, 'isPaintable$',  function () {
return this.isVisible$() && this.paintHold == 0  && !this.getIgnoreRepaint$() ;
});

Clazz.newMeth(C$, 'hasPaintHold$',  function () {
return this.paintHold != 0;
});

Clazz.newMeth(C$, 'clearHoldPainting$',  function () {
this.paintHold=0;
});

Clazz.newMeth(C$, 'addFollower$java_awt_Component$java_awt_Point',  function (c, ignored) {
var pt0=this.getLocation$();
var listener=((P$.TFrame$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ComponentAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'componentMoved$java_awt_event_ComponentEvent',  function (e) {
var fp=this.b$['java.awt.Component'].getLocation$.apply(this.b$['java.awt.Component'], []);
var dx=fp.x - this.$finals$.pt0.x;
var dy=fp.y - this.$finals$.pt0.y;
this.$finals$.pt0.x=fp.x;
this.$finals$.pt0.y=fp.y;
var p=this.$finals$.c.getLocation$();
p.x+=dx;
p.y+=dy;
this.$finals$.c.setLocation$java_awt_Point(p);
});
})()
), Clazz.new_($I$(80,1),[this, {pt0:pt0,c:c}],P$.TFrame$17));
this.addComponentListener$java_awt_event_ComponentListener(listener);
return listener;
});

Clazz.newMeth(C$, 'addMenuListener$javax_swing_JMenu$Runnable',  function (m, r) {
m.addMenuListener$javax_swing_event_MenuListener(((P$.TFrame$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent',  function (e) {
this.$finals$.r.run$();
});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent',  function (e) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent',  function (e) {
});
})()
), Clazz.new_(P$.TFrame$18.$init$,[this, {r:r}])));
}, 1);

Clazz.newMeth(C$, 'haveContent$',  function () {
return (this.getTabCount$() > 0 && (this.getTrackerPanelForTab$I(0).changed || !this.tabbedPane.getTitleAt$I(0).equals$O($I$(17).getString$S("TrackerPanel.NewTab.Name")) ) );
});

Clazz.newMeth(C$, 'getRemovableTabNumber$Integer',  function (panelID) {
var tab=this.getTab$Integer(panelID);
var clean=tab > -1 && !this.getTrackerPanelForID$Integer(panelID).changed  && this.tabbedPane.getTitleAt$I(tab).equals$O($I$(17).getString$S("TrackerPanel.NewTab.Name")) ;
return clean ? tab : -1;
});

Clazz.newMeth(C$, 'getCleanTrackerPanel$',  function () {
var panel;
panel=Clazz.new_($I$(44,1).c$$org_opensourcephysics_cabrillo_tracker_TFrame,[this]);
return panel;
});

Clazz.newMeth(C$, 'removeEmptyTabIfTabCountGreaterThan$I',  function (n) {
if (this.getTabCount$() > n && !this.haveContent$() ) this.removeTabNow$I(0);
});

Clazz.newMeth(C$, 'removeTabNow$I',  function (i) {
var tp=this.getTrackerPanelForTab$I(i);
if (tp != null ) this.removeTabSynchronously$org_opensourcephysics_cabrillo_tracker_TrackerPanel(tp);
});

Clazz.newMeth(C$, 'loadExperimentURL$S',  function (path) {
if (path != null  && !path.startsWith$S("http") ) {
path="https://./" + path;
$I$(3,"fine$S",["Loading Tracker experiment path=" + path]);
}if (path == null  && (path=$I$(86).showInputDialog$java_awt_Component$S$S$I$S(this, "Load Experiment", "Load Experiment", 3, this.lastExperiment)) == null  ) return;
if ($I$(12,"isVideo$java_io_File",[Clazz.new_($I$(6,1).c$$S,[path])])) {
this.loadVideo$S$Z$org_opensourcephysics_tools_LibraryBrowser$Runnable$D$I(path, false, null, null, 0, -1);
return;
}if (this.getTabCount$() > 0) this.removeAllTabs$Z(false);
try {
this.doOpenURL$S(path);
} catch (t) {
this.removeAllTabs$Z(false);
}
});

Clazz.newMeth(C$, 'loadLibraryRecord$org_opensourcephysics_tools_LibraryResource',  function (record) {
this.openLibraryResource$org_opensourcephysics_tools_LibraryResource$Runnable(record, ((P$.TFrame$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "TFrame$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
var panelID=p$1.getSelectedPanelID.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
$I$(9,"trigger$I$java_awt_event_ActionListener",[200, ((P$.TFrame$lambda10$11||
(function(){/*m*/var C$=Clazz.newClass(P$, "TFrame$lambda10$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (ev) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].libraryBrowser.doneLoading$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].libraryBrowser, []);
if (!$I$(29).loadFailed) this.b$['java.awt.Component'].requestFocus$.apply(this.b$['java.awt.Component'], []);
if (this.$finals$.panelID != null ) {
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getTrackerPanelForID$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [this.$finals$.panelID]);
panel.changed=false;
$I$(29).repaintT$java_awt_Component(panel);
if (panel.openedFromPath != null ) $I$(20).addRecent$S$Z(panel.openedFromPath, false);
}});
})()
), Clazz.new_(P$.TFrame$lambda10$11.$init$,[this, {panelID:panelID}]))]);
});
})()
), Clazz.new_(P$.TFrame$lambda10.$init$,[this, null])));
});

Clazz.newMeth(C$, 'getSelectedPanelID',  function () {
var panel=this.getSelectedPanel$();
return (panel == null  ? null : panel.getID$());
}, p$1);

Clazz.newMeth(C$, 'openLibraryResource$org_opensourcephysics_tools_LibraryResource$Runnable',  function (record, whenDone) {
C$.loadFailed=false;
try {
this.libraryBrowser.setCursor$java_awt_Cursor($I$(87).getPredefinedCursor$I(3));
var target=record.getAbsoluteTarget$();
if (!$I$(8).isHTTP$S(target)) {
target=$I$(8,"getURIPath$S",[$I$(4,"getResolvedPath$S$S",[record.getTarget$(), record.getBasePath$()])]);
}if (target.indexOf$S("document/ServeFile.cfm?") >= 0) {
var fileName=record.getProperty$S("download_filename");
try {
target=$I$(8).downloadToOSPCache$S$S$Z(target, fileName, false).toURI$().toString();
if ($I$(62).isCanceled$()) {
C$.loadFailed=true;
return;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
C$.loadFailed=true;
} else {
throw ex;
}
}
if (target != null  && target.endsWith$S(".zip") ) {
var contents=$I$(8).getZipContents$S$Z(target, true);
if (contents.isEmpty$()) {
C$.loadFailed=true;
}}}if (target == null ) {
C$.loadFailed=true;
}if (target == null ) {
var name=record.getName$();
if (name == null  || "".equals$O(name) ) name=$I$(17).getString$S("TrackerPanel.DataBuilder.TrackType.Unknown");
var s=$I$(17).getString$S("TFrame.Dialog.LibraryError.Message");
$I$(10,"showMessageDialog$java_awt_Component$O$S$I",[this.libraryBrowser, s + " \"" + name + "\"" , $I$(17).getString$S("TFrame.Dialog.LibraryError.Title"), 2]);
return;
}var lcTarget=target.toLowerCase$();
if ("Data".equals$O(record.getType$())) {
var res=$I$(8).getResource$S(target);
if (res != null ) {
var s=res.getString$();
if (s != null ) {
var data=$I$(88).parseData$S$S(s, target);
if (data != null  && data.length > 0 ) {
var tool=$I$(88).getTool$Z(true);
for (var i=0; i < data.length; i++) {
var tabs=tool.createTabs$org_opensourcephysics_display_Data(data[i]);
for (var j=0; j < tabs.size$(); j++) {
tool.addTab$org_opensourcephysics_tools_DataToolTab(tabs.get$I(j));
tool.setVisible$Z(true);
C$.loadFailed=true;
}
}
}}}}if (lcTarget.endsWith$S(".trk") || $I$(8).isJarZipTrz$S$Z(lcTarget, false) ) {
if ($I$(8).getResourceZipURLsOK$S(target) == null ) {
var notfound=true;
if ($I$(8).isHTTP$S(target) && !$I$(8).isWebConnected$() ) {
var file=$I$(8).getOSPCacheFile$S(target);
if (file != null  && file.exists$() ) {
target=file.getAbsolutePath$();
notfound=false;
}}if (notfound) {
var s=$I$(17).getString$S("TFrame.Dialog.LibraryError.FileNotFound.Message");
$I$(10,"showMessageDialog$java_awt_Component$O$S$I",[this.libraryBrowser, s + " \"" + $I$(4).getName$S(target) + "\"" , $I$(17).getString$S("TFrame.Dialog.LibraryError.FileNotFound.Title"), 2]);
this.libraryBrowser.setVisible$Z(true);
C$.loadFailed=true;
return;
}}try {
var uriPaths=Clazz.new_($I$(5,1));
uriPaths.add$O(target);
$I$(62).loader=$I$(12).openFromLibrary$java_util_List$org_opensourcephysics_cabrillo_tracker_TFrame$Runnable(uriPaths, this, whenDone);
whenDone=null;
} catch (t) {
C$.loadFailed=true;
}
return;
}if ($I$(12,"isVideo$java_io_File",[Clazz.new_($I$(6,1).c$$S,[target])])) {
this.loadVideo$S$Z$org_opensourcephysics_tools_LibraryBrowser$Runnable$D$I(target, true, this.libraryBrowser, whenDone, 0, -1);
whenDone=null;
return;
}var path=target;
for (var ext, $ext = 0, $$ext = $I$(62).KNOWN_VIDEO_EXTENSIONS; $ext<$$ext.length&&((ext=($$ext[$ext])),1);$ext++) {
if (lcTarget.endsWith$S("." + ext)) {
if (this.libraryBrowser != null ) this.libraryBrowser.setMessage$S$java_awt_Color(null, null);
$I$(62,"handleUnsupportedVideo$S$S$S$org_opensourcephysics_media_core_VideoPanel$S",[path, ext, null, this.getSelectedPanel$(), "TFrame known video ext"]);
C$.loadFailed=true;
return;
}}
} finally {
this.libraryBrowser.setCursor$java_awt_Cursor($I$(87).getDefaultCursor$());
if (whenDone != null ) whenDone.run$();
}
});

Clazz.newMeth(C$, 'setCursor$java_awt_Cursor',  function (c) {
C$.superclazz.prototype.setCursor$java_awt_Cursor.apply(this, [c]);
if (this.tabbedPane != null ) this.tabbedPane.setCursor$java_awt_Cursor(c);
this.defaultMenuBar.setCursor$java_awt_Cursor(c);
});

Clazz.newMeth(C$, 'doOpenExportedAndUpdateLibrary$S',  function (path) {
this.setCursor$java_awt_Cursor($I$(87).getPredefinedCursor$I(3));
if (path == null ) return;
this.loadedFiles.remove$O(path);
$I$(12,"openFileFromDialog$java_io_File$org_opensourcephysics_cabrillo_tracker_TFrame$Runnable",[Clazz.new_($I$(6,1).c$$S,[path]), this, ((P$.TFrame$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "TFrame$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].setCursor$java_awt_Cursor.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [$I$(87).getDefaultCursor$()]);
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].libraryBrowser.open$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].libraryBrowser, [this.$finals$.path]);
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].libraryBrowser.setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].libraryBrowser, [true]);
$I$(9,"trigger$I$java_awt_event_ActionListener",[1000, ((P$.TFrame$lambda11$12||
(function(){/*m*/var C$=Clazz.newClass(P$, "TFrame$lambda11$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var treePanel=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].libraryBrowser.getSelectedTreePanel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].libraryBrowser, []);
if (treePanel != null ) {
treePanel.refreshSelectedNode$.apply(treePanel, []);
}});
})()
), Clazz.new_(P$.TFrame$lambda11$12.$init$,[this, null]))]);
});
})()
), Clazz.new_(P$.TFrame$lambda11.$init$,[this, {path:path}]))]);
});

Clazz.newMeth(C$, 'doOpenFileFromDialog$',  function () {
this.setCursor$java_awt_Cursor($I$(87).getPredefinedCursor$I(3));
$I$(12,"openFileFromDialog$java_io_File$org_opensourcephysics_cabrillo_tracker_TFrame$Runnable",[null, this, ((P$.TFrame$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "TFrame$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].setCursor$java_awt_Cursor.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [$I$(87).getDefaultCursor$()]);
});
})()
), Clazz.new_(P$.TFrame$lambda12.$init$,[this, null]))]);
if (!$I$(9).isJS) this.setCursor$java_awt_Cursor($I$(87).getDefaultCursor$());
});

Clazz.newMeth(C$, 'doOpenURL$S',  function (url) {
var selected=this.getSelectedPanel$();
if (selected != null ) {
selected.setMouseCursor$java_awt_Cursor($I$(87).getPredefinedCursor$I(3));
}this.setCursor$java_awt_Cursor($I$(87).getPredefinedCursor$I(3));
$I$(12,"openURL$S$org_opensourcephysics_cabrillo_tracker_TFrame$Runnable",[url, this, ((P$.TFrame$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "TFrame$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].setCursor$java_awt_Cursor.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [$I$(87).getDefaultCursor$()]);
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
if (panel != null ) {
panel.setMouseCursor$java_awt_Cursor.apply(panel, [$I$(87).getDefaultCursor$()]);
}});
})()
), Clazz.new_(P$.TFrame$lambda13.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'addTabFromLoader$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
this.addTab$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$Runnable(trackerPanel, 0, null);
this.getSplitPane$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(trackerPanel, 0).setDividerLocation$D(0.57);
});

Clazz.newMeth(C$, 'loadVideo$S$Z$org_opensourcephysics_tools_LibraryBrowser$Runnable$D$I',  function (path, asNewTab, libraryBrowser, whenDone, frameRate, limit) {
if (!$I$(62,"checkMP4$S$org_opensourcephysics_tools_LibraryBrowser$org_opensourcephysics_media_core_VideoPanel",[path, libraryBrowser, this.getSelectedPanel$()])) return;
var stackPaths=$I$(89).getStackPaths$S$I(path, limit);
for (var i=0; i < stackPaths.size$(); i++) {
if ($I$(8,"download$S$java_io_File$Z",[stackPaths.get$I(i), null, false]) == null ) {
break;
}}
var localFile=$I$(8).download$S$java_io_File$Z(path, null, false);
var whenDoneFinal=(whenDone == null  && frameRate > 0   ? ((P$.TFrame$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "TFrame$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
var video=(panel == null  ? null : panel.getVideo$.apply(panel, []));
if (Clazz.instanceOf(video, "org.opensourcephysics.media.core.ImageVideo") && this.$finals$.frameRate > 0  ) {
(video).setFrameDuration$D.apply((video), [1000 / this.$finals$.frameRate]);
}});
})()
), Clazz.new_(P$.TFrame$lambda14.$init$,[this, {frameRate:frameRate}])) : whenDone);
var importer=((P$.TFrame$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(12,"importVideo$S$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Runnable",[$I$(4).getAbsolutePath$java_io_File(this.$finals$.localFile), this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []), this.$finals$.whenDoneFinal]);
});
})()
), Clazz.new_(P$.TFrame$19.$init$,[this, {localFile:localFile,whenDoneFinal:whenDoneFinal}]));
if (asNewTab) this.addTrackerPanel$Z$Runnable(false, importer);
 else {
importer.run$();
}});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(90,1));
}, 1);

Clazz.newMeth(C$, 'setFrameBlocker$Z$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (blocking, panel) {
var menuBar=this.getJMenuBar$();
if (menuBar != null ) {
menuBar.setEnabled$Z(!blocking);
}this.$$state=(blocking ? 2 : 0);
if (blocking) {
this.frameBlocker=Clazz.new_($I$(91,1),[this, null]);
this.setContentPane$java_awt_Container(this.frameBlocker);
this.revalidate$();
if (this.notesVisible$()) {
this.setNotesVisible$Z(false);
this.notes.wasVisible=true;
}panel=this.getSelectedPanel$();
if (panel != null ) panel.onBlocked$();
} else if (this.frameBlocker != null ) {
this.frameBlocker=null;
this.setContentPane$java_awt_Container(this.frameContentPane);
if (panel != null ) panel.onLoaded$();
if (this.notesVisible$()) {
this.setNotesVisible$Z(true);
this.notes.wasVisible=false;
}}});

Clazz.newMeth(C$, 'setNotesVisible$Z',  function (b) {
p$2.setVisible$Z.apply(this.notes, [b]);
});

Clazz.newMeth(C$, 'setJMenuBar$javax_swing_JMenuBar',  function (bar) {
var empty=this.getTabCount$() == 0;
C$.superclazz.prototype.setJMenuBar$javax_swing_JMenuBar.apply(this, [$I$(9).isMobile$() && !empty  ? null : bar]);
if (bar != null ) {
bar.setEnabled$Z(this.frameBlocker == null );
}this.currentMenuBar=bar === this.defaultMenuBar  ? null : bar;
});

Clazz.newMeth(C$, 'checkLocale$',  function () {
if ($I$(17).locale !== $I$(92).ENGLISH  && $I$(17).locale !== $I$(92).US  ) {
var locales=$I$(20).getLocales$();
for (var i=0; i < locales.length; i++) {
var loc=locales[i];
if (loc.equals$O($I$(17).locale)) {
this.setLanguage$S(loc.toString());
return;
}}
for (var i=0; i < locales.length; i++) {
var loc=locales[i];
if (loc.getLanguage$().equals$O($I$(17).locale.getLanguage$())) {
this.setLanguage$S(loc.getLanguage$());
return;
}}
}});

Clazz.newMeth(C$, 'setLanguage$S',  function (language) {
if (language.equals$O(this.currentLangugae)) return;
this.currentLangugae=language;
var locales=$I$(20).getLocales$();
for (var i=0; i < $I$(20).incompleteLocales.length; i++) {
if (language.equals$O($I$(20).incompleteLocales[i][0].toString())) {
var locale=$I$(20).incompleteLocales[i][0];
var lang=$I$(9).getDisplayLanguage$java_util_Locale(locale);
$I$(10,"showMessageDialog$java_awt_Component$O$S$I",[this, "This translation has not been updated since " + $I$(20).incompleteLocales[i][1] + ".\nIf you speak " + lang + " and would like to help translate" + "\nplease contact Douglas Brown at dobrown@cabrillo.edu." , "Incomplete Translation: " + lang, 2]);
break;
}}
for (var i=0; i < locales.length; i++) {
if (language.equals$O(locales[i].toString())) {
$I$(17).setLocale$java_util_Locale(locales[i]);
return;
}}
});

Clazz.newMeth(C$, 'notesVisible$',  function () {
return (this.notes != null  && (p$2.isVisible.apply(this.notes, []) || this.notes.wasVisible ) );
});

Clazz.newMeth(C$, 'updateNotesDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (panel != null  && this.notesVisible$() ) p$2.updateDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this.notes, [panel]);
});

Clazz.newMeth(C$, 'getNotesDialog$',  function () {
return p$2.getDialog.apply((this.notes == null  ? this.notes=Clazz.new_($I$(84,1),[this, null]) : this.notes), []);
});

Clazz.newMeth(C$, 'setNotesDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_awt_event_WindowListener',  function (trackerPanel, infoListener) {
p$2.setDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_awt_event_WindowListener.apply(this.getNotes$(), [trackerPanel, infoListener]);
});

Clazz.newMeth(C$, 'disposeOf$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
if (this.prevPanelID === trackerPanel.getID$() ) this.prevPanelID=null;
});

Clazz.newMeth(C$, 'getViewChoosers$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var objects=p$1.getObjects$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [trackerPanel]);
return (objects == null  ? Clazz.array($I$(58), [4]) : objects[1]);
});

Clazz.newMeth(C$, 'getViewChoosers$Integer',  function (panelID) {
var objects=this.getObjects$I(this.getTab$Integer(panelID));
return (objects == null  ? Clazz.array($I$(58), [4]) : objects[1]);
});

Clazz.newMeth(C$, 'getVisibleChoosers$Integer',  function (panelID) {
var choosers=this.getViewChoosers$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.getTrackerPanelForID$Integer(panelID));
var ret=Clazz.array($I$(58), [4]);
for (var i=0; i < choosers.length; i++) {
ret[i]=(this.isViewPaneVisible$I$Integer(i, panelID) ? choosers[i] : null);
}
return ret;
});

Clazz.newMeth(C$, 'removeTabSynchronously$Integer',  function (panelID) {
this.removeTabSynchronously$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.getTrackerPanelForID$Integer(panelID));
});

Clazz.newMeth(C$, 'refreshMenus$org_opensourcephysics_cabrillo_tracker_TrackerPanel$S',  function (trackerPanel, whereFrom) {
var menubar=this.getMenuBar$Integer$Z(trackerPanel.getID$(), false);
if (menubar != null ) {
menubar.refresh$S(whereFrom);
}});

Clazz.newMeth(C$, 'allocatePanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var i=this._bsPanelIDs.nextClearBit$I(0);
if (i > 127) {
System.err.println$S("MAX_PID EXCEEDED");
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Too many panels!"]);
}this._bsPanelIDs.set$I(i);
this._apanels[i]=trackerPanel;
return Integer.valueOf$I(i);
});

Clazz.newMeth(C$, 'deallocatePanelID$Integer',  function (panelID) {
var i=panelID.intValue$();
this._apanels[i]=null;
this._bsPanelIDs.clear$I(i);
});

Clazz.newMeth(C$, 'deallocate$org_opensourcephysics_display_OSPRuntime_Disposable',  function (obj) {
$I$(47).deallocate$org_opensourcephysics_display_OSPRuntime_Disposable(obj);
});

Clazz.newMeth(C$, 'getTrackerPanelForID$Integer',  function (panelID) {
return (panelID == null  ? null : this._apanels[panelID.intValue$()]);
});

Clazz.newMeth(C$, 'startMemoryTimer$',  function () {
if (true) this.memoryTimer=Clazz.new_([15000, ((P$.TFrame$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "TFrame$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
System.gc$();
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
if (panel != null ) $I$(46).refreshMemoryButton$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel);
});
})()
), Clazz.new_(P$.TFrame$lambda15.$init$,[this, null]))],$I$(93,1).c$$I$java_awt_event_ActionListener);
this.memoryTimer.setRepeats$Z(true);
this.memoryTimer.start$();
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
$I$(20).main$SA(args);
}, 1);

Clazz.newMeth(C$, 'sayFileNotFound$S',  function (path) {
$I$(10,"showMessageDialog$java_awt_Component$O$S$I",[this, $I$(17).getString$S("TFrame.Dialog.FileNotFound.Message") + "\n" + $I$(11).getString$S("VideoIO.Dialog.Label.Path") + ": " + path , $I$(17).getString$S("TFrame.Dialog.FileNotFound.Title"), 2]);
});

Clazz.newMeth(C$, 'importData$O$java_awt_Component',  function (data, component) {
if (Clazz.instanceOf(data, "java.util.List")) {
return $I$(12,"loadFiles$org_opensourcephysics_cabrillo_tracker_TFrame$java_util_List$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this, data, (Clazz.instanceOf(component, "org.opensourcephysics.cabrillo.tracker.TrackerPanel") ? component : null)]);
}if (Clazz.instanceOf(data, "java.net.URL")) {
this.loadExperimentURL$S(data.toString());
return true;
}return false;
});

C$.$static$=function(){C$.$static$=0;
C$.textLayoutFont=Clazz.new_($I$(40,1)).getFont$();
{
$I$(41).sharedInstance$().setDismissDelay$I(2000);
};
C$.YELLOW=Clazz.new_($I$(25,1).c$$I$I$I,[255, 255, 105]);
C$.DEFAULT_ORDER=Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3]);
C$.PORTRAIT_VIEW_ORDER=Clazz.array(Integer.TYPE, -1, [3, 2, 1, 0]);
C$.PORTRAIT_DIVIDER_ORDER=Clazz.array(Integer.TYPE, -1, [2, 3, 0, 1]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.TFrame, "TTabPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel', [['org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.display.OSPRuntime.Disposable']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['objects','Object[]','panelID','Integer','toolbarBox','javax.swing.Box']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$OA',  function (trackerPanel, objects) {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[Clazz.new_($I$(1,1))]);C$.$init$.apply(this);
this.panelID=trackerPanel.getID$();
this.objects=objects;
}, 1);

Clazz.newMeth(C$, 'getTrackerPanel$',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getTrackerPanelForID$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [this.panelID]);
});

Clazz.newMeth(C$, 'getObjects$',  function () {
return this.objects;
});

Clazz.newMeth(C$, 'setToolbarVisible$Z',  function (vis) {
if (this.toolbarBox == null ) {
var i=this.panelID.intValue$();
var bar=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame']._atoolbars[i];
if (bar == null ) return;
this.toolbarBox=$I$(2).createVerticalBox$();
this.toolbarBox.add$java_awt_Component(bar);
}if (vis) {
if (this.toolbarBox.getParent$() !== this ) this.add$java_awt_Component$O(this.toolbarBox, "North");
} else if (this.toolbarBox.getParent$() === this ) {
this.remove$java_awt_Component(this.toolbarBox);
}this.revalidate$();
this.repaint$();
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].isPaintable$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [])) return;
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.panelID=null;
this.objects=null;
this.toolbarBox=null;
this.removeAll$();
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(3).finalized$O(this);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TFrame, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var frame=obj;
var relativeTo=frame.tabsetFile != null  ? $I$(4,"getDirectoryPath$S",[$I$(4).getAbsolutePath$java_io_File(frame.tabsetFile)]) : $I$(4).getUserDirectory$();
relativeTo=$I$(4).forwardSlash$S(relativeTo);
var pathList=Clazz.new_($I$(5,1));
for (var i=0; i < frame.getTabCount$(); i++) {
var trackerPanel=frame.getTrackerPanelForTab$I(i);
var file=trackerPanel.getDataFile$();
if (trackerPanel.openedFromPath != null ) file=Clazz.new_($I$(6,1).c$$S,[trackerPanel.openedFromPath]);
if (file != null ) {
var path=$I$(4).getAbsolutePath$java_io_File(file);
var relativePath=$I$(4).getPathRelativeTo$S$S(path, relativeTo);
pathList.add$O(Clazz.array(String, -1, [path, relativePath]));
} else {
var video=trackerPanel.getVideo$();
if (!trackerPanel.changed && video != null  ) {
var path=video.getProperty$S("absolutePath");
if (path != null ) {
path=$I$(4).forwardSlash$S(path);
var relativePath=$I$(4).getPathRelativeTo$S$S(path, relativeTo);
pathList.add$O(Clazz.array(String, -1, [path, relativePath]));
}}}}
var paths=pathList.toArray$OA(Clazz.array(String, [0, 0]));
control.setValue$S$O("tabs", paths);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var frame=obj;
var tabs=control.getObject$S("tabs");
if (tabs == null ) return this.loadObjectFinally$org_opensourcephysics_cabrillo_tracker_TFrame$java_io_File(frame, null);
var videoFilter=Clazz.new_($I$(7,1));
var base=control.getString$S("basepath");
var dataFile=null;
var files=Clazz.new_($I$(5,1));
for (var next, $next = 0, $$next = tabs; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
var file=null;
var res=null;
if (base != null ) {
file=Clazz.new_($I$(6,1).c$$S$S,[base, next[1]]);
res=$I$(8,"getResource$S",[file.getPath$()]);
}if (res == null ) {
file=Clazz.new_([$I$(4).getUserDirectory$(), next[1]],$I$(6,1).c$$S$S);
res=$I$(8,"getResource$S",[file.getPath$()]);
}if (res == null  && next[0] != null  ) {
file=Clazz.new_($I$(6,1).c$$S,[next[0]]);
res=$I$(8,"getResource$S",[file.getPath$()]);
}if (res == null ) {
if ($I$(9).isJS) {
$I$(10,"showMessageDialog$java_awt_Component$O",[frame, "\"" + next[1] + "\" " + $I$(11).getString$S("VideoClip.Dialog.VideoNotFound.Message") ]);
continue;
}
{}
}if (res != null ) {
if (!videoFilter.accept$java_io_File(file)) {
if (dataFile == null ) dataFile=file;
}files.add$O($I$(4).getAbsolutePath$java_io_File(file));
}}
var file0=dataFile;
if (frame.whenObjectLoadingComplete != null ) {
files.add$I$O(0, $I$(4).getAbsolutePath$java_io_File(dataFile));
frame.whenObjectLoadingComplete.apply$O(files);
frame.whenObjectLoadingComplete=null;
return frame;
}$I$(12,"openFiles$org_opensourcephysics_cabrillo_tracker_TFrame$java_util_List$Runnable",[frame, files, ((P$.TFrame$Loader$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TFrame$Loader$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame.Loader'].loadObjectFinally$org_opensourcephysics_cabrillo_tracker_TFrame$java_io_File.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame.Loader'], [this.$finals$.frame, this.$finals$.file0]);
});
})()
), Clazz.new_(P$.TFrame$Loader$lambda1.$init$,[this, {file0:file0,frame:frame}]))]);
return frame;
});

Clazz.newMeth(C$, 'loadObjectFinally$org_opensourcephysics_cabrillo_tracker_TFrame$java_io_File',  function (frame, dataFile) {
if (frame.whenObjectLoadingComplete != null ) {
frame.whenObjectLoadingComplete.apply$O(Clazz.new_($I$(5,1)));
frame.whenObjectLoadingComplete=null;
}frame.setSelectedTab$java_io_File(dataFile);
return frame;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TFrame, "DataDropHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.TransferHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.df=$I$(13).plainTextFlavor;
},1);

C$.$fields$=[['O',['df','java.awt.datatransfer.DataFlavor']]]

Clazz.newMeth(C$, 'canImport$javax_swing_TransferHandler_TransferSupport',  function (support) {
return (support.getTransferable$().isDataFlavorSupported$java_awt_datatransfer_DataFlavor(this.df));
});

Clazz.newMeth(C$, 'importData$javax_swing_JComponent$java_awt_datatransfer_Transferable',  function (comp, t) {
try {
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []).importDataAsync$S$O$Runnable(t.getTransferData$java_awt_datatransfer_DataFlavor(this.df), null, null);
return true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TFrame, "FrameBlocker", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['image','java.awt.image.BufferedImage']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.image=Clazz.new_([this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].frameContentPane.getWidth$(), this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].frameContentPane.getHeight$(), 5],$I$(14,1).c$$I$I$I);
var g=this.image.getGraphics$();
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].frameContentPane.paint$java_awt_Graphics(g);
g.dispose$();
}, 1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, 0, 0, this);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TFrame, "DeactivatingMenuBar", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JMenuBar');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setEnabled$Z',  function (b) {
C$.superclazz.prototype.setEnabled$Z.apply(this, [b]);
var c=this.getComponents$();
for (var i=0; i < c.length; i++) c[i].setEnabled$Z(b);

});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TFrame, "DefaultMenuBar", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.cabrillo.tracker.TFrame','.DeactivatingMenuBar']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
var keyMask=$I$(15).getDefaultToolkit$().getMenuShortcutKeyMask$();
var fileMenu=Clazz.new_([$I$(17).getString$S("TMenuBar.Menu.File")],$I$(16,1).c$$S);
this.add$javax_swing_JMenu(fileMenu);
var newItem=Clazz.new_([$I$(17).getString$S("TActions.Action.NewTab")],$I$(18,1).c$$S);
newItem.setAccelerator$javax_swing_KeyStroke($I$(19,"getKeyStroke$I$I",["N".$c(), keyMask]));
newItem.addActionListener$java_awt_event_ActionListener(((P$.TFrame$DefaultMenuBar$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$DefaultMenuBar$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].addTrackerPanel$Z$Runnable.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [false, null]);
});
})()
), Clazz.new_(P$.TFrame$DefaultMenuBar$1.$init$,[this, null])));
fileMenu.add$javax_swing_JMenuItem(newItem);
fileMenu.addSeparator$();
var icon=$I$(20).getResourceIcon$S$Z("open.gif", true);
var openMenu=Clazz.new_([$I$(17).getString$S("TrackerIO.Dialog.Open.Title")],$I$(16,1).c$$S);
openMenu.setIcon$javax_swing_Icon(icon);
fileMenu.add$javax_swing_JMenuItem(openMenu);
var openItem=Clazz.new_([$I$(17).getString$S("TMenuBar.MenuItem.FileChooser") + "..."],$I$(18,1).c$$S);
openItem.setAccelerator$javax_swing_KeyStroke($I$(19,"getKeyStroke$I$I",["O".$c(), keyMask]));
openItem.addActionListener$java_awt_event_ActionListener(((P$.TFrame$DefaultMenuBar$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$DefaultMenuBar$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].doOpenFileFromDialog$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
});
})()
), Clazz.new_(P$.TFrame$DefaultMenuBar$2.$init$,[this, null])));
openMenu.add$javax_swing_JMenuItem(openItem);
icon=$I$(20).getResourceIcon$S$Z("open_catalog.gif", true);
var openBrowserItem=Clazz.new_([$I$(17).getString$S("TMenuBar.MenuItem.LibraryBrowser") + "..."],$I$(18,1).c$$S);
openBrowserItem.addActionListener$java_awt_event_ActionListener(((P$.TFrame$DefaultMenuBar$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$DefaultMenuBar$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(21).openLibraryBrowser$org_opensourcephysics_cabrillo_tracker_TFrame(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame']);
});
})()
), Clazz.new_(P$.TFrame$DefaultMenuBar$3.$init$,[this, null])));
openMenu.add$javax_swing_JMenuItem(openBrowserItem);
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].recentMenu=Clazz.new_($I$(16,1));
if (!$I$(9).isJS) fileMenu.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].recentMenu);
fileMenu.addMenuListener$javax_swing_event_MenuListener(((P$.TFrame$DefaultMenuBar$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$DefaultMenuBar$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent',  function (e) {
p$1.checkMemTest.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].refreshOpenRecentMenu$javax_swing_JMenu.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].recentMenu]);
});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent',  function (e) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent',  function (e) {
});
})()
), Clazz.new_(P$.TFrame$DefaultMenuBar$4.$init$,[this, null])));
fileMenu.addSeparator$();
var exitItem=Clazz.new_([$I$(17).getString$S("TActions.Action.Exit")],$I$(18,1).c$$S);
exitItem.setAccelerator$javax_swing_KeyStroke($I$(19,"getKeyStroke$I$I",["Q".$c(), keyMask]));
exitItem.addActionListener$java_awt_event_ActionListener(((P$.TFrame$DefaultMenuBar$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$DefaultMenuBar$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(20).exit$();
});
})()
), Clazz.new_(P$.TFrame$DefaultMenuBar$5.$init$,[this, null])));
fileMenu.add$javax_swing_JMenuItem(exitItem);
var editMenu=Clazz.new_([$I$(17).getString$S("TMenuBar.Menu.Edit")],$I$(16,1).c$$S);
this.add$javax_swing_JMenu(editMenu);
var languageMenu=Clazz.new_([$I$(17).getString$S("TMenuBar.MenuItem.Language")],$I$(16,1).c$$S);
languageMenu.addMenuListener$javax_swing_event_MenuListener(((P$.TFrame$DefaultMenuBar$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$DefaultMenuBar$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent',  function (e) {
$I$(22).setLangMenu$javax_swing_JMenu$org_opensourcephysics_cabrillo_tracker_TFrame(this.$finals$.languageMenu, this.b$['org.opensourcephysics.cabrillo.tracker.TFrame']);
});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent',  function (e) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent',  function (e) {
});
})()
), Clazz.new_(P$.TFrame$DefaultMenuBar$6.$init$,[this, {languageMenu:languageMenu}])));
editMenu.add$javax_swing_JMenuItem(languageMenu);
var prefsItem=Clazz.new_([$I$(17).getString$S("TActions.Action.Config")],$I$(18,1).c$$S);
prefsItem.setAccelerator$javax_swing_KeyStroke($I$(19).getKeyStroke$I$I(10, keyMask));
prefsItem.addActionListener$java_awt_event_ActionListener(((P$.TFrame$DefaultMenuBar$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$DefaultMenuBar$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].showPrefsDialog$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
});
})()
), Clazz.new_(P$.TFrame$DefaultMenuBar$7.$init$,[this, null])));
editMenu.addSeparator$();
editMenu.add$javax_swing_JMenuItem(prefsItem);
this.add$javax_swing_JMenu($I$(22).getTrackerHelpMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu(null, null));
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TFrame, "Notes", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.needPosition=true;
},1);

C$.$fields$=[['Z',['wasVisible','needPosition'],'I',['thisFontLevel'],'O',['dialog','javax.swing.JDialog','textPane','javax.swing.JTextPane','cancelDialogButton','javax.swing.JButton','+closeDialogButton','displayWhenLoadedCheckbox','javax.swing.JCheckBox','panelID','Integer']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
p$2.createNotesGUI.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'dispose',  function () {
var a=this.dialog.getWindowListeners$();
for (var i=a.length; --i >= 0; ) this.dialog.removeWindowListener$java_awt_event_WindowListener(a[i]);

this.dialog.setVisible$Z(false);
}, p$2);

Clazz.newMeth(C$, 'createNotesGUI',  function () {
this.dialog=((P$.TFrame$Notes$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$Notes$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JDialog'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
if (panel != null ) {
var tbar=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getToolBar$Integer$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [panel.getID$(), false]);
if (tbar != null ) tbar.notesButton.setSelected$Z(vis);
}});
})()
), Clazz.new_($I$(23,1).c$$java_awt_Frame$Z,[this, null, this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], false],P$.TFrame$Notes$1));
this.textPane=Clazz.new_($I$(24,1));
this.textPane.setBackground$java_awt_Color($I$(25).WHITE);
this.textPane.addHyperlinkListener$javax_swing_event_HyperlinkListener(((P$.TFrame$Notes$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$Notes$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.HyperlinkListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'hyperlinkUpdate$javax_swing_event_HyperlinkEvent',  function (e) {
if (e.getEventType$() === $I$(26).ACTIVATED ) {
var url=e.getURL$().toString();
$I$(27).displayURL$S(url);
}});
})()
), Clazz.new_(P$.TFrame$Notes$2.$init$,[this, null])));
this.textPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(28,1).c$$I$I,[420, 200]));
this.textPane.addKeyListener$java_awt_event_KeyListener(((P$.TFrame$Notes$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$Notes$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
if (!trackerPanel.isEnabled$S("notes.edit")) return;
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame.Notes'].textPane.setBackground$java_awt_Color($I$(29).YELLOW);
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame.Notes'].closeDialogButton.setText$S($I$(17).getString$S("PrefsDialog.Button.Save"));
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame.Notes'].cancelDialogButton.setEnabled$Z(true);
});
})()
), Clazz.new_($I$(30,1),[this, null],P$.TFrame$Notes$3)));
this.textPane.addFocusListener$java_awt_event_FocusListener(((P$.TFrame$Notes$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$Notes$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (e.getOppositeComponent$() !== this.b$['org.opensourcephysics.cabrillo.tracker.TFrame.Notes'].cancelDialogButton ) this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].saveNotesAction.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_($I$(31,1),[this, null],P$.TFrame$Notes$4)));
this.displayWhenLoadedCheckbox=Clazz.new_([$I$(17).getString$S("TFrame.NotesDialog.Checkbox.ShowByDefault")],$I$(32,1).c$$S);
this.displayWhenLoadedCheckbox.addActionListener$java_awt_event_ActionListener(((P$.TFrame$Notes$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$Notes$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
if (trackerPanel != null ) {
trackerPanel.hideDescriptionWhenLoaded=!this.b$['org.opensourcephysics.cabrillo.tracker.TFrame.Notes'].displayWhenLoadedCheckbox.isSelected$();
}});
})()
), Clazz.new_($I$(33,1),[this, null],P$.TFrame$Notes$5)));
var buttonbar=Clazz.new_([Clazz.new_($I$(35,1))],$I$(34,1).c$$java_awt_LayoutManager);
buttonbar.add$java_awt_Component(this.displayWhenLoadedCheckbox);
buttonbar.add$java_awt_Component($I$(2).createHorizontalStrut$I(50));
this.cancelDialogButton=Clazz.new_([$I$(17).getString$S("Dialog.Button.Cancel")],$I$(36,1).c$$S);
this.cancelDialogButton.addActionListener$java_awt_event_ActionListener(((P$.TFrame$Notes$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$Notes$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame.Notes'].dialog.setName$S("canceled");
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame.Notes'].dialog.setVisible$Z(false);
});
})()
), Clazz.new_($I$(33,1),[this, null],P$.TFrame$Notes$6)));
buttonbar.add$java_awt_Component(this.cancelDialogButton);
this.closeDialogButton=Clazz.new_([$I$(17).getString$S("Dialog.Button.Close")],$I$(36,1).c$$S);
this.closeDialogButton.addActionListener$java_awt_event_ActionListener(((P$.TFrame$Notes$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "TFrame$Notes$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame.Notes'].dialog.setVisible$Z(false);
});
})()
), Clazz.new_(P$.TFrame$Notes$7.$init$,[this, null])));
buttonbar.add$java_awt_Component(this.closeDialogButton);
var infoContentPane=Clazz.new_([Clazz.new_($I$(1,1))],$I$(34,1).c$$java_awt_LayoutManager);
infoContentPane.add$java_awt_Component$O(Clazz.new_($I$(37,1).c$$java_awt_Component,[this.textPane]), "Center");
infoContentPane.add$java_awt_Component$O(buttonbar, "South");
this.dialog.setContentPane$java_awt_Container(infoContentPane);
this.dialog.pack$();
}, p$2);

Clazz.newMeth(C$, 'save',  function () {
if (this.textPane.getBackground$() === $I$(25).WHITE ) return;
var desc=this.textPane.getText$();
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
if (trackerPanel != null  && this.dialog.getName$() !== "canceled"  ) {
trackerPanel.changed=true;
var track=trackerPanel.getTrack$S(this.dialog.getName$());
if (track != null  && !desc.equals$O(track.getDescription$()) ) {
track.setDescription$S(desc);
} else if (!desc.equals$O(trackerPanel.getDescription$())) {
trackerPanel.setDescription$S(desc);
trackerPanel.hideDescriptionWhenLoaded=!this.displayWhenLoadedCheckbox.isSelected$();
}}this.textPane.setBackground$java_awt_Color($I$(25).WHITE);
this.cancelDialogButton.setEnabled$Z(false);
this.closeDialogButton.setEnabled$Z(true);
this.closeDialogButton.setText$S($I$(17).getString$S("Dialog.Button.Close"));
}, p$2);

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
if (b && this.needPosition ) {
this.needPosition=false;
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getTrackerPanelForID$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [this.panelID]);
var p0=Clazz.new_($I$(38,1)).getLocation$();
if (trackerPanel.infoX != -2147483648 || this.dialog.getLocation$().x == p0.x ) {
var x;
var y;
var p=this.b$['java.awt.Component'].getLocationOnScreen$.apply(this.b$['java.awt.Component'], []);
if (trackerPanel.infoX != -2147483648) {
var dim=$I$(15).getDefaultToolkit$().getScreenSize$();
x=Math.max(p.x + trackerPanel.infoX, 0);
x=Math.min(x, dim.width - this.dialog.getWidth$());
y=Math.max(p.y + trackerPanel.infoY, 0);
y=Math.min(y, dim.height - this.dialog.getHeight$());
trackerPanel.infoX=-2147483648;
} else {
var toolbar=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getToolBar$Integer$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [this.panelID, true]);
var pleft=toolbar.getLocationOnScreen$();
var dim=this.dialog.getSize$();
var wdim=toolbar.getSize$();
x=pleft.x + ((0.5 * (wdim.width - dim.width))|0);
y=p.y + 16;
}this.dialog.setLocation$I$I(x, y);
}System.out.println$S("TFrame.notes " + this.dialog.isVisible$());
}this.dialog.setVisible$Z(b);
}, p$2);

Clazz.newMeth(C$, 'isVisible',  function () {
return this.dialog.isVisible$();
}, p$2);

Clazz.newMeth(C$, 'updateDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
this.textPane.setEditable$Z(panel.isEnabled$S("notes.edit"));
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].saveNotesAction.actionPerformed$java_awt_event_ActionEvent(null);
var track=panel.selectedTrack;
if (track != null ) {
this.textPane.setText$S(track.getDescription$());
this.dialog.setName$S(track.getName$());
this.dialog.setTitle$S($I$(17).getString$S("TActions.Dialog.Description.Title") + " \"" + track.getName$() + "\"" );
} else {
this.textPane.setText$S(panel.getDescription$());
this.dialog.setName$S(null);
var tabName=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getTabTitle$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getSelectedTab$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [])]);
this.dialog.setTitle$S($I$(17).getString$S("TActions.Dialog.Description.Title") + " \"" + tabName + "\"" );
}this.textPane.setBackground$java_awt_Color($I$(25).WHITE);
this.cancelDialogButton.setEnabled$Z(false);
this.closeDialogButton.setEnabled$Z(true);
panel=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
this.displayWhenLoadedCheckbox.setEnabled$Z(panel != null );
if (panel != null ) {
this.displayWhenLoadedCheckbox.setSelected$Z(!panel.hideDescriptionWhenLoaded);
}p$2.refreshTextAndFonts.apply(this, []);
}, p$2);

Clazz.newMeth(C$, 'getDialog',  function () {
p$2.refreshTextAndFonts.apply(this, []);
return this.dialog;
}, p$2);

Clazz.newMeth(C$, 'refreshTextAndFonts',  function () {
this.cancelDialogButton.setText$S($I$(17).getString$S("Dialog.Button.Cancel"));
this.closeDialogButton.setText$S($I$(17).getString$S("Dialog.Button.Close"));
this.displayWhenLoadedCheckbox.setText$S($I$(17).getString$S("TFrame.NotesDialog.Checkbox.ShowByDefault"));
var level=$I$(39).getLevel$();
if (level != this.thisFontLevel) {
this.thisFontLevel=level;
$I$(39).setFonts$O$I(this.dialog, level);
this.dialog.pack$();
}}, p$2);

Clazz.newMeth(C$, 'setDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_awt_event_WindowListener',  function (panel, infoListener) {
this.panelID=panel.getID$();
this.dialog.removeWindowListener$java_awt_event_WindowListener(infoListener);
this.dialog.addWindowListener$java_awt_event_WindowListener(infoListener);
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], []);
p$2.setVisible$Z.apply(this, [true]);
this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'].updateNotesDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TFrame'], [trackerPanel]);
}, p$2);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
