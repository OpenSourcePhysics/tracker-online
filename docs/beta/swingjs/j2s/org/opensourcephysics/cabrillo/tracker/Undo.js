(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.cabrillo.tracker.TrackChooserTView','org.opensourcephysics.cabrillo.tracker.TTrack','org.opensourcephysics.cabrillo.tracker.TrackProperties','org.opensourcephysics.cabrillo.tracker.StepSet','org.opensourcephysics.cabrillo.tracker.Undo','org.opensourcephysics.cabrillo.tracker.TActions','org.opensourcephysics.media.core.VideoIO','java.util.HashMap','java.awt.Point','org.opensourcephysics.media.core.MediaRes','org.opensourcephysics.cabrillo.tracker.PerspectiveTrack',['org.opensourcephysics.cabrillo.tracker.Undo','.MyUndoManager'],'javax.swing.undo.UndoableEditSupport','org.opensourcephysics.controls.XML',['org.opensourcephysics.cabrillo.tracker.Undo','.TrackDelete'],['org.opensourcephysics.cabrillo.tracker.Undo','.TrackClear'],['org.opensourcephysics.cabrillo.tracker.Undo','.TrackEdit'],['org.opensourcephysics.cabrillo.tracker.Undo','.CompoundEdit'],['org.opensourcephysics.cabrillo.tracker.Undo','.StepEdit'],['org.opensourcephysics.cabrillo.tracker.Undo','.StepSetEdit'],['org.opensourcephysics.cabrillo.tracker.Undo','.CoordsEdit'],['org.opensourcephysics.cabrillo.tracker.Undo','.ImageVideoEdit'],['org.opensourcephysics.cabrillo.tracker.Undo','.VideoReplace'],['org.opensourcephysics.cabrillo.tracker.Undo','.FilterDelete'],['org.opensourcephysics.cabrillo.tracker.Undo','.FilterEdit'],['org.opensourcephysics.cabrillo.tracker.Undo','.FilterClear'],['org.opensourcephysics.cabrillo.tracker.Undo','.TrackDisplayEdit']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Undo", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['TrackEdit',4],['StepEdit',4],['TrackDisplayEdit',4],['StepSetEdit',4],['CoordsEdit',4],['ImageVideoEdit',4],['VideoReplace',4],['TEdit',1028],['CompoundEdit',4],['TrackDelete',4],['TrackClear',4],['FilterDelete',4],['FilterClear',4],['FilterEdit',4],['MyUndoManager',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['undoSupport','javax.swing.undo.UndoableEditSupport','undoManager','org.opensourcephysics.cabrillo.tracker.Undo.MyUndoManager','frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer']]
,['O',['undomap','java.util.Map']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.$init$.apply(this);
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
this.undoManager=Clazz.new_($I$(14,1));
this.undoSupport=Clazz.new_($I$(15,1));
this.undoSupport.addUndoableEditListener$javax_swing_event_UndoableEditListener(this.undoManager);
$I$(16,"setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader",[Clazz.getClass($I$(5)), $I$(5).getLoader$()]);
}, 1);

Clazz.newMeth(C$, 'canUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
return C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoManager.canUndo$();
}, 1);

Clazz.newMeth(C$, 'getUndoDescription$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
var desc=$I$(1).getString$S("TMenuBar.MenuItem.Undo");
var edit=C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoManager.getUndoEdit$();
if (edit != null ) {
desc+=" " + edit.getPresentationName$();
}return desc;
}, 1);

Clazz.newMeth(C$, 'undo$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
if (!C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoManager.canRedo$()) {
var lastEdit=C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoManager.getUndoEdit$();
if (lastEdit != null  && Clazz.instanceOf(lastEdit, "org.opensourcephysics.cabrillo.tracker.Undo.TrackEdit") ) {
var trackEdit=lastEdit;
var name=trackEdit.trackName;
var track=panel.getTrack$S(name);
if (track != null ) {
trackEdit.redo=Clazz.new_($I$(2,1).c$$O,[track]).toXML$();
}}}C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoManager.undo$();
panel.refreshMenus$S("Undo.refreshMenus");
panel.repaint$();
}, 1);

