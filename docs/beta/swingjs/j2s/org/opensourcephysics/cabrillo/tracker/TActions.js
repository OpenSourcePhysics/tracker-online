(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.util.HashMap','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.media.TrackerCamera','javax.swing.AbstractAction','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.cabrillo.tracker.LibraryBrowserDragHandler','org.opensourcephysics.cabrillo.tracker.TrackerIO','org.opensourcephysics.cabrillo.tracker.TActions','org.opensourcephysics.cabrillo.tracker.ExportZipDialog',['org.opensourcephysics.cabrillo.tracker.TrackerIO','.ComponentImage'],'org.opensourcephysics.cabrillo.tracker.TFrame','javax.swing.SwingUtilities','org.opensourcephysics.cabrillo.tracker.AnalyticParticle','org.opensourcephysics.cabrillo.tracker.DynamicParticle','org.opensourcephysics.cabrillo.tracker.DynamicParticlePolar','org.opensourcephysics.cabrillo.tracker.DynamicSystem','org.opensourcephysics.cabrillo.tracker.RGBRegion','org.opensourcephysics.cabrillo.tracker.LineProfile','org.opensourcephysics.cabrillo.tracker.Calibration','org.opensourcephysics.cabrillo.tracker.OffsetOrigin','org.opensourcephysics.cabrillo.tracker.VectorSum','org.opensourcephysics.cabrillo.tracker.Vector','org.opensourcephysics.cabrillo.tracker.CenterOfMass','org.opensourcephysics.cabrillo.tracker.TapeMeasure','org.opensourcephysics.cabrillo.tracker.CircleFitter','org.opensourcephysics.cabrillo.tracker.Protractor','org.opensourcephysics.cabrillo.tracker.PointMass','javax.swing.JOptionPane','java.util.ArrayList','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.cabrillo.tracker.PerspectiveTrack','org.opensourcephysics.cabrillo.tracker.Undo']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TActions");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer']]
,['S',['newline']]]

Clazz.newMeth(C$, 'createActions$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
return p$1.getActions.apply(Clazz.new_(C$.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel,[trackerPanel]), []);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
;C$.$init$.apply(this);
this.frame=trackerPanel.getTFrame$();
this.panelID=trackerPanel.getID$();
}, 1);

Clazz.newMeth(C$, 'panel$',  function () {
return (this.frame == null  ? null : this.frame.getTrackerPanelForID$Integer(this.panelID));
});

