var function loopyLighthouse(range, multiples, words){
var string1 = words[0];
var string2 = words[1];
for(var num = range[0] ; num <= range[1]; num += 1){
  if (num % multiples[0] === 0 && num % multiples[1] !== 0){
    console.log(string1);
  }
  else if (num % multiples[1] === 0 && num % multiples[0] !== 0){
    console.log(string2);
  }
  else if (num % multiples[0] === 0 && num % multiples[1] === 0){
    console.log(string1 + string2);
  }
  else{
    console.log(num);
  }
 }
}