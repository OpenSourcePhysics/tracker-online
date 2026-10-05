(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics.specialfunctions"),I$=[[0,'org.opensourcephysics.numerics.specialfunctions.Airy','java.util.HashMap',['org.opensourcephysics.numerics.specialfunctions.Airy','.AiryFunction'],['org.opensourcephysics.numerics.specialfunctions.Airy','.AiryDerivative']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Airy", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['AiryFunction',8],['AiryDerivative',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['airyFunction','org.opensourcephysics.numerics.Function','+airyDerivative','zeroMap','java.util.Map']]]

Clazz.newMeth(C$, 'airy$D',  function (x) {
var n;
var l;
var s;
var t;
var u;
var v;
var uc;
var vc;
var k1;
var k2;
var c;
var xt;
var si;
var co;
var expxt;
var sqrtx;
var wwl;
var pl;
var pl1;
var pl2;
var zzz;
var ai;
var xtmp=Clazz.array(Double.TYPE, [26]);
xtmp[1]=14.083081072180963;
xtmp[2]=10.214885479197331;
xtmp[3]=7.441601845045093;
xtmp[4]=5.307094306178192;
xtmp[5]=3.634013502913246;
xtmp[6]=2.331065230305245;
xtmp[7]=1.3447970842609267;
xtmp[8]=0.6418885836956729;
xtmp[9]=0.20100345998121047;
xtmp[10]=0.008059435917205284;
xtmp[11]=3.1542515762964784E-14;
xtmp[12]=6.639421081958493E-11;
xtmp[13]=1.7583889061345668E-8;
xtmp[14]=1.3712392370435816E-6;
xtmp[15]=4.435096663928435E-5;
xtmp[16]=7.155501091771825E-4;
xtmp[17]=0.006488956610333538;
xtmp[18]=0.036440415875773284;
xtmp[19]=0.14399792418590998;
xtmp[20]=0.8123114133626148;
xtmp[21]=0.355028053887817;
xtmp[22]=0.258819403792807;
xtmp[23]=1.7320508075688772;
xtmp[24]=0.7853981633974483;
xtmp[25]=0.5641895835477563;
if ((x >= -5.0 ) && (x <= 8.0 ) ) {
u=v=t=uc=vc=1.0;
s=0.5;
n=3;
zzz=x * x * x ;
while (Math.abs(u) + Math.abs(v) + Math.abs(s) + Math.abs(t)  > 1.0E-18 ){
u=u * zzz / (n * (n - 1));
v=v * zzz / (n * (n + 1));
s=s * zzz / (n * (n + 2));
t=t * zzz / (n * (n - 2));
uc+=u;
vc+=v;
n+=3;
}
if (x < 2.5 ) {
ai=xtmp[21] * uc - xtmp[22] * x * vc ;
return ai;
}}k1=k2=0.0;
sqrtx=Math.sqrt(Math.abs(x));
xt=0.666666666666667 * Math.abs(x) * sqrtx ;
c=xtmp[25] / Math.sqrt(sqrtx);
if (x < 0.0 ) {
x=-x;
co=Math.cos(xt - xtmp[24]);
si=Math.sin(xt - xtmp[24]);
for (l=1; l <= 10; l++) {
wwl=xtmp[l + 10];
pl=xtmp[l] / xt;
pl2=pl * pl;
pl1=1.0 + pl2;
k1+=wwl / pl1;
k2+=wwl * pl / pl1;
}
ai=c * (co * k1 + si * k2);
} else {
if (x < 9.0 ) {
expxt=Math.exp(xt);
} else {
expxt=1.0;
}for (l=1; l <= 10; l++) {
wwl=xtmp[l + 10];
pl=xtmp[l] / xt;
pl1=1.0 + pl;
pl2=1.0 - pl;
k1+=wwl / pl1;
k2+=wwl * pl / (xt * pl1 * pl1 );
}
ai=0.5 * c * k1  / expxt;
if (x >= 9.0 ) {
expxt=Math.pow(x, 1.5);
ai=0.5 * Math.exp(-2.0 * expxt / 3.0) / Math.sqrt(3.141592653589793) / Math.pow(x, 0.25);
}}return ai;
}, 1);

