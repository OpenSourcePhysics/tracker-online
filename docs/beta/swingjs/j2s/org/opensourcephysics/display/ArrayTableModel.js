(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),I$=[[0,'java.util.Hashtable','org.opensourcephysics.display.TeXParser']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ArrayTableModel", null, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.editable=false;
this.showRowNumber=true;
this.firstRow=0;
this.firstCol=0;
this.transposed=false;
this.lockedColumns=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['editable','showRowNumber','transposed'],'I',['firstRow','firstCol'],'O',['doubleArray1','double[]','doubleArray2','double[][]','intArray1','int[]','intArray2','int[][]','stringArray1','String[]','stringArray2','String[][]','booleanArray1','boolean[]','booleanArray2','boolean[][]','columnNames','String[]','lockedColumns','java.util.Dictionary']]]

Clazz.newMeth(C$, 'c$$IA',  function (array) {
Clazz.super_(C$, this);
this.intArray1=array;
}, 1);

Clazz.newMeth(C$, 'c$$IAA',  function (array) {
Clazz.super_(C$, this);
this.intArray2=array;
}, 1);

Clazz.newMeth(C$, 'c$$DA',  function (array) {
Clazz.super_(C$, this);
this.doubleArray1=array;
}, 1);

Clazz.newMeth(C$, 'c$$DAA',  function (array) {
Clazz.super_(C$, this);
this.doubleArray2=array;
}, 1);

Clazz.newMeth(C$, 'c$$SA',  function (array) {
Clazz.super_(C$, this);
this.stringArray1=array;
}, 1);

Clazz.newMeth(C$, 'c$$SAA',  function (array) {
Clazz.super_(C$, this);
this.stringArray2=array;
}, 1);

Clazz.newMeth(C$, 'c$$ZA',  function (array) {
Clazz.super_(C$, this);
this.booleanArray1=array;
}, 1);

Clazz.newMeth(C$, 'c$$ZAA',  function (array) {
Clazz.super_(C$, this);
this.booleanArray2=array;
}, 1);

Clazz.newMeth(C$, 'setArray$O',  function (arrayObj) {
if (Clazz.instanceOf(arrayObj, Clazz.array(Double.TYPE, -1))) {
this.doubleArray1=arrayObj;
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Double.TYPE, -2))) {
this.doubleArray2=arrayObj;
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Integer.TYPE, -1))) {
this.intArray1=arrayObj;
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Integer.TYPE, -2))) {
this.intArray2=arrayObj;
} else if (Clazz.instanceOf(arrayObj, Clazz.array(String, -1))) {
this.stringArray1=arrayObj;
} else if (Clazz.instanceOf(arrayObj, Clazz.array(String, -2))) {
this.stringArray2=arrayObj;
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Boolean.TYPE, -1))) {
this.booleanArray1=arrayObj;
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Boolean.TYPE, -2))) {
this.booleanArray2=arrayObj;
}});

Clazz.newMeth(C$, 'setColumnLock$I$Z',  function (columnIndex, locked) {
var val=this.lockedColumns.get$O(Integer.valueOf$I(columnIndex));
if ((val != null ) && (locked == (val).$c() ) ) {
return false;
}this.lockedColumns.put$O$O(Integer.valueOf$I(columnIndex), Boolean.valueOf$Z(locked));
return true;
});

Clazz.newMeth(C$, 'setColumnLocks$ZA',  function (locked) {
var change=false;
if (this.lockedColumns.size$() != locked.length) {
change=true;
} else {
for (var i=0, n=locked.length; i < n; i++) {
var val=this.lockedColumns.get$O(Integer.valueOf$I(i));
if (!Boolean.valueOf$Z(locked[i]).equals$O(val)) {
change=true;
break;
}}
}if (!change) {
return false;
}(this.lockedColumns).clear$();
for (var i=0, n=locked.length; i < n; i++) {
this.lockedColumns.put$O$O(Integer.valueOf$I(i), Boolean.valueOf$Z(locked[i]));
}
return true;
});

Clazz.newMeth(C$, 'setFirstRowIndex$I',  function (index) {
this.firstRow=index;
});

Clazz.newMeth(C$, 'setFirstColIndex$I',  function (index) {
this.firstRow=index;
});

Clazz.newMeth(C$, 'setRowNumberVisible$Z',  function (vis) {
this.showRowNumber=vis;
});

Clazz.newMeth(C$, 'setTransposed$Z',  function (transposed) {
this.transposed=transposed;
});

Clazz.newMeth(C$, 'isTransposed$',  function () {
return this.transposed;
});

Clazz.newMeth(C$, 'setEditable$Z',  function (editable) {
this.editable=editable;
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
if (this.getArrayRowCount$() == 0) {
return 0;
}var offset=this.showRowNumber ? 1 : 0;
if (this.transposed) {
return this.getArrayRowCount$() + offset;
}return this.getArrayColumnCount$() + offset;
});

Clazz.newMeth(C$, 'getArrayColumnCount$',  function () {
if ((this.intArray1 != null ) || (this.doubleArray1 != null ) || (this.stringArray1 != null ) || (this.booleanArray1 != null )  ) {
return 1;
}if (this.intArray2 != null ) {
return this.intArray2[0].length;
}if (this.doubleArray2 != null ) {
return this.doubleArray2[0].length;
}if (this.stringArray2 != null ) {
return this.stringArray2[0].length;
}if (this.booleanArray2 != null ) {
return this.booleanArray2[0].length;
}return 0;
});

