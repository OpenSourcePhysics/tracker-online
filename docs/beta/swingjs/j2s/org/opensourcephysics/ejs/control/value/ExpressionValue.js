(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.value"),p$1={},I$=[[0,'java.util.StringTokenizer','org.opensourcephysics.ejs.control.value.ParserSuryono']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ExpressionValue", null, 'org.opensourcephysics.ejs.control.value.Value');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isArray'],'S',['expression'],'O',['group','org.opensourcephysics.ejs.control.GroupControl','parser','org.opensourcephysics.ejs.control.value.ParserSuryono','vars','String[]','arrayParser','org.opensourcephysics.ejs.control.value.ParserSuryono[]','arrayVars','String[][]','arrayValues','double[]']]]

Clazz.newMeth(C$, 'c$$S$org_opensourcephysics_ejs_control_GroupControl',  function (_expression, _group) {
;C$.superclazz.c$$I.apply(this,[3]);C$.$init$.apply(this);
this.group=_group;
this.expression= String.instantialize(_expression.trim$());
p$1.processExpression.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getBoolean$',  function () {
return (this.getDouble$() != 0 );
});

Clazz.newMeth(C$, 'getInteger$',  function () {
return (this.getDouble$()|0);
});

Clazz.newMeth(C$, 'getDouble$',  function () {
for (var i=0, n=this.vars.length; i < n; i++) {
this.parser.setVariable$I$D(i, this.group.getDouble$S(this.vars[i]));
}
return this.parser.evaluate$();
});

Clazz.newMeth(C$, 'getString$',  function () {
return String.valueOf$D(this.getDouble$());
});

Clazz.newMeth(C$, 'getObject$',  function () {
if (this.isArray) {
for (var k=0, m=this.arrayVars.length; k < m; k++) {
for (var i=0, n=this.arrayVars[k].length; i < n; i++) {
this.arrayParser[k].setVariable$I$D(i, this.group.getDouble$S(this.arrayVars[k][i]));
}
this.arrayValues[k]=this.arrayParser[k].evaluate$();
}
return this.arrayValues;
}return null;
});

Clazz.newMeth(C$, 'setExpression$S',  function (_expression) {
this.expression= String.instantialize(_expression.trim$());
p$1.processExpression.apply(this, []);
});

Clazz.newMeth(C$, 'copyValue$org_opensourcephysics_ejs_control_value_Value',  function (_source) {
if (Clazz.instanceOf(_source, "org.opensourcephysics.ejs.control.value.ExpressionValue")) {
this.expression= String.instantialize((_source).expression);
} else {
this.expression= String.instantialize(_source.getString$());
}p$1.processExpression.apply(this, []);
});

Clazz.newMeth(C$, 'cloneValue$',  function () {
return Clazz.new_(C$.c$$S$org_opensourcephysics_ejs_control_GroupControl,[this.expression, this.group]);
});

Clazz.newMeth(C$, 'processExpression',  function () {
if (this.expression.startsWith$S("{") && this.expression.endsWith$S("}") ) {
var text=this.expression.substring$I$I(1, this.expression.length$() - 1);
var tkn=Clazz.new_($I$(1,1).c$$S$S,[text, ","]);
var dim=tkn.countTokens$();
this.arrayParser=Clazz.array($I$(2), [dim]);
this.arrayVars=Clazz.array(String, [dim, null]);
this.arrayValues=Clazz.array(Double.TYPE, [dim]);
this.isArray=true;
var k=0;
while (tkn.hasMoreTokens$()){
var token=tkn.nextToken$();
this.arrayVars[k]=$I$(2).getVariableList$S(token);
this.arrayParser[k]=Clazz.new_($I$(2,1).c$$I,[this.arrayVars[k].length]);
for (var i=0, n=this.arrayVars[k].length; i < n; i++) {
this.arrayParser[k].defineVariable$I$S(i, this.arrayVars[k][i]);
}
this.arrayParser[k].define$S(token);
this.arrayParser[k].parse$();
++k;
}
} else {
this.vars=$I$(2).getVariableList$S(this.expression);
this.parser=Clazz.new_($I$(2,1).c$$I,[this.vars.length]);
for (var i=0, n=this.vars.length; i < n; i++) {
this.parser.defineVariable$I$S(i, this.vars[i]);
}
this.parser.define$S(this.expression);
this.parser.parse$();
this.isArray=false;
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
