(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),p$1={},I$=[[0,'java.awt.BorderLayout','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints','javax.swing.JTextPane',['javax.swing.event.HyperlinkEvent','.EventType'],'org.opensourcephysics.desktop.OSPDesktop','java.awt.event.KeyAdapter','java.awt.Color','java.awt.event.MouseAdapter','java.awt.event.FocusAdapter','javax.swing.JScrollPane','javax.swing.undo.UndoManager','javax.swing.undo.UndoableEditSupport','org.opensourcephysics.cabrillo.tracker.TFrame',['org.opensourcephysics.cabrillo.tracker.PageTView','.TextEdit'],'org.opensourcephysics.cabrillo.tracker.TrackerRes','org.opensourcephysics.controls.XML','org.opensourcephysics.tools.ResourceLoader',['org.opensourcephysics.cabrillo.tracker.PageTView','.TabView'],['org.opensourcephysics.cabrillo.tracker.PageTView','.TabData'],'java.util.ArrayList','org.opensourcephysics.cabrillo.tracker.Tracker',['org.opensourcephysics.cabrillo.tracker.PageTView','.TabLoader'],'javax.swing.Box','org.opensourcephysics.tools.FontSizer','java.awt.Dimension','javax.swing.JTabbedPane','org.opensourcephysics.cabrillo.tracker.TViewChooser','javax.swing.JPopupMenu','javax.swing.JMenuItem','org.opensourcephysics.tools.LaunchBuilder','javax.swing.JRadioButtonMenuItem','org.opensourcephysics.cabrillo.tracker.TButton','javax.swing.JLabel','javax.swing.BorderFactory','javax.swing.JPanel','javax.swing.JTextField','java.awt.Toolkit','javax.swing.KeyStroke','javax.swing.JToolBar','javax.swing.JDialog','javax.swing.JOptionPane','java.awt.event.WindowAdapter',['org.opensourcephysics.cabrillo.tracker.PageTView','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PageTView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.cabrillo.tracker.TView');
C$.$classes$=[['TabView',9],['TabData',9],['TextEdit',12],['TabLoader',8],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tabs=Clazz.new_($I$(21,1));
this.filler=$I$(24).createHorizontalGlue$();
},1);

C$.$fields$=[['Z',['locked'],'O',['tabs','java.util.ArrayList','tabbedPane','javax.swing.JTabbedPane','pageButton','javax.swing.JButton','nameDialog','javax.swing.JDialog','nameField','javax.swing.JTextField','noTab','javax.swing.JPanel','noTabLabel','javax.swing.JLabel','+tabTitleLabel','filler','javax.swing.Box.Filler','titleBorder','javax.swing.border.Border']]
,['O',['PAGEVIEW_ICON','javax.swing.Icon']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel',  function (panel) {
;C$.superclazz.c$$org_opensourcephysics_cabrillo_tracker_TrackerPanel.apply(this,[panel]);C$.$init$.apply(this);
this.setBackground$java_awt_Color(panel.getBackground$());
this.createGUI$();
this.refresh$();
}, 1);

Clazz.newMeth(C$, 'refresh$',  function () {
this.refreshTabs$();
this.removeAll$();
this.pageButton.setText$S($I$(16).getString$S("PageTView.Button.Page"));
if (this.tabs.isEmpty$()) {
this.noTabLabel.setText$S($I$(16).getString$S("TextTView.Label.NoTab"));
this.add$java_awt_Component$O(this.noTab, "Center");
} else if (this.tabs.size$() == 1) {
this.add$java_awt_Component$O(this.tabs.get$I(0), "Center");
} else {
this.add$java_awt_Component$O(this.tabbedPane, "Center");
}$I$(25).setFonts$java_awt_Container(this);
this.validate$();
$I$(14).repaintT$java_awt_Component(this);
});

Clazz.newMeth(C$, 'init$',  function () {
});

Clazz.newMeth(C$, 'cleanup$',  function () {
});

Clazz.newMeth(C$, 'dispose$',  function () {
for (var tab, $tab = this.tabs.iterator$(); $tab.hasNext$()&&((tab=($tab.next$())),1);) {
tab.data.panelID=null;
tab.data.frame=null;
}
if (this.tabbedPane == null ) return;
this.tabbedPane.removeAll$();
this.frame=null;
this.panelID=null;
});

Clazz.newMeth(C$, 'getTrackerPanel$',  function () {
return this.frame.getTrackerPanelForID$Integer(this.panelID);
});

Clazz.newMeth(C$, 'getViewName$',  function () {
return $I$(16).getString$S("TFrame.View.Text");
});

Clazz.newMeth(C$, 'getViewIcon$',  function () {
return C$.PAGEVIEW_ICON;
});

Clazz.newMeth(C$, 'getViewType$',  function () {
return 3;
});

Clazz.newMeth(C$, 'isCustomState$',  function () {
return this.tabs.size$() > 0;
});

Clazz.newMeth(C$, 'addTab$org_opensourcephysics_cabrillo_tracker_PageTView_TabView',  function (tab) {
this.tabs.add$O(tab);
if (this.panelID != null ) {
this.frame.getTrackerPanelForID$Integer(this.panelID).changed=true;
}this.refresh$();
});

Clazz.newMeth(C$, 'removeTab$org_opensourcephysics_cabrillo_tracker_PageTView_TabView',  function (tab) {
this.tabs.remove$O(tab);
if (this.panelID != null ) {
this.frame.getTrackerPanelForID$Integer(this.panelID).changed=true;
}this.refresh$();
});

Clazz.newMeth(C$, 'renameTab$org_opensourcephysics_cabrillo_tracker_PageTView_TabView',  function (tab) {
this.nameDialog=this.getNameDialog$();
this.nameDialog.setTitle$S($I$(16).getString$S("TextTView.Dialog.TabTitle.Title"));
this.nameField.setText$S(tab.data.title);
this.nameField.setBackground$java_awt_Color($I$(8).white);
this.nameField.selectAll$();
this.nameDialog.pack$();
var p=this.getLocationOnScreen$();
p.x+=((this.getWidth$() - this.nameDialog.getWidth$())/2|0);
p.y-=this.pageButton.getHeight$();
this.nameDialog.setLocation$java_awt_Point(p);
this.nameDialog.setVisible$Z(true);
});

Clazz.newMeth(C$, 'getSelectedTab$',  function () {
var tab=this.tabbedPane.getSelectedComponent$();
if (tab == null  && !this.tabs.isEmpty$() ) {
tab=this.tabs.get$I(0);
}return tab;
});

Clazz.newMeth(C$, 'setSelectedTab$org_opensourcephysics_cabrillo_tracker_PageTView_TabView',  function (tab) {
if (this.tabs.size$() > 1) this.tabbedPane.setSelectedComponent$java_awt_Component(tab);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
});

Clazz.newMeth(C$, 'createGUI$',  function () {
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(26,1).c$$I$I,[400, 200]));
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(1,1)));
var panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
this.tabbedPane=Clazz.new_($I$(27,1).c$$I,[1]);
this.tabbedPane.setBackground$java_awt_Color(panel.getBackground$());
this.tabbedPane.addChangeListener$javax_swing_event_ChangeListener(((P$.PageTView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].refreshTitle$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], []);
});
})()
), Clazz.new_(P$.PageTView$1.$init$,[this, null])));
this.tabbedPane.addMouseListener$java_awt_event_MouseListener(((P$.PageTView$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].tabbedPane.requestFocusInWindow$();
if ($I$(2).isPopupTrigger$java_awt_event_InputEvent(e)) {
var popup=this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].getPopup$org_opensourcephysics_cabrillo_tracker_PageTView_TabView.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], [this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].getSelectedTab$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], [])]);
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].tabbedPane, e.getX$(), e.getY$());
} else if (e.getClickCount$() == 2 && !this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].locked  && this.$finals$.panel.isEnabled$S("pageView.edit") ) {
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].renameTab$org_opensourcephysics_cabrillo_tracker_PageTView_TabView.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], [this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].getSelectedTab$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], [])]);
}});
})()
), Clazz.new_($I$(9,1),[this, {panel:panel}],P$.PageTView$2)));
this.pageButton=((P$.PageTView$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.cabrillo.tracker.TButton'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
return $I$(28,"getButtonMaxSize$java_awt_Container$java_awt_Dimension$I",[this, C$.superclazz.prototype.getMaximumSize$.apply(this, []), this.getMinimumSize$().height]);
});

