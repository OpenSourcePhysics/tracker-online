(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.util.ArrayList','javax.swing.JRadioButton','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JTextPane',['javax.swing.event.HyperlinkEvent','.EventType'],'org.opensourcephysics.desktop.OSPDesktop','javax.swing.JScrollPane','javax.swing.Box','javax.swing.BorderFactory','javax.swing.ButtonGroup','javax.swing.AbstractAction','javax.swing.JButton','java.awt.Color','org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.tools.FontSizer','java.awt.Dimension','java.awt.Toolkit']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DerivativeAlgorithmDialog", null, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.targetMasses=Clazz.new_($I$(1,1));
this.types=Clazz.array(Integer.TYPE, -1, [0, 2, 1]);
this.buttons=Clazz.array($I$(2), [this.types.length]);
this.bounceUrl="http://gasstationwithoutpumps.wordpress.com/2011/11/08/tracker-video-analysis-tool-fixes/";
},1);

C$.$fields$=[['I',['prevAlgorithm'],'S',['bounceUrl'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','targetMasses','java.util.ArrayList','okButton','javax.swing.JButton','+cancelButton','textPane','javax.swing.JTextPane','types','int[]','buttons','javax.swing.JRadioButton[]','choiceBorder','javax.swing.border.TitledBorder']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[panel.getTFrame$(), true]);C$.$init$.apply(this);
this.frame=panel.getTFrame$();
this.panelID=panel.getID$();
p$1.createGUI.apply(this, []);
this.pack$();
this.okButton.requestFocusInWindow$();
}, 1);

Clazz.newMeth(C$, 'setTargetMass$org_opensourcephysics_cabrillo_tracker_PointMass',  function (mass) {
this.targetMasses.clear$();
this.targetMasses.add$O(mass);
p$1.refreshGUI.apply(this, []);
});

Clazz.newMeth(C$, 'setTargetMasses$java_util_ArrayList',  function (masses) {
this.targetMasses.clear$();
this.targetMasses.addAll$java_util_Collection(masses);
p$1.refreshGUI.apply(this, []);
});

Clazz.newMeth(C$, 'createGUI',  function () {
var contentPane=Clazz.new_([Clazz.new_($I$(4,1))],$I$(3,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
this.textPane=Clazz.new_($I$(5,1));
this.textPane.setEditable$Z(false);
this.textPane.addHyperlinkListener$javax_swing_event_HyperlinkListener(((P$.DerivativeAlgorithmDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DerivativeAlgorithmDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.HyperlinkListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'hyperlinkUpdate$javax_swing_event_HyperlinkEvent',  function (e) {
if (e.getEventType$() === $I$(6).ACTIVATED ) {
$I$(7,"browse$S",[e.getURL$().toString()]);
} else if (e.getEventType$() === $I$(6).ENTERED ) {
this.b$['org.opensourcephysics.cabrillo.tracker.DerivativeAlgorithmDialog'].textPane.setToolTipText$S(this.b$['org.opensourcephysics.cabrillo.tracker.DerivativeAlgorithmDialog'].bounceUrl);
} else if (e.getEventType$() === $I$(6).EXITED ) {
this.b$['org.opensourcephysics.cabrillo.tracker.DerivativeAlgorithmDialog'].textPane.setToolTipText$S(null);
}});
})()
), Clazz.new_(P$.DerivativeAlgorithmDialog$1.$init$,[this, null])));
var scroller=Clazz.new_($I$(8,1).c$$java_awt_Component,[this.textPane]);
contentPane.add$java_awt_Component$O(scroller, "Center");
var choicebar=$I$(9).createHorizontalBox$();
this.choiceBorder=$I$(10).createTitledBorder$S("");
var empty=$I$(10).createEmptyBorder$I$I$I$I(3, 2, 3, 2);
choicebar.setBorder$javax_swing_border_Border($I$(10).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(empty, this.choiceBorder));
var group=Clazz.new_($I$(11,1));
var chooser=((P$.DerivativeAlgorithmDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DerivativeAlgorithmDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var i=Integer.parseInt$S(e.getActionCommand$());
for (var next, $next = this.b$['org.opensourcephysics.cabrillo.tracker.DerivativeAlgorithmDialog'].targetMasses.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.setAlgorithm$I(i);
}
p$1.refreshInfo$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DerivativeAlgorithmDialog'], [i]);
});
})()
), Clazz.new_($I$(12,1),[this, null],P$.DerivativeAlgorithmDialog$2));
for (var i=0; i < this.types.length; i++) {
var type=this.types[i];
this.buttons[i]=Clazz.new_($I$(2,1));
this.buttons[i].setActionCommand$S(String.valueOf$I(type));
this.buttons[i].addActionListener$java_awt_event_ActionListener(chooser);
group.add$javax_swing_AbstractButton(this.buttons[i]);
choicebar.add$java_awt_Component(this.buttons[i]);
}
contentPane.add$java_awt_Component$O(choicebar, "North");
this.okButton=Clazz.new_($I$(13,1));
this.okButton.setForeground$java_awt_Color(Clazz.new_($I$(14,1).c$$I$I$I,[0, 0, 102]));
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.DerivativeAlgorithmDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DerivativeAlgorithmDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.DerivativeAlgorithmDialog'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DerivativeAlgorithmDialog'], [false]);
});
})()
), Clazz.new_(P$.DerivativeAlgorithmDialog$3.$init$,[this, null])));
this.cancelButton=Clazz.new_($I$(13,1));
this.cancelButton.setForeground$java_awt_Color(Clazz.new_($I$(14,1).c$$I$I$I,[0, 0, 102]));
this.cancelButton.addActionListener$java_awt_event_ActionListener(((P$.DerivativeAlgorithmDialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DerivativeAlgorithmDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.revert.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DerivativeAlgorithmDialog'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.DerivativeAlgorithmDialog'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.DerivativeAlgorithmDialog'], [false]);
});
})()
), Clazz.new_(P$.DerivativeAlgorithmDialog$4.$init$,[this, null])));
var buttonbar=Clazz.new_($I$(3,1));
buttonbar.setBorder$javax_swing_border_Border($I$(10).createEmptyBorder$I$I$I$I(1, 0, 3, 0));
contentPane.add$java_awt_Component$O(buttonbar, "South");
buttonbar.add$java_awt_Component(this.okButton);
buttonbar.add$java_awt_Component(this.cancelButton);
p$1.refreshGUI.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'refreshGUI',  function () {
var target=this.targetMasses.size$() == 1 ? this.targetMasses.get$I(0).getName$() : $I$(15).getString$S("AlgorithmDialog.TargetMasses.All");
this.setTitle$S($I$(15).getString$S("AlgorithmDialog.Title") + ": " + target );
this.choiceBorder.setTitle$S($I$(15).getString$S("AlgorithmDialog.TitledBorder.Choose"));
this.okButton.setText$S($I$(15).getString$S("Dialog.Button.OK"));
this.cancelButton.setText$S($I$(15).getString$S("Dialog.Button.Cancel"));
for (var i=0; i < this.types.length; i++) {
var type=this.types[i];
var s="";
if (type == 0) {
s=$I$(15).getString$S("AlgorithmDialog.Button.FiniteDifference");
} else if (type == 1) {
s=$I$(15).getString$S("AlgorithmDialog.Button.BounceDetect");
} else if (type == 2) {
s=$I$(15).getString$S("AlgorithmDialog.Button.SmoothFiniteDifference");
}this.buttons[i].setText$S(s);
}
}, p$1);

