(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs"),I$=[[0,'java.util.Locale','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.tools.ResourceLoader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EjsRes");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['res','org.opensourcephysics.tools.ResourceLoader.Bundle']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setLocale$java_util_Locale',  function (locale) {
C$.res=$I$(3).getBundle$S$java_util_Locale("org.opensourcephysics.resources.ejs.ejs_res", locale);
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
var language=$I$(1).getDefault$().getLanguage$();
var resourceLocale=$I$(1).ENGLISH;
for (var locale, $locale = 0, $$locale = $I$(2).getInstalledLocales$(); $locale<$$locale.length&&((locale=($$locale[$locale])),1);$locale++) {
if (locale.getLanguage$().equals$O(language)) {
resourceLocale=locale;
break;
}}
C$.setLocale$java_util_Locale(resourceLocale);
};
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
