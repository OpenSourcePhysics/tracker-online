(function(){var P$=Clazz.newPackage("org.opensourcephysics.controls"),p$1={},p$2={},I$=[[0,'org.opensourcephysics.tools.FontSizer','org.opensourcephysics.controls.ConsoleLevel','StringBuffer','org.opensourcephysics.controls.OSPLog','java.io.StringWriter','java.io.PrintWriter','java.util.logging.LogRecord','org.opensourcephysics.display.OSPRuntime','java.util.logging.Level','java.awt.Color','java.util.ArrayList','org.opensourcephysics.controls.MessageFrame','javax.swing.JFrame','javax.swing.SwingUtilities','java.awt.Toolkit','java.awt.EventQueue','java.io.BufferedWriter','java.io.FileWriter','javax.swing.JOptionPane','org.opensourcephysics.controls.ControlsRes','org.opensourcephysics.controls.XML','javax.swing.JPanel','java.awt.BorderLayout','java.awt.Dimension','org.opensourcephysics.display.GUIUtils','javax.swing.JScrollPane','javax.swing.text.StyleContext','javax.swing.text.StyleConstants','java.awt.event.MouseAdapter','java.util.logging.Logger',['org.opensourcephysics.controls.OSPLog','.OSPLogHandler'],['org.opensourcephysics.controls.OSPLog','.ConsoleFormatter'],'java.util.logging.FileHandler','java.util.logging.XMLFormatter','javax.swing.JPopupMenu','javax.swing.JMenu','javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem','javax.swing.AbstractAction','javax.swing.JMenuBar','javax.swing.JCheckBoxMenuItem','javax.swing.JFileChooser','java.io.File','java.io.BufferedReader','java.io.FileReader',['org.opensourcephysics.controls.OSPLog','.OSPFrame'],['org.opensourcephysics.controls.OSPLog','.LoggerOutputStream'],['org.opensourcephysics.controls.OSPLog','.LoggerPrintStream'],'org.opensourcephysics.controls.XMLControlElement']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OSPLogFormatter", null, 'java.util.logging.Formatter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.control=Clazz.new_($I$(49,1));
},1);

C$.$fields$=[['O',['control','org.opensourcephysics.controls.XMLControl']]]

Clazz.newMeth(C$, 'format$java_util_logging_LogRecord',  function (record) {
this.control.saveObject$O(record);
return this.control.toXML$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v7');//Created 2026-09-28 15:01:50 Java2ScriptVisitor version 5.0.1-v7 net.sf.j2s.core.jar version 5.0.1-v7
