(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},p$2={},p$3={},I$=[[0,'org.opensourcephysics.tools.FontSizer','org.opensourcephysics.display.ColorIcon','org.opensourcephysics.display.ResizableIcon','java.awt.event.MouseAdapter','javax.swing.BorderFactory','org.opensourcephysics.cabrillo.tracker.TFrame','org.opensourcephysics.cabrillo.tracker.TrackerRes','java.util.ArrayList','org.opensourcephysics.cabrillo.tracker.PencilScene','java.awt.Color','org.opensourcephysics.cabrillo.tracker.Tracker','java.awt.Dimension','javax.swing.undo.UndoManager','javax.swing.undo.UndoableEditSupport','java.awt.Toolkit','javax.swing.JLabel','javax.swing.JButton',['org.opensourcephysics.cabrillo.tracker.PencilControl','.SideButton'],'org.opensourcephysics.cabrillo.tracker.PencilDrawer','javax.swing.Box',['org.opensourcephysics.cabrillo.tracker.PencilControl','.ColorButton'],'javax.swing.JCheckBox','javax.swing.JSpinner','java.util.Collections','org.opensourcephysics.cabrillo.tracker.PencilCaption','javax.swing.SpinnerNumberModel','javax.swing.JComboBox',['org.opensourcephysics.cabrillo.tracker.PencilControl','.SceneDropdownRenderer'],'org.opensourcephysics.cabrillo.tracker.PencilControl','javax.swing.JTextField','java.awt.event.KeyAdapter','javax.swing.AbstractAction','java.awt.event.FocusAdapter','org.opensourcephysics.display.DrawingPanel','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JToolBar',['org.opensourcephysics.cabrillo.tracker.PencilControl','.DrawingEdit'],['org.opensourcephysics.cabrillo.tracker.PencilControl','.CaptionEdit'],['org.opensourcephysics.cabrillo.tracker.PencilControl','.DeletionEdit'],['org.opensourcephysics.cabrillo.tracker.PencilControl','.ClearEdit']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PencilControl", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog');
C$.$classes$=[['SideButton',2],['ColorButton',2],['SceneDropdownRenderer',2],['DrawingEdit',2],['DeletionEdit',2],['ClearEdit',2],['CaptionEdit',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.canvasSize=Clazz.new_($I$(12,1).c$$I$I,[120, 90]);
this.buttonWidth=14;
},1);

C$.$fields$=[['Z',['refreshing','isVisible'],'I',['buttonWidth'],'S',['prevCaptionText'],'O',['frame','org.opensourcephysics.cabrillo.tracker.TFrame','panelID','Integer','drawer','org.opensourcephysics.cabrillo.tracker.PencilDrawer','selectedScene','org.opensourcephysics.cabrillo.tracker.PencilScene','sceneDropdown','javax.swing.JComboBox','canvas','org.opensourcephysics.display.DrawingPanel','drawingLabel','javax.swing.JLabel','+captionLabel','+framesLabel','+toLabel','startFrameSpinner','javax.swing.JSpinner','+endFrameSpinner','captionField','javax.swing.JTextField','newSceneButton','javax.swing.JButton','+deleteSceneButton','+undoButton','+redoButton','+clearAllButton','+closeButton','+helpButton','+trailButton','+arrowButton','+ellipseButton','colorButtons','org.opensourcephysics.cabrillo.tracker.PencilControl.ColorButton[][]','canvasSize','java.awt.Dimension','stepListener','java.beans.PropertyChangeListener','+tabListener','+clipListener','undoSupport','javax.swing.undo.UndoableEditSupport','undoManager','javax.swing.undo.UndoManager','postCaptionEditAction','javax.swing.AbstractAction','fontSizeSpinner','javax.swing.JSpinner','heavyCheckbox','javax.swing.JCheckBox']]
,['O',['dummyScene','org.opensourcephysics.cabrillo.tracker.PencilScene','undoIcon','javax.swing.Icon','+redoIcon','+undoDisabledIcon','+redoDisabledIcon','+trailIcon','+trailSelectedIcon','+arrowIcon','+arrowSelectedIcon','+ellipseIcon','+ellipseSelectedIcon','lightgrey','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_PencilDrawer',  function (pencilDrawer) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[pencilDrawer.frame, false]);C$.$init$.apply(this);
this.drawer=pencilDrawer;
this.frame=this.drawer.frame;
this.panelID=this.drawer.panelID;
this.undoManager=Clazz.new_($I$(13,1));
this.undoSupport=Clazz.new_($I$(14,1));
this.undoSupport.addUndoableEditListener$javax_swing_event_UndoableEditListener(this.undoManager);
p$1.createGUI.apply(this, []);
this.refreshGUI$();
this.pack$();
var dim=$I$(15).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.getBounds$().width)/2|0);
var y=((dim.height - this.getBounds$().height)/2|0);
this.setLocation$I$I(x, y);
this.stepListener=((P$.PencilControl$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PencilControl$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].panelID);
if (this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene != null  && this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene.includesFrame$I(trackerPanel.getFrameNumber$()) ) return;
if (this.b$['java.awt.Component'].isVisible$.apply(this.b$['java.awt.Component'], [])) {
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].setSelectedScene$org_opensourcephysics_cabrillo_tracker_PencilScene.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.getSceneAtFrame$I(trackerPanel.getFrameNumber$())]);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
}});
})()
), Clazz.new_(P$.PencilControl$1.$init$,[this, null]));
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
trackerPanel.addPropertyChangeListener$S$java_beans_PropertyChangeListener("stepnumber", this.stepListener);
this.tabListener=((P$.PencilControl$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PencilControl$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].frame.isRemovingAll$() && e.getNewValue$() === this.$finals$.trackerPanel  ) {
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].isVisible]);
} else {
var vis=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].isVisible;
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [false]);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].isVisible=vis;
}});
})()
), Clazz.new_(P$.PencilControl$2.$init$,[this, {trackerPanel:trackerPanel}]));
if (this.frame != null ) {
this.frame.addPropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this.tabListener);
}this.clipListener=((P$.PencilControl$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "PencilControl$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
});
})()
), Clazz.new_(P$.PencilControl$3.$init$,[this, null]));
trackerPanel.addPropertyChangeListener$S$java_beans_PropertyChangeListener("stepcount", this.clipListener);
}, 1);

