(function(){var P$=Clazz.newPackage("org.opensourcephysics.desktop.ostermiller"),I$=[[0,'java.util.Vector','Runtime','java.io.File','java.net.URLClassLoader','java.net.URL','StringBuffer','java.text.MessageFormat','org.opensourcephysics.desktop.ostermiller.BrowserCommandLexer','java.io.StringReader','Thread','java.io.PrintWriter','java.io.FileWriter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Browser");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['exec','String[]']]]

Clazz.newMeth(C$, 'init$',  function () {
C$.exec=C$.defaultCommands$();
}, 1);

Clazz.newMeth(C$, 'defaultCommands$',  function () {
var exec=null;
if (System.getProperty$S("os.name").startsWith$S("Windows")) {
exec=Clazz.array(String, -1, ["rundll32 url.dll,FileProtocolHandler {0}"]);
} else if (System.getProperty$S("os.name").startsWith$S("Mac")) {
var browsers=Clazz.new_($I$(1,1));
try {
var p=$I$(2).getRuntime$().exec$S("which open");
if (p.waitFor$() == 0) {
browsers.add$O("open {0}");
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"InterruptedException")){
var e = e$$;
{
}
} else {
throw e$$;
}
}
if (browsers.size$() > 0) {
exec=browsers.toArray$OA(Clazz.array(String, [0]));
}} else if (System.getProperty$S("os.name").startsWith$S("SunOS")) {
exec=Clazz.array(String, -1, ["/usr/dt/bin/sdtwebclient {0}"]);
} else {
var browsers=Clazz.new_($I$(1,1));
try {
var p=$I$(2).getRuntime$().exec$S("which firebird");
if (p.waitFor$() == 0) {
browsers.add$O("firebird -remote openURL({0})");
browsers.add$O("firebird {0}");
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"InterruptedException")){
var e = e$$;
{
}
} else {
throw e$$;
}
}
try {
var p=$I$(2).getRuntime$().exec$S("which mozilla");
if (p.waitFor$() == 0) {
browsers.add$O("mozilla -remote openURL({0})");
browsers.add$O("mozilla {0}");
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"InterruptedException")){
var e = e$$;
{
}
} else {
throw e$$;
}
}
try {
var p=$I$(2).getRuntime$().exec$S("which opera");
if (p.waitFor$() == 0) {
browsers.add$O("opera -remote openURL({0})");
browsers.add$O("opera {0}");
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"InterruptedException")){
var e = e$$;
{
}
} else {
throw e$$;
}
}
try {
var p=$I$(2).getRuntime$().exec$S("which galeon");
if (p.waitFor$() == 0) {
browsers.add$O("galeon {0}");
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"InterruptedException")){
var e = e$$;
{
}
} else {
throw e$$;
}
}
try {
var p=$I$(2).getRuntime$().exec$S("which konqueror");
if (p.waitFor$() == 0) {
browsers.add$O("konqueror {0}");
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"InterruptedException")){
var e = e$$;
{
}
} else {
throw e$$;
}
}
try {
var p=$I$(2).getRuntime$().exec$S("which netscape");
if (p.waitFor$() == 0) {
browsers.add$O("netscape -remote openURL({0})");
browsers.add$O("netscape {0}");
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"InterruptedException")){
var e = e$$;
{
}
} else {
throw e$$;
}
}
try {
var p=$I$(2).getRuntime$().exec$S("which xterm");
if (p.waitFor$() == 0) {
p=$I$(2).getRuntime$().exec$S("which lynx");
if (p.waitFor$() == 0) {
browsers.add$O("xterm -e lynx {0}");
}}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"InterruptedException")){
var e = e$$;
{
}
} else {
throw e$$;
}
}
if (browsers.size$() > 0) {
exec=browsers.toArray$OA(Clazz.array(String, [0]));
}}return exec;
}, 1);

