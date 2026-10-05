(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),I$=[[0,'org.opensourcephysics.controls.XML']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "VideoType");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getVideo$S',  function (path) {
return this.getVideo$S$S$org_opensourcephysics_controls_XMLControl(path, null, null);
});

Clazz.newMeth(C$, 'getVideoControlForExportOnly$S$S$org_opensourcephysics_controls_XMLControl',  function (videoTarget, vidDir, clipXMLControl) {
var video=this.getVideo$S$S$org_opensourcephysics_controls_XMLControl($I$(1).getName$S(videoTarget), vidDir, null);
clipXMLControl.setValue$S$O("video", video);
return clipXMLControl.getChildControl$S("video");
});

Clazz.newMeth(C$, 'accepts$java_io_File',  function (file) {
var filters=this.getFileFilters$();
for (var i=filters.length; --i >= 0; ) if (filters[i].accept$java_io_File(file)) return true;

return false;
});

Clazz.newMeth(C$, '_toString$',  function () {
var s="";
for (var f, $f = 0, $$f = this.getFileFilters$(); $f<$$f.length&&((f=($$f[$f])),1);$f++) {
s+=" " + f;
}
return "[" + this.getTypeName$() + " " + s + "]" ;
});
};})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
