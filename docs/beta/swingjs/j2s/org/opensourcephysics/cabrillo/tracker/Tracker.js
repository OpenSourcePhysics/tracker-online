(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.cabrillo.tracker.TToolBar','org.opensourcephysics.tools.DatasetCurveFitter','java.io.File','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.media.core.VideoIO','org.opensourcephysics.controls.XML','org.opensourcephysics.cabrillo.tracker.ExportZipDialog','org.opensourcephysics.cabrillo.tracker.Configuration',['org.opensourcephysics.cabrillo.tracker.Tracker','.Preferences'],'org.opensourcephysics.controls.OSPLog','java.util.logging.Level','org.opensourcephysics.display.OSPRuntime','java.util.ArrayList',['org.opensourcephysics.cabrillo.tracker.Tracker','.Preferences','.Loader'],'org.opensourcephysics.display.TeXParser','org.opensourcephysics.controls.ConsoleLevel','java.util.TreeSet','java.util.TreeMap','java.util.HashSet','org.opensourcephysics.display.ResizableIcon','javax.swing.ImageIcon','java.util.Locale','org.opensourcephysics.cabrillo.tracker.deploy.TrackerStarter','org.opensourcephysics.display.GUIUtils','java.awt.Point','java.util.HashMap','javax.swing.JButton','org.opensourcephysics.cabrillo.tracker.TrackerRes','java.net.URL','org.opensourcephysics.desktop.OSPDesktop','Thread','org.opensourcephysics.tools.JREFinder','org.opensourcephysics.tools.FontSizer','java.awt.Toolkit','org.opensourcephysics.cabrillo.tracker.TrackerIO','java.awt.Rectangle','java.awt.Dimension','java.awt.Color','javax.swing.JFrame','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.BorderFactory','javax.swing.event.MouseInputAdapter','javax.swing.JLabel','javax.swing.JProgressBar','javax.swing.Box','java.io.FileOutputStream','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.tools.Diagnostics','java.awt.event.WindowAdapter','java.awt.EventQueue','javajs.async.AsyncSwingWorker','javax.swing.JOptionPane','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.cabrillo.tracker.TrackDataBuilder','javax.swing.AbstractAction','javax.swing.JDialog','javax.swing.JTextArea','javax.swing.JScrollPane','java.text.DecimalFormat','org.opensourcephysics.media.mov.MovieFactory','java.awt.Frame','javax.swing.JTextPane','javax.swing.JCheckBox','org.opensourcephysics.cabrillo.tracker.Upgrader','org.opensourcephysics.tools.Resource','java.awt.Cursor','org.opensourcephysics.js.AIPatch',['javajs.async.SwingJSUtils','.Performance'],'org.opensourcephysics.display.Dataset','javajs.async.AsyncDialog','javax.swing.SwingUtilities','java.text.SimpleDateFormat','java.util.Calendar']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Tracker", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Preferences',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['headless'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame']]
,['Z',['loadTabsInSeparateThread','doHoldRepaint','allowDataFunctionControls','allowTableRefresh','allowPlotRefresh','allowDataRefresh','allowViews','allowMenuRefresh','allowToolbarRefresh','timeLogEnabled','testOn','usesXuggleServer','checkedForNewerVersion','isNewInstall','showHints','startupHintShown','showHintsByDefault','isRadians','isXuggleFast','warnSkippedStep','warnXuggleError','warnNoVideoEngine','warnVariableDuration','markAtCurrentFrame','scrubMouseWheel','centerCalibrationStick','hideLabels','enableAutofill','showGaps','declareLocales','testingFinal'],'D',['testVal'],'I',['minimumMemorySize','requestedMemorySize','originalMemoryRequest','maxFontLevel','recentFilesSize','preferredMemorySize','checkForUpgradeInterval','preferredFontLevel','preferredFontLevelPlus','preferredTrailLengthIndex'],'J',['lastMillisChecked'],'S',['TRACKER_TEST_URL','THETA','OMEGA','ALPHA','testString','trackerHome','counterPath','rootXMLPath','latestVersion','newerVersion','trackerWebsite','readmeFileName','prefsPath','pdfHelpPath','lookAndFeel','preferredLocale','preferredDecimalSeparator','preferredJRE','preferredTrackerJar','preferredPointMassFootprint','preferredTimeUnit','preferredLengthUnit','preferredMassUnit'],'O',['TRACKER_ICON','javax.swing.ImageIcon','+TRACKER_ICON_256','DEFAULT_LOG_LEVEL','java.util.logging.Level','fullConfig','String[]','defaultConfig','java.util.Set','mainArgs','String[]','splash','javax.swing.JFrame','trackerLogoIcon','javax.swing.Icon','progressBar','javax.swing.JProgressBar','sharedTracker','org.opensourcephysics.cabrillo.tracker.Tracker','zoomInCursor','java.awt.Cursor','+zoomOutCursor','locales','java.util.Locale[]','defaultLocale','java.util.Locale','grabCursor','java.awt.Cursor','checkForUpgradeChoices','java.util.ArrayList','checkForUpgradeIntervals','java.util.Map','aboutXuggleAction','javax.swing.AbstractAction','+aboutThreadsAction','aboutTrackerAction','javax.swing.Action','+readmeAction','+aboutJavaAction','+startLogAction','+trackerPrefsAction','readmeDialog','javax.swing.JDialog','+startLogDialog','+trackerPrefsDialog','trackerPrefsTextArea','javax.swing.JTextArea','pdfHelpButton','javax.swing.JButton','recentFiles','java.util.ArrayList','incompleteLocales','Object[][]','initialAutoloadSearchPaths','java.util.Collection','xmlFilter','java.io.FileFilter','preferredLogLevel','java.util.logging.Level','prelaunchExecutables','String[]','autoloadMap','java.util.Map','preferredAutoloadSearchPaths','String[]','testPanel','org.opensourcephysics.cabrillo.tracker.TrackerPanel','dataFunctionControlStrings','java.util.Collection','dataFunctionControls','java.util.Map']]]

Clazz.newMeth(C$, 'getResourceIcon$S$Z',  function (imageName, resizable) {
var url=C$.getClassResource$S("resources/images/" + imageName);
if (url == null ) {
$I$(11).debug$S("Tracker.getResourceIcon was null for " + imageName);
return null;
}return (resizable ? Clazz.new_($I$(21,1).c$$java_net_URL,[url]) : Clazz.new_($I$(22,1).c$$java_net_URL,[url]));
}, 1);

Clazz.newMeth(C$, 'initClass$Z',  function (isHeadless) {
if (C$.defaultLocale != null ) return;
C$.defaultLocale=$I$(23).getDefault$();
C$.trackerHome=System.getenv$S("TRACKER_HOME");
if (C$.trackerHome == null ) {
C$.trackerHome=$I$(24).findTrackerHome$Z(false);
}C$.trackerLogoIcon=C$.getResourceIcon$S$Z("tracker_logo.png", false);
var grab=(C$.getResourceIcon$S$Z("grab.gif", false)).getImage$();
C$.grabCursor=$I$(25,"createCustomCursor$java_awt_Image$java_awt_Point$S$I",[grab, Clazz.new_($I$(26,1).c$$I$I,[14, 10]), "Grab", 12]);
if (!C$.declareLocales) {
C$.locales=Clazz.array($I$(23), -1, [$I$(23).ENGLISH]);
C$.incompleteLocales=Clazz.array(java.lang.Object, -2, []);
}$I$(11).getOSPLog$Z(!isHeadless);
C$.setDefaultConfig$java_util_Set(C$.getFullConfig$());
C$.loadPreferences$();
if (!isHeadless) {

{}
}C$.xmlFilter=((P$.Tracker$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Tracker$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.FileFilter', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (f) {
if (f == null  || f.isDirectory$() ) return false;
var ext=$I$(7,"getExtension$S",[f.getName$()]);
if (ext != null  && "xml".equals$O(ext.toLowerCase$()) ) return true;
return false;
});
})()
), Clazz.new_(P$.Tracker$1.$init$,[this, null]));
C$.checkForUpgradeChoices=Clazz.new_($I$(14,1));
C$.checkForUpgradeIntervals=Clazz.new_($I$(27,1));

{}
$I$(6).setDefaultXMLExtension$S("trk");
C$.pdfHelpButton=Clazz.new_([$I$(29).getString$S("Tracker.Button.PDFHelp")],$I$(28,1).c$$S);
C$.pdfHelpButton.addActionListener$java_awt_event_ActionListener(((P$.Tracker$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Tracker$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
try {
var url=Clazz.new_(["https://" + $I$(1).trackerWebsite + $I$(1).pdfHelpPath ],$I$(30,1).c$$S);
$I$(31,"displayURL$S",[url.toString.apply(url, [])]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$.apply(ex, []);
} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.Tracker$lambda1.$init$,[this, null])));
Clazz.new_([((P$.Tracker$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Tracker$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
$I$(33).getFinder$().getJREs$I.apply($I$(33).getFinder$(), [32]);
});
})()
), Clazz.new_(P$.Tracker$lambda2.$init$,[this, null]))],$I$(32,1).c$$Runnable).start$();
}, 1);

Clazz.newMeth(C$, 'getLocales$',  function () {
if (C$.locales != null ) return C$.locales;
C$.locales=Clazz.array($I$(23), -1, [$I$(23).ENGLISH, Clazz.new_($I$(23,1).c$$S,["ar"]), Clazz.new_($I$(23,1).c$$S,["ca"]), Clazz.new_($I$(23,1).c$$S,["cs"]), Clazz.new_($I$(23,1).c$$S,["da"]), Clazz.new_($I$(23,1).c$$S,["de"]), Clazz.new_($I$(23,1).c$$S$S,["el", "GR"]), Clazz.new_($I$(23,1).c$$S,["es"]), Clazz.new_($I$(23,1).c$$S,["fi"]), Clazz.new_($I$(23,1).c$$S,["fr"]), Clazz.new_($I$(23,1).c$$S$S,["hu", "HU"]), Clazz.new_($I$(23,1).c$$S,["in"]), Clazz.new_($I$(23,1).c$$S,["it"]), Clazz.new_($I$(23,1).c$$S$S,["iw", "IL"]), Clazz.new_($I$(23,1).c$$S,["ja"]), Clazz.new_($I$(23,1).c$$S,["ko"]), Clazz.new_($I$(23,1).c$$S,["lv"]), Clazz.new_($I$(23,1).c$$S$S,["ms", "MY"]), Clazz.new_($I$(23,1).c$$S$S,["nl", "NL"]), Clazz.new_($I$(23,1).c$$S,["pl"]), Clazz.new_($I$(23,1).c$$S$S,["pt", "BR"]), Clazz.new_($I$(23,1).c$$S$S,["pt", "PT"]), Clazz.new_($I$(23,1).c$$S,["ru"]), Clazz.new_($I$(23,1).c$$S,["sk"]), Clazz.new_($I$(23,1).c$$S,["sl"]), Clazz.new_($I$(23,1).c$$S,["sv"]), Clazz.new_($I$(23,1).c$$S$S,["th", "TH"]), Clazz.new_($I$(23,1).c$$S,["tr"]), Clazz.new_($I$(23,1).c$$S,["uk"]), Clazz.new_($I$(23,1).c$$S$S,["vi", "VN"]), Clazz.new_($I$(23,1).c$$S$S,["zh", "CN"]), Clazz.new_($I$(23,1).c$$S$S,["zh", "TW"])]);
C$.incompleteLocales=Clazz.array(java.lang.Object, -2, [Clazz.array(java.lang.Object, -1, [Clazz.new_($I$(23,1).c$$S,["fi"]), "2013"]), Clazz.array(java.lang.Object, -1, [Clazz.new_($I$(23,1).c$$S,["sk"]), "2011"])]);
return C$.locales;
}, 1);

