import React, { useState } from 'react';
import { useEffect } from 'react';
import DrawTableForecast from './/DrawTableForecast'



async function populateWeatherData() {
   return  await fetch('weatherforecast').then(response => response.json())
        .then(response => { return response });
}


function FetchDataNew() {
    
    useEffect(() => {

        populateWeatherData().then(data => { setForecasts(data);  });//console.log(data);
         
        setLoading(false);
        
    }, []);

   

    const [forecasts, setForecasts] = useState('');
    const [loading, setLoading] = useState(false);
   //  console.log(forecasts);

    let contents = loading
        ? <p><em>Loading...</em></p>
        : <DrawTableForecast forecasts={forecasts} />
    

    return (
        <div>
                <h1 id="tabelLabel" >Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    
}

export default FetchDataNew