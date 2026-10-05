(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'javax.swing.BorderFactory','org.opensourcephysics.tools.FitBuilder','java.util.ArrayList','java.util.HashSet','java.util.TreeMap','javax.swing.JPanel','java.awt.BorderLayout','java.awt.FlowLayout','javax.swing.JOptionPane','org.opensourcephysics.tools.UserFunction','org.opensourcephysics.tools.ToolsRes','javax.swing.JToolBar','javax.swing.JLabel','java.awt.event.MouseAdapter','javax.swing.JComboBox',['org.opensourcephysics.tools.FunctionTool','.DropdownRenderer'],'javax.swing.JButton','org.opensourcephysics.controls.XML','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.display.TextFrame','javax.swing.JDialog','java.awt.Toolkit','java.awt.Dimension','org.opensourcephysics.tools.FontSizer',['org.opensourcephysics.tools.FunctionTool','.FTObject'],'javax.swing.DefaultComboBoxModel','javax.swing.SwingUtilities','javax.swing.JScrollPane',['org.opensourcephysics.tools.FunctionTool','.Loader'],'org.opensourcephysics.display.DataTable','org.opensourcephysics.numerics.SuryonoParser']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FunctionTool", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog', 'java.beans.PropertyChangeListener');
C$.$classes$=[['FTObject',9],['DropdownRenderer',1],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.forbiddenNames=Clazz.new_($I$(4,1));
this.curveFitters=Clazz.new_($I$(4,1));
this.trackFunctionPanels=Clazz.new_($I$(5,1));
this.helpPath="";
this.helpBase="https://www.compadre.org/online_help/tools/";
this.fontLevel=0;
this.myContentPane=Clazz.new_([Clazz.new_($I$(7,1))],$I$(6,1).c$$java_awt_LayoutManager);
this.buttonbar=Clazz.new_([Clazz.new_($I$(8,1))],$I$(6,1).c$$java_awt_LayoutManager);
this.north=Clazz.new_([Clazz.new_($I$(7,1))],$I$(6,1).c$$java_awt_LayoutManager);
},1);

C$.$fields$=[['Z',['refreshing','haveGUI','isFitBuilder'],'I',['fontLevel'],'S',['helpPath','helpBase','dropdownTipText','titleText','dropdownLabelText'],'O',['forbiddenNames','java.util.HashSet','curveFitters','java.util.Set','trackFunctionPanels','java.util.Map','selectedPanel','org.opensourcephysics.tools.FunctionPanel','helpAction','java.awt.event.ActionListener','myContentPane','javax.swing.JPanel','+noData','toolbar','javax.swing.JToolBar','toolbarComponents','java.awt.Component[]','dropdownbar','javax.swing.JToolBar','dropdownLabel','javax.swing.JLabel','dropdown','javax.swing.JComboBox','buttonbar','javax.swing.JPanel','helpButton','javax.swing.JButton','+closeButton','+undoButton','+redoButton','north','javax.swing.JPanel','selectedPanelScroller','javax.swing.JScrollPane','helpFrame','org.opensourcephysics.display.TextFrame','helpDialog','javax.swing.JDialog']]
,['O',['parserNames','String[]','+parserOperators']]]

