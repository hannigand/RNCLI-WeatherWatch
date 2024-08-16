export type WeatherCode =
  | '0'
  | '1'
  | '2'
  | '3'
  | '45'
  | '48'
  | '51'
  | '53'
  | '55'
  | '56'
  | '57'
  | '61'
  | '63'
  | '65'
  | '66'
  | '67'
  | '71'
  | '73'
  | '75'
  | '77'
  | '80'
  | '81'
  | '82'
  | '85'
  | '86'
  | '95'
  | '96'
  | '99';
export type IWeatherReportCardProps = {
  temp: number;
  time: string; // ISO 8601 date string
  weather_code: number;
};
export type IReportCardProps = {
  weatherData: weatherDataProps[];
  title: string;
  isHourly?: boolean;
};
export type weatherDataProps = {
  temp: number;
  time: string; // ISO 8601 date string
  weather_code: number;
};
export type ICardsProps = {
  time: string;
  city: string;
  temp: string;
  weather_code: WeatherCode;
};
export type ICoordinatesProps = {latitude?: number; longitude?: number};
export type ISelectedCityProps = {
  country?: string;
  country_code?: string;
  country_id?: number;
  elevation?: number;
  feature_code?: string;
  id?: number;
  latitude?: number;
  longitude?: number;
  name: string;
  population?: number;
  timezone?: string;
  admin2?: string;
  admin1?: string;
};
export type ISearchBoxProps = {
    searchInputValue: string;
    selectedArea: ISelectedCityProps[];
    handleAreaSearch: (value: string) => void;
    handleSelectedSearch: (value: ISelectedCityProps) => void;
  };