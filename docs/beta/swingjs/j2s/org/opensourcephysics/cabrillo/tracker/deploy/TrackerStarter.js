(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker.deploy"),I$=[[0,'org.opensourcephysics.cabrillo.tracker.deploy.TrackerJarFilter','org.opensourcephysics.cabrillo.tracker.deploy.TrackerStarter','java.util.HashMap','org.opensourcephysics.display.OSPRuntime','javax.swing.JFileChooser','java.io.File','Thread','org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.tools.JREFinder','javax.swing.JOptionPane',['org.opensourcephysics.display.OSPRuntime','.Version'],'ProcessBuilder','java.util.ArrayList','java.io.BufferedReader','java.io.InputStreamReader','java.io.FileOutputStream','java.nio.charset.Charset','java.io.OutputStreamWriter','java.io.BufferedWriter','java.text.SimpleDateFormat','java.util.Calendar','java.util.jar.JarFile']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrackerStarter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['debug','log','relaunching','launching','isNewInstall','abortExit'],'I',['memorySize','preferredMemorySize','port','exitCounter','xuggleVersionIndex'],'S',['newline','encoding','exceptions','xuggleWarning','ffmpegWarning','starterWarning','trackerHome','userHome','javaHome','xuggleHome','userDocuments','startLogPath','preferredVersionString','trackerJarPath','logText','javaCommand','preferredVM','snapshot'],'O',['trackerJarFilter','java.io.FilenameFilter','codeBaseDir','java.io.File','+starterJarFile','+xuggleServerJar','+xuggleJar','executables','String[]','+bundledVMs','launchThread','Thread','+exitThread','XUGGLE_JAR_NAMES','String[][]','xuggleFileFilter','java.io.FileFilter','usesXuggleServer','java.util.HashMap']]]

Clazz.newMeth(C$, 'main$SA',  function (args) {
C$.relaunching=false;
C$.logText="";
C$.logMessage$S("launch initiated by user");
if ($I$(4).isMac$()) {
C$.launchThread=Clazz.new_([((P$.TrackerStarter$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerStarter$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var className="org.opensourcephysics.cabrillo.tracker.deploy.OSXServices";
try {
var OSXClass=Clazz.forName(className);
var constructor=OSXClass.getConstructor$ClassA(Clazz.array(Class, -1, []));
var OSXServices=constructor.newInstance$OA(Clazz.array(java.lang.Object, -1, []));
var m=OSXClass.getDeclaredMethod$S$ClassA("getStatus", null);
var status=m.invoke$O$OA(OSXServices, null);
$I$(2).logMessage$S("" + status);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
$I$(2).logMessage$S("OSXServices failed");
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var err = e$$;
{
$I$(2).logMessage$S("OSXServices failed");
}
} else {
throw e$$;
}
}
var i=0;
while ($I$(2).launchThread != null  && i < 5 ){
try {
$I$(7).sleep$J(100);
++i;
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
}
;if ($I$(2).launchThread != null ) {
$I$(2).launchTracker$SA(this.$finals$.args);
}});
})()
), Clazz.new_(P$.TrackerStarter$2.$init$,[this, {args:args}]))],$I$(7,1).c$$Runnable);
C$.launchThread.start$();
} else {
C$.launchTracker$SA(args);
}}, 1);

Clazz.newMeth(C$, 'launchTracker$SA',  function (args) {
if (C$.launching) return;
C$.launching=true;
C$.logMessage$S("TrackerStarter running in jre: " + C$.javaHome);
C$.launchThread=null;
if (args != null  && args.length > 0  && (args[0].contains$CharSequence("tracker.jar") || (args[0].contains$CharSequence("tracker-") && args[0].contains$CharSequence(".jar") ) ) ) {
System.setProperty$S$S("PREFERRED_TRACKER_JAR", args[0]);
System.setProperty$S$S("TRACKER_NEW_VERSION", args[0]);
var newArgs=Clazz.array(String, [args.length - 1]);
if (newArgs.length > 0) {
System.arraycopy$O$I$O$I$I(args, 1, newArgs, 0, newArgs.length);
args=newArgs;
} else args=null;
}var argString=null;
if (args != null  && args.length > 0 ) {
argString="";
for (var next, $next = 0, $$next = args; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
argString+="\"" + next + "\" " ;
}
}C$.logMessage$S("launching with main arguments: " + argString);
try {
C$.trackerHome=C$.findTrackerHome$Z(true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
C$.exceptions+=ex.getClass$().getSimpleName$() + ": " + ex.getMessage$() + C$.newline ;
} else {
throw ex;
}
}
if (C$.trackerHome == null ) {
C$.exitGracefully$S(null);
}try {
C$.xuggleHome=C$.findXuggleHome$S$Z(C$.trackerHome, true);
if (C$.xuggleHome != null ) {
C$.xuggleJar=Clazz.new_($I$(6,1).c$$S$S,[C$.trackerHome, C$.XUGGLE_JAR_NAMES[1][0] + ".jar"]);
if (C$.xuggleJar.exists$()) {
C$.logMessage$S("xuggle 3.4 found: " + C$.xuggleJar);
}C$.xuggleServerJar=Clazz.new_($I$(6,1).c$$S$S,[C$.trackerHome, C$.XUGGLE_JAR_NAMES[0][0] + ".jar"]);
if (C$.xuggleServerJar.exists$()) {
C$.logMessage$S("xuggle 5.7 found: " + C$.xuggleServerJar);
}}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
C$.exceptions+=ex.getClass$().getSimpleName$() + ": " + ex.getMessage$() + C$.newline ;
} else {
throw ex;
}
}
C$.loadPreferences$();
var jarPath=null;
try {
jarPath=C$.getTrackerJarPath$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
C$.exceptions+=ex.getClass$().getSimpleName$() + ": " + ex.getMessage$() + C$.newline ;
} else {
throw ex;
}
}
if (jarPath == null ) {
C$.exitGracefully$S(null);
}var usesServer=C$.usesXuggleServer$S(jarPath);
C$.xuggleVersionIndex=usesServer ? 0 : 1;
var xuggleVers=usesServer ? "5.7" : "3.4";
var source=$I$(8).forwardSlash$S(C$.xuggleHome);
if (C$.xuggleVersionIndex == 1) source+="/share/java/jars";
if (C$.copyXuggleJarsTo$S$S(C$.trackerHome, source)) {
C$.logMessage$S("xuggle " + xuggleVers + " files up to date " );
} else {
C$.logMessage$S("xuggle " + xuggleVers + " files missing or not up to date " );
}var launched=true;
try {
C$.memorySize=C$.preferredMemorySize;
C$.startTracker$S$SA(jarPath, args);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
launched=false;
C$.exceptions+=ex.getClass$().getSimpleName$() + ": " + ex.getMessage$() + C$.newline ;
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var er = e$$;
{
launched=false;
C$.exceptions+=er.getClass$().getSimpleName$() + ": " + er.getMessage$() + C$.newline ;
}
} else {
throw e$$;
}
}
if (!launched) {
C$.exitGracefully$S(jarPath);
}}, 1);