Clazz.newMeth(C$, 'c$$java_awt_Component',  function (comp) {
C$.c$$java_awt_Component$Z$Z.apply(this, [comp, false, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$Z$Z',  function (comp, isFitBuilder, lazyGUI) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[$I$(9).getFrameForComponent$java_awt_Component(comp), comp == null ]);C$.$init$.apply(this);
this.isFitBuilder=isFitBuilder;
this.addForbiddenNames$SA(C$.parserNames);
this.addForbiddenNames$SA($I$(10).dummyVars);
this.setName$S("FunctionTool");
this.init$();
if (!lazyGUI) this.createGUI$();
}, 1);

Clazz.newMeth(C$, 'checkGUI$',  function () {
if (this.haveGUI) return;
this.createGUI$();
this.refreshDropdown$S(null);
this.refreshGUI$();
});

Clazz.newMeth(C$, 'init$',  function () {
});

Clazz.newMeth(C$, 'haveGUI$',  function () {
return this.haveGUI;
});

Clazz.newMeth(C$, 'createGUI$',  function () {
this.haveGUI=true;
$I$(11).addPropertyChangeListener$S$java_beans_PropertyChangeListener("locale", this);
this.setDefaultCloseOperation$I(1);
this.noData=Clazz.new_([Clazz.new_($I$(7,1))],$I$(6,1).c$$java_awt_LayoutManager);
this.dropdownbar=Clazz.new_($I$(12,1));
this.dropdownbar.setFloatable$Z(false);
this.dropdownLabel=Clazz.new_($I$(13,1));
this.dropdownLabel.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(0, 3, 0, 2));
this.dropdownLabel.addMouseListener$java_awt_event_MouseListener(((P$.FunctionTool$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionTool$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
var name=this.b$['org.opensourcephysics.tools.FunctionTool'].getSelectedName$.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], []);
if (name != null ) {
var panel=this.b$['org.opensourcephysics.tools.FunctionTool'].trackFunctionPanels.get$O(name);
panel.clearSelection$();
}});
})()
), Clazz.new_($I$(14,1),[this, null],P$.FunctionTool$1)));
this.dropdownbar.add$java_awt_Component(this.dropdownLabel);
this.dropdown=((P$.FunctionTool$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionTool$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JComboBox'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=C$.superclazz.prototype.getMaximumSize$.apply(this, []);
if (!!(this.b$['org.opensourcephysics.tools.FunctionTool'].toolbarComponents != null  && !!(this.b$['org.opensourcephysics.tools.FunctionTool'].toolbarComponents.length > 0 & Clazz.instanceOf(this.b$['org.opensourcephysics.tools.FunctionTool'].toolbarComponents[0], "javax.swing.JButton")))) {
var button=this.b$['org.opensourcephysics.tools.FunctionTool'].toolbarComponents[0];
dim.height=button.getHeight$();
}return dim;
});

