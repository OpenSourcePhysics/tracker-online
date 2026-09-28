(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.tools.ToolsRes','java.util.Locale','java.util.HashMap','java.util.HashSet','org.opensourcephysics.controls.XMLControlElement','java.awt.Dimension','org.opensourcephysics.tools.Toolbox',['org.opensourcephysics.tools.TranslatorTool','.LocaleItem'],'java.awt.Color','java.util.TreeMap','java.io.File','org.opensourcephysics.controls.XML','StringBuffer','javax.swing.JOptionPane','org.opensourcephysics.controls.ControlsRes','java.io.FileOutputStream','java.nio.charset.Charset','java.io.OutputStreamWriter','java.io.BufferedWriter','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.controls.XMLTableModel','javax.swing.JPanel','java.awt.BorderLayout','org.opensourcephysics.controls.XMLTable','javax.swing.JPopupMenu','javax.swing.JMenuItem','org.opensourcephysics.tools.TranslatorTool','java.awt.event.MouseAdapter','javax.swing.JToolBar','javax.swing.JScrollPane','javax.swing.JLabel','javax.swing.BorderFactory','javax.swing.JComboBox','javax.swing.JButton','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.display.TextFrame','javax.swing.Box','java.awt.Toolkit','java.util.ArrayList','java.beans.PropertyChangeEvent','java.util.TreeSet']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TranslatorTool", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JFrame', ['org.opensourcephysics.tools.Tool', 'org.opensourcephysics.display.Hidable', 'org.opensourcephysics.tools.Translator']);
C$.$classes$=[['LocaleItem',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.keepHidden=false;
this.control=Clazz.new_($I$(6,1));
this.dim=Clazz.new_($I$(7,1).c$$I$I,[320, 240]);
this.helpURL="https://www.compadre.org/online_help/tools/translator_tool_help.html";
this.preferredTitle=null;
},1);

C$.$fields$=[['Z',['keepHidden'],'S',['helpURL','fileExtension','preferredTitle'],'O',['control','org.opensourcephysics.controls.XMLControl','table','org.opensourcephysics.controls.XMLTable','dim','java.awt.Dimension','descriptionLabel','javax.swing.JLabel','localeDropDown','javax.swing.JComboBox','saveIcon','javax.swing.Icon','saveButton','javax.swing.JButton','+closeButton','+helpButton']]
,['Z',['haveGUI'],'O',['TOOL','org.opensourcephysics.tools.TranslatorTool','defaultProps','java.util.Map','+classes','+associates','changed','java.util.Set','$locale','java.util.Locale','searched','java.util.Set','paths','java.util.Map','classType','Class']]]

Clazz.newMeth(C$, 'getTool$',  function () {
return (C$.TOOL == null  ? (C$.TOOL=Clazz.new_(C$)) : C$.TOOL);
}, 1);

Clazz.newMeth(C$, 'show$',  function () {
if (!this.keepHidden) {
C$.superclazz.prototype.show$.apply(this, []);
}});

Clazz.newMeth(C$, 'dispose$',  function () {
this.keepHidden=true;
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
if (!this.keepHidden) {
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
}});

Clazz.newMeth(C$, 'setKeepHidden$Z',  function (_keepHidden) {
this.keepHidden=_keepHidden;
if (this.keepHidden) {
C$.superclazz.prototype.setVisible$Z.apply(this, [false]);
}});

Clazz.newMeth(C$, 'isKeepHidden$',  function () {
return this.keepHidden;
});

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
if ($I$(1).appletMode) {
this.keepHidden=true;
}var name="TranslatorTool";
this.setName$S(name);
this.setLocale$java_util_Locale($I$(2).resourceLocale);
$I$(2,"addPropertyChangeListener$S$java_beans_PropertyChangeListener",["locale", ((P$.TranslatorTool$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TranslatorTool$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var locale=e.getNewValue$();
if (locale != null ) {
this.b$['org.opensourcephysics.tools.TranslatorTool'].setLocale$java_util_Locale.apply(this.b$['org.opensourcephysics.tools.TranslatorTool'], [locale]);
}});
})()
), Clazz.new_(P$.TranslatorTool$1.$init$,[this, null]))]);
$I$(8).addTool$S$org_opensourcephysics_tools_Tool(name, this);
}, 1);

