(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'org.opensourcephysics.tools.ToolsRes','org.opensourcephysics.tools.FontSizer','javax.swing.BorderFactory','java.awt.event.MouseAdapter','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.tools.LibraryBrowser','java.util.ArrayList','java.awt.Dimension','javax.swing.JButton','javax.swing.AbstractListModel','javax.swing.JList',['org.opensourcephysics.tools.LibraryTreePanel','.EntryField'],'java.awt.event.FocusAdapter','java.awt.Color','javax.swing.JLabel','org.opensourcephysics.display.GUIUtils','org.opensourcephysics.controls.XML','java.io.File','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.tools.LibraryCollection','org.opensourcephysics.tools.Library','javax.swing.JToolBar','javax.swing.Box','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JScrollPane','javax.swing.JTabbedPane','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.tools.LibraryTreePanel',['org.opensourcephysics.tools.LibraryManager','.SearchCheckBox'],['org.opensourcephysics.tools.LibraryManager','.DeleteButton'],['org.opensourcephysics.tools.LibraryManager','.ClearHostButton']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LibraryManager", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog');
C$.$classes$=[['SearchCheckBox',4],['DeleteButton',4],['ClearHostButton',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.checkboxes=Clazz.new_($I$(7,1));
this.defaultSize=Clazz.new_($I$(8,1).c$$I$I,[400, 300]);
},1);

C$.$fields$=[['O',['browser','org.opensourcephysics.tools.LibraryBrowser','library','org.opensourcephysics.tools.Library','tabbedPane','javax.swing.JTabbedPane','collectionsPanel','javax.swing.JPanel','+importsPanel','+searchPanel','+cachePanel','+recentPanel','collectionList','javax.swing.JList','+guestList','nameField','javax.swing.JTextField','+pathField','nameAction','java.awt.event.ActionListener','+pathAction','okButton','javax.swing.JButton','+setCacheButton','+moveUpButton','+moveDownButton','+addButton','+removeButton','+allButton','+noneButton','+clearCacheButton','libraryButtonbar','javax.swing.JToolBar','nameBox','javax.swing.Box','+pathBox','+libraryEditBox','+searchBox','+cacheBox','nameLabel','javax.swing.JLabel','+pathLabel','sharedFont','java.awt.Font','collectionsTitleBorder','javax.swing.border.TitledBorder','+importsTitleBorder','+searchTitleBorder','+cacheTitleBorder','checkboxes','java.util.ArrayList','defaultSize','java.awt.Dimension','listButtonBorder','javax.swing.border.Border']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_LibraryBrowser$javax_swing_JFrame',  function (browser, frame) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[frame, true]);C$.$init$.apply(this);
this.browser=browser;
this.library=browser.library;
this.setDefaultCloseOperation$I(1);
this.createGUI$();
var dim=Clazz.new_($I$(8,1).c$$java_awt_Dimension,[this.defaultSize]);
var factor=1 + $I$(2).getLevel$() * 0.25;
dim.width=((dim.width * factor)|0);
dim.height=((dim.height * factor)|0);
this.setSize$java_awt_Dimension(dim);
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_LibraryBrowser$javax_swing_JDialog',  function (browser, dialog) {
;C$.superclazz.c$$java_awt_Dialog$Z.apply(this,[dialog, true]);C$.$init$.apply(this);
this.browser=browser;
this.library=browser.library;
this.setDefaultCloseOperation$I(1);
this.createGUI$();
var dim=Clazz.new_($I$(8,1).c$$java_awt_Dimension,[this.defaultSize]);
var factor=1 + $I$(2).getLevel$() * 0.25;
dim.width=((dim.width * factor)|0);
dim.height=((dim.height * factor)|0);
this.setSize$java_awt_Dimension(dim);
}, 1);

Clazz.newMeth(C$, 'setVisible$Z',  function (vis) {
if (vis) {
this.refreshSearchTab$();
this.refreshCacheTab$();
} else {
this.library.noSearchSet.clear$();
for (var next, $next = this.checkboxes.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (!next.isSelected$()) this.library.noSearchSet.add$O(next.urlPath);
}
}C$.superclazz.prototype.setVisible$Z.apply(this, [vis]);
});

Clazz.newMeth(C$, 'createGUI$',  function () {
var throwaway=Clazz.new_($I$(9,1).c$$S,["by"]);
throwaway.setBorder$javax_swing_border_Border($I$(6).buttonBorder);
var h=throwaway.getPreferredSize$().height;
this.sharedFont=throwaway.getFont$();
var collectionListModel=((P$.LibraryManager$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryManager$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractListModel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getSize$',  function () {
return this.b$['org.opensourcephysics.tools.LibraryManager'].library.pathList.size$();
});

Clazz.newMeth(C$, 'getElementAt$I',  function (i) {
var path=this.b$['org.opensourcephysics.tools.LibraryManager'].library.pathList.get$I(i);
return this.b$['org.opensourcephysics.tools.LibraryManager'].library.pathToNameMap.get$O(path);
});
})()
), Clazz.new_($I$(10,1),[this, null],P$.LibraryManager$1));
this.collectionList=Clazz.new_($I$(11,1).c$$javax_swing_ListModel,[collectionListModel]);
this.collectionList.addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.LibraryManager$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryManager$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryManager'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LibraryManager'], []);
});
})()
), Clazz.new_(P$.LibraryManager$2.$init$,[this, null])));
this.collectionList.setFixedCellHeight$I(h);
this.collectionList.setFont$java_awt_Font(this.sharedFont);
this.collectionList.setSelectionMode$I(0);
var importListModel=((P$.LibraryManager$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryManager$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractListModel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getSize$',  function () {
return this.b$['org.opensourcephysics.tools.LibraryManager'].library.importedPathList.size$();
});

