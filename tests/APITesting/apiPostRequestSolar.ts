import exp from "constants";
import axios from 'axios';

const apiUrlnew = 'https://api.getpostman.com/mocks';
(async () => {
    try {
        
        const desiredStatusCode=200; 
        const testData = JSON.parse(JSON.stringify(require('../../testData/testData2.json')));
        const responseData = JSON.parse(JSON.stringify(require('../../testData/responsePayload.json')));
        console.log(responseData.connection.nmi);
        console.log(testData);     
        const nmiPayload = testData.inputDataSolarPV.nmi;
        const billSaving = testData.solarOnly.billSaving;
        console.log(nmiPayload);
        console.log(billSaving);
        const response = await axios.post(apiUrlnew,nmiPayload);
        console.log('Axios Response:');
        console.log('Status:', response.status);
        console.log('Data', response.data);
        console.log(responseData.nmi);
} catch (error) {
    console.error('Error making API request:', error);
}
})();
