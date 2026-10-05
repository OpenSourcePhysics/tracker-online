(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'org.opensourcephysics.tools.ToolsRes','StringBuffer','org.opensourcephysics.tools.UserFunction']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "KnownPolynomial", null, 'org.opensourcephysics.numerics.PolynomialLeastSquareFit', 'org.opensourcephysics.tools.KnownFunction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.paramNames=Clazz.array(String, -1, ["A", "B", "C", "D", "E", "F"]);
},1);

C$.$fields$=[['S',['name','description'],'O',['paramNames','String[]','+paramDescriptions']]]

Clazz.newMeth(C$, 'c$$DA$DA$I',  function (xdata, ydata, degree) {
;C$.superclazz.c$$DA$DA$I.apply(this,[xdata, ydata, degree]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$DA',  function (coeffs) {
;C$.superclazz.c$$DA.apply(this,[coeffs]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getParameterCount$',  function () {
return this.coefficients.length;
});

Clazz.newMeth(C$, 'getParameterName$I',  function (i) {
return this.paramNames[i];
});

Clazz.newMeth(C$, 'getParameterDescription$I',  function (i) {
if (this.paramDescriptions != null  && this.paramDescriptions.length > i ) {
return this.paramDescriptions[i];
}if (this.getParameterCount$() == 2) {
if (i == 0) return $I$(1).getString$S("Function.Parameter.Slope.Description");
return $I$(1).getString$S("Function.Parameter.Intercept.Description");
}return null;
});

Clazz.newMeth(C$, 'getParameterValue$I',  function (i) {
return this.coefficients[this.coefficients.length - i - 1 ];
});

Clazz.newMeth(C$, 'setParameterValue$I$D',  function (i, value) {
if (Double.isNaN$D(value)) return;
this.coefficients[this.coefficients.length - i - 1 ]=value;
});

Clazz.newMeth(C$, 'setParameters$SA$DA$SA',  function (names, values, descriptions) {
if (names != null ) {
for (var i=0; i < Math.min(names.length, this.getParameterCount$()); i++) {
if (names[i] == null  || "".equals$O(names[i].trim$()) ) continue;
this.paramNames[i]=names[i];
}
}this.paramDescriptions=descriptions;
if (values != null ) {
for (var i=0; i < Math.min(values.length, this.getParameterCount$()); i++) {
this.setParameterValue$I$D(i, values[i]);
}
}});

Clazz.newMeth(C$, 'getExpression$S',  function (indepVarName) {
var eqn=Clazz.new_($I$(2,1));
var end=this.coefficients.length - 1;
for (var i=0; i <= end; i++) {
eqn.append$S(this.getParameterName$I(i));
if (end - i > 0) {
eqn.append$S("*");
eqn.append$S(indepVarName);
if (end - i > 1) {
eqn.append$S("^");
eqn.append$I(end - i);
}eqn.append$S(" + ");
}}
return eqn.toString();
});

Clazz.newMeth(C$, 'getName$',  function () {
if (this.name != null ) return this.name;
return "Poly" + (this.getParameterCount$() - 1);
});

Clazz.newMeth(C$, 'setName$S',  function (aName) {
if (aName != null  && !"".equals$O(aName.trim$()) ) {
this.name=aName;
}});

Clazz.newMeth(C$, 'getDescription$',  function () {
if (this.description != null  && !"".equals$O(this.description.trim$()) ) return this.description;
return $I$(1).getString$S("KnownPolynomial.Description") + " " + (this.getParameterCount$() - 1) ;
});

Clazz.newMeth(C$, 'setDescription$S',  function (aDescription) {
this.description=aDescription;
});

Clazz.newMeth(C$, 'clone$',  function () {
var clone=Clazz.new_(C$.c$$DA,[this.coefficients]);
clone.setName$S(this.getName$());
clone.setDescription$S(this.getDescription$());
var names=Clazz.array(String, [this.coefficients.length]);
var values=Clazz.array(Double.TYPE, [this.coefficients.length]);
var desc=Clazz.array(String, [this.coefficients.length]);
for (var i=0; i < this.coefficients.length; i++) {
names[i]=this.getParameterName$I(i);
values[i]=this.getParameterValue$I(i);
desc[i]=this.getParameterDescription$I(i);
}
clone.setParameters$SA$DA$SA(names, values, desc);
return clone;
});

Clazz.newMeth(C$, 'equals$O',  function (f) {
if (!(Clazz.instanceOf(f, "org.opensourcephysics.tools.KnownPolynomial"))) return false;
var poly=f;
var n=this.getParameterCount$();
if (n != poly.getParameterCount$()) return false;
for (var i=0; i < n; i++) {
if (!this.getParameterName$I(i).equals$O(poly.getParameterName$I(i))) return false;
}
return true;
});

Clazz.newMeth(C$, 'toString',  function () {
return "KnownPolynomial: " + this.getExpression$S("<x>");
});

Clazz.newMeth(C$, 'newUserFunction$S',  function ($var) {
var uf=Clazz.new_([this.getName$()],$I$(3,1).c$$S);
var n=this.getParameterCount$();
var params=Clazz.array(String, [n]);
var values=Clazz.array(Double.TYPE, [n]);
var desc=Clazz.array(String, [n]);
for (var i=0; i < n; i++) {
params[i]=this.getParameterName$I(i);
values[i]=this.getParameterValue$I(i);
desc[i]=this.getParameterDescription$I(i);
}
uf.setParameters$SA$DA$SA(params, values, desc);
uf.setExpression$S$SA(this.getExpression$S($var), Clazz.array(String, -1, [$var]));
return uf;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
