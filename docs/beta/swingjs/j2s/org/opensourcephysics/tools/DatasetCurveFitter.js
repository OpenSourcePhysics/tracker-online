(function(){var P$=Clazz.newPackage("org.opensourcephysics.tools"),p$1={},p$2={},I$=[[0,'java.awt.Color','org.opensourcephysics.display.OSPRuntime','java.awt.event.MouseAdapter','javax.swing.JPopupMenu','javax.swing.JMenuItem','org.opensourcephysics.tools.ToolsRes','java.awt.event.ActionEvent','javax.swing.JCheckBoxMenuItem','org.opensourcephysics.tools.DatasetCurveFitter','org.opensourcephysics.tools.FontSizer','javax.swing.Timer','javax.swing.UIManager','javax.swing.JTextField','javax.swing.BorderFactory','org.opensourcephysics.display.CellBorder','javax.swing.JPanel','java.awt.BorderLayout',['org.opensourcephysics.tools.DatasetCurveFitter','.SpinnerNumberCrawlerModel'],'javax.swing.JLabel','javax.swing.JSpinner','org.opensourcephysics.tools.Parameter',['org.opensourcephysics.tools.DatasetCurveFitter','.DCFNumberField'],'javax.swing.event.MouseInputAdapter','java.awt.event.KeyAdapter','java.util.ArrayList','org.opensourcephysics.tools.KnownPolynomial','org.opensourcephysics.tools.UserFunction','org.opensourcephysics.numerics.HessianMinimize','org.opensourcephysics.numerics.LevenbergMarquardt','java.util.TreeMap','java.util.HashMap','org.opensourcephysics.display.TeXParser','org.opensourcephysics.display.ColorIcon','org.opensourcephysics.tools.DataTool',['org.opensourcephysics.tools.DatasetCurveFitter','.MinimizeUserFunction'],'javax.swing.JSplitPane','javax.swing.JCheckBox','org.opensourcephysics.tools.FitBuilder','javax.swing.JComboBox','javax.swing.border.EmptyBorder','org.opensourcephysics.tools.UserFunctionEditor','org.opensourcephysics.tools.FitFunctionPanel',['org.opensourcephysics.tools.DatasetCurveFitter','.ParamCellRenderer'],['org.opensourcephysics.tools.DatasetCurveFitter','.SpinCellEditor'],['org.opensourcephysics.tools.DatasetCurveFitter','.ParamTableModel'],['org.opensourcephysics.tools.DatasetCurveFitter','.ParamTable'],'javax.swing.JScrollPane','javax.swing.JToolBar','javax.swing.BoxLayout','javax.swing.SwingUtilities','org.opensourcephysics.display.UncertainFunctionDrawer','java.util.HashSet','org.opensourcephysics.numerics.LUPDecomposition','javax.swing.JOptionPane','javax.swing.JColorChooser','javax.swing.JDialog','javax.swing.JButton','java.awt.Toolkit']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DatasetCurveFitter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel');
C$.$classes$=[['ParamTable',0],['ParamTableModel',0],['ParamCellRenderer',0],['SpinCellEditor',0],['SpinnerNumberCrawlerModel',0],['MinimizeMultiVarFunction',1],['MinimizeUserFunction',1],['DCFNumberField',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sigma_y_squared=1;
this.testFunctions=Clazz.new_($I$(25,1));
this.color=$I$(1).MAGENTA;
this.localFits=Clazz.new_($I$(25,1));
this.hessian=Clazz.new_($I$(28,1));
this.levmar=Clazz.new_($I$(29,1));
this.fitMap=Clazz.new_($I$(30,1));
this.fixedParams=Clazz.new_($I$(31,1));
this.initialParams=Clazz.new_($I$(31,1));
this.fitNumber=1;
this.refreshing=false;
this.neverBeenActive=true;
this.correlation=NaN;
this.uncertainties=Clazz.array(Double.TYPE, [2]);
this.fitEvaluatedToNaN=false;
},1);

C$.$fields$=[['Z',['refreshing','isActive','neverBeenActive','fitEvaluatedToNaN','autofit'],'D',['sigma_y_squared','correlation'],'I',['fitNumber','fontLevel'],'O',['fitBuilder','org.opensourcephysics.tools.FitBuilder','fitListener','java.beans.PropertyChangeListener','tab','org.opensourcephysics.tools.DataToolTab','fit','org.opensourcephysics.tools.KnownFunction','testFunctions','java.util.ArrayList','color','java.awt.Color','paramModel','org.opensourcephysics.tools.DatasetCurveFitter.ParamTableModel','localFits','java.util.ArrayList','dataset','org.opensourcephysics.display.Dataset','hessian','org.opensourcephysics.numerics.HessianMinimize','levmar','org.opensourcephysics.numerics.LevenbergMarquardt','drawer','org.opensourcephysics.display.UncertainFunctionDrawer','fitMap','java.util.Map','+fixedParams','+initialParams','uncertainties','double[]','colorButton','javax.swing.JButton','+closeButton','autofitCheckBox','javax.swing.JCheckBox','fitLabel','javax.swing.JLabel','+eqnLabel','+rmsLabel','fitBar','javax.swing.JToolBar','+eqnBar','+rmsBar','fitDropDown','javax.swing.JComboBox','eqnField','javax.swing.JTextField','rmsField','org.opensourcephysics.tools.DatasetCurveFitter.DCFNumberField','paramTable','org.opensourcephysics.tools.DatasetCurveFitter.ParamTable','cellRenderer','org.opensourcephysics.tools.DatasetCurveFitter.ParamCellRenderer','spinCellEditor','org.opensourcephysics.tools.DatasetCurveFitter.SpinCellEditor','fitBuilderButton','javax.swing.JButton','splitPane','javax.swing.JSplitPane','colorDialog','javax.swing.JDialog']]
,['Z',['isFixedDecimalFormat'],'O',['defaultFits','java.util.ArrayList','labelBorder','javax.swing.border.Border']]]

Clazz.newMeth(C$, 'setActiveNoFit$Z',  function (b) {
this.isActive=b;
});

Clazz.newMeth(C$, 'isActive$',  function () {
return this.isActive;
});

Clazz.newMeth(C$, 'setAutofit$Z',  function (auto) {
this.autofit=auto;
if (auto != this.autofitCheckBox.isSelected$() ) this.autofitCheckBox.doClick$I(0);
});

Clazz.newMeth(C$, 'isAutoFit$',  function () {
return this.autofit;
});

Clazz.newMeth(C$, 'setAutoFit$Z',  function (autofit) {
this.autofit=autofit;
this.autofitCheckBox.setSelected$Z(autofit);
if (!autofit) this.drawer.setUncertainties$DAA(null);
});

Clazz.newMeth(C$, 'getSplitPane$',  function () {
return this.splitPane;
});

Clazz.newMeth(C$, 'c$$org_opensourcephysics_display_Dataset$org_opensourcephysics_tools_FitBuilder',  function (data, builder) {
Clazz.super_(C$, this);
this.dataset=data;
this.fitBuilder=builder;
this.createGUI$();
this.fitBuilder.removePropertyChangeListener$java_beans_PropertyChangeListener(this.fitListener);
this.fitBuilder.addPropertyChangeListener$java_beans_PropertyChangeListener(this.fitListener);
}, 1);

Clazz.newMeth(C$, 'getDrawer$',  function () {
return this.drawer;
});

Clazz.newMeth(C$, 'getData$',  function () {
return this.dataset;
});

Clazz.newMeth(C$, 'setData$org_opensourcephysics_display_Dataset$Z',  function (data, doFit) {
this.dataset=data;
if (!this.isActive) return;
if (doFit) {
this.fit$org_opensourcephysics_tools_KnownFunction(this.fit);
}if (this.dataset != null ) {
this.fitBuilder.setDefaultVariables$SA(Clazz.array(String, -1, [$I$(32,"removeSubscripting$S",[this.dataset.getXColumnName$()])]));
if (!this.isActive) {
var x=this.dataset.getValidXPoints$();
var y=this.dataset.getValidYPoints$();
this.doLinearRegression$DA$DA(x, y);
this.refreshStatusBar$();
}}});

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (newColor) {
this.color=newColor;
if (this.drawer != null ) {
this.drawer.setColor$java_awt_Color(newColor);
p$2.updateColorButton.apply(this, []);
this.firePropertyChange$S$O$O("changed", null, null);
}});

Clazz.newMeth(C$, 'updateColorButton',  function () {
var currentLF=$I$(12).getLookAndFeel$();
var nimbus=currentLF.getClass$().getName$().indexOf$S("Nimbus") > -1;
if (nimbus) {
this.colorButton.setIcon$javax_swing_Icon(Clazz.new_([this.color, 12, $I$(34).buttonHeight - 8],$I$(33,1).c$$java_awt_Color$I$I));
} else {
this.colorButton.setBackground$java_awt_Color(this.color);
}}, p$2);

Clazz.newMeth(C$, 'setActiveAndFit$Z',  function (active) {
if (this.isActive == active ) return;
this.isActive=active;
if (active) {
if (this.neverBeenActive) {
this.neverBeenActive=false;
this.setAutoFit$Z(true);
}this.fit$org_opensourcephysics_tools_KnownFunction(this.fit);
}});

Clazz.newMeth(C$, 'fit$org_opensourcephysics_tools_KnownFunction',  function (fit) {
return this.fit$org_opensourcephysics_tools_KnownFunction$Z(fit, false);
});

Clazz.newMeth(C$, 'fit$org_opensourcephysics_tools_KnownFunction$Z',  function (fit, fromScratch) {
if (this.drawer == null ) {
this.selectFit$S(this.fitDropDown.getSelectedItem$());
}if (fit == null ) return NaN;
if (this.dataset == null ) {
if (Clazz.instanceOf(fit, "org.opensourcephysics.tools.UserFunction")) {
this.eqnField.setText$S("y = " + (fit).getFullExpression$SA(Clazz.array(String, -1, ["x"])));
} else {
this.eqnField.setText$S("y = " + fit.getExpression$S("x").replace$CharSequence$CharSequence(" ", ""));
}this.setAutoFit$Z(false);
this.autofitCheckBox.setEnabled$Z(false);
this.spinCellEditor.stopCellEditing$();
this.paramTable.setEnabled$Z(false);
this.rmsField.setText$S($I$(6).getString$S("DatasetCurveFitter.RMSField.NoData"));
this.rmsField.setForeground$java_awt_Color($I$(1).RED);
return NaN;
}var devSq=0;
var x=this.dataset.getValidXPoints$();
var y=this.dataset.getValidYPoints$();
this.autofitCheckBox.setEnabled$Z(true);
this.paramTable.setEnabled$Z(true);
fromScratch=!fit.getName$().equals$O("TestFunction") && (fromScratch || this.fixedParams.get$O(fit) == null  ) ;
if (fromScratch) {
if (this.initialParams.get$O(fit) == null ) {
var p=Clazz.array(Double.TYPE, [fit.getParameterCount$()]);
for (var i=0; i < fit.getParameterCount$(); i++) {
p[i]=fit.getParameterValue$I(i);
}
this.initialParams.put$O$O(fit, p);
}if (this.fixedParams.get$O(fit) == null ) this.fixedParams.put$O$O(fit, Clazz.array(Boolean.TYPE, [fit.getParameterCount$()]));
var scratchParams=p$2.getScratchParams$org_opensourcephysics_tools_KnownFunction$DA$DA.apply(this, [fit, x, y]);
if (scratchParams != null ) {
var fix=this.fixedParams.get$O(fit);
for (var i=0; i < scratchParams.length; i++) {
if (!fix[i]) fit.setParameterValue$I$D(i, scratchParams[i]);
}
}}var fix=this.fixedParams.get$O(fit);
var testFit=p$2.getTestFunction$org_opensourcephysics_tools_KnownFunction$ZA.apply(this, [fit, fix]);
var nothingToTest=(fix != null );
if (fix != null ) {
for (var i=0; i < fix.length; i++) {
nothingToTest=nothingToTest && fix[i] ;
}
}if (nothingToTest) {
p$2.setUncertainties$DAA.apply(this, [null]);
this.tab.refreshPlot$();
this.drawer.functionChanged=true;
this.paramTable.repaint$();
} else {
var prevParams=null;
var prevDevSq=p$2.getDevSquared$org_opensourcephysics_numerics_Function$DA$DA.apply(this, [fit, x, y]);
if (this.autofit && !Double.isNaN$D(prevDevSq) ) {
if (Clazz.instanceOf(testFit, "org.opensourcephysics.tools.KnownPolynomial")) {
var poly=testFit;
poly.fitData$DA$DA(x, y);
} else if (Clazz.instanceOf(testFit, "org.opensourcephysics.tools.UserFunction")) {
var f=testFit;
var params=Clazz.array(Double.TYPE, [f.getParameterCount$()]);
if (params.length > 0 && params.length <= x.length  && params.length <= y.length ) {
var minFunc=Clazz.new_($I$(35,1).c$$org_opensourcephysics_tools_UserFunction$DA$DA,[this, null, f, x, y]);
prevParams=Clazz.array(Double.TYPE, [params.length]);
for (var i=0; i < params.length; i++) {
params[i]=prevParams[i]=f.getParameterValue$I(i);
}
var tol=1.0E-6;
var iterations=20;
this.hessian.minimize$org_opensourcephysics_numerics_MultiVarFunction$DA$I$D(minFunc, params, iterations, tol);
devSq=p$2.getDevSquared$org_opensourcephysics_numerics_Function$DA$DA.apply(this, [testFit, x, y]);
var success=true;
if (devSq > prevDevSq ) {
for (var i=0; i < prevParams.length; i++) {
f.setParameterValue$I$D(i, prevParams[i]);
}
success=this.levmar.minimize$org_opensourcephysics_numerics_MultiVarFunction$DA$I$D(minFunc, params, iterations, tol);
devSq=p$2.getDevSquared$org_opensourcephysics_numerics_Function$DA$DA.apply(this, [testFit, x, y]);
}if (!success || devSq > prevDevSq  ) {
for (var i=0; i < prevParams.length; i++) {
f.setParameterValue$I$D(i, prevParams[i]);
}
devSq=prevDevSq;
}}}if (!this.testFunctions.contains$O(fit)) {
if (this.autofit) {
var sigmas=p$2.getUncertainties$org_opensourcephysics_tools_KnownFunction$org_opensourcephysics_tools_KnownFunction$DA$DA.apply(this, [fit, testFit, x, y]);
p$2.setUncertainties$DAA.apply(this, [sigmas]);
} else {
p$2.setUncertainties$DAA.apply(this, [null]);
}if (this.tab != null ) this.tab.refreshPlot$();
}this.drawer.functionChanged=true;
this.paramTable.repaint$();
}if (fit !== testFit ) {
for (var i=0; i < fit.getParameterCount$(); i++) {
var next=fit.getParameterName$I(i);
for (var j=0; j < testFit.getParameterCount$(); j++) {
if (testFit.getParameterName$I(j).equals$O(next)) {
fit.setParameterValue$I$D(i, testFit.getParameterValue$I(j));
}}
}
}}this.doLinearRegression$DA$DA(x, y);
if (devSq == 0 ) {
devSq=p$2.getDevSquared$org_opensourcephysics_numerics_Function$DA$DA.apply(this, [fit, x, y]);
}var rmsDev=fit.getParameterCount$() > x.length && this.autofit  ? NaN : Math.sqrt(devSq / x.length);
this.rmsField.setForeground$java_awt_Color(this.eqnField.getForeground$());
if (x.length == 0 || y.length == 0  || Double.isNaN$D(rmsDev) ) {
this.rmsField.setValue$D(NaN);
this.rmsField.setToolTipText$S($I$(6).getString$S("DatasetCurveFitter.InsufficientData.ToolTip"));
} else {
this.rmsField.applyPattern$S("0.000E0");
this.rmsField.setValue$D(rmsDev);
this.rmsField.setToolTipText$S(null);
}this.refreshStatusBar$();
this.firePropertyChange$S$O$O("fit", null, null);
if (this.tab != null  && this.tab.areaVisible  && this.tab.measureFit ) this.tab.plot.refreshArea$();
return rmsDev;
});

Clazz.newMeth(C$, 'addFitFunction$org_opensourcephysics_tools_KnownFunction$Z',  function (f, addToFitBuilder) {
var existing=this.fitMap.get$O(f.getName$());
if (existing != null ) {
if (existing.getExpression$S("x").equals$O(f.getExpression$S("x"))) {
return;
}f.setName$S(this.fitBuilder.getUniqueName$S(f.getName$()));
}var selectedFitName=(this.fit == null  ? this.getPolyFitNameOfDegree$I(1) : this.fit.getName$());
this.fitBuilder.addFitFunction$org_opensourcephysics_tools_KnownFunction(f);
this.fitDropDown.setSelectedItem$O(selectedFitName);
});

Clazz.newMeth(C$, 'refreshStatusBar$',  function () {
if (this.tab != null  && this.tab.statsCheckbox.isSelected$() ) this.tab.refreshStatusBar$S(this.tab.getCorrelationString$());
});

Clazz.newMeth(C$, 'getUncertainty$I',  function (paramIndex) {
if (this.uncertainties != null  && paramIndex < this.uncertainties.length  && this.autofit ) {
return this.uncertainties[paramIndex];
}return NaN;
});

Clazz.newMeth(C$, 'formatUncertainParameter$D$D$I$java_text_NumberFormat',  function (value, sigma, extraPlaces, format) {
if (Double.isNaN$D(sigma) || sigma <= 0  ) {
return null;
}var exp=value == 0  ? 0 : (Math.floor(Math.log10(Math.abs(value)))|0);
var expSig=sigma == 0  ? 0 : (Math.floor(Math.log10(Math.abs(sigma)))|0);
if (expSig > exp) exp=expSig;
var shift=exp - expSig;
var multiplier=Math.pow(10, -exp);
var places=Math.max(0, shift) + extraPlaces;
var val=String.format$S$OA("%." + places + "f" , Clazz.array(java.lang.Object, -1, [Double.valueOf$D(value * multiplier)]));
var sig=String.format$S$OA("%." + places + "f" , Clazz.array(java.lang.Object, -1, [Double.valueOf$D(sigma * multiplier)]));
var formatted=val + " \u00B1 " + sig ;
var separator=String.valueOf$C($I$(2).getCurrentDecimalSeparator$());
formatted=formatted.replace$CharSequence$CharSequence(".", separator);
if (exp != 0) formatted="(" + formatted + ") " + String.format$S$OA("E%d", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(exp)])) ;
val=format.format$D(value);
sig=format.format$D(sigma);
var tooltip=val + " \u00B1 " + sig ;
return Clazz.array(String, -1, [formatted, tooltip]);
});

