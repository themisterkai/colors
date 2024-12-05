import ColorThief from 'colorthief';
import axios from 'axios';
import sharp from 'sharp';

type RGBColor = [number, number, number];

const downloadImage = async (imageUrl: string): Promise<Buffer> => {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

    if (response.status !== 200) {
      throw new Error(`Failed to fetch image: ${response.status}`);
    }

    const imageBuffer = Buffer.from(response.data);
    const img = await sharp(imageBuffer).toBuffer();
    return img;
  } catch (err) {
    throw err;
  }
};

const rgbToHex = (rgb: RGBColor): string => {
  const toHex = (value: number) => value.toString(16).padStart(2, '0');
  return `#${toHex(rgb[0])}${toHex(rgb[1])}${toHex(rgb[2])}`;
};

const getPalette = async (imageUrl: string) => {
  const img = await downloadImage(imageUrl);
  try {
    const palette = await ColorThief.getPalette(img, 5);
    return palette.map((rgb: RGBColor) => rgbToHex(rgb));
  } catch (err) {
    throw err;
  }
};

export { getPalette };
