export interface Role{
  character: string;
  characterId?: string;
}

export interface MovieImage {
  height: number;
  widht: number;
  id: number;
  url: string;
}

export interface Movie {
  id: number;
  image: MovieImage;
  title: string;
  description: string;
  actors: string;
  rating: number;
}
