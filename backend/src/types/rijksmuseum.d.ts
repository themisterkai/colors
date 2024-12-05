export interface RijksmuseumCollectionResponse {
  artObject: RijksmuseumArtObject;
}

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
