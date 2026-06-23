import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = './public';
const EXCLUDE_FILES = ['company_logo.png', 'Steering-Wheel-Loader.png'];
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.JPG', '.JPEG', '.webp'];

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

function analyze() {
  const allFiles = getFilesRecursively(PUBLIC_DIR);
  const images = [];
  
  allFiles.forEach((file) => {
    const ext = path.extname(file).toLowerCase();
    if (IMAGE_EXTENSIONS.includes(ext)) {
      const baseName = path.basename(file);
      if (EXCLUDE_FILES.includes(baseName)) {
        return;
      }
      images.push({
        path: file,
        size: fs.statSync(file).size,
        ext,
      });
    }
  });

  // Group by base path to see pairings
  const grouped = {};
  images.forEach((img) => {
    const parsed = path.parse(img.path);
    // Remove the extension to find the original base name
    const rawName = parsed.name.endsWith('.JPG') || parsed.name.endsWith('.jpg') || parsed.name.endsWith('.png') || parsed.name.endsWith('.jpeg')
      ? parsed.name.slice(0, parsed.name.lastIndexOf('.'))
      : parsed.name;
    const groupKey = path.join(parsed.dir, rawName);
    
    if (!grouped[groupKey]) {
      grouped[groupKey] = [];
    }
    grouped[groupKey].push(img);
  });

  console.log('--- IMAGE AUDIT SUMMARY ---');
  let totalBytes = 0;
  let totalWebpBytes = 0;
  const missingWebp = [];
  const largeImages = [];

  Object.entries(grouped).forEach(([key, list]) => {
    const hasWebp = list.some(img => img.ext === '.webp');
    const nonWebp = list.filter(img => img.ext !== '.webp');
    
    nonWebp.forEach(img => {
      totalBytes += img.size;
      if (img.size > 500 * 1024) { // > 500 KB
        largeImages.push(img);
      }
      if (!hasWebp) {
        missingWebp.push(img);
      }
    });

    const webp = list.find(img => img.ext === '.webp');
    if (webp) {
      totalWebpBytes += webp.size;
    }
  });

  console.log(`Total Non-WebP Image Size: ${(totalBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total WebP Image Size: ${(totalWebpBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Number of Non-WebP images: ${images.filter(i => i.ext !== '.webp').length}`);
  console.log(`Number of WebP images: ${images.filter(i => i.ext === '.webp').length}`);
  console.log(`Images missing WebP version: ${missingWebp.length}`);
  
  if (missingWebp.length > 0) {
    console.log('\nMissing WebP images:');
    missingWebp.forEach(img => {
      console.log(`- ${img.path} (${(img.size / 1024).toFixed(1)} KB)`);
    });
  }

  if (largeImages.length > 0) {
    console.log('\nLarge images (>500KB):');
    largeImages.forEach(img => {
      console.log(`- ${img.path} (${(img.size / 1024 / 1024).toFixed(2)} MB)`);
    });
  }
}

analyze();
