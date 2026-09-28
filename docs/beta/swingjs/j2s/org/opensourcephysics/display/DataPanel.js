(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'org.opensourcephysics.display.DataRowTable','javax.swing.JScrollPane','java.awt.BorderLayout']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataPanel", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dataRowTable=Clazz.new_($I$(1,1));
this.scrollPane=Clazz.new_($I$(2,1).c$$java_awt_Component,[this.dataRowTable]);
},1);

C$.$fields$=[['O',['dataRowTable','org.opensourcephysics.display.DataRowTable','scrollPane','javax.swing.JScrollPane']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1)));
this.add$java_awt_Component$O(this.scrollPane, "Center");
}, 1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (font) {
C$.superclazz.prototype.setFont$java_awt_Font.apply(this, [font]);
if (this.dataRowTable != null ) this.dataRowTable.setFont$java_awt_Font(font);
});

Clazz.newMeth(C$, 'setForeground$java_awt_Color',  function (color) {
C$.superclazz.prototype.setForeground$java_awt_Color.apply(this, [color]);
if (this.dataRowTable != null ) this.dataRowTable.setForeground$java_awt_Color(color);
});

Clazz.newMeth(C$, 'refreshTable$S',  function (from) {
this.dataRowTable.refreshTable$S(from);
});

Clazz.newMeth(C$, 'getVisual$',  function () {
return this.dataRowTable;
});

Clazz.newMeth(C$, 'setColumnNames$I$S',  function (column, name) {
if (this.dataRowTable.$rowModel.setColumnNames$I$S(column, name)) {
this.refreshTable$S("setColumnName");
}});

Clazz.newMeth(C$, 'setColumnNames$SA',  function (names) {
var changed=false;
for (var i=0, n=names.length; i < n; i++) {
if (this.dataRowTable.$rowModel.setColumnNames$I$S(i, names[i])) {
changed=true;
}}
if (changed) {
this.refreshTable$S("setColumnNames");
}});

Clazz.newMeth(C$, 'setRowNumberVisible$Z',  function (vis) {
if (this.dataRowTable.$rowModel.setRowNumberVisible$Z(vis)) {
this.refreshTable$S("setRowNumberVis " + vis);
}});

Clazz.newMeth(C$, 'setFirstRowIndex$I',  function (index) {
if (this.dataRowTable.$rowModel.firstRowIndex != index) {
this.dataRowTable.$rowModel.firstRowIndex=index;
this.refreshTable$S("setFirstRowIndex " + index);
}});

Clazz.newMeth(C$, 'setRefreshDelay$I',  function (delay) {
this.dataRowTable.setRefreshDelay$I(delay);
});

Clazz.newMeth(C$, 'appendArray$O',  function (obj) {
if (!obj.getClass$().isArray$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[""]);
}var componentType=obj.getClass$().getComponentType$();
while (componentType.isArray$()){
componentType=componentType.getComponentType$();
}
if (componentType === Double.TYPE ) {
var array=obj;
var row=Clazz.array(Double.TYPE, [array.length]);
for (var i=0, n=array[0].length; i < n; i++) {
for (var j=0, m=row.length; j < m; j++) {
row[j]=array[j][i];
}
this.appendRow$DA(row);
}
} else if (componentType === Integer.TYPE ) {
var array=obj;
var row=Clazz.array(Integer.TYPE, [array.length]);
for (var i=0, n=array[0].length; i < n; i++) {
for (var j=0, m=row.length; j < m; j++) {
row[j]=array[j][i];
}
this.appendRow$IA(row);
}
} else if (componentType === Byte.TYPE ) {
var array=obj;
var row=Clazz.array(Byte.TYPE, [array.length]);
for (var i=0, n=array[0].length; i < n; i++) {
for (var j=0, m=row.length; j < m; j++) {
row[j]=array[j][i];
}
this.appendRow$BA(row);
}
} else {
var array=obj;
var row=Clazz.array(java.lang.Object, [array.length]);
for (var i=0, n=array[0].length; i < n; i++) {
for (var j=0, m=row.length; j < m; j++) {
row[j]=array[j][i];
}
this.appendRow$OA(row);
}
}});

Clazz.newMeth(C$, 'appendRow$DA',  function (x) {
this.dataRowTable.$rowModel.appendDoubles$DA(x);
if (this.isShowing$()) {
this.dataRowTable.refreshTable$S("appendRow");
}});

Clazz.newMeth(C$, 'appendRow$IA',  function (x) {
this.dataRowTable.$rowModel.appendInts$IA(x);
if (this.isShowing$()) {
this.dataRowTable.refreshTable$S("appendRow");
}});

Clazz.newMeth(C$, 'appendRow$OA',  function (x) {
this.dataRowTable.$rowModel.appendRow$O(x);
if (this.isShowing$()) {
this.dataRowTable.refreshTable$S("appendRow");
}});

Clazz.newMeth(C$, 'appendRow$BA',  function (x) {
this.dataRowTable.$rowModel.appendBytes$BA(x);
if (this.isShowing$()) {
this.dataRowTable.refreshTable$S("appendRow");
}});

Clazz.newMeth(C$, 'isRowNumberVisible$',  function () {
return this.dataRowTable.$rowModel.rowNumberVisible;
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return this.dataRowTable.$rowModel.getColumnCount$();
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return this.dataRowTable.$rowModel.getRowCount$();
});

Clazz.newMeth(C$, 'getTotalRowCount$',  function () {
return this.dataRowTable.$rowModel.rowList.size$();
});

Clazz.newMeth(C$, 'getStride$',  function () {
return this.dataRowTable.$rowModel.stride;
});

Clazz.newMeth(C$, 'setColumnFormat$I$S',  function (column, format) {
this.dataRowTable.setColumnFormat$I$S(column, format);
});

Clazz.newMeth(C$, 'clearFormats$',  function () {
this.dataRowTable.clearFormats$();
});

Clazz.newMeth(C$, 'setNumericFormat$S',  function (pattern) {
this.dataRowTable.setNumericFormat$S(pattern);
});

Clazz.newMeth(C$, 'setMaxPoints$I',  function (max) {
this.dataRowTable.$rowModel.setMaxPoints$I(max);
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
if (vis) {
this.dataRowTable.refreshTable$S(" vis " + vis);
}C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
});

Clazz.newMeth(C$, 'setStride$I',  function (stride) {
this.dataRowTable.setStride$I(stride);
});

Clazz.newMeth(C$, 'clearData$',  function () {
this.dataRowTable.clearData$();
});

Clazz.newMeth(C$, 'clear$',  function () {
this.dataRowTable.clear$();
});

Clazz.newMeth(C$, 'setAutoResizeMode$I',  function (mode) {
this.dataRowTable.setAutoResizeMode$I(mode);
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
