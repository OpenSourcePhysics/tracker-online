(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.display.GUIUtils','java.awt.Point','org.opensourcephysics.cabrillo.tracker.TrackerRes','java.awt.Dimension','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.cabrillo.tracker.PencilDrawer','java.awt.KeyboardFocusManager','org.opensourcephysics.cabrillo.tracker.TToolBar','javax.swing.SwingUtilities','java.awt.Cursor','org.opensourcephysics.cabrillo.tracker.TFrame','java.awt.Toolkit','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.js.AIPatch','org.opensourcephysics.cabrillo.tracker.TTrack','org.opensourcephysics.cabrillo.tracker.AutoTracker']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TMouseHandler", null, null, 'org.opensourcephysics.display.InteractiveMouseHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.iad=null;
this.selectedPoint=null;
this.stepCreated=false;
this.autoTracked=false;
this.mousePtRelativeToViewRect=Clazz.new_($I$(3,1));
this.viewLoc=Clazz.new_($I$(3,1));
this.dim=Clazz.new_($I$(5,1));
this.isDraggingFrame=false;
this.isResizingFrame=false;
this.mouseLoc=Clazz.new_($I$(3,1));
this.frameLoc=Clazz.new_($I$(3,1));
this.frameDim=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['Z',['stepCreated','autoTracked','marking','isDraggingFrame','isResizingFrame'],'I',['frameNumber'],'O',['iad','org.opensourcephysics.display.Interactive','selectedPoint','org.opensourcephysics.media.core.TPoint','selectedTrack','org.opensourcephysics.cabrillo.tracker.TTrack','mousePtRelativeToViewRect','java.awt.Point','+viewLoc','dim','java.awt.Dimension','mouseLoc','java.awt.Point','+frameLoc','frameDim','java.awt.Dimension']]
,['O',['markPointCursor','java.awt.Cursor','+autoTrackCursor','+autoTrackMarkCursor']]]

