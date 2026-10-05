(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),I$=[[0,'java.awt.Font','org.opensourcephysics.controls.ControlsRes','org.opensourcephysics.numerics.DoubleArray','org.opensourcephysics.numerics.IntegerArray','org.opensourcephysics.controls.OSPControl','javax.swing.UIManager','org.opensourcephysics.controls.OSPControlTable','org.opensourcephysics.controls.XMLControlElement','javax.swing.JScrollPane','org.opensourcephysics.display.OSPRuntime','javax.swing.JLabel','org.opensourcephysics.display.GUIUtils','javax.swing.JPanel','java.awt.BorderLayout',['org.opensourcephysics.controls.OSPControl','.ClearMouseAdapter'],'java.awt.Color','javax.swing.JSplitPane','java.awt.Dimension','java.awt.Toolkit','org.opensourcephysics.tools.ToolsRes','javax.swing.JMenuItem',['org.opensourcephysics.controls.OSPControl','.OSPControlLoader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OSPControl", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.controls.ControlFrame', ['java.beans.PropertyChangeListener', 'org.opensourcephysics.controls.MainFrame']);
C$.$classes$=[['ClearMouseAdapter',0],['OSPControlLoader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.table=Clazz.new_([Clazz.new_($I$(8,1))],$I$(7,1).c$$org_opensourcephysics_controls_XMLControlElement);
this.controlScrollPane=Clazz.new_($I$(9,1).c$$java_awt_Component,[this.table]);
},1);

C$.$fields$=[['O',['table','org.opensourcephysics.controls.OSPControlTable','controlScrollPane','javax.swing.JScrollPane','messageTextArea','javax.swing.JTextArea','clearLabel','javax.swing.JLabel','+messageLabel','+inputLabel','splitPane','javax.swing.JSplitPane']]
,['O',['PANEL_BACKGROUND','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$O',  function (_model) {
;C$.superclazz.c$$S.apply(this,[$I$(2).getString$S("OSPControl.Default_Title")]);C$.$init$.apply(this);
this.model=_model;
if (this.model != null ) {
if ($I$(10).loadTranslatorTool) {
$I$(10).getTranslator$().associate$O$Class(this, this.model.getClass$());
}var name=this.model.getClass$().getName$();
this.setTitle$S(name.substring$I(1 + name.lastIndexOf$S(".")) + $I$(2).getString$S("OSPControl.Controller"));
}var labelFont=Clazz.new_($I$(1,1).c$$S$I$I,["Dialog", 1, 12]);
this.inputLabel=Clazz.new_([$I$(2).getString$S("OSPControl.Input_Parameters"), 0],$I$(11,1).c$$S$I);
this.inputLabel.setFont$java_awt_Font(labelFont);
this.messageTextArea=$I$(12).newJTextArea$();
this.messageTextArea.setRows$I(5);
this.messageTextArea.setColumns$I(5);
var messageScrollPane=Clazz.new_($I$(9,1).c$$java_awt_Component,[this.messageTextArea]);
var topPanel=Clazz.new_([Clazz.new_($I$(14,1))],$I$(13,1).c$$java_awt_LayoutManager);
topPanel.add$java_awt_Component$O(this.inputLabel, "North");
topPanel.add$java_awt_Component$O(this.controlScrollPane, "Center");
this.buttonPanel.setVisible$Z(true);
topPanel.add$java_awt_Component$O(this.buttonPanel, "South");
var clearPanel=Clazz.new_([Clazz.new_($I$(14,1))],$I$(13,1).c$$java_awt_LayoutManager);
clearPanel.addMouseListener$java_awt_event_MouseListener(Clazz.new_($I$(15,1),[this, null]));
this.clearLabel=Clazz.new_([$I$(2).getString$S("OSPControl.Clear")],$I$(11,1).c$$S);
this.clearLabel.setFont$java_awt_Font(Clazz.new_([this.clearLabel.getFont$().getFamily$(), 0, 9],$I$(1,1).c$$S$I$I));
this.clearLabel.setForeground$java_awt_Color($I$(16).black);
clearPanel.add$java_awt_Component$O(this.clearLabel, "West");
var bottomPanel=Clazz.new_([Clazz.new_($I$(14,1))],$I$(13,1).c$$java_awt_LayoutManager);
this.messageLabel=Clazz.new_([$I$(2).getString$S("OSPControl.Messages"), 0],$I$(11,1).c$$S$I);
this.messageLabel.setFont$java_awt_Font(labelFont);
bottomPanel.add$java_awt_Component$O(this.messageLabel, "North");
bottomPanel.add$java_awt_Component$O(messageScrollPane, "Center");
bottomPanel.add$java_awt_Component$O(clearPanel, "South");
var cp=this.getContentPane$();
this.splitPane=Clazz.new_($I$(17,1).c$$I$java_awt_Component$java_awt_Component,[0, topPanel, bottomPanel]);
this.splitPane.setOneTouchExpandable$Z(true);
cp.add$java_awt_Component$O(this.splitPane, "Center");
this.messageTextArea.setEditable$Z(false);
this.controlScrollPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(18,1).c$$I$I,[350, 200]));
this.controlScrollPane.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(18,1).c$$I$I,[0, 50]));
messageScrollPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(18,1).c$$I$I,[350, 75]));
if ($I$(10).loadTranslatorTool && this.model != null  ) {
$I$(10).getTranslator$().associate$O$Class(this.table, this.model.getClass$());
}var d=$I$(19).getDefaultToolkit$().getScreenSize$();
this.setLocation$I$I(((d.width - this.getSize$().width)/2|0), ((d.height - this.getSize$().height)/2|0));
this.init$();
$I$(20).addPropertyChangeListener$S$java_beans_PropertyChangeListener("locale", this);
}, 1);

