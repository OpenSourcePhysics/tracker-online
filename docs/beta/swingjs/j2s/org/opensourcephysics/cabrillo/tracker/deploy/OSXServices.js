(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker.deploy"),I$=[[0,'org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.cabrillo.tracker.deploy.TrackerStarter',['org.opensourcephysics.cabrillo.tracker.deploy.OSXServices','.ProxyHandler'],'java.awt.Desktop','java.lang.reflect.Proxy','java.awt.Image']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OSXServices", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ProxyHandler',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['status'],'O',['tracker','org.opensourcephysics.cabrillo.tracker.Tracker','proxy','org.opensourcephysics.cabrillo.tracker.deploy.OSXServices.ProxyHandler']]]

Clazz.newMeth(C$, 'getStatus$',  function () {
return this.status;
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
var classLoader=ClassLoader.getSystemClassLoader$();
this.proxy=Clazz.new_($I$(3,1).c$$org_opensourcephysics_cabrillo_tracker_Tracker,[null]);
this.proxy.isDesktop=true;
var success=false;
var desktop=$I$(4).getDesktop$();
try {
var openFileHandlerClass=Clazz.forName("java.awt.desktop.OpenFilesHandler", true, classLoader);
var proxyHandler=$I$(5,"newProxyInstance$ClassLoader$ClassA$java_lang_reflect_InvocationHandler",[classLoader, Clazz.array(Class, -1, [openFileHandlerClass]), this.proxy]);
var m=desktop.getClass$().getDeclaredMethod$S$ClassA("setOpenFileHandler", Clazz.array(Class, -1, [openFileHandlerClass]));
m.invoke$O$OA(desktop, Clazz.array(java.lang.Object, -1, [proxyHandler]));
var eventClass=Clazz.forName("java.awt.desktop.OpenFilesEvent", true, classLoader);
this.proxy.getFilesMethod=eventClass.getDeclaredMethod$S$ClassA("getFiles", null);
success=true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.proxy.isDesktop=false;
} else {
throw ex;
}
}
if (!success) try {
var appClass=Clazz.forName("com.apple.eawt.Application", true, classLoader);
var m=appClass.getDeclaredMethod$S$ClassA("getApplication", null);
var application=m.invoke$O$OA(null, null);
var openFileHandlerClass=Clazz.forName("com.apple.eawt.OpenFilesHandler", true, classLoader);
var proxyHandler=$I$(5,"newProxyInstance$ClassLoader$ClassA$java_lang_reflect_InvocationHandler",[classLoader, Clazz.array(Class, -1, [openFileHandlerClass]), this.proxy]);
m=application.getClass$().getDeclaredMethod$S$ClassA("setOpenFileHandler", Clazz.array(Class, -1, [openFileHandlerClass]));
m.invoke$O$OA(application, Clazz.array(java.lang.Object, -1, [proxyHandler]));
var eventClass=Clazz.forName("com.apple.eawt.AppEvent$OpenFilesEvent", true, classLoader);
this.proxy.getFilesMethod=eventClass.getMethod$S$ClassA("getFiles", null);
success=true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
this.status=success ? "TrackerStarter OSXServices running " + (this.proxy.isDesktop ? "java desktop" : "apple") : "TrackerStarter OSXServices failed both java desktop and apple";
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_Tracker',  function (app) {
;C$.$init$.apply(this);
this.tracker=app;
var classLoader=ClassLoader.getSystemClassLoader$();
this.proxy=Clazz.new_($I$(3,1).c$$org_opensourcephysics_cabrillo_tracker_Tracker,[this.tracker]);
this.proxy.isDesktop=true;
var success=false;
var desktop=$I$(4).getDesktop$();
try {
var aboutHandlerClass=Clazz.forName("java.awt.desktop.AboutHandler", true, classLoader);
var quitHandlerClass=Clazz.forName("java.awt.desktop.QuitHandler", true, classLoader);
var prefsHandlerClass=Clazz.forName("java.awt.desktop.PreferencesHandler", true, classLoader);
var proxyHandler=$I$(5,"newProxyInstance$ClassLoader$ClassA$java_lang_reflect_InvocationHandler",[classLoader, Clazz.array(Class, -1, [aboutHandlerClass, quitHandlerClass, prefsHandlerClass]), this.proxy]);
var m=desktop.getClass$().getDeclaredMethod$S$ClassA("setAboutHandler", Clazz.array(Class, -1, [aboutHandlerClass]));
m.invoke$O$OA(desktop, Clazz.array(java.lang.Object, -1, [proxyHandler]));
m=desktop.getClass$().getDeclaredMethod$S$ClassA("setQuitHandler", Clazz.array(Class, -1, [quitHandlerClass]));
m.invoke$O$OA(desktop, Clazz.array(java.lang.Object, -1, [proxyHandler]));
m=desktop.getClass$().getDeclaredMethod$S$ClassA("setPreferencesHandler", Clazz.array(Class, -1, [prefsHandlerClass]));
m.invoke$O$OA(desktop, Clazz.array(java.lang.Object, -1, [proxyHandler]));
var taskClass=Clazz.forName("java.awt.Taskbar", true, classLoader);
m=taskClass.getDeclaredMethod$S$ClassA("getTaskbar", null);
var taskbar=m.invoke$O$OA(null, null);
m=taskClass.getDeclaredMethod$S$ClassA("setIconImage", Clazz.array(Class, -1, [Clazz.getClass($I$(6))]));
m.invoke$O$OA(taskbar, Clazz.array(java.lang.Object, -1, [$I$(1).TRACKER_ICON_256.getImage$()]));
var quitResponseClass=Clazz.forName("java.awt.desktop.QuitResponse", true, classLoader);
this.proxy.cancelQuitMethod=quitResponseClass.getDeclaredMethod$S$ClassA("cancelQuit", null);
this.proxy.performQuitMethod=quitResponseClass.getDeclaredMethod$S$ClassA("performQuit", null);
success=true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.proxy.isDesktop=false;
} else {
throw ex;
}
}
if (!this.proxy.isDesktop) try {
var appClass=Clazz.forName("com.apple.eawt.Application", true, classLoader);
var m=appClass.getDeclaredMethod$S$ClassA("getApplication", null);
var application=m.invoke$O$OA(null, null);
var aboutHandlerClass=Clazz.forName("com.apple.eawt.AboutHandler", true, classLoader);
var quitHandlerClass=Clazz.forName("com.apple.eawt.QuitHandler", true, classLoader);
var prefsHandlerClass=Clazz.forName("com.apple.eawt.PreferencesHandler", true, classLoader);
var proxyHandler=$I$(5,"newProxyInstance$ClassLoader$ClassA$java_lang_reflect_InvocationHandler",[classLoader, Clazz.array(Class, -1, [aboutHandlerClass, quitHandlerClass, prefsHandlerClass]), this.proxy]);
m=appClass.getDeclaredMethod$S$ClassA("setAboutHandler", Clazz.array(Class, -1, [aboutHandlerClass]));
m.invoke$O$OA(application, Clazz.array(java.lang.Object, -1, [proxyHandler]));
m=appClass.getDeclaredMethod$S$ClassA("setQuitHandler", Clazz.array(Class, -1, [quitHandlerClass]));
m.invoke$O$OA(application, Clazz.array(java.lang.Object, -1, [proxyHandler]));
m=appClass.getDeclaredMethod$S$ClassA("setPreferencesHandler", Clazz.array(Class, -1, [prefsHandlerClass]));
m.invoke$O$OA(application, Clazz.array(java.lang.Object, -1, [proxyHandler]));
m=appClass.getDeclaredMethod$S$ClassA("setDockIconImage", Clazz.array(Class, -1, [Clazz.getClass($I$(6))]));
m.invoke$O$OA(application, Clazz.array(java.lang.Object, -1, [$I$(1).TRACKER_ICON_256.getImage$()]));
var quitResponseClass=Clazz.forName("com.apple.eawt.QuitResponse", true, classLoader);
this.proxy.cancelQuitMethod=quitResponseClass.getDeclaredMethod$S$ClassA("cancelQuit", null);
this.proxy.performQuitMethod=quitResponseClass.getDeclaredMethod$S$ClassA("performQuit", null);
success=true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
this.status=success ? "\nTracker OSXServices running " + (this.proxy.isDesktop ? "java desktop" : "apple") : "\nTracker OSXServices failed both java desktop and apple";
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.OSXServices, "ProxyHandler", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.lang.reflect.InvocationHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isDesktop'],'O',['tracker','org.opensourcephysics.cabrillo.tracker.Tracker','getFilesMethod','java.lang.reflect.Method','+cancelQuitMethod','+performQuitMethod']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_Tracker',  function (app) {
;C$.$init$.apply(this);
this.tracker=app;
}, 1);

Clazz.newMeth(C$, 'invoke$O$java_lang_reflect_Method$OA',  function (proxy, m, args) {
try {
if (m.getName$().equals$O("handleAbout")) {
$I$(1).showAboutTracker$();
} else if (m.getName$().equals$O("handlePreferences")) {
if (this.tracker != null ) {
var frame=this.tracker.getFrame$();
frame.showPrefsDialog$();
}} else if (m.getName$().equals$O("openFiles")) {
var files=this.getFilesMethod.invoke$O$OA(args[0], null);
var launchArgs=Clazz.array(String, [files.size$()]);
for (var i=0; i < launchArgs.length; i++) {
launchArgs[i]=files.get$I(i).getAbsolutePath$();
}
$I$(2).launchTracker$SA(launchArgs);
} else if (m.getName$().equals$O("handleQuitRequestWith")) {
if (this.tracker != null ) {
var frame=this.tracker.getFrame$();
if (frame != null ) {
frame.saveAllTabs$Z$java_util_function_Function$Runnable$Runnable(false, null, ((P$.OSXServices$ProxyHandler$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSXServices$ProxyHandler$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
try {
this.b$['org.opensourcephysics.cabrillo.tracker.deploy.OSXServices.ProxyHandler'].performQuitMethod.invoke$O$OA(this.$finals$.args[1], null);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.OSXServices$ProxyHandler$1.$init$,[this, {args:args}])), ((P$.OSXServices$ProxyHandler$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSXServices$ProxyHandler$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
try {
this.b$['org.opensourcephysics.cabrillo.tracker.deploy.OSXServices.ProxyHandler'].cancelQuitMethod.invoke$O$OA(this.$finals$.args[1], null);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.OSXServices$ProxyHandler$2.$init$,[this, {args:args}])));
}}this.performQuitMethod.invoke$O$OA(args[1], null);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["invocation exception: " + e.getMessage$()]);
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
