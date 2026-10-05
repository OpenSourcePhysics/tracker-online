(function(){var P$=Clazz.newPackage("org.opensourcephysics.ejs.control.value"),p$1={},I$=[[0,'java.util.Vector','java.util.StringTokenizer','java.util.Hashtable']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParserSuryono");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$function="";
this.postfix_code="";
this.valid=false;
this.ISBOOLEAN=false;
this.INRELATION=false;
this.refvalue=null;
this.stack=Clazz.array(Double.TYPE, [50]);
this.references=null;
this.refnames=null;
},1);

C$.$fields$=[['Z',['valid','ISBOOLEAN','INRELATION'],'C',['character'],'I',['var_count','error','position','start','num','numberindex'],'S',['$function','postfix_code'],'O',['+var_name','var_value','double[]','+number','+refvalue','+stack','references','java.util.Hashtable','refnames','java.util.Vector']]
,['I',['NO_CONST','NO_FUNCSNOPARAM','NO_FUNCS','NO_EXT_FUNCS','EXT_FUNC_OFFSET','FUNCNOPARAM_OFFSET'],'O',['constname','String[]','constvalue','double[]','funcnameNoParam','String[]','+funcname','+extfunc']]]

Clazz.newMeth(C$, 'isKeyword$S',  function (token) {
try {
Double.parseDouble$S(token);
return true;
} catch (_exc) {
if (Clazz.exceptionOf(_exc,"Exception")){
} else {
throw _exc;
}
}
for (var i=0; i < C$.NO_CONST; i++) {
if (token.equals$O(C$.constname[i])) {
return true;
}}
for (var i=0; i < C$.NO_FUNCS; i++) {
if (token.equals$O(C$.funcname[i])) {
return true;
}}
for (var i=0; i < C$.NO_EXT_FUNCS; i++) {
if (token.equals$O(C$.extfunc[i])) {
return true;
}}
for (var i=0; i < C$.NO_FUNCSNOPARAM; i++) {
if (token.equals$O(C$.funcnameNoParam[i])) {
return true;
}}
return false;
}, 1);

Clazz.newMeth(C$, 'getVariableList$S',  function (_expression) {
var varlist=C$.getVariableList$S$java_util_Vector(_expression, Clazz.new_($I$(1,1)));
if (varlist.size$() < 1) {
return Clazz.array(String, [0]);
}return varlist.toArray$OA(Clazz.array(String, [1]));
}, 1);

Clazz.newMeth(C$, 'getVariableList$S$java_util_Vector',  function (_expression, varlist) {
var tkn=Clazz.new_([_expression, "() \t+-*/,<>=&|"],$I$(2,1).c$$S$S);
while (tkn.hasMoreTokens$()){
var token=tkn.nextToken$();
if (C$.isKeyword$S(token)) {
continue;
}if (!varlist.contains$O(token)) {
varlist.add$O(token);
}}
return varlist;
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (variablecount) {
;C$.$init$.apply(this);
this.var_count=variablecount;
this.references=Clazz.new_($I$(3,1));
this.refnames=Clazz.new_($I$(1,1));
this.var_name=Clazz.array(String, [variablecount]);
this.var_value=Clazz.array(Double.TYPE, [variablecount]);
this.number=Clazz.array(Double.TYPE, [200]);
}, 1);

Clazz.newMeth(C$, 'defineVariable$I$S',  function (index, name) {
this.var_name[index]=name;
});

Clazz.newMeth(C$, 'setVariable$I$D',  function (index, value) {
this.var_value[index]=value;
});

Clazz.newMeth(C$, 'define$S',  function (definition) {
this.$function=definition;
this.valid=false;
});

Clazz.newMeth(C$, 'parse$',  function () {
var allFunction= String.instantialize(this.$function);
var orgFunction= String.instantialize(this.$function);
var index;
if (this.valid) {
return;
}this.num=0;
this.error=0;
this.references.clear$();
this.refnames.removeAllElements$();
while ((index=allFunction.lastIndexOf$S(";")) != -1){
this.$function=allFunction.substring$I(index + 1) + ')';
allFunction=allFunction.substring$I$I(0, index++);
var refname=null;
var separator=this.$function.indexOf$S(":");
if (separator == -1) {
this.error=14;
for (this.position=0; this.position < this.$function.length$(); this.position++) {
if (this.$function.charAt$I(this.position) != " ") {
break;
}}
++this.position;
} else {
refname=this.$function.substring$I$I(0, separator);
this.$function=this.$function.substring$I(separator + 1);
refname=refname.trim$();
if (refname.equals$O("")) {
this.error=15;
this.position=1;
} else {
index+=++separator;
p$1.parseSubFunction.apply(this, []);
}}if (this.error != 0) {
this.position+=index;
break;
}this.references.put$O$O(refname, this.postfix_code);
this.refnames.addElement$O(refname);
}
if (this.error == 0) {
this.$function=allFunction + ')';
p$1.parseSubFunction.apply(this, []);
}this.$function=orgFunction;
this.valid=(this.error == 0);
});

Clazz.newMeth(C$, 'evaluate$',  function () {
var size=this.refnames.size$();
var result;
if (!this.valid) {
this.error=3;
return 0;
}this.error=0;
this.numberindex=0;
if (size != 0) {
var orgPFC=this.postfix_code;
this.refvalue=Clazz.array(Double.TYPE, [size]);
for (var i=0; i < this.refnames.size$(); i++) {
var name=this.refnames.elementAt$I(i);
this.postfix_code=this.references.get$O(name);
result=p$1.evaluateSubFunction.apply(this, []);
if (this.error != 0) {
this.postfix_code=orgPFC;
this.refvalue=null;
return result;
}this.refvalue[i]=result;
}
this.postfix_code=orgPFC;
}result=p$1.evaluateSubFunction.apply(this, []);
this.refvalue=null;
if (Double.isNaN$D(result)) {
result=0.0;
}return result;
});

Clazz.newMeth(C$, 'getErrorCode$',  function () {
return this.error;
});

Clazz.newMeth(C$, 'getErrorString$',  function () {
return C$.toErrorString$I(this.error);
});

Clazz.newMeth(C$, 'getErrorPosition$',  function () {
return this.position;
});

Clazz.newMeth(C$, 'toErrorString$I',  function (errorcode) {
var s="";
switch (errorcode) {
case 0:
s="no error";
break;
case 1:
s="syntax error";
break;
case 2:
s="parenthesis expected";
break;
case 3:
s="uncompiled function";
break;
case 4:
s="expression expected";
break;
case 5:
s="unknown identifier";
break;
case 6:
s="operator expected";
break;
case 7:
s="parentheses not match";
break;
case 8:
s="internal code damaged";
break;
case 9:
s="execution stack overflow";
break;
case 10:
s="too many constants";
break;
case 11:
s="comma expected";
break;
case 12:
s="invalid operand type";
break;
case 13:
s="invalid operator";
break;
case 14:
s="bad reference definition (: expected)";
break;
case 15:
s="reference name expected";
break;
}
return s;
}, 1);

Clazz.newMeth(C$, 'skipSpaces',  function () {
try {
while (this.$function.charAt$I(this.position - 1) == " "){
++this.position;
}
this.character=this.$function.charAt$I(this.position - 1);
} catch (e) {
if (Clazz.exceptionOf(e,"StringIndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[7]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getNextCharacter',  function () {
++this.position;
try {
this.character=this.$function.charAt$I(this.position - 1);
} catch (e) {
if (Clazz.exceptionOf(e,"StringIndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[7]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'addCode$C',  function (code) {
this.postfix_code+=code;
}, p$1);

Clazz.newMeth(C$, 'scanNumber',  function () {
var numstr="";
var value;
if (this.num == 200) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[10]);
}if (this.character != ".") {
do {
numstr+=this.character;
p$1.getNextCharacter.apply(this, []);
} while ((this.character >= "0") && (this.character <= "9") );
} else {
numstr+="0";
}if (this.character == ".") {
do {
numstr+=this.character;
p$1.getNextCharacter.apply(this, []);
} while ((this.character >= "0") && (this.character <= "9") );
}if ((this.character == "e") || (this.character == "E") ) {
numstr+="e";
p$1.getNextCharacter.apply(this, []);
if ((this.character == "+") || (this.character == "-") ) {
numstr+=this.character;
p$1.getNextCharacter.apply(this, []);
}while ((this.character >= "0") && (this.character <= "9") ){
numstr+=this.character;
p$1.getNextCharacter.apply(this, []);
}
}try {
value=Double.valueOf$S(numstr).doubleValue$();
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
this.position=this.start;
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[1]);
} else {
throw e;
}
}
this.number[this.num++]=value;
p$1.addCode$C.apply(this, ["\u012c"]);
}, p$1);

Clazz.newMeth(C$, 'scanNonNumeric',  function () {
var stream="";
if ((this.character == "*") || (this.character == "/") || (this.character == ")") || (this.character == ",") || (this.character == "<") || (this.character == ">") || (this.character == "=") || (this.character == "&") || (this.character == "|")  ) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[1]);
}do {
stream+=this.character;
p$1.getNextCharacter.apply(this, []);
} while (!((this.character == " ") || (this.character == "+") || (this.character == "-") || (this.character == "*") || (this.character == "/") || (this.character == "(") || (this.character == ")") || (this.character == ",") || (this.character == "<") || (this.character == ">") || (this.character == "=") || (this.character == "&") || (this.character == "|")  ));
for (var i=0; i < C$.NO_CONST; i++) {
if (stream.equals$O(C$.constname[i])) {
p$1.addCode$C.apply(this, [String.fromCharCode((i + 253))]);
return;
}}
for (var i=0; i < C$.NO_FUNCS; i++) {
if (stream.equals$O(C$.funcname[i])) {
p$1.skipSpaces.apply(this, []);
if (this.character != "(") {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[2]);
}p$1.scanAndParse.apply(this, []);
if (this.character != ")") {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[2]);
}p$1.getNextCharacter.apply(this, []);
p$1.addCode$C.apply(this, [String.fromCharCode((i + 1000))]);
return;
}}
for (var i=0; i < C$.NO_EXT_FUNCS; i++) {
if (stream.equals$O(C$.extfunc[i])) {
p$1.skipSpaces.apply(this, []);
if (this.character != "(") {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[2]);
}p$1.scanAndParse.apply(this, []);
if (this.character != ",") {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[11]);
}var savecode= String.instantialize(this.postfix_code);
this.postfix_code="";
p$1.scanAndParse.apply(this, []);
if (this.character != ")") {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[2]);
}p$1.getNextCharacter.apply(this, []);
savecode+=this.postfix_code;
this.postfix_code= String.instantialize(savecode);
p$1.addCode$C.apply(this, [String.fromCharCode((i + C$.EXT_FUNC_OFFSET))]);
return;
}}
for (var i=0; i < C$.NO_FUNCSNOPARAM; i++) {
if (stream.equals$O(C$.funcnameNoParam[i])) {
p$1.skipSpaces.apply(this, []);
if (this.character != "(") {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[2]);
}p$1.skipSpaces.apply(this, []);
p$1.getNextCharacter.apply(this, []);
if (this.character != ")") {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[2]);
}p$1.getNextCharacter.apply(this, []);
p$1.addCode$C.apply(this, [String.fromCharCode((i + C$.FUNCNOPARAM_OFFSET))]);
return;
}}
for (var i=0; i < this.var_count; i++) {
if (stream.equals$O(this.var_name[i])) {
p$1.addCode$C.apply(this, [String.fromCharCode((i + 2000))]);
return;
}}
var index=this.refnames.indexOf$O(stream);
if (index != -1) {
p$1.addCode$C.apply(this, [String.fromCharCode((index + 3000))]);
return;
}this.position=this.start;
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[5]);
}, p$1);

