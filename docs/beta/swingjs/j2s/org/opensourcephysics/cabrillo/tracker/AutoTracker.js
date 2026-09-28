(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},p$2={},I$=[[0,'java.awt.Point','java.awt.geom.AffineTransform',['java.awt.geom.Point2D','.Double'],'javax.swing.ImageIcon','org.opensourcephysics.media.core.TPoint','javax.swing.AbstractAction','org.opensourcephysics.display.OSPRuntime','javax.swing.SwingUtilities','java.awt.Toolkit','org.opensourcephysics.tools.FontSizer','javax.swing.DefaultComboBoxModel',['java.awt.geom.Ellipse2D','.Double'],['java.awt.geom.Rectangle2D','.Double'],'org.opensourcephysics.cabrillo.tracker.TToolBar','org.opensourcephysics.cabrillo.tracker.TrackerRes','java.awt.event.KeyAdapter','javax.swing.Timer','org.opensourcephysics.display.GUIUtils','java.awt.event.MouseAdapter','java.awt.event.WindowAdapter','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JComboBox','org.opensourcephysics.cabrillo.tracker.TrackRenderer','org.opensourcephysics.cabrillo.tracker.TTrack','javax.swing.JButton','org.opensourcephysics.cabrillo.tracker.AutoTracker','javax.swing.BorderFactory','javax.swing.JToolBar','javax.swing.JLabel',['org.opensourcephysics.cabrillo.tracker.AutoTracker','.TallSpinner'],'javax.swing.SpinnerNumberModel',['javax.swing.JFormattedTextField','.AbstractFormatter'],['javax.swing.JFormattedTextField','.AbstractFormatterFactory'],'javax.swing.JSpinner','java.awt.Color','javax.swing.JRadioButton','org.opensourcephysics.cabrillo.tracker.TFrame','javax.swing.ButtonGroup','javax.swing.JCheckBox','javax.swing.JTextArea','java.awt.datatransfer.StringSelection','java.awt.GridLayout','java.awt.FlowLayout','javax.swing.JPopupMenu','javax.swing.JMenuItem',['org.opensourcephysics.cabrillo.tracker.AutoTracker','.FrameData'],'java.awt.Dimension','StringBuffer','org.opensourcephysics.controls.XML','org.opensourcephysics.media.core.VideoIO','java.text.NumberFormat','java.awt.Rectangle','org.opensourcephysics.cabrillo.tracker.PointShapeFootprint','java.awt.BasicStroke','org.opensourcephysics.cabrillo.tracker.Tracker',['org.opensourcephysics.cabrillo.tracker.AutoTracker','.Handle'],['org.opensourcephysics.cabrillo.tracker.AutoTracker','.Corner'],'java.util.HashMap','java.util.TreeMap','java.util.ArrayList','java.awt.Robot',['org.opensourcephysics.cabrillo.tracker.AutoTracker','.Wizard'],['org.opensourcephysics.cabrillo.tracker.AutoTracker','.Target'],'javajs.async.AsyncDialog',['org.opensourcephysics.cabrillo.tracker.AutoTracker','.KeyFrameData'],'Thread','java.awt.MouseInfo','org.opensourcephysics.media.core.TemplateMatcher','java.awt.image.BufferedImage','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.cabrillo.tracker.Undo','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.cabrillo.tracker.Step','java.awt.RenderingHints']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AutoTracker", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['org.opensourcephysics.display.Interactive', 'org.opensourcephysics.media.core.Trackable', 'java.beans.PropertyChangeListener']);
C$.$classes$=[['ATObject',1028],['Handle',4],['Corner',4],['Target',4],['FrameData',4],['KeyFrameData',4],['Wizard',4],['TallSpinner',0],['SpinnerTumbleModel',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ellipseMatch=Clazz.new_($I$(12,1));
this.rectangleMatch=Clazz.new_($I$(13,1));
this.minMaskRadius=4;
this.maskHandle=Clazz.new_($I$(57,1).c$$S,[this, null, "mask"]);
this.maskCorner=Clazz.new_($I$(58,1).c$$S,[this, null, "mask"]);
this.maskCenter=Clazz.new_($I$(5,1));
this.searchHandle=Clazz.new_($I$(57,1).c$$S,[this, null, "search"]);
this.searchCorner=Clazz.new_($I$(58,1).c$$S,[this, null, "search"]);
this.searchCenter=Clazz.new_($I$(5,1));
this.predictedTarget=Clazz.new_($I$(5,1));
this.searchRect2D=Clazz.new_($I$(13,1));
this.screenPoints=Clazz.array($I$(1), -1, [Clazz.new_($I$(1,1))]);
this.goodMatch=4;
this.possibleMatch=1;
this.hitPt=Clazz.new_($I$(5,1));
this.currentms=0;
this.odd=true;
this.trackDataMap=Clazz.new_($I$(59,1));
this.dummyDataMap=Clazz.new_($I$(60,1));
this.keyFrames=Clazz.new_($I$(61,1));
this.lineSpread=-1;
this.derivatives1=Clazz.array(Double.TYPE, [3, null]);
this.derivatives2=Clazz.array(Double.TYPE, [3, null]);
this.derivatives3=Clazz.array(Double.TYPE, [3, null]);
this.test=0;
},1);

C$.$fields$=[['Z',['maskVisible','targetVisible','searchVisible','stepping','active','paused','marking','odd','isInteracting'],'I',['trackID','minMaskRadius','goodMatch','possibleMatch','evolveAlpha','tetherAlpha','lineSpread','test'],'J',['currentms','msTimeDelay'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','wizard','org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard','ellipseMatch','java.awt.geom.RectangularShape','+rectangleMatch','maskHandle','org.opensourcephysics.cabrillo.tracker.AutoTracker.Handle','maskCorner','org.opensourcephysics.cabrillo.tracker.AutoTracker.Corner','maskCenter','org.opensourcephysics.media.core.TPoint','searchHandle','org.opensourcephysics.cabrillo.tracker.AutoTracker.Handle','searchCorner','org.opensourcephysics.cabrillo.tracker.AutoTracker.Corner','searchCenter','org.opensourcephysics.media.core.TPoint','+predictedTarget','searchRect2D','java.awt.geom.Rectangle2D','searchShape','java.awt.Shape','+maskShape','+matchShape','+searchHitShape','+maskHitShape','mark','org.opensourcephysics.cabrillo.tracker.Mark','screenPoints','java.awt.Point[]','stepper','Runnable','hitPt','org.opensourcephysics.media.core.TPoint','robot','java.awt.Robot','trackDataMap','java.util.Map','+dummyDataMap','keyFrames','java.util.ArrayList','derivatives1','double[][]','+derivatives2','+derivatives3']]
,['I',['stopPolicy','searchAreaPolicy'],'O',['DOTTED_LINE','float[]','+DASHED_LINE','panelProps','String[]','hitRect','java.awt.Rectangle','transform','java.awt.geom.AffineTransform','target_footprint','org.opensourcephysics.cabrillo.tracker.Footprint','+inactive_target_footprint','+corner_footprint','format','java.text.NumberFormat','solidBold','java.awt.BasicStroke','+solid','+dotted','+dashed','searchIcon','javax.swing.Icon','+stopIcon','+graySearchIcon','+circleIcon','+squareIcon','+circleDisabledIcon','+squareDisabledIcon','defaultMaskSize','int[]','+defaultSearchSize','RUST','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.$init$.apply(this);
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
panel.addDrawable$org_opensourcephysics_display_Drawable(this);
panel.addListeners$SA$java_beans_PropertyChangeListener(C$.panelProps, this);
try {
if (!$I$(7).isJS) this.robot=Clazz.new_($I$(62,1));
} catch (e) {
if (Clazz.exceptionOf(e,"java.awt.AWTException")){
} else {
throw e;
}
}
this.stepper=((P$.AutoTracker$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AutoTracker$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
if (!this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].active || track == null  ) {
return;
}var moveSearchArea=$I$(27).searchAreaPolicy != 2;
var keepGoing=$I$(27).stopPolicy == 2;
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].markCurrentFrame$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [moveSearchArea]) || keepGoing ) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].canStep$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [])) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].stop$Z$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [true, true]);
return;
}if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].stepping) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].wizard.refreshInfo$();
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
if (track.ttype == 5 && !this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].wizard.fastCheckbox.isSelected$() ) {
var pointMass=track;
pointMass.updateDerivatives$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I(this.$finals$.panel, this.$finals$.panel.getFrameNumber$());
}this.$finals$.panel.getPlayer$().step$();
return;
}this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].stop$Z$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [true, true]);
} else {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].stepping) this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].stop$Z$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [true, false]);
 else {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].paused=true;
if (track.ttype == 5) {
var pointMass=track;
pointMass.updateDerivatives$();
}track.fireStepsChanged$();
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].wizard.refreshGUI$();
}}this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
});
})()
), Clazz.new_(P$.AutoTracker$1.$init$,[this, {panel:panel}]));
this.wizard=Clazz.new_($I$(63,1),[this, null]);
}, 1);

Clazz.newMeth(C$, 'getTrack$',  function () {
return $I$(25).getTrack$I(this.trackID);
});

Clazz.newMeth(C$, 'setTrack$org_opensourcephysics_cabrillo_tracker_TTrack',  function (newTrack) {
if (newTrack != null  && !newTrack.isAutoTrackable$() ) newTrack=null;
var track=this.getTrack$();
if (track === newTrack ) return;
if (track != null ) {
track.removePropertyChangeListener$S$java_beans_PropertyChangeListener("step", this);
track.removeListenerNCF$java_beans_PropertyChangeListener(this);
}track=newTrack;
if (track != null ) {
this.trackID=track.getID$();
this.refreshKeyFrames$();
this.frame.getTrackerPanelForID$Integer(this.panelID).setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
track.addPropertyChangeListener$S$java_beans_PropertyChangeListener("step", this);
track.addListenerNCF$java_beans_PropertyChangeListener(this);
track.setVisible$Z(true);
var searchPts=this.getCurrentFrameData$().getSearchPoints$Z(true);
if (searchPts != null ) this.setSearchPoints$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint(searchPts[0], searchPts[1]);
} else {
this.trackID=-1;
this.refreshKeyFrames$();
}this.wizard.refreshGUI$();
});

Clazz.newMeth(C$, 'addKeyFrame$org_opensourcephysics_media_core_TPoint$D$D',  function (p, x, y) {
var trackerPanel=p$1.trackerPanel.apply(this, []);
var n=trackerPanel.getFrameNumber$();
var target=Clazz.new_($I$(64,1),[this, null]);
var mask=this.getWizard$().ellipseButton.isSelected$() ? Clazz.new_($I$(12,1)) : Clazz.new_($I$(13,1));
this.maskCenter.setLocation$D$D(x, y);
this.maskCorner.setLocation$D$D(x + C$.defaultMaskSize[0], y + C$.defaultMaskSize[1]);
if (!p$1.isMaskInVideo.apply(this, [])) {
Clazz.new_($I$(65,1)).showMessageDialog$java_awt_Component$O$S$I$java_awt_event_ActionListener(null, $I$(15).getString$S("AutoTracker.Dialog.OutOfBounds.Message"), $I$(15).getString$S("AutoTracker.Dialog.OutOfBounds.Title"), 2, (P$.AutoTracker$lambda1$||(P$.AutoTracker$lambda1$=(((P$.AutoTracker$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (ev) /*block*/{
});
})()
), Clazz.new_(P$.AutoTracker$lambda1.$init$,[this, null]))))));
return false;
}this.searchCenter.setLocation$D$D(x, y);
this.searchCorner.setLocation$D$D(x + C$.defaultSearchSize[0], y + C$.defaultSearchSize[1]);
var keyFrameData=Clazz.new_($I$(66,1).c$$org_opensourcephysics_media_core_TPoint$java_awt_geom_RectangularShape$org_opensourcephysics_cabrillo_tracker_AutoTracker_Target,[this, null, p, mask, target]);
this.getFrameNumberToFrameDataMap$().put$O$O(Integer.valueOf$I(n), keyFrameData);
this.clearSearchPointsDownstream$();
this.refreshSearchRect$();
this.refreshKeyFrame$org_opensourcephysics_cabrillo_tracker_AutoTracker_KeyFrameData$Z(keyFrameData, true);
this.getWizard$().setVisible$Z(true);
if (this.wizard.oneDCheckbox.isSelected$()) {
this.moveOriginToFirstKeyFrame$();
}this.refreshKeyFrames$();
$I$(38).repaintT$java_awt_Component(trackerPanel);
return true;
});

Clazz.newMeth(C$, 'trackerPanel',  function () {
return this.frame.getTrackerPanelForID$Integer(this.panelID);
}, p$1);

Clazz.newMeth(C$, 'isMaskInVideo',  function () {
var d=this.getVideo$().getImageSize$Z(true);
var w=d.width;
var h=d.height;
var dx=Math.abs(this.maskCorner.x - this.maskCenter.x);
var dy=Math.abs(this.maskCorner.y - this.maskCenter.y);
if (this.maskCenter.x + dx > w  || this.maskCenter.x - dx < 0   || this.maskCenter.y + dy > h   || this.maskCenter.y - dy < 0  ) {
return false;
}return true;
}, p$1);

Clazz.newMeth(C$, 'search$Z$Z',  function (startWithThis, keepGoing) {
this.getCurrentFrameData$().setEvolvedImage$java_awt_image_BufferedImage(null);
this.stepping=this.stepping || keepGoing ;
this.wizard.changed=false;
this.active=true;
this.paused=false;
if (!startWithThis || this.markCurrentFrame$Z(false) || C$.stopPolicy == 2  ) {
if (this.canStep$() && (!startWithThis || this.stepping ) ) {
this.frame.getTrackerPanelForID$Integer(this.panelID).getPlayer$().step$();
return;
}if (startWithThis && !this.stepping ) {
this.active=false;
} else {
this.stop$Z$Z(true, true);
}} else {
this.paused=true;
}this.getWizard$().refreshGUI$();
this.getWizard$().helpButton.requestFocusInWindow$();
this.repaint$();
});

Clazz.newMeth(C$, 'stop$Z$Z',  function (now, update) {
var b=Boolean.parseBoolean$S(this.wizard.startButton.getName$());
var tp=this.frame.getTrackerPanelForID$Integer(this.panelID);
tp.setAutoRefresh$Z(b);
this.stepping=false;
this.active=!now && !this.paused ;
this.paused=false;
this.wizard.refreshGUI$();
if (update) {
var track=this.getTrack$();
if (track == null ) return;
if (track.ttype == 5) {
var pointMass=track;
pointMass.updateDerivatives$();
}track.fireStepsChanged$();
}});

Clazz.newMeth(C$, 'markCurrentFrame$Z',  function (lookahead) {
var track=this.getTrack$();
if (track == null ) return false;
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if (!this.wizard.fastCheckbox.isSelected$() && trackerPanel.isAutoRefresh$() ) try {
$I$(67).sleep$J(this.msTimeDelay);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
trackerPanel.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
var n=trackerPanel.getFrameNumber$();
this.msTimeDelay=System.currentTimeMillis$();
var player=trackerPanel.getPlayer$();
var stepDuration=player.getMeanStepDuration$() / player.getRate$();
var frameData=this.getOrCreateFrameData$I(n);
var keyFrameData=frameData.getKeyFrameData$();
if (keyFrameData != null  && !track.isStepComplete$I(n) ) {
var p=this.findMatchTarget$Z(lookahead);
var peakWidthAndHeight=frameData.getMatchWidthAndHeight$();
if (p != null  && (Double.isInfinite$D(peakWidthAndHeight[1]) || peakWidthAndHeight[1] >= this.goodMatch  ) ) {
this.marking=true;
track.autoTrackerMarking=track.isAutoAdvance$();
if (keyFrameData !== frameData ) {
p=track.autoMarkAt$I$D$D(n, p.x, p.y);
}frameData.setAutoMarkPoint$org_opensourcephysics_media_core_TPoint(p);
track.autoTrackerMarking=false;
var processTime=Long.$sub(System.currentTimeMillis$(),this.msTimeDelay);
this.msTimeDelay=Math.max$J$J(0, Long.$sub(Clazz.toLong(stepDuration),processTime , 10 ));
return true;
}if (p == null ) {
if (peakWidthAndHeight[1] < this.possibleMatch ) {
frameData.setMatchIcon$javax_swing_Icon(null);
} else if (C$.stopPolicy == 1) {
var processTime=Long.$sub(System.currentTimeMillis$(),this.msTimeDelay);
this.msTimeDelay=Math.max$J$J(0, Long.$sub(Clazz.toLong(stepDuration),processTime , 10 ));
return true;
}}}this.msTimeDelay=0;
return false;
});

Clazz.newMeth(C$, 'getPredictedMatchTarget$I',  function (frameNumber) {
var success=false;
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var clip=trackerPanel.getPlayer$().getVideoClip$();
var stepNumber=clip.frameToStep$I(frameNumber);
var prevPoints=Clazz.array($I$(5), [4]);
var track=this.getTrack$();
if (stepNumber > 0 && track != null  ) {
for (var j=0; j < 4; j++) {
if (stepNumber - j - 1  >= 0) {
var frameData=this.getOrCreateFrameData$I(clip.stepToFrame$I(stepNumber - j - 1 ));
if (track.steps.isAutofill$() && !frameData.searched ) {
prevPoints[j]=null;
} else {
prevPoints[j]=frameData.getMarkedPoint$();
if (prevPoints[j] == null ) {
var matchPts=frameData.getMatchPoints$();
prevPoints[j]=matchPts == null  ? null : matchPts[0];
}}}}
}if (prevPoints[0] == null ) return null;
this.predictedTarget.setLocation$D$D(prevPoints[0].getX$(), prevPoints[0].getY$());
if (C$.searchAreaPolicy != 0 || prevPoints[1] == null  ) {
success=true;
}if (!success) {
var veloc=this.getDerivatives$org_opensourcephysics_media_core_TPointA$I(prevPoints, 1);
var accel=this.getDerivatives$org_opensourcephysics_media_core_TPointA$I(prevPoints, 2);
var jerk=this.getDerivatives$org_opensourcephysics_media_core_TPointA$I(prevPoints, 3);
var vxmax=0;
var vxmean=0;
var vymax=0;
var vymean=0;
var n=0;
for (var i=0; i < veloc.length; i++) {
if (veloc[i] != null ) {
++n;
vxmax=Math.max(vxmax, Math.abs(veloc[i][0]));
vxmean+=veloc[i][0];
vymax=Math.max(vymax, Math.abs(veloc[i][1]));
vymean+=veloc[i][1];
}}
vxmean=Math.abs(vxmean / n);
vymean=Math.abs(vymean / n);
var axmax=0;
var axmean=0;
var aymax=0;
var aymean=0;
n=0;
for (var i=0; i < accel.length; i++) {
if (accel[i] != null ) {
++n;
axmax=Math.max(axmax, Math.abs(accel[i][0]));
axmean+=accel[i][0];
aymax=Math.max(aymax, Math.abs(accel[i][1]));
aymean+=accel[i][1];
}}
axmean=Math.abs(axmean / n);
aymean=Math.abs(aymean / n);
var jxmax=0;
var jxmean=0;
var jymax=0;
var jymean=0;
n=0;
for (var i=0; i < jerk.length; i++) {
if (jerk[i] != null ) {
++n;
jxmax=Math.max(jxmax, Math.abs(jerk[i][0]));
jxmean+=jerk[i][0];
jymax=Math.max(jymax, Math.abs(jerk[i][1]));
jymean+=jerk[i][1];
}}
jxmean=Math.abs(jxmean / n);
jymean=Math.abs(jymean / n);
var xVelocValid=prevPoints[2] == null  || Math.abs(accel[0][0]) < vxmean  ;
var yVelocValid=prevPoints[2] == null  || Math.abs(accel[0][1]) < vymean  ;
var xAccelValid=prevPoints[2] != null  && (prevPoints[3] == null  || Math.abs(jerk[0][0]) < axmean  ) ;
var yAccelValid=prevPoints[2] != null  && (prevPoints[3] == null  || Math.abs(jerk[0][1]) < aymean  ) ;
if (xAccelValid) {
var loc0=prevPoints[2];
var loc1=prevPoints[1];
var loc2=prevPoints[0];
var x=3 * loc2.getX$() - 3 * loc1.getX$() + loc0.getX$();
this.predictedTarget.setLocation$D$D(x, this.predictedTarget.y);
success=true;
} else if (xVelocValid) {
var loc0=prevPoints[1];
var loc1=prevPoints[0];
var x=2 * loc1.getX$() - loc0.getX$();
this.predictedTarget.setLocation$D$D(x, this.predictedTarget.y);
success=true;
}if (yAccelValid) {
var loc0=prevPoints[2];
var loc1=prevPoints[1];
var loc2=prevPoints[0];
var y=3 * loc2.getY$() - 3 * loc1.getY$() + loc0.getY$();
this.predictedTarget.setLocation$D$D(this.predictedTarget.x, y);
success=true;
} else if (yVelocValid) {
var loc0=prevPoints[1];
var loc1=prevPoints[0];
var y=2 * loc1.getY$() - loc0.getY$();
this.predictedTarget.setLocation$D$D(this.predictedTarget.x, y);
success=true;
}}if (success) {
var d=this.getVideo$().getImageSize$Z(true);
this.predictedTarget.x=Math.max(this.predictedTarget.x, 0);
this.predictedTarget.x=Math.min(this.predictedTarget.x, d.width);
this.predictedTarget.y=Math.max(this.predictedTarget.y, 0);
this.predictedTarget.y=Math.min(this.predictedTarget.y, d.height);
return this.predictedTarget;
}return null;
});

Clazz.newMeth(C$, 'findMatchTarget$Z',  function (predict) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var n=trackerPanel.getFrameNumber$();
var frameData=this.getOrCreateFrameData$I(n);
if (predict) {
var prediction=this.getPredictedMatchTarget$I(n);
if (prediction != null ) {
var p=this.getMatchCenter$org_opensourcephysics_media_core_TPoint(prediction);
this.setSearchPoints$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint(p, null);
}}var pts=Clazz.array($I$(5), -1, [Clazz.new_($I$(5,1).c$$java_awt_geom_Point2D_Double,[this.searchCenter]), Clazz.new_($I$(5,1).c$$java_awt_geom_Point2D_Double,[this.searchCorner])]);
frameData.setSearchPoints$org_opensourcephysics_media_core_TPointA(pts);
return this.findMatchTarget$java_awt_Rectangle(this.getSearchRect$());
});

