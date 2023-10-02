const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('whole number input',(done)=>{
        let input='32L';
        assert.equal(convertHandler.getNum(input),32);
        done();
    })
    test('decimal input',(done)=>{
        let input='3.2L';
        assert.equal(convertHandler.getNum(input),3.2);
        done();
    })
    test('fractional input',(done)=>{
        let input='1/2L';
        assert.equal(convertHandler.getNum(input),0.5);
        done();
    })
    test('fractional input with decimal',(done)=>{
        let input='1.5/2l';
        assert.equal(convertHandler.getNum(input),0.75)
        done();
    })
    test('invalid fraction',(done)=>{
        let input='1/2/3';
        assert.equal(convertHandler.getNum(input),null);
        done();
    })
    test('no number provided',(done)=>{
        let input='l';
        assert.equal(convertHandler.getNum(input),1);
        done();
    })
    test('valid unit',(done)=>{
        let input='l';
        assert.equal(convertHandler.getUnit(input),'l');
        done();
    })
    test('invalid unit',(done)=>{
        let input='mins';
        assert.equal(convertHandler.getUnit(input),null);
        done();
    })
    test('return unit',(done)=>{
        let input='l';
        assert.equal(convertHandler.getReturnUnit(input),'gal');
        done();
    })
    test('spell it out',(done)=>{
        let input='gal';
        assert.equal(convertHandler.spellOutUnit(input),'gallons');
        done();
    })
    test('gal to litres',(done)=>{
        let num='1';
        let unit='gal'
        assert.equal(convertHandler.convert(num,unit), 3.78541 );
        done();
    })
    test('litres to gal',(done)=>{
        let num='1';
        let unit='l'
        assert.equal(convertHandler.convert(num,unit),0.26417);
        done();
    })
    test('mi to km',(done)=>{
        let num='1';
        let unit='mi'
        assert.equal(convertHandler.convert(num,unit),1.60934  );
        done();
    })
    test('km to mi',(done)=>{
        let num='1';
        let unit='km'
        assert.equal(convertHandler.convert(num,unit),0.62137);
        done();
    })
    test('lbs to kg',(done)=>{
        let num='1';
        let unit='lbs'
        assert.equal(convertHandler.convert(num,unit), 0.45359);
        done();
    })
    test('kg to lbs',(done)=>{
        let num='1';
        let unit='kg'
        assert.equal(convertHandler.convert(num,unit),2.20462);
        done();
    })
});