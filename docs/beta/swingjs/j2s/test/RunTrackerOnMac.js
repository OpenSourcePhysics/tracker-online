(function(){var P$=Clazz.newPackage("test"),I$=[[0,'java.io.File','ProcessBuilder','java.io.BufferedReader','java.io.InputStreamReader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RunTrackerOnMac");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
try {
var scriptPath=Clazz.getClass(C$).getResource$S("run_tracker.sh").getPath$();
var scriptFile=Clazz.new_($I$(1,1).c$$S,[scriptPath]);
scriptFile.setExecutable$Z(true);
var processBuilder=Clazz.new_([Clazz.array(String, -1, ["/bin/bash", scriptPath])],$I$(2,1).c$$SA);
processBuilder.redirectErrorStream$Z(true);
var process=processBuilder.start$();
var reader=Clazz.new_([Clazz.new_([process.getInputStream$()],$I$(4,1).c$$java_io_InputStream)],$I$(3,1).c$$java_io_Reader);
var line;
while ((line=reader.readLine$()) != null ){
System.out.println$S(line);
}
var exitCode=process.waitFor$();
System.out.println$S("Script exited with code: " + exitCode);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