Clazz.newMeth(C$, 'getElementAt$I',  function (i) {
var path=this.b$['org.opensourcephysics.tools.LibraryManager'].library.importedPathList.get$I(i);
return this.b$['org.opensourcephysics.tools.LibraryManager'].library.importedPathToLibraryMap.get$O(path).getName$();
});
})()
), Clazz.new_($I$(10,1),[this, null],P$.LibraryManager$3));
this.guestList=Clazz.new_($I$(11,1).c$$javax_swing_ListModel,[importListModel]);
this.guestList.addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.LibraryManager$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryManager$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryManager'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LibraryManager'], []);
});
})()
), Clazz.new_(P$.LibraryManager$4.$init$,[this, null])));
this.guestList.setFont$java_awt_Font(this.sharedFont);
this.guestList.setFixedCellHeight$I(h);
this.guestList.setSelectionMode$I(0);
this.nameAction=((P$.LibraryManager$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryManager$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var path=this.b$['org.opensourcephysics.tools.LibraryManager'].pathField.getText$();
var prev=this.b$['org.opensourcephysics.tools.LibraryManager'].library.pathToNameMap.get$O(path);
var input=this.b$['org.opensourcephysics.tools.LibraryManager'].nameField.getText$().trim$();
if (input == null  || input.equals$O("")  || input.equals$O(prev) ) {
return;
}this.b$['org.opensourcephysics.tools.LibraryManager'].library.renameCollection$S$S(path, input);
this.b$['org.opensourcephysics.tools.LibraryManager'].browser.refreshCollectionsMenu$();
this.b$['org.opensourcephysics.tools.LibraryManager'].collectionList.repaint$();
this.b$['org.opensourcephysics.tools.LibraryManager'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LibraryManager'], []);
});
})()
), Clazz.new_(P$.LibraryManager$5.$init$,[this, null]));
this.nameField=Clazz.new_($I$(12,1));
this.nameField.addActionListener$java_awt_event_ActionListener(this.nameAction);
this.nameField.addFocusListener$java_awt_event_FocusListener(((P$.LibraryManager$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryManager$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryManager'].nameField.selectAll$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryManager'].nameAction.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_($I$(13,1),[this, null],P$.LibraryManager$6)));
this.nameField.setBackground$java_awt_Color($I$(14).white);
this.nameLabel=Clazz.new_($I$(15,1));
this.nameLabel.setFont$java_awt_Font(this.sharedFont);
this.nameLabel.setBorder$javax_swing_border_Border($I$(3).createEmptyBorder$I$I$I$I(0, 4, 0, 2));
this.nameLabel.setHorizontalAlignment$I(11);
this.pathField=Clazz.new_($I$(12,1));
this.pathField.setEditable$Z(false);
this.pathField.setBackground$java_awt_Color($I$(14).white);
this.pathLabel=Clazz.new_($I$(15,1));
this.pathLabel.setFont$java_awt_Font(this.sharedFont);
this.pathLabel.setBorder$javax_swing_border_Border($I$(3).createEmptyBorder$I$I$I$I(0, 4, 0, 2));
this.pathLabel.setHorizontalAlignment$I(11);
this.okButton=Clazz.new_($I$(9,1));
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.LibraryManager$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryManager$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LibraryManager'].setVisible$Z.apply(this.b$['org.opensourcephysics.tools.LibraryManager'], [false]);
});
})()
), Clazz.new_(P$.LibraryManager$7.$init$,[this, null])));
this.moveUpButton=Clazz.new_($I$(9,1));
this.moveUpButton.setOpaque$Z(false);
this.moveUpButton.setBorder$javax_swing_border_Border($I$(6).buttonBorder);
this.moveUpButton.addActionListener$java_awt_event_ActionListener(((P$.LibraryManager$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryManager$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var isImports=this.b$['org.opensourcephysics.tools.LibraryManager'].tabbedPane.getSelectedComponent$() === this.b$['org.opensourcephysics.tools.LibraryManager'].importsPanel ;
var list=isImports ? this.b$['org.opensourcephysics.tools.LibraryManager'].guestList : this.b$['org.opensourcephysics.tools.LibraryManager'].collectionList;
var paths=isImports ? this.b$['org.opensourcephysics.tools.LibraryManager'].library.importedPathList : this.b$['org.opensourcephysics.tools.LibraryManager'].library.pathList;
var i=list.getSelectedIndex$();
var path=paths.get$I(i);
paths.remove$O(path);
paths.add$I$O(i - 1, path);
list.setSelectedIndex$I(i - 1);
this.b$['org.opensourcephysics.tools.LibraryManager'].browser.refreshCollectionsMenu$();
this.b$['org.opensourcephysics.tools.LibraryManager'].browser.refreshGUI$();
});
})()
), Clazz.new_(P$.LibraryManager$8.$init$,[this, null])));
this.moveDownButton=Clazz.new_($I$(9,1));
this.moveDownButton.setOpaque$Z(false);
this.moveDownButton.setBorder$javax_swing_border_Border($I$(6).buttonBorder);
this.moveDownButton.addActionListener$java_awt_event_ActionListener(((P$.LibraryManager$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryManager$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var isImports=this.b$['org.opensourcephysics.tools.LibraryManager'].tabbedPane.getSelectedComponent$() === this.b$['org.opensourcephysics.tools.LibraryManager'].importsPanel ;
var list=isImports ? this.b$['org.opensourcephysics.tools.LibraryManager'].guestList : this.b$['org.opensourcephysics.tools.LibraryManager'].collectionList;
var paths=isImports ? this.b$['org.opensourcephysics.tools.LibraryManager'].library.importedPathList : this.b$['org.opensourcephysics.tools.LibraryManager'].library.pathList;
var i=list.getSelectedIndex$();
var path=paths.get$I(i);
paths.remove$O(path);
paths.add$I$O(i + 1, path);
list.setSelectedIndex$I(i + 1);
this.b$['org.opensourcephysics.tools.LibraryManager'].browser.refreshCollectionsMenu$();
this.b$['org.opensourcephysics.tools.LibraryManager'].browser.refreshGUI$();
});
})()
), Clazz.new_(P$.LibraryManager$9.$init$,[this, null])));
this.addButton=Clazz.new_($I$(9,1));
this.addButton.setOpaque$Z(false);
this.addButton.setBorder$javax_swing_border_Border($I$(6).buttonBorder);
this.addButton.addActionListener$java_awt_event_ActionListener(((P$.LibraryManager$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryManager$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var imported=this.b$['org.opensourcephysics.tools.LibraryManager'].tabbedPane.getSelectedComponent$() === this.b$['org.opensourcephysics.tools.LibraryManager'].importsPanel ;
var message=imported ? $I$(1).getString$S("LibraryBrowser.Dialog.AddLibrary.Message") : $I$(1).getString$S("LibraryBrowser.Dialog.AddCollection.Message");
var title=imported ? $I$(1).getString$S("LibraryBrowser.Dialog.AddLibrary.Title") : $I$(1).getString$S("LibraryBrowser.Dialog.AddCollection.Title");
var input=$I$(16).showInputDialog$java_awt_Component$S$S$I$S(this.b$['org.opensourcephysics.tools.LibraryManager'].browser, message, title, 3, null);
if (input == null  || input.equals$O("") ) {
return;
}var path=input;
path=$I$(17).forwardSlash$S(path);
path=$I$(5).getNonURIPath$S(path);
if (this.b$['org.opensourcephysics.tools.LibraryManager'].tabbedPane.getSelectedComponent$() === this.b$['org.opensourcephysics.tools.LibraryManager'].collectionsPanel ) {
var isResource=false;
if (!$I$(5).isHTTP$S(path) && Clazz.new_($I$(18,1).c$$S,[path]).isDirectory$() ) {
isResource=true;
} else {
var control=Clazz.new_($I$(19,1).c$$S,[path]);
if (!control.failedToRead$() && control.getObjectClass$() === Clazz.getClass($I$(20))  ) {
isResource=true;
}}if (isResource) {
System.out.println$S("LM OK " + path);
this.b$['org.opensourcephysics.tools.LibraryManager'].browser.addToCollections$S(path);
var model=this.b$['org.opensourcephysics.tools.LibraryManager'].collectionList.getModel$();
this.b$['org.opensourcephysics.tools.LibraryManager'].collectionList.setModel$javax_swing_ListModel(model);
this.b$['org.opensourcephysics.tools.LibraryManager'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LibraryManager'], []);
this.b$['org.opensourcephysics.tools.LibraryManager'].collectionList.repaint$();
this.b$['org.opensourcephysics.tools.LibraryManager'].collectionList.setSelectedIndex$I(this.b$['org.opensourcephysics.tools.LibraryManager'].library.pathList.size$() - 1);
this.b$['org.opensourcephysics.tools.LibraryManager'].browser.refreshCollectionsMenu$();
return;
}}if (this.b$['org.opensourcephysics.tools.LibraryManager'].tabbedPane.getSelectedComponent$() === this.b$['org.opensourcephysics.tools.LibraryManager'].importsPanel ) {
var isLibrary=false;
var control=Clazz.new_($I$(19,1).c$$S,[path]);
if (!control.failedToRead$() && control.getObjectClass$() === Clazz.getClass($I$(21))  ) {
isLibrary=true;
}if (isLibrary) {
var newLibrary=Clazz.new_($I$(21,1));
newLibrary.browser=this.b$['org.opensourcephysics.tools.LibraryManager'].browser;
control.loadObject$O(newLibrary);
if (this.b$['org.opensourcephysics.tools.LibraryManager'].library.importLibrary$S$org_opensourcephysics_tools_Library(path, newLibrary)) {
var model=this.b$['org.opensourcephysics.tools.LibraryManager'].guestList.getModel$();
this.b$['org.opensourcephysics.tools.LibraryManager'].guestList.setModel$javax_swing_ListModel(model);
this.b$['org.opensourcephysics.tools.LibraryManager'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LibraryManager'], []);
this.b$['org.opensourcephysics.tools.LibraryManager'].guestList.repaint$();
this.b$['org.opensourcephysics.tools.LibraryManager'].guestList.setSelectedIndex$I(this.b$['org.opensourcephysics.tools.LibraryManager'].library.importedPathList.size$() - 1);
this.b$['org.opensourcephysics.tools.LibraryManager'].browser.refreshCollectionsMenu$();
}return;
}}this.b$['org.opensourcephysics.tools.LibraryManager'].warnNotFound$S.apply(this.b$['org.opensourcephysics.tools.LibraryManager'], [path]);
});
})()
), Clazz.new_(P$.LibraryManager$10.$init$,[this, null])));
this.removeButton=Clazz.new_($I$(9,1));
this.removeButton.setOpaque$Z(false);
this.removeButton.setBorder$javax_swing_border_Border($I$(6).buttonBorder);
this.removeButton.addActionListener$java_awt_event_ActionListener(((P$.LibraryManager$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryManager$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var isImports=this.b$['org.opensourcephysics.tools.LibraryManager'].tabbedPane.getSelectedComponent$() === this.b$['org.opensourcephysics.tools.LibraryManager'].importsPanel ;
var list=isImports ? this.b$['org.opensourcephysics.tools.LibraryManager'].guestList : this.b$['org.opensourcephysics.tools.LibraryManager'].collectionList;
var paths=isImports ? this.b$['org.opensourcephysics.tools.LibraryManager'].library.importedPathList : this.b$['org.opensourcephysics.tools.LibraryManager'].library.pathList;
var i=list.getSelectedIndex$();
var path=paths.get$I(i);
paths.remove$O(path);
if (isImports) this.b$['org.opensourcephysics.tools.LibraryManager'].library.importedPathToLibraryMap.remove$O(path);
 else this.b$['org.opensourcephysics.tools.LibraryManager'].library.pathToNameMap.remove$O(path);
list.repaint$();
if (i >= paths.size$()) {
list.setSelectedIndex$I(paths.size$() - 1);
}this.b$['org.opensourcephysics.tools.LibraryManager'].browser.refreshCollectionsMenu$();
this.b$['org.opensourcephysics.tools.LibraryManager'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LibraryManager'], []);
this.b$['org.opensourcephysics.tools.LibraryManager'].browser.refreshGUI$();
});
})()
), Clazz.new_(P$.LibraryManager$11.$init$,[this, null])));
this.allButton=Clazz.new_($I$(9,1));
this.allButton.setOpaque$Z(false);
this.allButton.setBorder$javax_swing_border_Border($I$(6).buttonBorder);
this.allButton.addActionListener$java_awt_event_ActionListener(((P$.LibraryManager$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryManager$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
for (var next, $next = this.b$['org.opensourcephysics.tools.LibraryManager'].checkboxes.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.setSelected$Z(true);
}
});
})()
), Clazz.new_(P$.LibraryManager$12.$init$,[this, null])));
this.noneButton=Clazz.new_($I$(9,1));
this.noneButton.setOpaque$Z(false);
this.noneButton.setBorder$javax_swing_border_Border($I$(6).buttonBorder);
this.noneButton.addActionListener$java_awt_event_ActionListener(((P$.LibraryManager$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryManager$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
for (var next, $next = this.b$['org.opensourcephysics.tools.LibraryManager'].checkboxes.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.setSelected$Z(false);
}
});
})()
), Clazz.new_(P$.LibraryManager$13.$init$,[this, null])));
this.clearCacheButton=Clazz.new_($I$(9,1));
this.clearCacheButton.setOpaque$Z(false);
this.clearCacheButton.setBorder$javax_swing_border_Border($I$(6).buttonBorder);
this.clearCacheButton.addActionListener$java_awt_event_ActionListener(((P$.LibraryManager$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryManager$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(6).clearCache$();
this.b$['org.opensourcephysics.tools.LibraryManager'].refreshCacheTab$.apply(this.b$['org.opensourcephysics.tools.LibraryManager'], []);
this.b$['org.opensourcephysics.tools.LibraryManager'].tabbedPane.repaint$();
});
})()
), Clazz.new_(P$.LibraryManager$14.$init$,[this, null])));
this.setCacheButton=Clazz.new_($I$(9,1));
this.setCacheButton.setOpaque$Z(false);
this.setCacheButton.setBorder$javax_swing_border_Border($I$(6).buttonBorder);
this.setCacheButton.addActionListener$java_awt_event_ActionListener(((P$.LibraryManager$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryManager$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(5,"setOSPCache$java_io_File",[$I$(5).chooseOSPCache$java_awt_Component(this.b$['org.opensourcephysics.tools.LibraryManager'].browser)]);
this.b$['org.opensourcephysics.tools.LibraryManager'].refreshCacheTab$.apply(this.b$['org.opensourcephysics.tools.LibraryManager'], []);
});
})()
), Clazz.new_(P$.LibraryManager$15.$init$,[this, null])));
var emptyInside=$I$(3).createEmptyBorder$I$I$I$I(1, 2, 1, 2);
var etched=$I$(3).createEtchedBorder$();
var buttonbarBorder=$I$(3).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, emptyInside);
this.libraryButtonbar=Clazz.new_($I$(22,1));
this.libraryButtonbar.setFloatable$Z(false);
this.libraryButtonbar.setBorder$javax_swing_border_Border(buttonbarBorder);
this.libraryButtonbar.add$java_awt_Component(this.moveUpButton);
this.libraryButtonbar.add$java_awt_Component(this.moveDownButton);
this.libraryButtonbar.add$java_awt_Component(this.addButton);
this.libraryButtonbar.add$java_awt_Component(this.removeButton);
this.nameBox=$I$(23).createHorizontalBox$();
this.nameBox.setBorder$javax_swing_border_Border($I$(3).createEmptyBorder$I$I$I$I(0, 0, 2, 4));
this.nameBox.add$java_awt_Component(this.nameLabel);
this.nameBox.add$java_awt_Component(this.nameField);
this.pathBox=$I$(23).createHorizontalBox$();
this.pathBox.setBorder$javax_swing_border_Border($I$(3).createEmptyBorder$I$I$I$I(0, 0, 2, 4));
this.pathBox.add$java_awt_Component(this.pathLabel);
this.pathBox.add$java_awt_Component(this.pathField);
this.libraryEditBox=$I$(23).createVerticalBox$();
this.libraryEditBox.add$java_awt_Component(this.nameBox);
this.libraryEditBox.add$java_awt_Component(this.pathBox);
this.collectionsPanel=Clazz.new_([Clazz.new_($I$(25,1))],$I$(24,1).c$$java_awt_LayoutManager);
var scroller=Clazz.new_($I$(26,1).c$$java_awt_Component,[this.collectionList]);
scroller.setViewportBorder$javax_swing_border_Border(etched);
scroller.getVerticalScrollBar$().setUnitIncrement$I(8);
this.collectionsTitleBorder=$I$(3).createTitledBorder$S("");
scroller.setBorder$javax_swing_border_Border(this.collectionsTitleBorder);
this.collectionsPanel.add$java_awt_Component$O(scroller, "Center");
this.collectionsPanel.add$java_awt_Component$O(this.libraryEditBox, "South");
this.collectionsPanel.add$java_awt_Component$O(this.libraryButtonbar, "North");
this.importsPanel=Clazz.new_([Clazz.new_($I$(25,1))],$I$(24,1).c$$java_awt_LayoutManager);
scroller=Clazz.new_($I$(26,1).c$$java_awt_Component,[this.guestList]);
scroller.setViewportBorder$javax_swing_border_Border(etched);
scroller.getVerticalScrollBar$().setUnitIncrement$I(8);
this.importsTitleBorder=$I$(3).createTitledBorder$S("");
scroller.setBorder$javax_swing_border_Border(this.importsTitleBorder);
this.importsPanel.add$java_awt_Component$O(scroller, "Center");
this.searchPanel=Clazz.new_([Clazz.new_($I$(25,1))],$I$(24,1).c$$java_awt_LayoutManager);
this.searchBox=$I$(23).createVerticalBox$();
this.searchBox.setBackground$java_awt_Color($I$(14).white);
this.searchBox.setOpaque$Z(true);
this.refreshSearchTab$();
scroller=Clazz.new_($I$(26,1).c$$java_awt_Component,[this.searchBox]);
scroller.setViewportBorder$javax_swing_border_Border(etched);
scroller.getVerticalScrollBar$().setUnitIncrement$I(8);
this.searchTitleBorder=$I$(3).createTitledBorder$S("");
scroller.setBorder$javax_swing_border_Border(this.searchTitleBorder);
this.searchPanel.add$java_awt_Component$O(scroller, "Center");
var searchButtonbar=Clazz.new_($I$(22,1));
searchButtonbar.setFloatable$Z(false);
searchButtonbar.setBorder$javax_swing_border_Border(buttonbarBorder);
searchButtonbar.add$java_awt_Component(this.allButton);
searchButtonbar.add$java_awt_Component(this.noneButton);
this.searchPanel.add$java_awt_Component$O(searchButtonbar, "North");
this.cachePanel=Clazz.new_([Clazz.new_($I$(25,1))],$I$(24,1).c$$java_awt_LayoutManager);
this.cacheBox=$I$(23).createVerticalBox$();
this.cacheBox.setBackground$java_awt_Color($I$(14).white);
this.cacheBox.setOpaque$Z(true);
this.refreshCacheTab$();
scroller=Clazz.new_($I$(26,1).c$$java_awt_Component,[this.cacheBox]);
scroller.setViewportBorder$javax_swing_border_Border(etched);
scroller.getVerticalScrollBar$().setUnitIncrement$I(8);
this.cacheTitleBorder=$I$(3).createTitledBorder$S("");
scroller.setBorder$javax_swing_border_Border(this.cacheTitleBorder);
this.cachePanel.add$java_awt_Component$O(scroller, "Center");
var cacheButtonbar=Clazz.new_($I$(22,1));
cacheButtonbar.setFloatable$Z(false);
cacheButtonbar.setBorder$javax_swing_border_Border(buttonbarBorder);
cacheButtonbar.add$java_awt_Component(this.clearCacheButton);
cacheButtonbar.add$java_awt_Component(this.setCacheButton);
this.cachePanel.add$java_awt_Component$O(cacheButtonbar, "North");
this.tabbedPane=Clazz.new_($I$(27,1));
this.tabbedPane.addTab$S$java_awt_Component("", this.collectionsPanel);
this.tabbedPane.addTab$S$java_awt_Component("", this.cachePanel);
if (!$I$(28).isJS) this.tabbedPane.addTab$S$java_awt_Component("", this.searchPanel);
this.tabbedPane.addChangeListener$javax_swing_event_ChangeListener(((P$.LibraryManager$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryManager$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.LibraryManager'].tabbedPane.getSelectedComponent$() === this.b$['org.opensourcephysics.tools.LibraryManager'].collectionsPanel ) {
this.b$['org.opensourcephysics.tools.LibraryManager'].collectionsPanel.add$java_awt_Component$O(this.b$['org.opensourcephysics.tools.LibraryManager'].libraryButtonbar, "North");
this.b$['org.opensourcephysics.tools.LibraryManager'].collectionsPanel.add$java_awt_Component$O(this.b$['org.opensourcephysics.tools.LibraryManager'].libraryEditBox, "South");
this.b$['org.opensourcephysics.tools.LibraryManager'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LibraryManager'], []);
} else if (this.b$['org.opensourcephysics.tools.LibraryManager'].tabbedPane.getSelectedComponent$() === this.b$['org.opensourcephysics.tools.LibraryManager'].importsPanel ) {
this.b$['org.opensourcephysics.tools.LibraryManager'].importsPanel.add$java_awt_Component$O(this.b$['org.opensourcephysics.tools.LibraryManager'].libraryButtonbar, "North");
this.b$['org.opensourcephysics.tools.LibraryManager'].importsPanel.add$java_awt_Component$O(this.b$['org.opensourcephysics.tools.LibraryManager'].libraryEditBox, "South");
this.b$['org.opensourcephysics.tools.LibraryManager'].refreshGUI$.apply(this.b$['org.opensourcephysics.tools.LibraryManager'], []);
}});
})()
), Clazz.new_(P$.LibraryManager$16.$init$,[this, null])));
var space=$I$(3).createEmptyBorder$I$I$I$I(0, 2, 0, 2);
this.listButtonBorder=$I$(3).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(etched, space);
var contentPane=Clazz.new_([Clazz.new_($I$(25,1))],$I$(24,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
contentPane.add$java_awt_Component$O(this.tabbedPane, "Center");
var south=Clazz.new_($I$(24,1));
south.add$java_awt_Component(this.okButton);
contentPane.add$java_awt_Component$O(south, "South");
});