Clazz.newMeth(C$, 'airyDerivative$D',  function (x) {
var n;
var l;
var s;
var t;
var u;
var v;
var sc;
var tc;
var uc;
var vc;
var k1;
var k2;
var k3;
var k4;
var c;
var xt;
var si;
var co;
var expxt;
var sqrtx;
var wwl;
var pl;
var pl1;
var pl2;
var pl3;
var zzz;
var ai;
var aid;
var xtmp=Clazz.array(Double.TYPE, [26]);
xtmp[1]=14.083081072180963;
xtmp[2]=10.214885479197331;
xtmp[3]=7.441601845045093;
xtmp[4]=5.307094306178192;
xtmp[5]=3.634013502913246;
xtmp[6]=2.331065230305245;
xtmp[7]=1.3447970842609267;
xtmp[8]=0.6418885836956729;
xtmp[9]=0.20100345998121047;
xtmp[10]=0.008059435917205284;
xtmp[11]=3.1542515762964784E-14;
xtmp[12]=6.639421081958493E-11;
xtmp[13]=1.7583889061345668E-8;
xtmp[14]=1.3712392370435816E-6;
xtmp[15]=4.435096663928435E-5;
xtmp[16]=7.155501091771825E-4;
xtmp[17]=0.006488956610333538;
xtmp[18]=0.036440415875773284;
xtmp[19]=0.14399792418590998;
xtmp[20]=0.8123114133626148;
xtmp[21]=0.355028053887817;
xtmp[22]=0.258819403792807;
xtmp[23]=1.7320508075688772;
xtmp[24]=0.7853981633974483;
xtmp[25]=0.5641895835477563;
if ((x >= -5.0 ) && (x <= 8.0 ) ) {
u=v=t=uc=vc=tc=1.0;
s=sc=0.5;
n=3;
zzz=x * x * x ;
while (Math.abs(u) + Math.abs(v) + Math.abs(s) + Math.abs(t)  > 1.0E-18 ){
u=u * zzz / (n * (n - 1));
v=v * zzz / (n * (n + 1));
s=s * zzz / (n * (n + 2));
t=t * zzz / (n * (n - 2));
uc+=u;
vc+=v;
sc+=s;
tc+=t;
n+=3;
}
if (x < 2.5 ) {
ai=xtmp[21] * uc - xtmp[22] * x * vc ;
aid=xtmp[21] * sc * x * x  - xtmp[22] * tc;
return aid;
}}k1=k2=k3=k4=0.0;
sqrtx=Math.sqrt(Math.abs(x));
xt=0.666666666666667 * Math.abs(x) * sqrtx ;
c=xtmp[25] / Math.sqrt(sqrtx);
if (x < 0.0 ) {
x=-x;
co=Math.cos(xt - xtmp[24]);
si=Math.sin(xt - xtmp[24]);
for (l=1; l <= 10; l++) {
wwl=xtmp[l + 10];
pl=xtmp[l] / xt;
pl2=pl * pl;
pl1=1.0 + pl2;
pl3=pl1 * pl1;
k1+=wwl / pl1;
k2+=wwl * pl / pl1;
k3+=wwl * pl * (1.0 + pl * (2.0 / xt + pl))  / pl3;
k4+=wwl * (-1.0 - pl * (1.0 + pl * (xt - pl)) / xt) / pl3;
}
ai=c * (co * k1 + si * k2);
aid=0.25 * ai / x - c * sqrtx * (co * k3 + si * k4) ;
} else {
if (x < 9.0 ) {
expxt=Math.exp(xt);
} else {
expxt=1.0;
}for (l=1; l <= 10; l++) {
wwl=xtmp[l + 10];
pl=xtmp[l] / xt;
pl1=1.0 + pl;
pl2=1.0 - pl;
k1+=wwl / pl1;
k2+=wwl * pl / (xt * pl1 * pl1 );
k3+=wwl / pl2;
k4+=wwl * pl / (xt * pl2 * pl2 );
}
ai=0.5 * c * k1  / expxt;
aid=ai * (-0.25 / x - sqrtx) + 0.5 * c * sqrtx * k2  / expxt;
if (x >= 9 ) {
expxt=Math.pow(x, 1.5);
ai=0.5 * Math.exp(-2.0 * expxt / 3.0) / Math.sqrt(3.141592653589793) / Math.pow(x, 0.25);
aid=-ai * Math.pow(x, 0.5) - ai / x / 4.0 ;
}}return aid;
}, 1);

