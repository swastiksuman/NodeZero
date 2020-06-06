const tutorial = require('./tutorial');
console.log('Hello '+ tutorial.sum(2, 3) + tutorial.PI) ;
new tutorial.SomeMathObject();

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('tutorial', (num1, num2) => console.log(tutorial.sum(num1, num2)) );
eventEmitter.emit('tutorial', 1,2);


class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name
    }

    get name(){
        return this._name;
    }
}

let souj = new Person('Souj');
let jyoti = new Person('Jyoti');
souj.on('name', () => {
    console.log('my name is '+ souj.name);
});

jyoti.on('name', () => {
    console.log('my name is '+ jyoti.name);
});

souj.emit('name');
jyoti.emit('name'); /* Executed asynchronously */

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);

let answer = num1 + num2;
rl.question(`What is ${num1} + ${num2} ?`, (userInput) => {
    if(userInput.trim() == answer){
        rl.emit('close');
    }else{
        rl.setPrompt('Incorrect please try again');
        rl.prompt();
        rl.on('line', (userInput) => {
            if(userInput.trim() == answer){
                rl.close();
            }else{
                rl.setPrompt('Incorrect');
                rl.prompt();
            }
        });
    }
});

rl.on('close', () => {console.log('Correct!!!'); rl.close();});


const fs = require('fs');
fs.writeFile('example.txt', 'this is an example',(err) => {});