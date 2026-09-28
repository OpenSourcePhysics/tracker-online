(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker");
/*c*/var C$=Clazz.newClass(P$, "BounceParameters");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['square_error','initial_step_at'],'O',['model','org.opensourcephysics.cabrillo.tracker.BounceModel','params','org.opensourcephysics.cabrillo.tracker.BounceMatrix','initial_step_size','double[]']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_BounceModel$org_opensourcephysics_cabrillo_tracker_BounceMatrix$D',  function (m, p, e) {
;C$.$init$.apply(this);
this.model=m;
this.params=p;
this.square_error=e;
this.initial_step_at=0;
this.initial_step_size=null;
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_BounceModel$org_opensourcephysics_cabrillo_tracker_BounceMatrix$D$D$DA',  function (m, p, e, step_at, step_size) {
;C$.$init$.apply(this);
this.model=m;
this.params=p;
this.square_error=e;
this.initial_step_at=step_at;
this.initial_step_size=step_size;
}, 1);

Clazz.newMeth(C$, 'getModel$',  function () {
return this.model;
});

Clazz.newMeth(C$, 'getParams$',  function () {
return this.params;
});

Clazz.newMeth(C$, 'getError$',  function () {
return this.square_error;
});

Clazz.newMeth(C$, 'getStepAt$',  function () {
var model_stepat=this.model.getStepAt$org_opensourcephysics_cabrillo_tracker_BounceMatrix(this.params);
if (null == this.initial_step_size ) return model_stepat;
if (!this.model.usesStep$() || model_stepat == this.initial_step_at  ) return this.initial_step_at;
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["LinearModelParams with steps at different times"]);
});

Clazz.newMeth(C$, 'getStepSize$',  function () {
var dimension=this.params.getColumnDimension$();
var result=Clazz.array(Double.TYPE, [dimension]);
if (this.initial_step_size != null ) {
for (var i=0; i < result.length; i++) {
result[i]=this.initial_step_size[i];
}
if (this.model.usesStep$() && this.model.getStepAt$() != this.initial_step_at  ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["LinearModelParams getStepSize with steps at different times"]);
}}if (!this.model.usesStep$()) {
return result;
}var step_index=this.params.getRowDimension$() - 1;
var param_array=this.params.getArray$();
for (var dim=0; dim < dimension; dim++) {
result[dim]+=param_array[step_index][dim];
}
return result;
});

Clazz.newMeth(C$, 'first_deriv$D',  function (t) {
var result=this.model.first_deriv$org_opensourcephysics_cabrillo_tracker_BounceMatrix$D(this.params, t);
if (this.initial_step_size != null  && this.initial_step_at < t  ) {
for (var i=0; i < result.length; i++) {
result[i]+=this.initial_step_size[i];
}
}return result;
});

Clazz.newMeth(C$, 'second_deriv$D',  function (t) {
var result=this.model.second_deriv$org_opensourcephysics_cabrillo_tracker_BounceMatrix$D(this.params, t);
if (this.initial_step_size != null  && Long.$eq(Math.round$D(this.initial_step_at - t),0 ) ) {
for (var i=0; i < result.length; i++) {
result[i]+=this.initial_step_size[i];
}
}return result;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