Clazz.newMeth(C$, 'getWizard$',  function () {
return this.wizard;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
var track=this.getTrack$();
if (track == null  || this.wizard == null   || !this.wizard.isVisible$()  || this.getVideo$() == null  ) {
this.maskVisible=this.targetVisible=this.searchVisible=false;
return;
}if (this.wizard != null  && this.wizard.isVisible$()  && !this.maskVisible  && !this.targetVisible  && !this.searchVisible ) {
this.wizard.refreshGUI$();
this.maskVisible=this.targetVisible=this.searchVisible=true;
}var g2=g;
if (this.getMark$() != null ) {
this.mark.draw$java_awt_Graphics2D$Z(g2, false);
}});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
var ia=p$1.findInteractiveImp$org_opensourcephysics_display_DrawingPanel$I$I.apply(this, [panel, xpix, ypix]);
return ia;
});

Clazz.newMeth(C$, 'findInteractiveImp$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (this.getTrack$() == null ) return null;
this.isInteracting=false;
var keyFrameData=this.getCurrentKeyFrameData$();
if (keyFrameData == null  || !this.wizard.isVisible$()  || this.getVideo$() == null  ) {
return null;
}C$.hitRect.setLocation$I$I(xpix - (C$.hitRect.width/2|0), ypix - (C$.hitRect.height/2|0));
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if (this.targetVisible) {
var target=keyFrameData.getTarget$();
if (C$.hitRect.contains$java_awt_Point(target.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel))) {
this.isInteracting=true;
return target;
}}this.hitPt.setLocation$D$D(xpix, ypix);
if (this.searchVisible && C$.hitRect.contains$java_awt_Point(this.searchCorner.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel)) ) {
return this.searchCorner;
}if (this.maskVisible && C$.hitRect.contains$java_awt_Point(this.maskCorner.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel)) ) {
return this.maskCorner;
}if (this.maskVisible && this.maskHitShape.intersects$java_awt_geom_Rectangle2D(C$.hitRect) ) {
return this.maskHandle;
}if (this.searchVisible && this.searchHitShape.intersects$java_awt_geom_Rectangle2D(C$.hitRect) ) {
return this.searchHandle;
}return null;
}, p$1);

Clazz.newMeth(C$, 'isActive$',  function () {
return this.active;
});

Clazz.newMeth(C$, 'isInteracting$',  function () {
return this.isInteracting;
});

Clazz.newMeth(C$, 'isInteracting$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
if (this.getTrack$() === track ) {
var frameData=this.getOrCreateFrameData$I(track.tp.getFrameNumber$());
return (frameData != null  && frameData === frameData.getKeyFrameData$()   && this.isInteracting$() );
}return false;
});

Clazz.newMeth(C$, 'getTemplateMatcher$',  function () {
if (this.panelID == null ) return null;
var keyFrameData=this.getCurrentKeyFrameData$();
if (keyFrameData == null ) return null;
if (keyFrameData.getTemplateMatcher$() == null ) {
var matcher=this.createTemplateMatcher$();
keyFrameData.setTemplateMatcher$org_opensourcephysics_media_core_TemplateMatcher(matcher);
}return keyFrameData.getTemplateMatcher$();
});

Clazz.newMeth(C$, 'getSearchRect$',  function () {
return this.searchRect2D.getBounds$();
});

Clazz.newMeth(C$, 'refreshSearchRect$',  function () {
this.searchRect2D.setFrameFromCenter$java_awt_geom_Point2D$java_awt_geom_Point2D(this.searchCenter, this.searchCorner);
if (this.moveRectIntoImage$java_awt_geom_Rectangle2D(this.searchRect2D)) {
this.searchCenter.setLocation$D$D(this.searchRect2D.getCenterX$(), this.searchRect2D.getCenterY$());
this.searchCorner.setLocation$D$D(this.searchRect2D.getMaxX$(), this.searchRect2D.getMaxY$());
}this.getCurrentFrameData$().setSearchPoints$org_opensourcephysics_media_core_TPointA(Clazz.array($I$(5), -1, [Clazz.new_($I$(5,1).c$$java_awt_geom_Point2D_Double,[this.searchCenter]), Clazz.new_($I$(5,1).c$$java_awt_geom_Point2D_Double,[this.searchCorner])]));
this.repaint$();
});

Clazz.newMeth(C$, 'setSearchPoints$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint',  function (center, corner) {
if (corner == null ) {
var d=this.getVideo$().getImageSize$Z(true);
var w=d.width;
var h=d.height;
var setbackX=(this.searchRect2D.getBounds$().width/2|0);
var setbackY=(this.searchRect2D.getBounds$().height/2|0);
center.x=Math.max(center.x, setbackX);
center.x=Math.min(center.x, w - setbackX);
center.y=Math.max(center.y, setbackY);
center.y=Math.min(center.y, h - setbackY);
var dx=center.x - this.searchCenter.x;
var dy=center.y - this.searchCenter.y;
this.searchCenter.x+=dx;
this.searchCenter.y+=dy;
this.searchCorner.x+=dx;
this.searchCorner.y+=dy;
} else {
this.searchCenter.setLocation$java_awt_geom_Point2D(center);
this.searchCorner.setLocation$java_awt_geom_Point2D(corner);
}this.refreshSearchRect$();
});

Clazz.newMeth(C$, 'getVideo$',  function () {
return this.frame.getTrackerPanelForID$Integer(this.panelID).getVideo$();
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var track=this.getTrack$();
var n=this.frame.getTrackerPanelForID$Integer(this.panelID).getFrameNumber$();
var frameData=this.getOrCreateFrameData$I(n);
var keyFrameData=frameData.getKeyFrameData$();
var haveWizard=(this.wizard != null  && this.wizard.isVisible$() );
var haveVideo=(track != null  && this.getVideo$() != null  );
switch (e.getPropertyName$()) {
case "selectedpoint":
p$1.selectedPointChanged$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_AutoTracker_KeyFrameData$org_opensourcephysics_cabrillo_tracker_AutoTracker_FrameData.apply(this, [e.getOldValue$(), e.getNewValue$(), track, keyFrameData, frameData]);
break;
case "selectedtrack":
if (this.wizard != null ) this.wizard.refreshGUI$();
break;
case "track":
if (e.getOldValue$() != null ) {
var deletedTrack=e.getOldValue$();
this.trackDataMap.remove$O(deletedTrack);
if (deletedTrack === track ) {
this.setTrack$org_opensourcephysics_cabrillo_tracker_TTrack(null);
}}break;
case "clear":
this.trackDataMap.clear$();
this.setTrack$org_opensourcephysics_cabrillo_tracker_TTrack(null);
break;
case "video":
case "name":
case "color":
case "footprint":
if (haveWizard) this.wizard.refreshGUI$();
break;
case "stepnumber":
if (track == null  && haveWizard ) this.wizard.refreshGUI$();
if (haveVideo && haveWizard ) {
var searchPts=frameData.getSearchPoints$Z(true);
if (searchPts != null ) this.setSearchPoints$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint(searchPts[0], searchPts[1]);
 else if (C$.searchAreaPolicy == 0 && keyFrameData != null  ) {
var prediction=this.getPredictedMatchTarget$I(n);
if (prediction != null ) {
this.setSearchPoints$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint(this.getMatchCenter$org_opensourcephysics_media_core_TPoint(prediction), null);
var pts=Clazz.array($I$(5), -1, [Clazz.new_($I$(5,1).c$$java_awt_geom_Point2D_Double,[this.searchCenter]), Clazz.new_($I$(5,1).c$$java_awt_geom_Point2D_Double,[this.searchCorner])]);
frameData.setSearchPoints$org_opensourcephysics_media_core_TPointA(pts);
} else {
this.repaint$();
}}if (this.active && !this.paused ) {
var ms=System.currentTimeMillis$();
if (this.robot != null  && Long.$gt(Long.$sub(ms,this.currentms),30000 ) ) {
this.currentms=ms;
this.odd=!this.odd;
var p=$I$(68).getPointerInfo$().getLocation$();
var x=this.odd ? p.x + 1 : p.x - 1;
var y=this.odd ? p.y + 1 : p.y - 1;
this.robot.mouseMove$I$I(x, y);
}$I$(8).invokeLater$Runnable(this.stepper);
} else if (this.stepping) {
this.stop$Z$Z(true, false);
} else {
this.wizard.refreshGUI$();
}}break;
case "step":
if (haveVideo && haveWizard && track != null   ) {
if (!this.marking) {
n=(e.getNewValue$()).intValue$();
frameData=this.getOrCreateFrameData$I(n);
frameData.decided=true;
if (track.getStep$I(n) == null ) {
frameData.clear$();
} else if (!frameData.isKeyFrameData$()) {
frameData.setMatchIcon$javax_swing_Icon(null);
this.paused=false;
}}this.wizard.refreshGUI$();
this.marking=false;
}break;
}
});

Clazz.newMeth(C$, 'selectedPointChanged$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_AutoTracker_KeyFrameData$org_opensourcephysics_cabrillo_tracker_AutoTracker_FrameData',  function (prev, next, track, keyFrameData, frameData) {
var needsRepaint=false;
if (this.wizard.isVisible$()) {
if (Clazz.instanceOf(prev, "org.opensourcephysics.cabrillo.tracker.AutoTracker.Corner") && keyFrameData != null  ) {
needsRepaint=true;
var mask=keyFrameData.getMask$();
if (Clazz.instanceOf(mask, "java.awt.geom.RectangularShape")) {
var maskShape=mask;
this.maskCorner.x=this.maskCenter.x + maskShape.getWidth$() / 2;
this.maskCorner.y=this.maskCenter.y + maskShape.getHeight$() / 2;
}this.searchCorner.x=this.searchRect2D.getMaxX$();
this.searchCorner.y=this.searchRect2D.getMaxY$();
} else if (Clazz.instanceOf(prev, "org.opensourcephysics.cabrillo.tracker.AutoTracker.Handle") || Clazz.instanceOf(prev, "org.opensourcephysics.cabrillo.tracker.AutoTracker.Target") ) {
needsRepaint=true;
}}var trackerPanel=p$1.trackerPanel.apply(this, []);
var step=trackerPanel.getSelectedStep$();
if (next === this.maskHandle  || next === this.maskCorner   || next === this.searchHandle   || next === this.searchCorner   || (keyFrameData != null  && next === keyFrameData.getTarget$()  ) ) {
trackerPanel.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
needsRepaint=true;
} else if (next != null  && step != null   && step.getTrack$() === track  ) {
var i=step.getPointIndex$org_opensourcephysics_media_core_TPoint(next);
if (i >= 0 && i != track.getTargetIndex$() ) {
track.setTargetIndex$I(i);
var searchPts=frameData.getSearchPoints$Z(true);
if (searchPts != null ) this.setSearchPoints$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint(searchPts[0], searchPts[1]);
keyFrameData=frameData.getKeyFrameData$();
if (keyFrameData != null ) {
this.maskCenter.setLocation$java_awt_geom_Point2D(keyFrameData.getMaskPoints$()[0]);
this.maskCorner.setLocation$java_awt_geom_Point2D(keyFrameData.getMaskPoints$()[1]);
}this.wizard.refreshGUI$();
needsRepaint=true;
}}if (needsRepaint) this.repaint$();
}, p$1);

Clazz.newMeth(C$, 'setEnabled$Z',  function (enabled) {
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return true;
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
});

Clazz.newMeth(C$, 'setX$D',  function (x) {
});

Clazz.newMeth(C$, 'setY$D',  function (y) {
});

Clazz.newMeth(C$, 'getX$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getY$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return 0;
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return false;
});

Clazz.newMeth(C$, 'findMatchTarget$java_awt_Rectangle',  function (searchRect) {
var video=this.getVideo$();
if (video == null ) return null;
var matcher=this.getTemplateMatcher$();
if (matcher == null ) return null;
var n=p$1.trackerPanel.apply(this, []).getFrameNumber$();
var frameData=this.getOrCreateFrameData$I(n);
frameData.decided=false;
matcher.setTemplate$java_awt_image_BufferedImage(frameData.getTemplateToMatch$());
var p=null;
var image=p$1.getImage$org_opensourcephysics_media_core_Video.apply(this, [video]);
var coords=this.frame.getTrackerPanelForID$Integer(this.panelID).getCoords$();
var theta=coords.getAngle$I(n);
var x0=coords.getOriginX$I(n);
var y0=coords.getOriginY$I(n);
if (this.lineSpread >= 0) {
var searchPts=matcher.getSearchPoints$java_awt_Rectangle$D$D$D$I(searchRect, x0, y0, theta, this.lineSpread);
p=matcher.getMatchLocation$java_awt_image_BufferedImage$java_awt_Rectangle$IAA$D$D$D(image, searchRect, searchPts, x0, y0, theta);
} else {
p=matcher.getMatchLocation$java_awt_image_BufferedImage$java_awt_Rectangle$IAA$D$D$D(image, searchRect, null, 0, 0, 0);
}var matchWidthAndHeight=matcher.getMatchWidthAndHeight$();
if (matchWidthAndHeight[1] < this.goodMatch  && frameData.isAutoMarked$() ) {
frameData.trackPoint=null;
}frameData.setMatchWidthAndHeight$DA(matchWidthAndHeight);
frameData.searched=true;
if (p == null  || matchWidthAndHeight[1] < this.possibleMatch  ) {
frameData.setMatchPoints$org_opensourcephysics_media_core_TPointA(null);
return null;
}var match=matcher.getMatchImage$();
var img=this.createMagnifiedImage$java_awt_image_BufferedImage(match);
frameData.setMatchIcon$javax_swing_Icon(Clazz.new_($I$(4,1).c$$java_awt_Image,[img]));
var rect=frameData.getKeyFrameData$().getMask$().getBounds$();
var center=frameData.isKeyFrameData$() ? Clazz.new_($I$(5,1).c$$java_awt_geom_Point2D_Double,[this.maskCenter]) : Clazz.new_([p.x + this.maskCenter.x - rect.getX$(), p.y + this.maskCenter.y - rect.getY$()],$I$(5,1).c$$D$D);
if (this.lineSpread >= 0) {
var x1=x0 + Math.cos(theta);
var y1=y0 - Math.sin(theta);
var d=((y1 - y0) * center.x - (x1 - x0) * center.y + x1 * y0 - x0 * y1) / Math.sqrt((y1 - y0) * (y1 - y0) + (x1 - x0) * (x1 - x0));
center.x+=d * Math.sin(theta);
center.y+=d * Math.cos(theta);
}var corner=Clazz.new_([center.x + (this.maskCorner.x - this.maskCenter.x), center.y + (this.maskCorner.y - this.maskCenter.y)],$I$(5,1).c$$D$D);
frameData.setMatchPoints$org_opensourcephysics_media_core_TPointA(Clazz.array($I$(5), -1, [center, corner, p]));
if (matchWidthAndHeight[1] >= this.goodMatch ) {
this.buildEvolvedTemplateImage$org_opensourcephysics_cabrillo_tracker_AutoTracker_FrameData(frameData);
return this.getMatchTarget$org_opensourcephysics_media_core_TPoint(center);
}return null;
});

Clazz.newMeth(C$, 'getImage$org_opensourcephysics_media_core_Video',  function (video) {
return video.getImage$();
}, p$1);

Clazz.newMeth(C$, 'buildEvolvedTemplateImage$org_opensourcephysics_cabrillo_tracker_AutoTracker_FrameData',  function (frameData) {
var matchPts=frameData.getMatchPoints$();
if (matchPts == null ) return null;
var matcher=this.getTemplateMatcher$();
matcher.setTemplate$java_awt_image_BufferedImage(frameData.getTemplateImage$());
matcher.setWorkingPixels$IA(frameData.getWorkingPixels$());
var rect=frameData.getKeyFrameData$().getMask$().getBounds$();
rect.x=Long.$ival(Math.round$D(matchPts[2].getX$()));
rect.y=Long.$ival(Math.round$D(matchPts[2].getY$()));
var image=matcher.buildTemplate$java_awt_image_BufferedImage$I$I(p$1.newVideoImage$java_awt_Rectangle.apply(this, [rect]), this.evolveAlpha, this.tetherAlpha);
matcher.setIndex$I(frameData.getFrameNumber$());
return image;
});

Clazz.newMeth(C$, 'createTemplateMatcher$',  function () {
var keyFrameData=this.getCurrentKeyFrameData$();
if (this.getVideo$() != null  && keyFrameData != null  ) {
var mask=keyFrameData.getMask$();
var rect=mask.getBounds$();
C$.transform.setToTranslation$D$D(-rect.x, -rect.y);
return Clazz.new_([p$1.newVideoImage$java_awt_Rectangle.apply(this, [rect]), C$.transform.createTransformedShape$java_awt_Shape(mask)],$I$(69,1).c$$java_awt_image_BufferedImage$java_awt_Shape);
}return null;
});

Clazz.newMeth(C$, 'newVideoImage$java_awt_Rectangle',  function (rect) {
var image=Clazz.new_($I$(70,1).c$$I$I$I,[rect.width, rect.height, 1]);
var g=image.createGraphics$();
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.getVideo$().getImage$(), -rect.x, -rect.y, null);
g.dispose$();
return image;
}, p$1);

Clazz.newMeth(C$, 'getMapOfIndexToMapofFrameNumberToFrameData$',  function () {
var track=this.getTrack$();
var map=this.trackDataMap.get$O(track);
if (map == null ) {
this.trackDataMap.put$O$O(track, map=Clazz.new_($I$(60,1)));
}return map;
});

Clazz.newMeth(C$, 'getFrameNumberToFrameDataMap$I',  function (index) {
var map=this.getMapOfIndexToMapofFrameNumberToFrameData$().get$O(Integer.valueOf$I(index));
if (map == null ) {
this.getMapOfIndexToMapofFrameNumberToFrameData$().put$O$O(Integer.valueOf$I(index), map=Clazz.new_($I$(60,1)));
}return map;
});

Clazz.newMeth(C$, 'getFrameNumberToFrameDataMap$',  function () {
var track=this.getTrack$();
if (track == null ) {
this.dummyDataMap.clear$();
return this.dummyDataMap;
}return this.getFrameNumberToFrameDataMap$I(track.getTargetIndex$());
});

Clazz.newMeth(C$, 'getCurrentFrameData$',  function () {
return this.getOrCreateFrameData$I(this.frame.getTrackerPanelForID$Integer(this.panelID).getFrameNumber$());
});

Clazz.newMeth(C$, 'getCurrentKeyFrameData$',  function () {
return this.getCurrentFrameData$().getKeyFrameData$();
});

Clazz.newMeth(C$, 'isOnKeyFrame$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
return this.isOnKeyFrame$I(panel.getFrameNumber$());
});

Clazz.newMeth(C$, 'isOnKeyFrame$I',  function (n) {
var frameData=this.getOrCreateFrameData$I(n);
return (frameData === frameData.getKeyFrameData$() );
});

Clazz.newMeth(C$, 'isAutoTrackTrigger$java_awt_event_InputEvent',  function (e) {
return (e.isControlDown$() || $I$(7).isMac$() && e.isMetaDown$()  );
}, 1);