Clazz.newMeth(C$, 'send$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool',  function (job, replyTo) {
});

Clazz.newMeth(C$, 'getProperty$Class$S',  function (type, key) {
return C$.getProperty$Class$S$S$java_util_Locale(type, key, key, $I$(2).resourceLocale);
});

Clazz.newMeth(C$, 'getProperty$Class$S$S',  function (type, key, defaultValue) {
return C$.getProperty$Class$S$S$java_util_Locale(type, key, defaultValue, $I$(2).resourceLocale);
});

Clazz.newMeth(C$, 'getProperty$O$S',  function (obj, key) {
return this.getProperty$O$S$S(obj, key, key);
});

Clazz.newMeth(C$, 'getProperty$O$S$S',  function (obj, key, defaultValue) {
if (obj == null ) {
return (defaultValue == null ) ? key : defaultValue;
}var type=C$.associates.get$O(obj);
return C$.getProperty$Class$S$S$java_util_Locale(type, key, defaultValue, $I$(2).resourceLocale);
});

Clazz.newMeth(C$, 'setLocale$java_util_Locale',  function (locale) {
if (locale === C$.$locale ) {
return;
}C$.$locale=locale;
if (!C$.haveGUI) return;
p$1.showPropertiesImpl$Class.apply(this, [C$.classType]);
var item=null;
if (this.localeDropDown != null ) {
for (var i=0; i < this.localeDropDown.getItemCount$(); i++) {
item=this.localeDropDown.getItemAt$I(i);
if (item.loc.getLanguage$().equals$O(locale.getLanguage$())) {
break;
}item=null;
}
if (item == null ) {
item=Clazz.new_($I$(9,1).c$$java_util_Locale,[this, null, locale]);
p$1.addDropDownItem$org_opensourcephysics_tools_TranslatorTool_LocaleItem.apply(this, [item]);
}this.localeDropDown.setSelectedItem$O(item);
var properties=C$.getProperties$Class$java_util_Locale(C$.classType, locale);
this.saveButton.setEnabled$Z(C$.changed.contains$O(properties));
C$.refreshAssociates$Class(C$.classType);
}});

Clazz.newMeth(C$, 'showProperties$Class',  function (type) {
if (type == null ) {
return;
}p$1.createGUI.apply(this, []);
p$1.showPropertiesImpl$Class.apply(this, [type]);
this.setKeepHidden$Z(false);
this.setVisible$Z(true);
});

Clazz.newMeth(C$, 'showPropertiesImpl$Class',  function (type) {
if (type == null ) {
return;
}C$.classType=type;
this.control.clearValues$();
this.fileExtension="";
var addon=C$.$locale.getLanguage$();
if (!addon.equals$O("")) {
this.fileExtension+="_" + addon;
}this.fileExtension+=".properties";
var names=this.control.getPropertyNamesRaw$();
var it=names.iterator$();
while (it.hasNext$()){
var next=it.next$();
this.control.setValue$S$O(next, next);
}
var properties=C$.getProperties$Class$java_util_Locale(type, C$.$locale);
var it2=properties.keySet$().iterator$();
while (it2.hasNext$()){
var key=it2.next$();
this.control.setValue$S$O(key, properties.get$O(key));
}
var keys=C$.getDefaults$Class(type).keySet$();
it2=properties.keySet$().iterator$();
while (it2.hasNext$()){
var key=it2.next$();
if (!keys.contains$O(key)) {
this.table.setBackgroundColor$S$java_awt_Color(key, $I$(10).PINK);
}}
this.table.refresh$();
this.refreshGUI$();
}, p$1);

