(function(){var P$=Clazz.newPackage("demoJS"),I$=[[0,'java.awt.BorderLayout','java.awt.Label','java.awt.TextArea','java.awt.Font','java.awt.Button','java.awt.Panel','java.awt.FlowLayout','java.awt.Color','javax.swing.JPanel','java.awt.GridLayout','javax.swing.JLabel','javax.swing.BoxLayout','javax.swing.JButton','javajs.async.AsyncDialog','javajs.async.AsyncFileChooser','javax.swing.JFileChooser','javajs.async.AsyncColorChooser',['demoJS.Test_Dialog2','.ImportExportDialog2'],['demoJS.Test_Dialog2','.ImportExportJDialog2']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Test_Dialog2", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JFrame');
C$.$classes$=[['ImportExportDialog2',0],['ImportExportJDialog2',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['status','javax.swing.JLabel','colorButton','javax.swing.JButton']]
,['I',['ii'],'O',['o','java.lang.Object','c','java.awt.Color']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setTitle$S("testing dialogs");
var m=Clazz.new_([Clazz.new_($I$(10,1))],$I$(9,1).c$$java_awt_LayoutManager);
this.status=Clazz.new_($I$(11,1).c$$S,["testing"]);
m.add$java_awt_Component$O(this.status, null);
this.add$java_awt_Component$O(m, "South");
var p=Clazz.new_($I$(9,1));
p.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1).c$$java_awt_Container$I,[p, 0]));
this.add$java_awt_Component$O(p, "Center");
this.setLocation$I$I(300, 300);
var b;
b=Clazz.new_($I$(13,1).c$$S,["ConfirmDialog"]);
var content=Clazz.new_($I$(9,1));
content.setLayout$java_awt_LayoutManager(Clazz.new_($I$(1,1)));
content.add$java_awt_Component$O(Clazz.new_($I$(11,1).c$$S,["this is the option panel"]), "Center");
b.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
Clazz.new_($I$(14,1)).showConfirmDialog$java_awt_Component$O$S$I$java_awt_event_ActionListener(this.b$['demoJS.Test_Dialog2'], "<html>The frame is now " + (this.b$['java.awt.Frame'].isResizable$.apply(this.b$['java.awt.Frame'], []) ? "" : "<b>NOT</b> ") + "resizable. Switch that?</html>" , "Testing JOptionPane", 0, ((P$.Test_Dialog2$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
switch (e.getID$()) {
case 0:
this.b$['java.awt.Frame'].setResizable$Z.apply(this.b$['java.awt.Frame'], [!this.b$['java.awt.Frame'].isResizable$.apply(this.b$['java.awt.Frame'], [])]);
break;
case 1:
break;
case -1:
System.out.println$S("Confirm canceled");
return;
}
var msg="this.isResizable() == " + this.b$['java.awt.Frame'].isResizable$.apply(this.b$['java.awt.Frame'], []);
System.out.println$S(msg);
this.b$['demoJS.Test_Dialog2'].status.setText$S(msg);
});
})()
), Clazz.new_(P$.Test_Dialog2$1$1.$init$,[this, null])));
});
})()
), Clazz.new_(P$.Test_Dialog2$1.$init$,[this, null])));
p.add$java_awt_Component(b);
b=Clazz.new_($I$(13,1).c$$S,["MessageDialog"]);
var message=Clazz.new_($I$(9,1));
message.setLayout$java_awt_LayoutManager(Clazz.new_($I$(1,1)));
message.add$java_awt_Component$O(Clazz.new_($I$(11,1).c$$S,["this is the message panel"]), "Center");
b.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog2$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
Clazz.new_($I$(14,1)).showMessageDialog$java_awt_Component$O$java_awt_event_ActionListener(this.b$['demoJS.Test_Dialog2'], this.$finals$.message, ((P$.Test_Dialog2$2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var ok="OK -- " + e.getActionCommand$();
this.b$['demoJS.Test_Dialog2'].status.setText$S(ok);
System.out.println$S(ok);
});
})()
), Clazz.new_(P$.Test_Dialog2$2$1.$init$,[this, null])));
});
})()
), Clazz.new_(P$.Test_Dialog2$2.$init$,[this, {message:message}])));
p.add$java_awt_Component(b);
b=Clazz.new_($I$(13,1).c$$S,["InputDialog"]);
var input=Clazz.new_($I$(9,1));
input.setLayout$java_awt_LayoutManager(Clazz.new_($I$(1,1)));
input.add$java_awt_Component$O(Clazz.new_($I$(11,1).c$$S,["this is the input panel"]), "Center");
b.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog2$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
Clazz.new_($I$(14,1)).showInputDialog$java_awt_Component$O$java_awt_event_ActionListener(this.b$['demoJS.Test_Dialog2'], this.$finals$.input, ((P$.Test_Dialog2$3$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$3$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
System.out.println$S("Input was " + e.getActionCommand$());
this.b$['demoJS.Test_Dialog2'].status.setText$S(e.getActionCommand$());
});
})()
), Clazz.new_(P$.Test_Dialog2$3$1.$init$,[this, null])));
});
})()
), Clazz.new_(P$.Test_Dialog2$3.$init$,[this, {input:input}])));
p.add$java_awt_Component(b);
b=Clazz.new_($I$(13,1).c$$S,["FileOpenDialog"]);
b.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog2$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var fc=Clazz.new_($I$(15,1));
fc.showOpenDialog$java_awt_Component$Runnable$Runnable(this.b$['demoJS.Test_Dialog2'], ((P$.Test_Dialog2$4$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$4$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var file=this.$finals$.fc.getSelectedFile$();
System.out.println$S("FileChooser returned " + Long.$s(file.length$()) + " bytes for " + file );
});
})()
), Clazz.new_(P$.Test_Dialog2$4$1.$init$,[this, {fc:fc}])), null);
});
})()
), Clazz.new_(P$.Test_Dialog2$4.$init$,[this, null])));
p.add$java_awt_Component(b);
b=Clazz.new_($I$(13,1).c$$S,["FilesOpenDialog"]);
b.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog2$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var fc=Clazz.new_($I$(15,1));
fc.setMultiSelectionEnabled$Z(true);
fc.showOpenDialog$java_awt_Component$Runnable$Runnable(this.b$['demoJS.Test_Dialog2'], ((P$.Test_Dialog2$5$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$5$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
System.out.println$O(this.$finals$.fc.getSelectedFile$());
var files=this.$finals$.fc.getSelectedFiles$();
var s="";
for (var i=0; i < files.length; i++) {
System.out.println$S("FileChooser returned " + Long.$s(files[i].length$()) + " bytes for files[" + i + "] = " + files[i] );
s+=files[i].getName$() + " " + Long.$s(files[i].length$()) + "," ;
}
this.b$['demoJS.Test_Dialog2'].status.setText$S(s);
});
})()
), Clazz.new_(P$.Test_Dialog2$5$1.$init$,[this, {fc:fc}])), null);
});
})()
), Clazz.new_(P$.Test_Dialog2$5.$init$,[this, null])));
p.add$java_awt_Component(b);
b=Clazz.new_($I$(13,1).c$$S,["FileSaveDialog"]);
b.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog2$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var fc=Clazz.new_($I$(15,1));
fc.showSaveDialog$java_awt_Component$Runnable$Runnable(this.b$['demoJS.Test_Dialog2'], ((P$.Test_Dialog2$6$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$6$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var file=this.$finals$.fc.getSelectedFile$();
var msg="FileChooser returned " + file;
System.out.println$S(msg);
this.b$['demoJS.Test_Dialog2'].status.setText$S(msg);
});
})()
), Clazz.new_(P$.Test_Dialog2$6$1.$init$,[this, {fc:fc}])), null);
});
})()
), Clazz.new_(P$.Test_Dialog2$6.$init$,[this, null])));
p.add$java_awt_Component(b);
b=Clazz.new_($I$(13,1).c$$S,["FileSaveDialog2"]);
b.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog2$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var fc=Clazz.new_($I$(16,1));
var ret=fc.showSaveDialog$java_awt_Component(this.b$['demoJS.Test_Dialog2']);
var file=fc.getSelectedFile$();
var msg="FileChooser returned " + ret + " " + file + (file == null  ? "" : " path=" + file.getAbsolutePath$()) ;
System.out.println$S(msg);
this.b$['demoJS.Test_Dialog2'].status.setText$S(msg);
});
})()
), Clazz.new_(P$.Test_Dialog2$7.$init$,[this, null])));
p.add$java_awt_Component(b);
b=this.colorButton=Clazz.new_($I$(13,1).c$$S,["ColorDialog"]);
b.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog2$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
Clazz.new_($I$(17,1)).showDialog$java_awt_Component$S$java_awt_Color$java_awt_event_ActionListener(this.b$['demoJS.Test_Dialog2'], "Testing JColorChooser", $I$(8).RED, ((P$.Test_Dialog2$8$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$8$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var value=(e.getID$() == 0 ? null : (e.getSource$()).getSelectedColor$());
if (value != null ) {
this.b$['demoJS.Test_Dialog2'].colorButton.setBackground$java_awt_Color(value);
this.b$['demoJS.Test_Dialog2'].status.setText$S(value.toString());
}System.out.println$S("ColorChooser returned " + value + (value == null  ? "" : " = " + Clazz.new_([e.getID$()],$I$(8,1).c$$I)) );
});
})()
), Clazz.new_(P$.Test_Dialog2$8$1.$init$,[this, null])));
});
})()
), Clazz.new_(P$.Test_Dialog2$8.$init$,[this, null])));
p.add$java_awt_Component(b);
b=Clazz.new_($I$(13,1).c$$S,["ExportDialog"]);
b.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog2$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var d=Clazz.new_($I$(18,1).c$$java_awt_Frame$S,[this, null, null, "Export Dialog"]);
d.setVisible$Z(true);
});
})()
), Clazz.new_(P$.Test_Dialog2$9.$init$,[this, null])));
p.add$java_awt_Component(b);
b=Clazz.new_($I$(13,1).c$$S,["ExportJDialog"]);
b.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog2$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var d=Clazz.new_($I$(19,1).c$$javax_swing_JFrame$S,[this, null, null, "Export Dialog"]);
d.setVisible$Z(true);
});
})()
), Clazz.new_(P$.Test_Dialog2$10.$init$,[this, null])));
p.add$java_awt_Component(b);
this.pack$();
this.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
try {
Clazz.new_(C$);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.o= Clazz.new_();
C$.c=Clazz.new_($I$(8,1).c$$I$I$I,[1, 2, 3]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Test_Dialog2, "ImportExportDialog2", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.Dialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['closeButton','java.awt.Button','+copyPasteButton','+importButton','label','java.awt.Label','textArea','java.awt.TextArea']]]