Clazz.newMeth(C$, 'createGUI',  function () {
this.setResizable$Z(false);
this.drawingLabel=Clazz.new_($I$(16,1));
this.drawingLabel.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(0, 2, 0, 4));
this.captionLabel=Clazz.new_($I$(16,1));
this.captionLabel.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(0, 2, 0, 4));
this.framesLabel=Clazz.new_($I$(16,1));
this.framesLabel.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(0, 0, 0, 4));
this.toLabel=Clazz.new_($I$(16,1));
this.toLabel.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(0, 4, 0, 4));
this.newSceneButton=((P$.PencilControl$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "PencilControl$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=C$.superclazz.prototype.getMaximumSize$.apply(this, []);
dim.height=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].captionField.getPreferredSize$().height + 4;
return dim;
});
})()
), Clazz.new_($I$(17,1),[this, null],P$.PencilControl$4));
this.newSceneButton.addActionListener$java_awt_event_ActionListener(((P$.PencilControl$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PencilControl$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.addNewScene$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer, []);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
});
})()
), Clazz.new_(P$.PencilControl$lambda1.$init$,[this, null])));
this.deleteSceneButton=((P$.PencilControl$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "PencilControl$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=C$.superclazz.prototype.getMaximumSize$.apply(this, []);
dim.height=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].captionField.getPreferredSize$().height + 4;
return dim;
});
})()
), Clazz.new_($I$(17,1),[this, null],P$.PencilControl$5));
this.deleteSceneButton.addActionListener$java_awt_event_ActionListener(((P$.PencilControl$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PencilControl$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var isEmpty=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene.getDrawings$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene, []).isEmpty$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene.getDrawings$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene, []), []) && "".equals$O.apply("", [this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene.getCaption$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene, []).getText$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene.getCaption$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene, []), [])]) ;
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.removeScene$org_opensourcephysics_cabrillo_tracker_PencilScene.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer, [this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene]);
if (!isEmpty) {
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].postDeletionEdit$org_opensourcephysics_cabrillo_tracker_PencilScene.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene]);
}var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].frame.getTrackerPanelForID$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].frame, [this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].panelID]);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].setSelectedScene$org_opensourcephysics_cabrillo_tracker_PencilScene.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.getSceneAtFrame$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer, [trackerPanel.getFrameNumber$.apply(trackerPanel, [])])]);
});
})()
), Clazz.new_(P$.PencilControl$lambda2.$init$,[this, null])));
this.undoButton=Clazz.new_($I$(18,1).c$$javax_swing_Icon,[this, null, C$.undoIcon]);
this.undoButton.addActionListener$java_awt_event_ActionListener(((P$.PencilControl$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PencilControl$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].undoManager.undo$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].undoManager, []);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
});
})()
), Clazz.new_(P$.PencilControl$lambda3.$init$,[this, null])));
this.redoButton=Clazz.new_($I$(18,1).c$$javax_swing_Icon,[this, null, C$.redoIcon]);
this.redoButton.addActionListener$java_awt_event_ActionListener(((P$.PencilControl$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PencilControl$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].undoManager.redo$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].undoManager, []);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
});
})()
), Clazz.new_(P$.PencilControl$lambda4.$init$,[this, null])));
this.trailButton=Clazz.new_($I$(18,1).c$$javax_swing_Icon,[this, null, C$.trailIcon]);
this.trailButton.addActionListener$java_awt_event_ActionListener(((P$.PencilControl$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PencilControl$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.style=2;
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].refreshStyleButtons$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
});
})()
), Clazz.new_(P$.PencilControl$lambda5.$init$,[this, null])));
this.arrowButton=Clazz.new_($I$(18,1).c$$javax_swing_Icon,[this, null, C$.arrowIcon]);
this.arrowButton.addActionListener$java_awt_event_ActionListener(((P$.PencilControl$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PencilControl$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.style=0;
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].refreshStyleButtons$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
});
})()
), Clazz.new_(P$.PencilControl$lambda6.$init$,[this, null])));
this.ellipseButton=Clazz.new_($I$(18,1).c$$javax_swing_Icon,[this, null, C$.ellipseIcon]);
this.ellipseButton.addActionListener$java_awt_event_ActionListener(((P$.PencilControl$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PencilControl$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.style=1;
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].refreshStyleButtons$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
});
})()
), Clazz.new_(P$.PencilControl$lambda7.$init$,[this, null])));
this.clearAllButton=Clazz.new_($I$(17,1));
this.clearAllButton.addActionListener$java_awt_event_ActionListener(((P$.PencilControl$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PencilControl$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].frame.getTrackerPanelForID$Integer.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].frame, [this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].panelID]);
if ($I$(19).hasDrawings$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel)) {
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].postClearEdit$java_util_ArrayList.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.scenes]);
}this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.clearScenes$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer, [true]);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].setSelectedScene$org_opensourcephysics_cabrillo_tracker_PencilScene.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [null]);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
});
})()
), Clazz.new_(P$.PencilControl$lambda8.$init$,[this, null])));
this.closeButton=Clazz.new_($I$(17,1));
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.PencilControl$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PencilControl$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].setVisible$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [false]);
});
})()
), Clazz.new_(P$.PencilControl$lambda9.$init$,[this, null])));
this.helpButton=Clazz.new_($I$(17,1));
this.helpButton.addActionListener$java_awt_event_ActionListener(((P$.PencilControl$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PencilControl$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].frame.showHelp$S$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].frame, ["drawings", 0]);
});
})()
), Clazz.new_(P$.PencilControl$lambda10.$init$,[this, null])));
var colorBox=$I$(20).createVerticalBox$();
this.colorButtons=Clazz.array($I$(21), [$I$(19).colors.length, $I$(19).colors[0].length]);
for (var i=0; i < $I$(19).colors[0].length; i++) {
var b=$I$(20).createHorizontalBox$();
for (var j=0; j < this.colorButtons.length; j++) {
this.colorButtons[j][i]=Clazz.new_([this, null, $I$(19).colors[j][i]],$I$(21,1).c$$java_awt_Color);
b.add$java_awt_Component(this.colorButtons[j][i]);
}
colorBox.add$java_awt_Component(b);
}
this.heavyCheckbox=Clazz.new_($I$(22,1));
this.heavyCheckbox.addActionListener$java_awt_event_ActionListener(((P$.PencilControl$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PencilControl$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
if (this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].refreshing || this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene == null  ) return;
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene.setHeavy$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene, [this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].heavyCheckbox.isSelected$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].heavyCheckbox, [])]);
p$1.repaintPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].repaintCanvas$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
});
})()
), Clazz.new_(P$.PencilControl$lambda11.$init$,[this, null])));
this.startFrameSpinner=Clazz.new_($I$(23,1));
this.startFrameSpinner.addChangeListener$javax_swing_event_ChangeListener(((P$.PencilControl$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PencilControl$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$O'],  function (e) /*block*/{
if (this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene == null ) return;
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene.setStartFrame$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene, [(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].startFrameSpinner.getValue$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].startFrameSpinner, [])).$c()]);
$I$(24).sort$java_util_List(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.scenes);
p$1.repaintPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
});
})()
), Clazz.new_(P$.PencilControl$lambda12.$init$,[this, null])));
this.endFrameSpinner=Clazz.new_($I$(23,1));
this.endFrameSpinner.addChangeListener$javax_swing_event_ChangeListener(((P$.PencilControl$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PencilControl$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$O'],  function (e) /*block*/{
if (this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene == null ) return;
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene.setEndFrame$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene, [(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].endFrameSpinner.getValue$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].endFrameSpinner, [])).$c()]);
$I$(24).sort$java_util_List(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.scenes);
p$1.repaintPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
});
})()
), Clazz.new_(P$.PencilControl$lambda13.$init$,[this, null])));
var defaultFontSize=$I$(25).baseFont.getSize$();
this.fontSizeSpinner=Clazz.new_([Clazz.new_($I$(26,1).c$$I$I$I$I,[defaultFontSize, 12, 98, 2])],$I$(23,1).c$$javax_swing_SpinnerModel);
(this.fontSizeSpinner.getEditor$()).getTextField$().setEditable$Z(false);
this.fontSizeSpinner.addChangeListener$javax_swing_event_ChangeListener(((P$.PencilControl$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PencilControl$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$O'],  function (e) /*block*/{
if (this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene.getCaption$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene, []) == null ) return;
if (this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].refreshing) return;
var font=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene.getCaption$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene, []).getFont$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene.getCaption$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene, []), []);
var size=(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].fontSizeSpinner.getValue$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].fontSizeSpinner, [])).valueOf();
font=font.deriveFont$F.apply(font, [size]);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene.getCaption$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene, []).setFont$java_awt_Font.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene.getCaption$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene, []), [font]);
p$1.repaintPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].repaintCanvas$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
});
})()
), Clazz.new_(P$.PencilControl$lambda14.$init$,[this, null])));
this.sceneDropdown=((P$.PencilControl$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "PencilControl$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JComboBox'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=C$.superclazz.prototype.getMaximumSize$.apply(this, []);
dim.height=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].deleteSceneButton.getMaximumSize$().height;
return dim;
});
})()
), Clazz.new_($I$(27,1),[this, null],P$.PencilControl$6));
this.sceneDropdown.setRenderer$javax_swing_ListCellRenderer(Clazz.new_($I$(28,1),[this, null]));
this.sceneDropdown.addActionListener$java_awt_event_ActionListener(((P$.PencilControl$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PencilControl$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
if (this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].refreshing) return;
var scene=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].sceneDropdown.getSelectedItem$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].sceneDropdown, []);
if (scene === $I$(29).dummyScene ) return;
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].setSelectedScene$org_opensourcephysics_cabrillo_tracker_PencilScene.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [scene]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene != null ) {
p$1.goToScene$org_opensourcephysics_cabrillo_tracker_PencilScene.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene]);
}this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].captionField.requestFocusInWindow$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].captionField, []);
});
})()
), Clazz.new_(P$.PencilControl$lambda15.$init$,[this, null])));
this.captionField=Clazz.new_($I$(30,1).c$$I,[16]);
this.captionField.addKeyListener$java_awt_event_KeyListener(((P$.PencilControl$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "PencilControl$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 10) return;
var text=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].captionField.getText$();
if (!this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene.isCaptionPositioned && !"".equals$O(text.trim$()) ) {
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].panelID);
var mainView=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].frame.getMainView$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel);
var rect=mainView.scrollPane.getViewport$().getViewRect$();
var xpix=rect.x + (rect.width/2|0);
var ypix=rect.y + (rect.height/2|0);
var x=trackerPanel.pixToX$I(xpix);
var y=trackerPanel.pixToY$I(ypix);
var caption=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene.getCaption$();
caption.setXY$D$D(x, y);
caption.setText$S(text);
caption.color=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.color;
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene.isCaptionPositioned=true;
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene.getCaption$().setText$S(text);
}this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].captionField.setBackground$java_awt_Color($I$(10).YELLOW);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
p$1.repaintPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
});
})()
), Clazz.new_($I$(31,1),[this, null],P$.PencilControl$7)));
this.postCaptionEditAction=((P$.PencilControl$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "PencilControl$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var text=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene.getCaption$().getText$().trim$();
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene.getCaption$().setText$S(text);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].postCaptionEdit$org_opensourcephysics_cabrillo_tracker_PencilScene$S$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].selectedScene, this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].prevCaptionText, text]);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].captionField.setBackground$java_awt_Color($I$(10).WHITE);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].prevCaptionText=text;
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
});
})()
), Clazz.new_($I$(32,1),[this, null],P$.PencilControl$8));
this.captionField.addActionListener$java_awt_event_ActionListener(this.postCaptionEditAction);
this.captionField.addFocusListener$java_awt_event_FocusListener(((P$.PencilControl$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "PencilControl$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].captionField.getBackground$().equals$O($I$(10).YELLOW)) {
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].postCaptionEditAction.actionPerformed$java_awt_event_ActionEvent(null);
}});
})()
), Clazz.new_($I$(33,1),[this, null],P$.PencilControl$9)));
this.canvas=Clazz.new_($I$(34,1));
this.canvas.setAutoscaleX$Z(false);
this.canvas.setAutoscaleY$Z(false);
this.canvas.setSquareAspect$Z(true);
this.canvas.setShowCoordinates$Z(false);
this.canvas.setBackground$java_awt_Color($I$(10).WHITE);
this.canvas.setPreferredGutters$I$I$I$I(6, 6, 6, 6);
this.canvas.setBorder$javax_swing_border_Border($I$(5,"createLineBorder$java_awt_Color",[$I$(10).LIGHT_GRAY]));
this.canvas.setPreferredSize$java_awt_Dimension(this.canvasSize);
this.canvas.setEnabled$Z(false);
var contentPane=Clazz.new_([Clazz.new_($I$(36,1))],$I$(35,1).c$$java_awt_LayoutManager);
contentPane.setBorder$javax_swing_border_Border($I$(5,"createLineBorder$java_awt_Color",[$I$(10).LIGHT_GRAY]));
this.setContentPane$java_awt_Container(contentPane);
var northPanel=Clazz.new_([Clazz.new_($I$(36,1))],$I$(35,1).c$$java_awt_LayoutManager);
contentPane.add$java_awt_Component$O(northPanel, "North");
northPanel.add$java_awt_Component$O(this.canvas, "Center");
var drawingBar=Clazz.new_($I$(37,1));
northPanel.add$java_awt_Component$O(drawingBar, "North");
drawingBar.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(2, 4, 2, 4));
drawingBar.setFloatable$Z(false);
drawingBar.setOpaque$Z(false);
drawingBar.add$java_awt_Component(this.drawingLabel);
drawingBar.add$java_awt_Component(this.sceneDropdown);
drawingBar.add$java_awt_Component($I$(20).createHorizontalStrut$I(2));
drawingBar.add$java_awt_Component(this.newSceneButton);
drawingBar.add$java_awt_Component($I$(20).createHorizontalStrut$I(2));
drawingBar.add$java_awt_Component(this.deleteSceneButton);
var captionBar=Clazz.new_($I$(37,1));
captionBar.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(8, 4, 4, 8));
northPanel.add$java_awt_Component$O(captionBar, "South");
captionBar.setFloatable$Z(false);
captionBar.setOpaque$Z(false);
captionBar.add$java_awt_Component(this.captionLabel);
captionBar.add$java_awt_Component(this.captionField);
captionBar.add$java_awt_Component(this.fontSizeSpinner);
northPanel.add$java_awt_Component$O(colorBox, "West");
var sideBox=$I$(20).createVerticalBox$();
northPanel.add$java_awt_Component$O(sideBox, "East");
sideBox.add$java_awt_Component(this.arrowButton);
sideBox.add$java_awt_Component(this.ellipseButton);
sideBox.add$java_awt_Component(this.trailButton);
sideBox.add$java_awt_Component($I$(20).createVerticalGlue$());
sideBox.add$java_awt_Component(this.undoButton);
sideBox.add$java_awt_Component(this.redoButton);
var centerPanel=Clazz.new_($I$(35,1));
contentPane.add$java_awt_Component$O(centerPanel, "Center");
var controlBar=Clazz.new_($I$(37,1));
centerPanel.add$java_awt_Component(controlBar);
controlBar.setFloatable$Z(false);
controlBar.setOpaque$Z(false);
controlBar.setBorderPainted$Z(false);
controlBar.add$java_awt_Component(this.framesLabel);
controlBar.add$java_awt_Component(this.startFrameSpinner);
controlBar.add$java_awt_Component(this.toLabel);
controlBar.add$java_awt_Component(this.endFrameSpinner);
centerPanel.add$java_awt_Component($I$(20).createHorizontalStrut$I(15));
centerPanel.add$java_awt_Component(this.heavyCheckbox);
var southPanel=Clazz.new_($I$(35,1));
southPanel.setBorder$javax_swing_border_Border($I$(5,"createLineBorder$java_awt_Color",[$I$(10).LIGHT_GRAY]));
contentPane.add$java_awt_Component$O(southPanel, "South");
southPanel.add$java_awt_Component(this.helpButton);
southPanel.add$java_awt_Component(this.clearAllButton);
southPanel.add$java_awt_Component(this.closeButton);
}, p$1);