Clazz.newMeth(C$, 'handleMouseAction$org_opensourcephysics_display_InteractivePanel$java_awt_event_MouseEvent',  function (panel, e) {
if (!(Clazz.instanceOf(panel, "org.opensourcephysics.cabrillo.tracker.TrackerPanel"))) return;
var trackerPanel=panel;
if ($I$(6).isPopupTrigger$java_awt_event_InputEvent(e) || panel.getZoomBox$().isVisible$() ) {
this.iad=null;
return;
}if (!trackerPanel.isDrawingInImageSpace$()) return;
if ($I$(7).isDrawing$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel)) {
$I$(7).getDrawer$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel).handleMouseAction$java_awt_event_MouseEvent(e);
return;
}var focuser=$I$(8).getCurrentKeyboardFocusManager$();
var focusOwner=focuser.getFocusOwner$();
var autoTracker=trackerPanel.getAutoTracker$Z(false);
if (autoTracker != null  && autoTracker.getTrack$() == null  ) autoTracker.setTrack$org_opensourcephysics_cabrillo_tracker_TTrack(trackerPanel.getSelectedTrack$());
switch (trackerPanel.getMouseAction$()) {
case 7:
this.selectedTrack=trackerPanel.getSelectedTrack$();
this.frameNumber=trackerPanel.getFrameNumber$();
this.iad=trackerPanel.getInteractive$();
var invertCursor=e.isShiftDown$();
this.marking=trackerPanel.setCursorForMarking$Z$java_awt_event_InputEvent(invertCursor, e);
if (this.selectedTrack != null  && this.marking != this.selectedTrack.isMarking  ) {
this.selectedTrack.setMarking$Z(this.marking);
}if (this.marking) {
this.iad=null;
if (this.selectedTrack != null  && this.selectedTrack.ttype == 8 ) {
var tape=this.selectedTrack;
if (tape.isIncomplete) {
tape.createStep$I$D$D$D$D(this.frameNumber, 0, 0, trackerPanel.getMouseX$(), trackerPanel.getMouseY$());
}}}if (this.selectedTrack != null ) {
if (autoTracker != null  && autoTracker.getWizard$().isVisible$()  && autoTracker.getTrack$() === this.selectedTrack  ) {
var step=this.selectedTrack.getStep$I(this.frameNumber);
if (step != null ) {
this.selectedTrack.repaintStep$org_opensourcephysics_cabrillo_tracker_Step(step);
}}}if ($I$(6).outOfMemory) {
$I$(9).refreshMemoryButton$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
}break;
case 1:
if ($I$(1).startupHintShown) {
$I$(1).startupHintShown=false;
trackerPanel.setMessage$S("");
}trackerPanel.hidePopup$();
this.iad=trackerPanel.getInteractive$();
this.marking=(this.selectedTrack != null  && trackerPanel.cursorType == this.selectedTrack.getMarkingCursorType$java_awt_event_InputEvent(e) );
if (this.marking) {
p$1.markPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_awt_event_MouseEvent$org_opensourcephysics_cabrillo_tracker_AutoTracker.apply(this, [trackerPanel, e, autoTracker]);
return;
}if (Clazz.instanceOf(this.iad, "org.opensourcephysics.media.core.TPoint")) {
p$1.selectPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_awt_event_MouseEvent.apply(this, [trackerPanel, e]);
return;
}p$1.clearInteractive$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_awt_event_MouseEvent.apply(this, [trackerPanel, e]);
this.isDraggingFrame=false;
this.isResizingFrame=false;
if (!$I$(10).isRightMouseButton$java_awt_event_MouseEvent(e) && !$I$(10).isMiddleMouseButton$java_awt_event_MouseEvent(e) && !$I$(1,"isZoomInCursor$java_awt_Cursor",[trackerPanel.getCursor$()]) && !$I$(1,"isZoomOutCursor$java_awt_Cursor",[trackerPanel.getCursor$()]) && !trackerPanel.isPointOnImage$java_awt_Point(e.getPoint$())  ) {
var frame=trackerPanel.getTFrame$();
if (frame == null ) {
frame=$I$(10).getWindowAncestor$java_awt_Component(trackerPanel);
}if (frame != null ) {
var startMouse=p$1.getScreenLocation$java_awt_event_MouseEvent$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [e, trackerPanel]);
if (startMouse != null ) {
var ptInFrame=$I$(10,"convertPoint$java_awt_Component$java_awt_Point$java_awt_Component",[trackerPanel, e.getPoint$(), frame]);
var cornerSize=20;
if (ptInFrame.x >= frame.getWidth$() - cornerSize && ptInFrame.y >= frame.getHeight$() - cornerSize ) {
this.mouseLoc.setLocation$java_awt_Point(startMouse);
this.frameDim.setSize$java_awt_Dimension(frame.getSize$());
this.isResizingFrame=true;
trackerPanel.setMouseCursor$java_awt_Cursor($I$(11).getPredefinedCursor$I(5));
} else {
this.mouseLoc.setLocation$java_awt_Point(startMouse);
this.frameLoc.setLocation$java_awt_Point(frame.getLocation$());
this.isDraggingFrame=true;
trackerPanel.setMouseCursor$java_awt_Cursor($I$(1).grabCursor);
}}}}return;
case 3:
if (this.isResizingFrame) {
var frame=trackerPanel.getTFrame$();
if (frame == null ) {
frame=$I$(10).getWindowAncestor$java_awt_Component(trackerPanel);
}if (frame != null ) {
var curMouse=p$1.getScreenLocation$java_awt_event_MouseEvent$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [e, trackerPanel]);
if (curMouse != null ) {
var dx=curMouse.x - this.mouseLoc.x;
var dy=curMouse.y - this.mouseLoc.y;
var newW=Math.max(320, this.frameDim.width + dx);
var newH=Math.max(220, this.frameDim.height + dy);
frame.setSize$I$I(newW, newH);
frame.validate$();
trackerPanel.setMouseCursor$java_awt_Cursor($I$(11).getPredefinedCursor$I(5));
}}$I$(12).repaintT$java_awt_Component(trackerPanel);
break;
}if (this.isDraggingFrame) {
var frame=trackerPanel.getTFrame$();
if (frame == null ) {
frame=$I$(10).getWindowAncestor$java_awt_Component(trackerPanel);
}if (frame != null ) {
var curMouse=p$1.getScreenLocation$java_awt_event_MouseEvent$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this, [e, trackerPanel]);
if (curMouse != null ) {
var dx=curMouse.x - this.mouseLoc.x;
var dy=curMouse.y - this.mouseLoc.y;
frame.setLocation$I$I(this.frameLoc.x + dx, this.frameLoc.y + dy);
trackerPanel.setMouseCursor$java_awt_Cursor($I$(1).grabCursor);
}}$I$(12).repaintT$java_awt_Component(trackerPanel);
break;
}this.selectedPoint=trackerPanel.getSelectedPoint$();
var track=trackerPanel.getSelectedTrack$();
if (this.selectedPoint != null ) {
var dx=0;
var dy=0;
if (track != null  && track.isLocked$()  && !(Clazz.instanceOf(track, "org.opensourcephysics.cabrillo.tracker.VectorSum")) ) {
$I$(13).getDefaultToolkit$().beep$();
$I$(14).finer$S(track + " is locked");
return;
}this.selectedPoint.setAdjusting$Z$java_awt_event_MouseEvent(true, e);
var scrPt=this.selectedPoint.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
dx=e.getX$() - scrPt.x;
dy=e.getY$() - scrPt.y;
this.selectedPoint.setScreenPosition$I$I$org_opensourcephysics_media_core_VideoPanel$java_awt_event_InputEvent(e.getX$(), e.getY$(), trackerPanel, e);
this.selectedPoint.showCoordinates$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
trackerPanel.selectedSteps.setChanged$Z(true);
for (var step, $step = trackerPanel.selectedSteps.iterator$(); $step.hasNext$()&&((step=($step.next$())),1);) {
this.selectedPoint=step.points[0];
if (this.selectedPoint === trackerPanel.getSelectedPoint$() ) continue;
this.selectedPoint.setAdjusting$Z$java_awt_event_MouseEvent(true, e);
scrPt=this.selectedPoint.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
this.selectedPoint.setScreenPosition$I$I$org_opensourcephysics_media_core_VideoPanel$java_awt_event_InputEvent(scrPt.x + dx, scrPt.y + dy, trackerPanel, e);
}
} else if (!$I$(1,"isZoomInCursor$java_awt_Cursor",[trackerPanel.getCursor$()]) && !$I$(1,"isZoomOutCursor$java_awt_Cursor",[trackerPanel.getCursor$()]) ) {
var rect=trackerPanel.scrollPane.getViewport$().getViewRect$();
trackerPanel.scrollPane.getViewport$().getView$().getSize$java_awt_Dimension(this.dim);
var dx=this.mousePtRelativeToViewRect.x - e.getPoint$().x + rect.x;
var dy=this.mousePtRelativeToViewRect.y - e.getPoint$().y + rect.y;
var x=Math.max(0, this.viewLoc.x + dx);
x=Math.min(x, this.dim.width - rect.width);
var y=Math.max(0, this.viewLoc.y + dy);
y=Math.min(y, this.dim.height - rect.height);
if (x != rect.x || y != rect.y ) {
trackerPanel.setMouseCursor$java_awt_Cursor($I$(1).grabCursor);
rect.x=x;
rect.y=y;
trackerPanel.scrollRectToVisible$java_awt_Rectangle(rect);
} else {
this.viewLoc.setLocation$java_awt_Point(rect.getLocation$());
this.mousePtRelativeToViewRect.setLocation$I$I(e.getPoint$().x - rect.x, e.getPoint$().y - rect.y);
}}if (trackerPanel.getSelectedStep$() == null ) $I$(12).repaintT$java_awt_Component(trackerPanel);
break;
case 2:
if (this.isResizingFrame) {
this.isResizingFrame=false;
trackerPanel.setMouseCursor$java_awt_Cursor($I$(11).getDefaultCursor$());
trackerPanel.requestFocusInWindow$();
$I$(15,"setupResizer$java_awt_Window",[trackerPanel.getTFrame$()]);
break;
}if (this.isDraggingFrame) {
this.isDraggingFrame=false;
trackerPanel.setMouseCursor$java_awt_Cursor($I$(11).getDefaultCursor$());
trackerPanel.requestFocusInWindow$();
break;
}var c=trackerPanel.getCursor$();
if (!$I$(1).isZoomInCursor$java_awt_Cursor(c) && !$I$(1).isZoomOutCursor$java_awt_Cursor(c) ) {
trackerPanel.setMouseCursor$java_awt_Cursor($I$(11).getDefaultCursor$());
}trackerPanel.requestFocusInWindow$();
this.selectedPoint=trackerPanel.getSelectedPoint$();
if (this.selectedPoint != null ) {
this.selectedPoint.setAdjusting$Z$java_awt_event_MouseEvent(false, e);
if (Clazz.instanceOf(this.selectedPoint, "org.opensourcephysics.cabrillo.tracker.VectorStep.Handle")) {
(this.selectedPoint).snap$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
}}if (this.stepCreated && this.selectedTrack != null   && this.selectedTrack.isAutoAdvance$() ) {
trackerPanel.getPlayer$().step$();
trackerPanel.hideMouseBox$();
this.stepCreated=false;
}this.autoTracked=false;
break;
case 5:
if (focusOwner != null  && !(Clazz.instanceOf(focusOwner, "javax.swing.text.JTextComponent")) ) {
trackerPanel.requestFocusInWindow$();
}}
});

