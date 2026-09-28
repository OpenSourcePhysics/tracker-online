(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.controls.XML','java.util.TreeMap','org.opensourcephysics.cabrillo.tracker.FilteredPointMass','java.awt.Component','javax.swing.Box','javax.swing.JButton','org.opensourcephysics.controls.XMLControlElement','javax.swing.JPopupMenu','javax.swing.JMenuItem','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.display.OSPRuntime','java.io.File','org.opensourcephysics.media.core.VideoIO','javax.swing.JOptionPane','org.opensourcephysics.tools.DataFunctionPanel','org.opensourcephysics.cabrillo.tracker.TrackDataBuilder','java.util.ArrayList','javajs.async.AsyncDialog','org.opensourcephysics.controls.ListChooser','org.opensourcephysics.tools.Parameter',['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder','.AutoloadManager'],'java.awt.Toolkit','org.opensourcephysics.tools.ToolsRes','org.opensourcephysics.controls.OSPLog']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrackDataBuilder", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.tools.FunctionTool');
C$.$classes$=[['AutoloadManager',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','loadButton','javax.swing.JButton','+saveButton','+autoloadButton','autoloadManager','org.opensourcephysics.cabrillo.tracker.TrackDataBuilder.AutoloadManager']]
,['O',['openIcon','javax.swing.Icon','+saveIcon']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
;C$.superclazz.c$$java_awt_Component$Z$Z.apply(this,[trackerPanel, false, true]);C$.$init$.apply(this);
this.panelID=trackerPanel.getID$();
this.frame=trackerPanel.getTFrame$();
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("panel", trackerPanel);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("function", trackerPanel);
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener("ft_visible", trackerPanel);
var nogos=trackerPanel.getSystemDrawables$();
var nogos2=trackerPanel.getDrawables$Class(Clazz.getClass($I$(5)));
for (var track, $track = trackerPanel.getTracksTemp$().iterator$(); $track.hasNext$()&&((track=($track.next$())),1);) {
if (nogos.contains$O(track) || nogos2.contains$O(track) ) continue;
var panel=trackerPanel.createFunctionPanel$org_opensourcephysics_cabrillo_tracker_TTrack(track);
this.addPanel$S$org_opensourcephysics_tools_FunctionPanel(track.getName$(), panel);
}
trackerPanel.clearTemp$();
this.setHelpPath$S("data_builder_help.html");
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
C$.superclazz.prototype.createGUI$.apply(this, []);
this.createButtons$();
this.setToolbarComponents$java_awt_ComponentA(Clazz.array($I$(6), -1, [this.loadButton, this.saveButton, $I$(7).createHorizontalGlue$(), this.autoloadButton]));
this.setHelpAction$java_awt_event_ActionListener(((P$.TrackDataBuilder$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TrackDataBuilder$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'].frame.showHelp$S$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'].frame, ["datatable#databuilder", 0]);
});
})()
), Clazz.new_(P$.TrackDataBuilder$lambda1.$init$,[this, null])));
});

