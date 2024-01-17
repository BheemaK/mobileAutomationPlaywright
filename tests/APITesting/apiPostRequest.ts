const axios = require('axios');
const { chromium } = require('playwright');
const apiUrl = 'https://api.getpostman.com/mocks';
(async () => {
    try {
        const postPayload = {
            "mock":{
                "name": "testAPIMock",
                "collection": "12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2",
                "environment": "12345678-5daabc50-8451-43f6-922d-96b403b4f28e",
                "private": false
                }

        };
        const response = await axios.post(apiUrl,postPayload);
        console.log('Axios Response:');
        console.log('Status:', response.Status);
        console.log('Data', response.data);
} catch (error) {
    console.error('Error making API request:', error);
}
})();
