(function(){var P$=Clazz.newPackage("test"),I$=[[0,'org.opensourcephysics.display.OSPFrame','javax.swing.JMenuBar','javax.swing.JMenu','javax.swing.JMenuItem','org.opensourcephysics.tools.FontSizer','javax.swing.JTable']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FontResizeTest");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.data=Clazz.array(java.lang.Object, -2, [Clazz.array(java.lang.Object, -1, ["Kathy", "Smith", "Snowboarding", Integer.valueOf$I(5), Boolean.FALSE]), Clazz.array(java.lang.Object, -1, ["John", "Doe", "Rowing", Integer.valueOf$I(3), Boolean.TRUE]), Clazz.array(java.lang.Object, -1, ["Sue", "Black", "Knitting", Integer.valueOf$I(2), Boolean.FALSE]), Clazz.array(java.lang.Object, -1, ["Jane", "White", "Speed reading", Integer.valueOf$I(20), Boolean.TRUE]), Clazz.array(java.lang.Object, -1, ["Joe", "Brown", "Pool", Integer.valueOf$I(10), Boolean.FALSE])]);
this.columnNames=Clazz.array(String, -1, ["First Name", "Last Name", "Sport", "# of Years", "Vegetarian"]);
this.frame=Clazz.new_($I$(1,1).c$$S,["Font Test"]);
},1);

C$.$fields$=[['I',['level'],'O',['data','Object[][]','columnNames','String[]','frame','org.opensourcephysics.display.OSPFrame','sizeUpItem','javax.swing.JMenuItem','+sizeDownItem','menuBar','javax.swing.JMenuBar','table','javax.swing.JTable']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.menuBar=Clazz.new_($I$(2,1));
this.frame.getRootPane$().setMenuBar$javax_swing_JMenuBar(this.menuBar);
var fontMenu=Clazz.new_($I$(3,1).c$$S,["Font Test"]);
this.menuBar.add$javax_swing_JMenu(fontMenu);
var sizeUpItem=Clazz.new_($I$(4,1).c$$S,["Increase"]);
sizeUpItem.addActionListener$java_awt_event_ActionListener(((P$.FontResizeTest$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FontResizeTest$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(5).levelUp$();
});
})()
), Clazz.new_(P$.FontResizeTest$1.$init$,[this, null])));
fontMenu.add$javax_swing_JMenuItem(sizeUpItem);
this.table=Clazz.new_($I$(6,1).c$$OAA$OA,[this.data, this.columnNames]);
$I$(5,"addListener$S$java_beans_PropertyChangeListener",["level", ((P$.FontResizeTest$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "FontResizeTest$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
$I$(5).setFonts$java_awt_Container(this.b$['test.FontResizeTest'].frame);
});
})()
), Clazz.new_(P$.FontResizeTest$2.$init$,[this, null]))]);
this.frame.setContentPane$java_awt_Container(this.table);
this.frame.setSize$I$I(500, 500);
this.frame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
Clazz.new_(C$);
}, 1);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