Clazz.newMeth(C$, 'repaintPanel',  function () {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
$I$(6).repaintT$java_awt_Component(trackerPanel);
trackerPanel.changed=true;
}, p$1);

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
$I$(1).setFonts$O$I(this, level);
this.pack$();
});

Clazz.newMeth(C$, 'postDrawingEdit$org_opensourcephysics_cabrillo_tracker_PencilDrawing$org_opensourcephysics_cabrillo_tracker_PencilScene',  function (drawing, scene) {
var edit=Clazz.new_($I$(38,1).c$$org_opensourcephysics_cabrillo_tracker_PencilDrawing$org_opensourcephysics_cabrillo_tracker_PencilScene,[this, null, drawing, scene]);
this.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
});

Clazz.newMeth(C$, 'postCaptionEdit$org_opensourcephysics_cabrillo_tracker_PencilScene$S$S',  function (scene, oldText, newText) {
var edit=Clazz.new_($I$(39,1).c$$org_opensourcephysics_cabrillo_tracker_PencilScene$S$S,[this, null, scene, oldText, newText]);
this.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
});

Clazz.newMeth(C$, 'postDeletionEdit$org_opensourcephysics_cabrillo_tracker_PencilScene',  function (scene) {
var edit=Clazz.new_($I$(40,1).c$$org_opensourcephysics_cabrillo_tracker_PencilScene,[this, null, scene]);
this.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
});

