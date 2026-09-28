(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},p$2={},I$=[[0,'org.opensourcephysics.tools.LaunchNode','java.util.ArrayList','org.opensourcephysics.tools.LaunchRes','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.controls.XML','org.opensourcephysics.tools.Launcher','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.controls.XMLControlElement','javax.swing.JOptionPane','javax.swing.JComponent','javax.swing.JPanel','java.awt.BorderLayout','java.awt.Color','javax.swing.JScrollPane','org.opensourcephysics.tools.LaunchClassChooser','org.opensourcephysics.controls.ConsoleLevel','java.util.HashSet','java.util.HashMap','org.opensourcephysics.display.OSPRuntime',['org.opensourcephysics.tools.LaunchNode','.DisplayTab'],'StringBuffer','javax.swing.JMenuItem','javax.swing.JMenu',['org.opensourcephysics.tools.LaunchNode','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LaunchNode", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.tree.DefaultMutableTreeNode');
C$.$classes$=[['Loader',10],['DisplayTab',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.args=Clazz.array(String, -1, [""]);
this.showLog=false;
this.clearLog=false;
this.logLevel=C$.DEFAULT_LOG_LEVEL;
this.singleVM=false;
this.singleVMOff=false;
this.hiddenWhenRoot=false;
this.buttonView=false;
this.singleton=false;
this.singleApp=false;
this.singleAppOff=false;
this.hiddenInLauncher=false;
this.name="";
this.description="";
this.tooltip="";
this.xsetName="";
this.author="";
this.keywords="";
this.level="";
this.languages="";
this.comment="";
this.appletWidth="";
this.appletHeight="";
this.tabData=Clazz.new_($I$(2,1));
this.processes=Clazz.new_($I$(17,1));
this.frames=Clazz.new_($I$(17,1));
this.actions=Clazz.new_($I$(17,1));
this.threads=Clazz.new_($I$(18,1));
this.launchCount=0;
this.enabled=true;
this.jars=Clazz.new_($I$(2,1));
this.pdf=Clazz.new_($I$(2,1));
this.tabNumber=-1;
this.prevTabNumber=-1;
},1);

C$.$fields$=[['Z',['showLog','clearLog','singleVM','singleVMOff','hiddenWhenRoot','buttonView','singleton','singleApp','singleAppOff','hiddenInLauncher','selfContained','parentSelfContained','previewing','saveHiddenNodes','enabled','isDisplayable'],'I',['launchCount','tabNumber','prevTabNumber'],'S',['classPath','launchClassName','name','description','tooltip','xsetName','author','keywords','level','languages','comment','appletWidth','appletHeight','fileName'],'O',['launchObj','java.lang.Object','launchClass','Class','args','String[]','logLevel','java.util.logging.Level','tabData','java.util.ArrayList','processes','java.util.Collection','+frames','+actions','threads','java.util.Map','launchPanel','org.opensourcephysics.tools.LaunchPanel','jars','java.util.List','+pdf','htmlURL','java.net.URL','+prevURL','launchModelScroller','javax.swing.JScrollPane']]
,['O',['DEFAULT_LOG_LEVEL','java.util.logging.Level']]]

Clazz.newMeth(C$, 'setURL$java_net_URL',  function (url) {
this.htmlURL=url;
this.isDisplayable=(url != null  && $I$(6,"isDisplayable$S",[url.toString()]) );
});

Clazz.newMeth(C$, 'getURL$',  function () {
return this.htmlURL;
});

Clazz.newMeth(C$, 'c$$S',  function (name) {
Clazz.super_(C$, this);
this.setUserObject$O(this);
if (name != null ) {
this.name=name;
}}, 1);

Clazz.newMeth(C$, 'threadRunning$Z',  function (starting) {
this.launchCount+=starting ? 1 : -1;
this.launchCount=Math.max(0, this.launchCount);
if (this.launchPanel != null ) {
this.launchPanel.repaint$();
}});

Clazz.newMeth(C$, 'launch$',  function () {
this.launch$org_opensourcephysics_tools_LaunchPanel(null);
});

Clazz.newMeth(C$, 'launch$org_opensourcephysics_tools_LaunchPanel',  function (tab) {
if (!this.isLeaf$()) {
return;
}this.launchPanel=tab;
$I$(19).launchingInSingleVM=this.isSingleVM$();
$I$(6).singleAppMode=this.isSingleApp$();
$I$(6).classPath=this.getClassPath$();
if (this.isShowLog$() && this.isSingleVM$() ) {
$I$(4,"setLevel$java_util_logging_Level",[this.getLogLevel$()]);
var log=$I$(4).getOSPLog$();
if (this.isClearLog$()) {
log.clear$();
}log.setVisible$Z(true);
}this.setMinimumArgLength$I(1);
var arg0=this.args[0];
if (this.getLaunchClass$() != null ) {
if (arg0.equals$O("this")) {
var launchObj=this.getLaunchObject$();
if (launchObj != null ) {
var control=Clazz.new_($I$(8,1).c$$O,[launchObj]);
this.args[0]=control.toXML$();
} else {
this.args[0]="";
}}if (this.args[0].equals$O("") && (this.args.length == 1) ) {
$I$(6,"launch$Class$SA$org_opensourcephysics_tools_LaunchNode",[this.getLaunchClass$(), null, this]);
} else {
$I$(6,"launch$Class$SA$org_opensourcephysics_tools_LaunchNode",[this.getLaunchClass$(), this.args, this]);
}}this.args[0]=arg0;
});

Clazz.newMeth(C$, 'getOwner$',  function () {
if (this.fileName != null ) {
return this;
}if (this.getParent$() != null ) {
return (this.getParent$()).getOwner$();
}return null;
});

Clazz.newMeth(C$, 'getAllOwnedNodes$',  function () {
var nodes=Clazz.new_($I$(2,1));
var e=this.breadthFirstEnumeration$();
while (e.hasMoreElements$()){
var next=e.nextElement$();
if ((next.fileName != null ) && (next !== this ) ) {
nodes.add$O(next);
}}
return nodes.toArray$OA(Clazz.array(C$, [0]));
});

Clazz.newMeth(C$, 'getChildOwnedNodes$',  function () {
var nodes=Clazz.new_($I$(2,1));
var owned=this.getAllOwnedNodes$();
var owner=this.getOwner$();
for (var i=0; i < owned.length; i++) {
var next=(owned[i].getParent$()).getOwner$();
if (next === owner ) {
nodes.add$O(owned[i]);
}}
return nodes.toArray$OA(Clazz.array(C$, [0]));
});

Clazz.newMeth(C$, 'toString',  function () {
if ((this.name != null ) && !this.name.equals$O("") ) {
return this.name;
}if (this.launchClassName != null ) {
return $I$(5).getExtension$S(this.launchClassName);
}if (!this.args[0].equals$O("")) {
var name=this.args[0];
name=$I$(5).getName$S(name);
return $I$(5).stripExtension$S(name);
}return "";
});

Clazz.newMeth(C$, 'getID$',  function () {
return String.valueOf$I(this.hashCode$());
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'setDescription$S',  function (desc) {
this.description=desc;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'setArgs$SA',  function (args) {
if ((args != null ) && (args.length > 0) && (args[0] != null )  ) {
this.args=args;
}});

Clazz.newMeth(C$, 'getArgs$',  function () {
return this.args;
});

Clazz.newMeth(C$, 'setTooltip$S',  function (_tooltip) {
this.tooltip=_tooltip;
});

Clazz.newMeth(C$, 'getTooltip$',  function () {
return this.tooltip;
});

Clazz.newMeth(C$, 'setAuthor$S',  function (_author) {
this.author=_author;
});

Clazz.newMeth(C$, 'getAuthor$',  function () {
if (!this.author.equals$O("")) {
return this.author;
} else if (this.isRoot$()) {
return "";
}var parent=this.getParent$();
return parent.getAuthor$();
});

Clazz.newMeth(C$, 'setKeyword$S',  function (_keywords) {
this.keywords=_keywords;
});

Clazz.newMeth(C$, 'getKeywords$',  function () {
if (!this.keywords.equals$O("")) {
return this.keywords;
} else if (this.isRoot$()) {
return "";
}var parent=this.getParent$();
return parent.getKeywords$();
});

Clazz.newMeth(C$, 'setComment$S',  function (_comment) {
this.comment=_comment;
});

Clazz.newMeth(C$, 'getComment$',  function () {
return this.comment;
});

Clazz.newMeth(C$, 'setPreferredAppletWidth$S',  function (_width) {
this.appletWidth=_width;
});

Clazz.newMeth(C$, 'getPreferredAppletWidth$',  function () {
return this.appletWidth;
});

Clazz.newMeth(C$, 'setPreferredAppletHeight$S',  function (_height) {
this.appletHeight=_height;
});

Clazz.newMeth(C$, 'getPreferredAppletHeight$',  function () {
return this.appletHeight;
});

Clazz.newMeth(C$, 'setCourseLevel$S',  function (_level) {
this.level=_level;
});

Clazz.newMeth(C$, 'getCourseLevel$',  function () {
if (!this.level.equals$O("")) {
return this.level;
} else if (this.isRoot$()) {
return "";
}var parent=this.getParent$();
return parent.getCourseLevel$();
});

Clazz.newMeth(C$, 'setLanguages$S',  function (_lang) {
this.languages=_lang;
});

Clazz.newMeth(C$, 'getLanguages$',  function () {
if (!this.languages.equals$O("")) {
return this.languages;
} else if (this.isRoot$()) {
return "";
}var parent=this.getParent$();
return parent.getLanguages$();
});

Clazz.newMeth(C$, 'getClassPath$',  function () {
var path="";
if (this.classPath != null ) {
path+=this.classPath;
}var node=this;
while (!node.isRoot$()){
node=node.getParent$();
if (node.classPath != null ) {
if (!path.equals$O("")) {
path+=";";
}path+=node.classPath;
}}
if (!path.equals$O("")) {
this.jars.clear$();
var next=path;
var i=path.indexOf$S(";");
if (i == -1) {
i=path.indexOf$S(":");
}if (i != -1) {
next=path.substring$I$I(0, i);
path=path.substring$I(i + 1);
} else {
path="";
}while (next.length$() > 0){
if (!this.jars.contains$O(next)) {
this.jars.add$O(next);
}i=path.indexOf$S(";");
if (i == -1) {
i=path.indexOf$S(":");
}if (i == -1) {
next=path.trim$();
path="";
} else {
next=path.substring$I$I(0, i).trim$();
path=path.substring$I(i + 1).trim$();
}}
var it=this.jars.iterator$();
while (it.hasNext$()){
if (!path.equals$O("")) {
path+=";";
}path+=it.next$();
}
}if ($I$(19).getLaunchJarName$() != null  && path.indexOf$S($I$(19).getLaunchJarName$()) == -1  && $I$(15).baseDirectoryPath == null  ) {
if (!path.equals$O("")) {
path+=";";
}path+=$I$(19).getLaunchJarName$();
}return path;
});

Clazz.newMeth(C$, 'setClassPath$S',  function (jarNames) {
if ((jarNames == null ) || jarNames.equals$O("") ) {
this.classPath=null;
return;
}while (jarNames.startsWith$S(":") || jarNames.startsWith$S(";") ){
jarNames=jarNames.substring$I(1);
}
while (jarNames.endsWith$S(":") || jarNames.endsWith$S(";") ){
jarNames=jarNames.substring$I$I(0, jarNames.length$() - 1);
}
var s=jarNames;
var i=jarNames.indexOf$S(";;");
if (i == -1) {
i=jarNames.indexOf$S("::");
}if (i == -1) {
i=jarNames.indexOf$S(":;");
}if (i == -1) {
i=jarNames.indexOf$S(";:");
}while (i > -1){
jarNames=jarNames.substring$I$I(0, i + 1) + s.substring$I(i + 2);
s=jarNames;
i=jarNames.indexOf$S(";;");
if (i == -1) {
i=jarNames.indexOf$S("::");
}if (i == -1) {
i=jarNames.indexOf$S(":;");
}if (i == -1) {
i=jarNames.indexOf$S(";:");
}}
this.classPath=jarNames;
});

Clazz.newMeth(C$, 'getLaunchClassName$',  function () {
return this.launchClassName;
});

Clazz.newMeth(C$, 'setLaunchClass$S',  function (className) {
if (className == null ) {
return false;
}if ((this.launchClassName == className) && (this.launchClass != null ) ) {
return false;
}this.launchModelScroller=null;
this.launchClassName=className;
this.launchClass=$I$(15,"getClass$S$S",[this.getClassPath$(), className]);
$I$(4,"finest$S",["node " + this.getName$() + ": " + $I$(3).getString$S("Log.Message.SetLaunchClass") + " " + className + (this.launchClass == null  ? " (not found!)" : "") ]);
return this.launchClass != null ;
});

Clazz.newMeth(C$, 'getLaunchClass$',  function () {
if ((this.launchClass == null ) && (this.launchClassName != null ) && !this.launchClassName.equals$O("")  ) {
this.setLaunchClass$S(this.launchClassName);
}return this.launchClass;
});

Clazz.newMeth(C$, 'getLaunchObject$',  function () {
if (this.launchObj != null ) {
return this.launchObj;
} else if (this.isRoot$()) {
return null;
}var node=this.getParent$();
return node.getLaunchObject$();
});

Clazz.newMeth(C$, 'setLaunchObject$O',  function (obj) {
this.launchObj=obj;
});

Clazz.newMeth(C$, 'setDisplayTab$I$S$S$SA',  function (n, title, path, args) {
if (n >= this.tabData.size$()) {
return this.addDisplayTab$S$S$SA(title, path, args);
} else if ((path == null ) || path.equals$O("") ) {
return this.removeDisplayTab$I(n);
} else {
var tab=this.tabData.get$I(n);
tab.title=title;
tab.setPath$S(path);
tab.setModelArgs$SA(args);
$I$(4).finest$S("tab " + n + " changed: [\"" + title + "\", \"" + path + "\"]" );
return tab;
}});

Clazz.newMeth(C$, 'addDisplayTab$S$S$SA',  function (title, path, args) {
if ((path == null ) || path.equals$O("") ) {
return null;
}var tab=Clazz.new_($I$(20,1).c$$S$S,[this, null, title, path]);
tab.setModelArgs$SA(args);
this.tabData.add$O(tab);
$I$(4).finest$S("tab added: [\"" + title + "\", \"" + path + "\"]" );
return tab;
});

Clazz.newMeth(C$, 'insertDisplayTab$I$S$S$SA',  function (n, title, path, args) {
if ((path == null ) || path.equals$O("") || (n >= this.tabData.size$())  ) {
return null;
}var tab=Clazz.new_($I$(20,1).c$$S$S,[this, null, title, path]);
tab.setModelArgs$SA(args);
this.tabData.add$I$O(n, tab);
$I$(4).finest$S("tab inserted: [\"" + title + "\", \"" + path + "\"]" );
return tab;
});

Clazz.newMeth(C$, 'removeDisplayTab$I',  function (n) {
var tab=this.getDisplayTab$I(n);
if (tab != null ) {
this.tabData.remove$O(tab);
$I$(4).finest$S("tab " + n + " removed: [\"" + tab.title + "\", \"" + tab.urlOrModel + "\"]" );
}return tab;
});

Clazz.newMeth(C$, 'getDisplayTab$I',  function (n) {
if (n < 0 || n >= this.tabData.size$() ) {
return null;
}return this.tabData.get$I(n);
});

Clazz.newMeth(C$, 'getDisplayTabCount$',  function () {
return this.tabData.size$();
});

Clazz.newMeth(C$, 'getPDFPaths$',  function () {
var n=this.getDisplayTabCount$();
this.pdf.clear$();
for (var i=0; i < n; i++) {
var path=this.getDisplayTab$I(i).getPath$();
if (path.toLowerCase$().endsWith$S(".pdf")) {
this.pdf.add$O(path);
}}
return this.pdf;
});

Clazz.newMeth(C$, 'getFileName$',  function () {
return this.fileName;
});

Clazz.newMeth(C$, 'getPathString$',  function () {
var nodes=this.getPath$();
var next=nodes[0];
var path=Clazz.new_($I$(21,1).c$$S,[next.name]);
for (var i=1; i < nodes.length; i++) {
next=nodes[i];
path.append$S("/" + next.name);
}
return path.toString();
});

Clazz.newMeth(C$, 'setFileName$S',  function (path) {
if (path == null ) {
this.fileName=null;
} else {
this.fileName=$I$(5,"getPathRelativeTo$S$S",[path, $I$(6).tabSetBasePath]);
}return this.fileName;
});

Clazz.newMeth(C$, 'isParentSelfContained$',  function () {
if (this.parentSelfContained) {
return true;
} else if (this.isRoot$()) {
return false;
}var parent=this.getParent$();
return parent.isSelfContained$();
});

Clazz.newMeth(C$, 'isSelfContained$',  function () {
if (this.selfContained || this.isParentSelfContained$() ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'isPreviewing$',  function () {
if (this.previewing) {
return true;
} else if (this.isRoot$()) {
return false;
}var node=this.getParent$();
return node.isPreviewing$();
});

Clazz.newMeth(C$, 'isSavingHiddenNodes$',  function () {
if (this.saveHiddenNodes) {
return true;
} else if (this.isRoot$()) {
return false;
}var node=this.getParent$();
return node.isSavingHiddenNodes$();
});

Clazz.newMeth(C$, 'setSelfContained$Z',  function (selfContained) {
this.selfContained=selfContained;
});

Clazz.newMeth(C$, 'isSingleVM$',  function () {
if (this.singleVM || $I$(19).isWebStart$() ) {
return true;
} else if (this.isRoot$()) {
return false;
}var parent=this.getParent$();
return this.singleVMOff ? false : parent.isSingleVM$();
});

Clazz.newMeth(C$, 'setSingleVM$Z',  function (singleVM) {
this.singleVM=singleVM;
});

Clazz.newMeth(C$, 'isShowLog$',  function () {
if (this.showLog) {
return true;
} else if (this.isRoot$()) {
return false;
}var parent=this.getParent$();
return parent.isShowLog$();
});

Clazz.newMeth(C$, 'setShowLog$Z',  function (show) {
this.showLog=show;
});

Clazz.newMeth(C$, 'isClearLog$',  function () {
if (this.clearLog) {
return true;
} else if (this.isRoot$()) {
return false;
}var parent=this.getParent$();
return parent.isClearLog$();
});

Clazz.newMeth(C$, 'setClearLog$Z',  function (clear) {
this.clearLog=clear;
});

Clazz.newMeth(C$, 'getLogLevel$',  function () {
if (this.isRoot$()) {
return this.logLevel;
}var parent=this.getParent$();
if (parent.isShowLog$()) {
var parentLevel=parent.getLogLevel$();
if (parentLevel.intValue$() < this.logLevel.intValue$()) {
return parentLevel;
}}return this.logLevel;
});

Clazz.newMeth(C$, 'setLogLevel$java_util_logging_Level',  function (level) {
if (level != null ) {
this.logLevel=level;
}});

Clazz.newMeth(C$, 'isSingleApp$',  function () {
if (this.singleApp) {
return true;
} else if (this.isRoot$()) {
return false;
}var parent=this.getParent$();
return this.singleAppOff ? false : parent.isSingleApp$();
});

Clazz.newMeth(C$, 'setSingleApp$Z',  function (singleApp) {
this.singleApp=singleApp;
});

Clazz.newMeth(C$, 'setHiddenWhenRoot$Z',  function (hide) {
this.hiddenWhenRoot=hide;
});

Clazz.newMeth(C$, 'isButtonView$',  function () {
if (this.buttonView) {
return true;
} else if (this.isRoot$()) {
return false;
}var parent=this.getParent$();
return parent.isButtonView$();
});

Clazz.newMeth(C$, 'setButtonView$Z',  function (buttonView) {
var root=this.getRoot$();
root.buttonView=buttonView;
});

Clazz.newMeth(C$, 'isSingleton$',  function () {
if (this.singleton) {
return true;
} else if (this.isRoot$()) {
return false;
}var parent=this.getParent$();
return parent.isSingleton$();
});

Clazz.newMeth(C$, 'setSingleton$Z',  function (singleton) {
this.singleton=singleton;
});

Clazz.newMeth(C$, 'isHiddenInLauncher$',  function () {
if (this.hiddenInLauncher) {
return true;
} else if (this.isRoot$()) {
return false;
}var parent=this.getParent$();
return parent.isHiddenInLauncher$();
});

Clazz.newMeth(C$, 'setHiddenInLauncher$Z',  function (hide) {
this.hiddenInLauncher=hide;
});

Clazz.newMeth(C$, 'getResource$',  function () {
if (this.fileName == null ) {
return null;
}var path=$I$(5,"getResolvedPath$S$S",[this.fileName, $I$(6).tabSetBasePath]);
return $I$(7).getResource$S(path);
});

Clazz.newMeth(C$, 'exists$',  function () {
return (this.getResource$() != null );
});

Clazz.newMeth(C$, 'getFile$',  function () {
if (this.exists$()) {
return this.getResource$().getFile$();
}return null;
});

Clazz.newMeth(C$, 'matches$org_opensourcephysics_tools_LaunchNode',  function (node) {
if (node == null ) {
return false;
}var match=(this.showLog == node.showLog ) && (this.clearLog == node.clearLog ) && (this.singleton == node.singleton ) && (this.singleVM == node.singleVM ) && (this.hiddenWhenRoot == node.hiddenWhenRoot ) && this.name.equals$O(node.name) && this.description.equals$O(node.description) && this.args[0].equals$O(node.args[0]) && (((this.fileName == null ) && (node.fileName == null ) ) || ((this.fileName != null ) && this.fileName.equals$O(node.fileName) ) ) && (((this.getLaunchClass$() == null ) && (node.getLaunchClass$() == null ) ) || ((this.getLaunchClass$() != null ) && this.getLaunchClass$().equals$O(node.getLaunchClass$()) ) ) && (((this.classPath == null ) && (node.classPath == null ) ) || ((this.classPath != null ) && this.classPath.equals$O(node.classPath) ) )  ;
return match;
});

Clazz.newMeth(C$, 'getChildNode$S',  function (childFileName) {
var e=this.breadthFirstEnumeration$();
while (e.hasMoreElements$()){
var next=e.nextElement$();
if (childFileName.equals$O(next.fileName)) {
return next;
}}
return null;
});

Clazz.newMeth(C$, 'addMenuItemsTo$javax_swing_JComponent',  function (menu) {
var e=this.children$();
while (e.hasMoreElements$()){
var child=e.nextElement$();
if (child.isLeaf$()) {
var item=Clazz.new_([child.toString()],$I$(22,1).c$$S);
menu.add$java_awt_Component(item);
item.setToolTipText$S(child.tooltip);
item.setActionCommand$S(child.getID$());
item.addActionListener$java_awt_event_ActionListener(((P$.LaunchNode$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchNode$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var id=e.getActionCommand$();
var root=this.b$['org.opensourcephysics.tools.LaunchNode'].getRoot$.apply(this.b$['org.opensourcephysics.tools.LaunchNode'], []);
var e2=root.postorderEnumeration$();
while (e2.hasMoreElements$()){
var node=e2.nextElement$();
if (node.getID$().equals$O(id)) {
node.launch$();
break;
}}
});
})()
), Clazz.new_(P$.LaunchNode$1.$init$,[this, null])));
} else {
var item=Clazz.new_([child.toString()],$I$(23,1).c$$S);
menu.add$java_awt_Component(item);
child.addMenuItemsTo$javax_swing_JComponent(item);
}}
});

Clazz.newMeth(C$, 'addTerminateAction$javax_swing_Action',  function (action) {
this.actions.add$O(action);
++this.launchCount;
});

Clazz.newMeth(C$, 'removeTerminateAction$javax_swing_Action',  function (action) {
this.actions.remove$O(action);
this.launchCount=Math.max(0, --this.launchCount);
});

Clazz.newMeth(C$, 'terminate$javax_swing_Action',  function (action) {
if (this.actions.contains$O(action)) {
this.removeTerminateAction$javax_swing_Action(action);
if (this.launchPanel != null ) {
this.launchPanel.repaint$();
}}});

Clazz.newMeth(C$, 'terminateAll$',  function () {
for (var it=this.processes.iterator$(); it.hasNext$(); ) {
var proc=it.next$();
proc.destroy$();
}
for (var it=this.frames.iterator$(); it.hasNext$(); ) {
var frame=it.next$();
var listeners=frame.getWindowListeners$();
for (var j=0; j < listeners.length; j++) {
if (Clazz.instanceOf(listeners[j], "org.opensourcephysics.tools.Launcher.FrameCloser")) {
frame.removeWindowListener$java_awt_event_WindowListener(listeners[j]);
}}
frame.dispose$();
}
for (var it=this.threads.values$().iterator$(); it.hasNext$(); ) {
var thread=it.next$();
if (thread != null ) {
thread.interrupt$();
}}
var allActions=Clazz.new_($I$(17,1).c$$java_util_Collection,[this.actions]);
for (var it=allActions.iterator$(); it.hasNext$(); ) {
var action=it.next$();
if (action != null ) {
action.actionPerformed$java_awt_event_ActionEvent(null);
}}
this.processes.clear$();
this.frames.clear$();
this.threads.clear$();
this.actions.clear$();
this.launchCount=0;
});

Clazz.newMeth(C$, 'getLaunchModelScroller$',  function () {
if (this.launchModelScroller == null ) {
var content=$I$(6,"getModelPane$Class$SA",[this.getLaunchClass$(), this.getArgs$()]);
if (content == null ) {
return null;
}var panel=((P$.LaunchNode$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchNode$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JPanel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=this.$finals$.content.getPreferredSize$();
dim.width+=8;
dim.height+=8;
return dim;
});
})()
), Clazz.new_($I$(11,1),[this, {content:content}],P$.LaunchNode$2));
panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1)));
panel.setBackground$java_awt_Color($I$(13).white);
panel.add$java_awt_Component$O(content, "Center");
this.launchModelScroller=Clazz.new_($I$(14,1).c$$java_awt_Component,[panel]);
}return this.launchModelScroller;
});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(24,1));
}, 1);