Clazz.newMeth(C$, 'relaunch$SA$Z',  function (args, secondTry) {
C$.relaunching=secondTry;
C$.launching=false;
var runner=((P$.TrackerStarter$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerStarter$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(2).logMessage$S("relaunch initiated by Tracker");
$I$(2).launchTracker$SA(this.$finals$.args);
});
})()
), Clazz.new_(P$.TrackerStarter$3.$init$,[this, {args:args}]));
Clazz.new_($I$(7,1).c$$Runnable,[runner]).start$();
}, 1);

Clazz.newMeth(C$, 'findTrackerHome$Z',  function (writeToLog) {
if (C$.trackerHome != null  || $I$(4).isJS ) {
if (writeToLog) {
C$.logMessage$S("using trackerhome: " + C$.trackerHome);
}return C$.trackerHome;
}
{}
return C$.trackerHome;
}, 1);

Clazz.newMeth(C$, 'findPreferences$',  function () {
if ($I$(4).isJS) return null;
var controls=Clazz.new_($I$(3,1));
var firstFileFound=null;
var newestFileFound=null;
var modified=0;
for (var i=0; i < 2; i++) {
var prefsFileName="tracker.prefs";
if (i == 1) {
prefsFileName="." + prefsFileName;
}for (var path, $path = $I$(4).getDefaultSearchPaths$().iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
var prefsPath=Clazz.new_($I$(6,1).c$$S$S,[path, prefsFileName]).getAbsolutePath$();
var file=Clazz.new_($I$(6,1).c$$S,[prefsPath]);
if (file.exists$()) {
var control=Clazz.new_($I$(9,1).c$$java_io_File,[file]);
if (!control.failedToRead$() && control.getObjectClassName$().endsWith$S("Preferences") ) {
if (Long.$gt(file.lastModified$(),Long.$add(modified,50) )) {
newestFileFound=file;
modified=file.lastModified$();
}controls.put$O$O(file, control);
if (firstFileFound == null ) {
firstFileFound=file;
}}}}
var file=Clazz.new_($I$(6,1).c$$S,[prefsFileName]);
if (file.exists$()) {
var control=Clazz.new_($I$(9,1).c$$java_io_File,[file]);
if (!control.failedToRead$() && control.getObjectClassName$().endsWith$S("Preferences") ) {
if (Long.$gt(file.lastModified$(),Long.$add(modified,50) )) {
newestFileFound=file;
modified=file.lastModified$();
}controls.put$O$O(file, control);
if (firstFileFound == null ) {
firstFileFound=file;
}}}}
if (newestFileFound != null  && newestFileFound !== firstFileFound  ) {
$I$(10).copyAllFiles$java_io_File$O(newestFileFound, firstFileFound);
controls.put$O$O(firstFileFound, controls.get$O(newestFileFound));
}if (firstFileFound != null ) {
var control=controls.get$O(firstFileFound);
control.setValue$S$O("prefsPath", firstFileFound.getAbsolutePath$());
return control;
}return null;
}, 1);

