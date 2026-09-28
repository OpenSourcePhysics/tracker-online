(function(){var P$=Clazz.newPackage("org.opensourcephysics.display.axes"),I$=[[0,'org.opensourcephysics.media.core.ScientificField','java.awt.BorderLayout','java.awt.Color','javax.swing.AbstractAction','javax.swing.JCheckBox','javax.swing.BorderFactory','java.awt.event.FocusAdapter','java.awt.Rectangle','java.awt.event.MouseAdapter','org.opensourcephysics.tools.FontSizer','java.awt.event.ActionEvent','java.awt.event.InputEvent','java.util.ArrayList',['org.opensourcephysics.display.axes.CartesianInteractive','.AxisMouseListener'],'java.awt.Cursor','java.awt.event.KeyAdapter','org.opensourcephysics.tools.ResourceLoader','org.opensourcephysics.display.GUIUtils','java.awt.Point',['org.opensourcephysics.display.axes.CartesianInteractive','.ScaleSetter'],'org.opensourcephysics.display.dialogs.DialogsRes']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CartesianInteractive", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.opensourcephysics.display.axes.CartesianType1', 'org.opensourcephysics.display.Selectable');
C$.$classes$=[['ScaleSetter',1],['AxisMouseListener',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hitRect=Clazz.new_($I$(8,1));
this.enabled=true;
this.axisListeners=Clazz.new_($I$(13,1));
},1);

C$.$fields$=[['Z',['drawHitRect','enabled','altDown'],'D',['mouseX','mouseY'],'I',['mouseRegion'],'O',['hitRect','java.awt.Rectangle','axisListener','org.opensourcephysics.display.axes.CartesianInteractive.AxisMouseListener','keyListener','java.awt.event.KeyAdapter','mouseLoc','java.awt.Point','plot','org.opensourcephysics.display.PlottingPanel','horzCenter','java.awt.Cursor','+horzRight','+horzLeft','+vertCenter','+vertUp','+vertDown','+move','scaleSetter','org.opensourcephysics.display.axes.CartesianInteractive.ScaleSetter','scaleSetterPanel','javax.swing.JPanel','axisListeners','java.util.List']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_PlottingPanel',  function (panel) {
;C$.superclazz.c$$org_opensourcephysics_display_PlottingPanel.apply(this,[panel]);C$.$init$.apply(this);
this.plot=panel;
this.axisListener=Clazz.new_($I$(14,1),[this, null]);
panel.addMouseListener$java_awt_event_MouseListener(this.axisListener);
panel.addMouseMotionListener$java_awt_event_MouseMotionListener(this.axisListener);
this.keyListener=((P$.CartesianInteractive$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CartesianInteractive$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (!this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].enabled) return;
if ((this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseRegion == 0) && !this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.isFixedScale$() && (e.getKeyCode$() == 18)  ) {
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].altDown=true;
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.setMouseCursor$java_awt_Cursor(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].getPreferredCursor$.apply(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'], []));
}});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
if (!this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].enabled) return;
if (e.getKeyCode$() == 18) {
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].altDown=false;
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.setMouseCursor$java_awt_Cursor($I$(15).getPredefinedCursor$I(1));
}});
})()
), Clazz.new_($I$(16,1),[this, null],P$.CartesianInteractive$1));
panel.addKeyListener$java_awt_event_KeyListener(this.keyListener);
}, 1);

Clazz.newMeth(C$, 'getMouseRegion$',  function () {
return this.mouseRegion;
});

Clazz.newMeth(C$, 'draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics',  function (panel, g) {
C$.superclazz.prototype.draw$org_opensourcephysics_display_DrawingPanel$java_awt_Graphics.apply(this, [panel, g]);
if (this.drawHitRect) {
g.drawRect$I$I$I$I(this.hitRect.x, this.hitRect.y, this.hitRect.width, this.hitRect.height);
}});