Clazz.newMeth(C$, 'getDisplayData',  function () {
if (this.tabData.isEmpty$()) {
return null;
}var data=Clazz.array(String, [this.tabData.size$(), 2]);
for (var i=0; i < this.tabData.size$(); i++) {
var tab=this.tabData.get$I(i);
data[i]=Clazz.array(String, -1, [tab.title, tab.urlOrModel]);
}
return data;
}, p$1);

Clazz.newMeth(C$, 'setDisplayData$SAA',  function (data) {
if (data == null ) {
return;
}this.tabData.clear$();
for (var i=0; i < data.length; i++) {
var tab=Clazz.new_($I$(20,1).c$$S$S,[this, null, data[i][0], data[i][1]]);
this.tabData.add$O(tab);
}
}, p$1);

Clazz.newMeth(C$, 'getDisplayArgs',  function () {
if (this.tabData.isEmpty$()) {
return null;
}var data=Clazz.array(String, [this.tabData.size$(), null]);
for (var i=0; i < this.tabData.size$(); i++) {
var tab=this.tabData.get$I(i);
var args=tab.getModelArgs$();
data[i]=(args.length == 0) ? null : args;
}
return data;
}, p$1);

Clazz.newMeth(C$, 'setDisplayArgs$SAA',  function (data) {
if (data == null ) {
return;
}var len=Math.min(data.length, this.tabData.size$());
for (var i=0; i < len; i++) {
var tab=this.tabData.get$I(i);
tab.setModelArgs$SA(data[i]);
}
}, p$1);