Clazz.newMeth(C$, 'clearInteractive$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_awt_event_MouseEvent',  function (trackerPanel, e) {
if (trackerPanel.getSelectedPoint$() != null ) {
trackerPanel.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
}var tracks=trackerPanel.selectedSteps.getTracks$();
for (var step, $step = trackerPanel.selectedSteps.iterator$(); $step.hasNext$()&&((step=($step.next$())),1);) {
step.erase$();
}
trackerPanel.selectedSteps.clear$();
for (var next, $next = 0, $$next = tracks; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
next.fireStepsChanged$();
}
if (!trackerPanel.isShowCoordinates$()) {
trackerPanel.hideMouseBox$();
trackerPanel.setMouseCursor$java_awt_Cursor($I$(11).getDefaultCursor$());
}if (e.getClickCount$() == 2) {
trackerPanel.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(null);
}var rect=trackerPanel.scrollPane.getViewport$().getViewRect$();
this.viewLoc.setLocation$java_awt_Point(rect.getLocation$());
this.mousePtRelativeToViewRect.setLocation$I$I(e.getPoint$().x - rect.x, e.getPoint$().y - rect.y);
trackerPanel.scrollPane.getViewport$().getView$().getSize$java_awt_Dimension(this.dim);
var c=trackerPanel.getCursor$();
if ((this.dim.width > rect.width || this.dim.height > rect.height ) && !$I$(1).isZoomInCursor$java_awt_Cursor(c) && !$I$(1).isZoomOutCursor$java_awt_Cursor(c)  ) {
trackerPanel.setMouseCursor$java_awt_Cursor($I$(1).grabCursor);
}}, p$1);

