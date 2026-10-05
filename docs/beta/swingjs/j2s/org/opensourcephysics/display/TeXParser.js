(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.util.HashMap']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TeXParser");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['np'],'O',['charMap','java.util.Map']]]

Clazz.newMeth(C$, 'parseTeX$S',  function (s) {
var pt;
if (s == null  || (pt=s.indexOf$S("$\\")) < 0 ) {
return s;
}var off=1;
while (pt >= 0){
var pt1=s.indexOf$S$I("$", pt + 1);
if (pt1 < 0) {
pt1=s.length$();
off=0;
}var ch=C$.charMap.get$O(s.substring$I$I(pt + 1, pt1));
s=s.substring$I$I(0, pt) + (ch == null  ? s.substring$I$I(pt + 2, pt1) : ch) + s.substring$I(pt1 + off) ;
pt=(off == 0 ? -1 : s.indexOf$S$I("$\\", pt + 1));
}
return s;
}, 1);

Clazz.newMeth(C$, 'toHTML$S',  function (s) {
return C$.toHTML$S$S$S(C$.toHTML$S$S$S(s, "_{", "sub"), "^{", "sup");
}, 1);

Clazz.newMeth(C$, 'toHTML$S$S$S',  function (s, tex, html) {
var pt;
if (s == null  || (pt=s.indexOf$S(tex)) < 0 ) {
return s;
}var ishtml=false;
while (pt >= 0){
var pt1=s.indexOf$S$I("}", pt + 1);
if (pt1 < 0) {
break;
}s=s.substring$I$I(0, pt) + "<" + html + ">" + s.substring$I$I(pt + 2, pt1) + "</" + html + ">" + s.substring$I(pt1 + 1) ;
ishtml=true;
}
return (ishtml ? "<html>" + s + "</html>"  : s);
}, 1);

Clazz.newMeth(C$, 'removeSubscripting$S',  function (input) {
if (input == null ) {
return null;
}return C$.removeSubscript$S(input) + C$.getSubscript$S(input);
}, 1);

Clazz.newMeth(C$, 'removeSubscript$S',  function (input) {
var n;
return (input == null  ? null : (n=input.indexOf$S("_")) > 0 ? input.substring$I$I(0, n) : input);
}, 1);

Clazz.newMeth(C$, 'getSubscript$S',  function (input) {
if (input == null ) {
return null;
}var subscript="";
var n=input.indexOf$S("_");
if (n > 0) {
subscript=input.substring$I(n + 1);
if (subscript.startsWith$S("{")) {
var m=subscript.indexOf$S("}");
if (m > 0) {
subscript=subscript.substring$I$I(1, m);
}}}return subscript;
}, 1);

Clazz.newMeth(C$, 'addSubscript$S$S',  function (root, subscript) {
if (root == null ) {
return null;
}if (subscript == null ) {
return root;
}subscript=subscript.trim$();
if (subscript.startsWith$S("{")) {
var n=subscript.indexOf$S("}");
if (n == -1) n=subscript.length$();
subscript=subscript.substring$I$I(1, n).trim$();
}if (subscript.equals$O("")) {
return root;
}var prevSubscript=C$.getSubscript$S(root);
if (prevSubscript != null ) {
subscript=prevSubscript + subscript;
}return C$.removeSubscript$S(root) + "_{" + subscript + "}" ;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.charMap=Clazz.new_($I$(1,1));
{
C$.charMap.put$O$O("\\Alpha", "\u0391");
C$.charMap.put$O$O("\\Beta", "\u0392");
C$.charMap.put$O$O("\\Gamma", "\u0393");
C$.charMap.put$O$O("\\Delta", "\u0394");
C$.charMap.put$O$O("\\Epsilon", "\u0395");
C$.charMap.put$O$O("\\Zeta", "\u0396");
C$.charMap.put$O$O("\\Eta", "\u0397");
C$.charMap.put$O$O("\\Theta", "\u0398");
C$.charMap.put$O$O("\\Pi", "\u03a0");
C$.charMap.put$O$O("\\Rho", "\u03a1");
C$.charMap.put$O$O("\\Sigma", "\u03a3");
C$.charMap.put$O$O("\\Tau", "\u03a4");
C$.charMap.put$O$O("\\Phi", "\u03a6");
C$.charMap.put$O$O("\\Chi", "\u03a7");
C$.charMap.put$O$O("\\Psi", "\u03a8");
C$.charMap.put$O$O("\\Omega", "\u03a9");
C$.charMap.put$O$O("\\Xi", "\u039e");
C$.charMap.put$O$O("\\alpha", "\u03b1");
C$.charMap.put$O$O("\\beta", "\u03b2");
C$.charMap.put$O$O("\\gamma", "\u03b3");
C$.charMap.put$O$O("\\delta", "\u03b4");
C$.charMap.put$O$O("\\epsilon", "\u03b5");
C$.charMap.put$O$O("\\zeta", "\u03b6");
C$.charMap.put$O$O("\\eta", "\u03b7");
C$.charMap.put$O$O("\\theta", "\u03b8");
C$.charMap.put$O$O("\\iota", "\u03b9");
C$.charMap.put$O$O("\\kappa", "\u03ba");
C$.charMap.put$O$O("\\lamda", "\u03bb");
C$.charMap.put$O$O("\\lambda", "\u03bb");
C$.charMap.put$O$O("\\mu", "\u03bc");
C$.charMap.put$O$O("\\micro", "\u03bc");
C$.charMap.put$O$O("\\nu", "\u03bd");
C$.charMap.put$O$O("\\xi", "\u03be");
C$.charMap.put$O$O("\\pi", "\u03c0");
C$.charMap.put$O$O("\\rho", "\u03c1");
C$.charMap.put$O$O("\\sigma", "\u03c3");
C$.charMap.put$O$O("\\tau", "\u03c4");
C$.charMap.put$O$O("\\phi", "\u03c6");
C$.charMap.put$O$O("\\chi", "\u03c7");
C$.charMap.put$O$O("\\psi", "\u03c8");
C$.charMap.put$O$O("\\omega", "\u03c9");
C$.charMap.put$O$O("\\degree", "\u00b0");
C$.charMap.put$O$O("\\sqr", "\u00b2");
C$.charMap.put$O$O("\\pm", "\u00b1");
C$.charMap.put$O$O("\\neq", "\u2260");
C$.charMap.put$O$O("\\leq", "\u2264");
C$.charMap.put$O$O("\\geq", "\u00f7");
C$.charMap.put$O$O("\\div", "\u00f7");
C$.charMap.put$O$O("\\perp", "\u27c2");
C$.charMap.put$O$O("\\parallel", "\u2225");
};
C$.np=0;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
