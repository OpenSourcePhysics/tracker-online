(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.value"),I$=[[0,'org.opensourcephysics.numerics.SuryonoParser']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GeneralParser");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.freeParser=null;
},1);

C$.$fields$=[['O',['freeParser','org.opensourcephysics.numerics.SuryonoParser']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (varsNumber) {
;C$.$init$.apply(this);
this.freeParser=Clazz.new_($I$(1,1).c$$I,[varsNumber]);
}, 1);

Clazz.newMeth(C$, 'defineVariable$I$S',  function (index, name) {
this.freeParser.defineVariable$I$S(index + 1, name);
});

Clazz.newMeth(C$, 'setVariable$I$D',  function (index, value) {
this.freeParser.setVariable$I$D(index + 1, value);
});

Clazz.newMeth(C$, 'define$S',  function (definition) {
this.freeParser.define$S(definition);
});

Clazz.newMeth(C$, 'parse$',  function () {
this.freeParser.parse$();
});

Clazz.newMeth(C$, 'evaluate$',  function () {
return this.freeParser.evaluate$();
});

Clazz.newMeth(C$, 'hasError$',  function () {
return this.freeParser.getErrorCode$() != 0;
});

Clazz.newMeth(C$, 'getErrorCode$',  function () {
return this.freeParser.getErrorCode$();
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
