(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control"),I$=[[0,'java.util.Hashtable','org.opensourcephysics.display.OSPRuntime','java.io.File','java.net.URL','org.opensourcephysics.tools.ResourceLoader','java.io.FileInputStream','java.util.jar.JarInputStream','javax.swing.ImageIcon']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Utils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['cacheImages','java.util.Hashtable','enormous','byte[]']]]

Clazz.newMeth(C$, 'fileExists$S$S',  function (_codebase, _filename) {
if (_filename == null ) {
return false;
}if (C$.cacheImages.get$O(_filename) != null ) {
return true;
}if ($I$(2).isJS && _codebase == null  ) {
var u=Clazz.getClass(C$).getClassLoader$().getResource$S(_filename);
return (u != null );
}if (_codebase != null ) {
if (_codebase.startsWith$S("file:")) {
_codebase="file:///" + _codebase.substring$I(6);
}if (!_filename.startsWith$S("/") && !_codebase.endsWith$S("/") ) {
_codebase+="/";
}}var index=_filename.indexOf$I("+");
if (index >= 0) {
return C$.fileExistsInJar$S$S$S(_codebase, _filename.substring$I$I(0, index), _filename.substring$I(index + 1));
} else if (_codebase == null ) {
var file=Clazz.new_($I$(3,1).c$$S,[_filename]);
return file.exists$();
} else {
try {
var url=Clazz.new_($I$(4,1).c$$S,[_codebase + _filename]);
var stream=$I$(5).openStream$java_net_URL(url);
stream.close$();
return true;
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
return false;
} else {
throw exc;
}
}
}}, 1);

Clazz.newMeth(C$, 'fileExistsInJar$S$S$S',  function (_codebase, _jarFile, _filename) {
if ((_filename == null ) || (_jarFile == null ) ) {
return false;
}var inputStream=null;
var jis=null;
try {
if (_codebase == null ) {
inputStream=Clazz.new_($I$(6,1).c$$S,[_jarFile]);
jis=Clazz.new_($I$(7,1).c$$java_io_InputStream,[inputStream]);
} else {
var url=Clazz.new_($I$(4,1).c$$S,[_codebase + _jarFile]);
inputStream=$I$(5).openStream$java_net_URL(url);
jis=Clazz.new_($I$(7,1).c$$java_io_InputStream,[inputStream]);
}while (true){
var je=jis.getNextJarEntry$();
if (je == null ) {
break;
}if (je.isDirectory$()) {
continue;
}if (je.getName$().equals$O(_filename)) {
jis.close$();
inputStream.close$();
return true;
}}
jis.close$();
inputStream.close$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
return false;
} else {
throw exc;
}
}
return false;
}, 1);

Clazz.newMeth(C$, 'icon$S$S',  function (_codebase, _gifFile) {
return C$.icon$S$S$Z(_codebase, _gifFile, true);
}, 1);

Clazz.newMeth(C$, 'icon$S$S$Z',  function (_codebase, _gifFile, _verbose) {
if (_gifFile == null ) {
return null;
}var icon=C$.cacheImages.get$O(_gifFile);
if (icon != null ) {
return icon;
}if (_codebase != null ) {
if (_codebase.startsWith$S("file:")) {
_codebase="file:///" + _codebase.substring$I(6);
}if (!_codebase.endsWith$S("/")) {
_codebase+="/";
}}var index=_gifFile.indexOf$I("+");
if (index >= 0) {
icon=C$.iconJar$S$S$S$Z(_codebase, _gifFile.substring$I$I(0, index), _gifFile.substring$I(index + 1), _verbose);
} else if (_codebase == null ) {
var file=Clazz.new_($I$(3,1).c$$S,[_gifFile]);
if (file.exists$()) {
icon=Clazz.new_($I$(8,1).c$$S,[_gifFile]);
}if (icon == null ) {
var resIcon=$I$(5).getImageIcon$S(_gifFile);
if (Clazz.instanceOf(resIcon, "javax.swing.ImageIcon")) {
icon=resIcon;
} else if (Clazz.instanceOf(resIcon, "org.opensourcephysics.display.ResizableIcon")) {
icon=(resIcon).getBaseIcon$();
}}} else {
try {
var url=Clazz.new_($I$(4,1).c$$S,[_codebase + _gifFile]);
icon=Clazz.new_($I$(8,1).c$$java_net_URL,[url]);
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
if (_verbose) {
exc.printStackTrace$();
}icon=null;
} else {
throw exc;
}
}
}if ((icon == null ) || (icon.getIconHeight$() <= 0) ) {
if (_verbose) {
System.out.println$S("Unable to load image " + _gifFile);
}} else {
C$.cacheImages.put$O$O(_gifFile, icon);
}return icon;
}, 1);

Clazz.newMeth(C$, 'iconJar$S$S$S$Z',  function (_codebase, _jarFile, _gifFile, _verbose) {
if ((_gifFile == null ) || (_jarFile == null ) ) {
return null;
}var icon=null;
var inputStream=null;
var jis=null;
try {
if (_codebase == null ) {
inputStream=Clazz.new_($I$(6,1).c$$S,[_jarFile]);
jis=Clazz.new_($I$(7,1).c$$java_io_InputStream,[inputStream]);
} else {
var url=Clazz.new_($I$(4,1).c$$S,[_codebase + _jarFile]);
inputStream=$I$(5).openStream$java_net_URL(url);
jis=Clazz.new_($I$(7,1).c$$java_io_InputStream,[inputStream]);
}var done=false;
var b=null;
while (!done){
var je=jis.getNextJarEntry$();
if (je == null ) {
break;
}if (je.isDirectory$()) {
continue;
}if (je.getName$().equals$O(_gifFile)) {
var size=Long.$ival(je.getSize$());
var rb=0;
var chunk=0;
while (chunk >= 0){
chunk=jis.read$BA$I$I(C$.enormous, rb, 255);
if (chunk == -1) {
break;
}rb+=chunk;
}
size=rb;
b=Clazz.array(Byte.TYPE, [size]);
System.arraycopy$O$I$O$I$I(C$.enormous, 0, b, 0, size);
done=true;
}}
icon=Clazz.new_($I$(8,1).c$$BA,[b]);
jis.close$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
if (_verbose) {
exc.printStackTrace$();
}icon=null;
} else {
throw exc;
}
}
return icon;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.cacheImages=Clazz.new_($I$(1,1));
C$.enormous=Clazz.array(Byte.TYPE, [100000]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
