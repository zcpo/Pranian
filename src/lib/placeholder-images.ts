import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  url: string;
  hint: string;
};

// This is a bit of a hack to deal with the fact that the AI is trained on a slightly different format
const mapData = (item: any) => ({
  id: item.id,
  description: item.description,
  imageUrl: item.imageUrl || item.url,
  imageHint: item.imageHint || item.hint,
});


export const PlaceHolderImages = data.placeholderImages.map(mapData);
