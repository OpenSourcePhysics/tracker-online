(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'java.util.TreeMap','java.awt.Color','javax.swing.JTextField','java.util.ArrayList','org.opensourcephysics.cabrillo.tracker.TrackerRes','java.awt.Component','javax.swing.Box','org.opensourcephysics.cabrillo.tracker.TToolBar','org.opensourcephysics.cabrillo.tracker.Tracker','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.controls.XML','java.awt.Dimension','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.cabrillo.tracker.HelpFinder','java.awt.event.KeyAdapter','javax.swing.JLabel','javax.swing.BorderFactory','javax.swing.JButton','javax.swing.AbstractAction','org.opensourcephysics.tools.LaunchNode','org.opensourcephysics.display.OSPRuntime','java.io.File','javax.swing.JOptionPane','java.io.FileWriter','StringBuffer']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HelpFinder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['contextPhraseLength','contextPhraseTrim','minimumSearchPhraseLength'],'S',['css'],'O',['pages','java.util.Map','+pageNames','+anchorNames','+pagePaths','_RED','java.awt.Color','helpLauncher','org.opensourcephysics.tools.Launcher','searchResultsTab','org.opensourcephysics.tools.LaunchPanel','rootNode','org.opensourcephysics.tools.LaunchNode','searchField','javax.swing.JTextField','searchLabel','javax.swing.JLabel','clearSearchButton','javax.swing.JButton']]]

Clazz.newMeth(C$, 'search$S$java_util_ArrayList',  function (searchPhrase, termsFound) {
var results=C$.search$S(searchPhrase);
if (results.size$() > 0) {
termsFound.add$O(searchPhrase);
return results;
}var terms=searchPhrase.split$S(" ");
if (terms.length < 2) return results;
var allResults=Clazz.new_($I$(4,1));
var termResults=Clazz.new_($I$(4,1));
for (var term, $term = 0, $$term = terms; $term<$$term.length&&((term=($$term[$term])),1);$term++) {
termResults=C$.search$S(term);
allResults.add$O(termResults);
}
var contexts=Clazz.new_($I$(4,1));
 outer : for (var next, $next = termResults.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
contexts.clear$();
var keyword=next[2];
for (var nextResults, $nextResults = allResults.iterator$(); $nextResults.hasNext$()&&((nextResults=($nextResults.next$())),1);) {
var found=false;
 inner : for (var result, $result = nextResults.iterator$(); $result.hasNext$()&&((result=($result.next$())),1);) {
if (keyword.equals$O(result[2])) {
found=true;
contexts.add$O(result[1]);
break inner;
}}
if (!found) continue outer;
}
var context=C$.getMergedContext$java_util_ArrayList(contexts);
results.add$O(Clazz.array(String, -1, [next[0], context, next[2]]));
}
if (results.size$() > 0) {
for (var term, $term = 0, $$term = terms; $term<$$term.length&&((term=($$term[$term])),1);$term++) {
termsFound.add$O(term);
}
}return results;
}, 1);

