import exp from "constants";
import axios from 'axios';
const apiUrlnew = 'https://api.getpostman.com/mocks';
(async () => {
    try {
        const desiredStatusCode=200; 
        const testData = JSON.parse(JSON.stringify(require('../../../testData/Input_NMI_1_isSolarPV_False_isBattery_True_hasSolar_True.json')));
        const responseData = JSON.parse(JSON.stringify(require('../../../testData/Output1_NMI_1_isSolarPV_False_isBattery_True_hasSolar_True.json')));
        console.log(responseData.connection.nmi);
        console.log(testData);
        console.log(responseData.totals);
        const nmiPayload = testData.nmi;    
        const response = await axios.post(apiUrlnew,nmiPayload);
        console.log('Axios Response:');
        console.log('Status:', response.status);
        console.log('Data', response.data);      
        console.log(responseData.nmi);
} catch (error) {
    console.error('Error making API request:', error);
}
})();