Clazz.newMeth(C$, 'getIdentifier',  function () {
var negate=false;
p$1.getNextCharacter.apply(this, []);
p$1.skipSpaces.apply(this, []);
if (this.character == "!") {
p$1.getNextCharacter.apply(this, []);
p$1.skipSpaces.apply(this, []);
if (this.character != "(") {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[2]);
}p$1.scanAndParse.apply(this, []);
if (this.character != ")") {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[2]);
}if (!this.ISBOOLEAN) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[12]);
}p$1.addCode$C.apply(this, ["\f"]);
p$1.getNextCharacter.apply(this, []);
return false;
}this.ISBOOLEAN=false;
while ((this.character == "+") || (this.character == "-") ){
if (this.character == "-") {
negate=!negate;
}p$1.getNextCharacter.apply(this, []);
p$1.skipSpaces.apply(this, []);
}
this.start=this.position;
if (((this.character >= "0") && (this.character <= "9") ) || (this.character == ".") ) {
p$1.scanNumber.apply(this, []);
} else if (this.character == "(") {
p$1.scanAndParse.apply(this, []);
p$1.getNextCharacter.apply(this, []);
} else {
p$1.scanNonNumeric.apply(this, []);
}p$1.skipSpaces.apply(this, []);
return (negate);
}, p$1);