Clazz.newMeth(C$, 'setMinimumArgLength$I',  function (n) {
n=Math.max(n, 1);
if (n == this.args.length) {
return;
}if (n > this.args.length) {
var newArgs=Clazz.array(String, [n]);
for (var i=0; i < n; i++) {
if (i < this.args.length) {
newArgs[i]=this.args[i];
} else {
newArgs[i]="";
}}
this.setArgs$SA(newArgs);
} else {
while ((this.args.length > n) && this.args[this.args.length - 1].equals$O("") ){
var newArgs=Clazz.array(String, [this.args.length - 1]);
for (var i=0; i < newArgs.length; i++) {
newArgs[i]=this.args[i];
}
this.setArgs$SA(newArgs);
}
}});

Clazz.newMeth(C$, 'removeThread$Runnable',  function (runner) {
this.threads.remove$O(runner);
});

Clazz.newMeth(C$, 'addHTML$S$S',  function (title, path) {
return this.addDisplayTab$S$S$SA(title, path, null);
});

Clazz.newMeth(C$, 'insertHTML$I$S$S',  function (n, title, path) {
return this.insertDisplayTab$I$S$S$SA(n, title, path, null);
});

Clazz.newMeth(C$, 'removeHTML$I',  function (n) {
return this.removeDisplayTab$I(n);
});

