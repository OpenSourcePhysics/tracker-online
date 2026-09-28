(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'org.opensourcephysics.tools.UserFunction','org.opensourcephysics.tools.KnownPolynomial','org.opensourcephysics.numerics.ParsedMultiVarFunction',['org.opensourcephysics.tools.UserFunction','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UserFunction", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, [['org.opensourcephysics.tools.FunctionEditor','org.opensourcephysics.tools.FunctionEditor.FObject'], 'org.opensourcephysics.tools.KnownFunction', 'org.opensourcephysics.numerics.MultiVarFunction', 'Cloneable']);
C$.$classes$=[['Loader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.paramNames=Clazz.array(String, [0]);
this.paramValues=Clazz.array(Double.TYPE, [0]);
this.paramDescriptions=Clazz.array(String, [0]);
this.functionNames=Clazz.array(String, [0]);
this.myFunction=null;
this.vars=Clazz.array(String, -1, ["x"]);
this.references=Clazz.array(C$, [0]);
this.nameEditable=true;
this.myval=NaN;
this.dummyInputString="0";
},1);

C$.$fields$=[['Z',['nameEditable','isNull'],'D',['myval'],'S',['name','description','dummyInputString','clearExpr','clearInput','paddedExpr','paddedInput'],'O',['+paramNames','paramValues','double[]','paramDescriptions','String[]','+functionNames','myFunction','org.opensourcephysics.numerics.ParsedMultiVarFunction','vars','String[]','references','org.opensourcephysics.tools.UserFunction[]','polynomial','org.opensourcephysics.tools.KnownPolynomial','temp','double[]']]
,['O',['dummyVars','String[]']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.setName$S(name);
try {
this.myFunction=Clazz.new_(["0", Clazz.array(String, [0]), false],$I$(3,1).c$$S$SA$Z);
this.functionNames=this.myFunction.getFunctionNames$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"org.opensourcephysics.numerics.ParserException")){
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'c$$S$SA$S',  function (name, funcVars, description) {
C$.c$$S.apply(this, [name]);
this.setNameEditable$Z(false);
this.setExpression$S$SA("0", funcVars);
this.setDescription$S(description);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_KnownPolynomial',  function (poly) {
C$.c$$S.apply(this, [poly.getName$()]);
this.polynomial=poly;
this.setName$S(poly.getName$());
this.setDescription$S(poly.getDescription$());
var params=Clazz.array(String, [poly.getParameterCount$()]);
var paramValues=Clazz.array(Double.TYPE, [poly.getParameterCount$()]);
var desc=Clazz.array(String, [poly.getParameterCount$()]);
for (var i=0; i < params.length; i++) {
params[i]=poly.getParameterName$I(i);
paramValues[i]=poly.getParameterValue$I(i);
desc[i]=poly.getParameterDescription$I(i);
}
this.setParameters$SA$DA$SA(params, paramValues, desc);
this.setExpression$S$SA(poly.getExpression$S("x"), Clazz.array(String, -1, ["x"]));
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
if (!this.isNameEditable$()) {
return;
}this.name=name;
});

Clazz.newMeth(C$, 'isNameEditable$',  function () {
return this.nameEditable;
});

Clazz.newMeth(C$, 'setNameEditable$Z',  function (editable) {
this.nameEditable=editable;
});

Clazz.newMeth(C$, 'getIndependentVariable$',  function () {
return this.vars[0];
});

Clazz.newMeth(C$, 'getIndependentVariables$',  function () {
return this.vars;
});

Clazz.newMeth(C$, 'getInputString$',  function () {
return this.clearInput;
});

Clazz.newMeth(C$, 'getExpression$',  function () {
return (this.clearExpr == null  ? p$1.generateExpressionForVars.apply(this, []) : this.clearExpr);
});

Clazz.newMeth(C$, 'getExpression$S',  function (indepVarName) {
return this.getExpression$SA(Clazz.array(String, -1, [indepVarName]));
});

Clazz.newMeth(C$, 'getExpression$SA',  function (varNames) {
this.vars=varNames;
return p$1.generateExpressionForVars.apply(this, []);
});

Clazz.newMeth(C$, 'getFullExpression$SA',  function (varNames) {
this.getExpression$SA(varNames);
var s=this.paddedExpr;
for (var i=0, n=this.references.length; i < n; i++) {
var f=this.references[i];
s=C$.replaceAllWords$S$S$S(s, f.getName$(), "(" + f.getFullExpression$SA(varNames) + ")" );
}
return s.replaceAll$S$S(" ", "");
});

Clazz.newMeth(C$, 'setExpression$S$SA',  function (exp, vars) {
this.paddedInput=exp;
this.clearInput=exp=exp.replaceAll$S$S(" ", "");
this.isNull=(exp.equals$O("0"));
var names=p$1.setVariables$SA.apply(this, [vars]);
var hasDummy=false;
if (!this.isNull) {
exp=C$.padNames$S(exp);
for (var i=0; i < vars.length; i++) {
hasDummy=(hasDummy || exp.indexOf$S(C$.dummyVars[i]) >= 0 );
exp=exp.replaceAll$S$S(" " + vars[i] + " " , " " + C$.dummyVars[i] + " " );
}
}this.dummyInputString=exp;
try {
this.myFunction=Clazz.new_($I$(3,1).c$$S$SA$Z,[exp, names, false]);
if (this.isNull || exp.indexOf$S("=") < 0 ) {
if (hasDummy) {
p$1.generateExpressionForVars.apply(this, []);
} else {
this.clearExpr=this.clearInput;
}return true;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"org.opensourcephysics.numerics.ParserException")){
try {
this.myFunction=Clazz.new_($I$(3,1).c$$S$SA$Z,["0", names, false]);
} catch (ex2) {
if (Clazz.exceptionOf(ex2,"org.opensourcephysics.numerics.ParserException")){
} else {
throw ex2;
}
}
this.clearExpr="0";
} else {
throw ex;
}
}
return false;
});

Clazz.newMeth(C$, 'setVariables$SA',  function (vars) {
this.vars=vars;
var names=Clazz.array(String, [vars.length + this.paramNames.length + this.references.length ]);
for (var i=0; i < vars.length; i++) {
names[i]=C$.dummyVars[i];
}
for (var i=0; i < this.paramNames.length; i++) {
names[i + vars.length]=this.paramNames[i];
}
for (var i=0; i < this.references.length; i++) {
names[i + vars.length + this.paramNames.length ]=this.references[i].getName$();
}
return names;
}, p$1);

Clazz.newMeth(C$, 'generateExpressionForVars',  function () {
var exp=this.dummyInputString;
for (var i=0; i < this.vars.length; i++) {
exp=exp.replaceAll$S$S(C$.dummyVars[i], this.vars[i]);
}
this.paddedExpr=exp;
return this.clearInput=this.clearExpr=exp.replaceAll$S$S(" ", "");
}, p$1);

Clazz.newMeth(C$, 'getParameterCount$',  function () {
return this.paramNames.length;
});

Clazz.newMeth(C$, 'getParameterName$I',  function (i) {
return this.paramNames[i];
});

Clazz.newMeth(C$, 'getParameterValue$I',  function (i) {
return this.paramValues[i];
});

Clazz.newMeth(C$, 'setParameterValue$I$D',  function (i, value) {
this.paramValues[i]=value;
});

Clazz.newMeth(C$, 'setParameters$SA$DA',  function (names, values) {
this.paramNames=names;
this.paramValues=values;
});

Clazz.newMeth(C$, 'setParameters$SA$DA$SA',  function (names, values, descriptions) {
this.paramNames=names;
this.paramValues=values;
if (descriptions != null ) {
this.paramDescriptions=descriptions;
}this.temp=Clazz.array(Double.TYPE, [values.length]);
});

Clazz.newMeth(C$, 'updateReferenceParameters$',  function () {
for (var i=0, n=this.references.length; i < n; i++) {
var next=this.references[i];
next.setParameters$SA$DA$SA(this.paramNames, this.paramValues, this.paramDescriptions);
next.updateReferenceParameters$();
}
});

Clazz.newMeth(C$, 'setReferences$org_opensourcephysics_tools_UserFunctionA',  function (functions) {
this.references=functions;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S',  function (desc) {
this.description=desc;
});

Clazz.newMeth(C$, 'getParameterDescription$I',  function (i) {
if (i >= this.paramDescriptions.length) return null;
return this.paramDescriptions[i];
});

Clazz.newMeth(C$, 'getFunctionNames$',  function () {
return this.functionNames;
});

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
if (this.myFunction == null ) {
return NaN;
}p$1.ensureBufferLength$I.apply(this, [1]);
this.temp[0]=x;
System.arraycopy$O$I$O$I$I(this.paramValues, 0, this.temp, 1, this.paramValues.length);
for (var pt=1 + this.paramValues.length, n=this.references.length, i=0; i < n; ) {
this.temp[pt++]=this.references[i++].evaluate$D(x);
}
return this.myFunction.evaluate$DA(this.temp);
});

