(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,'org.opensourcephysics.tools.KnownPolynomial','java.awt.image.BufferedImage','org.opensourcephysics.media.core.TPoint',['java.awt.geom.Line2D','.Double'],'java.util.TreeMap','java.awt.AlphaComposite','java.util.BitSet']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TemplateMatcher");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.largeNumber=1.0E20;
this.xValues=Clazz.array(Double.TYPE, [3]);
this.yValues=Clazz.array(Double.TYPE, [3]);
this.alphas=Clazz.array(Integer.TYPE, [2]);
},1);

C$.$fields$=[['D',['largeNumber','peakHeight','peakWidth'],'I',['wTemplate','hTemplate','wTarget','hTarget','wTest','hTest','trimLeft','trimTop','index'],'O',['original','java.awt.image.BufferedImage','+template','+working','+match','mask','java.awt.Shape','pixels','int[]','+templateR','+templateG','+templateB','isPixelTransparent','boolean[]','targetPixels','int[]','xValues','double[]','+yValues','alphas','int[]','parabola','org.opensourcephysics.tools.KnownPolynomial']]]

Clazz.newMeth(C$, 'c$$java_awt_image_BufferedImage$java_awt_Shape',  function (image, maskShape) {
;C$.$init$.apply(this);
this.mask=maskShape;
this.setTemplate$java_awt_image_BufferedImage(image);
this.parabola=Clazz.new_([Clazz.array(Double.TYPE, [3])],$I$(1,1).c$$DA);
}, 1);

Clazz.newMeth(C$, 'setTemplate$java_awt_image_BufferedImage',  function (image) {
var isARGB=(image.getType$() == 2);
var isOK=(this.template != null  && this.wTemplate == image.getWidth$()  && this.hTemplate == image.getHeight$() );
if (!isARGB || !isOK ) {
this.original=C$.ensureType$java_awt_image_BufferedImage$I$I$I(image, image.getWidth$(), image.getHeight$(), 2);
image=this.buildTemplate$java_awt_image_BufferedImage$I$I(this.original, 255, 0);
}this.template=image;
this.pixels=C$.getPixels$java_awt_image_BufferedImage(this.template);
for (var i=this.pixels.length; --i >= 0; ) {
var val=this.pixels[i];
this.templateR[i]=C$.getRed$I(val);
this.templateG[i]=C$.getGreen$I(val);
this.templateB[i]=C$.getBlue$I(val);
this.isPixelTransparent[i]=C$.getAlpha$I(val) == 0;
}
});

Clazz.newMeth(C$, 'getWorkingPixels$',  function () {
return C$.getPixels$java_awt_image_BufferedImage(this.working);
});

Clazz.newMeth(C$, 'getTemplate$',  function () {
if (this.template == null ) {
this.template=this.buildTemplate$java_awt_image_BufferedImage$I$I(this.original, 255, 0);
this.setTemplate$java_awt_image_BufferedImage(this.template);
}return this.template;
});

