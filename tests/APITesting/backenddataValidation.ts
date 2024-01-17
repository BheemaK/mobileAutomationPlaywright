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
        const nmiPayload = testData.inputData.nmi;
        const outDataUsage = responseData.currentUsage.billCostPerYear;
        const totalVal = responseData.totals.billSavingsPerYear;
        const billSavingPerYear = responseData.serviceEstimates[0].energySavingsPercent;
        console.log(outDataUsage);
        console.log(totalVal);
        console.log(billSavingPerYear);
        console.log(nmiPayload);
        const response = await axios.post(apiUrlnew,nmiPayload);
        console.log('Axios Response:');
        console.log('Status:', response.status);
        console.log('Data', response.data);
        console.log(responseData.nmi);
} catch (error) {
    console.error('Error making API request:', error);
}
})();