Clazz.newMeth(C$, 'getHTML$I',  function (n) {
return this.getDisplayTab$I(n);
});

Clazz.newMeth(C$, 'getHTMLCount$',  function () {
return this.getDisplayTabCount$();
});

Clazz.newMeth(C$, 'setHTML$I$S$S',  function (n, title, path) {
return this.setDisplayTab$I$S$S$SA(n, title, path, null);
});

Clazz.newMeth(C$, 'scrollToRef$S',  function (scrollRef) {
});

C$.$static$=function(){C$.$static$=0;
C$.DEFAULT_LOG_LEVEL=$I$(16).OUT_CONSOLE;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.LaunchNode, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.controls.XMLLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var node=obj;
node.setMinimumArgLength$I(1);
if (!node.name.equals$O("")) {
control.setValue$S$O("name", node.name);
}if (!node.description.equals$O("")) {
control.setValue$S$O("description", node.description);
}if (!node.tooltip.equals$O("")) {
control.setValue$S$O("tooltip", node.tooltip);
}if (!node.xsetName.equals$O("")) {
control.setValue$S$O("launchset", node.xsetName);
}control.setValue$S$O("display_tabs", p$1.getDisplayData.apply(node, []));
control.setValue$S$O("display_args", p$1.getDisplayArgs.apply(node, []));
if (node.getLaunchClass$() != null ) {
control.setValue$S$O("launch_class", node.getLaunchClass$().getName$());
} else if (node.launchClassName != null ) {
control.setValue$S$O("launch_class", node.launchClassName);
}if (!node.args[0].equals$O("") || (node.args.length > 1) ) {
control.setValue$S$O("launch_args", node.args);
}if ((node.classPath != null ) && !node.classPath.equals$O("") ) {
control.setValue$S$O("classpath", node.classPath);
}if (node.hiddenWhenRoot) {
control.setValue$S$Z("root_hidden", true);
}if (node.buttonView) {
control.setValue$S$Z("button_view", true);
}if (node.singleton) {
control.setValue$S$Z("singleton", true);
}if (node.singleVM) {
control.setValue$S$Z("single_vm", true);
}if (node.singleVMOff) {
control.setValue$S$Z("single_vm_off", true);
}if (node.showLog) {
control.setValue$S$Z("show_log", true);
}if (node.logLevel !== $I$(1).DEFAULT_LOG_LEVEL ) {
control.setValue$S$O("log_level", node.logLevel.getName$());
}if (node.clearLog) {
control.setValue$S$Z("clear_log", true);
}if (node.singleApp) {
control.setValue$S$Z("single_app", true);
}if (node.singleAppOff) {
control.setValue$S$Z("single_app_off", true);
}if (node.hiddenInLauncher) {
control.setValue$S$Z("hidden_in_launcher", true);
}if (!node.author.equals$O("")) {
control.setValue$S$O("author", node.author);
}if (!node.keywords.equals$O("")) {
control.setValue$S$O("keywords", node.keywords);
}if (!node.level.equals$O("")) {
control.setValue$S$O("level", node.level);
}if (!node.languages.equals$O("")) {
control.setValue$S$O("languages", node.languages);
}if (!node.comment.equals$O("")) {
control.setValue$S$O("comment", node.comment);
}if (!node.appletWidth.equals$O("")) {
control.setValue$S$O("applet_width", node.appletWidth);
}if (!node.appletHeight.equals$O("")) {
control.setValue$S$O("applet_height", node.appletHeight);
}if (node.children != null ) {
var children=Clazz.new_($I$(2,1));
var e=node.children$();
var saveAll=node.isSavingHiddenNodes$();
while (e.hasMoreElements$()){
var child=e.nextElement$();
if (!saveAll && child.isHiddenInLauncher$() ) {
continue;
}if (node.isPreviewing$()) {
children.add$O(child);
} else if ((child.fileName != null ) && !node.isSelfContained$() ) {
children.add$O(child.fileName);
} else {
child.fileName=null;
child.setSelfContained$Z(false);
children.add$O(child);
}}
if (children.size$() > 0) {
control.setValue$S$O("child_nodes", children);
}}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var name=control.getString$S("name");
if (name == null ) {
name=$I$(3).getString$S("NewNode.Name");
}return Clazz.new_($I$(1,1).c$$S,[name]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var node=obj;
var name=control.getString$S("name");
if (name != null ) {
node.name=name;
}var description=control.getString$S("description");
if (description != null ) {
node.description=description;
}var tooltip=control.getString$S("tooltip");
if (tooltip != null ) {
node.tooltip=tooltip;
}var xsetName=control.getString$S("launchset");
if (xsetName != null ) {
node.xsetName=xsetName;
}var url=control.getString$S("url");
if (url != null ) {
p$1.setDisplayData$SAA.apply(node, [Clazz.array(String, -2, [Clazz.array(String, -1, [null, url])])]);
} else {
if (control.getPropertyNamesRaw$().contains$O("html")) {
p$1.setDisplayData$SAA.apply(node, [control.getObject$S("html")]);
} else {
p$1.setDisplayData$SAA.apply(node, [control.getObject$S("display_tabs")]);
}p$1.setDisplayArgs$SAA.apply(node, [control.getObject$S("display_args")]);
}node.setClassPath$S(control.getString$S("classpath"));
var className=control.getString$S("launch_class");
if (className != null ) {
node.launchClassName=className;
node.launchModelScroller=null;
}var args=control.getObject$S("launch_args");
if (args != null ) {
node.setArgs$SA(args);
}node.hiddenWhenRoot=control.getBoolean$S("root_hidden");
node.buttonView=control.getBoolean$S("button_view");
node.singleton=control.getBoolean$S("singleton");
node.singleVM=control.getBoolean$S("single_vm");
node.singleVMOff=control.getBoolean$S("single_vm_off");
node.showLog=control.getBoolean$S("show_log");
node.clearLog=control.getBoolean$S("clear_log");
node.singleApp=control.getBoolean$S("single_app");
node.singleAppOff=control.getBoolean$S("single_app_off");
node.hiddenInLauncher=control.getBoolean$S("hidden_in_launcher");
var logLevel=$I$(4,"parseLevel$S",[control.getString$S("log_level")]);
if (logLevel != null ) {
node.logLevel=logLevel;
}var author=control.getString$S("author");
if (author != null ) {
node.author=author;
}var keywords=control.getString$S("keywords");
if (keywords != null ) {
node.keywords=keywords;
}var level=control.getString$S("level");
if (level != null ) {
node.level=level;
}var lang=control.getString$S("languages");
if (lang != null ) {
node.languages=lang;
}var comment=control.getString$S("comment");
if (comment != null ) {
node.comment=comment;
}var width=control.getString$S("applet_width");
if (width != null ) {
node.appletWidth=width;
}var height=control.getString$S("applet_height");
if (height != null ) {
node.appletHeight=height;
}name=control.getString$S("filename");
if (name != null ) {
node.setFileName$S(name);
}var children=control.getObject$S("child_nodes");
if (children != null ) {
node.removeAllChildren$();
var it=children.iterator$();
while (it.hasNext$()){
var next=it.next$();
if (Clazz.instanceOf(next, "org.opensourcephysics.tools.LaunchNode")) {
var child=next;
node.add$javax_swing_tree_MutableTreeNode(child);
child.setLaunchClass$S(child.launchClassName);
} else if (Clazz.instanceOf(next, "java.lang.String")) {
var fileName=next;
var path=$I$(5,"getResolvedPath$S$S",[fileName, $I$(6).tabSetBasePath]);
$I$(7,"addSearchPath$S",[$I$(6).resourcesPath]);
$I$(7,"addSearchPath$S",[$I$(6).tabSetBasePath]);
var childControl=Clazz.new_($I$(8,1));
var absolutePath=childControl.read$S(path);
if (childControl.failedToRead$()) {
$I$(9,"showMessageDialog$java_awt_Component$O$S$I",[null, $I$(3).getString$S("Dialog.InvalidXML.Message") + " \"" + fileName + "\"" , $I$(3).getString$S("Dialog.InvalidXML.Title"), 2]);
}var root=node.getRoot$();
if ((root.getChildNode$S(fileName) != null ) || fileName.equals$O(root.fileName) ) {
continue;
}var type=childControl.getObjectClass$();
if (Clazz.getClass($I$(1)).isAssignableFrom$Class(type)) {
var child=Clazz.new_([$I$(3).getString$S("NewNode.Name")],$I$(1,1).c$$S);
child.setFileName$S(fileName);
$I$(4,"finest$S",[$I$(3).getString$S("Log.Message.Loading") + ": " + absolutePath ]);
node.add$javax_swing_tree_MutableTreeNode(child);
childControl.loadObject$O(child);
}}}
}return node;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LaunchNode, "DisplayTab", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hyperlinksEnabled=true;
this.modelArgs=Clazz.array(String, [0]);
},1);