Clazz.newMeth(C$, 'evaluate$DA',  function (x) {
if (this.myFunction == null ) {
return NaN;
}p$1.ensureBufferLength$I.apply(this, [x.length]);
System.arraycopy$O$I$O$I$I(x, 0, this.temp, 0, x.length);
System.arraycopy$O$I$O$I$I(this.paramValues, 0, this.temp, x.length, this.paramValues.length);
for (var pt=x.length + this.paramValues.length, n=this.references.length, i=0; i < n; ) {
this.temp[pt++]=this.references[i++].evaluate$DA(x);
}
return this.myFunction.evaluate$DA(this.temp);
});

Clazz.newMeth(C$, 'evaluateMyVal$DA',  function (x) {
if (this.myFunction == null ) {
return NaN;
}if (this.isNull) return 0;
if (Double.isNaN$D(this.myval)) {
p$1.ensureBufferLength$I.apply(this, [x.length]);
System.arraycopy$O$I$O$I$I(x, 0, this.temp, 0, x.length);
System.arraycopy$O$I$O$I$I(this.paramValues, 0, this.temp, x.length, this.paramValues.length);
for (var pt=x.length + this.paramValues.length, n=this.references.length, i=0; i < n; ) {
this.temp[pt++]=this.references[i++].evaluateMyVal$DA(x);
}
this.myval=this.myFunction.evaluate$DA(this.temp);
}return this.myval;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.myval=NaN;
for (var i=this.references.length; --i >= 0; ) {
this.references[i].clear$();
}
});