Clazz.newMeth(C$, 'selectPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_awt_event_MouseEvent',  function (trackerPanel, e) {
this.selectedPoint=this.iad;
var step=null;
var stepTrack=null;
for (var track, $track = trackerPanel.getTracksTemp$().iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
step=track.getStep$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.selectedPoint, trackerPanel);
if (step != null ) {
stepTrack=track;
break;
}}
trackerPanel.clearTemp$();
var isStepSelected=trackerPanel.selectedSteps.contains$O(step);
var selectedStepsChanged=false;
if (e.isControlDown$()) {
if (isStepSelected) {
this.selectedPoint=null;
trackerPanel.selectedSteps.remove$O(step);
selectedStepsChanged=true;
} else {
if (!trackerPanel.selectedSteps.isEmpty$()) {
this.selectedPoint=null;
}trackerPanel.selectedSteps.add$org_opensourcephysics_cabrillo_tracker_Step(step);
selectedStepsChanged=true;
}} else {
if (trackerPanel.selectedSteps.contains$O(step)) {
} else {
var stepsIncludeSelectedPoint=false;
for (var next, $next = trackerPanel.selectedSteps.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.erase$();
stepsIncludeSelectedPoint=stepsIncludeSelectedPoint || next.getPoints$()[0] === trackerPanel.getSelectedPoint$()  ;
}
trackerPanel.selectedSteps.clear$();
trackerPanel.selectedSteps.add$org_opensourcephysics_cabrillo_tracker_Step(step);
selectedStepsChanged=true;
if (stepsIncludeSelectedPoint) {
trackerPanel.pointState.setLocation$java_awt_geom_Point2D(trackerPanel.getSelectedPoint$());
}}}if (selectedStepsChanged && stepTrack != null  ) {
stepTrack.firePropertyChange$S$O$O("steps", $I$(16).HINT_STEPS_SELECTED, null);
}if (step != null ) step.erase$();
if (Clazz.instanceOf(this.selectedPoint, "org.opensourcephysics.cabrillo.tracker.AutoTracker.Handle")) {
(this.selectedPoint).setScreenLocation$I$I$org_opensourcephysics_media_core_VideoPanel(e.getX$(), e.getY$(), trackerPanel);
} else if (Clazz.instanceOf(this.selectedPoint, "org.opensourcephysics.cabrillo.tracker.Ruler.Handle")) {
(this.selectedPoint).setScreenLocation$I$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel(e.getX$(), e.getY$(), trackerPanel);
}if (this.selectedPoint != null ) {
this.selectedPoint.setAdjusting$Z$java_awt_event_MouseEvent(true, e);
this.selectedPoint.showCoordinates$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
trackerPanel.setSelectedPoint$org_opensourcephysics_media_core_TPoint(this.selectedPoint);
}if (Clazz.instanceOf(this.selectedPoint, "org.opensourcephysics.cabrillo.tracker.Step.Handle")) {
(this.selectedPoint).setPositionOnLine$I$I$org_opensourcephysics_cabrillo_tracker_TrackerPanel(e.getX$(), e.getY$(), trackerPanel);
}}, p$1);

