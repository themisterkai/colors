import { Router } from 'express';
import axios from 'axios';

import { RIJKSMUSEUM_KEY } from '../utils/config';
import { RijksmuseumCollectionResponse } from '../types/rijksmuseum';

const RIJKS_URL = 'https://www.rijksmuseum.nl/api/en';

const paintingsRouter = Router();

export const getCollection = async (
  id: string
): Promise<RijksmuseumCollectionResponse> => {
  const url = `${RIJKS_URL}/collection/${id}?key=${RIJKSMUSEUM_KEY}`;

  const paintingsResponse = (
    await axios.get<RijksmuseumCollectionResponse>(url)
  ).data;

  if (paintingsResponse.artObject == null) {
    throw new Error('Error fetching collection: art object not found');
  }
  return paintingsResponse;
};

export default paintingsRouter;
