import fs from 'fs';
import path from 'path';
import jpeg from 'jpeg-js';

function createPlaceholderJpeg(filename, width, height, primaryColor, secondaryColor, title, subtitle) {
  const frameData = Buffer.alloc(width * height * 4);
  
  const [pr, pg, pb] = primaryColor;
  const [sr, sg, sb] = secondaryColor;

  // Generate a warm rich textured gradient
  for (let y = 0; y < height; y++) {
    const t = y / height;
    for (let x = 0; x < width; x++) {
      const s = x / width;
      const i = (y * width + x) * 4;

      // Diagonal gradient with subtle vignette and border
      const isBorder = (x < 16 || x >= width - 16 || y < 16 || y >= height - 16);
      const isInnerBorder = (x >= 24 && x < 28) || (x >= width - 28 && x < width - 24) ||
                            (y >= 24 && y < 28) || (y >= height - 28 && y < height - 24);

      if (isBorder) {
        // Deep walnut border
        frameData[i] = 59;
        frameData[i + 1] = 36;
        frameData[i + 2] = 22;
        frameData[i + 3] = 255;
      } else if (isInnerBorder) {
        // Gold accent border
        frameData[i] = 201;
        frameData[i + 1] = 162;
        frameData[i + 2] = 75;
        frameData[i + 3] = 255;
      } else {
        // Warm subtle gradient with subtle crosshatch
        const blend = (t * 0.7 + s * 0.3);
        const r = Math.round(pr * (1 - blend) + sr * blend);
        const g = Math.round(pg * (1 - blend) + sg * blend);
        const b = Math.round(pb * (1 - blend) + sb * blend);

        // Center card vignette
        const dx = (x - width / 2) / (width / 2);
        const dy = (y - height / 2) / (height / 2);
        const dist = Math.min(1, Math.sqrt(dx * dx + dy * dy));
        const vignette = 1 - dist * 0.25;

        frameData[i] = Math.round(r * vignette);
        frameData[i + 1] = Math.round(g * vignette);
        frameData[i + 2] = Math.round(b * vignette);
        frameData[i + 3] = 255;
      }
    }
  }

  const rawImageData = {
    data: frameData,
    width: width,
    height: height,
  };

  const jpegImageData = jpeg.encode(rawImageData, 90);
  return jpegImageData.data;
}

const targets = [
  {
    name: 'exterior.jpg',
    w: 1200,
    h: 800,
    primary: [59, 36, 22],   // deep walnut
    secondary: [139, 90, 43], // warm teak oak
    title: "Clinic Exterior – Dosi Bhawan",
    subtitle: "Replace with real exterior photo"
  },
  {
    name: 'reception.jpg',
    w: 1200,
    h: 800,
    primary: [139, 90, 43],  // teak oak
    secondary: [201, 162, 75], // muted gold
    title: "Reception & Waiting Area",
    subtitle: "Replace with real reception photo"
  },
  {
    name: 'consultation.jpg',
    w: 1200,
    h: 800,
    primary: [59, 36, 22],   // walnut
    secondary: [122, 31, 43], // deep maroon
    title: "Consultation Chamber",
    subtitle: "Replace with real consultation photo"
  }
];

const dirs = [
  path.resolve('./src/assets'),
  path.resolve('./public/assets')
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

targets.forEach(item => {
  const buf = createPlaceholderJpeg(item.name, item.w, item.h, item.primary, item.secondary, item.title, item.subtitle);
  dirs.forEach(dir => {
    fs.writeFileSync(path.join(dir, item.name), buf);
  });
  console.log(`Generated placeholder ${item.name} in ${dirs.length} locations`);
});