Clazz.newMeth(C$, 'getActions',  function () {
var actions=Clazz.new_($I$(1,1));
actions.put$O$O("captureVideo", ((P$.TActions$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if ($I$(2).isJS) {
Clazz.new_($I$(3,1).c$$org_opensourcephysics_cabrillo_tracker_TFrame,[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].frame]);
}});
})()
), Clazz.new_($I$(4,1),[this, null],P$.TActions$1)));
actions.put$O$O("clearTracks", ((P$.TActions$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []).checkAndClearTracks$();
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.ClearTracks")],$I$(4,1).c$$S,P$.TActions$2)));
actions.put$O$O("newTab", C$.getAsyncAction$javax_swing_AbstractAction$Z(((P$.TActions$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].frame != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].frame.addTrackerPanel$Z$Runnable(true, null);
}});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.NewTab")],$I$(4,1).c$$S,P$.TActions$3)), true));
actions.put$O$O("paste", ((P$.TActions$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if ($I$(2).isJS) {
this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []).getPasteDataDialog$().setVisible$Z(true);
} else {
$I$(2,"paste$java_util_function_Consumer",[((P$.TActions$4$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TActions$4$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$S','accept$O'],  function (data) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []).doPaste$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []), [data]);
});
})()
), Clazz.new_(P$.TActions$4$lambda1.$init$,[this, null]))]);
}});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.Paste")],$I$(4,1).c$$S,P$.TActions$4)));
actions.put$O$O("open", ((P$.TActions$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []).setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []).selectedSteps.clear$();
if (this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].frame != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].frame.doOpenFileFromDialog$();
}});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.Open"), $I$(6).getResourceIcon$S$Z("open.gif", true)],$I$(4,1).c$$S$javax_swing_Icon,P$.TActions$5)));
actions.put$O$O("openURL", ((P$.TActions$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []).openURLFromDialog$();
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.OpenURL")],$I$(4,1).c$$S,P$.TActions$6)));
actions.put$O$O("openBrowser", C$.getAsyncAction$javax_swing_AbstractAction$Z(((P$.TActions$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].frame != null ) {
$I$(7).openLibraryBrowser$org_opensourcephysics_cabrillo_tracker_TFrame(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].frame);
}});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.OpenBrowser")],$I$(4,1).c$$S,P$.TActions$7)), true));
actions.put$O$O("properties", ((P$.TActions$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].frame != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].frame.getPropertiesDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])).setVisible$Z(true);
}});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.Properties")],$I$(4,1).c$$S,P$.TActions$8)));
actions.put$O$O("close", ((P$.TActions$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].frame != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].frame.doCloseAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []));
}});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.Close")],$I$(4,1).c$$S,P$.TActions$9)));
actions.put$O$O("closeAll", ((P$.TActions$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].frame != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].frame.removeAllTabs$Z(false);
}});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.CloseAll")],$I$(4,1).c$$S,P$.TActions$10)));
actions.put$O$O("import", ((P$.TActions$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(8,"importFile$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.ImportTRK")],$I$(4,1).c$$S,P$.TActions$11)));
actions.put$O$O("importData", ((P$.TActions$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9,"dataTrackActionAsync$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.ImportData")],$I$(4,1).c$$S,P$.TActions$12)));
actions.put$O$O("save", ((P$.TActions$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []);
$I$(8,"save$java_io_File$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[trackerPanel.getDataFile$(), trackerPanel]);
trackerPanel.refreshNotesDialog$();
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.Save"), $I$(6).getResourceIcon$S$Z("save.gif", true)],$I$(4,1).c$$S$javax_swing_Icon,P$.TActions$13)));
actions.put$O$O("saveAs", ((P$.TActions$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []);
$I$(8).save$java_io_File$org_opensourcephysics_cabrillo_tracker_TrackerPanel(null, trackerPanel);
trackerPanel.refreshNotesDialog$();
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.SaveAs")],$I$(4,1).c$$S,P$.TActions$14)));
actions.put$O$O("saveZip", ((P$.TActions$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(10,"getDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]).setVisible$Z(true);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.SaveZip") + "...", $I$(6).getResourceIcon$S$Z("save_zip2.gif", true)],$I$(4,1).c$$S$javax_swing_Icon,P$.TActions$15)));
actions.put$O$O("saveTabsetAs", ((P$.TActions$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []);
$I$(8,"saveTabset$java_io_File$org_opensourcephysics_cabrillo_tracker_TFrame",[null, trackerPanel.getTFrame$()]);
trackerPanel.refreshNotesDialog$();
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.SaveFrame")],$I$(4,1).c$$S,P$.TActions$16)));
actions.put$O$O("saveVideo", ((P$.TActions$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(8,"saveVideo$java_io_File$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z$Z",[null, this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []), false, true]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.SaveVideoAs")],$I$(4,1).c$$S,P$.TActions$17)));
actions.put$O$O("export", ((P$.TActions$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(8,"exportXMLFile$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.ImportTRK")],$I$(4,1).c$$S,P$.TActions$18)));
actions.put$O$O("deleteTrack", ((P$.TActions$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var track=this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []).getTrack$S(e.getActionCommand$());
if (track != null ) track.delete$();
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.Delete")],$I$(4,1).c$$S,P$.TActions$19)));
actions.put$O$O("config", ((P$.TActions$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].frame.showPrefsDialog$();
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.Config")],$I$(4,1).c$$S,P$.TActions$20)));
actions.put$O$O("axesVisible", ((P$.TActions$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []).toggleAxesVisible$();
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.AxesVisible"), $I$(6).getResourceIcon$S$Z("axes.gif", true)],$I$(4,1).c$$S$javax_swing_Icon,P$.TActions$21)));
actions.put$O$O("videoFilter", C$.getAsyncAction$javax_swing_AbstractAction$Z(((P$.TActions$22||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []).addVideoFilter$S(e.getActionCommand$());
});
})()
), Clazz.new_($I$(4,1),[this, null],P$.TActions$22)), true));
actions.put$O$O("aboutVideo", ((P$.TActions$23||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].frame != null ) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []);
var dialog=this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].frame.getPropertiesDialog$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
if (trackerPanel.getVideo$() != null ) dialog.tabbedPane.setSelectedIndex$I(trackerPanel.openedFromPath == null  ? 0 : 1);
dialog.setVisible$Z(true);
}});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.AboutVideo")],$I$(4,1).c$$S,P$.TActions$23)));
actions.put$O$O("print", ((P$.TActions$24||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
Clazz.new_([this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])],$I$(11,1).c$$java_awt_Component).print$();
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.Print")],$I$(4,1).c$$S,P$.TActions$24)));
actions.put$O$O("exit", ((P$.TActions$25||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9,"exitAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.Exit")],$I$(4,1).c$$S,P$.TActions$25)));
actions.put$O$O("pointMass", C$.getAsyncAction$javax_swing_AbstractAction$Z(((P$.TActions$26||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9,"pointMassAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("PointMass.Name")],$I$(4,1).c$$S,P$.TActions$26)), true));
actions.put$O$O("cm", C$.getAsyncAction$javax_swing_AbstractAction$Z(((P$.TActions$27||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9,"cmAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("CenterOfMass.Name")],$I$(4,1).c$$S,P$.TActions$27)), true));
actions.put$O$O("vector", C$.getAsyncAction$javax_swing_AbstractAction$Z(((P$.TActions$28||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9,"vectorAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("Vector.Name")],$I$(4,1).c$$S,P$.TActions$28)), true));
actions.put$O$O("vectorSum", C$.getAsyncAction$javax_swing_AbstractAction$Z(((P$.TActions$29||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9,"vectorSumAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("VectorSum.Name")],$I$(4,1).c$$S,P$.TActions$29)), true));
actions.put$O$O("offsetOrigin", C$.getAsyncAction$javax_swing_AbstractAction$Z(((P$.TActions$30||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9,"offsetOriginAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("OffsetOrigin.Name")],$I$(4,1).c$$S,P$.TActions$30)), true));
actions.put$O$O("calibration", C$.getAsyncAction$javax_swing_AbstractAction$Z(((P$.TActions$31||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9,"calibrationAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("Calibration.Name")],$I$(4,1).c$$S,P$.TActions$31)), true));
actions.put$O$O("lineProfile", C$.getAsyncAction$javax_swing_AbstractAction$Z(((P$.TActions$32||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9,"lineProfileAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("LineProfile.Name")],$I$(4,1).c$$S,P$.TActions$32)), true));
actions.put$O$O("rgbRegion", C$.getAsyncAction$javax_swing_AbstractAction$Z(((P$.TActions$33||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9,"rgbRegionAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("RGBRegion.Name")],$I$(4,1).c$$S,P$.TActions$33)), true));
actions.put$O$O("analyticParticle", C$.getAsyncAction$javax_swing_AbstractAction$Z(((P$.TActions$34||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9,"analyticalParticleAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("AnalyticParticle.Name")],$I$(4,1).c$$S,P$.TActions$34)), true));
actions.put$O$O("dynamicParticle", C$.getAsyncAction$javax_swing_AbstractAction$Z(((P$.TActions$35||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9,"dynamicParticleAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("DynamicParticle.Name")],$I$(4,1).c$$S,P$.TActions$35)), true));
actions.put$O$O("dynamicParticlePolar", C$.getAsyncAction$javax_swing_AbstractAction$Z(((P$.TActions$36||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9,"dynamicParticlePolarAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("DynamicParticlePolar.Name")],$I$(4,1).c$$S,P$.TActions$36)), true));
actions.put$O$O("dynamicSystem", C$.getAsyncAction$javax_swing_AbstractAction$Z(((P$.TActions$37||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9,"dynamicSystemAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("DynamicSystem.Name")],$I$(4,1).c$$S,P$.TActions$37)), true));
actions.put$O$O("tape", C$.getAsyncAction$javax_swing_AbstractAction$Z(((P$.TActions$38||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9,"tapeAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TapeMeasure.Name")],$I$(4,1).c$$S,P$.TActions$38)), true));
actions.put$O$O("protractor", C$.getAsyncAction$javax_swing_AbstractAction$Z(((P$.TActions$39||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9,"protractorAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("Protractor.Name")],$I$(4,1).c$$S,P$.TActions$39)), true));
actions.put$O$O("circleFitter", C$.getAsyncAction$javax_swing_AbstractAction$Z(((P$.TActions$40||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9,"circleFitterAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("CircleFitter.Name")],$I$(4,1).c$$S,P$.TActions$40)), true));
actions.put$O$O("cloneTrack", C$.getAsyncAction$javax_swing_AbstractAction$Z(((P$.TActions$41||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9,"cloneAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel$S",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []), e.getActionCommand$()]);
});
})()
), Clazz.new_($I$(4,1),[this, null],P$.TActions$41)), true));
actions.put$O$O("clearFilters", ((P$.TActions$42||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9,"clearFiltersAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []), true]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.ClearFilters")],$I$(4,1).c$$S,P$.TActions$42)));
actions.put$O$O("dataTrack", ((P$.TActions$43||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(9,"dataTrackActionAsync$org_opensourcephysics_cabrillo_tracker_TrackerPanel",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], [])]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("ParticleDataTrack.Name")],$I$(4,1).c$$S,P$.TActions$43)));
actions.put$O$O("openVideo", ((P$.TActions$44||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(8,"importVideo$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Runnable",[this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []), null]);
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.ImportVideo")],$I$(4,1).c$$S,P$.TActions$44)));
actions.put$O$O("closeVideo", ((P$.TActions$45||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []);
trackerPanel.setVideo$org_opensourcephysics_media_core_Video(null);
$I$(12).repaintT$java_awt_Component(trackerPanel);
trackerPanel.setImageSize$D$D(640, 480);
this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].frame.refreshMenus$org_opensourcephysics_cabrillo_tracker_TrackerPanel$S(trackerPanel, "TActions.openVideo");
});
})()
), Clazz.new_([this, null, $I$(5).getString$S("TActions.Action.CloseVideo")],$I$(4,1).c$$S,P$.TActions$45)));
actions.put$O$O("refFrame", ((P$.TActions$46||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var item=e.getSource$();
this.b$['org.opensourcephysics.cabrillo.tracker.TActions'].panel$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.TActions'], []).setReferenceFrame$S(item.getActionCommand$());
});
})()
), Clazz.new_($I$(4,1),[this, null],P$.TActions$46)));
return actions;
}, p$1);

Clazz.newMeth(C$, 'addTrack$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (t, p) {
t.setDefaultNameAndColor$org_opensourcephysics_cabrillo_tracker_TrackerPanel$S(p, " ");
p.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack(t);
p.setSelectedPoint$org_opensourcephysics_media_core_TPoint(null);
p.selectedSteps.clear$();
p.setSelectedTrack$org_opensourcephysics_cabrillo_tracker_TTrack(t);
return t;
}, 1);

Clazz.newMeth(C$, 'addParticle$org_opensourcephysics_cabrillo_tracker_ParticleModel$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z',  function (model, trackerPanel, isDynamic) {
var builder=model.getModelBuilder$();
if (builder != null ) {
builder.setVisible$Z(false);
}$I$(13,"invokeLater$Runnable",[((P$.TActions$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TActions$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
$I$(9).addTrack$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_TrackerPanel(this.$finals$.model, this.$finals$.trackerPanel);
this.$finals$.model.setStartFrame$I.apply(this.$finals$.model, [this.$finals$.trackerPanel.getPlayer$.apply(this.$finals$.trackerPanel, []).getVideoClip$.apply(this.$finals$.trackerPanel.getPlayer$.apply(this.$finals$.trackerPanel, []), []).getStartFrameNumber$.apply(this.$finals$.trackerPanel.getPlayer$.apply(this.$finals$.trackerPanel, []).getVideoClip$.apply(this.$finals$.trackerPanel.getPlayer$.apply(this.$finals$.trackerPanel, []), []), [])]);
if (this.$finals$.isDynamic) {
(this.$finals$.model).getSystemInspector$.apply((this.$finals$.model), []).setVisible$Z.apply((this.$finals$.model).getSystemInspector$.apply((this.$finals$.model), []), [true]);
}this.$finals$.model.getModelBuilder$.apply(this.$finals$.model, []).refreshDropdown$S.apply(this.$finals$.model.getModelBuilder$.apply(this.$finals$.model, []), [this.$finals$.model.getName$.apply(this.$finals$.model, [])]);
this.$finals$.model.getModelBuilder$.apply(this.$finals$.model, []).setVisible$Z.apply(this.$finals$.model.getModelBuilder$.apply(this.$finals$.model, []), [true]);
});
})()
), Clazz.new_(P$.TActions$lambda1.$init$,[this, {model:model,trackerPanel:trackerPanel,isDynamic:isDynamic}]))]);
}, 1);

Clazz.newMeth(C$, 'analyticalParticleAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
C$.addParticle$org_opensourcephysics_cabrillo_tracker_ParticleModel$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z(Clazz.new_($I$(14,1)), trackerPanel, false);
}, 1);

Clazz.newMeth(C$, 'dynamicParticleAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
C$.addParticle$org_opensourcephysics_cabrillo_tracker_ParticleModel$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z(Clazz.new_($I$(15,1)), trackerPanel, false);
}, 1);

Clazz.newMeth(C$, 'dynamicParticlePolarAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
C$.addParticle$org_opensourcephysics_cabrillo_tracker_ParticleModel$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z(Clazz.new_($I$(16,1)), trackerPanel, false);
}, 1);

Clazz.newMeth(C$, 'dynamicSystemAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
C$.addParticle$org_opensourcephysics_cabrillo_tracker_ParticleModel$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z(Clazz.new_($I$(17,1)), trackerPanel, true);
}, 1);

Clazz.newMeth(C$, 'rgbRegionAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
C$.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_TrackerPanel(Clazz.new_($I$(18,1)), trackerPanel);
if (!$I$(6).markAtCurrentFrame) {
trackerPanel.getPlayer$().setStepNumber$I(0);
}}, 1);

Clazz.newMeth(C$, 'lineProfileAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
C$.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_TrackerPanel(Clazz.new_($I$(19,1)), trackerPanel);
}, 1);

Clazz.newMeth(C$, 'calibrationAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
C$.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_TrackerPanel(Clazz.new_($I$(20,1)), trackerPanel);
trackerPanel.getAxes$().setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'offsetOriginAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
C$.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_TrackerPanel(Clazz.new_($I$(21,1)), trackerPanel);
trackerPanel.getAxes$().setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'vectorSumAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
(C$.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_TrackerPanel(Clazz.new_($I$(22,1)), trackerPanel)).getInspector$().setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'vectorAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
C$.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_TrackerPanel(Clazz.new_($I$(23,1)), trackerPanel);
if (!$I$(6).markAtCurrentFrame) {
trackerPanel.getPlayer$().setStepNumber$I(0);
}}, 1);

Clazz.newMeth(C$, 'cmAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
(C$.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_TrackerPanel(Clazz.new_($I$(24,1)), trackerPanel)).getInspector$().setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'tapeAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var tape=Clazz.new_($I$(25,1));
tape.setReadOnly$Z(true);
tape.getRuler$().setVisible$Z(true);
var mainView=trackerPanel.getTFrame$().getMainView$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
var rect=mainView.scrollPane.getViewport$().getViewRect$();
var xpix=rect.x + (rect.width/2|0);
var ypix=rect.y + (rect.height/2|0);
var x=trackerPanel.pixToX$I(xpix);
var y=trackerPanel.pixToY$I(ypix);
tape.createStep$I$D$D$D$D(0, x - 100, y, x + 100, y);
C$.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_TrackerPanel(tape, trackerPanel);
}, 1);

Clazz.newMeth(C$, 'circleFitterAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
C$.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_TrackerPanel(Clazz.new_($I$(26,1)), trackerPanel);
}, 1);

Clazz.newMeth(C$, 'protractorAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var protractor=Clazz.new_($I$(27,1));
protractor.getRuler$().setVisible$Z(true);
var mainView=trackerPanel.getTFrame$().getMainView$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
var rect=mainView.scrollPane.getViewport$().getViewRect$();
var xpix=rect.x + (rect.width/2|0);
var ypix=rect.y + (rect.height/2|0);
var x=trackerPanel.pixToX$I(xpix);
var y=trackerPanel.pixToY$I(ypix);
var origin=trackerPanel.getAxes$().getOrigin$();
if (Math.abs(origin.x - x) < 20  && Math.abs(origin.y - y) < 20  ) {
x=origin.x;
y=origin.y;
}var step=protractor.getStep$I(0);
C$.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_TrackerPanel(protractor, trackerPanel);
step.moveVertexTo$D$D(x, y);
}, 1);

Clazz.newMeth(C$, 'pointMassAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var pointMass=Clazz.new_($I$(28,1));
C$.addTrack$org_opensourcephysics_cabrillo_tracker_TTrack$org_opensourcephysics_cabrillo_tracker_TrackerPanel(pointMass, trackerPanel);
if (!$I$(6).markAtCurrentFrame) {
trackerPanel.getPlayer$().setStepNumber$I(0);
}var list=trackerPanel.getDrawablesTemp$Class(Clazz.getClass($I$(24)));
if (list.size$() == 1) {
var cm=list.get$I(0);
var result=$I$(29,"showConfirmDialog$java_awt_Component$O$S$I$I",[trackerPanel, "Add " + pointMass.getName$() + " to center of mass \"" + cm.getName$() + "\"?" + C$.newline + "Note: \"" + cm.getName$() + "\" will disappear until  " + pointMass.getName$() + " is marked!" , $I$(5).getString$S("TActions.Dialog.NewPointMass.Title"), 0, 3]);
if (result == 0) {
cm.addMass$org_opensourcephysics_cabrillo_tracker_PointMass(pointMass);
}}list.clear$();
}, 1);

Clazz.newMeth(C$, 'dataTrackActionAsync$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
var frame=trackerPanel.getTFrame$();
$I$(8,"getChooserFilesAsync$org_opensourcephysics_cabrillo_tracker_TFrame$S$java_util_function_Function",[frame, "open data", ((P$.TActions$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "TActions$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_io_FileA','apply$O'],  function (files) /*block*/{
if (files == null ) {
return null;
}var filePath=files[0].getAbsolutePath$.apply(files[0], []);
this.$finals$.trackerPanel.importDataAsync$S$O$Runnable.apply(this.$finals$.trackerPanel, [filePath, null, null]);
return null;
});
})()
), Clazz.new_(P$.TActions$lambda2.$init$,[this, {trackerPanel:trackerPanel}]))]);
}, 1);

Clazz.newMeth(C$, 'cloneAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel$S',  function (trackerPanel, name) {
trackerPanel.cloneNamed$S(name);
}, 1);

Clazz.newMeth(C$, 'getAsyncAction$javax_swing_AbstractAction$Z',  function (a, useSeparateThread) {
var nameObj=a.getValue$S("Name");
var name=nameObj == null  ? null : nameObj.toString();
return ((P$.TActions$47||
(function(){/*a*/var C$=Clazz.newClass(P$, "TActions$47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(13,"invokeLater$Runnable",[((P$.TActions$47$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "TActions$47$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.$finals$.a.actionPerformed$java_awt_event_ActionEvent.apply(this.$finals$.a, [this.$finals$.e]);
});
})()
), Clazz.new_(P$.TActions$47$lambda3.$init$,[this, {a:this.$finals$.a,e:e}]))]);
});
})()
), Clazz.new_($I$(4,1).c$$S,[this, {a:a}, name],P$.TActions$47));
}, 1);

Clazz.newMeth(C$, 'clearFiltersAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel$Z',  function (trackerPanel, andUndo) {
var video=trackerPanel.getVideo$();
if (video != null ) {
var xml=Clazz.new_($I$(30,1));
var stack=video.getFilterStack$();
for (var filter, $filter = stack.getFilters$().iterator$(); $filter.hasNext$()&&((filter=($filter.next$())),1);) {
xml.add$O(Clazz.new_($I$(31,1).c$$O,[filter]).toXML$());
var track=$I$(32).filterMap.get$O(filter);
if (track != null ) {
trackerPanel.removeTrack$org_opensourcephysics_cabrillo_tracker_TTrack(track);
track.dispose$();
}}
stack.clear$();
if (andUndo) {
$I$(33).postFilterClear$org_opensourcephysics_cabrillo_tracker_TrackerPanel$java_util_List(trackerPanel, xml);
}}}, 1);

Clazz.newMeth(C$, 'exitAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
if (trackerPanel == null ) {
$I$(6).exit$();
return;
}var frame=trackerPanel.getTFrame$();
if (frame != null ) {
frame.removeAllTabs$Z(true);
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.newline=System.getProperty$S$S("line.separator", "\n");
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
