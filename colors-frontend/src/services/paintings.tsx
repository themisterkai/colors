import axios from 'axios';
import { PaintingsResponse } from '../types/paintings';
const baseUrl = '/api/paintings';

const getPainting = async (id: string): Promise<PaintingsResponse> => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export default { getPainting };