Clazz.newMeth(C$, 'arithmeticLevel2',  function () {
var negate;
if (this.ISBOOLEAN) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[12]);
}do {
var operator=this.character;
negate=p$1.getIdentifier.apply(this, []);
if (this.ISBOOLEAN) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[12]);
}if (negate) {
p$1.addCode$C.apply(this, ["_"]);
}p$1.addCode$C.apply(this, [operator]);
} while ((this.character == "*") || (this.character == "/") );
}, p$1);

Clazz.newMeth(C$, 'arithmeticLevel1',  function () {
var negate;
if (this.ISBOOLEAN) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[12]);
}do {
var operator=this.character;
negate=p$1.getIdentifier.apply(this, []);
if (this.ISBOOLEAN) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[12]);
}if ((this.character == "*") || (this.character == "/") ) {
if (negate) {
p$1.addCode$C.apply(this, ["_"]);
}p$1.arithmeticLevel2.apply(this, []);
}p$1.addCode$C.apply(this, [operator]);
} while ((this.character == "+") || (this.character == "-") );
}, p$1);

Clazz.newMeth(C$, 'relationLevel',  function () {
var code="\u0000";
if (this.INRELATION) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[13]);
}this.INRELATION=true;
if (this.ISBOOLEAN) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[12]);
}switch (this.character.$c()) {
case 61:
code="\u0007";
break;
case 60:
code="\u0002";
p$1.getNextCharacter.apply(this, []);
if (this.character == ">") {
code="\u0006";
} else if (this.character == "=") {
code="\u0004";
} else {
--this.position;
}break;
case 62:
code="\u0003";
p$1.getNextCharacter.apply(this, []);
if (this.character == "=") {
code="\u0005";
} else {
--this.position;
}break;
}
p$1.scanAndParse.apply(this, []);
this.INRELATION=false;
if (this.ISBOOLEAN) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[12]);
}p$1.addCode$C.apply(this, [code]);
this.ISBOOLEAN=true;
}, p$1);

