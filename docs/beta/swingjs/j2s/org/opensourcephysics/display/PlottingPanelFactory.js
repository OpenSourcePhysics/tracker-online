(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'org.opensourcephysics.display.PlottingPanel','org.opensourcephysics.display.axes.AxisFactory','org.opensourcephysics.display.axes.PolarType1','org.opensourcephysics.display.axes.PolarType2']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PlottingPanelFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createType1$S$S$S',  function (xlabel, ylabel, plotTitle) {
var panel=Clazz.new_($I$(1,1).c$$S$S$S,[xlabel, ylabel, plotTitle]);
panel.axes=$I$(2).createAxesType1$org_opensourcephysics_display_PlottingPanel(panel);
panel.axes.setXLabel$S$S(xlabel, null);
panel.axes.setYLabel$S$S(ylabel, null);
panel.axes.setTitle$S$S(plotTitle, null);
return panel;
}, 1);

Clazz.newMeth(C$, 'createType2$S$S$S',  function (xlabel, ylabel, plotTitle) {
var panel=Clazz.new_($I$(1,1).c$$S$S$S,[xlabel, ylabel, plotTitle]);
panel.axes=$I$(2).createAxesType2$org_opensourcephysics_display_PlottingPanel(panel);
panel.axes.setXLabel$S$S(xlabel, null);
panel.axes.setYLabel$S$S(ylabel, null);
panel.axes.setTitle$S$S(plotTitle, null);
return panel;
}, 1);

Clazz.newMeth(C$, 'createPolarType1$S$D',  function (plotTitle, deltaR) {
var panel=Clazz.new_($I$(1,1).c$$S$S$S,[null, null, plotTitle]);
var axes=Clazz.new_($I$(3,1).c$$org_opensourcephysics_display_PlottingPanel,[panel]);
axes.setDeltaR$D(deltaR);
axes.setDeltaTheta$D(0.39269908169872414);
panel.setTitle$S(plotTitle);
panel.setSquareAspect$Z(true);
return panel;
}, 1);

Clazz.newMeth(C$, 'createPolarType2$S$D',  function (plotTitle, deltaR) {
var panel=Clazz.new_($I$(1,1).c$$S$S$S,[null, null, plotTitle]);
var axes=Clazz.new_($I$(4,1).c$$org_opensourcephysics_display_PlottingPanel,[panel]);
axes.setDeltaR$D(deltaR);
axes.setDeltaTheta$D(0.39269908169872414);
panel.setTitle$S(plotTitle);
panel.setSquareAspect$Z(true);
return panel;
}, 1);

Clazz.newMeth(C$, 'createType3$S$S$S',  function (xlabel, ylabel, plotTitle) {
var panel=Clazz.new_($I$(1,1).c$$S$S$S,[xlabel, ylabel, plotTitle]);
panel.axes=$I$(2).createAxesType3$org_opensourcephysics_display_PlottingPanel(panel);
panel.axes.setXLabel$S$S(xlabel, null);
panel.axes.setYLabel$S$S(ylabel, null);
panel.axes.setTitle$S$S(plotTitle, null);
return panel;
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