Clazz.newMeth(C$, 'canRedo$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
return C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoManager.canRedo$();
}, 1);

Clazz.newMeth(C$, 'getRedoDescription$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
var desc=$I$(1).getString$S("TMenuBar.MenuItem.Redo");
var edit=C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoManager.getRedoEdit$();
if (edit != null ) {
desc+=" " + edit.getPresentationName$();
}return desc;
}, 1);

Clazz.newMeth(C$, 'redo$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoManager.redo$();
panel.refreshMenus$S("Undo.refreshMenus");
panel.repaint$();
}, 1);

Clazz.newMeth(C$, 'postTrackDelete$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
var panel=track.tp;
if (panel == null ) return;
var edit=Clazz.new_([C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel), null, panel, track],$I$(17,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TTrack);
C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
panel.refreshMenus$S("Undo.refreshMenus");
}, 1);

Clazz.newMeth(C$, 'postTrackClear$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_util_List',  function (panel, xml) {
var edit=Clazz.new_([C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel), null, panel, xml],$I$(18,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_util_List);
C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
panel.refreshMenus$S("Undo.refreshMenus");
}, 1);

Clazz.newMeth(C$, 'postTrackEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl',  function (track, control) {
var panel=track.tp;
if (panel == null ) return;
var edit=Clazz.new_([C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel), null, track, control],$I$(19,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl);
C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
panel.refreshMenus$S("Undo.refreshMenus");
}, 1);

Clazz.newMeth(C$, 'postMultiTrackEdit$java_util_ArrayList',  function (tracksAndXMLControls) {
if (tracksAndXMLControls == null  || tracksAndXMLControls.size$() == 0 ) return;
var track=tracksAndXMLControls.get$I(0)[0];
var panel=track.tp;
if (panel == null ) return;
var edit=null;
for (var next, $next = tracksAndXMLControls.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
track=next[0];
var control=next[1];
if (edit == null ) {
edit=Clazz.new_([C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel), null, track, control],$I$(19,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl);
} else {
var trackEdit=Clazz.new_([C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel), null, track, control],$I$(19,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl);
edit=Clazz.new_([C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel), null, trackEdit, edit],$I$(20,1).c$$javax_swing_undo_UndoableEdit$javax_swing_undo_UndoableEdit);
}}
C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
panel.refreshMenus$S("Undo.refreshMenus");
}, 1);

Clazz.newMeth(C$, 'postStepEdit$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_controls_XMLControl',  function (step, control) {
var panel=step.getTrack$().tp;
if (panel == null ) return;
var edit=Clazz.new_([C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel), null, step, control],$I$(21,1).c$$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_controls_XMLControl);
C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
panel.refreshMenus$S("Undo.refreshMenus");
}, 1);

Clazz.newMeth(C$, 'postStepSetEdit$org_opensourcephysics_cabrillo_tracker_StepSet$org_opensourcephysics_controls_XMLControl',  function (steps, control) {
var panel=steps.panel$();
var track=null;
var singleTrack=true;
for (var step, $step = steps.iterator$(); $step.hasNext$()&&((step=($step.next$())),1);) {
if (step.getTrack$() != null ) {
if (track == null ) track=step.getTrack$();
 else {
if (track !== step.getTrack$() ) {
singleTrack=false;
break;
}}}}
var edit;
if (track != null  && singleTrack ) {
edit=Clazz.new_([C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel), null, track, control],$I$(19,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl);
} else {
edit=Clazz.new_([C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel), null, steps, control],$I$(22,1).c$$org_opensourcephysics_cabrillo_tracker_StepSet$org_opensourcephysics_controls_XMLControl);
}C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
steps.setChanged$Z(false);
steps.clear$();
panel.refreshMenus$S("Undo.refreshMenus");
}, 1);