Clazz.newMeth(C$, 'getFitFunction$S',  function (name) {
for (var i=this.localFits.size$(); --i >= 0; ) {
if (this.localFits.get$I(i).getName$().equals$O(name)) return this.localFits.get$I(i);
}
return null;
});

Clazz.newMeth(C$, 'getSelectedFitParameters$',  function () {
return null;
});

Clazz.newMeth(C$, 'getMinimumSize$',  function () {
var dim=this.fitBar.getPreferredSize$();
dim.height+=this.eqnBar.getPreferredSize$().height;
dim.height+=this.rmsBar.getPreferredSize$().height + 1;
return dim;
});

Clazz.newMeth(C$, 'createGUI$',  function () {
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(17,1)));
this.splitPane=Clazz.new_($I$(36,1).c$$I,[1]);
this.splitPane.setResizeWeight$D(0.7);
this.splitPane.setDividerSize$I(6);
this.autofitCheckBox=Clazz.new_(["", this.autofit=true],$I$(37,1).c$$S$Z);
this.autofitCheckBox.setOpaque$Z(false);
this.autofitCheckBox.addActionListener$java_awt_event_ActionListener(((P$.DatasetCurveFitter$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].autofit=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].autofitCheckBox.isSelected$();
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].spinCellEditor.stopCellEditing$();
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].paramTable.clearSelection$();
if (this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].autofit) {
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit$org_opensourcephysics_tools_KnownFunction$Z.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'], [this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit, true]);
} else this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit$org_opensourcephysics_tools_KnownFunction.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'], [this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit]);
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["changed", null, null]);
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].paramTable.repaint$();
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].tab.repaint$();
if (!this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].autofit) this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].drawer.setUncertainties$DAA(null);
});
})()
), Clazz.new_(P$.DatasetCurveFitter$1.$init$,[this, null])));
this.fitLabel=Clazz.new_([$I$(6).getString$S("DatasetCurveFitter.Label.FitName")],$I$(19,1).c$$S);
this.fitLabel.setBorder$javax_swing_border_Border(C$.labelBorder);
this.eqnLabel=Clazz.new_([$I$(6).getString$S("DatasetCurveFitter.Label.Equation")],$I$(19,1).c$$S);
this.eqnLabel.setBorder$javax_swing_border_Border(C$.labelBorder);
this.rmsLabel=Clazz.new_($I$(19,1));
this.rmsLabel.setBorder$javax_swing_border_Border(C$.labelBorder);
this.fitDropDown=((P$.DatasetCurveFitter$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JComboBox'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
return this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fixSize$java_awt_Dimension.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'], [C$.superclazz.prototype.getPreferredSize$.apply(this, [])]);
});

