# Build the Windows installer.  Usage (PowerShell):  .\desktop\build-windows.ps1 [-Version 1.0.0]
# Needs: Python 3 with PyInstaller (pip install pyinstaller) and Inno Setup 6 (iscc on PATH).
param([string]$Version = $(if ($env:APP_VERSION) { $env:APP_VERSION } else { "1.0.0" }))
$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..")
$env:APP_VERSION = $Version

python -m PyInstaller desktop\ielts.spec --noconfirm --clean --distpath dist --workpath build
if ($LASTEXITCODE -ne 0) { throw "PyInstaller failed" }

iscc "/DAppVersion=$Version" desktop\windows-installer.iss
if ($LASTEXITCODE -ne 0) { throw "Inno Setup failed" }
Write-Host "Built dist\IELTS-Practice-Setup-$Version.exe"
