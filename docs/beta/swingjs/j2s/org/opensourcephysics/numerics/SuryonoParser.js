(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),p$1={},p$2={},I$=[[0,'java.util.Hashtable','java.util.ArrayList','org.opensourcephysics.numerics.SuryonoParser',['org.opensourcephysics.numerics.SuryonoParser','.Func'],'StringBuffer','java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SuryonoParser", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.numerics.MathExpParser');
C$.$classes$=[['Func',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$function="";
this.valid=false;
this.isBoolean=false;
this.inRelation=false;
this.appendVariables=false;
},1);

C$.$fields$=[['Z',['valid','isBoolean','inRelation','allowUnknown','appendVariables'],'C',['ch'],'I',['error','position','start','num'],'S',['$function'],'O',['f','org.opensourcephysics.numerics.SuryonoParser.Func']]
,['D',['LOG10'],'O',['funcname','String[]','+extfunc','+allFunctions']]]

Clazz.newMeth(C$, 'c$$S$S',  function (f, v) {
C$.c$$I.apply(this, [1]);
this.defineVariable$I$S(1, v);
this.define$S(f);
this.parse$();
if (this.getErrorCode$() != 0) {
var msg="Error in function string: " + f;
msg=msg + '\n' + "Error: " + this.getErrorString$() ;
msg=msg + '\n' + "Position: " + this.getErrorPosition$() ;
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$S,[msg]);
}}, 1);

Clazz.newMeth(C$, 'setError$I',  function (err) {
this.error=err;
});

Clazz.newMeth(C$, 'c$$S$S$S',  function (f, v1, v2) {
C$.c$$I.apply(this, [2]);
this.defineVariable$I$S(1, v1);
this.defineVariable$I$S(2, v2);
this.define$S(f);
this.parse$();
if (this.getErrorCode$() != 0) {
var msg="Error in function string: " + f;
msg=msg + '\n' + "Error: " + this.getErrorString$() ;
msg=msg + '\n' + "Position: " + this.getErrorPosition$() ;
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$S,[msg]);
}}, 1);

