(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'org.opensourcephysics.display.OSPRuntime','Thread','javax.swing.SwingUtilities',['org.opensourcephysics.tools.DiagnosticsForThreads','.ThreadViewerTableModel'],'javax.swing.JTable','org.opensourcephysics.tools.FontSizer','javax.swing.JScrollPane','java.awt.BorderLayout','javax.swing.JDialog','java.awt.Toolkit','javax.swing.JFrame']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DiagnosticsForThreads", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel');
C$.$classes$=[['ThreadViewerTableModel',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tableModel=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['O',['tableModel','org.opensourcephysics.tools.DiagnosticsForThreads.ThreadViewerTableModel']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
var table=Clazz.new_($I$(5,1).c$$javax_swing_table_TableModel,[this.tableModel]);
table.setAutoResizeMode$I(3);
$I$(6,"setFonts$O$I",[table, $I$(6).getLevel$()]);
var font=table.getFont$();
table.setRowHeight$I(font.getSize$() + 4);
table.getTableHeader$().setFont$java_awt_Font(font);
var colModel=table.getColumnModel$();
var numColumns=colModel.getColumnCount$();
for (var i=0; i < numColumns - 1; i++) {
var col=colModel.getColumn$I(i);
col.sizeWidthToFit$();
col.setPreferredWidth$I(col.getWidth$() + 5);
col.setMaxWidth$I(col.getWidth$() + 5);
}
var sp=Clazz.new_($I$(7,1).c$$java_awt_Component,[table]);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(8,1)));
this.add$java_awt_Component$O(sp, "Center");
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
this.tableModel.stopRequest$();
});

Clazz.newMeth(C$, 'finalize$',  function () {
this.dispose$();
});

Clazz.newMeth(C$, 'aboutThreads$',  function () {
var dialog=Clazz.new_($I$(9,1));
var viewer=Clazz.new_(C$);
dialog.setContentPane$java_awt_Container(viewer);
var level=$I$(6).getLevel$();
var w=((600 * (1 + level * 0.2))|0);
var h=((300 * (1 + level * 0.2))|0);
dialog.setSize$I$I(w, h);
var dim=$I$(10).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - dialog.getBounds$().width)/2|0);
var y=((dim.height - dialog.getBounds$().height)/2|0);
dialog.setLocation$I$I(x, y);
dialog.setTitle$S("Threads");
dialog.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
var f=Clazz.new_($I$(11,1));
var viewer=Clazz.new_(C$);
f.setContentPane$java_awt_Container(viewer);
f.setSize$I$I(500, 300);
f.setVisible$Z(true);
f.setDefaultCloseOperation$I(1);
var lock= Clazz.new_();
{
try {
lock.wait$();
} catch (x) {
if (Clazz.exceptionOf(x,"InterruptedException")){
} else {
throw x;
}
}
}}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DiagnosticsForThreads, "ThreadViewerTableModel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['noStopRequested'],'I',['rowCount','columnCount'],'O',['dataLock','java.lang.Object','cellData','Object[][]','+pendingCellData','columnName','String[]','columnClass','Class[]','internalThread','Thread']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.rowCount=0;
this.cellData=Clazz.array(java.lang.Object, [0, 0]);
var names=Clazz.array(String, -1, ["Priority", "Alive", "Daemon", "Interrupted", "ThreadGroup", "Thread Name"]);
this.columnName=names;
var classes=Clazz.array(Class, -1, [Clazz.getClass(Integer), Clazz.getClass(Boolean), Clazz.getClass(Boolean), Clazz.getClass(Boolean), Clazz.getClass(String), Clazz.getClass(String)]);
this.columnClass=classes;
this.columnCount=this.columnName.length;
this.dataLock= Clazz.new_();
this.noStopRequested=true;
var r=((P$.DiagnosticsForThreads$ThreadViewerTableModel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DiagnosticsForThreads$ThreadViewerTableModel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
try {
p$1.runWork.apply(this.b$['org.opensourcephysics.tools.DiagnosticsForThreads.ThreadViewerTableModel'], []);
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
x.printStackTrace$();
} else {
throw x;
}
}
});
})()
), Clazz.new_(P$.DiagnosticsForThreads$ThreadViewerTableModel$1.$init$,[this, null]));
if ($I$(1).isJS) {
System.err.println$S("Warning:  Diagnostics for Threads are not supported in JavaScript.");
} else {
this.internalThread=Clazz.new_($I$(2,1).c$$Runnable$S,[r, "ThreadViewer"]);
this.internalThread.setPriority$I(8);
this.internalThread.setDaemon$Z(true);
this.internalThread.start$();
}}, 1);

