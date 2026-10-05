(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.controls.XMLControlElement','java.util.HashSet','org.opensourcephysics.cabrillo.tracker.Step','org.opensourcephysics.cabrillo.tracker.Undo','org.opensourcephysics.cabrillo.tracker.TTrack',['org.opensourcephysics.cabrillo.tracker.StepSet','.Loader'],'org.opensourcephysics.controls.OSPLog']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StepSet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.HashSet');
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.undoStepStates=Clazz.new_($I$(2,1));
this.removedSteps=Clazz.new_($I$(2,1));
this.saveUndoStates=false;
this.isModified=false;
this.tracks=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['changed','saveUndoStates','isModified'],'S',['trackUndoXML'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','undoStepStates','java.util.HashSet','+removedSteps','+tracks']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TFrame$Integer',  function (frame, panelID) {
Clazz.super_(C$, this);
this.frame=frame;
this.panelID=panelID;
}, 1);

Clazz.newMeth(C$, ['add$org_opensourcephysics_cabrillo_tracker_Step','add$O'],  function (step) {
if (!(Clazz.instanceOf(step, "org.opensourcephysics.cabrillo.tracker.PositionStep"))) return false;
var added=C$.superclazz.prototype.add$O.apply(this, [step]);
this.isModified=added;
if (!added) return false;
if (!this.removedSteps.contains$O(step)) {
var xml=Clazz.new_($I$(1,1).c$$O,[step]).toXML$();
var data=Clazz.array(String, -1, [step.getTrack$().getName$(), String.valueOf$I(step.getFrameNumber$()), xml]);
var match=null;
for (var next, $next = this.undoStepStates.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next[0].equals$O(data[0]) && next[1].equals$O(data[1]) ) {
match=next;
break;
}}
if (match == null ) {
this.undoStepStates.add$O(data);
}if (this.trackUndoXML == null ) {
var track=step.getTrack$();
this.trackUndoXML=Clazz.new_($I$(1,1).c$$O,[track]).toXML$();
}}var pt=null;
switch (this.size$()) {
case 0:
return true;
case 1:
pt=(this.toArray$OA(Clazz.array($I$(3), [1]))[0]).getPoints$()[0];
break;
default:
break;
}
this.panel$().setSelectedPoint$org_opensourcephysics_media_core_TPoint(pt);
return true;
});

Clazz.newMeth(C$, 'remove$O',  function (step) {
if (!(Clazz.instanceOf(step, "org.opensourcephysics.cabrillo.tracker.PositionStep"))) return false;
var removed=C$.superclazz.prototype.remove$O.apply(this, [step]);
if (removed) {
this.isModified=true;
var stepp=step;
if (!this.isChanged$()) {
var frameNum=String.valueOf$I(stepp.getFrameNumber$());
var match=null;
for (var next, $next = this.undoStepStates.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next[0].equals$O(stepp.getTrack$().getName$()) && next[1].equals$O(frameNum) ) {
match=next;
break;
}}
if (match != null ) {
this.undoStepStates.remove$O(match);
}} else {
this.removedSteps.add$O(stepp);
}var trackerPanel=this.panel$();
if (stepp.getPoints$()[0] === trackerPanel.getSelectedPoint$() ) {
trackerPanel.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
trackerPanel.selectedSteps.clear$();
}if (this.size$() == 1) {
stepp=this.toArray$OA(Clazz.array($I$(3), [1]))[0];
trackerPanel.setSelectedPoint$org_opensourcephysics_media_core_TPoint(stepp.getPoints$()[0]);
} else if (this.isEmpty$()) {
this.clear$();
}}return removed;
});

