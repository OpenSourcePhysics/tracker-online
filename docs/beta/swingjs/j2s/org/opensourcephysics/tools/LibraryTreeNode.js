(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'org.opensourcephysics.controls.XML','java.io.File','org.opensourcephysics.display.OSPRuntime','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.controls.OSPLog','org.opensourcephysics.media.mov.MovieFactory','org.opensourcephysics.tools.LibraryTreeNode','org.opensourcephysics.media.gif.GifDecoder','java.net.URL','javax.imageio.ImageIO','javax.swing.SwingUtilities','org.opensourcephysics.tools.LibraryTreePanel','java.util.HashMap','java.awt.Dimension','java.util.ArrayList','org.opensourcephysics.tools.ToolsRes',['org.opensourcephysics.tools.LibraryTreeNode','.ThumbnailLoader'],'StringBuffer','org.opensourcephysics.tools.LibraryResource','org.opensourcephysics.tools.LibraryBrowser','javax.swing.tree.TreePath','java.util.TreeSet',['org.opensourcephysics.tools.LibraryResource','.Metadata'],'java.awt.image.BufferedImage','java.awt.geom.AffineTransform','org.opensourcephysics.media.core.VideoIO']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LibraryTreeNode", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.tree.DefaultMutableTreeNode', 'Comparable');
C$.$classes$=[['ThumbnailLoader',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.editable=true;
this.resources=Clazz.new_($I$(15,1));
},1);

C$.$fields$=[['Z',['editable'],'S',['tooltip','metadataSource'],'O',['record','org.opensourcephysics.tools.LibraryResource','treePanel','org.opensourcephysics.tools.LibraryTreePanel','resources','java.util.ArrayList','selectedMetadata','org.opensourcephysics.tools.LibraryResource.Metadata']]
,['O',['htmlURLs','java.util.HashMap','+targetURLs','defaultThumbnailDimension','java.awt.Dimension']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_LibraryResource$org_opensourcephysics_tools_LibraryTreePanel',  function (resource, treePanel) {
Clazz.super_(C$, this);
this.record=resource;
this.treePanel=treePanel;
if (treePanel.tree != null ) this.createChildNodes$();
this.setUserObject$O(this);
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj === this ) return true;
if ((obj == null ) || (obj.getClass$() !== this.getClass$() ) ) return false;
var treeNode=obj;
var target1=this.getAbsoluteTarget$();
var target2=treeNode.getAbsoluteTarget$();
var html1=this.getHTMLPath$();
var html2=treeNode.getHTMLPath$();
return (((target1 == null  && target2 == null  ) || (target1 != null  && target2 != null   && target1.equals$O(target2) ) ) && ((html1 == null  && html2 == null  ) || (html1 != null  && html2 != null   && html1.equals$O(html2) ) ) && treeNode.getName$().equals$O(this.getName$())  );
});

Clazz.newMeth(C$, ['compareTo$org_opensourcephysics_tools_LibraryTreeNode','compareTo$O'],  function (node) {
var BEFORE=-1;
var EQUAL=0;
var AFTER=1;
if (this === node  || this.equals$O(node) ) return 0;
var result=this.getName$().compareTo$S(node.getName$());
if (result != 0) return result;
var tar1=this.getAbsoluteTarget$();
var tar2=node.getAbsoluteTarget$();
if (tar1 != null  || tar2 != null  ) {
if (tar1 == null ) return 1;
if (tar2 == null ) return -1;
result=tar1.compareTo$S(tar2);
}if (result != 0) return result;
var html1=this.getHTMLPath$();
var html2=node.getHTMLPath$();
if (html1 != null  || html2 != null  ) {
if (html1 == null ) return 1;
if (html2 == null ) return -1;
return html1.compareTo$S(html2);
}return 0;
});

