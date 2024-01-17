import exp from "constants";
import { expect } from "@playwright/test";

import axios, { AxiosResponse } from 'axios';
const apiUrlnewNeg = 'https://enow-bff-webapp-dev.azurewebsites.net/PDFTr';
(async () => {
    try {
        
        const desiredStatusCode=200; 
        const headers = {
            'Content-Type': 'application/json',
        };
        var startTime = new Date().getTime();
        console.log(startTime);
        const response = await axios.get(apiUrlnewNeg, { headers }).then((response: AxiosResponse) => {
            console.log('Response Data:', response.data);
            expect(response.status).toBe(404);
            console.log(response.status);
            console.log(response.statusText);
            })
       
} catch (error) {
    console.error('Error making API request:', error);
}

})();
