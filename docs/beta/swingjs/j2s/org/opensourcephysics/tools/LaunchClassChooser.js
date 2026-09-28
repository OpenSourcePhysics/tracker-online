(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'java.util.TreeMap','javax.swing.JOptionPane','org.opensourcephysics.tools.LaunchRes','javax.swing.JLabel','javax.swing.JButton','javax.swing.JTextField','java.awt.event.KeyAdapter','javax.swing.JPanel','javax.swing.BoxLayout','javax.swing.Box','javax.swing.BorderFactory','java.awt.BorderLayout','java.awt.Dimension','javax.swing.JScrollPane','java.awt.Toolkit','org.opensourcephysics.tools.LaunchableClassMap','java.awt.Color','java.util.regex.Pattern','java.util.ArrayList','javax.swing.JList','java.awt.event.MouseAdapter','org.opensourcephysics.tools.LaunchClassChooser','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.controls.XML','java.net.URL','org.opensourcephysics.controls.OSPLog','java.net.URLClassLoader','java.util.jar.JarFile','java.io.File','org.opensourcephysics.tools.Launcher','javax.swing.JComponent']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LaunchClassChooser", null, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultSearch="";
this.currentSearch=this.defaultSearch;
this.applyChanges=false;
},1);

C$.$fields$=[['Z',['applyChanges'],'S',['defaultSearch','currentSearch'],'O',['searchField','javax.swing.JTextField','scroller','javax.swing.JScrollPane','choices','javax.swing.JList','classMap','org.opensourcephysics.tools.LaunchableClassMap','okButton','javax.swing.JButton']]
,['Z',['jarsOnly'],'S',['baseDirectoryPath'],'O',['pattern','java.util.regex.Pattern','matcher','java.util.regex.Matcher','classMaps','java.util.Map']]]

Clazz.newMeth(C$, 'c$$java_awt_Component',  function (owner) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[$I$(2).getFrameForComponent$java_awt_Component(owner), true]);C$.$init$.apply(this);
this.setTitle$S($I$(3).getString$S("ClassChooser.Frame.Title"));
var textLabel=Clazz.new_([$I$(3).getString$S("ClassChooser.Search.Label") + " "],$I$(4,1).c$$S);
this.okButton=Clazz.new_([$I$(3).getString$S("ClassChooser.Button.Accept")],$I$(5,1).c$$S);
this.okButton.setEnabled$Z(false);
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.LaunchClassChooser$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchClassChooser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.LaunchClassChooser'].applyChanges=true;
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
});
})()
), Clazz.new_(P$.LaunchClassChooser$1.$init$,[this, null])));
var cancelButton=Clazz.new_([$I$(3).getString$S("ClassChooser.Button.Cancel")],$I$(5,1).c$$S);
cancelButton.addActionListener$java_awt_event_ActionListener(((P$.LaunchClassChooser$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchClassChooser$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
});
})()
), Clazz.new_(P$.LaunchClassChooser$2.$init$,[this, null])));
this.searchField=Clazz.new_($I$(6,1).c$$S,[this.defaultSearch]);
this.searchField.addKeyListener$java_awt_event_KeyListener(((P$.LaunchClassChooser$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchClassChooser$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
var obj=this.b$['org.opensourcephysics.tools.LaunchClassChooser'].choices.getSelectedValue$();
if ("model".equals$O(this.b$['org.opensourcephysics.tools.LaunchClassChooser'].searchField.getName$())) {
p$1.searchForModel.apply(this.b$['org.opensourcephysics.tools.LaunchClassChooser'], []);
} else {
p$1.search.apply(this.b$['org.opensourcephysics.tools.LaunchClassChooser'], []);
}this.b$['org.opensourcephysics.tools.LaunchClassChooser'].choices.setSelectedValue$O$Z(obj, true);
});
})()
), Clazz.new_($I$(7,1),[this, null],P$.LaunchClassChooser$3)));
this.getRootPane$().setDefaultButton$javax_swing_JButton(this.okButton);
var headerPane=Clazz.new_($I$(8,1));
headerPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(9,1).c$$java_awt_Container$I,[headerPane, 0]));
headerPane.add$java_awt_Component(textLabel);
headerPane.add$java_awt_Component($I$(10).createHorizontalGlue$());
headerPane.add$java_awt_Component(this.searchField);
headerPane.setBorder$javax_swing_border_Border($I$(11).createEmptyBorder$I$I$I$I(10, 10, 0, 10));
var scrollPane=Clazz.new_([Clazz.new_($I$(12,1))],$I$(8,1).c$$java_awt_LayoutManager);
scrollPane.setBorder$javax_swing_border_Border($I$(11).createEmptyBorder$I$I$I$I(10, 10, 10, 10));
var buttonPane=Clazz.new_($I$(8,1));
buttonPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(9,1).c$$java_awt_Container$I,[buttonPane, 0]));
buttonPane.setBorder$javax_swing_border_Border($I$(11).createEmptyBorder$I$I$I$I(0, 10, 10, 10));
buttonPane.add$java_awt_Component($I$(10).createHorizontalGlue$());
buttonPane.add$java_awt_Component(this.okButton);
buttonPane.add$java_awt_Component($I$(10,"createRigidArea$java_awt_Dimension",[Clazz.new_($I$(13,1).c$$I$I,[10, 0])]));
buttonPane.add$java_awt_Component(cancelButton);
var contentPane=this.getContentPane$();
contentPane.add$java_awt_Component$O(headerPane, "North");
contentPane.add$java_awt_Component$O(scrollPane, "Center");
contentPane.add$java_awt_Component$O(buttonPane, "South");
this.scroller=Clazz.new_($I$(14,1));
this.scroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13,1).c$$I$I,[400, 300]));
scrollPane.add$java_awt_Component$O(this.scroller, "Center");
this.pack$();
var dim=$I$(15).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.getBounds$().width)/2|0);
var y=((dim.height - this.getBounds$().height)/2|0);
this.setLocation$I$I(x, y);
}, 1);