Clazz.newMeth(C$, 'c$$S$SA',  function (f, v) {
C$.c$$S$SA$Z.apply(this, [f, v, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$SA$Z',  function (funcStr, vars, allowUnkownIdentifiers) {
C$.c$$I.apply(this, [vars.length]);
for (var i=0; i < vars.length; i++) {
this.defineVariable$I$S(i + 1, vars[i]);
}
this.allowUnknown=allowUnkownIdentifiers;
this.define$S(funcStr);
this.parse$();
if (this.getErrorCode$() != 0) {
var msg="Error in function string: " + funcStr;
msg=msg + '\n' + "Error: " + this.getErrorString$() ;
msg=msg + '\n' + "Position: " + this.getErrorPosition$() ;
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$S,[msg]);
}}, 1);

Clazz.newMeth(C$, 'c$$I',  function (nVar) {
Clazz.super_(C$, this);
this.f=Clazz.new_($I$(4,1).c$$I,[this, null, nVar]);
}, 1);

Clazz.newMeth(C$, 'setToZero$',  function () {
try {
this.setFunction$S("0");
} catch (ex) {
if (Clazz.exceptionOf(ex,"org.opensourcephysics.numerics.ParserException")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'useRadian$',  function () {
this.f.radian=true;
});

Clazz.newMeth(C$, 'useDegree$',  function () {
this.f.radian=false;
});

Clazz.newMeth(C$, 'removeEscapeCharacter$S',  function (str) {
if (str == null  || str.length$() < 1 ) {
return str;
}var sb=Clazz.new_([str.length$()],$I$(5,1).c$$I);
for (var i=0, n=str.length$(); i < n; i++) {
if (str.charAt$I(i) != "\\") {
sb.append$C(str.charAt$I(i));
}}
return sb.toString();
}, p$2);

Clazz.newMeth(C$, 'defineVariable$I$S',  function (index, name) {
this.f.defineVariable$I$S(index, name);
});

Clazz.newMeth(C$, 'setVariable$I$D',  function (index, value) {
this.f.setVariable$I$D(index, value);
});

Clazz.newMeth(C$, 'setVariable$S$D',  function (name, value) {
this.f.setVariable$S$D(name, value);
});

Clazz.newMeth(C$, 'define$S',  function (def) {
this.$function=(def.equals$O("0") ? def : p$2.removeEscapeCharacter$S.apply(this, [def]));
this.valid=false;
});

Clazz.newMeth(C$, 'parse$S',  function ($function) {
this.define$S($function);
this.parse$();
if (this.getErrorCode$() != 0) {
var msg="Error in function string: " + $function;
msg=msg + '\n' + "Error: " + this.getErrorString$() ;
msg=msg + '\n' + "Position: " + this.getErrorPosition$() ;
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$S,[msg]);
}});

Clazz.newMeth(C$, 'parseUnknown$S',  function ($function) {
this.f.var_name=Clazz.array(String, [0]);
this.f.var_value=Clazz.array(Double.TYPE, [0]);
this.f.var_count=0;
this.appendVariables=true;
this.define$S($function);
this.parse$();
if (this.getErrorCode$() != 0) {
var msg="Error in function string: " + $function;
msg=msg + '\n' + "Error: " + this.getErrorString$() ;
msg=msg + '\n' + "Position: " + this.getErrorPosition$() ;
this.appendVariables=false;
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$S,[msg]);
}this.appendVariables=false;
return this.f.var_name;
});

Clazz.newMeth(C$, 'getVariableNames$',  function () {
return this.f.var_name;
});

Clazz.newMeth(C$, 'getFunctionNames$',  function () {
if (C$.allFunctions != null ) return C$.allFunctions;
var len=C$.funcname.length;
var names=Clazz.array(String, [len + C$.extfunc.length]);
System.arraycopy$O$I$O$I$I(C$.funcname, 0, names, 0, len);
System.arraycopy$O$I$O$I$I(C$.extfunc, 0, names, len, C$.extfunc.length);
return C$.allFunctions=names;
});

Clazz.newMeth(C$, 'parse$',  function () {
if (this.valid) {
return;
}this.num=0;
this.error=0;
this.f.references.clear$();
this.f.refnames.clear$();
switch (this.$function) {
case "":
this.error=4;
this.valid=false;
return;
case "0":
case "0.0":
p$2.addNum$D.apply(this, [0]);
this.valid=true;
return;
case "1":
case "1.0":
p$2.addNum$D.apply(this, [1]);
this.valid=true;
return;
}
var allFunction=this.$function;
var orgFunction=this.$function;
var index;
while ((index=allFunction.lastIndexOf$S(";")) >= 0){
this.$function=allFunction.substring$I(++index) + ')';
allFunction=allFunction.substring$I$I(0, index);
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
p$2.parseSubFunction.apply(this, []);
}}if (this.error != 0) {
this.position+=index;
break;
}this.f.references.put$O$O(refname, this.f.postfix_code);
this.f.refnames.add$O(refname);
}
if (this.error == 0) {
this.$function=allFunction + ')';
p$2.parseSubFunction.apply(this, []);
}this.$function=orgFunction;
this.valid=(this.error == 0);
});

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
return p$2.evaluate$D$D$D$I.apply(this, [x, 0, 0, 1]);
});

Clazz.newMeth(C$, 'evaluate$D$D',  function (x, y) {
return p$2.evaluate$D$D$D$I.apply(this, [x, y, 0, 2]);
});

Clazz.newMeth(C$, 'evaluate$D$D$D',  function (x, y, z) {
return p$2.evaluate$D$D$D$I.apply(this, [x, y, z, 3]);
});

Clazz.newMeth(C$, 'evaluate$D$D$D$I',  function (x, y, z, n) {
return (p$2.checkEval.apply(this, []) ? this.f.evaluate$D$D$D$I(x, y, z, n) : 0);
}, p$2);

Clazz.newMeth(C$, 'evaluate$DA',  function (v) {
return (p$2.checkEval.apply(this, []) ? this.f.evaluate$DA(v) : 0);
});