Clazz.newMeth(C$, 'setPreferredTitle$S',  function (title) {
this.preferredTitle=title;
if (C$.haveGUI) this.refreshGUI$();
});

Clazz.newMeth(C$, 'addDropDownItem$org_opensourcephysics_tools_TranslatorTool_LocaleItem',  function (item) {
var items=Clazz.new_($I$(11,1));
var defaultItem=item.isDefault$() ? item : null;
if (!item.isDefault$()) {
items.put$O$O(item.language.toLowerCase$(), item);
}for (var i=0; i < this.localeDropDown.getItemCount$(); i++) {
var next=this.localeDropDown.getItemAt$I(i);
if (next.isDefault$()) {
defaultItem=next;
} else {
items.put$O$O(next.language.toLowerCase$(), next);
}}
this.localeDropDown.removeAllItems$();
if (defaultItem != null ) {
this.localeDropDown.addItem$O(defaultItem);
}for (var it=items.keySet$().iterator$(); it.hasNext$(); ) {
this.localeDropDown.addItem$O(items.get$O(it.next$()));
}
}, p$1);

Clazz.newMeth(C$, 'save$S',  function (fileName) {
if ((fileName == null ) || fileName.equals$O("") ) {
return null;
}var n=fileName.lastIndexOf$S("/");
if (n < 0) {
n=fileName.lastIndexOf$S("\\");
}if (n > 0) {
var dir=fileName.substring$I$I(0, n + 1);
var file=Clazz.new_($I$(12,1).c$$S,[dir]);
if (!file.exists$()) {
$I$(13).createFolders$S(dir);
}if (!file.exists$()) {
return null;
}}var content=Clazz.new_($I$(14,1));
var s=$I$(13).stripExtension$S(fileName);
content.append$S("# This is the " + s + ".properties file" + $I$(13).NEW_LINE + $I$(13).NEW_LINE );
var it=this.control.getPropertyNamesRaw$().iterator$();
while (it.hasNext$()){
var key=it.next$();
var alias=this.control.getString$S(key);
content.append$S(key + "=" + alias + $I$(13).NEW_LINE );
}
var file=Clazz.new_($I$(12,1).c$$S,[fileName]);
try {
if (file.exists$() && !file.canWrite$() ) {
$I$(15,"showMessageDialog$java_awt_Component$O$S$I",[null, $I$(16).getString$S("Dialog.ReadOnly.Message"), $I$(16).getString$S("Dialog.ReadOnly.Title"), -1]);
return null;
}var stream=Clazz.new_($I$(17,1).c$$java_io_File,[file]);
var charset=$I$(18).forName$S("UTF-8");
var out=Clazz.new_($I$(19,1).c$$java_io_OutputStream$java_nio_charset_Charset,[stream, charset]);
out=Clazz.new_($I$(20,1).c$$java_io_Writer,[out]);
out.write$S(content.toString());
out.flush$();
out.close$();
if (file.exists$()) {
$I$(21,"finest$S",[file.getAbsolutePath$()]);
{
C$.changed.remove$O(C$.getProperties$Class$java_util_Locale(C$.classType, C$.$locale));
}this.saveButton.setEnabled$Z(false);
return file.getAbsolutePath$();
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
$I$(21,"warning$S",[ex.getMessage$()]);
} else {
throw ex;
}
}
return null;
}, p$1);