Clazz.newMeth(C$, 'getPopup$',  function () {
var popup=Clazz.new_($I$(29,1));
if (!this.$finals$.panel.isEnabled$S("pageView.edit")) {
var item=Clazz.new_([$I$(16).getString$S("TTrack.MenuItem.Locked")],$I$(30,1).c$$S);
item.setEnabled$Z(false);
popup.add$javax_swing_JMenuItem(item);
$I$(25,"setFonts$O$I",[popup, $I$(25).getLevel$()]);
return popup;
}var item=Clazz.new_([$I$(16).getString$S("TextTView.Button.NewTab")],$I$(30,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.PageTView$3$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$3$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var tab=Clazz.new_([Clazz.new_($I$(20,1))],$I$(19,1).c$$org_opensourcephysics_cabrillo_tracker_PageTView_TabData);
var n=this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].tabs.size$() + 1;
if (n > 1) {
tab.data.title+=" " + n;
}this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].addTab$org_opensourcephysics_cabrillo_tracker_PageTView_TabView.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], [tab]);
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].setSelectedTab$org_opensourcephysics_cabrillo_tracker_PageTView_TabView.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], [tab]);
});
})()
), Clazz.new_(P$.PageTView$3$1.$init$,[this, null])));
item.setEnabled$Z(!this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].locked);
popup.add$javax_swing_JMenuItem(item);
item=Clazz.new_([$I$(16).getString$S("TextTView.MenuItem.OpenHTML")],$I$(30,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.PageTView$3$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$3$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var chooser=$I$(2).getChooser$();
chooser.setFileFilter$javax_swing_filechooser_FileFilter($I$(31).getHTMLFilter$());
chooser.showOpenDialog$java_awt_Component$Runnable$Runnable(this.$finals$.panel, ((P$.PageTView$3$2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$3$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var file=this.$finals$.chooser.getSelectedFile$();
var tab=this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].getSelectedTab$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], []);
if (tab == null ) {
tab=Clazz.new_([Clazz.new_($I$(20,1))],$I$(19,1).c$$org_opensourcephysics_cabrillo_tracker_PageTView_TabData);
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].addTab$org_opensourcephysics_cabrillo_tracker_PageTView_TabView.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], [tab]);
}tab.setUndoableText$S($I$(17).getAbsolutePath$java_io_File(file));
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].refresh$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], []);
$I$(2).chooserDir=$I$(17,"getDirectoryPath$S",[file.getPath$()]);
});
})()
), Clazz.new_(P$.PageTView$3$2$1.$init$,[this, {chooser:chooser}])), null);
});
})()
), Clazz.new_(P$.PageTView$3$2.$init$,[this, {panel:this.$finals$.panel}])));
item.setEnabled$Z(!this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].locked);
popup.add$javax_swing_JMenuItem(item);
popup.addSeparator$();
item=Clazz.new_([$I$(16).getString$S("TTrack.MenuItem.Locked")],$I$(32,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.PageTView$3$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$3$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var item=e.getSource$();
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].locked=item.isSelected$();
});
})()
), Clazz.new_(P$.PageTView$3$3.$init$,[this, null])));
item.setSelected$Z(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].locked);
popup.add$javax_swing_JMenuItem(item);
$I$(25,"setFonts$O$I",[popup, $I$(25).getLevel$()]);
return popup;
});
})()
), Clazz.new_($I$(33,1),[this, {panel:panel}],P$.PageTView$3));
this.pageButton.setIcon$javax_swing_Icon($I$(28).DOWN_ARROW_ICON);
this.pageButton.setHorizontalTextPosition$I(10);
this.tabTitleLabel=Clazz.new_($I$(34,1));
this.tabTitleLabel.setOpaque$Z(false);
this.tabTitleLabel.setForeground$java_awt_Color($I$(8).BLUE.darker$());
this.tabTitleLabel.addMouseListener$java_awt_event_MouseListener(((P$.PageTView$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ("".equals$O(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].tabTitleLabel.getText$())) return;
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].tabTitleLabel.requestFocusInWindow$();
if ($I$(2).isPopupTrigger$java_awt_event_InputEvent(e)) {
var popup=this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].getPopup$org_opensourcephysics_cabrillo_tracker_PageTView_TabView.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], [this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].getSelectedTab$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], [])]);
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].tabTitleLabel, e.getX$(), e.getY$());
} else if (e.getClickCount$() == 2 && !this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].locked  && this.$finals$.panel.isEnabled$S("pageView.edit") ) {
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].renameTab$org_opensourcephysics_cabrillo_tracker_PageTView_TabView.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], [this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].getSelectedTab$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], [])]);
}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
if (!this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].locked && this.$finals$.panel.isEnabled$S("pageView.edit") ) this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].tabTitleLabel.setBorder$javax_swing_border_Border(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].titleBorder);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].tabTitleLabel.setBorder$javax_swing_border_Border(null);
});
})()
), Clazz.new_($I$(9,1),[this, {panel:panel}],P$.PageTView$4)));
var empty=$I$(35).createEmptyBorder$I$I$I$I(0, 2, 1, 2);
var line=$I$(35,"createLineBorder$java_awt_Color",[this.tabTitleLabel.getForeground$()]);
this.titleBorder=$I$(35).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(line, empty);
this.toolbarComponents.add$O(this.pageButton);
this.toolbarComponents.add$O(this.filler);
this.toolbarComponents.add$O(this.tabTitleLabel);
this.noTab=Clazz.new_([Clazz.new_($I$(1,1))],$I$(36,1).c$$java_awt_LayoutManager);
this.noTabLabel=Clazz.new_($I$(34,1));
this.noTabLabel.setBorder$javax_swing_border_Border($I$(35).createEmptyBorder$I$I$I$I(4, 4, 0, 0));
var font=Clazz.new_($I$(37,1)).getFont$();
this.noTabLabel.setFont$java_awt_Font(font);
this.noTab.add$java_awt_Component$O(this.noTabLabel, "North");
this.noTab.setBackground$java_awt_Color(this.getBackground$());
this.noTab.addMouseListener$java_awt_event_MouseListener(((P$.PageTView$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(2).isPopupTrigger$java_awt_event_InputEvent(e)) {
var popup=Clazz.new_($I$(29,1));
var helpItem=Clazz.new_([$I$(16).getString$S("Dialog.Button.Help") + "..."],$I$(30,1).c$$S);
helpItem.addActionListener$java_awt_event_ActionListener(((P$.PageTView$5$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$5$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].frame.showHelp$S$I("pageview", 0);
});
})()
), Clazz.new_(P$.PageTView$5$1.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(helpItem);
$I$(25,"setFonts$O$I",[popup, $I$(25).getLevel$()]);
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].noTab, e.getX$(), e.getY$());
}});
})()
), Clazz.new_($I$(9,1),[this, null],P$.PageTView$5)));
});