Clazz.newMeth(C$, 'findXuggleHome$S$Z',  function (trackerHome, writeToLog) {
if (trackerHome != null ) {
var trackerHomeDir=Clazz.new_($I$(6,1).c$$S,[trackerHome]);
var f=Clazz.new_($I$(6,1).c$$java_io_File$S,[trackerHomeDir, "Xuggle"]);
if (!f.exists$() || !f.isDirectory$() ) {
f=Clazz.new_([trackerHomeDir.getParentFile$(), "Xuggle"],$I$(6,1).c$$java_io_File$S);
}if ((!f.exists$() || !f.isDirectory$() ) && $I$(4).isMac$() ) {
f=Clazz.new_($I$(6,1).c$$S,["/usr/local/xuggler"]);
}if (f.exists$() && f.isDirectory$() ) {
C$.xuggleHome=f.getPath$();
if (writeToLog) C$.logMessage$S("xugglehome found relative to trackerhome: " + C$.xuggleHome);
}}if (C$.xuggleHome == null ) {
C$.xuggleHome=$I$(4).getPreference$S("XUGGLE_HOME");
if (writeToLog) C$.logMessage$S("osp.prefs XUGGLE_HOME: " + C$.xuggleHome);
if (C$.xuggleHome != null  && !C$.fileExists$S(C$.xuggleHome) ) {
C$.xuggleHome=null;
if (writeToLog) C$.logMessage$S("XUGGLE_HOME directory no longer exists");
}}if (C$.xuggleHome == null ) {
try {
C$.xuggleHome=System.getenv$S("XUGGLE_HOME");
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
C$.exceptions+=ex.getClass$().getSimpleName$() + ": " + ex.getMessage$() + C$.newline ;
} else {
throw ex;
}
}
if (writeToLog) C$.logMessage$S("environment variable XUGGLE_HOME: " + C$.xuggleHome);
if (C$.xuggleHome != null  && !C$.fileExists$S(C$.xuggleHome) ) {
C$.xuggleHome=null;
if (writeToLog) C$.logMessage$S("XUGGLE_HOME directory no longer exists");
}}if (C$.xuggleHome == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["xugglehome not found"]);
if (writeToLog) C$.logMessage$S("using xugglehome: " + C$.xuggleHome);
return C$.xuggleHome;
}, 1);

Clazz.newMeth(C$, 'getXuggleServerJar$',  function () {
return C$.xuggleServerJar;
}, 1);