Clazz.newMeth(C$, 'getMergedContext$java_util_ArrayList',  function (contexts) {
var phrases=Clazz.new_($I$(4,1));
var cleanStarts=Clazz.new_($I$(4,1));
var cleanEnds=Clazz.new_($I$(4,1));
for (var next, $next = contexts.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (!next.startsWith$S("...")) {
cleanStarts.add$O(next.substring$I$I(0, Math.min(14, next.length$())));
}if (!next.endsWith$S("...")) {
cleanEnds.add$O(next.substring$I(Math.max(0, next.length$() - 14)));
}next=next.replaceAll$S$S("\\.\\.\\.", "");
if (phrases.isEmpty$()) {
phrases.add$O(next);
continue;
}var merged=false;
var testing=Clazz.new_($I$(4,1).c$$java_util_Collection,[phrases]);
for (var context, $context = testing.iterator$(); $context.hasNext$()&&((context=($context.next$())),1);) {
if (context.contains$CharSequence(next)) {
merged=true;
break;
}if (next.contains$CharSequence(context)) {
phrases.remove$O(context);
phrases.add$O(next);
merged=true;
break;
}}
if (!merged && next.length$() > 15 ) {
var toMatch=next.substring$I$I(0, 15);
for (var context, $context = testing.iterator$(); $context.hasNext$()&&((context=($context.next$())),1);) {
var n=context.indexOf$S(toMatch);
if (n > 0) {
phrases.remove$O(context);
context=context.substring$I$I(0, n) + next;
phrases.add$O(context);
merged=true;
break;
}}
if (!merged) {
var len=next.length$();
toMatch=next.substring$I$I(len - 15, len);
for (var context, $context = testing.iterator$(); $context.hasNext$()&&((context=($context.next$())),1);) {
var n=context.indexOf$S(toMatch);
if (n > 0) {
phrases.remove$O(context);
context=next + context.substring$I(n + 15);
phrases.add$O(context);
merged=true;
break;
}}
}}if (!merged) {
phrases.add$O(next);
}}
var context="";
var addEllipsis=true;
for (var next, $next = phrases.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (!addEllipsis) context+="\" | \"";
addEllipsis=true;
for (var cleanStart, $cleanStart = cleanStarts.iterator$(); $cleanStart.hasNext$()&&((cleanStart=($cleanStart.next$())),1);) {
if (next.startsWith$S(cleanStart)) addEllipsis=false;
}
if (addEllipsis) context+="...";
context+=next;
addEllipsis=true;
for (var cleanEnd, $cleanEnd = cleanEnds.iterator$(); $cleanEnd.hasNext$()&&((cleanEnd=($cleanEnd.next$())),1);) {
if (next.endsWith$S(cleanEnd)) addEllipsis=false;
}
}
if (addEllipsis) context+="...";
return context.trim$();
}, 1);

Clazz.newMeth(C$, 'getNavComponentsFor$org_opensourcephysics_tools_Launcher',  function (launcher) {
C$.helpLauncher=launcher;
C$.searchLabel.setText$S($I$(5).getString$S("HelpFinder.Label.SearchFor.Text") + ":");
C$.searchLabel.setToolTipText$S($I$(5).getString$S("HelpFinder.Label.SearchFor.Tooltip"));
C$.searchField.setToolTipText$S($I$(5).getString$S("HelpFinder.Label.SearchFor.Tooltip"));
C$.clearSearchButton.setText$S($I$(5).getString$S("HelpFinder.Button.ClearResults.Text"));
C$.clearSearchButton.setToolTipText$S($I$(5).getString$S("HelpFinder.Button.ClearResults.Tooltip"));
return Clazz.array($I$(6), -1, [C$.searchLabel, C$.searchField, $I$(7).createHorizontalStrut$I(4), C$.clearSearchButton, $I$(8).getSeparator$()]);
}, 1);

