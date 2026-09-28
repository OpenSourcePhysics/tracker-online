(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.cabrillo.tracker.BounceMatrix','org.opensourcephysics.cabrillo.tracker.BounceParameters']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BounceModel");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['use_step','use_unknown_step'],'D',['step_at'],'I',['degree','num_params'],'O',['model','org.opensourcephysics.cabrillo.tracker.BounceMatrix','+inverse_model']]]

Clazz.newMeth(C$, 'c$$I$I$D',  function (num_data, deg, when_step) {
;C$.$init$.apply(this);
this.degree=deg;
this.use_unknown_step=Double.isNaN$D(when_step);
if (this.use_unknown_step) {
this.use_step=false;
this.step_at=((num_data + 1)/2|0);
} else {
this.use_step=when_step > 0  && when_step < num_data - 1  ;
this.step_at=this.use_step ? when_step : 0;
}this.num_params=this.degree + 1 + (this.use_unknown_step ? 2 : (this.use_step ? 1 : 0)) ;
var mapping1D=Clazz.array(Double.TYPE, [num_data, this.num_params]);
for (var t=0; t < num_data; t++) {
var power=1;
for (var d=0; d <= this.degree; d++) {
mapping1D[t][d]=power;
power*=t;
}
if (this.usesStep$()) {
mapping1D[t][this.degree + 1]=t >= this.step_at  ? (t - this.step_at) : 0;
}if (this.use_unknown_step) {
mapping1D[t][this.degree + 2]=t >= this.step_at  ? 1 : 0;
}}
this.model=Clazz.new_($I$(1,1).c$$DAA,[mapping1D]);
this.inverse_model=this.model.inverse$();
}, 1);

Clazz.newMeth(C$, 'getStepAt$',  function () {
if (this.use_unknown_step) return NaN;
return this.step_at;
});

Clazz.newMeth(C$, 'getStepAt$org_opensourcephysics_cabrillo_tracker_BounceMatrix',  function (model_param) {
if (!this.use_unknown_step) return this.step_at;
var param_array=model_param.getArray$();
var dimension=model_param.getColumnDimension$();
var guess_step=0;
var weight=0;
for (var dim=0; dim < dimension; dim++) {
var dv=param_array[this.degree + 1][dim];
var x=param_array[this.degree + 2][dim];
if (dv == 0 ) continue;
guess_step+=dv * x;
weight+=dv * dv;
}
if (weight > 0 ) guess_step/=weight;
return this.step_at - guess_step;
});

Clazz.newMeth(C$, 'fit_xy$DA$DA$I$I',  function (xData, yData, start, index_step) {
var num_data=this.model.getRowDimension$();
var last_index=start + (num_data - 1) * index_step;
if (start < 0 || last_index >= xData.length  || last_index >= yData.length ) {
return null;
}var data_matrix=Clazz.new_($I$(1,1).c$$I$I,[num_data, 2]);
var data=data_matrix.getArray$();
for (var t=0; t < num_data; t++) {
data[t][0]=xData[start + index_step * t];
data[t][1]=yData[start + index_step * t];
if (Double.isNaN$D(data[t][0]) || Double.isNaN$D(data[t][1]) ) {
return null;
}}
var params=this.inverse_model.times$org_opensourcephysics_cabrillo_tracker_BounceMatrix(data_matrix);
var error_array=this.model.times$org_opensourcephysics_cabrillo_tracker_BounceMatrix(params).minus$org_opensourcephysics_cabrillo_tracker_BounceMatrix(data_matrix).getArray$();
var square_error=0;
for (var t=0; t < num_data; t++) {
square_error+=error_array[t][0] * error_array[t][0];
square_error+=error_array[t][1] * error_array[t][1];
}
if (!this.use_unknown_step) {
return Clazz.new_($I$(2,1).c$$org_opensourcephysics_cabrillo_tracker_BounceModel$org_opensourcephysics_cabrillo_tracker_BounceMatrix$D,[this, params, square_error]);
}var best_fit=null;
var params_array=params.getArray$();
var combined_step=0;
var weight=0;
for (var dim=0; dim < 2; dim++) {
var dv=params_array[this.degree + 1][dim];
var extra=params_array[this.degree + 2][dim];
if (dv == 0 ) continue;
var try_step=this.step_at - extra / dv;
if (try_step < 0 ) {
try_step=0.001;
} else if (try_step >= num_data - 1 ) {
try_step=num_data - 1.001;
}var step_model=Clazz.new_(C$.c$$I$I$D,[num_data, this.degree, try_step]);
var fit_step=step_model.fit_xy$DA$DA$I$I(xData, yData, start, index_step);
if (null == best_fit  || best_fit.getError$() > fit_step.getError$()  ) {
best_fit=fit_step;
}combined_step+=dv * dv * try_step ;
weight+=dv * dv;
}
if (weight > 0 ) combined_step/=weight;
var step_model=Clazz.new_(C$.c$$I$I$D,[num_data, this.degree, combined_step]);
var fit_step=step_model.fit_xy$DA$DA$I$I(xData, yData, start, index_step);
if (null == best_fit  || best_fit.getError$() > fit_step.getError$()  ) {
best_fit=fit_step;
}return best_fit;
});

Clazz.newMeth(C$, 'fit_xy$DA$DA$I$I$D$DA',  function (xData, yData, start, index_step, initial_step_at, initial_step_size) {
if (this.use_unknown_step || (this.use_step && this.step_at != initial_step_at  ) ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Can\'t fit with an initial step if the model already tries to fit a step"]);
}var num_data=this.model.getRowDimension$();
var last_index=start + (num_data - 1) * index_step;
if (start < 0 || last_index >= xData.length  || last_index >= yData.length ) {
return null;
}var data_matrix=Clazz.new_($I$(1,1).c$$I$I,[num_data, 2]);
var data=data_matrix.getArray$();
for (var t=0; t < num_data; t++) {
data[t][0]=xData[start + index_step * t] - (t > initial_step_at  ? initial_step_size[0] * (t - initial_step_at) : 0);
data[t][1]=yData[start + index_step * t] - (t > initial_step_at  ? initial_step_size[1] * (t - initial_step_at) : 0);
if (Double.isNaN$D(data[t][0]) || Double.isNaN$D(data[t][1]) ) {
return null;
}}
var params=this.inverse_model.times$org_opensourcephysics_cabrillo_tracker_BounceMatrix(data_matrix);
var error_array=this.model.times$org_opensourcephysics_cabrillo_tracker_BounceMatrix(params).minus$org_opensourcephysics_cabrillo_tracker_BounceMatrix(data_matrix).getArray$();
var square_error=0;
for (var t=0; t < num_data; t++) {
square_error+=error_array[t][0] * error_array[t][0];
square_error+=error_array[t][1] * error_array[t][1];
}
return Clazz.new_($I$(2,1).c$$org_opensourcephysics_cabrillo_tracker_BounceModel$org_opensourcephysics_cabrillo_tracker_BounceMatrix$D$D$DA,[this, params, square_error, initial_step_at, initial_step_size]);
});

Clazz.newMeth(C$, 'first_deriv$org_opensourcephysics_cabrillo_tracker_BounceMatrix$D',  function (model_param, t) {
var dimension=model_param.getColumnDimension$();
var result=Clazz.array(Double.TYPE, [dimension]);
var param_array=model_param.getArray$();
var power=1.0;
for (var d=1; d <= this.degree; d++) {
for (var dim=0; dim < dimension; dim++) {
result[dim]+=power * d * param_array[d][dim] ;
}
power*=t;
}
var guess_step=this.getStepAt$org_opensourcephysics_cabrillo_tracker_BounceMatrix(model_param);
if (this.usesStep$() && t >= guess_step  ) {
for (var dim=0; dim < dimension; dim++) {
result[dim]+=param_array[this.degree + 1][dim];
}
}return result;
});

Clazz.newMeth(C$, 'second_deriv$org_opensourcephysics_cabrillo_tracker_BounceMatrix$D',  function (model_param, t) {
var dimension=model_param.getColumnDimension$();
var result=Clazz.array(Double.TYPE, [dimension]);
var param_array=model_param.getArray$();
var power=1.0;
for (var d=2; d <= this.degree; d++) {
for (var dim=0; dim < dimension; dim++) {
result[dim]+=power * d * (d - 1) * param_array[d][dim] ;
}
power*=t;
}
var guess_step=this.getStepAt$org_opensourcephysics_cabrillo_tracker_BounceMatrix(model_param);
if (this.usesStep$() && guess_step - 0.5 < t   && t <= guess_step + 0.5  ) {
for (var dim=0; dim < dimension; dim++) {
result[dim]+=param_array[this.degree + 1][dim];
}
}return result;
});

Clazz.newMeth(C$, 'usesStep$',  function () {
return this.use_step || this.use_unknown_step ;
});

Clazz.newMeth(C$, 'getStepSize$org_opensourcephysics_cabrillo_tracker_BounceMatrix',  function (model_param) {
var dimension=model_param.getColumnDimension$();
var result=Clazz.array(Double.TYPE, [dimension]);
if (!this.usesStep$()) {
return result;
}var param_array=model_param.getArray$();
for (var dim=0; dim < dimension; dim++) {
result[dim]=param_array[this.degree + 1][dim];
}
return result;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