Clazz.newMeth(C$, 'warnNotFound$S',  function (path) {
var s=$I$(1).getString$S("LibraryBrowser.Dialog.CollectionNotFound.Message");
System.out.println$S("WARN - LibraryManager " + s + " " + path );
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.setTitle$S($I$(1).getString$S("LibraryManager.Title"));
this.okButton.setText$S($I$(1).getString$S("Tool.Button.Close"));
this.addButton.setText$S($I$(1).getString$S("LibraryManager.Button.Add"));
this.removeButton.setText$S($I$(1).getString$S("LibraryManager.Button.Remove"));
this.moveUpButton.setText$S($I$(1).getString$S("LibraryTreePanel.Button.Up"));
this.moveDownButton.setText$S($I$(1).getString$S("LibraryTreePanel.Button.Down"));
this.allButton.setText$S($I$(1).getString$S("LibraryManager.Button.All"));
this.noneButton.setText$S($I$(1).getString$S("LibraryManager.Button.None"));
this.clearCacheButton.setText$S($I$(1).getString$S("LibraryManager.Button.ClearCache"));
this.setCacheButton.setText$S($I$(1).getString$S("LibraryManager.Button.SetCache"));
this.addButton.setToolTipText$S($I$(1).getString$S("LibraryManager.Button.Add.Tooltip"));
this.removeButton.setToolTipText$S($I$(1).getString$S("LibraryManager.Button.Remove.Tooltip"));
this.moveUpButton.setToolTipText$S($I$(1).getString$S("LibraryTreePanel.Button.Up.Tooltip"));
this.moveDownButton.setToolTipText$S($I$(1).getString$S("LibraryTreePanel.Button.Down.Tooltip"));
this.allButton.setToolTipText$S($I$(1).getString$S("LibraryManager.Button.All.Tooltip"));
this.noneButton.setToolTipText$S($I$(1).getString$S("LibraryManager.Button.None.Tooltip"));
this.clearCacheButton.setToolTipText$S($I$(1).getString$S("LibraryManager.Button.ClearCache.Tooltip"));
this.setCacheButton.setToolTipText$S($I$(1).getString$S("LibraryManager.Button.SetCache.Tooltip"));
this.nameLabel.setText$S($I$(1).getString$S("LibraryManager.Label.Name") + ":");
this.pathLabel.setText$S($I$(1).getString$S("LibraryManager.Label.Path") + ":");
this.collectionsTitleBorder.setTitle$S($I$(1).getString$S("LibraryManager.Title.MenuItems") + ":");
this.importsTitleBorder.setTitle$S($I$(1).getString$S("LibraryManager.Title.Import") + ":");
this.searchTitleBorder.setTitle$S($I$(1).getString$S("LibraryManager.Title.Search") + ":");
this.cacheTitleBorder.setTitle$S($I$(1).getString$S("LibraryManager.Title.Cache") + ":");
var k=this.tabbedPane.indexOfComponent$java_awt_Component(this.collectionsPanel);
if (k > -1) {
this.tabbedPane.setTitleAt$I$S(k, $I$(1).getString$S("LibraryManager.Tab.MyLibrary"));
this.tabbedPane.setToolTipTextAt$I$S(k, $I$(1).getString$S("LibraryManager.Tab.MyLibrary.Tooltip"));
}k=this.tabbedPane.indexOfComponent$java_awt_Component(this.importsPanel);
if (k > -1) {
this.tabbedPane.setTitleAt$I$S(k, $I$(1).getString$S("LibraryManager.Tab.Import"));
this.tabbedPane.setToolTipTextAt$I$S(k, $I$(1).getString$S("LibraryManager.Tab.Import.Tooltip"));
}k=this.tabbedPane.indexOfComponent$java_awt_Component(this.searchPanel);
if (k > -1) {
this.tabbedPane.setTitleAt$I$S(k, $I$(1).getString$S("LibraryManager.Tab.Search"));
this.tabbedPane.setToolTipTextAt$I$S(k, $I$(1).getString$S("LibraryManager.Tab.Search.Tooltip"));
}k=this.tabbedPane.indexOfComponent$java_awt_Component(this.cachePanel);
if (k > -1) {
this.tabbedPane.setTitleAt$I$S(k, $I$(1).getString$S("LibraryManager.Tab.Cache"));
this.tabbedPane.setToolTipTextAt$I$S(k, $I$(1).getString$S("LibraryManager.Tab.Cache.Tooltip"));
}p$1.resizeLabels.apply(this, []);
this.pathField.setForeground$java_awt_Color($I$(29).defaultForeground);
if (this.tabbedPane.getSelectedComponent$() === this.collectionsPanel ) {
this.nameField.setEditable$Z(true);
var i=this.collectionList.getSelectedIndex$();
this.moveDownButton.setEnabled$Z(i < this.library.pathList.size$() - 1);
this.moveUpButton.setEnabled$Z(i > 0);
if (i > -1 && this.library.pathList.size$() > i ) {
this.removeButton.setEnabled$Z(true);
var path=this.library.pathList.get$I(i);
this.pathField.setText$S(path);
this.pathField.setCaretPosition$I(0);
var name=this.library.pathToNameMap.get$O(path);
this.nameField.setText$S(name);
var unavailable=$I$(5).isHTTP$S(path) && !this.browser.isWebConnected$ZA(null) ;
var res=unavailable ? null : $I$(5).getResourceZipURLsOK$S(path);
if (res == null ) {
this.pathField.setForeground$java_awt_Color($I$(29).darkRed);
}} else {
this.removeButton.setEnabled$Z(false);
this.nameField.setEditable$Z(false);
this.nameField.setText$S(null);
this.nameField.setBackground$java_awt_Color($I$(14).white);
this.pathField.setText$S(null);
this.pathField.setBackground$java_awt_Color($I$(14).white);
}} else if (this.tabbedPane.getSelectedComponent$() === this.importsPanel ) {
this.nameField.setEditable$Z(false);
var i=this.guestList.getSelectedIndex$();
this.moveDownButton.setEnabled$Z(i < this.library.importedPathList.size$() - 1);
this.moveUpButton.setEnabled$Z(i > 0);
if (i > -1 && this.library.importedPathList.size$() > i ) {
this.removeButton.setEnabled$Z(true);
var path=this.library.importedPathList.get$I(i);
this.pathField.setText$S(path);
this.pathField.setCaretPosition$I(0);
var name=this.library.importedPathToLibraryMap.get$O(path).getName$();
this.nameField.setText$S(name);
var unavailable=$I$(5).isHTTP$S(path) && !this.browser.isWebConnected$ZA(null) ;
var res=unavailable ? null : $I$(5).getResourceZipURLsOK$S(path);
if (res == null ) {
this.pathField.setForeground$java_awt_Color($I$(29).darkRed);
}} else {
this.removeButton.setEnabled$Z(false);
this.nameField.setText$S(null);
this.nameField.setBackground$java_awt_Color($I$(14).white);
this.pathField.setText$S(null);
this.pathField.setBackground$java_awt_Color($I$(14).white);
}}this.nameField.setBackground$java_awt_Color($I$(14).white);
this.pathField.setBackground$java_awt_Color($I$(14).white);
});

