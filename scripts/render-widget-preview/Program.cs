using System.IO;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Xml.Linq;
using CodexUsageWidget.Domain;
using CodexUsageWidget.Views.ViewModels;

internal static class Program
{
    [STAThread]
    private static void Main(string[] args)
    {
        var source = args[0];
        var output = args[1];
        var app = new Application();
        app.Resources["UiFont"] = new FontFamily("Segoe UI Variable Text, Segoe UI");
        app.Resources["BooleanToVisibilityConverter"] = new BooleanToVisibilityConverter();
        app.Resources.MergedDictionaries.Add(new ResourceDictionary
        {
            Source = new Uri("/CodexUsageWidget;component/Views/Resources/WidgetTheme.xaml", UriKind.Relative)
        });

        // Load the real view without window events, services, or account access.
        var document = XDocument.Load(Path.Combine(source, "src/CodexUsageWidget/Views/MainWindow.xaml"));
        var root = document.Root!;
        XNamespace ui = "http://schemas.microsoft.com/winfx/2006/xaml/presentation";
        root.Name = ui + "Grid";
        foreach (var attribute in root.Attributes().Where(a => !a.IsNamespaceDeclaration).ToList())
            attribute.Remove();
        foreach (var attribute in root.Descendants().Attributes().Where(a => a.Value.Contains("_On")).ToList())
            attribute.Remove();
        // WPF effects rasterize the entire subtree. Add the shadow in CSS instead.
        foreach (var effect in root.Descendants(ui + "Border.Effect").ToList())
            effect.Remove();

        var xaml = document.ToString()
            .Replace("clr-namespace:CodexUsageWidget.Views.Controls", "clr-namespace:CodexUsageWidget.Views.Controls;assembly=CodexUsageWidget")
            .Replace("clr-namespace:CodexUsageWidget.Views.Localization", "clr-namespace:CodexUsageWidget.Views.Localization;assembly=CodexUsageWidget");
        var view = (FrameworkElement)XamlReader.Parse(xaml);
        var now = new DateTimeOffset(2026, 9, 12, 10, 30, 0, TimeSpan.Zero);
        var windows = new[]
        {
            new UsageWindow("5h limit", 20, 300, now.AddHours(2)),
            new UsageWindow("Weekly limit", 85, 10080, now.AddDays(2))
        };
        var bucket = new UsageLimitBucket("codex", "Codex", true, windows, null, null, null, null);
        var snapshot = new UsageSnapshot(new UsageRateLimits([bucket], "pro", null), null, now);
        view.DataContext = UsageWidgetViewModel.FromSnapshot(snapshot, windows[0]);
        view.Width = 390;
        view.Height = 290;
        view.Measure(new Size(390, 290));
        view.Arrange(new Rect(0, 0, 390, 290));
        view.UpdateLayout();

        const int scale = 4;
        var bitmap = new RenderTargetBitmap(390 * scale, 290 * scale, 96 * scale, 96 * scale, PixelFormats.Pbgra32);
        bitmap.Render(view);
        var encoder = new PngBitmapEncoder();
        encoder.Frames.Add(BitmapFrame.Create(bitmap));
        using var stream = File.Create(output);
        encoder.Save(stream);
        Console.WriteLine($"Rendered {bitmap.PixelWidth}x{bitmap.PixelHeight} PNG from the widget's WPF view.");
        app.Shutdown();
    }
}
