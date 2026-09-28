(function(){var P$=Clazz.newPackage("org.opensourcephysics.display.dialogs"),I$=[[0,'java.util.Locale','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.tools.ResourceLoader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DialogsRes");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['AUTOSCALE_AUTOSCALE','AUTOSCALE_AUTO','AUTOSCALE_OK','AUTOSCALE_ZOOM_WARNING','SCALE_SCALE','SCALE_MIN','SCALE_MAX','SCALE_AUTO','SCALE_CANCEL','SCALE_OK','SCALE_HORIZONTAL','SCALE_VERTICAL','LOG_SCALE','LOG_X','LOG_Y','LOG_OK','LOG_WARNING'],'O',['resourceLocale','java.util.Locale','res','org.opensourcephysics.tools.ResourceLoader.Bundle']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setLocale$java_util_Locale',  function (loc) {
if (C$.resourceLocale === loc ) {
return;
}C$.resourceLocale=loc;
C$.res=$I$(3).getBundle$S$java_util_Locale("org.opensourcephysics.resources.display.dialogs_res", C$.resourceLocale);
C$.setLocalStrings$();
}, 1);

Clazz.newMeth(C$, 'setLocalStrings$',  function () {
C$.AUTOSCALE_AUTOSCALE=C$.res.getString$S("AUTOSCALE_AUTOSCALE");
C$.AUTOSCALE_AUTO=C$.res.getString$S("AUTOSCALE_AUTO");
C$.AUTOSCALE_OK=C$.res.getString$S("AUTOSCALE_OK");
C$.AUTOSCALE_ZOOM_WARNING=C$.res.getString$S("AUTOSCALE_ZOOM_WARNING");
C$.SCALE_SCALE=C$.res.getString$S("SCALE_SCALE");
C$.SCALE_MIN=C$.res.getString$S("SCALE_MIN");
C$.SCALE_MAX=C$.res.getString$S("SCALE_MAX");
C$.SCALE_AUTO=C$.res.getString$S("SCALE_AUTO");
C$.SCALE_CANCEL=C$.res.getString$S("SCALE_CANCEL");
C$.SCALE_OK=C$.res.getString$S("SCALE_OK");
C$.SCALE_HORIZONTAL=C$.res.getString$S("SCALE_HORIZONTAL");
C$.SCALE_VERTICAL=C$.res.getString$S("SCALE_VERTICAL");
C$.LOG_SCALE=C$.res.getString$S("LOG_SCALE");
C$.LOG_X=C$.res.getString$S("LOG_X");
C$.LOG_Y=C$.res.getString$S("LOG_Y");
C$.LOG_OK=C$.res.getString$S("LOG_OK");
C$.LOG_WARNING=C$.res.getString$S("LOG_WARNING");
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.resourceLocale=$I$(1).ENGLISH;
{
var language=$I$(1).getDefault$().getLanguage$();
C$.resourceLocale=$I$(1).ENGLISH;
for (var locale, $locale = 0, $$locale = $I$(2).getInstalledLocales$(); $locale<$$locale.length&&((locale=($$locale[$locale])),1);$locale++) {
if (locale.getLanguage$().equals$O(language)) {
C$.resourceLocale=locale;
break;
}}
C$.res=$I$(3).getBundle$S$java_util_Locale("org.opensourcephysics.resources.display.dialogs_res", C$.resourceLocale);
C$.setLocalStrings$();
};
{
C$.setLocalStrings$();
};
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
