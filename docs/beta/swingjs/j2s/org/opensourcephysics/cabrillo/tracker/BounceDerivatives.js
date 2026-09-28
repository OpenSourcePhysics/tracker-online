(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.cabrillo.tracker.BounceModel','org.opensourcephysics.cabrillo.tracker.BounceParameters','java.util.Arrays']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BounceDerivatives", null, null, 'org.opensourcephysics.cabrillo.tracker.Derivative');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.degree=2;
},1);

C$.$fields$=[['I',['window_size','degree'],'O',['poly_model','org.opensourcephysics.cabrillo.tracker.BounceModel','+step_model']]]

Clazz.newMeth(C$, 'evaluate$OA',  function (data) {
var params=data[0];
this.window_size=1 + params[0] * 2;
var start=params[1];
var index_step=params[2];
var count=params[3];
var x=data[1];
var y=data[2];
var validData=data[3];
var length=x.length;
Clazz.assert(C$, this, function(){return (x.length == y.length)});
var xDeriv1;
var yDeriv1;
var xDeriv2;
var yDeriv2;
var result=Clazz.array(Double.TYPE, [4, null]);
result[0]=xDeriv1=Clazz.array(Double.TYPE, [length]);
result[1]=yDeriv1=Clazz.array(Double.TYPE, [length]);
result[2]=xDeriv2=Clazz.array(Double.TYPE, [length]);
result[3]=yDeriv2=Clazz.array(Double.TYPE, [length]);
for (var n=0; n < length; n++) {
xDeriv1[n]=yDeriv1[n]=NaN;
xDeriv2[n]=yDeriv2[n]=NaN;
if (!validData[n]) {
x[n]=y[n]=NaN;
}}
if (start >= length) {
return result;
}count=Math.min(count, ((length - start)/index_step|0));
Clazz.assert(C$, this, function(){return (start >= 0)});
Clazz.assert(C$, this, function(){return (start < length)});
Clazz.assert(C$, this, function(){return (index_step > 0)});
this.poly_model=Clazz.new_($I$(1,1).c$$I$I$D,[this.window_size, 2, 0]);
var poly_fit=Clazz.array($I$(2), [count]);
this.step_model=Clazz.new_($I$(1,1).c$$I$I$D,[this.window_size, 2, NaN]);
var step_fit=Clazz.array($I$(2), [count]);
var c_at=Clazz.array(Integer.TYPE, [count]);
 fit_models : for (var c=0; c < count; c++) {
var i=start + index_step * c;
c_at[c]=(this.window_size/2|0);
var highest_bad_index=-1;
for (var in_w=this.window_size - 1; in_w >= 0; in_w--) {
var index=i + index_step * (in_w - c_at[c]);
if (index < 0 || index >= length  || Double.isNaN$D(x[index])  || Double.isNaN$D(y[index]) ) {
highest_bad_index=in_w;
break;
}}
if (highest_bad_index >= 0) {
var lowest_bad_index=this.window_size;
for (var in_w=0; in_w < this.window_size; in_w++) {
var index=i + index_step * (in_w - c_at[c]);
if (index < 0 || index >= length  || Double.isNaN$D(x[index])  || Double.isNaN$D(y[index]) ) {
lowest_bad_index=in_w;
break;
}}
var move_up=highest_bad_index + 1;
var move_down=this.window_size - lowest_bad_index;
c_at[c]-=(move_up <= move_down) ? move_up : (0 - move_down);
for (var in_w=this.window_size - 1; in_w >= 0; in_w--) {
var index=i + index_step * (in_w - c_at[c]);
if (index < 0 || index >= length  || Double.isNaN$D(x[index])  || Double.isNaN$D(y[index]) ) {
continue fit_models;
}}
}poly_fit[c]=this.poly_model.fit_xy$DA$DA$I$I(x, y, i - c_at[c] * index_step, index_step);
step_fit[c]=this.step_model.fit_xy$DA$DA$I$I(x, y, i - c_at[c] * index_step, index_step);
}
var step_value=Clazz.array(Double.TYPE, [count]);
for (var c=0; c < count; c++) {
if (null == step_fit[c] ) continue;
var possible_step_time=step_fit[c].getStepAt$();
if (possible_step_time == 0.0 ) continue;
var i=start + index_step * c;
var i_step_time=i + index_step * (possible_step_time - c_at[c]);
var step_size=step_fit[c].getStepSize$();
for (var i_wind=Math.max(start, ((i_step_time - 0.5 * (this.window_size - 1) + 0.999)|0)); i_wind <= Math.min(length - 1, ((i_step_time + 0.5 * (this.window_size - 1) + 0.001)|0)); i_wind++) {
var c_wind=((i_wind - start)/index_step|0);
if (c_wind >= count) continue;
if (!(0 <= c_wind && c_wind < count )) {
System.out.format$S$OA("ERROR: c_wind=%d, i_wind=%d, start=%d, i_step_time=%.3f\n", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(c_wind), Integer.valueOf$I(i_wind), Integer.valueOf$I(start), Double.valueOf$D(i_step_time)]));
}if (null == poly_fit[c_wind] ) continue;
var poly_err=poly_fit[c_wind].getError$();
var refit=this.poly_model.fit_xy$DA$DA$I$I$D$DA(x, y, i_wind - c_at[c_wind] * index_step, index_step, (i_step_time - i_wind) / index_step + c_at[c_wind], step_size);
var step_err=refit.getError$();
step_value[c]+=poly_err - step_err;
}
}
var best_step_locs=Clazz.array(Integer, [count]);
for (var c=0; c < count; c++) {
best_step_locs[c]=Integer.valueOf$I(c);
}
$I$(3,"sort$OA$java_util_Comparator",[best_step_locs, ((P$.BounceDerivatives$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "BounceDerivatives$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$Integer$Integer','compare$O$O'],  function (o1, o2) {
return Double.compare$D$D(this.$finals$.step_value[(o2).$c()], this.$finals$.step_value[(o1).$c()]);
});
})()
), Clazz.new_(P$.BounceDerivatives$1.$init$,[this, {step_value:step_value}]))]);
var use_model=Clazz.array($I$(2), [count]);
for (var k=0; k < count; k++) {
var c=(best_step_locs[k]).$c();
if (use_model[c] != null ) continue;
if (null == step_fit[c] ) continue;
var poly_error=poly_fit[c].getError$();
var what_is_large=0.6 * this.window_size;
if (step_value[c] < what_is_large * poly_error ) {
continue;
}var possible_step_time=step_fit[c].getStepAt$();
if (possible_step_time == 0.0 ) continue;
var c_step_time=c + possible_step_time - c_at[c];
var step_size=step_fit[c].getStepSize$();
var c_below_step=(c_step_time|0);
for (var c_wind=Math.max(0, c_below_step - this.window_size + 2); c_wind < c_below_step + this.window_size && c_wind < count ; c_wind++) {
var i_wind=start + index_step * c_wind;
if (i_wind < start || i_wind >= length ) continue;
if (c_step_time <= c_wind - c_at[c_wind] ) continue;
if (c_step_time >= c_wind - c_at[c_wind] + this.window_size - 1 ) continue;
if (use_model[c_wind] != null ) continue;
if (null == poly_fit[c_wind] ) continue;
var refit=this.poly_model.fit_xy$DA$DA$I$I$D$DA(x, y, i_wind - c_at[c_wind] * index_step, index_step, c_step_time - c_wind + c_at[c_wind], step_size);
use_model[c_wind]=refit;
}
}
 apply_models : for (var c=0; c < count; c++) {
var i=start + index_step * c;
if (null == poly_fit[c] ) {
continue apply_models;
}var use_this_model=use_model[c];
if (null == use_this_model ) use_this_model=poly_fit[c];
var deriv1=use_this_model.first_deriv$D(c_at[c]);
xDeriv1[i]=deriv1[0];
yDeriv1[i]=deriv1[1];
var deriv2=use_this_model.second_deriv$D(c_at[c]);
xDeriv2[i]=deriv2[0];
yDeriv2[i]=deriv2[1];
}
return result;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
