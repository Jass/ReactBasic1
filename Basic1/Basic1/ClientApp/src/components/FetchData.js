﻿import React, { useState } from 'react';



function renderForecastsTable(forecasts) {
    return (
        <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

async function populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
   
    setForecasts(data);
    setLoading(true);
}



function FetchDataNew() {
    const [forecasts, setForecasts] = useState('');
    const [loading, setLoading] = useState(false);

    let contents =loading
            ? <p><em>Loading...</em></p>
        : renderForecastsTable(forecasts);

    return (
        <div onLoad={populateWeatherData()}>
                <h1 id="tabelLabel" >Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    
}

export default FetchDataNew