Clazz.newMeth(C$, 'postCoordsEdit$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl',  function (panel, control) {
var edit=Clazz.new_([C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel), null, panel, control],$I$(23,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl);
C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
panel.refreshMenus$S("Undo.refreshMenus");
}, 1);

Clazz.newMeth(C$, 'postTrackAndCoordsEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl$org_opensourcephysics_controls_XMLControl',  function (track, trackControl, coordsControl) {
var panel=track.tp;
if (panel == null ) return;
var edit1=Clazz.new_([C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel), null, panel, coordsControl],$I$(23,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl);
var edit2=Clazz.new_([C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel), null, track, trackControl],$I$(19,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl);
var compound=Clazz.new_([C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel), null, edit1, edit2],$I$(20,1).c$$javax_swing_undo_UndoableEdit$javax_swing_undo_UndoableEdit);
C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoSupport.postEdit$javax_swing_undo_UndoableEdit(compound);
panel.refreshMenus$S("Undo.refreshMenus");
}, 1);

Clazz.newMeth(C$, 'postImageVideoEdit$org_opensourcephysics_cabrillo_tracker_TrackerPanel$SA$I$I$Z',  function (panel, paths, index, step, added) {
var edit=Clazz.new_([C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel), null, panel, paths, index, step, added],$I$(24,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$SA$I$I$Z);
C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
panel.refreshMenus$S("Undo.refreshMenus");
}, 1);

Clazz.newMeth(C$, 'postVideoReplace$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl',  function (panel, control) {
var edit=Clazz.new_([C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel), null, panel, control],$I$(25,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl);
C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
panel.refreshMenus$S("Undo.refreshMenus");
}, 1);

Clazz.newMeth(C$, 'postFilterDelete$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_Filter',  function (panel, filter) {
var edit=Clazz.new_([C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel), null, panel, filter],$I$(26,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_Filter);
C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
panel.refreshMenus$S("Undo.refreshMenus");
}, 1);

Clazz.newMeth(C$, 'postFilterEdit$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_Filter$org_opensourcephysics_controls_XMLControl',  function (panel, filter, control) {
var edit=Clazz.new_([C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel), null, panel, filter, control],$I$(27,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_Filter$org_opensourcephysics_controls_XMLControl);
C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
panel.refreshMenus$S("Undo.refreshMenus");
}, 1);

Clazz.newMeth(C$, 'postFilterClear$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_util_List',  function (panel, xml) {
var edit=Clazz.new_([C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel), null, panel, xml],$I$(28,1).c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_util_List);
C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
panel.refreshMenus$S("Undo.refreshMenus");
}, 1);

Clazz.newMeth(C$, 'postTrackDisplayEdit$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl',  function (track, control) {
var panel=track.tp;
if (panel == null ) return;
var edit=Clazz.new_([C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel), null, track, control],$I$(29,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl);
C$.getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel(panel).undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
panel.refreshMenus$S("Undo.refreshMenus");
}, 1);

Clazz.newMeth(C$, 'getUndo$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
var undo=C$.undomap.get$O(panel.getID$());
if (undo == null ) {
undo=Clazz.new_(C$.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[panel]);
C$.undomap.put$O$O(panel.getID$(), undo);
}return undo;
}, 1);

Clazz.newMeth(C$, 'getXMLControl$org_opensourcephysics_media_core_VideoClip',  function (clip) {
var control=Clazz.new_($I$(2,1).c$$O,[clip]);
if (clip.getVideo$() != null ) {
var fullpath=clip.getVideo$().getProperty$S("absolutePath");
var child=control.getChildControl$S("video");
if (child != null ) child.setValue$S$O("absolutePath", fullpath);
}return control;
}, 1);

