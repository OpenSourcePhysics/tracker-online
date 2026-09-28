(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.cabrillo.tracker.PencilDrawer','java.awt.Cursor','org.opensourcephysics.cabrillo.tracker.TrackerPanel','java.awt.Point','org.opensourcephysics.cabrillo.tracker.Tracker','javax.swing.JOptionPane','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.cabrillo.tracker.TTrack','java.util.HashMap','org.opensourcephysics.cabrillo.tracker.TToolBar','java.util.ArrayList','org.opensourcephysics.controls.XMLPropertyElement','org.opensourcephysics.cabrillo.tracker.Configuration','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.tools.DataTool','org.opensourcephysics.tools.DataToolTab','org.opensourcephysics.cabrillo.tracker.PointMass','org.opensourcephysics.media.core.TPoint','java.util.HashSet','java.util.TreeSet','java.util.TreeMap','org.opensourcephysics.cabrillo.tracker.StepSet','org.opensourcephysics.cabrillo.tracker.TActions','org.opensourcephysics.cabrillo.tracker.TCoordinateStringBuilder','javax.swing.JLabel','javax.swing.BorderFactory','org.opensourcephysics.cabrillo.tracker.Vector','javax.swing.SwingUtilities','java.awt.event.KeyAdapter','java.awt.Dimension',['org.opensourcephysics.cabrillo.tracker.TrackerPanel','.TMouseController'],'org.opensourcephysics.cabrillo.tracker.Undo','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.controls.XML','org.opensourcephysics.cabrillo.tracker.ModelBuilder','java.awt.Toolkit','org.opensourcephysics.cabrillo.tracker.PerspectiveTrack','org.opensourcephysics.cabrillo.tracker.ParticleDataTrack','org.opensourcephysics.cabrillo.tracker.FilteredPointMass','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.tools.DataFunctionPanel','org.opensourcephysics.tools.Parameter','javajs.async.AsyncDialog','org.opensourcephysics.media.core.VideoIO','org.opensourcephysics.cabrillo.tracker.ReferenceFrame','org.opensourcephysics.cabrillo.tracker.CoordAxes','org.opensourcephysics.cabrillo.tracker.TMat','java.awt.event.ComponentAdapter','org.opensourcephysics.tools.ResourceLoader','java.awt.EventQueue','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.cabrillo.tracker.TapeMeasure','org.opensourcephysics.cabrillo.tracker.Protractor','javax.swing.JPopupMenu','org.opensourcephysics.cabrillo.tracker.TrackControl','javax.swing.MenuSelectionManager','org.opensourcephysics.js.AIPatch','org.opensourcephysics.cabrillo.tracker.UnitsDialog','org.opensourcephysics.cabrillo.tracker.AttachmentDialog','org.opensourcephysics.cabrillo.tracker.PasteDataDialog','org.opensourcephysics.cabrillo.tracker.PlotGuestDialog','org.opensourcephysics.cabrillo.tracker.TrackDataBuilder','org.opensourcephysics.cabrillo.tracker.DerivativeAlgorithmDialog','org.opensourcephysics.cabrillo.tracker.MotionFilterDialog','org.opensourcephysics.cabrillo.tracker.TMouseHandler','org.opensourcephysics.media.core.VideoGrabber','org.opensourcephysics.cabrillo.tracker.ParticleModel','java.awt.geom.AffineTransform','java.awt.image.BufferedImage','java.awt.Rectangle','org.opensourcephysics.cabrillo.tracker.AutoTracker','org.opensourcephysics.cabrillo.tracker.ExportDataDialog','org.opensourcephysics.cabrillo.tracker.ExportVideoDialog','org.opensourcephysics.cabrillo.tracker.ExportZipDialog','org.opensourcephysics.cabrillo.tracker.TrackProperties',['org.opensourcephysics.cabrillo.tracker.TrackerPanel','.Loader'],'javax.swing.JMenu','javax.swing.JMenuItem','org.opensourcephysics.media.core.MediaRes','javax.swing.JFrame',['org.opensourcephysics.cabrillo.tracker.TrackerIO','.ComponentImage'],'org.opensourcephysics.cabrillo.tracker.TrackerIO','javax.swing.AbstractAction','org.opensourcephysics.display.DisplayRes','org.opensourcephysics.cabrillo.tracker.TMenuBar','org.opensourcephysics.cabrillo.tracker.Step','org.opensourcephysics.media.core.DeinterlaceFilter','org.opensourcephysics.media.core.GhostFilter','org.opensourcephysics.media.core.StrobeFilter','org.opensourcephysics.media.core.DarkGhostFilter','org.opensourcephysics.media.core.NegativeFilter','org.opensourcephysics.media.core.GrayScaleFilter','org.opensourcephysics.media.core.LogFilter','org.opensourcephysics.media.core.BrightnessFilter','org.opensourcephysics.media.core.BaselineFilter','org.opensourcephysics.media.core.SumFilter','org.opensourcephysics.media.core.ResizeFilter','org.opensourcephysics.media.core.RotateFilter','org.opensourcephysics.media.core.PerspectiveFilter','org.opensourcephysics.media.core.RadialDistortionFilter','org.opensourcephysics.media.core.ImageCoordSystem','org.opensourcephysics.cabrillo.tracker.TrackChooserTView','org.opensourcephysics.media.core.VideoClip','org.opensourcephysics.display.GUIUtils']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrackerPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.VideoPanel', 'javax.swing.Scrollable');
C$.$classes$=[['TMouseController',2],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.maximizedView=-1;
this.description="";
this.zoom=1;
this.pointState=Clazz.new_($I$(19,1));
this.trackControlX=-2147483648;
this.infoX=-2147483648;
this.calibrationTools=Clazz.new_($I$(12,1));
this.visibleCalibrationTools=Clazz.new_($I$(20,1));
this.measuringTools=Clazz.new_($I$(20,1));
this.visibleMeasuringTools=Clazz.new_($I$(20,1));
this.isAutoRefresh=true;
this.isNotesVisible=false;
this.supplementalFilePaths=Clazz.new_($I$(21,1));
this.pageViewFilePaths=Clazz.new_($I$(10,1));
this.formatPatterns=Clazz.array($I$(22), [$I$(9).getDefaultFormatPatterns$().length]);
this.lengthUnit=$I$(6).preferredLengthUnit;
this.massUnit=$I$(6).preferredMassUnit;
this.unitsVisible=true;
this.anglesInRadians=$I$(6).isRadians;
this.andWorld=Clazz.new_($I$(12,1));
this.dividerFractions=Clazz.array(Double.TYPE, [4]);
},1);

C$.$fields$=[['Z',['tainted','dataToolVisible','isModelBuilderVisible','isShiftKeyDown','isControlKeyDown','isEnterKeyDown','isAutoPaste','showTrackControlDelayed','isAutoRefresh','isNotesVisible','hideDescriptionWhenLoaded','unitsVisible','anglesInRadians'],'D',['defaultImageBorder','zoom'],'I',['maximizedView','trackControlX','trackControlY','infoX','infoY','cursorType','enabledCount'],'S',['description','defaultSavePath','openedFromPath','author','contact','lengthUnit','massUnit','title'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','selectedPoint','org.opensourcephysics.media.core.TPoint','selectedStep','org.opensourcephysics.cabrillo.tracker.Step','selectingPanelID','Integer','selectedTrack','org.opensourcephysics.cabrillo.tracker.TTrack','newlyMarkedPoint','org.opensourcephysics.media.core.TPoint','dirty','java.awt.Rectangle','prevPixelTransform','java.awt.geom.AffineTransform','scrollPane','javax.swing.JScrollPane','popup','javax.swing.JPopupMenu','+displayedPopup','$enabled','java.util.Set','snapPoint','org.opensourcephysics.media.core.TPoint','renderedImage','java.awt.image.BufferedImage','+mattedImage','currentState','org.opensourcephysics.controls.XMLControl','+currentCoords','+currentSteps','pointState','org.opensourcephysics.media.core.TPoint','$mouseHandler','org.opensourcephysics.cabrillo.tracker.TMouseHandler','badNameLabel','javax.swing.JLabel','dataBuilder','org.opensourcephysics.cabrillo.tracker.TrackDataBuilder','customViewsProperty','org.opensourcephysics.controls.XMLProperty','+selectedViewsProperty','+selectedViewTypesProperty','+selectedTrackViewsProperty','dividerLocs','double[]','zoomCenter','java.awt.Point','visibleFilters','java.util.Map','modelBuilder','org.opensourcephysics.cabrillo.tracker.ModelBuilder','trackControl','org.opensourcephysics.cabrillo.tracker.TrackControl','calibrationTools','java.util.ArrayList','visibleCalibrationTools','java.util.Set','+measuringTools','+visibleMeasuringTools','autoTracker','org.opensourcephysics.cabrillo.tracker.AutoTracker','algorithmDialog','org.opensourcephysics.cabrillo.tracker.DerivativeAlgorithmDialog','filterDialog','org.opensourcephysics.cabrillo.tracker.MotionFilterDialog','attachmentDialog','org.opensourcephysics.cabrillo.tracker.AttachmentDialog','guestsDialog','org.opensourcephysics.cabrillo.tracker.PlotGuestDialog','unitsDialog','org.opensourcephysics.cabrillo.tracker.UnitsDialog','pasteDataDialog','org.opensourcephysics.cabrillo.tracker.PasteDataDialog','supplementalFilePaths','java.util.TreeSet','pageViewFilePaths','java.util.Map','selectedSteps','org.opensourcephysics.cabrillo.tracker.StepSet','massParamListener','java.beans.PropertyChangeListener','+massChangeListener','formatPatterns','java.util.TreeMap[]','coordStringBuilder','org.opensourcephysics.cabrillo.tracker.TCoordinateStringBuilder','andWorld','java.util.ArrayList','dividerFractions','double[]','numberFormatDialog','org.opensourcephysics.cabrillo.tracker.NumberFormatDialog','userTracks','java.util.ArrayList','+exportableTracks','actions','java.util.Map','tempA','java.util.ArrayList']]
,['D',['ZOOM_STEP'],'O',['ZOOM_LEVELS','double[]']]]

Clazz.newMeth(C$, 'getID$',  function () {
return this.panelID;
});

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_media_core_Video$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z.apply(this, [null, null, null, true]);
}, 1);

Clazz.newMeth(C$, 'c$$Z',  function (ignored) {
C$.c$$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_media_core_Video$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z.apply(this, [null, null, null, false]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TFrame',  function (frame) {
C$.c$$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_media_core_Video$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z.apply(this, [frame, null, null, true]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_media_core_Video',  function (frame, video) {
C$.c$$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_media_core_Video$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z.apply(this, [frame, video, null, true]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (frame, panel) {
C$.c$$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_media_core_Video$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z.apply(this, [frame, null, panel, true]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_media_core_Video$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (frame, video, panel) {
C$.c$$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_media_core_Video$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z.apply(this, [frame, video, panel, true]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_media_core_Video$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z',  function (frame, video, panel, createFrame) {
;C$.superclazz.c$$org_opensourcephysics_media_core_Video.apply(this,[video]);C$.$init$.apply(this);
this.setTimeUnit$S($I$(6).preferredTimeUnit);
this.setTFrame$org_opensourcephysics_cabrillo_tracker_TFrame(frame == null  && createFrame  ? Clazz.new_($I$(15,1)) : frame);
if (panel == null ) {
this.andWorld.add$O(this.panelID);
} else {
panel.andWorld.add$O(this.panelID);
}this.selectedSteps=Clazz.new_($I$(23,1).c$$org_opensourcephysics_cabrillo_tracker_TFrame$Integer,[frame, this.panelID]);
this.setGUI$();
}, 1);

Clazz.newMeth(C$, 'setTFrame$org_opensourcephysics_cabrillo_tracker_TFrame',  function (frame) {
this.frame=frame;
this.panelID=(frame == null  ? Integer.valueOf$I(0) : frame.allocatePanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this));
System.out.println$S("TrackerPanel " + this + " created" );
});

Clazz.newMeth(C$, 'isWorldPanel$',  function () {
return this.getClass$() !== Clazz.getClass(C$) ;
});

Clazz.newMeth(C$, 'getActions$',  function () {
return this.actions;
});

Clazz.newMeth(C$, 'setGUI$',  function () {
this.actions=$I$(24).createActions$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
this.displayCoordsOnMouseMoved=true;
this.zoomBox.setShowUndraggedBox$Z(false);
this.coordStringBuilder=Clazz.new_($I$(25,1));
this.setCoordinateStringBuilder$org_opensourcephysics_display_axes_CoordinateStringBuilder(this.coordStringBuilder);
this.badNameLabel=Clazz.new_($I$(26,1));
this.badNameLabel.setBorder$javax_swing_border_Border($I$(27).createEmptyBorder$I$I$I$I(2, 2, 2, 2));
this.massParamListener=((P$.TrackerPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if ("m".equals$O(e.getOldValue$())) {
var paramEditor=e.getSource$();
var param=paramEditor.getObject$S("m");
var panel=paramEditor.getFunctionPanel$();
var m=this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].getTrack$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], [panel.getName$()]);
if (m != null  && m.getMass$() != param.getValue$()  ) {
m.setMass$D(param.getValue$());
m.massField.setValue$D(m.getMass$());
}}});
})()
), Clazz.new_(P$.TrackerPanel$1.$init$,[this, null]));
this.massChangeListener=((P$.TrackerPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var pm=e.getSource$();
var panel=(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].dataBuilder == null  ? null : this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].dataBuilder.getPanel$S(pm.getName$()));
if (panel == null ) return;
var paramEditor=panel.getParamEditor$();
var param=paramEditor.getObject$S("m");
var newMass=(e.getNewValue$()).valueOf();
if (newMass != param.getValue$() ) {
paramEditor.setExpression$S$S$Z("m", String.valueOf$D(newMass), false);
}});
})()
), Clazz.new_(P$.TrackerPanel$2.$init$,[this, null]));
this.coords.addPropertyChangeListenerSafely$java_beans_PropertyChangeListener(this);
this.addKeyListener$java_awt_event_KeyListener(((P$.TrackerPanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 16) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].isShiftKeyDown) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].isShiftKeyDown=true;
var marking=this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].setCursorForMarking$Z$java_awt_event_InputEvent.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], [true, e]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack != null  && marking != this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack.isMarking  ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack.setMarking$Z(marking);
}}} else if (e.getKeyCode$() == 17) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].isControlKeyDown) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].isControlKeyDown=true;
var marking=this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].setCursorForMarking$Z$java_awt_event_InputEvent.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], [this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].isShiftKeyDown, e]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack != null  && marking != this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack.isMarking  ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack.setMarking$Z(marking);
}}} else if (e.getKeyCode$() == 10 && this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack != null   && this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].cursorType == this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack.getMarkingCursorType$java_awt_event_InputEvent(e)  && this.b$['org.opensourcephysics.media.core.VideoPanel'].getFrameNumber$.apply(this.b$['org.opensourcephysics.media.core.VideoPanel'], []) > 0 ) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].isEnterKeyDown) return;
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].isEnterKeyDown=true;
var n=this.b$['org.opensourcephysics.media.core.VideoPanel'].getFrameNumber$.apply(this.b$['org.opensourcephysics.media.core.VideoPanel'], []);
var step=this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack.getStep$I(n - 1);
if (step != null ) {
var clone=null;
if (this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack.getClass$() === Clazz.getClass($I$(18)) ) {
var p=(step).getPosition$();
clone=this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack.createStep$I$D$D(n, p.x, p.y);
(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack).keyFrames.add$O(Integer.valueOf$I(n));
} else if (this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack.getClass$() === Clazz.getClass($I$(28)) ) {
var s=step;
var tail=s.getTail$();
var tip=s.getTip$();
var vector=this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack;
var dx=tip.x - tail.x;
var dy=tip.y - tail.y;
clone=vector.createStep$I$D$D$D$D(n, tail.x, tail.y, dx, dy);
}if (clone != null  && this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack.isAutoAdvance$() ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack.repaintStep$org_opensourcephysics_cabrillo_tracker_Step(clone);
$I$(29,"invokeLater$Runnable",[((P$.TrackerPanel$3$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerPanel$3$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.media.core.VideoPanel'].getPlayer$.apply(this.b$['org.opensourcephysics.media.core.VideoPanel'], []).step$.apply(this.b$['org.opensourcephysics.media.core.VideoPanel'].getPlayer$.apply(this.b$['org.opensourcephysics.media.core.VideoPanel'], []), []);
this.b$['org.opensourcephysics.media.core.VideoPanel'].hideMouseBox$.apply(this.b$['org.opensourcephysics.media.core.VideoPanel'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].isEnterKeyDown=false;
});
})()
), Clazz.new_(P$.TrackerPanel$3$lambda1.$init$,[this, null]))]);
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].setMouseCursor$java_awt_Cursor.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], [$I$(3).getDefaultCursor$()]);
if (clone != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].setSelectedPoint$org_opensourcephysics_media_core_TPoint.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], [clone.getDefaultPoint$()]);
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack.repaintStep$org_opensourcephysics_cabrillo_tracker_Step(clone);
}}}} else this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].handleKeyPress$java_awt_event_KeyEvent.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], [e]);
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 16) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].isShiftKeyDown=false;
var marking=this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].setCursorForMarking$Z$java_awt_event_InputEvent.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], [false, e]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack != null  && marking != this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack.isMarking  ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack.setMarking$Z(marking);
}} else if (e.getKeyCode$() == 17) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].isControlKeyDown=false;
var marking=this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].setCursorForMarking$Z$java_awt_event_InputEvent.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], [this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].isShiftKeyDown, e]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack != null  && marking != this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack.isMarking  ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedTrack.setMarking$Z(marking);
}}});
})()
), Clazz.new_($I$(30,1),[this, null],P$.TrackerPanel$3)));
this.setDrawingInImageSpace$Z(true);
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(31,1).c$$I$I,[1, 1]));
this.$enabled=$I$(6).getDefaultConfig$();
++this.enabledCount;
this.changed=false;
});

Clazz.newMeth(C$, 'addVideoPlayer$',  function () {
C$.superclazz.prototype.addVideoPlayer$.apply(this, []);
this.player.setInspectorButtonVisible$Z(false);
this.player.addActionListener$java_beans_PropertyChangeListener(this);
});

Clazz.newMeth(C$, 'setMouseListeners$',  function () {
this.mouseController=Clazz.new_($I$(32,1),[this, null]);
this.addMouseListener$java_awt_event_MouseListener(this.mouseController);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this.mouseController);
this.addOptionController$();
});

Clazz.newMeth(C$, 'setVideo$org_opensourcephysics_media_core_Video',  function (newVideo) {
var state=null;
var oldVideo=this.getVideo$();
var undoable=oldVideo != null ;
if (newVideo !== oldVideo  && Clazz.instanceOf(oldVideo, "org.opensourcephysics.media.core.ImageVideo") ) {
var vid=this.getVideo$();
vid.saveInvalidImages$();
undoable=vid.isFileBased$();
}if (newVideo !== oldVideo  && undoable ) {
state=$I$(33,"getXMLControl$org_opensourcephysics_media_core_VideoClip",[this.getPlayer$().getVideoClip$()]);
}if (newVideo !== oldVideo  && oldVideo != null  ) {
$I$(24).clearFiltersAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z(this, false);
}C$.superclazz.prototype.setVideo$org_opensourcephysics_media_core_Video$Z.apply(this, [newVideo, true]);
if (state != null ) {
state=Clazz.new_([state.toXML$()],$I$(34,1).c$$S);
$I$(33).postVideoReplace$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl(this, state);
}var mat=this.getMat$();
if (mat != null  && newVideo != null  ) mat.refresh$();
if (this.modelBuilder != null ) {
this.modelBuilder.refreshSpinners$();
}this.firePropertyChange$S$O$O("image", null, null);
});

