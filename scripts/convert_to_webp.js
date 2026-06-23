import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = './public';
const EXCLUDE_FILES = ['company_logo.png', 'Steering-Wheel-Loader.png'];
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.JPG', '.JPEG'];

function getFilesRecursively(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath));
    } else {
      results.push(filePath);
    }
  });
  return results;
}

async function convertImageToWebp(filePath) {
  const ext = path.extname(filePath);
  const dir = path.dirname(filePath);
  const name = path.basename(filePath, ext);
  
  // Standard webp destination path: name.webp
  // Note: if the file was name.JPG, the output is name.webp
  const webpPath = path.join(dir, `${name}.webp`);

  // Check if it already exists
  if (fs.existsSync(webpPath)) {
    return { status: 'exists', path: webpPath };
  }

  try {
    const info = await sharp(filePath)
      .webp({ quality: 85, effort: 6 })
      .toFile(webpPath);
    
    console.log(`Converted: ${filePath} -> ${webpPath} (${(info.size / 1024).toFixed(1)} KB)`);
    return { status: 'converted', path: webpPath, size: info.size };
  } catch (err) {
    console.error(`Error converting ${filePath}:`, err.message);
    return { status: 'error', path: filePath, error: err.message };
  }
}

async function main() {
  console.log('Scanning public directory for images...');
  const allFiles = getFilesRecursively(PUBLIC_DIR);
  
  const imagesToConvert = [];
  allFiles.forEach((file) => {
    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file);
    
    if (IMAGE_EXTENSIONS.includes(path.extname(file)) && !EXCLUDE_FILES.includes(baseName)) {
      imagesToConvert.push(file);
    }
  });

  console.log(`Found ${imagesToConvert.length} original images. Checking for WebP counterparts...`);
  
  let convertedCount = 0;
  let existsCount = 0;
  let errorCount = 0;

  for (const img of imagesToConvert) {
    const res = await convertImageToWebp(img);
    if (res.status === 'converted') {
      convertedCount++;
    } else if (res.status === 'exists') {
      existsCount++;
    } else {
      errorCount++;
    }
  }

  console.log('\n--- CONVERSION REPORT ---');
  console.log(`Already existed: ${existsCount}`);
  console.log(`Newly converted: ${convertedCount}`);
  console.log(`Errors encountered: ${errorCount}`);
}

main().catch(console.error);
