declare module 'colorthief' {
  export default class ColorThief {
    static getColor(
      image: string | HTMLImageElement | Buffer
    ): Promise<[number, number, number]>;
    static getPalette(
      image: string | HTMLImageElement | Buffer,
      colorCount?: number
    ): Promise<Array<[number, number, number]>>;
  }
}