Clazz.newMeth(C$, 'getTitle$',  function () {
if (this.getDataFile$() != null ) {
this.title=this.getDataFile$().getName$();
} else if (this.defaultFileName != null ) {
this.title=this.defaultFileName;
} else if (this.getVideo$() != null  && (this.title=this.getVideo$().getProperty$S("name")) != null  ) {
this.title=$I$(35).forwardSlash$S(this.title);
var i=this.title.lastIndexOf$S("/");
if (i >= 0) this.title=this.title.substring$I(i + 1);
} else {
this.title=$I$(8).getString$S("TrackerPanel.NewTab.Name");
}return this.title;
});

Clazz.newMeth(C$, 'getToolTipPath$',  function () {
if (this.getDataFile$() != null ) {
return $I$(35,"forwardSlash$S",[this.getDataFile$().getPath$()]);
}if (this.openedFromPath != null ) {
return this.openedFromPath;
}if (this.getVideo$() != null ) {
var path=this.getVideo$().getProperty$S("absolutePath");
if (path != null ) {
return $I$(35).forwardSlash$S(path);
}}return null;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S',  function (desc) {
this.description=(desc == null  ? "" : desc);
});

Clazz.newMeth(C$, 'getModelBuilder$',  function () {
if (this.modelBuilder == null ) {
this.modelBuilder=Clazz.new_($I$(36,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[this]);
try {
var screen=$I$(37).getDefaultToolkit$().getScreenSize$();
var frameLoc=this.frame.getLocationOnScreen$();
var w=this.modelBuilder.getWidth$() + 20;
var h=this.modelBuilder.getHeight$() + 100;
var x=Math.min(screen.width - w, frameLoc.x + this.frame.getWidth$() - w);
x=Math.max(x, 0);
var y=Math.min(screen.height - h, frameLoc.y);
y=Math.max(y, 0);
this.modelBuilder.setLocation$I$I(x, y);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}return this.modelBuilder;
});

Clazz.newMeth(C$, 'addDirtyRegion$java_awt_Rectangle',  function (dirtyRect) {
this.tainted=true;
if (this.dirty == null ) this.dirty=dirtyRect;
return;
});

Clazz.newMeth(C$, 'repaintDirtyRegion$',  function () {
if (this.getHeight$() >= 0 && (this.tainted || this.dirty != null  ) ) {
$I$(15).repaintT$java_awt_Component(this);
}});

Clazz.newMeth(C$, 'getTracks$',  function () {
return this.getDrawables$Class(Clazz.getClass($I$(9)));
});

Clazz.newMeth(C$, 'getTracksTemp$',  function () {
return this.getDrawablesTemp$Class(Clazz.getClass($I$(9)));
});

Clazz.newMeth(C$, 'getUserTracks$',  function () {
if (this.userTracks != null ) return this.userTracks;
var tracks=this.getTracks$();
tracks.remove$O(this.getAxes$());
tracks.removeAll$java_util_Collection(this.calibrationTools);
tracks.removeAll$java_util_Collection(this.measuringTools);
tracks.removeAll$java_util_Collection(this.getDrawablesTemp$Class(Clazz.getClass($I$(38))));
var list=this.getDrawablesTemp$Class(Clazz.getClass($I$(39)));
for (var m=0, n=list.size$(); m < n; m++) {
var track=list.get$I(m);
if (track.getLeader$() !== track ) {
tracks.remove$O(track);
}}
list.clear$();
return this.userTracks=tracks;
});

Clazz.newMeth(C$, 'getExportableTracks$',  function () {
if (this.exportableTracks != null ) return this.exportableTracks;
var tracks=this.getTracks$();
tracks.remove$O(this.getAxes$());
tracks.removeAll$java_util_Collection(this.calibrationTools);
tracks.removeAll$java_util_Collection(this.getDrawablesTemp$Class(Clazz.getClass($I$(38))));
return this.exportableTracks=tracks;
});

Clazz.newMeth(C$, 'getTracksToSave$',  function () {
var tracks=this.getTracks$();
var list=this.getDrawablesTemp$Class(Clazz.getClass($I$(39)));
for (var m=0, n=list.size$(); m < n; m++) {
var track=list.get$I(m);
if (track.getLeader$() !== track ) {
tracks.remove$O(track);
}}
list.clear$();
tracks.removeAll$java_util_Collection(this.getDrawablesTemp$Class(Clazz.getClass($I$(40))));
return tracks;
});

Clazz.newMeth(C$, 'getTrack$S',  function (name) {
var t=this.getTrack$S$java_util_ArrayList(name, this.getTracksTemp$());
this.clearTemp$();
return t;
});

Clazz.newMeth(C$, 'getTrack$S$java_util_ArrayList',  function (name, list) {
for (var it=0, n=list.size$(); it < n; it++) {
var track=list.get$I(it);
if (track.getName$().equals$O(name) || track.getName$S("track").equals$O(name) ) return track;
}
return null;
});

Clazz.newMeth(C$, 'addTrack$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
if (track == null ) return;
var firstTrack=this.userTracks == null  || this.userTracks.isEmpty$() ;
var isUserTrack=false;
this.userTracks=null;
this.exportableTracks=null;
track.setActive$();
if (track.tp == null ) {
track.setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
track.addListener$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
}track.setAnglesInRadians$Z(track.tp != null  && track.tp.isAnglesInRadians$() );
this.showTrackControlDelayed=true;
var doAddDrawable=true;
if (Clazz.instanceOf(track, "org.opensourcephysics.cabrillo.tracker.ParticleDataTrack")) {
var pdt=track;
C$.superclazz.prototype.addDrawable$org_opensourcephysics_display_Drawable.apply(this, [pdt]);
if (pdt.morePoints.size$() > 0) {
$I$(29,"invokeLater$Runnable",[((P$.TrackerPanel$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerPanel$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
p$1.addDataTrackPoints$org_opensourcephysics_cabrillo_tracker_ParticleDataTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], [this.$finals$.pdt]);
});
})()
), Clazz.new_(P$.TrackerPanel$lambda1.$init$,[this, {pdt:pdt}]))]);
}doAddDrawable=false;
isUserTrack=true;
} else if (this.calibrationTools.contains$O(track)) {
this.showTrackControlDelayed=false;
} else {
switch (track.getBaseType$()) {
case "PerspectiveTrack":
this.showTrackControlDelayed=false;
break;
case "TapeMeasure":
this.showTrackControlDelayed=false;
var tape=track;
if (tape.isReadOnly$()) {
this.measuringTools.add$O(tape);
if (!$I$(1).isMobile$()) this.visibleMeasuringTools.add$O(tape);
isUserTrack=true;
} else {
this.calibrationTools.add$O(tape);
if (!$I$(1).isMobile$()) this.visibleCalibrationTools.add$O(tape);
}break;
case "OffsetOrigin":
case "Calibration":
this.showTrackControlDelayed=false;
this.calibrationTools.add$O(track);
if (!$I$(1).isMobile$()) this.visibleCalibrationTools.add$O(track);
break;
case "CoordAxes":
this.showTrackControlDelayed=false;
if (this.getAxes$() != null ) this.removeDrawable$org_opensourcephysics_display_Drawable(this.getAxes$());
C$.superclazz.prototype.addDrawable$org_opensourcephysics_display_Drawable.apply(this, [track]);
this.moveToBack$org_opensourcephysics_display_Drawable(track);
var mat=this.getMat$();
if (mat != null ) {
this.moveToBack$org_opensourcephysics_display_Drawable(mat);
}doAddDrawable=false;
break;
case "Protractor":
case "CircleFitter":
this.showTrackControlDelayed=false;
this.measuringTools.add$O(track);
if (!$I$(1).isMobile$()) this.visibleMeasuringTools.add$O(track);
isUserTrack=true;
break;
default:
this.setTrackName$org_opensourcephysics_cabrillo_tracker_TTrack$S$Z(track, track.getName$(), false);
isUserTrack=true;
break;
}
}if (doAddDrawable) {
if (isUserTrack) {
var automark=track.isMarkByDefault$();
track.setMarkByDefault$Z(automark || !$I$(1).hasKeyboard );
}C$.superclazz.prototype.addDrawable$org_opensourcephysics_display_Drawable.apply(this, [track]);
}if (this.trackControl != null  && this.trackControl.isVisible$() ) this.trackControl.refresh$();
if (this.dataBuilder != null  && !this.getSystemDrawables$().contains$O(track) ) {
var panel=this.createFunctionPanel$org_opensourcephysics_cabrillo_tracker_TTrack(track);
this.dataBuilder.addPanel$S$org_opensourcephysics_tools_FunctionPanel(track.getName$(), panel);
this.dataBuilder.setSelectedPanel$S(track.getName$());
}var len=track.getSteps$().length;
len=Math.max(len, this.getCoords$().getLength$());
this.getCoords$().setLength$I(len);
track.setFontLevel$I($I$(41).getLevel$());
if (this.frame != null ) {
track.setInitialFormatPatterns$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
}this.changed=true;
if (this.autoTracker != null  && track !== this.getAxes$()  ) {
this.autoTracker.setTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
}if (firstTrack && isUserTrack && this.frame != null    && !this.frame.areViewsVisible$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel(0, this) ) {
if (!$I$(15).isPortraitOrientation) this.frame.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(this, 0, 0.67);
 else this.frame.setDividerLocation$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$D(this, 2, 0.5);
}this.firePropertyChange$S$O$O("track", null, track);
if (Clazz.instanceOf(track, "org.opensourcephysics.cabrillo.tracker.PointMass")) {
var mass=track;
if (mass.filteredFootprintName != null  && mass.filteredOpen ) {
mass.showFilteredPointMass$Z(false);
}}});

Clazz.newMeth(C$, 'addDataTrackPoints$org_opensourcephysics_cabrillo_tracker_ParticleDataTrack',  function (dt) {
for (var child, $child = dt.morePoints.iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
this.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack(child);
}
if (this.frame != null  && this.isShowing$() ) {
var views=this.frame.getTViews$Integer$I$java_util_List(this.panelID, 0, null);
this.frame.getTViews$Integer$I$java_util_List(this.panelID, 1, views);
for (var i=0; i < views.size$(); i++) {
(views.get$I(i)).setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(dt);
}
}}, p$1);

Clazz.newMeth(C$, 'isTrackViewDisplayed$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
var frame=this.getTFrame$();
if (frame != null  && this.isShowing$() ) {
var views=frame.getTViews$Integer$I$java_util_List(this.panelID, 0, null);
frame.getTViews$Integer$I$java_util_List(this.panelID, 1, views);
for (var i=0; i < views.size$(); i++) {
var view=views.get$I(i);
if ((view).isTrackViewDisplayed$org_opensourcephysics_cabrillo_tracker_TTrack(track)) {
return true;
}}
}return false;
});

Clazz.newMeth(C$, 'getMaximizedView$',  function () {
return this.maximizedView;
});

Clazz.newMeth(C$, 'setMaximizedView$I',  function (viewNumber) {
this.maximizedView=(viewNumber >= -1 && viewNumber <= 4 ) ? viewNumber : -1;
});

Clazz.newMeth(C$, 'createFunctionPanel$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
track.refreshDataLater=true;
var data=track.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
track.refreshDataLater=false;
var functionPanel=Clazz.new_($I$(42,1).c$$org_opensourcephysics_display_DatasetManager,[data]);
functionPanel.setIcon$javax_swing_Icon(track.getIcon$I$I$S(21, 16, "point"));
var paramEditor=functionPanel.getParamEditor$();
switch (track.getBaseType$()) {
case "PointMass":
functionPanel.setDescription$S(Clazz.getClass($I$(18)).getName$());
var pm=track;
var param=paramEditor.getObject$S("m");
if (param == null ) {
param=Clazz.new_(["m", String.valueOf$D(pm.getMass$())],$I$(43,1).c$$S$S);
param.setDescription$S($I$(8).getString$S("ParticleModel.Parameter.Mass.Description"));
paramEditor.addObject$org_opensourcephysics_tools_FunctionEditor_FObject$Z(param, false);
}param.setNameEditable$Z(false);
paramEditor.addPropertyChangeListener$S$java_beans_PropertyChangeListener("edit", this.massParamListener);
pm.addPropertyChangeListener$S$java_beans_PropertyChangeListener("mass", this.massChangeListener);
break;
case "Vector":
functionPanel.setDescription$S(Clazz.getClass($I$(28)).getName$());
break;
default:
functionPanel.setDescription$S(track.getClass$().getName$());
break;
}
return functionPanel;
});

Clazz.newMeth(C$, 'removePointMassListeners$org_opensourcephysics_cabrillo_tracker_PointMass',  function (pointMass) {
pointMass.removePropertyChangeListener$S$java_beans_PropertyChangeListener("mass", this.massChangeListener);
if (this.dataBuilder != null ) {
var functionPanel=this.dataBuilder.getPanel$S(this.getName$());
if (functionPanel != null ) {
functionPanel.getParamEditor$().removePropertyChangeListener$S$java_beans_PropertyChangeListener("edit", this.massParamListener);
}}});

Clazz.newMeth(C$, 'removeTrack$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
if (this.getTrackByName$Class$S(track.getClass$(), track.getName$()) == null ) return;
this.userTracks=null;
this.exportableTracks=null;
track.removeListener$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
C$.superclazz.prototype.removeDrawable$org_opensourcephysics_display_Drawable.apply(this, [track]);
if (this.dataBuilder != null ) this.dataBuilder.removePanel$S(track.getName$());
if (this.getSelectedTrack$() === track ) this.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(null);
this.firePropertyChange$S$O$O("track", track, null);
$I$(9,"removeActiveTrack$I",[track.getID$()]);
this.changed=true;
});

Clazz.newMeth(C$, 'containsTrack$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
var list=this.getTracksTemp$();
var ret=false;
;for (var it=0, n=list.size$(); it < n; it++) {
var next=list.get$I(it);
if (track === next ) {
ret=true;
break;
}}
this.clearTemp$();
return ret;
});

Clazz.newMeth(C$, 'eraseAll$',  function () {
var list=this.getTracks$();
for (var it=0, n=list.size$(); it < n; it++) {
var track=list.get$I(it);
track.erase$();
}
});

Clazz.newMeth(C$, 'askSaveIfChanged$java_util_function_Function$Runnable',  function (whenClosed, whenCanceled) {
if (!this.changed) {
whenClosed.apply$O(Boolean.valueOf$Z(false));
return;
}var name=this.getTitle$();
if (this.getDataFile$() == null ) {
var i=name.lastIndexOf$I(".");
if (i > 0) {
name=name.substring$I$I(0, i);
}}Clazz.new_($I$(44,1)).showConfirmDialog$java_awt_Component$O$S$java_awt_event_ActionListener(this.frame, $I$(8).getString$S("TrackerPanel.Dialog.SaveChanges.Message") + " \"" + name + "\"?" , $I$(8).getString$S("TrackerPanel.Dialog.SaveChanges.Title"), ((P$.TrackerPanel$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerPanel$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
switch (e.getID$()) {
case 0:
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].restoreViews$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], []);
var file=$I$(45,"save$java_io_File$org_opensourcephysics_media_core_VideoPanel",[this.b$['org.opensourcephysics.media.core.VideoPanel'].getDataFile$.apply(this.b$['org.opensourcephysics.media.core.VideoPanel'], []), this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel']]);
if (file == null ) {
if (this.$finals$.whenCanceled != null ) {
this.$finals$.whenCanceled.run$();
break;
}}this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].changed=false;
if (this.$finals$.whenClosed != null ) this.$finals$.whenClosed.apply$O(Boolean.valueOf$Z(true));
break;
case 1:
if (this.$finals$.whenClosed != null ) this.$finals$.whenClosed.apply$O(Boolean.valueOf$Z(false));
break;
default:
if (this.$finals$.whenCanceled != null ) this.$finals$.whenCanceled.run$();
}
});
})()
), Clazz.new_(P$.TrackerPanel$4.$init$,[this, {whenCanceled:whenCanceled,whenClosed:whenClosed}])));
});

Clazz.newMeth(C$, 'getDrawables$',  function () {
var list=C$.superclazz.prototype.getDrawables$.apply(this, []);
var track=this.getSelectedTrack$();
if (track != null  && list.contains$O(track)  && track !== this.getAxes$()  ) {
list.remove$O(track);
list.add$O(track);
}var mat=this.getMat$();
if (mat != null  && list.get$I(0) !== mat  ) {
list.remove$O(mat);
list.add$I$O(0, mat);
}return list;
});

Clazz.newMeth(C$, 'getSystemDrawables$',  function () {
var list=Clazz.new_($I$(12,1));
var drawable=this.getMat$();
if (drawable != null ) list.add$O(drawable);
drawable=this.getAxes$();
if (drawable != null ) list.add$O(drawable);
for (var next, $next = this.calibrationTools.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
list.add$O(next);
}
return list;
});

Clazz.newMeth(C$, 'addDrawable$org_opensourcephysics_display_Drawable',  function (drawable) {
if (Clazz.instanceOf(drawable, "org.opensourcephysics.cabrillo.tracker.TTrack")) {
this.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack(drawable);
} else {
C$.superclazz.prototype.addDrawable$org_opensourcephysics_display_Drawable.apply(this, [drawable]);
}});

Clazz.newMeth(C$, 'moveToBack$org_opensourcephysics_display_Drawable',  function (drawable) {
if (drawable != null  && this.drawableList.contains$O(drawable) ) {
{
this.drawableList.remove$O(drawable);
if (Clazz.instanceOf(drawable, "org.opensourcephysics.cabrillo.tracker.TMat")) this.drawableList.add$I$O(0, drawable);
 else {
var index=this.getMat$() == null  ? 0 : 1;
if (this.getVideo$() != null ) ++index;
this.drawableList.add$I$O(index, drawable);
}}}});

Clazz.newMeth(C$, 'removeDrawable$org_opensourcephysics_display_Drawable',  function (drawable) {
if (Clazz.instanceOf(drawable, "org.opensourcephysics.cabrillo.tracker.TTrack")) this.removeTrack$org_opensourcephysics_cabrillo_tracker_TTrack(drawable);
 else C$.superclazz.prototype.removeDrawable$org_opensourcephysics_display_Drawable.apply(this, [drawable]);
});

Clazz.newMeth(C$, 'removeObjectsOfClass$Class',  function (c) {
if (Clazz.getClass($I$(9)).isAssignableFrom$Class(c)) {
var removed=this.getObjectOfClass$Class(c);
for (var i=0, n=removed.size$(); i < n; i++) {
(removed.get$I(i)).removeListener$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
}
C$.superclazz.prototype.removeObjectsOfClass$Class.apply(this, [c]);
for (var next, $next = removed.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var track=next;
this.firePropertyChange$S$O$O("track", track, null);
}
this.changed=true;
} else C$.superclazz.prototype.removeObjectsOfClass$Class.apply(this, [c]);
});