Clazz.newMeth(C$, 'getX$',  function () {
return this.plot != null  && Double.isNaN$D(this.mouseX)  ? this.plot.pixToX$I(this.plot.getMouseIntX$()) : this.mouseX;
});

Clazz.newMeth(C$, 'getY$',  function () {
return this.plot != null  && Double.isNaN$D(this.mouseY)  ? this.plot.pixToY$I(this.plot.getMouseIntY$()) : this.mouseY;
});

Clazz.newMeth(C$, 'setSelected$Z',  function (selectable) {
});

Clazz.newMeth(C$, 'isSelected$',  function () {
return false;
});

Clazz.newMeth(C$, 'toggleSelected$',  function () {
});

Clazz.newMeth(C$, 'getPreferredCursor$',  function () {
switch (this.mouseRegion) {
case 6:
if (this.horzLeft == null ) {
var imageFile="/org/opensourcephysics/resources/tools/images/horzleft.gif";
var im=$I$(17).getImage$S(imageFile);
this.horzLeft=$I$(18,"createCustomCursor$java_awt_Image$java_awt_Point$S$I",[im, Clazz.new_($I$(19,1).c$$I$I,[16, 16]), "Horizontal Left", 10]);
}return this.horzLeft;
case 7:
if (this.horzRight == null ) {
var imageFile="/org/opensourcephysics/resources/tools/images/horzright.gif";
var im=$I$(17).getImage$S(imageFile);
this.horzRight=$I$(18,"createCustomCursor$java_awt_Image$java_awt_Point$S$I",[im, Clazz.new_($I$(19,1).c$$I$I,[16, 16]), "Horizontal Right", 11]);
}return this.horzRight;
case 5:
if (this.horzCenter == null ) {
var imageFile="/org/opensourcephysics/resources/tools/images/horzcenter.gif";
var im=$I$(17).getImage$S(imageFile);
this.horzCenter=$I$(18,"createCustomCursor$java_awt_Image$java_awt_Point$S$I",[im, Clazz.new_($I$(19,1).c$$I$I,[16, 16]), "Horizontal Center", 13]);
}return this.horzCenter;
case 9:
if (this.vertDown == null ) {
var imageFile="/org/opensourcephysics/resources/tools/images/vertdown.gif";
var im=$I$(17).getImage$S(imageFile);
this.vertDown=$I$(18,"createCustomCursor$java_awt_Image$java_awt_Point$S$I",[im, Clazz.new_($I$(19,1).c$$I$I,[16, 16]), "Vertical Down", 9]);
}return this.vertDown;
case 10:
if (this.vertUp == null ) {
var imageFile="/org/opensourcephysics/resources/tools/images/vertup.gif";
var im=$I$(17).getImage$S(imageFile);
this.vertUp=$I$(18,"createCustomCursor$java_awt_Image$java_awt_Point$S$I",[im, Clazz.new_($I$(19,1).c$$I$I,[16, 16]), "Vertical Up", 8]);
}return this.vertUp;
case 8:
if (this.vertCenter == null ) {
var imageFile="/org/opensourcephysics/resources/tools/images/vertcenter.gif";
var im=$I$(17).getImage$S(imageFile);
this.vertCenter=$I$(18,"createCustomCursor$java_awt_Image$java_awt_Point$S$I",[im, Clazz.new_($I$(19,1).c$$I$I,[16, 16]), "Vertical Center", 13]);
}return this.vertCenter;
case 0:
if (this.move == null ) {
var imageFile="/org/opensourcephysics/resources/tools/images/movecursor.gif";
var im=$I$(17).getImage$S(imageFile);
this.move=$I$(18,"createCustomCursor$java_awt_Image$java_awt_Point$S$I",[im, Clazz.new_($I$(19,1).c$$I$I,[16, 16]), "Move All Ways", 13]);
}return this.move;
case 11:
case 12:
return $I$(15).getPredefinedCursor$I(12);
}
return $I$(15).getDefaultCursor$();
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return this.enabled;
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (enable) {
this.enabled=enable;
});

Clazz.newMeth(C$, 'addAxisListener$java_awt_event_ActionListener',  function (listener) {
this.axisListeners.add$O(listener);
});

Clazz.newMeth(C$, 'findInteractive$org_opensourcephysics_display_DrawingPanel$I$I',  function (panel, xpix, ypix) {
if (this.drawingPanel.isFixedScale$()) {
return null;
}if (this.mouseRegion >= 1) {
return this;
}if (this.mouseRegion == -1) {
return this;
}if ((this.mouseRegion == 0) && this.altDown ) {
return this;
}return null;
});

Clazz.newMeth(C$, 'setXY$D$D',  function (x, y) {
});

Clazz.newMeth(C$, 'isMeasured$',  function () {
return true;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.drawingPanel.getXMin$();
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.drawingPanel.getXMax$();
});

Clazz.newMeth(C$, 'getYMin$',  function () {
return this.drawingPanel.getYMin$();
});

Clazz.newMeth(C$, 'getYMax$',  function () {
return this.drawingPanel.getYMax$();
});

Clazz.newMeth(C$, 'hideScaleSetter$',  function () {
if (this.scaleSetter != null  && this.scaleSetter.isVisible$() ) {
this.scaleSetter.setVisible$Z(false);
if (this.plot != null ) this.plot.repaint$();
}});

Clazz.newMeth(C$, 'resizeFonts$D$org_opensourcephysics_display_DrawingPanel',  function (factor, panel) {
C$.superclazz.prototype.resizeFonts$D$org_opensourcephysics_display_DrawingPanel.apply(this, [factor, panel]);
if (this.scaleSetter != null ) {
this.scaleSetter.updateFont$();
}});

Clazz.newMeth(C$, 'dispose$',  function () {
this.plot.removeMouseListener$java_awt_event_MouseListener(this.axisListener);
this.plot.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.axisListener);
this.plot.removeKeyListener$java_awt_event_KeyListener(this.keyListener);
this.plot=null;
});

