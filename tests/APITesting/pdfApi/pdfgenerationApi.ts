import exp from "constants";
import { expect } from "@playwright/test";

import axios, { AxiosResponse } from 'axios';
const apiUrlnew = 'https://enow-bff-webapp-dev.azurewebsites.net/PDFTron';
const apiUrlnewNeg = 'https://enow-bff-webapp-dev.azurewebsites.net/PDFTr';
(async () => {
    try {
        
        const desiredStatusCode=200; 
        const headers = {
            'Content-Type': 'application/json',
        };
        var startTime = new Date().getTime();
        console.log(startTime);
        const response = await axios.get(apiUrlnew, { headers }).then((response: AxiosResponse) => {
            console.log('Response Data:', response.data);
            var endTime = new Date().getTime();
            var delayTime = Math.round((endTime - startTime)/1000);
            console.log(delayTime);
            console.log(endTime);
            expect(response.status).toBe(200);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            })
       
} catch (error) {
    console.error('Error making API request:', error);
}

})();