Clazz.newMeth(C$, 'getClassResource$S',  function (resource) {
return $I$(5,"getClassResource$S$Class",["org/opensourcephysics/cabrillo/tracker/" + resource, Clazz.getClass(C$)]);
}, 1);

Clazz.newMeth(C$, 'getTracker$Runnable',  function (whenLoaded) {
if (C$.sharedTracker == null ) {
$I$(11).fine$S("creating shared Tracker");
C$.sharedTracker=Clazz.new_(C$.c$$SA$Z$Z$Runnable,[null, false, false, whenLoaded]);
}return C$.sharedTracker;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$SA$Z$Z$Runnable.apply(this, [null, true, true, null]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_media_core_Video',  function (video) {
;C$.$init$.apply(this);
var options=Clazz.new_($I$(27,1));
options.put$O$O("-video", video);
p$1.createFrame$java_util_Map.apply(this, [options]);
}, 1);

Clazz.newMeth(C$, 'c$$SA$Z$Z$Runnable',  function (args, addTabIfEmpty, showSplash, whenLoaded) {
;C$.$init$.apply(this);
var options=C$.parseArgs$SA(args);
this.headless=Boolean.TRUE.equals$O(options.get$O("-headless")) || "true".equals$O(System.getProperty$S("java.awt.headless")) ;
var importVideoName=options.get$O("-importVideo");
var exportVideoName=options.get$O("-exportVideo");
if (this.headless) {
if (exportVideoName == null  && whenLoaded == null  ) {
return;
}var r=whenLoaded;
whenLoaded=((P$.Tracker$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Tracker$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
try {
if (this.$finals$.r != null ) {
this.$finals$.r.run$();
}} catch (t) {
t.printStackTrace$.apply(t, []);
}
System.exit$I(0);
});
})()
), Clazz.new_(P$.Tracker$lambda3.$init$,[this, {r:r}]));
}C$.initClass$Z(this.headless);
if (!this.headless) {
if (showSplash && !$I$(13).isJS ) {
p$1.getSplash.apply(this, []);
$I$(34).setFonts$java_awt_Container(C$.splash);
C$.splash.pack$();
var dim=$I$(35).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - C$.splash.getBounds$().width)/2|0);
var y=((dim.height - C$.splash.getBounds$().height)/2|0);
C$.splash.setLocation$I$I(x, y);
C$.splash.setVisible$Z(true);
}this.frame=p$1.createFrame$java_util_Map.apply(this, [options]);
}var loader=null;
if (args != null ) {
for (var i=0; i < args.length; i++) {
if (args[i] == null ) continue;
if ((args[i].endsWith$S(".trk") || args[i].endsWith$S(".trz") ) && args[i].indexOf$S("/") != -1  && C$.rootXMLPath.equals$O("") ) {
C$.rootXMLPath=args[i].substring$I$I(0, args[i].lastIndexOf$S("/") + 1);
$I$(11).fine$S("Setting rootPath: " + C$.rootXMLPath);
}var url=args[i];
if (this.headless) {
loader=$I$(36).openURL$S$org_opensourcephysics_cabrillo_tracker_TFrame$Runnable(url, null, null);
break;
} else {
this.frame.doOpenURL$S(url);
}addTabIfEmpty=false;
}
}if (addTabIfEmpty) {
if (this.headless && importVideoName != null  ) {
loader=$I$(36).openURL$S$org_opensourcephysics_cabrillo_tracker_TFrame$Runnable(importVideoName, null, null);
}}if (loader != null ) {
if (exportVideoName != null ) $I$(36,"exportVideoImages$org_opensourcephysics_cabrillo_tracker_TrackerPanel$S",[loader.panel$(), exportVideoName]);
whenLoaded.run$();
System.exit$I(0);
}if (addTabIfEmpty) {
var panel=this.frame.getCleanTrackerPanel$();
this.frame.addTab$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I$Runnable(panel, 2, ((P$.Tracker$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Tracker$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
if ($I$(1).showHints) {
$I$(1).startupHintShown=true;
this.$finals$.panel.setMessage$S.apply(this.$finals$.panel, [$I$(29).getString$S("Tracker.Startup.Hint")]);
}if ($I$(13).isMobile$()) this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame.maximizeView$org_opensourcephysics_cabrillo_tracker_TrackerPanel$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame, [this.$finals$.panel, 4]);
});
})()
), Clazz.new_(P$.Tracker$lambda4.$init$,[this, {panel:panel}])));
}}, 1);

Clazz.newMeth(C$, 'parseArgs$SA',  function (args) {
var options=Clazz.new_($I$(27,1));
if (args == null  || args.length == 0 ) return options;
for (var i=0; i < args.length; i++) {
var arg=args[i];
if (arg == null ) continue;
var i1=i;
try {
switch (arg.toLowerCase$()) {
case "-headless":
System.setProperty$S$S("java.awt.headless", "true");
args[i]=null;
options.put$O$O("-headless", Boolean.valueOf$Z(true));
break;
case "-importvideo":
args[i]=null;
var importName=args[++i];
options.put$O$O("-importVideo", importName);
args[i]=null;
break;
case "-exportvideo":
args[i]=null;
var exportName=args[++i];
options.put$O$O("-exportVideo", exportName);
args[i]=null;
break;
case "-adaptive":
args[i]=null;
options.put$O$O("-adaptive", Boolean.valueOf$Z(true));
break;
case "-bounds":
args[i]=null;
i1=i + 4;
var bx=C$.getIntArg$SA$I(args, ++i);
var by=C$.getIntArg$SA$I(args, ++i);
var bw=C$.getIntArg$SA$I(args, ++i);
var bh=C$.getIntArg$SA$I(args, ++i);
options.put$O$O("-bounds", Clazz.new_($I$(37,1).c$$I$I$I$I,[bx, by, bw, bh]));
break;
case "-dim":
args[i]=null;
i1=i + 2;
var w=C$.getIntArg$SA$I(args, ++i);
var h=C$.getIntArg$SA$I(args, ++i);
options.put$O$O("-dim", Clazz.new_($I$(38,1).c$$I$I,[w, h]));
break;
}
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
System.err.println$S("Tracker: Could not parse argument " + arg);
i=i1;
} else {
throw e;
}
}
}
System.out.println$S("Tracker.parseArgs: " + options);
return options;
}, 1);

Clazz.newMeth(C$, 'getIntArg$SA$I',  function (args, i) {
var a=args[i];
args[i]=null;
{
return a|0;
}
}, 1);

Clazz.newMeth(C$, 'getSplash',  function () {
if (C$.splash != null ) return;
var darkred=Clazz.new_($I$(39,1).c$$I$I$I,[153, 0, 0]);
var darkblue=Clazz.new_($I$(39,1).c$$I$I$I,[51, 51, 102]);
var grayblue=Clazz.new_($I$(39,1).c$$I$I$I,[116, 147, 179]);
var darkgrayblue=Clazz.new_($I$(39,1).c$$I$I$I,[83, 105, 128]);
var lightblue=Clazz.new_($I$(39,1).c$$I$I$I,[169, 193, 217]);
var background=Clazz.new_($I$(39,1).c$$I$I$I,[250, 250, 230]);
C$.splash=Clazz.new_($I$(40,1).c$$S,["Tracker"]);
C$.splash.setIconImage$java_awt_Image(C$.TRACKER_ICON.getImage$());
C$.splash.setUndecorated$Z(true);
C$.splash.setAlwaysOnTop$Z(true);
C$.splash.setResizable$Z(false);
var contentPane=Clazz.new_([Clazz.new_($I$(42,1))],$I$(41,1).c$$java_awt_LayoutManager);
contentPane.setBackground$java_awt_Color(background);
contentPane.setBorder$javax_swing_border_Border($I$(43).createBevelBorder$I$java_awt_Color$java_awt_Color(0, grayblue, darkgrayblue));
C$.splash.setContentPane$java_awt_Container(contentPane);
var splashMouseListener=((P$.Tracker$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Tracker$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.MouseInputAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['mouseLoc','java.awt.Point','+splashLoc']]]

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.splashLoc=$I$(1).splash.getLocation$();
this.mouseLoc=e.getPoint$();
this.mouseLoc.x+=this.splashLoc.x;
this.mouseLoc.y+=this.splashLoc.y;
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
var loc=$I$(1).splash.getLocation$();
loc.x+=e.getPoint$().x;
loc.y+=e.getPoint$().y;
$I$(1).splash.setLocation$I$I(this.splashLoc.x + loc.x - this.mouseLoc.x, this.splashLoc.y + loc.y - this.mouseLoc.y);
});
})()
), Clazz.new_($I$(44,1),[this, null],P$.Tracker$2));
contentPane.addMouseListener$java_awt_event_MouseListener(splashMouseListener);
contentPane.addMouseMotionListener$java_awt_event_MouseMotionListener(splashMouseListener);
var trackerLogoLabel=Clazz.new_($I$(45,1).c$$javax_swing_Icon,[C$.trackerLogoIcon]);
trackerLogoLabel.setBorder$javax_swing_border_Border($I$(43).createEmptyBorder$I$I$I$I(12, 24, 4, 24));
contentPane.add$java_awt_Component$O(trackerLogoLabel, "North");
var tip=$I$(29).getString$S("Tracker.Splash.HelpMessage");
tip+=" " + $I$(29).getString$S("TMenuBar.Menu.Help");
tip+="|" + $I$(29).getString$S("TMenuBar.MenuItem.GettingStarted");
var helpLabel=Clazz.new_($I$(45,1).c$$S,[tip]);
helpLabel.setBorder$javax_swing_border_Border($I$(43).createEmptyBorder$I$I$I$I(0, 12, 0, 12));
var font=helpLabel.getFont$().deriveFont$I(0).deriveFont$F(14.0);
helpLabel.setFont$java_awt_Font(font);
helpLabel.setForeground$java_awt_Color(darkred);
helpLabel.setAlignmentX$F(0.5);
C$.progressBar=Clazz.new_($I$(46,1).c$$I$I,[0, 100]);
C$.progressBar.setValue$I(0);
var progressPanel=Clazz.new_([Clazz.new_($I$(42,1))],$I$(41,1).c$$java_awt_LayoutManager);
progressPanel.setBorder$javax_swing_border_Border($I$(43).createEmptyBorder$I$I$I$I(12, 50, 16, 50));
progressPanel.add$java_awt_Component$O(C$.progressBar, "Center");
progressPanel.setOpaque$Z(false);
var center=$I$(47).createVerticalBox$();
center.add$java_awt_Component(helpLabel);
center.add$java_awt_Component(progressPanel);
var vers="Ver 6.3.5.260922";
if ("6.3.5.260922".length$() > 7 || C$.testOn ) vers+=" BETA";
var versionLabel=Clazz.new_($I$(45,1).c$$S,[vers]);
versionLabel.setForeground$java_awt_Color(darkblue);
font=font.deriveFont$I(1).deriveFont$F(10.0);
versionLabel.setFont$java_awt_Font(font);
versionLabel.setHorizontalAlignment$I(0);
versionLabel.setOpaque$Z(false);
versionLabel.setBorder$javax_swing_border_Border($I$(43).createEmptyBorder$I$I$I$I(1, 0, 1, 0));
var versionPanel=Clazz.new_([Clazz.new_($I$(42,1))],$I$(41,1).c$$java_awt_LayoutManager);
versionPanel.setBackground$java_awt_Color(Clazz.new_($I$(39,1).c$$I$I$I,[212, 230, 247]));
versionPanel.add$java_awt_Component$O(versionLabel, "Center");
versionPanel.setBorder$javax_swing_border_Border($I$(43).createLineBorder$java_awt_Color(lightblue));
contentPane.add$java_awt_Component$O(versionPanel, "South");
}, p$1);

