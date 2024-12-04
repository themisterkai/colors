import { useEffect, useState } from 'react';

type RGBColor = [number, number, number];

const ColorList = () => {
  const [colors, setColors] = useState<RGBColor[]>([
    [179, 151, 32],
    [217, 207, 74],
    [72, 92, 21],
    [125, 68, 8],
    [160, 160, 137],
  ]);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   return;
  // }, []);

  const rgbToHex = (rgb: RGBColor): string => {
    const toHex = (value: number) => value.toString(16).padStart(2, '0');
    return `#${toHex(rgb[0])}${toHex(rgb[1])}${toHex(rgb[2])}`;
  };

  return (
    <div>
      <h1>Color Palette</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: rgbToHex(color),
              margin: '5px',
              border: '1px solid #ccc',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorList;