Clazz.newMeth(C$, 'findBundledVMs$',  function () {
if (C$.bundledVMs != null ) return C$.bundledVMs;
try {
C$.findTrackerHome$Z(false);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if ($I$(4).isWindows$()) {
var jre=$I$(11).getFinder$().getDefaultJRE$I$S$Z$S(64, C$.trackerHome, false, "OpenJDK");
var jrepath=jre == null  ? null : jre.getPath$();
var jre32=$I$(11).getFinder$().getDefaultJRE$I$S$Z$S(32, C$.trackerHome, false, "OpenJDK");
var jre32path=jre32 == null  ? null : jre32.getPath$();
return Clazz.array(String, -1, [jrepath, jre32path]);
} else if ($I$(4).isMac$()) {
var home=Clazz.new_($I$(6,1).c$$S,[C$.trackerHome]);
var path=home.getParent$() + "/runtime";
var jre=$I$(11).getFinder$().getDefaultJRE$I$S$Z$S(64, path, false, null);
return Clazz.array(String, -1, [jre == null  ? null : jre.getPath$()]);
} else {
var jre=$I$(11).getFinder$().getDefaultJRE$I$S$Z$S(64, C$.trackerHome, false, "OpenJDK");
return Clazz.array(String, -1, [jre == null  ? null : jre.getPath$()]);
}}, 1);

Clazz.newMeth(C$, 'exitGracefully$S',  function (jarPath) {
if (C$.exitThread != null ) C$.abortExit=true;
if (C$.exceptions.equals$O("")) C$.exceptions="None";
var startLogLine="";
if (C$.startLogPath != null ) {
startLogLine="For more information see " + C$.startLogPath + C$.newline ;
}if (jarPath != null ) {
$I$(12,"showMessageDialog$java_awt_Component$O$S$I",[null, "Tracker could not be started due to the problem(s) listed below." + C$.newline + "However, you may be able to start it by double-clicking the file" + C$.newline + jarPath + "." + C$.newline + C$.newline + startLogLine + "For trouble-shooting or to download the latest installer," + C$.newline + "please see https://opensourcephysics.github.io/tracker-website/." + C$.newline + C$.newline + "Problems:" + C$.newline + C$.exceptions , "TrackerStarter Vers 6.3.5.260922: Error Starting Tracker", 0]);
} else {
if (C$.trackerHome == null ) {
if (C$.codeBaseDir != null ) {
$I$(12).showMessageDialog$java_awt_Component$O$S$I(null, "It appears you have an incomplete Tracker installation, since" + C$.newline + "no directory named \"Tracker\" could be found and " + C$.newline + "no tracker.jar or tracker-x.xx.jar file exists in " + C$.newline + C$.codeBaseDir + C$.newline + C$.newline + startLogLine + "For trouble-shooting or to download the latest installer," + C$.newline + "please see https://https://opensourcephysics.github.io/tracker-website/." + C$.newline + C$.newline + "Problems:" + C$.newline + C$.exceptions , "TrackerStarter Vers 6.3.5.260922: Error Starting Tracker", 0);
} else {
$I$(12).showMessageDialog$java_awt_Component$O$S$I(null, "It appears you have an incomplete Tracker installation, since" + C$.newline + "no directory named \"Tracker\" could be found and " + C$.newline + "no tracker.jar or tracker-x.xx.jar file exists in the current directory." + C$.newline + C$.newline + startLogLine + "For trouble-shooting or to download the latest installer," + C$.newline + "please see https://https://opensourcephysics.github.io/tracker-website/." + C$.newline + C$.newline + "Problems:" + C$.newline + C$.exceptions , "TrackerStarter Vers 6.3.5.260922: Error Starting Tracker", 0);
}} else {
var jarHome=$I$(4).isMac$() ? C$.codeBaseDir.getAbsolutePath$() : C$.trackerHome;
$I$(12).showMessageDialog$java_awt_Component$O$S$I(null, "No tracker.jar or tracker-x.xx.jar was found in" + C$.newline + jarHome + C$.newline + C$.newline + startLogLine + "For trouble-shooting or to download the latest installer," + C$.newline + "please see https://https://opensourcephysics.github.io/tracker-website/." + C$.newline + C$.newline + "Problems:" + C$.newline + C$.exceptions , "TrackerStarter Vers 6.3.5.260922: Error Starting Tracker", 0);
}}C$.writeUserLog$();
C$.writeCodeBaseLog$S("tracker_start.log");
$I$(4).exit$();
System.exit$I(0);
}, 1);

Clazz.newMeth(C$, 'isNewInstall$',  function () {
var curVersion=$I$(4).getPreference$S("local_OSP_version");
C$.logMessage$S("local OSP version " + curVersion);
if (curVersion == null ) return true;
var prev=curVersion.toString();
var v1="6.3.5.260922".split$S("\\.");
var v2=prev.split$S("\\.");
for (var i=0; i < 3; i++) {
var current=Integer.parseInt$S(v1[i]);
var old=Integer.parseInt$S(v2[i]);
if (current > old) {
return true;
} else if (current < old) {
break;
}}
return false;
}, 1);

Clazz.newMeth(C$, 'loadPreferences$',  function () {
C$.trackerJarPath=null;
var loaded=false;
var prefsXMLControl=C$.findPreferences$();
C$.isNewInstall=prefsXMLControl == null  || C$.isNewInstall$() ;
if (C$.isNewInstall) {
$I$(4).setPreference$S$O("local_OSP_version", "6.3.5.260922");
$I$(4).savePreferences$();
C$.logMessage$S("a new Tracker version has been installed");
}if (prefsXMLControl == null ) {
return;
}var prefsPath=prefsXMLControl.getString$S("prefsPath");
if (!prefsXMLControl.failedToRead$()) {
C$.logMessage$S("loading starter preferences from: " + prefsPath);
var jar=null;
var systemProperty=System.getProperty$S("PREFERRED_TRACKER_JAR");
if (systemProperty != null ) {
loaded=true;
C$.trackerJarPath=systemProperty;
jar=$I$(8).getName$S(C$.trackerJarPath);
C$.logMessage$S("system property " + "PREFERRED_TRACKER_JAR" + " = " + systemProperty );
} else if (prefsXMLControl.getPropertyNamesRaw$().contains$O("tracker_jar")) {
loaded=true;
jar=prefsXMLControl.getString$S("tracker_jar");
}var versionStr="6.3.5.260922";
var useDefaultTrackerJar=jar == null ;
if (jar != null ) {
if (!jar.equals$O("tracker.jar")) {
var dot=jar.indexOf$S(".jar");
var ver=jar.substring$I$I(8, dot);
versionStr=ver;
var n=ver.toLowerCase$().indexOf$S(C$.snapshot);
if (n > -1) {
ver=ver.substring$I$I(0, n);
}if (Clazz.new_($I$(13,1).c$$S,[ver]).isValid$()) {
if (Clazz.new_($I$(6,1).c$$S$S,[C$.trackerHome, jar]).exists$()) {
C$.preferredVersionString=versionStr;
C$.logMessage$S("preferred Tracker version: " + C$.preferredVersionString);
useDefaultTrackerJar=false;
} else {
useDefaultTrackerJar=true;
C$.logMessage$S("preferred Tracker not found: " + jar);
}} else {
C$.logMessage$S("version number not valid: " + ver);
}} else {
C$.logMessage$S("preferred Tracker version: tracker.jar");
}}if (C$.isNewInstall) {
useDefaultTrackerJar=true;
if (jar != null  && !"tracker.jar".equals$O(jar) ) C$.logMessage$S("new installation--preferred Tracker version ignored");
jar="tracker.jar";
C$.preferredVersionString=null;
}if (useDefaultTrackerJar) {
if (jar == null ) C$.logMessage$S("no preferred Tracker version, using tracker.jar (presumed 6.3.5.260922)");
 else C$.logMessage$S("using default tracker.jar (presumed 6.3.5.260922)");
}var jarName=useDefaultTrackerJar ? "tracker.jar" : jar;
var jarHome=$I$(4).isMac$() ? C$.codeBaseDir.getAbsolutePath$() : C$.trackerHome;
var jarPath=Clazz.new_($I$(6,1).c$$S$S,[jarHome, jarName]).getAbsolutePath$();
var requestXuggleServer=C$.usesXuggleServer$S(jarPath);
C$.logMessage$S("preferred xuggle version: " + (requestXuggleServer ? "5.7 server" : "3.4"));
C$.preferredVM=null;
if (prefsXMLControl.getPropertyNamesRaw$().contains$O("java_vm")) {
loaded=true;
C$.preferredVM=prefsXMLControl.getString$S("java_vm");
C$.logMessage$S("preferred java VM: " + C$.preferredVM);
}if (requestXuggleServer && C$.xuggleServerJar != null   && C$.preferredVM != null   && $I$(11).getFinder$().is32BitVM$S(C$.preferredVM) ) {
C$.logMessage$S("preferred VM ignored since xuggle 5.7 requires a 64 bit java VM");
C$.preferredVM=null;
}if ($I$(4).isWindows$() && !requestXuggleServer && C$.xuggleJar != null    && C$.preferredVM != null   && !$I$(11).getFinder$().is32BitVM$S(C$.preferredVM) ) {
C$.logMessage$S("preferred VM ignored since xuggle 3.4 requires a 32 bit java VM");
C$.preferredVM=null;
}if (C$.isNewInstall && C$.preferredVM != null  ) {
C$.logMessage$S("new installation--preferred VM ignored");
C$.preferredVM=null;
}if (C$.preferredVM != null ) {
var javaFile=$I$(4).getJavaFile$S(C$.preferredVM);
if (javaFile != null ) {
C$.javaCommand=$I$(8,"stripExtension$S",[javaFile.getPath$()]);
} else {
C$.logMessage$S("preferred java VM invalid");
C$.preferredVM=null;
}}if (C$.preferredVM == null ) {
C$.bundledVMs=C$.findBundledVMs$();
if (requestXuggleServer && C$.xuggleServerJar != null  ) {
if (C$.bundledVMs[0] == null ) {
var vm=$I$(11).getFinder$().getDefaultJRE$I$S$Z$S(64, C$.trackerHome, true, null);
if (vm != null ) {
var javaFile=$I$(4,"getJavaFile$S",[vm.getPath$()]);
if (javaFile != null ) {
C$.logMessage$S("no bundled VM, using default VM: " + vm.getPath$());
C$.javaCommand=$I$(8,"stripExtension$S",[javaFile.getPath$()]);
}}} else {
var javaFile=$I$(4).getJavaFile$S(C$.bundledVMs[0]);
if (javaFile != null ) {
C$.logMessage$S("using bundled VM: " + C$.bundledVMs[0]);
C$.javaCommand=$I$(8,"stripExtension$S",[javaFile.getPath$()]);
}}} else if (!requestXuggleServer && C$.xuggleJar != null  ) {
var index=$I$(4).isWindows$() ? 1 : 0;
var bitness=$I$(4).isWindows$() ? 32 : 64;
if (C$.bundledVMs.length <= index || C$.bundledVMs[index] == null  ) {
var vm=$I$(11).getFinder$().getDefaultJRE$I$S$Z$S(bitness, C$.trackerHome, true, null);
if (vm != null ) {
var javaFile=$I$(4,"getJavaFile$S",[vm.getPath$()]);
if (javaFile != null ) {
C$.logMessage$S("no bundled VM, using default VM: " + vm.getPath$());
C$.javaCommand=$I$(8,"stripExtension$S",[javaFile.getPath$()]);
}}} else {
var javaFile=$I$(4).getJavaFile$S(C$.bundledVMs[index]);
if (javaFile != null ) {
C$.logMessage$S("using bundled VM: " + C$.bundledVMs[index]);
C$.javaCommand=$I$(8,"stripExtension$S",[javaFile.getPath$()]);
}}} else {
C$.logMessage$S("no bundled java VM, using current VM");
}}if (prefsXMLControl.getPropertyNamesRaw$().contains$O("run")) {
loaded=true;
C$.executables=prefsXMLControl.getObject$S("run");
for (var i=0; i < C$.executables.length; i++) {
var app=C$.executables[i];
if (app == null ) continue;
var runFile=Clazz.new_($I$(6,1).c$$S$S,[C$.trackerHome, app]);
if (!runFile.exists$()) {
runFile=Clazz.new_($I$(6,1).c$$S,[app]);
if (!runFile.exists$()) {
runFile=null;
C$.logMessage$S("executable file not found: " + app);
}}if (runFile != null ) try {
C$.logMessage$S("executing " + runFile.getAbsolutePath$());
var pb=Clazz.new_([Clazz.array(String, -1, [runFile.getAbsolutePath$()])],$I$(14,1).c$$SA);
pb.directory$java_io_File(Clazz.new_($I$(6,1).c$$S,[C$.trackerHome]));
var p=pb.start$();
p.waitFor$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
C$.logMessage$S("execution failed: " + ex.getClass$().getSimpleName$() + " " + ex.getMessage$() );
} else {
throw ex;
}
}
}
}C$.preferredMemorySize=0;
systemProperty=System.getProperty$S("PREFERRED_MEMORY_SIZE");
if (systemProperty != null ) {
loaded=true;
try {
C$.preferredMemorySize=Integer.parseInt$S(systemProperty);
C$.logMessage$S("system property " + "PREFERRED_MEMORY_SIZE" + " = " + systemProperty );
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
} else if (prefsXMLControl.getPropertyNamesRaw$().contains$O("memory_size")) {
C$.preferredMemorySize=prefsXMLControl.getInt$S("memory_size");
}if (C$.preferredMemorySize > 0) {
C$.logMessage$S("preferred memory size: " + C$.preferredMemorySize + " MB" );
} else {
C$.preferredMemorySize=1024;
C$.logMessage$S("using default memory size: " + C$.preferredMemorySize + " MB" );
}if (!loaded) C$.logMessage$S("no starter preferences found in " + prefsPath);
}}, 1);

Clazz.newMeth(C$, 'getXuggleJarNames$S',  function (jarpath) {
C$.xuggleVersionIndex=jarpath == null  ? 0 : C$.usesXuggleServer$S(jarpath) ? 0 : 1;
return C$.XUGGLE_JAR_NAMES[C$.xuggleVersionIndex];
}, 1);

Clazz.newMeth(C$, 'getTrackerJarPath$',  function () {
if (C$.trackerJarPath != null ) {
return C$.trackerJarPath;
}var jarPath=null;

{}
}, 1);

Clazz.newMeth(C$, 'copyXuggleJarsTo$S$S',  function (targetDir, xuggleDir) {
if (xuggleDir == null  || targetDir == null  ) {
return false;
}var xuggleJarDir=Clazz.new_($I$(6,1).c$$S,[xuggleDir]);
C$.xuggleVersionIndex=xuggleDir.contains$CharSequence("share/java/jars") ? 1 : 0;
var xuggleJars=xuggleJarDir.listFiles$java_io_FileFilter(C$.xuggleFileFilter);
var upToDate=true;
var xuggleNames=C$.XUGGLE_JAR_NAMES[C$.xuggleVersionIndex];
for (var i=0; i < xuggleNames.length; i++) {
var xuggleFile=null;
var modified=0;
for (var j=0; j < xuggleJars.length; j++) {
if (!xuggleJars[j].getName$().startsWith$S(xuggleNames[i])) continue;
if (Long.$gt(xuggleJars[j].lastModified$(),modified )) {
xuggleFile=xuggleJars[j];
modified=xuggleFile.lastModified$();
}}
if (xuggleFile != null ) {
var target=Clazz.new_($I$(6,1).c$$S$S,[targetDir, xuggleNames[i] + ".jar"]);
if (!target.exists$() || Long.$lt(target.lastModified$(),modified ) ) {
upToDate=$I$(10).copyFile$java_io_File$java_io_File$I(xuggleFile, target, 100000) && upToDate ;
}}}
return upToDate;
}, 1);

Clazz.newMeth(C$, 'startTracker$S$SA',  function (jarPath, args) {
var newVersionURL=System.getProperty$S("TRACKER_NEW_VERSION");
var cmd=Clazz.new_($I$(15,1));
if (C$.javaCommand.equals$O("java") && C$.javaHome != null  ) {
C$.javaCommand=$I$(8).forwardSlash$S(C$.javaHome) + "/bin/java";
}cmd.add$O(C$.javaCommand);
var isOpenjdk=C$.javaCommand.contains$CharSequence("OpenJDK");
var file=Clazz.new_($I$(6,1).c$$S$S,[C$.trackerHome, "fontconfig.properties"]);
var hasLocalFontConfig=file.exists$();
if (isOpenjdk && hasLocalFontConfig ) {
var s="-Dsun.awt.fontconfig=" + file.getPath$();
cmd.add$O(s);
C$.logMessage$S("found fontconfig.properties at " + file.getPath$());
}if (C$.memorySize > 0) {
cmd.add$O("-Xms32m");
cmd.add$O("-Xmx" + C$.memorySize + "m" );
}if ($I$(4).isMac$()) {
cmd.add$O("-Xdock:name=Tracker");
}cmd.add$O("-jar");
cmd.add$O(jarPath);
if (args != null  && args.length > 0 ) for (var next, $next = 0, $$next = args; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (next != null ) cmd.add$O(next);
}
var builder=Clazz.new_($I$(14,1).c$$java_util_List,[cmd]);
var env=builder.environment$();
if (C$.memorySize < C$.preferredMemorySize) {
env.put$O$O("MEMORY_SIZE", String.valueOf$I(C$.memorySize));
C$.logMessage$S("setting environment variable MEMORY_SIZE = " + String.valueOf$I(C$.memorySize));
} else env.remove$O("MEMORY_SIZE");
env.remove$O("XUGGLE_WARNING");
env.remove$O("FFMPEG_WARNING");
if (C$.starterWarning != null ) {
env.put$O$O("STARTER_WARNING", C$.starterWarning);
} else env.remove$O("STARTER_WARNING");
if (C$.trackerHome != null ) {
env.put$O$O("TRACKER_HOME", C$.trackerHome);
C$.logMessage$S("setting TRACKER_HOME = " + C$.trackerHome);
}if (C$.xuggleHome != null ) {
env.put$O$O("XUGGLE_HOME", C$.xuggleHome);
C$.logMessage$S("setting XUGGLE_HOME = " + C$.xuggleHome);
var subdir=$I$(4).isWindows$() ? "bin" : "lib";
if (C$.xuggleJar.exists$() && Clazz.new_($I$(6,1).c$$S$S,[C$.xuggleHome, subdir]).exists$() ) {
var pathEnvironment=$I$(4).isWindows$() ? "Path" : $I$(4).isMac$() ? "DYLD_LIBRARY_PATH" : "LD_LIBRARY_PATH";
var xugglePath=C$.xuggleHome + $I$(6).separator + subdir ;
var pathValue=env.get$O(pathEnvironment);
if (pathValue == null ) pathValue="";
if (!pathValue.startsWith$S(xugglePath)) {
pathValue=xugglePath + $I$(6).pathSeparator + pathValue ;
}env.put$O$O(pathEnvironment, pathValue);
C$.logMessage$S("adding to " + pathEnvironment + ": " + xugglePath );
}}if (C$.relaunching) {
env.put$O$O("TRACKER_RELAUNCH", "true");
} else env.remove$O("TRACKER_RELAUNCH");
if (C$.isNewInstall) {
env.put$O$O("NEW_INSTALL", "true");
} else env.remove$O("NEW_INSTALL");
if (newVersionURL != null ) {
C$.logMessage$S("setting " + "TRACKER_NEW_VERSION" + " = " + newVersionURL );
env.put$O$O("TRACKER_NEW_VERSION", newVersionURL);
} else env.remove$O("TRACKER_NEW_VERSION");
var message="";
for (var next, $next = cmd.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
message+=next + " ";
}
C$.logMessage$S("executing command: " + message);
C$.writeCodeBaseLog$S("tracker_start.log");
var prevLogText=System.getenv$S("START_LOG_TEXT");
if (prevLogText != null ) C$.logText=prevLogText + "\n" + C$.logText ;
env.put$O$O("START_LOG_TEXT", C$.logText);
C$.startLogPath=C$.writeUserLog$();
if (C$.startLogPath != null ) env.put$O$O("START_LOG", C$.startLogPath);
C$.exitCounter=0;
if (C$.exitThread == null ) {
C$.exitThread=Clazz.new_([((P$.TrackerStarter$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerStarter$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(2).abortExit=false;
while ($I$(2).exitCounter < 20){
try {
if ($I$(2).abortExit) return;
$I$(7).sleep$J(100);
++$I$(2).exitCounter;
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
}
$I$(4).exit$();
System.exit$I(0);
});
})()
), Clazz.new_(P$.TrackerStarter$4.$init$,[this, null]))],$I$(7,1).c$$Runnable);
C$.exitThread.setDaemon$Z(true);
C$.exitThread.start$();
}var process=builder.start$();
var result=process.waitFor$();
if (result > 0) {
var errors="";
try {
var reader=Clazz.new_([Clazz.new_([process.getErrorStream$()],$I$(17,1).c$$java_io_InputStream)],$I$(16,1).c$$java_io_Reader);
var s=reader.readLine$();
while (s != null  && s.length$() > 0 ){
errors+="\n      " + s;
s=reader.readLine$();
}
reader.close$();
reader=Clazz.new_([Clazz.new_([process.getInputStream$()],$I$(17,1).c$$java_io_InputStream)],$I$(16,1).c$$java_io_Reader);
s=reader.readLine$();
while (s != null  && s.length$() > 0 ){
errors+="\n      " + s;
s=reader.readLine$();
}
reader.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
C$.logMessage$S("failed to start with memory size " + C$.memorySize + "MB due to the following errors:" + errors );
if (errors.indexOf$S("heap") > -1) {
C$.memorySize=(C$.memorySize*(0.95)|0);
if (C$.memorySize < 64) {
C$.exceptions+=errors + C$.newline;
C$.exitGracefully$S(jarPath);
}C$.logMessage$S("try to start with smaller memory size " + C$.memorySize + "MB" );
C$.startTracker$S$SA(jarPath, args);
} else {
C$.exceptions+=errors + C$.newline;
C$.exitGracefully$S(jarPath);
}} else {
$I$(4).exit$();
System.exit$I(0);
}}, 1);