Clazz.newMeth(C$, ['addItem$S','addItem$O'],  function (obj) {
if (obj == null ) return;
var line=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].getPolyFitNameOfDegree$I.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'], [1]);
var parabola=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].getPolyFitNameOfDegree$I.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'], [2]);
var name=$I$(38).localize$S(obj);
var count=this.getItemCount$();
var added=false;
for (var i=0; i < count; i++) {
var next=$I$(38,"localize$S",[this.getItemAt$I(i)]);
if (next != null  && name.compareToIgnoreCase$S(next) < 0 ) {
this.insertItemAt$O$I(obj, i);
added=true;
break;
}}
if (!added) {
C$.superclazz.prototype.addItem$O.apply(this, [obj]);
}if (obj.equals$O(line)) {
this.removeItem$O(obj);
this.insertItemAt$O$I(obj, 0);
} else if (obj.equals$O(parabola)) {
this.removeItem$O(obj);
this.insertItemAt$O$I(obj, 0);
}});
})()
), Clazz.new_($I$(39,1),[this, null],P$.DatasetCurveFitter$2));
for (var f, $f = C$.defaultFits.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
this.localFits.add$O(f.clone$());
}
this.refreshFitMap$();
for (var next, $next = this.fitMap.keySet$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
this.fitDropDown.addItem$O(next);
}
this.fitDropDown.setSelectedItem$O(this.getPolyFitNameOfDegree$I(1));
this.fitDropDown.addActionListener$java_awt_event_ActionListener(((P$.DatasetCurveFitter$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var f;
if (this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].refreshing || (f=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitBuilder.getSelectedCurveFitter$()) == null   || f !== this.b$['org.opensourcephysics.tools.DatasetCurveFitter']  ) return;
var selection=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitDropDown.getSelectedItem$();
if (selection != null  && this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit != null   && !selection.equals$O(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit.getName$()) ) {
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["changed", null, null]);
}this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].selectFit$S.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'], [selection]);
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitDropDown.setToolTipText$S(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit == null  ? null : this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit.getDescription$());
});
})()
), Clazz.new_(P$.DatasetCurveFitter$3.$init$,[this, null])));
this.fitDropDown.setRenderer$javax_swing_ListCellRenderer(Clazz.new_($I$(19,1),[this, null],P$.DatasetCurveFitter$1FitDropDownRenderer));
this.eqnField=((P$.DatasetCurveFitter$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JTextField'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
return this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fixSize$java_awt_Dimension.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'], [C$.superclazz.prototype.getPreferredSize$.apply(this, [])]);
});
})()
), Clazz.new_($I$(13,1),[this, null],P$.DatasetCurveFitter$4));
this.eqnField.setEditable$Z(false);
this.eqnField.setEnabled$Z(true);
this.eqnField.setBackground$java_awt_Color($I$(1).white);
this.eqnField.addMouseListener$java_awt_event_MouseListener(((P$.DatasetCurveFitter$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if (e.getClickCount$() == 2) {
var name=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitDropDown.getSelectedItem$().toString();
if (this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitBuilder.getPanelNames$().contains$O(name)) {
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitBuilder.setSelectedPanel$S(name);
} else {
var uf=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].createClone$org_opensourcephysics_tools_KnownFunction$S.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'], [this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit, name]);
var editor=Clazz.new_($I$(41,1));
editor.setMainFunctions$org_opensourcephysics_tools_UserFunctionA(Clazz.array($I$(27), -1, [uf]));
var panel=Clazz.new_($I$(42,1).c$$org_opensourcephysics_tools_UserFunctionEditor,[editor]);
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitBuilder.addPanel$S$org_opensourcephysics_tools_FunctionPanel(uf.getName$(), panel);
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitDropDown.setSelectedItem$O(uf.getName$());
}this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitBuilder.setVisible$Z(true);
}});
})()
), Clazz.new_($I$(3,1),[this, null],P$.DatasetCurveFitter$5)));
this.colorButton=$I$(34).createButton$S$Z("    ", false);
this.colorButton.setToolTipText$S($I$(6).getString$S("DatasetCurveFitter.Button.Color.Tooltip"));
this.colorButton.addActionListener$java_awt_event_ActionListener(((P$.DatasetCurveFitter$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var dialog=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].getColorDialog$.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'], []);
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].closeButton.setText$S($I$(6).getString$S("Button.OK"));
dialog.setTitle$S($I$(6).getString$S("DatasetCurveFitter.Dialog.Color.Title"));
dialog.setVisible$Z(true);
});
})()
), Clazz.new_(P$.DatasetCurveFitter$6.$init$,[this, null])));
this.colorButton.setBorder$javax_swing_border_Border(Clazz.new_($I$(40,1).c$$I$I$I$I,[7, 1, 5, 3]));
this.rmsField=((P$.DatasetCurveFitter$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.opensourcephysics.tools.DatasetCurveFitter','.DCFNumberField']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
return this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fixSize$java_awt_Dimension.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'], [C$.superclazz.prototype.getPreferredSize$.apply(this, [])]);
});
})()
), Clazz.new_($I$(22,1).c$$I,[this, null, 6],P$.DatasetCurveFitter$7));
this.rmsField.setEditable$Z(false);
this.rmsField.setEnabled$Z(true);
this.rmsField.setBackground$java_awt_Color($I$(1).white);
this.cellRenderer=Clazz.new_($I$(43,1),[this, null]);
this.spinCellEditor=Clazz.new_($I$(44,1),[this, null]);
this.paramModel=Clazz.new_($I$(45,1),[this, null]);
this.paramTable=Clazz.new_($I$(46,1).c$$org_opensourcephysics_tools_DatasetCurveFitter_ParamTableModel,[this, null, this.paramModel]);
this.paramTable.addMouseListener$java_awt_event_MouseListener(((P$.DatasetCurveFitter$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if (this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].paramTable.getSelectedColumn$() == 0) {
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].paramTable.clearSelection$();
}});
})()
), Clazz.new_($I$(3,1),[this, null],P$.DatasetCurveFitter$8)));
var scroller=((P$.DatasetCurveFitter$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JScrollPane'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMinimumSize$',  function () {
var dim=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].spinCellEditor.spinner.getPreferredSize$();
dim.width+=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].cellRenderer.fieldFont.getSize$() * 7;
return dim;
});
})()
), Clazz.new_($I$(47,1).c$$java_awt_Component,[this, null, this.paramTable],P$.DatasetCurveFitter$9));
scroller.addMouseListener$java_awt_event_MouseListener(((P$.DatasetCurveFitter$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(2).isPopupTrigger$java_awt_event_InputEvent(e)) this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].paramTable.showPopup$java_awt_event_MouseEvent(e);
});
})()
), Clazz.new_($I$(3,1),[this, null],P$.DatasetCurveFitter$10)));
this.splitPane.setRightComponent$java_awt_Component(scroller);
this.add$java_awt_Component$O(this.getSplitPane$(), "Center");
this.fitBuilderButton=$I$(34,"createButton$S",[$I$(6).getString$S("DatasetCurveFitter.Button.Define.Text")]);
this.fitBuilderButton.addActionListener$java_awt_event_ActionListener(((P$.DatasetCurveFitter$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var fitName=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit.getName$();
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitBuilder.refreshDropdown$S(fitName);
if (fitName != null  && this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitBuilder.getPanelNames$().contains$O(fitName) ) {
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitBuilder.setSelectedPanel$S(fitName);
} else if (this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitBuilder.getSelectedName$() != null ) {
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitDropDown.setSelectedItem$O(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitBuilder.getSelectedName$());
}this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitBuilder.refreshGUI$();
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitBuilder.setVisible$Z(true);
});
})()
), Clazz.new_(P$.DatasetCurveFitter$11.$init$,[this, null])));
this.fitListener=((P$.DatasetCurveFitter$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].processPropertyChange$java_beans_PropertyChangeEvent.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'], [e]);
});
})()
), Clazz.new_(P$.DatasetCurveFitter$12.$init$,[this, null]));
var fits=Clazz.new_($I$(25,1).c$$java_util_Collection,[this.localFits]);
for (var f, $f = fits.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
if (!this.fitBuilder.addFitFunction$org_opensourcephysics_tools_KnownFunction(f)) {
this.localFits.remove$O(f);
}}
for (var next, $next = this.fitBuilder.getPanelNames$().iterator$(); $next.hasNext$()&&((next=($next.next$())),1);) {
var panel=this.fitBuilder.getPanel$S(next);
var f=p$2.getFitFunction$org_opensourcephysics_tools_FitFunctionPanel.apply(this, [panel]);
if (this.localFits.contains$O(f)) continue;
this.localFits.add$O(f);
}
var fitPanel=Clazz.new_([Clazz.new_($I$(17,1))],$I$(16,1).c$$java_awt_LayoutManager);
this.splitPane.setLeftComponent$java_awt_Component(fitPanel);
this.fitBar=Clazz.new_($I$(48,1));
this.fitBar.setFloatable$Z(false);
this.fitBar.setBorder$javax_swing_border_Border($I$(14).createEtchedBorder$());
this.fitBar.add$java_awt_Component(this.fitLabel);
this.fitBar.add$java_awt_Component(this.fitDropDown);
this.fitBar.addSeparator$();
this.fitBar.add$java_awt_Component(this.fitBuilderButton);
fitPanel.add$java_awt_Component$O(this.fitBar, "North");
var eqnPanel=Clazz.new_([Clazz.new_($I$(17,1))],$I$(16,1).c$$java_awt_LayoutManager);
fitPanel.add$java_awt_Component$O(eqnPanel, "Center");
this.eqnBar=Clazz.new_($I$(48,1));
this.eqnBar.setFloatable$Z(false);
this.eqnBar.setBorder$javax_swing_border_Border($I$(14).createEtchedBorder$());
this.eqnBar.add$java_awt_Component(this.eqnLabel);
this.eqnBar.add$java_awt_Component(this.eqnField);
this.eqnBar.add$java_awt_Component(this.colorButton);
eqnPanel.add$java_awt_Component$O(this.eqnBar, "North");
var rmsPanel=Clazz.new_([Clazz.new_($I$(17,1))],$I$(16,1).c$$java_awt_LayoutManager);
eqnPanel.add$java_awt_Component$O(rmsPanel, "Center");
this.rmsBar=Clazz.new_($I$(48,1));
this.rmsBar.setLayout$java_awt_LayoutManager(((P$.DatasetCurveFitter$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.BoxLayout'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container',  function (target) {
C$.superclazz.prototype.layoutContainer$java_awt_Container.apply(this, [target]);
});
})()
), Clazz.new_($I$(49,1).c$$java_awt_Container$I,[this, null, this.rmsBar, 0],P$.DatasetCurveFitter$13)));
this.rmsBar.setFloatable$Z(false);
this.rmsBar.setBorder$javax_swing_border_Border($I$(14).createEtchedBorder$());
this.rmsBar.add$java_awt_Component(this.autofitCheckBox);
this.rmsBar.addSeparator$();
this.rmsBar.add$java_awt_Component(this.rmsLabel);
this.rmsBar.add$java_awt_Component(this.rmsField);
rmsPanel.add$java_awt_Component$O(this.rmsBar, "North");
this.refreshGUI$();
});

Clazz.newMeth(C$, 'fixSize$java_awt_Dimension',  function (dim) {
dim.height=$I$(34).buttonHeight - 2;
return dim;
});

