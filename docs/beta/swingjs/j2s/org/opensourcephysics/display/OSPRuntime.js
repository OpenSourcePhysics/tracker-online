(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},p$2={},I$=[[0,'java.util.ArrayList','org.opensourcephysics.controls.OSPLog','java.util.HashSet','javax.swing.event.SwingPropertyChangeSupport','java.awt.font.TextLayout','org.opensourcephysics.display.OSPRuntime','java.awt.Color',['org.opensourcephysics.display.OSPRuntime','.TextLayout','.JSTL'],'java.text.DecimalFormatSymbols','java.util.Locale','javax.swing.UIManager','javax.swing.JFrame','java.util.HashMap','org.opensourcephysics.controls.XML','java.text.NumberFormat','org.opensourcephysics.numerics.Util','java.awt.font.FontRenderContext','javajs.async.AsyncDialog','org.opensourcephysics.display.DisplayRes','java.awt.Dimension','java.awt.Toolkit','java.io.File','org.opensourcephysics.tools.ResourceLoader','javax.swing.JOptionPane','javax.swing.plaf.metal.MetalLookAndFeel','javax.swing.JDialog','java.util.jar.JarFile','java.net.URL','java.io.BufferedReader','java.io.FileReader','java.util.TreeMap','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.tools.TranslatorTool','org.opensourcephysics.tools.FontSizer','javajs.async.AsyncFileChooser','javax.swing.filechooser.FileFilter',['org.opensourcephysics.display.OSPRuntime','.ExtensionFileFilter'],'javax.swing.filechooser.FileSystemView','javax.swing.SwingUtilities',['javajs.async.SwingJSUtils','.Timeout'],'java.awt.datatransfer.DataFlavor','java.awt.datatransfer.StringSelection','javajs.async.Assets',['javajs.async.Assets','.Asset'],'java.lang.management.ManagementFactory','javax.swing.Timer','javax.swing.JColorChooser']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OSPRuntime", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Disposable',9],['Supported',1033],['Version',9],['TextLayout',9],['ExtensionFileFilter',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['isMac','isJS','cssCursor','hasKeyboard','isOSX','isiOS','isiPad','isAndroid','isMobile','preferMobile','neverMobile','skipDisplayOfPDF','askIfMobileKeyboard','useVirtualNumberPad','isApplet','isBHTest','dontLog','allowBackgroundNodeLoading','allowAutopaste','allowDatasetClip','allowLibClipboardPasteCheck','allowSetFonts','allowAsyncURL','loadTranslatorTool','autoAddLibrary','checkTempDirCache','checkZipLoaders','doCacheThumbnail','doCacheLibaryRecord','doCacheZipContents','doScrollToPath','drawDontFillAxes','logToJ2SMonitor','resCacheEnabled','setRenderingHints','embedVideoAsObject','useZipAssets','unzipFiles','disableAllDrawing','loadVideoTool','loadExportTool','loadDataTool','loadOSPLog','launcherMode','antiAliasText','appletMode','webStart','authorMode','launchingInSingleVM','DEFAULT_LOOK_AND_FEEL_DECORATIONS','launcherAllowEJSModel','outOfMemory'],'C',['defaultDecimalSeparator','currentDecimalSeparator'],'I',['macOffset'],'S',['userAgent','tempDir','launchJarPath','launchJarName','buildDate','preferredDecimalSeparator','chooserDir','userhomeDir','prefsPath','prefsFileName'],'O',['jsutil','javajs.api.JSUtilI','chooser','javajs.async.AsyncFileChooser','dfs','java.text.DecimalFormatSymbols','defaultLocales','java.util.Locale[]','applet','javax.swing.JApplet','launchJar','java.util.jar.JarFile','DEFAULT_LOOK_AND_FEEL','javax.swing.LookAndFeel','LOOK_AND_FEEL_TYPES','java.util.HashMap','prefsControl','org.opensourcephysics.controls.XMLControl','frc','java.awt.font.FontRenderContext','activeNode','org.opensourcephysics.tools.LaunchNode','OUT_OF_MEMORY_ERROR','Integer']]]

Clazz.newMeth(C$, 'isMobile$',  function () {
if (C$.neverMobile) return false;
if (C$.preferMobile) return true;
var dim=C$.getHTMLPageSize$();
return C$.cssCursor;
}, 1);

Clazz.newMeth(C$, 'readMobileParam$',  function () {
if (C$.userAgent != null ) return;
C$.userAgent=navigator.userAgent ||null;
if (C$.userAgent == null ) {
C$.userAgent="<unknown>";
} else {
C$.isOSX=(C$.userAgent.indexOf$S("OS X") >= 0);
C$.isiOS=(C$.userAgent.indexOf$S("iOS") >= 0);
C$.isiPad=(C$.userAgent.indexOf$S("iPad") >= 0);
C$.isAndroid=(C$.userAgent.indexOf$S("Android") >= 0);
if (C$.isOSX) {
var n=(navigator.maxTouchPoints ||0);
C$.isiPad=!!(C$.isiPad|((n > 2)));
}C$.isMobile=C$.isiOS || C$.isiPad || C$.isAndroid  ;
C$.skipDisplayOfPDF=C$.isMobile;
}}, 1);

Clazz.newMeth(C$, 'getSkipDisplayOfPDF$',  function () {
if (C$.isJS) C$.readMobileParam$();
return C$.skipDisplayOfPDF;
}, 1);

Clazz.newMeth(C$, 'getUserAgent$',  function () {
if (C$.isJS) C$.readMobileParam$();
return C$.userAgent;
}, 1);

Clazz.newMeth(C$, 'setDoCheckMobileKeyboard$Z',  function (b) {
C$.askIfMobileKeyboard=b;
}, 1);

Clazz.newMeth(C$, 'checkMobileKeyboard$org_opensourcephysics_media_core_NumberField',  function (nf) {
if (!C$.isJS || !nf.isVisible$() ) return;
if (C$.useVirtualNumberPad) {
nf.addVirtualNumberPad$();
return;
}C$.readMobileParam$();
if (C$.isMobile && !C$.hasKeyboard && C$.askIfMobileKeyboard  ) {
C$.askIfMobileKeyboard=false;
Clazz.new_($I$(18,1)).showConfirmDialog$java_awt_Component$O$S$I$java_awt_event_ActionListener(nf.getTopLevelAncestor$(), $I$(19).getString$S("Dialog.MobileKeyboard.Message"), $I$(19).getString$S("Dialog.MobileKeyboard.Title"), 0, ((P$.OSPRuntime$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPRuntime$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
switch (e.getID$()) {
case 0:
$I$(6).hasKeyboard=true;
break;
case 1:
$I$(6).useVirtualNumberPad=true;
this.$finals$.nf.addVirtualNumberPad$();
break;
}
});
})()
), Clazz.new_(P$.OSPRuntime$1.$init$,[this, {nf:nf}])));
}}, 1);

Clazz.newMeth(C$, 'getBrowserName$',  function () {
var sUsrAg=navigator.userAgent ||"";
var sBrowser;
if (sUsrAg.indexOf$S("Firefox") > -1) {
sBrowser="Mozilla Firefox";
} else if (sUsrAg.indexOf$S("SamsungBrowser") > -1) {
sBrowser="Samsung Internet";
} else if (sUsrAg.indexOf$S("Opera") > -1 || sUsrAg.indexOf$S("OPR") > -1 ) {
sBrowser="Opera";
} else if (sUsrAg.indexOf$S("Trident") > -1) {
sBrowser="Microsoft Internet Explorer";
} else if (sUsrAg.indexOf$S("Edge") > -1) {
sBrowser="Microsoft Edge";
} else if (sUsrAg.indexOf$S("Chrome") > -1) {
sBrowser="Google Chrome or Chromium";
} else if (sUsrAg.indexOf$S("Safari") > -1) {
sBrowser="Apple Safari";
} else {
sBrowser="unknown";
}return sBrowser;
}, 1);