Clazz.newMeth(C$, 'getMainFrame$',  function () {
return this;
});

Clazz.newMeth(C$, 'loadDisplayMenu$',  function () {
var menuBar=this.getJMenuBar$();
if (menuBar == null ) {
return null;
}var menu=C$.superclazz.prototype.loadDisplayMenu$.apply(this, []);
if ($I$(10).loadTranslatorTool) {
var translateItem=Clazz.new_($I$(21,1));
translateItem.setText$S($I$(2).getString$S("OSPControl.Translate"));
translateItem.addActionListener$java_awt_event_ActionListener(((P$.OSPControl$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "OSPControl$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
$I$(10).getTranslator$().showProperties$Class.apply($I$(10).getTranslator$(), [this.b$['org.opensourcephysics.controls.OSPControl'].model.getClass$.apply(this.b$['org.opensourcephysics.controls.OSPControl'].model, [])]);
});
})()
), Clazz.new_(P$.OSPControl$lambda1.$init$,[this, null])));
translateItem.setEnabled$Z($I$(10).isAuthorMode$());
this.languageMenu.add$java_awt_Component$I(translateItem, 0);
}if (this.languageMenu.getItemCount$() > 1) {
this.languageMenu.insertSeparator$I(1);
}return menu;
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
if (this.messageLabel == null ) {
return;
}C$.superclazz.prototype.refreshGUI$.apply(this, []);
this.messageLabel.setText$S($I$(2).getString$S("OSPControl.Messages"));
this.clearLabel.setText$S($I$(2).getString$S("OSPControl.Clear"));
this.inputLabel.setText$S($I$(2).getString$S("OSPControl.Input_Parameters"));
this.table.refresh$();
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var name=e.getPropertyName$();
if (name.equals$O("translation") || name.equals$O("locale") ) {
this.refreshGUI$();
} else {
this.firePropertyChange$S$O$O(e.getPropertyName$(), e.getOldValue$(), e.getNewValue$());
}});

Clazz.newMeth(C$, 'init$',  function () {
this.splitPane.setDividerLocation$I(-1);
this.setVisible$Z(true);
this.setDefaultCloseOperation$I(3);
});

Clazz.newMeth(C$, 'getModel$',  function () {
return this.model;
});

Clazz.newMeth(C$, 'setDividerLocation$I',  function (loc) {
this.splitPane.setDividerLocation$I(loc);
});

Clazz.newMeth(C$, 'setEditable$S$Z',  function (parameter, editable) {
this.table.setEditable$S$Z(parameter, editable);
});

Clazz.newMeth(C$, 'setLockValues$Z',  function (lock) {
this.table.setLockValues$Z(true);
});

Clazz.newMeth(C$, 'toString',  function () {
if (this.table == null ) return "";
return this.table.toString();
});

Clazz.newMeth(C$, 'setValue$S$O',  function (par, val) {
this.table.setValue$S$O(par, val);
if ($I$(10).isJS) this.table.refresh$();
});

Clazz.newMeth(C$, 'setValue$S$Z',  function (par, val) {
this.table.setValue$S$Z(par, val);
if ($I$(10).isJS) this.table.refresh$();
});

