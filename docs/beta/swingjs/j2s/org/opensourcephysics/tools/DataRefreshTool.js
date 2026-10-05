(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},I$=[[0,'java.util.HashMap','java.util.HashSet','org.opensourcephysics.controls.XMLControlElement','org.opensourcephysics.display.Data','org.opensourcephysics.tools.Tool','org.opensourcephysics.tools.DataTool','org.opensourcephysics.display.DatasetManager','java.util.TreeSet','org.opensourcephysics.display.Dataset']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataRefreshTool", null, null, 'org.opensourcephysics.tools.Tool');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.moreData=Clazz.new_($I$(2,1));
this.ids=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['data','org.opensourcephysics.display.Data','moreData','java.util.HashSet','ids','java.util.HashMap']]
,['O',['tools','java.util.Map']]]

Clazz.newMeth(C$, 'getTool$org_opensourcephysics_display_Data',  function (data) {
var tool=C$.tools.get$O(data);
if (tool == null ) {
tool=Clazz.new_(C$.c$$org_opensourcephysics_display_Data,[data]);
C$.tools.put$O$O(data, tool);
}return tool;
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_Data',  function (data) {
;C$.$init$.apply(this);
this.data=data;
}, 1);

Clazz.newMeth(C$, 'send$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool',  function (job, replyTo) {
var control=Clazz.new_([job.getXML$()],$I$(3,1).c$$S);
if (control.failedToRead$() || (replyTo == null ) || !Clazz.getClass($I$(4),['getColumnNames$','getData2D$','getData3D$','getDataList$','getDatasets$','getFillColors$','getID$','getLineColors$','getName$','setID$I']).isAssignableFrom$Class(control.getObjectClass$())  ) {
return;
}var request=control.loadObject$O$Z$Z(null, true, true);
if (request.getID$() == this.data.getID$()) {
$I$(5).reply$org_opensourcephysics_tools_Tool$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool$org_opensourcephysics_display_Data(replyTo, job, this, this.data);
return;
}for (var next, $next = $I$(6).getSelfContainedData$org_opensourcephysics_display_Data(this.data).iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (request.getID$() == next.getID$()) {
$I$(5).reply$org_opensourcephysics_tools_Tool$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool$org_opensourcephysics_display_Data(replyTo, job, this, next);
return;
}}
var localDatasets=$I$(6).getDatasets$org_opensourcephysics_display_Data(this.data);
for (var next, $next = localDatasets.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (request.getID$() == next.getID$()) {
$I$(5).reply$org_opensourcephysics_tools_Tool$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool$org_opensourcephysics_display_Data(replyTo, job, this, next);
return;
}}
var reply=Clazz.new_($I$(7,1));
reply.setName$S(request.getName$());
this.ids.clear$();
var requestedDatasets=$I$(6).getDatasets$org_opensourcephysics_display_Data(request);
p$1.findDatasets$java_util_ArrayList$java_util_ArrayList$org_opensourcephysics_display_DatasetManager$Z.apply(this, [requestedDatasets, localDatasets, reply, false]);
if (!this.moreData.isEmpty$()) {
for (var more, $more = this.moreData.iterator$(); $more.hasNext$()&&((more=($more.next$())),1);) {
localDatasets=$I$(6).getDatasets$org_opensourcephysics_display_Data(more);
p$1.findDatasets$java_util_ArrayList$java_util_ArrayList$org_opensourcephysics_display_DatasetManager$Z.apply(this, [requestedDatasets, localDatasets, reply, true]);
}
p$1.padDatasets$org_opensourcephysics_display_DatasetManager.apply(this, [reply]);
}if (!reply.getDatasetsRaw$().isEmpty$()) {
$I$(5).reply$org_opensourcephysics_tools_Tool$org_opensourcephysics_tools_Job$org_opensourcephysics_tools_Tool$org_opensourcephysics_display_Data(replyTo, job, this, reply);
}});