Clazz.newMeth(C$, 'createButtons$',  function () {
if (C$.openIcon == null ) {
C$.openIcon=$I$(1).getResourceIcon$S$Z("open.gif", true);
C$.saveIcon=$I$(1).getResourceIcon$S$Z("save.gif", true);
}this.loadButton=Clazz.new_($I$(8,1).c$$javax_swing_Icon,[C$.openIcon]);
this.loadButton.addActionListener$java_awt_event_ActionListener(((P$.TrackDataBuilder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackDataBuilder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'].loadXMLFromDialog$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'], []);
});
})()
), Clazz.new_(P$.TrackDataBuilder$1.$init$,[this, null])));
this.saveButton=Clazz.new_($I$(8,1).c$$javax_swing_Icon,[C$.saveIcon]);
var saveBuilderAction=((P$.TrackDataBuilder$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackDataBuilder$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var control=Clazz.new_($I$(9,1).c$$O,[this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder']]);
this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'].chooseBuilderDataFunctions$org_opensourcephysics_controls_XMLControl$S$java_util_Collection$java_awt_event_ActionListener.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'], [control, "Save", null, ((P$.TrackDataBuilder$2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackDataBuilder$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'].saveBuilderAction$org_opensourcephysics_controls_XMLControl.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'], [this.$finals$.control]);
});
})()
), Clazz.new_(P$.TrackDataBuilder$2$1.$init$,[this, {control:control}]))]);
});
})()
), Clazz.new_(P$.TrackDataBuilder$2.$init$,[this, null]));
var savePanelAction=((P$.TrackDataBuilder$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackDataBuilder$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var control=Clazz.new_([this.b$['org.opensourcephysics.tools.FunctionTool'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], [])],$I$(9,1).c$$O);
this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'].choosePanelDataFunctions$org_opensourcephysics_controls_XMLControl$S$java_util_Collection$java_awt_event_ActionListener.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'], [control, "Save", null, ((P$.TrackDataBuilder$3$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackDataBuilder$3$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'].savePanelAction$org_opensourcephysics_controls_XMLControl.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'], [this.$finals$.control]);
});
})()
), Clazz.new_(P$.TrackDataBuilder$3$1.$init$,[this, {control:control}]))]);
});
})()
), Clazz.new_(P$.TrackDataBuilder$3.$init$,[this, null]));
this.saveButton.addActionListener$java_awt_event_ActionListener(((P$.TrackDataBuilder$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackDataBuilder$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var popup=Clazz.new_($I$(10,1));
var item=Clazz.new_([$I$(2).getString$S("TrackDataBuilder.MenuItem.SaveAll.Text")],$I$(11,1).c$$S);
item.setToolTipText$S($I$(2).getString$S("TrackDataBuilder.MenuItem.SaveAll.Tooltip"));
popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(this.$finals$.saveBuilderAction);
var s=" " + this.b$['org.opensourcephysics.tools.FunctionTool'].getSelectedPanel$.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], []).getName$();
item=Clazz.new_([$I$(2).getString$S("TrackDataBuilder.MenuItem.SaveOnly.Text") + s],$I$(11,1).c$$S);
item.setToolTipText$S($I$(2).getString$S("TrackDataBuilder.MenuItem.SaveOnly.Tooltip"));
popup.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(this.$finals$.savePanelAction);
$I$(12,"setFonts$O$I",[popup, $I$(12).getLevel$()]);
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'].saveButton, 0, this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'].saveButton.getHeight$());
});
})()
), Clazz.new_(P$.TrackDataBuilder$4.$init$,[this, {saveBuilderAction:saveBuilderAction,savePanelAction:savePanelAction}])));
this.autoloadButton=Clazz.new_($I$(8,1));
this.autoloadButton.addActionListener$java_awt_event_ActionListener(((P$.TrackDataBuilder$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackDataBuilder$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var manager=this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'].getAutoloadManager$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'], []);
manager.refreshAutoloadData$();
manager.setVisible$Z(true);
});
})()
), Clazz.new_(P$.TrackDataBuilder$5.$init$,[this, null])));
});

Clazz.newMeth(C$, 'savePanelAction$org_opensourcephysics_controls_XMLControl',  function (control) {
var chooser=$I$(13,"createChooser$S$S$SA",[$I$(2).getString$S("TrackerPanel.DataBuilder.Save.Title"), $I$(2).getString$S("TrackerPanel.DataBuilder.Chooser.XMLFiles"), Clazz.array(String, -1, ["xml"])]);
var result=chooser.showSaveDialog$java_awt_Component(this);
if (result == 0) {
$I$(13).chooserDir=chooser.getCurrentDirectory$().toString();
var file=chooser.getSelectedFile$();
var fileName=file.getAbsolutePath$();
if (!"xml".equals$O($I$(3).getExtension$S(fileName))) {
fileName=$I$(3).stripExtension$S(fileName) + ".xml";
file=Clazz.new_($I$(14,1).c$$S,[fileName]);
}if (!$I$(15).canWrite$java_io_File(file)) {
return;
}control.write$S(fileName);
}});

Clazz.newMeth(C$, 'saveBuilderAction$org_opensourcephysics_controls_XMLControl',  function (control) {
var chooser=$I$(13,"createChooser$S$S$SA",[$I$(2).getString$S("TrackerPanel.DataBuilder.Save.Title"), $I$(2).getString$S("TrackerPanel.DataBuilder.Chooser.XMLFiles"), Clazz.array(String, -1, ["xml"])]);
var result=chooser.showSaveDialog$java_awt_Component(this);
if (result == 0) {
$I$(13).chooserDir=chooser.getCurrentDirectory$().toString();
var file=chooser.getSelectedFile$();
var fileName=file.getAbsolutePath$();
if (!"xml".equals$O($I$(3).getExtension$S(fileName))) {
fileName=$I$(3).stripExtension$S(fileName) + ".xml";
file=Clazz.new_($I$(14,1).c$$S,[fileName]);
}if (!$I$(15).canWrite$java_io_File(file)) {
return;
}control.write$S(fileName);
}});

