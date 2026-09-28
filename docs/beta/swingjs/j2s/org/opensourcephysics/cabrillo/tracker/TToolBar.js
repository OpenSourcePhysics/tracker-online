(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.cabrillo.tracker.TToolBar','javax.swing.JMenu','org.opensourcephysics.cabrillo.tracker.TrackerRes','javax.swing.JMenuItem','org.opensourcephysics.cabrillo.tracker.TapeMeasure','java.awt.Color','org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.cabrillo.tracker.Calibration','org.opensourcephysics.cabrillo.tracker.OffsetOrigin','javax.swing.JPopupMenu','javax.swing.JCheckBoxMenuItem','org.opensourcephysics.cabrillo.tracker.TMenuBar','org.opensourcephysics.tools.FontSizer','java.awt.event.MouseAdapter','org.opensourcephysics.cabrillo.tracker.PencilDrawer','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.display.OSPRuntime','javax.swing.Icon','java.text.NumberFormat','java.util.ArrayList','java.awt.event.ComponentAdapter','org.opensourcephysics.cabrillo.tracker.TButton','org.opensourcephysics.controls.XML',['org.opensourcephysics.cabrillo.tracker.TToolBar','.CalibrationButton'],'javax.swing.AbstractAction','org.opensourcephysics.cabrillo.tracker.TrackControl','javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem',['org.opensourcephysics.cabrillo.tracker.TToolBar','.MeasureButton'],'javax.swing.SwingUtilities','javax.swing.Box','java.awt.event.WindowAdapter',['org.opensourcephysics.cabrillo.tracker.TToolBar','.DrawingButton'],'org.opensourcephysics.cabrillo.tracker.TViewChooser',['org.opensourcephysics.cabrillo.tracker.TToolBar','.MobileButton'],'org.opensourcephysics.cabrillo.tracker.TableTView','org.opensourcephysics.cabrillo.tracker.TrackerPanel','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.desktop.OSPDesktop','org.opensourcephysics.cabrillo.tracker.RGBRegion','javax.swing.JOptionPane','org.opensourcephysics.cabrillo.tracker.TTrackBar','org.opensourcephysics.media.core.MediaRes','org.opensourcephysics.cabrillo.tracker.TTrack','org.opensourcephysics.controls.OSPLog','javax.swing.JButton','javax.swing.BorderFactory','java.util.Collections',['org.opensourcephysics.cabrillo.tracker.TToolBar','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TToolBar", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JToolBar', [['org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.display.OSPRuntime.Disposable'], 'java.beans.PropertyChangeListener']);
C$.$classes$=[['Loader',8],['CalibrationButton',4],['MeasureButton',4],['DrawingButton',4],['MobileButton',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.newPopup=Clazz.new_($I$(10,1));
this.selectPopup=Clazz.new_($I$(10,1));
this.eyePopup=Clazz.new_($I$(10,1));
this.zoomPopup=Clazz.new_($I$(10,1));
this.pageViewTabs=Clazz.new_($I$(20,1));
this.overflowIndex=-1;
this.mobileEditMenu=Clazz.new_($I$(2,1));
this.mobileHelpMenu=Clazz.new_($I$(2,1));
this.noButtonIcons=true;
this.useEyeButton=true;
this.vStretch=1;
this.aStretch=1;
this.trailLengthIndex=$I$(7).preferredTrailLengthIndex;
this.notYetCalibrated=true;
this.allowRebuild=true;
},1);

C$.$fields$=[['Z',['noButtonIcons','refreshing','useEyeButton','refreshingTracks','notYetCalibrated','disposed','allowRebuild'],'I',['overflowIndex','vStretch','aStretch','trailLengthIndex','toolbarComponentHeight','enabledCount'],'O',['infoListener','java.awt.event.WindowListener','openButton','javax.swing.JButton','+saveButton','newTrackButton','org.opensourcephysics.cabrillo.tracker.TButton','trackControlButton','javax.swing.JButton','+clipSettingsButton','calibrationButton','org.opensourcephysics.cabrillo.tracker.TToolBar.CalibrationButton','measureButton','org.opensourcephysics.cabrillo.tracker.TToolBar.MeasureButton','drawingButton','org.opensourcephysics.cabrillo.tracker.TToolBar.DrawingButton','axesButton','org.opensourcephysics.cabrillo.tracker.TButton','+zoomButton','+autotrackerButton','+eyeButton','+traceVisButton','+pVisButton','+vVisButton','+aVisButton','+xMassButton','+trailButton','+labelsButton','+stretchButton','pathVisMenuItem','javax.swing.JMenuItem','+pVisMenuItem','+vVisMenuItem','+aVisMenuItem','+xMassMenuItem','+labelsMenuItem','trailsMenu','javax.swing.JMenu','+stretchMenu','fontSizeButton','javax.swing.JButton','newPopup','javax.swing.JPopupMenu','+selectPopup','+eyePopup','+zoomPopup','vStretchMenu','javax.swing.JMenu','+aStretchMenu','vGroup','javax.swing.ButtonGroup','+aGroup','showTrackControlItem','javax.swing.JMenuItem','+selectNoneItem','+stretchOffItem','notesButton','javax.swing.JButton','+refreshButton','+desktopButton','+memoryButton','+maximizeButton','+captureButton','toolbarFiller','java.awt.Component','cloneMenu','javax.swing.JMenu','pageViewTabs','java.util.ArrayList','overflowPopup','javax.swing.JPopupMenu','overflowButton','org.opensourcephysics.cabrillo.tracker.TButton','measureMenu','javax.swing.JMenu','+refreshMenu','+memoryMenu','+desktopMenu','+zoomMenu','+drawingMenu','+calibrationMenu','+eyeMenu','+openMenu','+saveMenu','trackControlCheckbox','javax.swing.JCheckBoxMenuItem','+notesCheckbox','+maximizeCheckbox','+axesCheckbox','+autotrackerCheckbox','+clipCheckbox','+drawingControlCheckbox','captureVideoItem','javax.swing.JMenuItem','overflowButtons','java.util.ArrayList','filePopup','javax.swing.JPopupMenu','+videoPopup','+coordsPopup','+trackPopup','+viewPopup','mobileEditMenu','javax.swing.JMenu','+mobileHelpMenu','fileButton','org.opensourcephysics.cabrillo.tracker.TButton','+videoButton','+coordsButton','+trackButton','+viewButton','zoomAction','javax.swing.AbstractAction','frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','refreshTimer','javax.swing.Timer']]
,['O',['trailLengths','int[]','trailLengthNames','String[]','newTrackIcon','javax.swing.Icon','+pointmassOffIcon','+pointmassOnIcon','+trackControlIcon','+trackControlOnIcon','+trackControlDisabledIcon','+zoomIcon','+clipOffIcon','+clipOnIcon','+axesOffIcon','+axesOnIcon','+calibrationToolsOffIcon','+calibrationToolsOnIcon','+calibrationOnlyIcon','+rulerOnlyIcon','+calibrationToolsOffRolloverIcon','+calibrationToolsOnRolloverIcon','+eyeIcon','+rulerIcon','+rulerOnIcon','+rulerRolloverIcon','+rulerOnRolloverIcon','+pointsOffIcon','+pointsOnIcon','+velocOffIcon','+velocOnIcon','+accelOffIcon','+accelOnIcon','+traceOffIcon','+traceOnIcon','+labelsOffIcon','+labelsOnIcon','+stretchOffIcon','+stretchOnIcon','+xmassOffIcon','+xmassOnIcon','+fontSizeIcon','+memoryIcon','+redMemoryIcon','+autotrackerOffIcon','+autotrackerOnIcon','+infoIcon','+infoOnIcon','+refreshIcon','+htmlIcon','+htmlDisabledIcon','trailIcons','javax.swing.Icon[]','stretchValues','int[]','separatorIcon','javax.swing.Icon','+folderIcon','+coordsIcon','+pencilOffIcon','+pencilOnIcon','+pencilOffRolloverIcon','+pencilOnRolloverIcon','+pencilIcon','+libraryIcon','+openBrowserIcon','+overflowIcon','+cameraIcon','zoomFormat','java.text.NumberFormat','panelProps','String[]']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
Clazz.super_(C$, this);
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
System.out.println$S("Creating toolbar for " + panel);
panel.addListeners$SA$java_beans_PropertyChangeListener(C$.panelProps, this);
this.setFloatable$Z(false);
this.addComponentListener$java_awt_event_ComponentListener(((P$.TToolBar$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ComponentAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (componentEvent) {
p$1.rebuild$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [-1]);
});
})()
), Clazz.new_($I$(21,1),[this, null],P$.TToolBar$1)));
this.overflowButtons=Clazz.new_($I$(20,1));
var actions=panel.getActions$();
this.openButton=((P$.TToolBar$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refreshOpenPopup$javax_swing_JPopupMenu.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [null]);
});
})()
), Clazz.new_($I$(22,1),[this, null],P$.TToolBar$2));
this.openButton.setIcon$javax_swing_Icon($I$(7).getResourceIcon$S$Z("open.gif", true));
this.openButton.setName$S("Open");
this.saveButton=((P$.TToolBar$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refreshSavePopup$javax_swing_JPopupMenu.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [null]);
});
})()
), Clazz.new_($I$(22,1),[this, null],P$.TToolBar$3));
this.saveButton.setIcon$javax_swing_Icon($I$(7).getResourceIcon$S$Z("save.gif", true));
this.saveButton.setName$S("Save");
this.saveButton.addMouseListener$java_awt_event_MouseListener(((P$.TToolBar$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
var fileName=this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).getTitle$();
var extension=$I$(23).getExtension$S(fileName);
if (extension == null  || !extension.equals$O("trk") ) fileName=$I$(23).stripExtension$S(fileName) + ".trk";
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].saveButton.setToolTipText$S($I$(3).getString$S("TToolBar.Button.Save.Tooltip"));
});
})()
), Clazz.new_($I$(14,1),[this, null],P$.TToolBar$4)));
this.clipSettingsButton=Clazz.new_($I$(22,1).c$$javax_swing_Icon$javax_swing_Icon,[C$.clipOffIcon, C$.clipOnIcon]);
this.clipSettingsButton.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).setClipSettingsVisible$Boolean.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), [null]);
});
})()
), Clazz.new_(P$.TToolBar$lambda1.$init$,[this, null])));
this.clipSettingsButton.setName$S("ClipSettings");
this.axesButton=Clazz.new_($I$(22,1).c$$javax_swing_Icon$javax_swing_Icon,[C$.axesOffIcon, C$.axesOnIcon]);
this.axesButton.addActionListener$java_awt_event_ActionListener(actions.get$O("axesVisible"));
this.axesButton.setName$S("Axes");
this.calibrationButton=Clazz.new_($I$(24,1),[this, null]);
this.calibrationButton.setName$S("CalibrationTools");
this.zoomAction=((P$.TToolBar$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var rect=this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).scrollPane.getViewport$().getViewRect$();
var mainView=this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].frame.getMainView$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []));
mainView.setZoomCenter$I$I(rect.x + (rect.width/2|0), rect.y + (rect.height/2|0));
var name=e.getActionCommand$();
if (name.equals$O("auto")) {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).setMagnification$D(-1);
} else {
var mag=Double.parseDouble$S(name);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).setMagnification$D(mag / 100);
}});
})()
), Clazz.new_($I$(25,1),[this, null],P$.TToolBar$5));
this.zoomButton=((P$.TToolBar$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refreshZoomPopup$javax_swing_JPopupMenu.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].zoomPopup]);
});
})()
), Clazz.new_($I$(22,1).c$$javax_swing_Icon,[this, null, C$.zoomIcon],P$.TToolBar$6));
this.zoomButton.addMouseListener$java_awt_event_MouseListener(((P$.TToolBar$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if (e.getClickCount$() == 2) {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).setMagnification$D(-1);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].zoomPopup != null ) this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].zoomPopup.setVisible$Z(false);
}});
})()
), Clazz.new_($I$(14,1),[this, null],P$.TToolBar$7)));
this.zoomButton.setName$S("Zoom");
this.newTrackButton=((P$.TToolBar$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
$I$(12,"refreshPopup$org_opensourcephysics_cabrillo_tracker_TrackerPanel$S$javax_swing_JPopupMenu",[this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), "TToolBar.tracks", this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].newPopup]);
return this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].newPopup;
});
})()
), Clazz.new_($I$(22,1).c$$javax_swing_Icon,[this, null, C$.pointmassOffIcon],P$.TToolBar$8));
this.trackControlButton=Clazz.new_($I$(22,1).c$$javax_swing_Icon$javax_swing_Icon,[C$.pointmassOffIcon, C$.pointmassOnIcon]);
this.trackControlButton.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var tc=$I$(26,"getControl$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [])]);
var vis=!tc.isVisible$.apply(tc, []);
if (!tc.positioned) {
try {
var p=this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].trackControlButton.getLocationOnScreen$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].trackControlButton, []);
tc.setLocation$I$I.apply(tc, [p.x, p.y + this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].trackControlButton.getHeight$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].trackControlButton, [])]);
} catch (e1) {
if (Clazz.exceptionOf(e1,"Exception")){
var p=this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).getLocationOnScreen$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), []);
tc.setLocation$I$I.apply(tc, [p.x + 4, p.y + 4]);
} else {
throw e1;
}
}
tc.positioned=true;
}tc.setVisible$Z.apply(tc, [vis]);
});
})()
), Clazz.new_(P$.TToolBar$lambda2.$init$,[this, null])));
this.trackControlButton.setName$S("TrackControl");
this.autotrackerButton=Clazz.new_($I$(22,1).c$$javax_swing_Icon$javax_swing_Icon,[C$.autotrackerOffIcon, C$.autotrackerOnIcon]);
this.autotrackerButton.addMouseListener$java_awt_event_MouseListener(((P$.TToolBar$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
this.b$['javax.swing.JComponent'].requestFocus$.apply(this.b$['javax.swing.JComponent'], []);
});
})()
), Clazz.new_($I$(14,1),[this, null],P$.TToolBar$9)));
this.autotrackerButton.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].autotrackerButton.setSelected$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].autotrackerButton, [!this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].autotrackerButton.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].autotrackerButton, [])]);
var autoTracker=this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).getAutoTracker$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), [true]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].autotrackerButton.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].autotrackerButton, [])) {
autoTracker.getWizard$.apply(autoTracker, []).setFontLevel$I.apply(autoTracker.getWizard$.apply(autoTracker, []), [$I$(13).getLevel$()]);
}autoTracker.getWizard$.apply(autoTracker, []).setVisible$Z.apply(autoTracker.getWizard$.apply(autoTracker, []), [this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].autotrackerButton.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].autotrackerButton, [])]);
$I$(16,"repaintT$java_awt_Component",[this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [])]);
});
})()
), Clazz.new_(P$.TToolBar$lambda3.$init$,[this, null])));
this.autotrackerButton.setName$S("Autotracker");
var refreshAction=((P$.TToolBar$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var button=e.getSource$();
button.setSelected$Z(!button.isSelected$());
if (this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].useEyeButton) p$1.refreshTracks.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []);
 else this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refresh$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], ["refresh action"]);
});
})()
), Clazz.new_($I$(25,1),[this, null],P$.TToolBar$10));
this.pVisButton=Clazz.new_($I$(22,1).c$$javax_swing_Icon$javax_swing_Icon,[C$.pointsOffIcon, C$.pointsOnIcon]);
this.pVisButton.setSelected$Z(true);
this.pVisButton.addActionListener$java_awt_event_ActionListener(refreshAction);
this.vVisButton=Clazz.new_($I$(22,1).c$$javax_swing_Icon$javax_swing_Icon,[C$.velocOffIcon, C$.velocOnIcon]);
this.vVisButton.addActionListener$java_awt_event_ActionListener(refreshAction);
this.aVisButton=Clazz.new_($I$(22,1).c$$javax_swing_Icon$javax_swing_Icon,[C$.accelOffIcon, C$.accelOnIcon]);
this.aVisButton.addActionListener$java_awt_event_ActionListener(refreshAction);
this.traceVisButton=Clazz.new_($I$(22,1).c$$javax_swing_Icon$javax_swing_Icon,[C$.traceOffIcon, C$.traceOnIcon]);
this.traceVisButton.addActionListener$java_awt_event_ActionListener(refreshAction);
this.trailButton=((P$.TToolBar$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
var popup=Clazz.new_($I$(10,1));
var listener=((P$.TToolBar$11$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$11$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].trailLengthIndex=Integer.parseInt$S(e.getActionCommand$());
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].trailButton.setSelected$Z(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].trailLengthIndex != 0);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refresh$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], ["trail button action"]);
$I$(16,"repaintT$java_awt_Component",[this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [])]);
});
})()
), Clazz.new_(P$.TToolBar$11$1.$init$,[this, null]));
var group=Clazz.new_($I$(27,1));
var item=Clazz.new_([$I$(3).getString$S("TrackControl.TrailMenu.NoTrail")],$I$(28,1).c$$S);
item.setSelected$Z(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].trailLengthIndex == 0);
item.setActionCommand$S(String.valueOf$I(0));
item.addActionListener$java_awt_event_ActionListener(listener);
popup.add$javax_swing_JMenuItem(item);
group.add$javax_swing_AbstractButton(item);
item=Clazz.new_([$I$(3).getString$S("TrackControl.TrailMenu.ShortTrail")],$I$(28,1).c$$S);
item.setSelected$Z(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].trailLengthIndex == 1);
item.setActionCommand$S(String.valueOf$I(1));
item.addActionListener$java_awt_event_ActionListener(listener);
popup.add$javax_swing_JMenuItem(item);
group.add$javax_swing_AbstractButton(item);
item=Clazz.new_([$I$(3).getString$S("TrackControl.TrailMenu.LongTrail")],$I$(28,1).c$$S);
item.setSelected$Z(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].trailLengthIndex == 2);
item.setActionCommand$S(String.valueOf$I(2));
item.addActionListener$java_awt_event_ActionListener(listener);
popup.add$javax_swing_JMenuItem(item);
group.add$javax_swing_AbstractButton(item);
item=Clazz.new_([$I$(3).getString$S("TrackControl.TrailMenu.FullTrail")],$I$(28,1).c$$S);
item.setSelected$Z(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].trailLengthIndex == 3);
item.setActionCommand$S(String.valueOf$I(3));
item.addActionListener$java_awt_event_ActionListener(listener);
popup.add$javax_swing_JMenuItem(item);
group.add$javax_swing_AbstractButton(item);
$I$(13,"setFonts$O$I",[popup, $I$(13).getLevel$()]);
return popup;
});
})()
), Clazz.new_($I$(22,1),[this, null],P$.TToolBar$11));
this.trailButton.setSelected$Z(true);
this.labelsButton=Clazz.new_($I$(22,1).c$$javax_swing_Icon$javax_swing_Icon,[C$.labelsOffIcon, C$.labelsOnIcon]);
this.labelsButton.setSelected$Z(!$I$(7).hideLabels);
this.labelsButton.addActionListener$java_awt_event_ActionListener(refreshAction);
this.xMassButton=Clazz.new_($I$(22,1).c$$javax_swing_Icon$javax_swing_Icon,[C$.xmassOffIcon, C$.xmassOnIcon]);
this.xMassButton.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.$finals$.refreshAction.actionPerformed$java_awt_event_ActionEvent(e);
var track=this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).getSelectedTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), []);
if (track != null  && track.ttype == 5 ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).refreshTrackBar$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), []);
}});
})()
), Clazz.new_(P$.TToolBar$lambda4.$init$,[this, {refreshAction:refreshAction}])));
this.vStretchMenu=Clazz.new_($I$(2,1));
this.vStretchMenu.addMenuListener$javax_swing_event_MenuListener(((P$.TToolBar$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].vGroup != null ) return;
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].vGroup=Clazz.new_($I$(27,1));
for (var i=0; i < $I$(1).stretchValues.length; i++) {
var s=String.valueOf$I($I$(1).stretchValues[i]);
var item=Clazz.new_($I$(28,1).c$$S,["x" + s]);
if (i == 0) item.setText$S($I$(3).getString$S("TrackControl.StretchVectors.None"));
item.setActionCommand$S(s);
item.setSelected$Z(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].vStretch == $I$(1).stretchValues[i]);
item.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$12$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$12$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (ae) /*block*/{
{
var n=Integer.parseInt$S(ae.getActionCommand$.apply(ae, []));
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).setSelectedPoint$org_opensourcephysics_media_core_TPoint.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), [null]);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).selectedSteps.clear$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).selectedSteps, []);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].vStretch=n;
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refresh$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], ["vstretch action"]);
}});
})()
), Clazz.new_(P$.TToolBar$12$lambda5.$init$,[this, null])));
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].vGroup.add$javax_swing_AbstractButton(item);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].vStretchMenu.add$javax_swing_JMenuItem(item);
$I$(13).setMenuFonts$javax_swing_JMenu(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].vStretchMenu);
}
});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent',  function (e) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent',  function (e) {
});
})()
), Clazz.new_(P$.TToolBar$12.$init$,[this, null])));
this.aStretchMenu=Clazz.new_($I$(2,1));
this.aStretchMenu.addMenuListener$javax_swing_event_MenuListener(((P$.TToolBar$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].aGroup != null ) return;
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].aGroup=Clazz.new_($I$(27,1));
for (var i=0; i < $I$(1).stretchValues.length; i++) {
var s=String.valueOf$I($I$(1).stretchValues[i]);
var item=Clazz.new_($I$(28,1).c$$S,["x" + s]);
if (i == 0) item.setText$S($I$(3).getString$S("TrackControl.StretchVectors.None"));
item.setActionCommand$S(s);
item.setSelected$Z(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].aStretch == $I$(1).stretchValues[i]);
item.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$13$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$13$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (ae) /*block*/{
{
var n=Integer.parseInt$S(ae.getActionCommand$.apply(ae, []));
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).setSelectedPoint$org_opensourcephysics_media_core_TPoint.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), [null]);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).selectedSteps.clear$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).selectedSteps, []);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].aStretch=n;
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refresh$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], ["astretch action"]);
}});
})()
), Clazz.new_(P$.TToolBar$13$lambda5.$init$,[this, null])));
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].aGroup.add$javax_swing_AbstractButton(item);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].aStretchMenu.add$javax_swing_JMenuItem(item);
$I$(13).setMenuFonts$javax_swing_JMenu(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].aStretchMenu);
}
});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent',  function (e) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent',  function (e) {
});
})()
), Clazz.new_(P$.TToolBar$13.$init$,[this, null])));
this.stretchOffItem=Clazz.new_($I$(4,1));
this.stretchOffItem.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].vStretch=1;
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].aStretch=1;
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refresh$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], ["stretchoff action"]);
});
})()
), Clazz.new_(P$.TToolBar$lambda5.$init$,[this, null])));
this.stretchButton=((P$.TToolBar$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
var popup=Clazz.new_($I$(10,1));
popup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].vStretchMenu);
popup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].aStretchMenu);
popup.addSeparator$();
popup.add$javax_swing_JMenuItem(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].stretchOffItem);
$I$(13,"setFonts$O$I",[popup, $I$(13).getLevel$()]);
return popup;
});
})()
), Clazz.new_($I$(22,1).c$$javax_swing_Icon$javax_swing_Icon,[this, null, C$.stretchOffIcon, C$.stretchOnIcon],P$.TToolBar$14));
this.eyeButton=((P$.TToolBar$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refreshEyePopup$javax_swing_JPopupMenu.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].eyePopup]);
});
})()
), Clazz.new_($I$(22,1).c$$javax_swing_Icon,[this, null, C$.eyeIcon],P$.TToolBar$15));
this.eyeButton.setName$S("TrackDisplay");
this.measureButton=Clazz.new_($I$(29,1),[this, null]);
this.measureButton.setName$S("MeasuringTools");
this.fontSizeButton=((P$.TToolBar$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
var popup=Clazz.new_($I$(10,1));
for (var i=0; i <= $I$(7).maxFontLevel; i++) {
var s=$I$(3).getString$S("TMenuBar.MenuItem.Font");
var icon=$I$(7).getResourceIcon$S$Z("zoom.gif", true);
icon.setFixedSizeFactor$I($I$(13).getIntegerFactor$I(i));
var item=Clazz.new_($I$(4,1).c$$S$javax_swing_Icon,[s, icon]);
$I$(13).setFonts$O$I(item, i);
var n=i;
item.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$16$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$16$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.$finals$.popup.setVisible$Z.apply(this.$finals$.popup, [false]);
$I$(30,"invokeLater$Runnable",[((P$.TToolBar$16$lambda6$7||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$16$lambda6$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () { return ($I$(13).setLevel$I(this.$finals$.n));});
})()
), Clazz.new_(P$.TToolBar$16$lambda6$7.$init$,[this, {n:this.$finals$.n}]))]);
});
})()
), Clazz.new_(P$.TToolBar$16$lambda6.$init$,[this, {popup:popup,n:n}])));
popup.add$javax_swing_JMenuItem(item);
if (i == $I$(13).getLevel$()) {
item.setForeground$java_awt_Color($I$(6).green.darker$());
}}
return popup;
});
})()
), Clazz.new_($I$(22,1).c$$javax_swing_Icon,[this, null, C$.fontSizeIcon],P$.TToolBar$16));
this.toolbarFiller=$I$(31).createHorizontalGlue$();
this.infoListener=((P$.TToolBar$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].notesButton.setSelected$Z(false);
});
})()
), Clazz.new_($I$(32,1),[this, null],P$.TToolBar$17));
this.drawingButton=Clazz.new_($I$(33,1),[this, null]);
this.drawingButton.setName$S("Drawings");
this.notesButton=Clazz.new_($I$(22,1).c$$javax_swing_Icon$javax_swing_Icon,[C$.infoIcon, C$.infoOnIcon]);
this.notesButton.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].doNotesAction$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []);
});
})()
), Clazz.new_(P$.TToolBar$lambda6.$init$,[this, null])));
this.notesButton.setName$S("Notes");
this.captureButton=Clazz.new_($I$(22,1).c$$javax_swing_Icon,[C$.cameraIcon]);
this.captureButton.addActionListener$java_awt_event_ActionListener(actions.get$O("captureVideo"));
this.captureButton.setName$S("Capture");