Clazz.newMeth(C$, ['loadExperimentURL$S','loadExperimentURL'],  function (path) {
this.getFrame$().loadExperimentURL$S(path);
});

Clazz.newMeth(C$, ['importVideoCapture$S$BAA$D','importVideoCapture'],  function (id, data, frameRate) {
if (data != null  && data.length > 0 ) {
var path=null;
var firstPath=null;
var tempDir=System.getProperty$S("java.io.tmpdir");
for (var i=0; i < data.length; i++) {
var index="0000" + i;
path=tempDir + "capture-" + id + "-" + index.substring$I(index.length$() - 4) + ".jpg" ;
try {
var file=Clazz.new_($I$(4,1).c$$S,[path]);
var fos=Clazz.new_($I$(48,1).c$$java_io_File,[file]);
fos.write$BA(data[i]);
fos.close$();
if (firstPath == null ) firstPath=file.getAbsolutePath$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S("Could not create " + path);
return;
} else {
throw e;
}
}
}
this.getFrame$().loadVideo$S$Z$org_opensourcephysics_tools_LibraryBrowser$Runnable$D$I(firstPath, false, null, null, frameRate, data.length);
}});

Clazz.newMeth(C$, ['importMP4Capture$S$BA','importMP4Capture'],  function (id, data) {
if (data == null  || data.length == 0 ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["No MP4 video was captured."]);
var file=Clazz.new_([System.getProperty$S("java.io.tmpdir"), "capture-" + id + ".mp4" ],$I$(4,1).c$$S$S);
try {
var out=Clazz.new_($I$(48,1).c$$java_io_File,[file]);
try {
out.write$BA(data);

}finally{/*res*/out&&out.close$&&out.close$();}
}finally{}
this.getFrame$().loadVideo$S$Z$org_opensourcephysics_tools_LibraryBrowser$Runnable$D$I(file.getAbsolutePath$(), false, null, null, 0, -1);
});

Clazz.newMeth(C$, ['getFrame$','getFrame'],  function () {
return this.frame;
});

Clazz.newMeth(C$, ['getMainFrame$','getMainFrame'],  function () {
return this.frame;
});

Clazz.newMeth(C$, ['getMainFrameSize$','getMainFrameSize'],  function () {
var d=this.frame.getSize$();
return Clazz.array(Integer.TYPE, -1, [d.width, d.height]);
});

Clazz.newMeth(C$, ['getMainFrameLocation$','getMainFrameLocation'],  function () {
var d=this.frame.getLocation$();
return Clazz.array(Integer.TYPE, -1, [d.x, d.y]);
});

Clazz.newMeth(C$, 'createFrame$java_util_Map',  function (options) {
C$.createActions$();
$I$(13).setLookAndFeel$Z$S(true, C$.lookAndFeel);
var frame=Clazz.new_($I$(49,1).c$$java_util_Map,[options]);
$I$(50).setDialogOwner$java_awt_Component(frame);
frame.addWindowListener$java_awt_event_WindowListener(((P$.Tracker$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Tracker$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].onWindowClosing$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'], []);
});
})()
), Clazz.new_($I$(51,1),[this, null],P$.Tracker$3)));
return frame;
}, p$1);

Clazz.newMeth(C$, 'onWindowClosing$',  function () {
if ($I$(13).isJS) {
C$.exit$();
return;
}var dirs=Clazz.new_($I$(14,1));
if (C$.preferredAutoloadSearchPaths != null ) {
for (var path, $path = 0, $$path = C$.preferredAutoloadSearchPaths; $path<$$path.length&&((path=($$path[$path])),1);$path++) dirs.add$O(path);

} else dirs.addAll$java_util_Collection(C$.getDefaultAutoloadSearchPaths$());
for (var it=C$.autoloadMap.keySet$().iterator$(); it.hasNext$(); ) {
var filePath=it.next$();
var parentPath=$I$(7).getDirectoryPath$S(filePath);
var keep=false;
for (var dir, $dir = dirs.iterator$(); $dir.hasNext$()&&((dir=($dir.next$())),1);) {
keep=keep || parentPath.equals$O(dir) ;
}
if (!keep || !Clazz.new_($I$(4,1).c$$S,[filePath]).exists$() ) {
it.remove$();
}}
C$.savePreferences$();
var doClose=(this.frame.wishesToExit$() && this.frame.getDefaultCloseOperation$() == 2 );
if (this.frame.libraryBrowser != null ) {
var canceled=!this.frame.libraryBrowser.exit$();
if (canceled) {
var op=this.frame.getDefaultCloseOperation$();
var exit=this.frame.wishesToExit$();
this.frame.setDefaultCloseOperation$I(0);
$I$(52,"invokeLater$Runnable",[((P$.Tracker$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Tracker$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
if (this.$finals$.exit) this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame.setDefaultCloseOperation$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame, [3]);
this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame.setDefaultCloseOperation$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame, [this.$finals$.op]);
});
})()
), Clazz.new_(P$.Tracker$lambda5.$init$,[this, {op:op,exit:exit}]))]);
return;
}}if (doClose) {
C$.exit$();
} else {
this.frame.saveAllTabs$Z$java_util_function_Function$Runnable$Runnable(true, ((P$.Tracker$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Tracker$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['apply$Integer','apply$O'],  function (panelID) {
this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame.removeTabSynchronously$Integer(panelID);
return null;
});
})()
), Clazz.new_(P$.Tracker$4.$init$,[this, null])), (P$.Tracker$lambda6$||(P$.Tracker$lambda6$=(((P$.Tracker$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Tracker$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
$I$(1).exit$();
});
})()
), Clazz.new_(P$.Tracker$lambda6.$init$,[this, null]))))), ((P$.Tracker$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "Tracker$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
var op=this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame.getDefaultCloseOperation$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame, []);
var exit=this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame.wishesToExit$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame, []);
this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame.setDefaultCloseOperation$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame, [0]);
((P$.Tracker$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Tracker$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javajs.async.AsyncSwingWorker'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'initAsync$',  function () {
});

Clazz.newMeth(C$, 'doInBackgroundAsync$I',  function (i) {
return 1;
});

Clazz.newMeth(C$, 'doneAsync$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame.setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame, [true]);
this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame.setDefaultCloseOperation$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame, [this.$finals$.exit ? 3 : this.$finals$.op]);
});
})()
), Clazz.new_($I$(53,1).c$$java_awt_Component$S$I$I$I,[this, {exit:exit,op:op}, null, null, 2, 0, 1],P$.Tracker$5)).execute$.apply(((P$.Tracker$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Tracker$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javajs.async.AsyncSwingWorker'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'initAsync$',  function () {
});

Clazz.newMeth(C$, 'doInBackgroundAsync$I',  function (i) {
return 1;
});

Clazz.newMeth(C$, 'doneAsync$',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame.setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame, [true]);
this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame.setDefaultCloseOperation$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.Tracker'].frame, [this.$finals$.exit ? 3 : this.$finals$.op]);
});
})()
), Clazz.new_($I$(53,1).c$$java_awt_Component$S$I$I$I,[this, {exit:exit,op:op}, null, null, 2, 0, 1],P$.Tracker$5)), []);
});
})()
), Clazz.new_(P$.Tracker$lambda7.$init$,[this, null])));
}});

Clazz.newMeth(C$, 'exit$',  function () {
var toDelete=Clazz.new_($I$(4,1).c$$S,["/tmp/xuggle"]);
if (toDelete.exists$()) toDelete.delete$();
$I$(13).exit$();
System.exit$I(0);
}, 1);

Clazz.newMeth(C$, 'compareVersions$S$S',  function (ver1, ver2) {
if (ver1 == null  || ver2 == null  ) {
return 0;
}try {
var d1=Double.parseDouble$S(ver1.substring$I$I(0, 3));
if (d1 == 5.9 ) ver1="5.1.9";
 else if (d1 >= 5.2  && d1 < 6  ) ver1=String.valueOf$D(d1 + 0.8) + ver1.substring$I(3);
var d2=Double.parseDouble$S(ver2.substring$I$I(0, 3));
if (d2 == 5.9 ) ver2="5.1.9";
 else if (d2 >= 5.2  && d2 < 6  ) ver2=String.valueOf$D(d2 + 0.8) + ver2.substring$I(3);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
var v1=ver1.trim$().split$S("\\.");
var v2=ver2.trim$().split$S("\\.");
if (v1.length == 4) {
v1=Clazz.array(String, -1, [v1[0], v1[1], v1[2]]);
}if (v2.length == 4) {
v2=Clazz.array(String, -1, [v2[0], v2[1], v2[2]]);
}if (v1.length == 3 && v1[2].length$() > 2 ) {
v1[2]=v1[2].substring$I$I(0, 1);
}if (v2.length == 3 && v2[2].length$() > 2 ) {
v2[2]=v2[2].substring$I$I(0, 1);
}for (var i=0; i < v1.length; i++) {
Integer.parseInt$S(v1[i]);
}
for (var i=0; i < v2.length; i++) {
Integer.parseInt$S(v2[i]);
}
if (v2.length > v1.length) {
return -1;
}if (v1.length > v2.length) {
return 1;
}for (var i=0; i < v1.length; i++) {
var int1=Integer.parseInt$S(v1[i]);
var int2=Integer.parseInt$S(v2[i]);
if (int1 < int2) {
return -1;
} else if (int1 > int2) {
return 1;
}}
return 0;
}, 1);

Clazz.newMeth(C$, 'showAboutTracker$',  function () {
var newline=System.getProperty$S$S("line.separator", "\n");
var vers="6.3.5.260922";
if (vers.length$() > 7 || C$.testOn ) vers+=" BETA";
var date=$I$(13).getLaunchJarBuildDate$();
var desc="\nBuild date ";
if ("".equals$O(date)) {
date="22 Sep 2026";
desc="\nRelease date ";
}vers=vers + desc + date ;
if ($I$(13).isJS) {
vers+="\n\nJavaScript transcription created using the\njava2script/SwingJS framework developed at\nSt. Olaf College.\n";
}var aboutString="Version " + vers + newline + "Copyright (c) 2026 D Brown, W Christian, R M Hanson" + newline + "https://" + C$.trackerWebsite + newline + newline + $I$(29).getString$S("Tracker.About.ProjectOf") + " " + "Open Source Physics" + newline + "www.compadre.org/osp" + newline ;
var translator=$I$(29).getString$S("Tracker.About.Translator");
if (!translator.equals$O("")) {
aboutString+=newline + $I$(29).getString$S("Tracker.About.TranslationBy") + " " + translator + newline ;
}if (C$.trackerHome != null ) {
aboutString+=newline + $I$(29).getString$S("Tracker.About.TrackerHome") + newline + C$.trackerHome + newline ;
}
{}
$I$(54,"showMessageDialog$java_awt_Component$O$S$I",[null, aboutString, $I$(29).getString$S("Tracker.Dialog.AboutTracker.Title"), 1]);
}, 1);

Clazz.newMeth(C$, 'findDataFunctions$S',  function (dirPath) {
var results=Clazz.new_($I$(19,1));
if (dirPath == null ) return results;
var dir=Clazz.new_($I$(4,1).c$$S,[dirPath]);
if (!dir.exists$()) return results;
var files=dir.listFiles$java_io_FileFilter(C$.xmlFilter);
if (files != null ) {
for (var file, $file = 0, $$file = files; $file<$$file.length&&((file=($$file[$file])),1);$file++) {
var control=Clazz.new_([file.getPath$()],$I$(55,1).c$$S);
if (control.failedToRead$()) {
continue;
}var type=control.getObjectClass$();
if (type != null  && Clazz.getClass($I$(56)).isAssignableFrom$Class(type) ) {
var expandedFunctions=Clazz.new_($I$(14,1));
for (var next, $next = control.getPropsRaw$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.getPropertyName$().equals$O("functions")) {
var panels=next.getChildControls$();
 inner : for (var panelControl, $panelControl = 0, $$panelControl = panels; $panelControl<$$panelControl.length&&((panelControl=($$panelControl[$panelControl])),1);$panelControl++) {
var trackType=panelControl.getString$S("description");
var functions=panelControl.getObject$S("functions");
if (trackType == null  || functions == null   || functions.isEmpty$() ) continue inner;
for (var f, $f = functions.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
var data=Clazz.array(String, [3]);
System.arraycopy$O$I$O$I$I(f, 0, data, 0, 2);
var trackName=$I$(7).getExtension$S(trackType);
var localized=$I$(29).getString$S(trackName + ".Name");
if (!localized.startsWith$S("!")) trackName=localized;
data[2]=trackName;
expandedFunctions.add$O(data);
}
}
}}
results.put$O$O(file.getName$(), expandedFunctions);
}}
}return results;
}, 1);