Clazz.newMeth(C$, 'loadXMLFromDialog$',  function () {
var chooser=$I$(13,"createChooser$S$S$SA",[$I$(2).getString$S("TrackerPanel.DataBuilder.Load.Title"), $I$(2).getString$S("TrackerPanel.DataBuilder.Chooser.XMLFiles"), Clazz.array(String, -1, ["xml"])]);
chooser.showOpenDialog$java_awt_Component$Runnable$Runnable(this, ((P$.TrackDataBuilder$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackDataBuilder$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(13).chooserDir=this.$finals$.chooser.getCurrentDirectory$().toString();
var control=Clazz.new_([this.$finals$.chooser.getSelectedFile$()],$I$(9,1).c$$java_io_File);
if (control.failedToRead$()) {
$I$(16,"showMessageDialog$java_awt_Component$O$S$I",[this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'].frame, $I$(2).getString$S("Tracker.Dialog.Invalid.Message"), $I$(2).getString$S("Tracker.Dialog.Invalid.Title"), 0]);
return;
}var type=control.getObjectClass$();
if (Clazz.getClass($I$(17)).isAssignableFrom$Class(type)) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'].loadXMLDataFunction$org_opensourcephysics_controls_XMLControl.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'], [control]);
} else if (Clazz.getClass($I$(18)).isAssignableFrom$Class(type)) {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'].loadXMLTrackData$org_opensourcephysics_controls_XMLControl.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'], [control]);
} else {
$I$(16,"showMessageDialog$java_awt_Component$O$S$I",[this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'].frame, $I$(2).getString$S("TrackerPanel.DataBuilder.Dialog.WrongType.Message"), $I$(2).getString$S("TrackerPanel.DataBuilder.Dialog.WrongType.Title"), 0]);
}});
})()
), Clazz.new_(P$.TrackDataBuilder$6.$init$,[this, {chooser:chooser}])), null);
});

Clazz.newMeth(C$, 'loadXMLTrackData$org_opensourcephysics_controls_XMLControl',  function (control) {
var dataPanel=this.getSelectedPanel$();
var panelTrackType=dataPanel.getDescription$();
var target=null;
 outerLoop : for (var next, $next = control.getPropsRaw$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.getPropertyName$().equals$O("functions")) {
var panels=next.getChildControls$();
for (var panelControl, $panelControl = 0, $$panelControl = panels; $panelControl<$$panelControl.length&&((panelControl=($$panelControl[$panelControl])),1);$panelControl++) {
var trackType=panelControl.getString$S("description");
if (trackType == null  || panelTrackType == null   || !panelTrackType.equals$O(trackType) ) {
continue;
}target=panelControl;
break outerLoop;
}
}}
var targetControl=target;
var trackType=$I$(2).getString$S("TrackerPanel.DataBuilder.TrackType.Unknown");
if (panelTrackType != null ) trackType=$I$(2,"getString$S",[$I$(3).getExtension$S(panelTrackType) + ".Name"]).toLowerCase$();
if (target == null ) {
$I$(16,"showMessageDialog$java_awt_Component$O$S$I",[this.frame, $I$(2).getString$S("TrackDataBuilder.Dialog.NoFunctionsFound.Message") + " \"" + trackType + ".\"" , $I$(2).getString$S("TrackDataBuilder.Dialog.NoFunctionsFound.Title"), 0]);
return;
}var finalTarget=target;
var ttype=trackType;
this.choosePanelDataFunctions$org_opensourcephysics_controls_XMLControl$S$java_util_Collection$java_awt_event_ActionListener(target, "Load", null, ((P$.TrackDataBuilder$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackDataBuilder$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (e.getID$() == 1001) {
if (this.$finals$.panelTrackType == null  || this.$finals$.targetControl == null  ) return;
var panelsToLoad=Clazz.new_($I$(19,1));
for (var name, $name = this.b$['org.opensourcephysics.tools.FunctionTool'].getPanelNames$.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], []).iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
var nextPanel=this.b$['org.opensourcephysics.tools.FunctionTool'].getPanel$S.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], [name]);
if (this.$finals$.panelTrackType.equalsIgnoreCase$S(nextPanel.getDescription$())) {
panelsToLoad.add$O(nextPanel);
}}
if (panelsToLoad.size$() <= 1) {
this.$finals$.finalTarget.loadObject$O(this.$finals$.dataPanel);
} else {
var options=Clazz.array(String, -1, [$I$(2).getString$S("TrackerPanel.DataBuilder.Dialog.Load.Button.All"), $I$(2).getString$S("TrackerPanel.DataBuilder.Dialog.Load.Button.Only") + " " + this.$finals$.dataPanel.getName$() , $I$(2).getString$S("Dialog.Button.Cancel")]);
Clazz.new_($I$(20,1)).showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O$java_awt_event_ActionListener(this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'], $I$(2).getString$S("TrackerPanel.DataBuilder.Dialog.Load.Message") + " \"" + this.$finals$.ttype + "\"?" , $I$(2).getString$S("TrackerPanel.DataBuilder.Dialog.Load.Title"), -1, 3, null, options, options[0], ((P$.TrackDataBuilder$7$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackDataBuilder$7$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
switch (e.getActionCommand$()) {
case "0":
for (var nextPanel, $nextPanel = this.$finals$.panelsToLoad.iterator$(); $nextPanel.hasNext$()&&((nextPanel=($nextPanel.next$())),1);) {
this.$finals$.targetControl.loadObject$O(nextPanel);
}
break;
case "1":
this.$finals$.targetControl.loadObject$O(this.$finals$.dataPanel);
break;
}
});
})()
), Clazz.new_(P$.TrackDataBuilder$7$1.$init$,[this, {panelsToLoad:panelsToLoad,targetControl:this.$finals$.targetControl,dataPanel:this.$finals$.dataPanel}])));
}}});
})()
), Clazz.new_(P$.TrackDataBuilder$7.$init$,[this, {finalTarget:finalTarget,ttype:ttype,panelTrackType:panelTrackType,targetControl:targetControl,dataPanel:dataPanel}])));
});

