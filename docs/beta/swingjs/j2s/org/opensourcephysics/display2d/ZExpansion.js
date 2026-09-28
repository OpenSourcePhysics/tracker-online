(function(){var P$=Clazz.newPackage("org.opensourcephysics.display2d"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ZExpansion", null, null, 'org.opensourcephysics.numerics.Function');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.expansion=1;
this.k=1;
this.min=-1;
this.max=1;
this.center=0;
this.a2=1;
},1);

C$.$fields$=[['D',['expansion','k','min','max','center','a1','a2']]]

Clazz.newMeth(C$, 'c$$D',  function (expansion) {
;C$.$init$.apply(this);
this.expansion=Math.abs(expansion);
}, 1);

Clazz.newMeth(C$, 'setExpansion$D',  function (expansion) {
this.expansion=Math.abs(expansion);
this.setMinMax$D$D(this.min, this.max);
});

Clazz.newMeth(C$, 'setMinMax$D$D',  function (min, max) {
this.min=min;
this.max=max;
if (min == max ) {
this.k=0;
this.a1=this.a2=this.center=min;
} else if ((min <= 0 ) && (max >= 0 ) ) {
this.center=0;
this.k=this.expansion / Math.max(-min, max);
this.a1=max / (1 - Math.exp(-this.k * max));
this.a2=-min / (1 - Math.exp(this.k * min));
} else if (min > 0 ) {
this.center=min;
this.k=this.expansion / (max - min);
this.a1=this.a2=max / (1 - Math.exp(-this.k * (max - min)));
} else {
this.center=max;
this.k=this.expansion / (max - min);
this.a1=this.a2=-min / (1 - Math.exp(this.k * (max - min)));
}});

Clazz.newMeth(C$, 'evaluate$D',  function (z) {
z=z - this.center;
if (z >= 0 ) {
return this.a1 * (1 - Math.exp(-this.k * z));
}return -this.a2 * (1 - Math.exp(this.k * z));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