Clazz.newMeth(C$, 'createChildNodes$',  function () {
var children=Clazz.new_($I$(15,1));
for (var i=0; i < this.getChildCount$(); i++) {
children.add$O(this.getChildAt$I(i).toString());
}
var changed=false;
if (Clazz.instanceOf(this.record, "org.opensourcephysics.tools.LibraryCollection")) {
var collection=this.record;
for (var next, $next = 0, $$next = collection.getResources$(); $next<$$next.length&&((next=($$next[$next])),1);$next++) {
var name=next == null  ? "" : next.getName$();
if ("".equals$O(name)) name=$I$(16).getString$S("LibraryResource.Name.Default");
if (next != null  && !children.contains$O(name) ) {
var newNode=Clazz.new_(C$.c$$org_opensourcephysics_tools_LibraryResource$org_opensourcephysics_tools_LibraryTreePanel,[next, this.treePanel]);
if (this.treePanel.insertChildAt$org_opensourcephysics_tools_LibraryTreeNode$org_opensourcephysics_tools_LibraryTreeNode$I(newNode, this, this.getChildCount$())) {
changed=true;
}}}
}if (changed) this.treePanel.setChanged$();
return changed;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.record.getName$();
});

Clazz.newMeth(C$, 'getBasePath$',  function () {
var base=this.record.getBasePath$();
if (!base.equals$O("")) return base;
var parent=this.getParent$();
if (parent != null ) return parent.getBasePath$();
if (this.treePanel != null ) {
return $I$(1).getDirectoryPath$S(this.treePanel.pathToRoot);
}return "";
});

Clazz.newMeth(C$, 'getHTMLPath$',  function () {
var path=this.record.getHTMLPath$();
if (path != null  && !path.trim$().equals$O("") ) {
path=$I$(1,"getResolvedPath$S$S",[path, this.getBasePath$()]);
return path;
}return null;
});

Clazz.newMeth(C$, 'getHTMLURL$',  function () {
var path=this.getHTMLPath$();
if (path == null ) return null;
var url=null;
var cachedFile=null;
var foundInCache=false;
cachedFile=$I$(4).getOSPCacheFile$S(path);
foundInCache=cachedFile.exists$();
if (C$.htmlURLs.keySet$().contains$O(path)) {
url=C$.htmlURLs.get$O(path);
} else {
var workingPath=path;
if (foundInCache) {
workingPath=cachedFile.toURI$().toString();
}var res=null;
var loadable=$I$(4).isWebConnected$() || !$I$(4).isHTTP$S(workingPath) ;
if (loadable) res=$I$(4).getResourceZipURLsOK$S(workingPath);
if (res != null ) {
url=res.getURL$();
} else {
workingPath=$I$(4).getURIPath$S(workingPath);
if (loadable) res=$I$(4).getResourceZipURLsOK$S(workingPath);
if (res != null ) {
url=res.getURL$();
}}}C$.htmlURLs.put$O$O(path, url);
return url;
});

Clazz.newMeth(C$, 'getHTMLString$',  function () {
if (!this.record.getDescription$().equals$O("")) {
return this.record.getDescription$();
}var target=this.record.getTarget$();
var rtype=this.record.getType$();
var isImage=rtype.equals$O("Image") && target != null  ;
var isVideo=rtype.equals$O("Video") && target != null  ;
var isThumbnailType=isVideo || isImage || $I$(4).isJarZipTrz$S$Z(target, false)  ;
var thumb=null;
if (isThumbnailType) {
thumb=this.record.getThumbnail$();
if (thumb != null  && !this.getThumbnailFile$().exists$() ) thumb=null;
if (thumb == null  && $I$(3).doCacheThumbnail ) {
var source=this.getAbsoluteTarget$();
var thumbFile=this.getThumbnailFile$();
if (thumbFile.exists$()) {
thumb=thumbFile.getAbsolutePath$();
this.record.setThumbnail$S(thumb);
} else {
Clazz.new_([this, null, source, thumbFile.getAbsolutePath$(), "LibraryTreeNode.getHTMLString"],$I$(17,1).c$$S$S$S).runMe$();
}}if (thumb != null ) {
thumb=$I$(1,"getResolvedPath$S$S",[thumb, this.record.getInheritedBasePath$()]);
thumb=$I$(1).forwardSlash$S(thumb);
thumb=$I$(4).getURIPath$S(thumb);
}}var buffer=Clazz.new_($I$(18,1));
var collection=" " + $I$(16).getString$S("LibraryResource.Type.Collection.Description");
var title=this.record.getName$();
if ("".equals$O(title) && this.isRoot$() ) title=this.record.getTitle$S(this.treePanel.pathToRoot);
for (var type, $type = $I$(19).allResourceTypes.iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
var types;
switch (type) {
case "Unknown":
case "PDF":
continue;
case "HTML":
type="Other";
types=Clazz.array(String, -1, ["HTML", "PDF", "Unknown"]);
break;
default:
types=Clazz.array(String, -1, [type]);
break;
}
var children=this.getChildResources$SA(types);
if (children.isEmpty$()) continue;
var s="LibraryResource.Type." + type + ".List" ;
buffer.append$S("<p>" + $I$(16).getString$S(s) + " " + title + collection + ":</p>\n" );
buffer.append$S("<ol>\n");
for (var next, $next = children.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var name=next.getName$();
if (name.equals$O("")) name=$I$(16).getString$S("LibraryResource.Name.Default");
buffer.append$S("<li>" + name + "</li>\n" );
}
buffer.append$S("</ol>\n");
}
var description=buffer.toString();
var htmlCode=$I$(19,"getHTMLBody$S$S$S$S$S$S$S$org_opensourcephysics_tools_LibraryResource_Attachment",[title, this.record.getType$(), thumb, description, null, null, null, null]);
return htmlCode;
});