Clazz.newMeth(C$, 'processPropertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (this.refreshing) return;
var isSelectedCurveFitter=(this.fitBuilder.getSelectedCurveFitter$() === this );
var panel;
var f;
var name;
var prop=e.getPropertyName$();
switch (prop) {
case "function":
name=e.getNewValue$();
panel=this.fitBuilder.getSelectedPanel$();
var fitName=panel.getName$();
var oldFitName=fitName;
if (name.equals$O(fitName) && e.getOldValue$() != null   && Clazz.instanceOf(e.getOldValue$(), "java.lang.String") ) {
oldFitName=e.getOldValue$();
}f=p$2.getFitFunction$org_opensourcephysics_tools_FitFunctionPanel.apply(this, [panel]);
this.replaceFit$S$S$org_opensourcephysics_tools_KnownFunction(oldFitName, fitName, f);
if (!fitName.equals$O(oldFitName)) {
this.fitDropDown.addItem$O(fitName);
}if (isSelectedCurveFitter && this.tab != null   && this.tab.dataTool != null   && !this.tab.dataTool.isLoading ) {
this.fitDropDown.setSelectedItem$O(fitName);
}break;
case "panel":
if (e.getNewValue$() != null ) {
f=p$2.getFitFunction$org_opensourcephysics_tools_FitFunctionPanel.apply(this, [e.getNewValue$()]);
name=f.getName$();
if (!this.fitMap.keySet$().contains$O(name)) {
this.localFits.add$O(f);
this.fitMap.put$O$O(name, f);
this.fitDropDown.addItem$O(name);
} else {
}if (this.fitBuilder.isVisible$() && isSelectedCurveFitter && this.tab != null    && this.tab.dataTool != null   && !this.tab.dataTool.isLoading ) {
this.fitDropDown.setSelectedItem$O(name);
}}if (e.getOldValue$() != null ) {
f=p$2.getFitFunction$org_opensourcephysics_tools_FitFunctionPanel.apply(this, [e.getOldValue$()]);
if (!this.fitBuilder.getPanelNames$().contains$O(f.getName$())) {
this.localFits.remove$O(f);
}}break;
default:
return;
}
this.firePropertyChange$S$O$O("changed", null, null);
this.refreshGUI$();
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.autofitCheckBox.setText$S($I$(6).getString$S("Checkbox.Autofit.Label"));
this.rmsLabel.setText$S($I$(6).getString$S("DatasetCurveFitter.Label.RMSDeviation"));
this.fitBuilderButton.setText$S($I$(6).getString$S("DatasetCurveFitter.Button.Define.Text"));
this.fitBuilderButton.setToolTipText$S($I$(6).getString$S("DatasetCurveFitter.Button.Define.Tooltip"));
this.fitLabel.setText$S($I$(6).getString$S("DatasetCurveFitter.Label.FitName"));
this.eqnLabel.setText$S($I$(6).getString$S("DatasetCurveFitter.Label.Equation"));
p$2.updateColorButton.apply(this, []);
this.refreshFitDropDown$();
});

Clazz.newMeth(C$, 'refreshDecimalSeparators$',  function () {
this.repaint$();
this.spinCellEditor.field.setValue$D(this.spinCellEditor.field.getValue$());
});

Clazz.newMeth(C$, 'refreshFitDropDown$',  function () {
var runner=((P$.DatasetCurveFitter$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].refreshFitMap$.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'], []);
var line=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].getPolyFitNameOfDegree$I.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'], [1]);
var parabola=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].getPolyFitNameOfDegree$I.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'], [2]);
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitBuilder.defaultFitName=line;
var toSelect=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitBuilder.defaultFitName;
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].refreshing=true;
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitDropDown.removeAllItems$();
for (var name, $name = this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitMap.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
if (this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit != null  && name.equals$O(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit.getName$()) ) {
toSelect=name;
}if (!name.equals$O(line) && !name.equals$O(parabola) ) {
if (toSelect == name) {
var localized=$I$(6).getString$S("Function." + name + ".Name" );
if (!localized.startsWith$S("!")) toSelect=name=localized;
}this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitDropDown.addItem$O(name);
}}
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitDropDown.addItem$O(parabola);
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitDropDown.addItem$O(line);
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitDropDown.setSelectedItem$O(toSelect);
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].refreshing=false;
});
})()
), Clazz.new_(P$.DatasetCurveFitter$14.$init$,[this, null]));
$I$(50).invokeLater$Runnable(runner);
});

Clazz.newMeth(C$, 'refreshFitMap$',  function () {
this.fitMap.clear$();
for (var f, $f = this.localFits.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
this.fitMap.put$O$O(f.getName$(), f);
}
});

Clazz.newMeth(C$, 'getPolyFitNameOfDegree$I',  function (degree) {
for (var key, $key = this.fitMap.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var f=this.fitMap.get$O(key);
if (Clazz.instanceOf(f, "org.opensourcephysics.tools.KnownPolynomial")) {
var poly=f;
if (poly.getParameterCount$() == degree + 1) return key;
}}
return null;
});

Clazz.newMeth(C$, 'setDataToolTab$org_opensourcephysics_tools_DataToolTab',  function (tab) {
this.tab=tab;
});

Clazz.newMeth(C$, 'setFontLevel$I',  function (level) {
this.fontLevel=level;
$I$(10).setFonts$O$I(this, this.fontLevel);
this.fitBuilder.setFontLevel$I(level);
this.splitPane.setDividerLocation$I(this.splitPane.getMaximumDividerLocation$());
});

Clazz.newMeth(C$, 'setParameterValue$I$D',  function (row, value) {
if (row < this.fit.getParameterCount$()) {
this.fit.setParameterValue$I$D(row, value);
}});

Clazz.newMeth(C$, 'selectFit$S',  function (name) {
if (this.refreshing) return;
if (name == null ) name=this.getPolyFitNameOfDegree$I(1);
this.fit=this.fitMap.get$O(name);
if (this.fit != null ) {
var prev=this.drawer;
this.drawer=Clazz.new_($I$(51,1).c$$org_opensourcephysics_tools_KnownFunction,[this.fit]);
this.drawer.setColor$java_awt_Color(this.color);
this.paramTable.tableChanged$javax_swing_event_TableModelEvent(null);
var depVar=(this.dataset == null ) ? "y" : $I$(32,"removeSubscripting$S",[this.dataset.getColumnName$I(1)]);
var indepVar=(this.dataset == null ) ? "x" : $I$(32,"removeSubscripting$S",[this.dataset.getColumnName$I(0)]);
if (Clazz.instanceOf(this.fit, "org.opensourcephysics.tools.UserFunction")) {
this.eqnField.setText$S(depVar + " = " + (this.fit).getFullExpression$SA(Clazz.array(String, -1, [indepVar])) );
} else {
this.eqnField.setText$S(depVar + " = " + this.fit.getExpression$S(indepVar).replace$CharSequence$CharSequence(" ", "") );
}this.firePropertyChange$S$O$O("drawer", prev, this.drawer);
if (this.isActive) this.fit$org_opensourcephysics_tools_KnownFunction(this.fit);
if (this.fitBuilder.isVisible$()) {
this.fitBuilder.setSelectedPanel$S(this.fit.getName$());
}this.paramTable.getColumnModel$().getColumn$I(1).setMaxWidth$I(p$2.getMinCheckboxColumnWidth.apply(this, []) + 10);
this.revalidate$();
}this.setActiveAndFit$Z(true);
});

Clazz.newMeth(C$, 'getMinCheckboxColumnWidth',  function () {
var s=$I$(6).getString$S("DatasetCurveFitter.Table.Heading.FixedParam");
var font=this.paramTable.getTableHeader$().getFont$();
var fm=this.paramTable.getTableHeader$().getFontMetrics$java_awt_Font(font);
return fm.stringWidth$S(s);
}, p$2);