Clazz.newMeth(C$, 'loadXMLDataFunction$org_opensourcephysics_controls_XMLControl',  function (control) {
var dataPanel=this.getSelectedPanel$();
var panelType=null;
var controlType=null;
try {
panelType=Clazz.forName(dataPanel.getDescription$());
controlType=Clazz.forName(control.getString$S("description"));
} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassNotFoundException")){
} else {
throw ex;
}
}
var trackType=$I$(2).getString$S("TrackerPanel.DataBuilder.TrackType.Unknown");
if (controlType != null ) trackType=$I$(2,"getString$S",[controlType.getSimpleName$() + ".Name"]).toLowerCase$();
if (controlType !== panelType  && panelType != null  ) {
var targetType=$I$(2,"getString$S",[panelType.getSimpleName$() + ".Name"]).toLowerCase$();
$I$(16,"showMessageDialog$java_awt_Component$O$S$I",[this.frame, $I$(2).getString$S("TrackerPanel.DataBuilder.Dialog.WrongTrackType.Message1") + " \"" + trackType + ".\"" + "\n" + $I$(2).getString$S("TrackerPanel.DataBuilder.Dialog.WrongTrackType.Message2") + " \"" + targetType + ".\"" , $I$(2).getString$S("TrackerPanel.DataBuilder.Dialog.WrongTrackType.Title"), 0]);
return;
}var ptype=panelType;
var ctype=controlType;
var ttype=trackType;
this.choosePanelDataFunctions$org_opensourcephysics_controls_XMLControl$S$java_util_Collection$java_awt_event_ActionListener(control, "Load", null, ((P$.TrackDataBuilder$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackDataBuilder$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (e.getID$() == 1001) {
var panelType=this.$finals$.ptype;
var panelsToLoad=Clazz.new_($I$(19,1));
for (var name, $name = this.b$['org.opensourcephysics.tools.FunctionTool'].getPanelNames$.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], []).iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
var nextPanel=this.b$['org.opensourcephysics.tools.FunctionTool'].getPanel$S.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], [name]);
try {
panelType=Clazz.forName(nextPanel.getDescription$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassNotFoundException")){
} else {
throw ex;
}
}
if (panelType === this.$finals$.ctype ) {
panelsToLoad.add$O(nextPanel);
}}
if (panelsToLoad.size$() <= 1) {
this.$finals$.control.loadObject$O(this.$finals$.dataPanel);
} else {
var options=Clazz.array(String, -1, [$I$(2).getString$S("TrackerPanel.DataBuilder.Dialog.Load.Button.All"), $I$(2).getString$S("TrackerPanel.DataBuilder.Dialog.Load.Button.Only") + " " + this.$finals$.dataPanel.getName$() , $I$(2).getString$S("Dialog.Button.Cancel")]);
Clazz.new_($I$(20,1)).showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O$java_awt_event_ActionListener(this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'], $I$(2).getString$S("TrackerPanel.DataBuilder.Dialog.Load.Message") + " \"" + this.$finals$.ttype + "\"?" , $I$(2).getString$S("TrackerPanel.DataBuilder.Dialog.Load.Title"), -1, 3, null, options, options[0], ((P$.TrackDataBuilder$8$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackDataBuilder$8$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
switch (e.getActionCommand$()) {
case "0":
for (var nextPanel, $nextPanel = this.$finals$.panelsToLoad.iterator$(); $nextPanel.hasNext$()&&((nextPanel=($nextPanel.next$())),1);) {
this.$finals$.control.loadObject$O(nextPanel);
}
break;
case "1":
this.$finals$.control.loadObject$O(this.$finals$.dataPanel);
break;
}
});
})()
), Clazz.new_(P$.TrackDataBuilder$8$1.$init$,[this, {control:this.$finals$.control,panelsToLoad:panelsToLoad,dataPanel:this.$finals$.dataPanel}])));
}}});
})()
), Clazz.new_(P$.TrackDataBuilder$8.$init$,[this, {ptype:ptype,control:control,ttype:ttype,ctype:ctype,dataPanel:dataPanel}])));
});