Clazz.newMeth(C$, 'getTarget$',  function () {
return this.record.getTarget$();
});

Clazz.newMeth(C$, 'getAbsoluteTarget$',  function () {
var target=this.getTarget$();
if (target == null ) return null;
if ($I$(20).isPopulatedCollection$org_opensourcephysics_tools_LibraryTreeNode(this)) {
return this.getBasePath$() + target;
}return $I$(1,"getResolvedPath$S$S",[target, this.getBasePath$()]);
});

Clazz.newMeth(C$, 'getTargetURL$',  function () {
var path=this.getAbsoluteTarget$();
if (path == null ) return null;
var workingPath=path;
var url=null;
var filename=this.record.getProperty$S("download_filename");
var cachedFile=$I$(4).getOSPCacheFile$S$S(path, filename);
var foundInCache=cachedFile.exists$();
if (foundInCache) {
workingPath=$I$(4,"getURIPath$S",[cachedFile.getAbsolutePath$()]);
}if (C$.targetURLs.keySet$().contains$O(path)) {
url=C$.targetURLs.get$O(path);
} else {
if ($I$(3).isJS) {
try {
url=Clazz.new_($I$(9,1).c$$S,[path]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
} else {
throw e;
}
}
} else {
var res=$I$(4).getResourceZipURLsOK$S(workingPath);
if (res != null ) {
url=res.getURL$();
} else {
workingPath=$I$(4).getURIPath$S(workingPath);
res=$I$(4).getResourceZipURLsOK$S(workingPath);
if (res != null ) {
url=res.getURL$();
}}}}C$.targetURLs.put$O$O(path, url);
return url;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.record.toString();
});

Clazz.newMeth(C$, 'getDisplayString$',  function () {
return this.record.getDisplayString$();
});

Clazz.newMeth(C$, 'isEditable$',  function () {
if (this.isRoot$()) return this.editable;
var parent=this.getParent$();
return this.editable && parent.isEditable$() ;
});

Clazz.newMeth(C$, 'setEditable$Z',  function (edit) {
this.editable=edit;
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
if (this.record.setName$S(name)) {
this.treePanel.tree.getModel$().valueForPathChanged$javax_swing_tree_TreePath$O(this.getTreePath$(), name);
this.treePanel.showInfo$org_opensourcephysics_tools_LibraryTreeNode$S(this, "LibraryTreeNode.setName " + name);
this.treePanel.setChanged$();
}});

Clazz.newMeth(C$, 'getTreePath$',  function () {
return Clazz.new_([this.getPath$()],$I$(21,1).c$$OA);
});

Clazz.newMeth(C$, 'setTarget$S',  function (path) {
if (this.record.setTarget$S(path)) {
var type=$I$(19,"getTypeFromPath$S$S",[path, this.getHTMLPath$()]);
if (!"Unknown".equals$O(type)) this.setType$S(type);
$I$(12).htmlPanesByNode.remove$O(this);
this.record.setThumbnail$S(null);
this.treePanel.showInfo$org_opensourcephysics_tools_LibraryTreeNode$S(this, "LibraryTreeNode.setTarget " + path);
this.treePanel.setChanged$();
this.tooltip=null;
return true;
}return false;
});