Clazz.newMeth(C$, 'buildTemplate$java_awt_image_BufferedImage$I$I',  function (image, alphaInput, alphaOriginal) {
var w=image.getWidth$();
var h=image.getHeight$();
var nPixels=w * h;
if (this.original.getWidth$() != w || this.original.getHeight$() != h ) return null;
if (alphaInput == 0 && alphaOriginal == 0 ) return this.template != null  ? this.template : this.original;
this.alphas[0]=alphaInput;
this.alphas[1]=alphaOriginal;
var input=C$.ensureType$java_awt_image_BufferedImage$I$I$I(image, w, h, 2);
this.working=C$.ensureType$java_awt_image_BufferedImage$I$I$I(this.working, w, h, 2);
var gWorking=this.working.createGraphics$();
alphaInput=Math.max(0, Math.min(255, alphaInput));
if (alphaInput > 0) {
gWorking.setComposite$java_awt_Composite(C$.getComposite$I(alphaInput));
gWorking.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(input, 0, 0, null);
}alphaOriginal=Math.max(0, Math.min(255, alphaOriginal));
if (alphaOriginal > 0) {
gWorking.setComposite$java_awt_Composite(C$.getComposite$I(alphaOriginal));
gWorking.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.original, 0, 0, null);
}this.pixels=this.getWorkingPixels$();
if (this.template == null  || w != this.wTemplate  || h != this.hTemplate ) {
this.wTemplate=w;
this.hTemplate=h;
this.template=Clazz.new_($I$(2,1).c$$I$I$I,[w, h, 2]);
this.templateR=Clazz.array(Integer.TYPE, [nPixels]);
this.templateG=Clazz.array(Integer.TYPE, [nPixels]);
this.templateB=Clazz.array(Integer.TYPE, [nPixels]);
this.isPixelTransparent=Clazz.array(Boolean.TYPE, [nPixels]);
}if (this.mask != null ) {
for (var i=nPixels; --i >= 0; ) {
var inside=true;
var x=i % this.wTemplate;
var y=(i/this.wTemplate|0);
for (var j=0; j < 2; j++) {
for (var k=0; k < 2; k++) {
inside=inside && this.mask.contains$D$D(x + j, y + k) ;
}
}
if (!inside) this.pixels[i]=0;
}
}var bsOpaque=C$.getOpaqueBS$IA$I$I(this.pixels, this.wTemplate, this.hTemplate);
this.trimTop=(bsOpaque.nextSetBit$I(0)/this.wTemplate|0);
var trimBottom=this.hTemplate - 1 - ((bsOpaque.length$() - 1)/this.wTemplate|0) ;
var trimRight=this.trimLeft=0;
 outl : while (this.trimLeft < this.wTemplate){
for (var line=this.trimTop, wT=this.wTemplate, i=this.trimTop * wT + this.trimLeft; line < this.hTemplate; line++, i+=wT) {
if (bsOpaque.get$I(i)) break outl;
}
++this.trimLeft;
}
 outr : while ((this.trimLeft + trimRight) < this.wTemplate){
for (var line=0, wT=this.wTemplate, i=wT - 1 - trimRight ; line < this.hTemplate; line++, i+=wT) {
if (bsOpaque.get$I(i)) break outr;
}
++trimRight;
}
if (this.trimLeft + trimRight + this.trimTop + trimBottom  == 0) {
System.arraycopy$O$I$O$I$I(this.pixels, 0, C$.getPixels$java_awt_image_BufferedImage(this.template), 0, nPixels);
} else {
var w0=this.wTemplate;
this.wTemplate-=(this.trimLeft + trimRight);
this.hTemplate-=(this.trimTop + trimBottom);
this.wTemplate=Math.max(this.wTemplate, 1);
this.hTemplate=Math.max(this.hTemplate, 1);
var len=this.wTemplate * this.hTemplate;
this.templateR=Clazz.array(Integer.TYPE, [len]);
this.templateG=Clazz.array(Integer.TYPE, [len]);
this.templateB=Clazz.array(Integer.TYPE, [len]);
this.isPixelTransparent=Clazz.array(Boolean.TYPE, [len]);
this.template=Clazz.new_($I$(2,1).c$$I$I$I,[this.wTemplate, this.hTemplate, 2]);
C$.transferPixels$IA$I$I$I$IA$I(this.pixels, this.trimLeft, this.trimTop, w0, C$.getPixels$java_awt_image_BufferedImage(this.template), this.wTemplate);
this.pixels=Clazz.array(Integer.TYPE, [len]);
}return this.template;
});

Clazz.newMeth(C$, 'getAlphas$',  function () {
return this.alphas;
});

Clazz.newMeth(C$, 'setIndex$I',  function (index) {
this.index=index;
});

Clazz.newMeth(C$, 'getIndex$',  function () {
return this.index;
});

