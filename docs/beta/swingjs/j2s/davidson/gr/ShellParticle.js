(function(){var P$=Clazz.newPackage("davidson.gr"),I$=[[0,'davidson.gr.ShellParticle','org.opensourcephysics.numerics.RK45MultiStep','java.awt.Color','org.opensourcephysics.controls.OSPTableInspector','davidson.gr.Trajectory','org.opensourcephysics.display.DatasetManager','org.opensourcephysics.display.DataTable','org.opensourcephysics.display.DataTableFrame',['davidson.gr.ShellParticle','.ShellParticleLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ShellParticle", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'davidson.gr.AbstractTrajectory');
C$.$classes$=[['ShellParticleLoader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['E','x0','y0'],'O',['tableFrame','org.opensourcephysics.display.DataTableFrame','datasets','org.opensourcephysics.display.DatasetManager','dataTable','org.opensourcephysics.display.DataTable']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$D$D.apply(this, [4, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$D$D',  function (x0, y0) {
Clazz.super_(C$, this);
this.state=Clazz.array(Double.TYPE, -1, [0.0, 0.0]);
this.stateInitial=Clazz.array(Double.TYPE, -1, [0.0, 0.0]);
this.ode_solver=Clazz.new_($I$(2,1).c$$org_opensourcephysics_numerics_ODE,[this]);
this.pixRadius=4;
this.x0=this.x=x0;
this.y0=this.y=y0;
this.color=$I$(3).BLACK;
this.showTrail=false;
}, 1);

Clazz.newMeth(C$, 'resetInitial$',  function () {
C$.superclazz.prototype.resetInitial$.apply(this, []);
this.x=this.x0;
this.y=this.y0;
});

Clazz.newMeth(C$, 'initialize$DA',  function (newState) {
C$.superclazz.prototype.initialize$DA.apply(this, [newState]);
if ((this.datasets != null ) || (this.dataTable != null ) ) {
this.datasets.clear$();
this.dataTable.refreshTable$I(2);
}this.E=this.computeE$DA(this.state);
this.tau=this.state[1];
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
var x0=this.x;
var y0=this.y;
C$.superclazz.prototype.setXY$D$D.apply(this, [x, y]);
var dx=this.x - x0;
var dy=this.y - y0;
for (var i=0, n=this.cluster.size$(); i < n; i++) {
var t=this.cluster.get$I(i);
if (t !== this ) {
t.setX$D(t.getX$() + dx);
t.setY$D(t.getY$() + dy);
}}
});

Clazz.newMeth(C$, 'edit$',  function () {
var inspector=Clazz.new_($I$(4,1).c$$Z$Z,[true, true]);
var control=inspector.getControl$();
inspector.setTitle$S("Shell Particle");
inspector.setDefaultCloseOperation$I(2);
control.setValue$S$D("r", 5.0);
control.setValue$S$D($I$(5).PHI, 1.5707963267948966);
control.setValue$S$Z("show tau", false);
control.setValue$S$Z("draggable state", false);
control.setValue$S$O("label", "");
inspector.setSize$I$I(160, 170);
return inspector;
});

Clazz.newMeth(C$, 'getRate$DA$DA',  function (state, rate) {
var r=Math.sqrt(this.x * this.x + this.y * this.y);
if (r <= 2 * this.M ) {
return;
}rate[0]=1;
rate[1]=Math.sqrt((1 - 2 * this.M / r));
});

Clazz.newMeth(C$, 'getE$',  function () {
return this.E;
});

Clazz.newMeth(C$, 'computeE$DA',  function (state) {
var r=Math.sqrt(this.x * this.x + this.y * this.y);
return Math.sqrt(1 - 2 * this.M / r);
});

Clazz.newMeth(C$, 'stepTime$',  function () {
this.ode_solver.step$();
this.tau=this.state[1];
});

Clazz.newMeth(C$, 'disposeDataTable$',  function () {
if (this.tableFrame != null ) {
this.datasets.clear$();
this.tableFrame.setVisible$Z(false);
this.tableFrame.dispose$();
}});

Clazz.newMeth(C$, 'clearDataTable$',  function () {
if (this.tableFrame != null ) {
this.datasets.clear$();
this.dataTable.refreshTable$I(2);
}});

Clazz.newMeth(C$, 'createDataTable$I',  function (stride) {
this.datasets=Clazz.new_($I$(6,1));
this.datasets.setXPointsLinked$Z(true);
this.datasets.setXYColumnNames$I$S$S(0, "t", "tau");
this.dataTable=Clazz.new_($I$(7,1));
this.tableFrame=Clazz.new_($I$(8,1).c$$S$org_opensourcephysics_display_DataTable,["Data Table", this.dataTable]);
this.dataTable.add$javax_swing_table_TableModel(this.datasets.model);
this.dataTable.setRowNumberVisible$Z(false);
this.datasets.append$I$D$D(0, this.state[0], this.state[1]);
this.tableFrame.setVisible$Z(true);
this.tableFrame.setDefaultCloseOperation$I(2);
this.dataTable.refreshTable$I(1);
this.datasets.setStride$I(stride);
return this.tableFrame;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(9,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ShellParticle, "ShellParticleLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['davidson.gr.AbstractTrajectory','.AbstractTrajectoryLoader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.saveObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
