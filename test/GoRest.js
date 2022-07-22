
const supertest = require('supertest');
const expect = require('chai').expect;
const chance = require('chance').Chance();
const config = require('./config.json');

const request2 = supertest(config.request2);

describe('Users', () => {


    it('Test_01_create user', async () => {

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