Clazz.newMeth(C$, 'setPath$S',  function (path) {
var jarNames=C$.parsePath$S(path);
this.classMap=null;
if ((jarNames == null ) || (jarNames.length == 0) ) {
return false;
}var key="";
for (var i=0; i < jarNames.length; i++) {
if (!key.equals$O("")) {
key+=";";
}key+=jarNames[i];
}
this.classMap=C$.classMaps.get$O(key);
if (this.classMap == null ) {
this.classMap=Clazz.new_($I$(16,1).c$$SA,[jarNames]);
C$.classMaps.put$O$O(key, this.classMap);
}return true;
});

Clazz.newMeth(C$, 'isLoaded$S',  function (path) {
if (this.classMap == null ) {
return false;
}var jarNames=C$.parsePath$S(path);
for (var i=0; i < jarNames.length; i++) {
if (!this.classMap.includesJar$S(jarNames[i])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'chooseClassFor$org_opensourcephysics_tools_LaunchNode',  function (node) {
if ("model".equals$O(this.searchField.getName$())) {
this.searchField.setText$S(null);
}this.setTitle$S($I$(3).getString$S("ClassChooser.Frame.Title"));
this.searchField.setName$S("launch");
p$1.search.apply(this, []);
this.choices.setSelectedValue$O$Z(node.launchClassName, true);
this.applyChanges=false;
this.setVisible$Z(true);
if (!this.applyChanges) {
return false;
}var obj=this.choices.getSelectedValue$();
if (obj == null ) {
return false;
}var className=obj.toString();
node.launchClass=this.classMap.get$O(className);
node.launchClassName=className;
node.launchModelScroller=null;
return true;
});

Clazz.newMeth(C$, 'chooseModel$S',  function (previousClassName) {
if ("launch".equals$O(this.searchField.getName$())) {
this.searchField.setText$S(null);
}this.setTitle$S($I$(3).getString$S("ModelClassChooser.Frame.Title"));
this.searchField.setName$S("model");
p$1.searchForModel.apply(this, []);
this.choices.setSelectedValue$O$Z(previousClassName, true);
this.applyChanges=false;
this.setVisible$Z(true);
if (!this.applyChanges) {
return null;
}var obj=this.choices.getSelectedValue$();
if (obj == null ) {
return null;
}var className=obj.toString();
return this.classMap.models.get$O(className);
});

Clazz.newMeth(C$, 'getClass$S',  function (className) {
if (this.classMap == null ) {
return null;
}return this.classMap.getClass$S(className);
});

Clazz.newMeth(C$, 'setBasePath$S',  function (path) {
C$.baseDirectoryPath=path;
}, 1);

Clazz.newMeth(C$, 'getClass$S$S',  function (classPath, className) {
if ((classPath == null ) || (className == null ) ) {
return null;
}var jarNames=C$.parsePath$S(classPath);
var classMap=C$.getClassMap$SA(jarNames);
return classMap.getClass$S(className);
}, 1);

Clazz.newMeth(C$, 'getModelClass$S$S',  function (classPath, className) {
if ((classPath == null ) || (className == null ) ) {
return null;
}var jarNames=C$.parsePath$S(classPath);
var classMap=C$.getClassMap$SA(jarNames);
return classMap.getModelClass$S(className);
}, 1);

Clazz.newMeth(C$, 'getClassOfType$S$S$Class',  function (classPath, className, type) {
if ((classPath == null ) || (className == null ) ) {
return null;
}var jarNames=C$.parsePath$S(classPath);
var classMap=C$.getClassMap$SA(jarNames);
return classMap.getClassOfType$S$Class(className, type);
}, 1);

Clazz.newMeth(C$, 'getClassLoader$S',  function (classPath) {
if ((classPath == null ) || classPath.equals$O("") ) {
return null;
}var jarNames=C$.parsePath$S(classPath);
var classMap=C$.getClassMap$SA(jarNames);
return classMap.classLoader;
}, 1);

Clazz.newMeth(C$, 'getClassMap$SA',  function (jarNames) {
var key="";
for (var i=0; i < jarNames.length; i++) {
if (!key.equals$O("")) {
key+=";";
}key+=jarNames[i];
}
var classMap=C$.classMaps.get$O(key);
if (classMap == null ) {
classMap=Clazz.new_($I$(16,1).c$$SA,[jarNames]);
C$.classMaps.put$O$O(key, classMap);
}return classMap;
}, 1);

Clazz.newMeth(C$, 'search',  function () {
if (this.classMap == null ) {
return;
}this.classMap.loadAllClasses$();
if (p$1.search$S.apply(this, [this.searchField.getText$()])) {
this.currentSearch=this.searchField.getText$();
this.searchField.setBackground$java_awt_Color($I$(17).white);
} else {
$I$(2,"showMessageDialog$java_awt_Component$O$S$I",[this, $I$(3).getString$S("Dialog.InvalidRegex.Message") + " \"" + this.searchField.getText$() + "\"" , $I$(3).getString$S("Dialog.InvalidRegex.Title"), 2]);
this.searchField.setText$S(this.currentSearch);
}}, p$1);

Clazz.newMeth(C$, 'searchForModel',  function () {
if (this.classMap == null ) {
return;
}this.classMap.loadAllClasses$();
if (p$1.searchForModel$S.apply(this, [this.searchField.getText$()])) {
this.currentSearch=this.searchField.getText$();
this.searchField.setBackground$java_awt_Color($I$(17).white);
} else {
$I$(2,"showMessageDialog$java_awt_Component$O$S$I",[this, $I$(3).getString$S("Dialog.InvalidRegex.Message") + " \"" + this.searchField.getText$() + "\"" , $I$(3).getString$S("Dialog.InvalidRegex.Title"), 2]);
this.searchField.setText$S(this.currentSearch);
}}, p$1);

Clazz.newMeth(C$, 'search$S',  function (regex) {
regex=regex.toLowerCase$();
this.okButton.setEnabled$Z(false);
try {
C$.pattern=$I$(18).compile$S(regex);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
return false;
} else {
throw ex;
}
}
var matches=Clazz.new_($I$(19,1));
for (var it=this.classMap.keySet$().iterator$(); it.hasNext$(); ) {
var name=it.next$();
C$.matcher=C$.pattern.matcher$CharSequence(name.toLowerCase$());
if (C$.matcher.find$()) {
matches.add$O(name);
}}
var results=matches.toArray$OA(Clazz.array(String, [matches.size$()]));
this.choices=Clazz.new_($I$(20,1).c$$OA,[results]);
this.choices.setSelectionMode$I(0);
this.choices.setFont$java_awt_Font(this.searchField.getFont$());
this.choices.addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.LaunchClassChooser$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchClassChooser$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
var theList=e.getSource$();
this.b$['org.opensourcephysics.tools.LaunchClassChooser'].okButton.setEnabled$Z(!theList.isSelectionEmpty$());
});
})()
), Clazz.new_(P$.LaunchClassChooser$4.$init$,[this, null])));
this.choices.addMouseListener$java_awt_event_MouseListener(((P$.LaunchClassChooser$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchClassChooser$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
var theList=e.getSource$();
if ((e.getClickCount$() == 2) && !theList.isSelectionEmpty$() ) {
this.b$['org.opensourcephysics.tools.LaunchClassChooser'].okButton.doClick$();
}});
})()
), Clazz.new_($I$(21,1),[this, null],P$.LaunchClassChooser$5)));
this.scroller.getViewport$().setView$java_awt_Component(this.choices);
return true;
}, p$1);

