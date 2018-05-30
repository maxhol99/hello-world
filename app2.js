var objLiteral = {
    firstName: 'Max',
    isAProgrammer: true
}

console.log(objLiteral);
console.log(JSON.stringify(objLiteral));

var jsonValue = '{"firstName":"Max","isAProgrammer":true}'
console.log(JSON.parse(jsonValue));