{}
this.refreshButton=((P$.TToolBar$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refreshRefreshPopup$javax_swing_JPopupMenu.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [null]);
});
})()
), Clazz.new_($I$(22,1).c$$javax_swing_Icon,[this, null, C$.refreshIcon],P$.TToolBar$20));
this.refreshButton.setName$S("Refresh");
this.desktopButton=((P$.TToolBar$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refreshDesktopPopup$javax_swing_JPopupMenu.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [null]);
});
})()
), Clazz.new_($I$(22,1).c$$javax_swing_Icon,[this, null, C$.htmlIcon],P$.TToolBar$21));
this.desktopButton.setDisabledIcon$javax_swing_Icon(C$.htmlDisabledIcon);
this.desktopButton.setName$S("SupportDocs");
this.maximizeButton=Clazz.new_([$I$(34).MAXIMIZE_ICON, $I$(34).RESTORE_ICON],$I$(22,1).c$$javax_swing_Icon$javax_swing_Icon);
this.maximizeButton.setName$S("Maximize");
this.maximizeButton.setToolTipText$S($I$(3).getString$S("TFrame.Maximize.Tooltip"));
this.refreshMaximizeButton$();
this.maximizeButton.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$22||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(16).maximize=!$I$(16).maximize;
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refreshMaximizeButton$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []);
if ($I$(16).maximize) {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).getTFrame$().saveBounds$();
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).getTFrame$().getAdaptiveBounds$Z(false);
} else this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).getTFrame$().getAdaptiveBounds$Z(false);
});
})()
), Clazz.new_(P$.TToolBar$22.$init$,[this, null])));
this.overflowPopup=Clazz.new_($I$(10,1));
this.overflowButton=((P$.TToolBar$23||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.cabrillo.tracker.TToolBar','.MobileButton']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refreshOverflowComponents$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []);
$I$(13).setFonts$java_awt_Container(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].overflowPopup);
return this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].overflowPopup;
});
})()
), Clazz.new_($I$(35,1),[this, null],P$.TToolBar$23));
this.overflowButton.setText$S($I$(3).getString$S("TToolBar.Button.More.Text"));
this.overflowButton.alwaysShowBorder$Z(true);
this.overflowButton.setIconTextGap$I(3);
this.filePopup=Clazz.new_($I$(10,1));
this.videoPopup=Clazz.new_($I$(10,1));
this.coordsPopup=Clazz.new_($I$(10,1));
this.trackPopup=Clazz.new_($I$(10,1));
this.viewPopup=Clazz.new_($I$(10,1));
this.fileButton=((P$.TToolBar$24||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.cabrillo.tracker.TToolBar','.MobileButton']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
p$1.rebuildMobileFilePopup.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []);
$I$(13).setFonts$java_awt_Container(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].filePopup);
return this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].filePopup;
});
})()
), Clazz.new_($I$(35,1),[this, null],P$.TToolBar$24));
this.fileButton.setText$S($I$(3).getString$S("TMenuBar.Menu.File"));
if (!this.noButtonIcons) this.fileButton.setIcon$javax_swing_Icon(C$.folderIcon);
this.fileButton.alwaysShowBorder$Z(true);
this.fileButton.setIconTextGap$I(3);
this.videoButton=((P$.TToolBar$25||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.cabrillo.tracker.TToolBar','.MobileButton']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refreshZoomPopup$javax_swing_JPopupMenu.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].zoomMenu.getPopupMenu$()]);
p$1.rebuildMobileVideoPopup.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []);
$I$(13).setFonts$java_awt_Container(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].videoPopup);
return this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].videoPopup;
});
})()
), Clazz.new_($I$(35,1),[this, null],P$.TToolBar$25));
this.videoButton.setText$S($I$(3).getString$S("TMenuBar.Menu.Video"));
if (!this.noButtonIcons) this.videoButton.setIcon$javax_swing_Icon(C$.clipOffIcon);
this.videoButton.alwaysShowBorder$Z(true);
this.videoButton.setIconTextGap$I(3);
this.coordsButton=((P$.TToolBar$26||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.cabrillo.tracker.TToolBar','.MobileButton']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].axesCheckbox.setSelected$Z(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].axesButton.isSelected$());
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refreshCalibrationPopup$javax_swing_JPopupMenu.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].calibrationMenu.getPopupMenu$()]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].frame.currentMenuBar != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].frame.currentMenuBar.refreshCoordsMenu$Z(true);
}p$1.rebuildMobileCoordsPopup.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []);
$I$(13).setFonts$java_awt_Container(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].coordsPopup);
return this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].coordsPopup;
});
})()
), Clazz.new_($I$(35,1),[this, null],P$.TToolBar$26));
this.coordsButton.setText$S($I$(3).getString$S("TToolBar.Button.Coords.Text"));
if (!this.noButtonIcons) this.coordsButton.setIcon$javax_swing_Icon(C$.coordsIcon);
this.coordsButton.alwaysShowBorder$Z(true);
this.coordsButton.setIconTextGap$I(3);
this.trackButton=((P$.TToolBar$27||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.cabrillo.tracker.TToolBar','.MobileButton']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
p$1.rebuildMobileTrackPopup.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []);
$I$(13).setFonts$java_awt_Container(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].trackPopup);
return this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].trackPopup;
});
})()
), Clazz.new_($I$(35,1),[this, null],P$.TToolBar$27));
this.trackButton.setText$S($I$(3).getString$S("TMenuBar.Menu.Tracks"));
if (!this.noButtonIcons) this.trackButton.setIcon$javax_swing_Icon(C$.pointmassOffIcon);
this.trackButton.alwaysShowBorder$Z(true);
this.trackButton.setIconTextGap$I(3);
this.viewButton=((P$.TToolBar$28||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.cabrillo.tracker.TToolBar','.MobileButton']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPopup$',  function () {
p$1.rebuildMobileViewPopup.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []);
$I$(13).setFonts$java_awt_Container(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].viewPopup);
return this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].viewPopup;
});
})()
), Clazz.new_($I$(35,1),[this, null],P$.TToolBar$28));
this.viewButton.setText$S($I$(3).getString$S("TMenuBar.Menu.Window"));
if (!this.noButtonIcons) this.viewButton.setIcon$javax_swing_Icon($I$(36).TABLEVIEW_ICON);
this.viewButton.alwaysShowBorder$Z(true);
this.viewButton.setIconTextGap$I(3);
this.cloneMenu=Clazz.new_($I$(2,1));
this.showTrackControlItem=Clazz.new_($I$(11,1));
this.showTrackControlItem.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var tc=$I$(26,"getControl$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [])]);
tc.setVisible$Z.apply(tc, [this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].showTrackControlItem.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].showTrackControlItem, [])]);
});
})()
), Clazz.new_(P$.TToolBar$lambda7.$init$,[this, null])));
this.selectNoneItem=Clazz.new_($I$(4,1));
this.selectNoneItem.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), [null]);
});
})()
), Clazz.new_(P$.TToolBar$lambda8.$init$,[this, null])));
this.frame.clearHoldPainting$();
this.refresh$S("create gui");
this.validate$();
}, 1);

