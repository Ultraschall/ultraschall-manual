Write-Host "**********************************************************************"
Write-Host "*                                                                    *"
Write-Host "*                       ULTRASCHALL MANUAL                           *"
Write-Host "*                                                                    *"
Write-Host "**********************************************************************"

$ULTRASCHALL_BUILD_FAILED = $False

$ULTRASCHALL_BUILD_DIRECTORY = "./build"
$ULTRASCHALL_SCRIPTS_DIRECTORY = "./scripts"
$ULTRASCHALL_DOCS_DIRECTORY = "./docs"

$ULTRASCHALL_BUILD_BOOTSTRAP = $False
$ULTRASCHALL_BUILD_CLEAN = $False

if ($ULTRASCHALL_BUILD_CLEAN -eq $True) {
  Write-Host "Cleaning Ultraschall manual files..."
  if ((Test-Path -PathType Container $ULTRASCHALL_BUILD_DIRECTORY) -eq $False) {
    Remove-Item -Recurse -Force $ULTRASCHALL_BUILD_DIRECTORY
  }
  Write-Host "Done."
}

if ((Test-Path -PathType Container $ULTRASCHALL_BUILD_DIRECTORY) -eq $False) {
  New-Item -ItemType Directory -Path $ULTRASCHALL_BUILD_DIRECTORY | Out-Null
}

if($ULTRASCHALL_BUILD_FAILED -eq $False) {
  Write-Host "Building Ultraschall documentation files..."
  & pandoc --from=markdown --to=html --standalone --quiet --self-contained --css=$ULTRASCHALL_SCRIPTS_DIRECTORY/ultraschall.css --output=$ULTRASCHALL_BUILD_DIRECTORY/ultraschall-manual.htm $ULTRASCHALL_DOCS_DIRECTORY/outline.md
  if ($LASTEXITCODE -ne 0) {
    $BuildFailed = $True
  }
  Write-Host "Done."
}