Clazz.newMeth(C$, 'c$$java_awt_Frame$S',  function (parent, title) {
;C$.superclazz.c$$java_awt_Frame$S$Z.apply(this,[parent, title, true]);C$.$init$.apply(this);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(1,1).c$$I$I,[15, 0]));
if (title.equals$O("Import Dialog")) this.add$S$java_awt_Component("North", Clazz.new_($I$(2,1).c$$S,["Import using CTRL + V"]));
 else this.add$S$java_awt_Component("North", Clazz.new_($I$(2,1).c$$S,["Export using CTRL + C"]));
this.textArea=((P$.Test_Dialog2$ImportExportDialog2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$ImportExportDialog2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.TextArea'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var d=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
System.out.println$S(this.getRows$() + " " + this.getColumns$() );
System.out.println$S("export dialog textarea pref d = " + d);
return d;
});

Clazz.newMeth(C$, 'preferredSize$',  function () {
var d=C$.superclazz.prototype.preferredSize$.apply(this, []);
System.out.println$S("export dialog pref textarea pref d = " + d);
return d;
});

Clazz.newMeth(C$, 'minimumSize$',  function () {
var d=C$.superclazz.prototype.minimumSize$.apply(this, []);
System.out.println$S("export dialog min textarea min d = " + d);
return d;
});