Clazz.newMeth(C$, 'createGUI',  function () {
if (C$.haveGUI) return;
var model=((P$.TranslatorTool$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TranslatorTool$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.controls.XMLTableModel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getColumnName$I',  function (column) {
return (column == 0) ? $I$(2).getString$S("TranslatorTool.ColumnTitle.Property") : $I$(2).getString$S("TranslatorTool.ColumnTitle.PropValue");
});
})()
), Clazz.new_($I$(22,1).c$$org_opensourcephysics_controls_XMLControl,[this, null, this.control],P$.TranslatorTool$2));
var contentPane=Clazz.new_([Clazz.new_($I$(24,1))],$I$(23,1).c$$java_awt_LayoutManager);
contentPane.setPreferredSize$java_awt_Dimension(this.dim);
this.setContentPane$java_awt_Container(contentPane);
this.setDefaultCloseOperation$I(1);
this.table=Clazz.new_($I$(25,1).c$$org_opensourcephysics_controls_XMLTableModel,[model]);
this.table.addMouseListener$java_awt_event_MouseListener(((P$.TranslatorTool$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TranslatorTool$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(1).isPopupTrigger$java_awt_event_InputEvent(e)) {
for (var i=0; i < this.b$['org.opensourcephysics.tools.TranslatorTool'].table.getRowCount$(); i++) {
var rect=this.b$['org.opensourcephysics.tools.TranslatorTool'].table.getCellRect$I$I$Z(i, 0, true);
if (rect.contains$I$I(e.getX$(), e.getY$())) {
this.b$['org.opensourcephysics.tools.TranslatorTool'].table.setRowSelectionInterval$I$I(i, i);
var name=this.b$['org.opensourcephysics.tools.TranslatorTool'].table.getValueAt$I$I(i, 0);
var popup=Clazz.new_($I$(26,1));
var removeItem=Clazz.new_([$I$(2).getString$S("TranslatorTool.Popup.MenuItem.Remove") + " \"" + name + "\"" ],$I$(27,1).c$$S);
popup.add$javax_swing_JMenuItem(removeItem);
removeItem.addActionListener$java_awt_event_ActionListener(((P$.TranslatorTool$3$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TranslatorTool$3$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (ae) {
$I$(28,"removeProperty$Class$S",[$I$(28).classType, this.$finals$.name]);
});
})()
), Clazz.new_(P$.TranslatorTool$3$1.$init$,[this, {name:name}])));
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.tools.TranslatorTool'].table, e.getX$(), e.getY$() + 8);
}}
}});
})()
), Clazz.new_($I$(29,1),[this, null],P$.TranslatorTool$3)));
var toolbar=Clazz.new_($I$(30,1));
toolbar.setFloatable$Z(false);
contentPane.add$java_awt_Component$O(toolbar, "North");
var tableScroller=Clazz.new_($I$(31,1).c$$java_awt_Component,[this.table]);
contentPane.add$java_awt_Component$O(tableScroller, "Center");
var buttonbar=Clazz.new_($I$(30,1));
buttonbar.setFloatable$Z(false);
contentPane.add$java_awt_Component$O(buttonbar, "South");
this.descriptionLabel=Clazz.new_($I$(32,1));
this.descriptionLabel.setBorder$javax_swing_border_Border($I$(33).createEmptyBorder$I$I$I$I(0, 3, 0, 6));
toolbar.add$java_awt_Component(this.descriptionLabel);
this.localeDropDown=Clazz.new_($I$(34,1));
var selectedItem=Clazz.new_($I$(9,1).c$$java_util_Locale,[this, null, C$.$locale]);
this.localeDropDown.addItem$O(selectedItem);
var locales=$I$(1).getInstalledLocales$();
for (var i=0; i < locales.length; i++) {
if (locales[i].getDisplayLanguage$().equals$O(C$.$locale.getDisplayLanguage$())) {
continue;
}p$1.addDropDownItem$org_opensourcephysics_tools_TranslatorTool_LocaleItem.apply(this, [Clazz.new_($I$(9,1).c$$java_util_Locale,[this, null, locales[i]])]);
}
this.localeDropDown.setSelectedItem$O(selectedItem);
this.localeDropDown.setEditable$Z(true);
this.localeDropDown.addActionListener$java_awt_event_ActionListener(((P$.TranslatorTool$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TranslatorTool$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var next=this.b$['org.opensourcephysics.tools.TranslatorTool'].localeDropDown.getSelectedItem$();
if (next == null ) {
return;
}if (Clazz.instanceOf(next, "org.opensourcephysics.tools.TranslatorTool.LocaleItem")) {
$I$(2,"setLocale$java_util_Locale",[(next).loc]);
} else if ($I$(28,"isLanguage$S",[next.toString()])) {
var lang=Clazz.new_([next.toString()],$I$(3,1).c$$S).getLanguage$();
var locale=null;
var item=null;
for (var i=0; i < this.b$['org.opensourcephysics.tools.TranslatorTool'].localeDropDown.getItemCount$(); i++) {
item=this.b$['org.opensourcephysics.tools.TranslatorTool'].localeDropDown.getItemAt$I(i);
if (lang.equals$O(item.loc.getLanguage$())) {
locale=item.loc;
break;
}item=null;
}
if (locale == null ) {
locale=Clazz.new_([next.toString()],$I$(3,1).c$$S);
var properties=$I$(28,"getProperties$Class$java_util_Locale",[$I$(28).classType, locale]);
$I$(28).flagChange$java_util_Map(properties);
}$I$(2).setLocale$java_util_Locale(locale);
if (item != null ) {
this.b$['org.opensourcephysics.tools.TranslatorTool'].localeDropDown.setSelectedItem$O(item);
}this.b$['org.opensourcephysics.tools.TranslatorTool'].localeDropDown.getEditor$().selectAll$();
} else {
this.b$['org.opensourcephysics.tools.TranslatorTool'].localeDropDown.setSelectedIndex$I(0);
this.b$['org.opensourcephysics.tools.TranslatorTool'].localeDropDown.getEditor$().selectAll$();
}});
})()
), Clazz.new_(P$.TranslatorTool$4.$init$,[this, null])));
toolbar.add$java_awt_Component(this.localeDropDown);
this.helpButton=Clazz.new_($I$(35,1));
this.helpButton.addActionListener$java_awt_event_ActionListener(((P$.TranslatorTool$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "TranslatorTool$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var frame;
if ($I$(36).getResource$S(this.b$['org.opensourcephysics.tools.TranslatorTool'].helpURL) != null ) {
frame=Clazz.new_($I$(37,1).c$$S,[this.b$['org.opensourcephysics.tools.TranslatorTool'].helpURL]);
} else {
var htmlFile="/org/opensourcephysics/resources/tools/html/translator_tool_help.html";
frame=Clazz.new_($I$(37,1).c$$S,[htmlFile]);
}frame.setSize$I$I(800, 600);
frame.setVisible$Z(true);
});
})()
), Clazz.new_(P$.TranslatorTool$5.$init$,[this, null])));
buttonbar.add$java_awt_Component(this.helpButton);
var imageFile="/org/opensourcephysics/resources/tools/images/save.gif";
this.saveIcon=$I$(36).getImageIcon$S(imageFile);
this.saveButton=Clazz.new_($I$(35,1).c$$javax_swing_Icon,[this.saveIcon]);
this.saveButton.addActionListener$java_awt_event_ActionListener(((P$.TranslatorTool$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "TranslatorTool$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.save$S.apply(this.b$['org.opensourcephysics.tools.TranslatorTool'], [$I$(28,"getPath$Class",[$I$(28).classType]) + this.b$['org.opensourcephysics.tools.TranslatorTool'].fileExtension]);
});
})()
), Clazz.new_(P$.TranslatorTool$6.$init$,[this, null])));
this.saveButton.setEnabled$Z(false);
buttonbar.add$java_awt_Component($I$(38).createHorizontalGlue$());
buttonbar.add$java_awt_Component(this.saveButton);
this.closeButton=Clazz.new_($I$(35,1));
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.TranslatorTool$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "TranslatorTool$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.TranslatorTool'].setVisible$Z.apply(this.b$['org.opensourcephysics.tools.TranslatorTool'], [false]);
});
})()
), Clazz.new_(P$.TranslatorTool$7.$init$,[this, null])));
buttonbar.add$java_awt_Component(this.closeButton);
this.pack$();
var dim=$I$(39).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.getBounds$().width)/2|0);
var y=((dim.height - this.getBounds$().height)/2|0);
this.setLocation$I$I(x, y);
this.table.addPropertyChangeListener$java_beans_PropertyChangeListener(((P$.TranslatorTool$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "TranslatorTool$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var val=e.getNewValue$();
if (Clazz.instanceOf(val, "javax.swing.event.TableModelEvent")) {
var event=val;
var row=event.getFirstRow$();
if (row < 0) {
return;
}var properties=$I$(28,"getProperties$Class$java_util_Locale",[$I$(28).classType, $I$(28).$locale]);
var key=this.b$['org.opensourcephysics.tools.TranslatorTool'].table.getValueAt$I$I(row, 0);
var alias=this.b$['org.opensourcephysics.tools.TranslatorTool'].table.getValueAt$I$I(row, 1);
if ((alias != null ) && !alias.equals$O("") ) {
properties.put$O$O(key, alias);
} else {
this.b$['org.opensourcephysics.tools.TranslatorTool'].table.setValueAt$O$I$I(key, row, 1);
properties.put$O$O(key, key);
}$I$(28,"refreshAssociates$Class",[$I$(28).classType]);
$I$(28).flagChange$java_util_Map(properties);
this.b$['org.opensourcephysics.tools.TranslatorTool'].saveButton.setEnabled$Z(true);
}});
})()
), Clazz.new_(P$.TranslatorTool$8.$init$,[this, null])));
C$.haveGUI=true;
}, p$1);