Clazz.newMeth(C$, 'hasHorzVariablesPopup$',  function () {
return false;
});

Clazz.newMeth(C$, 'getHorzVariablesPopup$',  function () {
return null;
});

Clazz.newMeth(C$, 'hasVertVariablesPopup$',  function () {
return false;
});

Clazz.newMeth(C$, 'getVertVariablesPopup$',  function () {
return null;
});

Clazz.newMeth(C$, 'findRegion$java_awt_Point$Z',  function (p, isPress) {
var l=this.drawingPanel.getLeftGutter$();
var r=this.drawingPanel.getRightGutter$();
var t=this.drawingPanel.getTopGutter$();
var b=this.drawingPanel.getBottomGutter$();
var plotDim=this.drawingPanel.getSize$();
var reg=-1;
while (true){
var axisLen=plotDim.width - r - l ;
this.hitRect.setSize$I$I((axisLen/4|0), 12);
this.hitRect.setLocation$I$I(l + (axisLen/2|0) - (this.hitRect.width/2|0), plotDim.height - b - (this.hitRect.height/2|0) );
if (this.hitRect.contains$java_awt_Point(p)) {
reg=5;
break;
}this.hitRect.setLocation$I$I(l + 4, plotDim.height - b - (this.hitRect.height/2|0) );
if (this.hitRect.contains$java_awt_Point(p)) {
reg=6;
break;
}this.hitRect.setLocation$I$I(l + axisLen - this.hitRect.width - 4, plotDim.height - b - (this.hitRect.height/2|0) );
if (this.hitRect.contains$java_awt_Point(p)) {
reg=7;
break;
}axisLen=plotDim.height - t - b ;
this.hitRect.setSize$I$I(12, (axisLen/4|0));
this.hitRect.setLocation$I$I(l - (this.hitRect.width/2|0), t + (axisLen/2|0) - (this.hitRect.height/2|0));
if (this.hitRect.contains$java_awt_Point(p)) {
reg=8;
break;
}this.hitRect.setLocation$I$I(l - (this.hitRect.width/2|0), t + 4);
if (this.hitRect.contains$java_awt_Point(p)) {
reg=10;
break;
}this.hitRect.setLocation$I$I(l - (this.hitRect.width/2|0), t + axisLen - this.hitRect.height - 4);
if (this.hitRect.contains$java_awt_Point(p)) {
reg=9;
break;
}var offset=0;
var g=this.drawingPanel.getGraphics$();
var xw=this.xLine.getWidth$java_awt_Graphics(g) + offset;
var xh=this.xLine.getHeight$java_awt_Graphics(g);
var yw=this.yLine.getHeight$java_awt_Graphics(g);
var yh=this.yLine.getWidth$java_awt_Graphics(g) + offset;
g.dispose$();
this.hitRect.setSize$I$I(xw, xh);
var x=((this.xLine.getX$() - (xw/2|0))|0);
var y=((this.xLine.getY$() - (xh/2|0) - (this.xLine.getFontSize$()/3|0))|0);
this.hitRect.setLocation$I$I(x, y);
if (this.hitRect.contains$java_awt_Point(p) && this.hasHorzVariablesPopup$() ) {
reg=11;
break;
}this.hitRect.setSize$I$I(yw, yh);
x=((this.yLine.getX$() - (yw/2|0) - (this.yLine.getFontSize$()/3|0))|0);
y=((this.yLine.getY$() - (yh/2|0) - 1)|0);
this.hitRect.setLocation$I$I(x, y);
if (this.hitRect.contains$java_awt_Point(p) && this.hasVertVariablesPopup$() ) {
reg=12;
break;
}if (!((p.x < l) || (p.y < t) || (p.x > plotDim.width - r) || (p.y > plotDim.height - b)  )) {
reg=0;
break;
}reg=this.getScaleSetter$().findRegion$java_awt_Point$java_awt_Rectangle$java_awt_Dimension$I$I$I$I$I$Z(p, this.hitRect, plotDim, offset, l, r, t, b, isPress);
return reg;
}
return reg;
});

