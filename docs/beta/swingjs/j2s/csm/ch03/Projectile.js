(function(){var P$=Clazz.newPackage("csm.ch03"),I$=[[0,'org.opensourcephysics.numerics.EulerRichardson','java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Projectile", null, null, ['org.opensourcephysics.display.Drawable', 'org.opensourcephysics.numerics.ODE']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.state=Clazz.array(Double.TYPE, [5]);
this.pixRadius=6;
this.odeSolver=Clazz.new_($I$(1,1).c$$org_opensourcephysics_numerics_ODE,[this]);
},1);

C$.$fields$=[['I',['pixRadius'],'O',['state','double[]','odeSolver','org.opensourcephysics.numerics.EulerRichardson']]]

Clazz.newMeth(C$, 'setStepSize$D',  function (dt) {
this.odeSolver.setStepSize$D(dt);
});

Clazz.newMeth(C$, 'step$',  function () {
this.odeSolver.step$();
});

Clazz.newMeth(C$, 'setState$D$D$D$D',  function (x, vx, y, vy) {
this.state[0]=x;
this.state[1]=vx;
this.state[2]=y;
this.state[3]=vy;
this.state[4]=0;
});

Clazz.newMeth(C$, 'getState$',  function () {
return this.state;
});

Clazz.newMeth(C$, 'getRate$DA$DA',  function (state, rate) {
rate[0]=state[1];
rate[1]=0;
rate[2]=state[3];
rate[3]=-9.8;
rate[4]=1;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (drawingPanel, g) {
var xpix=drawingPanel.xToPix$D(this.state[0]);
var ypix=drawingPanel.yToPix$D(this.state[2]);
g.setColor$java_awt_Color($I$(2).red);
g.fillOval$I$I$I$I(xpix - this.pixRadius, ypix - this.pixRadius, 2 * this.pixRadius, 2 * this.pixRadius);
g.setColor$java_awt_Color($I$(2).green);
var xmin=drawingPanel.xToPix$D(-100);
var xmax=drawingPanel.xToPix$D(100);
var y0=drawingPanel.yToPix$D(0);
g.drawLine$I$I$I$I(xmin, y0, xmax, y0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
