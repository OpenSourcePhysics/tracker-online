(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.gif");
/*c*/var C$=Clazz.newClass(P$, "NeuQuant");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.netindex=Clazz.array(Integer.TYPE, [256]);
this.bias=Clazz.array(Integer.TYPE, [256]);
this.freq=Clazz.array(Integer.TYPE, [256]);
this.radpower=Clazz.array(Integer.TYPE, [32]);
},1);

C$.$fields$=[['I',['alphadec','lengthcount','samplefac'],'O',['thepicture','byte[]','network','int[][]','netindex','int[]','+bias','+freq','+radpower']]]

Clazz.newMeth(C$, 'c$$BA$I$I',  function (thepic, len, sample) {
;C$.$init$.apply(this);
var i;
var p;
this.thepicture=thepic;
this.lengthcount=len;
this.samplefac=sample;
this.network=Clazz.array(Integer.TYPE, [256, null]);
for (i=0; i < 256; i++) {
this.network[i]=Clazz.array(Integer.TYPE, [4]);
p=this.network[i];
p[0]=p[1]=p[2]=((i << (12))/256|0);
this.freq[i]=256;
this.bias[i]=0;
}
}, 1);

Clazz.newMeth(C$, 'colorMap$',  function () {
var map=Clazz.array(Byte.TYPE, [768]);
var index=Clazz.array(Integer.TYPE, [256]);
for (var i=0; i < 256; i++) {
index[this.network[i][3]]=i;
}
var k=0;
for (var i=0; i < 256; i++) {
var j=index[i];
map[k++]=((this.network[j][0])|0);
map[k++]=((this.network[j][1])|0);
map[k++]=((this.network[j][2])|0);
}
return map;
});

Clazz.newMeth(C$, 'inxbuild$',  function () {
var i;
var j;
var smallpos;
var smallval;
var p;
var q;
var previouscol;
var startpos;
previouscol=0;
startpos=0;
for (i=0; i < 256; i++) {
p=this.network[i];
smallpos=i;
smallval=p[1];
for (j=i + 1; j < 256; j++) {
q=this.network[j];
if (q[1] < smallval) {
smallpos=j;
smallval=q[1];
}}
q=this.network[smallpos];
if (i != smallpos) {
j=q[0];
q[0]=p[0];
p[0]=j;
j=q[1];
q[1]=p[1];
p[1]=j;
j=q[2];
q[2]=p[2];
p[2]=j;
j=q[3];
q[3]=p[3];
p[3]=j;
}if (smallval != previouscol) {
this.netindex[previouscol]=(startpos + i) >> 1;
for (j=previouscol + 1; j < smallval; j++) {
this.netindex[j]=i;
}
previouscol=smallval;
startpos=i;
}}
this.netindex[previouscol]=(startpos + 255) >> 1;
for (j=previouscol + 1; j < 256; j++) {
this.netindex[j]=255;
}
});

Clazz.newMeth(C$, 'learn$',  function () {
var i;
var j;
var b;
var g;
var r;
var radius;
var rad;
var alpha;
var step;
var delta;
var samplepixels;
var p;
var pix;
var lim;
if (this.lengthcount < 1509) {
this.samplefac=1;
}this.alphadec=30 + (((this.samplefac - 1)/3|0));
p=this.thepicture;
pix=0;
lim=this.lengthcount;
samplepixels=(this.lengthcount/(3 * this.samplefac)|0);
delta=(samplepixels/100|0);
alpha=1024;
radius=2048;
rad=radius >> 6;
if (rad <= 1) {
rad=0;
}for (i=0; i < rad; i++) {
this.radpower[i]=alpha * ((((rad * rad - i * i) * 256)/(rad * rad)|0));
}
if (this.lengthcount < 1509) {
step=3;
} else if ((this.lengthcount % 499) != 0) {
step=1497;
} else {
if ((this.lengthcount % 491) != 0) {
step=1473;
} else {
if ((this.lengthcount % 487) != 0) {
step=1461;
} else {
step=1509;
}}}i=0;
while (i < samplepixels){
b=(p[pix + 0] & 255) << 4;
g=(p[pix + 1] & 255) << 4;
r=(p[pix + 2] & 255) << 4;
j=this.contest$I$I$I(b, g, r);
this.altersingle$I$I$I$I$I(alpha, j, b, g, r);
if (rad != 0) {
this.alterneigh$I$I$I$I$I(rad, j, b, g, r);
}pix+=step;
if (pix >= lim) {
pix-=this.lengthcount;
}++i;
if (delta == 0) {
delta=1;
}if (i % delta == 0) {
alpha-=(alpha/this.alphadec|0);
radius-=(radius/30|0);
rad=radius >> 6;
if (rad <= 1) {
rad=0;
}for (j=0; j < rad; j++) {
this.radpower[j]=alpha * ((((rad * rad - j * j) * 256)/(rad * rad)|0));
}
}}
});

