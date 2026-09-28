(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FilterStack", null, 'org.opensourcephysics.media.core.Filter', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.filters=Clazz.new_($I$(1,1));
this.indexRemoved=-1;
},1);

C$.$fields$=[['I',['indexRemoved'],'O',['filters','java.util.ArrayList','postFilter','org.opensourcephysics.media.core.Filter']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'addFilter$org_opensourcephysics_media_core_Filter',  function (filter) {
this.filters.add$O(filter);
filter.stack=this;
filter.addPropertyChangeListenerSafely$java_beans_PropertyChangeListener(this);
p$1.notifyUpdate$org_opensourcephysics_media_core_Filter$org_opensourcephysics_media_core_Filter.apply(this, [null, filter]);
});

Clazz.newMeth(C$, 'addFilters$java_util_Collection',  function (stack) {
if (stack != null ) for (var f, $f = stack.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
this.addFilter$org_opensourcephysics_media_core_Filter(f);
}
});

Clazz.newMeth(C$, 'addFilters$org_opensourcephysics_media_core_FilterStack',  function (stack) {
if (stack != null ) for (var f, $f = stack.filters.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
this.addFilter$org_opensourcephysics_media_core_Filter(f);
}
});

Clazz.newMeth(C$, 'notifyUpdate$org_opensourcephysics_media_core_Filter$org_opensourcephysics_media_core_Filter',  function (oldFilter, newFilter) {
this.firePropertyChange$S$O$O("image", null, null);
this.firePropertyChange$S$O$O("filter", oldFilter, newFilter);
}, p$1);

Clazz.newMeth(C$, 'insertFilter$org_opensourcephysics_media_core_Filter$I',  function (filter, index) {
index=Math.min(index, this.filters.size$());
index=Math.max(index, 0);
this.filters.add$I$O(index, filter);
filter.stack=this;
filter.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
p$1.notifyUpdate$org_opensourcephysics_media_core_Filter$org_opensourcephysics_media_core_Filter.apply(this, [null, filter]);
});

Clazz.newMeth(C$, 'lastIndexRemoved$',  function () {
return this.indexRemoved;
});

Clazz.newMeth(C$, 'setPostFilter$org_opensourcephysics_media_core_Filter',  function (filter) {
if (this.postFilter != null ) {
this.postFilter.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
}this.postFilter=filter;
if (filter != null ) {
filter.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
p$1.notifyUpdate$org_opensourcephysics_media_core_Filter$org_opensourcephysics_media_core_Filter.apply(this, [null, filter]);
}});

Clazz.newMeth(C$, 'getPostFilter$',  function () {
return this.postFilter;
});

Clazz.newMeth(C$, 'getFilter$Class',  function (filterClass) {
var it=this.filters.iterator$();
while (it.hasNext$()){
var filter=it.next$();
if (filter.getClass$() === filterClass ) {
return filter;
}}
return null;
});

Clazz.newMeth(C$, 'removeFilter$org_opensourcephysics_media_core_Filter',  function (filter) {
this.indexRemoved=this.filters.indexOf$O(filter);
if (this.indexRemoved > -1) {
this.filters.remove$O(filter);
filter.dispose$();
p$1.notifyUpdate$org_opensourcephysics_media_core_Filter$org_opensourcephysics_media_core_Filter.apply(this, [filter, null]);
}System.gc$();
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.clear$();
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'clear$',  function () {
for (var filter, $filter = this.filters.iterator$(); $filter.hasNext$()&&((filter=($filter.next$())),1);) {
filter.dispose$();
}
this.filters.clear$();
p$1.notifyUpdate$org_opensourcephysics_media_core_Filter$org_opensourcephysics_media_core_Filter.apply(this, [null, null]);
System.gc$();
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.filters.isEmpty$() && (this.postFilter == null ) ;
});

Clazz.newMeth(C$, 'getFilters$',  function () {
return Clazz.new_($I$(1,1).c$$java_util_Collection,[this.filters]);
});

Clazz.newMeth(C$, 'getFilteredImage$java_awt_image_BufferedImage',  function (sourceImage) {
if (!this.isEnabled$()) {
return sourceImage;
}var mustWork=(this.postFilter != null  && this.postFilter.isEnabled$() );
for (var i=0, n=this.filters.size$(); !mustWork && i < n ; i++) {
mustWork=this.filters.get$I(i).isEnabled$();
}
if (!mustWork) {
return sourceImage;
}for (var i=0, n=this.filters.size$(); i <= n; i++) {
var filter=(i == n ? this.postFilter : this.filters.get$I(i));
if (filter != null  && filter.isEnabled$() ) sourceImage=filter.getFilteredImage$java_awt_image_BufferedImage(sourceImage);
}
return sourceImage;
});

Clazz.newMeth(C$, 'setOutputPixels$',  function () {
});

Clazz.newMeth(C$, 'newInspector$',  function () {
return null;
});

Clazz.newMeth(C$, 'initInspector$',  function () {
return null;
});

Clazz.newMeth(C$, 'setInspectorsVisible$Z',  function (vis) {
var filters=this.getFilters$();
var it=filters.iterator$();
while (it.hasNext$()){
var filter=it.next$();
var inspector=filter.getInspector$();
if (inspector != null ) {
if (!vis) {
filter.inspectorVisible=inspector.isVisible$();
inspector.setVisible$Z(false);
} else if (!inspector.isModal$()) {
inspector.setVisible$Z(filter.inspectorVisible);
}}}
});

Clazz.newMeth(C$, 'refresh$',  function () {
var it=this.getFilters$().iterator$();
while (it.hasNext$()){
it.next$().refresh$();
}
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
switch (e.getPropertyName$()) {
case "filterChanged":
this.firePropertyChange$S$O$O("filterChanged", e.getOldValue$(), e.getNewValue$());
break;
default:
this.firePropertyChange$S$O$O("image", null, null);
break;
}
});

Clazz.newMeth(C$, 'initializeSubclass$',  function () {
});
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
