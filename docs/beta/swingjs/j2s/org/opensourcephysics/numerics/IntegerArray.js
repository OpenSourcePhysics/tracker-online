(function(){var P$=Clazz.newPackage("org.opensourcephysics.numerics"),I$=[[0,'org.opensourcephysics.numerics.IntegerArray',['org.opensourcephysics.numerics.IntegerArray','.Loader']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IntegerArray", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.errorcode=0;
},1);

C$.$fields$=[['I',['errorcode'],'S',['defaultString'],'O',['array','int[]','+defaultArray']]
,['I',['NumberFormatError','ArrayIndexOutOfBoundsError']]]

Clazz.newMeth(C$, 'c$$I',  function (n) {
;C$.$init$.apply(this);
this.array=Clazz.array(Integer.TYPE, [n]);
this.defaultArray=this.array;
}, 1);

Clazz.newMeth(C$, 'c$$IA',  function (array) {
;C$.$init$.apply(this);
this.defaultArray=array.clone$();
this.array=this.defaultArray;
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (str) {
;C$.$init$.apply(this);
this.array=this.toInteger$S(str);
this.defaultString=str;
this.defaultArray=this.array;
}, 1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return this.defaultString;
});

Clazz.newMeth(C$, 'toString',  function () {
if (this.errorcode > 0) {
return this.defaultString;
}var str="{";
for (var i=0, n=this.array.length; i < n; i++) {
str+=Integer.toString$I(this.array[i]);
if (i < n - 1) {
str+=", ";
}}
str+="}";
return str;
});

Clazz.newMeth(C$, 'getError$',  function () {
return this.errorcode;
});

Clazz.newMeth(C$, 'getArray$S',  function (str) {
this.set$S(str);
return this.array;
});

Clazz.newMeth(C$, 'getArray$',  function () {
return this.array;
});

Clazz.newMeth(C$, 'set$S',  function (str) {
this.errorcode=0;
try {
this.array=this.toInteger$S(str);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NumberFormatException")){
var ex = e$$;
{
this.errorcode=C$.NumberFormatError;
this.array=this.toInteger$S(this.defaultString);
return false;
}
} else if (Clazz.exceptionOf(e$$,"ArrayIndexOutOfBoundsException")){
var ex = e$$;
{
this.errorcode=C$.ArrayIndexOutOfBoundsError;
this.array=this.toInteger$S(this.defaultString);
return false;
}
} else {
throw e$$;
}
}
return true;
});

Clazz.newMeth(C$, 'setDefaultArray$IA',  function (array) {
this.defaultArray=array.clone$();
this.array=this.defaultArray;
});

Clazz.newMeth(C$, 'toInteger$S',  function (str) {
var array=null;
var start=str.indexOf$S("{") + 1;
var end=str.indexOf$S("}");
if (end - start <= 0) {
this.errorcode=C$.ArrayIndexOutOfBoundsError;
return this.defaultArray;
}var s=str.substring$I$I(start, end).split$S(",");
if ((this.array != null ) && (this.array.length != s.length) ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Array length cannot be changed in DoubleArray. " + str]);
}array=Clazz.array(Integer.TYPE, [s.length]);
for (var i=0, n=s.length; i < n; i++) {
try {
array[i]=Integer.parseInt$S(s[i].trim$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
array[i]=0;
this.errorcode=C$.NumberFormatError;
} else {
throw ex;
}
}
}
return array;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(2,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.NumberFormatError=1;
C$.ArrayIndexOutOfBoundsError=2;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.IntegerArray, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var array=obj;
control.setValue$S$O("data", array.getArray$());
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_([control.getObject$S("data")],$I$(1,1).c$$IA);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var dataArray=obj;
var data=control.getObject$S("data");
dataArray.array=data;
dataArray.defaultArray=data;
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