Clazz.newMeth(C$, 'postClearEdit$java_util_ArrayList',  function (scenes) {
var edit=Clazz.new_($I$(41,1).c$$java_util_ArrayList,[this, null, scenes]);
this.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
});

Clazz.newMeth(C$, 'refreshStyleButtons$',  function () {
this.trailButton.setIcon$javax_swing_Icon(this.drawer.style == 2 ? C$.trailSelectedIcon : C$.trailIcon);
this.arrowButton.setIcon$javax_swing_Icon(this.drawer.style == 0 ? C$.arrowSelectedIcon : C$.arrowIcon);
this.ellipseButton.setIcon$javax_swing_Icon(this.drawer.style == 1 ? C$.ellipseSelectedIcon : C$.ellipseIcon);
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.refreshing=true;
this.setTitle$S($I$(7).getString$S("PencilControlDialog.Title"));
this.drawingLabel.setText$S($I$(7).getString$S("PencilControlDialog.Label.Drawing.Text") + ":");
this.toLabel.setText$S($I$(7).getString$S("PencilControlDialog.Label.To.Text"));
this.captionLabel.setText$S($I$(7).getString$S("PencilControlDialog.Label.Caption.Text") + ":");
this.framesLabel.setText$S($I$(7).getString$S("PencilControlDialog.Label.Frames.Text"));
this.newSceneButton.setText$S($I$(7).getString$S("PencilControlDialog.Button.NewScene.Text"));
this.deleteSceneButton.setText$S($I$(7).getString$S("PencilControlDialog.Button.DeleteScene.Text"));
this.clearAllButton.setText$S($I$(7).getString$S("PencilControlDialog.Button.ClearAll.Text"));
this.closeButton.setText$S($I$(7).getString$S("Dialog.Button.Close"));
this.helpButton.setText$S($I$(7).getString$S("Dialog.Button.Help"));
this.heavyCheckbox.setText$S($I$(7).getString$S("PencilControlDialog.Checkbox.Heavy.Text"));
this.newSceneButton.setToolTipText$S($I$(7).getString$S("PencilControlDialog.Button.NewScene.Tooltip"));
this.deleteSceneButton.setToolTipText$S($I$(7).getString$S("PencilControlDialog.Button.DeleteScene.Tooltip"));
this.clearAllButton.setToolTipText$S($I$(7).getString$S("PencilControlDialog.Button.ClearAll.Tooltip"));
this.heavyCheckbox.setToolTipText$S($I$(7).getString$S("PencilControlDialog.Checkbox.Heavy.Tooltip"));
this.captionField.setToolTipText$S($I$(7).getString$S("PencilControlDialog.Field.Caption.Tooltip"));
this.sceneDropdown.setToolTipText$S($I$(7).getString$S("PencilControlDialog.Dropdown.Drawing.Tooltip"));
this.fontSizeSpinner.setToolTipText$S($I$(7).getString$S("PencilControlDialog.Spinner.FontSize.Tooltip"));
this.startFrameSpinner.setToolTipText$S($I$(7).getString$S("PencilControlDialog.Spinner.FrameRange.Tooltip"));
this.endFrameSpinner.setToolTipText$S($I$(7).getString$S("PencilControlDialog.Spinner.FrameRange.Tooltip"));
this.undoButton.setToolTipText$S(this.undoManager.getUndoPresentationName$());
this.redoButton.setToolTipText$S(this.undoManager.getRedoPresentationName$());
var enabled=this.selectedScene != null ;
this.drawingLabel.setEnabled$Z(enabled);
this.toLabel.setEnabled$Z(enabled);
this.captionLabel.setEnabled$Z(enabled);
this.framesLabel.setEnabled$Z(enabled);
this.deleteSceneButton.setEnabled$Z(enabled);
this.heavyCheckbox.setEnabled$Z(enabled);
this.fontSizeSpinner.setEnabled$Z(enabled);
this.startFrameSpinner.setEnabled$Z(enabled);
this.endFrameSpinner.setEnabled$Z(enabled);
this.captionField.setEnabled$Z(enabled);
this.undoButton.setEnabled$Z(this.undoManager.canUndo$());
this.redoButton.setEnabled$Z(this.undoManager.canRedo$());
this.undoButton.setIcon$javax_swing_Icon(this.undoManager.canUndo$() ? C$.undoIcon : C$.undoDisabledIcon);
this.redoButton.setIcon$javax_swing_Icon(this.undoManager.canRedo$() ? C$.redoIcon : C$.redoDisabledIcon);
this.clearAllButton.setEnabled$Z(!this.drawer.scenes.isEmpty$());
this.sceneDropdown.setEnabled$Z(!this.drawer.scenes.isEmpty$());
this.newSceneButton.setEnabled$Z(this.selectedScene == null  || !this.selectedScene.getDrawings$().isEmpty$() );
if (enabled) {
this.repaintCanvas$();
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var first=trackerPanel.getPlayer$().getVideoClip$().getFirstFrameNumber$();
var last=trackerPanel.getPlayer$().getVideoClip$().getLastFrameNumber$();
this.selectedScene.startframe=Math.max(first, this.selectedScene.startframe);
this.startFrameSpinner.setModel$javax_swing_SpinnerModel(Clazz.new_($I$(26,1).c$$I$I$I$I,[this.selectedScene.startframe, first, last, 1]));
var end=this.selectedScene.endframe == 2147483647 ? last : this.selectedScene.endframe;
this.endFrameSpinner.setModel$javax_swing_SpinnerModel(Clazz.new_($I$(26,1).c$$I$I$I$I,[end, this.selectedScene.startframe, last, 1]));
this.heavyCheckbox.setSelected$Z(this.selectedScene.isHeavy$());
this.drawer.color=this.selectedScene.getCaption$().color;
this.fontSizeSpinner.setValue$O(Integer.valueOf$I(this.selectedScene.getCaption$().getFont$().getSize$()));
} else {
this.heavyCheckbox.setSelected$Z(false);
}for (var i=0; i < this.colorButtons.length; i++) {
for (var b, $b = 0, $$b = this.colorButtons[i]; $b<$$b.length&&((b=($$b[$b])),1);$b++) {
b.setToolTipText$S($I$(7).getString$S("PencilControlDialog.Button.Color.Tooltip"));
b.setBorder$javax_swing_border_Border(b.color === this.drawer.color  && enabled  ? $I$(5,"createLineBorder$java_awt_Color$I",[$I$(10).GRAY, 2]) : $I$(5).createLineBorder$java_awt_Color$I(C$.lightgrey, 2));
b.icon.setColor$java_awt_Color(enabled ? b.color : $I$(10).LIGHT_GRAY);
b.setEnabled$Z(enabled);
}
}
this.sceneDropdown.removeAllItems$();
for (var scene, $scene = this.drawer.scenes.iterator$(); $scene.hasNext$()&&((scene=($scene.next$())),1);) {
this.sceneDropdown.addItem$O(scene);
}
if (this.selectedScene != null ) {
this.refreshing=false;
this.sceneDropdown.setSelectedItem$O(this.selectedScene);
} else if (!this.drawer.scenes.isEmpty$()) {
this.sceneDropdown.addItem$O(C$.dummyScene);
this.sceneDropdown.setSelectedItem$O(C$.dummyScene);
}this.refreshStyleButtons$();
this.refreshing=false;
this.pack$();
this.repaint$();
});

