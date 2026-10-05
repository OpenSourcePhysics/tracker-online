(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,['org.opensourcephysics.display.HistogramDataset','.HistogramDatasetLoader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HistogramDataset", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.Dataset');
C$.$classes$=[['HistogramDatasetLoader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.binSize=1;
},1);

C$.$fields$=[['D',['min','max','binSize'],'I',['n','counts','missedCounts'],'O',['binVals','double[]','+xVals']]]

Clazz.newMeth(C$, 'c$$D$D$D',  function (binMin, binMax, binSize) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setMarkerShape$I(8);
this.setBinWidth$D$D$D(binMin, binMax, binSize);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$D$D$D.apply(this, [0, 100, 1]);
}, 1);

Clazz.newMeth(C$, 'append$D$D',  function (x, y) {
var index=(((x - this.min) / this.binSize)|0);
if ((index < 0) || (index >= this.n) ) {
++this.missedCounts;
} else {
++this.counts;
this.binVals[index]+=y;
this.ymax=Math.max(this.binVals[index], this.ymax);
this.ymin=Math.min(this.binVals[index], this.ymin);
System.arraycopy$O$I$O$I$I(this.binVals, 0, this.ypoints, 0, this.n);
if (this.isConnected$()) {
this.recalculatePath$();
}}});

Clazz.newMeth(C$, 'append$DA$DA',  function (xpoints, ypoints) {
for (var j=0, nj=xpoints.length; j < nj; j++) {
var index=(((xpoints[j] - this.min) / this.binSize)|0);
if ((index < 0) || (index >= this.n) ) {
++this.missedCounts;
} else {
++this.counts;
this.binVals[index]+=ypoints[j];
this.ymax=Math.max(this.binVals[index], this.ymax);
this.ymin=Math.min(this.binVals[index], this.ymin);
}}
System.arraycopy$O$I$O$I$I(this.binVals, 0, this.ypoints, 0, this.n);
if (this.isConnected$()) {
this.recalculatePath$();
}});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.min;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.max;
});

Clazz.newMeth(C$, 'setBinWidth$D$D$D',  function (binMin, binMax, binSize) {
this.counts=0;
this.missedCounts=0;
this.min=binMin;
this.max=binMax;
this.binSize=binSize;
this.n=(((binMax - binMin) / binSize)|0);
this.binVals=Clazz.array(Double.TYPE, [this.n]);
this.xVals=Clazz.array(Double.TYPE, [this.n]);
var x=this.min + binSize / 2;
for (var i=0; i < this.n; i++) {
this.xVals[i]=x;
x+=this.binSize;
}
C$.superclazz.prototype.set$DA$DA.apply(this, [this.xVals, this.binVals]);
});

Clazz.newMeth(C$, 'clear$',  function () {
for (var i=0; i < this.n; i++) {
this.binVals[i]=0;
}
this.counts=0;
this.missedCounts=0;
this.ymax=0;
this.ymin=0;
if (this.n == 0) {
return;
}System.arraycopy$O$I$O$I$I(this.binVals, 0, this.ypoints, 0, this.n);
if (this.isConnected$()) {
this.recalculatePath$();
}});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(1,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.HistogramDataset, "HistogramDatasetLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.opensourcephysics.display.Dataset','.Loader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.saveObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var dataset=obj;
control.setValue$S$D("min", dataset.min);
control.setValue$S$D("max", dataset.max);
control.setValue$S$D("bin_size", dataset.binSize);
control.setValue$S$I("number_of_bins", dataset.n);
control.setValue$S$O("bin_vals", dataset.binVals);
control.setValue$S$O("x_vals", dataset.xVals);
control.setValue$S$I("counts", dataset.counts);
control.setValue$S$I("missed_counts", dataset.missedCounts);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
C$.superclazz.prototype.loadObject$org_opensourcephysics_controls_XMLControl$O.apply(this, [control, obj]);
var dataset=obj;
dataset.setBinWidth$D$D$D(control.getDouble$S("min"), control.getDouble$S("max"), control.getDouble$S("bin_size"));
dataset.binVals=control.getObject$S("bin_vals");
dataset.xVals=control.getObject$S("x_vals");
dataset.counts=control.getInt$S("counts");
dataset.missedCounts=control.getInt$S("missed_counts");
if (dataset.n == 0) {
return obj;
}System.arraycopy$O$I$O$I$I(dataset.xVals, 0, dataset.xpoints, 0, dataset.n);
System.arraycopy$O$I$O$I$I(dataset.binVals, 0, dataset.ypoints, 0, dataset.n);
if (dataset.isConnected$()) {
dataset.recalculatePath$();
}return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
