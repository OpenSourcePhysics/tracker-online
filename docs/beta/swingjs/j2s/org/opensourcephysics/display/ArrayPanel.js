(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'javax.swing.JTabbedPane','java.awt.Dimension','java.awt.BorderLayout','javax.swing.JScrollPane','javax.swing.JSpinner','javax.swing.SpinnerNumberModel',['javax.swing.JSpinner','.NumberEditor'],'javax.swing.JToolBar','javax.swing.JLabel','javax.swing.Box','org.opensourcephysics.display.ArrayTable']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ArrayPanel", null, 'javax.swing.JPanel', ['java.beans.PropertyChangeListener', 'org.opensourcephysics.display.Data']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tabbedPane=Clazz.new_($I$(1,1));
this.format=null;
this.firstRowIndex=0;
this.firstColIndex=0;
this.rowNumberVisible=true;
this.editable=true;
this.ID=this.hashCode$();
},1);

C$.$fields$=[['Z',['changed','rowNumberVisible','editable'],'I',['firstRowIndex','firstColIndex','ID'],'S',['format'],'O',['tabbedPane','javax.swing.JTabbedPane','tables','org.opensourcephysics.display.ArrayTable[]','spinner','javax.swing.JSpinner','scrollpane','javax.swing.JScrollPane','array','java.lang.Object','colNames','String[]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getArrayPanel$O',  function (arrayObj) {
var arrayPanel=Clazz.new_(C$);
arrayPanel.setArray$O(arrayObj);
return arrayPanel;
}, 1);

Clazz.newMeth(C$, 'setArray$O',  function (arrayObj) {
if (!C$.canDisplay$O(arrayObj)) {
return;
}if (Clazz.instanceOf(arrayObj, Clazz.array(Double.TYPE, -1))) {
p$1.setArray$DA.apply(this, [arrayObj]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Double.TYPE, -2))) {
p$1.setArray$DAA.apply(this, [arrayObj]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Double.TYPE, -3))) {
p$1.setArray$DAAA.apply(this, [arrayObj]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Integer.TYPE, -1))) {
p$1.setArray$IA.apply(this, [arrayObj]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Integer.TYPE, -2))) {
p$1.setArray$IAA.apply(this, [arrayObj]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Integer.TYPE, -3))) {
p$1.setArray$IAAA.apply(this, [arrayObj]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(String, -1))) {
p$1.setArray$SA.apply(this, [arrayObj]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(String, -2))) {
p$1.setArray$SAA.apply(this, [arrayObj]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(String, -3))) {
p$1.setArray$SAAA.apply(this, [arrayObj]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Boolean.TYPE, -1))) {
p$1.setArray$ZA.apply(this, [arrayObj]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Boolean.TYPE, -2))) {
p$1.setArray$ZAA.apply(this, [arrayObj]);
} else if (Clazz.instanceOf(arrayObj, Clazz.array(Boolean.TYPE, -3))) {
p$1.setArray$ZAAA.apply(this, [arrayObj]);
}this.array=arrayObj;
});

