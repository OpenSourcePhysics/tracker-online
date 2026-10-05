(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'org.opensourcephysics.controls.XML','org.opensourcephysics.tools.Launcher','org.opensourcephysics.display.OSPRuntime','java.io.File']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LauncherUndo", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.undo.UndoManager');
C$.$classes$=[['LoadEdit',4],['NavEdit',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['launcher','org.opensourcephysics.tools.Launcher']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_Launcher',  function (launcher) {
Clazz.super_(C$, this);
this.setLauncher$org_opensourcephysics_tools_Launcher(launcher);
}, 1);

Clazz.newMeth(C$, 'setLauncher$org_opensourcephysics_tools_Launcher',  function (launcher) {
this.launcher=launcher;
});

Clazz.newMeth(C$, 'canReload$',  function () {
return Clazz.instanceOf(this.editToBeUndone$(), "org.opensourcephysics.tools.LauncherUndo.LoadEdit");
});

Clazz.newMeth(C$, 'getLauncherState$',  function () {
if (this.launcher.tabSetName == null ) {
return null;
}var fileName=$I$(1,"getResolvedPath$S$S",[this.launcher.tabSetName, $I$(2).tabSetBasePath]);
if (!fileName.startsWith$S($I$(2).defaultFileName) && $I$(2).tabSetBasePath.equals$O("") ) {
fileName=$I$(3).getLaunchJarName$() + "!/" + fileName ;
} else {
var file=Clazz.new_($I$(4,1).c$$S,[fileName]);
if (!file.exists$()) {
return null;
}}var state=Clazz.array(String, [2]);
state[0]=fileName;
if (this.launcher.getSelectedNode$() != null ) {
state[1]=this.launcher.getSelectedNode$().getPathString$();
} else {
state[1]=(this.launcher.getSelectedTab$() == null ) ? "" : this.launcher.getSelectedTab$().getRootNode$().name;
}return state;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.LauncherUndo, "LoadEdit", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.args=Clazz.array(String, [2]);
this.prev=Clazz.array(String, [2]);
},1);

C$.$fields$=[['O',['args','String[]','+prev']]]

Clazz.newMeth(C$, 'c$$SA$SA',  function (newArgs, prevArgs) {
Clazz.super_(C$, this);
if (newArgs != null ) {
this.args[0]=newArgs[0];
this.args[1]=(newArgs.length < 2) ? "" : newArgs[1];
}this.prev[0]=prevArgs[0];
this.prev[1]=(prevArgs.length < 2) ? "" : prevArgs[1];
}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
this.b$['org.opensourcephysics.tools.LauncherUndo'].launcher.postEdits=false;
this.b$['org.opensourcephysics.tools.LauncherUndo'].launcher.open$SA(this.prev);
if (this.args[0] == null ) {
var n=this.b$['org.opensourcephysics.tools.LauncherUndo'].edits.size$() - 1;
this.b$['org.opensourcephysics.tools.LauncherUndo'].trimEdits$I$I.apply(this.b$['org.opensourcephysics.tools.LauncherUndo'], [n, n]);
}this.b$['org.opensourcephysics.tools.LauncherUndo'].launcher.refreshGUI$();
this.b$['org.opensourcephysics.tools.LauncherUndo'].launcher.postEdits=true;
});

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
this.b$['org.opensourcephysics.tools.LauncherUndo'].launcher.postEdits=false;
this.b$['org.opensourcephysics.tools.LauncherUndo'].launcher.open$SA(this.args);
this.b$['org.opensourcephysics.tools.LauncherUndo'].launcher.refreshGUI$();
this.b$['org.opensourcephysics.tools.LauncherUndo'].launcher.postEdits=true;
});

Clazz.newMeth(C$, 'getPresentationName$',  function () {
return "Link";
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LauncherUndo, "NavEdit", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['undoFile','redoFile','undoNode','redoNode'],'O',['undoPage','Integer','+redoPage','redoURL','java.net.URL','+undoURL']]]

Clazz.newMeth(C$, 'c$$OA$OA',  function (oldState, newState) {
Clazz.super_(C$, this);
this.undoFile=oldState[0];
this.redoFile=newState[0];
this.undoNode=oldState[1];
this.redoNode=newState[1];
this.undoPage=oldState[2];
this.redoPage=newState[2];
this.undoURL=oldState[3];
this.redoURL=newState[3];
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_LaunchNode$org_opensourcephysics_tools_LaunchNode',  function (prev, node) {
Clazz.super_(C$, this);
if (prev != null ) {
this.undoNode=prev.getPathString$();
this.undoURL=prev.getURL$();
this.undoPage=Integer.valueOf$I(prev.tabNumber);
}if (node != null ) {
this.redoNode=node.getPathString$();
this.redoURL=node.getURL$();
this.redoPage=Integer.valueOf$I(node.tabNumber);
}}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
if ((this.undoFile != null ) && !this.undoFile.equals$O(this.redoFile) ) {
}this.b$['org.opensourcephysics.tools.LauncherUndo'].launcher.postEdits=false;
var page=(this.undoPage == null ) ? 0 : this.undoPage.intValue$();
this.b$['org.opensourcephysics.tools.LauncherUndo'].launcher.setSelectedNode$S$I$java_net_URL(this.undoNode, page, this.undoURL);
this.b$['org.opensourcephysics.tools.LauncherUndo'].launcher.postEdits=true;
});

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
if ((this.redoFile != null ) && !this.redoFile.equals$O(this.undoFile) ) {
}this.b$['org.opensourcephysics.tools.LauncherUndo'].launcher.postEdits=false;
var page=(this.redoPage == null ) ? 0 : this.redoPage.intValue$();
this.b$['org.opensourcephysics.tools.LauncherUndo'].launcher.setSelectedNode$S$I$java_net_URL(this.redoNode, page, this.redoURL);
this.b$['org.opensourcephysics.tools.LauncherUndo'].launcher.postEdits=true;
});

Clazz.newMeth(C$, 'getPresentationName$',  function () {
return "Navigation";
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