Clazz.newMeth(C$, 'setWorkingPixels$IA',  function (pixels) {
if (pixels != null  && pixels.length == this.wTemplate * this.hTemplate ) {
var p=this.getWorkingPixels$();
if (p !== pixels ) System.arraycopy$O$I$O$I$I(pixels, 0, p, 0, p.length);
}});

Clazz.newMeth(C$, 'getMatchLocation$java_awt_image_BufferedImage$java_awt_Rectangle$IAA$D$D$D',  function (target, searchRect, searchPts, x0, y0, theta) {
var isLinear=searchPts != null ;
this.wTarget=target.getWidth$();
this.hTarget=target.getHeight$();
var left=(this.wTemplate/2|0);
var top=(this.hTemplate/2|0);
var right=left + (this.wTemplate % 2);
var bottom=top + (this.hTemplate % 2);
var sx=searchRect.x=Math.max(left, Math.min(this.wTarget - right, searchRect.x));
var sy=searchRect.y=Math.max(top, Math.min(this.hTarget - bottom, searchRect.y));
var sw=searchRect.width=Math.min(this.wTarget - sx - right , searchRect.width);
var sh=searchRect.height=Math.min(this.hTarget - sy - bottom , searchRect.height);
if (sw <= 0 || sh <= 0 ) {
this.peakHeight=NaN;
this.peakWidth=NaN;
return null;
}var xMin=Math.max(0, sx - left);
var xMax=Math.min(this.wTarget, sx + sw + right );
var yMin=Math.max(0, sy - top);
var yMax=Math.min(this.hTarget, sy + sh + bottom );
this.wTest=xMax - xMin;
this.hTest=yMax - yMin;
target=C$.ensureType$java_awt_image_BufferedImage$I$I$I(target, this.wTarget, this.hTarget, 1);
this.targetPixels=Clazz.array(Integer.TYPE, [this.wTest * this.hTest]);
C$.transferPixels$IA$I$I$I$IA$I(C$.getPixels$java_awt_image_BufferedImage(target), xMin, yMin, this.wTarget, this.targetPixels, this.wTest);
if (searchPts == null ) {
searchPts=Clazz.array(Integer.TYPE, [sw * sh, 2]);
var index=0;
for (var x=0; x < sw; x++) {
for (var y=0; y < sh; y++) {
searchPts[index][0]=x;
searchPts[index][1]=y;
++index;
}
}
}var minDiffSq=this.largeNumber;
var matchIndex=-1;
var avgDiffSq=0;
var n=0;
for (var i=0; i < searchPts.length; i++) {
if (searchPts[i][0] >= sw || searchPts[i][1] >= sh  || searchPts[i][0] < 0  || searchPts[i][1] < 0 ) continue;
var diffSq=p$1.getRGBDiffSquaredAtTestPoint$I$I.apply(this, [searchPts[i][0], searchPts[i][1]]);
avgDiffSq+=diffSq;
++n;
if (diffSq < minDiffSq ) {
minDiffSq=diffSq;
matchIndex=i;
}}
avgDiffSq/=n;
this.peakHeight=avgDiffSq / minDiffSq - 1;
this.peakWidth=NaN;
var xMatch=searchPts[matchIndex][0];
var yMatch=searchPts[matchIndex][1];
var dx=0;
var dy=0;
if (!Double.isInfinite$D(this.peakHeight)) {
var pixels=Clazz.array(Double.TYPE, -1, [-1, 0, 1]);
if (isLinear && matchIndex > 0  && matchIndex < searchPts.length - 1 ) {
var x=searchPts[matchIndex - 1][0];
var y=searchPts[matchIndex - 1][1];
this.xValues[0]=p$1.getRGBDiffSquaredAtTestPoint$I$I.apply(this, [x, y]);
this.xValues[1]=minDiffSq;
x=searchPts[matchIndex + 1][0];
y=searchPts[matchIndex + 1][1];
this.xValues[2]=p$1.getRGBDiffSquaredAtTestPoint$I$I.apply(this, [x, y]);
this.parabola.fitData$DA$DA(pixels, this.xValues);
var c=this.parabola.getCoefficients$();
var dl=-c[1] / (2 * c[2]);
this.peakWidth=Math.sqrt(2 * c[0] / c[2]);
dx=dl * Math.cos(theta);
dy=dl * Math.sin(theta);
} else {
this.xValues[1]=this.yValues[1]=minDiffSq;
for (var i=-1; i < 2; i++) {
if (i == 0) continue;
var diffSq=p$1.getRGBDiffSquaredAtTestPoint$I$I.apply(this, [xMatch + i, yMatch]);
this.xValues[i + 1]=diffSq;
diffSq=p$1.getRGBDiffSquaredAtTestPoint$I$I.apply(this, [xMatch, yMatch + i]);
this.yValues[i + 1]=diffSq;
}
this.parabola.fitData$DA$DA(pixels, this.xValues);
var c=this.parabola.getCoefficients$();
dx=-c[1] / (2 * c[2]);
this.peakWidth=Math.sqrt(2 * c[0] / c[2]);
this.parabola.fitData$DA$DA(pixels, this.yValues);
c=this.parabola.getCoefficients$();
dy=-c[1] / (2 * c[2]);
this.peakWidth=0.5 * (this.peakWidth + Math.sqrt(2 * c[0] / c[2]));
if (Double.isNaN$D(dx)) dx=0;
if (Double.isNaN$D(dy)) dy=0;
}}if (!Double.isNaN$D(this.peakWidth) && this.peakWidth > 1  ) {
this.peakHeight/=this.peakWidth;
}xMatch+=sx - left - this.trimLeft ;
yMatch+=sy - top - this.trimTop ;
p$1.refreshMatchImage$java_awt_image_BufferedImage$I$I.apply(this, [target, xMatch, yMatch]);
var p=Clazz.new_($I$(3,1).c$$D$D,[xMatch + dx, yMatch + dy]);
return p;
});