Clazz.newMeth(C$, 'clear$',  function () {
p$1.clear$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'clear$Z',  function (andSetCoords) {
this.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(null);
this.selectedPoint=null;
var list=this.getTracks$();
for (var i=0, n=list.size$(); i < n; i++) {
var track=list.get$I(i);
track.removeListener$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
var coords=this.getCoords$();
if (andSetCoords && Clazz.instanceOf(coords, "org.opensourcephysics.cabrillo.tracker.ReferenceFrame") && (coords).getOriginTrack$() === track   ) {
coords=(coords).getCoords$();
this.setCoords$org_opensourcephysics_media_core_ImageCoordSystem(coords);
}}
var mat=this.getMat$();
if (mat != null ) {
mat.cleanup$();
}C$.superclazz.prototype.clear$.apply(this, []);
if (this.dataBuilder != null ) {
this.dataBuilder.clearPanels$();
this.dataBuilder.setVisible$Z(false);
}if (this.modelBuilder != null ) {
this.modelBuilder.clearPanels$();
this.modelBuilder.setVisible$Z(false);
}if (!this.isDisposed) this.firePropertyChange$S$O$O("clear", null, null);
for (var it=0, n=list.size$(); it < n; it++) {
$I$(9,"removeActiveTrack$I",[list.get$I(it).getID$()]);
}
this.changed=true;
}, p$1);

Clazz.newMeth(C$, 'clearTracks$',  function () {
var list=this.getTracks$();
var keepers=this.getSystemDrawables$();
this.clear$();
for (var i=0, n=keepers.size$(); i < n; i++) {
var drawable=keepers.get$I(i);
if (Clazz.instanceOf(drawable, "org.opensourcephysics.cabrillo.tracker.TMat")) {
(drawable).setTrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
}this.addDrawable$org_opensourcephysics_display_Drawable(drawable);
list.remove$O(drawable);
}
for (var it=0, n=list.size$(); it < n; it++) {
var track=list.get$I(it);
track.dispose$();
}
});

Clazz.newMeth(C$, 'setCoords$org_opensourcephysics_media_core_ImageCoordSystem',  function (_coords) {
if (_coords == null  || _coords === this.coords  ) return;
if (this.video == null ) {
this.coords.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
this.coords=_coords;
this.coords.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
var n=this.getFrameNumber$();
this.getSnapPoint$().setXY$D$D(this.coords.getOriginX$I(n), this.coords.getOriginY$I(n));
try {
this.firePropertyChange$S$O$O("coords", null, this.coords);
this.firePropertyChange$S$O$O("transform", null, null);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
} else {
this.video.setCoords$org_opensourcephysics_media_core_ImageCoordSystem(_coords);
}});

Clazz.newMeth(C$, 'setReferenceFrame$S',  function (trackName) {
var thePM=this.getTrackByName$Class$S(Clazz.getClass($I$(18)), trackName);
var runner=((P$.TrackerPanel$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerPanel$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.$finals$.thePM != null ) {
var coords=this.b$['org.opensourcephysics.media.core.VideoPanel'].getCoords$.apply(this.b$['org.opensourcephysics.media.core.VideoPanel'], []);
var wasRefFrame=Clazz.instanceOf(coords, "org.opensourcephysics.cabrillo.tracker.ReferenceFrame");
while (Clazz.instanceOf(coords, "org.opensourcephysics.cabrillo.tracker.ReferenceFrame")){
coords=(coords).getCoords$();
}
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].setCoords$org_opensourcephysics_media_core_ImageCoordSystem.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], [Clazz.new_($I$(46,1).c$$org_opensourcephysics_media_core_ImageCoordSystem$org_opensourcephysics_cabrillo_tracker_PointMass,[coords, this.$finals$.thePM])]);
if (Clazz.instanceOf(this.$finals$.thePM, "org.opensourcephysics.cabrillo.tracker.ParticleModel") && wasRefFrame ) {
(this.$finals$.thePM).setLastValidFrame$I(-1);
(this.$finals$.thePM).refreshSteps$S("referenceFrame change");
}this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].setSelectedPoint$org_opensourcephysics_media_core_TPoint.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], [null]);
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedSteps.clear$();
$I$(15).repaintT$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel']);
} else {
var coords=this.b$['org.opensourcephysics.media.core.VideoPanel'].getCoords$.apply(this.b$['org.opensourcephysics.media.core.VideoPanel'], []);
if (Clazz.instanceOf(coords, "org.opensourcephysics.cabrillo.tracker.ReferenceFrame")) {
coords=(coords).getCoords$();
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].setCoords$org_opensourcephysics_media_core_ImageCoordSystem.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], [coords]);
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].setSelectedPoint$org_opensourcephysics_media_core_TPoint.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], [null]);
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].selectedSteps.clear$();
$I$(15).repaintT$java_awt_Component(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel']);
}}});
})()
), Clazz.new_(P$.TrackerPanel$5.$init$,[this, {thePM:thePM}]));
runner.run$();
});

Clazz.newMeth(C$, 'getAxes$',  function () {
return this.getFirstDrawable$Class(Clazz.getClass($I$(47)));
});

Clazz.newMeth(C$, 'getMat$',  function () {
var mat=this.getFirstDrawable$Class(Clazz.getClass($I$(48)));
if (mat != null ) mat.checkVideo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
return mat;
});

Clazz.newMeth(C$, 'getSnapPoint$',  function () {
if (this.snapPoint == null ) this.snapPoint=Clazz.new_($I$(19,1));
return this.snapPoint;
});

Clazz.newMeth(C$, 'setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
if (this.selectedTrack === track ) return;
if (track != null  && Clazz.instanceOf(track, "org.opensourcephysics.cabrillo.tracker.ParticleModel")  && (track).refreshing ) return;
var prevTrack=this.selectedTrack;
this.selectedTrack=track;
if ($I$(6).showHints && track != null  ) this.setMessage$S(track.getMessage$());
 else this.setMessage$S("");
this.firePropertyChange$S$O$O("selectedtrack", prevTrack, track);
this.coordStringBuilder.setUnitsAndPatterns$org_opensourcephysics_cabrillo_tracker_TTrack$S$S(track, "x", "y");
});

Clazz.newMeth(C$, 'getSelectedTrack$',  function () {
return this.selectedTrack;
});

Clazz.newMeth(C$, 'setSelectedPoint$org_opensourcephysics_media_core_TPoint',  function (point) {
if (point === this.selectedPoint  && point == null  ) return;
var prevPoint=this.selectedPoint;
if (prevPoint != null ) {
prevPoint.setAdjusting$Z$java_awt_event_MouseEvent(false, null);
}this.selectedPoint=point;
var stepsChanged=!this.selectedSteps.isEmpty$() && this.selectedSteps.isChanged$() ;
if (this.selectedSteps.size$() > 1) {
var newStepSelected=false;
if (point != null ) {
var step=null;
var list=this.getTracksTemp$();
for (var it=0, n=list.size$(); it < n; it++) {
var track=list.get$I(it);
step=track.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel(point, this);
if (step != null ) {
newStepSelected=this.selectedSteps.contains$O(step);
break;
}}
list.clear$();
}if (newStepSelected) {
this.firePropertyChange$S$O$O("selectedpoint", prevPoint, point);
this.selectedSteps.isModified=false;
return;
}}var prevPointChanged=this.currentState != null  && prevPoint != null   && prevPoint !== point   && prevPoint !== this.newlyMarkedPoint   && (prevPoint.x != this.pointState.x  || prevPoint.y != this.pointState.y  ) ;
if (this.selectedPoint == null ) {
this.newlyMarkedPoint=null;
}if (stepsChanged || prevPointChanged ) {
var trackEdit=false;
var coordsEdit=false;
if (prevPointChanged && prevPoint != null  ) {
trackEdit=prevPoint.isTrackEditTrigger$() && this.getSelectedTrack$() != null  ;
coordsEdit=prevPoint.isCoordsEditTrigger$();
} else {
trackEdit=this.selectedSteps.getTracks$().length == 1;
}if (trackEdit && coordsEdit ) {
$I$(33,"postTrackAndCoordsEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl$org_opensourcephysics_controls_XMLControl",[this.getSelectedTrack$(), this.currentState, this.currentCoords]);
} else if (trackEdit) {
if (stepsChanged) {
if (!this.selectedSteps.isModified) {
this.selectedSteps.clear$();
}} else {
$I$(33,"postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl",[this.getSelectedTrack$(), this.currentState]);
}} else if (coordsEdit) {
$I$(33).postCoordsEdit$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl(this, this.currentState);
} else if (prevPoint != null  && prevPoint.isStepEditTrigger$() ) {
$I$(33).postStepEdit$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_controls_XMLControl(this.selectedStep, this.currentState);
} else if (Clazz.instanceOf(prevPoint, "org.opensourcephysics.cabrillo.tracker.LineProfileStep.LineEnd")) {
prevPoint.setTrackEditTrigger$Z(true);
}}if (this.selectedStep != null ) this.selectedStep.repaint$();
if (point == null ) {
this.selectedStep=null;
this.selectingPanelID=null;
this.currentState=null;
this.currentCoords=null;
} else {
var step=null;
var track=null;
var list=this.getTracks$();
for (var it=0, n=list.size$(); it < n; it++) {
track=list.get$I(it);
step=track.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel(point, this);
if (step != null ) break;
}
this.selectedStep=step;
if (step == null ) {
var ignore=this.autoTracker != null  && this.autoTracker.getWizard$().isVisible$()  && (Clazz.instanceOf(point, "org.opensourcephysics.cabrillo.tracker.AutoTracker.Corner") || Clazz.instanceOf(point, "org.opensourcephysics.cabrillo.tracker.AutoTracker.Handle") || Clazz.instanceOf(point, "org.opensourcephysics.cabrillo.tracker.AutoTracker.Target")  ) ;
if (!ignore) this.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(null);
} else {
this.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
step.repaint$();
if (prevPoint !== point ) {
var trackEdit=point.isTrackEditTrigger$();
var coordsEdit=point.isCoordsEditTrigger$();
this.pointState.setLocation$java_awt_geom_Point2D(point);
if (trackEdit && coordsEdit ) {
this.currentState=Clazz.new_($I$(34,1).c$$O,[track]);
this.currentCoords=Clazz.new_([this.getCoords$()],$I$(34,1).c$$O);
} else if (trackEdit) {
this.currentState=Clazz.new_($I$(34,1).c$$O,[track]);
if (!this.selectedSteps.contains$O(step) && !this.selectedSteps.isModified ) {
this.selectedSteps.clear$();
}} else if (coordsEdit) {
this.currentState=Clazz.new_([this.getCoords$()],$I$(34,1).c$$O);
} else if (point.isStepEditTrigger$()) {
this.currentState=Clazz.new_($I$(34,1).c$$O,[step]);
}}}this.selectingPanelID=this.panelID;
this.requestFocusInWindow$();
}if (this.selectedStep != null ) this.selectedSteps.add$org_opensourcephysics_cabrillo_tracker_Step(this.selectedStep);
this.selectedSteps.isModified=false;
this.firePropertyChange$S$O$O("selectedpoint", prevPoint, point);
});

Clazz.newMeth(C$, 'getSelectingPanelID$',  function () {
return this.selectingPanelID;
});

Clazz.newMeth(C$, 'getSelectedPoint$',  function () {
return this.selectedPoint;
});

Clazz.newMeth(C$, 'getSelectedStep$',  function () {
return this.selectedStep;
});

Clazz.newMeth(C$, 'setMagnification$D',  function (magnification) {
if (magnification == 0  || Double.isNaN$D(magnification) ) return;
var prevZoom=this.getMagnification$();
var prevSize=this.getPreferredSize$();
var p1=Clazz.new_($I$(19,1).c$$D$D,[0, 0]).getScreenPosition$org_opensourcephysics_media_core_VideoPanel(this);
if (prevSize.width == 1 && prevSize.height == 1 ) {
var w=this.getImageWidth$();
var h=this.getImageHeight$();
var p2=Clazz.new_($I$(19,1).c$$D$D,[w, h]).getScreenPosition$org_opensourcephysics_media_core_VideoPanel(this);
prevSize.width=p2.x - p1.x;
prevSize.height=p2.y - p1.y;
}var d;
if (magnification < 0 ) {
d=Clazz.new_($I$(31,1).c$$I$I,[1, 1]);
} else {
this.zoom=Math.min(Math.max(magnification, 0.1), 20.0);
var w=((this.imageWidth * this.zoom)|0);
var h=((this.imageHeight * this.zoom)|0);
d=Clazz.new_($I$(31,1).c$$I$I,[w, h]);
}this.setPreferredSize$java_awt_Dimension(d);
this.firePropertyChange$S$O$O("magnification", Double.valueOf$D(prevZoom), Double.valueOf$D(this.getMagnification$()));
var view=(this.getTFrame$() == null  ? null : this.getTFrame$().getMainView$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this));
if (view != null ) {
view.scrollPane.revalidate$();
view.scrollToZoomCenter$java_awt_Dimension$java_awt_Dimension$java_awt_Point(this.getPreferredSize$(), prevSize, p1);
this.eraseAll$();
}this.zoomBox.hide$();
});

Clazz.newMeth(C$, 'getMagnification$',  function () {
if (this.getPreferredSize$().width == 1) {
var w=this.getImageWidth$();
var h=this.getImageHeight$();
var size=this.getSize$();
return Math.min(size.width / w, size.height / h);
}return this.zoom;
});

Clazz.newMeth(C$, 'setImageWidth$D',  function (w) {
this.setImageSize$D$D(w, this.getImageHeight$());
});

Clazz.newMeth(C$, 'setImageHeight$D',  function (h) {
this.setImageSize$D$D(this.getImageWidth$(), h);
});

Clazz.newMeth(C$, 'setImageSize$D$D',  function (w, h) {
C$.superclazz.prototype.setImageWidth$D.apply(this, [w]);
C$.superclazz.prototype.setImageHeight$D.apply(this, [h]);
var mat=this.getMat$();
if (mat != null ) mat.refresh$();
if (this.getPreferredSize$().width > 10) {
this.setMagnification$D(this.getMagnification$());
}this.eraseAll$();
$I$(15).repaintT$java_awt_Component(this);
this.firePropertyChange$S$O$O("size", null, null);
});

Clazz.newMeth(C$, 'setClipSettingsVisible$Boolean',  function (vis) {
var clip=this.getPlayer$().getVideoClip$();
var clipControl=this.getPlayer$().getClipControl$();
var frame=this.getTFrame$();
var inspector=clip.getClipInspector$org_opensourcephysics_media_core_ClipControl$java_awt_Frame(clipControl, frame);
if ((vis == null  || vis === Boolean.FALSE  ) && inspector.isVisible$() ) {
inspector.setVisible$Z(false);
return inspector;
}if (vis === Boolean.FALSE ) {
return inspector;
}$I$(41,"setFonts$O$I",[inspector, $I$(41).getLevel$()]);
inspector.pack$();
var toolbar=this.getToolBar$Z(true);
if (!inspector.isPositioned) {
inspector.isPositioned=true;
var rect=this.getVisibleRect$();
var p=frame.getMainView$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this).scrollPane.getLocationOnScreen$();
var x=p.x + ((rect.width - inspector.getBounds$().width)/2|0);
var y=p.y + ((rect.height - inspector.getBounds$().height)/2|0);
inspector.setLocation$I$I(x, y);
var clipSettingsListener=((P$.TrackerPanel$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerPanel$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ComponentAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'componentHidden$java_awt_event_ComponentEvent',  function (e) {
this.$finals$.toolbar.refresh$S("clip settings hidden");
});
})()
), Clazz.new_($I$(49,1),[this, {toolbar:toolbar}],P$.TrackerPanel$6));
inspector.addComponentListener$java_awt_event_ComponentListener(clipSettingsListener);
}inspector.initialize$();
inspector.setVisible$Z(true);
toolbar.refresh$S("clip settings shown");
return inspector;
});

Clazz.newMeth(C$, 'setScrollPane$javax_swing_JScrollPane',  function (scroller) {
this.scrollPane=scroller;
});

Clazz.newMeth(C$, 'getPreferredScrollableViewportSize$',  function () {
return this.getPreferredSize$();
});

Clazz.newMeth(C$, 'getScrollableUnitIncrement$java_awt_Rectangle$I$I',  function (visibleRect, orientation, direction) {
return 20;
});

Clazz.newMeth(C$, 'getScrollableBlockIncrement$java_awt_Rectangle$I$I',  function (visibleRect, orientation, direction) {
var unitIncrement=this.getScrollableUnitIncrement$java_awt_Rectangle$I$I(visibleRect, orientation, direction);
if (orientation == 0) return visibleRect.width - unitIncrement;
return visibleRect.height - unitIncrement;
});

Clazz.newMeth(C$, 'getScrollableTracksViewportWidth$',  function () {
if (this.scrollPane == null ) return true;
var panelDim=this.getPreferredSize$();
var viewRect=this.scrollPane.getViewport$().getViewRect$();
return viewRect.width > panelDim.width;
});

Clazz.newMeth(C$, 'getScrollableTracksViewportHeight$',  function () {
if (this.scrollPane == null ) return true;
var panelDim=this.getPreferredSize$();
var viewRect=this.scrollPane.getViewport$().getViewRect$();
return viewRect.height > panelDim.height;
});

Clazz.newMeth(C$, 'isUnitsVisible$',  function () {
return this.unitsVisible && this.lengthUnit != null   && this.massUnit != null  ;
});

Clazz.newMeth(C$, 'setUnitsVisible$Z',  function (visible) {
if (visible == this.unitsVisible ) return;
this.unitsVisible=visible;
this.changed=true;
this.refreshTrackBar$();
this.coordStringBuilder.setUnitsAndPatterns$org_opensourcephysics_cabrillo_tracker_TTrack$S$S(this.getSelectedTrack$(), "x", "y");
if (this.getSelectedPoint$() != null ) {
this.getSelectedPoint$().showCoordinates$org_opensourcephysics_media_core_VideoPanel(this);
}this.firePropertyChange$S$Z$Z("units", false, true);
});

Clazz.newMeth(C$, 'getMassUnit$',  function () {
return this.massUnit;
});

Clazz.newMeth(C$, 'setMassUnit$S$Z',  function (unit, refresh) {
if (unit == null  || unit.trim$().equals$O("") ) return false;
unit=unit.trim$();
if (unit.equals$O(this.massUnit)) return false;
for (var c, $c = 0, $$c = unit.toCharArray$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (Character.isDigit$C(c)) {
return false;
}}
this.massUnit=unit;
if (refresh) {
this.refreshTrackBar$();
this.firePropertyChange$S$Z$Z("units", false, true);
}this.changed=true;
return true;
});

Clazz.newMeth(C$, 'getLengthUnit$',  function () {
return this.lengthUnit;
});

Clazz.newMeth(C$, 'setLengthUnit$S$Z',  function (unit, refresh) {
if (unit == null  || unit.trim$().equals$O("") ) return false;
unit=unit.trim$();
if (unit.equals$O(this.lengthUnit)) return false;
for (var c, $c = 0, $$c = unit.toCharArray$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (Character.isDigit$C(c)) {
return false;
}}
this.lengthUnit=unit;
if (refresh) {
this.refreshTrackBar$();
this.coordStringBuilder.setUnitsAndPatterns$org_opensourcephysics_cabrillo_tracker_TTrack$S$S(this.getSelectedTrack$(), "x", "y");
if (this.getSelectedPoint$() != null ) {
this.getSelectedPoint$().showCoordinates$org_opensourcephysics_media_core_VideoPanel(this);
}this.firePropertyChange$S$Z$Z("units", false, true);
}this.changed=true;
return true;
});

Clazz.newMeth(C$, 'setTimeUnit$S$Z',  function (unit, refresh) {
if (C$.superclazz.prototype.setTimeUnit$S.apply(this, [unit])) {
this.changed=true;
if (refresh) {
this.refreshTrackBar$();
var clip=this.getPlayer$().getVideoClip$();
var clipControl=this.getPlayer$().getClipControl$();
var frame=this.getTFrame$();
var inspector=clip.getClipInspector$org_opensourcephysics_media_core_ClipControl$java_awt_Frame(clipControl, frame);
inspector.setTimeUnit$S(unit);
this.firePropertyChange$S$Z$Z("units", false, true);
}return true;
}return false;
});

Clazz.newMeth(C$, 'isAnglesInRadians$',  function () {
return this.anglesInRadians;
});

Clazz.newMeth(C$, 'setAnglesInRadians$Z',  function (inRadians) {
if (this.anglesInRadians == inRadians ) return;
this.changed=true;
this.anglesInRadians=inRadians;
this.firePropertyChange$S$O$O("radian_angles", null, Boolean.valueOf$Z(inRadians));
});

