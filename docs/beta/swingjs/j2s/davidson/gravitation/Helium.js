(function(){var P$=Clazz.newPackage("davidson.gravitation"),I$=[[0,'org.opensourcephysics.numerics.RK45MultiStep','org.opensourcephysics.display.Trail','java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Helium", null, null, ['org.opensourcephysics.display.Drawable', 'org.opensourcephysics.numerics.ODE']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pixRadius=4;
this.state=Clazz.array(Double.TYPE, [9]);
this.ode_solver=Clazz.new_($I$(1,1).c$$org_opensourcephysics_numerics_ODE,[this]);
this.trail_1=Clazz.new_($I$(2,1));
this.trail_2=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['I',['pixRadius'],'O',['state','double[]','ode_solver','org.opensourcephysics.numerics.ODESolver','trail_1','org.opensourcephysics.display.Trail','+trail_2']]]

Clazz.newMeth(C$, 'getState$',  function () {
return this.state;
});

Clazz.newMeth(C$, 'getRate$DA$DA',  function (state, rate) {
var deltaX=(state[4] - state[0]);
var deltaY=(state[6] - state[2]);
var dr_2=(deltaX * deltaX + deltaY * deltaY);
var dr_3=Math.sqrt(dr_2) * dr_2;
rate[0]=state[1];
rate[2]=state[3];
var r_2=state[0] * state[0] + state[2] * state[2];
var r_3=r_2 * Math.sqrt(r_2);
rate[1]=-2 * state[0] / r_3 - deltaX / dr_3;
rate[3]=-2 * state[2] / r_3 - deltaY / dr_3;
rate[4]=state[5];
rate[6]=state[7];
r_2=state[4] * state[4] + state[6] * state[6];
r_3=r_2 * Math.sqrt(r_2);
rate[5]=-2 * state[4] / r_3 + deltaX / dr_3;
rate[7]=-2 * state[6] / r_3 + deltaY / dr_3;
rate[8]=1;
});

Clazz.newMeth(C$, 'initialize$D$D$D$D',  function (x1, vy1, x2, vy2) {
this.state[0]=x1;
this.state[1]=0;
this.state[2]=0;
this.state[3]=vy1;
this.state[4]=x2;
this.state[5]=0;
this.state[6]=0;
this.state[7]=vy2;
this.state[8]=0;
this.trail_1.clear$();
this.trail_2.clear$();
this.trail_1.addPoint$D$D(this.state[0], this.state[2]);
this.trail_2.addPoint$D$D(this.state[4], this.state[6]);
});

Clazz.newMeth(C$, 'stepTime$',  function () {
this.ode_solver.step$();
this.trail_1.addPoint$D$D(this.state[0], this.state[2]);
this.trail_2.addPoint$D$D(this.state[4], this.state[6]);
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
this.trail_1.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
this.trail_2.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics(panel, g);
var xpix=panel.xToPix$D(this.state[0]) - this.pixRadius;
var ypix=panel.yToPix$D(this.state[2]) - this.pixRadius;
g.setColor$java_awt_Color($I$(3).red);
g.fillOval$I$I$I$I(xpix, ypix, 2 * this.pixRadius, 2 * this.pixRadius);
xpix=panel.xToPix$D(this.state[4]) - this.pixRadius;
ypix=panel.yToPix$D(this.state[6]) - this.pixRadius;
g.setColor$java_awt_Color($I$(3).green);
g.fillOval$I$I$I$I(xpix, ypix, 2 * this.pixRadius, 2 * this.pixRadius);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