Clazz.newMeth(C$, 'setTitles$',  function () {
this.dropdownTipText=($I$(2).getString$S("TrackerPanel.DataBuilder.Dropdown.Tooltip"));
this.titleText=($I$(2).getString$S("TrackerPanel.DataBuilder.Title"));
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
if (!this.haveGUI$()) return;
C$.superclazz.prototype.refreshGUI$.apply(this, []);
if (this.loadButton != null ) {
var panel=this.getSelectedPanel$();
this.loadButton.setEnabled$Z(panel != null );
this.saveButton.setEnabled$Z(panel != null );
this.loadButton.setToolTipText$S($I$(2).getString$S("TrackerPanel.DataBuilder.Button.Load.Tooltip"));
this.saveButton.setToolTipText$S($I$(2).getString$S("TrackerPanel.DataBuilder.Button.Save.Tooltip"));
this.autoloadButton.setText$S($I$(2).getString$S("TrackerPanel.DataBuilder.Button.Autoload") + "...");
this.autoloadButton.setToolTipText$S($I$(2).getString$S("TrackerPanel.DataBuilder.Button.Autoload.Tooltip"));
}this.setFontLevel$I($I$(12).getLevel$());
if (this.autoloadManager != null ) {
this.autoloadManager.refreshGUI$();
}});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
if (this.autoloadButton == null ) return;
$I$(12,"setFonts$O$I",[Clazz.array(java.lang.Object, -1, [this.loadButton, this.saveButton, this.autoloadButton]), level]);
if (!this.trackFunctionPanels.isEmpty$()) {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var tracks=trackerPanel.getTracksTemp$();
var panel;
var track;
for (var name, $name = this.trackFunctionPanels.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
if ((panel=this.trackFunctionPanels.get$O(name)) != null  && (track=trackerPanel.getTrack$S$java_util_ArrayList(name, tracks)) != null  ) {
panel.setIcon$javax_swing_Icon(track.getIcon$I$I$S(21, 16, "point"));
}}
tracks.clear$();
}C$.superclazz.prototype.setFontLevel$I.apply(this, [level]);
this.validate$();
this.autoloadButton.revalidate$();
});

Clazz.newMeth(C$, 'addPanel$S$org_opensourcephysics_tools_FunctionPanel',  function (name, panel) {
C$.superclazz.prototype.addPanel$S$org_opensourcephysics_tools_FunctionPanel.apply(this, [name, panel]);
if (!$I$(1).haveDataFunctions$()) return;
var trackType=null;
try {
trackType=Clazz.forName(panel.getDescription$());
$I$(1).loadControlStringObjects$Class$org_opensourcephysics_tools_FunctionPanel(trackType, panel);
$I$(1).loadControls$Class$org_opensourcephysics_tools_FunctionPanel(trackType, panel);
} catch (e) {
e.printStackTrace$();
}
});