Clazz.newMeth(C$, 'getOrCreateFrameData$I',  function (frameNumber) {
var map=this.getFrameNumberToFrameDataMap$();
var frameData=map.get$O(Integer.valueOf$I(frameNumber));
if (frameData == null ) {
var track=this.getTrack$();
var index=(track == null  ? 0 : track.getTargetIndex$());
frameData=Clazz.new_($I$(47,1).c$$I$I,[this, null, index, frameNumber]);
map.put$O$O(Integer.valueOf$I(frameNumber), frameData);
}return frameData;
});

Clazz.newMeth(C$, 'moveOriginToFirstKeyFrame$',  function () {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var map=this.getFrameNumberToFrameDataMap$();
var n=-1;
for (var key, $key = map.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (map.get$O(key).isKeyFrameData$()) {
n=(key).$c();
break;
}}
if (n < 0) return;
var axes=trackerPanel.getAxes$();
var keyFrameData=this.getOrCreateFrameData$I(n).getKeyFrameData$();
if (keyFrameData != null ) {
var x0=trackerPanel.getCoords$().getOriginX$I(n);
var y0=trackerPanel.getCoords$().getOriginY$I(n);
var maskPts=keyFrameData.getMaskPoints$();
if (Math.abs(x0 - maskPts[0].x) > 0.1  || Math.abs(y0 - maskPts[0].y) > 0.1  ) {
var control=Clazz.new_([trackerPanel.getCoords$()],$I$(71,1).c$$O);
axes.getOrigin$().setXY$D$D(maskPts[0].x, maskPts[0].y);
$I$(72).postCoordsEdit$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl(trackerPanel, control);
axes.setVisible$Z(true);
}}});

Clazz.newMeth(C$, 'getOrCreatePreviousFrameData$I',  function (frameNumber) {
for (var i=frameNumber; --i >= 0; ) {
var frameData=this.getFrameNumberToFrameDataMap$().get$O(Integer.valueOf$I(i));
if (frameData != null ) return frameData;
}
return this.getOrCreateFrameData$I(frameNumber);
});

Clazz.newMeth(C$, 'getStepPointIndex$org_opensourcephysics_media_core_TPoint',  function (p) {
var step=this.getTrack$().getStep$I(p.getFrameNumber$org_opensourcephysics_media_core_VideoPanel(this.frame.getTrackerPanelForID$Integer(this.panelID)));
if (step != null ) {
for (var i=0; i < step.points.length; i++) {
if (p.equals$O(step.points[i])) {
return i;
}}
}return -1;
});

Clazz.newMeth(C$, 'erase$',  function () {
if (this.mark != null ) this.frame.getTrackerPanelForID$Integer(this.panelID).addDirtyRegion$java_awt_Rectangle(null);
this.mark=null;
});

Clazz.newMeth(C$, 'repaint$',  function () {
this.erase$();
var trackerPanel=p$1.trackerPanel.apply(this, []);
if (this.getMark$() != null ) trackerPanel.addDirtyRegion$java_awt_Rectangle(null);
trackerPanel.repaintDirtyRegion$();
});

Clazz.newMeth(C$, 'dispose$',  function () {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
trackerPanel.removeDrawable$org_opensourcephysics_display_Drawable(this);
trackerPanel.removeListeners$SA$java_beans_PropertyChangeListener(C$.panelProps, this);
this.setTrack$org_opensourcephysics_cabrillo_tracker_TTrack(null);
this.trackDataMap.clear$();
trackerPanel.autoTracker=null;
this.wizard.dispose$();
trackerPanel=null;
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(73).finalized$O(this);
});

Clazz.newMeth(C$, 'getMark$',  function () {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var n=trackerPanel.getFrameNumber$();
var frameData=this.getOrCreateFrameData$I(n);
var keyFrameData=frameData.getKeyFrameData$();
var track=this.getTrack$();
if (track == null  || keyFrameData == null  ) return null;
if (this.mark == null ) {
var k=this.getStatusCode$I(n);
var c=track.getFootprint$().getColor$();
C$.target_footprint.setColor$java_awt_Color(c);
C$.inactive_target_footprint.setColor$java_awt_Color(c);
C$.corner_footprint.setColor$java_awt_Color(c);
var searchCornerMark=null;
var maskCornerMark=null;
var targetMark=null;
var selectionMark=null;
var toScreen=trackerPanel.getPixelTransform$();
if (!trackerPanel.isDrawingInImageSpace$()) {
toScreen.concatenate$java_awt_geom_AffineTransform(trackerPanel.getCoords$().getToWorldTransform$I(n));
}var selection=trackerPanel.getSelectedPoint$();
var selectionPt=null;
try {
this.searchShape=toScreen.createTransformedShape$java_awt_Shape(this.searchRect2D);
this.searchHitShape=C$.solid.createStrokedShape$java_awt_Shape(this.searchShape);
this.maskShape=toScreen.createTransformedShape$java_awt_Shape(keyFrameData.getMask$());
this.maskHitShape=C$.solid.createStrokedShape$java_awt_Shape(this.maskShape);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
if (selection === this.maskHandle ) selectionPt=this.maskVisible ? this.maskHandle.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel) : null;
 else if (selection === this.searchHandle ) selectionPt=this.searchVisible ? this.searchHandle.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel) : null;
if (frameData.isKeyFrameData$()) {
this.maskCenter.setLocation$java_awt_geom_Point2D(keyFrameData.getMaskPoints$()[0]);
this.maskCorner.setLocation$java_awt_geom_Point2D(keyFrameData.getMaskPoints$()[1]);
}this.screenPoints[0]=this.maskCorner.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
if (selection === this.maskCorner ) {
selectionPt=this.maskVisible ? this.screenPoints[0] : null;
} else {
maskCornerMark=C$.corner_footprint.getMark$java_awt_PointA(this.screenPoints);
}this.screenPoints[0]=this.searchCorner.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
if (selection === this.searchCorner ) {
selectionPt=this.searchVisible ? this.screenPoints[0] : null;
} else {
searchCornerMark=C$.corner_footprint.getMark$java_awt_PointA(this.screenPoints);
}this.screenPoints[0]=keyFrameData.getTarget$().getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
if (selection === keyFrameData.getTarget$() ) selectionPt=this.targetVisible ? this.screenPoints[0] : null;
 else {
targetMark=C$.target_footprint.getMark$java_awt_PointA(this.screenPoints);
}var matchPts=frameData.getMatchPoints$();
if (matchPts == null  || frameData.isKeyFrameData$()  || k == 5 ) this.matchShape=null;
 else {
var p1=matchPts[0].getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
var p2=this.maskCenter.getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
C$.transform.setToTranslation$D$D(p1.x - p2.x, p1.y - p2.y);
this.matchShape=toScreen.createTransformedShape$java_awt_Shape(this.getMatchShape$org_opensourcephysics_media_core_TPointA(matchPts));
this.screenPoints[0]=this.getMatchTarget$org_opensourcephysics_media_core_TPoint(matchPts[0]).getScreenPosition$org_opensourcephysics_media_core_VideoPanel(trackerPanel);
}if (selectionPt != null ) {
C$.transform.setToTranslation$D$D(selectionPt.x, selectionPt.y);
var scale=$I$(10).getIntegerFactor$();
if (scale > 1) {
C$.transform.scale$D$D(scale, scale);
}var selectedShape=C$.transform.createTransformedShape$java_awt_Shape($I$(74).selectionShape);
selectionMark=((P$.AutoTracker$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AutoTracker$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
if ($I$(7).setRenderingHints) g.setRenderingHint$java_awt_RenderingHints_Key$O($I$(75).KEY_ANTIALIASING, $I$(75).VALUE_ANTIALIAS_ON);
var gstroke=g.getStroke$();
g.setStroke$java_awt_Stroke($I$(27).solidBold);
g.draw$java_awt_Shape(this.$finals$.selectedShape);
g.setStroke$java_awt_Stroke(gstroke);
});
})()
), Clazz.new_(P$.AutoTracker$2.$init$,[this, {selectedShape:selectedShape}]));
}var markMaskCorner=maskCornerMark;
var markSearchCorner=searchCornerMark;
var markTarget=targetMark;
var markSelection=selectionMark;
this.mark=((P$.AutoTracker$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "AutoTracker$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
var gpaint=g.getPaint$();
var c=this.$finals$.track.getFootprint$().getColor$();
g.setPaint$java_awt_Paint(c);
if ($I$(7).setRenderingHints) g.setRenderingHint$java_awt_RenderingHints_Key$O($I$(75).KEY_ANTIALIASING, $I$(75).VALUE_ANTIALIAS_ON);
var stroke=g.getStroke$();
var n=this.$finals$.trackerPanel.getFrameNumber$();
var frameData=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getOrCreateFrameData$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [n]);
var isKeyFrame=(frameData != null  && frameData.isKeyFrameData$() );
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].targetVisible) {
if (isKeyFrame) {
if (this.$finals$.markTarget != null ) this.$finals$.markTarget.draw$java_awt_Graphics2D$Z(g, false);
}}if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].matchShape != null  && !isKeyFrame ) {
g.setStroke$java_awt_Stroke($I$(27).dotted);
g.draw$java_awt_Shape(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].matchShape);
}if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskVisible && isKeyFrame ) {
g.setStroke$java_awt_Stroke(stroke);
g.draw$java_awt_Shape(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskShape);
if (this.$finals$.markMaskCorner != null ) this.$finals$.markMaskCorner.draw$java_awt_Graphics2D$Z(g, false);
}if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].searchVisible || !isKeyFrame ) {
g.setStroke$java_awt_Stroke($I$(27).dashed);
g.draw$java_awt_Shape(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].searchShape);
if (this.$finals$.markSearchCorner != null ) this.$finals$.markSearchCorner.draw$java_awt_Graphics2D$Z(g, false);
}if (this.$finals$.markSelection != null ) this.$finals$.markSelection.draw$java_awt_Graphics2D$Z(g, false);
g.setStroke$java_awt_Stroke(stroke);
g.setPaint$java_awt_Paint(gpaint);
});
})()
), Clazz.new_(P$.AutoTracker$3.$init$,[this, {markTarget:markTarget,markSearchCorner:markSearchCorner,markMaskCorner:markMaskCorner,track:track,markSelection:markSelection,trackerPanel:trackerPanel}]));
}return this.mark;
});

Clazz.newMeth(C$, 'getMatchTarget$org_opensourcephysics_media_core_TPoint',  function (center) {
var offset=this.getCurrentFrameData$().getTargetOffset$();
return Clazz.new_($I$(5,1).c$$D$D,[center.x + offset[0], center.y + offset[1]]);
});

Clazz.newMeth(C$, 'getMatchCenter$org_opensourcephysics_media_core_TPoint',  function (target) {
var offset=this.getCurrentFrameData$().getTargetOffset$();
return Clazz.new_($I$(5,1).c$$D$D,[target.x - offset[0], target.y - offset[1]]);
});

Clazz.newMeth(C$, 'delete$I',  function (n) {
$I$(38,"repaintT$java_awt_Component",[this.frame.getTrackerPanelForID$Integer(this.panelID)]);
this.getOrCreateFrameData$I(n).clear$();
});

Clazz.newMeth(C$, 'reset$',  function () {
this.mark=null;
var map=this.getFrameNumberToFrameDataMap$();
var keyFrameData=null;
for (var e, $e = map.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var frameData=e.getValue$();
frameData.clear$();
if (keyFrameData == null  && frameData.isKeyFrameData$() ) {
keyFrameData=frameData;
}}
map.clear$();
var track=this.getTrack$();
var isAlwaysMarked=(track.steps.isAutofill$() || track.ttype == 2 );
if (!isAlwaysMarked) {
for (var n=0; n < track.getSteps$().length; n++) {
track.steps.setStep$I$org_opensourcephysics_cabrillo_tracker_Step(n, null);
}
}this.stop$Z$Z(true, true);
if (keyFrameData != null ) {
var n=keyFrameData.getFrameNumber$();
var player=p$1.trackerPanel.apply(this, []).getPlayer$();
player.setStepNumber$I(player.getVideoClip$().frameToStep$I(n));
}this.refreshKeyFrames$();
this.repaint$();
});

Clazz.newMeth(C$, 'refreshKeyFrames$',  function () {
this.keyFrames.clear$();
var frameDataMap=this.getFrameNumberToFrameDataMap$();
for (var e, $e = frameDataMap.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
if (e.getValue$().isKeyFrameData$()) {
this.keyFrames.add$O(e.getValue$());
}}
});

Clazz.newMeth(C$, 'refreshKeyFrame$org_opensourcephysics_cabrillo_tracker_AutoTracker_KeyFrameData$Z',  function (keyFrame, checkSize) {
var mask=keyFrame.getMask$();
keyFrame.getMaskPoints$()[0].setLocation$java_awt_geom_Point2D(this.maskCenter);
keyFrame.getMaskPoints$()[1].setLocation$java_awt_geom_Point2D(this.maskCorner);
if (checkSize) {
var sin=this.maskCenter.sin$java_awt_geom_Point2D_Double(this.maskCorner);
var cos=this.maskCenter.cos$java_awt_geom_Point2D_Double(this.maskCorner);
if (Double.isNaN$D(sin)) {
sin=-0.707;
cos=0.707;
}var d=Math.max(this.minMaskRadius, this.maskCenter.distance$java_awt_geom_Point2D(this.maskCorner));
var dx=d * cos;
var dy=-d * sin;
if (Math.abs(dx) < 1 ) {
if (dx > 0 ) dx=1;
 else dx=-1;
}if (Math.abs(dy) < 1 ) {
if (dy > 0 ) dy=1;
 else dy=-1;
}mask.setFrameFromCenter$D$D$D$D(this.maskCenter.x, this.maskCenter.y, this.maskCenter.x + dx, this.maskCenter.y + dy);
} else {
mask.setFrameFromCenter$D$D$D$D(this.maskCenter.x, this.maskCenter.y, this.maskCorner.x, this.maskCorner.y);
}var w=Math.round(Long.$fval(Math.round$D(mask.getWidth$())));
var h=Math.round(Long.$fval(Math.round$D(mask.getHeight$())));
this.getWizard$().ignoreChanges=true;
this.getWizard$().widthSpinner.setValue$O(Integer.valueOf$I(w));
this.getWizard$().heightSpinner.setValue$O(Integer.valueOf$I(h));
this.getWizard$().ignoreChanges=false;
this.wizard.replaceIcons$org_opensourcephysics_cabrillo_tracker_AutoTracker_KeyFrameData(keyFrame);
var p=keyFrame.getMarkedPoint$();
if (p != null ) {
keyFrame.getTarget$().setXY$D$D(p.getX$(), p.getY$());
}this.search$Z$Z(true, false);
this.repaint$();
this.wizard.repaint$();
});

Clazz.newMeth(C$, 'createMagnifiedImage$java_awt_image_BufferedImage',  function (source) {
var image=Clazz.new_([2 * source.getWidth$(), 2 * source.getHeight$(), 2],$I$(70,1).c$$I$I$I);
var g=image.createGraphics$();
g.drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver(source, 0, 0, image.getWidth$(), image.getHeight$(), null);
g.dispose$();
return image;
});

Clazz.newMeth(C$, 'getMatchShape$org_opensourcephysics_media_core_TPointA',  function (pts) {
var mask=this.getCurrentKeyFrameData$().getMask$();
var match=Clazz.instanceOf(mask, "java.awt.geom.Ellipse2D") ? this.ellipseMatch : this.rectangleMatch;
match.setFrameFromCenter$java_awt_geom_Point2D$java_awt_geom_Point2D(pts[0], pts[1]);
return match;
});

Clazz.newMeth(C$, 'getStatusCode$I',  function (n) {
var frameData=this.getOrCreateFrameData$I(n);
if (frameData.isKeyFrameData$()) return 0;
var widthAndHeight=frameData.getMatchWidthAndHeight$();
if (frameData.isMarked$()) {
if (frameData.isAutoMarked$()) {
if (widthAndHeight[1] > this.goodMatch ) return 1;
return 6;
}var track=this.getTrack$();
var isCalibrationTool;
switch (track.ttype) {
case 2:
case 4:
case 0:
isCalibrationTool=true;
break;
case 8:
isCalibrationTool=!(track).isReadOnly$();
break;
default:
isCalibrationTool=false;
}
if (frameData.searched) {
if (isCalibrationTool) {
if (widthAndHeight[1] > this.possibleMatch ) return 8;
return 9;
}if (frameData.decided) return 5;
if (widthAndHeight[1] > this.possibleMatch ) return 8;
return 9;
}return 7;
}if (frameData.searched) {
if (widthAndHeight[1] < this.possibleMatch ) return 3;
return 2;
}if (widthAndHeight == null ) return 7;
return 4;
});

Clazz.newMeth(C$, 'canStep$',  function () {
var player=p$1.trackerPanel.apply(this, []).getPlayer$();
var stepNumber=player.getStepNumber$();
var endStepNumber=player.getVideoClip$().getStepCount$() - 1;
return stepNumber < endStepNumber;
});

Clazz.newMeth(C$, 'mayLeaveGaps$',  function () {
return C$.stopPolicy != 0;
}, 1);

Clazz.newMeth(C$, 'isDrawingKeyFrameFor$org_opensourcephysics_cabrillo_tracker_TTrack$I',  function (track, index) {
var frameData;
return (this.getTrack$() === track  && this.wizard.isVisible$()  && (frameData=this.getCurrentFrameData$()).isKeyFrameData$()  && frameData.getIndex$() == index );
});

Clazz.newMeth(C$, 'clearSearchPointsDownstream$',  function () {
var n=p$1.trackerPanel.apply(this, []).getFrameNumber$();
for (var e, $e = this.getFrameNumberToFrameDataMap$().entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
if ((e.getKey$()).$c() <= n ) continue;
var frameData=e.getValue$();
if (frameData.isKeyFrameData$()) break;
frameData.setSearchPoints$org_opensourcephysics_media_core_TPointA(null);
}
});

Clazz.newMeth(C$, 'moveRectIntoImage$java_awt_geom_Rectangle2D',  function (searchRect) {
var d=this.getVideo$().getImageSize$Z(true);
var w=d.width;
var h=d.height;
var corner=Clazz.new_([searchRect.getX$(), searchRect.getY$()],$I$(3,1).c$$D$D);
var dim=Clazz.new_([(searchRect.getWidth$()|0), (searchRect.getHeight$()|0)],$I$(48,1).c$$I$I);
var changed=false;
if (w < dim.width || h < dim.height ) {
changed=true;
dim.setSize$I$I(Math.min(w, dim.width), Math.min(h, dim.height));
searchRect.setFrame$java_awt_geom_Point2D$java_awt_geom_Dimension2D(corner, dim);
}var x=Math.max(0, corner.getX$());
x=Math.min(x, w - dim.width);
var y=Math.max(0, corner.getY$());
y=Math.min(y, h - dim.height);
if (x != corner.getX$()  || y != corner.getY$()  ) {
changed=true;
corner.setLocation$D$D(x, y);
searchRect.setFrame$java_awt_geom_Point2D$java_awt_geom_Dimension2D(corner, dim);
}return changed;
});

Clazz.newMeth(C$, 'getDerivatives$org_opensourcephysics_media_core_TPointA$I',  function (positions, order) {
if (positions.length < order + 1) return null;
if (order == 1) {
for (var i=0; i < this.derivatives1.length; i++) {
if (i >= positions.length - 1) {
this.derivatives1[i]=null;
continue;
}var loc0=positions[i + 1];
var loc1=positions[i];
if (loc0 == null  || loc1 == null  ) {
this.derivatives1[i]=null;
continue;
}var x=loc1.getX$() - loc0.getX$();
var y=loc1.getY$() - loc0.getY$();
if (this.derivatives1[i] == null ) {
this.derivatives1[i]=Clazz.array(Double.TYPE, -1, [x, y]);
} else {
this.derivatives1[i][0]=x;
this.derivatives1[i][1]=y;
}}
return this.derivatives1;
} else if (order == 2) {
for (var i=0; i < this.derivatives2.length; i++) {
if (i >= positions.length - 2) {
this.derivatives2[i]=null;
continue;
}var loc0=positions[i + 2];
var loc1=positions[i + 1];
var loc2=positions[i];
if (loc0 == null  || loc1 == null   || loc2 == null  ) {
this.derivatives2[i]=null;
continue;
}var x=loc2.getX$() - 2 * loc1.getX$() + loc0.getX$();
var y=loc2.getY$() - 2 * loc1.getY$() + loc0.getY$();
if (this.derivatives2[i] == null ) {
this.derivatives2[i]=Clazz.array(Double.TYPE, -1, [x, y]);
} else {
this.derivatives2[i][0]=x;
this.derivatives2[i][1]=y;
}}
return this.derivatives2;
} else if (order == 3) {
for (var i=0; i < this.derivatives3.length; i++) {
if (i >= positions.length - 3) {
this.derivatives3[i]=null;
continue;
}var loc0=positions[i + 3];
var loc1=positions[i + 2];
var loc2=positions[i + 1];
var loc3=positions[i];
if (loc0 == null  || loc1 == null   || loc2 == null   || loc3 == null  ) {
this.derivatives3[i]=null;
continue;
}var x=loc3.getX$() - 3 * loc2.getX$() + 3 * loc1.getX$() - loc0.getX$();
var y=loc3.getY$() - 3 * loc2.getY$() + 3 * loc1.getY$() - loc0.getY$();
if (this.derivatives3[i] == null ) {
this.derivatives3[i]=Clazz.array(Double.TYPE, -1, [x, y]);
} else {
this.derivatives3[i][0]=x;
this.derivatives3[i][1]=y;
}}
return this.derivatives3;
}return null;
});

