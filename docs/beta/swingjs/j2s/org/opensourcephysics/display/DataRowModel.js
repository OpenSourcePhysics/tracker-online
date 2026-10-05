(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'java.util.ArrayList','org.opensourcephysics.display.TeXParser']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataRowModel", null, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rowList=Clazz.new_($I$(1,1));
this.colNames=Clazz.new_($I$(1,1));
this.rowNumberVisible=true;
this.colCount=0;
this.maxRows=-1;
this.firstRowIndex=0;
this.stride=1;
this.lastRowAppended=-1;
},1);

C$.$fields$=[['Z',['rowNumberVisible'],'I',['colCount','maxRows','firstRowIndex','stride','lastRowAppended','pointCount'],'S',['updateType'],'O',['rowList','java.util.ArrayList','+colNames']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.colNames.add$I$O(0, "row");
}, 1);

Clazz.newMeth(C$, 'setStride$I',  function (stride) {
this.stride=stride;
});

Clazz.newMeth(C$, 'setMaxPoints$I',  function (max) {
this.maxRows=max;
if ((this.maxRows <= 0) || (this.rowList.size$() <= max) ) {
return;
}for (var j=0, n=this.rowList.size$() - max; j < n; j++) {
this.rowList.remove$I(0);
}
this.colCount=0;
for (var j=0, n=this.rowList.size$(); j < n; j++) {
var r=this.rowList.get$I(j);
if (!r.getClass$().isArray$()) {
continue;
}var length=0;
if (Clazz.instanceOf(r, Clazz.array(Double.TYPE, -1))) {
length=(r).length;
} else if (Clazz.instanceOf(r, Clazz.array(Byte.TYPE, -1))) {
length=(r).length;
} else if (Clazz.instanceOf(r, Clazz.array(Integer.TYPE, -1))) {
length=(r).length;
} else if (Clazz.instanceOf(r, Clazz.array(String, -1))) {
length=(r).length;
}this.colCount=Math.max(this.colCount, length);
}
});

Clazz.newMeth(C$, 'clear$',  function () {
this.rowList.clear$();
this.colCount=0;
});

Clazz.newMeth(C$, 'appendRow$O',  function (obj) {
if (!obj.getClass$().isArray$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["A TableData row must be an array."]);
}var componentType=obj.getClass$().getComponentType$();
if (componentType === Double.TYPE ) {
this.appendDoubles$DA(obj);
} else if (componentType === Integer.TYPE ) {
this.appendInts$IA(obj);
} else if (componentType === Byte.TYPE ) {
this.appendBytes$BA(obj);
} else if (componentType === Clazz.getClass(String) ) {
this.appendStrings$SA(obj);
} else {
var row=obj;
var strings=Clazz.array(String, [row.length]);
for (var i=0, n=row.length; i < n; i++) {
strings[i]=row[i].toString();
}
this.appendStrings$SA(strings);
}});

Clazz.newMeth(C$, 'appendDoubles$DA',  function (x) {
var n=this.getRowCount$();
var row;
if (x == null ) {
return;
}row=Clazz.array(Double.TYPE, [x.length]);
System.arraycopy$O$I$O$I$I(x, 0, row, 0, x.length);
if ((this.maxRows > 0) && (this.rowList.size$() >= this.maxRows) ) {
this.rowList.remove$I(0);
}this.rowList.add$O(row);
this.colCount=Math.max(this.colCount, row.length + 1);
p$1.updateTable$I.apply(this, [n]);
});

Clazz.newMeth(C$, 'appendInts$IA',  function (x) {
var n=this.getRowCount$();
var row;
if (x == null ) {
return;
}row=Clazz.array(Integer.TYPE, [x.length]);
System.arraycopy$O$I$O$I$I(x, 0, row, 0, x.length);
if ((this.maxRows > 0) && (this.rowList.size$() >= this.maxRows) ) {
this.rowList.remove$I(0);
}this.rowList.add$O(row);
this.colCount=Math.max(this.colCount, row.length + 1);
p$1.updateTable$I.apply(this, [n]);
});

Clazz.newMeth(C$, 'appendBytes$BA',  function (x) {
var n=this.getRowCount$();
var row;
if (x == null ) {
return;
}row=Clazz.array(Byte.TYPE, [x.length]);
System.arraycopy$O$I$O$I$I(x, 0, row, 0, x.length);
if ((this.maxRows > 0) && (this.rowList.size$() >= this.maxRows) ) {
this.rowList.remove$I(0);
}this.rowList.add$O(row);
this.colCount=Math.max(this.colCount, row.length + 1);
p$1.updateTable$I.apply(this, [n]);
});

Clazz.newMeth(C$, 'appendStrings$SA',  function (x) {
var n=this.getRowCount$();
var row;
if (x == null ) {
return;
}row=Clazz.array(String, [x.length]);
System.arraycopy$O$I$O$I$I(x, 0, row, 0, x.length);
if ((this.maxRows > 0) && (this.rowList.size$() >= this.maxRows) ) {
this.rowList.remove$I(0);
}this.colCount=Math.max(this.colCount, row.length + 1);
this.rowList.add$O(row);
p$1.updateTable$I.apply(this, [n]);
});