Clazz.newMeth(C$, 'createActions$',  function () {
C$.aboutTrackerAction=((P$.Tracker$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "Tracker$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(1).showAboutTracker$();
});
})()
), Clazz.new_([this, null, $I$(29).getString$S("Tracker.Action.AboutTracker")],$I$(57,1).c$$S,P$.Tracker$6));
if (C$.prefsPath != null ) {
C$.trackerPrefsAction=((P$.Tracker$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "Tracker$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if ($I$(1).trackerPrefsDialog == null ) {
var s=$I$(5,"getString$S",[$I$(1).prefsPath]);
if (s == null  || "".equals$O(s) ) {
s=$I$(29).getString$S("Tracker.Prefs.NotFound") + ": " + $I$(1).prefsPath ;
$I$(54,"showMessageDialog$java_awt_Component$O$S$I",[null, s, $I$(29).getString$S("Tracker.Prefs.NotFound"), 2]);
return;
}$I$(1).trackerPrefsDialog=Clazz.new_($I$(58,1).c$$java_awt_Frame$Z,[null, true]);
$I$(1).trackerPrefsDialog.setTitle$S($I$(29).getString$S("ConfigInspector.Title") + ": " + $I$(7,"forwardSlash$S",[$I$(1).prefsPath]) );
$I$(1).trackerPrefsTextArea=Clazz.new_($I$(59,1));
$I$(1).trackerPrefsTextArea.setEditable$Z(false);
$I$(1).trackerPrefsTextArea.setTabSize$I(2);
$I$(1).trackerPrefsTextArea.setLineWrap$Z(true);
$I$(1).trackerPrefsTextArea.setWrapStyleWord$Z(true);
var scroller=Clazz.new_([$I$(1).trackerPrefsTextArea],$I$(60,1).c$$java_awt_Component);
$I$(1).trackerPrefsDialog.setContentPane$java_awt_Container(scroller);
$I$(1).trackerPrefsTextArea.setText$S(s);
$I$(1).trackerPrefsTextArea.setCaretPosition$I(0);
$I$(34,"setFonts$O$I",[$I$(1).trackerPrefsDialog, $I$(34).getLevel$()]);
$I$(1).trackerPrefsDialog.setSize$I$I(800, 400);
var dim=$I$(35).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - $I$(1).trackerPrefsDialog.getBounds$().width)/2|0);
var y=((dim.height - $I$(1).trackerPrefsDialog.getBounds$().height)/2|0);
$I$(1).trackerPrefsDialog.setLocation$I$I(x, y);
} else {
var s=$I$(5,"getString$S",[$I$(1).prefsPath]);
$I$(1).trackerPrefsTextArea.setText$S(s);
$I$(1).trackerPrefsTextArea.setCaretPosition$I(0);
}$I$(1).trackerPrefsDialog.setVisible$Z(true);
});
})()
), Clazz.new_([this, null, $I$(29).getString$S("Tracker.Prefs.MenuItem.Text") + "..."],$I$(57,1).c$$S,P$.Tracker$7));
}
{}
}, 1);

Clazz.newMeth(C$, 'getFullConfig$',  function () {
var set=Clazz.new_($I$(18,1));
for (var next, $next = 0, $$next = C$.fullConfig; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
set.add$O(next);
}
return set;
}, 1);

Clazz.newMeth(C$, 'getDefaultConfig$',  function () {
if (C$.defaultConfig == null ) C$.defaultConfig=C$.getFullConfig$();
var set=Clazz.new_($I$(18,1));
for (var next, $next = C$.defaultConfig.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
set.add$O(next);
}
return set;
}, 1);

Clazz.newMeth(C$, 'setDefaultConfig$java_util_Set',  function (config) {
if (C$.defaultConfig == null ) C$.defaultConfig=Clazz.new_($I$(18,1));
C$.defaultConfig.clear$();
for (var next, $next = config.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
C$.defaultConfig.add$O(next);
}
}, 1);

Clazz.newMeth(C$, 'autoloadDataFunctions$',  function () {
C$.dataFunctionControls.clear$();
for (var dirPath, $dirPath = C$.getInitialSearchPaths$().iterator$(); $dirPath.hasNext$()&&((dirPath=($dirPath.next$())),1);) {
if (dirPath == null ) continue;
var dir=Clazz.new_($I$(4,1).c$$S,[dirPath]);
if (!dir.exists$()) continue;
var files=dir.listFiles$java_io_FileFilter(C$.xmlFilter);
if (files != null ) {
for (var file, $file = 0, $$file = files; $file<$$file.length&&((file=($$file[$file])),1);$file++) {
var control=Clazz.new_([file.getPath$()],$I$(55,1).c$$S);
if (control.failedToRead$()) {
continue;
}var type=control.getObjectClass$();
if (type != null  && Clazz.getClass($I$(56)).isAssignableFrom$Class(type) ) {
for (var next, $next = control.getPropsRaw$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.getPropertyName$().equals$O("functions")) {
var controls=Clazz.new_($I$(14,1));
var panels=(next).getChildControls$();
 inner : for (var panelControl, $panelControl = 0, $$panelControl = panels; $panelControl<$$panelControl.length&&((panelControl=($$panelControl[$panelControl])),1);$panelControl++) {
var trackType=panelControl.getString$S("description");
var functions=panelControl.getObject$S("functions");
if (trackType == null  || functions == null   || functions.isEmpty$() ) continue inner;
controls.add$O(panelControl);
}
var filePath=$I$(7,"forwardSlash$S",[file.getAbsolutePath$()]);
C$.dataFunctionControls.put$O$O(filePath, controls);
}}
}}
}}
}, 1);

Clazz.newMeth(C$, 'getDefaultAutoloadSearchPaths$',  function () {
return $I$(13).getDefaultSearchPaths$();
}, 1);

Clazz.newMeth(C$, 'getInitialSearchPaths$',  function () {
if (C$.initialAutoloadSearchPaths.isEmpty$()) {
if (C$.preferredAutoloadSearchPaths != null ) {
for (var next, $next = 0, $$next = C$.preferredAutoloadSearchPaths; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
C$.initialAutoloadSearchPaths.add$O(next);
}
} else {
for (var next, $next = C$.getDefaultAutoloadSearchPaths$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
C$.initialAutoloadSearchPaths.add$O(next);
}
}}return C$.initialAutoloadSearchPaths;
}, 1);

Clazz.newMeth(C$, 'setPreferredLocale$S',  function (localeName) {
if (localeName == null ) {
$I$(23).setDefault$java_util_Locale(C$.defaultLocale);
C$.preferredLocale=null;
} else {
C$.getLocales$();
for (var locale, $locale = 0, $$locale = C$.locales; $locale<$$locale.length&&((locale=($$locale[$locale])),1);$locale++) {
if (locale.toString().equals$O(localeName)) {
$I$(23).setDefault$java_util_Locale(locale);
C$.preferredLocale=localeName;
break;
}}
}var separator=Clazz.new_($I$(61,1)).getDecimalFormatSymbols$().getDecimalSeparator$();
if ("pt_PT".equals$O(localeName)) {
separator=",";
}$I$(13).setDefaultDecimalSeparator$C(separator);
}, 1);

Clazz.newMeth(C$, 'updateResources$',  function () {
var updatedEngines=$I$(62).getUpdatedVideoEngines$();
return updatedEngines != null  && updatedEngines.length > 0  && updatedEngines[0].equals$O("Xuggle") ;
}, 1);