Clazz.newMeth(C$, 'getScaleSetter$',  function () {
if (this.scaleSetter == null ) {
this.scaleSetter=Clazz.new_($I$(20,1),[this, null]);
if (this.plot != null ) this.plot.getGlassPane$().add$java_awt_Component(this.scaleSetter);
}var s=$I$(21).SCALE_AUTO;
if (!s.equals$O(this.scaleSetter.autoscaleCheckbox.getText$())) {
this.scaleSetter.autoscaleCheckbox.setText$S(s);
}return this.scaleSetter;
});

Clazz.newMeth(C$, 'refreshDecimalSeparators$',  function () {
this.htFormats.clear$();
if (this.scaleSetter != null ) {
this.scaleSetter.updateValues$();
}});
;
(function(){/*c*/var C$=Clazz.newClass(P$.CartesianInteractive, "ScaleSetter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pinned=false;
this.scaleField=((P$.CartesianInteractive$ScaleSetter$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CartesianInteractive$ScaleSetter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.opensourcephysics.media.core.ScientificField'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
dim.width-=4;
return dim;
});
})()
), Clazz.new_($I$(1,1).c$$I$I,[this, null, 6, 3],P$.CartesianInteractive$ScaleSetter$1));
this.fieldDim=this.scaleField.getPreferredSize$();
},1);

