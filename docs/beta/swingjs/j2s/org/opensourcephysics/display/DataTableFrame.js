(function(){var P$=Clazz.newPackage("org.opensourcephysics.display"),p$1={},I$=[[0,'org.opensourcephysics.display.DisplayRes','javax.swing.JScrollPane','org.opensourcephysics.display.OSPRuntime','javax.swing.JMenu','javax.swing.JMenuItem','javax.swing.JMenuBar','javax.swing.KeyStroke','org.opensourcephysics.display.DrawingFrame','javax.swing.JOptionPane','StringBuffer','org.opensourcephysics.display.GUIUtils','java.io.FileWriter','java.io.PrintWriter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataTableFrame", null, 'org.opensourcephysics.display.OSPFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['$menuBar','javax.swing.JMenuBar','fileMenu','javax.swing.JMenu','+editMenu','saveAsItem','javax.swing.JMenuItem','table','org.opensourcephysics.display.DataTable']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_DataTable',  function (table) {
C$.c$$S$org_opensourcephysics_display_DataTable.apply(this, [$I$(1).getString$S("DataTableFrame.DefaultTitle"), table]);
}, 1);

Clazz.newMeth(C$, 'c$$S$org_opensourcephysics_display_DataTable',  function (title, _table) {
;C$.superclazz.c$$S.apply(this,[title]);C$.$init$.apply(this);
this.table=_table;
var scrollPane=Clazz.new_($I$(2,1).c$$java_awt_Component,[this.table]);
var c=this.getContentPane$();
c.add$java_awt_Component$O(scrollPane, "Center");
this.pack$();
if (!$I$(3).appletMode) {
p$1.createMenuBar.apply(this, []);
this.loadDisplayMenu$();
}this.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'loadDisplayMenu$',  function () {
var menuBar=this.getJMenuBar$();
if (menuBar == null ) {
return null;
}var displayMenu=Clazz.new_($I$(4,1));
displayMenu.setText$S($I$(1).getString$S("DataTableFrame.Display_menu_title"));
menuBar.add$javax_swing_JMenu(displayMenu);
var setFontItem=Clazz.new_([$I$(1).getString$S("DataTableFrame.NumberFormat_menu_item_title")],$I$(5,1).c$$S);
setFontItem.addActionListener$java_awt_event_ActionListener(((P$.DataTableFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTableFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display.DataTableFrame'].setNumberFormat$.apply(this.b$['org.opensourcephysics.display.DataTableFrame'], []);
});
})()
), Clazz.new_(P$.DataTableFrame$1.$init$,[this, null])));
displayMenu.add$javax_swing_JMenuItem(setFontItem);
return displayMenu;
});

Clazz.newMeth(C$, 'createMenuBar',  function () {
this.$menuBar=Clazz.new_($I$(6,1));
this.setJMenuBar$javax_swing_JMenuBar(this.$menuBar);
this.fileMenu=Clazz.new_([$I$(1).getString$S("DataTableFrame.File_menu_item_title")],$I$(4,1).c$$S);
this.editMenu=Clazz.new_([$I$(1).getString$S("DataTableFrame.Edit_menu_item_title")],$I$(4,1).c$$S);
this.$menuBar.add$javax_swing_JMenu(this.fileMenu);
this.$menuBar.add$javax_swing_JMenu(this.editMenu);
var saveAsItem=Clazz.new_([$I$(1).getString$S("DataTableFrame.SaveAs_menu_item_title")],$I$(5,1).c$$S);
var copyItem=Clazz.new_([$I$(1).getString$S("DataTableFrame.Copy_menu_item_title")],$I$(5,1).c$$S);
var selectAlItem=Clazz.new_([$I$(1).getString$S("DataTableFrame.SelectAll_menu_item_title")],$I$(5,1).c$$S);
this.fileMenu.add$javax_swing_JMenuItem(saveAsItem);
this.editMenu.add$javax_swing_JMenuItem(copyItem);
this.editMenu.add$javax_swing_JMenuItem(selectAlItem);
copyItem.setAccelerator$javax_swing_KeyStroke($I$(7,"getKeyStroke$I$I",["C".$c(), $I$(8).MENU_SHORTCUT_KEY_MASK]));
copyItem.addActionListener$java_awt_event_ActionListener(((P$.DataTableFrame$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DataTableFrame$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.display.DataTableFrame'].copy$.apply(this.b$['org.opensourcephysics.display.DataTableFrame'], []);
});
})()
), Clazz.new_(P$.DataTableFrame$lambda1.$init$,[this, null])));
selectAlItem.setAccelerator$javax_swing_KeyStroke($I$(7,"getKeyStroke$I$I",["A".$c(), $I$(8).MENU_SHORTCUT_KEY_MASK]));
selectAlItem.addActionListener$java_awt_event_ActionListener(((P$.DataTableFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTableFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display.DataTableFrame'].table.selectAll$();
});
})()
), Clazz.new_(P$.DataTableFrame$2.$init$,[this, null])));
saveAsItem.setAccelerator$javax_swing_KeyStroke($I$(7,"getKeyStroke$I$I",["S".$c(), $I$(8).MENU_SHORTCUT_KEY_MASK]));
saveAsItem.addActionListener$java_awt_event_ActionListener(((P$.DataTableFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DataTableFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display.DataTableFrame'].saveAs$.apply(this.b$['org.opensourcephysics.display.DataTableFrame'], []);
});
})()
), Clazz.new_(P$.DataTableFrame$3.$init$,[this, null])));
this.validate$();
}, p$1);