Clazz.newMeth(C$, 'setHTMLPath$S',  function (path) {
if (this.record.setHTMLPath$S(path)) {
this.treePanel.showInfo$org_opensourcephysics_tools_LibraryTreeNode$S(this, "LibraryTreeNode.setHTMLPath " + path);
this.treePanel.setChanged$();
this.tooltip=null;
}});

Clazz.newMeth(C$, 'setBasePath$S',  function (path) {
if (this.record.setBasePath$S(path)) {
$I$(12).htmlPanesByNode.remove$O(this);
this.record.setThumbnail$S(null);
this.treePanel.showInfo$org_opensourcephysics_tools_LibraryTreeNode$S(this, "LibraryTreeNode.setBasePath " + path);
this.treePanel.setChanged$();
}});

Clazz.newMeth(C$, 'setType$S',  function (type) {
if (this.record.setType$S(type)) {
$I$(12).htmlPanesByNode.remove$O(this);
this.treePanel.showInfo$org_opensourcephysics_tools_LibraryTreeNode$S(this, "LibraryTreeNode.setType");
this.treePanel.setChanged$();
this.tooltip=null;
}});

Clazz.newMeth(C$, 'getChildResources$SA',  function (types) {
this.resources.clear$();
for (var type, $type = 0, $$type = types; $type<$$type.length&&((type=($$type[$type])),1);$type++) {
for (var i=0; i < this.getChildCount$(); i++) {
var child=this.getChildAt$I(i);
if (child.record.getType$().equals$O(type)) this.resources.add$O(child.record);
}
}
return this.resources;
});

Clazz.newMeth(C$, 'getToolTip$',  function () {
if (this.tooltip == null ) {
var buf=Clazz.new_($I$(18,1));
if (this.record.getType$().equals$O("Collection")) {
if (this.isRoot$()) {
if (!"".equals$O(this.treePanel.pathToRoot)) {
buf.append$S($I$(16).getString$S("LibraryTreeNode.Tooltip.CollectionPath") + ": " + this.treePanel.pathToRoot );
}}}var data=this.record.getMetadata$();
if (data != null ) {
for (var next, $next = data.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var key=next.getData$()[0];
var value=next.getData$()[1];
var breakLine=false;
for (var metadataType, $metadataType = 0, $$metadataType = $I$(19).META_TYPES; $metadataType<$$metadataType.length&&((metadataType=($$metadataType[$metadataType])),1);$metadataType++) {
if (metadataType.toLowerCase$().contains$CharSequence(key.toLowerCase$())) key=$I$(16).getString$S("LibraryTreePanel.Label." + metadataType);
}
if (breakLine && value.length$() > 100 ) {
var len=key.length$();
var space="";
for (var i=0; i < len; i++) {
space+="  ";
}
var b=Clazz.new_($I$(18,1));
var line=value.substring$I$I(0, 80);
var remainder=value.substring$I(80);
while (true){
var parts=remainder.split$S$I(" ", 2);
b.append$S(line + parts[0]);
if (parts.length == 1) break;
if (parts[1].length$() < 100) {
b.append$S("\n" + space + parts[1] );
break;
}b.append$S("\n" + space);
line=parts[1].substring$I$I(0, 80);
remainder=parts[1].substring$I(80);
}
value=b.toString();
}if (buf.length$() > 0) buf.append$S(" | ");
buf.append$S(key + ": " + value );
}
}this.tooltip=buf.toString();
}return this.tooltip.length$() > 0 ? this.tooltip : $I$(16).getString$S("LibraryTreeNode.Tooltip.None");
});

Clazz.newMeth(C$, 'getMetadataSource$',  function () {
return this.metadataSource != null  ? this.metadataSource : this.getHTMLPath$();
});