C$.$static$=function(){C$.$static$=0;
C$.DOTTED_LINE=Clazz.array(Float.TYPE, -1, [2, 2]);
C$.DASHED_LINE=Clazz.array(Float.TYPE, -1, [2, 8]);
C$.panelProps=Clazz.array(String, -1, ["selectedpoint", "selectedtrack", "track", "clear", "video", "stepnumber"]);
C$.hitRect=Clazz.new_($I$(53,1).c$$I$I$I$I,[-4, -4, 8, 8]);
C$.transform=Clazz.new_($I$(2,1));
C$.target_footprint=$I$(54).getFootprint$S("Footprint.BoldCrosshair");
C$.inactive_target_footprint=$I$(54).getFootprint$S("Footprint.Crosshair");
C$.corner_footprint=$I$(54).getFootprint$S("Footprint.SolidSquare");
C$.format=$I$(52).getNumberInstance$();
C$.solidBold=Clazz.new_($I$(55,1).c$$F,[2]);
C$.solid=Clazz.new_($I$(55,1));
C$.dotted=Clazz.new_($I$(55,1).c$$F$I$I$F$FA$F,[2, 0, 0, 8, C$.DOTTED_LINE, 0]);
C$.dashed=Clazz.new_($I$(55,1).c$$F$I$I$F$FA$F,[2, 0, 0, 8, C$.DASHED_LINE, 0]);
C$.searchIcon=$I$(56).getResourceIcon$S$Z("green_light.gif", true);
C$.stopIcon=$I$(56).getResourceIcon$S$Z("red_light.gif", true);
C$.graySearchIcon=$I$(56).getResourceIcon$S$Z("gray_light.gif", true);
C$.circleIcon=$I$(56).getResourceIcon$S$Z("circle.gif", true);
C$.squareIcon=$I$(56).getResourceIcon$S$Z("square.gif", true);
C$.circleDisabledIcon=$I$(56).getResourceIcon$S$Z("circle_disabled.gif", true);
C$.squareDisabledIcon=$I$(56).getResourceIcon$S$Z("square_disabled.gif", true);
C$.defaultMaskSize=Clazz.array(Integer.TYPE, -1, [9, 9]);
C$.defaultSearchSize=Clazz.array(Integer.TYPE, -1, [40, 40]);
C$.RUST=Clazz.new_($I$(36,1).c$$I$I$I,[100, 20, 20]);
C$.stopPolicy=0;
C$.searchAreaPolicy=0;
{
C$.format.setMinimumIntegerDigits$I(1);
C$.format.setMinimumFractionDigits$I(1);
C$.format.setMaximumFractionDigits$I(1);
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.AutoTracker, "ATObject", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
Clazz.super_(C$, this);
this.name=name;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AutoTracker, "Handle", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.cabrillo.tracker.AutoTracker','.ATObject']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
var dx=x - this.getX$();
var dy=y - this.getY$();
this.prevX=this.getX$();
this.prevY=this.getY$();
C$.superclazz.prototype.setXY$D$D.apply(this, [x, y]);
if (this === this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].searchHandle ) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].searchCenter.x+=dx;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].searchCenter.y+=dy;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].searchCorner.x+=dx;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].searchCorner.y+=dy;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].refreshSearchRect$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].wizard.setChanged$();
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCenter.x+=dx;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCenter.y+=dy;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCorner.x+=dx;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCorner.y+=dy;
if (!p$1.isMaskInVideo.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [])) {
C$.superclazz.prototype.setXY$D$D.apply(this, [this.prevX, this.prevY]);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCenter.x-=dx;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCenter.y-=dy;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCorner.x-=dx;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCorner.y-=dy;
return;
}var keyFrameData=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getCurrentKeyFrameData$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
keyFrameData.getMaskPoints$()[0].setLocation$java_awt_geom_Point2D(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCenter);
keyFrameData.getMaskPoints$()[1].setLocation$java_awt_geom_Point2D(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCorner);
var target=keyFrameData.getTarget$();
keyFrameData.setTargetOffset$D$D(target.x - this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCenter.x, target.y - this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCenter.y);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].refreshKeyFrame$org_opensourcephysics_cabrillo_tracker_AutoTracker_KeyFrameData$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [keyFrameData, true]);
}this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].clearSearchPointsDownstream$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
});

Clazz.newMeth(C$, 'setScreenLocation$I$I$org_opensourcephysics_media_core_VideoPanel',  function (x, y, vidPanel) {
if (this.screenPt == null ) {
this.screenPt=Clazz.new_($I$(1,1));
this.toScreen=Clazz.new_($I$(2,1));
}if (this.worldPt == null ) this.worldPt=Clazz.new_($I$(3,1));
this.screenPt.setLocation$I$I(x, y);
vidPanel.getPixelTransform$java_awt_geom_AffineTransform(this.toScreen);
try {
this.toScreen.inverseTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(this.screenPt, this.worldPt);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.awt.geom.NoninvertibleTransformException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
this.setLocation$java_awt_geom_Point2D(this.worldPt);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AutoTracker, "Corner", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.cabrillo.tracker.AutoTracker','.ATObject']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
this.prevX=this.x;
this.prevY=this.y;
C$.superclazz.prototype.setXY$D$D.apply(this, [x, y]);
if (this === this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].searchCorner ) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].refreshSearchRect$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].wizard.setChanged$();
} else {
if (!p$1.isMaskInVideo.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [])) {
C$.superclazz.prototype.setXY$D$D.apply(this, [this.prevX, this.prevY]);
return;
}this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].refreshKeyFrame$org_opensourcephysics_cabrillo_tracker_AutoTracker_KeyFrameData$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getCurrentKeyFrameData$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []), true]);
}this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].clearSearchPointsDownstream$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AutoTracker, "Target", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.media.core.TPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
C$.superclazz.prototype.setXY$D$D.apply(this, [x, y]);
var n=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].panelID).getFrameNumber$();
var frameData=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getOrCreateFrameData$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [n]);
var keyFrameData=frameData.getKeyFrameData$();
keyFrameData.setTargetOffset$D$D(x - this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCenter.x, y - this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCenter.y);
var track=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
track.autoTrackerMarking=track.isAutoAdvance$();
track.undoEnabled=false;
var p=track.autoMarkAt$I$D$D(n, this.getX$(), this.getY$());
track.undoEnabled=true;
frameData.setAutoMarkPoint$org_opensourcephysics_media_core_TPoint(p);
track.autoTrackerMarking=false;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
track.repaint$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AutoTracker, "FrameData", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.templateAlphas=Clazz.array(Integer.TYPE, [2]);
this.targetOffset=Clazz.array(Double.TYPE, -1, [0, 0]);
},1);

C$.$fields$=[['Z',['searched','decided'],'I',['index','frameNum','matcherHashCode'],'O',['templateAlphas','int[]','targetOffset','double[]','+matchWidthAndHeight','matchPoints','org.opensourcephysics.media.core.TPoint[]','+searchPoints','trackPoint','org.opensourcephysics.media.core.TPoint','autoMarkLoc','double[]','templateImage','java.awt.image.BufferedImage','templateIcon','javax.swing.Icon','+matchIcon','+evolvedIcon','workingPixels','int[]']]]

Clazz.newMeth(C$, 'c$$I$I',  function (pointIndex, frameNumber) {
;C$.$init$.apply(this);
this.index=pointIndex;
this.frameNum=frameNumber;
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_AutoTracker_KeyFrameData',  function (keyFrame) {
;C$.$init$.apply(this);
this.index=keyFrame.getIndex$();
this.frameNum=keyFrame.getFrameNumber$();
this.matchWidthAndHeight=keyFrame.getMatchWidthAndHeight$();
this.matchPoints=keyFrame.getMatchPoints$();
this.searchPoints=keyFrame.getSearchPoints$Z(false);
this.targetOffset=keyFrame.getTargetOffset$();
this.matchIcon=keyFrame.getMatchIcon$();
this.templateIcon=keyFrame.getTemplateIcon$();
this.evolvedIcon=keyFrame.getEvolvedIcon$();
this.autoMarkLoc=keyFrame.getAutoMarkLoc$();
this.trackPoint=keyFrame.trackPoint;
this.searched=keyFrame.searched;
}, 1);

Clazz.newMeth(C$, 'getFrameNumber$',  function () {
return this.frameNum;
});

Clazz.newMeth(C$, 'getTemplateIcon$',  function () {
return this.templateIcon;
});

Clazz.newMeth(C$, 'setTemplateIcon$javax_swing_Icon',  function (icon) {
this.templateIcon=icon;
});

Clazz.newMeth(C$, 'getMatchIcon$',  function () {
return this.matchIcon;
});

Clazz.newMeth(C$, 'setMatchIcon$javax_swing_Icon',  function (icon) {
this.matchIcon=icon;
});

Clazz.newMeth(C$, 'getEvolvedIcon$',  function () {
return this.evolvedIcon;
});

Clazz.newMeth(C$, 'setEvolvedIcon$javax_swing_Icon',  function (icon) {
});

Clazz.newMeth(C$, 'setTemplate$org_opensourcephysics_media_core_TemplateMatcher',  function (matcher) {
this.templateImage=matcher.getTemplate$();
this.templateAlphas[0]=matcher.getAlphas$()[0];
this.templateAlphas[1]=matcher.getAlphas$()[1];
this.workingPixels=matcher.getWorkingPixels$();
this.matcherHashCode=matcher.hashCode$();
this.setMatchIcon$javax_swing_Icon(null);
var img=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].createMagnifiedImage$java_awt_image_BufferedImage.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [this.templateImage]);
this.setTemplateIcon$javax_swing_Icon(Clazz.new_($I$(4,1).c$$java_awt_Image,[img]));
});

Clazz.newMeth(C$, 'setEvolvedImage$java_awt_image_BufferedImage',  function (image) {
if (image == null ) {
this.setEvolvedIcon$javax_swing_Icon(null);
return;
}var img=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].createMagnifiedImage$java_awt_image_BufferedImage.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [image]);
this.setEvolvedIcon$javax_swing_Icon(Clazz.new_($I$(4,1).c$$java_awt_Image,[img]));
});

Clazz.newMeth(C$, 'getTemplateToMatch$',  function () {
if (this.templateImage == null  || this.newTemplateExists$() ) {
this.setTemplate$org_opensourcephysics_media_core_TemplateMatcher(this.getTemplateMatcher$());
}return this.templateImage;
});

Clazz.newMeth(C$, 'newTemplateExists$',  function () {
if (this.isKeyFrameData$()) return false;
var matcher=this.getTemplateMatcher$();
if (matcher == null ) return false;
var different=matcher.getAlphas$()[0] != this.templateAlphas[0] || matcher.getAlphas$()[1] != this.templateAlphas[1]  || matcher.hashCode$() != this.matcherHashCode ;
var appropriate=matcher.getIndex$() < this.frameNum;
return different && appropriate ;
});

Clazz.newMeth(C$, 'getTemplateImage$',  function () {
return this.templateImage;
});

Clazz.newMeth(C$, 'getWorkingPixels$',  function () {
return this.workingPixels;
});

Clazz.newMeth(C$, 'getTemplateMatcher$',  function () {
var keyFrameData=this.getKeyFrameData$();
return keyFrameData == null  ? null : keyFrameData.matcher;
});

Clazz.newMeth(C$, 'setTargetOffset$D$D',  function (dx, dy) {
this.targetOffset=Clazz.array(Double.TYPE, -1, [dx, dy]);
});

Clazz.newMeth(C$, 'getTargetOffset$',  function () {
if (this.isKeyFrameData$()) return this.targetOffset;
return this.getKeyFrameData$().getTargetOffset$();
});

Clazz.newMeth(C$, 'setSearchPoints$org_opensourcephysics_media_core_TPointA',  function (points) {
this.searchPoints=points;
});

Clazz.newMeth(C$, 'getSearchPoints$Z',  function (inherit) {
if (!inherit || this.searchPoints != null   || this.isKeyFrameData$() ) return this.searchPoints;
var map=this.getMyFrameDataMap$();
for (var i=this.frameNum + 1; --i >= 0; ) {
var frameData=map.get$O(Integer.valueOf$I(i));
if (frameData != null ) {
if (frameData.searchPoints != null  || frameData.isKeyFrameData$() ) {
return frameData.searchPoints;
}}}
return null;
});

Clazz.newMeth(C$, 'setMatchPoints$org_opensourcephysics_media_core_TPointA',  function (points) {
this.matchPoints=points;
});

Clazz.newMeth(C$, 'getMatchPoints$',  function () {
return this.matchPoints;
});

Clazz.newMeth(C$, 'setMatchWidthAndHeight$DA',  function (matchData) {
this.matchWidthAndHeight=matchData;
});

Clazz.newMeth(C$, 'getMatchWidthAndHeight$',  function () {
return this.matchWidthAndHeight;
});

Clazz.newMeth(C$, 'getMyFrameDataMap$',  function () {
return this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getFrameNumberToFrameDataMap$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [this.index]);
});

Clazz.newMeth(C$, 'getKeyFrameData$',  function () {
if (this.isKeyFrameData$()) return this;
var keyData=null;
for (var i=0; i < this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].keyFrames.size$(); i++) {
var next=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].keyFrames.get$I(i);
if (next != null  && next.getFrameNumber$() <= this.frameNum ) {
keyData=next;
} else break;
}
return keyData;
});

Clazz.newMeth(C$, 'getIndex$',  function () {
return this.index;
});

Clazz.newMeth(C$, 'isMarked$',  function () {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
return track != null  && track.getStep$I(this.frameNum) != null  ;
});

Clazz.newMeth(C$, 'isAutoMarked$',  function () {
if (this.autoMarkLoc == null  || this.trackPoint == null  ) return false;
if (Clazz.instanceOf(this.trackPoint, "org.opensourcephysics.cabrillo.tracker.CoordAxes.AnglePoint")) {
var coords=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].panelID).getCoords$();
var theta=coords.getAngle$I(this.frameNum);
var p=this.trackPoint;
return Math.abs(theta - p.getAngle$()) < 0.001 ;
}return Math.abs(this.autoMarkLoc[0] - this.trackPoint.getX$()) < 0.01  && Math.abs(this.autoMarkLoc[1] - this.trackPoint.getY$()) < 0.01  ;
});

Clazz.newMeth(C$, 'setAutoMarkPoint$org_opensourcephysics_media_core_TPoint',  function (point) {
this.trackPoint=point;
this.autoMarkLoc=point == null  ? null : Clazz.array(Double.TYPE, -1, [point.getX$(), point.getY$()]);
});

Clazz.newMeth(C$, 'getAutoMarkLoc$',  function () {
return this.autoMarkLoc;
});

Clazz.newMeth(C$, 'isKeyFrameData$',  function () {
return false;
});

Clazz.newMeth(C$, 'getMarkedPoint$',  function () {
if (!this.isMarked$()) return null;
if (this.trackPoint != null ) return this.trackPoint;
var track=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
return track.getMarkedPoint$I$I(this.frameNum, this.index);
});

Clazz.newMeth(C$, 'clear$',  function () {
this.matchPoints=null;
this.matchWidthAndHeight=null;
this.matchIcon=null;
this.autoMarkLoc=null;
this.searched=false;
this.decided=false;
this.trackPoint=null;
this.workingPixels=null;
this.matcherHashCode=0;
if (!this.isKeyFrameData$()) {
this.searchPoints=null;
this.templateIcon=null;
this.evolvedIcon=null;
this.templateAlphas=Clazz.array(Integer.TYPE, -1, [0, 0]);
this.templateImage=null;
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AutoTracker, "KeyFrameData", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.cabrillo.tracker.AutoTracker','.FrameData']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.maskPoints=Clazz.array($I$(5), -1, [Clazz.new_($I$(5,1)), Clazz.new_($I$(5,1))]);
},1);

C$.$fields$=[['O',['mask','java.awt.geom.RectangularShape','target','org.opensourcephysics.cabrillo.tracker.AutoTracker.Target','maskPoints','org.opensourcephysics.media.core.TPoint[]','matcher','org.opensourcephysics.media.core.TemplateMatcher']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_TPoint$java_awt_geom_RectangularShape$org_opensourcephysics_cabrillo_tracker_AutoTracker_Target',  function (keyPt, mask, target) {
;C$.superclazz.c$$I$I.apply(this,[this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getStepPointIndex$org_opensourcephysics_media_core_TPoint.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [keyPt]), keyPt.getFrameNumber$org_opensourcephysics_media_core_VideoPanel(p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []))]);C$.$init$.apply(this);
this.mask=mask;
this.target=target;
this.maskPoints[0].setLocation$java_awt_geom_Point2D(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCenter);
this.maskPoints[1].setLocation$java_awt_geom_Point2D(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCorner);
}, 1);

Clazz.newMeth(C$, 'isKeyFrameData$',  function () {
return true;
});

Clazz.newMeth(C$, 'getMask$',  function () {
return this.mask;
});

Clazz.newMeth(C$, 'getTarget$',  function () {
return this.target;
});

Clazz.newMeth(C$, 'getMaskPoints$',  function () {
return this.maskPoints;
});

Clazz.newMeth(C$, 'setTemplateMatcher$org_opensourcephysics_media_core_TemplateMatcher',  function (matcher) {
this.matcher=matcher;
});

Clazz.newMeth(C$, 'isFirstKeyFrameData$',  function () {
var map=this.getMyFrameDataMap$();
for (var i=this.getFrameNumber$(); --i >= 0; ) {
var frameData=map.get$O(Integer.valueOf$I(i));
if (frameData != null  && frameData.isKeyFrameData$() ) return false;
}
return true;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AutoTracker, "Wizard", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JDialog', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.keyAction=((P$.AutoTracker$Wizard$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var i=Integer.parseInt$S(e.getActionCommand$());
var player=p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getPlayer$();
var clip=player.getVideoClip$();
player.setStepNumber$I(clip.frameToStep$I(i));
});
})()
), Clazz.new_($I$(6,1),[this, null],P$.AutoTracker$Wizard$1));
},1);

C$.$fields$=[['Z',['isVisible','changed','ignoreChanges','refreshPosted','isPositioned'],'O',['startButton','javax.swing.JButton','+searchNextButton','+searchThisButton','+closeButton','+helpButton','+deleteButton','+keyFrameButton','+copyDataButton','+acceptButton','+skipButton','evolveSpinner','javax.swing.JSpinner','+acceptSpinner','+tetherSpinner','+widthSpinner','+heightSpinner','trackDropdown','javax.swing.JComboBox','+pointDropdown','textPane','javax.swing.JTextArea','templateToolbar','javax.swing.JToolBar','+searchToolbar','+targetToolbar','+imageToolbar','+stopToolbar','+templateShapeToolbar','startPanel','javax.swing.JPanel','+followupPanel','+infoPanel','+northPanel','+targetPanel','templateImageLabel','javax.swing.JLabel','+matchImageLabel','+evolvedImageLabel','+keyImageLabel','+acceptLabel','+templateLabel','+ellipseLabel','+rectLabel','+widthLabel','+heightLabel','+frameLabel','+evolveLabel','+tetherLabel','+searchLabel','+targetLabel','+pointLabel','+trackLabel','+stopLabel','+templateShapeLabel','textPaneSize','java.awt.Dimension','ellipseButton','javax.swing.JRadioButton','+rectButton','oneDCheckbox','javax.swing.JCheckBox','+fastCheckbox','poorMatchButton','javax.swing.JRadioButton','+noMatchButton','+neverStopButton','+lookAheadButton','+followButton','+fixedButton','mouseOverObj','java.lang.Object','mouseOverListener','java.awt.event.MouseAdapter','mouseOverTimer','javax.swing.Timer','+evolveTemplateTimer','myFollower','java.awt.event.ComponentListener','keyAction','javax.swing.Action']]]

Clazz.newMeth(C$, 'clearTextPaneSize$',  function () {
this.textPaneSize=null;
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getTFrame$(), false]);C$.$init$.apply(this);
this.createGUI$();
}, 1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (e.getPropertyName$().equals$O("tab")) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].frame.isRemovingAll$() && this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].panelID != null   && e.getNewValue$() === p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [])  ) {
this.setVisible$Z(this.isVisible);
} else {
var vis=this.isVisible;
this.setVisible$Z(false);
this.isVisible=vis;
}}});

