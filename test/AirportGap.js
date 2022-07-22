
const supertest = require('supertest');
const expect = require('chai').expect;
const chance = require('chance').Chance();
const config = require('./config.json');

const request = supertest(config.request);

describe('Airports', () => {

    it('Test_01_Get All Airports', async () => {

        const res = await request.get('airports');

        console.log(res.status);

        await expect(res.status).equal(200);
        await expect(res.body).to.not.be.empty;
    });

    it('Test_02_Get a single Airport', async () => {

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
    
});