Clazz.newMeth(C$, 'markPoint$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_awt_event_MouseEvent$org_opensourcephysics_cabrillo_tracker_AutoTracker',  function (trackerPanel, e, autoTracker) {
this.iad=null;
var autotrackEneabled=trackerPanel.isEnabled$S("track.autotrack");
var autotrackTrigger=autotrackEneabled && ($I$(17).isAutoTrackTrigger$java_awt_event_InputEvent(e) && this.selectedTrack.isAutoTrackable$() && trackerPanel.getVideo$() != null   ) ;
var keyFrameData=(autotrackTrigger ? this.getActiveKeyFrame$org_opensourcephysics_cabrillo_tracker_AutoTracker(autoTracker) : null);
this.frameNumber=trackerPanel.getFrameNumber$();
var step=this.selectedTrack.getStep$I(this.frameNumber);
var index=this.selectedTrack.getTargetIndex$();
var nextIndex=index;
var newStep=(step == null );
if (step == null  || !autotrackTrigger ) {
if (autotrackTrigger) {
this.selectedTrack.autoMarkAt$I$D$D(this.frameNumber, trackerPanel.getMouseX$(), trackerPanel.getMouseY$());
step=this.selectedTrack.getStep$I(this.frameNumber);
} else {
if (this.selectedTrack.ttype == 5) {
this.selectedTrack.keyFrames.add$O(Integer.valueOf$I(this.frameNumber));
}step=this.selectedTrack.createStep$I$D$D(this.frameNumber, trackerPanel.getMouseX$(), trackerPanel.getMouseY$());
if (this.selectedTrack.ttype == 5) {
var m=this.selectedTrack;
if (m.isAutofill$()) {
m.markInterpolatedSteps$org_opensourcephysics_cabrillo_tracker_PositionStep$Z(step, true);
}}trackerPanel.newlyMarkedPoint=step.getDefaultPoint$();
var pts=step.getPoints$();
if (newStep && pts.length > index + 1 ) nextIndex=index + 1;
}} else if (step.getPoints$()[index] == null ) {
if (keyFrameData != null ) {
var target=keyFrameData.getTarget$();
target.setXY$D$D(trackerPanel.getMouseX$(), trackerPanel.getMouseY$());
}this.selectedTrack.autoMarkAt$I$D$D(this.frameNumber, trackerPanel.getMouseX$(), trackerPanel.getMouseY$());
var pts=step.getPoints$();
if (pts.length > index + 1) nextIndex=index + 1;
}if (autotrackTrigger && step != null   && step.getPoints$()[index] != null  ) {
var target=step.getPoints$()[index];
if (autoTracker == null ) {
autoTracker=trackerPanel.getAutoTracker$Z(true);
autoTracker.setTrack$org_opensourcephysics_cabrillo_tracker_TTrack(trackerPanel.getSelectedTrack$());
}if (autoTracker.getTrack$() === this.selectedTrack ) {
switch (this.selectedTrack.ttype) {
case 2:
case 8:
case 10:
case 6:
if (autoTracker.getOrCreateFrameData$I(this.frameNumber).getKeyFrameData$() == null ) {
target.setXY$D$D(trackerPanel.getMouseX$(), trackerPanel.getMouseY$());
}break;
}
}if (autoTracker.addKeyFrame$org_opensourcephysics_media_core_TPoint$D$D(target, trackerPanel.getMouseX$(), trackerPanel.getMouseY$())) {
trackerPanel.refreshTrackBar$();
} else {
if (newStep) {
this.selectedTrack.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(this.frameNumber, null);
this.selectedTrack.fireStepsChanged$();
}return;
}}if (step != null  && !autotrackTrigger ) {
trackerPanel.setMouseCursor$java_awt_Cursor($I$(11).getPredefinedCursor$I(12));
trackerPanel.setSelectedPoint$org_opensourcephysics_media_core_TPoint(step.getDefaultPoint$());
this.selectedTrack.repaintStep$org_opensourcephysics_cabrillo_tracker_Step(step);
this.iad=this.selectedPoint=trackerPanel.getSelectedPoint$();
this.stepCreated=keyFrameData == null ;
}this.selectedTrack.setTargetIndex$I(nextIndex);
if (autoTracker != null  && autoTracker.getWizard$().isVisible$() ) {
autoTracker.getWizard$().refreshGUI$();
}}, p$1);