Clazz.newMeth(C$, 'evaluate$',  function () {
return (p$2.checkEval.apply(this, []) ? this.f.evaluate$() : 0);
});

Clazz.newMeth(C$, 'checkEval',  function () {
if (this.valid) return true;
this.error=3;
return false;
}, p$2);

Clazz.newMeth(C$, 'evaluatedToNaN$',  function () {
return this.f.isNaN;
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

Clazz.newMeth(C$, 'getFunction$',  function () {
return this.$function;
});

Clazz.newMeth(C$, 'setFunction$S',  function (funcStr) {
this.setFunction$S$SA(funcStr, null);
});

Clazz.newMeth(C$, 'setFunction$S$SA',  function (funcStr, vars) {
if (vars != null ) {
var n=vars.length;
this.f.reset$I(n);
for (var i=0; i < n; i++) {
this.defineVariable$I$S(i + 1, vars[i]);
}
}this.define$S(this.$function=funcStr);
this.parse$();
if (this.error != 0) {
var msg="Error in function string: " + funcStr;
msg=msg + '\n' + "Error: " + C$.toErrorString$I(this.error) ;
msg=msg + '\n' + "Position: " + this.getErrorPosition$() ;
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$S,[msg]);
}});

Clazz.newMeth(C$, 'skipSpaces',  function () {
try {
while (this.$function.charAt$I(this.position - 1) == " "){
++this.position;
}
this.ch=this.$function.charAt$I(this.position - 1);
} catch (e) {
if (Clazz.exceptionOf(e,"StringIndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[7]);
} else {
throw e;
}
}
}, p$2);

Clazz.newMeth(C$, 'getNextch',  function () {
try {
this.ch=this.$function.charAt$I(this.position++);
} catch (e) {
if (Clazz.exceptionOf(e,"StringIndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[7]);
} else {
throw e;
}
}
}, p$2);

Clazz.newMeth(C$, 'addCode$I',  function (code) {
this.f.postfix_code[++this.f.postfix_code[0]]=code;
}, p$2);

Clazz.newMeth(C$, 'addCode$IA$I',  function (a, code) {
a[++a[0]]=code;
}, 1);

Clazz.newMeth(C$, 'addCodes$IA$IA',  function (a, b) {
var n=b[0];
var pt=a[0];
a[0]+=n;
System.arraycopy$O$I$O$I$I(b, 1, a, pt + 1, n);
}, 1);

Clazz.newMeth(C$, 'scanNumber',  function () {
var numstr="";
var value;
if (this.num == 200) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[10]);
}if (this.ch != ".") {
do {
numstr+=this.ch;
p$2.getNextch.apply(this, []);
} while ((this.ch >= "0") && (this.ch <= "9") );
} else {
numstr+="0";
}if (this.ch == ".") {
do {
numstr+=this.ch;
p$2.getNextch.apply(this, []);
} while ((this.ch >= "0") && (this.ch <= "9") );
}if ((this.ch == "e") || (this.ch == "E") ) {
numstr+=this.ch;
p$2.getNextch.apply(this, []);
if ((this.ch == "+") || (this.ch == "-") ) {
numstr+=this.ch;
p$2.getNextch.apply(this, []);
}while ((this.ch >= "0") && (this.ch <= "9") ){
numstr+=this.ch;
p$2.getNextch.apply(this, []);
}
}value=C$.getNumber$S(numstr);
if (Double.isNaN$D(value)) {
this.position=this.start;
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[1]);
}p$2.addNum$D.apply(this, [value]);
}, p$2);

Clazz.newMeth(C$, 'addNum$D',  function (value) {
this.f.number[this.num++]=value;
p$2.addCode$I.apply(this, [255]);
}, p$2);

