(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'javax.swing.event.SwingPropertyChangeSupport','java.util.ArrayList','javax.swing.tree.TreePath','java.util.Stack']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CheckTreeSelectionModel", null, 'javax.swing.tree.DefaultTreeSelectionModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['model','javax.swing.tree.TreeModel','support','java.beans.PropertyChangeSupport']]]

Clazz.newMeth(C$, 'c$$javax_swing_tree_TreeModel',  function (model) {
Clazz.super_(C$, this);
this.model=model;
this.setSelectionMode$I(4);
this.support=Clazz.new_($I$(1,1).c$$O,[this]);
}, 1);

Clazz.newMeth(C$, 'isPathUnselected$javax_swing_tree_TreePath',  function (path) {
if (this.isSelectionEmpty$()) {
return true;
}if (this.isPathOrAncestorSelected$javax_swing_tree_TreePath(path)) {
return false;
}var selectionPaths=this.getSelectionPaths$();
for (var i=0; i < selectionPaths.length; i++) {
if (path.isDescendant$javax_swing_tree_TreePath(selectionPaths[i])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'isPathOrAncestorSelected$javax_swing_tree_TreePath',  function (path) {
while ((path != null ) && !this.isPathSelected$javax_swing_tree_TreePath(path) ){
path=path.getParentPath$();
}
return path != null ;
});

Clazz.newMeth(C$, 'setSelectionPaths$javax_swing_tree_TreePathA',  function (paths) {
C$.superclazz.prototype.clearSelection$.apply(this, []);
this.addSelectionPaths$javax_swing_tree_TreePathA(paths);
});

Clazz.newMeth(C$, 'addSelectionPaths$javax_swing_tree_TreePathA',  function (paths) {
if (paths == null ) {
return;
}var prev=this.getSelectionPaths$();
for (var i=0; i < paths.length; i++) {
if (this.isSelectionEmpty$()) {
break;
}var path=paths[i];
var selectionPaths=this.getSelectionPaths$();
var toBeRemoved=Clazz.new_($I$(2,1));
for (var j=0; j < selectionPaths.length; j++) {
if (path.isDescendant$javax_swing_tree_TreePath(selectionPaths[j])) {
toBeRemoved.add$O(selectionPaths[j]);
}}
C$.superclazz.prototype.removeSelectionPaths$javax_swing_tree_TreePathA.apply(this, [toBeRemoved.toArray$OA(Clazz.array($I$(3), [0]))]);
}
for (var i=0; i < paths.length; i++) {
var path=paths[i];
var temp=null;
while (p$1.isSiblingsSelected$javax_swing_tree_TreePath.apply(this, [path])){
temp=path;
if (path.getParentPath$() == null ) {
break;
}path=path.getParentPath$();
}
if (temp != null ) {
if (temp.getParentPath$() != null ) {
this.addSelectionPath$javax_swing_tree_TreePath(temp.getParentPath$());
} else {
if (!this.isSelectionEmpty$()) {
this.removeSelectionPaths$javax_swing_tree_TreePathA(this.getSelectionPaths$());
}C$.superclazz.prototype.addSelectionPaths$javax_swing_tree_TreePathA.apply(this, [Clazz.array($I$(3), -1, [temp])]);
}} else {
C$.superclazz.prototype.addSelectionPaths$javax_swing_tree_TreePathA.apply(this, [Clazz.array($I$(3), -1, [path])]);
}}
this.support.firePropertyChange$S$O$O("treepaths", prev, this.getSelectionPaths$());
});

Clazz.newMeth(C$, 'removeSelectionPaths$javax_swing_tree_TreePathA',  function (paths) {
if (this.isSelectionEmpty$()) {
return;
}var prev=this.getSelectionPaths$();
for (var i=0; i < paths.length; i++) {
var path=paths[i];
if (path.getPathCount$() == 1) {
C$.superclazz.prototype.removeSelectionPaths$javax_swing_tree_TreePathA.apply(this, [Clazz.array($I$(3), -1, [path])]);
} else {
if (this.isPathSelected$javax_swing_tree_TreePath(path)) {
C$.superclazz.prototype.removeSelectionPaths$javax_swing_tree_TreePathA.apply(this, [Clazz.array($I$(3), -1, [path])]);
} else {
p$1.unselectAncestor$javax_swing_tree_TreePath.apply(this, [path]);
}}}
this.support.firePropertyChange$S$O$O("treepaths", prev, this.getSelectionPaths$());
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
this.support.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
this.support.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'isSiblingsSelected$javax_swing_tree_TreePath',  function (path) {
var parent=path.getParentPath$();
if (parent == null ) {
return true;
}var node=path.getLastPathComponent$();
var parentNode=parent.getLastPathComponent$();
var childCount=this.model.getChildCount$O(parentNode);
for (var i=0; i < childCount; i++) {
var childNode=this.model.getChild$O$I(parentNode, i);
if (childNode.equals$O(node)) {
continue;
}if (!this.isPathSelected$javax_swing_tree_TreePath(parent.pathByAddingChild$O(childNode))) {
return false;
}}
return true;
}, p$1);

Clazz.newMeth(C$, 'unselectAncestor$javax_swing_tree_TreePath',  function (path) {
var stack=Clazz.new_($I$(4,1));
stack.push$O(path);
var ancestor=path.getParentPath$();
while ((ancestor != null ) && !this.isPathSelected$javax_swing_tree_TreePath(ancestor) ){
stack.push$O(ancestor);
ancestor=ancestor.getParentPath$();
}
if (ancestor == null ) {
return;
}stack.push$O(ancestor);
while (!stack.isEmpty$()){
var next=stack.pop$();
C$.superclazz.prototype.removeSelectionPaths$javax_swing_tree_TreePathA.apply(this, [Clazz.array($I$(3), -1, [next])]);
if (stack.isEmpty$()) {
return;
}var node=next.getLastPathComponent$();
var childCount=this.model.getChildCount$O(node);
for (var i=0; i < childCount; i++) {
var child=this.model.getChild$O$I(node, i);
C$.superclazz.prototype.addSelectionPaths$javax_swing_tree_TreePathA.apply(this, [Clazz.array($I$(3), -1, [next.pathByAddingChild$O(child)])]);
}
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
