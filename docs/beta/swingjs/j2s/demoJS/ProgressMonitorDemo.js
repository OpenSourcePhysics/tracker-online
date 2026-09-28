(function(){var P$=Clazz.newPackage("demoJS"),p$1={},I$=[[0,'java.awt.Toolkit','java.awt.Rectangle','java.awt.BorderLayout','java.awt.Dimension','javax.swing.JButton',['demoJS.ProgressMonitorDemo','.AsyncTask'],'javax.swing.JTextArea','java.awt.Insets','javax.swing.JPanel','javax.swing.BoxLayout','javax.swing.JScrollPane','javax.swing.BorderFactory','javax.swing.JFrame','java.awt.Color','javax.swing.SwingUtilities','demoJS.ProgressMonitorDemo']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ProgressMonitorDemo", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', 'java.beans.PropertyChangeListener');
C$.$classes$=[['AsyncTask',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['task','demoJS.ProgressMonitorDemo.AsyncTask','startButton','javax.swing.JButton','taskOutput','javax.swing.JTextArea']]]

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
var msg=evt.getPropertyName$() + "=" + evt.getNewValue$() + "\n" ;
p$1.append$S.apply(this, [msg]);
switch (evt.getPropertyName$()) {
case "progress":
p$1.append$S.apply(this, [this.task.getNote$() + "\n"]);
break;
case "state":
switch (evt.getNewValue$().toString()) {
case "DONE_ASYNC":
$I$(1).getDefaultToolkit$().beep$();
p$1.append$S.apply(this, ["Task completed.\n"]);
this.startButton.setEnabled$Z(true);
break;
case "CANCELED_ASYNC":
p$1.append$S.apply(this, ["Task canceled.\n"]);
this.startButton.setEnabled$Z(true);
break;
}
}
p$1.append$S.apply(this, [null]);
});

Clazz.newMeth(C$, 'append$S',  function (line) {
if (line == null ) {
this.taskOutput.scrollRectToVisible$java_awt_Rectangle(Clazz.new_($I$(2,1).c$$I$I$I$I,[0, 2147483647, 1, 1]));
return;
}this.taskOutput.append$S(line);
}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[Clazz.new_($I$(3,1))]);C$.$init$.apply(this);
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(4,1).c$$I$I,[600, 150]));
this.startButton=Clazz.new_($I$(5,1).c$$S,["Start"]);
this.startButton.addActionListener$java_awt_event_ActionListener(((P$.ProgressMonitorDemo$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ProgressMonitorDemo$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
this.b$['demoJS.ProgressMonitorDemo'].startButton.setEnabled$Z(false);
this.b$['demoJS.ProgressMonitorDemo'].taskOutput.setText$S("");
var delayMillis=100;
this.b$['demoJS.ProgressMonitorDemo'].task=Clazz.new_($I$(6,1).c$$java_awt_Component$S$I$I$I,[this.b$['demoJS.ProgressMonitorDemo'], "Some task...", delayMillis, 350, 150]);
this.b$['demoJS.ProgressMonitorDemo'].task.addPropertyChangeListener$java_beans_PropertyChangeListener(this.b$['demoJS.ProgressMonitorDemo']);
this.b$['demoJS.ProgressMonitorDemo'].task.execute$();
});
})()
), Clazz.new_(P$.ProgressMonitorDemo$1.$init$,[this, null])));
this.taskOutput=Clazz.new_($I$(7,1).c$$I$I,[5, 20]);
this.taskOutput.setMargin$java_awt_Insets(Clazz.new_($I$(8,1).c$$I$I$I$I,[5, 5, 5, 5]));
this.taskOutput.setEditable$Z(false);
var p=Clazz.new_($I$(9,1));
p.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10,1).c$$java_awt_Container$I,[p, 1]));
p.add$java_awt_Component(this.startButton);
p.setOpaque$Z(false);
this.add$java_awt_Component$O(p, "North");
this.add$java_awt_Component$O(Clazz.new_($I$(11,1).c$$java_awt_Component,[this.taskOutput]), "Center");
this.setBorder$javax_swing_border_Border($I$(12).createEmptyBorder$I$I$I$I(10, 10, 10, 10));
}, 1);

Clazz.newMeth(C$, 'createAndShowGUI$',  function () {
var frame=Clazz.new_($I$(13,1).c$$S,["ProgressMonitorDemo"]);
frame.setDefaultCloseOperation$I(3);
var newContentPane=Clazz.new_(C$);
newContentPane.setOpaque$Z(true);
newContentPane.setBackground$java_awt_Color($I$(14).lightGray);
frame.setContentPane$java_awt_Container(newContentPane);
frame.setLocation$I$I(100, 100);
frame.pack$();
frame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
$I$(15,"invokeLater$Runnable",[((P$.ProgressMonitorDemo$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ProgressMonitorDemo$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(16).createAndShowGUI$();
});
})()
), Clazz.new_(P$.ProgressMonitorDemo$2.$init$,[this, null]))]);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ProgressMonitorDemo, "AsyncTask", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javajs.async.AsyncSwingWorker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_awt_Component$S$I$I$I',  function (owner, title, delayMillis, min, max) {
;C$.superclazz.c$$java_awt_Component$S$I$I$I.apply(this,[owner, title, delayMillis, min, max]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'initAsync$',  function () {
System.out.println$S("AsyncTask.initAsync");
});

Clazz.newMeth(C$, 'doInBackgroundAsync$I',  function (progress) {
return progress + (((this.max > this.min ? 1 : -1) * (1 + Math.random() * 10))|0);
});

Clazz.newMeth(C$, 'doneAsync$',  function () {
System.out.println$S("AsyncTask.doneAsync");
});

Clazz.newMeth(C$, 'getNote$I',  function (progress) {
return "processing " + progress + "/" + this.getProgressPercent$() + "%" ;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