Clazz.newMeth(C$, 'airyZero$I',  function (n) {
if (C$.zeroMap.containsKey$O(Integer.valueOf$I(n))) {
return (C$.zeroMap.get$O(Integer.valueOf$I(n))).valueOf();
}var x=-Math.pow(3.141592653589793 * (n - 0.25) * 3.0  / 2.0, 0.6666666666666666);
var maxIterations=10;
while (maxIterations > 0){
var x0=x;
var ax=C$.airy$D(x);
var dax=C$.airyDerivative$D(x);
x=x - ax / dax;
if (!(Math.abs(x - x0) > 1.0E-9 )) {
break;
}--maxIterations;
}
if (maxIterations == 0) {
x=-Math.pow(3.141592653589793 * (n - 0.25) * 3.0  / 2.0, 0.6666666666666666);
}C$.zeroMap.put$O$O(Integer.valueOf$I(n), Double.valueOf$D(x));
return x;
}, 1);

Clazz.newMeth(C$, 'airynZeros$I',  function (nt) {
var zeros=Clazz.array(Double.TYPE, [nt]);
for (var i=0; i < nt; i++) {
zeros[i]=C$.airyZero$I(i + 1);
}
return zeros;
}, 1);

Clazz.newMeth(C$, 'getFunction$',  function () {
if (C$.airyFunction == null ) {
C$.airyFunction=Clazz.new_($I$(3,1));
}return C$.airyFunction;
}, 1);

Clazz.newMeth(C$, 'getDerivative$',  function () {
if (C$.airyDerivative == null ) {
C$.airyDerivative=Clazz.new_($I$(4,1));
}return C$.airyDerivative;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.airyFunction=null;
C$.airyDerivative=null;
C$.zeroMap=Clazz.new_($I$(2,1));
{
C$.zeroMap.put$O$O(Integer.valueOf$I(1), Double.valueOf$D(-2.338107410459767));
C$.zeroMap.put$O$O(Integer.valueOf$I(2), Double.valueOf$D(-4.087949444130971));
C$.zeroMap.put$O$O(Integer.valueOf$I(3), Double.valueOf$D(-5.520559828095551));
C$.zeroMap.put$O$O(Integer.valueOf$I(4), Double.valueOf$D(-6.786708090071759));
C$.zeroMap.put$O$O(Integer.valueOf$I(5), Double.valueOf$D(-7.944133587120853));
C$.zeroMap.put$O$O(Integer.valueOf$I(6), Double.valueOf$D(-9.02265085334098));
C$.zeroMap.put$O$O(Integer.valueOf$I(7), Double.valueOf$D(-10.04017434155809));
C$.zeroMap.put$O$O(Integer.valueOf$I(8), Double.valueOf$D(-11.00852430373326));
C$.zeroMap.put$O$O(Integer.valueOf$I(9), Double.valueOf$D(-11.93601556323626));
C$.zeroMap.put$O$O(Integer.valueOf$I(10), Double.valueOf$D(-12.82877675286576));
C$.zeroMap.put$O$O(Integer.valueOf$I(11), Double.valueOf$D(-13.69148903521072));
C$.zeroMap.put$O$O(Integer.valueOf$I(12), Double.valueOf$D(-14.52782995177533));
C$.zeroMap.put$O$O(Integer.valueOf$I(13), Double.valueOf$D(-15.340755135978));
C$.zeroMap.put$O$O(Integer.valueOf$I(14), Double.valueOf$D(-16.13268515694577));
C$.zeroMap.put$O$O(Integer.valueOf$I(15), Double.valueOf$D(-16.90563399742994));
C$.zeroMap.put$O$O(Integer.valueOf$I(16), Double.valueOf$D(-17.66130010569706));
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Airy, "AiryFunction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'org.opensourcephysics.numerics.Function');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
return $I$(1).airy$D(x);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Airy, "AiryDerivative", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'org.opensourcephysics.numerics.Function');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'evaluate$D',  function (x) {
return $I$(1).airyDerivative$D(x);
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
