import React from "react";
import axios from "axios";

export default function Weather(props) {
    function handleResponse(response) {
         alert (`The Weather in ${response.data.name} is ${Math.round(response.data.main.temp)}°F.`);
    }
    let apiKey = "1743d71cea491649f0bd96f06af46d71";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return <h2>Hello from Weather</h2>
}