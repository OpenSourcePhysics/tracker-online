(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.display.Dataset','java.util.ArrayList','org.opensourcephysics.tools.ToolsRes','org.opensourcephysics.numerics.ParsedMultiVarFunction','org.opensourcephysics.display.TeXParser',['org.opensourcephysics.display.DataFunction','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataFunction", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.Dataset', [['org.opensourcephysics.tools.FunctionEditor','org.opensourcephysics.tools.FunctionEditor.FObject']]);
C$.$classes$=[['Loader',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.data=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['I',['varCount'],'S',['expression','inputString'],'O',['datasetManager','org.opensourcephysics.display.DatasetManager','myFunction','org.opensourcephysics.numerics.ParsedMultiVarFunction','data','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_DatasetManager',  function (input) {
C$.c$$org_opensourcephysics_display_DatasetManager$S$S.apply(this, [input, null, "0"]);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_DatasetManager$S$S',  function (input, name, expression) {
Clazz.super_(C$, this);
this.datasetManager=input;
this.setXYColumnNames$S$S(input.getDataset$I(0).getXColumnName$(), name == null  ? $I$(4).getString$S("DataFunction.DefaultName") : name);
this.setXColumnVisible$Z(false);
this.setExpression$S(expression);
}, 1);

Clazz.newMeth(C$, 'setExpression$S',  function (e) {
this.setExpression$S$SA(e, null);
});

Clazz.newMeth(C$, 'setExpression$S$SA',  function (e, vnames) {
this.varCount=p$1.getVarCount.apply(this, []);
try {
if (e === "" ) e="0";
if (vnames == null ) vnames=p$1.getVarNames.apply(this, []);
this.myFunction=Clazz.new_($I$(5,1).c$$S$SA$Z,[e, vnames, false]);
this.expression=e;
this.inputString=e;
this.refreshFunctionData$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"org.opensourcephysics.numerics.ParserException")){
this.setExpression$S$SA("0", vnames);
this.inputString=e;
this.refreshFunctionData$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'getExpression$',  function () {
return this.expression;
});

Clazz.newMeth(C$, 'setYColumnName$S',  function (name) {
if ((name == null ) || name.equals$O("") ) {
return;
}this.setXYColumnNames$S$S(this.getXColumnName$(), name);
});

Clazz.newMeth(C$, 'getInputString$',  function () {
return this.inputString;
});

Clazz.newMeth(C$, 'refreshFunctionData$',  function () {
C$.superclazz.prototype.clear$.apply(this, []);
if (this.myFunction == null ) {
return;
}if (this.varCount != p$1.getVarCount.apply(this, [])) {
this.setExpression$S(this.inputString);
return;
}var data=p$1.getFunctionData.apply(this, []);
if (data.length == 0) {
return;
}var fData=Clazz.array(Double.TYPE, [data.length]);
var len=data[0].length;
for (var n=0; n < len; n++) {
for (var i=0; i < data.length; i++) {
if (n < data[i].length) {
fData[i]=data[i][n];
} else {
fData[i]=NaN;
}}
var val=NaN;
if (!"0".equals$O(this.expression) || "0".equals$O(this.inputString) ) {
val=this.myFunction.evaluate$DA(fData);
if (this.myFunction.evaluatedToNaN$()) {
val=NaN;
}}C$.superclazz.prototype.append$D$D.apply(this, [fData[0], val]);
}
});

Clazz.newMeth(C$, 'append$D$D',  function (x, y) {
});

Clazz.newMeth(C$, 'append$D$D$D$D',  function (x, y, dx, dy) {
});

Clazz.newMeth(C$, 'append$DA$DA',  function (x, y) {
});

Clazz.newMeth(C$, 'append$DA$DA$DA$DA',  function (x, y, dx, dy) {
});

Clazz.newMeth(C$, 'clear$',  function () {
});

Clazz.newMeth(C$, 'getFunctionData',  function () {
var length=0;
this.data.clear$();
var datasets=this.datasetManager.getDatasetsRaw$();
for (var i=0, n=datasets.size$(); i < n; i++) {
var dataset=datasets.get$I(i);
if (dataset === this ) {
continue;
}if (this.data.isEmpty$()) {
var xPoints=dataset.getXPoints$();
length=xPoints.length;
this.data.add$O(xPoints);
}this.data.add$O(dataset.getYPoints$());
}
var names=this.datasetManager.getConstantNames$();
for (var next, $next = names.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var points=Clazz.array(Double.TYPE, [length]);
var val=(this.datasetManager.getConstantValue$S(next)).valueOf();
for (var i=0; i < length; i++) {
points[i]=val;
}
this.data.add$O(points);
}
return this.data.toArray$OA(Clazz.array(Double.TYPE, [0, 0]));
}, p$1);

Clazz.newMeth(C$, 'getVarCount',  function () {
var list=this.datasetManager.getDatasetsRaw$();
var count=list.contains$O(this) ? list.size$() : list.size$() + 1;
return count + this.datasetManager.getConstantNames$().size$();
}, p$1);

Clazz.newMeth(C$, 'getVarNames',  function () {
var names=Clazz.new_($I$(3,1));
var datasets=this.datasetManager.getDatasetsRaw$();
for (var i=0, n=datasets.size$(); i < n; i++) {
var dataset=datasets.get$I(i);
if (dataset === this ) {
continue;
}var name=null;
if (names.isEmpty$()) {
name=$I$(6,"removeSubscripting$S",[dataset.getXColumnName$()]);
names.add$O(name);
}name=$I$(6,"removeSubscripting$S",[dataset.getYColumnName$()]);
names.add$O(name);
}
for (var name, $name = this.datasetManager.getConstantNames$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
names.add$O(name);
}
return names.toArray$OA(Clazz.array(String, [0]));
}, p$1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(7,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataFunction, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var data=obj;
control.setValue$S$O("function_name", data.getYColumnName$());
control.setValue$S$O("function", data.getInputString$());
$I$(1,"getLoader$Class",[Clazz.getClass($I$(2))]).saveObject$org_opensourcephysics_controls_XMLControl$O(control, obj);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var data=obj;
data.setYColumnName$S(control.getString$S("function_name"));
data.setExpression$S(control.getString$S("function"));
data.setYColumnDescription$S(control.getString$S("y_description"));
data.setID$I(control.getInt$S("datasetID"));
if (control.getPropertyNamesRaw$().contains$O("marker_shape")) {
data.setMarkerShape$I(control.getInt$S("marker_shape"));
}if (control.getPropertyNamesRaw$().contains$O("marker_size")) {
data.setMarkerSize$I(control.getInt$S("marker_size"));
}data.setSorted$Z(control.getBoolean$S("sorted"));
data.setConnected$Z(control.getBoolean$S("connected"));
var color=control.getObject$S("line_color");
if (color != null ) {
data.setLineColor$java_awt_Color(color);
}var fill=control.getObject$S("fill_color");
color=control.getObject$S("edge_color");
if (fill != null ) {
if (color != null ) {
data.setMarkerColor$java_awt_Color$java_awt_Color(fill, color);
} else {
data.setMarkerColor$java_awt_Color(fill);
}}return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
