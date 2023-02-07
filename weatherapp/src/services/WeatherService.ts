import { Weather } from "../models/Weather";
import axios from "axios";

export function GetWeatherData() : Promise <Weather> {
   return axios.get<Weather>("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
   .then(response => response.data);
};