(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.value"),I$=[[0,'org.opensourcephysics.ejs.control.value.ParserSuryono','org.opensourcephysics.ejs.control.value.GeneralJavaParser','org.opensourcephysics.ejs.control.value.GeneralParser']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParserAndVariables");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['parser','org.opensourcephysics.ejs.control.value.GeneralParser','vars','String[]']]]

Clazz.newMeth(C$, 'getParser$',  function () {
return this.parser;
});

Clazz.newMeth(C$, 'getVariables$',  function () {
return this.vars;
});

Clazz.newMeth(C$, 'c$$Z$S',  function (javaSyntax, expression) {
;C$.$init$.apply(this);
if (javaSyntax) {
this.vars=$I$(1).getVariableList$S(expression);
this.parser=Clazz.new_($I$(2,1).c$$I,[this.vars.length]);
} else {
try {
this.parser=Clazz.new_($I$(3,1).c$$I,[0]);
this.vars=this.parser.freeParser.parseUnknown$S(expression);
} catch (_exc) {
if (Clazz.exceptionOf(_exc,"Exception")){
this.vars=$I$(1).getVariableList$S(expression);
this.parser=Clazz.new_($I$(3,1).c$$I,[this.vars.length]);
} else {
throw _exc;
}
}
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