Clazz.newMeth(C$, 'canDisplay$O',  function (obj) {
if (obj == null ) {
return false;
}if ((Clazz.instanceOf(obj, Clazz.array(Double.TYPE, -1))) || (Clazz.instanceOf(obj, Clazz.array(Double.TYPE, -2))) || (Clazz.instanceOf(obj, Clazz.array(Double.TYPE, -3))) || (Clazz.instanceOf(obj, Clazz.array(Integer.TYPE, -1))) || (Clazz.instanceOf(obj, Clazz.array(Integer.TYPE, -2))) || (Clazz.instanceOf(obj, Clazz.array(Integer.TYPE, -3))) || (Clazz.instanceOf(obj, Clazz.array(Boolean.TYPE, -1))) || (Clazz.instanceOf(obj, Clazz.array(Boolean.TYPE, -2))) || (Clazz.instanceOf(obj, Clazz.array(Boolean.TYPE, -3))) || (Clazz.instanceOf(obj, Clazz.array(String, -1))) || (Clazz.instanceOf(obj, Clazz.array(String, -2))) || (Clazz.instanceOf(obj, Clazz.array(String, -3)))  ) {
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'getArray$',  function () {
return this.array;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.changed=true;
this.firePropertyChange$S$O$O(e.getPropertyName$(), e.getOldValue$(), e.getNewValue$());
});

Clazz.newMeth(C$, 'setNumericFormat$S',  function (_format) {
this.format=_format;
for (var i=0; i < this.tables.length; i++) {
this.tables[i].setNumericFormat$S(_format);
}
});

Clazz.newMeth(C$, 'setNumericFormat$SA',  function (_format) {
this.format=null;
for (var i=0; i < this.tables.length; i++) {
this.tables[i].setNumericFormat$SA(_format);
}
});

Clazz.newMeth(C$, 'setRowNumberVisible$Z',  function (vis) {
this.rowNumberVisible=vis;
for (var i=0; i < this.tables.length; i++) {
this.tables[i].setRowNumberVisible$Z(vis);
}
});

Clazz.newMeth(C$, 'setColumnNames$SA',  function (names) {
for (var i=0; i < this.tables.length; i++) {
this.tables[i].setColumnNames$SA(names);
}
});

Clazz.newMeth(C$, 'setColumnNames$SAA',  function (names) {
var n=Math.min(this.tables.length, names.length);
for (var i=0; i < n; i++) {
this.tables[i].setColumnNames$SA(names[i]);
}
});

Clazz.newMeth(C$, 'setPreferredColumnWidth$I$I',  function (ncol, nwidth) {
for (var table=0; table < this.tables.length; table++) {
var column=this.tables[table].getColumnModel$().getColumn$I(ncol);
column.setMinWidth$I(0);
column.setMaxWidth$I(300);
column.setPreferredWidth$I(nwidth);
}
});

Clazz.newMeth(C$, 'setPreferredColumnWidth$I',  function (nwidth) {
for (var table=0; table < this.tables.length; table++) {
for (var col=0; col < this.tables[table].getColumnCount$(); col++) {
var column=this.tables[table].getColumnModel$().getColumn$I(col);
column.setMinWidth$I(0);
column.setMaxWidth$I(300);
column.setPreferredWidth$I(nwidth);
}
}
});

Clazz.newMeth(C$, 'setColumnAlignment$I$I',  function (ncol, align) {
for (var table=0; table < this.tables.length; table++) {
for (var row=0, n=this.tables[table].getRowCount$(); row < n; row++) {
var renderer=this.tables[table].getCellRenderer$I$I(row, ncol);
(renderer).setHorizontalAlignment$I(align);
}
}
});

Clazz.newMeth(C$, 'setColumnAlignment$I',  function (align) {
for (var table=0; table < this.tables.length; table++) {
for (var row=0, n=this.tables[table].getRowCount$(); row < n; row++) {
for (var col=0; col < this.tables[table].getColumnCount$(); col++) {
var renderer=this.tables[table].getCellRenderer$I$I(row, col);
(renderer).setHorizontalAlignment$I(align);
}
}
}
});

Clazz.newMeth(C$, 'getFirstRowIndex$',  function () {
return this.firstRowIndex;
});

Clazz.newMeth(C$, 'setFirstRowIndex$I',  function (index) {
this.firstRowIndex=index;
for (var i=0; i < this.tables.length; i++) {
this.tables[i].setFirstRowIndex$I(index);
}
});

Clazz.newMeth(C$, 'setFirstColIndex$I',  function (index) {
this.firstColIndex=index;
for (var i=0; i < this.tables.length; i++) {
this.tables[i].setFirstColIndex$I(index);
}
});

Clazz.newMeth(C$, 'setColumnLock$I$Z',  function (columnIndex, locked) {
for (var i=0; i < this.tables.length; i++) {
this.tables[i].setColumnLock$I$Z(columnIndex, locked);
}
});

Clazz.newMeth(C$, 'setColumnLocks$ZA',  function (locked) {
for (var i=0; i < this.tables.length; i++) {
this.tables[i].setColumnLocks$ZA(locked);
}
});

Clazz.newMeth(C$, 'setEditable$Z',  function (_editable) {
this.editable=_editable;
for (var i=0; i < this.tables.length; i++) {
this.tables[i].setEditable$Z(_editable);
}
});

Clazz.newMeth(C$, 'setTransposed$Z',  function (transposed) {
for (var i=0; i < this.tables.length; i++) {
this.tables[i].setTransposed$Z(transposed);
}
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (font) {
C$.superclazz.prototype.setFont$java_awt_Font.apply(this, [font]);
if (this.tables != null ) for (var i=0; i < this.tables.length; i++) this.tables[i].setFont$java_awt_Font(font);

});

Clazz.newMeth(C$, 'setForeground$java_awt_Color',  function (color) {
C$.superclazz.prototype.setForeground$java_awt_Color.apply(this, [color]);
if (this.tables != null ) for (var i=0; i < this.tables.length; i++) this.tables[i].setForeground$java_awt_Color(color);

});

Clazz.newMeth(C$, 'setBackground$java_awt_Color',  function (color) {
C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [color]);
if (this.tables != null ) for (var i=0; i < this.tables.length; i++) this.tables[i].setBackground$java_awt_Color(color);

});

Clazz.newMeth(C$, 'setDataForeground$java_awt_Color',  function (color) {
if (this.tables != null ) for (var i=0; i < this.tables.length; i++) this.tables[i].setDataForeground$java_awt_Color(color);

this.refreshTable$();
});

Clazz.newMeth(C$, 'setDataBackground$java_awt_Color',  function (color) {
if (this.tables != null ) for (var i=0; i < this.tables.length; i++) this.tables[i].setDataBackground$java_awt_Color(color);

this.refreshTable$();
});

Clazz.newMeth(C$, 'setAutoResizeMode$I',  function (mode) {
if (this.tables != null ) for (var i=0; i < this.tables.length; i++) this.tables[i].setAutoResizeMode$I(mode);

this.refreshTable$();
});

Clazz.newMeth(C$, 'getNumColumns$',  function () {
return this.tables[0].getColumnCount$();
});

Clazz.newMeth(C$, 'refreshTable$',  function () {
for (var i=0; i < this.tables.length; i++) {
this.tables[i].refreshTable$();
}
});

Clazz.newMeth(C$, 'setRefreshDelay$I',  function (delay) {
for (var i=0; i < this.tables.length; i++) {
this.tables[i].setRefreshDelay$I(delay);
}
});

Clazz.newMeth(C$, 'createGUI$',  function () {
this.removeAll$();
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[400, 300]));
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1)));
this.scrollpane=Clazz.new_($I$(4,1).c$$java_awt_Component,[this.tables[0]]);
if (this.tables.length > 1) {
this.spinner=Clazz.new_([Clazz.new_($I$(6,1).c$$I$I$I$I,[0, 0, this.tables.length - 1, 1])],$I$(5,1).c$$javax_swing_SpinnerModel);
var editor=Clazz.new_($I$(7,1).c$$javax_swing_JSpinner,[this.spinner]);
editor.getTextField$().setFont$java_awt_Font(this.tables[0].indexRenderer.getFont$());
this.spinner.setEditor$javax_swing_JComponent(editor);
this.spinner.addChangeListener$javax_swing_event_ChangeListener(((P$.ArrayPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ArrayPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var i=(this.b$['org.opensourcephysics.display.ArrayPanel'].spinner.getValue$()).intValue$();
this.b$['org.opensourcephysics.display.ArrayPanel'].scrollpane.setViewportView$java_awt_Component(this.b$['org.opensourcephysics.display.ArrayPanel'].tables[i]);
});
})()
), Clazz.new_(P$.ArrayPanel$1.$init$,[this, null])));
var dim=this.spinner.getMinimumSize$();
this.spinner.setMaximumSize$java_awt_Dimension(dim);
this.add$java_awt_Component$O(this.scrollpane, "Center");
var toolbar=Clazz.new_($I$(8,1));
toolbar.setFloatable$Z(false);
toolbar.add$java_awt_Component(Clazz.new_($I$(9,1).c$$S,[" index "]));
toolbar.add$java_awt_Component(this.spinner);
toolbar.add$java_awt_Component($I$(10).createHorizontalGlue$());
this.add$java_awt_Component$O(toolbar, "North");
} else {
this.scrollpane.createHorizontalScrollBar$();
this.add$java_awt_Component$O(this.scrollpane, "Center");
}this.validate$();
});

