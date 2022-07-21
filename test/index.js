
const supertest = require('supertest');
const expect = require('chai').expect;

const request = supertest("https://airportgap.dev-tester.com/api/");
const request2 = supertest("https://gorest.co.in/public/v2/");

describe('Airports', () => {

    it('Test_01_Get All Airports', async () => {

        const res = await request.get('airports');

        //console.log(res.body.data);
        console.log(res.status);

        await expect(res.status).equal(200);
        await expect(res.body).to.not.be.empty;
    });

    it('Test_02_Get 1 Airports', async () => {

        const res = await request.get('airports/PFJ');

        console.log(res.body.data);
        console.log(res.status);

        await expect(res.status).equal(200);
        await expect(res.body).to.not.be.empty;
    });

    it('Test_03_POST distance', async () => {

        const data = {
            "from": "KIX",
            "to": "NRT"

        }
        const res = await request.post('airports/distance').send(data);



        console.log(res.body.data);
        console.log(res.status);

        await expect(res.status).equal(200);
        await expect(res.body).to.not.be.empty;
    });

    it.only('Test_04_POST create users', async () => {

        const data = {
            "name": "Shaun Marsh",
            "email": "tim3.paine@test.com",
            "gender": "male",
            "status": "active"
        }
        const res = await request2.post('users').set('Authorization','Bearer 1eaa7c6e1d432291b2a004e343c654ff3b37724a2cca3f81c8d4d997bd9d9187').send(data);



        console.log(res.body.data);
        console.log(res.status);

        await expect(res.status).equal(201);
        await expect(res.body).to.not.be.empty;
    });
});