Clazz.newMeth(C$, 'refreshSearchTab$',  function () {
this.searchBox.removeAll$();
this.checkboxes.clear$();
var labels=Clazz.new_($I$(7,1));
var names=this.browser.getSearchPathMap$().keySet$();
for (var name, $name = names.iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
var path=this.browser.searchPathMap.get$O(name);
var label=Clazz.new_($I$(15,1).c$$S,[name]);
label.setToolTipText$S(path);
labels.add$O(label);
var checkbox=Clazz.new_($I$(30,1).c$$S,[this, null, path]);
this.checkboxes.add$O(checkbox);
var bar=$I$(23).createHorizontalBox$();
bar.add$java_awt_Component(label);
bar.add$java_awt_Component(checkbox);
if (!$I$(5).isHTTP$S(path)) bar.add$java_awt_Component(Clazz.new_($I$(31,1).c$$S,[this, null, path]));
bar.add$java_awt_Component($I$(23).createHorizontalGlue$());
this.searchBox.add$java_awt_Component(bar);
}
$I$(2,"setFonts$O$I",[this.searchBox, $I$(2).getLevel$()]);
if (labels.isEmpty$()) return;
var font=labels.get$I(0).getFont$();
var w=0;
for (var next, $next = labels.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var rect=font.getStringBounds$S$java_awt_font_FontRenderContext(next.getText$(), $I$(28).frc);
w=Math.max(w, (rect.getWidth$()|0));
}
var labelSize=Clazz.new_($I$(8,1).c$$I$I,[w + 48, 20]);
for (var next, $next = labels.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.setBorder$javax_swing_border_Border($I$(3).createEmptyBorder$I$I$I$I(0, 2, 0, 0));
next.setPreferredSize$java_awt_Dimension(labelSize);
}
});