Clazz.newMeth(C$, 'getUnits$org_opensourcephysics_cabrillo_tracker_TTrack$S',  function (track, $var) {
if (!this.isUnitsVisible$()) return "";
var dimensions=$I$(9).getVariableDimensions$org_opensourcephysics_cabrillo_tracker_TTrack$S(track, $var);
if (dimensions == null ) return "";
var sq=(dimensions.endsWith$S("TT") ? "\u00b2" : "");
var sp=" ";
switch (dimensions) {
case "T":
return sp + this.timeUnit;
case "M":
return sp + this.massUnit;
case "L":
return sp + this.lengthUnit;
case "L/T":
case "L/TT":
return sp + this.lengthUnit + "/" + this.timeUnit + sq ;
case "ML/T":
case "ML/TT":
return sp + this.massUnit + "\u00b7" + this.lengthUnit + "/" + this.timeUnit + sq ;
case "MLL/TT":
return sp + this.massUnit + "\u00b7" + this.lengthUnit + sq + "/" + this.timeUnit + sq ;
case "A/T":
case "A/TT":
var angUnit=this.isAnglesInRadians$() ? "" : "\u00b0";
return sp + angUnit + "/" + this.timeUnit + sq ;
}
return "";
});

Clazz.newMeth(C$, 'isShowCoordinates$',  function () {
return this.showCoordinates && this.getSelectedPoint$() == null  ;
});

Clazz.newMeth(C$, 'setMessage$S',  function (msg) {
if (!$I$(1).isJS && !$I$(1).isMac$() ) C$.superclazz.prototype.setMessage$S.apply(this, [msg]);
});

Clazz.newMeth(C$, 'importData$S$O',  function (dataString, source) {
this.importDataAsync$S$O$Runnable(dataString, source, null);
});

Clazz.newMeth(C$, 'importDataAsync$S$O$Runnable',  function (dataString, source, whenDone) {
if (dataString == null ) {
if (this.isAutoPaste) return;
$I$(7,"showMessageDialog$java_awt_Component$O$S$I",[this.frame, $I$(8).getString$S("TrackerPanel.Dialog.NoData.Message"), $I$(8).getString$S("TrackerPanel.Dialog.NoData.Title"), 2]);
return;
}var datasetManager=$I$(16).parseData$S$S(dataString, null);
if (datasetManager == null ) {
var path=dataString;
this.importDataAsync$S$O$Runnable($I$(50).getString$S(path), path, whenDone);
return;
}var dt=p$1.loadIntoDataTrack$org_opensourcephysics_display_DatasetManager$O$Z.apply(this, [datasetManager[0], source, this.isAutoPaste]);
if (Clazz.instanceOf(dt, "org.opensourcephysics.cabrillo.tracker.ParticleDataTrack")) {
(dt).prevDataString=dataString;
}if (whenDone != null ) whenDone.run$();
});

Clazz.newMeth(C$, 'loadIntoDataTrack$org_opensourcephysics_display_DatasetManager$O$Z',  function (data, source, reloadOnly) {
if (data == null ) return null;
var dataTrack=$I$(39).getTrackForData$org_opensourcephysics_display_DatasetManager$org_opensourcephysics_cabrillo_tracker_TrackerPanel(data, this);
try {
if (dataTrack == null  && !reloadOnly ) {
dataTrack=Clazz.new_($I$(39,1).c$$org_opensourcephysics_display_DatasetManager$O,[data, source]);
dataTrack.setColorToDefault$I(this.getDrawablesTemp$Class(Clazz.getClass($I$(18))).size$());
this.clearTemp$();
this.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack(dataTrack);
this.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
this.selectedSteps.clear$();
this.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(dataTrack);
dataTrack.getDataClip$().setClipLength$I(-1);
var videoClip=this.getPlayer$().getVideoClip$();
dataTrack.setStartFrame$I(videoClip.getStartFrameNumber$());
dataTrack.firePropertyChange$S$O$O("data", null, null);
dataTrack.getModelBuilder$().setVisible$Z(true);
var dt=dataTrack;
$I$(51,"invokeLater$Runnable",[((P$.TrackerPanel$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerPanel$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.$finals$.dt.firePropertyChange$S$O$O.apply(this.$finals$.dt, ["data", null, null]);
});
})()
), Clazz.new_(P$.TrackerPanel$lambda2.$init$,[this, {dt:dt}]))]);
} else if (dataTrack != null  && (dataTrack.isAutoPasteEnabled$() || !this.isAutoPaste ) ) {
dataTrack.setData$org_opensourcephysics_display_DatasetManager(data);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(7,"showMessageDialog$java_awt_Component$O$S$I",[this.frame, $I$(8).getString$S("TrackerPanel.Dialog.Exception.Message") + ":\n" + e.getClass$().getSimpleName$() + ": " + e.getMessage$() , $I$(8).getString$S("TrackerPanel.Dialog.Exception.Title"), 2]);
$I$(52,"warning$S",[e.getClass$().getSimpleName$() + ": " + e.getMessage$() ]);
dataTrack=null;
} else {
throw e;
}
}
return dataTrack;
}, p$1);

Clazz.newMeth(C$, 'refreshTrackData$I',  function (mode) {
var auto=this.isAutoRefresh;
this.isAutoRefresh=true;
this.firePropertyChange$S$O$O("data", Integer.valueOf$I(mode), null);
this.isAutoRefresh=auto;
});

Clazz.newMeth(C$, 'refreshDecimalSeparators$',  function () {
C$.superclazz.prototype.refreshDecimalSeparators$.apply(this, []);
if (this.coordStringBuilder != null ) this.coordStringBuilder.refreshDecimalSeparators$();
if (this.getSelectedPoint$() != null ) {
this.getSelectedPoint$().showCoordinates$org_opensourcephysics_media_core_VideoPanel(this);
}var tracks=this.getTracksTemp$();
for (var i=0, n=tracks.size$(); i < n; i++) {
tracks.get$I(i).refreshDecimalSeparators$();
}
tracks.clear$();
this.refreshTrackData$I(8585216);
if (this.modelBuilder != null ) {
this.modelBuilder.repaint$();
}if (this.dataBuilder != null ) {
this.dataBuilder.repaint$();
}var tool=$I$(16).getTool$Z(false);
if (tool != null  && this.getTFrame$() != null   && this.frame.getSelectedPanel$() === this  ) {
tool.refreshDecimalSeparators$();
}var tapes=this.getDrawablesTemp$Class(Clazz.getClass($I$(53)));
for (var i=0, n=tapes.size$(); i < n; i++) {
var tape=tapes.get$I(i);
tape.repaint$Integer(this.panelID);
}
tapes.clear$();
var prots=this.getDrawablesTemp$Class(Clazz.getClass($I$(54)));
for (var i=0, n=prots.size$(); i < n; i++) {
var p=prots.get$I(i);
p.repaint$Integer(this.panelID);
}
prots.clear$();
});

Clazz.newMeth(C$, 'getMouseEvent$',  function () {
return this.mouseEvent;
});

Clazz.newMeth(C$, 'getPopupMenu$',  function () {
if (!$I$(6).allowMenuRefresh) return null;
if (this.getTFrame$() == null ) return C$.superclazz.prototype.getPopupMenu$.apply(this, []);
var mainView=this.getTFrame$().getMainView$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
return mainView.getPopupMenu$();
});

Clazz.newMeth(C$, 'getPopup$',  function () {
return (this.popup != null  ? this.popup : (this.popup=((P$.TrackerPanel$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerPanel$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JPopupMenu'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
if (!vis) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].zoomBox.hide$();
}C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
});
})()
), Clazz.new_($I$(55,1),[this, null],P$.TrackerPanel$7))));
});

Clazz.newMeth(C$, 'hidePopup$',  function () {
if (this.displayedPopup != null ) {
try {
this.displayedPopup.setVisible$Z(false);
} catch (t) {
}
this.displayedPopup=null;
}if (this.popup != null  && this.popup.isVisible$() ) {
try {
this.popup.setVisible$Z(false);
} catch (t) {
}
}try {
var tc=$I$(56).getControl$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
if (tc != null  && tc.popup != null   && tc.popup.isVisible$() ) {
tc.popup.setVisible$Z(false);
}} catch (t) {
}
try {
$I$(57).defaultManager$().clearSelectedPath$();
} catch (t) {
}
if ($I$(1).isJS) {
$I$(58).closeAllMenus$();
}});

Clazz.newMeth(C$, 'isPopupVisible$',  function () {
if (this.displayedPopup != null  && this.displayedPopup.isVisible$() ) {
return true;
}if (this.popup != null  && this.popup.isVisible$() ) {
return true;
}if ($I$(1).isJS) return $I$(58).haveAnyVisibleMenusInAnyApplication$();
return false;
});

Clazz.newMeth(C$, 'getUnitsDialog$',  function () {
if (this.unitsDialog == null ) {
this.unitsDialog=Clazz.new_($I$(59,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[this]);
this.unitsDialog.setFontLevel$I($I$(41).getLevel$());
var dim=$I$(37).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.unitsDialog.getBounds$().width)/2|0);
var y=((dim.height - this.unitsDialog.getBounds$().height)/2|0);
this.unitsDialog.setLocation$I$I(x, y);
} else {
this.unitsDialog.setFontLevel$I($I$(41).getLevel$());
}return this.unitsDialog;
});

Clazz.newMeth(C$, 'getAttachmentDialog$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
if (this.attachmentDialog == null ) {
this.attachmentDialog=Clazz.new_($I$(60,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack,[track]);
this.attachmentDialog.setFontLevel$I($I$(41).getLevel$());
var dim=$I$(37).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.attachmentDialog.getBounds$().width)/2|0);
var y=((dim.height - this.attachmentDialog.getBounds$().height)/2|0);
this.attachmentDialog.setLocation$I$I(x, y);
} else {
this.attachmentDialog.setFontLevel$I($I$(41).getLevel$());
this.attachmentDialog.setMeasuringTool$org_opensourcephysics_cabrillo_tracker_TTrack(track);
}return this.attachmentDialog;
});

Clazz.newMeth(C$, 'getPasteDataDialog$',  function () {
if (this.pasteDataDialog == null ) {
this.pasteDataDialog=Clazz.new_($I$(61,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[this]);
}this.pasteDataDialog.setFontLevel$I($I$(41).getLevel$());
return this.pasteDataDialog;
});

Clazz.newMeth(C$, 'getPlotGuestDialog$org_opensourcephysics_cabrillo_tracker_TrackPlottingPanel',  function (plot) {
if (this.guestsDialog == null ) {
this.guestsDialog=Clazz.new_($I$(62,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[this]);
this.guestsDialog.setPlot$org_opensourcephysics_cabrillo_tracker_TrackPlottingPanel(plot);
$I$(41,"setFonts$O$I",[this.guestsDialog, $I$(41).getLevel$()]);
var dim=$I$(37).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.guestsDialog.getBounds$().width)/2|0);
var y=((dim.height - this.guestsDialog.getBounds$().height)/2|0);
this.guestsDialog.setLocation$I$I(x, y);
} else {
this.guestsDialog.setPlot$org_opensourcephysics_cabrillo_tracker_TrackPlottingPanel(plot);
$I$(41,"setFonts$O$I",[this.guestsDialog, $I$(41).getLevel$()]);
}this.guestsDialog.pack$();
return this.guestsDialog;
});

Clazz.newMeth(C$, 'getDataBuilder$',  function () {
if (this.dataBuilder == null ) {
this.dataBuilder=Clazz.new_($I$(63,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[this]);
this.dataBuilder.setHelpPath$S("data_builder_help.html");
this.dataBuilder.addPropertyChangeListener$S$java_beans_PropertyChangeListener("panel", this);
this.dataBuilder.addPropertyChangeListener$S$java_beans_PropertyChangeListener("function", this);
this.dataBuilder.addPropertyChangeListener$S$java_beans_PropertyChangeListener("description", this);
this.dataBuilder.addPropertyChangeListener$S$java_beans_PropertyChangeListener("ft_visible", this);
this.dataBuilder.setFontLevel$I($I$(41).getLevel$());
}return this.dataBuilder;
});

Clazz.newMeth(C$, 'getAlgorithmDialog$',  function () {
if (this.algorithmDialog == null ) {
this.algorithmDialog=Clazz.new_($I$(64,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[this]);
this.algorithmDialog.setFontLevel$I($I$(41).getLevel$());
}return this.algorithmDialog;
});

Clazz.newMeth(C$, 'getFilterDialog$',  function () {
if (this.filterDialog == null ) {
this.filterDialog=Clazz.new_($I$(65,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[this]);
}this.filterDialog.setFontLevel$I($I$(41).getLevel$());
return this.filterDialog;
});

Clazz.newMeth(C$, 'getNextName$S$S',  function (name, connector) {
var p=name + connector;
var list=this.getTracksTemp$();
var n=list.size$();
var proposed=null;
for (var j=0; j < 10; j++) {
for (var i=65; i <= 90 && proposed == null  ; i++) {
proposed=p + String.fromCharCode(i);
for (var k=0; k < j; k++) {
proposed+=String.fromCharCode(i);
}
for (var it=0; it < n; it++) {
if (proposed.equals$O(list.get$I(it).getName$())) {
proposed=null;
break;
}}
}
}
this.clearTemp$();
return proposed;
});

Clazz.newMeth(C$, 'restoreViews$',  function () {
var frame=this.getTFrame$();
if (frame != null ) {
var n=this.getMaximizedView$();
switch (n) {
case -1:
return;
case 4:
this.getTrackBar$Z(true).maximizeButton.doClick$I(0);
break;
default:
var viewChooser=frame.getViewChoosers$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this)[n];
viewChooser.restore$();
break;
}
}});

Clazz.newMeth(C$, 'setCursorForMarking$Z$java_awt_event_InputEvent',  function (invert, e) {
if (p$1.isClipAdjusting.apply(this, []) || $I$(6,"isZoomInCursor$java_awt_Cursor",[this.getCursor$()]) || $I$(6,"isZoomOutCursor$java_awt_Cursor",[this.getCursor$()])  ) return false;
this.cursorType=0;
var markable=false;
var marking=false;
this.selectedTrack=this.getSelectedTrack$();
var n=this.getFrameNumber$();
if (this.selectedTrack != null ) {
if (Clazz.instanceOf(this.selectedTrack, "org.opensourcephysics.cabrillo.tracker.MarkingRequired")) {
var tool=this.selectedTrack;
invert=invert && !tool.requiresMarking$() ;
}markable=!((this.selectedTrack.isStepComplete$I(n) && !invert ) || this.selectedTrack.isLocked$() || this.isPopupVisible$()  );
marking=markable && (this.selectedTrack.isMarkByDefault$() || invert ) ;
}var iad=this.getTracksTemp$().isEmpty$() || this.mouseEvent == null   ? null : this.getInteractive$();
this.clearTemp$();
if (marking) {
var c=this.selectedTrack.getMarkingCursor$java_awt_event_InputEvent(e);
if (c === $I$(66).autoTrackCursor ) this.cursorType=2;
 else if (c === $I$(66).autoTrackMarkCursor ) this.cursorType=3;
 else if (c === $I$(66).markPointCursor ) this.cursorType=1;
this.setMouseCursor$java_awt_Cursor(c);
if ($I$(6).showHints) {
var msg=null;
switch (this.selectedTrack.ttype) {
case 5:
msg=(this.selectedTrack.getStep$I(n) != null  ? "PointMass.Remarking.Hint" : this.selectedTrack.isMarkByDefault$() ? "PointMass.Hint.Automarking" : "PointMass.Hint.Marking");
break;
case 9:
msg=(this.selectedTrack.getStep$I(n) == null  ? "Vector.Hint.Marking" : "Vector.Remarking.Hint");
break;
case 7:
msg="RGBRegion.Hint.Marking";
break;
case 3:
msg="LineProfile.Hint.Marking";
break;
}
if (msg != null ) this.setMessage$S($I$(8).getString$S(msg));
} else this.setMessage$S("");
} else if (Clazz.instanceOf(iad, "org.opensourcephysics.media.core.TPoint")) {
this.setMouseCursor$java_awt_Cursor($I$(3).getPredefinedCursor$I(12));
var list=this.getTracksTemp$();
for (var it=0, ni=list.size$(); it < ni; it++) {
var track=list.get$I(it);
var step=track.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel(iad, this);
if (step != null ) {
this.setMessage$S(track.getMessage$());
break;
}}
this.clearTemp$();
} else {
this.setMouseCursor$java_awt_Cursor($I$(3).getDefaultCursor$());
this.getExportableTracks$();
if ($I$(6).showHints && this.selectedTrack != null  ) {
this.setMessage$S(this.selectedTrack.getMessage$());
} else if (!$I$(6).startupHintShown || this.getVideo$() != null   || (this.exportableTracks != null  && !this.exportableTracks.isEmpty$() ) ) {
$I$(6).startupHintShown=false;
if (!$I$(6).showHints) this.setMessage$S("");
 else if (this.getVideo$() == null ) this.setMessage$S($I$(8).getString$S("TrackerPanel.NoVideo.Hint"));
 else if (this.hasToolBar$() && this.getToolBar$Z(true).notYetCalibrated ) {
if (this.getVideo$().getWidth$() == 720  && this.getVideo$().getFilterStack$().isEmpty$() ) this.setMessage$S($I$(8).getString$S("TrackerPanel.DVVideo.Hint"));
 else if (this.getPlayer$().getVideoClip$().isDefaultState$()) this.setMessage$S($I$(8).getString$S("TrackerPanel.SetClip.Hint"));
 else this.setMessage$S($I$(8).getString$S("TrackerPanel.CalibrateVideo.Hint"));
} else if (this.getAxes$() != null  && this.getAxes$().notyetShown ) this.setMessage$S($I$(8).getString$S("TrackerPanel.ShowAxes.Hint"));
 else if (this.exportableTracks == null  || this.exportableTracks.isEmpty$() ) this.setMessage$S($I$(8).getString$S("TrackerPanel.NoTracks.Hint"));
 else this.setMessage$S("");
}}return marking;
});

Clazz.newMeth(C$, 'isClipAdjusting',  function () {
return (this.getPlayer$() != null  && this.getPlayer$().getVideoClip$().isAdjusting$() );
}, p$1);

Clazz.newMeth(C$, 'handleKeyPress$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 112) {
var frame=this.getTFrame$();
if (frame != null ) {
var key=null;
if (this.selectedTrack == null ) {
key="help";
} else {
switch (this.selectedTrack.ttype) {
case 0:
key="calibration";
break;
case 1:
break;
case 2:
key="axes";
break;
case 3:
key="profile";
break;
case 4:
key="offset";
break;
case 10:
break;
case 5:
key=(Clazz.instanceOf(this.selectedTrack, "org.opensourcephysics.cabrillo.tracker.CenterOfMass") ? "cm" : Clazz.instanceOf(this.selectedTrack, "org.opensourcephysics.cabrillo.tracker.ParticleModel") ? "particle" : "pointmass");
break;
case 6:
break;
case 7:
key="rgbregion";
break;
case 8:
key="tape";
break;
case 9:
key=(Clazz.instanceOf(this.selectedTrack, "org.opensourcephysics.cabrillo.tracker.VectorSum") ? "vectorsum" : "vector");
break;
}
}if (key != null ) frame.showHelp$S$I(key, 0);
}return;
}if (e.getKeyCode$() == 32) {
var track=this.getSelectedTrack$();
if (track != null ) {
var step=this.getSelectedStep$();
if (step != null ) {
if (e.isControlDown$() || e.isShiftDown$() ) step=track.getPreviousVisibleStep$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(step, this);
 else step=track.getNextVisibleStep$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(step, this);
if (step != null ) {
var p=step.getDefaultPoint$();
p.showCoordinates$org_opensourcephysics_media_core_VideoPanel(this);
this.setSelectedPoint$org_opensourcephysics_media_core_TPoint(p);
}}}return;
}if (e.getKeyCode$() == 127) {
if (this.selectedPoint != null  && this.selectingPanelID === this.panelID  ) {
this.deletePoint$org_opensourcephysics_media_core_TPoint(this.selectedPoint);
} else {
this.deleteSelectedSteps$();
}return;
}var delta=e.isShiftDown$() ? 10 : 1;
var dx=0;
var dy=0;
switch (e.getKeyCode$()) {
case 38:
dy=-delta;
break;
case 40:
dy=delta;
break;
case 39:
dx=delta;
break;
case 37:
dx=-delta;
break;
}
if (dx == 0  && dy == 0  ) return;
this.selectedSteps.setChanged$Z(true);
for (var step, $step = this.selectedSteps.iterator$(); $step.hasNext$()&&((step=($step.next$())),1);) {
var point=step.points[0];
if (point === this.selectedPoint ) continue;
var p=point.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(this);
p.setLocation$D$D(p.x + dx, p.y + dy);
point.setScreenPosition$I$I$org_opensourcephysics_media_core_VideoPanel$java_awt_event_InputEvent(p.x, p.y, this, e);
}
if (this.selectedPoint != null ) {
var p=this.selectedPoint.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(this);
p.setLocation$D$D(p.x + dx, p.y + dy);
this.selectedPoint.setScreenPosition$I$I$org_opensourcephysics_media_core_VideoPanel$java_awt_event_InputEvent(p.x, p.y, this, e);
}if (this.selectedPoint != null ) this.selectedPoint.showCoordinates$org_opensourcephysics_media_core_VideoPanel(this);
 else this.setMessage$S$I("", 0);
if (this.selectedStep == null ) $I$(15).repaintT$java_awt_Component(this);
});