Clazz.newMeth(C$, 'createClone$org_opensourcephysics_tools_KnownFunction$S',  function (f, name) {
var $var=(this.dataset == null ) ? "x" : $I$(32,"removeSubscripting$S",[this.dataset.getColumnName$I(0)]);
var uf=f.newUserFunction$S($var);
var n=1;
try {
var len=name.length$() - 1;
var number=name.substring$I(len);
n=Integer.parseInt$S(number) + 1;
name=name.substring$I$I(0, len);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
var names=Clazz.new_($I$(52,1));
for (var i=0; i < this.fitDropDown.getItemCount$(); i++) {
names.add$O(this.fitDropDown.getItemAt$I(i).toString());
}
try {
while (names.contains$O(name + n)){
++n;
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
uf.setName$S(name + n);
return uf;
});

Clazz.newMeth(C$, 'getDevSquared$org_opensourcephysics_numerics_Function$DA$DA',  function (f, x, y) {
this.fitEvaluatedToNaN=false;
var total=0;
for (var i=0; i < x.length; i++) {
var next=f.evaluate$D(x[i]);
if (Clazz.instanceOf(f, "org.opensourcephysics.tools.UserFunction") && this.tab != null  ) {
this.fitEvaluatedToNaN=this.fitEvaluatedToNaN || (f).evaluatedToNaN$() ;
}var dev=(next - y[i]);
total+=dev * dev;
}
if (this.tab != null ) {
this.tab.plot.setMessage$S$I(this.fitEvaluatedToNaN ? $I$(6).getString$S("DatasetCurveFitter.Warning.FunctionError") : "", 2);
}return this.fitEvaluatedToNaN ? NaN : total;
}, p$2);

Clazz.newMeth(C$, 'calibrateChiSquared$org_opensourcephysics_tools_KnownFunction$DA$DA',  function (f, x, y) {
var paramCount=f.getParameterCount$();
this.sigma_y_squared=p$2.getDevSquared$org_opensourcephysics_numerics_Function$DA$DA.apply(this, [f, x, y]) / (x.length - paramCount);
return x.length - paramCount;
}, p$2);

Clazz.newMeth(C$, 'getChiSquared$org_opensourcephysics_numerics_Function$DA$DA',  function (f, x, y) {
return p$2.getDevSquared$org_opensourcephysics_numerics_Function$DA$DA.apply(this, [f, x, y]) / this.sigma_y_squared;
}, p$2);

Clazz.newMeth(C$, 'getUncertainties$org_opensourcephysics_tools_KnownFunction$org_opensourcephysics_tools_KnownFunction$DA$DA',  function (original, fitted, x, y) {
var fitCount=fitted.getParameterCount$();
if (fitCount == 0 || x.length - fitCount <= 0 ) return null;
var minChiSquared=p$2.calibrateChiSquared$org_opensourcephysics_tools_KnownFunction$DA$DA.apply(this, [fitted, x, y]);
var paramCount=original.getParameterCount$();
var params=Clazz.array(Double.TYPE, [paramCount]);
var paramNames=Clazz.array(String, [paramCount]);
for (var i=0; i < paramCount; i++) {
params[i]=original.getParameterValue$I(i);
paramNames[i]=original.getParameterName$I(i);
}
var fittedParamIndex=Clazz.array(Integer.TYPE, [paramCount]);
for (var i=0; i < paramCount; i++) {
fittedParamIndex[i]=-1;
var name=original.getParameterName$I(i);
for (var k=0; k < fitCount; k++) {
if (fitted.getParameterName$I(k).equals$O(name)) {
fittedParamIndex[i]=k;
}}
}
var results=Clazz.new_($I$(25,1));
var sigmas=Clazz.array(Double.TYPE, [paramCount]);
for (var i=0; i < paramCount; i++) {
if (fittedParamIndex[i] < 0) {
sigmas[i]=NaN;
continue;
}var paramName=fitted.getParameterName$I(fittedParamIndex[i]);
var val=fitted.getParameterValue$I(fittedParamIndex[i]);
var delta=(Math.abs(val) + 1.0) / 100000.0;
var chiSq=0;
var twiceDeltaChiSq=0;
var testParams=Clazz.array(Double.TYPE, [2, null]);
var tries=0;
while ((twiceDeltaChiSq < 0.001  || twiceDeltaChiSq > 2  ) && tries < 10 ){
if (twiceDeltaChiSq < 0.001  && twiceDeltaChiSq != 0  ) delta*=10;
 else if (twiceDeltaChiSq > 2 ) delta/=10;
chiSq=0;
for (var j=0; j < 2; j++) {
var paramVal=j == 0 ? val - delta : val + delta;
var test=p$2.getTestFunction$org_opensourcephysics_tools_KnownFunction$S$D.apply(this, [fitted, paramName, paramVal]);
if (test == null ) break;
this.fit$org_opensourcephysics_tools_KnownFunction(test);
chiSq+=p$2.getChiSquared$org_opensourcephysics_numerics_Function$DA$DA.apply(this, [test, x, y]);
}
twiceDeltaChiSq=chiSq - 2 * minChiSquared;
++tries;
}
if (twiceDeltaChiSq > 0 ) {
sigmas[i]=delta * Math.sqrt(2 / twiceDeltaChiSq);
for (var j=0; j < 2; j++) {
var paramVal=j == 0 ? val - sigmas[i] : val + sigmas[i];
var test=p$2.getTestFunction$org_opensourcephysics_tools_KnownFunction$S$D.apply(this, [fitted, paramName, paramVal]);
this.fit$org_opensourcephysics_tools_KnownFunction(test);
testParams[j]=Clazz.array(Double.TYPE, [paramCount]);
for (var k=0; k < paramCount; k++) {
var next=original.getParameterName$I(k);
if (next.equals$O(paramName)) {
testParams[j][k]=paramVal;
continue;
}for (var m=0; m < test.getParameterCount$(); m++) {
var testName=test.getParameterName$I(m);
if (next.equals$O(testName)) {
testParams[j][k]=test.getParameterValue$I(m);
continue;
}}
testParams[j][k]=original.getParameterValue$I(k);
}
results.add$O(testParams[j]);
}
}}
results.add$I$O(0, sigmas);
return results.toArray$OA(Clazz.array(Double.TYPE, [results.size$(), null]));
}, p$2);

Clazz.newMeth(C$, 'getScratchParams$org_opensourcephysics_tools_KnownFunction$DA$DA',  function (f, x, y) {
if (Clazz.instanceOf(f, "org.opensourcephysics.tools.KnownPolynomial")) return null;
var params=Clazz.array(Double.TYPE, [f.getParameterCount$()]);
if (params.length == 0 || x == null   || x.length < params.length ) return null;
var initParams=this.initialParams.get$O(f);
if (initParams != null ) params=initParams;
var dataLen=x.length;
var ymax=-1.7976931348623157E308;
var ymin=1.7976931348623157E308;
var sortedX=Clazz.array(Double.TYPE, [dataLen]);
var sortedY=Clazz.array(Double.TYPE, [dataLen]);
var sorted=Clazz.new_($I$(30,1));
for (var i=0; i < dataLen; i++) {
sorted.put$O$O(Double.valueOf$D(x[i]), Double.valueOf$D(y[i]));
}
var index=0;
for (var d, $d = sorted.keySet$().iterator$(); $d.hasNext$()&&((d=($d.next$()).objectValue$()),1);) {
sortedX[index]=d;
++index;
}
index=0;
for (var d, $d = sorted.values$().iterator$(); $d.hasNext$()&&((d=($d.next$()).objectValue$()),1);) {
sortedY[index]=d;
ymax=Math.max(d, ymax);
ymin=Math.min(d, ymin);
++index;
}
var xmax=sortedX[dataLen - 1];
var xmin=sortedX[0];
var line=this.getFitFunction$S(this.getPolyFitNameOfDegree$I(1));
var exp=f.getExpression$S("x");
var name=f.getName$();
switch (name) {
case "Sinusoid":
case "DampedSine":
if (exp.contains$CharSequence("+D")) params[3]=(ymin + ymax) / 2;
params[0]=(ymax - ymin) / 2;
var crossings=0;
var firstCrossing=1.7976931348623157E308;
var lastCrossing=1.7976931348623157E308;
var prevX=1.7976931348623157E308;
var prevY=1.7976931348623157E308;
var posSlope=true;
for (var i=0; i < sortedX.length; i++) {
var yshifted=sortedY[i] - (params.length > 3 ? params[3] : 0);
if (i == 0) {
prevX=sortedX[i];
prevY=yshifted;
}var crossed=prevY > 0  ? yshifted <= 0  : yshifted > 0 ;
if (crossed) {
++crossings;
lastCrossing=sortedX[i] - (yshifted / (yshifted - prevY)) * (sortedX[i] - prevX);
if (crossings == 1) {
firstCrossing=lastCrossing;
posSlope=yshifted > 0 ;
}}prevX=sortedX[i];
prevY=yshifted;
}
var success=firstCrossing != 1.7976931348623157E308 ;
if (crossings > 1) params[1]=3.141592653589793 * (crossings - 1) / (lastCrossing - firstCrossing);
 else {
params[1]=3.141592653589793 * Math.max(1, crossings) / (xmax - xmin);
}var phaseToFirstCrossing=success ? params[1] * firstCrossing : 0;
params[2]=posSlope ? -phaseToFirstCrossing : 3.141592653589793 - phaseToFirstCrossing;
return params;
case "Exponential":
var range=(sortedX[dataLen - 1] - sortedX[0]);
var mid=((dataLen - 1)/2|0);
while (sortedX[mid] - sortedX[0] < range / 2  && mid < dataLen - 1 )++mid;

while (sortedX[mid] - sortedX[0] > range / 2  && mid > 0 )--mid;

var tail=Math.min(dataLen - 1, 2 * mid);
while (sortedX[tail] - sortedX[0] < 2 * (sortedX[mid] - sortedX[0])  && tail < dataLen - 1 )++tail;

while (sortedX[tail] - sortedX[0] > 2 * (sortedX[mid] - sortedX[0])  && tail > 0 )--tail;

if (exp.contains$CharSequence("+C")) {
params[2]=(sortedY[mid] * sortedY[mid] - sortedY[0] * sortedY[tail]) / (2 * sortedY[mid] - sortedY[0] - sortedY[tail]);
params[2]=Math.min(ymin - (0.001 * range), params[2]);
}var offset=params.length > 2 ? params[2] : 0;
params[1]=Math.log((sortedY[tail] - offset) / (sortedY[0] - offset)) / (sortedX[tail] - sortedX[0]);
params[0]=(sortedY[mid] - offset) / Math.exp(params[1] * sortedX[mid]);
return params;
case "Gaussian":
var S=Clazz.array(Double.TYPE, [dataLen]);
var T=Clazz.array(Double.TYPE, [dataLen]);
var sumSSq=0;
var sumTSq=0;
var sumST=0;
var sumSy=0;
var sumTy=0;
var sumy=sortedY[0];
S[0]=T[0]=0;
for (var i=1; i < dataLen; i++) {
S[i]=S[i - 1] + 0.5 * (sortedY[i] + sortedY[i - 1]) * (sortedX[i] - sortedX[i - 1]) ;
T[i]=T[i - 1] + 0.5 * (sortedX[i] * sortedY[i] + sortedX[i - 1] * sortedY[i - 1]) * (sortedX[i] - sortedX[i - 1]) ;
sumSSq+=S[i] * S[i];
sumST+=S[i] * T[i];
sumTSq+=T[i] * T[i];
sumSy+=S[i] * (sortedY[i] - sortedY[0]);
sumTy+=T[i] * (sortedY[i] - sortedY[0]);
sumy+=sortedY[i];
}
var matrix=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [sumSSq, sumST]), Clazz.array(Double.TYPE, -1, [sumST, sumTSq])]);
var lupSystem=Clazz.new_($I$(53,1).c$$DAA,[matrix]);
var inverse=lupSystem.inverseMatrixComponents$();
if (inverse == null ) return null;
var constants=Clazz.array(Double.TYPE, -1, [sumSy, sumTy]);
var results=lupSystem.solve$DA(constants);
var a=-results[0] / results[1];
var b=-2 / results[1];
var sumExp=0;
for (var i=1; i < dataLen; i++) {
sumExp+=Math.exp(-((sortedX[i] - a) * (sortedX[i] - a)) / b);
}
params[0]=sumy / sumExp;
params[1]=a;
params[2]=Math.sqrt(b / 2);
return params;
case "Log":
if (xmin <= 0 ) return null;
var ln=Clazz.array(Double.TYPE, [dataLen]);
for (var i=0; i < dataLen; i++) {
ln[i]=Math.log(sortedX[i]);
}
line.fitData$DA$DA(ln, sortedY);
params[0]=line.getParameterValue$I(0);
params[1]=line.getParameterValue$I(1);
return params;
case "Power":
if (xmin <= 0  || ymin <= 0  ) return null;
var lnx=Clazz.array(Double.TYPE, [dataLen]);
var lny=Clazz.array(Double.TYPE, [dataLen]);
for (var i=0; i < dataLen; i++) {
lnx[i]=Math.log(sortedX[i]);
lny[i]=Math.log(sortedY[i]);
}
line.fitData$DA$DA(lnx, lny);
params[0]=Math.exp(line.getParameterValue$I(1));
params[1]=line.getParameterValue$I(0);
return params;
}
return null;
}, p$2);

Clazz.newMeth(C$, 'getTestFunction$I',  function (level) {
while (this.testFunctions.size$() <= level){
var test=Clazz.new_($I$(27,1).c$$S,["TestFunction"]);
this.testFunctions.add$O(test);
}
return this.testFunctions.get$I(level);
}, p$2);

Clazz.newMeth(C$, 'getTestFunction$org_opensourcephysics_tools_KnownFunction$S$D',  function (f, paramName, paramVal) {
var level=0;
for (var i=0; i < this.testFunctions.size$(); i++) {
if (this.testFunctions.get$I(i) === f ) {
level=i + 1;
break;
}}
var testFunction=p$2.getTestFunction$I.apply(this, [level]);
var len=f.getParameterCount$();
if (len < 1) return null;
var paramNames=Clazz.array(String, [len - 1]);
var paramValues=Clazz.array(Double.TYPE, [len - 1]);
var desc=Clazz.array(String, [len - 1]);
var j=0;
for (var i=0; i < len; i++) {
if (f.getParameterName$I(i).equals$O(paramName)) continue;
paramNames[j]=f.getParameterName$I(i);
paramValues[j]=f.getParameterValue$I(i);
desc[j]=f.getParameterDescription$I(i);
++j;
}
var expression=f.getExpression$S("x");
expression=expression.replace$CharSequence$CharSequence(paramName, "(" + String.valueOf$D(paramVal) + ")" );
testFunction.setParameters$SA$DA$SA(paramNames, paramValues, desc);
testFunction.setExpression$S$SA(expression, Clazz.array(String, -1, ["x"]));
return testFunction;
}, p$2);

Clazz.newMeth(C$, 'getTestFunction$org_opensourcephysics_tools_KnownFunction$ZA',  function (f, fixedParams) {
if (fixedParams == null ) return f;
var test=f;
for (var i=0; i < fixedParams.length; i++) {
if (!fixedParams[i]) continue;
var paramName=f.getParameterName$I(i);
var paramVal=f.getParameterValue$I(i);
test=p$2.getTestFunction$org_opensourcephysics_tools_KnownFunction$S$D.apply(this, [test, paramName, paramVal]);
}
return test;
}, p$2);