Clazz.newMeth(C$, 'writeUserLog$',  function () {
if ("".equals$O(C$.logText) || C$.trackerHome == null  ) {
return null;
}var file=null;
var ospPrefsFile=$I$(4).getPreferencesFile$();
if (ospPrefsFile != null  && ospPrefsFile.getParentFile$().canWrite$() ) {
file=Clazz.new_([ospPrefsFile.getParentFile$(), "tracker_start.log"],$I$(6,1).c$$java_io_File$S);
}if (file == null  && C$.userDocuments != null   && Clazz.new_($I$(6,1).c$$S,[C$.userDocuments + "/Tracker"]).canWrite$() ) {
file=Clazz.new_($I$(6,1).c$$S$S,[C$.userDocuments + "/Tracker", "tracker_start.log"]);
}if (file == null  && Clazz.new_($I$(6,1).c$$S,[C$.trackerHome]).canWrite$() ) {
file=Clazz.new_($I$(6,1).c$$S$S,[C$.trackerHome, "tracker_start.log"]);
}if (file == null ) return null;
C$.addLogHeader$();
C$.logMessage$S("writing user start log to " + file.getAbsolutePath$());
try {
var stream=Clazz.new_($I$(18,1).c$$java_io_File,[file]);
var charset=$I$(19).forName$S(C$.encoding);
var out=Clazz.new_($I$(20,1).c$$java_io_OutputStream$java_nio_charset_Charset,[stream, charset]);
var writer=Clazz.new_($I$(21,1).c$$java_io_Writer,[out]);
writer.write$S(C$.logText);
writer.flush$();
writer.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
return null;
} else {
throw ex;
}
}
return file.getAbsolutePath$();
}, 1);

