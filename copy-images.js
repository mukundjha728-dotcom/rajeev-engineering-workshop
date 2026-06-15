const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\mukun\\.gemini\\antigravity-ide\\brain\\6ba1b140-a149-472a-966c-be96e734e9ba';
const destDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = [
  { name: 'hero_bg_1781501285498.png', newName: 'hero_bg.png' },
  { name: 'main_gate_1781501298521.png', newName: 'main_gate.png' },
  { name: 'rolling_shutter_1781501311111.png', newName: 'rolling_shutter.png' },
  { name: 'staircase_railing_1781501321800.png', newName: 'staircase_railing.png' },
  { name: 'window_grill_1781501345900.png', newName: 'window_grill.png' },
  { name: 'featured_laser_cut_1781501359951.png', newName: 'featured_laser_cut.png' },
  { name: 'welding_action_1781501372881.png', newName: 'welding_action.png' }
];

files.forEach(file => {
  const srcPath = path.join(srcDir, file.name);
  const destPath = path.join(destDir, file.newName);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file.name} to ${file.newName}`);
  } else {
    console.log(`File not found: ${srcPath}`);
  }
});