Clazz.newMeth(C$, 'refreshGUI$',  function () {
p$1.createGUI.apply(this, []);
var fileName=$I$(13,"getName$S",[C$.getPath$Class(C$.classType)]);
if (this.preferredTitle == null ) {
var title=$I$(2).getString$S("TranslatorTool.Title");
title+=" " + fileName;
this.setTitle$S(title);
} else this.setTitle$S(this.preferredTitle);
fileName+=this.fileExtension;
if (C$.classType != null ) {
var properties=C$.getProperties$Class$java_util_Locale(C$.classType, C$.$locale);
this.saveButton.setEnabled$Z(C$.changed.contains$O(properties));
}this.helpButton.setText$S($I$(2).getString$S("Tool.Button.Help"));
this.helpButton.setToolTipText$S($I$(2).getString$S("Tool.Button.Help.ToolTip"));
this.saveButton.setText$S($I$(2).getString$S("TranslatorTool.Button.Save"));
this.saveButton.setToolTipText$S($I$(2).getString$S("TranslatorTool.Button.Save.ToolTip") + fileName);
this.closeButton.setText$S($I$(2).getString$S("Tool.Button.Close"));
this.closeButton.setToolTipText$S($I$(2).getString$S("Tool.Button.Close.ToolTip"));
this.descriptionLabel.setText$S($I$(2).getString$S("TranslatorTool.Label.Description"));
this.table.refresh$();
});