Clazz.newMeth(C$, 'setColumnNames$SA',  function (names) {
if ((names == null ) && (this.columnNames == null ) ) {
return false;
}if (names != null ) {
names=names.clone$();
}var changed=false;
if ((names != null ) && (this.columnNames != null ) && (this.columnNames.length == names.length)  ) {
for (var i=0, n=names.length; i < n; i++) {
names[i]=$I$(2).parseTeX$S(names[i]);
if (!names[i].equals$O(this.columnNames[i])) {
changed=true;
}}
} else {
changed=true;
if (names != null ) {
for (var i=0, n=names.length; i < n; i++) {
names[i]=$I$(2).parseTeX$S(names[i]);
}
}}this.columnNames=names;
return changed;
});

Clazz.newMeth(C$, 'getColumnName$I',  function (column) {
if (!this.showRowNumber) {
++column;
}if ((this.columnNames != null ) && (column < this.columnNames.length) ) {
return this.columnNames[column];
}if (column == 0) {
return "";
}if ((this.intArray1 != null ) || (this.doubleArray1 != null ) || (this.stringArray1 != null ) || (this.booleanArray1 != null )  ) {
return "value";
}return "" + (column - 1 + this.firstCol);
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
if (this.transposed) {
return this.getArrayColumnCount$();
}return this.getArrayRowCount$();
});

Clazz.newMeth(C$, 'getArrayRowCount$',  function () {
if (this.intArray1 != null ) {
return this.intArray1.length;
}if (this.intArray2 != null ) {
return this.intArray2.length;
}if (this.doubleArray1 != null ) {
return this.doubleArray1.length;
}if (this.doubleArray2 != null ) {
return this.doubleArray2.length;
}if (this.stringArray1 != null ) {
return this.stringArray1.length;
}if (this.stringArray2 != null ) {
return this.stringArray2.length;
}if (this.booleanArray1 != null ) {
return this.booleanArray1.length;
}if (this.booleanArray2 != null ) {
return this.booleanArray2.length;
}return 0;
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (row, column) {
if (this.showRowNumber && (column == 0) ) {
return Integer.valueOf$I(row + this.firstRow);
}var offset=this.showRowNumber ? 1 : 0;
if (this.transposed) {
var temp=row;
row=column - offset;
column=temp;
}if (this.intArray1 != null ) {
return Integer.valueOf$I(this.intArray1[row]);
}if (this.intArray2 != null ) {
var col=this.transposed ? column : column - offset;
if ((row > this.intArray2.length - 1) || (col > this.intArray2[row].length - 1) || (col < 0)  ) {
return null;
}return Integer.valueOf$I(this.intArray2[row][col]);
}if (this.doubleArray1 != null ) {
return  new Double(this.doubleArray1[row]);
}if (this.doubleArray2 != null ) {
var col=this.transposed ? column : column - offset;
if ((row > this.doubleArray2.length - 1) || (col > this.doubleArray2[row].length - 1) || (col < 0)  ) {
return null;
}return  new Double(this.doubleArray2[row][col]);
}if (this.stringArray1 != null ) {
return this.stringArray1[row];
}if (this.stringArray2 != null ) {
var col=this.transposed ? column : column - offset;
if ((row > this.stringArray2.length - 1) || (col > this.stringArray2[row].length - 1) || (col < 0)  ) {
return null;
}return this.stringArray2[row][col];
}if (this.booleanArray1 != null ) {
return Boolean.valueOf$Z(this.booleanArray1[row]);
}if (this.booleanArray2 != null ) {
var col=this.transposed ? column : column - offset;
if ((row > this.booleanArray2.length - 1) || (col > this.booleanArray2[row].length - 1) || (col < 0)  ) {
return null;
}return Boolean.valueOf$Z(this.booleanArray2[row][col]);
}return null;
});

Clazz.newMeth(C$, 'setValueAt$O$I$I',  function (value, row, col) {
var offset=this.showRowNumber ? 1 : 0;
if (this.transposed) {
var temp=row;
row=col - offset;
col=temp;
}try {
if (Clazz.instanceOf(value, "java.lang.String")) {
var val=value;
col=this.transposed ? col : col - offset;
if (this.intArray1 != null ) {
this.intArray1[row]=Integer.parseInt$S(val);
} else if (this.intArray2 != null ) {
this.intArray2[row][col]=Integer.parseInt$S(val);
} else if (this.doubleArray1 != null ) {
this.doubleArray1[row]=Double.parseDouble$S(val);
} else if (this.doubleArray2 != null ) {
this.doubleArray2[row][col]=Double.parseDouble$S(val);
} else if (this.stringArray1 != null ) {
this.stringArray1[row]=val;
} else if (this.stringArray2 != null ) {
this.stringArray2[row][col]=val;
} else if (this.booleanArray1 != null ) {
this.booleanArray1[row]=val.toLowerCase$().startsWith$S("t");
} else if (this.booleanArray2 != null ) {
this.booleanArray2[row][col]=val.toLowerCase$().startsWith$S("t");
}if (this.transposed) this.fireTableCellUpdated$I$I(col, row);
 else this.fireTableCellUpdated$I$I(row, col);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'isCellEditable$I$I',  function (row, col) {
if (this.showRowNumber && (col == 0) ) {
return false;
}col=this.showRowNumber ? col - 1 : col;
var val=this.lockedColumns.get$O(Integer.valueOf$I(col));
if (val == null ) {
return this.editable;
}return (!((val).$c())) && this.editable ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