Clazz.newMeth(C$, ['addItem$org_opensourcephysics_tools_FunctionTool_FTObject','addItem$O'],  function (obj) {
if (obj == null ) return;
var count=this.getItemCount$();
for (var i=0; i < count; i++) {
if (obj.equals$O(this.getItemAt$I(i))) return;
}
var displayName=obj.displayName;
if (this.b$['org.opensourcephysics.tools.FunctionTool'].isFitBuilder) {
displayName=$I$(2).localize$S(displayName);
}for (var i=0; i < count; i++) {
var fto=this.getItemAt$I(i);
var dname=fto.displayName;
if (this.b$['org.opensourcephysics.tools.FunctionTool'].isFitBuilder) {
dname=$I$(2).localize$S(dname);
}if (displayName.compareToIgnoreCase$S(dname) < 0) {
this.insertItemAt$O$I(obj, i);
return;
}}
C$.superclazz.prototype.addItem$O.apply(this, [obj]);
});
})()
), Clazz.new_($I$(15,1),[this, null],P$.FunctionTool$2));
this.dropdown.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(0, 0, 1, 0));
this.dropdownbar.add$java_awt_Component(this.dropdown);
var renderer=Clazz.new_($I$(16,1),[this, null]);
this.dropdown.setRenderer$javax_swing_ListCellRenderer(renderer);
this.dropdown.addActionListener$java_awt_event_ActionListener(((P$.FunctionTool$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionTool$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var item=this.b$['org.opensourcephysics.tools.FunctionTool'].dropdown.getSelectedItem$();
if (item != null ) {
var name=item.name;
p$1.select$S.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], [name]);
var panel=this.b$['org.opensourcephysics.tools.FunctionTool'].trackFunctionPanels.get$O(name);
if (panel != null  && panel.haveGUI$() ) {
panel.getFunctionTable$().clearSelection$();
panel.getFunctionTable$().selectOnFocus=false;
panel.getParamTable$().clearSelection$();
panel.getParamTable$().selectOnFocus=false;
panel.refreshGUI$();
}}this.b$['org.opensourcephysics.tools.FunctionTool'].helpButton.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.FunctionTool$3.$init$,[this, null])));
this.toolbar=Clazz.new_($I$(12,1));
this.toolbar.setFloatable$Z(false);
this.north.add$java_awt_Component$O(this.dropdownbar, "South");
this.north.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(2, 2, 2, 2));
this.closeButton=Clazz.new_([$I$(11).getString$S("Tool.Button.Close")],$I$(17,1).c$$S);
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.FunctionTool$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionTool$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.FunctionTool'].setVisible$Z.apply(this.b$['org.opensourcephysics.tools.FunctionTool'], [false]);
});
})()
), Clazz.new_(P$.FunctionTool$4.$init$,[this, null])));
this.helpAction=((P$.FunctionTool$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionTool$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.FunctionTool'].helpFrame == null ) {
var help=$I$(18).getResolvedPath$S$S(this.b$['org.opensourcephysics.tools.FunctionTool'].helpPath, this.b$['org.opensourcephysics.tools.FunctionTool'].helpBase);
if ($I$(19).getResource$S(help) != null ) {
this.b$['org.opensourcephysics.tools.FunctionTool'].helpFrame=Clazz.new_($I$(20,1).c$$S,[help]);
} else {
var classBase="/org/opensourcephysics/resources/tools/html/";
help=$I$(18).getResolvedPath$S$S(this.b$['org.opensourcephysics.tools.FunctionTool'].helpPath, classBase);
this.b$['org.opensourcephysics.tools.FunctionTool'].helpFrame=Clazz.new_($I$(20,1).c$$S,[help]);
}this.b$['org.opensourcephysics.tools.FunctionTool'].helpDialog=Clazz.new_($I$(21,1).c$$java_awt_Dialog$Z,[this.b$['org.opensourcephysics.tools.FunctionTool'], false]);
this.b$['org.opensourcephysics.tools.FunctionTool'].helpDialog.setContentPane$java_awt_Container(this.b$['org.opensourcephysics.tools.FunctionTool'].helpFrame.getContentPane$());
this.b$['org.opensourcephysics.tools.FunctionTool'].helpDialog.setSize$I$I(700, 550);
var dim=$I$(22).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.b$['org.opensourcephysics.tools.FunctionTool'].helpDialog.getBounds$().width)/2|0);
var y=((dim.height - this.b$['org.opensourcephysics.tools.FunctionTool'].helpDialog.getBounds$().height)/2|0);
this.b$['org.opensourcephysics.tools.FunctionTool'].helpDialog.setLocation$I$I(x, y);
}this.b$['org.opensourcephysics.tools.FunctionTool'].helpDialog.setVisible$Z(true);
});
})()
), Clazz.new_(P$.FunctionTool$5.$init$,[this, null]));
this.helpButton=Clazz.new_([$I$(11).getString$S("Tool.Button.Help")],$I$(17,1).c$$S);
this.helpButton.addActionListener$java_awt_event_ActionListener(this.helpAction);
this.undoButton=Clazz.new_([$I$(11).getString$S("DataFunctionPanel.Button.Undo")],$I$(17,1).c$$S);
this.redoButton=Clazz.new_([$I$(11).getString$S("DataFunctionPanel.Button.Redo")],$I$(17,1).c$$S);
this.buttonbar.setBorder$javax_swing_border_Border($I$(1).createEtchedBorder$());
this.buttonbar.add$java_awt_Component(this.helpButton);
this.buttonbar.add$java_awt_Component(this.undoButton);
this.buttonbar.add$java_awt_Component(this.redoButton);
this.buttonbar.add$java_awt_Component(this.closeButton);
this.myContentPane.add$java_awt_Component$O(this.north, "North");
this.myContentPane.add$java_awt_Component$O(this.noData, "Center");
this.myContentPane.add$java_awt_Component$O(this.buttonbar, "South");
this.setContentPane$java_awt_Container(this.myContentPane);
var dim=this.getPreferredSize$();
this.setPreferredSize$java_awt_Dimension(Clazz.new_([dim.width, Math.max(400, dim.height)],$I$(23,1).c$$I$I));
this.pack$();
this.buttonbar.remove$java_awt_Component(this.undoButton);
this.buttonbar.remove$java_awt_Component(this.redoButton);
this.dropdown.setEnabled$Z(false);
this.dropdownLabel.setEnabled$Z(false);
dim=$I$(22).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.getBounds$().width)/2|0);
var y=((dim.height - this.getBounds$().height)/2|0);
this.setLocation$I$I(x, y);
});

