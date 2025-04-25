interface ICardSite {
  id: number;
  uniqueNumber: number;
  name: string;
  description: string;
  justification: string;
  danger: boolean;
  category: string;
  country: string;
  region: string;
  transboundary: boolean;
  lon: number | string;
  lat: number | string;
}