Clazz.newMeth(C$, 'getEnabled$',  function () {
return (this.$enabled == null  ? (this.$enabled=Clazz.new_($I$(21,1))) : this.$enabled);
});

Clazz.newMeth(C$, 'setEnabled$java_util_Set',  function (enable) {
if (enable != null ) {
this.$enabled=this.getEnabled$();
this.$enabled.clear$();
this.$enabled.addAll$java_util_Collection(enable);
++this.enabledCount;
}});

Clazz.newMeth(C$, 'isEnabled$S',  function (key) {
if (key == null ) return false;
return this.getEnabled$().contains$O(key);
});

Clazz.newMeth(C$, 'setEnabled$S$Z',  function (key, enable) {
if (key == null ) return;
if (enable) this.getEnabled$().add$O(key);
 else this.getEnabled$().remove$O(key);
});

Clazz.newMeth(C$, 'isCreateTracksEnabled$',  function () {
return this.isEnabled$S("new.pointMass") || this.isEnabled$S("new.cm") || this.isEnabled$S("new.vector") || this.isEnabled$S("new.vectorSum") || this.isEnabled$S("new.lineProfile") || this.isEnabled$S("new.RGBRegion") || this.isEnabled$S("new.tapeMeasure") || this.isEnabled$S("new.protractor") || this.isEnabled$S("new.circleFitter") || this.isEnabled$S("new.analyticParticle") || this.isEnabled$S("new.dynamicParticle") || this.isEnabled$S("new.dynamicTwoBody") || this.isEnabled$S("new.dataTrack")  ;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var doSnap=false;
var isAdjusting=false;
var name=e.getPropertyName$();
if ($I$(6).timeLogEnabled) $I$(6,"logTime$S",[this.getClass$().getSimpleName$() + this.hashCode$() + " property change " + name ]);
var track;
var model;
var mbar;
switch (name) {
case "size":
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
this.getTFrame$().holdPainting$Z(false);
this.notifyLoadingComplete$();
break;
case "asyncVideoReady":
if (this.loader == null  || (this.loader).clip.getVideo$() !== e.getSource$()  ) {
return;
}C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
this.getTFrame$().holdPainting$Z(false);
this.notifyLoadingComplete$();
break;
case "step":
case "steps":
track=e.getSource$();
if (e.getOldValue$() !== $I$(9).HINT_STEPS_SELECTED ) track.invalidateData$O(Boolean.FALSE);
if (!track.isDependent$()) {
this.changed=true;
}if (track === this.getSelectedTrack$() ) {
var p=this.getSelectedPoint$();
if (p != null ) p.showCoordinates$org_opensourcephysics_media_core_VideoPanel(this);
}$I$(15).repaintT$java_awt_Component(this);
if (name == "steps") {
this.refreshTrackBar$();
}break;
case "mass":
this.firePropertyChange$S$O$O("mass", null, null);
break;
case "name":
this.refreshNotesDialog$();
break;
case "footprint":
var footprint=e.getNewValue$();
if (Clazz.instanceOf(footprint, "org.opensourcephysics.cabrillo.tracker.ArrowFootprint")) this.firePropertyChange$S$O$O("mass", null, null);
break;
case "videoclip":
var oldCoords=this.coords;
this.coords.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
this.coords.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
this.firePropertyChange$S$O$O("coords", oldCoords, this.coords);
this.firePropertyChange$S$O$O("video", null, null);
var mat=this.getMat$();
if (mat != null ) {
mat.invalidate$();
}if (this.video != null ) {
this.video.setProperty$S$O("measure", null);
if (Clazz.instanceOf(this.video, "org.opensourcephysics.media.mov.SmoothPlayable")) {
(this.video).setSmoothPlay$Z(!$I$(6).isXuggleFast);
}}doSnap=true;
this.changed=true;
break;
case "stepnumber":
this.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
this.selectedSteps.clear$();
if (this.getVideo$() != null  && !this.getVideo$().getFilterStack$().isEmpty$() ) {
var filters=this.getVideo$().getFilterStack$().getFilters$();
for (var i=0, n=filters.size$(); i < n; i++) {
var next=filters.get$I(i);
if (Clazz.instanceOf(next, "org.opensourcephysics.media.core.SumFilter")) {
(next).addNextImage$();
}}
}$I$(15).repaintT$java_awt_Component(this);
var grabber=$I$(67).VIDEO_CAPTURE_TOOL;
if (grabber != null  && grabber.isVisible$()  && grabber.isRecording$() ) {
$I$(51,"invokeLater$Runnable",[((P$.TrackerPanel$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackerPanel$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
$I$(67).getTool$().addFrame$java_awt_image_BufferedImage.apply($I$(67).getTool$(), [this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].getMattedImage$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], [])]);
});
})()
), Clazz.new_(P$.TrackerPanel$lambda3.$init$,[this, null]))]);
}var invertCursor=this.isShiftKeyDown;
this.setCursorForMarking$Z$java_awt_event_InputEvent(invertCursor, null);
this.firePropertyChange$S$O$O("stepnumber", null, e.getNewValue$());
doSnap=true;
break;
case "coords":
this.coords.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
this.coords=e.getNewValue$();
this.coords.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
this.firePropertyChange$S$O$O("coords", null, this.coords);
this.firePropertyChange$S$O$O("transform", null, this.coords);
doSnap=true;
break;
case "image":
this.firePropertyChange$S$O$O("image", null, null);
mbar=this.getMenuBar$Z(false);
if (mbar != null ) mbar.checkMatSize$();
$I$(15).repaintT$java_awt_Component(this);
this.changed=true;
break;
case "filterChanged":
var filter=e.getNewValue$();
var prevState=e.getOldValue$();
var control=Clazz.new_($I$(34,1).c$$S,[prevState]);
$I$(33).postFilterEdit$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_Filter$org_opensourcephysics_controls_XMLControl(this, filter, control);
break;
case "videoVisible":
this.firePropertyChange$S$O$O("videovisible", null, null);
break;
case "transform":
this.changed=true;
doSnap=true;
var tracks=this.getUserTracks$();
for (var i=0; i < tracks.size$(); i++) {
tracks.get$I(i).dataValid=false;
}
this.firePropertyChange$S$O$O("transform", null, null);
break;
case "locked":
this.firePropertyChange$S$O$O("locked", null, null);
break;
case "playing":
if (!(e.getNewValue$()).booleanValue$()) {
var list=this.getDrawablesTemp$Class(Clazz.getClass($I$(68)));
for (var m=0, n=list.size$(); m < n; m++) {
list.get$I(m).refreshDerivsIfNeeded$();
}
list.clear$();
}break;
case "adjusting":
isAdjusting=true;
case "startframe":
case "stepsize":
case "stepcount":
case "starttime":
case "frameduration":
this.changed=true;
if (this.modelBuilder != null ) this.modelBuilder.refreshSpinners$();
if (this.getMat$() != null ) {
this.getMat$().invalidate$();
}if (this.getVideo$() != null ) {
this.getVideo$().setProperty$S$O("measure", null);
}this.firePropertyChange$S$O$O("data", e.getOldValue$(), isAdjusting ? e.getNewValue$() : null);
this.firePropertyChange$S$O$O(name, e.getSource$(), name == "adjusting" ? e.getNewValue$() : null);
if (this.getSelectedPoint$() != null ) {
this.getSelectedPoint$().showCoordinates$org_opensourcephysics_media_core_VideoPanel(this);
var frame=this.getTFrame$();
if (frame != null ) {
this.refreshTrackBar$();
}}var list=this.getUserTracks$();
for (var it=0, ni=list.size$(); it < ni; it++) {
list.get$I(it).erase$Integer(this.panelID);
}
$I$(15).repaintT$java_awt_Component(this);
break;
case "framecount":
if (this.getVideo$() == null  && this.modelBuilder != null  ) this.modelBuilder.refreshSpinners$();
break;
case "description":
case "function":
this.changed=true;
this.firePropertyChange$S$O$O("function", null, e.getNewValue$());
break;
case "panel":
if (e.getSource$() === this.modelBuilder ) {
var panel=e.getNewValue$();
if (panel != null ) {
track=this.getTrack$S(panel.getName$());
if (track != null ) {
model=track;
this.modelBuilder.setSpinnerStartFrame$O(Integer.valueOf$I(model.getStartFrame$()));
var end=model.getEndFrame$();
if (end == 2147483647) {
end=this.getPlayer$().getVideoClip$().getLastFrameNumber$();
}this.modelBuilder.setSpinnerEndFrame$O(Integer.valueOf$I(end));
}}this.modelBuilder.refreshSpinners$();
var title=$I$(8).getString$S("TrackerPanel.ModelBuilder.Title");
panel=this.modelBuilder.getSelectedPanel$();
if (panel != null ) {
track=this.getTrack$S(panel.getName$());
if (track != null ) {
var type=track.getClass$().getSimpleName$();
title+=": " + $I$(8).getString$S(type + ".Builder.Title");
}}this.modelBuilder.setTitle$S(title);
}break;
case "model_start":
model=e.getSource$();
if (model.getName$().equals$O(this.getModelBuilder$().getSelectedName$())) {
this.modelBuilder.setSpinnerStartFrame$O(e.getNewValue$());
}break;
case "model_end":
model=e.getSource$();
if (model.getName$().equals$O(this.getModelBuilder$().getSelectedName$())) {
var end=(e.getNewValue$()).$c();
if (end == 2147483647) {
end=this.getPlayer$().getVideoClip$().getLastFrameNumber$();
}this.modelBuilder.setSpinnerEndFrame$O(Integer.valueOf$I(end));
}break;
case "format":
this.firePropertyChange$S$O$O("format", null, null);
break;
case "fixed_origin":
case "fixed_angle":
case "fixed_scale":
this.changed=true;
this.firePropertyChange$S$O$O(name, e.getOldValue$(), e.getNewValue$());
break;
case "ft_visible":
if (e.getSource$() === this.dataBuilder ) this.dataToolVisible=(e.getNewValue$()).booleanValue$();
break;
case "filter_visible":
this.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
this.selectedSteps.clear$();
break;
case "perspective":
if (e.getNewValue$() != null ) {
var filt=e.getNewValue$();
track=Clazz.new_($I$(38,1).c$$org_opensourcephysics_media_core_PerspectiveFilter,[filt]);
this.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
} else if (e.getOldValue$() != null ) {
var filt1=e.getOldValue$();
var trk=$I$(38).filterMap.get$O(filt1);
if (trk != null ) {
this.removeTrack$org_opensourcephysics_cabrillo_tracker_TTrack(trk);
trk.dispose$();
filt1.setVideoPanel$org_opensourcephysics_media_core_VideoPanel(null);
}}break;
case "stepbutton":
case "backbutton":
case "slider":
case "inframe":
case "outframe":
if ($I$(6).showHints) {
$I$(6).startupHintShown=false;
var msg="";
if (e.getNewValue$() === Boolean.TRUE ) {
switch (name) {
case "stepbutton":
msg=($I$(8).getString$S("VideoPlayer.Step.Hint"));
break;
case "backbutton":
msg=($I$(8).getString$S("VideoPlayer.Back.Hint"));
break;
case "slider":
msg=($I$(8).getString$S("VideoPlayer.Slider.Hint"));
break;
case "inframe":
msg=($I$(8).getString$S("VideoPlayer.StartFrame.Hint"));
break;
case "outframe":
msg=($I$(8).getString$S("VideoPlayer.EndFrame.Hint"));
break;
}
}this.setMessage$S(msg);
}}
if (doSnap) {
var n=this.getFrameNumber$();
this.getSnapPoint$().setXY$D$D(this.coords.getOriginX$I(n), this.coords.getOriginY$I(n));
}if ($I$(6).timeLogEnabled) $I$(6).logTime$S("end TrackerPanel property change " + name);
});

Clazz.newMeth(C$, 'setImageBorder$D',  function (borderFraction) {
C$.superclazz.prototype.setImageBorder$D.apply(this, [borderFraction]);
this.defaultImageBorder=this.getImageBorder$();
});

Clazz.newMeth(C$, 'getFilePath$',  function () {
if (this.defaultSavePath == null ) return C$.superclazz.prototype.getFilePath$.apply(this, []);
return this.defaultSavePath;
});

Clazz.newMeth(C$, 'scale$',  function () {
var mat=this.getMatBounds$();
if (mat != null ) {
this.xOffset=mat.x;
this.yOffset=mat.y;
}C$.superclazz.prototype.scale$.apply(this, []);
if (!this.pixelTransform.equals$O(this.prevPixelTransform)) {
if (this.prevPixelTransform == null ) this.prevPixelTransform=Clazz.new_($I$(69,1));
this.getPixelTransform$java_awt_geom_AffineTransform(this.prevPixelTransform);
this.eraseAll$();
}if (this.trackControl == null  && this.getTFrame$() != null  ) this.trackControl=$I$(56).getControl$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
});

Clazz.newMeth(C$, 'setMouseCursor$java_awt_Cursor',  function (cursor) {
if ($I$(2).isDrawing$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this) && cursor === $I$(3).getPredefinedCursor$I(12)  ) {
return;
}if (cursor !== $I$(3).getPredefinedCursor$I(1)  && !$I$(6).isZoomInCursor$java_awt_Cursor(cursor)  && !$I$(6).isZoomOutCursor$java_awt_Cursor(cursor) ) {
var useCrosshair=$I$(1).isJS;
var c=useCrosshair && this.cursorType > 0  ? $I$(3).getPredefinedCursor$I(1) : cursor;
C$.superclazz.prototype.setMouseCursor$java_awt_Cursor.apply(this, [c]);
}});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
C$.superclazz.prototype.setFontLevel$I.apply(this, [level]);
if (this.getTFrame$() == null ) return;
var views=this.frame.getTViews$Integer$I$java_util_List(this.panelID, -1, null);
for (var i=views.size$(); --i >= 0; ) {
views.get$I(i).refresh$();
}
var menubar=this.getMenuBar$Z(false);
$I$(41).setFonts$O$I(menubar, level);
this.getTrackBar$Z(true).setFontLevel$I(level);
this.refreshTrackBar$();
var list=this.getTracksTemp$();
for (var it=0, n=list.size$(); it < n; it++) {
list.get$I(it).setFontLevel$I(level);
}
$I$(56).getControl$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this).refresh$();
if (this.modelBuilder != null ) {
this.modelBuilder.setFontLevel$I(level);
}if (this.dataBuilder != null ) {
this.dataBuilder.setFontLevel$I(level);
}if (this.autoTracker != null ) {
this.autoTracker.getWizard$().setFontLevel$I(level);
}if (this.attachmentDialog != null ) {
this.attachmentDialog.setFontLevel$I(level);
}if (this.filterDialog != null ) {
this.filterDialog.setFontLevel$I(level);
}var drawer=$I$(2).getDrawer$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
if (drawer.drawingControl != null  && drawer.drawingControl.isVisible$() ) {
drawer.drawingControl.setFontLevel$I(level);
}var video=this.getVideo$();
if (video != null ) {
var filters=video.getFilterStack$().getFilters$();
for (var i=0, n=filters.size$(); i < n; i++) {
var filter=filters.get$I(i);
var inspector=filter.getInspector$();
if (inspector != null ) {
$I$(41).setFonts$O$I(inspector, level);
if (Clazz.instanceOf(filter, "org.opensourcephysics.media.core.BaselineFilter")) {
var bf=filter;
bf.resizeThumbnail$();
} else inspector.pack$();
}}
}if (this.algorithmDialog != null ) {
this.algorithmDialog.setFontLevel$I(level);
}});

Clazz.newMeth(C$, 'isZoomEvent$java_awt_event_MouseEvent',  function (e) {
return C$.superclazz.prototype.isZoomEvent$java_awt_event_MouseEvent.apply(this, [e]) || $I$(6,"isZoomInCursor$java_awt_Cursor",[this.getCursor$()]) ;
});

Clazz.newMeth(C$, 'getInteractive$',  function () {
var track=this.getSelectedTrack$();
var isMarking=(track != null  && this.cursorType == track.getMarkingCursorType$java_awt_event_InputEvent(this.mouseEvent) );
if (isMarking) return null;
if (track != null ) {
var o=null;
if (track !== this.getAxes$()  && !this.calibrationTools.contains$O(track)  && (o=track.findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(this, this.mouseEvent.getX$(), this.mouseEvent.getY$())) != null  ) {
return o;
}if ((track.isDependent$() || track === this.getAxes$()  ) && (o=this.getAxes$().findInteractive$org_opensourcephysics_display_DrawingPanel$I$I(this, this.mouseEvent.getX$(), this.mouseEvent.getY$())) != null  ) {
return o;
}}return C$.superclazz.prototype.getInteractive$.apply(this, []);
});

Clazz.newMeth(C$, 'getXYCoordinateStringBuilder$org_opensourcephysics_media_core_TPoint',  function (point) {
return this.coordStringBuilder;
});

Clazz.newMeth(C$, 'getMattedImage$',  function () {
if (this.renderedImage == null  || this.renderedImage.getWidth$() != this.getWidth$()  || this.renderedImage.getHeight$() != this.getHeight$() ) {
this.renderedImage=Clazz.new_([this.getWidth$(), this.getHeight$(), 1],$I$(70,1).c$$I$I$I);
}this.render$java_awt_image_BufferedImage(this.renderedImage);
var rect=this.getMat$().getDrawingBounds$();
var w=(rect.getWidth$()|0);
var h=(rect.getHeight$()|0);
if (this.mattedImage == null  || this.mattedImage.getWidth$() != w  || this.mattedImage.getHeight$() != h ) {
this.mattedImage=Clazz.new_($I$(70,1).c$$I$I$I,[w, h, 1]);
}var g=this.mattedImage.getGraphics$();
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.renderedImage, (-rect.getX$()|0), (-rect.getY$()|0), null);
return this.mattedImage;
});

Clazz.newMeth(C$, 'deletePoint$org_opensourcephysics_media_core_TPoint',  function (pt) {
var list=this.getTracks$();
for (var it=0, n=list.size$(); it < n; it++) {
var track=list.get$I(it);
var step=track.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel(pt, this);
if (step != null ) {
step=track.deleteStep$I(step.n);
if (step == null ) return;
this.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
this.selectedSteps.clear$();
this.hideMouseBox$();
return;
}}
});

