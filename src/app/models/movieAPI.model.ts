export interface MovieAPI {
  Title: string,
  Year : string,
  imdbID : string,
  Type : string,
  Poster : string
}
export interface Movie {
  Search : MovieAPI[],
  totalResults : string,
  Response : string

}

export interface IUniqueMovie {
  Actors: string,
  Awards: string,
  BoxOffice: string,
  Country: string,
  DVD: string,
  Director: string,
  Genre: string,
  Language: string,
  Metascore: string,
  Plot: string,
  Poster: string,
  Production: string,
  Rated: string,
  Ratings: IRating[],
  Released: string,
  Response: string,
  Runtime: string,
  Title: string,
  Type: string,
  Website: string,
  Writer: string,
  Year: string,
  imdbID: string,
  imdbRating: string,
  imdbVotes: string,

}

export interface IRating {
  Source: string,
  Value: string,
}
