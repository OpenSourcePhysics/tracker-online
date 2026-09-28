(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'org.opensourcephysics.controls.XML','java.util.HashMap','java.io.File','java.util.ArrayList',['org.opensourcephysics.tools.JarTreeModel','.JarNode'],'java.util.jar.JarFile','java.util.TreeSet']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JarTreeModel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'javax.swing.tree.TreeModel');
C$.$classes$=[['JarNode',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.topLevelNodeArrays=Clazz.new_($I$(2,1));
this.pathMaps=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['root','java.io.File','topLevelNodeArrays','java.util.Map','+pathMaps']]]

Clazz.newMeth(C$, 'c$$java_io_File',  function (root) {
;C$.$init$.apply(this);
this.root=root;
}, 1);

Clazz.newMeth(C$, 'getRoot$',  function () {
return this.root;
});

Clazz.newMeth(C$, 'isLeaf$O',  function (node) {
if (Clazz.instanceOf(node, "java.io.File")) {
var file=node;
if (file.getName$().endsWith$S(".jar")) {
return false;
}return (node).isFile$();
} else if (Clazz.instanceOf(node, "org.opensourcephysics.tools.JarTreeModel.JarNode")) {
var treeNode=node;
return treeNode.isLeaf$();
}return true;
});

Clazz.newMeth(C$, 'getChildCount$O',  function (parent) {
if (Clazz.instanceOf(parent, "java.io.File")) {
var parentFile=parent;
if (parentFile.getName$().endsWith$S(".jar")) {
var nodes=this.getJarNodes$java_io_File(parentFile);
return (nodes == null ) ? 0 : nodes.length;
}var children=(parent).list$();
return (children == null ) ? 0 : children.length;
} else if (Clazz.instanceOf(parent, "org.opensourcephysics.tools.JarTreeModel.JarNode")) {
var treeNode=parent;
return treeNode.getChildCount$();
}return 0;
});

Clazz.newMeth(C$, 'getChild$O$I',  function (parent, index) {
if (Clazz.instanceOf(parent, "java.io.File")) {
var parentFile=parent;
if (parentFile.getName$().endsWith$S(".jar")) {
var nodes=this.getJarNodes$java_io_File(parentFile);
if ((nodes != null ) && (nodes.length > index) ) {
return nodes[index];
}return "no child found";
}var children=parentFile.list$();
if ((children == null ) || (index >= children.length) ) {
return null;
}return ((P$.JarTreeModel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JarTreeModel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.io.File'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'toString',  function () {
return this.getName$();
});
})()
), Clazz.new_($I$(3,1).c$$java_io_File$S,[this, null, parentFile, children[index]],P$.JarTreeModel$1));
} else if (Clazz.instanceOf(parent, "org.opensourcephysics.tools.JarTreeModel.JarNode")) {
var treeNode=parent;
return treeNode.getChildAt$I(index);
}return null;
});

Clazz.newMeth(C$, 'getIndexOfChild$O$O',  function (parent, child) {
if (Clazz.instanceOf(parent, "java.io.File")) {
var parentFile=parent;
if (parentFile.getName$().endsWith$S(".jar")) {
var nodes=this.getJarNodes$java_io_File(parentFile);
if (nodes == null ) {
return -1;
}for (var i=0; i < nodes.length; i++) {
if (nodes[i].equals$O(child)) {
return i;
}}
}var children=(parent).list$();
if (children == null ) {
return -1;
}var childname=(child).getName$();
for (var i=0; i < children.length; i++) {
if (childname.equals$O(children[i])) {
return i;
}}
} else if (Clazz.instanceOf(parent, "org.opensourcephysics.tools.JarTreeModel.JarNode")) {
var treeNode=parent;
return treeNode.getIndex$javax_swing_tree_TreeNode(child);
}return -1;
});

Clazz.newMeth(C$, 'valueForPathChanged$javax_swing_tree_TreePath$O',  function (path, newvalue) {
});

Clazz.newMeth(C$, 'addTreeModelListener$javax_swing_event_TreeModelListener',  function (l) {
});

Clazz.newMeth(C$, 'removeTreeModelListener$javax_swing_event_TreeModelListener',  function (l) {
});