Clazz.newMeth(C$, 'setChanged$',  function () {
if (!this.changed) {
this.changed=true;
this.refreshGUI$();
}});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
if (vis && !this.isPositioned ) {
$I$(7,"trigger$I$java_awt_event_ActionListener",[100, ((P$.AutoTracker$Wizard$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(8,"invokeLater$Runnable",[((P$.AutoTracker$Wizard$lambda1$2||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda1$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].clearTextPaneSize$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].refreshGUIAsync$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
var screen=$I$(9).getDefaultToolkit$().getScreenSize$.apply($I$(9).getDefaultToolkit$(), []);
var frameLoc=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].frame.getLocationOnScreen$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].frame, []);
var w=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].wizard.getWidth$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].wizard, []) + 8;
var x=Math.min(screen.width - w, frameLoc.x + this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].frame.getWidth$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].frame, []) - w);
var y=frameLoc.y + 90;
this.b$['java.awt.Window'].setLocation$I$I.apply(this.b$['java.awt.Window'], [x, y]);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].isPositioned=true;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], [this.$finals$.vis]);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda1$2.$init$,[this, {vis:this.$finals$.vis}]))]);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda1.$init$,[this, {vis:vis}]))]);
return;
}C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].panelID);
var toolbar=panel.getToolBar$Z(true);
toolbar.autotrackerButton.setSelected$Z(vis);
this.isVisible=vis;
if (!vis) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].erase$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
panel.repaintDirtyRegion$();
} else {
var track=panel.getSelectedTrack$();
if (track != null ) this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].setTrack$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [track]);
this.refreshGUI$();
}});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
$I$(10,"setFonts$O$I",[this, $I$(10).getLevel$()]);
var buttons=Clazz.array(java.lang.Object, -1, [this.acceptButton, this.skipButton]);
$I$(10,"setFonts$O$I",[buttons, $I$(10).getLevel$()]);
p$2.setFontLevel$javax_swing_JComboBox.apply(this, [this.trackDropdown]);
p$2.setFontLevel$javax_swing_JComboBox.apply(this, [this.pointDropdown]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].panelID == null ) return;
this.clearTextPaneSize$();
this.refreshGUI$();
});

Clazz.newMeth(C$, 'setFontLevel$javax_swing_JComboBox',  function (next) {
var o=next.getSelectedItem$();
var items=Clazz.array(java.lang.Object, [next.getItemCount$()]);
for (var i=0; i < items.length; i++) {
items[i]=next.getItemAt$I(i);
}
var model=Clazz.new_($I$(11,1).c$$OA,[items]);
next.setModel$javax_swing_ComboBoxModel(model);
if (next === this.pointDropdown ) {
next.setName$S("refresh");
next.setSelectedItem$O(o);
next.setName$S("");
} else {
next.setSelectedItem$O(o);
}}, p$2);

Clazz.newMeth(C$, 'dispose$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].frame.removePropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].frame.removeComponentListener$java_awt_event_ComponentListener(this.myFollower);
this.myFollower=null;
this.mouseOverTimer.stop$();
this.mouseOverTimer=null;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].panelID=null;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].frame=null;
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'setMaskDimensions$D$D',  function (width, height) {
var prevW=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCorner.x - this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCenter.x;
var prevH=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCorner.y - this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCenter.y;
if (prevW == width / 2  && prevH == height / 2  ) return;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCorner.x=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCenter.x + width / 2;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCorner.y=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCenter.y + height / 2;
if (!p$1.isMaskInVideo.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [])) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCorner.x=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCenter.x + prevW;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCorner.y=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCenter.y + prevH;
}var keyFrameData=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getCurrentKeyFrameData$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].refreshKeyFrame$org_opensourcephysics_cabrillo_tracker_AutoTracker_KeyFrameData$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [keyFrameData, false]);
});

Clazz.newMeth(C$, 'setShapeToEllipse$Z',  function (ellipse) {
var keyFrameData=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getCurrentKeyFrameData$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
if (keyFrameData == null ) return;
var s=keyFrameData.getMask$();
keyFrameData.mask=ellipse ? Clazz.new_([s.getX$(), s.getY$(), s.getWidth$(), s.getHeight$()],$I$(12,1).c$$D$D$D$D) : Clazz.new_([s.getX$(), s.getY$(), s.getWidth$(), s.getHeight$()],$I$(13,1).c$$D$D$D$D);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].search$Z$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [true, false]);
this.replaceIcons$org_opensourcephysics_cabrillo_tracker_AutoTracker_KeyFrameData(keyFrameData);
});

Clazz.newMeth(C$, 'getAlphaFromPercent$I',  function (percent) {
var alpha=((2.55 * percent)|0);
return Math.max(0, Math.min(alpha, 255));
});

Clazz.newMeth(C$, 'createGUI$',  function () {
var icon=$I$(14).autotrackerOffIcon;
if (Clazz.instanceOf(icon, "org.opensourcephysics.display.ResizableIcon")) {
icon=(icon).getBaseIcon$();
if (Clazz.instanceOf(icon, "javax.swing.ImageIcon")) {
this.setIconImage$java_awt_Image((icon).getImage$());
}}if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].frame != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].frame.addPropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this);
}var kl=((P$.AutoTracker$Wizard$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].panelID);
if (!trackerPanel.getPlayer$().isEnabled$()) return;
switch (e.getKeyCode$()) {
case 33:
if (e.isShiftDown$()) {
var n=trackerPanel.getPlayer$().getStepNumber$() - 5;
trackerPanel.getPlayer$().setStepNumber$I(n);
} else trackerPanel.getPlayer$().back$();
break;
case 34:
if (e.isShiftDown$()) {
var n=trackerPanel.getPlayer$().getStepNumber$() + 5;
trackerPanel.getPlayer$().setStepNumber$I(n);
} else trackerPanel.getPlayer$().step$();
break;
case 36:
trackerPanel.getPlayer$().setStepNumber$I(0);
break;
case 35:
var clip=trackerPanel.getPlayer$().getVideoClip$();
trackerPanel.getPlayer$().setStepNumber$I(clip.getStepCount$() - 1);
break;
}
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 16) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].panelID);
trackerPanel.isShiftKeyDown=false;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].startButton.setText$S(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].stepping ? $I$(15).getString$S("AutoTracker.Wizard.Button.Stop") : $I$(15).getString$S("AutoTracker.Wizard.Button.Search"));
}});
})()
), Clazz.new_($I$(16,1),[this, null],P$.AutoTracker$Wizard$2));
var delay=100;
this.mouseOverTimer=Clazz.new_([delay, ((P$.AutoTracker$Wizard$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].refreshNow$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda2.$init$,[this, null]))],$I$(17,1).c$$I$java_awt_event_ActionListener);
this.mouseOverTimer.setInitialDelay$I(delay);
this.mouseOverTimer.setRepeats$Z(false);
delay=100;
this.evolveTemplateTimer=Clazz.new_([delay, ((P$.AutoTracker$Wizard$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var n=p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getFrameNumber$.apply(p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []), []);
var framedata=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getOrCreateFrameData$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [n]);
if (framedata.isKeyFrameData$.apply(framedata, [])) this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].refreshKeyFrame$org_opensourcephysics_cabrillo_tracker_AutoTracker_KeyFrameData$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [framedata, true]);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].stop$Z$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [true, false]);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda3.$init$,[this, null]))],$I$(17,1).c$$I$java_awt_event_ActionListener);
this.evolveTemplateTimer.setInitialDelay$I(delay);
this.evolveTemplateTimer.setRepeats$Z(false);
this.mouseOverListener=((P$.AutoTracker$Wizard$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
var c=$I$(18,"getParentOrSelfToolBar$java_awt_Container",[e.getSource$()]);
if (c != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].mouseOverObj=c;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].isInteracting=true;
}if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].mouseOverObj == null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].refreshNow$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].mouseOverTimer.restart$();
}});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].mouseOverTimer.restart$();
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].mouseOverObj=null;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].isInteracting=false;
});
})()
), Clazz.new_($I$(19,1),[this, null],P$.AutoTracker$Wizard$3));
this.addWindowFocusListener$java_awt_event_WindowFocusListener(((P$.AutoTracker$Wizard$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowGainedFocus$java_awt_event_WindowEvent',  function (e) {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
if (track != null ) p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
});
})()
), Clazz.new_($I$(20,1),[this, null],P$.AutoTracker$Wizard$4)));
var contentPane=Clazz.new_([Clazz.new_($I$(22,1))],$I$(21,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
this.trackDropdown=((P$.AutoTracker$Wizard$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JComboBox'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
dim.height-=1;
return dim;
});
})()
), Clazz.new_($I$(23,1),[this, null],P$.AutoTracker$Wizard$5));
this.trackDropdown.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
for (var i=0; i < this.trackDropdown.getComponentCount$(); i++) {
this.trackDropdown.getComponent$I(i).addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
}
this.trackDropdown.setRenderer$javax_swing_ListCellRenderer(Clazz.new_($I$(24,1)));
this.trackDropdown.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
if ("refresh".equals$O.apply("refresh", [this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].trackDropdown.getName$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].trackDropdown, [])])) return;
var item=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].trackDropdown.getSelectedItem$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].trackDropdown, []);
if (item != null ) {
var t=p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getTrackByName$Class$S.apply(p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []), [Clazz.getClass($I$(25)), item[1]]);
if (t != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].stop$Z$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [true, false]);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].setTrack$org_opensourcephysics_cabrillo_tracker_TTrack.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [t]);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
}}});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda4.$init$,[this, null])));
this.startPanel=Clazz.new_($I$(21,1));
this.startButton=Clazz.new_($I$(26,1));
this.startButton.setDisabledIcon$javax_swing_Icon($I$(27).graySearchIcon);
var searchAction=((P$.AutoTracker$Wizard$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var tp=p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].stepping) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].stop$Z$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [false, true]);
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].startButton.setName$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].startButton, [String.valueOf$Z(tp.isAutoRefresh$.apply(tp, []))]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].fastCheckbox.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].fastCheckbox, [])) tp.setAutoRefresh$Z.apply(tp, [false]);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].search$Z$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [true, true]);
}});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda5.$init$,[this, null]));
this.startButton.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.$finals$.searchAction.actionPerformed$java_awt_event_ActionEvent(e);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda6.$init$,[this, {searchAction:searchAction}])));
this.startButton.addKeyListener$java_awt_event_KeyListener(kl);
this.startButton.addMouseMotionListener$java_awt_event_MouseMotionListener(((P$.AutoTracker$Wizard$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].startButton.setText$S(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].stepping ? $I$(15).getString$S("AutoTracker.Wizard.Button.Stop") : $I$(15).getString$S("AutoTracker.Wizard.Button.Search"));
});
})()
), Clazz.new_($I$(19,1),[this, null],P$.AutoTracker$Wizard$6)));
this.startPanel.add$java_awt_Component(this.startButton);
this.searchThisButton=Clazz.new_($I$(26,1));
this.searchThisButton.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].searchThisButton.getName$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].searchThisButton, []) != null ) {
p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getPlayer$.apply(p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []), []).back$.apply(p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getPlayer$.apply(p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []), []), []);
return;
}this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].startButton.setName$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].startButton, [String.valueOf$Z(p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).isAutoRefresh$.apply(p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []), []))]);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].search$Z$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [true, false]);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda7.$init$,[this, null])));
this.searchThisButton.addKeyListener$java_awt_event_KeyListener(kl);
this.startPanel.add$java_awt_Component(this.searchThisButton);
this.searchNextButton=Clazz.new_($I$(26,1));
this.searchNextButton.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].startButton.setName$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].startButton, [String.valueOf$Z(p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).isAutoRefresh$.apply(p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []), []))]);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].search$Z$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [false, false]);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda8.$init$,[this, null])));
this.searchNextButton.addKeyListener$java_awt_event_KeyListener(kl);
this.startPanel.add$java_awt_Component(this.searchNextButton);
this.followupPanel=Clazz.new_($I$(21,1));
this.followupPanel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$());
this.followupPanel.setOpaque$Z(false);
this.imageToolbar=Clazz.new_($I$(29,1));
this.imageToolbar.setFloatable$Z(false);
this.frameLabel=Clazz.new_($I$(30,1));
this.frameLabel.setOpaque$Z(false);
this.frameLabel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 6, 0, 6));
this.frameLabel.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.templateImageLabel=Clazz.new_($I$(30,1));
this.templateImageLabel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 6, 0, 0));
this.templateImageLabel.setIconTextGap$I(3);
this.templateImageLabel.setHorizontalTextPosition$I(2);
this.templateImageLabel.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.matchImageLabel=Clazz.new_($I$(30,1));
this.matchImageLabel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 6, 0, 0));
this.matchImageLabel.setIconTextGap$I(3);
this.matchImageLabel.setHorizontalTextPosition$I(2);
this.matchImageLabel.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.evolvedImageLabel=Clazz.new_($I$(30,1));
this.evolvedImageLabel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 6, 0, 0));
this.evolvedImageLabel.setIconTextGap$I(3);
this.evolvedImageLabel.setHorizontalTextPosition$I(2);
this.evolvedImageLabel.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.keyImageLabel=Clazz.new_($I$(30,1));
this.keyImageLabel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 6, 0, 0));
this.keyImageLabel.setIconTextGap$I(3);
this.keyImageLabel.setHorizontalTextPosition$I(2);
this.keyImageLabel.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
var flowpanel=Clazz.new_($I$(21,1));
flowpanel.setOpaque$Z(false);
flowpanel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$());
flowpanel.add$java_awt_Component(this.templateImageLabel);
flowpanel.add$java_awt_Component(this.matchImageLabel);
flowpanel.add$java_awt_Component(this.keyImageLabel);
flowpanel.add$java_awt_Component(this.evolvedImageLabel);
this.imageToolbar.add$java_awt_Component(this.frameLabel);
this.imageToolbar.add$java_awt_Component(flowpanel);
this.imageToolbar.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.templateToolbar=Clazz.new_($I$(29,1));
this.templateToolbar.setFloatable$Z(false);
this.templateToolbar.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.templateLabel=Clazz.new_($I$(30,1));
this.templateLabel.setOpaque$Z(false);
this.templateLabel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 6, 0, 0));
this.evolveLabel=Clazz.new_($I$(30,1));
this.evolveLabel.setOpaque$Z(false);
this.evolveLabel.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.evolveLabel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 6, 0, 0));
this.tetherLabel=Clazz.new_($I$(30,1));
this.tetherLabel.setOpaque$Z(false);
this.tetherLabel.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.tetherLabel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 6, 0, 0));
this.acceptLabel=Clazz.new_($I$(30,1));
this.acceptLabel.setOpaque$Z(false);
this.acceptLabel.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.acceptLabel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 6, 0, 0));
this.evolveSpinner=Clazz.new_([this, null, Clazz.new_($I$(32,1).c$$I$I$I$I,[20, 0, 100, 1]), this.trackDropdown],$I$(31,1).c$$javax_swing_SpinnerModel$java_awt_Component);
this.tetherSpinner=Clazz.new_([this, null, Clazz.new_($I$(32,1).c$$I$I$I$I,[5, 0, 100, 1]), this.trackDropdown],$I$(31,1).c$$javax_swing_SpinnerModel$java_awt_Component);
this.acceptSpinner=Clazz.new_([this, null, Clazz.new_($I$(32,1).c$$I$I$I$I,[this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].goodMatch, this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].possibleMatch, 10, 1]), this.trackDropdown],$I$(31,1).c$$javax_swing_SpinnerModel$java_awt_Component);
var percentFormat=((P$.AutoTracker$Wizard$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['javax.swing.JFormattedTextField','.AbstractFormatterFactory']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getFormatter$javax_swing_JFormattedTextField',  function (tf) {
var formatter=((P$.AutoTracker$Wizard$7$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$7$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['javax.swing.JFormattedTextField','.AbstractFormatter']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueToString$O',  function (value) {
return value.toString() + "%";
});

Clazz.newMeth(C$, 'stringToValue$S',  function (text) {
return Integer.valueOf$I(Integer.parseInt$S(text.substring$I$I(0, text.length$() - 1)));
});
})()
), Clazz.new_($I$(33,1),[this, null],P$.AutoTracker$Wizard$7$1));
return formatter;
});
})()
), Clazz.new_($I$(34,1),[this, null],P$.AutoTracker$Wizard$7));
var spinnerListener=((P$.AutoTracker$Wizard$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].ignoreChanges) return;
var spinner=e.getSource$();
var i=spinner.getValue$();
if (spinner === this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].evolveSpinner ) this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].evolveAlpha=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].getAlphaFromPercent$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], [(i).$c()]);
 else this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].tetherAlpha=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].getAlphaFromPercent$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], [(i).$c()]);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].evolveTemplateTimer.restart$();
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$8.$init$,[this, null]));
var spinners=Clazz.array($I$(35), -1, [this.evolveSpinner, this.tetherSpinner, this.acceptSpinner]);
for (var i=0; i < spinners.length; i++) {
var spinner=spinners[i];
for (var j=0; j < spinner.getComponentCount$(); j++) spinner.getComponent$I(j).addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);

var tf=(spinner.getEditor$()).getTextField$();
tf.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
tf.setEnabled$Z(false);
tf.setDisabledTextColor$java_awt_Color($I$(36).BLACK);
switch (i) {
case 0:
case 1:
tf.setFormatterFactory$javax_swing_JFormattedTextField_AbstractFormatterFactory(percentFormat);
spinner.addChangeListener$javax_swing_event_ChangeListener(spinnerListener);
break;
case 2:
spinner.addChangeListener$javax_swing_event_ChangeListener(((P$.AutoTracker$Wizard$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].goodMatch=(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].acceptSpinner.getValue$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].acceptSpinner, [])).$c();
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].setChanged$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda9.$init$,[this, null])));
}
}
flowpanel=Clazz.new_($I$(21,1));
flowpanel.setOpaque$Z(false);
flowpanel.add$java_awt_Component(this.evolveLabel);
flowpanel.add$java_awt_Component(this.evolveSpinner);
flowpanel.add$java_awt_Component(this.tetherLabel);
flowpanel.add$java_awt_Component(this.tetherSpinner);
flowpanel.add$java_awt_Component(this.acceptLabel);
flowpanel.add$java_awt_Component(this.acceptSpinner);
this.templateToolbar.add$java_awt_Component(this.templateLabel);
this.templateToolbar.add$java_awt_Component(flowpanel);
this.templateShapeToolbar=Clazz.new_($I$(29,1));
this.templateShapeToolbar.setFloatable$Z(false);
this.templateShapeToolbar.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.templateShapeLabel=Clazz.new_($I$(30,1));
this.templateShapeLabel.setOpaque$Z(false);
this.templateShapeLabel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 6, 0, 6));
this.ellipseLabel=Clazz.new_($I$(30,1));
this.ellipseLabel.setOpaque$Z(false);
this.ellipseLabel.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.ellipseLabel.addMouseListener$java_awt_event_MouseListener(((P$.AutoTracker$Wizard$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].ellipseButton.doClick$I(0);
});
})()
), Clazz.new_($I$(19,1),[this, null],P$.AutoTracker$Wizard$9)));
this.ellipseLabel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 0, 0, 6));
this.ellipseLabel.setIcon$javax_swing_Icon($I$(27).circleIcon);
this.ellipseLabel.setDisabledIcon$javax_swing_Icon($I$(27).circleDisabledIcon);
this.rectLabel=Clazz.new_($I$(30,1));
this.rectLabel.setOpaque$Z(false);
this.rectLabel.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.rectLabel.addMouseListener$java_awt_event_MouseListener(((P$.AutoTracker$Wizard$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].rectButton.doClick$I(0);
});
})()
), Clazz.new_($I$(19,1),[this, null],P$.AutoTracker$Wizard$10)));
this.rectLabel.setIcon$javax_swing_Icon($I$(27).squareIcon);
this.rectLabel.setDisabledIcon$javax_swing_Icon($I$(27).squareDisabledIcon);
this.rectLabel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 0, 0, 12));
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].panelID);
this.ellipseButton=Clazz.new_($I$(37,1));
this.ellipseButton.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.ellipseButton.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$());
this.ellipseButton.setOpaque$Z(false);
this.ellipseButton.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].setShapeToEllipse$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], [true]);
$I$(38).repaintT$java_awt_Component(this.$finals$.trackerPanel);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda10.$init$,[this, {trackerPanel:trackerPanel}])));
this.rectButton=Clazz.new_($I$(37,1));
this.rectButton.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.rectButton.setOpaque$Z(false);
this.rectButton.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 6, 0, 0));
this.rectButton.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].setShapeToEllipse$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], [false]);
$I$(38).repaintT$java_awt_Component(this.$finals$.trackerPanel);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda11.$init$,[this, {trackerPanel:trackerPanel}])));
var group=Clazz.new_($I$(39,1));
group.add$javax_swing_AbstractButton(this.ellipseButton);
group.add$javax_swing_AbstractButton(this.rectButton);
this.ellipseButton.setSelected$Z(true);
this.widthLabel=Clazz.new_($I$(30,1));
this.widthLabel.setOpaque$Z(false);
this.widthLabel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 12, 0, 0));
this.widthLabel.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.heightLabel=Clazz.new_($I$(30,1));
this.heightLabel.setOpaque$Z(false);
this.heightLabel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 6, 0, 0));
this.heightLabel.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.widthSpinner=Clazz.new_([this, null, Clazz.new_([$I$(27).defaultMaskSize[0], 2 * this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].minMaskRadius, 99, 1],$I$(32,1).c$$I$I$I$I), this.trackDropdown],$I$(31,1).c$$javax_swing_SpinnerModel$java_awt_Component);
this.heightSpinner=Clazz.new_([this, null, Clazz.new_([$I$(27).defaultMaskSize[0], 2 * this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].minMaskRadius, 99, 1],$I$(32,1).c$$I$I$I$I), this.trackDropdown],$I$(31,1).c$$javax_swing_SpinnerModel$java_awt_Component);
spinners=Clazz.array($I$(35), -1, [this.widthSpinner, this.heightSpinner]);
for (var i=0; i < spinners.length; i++) {
var spinner=spinners[i];
for (var j=0; j < spinner.getComponentCount$(); j++) spinner.getComponent$I(j).addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);