Clazz.newMeth(C$, 'booleanLevel',  function () {
if (!this.ISBOOLEAN) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[12]);
}var operator=this.character;
p$1.scanAndParse.apply(this, []);
if (!this.ISBOOLEAN) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[12]);
}switch (operator.$c()) {
case 38:
p$1.addCode$C.apply(this, ["\n"]);
break;
case 124:
p$1.addCode$C.apply(this, ["\u000b"]);
break;
}
}, p$1);

Clazz.newMeth(C$, 'scanAndParse',  function () {
var negate;
negate=p$1.getIdentifier.apply(this, []);
if (negate) {
p$1.addCode$C.apply(this, ["_"]);
}do {
switch (this.character.$c()) {
case 43:
case 45:
p$1.arithmeticLevel1.apply(this, []);
break;
case 42:
case 47:
p$1.arithmeticLevel2.apply(this, []);
break;
case 44:
case 41:
return;
case 61:
case 60:
case 62:
p$1.relationLevel.apply(this, []);
break;
case 38:
case 124:
p$1.booleanLevel.apply(this, []);
break;
default:
throw Clazz.new_(Clazz.load('org.opensourcephysics.ejs.control.value.ParserException').c$$I,[6]);
}
} while (true);
}, p$1);

Clazz.newMeth(C$, 'parseSubFunction',  function () {
this.position=0;
this.postfix_code="";
this.INRELATION=false;
this.ISBOOLEAN=false;
try {
p$1.scanAndParse.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"org.opensourcephysics.ejs.control.value.ParserException")){
this.error=e.getErrorCode$();
if ((this.error == 1) && (this.postfix_code === "" ) ) {
this.error=4;
}} else {
throw e;
}
}
if ((this.error == 0) && (this.position != this.$function.length$()) ) {
this.error=7;
}}, p$1);