Clazz.newMeth(C$, 'deleteSelectedSteps$',  function () {
var changes=Clazz.new_($I$(12,1));
var nMin=2147483647;
var nMax=-1;
var list=this.getTracks$();
list.removeAll$java_util_Collection(this.getDrawablesTemp$Class(Clazz.getClass($I$(40))));
for (var it=0, ni=list.size$(); it < ni; it++) {
var track=list.get$I(it);
var isChanged=false;
var control=Clazz.new_($I$(34,1).c$$O,[track]);
for (var step, $step = this.selectedSteps.iterator$(); $step.hasNext$()&&((step=($step.next$())),1);) {
if (step.getTrack$() === track ) {
if (track.isLocked$()) {
step.erase$();
} else {
var n=step.getFrameNumber$();
track.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(n, null);
for (var columnName, $columnName = track.textColumnNames.iterator$(); $columnName.hasNext$()&&((columnName=($columnName.next$())),1);) {
var entries=track.textColumnEntries.get$O(columnName);
if (entries.length > n) {
entries[n]=null;
}}
var autoTracker=this.getAutoTracker$Z(false);
if (autoTracker != null  && autoTracker.getTrack$() === track  ) {
autoTracker.delete$I(n);
}nMin=Math.min(nMin, n);
nMax=Math.max(nMax, n);
isChanged=true;
}}}
if (isChanged) {
changes.add$O(Clazz.array(java.lang.Object, -1, [track, control]));
if (track.ttype == 5) {
var clip=this.getPlayer$().getVideoClip$();
var startFrame=Math.max(nMin - 2 * clip.getStepSize$(), clip.getStartFrameNumber$());
var stepCount=4 + ((nMax - nMin)/clip.getStepSize$()|0);
(track).updateDerivatives$I$I(startFrame, stepCount);
}track.fireStepsChanged$();
}}
this.selectedSteps.clear$();
if (!changes.isEmpty$()) {
$I$(33).postMultiTrackEdit$java_util_ArrayList(changes);
}});

Clazz.newMeth(C$, 'scale$java_util_ArrayList',  function (drawables) {
if (this.drawingInImageSpace) {
if (this.getPreferredSize$().width < 2) C$.superclazz.prototype.setImageBorder$D.apply(this, [this.defaultImageBorder]);
 else {
var w=this.getMagnification$() * this.imageWidth;
var wBorder=(this.getWidth$() - w) * 0.5 / w;
var h=this.getMagnification$() * this.imageHeight;
var hBorder=(this.getHeight$() - h) * 0.5 / h;
var border=Math.min(wBorder, hBorder);
C$.superclazz.prototype.setImageBorder$D.apply(this, [Math.max(border, this.defaultImageBorder)]);
}}C$.superclazz.prototype.scale$java_util_ArrayList.apply(this, [drawables]);
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
if (!this.isPaintable$()) {
return;
}var justScroll=(this.zoomCenter != null  && this.isShowing$()  && this.getTFrame$() != null   && (this.scrollPane.getVerticalScrollBar$().isVisible$() || this.scrollPane.getHorizontalScrollBar$().isVisible$() ) );
if (justScroll) {
var rect=this.scrollPane.getViewport$().getViewRect$();
var x=this.zoomCenter.x - (rect.width/2|0);
var y=this.zoomCenter.y - (rect.height/2|0);
rect.setLocation$I$I(x, y);
this.zoomCenter=null;
this.scrollRectToVisible$java_awt_Rectangle(rect);
return;
}C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
this.showFilterInspectors$();
});

Clazz.newMeth(C$, 'getDefaultImageWidth$',  function () {
return 640;
}, 1);

Clazz.newMeth(C$, 'getDefaultImageHeight$',  function () {
return 480;
}, 1);

Clazz.newMeth(C$, 'getImageBounds$',  function () {
try {
if (this.getVideo$() == null  || !this.getVideo$().isVisible$() ) {
return null;
}var w=this.getImageWidth$();
var h=this.getImageHeight$();
if (w <= 0  || h <= 0  ) {
return null;
}var p1=Clazz.new_($I$(19,1).c$$D$D,[0, 0]).getScreenPosition$org_opensourcephysics_media_core_VideoPanel(this);
var p2=Clazz.new_($I$(19,1).c$$D$D,[w, h]).getScreenPosition$org_opensourcephysics_media_core_VideoPanel(this);
if (p1 == null  || p2 == null  ) {
return null;
}var x=Math.min(p1.x, p2.x);
var y=Math.min(p1.y, p2.y);
var width=Math.abs(p2.x - p1.x);
var height=Math.abs(p2.y - p1.y);
return Clazz.new_($I$(71,1).c$$I$I$I$I,[x, y, width, height]);
} catch (t) {
return null;
}
});

Clazz.newMeth(C$, 'isPointOnImage$java_awt_Point',  function (p) {
return p != null  && this.isPointOnImage$I$I(p.x, p.y) ;
});

Clazz.newMeth(C$, 'isPointOnImage$I$I',  function (x, y) {
try {
var bounds=this.getImageBounds$();
return bounds != null  && bounds.contains$I$I(x, y) ;
} catch (t) {
return false;
}
});

Clazz.newMeth(C$, 'getTFrame$',  function () {
if (this.frame == null ) {
var c=this.getTopLevelAncestor$();
if (Clazz.instanceOf(c, "org.opensourcephysics.cabrillo.tracker.TFrame")) {
this.frame=c;
}}return this.frame;
});

Clazz.newMeth(C$, 'getAutoTracker$Z',  function (forceNew) {
if (this.autoTracker == null  && forceNew ) {
this.autoTracker=Clazz.new_($I$(72,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[this]);
var wizard=this.autoTracker.getWizard$();
$I$(41).setFonts$java_awt_Container(wizard);
}return this.autoTracker;
});

Clazz.newMeth(C$, 'getFormatPatterns$I',  function (ttype) {
var patterns=this.formatPatterns[ttype];
if (patterns == null ) {
patterns=Clazz.new_($I$(22,1));
this.formatPatterns[ttype]=patterns;
var defaultPatterns=$I$(9).getDefaultFormatPatterns$I(ttype);
if (defaultPatterns != null ) {
patterns.putAll$java_util_Map(defaultPatterns);
}var vars=$I$(9).getAllVariables$I(ttype);
for (var i=0, n=vars.size$(); i < n; i++) {
var v=vars.get$I(i);
if (!patterns.containsKey$O(v)) {
patterns.put$O$O(v, "");
}}
}return patterns;
});

Clazz.newMeth(C$, 'setInitialFormatPatterns$',  function () {
var list=this.getTracksTemp$();
for (var it=0, n=list.size$(); it < n; it++) {
list.get$I(it).setInitialFormatPatterns$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
}
list.clear$();
});

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.isDisposed) return;
this.isDisposed=true;
if (this.frame != null ) {
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("datafile", this.frame);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("video", this.frame);
}if (this.coords != null ) this.coords.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
this.selectedPoint=null;
this.selectedStep=null;
this.selectedTrack=null;
if (this.$mouseHandler != null ) {
this.$mouseHandler.selectedTrack=null;
this.$mouseHandler.selectedPoint=null;
this.$mouseHandler.iad=null;
}this.clearFilters$();
this.setTransferHandler$javax_swing_TransferHandler(null);
this.setScrollPane$javax_swing_JScrollPane(null);
var tracks=this.getTracks$();
p$1.clear$Z.apply(this, [false]);
for (var track, $track = tracks.iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
track.dispose$();
}
var player=this.getPlayer$();
var ci=(player == null  ? null : player.getVideoClip$().getClipInspector$());
if (ci != null ) {
ci.dispose$();
}if (this.video != null ) {
this.video.dispose$();
this.video=null;
}this.coordinateStrBuilder=null;
if (this.selectedSteps != null ) this.selectedSteps.dispose$();
this.selectedSteps=null;
this.offscreenImage=null;
this.workingImage=null;
if (player != null ) {
var clip=player.getVideoClip$();
clip.removePropertyChangeListener$java_beans_PropertyChangeListener(player);
clip.removeListener$java_beans_PropertyChangeListener(this);
var clipControl=player.getClipControl$();
clipControl.removePropertyChangeListener$java_beans_PropertyChangeListener(player);
player.removeActionListener$java_beans_PropertyChangeListener(this);
player.removeFrameListener$java_beans_PropertyChangeListener(this);
player.stop$();
this.remove$java_awt_Component(player);
player.dispose$();
player=null;
}if (this.video != null ) {
this.video.removeListener$java_beans_PropertyChangeListener(this);
}for (var track, $track = $I$(9).getValues$().iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
this.removePropertyChangeListener$java_beans_PropertyChangeListener(track);
track.removeListener$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
}
if (this.autoTracker != null ) {
this.autoTracker.dispose$();
this.autoTracker=null;
}if (this.modelBuilder != null ) {
this.modelBuilder.removePropertyChangeListener$S$java_beans_PropertyChangeListener("panel", this);
this.modelBuilder.dispose$();
this.modelBuilder=null;
}if (this.dataBuilder != null ) {
this.dataBuilder.removePropertyChangeListener$S$java_beans_PropertyChangeListener("panel", this);
this.dataBuilder.removePropertyChangeListener$S$java_beans_PropertyChangeListener("function", this);
this.dataBuilder.removePropertyChangeListener$S$java_beans_PropertyChangeListener("description", this);
this.dataBuilder.removePropertyChangeListener$S$java_beans_PropertyChangeListener("ft_visible", this);
this.dataBuilder.dispose$();
this.dataBuilder=null;
}if (this.attachmentDialog != null ) {
this.attachmentDialog.dispose$();
this.attachmentDialog=null;
}if (this.algorithmDialog != null ) {
this.algorithmDialog.dispose$();
this.algorithmDialog=null;
}if (this.guestsDialog != null ) {
this.guestsDialog.dispose$();
this.guestsDialog=null;
}$I$(2).dispose$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
if ($I$(15).haveExportDialog && $I$(73).dataExporter != null   && $I$(73).dataExporter.panelID === this.panelID  ) {
$I$(73).dataExporter.clear$();
}if ($I$(15).haveExportDialog && $I$(74).videoExporter != null   && $I$(74).videoExporter.panelID === this.panelID  ) {
$I$(74).videoExporter.clear$();
}if ($I$(15).haveExportDialog) $I$(75).clear$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
if (this.numberFormatDialog != null ) {
this.numberFormatDialog.dispose$();
this.numberFormatDialog=null;
}this.filterClasses.clear$();
this.selectingPanelID=null;
this.frame=null;
this.renderedImage=null;
this.mattedImage=null;
if (this.frame != null ) this.frame.disposeOf$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
this.frame=null;
this.removeAll$();
var list=this.getDrawables$Class(Clazz.getClass($I$(9)));
for (var it=0, n=list.size$(); it < n; it++) {
var track=list.get$I(it);
track.dispose$();
}
C$.superclazz.prototype.dispose$.apply(this, []);
System.gc$();
System.gc$();
System.gc$();
System.gc$();
});

Clazz.newMeth(C$, 'setTrackName$org_opensourcephysics_cabrillo_tracker_TTrack$S$Z',  function (track, newName, postEdit) {
var drawables=this.getDrawablesNoClone$();
for (var i=0, n=drawables.size$(); i < n; i++) {
var next=drawables.get$I(i);
if (next === track ) continue;
if (Clazz.instanceOf(next, "org.opensourcephysics.cabrillo.tracker.TTrack")) {
var nextName=(next).getName$();
if (newName.equals$O(nextName)) {
$I$(37).getDefaultToolkit$().beep$();
var s="\"" + newName + "\" " ;
this.badNameLabel.setText$S(s + $I$(8).getString$S("TTrack.Dialog.Name.BadName"));
var nameDialog=track.getNameDialog$();
nameDialog.getContentPane$().add$java_awt_Component$O(this.badNameLabel, "South");
nameDialog.pack$();
nameDialog.setVisible$Z(true);
return;
}}}
var control=Clazz.new_([Clazz.new_($I$(76,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack,[track])],$I$(34,1).c$$O);
track.setName$S(newName);
if (postEdit) $I$(33).postTrackDisplayEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl(track, control);
if ($I$(9).nameDialog != null ) {
$I$(9).nameDialog.setVisible$Z(false);
$I$(9).nameDialog.getContentPane$().remove$java_awt_Component(this.badNameLabel);
}if (this.frame != null ) this.frame.refreshMenus$org_opensourcephysics_cabrillo_tracker_TrackerPanel$S(this, "TrackerPanel.setTrackName");
});

Clazz.newMeth(C$, 'showFilterInspectors$',  function () {
if (this.visibleFilters != null  && this.visibleFilters.size$() > 0 ) {
var frame=this.getTFrame$();
var dim=$I$(37).getDefaultToolkit$().getScreenSize$();
for (var filter, $filter = this.visibleFilters.keySet$().iterator$(); $filter.hasNext$()&&((filter=($filter.next$())),1);) {
var p=this.visibleFilters.get$O(filter);
var inspector=filter.getInspector$();
inspector.setVisible$Z(true);
var x=Math.max(p.x + (frame == null  ? 0 : frame.getLocation$().x), 0);
x=Math.min(x, dim.width - inspector.getWidth$());
var y=Math.max(p.y + (frame == null  ? 0 : frame.getLocation$().y), 0);
y=Math.min(y, dim.height - inspector.getHeight$());
inspector.setLocation$I$I(x, y);
}
this.visibleFilters.clear$();
this.visibleFilters=null;
}});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(77,1));
}, 1);

Clazz.newMeth(C$, 'isAutoRefresh$',  function () {
return this.isAutoRefresh && $I$(6).allowDataRefresh ;
});

Clazz.newMeth(C$, 'setAutoRefresh$Z',  function (b) {
if ($I$(6).allowDataRefresh) this.isAutoRefresh=b;
});

Clazz.newMeth(C$, 'updateMainPopup$',  function () {
var popup=this.getPopup$();
try {
var iad=this.getInteractive$();
if (Clazz.instanceOf(iad, "org.opensourcephysics.media.core.TPoint")) {
var p=iad;
var track=null;
var step=null;
for (var t, $t = this.getTracksTemp$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
step=t.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel(p, this);
if (step != null ) {
track=t;
break;
}}
this.clearTemp$();
if (step != null ) {
var prev=this.selectedStep;
this.selectedStep=step;
if (Clazz.instanceOf(track, "org.opensourcephysics.cabrillo.tracker.ParticleDataTrack")) {
popup=(track).getPointMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this).getPopupMenu$();
} else if (track != null ) {
popup=track.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu(this, Clazz.new_($I$(78,1))).getPopupMenu$();
}this.selectedStep=prev;
this.getZoomBox$().setVisible$Z(false);
return popup;
}} else if (Clazz.instanceOf(iad, "org.opensourcephysics.cabrillo.tracker.TTrack")) {
var track=iad;
switch (track.ttype) {
case 8:
popup=(track).getInputFieldPopup$();
break;
case 6:
popup=(track).getInputFieldPopup$();
break;
default:
popup=track.getMenu$org_opensourcephysics_cabrillo_tracker_TrackerPanel$javax_swing_JMenu(this, null).getPopupMenu$();
break;
}
this.getZoomBox$().setVisible$Z(false);
return popup;
}popup.removeAll$();
var item=Clazz.new_([$I$(8).getString$S("MainTView.Popup.MenuItem.ZoomIn")],$I$(79,1).c$$S);
popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.TrackerPanel$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerPanel$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].getTFrame$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], []).getMainView$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel']).zoomIn$Z(false);
});
})()
), Clazz.new_(P$.TrackerPanel$8.$init$,[this, null])));
item=Clazz.new_([$I$(8).getString$S("MainTView.Popup.MenuItem.ZoomOut")],$I$(79,1).c$$S);
popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.TrackerPanel$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerPanel$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].getTFrame$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], []).getMainView$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel']).zoomOut$Z(false);
});
})()
), Clazz.new_(P$.TrackerPanel$9.$init$,[this, null])));
item=Clazz.new_([$I$(8).getString$S("MainTView.Popup.MenuItem.ZoomToFit")],$I$(79,1).c$$S);
popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.TrackerPanel$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerPanel$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].setMagnification$D.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], [-1]);
});
})()
), Clazz.new_(P$.TrackerPanel$10.$init$,[this, null])));
var zoomBox=this.getZoomBox$();
if (zoomBox.isDragged$() && this.isStepsInZoomBox$() ) {
popup.addSeparator$();
item=Clazz.new_([$I$(8).getString$S("MainTView.Popup.MenuItem.Select")],$I$(79,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.TrackerPanel$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerPanel$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.handleStepsInZoomBox$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], [true]);
});
})()
), Clazz.new_(P$.TrackerPanel$11.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
item=Clazz.new_([$I$(8).getString$S("MainTView.Popup.MenuItem.Deselect")],$I$(79,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.TrackerPanel$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerPanel$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.handleStepsInZoomBox$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], [false]);
});
})()
), Clazz.new_(P$.TrackerPanel$12.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
}if (this.isEnabled$S("button.clipSettings")) {
if (popup.getComponentCount$() > 0) popup.addSeparator$();
item=Clazz.new_([$I$(80).getString$S("ClipInspector.Title") + "..."],$I$(79,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.TrackerPanel$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerPanel$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var clip=this.b$['org.opensourcephysics.media.core.VideoPanel'].getPlayer$.apply(this.b$['org.opensourcephysics.media.core.VideoPanel'], []).getVideoClip$();
var clipControl=this.b$['org.opensourcephysics.media.core.VideoPanel'].getPlayer$.apply(this.b$['org.opensourcephysics.media.core.VideoPanel'], []).getClipControl$();
var frame=this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].getTFrame$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], []);
var inspector=clip.getClipInspector$org_opensourcephysics_media_core_ClipControl$java_awt_Frame(clipControl, frame);
if (inspector.isVisible$()) {
return;
}$I$(41,"setFonts$O$I",[inspector, $I$(41).getLevel$()]);
inspector.pack$();
var p0=Clazz.new_($I$(81,1)).getLocation$();
var loc=inspector.getLocation$();
if ((loc.x == p0.x) && (loc.y == p0.y) ) {
var rect=this.b$['javax.swing.JComponent'].getVisibleRect$.apply(this.b$['javax.swing.JComponent'], []);
var p=frame.getMainView$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel']).scrollPane.getLocationOnScreen$();
var x=p.x + ((rect.width - inspector.getBounds$().width)/2|0);
var y=p.y + ((rect.height - inspector.getBounds$().height)/2|0);
inspector.setLocation$I$I(x, y);
}inspector.initialize$();
inspector.setVisible$Z(true);
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].getTFrame$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], []).getMainView$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel']).refresh$();
});
})()
), Clazz.new_(P$.TrackerPanel$13.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
}if (this.isEnabled$S("edit.copyImage")) {
popup.addSeparator$();
var copyImageAction=((P$.TrackerPanel$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerPanel$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var image=Clazz.new_($I$(82,1).c$$java_awt_Component,[this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel']]).getImage$();
var zoomBox=this.b$['org.opensourcephysics.display.DrawingPanel'].getZoomBox$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
if (zoomBox.isDragged$()) {
var zRect=zoomBox.reportZoom$();
var image2=Clazz.new_([zRect.width, zRect.height, image.getType$()],$I$(70,1).c$$I$I$I);
var g=image2.createGraphics$();
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(image, -zRect.x, -zRect.y, null);
$I$(83).copyImage$java_awt_Image(image2);
} else $I$(83).copyImage$java_awt_Image(image);
});
})()
), Clazz.new_([this, null, $I$(8).getString$S("TMenuBar.Menu.CopyImage")],$I$(84,1).c$$S,P$.TrackerPanel$14));
var copyImageItem=Clazz.new_($I$(79,1).c$$javax_swing_Action,[copyImageAction]);
popup.add$javax_swing_JMenuItem(copyImageItem);
var snapshotAction=((P$.TrackerPanel$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerPanel$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display.DrawingPanel'].snapshot$.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], []);
});
})()
), Clazz.new_([this, null, $I$(85).getString$S("DisplayPanel.Snapshot_menu_item")],$I$(84,1).c$$S,P$.TrackerPanel$15));
var snapshotItem=Clazz.new_($I$(79,1).c$$javax_swing_Action,[snapshotAction]);
popup.add$javax_swing_JMenuItem(snapshotItem);
}$I$(86).refreshPopup$org_opensourcephysics_cabrillo_tracker_TrackerPanel$S$javax_swing_JPopupMenu(this, "MainTView.popup", popup);
var propertiesItem=Clazz.new_([this.actions.get$O("aboutVideo")],$I$(79,1).c$$javax_swing_Action);
popup.addSeparator$();
propertiesItem.setText$S($I$(8).getString$S("TActions.AboutVideo"));
popup.add$javax_swing_JMenuItem(propertiesItem);
if (this.isEnabled$S("file.print")) {
if (popup.getComponentCount$() > 0) popup.addSeparator$();
popup.add$javax_swing_Action(this.actions.get$O("print"));
}if (popup.getComponentCount$() > 0) popup.addSeparator$();
var helpItem=Clazz.new_([$I$(8).getString$S("Tracker.Popup.MenuItem.Help")],$I$(79,1).c$$S);
helpItem.addActionListener$java_awt_event_ActionListener(((P$.TrackerPanel$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerPanel$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var frame=this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].getTFrame$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], []);
if (frame != null ) {
frame.showHelp$S$I("GUI", 0);
}});
})()
), Clazz.new_(P$.TrackerPanel$16.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(helpItem);
return popup;
} finally {
this.displayedPopup=popup;
$I$(41,"setFonts$O$I",[popup, $I$(41).getLevel$()]);
}
});