Clazz.newMeth(C$, 'panel$',  function () {
return (this.frame == null  ? null : this.frame.getTrackerPanelForID$Integer(this.panelID));
});

C$.$static$=function(){C$.$static$=0;
C$.undomap=Clazz.new_($I$(10,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Undo, "TrackEdit", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.cabrillo.tracker.Undo','.TEdit']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isTextColumn=false;
},1);

C$.$fields$=[['Z',['isTextColumn'],'S',['trackName','trackType']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl',  function (track, control) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$O$org_opensourcephysics_controls_XMLControl.apply(this,[track.tp, track, control]);C$.$init$.apply(this);
this.isTextColumn=control.getBoolean$S("isTextColumn");
this.trackName=track.getName$();
var s=track.getClass$().getSimpleName$();
this.trackType=$I$(1).getString$S(s + ".Name");
if (this.trackType.startsWith$S("!")) {
this.trackType=s;
}}, 1);

Clazz.newMeth(C$, 'load$S',  function (xml) {
var control=Clazz.new_($I$(2,1).c$$S,[xml]);
var track=this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []).getTrack$S(this.trackName);
if (track == null ) return;
$I$(3).ignoreRefresh=true;
control.loadObject$O(track);
track.erase$();
$I$(3).ignoreRefresh=false;
if (this.isTextColumn) track.firePropertyChange$S$O$O("text_column", null, null);
 else track.firePropertyChange$S$O$O("steps", $I$(4).HINT_STEP_ADDED_OR_REMOVED, null);
});

Clazz.newMeth(C$, 'getPresentationName$',  function () {
return $I$(1).getString$S("Undo.Description.Edit") + " " + this.trackType ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Undo, "StepEdit", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.cabrillo.tracker.Undo','.TEdit']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['trackType'],'O',['step','org.opensourcephysics.cabrillo.tracker.Step']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_Step$org_opensourcephysics_controls_XMLControl',  function (step, control) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$O$org_opensourcephysics_controls_XMLControl.apply(this,[step.getTrack$().tp, step, control]);C$.$init$.apply(this);
this.step=step;
var s=step.getTrack$().getClass$().getSimpleName$();
this.trackType=$I$(1).getString$S(s + ".Name");
if (this.trackType.startsWith$S("!")) {
this.trackType=s;
}}, 1);

Clazz.newMeth(C$, 'load$S',  function (xml) {
var control=Clazz.new_($I$(2,1).c$$S,[xml]);
control.loadObject$O(this.step);
this.step.erase$();
this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []).refreshTrackBar$();
});

Clazz.newMeth(C$, 'getPresentationName$',  function () {
return $I$(1).getString$S("Undo.Description.Edit") + " " + this.trackType ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Undo, "TrackDisplayEdit", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.cabrillo.tracker.Undo','.TEdit']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['undoName','redoName','trackName','trackType']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_controls_XMLControl',  function (track, control) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$O$org_opensourcephysics_controls_XMLControl.apply(this,[track.tp, Clazz.new_($I$(5,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack,[track]), control]);C$.$init$.apply(this);
control=Clazz.new_($I$(2,1).c$$S,[this.undo]);
var props=control.loadObject$O(null);
this.undoName=track.getName$();
this.redoName=props.name;
var s=track.getClass$().getSimpleName$();
this.trackType=$I$(1).getString$S(s + ".Name");
if (this.trackType.startsWith$S("!")) {
this.trackType=s;
}}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
this.trackName=this.undoName;
C$.superclazz.prototype.undo$.apply(this, []);
});

Clazz.newMeth(C$, 'redo$',  function () {
this.trackName=this.redoName;
C$.superclazz.prototype.redo$.apply(this, []);
});