Clazz.newMeth(C$, 'setArray$IA',  function (array) {
if (Clazz.instanceOf(this.array, Clazz.array(Integer.TYPE, -1))) {
this.tables[0].tableModel.setArray$O(array);
return;
}this.tables=Clazz.array($I$(11), [1]);
this.tables[0]=Clazz.new_($I$(11,1).c$$IA,[array]);
this.tables[0].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.tables[0].setFont$java_awt_Font(this.getFont$());
this.tables[0].setForeground$java_awt_Color(this.getForeground$());
this.tables[0].setBackground$java_awt_Color(this.getBackground$());
this.createGUI$();
}, p$1);

Clazz.newMeth(C$, 'setArray$IAA',  function (array) {
if (Clazz.instanceOf(this.array, Clazz.array(Integer.TYPE, -2))) {
this.tables[0].tableModel.setArray$O(array);
return;
}this.tables=Clazz.array($I$(11), [1]);
this.tables[0]=Clazz.new_($I$(11,1).c$$IAA,[array]);
this.tables[0].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.tables[0].setFont$java_awt_Font(this.getFont$());
this.tables[0].setForeground$java_awt_Color(this.getForeground$());
this.tables[0].setBackground$java_awt_Color(this.getBackground$());
this.createGUI$();
}, p$1);

