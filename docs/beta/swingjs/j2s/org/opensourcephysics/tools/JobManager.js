(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),I$=[[0,'java.util.HashMap','java.util.HashSet','java.util.ArrayList','org.opensourcephysics.tools.Job','org.opensourcephysics.controls.XMLControlElement']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JobManager");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.replies=Clazz.new_($I$(1,1));
this.objects=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['localTool','org.opensourcephysics.tools.Tool','replies','java.util.Map','+objects']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_Tool',  function (tool) {
;C$.$init$.apply(this);
this.localTool=tool;
}, 1);

Clazz.newMeth(C$, 'log$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool',  function (job, tool) {
if (tool == null ) {
return;
}var tools=this.replies.get$O(job);
if (tools == null ) {
tools=Clazz.new_($I$(2,1));
this.replies.put$O$O(job, tools);
}tools.add$O(tool);
});

Clazz.newMeth(C$, 'associate$org_opensourcephysics_tools_Job$O',  function (job, obj) {
if (obj == null ) {
return;
}var tags=this.objects.get$O(job);
if (tags == null ) {
tags=Clazz.new_($I$(2,1));
this.objects.put$O$O(job, tags);
}tags.add$O(obj);
});

Clazz.newMeth(C$, 'getJobs$O',  function (obj) {
var jobs=Clazz.new_($I$(3,1));
var it=this.objects.keySet$().iterator$();
while (it.hasNext$()){
var job=it.next$();
var tags=this.objects.get$O(job);
if (tags == null ) {
return null;
}if (tags.contains$O(obj)) {
jobs.add$O(job);
}}
return jobs.toArray$OA(Clazz.array($I$(4), [0]));
});

Clazz.newMeth(C$, 'getObjects$org_opensourcephysics_tools_Job',  function (job) {
var tags=this.objects.get$O(job);
if (tags == null ) {
return Clazz.array(java.lang.Object, [0]);
}return tags.toArray$OA(Clazz.array(java.lang.Object, [0]));
});

Clazz.newMeth(C$, 'getTools$O',  function (obj) {
var tools=Clazz.new_($I$(2,1));
var jobs=this.getJobs$O(obj);
for (var i=0; i < jobs.length; i++) {
var next=this.replies.get$O(jobs[i]);
if (next != null ) {
tools.addAll$java_util_Collection(next);
}}
return tools;
});

Clazz.newMeth(C$, 'sendReplies$O',  function (obj) {
var jobs=this.getJobs$O(obj);
var control=Clazz.new_($I$(5,1).c$$O,[obj]);
var xml=control.toXML$();
for (var i=0; i < jobs.length; i++) {
jobs[i].setXML$S(xml);
this.sendReplies$org_opensourcephysics_tools_Job(jobs[i]);
}
});

Clazz.newMeth(C$, 'sendReplies$org_opensourcephysics_tools_Job',  function (job) {
var tools=this.replies.get$O(job);
if (tools == null ) {
return;
}var it=tools.iterator$();
while (it.hasNext$()){
var tool=it.next$();
tool.send$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool(job, this.localTool);
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:54 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