Clazz.newMeth(C$, 'getMetadata$',  function () {
var metaData=this.record.getMetadata$();
if (metaData == null ) {
metaData=Clazz.new_($I$(22,1));
this.record.setMetadata$java_util_TreeSet(metaData);
if (this.record.loaderMetadata != null ) {
for (var i=0; i < this.record.loaderMetadata.length; i++) {
var next=this.record.loaderMetadata[i];
this.record.addMetadata$org_opensourcephysics_tools_LibraryResource_Metadata(Clazz.new_($I$(23,1).c$$S$S,[next[0], next[1]]));
}
}var metaSource=this.getMetadataSource$();
if (metaSource != null ) {
var code=metaSource;
if (!code.contains$CharSequence("<html")) {
var res=$I$(4).getResourceZipURLsOK$S(metaSource);
code=res == null  ? code : res.getString$();
}if (code != null  && code.contains$CharSequence("<html") ) {
var isStandardType=Clazz.array(Boolean.TYPE, [$I$(19).META_TYPES.length]);
var metaList=$I$(20).getMetadataFromHTML$S(code);
for (var i=0; i < metaList.size$(); i++) {
var next=metaList.get$I(i);
var name=next[0];
for (var k=0; k < $I$(19).META_TYPES.length; k++) {
if (!isStandardType[k] && $I$(19).META_TYPES[k].toLowerCase$().contains$CharSequence(name.toLowerCase$()) ) {
name=$I$(19).META_TYPES[k];
isStandardType[k]=true;
}}
this.record.addMetadata$org_opensourcephysics_tools_LibraryResource_Metadata(Clazz.new_($I$(23,1).c$$S$S,[name, next[1]]));
}
}}this.tooltip=null;
}return metaData;
});

Clazz.newMeth(C$, 'getMetadataValue$S',  function (key) {
var searchData=this.record.getMetadata$();
if (searchData != null ) {
for (var next, $next = searchData.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.getData$()[0].indexOf$S(key) > -1) return next.getData$()[1];
}
}return null;
});

Clazz.newMeth(C$, 'getThumbnailFile$',  function () {
var thumbPath=this.record.getThumbnail$();
if (thumbPath != null ) return Clazz.new_($I$(2,1).c$$S,[thumbPath]);
var path=this.getAbsoluteTarget$();
var name=$I$(1,"stripExtension$S",[$I$(1).getName$S(path)]);
var fileName=name + "_thumbnail.png";
return $I$(4).getOSPCacheFile$S$S(path, fileName);
});

Clazz.newMeth(C$, 'createThumbnailFile$java_awt_image_BufferedImage$S$java_awt_Dimension',  function (image, path, maxSize) {
var widthFactor=maxSize.getWidth$() / image.getWidth$();
var heightFactor=maxSize.getHeight$() / image.getHeight$();
var factor=Math.min(widthFactor, heightFactor);
var w=((image.getWidth$() * factor)|0);
var h=((image.getHeight$() * factor)|0);
var thumbnailImage=Clazz.new_($I$(24,1).c$$I$I$I,[w, h, 5]);
var g=thumbnailImage.createGraphics$();
var transform=$I$(25).getScaleInstance$D$D(factor, factor);
g.setTransform$java_awt_geom_AffineTransform(transform);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(image, 0, 0, null);
return $I$(26).writeImageFile$java_awt_image_BufferedImage$S(thumbnailImage, path);
});

C$.$static$=function(){C$.$static$=0;
C$.htmlURLs=Clazz.new_($I$(13,1));
C$.targetURLs=Clazz.new_($I$(13,1));
C$.defaultThumbnailDimension=Clazz.new_($I$(14,1).c$$I$I,[320, 240]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryTreeNode, "ThumbnailLoader", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.SwingWorker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['thumbPath','sourcePath'],'O',['thumbFile','java.io.File']]]

Clazz.newMeth(C$, 'c$$S$S$S',  function (imageSource, thumbnailPath, source) {
Clazz.super_(C$, this);
this.thumbPath=thumbnailPath;
this.sourcePath=imageSource;
}, 1);

Clazz.newMeth(C$, 'doInBackground$',  function () {
this.runMe$();
return null;
});