Clazz.newMeth(C$, 'setArray$IAAA',  function (array) {
this.tables=Clazz.array($I$(11), [array.length]);
for (var i=0; i < this.tables.length; i++) {
this.tables[i]=Clazz.new_($I$(11,1).c$$IAA,[array[i]]);
this.tables[i].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.tables[i].setFont$java_awt_Font(this.getFont$());
this.tables[i].setForeground$java_awt_Color(this.getForeground$());
this.tables[i].setBackground$java_awt_Color(this.getBackground$());
}
this.createGUI$();
}, p$1);

Clazz.newMeth(C$, 'setArray$DA',  function (array) {
if (Clazz.instanceOf(this.array, Clazz.array(Double.TYPE, -1))) {
this.tables[0].tableModel.setArray$O(array);
return;
}this.tables=Clazz.array($I$(11), [1]);
this.tables[0]=Clazz.new_($I$(11,1).c$$DA,[array]);
this.tables[0].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.tables[0].setFont$java_awt_Font(this.getFont$());
this.tables[0].setForeground$java_awt_Color(this.getForeground$());
this.tables[0].setBackground$java_awt_Color(this.getBackground$());
this.createGUI$();
}, p$1);

Clazz.newMeth(C$, 'setArray$DAA',  function (array) {
if (Clazz.instanceOf(this.array, Clazz.array(Double.TYPE, -2))) {
this.tables[0].tableModel.setArray$O(array);
return;
}this.tables=Clazz.array($I$(11), [1]);
this.tables[0]=Clazz.new_($I$(11,1).c$$DAA,[array]);
this.tables[0].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.tables[0].setFont$java_awt_Font(this.getFont$());
this.tables[0].setForeground$java_awt_Color(this.getForeground$());
this.tables[0].setBackground$java_awt_Color(this.getBackground$());
this.createGUI$();
}, p$1);

Clazz.newMeth(C$, 'setArray$DAAA',  function (array) {
this.tables=Clazz.array($I$(11), [array.length]);
for (var i=0; i < this.tables.length; i++) {
this.tables[i]=Clazz.new_($I$(11,1).c$$DAA,[array[i]]);
this.tables[i].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.tables[i].setFont$java_awt_Font(this.getFont$());
this.tables[i].setForeground$java_awt_Color(this.getForeground$());
this.tables[i].setBackground$java_awt_Color(this.getBackground$());
}
this.createGUI$();
}, p$1);

Clazz.newMeth(C$, 'setArray$SA',  function (array) {
if (Clazz.instanceOf(this.array, Clazz.array(String, -1))) {
this.tables[0].tableModel.setArray$O(array);
return;
}this.tables=Clazz.array($I$(11), [1]);
this.tables[0]=Clazz.new_($I$(11,1).c$$SA,[array]);
this.tables[0].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.tables[0].setFont$java_awt_Font(this.getFont$());
this.tables[0].setForeground$java_awt_Color(this.getForeground$());
this.tables[0].setBackground$java_awt_Color(this.getBackground$());
this.createGUI$();
}, p$1);

Clazz.newMeth(C$, 'setArray$SAA',  function (array) {
if (Clazz.instanceOf(this.array, Clazz.array(String, -2))) {
this.tables[0].tableModel.setArray$O(array);
return;
}this.tables=Clazz.array($I$(11), [1]);
this.tables[0]=Clazz.new_($I$(11,1).c$$SAA,[array]);
this.tables[0].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.tables[0].setFont$java_awt_Font(this.getFont$());
this.tables[0].setForeground$java_awt_Color(this.getForeground$());
this.tables[0].setBackground$java_awt_Color(this.getBackground$());
this.createGUI$();
}, p$1);