Clazz.newMeth(C$, 'getNumber$S',  function (name) {
if (C$.couldBeNumber$S(name)) {
try {
return Double.parseDouble$S(name);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
}return NaN;
}, 1);

Clazz.newMeth(C$, 'couldBeNumber$S',  function (n) {
return (n.length$() > 0 && "+-.I0123456789".indexOf$I(n.charAt$I(0)) >= 0 );
}, 1);

Clazz.newMeth(C$, 'scanNonNumeric',  function () {
var stream="";
if ((this.ch == "*") || (this.ch == "/") || (this.ch == "^") || (this.ch == ")") || (this.ch == ",") || (this.ch == "<") || (this.ch == ">") || (this.ch == "=") || (this.ch == "&") || (this.ch == "|")  ) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[1]);
}do {
stream+=this.ch;
p$2.getNextch.apply(this, []);
} while (!((this.ch == " ") || (this.ch == "+") || (this.ch == "-") || (this.ch == "*") || (this.ch == "/") || (this.ch == "^") || (this.ch == "(") || (this.ch == ")") || (this.ch == ",") || (this.ch == "<") || (this.ch == ">") || (this.ch == "=") || (this.ch == "&") || (this.ch == "|")  ));
if (stream.equals$O("pi")) {
p$2.addCode$I.apply(this, [253]);
return;
} else if (stream.equals$O("e")) {
p$2.addCode$I.apply(this, [254]);
return;
}if (stream.equals$O("if")) {
p$2.skipSpaces.apply(this, []);
if (this.ch != "(") {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[2]);
}p$2.scanAndParse.apply(this, []);
if (this.ch != ",") {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[11]);
}p$2.addCode$I.apply(this, [8]);
var savecode=$I$(6).copyOf$IA$I(this.f.postfix_code, this.f.postfix_code.length);
this.f.postfix_code[0]=0;
p$2.scanAndParse.apply(this, []);
if (this.ch != ",") {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[11]);
}p$2.addCode$I.apply(this, [1]);
C$.addCode$IA$I(savecode, this.f.postfix_code[0] + 2);
C$.addCodes$IA$IA(savecode, this.f.postfix_code);
this.f.postfix_code[0]=0;
p$2.scanAndParse.apply(this, []);
if (this.ch != ")") {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[2]);
}C$.addCode$IA$I(savecode, this.f.postfix_code[0] + 1);
C$.addCodes$IA$IA(savecode, this.f.postfix_code);
this.f.postfix_code=$I$(6).copyOf$IA$I(savecode, savecode.length);
p$2.getNextch.apply(this, []);
return;
}for (var i=0; i < 26; i++) {
if (stream.equals$O(C$.funcname[i])) {
p$2.skipSpaces.apply(this, []);
if (this.ch != "(") {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[2]);
}p$2.scanAndParse.apply(this, []);
if (this.ch != ")") {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[2]);
}p$2.getNextch.apply(this, []);
p$2.addCode$I.apply(this, [i | 4096]);
return;
}}
for (var i=0; i < 4; i++) {
if (stream.equals$O(C$.extfunc[i])) {
p$2.skipSpaces.apply(this, []);
if (this.ch != "(") {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[2]);
}p$2.scanAndParse.apply(this, []);
if (this.ch != ",") {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[11]);
}var savecode=$I$(6).copyOf$IA$I(this.f.postfix_code, this.f.postfix_code.length);
this.f.postfix_code[0]=0;
p$2.scanAndParse.apply(this, []);
if (this.ch != ")") {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[2]);
}p$2.getNextch.apply(this, []);
C$.addCodes$IA$IA(savecode, this.f.postfix_code);
this.f.postfix_code=$I$(6).copyOf$IA$I(savecode, savecode.length);
p$2.addCode$I.apply(this, [i | 8192]);
return;
}}
for (var i=0; i < this.f.var_count; i++) {
if (stream.equals$O(this.f.var_name[i])) {
p$2.addCode$I.apply(this, [i | 16384]);
return;
}}
var index=this.f.refnames.indexOf$O(stream);
if (index != -1) {
p$2.addCode$I.apply(this, [index | 32768]);
return;
}if ((this.allowUnknown || this.appendVariables ) && p$2.append$S.apply(this, [stream]) ) {
return;
}this.position=this.start;
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[5]);
}, p$2);

