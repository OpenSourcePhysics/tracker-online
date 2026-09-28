(function(){var P$=Clazz.newPackage("org.opensourcephysics.davidson.applets"),p$1={},I$=[[0,'java.util.ArrayList','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.display.OSPRuntime','java.awt.Frame','org.opensourcephysics.display.GUIUtils','org.opensourcephysics.display.Renderable','org.opensourcephysics.display.TextFrame']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FrameApplet", null, 'javax.swing.JApplet', 'org.opensourcephysics.display.Renderable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.mainFrame=null;
this.newFrames=Clazz.new_($I$(1,1));
this.existingFrames=Clazz.new_($I$(1,1));
this.args=null;
this.singleFrame=false;
},1);

C$.$fields$=[['Z',['singleFrame'],'S',['targetClassName','contentName'],'O',['mainFrame','javax.swing.JFrame','newFrames','java.util.ArrayList','+existingFrames','args','String[]','renderPanel','org.opensourcephysics.display.Renderable']]]

Clazz.newMeth(C$, ['getParameter$S$S','getParameter'],  function (key, def) {
return ((this.getParameter$S(key) != null ) ? this.getParameter$S(key) : def);
});

Clazz.newMeth(C$, ['init$','init'],  function () {
C$.superclazz.prototype.init$.apply(this, []);
if (this.getParameter$S$S("showLog", "false").toLowerCase$().trim$().equals$O("true")) {
$I$(2).showLog$();
}$I$(3).setApplet$javax_swing_JApplet(this);
$I$(3).appletMode=true;
var xmldata=this.getParameter$S$S("xmldata", null);
if (xmldata != null ) {
this.args=Clazz.array(String, [1]);
this.args[0]=xmldata;
}this.targetClassName=this.getParameter$S$S("target", null);
if (this.targetClassName == null ) {
this.targetClassName=this.getParameter$S$S("app", null);
}this.contentName=this.getParameter$S$S("content", null);
this.singleFrame=this.getParameter$S$S("singleframe", "false").trim$().equalsIgnoreCase$S("true");
});

Clazz.newMeth(C$, ['start$','start'],  function () {
if (this.mainFrame != null ) {
return;
}p$1.createTarget.apply(this, []);
if (this.contentName != null ) {
var frame=$I$(4).getFrames$();
for (var i=0, n=frame.length; i < n; i++) {
if ((Clazz.instanceOf(frame[i], "javax.swing.JFrame")) && frame[i].getName$().equalsIgnoreCase$S(this.contentName) ) {
this.mainFrame=frame[i];
break;
}}
}if (this.mainFrame == null ) {
System.out.println$S("Main frame not found.");
return;
}p$1.removeWindowListeners$java_awt_Window.apply(this, [this.mainFrame]);
this.mainFrame.setVisible$Z(false);
var content=this.mainFrame.getContentPane$();
if ((Clazz.instanceOf(this.mainFrame, "org.opensourcephysics.display.OSPFrame")) && (this.mainFrame).isAnimated$() ) {
this.renderPanel=$I$(5,"findInstance$java_awt_Container$Class",[content, Clazz.getClass($I$(6),['render$','render$java_awt_image_BufferedImage'])]);
}if (Clazz.instanceOf(this.mainFrame, "org.opensourcephysics.display.OSPFrame")) {
(this.mainFrame).setKeepHidden$Z(true);
} else {
this.mainFrame.dispose$();
}this.getRootPane$().setContentPane$java_awt_Container(content);
this.getRootPane$().requestFocus$();
if (!this.singleFrame) {
$I$(3).appletMode=false;
for (var i=0, n=this.newFrames.size$(); i < n; i++) {
if ((Clazz.instanceOf(this.newFrames.get$I(i), "org.opensourcephysics.display.OSPFrame")) && (this.newFrames.get$I(i) !== this.mainFrame ) ) {
(this.newFrames.get$I(i)).setKeepHidden$Z(false);
}}
$I$(5).showDrawingAndTableFrames$();
}});

Clazz.newMeth(C$, 'removeWindowListeners$java_awt_Window',  function (frame) {
var wl=frame.getWindowListeners$();
for (var i=0, n=wl.length; i < n; i++) {
this.mainFrame.removeWindowListener$java_awt_event_WindowListener(wl[i]);
}
}, p$1);

Clazz.newMeth(C$, ['render$','render'],  function () {
if (this.renderPanel != null ) {
return this.renderPanel.render$();
}return null;
});

Clazz.newMeth(C$, ['render$java_awt_image_BufferedImage','render'],  function (image) {
if (this.renderPanel != null ) {
this.renderPanel.render$java_awt_image_BufferedImage(image);
}return image;
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
this.mainFrame=null;
C$.superclazz.prototype.destroy$.apply(this, []);
});

Clazz.newMeth(C$, 'createTarget',  function () {
var type=null;
var classLoader=this.getClass$().getClassLoader$();
try {
type=classLoader.loadClass$S(this.targetClassName);
} catch (ex1) {
if (Clazz.exceptionOf(ex1,"ClassNotFoundException")){
System.err.println$S("Class not found: " + this.targetClassName);
return null;
} else {
throw ex1;
}
}
if (!C$.isLaunchable$Class(type)) {
System.err.println$S("Main method not found in " + this.targetClassName);
return null;
}var frame=$I$(4).getFrames$();
this.existingFrames.clear$();
for (var i=0, n=frame.length; i < n; i++) {
this.existingFrames.add$O(frame[i]);
}
var htmldata=this.getParameter$S$S("htmldata", null);
if (htmldata != null ) {
var htmlframe=Clazz.new_($I$(7,1).c$$S$Class,[htmldata, type]);
htmlframe.setVisible$Z(true);
}try {
var m=type.getMethod$S$ClassA("main", Clazz.array(Class, -1, [Clazz.array(String, -1)]));
m.invoke$O$OA(type, Clazz.array(java.lang.Object, -1, [this.args]));
frame=$I$(4).getFrames$();
for (var i=0, n=frame.length; i < n; i++) {
if ((this.mainFrame == null ) && (Clazz.instanceOf(frame[i], "org.opensourcephysics.controls.MainFrame")) ) {
this.mainFrame=(frame[i]).getMainFrame$();
}}
for (var i=0, n=frame.length; i < n; i++) {
if ((Clazz.instanceOf(frame[i], "javax.swing.JFrame")) && (frame[i]).getDefaultCloseOperation$() == 3 ) {
(frame[i]).setDefaultCloseOperation$I(1);
if (this.mainFrame == null ) {
this.mainFrame=frame[i];
}}if (!this.existingFrames.contains$O(frame[i])) {
this.newFrames.add$O(frame[i]);
}}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NoSuchMethodException")){
var ex = e$$;
{
System.err.println$O(ex);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var ex = e$$;
{
System.err.println$O(ex);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var ex = e$$;
{
System.err.println$O(ex);
}
} else {
throw e$$;
}
}
if ((this.newFrames.size$() > 0) && (this.mainFrame == null ) && (Clazz.instanceOf(this.newFrames.get$I(0), "javax.swing.JFrame"))  ) {
this.mainFrame=this.newFrames.get$I(0);
}return type;
}, p$1);

Clazz.newMeth(C$, 'disposeOwnedFrames',  function () {
var frame=$I$(4).getFrames$();
for (var i=0, n=frame.length; i < n; i++) {
if ((Clazz.instanceOf(frame[i], "javax.swing.JFrame")) && (frame[i]).getDefaultCloseOperation$() == 3 ) {
(frame[i]).setDefaultCloseOperation$I(2);
}if (!this.existingFrames.contains$O(frame[i])) {
frame[i].setVisible$Z(false);
p$1.removeWindowListeners$java_awt_Window.apply(this, [frame[i]]);
frame[i].dispose$();
}}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