var tf=(spinner.getEditor$()).getTextField$();
tf.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
tf.setDisabledTextColor$java_awt_Color($I$(36).BLACK);
}
var dimensionsListener=((P$.AutoTracker$Wizard$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].ignoreChanges) return;
var w=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].widthSpinner.getValue$();
var h=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].heightSpinner.getValue$();
var n=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].panelID).getFrameNumber$();
var keyFrameData=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getOrCreateFrameData$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [n]).getKeyFrameData$();
var mask=keyFrameData.getMask$();
if (e.getSource$() === this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].widthSpinner ) this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].setMaskDimensions$D$D.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], [(w).valueOf(), mask.getHeight$()]);
 else this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].setMaskDimensions$D$D.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], [mask.getWidth$(), (h).valueOf()]);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$11.$init$,[this, null]));
this.widthSpinner.addChangeListener$javax_swing_event_ChangeListener(dimensionsListener);
this.heightSpinner.addChangeListener$javax_swing_event_ChangeListener(dimensionsListener);
flowpanel=Clazz.new_($I$(21,1));
flowpanel.setOpaque$Z(false);
flowpanel.add$java_awt_Component(this.ellipseButton);
flowpanel.add$java_awt_Component(this.ellipseLabel);
flowpanel.add$java_awt_Component(this.rectButton);
flowpanel.add$java_awt_Component(this.rectLabel);
var separator=$I$(14).getSeparator$();
separator.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
flowpanel.add$java_awt_Component(separator);
flowpanel.add$java_awt_Component(this.widthLabel);
flowpanel.add$java_awt_Component(this.widthSpinner);
flowpanel.add$java_awt_Component(this.heightLabel);
flowpanel.add$java_awt_Component(this.heightSpinner);
this.templateShapeToolbar.add$java_awt_Component(this.templateShapeLabel);
this.templateShapeToolbar.add$java_awt_Component(flowpanel);
this.searchToolbar=Clazz.new_($I$(29,1));
this.searchToolbar.setFloatable$Z(false);
this.searchToolbar.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.searchLabel=Clazz.new_($I$(30,1));
this.searchLabel.setOpaque$Z(false);
this.searchLabel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 6, 0, 6));
this.oneDCheckbox=Clazz.new_($I$(40,1));
this.oneDCheckbox.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.oneDCheckbox.setOpaque$Z(false);
this.oneDCheckbox.setSelected$Z(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].lineSpread >= 0);
this.oneDCheckbox.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 0, 0, 0));
this.oneDCheckbox.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].lineSpread=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].oneDCheckbox.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].oneDCheckbox, []) ? 0 : -1;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].setChanged$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].oneDCheckbox.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].oneDCheckbox, [])) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].moveOriginToFirstKeyFrame$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
this.$finals$.trackerPanel.getAxes$.apply(this.$finals$.trackerPanel, []).setVisible$Z.apply(this.$finals$.trackerPanel.getAxes$.apply(this.$finals$.trackerPanel, []), [true]);
}$I$(38).repaintT$java_awt_Component(this.$finals$.trackerPanel);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda12.$init$,[this, {trackerPanel:trackerPanel}])));
this.fastCheckbox=Clazz.new_($I$(40,1));
this.fastCheckbox.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.fastCheckbox.setOpaque$Z(false);
this.fastCheckbox.setSelected$Z(false);
this.fastCheckbox.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 0, 0, 0));
this.fastCheckbox.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
if (!this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].active) return;
if (!this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].fastCheckbox.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].fastCheckbox, [])) {
var b=Boolean.parseBoolean$S(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].startButton.getName$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].startButton, []));
this.$finals$.trackerPanel.setAutoRefresh$Z.apply(this.$finals$.trackerPanel, [b]);
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].startButton.setName$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].startButton, [String.valueOf$Z(this.$finals$.trackerPanel.isAutoRefresh$.apply(this.$finals$.trackerPanel, []))]);
this.$finals$.trackerPanel.setAutoRefresh$Z.apply(this.$finals$.trackerPanel, [false]);
}});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda13.$init$,[this, {trackerPanel:trackerPanel}])));
this.lookAheadButton=Clazz.new_($I$(37,1));
this.lookAheadButton.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.lookAheadButton.setOpaque$Z(false);
this.lookAheadButton.setSelected$Z(true);
this.lookAheadButton.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(27).searchAreaPolicy=0;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].setChanged$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda14.$init$,[this, null])));
this.followButton=Clazz.new_($I$(37,1));
this.followButton.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.followButton.setOpaque$Z(false);
this.followButton.setSelected$Z(true);
this.followButton.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(27).searchAreaPolicy=1;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].setChanged$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda15.$init$,[this, null])));
this.fixedButton=Clazz.new_($I$(37,1));
this.fixedButton.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.fixedButton.setOpaque$Z(false);
this.fixedButton.setSelected$Z(true);
this.fixedButton.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(27).searchAreaPolicy=2;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].setChanged$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda16.$init$,[this, null])));
this.fixedButton.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 0, 0, 0));
group=Clazz.new_($I$(39,1));
group.add$javax_swing_AbstractButton(this.lookAheadButton);
group.add$javax_swing_AbstractButton(this.followButton);
group.add$javax_swing_AbstractButton(this.fixedButton);
flowpanel=Clazz.new_($I$(21,1));
flowpanel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(1, 0, 0, 0));
flowpanel.setOpaque$Z(false);
flowpanel.add$java_awt_Component(this.fastCheckbox);
separator=$I$(14).getSeparator$();
separator.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
flowpanel.add$java_awt_Component(separator);
flowpanel.add$java_awt_Component(this.lookAheadButton);
flowpanel.add$java_awt_Component(this.followButton);
flowpanel.add$java_awt_Component(this.fixedButton);
separator=$I$(14).getSeparator$();
separator.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
flowpanel.add$java_awt_Component(separator);
flowpanel.add$java_awt_Component(this.oneDCheckbox);
this.searchToolbar.add$java_awt_Component(this.searchLabel);
this.searchToolbar.add$java_awt_Component(flowpanel);
this.stopToolbar=Clazz.new_($I$(29,1));
this.stopToolbar.setFloatable$Z(false);
this.stopToolbar.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.stopLabel=Clazz.new_($I$(30,1));
this.stopLabel.setOpaque$Z(false);
this.stopLabel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 6, 0, 6));
this.poorMatchButton=Clazz.new_($I$(37,1));
this.poorMatchButton.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.poorMatchButton.setOpaque$Z(false);
this.poorMatchButton.setSelected$Z(true);
this.poorMatchButton.addActionListener$java_awt_event_ActionListener((P$.AutoTracker$Wizard$lambda17$||(P$.AutoTracker$Wizard$lambda17$=(((P$.AutoTracker$Wizard$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(27).stopPolicy=0;
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda17.$init$,[this, null]))))));
this.noMatchButton=Clazz.new_($I$(37,1));
this.noMatchButton.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.noMatchButton.setOpaque$Z(false);
this.noMatchButton.setSelected$Z(false);
this.noMatchButton.addActionListener$java_awt_event_ActionListener((P$.AutoTracker$Wizard$lambda18$||(P$.AutoTracker$Wizard$lambda18$=(((P$.AutoTracker$Wizard$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(27).stopPolicy=1;
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda18.$init$,[this, null]))))));
this.neverStopButton=Clazz.new_($I$(37,1));
this.neverStopButton.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.neverStopButton.setOpaque$Z(false);
this.neverStopButton.setSelected$Z(false);
this.neverStopButton.addActionListener$java_awt_event_ActionListener((P$.AutoTracker$Wizard$lambda19$||(P$.AutoTracker$Wizard$lambda19$=(((P$.AutoTracker$Wizard$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(27).stopPolicy=2;
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda19.$init$,[this, null]))))));
group=Clazz.new_($I$(39,1));
group.add$javax_swing_AbstractButton(this.poorMatchButton);
group.add$javax_swing_AbstractButton(this.noMatchButton);
group.add$javax_swing_AbstractButton(this.neverStopButton);
flowpanel=Clazz.new_($I$(21,1));
flowpanel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(1, 0, 0, 0));
flowpanel.setOpaque$Z(false);
flowpanel.add$java_awt_Component(this.poorMatchButton);
flowpanel.add$java_awt_Component(this.noMatchButton);
flowpanel.add$java_awt_Component(this.neverStopButton);
this.stopToolbar.add$java_awt_Component(this.stopLabel);
this.stopToolbar.add$java_awt_Component(flowpanel);
this.targetToolbar=Clazz.new_($I$(29,1));
this.targetToolbar.setFloatable$Z(false);
this.targetToolbar.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.targetLabel=Clazz.new_($I$(30,1));
this.targetLabel.setOpaque$Z(false);
this.targetLabel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 6, 0, 6));
this.trackLabel=Clazz.new_($I$(30,1));
this.trackLabel.setOpaque$Z(false);
this.pointLabel=Clazz.new_($I$(30,1));
this.pointLabel.setOpaque$Z(false);
this.pointLabel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(0, 10, 0, 0));
this.pointDropdown=((P$.AutoTracker$Wizard$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JComboBox'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
dim.height=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].trackDropdown.getPreferredSize$().height;
return dim;
});

Clazz.newMeth(C$, 'setSelectedItem$O',  function (o) {
C$.superclazz.prototype.setSelectedItem$O.apply(this, [o]);
});
})()
), Clazz.new_($I$(23,1),[this, null],P$.AutoTracker$Wizard$12));
this.pointDropdown.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
for (var i=0; i < this.pointDropdown.getComponentCount$(); i++) {
this.pointDropdown.getComponent$I(i).addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
}
this.pointDropdown.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
if ("refresh".equals$O.apply("refresh", [this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].pointDropdown.getName$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].pointDropdown, [])])) return;
var item=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].pointDropdown.getSelectedItem$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].pointDropdown, []);
if (item != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].stop$Z$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [true, false]);
var track=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
if (track == null ) return;
track.setTargetIndex$S.apply(track, [item]);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].refreshKeyFrames$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
var searchPts=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getCurrentFrameData$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getSearchPoints$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getCurrentFrameData$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []), [true]);
if (searchPts != null ) this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].setSearchPoints$org_opensourcephysics_media_core_TPoint$org_opensourcephysics_media_core_TPoint.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [searchPts[0], searchPts[1]]);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
}});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda20.$init$,[this, null])));
this.targetPanel=Clazz.new_($I$(21,1));
this.targetPanel.setOpaque$Z(false);
this.targetPanel.add$java_awt_Component(this.trackLabel);
this.targetPanel.add$java_awt_Component(this.trackDropdown);
this.targetPanel.add$java_awt_Component(this.pointLabel);
this.targetPanel.add$java_awt_Component(this.pointDropdown);
this.targetToolbar.add$java_awt_Component(this.targetLabel);
this.targetToolbar.add$java_awt_Component(this.targetPanel);
this.textPane=Clazz.new_($I$(41,1));
this.textPane.setEditable$Z(false);
this.textPane.setLineWrap$Z(true);
this.textPane.setWrapStyleWord$Z(true);
this.textPane.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$());
this.textPane.setForeground$java_awt_Color($I$(36).blue);
this.textPane.addKeyListener$java_awt_event_KeyListener(kl);
this.textPane.addMouseListener$java_awt_event_MouseListener(this.mouseOverListener);
this.closeButton=Clazz.new_($I$(26,1));
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].stop$Z$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [true, true]);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], [false]);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda21.$init$,[this, null])));
this.closeButton.addKeyListener$java_awt_event_KeyListener(kl);
this.helpButton=Clazz.new_($I$(26,1));
this.helpButton.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.$finals$.trackerPanel.getTFrame$.apply(this.$finals$.trackerPanel, []).showHelp$S$I.apply(this.$finals$.trackerPanel.getTFrame$.apply(this.$finals$.trackerPanel, []), ["autotracker", 0]);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda22.$init$,[this, {trackerPanel:trackerPanel}])));
this.helpButton.addKeyListener$java_awt_event_KeyListener(kl);
this.acceptButton=Clazz.new_($I$(26,1));
this.acceptButton.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].acceptAction$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda23.$init$,[this, null])));
this.acceptButton.addKeyListener$java_awt_event_KeyListener(kl);
this.skipButton=Clazz.new_($I$(26,1));
this.skipButton.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].skipAction$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda24.$init$,[this, null])));
this.skipButton.addKeyListener$java_awt_event_KeyListener(kl);
this.deleteButton=Clazz.new_($I$(26,1));
this.deleteButton.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].deleteButtonAction$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda25.$init$,[this, null])));
this.deleteButton.addKeyListener$java_awt_event_KeyListener(kl);
this.keyFrameButton=Clazz.new_($I$(26,1));
this.keyFrameButton.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].keyFrameButtonAction$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda26.$init$,[this, null])));
this.keyFrameButton.addKeyListener$java_awt_event_KeyListener(kl);
this.copyDataButton=Clazz.new_($I$(26,1));
this.copyDataButton.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var matchScore=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].getMatchDataString$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
var clipboard=$I$(9).getDefaultToolkit$().getSystemClipboard$.apply($I$(9).getDefaultToolkit$(), []);
var stringSelection=Clazz.new_($I$(42,1).c$$S,[matchScore]);
clipboard.setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner.apply(clipboard, [stringSelection, stringSelection]);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda27.$init$,[this, null])));
this.copyDataButton.addKeyListener$java_awt_event_KeyListener(kl);
this.infoPanel=((P$.AutoTracker$Wizard$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JPanel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].textPaneSize != null ) return this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].textPaneSize;
return C$.superclazz.prototype.getPreferredSize$.apply(this, []);
});
})()
), Clazz.new_([this, null, Clazz.new_($I$(22,1))],$I$(21,1).c$$java_awt_LayoutManager,P$.AutoTracker$Wizard$13));
var empty=$I$(28).createEmptyBorder$I$I$I$I(4, 6, 4, 6);
var etch=$I$(28).createEtchedBorder$();
this.infoPanel.setBorder$javax_swing_border_Border($I$(28).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etch, empty));
this.infoPanel.setBackground$java_awt_Color(this.textPane.getBackground$());
this.infoPanel.add$java_awt_Component$O(this.textPane, "Center");
this.infoPanel.add$java_awt_Component$O(this.followupPanel, "South");
var controlPanel=Clazz.new_([Clazz.new_($I$(43,1).c$$I$I,[0, 1])],$I$(21,1).c$$java_awt_LayoutManager);
controlPanel.add$java_awt_Component(this.templateToolbar);
controlPanel.add$java_awt_Component(this.templateShapeToolbar);
controlPanel.add$java_awt_Component(this.searchToolbar);
controlPanel.add$java_awt_Component(this.stopToolbar);
controlPanel.add$java_awt_Component(this.targetToolbar);
this.northPanel=Clazz.new_([Clazz.new_($I$(22,1))],$I$(21,1).c$$java_awt_LayoutManager);
this.northPanel.add$java_awt_Component$O(this.startPanel, "North");
this.northPanel.add$java_awt_Component$O(this.imageToolbar, "South");
var center=Clazz.new_([Clazz.new_($I$(22,1))],$I$(21,1).c$$java_awt_LayoutManager);
center.add$java_awt_Component$O(controlPanel, "North");
center.add$java_awt_Component$O(this.infoPanel, "Center");
var south=Clazz.new_([Clazz.new_($I$(44,1))],$I$(21,1).c$$java_awt_LayoutManager);
south.add$java_awt_Component(this.helpButton);
south.add$java_awt_Component(this.keyFrameButton);
south.add$java_awt_Component(this.deleteButton);
south.add$java_awt_Component(this.copyDataButton);
south.add$java_awt_Component(this.closeButton);
contentPane.add$java_awt_Component$O(this.northPanel, "North");
contentPane.add$java_awt_Component$O(center, "Center");
contentPane.add$java_awt_Component$O(south, "South");
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].evolveAlpha=this.getAlphaFromPercent$I(20);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].tetherAlpha=this.getAlphaFromPercent$I(5);
this.myFollower=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].frame.addFollower$java_awt_Component$java_awt_Point(this, null);
});

Clazz.newMeth(C$, 'refreshNow$',  function () {
this.refreshInfo$();
this.refreshDrawingFlags$();
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].erase$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
$I$(38,"repaintT$java_awt_Component",[p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [])]);
});

Clazz.newMeth(C$, 'acceptAction$',  function () {
var n=p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getFrameNumber$();
var frameData=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getOrCreateFrameData$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [n]);
var matcher=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTemplateMatcher$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
matcher.setTemplate$java_awt_image_BufferedImage(frameData.getTemplateImage$());
matcher.setWorkingPixels$IA(frameData.getWorkingPixels$());
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].buildEvolvedTemplateImage$org_opensourcephysics_cabrillo_tracker_AutoTracker_FrameData.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [frameData]);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].marking=true;
var p=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getMatchTarget$org_opensourcephysics_media_core_TPoint.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [frameData.getMatchPoints$()[0]]);
var track=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
var target=track.autoMarkAt$I$D$D(n, p.x, p.y);
frameData.setAutoMarkPoint$org_opensourcephysics_media_core_TPoint(target);
frameData.decided=true;
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].stepping && this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].canStep$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []) ) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].paused=false;
p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getPlayer$().step$();
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].stop$Z$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [true, true]);
}});

Clazz.newMeth(C$, 'skipAction$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getCurrentFrameData$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).decided=true;
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].canStep$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [])) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].paused=false;
p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getPlayer$().step$();
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].stop$Z$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [true, false]);
}});

Clazz.newMeth(C$, 'startAction$java_awt_event_ActionEvent$java_awt_event_ActionListener',  function (e, searchAction) {
searchAction.actionPerformed$java_awt_event_ActionEvent(e);
});

Clazz.newMeth(C$, 'deleteLaterAction$',  function () {
var n=Integer.valueOf$I(p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getFrameNumber$());
var map=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getFrameNumberToFrameDataMap$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
var iter=map.entrySet$().iterator$();
while (iter.hasNext$()){
var e=iter.next$();
if (e.getKey$().compareTo$Integer(n) == 1) {
e.getValue$().clear$();
iter.remove$();
}}
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].refreshKeyFrames$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
var track=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
var isAlwaysMarked=(track.steps.isAutofill$() || track.ttype == 2 );
if (!isAlwaysMarked) {
var steps=track.getSteps$();
for (var i=((n).$c() + 1)|0; i < steps.length; i++) {
steps[i]=null;
}
}this.refreshGUI$();
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
track.invalidateData$O(track);
track.fireStepsChanged$();
});

Clazz.newMeth(C$, 'deleteThisAction$',  function () {
var n=p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getFrameNumber$();
var map=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getFrameNumberToFrameDataMap$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
var frameData=map.get$O(Integer.valueOf$I(n));
if (!frameData.isKeyFrameData$()) {
map.remove$O(Integer.valueOf$I(n));
}frameData.clear$();
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].refreshKeyFrames$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
var track=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
var isAlwaysMarked=track.steps.isAutofill$() || track.ttype == 2 ;
if (!isAlwaysMarked && track.getSteps$().length > n ) track.getSteps$()[n]=null;
this.refreshGUI$();
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
track.invalidateData$O(track);
track.fireStepsChanged$();
});