Clazz.newMeth(C$, 'doLinearRegression$DA$DA',  function (xd, yd) {
var n=xd.length;
this.correlation=NaN;
if (n < 3) return;
var mean_x=xd[0];
var mean_y=yd[0];
for (var i=1; i < n; i++) {
mean_x+=xd[i];
mean_y+=yd[i];
}
mean_x/=n;
mean_y/=n;
var sum_sq_x=0;
var sum_sq_y=0;
var sum_coproduct=0;
for (var i=0; i < n; i++) {
var delta_x=xd[i] - mean_x;
var delta_y=yd[i] - mean_y;
sum_sq_x+=delta_x * delta_x;
sum_sq_y+=delta_y * delta_y;
sum_coproduct+=delta_x * delta_y;
}
if (sum_sq_x == 0  || sum_sq_y == 0  ) {
this.correlation=NaN;
this.uncertainties=null;
return;
}var pop_sd_x=sum_sq_x / n;
var pop_sd_y=sum_sq_y / n;
var cov_x_y=sum_coproduct / n;
this.correlation=cov_x_y * cov_x_y / (pop_sd_x * pop_sd_y);
});

Clazz.newMeth(C$, 'setUncertainties$DAA',  function (sigmas) {
this.uncertainties=sigmas == null  ? null : sigmas[0];
this.drawer.setUncertainties$DAA(sigmas);
}, p$2);

Clazz.newMeth(C$, 'getFitFunction$org_opensourcephysics_tools_FitFunctionPanel',  function (panel) {
var f=panel.getFitFunction$();
if (f.polynomial != null ) {
f.updatePolynomial$();
return f.polynomial.clone$();
}return f.clone$();
}, p$2);

Clazz.newMeth(C$, 'replaceFit$S$S$org_opensourcephysics_tools_KnownFunction',  function (oldName, newName, newFit) {
var oldFit=this.fitMap.get$O(oldName);
if (oldFit != null ) {
if (this.localFits.contains$O(oldFit)) {
this.localFits.remove$O(oldFit);
this.localFits.add$O(newFit);
}this.refreshFitDropDown$();
}this.refreshFitMap$();
});

Clazz.newMeth(C$, 'getColorDialog$',  function () {
if (this.colorDialog == null ) {
var frame=$I$(54).getFrameForComponent$java_awt_Component(this);
var cc=Clazz.new_($I$(55,1));
cc.getSelectionModel$().addChangeListener$javax_swing_event_ChangeListener(((P$.DatasetCurveFitter$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].color=this.$finals$.cc.getColor$();
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].setColor$java_awt_Color.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'], [this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].color]);
this.$finals$.frame.repaint$();
});
})()
), Clazz.new_(P$.DatasetCurveFitter$15.$init$,[this, {cc:cc,frame:frame}])));
this.colorDialog=Clazz.new_($I$(56,1).c$$java_awt_Frame$Z,[frame, false]);
this.closeButton=Clazz.new_($I$(57,1));
this.closeButton.addActionListener$java_awt_event_ActionListener(((P$.DatasetCurveFitter$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].colorDialog.setVisible$Z(false);
});
})()
), Clazz.new_(P$.DatasetCurveFitter$16.$init$,[this, null])));
var contentPane=Clazz.new_([Clazz.new_($I$(17,1))],$I$(16,1).c$$java_awt_LayoutManager);
var buttonPanel=Clazz.new_($I$(16,1));
buttonPanel.add$java_awt_Component(this.closeButton);
var chooser=cc.getChooserPanels$()[0];
chooser.setBorder$javax_swing_border_Border($I$(14).createEmptyBorder$I$I$I$I(2, 2, 12, 2));
contentPane.add$java_awt_Component$O(chooser, "Center");
contentPane.add$java_awt_Component$O(buttonPanel, "South");
this.colorDialog.setContentPane$java_awt_Container(contentPane);
this.colorDialog.pack$();
var dim=$I$(58).getDefaultToolkit$().getScreenSize$();
var x=((dim.width - this.colorDialog.getWidth$())/2|0);
var p=this.getLocationOnScreen$();
var y=Math.max(0, p.y - this.colorDialog.getHeight$());
this.colorDialog.setLocation$I$I(x, y);
}return this.colorDialog;
});

Clazz.newMeth(C$, 'setDefaultFitFunctions$java_util_ArrayList',  function (functions) {
if (functions != null ) {
C$.defaultFits=functions;
}}, 1);

Clazz.newMeth(C$, 'getFits$java_util_Map$java_util_ArrayList',  function (fits, fitnames) {
for (var i=0; i < this.fitDropDown.getItemCount$(); i++) {
var name=this.fitDropDown.getItemAt$I(i).toString();
if (!fitnames.contains$O(name)) {
fitnames.add$O(name);
fits.put$O$O(name, this.fitMap.get$O(name));
}}
});

Clazz.newMeth(C$, 'getFitNames$',  function () {
var n=this.fitDropDown.getItemCount$();
var names=Clazz.array(String, [n]);
for (var i=0; i < n; i++) {
names[i]=this.fitDropDown.getItemAt$I(i).toString();
}
return names;
});

Clazz.newMeth(C$, 'setSelectedItem$S',  function (fitName) {
this.fitDropDown.setSelectedItem$O(fitName);
});

Clazz.newMeth(C$, 'setText$S',  function (text) {
this.eqnField.setText$S(text);
});

Clazz.newMeth(C$, 'hasFit$S',  function (name) {
return this.fitMap.containsKey$O(name);
});

Clazz.newMeth(C$, 'notifyTabRemoved$',  function () {
this.fitBuilder.removePropertyChangeListener$java_beans_PropertyChangeListener(this.fitListener);
});

Clazz.newMeth(C$, 'setFitVisible$Z',  function (vis) {
this.getDrawer$().setEnabled$Z(vis);
});

C$.$static$=function(){C$.$static$=0;
C$.isFixedDecimalFormat=false;
C$.defaultFits=Clazz.new_($I$(25,1));
C$.labelBorder=$I$(14).createEmptyBorder$I$I$I$I(0, 2, 0, 2);
{
C$.defaultFits.add$O(Clazz.new_([Clazz.array(Double.TYPE, [2])],$I$(26,1).c$$DA));
C$.defaultFits.add$O(Clazz.new_([Clazz.array(Double.TYPE, [3])],$I$(26,1).c$$DA));
C$.defaultFits.add$O(Clazz.new_([Clazz.array(Double.TYPE, [4])],$I$(26,1).c$$DA));
var f=Clazz.new_($I$(27,1).c$$S,["Gaussian"]);
f.setParameters$SA$DA$SA(Clazz.array(String, -1, ["A", "B", "C"]), Clazz.array(Double.TYPE, -1, [1, 0, 1]), Clazz.array(String, -1, [$I$(6).getString$S("Function.Parameter.PeakHeight.Description"), $I$(6).getString$S("Function.Parameter.PeakPosition.Description"), $I$(6).getString$S("Function.Parameter.GaussianRMSWidth.Description")]));
f.setExpression$S$SA("A * exp(-(x-B)^2 / (2*C^2))", Clazz.array(String, -1, ["x"]));
f.setDescription$S($I$(6).getString$S("Function.Gaussian.Description"));
C$.defaultFits.add$O(f);
f=Clazz.new_($I$(27,1).c$$S,["Exponential"]);
f.setParameters$SA$DA$SA(Clazz.array(String, -1, ["A", "B", "C"]), Clazz.array(Double.TYPE, -1, [1, -1, 0]), Clazz.array(String, -1, [$I$(6).getString$S("Function.Parameter.Magnitude.Description"), $I$(6).getString$S("Function.Parameter.ExponentialMultiplier.Description"), $I$(6).getString$S("Function.Parameter.Offset.Description")]));
f.setExpression$S$SA("A * exp(B*x) + C", Clazz.array(String, -1, ["x"]));
f.setDescription$S($I$(6).getString$S("Function.Exponential.Description"));
C$.defaultFits.add$O(f);
f=Clazz.new_($I$(27,1).c$$S,["Sinusoid"]);
f.setParameters$SA$DA$SA(Clazz.array(String, -1, ["A", "B", "C", "D"]), Clazz.array(Double.TYPE, -1, [1, 1, 0, 0]), Clazz.array(String, -1, [$I$(6).getString$S("Function.Parameter.Amplitude.Description"), $I$(6).getString$S("Function.Parameter.Omega.Description"), $I$(6).getString$S("Function.Parameter.Phase.Description"), $I$(6).getString$S("Function.Parameter.Offset.Description")]));
f.setExpression$S$SA("A * sin(B*x+C) + D", Clazz.array(String, -1, ["x"]));
f.setDescription$S($I$(6).getString$S("Function.Sinusoid.Description"));
C$.defaultFits.add$O(f);
f=Clazz.new_($I$(27,1).c$$S,["DampedSine"]);
f.setParameters$SA$DA$SA(Clazz.array(String, -1, ["A", "B", "C", "D", "E"]), Clazz.array(Double.TYPE, -1, [1, 1, 0, 0, 0]), Clazz.array(String, -1, [$I$(6).getString$S("Function.Parameter.Intercept.Description"), $I$(6).getString$S("Function.Parameter.Omega.Description"), $I$(6).getString$S("Function.Parameter.Phase.Description"), $I$(6).getString$S("Function.Parameter.Offset.Description"), $I$(6).getString$S("Function.Parameter.ExponentialMultiplier.Description")]));
f.setExpression$S$SA("A * exp(E*x) * sin(B*x + C) + D", Clazz.array(String, -1, ["x"]));
f.setDescription$S($I$(6).getString$S("Function.DampedSine.Description"));
C$.defaultFits.add$O(f);
f=Clazz.new_($I$(27,1).c$$S,["Power"]);
f.setParameters$SA$DA$SA(Clazz.array(String, -1, ["A", "B"]), Clazz.array(Double.TYPE, -1, [1, 1]), Clazz.array(String, -1, [$I$(6).getString$S("Function.Parameter.Coeff.Description"), $I$(6).getString$S("Function.Parameter.Power.Description")]));
f.setExpression$S$SA("A * x ^ B", Clazz.array(String, -1, ["x"]));
f.setDescription$S($I$(6).getString$S("Function.Power.Description"));
C$.defaultFits.add$O(f);
f=Clazz.new_($I$(27,1).c$$S,["Log"]);
f.setParameters$SA$DA$SA(Clazz.array(String, -1, ["A", "B"]), Clazz.array(Double.TYPE, -1, [1, 0]), Clazz.array(String, -1, [$I$(6).getString$S("Function.Parameter.Scale.Description"), $I$(6).getString$S("Function.Parameter.Offset.Description")]));
f.setExpression$S$SA("A * ln(x) + B", Clazz.array(String, -1, ["x"]));
f.setDescription$S($I$(6).getString$S("Function.Log.Description"));
C$.defaultFits.add$O(f);
};
};
;
(function(){/*l*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$1FitDropDownRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JLabel', 'javax.swing.ListCellRenderer', 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setOpaque$Z(true);
this.setBorder$javax_swing_border_Border(Clazz.new_($I$(40,1).c$$I$I$I$I,[1, 1, 1, 1]));
}, 1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var size;
if ((this.getText$() == null ) || (this.getText$().equals$O("")) ) {
this.setText$S(" ");
size=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
this.setText$S("");
} else {
size=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
}return size;
});

Clazz.newMeth(C$, ['getListCellRendererComponent$javax_swing_JList$S$I$Z$Z','getListCellRendererComponent$javax_swing_JList$O$I$Z$Z'],  function (list, value, index, isSelected, cellHasFocus) {
if (isSelected) {
this.setBackground$java_awt_Color(list.getSelectionBackground$());
this.setForeground$java_awt_Color(list.getSelectionForeground$());
var length=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitDropDown.getItemCount$();
if (index >= 0 && index < length ) {
var func=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].getFitFunction$S.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'], [this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitDropDown.getItemAt$I(index)]);
list.setToolTipText$S(func == null  ? null : func.getDescription$());
}} else {
this.setBackground$java_awt_Color(list.getBackground$());
this.setForeground$java_awt_Color(list.getForeground$());
}this.setFont$java_awt_Font(list.getFont$());
this.setText$S((value == null ) ? "" : $I$(38,"localize$S",[value.toString()]));
return this;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DatasetCurveFitter, "ParamTable", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JTable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_DatasetCurveFitter_ParamTableModel',  function (model) {
;C$.superclazz.c$$javax_swing_table_TableModel.apply(this,[model]);C$.$init$.apply(this);
this.setGridColor$java_awt_Color($I$(1).blue);
var header=this.getTableHeader$();
header.setForeground$java_awt_Color($I$(1).blue);
var listener=((P$.DatasetCurveFitter$ParamTable$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$ParamTable$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(2).isPopupTrigger$java_awt_event_InputEvent(e)) this.b$['org.opensourcephysics.tools.DatasetCurveFitter.ParamTable'].showPopup$java_awt_event_MouseEvent.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter.ParamTable'], [e]);
});
})()
), Clazz.new_($I$(3,1),[this, null],P$.DatasetCurveFitter$ParamTable$1));
this.addMouseListener$java_awt_event_MouseListener(listener);
header.addMouseListener$java_awt_event_MouseListener(listener);
}, 1);

Clazz.newMeth(C$, 'showPopup$java_awt_event_MouseEvent',  function (e) {
var popup=Clazz.new_($I$(4,1));
var item=Clazz.new_([$I$(6).getString$S("DatasetCurveFitter.Menuitem.CopyParameters")],$I$(5,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.DatasetCurveFitter$ParamTable$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$ParamTable$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (ev) /*block*/{
this.b$['javax.swing.JTable'].selectAll$.apply(this.b$['javax.swing.JTable'], []);
var event=Clazz.new_($I$(7,1).c$$O$I$S,[this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].paramTable, 1001, null]);
this.b$['javax.swing.JComponent'].getActionMap$.apply(this.b$['javax.swing.JComponent'], []).get$O.apply(this.b$['javax.swing.JComponent'].getActionMap$.apply(this.b$['javax.swing.JComponent'], []), ["copy"]).actionPerformed$java_awt_event_ActionEvent(event);
});
})()
), Clazz.new_(P$.DatasetCurveFitter$ParamTable$lambda1.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
popup.addSeparator$();
var scientificNotationItem=Clazz.new_($I$(8,1).c$$S,["Scientific notation"]);
scientificNotationItem.setSelected$Z(!$I$(9).isFixedDecimalFormat);
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].spinCellEditor.field.applyDefaultPattern$Z(!$I$(9).isFixedDecimalFormat);
scientificNotationItem.addActionListener$java_awt_event_ActionListener(((P$.DatasetCurveFitter$ParamTable$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$ParamTable$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (ev) /*block*/{
$I$(9).isFixedDecimalFormat=!this.$finals$.scientificNotationItem.isSelected$.apply(this.$finals$.scientificNotationItem, []);
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].spinCellEditor.field.applyDefaultPattern$Z.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].spinCellEditor.field, [!$I$(9).isFixedDecimalFormat]);
this.b$['java.awt.Component'].repaint$.apply(this.b$['java.awt.Component'], []);
});
})()
), Clazz.new_(P$.DatasetCurveFitter$ParamTable$lambda2.$init$,[this, {scientificNotationItem:scientificNotationItem}])));
popup.add$javax_swing_JMenuItem(scientificNotationItem);
$I$(10).setFonts$java_awt_Container(popup);
popup.show$java_awt_Component$I$I(e.getComponent$(), e.getX$(), e.getY$() - popup.getPreferredSize$().height);
});

