# Generates public/og-image.jpg (1200x630) — the social share card.
# A clean branded card (cream + periwinkle + teal, name + title), no photo — avoids
# awkward photo crops and matches the site. GDI+ (System.Drawing); no native deps.
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$outPath = Join-Path $root 'public\og-card.jpg'
$W = 1200; $H = 630

$bmp = New-Object System.Drawing.Bitmap($W, $H)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Flat design to match the site (2026-10-08): cream card, periwinkle band like
# the menu, last name in bluish teal, sunshine pill for the address.
$rect = New-Object System.Drawing.Rectangle 0, 0, $W, $H
$g.FillRectangle((New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(251, 246, 238))), $rect)   # #FBF6EE
$g.FillRectangle((New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(102, 112, 196))), 0, 0, 36, $H)   # #6670C4 band

$ink   = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(46, 34, 64))     # #2E2240
$teal  = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(35, 153, 176))   # #2399B0
$soft  = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(79, 69, 96))     # #4F4560
$sun   = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(242, 201, 76))   # #F2C94C

# name (stacked, italic serif): Amanda J. / Richer, Richer in teal
$nameFont = New-Object System.Drawing.Font('Georgia', 100, [System.Drawing.FontStyle]::Italic, [System.Drawing.GraphicsUnit]::Pixel)
$g.DrawString('Amanda J.', $nameFont, $ink, 96, 130)
$g.DrawString('Richer', $nameFont, $teal, 96, 235)

# subtitle (matches the site heading)
$subFont = New-Object System.Drawing.Font('Georgia', 30, [System.Drawing.FontStyle]::Italic, [System.Drawing.GraphicsUnit]::Pixel)
$dot = [char]0x00B7
$g.DrawString("Displacement Consultant $dot Human Rights Advocate $dot Artist", $subFont, $soft, 102, 380)

# address in a sunshine pill
$urlFont = New-Object System.Drawing.Font('Consolas', 22, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$pill = New-Object System.Drawing.Drawing2D.GraphicsPath
$px = 102; $py = 488; $pw = 268; $ph = 54; $d = $ph
$pill.AddArc($px, $py, $d, $d, 90, 180); $pill.AddArc($px + $pw - $d, $py, $d, $d, 270, 180); $pill.CloseFigure()
$g.FillPath($sun, $pill)
$g.DrawString('amandaricher.com', $urlFont, $ink, 122, 501)

# save JPEG q90
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$ep = New-Object System.Drawing.Imaging.EncoderParameters 1
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, [long]90)
$bmp.Save($outPath, $codec, $ep)

$g.Dispose(); $bmp.Dispose()
Write-Output "Wrote $outPath"