Clazz.newMeth(C$, 'refreshCacheTab$',  function () {
this.cacheBox.removeAll$();
var labels=Clazz.new_($I$(7,1));
var cache=$I$(5).getOSPCache$();
var hosts=(cache == null  ? Clazz.array($I$(18), [0]) : cache.listFiles$java_io_FileFilter($I$(5).OSP_CACHE_FILTER));
this.clearCacheButton.setEnabled$Z(hosts.length > 0);
if (hosts.length == 0) {
var label=Clazz.new_([$I$(1).getString$S("LibraryManager.Cache.IsEmpty")],$I$(15,1).c$$S);
label.setBorder$javax_swing_border_Border($I$(3).createEmptyBorder$I$I$I$I(0, 2, 0, 0));
var box=$I$(23).createHorizontalBox$();
box.add$java_awt_Component(label);
box.add$java_awt_Component($I$(23).createHorizontalGlue$());
this.cacheBox.add$java_awt_Component(box);
return;
}for (var hostFile, $hostFile = 0, $$hostFile = hosts; $hostFile<$$hostFile.length&&((hostFile=($$hostFile[$hostFile])),1);$hostFile++) {
var hostText=hostFile.getName$().substring$I(4).replace$C$C("_", ".");
var bytes=p$1.getFileSize$java_io_File.apply(this, [hostFile]);
var size=Long.$div(bytes,(1048576));
if (Long.$gt(bytes,0 )) {
if (Long.$gt(size,0 )) hostText+=" (" + Long.$s(size) + " MB)" ;
 else hostText+=" (" + Long.$s(Long.$div(bytes,1024)) + " kB)";
}var label=Clazz.new_($I$(15,1).c$$S,[hostText]);
label.setToolTipText$S(hostFile.getAbsolutePath$());
labels.add$O(label);
var button=Clazz.new_($I$(32,1).c$$java_io_File,[this, null, hostFile]);
var bar=$I$(23).createHorizontalBox$();
bar.add$java_awt_Component(label);
bar.add$java_awt_Component(button);
bar.add$java_awt_Component($I$(23).createHorizontalGlue$());
this.cacheBox.add$java_awt_Component(bar);
$I$(2,"setFonts$O$I",[this.cacheBox, $I$(2).getLevel$()]);
}
var font=labels.get$I(0).getFont$();
var w=0;
for (var next, $next = labels.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var rect=font.getStringBounds$S$java_awt_font_FontRenderContext(next.getText$(), $I$(28).frc);
w=Math.max(w, (rect.getWidth$()|0));
}
var labelSize=Clazz.new_($I$(8,1).c$$I$I,[w + 48, 20]);
for (var next, $next = labels.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
next.setBorder$javax_swing_border_Border($I$(3).createEmptyBorder$I$I$I$I(0, 2, 0, 0));
next.setPreferredSize$java_awt_Dimension(labelSize);
}
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
$I$(2).setFonts$O$I(this, level);
var font=this.collectionList.getFont$();
font=$I$(2).getResizedFont$java_awt_Font$I(font, level);
var space=8 + level;
this.collectionList.setFixedCellHeight$I(font.getSize$() + space);
p$1.resizeLabels.apply(this, []);
});

