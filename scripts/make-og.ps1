# Generates public/og-image.jpg (1200x630) using GDI+ (System.Drawing).
# Fallback for when the native `sharp` module is blocked by Application Control.
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$srcPath = Join-Path $root 'public\photos\son-cat.jpg'
$outPath = Join-Path $root 'public\og-image.jpg'

$W = 1200; $H = 630
$src = [System.Drawing.Image]::FromFile($srcPath)

$canvas = New-Object System.Drawing.Bitmap($W, $H)
$g = [System.Drawing.Graphics]::FromImage($canvas)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# cover-crop the source to 1200x630, aligned to the top (position: north)
$targetAspect = $W / $H
$sw = $src.Width; $sh = $src.Height
$srcAspect = $sw / $sh
if ($srcAspect -gt $targetAspect) {
  $cropH = $sh; $cropW = [int]($sh * $targetAspect); $srcX = [int](($sw - $cropW) / 2); $srcY = 0
} else {
  $cropW = $sw; $cropH = [int]($sw / $targetAspect); $srcX = 0; $srcY = 0
}
$destRect = New-Object System.Drawing.Rectangle 0, 0, $W, $H
$g.DrawImage($src, $destRect, $srcX, $srcY, $cropW, $cropH, [System.Drawing.GraphicsUnit]::Pixel)

# navy gradient over the full height: transparent up top, ramping to near-opaque
# navy at the bottom. Full-height + a ColorBlend avoids the hard seam you get from
# starting the rect partway down the image.
$gradRect = New-Object System.Drawing.Rectangle 0, 0, $W, $H
$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($gradRect, ([System.Drawing.Color]::FromArgb(0,8,12,20)), ([System.Drawing.Color]::FromArgb(245,8,12,20)), 90)
$blend = New-Object System.Drawing.Drawing2D.ColorBlend 3
$blend.Colors = @(
  [System.Drawing.Color]::FromArgb(0, 8, 12, 20),
  [System.Drawing.Color]::FromArgb(0, 8, 12, 20),
  [System.Drawing.Color]::FromArgb(245, 8, 12, 20)
)
$blend.Positions = @(0.0, 0.45, 1.0)
$brush.InterpolationColors = $blend
$g.FillRectangle($brush, $gradRect)

# name + tagline
$cream = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(236, 239, 244))
$gold  = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(220, 180, 92))
$nameFont = New-Object System.Drawing.Font('Georgia', 76, [System.Drawing.FontStyle]::Italic, [System.Drawing.GraphicsUnit]::Pixel)
$tagFont  = New-Object System.Drawing.Font('Georgia', 27, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$g.DrawString('Amanda Richer', $nameFont, $cream, 60, 420)
$g.DrawString('Displacement consultant ' + [char]0x00B7 + ' Writer ' + [char]0x00B7 + ' Visual artist', $tagFont, $gold, 64, 512)

# save as JPEG q86
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$ep = New-Object System.Drawing.Imaging.EncoderParameters 1
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, [long]86)
$canvas.Save($outPath, $codec, $ep)

$g.Dispose(); $canvas.Dispose(); $src.Dispose()
Write-Output "Wrote $outPath"