Clazz.newMeth(C$, 'addLogHeader$',  function () {
if (!C$.logText.startsWith$S("TrackerStarter")) {
var sdf=Clazz.new_($I$(22,1).c$$S,["HH:mm:ss  MMM dd yyyy"]);
var cal=$I$(23).getInstance$();
C$.logText="TrackerStarter version " + "6.3.5.260922" + "  " + sdf.format$java_util_Date(cal.getTime$()) + C$.newline + C$.newline + C$.logText ;
}}, 1);

Clazz.newMeth(C$, 'writeCodeBaseLog$S',  function (fileName) {
if (C$.codeBaseDir != null  && C$.codeBaseDir.canWrite$() ) {
C$.addLogHeader$();
var file=Clazz.new_($I$(6,1).c$$java_io_File$S,[C$.codeBaseDir, fileName]);
C$.logMessage$S("writing code base start log " + file.getAbsolutePath$());
try {
var stream=Clazz.new_($I$(18,1).c$$java_io_File,[file]);
var charset=$I$(19).forName$S(C$.encoding);
var out=Clazz.new_($I$(20,1).c$$java_io_OutputStream$java_nio_charset_Charset,[stream, charset]);
var writer=Clazz.new_($I$(21,1).c$$java_io_Writer,[out]);
writer.write$S(C$.logText);
writer.flush$();
writer.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
C$.logMessage$S("exception writing code base start log (access denied?)");
} else {
throw ex;
}
}
} else {
C$.logMessage$S("unable to write code base start log");
}}, 1);

