(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'java.util.TreeMap','javax.swing.JOptionPane','org.opensourcephysics.tools.LaunchRes','javax.swing.JLabel','javax.swing.JButton','javax.swing.JTextField','java.awt.event.KeyAdapter','javax.swing.JPanel','javax.swing.BoxLayout','javax.swing.Box','javax.swing.BorderFactory','java.awt.BorderLayout','java.awt.Dimension','javax.swing.JScrollPane','java.awt.Toolkit','org.opensourcephysics.tools.LaunchableClassMap','java.awt.Color','java.util.regex.Pattern','java.util.ArrayList','javax.swing.JList','java.awt.event.MouseAdapter','org.opensourcephysics.tools.LaunchClassChooser','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.controls.XML','java.net.URL','org.opensourcephysics.controls.OSPLog','java.net.URLClassLoader','java.util.jar.JarFile','java.io.File','org.opensourcephysics.tools.Launcher','javax.swing.JComponent']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LaunchableClassMap", null, 'java.util.TreeMap');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.allLoaded=false;
this.models=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['allLoaded'],'O',['classLoader','ClassLoader','jarOrDirectoryNames','String[]','models','java.util.TreeMap']]]

Clazz.newMeth(C$, 'c$$SA',  function (names) {
Clazz.super_(C$, this);
this.jarOrDirectoryNames=names;
var urls=Clazz.new_($I$(19,1));
var basePath=$I$(22).baseDirectoryPath;
if (basePath == null ) basePath=$I$(23).getLaunchJarDirectory$();
for (var i=0; i < names.length; i++) {
var path=$I$(24).getResolvedPath$S$S(names[i], basePath);
if (!path.endsWith$S(".jar") && !path.endsWith$S("/") ) {
path+="/";
}try {
urls.add$O(Clazz.new_($I$(25,1).c$$S,["file:" + path]));
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.net.MalformedURLException")){
$I$(26).info$S(ex + " " + path );
} else {
throw ex;
}
}
}
this.classLoader=$I$(27,"newInstance$java_net_URLA",[urls.toArray$OA(Clazz.array($I$(25), [0]))]);
}, 1);

Clazz.newMeth(C$, 'smartLoadClass$S',  function (name) {
try {
return this.classLoader.loadClass$S(name);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
return this.getClass$().getClassLoader$().loadClass$S(name);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getClassFiles$java_io_File',  function (directory) {
var files=Clazz.new_($I$(19,1));
for (var next, $next = 0, $$next = directory.listFiles$(); $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (next.isDirectory$()) {
files.addAll$java_util_Collection(this.getClassFiles$java_io_File(next));
} else if (next.getName$().endsWith$S(".class")) {
files.add$O(next);
}}
return files;
});

Clazz.newMeth(C$, 'loadAllClasses$',  function () {
if (this.allLoaded) {
return;
}for (var next, $next = 0, $$next = this.jarOrDirectoryNames; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
if (next.indexOf$S(".jar") > -1) {
var jar=null;
try {
if (!$I$(23).isApplet) {
var basePath=$I$(22).baseDirectoryPath;
if (basePath == null ) basePath=$I$(23).getLaunchJarDirectory$();
var path=$I$(24).getResolvedPath$S$S(next, basePath);
jar=Clazz.new_($I$(28,1).c$$S,[path]);
} else {
var path=$I$(24,"getResolvedPath$S$S",[next, $I$(23).applet.getCodeBase$().toExternalForm$()]);
var url=Clazz.new_($I$(25,1).c$$S,["jar:" + path + "!/" ]);
var conn=url.openConnection$();
jar=conn.getJarFile$();
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(26,"info$S",[ex.getClass$().getName$() + ": " + ex.getMessage$() ]);
} else {
throw ex;
}
}
if (jar == null ) {
continue;
}for (var e=jar.entries$(); e.hasMoreElements$(); ) {
var entry=e.nextElement$();
var name=entry.getName$();
if (name.endsWith$S(".class")) {
this.loadClass$S(name);
}}
} else {
var basePath=$I$(22).baseDirectoryPath;
if (basePath == null ) basePath=$I$(23).getLaunchJarDirectory$();
var directoryPath=$I$(24).getResolvedPath$S$S(next, basePath);
for (var nextFile, $nextFile = this.getClassFiles$java_io_File(Clazz.new_($I$(29,1).c$$S,[directoryPath])).iterator$(); $nextFile.hasNext$()&&((nextFile=($nextFile.next$())),1);) {
var name=$I$(24,"getPathRelativeTo$S$S",[nextFile.getPath$(), directoryPath]);
this.loadClass$S(name);
}
}}
this.allLoaded=true;
});

Clazz.newMeth(C$, 'loadClass$S',  function (name) {
if (name.indexOf$S("$") == -1) {
name=name.substring$I$I(0, name.indexOf$S(".class"));
var j=name.indexOf$S("/");
while (j != -1){
name=name.substring$I$I(0, j) + "." + name.substring$I(j + 1) ;
j=name.indexOf$S("/");
}
if ((this.get$O(name) != null ) || (this.models.get$O(name) != null ) ) {
return;
}try {
var nextClass=this.smartLoadClass$S(name);
if ($I$(30).isLaunchable$Class(nextClass)) {
this.put$O$O(name, nextClass);
}if ($I$(30).isModel$Class(nextClass)) {
this.models.put$O$O(name, nextClass);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var ex = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"NoClassDefFoundError")){
var err = e$$;
{
$I$(26,"info$S",[err.toString()]);
}
} else {
throw e$$;
}
}
}});

Clazz.newMeth(C$, 'includesJar$S',  function (jarName) {
for (var i=0; i < this.jarOrDirectoryNames.length; i++) {
if (this.jarOrDirectoryNames[i].equals$O(jarName)) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'getClass$S',  function (className) {
var type=this.get$O(className);
if ((type != null ) || this.allLoaded ) {
return type;
}try {
type=this.smartLoadClass$S(className);
if ($I$(30).isLaunchable$Class(type)) {
return type;
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var ex = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"NoClassDefFoundError")){
var err = e$$;
{
$I$(26,"info$S",[err.toString()]);
}
} else {
throw e$$;
}
}
return null;
});

Clazz.newMeth(C$, 'getModelClass$S',  function (className) {
var type=this.models.get$O(className);
if ((type != null )) {
return type;
}try {
type=this.smartLoadClass$S(className);
if ($I$(30).isModel$Class(type)) {
return type;
}if (Clazz.getClass($I$(31)).isAssignableFrom$Class(type)) {
try {
type.getConstructor$ClassA(null);
return type;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var ex = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"NoClassDefFoundError")){
var err = e$$;
{
$I$(26,"info$S",[err.toString()]);
}
} else {
throw e$$;
}
}
return null;
});

Clazz.newMeth(C$, 'getClassOfType$S$Class',  function (className, type) {
try {
var theClass=this.smartLoadClass$S(className);
if (type.isAssignableFrom$Class(theClass)) {
return theClass;
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var ex = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"NoClassDefFoundError")){
var err = e$$;
{
$I$(26,"info$S",[err.toString()]);
}
} else {
throw e$$;
}
}
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
