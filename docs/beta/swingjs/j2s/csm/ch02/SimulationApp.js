(function(){var P$=Clazz.newPackage("csm.ch02"),I$=[[0,'org.opensourcephysics.controls.OSPLog','org.opensourcephysics.controls.SimulationControl']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SimulationApp", null, 'org.opensourcephysics.controls.AbstractSimulation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.counter=0;
},1);

C$.$fields$=[['I',['counter']]]

Clazz.newMeth(C$, 'doStep$',  function () {
this.$control.println$S("Counter = " + (this.counter--));
this.$control.setAdjustableValue$S$I("counter", this.counter);
});

Clazz.newMeth(C$, 'initialize$',  function () {
this.counter=this.$control.getInt$S("counter");
$I$(1).info$S("Initializing SumulationApp");
});

Clazz.newMeth(C$, 'reset$',  function () {
this.$control.setValue$S$D("a", 10.0);
this.$control.setAdjustableValue$S$I("counter", 90);
this.initialize$();
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
$I$(2,"createApp$org_opensourcephysics_controls_Simulation",[Clazz.new_(C$)]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