Clazz.newMeth(C$, 'builtInFunction$I$D',  function ($function, parameter) {
switch ($function) {
case 0:
return Math.abs(parameter);
case 1:
return Math.acos(parameter);
case 2:
return Math.asin(parameter);
case 3:
return Math.atan(parameter);
case 4:
return Math.ceil(parameter);
case 5:
return Math.cos(parameter);
case 6:
return Math.exp(parameter);
case 7:
return Math.floor(parameter);
case 8:
return Math.log(parameter);
case 9:
return Math.rint(parameter);
case 10:
return Long.$dval(Math.round$D(parameter));
case 11:
return Math.sin(parameter);
case 12:
return Math.sqrt(parameter);
case 13:
return Math.tan(parameter);
case 14:
return Math.toDegrees(parameter);
case 15:
return Math.toRadians(parameter);
default:
this.error=8;
return NaN;
}
}, p$1);

Clazz.newMeth(C$, 'builtInFunctionNoParam$I',  function ($function) {
switch ($function) {
case 0:
return Math.random();
default:
this.error=8;
return NaN;
}
}, p$1);

Clazz.newMeth(C$, 'builtInExtFunction$I$D$D',  function ($function, param1, param2) {
switch ($function) {
case 0:
return Math.atan2(param1, param2);
case 1:
return Math.IEEEremainder(param1, param2);
case 2:
return Math.max(param1, param2);
case 3:
return Math.min(param1, param2);
case 4:
return Math.pow(param1, param2);
default:
this.error=8;
return NaN;
}
}, p$1);

