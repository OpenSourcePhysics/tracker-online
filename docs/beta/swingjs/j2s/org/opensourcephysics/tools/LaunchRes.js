(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'java.util.Locale','javax.swing.event.SwingPropertyChangeSupport','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.tools.ToolsRes']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LaunchRes");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['resourceLocale','java.util.Locale','res','org.opensourcephysics.tools.ResourceLoader.Bundle','support','java.beans.PropertyChangeSupport']]]

Clazz.newMeth(C$, 'setLocale$java_util_Locale',  function (loc) {
if (C$.resourceLocale === loc ) {
return;
}var prev=C$.resourceLocale;
C$.resourceLocale=loc;
C$.res=$I$(4).getBundle$S$java_util_Locale("org.opensourcephysics.resources.tools.launcher", C$.resourceLocale);
C$.support.firePropertyChange$S$O$O("locale", prev, C$.resourceLocale);
$I$(5).setLocale$java_util_Locale(loc);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
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

Clazz.newMeth(C$, 'addPropertyChangeListener$S$java_beans_PropertyChangeListener',  function (property, listener) {
if (property.equals$O("locale")) {
C$.support.addPropertyChangeListener$S$java_beans_PropertyChangeListener(property, listener);
}}, 1);

Clazz.newMeth(C$, 'removePropertyChangeListener$S$java_beans_PropertyChangeListener',  function (property, listener) {
C$.support.removePropertyChangeListener$S$java_beans_PropertyChangeListener(property, listener);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.resourceLocale=$I$(1).ENGLISH;
C$.support=Clazz.new_([Clazz.new_(C$)],$I$(2,1).c$$O);
{
var language=$I$(1).getDefault$().getLanguage$();
C$.resourceLocale=$I$(1).ENGLISH;
for (var locale, $locale = 0, $$locale = $I$(3).getInstalledLocales$(); $locale<$$locale.length&&((locale=($$locale[$locale])),1);$locale++) {
if (locale.getLanguage$().equals$O(language)) {
C$.resourceLocale=locale;
break;
}}
C$.res=$I$(4).getBundle$S$java_util_Locale("org.opensourcephysics.resources.tools.launcher", C$.resourceLocale);
};
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