Clazz.newMeth(C$, 'areEqual$java_util_Set$java_util_Set',  function (set1, set2) {
for (var next, $next = set1.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (!set2.contains$O(next)) return false;
}
for (var next, $next = set2.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (!set1.contains$O(next)) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'showUpgradeStatus$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (trackerPanel) {
C$.checkedForNewerVersion=false;
var userInformed=C$.loadCurrentVersion$Z$Z$Z(true, false, true);
if (!userInformed) {
var message=$I$(29).getString$S("PrefsDialog.Dialog.NewVersion.None.Message");
if (C$.newerVersion != null ) {
message=$I$(29).getString$S("PrefsDialog.Dialog.NewVersion.Message1") + " " + C$.newerVersion + " " + $I$(29).getString$S("PrefsDialog.Dialog.NewVersion.Message2") + $I$(7).NEW_LINE + "https://" + C$.trackerWebsite ;
}var frame=trackerPanel == null  ? null : trackerPanel.getTFrame$();
$I$(54,"showMessageDialog$java_awt_Component$O$S$I",[frame, message, $I$(29).getString$S("PrefsDialog.Dialog.NewVersion.Title"), 1]);
}}, 1);

Clazz.newMeth(C$, 'loadCurrentVersion$Z$Z$Z',  function (ignoreInterval, logToFile, dialogOK) {
if ($I$(13).isJS || C$.TRACKER_TEST_URL == null   || !$I$(5).isURLAvailable$S(C$.TRACKER_TEST_URL) ) {
return false;
}if (C$.checkedForNewerVersion) return false;
C$.checkedForNewerVersion=true;
var millis=System.currentTimeMillis$();
var days=(Long.$sub(millis,C$.lastMillisChecked)) / 8.64E7;
if (logToFile && days < 0.0833  ) logToFile=false;
var pageName=C$.getPHPPageName$Z(logToFile);
var newVersion=C$.loginGetLatestVersion$S(pageName);
if (!ignoreInterval) {
var interval=C$.checkForUpgradeInterval == 0 ? 0.0833 : C$.checkForUpgradeInterval;
if (days < interval ) {
return false;
}}C$.lastMillisChecked=millis;
if (C$.testOn && C$.testString != null  ) {
newVersion=C$.testString;
}var result=0;
try {
result=C$.compareVersions$S$S(newVersion, "6.3.5.260922");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (result > 0) {
C$.newerVersion=newVersion;
var tFrame=null;
var frames=$I$(63).getFrames$();
for (var i=0, n=frames.length; i < n; i++) {
if (Clazz.instanceOf(frames[i], "org.opensourcephysics.cabrillo.tracker.TFrame")) {
tFrame=frames[i];
var trackerPanel=tFrame.getSelectedPanel$();
if (trackerPanel != null ) {
trackerPanel.taintEnabled$();
trackerPanel.getToolBar$Z(true).refresh$S("new version");
}}}
var testVersion=C$.latestVersion == null  ? "6.3.5.260922" : C$.latestVersion;
result=0;
try {
result=C$.compareVersions$S$S(newVersion, testVersion);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (result == 1 && tFrame != null   && dialogOK ) {
var options=Clazz.array(java.lang.Object, -1, [$I$(29).getString$S("Tracker.Dialog.NewVersion.Button.Upgrade"), $I$(29).getString$S("TTrackBar.Popup.MenuItem.LearnMore"), $I$(29).getString$S("Tracker.Dialog.NewVersion.Button.Later")]);
var message=$I$(29).getString$S("Tracker.Dialog.NewVersion.Message1") + " " + newVersion ;
message+=" " + $I$(29).getString$S("Tracker.Dialog.NewVersion.Message2");
message+="  " + $I$(29).getString$S("Tracker.Dialog.NewVersion.Message3");
message+="\n" + $I$(29).getString$S("Tracker.Dialog.NewVersion.Message4");
var pane=Clazz.new_($I$(64,1));
pane.setOpaque$Z(false);
pane.setText$S(message);
var checkbox=Clazz.new_([$I$(29).getString$S("TTrack.Dialog.SkippedStepWarning.Checkbox")],$I$(65,1).c$$S);
var b=$I$(47).createHorizontalBox$();
b.add$java_awt_Component(checkbox);
b.add$java_awt_Component($I$(47).createHorizontalGlue$());
var box=$I$(47).createVerticalBox$();
box.add$java_awt_Component(pane);
box.add$java_awt_Component(b);
var response=$I$(54,"showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O",[tFrame, box, $I$(29).getString$S("Tracker.Dialog.NewVersion.Title"), 0, 1, C$.TRACKER_ICON, options, options[0]]);
if (response == 0) {
Clazz.new_($I$(66,1).c$$org_opensourcephysics_cabrillo_tracker_TFrame,[tFrame]).upgrade$();
} else if (response == 1) {
var websiteURL="https://" + C$.trackerWebsite + "/change_log.html" ;
$I$(31).displayURL$S(websiteURL);
}if (checkbox.isSelected$()) {
C$.latestVersion=newVersion;
}return true;
}}return false;
}, 1);

Clazz.newMeth(C$, 'getPHPPageName$Z',  function (logToFile) {
var page="version";
if (logToFile) {
var locale=$I$(23).getDefault$();
var language=locale.getLanguage$();
var country=locale.getCountry$();
var engine=$I$(62).getMovieEngineName$Z(false);
var os="unknownOS";
try {
os=System.getProperty$S$S("os.name", "unknownOS").toLowerCase$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"SecurityException")){
} else {
throw ex;
}
}
os=os.replace$CharSequence$CharSequence(" ", "");
if (os.indexOf$S("windows") > -1) {
os="windows";
}page="log_" + "6.3.5.260922" + "_" + os + "_" + engine ;
if (!"".equals$O(language)) {
if (!"".equals$O(country)) {
language+="-" + country;
}page+="_" + language;
}}return page;
}, 1);

Clazz.newMeth(C$, 'loginGetLatestVersion$S',  function (page) {
var path=C$.counterPath + "page=" + page ;
try {
var url=Clazz.new_($I$(30,1).c$$S,[path]);
var res=Clazz.new_($I$(67,1).c$$java_net_URL,[url]);
var version=res.getString$().trim$();
$I$(11).finer$S(path + ":   " + version );
return version;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return "6.3.5.260922";
}, 1);

Clazz.newMeth(C$, 'loadPreferences$',  function () {
var prefsControl=$I$(24).findPreferences$();
$I$(11).getOSPLog$();
var dim=$I$(13).getHTMLPageSize$();
$I$(11).info$S("Screen size " + dim.width + " x " + dim.height );
if (prefsControl != null ) {
C$.prefsPath=prefsControl.getString$S("prefsPath");
if (C$.prefsPath != null ) {
$I$(11,"info$S",["preferences loaded from " + $I$(7,"getAbsolutePath$java_io_File",[Clazz.new_($I$(4,1).c$$S,[C$.prefsPath])])]);
}prefsControl.loadObject$O(null);
C$.isNewInstall=System.getenv$S("NEW_INSTALL") != null ;
if (C$.isNewInstall) {
C$.preferredJRE=null;
C$.preferredTrackerJar=null;
C$.savePreferences$();
}return;
}C$.loadDefaultPreferences$();

{}
}, 1);

Clazz.newMeth(C$, 'loadDefaultPreferences$',  function () {
if (C$.trackerHome == null ) return;
var f=Clazz.new_($I$(4,1).c$$S,[C$.trackerHome]);
if ($I$(13).isMac$()) {
f=Clazz.new_([f.getParent$(), "Resources/tracker.prefs.default"],$I$(4,1).c$$S$S);
} else {
f=Clazz.new_([f.getPath$(), "tracker.prefs.default"],$I$(4,1).c$$S$S);
}var prefsControl=f.exists$() ? Clazz.new_($I$(55,1).c$$java_io_File,[f]) : null;
if (prefsControl != null ) {
prefsControl.loadObject$O(null);
}}, 1);

Clazz.newMeth(C$, 'savePreferences$',  function () {
var control=Clazz.new_([Clazz.new_($I$(10,1))],$I$(55,1).c$$O);
var s=null;

{}
return s;
}, 1);

Clazz.newMeth(C$, 'getZoomInCursor$',  function () {
if (C$.zoomInCursor == null ) {
var imageFile="/org/opensourcephysics/cabrillo/tracker/resources/images/zoom_in.gif";
var zoom=$I$(5).getImage$S(imageFile);
C$.zoomInCursor=$I$(25,"createCustomCursor$java_awt_Image$java_awt_Point$S$I",[zoom, Clazz.new_($I$(26,1).c$$I$I,[12, 12]), "Zoom In", 0]);
}return C$.zoomInCursor;
}, 1);

Clazz.newMeth(C$, 'isZoomInCursor$java_awt_Cursor',  function (cursor) {
return cursor === C$.zoomInCursor  && C$.zoomInCursor !== $I$(68).getDefaultCursor$()  ;
}, 1);

Clazz.newMeth(C$, 'getZoomOutCursor$',  function () {
if (C$.zoomOutCursor == null ) {
var imageFile="/org/opensourcephysics/cabrillo/tracker/resources/images/zoom_out.gif";
var zoom=$I$(5).getImage$S(imageFile);
C$.zoomOutCursor=$I$(25,"createCustomCursor$java_awt_Image$java_awt_Point$S$I",[zoom, Clazz.new_($I$(26,1).c$$I$I,[12, 12]), "Zoom Out", 0]);
}return C$.zoomOutCursor;
}, 1);

Clazz.newMeth(C$, 'isZoomOutCursor$java_awt_Cursor',  function (cursor) {
return cursor === C$.zoomOutCursor  && C$.zoomOutCursor !== $I$(68).getDefaultCursor$()  ;
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
try {
C$.initializeApplication$SA(args);
} finally {
if ($I$(13).isJS) {
C$.hideOnlineSplash$();
}}
}, 1);

Clazz.newMeth(C$, 'hideOnlineSplash$',  function () {
$I$(69).disposeElement$S("tracker-online-splash");
}, 1);

Clazz.newMeth(C$, 'initializeApplication$SA',  function (args) {
$I$(11,"debug$S",[$I$(70).timeCheckStr$S$I("Tracker.main start", 0)]);
var isHeadless=(args != null  && args.length > 0  && ("-headless".equals$O(args[0]))  || "true".equals$O(System.getProperty$S("java.awt.headless")) );
C$.initClass$Z(isHeadless);
if (C$.initializeJava$SA(args)) {
C$.start$SA(args);
if (C$.testingFinal) {
}}}, 1);

Clazz.newMeth(C$, 'testFinalize$org_opensourcephysics_cabrillo_tracker_TFrame',  function (frame) {
Clazz.new_([((P$.Tracker$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "Tracker$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
try {
$I$(32).sleep$J(5000);
var panel=$I$(1).testPanel;
if (panel == null ) panel=this.$finals$.frame.getTrackerPanelForTab$I.apply(this.$finals$.frame, [0]);
if (panel == null ) return;
if (!this.$finals$.frame.doCloseAction$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this.$finals$.frame, [panel])) panel.dispose$.apply(panel, []);
panel=null;
System.gc$();
$I$(32).sleep$J(500);
System.gc$();
$I$(32).sleep$J(100000);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
e.printStackTrace$.apply(e, []);
} else {
throw e;
}
}
System.exit$I(0);
});
})()
), Clazz.new_(P$.Tracker$lambda8.$init$,[this, {frame:frame}]))],$I$(32,1).c$$Runnable).start$();
}, 1);

Clazz.newMeth(C$, 'initializeJava$SA',  function (args) {
if ($I$(13).isJS) {
C$.originalMemoryRequest=C$.requestedMemorySize;
return true;
}
{}
}, 1);

Clazz.newMeth(C$, 'doRelaunch$Z$Z$Z$SA',  function (needsJavaVM, needsMemory, needsEnvironment, args) {
$I$(24).logMessage$S("relaunch required");
$I$(24).logMessage$S("needs Java VM? " + needsJavaVM);
$I$(24).logMessage$S("needs memory? " + needsMemory);
$I$(24).logMessage$S("needs environment? " + needsEnvironment);
C$.mainArgs=args;
if (C$.requestedMemorySize <= 10) {
C$.requestedMemorySize=1024;
}System.setProperty$S$S("PREFERRED_MEMORY_SIZE", String.valueOf$I(C$.requestedMemorySize));
System.setProperty$S$S("PREFERRED_TRACKER_JAR", $I$(13).getLaunchJarPath$());
$I$(24).relaunch$SA$Z(C$.mainArgs, true);
}, 1);

