(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'java.net.URL','javax.xml.parsers.DocumentBuilderFactory','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.tools.LibraryCollection','java.io.ByteArrayInputStream','org.opensourcephysics.tools.LibraryComPADRE','org.opensourcephysics.tools.LibraryResource','org.opensourcephysics.display.OSPRuntime',['org.opensourcephysics.tools.LibraryTreeNode','.ThumbnailLoader'],'java.util.ArrayList','StringBuffer',['org.opensourcephysics.tools.LibraryResource','.Metadata'],['org.opensourcephysics.tools.LibraryResource','.Attachment'],'javax.xml.transform.dom.DOMSource','java.io.File','javax.xml.transform.stream.StreamResult','javax.xml.transform.TransformerFactory']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LibraryComPADRE");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['desiredOSPType']]]

Clazz.newMeth(C$, 'load$org_opensourcephysics_tools_LibraryCollection$S',  function (collection, query) {
try {
var url=Clazz.new_($I$(1,1).c$$S,[query]);
var factory=$I$(2).newInstance$();
var doc=factory.newDocumentBuilder$().parse$java_io_InputStream(url.openStream$());
var nodeList=doc.getElementsByTagName$S("Identify");
var success=false;
for (var i=0; i < nodeList.getLength$(); i++) {
success=C$.loadSubtrees$org_opensourcephysics_tools_LibraryCollection$org_w3c_dom_NodeList$S$S(collection, nodeList.item$I(i).getChildNodes$(), "osp-subject", "") || success ;
}
return success;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(3).warning$S("failed to load ComPADRE collection " + query + " " + e );
} else {
throw e;
}
}
return false;
}, 1);

Clazz.newMeth(C$, 'loadSubtrees$org_opensourcephysics_tools_LibraryCollection$org_w3c_dom_NodeList$S$S',  function (collection, nodeList, attributeType, serviceParameter) {
var success=false;
var dblClick="...";
for (var i=0; i < nodeList.getLength$(); i++) {
if (!(Clazz.instanceOf(nodeList.item$I(i), "org.w3c.dom.Element"))) continue;
var node=nodeList.item$I(i);
if (node.getNodeName$().equals$O("sub-tree-set") && attributeType.equals$O(node.getAttribute$S("type")) ) {
var subTrees=C$.getAllChildren$org_w3c_dom_Node$S(node, "sub-tree");
if (subTrees.size$() > 0) {
var unclassifiedURL=null;
for (var j=0; j < subTrees.size$(); j++) {
if (!(Clazz.instanceOf(subTrees.get$I(j), "org.w3c.dom.Element"))) continue;
var subtree=subTrees.get$I(j);
var name=subtree.getAttribute$S("name");
var serviceParam=subtree.getAttribute$S("service-parameter");
serviceParam=serviceParameter + "&" + $I$(4).getNonURIPath$S(serviceParam) ;
if (name.equals$O("Unclassified")) {
unclassifiedURL=serviceParam;
continue;
}var subCollection=Clazz.new_($I$(5,1).c$$S,[name]);
collection.addResource$org_opensourcephysics_tools_LibraryResource(subCollection);
success=true;
if (C$.getAllChildren$org_w3c_dom_Node$S(subtree, "sub-tree-set").isEmpty$()) {
var nodeName="<h2>" + name + "</h2><blockquote>" ;
subCollection.setDescription$S(nodeName + dblClick + "</blockquote>" );
subCollection.setTarget$S(serviceParam);
} else C$.loadSubtrees$org_opensourcephysics_tools_LibraryCollection$org_w3c_dom_NodeList$S$S(subCollection, subtree.getChildNodes$(), attributeType + "-detail", serviceParam);
}
if (unclassifiedURL != null ) {
collection.setTarget$S(unclassifiedURL);
}}}}
return success;
}, 1);