Clazz.newMeth(C$, 'setTitles$',  function () {
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
if (!this.haveGUI) return;
if (this.toolbarComponents == null ) {
this.north.remove$java_awt_Component(this.toolbar);
} else {
this.north.add$java_awt_Component$O(this.toolbar, "North");
this.toolbar.removeAll$();
for (var i=0; i < this.toolbarComponents.length; i++) {
this.toolbar.add$java_awt_Component(this.toolbarComponents[i]);
}
}if (this.dropdownLabelText != null ) {
this.dropdownLabel.setText$S(this.dropdownLabelText);
} else if (this.selectedPanel != null ) {
var label=this.selectedPanel.getLabel$();
this.dropdownLabel.setText$S(label + ":");
}if (this.dropdownTipText != null ) this.dropdown.setToolTipText$S(this.dropdownTipText);
this.setTitles$();
if (this.titleText != null ) this.setTitle$S(this.titleText);
this.closeButton.setText$S($I$(11).getString$S("Tool.Button.Close"));
this.closeButton.setToolTipText$S($I$(11).getString$S("Tool.Button.Close.ToolTip"));
this.helpButton.setText$S($I$(11).getString$S("Tool.Button.Help"));
this.helpButton.setToolTipText$S($I$(11).getString$S("Tool.Button.Help.ToolTip"));
var it=this.trackFunctionPanels.values$().iterator$();
while (it.hasNext$()){
var panel=it.next$();
panel.refreshGUI$();
}
var dim=this.getSize$();
dim.width=Math.max(dim.width, this.getMinimumSize$().width);
this.setSize$java_awt_Dimension(dim);
this.helpButton.requestFocusInWindow$();
});

Clazz.newMeth(C$, 'setToolbarComponents$java_awt_ComponentA',  function (toolbarItems) {
this.toolbarComponents=toolbarItems;
this.refreshGUI$();
});

Clazz.newMeth(C$, 'getToolbarComponents$',  function () {
return this.toolbarComponents;
});

Clazz.newMeth(C$, 'getToolbar$',  function () {
return this.toolbar;
});

Clazz.newMeth(C$, 'addPanel$S$org_opensourcephysics_tools_FunctionPanel',  function (name, panel) {
panel.setFontLevel$I(this.fontLevel);
panel.setName$S(name);
panel.setFunctionTool$org_opensourcephysics_tools_FunctionTool(this);
this.trackFunctionPanels.put$O$O(name, panel);
panel.addForbiddenNames$SA(this.forbiddenNames.toArray$OA(Clazz.array(String, [0])));
panel.clearSelection$();
if (this.isVisible$()) this.refreshDropdown$S(name);
});

Clazz.newMeth(C$, 'removePanel$S',  function (name) {
var panel=this.trackFunctionPanels.get$O(name);
if (panel != null ) {
this.trackFunctionPanels.remove$O(name);
this.refreshDropdown$S(null);
this.firePropertyChange$S$O$O("panel", panel, null);
panel.dispose$();
}return panel;
});

Clazz.newMeth(C$, 'renamePanel$S$S',  function (prevName, newName) {
var panel=this.getPanel$S(prevName);
if ((panel == null ) || prevName.equals$O(newName) ) {
return panel;
}this.trackFunctionPanels.remove$O(prevName);
this.trackFunctionPanels.put$O$O(newName, panel);
panel.prevName=prevName;
panel.setName$S(newName);
this.refreshDropdown$S(newName);
return panel;
});

Clazz.newMeth(C$, 'setSelectedPanel$S',  function (name) {
if (!this.haveGUI$()) return;
var item=p$1.getDropdownItem$S.apply(this, [name]);
if (item != null ) this.dropdown.setSelectedItem$O(item);
});

Clazz.newMeth(C$, 'getSelectedName$',  function () {
if (this.selectedPanel == null ) {
return null;
}var it=this.trackFunctionPanels.keySet$().iterator$();
while (it.hasNext$()){
var name=it.next$();
if (this.trackFunctionPanels.get$O(name) === this.selectedPanel ) {
return name;
}}
return null;
});