Clazz.newMeth(C$, 'setNumberFormat$',  function () {
var digits=this.table.getMaximumFractionDigits$();
var str=$I$(9,"showInputDialog$java_awt_Component$O$O",[this, $I$(1).getString$S("DataTableFrame.NumberOfDigits_option_pane_title"), "" + digits]);
if (str == null ) {
return;
}digits=Integer.parseInt$S(str);
digits=Math.max(digits, 1);
this.table.setMaximumFractionDigits$I(Math.min(digits, 16));
this.table.refreshTable$I(8585216);
});

Clazz.newMeth(C$, 'copy$',  function () {
$I$(3,"copy$S$java_awt_datatransfer_ClipboardOwner",[this.getSelectedData$IA$IA(this.table.getSelectedRows$(), this.table.getSelectedColumns$()).toString(), null]);
});

Clazz.newMeth(C$, 'refreshTable$I',  function (mode) {
this.table.refreshTable$I(mode);
});

Clazz.newMeth(C$, 'getSelectedData$IA$IA',  function (selectedRows, selectedColumns) {
var buf=Clazz.new_($I$(10,1));
for (var i=0; i < selectedRows.length; i++) {
for (var j=0; j < selectedColumns.length; j++) {
var row=i;
var temp=this.table.convertColumnIndexToModel$I(selectedColumns[j]);
if (this.table.isRowNumberVisible$()) {
if (temp == 0) {
continue;
}}var value=this.table.getValueAt$I$I(row, selectedColumns[j]);
if (value != null ) {
buf.append$O(value);
}buf.append$S("\t");
}
buf.append$S("\n");
}
return buf;
});

Clazz.newMeth(C$, 'sort$I',  function (col) {
this.table.sort$I(col);
});

Clazz.newMeth(C$, 'saveAs$',  function () {
var file=$I$(11).showSaveDialog$java_awt_Component(this);
if (file == null ) {
return;
}var firstRow=0;
var lastRow=this.table.getRowCount$() - 1;
var lastColumn=this.table.getColumnCount$() - 1;
var firstColumn=0;
if (this.table.isRowNumberVisible$()) {
++firstColumn;
}var selectedRows=Clazz.array(Integer.TYPE, [lastRow + 1]);
var selectedColumns=Clazz.array(Integer.TYPE, [lastColumn + 1]);
for (var i=firstRow; i <= lastRow; i++) {
selectedRows[i]=i;
}
for (var i=firstColumn; i <= lastColumn; i++) {
selectedColumns[i]=i;
}
try {
var fw=Clazz.new_($I$(12,1).c$$java_io_File,[file]);
var pw=Clazz.new_($I$(13,1).c$$java_io_Writer,[fw]);
pw.print$O(this.getSelectedData$IA$IA(selectedRows, selectedColumns));
pw.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(9,"showMessageDialog$java_awt_Component$O$S$I",[this, $I$(1).getString$S("DataTableFrame.SaveErrorMessage"), $I$(1).getString$S("DataTableFrame.Error"), 0]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