C$.$fields$=[['Z',['hyperlinksEnabled','isDisplayable'],'S',['title','urlOrModel'],'O',['url','java.net.URL','modelClass','Class','modelPane','javax.swing.JComponent','modelScroller','javax.swing.JScrollPane','modelArgs','String[]','urlExists','Boolean']]]

Clazz.newMeth(C$, 'c$$S$S',  function (title, path) {
;C$.$init$.apply(this);
this.setTitle$S(title);
this.setPath$S(path);
}, 1);

Clazz.newMeth(C$, 'getPath$',  function () {
return this.urlOrModel;
});

Clazz.newMeth(C$, 'setPath$S',  function (path) {
this.urlOrModel=path;
if (!p$2.setURL$S.apply(this, [path])) {
p$2.setModelClass$S.apply(this, [path]);
}});

Clazz.newMeth(C$, 'getTitle$',  function () {
return this.title;
});

Clazz.newMeth(C$, 'setTitle$S',  function (title) {
this.title=title;
});

Clazz.newMeth(C$, 'getURL$',  function () {
if (this.url == null  && this.modelClass == null   && !"".equals$O(this.urlOrModel) ) {
p$2.setURL$S.apply(this, [this.urlOrModel]);
}return this.url;
});

Clazz.newMeth(C$, 'getModelClass$',  function () {
if ((this.url == null ) && (this.modelClass == null ) && (this.urlOrModel != null ) && !this.urlOrModel.equals$O("")  ) {
p$2.setModelClass$S.apply(this, [this.urlOrModel]);
}return this.modelClass;
});

