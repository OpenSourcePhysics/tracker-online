(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.cabrillo.tracker.TrackerRes']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnalyticFunctionPanel", null, 'org.opensourcephysics.cabrillo.tracker.ModelFunctionPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_UserFunctionEditor$org_opensourcephysics_cabrillo_tracker_AnalyticParticle',  function (editor, track) {
;C$.superclazz.c$$org_opensourcephysics_tools_UserFunctionEditor$org_opensourcephysics_cabrillo_tracker_ParticleModel.apply(this,[editor, track]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getPositionFunctions$',  function () {
return (this.functionEditor).getMainFunctions$();
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
C$.superclazz.prototype.refreshGUI$.apply(this, []);
this.functionEditor.setBorderTitle$S($I$(1).getString$S("AnalyticFunctionPanel.FunctionEditor.Border.Title"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:04 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