Clazz.newMeth(C$, 'evaluateSubFunction',  function () {
var stack_pointer=-1;
var code_pointer=0;
var destination;
var code;
var codeLength=this.postfix_code.length$();
while (true){
try {
if (code_pointer == codeLength) {
return this.stack[0];
}code=this.postfix_code.charAt$I(code_pointer++);
} catch (e) {
if (Clazz.exceptionOf(e,"StringIndexOutOfBoundsException")){
return this.stack[0];
} else {
throw e;
}
}
try {
switch (code.$c()) {
case 43:
this.stack[stack_pointer - 1]+=this.stack[stack_pointer];
--stack_pointer;
break;
case 45:
this.stack[stack_pointer - 1]-=this.stack[stack_pointer];
--stack_pointer;
break;
case 42:
this.stack[stack_pointer - 1]*=this.stack[stack_pointer];
--stack_pointer;
break;
case 47:
if (this.stack[stack_pointer] != 0 ) {
this.stack[stack_pointer - 1]/=this.stack[stack_pointer];
} else {
this.stack[stack_pointer - 1]/=1.0E-128;
}--stack_pointer;
break;
case 95:
this.stack[stack_pointer]=-this.stack[stack_pointer];
break;
case 1:
destination=code_pointer + (this.postfix_code.charCodeAt$I(code_pointer++));
while (code_pointer < destination){
if (this.postfix_code.charAt$I(code_pointer++) == "\u012c") {
++this.numberindex;
}}
break;
case 2:
--stack_pointer;
this.stack[stack_pointer]=(this.stack[stack_pointer] < this.stack[stack_pointer + 1] ) ? 1.0 : 0.0;
break;
case 3:
--stack_pointer;
this.stack[stack_pointer]=(this.stack[stack_pointer] > this.stack[stack_pointer + 1] ) ? 1.0 : 0.0;
break;
case 4:
--stack_pointer;
this.stack[stack_pointer]=(this.stack[stack_pointer] <= this.stack[stack_pointer + 1] ) ? 1.0 : 0.0;
break;
case 5:
--stack_pointer;
this.stack[stack_pointer]=(this.stack[stack_pointer] >= this.stack[stack_pointer + 1] ) ? 1.0 : 0.0;
break;
case 7:
--stack_pointer;
this.stack[stack_pointer]=(this.stack[stack_pointer] == this.stack[stack_pointer + 1] ) ? 1.0 : 0.0;
break;
case 6:
--stack_pointer;
this.stack[stack_pointer]=(this.stack[stack_pointer] != this.stack[stack_pointer + 1] ) ? 1.0 : 0.0;
break;
case 8:
if (this.stack[stack_pointer--] == 0.0 ) {
destination=code_pointer + (this.postfix_code.charCodeAt$I(code_pointer++));
while (code_pointer < destination){
if (this.postfix_code.charAt$I(code_pointer++) == "\u012c") {
++this.numberindex;
}}
} else {
++code_pointer;
}break;
case 9:
break;
case 10:
--stack_pointer;
if ((this.stack[stack_pointer] != 0.0 ) && (this.stack[stack_pointer + 1] != 0.0 ) ) {
this.stack[stack_pointer]=1.0;
} else {
this.stack[stack_pointer]=0.0;
}break;
case 11:
--stack_pointer;
if ((this.stack[stack_pointer] != 0.0 ) || (this.stack[stack_pointer + 1] != 0.0 ) ) {
this.stack[stack_pointer]=1.0;
} else {
this.stack[stack_pointer]=0.0;
}break;
case 12:
this.stack[stack_pointer]=(this.stack[stack_pointer] == 0.0 ) ? 1.0 : 0.0;
break;
case 300:
this.stack[++stack_pointer]=this.number[this.numberindex++];
break;
default:
if (code.$c() >= 3000 ) {
this.stack[++stack_pointer]=this.refvalue[code.$c() - 3000];
} else if (code.$c() >= 2000 ) {
this.stack[++stack_pointer]=this.var_value[code.$c() - 2000];
} else if (code.$c() >= C$.FUNCNOPARAM_OFFSET ) {
this.stack[++stack_pointer]=p$1.builtInFunctionNoParam$I.apply(this, [code.$c() - C$.FUNCNOPARAM_OFFSET]);
} else if (code.$c() >= C$.EXT_FUNC_OFFSET ) {
this.stack[stack_pointer - 1]=p$1.builtInExtFunction$I$D$D.apply(this, [code.$c() - C$.EXT_FUNC_OFFSET, this.stack[stack_pointer - 1], this.stack[stack_pointer]]);
--stack_pointer;
} else if (code.$c() >= 1000 ) {
this.stack[stack_pointer]=p$1.builtInFunction$I$D.apply(this, [code.$c() - 1000, this.stack[stack_pointer]]);
} else if (code >= "\u00fd") {
this.stack[++stack_pointer]=C$.constvalue[code.$c() - 253];
} else {
this.error=8;
return NaN;
}}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ArrayIndexOutOfBoundsException")){
var oe = e$$;
{
this.error=9;
return NaN;
}
} else if (Clazz.exceptionOf(e$$,"NullPointerException")){
var ne = e$$;
{
this.error=8;
return NaN;
}
} else {
throw e$$;
}
}
}
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.constname=Clazz.array(String, -1, ["Math.E", "Math.PI"]);
C$.constvalue=Clazz.array(Double.TYPE, -1, [2.718281828459045, 3.141592653589793]);
C$.funcnameNoParam=Clazz.array(String, -1, ["Math.random"]);
C$.funcname=Clazz.array(String, -1, ["Math.abs", "Math.acos", "Math.asin", "Math.atan", "Math.ceil", "Math.cos", "Math.exp", "Math.floor", "Math.log", "Math.rint", "Math.round", "Math.sin", "Math.sqrt", "Math.tan", "Math.toDegrees", "Math.toRadians"]);
C$.extfunc=Clazz.array(String, -1, ["Math.atan2", "Math.IEEEremainder", "Math.max", "Math.min", "Math.pow"]);
C$.NO_CONST=C$.constname.length;
C$.NO_FUNCSNOPARAM=C$.funcnameNoParam.length;
C$.NO_FUNCS=C$.funcname.length;
C$.NO_EXT_FUNCS=C$.extfunc.length;
C$.EXT_FUNC_OFFSET=1000 + C$.NO_FUNCS;
C$.FUNCNOPARAM_OFFSET=C$.EXT_FUNC_OFFSET + C$.NO_EXT_FUNCS;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
