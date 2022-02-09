var reg = /React/;
// var reg = /React/g;  g => global search
// var reg = /React/i;  i => ignore Case
var string = "JS React Html css React";

// 1. exec() // value with index, null
var res = reg.exec(string);
console.log(res);
var res = reg.exec(string);
console.log(res);
var res = reg.exec(string);
console.log(res);

// 2.test() // true,false
var res = reg.test(string);
console.log(res);

// 3. match() // character, null
var res = string.match(reg);
console.log(res);

// 4. search() //index, null
var res = string.search(reg);
console.log(res);