Clazz.newMeth(C$, 'getMatchImage$',  function () {
return this.match;
});

Clazz.newMeth(C$, 'getMatchWidthAndHeight$',  function () {
return Clazz.array(Double.TYPE, -1, [this.peakWidth, this.peakHeight]);
});

Clazz.newMeth(C$, 'getValue$I$I',  function (a, argb) {
return argb & 16777215 | (a << 24);
}, 1);

Clazz.newMeth(C$, 'getValue$I$I$I$I',  function (a, r, g, b) {
return (a << 24) + (r << 16) + (g << 8) + b ;
}, 1);

Clazz.newMeth(C$, 'getAlpha$I',  function (value) {
var alpha=(value >> 24) & 255;
return alpha;
}, 1);

Clazz.newMeth(C$, 'getRed$I',  function (value) {
var red=(value >> 16) & 255;
return red;
}, 1);

Clazz.newMeth(C$, 'getGreen$I',  function (value) {
var green=(value >> 8) & 255;
return green;
}, 1);

Clazz.newMeth(C$, 'getBlue$I',  function (value) {
var blue=value & 255;
return blue;
}, 1);

Clazz.newMeth(C$, 'refreshMatchImage$java_awt_image_BufferedImage$I$I',  function (target, x, y) {
if (this.match == null  || this.match.getWidth$() != this.wTemplate  || this.match.getHeight$() != this.hTemplate ) {
this.match=Clazz.new_($I$(2,1).c$$I$I$I,[this.wTemplate, this.hTemplate, 2]);
}var matchPixels=C$.getPixels$java_awt_image_BufferedImage(this.match);
C$.transferPixels$IA$I$I$I$IA$I(C$.getPixels$java_awt_image_BufferedImage(target), x + 1, y + 1, this.wTarget, matchPixels, this.wTemplate);
for (var i=matchPixels.length; --i >= 0; ) {
matchPixels[i]=C$.getValue$I$I(this.isPixelTransparent[i] ? 0 : 255, matchPixels[i]);
}
}, p$1);