Clazz.newMeth(C$, 'refreshOpenPopup$javax_swing_JPopupMenu',  function (popup) {
var isButton=popup == null ;
if (popup == null ) popup=Clazz.new_($I$(10,1));
popup.removeAll$();
var actions=this.panel$().getActions$();
var openfile=Clazz.new_([actions.get$O("open")],$I$(4,1).c$$javax_swing_Action);
if (!$I$(17).isMobile$()) openfile.setIcon$javax_swing_Icon(null);
popup.add$javax_swing_JMenuItem(openfile);
var openbrowser=Clazz.new_([actions.get$O("openBrowser")],$I$(4,1).c$$javax_swing_Action);
if ($I$(17).isMobile$()) openbrowser.setIcon$javax_swing_Icon(C$.openBrowserIcon);
var showbrowser=(this.panel$().isEnabled$S("file.library") && this.panel$().isEnabled$S("file.open") );
if (showbrowser) popup.add$javax_swing_JMenuItem(openbrowser);
if (isButton || $I$(17).isMobile$() ) {
openfile.setText$S($I$(3).getString$S("TActions.Action.Open"));
openbrowser.setText$S($I$(3).getString$S("TActions.Action.OpenBrowser"));
if ($I$(17).isMobile$()) {
}} else {
openfile.setText$S($I$(3).getString$S("TMenuBar.MenuItem.FileChooser") + "...");
openbrowser.setText$S($I$(3).getString$S("TMenuBar.MenuItem.LibraryBrowser") + "...");
}$I$(13,"setFonts$O$I",[popup, $I$(13).getLevel$()]);
return popup;
});

Clazz.newMeth(C$, 'refreshSavePopup$javax_swing_JPopupMenu',  function (popup) {
var isButton=popup == null ;
if (popup == null ) popup=Clazz.new_($I$(10,1));
popup.removeAll$();
var actions=this.panel$().getActions$();
var savetab=Clazz.new_([actions.get$O("save")],$I$(4,1).c$$javax_swing_Action);
if (!$I$(17).isMobile$()) savetab.setIcon$javax_swing_Icon(null);
var file=this.panel$().getDataFile$();
var path=file == null  ? "..." : " \"" + file.getName$() + "\"" ;
savetab.setText$S($I$(3,"getString$S",[isButton || $I$(17).isMobile$()  ? "TActions.Action.Save" : "TMenuBar.MenuItem.Tab"]) + path);
popup.add$javax_swing_JMenuItem(savetab);
var saveproject=Clazz.new_([actions.get$O("saveZip")],$I$(4,1).c$$javax_swing_Action);
if (!$I$(17).isMobile$()) saveproject.setIcon$javax_swing_Icon(null);
saveproject.setText$S($I$(3,"getString$S",[isButton || $I$(17).isMobile$()  ? "TActions.Action.SaveZip" : "TMenuBar.MenuItem.Project"]) + "...");
popup.add$javax_swing_JMenuItem(saveproject);
$I$(13,"setFonts$O$I",[popup, $I$(13).getLevel$()]);
return popup;
});

Clazz.newMeth(C$, 'refreshMeasurePopup$javax_swing_JPopupMenu',  function (popup) {
popup.removeAll$();
for (var track, $track = this.panel$().measuringTools.iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
var checkbox=Clazz.new_([track.getName$()],$I$(11,1).c$$S);
checkbox.setSelected$Z(track.isVisible$());
checkbox.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.$finals$.track.setVisible$Z.apply(this.$finals$.track, [this.$finals$.checkbox.isSelected$.apply(this.$finals$.checkbox, [])]);
});
})()
), Clazz.new_(P$.TToolBar$lambda9.$init$,[this, {track:track,checkbox:checkbox}])));
popup.add$javax_swing_JMenuItem(checkbox);
}
var newToolsMenu=Clazz.new_([$I$(3).getString$S("TMenuBar.MenuItem.NewTrack")],$I$(2,1).c$$S);
$I$(12,"refreshMeasuringToolsMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu",[this.panel$(), newToolsMenu]);
if (newToolsMenu.getItemCount$() > 0) {
if (!this.panel$().measuringTools.isEmpty$()) popup.addSeparator$();
if ($I$(17).isMobile$()) {
var heading=Clazz.new_([newToolsMenu.getText$()],$I$(4,1).c$$S);
heading.setEnabled$Z(false);
popup.add$javax_swing_JMenuItem(heading);
for (var item, $item = 0, $$item = newToolsMenu.getMenuComponents$(); $item<$$item.length&&((item=($$item[$item])),1);$item++) {
popup.add$java_awt_Component(item);
}
} else {
popup.add$javax_swing_JMenuItem(newToolsMenu);
}}$I$(13,"setFonts$O$I",[popup, $I$(13).getLevel$()]);
return popup;
});

Clazz.newMeth(C$, 'refreshZoomPopup$javax_swing_JPopupMenu',  function (popup) {
popup.removeAll$();
var item=Clazz.new_([$I$(3).getString$S("MainTView.Popup.MenuItem.ToFit")],$I$(4,1).c$$S);
item.setActionCommand$S("auto");
item.addActionListener$java_awt_event_ActionListener(this.zoomAction);
popup.add$javax_swing_JMenuItem(item);
popup.addSeparator$();
for (var i=0, nz=$I$(37).ZOOM_LEVELS.length; i < nz; i++) {
var n=((100 * $I$(37).ZOOM_LEVELS[i])|0);
var m=String.valueOf$I(n);
item=Clazz.new_($I$(4,1).c$$S,[m + "%"]);
item.setActionCommand$S(m);
item.addActionListener$java_awt_event_ActionListener(this.zoomAction);
popup.add$javax_swing_JMenuItem(item);
}
$I$(13,"setFonts$O$I",[popup, $I$(13).getLevel$()]);
return popup;
});

Clazz.newMeth(C$, 'refreshDesktopPopup$javax_swing_JPopupMenu',  function (popup) {
var panel=this.panel$();
if (popup == null ) popup=Clazz.new_($I$(10,1));
popup.removeAll$();
if (!panel.supplementalFilePaths.isEmpty$()) {
var fileMenu=Clazz.new_([$I$(3).getString$S("TToolbar.Button.Desktop.Menu.OpenFile")],$I$(2,1).c$$S);
popup.add$javax_swing_JMenuItem(fileMenu);
for (var next, $next = panel.supplementalFilePaths.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var title=$I$(23).getName$S(next);
var path=$I$(38).getNonURIPath$S(next);
var item=Clazz.new_($I$(4,1).c$$S,[title]);
fileMenu.add$javax_swing_JMenuItem(item);
item.setActionCommand$S(path);
item.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(39,"displayURL$S",[e.getActionCommand$.apply(e, [])]);
});
})()
), Clazz.new_(P$.TToolBar$lambda10.$init$,[this, null])));
}
}if (!this.pageViewTabs.isEmpty$()) {
var pageMenu=Clazz.new_([$I$(3).getString$S("TToolbar.Button.Desktop.Menu.OpenPage")],$I$(2,1).c$$S);
popup.add$javax_swing_JMenuItem(pageMenu);
for (var next, $next = this.pageViewTabs.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.url == null ) continue;
var title=next.title;
var path=panel.pageViewFilePaths.get$O(next.text);
if (path == null ) {
path=next.url.toExternalForm$();
}var item=Clazz.new_($I$(4,1).c$$S,[title]);
item.setActionCommand$S(path);
item.setToolTipText$S(path);
item.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(39,"displayURL$S",[e.getActionCommand$.apply(e, [])]);
});
})()
), Clazz.new_(P$.TToolBar$lambda11.$init$,[this, null])));
pageMenu.add$javax_swing_JMenuItem(item);
}
}$I$(13,"setFonts$O$I",[popup, $I$(13).getLevel$()]);
return popup;
});

Clazz.newMeth(C$, 'refreshMemoryPopup$javax_swing_JPopupMenu',  function (popup) {
popup.removeAll$();
var memoryItem=Clazz.new_([$I$(3).getString$S("TTrackBar.Memory.Menu.SetSize")],$I$(4,1).c$$S);
popup.add$javax_swing_JMenuItem(memoryItem);
memoryItem.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$29||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(7,"askToSetMemory$org_opensourcephysics_cabrillo_tracker_TFrame",[this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].memoryButton.getTopLevelAncestor$()]);
});
})()
), Clazz.new_(P$.TToolBar$29.$init$,[this, null])));
$I$(13,"setFonts$O$I",[popup, $I$(13).getLevel$()]);
return popup;
}, p$1);

Clazz.newMeth(C$, 'refreshRefreshPopup$javax_swing_JPopupMenu',  function (popup) {
if (popup == null ) popup=Clazz.new_($I$(10,1));
popup.removeAll$();
var item=Clazz.new_([$I$(3).getString$S("TToolbar.Button.Refresh.Popup.RefreshNow")],$I$(4,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].doRefreshPopup$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []);
});
})()
), Clazz.new_(P$.TToolBar$lambda12.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
popup.addSeparator$();
item=Clazz.new_([$I$(3).getString$S("TToolbar.Button.Refresh.Popup.AutoRefresh")],$I$(11,1).c$$S);
item.setSelected$Z(this.panel$().isAutoRefresh$());
item.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []);
panel.setAutoRefresh$Z.apply(panel, [(e.getSource$.apply(e, [])).isSelected$.apply((e.getSource$.apply(e, [])), [])]);
if (panel.isAutoRefresh$.apply(panel, [])) {
panel.refreshTrackData$I.apply(panel, [134217728]);
panel.eraseAll$.apply(panel, []);
panel.repaintDirtyRegion$.apply(panel, []);
}});
})()
), Clazz.new_(P$.TToolBar$lambda13.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
$I$(13,"setFonts$O$I",[popup, $I$(13).getLevel$()]);
return popup;
});

Clazz.newMeth(C$, 'doRefreshPopup$',  function () {
var panel=this.panel$();
var regions=panel.getDrawablesTemp$Class(Clazz.getClass($I$(40)));
var regionsToClear=Clazz.new_($I$(20,1));
if (!regions.isEmpty$()) {
for (var next, $next = regions.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (panel.isTrackViewDisplayed$org_opensourcephysics_cabrillo_tracker_TTrack(next) && next.dataValid ) {
regionsToClear.add$O(next);
}}
}regions.clear$();
if (!regionsToClear.isEmpty$()) {
var list=" ";
for (var next, $next = regionsToClear.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
list+=next.getName$() + ", ";
}
list=list.substring$I$I(0, list.length$() - 2);
var i=$I$(41,"showConfirmDialog$java_awt_Component$O$S$I$I",[panel.getTopLevelAncestor$(), $I$(3).getString$S("TToolBar.Dialog.ClearRGB.Message1") + "\n" + $I$(3).getString$S("TToolBar.Dialog.ClearRGB.Message2") , $I$(3).getString$S("TToolBar.Dialog.ClearRGB.Title") + list, 0, 3]);
if (i == 0) {
for (var next, $next = regionsToClear.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.clearData$();
}
}}panel.refreshTrackData$I(134217728);
panel.eraseAll$();
panel.repaintDirtyRegion$();
});

Clazz.newMeth(C$, 'doNotesAction$',  function () {
if (this.frame != null  && this.frame.getSelectedPanel$() === this.panel$()  ) {
this.notesButton.setSelected$Z(!this.notesButton.isSelected$());
if (this.notesButton.isSelected$()) this.frame.setNotesDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_awt_event_WindowListener(this.panel$(), this.infoListener);
 else this.frame.setNotesVisible$Z(false);
}});

Clazz.newMeth(C$, 'getLocalizedName$javax_swing_JButton',  function (button) {
return $I$(3,"getString$S",["TToolBar.Overflow." + button.getName$()]);
}, p$1);