Clazz.newMeth(C$, 'deleteButtonAction$',  function () {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
var isAlwaysMarked=(track.steps.isAutofill$() || track.ttype == 2 );
var hasThis=false;
var n=p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getFrameNumber$();
var isKeyFrame=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getOrCreateFrameData$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [n]).isKeyFrameData$();
var stepCount=0;
var hasLater=false;
if (isAlwaysMarked) {
var map=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getFrameNumberToFrameDataMap$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
for (var e, $e = map.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var frameData=e.getValue$();
if (frameData.trackPoint == null ) continue;
var i=e.getKey$().intValue$();
hasLater=(hasLater || i > n );
hasThis=(hasThis || i == n );
++stepCount;
}
} else {
hasThis=track.getStep$I(n) != null ;
var steps=track.getSteps$();
for (var i=0; i < steps.length; i++) {
if (steps[i] != null ) {
hasLater=hasLater || i > n ;
++stepCount;
}}
}var popup=Clazz.new_($I$(45,1));
if (isKeyFrame) {
var item=Clazz.new_([$I$(15).getString$S("AutoTracker.Wizard.Menuitem.DeleteThisKeyFrame")],$I$(46,1).c$$S);
popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].deleteKeyFrameAction$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda28.$init$,[this, null])));
}if (hasThis && !isKeyFrame ) {
var item=Clazz.new_([isAlwaysMarked ? $I$(15).getString$S("AutoTracker.Wizard.Menuitem.DeleteThisMatch") : $I$(15).getString$S("AutoTracker.Wizard.Menuitem.DeleteThis")],$I$(46,1).c$$S);
popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].deleteThisAction$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda29.$init$,[this, null])));
}if (hasLater) {
var item=Clazz.new_([isAlwaysMarked ? $I$(15).getString$S("AutoTracker.Wizard.Menuitem.DeleteLaterMatches") : $I$(15).getString$S("AutoTracker.Wizard.Menuitem.DeleteLater")],$I$(46,1).c$$S);
popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].deleteLaterAction$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda30.$init$,[this, null])));
}if (stepCount > 0 && !(stepCount == 1 && hasThis ) ) {
var item=Clazz.new_([$I$(15).getString$S("AutoTracker.Wizard.Menuitem.DeleteAll")],$I$(46,1).c$$S);
popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.AutoTracker$Wizard$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].reset$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda31.$init$,[this, null])));
}$I$(10,"setFonts$O$I",[popup, $I$(10).getLevel$()]);
popup.show$java_awt_Component$I$I(this.deleteButton, 0, this.deleteButton.getHeight$());
});

Clazz.newMeth(C$, 'keyFrameButtonAction$',  function () {
var popup=Clazz.new_($I$(45,1));
for (var next, $next = this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].keyFrames.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var si=String.valueOf$I(next.getFrameNumber$());
var s=$I$(15).getString$S("AutoTracker.Label.Frame");
var item=Clazz.new_($I$(46,1).c$$S,[s + " " + si ]);
item.addActionListener$java_awt_event_ActionListener(this.keyAction);
item.setActionCommand$S(si);
popup.add$javax_swing_JMenuItem(item);
}
$I$(10,"setFonts$O$I",[popup, $I$(10).getLevel$()]);
popup.show$java_awt_Component$I$I(this.keyFrameButton, 0, this.keyFrameButton.getHeight$());
});

Clazz.newMeth(C$, 'deleteKeyFrameAction$',  function () {
var n=p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getFrameNumber$();
var keyFrameData=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getOrCreateFrameData$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [n]).getKeyFrameData$();
var map=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getFrameNumberToFrameDataMap$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
var nextKey=null;
for (var e, $e = map.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var frameData=e.getValue$();
var i=e.getKey$();
if (frameData.isKeyFrameData$()) {
if (frameData === keyFrameData ) {
for (var e2, $e2 = map.entrySet$().iterator$(); $e2.hasNext$()&&((e2=($e2.next$())),1);) {
var j=e2.getKey$();
if (j.compareTo$Integer(i) > 0) {
var next=e2.getValue$();
if (next.isKeyFrameData$()) {
nextKey=j;
break;
}}}
break;
}}}
map.put$O$O(Integer.valueOf$I(n), Clazz.new_($I$(47,1).c$$org_opensourcephysics_cabrillo_tracker_AutoTracker_KeyFrameData,[this, null, keyFrameData]));
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].refreshKeyFrames$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
keyFrameData=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getOrCreateFrameData$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [n]).getKeyFrameData$();
if (keyFrameData != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCenter.setLocation$java_awt_geom_Point2D(keyFrameData.getMaskPoints$()[0]);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskCorner.setLocation$java_awt_geom_Point2D(keyFrameData.getMaskPoints$()[1]);
} else {
var iter=map.entrySet$().iterator$();
while (iter.hasNext$()){
var e=iter.next$();
if (nextKey != null  && e.getKey$().compareTo$Integer(nextKey) >= 0 ) break;
e.getValue$().clear$();
iter.remove$();
}
}var track=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
if (track.getStep$I(n) == null ) {
var frameData=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getOrCreateFrameData$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [n]);
if (frameData != null ) {
frameData.setTemplateIcon$javax_swing_Icon(null);
frameData.setSearchPoints$org_opensourcephysics_media_core_TPointA(null);
}for (var e, $e = map.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var i=e.getKey$();
var iv=i.intValue$();
if (iv <= n) continue;
frameData=map.get$O(i);
if (!frameData.isKeyFrameData$() && track.getStep$I(iv) == null  ) frameData.clear$();
}
}this.refreshGUI$();
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].repaint$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
$I$(38,"repaintT$java_awt_Component",[p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [])]);
});

Clazz.newMeth(C$, 'refreshTextPaneSize$',  function () {
this.clearTextPaneSize$();
this.followupPanel.removeAll$();
this.followupPanel.add$java_awt_Component(this.acceptButton);
this.textPane.setText$S(this.getTemplateInstructions$());
var dim=this.infoPanel.getPreferredSize$();
this.textPane.setText$S(this.getTargetInstructions$());
dim.height=Math.max(dim.height, this.infoPanel.getPreferredSize$().height);
this.textPane.setText$S(this.getSearchInstructions$());
dim.height=Math.max(dim.height, this.infoPanel.getPreferredSize$().height);
this.textPaneSize=dim;
this.refreshButtons$();
this.refreshInfo$();
});

Clazz.newMeth(C$, 'refreshStrings$',  function () {
$I$(8,"invokeLater$Runnable",[((P$.AutoTracker$Wizard$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].refreshStringsAsync$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda32.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'refreshStringsAsync$',  function () {
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].panelID == null ) return;
var n=p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getFrameNumber$();
var frameData=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getOrCreateFrameData$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [n]);
var keyFrameData=frameData.getKeyFrameData$();
var track=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
var initialized=(keyFrameData != null  && track != null  );
var title=$I$(15).getString$S("AutoTracker.Wizard.Title");
if (track != null ) {
var index=track.getTargetIndex$();
title+=": " + track.getName$() + " " + track.getTargetDescription$I(index) ;
}this.setTitle$S(title);
this.frameLabel.setText$S($I$(15).getString$S("AutoTracker.Label.Frame") + " " + n + ":" );
this.searchLabel.setText$S($I$(15).getString$S("AutoTracker.Label.Search") + ":");
this.stopLabel.setText$S($I$(15).getString$S("AutoTracker.Label.Autostop") + ":");
this.targetLabel.setText$S($I$(15).getString$S("AutoTracker.Label.Target") + ":");
this.templateLabel.setText$S($I$(15).getString$S("AutoTracker.Label.Template") + ":");
this.acceptLabel.setText$S($I$(15).getString$S("AutoTracker.Label.Automark"));
this.acceptLabel.setToolTipText$S($I$(15).getString$S("AutoTracker.Label.Automark.Tooltip"));
this.acceptSpinner.setToolTipText$S($I$(15).getString$S("AutoTracker.Label.Automark.Tooltip"));
this.trackLabel.setText$S($I$(15).getString$S("AutoTracker.Label.Track"));
this.pointLabel.setText$S($I$(15).getString$S("AutoTracker.Label.Point"));
this.evolveLabel.setText$S($I$(15).getString$S("AutoTracker.Label.EvolutionRate"));
this.evolveLabel.setToolTipText$S($I$(15).getString$S("AutoTracker.Label.EvolutionRate.Tooltip"));
this.evolveSpinner.setToolTipText$S($I$(15).getString$S("AutoTracker.Label.EvolutionRate.Tooltip"));
this.tetherLabel.setText$S($I$(15).getString$S("AutoTracker.Label.Tether"));
this.tetherLabel.setToolTipText$S($I$(15).getString$S("AutoTracker.Label.Tether.Tooltip"));
this.tetherSpinner.setToolTipText$S($I$(15).getString$S("AutoTracker.Label.Tether.Tooltip"));
this.widthLabel.setText$S($I$(15).getString$S("AutoTracker.Label.Width"));
this.widthLabel.setToolTipText$S($I$(15).getString$S("AutoTracker.Label.Width.Tooltip"));
this.heightLabel.setText$S($I$(15).getString$S("AutoTracker.Label.Height"));
this.heightLabel.setToolTipText$S($I$(15).getString$S("AutoTracker.Label.Height.Tooltip"));
this.templateShapeLabel.setText$S($I$(15).getString$S("AutoTracker.Label.Shape") + ":");
this.ellipseButton.setToolTipText$S($I$(15).getString$S("AutoTracker.Label.Ellipse.Tooltip"));
this.ellipseLabel.setToolTipText$S($I$(15).getString$S("AutoTracker.Label.Ellipse.Tooltip"));
this.rectButton.setToolTipText$S($I$(15).getString$S("AutoTracker.Label.Rectangle.Tooltip"));
this.rectLabel.setToolTipText$S($I$(15).getString$S("AutoTracker.Label.Rectangle.Tooltip"));
this.closeButton.setText$S($I$(15).getString$S("Dialog.Button.Close"));
this.helpButton.setText$S($I$(15).getString$S("Dialog.Button.Help"));
this.copyDataButton.setText$S($I$(15).getString$S("AutoTracker.Wizard.Menuitem.CopyMatchScores"));
this.copyDataButton.setToolTipText$S($I$(15).getString$S("AutoTracker.Wizard.MenuItem.CopyMatchScores.Tooltip"));
this.copyDataButton.setEnabled$Z(initialized);
this.acceptButton.setText$S($I$(15).getString$S("AutoTracker.Wizard.Button.Accept"));
this.keyFrameButton.setText$S($I$(15).getString$S("AutoTracker.Wizard.Button.ShowKeyFrame"));
this.deleteButton.setText$S($I$(15).getString$S("AutoTracker.Wizard.Button.Delete"));
this.oneDCheckbox.setText$S($I$(15).getString$S("AutoTracker.Wizard.Checkbox.XAxis"));
this.oneDCheckbox.setToolTipText$S($I$(15).getString$S("AutoTracker.Wizard.Checkbox.XAxis.Tooltip"));
this.fastCheckbox.setText$S($I$(15).getString$S("AutoTracker.Wizard.Checkbox.Fast"));
this.fastCheckbox.setToolTipText$S($I$(15).getString$S("AutoTracker.Wizard.Checkbox.Fast.Tooltip"));
this.lookAheadButton.setText$S($I$(15).getString$S("AutoTracker.RadioButton.LookAhead"));
this.lookAheadButton.setToolTipText$S($I$(15).getString$S("AutoTracker.Wizard.Checkbox.LookAhead.Tooltip"));
this.followButton.setText$S($I$(15).getString$S("AutoTracker.RadioButton.Follow"));
this.followButton.setToolTipText$S($I$(15).getString$S("AutoTracker.RadioButton.Follow.Tooltip"));
this.fixedButton.setText$S($I$(15).getString$S("AutoTracker.RadioButton.Fixed"));
this.fixedButton.setToolTipText$S($I$(15).getString$S("AutoTracker.RadioButton.Fixed.Tooltip"));
this.poorMatchButton.setText$S($I$(15).getString$S("AutoTracker.RadioButton.PoorMatch"));
this.poorMatchButton.setToolTipText$S($I$(15).getString$S("AutoTracker.RadioButton.PoorMatch.Tooltip"));
this.noMatchButton.setText$S($I$(15).getString$S("AutoTracker.RadioButton.NoMatch"));
this.noMatchButton.setToolTipText$S($I$(15).getString$S("AutoTracker.RadioButton.NoMatch.Tooltip"));
this.neverStopButton.setText$S($I$(15).getString$S("AutoTracker.RadioButton.NeverStop"));
this.neverStopButton.setToolTipText$S($I$(15).getString$S("AutoTracker.RadioButton.NeverStop.Tooltip"));
this.matchImageLabel.setText$S(frameData.getMatchIcon$() == null  ? null : $I$(15).getString$S("AutoTracker.Label.Match"));
this.templateImageLabel.setText$S(keyFrameData == null  ? null : $I$(15).getString$S("AutoTracker.Label.Template"));
this.evolvedImageLabel.setText$S(frameData.getEvolvedIcon$() == null  ? null : "=");
this.keyImageLabel.setText$S(frameData.getEvolvedIcon$() == null  ? null : $I$(15).getString$S("AutoTracker.Label.KeyFrame"));
var running=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].stepping && !this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].paused ;
this.startButton.setIcon$javax_swing_Icon(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].stepping ? $I$(27).stopIcon : $I$(27).searchIcon);
this.startButton.setText$S(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].stepping ? $I$(15).getString$S("AutoTracker.Wizard.Button.Stop") : $I$(15).getString$S("AutoTracker.Wizard.Button.Search"));
this.startButton.setToolTipText$S($I$(15).getString$S("AutoTracker.Wizard.Button.Search.Tooltip"));
$I$(10).setFont$javax_swing_AbstractButton(this.startButton);
var back=this.searchThisButton.getName$() != null ;
this.searchThisButton.setText$S(back ? $I$(15).getString$S("AutoTracker.Wizard.Button.StepBack") : $I$(15).getString$S("AutoTracker.Wizard.Button.SearchThis"));
this.searchThisButton.setEnabled$Z(this.searchThisButton.isEnabled$() && !running );
this.searchThisButton.setToolTipText$S(back ? $I$(15).getString$S("VideoPlayer.Back.Hint") : $I$(15).getString$S("AutoTracker.Wizard.Button.SearchThis.Tooltip"));
this.searchNextButton.setText$S($I$(15).getString$S("AutoTracker.Wizard.Button.SearchNext"));
this.searchNextButton.setToolTipText$S($I$(15).getString$S("AutoTracker.Wizard.Button.SearchNext.Tooltip"));
var frc=$I$(7).frc;
var font=this.frameLabel.getFont$();
var w=0;
var rect=font.getStringBounds$S$java_awt_font_FontRenderContext(this.searchLabel.getText$() + "   ", frc);
w=Math.max(w, (rect.getWidth$()|0) + 4);
rect=font.getStringBounds$S$java_awt_font_FontRenderContext(this.frameLabel.getText$() + "   ", frc);
w=Math.max(w, (rect.getWidth$()|0) + 4);
rect=font.getStringBounds$S$java_awt_font_FontRenderContext(this.templateLabel.getText$() + "   ", frc);
w=Math.max(w, (rect.getWidth$()|0) + 4);
rect=font.getStringBounds$S$java_awt_font_FontRenderContext(this.targetLabel.getText$() + "   ", frc);
w=Math.max(w, (rect.getWidth$()|0) + 4);
var labelSize=Clazz.new_($I$(48,1).c$$I$I,[w, 20]);
this.frameLabel.setPreferredSize$java_awt_Dimension(labelSize);
this.templateLabel.setPreferredSize$java_awt_Dimension(labelSize);
this.searchLabel.setPreferredSize$java_awt_Dimension(labelSize);
this.targetLabel.setPreferredSize$java_awt_Dimension(labelSize);
});

Clazz.newMeth(C$, 'refreshButtons$',  function () {
$I$(8,"invokeLater$Runnable",[((P$.AutoTracker$Wizard$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].refreshButtonsAsync$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda33.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'refreshButtonsAsync$',  function () {
var n=p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getFrameNumber$();
var frameData=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getOrCreateFrameData$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [n]);
var track=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
var code=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getStatusCode$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [n]);
var keyFrameData=frameData.getKeyFrameData$();
var initialized=(keyFrameData != null  && track != null  );
var notStepping=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].paused || !this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].stepping ;
var stable=frameData.searched && !frameData.newTemplateExists$() ;
var canSearchThis=!stable || code == 5  || (this.changed && code != 0 )  || (frameData === keyFrameData  && frameData.getMarkedPoint$() == null  ) ;
var lastStep=n == p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getPlayer$().getVideoClip$().getLastFrameNumber$();
this.startButton.setEnabled$Z(initialized && !lastStep );
this.searchThisButton.setName$S(initialized && notStepping && canSearchThis   ? null : "back");
this.searchThisButton.setEnabled$Z(p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getStepNumber$() > 0);
this.searchNextButton.setEnabled$Z(initialized && this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].canStep$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []) && notStepping && !lastStep  );
var isKeyFrame=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].isOnKeyFrame$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [n]) || !initialized ;
this.ellipseButton.setEnabled$Z(isKeyFrame);
this.ellipseLabel.setEnabled$Z(isKeyFrame);
this.rectButton.setEnabled$Z(isKeyFrame);
this.rectLabel.setEnabled$Z(isKeyFrame);
if (keyFrameData != null ) {
if (Clazz.instanceOf(keyFrameData.getMask$(), "java.awt.geom.Ellipse2D.Double")) this.ellipseButton.setSelected$Z(true);
 else this.rectButton.setSelected$Z(true);
}this.widthSpinner.setEnabled$Z(isKeyFrame);
this.widthLabel.setEnabled$Z(isKeyFrame);
this.heightSpinner.setEnabled$Z(isKeyFrame);
this.heightLabel.setEnabled$Z(isKeyFrame);
if (this.templateImageLabel.getIcon$() == null  && this.matchImageLabel.getIcon$() == null  ) {
this.templateImageLabel.setText$S($I$(15).getString$S("AutoTracker.Label.NoTemplate"));
this.matchImageLabel.setText$S(null);
this.imageToolbar.setPreferredSize$java_awt_Dimension(this.templateToolbar.getPreferredSize$());
this.templateImageLabel.setBorder$javax_swing_border_Border($I$(28).createEmptyBorder$I$I$I$I(3, 0, 0, 0));
} else {
this.imageToolbar.setPreferredSize$java_awt_Dimension(null);
this.templateImageLabel.setBorder$javax_swing_border_Border(null);
}var deleteButtonEnabled=(track != null );
if (track != null ) {
var isAlwaysMarked=track.steps.isAutofill$() || track.ttype == 2 ;
if (isAlwaysMarked) {
var hasFrameData=false;
var map=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getFrameNumberToFrameDataMap$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
for (var i, $i = map.keySet$().iterator$(); $i.hasNext$()&&((i=($i.next$())),1);) {
var next=map.get$O(i);
if (next.trackPoint != null ) {
hasFrameData=true;
break;
}}
deleteButtonEnabled=(hasFrameData || frameData === keyFrameData  );
} else {
deleteButtonEnabled=(frameData === keyFrameData  || !track.isEmpty$() );
}}this.deleteButton.setEnabled$Z(deleteButtonEnabled);
this.keyFrameButton.setEnabled$Z(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].keyFrames.size$() > 0);
this.followupPanel.removeAll$();
if (code == 2 || code == 8 ) {
this.acceptButton.setText$S($I$(15).getString$S("AutoTracker.Wizard.Button.Accept"));
this.followupPanel.add$java_awt_Component(this.acceptButton);
}if (code == 2 || code == 3  || code == 4  || code == 8  || code == 9 ) {
this.skipButton.setText$S($I$(15).getString$S("AutoTracker.Wizard.Button.Skip"));
this.followupPanel.add$java_awt_Component(this.skipButton);
}this.repaint$();
});

Clazz.newMeth(C$, 'refreshDrawingFlags$',  function () {
if (this.mouseOverObj === this.templateToolbar  || this.mouseOverObj === this.templateShapeToolbar   || this.mouseOverObj === this.imageToolbar  ) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskVisible=true;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].targetVisible=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].searchVisible=false;
} else if (this.mouseOverObj === this.targetToolbar ) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].targetVisible=true;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].searchVisible=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskVisible=false;
} else if (this.mouseOverObj === this.searchToolbar  || this.mouseOverObj === this.stopToolbar  ) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].searchVisible=true;
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].targetVisible=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskVisible=false;
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].searchVisible=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].targetVisible=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].maskVisible=true;
}});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
if (track != null  && this.isVisible$() ) track.setMarkByDefault$Z(false);
$I$(8,"invokeLater$Runnable",[((P$.AutoTracker$Wizard$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].refreshGUIAsync$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda34.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'refreshGUIAsync$',  function () {
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].panelID == null ) return;
this.refreshDropdowns$();
this.refreshButtons$();
this.refreshStrings$();
this.refreshIcons$();
this.refreshInfo$();
this.refreshDrawingFlags$();
this.pack$();
if (this.textPaneSize == null ) {
this.refreshTextPaneSize$();
this.pack$();
}});

