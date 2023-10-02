const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    test('convert 10l to valid output',(done)=>{
        chai.request(server)
            .get('/api/convert')
            .query({input:'10l'})
            .end((err,res)=>{
                assert.equal(res.status,200);
                assert.equal(res.body.initNum,10);
                assert.equal(res.body.initUnit,'L');
                assert.equal(res.body.returnNum,2.64172)
                assert.equal(res.body.returnUnit,'gal')
                done();
            })
    })
    test('convert 32g to invalid output',(done)=>{
        chai.request(server)
            .get('/api/convert')
            .query({input:'32g'})
            .end((err,res)=>{
                assert.equal(res.status,200);
                assert.equal(res.body.initUnit,undefined)
                done();
            })
    })
    test('double division invalid',(done)=>{
        chai.request(server)
            .get('/api/convert')
            .query({input:'3/7.3/4kg'})
            .end((err,res)=>{
                assert.equal(res.status,200)
                assert.equal(res.body.initNum,undefined)
                done();
            })
    })
    test('double division with gibberish unit is invalid',(done)=>{
        chai.request(server)
            .get('/api/convert')
            .query({input:'3/7.2/4kg'})
            .end((err,res)=>{
                assert.equal(res.status,200)
                assert.equal(res.body.initNum,undefined)
                assert.equal(res.body.initUnit,undefined);
                done();
            })
    })
    test('simply unit is valid',(done)=>{
        chai.request(server)
            .get('/api/convert')
            .query({input:'kg'})
            .end((err,res)=>{
                assert.equal(res.status,200)
                assert.equal(res.body.initNum,1)
                assert.equal(res.body.initUnit,'kg')
                done();
            })
    })
});