Clazz.newMeth(C$, 'getOverflowComponent$javax_swing_JButton',  function (button) {
switch (button.getName$()) {
case "Open":
if (this.openMenu == null ) {
this.openMenu=Clazz.new_($I$(2,1));
this.openMenu.setIcon$javax_swing_Icon(button.getIcon$());
}this.openMenu.setText$S(p$1.getLocalizedName$javax_swing_JButton.apply(this, [button]));
return this.openMenu;
case "Save":
if (this.saveMenu == null ) {
this.saveMenu=Clazz.new_($I$(2,1));
this.saveMenu.setIcon$javax_swing_Icon(button.getIcon$());
}this.saveMenu.setText$S(p$1.getLocalizedName$javax_swing_JButton.apply(this, [button]));
return this.saveMenu;
case "ClipSettings":
if (this.clipCheckbox == null ) {
this.clipCheckbox=Clazz.new_(["", button.getIcon$()],$I$(11,1).c$$S$javax_swing_Icon);
this.clipCheckbox.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.$finals$.button.doClick$I.apply(this.$finals$.button, [0]);
});
})()
), Clazz.new_(P$.TToolBar$lambda14.$init$,[this, {button:button}])));
}this.clipCheckbox.setText$S(p$1.getLocalizedName$javax_swing_JButton.apply(this, [button]));
return this.clipCheckbox;
case "CalibrationTools":
if (this.calibrationMenu == null ) {
this.calibrationMenu=Clazz.new_($I$(2,1));
this.calibrationMenu.setIcon$javax_swing_Icon(C$.calibrationOnlyIcon);
}this.calibrationMenu.setText$S(p$1.getLocalizedName$javax_swing_JButton.apply(this, [button]));
return this.calibrationMenu;
case "Axes":
if (this.axesCheckbox == null ) {
this.axesCheckbox=Clazz.new_(["", button.getIcon$()],$I$(11,1).c$$S$javax_swing_Icon);
this.axesCheckbox.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.$finals$.button.doClick$I.apply(this.$finals$.button, [0]);
});
})()
), Clazz.new_(P$.TToolBar$lambda15.$init$,[this, {button:button}])));
}this.axesCheckbox.setText$S(p$1.getLocalizedName$javax_swing_JButton.apply(this, [button]));
return this.axesCheckbox;
case "MeasuringTools":
if (this.measureMenu == null ) {
this.measureMenu=Clazz.new_($I$(2,1));
this.measureMenu.setIcon$javax_swing_Icon(C$.rulerOnlyIcon);
}this.measureMenu.setText$S(p$1.getLocalizedName$javax_swing_JButton.apply(this, [button]));
return this.measureMenu;
case "TrackControl":
if (this.trackControlCheckbox == null ) {
this.trackControlCheckbox=Clazz.new_(["", button.getIcon$()],$I$(11,1).c$$S$javax_swing_Icon);
this.trackControlCheckbox.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.$finals$.button.doClick$I.apply(this.$finals$.button, [0]);
});
})()
), Clazz.new_(P$.TToolBar$lambda16.$init$,[this, {button:button}])));
}this.trackControlCheckbox.setText$S(p$1.getLocalizedName$javax_swing_JButton.apply(this, [button]));
return this.trackControlCheckbox;
case "Autotracker":
if (this.autotrackerCheckbox == null ) {
this.autotrackerCheckbox=Clazz.new_(["", button.getIcon$()],$I$(11,1).c$$S$javax_swing_Icon);
this.autotrackerCheckbox.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.$finals$.button.doClick$I.apply(this.$finals$.button, [0]);
});
})()
), Clazz.new_(P$.TToolBar$lambda17.$init$,[this, {button:button}])));
}this.autotrackerCheckbox.setText$S(p$1.getLocalizedName$javax_swing_JButton.apply(this, [button]));
return this.autotrackerCheckbox;
case "TrackDisplay":
if (this.eyeMenu == null ) {
this.eyeMenu=Clazz.new_($I$(2,1));
this.eyeMenu.setIcon$javax_swing_Icon(button.getIcon$());
}this.eyeMenu.setText$S(p$1.getLocalizedName$javax_swing_JButton.apply(this, [button]));
return this.eyeMenu;
case "Zoom":
if (this.zoomMenu == null ) {
this.zoomMenu=Clazz.new_($I$(2,1));
this.zoomMenu.setIcon$javax_swing_Icon(button.getIcon$());
}this.zoomMenu.setText$S(p$1.getLocalizedName$javax_swing_JButton.apply(this, [button]));
return this.zoomMenu;
case "Drawings":
if (this.drawingMenu == null ) {
this.drawingMenu=Clazz.new_($I$(2,1));
this.drawingMenu.setIcon$javax_swing_Icon(C$.pencilIcon);
this.drawingControlCheckbox=Clazz.new_($I$(11,1));
this.drawingControlCheckbox.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].drawingButton.showPopup=false;
this.$finals$.button.doClick$.apply(this.$finals$.button, []);
});
})()
), Clazz.new_(P$.TToolBar$lambda18.$init$,[this, {button:button}])));
this.drawingMenu.add$javax_swing_JMenuItem(this.drawingControlCheckbox);
}this.drawingMenu.setText$S(p$1.getLocalizedName$javax_swing_JButton.apply(this, [button]));
return this.drawingMenu;
case "Capture":
if (this.captureVideoItem == null ) {
this.captureVideoItem=Clazz.new_(["", button.getIcon$()],$I$(4,1).c$$S$javax_swing_Icon);
this.captureVideoItem.addActionListener$java_awt_event_ActionListener(this.panel$().getActions$().get$O("captureVideo"));
this.captureVideoItem.setIcon$javax_swing_Icon(C$.cameraIcon);
}this.captureVideoItem.setToolTipText$S(button.getToolTipText$());
this.captureVideoItem.setText$S(p$1.getLocalizedName$javax_swing_JButton.apply(this, [button]));
return this.captureVideoItem;
case "Notes":
if (this.notesCheckbox == null ) {
this.notesCheckbox=Clazz.new_(["", button.getIcon$()],$I$(11,1).c$$S$javax_swing_Icon);
this.notesCheckbox.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.$finals$.button.doClick$I.apply(this.$finals$.button, [0]);
});
})()
), Clazz.new_(P$.TToolBar$lambda19.$init$,[this, {button:button}])));
}this.notesCheckbox.setText$S(p$1.getLocalizedName$javax_swing_JButton.apply(this, [button]));
return this.notesCheckbox;
case "SupportDocs":
if (this.desktopMenu == null ) {
this.desktopMenu=Clazz.new_($I$(2,1));
this.desktopMenu.setIcon$javax_swing_Icon(button.getIcon$());
}this.desktopMenu.setText$S(p$1.getLocalizedName$javax_swing_JButton.apply(this, [button]));
return this.desktopMenu;
case "Memory":
if (this.memoryMenu == null ) {
this.memoryMenu=Clazz.new_($I$(2,1));
this.memoryMenu.setIcon$javax_swing_Icon(button.getIcon$());
}this.memoryMenu.setText$S(p$1.getLocalizedName$javax_swing_JButton.apply(this, [button]));
return this.memoryMenu;
case "Refresh":
if (this.refreshMenu == null ) {
this.refreshMenu=Clazz.new_($I$(2,1));
this.refreshMenu.setIcon$javax_swing_Icon(button.getIcon$());
}this.refreshMenu.setText$S(p$1.getLocalizedName$javax_swing_JButton.apply(this, [button]));
return this.refreshMenu;
case "Maximize":
if (this.maximizeCheckbox == null ) {
this.maximizeCheckbox=Clazz.new_(["", button.getIcon$()],$I$(11,1).c$$S$javax_swing_Icon);
this.maximizeCheckbox.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.$finals$.button.doClick$I.apply(this.$finals$.button, [0]);
});
})()
), Clazz.new_(P$.TToolBar$lambda20.$init$,[this, {button:button}])));
}this.maximizeCheckbox.setText$S(p$1.getLocalizedName$javax_swing_JButton.apply(this, [button]));
return this.maximizeCheckbox;
default:
var menu=Clazz.new_([p$1.getLocalizedName$javax_swing_JButton.apply(this, [button])],$I$(2,1).c$$S);
menu.setIcon$javax_swing_Icon(button.getIcon$());
return menu;
}
}, p$1);

Clazz.newMeth(C$, 'refreshOverflowComponents$',  function () {
if ($I$(17).isMobile$()) {
p$1.rebuildMobileOverflowPopup.apply(this, []);
return;
}for (var i=0; i < this.overflowButtons.size$(); i++) {
var button=this.overflowButtons.get$I(i);
switch (button.getName$()) {
case "Open":
this.refreshOpenPopup$javax_swing_JPopupMenu(this.openMenu.getPopupMenu$());
break;
case "Save":
this.refreshSavePopup$javax_swing_JPopupMenu(this.saveMenu.getPopupMenu$());
break;
case "ClipSettings":
this.clipCheckbox.setSelected$Z(this.clipSettingsButton.isSelected$());
break;
case "CalibrationTools":
this.refreshCalibrationPopup$javax_swing_JPopupMenu(this.calibrationMenu.getPopupMenu$());
break;
case "Axes":
this.axesCheckbox.setSelected$Z(this.axesButton.isSelected$());
break;
case "MeasuringTools":
this.refreshMeasurePopup$javax_swing_JPopupMenu(this.measureMenu.getPopupMenu$());
break;
case "TrackControl":
this.trackControlCheckbox.setSelected$Z(this.trackControlButton.isSelected$());
break;
case "Autotracker":
var autoTracker=this.panel$().getAutoTracker$Z(true);
this.autotrackerCheckbox.setSelected$Z(autoTracker.getWizard$().isVisible$());
break;
case "TrackDisplay":
this.refreshEyePopup$javax_swing_JPopupMenu(this.eyeMenu.getPopupMenu$());
break;
case "Zoom":
this.refreshZoomPopup$javax_swing_JPopupMenu(this.zoomMenu.getPopupMenu$());
break;
case "Drawings":
this.drawingButton.drawingVisibleCheckbox.setText$S($I$(3).getString$S("TTrack.MenuItem.Visible"));
var drawer=$I$(15,"getDrawer$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.panel$()]);
this.drawingButton.drawingVisibleCheckbox.setSelected$Z(drawer.areDrawingsVisible$());
this.drawingButton.drawingVisibleCheckbox.setEnabled$Z($I$(15,"hasDrawings$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.panel$()]) && !$I$(15,"isDrawing$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.panel$()]) );
this.drawingControlCheckbox.setText$S($I$(3).getString$S("TToolBar.Checkbox.DrawingControl"));
this.drawingControlCheckbox.setSelected$Z(this.drawingButton.isSelected$());
this.drawingMenu.removeAll$();
if ($I$(15,"hasDrawings$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.panel$()])) this.drawingMenu.add$javax_swing_JMenuItem(this.drawingButton.drawingVisibleCheckbox);
this.drawingMenu.add$javax_swing_JMenuItem(this.drawingControlCheckbox);
break;
case "Notes":
this.notesCheckbox.setSelected$Z(this.notesButton.isSelected$());
break;
case "Memory":
p$1.refreshMemoryPopup$javax_swing_JPopupMenu.apply(this, [this.memoryMenu.getPopupMenu$()]);
break;
case "Refresh":
this.refreshRefreshPopup$javax_swing_JPopupMenu(this.refreshMenu.getPopupMenu$());
var comp=this.refreshMenu.getMenuComponent$I(0);
(comp).setText$S($I$(3).getString$S("TToolBar.MenuItem.RefreshNow"));
break;
case "Maximize":
this.maximizeCheckbox.setSelected$Z(this.maximizeButton.isSelected$());
break;
case "SupportDocs":
this.refreshDesktopPopup$javax_swing_JPopupMenu(this.desktopMenu.getPopupMenu$());
}
}
});

Clazz.newMeth(C$, 'refreshCalibrationPopup$javax_swing_JPopupMenu',  function (popup) {
if (popup == null ) popup=Clazz.new_($I$(10,1));
popup.removeAll$();
for (var track, $track = this.panel$().calibrationTools.iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
var item=Clazz.new_([track.getName$()],$I$(11,1).c$$S);
item.setSelected$Z(track.isVisible$());
item.setActionCommand$S(track.getName$());
item.addActionListener$java_awt_event_ActionListener(this.calibrationButton);
popup.add$javax_swing_JMenuItem(item);
}
var newToolsMenu=this.calibrationButton.getCalibrationToolsMenu$();
if (newToolsMenu.getItemCount$() > 0) {
if (!this.panel$().calibrationTools.isEmpty$()) popup.addSeparator$();
popup.add$javax_swing_JMenuItem(newToolsMenu);
}$I$(13,"setFonts$O$I",[popup, $I$(13).getLevel$()]);
return popup;
});

Clazz.newMeth(C$, 'refreshMaximizeButton$',  function () {
this.maximizeButton.setSelected$Z($I$(16).maximize);
if ($I$(17).isJS) {
this.maximizeButton.setIcon$javax_swing_Icon($I$(16).maximize ? $I$(34).RESTORE_ICON : $I$(34).MAXIMIZE_ICON);
}this.maximizeButton.setToolTipText$S($I$(3,"getString$S",[$I$(16).maximize ? "TFrame.Restore.Tooltip" : "TFrame.Maximize.Tooltip"]));
if (this.maximizeCheckbox != null ) this.maximizeCheckbox.setSelected$Z($I$(16).maximize);
});

Clazz.newMeth(C$, 'refreshZoomButton$',  function () {
var zoom=this.panel$().getMagnification$() * 100;
this.zoomButton.setText$S(C$.zoomFormat.format$D(zoom) + "%");
});

Clazz.newMeth(C$, 'refreshMemoryButton$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
if ($I$(17).isJS) return;
if (trackerPanel == null ) return;
var panelID=trackerPanel.getID$();
var frame=trackerPanel.getTFrame$();
System.gc$();
$I$(30,"invokeLater$Runnable",[((P$.TToolBar$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
var panel=this.$finals$.frame.getTrackerPanelForID$Integer.apply(this.$finals$.frame, [this.$finals$.panelID]);
if (panel != null  && panel.hasToolBar$.apply(panel, []) ) p$1.refreshMemoryButton.apply(panel.getToolBar$Z.apply(panel, [true]), []);
});
})()
), Clazz.new_(P$.TToolBar$lambda21.$init$,[this, {frame:frame,panelID:panelID}]))]);
}, 1);

Clazz.newMeth(C$, 'refreshMemoryButton',  function () {
System.gc$();
var memory=$I$(17).getMemory$();
if ($I$(17).outOfMemory && $I$(42).showOutOfMemoryDialog ) {
$I$(17).outOfMemory=false;
$I$(42).showOutOfMemoryDialog=false;
memory[0]=memory[1];
$I$(41,"showMessageDialog$java_awt_Component$O$S$I",[this.memoryButton, $I$(3).getString$S("Tracker.Dialog.OutOfMemory.Message1") + "\n" + $I$(3).getString$S("Tracker.Dialog.OutOfMemory.Message2") , $I$(3).getString$S("Tracker.Dialog.OutOfMemory.Title"), 2]);
}var mem=$I$(3).getString$S("TTrackBar.Button.Memory") + " ";
var of=$I$(3).getString$S("DynamicSystem.Parameter.Of") + " ";
this.memoryButton.setToolTipText$S(mem + Long.$s(memory[0]) + "MB " + of + Long.$s(memory[1]) + "MB" );
var used=(Long.$dval(memory[0])) / memory[1];
this.memoryButton.setIcon$javax_swing_Icon(used > 0.8  ? C$.redMemoryIcon : C$.memoryIcon);
}, p$1);

