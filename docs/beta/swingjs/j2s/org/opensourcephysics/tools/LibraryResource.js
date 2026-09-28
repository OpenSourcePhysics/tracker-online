(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'java.util.ArrayList','org.opensourcephysics.tools.LibraryResource',['org.opensourcephysics.tools.LibraryResource','.Metadata'],'javax.swing.JButton','org.opensourcephysics.tools.ResourceLoader','java.text.NumberFormat','java.util.TreeMap','org.opensourcephysics.controls.XML','org.opensourcephysics.media.core.VideoIO','java.util.TreeSet','org.opensourcephysics.tools.ToolsRes','org.opensourcephysics.tools.LibraryCollection','StringBuffer','org.opensourcephysics.display.OSPRuntime','java.net.URL',['org.opensourcephysics.tools.LibraryResource','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LibraryResource", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Comparable');
C$.$classes$=[['Attachment',8],['Metadata',12],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.name="";
this.description="";
this.basePath="";
this.htmlPath="";
this.target="";
this.type="Unknown";
this.properties=Clazz.new_($I$(7,1));
},1);

C$.$fields$=[['S',['name','description','basePath','htmlPath','target','type','displayName','thumbnail','collectionPath'],'O',['properties','java.util.Map','metadata','java.util.TreeSet','loaderMetadata','String[][]','parent','org.opensourcephysics.tools.LibraryCollection','treePath','java.util.List']]
,['O',['META_TYPES','String[]','+RESOURCE_TYPES','allResourceTypes','java.util.List','htmlIcon','org.opensourcephysics.display.ResizableIcon','+videoIcon','+trackerIcon','+ejsIcon','+pdfIcon','+unknownIcon','+imageIcon','+dataIcon','+urlIcon','+collectionIcon','megabyteFormat','java.text.DecimalFormat','bodyFont','java.awt.Font','+h1Font','+h2Font','+h3Font']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.setName$S(name);
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S',  function (aName) {
aName=aName == null  ? "" : aName.trim$();
if (!aName.equals$O(this.name)) {
this.name=aName;
return true;
}return false;
});

Clazz.newMeth(C$, 'getBasePath$',  function () {
return this.basePath;
});

Clazz.newMeth(C$, 'setBasePath$S',  function (path) {
path=(path == null  ? "" : path.trim$());
if (!path.equals$O(this.basePath)) {
this.basePath=path;
return true;
}return false;
});

Clazz.newMeth(C$, 'getInheritedBasePath$',  function () {
return (!"".equals$O(this.basePath) ? this.basePath : this.parent != null  ? this.parent.getInheritedBasePath$() : "");
});

Clazz.newMeth(C$, 'getTarget$',  function () {
return ("".equals$O(this.target) ? null : this.target);
});

Clazz.newMeth(C$, 'getAbsoluteTarget$',  function () {
return ("".equals$O(this.target) ? "" : $I$(8,"getResolvedPath$S$S",[this.target, this.getInheritedBasePath$()]));
});

Clazz.newMeth(C$, 'setTarget$S',  function (path) {
path=path == null  ? "" : path.trim$();
if (path.equals$O(this.target)) {
return false;
}this.thumbnail=null;
this.target=path;
var type=C$.getTypeFromPath$S$S(path, this.getHTMLPath$());
if (!"Unknown".equals$O(type)) this.setType$S(type);
return true;
});

Clazz.newMeth(C$, 'getTypeFromPath$S$S',  function (path, htmlPath) {
if (path == null ) path="";
var ext=(path.length$() >= 4 ? $I$(8).getExtension$S(path) : htmlPath == null  ? "" : "html");
ext=ext == null  ? "" : ext.toLowerCase$();
if (ext.contains$CharSequence("&trackerset")) ext="trk";
switch (ext) {
case "html":
return "HTML";
case "trk":
case "trz":
return "Tracker";
case "zip":
return "Unknown";
case "pdf":
return "PDF";
case "ejs":
return "EJS";
default:
var types=$I$(9).getVideoTypesForPath$S(ext);
switch (types.size$() == 0 ? "" : types.get$I(0).getTypeName$()) {
default:
break;
case "Image":
return "Image";
case "Xuggle":
case "JS":
return "Video";
}
case "":
return "Unknown";
}
}, 1);

Clazz.newMeth(C$, 'getHTMLPath$',  function () {
return this.htmlPath;
});

