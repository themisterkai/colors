export interface RijksmuseumArtObject {
  id: string;
  title: string;
  webImage: {
    url: string;
  };
  description: string;
  plaqueDescriptionEnglish: string;
  principalMaker: string;
  dating: {
    presentingDate: string;
  };
  longTitle: string;
  subTitle: string;
}

export interface PaintingsResponse {
  artObject: RijksmuseumArtObject;
  palette: Array<string>;
}
