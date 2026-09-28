(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.value"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ObjectValue", null, 'org.opensourcephysics.ejs.control.value.Value');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['value','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$O',  function (_val) {
;C$.superclazz.c$$I.apply(this,[0]);C$.$init$.apply(this);
this.value=_val;
}, 1);

Clazz.newMeth(C$, 'getBoolean$',  function () {
if (this.value == null  || this.value === Boolean.FALSE  ) {
return false;
}if (this.value === Boolean.TRUE ) return true;
if (Clazz.instanceOf(this.value, "java.lang.Number")) return (this.value).doubleValue$() != 0 ;
return this.value.toString().equals$O("true");
});

Clazz.newMeth(C$, 'getInteger$',  function () {
if (Clazz.instanceOf(this.value, "java.lang.Number")) return (this.value).intValue$();
return Long.$ival(Math.round$D(this.getDouble$()));
});

Clazz.newMeth(C$, 'getDouble$',  function () {
try {
if (Clazz.instanceOf(this.value, "java.lang.Number")) return (this.value).doubleValue$();
return Double.valueOf$S(this.value.toString()).doubleValue$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"NumberFormatException")){
return 0.0;
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'getString$',  function () {
if (this.value == null ) return null;
if (Clazz.instanceOf(this.value, Clazz.array(Double.TYPE, -1))) {
var data=this.value;
var txt="new double[]{";
for (var i=0; i < data.length; i++) {
if (i > 0) txt+=",";
txt+=new Double(data[i]).toString();
}
return txt + "}";
}if (Clazz.instanceOf(this.value, Clazz.array(Integer.TYPE, -1))) {
var data=this.value;
var txt="new int[]{";
for (var i=0; i < data.length; i++) {
if (i > 0) txt+=",";
txt+=data[i];
}
return txt + "}";
}if (Clazz.instanceOf(this.value, Clazz.array(Double.TYPE, -2))) {
var data=this.value;
var txt="new double[][]{";
for (var i=0; i < data.length; i++) {
if (i > 0) txt+=",{";
 else txt+="{";
for (var j=0; j < data[i].length; j++) {
if (j > 0) txt+=",";
txt+=new Double(data[i][j]).toString();
}
txt+="}";
}
return txt + "}";
}if (Clazz.instanceOf(this.value, Clazz.array(Integer.TYPE, -2))) {
var data=this.value;
var txt="new int[][]{";
for (var i=0; i < data.length; i++) {
if (i > 0) txt+=",{";
 else txt+="{";
for (var j=0; j < data[i].length; j++) {
if (j > 0) txt+=",";
txt+=data[i][j];
}
txt+="}";
}
return txt + "}";
}if (Clazz.instanceOf(this.value, Clazz.array(Double.TYPE, -3))) {
var data=this.value;
var txt="new double[][][]{";
for (var i=0; i < data.length; i++) {
if (i > 0) txt+=",{";
 else txt+="{";
for (var j=0; j < data[i].length; j++) {
if (j > 0) txt+=",{";
 else txt+="{";
for (var k=0; k < data[i][j].length; k++) {
if (k > 0) txt+=",";
txt+=new Double(data[i][j][k]).toString();
}
txt+="}";
}
txt+="}";
}
return txt + "}";
}if (Clazz.instanceOf(this.value, Clazz.array(Integer.TYPE, -3))) {
var data=this.value;
var txt="new int[][][]{";
for (var i=0; i < data.length; i++) {
if (i > 0) txt+=",{";
 else txt+="{";
for (var j=0; j < data[i].length; j++) {
if (j > 0) txt+=",{";
 else txt+="{";
for (var k=0; k < data[i][j].length; k++) {
if (k > 0) txt+=",";
txt+=data[i][j][k];
}
txt+="}";
}
txt+="}";
}
return txt + "}";
}return this.value.toString();
});

Clazz.newMeth(C$, 'getObject$',  function () {
return this.value;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