Clazz.newMeth(C$, 'searchForModel$S',  function (regex) {
regex=regex.toLowerCase$();
this.okButton.setEnabled$Z(false);
try {
C$.pattern=$I$(18).compile$S(regex);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
return false;
} else {
throw ex;
}
}
var matches=Clazz.new_($I$(19,1));
for (var it=this.classMap.models.keySet$().iterator$(); it.hasNext$(); ) {
var name=it.next$();
C$.matcher=C$.pattern.matcher$CharSequence(name.toLowerCase$());
if (C$.matcher.find$()) {
matches.add$O(name);
}}
var results=matches.toArray$OA(Clazz.array(String, [matches.size$()]));
this.choices=Clazz.new_($I$(20,1).c$$OA,[results]);
this.choices.setSelectionMode$I(0);
this.choices.setFont$java_awt_Font(this.searchField.getFont$());
this.choices.addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.LaunchClassChooser$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchClassChooser$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
var theList=e.getSource$();
this.b$['org.opensourcephysics.tools.LaunchClassChooser'].okButton.setEnabled$Z(!theList.isSelectionEmpty$());
});
})()
), Clazz.new_(P$.LaunchClassChooser$6.$init$,[this, null])));
this.choices.addMouseListener$java_awt_event_MouseListener(((P$.LaunchClassChooser$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchClassChooser$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
var theList=e.getSource$();
if ((e.getClickCount$() == 2) && !theList.isSelectionEmpty$() ) {
this.b$['org.opensourcephysics.tools.LaunchClassChooser'].okButton.doClick$();
}});
})()
), Clazz.new_($I$(21,1),[this, null],P$.LaunchClassChooser$7)));
this.scroller.getViewport$().setView$java_awt_Component(this.choices);
return true;
}, p$1);

Clazz.newMeth(C$, 'parsePath$S',  function (path) {
return C$.parsePath$S$Z(path, C$.jarsOnly);
}, 1);

Clazz.newMeth(C$, 'parsePath$S$Z',  function (path, jarsOnly) {
var tokens=Clazz.new_($I$(19,1));
var next=path;
var i=path.indexOf$S(";");
if (i != -1) {
next=path.substring$I$I(0, i);
path=path.substring$I(i + 1);
} else {
path="";
}while (next.length$() > 0){
if (!jarsOnly || next.endsWith$S(".jar") ) {
tokens.add$O(next);
}i=path.indexOf$S(";");
if (i == -1) {
next=path.trim$();
path="";
} else {
next=path.substring$I$I(0, i).trim$();
path=path.substring$I(i + 1).trim$();
}}
return tokens.toArray$OA(Clazz.array(String, [0]));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.classMaps=Clazz.new_($I$(1,1));
C$.jarsOnly=true;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