Clazz.newMeth(C$, 'setHTMLPath$S',  function (path) {
path=(path == null  ? "" : path.trim$());
if (!path.equals$O(this.htmlPath)) {
this.htmlPath=path;
if (!(Clazz.instanceOf(this, "org.opensourcephysics.tools.LibraryCollection")) && this.getTarget$() == null  ) {
if (path.equals$O("")) {
this.setType$S("Unknown");
} else {
this.setType$S("HTML");
}}return true;
}return false;
});

Clazz.newMeth(C$, 'getAbsoluteHTMLPath',  function () {
return ("".equals$O(this.htmlPath) ? "" : $I$(8,"getResolvedPath$S$S",[this.htmlPath, this.getInheritedBasePath$()]));
}, p$1);

Clazz.newMeth(C$, 'hasExternalHTML$',  function () {
if (this.getTarget$() != null ) {
var s=this.getTarget$().toLowerCase$();
var html=this.getHTMLPath$();
if (html.startsWith$S(s + "!")) return false;
}return true;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S',  function (desc) {
desc=desc == null  ? "" : desc.trim$();
if (!desc.equals$O(this.description)) {
this.description=desc;
return true;
}return false;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S',  function (type) {
if (this.type.equals$O(type)) return false;
for (var next, $next = C$.allResourceTypes.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.equals$O(type)) {
this.type=next;
return true;
}}
return false;
});

Clazz.newMeth(C$, 'getMetadata$',  function () {
return this.metadata;
});

Clazz.newMeth(C$, 'getMetadata$S',  function (key) {
if (this.metadata == null ) return null;
for (var next, $next = this.metadata.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.data[0].equals$O(key)) return next;
}
return null;
});

Clazz.newMeth(C$, 'setMetadata$java_util_TreeSet',  function (data) {
this.metadata=data;
});

Clazz.newMeth(C$, 'addMetadata$org_opensourcephysics_tools_LibraryResource_Metadata',  function (data) {
var key=data.data[0].toLowerCase$();
var exclude=Clazz.array(String, -1, ["generator", "progid", "originator", "referrer", "theme-color", "color-scheme", "viewport", "googlebot", "robots"]);
for (var i=0; i < exclude.length; i++) {
if (key.equals$O(exclude[i])) return;
}
if (this.metadata == null ) this.metadata=Clazz.new_($I$(10,1));
for (var type, $type = 0, $$type = C$.META_TYPES; $type<$$type.length&&((type=($$type[$type])),1);$type++) {
if (type.toLowerCase$().equals$O(data.getData$()[0])) {
data.getData$()[0]=type;
}}
this.metadata.add$O(data);
});

Clazz.newMeth(C$, 'removeMetadata$org_opensourcephysics_tools_LibraryResource_Metadata',  function (data) {
if (this.metadata == null ) this.metadata=Clazz.new_($I$(10,1));
for (var it=this.metadata.iterator$(); it.hasNext$(); ) {
if (it.next$().equals$O(data)) {
it.remove$();
return true;
}}
return false;
});

Clazz.newMeth(C$, 'setProperty$S$S',  function (name, value) {
this.properties.put$O$O(name, value);
});

Clazz.newMeth(C$, 'getProperty$S',  function (name) {
return this.properties.get$O(name);
});

Clazz.newMeth(C$, 'getPropertyNames$',  function () {
return this.properties.keySet$();
});

Clazz.newMeth(C$, 'getIcon$',  function () {
switch (this.type) {
case "Tracker":
return C$.trackerIcon;
case "EJS":
return C$.ejsIcon;
case "Video":
return C$.videoIcon;
case "Image":
return C$.imageIcon;
case "HTML":
return C$.htmlIcon;
case "PDF":
return C$.pdfIcon;
case "Data":
return C$.dataIcon;
case "URL":
return C$.urlIcon;
}
return null;
});

Clazz.newMeth(C$, 'getThumbnail$',  function () {
return this.thumbnail;
});

Clazz.newMeth(C$, 'setThumbnail$S',  function (imagePath) {
this.thumbnail=imagePath;
});

Clazz.newMeth(C$, 'getCollectionPath$',  function () {
if (this.collectionPath != null ) return this.collectionPath;
if (this.parent != null ) return this.parent.getCollectionPath$();
return null;
});