Clazz.newMeth(C$, 'getSelectedPanel$',  function () {
var name=this.getSelectedName$();
var panel=this.getPanel$S(name);
if (panel == null  && name != null  ) {
this.refreshDropdown$S(name);
panel=this.getPanel$S(name);
}return panel;
});

Clazz.newMeth(C$, 'getPanel$S',  function (name) {
return (name == null ) ? null : this.trackFunctionPanels.get$O(name);
});

Clazz.newMeth(C$, 'getPanelNames$',  function () {
return this.trackFunctionPanels.keySet$();
});

Clazz.newMeth(C$, 'clearPanels$',  function () {
this.trackFunctionPanels.clear$();
this.refreshDropdown$S(null);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (!this.haveGUI$()) return;
this.refreshGUI$();
if (this.isFitBuilder) {
this.refreshDropdown$S(null);
}});

Clazz.newMeth(C$, 'addForbiddenNames$SA',  function (names) {
for (var i=0; i < names.length; i++) {
this.forbiddenNames.add$O(names[i]);
}
});

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
if (vis == this.isVisible$() ) return;
if (vis) {
this.checkGUI$();
this.setFontLevel$I($I$(24).getLevel$());
this.refreshDropdown$S(this.getSelectedName$());
} else if (!this.haveGUI$()) {
return;
}var top=this.myContentPane.getTopLevelAncestor$();
if (top == null  || top === this  ) C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
 else top.setVisible$Z(vis);
this.firePropertyChange$S$O$O("ft_visible", null, Boolean.valueOf$Z(vis));
});

Clazz.newMeth(C$, 'isVisible$',  function () {
var top=this.myContentPane.getTopLevelAncestor$();
return (top == null  ? false : top === this  ? C$.superclazz.prototype.isVisible$.apply(this, []) : top.isVisible$());
});

Clazz.newMeth(C$, 'setHelpPath$S',  function (path) {
this.helpPath=path;
});

Clazz.newMeth(C$, 'setHelpAction$java_awt_event_ActionListener',  function (action) {
this.helpButton.removeActionListener$java_awt_event_ActionListener(this.helpAction);
this.helpAction=action;
this.helpButton.addActionListener$java_awt_event_ActionListener(this.helpAction);
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.trackFunctionPanels.isEmpty$();
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
level=Math.max(0, level);
if (level == this.fontLevel || this.dropdown == null  ) {
return;
}this.fontLevel=level;
var vis=this.isVisible$();
this.setVisible$Z(false);
$I$(24).setFonts$O$I(this, level);
$I$(24).setFonts$O$I(this.myContentPane, level);
for (var it=this.trackFunctionPanels.values$().iterator$(); it.hasNext$(); ) {
var next=it.next$();
next.setFontLevel$I(level);
}
var n=this.dropdown.getSelectedIndex$();
var items=Clazz.array($I$(25), [this.dropdown.getItemCount$()]);
for (var i=0; i < items.length; i++) {
items[i]=this.dropdown.getItemAt$I(i);
}
var model=Clazz.new_($I$(26,1).c$$OA,[items]);
this.dropdown.setModel$javax_swing_ComboBoxModel(model);
this.dropdown.setSelectedIndex$I(n);
var c=this.myContentPane.getTopLevelAncestor$();
var dim=c.getSize$();
dim.width=c.getMinimumSize$().width;
var h=((280 * $I$(24).getFactor$I(level))|0);
h=Math.max(h, dim.height);
h=Math.min(h, ($I$(22).getDefaultToolkit$().getScreenSize$().getHeight$()|0));
dim.height=h;
this.setSize$java_awt_Dimension(dim);
c.setSize$java_awt_Dimension(dim);
this.setVisible$Z(vis);
this.refreshDropdown$S(null);
});

Clazz.newMeth(C$, 'getFontLevel$',  function () {
return this.fontLevel;
});

Clazz.newMeth(C$, 'setDefaultVariables$SA',  function (vars) {
for (var name, $name = this.getPanelNames$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
var panel=this.getPanel$S(name);
var editor=panel.getFunctionEditor$();
editor.setDefaultVariables$SA(vars);
editor.repaint$();
}
});