Clazz.newMeth(C$, 'refreshTabs$',  function () {
var prev=this.getSelectedTab$();
this.tabbedPane.removeAll$();
var refreshToolbar=false;
for (var tab, $tab = this.tabs.iterator$(); $tab.hasNext$()&&((tab=($tab.next$())),1);) {
tab.pageView=this;
tab.data.frame=this.frame;
tab.data.panelID=this.panelID;
tab.refreshView$Z(false);
this.tabbedPane.addTab$S$java_awt_Component(tab.data.title, tab);
refreshToolbar=refreshToolbar || tab.data.url != null  ;
}
if (prev != null  && this.tabbedPane.indexOfComponent$java_awt_Component(prev) > -1 ) {
this.tabbedPane.setSelectedComponent$java_awt_Component(prev);
}this.refreshTitle$();
if (this.panelID != null  && refreshToolbar ) {
this.frame.getToolBar$Integer$Z(this.panelID, true).refresh$S("PageTView.tabs");
}});

Clazz.newMeth(C$, 'refreshTitle$',  function () {
var tab=this.getSelectedTab$();
this.tabTitleLabel.setText$S(tab == null  ? null : tab.data.title);
});

Clazz.newMeth(C$, 'getPopup$org_opensourcephysics_cabrillo_tracker_PageTView_TabView',  function (tab) {
var popup=Clazz.new_($I$(29,1));
var s=null;
var panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
if (panel.isEnabled$S("pageView.edit")) {
var keyMask=$I$(38).getDefaultToolkit$().getMenuShortcutKeyMask$();
var renameItem=Clazz.new_([$I$(16).getString$S("TextTView.MenuItem.SetTitle")],$I$(30,1).c$$S);
renameItem.addActionListener$java_awt_event_ActionListener(((P$.PageTView$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].renameTab$org_opensourcephysics_cabrillo_tracker_PageTView_TabView.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], [this.$finals$.tab]);
});
})()
), Clazz.new_(P$.PageTView$6.$init$,[this, {tab:tab}])));
renameItem.setEnabled$Z(!this.locked);
popup.add$javax_swing_JMenuItem(renameItem);
var openItem=Clazz.new_([$I$(16).getString$S("TextTView.MenuItem.OpenHTML")],$I$(30,1).c$$S);
openItem.addActionListener$java_awt_event_ActionListener(((P$.PageTView$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var chooser=$I$(2).getChooser$();
chooser.setFileFilter$javax_swing_filechooser_FileFilter($I$(31).getHTMLFilter$());
chooser.showOpenDialog$java_awt_Component$Runnable$Runnable(this.$finals$.panel, ((P$.PageTView$7$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$7$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var file=this.$finals$.chooser.getSelectedFile$();
this.$finals$.tab.setUndoableText$S($I$(17).getAbsolutePath$java_io_File(file));
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].refresh$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], []);
$I$(2).chooserDir=$I$(17,"getDirectoryPath$S",[file.getPath$()]);
});
})()
), Clazz.new_(P$.PageTView$7$1.$init$,[this, {chooser:chooser,tab:this.$finals$.tab}])), null);
});
})()
), Clazz.new_(P$.PageTView$7.$init$,[this, {panel:panel,tab:tab}])));
openItem.setEnabled$Z(!this.locked);
popup.add$javax_swing_JMenuItem(openItem);
popup.addSeparator$();
s=$I$(16).getString$S("PageTView.MenuItem.ClosePage") + " \"";
s+=tab.data.title + "\"";
var closeItem=Clazz.new_($I$(30,1).c$$S,[s]);
closeItem.addActionListener$java_awt_event_ActionListener(((P$.PageTView$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].removeTab$org_opensourcephysics_cabrillo_tracker_PageTView_TabView.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], [this.$finals$.tab]);
});
})()
), Clazz.new_(P$.PageTView$8.$init$,[this, {tab:tab}])));
closeItem.setEnabled$Z(!this.locked);
popup.add$javax_swing_JMenuItem(closeItem);
if (tab.data.url != null ) {
s=$I$(16).getString$S("PageTView.MenuItem.OpenInBrowser");
var item=Clazz.new_($I$(30,1).c$$S,[s]);
item.addActionListener$java_awt_event_ActionListener(((P$.PageTView$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(6,"displayURL$S",[this.$finals$.tab.data.url.toExternalForm$()]);
});
})()
), Clazz.new_(P$.PageTView$9.$init$,[this, {tab:tab}])));
popup.add$javax_swing_JMenuItem(item);
}if (tab.undoManager.canUndoOrRedo$()) {
popup.addSeparator$();
if (tab.undoManager.canUndo$()) {
s=$I$(16).getString$S("TMenuBar.MenuItem.Undo") + " ";
s+=$I$(16).getString$S("TextTView.TextEdit.Description");
var undoItem=Clazz.new_($I$(30,1).c$$S,[s]);
undoItem.setAccelerator$javax_swing_KeyStroke($I$(39,"getKeyStroke$I$I",["Z".$c(), keyMask]));
undoItem.addActionListener$java_awt_event_ActionListener(((P$.PageTView$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.tab.undoManager.undo$();
});
})()
), Clazz.new_(P$.PageTView$10.$init$,[this, {tab:tab}])));
undoItem.setEnabled$Z(!this.locked);
popup.add$javax_swing_JMenuItem(undoItem);
}if (tab.undoManager.canRedo$()) {
s=$I$(16).getString$S("TMenuBar.MenuItem.Redo") + " ";
s+=$I$(16).getString$S("TextTView.TextEdit.Description");
var redoItem=Clazz.new_($I$(30,1).c$$S,[s]);
redoItem.setAccelerator$javax_swing_KeyStroke($I$(39,"getKeyStroke$I$I",["Y".$c(), keyMask]));
redoItem.addActionListener$java_awt_event_ActionListener(((P$.PageTView$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.$finals$.tab.undoManager.redo$();
});
})()
), Clazz.new_(P$.PageTView$11.$init$,[this, {tab:tab}])));
redoItem.setEnabled$Z(!this.locked);
popup.add$javax_swing_JMenuItem(redoItem);
}}popup.addSeparator$();
}s=$I$(16).getString$S("Dialog.Button.Help") + "...";
var helpItem=Clazz.new_($I$(30,1).c$$S,[s]);
helpItem.addActionListener$java_awt_event_ActionListener(((P$.PageTView$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].frame.showHelp$S$I("pageview", 0);
});
})()
), Clazz.new_(P$.PageTView$12.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(helpItem);
$I$(25,"setFonts$O$I",[popup, $I$(25).getLevel$()]);
return popup;
});

