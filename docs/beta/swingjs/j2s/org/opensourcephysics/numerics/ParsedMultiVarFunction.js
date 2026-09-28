(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'org.opensourcephysics.numerics.SuryonoParser']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParsedMultiVarFunction", null, null, 'org.opensourcephysics.numerics.MultiVarFunction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isNull'],'S',['fStr'],'O',['myFunction','org.opensourcephysics.numerics.MultiVarFunction','myFunctionNames','String[]']]]

Clazz.newMeth(C$, 'c$$S$SA$Z',  function (_fStr, $var, allowUnkownIdentifiers) {
;C$.$init$.apply(this);
this.fStr=_fStr;
this.isNull=(this.fStr.equals$O("0") || this.fStr.equals$O("0.0") );
var parser=Clazz.new_($I$(1,1).c$$S$SA$Z,[this.fStr, $var, allowUnkownIdentifiers]);
this.myFunction=parser;
this.myFunctionNames=parser.getFunctionNames$();
}, 1);

Clazz.newMeth(C$, 'evaluate$DA',  function (x) {
return (this.isNull ? 0 : this.myFunction.evaluate$DA(x));
});

Clazz.newMeth(C$, 'toString',  function () {
return "f(x) = " + this.fStr;
});

Clazz.newMeth(C$, 'getFunctionNames$',  function () {
return this.myFunctionNames;
});

Clazz.newMeth(C$, 'evaluatedToNaN$',  function () {
return !this.isNull && Clazz.instanceOf(this.myFunction, "org.opensourcephysics.numerics.SuryonoParser") && (this.myFunction).evaluatedToNaN$()  ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
