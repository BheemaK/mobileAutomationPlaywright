import exp from "constants";
import { expect } from "@playwright/test";


import axios, { AxiosResponse } from 'axios';
const apiUrlnew = 'https://enow-bff-webapp-dev.azurewebsites.net/service-point?bffSessionId=58308D4C-BDBA-41E2-A0B1-CD896F18321C';
(async () => {
    try {
        
        const desiredStatusCode=200; 
        const headers = {
            'Content-Type': 'application/json',
        };
        const response = await axios.get(apiUrlnew, { headers }).then((response: AxiosResponse) => {
            console.log('Response Data:', response.data);
            console.log(response.status);
         
        })
       
} catch (error) {
    console.error('Error making API request:', error);
}
})();
