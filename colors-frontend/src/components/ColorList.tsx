import { useEffect, useState } from 'react';
import paintingsService from '../services/paintings';
import { RijksmuseumArtObject } from '../types/paintings';

const ColorList = () => {
  const [colors, setColors] = useState<string[]>([]);
  const [artObject, setArtObject] = useState<RijksmuseumArtObject | null>(null);
  const [error, setError] = useState<string | null>(null);
  const id = 'SK-A-2344';

  useEffect(() => {
    paintingsService.getPainting(id).then(painting => {
      setColors(painting.palette);
      setArtObject(painting.artObject);
    });
  }, []);

  return (
    <div>
      <h1>Color Palette</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {artObject && artObject.webImage.url && (
        <img
          src={artObject.webImage.url}
          alt={artObject.title}
          style={{ maxHeight: '500px', width: 'auto', marginBottom: '20px' }}
        />
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: color,
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
