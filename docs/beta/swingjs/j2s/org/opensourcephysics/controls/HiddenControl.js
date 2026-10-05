(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'java.util.HashMap','java.text.NumberFormat','java.text.ParsePosition']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HiddenControl", null, null, 'org.opensourcephysics.controls.Control');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(1,1));
this.numberFormat=$I$(2).getInstance$();
},1);

C$.$fields$=[['O',['map','java.util.HashMap','numberFormat','java.text.NumberFormat']]]

Clazz.newMeth(C$, 'setLockValues$Z',  function (lock) {
});

Clazz.newMeth(C$, 'setValue$S$O',  function (par, val) {
this.map.put$O$O(par, val.toString());
});

Clazz.newMeth(C$, 'setValue$S$Z',  function (par, val) {
this.map.put$O$O(par, String.valueOf$Z(val));
});

Clazz.newMeth(C$, 'setValue$S$D',  function (par, val) {
this.map.put$O$O(par, Double.toString$D(val));
});

Clazz.newMeth(C$, 'setValue$S$I',  function (par, val) {
this.map.put$O$O(par, Integer.toString$I(val));
});

Clazz.newMeth(C$, 'scriptValue$S$S',  function (par, val) {
this.map.put$O$O(par, val);
});

Clazz.newMeth(C$, 'getPropertyNames$',  function () {
return this.map.keySet$();
});

Clazz.newMeth(C$, 'getPropertyNamesRaw$',  function () {
return this.map.keySet$();
});

Clazz.newMeth(C$, 'getDouble$S',  function (par) {
var str=this.getString$S(par);
if (str.equals$O("")) {
return 0;
}try {
var parsePosition=Clazz.new_($I$(3,1).c$$I,[0]);
var val=this.numberFormat.parse$S$java_text_ParsePosition(str, parsePosition).doubleValue$();
if (str.length$() == parsePosition.getIndex$()) {
this.println$S("Variable " + par + " is not a number" );
}return val;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.println$S("Variable " + par + " is not a number" );
return 0;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getInt$S',  function (par) {
var val=(this.getDouble$S(par)|0);
return val;
});

Clazz.newMeth(C$, 'getObject$S',  function (name) {
return this.map.get$O(name);
});

Clazz.newMeth(C$, 'getString$S',  function (par) {
var str=this.map.get$O(par);
if (str == null ) {
this.println$S("Variable " + par + " not found." );
return "";
}return str;
});

Clazz.newMeth(C$, 'getBoolean$S',  function (par) {
var str=this.getString$S(par);
if (str.equals$O("")) {
return false;
}str=str.toLowerCase$().trim$();
if (str.equals$O("true")) {
return true;
}if (str.equals$O("false")) {
return false;
}this.println$S("Error: Boolean variable must be true or false.");
return false;
});

Clazz.newMeth(C$, 'println$S',  function (s) {
System.out.println$S(s);
});

Clazz.newMeth(C$, 'println$',  function () {
System.out.println$();
});

Clazz.newMeth(C$, 'print$S',  function (s) {
System.out.println$S(s);
});

Clazz.newMeth(C$, 'clearMessages$',  function () {
});

Clazz.newMeth(C$, 'calculationDone$S',  function (s) {
});

Clazz.newMeth(C$, 'clearValues$',  function () {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
