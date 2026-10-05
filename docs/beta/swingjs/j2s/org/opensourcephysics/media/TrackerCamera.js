(function(){var P$=Clazz.newPackage("org.opensourcephysics.media"),I$=[[0,'org.opensourcephysics.display.OSPRuntime']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrackerCamera");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TFrame',  function (frame) {
;C$.$init$.apply(this);
var applet=$I$(1).jsutil.getAppletForComponent$java_awt_Component(frame);
var app=null;
var me=this;

app = applet.app;
if (!J2S.TrackerMP4Importer) { var path = applet._j2sPath + "/_ES6/tracker-mp4-import.js";
$.getScript(path, function(){me.openDialog$O(app)});
return;
}
me.openDialog$O(app);
}, 1);

Clazz.newMeth(C$, 'openDialog$O',  function (app) {

J2S.TrackerMP4Importer.createDialog(app);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:08 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