Clazz.newMeth(C$, 'load$S',  function (xml) {
var control=Clazz.new_($I$(2,1).c$$S,[xml]);
var props=control.loadObject$O(null);
var track=this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []).getTrack$S(this.trackName);
if (track == null ) return;
track.setName$S(props.name);
if (props.colors != null ) {
if (props.colors.length == 1) {
track.setColor$java_awt_Color(props.colors[0]);
} else if (Clazz.instanceOf(track, "org.opensourcephysics.cabrillo.tracker.ParticleDataTrack")) {
(track).setAllColors$java_awt_ColorA(props.colors);
}}if (props.footprints != null ) {
if (props.footprints.length == 1) {
track.setFootprint$S(props.footprints[0]);
} else if (Clazz.instanceOf(track, "org.opensourcephysics.cabrillo.tracker.ParticleDataTrack")) {
(track).setAllFootprints$SA(props.footprints);
}}});

Clazz.newMeth(C$, 'getPresentationName$',  function () {
return $I$(1).getString$S("Undo.Description.Edit") + " " + this.trackType ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Undo, "StepSetEdit", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.cabrillo.tracker.Undo','.TEdit']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_StepSet$org_opensourcephysics_controls_XMLControl',  function (steps, control) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$O$org_opensourcephysics_controls_XMLControl.apply(this,[steps.panel$(), steps, control]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'load$S',  function (xml) {
var control=Clazz.new_($I$(2,1).c$$S,[xml]);
var steps=Clazz.new_($I$(6,1).c$$org_opensourcephysics_cabrillo_tracker_TFrame$Integer,[this.frame, this.panelID]);
control.loadObject$O(steps);
});

Clazz.newMeth(C$, 'getPresentationName$',  function () {
return $I$(1).getString$S("Undo.Description.Edit") + " " + $I$(1).getString$S("Undo.Description.Steps") ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Undo, "CoordsEdit", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.cabrillo.tracker.Undo','.TEdit']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl',  function (panel, control) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$O$org_opensourcephysics_controls_XMLControl.apply(this,[panel, panel.getCoords$(), control]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'load$S',  function (xml) {
var control=Clazz.new_($I$(2,1).c$$S,[xml]);
var coords=this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []).getCoords$();
control.loadObject$O(coords);
});

Clazz.newMeth(C$, 'getPresentationName$',  function () {
return $I$(1).getString$S("Undo.Description.Edit") + " " + $I$(1).getString$S("TMenuBar.Menu.Coords") ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Undo, "ImageVideoEdit", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['added'],'I',['n','step'],'O',['paths','String[]']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$SA$I$I$Z',  function (panel, imagePaths, index, step, added) {
Clazz.super_(C$, this);
this.paths=imagePaths;
this.n=index;
this.step=step;
this.added=added;
}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
if (this.added) p$1.removeImages.apply(this, []);
 else p$1.addImages.apply(this, []);
});

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
if (this.added) p$1.addImages.apply(this, []);
 else p$1.removeImages.apply(this, []);
});

Clazz.newMeth(C$, 'addImages',  function () {
if (this.paths == null  || this.paths.length == 0 ) return;
try {
var index=this.n;
for (var i=0; i < this.paths.length; i++) {
var path=this.paths[i];
if (path == null ) continue;
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []);
var imageVid=panel.getVideo$();
imageVid.insert$S$I$Z(path, index, false);
var clip=panel.getPlayer$().getVideoClip$();
clip.setStepCount$I(imageVid.getFrameCount$());
var step=panel.getPlayer$().getVideoClip$().frameToStep$I(index++);
panel.getPlayer$().setStepNumber$I(step);
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}, p$1);

Clazz.newMeth(C$, 'removeImages',  function () {
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []);
if (Clazz.instanceOf(panel.getVideo$(), "org.opensourcephysics.media.core.ImageVideo")) {
var imageVid=panel.getVideo$();
for (var i=0; i < this.paths.length; i++) {
imageVid.remove$I(this.n);
}
var len=imageVid.getFrameCount$();
var clip=panel.getPlayer$().getVideoClip$();
clip.setStepCount$I(len);
panel.getPlayer$().setStepNumber$I(this.step);
}}, p$1);