Clazz.newMeth(C$, 'setValue$S$D',  function (par, val) {
this.table.setValue$S$O(par, Double.toString$D(val));
if ($I$(10).isJS) this.table.refresh$();
});

Clazz.newMeth(C$, 'setValue$S$I',  function (par, val) {
this.table.setValue$S$O(par, Integer.toString$I(val));
if ($I$(10).isJS) this.table.refresh$();
});

Clazz.newMeth(C$, 'removeParameter$S',  function (par) {
this.table.setValue$S$O(par, null);
});

Clazz.newMeth(C$, 'getDouble$S',  function (par) {
return this.table.getDouble$S(par);
});

Clazz.newMeth(C$, 'getInt$S',  function (par) {
return this.table.getInt$S(par);
});

Clazz.newMeth(C$, 'getObject$S',  function (par) {
return this.table.getObject$S(par);
});

Clazz.newMeth(C$, 'getString$S',  function (par) {
return this.table.getString$S(par);
});

Clazz.newMeth(C$, 'getBoolean$S',  function (par) {
return this.table.getBoolean$S(par);
});

Clazz.newMeth(C$, 'getPropertyNames$',  function () {
return this.table.getPropertyNames$();
});

Clazz.newMeth(C$, 'getPropertyNamesRaw$',  function () {
return this.table.getPropertyNamesRaw$();
});

Clazz.newMeth(C$, 'addButton$S$S',  function (methodName, text) {
return this.addButton$S$S$S$O(methodName, text, null, this.model);
});

Clazz.newMeth(C$, 'addButton$S$S$S',  function (methodName, text, toolTipText) {
return this.addButton$S$S$S$O(methodName, text, toolTipText, this.model);
});

Clazz.newMeth(C$, 'addControlListener$S',  function (methodName) {
this.addControlListener$S$O(methodName, this.model);
});

Clazz.newMeth(C$, 'addControlListener$S$O',  function (methodName, target) {
var parameters=Clazz.array(Class, -1, [Clazz.getClass(String)]);
try {
var m=target.getClass$().getMethod$S$ClassA(methodName, parameters);
this.table.tableModel.addTableModelListener$javax_swing_event_TableModelListener(((P$.OSPControl$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "OSPControl$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.TableModelListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'tableChanged$javax_swing_event_TableModelEvent',  function (e) {
if ((e.getType$() != 0) || (e.getColumn$() != 1) || (e.getFirstRow$() < 0)  ) {
return;
}var name=this.b$['org.opensourcephysics.controls.OSPControl'].table.getValueAt$I$I(e.getFirstRow$(), 0).toString();
var args=Clazz.array(java.lang.Object, -1, [name]);
try {
this.$finals$.m.invoke$O$OA(this.$finals$.target, args);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var iae = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var ite = e$$;
{
}
} else {
throw e$$;
}
}
});
})()
), Clazz.new_(P$.OSPControl$1.$init$,[this, {m:m,target:target}])));
} catch (nsme) {
if (Clazz.exceptionOf(nsme,"NoSuchMethodException")){
System.err.println$S("The method " + methodName + "() does not exist." );
} else {
throw nsme;
}
}
});

Clazz.newMeth(C$, 'println$S',  function (s) {
this.print$S(s + "\n");
});

Clazz.newMeth(C$, 'println$',  function () {
this.print$S("\n");
});

Clazz.newMeth(C$, 'print$S',  function (s) {
$I$(10,"postEvent$Runnable",[((P$.OSPControl$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "OSPControl$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.controls.OSPControl'].messageTextArea.append$S.apply(this.b$['org.opensourcephysics.controls.OSPControl'].messageTextArea, [this.$finals$.s]);
});
})()
), Clazz.new_(P$.OSPControl$lambda2.$init$,[this, {s:s}]))]);
});

Clazz.newMeth(C$, 'clearMessages$',  function () {
$I$(10,"postEvent$Runnable",[((P$.OSPControl$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "OSPControl$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.controls.OSPControl'].messageTextArea.setText$S.apply(this.b$['org.opensourcephysics.controls.OSPControl'].messageTextArea, [""]);
});
})()
), Clazz.new_(P$.OSPControl$lambda3.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'clearValues$',  function () {
this.table.clearValues$();
});

Clazz.newMeth(C$, 'calculationDone$S',  function (message) {
if (message != null ) {
this.println$S(message);
}});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(22,1));
}, 1);

