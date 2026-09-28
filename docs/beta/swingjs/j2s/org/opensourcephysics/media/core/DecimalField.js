(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DecimalField", null, 'org.opensourcephysics.media.core.NumberField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['defaultPattern']]]

Clazz.newMeth(C$, 'c$$I$I',  function (columns, places) {
;C$.superclazz.c$$I$I$Z.apply(this,[columns, 4, true]);C$.$init$.apply(this);
this.setDecimalPlaces$I(places);
}, 1);

Clazz.newMeth(C$, 'setDecimalPlaces$I',  function (places) {
places=Math.min(places, 5);
places=Math.max(places, 1);
var d=".";
var pattern="0" + d;
for (var i=0; i < places; i++) {
pattern+="0";
}
this.defaultPattern=pattern;
if (this.nf.userPattern.equals$O("")) {
this.applyPattern$S(pattern);
}});

Clazz.newMeth(C$, 'setSigFigs$I',  function (sigfigs) {
});

Clazz.newMeth(C$, 'setExpectedRange$D$D',  function (lower, upper) {
});

Clazz.newMeth(C$, 'setFixedPattern$S',  function (pattern) {
if (pattern == null ) pattern="";
pattern=pattern.trim$();
if (pattern.equals$O(this.nf.userPattern)) return;
this.nf.userPattern=pattern;
if (this.nf.userPattern.equals$O("")) {
this.applyPattern$S(this.defaultPattern);
} else {
this.applyPattern$S(this.nf.userPattern);
}this.setValue$D(this.prevValue);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