Clazz.newMeth(C$, 'refreshEyePopup$javax_swing_JPopupMenu',  function (popup) {
popup.removeAll$();
if (this.pathVisMenuItem == null ) {
var gap=6;
this.pathVisMenuItem=Clazz.new_($I$(11,1).c$$javax_swing_Icon,[C$.traceOffIcon]);
this.pathVisMenuItem.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].traceVisButton.setSelected$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].traceVisButton, [!this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].traceVisButton.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].traceVisButton, [])]);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refresh$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], ["refresh action"]);
});
})()
), Clazz.new_(P$.TToolBar$lambda22.$init$,[this, null])));
this.pathVisMenuItem.setIconTextGap$I(gap);
this.pVisMenuItem=Clazz.new_($I$(11,1).c$$javax_swing_Icon,[C$.pointsOffIcon]);
this.pVisMenuItem.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].pVisButton.setSelected$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].pVisButton, [!this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].pVisButton.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].pVisButton, [])]);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refresh$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], ["refresh action"]);
});
})()
), Clazz.new_(P$.TToolBar$lambda23.$init$,[this, null])));
this.pVisMenuItem.setIconTextGap$I(gap);
this.vVisMenuItem=Clazz.new_($I$(11,1).c$$javax_swing_Icon,[C$.velocOffIcon]);
this.vVisMenuItem.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].vVisButton.setSelected$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].vVisButton, [!this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].vVisButton.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].vVisButton, [])]);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refresh$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], ["refresh action"]);
});
})()
), Clazz.new_(P$.TToolBar$lambda24.$init$,[this, null])));
this.vVisMenuItem.setIconTextGap$I(gap);
this.aVisMenuItem=Clazz.new_($I$(11,1).c$$javax_swing_Icon,[C$.accelOffIcon]);
this.aVisMenuItem.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].aVisButton.setSelected$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].aVisButton, [!this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].aVisButton.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].aVisButton, [])]);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refresh$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], ["refresh action"]);
});
})()
), Clazz.new_(P$.TToolBar$lambda25.$init$,[this, null])));
this.aVisMenuItem.setIconTextGap$I(gap);
this.trailsMenu=Clazz.new_($I$(2,1));
this.trailsMenu.setIconTextGap$I(gap);
var trailPopup=this.trailButton.getPopup$();
var n=trailPopup.getComponentCount$();
for (var i=0; i < n; i++) {
this.trailsMenu.add$java_awt_Component(trailPopup.getComponent$I(0));
}
this.labelsMenuItem=Clazz.new_($I$(11,1).c$$javax_swing_Icon,[C$.labelsOffIcon]);
this.labelsMenuItem.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].labelsButton.setSelected$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].labelsButton, [!this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].labelsButton.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].labelsButton, [])]);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refresh$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], ["refresh action"]);
});
})()
), Clazz.new_(P$.TToolBar$lambda26.$init$,[this, null])));
this.labelsMenuItem.setIconTextGap$I(gap);
this.stretchMenu=Clazz.new_($I$(2,1));
this.stretchMenu.setIcon$javax_swing_Icon(C$.stretchOffIcon);
this.stretchMenu.setIconTextGap$I(gap);
this.xMassMenuItem=Clazz.new_($I$(11,1).c$$javax_swing_Icon,[C$.xmassOffIcon]);
this.xMassMenuItem.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].xMassButton.setSelected$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].xMassButton, [!this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].xMassButton.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].xMassButton, [])]);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refresh$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], ["refresh action"]);
});
})()
), Clazz.new_(P$.TToolBar$lambda27.$init$,[this, null])));
this.xMassMenuItem.setIconTextGap$I(gap);
}if (this.panel$().isEnabled$S("button.path") || this.panel$().isEnabled$S("button.x") || this.panel$().isEnabled$S("button.v") || this.panel$().isEnabled$S("button.a")  ) {
if (this.panel$().isEnabled$S("button.path")) popup.add$javax_swing_JMenuItem(this.pathVisMenuItem);
if (this.panel$().isEnabled$S("button.x")) popup.add$javax_swing_JMenuItem(this.pVisMenuItem);
if (this.panel$().isEnabled$S("button.v")) popup.add$javax_swing_JMenuItem(this.vVisMenuItem);
if (this.panel$().isEnabled$S("button.a")) popup.add$javax_swing_JMenuItem(this.aVisMenuItem);
popup.addSeparator$();
}if (this.panel$().isEnabled$S("button.trails") || this.panel$().isEnabled$S("button.labels") ) {
if (this.panel$().isEnabled$S("button.trails")) popup.add$javax_swing_JMenuItem(this.trailsMenu);
if (this.panel$().isEnabled$S("button.labels")) popup.add$javax_swing_JMenuItem(this.labelsMenuItem);
popup.addSeparator$();
}if (this.panel$().isEnabled$S("button.stretch") || this.panel$().isEnabled$S("button.xMass") ) {
if (this.panel$().isEnabled$S("button.stretch")) popup.add$javax_swing_JMenuItem(this.stretchMenu);
if (this.panel$().isEnabled$S("button.xMass")) popup.add$javax_swing_JMenuItem(this.xMassMenuItem);
}var n=popup.getComponentCount$();
if (n > 0 && Clazz.instanceOf(popup.getComponent$I(n - 1), "javax.swing.JSeparator") ) {
popup.remove$I(n - 1);
}this.pathVisMenuItem.setText$S($I$(3).getString$S("TToolBar.Menuitem.Paths.Text"));
this.pVisMenuItem.setText$S($I$(3).getString$S("TToolBar.Menuitem.Positions.Text"));
this.vVisMenuItem.setText$S(this.xMassButton.isSelected$() ? $I$(3).getString$S("TToolBar.Menuitem.Veloc.Text.P") : $I$(3).getString$S("TToolBar.Menuitem.Veloc.Text.V"));
this.aVisMenuItem.setText$S(this.xMassButton.isSelected$() ? $I$(3).getString$S("TToolBar.Menuitem.Accel.Text.F") : $I$(3).getString$S("TToolBar.Menuitem.Accel.Text.A"));
this.trailsMenu.setText$S($I$(3).getString$S("TToolBar.Menu.Trails.Text"));
this.labelsMenuItem.setText$S($I$(3).getString$S("TToolBar.Menuitem.Labels.Text"));
this.stretchMenu.setText$S($I$(3).getString$S("TToolBar.Menu.Stretch.Text"));
this.xMassMenuItem.setText$S($I$(3).getString$S("TToolBar.Menuitem.Xmass.Text"));
if (this.stretchMenu.getItemCount$() != 4) {
this.stretchMenu.removeAll$();
this.stretchMenu.add$javax_swing_JMenuItem(this.vStretchMenu);
this.stretchMenu.add$javax_swing_JMenuItem(this.aStretchMenu);
this.stretchMenu.addSeparator$();
this.stretchMenu.add$javax_swing_JMenuItem(this.stretchOffItem);
}this.trailsMenu.setIcon$javax_swing_Icon(C$.trailIcons[this.trailLengthIndex]);
this.pathVisMenuItem.setSelected$Z(this.traceVisButton.isSelected$());
this.pVisMenuItem.setSelected$Z(this.pVisButton.isSelected$());
this.vVisMenuItem.setSelected$Z(this.vVisButton.isSelected$());
this.aVisMenuItem.setSelected$Z(this.aVisButton.isSelected$());
this.labelsMenuItem.setSelected$Z(this.labelsButton.isSelected$());
this.xMassMenuItem.setSelected$Z(this.xMassButton.isSelected$());
$I$(13,"setFonts$O$I",[popup, $I$(13).getLevel$()]);
return popup;
});

Clazz.newMeth(C$, 'paintChildren$java_awt_Graphics',  function (g) {
if (!$I$(17).isJS) C$.superclazz.prototype.paintChildren$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'refresh$S',  function (whereFrom) {
if (this.disposed || this.frame.hasPaintHold$() || !$I$(7).allowToolbarRefresh  ) return;
var doRefresh=false;
switch (whereFrom) {
case "TFrame.locale":
case "TFrame.locale2 ??":
doRefresh=true;
this.aGroup=this.vGroup=null;
this.enabledCount=-1;
break;
case "PrefsDialog":
case "TFrame.refresh":
case "refresh action":
case "trail button action":
case "vstretch action":
case "astretch action":
case "stretchoff action":
case "create gui":
case "property track":
case "property track clear":
doRefresh=true;
break;
}
this.refreshingTracks=this.refreshingTracks || doRefresh ;
if (this.refreshTimer != null ) {
this.refreshTimer.stop$();
}this.refreshTimer=$I$(17,"trigger$I$java_awt_event_ActionListener",[200, ((P$.TToolBar$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
if (!this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].disposed) {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refreshAsync$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refreshingTracks]);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refreshingTracks=false;
}this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refreshTimer=null;
});
})()
), Clazz.new_(P$.TToolBar$lambda28.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'setAllowRefresh$Z',  function (b) {
this.allowRebuild=b;
});

Clazz.newMeth(C$, 'refreshAsync$Z',  function (refreshTrackProperties) {
this.refreshing=true;
var enabledCount=this.panel$().getEnabledCount$();
var trackerPanelTainted=(enabledCount != this.enabledCount);
this.enabledCount=enabledCount;
if (trackerPanelTainted && this.allowRebuild ) {
p$1.rebuild$I.apply(this, [-1]);
}p$1.checkEnabled$Z.apply(this, [refreshTrackProperties]);
this.refreshing=false;
});

Clazz.newMeth(C$, 'add$I$java_awt_Component',  function (index, comp) {
if (this.overflowIndex < 0 || this.overflowIndex > index ) {
this.add$java_awt_Component(comp);
} else {
if (Clazz.instanceOf(comp, "javax.swing.JButton")) {
var button=comp;
var name=button.getName$();
if (name == null ) this.overflowPopup.addSeparator$();
 else {
var c=p$1.getOverflowComponent$javax_swing_JButton.apply(this, [button]);
$I$(13).setFont$java_awt_Component(c);
this.overflowPopup.add$java_awt_Component(c);
this.overflowButtons.add$O(button);
}}}if (index == this.overflowIndex) {
this.add$java_awt_Component(this.overflowButton);
this.add$java_awt_Component(this.toolbarFiller);
}}, p$1);

Clazz.newMeth(C$, 'add$java_awt_Component$javax_swing_JPopupMenu',  function (comp, popup) {
if (Clazz.instanceOf(comp, "javax.swing.JButton")) {
var button=comp;
var name=button.getName$();
if (name == null ) {
popup.addSeparator$();
} else {
var item=p$1.getOverflowComponent$javax_swing_JButton.apply(this, [button]);
$I$(13).setFont$javax_swing_AbstractButton(item);
popup.add$javax_swing_JMenuItem(item);
this.overflowButtons.add$O(button);
return item;
}}return null;
}, p$1);

Clazz.newMeth(C$, 'getLastVisibleComponentIndex',  function () {
var n=this.getComponentCount$();
var w=this.getWidth$();
for (var i=n - 1; i > -1; i--) {
var c=this.getComponent$I(i);
var end=c.getLocation$().x + c.getWidth$();
if (i < n - 1) end+=(this.overflowButton.getWidth$()/2|0);
if (w > end && Clazz.instanceOf(c, "javax.swing.JButton")  && (c).getName$() != null  ) {
return i;
}}
return n - 1;
}, p$1);

Clazz.newMeth(C$, 'rebuild$I',  function (overflow) {
if ($I$(17).isMobile$()) {
p$1.rebuildForMobile.apply(this, []);
return;
}this.removeAll$();
this.overflowPopup.removeAll$();
this.overflowIndex=overflow;
this.overflowButtons.clear$();
var index=0;
if (this.panel$().isEnabled$S("file.open")) {
p$1.add$I$java_awt_Component.apply(this, [index++, this.openButton]);
}if (this.panel$().isEnabled$S("file.save")) {
p$1.add$I$java_awt_Component.apply(this, [index++, this.saveButton]);
}if (this.getComponentCount$() > 0) p$1.add$I$java_awt_Component.apply(this, [index++, C$.getSeparator$()]);
var addSeparator=false;
if (this.panel$().isEnabled$S("button.clipSettings")) {
p$1.add$I$java_awt_Component.apply(this, [index++, this.clipSettingsButton]);
addSeparator=true;
}if (this.panel$().isEnabled$S("calibration.stick") || this.panel$().isEnabled$S("calibration.tape") || this.panel$().isEnabled$S("calibration.points") || this.panel$().isEnabled$S("calibration.offsetOrigin")  ) {
p$1.add$I$java_awt_Component.apply(this, [index++, this.calibrationButton]);
addSeparator=true;
}if (this.panel$().isEnabled$S("button.axes")) {
p$1.add$I$java_awt_Component.apply(this, [index++, this.axesButton]);
addSeparator=true;
}var newTracksEnabled=false;
var measuringToolsEnabled=false;
var eyeEnabled=false;
var fullconfig=$I$(7).getFullConfig$().toArray$OA(Clazz.array(String, [0]));
for (var i=0; i < fullconfig.length; i++) {
if (fullconfig[i].startsWith$S("new.") && !fullconfig[i].endsWith$S("clone") ) {
if (this.panel$().isEnabled$S(fullconfig[i])) {
if (fullconfig[i].endsWith$S("tapeMeasure") || fullconfig[i].endsWith$S("protractor") || fullconfig[i].endsWith$S("circleFitter")  ) measuringToolsEnabled=true;
 else newTracksEnabled=true;
}} else if (fullconfig[i].startsWith$S("button.") && !fullconfig[i].endsWith$S("clipSettings") && !fullconfig[i].endsWith$S("axes") && !fullconfig[i].endsWith$S("drawing")  ) {
if (this.panel$().isEnabled$S(fullconfig[i])) {
eyeEnabled=true;
}}}
if (measuringToolsEnabled) {
p$1.add$I$java_awt_Component.apply(this, [index++, this.measureButton]);
addSeparator=true;
}if (addSeparator) {
p$1.add$I$java_awt_Component.apply(this, [index++, C$.getSeparator$()]);
}if (this.panel$().isCreateTracksEnabled$()) {
}if (newTracksEnabled) {
$I$(13).setFonts$java_awt_Container(this.trackControlButton);
p$1.add$I$java_awt_Component.apply(this, [index++, this.trackControlButton]);
}if (this.panel$().isEnabled$S("track.autotrack")) p$1.add$I$java_awt_Component.apply(this, [index++, this.autotrackerButton]);
 else {
var autoTracker=this.panel$().getAutoTracker$Z(false);
if (autoTracker != null ) autoTracker.getWizard$().setVisible$Z(false);
}p$1.add$I$java_awt_Component.apply(this, [index++, C$.getSeparator$()]);
if (this.useEyeButton) {
if (eyeEnabled) p$1.add$I$java_awt_Component.apply(this, [index++, this.eyeButton]);
} else {
if (this.panel$().isEnabled$S("button.trails") || this.panel$().isEnabled$S("button.labels") ) {
if (this.panel$().isEnabled$S("button.trails")) this.add$java_awt_Component(this.trailButton);
if (this.panel$().isEnabled$S("button.labels")) this.add$java_awt_Component(this.labelsButton);
this.add$java_awt_Component(C$.getSeparator$());
}if (this.panel$().isEnabled$S("button.path") || this.panel$().isEnabled$S("button.x") || this.panel$().isEnabled$S("button.v") || this.panel$().isEnabled$S("button.a")  ) {
if (this.panel$().isEnabled$S("button.path")) this.add$java_awt_Component(this.traceVisButton);
if (this.panel$().isEnabled$S("button.x")) this.add$java_awt_Component(this.pVisButton);
if (this.panel$().isEnabled$S("button.v")) this.add$java_awt_Component(this.vVisButton);
if (this.panel$().isEnabled$S("button.a")) this.add$java_awt_Component(this.aVisButton);
this.add$java_awt_Component(C$.getSeparator$());
}if (this.panel$().isEnabled$S("button.stretch") || this.panel$().isEnabled$S("button.xMass") ) {
if (this.panel$().isEnabled$S("button.stretch")) this.add$java_awt_Component(this.stretchButton);
if (this.panel$().isEnabled$S("button.xMass")) this.add$java_awt_Component(this.xMassButton);
this.add$java_awt_Component(C$.getSeparator$());
}}$I$(13).setFonts$java_awt_Container(this.zoomButton);
p$1.add$I$java_awt_Component.apply(this, [index++, this.zoomButton]);
p$1.add$I$java_awt_Component.apply(this, [index++, C$.getSeparator$()]);
p$1.add$I$java_awt_Component.apply(this, [index++, this.toolbarFiller]);
if ($I$(7).newerVersion != null ) {
var s=$I$(3).getString$S("TTrackBar.Button.Version");
$I$(42).newVersionButton.setText$S(s + " " + $I$(7).newerVersion );
this.add$java_awt_Component($I$(42).newVersionButton);
}if ($I$(17).isJS) p$1.add$I$java_awt_Component.apply(this, [index++, this.captureButton]);
if (this.panel$().isEnabled$S("button.drawing")) p$1.add$I$java_awt_Component.apply(this, [index++, this.drawingButton]);
if (this.desktopButton.isEnabled$()) {
p$1.add$I$java_awt_Component.apply(this, [index++, this.desktopButton]);
}p$1.add$I$java_awt_Component.apply(this, [index++, this.notesButton]);
if (!$I$(17).isJS) {
p$1.add$I$java_awt_Component.apply(this, [index++, C$.getSeparator$()]);
p$1.add$I$java_awt_Component.apply(this, [index++, this.memoryButton]);
}p$1.add$I$java_awt_Component.apply(this, [index++, this.refreshButton]);
if ($I$(16).isLayoutAdaptive) p$1.add$I$java_awt_Component.apply(this, [index++, this.maximizeButton]);
var i=p$1.getLastVisibleComponentIndex.apply(this, []);
if (overflow == -1 && i < this.getComponentCount$() - 1 ) p$1.rebuild$I.apply(this, [i]);
 else {
$I$(13).setFont$javax_swing_AbstractButton(this.overflowButton);
$I$(16).repaintT$java_awt_Component(this);
}}, p$1);

Clazz.newMeth(C$, 'rebuildForMobile',  function () {
this.fileButton.setIcon$javax_swing_Icon(this.noButtonIcons ? null : C$.folderIcon);
this.videoButton.setIcon$javax_swing_Icon(this.noButtonIcons ? null : C$.clipOffIcon);
this.coordsButton.setIcon$javax_swing_Icon(this.noButtonIcons ? null : C$.coordsIcon);
this.trackButton.setIcon$javax_swing_Icon(this.noButtonIcons ? null : C$.pointmassOffIcon);
this.viewButton.setIcon$javax_swing_Icon(this.noButtonIcons ? null : $I$(36).TABLEVIEW_ICON);
this.overflowButton.setIcon$javax_swing_Icon(this.noButtonIcons ? null : C$.overflowIcon);
this.removeAll$();
this.add$java_awt_Component(this.fileButton);
this.add$java_awt_Component(this.videoButton);
this.add$java_awt_Component(this.coordsButton);
this.add$java_awt_Component(this.trackButton);
this.add$java_awt_Component(this.viewButton);
this.add$java_awt_Component(this.overflowButton);
p$1.rebuildMobileFilePopup.apply(this, []);
p$1.rebuildMobileVideoPopup.apply(this, []);
p$1.rebuildMobileCoordsPopup.apply(this, []);
p$1.rebuildMobileTrackPopup.apply(this, []);
p$1.rebuildMobileViewPopup.apply(this, []);
p$1.rebuildMobileOverflowPopup.apply(this, []);
this.add$java_awt_Component(this.toolbarFiller);
if ($I$(16).isLayoutAdaptive) {
this.add$java_awt_Component(this.maximizeButton);
}var buttons=Clazz.array($I$(22), -1, [this.fileButton, this.videoButton, this.coordsButton, this.trackButton, this.viewButton, this.overflowButton]);
$I$(13).setFonts$OA(buttons);
$I$(16).repaintT$java_awt_Component(this);
}, p$1);

