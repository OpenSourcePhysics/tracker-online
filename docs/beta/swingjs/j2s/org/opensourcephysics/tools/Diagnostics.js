(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.tools.ToolsRes','Runtime','javax.swing.JOptionPane','java.io.File','java.net.URLDecoder','java.util.ArrayList','org.opensourcephysics.controls.XML']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Diagnostics");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['NEWLINE','requester'],'O',['dialogOwner','java.awt.Component']]]

Clazz.newMeth(C$, 'aboutJava$',  function () {
var version=System.getProperty$S$S("java.version", "unknown version");
var rtName=System.getProperty$S("java.runtime.name");
var rtVersion=System.getProperty$S("java.runtime.version");
var vmName=System.getProperty$S("java.vm.name");
var vmVersion=System.getProperty$S("java.vm.version");
var path=System.getProperty$S("java.home");
var bitness=$I$(1).getVMBitness$() == 64 ? " (64-bit)" : " (32-bit)";
var aboutString=$I$(2).getString$S("Diagnostics.Java.About.Version") + " " + version + bitness + C$.NEWLINE + rtName + " (build " + rtVersion + ")" + C$.NEWLINE + vmName + " (build " + vmVersion + ")" + C$.NEWLINE + "JRE path " + path + C$.NEWLINE + C$.NEWLINE + "Available Processors: " + $I$(3).getRuntime$().availableProcessors$() + C$.NEWLINE + "Total Memory: " + Long.$s(Long.$div($I$(3).getRuntime$().totalMemory$(),1000000))  + " MB" + C$.NEWLINE + "Free Memory: " + Long.$s(Long.$div($I$(3).getRuntime$().freeMemory$(),1000000)) + " MB" + C$.NEWLINE;
$I$(4,"showMessageDialog$java_awt_Component$O$S$I",[C$.dialogOwner, aboutString, $I$(2).getString$S("Diagnostics.Java.About.Title"), 1]);
}, 1);

Clazz.newMeth(C$, 'setDialogOwner$java_awt_Component',  function (owner) {
C$.dialogOwner=owner;
}, 1);

Clazz.newMeth(C$, 'getDialogOwner$',  function () {
return C$.dialogOwner;
}, 1);

Clazz.newMeth(C$, 'getJarFile$Class',  function (classInJar) {
var codeSource=classInJar.getProtectionDomain$().getCodeSource$();
var jarFile=null;
if (codeSource.getLocation$() != null ) {
jarFile=Clazz.new_([codeSource.getLocation$().toURI$()],$I$(5,1).c$$java_net_URI);
} else {
var path=classInJar.getResource$S(classInJar.getSimpleName$() + ".class").getPath$();
var jarFilePath=path.substring$I$I(path.indexOf$S(":") + 1, path.indexOf$S("!"));
jarFilePath=$I$(6).decode$S$S(jarFilePath, "UTF-8");
jarFile=Clazz.new_($I$(5,1).c$$S,[jarFilePath]);
}return jarFile;
}, 1);

Clazz.newMeth(C$, 'aboutJava3D$',  function () {
if ($I$(1).isMac$() && !$I$(1).hasJava3D$() ) {
return;
}var props=null;
try {
var type=Clazz.forName("javax.media.j3d.VirtualUniverse");
var method=type.getMethod$S$ClassA("getProperties", null);
props=method.invoke$O$OA(null, null);
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
var extdirs=System.getProperty$S("java.ext.dirs");
var separator=System.getProperty$S("path.separator");
var pathList=Clazz.new_($I$(7,1));
var n=extdirs.indexOf$S(separator);
while (n > -1){
pathList.add$O(extdirs.substring$I$I(0, n));
extdirs=extdirs.substring$I(n + 1);
n=extdirs.indexOf$S(separator);
}
if (!"".equals$O(extdirs)) {
pathList.add$O(extdirs);
}var j3djar=null;
var slash=System.getProperty$S$S("file.separator", "/");
for (var path, $path = pathList.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
j3djar=Clazz.new_($I$(5,1).c$$S,[path + slash + "j3dcore.jar" ]);
if (!j3djar.exists$()) j3djar=null;
}
if (props != null ) {
var version=props.get$O("j3d.version");
var vendor=props.get$O("j3d.vendor");
var jarPath=j3djar == null  ? $I$(2).getString$S("Diagnostics.About.Unknown") : j3djar.getPath$();
var aboutString=$I$(2).getString$S("Diagnostics.Java3D.About.Version") + " " + version + C$.NEWLINE + vendor + C$.NEWLINE + $I$(2).getString$S("Diagnostics.Java3D.About.JarPath") + " " + jarPath ;
$I$(4,"showMessageDialog$java_awt_Component$O$S$I",[C$.dialogOwner, aboutString, $I$(2).getString$S("Diagnostics.Java3D.About.Title"), 1]);
} else if (j3djar != null ) {
$I$(4,"showMessageDialog$java_awt_Component$O$S$I",[C$.dialogOwner, $I$(2).getString$S("Diagnostics.Java3D.Error.Message"), $I$(2).getString$S("Diagnostics.Java3D.About.Title"), 2]);
} else {
$I$(4,"showMessageDialog$java_awt_Component$O$S$I",[C$.dialogOwner, $I$(2).getString$S("Diagnostics.Java3D.NotFound.Message1") + C$.NEWLINE + $I$(2).getString$S("Diagnostics.Download.Message") + C$.NEWLINE + "http://java3d.java.net/binary-builds.html" , $I$(2).getString$S("Diagnostics.Java3D.About.Title"), 2]);
}}, 1);

Clazz.newMeth(C$, 'aboutJOGL$',  function () {
var version=null;
try {
var type=Clazz.forName("javax.media.opengl.glu.GLU");
var field=type.getField$S("versionString");
version=field.get$O(null);
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
var extdirs=System.getProperty$S("java.ext.dirs");
var separator=System.getProperty$S("path.separator");
var pathList=Clazz.new_($I$(7,1));
var n=extdirs.indexOf$S(separator);
while (n > -1){
pathList.add$O(extdirs.substring$I$I(0, n));
extdirs=extdirs.substring$I(n + 1);
n=extdirs.indexOf$S(separator);
}
if (!"".equals$O(extdirs)) {
pathList.add$O(extdirs);
}var jogljar=null;
var slash=System.getProperty$S$S("file.separator", "/");
for (var path, $path = pathList.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
jogljar=Clazz.new_($I$(5,1).c$$S,[path + slash + "jogl.jar" ]);
if (!jogljar.exists$()) jogljar=null;
}
var jarPath=jogljar == null  ? $I$(2).getString$S("Diagnostics.About.Unknown") : jogljar.getPath$();
if (version != null ) {
var aboutString=$I$(2).getString$S("Diagnostics.JOGL.About.Version") + " " + version + C$.NEWLINE + $I$(2).getString$S("Diagnostics.JOGL.About.JarPath") + " " + jarPath ;
$I$(4,"showMessageDialog$java_awt_Component$O$S$I",[C$.dialogOwner, aboutString, $I$(2).getString$S("Diagnostics.JOGL.About.Title"), 1]);
} else if (jogljar != null ) {
var aboutString=$I$(2).getString$S("Diagnostics.JOGL.Error.Message") + C$.NEWLINE + $I$(2).getString$S("Diagnostics.JOGL.About.JarPath") + " " + jarPath ;
$I$(4,"showMessageDialog$java_awt_Component$O$S$I",[C$.dialogOwner, aboutString, $I$(2).getString$S("Diagnostics.JOGL.About.Title"), 2]);
} else {
$I$(4,"showMessageDialog$java_awt_Component$O$S$I",[C$.dialogOwner, $I$(2).getString$S("Diagnostics.JOGL.NotFound.Message1") + C$.NEWLINE + $I$(2).getString$S("Diagnostics.JOGL.NotFound.Message2") , $I$(2).getString$S("Diagnostics.JOGL.About.Title"), 2]);
}}, 1);

Clazz.newMeth(C$, 'aboutLaunchJar$',  function () {
if ($I$(1).getLaunchJarPath$() != null ) {
var jar=$I$(1).getLaunchJar$();
try {
if (jar != null ) {
var aboutString=$I$(2).getString$S("Diagnostics.Jar.About.Message.JarFile") + " \"" + $I$(8,"getName$S",[$I$(1).getLaunchJarPath$()]) + "\". " ;
for (var e=jar.entries$(); e.hasMoreElements$(); ) {
var entry=e.nextElement$();
var name=entry.getName$().toLowerCase$();
if (name.endsWith$S(".dsa") && name.startsWith$S("meta-inf") ) {
aboutString+=$I$(2).getString$S("Diagnostics.Jar.About.Message.Signed");
$I$(4,"showMessageDialog$java_awt_Component$O$S$I",[C$.dialogOwner, aboutString, $I$(2).getString$S("Diagnostics.Jar.About.Title"), 1]);
return;
}}
aboutString+=$I$(2).getString$S("Diagnostics.Jar.About.Message.NotSigned");
$I$(4,"showMessageDialog$java_awt_Component$O$S$I",[C$.dialogOwner, aboutString, $I$(2).getString$S("Diagnostics.Jar.About.Title"), 1]);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
} else {
$I$(4,"showMessageDialog$java_awt_Component$O$S$I",[C$.dialogOwner, $I$(2).getString$S("Diagnostics.Jar.About.Message.NoJarFile"), $I$(2).getString$S("Diagnostics.Jar.About.Title"), 1]);
}}, 1);

Clazz.newMeth(C$, 'aboutOS$',  function () {
var osName=System.getProperty$S("os.name");
var version=System.getProperty$S("os.version");
var aboutString=$I$(2).getString$S("Diagnostics.OS.About.Name") + " " + osName + C$.NEWLINE ;
aboutString+=$I$(2).getString$S("Diagnostics.OS.About.Version") + " " + version + C$.NEWLINE ;
var e=System.getProperties$().propertyNames$();
while (e.hasMoreElements$()){
var next=e.nextElement$();
if (next.startsWith$S("os.")) {
var val=System.getProperty$S(next);
if (!val.equals$O(osName) && !val.equals$O(version) ) {
aboutString+=next + ":  " + val + C$.NEWLINE ;
}}}
$I$(4,"showMessageDialog$java_awt_Component$O$S$I",[C$.dialogOwner, aboutString, $I$(2).getString$S("Diagnostics.OS.About.Title"), 1]);
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
C$.aboutJava$();
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.NEWLINE=System.getProperty$S$S("line.separator", "\n");
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
