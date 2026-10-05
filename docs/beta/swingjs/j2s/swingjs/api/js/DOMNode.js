(function(){var P$=Clazz.newPackage("swingjs.api.js"),I$=[[0,'swingjs.api.js.DOMNode','java.awt.Dimension']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "DOMNode", function(){
});
C$.$classes$=[['HTML5Canvas',9],['JQuery',9]];

C$.$fields$=[[]
,['O',['jQuery','swingjs.api.js.DOMNode.JQuery']]]

Clazz.newMeth(C$, 'createElement',  function (key, id) {
var node=null;

node = document.createElement(key);
id && (node.id = id);
return node;
}, 1);

Clazz.newMeth(C$, 'getElement',  function (id) {
return (document.getElementById(id) ||null);
}, 1);

Clazz.newMeth(C$, 'createTextNode',  function (text) {
return (document.createTextNode(text) ||null);
}, 1);

Clazz.newMeth(C$, 'getParent',  function (node) {
return (node.parentNode ||null);
}, 1);

Clazz.newMeth(C$, 'getPreviousSibling',  function (node) {
return (node.previousSibling ||null);
}, 1);

Clazz.newMeth(C$, 'firstChild',  function (node) {
return (node.firstChild ||null);
}, 1);

Clazz.newMeth(C$, 'lastChild',  function (node) {
return (node.lastChild ||null);
}, 1);

Clazz.newMeth(C$, 'setZ',  function (node, z) {
return C$.setStyle(node, "z-index", "" + z);
}, 1);

Clazz.newMeth(C$, 'getAttr',  function (node, attr) {
{
if (!node) return null;
var a = node[attr];
return (typeof a == "undefined" ? null : a);
}
}, 1);

Clazz.newMeth(C$, 'getAttrInt',  function (node, attr) {
return (node && node[attr] ||0);
}, 1);

Clazz.newMeth(C$, 'getStyle',  function (node, style) {
return (node && node.style[style] ||null);
}, 1);

Clazz.newMeth(C$, 'getCSSRectangle',  function (node, r) {

r.x = parseInt(node.style.left.split("p")[0]);
r.y = parseInt(node.style.top.split("p")[0]);
r.width = parseInt(node.style.width.split("p")[0]);
r.height = parseInt(node.style.height.split("p")[0]);
}, 1);

Clazz.newMeth(C$, 'setAttr',  function (node, attr, val) {

attr && (node[attr] = (val == "秘TRUE" ? true : val == "秘FALSE" ? false : val));
return node;
}, 1);

Clazz.newMeth(C$, 'setAttrInt',  function (node, attr, val) {

node[attr] = val;
}, 1);

Clazz.newMeth(C$, 'setAttrs',  function (node, attr) {

for (var i = 0; i < attr.length;) { C$.setAttr(node, attr[i++],attr[i++]);
}
return node;
}, 1);

Clazz.newMeth(C$, 'setStyle',  function (node, attr, val) {

node && (node.style[attr] = val);
return node;
}, 1);

Clazz.newMeth(C$, 'setStyles',  function (node, av) {

if (node)for (var i = 0, n = av.length; i < n;) { var k = av[i++], v = av[i++];
node.style[k] != v && (node.style[k] = v);
}
return node;
}, 1);

Clazz.newMeth(C$, 'setSize',  function (node, width, height) {
return C$.setStyles(node, ["width", width + "px", "height", height + "px"]);
}, 1);

Clazz.newMeth(C$, 'setPositionAbsolute',  function (node) {
return C$.setStyle(node, "position", "absolute");
}, 1);

Clazz.newMeth(C$, 'setVisible',  function (node, visible) {
C$.setStyle(node, "display", visible ? "block" : "none");
}, 1);

Clazz.newMeth(C$, 'setTopLeftAbsolute',  function (node, top, left) {
return C$.setStyles(node, ["top", top + "px", "left", left + "px", "position", "absolute"]);
}, 1);

Clazz.newMeth(C$, 'addHorizontalGap',  function (domNode, gap) {
var label=C$.setStyles(C$.createElement("label", null), ["letter-spacing", gap + "px", "font-size", "0pt"]);
label.appendChild(C$.createTextNode("."));
domNode.appendChild(label);
}, 1);

Clazz.newMeth(C$, 'appendChildSafely',  function (parent, node) {

if (!parent || node.parentElement == parent) return;
parent.appendChild(node);
}, 1);

Clazz.newMeth(C$, 'getHeight',  function (node) {
return C$.jQuery.$(node).height();
}, 1);

Clazz.newMeth(C$, 'getWidth',  function (node) {
return C$.jQuery.$(node).width();
}, 1);

Clazz.newMeth(C$, 'dispose',  function (node) {
if (node != null ) C$.jQuery.$(node).remove();
}, 1);

Clazz.newMeth(C$, 'remove',  function (node) {
var p=C$.getParent(node);
if (p != null ) p.removeChild(node);
}, 1);

Clazz.newMeth(C$, 'detachAll',  function (node) {

if(node) while(node.lastChild) node.removeChild(node.lastChild);
}, 1);

Clazz.newMeth(C$, 'transferTo',  function (node, container) {
if (node == null ) return null;
var p=C$.getParent(node);
try {
if (p != null ) C$.jQuery.$(node).detach();
} catch (e) {
}
if (container == null ) return p;
C$.jQuery.$(container).append(node);
return container;
}, 1);

Clazz.newMeth(C$, 'getEmbedded',  function (name, type) {
var node=C$.getElement(name + "-div");
if (node == null ) return null;
switch (type) {
case "node":
return node;
case "dim":
return Clazz.new_([C$.getWidth(node), C$.getHeight(node)],$I$(2,1).c$$I$I);
default:
return C$.getAttr(node, type);
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.jQuery=jQuery.$ || (jQuery.$ = jQuery) ||null;
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.DOMNode, "HTML5Canvas", function(){
}, null, 'swingjs.api.js.DOMNode');
C$.$classes$=[['Context2D',1033]];

C$.$clinit$=2;

Clazz.newMeth(C$, 'getDataBufferBytes',  function (canvas, sourceNode, w, h) {
if (sourceNode != null ) {
$I$(1).setAttrInt(canvas, "width", w);
$I$(1).setAttrInt(canvas, "height", h);
}var ctx=canvas.getContext("2d");
if (sourceNode != null ) {
ctx.drawImage(sourceNode, 0, 0, w, h);
}return ctx.getImageData(0, 0, w, h).data;
}, 1);

Clazz.newMeth(C$, 'setImageNode',  function (sourceNode, image) {
{
image._setImageNode$O$Z(sourceNode, false);
}
}, 1);

Clazz.newMeth(C$, 'createCanvas',  function (width, height, id) {
var canvas=$I$(1,"createElement",["canvas", (id == null  ? "img" + new Double(Math.random()).toString() : id + "")]);
$I$(1).setStyles(canvas, ["width", width + "px", "height", height + "px"]);

canvas.width = width;
canvas.height = height;
return canvas;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DOMNode.HTML5Canvas, "Context2D", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['ImageData',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['lineWidth'],'F',['globalAlpha'],'S',['font','fillStyle','strokeStyle'],'O',['imageData','swingjs.api.js.DOMNode.HTML5Canvas.Context2D.ImageData','_aSaved','Object[][]']]]

Clazz.newMeth(C$, 'push',  function (ctx, map) {
{
(ctx._aSaved || (ctx._aSaved = [])).push(map);
return ctx._aSaved.length;
}
}, 1);

Clazz.newMeth(C$, 'pop',  function (ctx) {
{
return (ctx._aSaved && ctx._aSaved.length > 0 ? ctx._aSaved.pop() : null);
}
}, 1);

Clazz.newMeth(C$, 'getSavedLevel',  function (ctx) {
{
return (ctx._aSaved ? ctx._aSaved.length : 0);
}
}, 1);

Clazz.newMeth(C$, 'getSavedStack',  function (ctx) {
{
return (ctx._aSaved || []);
}
}, 1);

Clazz.newMeth(C$, 'setMatrix',  function (ctx, transform) {
var m=ctx._m ||null;
if (transform == null ) {

ctx._m = null;
return null;
}if (m == null ) {

ctx._m = m = new Array(6);
transform.getMatrix$DA(m);
}return m;
}, 1);

Clazz.newMeth(C$, 'createLinearGradient',  function (ctx, p1, p2, css1, css2) {

var grd = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
grd.addColorStop(0,css1);
grd.addColorStop(1,css2);
ctx.fillStyle = grd;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DOMNode.HTML5Canvas.Context2D, "ImageData", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['data','int[]']]]

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.DOMNode, "JQuery", function(){
});
C$.$classes$=[['JQueryObject',9]];
;
(function(){/*i*/var C$=Clazz.newInterface(P$.DOMNode.JQuery, "JQueryObject", function(){
});
C$.$classes$=[['JQEvent',9]];

Clazz.newMeth(C$, 'getDOMNode',  function (jnode) {
return (jnode == null  ? null : (jnode)[0]);
}, 1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.DOMNode.JQuery.JQueryObject, "JQEvent", function(){
});
})()
})()
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-23 20:27:28 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
