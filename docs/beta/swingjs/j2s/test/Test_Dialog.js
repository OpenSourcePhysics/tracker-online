(function(){var P$=Clazz.newPackage("test"),I$=[[0,'java.awt.BorderLayout','java.awt.Label','java.awt.TextArea','java.awt.Font','java.awt.Button','java.awt.Panel','java.awt.FlowLayout','java.awt.Color','javax.swing.JPanel','java.awt.GridLayout','javax.swing.JLabel','javax.swing.BoxLayout','java.awt.Dimension','javax.swing.JButton','javax.swing.JOptionPane','javax.swing.JFileChooser','javax.swing.JColorChooser',['test.Test_Dialog','.ImportExportDialog'],['test.Test_Dialog','.ImportExportJDialog'],'org.opensourcephysics.media.core.NumberField',['org.opensourcephysics.tools.DatasetCurveFitter','.DCFNumberField']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Test_Dialog", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.OSPFrame', 'java.beans.PropertyChangeListener');
C$.$classes$=[['ImportExportDialog',0],['ImportExportJDialog',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['status','javax.swing.JLabel','colorButton','javax.swing.JButton']]
,['I',['ii'],'O',['o','java.lang.Object','c','java.awt.Color']]]

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (event) {
var val=event.getNewValue$();
var name=event.getPropertyName$();
System.out.println$S(name);
switch (event.getSource$().getClass$().getName$()) {
case "javax.swing.JOptionPane":
switch (name) {
case "inputValue":
this.onDialogReturn$O(val);
return;
case "value":
if (Clazz.instanceOf(val, "java.lang.Integer")) this.onDialogReturn$I((val).intValue$());
 else this.onDialogReturn$O(val);
return;
}
break;
case "javax.swing.ColorChooserDialog":
switch (name) {
case "SelectedColor":
this.onDialogReturn$O(val);
return;
}
break;
case "javax.swing.JFileChooser":
switch (name) {
case "SelectedFiles":
var files=val;
var len=Clazz.array(Long.TYPE, [files.length]);
for (var i=0; i < files.length; i++) {
len[i]=files[i].length$();
}
this.onDialogReturn$O(files.length + " files read sizes=" + len );
return;
case "SelectedFile":
var file=val;
var array=(val == null  ? null : file.秘bytes ||null);
this.onDialogReturn$O("fileName is '" + file.getName$() + " size=" + (array == null  ? null : Integer.valueOf$I(array.length)) );
return;
}
break;
}
System.out.println$S(event.getSource$().getClass$().getName$() + " " + event.getPropertyName$() + ": " + event.getNewValue$() );
});

Clazz.newMeth(C$, 'onDialogReturn$I',  function (value) {
if (value != Math.floor(value) ) return;
System.out.println$S("int value is " + value);
});

Clazz.newMeth(C$, 'onDialogReturn$O',  function (value) {
if (value == null  || Clazz.instanceOf(value, "javax.swing.plaf.UIResource") ) return;
if (Clazz.instanceOf(value, "java.awt.Color")) {
this.colorButton.setBackground$java_awt_Color(value);
}this.status.setText$S(value.toString());
});

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
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13,1).c$$I$I,[1000, 100]));
this.setLocation$I$I(200, 200);
var b;
b=Clazz.new_($I$(14,1).c$$S,["ConfirmDialog"]);
var content=Clazz.new_($I$(9,1));
content.setLayout$java_awt_LayoutManager(Clazz.new_($I$(1,1)));
content.add$java_awt_Component$O(Clazz.new_($I$(11,1).c$$S,["this is the option panel"]), "Center");
b.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['test.Test_Dialog'].onDialogReturn$I.apply(this.b$['test.Test_Dialog'], [$I$(15,"showConfirmDialog$java_awt_Component$O$S$I",[this.b$['test.Test_Dialog'], "<html>The frame is now " + (this.b$['java.awt.Frame'].isResizable$.apply(this.b$['java.awt.Frame'], []) ? "<b>NOT</b> " : "") + "resizable.</html>" , "Testing JOptionPane", 2])]);
this.b$['java.awt.Frame'].setResizable$Z.apply(this.b$['java.awt.Frame'], [!this.b$['java.awt.Frame'].isResizable$.apply(this.b$['java.awt.Frame'], [])]);
});
})()
), Clazz.new_(P$.Test_Dialog$1.$init$,[this, null])));
p.add$java_awt_Component(b);
b=Clazz.new_($I$(14,1).c$$S,["MessageDialog"]);
var message=Clazz.new_($I$(9,1));
message.setLayout$java_awt_LayoutManager(Clazz.new_($I$(1,1)));
message.add$java_awt_Component$O(Clazz.new_($I$(11,1).c$$S,["this is the message panel"]), "Center");
b.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(15).showMessageDialog$java_awt_Component$O(this.b$['test.Test_Dialog'], this.$finals$.message);
});
})()
), Clazz.new_(P$.Test_Dialog$2.$init$,[this, {message:message}])));
p.add$java_awt_Component(b);
b=Clazz.new_($I$(14,1).c$$S,["InputDialog"]);
var input=Clazz.new_($I$(9,1));
input.setLayout$java_awt_LayoutManager(Clazz.new_($I$(1,1)));
input.add$java_awt_Component$O(Clazz.new_($I$(11,1).c$$S,["this is the input panel"]), "Center");
b.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['test.Test_Dialog'].onDialogReturn$O.apply(this.b$['test.Test_Dialog'], [$I$(15).showInputDialog$java_awt_Component$O(this.b$['test.Test_Dialog'], this.$finals$.input)]);
});
})()
), Clazz.new_(P$.Test_Dialog$3.$init$,[this, {input:input}])));
p.add$java_awt_Component(b);
b=Clazz.new_($I$(14,1).c$$S,["FileOpenDialog"]);
b.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var fc=Clazz.new_($I$(16,1));
this.b$['test.Test_Dialog'].onDialogReturn$I.apply(this.b$['test.Test_Dialog'], [fc.showOpenDialog$java_awt_Component(this.b$['test.Test_Dialog'])]);
});
})()
), Clazz.new_(P$.Test_Dialog$4.$init$,[this, null])));
p.add$java_awt_Component(b);
b=Clazz.new_($I$(14,1).c$$S,["FilesOpenDialog"]);
b.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var fc=Clazz.new_($I$(16,1));
fc.setMultiSelectionEnabled$Z(true);
this.b$['test.Test_Dialog'].onDialogReturn$I.apply(this.b$['test.Test_Dialog'], [fc.showOpenDialog$java_awt_Component(this.b$['test.Test_Dialog'])]);
});
})()
), Clazz.new_(P$.Test_Dialog$5.$init$,[this, null])));
p.add$java_awt_Component(b);
b=this.colorButton=Clazz.new_($I$(14,1).c$$S,["ColorDialog"]);
b.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['test.Test_Dialog'].onDialogReturn$O.apply(this.b$['test.Test_Dialog'], [$I$(17,"showDialog$java_awt_Component$S$java_awt_Color",[this.b$['test.Test_Dialog'], "Testing JColorChooser", $I$(8).RED])]);
});
})()
), Clazz.new_(P$.Test_Dialog$6.$init$,[this, null])));
p.add$java_awt_Component(b);
b=Clazz.new_($I$(14,1).c$$S,["ExportDialog"]);
b.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var d=Clazz.new_($I$(18,1).c$$java_awt_Frame$S,[this, null, null, "Export Dialog"]);
d.setVisible$Z(true);
});
})()
), Clazz.new_(P$.Test_Dialog$7.$init$,[this, null])));
p.add$java_awt_Component(b);
b=Clazz.new_($I$(14,1).c$$S,["ExportJDialog"]);
b.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var d=((P$.Test_Dialog$8$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog$8$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['test.Test_Dialog','.ImportExportJDialog']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setFocusableWindowState$Z',  function (focusableWindowState) {
C$.superclazz.prototype.setFocusableWindowState$Z.apply(this, [focusableWindowState]);
});
})()
), Clazz.new_($I$(19,1).c$$javax_swing_JFrame$S,[this, null, null, "Export Dialog"],P$.Test_Dialog$8$1));
System.out.println$Z(d.getFocusableWindowState$());
d.setVisible$Z(true);
System.out.println$Z(d.getFocusableWindowState$());
});
})()
), Clazz.new_(P$.Test_Dialog$8.$init$,[this, null])));
p.add$java_awt_Component(b);
var f=Clazz.new_($I$(20,1).c$$I,[4]);
p.add$java_awt_Component(f);
var df=Clazz.new_($I$(21,1).c$$I,[4]);
p.add$java_awt_Component(df);
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
(function(){/*c*/var C$=Clazz.newClass(P$.Test_Dialog, "ImportExportDialog", function(){
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
this.textArea=((P$.Test_Dialog$ImportExportDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog$ImportExportDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.TextArea'), null, 1);

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
), Clazz.new_($I$(3,1),[this, null],P$.Test_Dialog$ImportExportDialog$1));
this.textArea.setText$S("this is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system and this is a test of the system\nthis is a test of the system\nthis is a test of the system\nthis is a test of the system\nthis is a test of the system\n");
this.textArea.setFont$java_awt_Font(Clazz.new_($I$(4,1).c$$S$I$I,["Dialog", 0, 18]));
this.add$S$java_awt_Component("Center", this.textArea);
this.copyPasteButton=Clazz.new_($I$(5,1).c$$S,["Copy"]);
if (title.equals$O("Import Dialog")) this.copyPasteButton.setLabel$S("Paste");
this.importButton=Clazz.new_($I$(5,1).c$$S,["Import"]);
this.closeButton=Clazz.new_($I$(5,1).c$$S,["Close"]);
if (title.equals$O("Import Dialog")) this.closeButton.setLabel$S("Close");
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog$ImportExportDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog$ImportExportDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['java.awt.Dialog'].hide$.apply(this.b$['java.awt.Dialog'], []);
this.b$['java.awt.Window'].dispose$.apply(this.b$['java.awt.Window'], []);
});
})()
), Clazz.new_(P$.Test_Dialog$ImportExportDialog$2.$init$,[this, null])));
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
(function(){/*c*/var C$=Clazz.newClass(P$.Test_Dialog, "ImportExportJDialog", function(){
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
this.textArea=((P$.Test_Dialog$ImportExportJDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog$ImportExportJDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.TextArea'), null, 1);

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
), Clazz.new_($I$(3,1),[this, null],P$.Test_Dialog$ImportExportJDialog$1));
this.textArea.setText$S("this is a test of the system and this is a test of the system\nthis is a test of the system\nthis is a test of the system\nthis is a test of the system\nthis is a test of the system\n");
this.textArea.setFont$java_awt_Font(Clazz.new_($I$(4,1).c$$S$I$I,["Dialog", 0, 18]));
this.add$S$java_awt_Component("Center", this.textArea);
this.copyPasteButton=Clazz.new_($I$(5,1).c$$S,["Copy"]);
if (title.equals$O("Import Dialog")) this.copyPasteButton.setLabel$S("Paste");
this.importButton=Clazz.new_($I$(5,1).c$$S,["Import"]);
this.closeButton=Clazz.new_($I$(5,1).c$$S,["Close"]);
if (title.equals$O("Import Dialog")) this.closeButton.setLabel$S("Close");
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.Test_Dialog$ImportExportJDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Test_Dialog$ImportExportJDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['java.awt.Dialog'].hide$.apply(this.b$['java.awt.Dialog'], []);
this.b$['java.awt.Window'].dispose$.apply(this.b$['java.awt.Window'], []);
});
})()
), Clazz.new_(P$.Test_Dialog$ImportExportJDialog$2.$init$,[this, null])));
var p=Clazz.new_($I$(6,1));
p.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7,1).c$$I$I$I,[1, 15, 10]));
if (title.equals$O("Import Dialog")) p.add$java_awt_Component(this.importButton);
p.add$java_awt_Component(this.closeButton);
this.add$S$java_awt_Component("South", p);
this.setLocation$I$I(430, 0);
System.out.println$Z(this.isDisplayable$());
this.pack$();
System.out.println$Z(this.isDisplayable$());
System.out.println$O(this.textArea.getPreferredSize$());
this.setResizable$Z(false);
this.validate$();
this.repaint$();
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
