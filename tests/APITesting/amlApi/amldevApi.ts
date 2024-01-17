import exp from "constants";
import { expect } from "@playwright/test";

import axios, { AxiosResponse } from 'axios';
const apiUrlnew = 'https://aml-dev-enow-rtybl.australiaeast.inference.ml.azure.com/score?data=[[1, 2, 3, 4, 6, 5, 7, 8, 9, 0]]';
(async () => {
    try {
        
        const desiredStatusCode=200; 
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer c3gpX1qAEUbs8e5hV8cT7mcNQf4OEl7Z'
        };
        const response = await axios.get(apiUrlnew, { headers }).then((response: AxiosResponse) => {
        console.log('Response Data:', response.data);
        //  expect(response.status).toBe(200);
        // const respData = response.data.serviceEstimates;
        // const listObject = response.data.serviceEstimates;
        // const lenlistObject = listObject.length;
        // console.log(lenlistObject);
        // console.log(respData);
        // for (const item of respData) {
        //   console.log(item.system);
        // }
        // for (let i=0; i < lenlistObject; i++) {
        //   const item = listObject[i];
        // console.log(item.system);
        // }
        })
       
} catch (error) {
    console.error('Error making API request:', error);
}
})();