C$.$fields$=[['Z',['pinned','paintDisabled'],'I',['region'],'S',['text','constraint'],'O',['scaleAction','javax.swing.Action','autoscaleCheckbox','javax.swing.JCheckBox','size','java.awt.Dimension','scaleField','org.opensourcephysics.media.core.ScientificField','fieldDim','java.awt.Dimension']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[Clazz.new_($I$(2,1))]);C$.$init$.apply(this);
this.scaleAction=((P$.CartesianInteractive$ScaleSetter$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "CartesianInteractive$ScaleSetter$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display.axes.CartesianInteractive.ScaleSetter'].scaleField.setBackground$java_awt_Color($I$(3).white);
this.b$['org.opensourcephysics.display.axes.CartesianInteractive.ScaleSetter'].pinned=false;
var auto=this.b$['org.opensourcephysics.display.axes.CartesianInteractive.ScaleSetter'].autoscaleCheckbox.isSelected$();
var horzAxis=true;
var min=auto ? NaN : this.b$['org.opensourcephysics.display.axes.CartesianInteractive.ScaleSetter'].scaleField.getValue$();
var max=min;
switch (this.b$['org.opensourcephysics.display.axes.CartesianInteractive.ScaleSetter'].region) {
default:
return;
case 1:
max=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.isAutoscaleXMax$() ? NaN : this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.getXMax$();
break;
case 2:
min=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.isAutoscaleXMin$() ? NaN : this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.getXMin$();
break;
case 3:
horzAxis=false;
max=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.isAutoscaleYMax$() ? NaN : this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.getYMax$();
break;
case 4:
horzAxis=false;
min=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.isAutoscaleYMin$() ? NaN : this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.getYMin$();
}
if (horzAxis) {
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.setPreferredMinMaxX$D$D(min, max);
} else {
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.setPreferredMinMaxY$D$D(min, max);
}this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.paintImmediately$I$I$I$I(0, 0, this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.getWidth$(), this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.getHeight$());
this.b$['org.opensourcephysics.display.axes.CartesianInteractive.ScaleSetter'].updateValues$.apply(this.b$['org.opensourcephysics.display.axes.CartesianInteractive.ScaleSetter'], []);
});
})()
), Clazz.new_($I$(4,1),[this, null],P$.CartesianInteractive$ScaleSetter$2));
this.autoscaleCheckbox=Clazz.new_($I$(5,1));
this.autoscaleCheckbox.setBorder$javax_swing_border_Border($I$(6).createEmptyBorder$I$I$I$I(1, 2, 2, 1));
this.autoscaleCheckbox.setBackground$java_awt_Color(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.getBackground$());
this.autoscaleCheckbox.setHorizontalTextPosition$I(4);
this.autoscaleCheckbox.addActionListener$java_awt_event_ActionListener(this.scaleAction);
this.scaleField.addActionListener$java_awt_event_ActionListener(((P$.CartesianInteractive$ScaleSetter$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "CartesianInteractive$ScaleSetter$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.display.axes.CartesianInteractive.ScaleSetter'].autoscaleCheckbox.setSelected$Z(false);
this.b$['org.opensourcephysics.display.axes.CartesianInteractive.ScaleSetter'].scaleAction.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_($I$(4,1),[this, null],P$.CartesianInteractive$ScaleSetter$3)));
this.scaleField.addFocusListener$java_awt_event_FocusListener(((P$.CartesianInteractive$ScaleSetter$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "CartesianInteractive$ScaleSetter$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (this.b$['org.opensourcephysics.display.axes.CartesianInteractive.ScaleSetter'].scaleField.getBackground$() === $I$(3).yellow ) {
this.b$['org.opensourcephysics.display.axes.CartesianInteractive.ScaleSetter'].autoscaleCheckbox.setSelected$Z(false);
this.b$['org.opensourcephysics.display.axes.CartesianInteractive.ScaleSetter'].scaleAction.actionPerformed$java_awt_event_ActionEvent(null);
}});
})()
), Clazz.new_($I$(7,1),[this, null],P$.CartesianInteractive$ScaleSetter$4)));
this.scaleField.addMouseListener$java_awt_event_MouseListener(((P$.CartesianInteractive$ScaleSetter$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "CartesianInteractive$ScaleSetter$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['org.opensourcephysics.display.axes.CartesianInteractive.ScaleSetter'].pinned=true;
if (e.getClickCount$() == 2) {
this.b$['org.opensourcephysics.display.axes.CartesianInteractive.ScaleSetter'].scaleField.selectAll$();
}});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
if (this.b$['org.opensourcephysics.display.axes.CartesianInteractive.ScaleSetter'].pinned) return;
var p=e.getPoint$();
var loc=this.b$['org.opensourcephysics.display.axes.CartesianInteractive.ScaleSetter'].scaleField.getLocation$();
p.x+=loc.x;
p.y+=loc.y;
var rect=Clazz.new_([this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].scaleSetter.getSize$()],$I$(8,1).c$$java_awt_Dimension);
if (!rect.contains$java_awt_Point(p)) {
this.b$['org.opensourcephysics.display.axes.CartesianInteractive.ScaleSetter'].hideIfInactive$.apply(this.b$['org.opensourcephysics.display.axes.CartesianInteractive.ScaleSetter'], []);
}});
})()
), Clazz.new_($I$(9,1),[this, null],P$.CartesianInteractive$ScaleSetter$5)));
this.add$java_awt_Component$O(this.scaleField, "Center");
this.updateFont$();
}, 1);

