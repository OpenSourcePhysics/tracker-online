(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.value"),I$=[[0,'org.opensourcephysics.ejs.control.value.ObjectValue','org.opensourcephysics.ejs.control.value.BooleanValue','org.opensourcephysics.ejs.control.value.DoubleValue','org.opensourcephysics.ejs.control.value.IntegerValue','org.opensourcephysics.ejs.control.value.StringValue','java.util.StringTokenizer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Value");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['type']]
,['O',['VALUE_NULL','org.opensourcephysics.ejs.control.value.ObjectValue','VALUE_FALSE','org.opensourcephysics.ejs.control.value.BooleanValue','+VALUE_TRUE']]]

Clazz.newMeth(C$, 'c$$I',  function (type) {
;C$.$init$.apply(this);
this.type=type;
}, 1);

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'copyValue$org_opensourcephysics_ejs_control_value_Value',  function (_source) {
switch (this.type) {
case 0:
(this).value=_source.getObject$();
break;
case 1:
(this).setValue$org_opensourcephysics_ejs_control_value_Value(_source);
break;
case 2:
(this).value=_source.getDouble$();
break;
case 3:
break;
case 4:
(this).value=_source.getInteger$();
break;
case 5:
(this).value=_source.getString$();
break;
}
});

Clazz.newMeth(C$, 'cloneValue$',  function () {
switch (this.type) {
case 0:
return Clazz.new_([this.getObject$()],$I$(1,1).c$$O);
case 1:
return Clazz.new_([this.getBoolean$()],$I$(2,1).c$$Z);
case 2:
return Clazz.new_([this.getDouble$()],$I$(3,1).c$$D);
case 3:
break;
case 4:
return Clazz.new_([this.getInteger$()],$I$(4,1).c$$I);
case 5:
return Clazz.new_([this.getString$()],$I$(5,1).c$$S);
}
return null;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getString$();
});

Clazz.newMeth(C$, 'parseConstantOrArray$S$Z',  function (_input, _silentMode) {
var inputTrimmed=_input.trim$();
var isArray=false;
var hasDoubles=false;
var hasInts=false;
var hasBooleans=false;
var hasStrings=false;
if (inputTrimmed.startsWith$S("new ")) {
var index=inputTrimmed.indexOf$I("{");
if (index > 0) {
var prevStr=inputTrimmed.substring$I$I(4, index);
if (prevStr.contains$CharSequence("double")) hasDoubles=true;
 else if (prevStr.contains$CharSequence("int")) hasInts=true;
 else if (prevStr.contains$CharSequence("boolean")) hasBooleans=true;
 else if (prevStr.contains$CharSequence("String")) hasStrings=true;
inputTrimmed=inputTrimmed.substring$I(index);
}}if (inputTrimmed.startsWith$S("{") && inputTrimmed.endsWith$S("}") ) {
_input=inputTrimmed.substring$I$I(1, inputTrimmed.length$() - 1);
isArray=true;
}if (inputTrimmed.startsWith$S("\"") && inputTrimmed.endsWith$S("\"") ) return C$.parseConstant$S$Z(_input, _silentMode);
var tkn=Clazz.new_($I$(6,1).c$$S$S,[_input, ","]);
var dim=tkn.countTokens$();
if (!isArray && dim <= 1 ) return C$.parseConstant$S$Z(_input, _silentMode);
var data=Clazz.array(C$, [dim]);
for (var i=0; i < dim; i++) {
data[i]=C$.parseConstant$S$Z(tkn.nextToken$(), _silentMode);
if (data[i] == null ) {
return C$.parseConstant$S$Z(_input, _silentMode);
}if (Clazz.instanceOf(data[i], "org.opensourcephysics.ejs.control.value.DoubleValue")) {
hasDoubles=true;
} else if (Clazz.instanceOf(data[i], "org.opensourcephysics.ejs.control.value.IntegerValue")) {
hasInts=true;
} else if (Clazz.instanceOf(data[i], "org.opensourcephysics.ejs.control.value.BooleanValue")) {
hasBooleans=true;
} else if (Clazz.instanceOf(data[i], "org.opensourcephysics.ejs.control.value.StringValue")) {
hasStrings=true;
}}
if (hasDoubles) {
var doubleArray=Clazz.array(Double.TYPE, [dim]);
for (var i=0; i < dim; i++) {
doubleArray[i]=data[i].getDouble$();
}
return Clazz.new_($I$(1,1).c$$O,[doubleArray]);
} else if (hasInts) {
var intArray=Clazz.array(Integer.TYPE, [dim]);
for (var i=0; i < dim; i++) {
intArray[i]=data[i].getInteger$();
}
return Clazz.new_($I$(1,1).c$$O,[intArray]);
} else if (hasBooleans) {
var booleanArray=Clazz.array(Boolean.TYPE, [dim]);
for (var i=0; i < dim; i++) {
booleanArray[i]=data[i].getBoolean$();
}
return Clazz.new_($I$(1,1).c$$O,[booleanArray]);
} else if (hasStrings) {
var stringArray=Clazz.array(String, [dim]);
for (var i=0; i < dim; i++) {
stringArray[i]=C$.removeScapes$S(data[i].getString$());
}
return Clazz.new_($I$(1,1).c$$O,[stringArray]);
}return C$.parseConstant$S$Z(_input, _silentMode);
}, 1);

Clazz.newMeth(C$, 'removeScapes$S',  function (str) {
var pt=0;
var l=str.length$();
while ((pt=str.indexOf$I$I("\\", pt)) >= 0){
if (pt == --l) return str;
str=str.substring$I$I(0, pt) + str.substring$I(++pt);
}
return str;
}, 1);

Clazz.newMeth(C$, 'parseConstant$S$Z',  function (_input, _silentMode) {
_input=_input.trim$();
if (_input.length$() == 0) return null;
var c0=_input.charAt$I(0);
switch (c0.$c()) {
case 110:
return (_input.equals$O("null") ? C$.VALUE_NULL : null);
case 34:
if (_input.length$() <= 1) return null;
if (!_input.endsWith$S("\"")) {
return null;
}return Clazz.new_([_input.substring$I$I(1, _input.length$() - 1)],$I$(5,1).c$$S);
case 39:
if (!_input.endsWith$S("\'")) {
return null;
}return Clazz.new_([_input.substring$I$I(1, _input.length$() - 1)],$I$(5,1).c$$S);
case 116:
return (_input.equals$O("true") ? C$.VALUE_TRUE : null);
case 102:
return (_input.equals$O("false") ? C$.VALUE_FALSE : null);
case 77:
return null;
default:
if (_input.indexOf$I(".") >= 0) {
try {
return Clazz.new_([Double.parseDouble$S(_input)],$I$(3,1).c$$D);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (!_silentMode) System.err.println$S("Value : Error 2! Incorrect input to parse " + _input);
} else {
throw e;
}
}
return null;
}try {
return ("+-0123456789".indexOf$I(c0) < 0 ? null : Clazz.new_([Integer.parseInt$S(_input)],$I$(4,1).c$$I));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (!_silentMode) System.err.println$S("Value : Error 3! Incorrect input to parse " + _input);
return null;
} else {
throw e;
}
}
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.VALUE_NULL=Clazz.new_($I$(1,1).c$$O,[null]);
C$.VALUE_FALSE=Clazz.new_($I$(2,1).c$$Z,[false]);
C$.VALUE_TRUE=Clazz.new_($I$(2,1).c$$Z,[true]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