Clazz.newMeth(C$, 'repaintCanvas$',  function () {
this.selectedScene.measure$();
this.canvas.setPreferredMinMaxX$D$D(this.selectedScene.getXMin$(), this.selectedScene.getXMax$());
this.canvas.setPreferredMinMaxY$D$D(this.selectedScene.getYMax$(), this.selectedScene.getYMin$());
this.canvas.repaint$();
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
var toolbar=trackerPanel.getToolBar$Z(true);
toolbar.drawingButton.setSelected$Z(vis);
if ($I$(11).showHints) {
trackerPanel.setMessage$S(vis ? $I$(7).getString$S("PencilDrawer.Hint") : null);
}this.isVisible=vis;
});

Clazz.newMeth(C$, 'getSelectedScene$',  function () {
return this.selectedScene;
});

Clazz.newMeth(C$, 'setSelectedScene$org_opensourcephysics_cabrillo_tracker_PencilScene',  function (scene) {
if (this.selectedScene === scene ) return;
if (this.selectedScene != null ) this.canvas.removeDrawable$org_opensourcephysics_display_Drawable(this.selectedScene);
this.selectedScene=scene;
if (this.selectedScene != null ) {
this.canvas.addDrawable$org_opensourcephysics_display_Drawable(this.selectedScene);
this.prevCaptionText=this.selectedScene.getCaption$().getText$();
this.captionField.setText$S(this.selectedScene.getCaption$().getText$());
} else {
this.captionField.setText$S(null);
}this.refreshGUI$();
});