Clazz.newMeth(C$, 'append$S',  function (stream) {
var var_name2=Clazz.array(String, [this.f.var_count + 1]);
var var_value2=Clazz.array(Double.TYPE, [this.f.var_count + 1]);
System.arraycopy$O$I$O$I$I(this.f.var_name, 0, var_name2, 0, this.f.var_count);
System.arraycopy$O$I$O$I$I(this.f.var_value, 0, var_value2, 0, this.f.var_count);
var_name2[this.f.var_count]=stream;
this.f.var_name=var_name2;
this.f.var_value=var_value2;
++this.f.var_count;
for (var i=0; i < this.f.var_count; i++) {
if (stream.equals$O(this.f.var_name[i])) {
p$2.addCode$I.apply(this, [i | 16384]);
return true;
}}
return false;
}, p$2);

Clazz.newMeth(C$, 'getIdentifier',  function () {
var negate=false;
p$2.getNextch.apply(this, []);
p$2.skipSpaces.apply(this, []);
if (this.ch == "!") {
p$2.getNextch.apply(this, []);
p$2.skipSpaces.apply(this, []);
if (this.ch != "(") {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[2]);
}p$2.scanAndParse.apply(this, []);
if (this.ch != ")") {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[2]);
}if (!this.isBoolean) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[12]);
}p$2.addCode$I.apply(this, [12]);
p$2.getNextch.apply(this, []);
return false;
}this.isBoolean=false;
while ((this.ch == "+") || (this.ch == "-") ){
if (this.ch == "-") {
negate=!negate;
}p$2.getNextch.apply(this, []);
p$2.skipSpaces.apply(this, []);
}
this.start=this.position;
if (((this.ch >= "0") && (this.ch <= "9") ) || (this.ch == ".") ) {
p$2.scanNumber.apply(this, []);
} else if (this.ch == "(") {
p$2.scanAndParse.apply(this, []);
p$2.getNextch.apply(this, []);
} else {
p$2.scanNonNumeric.apply(this, []);
}p$2.skipSpaces.apply(this, []);
return (negate);
}, p$2);

Clazz.newMeth(C$, 'arithmeticLevel3',  function () {
var negate;
if (this.isBoolean) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[12]);
}negate=p$2.getIdentifier.apply(this, []);
if (this.isBoolean) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[12]);
}if (this.ch == "^") {
p$2.arithmeticLevel3.apply(this, []);
}p$2.addCode$I.apply(this, [94]);
if (negate) {
p$2.addCode$I.apply(this, [95]);
}}, p$2);

Clazz.newMeth(C$, 'arithmeticLevel2',  function () {
var negate;
if (this.isBoolean) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[12]);
}do {
var operator=this.ch.$c();
negate=p$2.getIdentifier.apply(this, []);
if (this.isBoolean) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[12]);
}if (this.ch == "^") {
p$2.arithmeticLevel3.apply(this, []);
}if (negate) {
p$2.addCode$I.apply(this, [95]);
}p$2.addCode$I.apply(this, [operator]);
} while ((this.ch == "*") || (this.ch == "/") );
}, p$2);

Clazz.newMeth(C$, 'arithmeticLevel1',  function () {
var negate;
if (this.isBoolean) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[12]);
}do {
var operator=this.ch.$c();
negate=p$2.getIdentifier.apply(this, []);
if (this.isBoolean) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[12]);
}switch (this.ch.$c()) {
case 94:
p$2.arithmeticLevel3.apply(this, []);
if (negate) {
p$2.addCode$I.apply(this, [95]);
}break;
case 42:
case 47:
if (negate) {
p$2.addCode$I.apply(this, [95]);
}p$2.arithmeticLevel2.apply(this, []);
break;
}
p$2.addCode$I.apply(this, [operator]);
} while ((this.ch == "+") || (this.ch == "-") );
}, p$2);