Clazz.newMeth(C$, 'handleStepsInZoomBox$Z',  function (add) {
var zoomBox=this.getZoomBox$();
var zRect=zoomBox.reportZoom$();
var tracks=this.getTracks$();
var changedTracks=Clazz.new_($I$(20,1));
for (var track, $track = tracks.iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
if (!track.isVisible$() || track.getClass$() !== Clazz.getClass($I$(18))  ) continue;
if (!(track).isPositionVisible$()) continue;
for (var step, $step = 0, $$step = track.getSteps$(); $step<$$step.length&&((step=($$step[$step])),1);$step++) {
if (step == null  || !track.isStepVisible$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_cabrillo_tracker_TrackerPanel(step, this) ) continue;
var p=step.getPoints$()[0];
if (p == null  || Double.isNaN$D(p.getX$()) ) continue;
if (zRect.contains$java_awt_Point(p.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(this))) {
changedTracks.add$O(track);
if (add) {
this.selectedSteps.add$org_opensourcephysics_cabrillo_tracker_Step(step);
} else {
this.selectedSteps.remove$O(step);
}step.erase$();
}}
}
if (add && this.selectedSteps.size$() == 1 ) {
var step=this.selectedSteps.toArray$OA(Clazz.array($I$(87), [1]))[0];
this.setSelectedPoint$org_opensourcephysics_media_core_TPoint(step.points[0]);
} else if (this.selectedSteps.size$() > 1) {
this.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
}for (var track, $track = changedTracks.iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
track.fireStepsChanged$();
}
}, p$1);

Clazz.newMeth(C$, 'isStepsInZoomBox$',  function () {
var zoomBox=this.getZoomBox$();
var zRect=zoomBox.reportZoom$();
var tracks=this.getTracks$();
for (var track, $track = tracks.iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
if (!track.isVisible$() || track.getClass$() !== Clazz.getClass($I$(18))  ) continue;
if (!(track).isPositionVisible$()) continue;
for (var step, $step = 0, $$step = track.getSteps$(); $step<$$step.length&&((step=($$step[$step])),1);$step++) {
if (step == null ) continue;
var p=step.getPoints$()[0];
if (p == null  || Double.isNaN$D(p.getX$()) ) continue;
if (zRect.contains$java_awt_Point(p.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(this))) {
return true;
}}
}
return false;
});

Clazz.newMeth(C$, 'setVideoVisible$Z',  function (visible) {
if (this.video == null  || visible == this.video.isVisible$()  ) return;
this.video.setVisible$Z(visible);
this.getPlayer$().getClipControl$().videoVisible=visible;
this.setVideo$org_opensourcephysics_media_core_Video(this.video);
});

Clazz.newMeth(C$, 'isPaintable$',  function () {
if (this.getTopLevelAncestor$() == null  || !this.isVisible$()  || this.getHeight$() <= 0  || this.getIgnoreRepaint$()  || this.getTFrame$() == null   || !this.frame.isPaintable$()  || p$1.isClipAdjusting.apply(this, []) ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'repaint$',  function () {
if (!this.isPaintable$()) return;
C$.superclazz.prototype.repaint$.apply(this, []);
});

Clazz.newMeth(C$, 'repaint$J$I$I$I$I',  function (time, x, y, w, h) {
if (!this.isPaintable$()) return;
C$.superclazz.prototype.repaint$J$I$I$I$I.apply(this, [time, x, y, w, h]);
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
});

Clazz.newMeth(C$, 'notifyLoadingComplete$',  function () {
this.setIgnoreRepaint$Z(false);
this.firePropertyChange$S$O$O("loaded", null, null);
});

Clazz.newMeth(C$, 'taintEnabled$',  function () {
++this.enabledCount;
});

Clazz.newMeth(C$, 'getEnabledCount$',  function () {
return this.enabledCount;
});

Clazz.newMeth(C$, 'clearTainted$',  function () {
this.tainted=false;
this.dirty=null;
});

Clazz.newMeth(C$, 'doPaste$S',  function (data) {
if (data != null  && !p$1.pasteXML$S$Z.apply(this, [data, false]) ) {
this.importDataAsync$S$O$Runnable(data, null, null);
}});

Clazz.newMeth(C$, 'doAutoPaste$S',  function (dataString) {
if (dataString != null  && !p$1.pasteXML$S$Z.apply(this, [dataString, true]) ) {
this.isAutoPaste=true;
this.importDataAsync$S$O$Runnable(dataString, null, null);
this.isAutoPaste=false;
}});

Clazz.newMeth(C$, 'initialize$org_opensourcephysics_tools_FileDropHandler',  function (fileDropHandler) {
if (fileDropHandler == null ) {
if (this.trackControlX != -2147483648) {
var tc=$I$(56).getControl$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
tc.wasVisible=true;
var dim=$I$(37).getDefaultToolkit$().getScreenSize$();
var x=Math.max(this.getTFrame$().getLocation$().x + this.trackControlX, 0);
x=Math.min(x, dim.width - tc.getWidth$());
var y=Math.max(this.getTFrame$().getLocation$().y + this.trackControlY, 0);
y=Math.min(y, dim.height - tc.getHeight$());
tc.setLocation$I$I(x, y);
tc.positioned=true;
}this.setInteractiveMouseHandler$org_opensourcephysics_display_InteractiveMouseHandler(this.$mouseHandler=Clazz.new_($I$(66,1)));
this.showFilterInspectors$();
this.setInitialFormatPatterns$();
return;
}this.setTransferHandler$javax_swing_TransferHandler(fileDropHandler);
if (this.getMat$() == null ) {
this.addDrawable$org_opensourcephysics_display_Drawable(Clazz.new_($I$(48,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[this]));
}if (this.getAxes$() == null ) {
var axes=Clazz.new_($I$(47,1));
axes.setVisible$Z(false);
this.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack(axes);
}this.addFilter$Class(Clazz.getClass($I$(88)));
this.addFilter$Class(Clazz.getClass($I$(89)));
this.addFilter$Class(Clazz.getClass($I$(90)));
this.addFilter$Class(Clazz.getClass($I$(91)));
this.addFilter$Class(Clazz.getClass($I$(92)));
this.addFilter$Class(Clazz.getClass($I$(93)));
this.addFilter$Class(Clazz.getClass($I$(94)));
this.addFilter$Class(Clazz.getClass($I$(95)));
this.addFilter$Class(Clazz.getClass($I$(96)));
this.addFilter$Class(Clazz.getClass($I$(97)));
this.addFilter$Class(Clazz.getClass($I$(98)));
this.addFilter$Class(Clazz.getClass($I$(99)));
this.addFilter$Class(Clazz.getClass($I$(100)));
this.addFilter$Class(Clazz.getClass($I$(101)));
});

Clazz.newMeth(C$, 'getDrawablesTemp$Class',  function (type) {
if (this.tempA == null ) this.tempA=Clazz.new_($I$(12,1));
if (!this.tempA.isEmpty$()) {
this.tempA.clear$();
}return (type == null  ? null : this.getDrawables$Class$Z$org_opensourcephysics_display_Drawable$java_util_ArrayList(type, true, null, this.tempA));
});

Clazz.newMeth(C$, 'getTrackByName$Class$S',  function (type, name) {
{
for (var i=0, n=this.drawableList.size$(); i < n; i++) {
var d=this.drawableList.get$I(i);
if (type.isInstance$O(d) && name.equals$O((d).getName$()) ) {
return d;
}}
return null;
}});

Clazz.newMeth(C$, 'clearTemp$',  function () {
if (this.tempA != null ) this.tempA.clear$();
});

Clazz.newMeth(C$, 'addNotify$',  function () {
C$.superclazz.prototype.addNotify$.apply(this, []);
if ($I$(1).isJS) {
$I$(1,"setJSClipboardPasteListener$java_awt_Component$javax_swing_TransferHandler",[this, this.frame.getDataDropHandler$()]);
}});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
if (this.unTracked$()) return;
this.getMat$();
C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'cloneNamed$S',  function (name) {
var track=this.getTrack$S(name);
if (track == null ) return;
var n=1;
try {
var number=name.substring$I(name.length$() - 1);
n=Integer.parseInt$S(number) + 1;
name=name.substring$I$I(0, name.length$() - 1);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
var names=Clazz.new_($I$(20,1));
for (var next, $next = this.getTracksTemp$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
names.add$O(next.getName$());
}
this.clearTemp$();
try {
while (names.contains$O(name + n)){
++n;
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
var control=Clazz.new_($I$(34,1).c$$O,[track]);
control.setValue$S$O("name", name + n);
p$1.pasteXML$S$Z.apply(this, [control.toXML$(), false]);
});

Clazz.newMeth(C$, 'pasteXML$S$Z',  function (data, reloadOnly) {
if (reloadOnly) return false;
if (data.trim$().startsWith$S("<object class=")) {
data="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" + data;
}try {
var control=Clazz.new_($I$(34,1));
control.readXML$S(data);
var type=control.getObjectClass$();
if (type == null  || control.failedToRead$() ) {
return false;
}if (Clazz.getClass(C$).isAssignableFrom$Class(type)) {
control.loadObject$O(this);
return true;
}if (Clazz.getClass($I$(102)).isAssignableFrom$Class(type)) {
var state=Clazz.new_([this.getCoords$()],$I$(34,1).c$$O);
control.loadObject$O(this.getCoords$());
$I$(33).postCoordsEdit$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl(this, state);
return true;
}if (Clazz.getClass($I$(9)).isAssignableFrom$Class(type)) {
if (reloadOnly) {
var tracks=this.getTracksTemp$();
for (var k=0; k < tracks.size$(); k++) {
var track=tracks.get$I(k);
if (track.getName$().equals$O(control.getString$S("name"))) {
$I$(103).ignoreRefresh=true;
control.loadObject$O(track);
track.erase$();
$I$(103).ignoreRefresh=false;
track.firePropertyChange$S$O$O("steps", $I$(9).HINT_STEP_ADDED_OR_REMOVED, null);
return true;
}}
} else {
var track=control.loadObject$O(null);
this.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
this.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
return true;
}}if (Clazz.getClass($I$(104)).isAssignableFrom$Class(type)) {
var clip=control.loadObject$O(null);
var prev=this.getPlayer$().getVideoClip$();
var state=$I$(33).getXMLControl$org_opensourcephysics_media_core_VideoClip(prev);
state=Clazz.new_([state.toXML$()],$I$(34,1).c$$S);
this.getPlayer$().setVideoClip$org_opensourcephysics_media_core_VideoClip(clip);
$I$(33).postVideoReplace$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl(this, state);
return true;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
return false;
}, p$1);

Clazz.newMeth(C$, 'checkAndClearTracks$',  function () {
var xml=Clazz.new_($I$(12,1));
var locked=false;
var keepers=this.getSystemDrawables$();
for (var track, $track = this.getTracksTemp$().iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
if (keepers.contains$O(track)) continue;
xml.add$O(Clazz.new_($I$(34,1).c$$O,[track]).toXML$());
locked=locked || (track.isLocked$() && !track.isDependent$() ) ;
}
this.clearTemp$();
if (locked) {
var i=$I$(7,"showConfirmDialog$java_awt_Component$O$S$I$I",[this, $I$(8).getString$S("TActions.Dialog.DeleteLockedTracks.Message"), $I$(8).getString$S("TActions.Dialog.DeleteLockedTracks.Title"), 0, 2]);
if (i != 0) return;
}$I$(33).postTrackClear$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_util_List(this, xml);
this.clearTracks$();
});

Clazz.newMeth(C$, 'reload$',  function () {
var file=this.getDataFile$();
if (file == null ) return;
$I$(103).ignoreRefresh=true;
var control=Clazz.new_($I$(34,1).c$$java_io_File,[file]);
if (control.failedToRead$()) return;
var proplist=control.getPropsRaw$();
for (var i=0; i < proplist.size$(); i++) {
var prop=proplist.get$I(i);
if (prop.getPropertyName$().equals$O("tracks")) {
var tracks=this.getTracks$();
var trackcontrols=prop.getChildControls$();
 outer : for (var j=0; j < trackcontrols.length; j++) {
var tcon=trackcontrols[j];
var found=false;
for (var k=0; k < tracks.size$(); k++) {
var track=tracks.get$I(k);
var name=tcon.getString$S("name");
var match=track.getName$().equals$O(name);
if (track.getClass$().getSimpleName$().equals$O("ParticleDataTrack")) {
var pdt=track;
if (pdt.getName$().startsWith$S(name) && (pdt.getSource$() == null  || !pdt.getSource$().getClass$().getSimpleName$().equals$O("ParticleDataTrack") ) ) {
match=true;
}}if (match) {
found=true;
tcon.loadObject$O(track);
track.erase$();
track.firePropertyChange$S$O$O("steps", $I$(9).HINT_STEP_ADDED_OR_REMOVED, null);
continue outer;
}}
if (!found) {
var track=tcon.loadObject$O(null);
this.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
var choosers=this.frame.getViewChoosers$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
var views=this.frame.getSelectedViewTypes$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
for (var k=0; k < choosers.length; k++) {
choosers[k].setSelectedViewType$I(views[k]);
}
}}
} else if (prop.getPropertyName$().equals$O("coords")) {
var coords=this.getCoords$();
var coordsControl=prop.getChildControls$()[0];
coordsControl.loadObject$O(coords);
}}
$I$(103).ignoreRefresh=false;
$I$(15).repaintT$java_awt_Component(this);
});

Clazz.newMeth(C$, 'openURLFromDialog$',  function () {
var input=$I$(105,"showInputDialog$java_awt_Component$S$S$I$S",[this.getTFrame$(), $I$(8).getString$S("TActions.Dialog.OpenURL.Message") + ":                             ", $I$(8).getString$S("TActions.Dialog.OpenURL.Title"), -1, null]);
if (input == null  || input.trim$().equals$O("") ) {
return;
}var res=$I$(50,"getResource$S",[input.toString().trim$()]);
if (res == null  || res.getURL$() == null  ) {
$I$(7,"showMessageDialog$java_awt_Component$O$S$I",[this.getTFrame$(), $I$(8).getString$S("TActions.Dialog.URLResourceNotFound.Message") + "\n\"" + input.toString().trim$() + "\"" , $I$(8).getString$S("TActions.Dialog.URLResourceNotFound.Title"), 0]);
return;
}this.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
this.selectedSteps.clear$();
this.setMouseCursor$java_awt_Cursor($I$(3).getPredefinedCursor$I(3));
var frame=this.getTFrame$();
if (frame != null ) {
frame.removeEmptyTabIfTabCountGreaterThan$I(0);
frame.doOpenURL$S(res.getURL$().toExternalForm$());
}});

Clazz.newMeth(C$, 'toggleAxesVisible$',  function () {
var axes=this.getAxes$();
if (axes == null ) return;
var visible=!axes.isVisible$();
axes.setVisible$Z(visible);
this.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
this.selectedSteps.clear$();
this.hideMouseBox$();
if (visible) {
if (this.getSelectedTrack$() == null ) this.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(axes);
} else {
if (this.getSelectedTrack$() === axes ) this.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(null);
}});

Clazz.newMeth(C$, 'addVideoFilter$S',  function (type) {
var video=this.getVideo$();
if (video == null ) return;
this.setVideoVisible$Z(true);
var filterStack=video.getFilterStack$();
var filter=null;
var filterClasses=this.getFilters$();
var filterClass=filterClasses.get$O(type);
if (filterClass != null ) {
try {
filter=filterClass.getDeclaredConstructor$ClassA(Clazz.array(Class, -1, [])).newInstance$OA(Clazz.array(java.lang.Object, -1, []));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
if (filter != null ) {
filterStack.addFilter$org_opensourcephysics_media_core_Filter(filter);
filter.setVideoPanel$org_opensourcephysics_media_core_VideoPanel(this);
var inspector=filter.getInspector$();
if (inspector != null ) {
inspector.setVisible$Z(true);
}}$I$(15).repaintT$java_awt_Component(this);
}});

Clazz.newMeth(C$, 'refreshTrackBar$',  function () {
if (this.frame != null ) {
var tbar=this.getTrackBar$Z(false);
if (tbar != null ) tbar.refresh$();
}});

Clazz.newMeth(C$, 'onLoaded$',  function () {
if (this.showTrackControlDelayed && this.isShowing$() ) {
this.showTrackControlDelayed=false;
var tc=$I$(56).getControl$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
tc.setVisible$Z(tc.wasVisible);
}var tbar=this.getToolBar$Z(true);
if (tbar != null ) {
var button=tbar.notesButton;
var track=this.getSelectedTrack$();
if (!this.hideDescriptionWhenLoaded && (track == null  ? this.getDescription$() != null  && this.getDescription$().trim$().length$() != 0  : track.getDescription$() != null  && track.getDescription$().trim$().length$() > 0 ) ) {
this.getToolBar$Z(true).doNotesAction$();
} else if (button.isSelected$()) button.setSelected$Z(false);
}});

Clazz.newMeth(C$, 'getTabName$',  function () {
return (this.frame == null  ? "<removed>" : this.getTFrame$().getTabTitle$I(this.getTFrame$().getTab$Integer(this.panelID)));
});

Clazz.newMeth(C$, 'onBlocked$',  function () {
if (this.trackControl != null ) {
var vis=this.trackControl.wasVisible;
this.trackControl.setVisible$Z(false);
this.trackControl.wasVisible=vis;
}if (this.modelBuilder != null ) {
var tp=this.frame.getTrackerPanelForID$Integer(this.panelID);
var vis=tp.isModelBuilderVisible;
this.modelBuilder.setVisible$Z(false);
tp.isModelBuilderVisible=vis;
}});

Clazz.newMeth(C$, 'addListeners$SA$java_beans_PropertyChangeListener',  function (names, listener) {
for (var i=names.length; --i >= 0; ) this.addPropertyChangeListener$S$java_beans_PropertyChangeListener(names[i], listener);

});

Clazz.newMeth(C$, 'removeListeners$SA$java_beans_PropertyChangeListener',  function (names, listener) {
for (var i=names.length; --i >= 0; ) this.removePropertyChangeListener$S$java_beans_PropertyChangeListener(names[i], listener);

});

Clazz.newMeth(C$, 'refreshNotesDialog$',  function () {
if (this.frame != null ) this.frame.updateNotesDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this);
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
$I$(6).main$SA(args);
}, 1);

Clazz.newMeth(C$, 'ref$O',  function (o) {
return this;
});

Clazz.newMeth(C$, 'getMainPanel$',  function () {
return this;
});

Clazz.newMeth(C$, 'refreshMenus$S',  function (why) {
this.frame.refreshMenus$org_opensourcephysics_cabrillo_tracker_TrackerPanel$S(this, why);
});

Clazz.newMeth(C$, 'unTracked$',  function () {
return this.hasTrackBar$() && this.getTrackBar$Z(true).getComponentCount$() == 0 ;
});

Clazz.newMeth(C$, 'hasToolBar$',  function () {
return (this.frame != null  && this.frame.getToolBar$Integer$Z(this.panelID, false) != null  );
});

Clazz.newMeth(C$, 'hasMenuBar$',  function () {
return (this.frame != null  && this.frame.getMenuBar$Integer$Z(this.panelID, false) != null  );
});

Clazz.newMeth(C$, 'hasTrackBar$',  function () {
return (this.frame != null  && this.frame.getTrackBar$Integer$Z(this.panelID, false) != null  );
});

Clazz.newMeth(C$, 'getMenuBar$Z',  function (forceNew) {
return (this.frame == null  ? null : this.frame.getMenuBar$Integer$Z(this.panelID, forceNew));
});

Clazz.newMeth(C$, 'getToolBar$Z',  function (forceNew) {
return this.frame.getToolBar$Integer$Z(this.panelID, forceNew);
});

Clazz.newMeth(C$, 'getTrackBar$Z',  function (forceNew) {
return (this.frame == null  ? null : this.frame.getTrackBar$Integer$Z(this.panelID, forceNew));
});

Clazz.newMeth(C$, 'toString',  function () {
return "[" + this.getClass$().getSimpleName$() + " " + this.panelID + " " + this.title + "]" ;
});

Clazz.newMeth(C$, 'finalize$',  function () {
System.out.println$S("-------HOORAY!!!!!!!----finalized!------------ " + this);
$I$(52).finalized$O(this);
});

Clazz.newMeth(C$, 'getMatBounds$',  function () {
var mat=this.getMat$();
return (mat == null  ? null : mat.getBounds$());
});

C$.$static$=function(){C$.$static$=0;
C$.ZOOM_STEP=Math.pow(2, 0.16666666666666666);
C$.ZOOM_LEVELS=Clazz.array(Double.TYPE, -1, [0.1, 0.25, 0.5, 1, 2, 4, 8, 12, 20]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.TrackerPanel, "TMouseController", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.display.InteractivePanel','.IADMouseController']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
C$.superclazz.prototype.mousePressed$java_awt_event_MouseEvent.apply(this, [e]);
if (!$I$(1).isPopupTrigger$java_awt_event_InputEvent(e)) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].hidePopup$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], []);
}});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
C$.superclazz.prototype.mouseClicked$java_awt_event_MouseEvent.apply(this, [e]);
if (!$I$(1).isPopupTrigger$java_awt_event_InputEvent(e)) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].hidePopup$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], []);
}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
C$.superclazz.prototype.mouseReleased$java_awt_event_MouseEvent.apply(this, [e]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].getSelectedPoint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], []) != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].getSelectedPoint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], []).showCoordinates$org_opensourcephysics_media_core_VideoPanel(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel']);
}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
C$.superclazz.prototype.mouseEntered$java_awt_event_MouseEvent.apply(this, [e]);
if ($I$(2).isDrawing$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'])) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].setMouseCursor$java_awt_Cursor.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], [$I$(2).getDrawer$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel']).getPencilCursor$()]);
} else this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].setMouseCursor$java_awt_Cursor.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], [$I$(3).getDefaultCursor$()]);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
C$.superclazz.prototype.mouseExited$java_awt_event_MouseEvent.apply(this, [e]);
this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].isShiftKeyDown=false;
if (this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].getSelectedPoint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], []) == null ) {
this.b$['org.opensourcephysics.display.DrawingPanel'].setMessage$S$I.apply(this.b$['org.opensourcephysics.display.DrawingPanel'], [null, 0]);
}this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'].setMouseCursor$java_awt_Cursor.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackerPanel'], [$I$(3).getDefaultCursor$()]);
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
C$.superclazz.prototype.mouseMoved$java_awt_event_MouseEvent.apply(this, [e]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TrackerPanel, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.media.core.VideoPanel','.Loader'], [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['asyncloader','org.opensourcephysics.cabrillo.tracker.TrackerIO.AsyncLoader']]]

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(4,1).c$$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_media_core_Video,[null, null]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var trackerPanel=obj;
this.asyncloader=(control).getData$();
this.asyncloader.setLoader$org_opensourcephysics_cabrillo_tracker_TrackerPanel_Loader(this);
this.control=control;
switch (trackerPanel.progress) {
case 0:
trackerPanel.frame=this.asyncloader.getFrame$();
if (trackerPanel.frame != null ) {
trackerPanel.frame.holdPainting$Z(true);
}trackerPanel.dividerLocs=control.getObject$S("dividers");
trackerPanel.trackControlX=control.getInt$S("track_control_x");
trackerPanel.trackControlY=control.getInt$S("track_control_y");
trackerPanel.infoX=control.getInt$S("info_x");
trackerPanel.infoY=control.getInt$S("info_y");
if (control.getPropertyNamesRaw$().contains$O("width")) {
trackerPanel.setImageWidth$D(control.getDouble$S("width"));
}if (control.getPropertyNamesRaw$().contains$O("height")) {
trackerPanel.setImageHeight$D(control.getDouble$S("height"));
}trackerPanel.setMagnification$D(control.getDouble$S("magnification"));
if (control.getPropertyNamesRaw$().contains$O("center_x")) {
var x=control.getInt$S("center_x");
var y=control.getInt$S("center_y");
trackerPanel.zoomCenter=Clazz.new_($I$(5,1).c$$I$I,[x, y]);
}var fileVersion=control.getString$S("semantic_version");
if (fileVersion != null  && !$I$(1).isJS ) {
var result=0;
try {
result=$I$(6).compareVersions$S$S(fileVersion, "6.3.5.260922");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (result > 0 && trackerPanel.frame != null  ) {
$I$(7,"showMessageDialog$java_awt_Component$O$S$I",[trackerPanel, $I$(8).getString$S("TrackerPanel.Dialog.Version.Message1") + " " + fileVersion + " " + $I$(8).getString$S("TrackerPanel.Dialog.Version.Message2") + "\n" + $I$(8).getString$S("TrackerPanel.Dialog.Version.Message3") + " (" + "6.3.5.260922" + ")." + "\n\n" + $I$(8).getString$S("TrackerPanel.Dialog.Version.Message4") + " https://" + $I$(6).trackerWebsite + "." , $I$(8).getString$S("TrackerPanel.Dialog.Version.Title"), 1]);
}}trackerPanel.progress=5;
break;
case 5:
trackerPanel.hideDescriptionWhenLoaded=control.getBoolean$S("hide_description");
var desc=control.getString$S("description");
if (desc != null ) {
trackerPanel.setDescription$S(desc);
}trackerPanel.author=control.getString$S("author");
trackerPanel.contact=control.getString$S("contact");
if (control.getPropertyNamesRaw$().contains$O("time_unit")) {
trackerPanel.setTimeUnit$S$Z(control.getString$S("time_unit"), true);
}if (control.getPropertyNamesRaw$().contains$O("length_unit")) {
trackerPanel.lengthUnit=control.getString$S("length_unit");
}if (control.getPropertyNamesRaw$().contains$O("mass_unit")) {
trackerPanel.massUnit=control.getString$S("mass_unit");
}if (control.getPropertyNamesRaw$().contains$O("radians")) {
trackerPanel.anglesInRadians=control.getBoolean$S("radians");
}if (control.getPropertyNamesRaw$().contains$O("units_visible")) {
trackerPanel.unitsVisible=control.getBoolean$S("units_visible");
}var patterns=control.getObject$S("number_formats");
if (patterns != null ) {
for (var ip=0; ip < patterns.length; ip++) {
var next=patterns[ip];
var ttype=$I$(9).getBaseTypeInt$S(next[0]);
if (ttype < 0) continue;
var patternMap=trackerPanel.getFormatPatterns$I(ttype);
for (var i=1; i < next.length; ) {
patternMap.put$O$O(next[i++], next[i++]);
}
}
}var config=control.getObject$S("configuration");
if (config != null ) {
trackerPanel.$enabled=config.enabled;
}var props=control.getPropsRaw$();
trackerPanel.selectedViewsProperty=null;
trackerPanel.customViewsProperty=null;
for (var n=0, i=props.size$(); --i >= 0 && n < 3 ; ) {
var prop=props.get$I(i);
switch (prop.getPropertyName$()) {
case "selected_views":
trackerPanel.selectedViewsProperty=prop;
++n;
break;
case "selected_view_types":
trackerPanel.selectedViewTypesProperty=prop;
++n;
break;
case "selected_track_views":
trackerPanel.selectedTrackViewsProperty=prop;
++n;
break;
case "views":
trackerPanel.customViewsProperty=prop;
++n;
break;
}
}
trackerPanel.progress=10;
break;
default:
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
}
return trackerPanel;
});