Clazz.newMeth(C$, 'goToScene$org_opensourcephysics_cabrillo_tracker_PencilScene',  function (scene) {
if (scene == null ) return;
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if (!scene.includesFrame$I(trackerPanel.getFrameNumber$())) {
var stepNum=trackerPanel.getPlayer$().getVideoClip$().frameToStep$I(scene.startframe);
trackerPanel.getPlayer$().setStepNumber$I(stepNum);
}}, p$1);

Clazz.newMeth(C$, 'dispose$',  function () {
var trackerPanel=this.frame.getTrackerPanelForID$Integer(this.panelID);
trackerPanel.removePropertyChangeListener$S$java_beans_PropertyChangeListener("stepnumber", this.stepListener);
trackerPanel.removePropertyChangeListener$S$java_beans_PropertyChangeListener("stepcount", this.clipListener);
if (this.frame != null ) {
this.frame.removePropertyChangeListener$S$java_beans_PropertyChangeListener("tab", this.tabListener);
}this.setSelectedScene$org_opensourcephysics_cabrillo_tracker_PencilScene(null);
this.panelID=null;
this.frame=null;
});

C$.$static$=function(){C$.$static$=0;
C$.dummyScene=Clazz.new_($I$(9,1));
C$.lightgrey=Clazz.new_($I$(10,1).c$$I$I$I,[230, 230, 230]);
{
C$.undoIcon=$I$(11).getResourceIcon$S$Z("undo.gif", true);
C$.redoIcon=$I$(11).getResourceIcon$S$Z("redo.gif", true);
C$.undoDisabledIcon=$I$(11).getResourceIcon$S$Z("undo_disabled.gif", true);
C$.redoDisabledIcon=$I$(11).getResourceIcon$S$Z("redo_disabled.gif", true);
C$.trailIcon=$I$(11).getResourceIcon$S$Z("freeform.gif", true);
C$.trailSelectedIcon=$I$(11).getResourceIcon$S$Z("freeform_selected.gif", true);
C$.arrowIcon=$I$(11).getResourceIcon$S$Z("arrow.gif", true);
C$.arrowSelectedIcon=$I$(11).getResourceIcon$S$Z("arrow_selected.gif", true);
C$.ellipseIcon=$I$(11).getResourceIcon$S$Z("ellipse.gif", true);
C$.ellipseSelectedIcon=$I$(11).getResourceIcon$S$Z("ellipse_selected.gif", true);
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.PencilControl, "SideButton", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JButton');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_Icon',  function (icon) {
;C$.superclazz.c$$javax_swing_Icon.apply(this,[icon]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
dim.width=((2 * this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].buttonWidth * $I$(1).getFactor$() )|0);
return dim;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PencilControl, "ColorButton", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JButton', 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['color','java.awt.Color','icon','org.opensourcephysics.display.ColorIcon']]]

Clazz.newMeth(C$, 'c$$java_awt_Color',  function (c) {
Clazz.super_(C$, this);
this.color=c;
this.setBackground$java_awt_Color(this.color);
this.icon=Clazz.new_($I$(2,1).c$$java_awt_Color$I$I,[this.color, this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].buttonWidth - 4, 16]);
this.setIcon$javax_swing_Icon(Clazz.new_($I$(3,1).c$$javax_swing_Icon,[this.icon]));
this.addActionListener$java_awt_event_ActionListener(this);
this.addMouseListener$java_awt_event_MouseListener(((P$.PencilControl$ColorButton$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PencilControl$ColorButton$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
if (this.b$['java.awt.Component'].isEnabled$.apply(this.b$['java.awt.Component'], [])) this.b$['javax.swing.AbstractButton'].setBorderPainted$Z.apply(this.b$['javax.swing.AbstractButton'], [false]);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.b$['javax.swing.AbstractButton'].setBorderPainted$Z.apply(this.b$['javax.swing.AbstractButton'], [true]);
});
})()
), Clazz.new_($I$(4,1),[this, null],P$.PencilControl$ColorButton$1)));
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.color.equals$O(this.color)) return;
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.color=this.color;
if (this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.getSelectedScene$() != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.getSelectedScene$().setColor$java_awt_Color(this.color);
p$1.repaintPanel.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
}this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].panelID);
trackerPanel.setMouseCursor$java_awt_Cursor(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.getPencilCursor$());
this.setBorderPainted$Z(true);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PencilControl, "SceneDropdownRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JLabel', 'javax.swing.ListCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setOpaque$Z(true);
this.setHorizontalAlignment$I(2);
this.setVerticalAlignment$I(0);
this.setBorder$javax_swing_border_Border($I$(5).createEmptyBorder$I$I$I$I(1, 4, 1, 0));
}, 1);