Clazz.newMeth(C$, 'firePropertyChange$S$O$O',  function (name, oldObj, newObj) {
C$.superclazz.prototype.firePropertyChange$S$O$O.apply(this, [name, oldObj, newObj]);
});

Clazz.newMeth(C$, 'getDropdownItem$S',  function (name) {
for (var i=0; i < this.dropdown.getItemCount$(); i++) {
var item=this.dropdown.getItemAt$I(i);
var itemName=item.name;
if (itemName.equals$O(name)) return item;
}
return null;
}, p$1);

Clazz.newMeth(C$, 'getSelectedDropdownName$',  function () {
var item=this.dropdown.getSelectedItem$();
if (item != null ) return item.name;
return null;
});

Clazz.newMeth(C$, 'refreshDropdown$S',  function (name) {
if (!this.haveGUI$()) return;
this.refreshing=true;
if (name == null ) {
var item=this.dropdown.getSelectedItem$();
if (item != null ) name=item.name;
}var toSelect=null;
this.dropdown.removeAllItems$();
for (var next, $next = this.trackFunctionPanels.keySet$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var panel=this.trackFunctionPanels.get$O(next);
var displayName=panel.getDisplayName$();
var icon=panel.getIcon$();
var item=Clazz.new_($I$(25,1).c$$javax_swing_Icon$S$S,[icon, next, displayName]);
this.dropdown.addItem$O(item);
if (toSelect == null  || next.equals$O(name) ) {
toSelect=item;
}}
this.refreshing=false;
if (toSelect != null ) {
this.dropdown.setSelectedItem$O(toSelect);
} else {
p$1.select$S.apply(this, [null]);
}if (this.dropdownLabelText != null ) this.dropdownLabel.setText$S(this.dropdownLabelText);
$I$(27,"invokeLater$Runnable",[((P$.FunctionTool$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "FunctionTool$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.tools.FunctionTool'].dropdown.revalidate$();
this.b$['org.opensourcephysics.tools.FunctionTool'].helpButton.requestFocusInWindow$();
});
})()
), Clazz.new_(P$.FunctionTool$6.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'select$S',  function (name) {
if (this.refreshing) return;
var panel=(name == null ) ? null : this.trackFunctionPanels.get$O(name);
var prev=this.selectedPanel;
if (this.selectedPanel != null ) {
this.myContentPane.remove$java_awt_Component(this.selectedPanelScroller);
} else {
this.myContentPane.remove$java_awt_Component(this.noData);
}this.selectedPanel=panel;
this.dropdown.setEnabled$Z(panel != null );
this.dropdownLabel.setEnabled$Z(panel != null );
if (panel != null ) {
this.selectedPanelScroller=Clazz.new_($I$(28,1).c$$java_awt_Component,[panel]);
this.myContentPane.add$java_awt_Component$O(this.selectedPanelScroller, "Center");
panel.refreshGUI$();
} else {
this.myContentPane.add$java_awt_Component$O(this.noData, "Center");
this.buttonbar.removeAll$();
this.buttonbar.add$java_awt_Component(this.helpButton);
this.buttonbar.add$java_awt_Component(this.closeButton);
}var c=this.myContentPane.getTopLevelAncestor$();
c.validate$();
this.refreshGUI$();
c.repaint$();
this.firePropertyChange$S$O$O("panel", prev, panel);
}, p$1);

Clazz.newMeth(C$, 'getUniqueName$S',  function (proposedName) {
var i=0;
var name=proposedName;
if ($I$(11).getString$S("DatasetCurveFitter.NewFit.Name").equals$O(proposedName)) {
++i;
name=name + i;
}while (this.trackFunctionPanels.keySet$().contains$O(name) || this.forbiddenNames.contains$O(name) ){
++i;
name=proposedName + i;
}
return name;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(29,1));
}, 1);

Clazz.newMeth(C$, 'setButtonBar$OA',  function (btns) {
if (!this.haveGUI) return;
this.buttonbar.removeAll$();
for (var btn, $btn = 0, $$btn = btns; $btn<$$btn.length&&((btn=($$btn[$btn])),1);$btn++) {
if (Clazz.instanceOf(btn, "java.lang.String")) {
switch (btn) {
case "help":
btn=this.helpButton;
break;
case "close":
btn=this.closeButton;
break;
}
}this.buttonbar.add$java_awt_Component(btn);
}
});

