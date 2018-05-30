var objLiteral = {
    firstName: 'Max',
    isAProgrammer: true
}

console.log(objLiteral);
console.log(JSON.stringify(objLiteral));

var jsonValue = '{"firstName":"Max","isAProgrammer":true}'
console.log(JSON.parse(jsonValue));

var o = {
    a: 7,
    get b() {
        return this.a + 1;
    },
    set c(x) {
        this.a = x / 2;
    }
};


console.log(o.a);
console.log(o.b);
o.c = 50;
console.log(o.a);


var d = Date.prototype;
Object.defineProperty(d, 'year', {
    get: function() { return this.getFullYear(); },
    set: function(y) { this.setFullYear(y); }
});

var now = new Date();
console.log(now.year);
now.year = 2001;
console.log(now);