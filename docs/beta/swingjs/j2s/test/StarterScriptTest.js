(function(){var P$=Clazz.newPackage("test"),I$=[[0,'ProcessBuilder','java.io.BufferedReader','java.io.InputStreamReader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StarterScriptTest");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
var script="APP_DIR=\'/Applications/Tracker.app/Contents/app\'; JAR_FILE=\'tracker_starter.jar\'; JAVA_CMD=\'/usr/bin/java\'; if [[ ! -f \"$APP_DIR/$JAR_FILE\" ]]; then   echo \'Error: The JAR file \'$APP_DIR/$JAR_FILE\' was not found.\';   exit 1; fi; echo \'Attempting to run $JAR_FILE...\'; \"$JAVA_CMD\" -jar \"$APP_DIR/$JAR_FILE\"";
var pb=Clazz.new_([Clazz.array(String, -1, ["bash", "-c", script])],$I$(1,1).c$$SA);
pb.redirectErrorStream$Z(true);
try {
var process=pb.start$();
try {
var reader=Clazz.new_([Clazz.new_([process.getInputStream$()],$I$(3,1).c$$java_io_InputStream)],$I$(2,1).c$$java_io_Reader);
try {
var line;
while ((line=reader.readLine$()) != null ){
System.out.println$S(line);
}

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