Clazz.newMeth(C$, 'usesXuggleServer$S',  function (jarpath) {
jarpath=$I$(8).forwardSlash$S(jarpath);
var b=C$.usesXuggleServer.get$O(jarpath);
if (b != null ) return (b).valueOf();
var usesServer=false;
try {
var jarfile=Clazz.new_($I$(24,1).c$$S,[jarpath]);
var classpath=$I$(4).getManifestAttribute$java_util_jar_JarFile$S(jarfile, "Class-Path");
usesServer=classpath.contains$CharSequence("-server-");
C$.usesXuggleServer.put$O$O(jarpath, Boolean.valueOf$Z(usesServer));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
return usesServer;
}, 1);

Clazz.newMeth(C$, 'fileExists$S',  function (path) {
var file=Clazz.new_($I$(6,1).c$$S,[path]);
try {
if (file.exists$()) {
return true;
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
C$.exceptions+=ex.getClass$().getSimpleName$() + ": " + ex.getMessage$() + C$.newline ;
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var er = e$$;
{
C$.exceptions+=er.getClass$().getSimpleName$() + ": " + er.getMessage$() + C$.newline ;
}
} else {
throw e$$;
}
}
return false;
}, 1);

Clazz.newMeth(C$, 'logMessage$S',  function (message) {
if (C$.log) {
C$.logText+=" - " + message + C$.newline ;
}if (C$.debug) {
System.out.println$S(message);
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.newline="\n";
C$.encoding="UTF-8";
C$.exceptions="";
C$.trackerJarFilter=Clazz.new_($I$(1,1));
C$.logText="";
C$.javaCommand="java";
C$.snapshot="-snapshot";
C$.debug=false;
C$.log=true;
C$.relaunching=false;
C$.launching=false;
C$.isNewInstall=false;
C$.port=12321;
C$.exitCounter=0;
C$.XUGGLE_JAR_NAMES=Clazz.array(String, -2, [Clazz.array(String, -1, ["xuggle-xuggler-server-all", "slf4j-api"]), Clazz.array(String, -1, ["xuggle-xuggler", "slf4j-api", "logback-classic", "logback-core"])]);
C$.xuggleFileFilter=((P$.TrackerStarter$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TrackerStarter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.FileFilter', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'accept$java_io_File',  function (file) {
var xuggleNames=$I$(2).XUGGLE_JAR_NAMES[$I$(2).xuggleVersionIndex];
for (var i=0; i < xuggleNames.length; i++) {
if (file.getName$().startsWith$S(xuggleNames[i])) return true;
}
return false;
});
})()
), Clazz.new_(P$.TrackerStarter$1.$init$,[this, null]));
C$.usesXuggleServer=Clazz.new_($I$(3,1));
{
C$.newline=System.getProperty$S$S("line.separator", "\n");

{}
try {
C$.userHome=$I$(4).getUserHome$();
C$.javaHome=System.getProperty$S("java.home");
if ($I$(4).isWindows$()) {
C$.userDocuments=Clazz.new_($I$(5,1)).getFileSystemView$().getDefaultDirectory$().toString();
} else {
C$.userDocuments=C$.userHome + "/Documents";
}if (!Clazz.new_($I$(6,1).c$$S,[C$.userDocuments]).exists$()) {
C$.userDocuments=null;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
C$.exceptions+=ex.getClass$().getSimpleName$() + ": " + ex.getMessage$() + C$.newline ;
} else {
throw ex;
}
}
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
