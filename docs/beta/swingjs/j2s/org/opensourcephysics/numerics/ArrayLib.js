(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'java.io.BufferedReader','java.io.FileReader','java.util.StringTokenizer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ArrayLib");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['IndexMax','IndexMin']]]

Clazz.newMeth(C$, 'max$DA',  function (a) {
var max=-Infinity;
for (var i=0; i < a.length; ++i) {
if (a[i] > max ) {
max=a[i];
C$.IndexMax=i;
}}
return max;
}, 1);

Clazz.newMeth(C$, 'min$DA',  function (a) {
var min=Infinity;
for (var i=0; i < a.length; ++i) {
if (a[i] < min ) {
min=a[i];
C$.IndexMin=i;
}}
return min;
}, 1);

Clazz.newMeth(C$, 'getIndexMax$',  function () {
return C$.IndexMax;
}, 1);

Clazz.newMeth(C$, 'getIndexMin$',  function () {
return C$.IndexMin;
}, 1);

Clazz.newMeth(C$, 'sum$DA',  function (a) {
var sum=0;
for (var i=0; i < a.length; ++i) {
sum+=a[i];
}
return sum;
}, 1);

Clazz.newMeth(C$, 'binarySearch$IA$I',  function (a, key) {
var x1=0;
var x2=a.length;
var i=(x2/2|0);
while (x1 < x2){
if (a[i] == key) {
return i;
} else if (a[i] < key) {
x1=i + 1;
} else {
x2=i;
}i=x1 + ((x2 - x1)/2|0);
}
return -1 * (i + 1);
}, 1);

Clazz.newMeth(C$, 'binarySearch$IA$I$I',  function (a, key, length) {
var x1=0;
var x2=length;
var i=(x2/2|0);
while (x1 < x2){
if (a[i] == key) {
return i;
} else if (a[i] < key) {
x1=i + 1;
} else {
x2=i;
}i=x1 + ((x2 - x1)/2|0);
}
return -1 * (i + 1);
}, 1);

Clazz.newMeth(C$, 'binarySearch$IA$I$I$I',  function (a, key, begin, end) {
var x1=begin;
var x2=end;
var i=x1 + ((x2 - x1)/2|0);
while (x1 < x2){
if (a[i] == key) {
return i;
} else if (a[i] < key) {
x1=i + 1;
} else {
x2=i;
}i=x1 + ((x2 - x1)/2|0);
}
return -1 * (i + 1);
}, 1);

Clazz.newMeth(C$, 'binarySearch$OA$O',  function (a, key) {
var x1=0;
var x2=a.length;
var i=(x2/2|0);
var c;
while (x1 < x2){
c=(a[i]).compareTo$O(key);
if (c == 0) {
return i;
} else if (c < 0) {
x1=i + 1;
} else {
x2=i;
}i=x1 + ((x2 - x1)/2|0);
}
return -1 * (i + 1);
}, 1);

Clazz.newMeth(C$, 'binarySearch$OA$O$I',  function (a, key, length) {
var x1=0;
var x2=length;
var i=(x2/2|0);
var c;
while (x1 < x2){
c=(a[i]).compareTo$O(key);
if (c == 0) {
return i;
} else if (c < 0) {
x1=i + 1;
} else {
x2=i;
}i=x1 + ((x2 - x1)/2|0);
}
return -1 * (i + 1);
}, 1);

Clazz.newMeth(C$, 'binarySearch$OA$O$I$I',  function (a, key, begin, end) {
var x1=begin;
var x2=end;
var i=x1 + ((x2 - x1)/2|0);
var c;
while (x1 < x2){
c=(a[i]).compareTo$O(key);
if (c == 0) {
return i;
} else if (c < 0) {
x1=i + 1;
} else {
x2=i;
}i=x1 + ((x2 - x1)/2|0);
}
return -1 * (i + 1);
}, 1);

Clazz.newMeth(C$, 'binarySearch$OA$O$java_util_Comparator',  function (a, key, cp) {
var x1=0;
var x2=a.length;
var i=(x2/2|0);
var c;
while (x1 < x2){
c=cp.compare$O$O(a[i], key);
if (c == 0) {
return i;
} else if (c < 0) {
x1=i + 1;
} else {
x2=i;
}i=x1 + ((x2 - x1)/2|0);
}
return -1 * (i + 1);
}, 1);

Clazz.newMeth(C$, 'binarySearch$OA$O$java_util_Comparator$I',  function (a, key, cp, length) {
var x1=0;
var x2=length;
var i=(x2/2|0);
var c;
while (x1 < x2){
c=cp.compare$O$O(a[i], key);
if (c == 0) {
return i;
} else if (c < 0) {
x1=i + 1;
} else {
x2=i;
}i=x1 + ((x2 - x1)/2|0);
}
return -1 * (i + 1);
}, 1);

Clazz.newMeth(C$, 'binarySearch$OA$O$java_util_Comparator$I$I',  function (a, key, cp, begin, end) {
var x1=begin;
var x2=end;
var i=x1 + ((x2 - x1)/2|0);
var c;
while (x1 < x2){
c=cp.compare$O$O(a[i], key);
if (c == 0) {
return i;
} else if (c < 0) {
x1=i + 1;
} else {
x2=i;
}i=x1 + ((x2 - x1)/2|0);
}
return -1 * (i + 1);
}, 1);

Clazz.newMeth(C$, 'find$IA$I',  function (a, key) {
for (var i=0; i < a.length; i++) {
if (a[i] == key) {
return i;
}}
return -1;
}, 1);

Clazz.newMeth(C$, 'find$IA$I$I',  function (a, key, length) {
for (var i=0; i < length; i++) {
if (a[i] == key) {
return i;
}}
return -1;
}, 1);

Clazz.newMeth(C$, 'find$IA$I$I$I',  function (a, key, begin, end) {
for (var i=begin; i < end; i++) {
if (a[i] == key) {
return i;
}}
return -1;
}, 1);

Clazz.newMeth(C$, 'resize$IA$I',  function (a, size) {
if (a.length >= size) return a;
var b=Clazz.array(Integer.TYPE, [size]);
System.arraycopy$O$I$O$I$I(a, 0, b, 0, a.length);
return b;
}, 1);

Clazz.newMeth(C$, 'resize$FA$I',  function (a, size) {
if (a.length >= size) return a;
var b=Clazz.array(Float.TYPE, [size]);
System.arraycopy$O$I$O$I$I(a, 0, b, 0, a.length);
return b;
}, 1);

Clazz.newMeth(C$, 'resize$DA$I',  function (a, size) {
if (a.length >= size) return a;
var b=Clazz.array(Double.TYPE, [size]);
System.arraycopy$O$I$O$I$I(a, 0, b, 0, a.length);
return b;
}, 1);

Clazz.newMeth(C$, 'resize$OA$I',  function (a, size) {
if (a.length >= size) return a;
var b=Clazz.array(java.lang.Object, [size]);
System.arraycopy$O$I$O$I$I(a, 0, b, 0, a.length);
return b;
}, 1);

Clazz.newMeth(C$, 'trim$IA$I',  function (a, size) {
if (a.length == size) {
return a;
}var b=Clazz.array(Integer.TYPE, [size]);
System.arraycopy$O$I$O$I$I(a, 0, b, 0, size);
return b;
}, 1);

Clazz.newMeth(C$, 'trim$FA$I',  function (a, size) {
if (a.length == size) {
return a;
}var b=Clazz.array(Float.TYPE, [size]);
System.arraycopy$O$I$O$I$I(a, 0, b, 0, size);
return b;
}, 1);

Clazz.newMeth(C$, 'trim$DA$I',  function (a, size) {
if (a.length == size) {
return a;
}var b=Clazz.array(Double.TYPE, [size]);
System.arraycopy$O$I$O$I$I(a, 0, b, 0, size);
return b;
}, 1);

Clazz.newMeth(C$, 'trim$OA$I',  function (a, size) {
if (a.length == size) {
return a;
}var b=Clazz.array(java.lang.Object, [size]);
System.arraycopy$O$I$O$I$I(a, 0, b, 0, size);
return b;
}, 1);

Clazz.newMeth(C$, 'sort$IA$DA',  function (a, b) {
C$.mergesort$IA$DA$I$I(a, b, 0, a.length - 1);
}, 1);

Clazz.newMeth(C$, 'sort$IA$DA$I',  function (a, b, length) {
C$.mergesort$IA$DA$I$I(a, b, 0, length - 1);
}, 1);

Clazz.newMeth(C$, 'sort$IA$DA$I$I',  function (a, b, begin, end) {
C$.mergesort$IA$DA$I$I(a, b, begin, end - 1);
}, 1);

Clazz.newMeth(C$, 'insertionsort$IA$DA$I$I',  function (a, b, p, r) {
for (var j=p + 1; j <= r; ++j) {
var key=a[j];
var val=b[j];
var i=j - 1;
while (i >= p && a[i] > key ){
a[i + 1]=a[i];
b[i + 1]=b[i];
--i;
}
a[i + 1]=key;
b[i + 1]=val;
}
}, 1);

Clazz.newMeth(C$, 'mergesort$IA$DA$I$I',  function (a, b, p, r) {
if (p >= r) {
return;
}if (r - p + 1 < 30) {
C$.insertionsort$IA$DA$I$I(a, b, p, r);
} else {
var q=((p + r)/2|0);
C$.mergesort$IA$DA$I$I(a, b, p, q);
C$.mergesort$IA$DA$I$I(a, b, q + 1, r);
C$.merge$IA$DA$I$I$I(a, b, p, q, r);
}}, 1);

Clazz.newMeth(C$, 'merge$IA$DA$I$I$I',  function (a, b, p, q, r) {
var t=Clazz.array(Integer.TYPE, [r - p + 1]);
var v=Clazz.array(Double.TYPE, [r - p + 1]);
var i;
var p1=p;
var p2=q + 1;
for (i=0; p1 <= q && p2 <= r ; ++i) {
if (a[p1] < a[p2]) {
v[i]=b[p1];
t[i]=a[p1++];
} else {
v[i]=b[p2];
t[i]=a[p2++];
}}
for (; p1 <= q; ++p1, ++i) {
v[i]=b[p1];
t[i]=a[p1];
}
for (; p2 <= r; ++p2, ++i) {
v[i]=b[p2];
t[i]=a[p2];
}
for (i=0, p1=p; i < t.length; ++i, ++p1) {
b[p1]=v[i];
a[p1]=t[i];
}
}, 1);

Clazz.newMeth(C$, 'sort$IA$IA',  function (a, b) {
C$.mergesort$IA$IA$I$I(a, b, 0, a.length - 1);
}, 1);

Clazz.newMeth(C$, 'sort$IA$IA$I',  function (a, b, length) {
C$.mergesort$IA$IA$I$I(a, b, 0, length - 1);
}, 1);

Clazz.newMeth(C$, 'sort$IA$IA$I$I',  function (a, b, begin, end) {
C$.mergesort$IA$IA$I$I(a, b, begin, end - 1);
}, 1);

Clazz.newMeth(C$, 'insertionsort$IA$IA$I$I',  function (a, b, p, r) {
for (var j=p + 1; j <= r; ++j) {
var key=a[j];
var val=b[j];
var i=j - 1;
while (i >= p && a[i] > key ){
a[i + 1]=a[i];
b[i + 1]=b[i];
--i;
}
a[i + 1]=key;
b[i + 1]=val;
}
}, 1);

Clazz.newMeth(C$, 'mergesort$IA$IA$I$I',  function (a, b, p, r) {
if (p >= r) {
return;
}if (r - p + 1 < 30) {
C$.insertionsort$IA$IA$I$I(a, b, p, r);
} else {
var q=((p + r)/2|0);
C$.mergesort$IA$IA$I$I(a, b, p, q);
C$.mergesort$IA$IA$I$I(a, b, q + 1, r);
C$.merge$IA$IA$I$I$I(a, b, p, q, r);
}}, 1);

Clazz.newMeth(C$, 'merge$IA$IA$I$I$I',  function (a, b, p, q, r) {
var t=Clazz.array(Integer.TYPE, [r - p + 1]);
var v=Clazz.array(Integer.TYPE, [r - p + 1]);
var i;
var p1=p;
var p2=q + 1;
for (i=0; p1 <= q && p2 <= r ; ++i) {
if (a[p1] < a[p2]) {
v[i]=b[p1];
t[i]=a[p1++];
} else {
v[i]=b[p2];
t[i]=a[p2++];
}}
for (; p1 <= q; ++p1, ++i) {
v[i]=b[p1];
t[i]=a[p1];
}
for (; p2 <= r; ++p2, ++i) {
v[i]=b[p2];
t[i]=a[p2];
}
for (i=0, p1=p; i < t.length; ++i, ++p1) {
b[p1]=v[i];
a[p1]=t[i];
}
}, 1);

Clazz.newMeth(C$, 'sort$IA$OA$I$I',  function (a, b, begin, end) {
var length=end - begin;
if (length < 30) {
C$.insertionsort$IA$OA$I$I(a, b, begin, end - 1);
return;
}var ks=Clazz.array(Integer.TYPE, [length]);
var vs=Clazz.array(java.lang.Object, [length]);
for (var i=0, idx=begin; i < length; ++i, ++idx) {
ks[i]=a[idx];
vs[i]=b[idx];
}
C$.mergesort$IA$IA$OA$OA$I$I$I(ks, a, vs, b, begin, end, -begin);
}, 1);

Clazz.newMeth(C$, 'sort$IA$OA$IA$OA$I$I',  function (a, b, abuf, bbuf, begin, end) {
var length=end - begin;
if (length < 30) {
C$.insertionsort$IA$OA$I$I(a, b, begin, end - 1);
return;
}for (var i=0, idx=begin; i < length; ++i, ++idx) {
abuf[i]=a[idx];
bbuf[i]=b[idx];
}
C$.mergesort$IA$IA$OA$OA$I$I$I(abuf, a, bbuf, b, begin, end, -begin);
}, 1);

Clazz.newMeth(C$, 'insertionsort$IA$OA$I$I',  function (a, b, p, r) {
var i;
var key;
var val;
for (var j=p + 1; j <= r; ++j) {
key=a[j];
val=b[j];
i=j - 1;
while (i >= p && a[i] > key ){
a[i + 1]=a[i];
b[i + 1]=b[i];
--i;
}
a[i + 1]=key;
b[i + 1]=val;
}
}, 1);

Clazz.newMeth(C$, 'mergesort$IA$IA$OA$OA$I$I$I',  function (ks, kd, vs, vd, lo, hi, off) {
var length=hi - lo;
if (length < 30) {
C$.insertionsort$IA$OA$I$I(kd, vd, lo, hi - 1);
return;
}var dlo=lo;
var dhi=hi;
lo+=off;
hi+=off;
var mid=(lo + hi) >> 1;
C$.mergesort$IA$IA$OA$OA$I$I$I(kd, ks, vd, vs, lo, mid, -off);
C$.mergesort$IA$IA$OA$OA$I$I$I(kd, ks, vd, vs, mid, hi, -off);
if (ks[mid - 1] <= ks[mid]) {
System.arraycopy$O$I$O$I$I(ks, lo, kd, dlo, length);
System.arraycopy$O$I$O$I$I(vs, lo, vd, dlo, length);
return;
}for (var i=dlo, p=lo, q=mid; i < dhi; i++) {
if (q >= hi || p < mid && ks[p] <= ks[q]  ) {
vd[i]=vs[p];
kd[i]=ks[p++];
} else {
vd[i]=vs[q];
kd[i]=ks[q++];
}}
}, 1);

Clazz.newMeth(C$, 'merge$IA$OA$I$I$I',  function (a, b, p, q, r) {
var t=Clazz.array(Integer.TYPE, [r - p + 1]);
var v=Clazz.array(java.lang.Object, [r - p + 1]);
var i;
var p1=p;
var p2=q + 1;
for (i=0; p1 <= q && p2 <= r ; ++i) {
if (a[p1] < a[p2]) {
v[i]=b[p1];
t[i]=a[p1++];
} else {
v[i]=b[p2];
t[i]=a[p2++];
}}
for (; p1 <= q; ++p1, ++i) {
v[i]=b[p1];
t[i]=a[p1];
}
for (; p2 <= r; ++p2, ++i) {
v[i]=b[p2];
t[i]=a[p2];
}
for (i=0, p1=p; i < t.length; ++i, ++p1) {
b[p1]=v[i];
a[p1]=t[i];
}
}, 1);

Clazz.newMeth(C$, 'sort$DA$IA',  function (a, b) {
C$.mergesort$DA$IA$I$I(a, b, 0, a.length - 1);
}, 1);

Clazz.newMeth(C$, 'sort$DA$IA$I',  function (a, b, length) {
C$.mergesort$DA$IA$I$I(a, b, 0, length - 1);
}, 1);

Clazz.newMeth(C$, 'sort$DA$IA$I$I',  function (a, b, begin, end) {
C$.mergesort$DA$IA$I$I(a, b, begin, end - 1);
}, 1);

Clazz.newMeth(C$, 'insertionsort$DA$IA$I$I',  function (a, b, p, r) {
for (var j=p + 1; j <= r; ++j) {
var key=a[j];
var val=b[j];
var i=j - 1;
while (i >= p && a[i] > key  ){
a[i + 1]=a[i];
b[i + 1]=b[i];
--i;
}
a[i + 1]=key;
b[i + 1]=val;
}
}, 1);

Clazz.newMeth(C$, 'mergesort$DA$IA$I$I',  function (a, b, p, r) {
if (p >= r) {
return;
}if (r - p + 1 < 30) {
C$.insertionsort$DA$IA$I$I(a, b, p, r);
} else {
var q=((p + r)/2|0);
C$.mergesort$DA$IA$I$I(a, b, p, q);
C$.mergesort$DA$IA$I$I(a, b, q + 1, r);
C$.merge$DA$IA$I$I$I(a, b, p, q, r);
}}, 1);

Clazz.newMeth(C$, 'merge$DA$IA$I$I$I',  function (a, b, p, q, r) {
var t=Clazz.array(Double.TYPE, [r - p + 1]);
var v=Clazz.array(Integer.TYPE, [r - p + 1]);
var i;
var p1=p;
var p2=q + 1;
for (i=0; p1 <= q && p2 <= r ; ++i) {
if (a[p1] < a[p2] ) {
v[i]=b[p1];
t[i]=a[p1++];
} else {
v[i]=b[p2];
t[i]=a[p2++];
}}
for (; p1 <= q; ++p1, ++i) {
v[i]=b[p1];
t[i]=a[p1];
}
for (; p2 <= r; ++p2, ++i) {
v[i]=b[p2];
t[i]=a[p2];
}
for (i=0, p1=p; i < t.length; i++, p1++) {
b[p1]=v[i];
a[p1]=t[i];
}
}, 1);

Clazz.newMeth(C$, 'sort$FA$IA',  function (a, b) {
C$.mergesort$FA$IA$I$I(a, b, 0, a.length - 1);
}, 1);

Clazz.newMeth(C$, 'sort$FA$IA$I',  function (a, b, length) {
C$.mergesort$FA$IA$I$I(a, b, 0, length - 1);
}, 1);

Clazz.newMeth(C$, 'sort$FA$IA$I$I',  function (a, b, begin, end) {
C$.mergesort$FA$IA$I$I(a, b, begin, end - 1);
}, 1);

Clazz.newMeth(C$, 'insertionsort$FA$IA$I$I',  function (a, b, p, r) {
for (var j=p + 1; j <= r; ++j) {
var key=a[j];
var val=b[j];
var i=j - 1;
while (i >= p && a[i] > key  ){
a[i + 1]=a[i];
b[i + 1]=b[i];
--i;
}
a[i + 1]=key;
b[i + 1]=val;
}
}, 1);

Clazz.newMeth(C$, 'mergesort$FA$IA$I$I',  function (a, b, p, r) {
if (p >= r) {
return;
}if (r - p + 1 < 30) {
C$.insertionsort$FA$IA$I$I(a, b, p, r);
} else {
var q=((p + r)/2|0);
C$.mergesort$FA$IA$I$I(a, b, p, q);
C$.mergesort$FA$IA$I$I(a, b, q + 1, r);
C$.merge$FA$IA$I$I$I(a, b, p, q, r);
}}, 1);

Clazz.newMeth(C$, 'merge$FA$IA$I$I$I',  function (a, b, p, q, r) {
var t=Clazz.array(Float.TYPE, [r - p + 1]);
var v=Clazz.array(Integer.TYPE, [r - p + 1]);
var i;
var p1=p;
var p2=q + 1;
for (i=0; p1 <= q && p2 <= r ; ++i) {
if (a[p1] < a[p2] ) {
v[i]=b[p1];
t[i]=a[p1++];
} else {
v[i]=b[p2];
t[i]=a[p2++];
}}
for (; p1 <= q; ++p1, ++i) {
v[i]=b[p1];
t[i]=a[p1];
}
for (; p2 <= r; ++p2, ++i) {
v[i]=b[p2];
t[i]=a[p2];
}
for (i=0, p1=p; i < t.length; i++, p1++) {
b[p1]=v[i];
a[p1]=t[i];
}
}, 1);

Clazz.newMeth(C$, 'sort$OA$IA$java_util_Comparator',  function (a, b, cmp) {
C$.mergesort$OA$IA$I$I$java_util_Comparator(a, b, 0, a.length - 1, cmp);
}, 1);

Clazz.newMeth(C$, 'sort$OA$IA$I$java_util_Comparator',  function (a, b, length, cmp) {
C$.mergesort$OA$IA$I$I$java_util_Comparator(a, b, 0, length - 1, cmp);
}, 1);

Clazz.newMeth(C$, 'sort$OA$IA$I$I$java_util_Comparator',  function (a, b, begin, end, cmp) {
C$.mergesort$OA$IA$I$I$java_util_Comparator(a, b, begin, end - 1, cmp);
}, 1);

Clazz.newMeth(C$, 'insertionsort$OA$IA$I$I$java_util_Comparator',  function (a, b, p, r, cmp) {
for (var j=p + 1; j <= r; ++j) {
var key=a[j];
var val=b[j];
var i=j - 1;
while (i >= p && cmp.compare$O$O(a[i], key) > 0 ){
a[i + 1]=a[i];
b[i + 1]=b[i];
--i;
}
a[i + 1]=key;
b[i + 1]=val;
}
}, 1);

Clazz.newMeth(C$, 'mergesort$OA$IA$I$I$java_util_Comparator',  function (a, b, p, r, cmp) {
if (p >= r) {
return;
}if (r - p + 1 < 30) {
C$.insertionsort$OA$IA$I$I$java_util_Comparator(a, b, p, r, cmp);
} else {
var q=((p + r)/2|0);
C$.mergesort$OA$IA$I$I$java_util_Comparator(a, b, p, q, cmp);
C$.mergesort$OA$IA$I$I$java_util_Comparator(a, b, q + 1, r, cmp);
C$.merge$OA$IA$I$I$I$java_util_Comparator(a, b, p, q, r, cmp);
}}, 1);

Clazz.newMeth(C$, 'merge$OA$IA$I$I$I$java_util_Comparator',  function (a, b, p, q, r, cmp) {
var t=Clazz.array(java.lang.Object, [r - p + 1]);
var v=Clazz.array(Integer.TYPE, [r - p + 1]);
var i;
var p1=p;
var p2=q + 1;
for (i=0; p1 <= q && p2 <= r ; ++i) {
if (cmp.compare$O$O(a[p1], a[p2]) < 0) {
v[i]=b[p1];
t[i]=a[p1++];
} else {
v[i]=b[p2];
t[i]=a[p2++];
}}
for (; p1 <= q; ++p1, ++i) {
v[i]=b[p1];
t[i]=a[p1];
}
for (; p2 <= r; ++p2, ++i) {
v[i]=b[p2];
t[i]=a[p2];
}
for (i=0, p1=p; i < t.length; i++, p1++) {
b[p1]=v[i];
a[p1]=t[i];
}
}, 1);

Clazz.newMeth(C$, 'getIntArray$S',  function (filename) {
var array=null;
try {
var br=Clazz.new_([Clazz.new_($I$(2,1).c$$S,[filename])],$I$(1,1).c$$java_io_Reader);
var line=br.readLine$();
br.close$();
var st=Clazz.new_($I$(3,1).c$$S,[line]);
var maxlen=st.countTokens$();
var len=0;
array=Clazz.array(Integer.TYPE, [maxlen]);
while (st.hasMoreTokens$()){
var tok=st.nextToken$();
if (tok.startsWith$S("#")) continue;
array[len++]=Integer.parseInt$S(tok);
}
if (len != maxlen) array=C$.trim$IA$I(array, len);
return array;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