Clazz.newMeth(C$, 'getPresentationName$',  function () {
if (this.added) {
return $I$(1).getString$S("Undo.Description.Add") + " " + $I$(1).getString$S("Undo.Description.Images") ;
}return $I$(1).getString$S("Undo.Description.Remove") + " " + $I$(1).getString$S("Undo.Description.Images") ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Undo, "VideoReplace", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.cabrillo.tracker.Undo','.TEdit']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_controls_XMLControl',  function (panel, control) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$O$org_opensourcephysics_controls_XMLControl.apply(this,[panel, panel.getPlayer$().getVideoClip$(), control]);C$.$init$.apply(this);
this.redo=$I$(7,"getXMLControl$org_opensourcephysics_media_core_VideoClip",[panel.getPlayer$().getVideoClip$()]).toXML$();
}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
var video=this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []).getVideo$();
if (Clazz.instanceOf(video, "org.opensourcephysics.media.core.ImageVideo")) {
(video).saveInvalidImages$();
}this.redo=$I$(7,"getXMLControl$org_opensourcephysics_media_core_VideoClip",[this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []).getPlayer$().getVideoClip$()]).toXML$();
C$.superclazz.prototype.undo$.apply(this, []);
});

Clazz.newMeth(C$, 'redo$',  function () {
var video=this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []).getVideo$();
if (Clazz.instanceOf(video, "org.opensourcephysics.media.core.ImageVideo")) {
(video).saveInvalidImages$();
}this.undo=$I$(7,"getXMLControl$org_opensourcephysics_media_core_VideoClip",[this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []).getPlayer$().getVideoClip$()]).toXML$();
C$.superclazz.prototype.redo$.apply(this, []);
});

Clazz.newMeth(C$, 'load$S',  function (xml) {
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []);
var video=panel.getVideo$();
if (video != null ) {
$I$(8).clearFiltersAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z(panel, false);
}var control=Clazz.new_($I$(2,1).c$$S,[xml]);
var clip=control.loadObject$O(null);
var newVid=clip.getVideo$();
if ($I$(9).loadIncrementally && newVid != null   && Clazz.instanceOf(newVid, "org.opensourcephysics.media.core.IncrementallyLoadable") ) {
control.loadObject$O(clip);
}panel.getPlayer$().setVideoClip$org_opensourcephysics_media_core_VideoClip(clip);
video=panel.getVideo$();
if (video != null ) {
for (var filter, $filter = video.getFilterStack$().getFilters$().iterator$(); $filter.hasNext$()&&((filter=($filter.next$())),1);) {
filter.setVideoPanel$org_opensourcephysics_media_core_VideoPanel(panel);
if (filter.inspectorX != -2147483648) {
filter.inspectorVisible=true;
if (panel.visibleFilters == null ) {
panel.visibleFilters=Clazz.new_($I$(10,1));
}var p=Clazz.new_($I$(11,1).c$$I$I,[filter.inspectorX, filter.inspectorY]);
panel.visibleFilters.put$O$O(filter, p);
}}
}});

Clazz.newMeth(C$, 'getPresentationName$',  function () {
return $I$(1).getString$S("Undo.Description.Replace") + " " + $I$(1).getString$S("Undo.Description.Video") ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Undo, "TEdit", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['undo','redo'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$O$org_opensourcephysics_controls_XMLControl',  function (panel, obj, control) {
Clazz.super_(C$, this);
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
this.undo=control.toXML$();
control=Clazz.new_($I$(2,1).c$$O,[obj]);
this.redo=control.toXML$();
}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
this.load$S(this.undo);
});

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
this.load$S(this.redo);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Undo, "CompoundEdit", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['editA','javax.swing.undo.UndoableEdit','+editB']]]