Clazz.newMeth(C$, 'finalizeLoading$',  function () {
var trackerPanel=this.videoPanel;
if (trackerPanel.progress < 80) {
return;
}this.videoPanel.setLoader$org_opensourcephysics_media_core_VideoIO_FinalizableLoader(null);
try {
switch (trackerPanel.progress) {
case 80:
var child;
var video=this.finalizeClip$();
if (video != null ) {
var stack=video.getFilterStack$();
var filters=stack.getFilters$();
for (var i=0, n=filters.size$(); i < n; i++) {
var filter=filters.get$I(i);
filter.setVideoPanel$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
if (filter.inspectorX != -2147483648) {
filter.inspectorVisible=true;
if (trackerPanel.visibleFilters == null ) {
trackerPanel.visibleFilters=Clazz.new_($I$(10,1));
}var p=Clazz.new_($I$(5,1).c$$I$I,[filter.inspectorX, filter.inspectorY]);
trackerPanel.visibleFilters.put$O$O(filter, p);
}}
}child=this.control.getChildControl$S("clipcontrol");
if (child != null ) {
child.loadObject$O(trackerPanel.getPlayer$().getClipControl$());
}trackerPanel.progress=85;
break;
case 85:
child=this.control.getChildControl$S("toolbar");
if (child != null  && trackerPanel.frame != null  ) {
var toolbar=Clazz.new_($I$(11,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[trackerPanel]);
child.loadObject$O(toolbar);
trackerPanel.frame.setToolBar$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TToolBar(trackerPanel, toolbar);
}child=this.control.getChildControl$S("coords");
if (child != null ) {
var coords=trackerPanel.getCoords$();
child.loadObject$O(coords);
var n=trackerPanel.getFrameNumber$();
trackerPanel.getSnapPoint$().setXY$D$D(coords.getOriginX$I(n), coords.getOriginY$I(n));
}trackerPanel.progress=90;
break;
case 90:
var tracks=Clazz.getClass($I$(12)).cast$O(this.control.getObject$S("tracks"));
if (tracks == null ) {
trackerPanel.progress=95;
break;
}for (var i=0, n=tracks.size$(); i < n; i++) {
trackerPanel.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack(tracks.get$I(i));
}
trackerPanel.progress=92;
break;
case 92:
var traks=trackerPanel.getTracks$();
for (var i=0, n=traks.size$(); i < n; i++) {
traks.get$I(i).initialize$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
}
var scenes=this.control.getObject$S("drawing_scenes");
if (scenes != null ) {
var drawer=$I$(2).getDrawer$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
drawer.setDrawingsVisible$Z$Z(this.control.getBoolean$S("drawings_visible"), false);
drawer.setScenes$java_util_ArrayList(scenes);
}var drawings=this.control.getObject$S("drawings");
if (drawings != null ) {
var drawer=$I$(2).getDrawer$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
drawer.setDrawingsVisible$Z$Z(this.control.getBoolean$S("drawings_visible"), false);
drawer.clearScenes$Z(false);
for (var i=0, n=drawings.size$(); i < n; i++) {
drawer.addDrawingtoSelectedScene$org_opensourcephysics_cabrillo_tracker_PencilDrawing(drawings.get$I(i));
}
}trackerPanel.progress=95;
break;
case 95:
var rfName=this.control.getString$S("referenceframe");
if (rfName != null ) {
trackerPanel.setReferenceFrame$S(rfName);
}var name=this.control.getString$S("selectedtrack");
trackerPanel.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(name == null  ? null : trackerPanel.getTrack$S(name));
trackerPanel.progress=100;
break;
}
} finally {
}
if (trackerPanel.progress == 100) {
if (this.asyncloader != null ) this.asyncloader.finalized$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
this.dispose$();
}});

Clazz.newMeth(C$, 'dispose$',  function () {
this.asyncloader=null;
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var writeNullFinalArrayElements=$I$(13).defaultWriteNullFinalArrayElements;
$I$(13).defaultWriteNullFinalArrayElements=false;
var trackerPanel=obj;
control.setValue$S$O("semantic_version", "6.3.5.260922");
control.setValue$S$D("width", trackerPanel.getImageWidth$());
control.setValue$S$D("height", trackerPanel.getImageHeight$());
var zoom=trackerPanel.getPreferredSize$().width > 10 ? trackerPanel.getMagnification$() : -1;
control.setValue$S$D("magnification", zoom);
if (trackerPanel.getTFrame$() != null ) {
var mainView=trackerPanel.getTFrame$().getMainView$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
var rect=mainView.scrollPane.getViewport$().getViewRect$();
control.setValue$S$I("center_x", (rect.getCenterX$()|0));
control.setValue$S$I("center_y", (rect.getCenterY$()|0));
}if (trackerPanel.hideDescriptionWhenLoaded) {
control.setValue$S$Z("hide_description", true);
}if (!trackerPanel.description.trim$().equals$O("")) {
control.setValue$S$O("description", trackerPanel.description);
}if (trackerPanel.author != null ) {
control.setValue$S$O("author", trackerPanel.author);
}if (trackerPanel.contact != null ) {
control.setValue$S$O("contact", trackerPanel.contact);
}control.setValue$S$O("videoclip", trackerPanel.getPlayer$().getVideoClip$());
control.setValue$S$O("clipcontrol", trackerPanel.getPlayer$().getClipControl$());
var coords=trackerPanel.getCoords$();
while (Clazz.instanceOf(coords, "org.opensourcephysics.cabrillo.tracker.ReferenceFrame")){
var refFrame=coords;
var track=refFrame.getOriginTrack$();
control.setValue$S$O("referenceframe", track.getName$());
coords=refFrame.getCoords$();
}
control.setValue$S$O("coords", coords);
var customPatterns=C$.getSaveCustomFormatPatterns$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
if (customPatterns.length > 0) {
control.setValue$S$O("number_formats", customPatterns);
}control.setValue$S$O("time_unit", trackerPanel.getTimeUnit$());
control.setValue$S$O("length_unit", trackerPanel.lengthUnit);
control.setValue$S$O("mass_unit", trackerPanel.massUnit);
control.setValue$S$Z("radians", trackerPanel.isAnglesInRadians$());
control.setValue$S$Z("units_visible", trackerPanel.unitsVisible);
control.setValue$S$O("tracks", trackerPanel.getTracksToSave$());
var track=trackerPanel.getSelectedTrack$();
if (track != null ) {
control.setValue$S$O("selectedtrack", track.getName$());
}if ($I$(2).hasDrawings$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel)) {
var drawer=$I$(2).getDrawer$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
control.setValue$S$O("drawing_scenes", drawer.scenes);
control.setValue$S$Z("drawings_visible", drawer.areDrawingsVisible$());
}if (!$I$(6,"isDefaultConfiguration$java_util_Set",[trackerPanel.getEnabled$()]) && trackerPanel.isEnabled$S("config.saveWithData") ) {
control.setValue$S$O("configuration", Clazz.new_($I$(14,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[trackerPanel]));
}var frame=trackerPanel.getTFrame$();
if (frame != null ) {
var dividerLocations=Clazz.array(Double.TYPE, [4]);
var w=0;
var order=$I$(15).isPortraitLayout$() ? $I$(15).PORTRAIT_DIVIDER_ORDER : $I$(15).DEFAULT_ORDER;
for (var i=0; i < dividerLocations.length; i++) {
var pane=frame.getSplitPane$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(trackerPanel, i);
if (i == 0) w=pane.getMaximumDividerLocation$();
var max=i == 3 ? w : pane.getMaximumDividerLocation$();
var loc=Math.min(1.0, 1.0 * pane.getDividerLocation$() / max);
dividerLocations[order[i]]=frame.getConvertedDividerLoc$I$D(order[i], loc);
}
control.setValue$S$O("dividers", dividerLocations);
var customViews=frame.getTViews$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z(trackerPanel, true);
for (var i=0; i < customViews.length; i++) {
if (customViews[i] == null ) continue;
control.setValue$S$O("views", customViews);
break;
}
var selectedViewTypes=frame.getSelectedViewTypes$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
control.setValue$S$O("selected_view_types", selectedViewTypes);
var selectedTrackViews=frame.getSelectedTrackViews$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
control.setValue$S$O("selected_track_views", selectedTrackViews);
var toolbar=trackerPanel.getToolBar$Z(true);
control.setValue$S$O("toolbar", toolbar);
var tc=trackerPanel.trackControl;
if (tc != null  && tc.isVisible$() ) {
var x=tc.getLocation$().x - frame.getLocation$().x;
var y=tc.getLocation$().y - frame.getLocation$().y;
control.setValue$S$I("track_control_x", x);
control.setValue$S$I("track_control_y", y);
}if (frame.notesVisible$()) {
var x=frame.getNotesDialog$().getLocation$().x - frame.getLocation$().x;
var y=frame.getNotesDialog$().getLocation$().y - frame.getLocation$().y;
control.setValue$S$I("info_x", x);
control.setValue$S$I("info_y", y);
}}var tool=$I$(16).getTool$Z(false);
if (tool != null ) {
var tabs=Clazz.new_($I$(12,1));
var tools=tool.getTabs$();
var n=tools.size$();
if (n > 0) {
var tracks=trackerPanel.getTracks$();
for (var i=0; i < n; i++) {
var tab=tools.get$I(i);
for (var next, $next = tracks.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var data=next.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
if (tab.isOwnedBy$org_opensourcephysics_display_Data(data)) {
tab.setOwner$S$org_opensourcephysics_display_Data(next.getName$(), data);
for (var tt, $tt = tracks.iterator$(); $tt.hasNext$()&&((tt=($tt.next$())),1);) {
tab.saveOwnedColumnNames$S$org_opensourcephysics_display_Data(tt.getName$(), tt.getData$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel));
}
tabs.add$O(tab);
}}
}
if (!tabs.isEmpty$()) {
var tabArray=tabs.toArray$OA(Clazz.array($I$(17), [tabs.size$()]));
control.setValue$S$O("datatool_tabs", tabArray);
}}}$I$(13).defaultWriteNullFinalArrayElements=writeNullFinalArrayElements;
});

Clazz.newMeth(C$, 'getSaveCustomFormatPatterns$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
var path=Clazz.getClass($I$(18)).getName$();
path=path.substring$I$I(0, path.lastIndexOf$S(".") + 1);
var formats=Clazz.new_($I$(12,1));
var dpatterns=$I$(9).getDefaultFormatPatterns$();
for (var ttype=0, n=dpatterns.length; ttype < n; ttype++) {
var defaultPatterns=dpatterns[ttype];
if (defaultPatterns == null ) continue;
var patterns=panel.getFormatPatterns$I(ttype);
var customPatterns=Clazz.new_($I$(12,1));
var type=$I$(9).getBaseTrackName$I(ttype);
for (var name, $name = defaultPatterns.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
var defaultPattern=defaultPatterns.get$O(name);
var pattern=patterns.get$O(name);
if (!defaultPattern.equals$O(pattern)) {
if (customPatterns.isEmpty$()) {
customPatterns.add$O(path + type);
}customPatterns.add$O(name);
customPatterns.add$O(pattern == null  ? "" : pattern);
}}
for (var name, $name = patterns.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
var defaultPattern=defaultPatterns.get$O(name);
if (defaultPattern == null ) {
defaultPattern="";
}var pattern=patterns.get$O(name);
if (!pattern.equals$O(defaultPattern) && !customPatterns.contains$O(name) ) {
if (customPatterns.isEmpty$()) {
customPatterns.add$O(path + type);
}customPatterns.add$O(name);
customPatterns.add$O(pattern);
}}
if (!customPatterns.isEmpty$()) {
formats.add$O(customPatterns.toArray$OA(Clazz.array(String, [customPatterns.size$()])));
}}
return formats.toArray$OA(Clazz.array(String, [formats.size$(), null]));
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