Clazz.newMeth(C$, 'hasButton$javax_swing_JButton',  function (btn) {
return (btn != null  && btn.getParent$() === this.buttonbar  );
});

Clazz.newMeth(C$, 'focusHelp$',  function () {
if (this.haveGUI) this.helpButton.requestFocusInWindow$();
});

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.helpDialog != null ) {
this.helpDialog.dispose$();
}C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'arrayContains$SA$S',  function (s, name) {
for (var i=s.length; --i >= 0; ) {
if (s[i].equals$O(name)) return true;
}
return false;
}, 1);

Clazz.newMeth(C$, 'isReservedName$S',  function (name) {
return ($I$(30).rowName.equals$O(name) || C$.arrayContains$SA$S(C$.parserNames, name) || C$.arrayContains$SA$S($I$(10).dummyVars, name) || !Double.isNaN$D($I$(31).getNumber$S(name))  );
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.parserNames=Clazz.array(String, -1, ["e", "pi", "min", "mod", "sin", "cos", "abs", "log", "acos", "acosh", "ceil", "cosh", "asin", "asinh", "atan", "atanh", "exp", "frac", "floor", "int", "random", "round", "sign", "sinh", "step", "tanh", "atan2", "max", "sqrt", "sqr", "if", "tan"]);
C$.parserOperators=Clazz.array(String, -1, ["!", ",", ".", "+", "-", "*", "/", "^", "=", ">", "<", "&", "|", "(", ")"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.FunctionTool, "FTObject", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name','displayName'],'O',['icon','javax.swing.Icon','track','org.opensourcephysics.media.core.Trackable']]]

Clazz.newMeth(C$, 'c$$javax_swing_Icon$S$S',  function (icon, name, displayName) {
;C$.$init$.apply(this);
this.icon=icon;
this.name=name;
this.displayName=displayName;
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Icon$org_opensourcephysics_media_core_Trackable$S',  function (icon, track, displayName) {
;C$.$init$.apply(this);
this.icon=icon;
this.track=track;
this.displayName=displayName;
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (o) {
var fto=o;
return fto != null  && (this.name == null  ? fto.name == null  : this.name.equals$O(fto.name))  && (this.track == null  ? fto.track == null  : this.track.equals$O(fto.track))  && (this.displayName == null  ? fto.displayName == null  : this.displayName.equals$O(fto.displayName))  && (this.icon == null  ? fto.icon == null  : this.icon.equals$O(fto.icon)) ;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.displayName;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FunctionTool, "DropdownRenderer", function(){
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
this.setBorder$javax_swing_border_Border($I$(1).createEmptyBorder$I$I$I$I(1, 4, 1, 0));
}, 1);

Clazz.newMeth(C$, 'getListCellRendererComponent$javax_swing_JList$O$I$Z$Z',  function (list, value, index, isSelected, cellHasFocus) {
if (isSelected) {
this.setBackground$java_awt_Color(list.getSelectionBackground$());
this.setForeground$java_awt_Color(list.getSelectionForeground$());
} else {
this.setBackground$java_awt_Color(list.getBackground$());
this.setForeground$java_awt_Color(list.getForeground$());
}if (value != null ) {
var obj=value;
this.setIcon$javax_swing_Icon(obj.icon);
var displayName=obj.displayName;
if (this.b$['org.opensourcephysics.tools.FunctionTool'].isFitBuilder) {
displayName=$I$(2).localize$S(displayName);
}this.setText$S(displayName);
} else {
this.setIcon$javax_swing_Icon(null);
this.setText$S(null);
}return this;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FunctionTool, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var tool=obj;
var functions=Clazz.new_([tool.trackFunctionPanels.values$()],$I$(3,1).c$$java_util_Collection);
control.setValue$S$O("functions", functions);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var tool=obj;
var functions=control.getObject$S("functions");
if (functions != null ) {
for (var it=functions.iterator$(); it.hasNext$(); ) {
var panel=it.next$();
tool.addPanel$S$org_opensourcephysics_tools_FunctionPanel(panel.getName$(), panel);
}
}return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
