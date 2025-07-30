# Set the base directory to the current directory (you can change this)
$baseDirectory = Get-Location

# Recursively find all .mp4 files
Get-ChildItem -Path $baseDirectory -Recurse -Filter *.mp4 | ForEach-Object {
    $inputFile = $_.FullName
    $outputFile = [System.IO.Path]::ChangeExtension($inputFile, ".webm")
    
    # First pass
    ffmpeg -y -i "$inputFile" -c:v libvpx-vp9 -b:v 2M -pass 1 -an -f null NUL

    # Second pass
    ffmpeg -y -i "$inputFile" -c:v libvpx-vp9 -b:v 2M -pass 2 "$outputFile"

    # Clean up pass log files
    Remove-Item "ffmpeg2pass-0.log" -ErrorAction SilentlyContinue
    Remove-Item "ffmpeg2pass-0.log.mbtree" -ErrorAction SilentlyContinue
}
