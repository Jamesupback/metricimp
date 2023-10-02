function ConvertHandler() {
  
  function splitter(input){
    let match=input.match(/^([\d\/.]*)([a-zA-Z]*)$/)
    if(match[1]=='')
    match[1]='1';
    match[2]=match[2].toLowerCase();
    const arr=[match[1],match[2]];
    return arr
  }

  this.getNum = function(input) {
    let test=splitter(input)[0];
    let result;
    let pattern=/^(?!(\d*\.\d*\.)|(\d*\.?\d?\/\d*\.?\d*\/))((\d*\.\d+)|\d*)(\/)?((\d*\.\d+)|\d*)?/g;
    if(pattern.test(test))
    {
      result=test.match(/^(?!(\d*\.\d*\.)|(\d*\.?\d?\/\d*\.?\d*\/))((\d*\.\d+)|\d*)(\/)?((\d*\.\d+)|\d*)?/g);
      return eval(result[0]);
    }
  };
  
  this.getUnit = function(input) {
    let result;
    let pattern=/^(gal|l|mi|km|lbs|kg)$/g
    let test=splitter(input)[1];
    if(pattern.test(test)){
      result=test.match(/^(gal|l|mi|km|lbs|kg)$/g);
      return result;
    }
   
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit){
      case 'km':return 'mi'
      case 'mi':return 'km'
      case 'gal':return 'l'
      case 'l':return 'gal'
      case 'lbs':return 'kg'
      case 'kg':return 'lbs'
      default:return "invalid"
    }
  };

  this.spellOutUnit = function(unit) {
    switch(unit){
      case 'km':return 'kilometers'
      case 'mi':return 'miles'
      case 'gal':return 'gallons'
      case 'l':return 'litres'
      case 'lbs':return 'pounds'
      case 'kg':return 'kilograms'
      default:return "invalid"
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch(initUnit){
      case 'km':return (initNum/miToKm).toFixed(5);
      case 'mi':return (initNum*miToKm).toFixed(5);
      case 'gal':return (initNum*galToL).toFixed(5);
      case 'l':return (initNum/galToL).toFixed(5);
      case 'lbs':return (initNum*lbsToKg).toFixed(5);
      case 'kg':return (initNum/lbsToKg).toFixed(5);
      default:return "invalid"
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    function chekl(unit){
      if (unit=='l')
      return 'L';
      else
      return unit;
    }
    let result;
    result={
      "initNum":initNum,
      "initUnit":chekl(initUnit[0]),
      "returnNum":+returnNum,
      "returnUnit":chekl(returnUnit),
      "string":`${initNum} ${this.spellOutUnit(initUnit[0])} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    };
    return result;
  };
  
}

module.exports = ConvertHandler;