Clazz.newMeth(C$, 'getMinimumSize$',  function () {
var d=C$.superclazz.prototype.getMinimumSize$.apply(this, []);
System.out.println$S("export dialog textarea min d = " + d);
return d;
});
})()
), Clazz.new_($I$(3,1),[this, null],P$.Test_Dialog2$ImportExportDialog2$1));
this.textArea.setText$S("this is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system\nthis is a test of the system\nthis is a test of the system\nthis is a test of the system\n");
this.textArea.setFont$java_awt_Font(Clazz.new_($I$(4,1).c$$S$I$I,["Dialog", 0, 18]));
this.add$S$java_awt_Component("Center", this.textArea);
this.copyPasteButton=Clazz.new_($I$(5,1).c$$S,["Copy"]);
if (title.equals$O("Import Dialog")) this.copyPasteButton.setLabel$S("Paste");
this.importButton=Clazz.new_($I$(5,1).c$$S,["Import"]);
this.closeButton=Clazz.new_($I$(5,1).c$$S,["Close"]);
if (title.equals$O("Import Dialog")) this.closeButton.setLabel$S("Close");
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog2$ImportExportDialog2$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$ImportExportDialog2$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['java.awt.Dialog'].hide$.apply(this.b$['java.awt.Dialog'], []);
this.b$['java.awt.Window'].dispose$.apply(this.b$['java.awt.Window'], []);
});
})()
), Clazz.new_(P$.Test_Dialog2$ImportExportDialog2$2.$init$,[this, null])));
var p=Clazz.new_($I$(6,1));
p.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7,1).c$$I$I$I,[1, 15, 10]));
if (title.equals$O("Import Dialog")) p.add$java_awt_Component(this.importButton);
p.add$java_awt_Component(this.closeButton);
this.add$S$java_awt_Component("South", p);
this.setLocation$I$I(430, 0);
this.pack$();
System.out.println$O(this.textArea.getPreferredSize$());
this.setResizable$Z(false);
this.validate$();
this.repaint$();
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Test_Dialog2, "ImportExportJDialog2", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['closeButton','java.awt.Button','+copyPasteButton','+importButton','label','java.awt.Label','textArea','java.awt.TextArea']]]

