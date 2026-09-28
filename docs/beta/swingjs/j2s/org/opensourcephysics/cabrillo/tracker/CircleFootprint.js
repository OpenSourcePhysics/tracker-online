(function(){var P$=Clazz.newPackage("org.opensourcephysics.cabrillo.tracker"),I$=[[0,'org.opensourcephysics.cabrillo.tracker.TrackerRes','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.BorderFactory','javax.swing.JLabel','javax.swing.JSpinner','javax.swing.SpinnerNumberModel','java.awt.Color','org.opensourcephysics.cabrillo.tracker.TTrack','javax.swing.JCheckBox','org.opensourcephysics.cabrillo.tracker.CircleFootprint','java.awt.BasicStroke','javax.swing.JButton','java.util.HashSet',['java.awt.geom.Ellipse2D','.Double'],'java.awt.geom.AffineTransform','java.awt.Shape','java.awt.Point','org.opensourcephysics.cabrillo.tracker.MultiShape','org.opensourcephysics.cabrillo.tracker.ShapeIcon','org.opensourcephysics.display.ResizableIcon','org.opensourcephysics.tools.FontSizer','org.opensourcephysics.display.OSPRuntime','java.awt.RenderingHints',['org.opensourcephysics.cabrillo.tracker.CircleFootprint','.CircleDialog'],'java.awt.Toolkit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CircleFootprint", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['org.opensourcephysics.cabrillo.tracker.Footprint', 'Cloneable']);
C$.$classes$=[['CircleDialog',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.circle=Clazz.new_($I$(15,1));
this.center=Clazz.new_($I$(15,1));
this.transform=Clazz.new_($I$(16,1));
this.alpha=0;
this.color=Clazz.new_($I$(8,1).c$$I$I$I$I,[0, 0, 0, this.alpha]);
this.highlightColor=$I$(8).black;
this.hitShapes=Clazz.array($I$(17), [1]);
this.outlined=true;
},1);

C$.$fields$=[['Z',['outlined','spotted','prevSpot'],'F',['prevStrokeSize'],'I',['alpha','r','prevRadius'],'S',['name'],'O',['circle','java.awt.geom.Ellipse2D','+center','highlight','java.awt.Shape','+outline','+spot','transform','java.awt.geom.AffineTransform','color','java.awt.Color','+highlightColor','hitShapes','java.awt.Shape[]','baseHighlightStroke','java.awt.BasicStroke','+baseOutlineStroke','+highlightStroke','+outlineStroke','dialog','org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog']]
,['F',['plainStrokeSize','boldStrokeSize'],'O',['footprints','java.util.Collection','CIRCLE','org.opensourcephysics.cabrillo.tracker.CircleFootprint','+FILLED_CIRCLE']]]

Clazz.newMeth(C$, 'c$$S$I',  function (name, radius) {
;C$.$init$.apply(this);
this.name=name;
this.setRadius$I(radius);
this.setStroke$java_awt_BasicStroke(Clazz.new_($I$(12,1).c$$F,[1.0]));
this.center.setFrame$D$D$D$D(-1, -1, 2, 2);
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
var clone=Clazz.clone(this);
clone.circle=Clazz.new_($I$(15,1));
return clone;
});

Clazz.newMeth(C$, 'getFootprint$S',  function (name) {
var it=C$.footprints.iterator$();
while (it.hasNext$()){
var footprint=it.next$();
if (name == footprint.getName$()) try {
var fp=footprint.clone$();
return fp;
} catch (ex) {
if (Clazz.exceptionOf(ex,"CloneNotSupportedException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getDisplayName$',  function () {
return $I$(1).getString$S(this.name);
});

Clazz.newMeth(C$, 'getLength$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getIcon$I$I',  function (w, h) {
var realRadius=this.r;
this.setRadius$I(this.outlined ? 5 : 6);
var shape=this.getShape$java_awt_PointA$I(Clazz.array($I$(18), -1, [Clazz.new_($I$(18,1))]), 1);
var decor=null;
if (this.spotted) {
decor=Clazz.new_([Clazz.array($I$(17), -1, [this.spot])],$I$(19,1).c$$java_awt_ShapeA).andFill$ZA(Clazz.array(Boolean.TYPE, -1, [true]));
}if (this.outlined) {
if (decor == null ) decor=Clazz.new_([Clazz.array($I$(17), -1, [this.outline])],$I$(19,1).c$$java_awt_ShapeA);
 else decor.addDrawShape$java_awt_Shape$java_awt_Stroke(this.outline, this.outlineStroke);
}var icon=Clazz.new_($I$(20,1).c$$org_opensourcephysics_cabrillo_tracker_MultiShape$org_opensourcephysics_cabrillo_tracker_MultiShape$I$I,[shape, decor, w, h]);
icon.setColor$java_awt_Color$java_awt_Color(this.color, this.highlightColor);
this.setRadius$I(realRadius);
return Clazz.new_($I$(21,1).c$$javax_swing_Icon,[icon]);
});

Clazz.newMeth(C$, 'getMark$java_awt_PointA',  function (points) {
var shape=this.getShape$java_awt_PointA$I(points, $I$(22).getIntegerFactor$());
var outline=this.outline;
var highlight=this.highlight;
var spot=this.spot;
return ((P$.CircleFootprint$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFootprint$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.opensourcephysics.cabrillo.tracker.Mark', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z',  function (g, highlighted) {
var gpaint=g.getPaint$();
var gstroke=g.getStroke$();
if ($I$(23).setRenderingHints) g.setRenderingHint$java_awt_RenderingHints_Key$O($I$(24).KEY_ANTIALIASING, $I$(24).VALUE_ANTIALIAS_ON);
g.setPaint$java_awt_Paint(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'].color);
this.$finals$.shape.draw$java_awt_Graphics2D(g);
g.setPaint$java_awt_Paint(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'].highlightColor);
if (this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'].spotted) {
g.fill$java_awt_Shape(this.$finals$.spot);
}if (this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'].outlined) {
g.setStroke$java_awt_Stroke(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'].outlineStroke);
g.draw$java_awt_Shape(this.$finals$.outline);
}if (highlighted) {
g.setStroke$java_awt_Stroke(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'].highlightStroke);
g.draw$java_awt_Shape(this.$finals$.highlight);
}g.setPaint$java_awt_Paint(gpaint);
g.setStroke$java_awt_Stroke(gstroke);
});
})()
), Clazz.new_(P$.CircleFootprint$1.$init$,[this, {shape:shape,spot:spot,outline:outline,highlight:highlight}]));
});

Clazz.newMeth(C$, 'getHitShapes$',  function () {
return this.hitShapes;
});

Clazz.newMeth(C$, 'setStroke$java_awt_BasicStroke',  function (stroke) {
this.baseOutlineStroke=stroke;
this.baseHighlightStroke=Clazz.new_([stroke.getLineWidth$() + 1.0],$I$(12,1).c$$F);
});

Clazz.newMeth(C$, 'getStroke$',  function () {
return null;
});

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (color) {
this.color=Clazz.new_([color.getRed$(), color.getGreen$(), color.getBlue$(), this.alpha],$I$(8,1).c$$I$I$I$I);
this.highlightColor=Clazz.new_([color.getRed$(), color.getGreen$(), color.getBlue$()],$I$(8,1).c$$I$I$I);
});

Clazz.newMeth(C$, 'getColor$',  function () {
return this.highlightColor;
});

Clazz.newMeth(C$, 'setRadius$I',  function (radius) {
this.r=radius;
this.circle.setFrame$D$D$D$D(-this.r, -this.r, 2 * this.r, 2 * this.r);
});

Clazz.newMeth(C$, 'setOutlined$Z',  function (outline) {
this.outlined=outline;
});

Clazz.newMeth(C$, 'setSpotShown$Z',  function (drawSpot) {
this.spotted=drawSpot;
});

Clazz.newMeth(C$, 'setAlpha$I',  function (alpha) {
this.alpha=alpha;
this.setColor$java_awt_Color(this.color);
});

Clazz.newMeth(C$, 'getProperties$',  function () {
var s=this.r + " ";
if (this.outlined) s+="outline ";
if (this.spotted) s+="spot ";
if (this.baseOutlineStroke.getLineWidth$() > C$.plainStrokeSize ) s+="bold ";
return s;
});

Clazz.newMeth(C$, 'setProperties$S',  function (props) {
if (props == null ) return;
var n=props.indexOf$S(" ");
var radius=props.substring$I$I(0, n);
try {
this.setRadius$I(Integer.parseInt$S(radius));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
this.setOutlined$Z(props.indexOf$S("outline") > -1);
this.setSpotShown$Z(props.indexOf$S("spot") > -1);
var f=props.indexOf$S("bold") > -1 ? C$.boldStrokeSize : C$.plainStrokeSize;
this.setStroke$java_awt_BasicStroke(Clazz.new_($I$(12,1).c$$F,[f]));
});

Clazz.newMeth(C$, 'showProperties$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
if (this.dialog == null ) {
this.dialog=Clazz.new_($I$(25,1).c$$org_opensourcephysics_cabrillo_tracker_TTrack,[this, null, track]);
var dim=$I$(26).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.dialog.getBounds$().width)/2|0);
var y=((dim.height - this.dialog.getBounds$().height)/2|0);
this.dialog.setLocation$I$I(x, y);
}this.dialog.boldCheckbox.setSelected$Z(this.baseOutlineStroke.getLineWidth$() > C$.plainStrokeSize );
this.dialog.spotCheckbox.setSelected$Z(this.spotted);
this.dialog.spinner.setValue$O(Integer.valueOf$I(this.r));
this.prevSpot=this.spotted;
this.prevStrokeSize=this.baseOutlineStroke.getLineWidth$();
this.prevRadius=this.r;
this.dialog.setVisible$Z(true);
});

Clazz.newMeth(C$, 'showProperties$org_opensourcephysics_cabrillo_tracker_TFrame$java_awt_event_ActionListener',  function (frame, listener) {
if (this.dialog == null ) {
this.dialog=Clazz.new_($I$(25,1).c$$org_opensourcephysics_cabrillo_tracker_TFrame$java_awt_event_ActionListener,[this, null, frame, listener]);
var dim=$I$(26).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.dialog.getBounds$().width)/2|0);
var y=((dim.height - this.dialog.getBounds$().height)/2|0);
this.dialog.setLocation$I$I(x, y);
}this.dialog.boldCheckbox.setSelected$Z(this.baseOutlineStroke.getLineWidth$() > C$.plainStrokeSize );
this.dialog.spotCheckbox.setSelected$Z(this.spotted);
this.dialog.spinner.setValue$O(Integer.valueOf$I(this.r));
this.prevSpot=this.spotted;
this.prevStrokeSize=this.baseOutlineStroke.getLineWidth$();
this.prevRadius=this.r;
this.dialog.setVisible$Z(true);
});

Clazz.newMeth(C$, 'getShape$java_awt_PointA$I',  function (points, scale) {
var p=points[0];
this.transform.setToTranslation$D$D(p.x, p.y);
if (scale > 1) {
this.transform.scale$D$D(scale, scale);
}var c=this.transform.createTransformedShape$java_awt_Shape(this.circle);
if (this.outlineStroke == null  || this.outlineStroke.getLineWidth$() != scale * this.baseOutlineStroke.getLineWidth$()  ) {
this.outlineStroke=Clazz.new_([scale * this.baseOutlineStroke.getLineWidth$()],$I$(12,1).c$$F);
this.highlightStroke=Clazz.new_([scale * this.baseHighlightStroke.getLineWidth$()],$I$(12,1).c$$F);
}this.highlight=this.transform.createTransformedShape$java_awt_Shape(this.circle);
this.outline=this.transform.createTransformedShape$java_awt_Shape(this.circle);
this.spot=this.transform.createTransformedShape$java_awt_Shape(this.center);
this.hitShapes[0]=this.spot;
return Clazz.new_([Clazz.array($I$(17), -1, [c])],$I$(19,1).c$$java_awt_ShapeA).andFill$ZA(Clazz.array(Boolean.TYPE, -1, [true]));
});

C$.$static$=function(){C$.$static$=0;
C$.plainStrokeSize=1.0;
C$.boldStrokeSize=2.0;
C$.footprints=Clazz.new_($I$(14,1));
{
C$.CIRCLE=Clazz.new_(C$.c$$S$I,["CircleFootprint.Circle", 4]);
C$.footprints.add$O(C$.CIRCLE);
C$.FILLED_CIRCLE=Clazz.new_(C$.c$$S$I,["CircleFootprint.FilledCircle", 8]);
C$.FILLED_CIRCLE.setSpotShown$Z(true);
C$.FILLED_CIRCLE.setAlpha$I(102);
C$.footprints.add$O(C$.FILLED_CIRCLE);
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.CircleFootprint, "CircleDialog", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['trackID'],'O',['panelID','Integer','spinner','javax.swing.JSpinner','spinnerLabel','javax.swing.JLabel','okButton','javax.swing.JButton','+cancelButton','boldCheckbox','javax.swing.JCheckBox','+spotCheckbox','actionListener','java.awt.event.ActionListener']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TTrack',  function (track) {
C$.c$$org_opensourcephysics_cabrillo_tracker_TFrame$java_awt_event_ActionListener.apply(this, [track.tframe, null]);
this.trackID=track.getID$();
this.panelID=track.tp.getID$();
}, 1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_cabrillo_tracker_TFrame$java_awt_event_ActionListener',  function (frame, listener) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[frame, true]);C$.$init$.apply(this);
this.actionListener=listener;
this.setTitle$S($I$(1).getString$S("CircleFootprint.Dialog.Title"));
this.setResizable$Z(false);
this.setDefaultCloseOperation$I(1);
this.createGUI$();
this.pack$();
this.okButton.requestFocusInWindow$();
}, 1);

Clazz.newMeth(C$, 'createGUI$',  function () {
var contentPane=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
this.setContentPane$java_awt_Container(contentPane);
var upper=Clazz.new_($I$(2,1));
upper.setBorder$javax_swing_border_Border($I$(4).createEtchedBorder$());
contentPane.add$java_awt_Component$O(upper, "North");
this.spinnerLabel=Clazz.new_([$I$(1).getString$S("CircleFootprint.Dialog.Label.Radius")],$I$(5,1).c$$S);
this.spinnerLabel.setBorder$javax_swing_border_Border($I$(4).createEmptyBorder$I$I$I$I(0, 10, 0, 0));
upper.add$java_awt_Component(this.spinnerLabel);
this.spinner=Clazz.new_([Clazz.new_($I$(7,1).c$$I$I$I$I,[3, 3, 100, 1])],$I$(6,1).c$$javax_swing_SpinnerModel);
var tf=(this.spinner.getEditor$()).getTextField$();
tf.setEnabled$Z(false);
tf.setDisabledTextColor$java_awt_Color($I$(8).BLACK);
var listener=((P$.CircleFootprint$CircleDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFootprint$CircleDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var radius=(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].spinner.getValue$()).$c();
if (radius == this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'].r) return;
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'].setRadius$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'], [radius]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].panelID != null ) {
var track=$I$(9).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].trackID);
track.tp.changed=true;
track.repaint$();
} else if (this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].actionListener != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].actionListener.actionPerformed$java_awt_event_ActionEvent(null);
}});
})()
), Clazz.new_(P$.CircleFootprint$CircleDialog$1.$init$,[this, null]));
this.spinner.addChangeListener$javax_swing_event_ChangeListener(listener);
upper.add$java_awt_Component(this.spinner);
this.boldCheckbox=Clazz.new_([$I$(1).getString$S("CircleFootprint.Dialog.Checkbox.Bold")],$I$(10,1).c$$S);
this.boldCheckbox.setBorder$javax_swing_border_Border($I$(4).createEmptyBorder$I$I$I$I(0, 10, 0, 0));
this.boldCheckbox.setOpaque$Z(false);
this.boldCheckbox.addActionListener$java_awt_event_ActionListener(((P$.CircleFootprint$CircleDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFootprint$CircleDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var f=this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].boldCheckbox.isSelected$() ? $I$(11).boldStrokeSize : $I$(11).plainStrokeSize;
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'].setStroke$java_awt_BasicStroke.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'], [Clazz.new_($I$(12,1).c$$F,[f])]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].panelID != null ) {
var track=$I$(9).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].trackID);
track.tp.changed=true;
track.repaint$();
} else if (this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].actionListener != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].actionListener.actionPerformed$java_awt_event_ActionEvent(null);
}});
})()
), Clazz.new_(P$.CircleFootprint$CircleDialog$2.$init$,[this, null])));
upper.add$java_awt_Component(this.boldCheckbox);
this.spotCheckbox=Clazz.new_([$I$(1).getString$S("CircleFootprint.Dialog.Checkbox.CenterSpot")],$I$(10,1).c$$S);
this.spotCheckbox.setBorder$javax_swing_border_Border($I$(4).createEmptyBorder$I$I$I$I(0, 10, 0, 10));
this.spotCheckbox.addActionListener$java_awt_event_ActionListener(((P$.CircleFootprint$CircleDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFootprint$CircleDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'].setSpotShown$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'], [this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].spotCheckbox.isSelected$()]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].panelID != null ) {
var track=$I$(9).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].trackID);
track.tp.changed=true;
track.repaint$();
} else if (this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].actionListener != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].actionListener.actionPerformed$java_awt_event_ActionEvent(null);
}});
})()
), Clazz.new_(P$.CircleFootprint$CircleDialog$3.$init$,[this, null])));
upper.add$java_awt_Component(this.spotCheckbox);
var lower=Clazz.new_($I$(2,1));
contentPane.add$java_awt_Component$O(lower, "South");
this.okButton=Clazz.new_([$I$(1).getString$S("Dialog.Button.OK")],$I$(13,1).c$$S);
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.CircleFootprint$CircleDialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFootprint$CircleDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].panelID != null ) {
var track=$I$(9).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].trackID);
track.setFootprint$S(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'].getName$.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'], []));
}});
})()
), Clazz.new_(P$.CircleFootprint$CircleDialog$4.$init$,[this, null])));
lower.add$java_awt_Component(this.okButton);
this.cancelButton=Clazz.new_([$I$(1).getString$S("Dialog.Button.Cancel")],$I$(13,1).c$$S);
this.cancelButton.addActionListener$java_awt_event_ActionListener(((P$.CircleFootprint$CircleDialog$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "CircleFootprint$CircleDialog$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'].setSpotShown$Z.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'], [this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'].prevSpot]);
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'].setStroke$java_awt_BasicStroke.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'], [Clazz.new_($I$(12,1).c$$F,[this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'].prevStrokeSize])]);
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'].setRadius$I.apply(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'], [this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint'].prevRadius]);
if (this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].panelID != null ) {
var track=$I$(9).getTrack$I(this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].trackID);
track.repaint$();
} else if (this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].actionListener != null ) {
this.b$['org.opensourcephysics.cabrillo.tracker.CircleFootprint.CircleDialog'].actionListener.actionPerformed$java_awt_event_ActionEvent(null);
}this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
});
})()
), Clazz.new_(P$.CircleFootprint$CircleDialog$5.$init$,[this, null])));
lower.add$java_awt_Component(this.cancelButton);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:03:05 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
