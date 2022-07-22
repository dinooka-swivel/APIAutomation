
const supertest = require('supertest');
const expect = require('chai').expect;
const chance = require('chance').Chance();
const config = require('./config.json');

const request = supertest(config.request);
const request2 = supertest(config.request2);

describe('Airports', () => {

    it('Test_01_Get All Airports', async () => {

        const res = await request.get('airports');

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

    it('Test_04_POST create users', async () => {

        const data = {
            "name": chance.name(),
            "email": chance.email({domain: "gmail.com"}),
            "gender": "male",
            "status": "active"
        }
        const res = await request2.post('users').set('Authorization', config.token).send(data);
        

        console.log(res.body.data);
        console.log(res.status);

        await expect(res.status).equal(201);
        await expect(res.body).to.not.be.empty;

    });
});