Clazz.newMeth(C$, 'getHTMLPageSize$',  function () {
if (C$.isJS) {
var width=0;
var height=0;

width = window.innerWidth || document.documentElement.clientWidth || (document.body ? document.body.clientWidth : 0);
height = window.innerHeight || document.documentElement.clientHeight || (document.body ? document.body.clientHeight : 0);
console.log("[Tracker] HTML page dimensions: " + width + " x " + height);
return Clazz.new_($I$(20,1).c$$I$I,[width, height]);
}return $I$(21).getDefaultToolkit$().getScreenSize$();
}, 1);

Clazz.newMeth(C$, 'setApplet$javax_swing_JApplet',  function (a) {
C$.applet=a;
C$.isApplet=true;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getUserHome$',  function () {
var home=System.getProperty$S("user.home");
if (C$.isLinux$()) {
var homeEnv=System.getenv$S("HOME");
if (homeEnv != null ) {
home=homeEnv;
}}return home == null  ? "." : home;
}, 1);

Clazz.newMeth(C$, 'getDownloadDir$',  function () {
var home=C$.getUserHome$();
var downloadDir=Clazz.new_($I$(22,1).c$$S,[home + "/Downloads"]);
if (C$.isLinux$()) {
var xdgDir=home + "/.config/user-dirs.dirs";
var xdgText=$I$(23).getString$S(xdgDir);
if (xdgText != null ) {
var split=xdgText.split$S("XDG_");
for (var next, $next = 0, $$next = split; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (next.contains$CharSequence("DOWNLOAD_DIR")) {
var n=next.indexOf$S("\"");
if (n > -1) {
next=next.substring$I(n + 1);
n=next.indexOf$S("\"");
if (n > -1) {
next=next.substring$I$I(0, n);
if (next.startsWith$S("$HOME")) {
next=home + next.substring$I(5);
}var f=Clazz.new_($I$(22,1).c$$S,[next]);
if (f.exists$()) {
downloadDir=f;
}}}}}
}}return downloadDir;
}, 1);

Clazz.newMeth(C$, 'showAboutDialog$java_awt_Component',  function (parent) {
var date=C$.getLaunchJarBuildDate$();
if ("".equals$O(date)) date="22 Sep 2026";
var vers="OSP Library 6.3.5.260922";
if (date != null ) {
vers+="\njar manifest date " + date;
}if (C$.isJS) vers+="\n\nJavaScript transcription created using the\njava2script/SwingJS framework developed at\n St. Olaf College.\n";
var aboutString=vers + "\n" + "Open Source Physics Project \n" + "www.opensourcephysics.org" ;
$I$(24).showMessageDialog$java_awt_Component$O$S$I(parent, aboutString, "About Open Source Physics", 1);
}, 1);

Clazz.newMeth(C$, 'setLookAndFeel$Z$S',  function (useDefaultLnFDecorations, lookAndFeel) {
var found=true;
var currentLookAndFeel=$I$(11).getLookAndFeel$();
try {
if ((lookAndFeel == null ) || lookAndFeel.equals$O("DEFAULT") ) {
$I$(11).setLookAndFeel$javax_swing_LookAndFeel(C$.DEFAULT_LOOK_AND_FEEL);
useDefaultLnFDecorations=C$.DEFAULT_LOOK_AND_FEEL_DECORATIONS;
} else if (lookAndFeel.equals$O("CROSS_PLATFORM")) {
lookAndFeel=$I$(11).getCrossPlatformLookAndFeelClassName$();
$I$(11).setLookAndFeel$S(lookAndFeel);
} else if (lookAndFeel.equals$O("SYSTEM")) {
lookAndFeel=$I$(11).getSystemLookAndFeelClassName$();
$I$(11).setLookAndFeel$S(lookAndFeel);
} else if (lookAndFeel.equals$O("NIMBUS")) {
$I$(11).setLookAndFeel$S("com.sun.java.swing.plaf.nimbus.NimbusLookAndFeel");
} else if (lookAndFeel.equals$O("METAL")) {
$I$(11,"setLookAndFeel$javax_swing_LookAndFeel",[Clazz.new_($I$(25,1))]);
} else if (lookAndFeel.equals$O("GTK")) {
$I$(11).setLookAndFeel$S("com.sun.java.swing.plaf.gtk.GTKLookAndFeel");
} else if (lookAndFeel.equals$O("MOTIF")) {
$I$(11).setLookAndFeel$S("com.sun.java.swing.plaf.motif.MotifLookAndFeel");
} else if (lookAndFeel.equals$O("WINDOWS")) {
$I$(11).setLookAndFeel$S("com.sun.java.swing.plaf.windows.WindowsLookAndFeel");
} else {
$I$(11).setLookAndFeel$S(lookAndFeel);
}$I$(12).setDefaultLookAndFeelDecorated$Z(useDefaultLnFDecorations);
$I$(26).setDefaultLookAndFeelDecorated$Z(useDefaultLnFDecorations);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
found=false;
} else {
throw ex;
}
}
if (!found) {
try {
$I$(11).setLookAndFeel$javax_swing_LookAndFeel(currentLookAndFeel);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}return found;
}, 1);

Clazz.newMeth(C$, 'isDefaultLookAndFeelDecorated$',  function () {
return $I$(12).isDefaultLookAndFeelDecorated$();
}, 1);