Clazz.newMeth(C$, 'getTitle$S',  function (path) {
var title=this.getName$();
if (title.equals$O("") && path != null  ) {
var fileName=$I$(8).getName$S(path);
var basePath=$I$(8).getDirectoryPath$S(path);
if ($I$(5).isHTTP$S(basePath)) {
basePath=basePath.substring$I(5);
while (basePath.startsWith$S("/")){
basePath=basePath.substring$I(1);
}
var i=basePath.indexOf$S("/");
if (i > -1) basePath=basePath.substring$I$I(0, i);
title=basePath + ": " + fileName ;
} else {
title=$I$(8).getName$S(path);
}}this.displayName=title;
return title;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getDisplayString$();
});

Clazz.newMeth(C$, 'getDisplayString$',  function () {
if (!this.getName$().equals$O("")) return this.getName$();
if (this.displayName != null ) return this.displayName;
if (this.collectionPath != null  && this.parent == null  ) return this.getTitle$S(this.collectionPath);
if (Clazz.instanceOf(this, "org.opensourcephysics.tools.LibraryCollection")) return $I$(11).getString$S("LibraryCollection.Name.Default");
return $I$(11).getString$S("LibraryResource.Name.Default");
});

Clazz.newMeth(C$, ['compareTo$org_opensourcephysics_tools_LibraryResource','compareTo$O'],  function (resource) {
var BEFORE=-1;
var EQUAL=0;
var AFTER=1;
if (this === resource ) return EQUAL;
var result;
if ((result=this.getName$().compareTo$S(resource.getName$())) != EQUAL) return result;
var tar1=this.getAbsoluteTarget$();
var tar2=resource.getAbsoluteTarget$();
if ((result=(tar1 == null  && tar2 == null   ? EQUAL : tar1 == null  ? AFTER : tar2 == null  ? BEFORE : tar1.compareTo$S(tar2))) != EQUAL) return result;
var html1=p$1.getAbsoluteHTMLPath.apply(this, []);
var html2=p$1.getAbsoluteHTMLPath.apply(resource, []);
if ((result=(html1 == null  && html2 == null   ? EQUAL : html1 == null  ? AFTER : html2 == null  ? BEFORE : html1.compareTo$S(html2))) != EQUAL) return result;
if ((result=this.getType$().compareTo$S(resource.getType$())) != EQUAL) return result;
if (Clazz.instanceOf(this, "org.opensourcephysics.tools.LibraryCollection") && Clazz.instanceOf(resource, "org.opensourcephysics.tools.LibraryCollection") ) {
var children1=(this).getResources$();
var children2=(resource).getResources$();
if (children1.length > children2.length) return BEFORE;
if (children1.length < children2.length) return AFTER;
for (var i=0; i < children1.length; i++) {
result=children1[i].compareTo$org_opensourcephysics_tools_LibraryResource(children2[i]);
if (result != EQUAL) return result;
}
}return EQUAL;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
return (Clazz.instanceOf(obj, "org.opensourcephysics.tools.LibraryResource") && this.compareTo$org_opensourcephysics_tools_LibraryResource(obj) == 0 );
});

Clazz.newMeth(C$, 'getClone$',  function () {
var isCollection=Clazz.instanceOf(this, "org.opensourcephysics.tools.LibraryCollection");
var resource=isCollection ? Clazz.new_([this.getName$()],$I$(12,1).c$$S) : Clazz.new_(C$.c$$S,[this.getName$()]);
resource.setBasePath$S(this.getBasePath$());
resource.setTarget$S(this.getTarget$());
resource.setHTMLPath$S(this.getHTMLPath$());
resource.setDescription$S(this.getDescription$());
resource.setType$S(this.getType$());
for (var next, $next = this.getPropertyNames$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
resource.setProperty$S$S(next, this.getProperty$S(next));
}
if (this.getMetadata$() != null ) {
for (var next, $next = this.getMetadata$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
resource.addMetadata$org_opensourcephysics_tools_LibraryResource_Metadata(Clazz.new_([next.getData$()[0], next.getData$()[1]],$I$(3,1).c$$S$S));
}
}if (isCollection) {
var thisCollection=this;
for (var next, $next = 0, $$next = thisCollection.getResources$(); $next<$$next.length&&((next=($$next[$next])),1);$next++) {
(resource).addResource$org_opensourcephysics_tools_LibraryResource(next.getClone$());
}
}resource.collectionPath=this.getCollectionPath$();
resource.treePath=this.getTreePath$java_util_List(null);
return resource;
});

