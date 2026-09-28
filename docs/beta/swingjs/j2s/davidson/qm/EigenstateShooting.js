(function(){var P$=Clazz.newPackage("davidson.qm"),p$1={},I$=[[0,'org.opensourcephysics.numerics.RK45MultiStep']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EigenstateShooting", null, null, 'org.opensourcephysics.numerics.ODE');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bisectionTolerance=0.01;
this.state=Clazz.array(Double.TYPE, [3]);
this.solver=Clazz.new_($I$(1,1).c$$org_opensourcephysics_numerics_ODE,[this]);
},1);

C$.$fields$=[['D',['bisectionTolerance','energy','maxAmp','xmin','xmax','dx'],'I',['istart','istop'],'O',['psi','double[]','+x','+state','solver','org.opensourcephysics.numerics.ODEAdaptiveSolver','pot','org.opensourcephysics.numerics.Function']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_Function$I$D$D',  function (potential, numpts, _xmin, _xmax) {
;C$.$init$.apply(this);
this.pot=potential;
this.psi=Clazz.array(Double.TYPE, [numpts]);
this.x=Clazz.array(Double.TYPE, [numpts]);
this.dx=(_xmax - _xmin) / (numpts - 1);
this.solver.setStepSize$D(this.dx);
this.xmin=_xmin;
this.xmax=_xmax;
this.istart=0;
this.istop=numpts;
}, 1);

Clazz.newMeth(C$, 'setBisectionTolerance$D',  function (t) {
this.bisectionTolerance=t;
});

Clazz.newMeth(C$, 'setSolverTolerance$D',  function (t) {
this.solver.setTolerance$D(t);
this.solver.initialize$D(this.dx);
});

Clazz.newMeth(C$, 'estimateStartStopIndex$D',  function (en) {
var x=this.xmin;
for (var i=0, n=this.psi.length; i < n; i++) {
if ((this.pot.evaluate$D(x) - en) < 0 ) {
this.istart=i;
break;
}x+=this.dx;
}
x=this.xmax;
for (var i=this.psi.length; i > this.istart; i--) {
if ((this.pot.evaluate$D(x) - en) < 0 ) {
this.istop=i;
break;
}x-=this.dx;
}
var a=1;
x=this.xmin + this.istart * this.dx;
while (a > this.bisectionTolerance  && this.istart > 0 ){
--this.istart;
x-=this.dx;
var k=Math.sqrt(2 * (this.pot.evaluate$D(x) - en));
a*=Math.exp(-k * this.dx);
}
a=1;
x=this.xmin + this.istop * this.dx;
while (a > this.bisectionTolerance  && this.istop < this.psi.length ){
++this.istop;
x+=this.dx;
var k=Math.sqrt(2 * (this.pot.evaluate$D(x) - en));
a*=Math.exp(-k * this.dx);
}
}, p$1);

Clazz.newMeth(C$, 'solve$D',  function (e) {
p$1.estimateStartStopIndex$D.apply(this, [e]);
if (this.istop - this.istart < 3) {
return 0;
}this.energy=e;
this.state[0]=0;
this.state[1]=1.0;
this.state[2]=this.xmin + this.istart * this.dx;
var crossing=0;
var slopeChanged=false;
this.maxAmp=0;
var norm=0;
var lastState=Clazz.array(Double.TYPE, [3]);
for (var i=0; i < this.istart; i++) {
this.psi[i]=0;
this.x[i]=this.xmin + i * this.dx;
}
this.solver.initialize$D(this.dx);
for (var i=this.istart; i < this.istop; i++) {
this.psi[i]=this.state[0];
this.x[i]=this.state[2];
norm+=this.state[0] * this.state[0];
System.arraycopy$O$I$O$I$I(this.state, 0, lastState, 0, 3);
this.solver.step$();
if (this.maxAmp < Math.abs(this.state[0]) ) this.maxAmp=Math.abs(this.state[0]);
if ((this.state[1] <= 0  && lastState[1] > 0  ) || (this.state[1] >= 0  && lastState[1] < 0  ) ) {
slopeChanged=true;
}if (this.state[0] <= 0  && lastState[0] > 0  ) {
++crossing;
slopeChanged=false;
} else if (this.state[0] >= 0  && lastState[0] < 0  ) {
++crossing;
slopeChanged=false;
}if (Math.abs(this.state[0]) > 1.0E9 ) {
for (var j=i + 1; j < this.istop; j++) {
this.psi[j]=this.state[0];
this.x[i]+=this.solver.getStepSize$();
norm+=this.state[0] * this.state[0];
}
break;
}}
for (var i=this.istop, n=this.psi.length; i < n; i++) {
this.psi[i]=this.psi[this.istop - 1];
this.x[i]=this.xmin + i * this.dx;
norm+=this.psi[i] * this.psi[i];
}
if (slopeChanged && Math.abs(this.psi[this.psi.length - 1]) <= this.bisectionTolerance * this.maxAmp  ) ++crossing;
p$1.rescale$D.apply(this, [Math.sqrt(norm * this.dx)]);
return crossing;
});

Clazz.newMeth(C$, 'calcEigenfunction$I$D$D',  function (qnumber, enmin, enmax) {
var counter=0;
var energyErr=0;
do {
energyErr=(Math.abs(enmax) + Math.abs(enmin) < this.bisectionTolerance ) ? (enmax - enmin) : (enmax - enmin) / (Math.abs(enmax) + Math.abs(enmin));
var en=(enmax + enmin) / 2;
var crossing=this.solve$D(en);
if (crossing == qnumber && Math.abs(this.psi[this.psi.length - 1]) <= this.bisectionTolerance * this.maxAmp  ) {
return true;
}if (crossing == qnumber && energyErr < 1.0E-6  ) {
return true;
}if (crossing > qnumber || (crossing == qnumber && p$1.parity$I.apply(this, [crossing]) * this.psi[this.psi.length - 1] > 0  ) ) {
enmax=en;
} else {
enmin=en;
}++counter;
} while (counter < 32 && energyErr > 1.0E-9  );
return false;
});

Clazz.newMeth(C$, 'parity$I',  function (n) {
if (n % 2 == 0) return 1;
 else return -1;
}, p$1);

Clazz.newMeth(C$, 'rescale$D',  function (scale) {
if (scale == 0 ) return;
for (var i=0, n=this.psi.length; i < n; i++) {
this.psi[i]/=scale;
this.state[0]/=scale;
this.state[1]/=scale;
}
this.maxAmp/=scale;
}, p$1);

Clazz.newMeth(C$, 'getState$',  function () {
return this.state;
});

Clazz.newMeth(C$, 'getRate$DA$DA',  function (state, rate) {
rate[0]=state[1];
rate[1]=(-this.energy + this.pot.evaluate$D(state[2])) * state[0];
rate[2]=1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
