import exp from "constants";
import { expect } from "@playwright/test";

import axios, { AxiosResponse } from 'axios';
const apiUrlnew = 'https://enow-bff-webapp-dev.azurewebsites.net/electrification-assessment';
(async () => {
    try {
        
        const desiredStatusCode=200; 
        const headers = {
            'Content-Type': 'application/json'
        };
        const jsonPayload = {
            "bffSessionId": "343D2759-2FB6-4DC5-9344-00C0DB3A1F61",
            "electrifyOptions": {
            "solarOption": {
                "isSelected": true,
                "eligibleForRebate": false
              },
              "batteryOption": {
              "isSelected": true,
              "eligibleForRebate": false
              },
              "inductionCooktopOption": {
              "isSelected": true,
              "currentCooktopType": "ELECTRIC",
              "currentCooktopSize": 4,
              "currentUsageMinutesPerDay": 60,
              "newCooktopSize": 4
            },
              "electricVehicleOption": {
              "isSelected": true,
              "currentVehicleType": "SUV",
              "currentVehicleUsage": 250,
              "currentVehicleFuelType": "PETROL"
            },
              "heatPumpOption": {
              "isSelected": true,
              "currentHotWaterSystemType": "Electric Storage Continuous",
              "numberOfPerson": 4,
              "eligibleForRebate": true
            }
          },
            "motivations": [
            {
              "type": "Reduce energy bill"
            },
            {
              "type": "Reduce carbon footprint"
            }
          ]
         };
        const response = await axios.post(apiUrlnew, jsonPayload, { headers }).then((response: AxiosResponse) => {
            expect(response.status).toBe(200);
            console.log(response.status);
            console.log(response.data);
            const respServicePoint = response.data.servicePoint;
            console.log("All connection values:");
            console.log(respServicePoint);
            console.log(respServicePoint.nmi);
            console.log(respServicePoint.address);

            const respYearly = response.data.totals.yearly;
            console.log("Totals: All Values");
            console.log(response.data.totals.system);
            console.log(response.data.totals.installationCost);
            console.log(response.data.totals.governmentSubsidy);
            console.log(response.data.totals.paybackPeriodYears);
            console.log(respYearly[0].billSavings);
            console.log(respYearly[0].carbonSavingsKgCo2);

            const respDataServiceEstimates = response.data.serviceEstimates;
            const listObject = response.data.serviceEstimates;
            const lenlistObject = listObject.length;
            console.log("serviceEstimates values");
            for (let i=0; i <  lenlistObject; i++) {
                console.log(listObject[i].service);
                console.log(listObject[i].tag);
                console.log(listObject[i].totals.system);
                console.log(listObject[i].totals.installationCost);
                console.log(listObject[i].totals.governmentSubsidy);
                console.log(listObject[i].totals.paybackPeriodYears);
                console.log(listObject[i].totals.yearly);
                const valYearlyLen = listObject[i].totals.yearly.length;
                const yearVal = listObject[i].totals.yearly;
                for (let j=0; j < valYearlyLen; j++) {
                    console.log(yearVal[j].billSavings);
                    console.log(yearVal[j].remainingPayback);
                    console.log(yearVal[j].carbonSavingsKgCo2);

                }
                

            }
        

        })
       
} catch (error) {
    console.error('Error making API request:', error);
}
})();
