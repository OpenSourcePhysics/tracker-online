(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "XMLProperty", function(){
});
C$.$classes$=[['WrappedArray',9]];

C$.$fields$=[[]
,['O',['types','String[]']]]

Clazz.newMeth(C$, 'getTypeName$I',  function (type) {
return (type == -1 ? "object" : C$.types[type]);
}, 1);

Clazz.newMeth(C$, 'getTypeCode$S',  function (type) {
switch (type) {
case "int":
return 0;
case "double":
return 1;
case "boolean":
return 2;
case "string":
return 3;
case "array":
return 4;
case "collection":
return 5;
case "object":
return 6;
default:
return -1;
}
}, 1);

Clazz.newMeth(C$, 'getDataType$O',  function (obj) {
if (obj == null ) {
return -1;
}if (Clazz.instanceOf(obj, "java.lang.String")) {
return 3;
} else if (Clazz.instanceOf(obj, "java.util.Collection")) {
return 5;
} else if (Clazz.instanceOf(obj, "org.opensourcephysics.controls.XMLProperty.WrappedArray")) {
return 7;
} else if (obj.getClass$().isArray$()) {
var componentType=obj.getClass$().getComponentType$();
while (componentType.isArray$()){
componentType=componentType.getComponentType$();
}
var type=componentType.getName$();
if ((type.indexOf$S(".") == -1) && ("intdoubleboolean".indexOf$S(type) == -1) ) {
return -1;
}return 4;
} else if (Clazz.instanceOf(obj, "java.lang.Double")) {
return 1;
} else if (Clazz.instanceOf(obj, "java.lang.Integer")) {
return 0;
} else {
return 6;
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.types=Clazz.array(String, -1, ["int", "double", "boolean", "string", "array", "collection", "object", "array"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.XMLProperty, "WrappedArray", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['decimalPlaces'],'O',['val','double[]']]]

Clazz.newMeth(C$, 'c$$DA$I',  function (val, decimalPlaces) {
;C$.$init$.apply(this);
this.val=val;
this.decimalPlaces=decimalPlaces;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(1,1));
sb.append$S("{");
var zeros=".00000000000".substring$I$I(0, this.decimalPlaces + 1);
for (var i=0, n=this.val.length; i < n; i++) {
if (i > 0) sb.append$C(",");
var s=Double.toString$D(this.val[i] == 0  || this.decimalPlaces > 5  ? this.val[i] : this.val[i] + 1.0E-6);
if (s.indexOf$S("E") < 0) {
var pt=s.indexOf$I(".") + 1 + this.decimalPlaces ;
if (s.length$() > pt) {
s=s.substring$I$I(0, pt);
if (s.endsWith$S(zeros)) s=s.substring$I$I(0, pt - zeros.length$());
}}sb.append$S(s);
}
sb.append$S("}");
return sb.toString();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