Clazz.newMeth(C$, 'getProperty$Class$S$S$java_util_Locale',  function (type, key, defaultValue, locale) {
if (defaultValue == null ) {
defaultValue=key;
}if (type == null ) {
return defaultValue;
}if (!C$.getDefaults$Class(type).keySet$().contains$O(key)) {
C$.addProperty$Class$S$S(type, key, defaultValue);
}return C$.getProperties$Class$java_util_Locale(type, locale).get$O(key);
}, 1);

Clazz.newMeth(C$, 'getDefaults$Class',  function (type) {
var defaults=C$.defaultProps.get$O(type);
if (defaults == null ) {
defaults=Clazz.new_($I$(11,1));
{
C$.defaultProps.put$O$O(type, defaults);
}}return defaults;
}, 1);

Clazz.newMeth(C$, 'addProperty$Class$S$S',  function (type, key, defaultValue) {
if ((type == null ) || (key == null ) ) {
return;
}if (defaultValue == null ) {
defaultValue=key;
}C$.getDefaults$Class(type).put$O$O(key, defaultValue);
var properties=C$.getProperties$Class$java_util_Locale(type, C$.$locale);
if (properties.get$O(key) == null ) {
properties.put$O$O(key, defaultValue);
C$.flagChange$java_util_Map(properties);
}var locales=C$.classes.get$O(type);
if (locales != null ) {
var it=locales.keySet$().iterator$();
while (it.hasNext$()){
properties=locales.get$O(it.next$());
if (properties.get$O(key) == null ) {
properties.put$O$O(key, defaultValue);
C$.flagChange$java_util_Map(properties);
}}
}if (C$.haveGUI) p$1.showPropertiesImpl$Class.apply(C$.getTool$(), [C$.classType]);
C$.refreshAssociates$Class(C$.classType);
}, 1);

