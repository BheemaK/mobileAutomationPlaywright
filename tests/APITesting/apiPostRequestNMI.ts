import exp from "constants";
import axios from 'axios';

const apiUrlnew = 'https://api.getpostman.com/mocks';
(async () => {
    try {
              
        const desiredStatusCode=200; 
        const testData = JSON.parse(JSON.stringify(require('../../testData/nmiData.json')));
        const nmiPayload = testData.inputDataSolarPV.nmi;
        const billSaving = testData.solarOnly.billSaving;
        console.log(nmiPayload);
        console.log(billSaving);
        const response = await axios.post(apiUrlnew,nmiPayload);
        console.log('Axios Response:');
        console.log('Status:', response.status);
        console.log('Data', response.data);
       
} catch (error) {
    console.error('Error making API request:', error);
}
})();
