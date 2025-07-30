#!/bin/bash

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "Error: ffmpeg is not installed. Please install ffmpeg and try again."
  exit 1
fi

preset="veryslow"
include_audio=true

while [[ "$1" == -* ]]; do
  case "$1" in
    -fast)
      preset="ultrafast"
      shift
      ;;
    -noaudio)
      include_audio=false
      shift
      ;;
    *)
      echo "Unknown option: $1"
      echo "Usage: $0 [-fast] [-noaudio] input_file"
      exit 1
      ;;
  esac
done

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 [-fast] [-noaudio] input_file"
  exit 1
fi

input_file="$1"

input_dir=$(dirname "$input_file")
filename=$(basename -- "$input_file")
filename_no_ext="${filename%.*}"
output_dir="${input_dir}/../../../public/videos/${filename_no_ext}"

mkdir -p "$output_dir"

output_dir=$(realpath $output_dir)

if $include_audio; then
  ffmpeg -i "$input_file" \
    -map 0:v:0 -map 0:a:0 \
    -map 0:v:0 -map 0:a:0 \
    -map 0:v:0 -map 0:a:0 \
    -c:v libx264 -crf 22 -c:a aac -ar 44100 \
    -filter:v:0 "scale=w=-1:h=360" -maxrate:v:0 400k -b:a:0 200k \
    -filter:v:1 "scale=w=-1:h=720" -maxrate:v:1 1500k -b:a:1 1000k \
    -filter:v:2 "scale=w=-1:h=1080" -maxrate:v:2 3000k -b:a:2 2000k \
    -var_stream_map "v:0,a:0,name:mini v:1,a:1,name:mid v:2,a:2,name:high" \
    -preset "$preset" -hls_list_size 0 -threads 0 -f hls \
    -hls_flags independent_segments \
    -master_pl_name "../${filename_no_ext}.m3u8" \
    -y "$output_dir/%v.m3u8"
else
  ffmpeg -i "$input_file" \
    -map 0:v:0 \
    -map 0:v:0 \
    -map 0:v:0 \
    -c:v libx264 -crf 22 \
    -filter:v:0 "scale=w=iw/3:h=ih/3" -maxrate:v:0 400k \
    -filter:v:1 "scale=w=iw/1.5:h=ih/1.5" -maxrate:v:1 1500k \
    -filter:v:2 "scale=w=iw:h=ih" -maxrate:v:2 3000k \
    -var_stream_map "v:0,name:mini v:1,name:mid v:2,name:high" \
    -an \
    -preset "$preset" -hls_list_size 0 -threads 0 -f hls \
    -hls_flags independent_segments \
    -master_pl_name "${filename_no_ext}.m3u8" \
    -y "$output_dir/%v.m3u8"
fi