Clazz.newMeth(C$, 'rebuildMobileFilePopup',  function () {
this.filePopup.removeAll$();
if (this.frame.currentMenuBar == null ) return;
this.frame.currentMenuBar.setMenuTainted$I$Z(32, true);
this.frame.currentMenuBar.refreshViewMenu$Z(true);
this.filePopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("file_newTabItem"));
this.filePopup.addSeparator$();
if (this.panel$().isEnabled$S("file.open")) {
p$1.add$java_awt_Component$javax_swing_JPopupMenu.apply(this, [this.openButton, this.filePopup]);
this.refreshOpenPopup$javax_swing_JPopupMenu(this.openMenu.getPopupMenu$());
this.filePopup.add$java_awt_Component(this.openMenu.getPopupMenu$().getComponent$I(0));
this.filePopup.add$java_awt_Component(this.openMenu.getPopupMenu$().getComponent$I(0));
this.filePopup.remove$java_awt_Component(this.openMenu);
if (!$I$(17).isJS) {
var file_openRecentMenu=this.frame.currentMenuBar.getMenuItem$S("file_openRecentMenu");
this.frame.refreshOpenRecentMenu$javax_swing_JMenu(file_openRecentMenu);
this.filePopup.add$javax_swing_JMenuItem(file_openRecentMenu);
}}this.filePopup.addSeparator$();
if (this.panel$().isEnabled$S("file.save")) {
p$1.add$java_awt_Component$javax_swing_JPopupMenu.apply(this, [this.saveButton, this.filePopup]);
this.refreshSavePopup$javax_swing_JPopupMenu(this.saveMenu.getPopupMenu$());
this.filePopup.add$java_awt_Component(this.saveMenu.getPopupMenu$().getComponent$I(0));
this.filePopup.add$java_awt_Component(this.saveMenu.getPopupMenu$().getComponent$I(0));
this.filePopup.remove$java_awt_Component(this.saveMenu);
this.filePopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("file_saveTabAsItem"));
}this.filePopup.addSeparator$();
this.filePopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("file_importMenu"));
this.filePopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("file_exportMenu"));
this.filePopup.addSeparator$();
this.filePopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("file_printFrameItem"));
this.filePopup.addSeparator$();
this.filePopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("file_propertiesItem"));
}, p$1);

Clazz.newMeth(C$, 'rebuildMobileVideoPopup',  function () {
this.videoPopup.removeAll$();
if (this.frame.currentMenuBar == null ) {
return;
}var importEnabled=this.panel$().isEnabled$S("video.import") || this.panel$().isEnabled$S("video.open") ;
if (importEnabled) {
var item=this.frame.currentMenuBar.getMenuItem$S("video_openVideoItem");
item.setIcon$javax_swing_Icon($I$(7).getResourceIcon$S$Z("open.gif", true));
this.videoPopup.add$javax_swing_JMenuItem(item);
if ($I$(17).isJS) this.videoPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("video_captureItem"));
}if (this.panel$().getVideo$() != null ) this.videoPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("video_closeVideoItem"));
this.videoPopup.addSeparator$();
if (this.panel$().isEnabled$S("button.clipSettings")) {
this.videoPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("video_clipSettingsItem"));
if (this.frame.currentMenuBar != null ) {
this.videoPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("video_goToItem"));
}this.videoPopup.addSeparator$();
}if (this.panel$().getVideo$() != null ) this.videoPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("video_videoVisibleItem"));
var item=p$1.add$java_awt_Component$javax_swing_JPopupMenu.apply(this, [this.zoomButton, this.videoPopup]);
var text=item.getText$();
var zoom=this.panel$().getMagnification$() * 100;
item.setText$S(text + " (" + C$.zoomFormat.format$D(zoom) + "%)" );
if (this.panel$().getVideo$() != null ) {
if (this.panel$().isEnabled$S("video.filters")) {
this.videoPopup.addSeparator$();
this.frame.currentMenuBar.refreshVideoMenu$Z(true);
this.videoPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("video_filtersMenu"));
}this.videoPopup.addSeparator$();
this.videoPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("video_aboutVideoItem"));
this.videoPopup.addSeparator$();
this.videoPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("file_saveVideoAsItem"));
}}, p$1);

Clazz.newMeth(C$, 'rebuildMobileCoordsPopup',  function () {
this.coordsPopup.removeAll$();
if (this.frame.currentMenuBar == null ) return;
if (this.panel$().isEnabled$S("button.axes")) {
p$1.add$java_awt_Component$javax_swing_JPopupMenu.apply(this, [this.axesButton, this.coordsPopup]);
this.coordsPopup.addSeparator$();
}if (this.panel$().isEnabled$S("calibration.stick") || this.panel$().isEnabled$S("calibration.tape") || this.panel$().isEnabled$S("calibration.points") || this.panel$().isEnabled$S("calibration.offsetOrigin")  ) {
p$1.add$java_awt_Component$javax_swing_JPopupMenu.apply(this, [this.calibrationButton, this.coordsPopup]);
}this.coordsPopup.addSeparator$();
this.coordsPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("coords_fixedOriginItem"));
this.coordsPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("coords_fixedAngleItem"));
this.coordsPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("coords_fixedScaleItem"));
this.coordsPopup.addSeparator$();
this.coordsPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("coords_refFrameMenu"));
this.coordsPopup.addSeparator$();
this.coordsPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("coords_showUnitDialogItem"));
this.coordsPopup.addSeparator$();
this.coordsPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("coords_lockedCoordsItem"));
}, p$1);

Clazz.newMeth(C$, 'rebuildMobileTrackPopup',  function () {
this.trackPopup.removeAll$();
if (this.frame.currentMenuBar == null ) return;
var measuringToolsEnabled=false;
var eyeEnabled=false;
var fullconfig=$I$(7).getFullConfig$().toArray$OA(Clazz.array(String, [0]));
for (var i=0; i < fullconfig.length; i++) {
if (fullconfig[i].startsWith$S("new.") && !fullconfig[i].endsWith$S("clone") ) {
if (this.panel$().isEnabled$S(fullconfig[i])) {
if (fullconfig[i].endsWith$S("tapeMeasure") || fullconfig[i].endsWith$S("protractor") || fullconfig[i].endsWith$S("circleFitter")  ) measuringToolsEnabled=true;
}} else if (fullconfig[i].startsWith$S("button.") && !fullconfig[i].endsWith$S("clipSettings") && !fullconfig[i].endsWith$S("axes") && !fullconfig[i].endsWith$S("drawing")  ) {
if (this.panel$().isEnabled$S(fullconfig[i])) {
eyeEnabled=true;
}}}
if (this.panel$().isCreateTracksEnabled$()) {
var newTrackMenu=Clazz.new_([$I$(3).getString$S("TMenuBar.MenuItem.NewTrack")],$I$(2,1).c$$S);
$I$(12,"refreshPopup$org_opensourcephysics_cabrillo_tracker_TrackerPanel$S$javax_swing_JPopupMenu",[this.panel$(), "TrackControl.tracks", newTrackMenu.getPopupMenu$()]);
$I$(13).setFont$javax_swing_AbstractButton(newTrackMenu);
this.trackPopup.add$javax_swing_JMenuItem(newTrackMenu);
this.trackPopup.addSeparator$();
p$1.add$java_awt_Component$javax_swing_JPopupMenu.apply(this, [this.trackControlButton, this.trackPopup]);
this.trackControlCheckbox.setSelected$Z(this.trackControlButton.isSelected$());
}if (this.panel$().isEnabled$S("track.autotrack")) {
p$1.add$java_awt_Component$javax_swing_JPopupMenu.apply(this, [this.autotrackerButton, this.trackPopup]);
this.autotrackerCheckbox.setSelected$Z(this.autotrackerButton.isSelected$());
} else {
var autoTracker=this.panel$().getAutoTracker$Z(false);
if (autoTracker != null ) autoTracker.getWizard$().setVisible$Z(false);
}this.trackPopup.addSeparator$();
if (measuringToolsEnabled) {
p$1.add$java_awt_Component$javax_swing_JPopupMenu.apply(this, [this.measureButton, this.trackPopup]);
this.refreshMeasurePopup$javax_swing_JPopupMenu(this.measureMenu.getPopupMenu$());
}if (this.useEyeButton) {
if (eyeEnabled) {
p$1.add$java_awt_Component$javax_swing_JPopupMenu.apply(this, [this.eyeButton, this.trackPopup]);
this.refreshEyePopup$javax_swing_JPopupMenu(this.eyeMenu.getPopupMenu$());
}}var selectMenu=Clazz.new_([$I$(3).getString$S("TToolBar.Menu.Select.Text")],$I$(2,1).c$$S);
var trackbar=this.frame.getTrackBar$Integer$Z(this.panel$().getID$(), true);
trackbar.getSelectTrackPopup$javax_swing_JPopupMenu(selectMenu.getPopupMenu$());
this.trackPopup.addSeparator$();
this.trackPopup.add$javax_swing_JMenuItem(selectMenu);
}, p$1);

Clazz.newMeth(C$, 'rebuildMobileViewPopup',  function () {
this.viewPopup.removeAll$();
if (this.frame.currentMenuBar == null ) return;
this.frame.currentMenuBar.setMenuTainted$I$Z(32, true);
this.frame.currentMenuBar.refreshViewMenu$Z(true);
this.viewPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("view_singleViewMenu"));
this.viewPopup.addSeparator$();
if (this.panel$().getMaximizedView$() != -1) {
this.viewPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("view_restoreItem"));
} else {
this.viewPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("view_rightPaneItem"));
this.viewPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("view_bottomPaneItem"));
}if (this.panel$().isEnabled$S("data.builder") || this.panel$().isEnabled$S("data.tool") ) {
this.viewPopup.addSeparator$();
if (this.panel$().isEnabled$S("data.builder")) this.viewPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("view_dataBuilderItem"));
if (this.panel$().isEnabled$S("data.tool")) this.viewPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("view_dataToolItem"));
}this.viewPopup.addSeparator$();
this.viewPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("view_mobileLayoutItem"));
this.viewPopup.addSeparator$();
this.viewPopup.add$javax_swing_JMenuItem(this.frame.currentMenuBar.getMenuItem$S("view_TabsMenu"));
}, p$1);

Clazz.newMeth(C$, 'populateMobileMenu$javax_swing_JMenu$javax_swing_JMenu',  function (source, target) {
target.removeAll$();
target.setText$S(source.getText$());
target.setEnabled$Z(source.isEnabled$());
for (var item, $item = 0, $$item = source.getMenuComponents$(); $item<$$item.length&&((item=($$item[$item])),1);$item++) {
target.add$java_awt_Component(item);
}
}, 1);

