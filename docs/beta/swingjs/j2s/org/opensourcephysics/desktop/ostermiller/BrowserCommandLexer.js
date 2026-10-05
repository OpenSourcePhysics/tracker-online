(function(){var P$=Clazz.newPackage("org.opensourcephysics.desktop.ostermiller"),p$1={},I$=[[0,'StringBuffer','java.io.InputStreamReader','Error']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BrowserCommandLexer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.zzLexicalState=0;
this.zzBuffer=Clazz.array(Character.TYPE, [16384]);
},1);

C$.$fields$=[['Z',['zzAtEOF'],'I',['zzState','zzLexicalState','zzMarkedPos','zzCurrentPos','zzStartRead','zzEndRead'],'O',['zzReader','java.io.Reader','zzBuffer','char[]']]
,['O',['ZZ_CMAP','char[]','ZZ_ACTION','int[]','+ZZ_ROWMAP','+ZZ_TRANS','ZZ_ERROR_MSG','String[]','ZZ_ATTRIBUTE','int[]']]]

Clazz.newMeth(C$, 'zzUnpackAction$',  function () {
var result=Clazz.array(Integer.TYPE, [14]);
var offset=0;
offset=C$.zzUnpackAction$S$I$IA("\u0002\u0001\u0002\u0002\u0001\u0001\u0003\u0000\u0001\u0003\u0001\u0001\u0001\u0003\u0001\u0000\u0002\u0003", offset, result);
return result;
}, 1);

Clazz.newMeth(C$, 'zzUnpackAction$S$I$IA',  function (packed, offset, result) {
var i=0;
var j=offset;
var l=packed.length$();
while (i < l){
var count=packed.charAt$I(i++).$c();
var value=packed.charAt$I(i++).$c();
do {
result[j++]=value;
} while (--count > 0);
}
return j;
}, 1);

Clazz.newMeth(C$, 'zzUnpackRowMap$',  function () {
var result=Clazz.array(Integer.TYPE, [14]);
var offset=0;
offset=C$.zzUnpackRowMap$S$I$IA("\u0000\u0000\u0000\u0004\u0000\u0008\u0000\f\u0000\u0010\u0000\u0008\u0000\u0014\u0000\u0018\u0000\u0004\u0000\u001c\u0000\u0010\u0000 \u0000\f\u0000\u0018", offset, result);
return result;
}, 1);

Clazz.newMeth(C$, 'zzUnpackRowMap$S$I$IA',  function (packed, offset, result) {
var i=0;
var j=offset;
var l=packed.length$();
while (i < l){
var high=(packed.charCodeAt$I(i++)) << 16;
result[j++]=high | (packed.charCodeAt$I(i++));
}
return j;
}, 1);

Clazz.newMeth(C$, 'zzUnpackTrans$',  function () {
var result=Clazz.array(Integer.TYPE, [36]);
var offset=0;
offset=C$.zzUnpackTrans$S$I$IA("\u0001\u0002\u0001\u0003\u0001\u0004\u0001\u0005\u0001\u0002\u0001\u0006\u0001\u0000\u0005\u0002\u0004\u0000\u0001\u0005\u0001\u0007\u0001\u0008\u0001\t\u0001\u0005\u0001\n\u0001\u0005\u0001\u000b\u0001\u0008\u0001\f\u0001\u0008\u0001\r\u0001\u0005\u0001\u0007\u0001\u0008\u0001\u000b\u0001\u0008\u0001\f\u0001\u0008\u0001\u000e", offset, result);
return result;
}, 1);

Clazz.newMeth(C$, 'zzUnpackTrans$S$I$IA',  function (packed, offset, result) {
var i=0;
var j=offset;
var l=packed.length$();
while (i < l){
var count=packed.charAt$I(i++).$c();
var value=packed.charAt$I(i++).$c();
--value;
do {
result[j++]=value;
} while (--count > 0);
}
return j;
}, 1);

Clazz.newMeth(C$, 'zzUnpackAttribute$',  function () {
var result=Clazz.array(Integer.TYPE, [14]);
var offset=0;
offset=C$.zzUnpackAttribute$S$I$IA("\u0003\u0001\u0001\t\u0001\u0001\u0003\u0000\u0003\u0001\u0001\u0000\u0001\t\u0001\u0001", offset, result);
return result;
}, 1);

Clazz.newMeth(C$, 'zzUnpackAttribute$S$I$IA',  function (packed, offset, result) {
var i=0;
var j=offset;
var l=packed.length$();
while (i < l){
var count=packed.charAt$I(i++).$c();
var value=packed.charAt$I(i++).$c();
do {
result[j++]=value;
} while (--count > 0);
}
return j;
}, 1);

Clazz.newMeth(C$, 'getNextToken$',  function () {
return p$1.getToken.apply(this, []);
});

Clazz.newMeth(C$, 'unescape$S',  function (s) {
var sb=Clazz.new_([s.length$()],$I$(1,1).c$$I);
for (var i=0; i < s.length$(); i++) {
if ((s.charAt$I(i) == "\\") && (i < s.length$()) ) {
++i;
}sb.append$C(s.charAt$I(i));
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader',  function ($in) {
;C$.$init$.apply(this);
this.zzReader=$in;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function ($in) {
C$.c$$java_io_Reader.apply(this, [Clazz.new_($I$(2,1).c$$java_io_InputStream,[$in])]);
}, 1);

Clazz.newMeth(C$, 'zzUnpackCMap$S',  function (packed) {
var map=Clazz.array(Character.TYPE, [65536]);
var i=0;
var j=0;
while (i < 26){
var count=packed.charAt$I(i++).$c();
var value=packed.charAt$I(i++);
do {
map[j++]=value;
} while (--count > 0);
}
return map;
}, 1);

Clazz.newMeth(C$, 'zzRefill',  function () {
if (this.zzStartRead > 0) {
System.arraycopy$O$I$O$I$I(this.zzBuffer, this.zzStartRead, this.zzBuffer, 0, this.zzEndRead - this.zzStartRead);
this.zzEndRead-=this.zzStartRead;
this.zzCurrentPos-=this.zzStartRead;
this.zzMarkedPos-=this.zzStartRead;
this.zzStartRead=0;
}if (this.zzCurrentPos >= this.zzBuffer.length) {
var newBuffer=Clazz.array(Character.TYPE, [this.zzCurrentPos * 2]);
System.arraycopy$O$I$O$I$I(this.zzBuffer, 0, newBuffer, 0, this.zzBuffer.length);
this.zzBuffer=newBuffer;
}var numRead=this.zzReader.read$CA$I$I(this.zzBuffer, this.zzEndRead, this.zzBuffer.length - this.zzEndRead);
if (numRead < 0) {
return true;
}this.zzEndRead+=numRead;
return false;
}, p$1);

Clazz.newMeth(C$, 'yytext',  function () {
return  String.instantialize(this.zzBuffer, this.zzStartRead, this.zzMarkedPos - this.zzStartRead);
}, p$1);

Clazz.newMeth(C$, 'zzScanError$I',  function (errorCode) {
var message;
try {
message=C$.ZZ_ERROR_MSG[errorCode];
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
message=C$.ZZ_ERROR_MSG[0];
} else {
throw e;
}
}
throw Clazz.new_($I$(3,1).c$$S,[message]);
}, p$1);

Clazz.newMeth(C$, 'getToken',  function () {
var zzInput;
var zzAction;
var zzCurrentPosL;
var zzMarkedPosL;
var zzEndReadL=this.zzEndRead;
var zzBufferL=this.zzBuffer;
var zzCMapL=C$.ZZ_CMAP;
var zzTransL=C$.ZZ_TRANS;
var zzRowMapL=C$.ZZ_ROWMAP;
var zzAttrL=C$.ZZ_ATTRIBUTE;
while (true){
zzMarkedPosL=this.zzMarkedPos;
zzAction=-1;
zzCurrentPosL=this.zzCurrentPos=this.zzStartRead=zzMarkedPosL;
this.zzState=this.zzLexicalState;
 zzForAction : {
while (true){
if (zzCurrentPosL < zzEndReadL) {
zzInput=zzBufferL[zzCurrentPosL++].$c();
} else if (this.zzAtEOF) {
zzInput=-1;
break zzForAction;
} else {
this.zzCurrentPos=zzCurrentPosL;
this.zzMarkedPos=zzMarkedPosL;
var eof=p$1.zzRefill.apply(this, []);
zzCurrentPosL=this.zzCurrentPos;
zzMarkedPosL=this.zzMarkedPos;
zzBufferL=this.zzBuffer;
zzEndReadL=this.zzEndRead;
if (eof) {
zzInput=-1;
break zzForAction;
}zzInput=zzBufferL[zzCurrentPosL++].$c();
}var zzNext=zzTransL[zzRowMapL[this.zzState] + (zzCMapL[zzInput]).$c()];
if (zzNext == -1) {
break zzForAction;
}this.zzState=zzNext;
var zzAttributes=zzAttrL[this.zzState];
if ((zzAttributes & 1) == 1) {
zzAction=this.zzState;
zzMarkedPosL=zzCurrentPosL;
if ((zzAttributes & 8) == 8) {
break zzForAction;
}}}
}this.zzMarkedPos=zzMarkedPosL;
switch ((zzAction < 0) ? zzAction : C$.ZZ_ACTION[zzAction]) {
case 3:
{
return C$.unescape$S(p$1.yytext.apply(this, []).substring$I$I(1, p$1.yytext.apply(this, []).length$() - 1));
}case 4:
break;
case 2:
case 5:
break;
case 1:
{
return C$.unescape$S(p$1.yytext.apply(this, []));
}case 6:
break;
default:
if ((zzInput == -1) && (this.zzStartRead == this.zzCurrentPos) ) {
this.zzAtEOF=true;
return null;
}p$1.zzScanError$I.apply(this, [1]);
}
}
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.ZZ_CMAP=C$.zzUnpackCMap$S("\t\u0000\u0002\u0002\u0001\u0000\u0002\u0002\u0012\u0000\u0001\u0002\u0001\u0000\u0001\u0003\u001e\u0000\u0001\u0000\u001a\u0000\u0001\u0001\uffa3\u0000");
C$.ZZ_ACTION=C$.zzUnpackAction$();
C$.ZZ_ROWMAP=C$.zzUnpackRowMap$();
C$.ZZ_TRANS=C$.zzUnpackTrans$();
C$.ZZ_ERROR_MSG=Clazz.array(String, -1, ["Unkown internal scanner error", "Error: could not match input", "Error: pushback value was too large"]);
C$.ZZ_ATTRIBUTE=C$.zzUnpackAttribute$();
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