Clazz.newMeth(C$, 'updateTable$I',  function (n) {
++this.pointCount;
}, p$1);

Clazz.newMeth(C$, 'setRowNumberVisible$Z',  function (vis) {
if (this.rowNumberVisible == vis ) {
return false;
}this.rowNumberVisible=vis;
return true;
});

Clazz.newMeth(C$, 'setColumnNames$I$S',  function (column, name) {
name=$I$(2).parseTeX$S(name);
if ((this.colNames == null ) || (column < this.colNames.size$()) && this.colNames.get$I(column) != null   && this.colNames.get$I(column).equals$O(name)  ) {
return false;
}while (column >= this.colNames.size$()){
this.colNames.add$O("" + String.fromCharCode((65 + column)));
}
this.colNames.set$I$O(column, name);
return true;
});

Clazz.newMeth(C$, 'setFirstRowIndex$I',  function (index) {
this.firstRowIndex=index;
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
var offset=this.rowNumberVisible ? 0 : 1;
if (this.getRowCount$() == 0) {
return (this.colNames == null ) ? 0 : this.colNames.size$() - offset;
}var count=(this.rowNumberVisible) ? this.colCount : this.colCount - 1;
return count;
});

Clazz.newMeth(C$, 'getColumnName$I',  function (column) {
if ((column == 0) && this.rowNumberVisible ) {
return this.colNames.get$I(0);
}if (!this.rowNumberVisible) {
++column;
}if (column < this.colNames.size$()) {
return this.colNames.get$I(column);
}return "" + String.fromCharCode((65 + column - 1));
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return ((this.rowList.size$() + this.stride - 1)/this.stride|0);
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (row, column) {
row=row * this.stride;
if ((column == 0) && this.rowNumberVisible ) {
return Integer.valueOf$I(row + this.firstRowIndex);
}if (!this.rowNumberVisible) {
++column;
}if (row >= this.rowList.size$()) {
return "";
}var r=this.rowList.get$I(row);
if (!r.getClass$().isArray$()) {
return "";
}if (Clazz.instanceOf(r, Clazz.array(Double.TYPE, -1))) {
var array=r;
if (column > array.length) {
return "";
}return  new Double(array[column - 1]);
}if (Clazz.instanceOf(r, Clazz.array(Byte.TYPE, -1))) {
var array=r;
if (column > array.length) {
return "";
}return Byte.valueOf$B(array[column - 1]);
}if (Clazz.instanceOf(r, Clazz.array(Integer.TYPE, -1))) {
var array=r;
if (column > array.length) {
return "";
}return Integer.valueOf$I(array[column - 1]);
}if (Clazz.instanceOf(r, Clazz.array(String, -1))) {
var array=r;
if (column > array.length) {
return "";
}return array[column - 1];
}return "";
});

Clazz.newMeth(C$, 'mustPaint$I$I',  function (row, column) {
var b=this.lastRowAppended == -2 ? true : this.updateType !== "appendRow"  || row == this.lastRowAppended ;
return b;
});

Clazz.newMeth(C$, 'refreshModel$org_opensourcephysics_display_DataRowTable$S',  function (table, type) {
if (type == null ) type="CDT.finalUpdate";
switch (type) {
default:
this.updateType="?";
return;
case "columnFormat":
case "setStride":
case "setRowNumberVis":
this.lastRowAppended=-2;
this.updateType=type;
return;
case "appendRow":
if (this.lastRowAppended == -2) p$1.fireUpdate.apply(this, []);
var n=this.getRowCount$() - 1;
if (n == this.lastRowAppended) {
if (this.pointCount >= this.maxRows && (this.pointCount + this.stride) % this.stride == 0 ) {
this.updateType="maxRows";
} else {
this.updateType=null;
}return;
}this.lastRowAppended=n;
this.updateType="rowAppended";
return;
case "clearData":
this.pointCount=0;
this.lastRowAppended=-1;
this.updateType="dataCleared";
p$1.fireUpdate.apply(this, []);
break;
case "setColumnName":
case "setColumnNames":
this.updateType="columnNamed";
return;
case "_pause":
this.updateType="paused";
return;
case "TF.visible":
this.updateType="visible";
p$1.fireUpdate.apply(this, []);
break;
case "CDT.finalUpdate":
p$1.fireUpdate.apply(this, []);
}
});

Clazz.newMeth(C$, 'fireUpdate',  function () {
var update=this.updateType;
if (update == null ) return;
this.updateType=null;
switch (update) {
case "rowAppended":
this.fireTableRowsInserted$I$I(this.lastRowAppended, this.lastRowAppended);
return;
case "columnNamed":
this.lastRowAppended=-2;
return;
case "?":
case "visible":
case "maxRows":
case "paused":
case "formatColumn":
case "setStride":
case "setRowNumberVis":
case "dataCleared":
case "TF.visible":
this.fireTableStructureChanged$();
return;
default:
return;
}
}, p$1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