Clazz.newMeth(C$, 'ensureBufferLength$I',  function (xLen) {
var n=xLen + this.paramValues.length + this.references.length ;
if (this.temp == null  || this.temp.length < n ) this.temp=Clazz.array(Double.TYPE, [n]);
}, p$1);

Clazz.newMeth(C$, 'evaluatedToNaN$',  function () {
return (!this.isNull && this.myFunction != null   && this.myFunction.evaluatedToNaN$() );
});

Clazz.newMeth(C$, 'clone$',  function () {
var f=Clazz.new_(C$.c$$S,[this.name]);
f.setDescription$S(this.description);
f.setNameEditable$Z(this.nameEditable);
f.setParameters$SA$DA$SA(this.paramNames, this.paramValues, this.paramDescriptions);
var refs=Clazz.array(C$, [this.references.length]);
for (var i=0; i < refs.length; i++) {
refs[i]=this.references[i].clone$();
}
f.setReferences$org_opensourcephysics_tools_UserFunctionA(refs);
f.setExpression$S$SA(this.dummyInputString, this.vars);
f.polynomial=(this.polynomial == null  ? null : this.polynomial.clone$());
return f;
});

Clazz.newMeth(C$, 'equals$O',  function (f) {
if (!(Clazz.instanceOf(f, "org.opensourcephysics.tools.UserFunction"))) return false;
var uf=f;
if (!this.getName$().equals$O(uf.getName$())) return false;
if (!this.getInputString$().equals$O(uf.getInputString$())) return false;
var n=this.getParameterCount$();
if (n != uf.getParameterCount$()) return false;
for (var i=0; i < n; i++) {
if (!this.getParameterName$I(i).equals$O(uf.getParameterName$I(i))) return false;
}
return true;
});