Clazz.newMeth(C$, 'loadResources$org_opensourcephysics_tools_LibraryTreeNode$Runnable$Runnable',  function (treeNode, onSuccess, onFailure) {
if (!(Clazz.instanceOf(treeNode.record, "org.opensourcephysics.tools.LibraryCollection"))) return;
var collection=treeNode.record;
var success=Clazz.array(Boolean.TYPE, [1]);
var index=Clazz.array(Integer.TYPE, [1]);
var whenDone=((P$.LibraryComPADRE$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryComPADRE$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.collection.setDescription$S(null);
this.$finals$.collection.setTarget$S(null);
if (this.$finals$.success[0]) {
this.$finals$.onSuccess.run$();
} else {
this.$finals$.onFailure.run$();
}});
})()
), Clazz.new_(P$.LibraryComPADRE$1.$init$,[this, {success:success,collection:collection,onSuccess:onSuccess,onFailure:onFailure}]));
try {
var urlPath=treeNode.getAbsoluteTarget$();
var url=Clazz.new_($I$(1,1).c$$S,[urlPath]);
$I$(4,"getURLContentsAsync$java_net_URL$java_util_function_Function",[url, ((P$.LibraryComPADRE$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryComPADRE$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$BA','apply$O'],  function (bytes) /*block*/{
var factory=$I$(2).newInstance$();
var n=0;
var doc;
var list=null;
try {
doc=factory.newDocumentBuilder$.apply(factory, []).parse$java_io_InputStream.apply(factory.newDocumentBuilder$.apply(factory, []), [Clazz.new_($I$(6,1).c$$BA,[bytes])]);
list=doc.getElementsByTagName$S.apply(doc, ["record"]);
n=list.getLength$.apply(list, []);
} catch (e) {
if (Clazz.exceptionOf(e,"org.xml.sax.SAXException") || Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"javax.xml.parsers.ParserConfigurationException")){
e.printStackTrace$.apply(e, []);
} else {
throw e;
}
}
if (n == 0) {
this.$finals$.collection.setDescription$S.apply(this.$finals$.collection, [null]);
this.$finals$.collection.setTarget$S.apply(this.$finals$.collection, [null]);
this.$finals$.onFailure.run$.apply(this.$finals$.onFailure, []);
return null;
}var nextIndex=Clazz.array(Runnable, [1]);
var onFound=((P$.LibraryComPADRE$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryComPADRE$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.success[0]=true;
$I$(7).start$Runnable(this.$finals$.nextIndex[0]);
});
})()
), Clazz.new_(P$.LibraryComPADRE$2.$init$,[this, {success:this.$finals$.success,nextIndex:nextIndex}]));
var onNothingNew=((P$.LibraryComPADRE$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryComPADRE$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.success[0]=true;
$I$(7).start$Runnable(this.$finals$.nextIndex[0]);
});
})()
), Clazz.new_(P$.LibraryComPADRE$3.$init$,[this, {success:this.$finals$.success,nextIndex:nextIndex}]));
var ni=n;
var l=list;
nextIndex[0]=((P$.LibraryComPADRE$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryComPADRE$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.$finals$.index[0] >= this.$finals$.ni) {
this.$finals$.whenDone.run$.apply(this.$finals$.whenDone, []);
} else if (this.$finals$.l != null ) {
$I$(7,"loadNode$org_w3c_dom_Node$org_opensourcephysics_tools_LibraryCollection$org_opensourcephysics_tools_LibraryTreeNode$S$Runnable$Runnable",[this.$finals$.l.item$I.apply(this.$finals$.l, [this.$finals$.index[0]++]), this.$finals$.collection, this.$finals$.treeNode, this.$finals$.urlPath, this.$finals$.onFound, this.$finals$.onNothingNew]);
}});
})()
), Clazz.new_(P$.LibraryComPADRE$4.$init$,[this, {l:l,collection:this.$finals$.collection,treeNode:this.$finals$.treeNode,urlPath:this.$finals$.urlPath,index:this.$finals$.index,onNothingNew:onNothingNew,ni:ni,whenDone:this.$finals$.whenDone,onFound:onFound}]));
$I$(7).start$Runnable(nextIndex[0]);
return null;
});
})()
), Clazz.new_(P$.LibraryComPADRE$lambda1.$init$,[this, {success:success,collection:collection,treeNode:treeNode,urlPath:urlPath,index:index,onFailure:onFailure,whenDone:whenDone}]))]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
whenDone.run$();
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'start$Runnable',  function (runnable) {
runnable.run$();
}, 1);