Clazz.newMeth(C$, 'getActiveKeyFrame$org_opensourcephysics_cabrillo_tracker_AutoTracker',  function (autoTracker) {
var frameData;
return (this.selectedTrack != null  && autoTracker != null   && this.selectedTrack === autoTracker.getTrack$()   && autoTracker.getWizard$().isVisible$()  && (frameData=autoTracker.getOrCreateFrameData$I(this.frameNumber)).getKeyFrameData$() === frameData   ? frameData : null);
});

Clazz.newMeth(C$, 'getScreenLocation$java_awt_event_MouseEvent$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (e, trackerPanel) {
return $I$(15).getScreenLocation$java_awt_event_MouseEvent$java_awt_Component$S(e, trackerPanel, "TMouseHandler " + e);
}, p$1);

C$.$static$=function(){C$.$static$=0;
{
var icon=$I$(1).getResourceIcon$S$Z("creatept.gif", false);
C$.markPointCursor=$I$(2,"createCustomCursor$java_awt_Image$java_awt_Point$S$I",[icon.getImage$(), Clazz.new_($I$(3,1).c$$I$I,[8, 8]), $I$(4).getString$S("Tracker.Cursor.Crosshair.Description"), 13]);
icon=$I$(1).getResourceIcon$S$Z("autotrack.gif", false);
C$.autoTrackCursor=$I$(2,"createCustomCursor$java_awt_Image$java_awt_Point$S$I",[icon.getImage$(), Clazz.new_($I$(3,1).c$$I$I,[9, 9]), $I$(4).getString$S("PointMass.Cursor.Autotrack.Description"), 13]);
icon=$I$(1).getResourceIcon$S$Z("autotrack_mark.gif", false);
C$.autoTrackMarkCursor=$I$(2,"createCustomCursor$java_awt_Image$java_awt_Point$S$I",[icon.getImage$(), Clazz.new_($I$(3,1).c$$I$I,[9, 9]), $I$(4).getString$S("Tracker.Cursor.Autotrack.Keyframe.Description"), 13]);
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