Clazz.newMeth(C$, 'getCellRenderer$I$I',  function (row, column) {
if (column == 1) {
return this.getDefaultRenderer$Class(this.getColumnClass$I(column));
}return this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].cellRenderer;
});

Clazz.newMeth(C$, 'getCellEditor$I$I',  function (row, column) {
if (column == 1) {
return this.getDefaultEditor$Class(this.getColumnClass$I(column));
}if (Double.isNaN$D((this.getValueAt$I$I(row, 2)).valueOf())) return null;
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].spinCellEditor.rowNumber=row;
var timer=Clazz.new_([10, ((P$.DatasetCurveFitter$ParamTable$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$ParamTable$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) /*block*/{
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].spinCellEditor.field.selectAll$.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].spinCellEditor.field, []);
});
})()
), Clazz.new_(P$.DatasetCurveFitter$ParamTable$lambda3.$init$,[this, null]))],$I$(11,1).c$$I$java_awt_event_ActionListener);
timer.setRepeats$Z(false);
timer.start$();
return this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].spinCellEditor;
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (font) {
C$.superclazz.prototype.setFont$java_awt_Font.apply(this, [font]);
if (this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].cellRenderer != null ) {
var aFont=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].cellRenderer.labelFont;
aFont=aFont.deriveFont$F(font.getSize2D$());
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].cellRenderer.labelFont=aFont;
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].spinCellEditor.stepSizeLabel.setFont$java_awt_Font(aFont);
aFont=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].cellRenderer.fieldFont;
aFont=aFont.deriveFont$F(font.getSize2D$());
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].cellRenderer.fieldFont=aFont;
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].spinCellEditor.field.setFont$java_awt_Font(aFont);
}this.getTableHeader$().setFont$java_awt_Font(font);
this.setRowHeight$I(font.getSize$() + 4);
var model=this.getModel$();
if (Clazz.instanceOf(model, "javax.swing.table.DefaultTableModel")) {
var tm=model;
tm.fireTableDataChanged$();
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DatasetCurveFitter, "ParamTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getColumnName$I',  function (col) {
return (col == 0) ? $I$(6).getString$S("Table.Heading.Parameter") : (col == 1) ? $I$(6).getString$S("DatasetCurveFitter.Table.Heading.FixedParam") : $I$(6).getString$S("Table.Heading.Value");
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return (this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit == null ) ? 0 : this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit.getParameterCount$();
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return 3;
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (row, col) {
if (col == 0) {
return this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit.getParameterName$I(row);
} else if (col == 1) {
var fixed=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fixedParams.get$O(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit);
return Boolean.valueOf$Z(fixed == null  || fixed.length < row + 1  ? false : fixed[row]);
}if (this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].dataset == null  || (this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].autofit && this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit.getParameterCount$() > this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].dataset.getValidXPoints$().length ) ) return Double.valueOf$D(NaN);
return Double.valueOf$D(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit.getParameterValue$I(row));
});

Clazz.newMeth(C$, 'setValueAt$O$I$I',  function (value, row, col) {
if (col == 1) {
var fixed=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fixedParams.get$O(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit);
if (fixed != null  && fixed.length > row ) {
fixed[row]=(value).valueOf();
}}});

Clazz.newMeth(C$, 'isCellEditable$I$I',  function (row, col) {
return col > 0;
});

Clazz.newMeth(C$, 'getColumnClass$I',  function (c) {
switch (c) {
case 0:
return Clazz.getClass(String);
case 1:
return Clazz.getClass(Boolean);
}
return Clazz.getClass(Double);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DatasetCurveFitter, "ParamCellRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JLabel', 'javax.swing.table.TableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lightBlue=Clazz.new_($I$(1,1).c$$I$I$I,[204, 204, 255]);
this.lightGray=$I$(12).getColor$O("Panel.background");
this.fieldFont=Clazz.new_($I$(13,1)).getFont$();
this.labelFont=this.getFont$();
},1);

C$.$fields$=[['Z',['notApplicable'],'O',['lightBlue','java.awt.Color','+lightGray','fieldFont','java.awt.Font','+labelFont']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setOpaque$Z(true);
this.setBorder$javax_swing_border_Border($I$(14).createEmptyBorder$I$I$I$I(2, 1, 2, 2));
}, 1);

Clazz.newMeth(C$, 'isApplicable',  function () {
return !(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].autofit && this.notApplicable );
}, p$1);

Clazz.newMeth(C$, 'setNotApplicable$Z',  function (b) {
this.notApplicable=b;
});

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, col) {
this.setHorizontalAlignment$I(2);
this.setBorder$javax_swing_border_Border(Clazz.new_([Clazz.new_($I$(1,1).c$$I$I$I,[240, 240, 240])],$I$(15,1).c$$java_awt_Color));
var tooltip="";
if (Clazz.instanceOf(value, "java.lang.String")) {
this.setFont$java_awt_Font(this.labelFont);
this.setBackground$java_awt_Color(isSelected ? $I$(1).LIGHT_GRAY : this.lightGray);
this.setForeground$java_awt_Color($I$(1).black);
this.setText$S(value.toString());
if (col == 0) {
tooltip=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit.getParameterDescription$I(row);
}} else if (Clazz.instanceOf(value, "java.lang.Double")) {
this.setFont$java_awt_Font(this.fieldFont);
this.setBackground$java_awt_Color(!p$1.isApplicable.apply(this, []) ? $I$(1).YELLOW : isSelected ? this.lightBlue : $I$(1).white);
this.setForeground$java_awt_Color(isSelected ? $I$(1).red : table.isEnabled$() ? $I$(1).black : $I$(1).gray);
var format=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].spinCellEditor.field.getFormat$();
format.setDecimalFormatSymbols$java_text_DecimalFormatSymbols($I$(2).getDecimalFormatSymbols$());
var uncertainty=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].getUncertainty$I.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'], [row]);
var uncert=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].formatUncertainParameter$D$D$I$java_text_NumberFormat.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'], [(value).valueOf(), uncertainty, 0, format]);
if (Double.isNaN$D((value).valueOf())) {
tooltip=$I$(6).getString$S("DatasetCurveFitter.InsufficientData.ToolTip");
} else if (!this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].autofit) {
tooltip=$I$(6).getString$S("DatasetCurveFitter.SE.Name") + " " + $I$(6).getString$S("DatasetCurveFitter.SE.Autofit") ;
} else {
if (uncert != null ) {
var desc=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit.getParameterDescription$I(row);
var val=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit.getParameterName$I(row) + " = " + uncert[1] ;
tooltip=desc == null  ? val : desc + " " + val ;
} else tooltip=$I$(6).getString$S("DatasetCurveFitter.SE.Name") + " " + $I$(6).getString$S("DatasetCurveFitter.SE.Unknown") ;
}this.setText$S(p$1.isApplicable.apply(this, []) ? uncert != null  ? uncert[0] : format.format$O(value) : "     ---------------");
}this.setToolTipText$S(tooltip);
return this;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DatasetCurveFitter, "SpinCellEditor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractCellEditor', 'javax.swing.table.TableCellEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.panel=Clazz.new_([Clazz.new_($I$(17,1))],$I$(16,1).c$$java_awt_LayoutManager);
this.crawlerModel=Clazz.new_($I$(18,1).c$$D,[this, null, 1]);
this.stepSizeLabel=Clazz.new_($I$(19,1).c$$S,["10%"]);
},1);

