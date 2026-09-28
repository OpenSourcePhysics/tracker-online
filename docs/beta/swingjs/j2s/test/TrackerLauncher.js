(function(){var P$=Clazz.newPackage("test"),I$=[[0,'javax.swing.JPasswordField','javax.swing.JOptionPane','ProcessBuilder','java.io.BufferedWriter','java.io.OutputStreamWriter','java.io.BufferedReader','java.io.InputStreamReader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrackerLauncher");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
var pf=Clazz.new_($I$(1,1));
var ok=$I$(2).showConfirmDialog$java_awt_Component$O$S$I$I(null, pf, "Enter Sudo Password", 2, 3);
if (ok == 0) {
var password= String.instantialize(pf.getPassword$());
C$.runScriptWithPassword$S(password);
} else {
System.out.println$S("Operation cancelled by user.");
}}, 1);

Clazz.newMeth(C$, 'runScriptWithPassword$S',  function (password) {
var appDir="/Applications/Tracker.app/Contents/app";
var jarFile="tracker_starter.jar";
var javaCmd="/usr/bin/java";
var pb=Clazz.new_([Clazz.array(String, -1, ["sudo", "-S", javaCmd, "-jar", appDir + "/" + jarFile ])],$I$(3,1).c$$SA);
pb.redirectErrorStream$Z(true);
try {
var process=pb.start$();
try {
var os=process.getOutputStream$();
var writer=Clazz.new_([Clazz.new_($I$(5,1).c$$java_io_OutputStream,[os])],$I$(4,1).c$$java_io_Writer);
try {
writer.write$S(password);
writer.newLine$();
writer.flush$();

}finally{/*res*/writer&&writer.close$&&writer.close$();os&&os.close$&&os.close$();}
}finally{}
try {
var reader=Clazz.new_([Clazz.new_([process.getInputStream$()],$I$(7,1).c$$java_io_InputStream)],$I$(6,1).c$$java_io_Reader);
try {
var line;
while ((line=reader.readLine$()) != null ){
if (!line.toLowerCase$().contains$CharSequence("password")) {
System.out.println$S(line);
}}

}finally{/*res*/reader&&reader.close$&&reader.close$();}
}finally{}
var exitCode=process.waitFor$();
System.out.println$S("\nProcess exited with code: " + exitCode);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"InterruptedException")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