Clazz.newMeth(C$, 'getNameDialog$',  function () {
if (this.nameDialog == null ) {
this.nameField=Clazz.new_($I$(37,1).c$$I,[20]);
this.nameField.addActionListener$java_awt_event_ActionListener(((P$.PageTView$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var tab=this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].getSelectedTab$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], []);
tab.data.setTitle$S(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].nameField.getText$());
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].refresh$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], []);
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].nameDialog.setVisible$Z(false);
});
})()
), Clazz.new_(P$.PageTView$13.$init$,[this, null])));
this.nameField.addKeyListener$java_awt_event_KeyListener(((P$.PageTView$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].nameField.setBackground$java_awt_Color($I$(8).yellow);
});
})()
), Clazz.new_($I$(7,1),[this, null],P$.PageTView$14)));
var bar=Clazz.new_($I$(40,1));
bar.setFloatable$Z(false);
bar.add$java_awt_Component(this.nameField);
var contentPane=Clazz.new_([Clazz.new_($I$(1,1))],$I$(36,1).c$$java_awt_LayoutManager);
contentPane.add$java_awt_Component$O(bar, "Center");
this.nameDialog=Clazz.new_([$I$(42).getFrameForComponent$java_awt_Component(this), true],$I$(41,1).c$$java_awt_Frame$Z);
this.nameDialog.addWindowListener$java_awt_event_WindowListener(((P$.PageTView$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
var tab=this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].getSelectedTab$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], []);
tab.data.setTitle$S(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].nameField.getText$());
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'].refresh$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView'], []);
});
})()
), Clazz.new_($I$(43,1),[this, null],P$.PageTView$15)));
this.nameDialog.setContentPane$java_awt_Container(contentPane);
this.nameDialog.pack$();
var dim=$I$(38).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.nameDialog.getBounds$().width)/2|0);
var y=((dim.height - this.nameDialog.getBounds$().height)/2|0);
this.nameDialog.setLocation$I$I(x, y);
}$I$(25,"setFonts$O$I",[this.nameDialog, $I$(25).getLevel$()]);
return this.nameDialog;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(44,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.PAGEVIEW_ICON=$I$(22).getResourceIcon$S$Z("html.gif", true);
{
$I$(17,"setLoader$Class$org_opensourcephysics_controls_XML_ObjectLoader",[Clazz.getClass($I$(19)), Clazz.new_($I$(23,1))]);
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.PageTView, "TabView", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['data','org.opensourcephysics.cabrillo.tracker.PageTView.TabData','displayPane','javax.swing.JEditorPane','+editorPane','scroller','javax.swing.JScrollPane','pageView','org.opensourcephysics.cabrillo.tracker.PageTView','undoSupport','javax.swing.undo.UndoableEditSupport','undoManager','javax.swing.undo.UndoManager','hyperlinkListener','javax.swing.event.HyperlinkListener']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_PageTView_TabData',  function (tab) {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[Clazz.new_($I$(1,1))]);C$.$init$.apply(this);
this.data=tab;
this.displayPane=Clazz.new_($I$(4,1),[this, null],P$.PageTView$TabView$1TextView);
this.displayPane.setEditable$Z(false);
this.hyperlinkListener=((P$.PageTView$TabView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$TabView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.HyperlinkListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'hyperlinkUpdate$javax_swing_event_HyperlinkEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].data.hyperlinksEnabled && e.getEventType$() === $I$(5).ACTIVATED  ) {
$I$(6,"displayURL$S",[e.getURL$().toString()]);
}});
})()
), Clazz.new_(P$.PageTView$TabView$1.$init$,[this, null]));
this.displayPane.addHyperlinkListener$javax_swing_event_HyperlinkListener(this.hyperlinkListener);
this.displayPane.addKeyListener$java_awt_event_KeyListener(((P$.PageTView$TabView$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$TabView$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 90 && e.isControlDown$() ) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].undoManager.canUndo$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].undoManager.undo$();
}} else if (e.getKeyCode$() == 89 && e.isControlDown$() ) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].undoManager.canRedo$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].undoManager.redo$();
}}});
})()
), Clazz.new_($I$(7,1),[this, null],P$.PageTView$TabView$2)));
this.displayPane.addMouseListener$java_awt_event_MouseListener(((P$.PageTView$TabView$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$TabView$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(2).isPopupTrigger$java_awt_event_InputEvent(e)) {
var popup=this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].pageView.getPopup$org_opensourcephysics_cabrillo_tracker_PageTView_TabView(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].pageView.getSelectedTab$());
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].displayPane, e.getX$(), e.getY$());
} else if (e.getClickCount$() == 2 && !this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].pageView.locked  && this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].pageView.frame.getTrackerPanelForID$Integer(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].pageView.panelID).isEnabled$S("pageView.edit") ) {
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].editorPane.setBackground$java_awt_Color($I$(8).white);
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].refreshView$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'], [true]);
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].editorPane.selectAll$();
}});
})()
), Clazz.new_($I$(9,1),[this, null],P$.PageTView$TabView$3)));
this.editorPane=Clazz.new_($I$(4,1),[this, null],P$.PageTView$TabView$1TextView);
this.editorPane.setContentType$S("text/plain");
this.editorPane.setEditable$Z(true);
this.editorPane.addMouseListener$java_awt_event_MouseListener(((P$.PageTView$TabView$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$TabView$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(2).isPopupTrigger$java_awt_event_InputEvent(e)) {
var popup=this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].pageView.getPopup$org_opensourcephysics_cabrillo_tracker_PageTView_TabView(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].pageView.getSelectedTab$());
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].editorPane, e.getX$(), e.getY$());
}});
})()
), Clazz.new_($I$(9,1),[this, null],P$.PageTView$TabView$4)));
this.editorPane.addFocusListener$java_awt_event_FocusListener(((P$.PageTView$TabView$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$TabView$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].editorPane.getBackground$().equals$O($I$(8).yellow)) {
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].setUndoableText$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'], [this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].editorPane.getText$()]);
}this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].refreshView$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'], [false]);
});
})()
), Clazz.new_($I$(10,1),[this, null],P$.PageTView$TabView$5)));
this.editorPane.addKeyListener$java_awt_event_KeyListener(((P$.PageTView$TabView$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "PageTView$TabView$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 90 && e.isControlDown$() ) {
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].setUndoableText$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'], [this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].editorPane.getText$()]);
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].refreshView$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'], [false]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].undoManager.canUndo$()) {
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].undoManager.undo$();
}} else if (e.getKeyCode$() == 10 && e.isShiftDown$() ) {
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].setUndoableText$S.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'], [this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].editorPane.getText$()]);
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].refreshView$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'], [false]);
} else {
this.b$['org.opensourcephysics.cabrillo.tracker.PageTView.TabView'].editorPane.setBackground$java_awt_Color($I$(8).yellow);
}});
})()
), Clazz.new_($I$(7,1),[this, null],P$.PageTView$TabView$6)));
this.scroller=Clazz.new_($I$(11,1).c$$java_awt_Component,[this.displayPane]);
this.add$java_awt_Component$O(this.scroller, "Center");
this.refreshView$Z(false);
this.undoManager=Clazz.new_($I$(12,1));
this.undoSupport=Clazz.new_($I$(13,1));
this.undoSupport.addUndoableEditListener$javax_swing_event_UndoableEditListener(this.undoManager);
}, 1);