Clazz.newMeth(C$, 'updatePolynomial$',  function () {
if (this.polynomial == null ) return false;
this.polynomial.setName$S(this.getName$());
this.polynomial.setDescription$S(this.getDescription$());
this.polynomial.setParameters$SA$DA$SA(this.paramNames, this.paramValues, this.paramDescriptions);
return true;
});

Clazz.newMeth(C$, 'replaceParameterNameInExpression$S$S',  function (oldName, newName) {
var exp=C$.replaceAllWords$S$S$S(this.paddedInput, oldName, newName);
return (exp != null  && this.setExpression$S$SA(exp, this.getIndependentVariables$())  ? exp : null);
});

Clazz.newMeth(C$, 'padNames$S',  function (exp) {
return exp.replaceAll$S$S("([A-Za-z_\u03b8\u03c9]\\w*)", " $1 ").replaceAll$S$S("([0123456789\\.]) ([eE])", "$1$2").replaceAll$S$S("([eE]) ([-])", "$1$2");
}, 1);

Clazz.newMeth(C$, 'replaceAllWords$S$S$S',  function (paddedExp, key, rep) {
return paddedExp.replaceAll$S$S(" " + key + " " , " " + rep + " " );
}, 1);

Clazz.newMeth(C$, 'containsWord$S$S',  function (paddedExp, key) {
return (paddedExp.indexOf$S(" " + key + " " ) >= 0);
}, 1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(4,1));
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return "[UserFunction " + this.name + " = " + this.myFunction.toString() + "]" ;
});

Clazz.newMeth(C$, 'isValid$',  function () {
return this.clearExpr == this.clearInput;
});

Clazz.newMeth(C$, 'newUserFunction$S',  function ($var) {
return this.clone$();
});

C$.$static$=function(){C$.$static$=0;
C$.dummyVars=Clazz.array(String, -1, ["\'", "@", "`", "~", "#"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.UserFunction, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var f=obj;
control.setValue$S$O("name", f.getName$());
control.setValue$S$O("description", f.getDescription$());
control.setValue$S$Z("name_editable", f.isNameEditable$());
control.setValue$S$O("parameter_names", f.paramNames);
control.setValue$S$O("parameter_values", f.paramValues);
control.setValue$S$O("parameter_descriptions", f.paramDescriptions);
control.setValue$S$O("variables", f.getIndependentVariables$());
control.setValue$S$O("expression", f.getInputString$());
if (f.polynomial != null ) {
control.setValue$S$O("polynomial", f.polynomial.getCoefficients$());
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var name=control.getString$S("name");
return Clazz.new_($I$(1,1).c$$S,[name]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var f=obj;
f.setName$S(control.getString$S("name"));
f.setDescription$S(control.getString$S("description"));
if (control.getPropertyNamesRaw$().contains$O("name_editable")) {
f.setNameEditable$Z(control.getBoolean$S("name_editable"));
}var names=control.getObject$S("parameter_names");
if (names != null ) {
var values=control.getObject$S("parameter_values");
var desc=control.getObject$S("parameter_descriptions");
f.setParameters$SA$DA$SA(names, values, desc);
}var vars=control.getObject$S("variables");
if (vars == null ) {
var $var=control.getString$S("variable");
vars=Clazz.array(String, -1, [$var]);
}f.setExpression$S$SA(control.getString$S("expression"), vars);
var coeff=control.getObject$S("polynomial");
if (coeff != null ) {
f.polynomial=Clazz.new_($I$(2,1).c$$DA,[coeff]);
}return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
