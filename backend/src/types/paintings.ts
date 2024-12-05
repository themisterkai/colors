import { RijksmuseumArtObject } from './rijksmuseum';

export interface PaintingsResponse {
  artObject: RijksmuseumArtObject;
  palette: Array<string>;
}