Clazz.newMeth(C$, 'refreshView$Z',  function (editing) {
if (editing) {
this.scroller.setViewportView$java_awt_Component(this.editorPane);
this.editorPane.setText$S(this.data.text);
this.editorPane.requestFocusInWindow$();
} else {
this.editorPane.setBackground$java_awt_Color($I$(8).white);
this.scroller.setViewportView$java_awt_Component(this.displayPane);
if (this.data.getURL$() != null ) {
try {
this.displayPane.setContentType$S("text/html");
this.displayPane.setPage$java_net_URL(this.data.url);
if (this.data.url.getRef$() != null ) {
this.displayPane.scrollToReference$S(this.data.url.getRef$());
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.displayPane.setContentType$S("text/plain");
this.displayPane.setText$S(this.data.text);
} else {
throw e;
}
}
} else {
this.displayPane.setContentType$S("text/plain");
this.displayPane.setText$S(this.data.text);
}this.displayPane.requestFocusInWindow$();
}this.revalidate$();
$I$(14).repaintT$java_awt_Component(this);
});

Clazz.newMeth(C$, 'setUndoableText$S',  function (text) {
if (text == null  || text.equals$O(this.data.text) ) return;
var edit=Clazz.new_($I$(15,1).c$$org_opensourcephysics_cabrillo_tracker_PageTView_TabView$S$S,[this, text, this.data.text]);
this.undoSupport.postEdit$javax_swing_undo_UndoableEdit(edit);
this.data.setText$S(text);
});
;
(function(){/*l*/var C$=Clazz.newClass(P$, "PageTView$TabView$1TextView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JTextPane', null, 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
if ($I$(2).antiAliasText) {
var g2=g;
var rh=g2.getRenderingHints$();
rh.put$O$O($I$(3).KEY_TEXT_ANTIALIASING, $I$(3).VALUE_TEXT_ANTIALIAS_ON);
rh.put$O$O($I$(3).KEY_ANTIALIASING, $I$(3).VALUE_ANTIALIAS_ON);
}C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PageTView, "TabData", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hyperlinksEnabled=true;
},1);

C$.$fields$=[['Z',['hyperlinksEnabled'],'S',['title','text'],'O',['panelID','Integer','frame','org.opensourcephysics.cabrillo.tracker.TFrame','url','java.net.URL']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.text=$I$(16).getString$S("TextTView.NewTab.Text1");
this.text+=$I$(17).NEW_LINE + $I$(17).NEW_LINE;
this.text+=$I$(16).getString$S("TextTView.NewTab.Text2");
this.title=$I$(16).getString$S("TextTView.NewTab.Title");
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (title, text) {
;C$.$init$.apply(this);
this.title=title;
this.setText$S(text);
}, 1);

Clazz.newMeth(C$, 'setTitle$S',  function (title) {
if (title == null ) return;
this.title=title;
if (this.panelID != null ) {
var panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
panel.changed=true;
panel.getToolBar$Z(true).refresh$S("PageTView.title");
}});

Clazz.newMeth(C$, 'setText$S',  function (text) {
if (text == null ) return;
this.text=text;
p$1.setURL$S.apply(this, [text]);
});

Clazz.newMeth(C$, 'getURL$',  function () {
if (this.url == null ) {
p$1.setURL$S.apply(this, [this.text]);
}return this.url;
});

Clazz.newMeth(C$, 'setURL$S',  function (path) {
this.url=null;
var res=$I$(18).getResource$S(path);
if ((res != null ) && (res.getURL$() != null ) ) {
this.url=res.getURL$();
try {
var $in=$I$(18).openStream$java_net_URL(this.url);
$in.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.url=null;
} else {
throw ex;
}
}
}if (this.panelID != null ) {
var panel=this.frame.getTrackerPanelForID$Integer(this.panelID);
panel.changed=true;
panel.getToolBar$Z(true).refresh$S("PageTView.url");
}}, p$1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PageTView, "TextEdit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['text','prev'],'O',['tab','org.opensourcephysics.cabrillo.tracker.PageTView.TabView']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_PageTView_TabView$S$S',  function (tab, newText, prevText) {
Clazz.super_(C$, this);
this.tab=tab;
this.text=newText;
this.prev=prevText;
}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
this.tab.data.setText$S(this.prev);
this.tab.refreshView$Z(false);
});

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
this.tab.data.setText$S(this.text);
this.tab.refreshView$Z(false);
});