Clazz.newMeth(C$, 'search$S',  function (searchPhrase) {
searchPhrase=searchPhrase.toLowerCase$();
var keywordsFound=Clazz.new_($I$(4,1));
var results=Clazz.new_($I$(4,1));
for (var pageKey, $pageKey = C$.pageNames.keySet$().iterator$(); $pageKey.hasNext$()&&((pageKey=($pageKey.next$())),1);) {
var pageTitle=C$.pageNames.get$O(pageKey);
if (pageTitle.toLowerCase$().contains$CharSequence(searchPhrase)) {
 inner : for (var anchor, $anchor = C$.anchorNames.keySet$().iterator$(); $anchor.hasNext$()&&((anchor=($anchor.next$())),1);) {
var sectionTitle=C$.anchorNames.get$O(anchor);
if (sectionTitle != null  && sectionTitle.equals$O(pageTitle) ) {
var anchors=C$.pages.get$O(pageKey);
var lines=anchors.get$O(anchor);
var line=(lines != null  && lines.size$() > 0 ) ? lines.get$I(0) : pageTitle;
var context=C$.getContextPhrase$S$S(line, searchPhrase);
var keyword=pageKey + "#" + anchor ;
var fullPath=C$.pagePaths.get$O(pageKey) + "#" + anchor ;
var result=Clazz.array(String, -1, [pageTitle, context, fullPath]);
results.add$O(result);
keywordsFound.add$O(keyword);
break inner;
}}
}}
for (var anchor, $anchor = C$.anchorNames.keySet$().iterator$(); $anchor.hasNext$()&&((anchor=($anchor.next$())),1);) {
var section=C$.anchorNames.get$O(anchor);
if (section != null  && section.toLowerCase$().contains$CharSequence(searchPhrase) ) {
for (var pageKey, $pageKey = C$.pages.keySet$().iterator$(); $pageKey.hasNext$()&&((pageKey=($pageKey.next$())),1);) {
var anchors=C$.pages.get$O(pageKey);
for (var next, $next = anchors.keySet$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next.equals$O(anchor)) {
var keyword=pageKey + "#" + anchor ;
if (!keywordsFound.contains$O(keyword)) {
var pageName=C$.pageNames.get$O(pageKey);
var lines=anchors.get$O(anchor);
var line=(lines != null  && lines.size$() > 0 ) ? lines.get$I(0) : pageName;
var context=C$.getContextPhrase$S$S(line, searchPhrase);
var name=pageName + ": " + section ;
var fullPath=C$.pagePaths.get$O(pageKey) + "#" + anchor ;
var result=Clazz.array(String, -1, [name, context, fullPath]);
results.add$O(result);
keywordsFound.add$O(keyword);
}}}
}
}}
for (var pageKey, $pageKey = C$.pages.keySet$().iterator$(); $pageKey.hasNext$()&&((pageKey=($pageKey.next$())),1);) {
var anchors=C$.pages.get$O(pageKey);
for (var anchor, $anchor = anchors.keySet$().iterator$(); $anchor.hasNext$()&&((anchor=($anchor.next$())),1);) {
var keyword=pageKey + "#" + anchor ;
var lines=anchors.get$O(anchor);
for (var line, $line = lines.iterator$(); $line.hasNext$()&&((line=($line.next$())),1);) {
if (!keywordsFound.contains$O(keyword)) {
var n=line.toLowerCase$().indexOf$S(searchPhrase);
if (n > -1) {
var phrase=C$.getContextPhrase$S$S(line, searchPhrase);
var name=C$.pageNames.get$O(pageKey);
var section=C$.anchorNames.get$O(anchor);
if (section != null  && !section.equals$O(name) ) {
name+=": " + section;
}var fullPath=C$.pagePaths.get$O(pageKey) + "#" + anchor ;
var result=Clazz.array(String, -1, [name, phrase, fullPath]);
results.add$O(result);
keywordsFound.add$O(keyword);
}}}
}
}
return results;
}, 1);

