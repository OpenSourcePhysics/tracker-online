(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'org.opensourcephysics.tools.ResourceLoader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DisplayRes");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['res','org.opensourcephysics.tools.ResourceLoader.Bundle']]]

Clazz.newMeth(C$, 'setLocale$java_util_Locale',  function (locale) {
C$.res=$I$(1).getBundle$S$java_util_Locale("org.opensourcephysics.resources.display.display_res", locale);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getString$S',  function (key) {
try {
return C$.res.getString$S(key);
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.MissingResourceException")){
return '!' + key + '!' ;
} else {
throw e;
}
}
}, 1);

C$.$static$=function(){C$.$static$=0;
{
C$.setLocale$java_util_Locale(null);
};
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