Clazz.newMeth(C$, 'createApp$O',  function (model) {
var control=Clazz.new_(C$.c$$O,[model]);
control.setSize$I$I(300, 300);
control.setVisible$Z(true);
return control;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.PANEL_BACKGROUND=$I$(6).getColor$O("Panel.background");
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.OSPControl, "ClearMouseAdapter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.MouseAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
this.b$['org.opensourcephysics.controls.OSPControl'].clearMessages$.apply(this.b$['org.opensourcephysics.controls.OSPControl'], []);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (evt) {
this.b$['org.opensourcephysics.controls.OSPControl'].clearLabel.setFont$java_awt_Font(Clazz.new_([this.b$['org.opensourcephysics.controls.OSPControl'].clearLabel.getFont$().getFamily$(), 1, 10],$I$(1,1).c$$S$I$I));
this.b$['org.opensourcephysics.controls.OSPControl'].clearLabel.setText$S($I$(2).getString$S("OSPControl.Click_to_clear_message"));
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (evt) {
this.b$['org.opensourcephysics.controls.OSPControl'].clearLabel.setFont$java_awt_Font(Clazz.new_([this.b$['org.opensourcephysics.controls.OSPControl'].clearLabel.getFont$().getFamily$(), 0, 9],$I$(1,1).c$$S$I$I));
this.b$['org.opensourcephysics.controls.OSPControl'].clearLabel.setText$S($I$(2).getString$S("OSPControl.Clear"));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.OSPControl, "OSPControlLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (xmlControl, obj) {
var ospControl=obj;
this.saveControlProperites$org_opensourcephysics_controls_XMLControl$org_opensourcephysics_controls_OSPControl(xmlControl, ospControl);
if (xmlControl.getLevel$() == 0) {
xmlControl.setValue$S$O("model", ospControl.model);
}});

Clazz.newMeth(C$, 'saveControlProperites$org_opensourcephysics_controls_XMLControl$org_opensourcephysics_controls_OSPControl',  function (xmlControl, ospControl) {
var it=ospControl.getPropertyNamesRaw$().iterator$();
while (it.hasNext$()){
var name=it.next$();
var val=ospControl.getObject$S(name);
if (val.getClass$() === Clazz.getClass($I$(3)) ) {
xmlControl.setValue$S$O(name, (val).getArray$());
} else if (val.getClass$() === Clazz.getClass($I$(4)) ) {
xmlControl.setValue$S$O(name, (val).getArray$());
} else if (val.getClass$() === Clazz.getClass(Boolean) ) {
xmlControl.setValue$S$Z(name, (val).booleanValue$());
} else if (val.getClass$() === Clazz.getClass(Double) ) {
xmlControl.setValue$S$D(name, (val).doubleValue$());
} else if (val.getClass$() === Clazz.getClass(Integer) ) {
xmlControl.setValue$S$I(name, (val).intValue$());
} else if (val.getClass$() === Clazz.getClass(Character) ) {
xmlControl.setValue$S$O(name, (val).toString());
} else if (val.getClass$().isArray$()) {
xmlControl.setValue$S$O(name, val);
} else {
xmlControl.setValue$S$O(name, val);
}}
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(5,1).c$$O,[null]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var cf=obj;
var it=control.getPropertyNamesRaw$().iterator$();
cf.table.setLockValues$Z(true);
while (it.hasNext$()){
var name=it.next$();
switch (control.getPropertyType$S(name)) {
case 3:
if (Clazz.instanceOf(cf.getObject$S(name), "org.opensourcephysics.controls.OSPCombo")) {
var combo=cf.getObject$S(name);
var itemName=control.getString$S(name);
var items=combo.items;
for (var i=0, n=items.length; i < n; i++) {
if (itemName.equals$O(items[i])) {
combo.selected=i;
break;
}}
cf.setValue$S$O(name, combo);
} else {
cf.setValue$S$O(name, control.getString$S(name));
}break;
case 0:
cf.setValue$S$I(name, control.getInt$S(name));
break;
case 1:
cf.setValue$S$D(name, control.getDouble$S(name));
break;
case 2:
cf.setValue$S$Z(name, control.getBoolean$S(name));
break;
case 6:
if (name.equals$O("model")) {
cf.model=control.getChildControl$S("model").loadObject$O(cf.model);
break;
}default:
cf.setValue$S$O(name, control.getObject$S(name));
break;
}
}
cf.table.setLockValues$Z(false);
return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:49 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