Clazz.newMeth(C$, 'getTreePath$java_util_List',  function (pathComponents) {
if (pathComponents == null ) pathComponents=Clazz.new_($I$(1,1));
if (this.parent != null ) this.parent.getTreePath$java_util_List(pathComponents);
pathComponents.add$O(this.getDisplayString$());
return pathComponents;
});

Clazz.newMeth(C$, 'getHTMLCode$S$S$S$S$S$S$S$org_opensourcephysics_tools_LibraryResource_Attachment$java_util_Map',  function (title, resourceType, thumbnailPath, description, authors, contact, moreInfoURL, attachment, data) {
var buffer=Clazz.new_($I$(13,1));
buffer.append$S("<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">");
buffer.append$S("\n  <html>");
buffer.append$S("\n    <head>");
buffer.append$S("\n" + C$.getStyleSheetCode$());
buffer.append$S("\n      <meta http-equiv=\"content-type\" content=\"text/html;charset=iso-8859-1\">");
if (data != null ) {
for (var name, $name = data.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
var value=data.get$O(name);
buffer.append$S("\n      <meta name=\"" + name + "\" content=\"" + value + "\">" );
}
}if (title != null  && !title.equals$O("") ) {
buffer.append$S("\n      <title>" + title + "</title>" );
}buffer.append$S("\n    </head>\n");
buffer.append$S("\n    <body>");
buffer.append$S(C$.getHTMLBody$S$S$S$S$S$S$S$org_opensourcephysics_tools_LibraryResource_Attachment(title, resourceType, thumbnailPath, description, authors, contact, moreInfoURL, attachment));
buffer.append$S("\n    </body>");
buffer.append$S("\n  </html>");
return buffer.toString();
}, 1);

Clazz.newMeth(C$, 'getHTMLBody$S$S$S$S$S$S$S$org_opensourcephysics_tools_LibraryResource_Attachment',  function (title, resourceType, thumbnailPath, description, authors, contact, moreInfoURL, attachment) {
var buffer=Clazz.new_($I$(13,1));
if (title != null  && !title.equals$O("") ) {
buffer.append$S("\n      <h2>" + title + "</h2>" );
}buffer.append$S("\n      <blockquote>");
if (resourceType != null  && !resourceType.equals$O("") ) {
if (C$.allResourceTypes.contains$O(resourceType)) {
resourceType=$I$(11).getString$S("LibraryResource.Type." + resourceType);
}buffer.append$S("\n        <b>" + resourceType + "</b>" );
}if (thumbnailPath != null  && !thumbnailPath.equals$O("") ) {
thumbnailPath="<p><img src=\"" + thumbnailPath + "\"" ;
if (title != null  && !title.equals$O("") ) {
thumbnailPath+=" alt=\"" + title + "\"" ;
}buffer.append$S("\n        " + thumbnailPath + "></p>" );
}if (description != null  && !description.equals$O("") ) {
if (!description.startsWith$S("<p>")) {
description="<p>" + C$.insertLineBreaks$S(description) + "</p>" ;
}buffer.append$S("\n        " + description);
}if (authors != null  && !authors.equals$O("") ) {
var authorTitle=$I$(11).getString$S("LibraryTreePanel.Label.Author");
buffer.append$S("\n        <p><b>" + authorTitle + ":  </b>" + authors + "</p>" );
}if (contact != null  && !contact.equals$O("") ) {
var contactTitle=$I$(11).getString$S("LibraryTreePanel.Label.Contact");
buffer.append$S("\n        <p><b>" + contactTitle + ":  </b>" + contact + "</p>" );
}if (attachment != null  && attachment.filename != null  ) {
var filename=attachment.filename;
var resTitle=$I$(11).getString$S("LibraryResource.Description.Resource");
var bytes=attachment.size;
C$.megabyteFormat.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(14).getDecimalFormatSymbols$());
var size=" (" + C$.megabyteFormat.format$D(bytes / 1048576.0) + "MB)" ;
buffer.append$S("\n        <p><b>" + resTitle + ":  </b>" + filename + size + "</p>" );
}if (moreInfoURL != null  && !moreInfoURL.equals$O("") ) {
try {
Clazz.new_($I$(15,1).c$$S,[moreInfoURL]);
var infoTitle=$I$(11).getString$S("LibraryComPADRE.Description.InfoField");
buffer.append$S("\n        <p><b>" + infoTitle + "  </b><a href=\"" + moreInfoURL + "\">" + moreInfoURL + "</a></p>" );
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
} else {
throw e;
}
}
}buffer.append$S("\n      </blockquote>");
return buffer.toString();
}, 1);