Clazz.newMeth(C$, 'checkNeedsEnvironment$',  function () {
try {
var trackerDir=$I$(24).findTrackerHome$Z(false);
if (trackerDir != null ) {
var trackerEnv=System.getenv$S("TRACKER_HOME");
if (!trackerDir.equals$O(trackerEnv)) {
return true;
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return false;
}, 1);

Clazz.newMeth(C$, 'checkNeedsMemory$S$J',  function (memoryEnvironment, currentMemory) {
if (memoryEnvironment != null ) {
C$.originalMemoryRequest=C$.requestedMemorySize;
C$.requestedMemorySize=Integer.parseInt$S(memoryEnvironment);
}return (C$.requestedMemorySize > 10 && (Long.$lt(currentMemory,(9 * C$.requestedMemorySize/10|0) ) || Long.$gt(currentMemory,(11 * C$.requestedMemorySize/10|0) ) ) );
}, 1);

Clazz.newMeth(C$, 'checkNeedsJVM$J',  function (currentMemory) {
if (C$.usesXuggleServer && $I$(33).getFinder$().is32BitVM$S(C$.preferredJRE) ) C$.preferredJRE=null;
var needs64BitVM=C$.usesXuggleServer || !$I$(13).isWindows$() ;
var needsJavaVM=$I$(13).getVMBitness$() == (needs64BitVM ? 32 : 64);
if (!needsJavaVM) {
var javaCommand=System.getProperty$S("java.home");
javaCommand=$I$(7).forwardSlash$S(javaCommand) + "/bin/java";
var javaPath=C$.preferredJRE;
if (javaPath != null ) {
if ($I$(33).getFinder$().is32BitVM$S(javaPath)) javaPath=null;
 else {
var javaFile=$I$(13).getJavaFile$S(javaPath);
if (javaFile != null ) {
javaPath=$I$(7,"stripExtension$S",[$I$(7,"forwardSlash$S",[javaFile.getPath$()])]);
} else javaPath=null;
}}needsJavaVM=javaPath != null  && !javaCommand.equals$O(javaPath) ;
}return needsJavaVM;
}, 1);

Clazz.newMeth(C$, 'isRelaunch$SA',  function (args) {
var isRelaunch=(args != null  && args.length > 0  && "relaunch".equals$O(args[args.length - 1]) );
if (args != null  && isRelaunch ) {
args[args.length - 1]=null;
} else {
var s=System.getenv$S("TRACKER_RELAUNCH");
isRelaunch="true".equals$O(s);
}return isRelaunch;
}, 1);

Clazz.newMeth(C$, 'checkIsJAR$',  function () {
var jarfile=$I$(13).getLaunchJar$();
if (jarfile != null ) {
try {
var att=jarfile.getManifest$().getMainAttributes$();
var mainclass=att.getValue$S("Main-Class");
var classpath=att.getValue$S("Class-Path");
C$.usesXuggleServer=classpath.toString().contains$CharSequence("-server-");
return mainclass.toString().endsWith$S("Tracker");
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}return false;
}, 1);

Clazz.newMeth(C$, 'start$SA',  function (args) {
var fontLevel=C$.preferredFontLevel + C$.preferredFontLevelPlus;
if ($I$(13).isJS && $I$(13).cssCursor ) {
fontLevel=Math.max(1, fontLevel);
$I$(49).maximize=true;
}$I$(34).setLevel$I(fontLevel);
$I$(71).maxPointsMultiplier=32;
var tracker=Clazz.new_(C$.c$$SA$Z$Z$Runnable,[args, true, true, null]);
$I$(13).setAppClass$O(tracker);
if ($I$(13).isMac$()) {
System.setProperty$S$S("com.apple.mrj.application.apple.menu.about.name", "Tracker");
var className="org.opensourcephysics.cabrillo.tracker.deploy.OSXServices";
try {
var OSXClass=Clazz.forName(className);
var constructor=OSXClass.getConstructor$ClassA(Clazz.array(Class, -1, [Clazz.getClass(C$)]));
constructor.newInstance$OA(Clazz.array(java.lang.Object, -1, [tracker]));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var err = e$$;
{
}
} else {
throw e$$;
}
}
}var frame=tracker.getFrame$();
if (frame == null ) return;
if (!$I$(13).isJS) {
frame.setVisible$Z(true);
}frame.setDefaultCloseOperation$I(3);
var node=$I$(13).activeNode;
if (node != null ) {
frame.setDefaultCloseOperation$I(1);
}var trackerPanel=frame.getSelectedPanel$();
$I$(2).refreshMemoryButton$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
if (!$I$(13).isJS && C$.originalMemoryRequest > C$.requestedMemorySize ) {
$I$(54,"showMessageDialog$java_awt_Component$O$S$I",[frame, $I$(29).getString$S("Tracker.Dialog.MemoryReduced.Message1") + " " + C$.originalMemoryRequest + "MB\n" + $I$(29).getString$S("Tracker.Dialog.MemoryReduced.Message2") + " " + C$.requestedMemorySize + "MB.\n\n" + $I$(29).getString$S("Tracker.Dialog.MemoryReduced.Message3") , $I$(29).getString$S("Tracker.Dialog.MemoryReduced.Title"), 1]);
}if (C$.warnNoVideoEngine && !$I$(62).hasVideoEngine$() ) {
C$.warnNoVideo$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_cabrillo_tracker_TrackerPanel(frame, trackerPanel);
}C$.checkShowStarterWarning$();
C$.showJavaMessages$org_opensourcephysics_cabrillo_tracker_TFrame(frame);
if ($I$(13).isJS) {
frame.setVisible$Z(true);
if ($I$(13).isMobile$()) {
Clazz.new_($I$(72,1)).showConfirmDialog$java_awt_Component$O$S$I$java_awt_event_ActionListener(frame, $I$(29).getString$S("Tracker.Dialog.MobileKeyboard.Message"), $I$(29).getString$S("Tracker.Dialog.MobileKeyboard.Title"), 0, ((P$.Tracker$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "Tracker$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
switch (e.getID$()) {
case 0:
$I$(13).hasKeyboard=true;
}
});
})()
), Clazz.new_(P$.Tracker$13.$init$,[this, null])));
}}}, 1);

Clazz.newMeth(C$, 'showJavaMessages$org_opensourcephysics_cabrillo_tracker_TFrame',  function (frame) {

{}
}, 1);

Clazz.newMeth(C$, 'checkShowStarterWarning$',  function () {
var warningString=System.getenv$S("STARTER_WARNING");
if (warningString == null ) return;
var lines=warningString.split$S("\n");
var box=$I$(47).createVerticalBox$();
for (var line, $line = 0, $$line = lines; $line<$$line.length&&((line=($$line[$line])),1);$line++) {
box.add$java_awt_Component(Clazz.new_($I$(45,1).c$$S,[line]));
}
box.setBorder$javax_swing_border_Border($I$(43).createEmptyBorder$I$I$I$I(0, 0, 10, 0));
$I$(54,"showMessageDialog$java_awt_Component$O$S$I",[null, box, $I$(29).getString$S("Tracker.Dialog.StarterWarning.Title"), 2]);
}, 1);

Clazz.newMeth(C$, 'warnNoVideo$org_opensourcephysics_cabrillo_tracker_TFrame$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (frame, trackerPanel) {
var xuggleInstalled=!$I$(13).isJS && $I$(62).hasVideoEngine$() ;
var message=Clazz.new_($I$(14,1));
var showRelaunchDialog=false;
if (!xuggleInstalled) {
message.add$O($I$(29).getString$S("Tracker.Dialog.NoVideoEngine.Message1"));
message.add$O($I$(29).getString$S("Tracker.Dialog.NoVideoEngine.Message2"));
message.add$O(" ");
message.add$O($I$(29).getString$S("Tracker.Dialog.NoVideoEngine.Message3"));
} else if ($I$(13).isWindows$() && $I$(13).getVMBitness$() == 32 ) {
message.add$O($I$(29).getString$S("Tracker.Dialog.SwitchTo32BitVM.Message1"));
message.add$O($I$(29).getString$S("Tracker.Dialog.SwitchTo32BitVM.Message2"));
message.add$O(" ");
message.add$O($I$(29).getString$S("Tracker.Dialog.SwitchTo32BitVM.Question"));
showRelaunchDialog=true;
} else {
message.add$O($I$(29).getString$S("Tracker.Dialog.EngineProblems.Message1"));
message.add$O($I$(29).getString$S("Tracker.Dialog.EngineProblems.Message2"));
}var box=$I$(47).createVerticalBox$();
for (var line, $line = message.iterator$(); $line.hasNext$()&&((line=($line.next$())),1);) {
box.add$java_awt_Component(Clazz.new_($I$(45,1).c$$S,[line]));
}
box.add$java_awt_Component(Clazz.new_($I$(45,1).c$$S,["  "]));
var checkbox=Clazz.new_([$I$(29).getString$S("Tracker.Dialog.NoVideoEngine.Checkbox")],$I$(65,1).c$$S);
checkbox.addActionListener$java_awt_event_ActionListener(((P$.Tracker$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "Tracker$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(1).warnNoVideoEngine=!this.$finals$.checkbox.isSelected$.apply(this.$finals$.checkbox, []);
});
})()
), Clazz.new_(P$.Tracker$lambda9.$init$,[this, {checkbox:checkbox}])));
box.add$java_awt_Component(checkbox);
box.setBorder$javax_swing_border_Border($I$(43).createEmptyBorder$I$I$I$I(0, 0, 10, 0));
if (showRelaunchDialog) {
var options=Clazz.array(java.lang.Object, -1, [$I$(29).getString$S("Tracker.Dialog.Button.RelaunchNow"), $I$(29).getString$S("Tracker.Dialog.Button.ContinueWithoutEngine")]);
var response=$I$(54,"showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O",[frame, box, $I$(29).getString$S("Tracker.Dialog.NoVideoEngine.Title"), 0, 2, null, options, options[0]]);
if (response == 0) {
$I$(73,"invokeLater$Runnable",[((P$.Tracker$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "Tracker$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
var prefs=this.$finals$.frame.getPrefsDialog$.apply(this.$finals$.frame, []);
prefs.relaunch64Bit$.apply(prefs, []);
});
})()
), Clazz.new_(P$.Tracker$lambda10.$init$,[this, {frame:frame}]))]);
}} else {
$I$(54,"showMessageDialog$java_awt_Component$O$S$I",[frame, box, $I$(29).getString$S("Tracker.Dialog.NoVideoEngine.Title"), 1]);
}}, 1);

Clazz.newMeth(C$, 'logTime$S',  function (message) {
if (C$.timeLogEnabled) {
var sdf=Clazz.new_($I$(74,1).c$$S,["ss.SSS"]);
var cal=$I$(75).getInstance$();
$I$(11,"info$S",[sdf.format$java_util_Date(cal.getTime$()) + ": " + message ]);
}}, 1);

Clazz.newMeth(C$, 'addRecent$S$Z',  function (filename, atEnd) {
{
while (C$.recentFiles.contains$O(filename))C$.recentFiles.remove$O(filename);

if (atEnd) C$.recentFiles.add$O(filename);
 else C$.recentFiles.add$I$O(0, filename);
while (C$.recentFiles.size$() > C$.recentFilesSize){
C$.recentFiles.remove$I(C$.recentFiles.size$() - 1);
}
}}, 1);

Clazz.newMeth(C$, 'setRecentSize$I',  function (max) {
max=Math.min(max, 12);
C$.recentFilesSize=Math.max(max, 0);
while (C$.recentFiles.size$() > C$.recentFilesSize){
C$.recentFiles.remove$I(C$.recentFiles.size$() - 1);
}
}, 1);

