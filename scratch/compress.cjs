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
const files = fs.readdirSync(videosDir).filter(file => file.endsWith('.mp4'));

console.log(`Found ${files.length} video files to compress in ${videosDir}`);

for (const file of files) {
  const inputPath = path.join(videosDir, file);
  const outputPath = path.join(videosDir, `compressed_${file}`);
  
  console.log(`Compressing ${file}...`);
  const startTime = Date.now();
  
  try {
    // -crf 28 reduces size significantly with good visual quality for web background videos
    // -preset fast finishes reasonably quickly
    // -vf scale='min(1920,iw)':-2 scales down 4k/large videos to max 1080p
    const cmd = `"${ffmpegPath}" -y -i "${inputPath}" -vcodec libx264 -crf 28 -preset fast -vf "scale='min(1920,iw)':-2" -an "${outputPath}"`;
    console.log(`Running: ${cmd}`);
    execSync(cmd, { stdio: 'inherit' });
    
    // Check sizes
    const oldSize = fs.statSync(inputPath).size;
    const newSize = fs.statSync(outputPath).size;
    const savingPercent = ((oldSize - newSize) / oldSize * 100).toFixed(1);
    
    console.log(`Success! Saved ${savingPercent}% (${(oldSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024 / 1024).toFixed(2)}MB) in ${((Date.now() - startTime) / 1000).toFixed(1)}s`);
    
    // Replace original
    fs.unlinkSync(inputPath);
    fs.renameSync(outputPath, inputPath);
  } catch (err) {
    console.error(`Error compressing ${file}:`, err.message);
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }
  }
}

console.log("All video compressions finished!");
