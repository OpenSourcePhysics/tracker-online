(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'org.opensourcephysics.display.DataClip',['org.opensourcephysics.display.DataClip','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataClip", function(){
Clazz.newInstance(this, arguments,0,C$);
}, ['org.opensourcephysics.display.OSPRuntime','.Supported']);
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dataLength=2;
this.startIndex=0;
this.clipLength=0;
this.stride=1;
this.isAdjusting=false;
},1);

C$.$fields$=[['Z',['isAdjusting'],'I',['dataLength','startIndex','clipLength','stride']]]

Clazz.newMeth(C$, 'setDataLength$I',  function (length) {
length=Math.max(length, 1);
this.dataLength=length;
});

Clazz.newMeth(C$, 'getDataLength$',  function () {
return this.dataLength;
});

Clazz.newMeth(C$, 'setClipLength$I',  function (length) {
var prev=this.getClipLength$();
length=Math.min(length, this.dataLength);
if (length == this.dataLength) {
length=0;
}this.clipLength=length;
this.firePropertyChange$S$O$O("clip_length", Integer.valueOf$I(prev), Integer.valueOf$I(this.getClipLength$()));
return this.getClipLength$();
});

Clazz.newMeth(C$, 'getClipLength$',  function () {
if (this.clipLength <= 0) return this.dataLength;
return this.clipLength;
});

Clazz.newMeth(C$, 'setStartIndex$I',  function (start) {
var prev=this.getStartIndex$();
start=Math.max(start, 0);
start=Math.min(start, this.dataLength - 1);
this.startIndex=start;
this.firePropertyChange$S$O$O("clip_start", Integer.valueOf$I(prev), Integer.valueOf$I(start));
return this.getStartIndex$();
});

Clazz.newMeth(C$, 'getStartIndex$',  function () {
return this.startIndex;
});

Clazz.newMeth(C$, 'setStride$I',  function (stride) {
var prev=this.getStride$();
stride=Math.min(stride, this.dataLength - 1);
stride=Math.max(stride, 1);
this.stride=stride;
this.firePropertyChange$S$O$O("clip_stride", Integer.valueOf$I(prev), Integer.valueOf$I(stride));
return this.getStride$();
});

Clazz.newMeth(C$, 'getStride$',  function () {
return this.stride;
});

Clazz.newMeth(C$, 'getAvailableClipLength$',  function () {
var stepCount=this.getClipLength$();
for (var i=stepCount - 1; i > 0; i--) {
if (this.stepToIndex$I(i) < this.dataLength) {
return i + 1;
}}
return 1;
});

Clazz.newMeth(C$, 'stepToIndex$I',  function (stepNumber) {
return this.startIndex + stepNumber * this.stride;
});

Clazz.newMeth(C$, 'indexToStep$I',  function (index) {
return ((index - this.startIndex)/this.stride|0);
});

Clazz.newMeth(C$, 'includesIndex$I',  function (n) {
var stepCount=this.getClipLength$();
for (var i=0; i < stepCount; i++) {
if (this.stepToIndex$I(i) == n) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'setAdjusting$Z',  function (adjusting) {
if (this.isAdjusting == adjusting ) return;
this.isAdjusting=adjusting;
this.firePropertyChange$S$O$O("clip_adjusting", this, Boolean.valueOf$Z(adjusting));
});

Clazz.newMeth(C$, 'isAdjusting$',  function () {
return this.isAdjusting;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(2,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataClip, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var clip=obj;
control.setValue$S$I("start", clip.getStartIndex$());
control.setValue$S$I("clip_length", clip.getClipLength$());
control.setValue$S$I("stride", clip.getStride$());
control.setValue$S$I("data_length", clip.getDataLength$());
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var clip=obj;
clip.setDataLength$I(control.getInt$S("data_length"));
clip.setStartIndex$I(control.getInt$S("start"));
clip.setClipLength$I(control.getInt$S("clip_length"));
clip.setStride$I(control.getInt$S("stride"));
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
