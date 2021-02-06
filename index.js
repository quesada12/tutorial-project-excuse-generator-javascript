let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function myFunction() {
  let result = randomText()  
  document.getElementById("text").innerHTML = result[0]+" "+result[1]+" "+result[2]+" "+result[3];
}

function randomText(){
    let result = []
    result[0] = who[Math.floor(Math.random()*who.length)]
    result[1] = action[Math.floor(Math.random()*action.length)]
    result[2] = what[Math.floor(Math.random()*what.length)]
    result[3] = when[Math.floor(Math.random()*when.length)]
    return result
}