Clazz.newMeth(C$, 'rebuildMobileOverflowPopup',  function () {
if (this.frame.currentMenuBar != null ) {
this.overflowPopup.removeAll$();
this.frame.currentMenuBar.setMenuTainted$I$Z(2, true);
this.frame.currentMenuBar.refreshEditMenu$Z(true);
this.frame.currentMenuBar.setMenuTainted$I$Z(64, true);
this.frame.currentMenuBar.refreshHelpMenu$Z(true);
C$.populateMobileMenu$javax_swing_JMenu$javax_swing_JMenu(this.frame.currentMenuBar.getMenuItem$S("editMenu"), this.mobileEditMenu);
this.overflowPopup.add$javax_swing_JMenuItem(this.mobileEditMenu);
this.overflowPopup.addSeparator$();
C$.populateMobileMenu$javax_swing_JMenu$javax_swing_JMenu(this.frame.currentMenuBar.getMenuItem$S("helpMenu"), this.mobileHelpMenu);
this.overflowPopup.add$javax_swing_JMenuItem(this.mobileHelpMenu);
this.overflowPopup.addSeparator$();
if (this.panel$().isEnabled$S("button.drawing")) {
this.drawingButton.drawingVisibleCheckbox.setText$S($I$(3).getString$S("TTrack.MenuItem.Visible"));
p$1.add$java_awt_Component$javax_swing_JPopupMenu.apply(this, [this.drawingButton, this.overflowPopup]);
var drawer=$I$(15,"getDrawer$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.panel$()]);
this.drawingButton.drawingVisibleCheckbox.setSelected$Z(drawer.areDrawingsVisible$());
this.drawingButton.drawingVisibleCheckbox.setEnabled$Z($I$(15,"hasDrawings$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.panel$()]) && !$I$(15,"isDrawing$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.panel$()]) );
this.drawingControlCheckbox.setText$S($I$(3).getString$S("TToolBar.Checkbox.DrawingControl"));
this.drawingControlCheckbox.setSelected$Z(this.drawingButton.isSelected$());
this.drawingMenu.removeAll$();
if ($I$(15,"hasDrawings$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.panel$()])) this.drawingMenu.add$javax_swing_JMenuItem(this.drawingButton.drawingVisibleCheckbox);
this.drawingMenu.add$javax_swing_JMenuItem(this.drawingControlCheckbox);
}p$1.add$java_awt_Component$javax_swing_JPopupMenu.apply(this, [this.notesButton, this.overflowPopup]);
this.notesCheckbox.setSelected$Z(this.notesButton.isSelected$());
this.overflowPopup.addSeparator$();
p$1.add$java_awt_Component$javax_swing_JPopupMenu.apply(this, [this.refreshButton, this.overflowPopup]);
this.refreshRefreshPopup$javax_swing_JPopupMenu(this.refreshMenu.getPopupMenu$());
var comp=this.refreshMenu.getMenuComponent$I(0);
(comp).setText$S($I$(3).getString$S("TToolBar.MenuItem.RefreshNow"));
$I$(13,"setFonts$O$I",[this.overflowPopup, $I$(13).getLevel$()]);
}}, p$1);

Clazz.newMeth(C$, 'checkEnabled$Z',  function (refreshTracks) {
this.refreshZoomButton$();
this.calibrationButton.refresh$();
this.measureButton.refresh$();
this.drawingButton.refresh$();
this.stretchButton.setSelected$Z(this.vStretch > 1 || this.aStretch > 1 );
this.stretchOffItem.setText$S($I$(3).getString$S("TToolBar.MenuItem.StretchOff"));
this.stretchOffItem.setEnabled$Z(this.vStretch > 1 || this.aStretch > 1 );
p$1.setMenuText.apply(this, []);
if (this.panel$().getPlayer$() != null ) {
var clip=this.panel$().getPlayer$().getVideoClip$();
var inspector=clip.getClipInspector$();
this.clipSettingsButton.setSelected$Z(inspector != null  && inspector.isVisible$() );
}var axes=this.panel$().getAxes$();
if (axes != null ) {
this.axesButton.setSelected$Z(axes.isVisible$());
axes.updateListenerVisible$java_beans_PropertyChangeListener(this);
}this.trackControlButton.setEnabled$Z(true);
if (refreshTracks) {
p$1.refreshTracks.apply(this, []);
}var pt=this.panel$().getSelectedPoint$();
if (pt != null ) pt.showCoordinates$org_opensourcephysics_media_core_VideoPanel(this.panel$());
if (C$.trailIcons[this.trailLengthIndex] !== this.trailButton.getIcon$() ) {
this.trailButton.setIcon$javax_swing_Icon(C$.trailIcons[this.trailLengthIndex]);
$I$(13).setFont$javax_swing_AbstractButton(this.trailButton);
}this.pageViewTabs.clear$();
if (this.frame != null ) {
var views=this.frame.getTViews$Integer$I$java_util_List(this.panelID, 3, null);
for (var i=0; i < views.size$(); i++) {
var page=views.get$I(i);
for (var tab, $tab = page.tabs.iterator$(); $tab.hasNext$()&&((tab=($tab.next$())),1);) {
if (tab.data.url != null ) {
this.pageViewTabs.add$O(tab.data);
}}
}
p$1.sortPageViewTabs.apply(this, []);
}var hasPageURLs=!this.pageViewTabs.isEmpty$();
this.desktopButton.setEnabled$Z(hasPageURLs || !this.panel$().supplementalFilePaths.isEmpty$() );
if (this.desktopButton.isEnabled$() && this.desktopButton.getParent$() == null  ) p$1.rebuild$I.apply(this, [-1]);
 else if (!this.desktopButton.isEnabled$()) this.remove$java_awt_Component(this.desktopButton);
}, p$1);

Clazz.newMeth(C$, 'refreshTracks',  function () {
var panel=this.panel$();
var tracks=panel.getTracks$();
var totalMass=0;
var massCount=0;
for (var track, $track = tracks.iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
if (track.ttype == 5 && !(Clazz.instanceOf(track, "org.opensourcephysics.cabrillo.tracker.CenterOfMass"))  && !(Clazz.instanceOf(track, "org.opensourcephysics.cabrillo.tracker.DynamicSystem")) ) {
var p=track;
totalMass+=p.getMass$();
++massCount;
}}
var doRepaint=false;
for (var track, $track = tracks.iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
track.removePropertyChangeListener$S$java_beans_PropertyChangeListener("locked", this);
track.addPropertyChangeListener$S$java_beans_PropertyChangeListener("locked", this);
track.setTrailLength$I(C$.trailLengths[this.trailLengthIndex]);
track.setTrailVisible$Z(this.trailButton.isSelected$());
if (track.ttype == 5) {
var p=track;
p.setTraceVisible$Z(this.traceVisButton.isSelected$());
p.setPositionVisible$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z(panel, this.pVisButton.isSelected$());
p.setVVisible$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z(panel, this.vVisButton.isSelected$());
p.setAVisible$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z(panel, this.aVisButton.isSelected$());
p.setLabelsVisible$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z(panel, this.labelsButton.isSelected$());
var footprints=p.getVelocityFootprints$();
for (var i=0; i < footprints.length; i++) {
if (Clazz.instanceOf(footprints[i], "org.opensourcephysics.cabrillo.tracker.ArrowFootprint")) {
var arrow=footprints[i];
if (this.xMassButton.isSelected$()) {
arrow.setStretch$D(this.vStretch * massCount * p.getMass$()  / totalMass);
arrow.setSolidHead$Z(false);
} else {
arrow.setStretch$D(this.vStretch);
arrow.setSolidHead$Z(false);
}}}
footprints=p.getAccelerationFootprints$();
for (var i=0; i < footprints.length; i++) {
if (Clazz.instanceOf(footprints[i], "org.opensourcephysics.cabrillo.tracker.ArrowFootprint")) {
var arrow=footprints[i];
if (this.xMassButton.isSelected$()) {
arrow.setStretch$D(this.aStretch * massCount * p.getMass$()  / totalMass);
arrow.setSolidHead$Z(true);
} else {
arrow.setStretch$D(this.aStretch);
arrow.setSolidHead$Z(true);
}}}
doRepaint=true;
track.erase$();
} else if (track.ttype == 9) {
var v=track;
v.setLabelsVisible$Z(this.labelsButton.isSelected$());
doRepaint=true;
}}
if (doRepaint) {
for (var i=0; i < panel.andWorld.size$(); i++) {
this.frame.getTrackerPanelForID$Integer(panel.andWorld.get$I(i)).repaint$();
}
}}, p$1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
if (this.panel$() == null  || !this.panel$().isPaintable$()  || this.getComponentCount$() == 0 ) return;
C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'setMenuText',  function () {
this.trackControlButton.setText$S($I$(3).getString$S("Undo.Description.Track"));
this.vStretchMenu.setText$S($I$(3).getString$S("PointMass.MenuItem.Velocity"));
this.aStretchMenu.setText$S($I$(3).getString$S("PointMass.MenuItem.Acceleration"));
this.openButton.setToolTipText$S($I$(3).getString$S("TToolBar.Button.Open.Tooltip"));
this.clipSettingsButton.setToolTipText$S($I$(43).getString$S("VideoPlayer.Button.ClipSettings.ToolTip"));
this.axesButton.setToolTipText$S($I$(3).getString$S("TToolbar.Button.AxesVisible.Tooltip"));
this.zoomButton.setToolTipText$S($I$(3).getString$S("TToolBar.Button.Zoom.Tooltip"));
this.captureButton.setToolTipText$S($I$(3).getString$S("TToolBar.Button.Capture.Tooltip"));
this.notesButton.setToolTipText$S($I$(3).getString$S("TActions.Action.Description"));
this.refreshButton.setToolTipText$S($I$(3).getString$S("TToolbar.Button.Refresh.Tooltip"));
this.desktopButton.setToolTipText$S($I$(3).getString$S("TToolbar.Button.Desktop.Tooltip"));
this.pVisButton.setToolTipText$S($I$(3).getString$S("TrackControl.Button.Positions.ToolTip"));
this.vVisButton.setToolTipText$S($I$(3).getString$S("TrackControl.Button.Velocities.ToolTip"));
this.aVisButton.setToolTipText$S($I$(3).getString$S("TrackControl.Button.Accelerations.ToolTip"));
this.xMassButton.setToolTipText$S($I$(3).getString$S("TrackControl.Button.Xmass.ToolTip"));
this.trailButton.setToolTipText$S($I$(3).getString$S("TrackControl.Button.Trails.ToolTip"));
this.labelsButton.setToolTipText$S($I$(3).getString$S("TrackControl.Button.Labels.ToolTip"));
this.stretchButton.setToolTipText$S($I$(3).getString$S("TrackControl.Button.StretchVectors.ToolTip"));
this.traceVisButton.setToolTipText$S($I$(3).getString$S("TrackControl.Button.Trace.ToolTip"));
this.newTrackButton.setText$S($I$(3).getString$S("TrackControl.Button.NewTrack"));
this.newTrackButton.setToolTipText$S($I$(3).getString$S("TrackControl.Button.NewTrack.ToolTip"));
this.eyeButton.setToolTipText$S($I$(3).getString$S("TToolbar.Button.Eye.Tooltip"));
this.trackControlButton.setToolTipText$S($I$(3).getString$S("TToolBar.Button.TrackControl.Tooltip"));
this.autotrackerButton.setToolTipText$S($I$(3).getString$S("TToolBar.Button.AutoTracker.Tooltip"));
this.fontSizeButton.setToolTipText$S($I$(3).getString$S("TToolBar.Button.FontSize.ToolTip"));
}, p$1);

Clazz.newMeth(C$, 'dispose$',  function () {
this.disposed=true;
if (this.refreshTimer != null ) this.refreshTimer.stop$();
this.refreshTimer=null;
this.removeAll$();
this.panel$().removeListeners$SA$java_beans_PropertyChangeListener(C$.panelProps, this);
for (var track, $track = $I$(44).getValues$().iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
track.removePropertyChangeListener$S$java_beans_PropertyChangeListener("locked", this);
track.removePropertyChangeListener$S$java_beans_PropertyChangeListener("visible", this);
}
this.pageViewTabs.clear$();
this.panelID=null;
this.frame=null;
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(45).finalized$O(this);
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (enable) {
C$.superclazz.prototype.setEnabled$Z.apply(this, [enable]);
var comps=this.getComponents$();
for (var i=0; i < comps.length; i++) {
comps[i].setEnabled$Z(enable);
}
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "video":
case "locked":
case "selectedpoint":
this.refresh$S("property video");
break;
case "selectedtrack":
this.panel$().refreshNotesDialog$();
this.refresh$S("property selected track");
break;
case "magnification":
break;
case "visible":
if (e.getSource$() === this.panel$().getAxes$() ) {
this.axesButton.setSelected$Z(this.panel$().getAxes$().isVisible$());
} else {
this.calibrationButton.refresh$();
this.measureButton.refresh$();
}break;
case "track":
if (e.getOldValue$() != null ) {
var track=e.getOldValue$();
this.panel$().calibrationTools.remove$O(track);
this.panel$().visibleCalibrationTools.remove$O(track);
this.panel$().measuringTools.remove$O(track);
this.panel$().visibleMeasuringTools.remove$O(track);
track.removePropertyChangeListener$S$java_beans_PropertyChangeListener("visible", this);
track.removePropertyChangeListener$S$java_beans_PropertyChangeListener("locked", this);
if (this.panel$().visibleCalibrationTools.isEmpty$()) {
this.calibrationButton.setSelected$Z(false);
}}this.refresh$S("property track");
break;
case "clear":
for (var track, $track = $I$(44).getValues$().iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
this.panel$().calibrationTools.remove$O(track);
this.panel$().visibleCalibrationTools.remove$O(track);
this.panel$().measuringTools.remove$O(track);
this.panel$().visibleMeasuringTools.remove$O(track);
track.removePropertyChangeListener$S$java_beans_PropertyChangeListener("visible", this);
track.removePropertyChangeListener$S$java_beans_PropertyChangeListener("locked", this);
}
this.calibrationButton.setSelected$Z(false);
this.refresh$S("property track clear");
break;
}
});

Clazz.newMeth(C$, 'getSeparator$',  function () {
var b=Clazz.new_($I$(46,1).c$$javax_swing_Icon,[C$.separatorIcon]);
b.setBorder$javax_swing_border_Border($I$(47).createEmptyBorder$I$I$I$I(0, 4, 0, 4));
b.setOpaque$Z(false);
b.setContentAreaFilled$Z(false);
return b;
}, 1);

Clazz.newMeth(C$, 'sortPageViewTabs',  function () {
$I$(48,"sort$java_util_List$java_util_Comparator",[this.pageViewTabs, ((P$.TToolBar$30||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$org_opensourcephysics_cabrillo_tracker_PageTView_TabData$org_opensourcephysics_cabrillo_tracker_PageTView_TabData','compare$O$O'],  function (one, two) {
return (one.title.toLowerCase$().compareTo$S(two.title.toLowerCase$()));
});
})()
), Clazz.new_(P$.TToolBar$30.$init$,[this, null]))]);
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(49,1));
}, 1);

Clazz.newMeth(C$, 'setTrailLength$I',  function (length) {
if (length == -2147483648) return;
if (length <= 0 || length > C$.trailLengths[C$.trailLengths.length - 2] ) {
this.trailLengthIndex=C$.trailLengths.length - 1;
} else for (var i=0; i < C$.trailLengths.length - 1; i++) {
if (C$.trailLengths[i] >= length) {
this.trailLengthIndex=i;
break;
}}
}, p$1);

Clazz.newMeth(C$, 'panel$',  function () {
return (this.frame == null  ? null : this.frame.getTrackerPanelForID$Integer(this.panelID));
});

Clazz.newMeth(C$, 'toString',  function () {
return "[TToolBar " + this.panelID + "]" ;
});

C$.$static$=function(){C$.$static$=0;
C$.trailLengths=Clazz.array(Integer.TYPE, -1, [1, 4, 15, 0]);
C$.trailLengthNames=Clazz.array(String, -1, ["none", "short", "long", "full"]);
C$.trailIcons=Clazz.array($I$(18), [4]);
C$.stretchValues=Clazz.array(Integer.TYPE, -1, [1, 2, 3, 4, 6, 8, 12, 16, 24, 32]);
C$.zoomFormat=$I$(19).getNumberInstance$();
{
C$.coordsIcon=$I$(7).getResourceIcon$S$Z("coords.gif", true);
C$.folderIcon=$I$(7).getResourceIcon$S$Z("whitefolder.gif", true);
C$.newTrackIcon=$I$(7).getResourceIcon$S$Z("poof.gif", true);
C$.pointmassOffIcon=$I$(7).getResourceIcon$S$Z("track_off.gif", true);
C$.pointmassOnIcon=$I$(7).getResourceIcon$S$Z("track_on.gif", true);
C$.trackControlIcon=$I$(7).getResourceIcon$S$Z("track_control.gif", true);
C$.trackControlOnIcon=$I$(7).getResourceIcon$S$Z("track_control_on.gif", true);
C$.trackControlDisabledIcon=$I$(7).getResourceIcon$S$Z("track_control_disabled.gif", true);
C$.zoomIcon=$I$(7).getResourceIcon$S$Z("zoom.gif", true);
C$.clipOffIcon=$I$(7).getResourceIcon$S$Z("clip_off.gif", true);
C$.clipOnIcon=$I$(7).getResourceIcon$S$Z("clip_on.gif", true);
C$.axesOffIcon=$I$(7).getResourceIcon$S$Z("axes.gif", true);
C$.axesOnIcon=$I$(7).getResourceIcon$S$Z("axes_on.gif", true);
C$.calibrationOnlyIcon=$I$(7).getResourceIcon$S$Z("calibration_tool_alone.gif", true);
C$.calibrationToolsOffIcon=$I$(7).getResourceIcon$S$Z("calibration_tool.gif", true);
C$.calibrationToolsOnIcon=$I$(7).getResourceIcon$S$Z("calibration_tool_on.gif", true);
C$.calibrationToolsOffRolloverIcon=$I$(7).getResourceIcon$S$Z("calibration_tool_rollover.gif", true);
C$.calibrationToolsOnRolloverIcon=$I$(7).getResourceIcon$S$Z("calibration_tool_on_rollover.gif", true);
C$.eyeIcon=$I$(7).getResourceIcon$S$Z("eye.gif", true);
C$.rulerOnlyIcon=$I$(7).getResourceIcon$S$Z("ruler_alone.gif", true);
C$.rulerIcon=$I$(7).getResourceIcon$S$Z("ruler.gif", true);
C$.rulerOnIcon=$I$(7).getResourceIcon$S$Z("ruler_on.gif", true);
C$.rulerRolloverIcon=$I$(7).getResourceIcon$S$Z("ruler_rollover.gif", true);
C$.rulerOnRolloverIcon=$I$(7).getResourceIcon$S$Z("ruler_on_rollover.gif", true);
C$.pointsOffIcon=$I$(7).getResourceIcon$S$Z("positions.gif", true);
C$.pointsOnIcon=$I$(7).getResourceIcon$S$Z("positions_on.gif", true);
C$.velocOffIcon=$I$(7).getResourceIcon$S$Z("velocities.gif", true);
C$.velocOnIcon=$I$(7).getResourceIcon$S$Z("velocities_on.gif", true);
C$.accelOffIcon=$I$(7).getResourceIcon$S$Z("accel.gif", true);
C$.accelOnIcon=$I$(7).getResourceIcon$S$Z("accel_on.gif", true);
C$.traceOffIcon=$I$(7).getResourceIcon$S$Z("trace.gif", true);
C$.traceOnIcon=$I$(7).getResourceIcon$S$Z("trace_on.gif", true);
C$.labelsOffIcon=$I$(7).getResourceIcon$S$Z("labels.gif", true);
C$.labelsOnIcon=$I$(7).getResourceIcon$S$Z("labels_on.gif", true);
C$.stretchOffIcon=$I$(7).getResourceIcon$S$Z("stretch.gif", true);
C$.stretchOnIcon=$I$(7).getResourceIcon$S$Z("stretch_on.gif", true);
C$.xmassOffIcon=$I$(7).getResourceIcon$S$Z("x_mass.gif", true);
C$.xmassOnIcon=$I$(7).getResourceIcon$S$Z("x_mass_on.gif", true);
C$.fontSizeIcon=$I$(7).getResourceIcon$S$Z("font_size.gif", true);
C$.autotrackerOffIcon=$I$(7).getResourceIcon$S$Z("autotrack_off.gif", true);
C$.autotrackerOnIcon=$I$(7).getResourceIcon$S$Z("autotrack_on.gif", true);
C$.infoIcon=$I$(7).getResourceIcon$S$Z("info.gif", true);
C$.infoOnIcon=$I$(7).getResourceIcon$S$Z("info_on.gif", true);
C$.refreshIcon=$I$(7).getResourceIcon$S$Z("refresh.gif", true);
C$.memoryIcon=$I$(7).getResourceIcon$S$Z("memory.gif", true);
C$.redMemoryIcon=$I$(7).getResourceIcon$S$Z("memory_red.gif", true);
C$.htmlIcon=$I$(7).getResourceIcon$S$Z("html.gif", true);
C$.htmlDisabledIcon=$I$(7).getResourceIcon$S$Z("html_disabled.gif", true);
C$.trailIcons[0]=$I$(7).getResourceIcon$S$Z("trails_off.gif", true);
C$.trailIcons[1]=$I$(7).getResourceIcon$S$Z("trails_1.gif", true);
C$.trailIcons[2]=$I$(7).getResourceIcon$S$Z("trails_2.gif", true);
C$.trailIcons[3]=$I$(7).getResourceIcon$S$Z("trails_on.gif", true);
C$.separatorIcon=$I$(7).getResourceIcon$S$Z("separator.gif", true);
C$.pencilIcon=$I$(7).getResourceIcon$S$Z("pencil_only.gif", true);
C$.pencilOffIcon=$I$(7).getResourceIcon$S$Z("pencil_off.gif", true);
C$.pencilOnIcon=$I$(7).getResourceIcon$S$Z("pencil_on.gif", true);
C$.pencilOffRolloverIcon=$I$(7).getResourceIcon$S$Z("pencil_off_rollover.gif", true);
C$.pencilOnRolloverIcon=$I$(7).getResourceIcon$S$Z("pencil_on_rollover.gif", true);
C$.zoomFormat.setMaximumFractionDigits$I(0);
C$.libraryIcon=$I$(7).getResourceIcon$S$Z("library.gif", true);
C$.openBrowserIcon=$I$(7).getResourceIcon$S$Z("open_catalog.gif", true);
C$.overflowIcon=$I$(7).getResourceIcon$S$Z("overflow.gif", true);
C$.cameraIcon=$I$(7).getResourceIcon$S$Z("camera.gif", true);
};
C$.panelProps=Clazz.array(String, -1, ["selectedpoint", "selectedtrack", "track", "clear", "video", "magnification"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.TToolBar, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var toolbar=obj;
control.setValue$S$Z("trace", toolbar.traceVisButton.isSelected$());
control.setValue$S$Z("position", toolbar.pVisButton.isSelected$());
control.setValue$S$Z("velocity", toolbar.vVisButton.isSelected$());
control.setValue$S$Z("acceleration", toolbar.aVisButton.isSelected$());
control.setValue$S$Z("labels", toolbar.labelsButton.isSelected$());
control.setValue$S$Z("multiply_by_mass", toolbar.xMassButton.isSelected$());
control.setValue$S$I("trail_length", $I$(1).trailLengths[toolbar.trailLengthIndex]);
control.setValue$S$I("stretch", toolbar.vStretch);
control.setValue$S$I("stretch_acceleration", toolbar.aStretch);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var toolbar=obj;
toolbar.traceVisButton.setSelected$Z(control.getBoolean$S("trace"));
toolbar.pVisButton.setSelected$Z(control.getBoolean$S("position"));
toolbar.vVisButton.setSelected$Z(control.getBoolean$S("velocity"));
toolbar.aVisButton.setSelected$Z(control.getBoolean$S("acceleration"));
toolbar.labelsButton.setSelected$Z(control.getBoolean$S("labels"));
toolbar.xMassButton.setSelected$Z(control.getBoolean$S("multiply_by_mass"));
p$1.setTrailLength$I.apply(toolbar, [control.getInt$S("trail_length")]);
toolbar.vStretch=control.getInt$S("stretch");
if (control.getPropertyNamesRaw$().contains$O("stretch_acceleration")) {
toolbar.aStretch=control.getInt$S("stretch_acceleration");
} else toolbar.aStretch=toolbar.vStretch;
return obj;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TToolBar, "CalibrationButton", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.cabrillo.tracker.TButton', 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setIcons$javax_swing_Icon$javax_swing_Icon($I$(1).calibrationOnlyIcon, $I$(1).calibrationOnlyIcon);
this.addActionListener$java_awt_event_ActionListener(this);
}, 1);

Clazz.newMeth(C$, 'getPopup$',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].refreshCalibrationPopup$javax_swing_JPopupMenu.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [null]);
});