Clazz.newMeth(C$, 'getModelPane$',  function () {
if ((this.modelPane == null ) && (this.getModelClass$() != null ) ) {
if (Clazz.getClass($I$(10)).isAssignableFrom$Class(this.modelClass)) {
try {
this.modelPane=this.modelClass.newInstance$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
} else {
this.modelPane=$I$(6,"getModelPane$Class$SA",[this.modelClass, this.getModelArgs$()]);
}}return this.modelPane;
});

Clazz.newMeth(C$, 'getModelArgs$',  function () {
return this.modelArgs;
});

Clazz.newMeth(C$, 'setModelArgs$SA',  function (args) {
if (args != null ) {
this.modelArgs=args;
this.modelPane=null;
this.modelScroller=null;
}});

Clazz.newMeth(C$, 'getModelScroller$',  function () {
var content=this.getModelPane$();
if ((this.modelScroller == null ) && (content != null ) ) {
var panel=((P$.LaunchNode$DisplayTab$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LaunchNode$DisplayTab$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JPanel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=this.$finals$.content.getPreferredSize$();
dim.width+=8;
dim.height+=8;
return dim;
});
})()
), Clazz.new_($I$(11,1),[this, {content:content}],P$.LaunchNode$DisplayTab$1));
panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1)));
panel.setBackground$java_awt_Color($I$(13).white);
panel.add$java_awt_Component$O(content, "Center");
this.modelScroller=Clazz.new_($I$(14,1).c$$java_awt_Component,[panel]);
}return this.modelScroller;
});