Clazz.newMeth(C$, 'findRegion$java_awt_Point$java_awt_Rectangle$java_awt_Dimension$I$I$I$I$I$Z',  function (p, hitRect, plotDim, offset, l, r, t, b, isPress) {
var xmin=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.getXMin$();
var xmax=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.getXMax$();
var ymin=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.getYMin$();
var ymax=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.getYMax$();
hitRect.setSize$java_awt_Dimension(this.fieldDim);
hitRect.setLocation$I$I(l - 12, plotDim.height - b + 6 + offset);
if (hitRect.contains$java_awt_Point(p)) {
if (isPress) this.scaleField.setExpectedRange$D$D(xmin, xmax);
this.set$I$S$I(offset, "North", 1);
return 1;
}hitRect.setLocation$I$I(plotDim.width - r - this.fieldDim.width  + 12, plotDim.height - b + 6 + offset);
if (hitRect.contains$java_awt_Point(p)) {
if (isPress) this.scaleField.setExpectedRange$D$D(xmin, xmax);
this.set$I$S$I(offset, "North", 2);
return 2;
}hitRect.setLocation$I$I(l - this.fieldDim.width - 1 - offset , plotDim.height - b - this.fieldDim.height  + 8);
if (hitRect.contains$java_awt_Point(p)) {
if (isPress) this.scaleField.setExpectedRange$D$D(ymin, ymax);
this.set$I$S$I(offset, "East", 3);
return 3;
}hitRect.setLocation$I$I(l - this.fieldDim.width - 1 - offset , t - 8);
if (hitRect.contains$java_awt_Point(p)) {
if (isPress) this.scaleField.setExpectedRange$D$D(ymin, ymax);
this.set$I$S$I(offset, "East", 4);
return 4;
}return -1;
});

Clazz.newMeth(C$, 'updateFont$',  function () {
this.constraint=this.text=null;
$I$(10).setFont$java_awt_Component(this);
$I$(10).setFont$javax_swing_AbstractButton(this.autoscaleCheckbox);
});

