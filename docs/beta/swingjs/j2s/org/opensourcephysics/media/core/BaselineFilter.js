(function(){var P$=Clazz.newPackage("org.opensourcephysics.media.core"),p$1={},I$=[[0,'javax.swing.JButton','javax.swing.JLabel','javax.swing.BorderFactory','java.awt.Color','javax.swing.JPanel','java.awt.BorderLayout','java.awt.FlowLayout','javax.swing.SwingUtilities','javax.swing.JOptionPane','org.opensourcephysics.media.core.MediaRes','org.opensourcephysics.media.core.BaselineFilter','org.opensourcephysics.media.core.VideoIO','org.opensourcephysics.controls.XML','org.opensourcephysics.tools.ResourceLoader','java.awt.image.BufferedImage','javax.swing.ImageIcon',['org.opensourcephysics.media.core.BaselineFilter','.Inspector'],['org.opensourcephysics.media.core.BaselineFilter','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BaselineFilter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.media.core.Filter');
C$.$classes$=[['Inspector',2],['Loader',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['imagePath'],'O',['baseline','java.awt.image.BufferedImage','+baselineCopy','+thumbnail','baselinePixels','int[]','inspector','org.opensourcephysics.media.core.BaselineFilter.Inspector','loadButton','javax.swing.JButton','+captureButton','+saveButton','imageLabel','javax.swing.JLabel','contentPane','javax.swing.JPanel','imageBorder','javax.swing.border.Border','+emptyBorder','nullBaselinePanel','javax.swing.JPanel']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.hasInspector=true;
}, 1);

Clazz.newMeth(C$, 'capture$',  function () {
if ((this.vidPanel == null ) || (this.vidPanel.getVideo$() == null ) ) {
return;
}this.setBaselineImage$java_awt_image_BufferedImage(this.vidPanel.getVideo$().getImage$());
this.imagePath=null;
});

Clazz.newMeth(C$, 'save$',  function () {
if (this.baseline == null ) {
return;
}$I$(12,"getChooserFilesAsync$S$java_util_function_Function",["save image", ((P$.BaselineFilter$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaselineFilter$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_io_FileA','apply$O'],  function (f) /*block*/{
if (f != null  && f[0] != null   && f[0].getParent$.apply(f[0], []) != null  ) {
var path=f[0].getPath$.apply(f[0], []);
if (!$I$(12).jpgFileFilter.accept$java_io_File.apply($I$(12).jpgFileFilter, [f[0]])) {
path=$I$(13).stripExtension$S(path) + ".png";
}var file=$I$(12).writeImageFile$java_awt_image_BufferedImage$S(this.b$['org.opensourcephysics.media.core.BaselineFilter'].baselineCopy, path);
if (file != null ) {
this.b$['org.opensourcephysics.media.core.BaselineFilter'].imagePath=file.getPath$.apply(file, []);
}}return null;
});
})()
), Clazz.new_(P$.BaselineFilter$lambda1.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'load$S',  function (path) {
var image=$I$(14).getBufferedImage$S(path);
if (image != null ) {
var prevPath=this.imagePath;
this.imagePath=path;
if (!this.setBaselineImage$java_awt_image_BufferedImage(image)) {
this.imagePath=prevPath;
}} else {
$I$(9,"showMessageDialog$java_awt_Component$O$S$I",[this.vidPanel, "\"" + path + "\" " + $I$(10).getString$S("Filter.Baseline.Dialog.NotImage.Message") , $I$(10).getString$S("Filter.Baseline.Dialog.NotImage.Title"), 1]);
}});

Clazz.newMeth(C$, 'load$',  function () {
$I$(12,"getChooserFilesAsync$S$java_util_function_Function",["open image", ((P$.BaselineFilter$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaselineFilter$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_io_FileA','apply$O'],  function (f) /*block*/{
if (f != null  && f[0] != null   && $I$(12).imageFileFilter.accept$java_io_File.apply($I$(12).imageFileFilter, [f[0]]) ) {
var path=f[0].getPath$.apply(f[0], []);
this.b$['org.opensourcephysics.media.core.BaselineFilter'].load$S.apply(this.b$['org.opensourcephysics.media.core.BaselineFilter'], [path]);
}return null;
});
})()
), Clazz.new_(P$.BaselineFilter$lambda2.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'setBaselineImage$java_awt_image_BufferedImage',  function (image) {
if (image != null ) {
var wi=image.getWidth$();
var ht=image.getHeight$();
if ((wi >= this.w) && (ht >= this.h) ) {
this.baselineCopy=Clazz.new_([wi, ht, image.getType$()],$I$(15,1).c$$I$I$I);
var g2=this.baselineCopy.createGraphics$();
g2.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(image, 0, 0, null);
g2.dispose$();
this.baseline=image;
this.getRaster$java_awt_image_BufferedImage(this.baseline).getDataElements$I$I$I$I$O(0, 0, this.w, this.h, this.baselinePixels);
} else {
$I$(9,"showMessageDialog$java_awt_Component$O$S$I",[this.vidPanel.getTopLevelAncestor$(), $I$(10).getString$S("Filter.Baseline.Dialog.SmallImage.Message1") + " (" + wi + "x" + ht + ") " + $I$(10).getString$S("Filter.Baseline.Dialog.SmallImage.Message2a") + "\n" + $I$(10).getString$S("Filter.Baseline.Dialog.SmallImage.Message2b") + " (" + this.w + "x" + this.h + ")." , $I$(10).getString$S("Filter.Baseline.Dialog.SmallImage.Title"), 1]);
return false;
}} else {
this.baseline=null;
this.baselineCopy=null;
this.imagePath=null;
}if (this.inspector != null ) {
this.thumbnail=p$1.getThumbnailImage.apply(this, []);
this.imageLabel.setIcon$javax_swing_Icon(this.thumbnail == null  ? null : Clazz.new_($I$(16,1).c$$java_awt_Image,[this.thumbnail]));
var none="(" + $I$(10).getString$S("Filter.Baseline.Message.NoImage") + ")" ;
this.imageLabel.setText$S(this.thumbnail == null  ? none : null);
this.imageLabel.setBorder$javax_swing_border_Border(this.thumbnail == null  ? this.emptyBorder : this.imageBorder);
if (this.thumbnail == null ) {
this.contentPane.remove$java_awt_Component(this.nullBaselinePanel);
this.contentPane.add$java_awt_Component$O(this.imageLabel, "North");
} else {
this.nullBaselinePanel.add$java_awt_Component(this.imageLabel);
this.contentPane.add$java_awt_Component$O(this.nullBaselinePanel, "North");
}this.saveButton.setEnabled$Z(this.baseline != null );
this.inspector.pack$();
this.firePropertyChange$S$O$O("baseline", null, null);
}return true;
});

Clazz.newMeth(C$, 'getBaselineImage$',  function () {
return this.baselineCopy;
});

Clazz.newMeth(C$, 'getThumbnailImage',  function () {
if (this.baseline == null ) return null;
var imageW=this.baseline.getWidth$();
var imageH=this.baseline.getHeight$();
var w;
var h;
if (imageW > imageH) {
w=Math.min((9 * this.contentPane.getWidth$()/10|0), imageW);
h=Math.min((w * imageH/imageW|0), imageH);
} else {
h=Math.min((9 * this.contentPane.getWidth$()/10|0), imageH);
w=Math.min((h * imageW/imageH|0), imageW);
}if (this.thumbnail == null  || this.thumbnail.getWidth$() != w  || this.thumbnail.getHeight$() != h ) {
this.thumbnail=Clazz.new_([w, h, this.baseline.getType$()],$I$(15,1).c$$I$I$I);
}var g2=this.thumbnail.createGraphics$();
g2.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(this.baseline, 0, 0, w, h, 0, 0, this.baseline.getWidth$(), this.baseline.getHeight$(), null);
g2.dispose$();
return this.thumbnail;
}, p$1);

Clazz.newMeth(C$, 'resizeThumbnail$',  function () {
if (this.thumbnail == null ) {
this.contentPane.remove$java_awt_Component(this.imageLabel);
} else {
this.contentPane.remove$java_awt_Component(this.nullBaselinePanel);
}this.inspector.pack$();
this.setBaselineImage$java_awt_image_BufferedImage(this.baselineCopy);
});

Clazz.newMeth(C$, 'newInspector$',  function () {
return this.inspector=Clazz.new_($I$(17,1),[this, null]);
});

Clazz.newMeth(C$, 'initInspector$',  function () {
this.inspector.initialize$();
return this.inspector;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.setBaselineImage$java_awt_image_BufferedImage(null);
this.imagePath=null;
});

Clazz.newMeth(C$, 'refresh$',  function () {
if (this.inspector == null  || !this.haveGUI ) return;
C$.superclazz.prototype.refresh$.apply(this, []);
this.loadButton.setText$S($I$(10).getString$S("Filter.Baseline.Button.Load"));
this.captureButton.setText$S($I$(10).getString$S("Filter.Baseline.Button.Capture"));
this.saveButton.setText$S($I$(10).getString$S("Dialog.Button.Save"));
this.loadButton.setEnabled$Z(this.isEnabled$());
this.captureButton.setEnabled$Z(this.isEnabled$());
this.saveButton.setEnabled$Z(this.baseline != null );
this.inspector.setTitle$S($I$(10).getString$S("Filter.Baseline.Title"));
this.inspector.pack$();
});

Clazz.newMeth(C$, 'initializeSubclass$',  function () {
this.baselinePixels=Clazz.array(Integer.TYPE, [this.nPixelsIn]);
if (!this.setBaselineImage$java_awt_image_BufferedImage(this.baselineCopy)) {
this.setBaselineImage$java_awt_image_BufferedImage(null);
}});

Clazz.newMeth(C$, 'setOutputPixels$',  function () {
this.getPixelsIn$();
this.getPixelsOut$();
if (this.baseline != null ) {
var pixel;
var base;
var r;
var g;
var b;
for (var i=0; i < this.nPixelsIn; i++) {
pixel=this.pixelsIn[i];
base=this.baselinePixels[i];
r=(pixel >> 16) & 255;
r=r - ((base >> 16) & 255);
r=Math.max(r, 0);
g=(pixel >> 8) & 255;
g=g - ((base >> 8) & 255);
g=Math.max(g, 0);
b=pixel & 255;
b=b - (base & 255);
b=Math.max(b, 0);
this.pixelsOut[i]=(r << 16) | (g << 8) | b ;
}
} else {
System.arraycopy$O$I$O$I$I(this.pixelsIn, 0, this.pixelsOut, 0, this.nPixelsIn);
}});

Clazz.newMeth(C$, 'getLoader$',  function () {
return Clazz.new_($I$(18,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineFilter, "Inspector", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.opensourcephysics.media.core.Filter','.InspectorDlg']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["Filter.Baseline.Title"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
this.b$['org.opensourcephysics.media.core.BaselineFilter'].loadButton=Clazz.new_($I$(1,1));
this.b$['org.opensourcephysics.media.core.BaselineFilter'].loadButton.addActionListener$java_awt_event_ActionListener(((P$.BaselineFilter$Inspector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "BaselineFilter$Inspector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.BaselineFilter'].load$.apply(this.b$['org.opensourcephysics.media.core.BaselineFilter'], []);
});
})()
), Clazz.new_(P$.BaselineFilter$Inspector$1.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.BaselineFilter'].captureButton=Clazz.new_($I$(1,1));
this.b$['org.opensourcephysics.media.core.BaselineFilter'].captureButton.addActionListener$java_awt_event_ActionListener(((P$.BaselineFilter$Inspector$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "BaselineFilter$Inspector$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.BaselineFilter'].capture$.apply(this.b$['org.opensourcephysics.media.core.BaselineFilter'], []);
this.b$['org.opensourcephysics.media.core.BaselineFilter'].refresh$.apply(this.b$['org.opensourcephysics.media.core.BaselineFilter'], []);
});
})()
), Clazz.new_(P$.BaselineFilter$Inspector$2.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.BaselineFilter'].saveButton=Clazz.new_($I$(1,1));
this.b$['org.opensourcephysics.media.core.BaselineFilter'].saveButton.addActionListener$java_awt_event_ActionListener(((P$.BaselineFilter$Inspector$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "BaselineFilter$Inspector$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.media.core.BaselineFilter'].save$.apply(this.b$['org.opensourcephysics.media.core.BaselineFilter'], []);
});
})()
), Clazz.new_(P$.BaselineFilter$Inspector$3.$init$,[this, null])));
this.b$['org.opensourcephysics.media.core.BaselineFilter'].imageLabel=Clazz.new_($I$(2,1));
this.b$['org.opensourcephysics.media.core.BaselineFilter'].imageLabel.setHorizontalAlignment$I(0);
var line=$I$(3,"createLineBorder$java_awt_Color",[$I$(4).black]);
this.b$['org.opensourcephysics.media.core.BaselineFilter'].emptyBorder=$I$(3).createEmptyBorder$I$I$I$I(4, 4, 0, 4);
this.b$['org.opensourcephysics.media.core.BaselineFilter'].imageBorder=$I$(3).createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border(this.b$['org.opensourcephysics.media.core.BaselineFilter'].emptyBorder, line);
this.b$['org.opensourcephysics.media.core.BaselineFilter'].nullBaselinePanel=Clazz.new_($I$(5,1));
this.b$['org.opensourcephysics.media.core.BaselineFilter'].contentPane=Clazz.new_([Clazz.new_($I$(6,1))],$I$(5,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(this.b$['org.opensourcephysics.media.core.BaselineFilter'].contentPane);
var buttonbar=Clazz.new_([Clazz.new_($I$(7,1))],$I$(5,1).c$$java_awt_LayoutManager);
this.b$['org.opensourcephysics.media.core.BaselineFilter'].contentPane.add$java_awt_Component$O(buttonbar, "South");
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.BaselineFilter'].ableButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.BaselineFilter'].loadButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.BaselineFilter'].captureButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.BaselineFilter'].saveButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.BaselineFilter'].clearButton);
buttonbar.add$java_awt_Component(this.b$['org.opensourcephysics.media.core.BaselineFilter'].closeButton);
});

Clazz.newMeth(C$, 'initialize$',  function () {
$I$(8,"invokeLater$Runnable",[((P$.BaselineFilter$Inspector$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaselineFilter$Inspector$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () /*block*/{
this.b$['org.opensourcephysics.media.core.BaselineFilter'].setBaselineImage$java_awt_image_BufferedImage.apply(this.b$['org.opensourcephysics.media.core.BaselineFilter'], [this.b$['org.opensourcephysics.media.core.BaselineFilter'].baselineCopy]);
});
})()
), Clazz.new_(P$.BaselineFilter$Inspector$lambda1.$init$,[this, null]))]);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineFilter, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.opensourcephysics.controls.XML','org.opensourcephysics.controls.XML.ObjectLoader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'saveObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
if (filter.baseline != null  && filter.imagePath == null  ) {
var n=$I$(9,"showConfirmDialog$java_awt_Component$O$S$I",[null, $I$(10).getString$S("Filter.Baseline.Dialog.SaveImage.Text"), $I$(10).getString$S("Filter.Baseline.Dialog.SaveImage.Title"), 0]);
if (n == 0) {
filter.save$();
}}if (filter.imagePath != null ) {
control.setValue$S$O("imagepath", filter.imagePath);
}filter.addLocation$org_opensourcephysics_controls_XMLControl(control);
});

Clazz.newMeth(C$, 'createObject$org_opensourcephysics_controls_XMLControl',  function (control) {
return Clazz.new_($I$(11,1));
});

Clazz.newMeth(C$, 'loadObject$org_opensourcephysics_controls_XMLControl$O',  function (control, obj) {
var filter=obj;
if (control.getPropertyNamesRaw$().contains$O("imagepath")) {
filter.load$S(control.getString$S("imagepath"));
}filter.inspectorX=control.getInt$S("inspector_x");
filter.inspectorY=control.getInt$S("inspector_y");
return obj;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:52 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