Clazz.newMeth(C$, 'haveDataFunctions$',  function () {
return (!C$.allowDataFunctionControls ? false : !C$.dataFunctionControlStrings.isEmpty$() || !C$.dataFunctionControls.isEmpty$() );
}, 1);

Clazz.newMeth(C$, 'isFunctionExcluded$S$S',  function (filePath, functionName) {
var functions=C$.autoloadMap.get$O(filePath);
if (functions == null ) return false;
for (var name, $name = 0, $$name = functions; $name<$$name.length&&((name=($$name[$name])),1);$name++) {
if (name.equals$O("*")) return true;
if (name.equals$O(functionName)) return true;
}
return false;
}, 1);

Clazz.newMeth(C$, 'askToSetMemory$org_opensourcephysics_cabrillo_tracker_TFrame',  function (frame) {
var s=$I$(29).getString$S("TTrackBar.Dialog.SetMemory.Message") + " " + 1024 + " MB." ;
var response=$I$(25,"showInputDialog$java_awt_Component$S$S$I$S",[frame, s, $I$(29).getString$S("TTrackBar.Dialog.SetMemory.Title"), -1, String.valueOf$I(C$.preferredMemorySize)]);
if (response == null  || response.length$() <= 0 ) return;
try {
var d=Math.rint(Double.parseDouble$S(response));
var n=(d < 0  ? -1 : (Math.max(d, 32)|0));
if (n != C$.preferredMemorySize) {
C$.preferredMemorySize=n;
var ans=$I$(54,"showConfirmDialog$java_awt_Component$O$S$I$I",[frame, $I$(29).getString$S("TTrackBar.Dialog.Memory.Relaunch.Message"), $I$(29).getString$S("TTrackBar.Dialog.Memory.Relaunch.Title"), 0, 3]);
if (ans == 0) {
C$.savePreferences$();
frame.relaunchCurrentTabs$();
}}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'checkMemory$org_opensourcephysics_cabrillo_tracker_TFrame$Z',  function (frame, ignoreLowMemory) {
var m=$I$(13).getMemory$();
var max=m[1];
var used=m[0];
var remaining=Long.$sub(max,used);
var warning=(Long.$lt(remaining,50 )) && 1.0 * remaining / max < 0.4   && !ignoreLowMemory ;
var danger=(Long.$lt(remaining,20 ));
var remains=" " + Long.$s(remaining) + " MB" ;
var limit=" " + Long.$s(max) + " MB" ;
if (danger) {
var message=$I$(29).getString$S("Tracker.Dialog.OutOfMemory.Message1") + limit + "\n" + $I$(29).getString$S("Tracker.Dialog.OutOfMemory.Message2") ;
var stop=$I$(29).getString$S("Tracker.Dialog.OutOfMemory.Stop");
var increase=$I$(29).getString$S("Tracker.Dialog.OutOfMemory.Increase");
var response=$I$(54,"showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O",[frame, message, $I$(29).getString$S("Tracker.Dialog.OutOfMemory.Title"), -1, 2, null, Clazz.array(String, -1, [stop, increase]), increase]);
if (response == 1) {
return 4;
}return 3;
}if (warning) {
var percent=" (" + Long.$ival((Long.$div(Long.$mul(100,remaining),max))) + "%)" ;
var message=$I$(29).getString$S("Tracker.Dialog.LowMemory.Message1") + "\n" + $I$(29).getString$S("Tracker.Dialog.LowMemory.Remaining") + remains + percent + "\n" + $I$(29).getString$S("Tracker.Dialog.LowMemory.Message2") + "\n\n" + $I$(29).getString$S("Tracker.Dialog.LowMemory.Message3") ;
if (frame == null ) System.out.println$S(message);
 else return ($I$(54,"showConfirmDialog$java_awt_Component$O$S$I$I",[frame, message, $I$(29).getString$S("Tracker.Dialog.LowMemory.Title"), 0, 2]) == 0 ? 1 : 2);
}return 0;
}, 1);

Clazz.newMeth(C$, 'checkSplash$',  function () {
if (C$.splash == null  || !C$.splash.isVisible$() ) return;
$I$(13,"trigger$I$java_awt_event_ActionListener",[1000, ((P$.Tracker$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "Tracker$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
if ($I$(1).splash != null ) $I$(1).splash.dispose$.apply($I$(1).splash, []);
$I$(1).splash=null;
});
})()
), Clazz.new_(P$.Tracker$lambda11.$init$,[this, null]))]);
}, 1);