Clazz.newMeth(C$, 'getRGBDiffSquaredAtTestPoint$I$I',  function (x, y) {
var diff=0;
var xyoff=y * this.wTest + x;
var pmax=xyoff + (this.hTemplate - 1) * this.wTest + this.wTemplate;
if (xyoff < 0 || pmax >= this.targetPixels.length ) return NaN;
for (var j=0, tpt=0, targetIndex=xyoff, dw=this.wTest - this.wTemplate; j < this.hTemplate; j++, targetIndex+=dw) {
for (var i=0; i < this.wTemplate; i++, tpt++, targetIndex++) {
if (targetIndex >= this.targetPixels.length) return NaN;
if (!this.isPixelTransparent[tpt]) {
var pixel=this.targetPixels[targetIndex];
diff+=C$.getRGBDiffSquared$I$I$I$I(pixel, this.templateR[tpt], this.templateG[tpt], this.templateB[tpt]);
}}
}
return diff;
}, p$1);

Clazz.newMeth(C$, 'getSearchPoints$java_awt_Rectangle$D$D$D$I',  function (searchRect, x0, y0, theta, lineSpread) {
var sx=searchRect.x;
var sy=searchRect.y;
var sh=searchRect.height;
var sw=searchRect.width;
var slope=-Math.tan(theta);
var line=Clazz.new_($I$(4,1));
if (Math.abs(slope) > 1.0E10 ) {
line.setLine$D$D$D$D(x0, y0, x0, y0 + 1);
} else if (Math.abs(slope) < 1.0E-10 ) {
line.setLine$D$D$D$D(x0, y0, x0 + 1, y0);
} else {
line.setLine$D$D$D$D(x0, y0, x0 + 1, y0 + slope);
}var uxy=Clazz.array(Double.TYPE, [3]);
var p1=Clazz.array(Double.TYPE, [2]);
var p2=Clazz.array(Double.TYPE, -1, [NaN, NaN]);
var p=p1;
if (C$.getDistanceAndPointAtX$java_awt_geom_Line2D_Double$D$DA(line, sx, uxy)) {
p[0]=uxy[1];
p[1]=uxy[2];
if (p[1] >= sy  && p[1] <= sy + sh  ) {
p=p2;
}}if (C$.getDistanceAndPointAtX$java_awt_geom_Line2D_Double$D$DA(line, sx + sw, uxy)) {
p[0]=uxy[1];
p[1]=uxy[2];
if (p[1] >= sy  && p[1] <= sy + sh  ) {
if (p === p1 ) {
p=p2;
} else {
p=null;
}}}if (p != null ) {
if (C$.getDistanceAndPointAtY$java_awt_geom_Line2D_Double$D$DA(line, sy, uxy)) {
p[0]=uxy[1];
p[1]=uxy[2];
if (p[0] >= sx  && p[0] <= sx + sw  ) {
if (p === p1 ) {
p=p2;
} else if (p1[0] != p2[0]  || p1[1] != p2[1]  ) {
p=null;
}}}if (p === p2 ) {
if (C$.getDistanceAndPointAtY$java_awt_geom_Line2D_Double$D$DA(line, sy + sh, uxy)) {
p[0]=uxy[1];
p[1]=uxy[2];
if (p[0] >= sx  && p[0] <= sx + sw  ) {
if (p === p2  && (p1[0] != p2[0]  || p1[1] != p2[1]  ) ) {
p=null;
}}}}}if (p != null ) return null;
if (p1[0] <= p2[0] ) {
line.setLine$D$D$D$D(p1[0], p1[1], p2[0], p2[1]);
} else {
line.setLine$D$D$D$D(p2[0], p2[1], p1[0], p1[1]);
}var xMin=(Math.ceil(Math.min(p1[0], p2[0]))|0);
var xMax=(Math.floor(Math.max(p1[0], p2[0]))|0);
var yMin=(Math.ceil(Math.min(p1[1], p2[1]))|0);
var yMax=(Math.floor(Math.max(p1[1], p2[1]))|0);
var intersections=Clazz.new_($I$(5,1));
for (var x=xMin; x <= xMax; x++) {
if (C$.getDistanceAndPointAtX$java_awt_geom_Line2D_Double$D$DA(line, x, uxy)) intersections.put$O$O(Double.valueOf$D(uxy[0]), Clazz.array(Double.TYPE, -1, [uxy[1], uxy[2]]));
}
for (var y=yMin; y <= yMax; y++) {
if (C$.getDistanceAndPointAtY$java_awt_geom_Line2D_Double$D$DA(line, y, uxy)) intersections.put$O$O(Double.valueOf$D(uxy[0]), Clazz.array(Double.TYPE, -1, [uxy[1], uxy[2]]));
}
var pts=Clazz.array(Integer.TYPE, [intersections.size$() - 1, 2]);
var i=-1;
var pxy=null;
for (var next, $next = intersections.values$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (pxy != null ) {
pts[i][0]=(((pxy[0] + next[0]) / 2)|0) - sx;
pts[i][1]=(((pxy[1] + next[1]) / 2)|0) - sy;
}pxy=next;
++i;
}
return pts;
});

