# Check if ffmpeg is available
if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
    Write-Error "Error: ffmpeg is not installed. Please install ffmpeg and try again."
    exit 1
}

# Default settings
$preset = "veryslow"
$include_audio = $true

# Process command-line options
while ($args.Count -gt 0 -and $args[0].StartsWith("-")) {
    switch ($args[0]) {
        "-fast" {
            $preset = "ultrafast"
            $args = $args[1..($args.Count - 1)]
        }
        "-noaudio" {
            $include_audio = $false
            $args = $args[1..($args.Count - 1)]
        }
        default {
            Write-Host "Unknown option: $($args[0])"
            Write-Host "Usage: .\ConvertVideo.ps1 [-fast] [-noaudio] input_file"
            exit 1
        }
    }
}

# Ensure exactly one argument remains (the input file)
if ($args.Count -ne 1) {
    Write-Host "Usage: .\ConvertVideo.ps1 [-fast] [-noaudio] input_file"
    exit 1
}

$input_file = $args[0]

# Determine file paths and names
$input_dir = Split-Path $input_file -Parent
$filename = Split-Path $input_file -Leaf
$filename_no_ext = [System.IO.Path]::GetFileNameWithoutExtension($filename)
# Build the output directory path: three levels up from input_dir then public\videos\<filename_no_ext>
$output_dir = Join-Path $input_dir "..\..\..\public\videos\$filename_no_ext"

# Create the output directory (if it doesn't exist)
New-Item -ItemType Directory -Force -Path $output_dir | Out-Null
# Get the full resolved path for the output directory
$output_dir = (Resolve-Path $output_dir).Path

# Build the ffmpeg argument list based on whether audio is included
if ($include_audio) {
    $ffmpegArgs = @(
        "-i", $input_file,
        "-map", "0:v:0", "-map", "0:a:0",
        "-map", "0:v:0", "-map", "0:a:0",
        "-map", "0:v:0", "-map", "0:a:0",
        "-c:v", "libx264", "-crf", "22", "-c:a", "aac", "-ar", "44100",
        "-filter:v:0", "scale=w=-1:h=360", "-maxrate:v:0", "400k", "-b:a:0", "200k",
        "-filter:v:1", "scale=w=-1:h=720", "-maxrate:v:1", "1500k", "-b:a:1", "1000k",
        "-filter:v:2", "scale=w=-1:h=1080", "-maxrate:v:2", "3000k", "-b:a:2", "2000k",
        "-var_stream_map", "v:0,a:0,name:mini v:1,a:1,name:mid v:2,a:2,name:high",
        "-preset", $preset, "-hls_list_size", "0", "-threads", "0", "-f", "hls",
        "-hls_flags", "independent_segments",
        "-master_pl_name", "../$filename_no_ext.m3u8",
        "-y", "$output_dir/%v.m3u8"
    )
}
else {
    $ffmpegArgs = @(
        "-i", $input_file,
        "-map", "0:v:0",
        "-map", "0:v:0",
        "-map", "0:v:0",
        "-c:v", "libx264", "-crf", "22",
        "-filter:v:0", "scale=w=iw/3:h=ih/3", "-maxrate:v:0", "400k",
        "-filter:v:1", "scale=w=iw/1.5:h=ih/1.5", "-maxrate:v:1", "1500k",
        "-filter:v:2", "scale=w=iw:h=ih", "-maxrate:v:2", "3000k",
        "-var_stream_map", "v:0,name:mini v:1,name:mid v:2,name:high",
        "-an",
        "-preset", $preset, "-hls_list_size", "0", "-threads", "0", "-f", "hls",
        "-hls_flags", "independent_segments",
        "-master_pl_name", "$filename_no_ext.m3u8",
        "-y", "$output_dir/%v.m3u8"
    )
}

# Execute ffmpeg with the specified arguments
& ffmpeg @ffmpegArgs
