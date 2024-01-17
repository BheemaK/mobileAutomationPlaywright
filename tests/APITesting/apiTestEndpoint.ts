import axios from 'axios';
const apiUrl = 'https://postman-echo.com/get';
const makeApiRequest = async () => {
    try {
        const response = await axios.get(apiUrl);
        return response.data;

    } catch (error) {
        console.error('Error making API request:', error);
        throw error;
    }
};

const runApiTest = async () => {
    try {
        const apiResponse = await makeApiRequest();
        console.log('API Response:', apiResponse);

    } catch(error) {
        console.error('API test failed:',error);
    }
};

runApiTest();
