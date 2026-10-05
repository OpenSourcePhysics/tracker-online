(function(){var P$=Clazz.newPackage("davidson.stp"),I$=[[0,'org.opensourcephysics.frames.DisplayFrame','org.opensourcephysics.frames.PlotFrame','org.opensourcephysics.display.OSPRuntime','davidson.stp.Ising2d','java.text.NumberFormat','org.opensourcephysics.controls.OSPCombo','org.opensourcephysics.controls.SimulationControl']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Ising2dApp", null, 'org.opensourcephysics.controls.AbstractSimulation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.displayFrame=Clazz.new_($I$(1,1).c$$S,["Spin Configuration"]);
this.plotFrame=Clazz.new_($I$(2,1).c$$S$S$S,["time", "E and M", "Thermodynamic Quantities"]);
this.metropolis=true;
},1);

C$.$fields$=[['Z',['metropolis'],'D',['bondProbability'],'O',['ising','davidson.stp.Ising2d','displayFrame','org.opensourcephysics.frames.DisplayFrame','displayPanel','org.opensourcephysics.display.DrawingPanel','plotFrame','org.opensourcephysics.frames.PlotFrame','nf','java.text.NumberFormat']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
$I$(3).setAppClass$O(this);
this.ising=Clazz.new_($I$(4,1));
this.plotFrame.setPreferredMinMaxX$D$D(0, 10);
this.plotFrame.setAutoscaleX$Z(true);
this.plotFrame.setAutoscaleY$Z(true);
this.displayFrame.addDrawable$org_opensourcephysics_display_Drawable(this.ising);
this.nf=$I$(5).getInstance$();
this.nf.setMaximumFractionDigits$I(3);
this.displayPanel=this.displayFrame.getDrawingPanel$();
}, 1);

Clazz.newMeth(C$, 'initialize$',  function () {
this.ising.initialize$I$D$D(this.$control.getInt$S("Length"), this.$control.getDouble$S("Temperature"), this.$control.getDouble$S("External field"));
this.bondProbability=this.bondProbability$D$D(this.ising.J, this.ising.T);
if (this.$control.getString$S("Dynamics").equals$O("Metropolis")) {
this.metropolis=true;
} else {
this.metropolis=false;
}this.displayPanel.setPreferredMinMax$D$D$D$D(-5, this.ising.L + 5, -5, this.ising.L + 5);
this.$control.clearMessages$();
this.zeroAverages$();
this.stopRunning$();
});

Clazz.newMeth(C$, 'bondProbability$D$D',  function (J, T) {
return 1 - Math.exp(-2 * J / T);
});

Clazz.newMeth(C$, 'doStep$',  function () {
if (this.metropolis) {
this.ising.doOneMCStep$();
} else {
this.ising.doOneWolffStep$D(this.bondProbability);
}this.plotFrame.append$I$D$D(0, this.ising.mcs, this.ising.M / this.ising.N);
this.plotFrame.append$I$D$D(1, this.ising.mcs, this.ising.E / this.ising.N);
});

Clazz.newMeth(C$, 'startRunning$',  function () {
this.ising.setTemperature$D(this.$control.getDouble$S("Temperature"));
this.ising.setExternalField$D(this.$control.getDouble$S("External field"));
});

Clazz.newMeth(C$, 'stopRunning$',  function () {
var norm=(this.ising.mcs == 0) ? 1 : 1.0 / (this.ising.mcs * this.ising.N);
this.$control.println$S("mcs = " + this.ising.mcs);
this.$control.println$S("<E> = " + this.nf.format$D(this.ising.E_acc * norm));
this.$control.println$S("Specific heat = " + this.nf.format$D(this.ising.specificHeat$()));
this.$control.println$S("<M> = " + this.nf.format$D(this.ising.M_acc * norm));
this.$control.println$S("<|M|>=" + this.nf.format$D(Math.abs(this.ising.absM_acc * norm)));
this.$control.println$S("Susceptibility = " + this.nf.format$D(this.ising.susceptibility$()));
if (this.metropolis) {
this.$control.println$S("Acceptance ratio = " + this.nf.format$D(this.ising.acceptedMoves * norm));
}this.$control.println$();
});

Clazz.newMeth(C$, 'reset$',  function () {
this.$control.setValue$S$I("Length", 32);
this.$control.setAdjustableValue$S$O("Temperature", this.nf.format$D($I$(4).criticalTemperature));
this.$control.setAdjustableValue$S$I("External field", 0);
var combo=Clazz.new_([Clazz.array(String, -1, ["Metropolis", "Wolff"]), 0],$I$(6,1).c$$SA$I);
this.$control.setValue$S$O("Dynamics", combo);
this.enableStepsPerDisplay$Z(true);
});

Clazz.newMeth(C$, 'zeroAverages$',  function () {
this.$control.clearMessages$();
this.ising.resetData$();
this.stopRunning$();
this.plotFrame.clearData$();
this.plotFrame.repaint$();
});

Clazz.newMeth(C$, 'customize$',  function () {
var f=this.getMainFrame$();
if ((f == null ) || !f.isDisplayable$() ) {
return;
}this.addChildFrame$javax_swing_JFrame(this.displayFrame);
this.addChildFrame$javax_swing_JFrame(this.plotFrame);
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
var app=Clazz.new_(C$);
var control=$I$(7).createApp$org_opensourcephysics_controls_Simulation$SA(app, args);
control.addButton$S$S("zeroAverages", "Zero averages");
app.customize$();
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