Clazz.newMeth(C$, 'isDefaultConfiguration$java_util_Set',  function (panelConfig) {
return C$.areEqual$java_util_Set$java_util_Set(panelConfig, C$.defaultConfig);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.loadTabsInSeparateThread=!$I$(13).isJS;
C$.TRACKER_TEST_URL="https://physlets.org/tracker/counter/counter.php";
C$.doHoldRepaint=true;
C$.allowDataFunctionControls=!$I$(13).isJS;
C$.allowTableRefresh=true;
C$.allowPlotRefresh=true;
C$.allowDataRefresh=true;
C$.allowViews=true;
C$.allowMenuRefresh=true;
C$.allowToolbarRefresh=true;
C$.timeLogEnabled=false;
{
$I$(7,"setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader",[Clazz.getClass($I$(10)), Clazz.new_($I$(15,1))]);
};
{
$I$(13).addAssets$S$S$S("tracker", "tracker-assets.zip", "org/opensourcephysics");
};
C$.TRACKER_ICON=C$.getResourceIcon$S$Z("tracker_icon_32.png", false);
C$.TRACKER_ICON_256=C$.getResourceIcon$S$Z("tracker_icon_256.png", false);
C$.THETA=$I$(16).parseTeX$S("$\\theta");
C$.OMEGA=$I$(16).parseTeX$S("$\\omega");
C$.ALPHA=$I$(16).parseTeX$S("$\\alpha");
C$.DEFAULT_LOG_LEVEL=$I$(17).OUT_CONSOLE;
C$.testOn=false;
C$.testVal=0;
C$.fullConfig=Clazz.array(String, -1, ["file.new", "file.open", "file.close", "file.import", "file.export", "file.save", "file.saveAs", "file.print", "file.library", "edit.copyObject", "edit.copyData", "edit.copyImage", "edit.paste", "edit.matSize", "edit.clear", "edit.undoRedo", "video.import", "video.close", "video.visible", "video.filters", "pageView.edit", "notes.edit", "new.pointMass", "new.cm", "new.vector", "new.vectorSum", "new.lineProfile", "new.RGBRegion", "new.analyticParticle", "new.clone", "new.circleFitter", "new.dynamicParticle", "new.dynamicTwoBody", "new.dataTrack", "new.tapeMeasure", "new.protractor", "calibration.stick", "calibration.tape", "calibration.points", "calibration.offsetOrigin", "track.name", "track.description", "track.color", "track.footprint", "track.visible", "track.locked", "track.delete", "track.autoAdvance", "track.markByDefault", "track.autotrack", "model.stamp", "help.diagnostics", "coords.locked", "coords.origin", "coords.angle", "data.algorithm", "coords.scale", "coords.refFrame", "button.x", "button.v", "button.a", "button.trails", "button.labels", "button.stretch", "button.clipSettings", "button.xMass", "button.axes", "button.path", "button.drawing", "number.formats", "number.units", "text.columns", "plot.compare", "config.saveWithData", "data.builder", "data.tool"]);
C$.counterPath="https://physlets.org/tracker/counter/counter.php?";
C$.rootXMLPath="";
C$.trackerWebsite="opensourcephysics.github.io/tracker-website";
C$.showHints=true;
C$.readmeFileName="Tracker_README.txt";
C$.pdfHelpPath="/tracker_help.pdf";
C$.recentFiles=Clazz.new_($I$(14,1));
C$.minimumMemorySize=32;
C$.requestedMemorySize=-1;
C$.originalMemoryRequest=0;
C$.maxFontLevel=6;
C$.initialAutoloadSearchPaths=Clazz.new_($I$(18,1));
C$.preferredLogLevel=C$.DEFAULT_LOG_LEVEL;
C$.showHintsByDefault=true;
C$.recentFilesSize=6;
C$.preferredMemorySize=-1;
C$.checkForUpgradeInterval=0;
C$.preferredFontLevel=0;
C$.preferredFontLevelPlus=0;
C$.warnSkippedStep=true;
C$.warnXuggleError=true;
C$.warnNoVideoEngine=!$I$(13).isJS;
C$.warnVariableDuration=true;
C$.prelaunchExecutables=Clazz.array(String, [0]);
C$.autoloadMap=Clazz.new_($I$(19,1));
C$.markAtCurrentFrame=true;
C$.centerCalibrationStick=true;
C$.enableAutofill=true;
C$.showGaps=true;
C$.preferredTrailLengthIndex=2;
C$.preferredTimeUnit="s";
C$.preferredLengthUnit="m";
C$.preferredMassUnit="kg";
C$.declareLocales=true;
C$.testingFinal=true;
C$.dataFunctionControlStrings=Clazz.new_($I$(20,1));
C$.dataFunctionControls=Clazz.new_($I$(19,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Tracker, "Preferences", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(15,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Tracker.Preferences, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
if (!$I$(1).preferredLogLevel.equals$O($I$(1).DEFAULT_LOG_LEVEL)) control.setValue$S$O("log_level", $I$(1).preferredLogLevel.getName$());
if (!$I$(1).showHintsByDefault) control.setValue$S$Z("show_hints", $I$(1).showHintsByDefault);
if ($I$(1).isRadians) control.setValue$S$Z("radians", $I$(1).isRadians);
if (!$I$(1).markAtCurrentFrame) control.setValue$S$Z("mark_current_frame", $I$(1).markAtCurrentFrame);
if ($I$(1).scrubMouseWheel) control.setValue$S$Z("scrub_mousewheel", $I$(1).scrubMouseWheel);
if (!$I$(1).showGaps) control.setValue$S$Z("show_gaps", $I$(1).showGaps);
if (!$I$(1).enableAutofill) control.setValue$S$Z("enable_autofill", $I$(1).enableAutofill);
if ($I$(1).preferredTrailLengthIndex != 2) control.setValue$S$O("trail_length", $I$(2).trailLengthNames[$I$(1).preferredTrailLengthIndex]);
if (!$I$(1).centerCalibrationStick) control.setValue$S$Z("center_stick", $I$(1).centerCalibrationStick);
if ($I$(3).isFixedDecimalFormat) control.setValue$S$Z("decimal_format", $I$(3).isFixedDecimalFormat);
if (!$I$(1).isXuggleFast) control.setValue$S$Z("xuggle_smooth", true);
if (!$I$(1).warnNoVideoEngine) control.setValue$S$Z("warn_no_engine", $I$(1).warnNoVideoEngine);
if (!$I$(1).warnVariableDuration) control.setValue$S$Z("warn_variable_frame_duration", $I$(1).warnVariableDuration);
if (!$I$(1).warnXuggleError) control.setValue$S$Z("warn_xuggle_error", $I$(1).warnXuggleError);
if (!$I$(1).warnSkippedStep) control.setValue$S$Z("warn_skipped_step", $I$(1).warnSkippedStep);
var jar=$I$(1).preferredTrackerJar == null  ? "tracker.jar" : $I$(1).preferredTrackerJar;
if (!Clazz.new_([$I$(1).trackerHome, jar],$I$(4,1).c$$S$S).exists$()) jar="tracker.jar";
control.setValue$S$O("tracker_jar", jar);
if ($I$(1).preferredJRE != null ) control.setValue$S$O("java_vm", $I$(1).preferredJRE);
if ($I$(1).preferredPointMassFootprint != null ) control.setValue$S$O("pointmass_footprint", $I$(1).preferredPointMassFootprint);
if ($I$(1).preferredMemorySize > -1) control.setValue$S$I("memory_size", $I$(1).preferredMemorySize);
if ($I$(1).lookAndFeel != null ) control.setValue$S$O("look_feel", $I$(1).lookAndFeel);
if ($I$(1).prelaunchExecutables.length > 0) control.setValue$S$O("run", $I$(1).prelaunchExecutables);
if ($I$(1).preferredLocale != null ) control.setValue$S$O("locale", $I$(1).preferredLocale);
if ($I$(1).preferredDecimalSeparator != null ) control.setValue$S$O("decimal_separator", $I$(1).preferredDecimalSeparator);
if (!"s".equals$O($I$(1).preferredTimeUnit)) control.setValue$S$O("time_unit", $I$(1).preferredTimeUnit);
if (!"m".equals$O($I$(1).preferredLengthUnit)) control.setValue$S$O("length_unit", $I$(1).preferredLengthUnit);
if (!"kg".equals$O($I$(1).preferredMassUnit)) control.setValue$S$O("mass_unit", $I$(1).preferredMassUnit);
if ($I$(1).preferredFontLevel > 0) {
control.setValue$S$I("font_size", $I$(1).preferredFontLevel);
}if ($I$(1).preferredFontLevelPlus > 0) {
control.setValue$S$I("font_size_plus", $I$(1).preferredFontLevelPlus);
}if ($I$(5).getOSPCache$() != null ) {
var cache=$I$(5).getOSPCache$();
control.setValue$S$O("cache", cache.getPath$());
}control.setValue$S$I("upgrade_interval", $I$(1).checkForUpgradeInterval);
var lastChecked=Long.$ival((Long.$div($I$(1).lastMillisChecked,1000)));
control.setValue$S$I("last_checked", lastChecked);
if ($I$(1).latestVersion != null ) {
control.setValue$S$O("latest_version", $I$(1).latestVersion);
}var chooser=$I$(6).getChooser$();
var file=chooser.getCurrentDirectory$();
var userDir=System.getProperty$S("user.dir");
if (!file.getAbsolutePath$().equals$O(userDir)) control.setValue$S$O("file_chooser_directory", $I$(7).getAbsolutePath$java_io_File(file));
if (!$I$(6).getPreferredExportExtension$().equals$O("mp4")) control.setValue$S$O("export_extension", $I$(6).getPreferredExportExtension$());
if (!$I$(8).preferredExtension.equals$O("jpg")) control.setValue$S$O("zip_export_extension", $I$(8).preferredExtension);
if ($I$(1).recentFilesSize != 6) control.setValue$S$I("max_recent", $I$(1).recentFilesSize);
if (!$I$(1).recentFiles.isEmpty$()) control.setValue$S$O("recent_files", $I$(1).recentFiles);
if ($I$(1).preferredAutoloadSearchPaths != null ) {
control.setValue$S$O("autoload_search_paths", $I$(1).preferredAutoloadSearchPaths);
}if (!$I$(1).autoloadMap.isEmpty$()) {
var autoloadData=Clazz.array(String, [$I$(1).autoloadMap.size$(), null]);
var i=0;
for (var filePath, $filePath = $I$(1).autoloadMap.keySet$().iterator$(); $filePath.hasNext$()&&((filePath=($filePath.next$())),1);) {
var functions=$I$(1).autoloadMap.get$O(filePath);
var fileAndFunctions=Clazz.array(String, [functions.length + 1]);
fileAndFunctions[0]=filePath;
System.arraycopy$O$I$O$I$I(functions, 0, fileAndFunctions, 1, functions.length);
autoloadData[i]=fileAndFunctions;
++i;
}
control.setValue$S$O("autoload_exclusions", autoloadData);
}if (!$I$(1).dataFunctionControlStrings.isEmpty$()) {
control.setValue$S$O("data_functions", $I$(1).dataFunctionControlStrings);
}if ($I$(1).defaultConfig != null  && !$I$(1,"areEqual$java_util_Set$java_util_Set",[$I$(1).defaultConfig, $I$(1).getFullConfig$()]) ) {
var config=Clazz.new_([$I$(1).defaultConfig],$I$(9,1).c$$java_util_Set);
control.setValue$S$O("configuration", config);
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(10,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var logLevel=$I$(11,"parseLevel$S",[control.getString$S("log_level")]);
if (logLevel != null ) {
$I$(1).preferredLogLevel=logLevel;
$I$(11).setLevel$java_util_logging_Level(logLevel);
if (logLevel === $I$(12).ALL ) {
$I$(11).showLogInvokeLater$();
}}$I$(1).isRadians=control.getBoolean$S("radians");
if (control.getPropertyNamesRaw$().contains$O("mark_current_frame")) $I$(1).markAtCurrentFrame=control.getBoolean$S("mark_current_frame");
$I$(1).scrubMouseWheel=control.getBoolean$S("scrub_mousewheel");
if (control.getPropertyNamesRaw$().contains$O("enable_autofill")) $I$(1).enableAutofill=control.getBoolean$S("enable_autofill");
if (control.getPropertyNamesRaw$().contains$O("show_gaps")) $I$(1).showGaps=control.getBoolean$S("show_gaps");
if (control.getPropertyNamesRaw$().contains$O("center_stick")) $I$(1).centerCalibrationStick=control.getBoolean$S("center_stick");
$I$(1).isXuggleFast=!control.getBoolean$S("xuggle_smooth");
if (control.getPropertyNamesRaw$().contains$O("trail_length")) {
var name=control.getString$S("trail_length");
for (var i=0; i < $I$(2).trailLengthNames.length; i++) {
if ($I$(2).trailLengthNames[i].equals$O(name)) $I$(1).preferredTrailLengthIndex=i;
}
}if (control.getPropertyNamesRaw$().contains$O("warn_no_engine")) $I$(1).warnNoVideoEngine=control.getBoolean$S("warn_no_engine");
if (control.getPropertyNamesRaw$().contains$O("warn_xuggle_error")) $I$(1).warnXuggleError=control.getBoolean$S("warn_xuggle_error");
if (control.getPropertyNamesRaw$().contains$O("warn_skipped_step")) $I$(1).warnSkippedStep=control.getBoolean$S("warn_skipped_step");
if (control.getPropertyNamesRaw$().contains$O("warn_variable_frame_duration")) $I$(1).warnVariableDuration=control.getBoolean$S("warn_variable_frame_duration");
if (control.getPropertyNamesRaw$().contains$O("show_hints")) {
$I$(1).showHintsByDefault=control.getBoolean$S("show_hints");
$I$(1).showHints=$I$(1).showHintsByDefault;
$I$(1).startupHintShown=!$I$(1).showHints;
}if (control.getPropertyNamesRaw$().contains$O("java_vm")) {
$I$(1).preferredJRE=control.getString$S("java_vm");
if ($I$(13,"getJavaFile$S",[$I$(1).preferredJRE]) == null ) {
$I$(1).preferredJRE=null;
}}$I$(1).preferredPointMassFootprint=control.getString$S("pointmass_footprint");
if (control.getPropertyNamesRaw$().contains$O("decimal_format")) {
$I$(3).isFixedDecimalFormat=control.getBoolean$S("decimal_format");
}if (control.getPropertyNamesRaw$().contains$O("memory_size")) $I$(1).requestedMemorySize=control.getInt$S("memory_size");
if (control.getPropertyNamesRaw$().contains$O("look_feel")) $I$(1).lookAndFeel=control.getString$S("look_feel");
if (control.getPropertyNamesRaw$().contains$O("decimal_separator")) {
$I$(1).preferredDecimalSeparator=control.getString$S("decimal_separator");
$I$(13,"setPreferredDecimalSeparator$S",[$I$(1).preferredDecimalSeparator]);
}if (control.getPropertyNamesRaw$().contains$O("time_unit")) $I$(1).preferredTimeUnit=control.getString$S("time_unit");
if (control.getPropertyNamesRaw$().contains$O("length_unit")) $I$(1).preferredLengthUnit=control.getString$S("length_unit");
if (control.getPropertyNamesRaw$().contains$O("mass_unit")) $I$(1).preferredMassUnit=control.getString$S("mass_unit");
if (control.getPropertyNamesRaw$().contains$O("run")) $I$(1).prelaunchExecutables=control.getObject$S("run");
if (control.getPropertyNamesRaw$().contains$O("locale")) $I$(1,"setPreferredLocale$S",[control.getString$S("locale")]);
if (control.getPropertyNamesRaw$().contains$O("font_size")) {
$I$(1).preferredFontLevel=control.getInt$S("font_size");
$I$(1).preferredFontLevelPlus=control.getInt$S("font_size_plus");
if ($I$(1).preferredFontLevelPlus == -2147483648) {
$I$(1).preferredFontLevelPlus=0;
}}if ($I$(5).getOSPCache$() == null ) {
$I$(5,"setOSPCache$S",[control.getString$S("cache")]);
}if (control.getPropertyNamesRaw$().contains$O("upgrade_interval")) {
$I$(1).checkForUpgradeInterval=control.getInt$S("upgrade_interval");
$I$(1).lastMillisChecked=Long.$mul(control.getInt$S("last_checked"),1000);
}$I$(1).latestVersion=control.getString$S("latest_version");
if (control.getPropertyNamesRaw$().contains$O("file_chooser_directory")) $I$(13).chooserDir=control.getString$S("file_chooser_directory");
$I$(6,"setPreferredExportExtension$S",[control.getString$S("export_extension")]);
if (control.getPropertyNamesRaw$().contains$O("zip_export_extension")) $I$(8).preferredExtension=control.getString$S("zip_export_extension");
if (control.getPropertyNamesRaw$().contains$O("max_recent")) $I$(1).recentFilesSize=control.getInt$S("max_recent");
if (control.getPropertyNamesRaw$().contains$O("recent_files")) {
var recent=Clazz.getClass($I$(14)).cast$O(control.getObject$S("recent_files"));
for (var next, $next = recent.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
$I$(1,"addRecent$S$Z",[next.toString(), true]);
}
}$I$(1).preferredAutoloadSearchPaths=control.getObject$S("autoload_search_paths");
if (control.getPropertyNamesRaw$().contains$O("autoload_exclusions")) {
var autoloadData=control.getObject$S("autoload_exclusions");
for (var next, $next = 0, $$next = autoloadData; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
var filePath=$I$(7).forwardSlash$S(next[0]);
var functions=Clazz.array(String, [next.length - 1]);
System.arraycopy$O$I$O$I$I(next, 1, functions, 0, functions.length);
$I$(1).autoloadMap.put$O$O(filePath, functions);
}
}if (control.getPropertyNamesRaw$().contains$O("data_functions")) {
var autoloads=control.getObject$S("data_functions");
$I$(1).dataFunctionControlStrings.addAll$java_util_Collection(autoloads);
}var child=control.getChildControl$S("configuration");
if (child != null ) {
var config=child.loadObject$O(null);
$I$(1).setDefaultConfig$java_util_Set(config.enabled);
}$I$(1).preferredTrackerJar=control.getString$S("tracker_jar");
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