Clazz.newMeth(C$, 'addData$org_opensourcephysics_display_Data',  function (data) {
if (data === this.data ) return;
this.moreData.add$O(data);
});

Clazz.newMeth(C$, 'removeData$org_opensourcephysics_display_Data',  function (data) {
this.moreData.remove$O(data);
});

Clazz.newMeth(C$, 'padDatasets$org_opensourcephysics_display_DatasetManager',  function (datasets) {
var tSet=Clazz.new_($I$(8,1));
for (var dataset, $dataset = datasets.getDatasetsRaw$().iterator$(); $dataset.hasNext$()&&((dataset=($dataset.next$())),1);) {
var len=dataset.getIndex$();
var xp=dataset.getXPointsRaw$();
for (var i=0; i < len; i++) {
tSet.add$O(Double.valueOf$D(xp[i]));
}
}
var temp=tSet.toArray$OA(Clazz.array(Double, [tSet.size$()]));
var array=Clazz.array(Double.TYPE, [tSet.size$()]);
for (var i=0; i < array.length; i++) {
array[i]=(temp[i]).valueOf();
}
for (var dataset, $dataset = datasets.getDatasetsRaw$().iterator$(); $dataset.hasNext$()&&((dataset=($dataset.next$())),1);) {
p$1.padDataset$org_opensourcephysics_display_Dataset$DA.apply(this, [dataset, array]);
}
}, p$1);

Clazz.newMeth(C$, 'findDatasets$java_util_ArrayList$java_util_ArrayList$org_opensourcephysics_display_DatasetManager$Z',  function (requestedDatasets, datasetsToSearch, manager, isMore) {
for (var next, $next = requestedDatasets.iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
if (next == null ) continue;
var ds=$I$(9).findDataSet$java_util_ArrayList$org_opensourcephysics_display_Data(datasetsToSearch, next);
if (ds != null ) {
var toSend=this.ids.get$O(Integer.valueOf$I(ds.getID$()));
if (toSend == null ) {
toSend=$I$(6).copyDataset$org_opensourcephysics_display_Dataset$org_opensourcephysics_display_Dataset$Z(ds, null, true);
if (isMore) {
toSend.setXYColumnNames$S$S(ds.getXColumnName$(), next.getYColumnName$());
}toSend.setXColumnVisible$Z(toSend.getXColumnName$().equals$O(next.getYColumnName$()));
toSend.setYColumnVisible$Z(toSend.getYColumnName$().equals$O(next.getYColumnName$()));
this.ids.put$O$O(Integer.valueOf$I(ds.getID$()), toSend);
} else {
if (toSend.getXColumnName$().equals$O(next.getYColumnName$())) toSend.setXColumnVisible$Z(true);
if (toSend.getYColumnName$().equals$O(next.getYColumnName$())) toSend.setYColumnVisible$Z(true);
}manager.addDataset$org_opensourcephysics_display_Dataset(toSend);
}}
}, p$1);

Clazz.newMeth(C$, 'padDataset$org_opensourcephysics_display_Dataset$DA',  function (dataset, newXArray) {
var xA=dataset.getXPointsRaw$();
var yA=dataset.getYPointsRaw$();
var len=dataset.getIndex$();
var valueMap=Clazz.new_($I$(1,1));
for (var k=0; k < len; k++) {
valueMap.put$O$O(Double.valueOf$D(xA[k]), Double.valueOf$D(yA[k]));
}
var newYArray=Clazz.array(Double.TYPE, [len]);
for (var k=0; k < len; k++) {
var x=newXArray[k];
newYArray[k]=valueMap.keySet$().contains$O(Double.valueOf$D(x)) ? (valueMap.get$O(Double.valueOf$D(x))).valueOf() : NaN;
}
dataset.clear$();
dataset.append$DA$DA$I(newXArray, newYArray, len);
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.tools=Clazz.new_($I$(1,1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