Clazz.newMeth(C$, 'refreshInfo$I',  function (algorithm) {
var s="";
if (algorithm == 0) {
this.textPane.setContentType$S("text/plain");
s=$I$(15).getString$S("AlgorithmDialog.FiniteDifference.Message1") + "\n\n    " + $I$(15).getString$S("AlgorithmDialog.FiniteDifference.Message2") + "\n\n    " + $I$(15).getString$S("AlgorithmDialog.FiniteDifference.Message3") ;
} else if (algorithm == 1) {
this.textPane.setContentType$S("text/html");
var linkName="Tracker video analysis tool fixes";
s=$I$(15).getString$S("AlgorithmDialog.BounceDetect.Message1") + " " + $I$(15).getString$S("AlgorithmDialog.BounceDetect.Message2") + "<a href='" + this.bounceUrl + "'> " + linkName + "</a>." ;
} else if (algorithm == 2) {
this.textPane.setContentType$S("text/plain");
s=$I$(15).getString$S("AlgorithmDialog.SmoothFiniteDifference.Message1") + "\n\n    " + $I$(15).getString$S("AlgorithmDialog.SmoothFiniteDifference.Message2") + "\n\n    " + $I$(15).getString$S("AlgorithmDialog.SmoothFiniteDifference.Message3") ;
}this.textPane.setText$S(s);
}, p$1);

Clazz.newMeth(C$, 'initialize',  function () {
if (!this.targetMasses.isEmpty$()) {
var p=this.targetMasses.get$I(0);
this.prevAlgorithm=p.algorithm;
}for (var i=0; i < this.types.length; i++) {
var type=this.types[i];
if (type == this.prevAlgorithm) {
this.buttons[i].setSelected$Z(true);
p$1.refreshInfo$I.apply(this, [type]);
break;
}}
}, p$1);

Clazz.newMeth(C$, 'revert',  function () {
for (var next, $next = this.targetMasses.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.setAlgorithm$I(this.prevAlgorithm);
}
}, p$1);

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
p$1.initialize.apply(this, []);
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
$I$(16).setFonts$O$I(this, level);
$I$(16).setFonts$O$I(this.choiceBorder, level);
var w=((400 * (1 + level * 0.5))|0);
var h=((100 * (1 + level * 0.35))|0);
this.textPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(17,1).c$$I$I,[w, h]));
this.pack$();
var dim=$I$(18).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.getBounds$().width)/2|0);
var y=((dim.height - this.getBounds$().height)/2|0);
this.setLocation$I$I(x, y);
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.panelID=null;
this.frame=null;
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
