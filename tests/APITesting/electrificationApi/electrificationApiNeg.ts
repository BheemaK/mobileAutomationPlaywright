import exp from "constants";
import { expect } from "@playwright/test";

import axios, { AxiosResponse } from 'axios';
const apiUrlnewNeg = 'https://enow-bff-webapp-dev.azurewebsites.net/electrification-assessmen';
(async () => {
    try {
        
        const headers = {
            'Content-Type': 'application/json'
        };
        const responseNeg = await axios.get(apiUrlnewNeg, { headers }).then((responseNeg: AxiosResponse) => {
            expect(responseNeg.status).toBe(404);
        })
} catch (error) {
    console.error('Error making API request:', error);
}
})();
