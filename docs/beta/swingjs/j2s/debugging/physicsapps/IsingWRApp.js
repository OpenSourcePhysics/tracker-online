(function(){var P$=Clazz.newPackage("debugging.physicsapps"),I$=[[0,'debugging.applets.ObjectManager','debugging.physicsapps.IsingTempControl']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IsingWRApp", null, 'debugging.physicsapps.IsingApp', 'debugging.applets.Embeddable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.viewManager=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['viewManager','debugging.applets.ObjectManager']]]

Clazz.newMeth(C$, 'sliderMoved$',  function () {
this.T=this.control.getDouble$S("T");
this.newH=this.control.getDouble$S("H");
if (this.newH != this.H ) this.fieldChanged=true;
});

Clazz.newMeth(C$, 'setControl$org_opensourcephysics_controls_Control',  function (control) {
this.stopAnimation$();
this.control=control;
if (this.control == null ) return;
this.viewManager.addView$S$java_awt_Container("drawingFrame", this.drawingFrame);
this.viewManager.addView$S$java_awt_Container("drawingPanel", this.drawingPanel);
this.viewManager.addView$S$java_awt_Container("energyFrame", this.enFrame);
this.viewManager.addView$S$java_awt_Container("energyPanel", this.enPanel);
this.viewManager.addView$S$java_awt_Container("magnetizationFrame", this.magFrame);
this.viewManager.addView$S$java_awt_Container("magnetizationPanel", this.magPanel);
this.initMyControl$();
});

Clazz.newMeth(C$, 'getControl$',  function () {
return this.control;
});

Clazz.newMeth(C$, 'getManager$',  function () {
return this.viewManager;
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
var model=Clazz.new_(C$);
var control=Clazz.new_($I$(2,1).c$$debugging_physicsapps_IsingWRApp,[model]);
model.setControl$org_opensourcephysics_controls_Control(control);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
