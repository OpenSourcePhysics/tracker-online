(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'java.util.Locale','org.opensourcephysics.tools.ResourceLoader','javax.swing.event.SwingPropertyChangeSupport','org.opensourcephysics.controls.ControlsRes','org.opensourcephysics.display.DisplayRes','org.opensourcephysics.display.dialogs.DialogsRes']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ToolsRes");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['resourceLocale','java.util.Locale','res','org.opensourcephysics.tools.ResourceLoader.Bundle','resObj','java.lang.Object','support','java.beans.PropertyChangeSupport']]]

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

Clazz.newMeth(C$, 'getLanguage$',  function () {
return C$.resourceLocale.getLanguage$();
}, 1);

Clazz.newMeth(C$, 'setLocale$java_util_Locale',  function (loc) {
if (C$.resourceLocale === loc ) {
return;
}var prev=C$.resourceLocale;
C$.resourceLocale=loc;
C$.res=$I$(2).getBundle$S$java_util_Locale(null, C$.resourceLocale);
$I$(4).setLocale$java_util_Locale(C$.resourceLocale);
$I$(5).setLocale$java_util_Locale(C$.resourceLocale);
$I$(6).setLocale$java_util_Locale(C$.resourceLocale);
var className="org.opensourcephysics.ejs.EjsRes";
try {
var resClass=Clazz.forName(className);
var method=resClass.getMethod$S$ClassA("setLocale", Clazz.array(Class, -1, [Clazz.getClass($I$(1))]));
method.invoke$O$OA(null, Clazz.array(java.lang.Object, -1, [C$.resourceLocale]));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
C$.support.firePropertyChange$S$O$O("locale", prev, C$.resourceLocale);
}, 1);

Clazz.newMeth(C$, 'addPropertyChangeListener$S$java_beans_PropertyChangeListener',  function (property, listener) {
if (property.equals$O("locale")) {
C$.support.addPropertyChangeListener$S$java_beans_PropertyChangeListener(property, listener);
}}, 1);

Clazz.newMeth(C$, 'removePropertyChangeListener$S$java_beans_PropertyChangeListener',  function (property, listener) {
C$.support.removePropertyChangeListener$S$java_beans_PropertyChangeListener(property, listener);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.resourceLocale=$I$(1).getDefault$();
C$.res=$I$(2).getBundle$S$java_util_Locale(null, C$.resourceLocale);
C$.resObj=Clazz.new_(C$);
C$.support=Clazz.new_($I$(3,1).c$$O,[C$.resObj]);
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
