export type Country = {
  id: number;
  country: string;
  countrycode: string;
  expiring: number;
  nl7: number;
  tvids: number;
  tseries: number;
  tmovs: number;
};

export type UnogsErrorResponse = {
  response: {
    data: { message: string };
  };
};

type SearchResponseResult = {
  id: number;
  title: string;
  img: string;
  vtype: string;
  nfid: number;
  synopsis: string;
  avgrating: number;
  year: number;
  runtime: number;
  imdbid: string;
  poster: string;
  imdbrating: number;
  top250: number;
  top250tv: number;
  clist: string;
  titledate: string;
};

export type SearchResponse = {
  results?: SearchResponseResult[];
  total?: 19;
  elapse?: 0.5096;
};

interface TransformedSearchResponseResult extends SearchResponseResult {
  countries: { [key in string]: string };
}

export interface TransformedSearchResponse extends SearchResponse {
  results: TransformedSearchResponseResult[];
}
