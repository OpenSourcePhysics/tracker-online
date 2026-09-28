(function(){var P$=Clazz.newPackage("org.opensourcephysics.display.dialogs"),I$=[[0,'java.text.NumberFormat','java.awt.Toolkit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DecimalField", null, 'javax.swing.JTextField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.format=$I$(1).getInstance$();
},1);

C$.$fields$=[['D',['prevValue'],'O',['format','java.text.NumberFormat','maxValue','Double','+minValue']]]

Clazz.newMeth(C$, 'c$$I$I',  function (columns, places) {
;C$.superclazz.c$$I.apply(this,[columns]);C$.$init$.apply(this);
this.setDecimalPlaces$I(places);
}, 1);

Clazz.newMeth(C$, 'getValue$',  function () {
var retValue;
try {
retValue=this.format.parse$S(this.getText$()).doubleValue$();
if ((this.minValue != null ) && (retValue < this.minValue.doubleValue$() ) ) {
this.setValue$D(this.minValue.doubleValue$());
return this.minValue.doubleValue$();
}if ((this.maxValue != null ) && (retValue > this.maxValue.doubleValue$() ) ) {
this.setValue$D(this.maxValue.doubleValue$());
return this.maxValue.doubleValue$();
}} catch (e) {
if (Clazz.exceptionOf(e,"java.text.ParseException")){
$I$(2).getDefaultToolkit$().beep$();
this.setValue$D(this.prevValue);
return this.prevValue;
} else {
throw e;
}
}
return retValue;
});

Clazz.newMeth(C$, 'setValue$D',  function (value) {
if (this.minValue != null ) {
value=Math.max(value, this.minValue.doubleValue$());
}if (this.maxValue != null ) {
value=Math.min(value, this.maxValue.doubleValue$());
}this.setText$S(this.format.format$D(value));
this.prevValue=value;
});

Clazz.newMeth(C$, 'setDecimalPlaces$I',  function (places) {
places=Math.abs(places);
places=Math.min(places, 5);
this.format.setMinimumIntegerDigits$I(1);
this.format.setMinimumFractionDigits$I(places);
this.format.setMaximumFractionDigits$I(places);
});

Clazz.newMeth(C$, 'setMinValue$D',  function (min) {
this.minValue= new Double(min);
});

Clazz.newMeth(C$, 'setMaxValue$D',  function (max) {
this.maxValue= new Double(max);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
