(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.util.Locale','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.media.core.MediaRes','org.opensourcephysics.controls.ControlsRes','org.opensourcephysics.tools.ToolsRes']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrackerRes", null, ['org.opensourcephysics.display.OSPRuntime','.Supported']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['locale','java.util.Locale','res','org.opensourcephysics.tools.ResourceLoader.Bundle','tresObj','org.opensourcephysics.cabrillo.tracker.TrackerRes']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getString$S',  function (key) {
try {
return C$.res.getString$S(key);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.util.MissingResourceException")){
return "!" + key + "!" ;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'setLocale$java_util_Locale',  function (loc) {
if (C$.locale === loc ) return;
var prev=C$.locale;
C$.locale=loc;
C$.res=$I$(2).getBundle$S$java_util_Locale("org.opensourcephysics.cabrillo.tracker.resources.tracker", C$.locale);
try {
$I$(3).setLocale$java_util_Locale(loc);
$I$(4).setLocale$java_util_Locale(loc);
$I$(5).setLocale$java_util_Locale(loc);
C$.tresObj.firePropertyChange$S$O$O("locale", prev, C$.locale);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'addListener$java_beans_PropertyChangeListener',  function (listener) {
C$.tresObj.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.locale=$I$(1).getDefault$();
C$.res=$I$(2).getBundle$S$java_util_Locale("org.opensourcephysics.cabrillo.tracker.resources.tracker", C$.locale);
C$.tresObj=Clazz.new_(C$);
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