Clazz.newMeth(C$, 'clear$',  function () {
if (this.changed && (!this.isEmpty$() || !this.removedSteps.isEmpty$() ) ) {
var tracks=this.getTracks$();
if (tracks.length == 1 && this.getTrackUndoControl$() != null  ) {
$I$(4,"postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl",[tracks[0], this.getTrackUndoControl$()]);
} else {
$I$(4,"postStepSetEdit$org_opensourcephysics_cabrillo_tracker_StepSet$org_opensourcephysics_controls_XMLControl",[this, this.getStepsUndoControl$()]);
}}for (var next, $next = this.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.erase$();
}
C$.superclazz.prototype.clear$.apply(this, []);
this.undoStepStates.clear$();
this.removedSteps.clear$();
this.trackUndoXML=null;
this.changed=false;
this.isModified=false;
});

Clazz.newMeth(C$, 'setChanged$Z',  function (changed) {
this.changed=changed;
});

Clazz.newMeth(C$, 'isChanged$',  function () {
return this.changed;
});

Clazz.newMeth(C$, 'getStepsUndoControl$',  function () {
this.saveUndoStates=true;
var control=Clazz.new_($I$(1,1).c$$O,[this]);
this.saveUndoStates=false;
return control;
});

Clazz.newMeth(C$, 'getTrackUndoControl$',  function () {
return this.trackUndoXML == null  ? null : Clazz.new_($I$(1,1).c$$S,[this.trackUndoXML]);
});

Clazz.newMeth(C$, 'getTracks$',  function () {
this.tracks.clear$();
for (var step, $step = this.iterator$(); $step.hasNext$()&&((step=($step.next$())),1);) {
if (step.getTrack$() != null ) {
this.tracks.add$O(step.getTrack$());
}}
return this.tracks.toArray$OA(Clazz.array($I$(5), [this.tracks.size$()]));
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(6,1));
}, 1);

Clazz.newMeth(C$, 'panel$',  function () {
return (this.frame == null  ? null : this.frame.getTrackerPanelForID$Integer(this.panelID));
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.frame=null;
this.panelID=null;
this.tracks=null;
this.undoStepStates=null;
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(7).finalized$O(this);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.StepSet, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var steps=obj;
var stepsData;
if (steps.saveUndoStates) {
stepsData=steps.undoStepStates.toArray$OA(Clazz.array(String, [steps.undoStepStates.size$(), null]));
} else {
stepsData=Clazz.array(String, [steps.size$() + steps.removedSteps.size$(), null]);
var i=0;
for (var step, $step = steps.iterator$(); $step.hasNext$()&&((step=($step.next$())),1);) {
var xml=Clazz.new_($I$(1,1).c$$O,[step]).toXML$();
var data=Clazz.array(String, -1, [step.getTrack$().getName$(), String.valueOf$I(step.getFrameNumber$()), xml]);
stepsData[i++]=data;
}
for (var step, $step = steps.removedSteps.iterator$(); $step.hasNext$()&&((step=($step.next$())),1);) {
var xml=Clazz.new_($I$(1,1).c$$O,[step]).toXML$();
var data=Clazz.array(String, -1, [step.getTrack$().getName$(), String.valueOf$I(step.getFrameNumber$()), xml]);
stepsData[i++]=data;
}
}control.setValue$S$O("steps", stepsData);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var steps=obj;
var stepsData=control.getObject$S("steps");
var panel=steps.panel$();
var ns=stepsData.length;
if (ns > 0) {
var tracks=panel.getTracksTemp$();
for (var i=0; i < ns; i++) {
var next=stepsData[i];
var track=panel.getTrack$S$java_util_ArrayList(next[0], tracks);
if (track != null ) {
var n=Integer.parseInt$S(next[1]);
var step=track.getStep$I(n);
if (step != null ) {
var xml=next[2];
if (xml.indexOf$S("<![CDATA[") != -1) {
xml=xml.substring$I$I(xml.indexOf$S("<![CDATA[") + "<![CDATA[".length$(), xml.indexOf$S("]]>"));
}var stepControl=Clazz.new_($I$(1,1).c$$S,[xml]);
stepControl.loadObject$O(step);
step.erase$();
}}}
tracks.clear$();
}return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
