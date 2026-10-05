(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'java.awt.Toolkit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IntegerField", null, 'org.opensourcephysics.media.core.NumberField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I',  function (columns) {
;C$.superclazz.c$$I$I$Z.apply(this,[columns, 4, true]);C$.$init$.apply(this);
C$.superclazz.prototype.setParseIntegerOnly$.apply(this, []);
this.setIntValue$I((this.prevValue|0));
}, 1);

Clazz.newMeth(C$, 'getIntValue$',  function () {
var retValue;
var s=this.getText$().trim$();
if ((this.units != null ) && !this.units.equals$O("") ) {
var n=s.indexOf$S(this.units);
while (n > -1){
s=s.substring$I$I(0, n);
n=s.indexOf$S(this.units);
}
}if (s.equals$O(this.nf.format$D(this.prevValue))) {
return (this.prevValue|0);
}try {
retValue=Integer.parseInt$S(s);
if ((this.minValue != null ) && (retValue < this.minValue.intValue$()) ) {
this.setIntValue$I(this.minValue.intValue$());
return this.minValue.intValue$();
}if ((this.maxValue != null ) && (retValue > this.maxValue.intValue$()) ) {
this.setIntValue$I(this.maxValue.intValue$());
return this.maxValue.intValue$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(1).getDefaultToolkit$().beep$();
this.setIntValue$I((this.prevValue|0));
return (this.prevValue|0);
} else {
throw e;
}
}
return retValue;
});

Clazz.newMeth(C$, 'setIntValue$I',  function (value) {
if (this.minValue != null ) {
value=Math.max(value, this.minValue.intValue$());
}if (this.maxValue != null ) {
value=Math.min(value, this.maxValue.intValue$());
}var s=this.nf.format$D(value);
if (this.units != null ) {
s+=this.units;
}if (!s.equals$O(this.getText$())) {
this.setText$S(s);
}this.prevValue=value;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
