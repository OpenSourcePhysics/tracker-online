(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.util.BitSet','java.util.ArrayList','org.opensourcephysics.cabrillo.tracker.TTrack','org.opensourcephysics.display.TeXParser','javax.swing.SwingUtilities','org.opensourcephysics.controls.OSPLog']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrackView", null, 'javax.swing.JScrollPane', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.forceRefresh=false;
this.highlightVisible=true;
this.highlightFrames=Clazz.new_($I$(1,1));
this.highlightRows=Clazz.new_($I$(1,1));
this.toolbarComponents=Clazz.new_($I$(2,1));
this.myDatasetIndex=-1;
},1);

C$.$fields$=[['Z',['forceRefresh','highlightVisible','clipAdjusting'],'I',['trackID','myType','myID','myDatasetIndex','prevDatasetIndex'],'O',['viewParent','org.opensourcephysics.cabrillo.tracker.TrackChooserTView','frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','highlightFrames','java.util.BitSet','+highlightRows','toolbarComponents','java.util.ArrayList','trackIcon','javax.swing.Icon']]
,['I',['TVID'],'O',['panelProps','String[]']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TrackChooserTView$I',  function (track, panel, view, myType) {
Clazz.super_(C$, this);
this.trackID=track.getID$();
this.myID=++C$.TVID;
this.myType=myType;
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
panel.addListeners$SA$java_beans_PropertyChangeListener(C$.panelProps, this);
this.viewParent=view;
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
for (var t, $t = $I$(3).getValues$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
t.removeStepListener$java_beans_PropertyChangeListener(this);
}
this.frame.getTrackerPanelForID$Integer(this.panelID).removeListeners$SA$java_beans_PropertyChangeListener(C$.panelProps, this);
this.frame=null;
this.panelID=null;
this.viewParent=null;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.getTrack$().getName$();
});

Clazz.newMeth(C$, 'getIcon$',  function () {
if (this.trackIcon == null ) this.trackIcon=this.getTrack$().getIcon$I$I$S(21, 16, "point");
return this.trackIcon;
});

Clazz.newMeth(C$, 'getTrack$',  function () {
return $I$(3).getTrack$I(this.trackID);
});

Clazz.newMeth(C$, 'setDatasetIndex$I',  function (index) {
this.myDatasetIndex=index;
});

Clazz.newMeth(C$, 'getOwner$',  function () {
var choosers=this.frame.getViewChoosers$Integer(this.panelID);
for (var i=0; i < choosers.length; i++) {
var tview=(choosers[i] == null  ? null : choosers[i].getSelectedView$());
if (tview === this.viewParent  && this.viewParent.getTrackView$org_opensourcephysics_cabrillo_tracker_TTrack(this.viewParent.getSelectedTrack$()) === this  ) {
return choosers[i];
}}
return null;
});

Clazz.newMeth(C$, 'getToolBarComponents$',  function () {
return this.toolbarComponents;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var stepNumber=-2147483648;
var mode=0;
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
switch (e.getPropertyName$()) {
case "step":
stepNumber=(e.getNewValue$()).$c();
mode=(e.getOldValue$() === $I$(3).HINT_STEP_ADDED_OR_REMOVED  ? 8448 : 4864);
break;
case "selectedpoint":
var step=trackerPanel.getSelectedStep$();
var track=this.getTrack$();
if (step != null  && trackerPanel.getSelectedTrack$() === track  ) {
stepNumber=step.getFrameNumber$();
}mode=5120;
break;
case "steps":
mode=$I$(3).HINT_STEPS_SELECTED === e.getOldValue$()  ? 5120 : 5376;
break;
case "loaded":
mode=5632;
break;
case "track":
mode=7680;
break;
}
this.refresh$I$I(stepNumber == -2147483648 ? trackerPanel.getFrameNumber$() : stepNumber, mode);
});

Clazz.newMeth(C$, 'isRefreshEnabled$',  function () {
return this.frame.isPaintable$() && this.frame.getTrackerPanelForID$Integer(this.panelID).isAutoRefresh$() && this.viewParent.isTrackViewDisplayed$org_opensourcephysics_cabrillo_tracker_TTrack(this.getTrack$())  ;
});

Clazz.newMeth(C$, 'trimDefined$S',  function (name) {
var pt;
return $I$(4,"removeSubscript$S",[name == null  || (pt=name.indexOf$S(": ")) < 0  ? name : name.substring$I$I(0, pt)]);
}, 1);

Clazz.newMeth(C$, 'setClipAdjusting$I$Z',  function (frameNo, adjusting) {
this.clipAdjusting=adjusting;
if (!adjusting) {
$I$(5,"invokeLater$Runnable",[((P$.TrackView$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackView$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'].refresh$I$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackView'], [this.$finals$.frameNo, 9216]);
});
})()
), Clazz.new_(P$.TrackView$lambda1.$init$,[this, {frameNo:frameNo}]))]);
}});

Clazz.newMeth(C$, 'isClipAdjusting$',  function () {
return this.clipAdjusting;
});

Clazz.newMeth(C$, 'highlightFrames$I',  function (frameNumber) {
this.highlightFrames.clear$();
var steps=this.frame.getTrackerPanelForID$Integer(this.panelID).selectedSteps;
if (steps.size$() > 0) {
for (var step, $step = steps.iterator$(); $step.hasNext$()&&((step=($step.next$())),1);) {
if (step.getTrack$() !== this.getTrack$() ) continue;
this.highlightFrames.set$I(step.getFrameNumber$());
}
} else {
this.highlightFrames.set$I(frameNumber);
}});

Clazz.newMeth(C$, 'toString',  function () {
return "[" + this.getClass$().getSimpleName$() + " " + this.getTrack$().getName$() + " " + this.viewParent + " ]" ;
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(6).finalized$O(this);
});

C$.$static$=function(){C$.$static$=0;
C$.TVID=0;
C$.panelProps=Clazz.array(String, -1, ["loaded", "selectedpoint", "units"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