Clazz.newMeth(C$, 'relationLevel',  function () {
var code=0;
if (this.inRelation) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[13]);
}this.inRelation=true;
if (this.isBoolean) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[12]);
}switch (this.ch.$c()) {
case 61:
code=7;
break;
case 60:
code=2;
p$2.getNextch.apply(this, []);
if (this.ch == ">") {
code=6;
} else if (this.ch == "=") {
code=4;
} else {
--this.position;
}break;
case 62:
code=3;
p$2.getNextch.apply(this, []);
if (this.ch == "=") {
code=5;
} else {
--this.position;
}break;
}
p$2.scanAndParse.apply(this, []);
this.inRelation=false;
if (this.isBoolean) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[12]);
}p$2.addCode$I.apply(this, [code]);
this.isBoolean=true;
}, p$2);

Clazz.newMeth(C$, 'booleanLevel',  function () {
if (!this.isBoolean) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[12]);
}var c=this.ch;
p$2.scanAndParse.apply(this, []);
if (!this.isBoolean) {
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[12]);
}switch (c.$c()) {
case 38:
p$2.addCode$I.apply(this, [10]);
break;
case 124:
p$2.addCode$I.apply(this, [11]);
break;
}
}, p$2);

Clazz.newMeth(C$, 'scanAndParse',  function () {
var negate;
negate=p$2.getIdentifier.apply(this, []);
if ((this.ch != "^") && (negate) ) {
p$2.addCode$I.apply(this, [95]);
}do {
switch (this.ch.$c()) {
case 43:
case 45:
p$2.arithmeticLevel1.apply(this, []);
break;
case 42:
case 47:
p$2.arithmeticLevel2.apply(this, []);
break;
case 94:
p$2.arithmeticLevel3.apply(this, []);
if (negate) {
p$2.addCode$I.apply(this, [95]);
}break;
case 44:
case 41:
return;
case 61:
case 60:
case 62:
p$2.relationLevel.apply(this, []);
break;
case 38:
case 124:
p$2.booleanLevel.apply(this, []);
break;
default:
throw Clazz.new_(Clazz.load('org.opensourcephysics.numerics.ParserException').c$$I,[6]);
}
} while (true);
}, p$2);

Clazz.newMeth(C$, 'parseSubFunction',  function () {
this.position=0;
this.f.postfix_code[0]=0;
this.inRelation=false;
this.isBoolean=false;
try {
p$2.scanAndParse.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"org.opensourcephysics.numerics.ParserException")){
this.error=e.getErrorCode$();
if ((this.error == 1) && (this.f.postfix_code[0] == 0) ) {
this.error=4;
}} else {
throw e;
}
}
if ((this.error == 0) && (this.position != this.$function.length$()) ) {
this.error=7;
}}, p$2);

Clazz.newMeth(C$, 'toString',  function () {
return this.$function;
});