Clazz.newMeth(C$, 'refreshDropdowns$',  function () {
var toSelect=null;
this.trackDropdown.setName$S("refresh");
this.trackDropdown.removeAllItems$();
var track=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
for (var next, $next = p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getTracksTemp$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (!next.isAutoTrackable$()) continue;
var icon=next.getFootprint$().getIcon$I$I(21, 16);
var item=Clazz.array(java.lang.Object, -1, [icon, next.getName$()]);
this.trackDropdown.addItem$O(item);
if (next === track ) {
toSelect=item;
}}
p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).clearTemp$();
if (track == null ) {
var emptyItem=Clazz.array(java.lang.Object, -1, [null, "           "]);
this.trackDropdown.insertItemAt$O$I(emptyItem, 0);
toSelect=emptyItem;
}if (toSelect != null ) {
this.trackDropdown.setSelectedItem$O(toSelect);
}this.trackDropdown.setName$S(null);
toSelect=null;
this.pointDropdown.setName$S("refresh");
this.pointDropdown.removeAllItems$();
if (track != null ) {
var target=track.getTargetIndex$();
toSelect=track.getTargetDescription$I(target);
for (var i=0; i < track.getStepLength$(); i++) {
var s=track.getTargetDescription$I(i);
if (track.isAutoTrackable$I(i) && s != null  ) {
this.pointDropdown.addItem$O(s);
}}
} else {
this.pointDropdown.addItem$O("         ");
}if (toSelect != null ) {
this.pointDropdown.setSelectedItem$O(toSelect);
}this.pointDropdown.setName$S("");
$I$(8,"invokeLater$Runnable",[((P$.AutoTracker$Wizard$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].startButton.requestFocusInWindow$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].startButton, []);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda35.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'refreshIcons$',  function () {
if (this.refreshPosted) return;
this.refreshPosted=true;
$I$(8,"invokeLater$Runnable",[((P$.AutoTracker$Wizard$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].refreshIconsPosted$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'], []);
});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda36.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'refreshIconsPosted$',  function () {
this.refreshPosted=false;
var track=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTemplateMatcher$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []) == null  || track == null  ) {
this.templateImageLabel.setIcon$javax_swing_Icon(null);
this.matchImageLabel.setIcon$javax_swing_Icon(null);
this.evolvedImageLabel.setIcon$javax_swing_Icon(null);
return;
}var n=p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getFrameNumber$();
var frameData=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getOrCreateFrameData$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [n]);
this.matchImageLabel.setIcon$javax_swing_Icon(frameData.getMatchIcon$());
var icon=frameData.getTemplateIcon$();
if (icon == null ) {
frameData.getTemplateToMatch$();
icon=frameData.getTemplateIcon$();
}this.templateImageLabel.setIcon$javax_swing_Icon(icon);
icon=frameData.getEvolvedIcon$();
this.evolvedImageLabel.setIcon$javax_swing_Icon(icon);
this.keyImageLabel.setIcon$javax_swing_Icon(icon == null  ? null : frameData.getKeyFrameData$().getTemplateIcon$());
this.keyImageLabel.setText$S(icon == null  ? null : $I$(15).getString$S("AutoTracker.Label.KeyFrame"));
});

Clazz.newMeth(C$, 'replaceIcons$org_opensourcephysics_cabrillo_tracker_AutoTracker_KeyFrameData',  function (keyFrame) {
$I$(8,"invokeLater$Runnable",[((P$.AutoTracker$Wizard$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "AutoTracker$Wizard$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
var track=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getVideo$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []) == null  || track == null  ) {
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].templateImageLabel.setIcon$javax_swing_Icon.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].templateImageLabel, [null]);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].matchImageLabel.setIcon$javax_swing_Icon.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].matchImageLabel, [null]);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].evolvedImageLabel.setIcon$javax_swing_Icon.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].evolvedImageLabel, [null]);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].keyImageLabel.setIcon$javax_swing_Icon.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].keyImageLabel, [null]);
return;
}this.$finals$.keyFrame.setTemplateMatcher$org_opensourcephysics_media_core_TemplateMatcher.apply(this.$finals$.keyFrame, [null]);
var matcher=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTemplateMatcher$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
if (matcher != null ) {
this.$finals$.keyFrame.setTemplate$org_opensourcephysics_media_core_TemplateMatcher.apply(this.$finals$.keyFrame, [matcher]);
var icon=this.$finals$.keyFrame.getTemplateIcon$.apply(this.$finals$.keyFrame, []);
this.$finals$.keyFrame.setMatchIcon$javax_swing_Icon.apply(this.$finals$.keyFrame, [icon]);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].matchImageLabel.setIcon$javax_swing_Icon.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].matchImageLabel, [icon]);
this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].templateImageLabel.setIcon$javax_swing_Icon.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker.Wizard'].templateImageLabel, [icon]);
this.b$['java.awt.Window'].pack$.apply(this.b$['java.awt.Window'], []);
}});
})()
), Clazz.new_(P$.AutoTracker$Wizard$lambda37.$init$,[this, {keyFrame:keyFrame}]))]);
});

Clazz.newMeth(C$, 'refreshInfo$',  function () {
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getVideo$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []) == null ) {
this.textPane.setForeground$java_awt_Color($I$(36).red);
this.textPane.setText$S($I$(15).getString$S("AutoTracker.Info.NoVideo"));
return;
}this.textPane.setForeground$java_awt_Color($I$(36).blue);
var track=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
if (track == null ) {
this.textPane.setText$S($I$(15).getString$S("AutoTracker.Info.SelectTrack"));
return;
}var n=p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getFrameNumber$();
var frameData=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getOrCreateFrameData$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [n]);
var keyFrameData=frameData.getKeyFrameData$();
if (keyFrameData == null ) {
var s=$I$(15).getString$S("AutoTracker.Info.GetStarted") + " " + $I$(15).getString$S("AutoTracker.Info.MouseOver.Instructions") ;
this.textPane.setText$S(s);
if (this.mouseOverObj == null ) return;
}this.textPane.setForeground$java_awt_Color($I$(36).DARK_GRAY);
if (this.mouseOverObj === this.templateToolbar  || this.mouseOverObj === this.templateShapeToolbar   || this.mouseOverObj === this.imageToolbar  ) {
this.textPane.setText$S(this.getTemplateInstructions$());
return;
}if (this.mouseOverObj === this.targetToolbar ) {
this.textPane.setText$S(this.getTargetInstructions$());
return;
}if (this.mouseOverObj === this.searchToolbar ) {
this.textPane.setText$S(this.getSearchInstructions$());
return;
}if (this.mouseOverObj === this.stopToolbar ) {
this.textPane.setText$S(this.getStopInstructions$());
return;
}this.textPane.setForeground$java_awt_Color($I$(36).blue);
var code=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getStatusCode$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [n]);
var peakWidthAndHeight=frameData.getMatchWidthAndHeight$();
this.textPane.setText$S(this.getStatusInfo$I$I$DA(code, n, peakWidthAndHeight));
});

Clazz.newMeth(C$, 'getTemplateInstructions$',  function () {
var buf=Clazz.new_($I$(49,1));
buf.append$S($I$(15).getString$S("AutoTracker.Info.Template"));
buf.append$S(" ");
buf.append$S($I$(15).getString$S("AutoTracker.Info.GetStarted"));
buf.append$S("\n\n");
buf.append$S($I$(15).getString$S("AutoTracker.Info.Title.Settings"));
buf.append$S(": ");
buf.append$S($I$(15).getString$S("AutoTracker.Info.Template.Instructions1"));
buf.append$S(" ");
buf.append$S($I$(15).getString$S("AutoTracker.Info.Template.Instructions2"));
buf.append$S("\n\n");
buf.append$S($I$(15).getString$S("AutoTracker.Info.Title.Tip"));
buf.append$S(": ");
buf.append$S($I$(15).getString$S("AutoTracker.Info.Mask.Tip"));
return buf.toString();
});

Clazz.newMeth(C$, 'getSearchInstructions$',  function () {
var buf=Clazz.new_($I$(49,1));
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].lineSpread >= 0) buf.append$S($I$(15).getString$S("AutoTracker.Info.SearchOnAxis"));
 else buf.append$S($I$(15).getString$S("AutoTracker.Info.Search"));
buf.append$S("\n\n");
buf.append$S($I$(15).getString$S("AutoTracker.Info.Title.Speed"));
buf.append$S(": ");
buf.append$S($I$(15).getString$S("AutoTracker.Info.Search.Speed"));
buf.append$S("\n\n");
buf.append$S($I$(15).getString$S("AutoTracker.Info.Title.Settings"));
buf.append$S(": ");
buf.append$S($I$(15).getString$S("AutoTracker.Info.Search.Instructions"));
buf.append$S("\n\n");
buf.append$S($I$(15).getString$S("AutoTracker.Info.Title.Tip"));
buf.append$S(": ");
buf.append$S($I$(15).getString$S("AutoTracker.Info.Search.Tip"));
return buf.toString();
});

Clazz.newMeth(C$, 'getTargetInstructions$',  function () {
var buf=Clazz.new_($I$(49,1));
buf.append$S($I$(15).getString$S("AutoTracker.Info.Target"));
buf.append$S("\n\n");
buf.append$S($I$(15).getString$S("AutoTracker.Info.Title.Settings"));
buf.append$S(": ");
buf.append$S($I$(15).getString$S("AutoTracker.Info.Target.Instructions"));
return buf.toString();
});

Clazz.newMeth(C$, 'getStopInstructions$',  function () {
var buf=Clazz.new_($I$(49,1));
buf.append$S($I$(15).getString$S("AutoTracker.Info.Stop"));
buf.append$S("\n\n");
buf.append$S($I$(15).getString$S("AutoTracker.Info.Title.Settings"));
buf.append$S(": ");
buf.append$S($I$(15).getString$S("AutoTracker.Info.Stop.Instructions"));
return buf.toString();
});

Clazz.newMeth(C$, 'getStatusInfo$I$I$DA',  function (code, n, peakWidthAndHeight) {
var buf=Clazz.new_($I$(49,1));
buf.append$S($I$(15).getString$S("AutoTracker.Info.Frame") + " " + n );
switch (code) {
case 0:
this.textPane.setForeground$java_awt_Color($I$(36).blue);
buf.append$S(" (");
buf.append$S($I$(15).getString$S("AutoTracker.Info.KeyFrame").toLowerCase$());
buf.append$S("): ");
buf.append$S($I$(15).getString$S("AutoTracker.Info.KeyFrame.Instructions1"));
buf.append$S("\n\n");
buf.append$S($I$(15).getString$S("AutoTracker.Info.KeyFrame.Instructions2"));
buf.append$S(" ");
buf.append$S($I$(15).getString$S("AutoTracker.Info.MouseOver.Instructions"));
break;
case 1:
this.textPane.setForeground$java_awt_Color($I$(36).green.darker$());
buf.append$S(" (" + $I$(15).getString$S("AutoTracker.Info.MatchScore"));
buf.append$S(" " + $I$(27).format.format$D(peakWidthAndHeight[1]) + "): " );
buf.append$S($I$(15).getString$S("AutoTracker.Info.Match"));
break;
case 2:
this.textPane.setForeground$java_awt_Color($I$(27).RUST);
buf.append$S(" (" + $I$(15).getString$S("AutoTracker.Info.MatchScore"));
buf.append$S(" " + $I$(27).format.format$D(peakWidthAndHeight[1]) + "): " );
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].lineSpread >= 0) {
buf.append$S($I$(15).getString$S("AutoTracker.Info.PossibleOnAxis") + "\n");
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.Accept"));
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.RetryOnAxis"));
} else {
buf.append$S($I$(15).getString$S("AutoTracker.Info.Possible") + "\n");
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.Accept"));
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.Retry"));
}buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.Mark"));
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.NewKeyFrame"));
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].canStep$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [])) buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.Skip"));
break;
case 3:
this.textPane.setForeground$java_awt_Color($I$(36).red);
buf.append$S(": ");
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].lineSpread >= 0) {
buf.append$S($I$(15).getString$S("AutoTracker.Info.NoMatchOnAxis") + "\n");
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.RetryOnAxis"));
} else {
buf.append$S($I$(15).getString$S("AutoTracker.Info.NoMatch") + "\n");
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.Retry"));
}buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.Mark"));
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.NewKeyFrame"));
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].canStep$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [])) buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.Skip"));
break;
case 4:
this.textPane.setForeground$java_awt_Color($I$(36).red);
buf.append$S(": ");
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].lineSpread >= 0) {
buf.append$S($I$(15).getString$S("AutoTracker.Info.OutsideXAxis") + "\n");
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.RetryOnAxis"));
} else {
buf.append$S($I$(15).getString$S("AutoTracker.Info.Outside") + "\n");
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.Retry"));
}buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.Mark"));
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].canStep$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [])) buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.Skip"));
break;
case 5:
this.textPane.setForeground$java_awt_Color($I$(36).blue);
buf.append$S(": ");
buf.append$S($I$(15).getString$S("AutoTracker.Info.MarkedByUser"));
break;
case 6:
this.textPane.setForeground$java_awt_Color($I$(36).green.darker$());
buf.append$S(" (" + $I$(15).getString$S("AutoTracker.Info.MatchScore"));
buf.append$S(" " + $I$(27).format.format$D(peakWidthAndHeight[1]) + "): " );
buf.append$S($I$(15).getString$S("AutoTracker.Info.Accepted"));
break;
case 7:
this.textPane.setForeground$java_awt_Color($I$(36).blue);
buf.append$S(" (");
buf.append$S($I$(15).getString$S("AutoTracker.Info.Unsearched"));
buf.append$S("): ");
buf.append$S($I$(15).getString$S("AutoTracker.Info.Instructions"));
buf.append$S(" ");
buf.append$S($I$(15).getString$S("AutoTracker.Info.GetStarted"));
buf.append$S("\n\n");
buf.append$S($I$(15).getString$S("AutoTracker.Info.MouseOver.Instructions"));
break;
case 8:
this.textPane.setForeground$java_awt_Color($I$(36).blue);
buf.append$S(" (" + $I$(15).getString$S("AutoTracker.Info.MatchScore"));
buf.append$S(" " + $I$(27).format.format$D(peakWidthAndHeight[1]) + "): " );
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].lineSpread >= 0) {
buf.append$S($I$(15).getString$S("AutoTracker.Info.PossibleReplace") + "\n");
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.Replace"));
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.Keep"));
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.RetryOnAxis"));
} else {
buf.append$S($I$(15).getString$S("AutoTracker.Info.PossibleReplace") + "\n");
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.Replace"));
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.Keep"));
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.Retry"));
}buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.NewKeyFrame"));
break;
case 9:
this.textPane.setForeground$java_awt_Color($I$(36).red);
buf.append$S(": ");
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].lineSpread >= 0) {
buf.append$S($I$(15).getString$S("AutoTracker.Info.NoMatchOnAxis") + "\n");
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.RetryOnAxis"));
} else {
buf.append$S($I$(15).getString$S("AutoTracker.Info.NoMatch") + "\n");
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.Retry"));
}if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].canStep$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [])) buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.Keep"));
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.NewKeyFrame"));
break;
case 10:
this.textPane.setForeground$java_awt_Color($I$(36).red);
buf.append$S(": ");
if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].lineSpread >= 0) {
buf.append$S($I$(15).getString$S("AutoTracker.Info.NoMatchOnAxis") + "\n");
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.RetryOnAxis"));
} else {
buf.append$S($I$(15).getString$S("AutoTracker.Info.NoMatch") + "\n");
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.Retry"));
}if (this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].canStep$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [])) buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.Keep"));
buf.append$S("\n" + $I$(15).getString$S("AutoTracker.Info.NewKeyFrame"));
break;
}
return buf.toString();
});

Clazz.newMeth(C$, 'getMatchDataString$',  function () {
var buf=Clazz.new_($I$(49,1));
buf.append$S(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []).getName$() + "_" + this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].wizard.pointDropdown.getSelectedItem$() );
buf.append$S($I$(50).NEW_LINE);
buf.append$S($I$(15).getString$S("ThumbnailDialog.Label.FrameNumber") + $I$(51).getDelimiter$() + $I$(15).getString$S("AutoTracker.Match.Score") );
var tar="_" + $I$(15).getString$S("AutoTracker.Label.Target").toLowerCase$();
buf.append$S($I$(51).getDelimiter$() + "x" + tar + $I$(51).getDelimiter$() + "y" + tar );
buf.append$S($I$(50).NEW_LINE);
var frameData=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getFrameNumberToFrameDataMap$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []);
var scoreFormat=$I$(52).getInstance$();
scoreFormat.setMaximumFractionDigits$I(1);
scoreFormat.setMinimumFractionDigits$I(1);
var xFormat=$I$(52).getInstance$();
var yFormat=$I$(52).getInstance$();
var table=null;
var xRenderer=null;
var yRenderer=null;
var menubar=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].frame.getMenuBar$Integer$Z(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].panelID, true);
var dataViews=menubar.getDataViews$();
for (var key, $key = dataViews.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$()).intValue$()),1);) {
var view=dataViews.get$O(Integer.valueOf$I(key));
if (view.getTrack$() === this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getTrack$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []) ) {
table=view.getDataTable$();
var pattern=table.getFormatPattern$S("x");
if (pattern == null  || pattern.equals$O("") ) {
xRenderer=table.getDefaultRenderer$Class(Clazz.getClass(Double));
if (Clazz.instanceOf(xRenderer, "org.opensourcephysics.cabrillo.tracker.TableTrackView.NumberRenderer")) {
var xnRenderer=xRenderer;
xnRenderer.nf.setFixedPattern$S$D("0.00", 0);
}} else {
xFormat.applyPattern$S(pattern);
}pattern=table.getFormatPattern$S("y");
if (pattern == null  || pattern.equals$O("") ) {
yRenderer=table.getDefaultRenderer$Class(Clazz.getClass(Double));
if (Clazz.instanceOf(yRenderer, "org.opensourcephysics.cabrillo.tracker.TableTrackView.NumberRenderer")) {
var ynRenderer=yRenderer;
ynRenderer.nf.setFixedPattern$S$D("0.00", 0);
}} else {
yFormat.applyPattern$S(pattern);
}break;
}}
for (var i, $i = frameData.keySet$().iterator$(); $i.hasNext$()&&((i=($i.next$())),1);) {
var next=frameData.get$O(i);
if (next == null  || next.getMatchWidthAndHeight$() == null  ) continue;
var score=next.getMatchWidthAndHeight$()[1];
var value=Double.isInfinite$D(score) ? String.valueOf$D(score) : scoreFormat.format$D(score);
buf.append$S(next.getFrameNumber$() + $I$(51).getDelimiter$() + value );
var pts=next.getMatchPoints$();
if (pts != null ) {
var p=pts[0];
p=this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'].getMatchTarget$org_opensourcephysics_media_core_TPoint.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], [p]);
var pt=p.getWorldPosition$org_opensourcephysics_media_core_VideoPanel(p$1.trackerPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.AutoTracker'], []));
var xval=xFormat.format$D(pt.getX$());
var yval=yFormat.format$D(pt.getY$());
if (xRenderer != null ) {
var c=xRenderer.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(table, Double.valueOf$D(pt.getX$()), false, false, 0, 0);
if (Clazz.instanceOf(c, "javax.swing.JLabel")) {
xval=(c).getText$().trim$();
}}if (yRenderer != null ) {
var c=yRenderer.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(table, Double.valueOf$D(pt.getY$()), false, false, 0, 0);
if (Clazz.instanceOf(c, "javax.swing.JLabel")) {
yval=(c).getText$().trim$();
}}buf.append$S($I$(51).getDelimiter$() + xval + $I$(51).getDelimiter$() + yval );
}buf.append$S($I$(50).NEW_LINE);
}
return buf.toString();
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AutoTracker, "TallSpinner", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JSpinner');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['comp','java.awt.Component']]]

Clazz.newMeth(C$, 'c$$javax_swing_SpinnerModel$java_awt_Component',  function (model, heightComponent) {
;C$.superclazz.c$$javax_swing_SpinnerModel.apply(this,[model]);C$.$init$.apply(this);
this.comp=heightComponent;
}, 1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
dim.height=this.comp.getPreferredSize$().height;
return dim;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AutoTracker, "SpinnerTumbleModel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.SpinnerListModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_ArrayList',  function (values) {
;C$.superclazz.c$$java_util_List.apply(this,[values]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getNextValue$',  function () {
var value=C$.superclazz.prototype.getNextValue$.apply(this, []);
if ((value == null ) && (this.getList$().size$() > 0) ) {
value=this.getList$().get$I(0);
}return value;
});

Clazz.newMeth(C$, 'getPreviousValue$',  function () {
var value=C$.superclazz.prototype.getPreviousValue$.apply(this, []);
var n=this.getList$().size$();
if ((value == null ) && (n > 0) ) {
value=this.getList$().get$I(n - 1);
}return value;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