Clazz.newMeth(C$, 'getBodyStyle$',  function () {
return "body {\n  font-family: Verdana, Arial, Helvetica, sans-serif;\n  font-size: " + C$.bodyFont.getSize$() + "pt;\n" + "  color: #405050;\n" + "  background-color: #FFFFFF;\n" + "}\n" ;
}, 1);

Clazz.newMeth(C$, 'getH1Style$',  function () {
return "h1 {\n  font-size: " + C$.h1Font.getSize$() + "pt;\n" + "  text-align: center;\n" + "}\n" ;
}, 1);

Clazz.newMeth(C$, 'getH2Style$',  function () {
return "h2 {\n  font-size: " + C$.h2Font.getSize$() + "pt;\n" + "}\n" ;
}, 1);

Clazz.newMeth(C$, 'getH3Style$',  function () {
return "h3 {\n  font-size: " + C$.h3Font.getSize$() + "pt;\n" + "}\n" ;
}, 1);

Clazz.newMeth(C$, 'getPStyle$',  function () {
return "p, li, h4, h5 {\n  font-family: Verdana, Arial, Helvetica, sans-serif;\n  font-size: " + C$.bodyFont.getSize$() + "pt;\n" + "  color: #405050;\n" + "  background-color: #FFFFFF;\n" + "}\n" ;
}, 1);

Clazz.newMeth(C$, 'getHTMLStyles$',  function () {
return C$.getBodyStyle$() + C$.getH1Style$() + C$.getH2Style$() + C$.getH3Style$() + C$.getPStyle$() ;
}, 1);

Clazz.newMeth(C$, 'getStyleSheetCode$',  function () {
return "<style TYPE=\"text/css\">\n<!--\n" + C$.getHTMLStyles$() + "-->\n" + "</style>\n" ;
}, 1);

Clazz.newMeth(C$, 'insertLineBreaks$S',  function (text) {
var parts=text.split$S("\n");
var buf=Clazz.new_($I$(13,1));
var last=parts.length - 1;
for (var i=0; i <= last; i++) {
var next=parts[i];
buf.append$S(next);
if (i < last) buf.append$S("<br>");
}
return buf.toString();
}, 1);

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(16,1));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.META_TYPES=Clazz.array(String, -1, ["Author", "Contact", "Keywords"]);
C$.RESOURCE_TYPES=Clazz.array(String, -1, ["Tracker", "EJS", "Video", "Image", "HTML", "PDF", "Data", "URL", "Unknown"]);
C$.allResourceTypes=Clazz.new_($I$(1,1));
C$.bodyFont=Clazz.new_($I$(4,1)).getFont$().deriveFont$F(12.0);
C$.h1Font=C$.bodyFont.deriveFont$F(24.0);
C$.h2Font=C$.bodyFont.deriveFont$F(16.0);
C$.h3Font=C$.bodyFont.deriveFont$F(14.0);
{
C$.allResourceTypes.add$O("Collection");
for (var next, $next = 0, $$next = C$.RESOURCE_TYPES; $next<$$next.length&&((next=($$next[$next])),1);$next++) C$.allResourceTypes.add$O(next);

var imageFile="/org/opensourcephysics/resources/tools/images/html.gif";
C$.htmlIcon=$I$(5).getResizableIcon$S(imageFile);
imageFile="/org/opensourcephysics/resources/tools/images/pdf.gif";
C$.pdfIcon=$I$(5).getResizableIcon$S(imageFile);
imageFile="/org/opensourcephysics/resources/tools/images/video.gif";
C$.videoIcon=$I$(5).getResizableIcon$S(imageFile);
imageFile="/org/opensourcephysics/resources/tools/images/portrait.gif";
C$.imageIcon=$I$(5).getResizableIcon$S(imageFile);
imageFile="/org/opensourcephysics/resources/tools/images/tracker_icon_16.png";
C$.trackerIcon=$I$(5).getResizableIcon$S(imageFile);
imageFile="/org/opensourcephysics/resources/tools/images/ejsicon.gif";
C$.ejsIcon=$I$(5).getResizableIcon$S(imageFile);
imageFile="/org/opensourcephysics/resources/tools/images/data.gif";
C$.dataIcon=$I$(5).getResizableIcon$S(imageFile);
imageFile="/org/opensourcephysics/resources/tools/images/url.gif";
C$.urlIcon=$I$(5).getResizableIcon$S(imageFile);
imageFile="/org/opensourcephysics/resources/tools/images/question_mark.gif";
C$.unknownIcon=$I$(5).getResizableIcon$S(imageFile);
imageFile="/org/opensourcephysics/resources/tools/images/yellowarrowfolder.gif";
C$.collectionIcon=$I$(5).getResizableIcon$S(imageFile);
try {
C$.megabyteFormat=$I$(6).getInstance$();
C$.megabyteFormat.applyPattern$S("0.0");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryResource, "Attachment", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['size'],'S',['type','url','filename'],'O',['node','org.w3c.dom.Node']]]

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node$S$S$S$I',  function (node, type, url, filename, size) {
;C$.$init$.apply(this);
this.node=node;
this.type=type;
this.url=url;
this.filename=filename;
this.size=size;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return "[Attachment " + this.node + " " + this.type + " " + this.url + " " + this.filename + " " + this.size + "]" ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryResource, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['data','String[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.data=Clazz.array(String, -1, ["", ""]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (key, value) {
;C$.$init$.apply(this);
key=key == null  ? "" : key;
value=value == null  ? "" : value;
this.data=Clazz.array(String, -1, [key, value]);
}, 1);

