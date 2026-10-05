(function(){var P$=Clazz.newPackage("test"),I$=[[0,'ProcessBuilder','StringBuilder','java.io.BufferedReader','java.io.InputStreamReader','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ShellScriptTest");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'executeCommand$S',  function (command) {
var processBuilder=Clazz.new_([Clazz.array(String, -1, [])],$I$(1,1).c$$SA);
processBuilder.command$SA(Clazz.array(String, -1, ["/bin/sh", "-c", command]));
var process=processBuilder.start$();
var output=Clazz.new_($I$(2,1));
var reader=Clazz.new_([Clazz.new_([process.getInputStream$()],$I$(4,1).c$$java_io_InputStream)],$I$(3,1).c$$java_io_Reader);
var line;
while ((line=reader.readLine$()) != null ){
output.append$S(line).append$S("\n");
}
var exitCode=process.waitFor$();
var errorReader=Clazz.new_([Clazz.new_([process.getErrorStream$()],$I$(4,1).c$$java_io_InputStream)],$I$(3,1).c$$java_io_Reader);
var errorOutput=Clazz.new_($I$(2,1));
while ((line=errorReader.readLine$()) != null ){
errorOutput.append$S(line).append$S("\n");
}
if (exitCode != 0) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Command failed with exit code " + exitCode + "\nError: " + errorOutput.toString() ]);
}return output.toString();
}, 1);

Clazz.newMeth(C$, 'executeCommands$SA',  function (commands) {
var results=Clazz.new_($I$(5,1));
for (var command, $command = 0, $$command = commands; $command<$$command.length&&((command=($$command[$command])),1);$command++) {
try {
System.out.println$S("Executing: " + command);
var result=C$.executeCommand$S(command);
results.add$O(result);
System.out.println$S("Output: " + result);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"InterruptedException")){
System.err.println$S("Error executing command: " + command);
System.err.println$S("Error: " + e.getMessage$());
results.add$O("ERROR: " + e.getMessage$());
} else {
throw e;
}
}
}
return results;
}, 1);

Clazz.newMeth(C$, 'executeShellScript$S',  function (scriptPath) {
var processBuilder=Clazz.new_([Clazz.array(String, -1, [])],$I$(1,1).c$$SA);
processBuilder.command$SA(Clazz.array(String, -1, ["/bin/sh", scriptPath]));
var process=processBuilder.start$();
var output=Clazz.new_($I$(2,1));
var reader=Clazz.new_([Clazz.new_([process.getInputStream$()],$I$(4,1).c$$java_io_InputStream)],$I$(3,1).c$$java_io_Reader);
var line;
while ((line=reader.readLine$()) != null ){
output.append$S(line).append$S("\n");
}
var exitCode=process.waitFor$();
if (exitCode != 0) {
var errorReader=Clazz.new_([Clazz.new_([process.getErrorStream$()],$I$(4,1).c$$java_io_InputStream)],$I$(3,1).c$$java_io_Reader);
var errorOutput=Clazz.new_($I$(2,1));
while ((line=errorReader.readLine$()) != null ){
errorOutput.append$S(line).append$S("\n");
}
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Script failed with exit code " + exitCode + "\nError: " + errorOutput.toString() ]);
}return output.toString();
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
System.out.println$S("=== Shell Command Executor for Mac ===\n");
var commands=Clazz.array(String, -1, ["echo \'Hello from shell\'", "pwd", "date", "ls -la /tmp | head -5", "whoami"]);
System.out.println$S("Example 1: Executing sequence of commands");
System.out.println$S("==========================================");
var results=C$.executeCommands$SA(commands);
System.out.println$S("\nExample 2: Complex command with pipe");
System.out.println$S("======================================");
try {
var result=C$.executeCommand$S("ps aux | grep java | head -3");
System.out.println$S("Java processes:\n" + result);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"InterruptedException")){
System.err.println$S("Error: " + e.getMessage$());
} else {
throw e;
}
}
System.out.println$S("\nExample 3: Multiple commands in one session");
System.out.println$S("============================================");
try {
var multiCommand="cd /tmp && pwd && ls -l | head -3";
var result=C$.executeCommand$S(multiCommand);
System.out.println$S("Result:\n" + result);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"InterruptedException")){
System.err.println$S("Error: " + e.getMessage$());
} else {
throw e;
}
}
System.out.println$S("\nExample 4: Execute shell script file");
System.out.println$S("=====================================");
System.out.println$S("To execute a script file, use:");
System.out.println$S("  executeShellScript(\"/path/to/script.sh\")");
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