Clazz.newMeth(C$, ['getListCellRendererComponent$javax_swing_JList$org_opensourcephysics_cabrillo_tracker_PencilScene$I$Z$Z','getListCellRendererComponent$javax_swing_JList$O$I$Z$Z'],  function (list, value, index, isSelected, cellHasFocus) {
if (isSelected) {
this.setBackground$java_awt_Color(list.getSelectionBackground$());
this.setForeground$java_awt_Color(list.getSelectionForeground$());
} else {
this.setBackground$java_awt_Color(list.getBackground$());
this.setForeground$java_awt_Color(list.getForeground$());
}if (value != null ) {
var scene=value;
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].panelID);
this.setText$S(scene.getDescription$org_opensourcephysics_cabrillo_tracker_TrackerPanel(trackerPanel));
} else {
this.setText$S("");
}return this;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PencilControl, "DrawingEdit", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['drawing','org.opensourcephysics.cabrillo.tracker.PencilDrawing','scene','org.opensourcephysics.cabrillo.tracker.PencilScene']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_PencilDrawing$org_opensourcephysics_cabrillo_tracker_PencilScene',  function (drawing, scene) {
Clazz.super_(C$, this);
this.drawing=drawing;
this.scene=scene;
}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
this.scene.getDrawings$().remove$O(this.drawing);
p$2.update.apply(this, []);
});

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
this.scene.getDrawings$().add$O(this.drawing);
p$2.update.apply(this, []);
});