Clazz.newMeth(C$, 'initialize$',  function () {
var url=$I$(9).getClassResource$S("resources/help/tracker_topics.xml");
var xml=$I$(10,"getString$S",[url.toExternalForm$()]);
var control=Clazz.new_($I$(11,1).c$$S,[xml]);
var children=control.getObject$S("child_nodes");
for (var next, $next = children.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var pagekey=next.getKeywords$();
var name=next.getName$();
C$.pageNames.put$O$O(pagekey, name);
var path=next.getDisplayTab$I(0).getURL$().toString();
C$.pagePaths.put$O$O(pagekey, path);
if (C$.css == null ) {
C$.css=$I$(12).getDirectoryPath$S(path) + "/help.css";
}var html=$I$(10).getString$S(path);
var map=C$.getAnchors$S(html);
C$.pages.put$O$O(pagekey, map);
}
C$.searchField=((P$.HelpFinder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "HelpFinder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JTextField'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
return Clazz.new_([((100 * $I$(14).getFactor$())|0), $I$(15).clearSearchButton.getPreferredSize$().height],$I$(13,1).c$$I$I);
});
})()
), Clazz.new_($I$(3,1).c$$I,[this, null, 20],P$.HelpFinder$1));
C$.searchField.addKeyListener$java_awt_event_KeyListener(((P$.HelpFinder$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "HelpFinder$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 10) {
$I$(15).doSearch$();
} else {
$I$(15).searchField.setBackground$java_awt_Color($I$(2).yellow);
}});
})()
), Clazz.new_($I$(16,1),[this, null],P$.HelpFinder$2)));
C$.searchLabel=Clazz.new_($I$(17,1));
C$.searchLabel.setBorder$javax_swing_border_Border($I$(18).createEmptyBorder$I$I$I$I(0, 0, 0, 4));
C$.clearSearchButton=Clazz.new_($I$(19,1));
C$.clearSearchButton.setAction$javax_swing_Action(((P$.HelpFinder$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "HelpFinder$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(15).helpLauncher.setSelectedTab$org_opensourcephysics_tools_LaunchPanel($I$(15).searchResultsTab);
$I$(15).helpLauncher.removeSelectedTab$();
$I$(15).searchField.setText$S(null);
$I$(15).clearSearchButton.setEnabled$Z(false);
$I$(15).searchResultsTab=null;
$I$(15).rootNode=null;
});
})()
), Clazz.new_($I$(20,1),[this, null],P$.HelpFinder$3)));
C$.clearSearchButton.setEnabled$Z(false);
}, 1);

Clazz.newMeth(C$, 'doSearch$',  function () {
var searchPhrase=C$.stripExtraSpace$S$S(C$.searchField.getText$(), " ");
if (searchPhrase.length$() >= C$.minimumSearchPhraseLength) {
var found=Clazz.new_($I$(4,1));
var results=C$.search$S$java_util_ArrayList(searchPhrase, found);
if (results.size$() == 0) {
C$.searchField.setBackground$java_awt_Color(C$._RED);
return;
}C$.searchField.setBackground$java_awt_Color($I$(2).white);
var file=C$.writeResultsFile$S$java_util_ArrayList$java_util_ArrayList(searchPhrase, results, found);
if (file == null ) return;
var node=Clazz.new_($I$(21,1).c$$S,["\"" + searchPhrase + "\"" ]);
node.addDisplayTab$S$S$SA(null, file.getAbsolutePath$(), null);
node.getDisplayTab$I(0).getURL$();
C$.displayResultsNode$org_opensourcephysics_tools_LaunchNode(node);
}}, 1);