Clazz.newMeth(C$, 'updateValues$',  function () {
if (this.scaleField.getBackground$() === $I$(3).yellow ) return;
this.scaleField.refreshDecimalSeparators$Z(false);
switch (this.region) {
case 1:
this.scaleField.setValue$D(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.getXMin$());
this.autoscaleCheckbox.setSelected$Z(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.isAutoscaleXMin$());
break;
case 2:
this.scaleField.setValue$D(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.getXMax$());
this.autoscaleCheckbox.setSelected$Z(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.isAutoscaleXMax$());
break;
case 3:
this.scaleField.setValue$D(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.getYMin$());
this.autoscaleCheckbox.setSelected$Z(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.isAutoscaleYMin$());
break;
case 4:
this.scaleField.setValue$D(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.getYMax$());
this.autoscaleCheckbox.setSelected$Z(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.isAutoscaleYMax$());
}
this.scaleField.select$I$I(20, 20);
this.scaleField.requestFocusInWindow$();
});

Clazz.newMeth(C$, 'set$I$S$I',  function (offset, constraint, region) {
var text=this.scaleField.getText$();
var doValidate=false;
if (this.constraint != constraint) {
this.add$java_awt_Component$O(this.autoscaleCheckbox, constraint);
doValidate=true;
} else if (!text.equals$O(this.text)) {
doValidate=true;
}if (doValidate) {
this.size=this.getPreferredSize$();
this.validate$();
}this.text=text;
this.constraint=constraint;
var fieldLoc=this.scaleField.getLocation$();
var hitLoc=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].hitRect.getLocation$();
switch (region) {
case 1:
this.setBounds$I$I$I$I(hitLoc.x - fieldLoc.x, hitLoc.y - fieldLoc.y - offset , this.size.width, this.size.height);
break;
case 2:
this.setBounds$I$I$I$I(hitLoc.x - fieldLoc.x, hitLoc.y - fieldLoc.y - offset , this.size.width, this.size.height);
break;
case 3:
this.setBounds$I$I$I$I(Math.max(hitLoc.x, 1) - fieldLoc.x, hitLoc.y - fieldLoc.y, this.size.width, this.size.height);
break;
case 4:
this.setBounds$I$I$I$I(Math.max(hitLoc.x, 1) - fieldLoc.x, hitLoc.y - fieldLoc.y, this.size.width, this.size.height);
break;
}
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
this.paintDisabled=false;
if (b) this.updateValues$();
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
});

Clazz.newMeth(C$, 'hideIfInactive$',  function () {
if ((this.scaleField.getBackground$() !== $I$(3).yellow ) && (this.scaleField.getSelectedText$() == null ) && !this.pinned  ) {
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].hideScaleSetter$.apply(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'], []);
}});