Clazz.newMeth(C$, 'getData$',  function () {
return this.data;
});

Clazz.newMeth(C$, 'clearData$',  function () {
this.data[0]="";
this.data[1]="";
});

Clazz.newMeth(C$, ['compareTo$org_opensourcephysics_tools_LibraryResource_Metadata','compareTo$O'],  function (meta) {
var result=this.data[0].compareTo$S(meta.data[0]);
return result == 0 ? this.data[1].compareTo$S(meta.data[1]) : result;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.data[0] + ": " + this.data[1] ;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LibraryResource, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var res=obj;
control.setValue$S$O("name", res.name);
if (!"".equals$O(res.description)) control.setValue$S$O("description", res.description);
if (!"".equals$O(res.htmlPath) && res.hasExternalHTML$() ) control.setValue$S$O("html_path", res.htmlPath);
if (!"".equals$O(res.basePath)) control.setValue$S$O("base_path", res.basePath);
if (!"".equals$O(res.target)) control.setValue$S$O("target", res.getTarget$());
if (!"Unknown".equals$O(res.type)) control.setValue$S$O("type", res.type);
if (res.metadata != null  && res.metadata.size$() > 0 ) {
var len=res.metadata.size$();
var data=Clazz.array(String, [len, null]);
var i=0;
for (var next, $next = res.metadata.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
data[i]=next.data;
++i;
}
control.setValue$S$O("metadata", data);
}if (!res.getPropertyNames$().isEmpty$()) {
var props=Clazz.new_($I$(1,1));
for (var name, $name = res.getPropertyNames$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
props.add$O(Clazz.array(String, -1, [name, res.getProperty$S(name)]));
}
control.setValue$S$O("properties", props.toArray$OA(Clazz.array(String, [props.size$(), 2])));
}});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
var name=control.getString$S("name");
return Clazz.new_($I$(2,1).c$$S,[name]);
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var res=obj;
res.setDescription$S(control.getString$S("description"));
res.setBasePath$S(control.getString$S("base_path"));
var target=control.getString$S("target");
if (target != null ) {
res.target=target;
}res.setHTMLPath$S(control.getString$S("html_path"));
res.setType$S(control.getString$S("type"));
var data=control.getObject$S("metadata");
if (data != null ) {
res.loaderMetadata=data;
if (res.getMetadata$() != null ) res.getMetadata$().clear$();
for (var i=0; i < data.length; i++) {
var next=data[i];
res.addMetadata$org_opensourcephysics_tools_LibraryResource_Metadata(Clazz.new_($I$(3,1).c$$S$S,[next[0], next[1]]));
}
}var props=control.getObject$S("properties");
if (props != null ) {
for (var next, $next = 0, $$next = props; $next<$$next.length&&((next=($$next[$next])),1);$next++) {
res.setProperty$S$S(next[0], next[1]);
}
}return res;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