Clazz.newMeth(C$, 'choosePanelDataFunctions$org_opensourcephysics_controls_XMLControl$S$java_util_Collection$java_awt_event_ActionListener',  function (control, description, selectedFunctions, listener) {
var originals=Clazz.new_($I$(19,1));
var choices=Clazz.new_($I$(19,1));
var names=Clazz.new_($I$(19,1));
var expressions=Clazz.new_($I$(19,1));
var functions=control.getObject$S("functions");
for (var next, $next = functions.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var $function=next;
originals.add$O($function);
choices.add$O($function);
names.add$O($function[0]);
expressions.add$O($function[1]);
}
var selected=Clazz.array(Boolean.TYPE, [choices.size$()]);
for (var i=0; i < selected.length; i++) {
selected[i]=true;
}
var listChooser=Clazz.new_([$I$(2).getString$S("TrackerPanel.DataBuilder." + description + ".Title" ), $I$(2).getString$S("TrackerPanel.DataBuilder." + description + ".Message" ), this, ((P$.TrackDataBuilder$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackDataBuilder$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (e.getID$() == 1001) {
for (var next, $next = this.$finals$.originals.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (!this.$finals$.choices.contains$O(next)) {
this.$finals$.functions.remove$O(next);
}}
this.$finals$.control.setValue$S$O("functions", this.$finals$.functions);
}this.$finals$.listener.actionPerformed$java_awt_event_ActionEvent(e);
});
})()
), Clazz.new_(P$.TrackDataBuilder$9.$init$,[this, {control:control,listener:listener,originals:originals,choices:choices,functions:functions}]))],$I$(21,1).c$$S$S$javax_swing_JDialog$java_awt_event_ActionListener);
listChooser.setSeparator$S(" = ");
listChooser.choose$java_util_Collection$java_util_Collection$java_util_Collection$java_util_Collection$ZA$ZA(choices, names, expressions, null, selected, null);
});