Clazz.newMeth(C$, 'getChild$O$S',  function (parent, name) {
if (Clazz.instanceOf(parent, "java.io.File")) {
var parentFile=parent;
if (parentFile.getName$().endsWith$S(".jar")) {
var nodes=this.getJarNodes$java_io_File(parentFile);
if (nodes != null ) {
for (var i=0; i < nodes.length; i++) {
if (nodes[i].toString().equals$O(name)) {
return nodes[i];
}}
}}var children=parentFile.list$();
if (children != null ) {
for (var i=0; i < children.length; i++) {
if (children[i].toString().equals$O(name)) {
return ((P$.JarTreeModel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "JarTreeModel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.io.File'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'toString',  function () {
return this.getName$();
});
})()
), Clazz.new_($I$(3,1).c$$java_io_File$S,[this, null, parentFile, children[i]],P$.JarTreeModel$2));
}}
}} else if (Clazz.instanceOf(parent, "org.opensourcephysics.tools.JarTreeModel.JarNode")) {
var treeNode=parent;
var e=treeNode.children$();
while (e.hasMoreElements$()){
var next=e.nextElement$();
if (next.toString().equals$O(name)) {
return next;
}}
}return null;
});

Clazz.newMeth(C$, 'getDescendantPaths$OA',  function (parentPath) {
var c=Clazz.new_($I$(4,1));
c.add$O(parentPath);
var parent=parentPath[parentPath.length - 1];
var n=this.getChildCount$O(parent);
for (var i=0; i < n; i++) {
var child=this.getChild$O$I(parent, i);
var childPath=Clazz.array(java.lang.Object, [parentPath.length + 1]);
System.arraycopy$O$I$O$I$I(parentPath, 0, childPath, 0, parentPath.length);
childPath[parentPath.length]=child;
var childPaths=this.getDescendantPaths$OA(childPath);
c.addAll$java_util_Collection(childPaths);
}
return c;
});

Clazz.newMeth(C$, 'getJarNode$java_io_File$S',  function (jarFile, path) {
var pathMap=this.pathMaps.get$O(jarFile);
if (pathMap == null ) {
p$1.readJar$java_io_File.apply(this, [jarFile]);
pathMap=this.pathMaps.get$O(jarFile);
}return pathMap.get$O(path);
});

Clazz.newMeth(C$, 'getJarNodes$java_io_File',  function (jarFile) {
var array=this.topLevelNodeArrays.get$O(jarFile);
if (array == null ) {
p$1.readJar$java_io_File.apply(this, [jarFile]);
array=this.topLevelNodeArrays.get$O(jarFile);
}return array;
});

Clazz.newMeth(C$, 'readJar$java_io_File',  function (jarFile) {
var entries=p$1.getJarEntries$java_io_File.apply(this, [jarFile]);
var topLevelNodes=Clazz.new_($I$(4,1));
var nodes=Clazz.new_($I$(2,1));
for (var it=entries.iterator$(); it.hasNext$(); ) {
var path=$I$(1,"forwardSlash$S",[it.next$().toString()]);
if (path.startsWith$S("META-INF")) {
continue;
}var parent=null;
var parentPath="";
while (path != null ){
var n=path.indexOf$S("/");
if (n > -1) {
parentPath+=path.substring$I$I(0, n + 1);
var node=nodes.get$O(parentPath);
if (node == null ) {
node=Clazz.new_($I$(5,1).c$$S,[this, null, parentPath]);
nodes.put$O$O(parentPath, node);
if (parent != null ) {
parent.add$javax_swing_tree_MutableTreeNode(node);
} else {
topLevelNodes.add$O(node);
}}path=path.substring$I(n + 1);
parent=node;
} else {
path=parentPath + path;
var node=nodes.get$O(path);
if (node == null ) {
node=Clazz.new_($I$(5,1).c$$S,[this, null, path]);
nodes.put$O$O(path, node);
if (parent != null ) {
parent.add$javax_swing_tree_MutableTreeNode(node);
} else {
topLevelNodes.add$O(node);
}}path=null;
}}
}
var array=topLevelNodes.toArray$OA(Clazz.array($I$(5), [0]));
this.topLevelNodeArrays.put$O$O(jarFile, array);
this.pathMaps.put$O$O(jarFile, nodes);
}, p$1);

Clazz.newMeth(C$, 'getJarEntries$java_io_File',  function (jarFile) {
var jar=null;
try {
jar=Clazz.new_($I$(6,1).c$$java_io_File,[jarFile]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
if (jar != null ) {
var entries=Clazz.new_($I$(7,1));
for (var e=jar.entries$(); e.hasMoreElements$(); ) {
var entry=e.nextElement$();
entries.add$O(entry.getName$());
}
try {
jar.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return entries;
}return null;
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.JarTreeModel, "JarNode", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.tree.DefaultMutableTreeNode');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name']]]

Clazz.newMeth(C$, 'c$$S',  function (path) {
Clazz.super_(C$, this);
this.name=$I$(1).getName$S(path);
if (this.name.equals$O("")) {
this.name=$I$(1,"getName$S",[path.substring$I$I(0, path.length$() - 1)]);
}}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
