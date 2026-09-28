(function(){var P$=Clazz.newPackage("demoJS"),I$=[[0,'org.opensourcephysics.display.OSPRuntime','java.io.File','javax.swing.JOptionPane','java.io.FileOutputStream','org.opensourcephysics.controls.OSPLog','java.nio.charset.Charset','java.io.OutputStreamWriter','java.io.BufferedWriter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SaveTXTFile");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentLocation=null;
},1);

C$.$fields$=[['O',['currentLocation','java.io.File']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);

currentLocation = window.location.pathname.split('/').slice(0, -1).join('/')
var str="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n";
this.saveTXT$S(str);
System.out.println$S("TXT Saved");
}, 1);

Clazz.newMeth(C$, 'saveTXT$S',  function (str) {
var ext=".txt";
var chooser=$I$(1).getChooser$();
var oldTitle=chooser.getDialogTitle$();
chooser.setDialogTitle$S("Save TXT File");
chooser.setCurrentDirectory$java_io_File(this.currentLocation);
var result=-1;
try {
result=chooser.showSaveDialog$java_awt_Component(null);
} catch (e) {
e.printStackTrace$();
}
chooser.setDialogTitle$S(oldTitle);
if (result == 0) {
var file=chooser.getSelectedFile$();
$I$(1).chooserDir=chooser.getCurrentDirectory$().toString();
var fileName=file.getAbsolutePath$();
if ((fileName == null ) || fileName.trim$().equals$O("") ) {
return;
}var i=fileName.toLowerCase$().lastIndexOf$S(ext);
if (i != fileName.length$() - 4) {
fileName+=ext;
file=Clazz.new_($I$(2,1).c$$S,[fileName]);
}if (false &&file.exists$()) {
var selected=$I$(3,"showConfirmDialog$java_awt_Component$O$S$I",[null, "Replace existing " + file.getName$() + "?" , "Replace File", 1]);
if (selected != 0) {
return;
}}var stream=null;
try {
stream=Clazz.new_($I$(4,1).c$$java_io_File,[file]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.FileNotFoundException")){
$I$(5,"info$S",[ex.getMessage$()]);
return;
} else {
throw ex;
}
}
var charset=$I$(6).forName$S("UTF-8");
var out=Clazz.new_($I$(7,1).c$$java_io_OutputStream$java_nio_charset_Charset,[stream, charset]);
try {
var output=Clazz.new_($I$(8,1).c$$java_io_Writer,[out]);
output.write$S(str);
output.flush$();
output.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
$I$(5,"info$S",[ex.getMessage$()]);
} else {
throw ex;
}
}
}});

Clazz.newMeth(C$, 'main$SA',  function (args) {
Clazz.new_(C$);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
