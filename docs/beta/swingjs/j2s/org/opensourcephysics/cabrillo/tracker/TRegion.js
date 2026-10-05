(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'org.opensourcephysics.media.core.TPoint','java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TRegion", null, 'java.awt.Polygon');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.brightLimit=0.5;
this.w=100;
this.h=100;
this.hsb=Clazz.array(Float.TYPE, [3]);
},1);

C$.$fields$=[['F',['brightLimit'],'I',['width','height','w','h','x0','y0'],'O',['pixels','int[]','hsb','float[]']]]

Clazz.newMeth(C$, 'c$$java_awt_image_BufferedImage$I$I',  function (image, x0, y0) {
Clazz.super_(C$, this);
this.width=image.getWidth$();
this.height=image.getHeight$();
this.pixels=Clazz.array(Integer.TYPE, [this.width * this.height]);
image.getRaster$().getDataElements$I$I$I$I$O(0, 0, this.width, this.height, this.pixels);
this.x0=x0;
this.y0=y0;
this.findEdge$();
}, 1);

Clazz.newMeth(C$, 'getCenter$',  function () {
if (this.npoints == 0) return null;
var x=this.getBounds2D$().getCenterX$();
var y=this.getBounds2D$().getCenterY$();
return Clazz.new_($I$(1,1).c$$D$D,[x, y]);
});

Clazz.newMeth(C$, 'findEdge$',  function () {
var foundEdge=false;
var foundInside=false;
var moveUp=false;
var x=this.x0;
var y=this.y0;
var rightLimit=Math.min(this.width, this.x0 + (this.w/2|0));
var leftLimit=Math.max(0, this.x0 - (this.w/2|0));
var topLimit=Math.max(0, this.y0 - (this.h/2|0));
var bottomLimit=Math.min(this.height, this.y0 + (this.h/2|0));
var n=1;
while (!foundInside){
if (y <= topLimit || y >= bottomLimit ) break;
if (p$1.isInside$I$I.apply(this, [x, y])) {
foundInside=true;
}if (!foundInside) {
if (x < rightLimit) ++x;
 else {
if (moveUp) {
y=this.y0 - n;
moveUp=false;
} else {
y=this.y0 + n;
moveUp=true;
++n;
}x=leftLimit;
}}}
while (foundInside && x >= leftLimit ){
--x;
if (!p$1.isInside$I$I.apply(this, [x, y])) {
++x;
foundEdge=true;
break;
}}
if (foundEdge) {
this.reset$();
p$1.traceEdge$I$I$C.apply(this, [x, y, "U"]);
}});

Clazz.newMeth(C$, 'isInside$I$I',  function (x, y) {
var pixel=this.pixels[y * this.w + x];
var r=(pixel >> 16) & 255;
var g=(pixel >> 8) & 255;
var b=(pixel) & 255;
$I$(2).RGBtoHSB$I$I$I$FA(r, g, b, this.hsb);
if (this.hsb[2] >= this.brightLimit ) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'traceEdge$I$I$C',  function (x, y, startingDirection) {
var table=Clazz.array(Character.TYPE, -1, ["X", "R", "D", "R", "U", "U", "u", "U", "L", "l", "D", "R", "L", "L", "D", "X"]);
var direction=startingDirection;
var hloc=x;
var vloc=y;
var UL=p$1.isInside$I$I.apply(this, [hloc - 1, vloc - 1]);
var UR=p$1.isInside$I$I.apply(this, [hloc, vloc - 1]);
var LL=p$1.isInside$I$I.apply(this, [hloc - 1, vloc]);
var LR=p$1.isInside$I$I.apply(this, [hloc, vloc]);
this.addPoint$I$I(hloc, vloc);
do {
var index=0;
if (LR) index|=1;
if (LL) index|=2;
if (UR) index|=4;
if (UL) index|=8;
var newDirection=table[index];
if (newDirection == "u") {
if (direction == "R") newDirection="U";
 else newDirection="D";
}if (newDirection == "l") {
if (direction == "U") newDirection="L";
 else newDirection="R";
}switch (newDirection.$c()) {
case 85:
--vloc;
LL=UL;
LR=UR;
UL=p$1.isInside$I$I.apply(this, [hloc - 1, vloc - 1]);
UR=p$1.isInside$I$I.apply(this, [hloc, vloc - 1]);
break;
case 68:
++vloc;
UL=LL;
UR=LR;
LL=p$1.isInside$I$I.apply(this, [hloc - 1, vloc]);
LR=p$1.isInside$I$I.apply(this, [hloc, vloc]);
break;
case 76:
--hloc;
UR=UL;
LR=LL;
UL=p$1.isInside$I$I.apply(this, [hloc - 1, vloc - 1]);
LL=p$1.isInside$I$I.apply(this, [hloc - 1, vloc]);
break;
case 82:
++hloc;
UL=UR;
LL=LR;
UR=p$1.isInside$I$I.apply(this, [hloc, vloc - 1]);
LR=p$1.isInside$I$I.apply(this, [hloc, vloc]);
break;
}
this.addPoint$I$I(hloc, vloc);
direction=newDirection;
} while (direction != "X" && !(hloc == x && vloc == y  && direction == startingDirection ) );
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:07 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
