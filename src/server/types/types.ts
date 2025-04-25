export interface WorldHeritageSite {
  unique_number: number;
  id_no: number;
  [key: `name_${string}`]: string;
  [key: `short_description_${string}`]: string;
  [key: `justification_${string}`]: string;
  [key: `states_name_${string}`]: string;
  category: string;
  region_en: string;
  criteria_txt: string;
  latitude: number;
  longitude: number;
  danger: number;
  transboundary: number;
}

export interface LocalizedSite {
  unique_number: number;
  id_no: number;
  name: string;
  short_description: string;
  justification: string;
  country: string;
  category: string;
  region: string;
  criteria_txt: string;
  latitude: number;
  longitude: number;
  danger: number;
}