Clazz.newMeth(C$, 'runMe$',  function () {
var extx=$I$(1).getExtension$S(this.sourcePath);
extx=(extx == null  ? "" : extx.toLowerCase$());
switch (extx) {
case "zip":
case "trz":
var thumbFile=Clazz.new_($I$(2,1).c$$S,[this.thumbPath]);
if ($I$(3).isJS) {
this.b$['org.opensourcephysics.tools.LibraryTreeNode'].record.setThumbnail$S(thumbFile.getAbsolutePath$());
} else {
$I$(4,"getZipEntryBytesAsync$S$java_io_File$java_util_function_Function",[this.sourcePath + "!/*_thumbnail", thumbFile, ((P$.LibraryTreeNode$ThumbnailLoader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LibraryTreeNode$ThumbnailLoader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['apply$BA','apply$O'],  function (bytes) {
if (bytes == null ) $I$(5).fine$S("failed to create thumbnail for " + this.b$['org.opensourcephysics.tools.LibraryTreeNode.ThumbnailLoader'].thumbPath);
this.b$['org.opensourcephysics.tools.LibraryTreeNode.ThumbnailLoader'].doneAsync$java_io_File.apply(this.b$['org.opensourcephysics.tools.LibraryTreeNode.ThumbnailLoader'], [bytes == null  ? null : this.$finals$.thumbFile]);
return null;
});
})()
), Clazz.new_(P$.LibraryTreeNode$ThumbnailLoader$1.$init$,[this, {thumbFile:thumbFile}]))]);
}return;
default:
this.doneAsync$java_io_File($I$(6,"createThumbnailFile$java_awt_Dimension$S$S",[$I$(7).defaultThumbnailDimension, this.sourcePath, this.thumbPath]));
return;
case "gif":
var status=0;
try {
if (false) {
var decoder=Clazz.new_($I$(8,1));
status=decoder.read$S(this.sourcePath);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (status != 0) {
$I$(5).fine$S("failed to create thumbnail for GIF " + this.thumbPath);
this.doneAsync$java_io_File(null);
return;
}break;
case "png":
case "jpeg":
case "jpg":
try {
if (false) {
var url=Clazz.new_([$I$(4).getURIPath$S(this.sourcePath)],$I$(9,1).c$$S);
$I$(10).read$java_net_URL(url);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5).fine$S("failed to create thumbnail for " + this.thumbPath);
this.doneAsync$java_io_File(null);
return;
} else {
throw e;
}
}
break;
}
$I$(4,"copyURLtoFileAsync$S$S$java_util_function_Function",[this.sourcePath, this.thumbPath, ((P$.LibraryTreeNode$ThumbnailLoader$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryTreeNode$ThumbnailLoader$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_io_File','apply$O'],  function (t) /*block*/{
this.b$['org.opensourcephysics.tools.LibraryTreeNode.ThumbnailLoader'].doneAsync$java_io_File.apply(this.b$['org.opensourcephysics.tools.LibraryTreeNode.ThumbnailLoader'], [t]);
return null;
});
})()
), Clazz.new_(P$.LibraryTreeNode$ThumbnailLoader$lambda1.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'doneAsync$java_io_File',  function (thumbFile) {
$I$(11,"invokeLater$Runnable",[((P$.LibraryTreeNode$ThumbnailLoader$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "LibraryTreeNode$ThumbnailLoader$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
try {
this.b$['org.opensourcephysics.tools.LibraryTreeNode'].record.setThumbnail$S.apply(this.b$['org.opensourcephysics.tools.LibraryTreeNode'].record, [this.$finals$.thumbFile == null  || !this.$finals$.thumbFile.exists$.apply(this.$finals$.thumbFile, [])  ? null : this.$finals$.thumbFile.getAbsolutePath$.apply(this.$finals$.thumbFile, [])]);
if (this.b$['org.opensourcephysics.tools.LibraryTreeNode'].record.getThumbnail$.apply(this.b$['org.opensourcephysics.tools.LibraryTreeNode'].record, []) != null ) {
$I$(12).htmlPanesByNode.remove$O.apply($I$(12).htmlPanesByNode, [this.b$['org.opensourcephysics.tools.LibraryTreeNode']]);
this.b$['org.opensourcephysics.tools.LibraryTreeNode'].treePanel.showInfo$org_opensourcephysics_tools_LibraryTreeNode$S.apply(this.b$['org.opensourcephysics.tools.LibraryTreeNode'].treePanel, [this.b$['org.opensourcephysics.tools.LibraryTreeNode'].treePanel.getSelectedNode$.apply(this.b$['org.opensourcephysics.tools.LibraryTreeNode'].treePanel, []), "LibraryTreeNode.ThumbnailDone"]);
}} catch (ignore) {
if (Clazz.exceptionOf(ignore,"Exception")){
} else {
throw ignore;
}
}
});
})()
), Clazz.new_(P$.LibraryTreeNode$ThumbnailLoader$lambda2.$init$,[this, {thumbFile:thumbFile}]))]);
});

Clazz.newMeth(C$, 'done$',  function () {
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