Clazz.newMeth(C$, 'displayResultsNode$org_opensourcephysics_tools_LaunchNode',  function (node) {
if (C$.rootNode == null ) {
C$.rootNode=Clazz.new_([$I$(5).getString$S("HelpFinder.SearchResults")],$I$(21,1).c$$S);
}if (C$.searchResultsTab != null ) {
C$.helpLauncher.setSelectedTab$org_opensourcephysics_tools_LaunchPanel(C$.searchResultsTab);
C$.helpLauncher.removeSelectedTab$();
}C$.rootNode.add$javax_swing_tree_MutableTreeNode(node);
var children=Clazz.new_($I$(4,1));
for (var i=0; i < C$.rootNode.getChildCount$(); i++) {
children.add$O(C$.rootNode.getChildAt$I(i));
}
var file=C$.writeSummaryFile$java_util_ArrayList(children);
if (C$.rootNode.getDisplayTabCount$() > 0) {
C$.rootNode.removeDisplayTab$I(0);
}C$.rootNode.addDisplayTab$S$S$SA(null, file.getAbsolutePath$(), null);
C$.rootNode.getDisplayTab$I(0).getURL$();
C$.helpLauncher.addTab$org_opensourcephysics_tools_LaunchNode(C$.rootNode);
C$.searchResultsTab=C$.helpLauncher.getSelectedTab$();
if ($I$(14).getLevel$() > 0) {
var newValue="help" + $I$(14).getLevel$() + ".css" ;
C$.searchResultsTab.getHTMLSubstitutionMap$().put$O$O("help.css", newValue);
C$.helpLauncher.setFontLevel$I($I$(14).getLevel$());
for (var i=0; i < C$.helpLauncher.getHTMLTabCount$(); i++) {
var pane=C$.helpLauncher.getHTMLTab$I(i);
pane.editorPane.getDocument$().putProperty$O$O("stream", null);
}
}C$.searchResultsTab.setTreeSelectionPath$org_opensourcephysics_tools_LaunchNode(node);
C$.clearSearchButton.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, 'getAnchors$S',  function (html) {
html=C$.clean$S(html);
var anchorMap=Clazz.new_($I$(1,1));
var sections=html.split$S("<h1|<h3");
for (var i=1; i < sections.length; i++) {
var s=sections[i];
var anchorSplit=s.split$S("<a name=\"|<a id=\"");
if (anchorSplit.length < 2) continue;
var name=anchorSplit[1];
var anchor=name.substring$I$I(0, name.indexOf$S("\""));
name=C$.stripTag$S$S(name, "</a");
var m=name.indexOf$S(">");
var n=(m <= 0 ? -1 : Math.max(name.indexOf$S("</h3>"), name.indexOf$S("</h1>")));
if (n > m) name=name.substring$I$I(m + 1, n);
if (Character.isDigit$C(name.charAt$I(0))) name=name.substring$I$I(name.indexOf$S(" ") + 1, name.length$());
C$.anchorNames.put$O$O(anchor, name);
s=C$.stripTag$S$S(s, "<a href");
s=C$.stripTag$S$S(s, "</a");
var split=s.split$S("<p>");
var lines=Clazz.new_($I$(4,1));
for (var j=1; j < split.length; j++) {
var p=split[j];
n=p.indexOf$S("</p>");
if (n >= 0) {
p=p.substring$I$I(0, n).trim$();
if (p.length$() == 0) continue;
} else {
System.out.println$S("no ending </p> in " + p);
System.out.println$S("found in section: " + s);
}lines.add$O(C$.stripExtraSpace$S$S(p, " "));
}
anchorMap.put$O$O(anchor, lines);
}
return anchorMap;
}, 1);

Clazz.newMeth(C$, 'clean$S',  function (text) {
text=text.replaceAll$S$S("<h5>", "<p>");
text=text.replaceAll$S$S("</h5>", "</p>");
text=text.replaceAll$S$S("<blockquote>", "<p>");
text=text.replaceAll$S$S("</blockquote>", "</p>");
text=text.replaceAll$S$S("<li>", "<p>");
text=text.replaceAll$S$S("</li>", "</p>");
text=text.replaceAll$S$S("<p align=\"center\">", "<p>");
text=text.replaceAll$S$S("&gt;", ">");
text=text.replaceAll$S$S("&lt;", "<");
text=text.replaceAll$S$S("<br>", " ");
text=text.replaceAll$S$S("&quot;", "\"");
text=C$.stripTag$S$S(text, "<img");
text=C$.stripTag$S$S(text, "<b");
text=C$.stripTag$S$S(text, "</b");
text=C$.stripTag$S$S(text, "<em");
text=C$.stripTag$S$S(text, "</em");
text=C$.stripTag$S$S(text, "<strong");
text=C$.stripTag$S$S(text, "</strong");
text=C$.stripTag$S$S(text, "<ol");
text=C$.stripTag$S$S(text, "</ol");
text=C$.stripTag$S$S(text, "<ul");
text=C$.stripTag$S$S(text, "</ul");
return text;
}, 1);

Clazz.newMeth(C$, 'getContextPhrase$S$S',  function (line, searchPhrase) {
var n=line.toLowerCase$().indexOf$S(searchPhrase);
if (n > -1) {
var start=Math.max(0, n - C$.contextPhraseLength);
var end=Math.min(line.length$(), n + searchPhrase.length$() + C$.contextPhraseLength );
var phrase=line.substring$I$I(start, end);
start=phrase.toLowerCase$().indexOf$S(searchPhrase);
end=start + searchPhrase.length$();
n=phrase.indexOf$S(" ");
if (n > -1 && n < start - C$.contextPhraseLength + C$.contextPhraseTrim ) {
phrase="..." + phrase.substring$I(n + 1);
}start=phrase.toLowerCase$().indexOf$S(searchPhrase);
end=start + searchPhrase.length$();
n=phrase.lastIndexOf$S(" ");
if (n > end + C$.contextPhraseLength - C$.contextPhraseTrim) {
phrase=phrase.substring$I$I(0, n) + "...";
}return phrase;
} else {
var phrase=line.substring$I$I(0, Math.min(line.length$(), 2 * C$.contextPhraseLength + C$.contextPhraseTrim));
n=phrase.lastIndexOf$S(" ");
if (n > C$.contextPhraseLength) {
phrase=phrase.substring$I$I(0, n) + "...";
}return phrase;
}}, 1);

Clazz.newMeth(C$, 'stripTag$S$S',  function (text, tag) {
var i;
while ((i=text.indexOf$S(tag)) > 0){
var later=text.substring$I(i);
text=text.substring$I$I(0, i);
var j=later.indexOf$S(">");
if (j < 0) break;
text+=later.substring$I(j + 1);
}
return text;
}, 1);

Clazz.newMeth(C$, 'stripExtraSpace$S$S',  function (text, space) {
text=text.trim$();
var extraSpace=" " + space;
while (text.indexOf$S(extraSpace) >= 0){
text=text.replaceAll$S$S(extraSpace, space);
}
return text;
}, 1);

Clazz.newMeth(C$, 'writeResultsFile$S$java_util_ArrayList$java_util_ArrayList',  function (searchPhrase, results, termsFound) {
var htmlCode=C$.getResultsHTMLCode$S$java_util_ArrayList$java_util_ArrayList(searchPhrase, results, termsFound);
var fileName="search" + results.hashCode$() + ".tmp" ;
var paths=$I$(22).getDefaultSearchPaths$();
for (var path, $path = paths.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
var target=Clazz.new_($I$(23,1).c$$S$S,[path, fileName]);
target=C$.writeFile$S$java_io_File(htmlCode, target);
if (target != null ) {
target.deleteOnExit$();
return target;
}}
var pathlist="";
for (var path, $path = paths.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
pathlist+="\n" + path + "," ;
}
pathlist=pathlist.substring$I$I(0, pathlist.length$() - 1);
$I$(24,"showMessageDialog$java_awt_Component$O$S$I",[C$.searchField.getTopLevelAncestor$(), $I$(5).getString$S("HelpFinder.Dialog.UnableToWrite.Text") + pathlist, $I$(5).getString$S("HelpFinder.Dialog.UnableToWrite.Title"), 0]);
return null;
}, 1);

Clazz.newMeth(C$, 'writeSummaryFile$java_util_ArrayList',  function (resultNodes) {
var htmlCode=C$.getSummaryHTMLCode$java_util_ArrayList(resultNodes);
var fileName="search_summary.tmp";
var paths=$I$(22).getDefaultSearchPaths$();
for (var path, $path = paths.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
var target=Clazz.new_($I$(23,1).c$$S$S,[path, fileName]);
target=C$.writeFile$S$java_io_File(htmlCode, target);
if (target != null ) {
target.deleteOnExit$();
return target;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'writeFile$S$java_io_File',  function (text, target) {
try {
var fout=Clazz.new_($I$(25,1).c$$java_io_File,[target]);
fout.write$S(text);
fout.close$();
return target;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'getResultsHTMLCode$S$java_util_ArrayList$java_util_ArrayList',  function (searchPhrase, searchResults, termsToHighlight) {
var buffer=Clazz.new_($I$(26,1));
buffer.append$S("<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">");
buffer.append$S("\n  <html>");
buffer.append$S("\n    <head>");
buffer.append$S("\n" + C$.getStyleSheetCode$());
buffer.append$S("\n      <meta http-equiv=\"content-type\" content=\"text/html;charset=iso-8859-1\">");
buffer.append$S("\n    </head>\n");
buffer.append$S("\n    <body>");
buffer.append$S("\n    <h2>" + $I$(5).getString$S("HelpFinder.ResultsFor") + " \"" + searchPhrase + "\"</h2>" );
for (var next, $next = searchResults.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
buffer.append$S(C$.getResultsHTMLBody$SA$java_util_ArrayList(next, termsToHighlight));
}
buffer.append$S("\n    </body>");
buffer.append$S("\n  </html>");
return buffer.toString();
}, 1);

Clazz.newMeth(C$, 'getSummaryHTMLCode$java_util_ArrayList',  function (resultNodes) {
var buffer=Clazz.new_($I$(26,1));
buffer.append$S("<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">");
buffer.append$S("\n  <html>");
buffer.append$S("\n    <head>");
buffer.append$S("\n" + C$.getStyleSheetCode$());
buffer.append$S("\n      <meta http-equiv=\"content-type\" content=\"text/html;charset=iso-8859-1\">");
buffer.append$S("\n    </head>\n");
buffer.append$S("\n    <body>");
buffer.append$S("\n    <h2>" + $I$(5).getString$S("HelpFinder.ResultsFor") + ":</h2>" );
buffer.append$S(C$.getSummaryHTMLBody$java_util_ArrayList(resultNodes));
buffer.append$S("\n    </body>");
buffer.append$S("\n  </html>");
return buffer.toString();
}, 1);

Clazz.newMeth(C$, 'getResultsHTMLBody$SA$java_util_ArrayList',  function (result, highlightTerms) {
var buffer=Clazz.new_($I$(26,1));
buffer.append$S("\n<p><a href=\"" + result[2] + "\"><strong>" + result[0] + "</strong></a>" );
var context=result[1];
for (var term, $term = highlightTerms.iterator$(); $term.hasNext$()&&((term=($term.next$())),1);) {
context=C$.addHighlights$S$S(context, term);
}
buffer.append$S(" \"" + context + "\"</p>" );
return buffer.toString();
}, 1);

Clazz.newMeth(C$, 'getSummaryHTMLBody$java_util_ArrayList',  function (resultNodes) {
var buffer=Clazz.new_($I$(26,1));
buffer.append$S("<blockquote>");
for (var next, $next = resultNodes.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
buffer.append$S("<h4><a href=\"" + next.getDisplayTab$I(0).getURL$() + "\">" + next + "</a></h4>" );
}
buffer.append$S("</blockquote>");
return buffer.toString();
}, 1);

Clazz.newMeth(C$, 'getStyleSheetCode$',  function () {
return "<link href=\"" + C$.css + "\" rel=\"stylesheet\" type=\"text/css\">" ;
}, 1);

Clazz.newMeth(C$, 'addHighlights$S$S',  function (text, highlight) {
highlight=highlight.toLowerCase$();
var output=Clazz.new_($I$(26,1));
var n=text.toLowerCase$().indexOf$S(highlight);
while (n > -1){
output.append$S(text.substring$I$I(0, n));
var term=text.substring$I$I(n, n + highlight.length$());
text=text.substring$I(n + highlight.length$());
output.append$S("<strong>" + term + "</strong>" );
n=text.toLowerCase$().indexOf$S(highlight);
}
output.append$S(text);
return output.toString();
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.pages=Clazz.new_($I$(1,1));
C$.pageNames=Clazz.new_($I$(1,1));
C$.anchorNames=Clazz.new_($I$(1,1));
C$.pagePaths=Clazz.new_($I$(1,1));
C$.contextPhraseLength=120;
C$.contextPhraseTrim=15;
C$.minimumSearchPhraseLength=3;
C$._RED=Clazz.new_($I$(2,1).c$$I$I$I,[255, 160, 180]);
C$.searchField=Clazz.new_($I$(3,1).c$$I,[12]);
{
C$.initialize$();
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
