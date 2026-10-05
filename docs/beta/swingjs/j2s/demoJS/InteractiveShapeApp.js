(function(){var P$=Clazz.newPackage("demoJS"),I$=[[0,'org.opensourcephysics.display.PlottingPanel','org.opensourcephysics.display.DrawingFrame','org.opensourcephysics.display.InteractiveShape']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InteractiveShapeApp");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
var panel=Clazz.new_($I$(1,1).c$$S$S$S,["x", "y", "Interactive Demo"]);
panel.setPreferredMinMax$D$D$D$D(1, 10, 1, 10);
var frame=Clazz.new_($I$(2,1).c$$org_opensourcephysics_display_DrawingPanel,[panel]);
var ishape=$I$(3).createRectangle$D$D$D$D(3, 4, 2, 2);
panel.addDrawable$org_opensourcephysics_display_Drawable(ishape);
var arrow=$I$(3).createArrow$D$D$D$D(3, 4, 1, 5);
panel.addDrawable$org_opensourcephysics_display_Drawable(arrow);
frame.setVisible$Z(true);
frame.setDefaultCloseOperation$I(3);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