Clazz.newMeth(C$, 'c$$javax_swing_undo_UndoableEdit$javax_swing_undo_UndoableEdit',  function (edit1, edit2) {
Clazz.super_(C$, this);
this.editA=edit1;
this.editB=edit2;
}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
this.editA.undo$();
this.editB.undo$();
});

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
this.editA.redo$();
this.editB.redo$();
});

Clazz.newMeth(C$, 'getPresentationName$',  function () {
return this.editA.getPresentationName$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Undo, "TrackDelete", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['trackID'],'S',['xml','trackType']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_cabrillo_tracker_TTrack',  function (panel, track) {
Clazz.super_(C$, this);
var control=Clazz.new_($I$(2,1).c$$O,[track]);
this.xml=control.toXML$();
var s=track.getClass$().getSimpleName$();
this.trackType=$I$(1).getString$S(s + ".Name");
if (this.trackType.startsWith$S("!")) {
this.trackType=s;
}}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
var control=Clazz.new_($I$(2,1).c$$S,[this.xml]);
var track=control.loadObject$O(null);
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []);
panel.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
this.trackID=track.getID$();
panel.requestFocus$();
});

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
var track=$I$(4).getTrack$I(this.trackID);
track.delete$Z(false);
});

Clazz.newMeth(C$, 'getPresentationName$',  function () {
return $I$(1).getString$S("Undo.Description.Delete") + " " + this.trackType ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Undo, "TrackClear", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['xml','java.util.List']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_util_List',  function (trackerPanel, xml) {
Clazz.super_(C$, this);
this.xml=xml;
}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
var it=this.xml.iterator$();
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []);
while (it.hasNext$()){
var control=Clazz.new_([it.next$()],$I$(2,1).c$$S);
var track=control.loadObject$O(null);
panel.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
}
panel.requestFocus$();
});

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []).clearTracks$();
});

Clazz.newMeth(C$, 'getPresentationName$',  function () {
return $I$(1).getString$S("Undo.Description.Clear") + " " + $I$(1).getString$S("Undo.Description.Tracks") ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Undo, "FilterDelete", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['i'],'S',['xml','filterName'],'O',['filter','org.opensourcephysics.media.core.Filter']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_Filter',  function (trackerPanel, filter) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.xml=Clazz.new_($I$(2,1).c$$O,[filter]).toXML$();
this.i=this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []).getVideo$().getFilterStack$().lastIndexRemoved$();
this.filterName=filter.getClass$().getSimpleName$();
var j=this.filterName.indexOf$S("Filter");
if (j > 0 && j < this.filterName.length$() - 1 ) {
this.filterName=this.filterName.substring$I$I(0, j);
}this.filterName=$I$(12).getString$S("VideoFilter." + this.filterName);
}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []);
var video=panel.getVideo$();
if (video != null ) {
var control=Clazz.new_($I$(2,1).c$$S,[this.xml]);
this.filter=control.loadObject$O(null);
this.filter.setVideoPanel$org_opensourcephysics_media_core_VideoPanel(panel);
video.getFilterStack$().insertFilter$org_opensourcephysics_media_core_Filter$I(this.filter, this.i);
if (this.filter.inspectorX != -2147483648) {
this.filter.inspectorVisible=true;
if (panel.visibleFilters == null ) {
panel.visibleFilters=Clazz.new_($I$(10,1));
}var p=Clazz.new_($I$(11,1).c$$I$I,[this.filter.inspectorX, this.filter.inspectorY]);
panel.visibleFilters.put$O$O(this.filter, p);
}}});

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
var video=this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []).getVideo$();
if (video != null ) {
this.filter.setVideoPanel$org_opensourcephysics_media_core_VideoPanel(null);
var menubar=this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []).getMenuBar$Z(true);
menubar.refreshing=true;
video.getFilterStack$().removeFilter$org_opensourcephysics_media_core_Filter(this.filter);
menubar.refreshing=false;
this.i=video.getFilterStack$().lastIndexRemoved$();
this.filter=null;
}});