Clazz.newMeth(C$, 'map$I$I$I',  function (b, g, r) {
var i;
var j;
var dist;
var a;
var bestd;
var p;
var best;
bestd=1000;
best=-1;
i=this.netindex[g];
j=i - 1;
while ((i < 256) || (j >= 0) ){
if (i < 256) {
p=this.network[i];
dist=p[1] - g;
if (dist >= bestd) {
i=256;
} else {
++i;
if (dist < 0) {
dist=-dist;
}a=p[0] - b;
if (a < 0) {
a=-a;
}dist+=a;
if (dist < bestd) {
a=p[2] - r;
if (a < 0) {
a=-a;
}dist+=a;
if (dist < bestd) {
bestd=dist;
best=p[3];
}}}}if (j >= 0) {
p=this.network[j];
dist=g - p[1];
if (dist >= bestd) {
j=-1;
} else {
--j;
if (dist < 0) {
dist=-dist;
}a=p[0] - b;
if (a < 0) {
a=-a;
}dist+=a;
if (dist < bestd) {
a=p[2] - r;
if (a < 0) {
a=-a;
}dist+=a;
if (dist < bestd) {
bestd=dist;
best=p[3];
}}}}}
return (best);
});

Clazz.newMeth(C$, 'process$',  function () {
this.learn$();
this.unbiasnet$();
this.inxbuild$();
return this.colorMap$();
});

Clazz.newMeth(C$, 'unbiasnet$',  function () {
var i;
for (i=0; i < 256; i++) {
this.network[i][0]>>=4;
this.network[i][1]>>=4;
this.network[i][2]>>=4;
this.network[i][3]=i;
}
});

Clazz.newMeth(C$, 'alterneigh$I$I$I$I$I',  function (rad, i, b, g, r) {
var j;
var k;
var lo;
var hi;
var a;
var m;
var p;
lo=i - rad;
if (lo < -1) {
lo=-1;
}hi=i + rad;
if (hi > 256) {
hi=256;
}j=i + 1;
k=i - 1;
m=1;
while ((j < hi) || (k > lo) ){
a=this.radpower[m++];
if (j < hi) {
p=this.network[j++];
try {
p[0]-=((a * (p[0] - b))/262144|0);
p[1]-=((a * (p[1] - g))/262144|0);
p[2]-=((a * (p[2] - r))/262144|0);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}if (k > lo) {
p=this.network[k--];
try {
p[0]-=((a * (p[0] - b))/262144|0);
p[1]-=((a * (p[1] - g))/262144|0);
p[2]-=((a * (p[2] - r))/262144|0);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}}
});

Clazz.newMeth(C$, 'altersingle$I$I$I$I$I',  function (alpha, i, b, g, r) {
var n=this.network[i];
n[0]-=((alpha * (n[0] - b))/1024|0);
n[1]-=((alpha * (n[1] - g))/1024|0);
n[2]-=((alpha * (n[2] - r))/1024|0);
});

Clazz.newMeth(C$, 'contest$I$I$I',  function (b, g, r) {
var i;
var dist;
var a;
var biasdist;
var betafreq;
var bestpos;
var bestbiaspos;
var bestd;
var bestbiasd;
var n;
bestd=~(-2147483648);
bestbiasd=bestd;
bestpos=-1;
bestbiaspos=bestpos;
for (i=0; i < 256; i++) {
n=this.network[i];
dist=n[0] - b;
if (dist < 0) {
dist=-dist;
}a=n[1] - g;
if (a < 0) {
a=-a;
}dist+=a;
a=n[2] - r;
if (a < 0) {
a=-a;
}dist+=a;
if (dist < bestd) {
bestd=dist;
bestpos=i;
}biasdist=dist - ((this.bias[i]) >> (12));
if (biasdist < bestbiasd) {
bestbiasd=biasdist;
bestbiaspos=i;
}betafreq=(this.freq[i] >> 10);
this.freq[i]-=betafreq;
this.bias[i]+=(betafreq << 10);
}
this.freq[bestpos]+=64;
this.bias[bestpos]-=65536;
return (bestbiaspos);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
