(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Base64Coder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['map1','char[]','map2','byte[]']]]

Clazz.newMeth(C$, 'encode$BA',  function ($in) {
return C$.encode$BA$I($in, $in.length);
}, 1);

Clazz.newMeth(C$, 'encode$BA$I',  function ($in, iLen) {
var oDataLen=((iLen * 4 + 2)/3|0);
var oLen=(((iLen + 2)/3|0)) * 4;
var out=Clazz.array(Character.TYPE, [oLen]);
var ip=0;
var op=0;
while (ip < iLen){
var i0=$in[ip++] & 255;
var i1=(ip < iLen) ? $in[ip++] & 255 : 0;
var i2=(ip < iLen) ? $in[ip++] & 255 : 0;
var o0=i0 >>> 2;
var o1=((i0 & 3) << 4) | (i1 >>> 4);
var o2=((i1 & 15) << 2) | (i2 >>> 6);
var o3=i2 & 63;
out[op++]=C$.map1[o0];
out[op++]=C$.map1[o1];
out[op]=(op < oDataLen) ? C$.map1[o2] : "=";
++op;
out[op]=(op < oDataLen) ? C$.map1[o3] : "=";
++op;
}
return out;
}, 1);

Clazz.newMeth(C$, 'decode$S',  function (s) {
return C$.decode$CA(s.toCharArray$());
}, 1);

Clazz.newMeth(C$, 'decode$CA',  function ($in) {
var iLen=$in.length;
if (iLen % 4 != 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Length of Base64 encoded input string is not a multiple of 4."]);
}while ((iLen > 0) && ($in[iLen - 1] == "=") ){
--iLen;
}
var oLen=((iLen * 3)/4|0);
var out=Clazz.array(Byte.TYPE, [oLen]);
var ip=0;
var op=0;
while (ip < iLen){
var i0=$in[ip++].$c();
var i1=$in[ip++].$c();
var i2=(ip < iLen) ? $in[ip++] : "A".$c();
var i3=(ip < iLen) ? $in[ip++] : "A".$c();
if ((i0 > 127) || (i1 > 127) || (i2 > 127) || (i3 > 127)  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal character in Base64 encoded data."]);
}var b0=C$.map2[i0];
var b1=C$.map2[i1];
var b2=C$.map2[i2];
var b3=C$.map2[i3];
if ((b0 < 0) || (b1 < 0) || (b2 < 0) || (b3 < 0)  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal character in Base64 encoded data."]);
}var o0=(b0 << 2) | (b1 >>> 4);
var o1=((b1 & 15) << 4) | (b2 >>> 2);
var o2=((b2 & 3) << 6) | b3;
out[op++]=(o0|0);
if (op < oLen) {
out[op++]=(o1|0);
}if (op < oLen) {
out[op++]=(o2|0);
}}
return out;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.map1=Clazz.array(Character.TYPE, [64]);
{
var i=0;
for (var c="A"; c <= "Z"; c=String.fromCharCode(c.$c()+1)) {
C$.map1[i++]=c;
}
for (var c="a"; c <= "z"; c=String.fromCharCode(c.$c()+1)) {
C$.map1[i++]=c;
}
for (var c="0"; c <= "9"; c=String.fromCharCode(c.$c()+1)) {
C$.map1[i++]=c;
}
C$.map1[i++]="+";
C$.map1[i++]="/";
};
C$.map2=Clazz.array(Byte.TYPE, [128]);
{
for (var i=0; i < C$.map2.length; i++) {
C$.map2[i]=(-1|0);
}
for (var i=0; i < 64; i++) {
C$.map2[(C$.map1[i]).$c()]=(i|0);
}
};
};
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
