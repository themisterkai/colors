import { Router, Response } from 'express';
import { getCollection } from '../services/paintingsService';
import { getPalette } from '../utils/colorThief';
import { PaintingsResponse } from '../types/paintings';

const paintingsRouter = Router();

paintingsRouter.get(
  '/:id',
  async (request, response: Response<PaintingsResponse>) => {
    const collection = await getCollection(request.params.id);
    const palette = await getPalette(collection.artObject.webImage.url);
    const paintingsResponse: PaintingsResponse = {
      artObject: collection.artObject,
      palette,
    };

    response.json(paintingsResponse);
  }
);

paintingsRouter.get('/', async (request, response) => {
  response.send('<h1>Hello!</h1>');
});

export default paintingsRouter;
