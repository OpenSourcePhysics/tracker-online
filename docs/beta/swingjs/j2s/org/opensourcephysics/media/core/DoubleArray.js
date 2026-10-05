(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "DoubleArray");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['length'],'O',['map','double[]']]]

Clazz.newMeth(C$, 'c$$I$D',  function (initialLength, initialValue) {
;C$.$init$.apply(this);
this.length=initialLength;
this.map=Clazz.array(Double.TYPE, [this.length]);
p$1.fill$D$I.apply(this, [initialValue, 0]);
}, 1);

Clazz.newMeth(C$, 'get$I',  function (n) {
if (n >= this.length) {
this.setLength$I(n + 1);
}return this.map[n];
});

Clazz.newMeth(C$, 'set$I$D',  function (n, value) {
if (n >= this.length) {
this.setLength$I(n + 1);
}var changed=this.map[n] != value ;
this.map[n]=value;
return changed;
});

Clazz.newMeth(C$, 'setLength$I',  function (newLength) {
if ((newLength == this.length) || (newLength < 1) ) {
return;
}var newMap=Clazz.array(Double.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(this.map, 0, newMap, 0, Math.min(newLength, this.length));
this.map=newMap;
if (newLength > this.length) {
var val=this.map[this.length - 1];
var n=this.length;
this.length=newLength;
p$1.fill$D$I.apply(this, [val, n]);
} else {
this.length=newLength;
}});

Clazz.newMeth(C$, 'fill$D',  function (value) {
var changed=false;
for (var n=this.length - 1; n >= 0; n--) {
changed=changed || (this.map[n] != value ) ;
this.map[n]=value;
}
return changed;
});

Clazz.newMeth(C$, 'fill$D$I$I',  function (value, start, end) {
var changed=false;
end=Math.min(end, this.length - 1);
start=Math.max(0, start);
for (var n=end; n >= start; n--) {
changed=changed || (this.map[n] != value ) ;
this.map[n]=value;
}
return changed;
});

Clazz.newMeth(C$, 'fill$D$I',  function (value, startFrame) {
for (var n=startFrame; n < this.length; n++) {
this.map[n]=value;
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
