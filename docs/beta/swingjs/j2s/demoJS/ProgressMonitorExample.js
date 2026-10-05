(function(){var P$=Clazz.newPackage("demoJS"),I$=[[0,'javax.swing.UIManager','javajs.async.AsyncSwingWorker','javax.swing.JButton','javax.swing.JFrame','java.awt.Dimension']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ProgressMonitorExample");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createStartTaskActionListener$java_awt_Component',  function (parent) {
$I$(1).put$O$O("ProgressMonitor.progressText", "Test Progress");
return ((P$.ProgressMonitorExample$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ProgressMonitorExample$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (actionEvent) /*block*/{
((P$.ProgressMonitorExample$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ProgressMonitorExample$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javajs.async.AsyncSwingWorker'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'initAsync$',  function () {
this.b$['demoJS.ProgressMonitorExample$1'].progressMonitor.setMillisToDecideToPopup$I.apply(this.b$['demoJS.ProgressMonitorExample$1'].progressMonitor, [100]);
this.b$['demoJS.ProgressMonitorExample$1'].progressMonitor.setMillisToPopup$I.apply(this.b$['demoJS.ProgressMonitorExample$1'].progressMonitor, [100]);
});

Clazz.newMeth(C$, 'doInBackgroundAsync$I',  function (i) {
return ++i;
});

Clazz.newMeth(C$, 'doneAsync$',  function () {
});

Clazz.newMeth(C$, 'getNote$I',  function (progress) {
return "Task step: " + progress;
});
})()
), Clazz.new_($I$(2,1).c$$java_awt_Component$S$I$I$I,[this, null, this.$finals$.parent, "Test Task", 200, 1, 100],P$.ProgressMonitorExample$1)).execute$.apply(((P$.ProgressMonitorExample$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ProgressMonitorExample$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javajs.async.AsyncSwingWorker'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'initAsync$',  function () {
this.b$['demoJS.ProgressMonitorExample$1'].progressMonitor.setMillisToDecideToPopup$I.apply(this.b$['demoJS.ProgressMonitorExample$1'].progressMonitor, [100]);
this.b$['demoJS.ProgressMonitorExample$1'].progressMonitor.setMillisToPopup$I.apply(this.b$['demoJS.ProgressMonitorExample$1'].progressMonitor, [100]);
});

Clazz.newMeth(C$, 'doInBackgroundAsync$I',  function (i) {
return ++i;
});

Clazz.newMeth(C$, 'doneAsync$',  function () {
});

Clazz.newMeth(C$, 'getNote$I',  function (progress) {
return "Task step: " + progress;
});
})()
), Clazz.new_($I$(2,1).c$$java_awt_Component$S$I$I$I,[this, null, this.$finals$.parent, "Test Task", 200, 1, 100],P$.ProgressMonitorExample$1)), []);
});
})()
), Clazz.new_(P$.ProgressMonitorExample$lambda1.$init$,[this, {parent:parent}]));
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
var frame=C$.createFrame$S("ProgressMonitor Example");
var button=Clazz.new_($I$(3,1).c$$S,["start task"]);
button.addActionListener$java_awt_event_ActionListener(C$.createStartTaskActionListener$java_awt_Component(frame));
frame.add$java_awt_Component$O(button, "North");
frame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'createFrame$S',  function (title) {
var frame=Clazz.new_($I$(4,1).c$$S,[title]);
frame.setDefaultCloseOperation$I(3);
frame.setSize$java_awt_Dimension(Clazz.new_($I$(5,1).c$$I$I,[800, 700]));
return frame;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