Clazz.newMeth(C$, 'chooseBuilderDataFunctions$org_opensourcephysics_controls_XMLControl$S$java_util_Collection$java_awt_event_ActionListener',  function (control, description, selectedFunctions, listener) {
var originals=Clazz.new_($I$(19,1));
var choices=Clazz.new_($I$(19,1));
var names=Clazz.new_($I$(19,1));
var expressions=Clazz.new_($I$(19,1));
var trackTypes=Clazz.new_($I$(19,1));
var xmlControlMap=Clazz.new_($I$(4,1));
var parameterMap=Clazz.new_($I$(4,1));
var functionMap=Clazz.new_($I$(4,1));
for (var prop, $prop = control.getPropsRaw$().iterator$(); $prop.hasNext$()&&((prop=($prop.next$())),1);) {
for (var xmlControl, $xmlControl = 0, $$xmlControl = prop.getChildControls$(); $xmlControl<$$xmlControl.length&&((xmlControl=($$xmlControl[$xmlControl])),1);$xmlControl++) {
if (xmlControl.getObjectClass$() !== Clazz.getClass($I$(17)) ) continue;
var trackType=xmlControl.getString$S("description");
xmlControlMap.put$O$O(trackType, xmlControl);
var functions=functionMap.get$O(trackType);
if (functions == null ) {
functions=Clazz.new_($I$(19,1));
functionMap.put$O$O(trackType, functions);
}var panelFunctions=xmlControl.getObject$S("functions");
 outer : for (var f, $f = panelFunctions.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
for (var existing, $existing = functions.iterator$(); $existing.hasNext$()&&((existing=($existing.next$())),1);) {
if (existing[0].equals$O(f[0])) continue outer;
}
functions.add$O(f);
}
var params=parameterMap.get$O(trackType);
if (params == null ) {
params=Clazz.new_($I$(19,1));
parameterMap.put$O$O(trackType, params);
}var panelParams=xmlControl.getObject$S("user_parameters");
 outer : for (var p, $p = 0, $$p = panelParams; $p<$$p.length&&((p=($$p[$p])),1);$p++) {
if (trackType.endsWith$S("PointMass") && p.getName$().equals$O("m") ) {
continue outer;
}for (var existing, $existing = params.iterator$(); $existing.hasNext$()&&((existing=($existing.next$())),1);) {
if (existing.getName$().equals$O(p.getName$())) continue outer;
}
params.add$O(p);
}
}
}
for (var trackType, $trackType = functionMap.keySet$().iterator$(); $trackType.hasNext$()&&((trackType=($trackType.next$())),1);) {
var functions=functionMap.get$O(trackType);
for (var f, $f = functions.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
originals.add$O(f);
choices.add$O(f);
names.add$O(f[0]);
expressions.add$O(f[1]);
var shortName=$I$(3).getExtension$S(trackType);
var localized=$I$(2).getString$S(shortName + ".Name");
if (!localized.startsWith$S("!")) shortName=localized;
trackTypes.add$O("[" + shortName + "]" );
}
}
var selected=Clazz.array(Boolean.TYPE, [choices.size$()]);
for (var i=0; i < selected.length; i++) {
selected[i]=true;
}
var listChooser=Clazz.new_([$I$(2).getString$S("TrackerPanel.DataBuilder." + description + ".Title" ), $I$(2).getString$S("TrackerPanel.DataBuilder." + description + ".Message" ), this, ((P$.TrackDataBuilder$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackDataBuilder$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (e.getID$() == 1001) {
for (var $function, $$function = this.$finals$.originals.iterator$(); $$function.hasNext$()&&(($function=($$function.next$())),1);) {
if (!this.$finals$.choices.contains$O($function)) {
for (var trackType, $trackType = this.$finals$.xmlControlMap.keySet$().iterator$(); $trackType.hasNext$()&&((trackType=($trackType.next$())),1);) {
var functions=this.$finals$.functionMap.get$O(trackType);
functions.remove$O($function);
}
}}
for (var trackType, $trackType = this.$finals$.xmlControlMap.keySet$().iterator$(); $trackType.hasNext$()&&((trackType=($trackType.next$())),1);) {
var functions=this.$finals$.functionMap.get$O(trackType);
var paramList=this.$finals$.parameterMap.get$O(trackType);
var params=paramList.toArray$OA(Clazz.array($I$(22), [paramList.size$()]));
var xmlControl=this.$finals$.xmlControlMap.get$O(trackType);
xmlControl.setValue$S$O("functions", functions);
xmlControl.setValue$S$O("user_parameters", params);
}
for (var next, $next = this.$finals$.control.getPropertyContent$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (Clazz.instanceOf(next, "org.opensourcephysics.controls.XMLProperty") && (next).getPropertyName$().equals$O("functions") ) {
var panels=next;
var content=panels.getPropertyContent$();
var toRemove=Clazz.new_($I$(19,1));
for (var child, $child = content.iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
var xmlControl=(child).getChildControls$()[0];
if (!this.$finals$.xmlControlMap.values$().contains$O(xmlControl)) {
toRemove.add$O(child);
} else {
var functions=xmlControl.getObject$S("functions");
if (functions == null  || functions.isEmpty$() ) {
toRemove.add$O(child);
}}}
for (var remove, $remove = toRemove.iterator$(); $remove.hasNext$()&&((remove=($remove.next$())),1);) {
content.remove$O(remove);
}
}}
}this.$finals$.listener.actionPerformed$java_awt_event_ActionEvent(e);
});
})()
), Clazz.new_(P$.TrackDataBuilder$10.$init$,[this, {functionMap:functionMap,originals:originals,choices:choices,parameterMap:parameterMap,control:control,listener:listener,xmlControlMap:xmlControlMap}]))],$I$(21,1).c$$S$S$javax_swing_JDialog$java_awt_event_ActionListener);
listChooser.setSeparator$S(" = ");
listChooser.choose$java_util_Collection$java_util_Collection$java_util_Collection$java_util_Collection$ZA$ZA(choices, names, expressions, trackTypes, selected, null);
});

Clazz.newMeth(C$, 'getAutoloadManager$',  function () {
if (this.autoloadManager == null ) {
this.autoloadManager=Clazz.new_($I$(23,1).c$$javax_swing_JDialog,[this, null, this]);
var dim=$I$(24).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.autoloadManager.getBounds$().width)/2|0);
var y=((dim.height - this.autoloadManager.getBounds$().height)/2|0);
this.autoloadManager.setLocation$I$I(x, y);
if ($I$(1).haveDataFunctions$()) $I$(1,"loadControlStrings$Runnable",[((P$.TrackDataBuilder$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackDataBuilder$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'].autoloadManager.refreshAutoloadData$();
});
})()
), Clazz.new_(P$.TrackDataBuilder$11.$init$,[this, null]))]);
}this.autoloadManager.setFontLevel$I($I$(12).getLevel$());
return this.autoloadManager;
});

