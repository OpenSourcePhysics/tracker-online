(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'java.util.Locale','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.tools.ResourceLoader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControlsRes");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['ANIMATION_NEW','ANIMATION_INIT','ANIMATION_STEP','ANIMATION_RESET','ANIMATION_START','ANIMATION_STOP','ANIMATION_RESET_TIP','ANIMATION_INIT_TIP','ANIMATION_START_TIP','ANIMATION_STOP_TIP','ANIMATION_NEW_TIP','ANIMATION_STEP_TIP','CALCULATION_CALC','CALCULATION_RESET','CALCULATION_CALC_TIP','CALCULATION_RESET_TIP','XML_NAME','XML_VALUE'],'O',['res','org.opensourcephysics.tools.ResourceLoader.Bundle']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setLocale$java_util_Locale',  function (locale) {
if ($I$(2).isJS) return;
C$.res=$I$(3).getBundle$S$java_util_Locale("org.opensourcephysics.resources.controls.controls_res", locale);
C$.setLocalStrings$();
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

Clazz.newMeth(C$, 'setLocalStrings$',  function () {
C$.ANIMATION_NEW=C$.res.getString$S("ANIMATION_NEW");
C$.ANIMATION_INIT=C$.res.getString$S("ANIMATION_INIT");
C$.ANIMATION_STEP=C$.res.getString$S("ANIMATION_STEP");
C$.ANIMATION_RESET=C$.res.getString$S("ANIMATION_RESET");
C$.ANIMATION_START=C$.res.getString$S("ANIMATION_START");
C$.ANIMATION_STOP=C$.res.getString$S("ANIMATION_STOP");
C$.ANIMATION_RESET_TIP=C$.res.getString$S("ANIMATION_RESET_TIP");
C$.ANIMATION_INIT_TIP=C$.res.getString$S("ANIMATION_INIT_TIP");
C$.ANIMATION_START_TIP=C$.res.getString$S("ANIMATION_START_TIP");
C$.ANIMATION_STOP_TIP=C$.res.getString$S("ANIMATION_STOP_TIP");
C$.ANIMATION_NEW_TIP=C$.res.getString$S("ANIMATION_NEW_TIP");
C$.ANIMATION_STEP_TIP=C$.res.getString$S("ANIMATION_STEP_TIP");
C$.CALCULATION_CALC=C$.res.getString$S("CALCULATION_CALC");
C$.CALCULATION_RESET=C$.res.getString$S("CALCULATION_RESET");
C$.CALCULATION_CALC_TIP=C$.res.getString$S("CALCULATION_CALC_TIP");
C$.CALCULATION_RESET_TIP=C$.res.getString$S("CALCULATION_RESET_TIP");
C$.XML_NAME=C$.res.getString$S("XML_NAME");
C$.XML_VALUE=C$.res.getString$S("XML_VALUE");
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
C$.res=$I$(3).getBundle$S$java_util_Locale("org.opensourcephysics.resources.controls.controls_res", resourceLocale);
C$.setLocalStrings$();
};
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