Clazz.newMeth(C$, 'loadNode$org_w3c_dom_Node$org_opensourcephysics_tools_LibraryCollection$org_opensourcephysics_tools_LibraryTreeNode$S$Runnable$Runnable',  function (node, collection, treeNode, urlPath, onFound, onNothingNew) {
try {
var found=false;
var attachment=null;
if (C$.isDesiredOSPType$org_w3c_dom_Node(node)) {
if ("EJS".equals$O(C$.desiredOSPType) && !C$.isTrackerType$org_w3c_dom_Node(node) ) {
attachment=C$.getAttachment$org_w3c_dom_Node$SA(node, Clazz.array(String, -1, ["Source Code"]));
} else {
attachment=C$.getAttachment$org_w3c_dom_Node$SA(node, Clazz.array(String, -1, ["Main", "Primary"]));
if (attachment == null ) {
attachment=C$.getAttachment$org_w3c_dom_Node$SA(node, Clazz.array(String, -1, ["Supplemental"]));
}}}if (attachment == null ) {
onNothingNew.run$();
return;
}var name=C$.getChildValue$org_w3c_dom_Node$S(node, "title");
var record=Clazz.new_($I$(8,1).c$$S,[name]);
collection.addResource$org_opensourcephysics_tools_LibraryResource(record);
if (C$.setRecord$org_opensourcephysics_tools_LibraryResource$org_w3c_dom_Node$org_opensourcephysics_tools_LibraryResource_Attachment$org_opensourcephysics_tools_LibraryTreeNode(record, node, attachment, treeNode)) {
found=true;
$I$(9).showStatus$S(name);
record.setProperty$S$S("reload_url", urlPath);
}if (found) {
onFound.run$();
} else {
onNothingNew.run$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(3,"debug$S",["LibraryComPADRE exception " + e.getMessage$()]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'reloadResource$org_opensourcephysics_tools_LibraryTreeNode$S$Runnable',  function (treeNode, urlPath, whenDone) {
try {
var record=treeNode.record;
var url=Clazz.new_($I$(1,1).c$$S,[urlPath]);
var factory=$I$(2).newInstance$();
var doc=factory.newDocumentBuilder$().parse$java_io_InputStream(url.openStream$());
var list=doc.getElementsByTagName$S("record");
var n=list.getLength$();
for (var i=0; i < n; i++) {
var node=list.item$I(i);
var attachment=null;
if (C$.isDesiredOSPType$org_w3c_dom_Node(node)) {
if ("EJS".equals$O(C$.desiredOSPType) && !C$.isTrackerType$org_w3c_dom_Node(node) ) {
attachment=C$.getAttachment$org_w3c_dom_Node$SA(node, Clazz.array(String, -1, ["Source Code"]));
} else {
attachment=C$.getAttachment$org_w3c_dom_Node$SA(node, Clazz.array(String, -1, ["Main", "Primary"]));
if (attachment == null ) {
attachment=C$.getAttachment$org_w3c_dom_Node$SA(node, Clazz.array(String, -1, ["Supplemental"]));
}}}if (attachment == null ) continue;
var downloadURL=C$.processURL$S(attachment.url);
if (!downloadURL.equals$O(record.getTarget$())) continue;
C$.setRecord$org_opensourcephysics_tools_LibraryResource$org_w3c_dom_Node$org_opensourcephysics_tools_LibraryResource_Attachment$org_opensourcephysics_tools_LibraryTreeNode(record, node, attachment, treeNode);
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'setRecord$org_opensourcephysics_tools_LibraryResource$org_w3c_dom_Node$org_opensourcephysics_tools_LibraryResource_Attachment$org_opensourcephysics_tools_LibraryTreeNode',  function (record, node, attachment, treeNode) {
try {
var downloadURL=C$.processURL$S(attachment.url);
record.setTarget$S(downloadURL);
var name=C$.getChildValue$org_w3c_dom_Node$S(node, "title");
record.setName$S(name);
record.setProperty$S$S("download_filename", attachment.filename);
var type=C$.getChildValue$org_w3c_dom_Node$S(node, "osp-type");
if (C$.isDesiredOSPType$org_w3c_dom_Node(node)) {
if ("EJS".equals$O(C$.desiredOSPType) && !C$.isTrackerType$org_w3c_dom_Node(node) ) {
type="EJS";
record.setType$S(type);
} else if ("Tracker".equals$O(C$.desiredOSPType)) {
type="Tracker";
record.setType$S(type);
} else if (type.toLowerCase$().contains$CharSequence("track")) {
type="Tracker";
record.setType$S(type);
} else if (type.toLowerCase$().contains$CharSequence("ej")) {
type="EJS";
record.setType$S(type);
} else record.setType$S("Unknown");
}var description=C$.getChildValue$org_w3c_dom_Node$S(node, "description");
var infoURL=C$.getChildValue$org_w3c_dom_Node$S(node, "information-url");
var thumbnailURL=C$.getChildValue$org_w3c_dom_Node$S(node, "thumbnail-url");
var authors="";
for (var next, $next = C$.getAllChildren$org_w3c_dom_Node$S(C$.getFirstChild$org_w3c_dom_Node$S(node, "contributors"), "contributor").iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var el=next;
if ("Author".equals$O(el.getAttribute$S("role"))) authors+=C$.getNodeValue$org_w3c_dom_Node(next) + ", ";
}
if (authors.endsWith$S(", ")) authors=authors.substring$I$I(0, authors.length$() - 2);
if ($I$(9).doCacheThumbnail) {
var cachedFile=$I$(4).getOSPCacheFile$S(thumbnailURL);
var cachePath=cachedFile.getAbsolutePath$();
record.setThumbnail$S(cachePath);
if (!cachedFile.exists$()) {
Clazz.new_($I$(10,1).c$$S$S$S,[treeNode, null, thumbnailURL, cachePath, "LibraryComPADR.setRecord"]).runMe$();
}thumbnailURL=$I$(4).getURIPath$S(cachePath);
} else {
record.setThumbnail$S(thumbnailURL);
}var htmlCode=$I$(8).getHTMLBody$S$S$S$S$S$S$S$org_opensourcephysics_tools_LibraryResource_Attachment(name, type, thumbnailURL, description, authors, null, infoURL, attachment);
record.setDescription$S(htmlCode);
record.setMetadata$java_util_TreeSet(null);
var words=Clazz.new_($I$(11,1));
for (var next, $next = C$.getAllChildren$org_w3c_dom_Node$S(node, "osp-subject").iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var subjects=C$.getNodeValue$org_w3c_dom_Node(next).split$S(" / ");
for (var s, $s = 0, $$s = subjects; $s<$$s.length&&((s=($$s[$s])),1);$s++) {
if (s.equals$O("General")) continue;
if (!words.contains$O(s)) words.add$O(s);
}
}
if (!words.isEmpty$()) {
var buf=Clazz.new_($I$(12,1));
for (var s, $s = words.iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
buf.append$S(s + ", ");
}
var keywords=buf.toString();
keywords=keywords.substring$I$I(0, keywords.length$() - 2);
record.addMetadata$org_opensourcephysics_tools_LibraryResource_Metadata(Clazz.new_($I$(13,1).c$$S$S,["keywords", keywords]));
}if (!"".equals$O(authors)) record.addMetadata$org_opensourcephysics_tools_LibraryResource_Metadata(Clazz.new_($I$(13,1).c$$S$S,["author", authors]));
return true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
return false;
}, 1);

Clazz.newMeth(C$, 'getAttachment$org_w3c_dom_Node$SA',  function (node, attachmentTypes) {
var id=C$.getChildValue$org_w3c_dom_Node$S(node, "file-identifier");
var childList=node.getChildNodes$();
var attachment=null;
for (var i=0, n=childList.getLength$(); i < n; i++) {
var child=childList.item$I(i);
if (!child.getNodeName$().equals$O("attached-document")) continue;
var matchID=id.equals$O(C$.getChildValue$org_w3c_dom_Node$S(child, "file-identifier"));
var fileTypeNode=C$.getFirstChild$org_w3c_dom_Node$S(child, "file-type");
for (var j=0; j < attachmentTypes.length; j++) {
if (fileTypeNode != null  && attachmentTypes[j].equals$O(C$.getNodeValue$org_w3c_dom_Node(fileTypeNode)) ) {
var urlNode=C$.getFirstChild$org_w3c_dom_Node$S(child, "download-url");
if (urlNode != null ) {
if (attachment == null  || matchID ) {
var attachmentURL=C$.getNodeValue$org_w3c_dom_Node(urlNode);
var fileNode=C$.getFirstChild$org_w3c_dom_Node$S(child, "file-name");
attachment=Clazz.new_([node, attachmentTypes[j], attachmentURL, C$.getNodeValue$org_w3c_dom_Node(fileNode), fileNode == null  ? 0 : Integer.parseInt$S(fileNode.getAttribute$S("file-size"))],$I$(14,1).c$$org_w3c_dom_Node$S$S$S$I);
}}}}
}
return attachment;
}, 1);

Clazz.newMeth(C$, 'getFirstChild$org_w3c_dom_Node$S',  function (parent, name) {
var childList=parent.getChildNodes$();
for (var i=0, n=childList.getLength$(); i < n; i++) {
var child=childList.item$I(i);
if (child.getNodeName$().equals$O(name)) return child;
}
return null;
}, 1);

Clazz.newMeth(C$, 'getAllChildren$org_w3c_dom_Node$S',  function (parent, name) {
var list=Clazz.new_($I$(11,1));
var childrenList=parent.getChildNodes$();
for (var i=0, n=childrenList.getLength$(); i < n; i++) {
var child=childrenList.item$I(i);
if (child.getNodeName$().equals$O(name)) list.add$O(child);
}
return list;
}, 1);

Clazz.newMeth(C$, 'getNodeValue$org_w3c_dom_Node',  function (node) {
if (node != null ) {
for (var child=node.getFirstChild$(); child != null ; child=child.getNextSibling$()) {
if (child.getNodeType$() == 3) return child.getNodeValue$();
}
}return null;
}, 1);

Clazz.newMeth(C$, 'getChildValue$org_w3c_dom_Node$S',  function (parent, name) {
var node=C$.getFirstChild$org_w3c_dom_Node$S(parent, name);
return (node == null  ? null : C$.getNodeValue$org_w3c_dom_Node(node));
}, 1);

Clazz.newMeth(C$, 'processURL$S',  function (url) {
var processed=Clazz.new_($I$(12,1));
var index=url.indexOf$S("&amp;");
while (index >= 0){
processed.append$CharSequence(url.subSequence$I$I(0, index + 1));
url=url.substring$I(index + 5);
index=url.indexOf$S("&amp;");
}
processed.append$S(url);
return processed.toString();
}, 1);

Clazz.newMeth(C$, 'writeXmlFile$org_w3c_dom_Document$S',  function (doc, filename) {
try {
var source=Clazz.new_($I$(15,1).c$$org_w3c_dom_Node,[doc]);
var file=Clazz.new_($I$(16,1).c$$S,[filename]);
var result=Clazz.new_($I$(17,1).c$$java_io_File,[file]);
var xformer=$I$(18).newInstance$().newTransformer$();
xformer.transform$javax_xml_transform_Source$javax_xml_transform_Result(source, result);
return $I$(4).getString$S(filename);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'getCollectionName$S',  function (path) {
if (path.startsWith$S("https://www.compadre.org/osp/services/REST/osp_jars.cfm?verb=Identify&OSPType=EJS%20Model&AttachedDocument=Source%20Code")) return "OSP EJS Collection";
if (path.startsWith$S("https://www.compadre.org/osp/services/REST/osp_tracker.cfm?verb=Identify&OSPType=Tracker")) return "OSP Tracker Collection";
return "ComPADRE OSP Collection";
}, 1);

Clazz.newMeth(C$, 'getCollection$S',  function (path) {
var name=C$.getCollectionName$S(path);
var primarySubjectOnly=path.indexOf$S("&OSPPrimary=Subject") > -1;
var collection=Clazz.new_($I$(5,1).c$$S,[name]);
if (name.equals$O("OSP EJS Collection")) {
collection.setHTMLPath$S("https://www.compadre.org/osp/online_help/EjsDL/DLModels.html");
} else if (name.equals$O("OSP Tracker Collection")) {
collection.setHTMLPath$S("https://opensourcephysics.github.io/resources/CAB/comPADRE_collection.html");
}var aboutOSP=Clazz.new_($I$(8,1).c$$S,["About OSP and ComPADRE"]);
aboutOSP.setHTMLPath$S("https://www.compadre.org/osp/online_help/EjsDL/OSPCollection.html");
collection.addResource$org_opensourcephysics_tools_LibraryResource(aboutOSP);
C$.load$org_opensourcephysics_tools_LibraryCollection$S(collection, path);
var base="https://www.compadre.org/osp/services/REST/osp_jars.cfm?OSPType=EJS%20Model&AttachedDocument=Source%20Code";
if (name.equals$O("OSP Tracker Collection")) {
base="https://www.compadre.org/osp/services/REST/osp_tracker.cfm?OSPType=Tracker";
}if (primarySubjectOnly) base+="&OSPPrimary=Subject";
collection.setBasePath$S(base);
return collection;
}, 1);

Clazz.newMeth(C$, 'getCollectionPath$S$Z',  function (path, primarySubjectOnly) {
var isPrimary=path.endsWith$S("&OSPPrimary=Subject");
if (isPrimary && primarySubjectOnly ) return path;
if (!isPrimary && !primarySubjectOnly ) return path;
if (!isPrimary && primarySubjectOnly ) return path + "&OSPPrimary=Subject";
return path.substring$I$I(0, path.length$() - "&OSPPrimary=Subject".length$());
}, 1);

Clazz.newMeth(C$, 'isComPADREPath$S',  function (path) {
if (path != null  && path.startsWith$S("https://www.compadre.org/osp/services/REST/osp") ) return true;
return false;
}, 1);

Clazz.newMeth(C$, 'isPrimarySubjectOnly$S',  function (path) {
return path.indexOf$S("&OSPPrimary=Subject") > -1;
}, 1);

Clazz.newMeth(C$, 'isDesiredOSPType$org_w3c_dom_Node',  function (node) {
var nodes=C$.getAllChildren$org_w3c_dom_Node$S(node, "osp-type");
var s;
for (var next, $next = nodes.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (C$.desiredOSPType == null  || (s=C$.getNodeValue$org_w3c_dom_Node(next)).contains$CharSequence(C$.desiredOSPType)  || s.contains$CharSequence("Tracker") ) return true;
}
return false;
}, 1);

Clazz.newMeth(C$, 'isTrackerType$org_w3c_dom_Node',  function (node) {
var nodes=C$.getAllChildren$org_w3c_dom_Node$S(node, "osp-type");
for (var next, $next = nodes.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (C$.getNodeValue$org_w3c_dom_Node(next).contains$CharSequence("Tracker")) return true;
}
return false;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