C$.$fields$=[['I',['rowNumber'],'O',['panel','javax.swing.JPanel','crawlerModel','org.opensourcephysics.tools.DatasetCurveFitter.SpinnerNumberCrawlerModel','spinner','javax.swing.JSpinner','field','org.opensourcephysics.tools.DatasetCurveFitter.DCFNumberField','stepSizeLabel','javax.swing.JLabel']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.panel.setOpaque$Z(false);
this.spinner=Clazz.new_($I$(20,1).c$$javax_swing_SpinnerModel,[this.crawlerModel]);
this.spinner.setToolTipText$S($I$(6).getString$S("Table.Spinner.ToolTip"));
this.spinner.addChangeListener$javax_swing_event_ChangeListener(((P$.DatasetCurveFitter$SpinCellEditor$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$SpinCellEditor$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var fixed=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fixedParams.get$O(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit);
if (!fixed[this.b$['org.opensourcephysics.tools.DatasetCurveFitter.SpinCellEditor'].rowNumber]) this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].setAutoFit$Z.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'], [false]);
var val=(this.b$['org.opensourcephysics.tools.DatasetCurveFitter.SpinCellEditor'].spinner.getValue$()).doubleValue$();
this.b$['org.opensourcephysics.tools.DatasetCurveFitter.SpinCellEditor'].field.setValue$D(val);
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit.setParameterValue$I$D(this.b$['org.opensourcephysics.tools.DatasetCurveFitter.SpinCellEditor'].rowNumber, val);
if (Clazz.instanceOf(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit, "org.opensourcephysics.tools.UserFunction")) {
var f=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit;
var name=f.getName$();
var panel=this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fitBuilder.getPanel$S(name);
if (panel != null ) {
name=f.getParameterName$I(this.b$['org.opensourcephysics.tools.DatasetCurveFitter.SpinCellEditor'].rowNumber);
var seed=Clazz.new_([name, this.b$['org.opensourcephysics.tools.DatasetCurveFitter.SpinCellEditor'].field.getText$()],$I$(21,1).c$$S$S);
var it=panel.getParamEditor$().evaluateDependents$org_opensourcephysics_tools_Parameter(seed).iterator$();
while (it.hasNext$()){
var p=it.next$();
for (var i=0; i < f.getParameterCount$(); i++) {
if (f.getParameterName$I(i).equals$O(p.getName$())) {
f.setParameterValue$I$D(i, p.getValue$());
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].paramModel.fireTableCellUpdated$I$I(i, 1);
break;
}}
}
panel.getFitFunctionEditor$().parametersValid=false;
f.updateReferenceParameters$();
}}this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].drawer.functionChanged=true;
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit$org_opensourcephysics_tools_KnownFunction.apply(this.b$['org.opensourcephysics.tools.DatasetCurveFitter'], [this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit]);
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["changed", null, null]);
});
})()
), Clazz.new_(P$.DatasetCurveFitter$SpinCellEditor$1.$init$,[this, null])));
this.field=Clazz.new_($I$(22,1).c$$I,[10]);
this.field.applyDefaultPattern$Z(!$I$(9).isFixedDecimalFormat);
this.field.setBorder$javax_swing_border_Border($I$(14).createEmptyBorder$I$I$I$I(1, 1, 0, 0));
this.spinner.setBorder$javax_swing_border_Border($I$(14).createEmptyBorder$I$I$I$I(0, 1, 1, 0));
this.spinner.setEditor$javax_swing_JComponent(this.field);
this.stepSizeLabel.addMouseListener$java_awt_event_MouseListener(((P$.DatasetCurveFitter$SpinCellEditor$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$SpinCellEditor$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.MouseInputAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
var popup=Clazz.new_($I$(4,1));
var listener=((P$.DatasetCurveFitter$SpinCellEditor$2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$SpinCellEditor$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var percent=Double.parseDouble$S(e.getActionCommand$());
this.b$['org.opensourcephysics.tools.DatasetCurveFitter.SpinCellEditor'].crawlerModel.setPercentDelta$D(percent);
this.b$['org.opensourcephysics.tools.DatasetCurveFitter.SpinCellEditor'].crawlerModel.refreshDelta$();
this.b$['org.opensourcephysics.tools.DatasetCurveFitter.SpinCellEditor'].stepSizeLabel.setText$S(e.getActionCommand$() + "%");
});
})()
), Clazz.new_(P$.DatasetCurveFitter$SpinCellEditor$2$1.$init$,[this, null]));
for (var i=0; i < 3; i++) {
var val=(i == 0) ? "10" : (i == 1) ? "1.0" : "0.1";
var item=Clazz.new_($I$(5,1).c$$S,[val + "%"]);
item.setActionCommand$S(val);
item.addActionListener$java_awt_event_ActionListener(listener);
popup.add$javax_swing_JMenuItem(item);
}
popup.show$java_awt_Component$I$I(this.b$['org.opensourcephysics.tools.DatasetCurveFitter.SpinCellEditor'].stepSizeLabel, 0, this.b$['org.opensourcephysics.tools.DatasetCurveFitter.SpinCellEditor'].stepSizeLabel.getHeight$());
});
})()
), Clazz.new_($I$(23,1),[this, null],P$.DatasetCurveFitter$SpinCellEditor$2)));
this.field.addKeyListener$java_awt_event_KeyListener(((P$.DatasetCurveFitter$SpinCellEditor$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DatasetCurveFitter$SpinCellEditor$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
var comp=e.getSource$();
if (e.getKeyCode$() == 10) {
this.b$['org.opensourcephysics.tools.DatasetCurveFitter.SpinCellEditor'].spinner.setValue$O(Double.valueOf$D(this.b$['org.opensourcephysics.tools.DatasetCurveFitter.SpinCellEditor'].field.getValue$()));
comp.setBackground$java_awt_Color($I$(1).white);
this.b$['org.opensourcephysics.tools.DatasetCurveFitter.SpinCellEditor'].crawlerModel.refreshDelta$();
} else {
comp.setBackground$java_awt_Color($I$(1).yellow);
}});
})()
), Clazz.new_($I$(24,1),[this, null],P$.DatasetCurveFitter$SpinCellEditor$3)));
this.panel.add$java_awt_Component$O(this.spinner, "Center");
this.panel.add$java_awt_Component$O(this.stepSizeLabel, "East");
}, 1);

Clazz.newMeth(C$, 'getTableCellEditorComponent$javax_swing_JTable$O$Z$I$I',  function (table, value, isSelected, row, column) {
this.spinner.setValue$O(value);
this.crawlerModel.refreshDelta$();
return this.panel;
});

Clazz.newMeth(C$, 'isCellEditable$java_util_EventObject',  function (e) {
return (Clazz.instanceOf(e, "java.awt.event.MouseEvent") || Clazz.instanceOf(e, "java.awt.event.ActionEvent") );
});

Clazz.newMeth(C$, 'getCellEditorValue$',  function () {
if (this.field.getBackground$() === $I$(1).yellow ) {
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].fit.setParameterValue$I$D(this.rowNumber, this.field.getValue$());
this.b$['org.opensourcephysics.tools.DatasetCurveFitter'].drawer.functionChanged=true;
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["fit", null, null]);
this.field.setBackground$java_awt_Color($I$(1).white);
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["changed", null, null]);
}return null;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DatasetCurveFitter, "SpinnerNumberCrawlerModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractSpinnerModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.val=0;
this.percentDelta=10;
},1);

C$.$fields$=[['D',['val','delta','percentDelta']]]

Clazz.newMeth(C$, 'c$$D',  function (initialDelta) {
Clazz.super_(C$, this);
this.delta=initialDelta;
}, 1);

Clazz.newMeth(C$, 'getValue$',  function () {
return Double.valueOf$D(this.val);
});

Clazz.newMeth(C$, 'getNextValue$',  function () {
return Double.valueOf$D(this.val + this.delta);
});

Clazz.newMeth(C$, 'getPreviousValue$',  function () {
return Double.valueOf$D(this.val - this.delta);
});

Clazz.newMeth(C$, 'setValue$O',  function (value) {
if (value != null ) {
this.val=(value).doubleValue$();
this.fireStateChanged$();
}});

Clazz.newMeth(C$, 'setPercentDelta$D',  function (percent) {
this.percentDelta=percent;
});

Clazz.newMeth(C$, 'getPercentDelta$',  function () {
return this.percentDelta;
});

Clazz.newMeth(C$, 'refreshDelta$',  function () {
if (this.val != 0 ) {
this.delta=Math.abs(this.val * this.percentDelta / 100);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DatasetCurveFitter, "MinimizeMultiVarFunction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'org.opensourcephysics.numerics.MultiVarFunction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.vars=Clazz.array(Double.TYPE, [5]);
},1);

C$.$fields$=[['O',['f','org.opensourcephysics.numerics.MultiVarFunction','x','double[]','+y','+vars']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_numerics_MultiVarFunction$DA$DA',  function (f, x, y) {
;C$.$init$.apply(this);
this.f=f;
this.x=x;
this.y=y;
}, 1);

Clazz.newMeth(C$, 'evaluate$DA',  function (params) {
System.arraycopy$O$I$O$I$I(params, 0, this.vars, 1, 4);
var sum=0.0;
for (var i=0, n=this.x.length; i < n; i++) {
this.vars[0]=this.x[i];
var dev=this.y[i] - this.f.evaluate$DA(this.vars);
sum+=dev * dev;
}
return sum;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DatasetCurveFitter, "MinimizeUserFunction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'org.opensourcephysics.numerics.MultiVarFunction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['f','org.opensourcephysics.tools.UserFunction','x','double[]','+y']]]

Clazz.newMeth(C$, 'c$$org_opensourcephysics_tools_UserFunction$DA$DA',  function (f, x, y) {
;C$.$init$.apply(this);
this.f=f;
this.x=x;
this.y=y;
}, 1);

Clazz.newMeth(C$, 'evaluate$DA',  function (params) {
for (var i=0; i < params.length; i++) {
this.f.setParameterValue$I$D(i, params[i]);
}
var sum=0.0;
for (var i=0; i < this.x.length; i++) {
var dev=this.y[i] - this.f.evaluate$D(this.x[i]);
sum+=dev * dev;
}
return sum;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DatasetCurveFitter, "DCFNumberField", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.opensourcephysics.media.core.NumberField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['preferredWidth']]]

Clazz.newMeth(C$, 'c$$I',  function (columns) {
;C$.superclazz.c$$I.apply(this,[columns]);C$.$init$.apply(this);
this.applyPattern$S("0");
this.setForeground$java_awt_Color($I$(1).black);
}, 1);

Clazz.newMeth(C$, 'getValue$',  function () {
return C$.superclazz.prototype.getValue$.apply(this, []);
});

Clazz.newMeth(C$, 'setValue$D',  function (value) {
C$.superclazz.prototype.setValue$D.apply(this, [value]);
});

Clazz.newMeth(C$, 'applyPattern$S',  function (pattern) {
C$.superclazz.prototype.applyPattern$S.apply(this, [pattern]);
});

Clazz.newMeth(C$, 'applyDefaultPattern$Z',  function (sciNotation) {
if (sciNotation) this.applyPattern$S("0.000E0");
 else this.applyPattern$S("0.###");
});

Clazz.newMeth(C$, 'refreshPreferredWidth$',  function () {
var rect=this.getFont$().getStringBounds$S$java_awt_font_FontRenderContext(this.getText$(), $I$(2).frc);
this.preferredWidth=(rect.getWidth$()|0) + 8;
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var dim=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
dim.width=Math.max(dim.width, this.preferredWidth);
return dim;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:53 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