Clazz.newMeth(C$, 'displayURL$S',  function (url) {
if ((C$.exec == null ) || (C$.exec.length == 0) ) {
if (System.getProperty$S("os.name").startsWith$S("Mac")) {
var success=false;
try {
var nSWorkspace;
if (Clazz.new_($I$(3,1).c$$S,["/System/Library/Java/com/apple/cocoa/application/NSWorkspace.class"]).exists$()) {
var classLoader=Clazz.new_([Clazz.array($I$(5), -1, [Clazz.new_($I$(3,1).c$$S,["/System/Library/Java"]).toURI$().toURL$()])],$I$(4,1).c$$java_net_URLA);
nSWorkspace=Clazz.forName("com.apple.cocoa.application.NSWorkspace", true, classLoader);
} else {
nSWorkspace=Clazz.forName("com.apple.cocoa.application.NSWorkspace");
}var sharedWorkspace=nSWorkspace.getMethod$S$ClassA("sharedWorkspace", Clazz.array(Class, -1, []));
var workspace=sharedWorkspace.invoke$O$OA(null, Clazz.array(java.lang.Object, -1, []));
var openURL=nSWorkspace.getMethod$S$ClassA("openURL", Clazz.array(Class, -1, [Clazz.forName("java.net.URL")]));
success=(openURL.invoke$O$OA(workspace, Clazz.array(java.lang.Object, -1, [Clazz.new_($I$(5,1).c$$S,[url])]))).booleanValue$();
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
} else {
throw x;
}
}
if (!success) {
try {
var mrjFileUtils=Clazz.forName("com.apple.mrj.MRJFileUtils");
var openURL=mrjFileUtils.getMethod$S$ClassA("openURL", Clazz.array(Class, -1, [Clazz.forName("java.lang.String")]));
openURL.invoke$O$OA(null, Clazz.array(java.lang.Object, -1, [url]));
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
System.err.println$S(x.getMessage$());
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Browser launch failed."]);
} else {
throw x;
}
}
}} else {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Browser execute command not defined."]);
}} else {
Clazz.new_($I$(5,1).c$$S,[url]);
var sb=Clazz.new_([url.length$()],$I$(6,1).c$$I);
for (var i=0; i < url.length$(); i++) {
var c=url.charAt$I(i);
if (((c >= "a") && (c <= "z") ) || ((c >= "A") && (c <= "Z") ) || ((c >= "0") && (c <= "9") ) || (c == ".") || (c == ":") || (c == "&") || (c == "@") || (c == "/") || (c == "?") || (c == "%") || (c == "+") || (c == "=") || (c == "#") || (c == "-") || (c == "\\")  ) {
sb.append$C(c);
} else {
c=String.fromCharCode((c.$c() & 255));
if (c.$c() < 16 ) {
sb.append$S("%0" + Integer.toHexString$I(c.$c()));
} else {
sb.append$S("%" + Integer.toHexString$I(c.$c()));
}}}
var messageArray=Clazz.array(String, [1]);
messageArray[0]=sb.toString();
var command=null;
var found=false;
try {
for (var i=0; (i < C$.exec.length) && !found ; i++) {
try {
command=$I$(7).format$S$OA(C$.exec[i], messageArray);
var argsVector=Clazz.new_($I$(1,1));
var lex=Clazz.new_([Clazz.new_($I$(9,1).c$$S,[command])],$I$(8,1).c$$java_io_Reader);
var t;
while ((t=lex.getNextToken$()) != null ){
argsVector.add$O(t);
}
var args=Clazz.array(String, [argsVector.size$()]);
args=argsVector.toArray$OA(args);
if (args[0].equals$O("rundll32") && args[1].equals$O("url.dll,FileProtocolHandler") ) {
if (args[2].startsWith$S("file:/")) {
if (args[2].charAt$I(6) != "/") {
args[2]="file://" + args[2].substring$I(6);
}if (args[2].charAt$I(7) != "/") {
args[2]="file:///" + args[2].substring$I(7);
}} else if (args[2].toLowerCase$().endsWith$S("html") || args[2].toLowerCase$().endsWith$S("htm") ) {
}}var p=$I$(2).getRuntime$().exec$SA(args);
for (var j=0; j < 2; j++) {
try {
$I$(10).sleep$J(1000);
} catch (inte) {
if (Clazz.exceptionOf(inte,"InterruptedException")){
} else {
throw inte;
}
}
}
if (p.exitValue$() == 0) {
found=true;
}} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
System.err.println$S("Warning: " + x.getMessage$());
} else {
throw x;
}
}
}
if (!found) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Browser launch failed."]);
}} catch (e) {
if (Clazz.exceptionOf(e,"IllegalThreadStateException")){
} else {
throw e;
}
}
}}, 1);

Clazz.newMeth(C$, 'displayURLs$SA',  function (urls) {
if ((urls == null ) || (urls.length == 0) ) {
return;
}if (urls.length == 1) {
C$.displayURL$S(urls[0]);
return;
}var shortcut=$I$(3).createTempFile$S$S("DisplayURLs", ".html");
shortcut=shortcut.getCanonicalFile$();
shortcut.deleteOnExit$();
var out=Clazz.new_([Clazz.new_($I$(12,1).c$$java_io_File,[shortcut])],$I$(11,1).c$$java_io_Writer);
out.println$S("<!-- saved from url=(0014)about:internet -->");
out.println$S("<html>");
out.println$S("<head>");
out.println$S("<title> Open URLs </title>");
out.println$S("<script language=\"javascript\" type=\"text/javascript\">");
out.println$S("function displayURLs(){");
for (var i=1; i < urls.length; i++) {
out.println$S("window.open(\"" + urls[i] + "\", \"_blank\", \"toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes\");" );
}
out.println$S("location.href=\"" + urls[0] + "\";" );
out.println$S("}");
out.println$S("</script>");
out.println$S("</head>");
out.println$S("<body onload=\"javascript:displayURLs()\">");
out.println$S("<noscript>");
for (var i=0; i < urls.length; i++) {
out.println$S("<a target=\"_blank\" href=\"" + urls[i] + "\">" + urls[i] + "</a><br>" );
}
out.println$S("</noscript>");
out.println$S("</body>");
out.println$S("</html>");
out.close$();
C$.displayURL$S(shortcut.toURI$().toURL$().toString());
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.exec=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
