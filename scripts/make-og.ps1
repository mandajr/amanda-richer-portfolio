# Generates public/og-image.jpg (1200x630) — the social share card.
# A clean branded card (navy + brass gold, name + title), no photo — avoids
# awkward photo crops and matches the site. GDI+ (System.Drawing); no native deps.
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$outPath = Join-Path $root 'public\og-card.jpg'
$W = 1200; $H = 630

$bmp = New-Object System.Drawing.Bitmap($W, $H)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# background: diagonal navy gradient
$rect = New-Object System.Drawing.Rectangle 0, 0, $W, $H
$navy1 = [System.Drawing.Color]::FromArgb(8, 12, 20)     # #080C14
$navy2 = [System.Drawing.Color]::FromArgb(20, 28, 42)    # #141C2A
$bg = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $navy1, $navy2, 55)
$g.FillRectangle($bg, $rect)

$gold  = [System.Drawing.Color]::FromArgb(220, 180, 92)
$cream = [System.Drawing.Color]::FromArgb(236, 239, 244)
$soft  = [System.Drawing.Color]::FromArgb(183, 192, 208)
$goldBrush  = New-Object System.Drawing.SolidBrush $gold
$creamBrush = New-Object System.Drawing.SolidBrush $cream
$softBrush  = New-Object System.Drawing.SolidBrush $soft

# short gold rule
$goldPen = New-Object System.Drawing.Pen $gold, 3
$g.DrawLine($goldPen, 74, 182, 136, 182)

# name (stacked, italic serif) — Amanda / Richer, Richer in gold
$nameFont = New-Object System.Drawing.Font('Georgia', 92, [System.Drawing.FontStyle]::Italic, [System.Drawing.GraphicsUnit]::Pixel)
$g.DrawString('Amanda', $nameFont, $creamBrush, 66, 205)
$g.DrawString('Richer', $nameFont, $goldBrush, 66, 300)

# subtitle
$subFont = New-Object System.Drawing.Font('Georgia', 29, [System.Drawing.FontStyle]::Italic, [System.Drawing.GraphicsUnit]::Pixel)
$dot = [char]0x00B7
$g.DrawString("Displacement Consultant $dot Human Rights & Community Health", $subFont, $softBrush, 72, 430)

# url
$urlFont = New-Object System.Drawing.Font('Consolas', 19, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$g.DrawString('amanda-richer-portfolio-git.pages.dev', $urlFont, $goldBrush, 74, 545)

# save JPEG q90
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$ep = New-Object System.Drawing.Imaging.EncoderParameters 1
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, [long]90)
$bmp.Save($outPath, $codec, $ep)

$g.Dispose(); $bmp.Dispose()
Write-Output "Wrote $outPath"