Clazz.newMeth(C$, 'getPresentationName$',  function () {
return $I$(16).getString$S("TextTView.TextEdit.Description");
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PageTView, "TabLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var tab=obj;
var data=tab.data;
control.setValue$S$O("title", data.title);
if (data.url == null ) {
control.setValue$S$O("text", data.text);
} else if (data.url.getProtocol$().equals$O("file")) {
var file=data.frame.getTrackerPanelForID$Integer(data.panelID).getDataFile$();
if (file != null ) {
var path=data.url.getFile$();
while (path.startsWith$S("/")){
path=path.substring$I(1);
}
var base=$I$(17,"getDirectoryPath$S",[$I$(17).getAbsolutePath$java_io_File(file)]);
control.setValue$S$O("text", $I$(17).getPathRelativeTo$S$S(path, base));
} else {
control.setValue$S$O("text", data.url.toExternalForm$());
}} else {
control.setValue$S$O("text", data.url.toExternalForm$());
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var title=control.getString$S("title");
var text=control.getString$S("text");
return Clazz.new_([Clazz.new_($I$(20,1).c$$S$S,[title, text])],$I$(19,1).c$$org_opensourcephysics_cabrillo_tracker_PageTView_TabData);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
return obj;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PageTView, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var view=obj;
control.setValue$S$O("tabs", view.tabs);
control.setValue$S$Z("locked", view.locked);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return null;
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var view=obj;
view.locked=control.getBoolean$S("locked");
var tabs=Clazz.getClass($I$(21)).cast$O(control.getObject$S("tabs"));
if (tabs != null ) {
var it=tabs.iterator$();
while (it.hasNext$()){
view.addTab$org_opensourcephysics_cabrillo_tracker_PageTView_TabView(it.next$());
}
}return obj;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:06 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
