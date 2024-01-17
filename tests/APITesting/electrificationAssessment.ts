import exp from "constants";
import { expect } from "@playwright/test";

import axios, { AxiosResponse } from 'axios';
const apiUrlnew = 'https://enow-bff-webapp-dev.azurewebsites.net/electrification-assessment';
const apiUrlnewNeg = 'https://enow-bff-webapp-dev.azurewebsites.net/electrification-assessmen';
(async () => {
    try {
        
        const desiredStatusCode=200; 
        const headers = {
            'Content-Type': 'application/json'
        };
        const response = await axios.get(apiUrlnew, { headers }).then((response: AxiosResponse) => {
            console.log('Response Data:', response.data);
            expect(response.status).toBe(200);
            const respData = response.data.serviceEstimates;
            const listObject = response.data.serviceEstimates;
            const lenlistObject = listObject.length;
            console.log(lenlistObject);
            console.log(respData);
            for (const item of respData) {
                console.log(item.system);
            }
            for (let i=0; i < lenlistObject; i++) {
                const item = listObject[i];
                console.log(item.system);
            }
        })
        const responseNeg = await axios.get(apiUrlnewNeg, { headers }).then((responseNeg: AxiosResponse) => {
            expect(responseNeg.status).toBe(404);
        })
} catch (error) {
    console.error('Error making API request:', error);
}
})();