Clazz.newMeth(C$, 'removeProperty$Class$S',  function (type, key) {
if (type == null ) {
return;
}C$.getDefaults$Class(type).remove$O(key);
var locales=C$.classes.get$O(type);
if (locales != null ) {
var it=locales.keySet$().iterator$();
while (it.hasNext$()){
var properties=locales.get$O(it.next$());
properties.remove$O(key);
C$.flagChange$java_util_Map(properties);
}
}if (C$.haveGUI) p$1.showPropertiesImpl$Class.apply(C$.getTool$(), [C$.classType]);
C$.refreshAssociates$Class(C$.classType);
}, 1);

Clazz.newMeth(C$, 'removeProperty$O$S',  function (obj, key) {
var type=C$.associates.get$O(obj);
C$.removeProperty$Class$S(type, key);
}, 1);

Clazz.newMeth(C$, 'flagChange$java_util_Map',  function (properties) {
{
C$.changed.add$O(properties);
}}, 1);

Clazz.newMeth(C$, 'getProperties$Class$java_util_Locale',  function (type, locale) {
var locales=C$.classes.get$O(type);
if (locales == null ) {
locales=Clazz.new_($I$(4,1));
{
C$.classes.put$O$O(type, locales);
}}var properties=locales.get$O(locale.getLanguage$());
if (properties == null ) {
properties=Clazz.new_($I$(11,1));
locales.put$O$O(locale.getLanguage$(), properties);
var path=C$.getPath$Class(type);
var res=null;
var lang=locale.getLanguage$();
if (!lang.equals$O("")) {
res=$I$(36).getResource$S(path + "_" + lang + ".properties" );
}if (res == null ) {
res=$I$(36).getResource$S(path + ".properties");
}if (res != null ) {
C$.readProperties$java_io_BufferedReader$java_util_Map(res.openReader$(), properties);
} else {
var defaults=C$.getDefaults$Class(type);
var it=defaults.keySet$().iterator$();
while (it.hasNext$()){
var key=it.next$();
var val=defaults.get$O(key);
properties.put$O$O(key, val);
}
C$.flagChange$java_util_Map(properties);
}}return properties;
}, 1);

