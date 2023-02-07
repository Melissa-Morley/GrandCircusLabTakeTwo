import { useEffect, useState } from "react";
import { Weather } from "../models/Weather";
import { GetWeatherData } from "../services/WeatherService";

export function WeatherForecast() {
    const [weather, setWeather] = useState<Weather>();
    
    //if you only want this to run once, add [] as the second element. Second element is optional
    useEffect(() => {
        GetWeatherData().then(data => setWeather(data));
    }, []);

    //the [weather] dependency means that whenever weather changes, this will run
    useEffect(() => {
        console.log(weather);
    }, [weather])

    let periods = weather?.properties.periods;

    let displayPeriods = periods?.map((period) => 
    <ul>
        <li>{period.name}</li>
        <li>{period.icon}</li>
        <li>{period.detailedForecast}</li>
        <li>{period.temperature}{period.temperatureUnit}</li>
    </ul>)

    return(
        <div className = "WeatherForecast">
            {weather !== undefined && <>{displayPeriods}</>}
        </div>
    )
}