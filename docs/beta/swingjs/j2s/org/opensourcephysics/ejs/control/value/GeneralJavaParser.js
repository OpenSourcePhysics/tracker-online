(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.value"),I$=[[0,'org.opensourcephysics.ejs.control.value.ParserSuryono']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GeneralJavaParser", null, 'org.opensourcephysics.ejs.control.value.GeneralParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.javaParser=null;
},1);

C$.$fields$=[['O',['javaParser','org.opensourcephysics.ejs.control.value.ParserSuryono']]]

Clazz.newMeth(C$, 'c$$I',  function (varsNumber) {
Clazz.super_(C$, this);
this.javaParser=Clazz.new_($I$(1,1).c$$I,[varsNumber]);
}, 1);

Clazz.newMeth(C$, 'defineVariable$I$S',  function (index, name) {
this.javaParser.defineVariable$I$S(index, name);
});

Clazz.newMeth(C$, 'setVariable$I$D',  function (index, value) {
this.javaParser.setVariable$I$D(index, value);
});

Clazz.newMeth(C$, 'define$S',  function (definition) {
this.javaParser.define$S(definition);
});

Clazz.newMeth(C$, 'parse$',  function () {
this.javaParser.parse$();
});

Clazz.newMeth(C$, 'evaluate$',  function () {
return this.javaParser.evaluate$();
});

Clazz.newMeth(C$, 'hasError$',  function () {
return this.javaParser.getErrorCode$() != 0;
});

Clazz.newMeth(C$, 'getErrorCode$',  function () {
return this.javaParser.getErrorCode$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