Clazz.newMeth(C$, 'getPresentationName$',  function () {
return $I$(1).getString$S("Undo.Description.Delete") + " " + $I$(1).getString$S("Undo.Description.Filter") ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Undo, "FilterClear", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['xml','java.util.List']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_util_List',  function (trackerPanel, xml) {
Clazz.super_(C$, this);
this.xml=xml;
}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []);
var video=panel.getVideo$();
if (video != null ) {
for (var next, $next = this.xml.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var control=Clazz.new_($I$(2,1).c$$S,[next]);
var filter=control.loadObject$O(null);
filter.setVideoPanel$org_opensourcephysics_media_core_VideoPanel(panel);
video.getFilterStack$().addFilter$org_opensourcephysics_media_core_Filter(filter);
if (filter.inspectorX != -2147483648) {
filter.inspectorVisible=true;
if (panel.visibleFilters == null ) {
panel.visibleFilters=Clazz.new_($I$(10,1));
}var p=Clazz.new_($I$(11,1).c$$I$I,[filter.inspectorX, filter.inspectorY]);
panel.visibleFilters.put$O$O(filter, p);
}}
}});

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []);
var video=panel.getVideo$();
if (video != null ) {
var stack=video.getFilterStack$();
for (var filter, $filter = stack.getFilters$().iterator$(); $filter.hasNext$()&&((filter=($filter.next$())),1);) {
var track=$I$(13).filterMap.get$O(filter);
if (track != null ) {
panel.removeTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
track.dispose$();
}}
stack.clear$();
}});

Clazz.newMeth(C$, 'getPresentationName$',  function () {
return $I$(1).getString$S("Undo.Description.Clear") + " " + $I$(1).getString$S("TMenuBar.MenuItem.VideoFilters") ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Undo, "FilterEdit", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.cabrillo.tracker.Undo','.TEdit']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['filterIndex','frameNumber'],'S',['filterType']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$org_opensourcephysics_media_core_Filter$org_opensourcephysics_controls_XMLControl',  function (panel, filter, control) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel$O$org_opensourcephysics_controls_XMLControl.apply(this,[panel, filter, control]);C$.$init$.apply(this);
this.filterIndex=panel.getVideo$().getFilterStack$().getFilters$().indexOf$O(filter);
this.frameNumber=panel.getFrameNumber$();
this.filterType=filter.getClass$().getSimpleName$();
var j=this.filterType.indexOf$S("Filter");
if (j > 0 && j < this.filterType.length$() - 1 ) {
this.filterType=this.filterType.substring$I$I(0, j);
}this.filterType=$I$(12).getString$S("VideoFilter." + this.filterType);
}, 1);

Clazz.newMeth(C$, 'load$S',  function (xml) {
var control=Clazz.new_($I$(2,1).c$$S,[xml]);
var panel=this.b$['org.opensourcephysics.cabrillo.tracker.Undo'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Undo'], []);
var video=panel.getVideo$();
if (video != null ) {
var filters=video.getFilterStack$().getFilters$();
if (this.filterIndex < 0 || this.filterIndex >= filters.size$() ) return;
var filter=filters.get$I(this.filterIndex);
control.loadObject$O(filter);
var inspector=filter.getInspector$();
if (inspector != null ) {
inspector.setVisible$Z(true);
}var clip=panel.getPlayer$().getVideoClip$();
panel.getPlayer$().setStepNumber$I(clip.frameToStep$I(this.frameNumber));
}});

Clazz.newMeth(C$, 'getPresentationName$',  function () {
return $I$(1).getString$S("Undo.Description.Edit") + " " + this.filterType ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Undo, "MyUndoManager", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.undo.UndoManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getUndoEdit$',  function () {
return this.editToBeUndone$();
});

Clazz.newMeth(C$, 'getRedoEdit$',  function () {
return this.editToBeRedone$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
