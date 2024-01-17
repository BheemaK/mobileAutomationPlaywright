import { test, expect } from '@playwright/test';
let apiDataValidation = new Array();
test.describe("Verify API Testing",()=> {
    test('Verify API testing', async ({ request}) => {
        await test.step("Validate API response", async ()=>{
            const response = await request.post('/Apirequest', {
                data: {
                    "description": "local register",
                    "role": "Software"
                }
            })
            expect(response.ok()).toBeTruthy;
            const respData = response.json();
            apiDataValidation.push(respData);
        })

    })

})