(function(){var P$=Clazz.newPackage("org.opensourcephysics.frames"),I$=[[0,'org.opensourcephysics.display.InteractivePanel','org.opensourcephysics.display.PlottingPanel']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DisplayFrame", null, 'org.opensourcephysics.display.DrawingFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (title) {
;C$.superclazz.c$$org_opensourcephysics_display_DrawingPanel.apply(this,[Clazz.new_($I$(1,1))]);C$.$init$.apply(this);
this.setTitle$S(title);
this.setAnimated$Z(true);
this.setAutoclear$Z(true);
this.drawingPanel.setSquareAspect$Z(true);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S',  function (xlabel, ylabel, title) {
;C$.superclazz.c$$org_opensourcephysics_display_DrawingPanel.apply(this,[Clazz.new_($I$(2,1).c$$S$S$S,[xlabel, ylabel, null])]);C$.$init$.apply(this);
this.setTitle$S(title);
this.setAnimated$Z(true);
this.setAutoclear$Z(true);
this.drawingPanel.setSquareAspect$Z(true);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
