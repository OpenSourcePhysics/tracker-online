(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'java.util.Locale','org.opensourcephysics.tools.ResourceLoader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MediaRes");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['resourceLocale','java.util.Locale','res','org.opensourcephysics.tools.ResourceLoader.Bundle']]]

Clazz.newMeth(C$, 'setLocale$java_util_Locale',  function (locale) {
C$.resourceLocale=locale;
C$.res=$I$(2).getBundle$S$java_util_Locale("org.opensourcephysics.resources.media.video", locale);
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

C$.$static$=function(){C$.$static$=0;
{
C$.setLocale$java_util_Locale($I$(1).getDefault$());
};
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