Clazz.newMeth(C$, 'setMinimumModelArgLength$I',  function (n) {
n=Math.max(n, 0);
if (n == this.modelArgs.length) {
return;
}if (n > this.modelArgs.length) {
var newArgs=Clazz.array(String, [n]);
for (var i=0; i < n; i++) {
if (i < this.modelArgs.length) {
newArgs[i]=this.modelArgs[i];
} else {
newArgs[i]=null;
}}
this.setModelArgs$SA(newArgs);
} else {
while ((this.modelArgs.length > n) && (this.modelArgs[this.modelArgs.length - 1] == null ) ){
var newArgs=Clazz.array(String, [this.modelArgs.length - 1]);
for (var i=0; i < newArgs.length; i++) {
newArgs[i]=this.modelArgs[i];
}
this.setModelArgs$SA(newArgs);
}
}});

Clazz.newMeth(C$, 'setURL$S',  function (path) {
this.url=null;
this.isDisplayable=false;
this.urlExists=null;
var res=$I$(7).getResource$S(path);
if (res != null  && res.getURL$() != null  ) {
this.url=res.getURL$();
try {
var $in=$I$(7).openStream$java_net_URL(this.url);
$in.close$();
$I$(4,"finer$S",[$I$(3).getString$S("Log.Message.URL") + " " + this.url ]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.url=null;
} else {
throw ex;
}
}
}if (this.url == null ) return false;
this.isDisplayable=$I$(6).isDisplayable$S(path);
return true;
}, p$2);

Clazz.newMeth(C$, 'urlExists$',  function () {
return ((this.urlExists == null  ? (this.urlExists=Boolean.valueOf$Z($I$(6).urlExists$java_net_URL(this.url))) : this.urlExists)).valueOf();
});

Clazz.newMeth(C$, 'setModelClass$S',  function (className) {
this.urlOrModel=className;
if (className == null ) {
return false;
}if ((this.modelClass != null ) && className.equals$O(this.modelClass.getName$()) ) {
return false;
}this.modelPane=null;
this.modelScroller=null;
this.modelClass=$I$(15,"getModelClass$S$S",[this.b$['org.opensourcephysics.tools.LaunchNode'].getClassPath$.apply(this.b$['org.opensourcephysics.tools.LaunchNode'], []), className]);
return this.modelClass != null ;
}, p$2);

Clazz.newMeth(C$, 'toString',  function () {
return "[LaunchNode.DisplayTab " + this.title + " " + this.urlOrModel + "]" ;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
