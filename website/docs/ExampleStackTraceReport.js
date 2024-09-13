function exampleStackTrace() { return String.raw`PixiEditor 1.2.1.3 Dev Build x64 crashed on 2023.12.14 at 13:02:31 +01:00
Application started 2023.12.14 13:01:22, 0 00:01.09 ago
Report: 66da08a9-c289-4d13-a827-55f977296eca

-----System Information----
General:
  OS: Microsoft Windows NT 10.0.22621.0
  Has Stylus Tablet Device: True
  Has Touch Tablet Device: False

CPU:
  Name: Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz
  Speed: 4.32 GHz
  Max Speed: 3.19 GHz

GPU:
  Name: NVIDIA GeForce RTX 3060 Ti
  Driver: 31.0.15.4629

Memory:
  Available: 16.29  GB
  Total: 34.29  GB

--------Command Log--------

PixiEditor.Debug.Crash | CanExecute: True | -0.003s ago | 2023-12-14T13:02:31.7073672+01:00
PixiEditor.Window.OpenSettingsWindow | CanExecute: True | -23.808s ago | 2023-12-14T13:02:07.9026012+01:00
PixiEditor.Layer.DeleteSelected | CanExecute: True | -27.676s ago | 2023-12-14T13:02:04.0339727+01:00
PixiEditor.Layer.NewLayer | CanExecute: True | -29.887s ago | 2023-12-14T13:02:01.8231102+01:00
PixiEditor.Layer.NewLayer | CanExecute: True | -32.313s ago | 2023-12-14T13:01:59.3976302+01:00
PixiEditor.Tools.SelectTool | CanExecute: True | -34.746s ago | 2023-12-14T13:01:56.9638483+01:00
PixiEditor.Document.ResizeDocument | CanExecute: True | -43.577s ago | 2023-12-14T13:01:48.1332801+01:00
PixiEditor.Tools.SelectTool | CanExecute: True | -45.835s ago | 2023-12-14T13:01:45.8750633+01:00

-----------State-----------
Environment:
  Thread Count: 45

Culture:
  Selected language: "system"
  Current Culture: de-DE
  Current UI Culture: en-US

Preferences:
  Has shared toolbar enabled: False
  Right click mode: Erase
  Has Rich presence enabled: True
  Debug Mode enabled: True

UI:
  MainWindow not null: True
  MainWindow Size: 2560,1392
  MainWindow State: Maximized

ViewModels:
  Has active updateable change: False
  Current Tool: "Pen"
  Primary Color: #ffa11717
  Secondary Color: #ff79b63f

Active Document:
  Size: (70; 70)
  Layer Count: 2
  Has all changes saved: False
  Horizontal Symmetry Enabled: False
  Horizontal Symmetry Value: 32
  Vertical Symmetry Enabled: False
  Vertical Symmetry Value: 32
  Updateable Change Active: False
  Transform: Not active

-------Crash message-------
System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation.

-----Inner exception-----
System.InvalidOperationException: User requested to crash :c

-------Stack trace-------
   at System.Reflection.MethodInvoker.Invoke(Object obj, IntPtr* args, BindingFlags invokeAttr)
   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)
   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)
   at PixiEditor.Models.Commands.CommandController.<>c__DisplayClass38_3\`2.<LoadCommands>b__5(Object x) in D:\a\1\s\src\PixiEditor\Models\Commands\CommandController.cs:line 304
   at PixiEditor.Models.Commands.CommandMethods.Execute(Object parameter) in D:\a\1\s\src\PixiEditor\Models\Commands\CommandMethods.cs:line 31
   at PixiEditor.Models.Commands.Commands.Command.Execute() in D:\a\1\s\src\PixiEditor\Models\Commands\Commands\Command.cs:line 64
   at PixiEditor.Models.Commands.XAML.Command.ProvidedICommand.Execute(Object parameter) in D:\a\1\s\src\PixiEditor\Models\Commands\XAML\Command.cs:line 76
   at System.Windows.Controls.MenuItem.InvokeClickAfterRender(Object arg)
   at System.Windows.Threading.ExceptionWrapper.InternalRealCall(Delegate callback, Object args, Int32 numArgs)
   at System.Windows.Threading.ExceptionWrapper.TryCatchWhen(Object source, Delegate callback, Object args, Int32 numArgs, Delegate catchHandler)
   at System.Windows.Threading.DispatcherOperation.InvokeImpl()
   at MS.Internal.CulturePreservingExecutionContext.CallbackWrapper(Object obj)
   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
--- End of stack trace from previous location ---
   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
   at MS.Internal.CulturePreservingExecutionContext.Run(CulturePreservingExecutionContext executionContext, ContextCallback callback, Object state)
   at System.Windows.Threading.DispatcherOperation.Invoke()
   at System.Windows.Threading.Dispatcher.ProcessQueue()
   at System.Windows.Threading.Dispatcher.WndProcHook(IntPtr hwnd, Int32 msg, IntPtr wParam, IntPtr lParam, Boolean& handled)
   at MS.Win32.HwndWrapper.WndProc(IntPtr hwnd, Int32 msg, IntPtr wParam, IntPtr lParam, Boolean& handled)
   at MS.Win32.HwndSubclass.DispatcherCallbackOperation(Object o)
   at System.Windows.Threading.ExceptionWrapper.InternalRealCall(Delegate callback, Object args, Int32 numArgs)
   at System.Windows.Threading.ExceptionWrapper.TryCatchWhen(Object source, Delegate callback, Object args, Int32 numArgs, Delegate catchHandler)
   at System.Windows.Threading.Dispatcher.LegacyInvokeImpl(DispatcherPriority priority, TimeSpan timeout, Delegate method, Object args, Int32 numArgs)
   at MS.Win32.HwndSubclass.SubclassWndProc(IntPtr hwnd, Int32 msg, IntPtr wParam, IntPtr lParam)
   at MS.Win32.UnsafeNativeMethods.DispatchMessage(MSG& msg)
   at System.Windows.Threading.Dispatcher.PushFrameImpl(DispatcherFrame frame)
   at System.Windows.Application.RunDispatcher(Object ignore)
   at System.Windows.Application.RunInternal(Window window)
   at PixiEditor.App.Main()
-----Inner exception-----
   at PixiEditor.ViewModels.SubViewModels.Main.DebugViewModel.Crash() in D:\a\1\s\src\PixiEditor\ViewModels\SubViewModels\Main\DebugViewModel.cs:line 229
   at System.RuntimeMethodHandle.InvokeMethod(Object target, Void** arguments, Signature sig, Boolean isConstructor)
   at System.Reflection.MethodInvoker.Invoke(Object obj, IntPtr* args, BindingFlags invokeAttr)
`}

export default exampleStackTrace;