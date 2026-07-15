const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

let ffmpegPath;
try {
  const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
  ffmpegPath = ffmpegInstaller.path;
} catch (e) {
  console.error("Error: @ffmpeg-installer/ffmpeg is not installed.", e.stack);
  process.exit(1);
}

const videosDir = path.join(__dirname, '..', 'public', 'videos');
const files = fs.readdirSync(videosDir).filter(file => file.endsWith('.mp4') && !file.startsWith('compressed_'));

console.log(`Found ${files.length} video files to process in ${videosDir}`);

for (const file of files) {
  const inputPath = path.join(videosDir, file);
  const baseName = path.basename(file, '.mp4');
  
  const tempMp4Path = path.join(videosDir, `temp_${baseName}.mp4`);
  const webmPath = path.join(videosDir, `${baseName}.webm`);
  
  console.log(`\n==========================================`);
  console.log(`Processing ${file}...`);
  
  // 1. Generate optimized 720p MP4
  // -crf 30 for very high compression (perfect for background loops)
  // -vf scale='min(1280,iw)':-2 scales to max 720p height/width ratio
  try {
    const mp4Cmd = `"${ffmpegPath}" -y -i "${inputPath}" -vcodec libx264 -crf 30 -preset fast -vf "scale='min(1280,iw)':-2" -an "${tempMp4Path}"`;
    console.log(`Creating optimized MP4...`);
    execSync(mp4Cmd, { stdio: 'inherit' });
  } catch (err) {
    console.error(`Error creating MP4 for ${file}:`, err.message);
  }

  // 2. Generate optimized 720p WebM using VP9
  // -crf 38 and -b:v 0 is standard for quality-based VP9 encoding
  try {
    const webmCmd = `"${ffmpegPath}" -y -i "${inputPath}" -vcodec libvpx-vp9 -crf 38 -b:v 0 -preset fast -vf "scale='min(1280,iw)':-2" -an "${webmPath}"`;
    console.log(`Creating optimized WebM...`);
    execSync(webmCmd, { stdio: 'inherit' });
  } catch (err) {
    console.error(`Error creating WebM for ${file}:`, err.message);
  }

  // Replace original MP4 with temp
  if (fs.existsSync(tempMp4Path)) {
    fs.unlinkSync(inputPath);
    fs.renameSync(tempMp4Path, inputPath);
    console.log(`Replaced original ${file} with optimized version.`);
  }
}

console.log("\nAll video conversions completed!");