Clazz.newMeth(C$, 'resizeLabels',  function () {
var w=0;
var font=this.nameLabel.getFont$();
var rect=font.getStringBounds$S$java_awt_font_FontRenderContext(this.nameLabel.getText$() + " ", $I$(28).frc);
w=Math.max(w, (rect.getWidth$()|0) + 4);
rect=font.getStringBounds$S$java_awt_font_FontRenderContext(this.pathLabel.getText$() + " ", $I$(28).frc);
w=Math.max(w, (rect.getWidth$()|0) + 4);
var labelSize=Clazz.new_($I$(8,1).c$$I$I,[w, 20]);
this.nameLabel.setPreferredSize$java_awt_Dimension(labelSize);
this.nameLabel.setMinimumSize$java_awt_Dimension(labelSize);
this.pathLabel.setPreferredSize$java_awt_Dimension(labelSize);
this.pathLabel.setMinimumSize$java_awt_Dimension(labelSize);
}, p$1);

Clazz.newMeth(C$, 'getFileSize$java_io_File',  function (folder) {
if (folder == null ) return 0;
var foldersize=0;
var files=folder.equals$O($I$(5).getOSPCache$()) ? folder.listFiles$java_io_FileFilter($I$(5).OSP_CACHE_FILTER) : folder.listFiles$();
if (files == null ) return 0;
for (var i=0; i < files.length; i++) {
if (files[i].isDirectory$()) {
(foldersize=Long.$add(foldersize,(p$1.getFileSize$java_io_File.apply(this, [files[i]]))));
} else {
(foldersize=Long.$add(foldersize,(files[i].length$())));
}}
return foldersize;
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryManager, "SearchCheckBox", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JCheckBoxMenuItem');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['urlPath']]]

Clazz.newMeth(C$, 'c$$S',  function (path) {
Clazz.super_(C$, this);
this.urlPath=path;
this.setText$S($I$(1).getString$S("LibraryManager.Checkbox.Search"));
this.setFont$java_awt_Font(this.b$['org.opensourcephysics.tools.LibraryManager'].sharedFont);
this.setSelected$Z(!this.b$['org.opensourcephysics.tools.LibraryManager'].library.noSearchSet.contains$O(path));
this.setOpaque$Z(false);
var space=20 + $I$(2).getLevel$() * 5;
this.setBorder$javax_swing_border_Border($I$(3).createEmptyBorder$I$I$I$I(0, 0, 0, space));
}, 1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
return this.getPreferredSize$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryManager, "DeleteButton", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JButton');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['urlPath']]]

Clazz.newMeth(C$, 'c$$S',  function (path) {
Clazz.super_(C$, this);
this.urlPath=path;
this.setText$S($I$(1).getString$S("LibraryManager.Button.Delete"));
this.setToolTipText$S($I$(1).getString$S("LibraryManager.Button.Delete.Tooltip"));
this.setOpaque$Z(false);
this.setBorder$javax_swing_border_Border(this.b$['org.opensourcephysics.tools.LibraryManager'].listButtonBorder);
this.setBorderPainted$Z(false);
this.setContentAreaFilled$Z(false);
this.addMouseListener$java_awt_event_MouseListener(((P$.LibraryManager$DeleteButton$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryManager$DeleteButton$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
this.b$['javax.swing.AbstractButton'].setBorderPainted$Z.apply(this.b$['javax.swing.AbstractButton'], [true]);
this.b$['javax.swing.AbstractButton'].setContentAreaFilled$Z.apply(this.b$['javax.swing.AbstractButton'], [true]);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.b$['javax.swing.AbstractButton'].setBorderPainted$Z.apply(this.b$['javax.swing.AbstractButton'], [false]);
this.b$['javax.swing.AbstractButton'].setContentAreaFilled$Z.apply(this.b$['javax.swing.AbstractButton'], [false]);
});
})()
), Clazz.new_($I$(4,1),[this, null],P$.LibraryManager$DeleteButton$1)));
this.addActionListener$java_awt_event_ActionListener(((P$.LibraryManager$DeleteButton$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryManager$DeleteButton$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var file=$I$(5).getSearchCacheFile$S(this.b$['org.opensourcephysics.tools.LibraryManager.DeleteButton'].urlPath);
if (file.delete$()) {
$I$(6).isSearchMapLoaded=false;
this.b$['org.opensourcephysics.tools.LibraryManager'].refreshSearchTab$.apply(this.b$['org.opensourcephysics.tools.LibraryManager'], []);
}});
})()
), Clazz.new_(P$.LibraryManager$DeleteButton$2.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
return this.getPreferredSize$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryManager, "ClearHostButton", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JButton');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['hostCacheDir','java.io.File']]]

Clazz.newMeth(C$, 'c$$java_io_File',  function (host) {
Clazz.super_(C$, this);
this.hostCacheDir=host;
this.setText$S($I$(1).getString$S("LibraryManager.Button.Clear"));
this.setToolTipText$S($I$(1).getString$S("LibraryManager.Button.Clear.Tooltip"));
this.setOpaque$Z(false);
this.setBorder$javax_swing_border_Border(this.b$['org.opensourcephysics.tools.LibraryManager'].listButtonBorder);
this.setBorderPainted$Z(false);
this.setContentAreaFilled$Z(false);
this.addMouseListener$java_awt_event_MouseListener(((P$.LibraryManager$ClearHostButton$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryManager$ClearHostButton$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
this.b$['javax.swing.AbstractButton'].setBorderPainted$Z.apply(this.b$['javax.swing.AbstractButton'], [true]);
this.b$['javax.swing.AbstractButton'].setContentAreaFilled$Z.apply(this.b$['javax.swing.AbstractButton'], [true]);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.b$['javax.swing.AbstractButton'].setBorderPainted$Z.apply(this.b$['javax.swing.AbstractButton'], [false]);
this.b$['javax.swing.AbstractButton'].setContentAreaFilled$Z.apply(this.b$['javax.swing.AbstractButton'], [false]);
});
})()
), Clazz.new_($I$(4,1),[this, null],P$.LibraryManager$ClearHostButton$1)));
this.addActionListener$java_awt_event_ActionListener(((P$.LibraryManager$ClearHostButton$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryManager$ClearHostButton$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(5).clearOSPCacheHost$java_io_File(this.b$['org.opensourcephysics.tools.LibraryManager.ClearHostButton'].hostCacheDir);
this.b$['org.opensourcephysics.tools.LibraryManager'].refreshCacheTab$.apply(this.b$['org.opensourcephysics.tools.LibraryManager'], []);
this.b$['org.opensourcephysics.tools.LibraryManager'].tabbedPane.repaint$();
});
})()
), Clazz.new_(P$.LibraryManager$ClearHostButton$2.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
return this.getPreferredSize$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