Clazz.newMeth(C$, 'getCalibrationToolsMenu$',  function () {
var newToolsMenu=Clazz.new_([$I$(3).getString$S("TMenuBar.MenuItem.NewTrack")],$I$(2,1).c$$S);
var item;
if (this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).isEnabled$S("calibration.stick")) {
item=Clazz.new_([$I$(3).getString$S("Stick.Name")],$I$(4,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$CalibrationButton$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$CalibrationButton$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var track=Clazz.new_($I$(5,1));
track.setColor$java_awt_Color.apply(track, [$I$(6).BLUE]);
track.setStickMode$Z.apply(track, [true]);
var scale=this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).getCoords$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), []).getScaleX$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).getCoords$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), []), [0]);
var uncalibrated=this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).calibrationTools.isEmpty$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).calibrationTools, []);
track.setCalibrator$Double.apply(track, [scale == 1.0  && uncalibrated  ? Double.valueOf$D(1.0) : null]);
var name=$I$(3).getString$S("CalibrationStick.New.Name");
track.setName$S.apply(track, [this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).getNextName$S$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), [name, " "])]);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).addTrack$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), [track]);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].calibrationButton.setSelected$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].calibrationButton, [true]);
for (var next, $next = this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).visibleCalibrationTools.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar.CalibrationButton'].showCalibrationTool$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar.CalibrationButton'], [next]);
}
if ($I$(7).centerCalibrationStick) {
var mainView=this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].frame.getMainView$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].frame, [this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [])]);
var rect=mainView.scrollPane.getViewport$.apply(mainView.scrollPane, []).getViewRect$.apply(mainView.scrollPane.getViewport$.apply(mainView.scrollPane, []), []);
var xpix=rect.x + (rect.width/2|0);
var ypix=rect.y + (rect.height/2|0);
var x=this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).pixToX$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), [xpix]);
var y=this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).pixToY$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), [ypix]);
track.createStep$I$D$D$D$D.apply(track, [0, x - 100, y - 20, x + 100, y - 20]);
}this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), [track]);
});
})()
), Clazz.new_(P$.TToolBar$CalibrationButton$lambda1.$init$,[this, null])));
newToolsMenu.add$javax_swing_JMenuItem(item);
}if (this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).isEnabled$S("calibration.points")) {
item=Clazz.new_([$I$(3).getString$S("Calibration.Name")],$I$(4,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$CalibrationButton$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$CalibrationButton$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var track=Clazz.new_($I$(8,1));
var name=$I$(3).getString$S("Calibration.New.Name");
track.setName$S.apply(track, [this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).getNextName$S$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), [name, " "])]);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).addTrack$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), [track]);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].calibrationButton.setSelected$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].calibrationButton, [true]);
for (var next, $next = this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).visibleCalibrationTools.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar.CalibrationButton'].showCalibrationTool$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar.CalibrationButton'], [next]);
}
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), [track]);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).getAxes$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), []).setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).getAxes$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), []), [true]);
});
})()
), Clazz.new_(P$.TToolBar$CalibrationButton$lambda2.$init$,[this, null])));
newToolsMenu.add$javax_swing_JMenuItem(item);
}if (this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).isEnabled$S("calibration.offsetOrigin")) {
item=Clazz.new_([$I$(3).getString$S("OffsetOrigin.Name")],$I$(4,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$CalibrationButton$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$CalibrationButton$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var track=Clazz.new_($I$(9,1));
var name=$I$(3).getString$S("OffsetOrigin.New.Name");
track.setName$S.apply(track, [this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).getNextName$S$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), [name, " "])]);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).addTrack$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), [track]);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].calibrationButton.setSelected$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].calibrationButton, [true]);
for (var next, $next = this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).visibleCalibrationTools.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar.CalibrationButton'].showCalibrationTool$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar.CalibrationButton'], [next]);
}
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), [track]);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).getAxes$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), []).setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).getAxes$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), []), [true]);
});
})()
), Clazz.new_(P$.TToolBar$CalibrationButton$lambda3.$init$,[this, null])));
newToolsMenu.add$javax_swing_JMenuItem(item);
}return newToolsMenu;
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).selectedSteps.clear$();
var source=e.getSource$();
for (var track, $track = this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).calibrationTools.iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
if (e.getActionCommand$().equals$O(track.getName$())) {
if (source.isSelected$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).visibleCalibrationTools.add$O(track);
for (var next, $next = this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).visibleCalibrationTools.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
this.showCalibrationTool$org_opensourcephysics_cabrillo_tracker_TTrack(next);
}
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
} else {
this.hideCalibrationTool$org_opensourcephysics_cabrillo_tracker_TTrack(track);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).visibleCalibrationTools.remove$O(track);
}}this.refresh$();
}
});

Clazz.newMeth(C$, 'showCalibrationTool$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
track.erase$();
track.setVisible$Z(true);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
});

Clazz.newMeth(C$, 'hideCalibrationTool$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
track.setVisible$Z(false);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).getSelectedTrack$() === track ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(null);
}});

Clazz.newMeth(C$, 'refresh$',  function () {
this.setToolTipText$S($I$(3).getString$S("TToolbar.Button.TapeVisible.Tooltip"));
for (var track, $track = this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).calibrationTools.iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
track.updateListenerVisible$java_beans_PropertyChangeListener(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar']);
}
var toolsVisible=false;
for (var track, $track = this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).calibrationTools.iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
toolsVisible=toolsVisible || track.isVisible$() ;
}
if (this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].notYetCalibrated && toolsVisible ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].notYetCalibrated=false;
}this.setSelected$Z(toolsVisible);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TToolBar, "MeasureButton", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.cabrillo.tracker.TButton', 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setIcons$javax_swing_Icon$javax_swing_Icon($I$(1).rulerOnlyIcon, $I$(1).rulerOnlyIcon);
this.addActionListener$java_awt_event_ActionListener(this);
}, 1);

Clazz.newMeth(C$, 'getPopup$',  function () {
var popup=Clazz.new_($I$(10,1));
var item;
for (var track, $track = this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).measuringTools.iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
item=Clazz.new_([track.getName$()],$I$(11,1).c$$S);
item.setSelected$Z(track.isVisible$());
item.setActionCommand$S(track.getName$());
item.addActionListener$java_awt_event_ActionListener(this);
popup.add$javax_swing_JMenuItem(item);
}
var newToolsMenu=Clazz.new_([$I$(3).getString$S("TMenuBar.MenuItem.NewTrack")],$I$(2,1).c$$S);
$I$(12,"refreshMeasuringToolsMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu",[this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), newToolsMenu]);
if (newToolsMenu.getItemCount$() > 0) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).measuringTools.isEmpty$()) popup.addSeparator$();
popup.add$javax_swing_JMenuItem(newToolsMenu);
}$I$(13).setFonts$java_awt_Container(popup);
return popup;
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).selectedSteps.clear$();
var source=e.getSource$();
for (var track, $track = this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).measuringTools.iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
if (e.getActionCommand$().equals$O(track.getName$())) {
if (source.isSelected$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).visibleMeasuringTools.add$O(track);
for (var next, $next = this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).visibleMeasuringTools.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
this.showMeasuringTool$org_opensourcephysics_cabrillo_tracker_TTrack(next);
}
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
} else {
this.hideMeasuringTool$org_opensourcephysics_cabrillo_tracker_TTrack(track);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).visibleMeasuringTools.remove$O(track);
}}}
this.refresh$();
});

Clazz.newMeth(C$, 'showMeasuringTool$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
track.erase$();
track.setVisible$Z(true);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
});

Clazz.newMeth(C$, 'hideMeasuringTool$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
track.setVisible$Z(false);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).getSelectedTrack$() === track ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(null);
}});

Clazz.newMeth(C$, 'refresh$',  function () {
this.setToolTipText$S($I$(3).getString$S("TToolbar.Button.RulerVisible.Tooltip"));
for (var track, $track = this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).measuringTools.iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
track.updateListenerVisible$java_beans_PropertyChangeListener(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar']);
}
var toolsVisible=false;
for (var track, $track = this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).measuringTools.iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
if (track.isVisible$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).visibleMeasuringTools.add$O(track);
toolsVisible=true;
}}
this.setSelected$Z(toolsVisible);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TToolBar, "DrawingButton", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.cabrillo.tracker.TButton', 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['showPopup'],'O',['$popup','javax.swing.JPopupMenu','drawingVisibleCheckbox','javax.swing.JCheckBoxMenuItem']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setIcons$javax_swing_Icon$javax_swing_Icon($I$(1).pencilOffIcon, $I$(1).pencilOnIcon);
this.setRolloverIcon$javax_swing_Icon($I$(1).pencilOffRolloverIcon);
this.setRolloverSelectedIcon$javax_swing_Icon($I$(1).pencilOnRolloverIcon);
this.addActionListener$java_awt_event_ActionListener(this);
this.addMouseListener$java_awt_event_MouseListener(((P$.TToolBar$DrawingButton$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TToolBar$DrawingButton$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
var wicon=this.b$['javax.swing.AbstractButton'].getIcon$.apply(this.b$['javax.swing.AbstractButton'], []).getIconWidth$();
var factor=(wicon/28|0);
var wbutton=this.b$['javax.swing.JComponent'].getWidth$.apply(this.b$['javax.swing.JComponent'], []);
var limit=((wbutton - wicon)/2|0) + factor * 18;
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar.DrawingButton'].showPopup=e.getX$() > limit;
});
})()
), Clazz.new_($I$(14,1),[this, null],P$.TToolBar$DrawingButton$1)));
this.drawingVisibleCheckbox=Clazz.new_($I$(11,1));
this.drawingVisibleCheckbox.setSelected$Z(true);
this.drawingVisibleCheckbox.addActionListener$java_awt_event_ActionListener(((P$.TToolBar$DrawingButton$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TToolBar$DrawingButton$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).setSelectedPoint$org_opensourcephysics_media_core_TPoint.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []), [null]);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).selectedSteps.clear$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).selectedSteps, []);
var drawer=$I$(15,"getDrawer$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [])]);
drawer.setDrawingsVisible$Z$Z.apply(drawer, [!drawer.areDrawingsVisible$.apply(drawer, []), true]);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar.DrawingButton'].drawingVisibleCheckbox.setSelected$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar.DrawingButton'].drawingVisibleCheckbox, [drawer.areDrawingsVisible$.apply(drawer, [])]);
$I$(16,"repaintT$java_awt_Component",[this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [])]);
});
})()
), Clazz.new_(P$.TToolBar$DrawingButton$lambda1.$init$,[this, null])));
this.$popup=Clazz.new_($I$(10,1));
}, 1);

Clazz.newMeth(C$, 'getPopup$',  function () {
if (!this.showPopup) return null;
this.refresh$();
$I$(13).setFonts$java_awt_Container(this.$popup);
return this.$popup;
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.showPopup) return;
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).selectedSteps.clear$();
this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).hideMouseBox$();
this.setSelected$Z(!this.isSelected$());
var drawer=$I$(15,"getDrawer$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [])]);
drawer.getDrawingControl$().setVisible$Z(this.isSelected$());
if (this.isSelected$()) {
if (drawer.scenes.isEmpty$()) {
drawer.addNewScene$();
} else {
var scene=drawer.getSceneAtFrame$I(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], []).getFrameNumber$());
drawer.getDrawingControl$().setSelectedScene$org_opensourcephysics_cabrillo_tracker_PencilScene(scene);
}drawer.setDrawingsVisible$Z$Z(true, true);
}});

Clazz.newMeth(C$, 'refresh$',  function () {
this.setToolTipText$S($I$(3).getString$S("TToolBar.Button.Drawings.Tooltip"));
this.drawingVisibleCheckbox.setText$S($I$(3).getString$S("TToolBar.MenuItem.DrawingsVisible.Text"));
var drawer=$I$(15,"getDrawer$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [])]);
this.drawingVisibleCheckbox.setSelected$Z(drawer.areDrawingsVisible$());
this.drawingVisibleCheckbox.setEnabled$Z($I$(15,"hasDrawings$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [])]) && !$I$(15,"isDrawing$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TToolBar'], [])]) );
this.$popup.add$javax_swing_JMenuItem(this.drawingVisibleCheckbox);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TToolBar, "MobileButton", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.cabrillo.tracker.TButton');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
if ($I$(17).isMobile$()) {
var size=$I$(17).getHTMLPageSize$();
dim.width=(size.width/6|0);
}return dim;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