Clazz.newMeth(C$, 'update',  function () {
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].setSelectedScene$org_opensourcephysics_cabrillo_tracker_PencilScene.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [this.scene]);
p$1.goToScene$org_opensourcephysics_cabrillo_tracker_PencilScene.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [this.scene]);
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].panelID);
$I$(6).repaintT$java_awt_Component(trackerPanel);
}, p$2);

Clazz.newMeth(C$, 'getUndoPresentationName$',  function () {
return $I$(7).getString$S("PencilControlDialog.DrawingEdit.Undo.Text");
});

Clazz.newMeth(C$, 'getRedoPresentationName$',  function () {
return $I$(7).getString$S("PencilControlDialog.DrawingEdit.Redo.Text");
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PencilControl, "DeletionEdit", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['scene','org.opensourcephysics.cabrillo.tracker.PencilScene']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_PencilScene',  function (scene) {
Clazz.super_(C$, this);
this.scene=scene;
}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.addScene$org_opensourcephysics_cabrillo_tracker_PencilScene(this.scene);
p$1.goToScene$org_opensourcephysics_cabrillo_tracker_PencilScene.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [this.scene]);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].setSelectedScene$org_opensourcephysics_cabrillo_tracker_PencilScene.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [this.scene]);
});

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.removeScene$org_opensourcephysics_cabrillo_tracker_PencilScene(this.scene);
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].panelID);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].setSelectedScene$org_opensourcephysics_cabrillo_tracker_PencilScene.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.getSceneAtFrame$I(trackerPanel.getFrameNumber$())]);
});

Clazz.newMeth(C$, 'getUndoPresentationName$',  function () {
return $I$(7).getString$S("PencilControlDialog.DeletionEdit.Undo.Text");
});

Clazz.newMeth(C$, 'getRedoPresentationName$',  function () {
return $I$(7).getString$S("PencilControlDialog.DeletionEdit.Redo.Text");
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PencilControl, "ClearEdit", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.scenes=Clazz.new_($I$(8,1));
},1);

C$.$fields$=[['O',['scenes','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$java_util_ArrayList',  function (scenes) {
Clazz.super_(C$, this);
this.scenes.addAll$java_util_Collection(scenes);
}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.setScenes$java_util_ArrayList(this.scenes);
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].panelID);
var scene=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.getSceneAtFrame$I(trackerPanel.getFrameNumber$());
if (scene != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].setSelectedScene$org_opensourcephysics_cabrillo_tracker_PencilScene.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [scene]);
} else {
p$1.goToScene$org_opensourcephysics_cabrillo_tracker_PencilScene.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [this.scenes.get$I(0)]);
}$I$(6).repaintT$java_awt_Component(trackerPanel);
});

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].drawer.clearScenes$Z(true);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].setSelectedScene$org_opensourcephysics_cabrillo_tracker_PencilScene.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [null]);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].refreshGUI$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
});

Clazz.newMeth(C$, 'getUndoPresentationName$',  function () {
return $I$(7).getString$S("PencilControlDialog.ClearEdit.Undo.Text");
});

Clazz.newMeth(C$, 'getRedoPresentationName$',  function () {
return $I$(7).getString$S("PencilControlDialog.ClearEdit.Redo.Text");
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PencilControl, "CaptionEdit", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['undoText','redoText'],'O',['scene','org.opensourcephysics.cabrillo.tracker.PencilScene']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_PencilScene$S$S',  function (scene, oldText, newText) {
Clazz.super_(C$, this);
this.scene=scene;
this.undoText=oldText;
this.redoText=newText;
}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
p$3.undoRedo$S.apply(this, [this.undoText]);
});

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
p$3.undoRedo$S.apply(this, [this.redoText]);
});

Clazz.newMeth(C$, 'undoRedo$S',  function (text) {
this.scene.getCaption$().setText$S(text);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].setSelectedScene$org_opensourcephysics_cabrillo_tracker_PencilScene.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [this.scene]);
p$1.goToScene$org_opensourcephysics_cabrillo_tracker_PencilScene.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], [this.scene]);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].captionField.setText$S(text);
var trackerPanel=this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].panelID);
$I$(6).repaintT$java_awt_Component(trackerPanel);
this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'].repaintCanvas$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PencilControl'], []);
}, p$3);

Clazz.newMeth(C$, 'getUndoPresentationName$',  function () {
return $I$(7).getString$S("PencilControlDialog.CaptionEdit.Undo.Text");
});

Clazz.newMeth(C$, 'getRedoPresentationName$',  function () {
return $I$(7).getString$S("PencilControlDialog.CaptionEdit.Redo.Text");
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
