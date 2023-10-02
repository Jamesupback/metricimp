const word='kmser';
const result=(/^(gal|L|mi|km|lbs|kg)$/g).test(word);
//const reslt=(/^(?!.*\/.*\/|\d+\.\d+\.\d+)(?:\d+\.\d+|\d+\/\d+|\d+)$/g).test(word);
console.log(result)