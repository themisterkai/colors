import ColorThief from 'colorthief';
import fetch from 'node-fetch';
import sharp from 'sharp';

const downloadImage = async (imageUrl: string): Promise<Buffer> => {
  try {
    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status}`);
    }

    const imageBuffer = await response.buffer();

    const img = await sharp(imageBuffer).toBuffer();
    return img;
  } catch (err) {
    console.log('****ERROR in downloadImage:', err);
    throw err;
  }
};

export const getPalette = async (imageUrl: string) => {
  const img = await downloadImage(imageUrl);
  try {
    const palette = await ColorThief.getPalette(img, 5);
    console.log('PALETTE: ', palette);
    return palette;
  } catch (err) {
    console.log('****ERROR in getPalette:', err);
    throw err;
  }
};