Clazz.newMeth(C$, 'setArray$SAAA',  function (array) {
this.tables=Clazz.array($I$(11), [array.length]);
for (var i=0; i < this.tables.length; i++) {
this.tables[i]=Clazz.new_($I$(11,1).c$$SAA,[array[i]]);
this.tables[i].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.tables[i].setFont$java_awt_Font(this.getFont$());
this.tables[i].setForeground$java_awt_Color(this.getForeground$());
this.tables[i].setBackground$java_awt_Color(this.getBackground$());
}
this.createGUI$();
}, p$1);

Clazz.newMeth(C$, 'setArray$ZA',  function (array) {
if (Clazz.instanceOf(this.array, Clazz.array(Boolean.TYPE, -1))) {
this.tables[0].tableModel.setArray$O(array);
return;
}this.tables=Clazz.array($I$(11), [1]);
this.tables[0]=Clazz.new_($I$(11,1).c$$ZA,[array]);
this.tables[0].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.tables[0].setFont$java_awt_Font(this.getFont$());
this.tables[0].setForeground$java_awt_Color(this.getForeground$());
this.tables[0].setBackground$java_awt_Color(this.getBackground$());
this.createGUI$();
}, p$1);

Clazz.newMeth(C$, 'setArray$ZAA',  function (array) {
if (Clazz.instanceOf(this.array, Clazz.array(Boolean.TYPE, -2))) {
this.tables[0].tableModel.setArray$O(array);
return;
}this.tables=Clazz.array($I$(11), [1]);
this.tables[0]=Clazz.new_($I$(11,1).c$$ZAA,[array]);
this.tables[0].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.tables[0].setFont$java_awt_Font(this.getFont$());
this.tables[0].setForeground$java_awt_Color(this.getForeground$());
this.tables[0].setBackground$java_awt_Color(this.getBackground$());
this.createGUI$();
}, p$1);

Clazz.newMeth(C$, 'setArray$ZAAA',  function (array) {
this.tables=Clazz.array($I$(11), [array.length]);
for (var i=0; i < this.tables.length; i++) {
this.tables[i]=Clazz.new_($I$(11,1).c$$ZAA,[array[i]]);
this.tables[i].addPropertyChangeListener$S$java_beans_PropertyChangeListener("cell", this);
this.tables[i].setFont$java_awt_Font(this.getFont$());
this.tables[i].setForeground$java_awt_Color(this.getForeground$());
this.tables[i].setBackground$java_awt_Color(this.getBackground$());
}
this.createGUI$();
}, p$1);

Clazz.newMeth(C$, 'getColumnNames$',  function () {
var data=this.getData2D$();
if (data == null ) {
return null;
}var n=data.length;
if ((this.colNames == null ) || (n != this.colNames.length) ) {
this.colNames=Clazz.array(String, [n]);
}var modelNames=this.tables[0].tableModel.columnNames;
if (modelNames != null ) {
var stop=Math.min(n, modelNames.length - 1);
for (var i=0; i < stop; i++) {
this.colNames[i]=modelNames[i + 1];
}
for (var i=stop; i < n; i++) {
this.colNames[i]="C" + (i + 1);
}
}return this.colNames;
});

Clazz.newMeth(C$, 'getData2D$',  function () {
if ((this.tables == null ) || (this.tables[0] == null ) ) {
return null;
}var transposed=this.tables[0].tableModel.transposed;
var data=this.tables[0].tableModel.doubleArray2;
if (!transposed && (data != null ) ) {
var r=data.length;
var c=0;
for (var i=0; i < r; i++) {
c=Math.max(c, data[i].length);
}
var tdata=Clazz.array(Double.TYPE, [c, r]);
for (var i=0; i < r; i++) {
var ci=data[i].length;
for (var j=0; j < ci; j++) {
tdata[j][i]=data[i][j];
}
for (var j=ci; j < c; j++) {
tdata[j][i]=NaN;
}
}
return tdata;
}return data;
});

Clazz.newMeth(C$, 'getData3D$',  function () {
return null;
});

Clazz.newMeth(C$, 'getDataList$',  function () {
return null;
});

Clazz.newMeth(C$, 'getDatasets$',  function () {
return null;
});

Clazz.newMeth(C$, 'getFillColors$',  function () {
return null;
});

Clazz.newMeth(C$, 'getLineColors$',  function () {
return null;
});

Clazz.newMeth(C$, 'getID$',  function () {
var transposed=this.tables[0].tableModel.transposed;
if (transposed) {
return this.ID ^ 65535;
}return this.ID;
});

Clazz.newMeth(C$, 'setID$I',  function (id) {
this.ID=id;
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
