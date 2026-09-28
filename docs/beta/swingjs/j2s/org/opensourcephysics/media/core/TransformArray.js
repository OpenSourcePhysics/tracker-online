(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,'java.awt.geom.AffineTransform']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TransformArray");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['array','java.awt.geom.AffineTransform[]']]]

Clazz.newMeth(C$, 'c$$I',  function (initialLength) {
;C$.$init$.apply(this);
initialLength=Math.max(initialLength, 1);
this.array=Clazz.array($I$(1), [initialLength]);
this.array[0]=Clazz.new_($I$(1,1));
p$1.fill$java_awt_geom_AffineTransformA$java_awt_geom_AffineTransform.apply(this, [this.array, this.array[0]]);
}, 1);

Clazz.newMeth(C$, 'get$I',  function (n) {
if (n >= this.array.length) {
this.setLength$I(n + 1);
}return this.array[n];
});

Clazz.newMeth(C$, 'setLength$I',  function (newLength) {
if ((newLength == this.array.length) || (newLength < 1) ) {
return;
}var newArray=Clazz.array($I$(1), [newLength]);
System.arraycopy$O$I$O$I$I(this.array, 0, newArray, 0, Math.min(newLength, this.array.length));
if (newLength > this.array.length) {
var at=this.array[this.array.length - 1];
p$1.fill$java_awt_geom_AffineTransformA$java_awt_geom_AffineTransform.apply(this, [newArray, at]);
}this.array=newArray;
});

Clazz.newMeth(C$, 'fill$java_awt_geom_AffineTransformA$java_awt_geom_AffineTransform',  function (array, at) {
for (var n=0; n < array.length; n++) {
if (array[n] == null ) {
array[n]=Clazz.new_($I$(1,1).c$$java_awt_geom_AffineTransform,[at]);
}}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
