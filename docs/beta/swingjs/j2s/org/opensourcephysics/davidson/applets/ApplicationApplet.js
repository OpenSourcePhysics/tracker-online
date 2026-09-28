(function(){var P$=Clazz.newPackage("org.opensourcephysics.davidson.applets"),p$1={},I$=[[0,'org.opensourcephysics.display.OSPRuntime','java.awt.Frame','org.opensourcephysics.controls.OSPLog','javax.swing.JButton','java.util.ArrayList',['org.opensourcephysics.davidson.applets.ApplicationApplet','.DisplayBtnListener'],'org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.tools.Resource','org.opensourcephysics.display.TextFrame']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ApplicationApplet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JApplet');
C$.$classes$=[['DisplayBtnListener',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.mainFrame=null;
this.showFramesButton=Clazz.new_($I$(4,1).c$$S,["Show"]);
this.newFrames=Clazz.new_($I$(5,1));
this.existingFrames=Clazz.new_($I$(5,1));
this.args=null;
this.singleApp=false;
this.targetError=null;
},1);

C$.$fields$=[['Z',['singleApp'],'S',['targetClassName','targetError'],'O',['mainFrame','javax.swing.JFrame','showFramesButton','javax.swing.JButton','newFrames','java.util.ArrayList','+existingFrames','target','Class','args','String[]']]]

Clazz.newMeth(C$, ['getParameter$S$S','getParameter'],  function (key, def) {
return ((this.getParameter$S(key) != null ) ? this.getParameter$S(key) : def);
});

Clazz.newMeth(C$, ['init$','init'],  function () {
C$.superclazz.prototype.init$.apply(this, []);
$I$(1).setApplet$javax_swing_JApplet(this);
$I$(1).appletMode=false;
if (this.getParameter$S$S("showLog", "false").toLowerCase$().trim$().equals$O("true")) {
$I$(3).showLog$();
}var arg0=this.getParameter$S$S("xmldata", null);
arg0=this.getParameter$S$S("args[0]", arg0);
if (arg0 != null ) {
this.args=Clazz.array(String, [1]);
}var arg1=this.getParameter$S$S("args[1]", null);
var arg2=this.getParameter$S$S("args[2]", null);
if (arg2 != null ) {
this.args=Clazz.array(String, [3]);
this.args[0]=arg0;
this.args[1]=arg1;
this.args[2]=arg2;
} else if (arg1 != null ) {
this.args=Clazz.array(String, [2]);
this.args[0]=arg0;
this.args[1]=arg1;
} else if (arg0 != null ) {
this.args=Clazz.array(String, [1]);
this.args[0]=arg0;
}this.targetClassName=this.getParameter$S$S("target", null);
if (this.targetClassName == null ) {
this.targetClassName=this.getParameter$S$S("app", null);
}if (this.targetClassName == null ) {
p$1.readManifest.apply(this, []);
}var title=this.getParameter$S$S("title", null);
this.singleApp=this.getParameter$S$S("singleapp", "false").trim$().equalsIgnoreCase$S("true");
if (title == null ) {
var s=this.targetClassName.split$S("[.]");
this.showFramesButton.setText$S(s[s.length - 1]);
} else {
this.showFramesButton.setText$S(title);
}this.getRootPane$().getContentPane$().add$java_awt_Component$O(this.showFramesButton, "Center");
this.showFramesButton.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(6,1),[this, null]));
});

Clazz.newMeth(C$, 'isLaunchable$Class',  function (type) {
if (type == null ) {
return false;
}try {
type.getMethod$S$ClassA("main", Clazz.array(Class, -1, [Clazz.array(String, -1)]));
return true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NoSuchMethodException")){
return false;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, ['destroy$','destroy'],  function () {
p$1.disposeOwnedFrames.apply(this, []);
this.target=null;
this.mainFrame=null;
C$.superclazz.prototype.destroy$.apply(this, []);
});

Clazz.newMeth(C$, 'readManifest',  function () {
var archive=this.getParameter$S$S("archive", null);
archive=archive.split$S(";")[0];
$I$(3,"finer$S",["archive applet tag=" + archive]);
if (archive == null ) {
return;
}var name="META-INF/MANIFEST.MF";
var manifest=$I$(7,"getText$S$S$Class$Z",[archive, name, Clazz.getClass($I$(8)), true]);
if (manifest == null ) {
$I$(3,"fine$S",["manifest not found in=" + archive]);
return;
}var lines=manifest.split$S("\n");
for (var i=0, n=Math.min(10, lines.length); i < n; i++) {
var index=lines[i].indexOf$S("Main-Class:");
if (index >= 0) {
this.targetClassName=lines[i].substring$I("Main-Class:".length$() + index).trim$();
$I$(3,"fine$S",["target class in manifest=" + this.targetClassName]);
return;
}}
}, p$1);

Clazz.newMeth(C$, 'createTarget',  function () {
var type=null;
this.targetError=null;
var classLoader=this.getClass$().getClassLoader$();
try {
type=classLoader.loadClass$S(this.targetClassName);
} catch (ex1) {
if (Clazz.exceptionOf(ex1,"ClassNotFoundException")){
System.err.println$S("Class not found: " + this.targetClassName);
this.targetError="Class not found: " + this.targetClassName;
return null;
} else {
throw ex1;
}
}
if (!C$.isLaunchable$Class(type)) {
System.err.println$S("Main method not found in " + this.targetClassName);
this.targetError="Main method not found in " + this.targetClassName;
return null;
}var frames=$I$(2).getFrames$();
this.existingFrames.clear$();
for (var i=0, n=frames.length; i < n; i++) {
this.existingFrames.add$O(frames[i]);
}
var htmldata=this.getParameter$S$S("htmldata", null);
if (htmldata != null ) {
var htmlframe=Clazz.new_($I$(9,1).c$$S$Class,[htmldata, type]);
htmlframe.setVisible$Z(true);
}try {
var m=type.getMethod$S$ClassA("main", Clazz.array(Class, -1, [Clazz.array(String, -1)]));
m.invoke$O$OA(type, Clazz.array(java.lang.Object, -1, [this.args]));
frames=$I$(2).getFrames$();
for (var i=0, n=frames.length; i < n; i++) {
if (Clazz.instanceOf(frames[i], "org.opensourcephysics.controls.MainFrame")) {
this.mainFrame=frames[i];
}if ((Clazz.instanceOf(frames[i], "javax.swing.JFrame")) && (frames[i]).getDefaultCloseOperation$() == 3 ) {
(frames[i]).setDefaultCloseOperation$I(1);
if (this.mainFrame == null ) {
this.mainFrame=frames[i];
}}if (!this.existingFrames.contains$O(frames[i])) {
this.newFrames.add$O(frames[i]);
}}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NoSuchMethodException")){
var ex = e$$;
{
System.err.println$O(ex);
this.targetError=ex.toString();
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var ex = e$$;
{
System.err.println$O(ex);
System.err.println$O(ex.getStackTrace$());
this.targetError=ex.toString();
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var ex = e$$;
{
System.err.println$O(ex);
this.targetError=ex.toString();
}
} else {
throw e$$;
}
}
return type;
}, p$1);

Clazz.newMeth(C$, 'disposeOwnedFrames',  function () {
var frame=$I$(2).getFrames$();
for (var i=0, n=frame.length; i < n; i++) {
if (frame[i].getClass$().getName$().startsWith$S("sun.plugin")) {
continue;
}if ((Clazz.instanceOf(frame[i], "javax.swing.JFrame")) && (frame[i]).getDefaultCloseOperation$() == 3 ) {
(frame[i]).setDefaultCloseOperation$I(2);
}if (!this.existingFrames.contains$O(frame[i])) {
frame[i].setVisible$Z(false);
frame[i].dispose$();
}}
this.newFrames.clear$();
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ApplicationApplet, "DisplayBtnListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet'].singleApp && ($I$(1).applet !== this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet'] ) ) {
p$1.disposeOwnedFrames.apply(this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet'], []);
this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet'].target=null;
this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet'].mainFrame=null;
$I$(1).setApplet$javax_swing_JApplet(this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet']);
}if (this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet'].target == null ) {
this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet'].target=p$1.createTarget.apply(this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet'], []);
if (this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet'].targetError != null ) {
this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet'].target=null;
}return;
}var frames=$I$(2).getFrames$();
for (var i=0, n=frames.length; i < n; i++) {
if (!frames[i].isDisplayable$()) {
this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet'].existingFrames.remove$O(frames[i]);
this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet'].newFrames.remove$O(frames[i]);
} else if (!this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet'].existingFrames.contains$O(frames[i])) {
this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet'].newFrames.add$O(frames[i]);
}if ((Clazz.instanceOf(frames[i], "org.opensourcephysics.controls.MainFrame")) && frames[i].isDisplayable$() ) {
this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet'].mainFrame=frames[i];
}}
var it=this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet'].newFrames.iterator$();
while (it.hasNext$()){
var frame=(it.next$());
if (frame.isDisplayable$() && frame !== $I$(3).getFrame$()   && !(Clazz.instanceOf(frame, "org.opensourcephysics.controls.MessageFrame"))  && !(Clazz.instanceOf(frame, "org.opensourcephysics.tools.Translator")) ) {
frame.setVisible$Z(true);
}}
if (this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet'].mainFrame != null ) {
this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet'].mainFrame.setState$I(0);
this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet'].mainFrame.setVisible$Z(true);
this.b$['org.opensourcephysics.davidson.applets.ApplicationApplet'].mainFrame.toFront$();
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
