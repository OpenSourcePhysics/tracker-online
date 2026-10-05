(function(){var P$=Clazz.newPackage("test"),p$1={},I$=[[0,'java.awt.GridLayout','javax.swing.JTextField','java.awt.Color','javax.swing.JTable','javax.swing.DefaultCellEditor','java.awt.Dimension','java.awt.event.MouseAdapter','javax.swing.JScrollPane','javax.swing.JFrame','javax.swing.SwingUtilities','test.SimpleTableDemo']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SimpleTableDemo", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.DEBUG=false;
},1);

C$.$fields$=[['Z',['DEBUG'],'O',['editor','javax.swing.JTextField']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[Clazz.new_($I$(1,1).c$$I$I,[1, 0])]);C$.$init$.apply(this);
this.editor=Clazz.new_($I$(2,1));
this.editor.setCaretColor$java_awt_Color($I$(3).red);
var columnNames=Clazz.array(String, -1, ["First Name", "Last Name", "Sport", "# of Years", "Vegetarian"]);
var data=Clazz.array(java.lang.Object, -2, [Clazz.array(java.lang.Object, -1, ["Kathy", "Smith", "Snowboarding", Integer.valueOf$I(5), Boolean.FALSE]), Clazz.array(java.lang.Object, -1, ["John", "Doe", "Rowing", Integer.valueOf$I(3), Boolean.TRUE]), Clazz.array(java.lang.Object, -1, ["Sue", "Black", "Knitting", Integer.valueOf$I(2), Boolean.FALSE]), Clazz.array(java.lang.Object, -1, ["Jane", "White", "Speed reading", Integer.valueOf$I(20), Boolean.TRUE]), Clazz.array(java.lang.Object, -1, ["Joe", "Brown", "Pool", Integer.valueOf$I(10), Boolean.FALSE])]);
var table=Clazz.new_($I$(4,1).c$$OAA$OA,[data, columnNames]);
System.out.println$O(table.getDefaultRenderer$Class(Clazz.getClass(Boolean)));
table.setDefaultEditor$Class$javax_swing_table_TableCellEditor(Clazz.getClass(java.lang.Object), Clazz.new_($I$(5,1).c$$javax_swing_JTextField,[this.editor]));
table.setDefaultRenderer$Class$javax_swing_table_TableCellRenderer(Clazz.getClass(Boolean), table.getDefaultRenderer$Class(Clazz.getClass(Boolean)));
table.setPreferredScrollableViewportSize$java_awt_Dimension(Clazz.new_($I$(6,1).c$$I$I,[500, 70]));
table.setFillsViewportHeight$Z(true);
if (this.DEBUG) {
table.addMouseListener$java_awt_event_MouseListener(((P$.SimpleTableDemo$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SimpleTableDemo$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
p$1.printDebugData$javax_swing_JTable.apply(this.b$['test.SimpleTableDemo'], [this.$finals$.table]);
});
})()
), Clazz.new_($I$(7,1),[this, {table:table}],P$.SimpleTableDemo$1)));
}var scrollPane=Clazz.new_($I$(8,1).c$$java_awt_Component,[table]);
this.add$java_awt_Component(scrollPane);
}, 1);

Clazz.newMeth(C$, 'printDebugData$javax_swing_JTable',  function (table) {
var numRows=table.getRowCount$();
var numCols=table.getColumnCount$();
var model=table.getModel$();
System.out.println$S("Value of data: ");
for (var i=0; i < numRows; i++) {
System.out.print$S("    row " + i + ":" );
for (var j=0; j < numCols; j++) {
System.out.print$S("  " + model.getValueAt$I$I(i, j));
}
System.out.println$();
}
System.out.println$S("--------------------------");
}, p$1);

Clazz.newMeth(C$, 'createAndShowGUI$',  function () {
var frame=Clazz.new_($I$(9,1).c$$S,["SimpleTableDemo"]);
frame.setDefaultCloseOperation$I(3);
var newContentPane=Clazz.new_(C$);
newContentPane.setOpaque$Z(true);
frame.setContentPane$java_awt_Container(newContentPane);
frame.pack$();
frame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
$I$(10,"invokeLater$Runnable",[((P$.SimpleTableDemo$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "SimpleTableDemo$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(11).createAndShowGUI$();
});
})()
), Clazz.new_(P$.SimpleTableDemo$2.$init$,[this, null]))]);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