Clazz.newMeth(C$, 'addPanelWithoutAutoloading$S$org_opensourcephysics_tools_FunctionPanel',  function (name, panel) {
C$.superclazz.prototype.addPanel$S$org_opensourcephysics_tools_FunctionPanel.apply(this, [name, panel]);
});

Clazz.newMeth(C$, 'dispose$',  function () {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("panel", trackerPanel);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("function", trackerPanel);
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener("ft_visible", trackerPanel);
$I$(25).removePropertyChangeListener$S$java_beans_PropertyChangeListener("locale", this);
if (this.autoloadManager != null ) {
this.autoloadManager.dispose$();
}for (var key, $key = this.trackFunctionPanels.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var next=this.trackFunctionPanels.get$O(key);
next.setFunctionTool$org_opensourcephysics_tools_FunctionTool(null);
}
this.clearPanels$();
this.selectedPanel=null;
if (trackerPanel != null ) trackerPanel.dataBuilder=null;
trackerPanel=null;
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'finalize$',  function () {
$I$(26).finalized$O(this);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TrackDataBuilder, "AutoloadManager", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.opensourcephysics.tools.AbstractAutoloadManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_JDialog',  function (dialog) {
;C$.superclazz.c$$javax_swing_JDialog.apply(this,[dialog]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
if (!vis) {
$I$(1).autoloadDataFunctions$();
$I$(1).savePreferences$();
for (var name, $name = this.b$['org.opensourcephysics.tools.FunctionTool'].getPanelNames$.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], []).iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
var panel=this.b$['org.opensourcephysics.tools.FunctionTool'].getPanel$S.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], [name]);
this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'].addPanel$S$org_opensourcephysics_tools_FunctionPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'], [name, panel]);
}
var searchPaths=this.getSearchPaths$();
var defaultPaths=$I$(1).getDefaultAutoloadSearchPaths$();
var isDefault=searchPaths.size$() == defaultPaths.size$();
for (var next, $next = searchPaths.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
isDefault=isDefault && defaultPaths.contains$O(next) ;
}
if (isDefault) {
$I$(1).preferredAutoloadSearchPaths=null;
} else {
$I$(1).preferredAutoloadSearchPaths=searchPaths.toArray$OA(Clazz.array(String, [searchPaths.size$()]));
}}});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.refreshAutoloadData$();
C$.superclazz.prototype.refreshGUI$.apply(this, []);
var title=this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'].getTitle$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TrackDataBuilder'], []) + " " + this.getTitle$() ;
this.setTitle$S(title);
this.setInstructions$S($I$(2).getString$S("TrackDataBuilder.Instructions.SelectToAutoload") + "\n\n" + $I$(2).getString$S("TrackDataBuilder.Instructions.WhereDefined") + " " + $I$(2).getString$S("TrackDataBuilder.Instructions.HowToAddFunction") + " " + $I$(2).getString$S("TrackDataBuilder.Instructions.HowToAddDirectory") );
});

Clazz.newMeth(C$, 'getLocalizedTrackName$S',  function (trackClass) {
var trackName=$I$(3).getExtension$S(trackClass);
var localized=$I$(2).getString$S(trackName + ".Name");
if (!localized.startsWith$S("!")) trackName=localized;
return trackName;
});

Clazz.newMeth(C$, 'refreshAutoloadData$',  function () {
var data=Clazz.new_($I$(4,1));
for (var path, $path = this.getSearchPaths$().iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
var functionMap=$I$(1).findDataFunctions$S(path);
data.put$O$O(path, functionMap);
}
this.setAutoloadData$java_util_Map(data);
});

Clazz.newMeth(C$, 'getSearchPaths$',  function () {
var paths=C$.superclazz.prototype.getSearchPaths$.apply(this, []);
if (paths.isEmpty$() && !this.$initialized ) {
this.$initialized=true;
for (var next, $next = $I$(1).getInitialSearchPaths$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
paths.add$O(next);
this.addSearchPath$S(next);
}
}return paths;
});

Clazz.newMeth(C$, 'getExclusionsMap$',  function () {
return $I$(1).autoloadMap;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