Clazz.newMeth(C$, 'readProperties$java_io_BufferedReader$java_util_Map',  function (input, map) {
try {
var next=input.readLine$();
while (next != null ){
var i=next.indexOf$S("=");
if (i > -1) {
var key=next.substring$I$I(0, i);
var val=next.substring$I(i + 1);
map.put$O$O(key, val);
}next=input.readLine$();
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
return;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getAssociates$Class',  function (type) {
var c=Clazz.new_($I$(40,1));
var it=C$.associates.keySet$().iterator$();
while (it.hasNext$()){
var obj=it.next$();
if (C$.associates.get$O(obj).equals$O(type)) {
c.add$O(obj);
}}
return c;
}, 1);

Clazz.newMeth(C$, 'refreshAssociates$Class',  function (type) {
var it=C$.getAssociates$Class(type).iterator$();
while (it.hasNext$()){
var obj=it.next$();
if (Clazz.instanceOf(obj, "org.opensourcephysics.controls.XMLTable")) {
(obj).refresh$();
} else if (Clazz.instanceOf(obj, "java.beans.PropertyChangeListener")) {
(obj).propertyChange$java_beans_PropertyChangeEvent(Clazz.new_([C$.getTool$(), "translation", null, null],$I$(41,1).c$$O$S$O$O));
}}
}, 1);

Clazz.newMeth(C$, 'associate$O$Class',  function (obj, type) {
if (obj == null ) {
return;
}C$.associates.put$O$O(obj, type);
});

Clazz.newMeth(C$, 'setPath$Class$S',  function (type, directory) {
directory=$I$(13).forwardSlash$S(directory);
if (!directory.endsWith$S("/")) directory+="/";
C$.paths.put$O$O(type, directory);
}, 1);

Clazz.newMeth(C$, 'getPath$Class',  function (type) {
if (type == null ) {
return null;
}var path=C$.paths.get$O(type);
if (path != null ) {
return path + type.getSimpleName$();
}path=type.getName$();
var i=path.indexOf$S(".");
while (i != -1){
path=path.substring$I$I(0, i) + "/" + path.substring$I(i + 1) ;
i=path.indexOf$S(".");
}
return path;
}, 1);

Clazz.newMeth(C$, 'isLanguage$S',  function (lang) {
var languages=$I$(3).getISOLanguages$();
for (var i=0; i < languages.length; i++) {
if (languages[i].equals$O(lang)) {
return true;
}}
return false;
}, 1);

Clazz.newMeth(C$, 'getTranslatedLocales$Class',  function (type) {
if (!C$.searched.contains$O(type)) {
{
C$.searched.add$O(type);
}var locales=C$.classes.get$O(type);
if (locales == null ) {
locales=Clazz.new_($I$(4,1));
{
C$.classes.put$O$O(type, locales);
}}if (!$I$(1).isApplet) {
var langs=locales.keySet$();
var path=C$.getPath$Class(type);
var res=null;
var languages=$I$(3).getISOLanguages$();
for (var i=0; i < languages.length; i++) {
if (langs.contains$O(languages[i])) {
continue;
}res=$I$(36).getResource$S(path + "_" + languages[i] + ".properties" );
if (res != null ) {
var properties=Clazz.new_($I$(11,1));
locales.put$O$O(languages[i], properties);
C$.readProperties$java_io_BufferedReader$java_util_Map(res.openReader$(), properties);
}}
}}var languages=Clazz.new_($I$(42,1));
languages.addAll$java_util_Collection(C$.classes.get$O(type).keySet$());
var locales=Clazz.new_($I$(40,1));
for (var it=languages.iterator$(); it.hasNext$(); ) {
locales.add$O(Clazz.new_([it.next$().toString()],$I$(3,1).c$$S));
}
return locales.toArray$OA(Clazz.array($I$(3), [0]));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.defaultProps=Clazz.new_($I$(4,1));
C$.classes=Clazz.new_($I$(4,1));
C$.associates=Clazz.new_($I$(4,1));
C$.changed=Clazz.new_($I$(5,1));
C$.$locale=$I$(3).getDefault$();
C$.searched=Clazz.new_($I$(5,1));
C$.paths=Clazz.new_($I$(4,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.TranslatorTool, "LocaleItem", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['language'],'O',['loc','java.util.Locale']]]

Clazz.newMeth(C$, 'c$$java_util_Locale',  function (locale) {
;C$.$init$.apply(this);
this.loc=locale;
this.language=$I$(1).getDisplayLanguage$java_util_Locale(this.loc);
if (this.isDefault$()) {
this.language+=" (" + $I$(2).getString$S("TranslatorTool.Language.Default") + ")" ;
}}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.language;
});

Clazz.newMeth(C$, 'isDefault$',  function () {
return this.loc.getDisplayLanguage$java_util_Locale(this.loc).equals$O($I$(3).getDefault$().getDisplayLanguage$java_util_Locale(this.loc));
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