Clazz.newMeth(C$, 'getDistanceAndPointAtX$java_awt_geom_Line2D_Double$D$DA',  function (line, x, uxy) {
var dx=line.x2 - line.x1;
if (dx == 0 ) return false;
uxy[0]=(x - line.x1) / dx;
uxy[1]=x;
uxy[2]=line.y1 + uxy[0] * (line.y2 - line.y1);
return true;
}, 1);

Clazz.newMeth(C$, 'getDistanceAndPointAtY$java_awt_geom_Line2D_Double$D$DA',  function (line, y, uxy) {
var dy=line.y2 - line.y1;
if (dy == 0 ) return false;
uxy[0]=(y - line.y1) / dy;
uxy[1]=line.x1 + uxy[0] * (line.x2 - line.x1);
uxy[2]=y;
return true;
}, 1);

Clazz.newMeth(C$, 'getRGBDiffSquared$I$I$I$I',  function (pixel, r, g, b) {
var dr=r - ((pixel >> 16) & 255);
var dg=g - ((pixel >> 8) & 255);
var db=b - ((pixel) & 255);
return dr * dr + dg * dg + db * db;
}, 1);

Clazz.newMeth(C$, 'getComposite$I',  function (alpha) {
var a=1.0 * alpha / 255;
return $I$(6).getInstance$I$F(3, a);
}, 1);

Clazz.newMeth(C$, 'ensureType$java_awt_image_BufferedImage$I$I$I',  function (image, w, h, type) {
if (image != null  && image.getType$() == type ) return image;
var bi=Clazz.new_($I$(2,1).c$$I$I$I,[w, h, type]);
if (image != null ) {
var g=bi.createGraphics$();
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(image, 0, 0, null);
g.dispose$();
}return bi;
}, 1);

Clazz.newMeth(C$, 'getPixels$java_awt_image_BufferedImage',  function (img) {
return (img.getRaster$().getDataBuffer$()).getData$();
}, 1);

Clazz.newMeth(C$, 'transferPixels$IA$I$I$I$IA$I',  function (p0, x, y, w0, p1, w1) {
for (var tpt=0, len=p1.length, dw=w0 - w1, pt=y * w0 + x; tpt < len; pt+=dw) {
for (var j=0; j < w1; j++, pt++, tpt++) p1[tpt]=p0[pt];

}
}, 1);

Clazz.newMeth(C$, 'getOpaqueBS$IA$I$I',  function (pixels, w, h) {
var nPixels=w * h;
var bs=Clazz.new_($I$(7,1).c$$I,[nPixels]);
for (var i=nPixels; --i >= 0; ) {
if ((pixels[i] & -16777216) == -16777216) bs.set$I(i);
}
return bs;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
