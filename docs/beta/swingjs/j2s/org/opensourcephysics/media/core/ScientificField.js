(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ScientificField", null, 'org.opensourcephysics.media.core.NumberField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.zeroLimit=1.0E-10;
},1);

C$.$fields$=[['D',['zeroLimit']]]

Clazz.newMeth(C$, 'c$$I',  function (columns) {
C$.c$$I$I.apply(this, [columns, 4]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (columns, sigfigs) {
;C$.superclazz.c$$I$I$Z.apply(this,[columns, sigfigs, true]);C$.$init$.apply(this);
var s="";
for (var i=0; i < this.nf.sigfigs - 1; i++) {
s+="0";
}
this.applyPattern$S("0." + s + "E0" );
}, 1);

Clazz.newMeth(C$, 'setValue$D',  function (value) {
if (Math.abs(value) < this.zeroLimit ) {
value=0;
}C$.superclazz.prototype.setValue$D.apply(this, [value]);
});

Clazz.newMeth(C$, 'setSigFigs$I',  function (sigfigs) {
if (this.nf.sigfigs == sigfigs) {
return;
}sigfigs=Math.max(sigfigs, 2);
this.nf.sigfigs=Math.min(sigfigs, 6);
});

Clazz.newMeth(C$, 'setExpectedRange$D$D',  function (lower, upper) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
