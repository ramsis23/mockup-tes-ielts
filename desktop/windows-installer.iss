; Inno Setup script for the Windows installer.
; Build after PyInstaller:  iscc /DAppVersion=1.0.0 desktop\windows-installer.iss
#ifndef AppVersion
  #define AppVersion "1.0.0"
#endif
#define AppName "IELTS Practice"

[Setup]
AppId={{6C4B1E8A-2F5D-4B8E-9C3A-1E7D2A9F4B61}
AppName={#AppName}
AppVersion={#AppVersion}
AppPublisher=ramsis23
AppPublisherURL=https://github.com/ramsis23/mockup-tes-ielts
DefaultDirName={autopf}\{#AppName}
DefaultGroupName={#AppName}
PrivilegesRequired=lowest
PrivilegesRequiredOverridesAllowed=dialog
OutputDir=..\dist
OutputBaseFilename=IELTS-Practice-Setup-{#AppVersion}
Compression=lzma2
SolidCompression=yes
WizardStyle=modern
UninstallDisplayIcon={app}\{#AppName}.exe

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"

[Files]
Source: "..\dist\{#AppName}\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs

[Icons]
Name: "{group}\{#AppName}"; Filename: "{app}\{#AppName}.exe"
Name: "{group}\Uninstall {#AppName}"; Filename: "{uninstallexe}"
Name: "{autodesktop}\{#AppName}"; Filename: "{app}\{#AppName}.exe"; Tasks: desktopicon

[Run]
Filename: "{app}\{#AppName}.exe"; Description: "{cm:LaunchProgram,{#AppName}}"; Flags: nowait postinstall skipifsilent