Clazz.newMeth(C$, 'runWork',  function () {
var transferPending=((P$.DiagnosticsForThreads$ThreadViewerTableModel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DiagnosticsForThreads$ThreadViewerTableModel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
p$1.transferPendingCellData.apply(this.b$['org.opensourcephysics.tools.DiagnosticsForThreads.ThreadViewerTableModel'], []);
this.b$['javax.swing.table.AbstractTableModel'].fireTableDataChanged$.apply(this.b$['javax.swing.table.AbstractTableModel'], []);
});
})()
), Clazz.new_(P$.DiagnosticsForThreads$ThreadViewerTableModel$2.$init$,[this, null]));
while (this.noStopRequested){
try {
p$1.createPendingCellData.apply(this, []);
$I$(3).invokeAndWait$Runnable(transferPending);
$I$(2).sleep$J(5000);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var tx = e$$;
{
tx.printStackTrace$();
this.stopRequest$();
}
} else if (Clazz.exceptionOf(e$$,"InterruptedException")){
var x = e$$;
{
$I$(2).currentThread$().interrupt$();
}
} else {
throw e$$;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'stopRequest$',  function () {
this.noStopRequested=false;
this.internalThread.interrupt$();
});

Clazz.newMeth(C$, 'isAlive$',  function () {
return this.internalThread.isAlive$();
});

Clazz.newMeth(C$, 'createPendingCellData',  function () {
var thread=C$.findAllThreads$();
var cell=Clazz.array(java.lang.Object, [thread.length, this.columnCount]);
for (var i=0; i < thread.length; i++) {
var t=thread[i];
var rowCell=cell[i];
rowCell[0]=Integer.valueOf$I(t.getPriority$());
rowCell[1]=Boolean.valueOf$Z(t.isAlive$());
rowCell[2]=Boolean.valueOf$Z(t.isDaemon$());
rowCell[3]=Boolean.valueOf$Z(t.isInterrupted$());
rowCell[4]=t.getThreadGroup$().getName$();
rowCell[5]=t.getName$();
}
{
this.pendingCellData=cell;
}}, p$1);

Clazz.newMeth(C$, 'transferPendingCellData',  function () {
{
this.cellData=this.pendingCellData;
this.rowCount=this.cellData.length;
}}, p$1);

Clazz.newMeth(C$, 'getRowCount$',  function () {
return this.rowCount;
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (row, col) {
return this.cellData[row][col];
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return this.columnCount;
});

Clazz.newMeth(C$, 'getColumnClass$I',  function (columnIdx) {
return this.columnClass[columnIdx];
});

Clazz.newMeth(C$, 'getColumnName$I',  function (columnIdx) {
return this.columnName[columnIdx];
});

Clazz.newMeth(C$, 'findAllThreads$',  function () {
var group=$I$(2).currentThread$().getThreadGroup$();
var topGroup=group;
while (group != null ){
topGroup=group;
group=group.getParent$();
}
var estimatedSize=topGroup.activeCount$() * 2;
var slackList=Clazz.array($I$(2), [estimatedSize]);
var actualSize=topGroup.enumerate$ThreadA(slackList);
var list=Clazz.array($I$(2), [actualSize]);
System.arraycopy$O$I$O$I$I(slackList, 0, list, 0, actualSize);
return list;
}, 1);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