C$.$static$=function(){C$.$static$=0;
C$.LOG10=Math.log(10);
C$.funcname=Clazz.array(String, -1, ["sin", "cos", "tan", "ln", "log", "abs", "int", "frac", "asin", "acos", "atan", "sinh", "cosh", "tanh", "asinh", "acosh", "atanh", "ceil", "floor", "round", "exp", "sqr", "sqrt", "sign", "step", "random"]);
C$.extfunc=Clazz.array(String, -1, ["min", "max", "mod", "atan2"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.SuryonoParser, "Func", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.var_count=-1;
this.number=Clazz.array(Double.TYPE, [200]);
this.references=Clazz.new_($I$(1,1));
this.refnames=Clazz.new_($I$(2,1));
this.postfix_code=Clazz.array(Integer.TYPE, [100]);
this.radian=true;
this.err=0;
this.refvalue=null;
this.stack=Clazz.array(Double.TYPE, [50]);
},1);

C$.$fields$=[['Z',['radian','isNaN'],'I',['var_count','err','numberindex'],'O',['var_name','String[]','var_value','double[]','+number','references','java.util.Map','refnames','java.util.List','postfix_code','int[]','refvalue','double[]','+stack']]]

Clazz.newMeth(C$, 'toString',  function () {
if (this.var_count < 0) {
return C$.superclazz.prototype.toString.apply(this, []);
}var s="" + this.b$['org.opensourcephysics.numerics.SuryonoParser'].$function + ":\n" ;
for (var i=0; i < this.var_count; i++) {
s+=this.var_name[i] + "=" + new Double(this.var_value[i]).toString() + ";" ;
}
return s;
});

Clazz.newMeth(C$, 'c$$I',  function (nVar) {
;C$.$init$.apply(this);
this.reset$I(nVar);
}, 1);

Clazz.newMeth(C$, 'reset$I',  function (nVar) {
if (nVar != this.var_count) {
this.var_count=nVar;
this.var_name=Clazz.array(String, [nVar]);
this.var_value=Clazz.array(Double.TYPE, [nVar]);
this.references.clear$();
this.refnames.clear$();
}});

Clazz.newMeth(C$, 'defineVariable$I$S',  function (index, name) {
if (index > this.var_count) {
return;
}this.var_name[index - 1]=name;
});

Clazz.newMeth(C$, 'setVariable$I$D',  function (index, value) {
if (index > this.var_count) {
return;
}this.var_value[index - 1]=value;
});

Clazz.newMeth(C$, 'setVariable$S$D',  function (name, value) {
for (var i=0; i < this.var_count; i++) {
if (this.var_name[i].equals$O(name)) {
this.var_value[i]=value;
break;
}}
});

Clazz.newMeth(C$, 'evaluate$D$D$D$I',  function (x, y, z, n) {
if (this.var_count != n) {
return 0;
}switch (n) {
case 3:
this.var_value[2]=z;
case 2:
this.var_value[1]=y;
case 1:
this.var_value[0]=x;
}
return this.evaluate$();
});

Clazz.newMeth(C$, 'evaluate$DA',  function (v) {
if (this.var_value.length != v.length) {
System.out.println$S("SuryonoParser.Func Error: incorrect number of variables.");
return 0;
}System.arraycopy$O$I$O$I$I(v, 0, this.var_value, 0, v.length);
return this.evaluate$();
});

Clazz.newMeth(C$, 'evaluate$',  function () {
var result=0;
this.err=0;
this.numberindex=0;
var size=this.refnames.size$();
if (size == 0) {
if (this.refvalue == null  || this.refvalue.length < size ) this.refvalue=Clazz.array(Double.TYPE, [size]);
for (var i=0; i < size; i++) {
result=this.refvalue[i]=p$1.evaluateSubFunction$IA$DA.apply(this, [this.references.get$O(this.refnames.get$I(i)), this.stack]);
if (Double.isNaN$D(result)) {
break;
}}
}if (!Double.isNaN$D(result)) result=p$1.evaluateSubFunction$IA$DA.apply(this, [this.postfix_code, this.stack]);
this.isNaN=Double.isNaN$D(result);
if (this.isNaN) {
result=0.0;
}this.b$['org.opensourcephysics.numerics.SuryonoParser'].setError$I.apply(this.b$['org.opensourcephysics.numerics.SuryonoParser'], [this.err]);
return result;
});

Clazz.newMeth(C$, 'evaluateSubFunction$IA$DA',  function (codes, stack) {
var spt=-1;
var cpt=0;
var destination;
var code;
var codeLength=codes[0];
while (true){
try {
if (cpt == codeLength) {
return stack[0];
}code=codes[++cpt];
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
return stack[0];
} else {
throw e;
}
}
try {
switch (code) {
case 43:
stack[--spt]+=stack[spt + 1];
break;
case 45:
stack[--spt]-=stack[spt + 1];
break;
case 42:
stack[--spt]*=stack[spt + 1];
break;
case 47:
if (stack[spt] == 0 ) {
stack[--spt]/=1.0E-128;
} else {
stack[--spt]/=stack[spt + 1];
}break;
case 94:
stack[--spt]=Math.pow(stack[spt], stack[spt + 1]);
break;
case 95:
stack[spt]=-stack[spt];
break;
case 2:
stack[--spt]=(stack[spt] < stack[spt + 1] ) ? 1.0 : 0.0;
break;
case 3:
stack[--spt]=(stack[spt] > stack[spt + 1] ) ? 1.0 : 0.0;
break;
case 4:
stack[--spt]=(stack[spt] <= stack[spt + 1] ) ? 1.0 : 0.0;
break;
case 5:
stack[--spt]=(stack[spt] >= stack[spt + 1] ) ? 1.0 : 0.0;
break;
case 7:
stack[--spt]=(stack[spt] == stack[spt + 1] ) ? 1.0 : 0.0;
break;
case 6:
stack[--spt]=(stack[spt] != stack[spt + 1] ) ? 1.0 : 0.0;
break;
case 8:
if (stack[spt--] != 0 ) {
++cpt;
break;
}case 1:
destination=cpt + codes[++cpt];
while (cpt < destination){
if (codes[++cpt] == 255) {
++this.numberindex;
}}
break;
case 9:
break;
case 10:
stack[--spt]=(stack[spt] != 0  && stack[spt + 1] != 0   ? 1 : 0);
break;
case 11:
stack[--spt]=(stack[spt] != 0  || stack[spt + 1] != 0   ? 1 : 0);
break;
case 12:
stack[spt]=(stack[spt] == 0  ? 1 : 0);
break;
case 255:
stack[++spt]=this.number[this.numberindex++];
break;
case 253:
stack[++spt]=3.141592653589793;
break;
case 254:
stack[++spt]=2.718281828459045;
break;
default:
var val=code & ~61440;
switch (code & 61440) {
case 32768:
stack[++spt]=this.refvalue[val];
break;
case 16384:
stack[++spt]=this.var_value[val];
break;
case 4096:
stack[spt]=p$1.builtInFunction$I$D.apply(this, [val, stack[spt]]);
break;
case 8192:
stack[--spt]=p$1.builtInExtFunction$I$D$D.apply(this, [val, stack[spt], stack[spt + 1]]);
break;
default:
this.err=8;
return NaN;
}
}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ArrayIndexOutOfBoundsException")){
var oe = e$$;
{
this.err=9;
return NaN;
}
} else if (Clazz.exceptionOf(e$$,"NullPointerException")){
var ne = e$$;
{
this.err=8;
return NaN;
}
} else {
throw e$$;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'builtInFunction$I$D',  function (index, p) {
switch (index) {
case 0:
return Math.sin(this.radian ? p : p * 0.017453292519943295);
case 1:
return Math.cos(this.radian ? p : p * 0.017453292519943295);
case 2:
return Math.tan(this.radian ? p : p * 0.017453292519943295);
case 3:
return Math.log(p);
case 4:
return Math.log(p) / $I$(3).LOG10;
case 5:
return Math.abs(p);
case 6:
return Math.rint(p);
case 7:
return p - Math.rint(p);
case 8:
return Math.asin(p) / (this.radian ? 1 : 0.017453292519943295);
case 9:
return Math.acos(p) / (this.radian ? 1 : 0.017453292519943295);
case 10:
return Math.atan(p) / (this.radian ? 1 : 0.017453292519943295);
case 11:
return Math.sinh(p);
case 12:
return Math.cosh(p);
case 13:
return Math.tanh(p);
case 14:
return Math.log(p + Math.sqrt(p * p + 1));
case 15:
return Math.log(p + Math.sqrt(p * p - 1));
case 16:
return Math.log((1 + p) / (1 - p)) / 2;
case 17:
return Math.ceil(p);
case 18:
return Math.floor(p);
case 19:
return Long.$dval(Math.round$D(p));
case 20:
return Math.exp(p);
case 21:
return p * p;
case 22:
return Math.sqrt(p);
case 23:
return Math.signum(p);
case 24:
return (p < 0  ? 0 : 1);
case 25:
return p * Math.random();
default:
this.err=8;
return NaN;
}
}, p$1);

Clazz.newMeth(C$, 'builtInExtFunction$I$D$D',  function (index, p1, p2) {
switch (index) {
case 0:
return Math.min(p1, p2);
case 1:
return Math.max(p1, p2);
case 2:
return Math.IEEEremainder(p1, p2);
case 3:
return Math.atan2(p1, p2);
default:
this.err=8;
return NaN;
}
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