Clazz.newMeth(C$, 'c$$javax_swing_JFrame$S',  function (parent, title) {
;C$.superclazz.c$$java_awt_Frame$S$Z.apply(this,[parent, title, true]);C$.$init$.apply(this);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(1,1).c$$I$I,[15, 0]));
if (title.equals$O("Import Dialog")) this.add$S$java_awt_Component("North", Clazz.new_($I$(2,1).c$$S,["Import using CTRL + V"]));
 else this.add$S$java_awt_Component("North", Clazz.new_($I$(2,1).c$$S,["Export using CTRL + C"]));
this.textArea=((P$.Test_Dialog2$ImportExportJDialog2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$ImportExportJDialog2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.TextArea'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var d=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
System.out.println$S(this.getRows$() + " " + this.getColumns$() );
System.out.println$S("export dialog textarea pref d = " + d);
return d;
});

Clazz.newMeth(C$, 'preferredSize$',  function () {
var d=C$.superclazz.prototype.preferredSize$.apply(this, []);
System.out.println$S("export dialog pref textarea pref d = " + d);
return d;
});

Clazz.newMeth(C$, 'minimumSize$',  function () {
var d=C$.superclazz.prototype.minimumSize$.apply(this, []);
System.out.println$S("export dialog min textarea min d = " + d);
return d;
});

Clazz.newMeth(C$, 'getMinimumSize$',  function () {
var d=C$.superclazz.prototype.getMinimumSize$.apply(this, []);
System.out.println$S("export dialog textarea min d = " + d);
return d;
});
})()
), Clazz.new_($I$(3,1),[this, null],P$.Test_Dialog2$ImportExportJDialog2$1));
this.textArea.setText$S("this is a test of the system and this is a test of the system\nthis is a test of the system\nthis is a test of the system\nthis is a test of the system\nthis is a test of the system\n");
this.textArea.setFont$java_awt_Font(Clazz.new_($I$(4,1).c$$S$I$I,["Dialog", 0, 18]));
this.add$S$java_awt_Component("Center", this.textArea);
this.copyPasteButton=Clazz.new_($I$(5,1).c$$S,["Copy"]);
if (title.equals$O("Import Dialog")) this.copyPasteButton.setLabel$S("Paste");
this.importButton=Clazz.new_($I$(5,1).c$$S,["Import"]);
this.closeButton=Clazz.new_($I$(5,1).c$$S,["Close"]);
if (title.equals$O("Import Dialog")) this.closeButton.setLabel$S("Close");
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog2$ImportExportJDialog2$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog2$ImportExportJDialog2$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['java.awt.Dialog'].hide$.apply(this.b$['java.awt.Dialog'], []);
this.b$['java.awt.Window'].dispose$.apply(this.b$['java.awt.Window'], []);
});
})()
), Clazz.new_(P$.Test_Dialog2$ImportExportJDialog2$2.$init$,[this, null])));
var p=Clazz.new_($I$(6,1));
p.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7,1).c$$I$I$I,[1, 15, 10]));
if (title.equals$O("Import Dialog")) p.add$java_awt_Component(this.importButton);
p.add$java_awt_Component(this.closeButton);
this.add$S$java_awt_Component("South", p);
this.setLocation$I$I(430, 0);
this.pack$();
System.out.println$O(this.textArea.getPreferredSize$());
this.setResizable$Z(false);
this.validate$();
this.repaint$();
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