Clazz.newMeth(C$, 'isWindows$',  function () {
try {
return (System.getProperty$S$S("os.name", "").toLowerCase$().startsWith$S("windows"));
} catch (ex) {
if (Clazz.exceptionOf(ex,"SecurityException")){
return false;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'isMac$',  function () {
return C$.isMac;
}, 1);

Clazz.newMeth(C$, 'isLinux$',  function () {
try {
return (System.getProperty$S$S("os.name", "").toLowerCase$().startsWith$S("linux"));
} catch (ex) {
if (Clazz.exceptionOf(ex,"SecurityException")){
return false;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'isVista$',  function () {
if (System.getProperty$S$S("os.name", "").toLowerCase$().indexOf$S("vista") > -1) {
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'hasJava3D$',  function () {
return false;
}, 1);

Clazz.newMeth(C$, 'isPopupTrigger$java_awt_event_InputEvent',  function (e) {
if (Clazz.instanceOf(e, "java.awt.event.MouseEvent")) {
var me=e;
if (me.isShiftDown$()) return false;
return (me.isPopupTrigger$()) || (me.getButton$() == 3) || (me.isControlDown$() && C$.isMac )  ;
}return false;
}, 1);

Clazz.newMeth(C$, 'isWebStart$',  function () {
if (!C$.webStart) {
try {
C$.webStart=System.getProperty$S("javawebstart.version") != null ;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}return C$.webStart;
}, 1);

Clazz.newMeth(C$, 'isAppletMode$',  function () {
return C$.appletMode;
}, 1);

Clazz.newMeth(C$, 'isAuthorMode$',  function () {
return C$.authorMode;
}, 1);

Clazz.newMeth(C$, 'setAuthorMode$Z',  function (b) {
C$.authorMode=b;
}, 1);

Clazz.newMeth(C$, 'setLauncherMode$Z',  function (b) {
C$.launcherMode=b;
}, 1);

Clazz.newMeth(C$, 'isLauncherMode$',  function () {
return C$.launcherMode || "true".equals$O(System.getProperty$S("org.osp.launcher")) ;
}, 1);

Clazz.newMeth(C$, 'setLaunchJarPath$S',  function (path) {
if ((path == null ) || (C$.launchJarPath != null ) ) {
return;
}if (!path.endsWith$S(".jar") && !path.endsWith$S(".exe") ) {
var n=path.indexOf$S(".jar!");
if (n == -1) {
n=path.indexOf$S(".exe!");
}if (n > -1) {
path=path.substring$I$I(0, n + 4);
} else {
return;
}}if (path.startsWith$S("jar:")) {
path=path.substring$I$I(4, path.length$());
}if (path.startsWith$S("file:/")) {
path=path.substring$I$I(5, path.length$());
if (path.contains$CharSequence(":")) {
path=path.substring$I$I(1, path.length$());
}}try {
var file=Clazz.new_($I$(22,1).c$$S,[path]);
if (!file.exists$()) return;
path=$I$(14,"forwardSlash$S",[file.getCanonicalPath$()]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
$I$(2).finer$S("Setting launch jar path to " + path);
C$.launchJarPath=path;
C$.launchJarName=path.substring$I(path.lastIndexOf$S("/") + 1);
}, 1);

Clazz.newMeth(C$, 'getLaunchJarName$',  function () {
return C$.launchJarName;
}, 1);

Clazz.newMeth(C$, 'getLaunchJarPath$',  function () {
return C$.launchJarPath;
}, 1);

Clazz.newMeth(C$, 'getDocbase$',  function () {
var base="";
if (!C$.isJS) return null;

console.log("href="+window.location.href);
base=""+window.location.href;
var last=base.lastIndexOf$I("/");
if (last < 1) {
return base;
}base=base.substring$I$I(0, last + 1);
return base;
}, 1);

Clazz.newMeth(C$, 'getLaunchJarDirectory$',  function () {
if (C$.isApplet) {
return null;
}return (C$.launchJarPath == null ) ? null : $I$(14).getDirectoryPath$S(C$.launchJarPath);
}, 1);

Clazz.newMeth(C$, 'getLaunchJar$',  function () {
if (C$.launchJar != null ) {
return C$.launchJar;
}if (C$.launchJarPath == null ) {
return null;
}var isWebFile=$I$(23).isHTTP$S(C$.launchJarPath);
if (!isWebFile) {
C$.launchJarPath=$I$(23).getNonURIPath$S(C$.launchJarPath);
}try {
if (!C$.isApplet && !isWebFile ) {
C$.launchJar=Clazz.new_($I$(27,1).c$$S,[C$.launchJarPath]);
} else {
var url;
if (isWebFile) {
url=Clazz.new_($I$(28,1).c$$S,["jar:" + C$.launchJarPath + "!/" ]);
} else {
url=Clazz.new_($I$(28,1).c$$S,["jar:file:/" + C$.launchJarPath + "!/" ]);
}var conn=url.openConnection$();
C$.launchJar=conn.getJarFile$();
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(2,"fine$S",[ex.getMessage$()]);
} else {
throw ex;
}
}
return C$.launchJar;
}, 1);

Clazz.newMeth(C$, 'getManifestAttribute$java_util_jar_JarFile$S',  function (jarFile, attribute) {
if (C$.isJS) {
System.err.println$S("getManifestAttribute from jar not allowed in JavaScript");
return "";
}try {
var att=jarFile.getManifest$().getMainAttributes$();
return att.getValue$S(attribute);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return "";
}, 1);

Clazz.newMeth(C$, 'getLaunchJarBuildDate$',  function () {
if (C$.isJS) {
try {
var inFile=Clazz.new_([Clazz.new_($I$(30,1).c$$S,["MANIFEST.MF"])],$I$(29,1).c$$java_io_Reader);
var nextLine=inFile.readLine$();
while (nextLine != null ){
if (nextLine.startsWith$S("Build-Date:")) {
var date=nextLine.substring$I(11);
inFile.close$();
return date;
}nextLine=inFile.readLine$();
}
inFile.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S(ex.getMessage$());
} else {
throw ex;
}
}
return "";
}if (C$.buildDate == null ) {
var jarfile=C$.getLaunchJar$();
C$.buildDate=C$.getManifestAttribute$java_util_jar_JarFile$S(jarfile, "Build-Date");
}return C$.buildDate;
}, 1);

Clazz.newMeth(C$, 'getJavaFile$S',  function (jrePath) {
if (jrePath == null ) return null;
var file=Clazz.new_($I$(22,1).c$$S,[jrePath]);
jrePath=$I$(14).forwardSlash$S(jrePath);
if (jrePath.endsWith$S("/lib/ext")) {
jrePath=jrePath.substring$I$I(0, jrePath.length$() - 8);
file=Clazz.new_($I$(22,1).c$$S,[jrePath]);
}if (!jrePath.endsWith$S("/bin/java") && !jrePath.endsWith$S("/bin/java.exe") ) {
if (jrePath.endsWith$S("/bin")) {
file=file.getParentFile$();
}if (C$.isWindows$()) {
if (file.getParentFile$() != null  && file.getParentFile$().getName$().indexOf$S("jre") > -1 ) {
file=file.getParentFile$();
}if (file.getParentFile$() != null  && file.getParentFile$().getName$().indexOf$S("jdk") > -1 ) {
file=file.getParentFile$();
}if (file.getName$().indexOf$S("jdk") > -1) {
var jreFile=Clazz.new_($I$(22,1).c$$java_io_File$S,[file, "jre/bin/java.exe"]);
if (jreFile.exists$()) file=jreFile;
 else {
file=Clazz.new_($I$(22,1).c$$java_io_File$S,[file, "bin/java.exe"]);
}} else if (file.getName$().indexOf$S("jre") > -1) {
file=Clazz.new_($I$(22,1).c$$java_io_File$S,[file, "bin/java.exe"]);
} else file=null;
} else if (C$.isMac) {
if (file.getName$().endsWith$S("jdk")) {
var parent=file;
file=Clazz.new_($I$(22,1).c$$java_io_File$S,[parent, "Contents/Home/jre/bin/java"]);
if (!file.exists$()) {
file=Clazz.new_($I$(22,1).c$$java_io_File$S,[parent, "Contents/Home/bin/java"]);
}} else file=Clazz.new_($I$(22,1).c$$java_io_File$S,[file, "bin/java"]);
} else if (C$.isLinux$()) {
if ("jre".equals$O(file.getName$())) {
file=Clazz.new_($I$(22,1).c$$java_io_File$S,[file, "bin/java"]);
} else {
if (file.getParentFile$() != null  && file.getParentFile$().getName$().indexOf$S("jre") > -1 ) {
file=file.getParentFile$();
}if (file.getParentFile$() != null  && file.getParentFile$().getName$().indexOf$S("jdk") > -1 ) {
file=file.getParentFile$();
}if (file.getParentFile$() != null  && file.getParentFile$().getName$().indexOf$S("sun") > -1 ) {
file=file.getParentFile$();
}if (file.getName$().indexOf$S("jdk") > -1 || file.getName$().indexOf$S("sun") > -1 ) file=Clazz.new_($I$(22,1).c$$java_io_File$S,[file, "jre/bin/java"]);
 else file=null;
}}}if (file != null ) {
try {
file=file.getCanonicalFile$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
file=null;
} else {
throw e;
}
}
}if (file != null  && file.exists$() ) return file;
return null;
}, 1);

Clazz.newMeth(C$, 'getMajorVersion$',  function () {
var v="6.3.5.260922".trim$().split$S("\\.");
try {
return Integer.parseInt$S(v[0]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
return 0;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getVMBitness$',  function () {
var s=System.getProperty$S("java.vm.name");
s+="-" + System.getProperty$S("os.arch");
s+="-" + System.getProperty$S("sun.arch.data.model");
return s.indexOf$S("64") > -1 ? 64 : 32;
}, 1);

Clazz.newMeth(C$, 'getJREPath$java_io_File',  function (javaFile) {
if (javaFile == null ) return null;
var javaPath=$I$(14,"forwardSlash$S",[javaFile.getAbsolutePath$()]);
if ($I$(14).stripExtension$S(javaPath).endsWith$S("/bin/java")) return javaFile.getParentFile$().getParent$();
return "";
}, 1);

Clazz.newMeth(C$, 'getDefaultLocales$',  function () {
return C$.defaultLocales;
}, 1);

Clazz.newMeth(C$, 'getInstalledLocales$',  function () {
var list=Clazz.new_($I$(1,1));
if (C$.isJS) return list.toArray$OA(Clazz.array($I$(10), [0]));
var languages=Clazz.new_($I$(31,1));
list.add$O($I$(10).ENGLISH);
if (C$.getLaunchJarPath$() != null ) {
var jar=C$.getLaunchJar$();
if (jar != null ) {
for (var e=jar.entries$(); e.hasMoreElements$(); ) {
var entry=e.nextElement$();
var path=entry.toString();
var n=path.indexOf$S(".properties");
if (path.indexOf$S(".properties") > -1) {
var m=path.indexOf$S("display_res_");
if (m > -1) {
var loc=path.substring$I$I(m + 12, n);
if (loc.equals$O("zh_TW")) {
var next=$I$(10).TAIWAN;
languages.put$O$O(C$.getDisplayLanguage$java_util_Locale(next).toLowerCase$(), next);
} else if (loc.equals$O("zh_CN")) {
var next=$I$(10).CHINA;
languages.put$O$O(C$.getDisplayLanguage$java_util_Locale(next).toLowerCase$(), next);
} else if (loc.equals$O("en_US")) {
continue;
} else {
var next;
if (!loc.contains$CharSequence("_")) next=Clazz.new_($I$(10,1).c$$S,[loc]);
 else {
var lang=loc.substring$I$I(0, 2);
var country=loc.substring$I(3);
next=Clazz.new_($I$(10,1).c$$S$S$S,[lang, country, ""]);
}if (!next.equals$O($I$(10).ENGLISH)) {
languages.put$O$O(C$.getDisplayLanguage$java_util_Locale(next).toLowerCase$(), next);
}}}}}
for (var s, $s = languages.keySet$().iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
list.add$O(languages.get$O(s));
}
} else {
C$.defaultLocales=Clazz.array($I$(10), -1, [$I$(10).ENGLISH]);
return C$.defaultLocales;
}}return list.toArray$OA(Clazz.array($I$(10), [0]));
}, 1);

Clazz.newMeth(C$, 'getDisplayLanguage$java_util_Locale',  function (locale) {
if (locale.equals$O($I$(10).CHINA)) return "\u7b80\u4f53\u4e2d\u6587";
if (locale.equals$O($I$(10).TAIWAN)) return "\u7e41\u4f53\u4e2d\u6587";
return locale.getDisplayLanguage$java_util_Locale(locale);
}, 1);

Clazz.newMeth(C$, 'getDecimalFormatSymbols$',  function () {
return C$.dfs;
}, 1);

Clazz.newMeth(C$, 'setDefaultDecimalSeparator$C',  function (c) {
if (c == "." || c == "," ) C$.defaultDecimalSeparator=c;
 else C$.defaultDecimalSeparator=".";
if (C$.preferredDecimalSeparator == null ) C$.dfs.setDecimalSeparator$C(C$.currentDecimalSeparator=C$.defaultDecimalSeparator);
}, 1);

Clazz.newMeth(C$, 'setPreferredDecimalSeparator$S',  function (separator) {
if (separator != null  && separator.charAt$I(0) != "."  && separator.charAt$I(0) != "," ) separator=null;
C$.preferredDecimalSeparator=separator;
C$.dfs.setDecimalSeparator$C(C$.currentDecimalSeparator=(separator == null  ? C$.defaultDecimalSeparator : separator.charAt$I(0)));
}, 1);

Clazz.newMeth(C$, 'getCurrentDecimalSeparator$',  function () {
return C$.currentDecimalSeparator;
}, 1);

Clazz.newMeth(C$, 'getPreferredDecimalSeparator$',  function () {
return C$.preferredDecimalSeparator;
}, 1);

Clazz.newMeth(C$, 'getDefaultSearchPaths$',  function () {
var paths=Clazz.new_($I$(1,1));
if (C$.isWindows$()) {
var appdata=System.getenv$S("LOCALAPPDATA");
if (appdata != null ) {
var dir=Clazz.new_($I$(22,1).c$$S$S,[appdata, "OSP"]);
if (!dir.exists$()) dir.mkdir$();
if (dir.exists$()) {
paths.add$O($I$(14,"forwardSlash$S",[dir.getAbsolutePath$()]));
}}} else if (C$.userhomeDir != null  && C$.isMac ) {
var dir=Clazz.new_($I$(22,1).c$$S$S,[C$.userhomeDir, "Library/Application Support"]);
if (dir.exists$()) {
dir=Clazz.new_($I$(22,1).c$$java_io_File$S,[dir, "OSP"]);
if (!dir.exists$()) dir.mkdir$();
if (dir.exists$()) {
paths.add$O($I$(14,"forwardSlash$S",[dir.getAbsolutePath$()]));
}}} else if (C$.userhomeDir != null  && C$.isLinux$() ) {
var dir=Clazz.new_($I$(22,1).c$$S$S,[C$.userhomeDir, ".config"]);
if (dir.exists$()) {
dir=Clazz.new_($I$(22,1).c$$java_io_File$S,[dir, "OSP"]);
if (!dir.exists$()) dir.mkdir$();
if (dir.exists$()) {
paths.add$O($I$(14,"forwardSlash$S",[dir.getAbsolutePath$()]));
}}}if (C$.userhomeDir != null ) {
paths.add$O(C$.userhomeDir);
}var codebase=C$.getLaunchJarDirectory$();
if (codebase != null ) {
paths.add$O($I$(14).forwardSlash$S(codebase));
}return paths;
}, 1);

Clazz.newMeth(C$, 'getPreference$S',  function (name) {
var control=C$.getPrefsControl$();
return control.getObject$S(name);
}, 1);

Clazz.newMeth(C$, 'setPreference$S$O',  function (name, pref) {
var control=C$.getPrefsControl$();
control.setValue$S$O(name, pref);
}, 1);

Clazz.newMeth(C$, 'savePreferences$',  function () {
var control=C$.getPrefsControl$();
var file=Clazz.new_($I$(22,1).c$$S$S,[C$.prefsPath, C$.prefsFileName]);
control.write$S(file.getAbsolutePath$());
}, 1);

Clazz.newMeth(C$, 'getPreferencesFile$',  function () {
C$.getPrefsControl$();
var file=Clazz.new_($I$(22,1).c$$S$S,[C$.prefsPath, C$.prefsFileName]);
if (file.exists$()) return file;
return null;
}, 1);

Clazz.newMeth(C$, 'getPrefsControl$',  function () {
if (C$.prefsControl == null ) {
var dirs=C$.getDefaultSearchPaths$();
for (var dir, $dir = dirs.iterator$(); $dir.hasNext$()&&((dir=($dir.next$())),1);) {
var file=Clazz.new_($I$(22,1).c$$S$S,[dir, C$.prefsFileName]);
if (!file.exists$()) {
file=Clazz.new_($I$(22,1).c$$S$S,[dir, "." + C$.prefsFileName]);
if (file.exists$()) {
C$.prefsFileName="." + C$.prefsFileName;
}}if (file.exists$()) {
var test=Clazz.new_($I$(32,1).c$$java_io_File,[file]);
if (!test.failedToRead$()) {
C$.prefsControl=test;
C$.prefsPath=$I$(14).forwardSlash$S(dir);
break;
}}}
if (C$.prefsControl == null ) {
C$.prefsControl=Clazz.new_($I$(32,1));
C$.prefsPath=$I$(14,"forwardSlash$S",[dirs.get$I(0)]);
if (C$.prefsPath.equals$O(C$.userhomeDir)) {
C$.prefsFileName="." + C$.prefsFileName;
}var file=Clazz.new_($I$(22,1).c$$S$S,[C$.prefsPath, C$.prefsFileName]);
if (!C$.isJS) C$.prefsControl.write$S(file.getAbsolutePath$());
}}return C$.prefsControl;
}, 1);

Clazz.newMeth(C$, 'getTranslator$',  function () {
return (C$.loadTranslatorTool ? $I$(33).getTool$() : null);
}, 1);

Clazz.newMeth(C$, 'getChooser$',  function () {
if (C$.chooser != null ) {
$I$(34,"setFonts$O$I",[C$.chooser, $I$(34).getLevel$()]);
return C$.chooser;
}try {
C$.chooser=(C$.chooserDir == null ) ? Clazz.new_($I$(35,1)) : Clazz.new_([Clazz.new_($I$(22,1).c$$S,[C$.chooserDir])],$I$(35,1).c$$java_io_File);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Exception in OSPRuntime getChooser=" + e);
return null;
} else {
throw e;
}
}
var defaultFilter=C$.chooser.getFileFilter$();
var xmlFilter=((P$.OSPRuntime$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPRuntime$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileFilter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (f) {
if (f == null ) {
return false;
}if (f.isDirectory$()) {
return true;
}var extension=null;
var name=f.getName$();
var i=name.lastIndexOf$I(".");
if ((i > 0) && (i < name.length$() - 1) ) {
extension=name.substring$I(i + 1).toLowerCase$();
}if ((extension != null ) && (extension.equals$O("xml")) ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return $I$(19).getString$S("OSPRuntime.FileFilter.Description.XML");
});
})()
), Clazz.new_($I$(36,1),[this, null],P$.OSPRuntime$2));
var txtFilter=((P$.OSPRuntime$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPRuntime$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileFilter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (f) {
if (f == null ) {
return false;
}if (f.isDirectory$()) {
return true;
}var extension=null;
var name=f.getName$();
var i=name.lastIndexOf$I(".");
if ((i > 0) && (i < name.length$() - 1) ) {
extension=name.substring$I(i + 1).toLowerCase$();
}if ((extension != null ) && extension.equals$O("txt") ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return $I$(19).getString$S("OSPRuntime.FileFilter.Description.TXT");
});
})()
), Clazz.new_($I$(36,1),[this, null],P$.OSPRuntime$3));
C$.chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(xmlFilter);
C$.chooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(txtFilter);
C$.chooser.setFileFilter$javax_swing_filechooser_FileFilter(defaultFilter);
$I$(34,"setFonts$O$I",[C$.chooser, $I$(34).getLevel$()]);
return C$.chooser;
}, 1);

Clazz.newMeth(C$, 'chooseFilename$javax_swing_JFileChooser',  function (chooser) {
return C$.chooseFilename$javax_swing_JFileChooser$java_awt_Component$Z(chooser, null, true);
}, 1);

Clazz.newMeth(C$, 'chooseFilename$javax_swing_JFileChooser$java_awt_Component$Z',  function (chooser, parent, toSave) {
var fileName=null;
var result;
if (toSave) {
result=chooser.showSaveDialog$java_awt_Component(parent);
} else {
result=chooser.showOpenDialog$java_awt_Component(parent);
}if (result == 0) {
C$.chooserDir=chooser.getCurrentDirectory$().toString();
var file=chooser.getSelectedFile$();
if (toSave) {
if (file.exists$()) {
var selected=$I$(24,"showConfirmDialog$java_awt_Component$O$S$I",[parent, $I$(19).getString$S("DrawingFrame.ReplaceExisting_message") + " " + file.getName$() + $I$(19).getString$S("DrawingFrame.QuestionMark") , $I$(19).getString$S("DrawingFrame.ReplaceFile_option_title"), 1]);
if (selected != 0) {
return null;
}}} else {
if (!file.exists$()) {
$I$(24,"showMessageDialog$java_awt_Component$O$S$I",[parent, $I$(19).getString$S("GUIUtils.FileDoesntExist") + " " + file.getName$() , $I$(19).getString$S("GUIUtils.FileChooserError"), 0]);
return null;
}}fileName=file.getAbsolutePath$();
if ((fileName == null ) || fileName.trim$().equals$O("") ) {
return null;
}}return fileName;
}, 1);

Clazz.newMeth(C$, 'createChooser$S$S$SA',  function (title, description, extensions) {
var chooser=C$.createChooser$S$SA$java_io_File(description, extensions, null);
chooser.setDialogTitle$S(title);
return chooser;
}, 1);

Clazz.newMeth(C$, 'createChooser$S$SA',  function (description, extensions) {
return C$.createChooser$S$SA$java_io_File(description, extensions, null);
}, 1);

Clazz.newMeth(C$, 'createChooser$S$SA$java_io_File',  function (description, extensions, homeDir) {
var chooser=Clazz.new_([Clazz.new_($I$(22,1).c$$S,[C$.chooserDir])],$I$(35,1).c$$java_io_File);
var filter=Clazz.new_($I$(37,1));
for (var i=0; i < extensions.length; i++) {
filter.addExtension$S(extensions[i]);
}
filter.setDescription$S(description);
if (homeDir != null ) {
chooser.setFileSystemView$javax_swing_filechooser_FileSystemView(((P$.OSPRuntime$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPRuntime$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.filechooser.FileSystemView'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createNewFolder$java_io_File',  function (arg0) {
return $I$(38).getFileSystemView$().createNewFolder$java_io_File(arg0);
});

Clazz.newMeth(C$, 'getHomeDirectory$',  function () {
return this.$finals$.homeDir;
});
})()
), Clazz.new_($I$(38,1),[this, {homeDir:homeDir}],P$.OSPRuntime$4)));
}chooser.setFileFilter$javax_swing_filechooser_FileFilter(filter);
$I$(34,"setFonts$O$I",[chooser, $I$(34).getLevel$()]);
return chooser;
}, 1);

Clazz.newMeth(C$, 'cacheJSFile$java_io_File$Z',  function (file, isAdd) {
if (C$.isJS) {
C$.jsutil.cachePathData$S$O(file.getAbsolutePath$(), (isAdd ? C$.jsutil.getBytes$java_io_File(file) : null));
}}, 1);

Clazz.newMeth(C$, 'getCachedBytes$S',  function (path) {
return (C$.isJS ? C$.jsutil.getCachedBytes$S(path) : null);
}, 1);

Clazz.newMeth(C$, 'addJSCachedBytes$O',  function (URLorURIorFile) {
return (C$.isJS ? C$.jsutil.addJSCachedBytes$O(URLorURIorFile) : null);
}, 1);

Clazz.newMeth(C$, 'isJSTemp$S',  function (path) {
return C$.isJS && path.startsWith$S("/TEMP/") ;
}, 1);

Clazz.newMeth(C$, 'displayURL$S',  function (url) {
if (C$.isJS) {
C$.jsutil.displayURL$S$S(url, "_blank");
} else {
{

}
}}, 1);

Clazz.newMeth(C$, 'showStatus$S',  function (msg) {
if (C$.isJS && C$.logToJ2SMonitor ) C$.jsutil.showStatus$S$Z(msg, true);
}, 1);

Clazz.newMeth(C$, 'getURLBytesAsync$java_net_URL$java_util_function_Function',  function (url, whenDone) {
if (C$.allowAsyncURL) {
C$.jsutil.getURLBytesAsync$java_net_URL$java_util_function_Function(url, whenDone);
} else {
whenDone.apply$O(C$.jsutil.getURLBytes$java_net_URL(url));
}}, 1);

Clazz.newMeth(C$, 'postEvent$Runnable',  function (runner) {
if (C$.isJS || $I$(39).isEventDispatchThread$() ) {
runner.run$();
} else {
$I$(39).invokeLater$Runnable(runner);
}}, 1);

Clazz.newMeth(C$, 'dispatchEventWait$Runnable',  function (runner) {
if (C$.isJS || $I$(39).isEventDispatchThread$() ) runner.run$();
 else try {
$I$(39).invokeAndWait$Runnable(runner);
} catch (e) {
if (Clazz.exceptionOf(e,"java.lang.reflect.InvocationTargetException") || Clazz.exceptionOf(e,"InterruptedException")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'setAppClass$O',  function (j) {
if (C$.isJS) {
C$.jsutil.setAppletAttribute$S$O("app", j);
}}, 1);

Clazz.newMeth(C$, 'setTimeout$S$I$Z$Runnable',  function (name, msDelay, cancelPending, r) {
return $I$(40).setTimeout$S$I$Z$Runnable(name, msDelay, cancelPending, r);
}, 1);

Clazz.newMeth(C$, 'exit$',  function () {
$I$(40).cancelTimeoutsByName$S(null);
}, 1);

Clazz.newMeth(C$, 'getClipboard$',  function () {
return $I$(21).getDefaultToolkit$().getSystemClipboard$();
}, 1);

Clazz.newMeth(C$, 'setOSPAction$javax_swing_InputMap$javax_swing_KeyStroke$S$javax_swing_ActionMap$javax_swing_Action',  function (im, ks, actionKey, am, pasteAction) {
var key=im.get$javax_swing_KeyStroke(ks);
if (key == null ) {
im.put$javax_swing_KeyStroke$O(ks, key=actionKey);
}am.put$O$javax_swing_Action(key, pasteAction);
}, 1);

Clazz.newMeth(C$, 'paste$java_util_function_Consumer',  function (whenDone) {
if (C$.isJS) {
if (whenDone != null ) C$.jsutil.getClipboardText$java_util_function_Consumer(whenDone);
return null;
}var data=null;
try {
var clipboard=C$.getClipboard$();
data=clipboard.getContents$O(null);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if ((data != null ) && data.isDataFlavorSupported$java_awt_datatransfer_DataFlavor($I$(41).stringFlavor) ) {
try {
var s=data.getTransferData$java_awt_datatransfer_DataFlavor($I$(41).stringFlavor);
if (whenDone != null ) whenDone.accept$O(s);
return s;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}return null;
}, 1);

Clazz.newMeth(C$, 'copy$S$java_awt_datatransfer_ClipboardOwner',  function (s, owner) {
var stringSelection=Clazz.new_($I$(42,1).c$$S,[s]);
C$.getClipboard$().setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner(stringSelection, owner == null  ? stringSelection : owner);
}, 1);

Clazz.newMeth(C$, 'setJSClipboardPasteListener$java_awt_Component$javax_swing_TransferHandler',  function (c, handler) {
C$.jsutil.setPasteListener$java_awt_Component$javax_swing_TransferHandler(c, handler);
}, 1);

Clazz.newMeth(C$, 'addAssets$S$S$S',  function (name, zipPath, path) {
if (C$.useZipAssets) {
try {
var val=(C$.isJS ? C$.jsutil.getAppletInfo$S("assets") : null);
if (val == null ) val="DEFAULT";
if ((Clazz.instanceOf(val, "java.lang.String"))) {
switch ((val).toUpperCase$()) {
case "DEFAULT":
if (!C$.isJS) {
zipPath=Clazz.getClass(C$).getClassLoader$().getResource$S(zipPath).toString();
}$I$(43,"add$O",[Clazz.new_($I$(44,1).c$$S$S$S,[name, zipPath, path])]);
break;
case "NONE":
break;
default:
$I$(43).add$O(val);
break;
}
} else {
$I$(43).add$O(val);
}} catch (e) {
$I$(2).warning$S("Error reading assets path. ");
System.err.println$S("Error reading assets path.");
}
}}, 1);

Clazz.newMeth(C$, 'getMemory$',  function () {
if (C$.isJS) return Clazz.array(Long.TYPE, -1, [0, [16777215,549755813887,1]]);
var memory=$I$(45).getMemoryMXBean$();
return Clazz.array(Long.TYPE, -1, [Long.$div(memory.getHeapMemoryUsage$().getUsed$(),(1048576)), Long.$div(memory.getHeapMemoryUsage$().getMax$(),(1048576))]);
}, 1);

Clazz.newMeth(C$, 'getMemoryStr$',  function () {
if (C$.isJS) return "";
var m=C$.getMemory$();
return Long.$s(m[0]) + "/" + Long.$s(m[1]) ;
}, 1);

Clazz.newMeth(C$, 'trigger$I$java_awt_event_ActionListener',  function (ms, a) {
var timer=Clazz.new_($I$(46,1).c$$I$java_awt_event_ActionListener,[ms, a]);
timer.setRepeats$Z(false);
timer.start$();
return timer;
}, 1);

Clazz.newMeth(C$, 'chooseColor$java_awt_Color$S$java_util_function_Consumer',  function (color, title, whenDone) {
var chooser=Clazz.new_($I$(47,1));
chooser.setColor$java_awt_Color(color);
var cancelListener=((P$.OSPRuntime$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPRuntime$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.chooser.setColor$java_awt_Color(this.$finals$.color);
});
})()
), Clazz.new_(P$.OSPRuntime$5.$init$,[this, {color:color,chooser:chooser}]));
var okListener=((P$.OSPRuntime$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "OSPRuntime$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.$finals$.whenDone.accept$O.apply(this.$finals$.whenDone, [this.$finals$.chooser.getColor$.apply(this.$finals$.chooser, [])]);
});
})()
), Clazz.new_(P$.OSPRuntime$lambda1.$init$,[this, {chooser:chooser,whenDone:whenDone}]));
var dialog=$I$(47).createDialog$java_awt_Component$S$Z$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener(null, title, true, chooser, okListener, cancelListener);
$I$(34,"setFonts$O$I",[dialog, $I$(34).getLevel$()]);
dialog.setVisible$Z(true);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.isJS=true ||false;
C$.cssCursor=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||/Macintosh/.test(navigator.userAgent) && 'ontouchend' in document ||false;
C$.hasKeyboard=!C$.cssCursor;
C$.askIfMobileKeyboard=true;
{

window.addEventListener("online", function(){alert("Internet reconnected.")});
window.addEventListener("offline", function(){alert("Internet Disconnected.")})
};
{
try {
C$.isMac=(1 ? false :(System.getProperty$S$S("os.name", "").toLowerCase$().startsWith$S("mac")));
C$.macOffset=(C$.isMac && !C$.isJS ) ? 16 : 0;
} catch (ex) {
if (Clazz.exceptionOf(ex,"SecurityException")){
} else {
throw ex;
}
}
};
{
try {
if (C$.isJS) {
C$.jsutil=(Clazz.forName("swingjs.JSUtil").newInstance$());
C$.jsutil.addDirectDatabaseCall$S(".");
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(2).warning$S("OSPRuntime could not create jsutil");
} else {
throw e;
}
}
};
C$.isApplet=false;
C$.isBHTest=C$.isJS;
C$.dontLog=C$.isJS;
C$.allowBackgroundNodeLoading=false;
C$.allowAutopaste=!C$.isJS;
C$.allowDatasetClip=(C$.getBrowserName$() !== "Mozilla Firefox" );
C$.allowLibClipboardPasteCheck=!C$.isJS;
C$.allowSetFonts=true;
C$.allowAsyncURL=C$.isJS;
C$.loadTranslatorTool=!C$.isJS;
C$.autoAddLibrary=!C$.isJS;
C$.checkTempDirCache=C$.isJS;
C$.checkZipLoaders=!C$.isJS;
C$.doCacheThumbnail=!C$.isJS;
C$.doCacheLibaryRecord=!C$.isJS;
C$.doCacheZipContents=true;
C$.doScrollToPath=false;
C$.drawDontFillAxes=true;
C$.logToJ2SMonitor=C$.isJS;
C$.resCacheEnabled=C$.isJS;
C$.setRenderingHints=(!C$.isJS && !C$.isMac );
C$.embedVideoAsObject=C$.isJS;
C$.useZipAssets=C$.isJS;
C$.unzipFiles=!C$.isJS;
{
C$.addAssets$S$S$S("osp", "osp-assets.zip", "org/opensourcephysics/resources");
if (!C$.isJS && !C$.unzipFiles ) $I$(2).warning$S("OSPRuntime.unzipFiles setting is false for BH testing");
if (C$.skipDisplayOfPDF) {
$I$(2).warning$S("OSPRuntime.skipDisplayOfPDF true for BH testing");
}};
C$.tempDir=System.getProperty$S("java.io.tmpdir");
C$.disableAllDrawing=false;
C$.loadVideoTool=true;
C$.loadExportTool=true;
C$.loadDataTool=true;
C$.loadOSPLog=true;
C$.dfs=Clazz.new_($I$(9,1));
C$.defaultLocales=Clazz.array($I$(10), -1, [$I$(10).ENGLISH, Clazz.new_($I$(10,1).c$$S,["es"]), Clazz.new_($I$(10,1).c$$S,["de"]), Clazz.new_($I$(10,1).c$$S,["da"]), Clazz.new_($I$(10,1).c$$S,["sk"]), $I$(10).TAIWAN]);
C$.launcherMode=false;
C$.antiAliasText=false;
C$.authorMode=true;
C$.launchJar=null;
C$.preferredDecimalSeparator=null;
C$.DEFAULT_LOOK_AND_FEEL=$I$(11).getLookAndFeel$();
C$.DEFAULT_LOOK_AND_FEEL_DECORATIONS=$I$(12).isDefaultLookAndFeelDecorated$();
C$.LOOK_AND_FEEL_TYPES=Clazz.new_($I$(13,1));
C$.prefsFileName="osp.prefs";
{
try {
C$.chooserDir=System.getProperty$S$S("user.dir", null);
var userhome=C$.getUserHome$();
if (userhome != null ) {
C$.userhomeDir=$I$(14).forwardSlash$S(userhome);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
C$.chooserDir=null;
} else {
throw ex;
}
}
C$.LOOK_AND_FEEL_TYPES.put$O$O("METAL", "javax.swing.plaf.metal.MetalLookAndFeel");
C$.LOOK_AND_FEEL_TYPES.put$O$O("NIMBUS", "com.sun.java.swing.plaf.nimbus.NimbusLookAndFeel");
C$.LOOK_AND_FEEL_TYPES.put$O$O("GTK", "com.sun.java.swing.plaf.gtk.GTKLookAndFeel");
C$.LOOK_AND_FEEL_TYPES.put$O$O("MOTIF", "com.sun.java.swing.plaf.motif.MotifLookAndFeel");
C$.LOOK_AND_FEEL_TYPES.put$O$O("WINDOWS", "com.sun.java.swing.plaf.windows.WindowsLookAndFeel");
C$.LOOK_AND_FEEL_TYPES.put$O$O("CROSS_PLATFORM", $I$(11).getCrossPlatformLookAndFeelClassName$());
C$.LOOK_AND_FEEL_TYPES.put$O$O("SYSTEM", $I$(11).getSystemLookAndFeelClassName$());
C$.LOOK_AND_FEEL_TYPES.put$O$O("DEFAULT", C$.DEFAULT_LOOK_AND_FEEL.getClass$().getName$());
var format=$I$(15,"getInstance$java_util_Locale",[$I$(10).getDefault$()]);
if (Clazz.instanceOf(format, "java.text.DecimalFormat")) {
C$.setDefaultDecimalSeparator$C((format).getDecimalFormatSymbols$().getDecimalSeparator$());
} else {
C$.setDefaultDecimalSeparator$C($I$(16).newDecimalFormat$S("0").getDecimalFormatSymbols$().getDecimalSeparator$());
}};
C$.frc=Clazz.new_($I$(17,1).c$$java_awt_geom_AffineTransform$Z$Z,[null, false, false]);
C$.launcherAllowEJSModel=true;
C$.OUT_OF_MEMORY_ERROR=Integer.valueOf$I(1);
C$.outOfMemory=false;
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.OSPRuntime, "Disposable", function(){
});

C$.$fields$=[[]
,['O',['allocated','java.util.List']]]

Clazz.newMeth(C$, 'allocate$org_opensourcephysics_display_OSPRuntime_Disposable',  function (obj) {
if (C$.allocated.contains$O(obj)) return;
C$.allocated.add$O(obj);
$I$(2).notify$O$S(obj, "allocated");
}, 1);

Clazz.newMeth(C$, 'allocate$org_opensourcephysics_display_OSPRuntime_DisposableA$S',  function (objs, name) {
C$.allocated.add$O(objs);
$I$(2).notify$O$S(name + "[]", "allocated");
}, 1);

Clazz.newMeth(C$, 'deallocate$org_opensourcephysics_display_OSPRuntime_DisposableA',  function (objs) {
for (var o, $o = 0, $$o = objs; $o<$$o.length&&((o=($$o[$o])),1);$o++) {
if (o != null ) C$.deallocate$org_opensourcephysics_display_OSPRuntime_Disposable(o);
}
}, 1);

Clazz.newMeth(C$, 'deallocate$org_opensourcephysics_display_OSPRuntime_DisposableA$I',  function (objs, i) {
var o=objs[i];
if (o != null ) {
C$.deallocate$org_opensourcephysics_display_OSPRuntime_Disposable(o);
objs[i]=null;
}}, 1);

Clazz.newMeth(C$, 'deallocate$org_opensourcephysics_display_OSPRuntime_DisposableA$java_util_BitSet',  function (objs, bs) {
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
C$.deallocate$org_opensourcephysics_display_OSPRuntime_DisposableA$I(objs, i);
}
}, 1);

Clazz.newMeth(C$, 'deallocate$org_opensourcephysics_display_OSPRuntime_Disposable',  function (obj) {
if (obj == null ) return;
obj.dispose$();
C$.allocated.remove$O(obj);
$I$(2).notify$O$S(obj, " deallocated ");
}, 1);

Clazz.newMeth(C$, 'clearAllocation$org_opensourcephysics_display_OSPRuntime_Disposable',  function (obj) {
if (obj == null ) return;
C$.allocated.remove$O(obj);
$I$(2).notify$O$S(obj, " deallocated ");
}, 1);

Clazz.newMeth(C$, 'deallocateAll$',  function () {
for (var o, $o = C$.allocated.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
if (Clazz.instanceOf(o, "org.opensourcephysics.display.OSPRuntime.Disposable")) {
(o).dispose$();
$I$(2).notify$O$S(o, " deallocated ");
} else if (Clazz.instanceOf(o, Clazz.array(C$, -1))) {
for (var ao, $ao = 0, $$ao = o; $ao<$$ao.length&&((ao=($$ao[$ao])),1);$ao++) {
if (ao != null ) C$.deallocate$org_opensourcephysics_display_OSPRuntime_Disposable(ao);
}
} else {
$I$(2).notify$O$S(o, "deallocated");
}}
C$.allocated.clear$();
}, 1);

Clazz.newMeth(C$, 'dump$',  function () {
var n=0;
for (var o, $o = C$.allocated.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
if (Clazz.instanceOf(o, Clazz.array(C$, -1))) {
for (var ao, $ao = 0, $$ao = o; $ao<$$ao.length&&((ao=($$ao[$ao])),1);$ao++) {
if (ao != null  && ++n > 0 ) $I$(2).notify$O$S(ao, " still allocated!");
}
} else {
++n;
$I$(2).notify$O$S(o, "still allocated!");
}}
$I$(2,"notify$O$S",["" + n, "objects still allocated" + (n == 0 ? "" : "!!!!!!!!!!!!")]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.allocated=Clazz.new_($I$(1,1));
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.OSPRuntime, "Supported", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pointers=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['O',['support','java.beans.PropertyChangeSupport','pointers','java.util.HashSet']]
,['Z',['debugging']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.support=Clazz.new_($I$(4,1).c$$O,[this]);
}, 1);

Clazz.newMeth(C$, 'firePropertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.support.firePropertyChange$java_beans_PropertyChangeEvent(e);
});

Clazz.newMeth(C$, 'firePropertyChange$S$O$O',  function (name, oldVal, newVal) {
this.support.firePropertyChange$S$O$O(name, oldVal, newVal);
});

Clazz.newMeth(C$, 'addPtr$S',  function (key) {
var b=this.pointers.add$O(key);
if (C$.debugging) System.out.println$S(this.getClass$().getSimpleName$() + key + " ADD " + b );
}, p$1);

Clazz.newMeth(C$, 'removePtr$S',  function (key) {
var b=this.pointers.remove$O(key);
if (C$.debugging) System.out.println$S(this.getClass$().getSimpleName$() + key + " REM " + b + " " + this.pointers.size$() + (this.pointers.size$() == 1 ? this.pointers.toString() : "") );
}, p$1);

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
var key="<-" + listener.getClass$().getSimpleName$() + listener.hashCode$() ;
if (this.pointers.contains$O(key)) return;
p$1.addPtr$S.apply(this, [key]);
this.support.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'addPropertyChangeListenerSafely$java_beans_PropertyChangeListener',  function (listener) {
this.support.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'addPropertyChangeListener$S$java_beans_PropertyChangeListener',  function (property, listener) {
var key="/" + property + "<-" + listener.getClass$().getSimpleName$() + listener.hashCode$() ;
if (this.pointers.contains$O(key)) return;
p$1.addPtr$S.apply(this, [key]);
this.support.addPropertyChangeListener$S$java_beans_PropertyChangeListener(property, listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
var key="<-" + listener.getClass$().getSimpleName$() + listener.hashCode$() ;
if (!this.pointers.contains$O(key)) return;
p$1.removePtr$S.apply(this, [key]);
this.support.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$S$java_beans_PropertyChangeListener',  function (property, listener) {
if (listener == null ) return;
var key="/" + property + "<-" + listener.getClass$().getSimpleName$() + listener.hashCode$() ;
if (!this.pointers.contains$O(key)) return;
p$1.removePtr$S.apply(this, [key]);
this.support.removePropertyChangeListener$S$java_beans_PropertyChangeListener(property, listener);
});

Clazz.newMeth(C$, 'addListeners$org_opensourcephysics_display_OSPRuntime_Supported$SA$java_beans_PropertyChangeListener',  function (c, names, listener) {
for (var i=names.length; --i >= 0; ) c.addPropertyChangeListener$S$java_beans_PropertyChangeListener(names[i], listener);

}, 1);

Clazz.newMeth(C$, 'removeListeners$org_opensourcephysics_display_OSPRuntime_Supported$SA$java_beans_PropertyChangeListener',  function (c, names, listener) {
for (var i=names.length; --i >= 0; ) c.removePropertyChangeListener$S$java_beans_PropertyChangeListener(names[i], listener);

}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
var a=this.support.getPropertyChangeListeners$();
if (C$.debugging) System.out.println$S(this.getClass$().getSimpleName$() + "------------" + a.length );
for (var i=a.length; --i >= 0; ) {
var p=a[i];
if (Clazz.instanceOf(p, "java.beans.PropertyChangeListenerProxy")) {
var prop=(p).getPropertyName$();
p=(p).getListener$();
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener(prop, p);
} else {
this.removePropertyChangeListener$java_beans_PropertyChangeListener(p);
}}
});

Clazz.newMeth(C$, 'dispose$java_awt_Component',  function (c) {
var a=c.getPropertyChangeListeners$();
if (C$.debugging) System.out.println$S(c.getClass$().getSimpleName$() + "------------" + a.length );
for (var i=a.length; --i >= 0; ) {
var p=a[i];
if (Clazz.instanceOf(p, "java.beans.PropertyChangeListenerProxy")) {
var prop=(p).getPropertyName$();
p=(p).getListener$();
if (C$.debugging) System.out.println$S(c.getClass$().getSimpleName$() + "/" + prop + "---remove " + p.getClass$().getSimpleName$() );
c.removePropertyChangeListener$S$java_beans_PropertyChangeListener(prop, p);
} else {
if (C$.debugging) System.out.println$S(c.getClass$().getSimpleName$() + "---remove " + p.getClass$().getSimpleName$() );
c.removePropertyChangeListener$java_beans_PropertyChangeListener(p);
if (Clazz.instanceOf(c, "java.beans.PropertyChangeListener")) {
if (Clazz.instanceOf(p, "java.awt.Component")) (p).removePropertyChangeListener$java_beans_PropertyChangeListener(c);
 else if (Clazz.instanceOf(p, "org.opensourcephysics.display.OSPRuntime.Supported")) (p).removePropertyChangeListener$java_beans_PropertyChangeListener(c);
}}}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.debugging=false;
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.OSPRuntime, "Version", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['ver']]]

Clazz.newMeth(C$, 'c$$S',  function (version) {
;C$.$init$.apply(this);
this.ver=version;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.ver;
});

Clazz.newMeth(C$, 'isValid$',  function () {
var v=this.ver.trim$().split$S("\\.");
if (v.length >= 2 && v.length <= 4 ) {
for (var i=0; i < v.length; i++) {
try {
Integer.parseInt$S(v[i].trim$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
return false;
} else {
throw ex;
}
}
}
return true;
}return false;
});

Clazz.newMeth(C$, ['compareTo$org_opensourcephysics_display_OSPRuntime_Version','compareTo$O'],  function (o) {
var v1=this.ver.trim$().split$S("\\.");
var v2=o.ver.trim$().split$S("\\.");
if (v1.length == 2) v1=Clazz.array(String, -1, [v1[0], v1[1], "0", "0"]);
 else if (v1.length == 3) v1=Clazz.array(String, -1, [v1[0], v1[1], v1[2], "0"]);
if (v2.length == 2) v2=Clazz.array(String, -1, [v2[0], v2[1], "0", "0"]);
 else if (v2.length == 3) v2=Clazz.array(String, -1, [v2[0], v2[1], v2[2], "0"]);
for (var i=0; i < v1.length; i++) {
if (Integer.parseInt$S(v1[i]) < Integer.parseInt$S(v2[i])) {
return -1;
} else if (Integer.parseInt$S(v1[i]) > Integer.parseInt$S(v2[i])) {
return 1;
}}
return 0;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.OSPRuntime, "TextLayout", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['JSTL',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['text'],'O',['font','java.awt.Font','tl','java.awt.font.TextLayout']]]

Clazz.newMeth(C$, 'c$$S$java_awt_Font',  function (text, font) {
;C$.$init$.apply(this);
this.text=text;
this.font=font;
}, 1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics$F$F',  function (g, x, y) {
p$2.getTL.apply(this, []);
this.tl.draw$java_awt_Graphics2D$F$F(g, x, y);
});

Clazz.newMeth(C$, 'getBounds$',  function () {
p$2.getTL.apply(this, []);
return this.tl.getBounds$();
});

Clazz.newMeth(C$, 'getTL',  function () {
if (this.tl == null ) {
if ($I$(6).isJS) {
this.tl=Clazz.new_($I$(8,1),[this, null]);
} else {
this.tl=Clazz.new_([this.text, this.font, $I$(6).frc],$I$(5,1).c$$S$java_awt_Font$java_awt_font_FontRenderContext);
}}return this.tl;
}, p$2);
;
(function(){/*c*/var C$=Clazz.newClass(P$.OSPRuntime.TextLayout, "JSTL", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$F$F',  function (g, x, y) {
var testing=false;
g.setFont$java_awt_Font(this.b$['org.opensourcephysics.display.OSPRuntime.TextLayout'].font);
g.drawString$S$F$F(this.b$['org.opensourcephysics.display.OSPRuntime.TextLayout'].text, x, y);
if (testing) {
var t0=Clazz.new_([this.b$['org.opensourcephysics.display.OSPRuntime.TextLayout'].text, this.b$['org.opensourcephysics.display.OSPRuntime.TextLayout'].font, $I$(6).frc],$I$(5,1).c$$S$java_awt_Font$java_awt_font_FontRenderContext);
g.setColor$java_awt_Color($I$(7).red);
var w=(t0.getBounds$().getWidth$()|0);
t0.draw$java_awt_Graphics2D$F$F(g, x + w, y);
t0.draw$java_awt_Graphics2D$F$F(g, x - w, y);
}});

Clazz.newMeth(C$, 'getBounds$',  function () {
return this.b$['org.opensourcephysics.display.OSPRuntime.TextLayout'].font.getStringBounds$S$java_awt_font_FontRenderContext(this.b$['org.opensourcephysics.display.OSPRuntime.TextLayout'].text, $I$(6).frc);
});

Clazz.newMeth(C$, 'getAscent$',  function () {
return this.b$['org.opensourcephysics.display.OSPRuntime.TextLayout'].font.getLineMetrics$S$java_awt_font_FontRenderContext(this.b$['org.opensourcephysics.display.OSPRuntime.TextLayout'].text, $I$(6).frc).getAscent$();
});

Clazz.newMeth(C$, 'getDescent$',  function () {
return this.b$['org.opensourcephysics.display.OSPRuntime.TextLayout'].font.getLineMetrics$S$java_awt_font_FontRenderContext(this.b$['org.opensourcephysics.display.OSPRuntime.TextLayout'].text, $I$(6).frc).getDescent$();
});

Clazz.newMeth(C$, 'getLeading$',  function () {
return this.b$['org.opensourcephysics.display.OSPRuntime.TextLayout'].font.getLineMetrics$S$java_awt_font_FontRenderContext(this.b$['org.opensourcephysics.display.OSPRuntime.TextLayout'].text, $I$(6).frc).getLeading$();
});
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.OSPRuntime, "ExtensionFileFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.filechooser.FileFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.description="";
this.extensions=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['S',['description'],'O',['extensions','java.util.ArrayList']]]

Clazz.newMeth(C$, 'addExtension$S',  function (extension) {
if (!extension.startsWith$S(".")) {
extension="." + extension;
}this.extensions.add$O(extension.toLowerCase$());
});

Clazz.newMeth(C$, 'toString',  function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S',  function (aDescription) {
this.description=aDescription;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'accept$java_io_File',  function (f) {
if (f == null ) return false;
if (f.isDirectory$()) {
return true;
}var name=f.getName$().toLowerCase$();
for (var i=0; i < this.extensions.size$(); i++) {
if (name.endsWith$S(this.extensions.get$I(i))) {
return true;
}}
return false;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
