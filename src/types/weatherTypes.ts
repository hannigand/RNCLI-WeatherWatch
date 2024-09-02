export interface WeatherData {
    date: string;
    temperature: number;
    weatherCode: WeatherCode;
  }
  
  export interface WeatherResponse {
    current_weather: {
      temperature: number;
      weather_code: WeatherCode;
    };
    daily: {
      time: string[];
      temperature_2m_max: number[];
      weather_code: WeatherCode[];
    };
  }

  export type WeatherItem = {
    date: string;
    temperature: number;
    description: string;
    // add other fields as necessary
  };
  
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
  