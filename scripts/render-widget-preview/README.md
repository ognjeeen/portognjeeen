# Widget preview export

`public/projects/widget-native-4x.png` is a 1560 by 1160 lossless PNG rendered from the actual WPF view in [codex-usage-widget](https://github.com/ognjeeen/codex-usage-widget), commit `fdfe6f2740b113ecacea465a0ae7df845d552410`.

The renderer loads the view and its resources without starting the application, connecting to Codex, or reading account data. It supplies example quota values and renders at 384 DPI. The WPF shadow is omitted to avoid rasterizing the text into an intermediate bitmap; the portfolio supplies a CSS shadow.

On Windows with .NET 10.0.302 and a checkout of that repository:

```powershell
$widgetSource = (Resolve-Path ../codex-usage-widget).Path
dotnet run --project scripts/render-widget-preview/RenderWidgetPreview.csproj -c Release "-p:WidgetSource=$widgetSource" -- $widgetSource public/projects/widget-native-4x.png
```

Use an absolute path for `WidgetSource` if the source checkout is elsewhere. The portfolio serves the PNG directly with `unoptimized` and displays it at up to 390 CSS pixels wide. The previous desktop crop and its CSS enlargement are no longer used for this preview.