Clazz.newMeth(C$, 'setRegion$I',  function (mouseRegion) {
if (this.region != mouseRegion) {
this.autoscaleCheckbox.requestFocusInWindow$();
if (this.scaleField.getBackground$() === $I$(3).yellow ) {
this.autoscaleCheckbox.setSelected$Z(false);
this.scaleAction.actionPerformed$java_awt_event_ActionEvent(null);
}this.region=mouseRegion;
this.pinned=false;
}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CartesianInteractive, "AxisMouseListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.event.MouseInputAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
if (!this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].enabled) return;
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].altDown=e.isAltDown$();
var p=e.getPoint$();
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawHitRect=false;
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseRegion=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].findRegion$java_awt_Point$Z.apply(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'], [p, false]);
switch (this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseRegion) {
case 1:
case 2:
case 3:
case 4:
if (!this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.isFixedScale$() && this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].scaleSetter != null  ) {
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].getScaleSetter$.apply(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'], []).setRegion$I(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseRegion);
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].scaleSetter.setVisible$Z(true);
}return;
case 11:
case 12:
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawHitRect=true;
break;
default:
break;
}
if (this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].scaleSetter != null ) this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].scaleSetter.hideIfInactive$();
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
if (!this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].enabled) return;
var dx=0;
var dy=0;
var min=0;
var max=0;
switch (this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseRegion) {
case 0:
if (!this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].altDown || this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.isFixedScale$() ) {
return;
}dx=(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseLoc.x - e.getX$()) / this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getXPixPerUnit$();
min=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getXMin$() + dx;
max=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getXMax$() + dx;
dx=0;
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.setPreferredMinMaxX$D$D(min, max);
dy=(e.getY$() - this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseLoc.y) / this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getYPixPerUnit$();
min=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getYMin$() + dy;
max=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getYMax$() + dy;
break;
case 5:
dx=(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseLoc.x - e.getX$()) / this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getXPixPerUnit$();
min=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getXMin$() + dx;
max=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getXMax$() + dx;
break;
case 6:
dx=2 * (this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseLoc.x - e.getX$()) / this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getXPixPerUnit$();
min=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getXMin$() + dx;
max=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.isAutoscaleXMax$() ? NaN : this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getXMax$();
break;
case 7:
dx=2 * (this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseLoc.x - e.getX$()) / this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getXPixPerUnit$();
min=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.isAutoscaleXMin$() ? NaN : this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getXMin$();
max=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getXMax$() + dx;
break;
case 8:
dy=(e.getY$() - this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseLoc.y) / this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getYPixPerUnit$();
min=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getYMin$() + dy;
max=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getYMax$() + dy;
break;
case 9:
dy=2 * (e.getY$() - this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseLoc.y) / this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getYPixPerUnit$();
min=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getYMin$() + dy;
max=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.isAutoscaleYMax$() ? NaN : this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getYMax$();
break;
case 10:
dy=2 * (e.getY$() - this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseLoc.y) / this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getYPixPerUnit$();
min=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.isAutoscaleYMin$() ? NaN : this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getYMin$();
max=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getYMax$() + dy;
break;
}
if (dx != 0 ) {
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.setPreferredMinMaxX$D$D(min, max);
} else if (dy != 0 ) {
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.setPreferredMinMaxY$D$D(min, max);
}for (var listener, $listener = this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].axisListeners.iterator$(); $listener.hasNext$()&&((listener=($listener.next$())),1);) listener.actionPerformed$java_awt_event_ActionEvent(Clazz.new_([this.b$['org.opensourcephysics.display.axes.CartesianInteractive'], e.getID$(), "axis dragged"],$I$(11,1).c$$O$I$S));

this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.invalidateImage$();
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.repaint$();
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseLoc=e.getPoint$();
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if (!this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].enabled) return;
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.requestFocusInWindow$();
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].altDown=e.isAltDown$();
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseLoc=e.getPoint$();
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseX=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.pixToX$I(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getMouseIntX$());
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseY=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.pixToY$I(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getMouseIntY$());
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseRegion=this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].findRegion$java_awt_Point$Z.apply(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'], [this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseLoc, true]);
switch (this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseRegion) {
case 1:
case 2:
case 3:
case 4:
if (this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].scaleSetter != null  && !this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawingPanel.isFixedScale$() ) {
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].scaleSetter.setVisible$Z(true);
}return;
case 11:
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawHitRect=false;
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].getHorzVariablesPopup$.apply(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'], []).show$java_awt_Component$I$I(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot, this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseLoc.x - 20, this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseLoc.y - 12);
break;
case 12:
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].drawHitRect=false;
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].getVertVariablesPopup$.apply(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'], []).show$java_awt_Component$I$I(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot, this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseLoc.x - 20, this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseLoc.y - 12);
break;
default:
break;
}
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.repaint$();
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
if (!this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].enabled) return;
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseX=NaN;
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].mouseY=NaN;
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
if (!this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].enabled) return;
var p=e.getPoint$();
var rect=Clazz.new_([this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].plot.getSize$()],$I$(8,1).c$$java_awt_Dimension);
if (!rect.contains$java_awt_Point(p) && (this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].scaleSetter != null ) && "".equals$O($I$(12,"getModifiersExText$I",[e.getModifiersEx$()]))  ) {
this.b$['org.opensourcephysics.display.axes.CartesianInteractive'].hideScaleSetter$.apply(this.b$['org.opensourcephysics.display.axes.CartesianInteractive'], []);
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:51 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
