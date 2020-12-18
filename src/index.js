/*
function testvar() {

    var x = 50;

    if (x <= 50) {

        console.log(x, "x is true");
    }
    else {

        console.log("everything is false");
    }
}
function testmain() {



    let y = 20
    if (y <= 50) {

        console.log(y, "y isi");
    }
    else {

        console.log("everything is false");
    }

}


for (leti = 0; i < 10; i++) {
    console.log(i)


}

//console.log(i);


testvar();
testmain();



const colors = [];

colors.push = ('red'),
colors.push= ('blue');


//colors = 'green';

console.log(colors)

*/

///classes

/*
class mainapp{

    constructor(name,email,id,password){
this.name= name;
this.email= email;
this.id= id;
this.password= password;


    }

static registration(){
    console.log("the user is logged in")
}

login(){
    console.log(this.name + " is now logged in")

}


}

//let adam = new mainapp( "adam","adam@gmail.com","66","dsadsa");
//adam.login();



class Member extends mainapp{

    constructor(name,email,id,password,memberPackage){

        super(name,email,id,password)
   
        this.memberPackage= memberPackage;
        
        
            }
        

getPackage(){

    console.log(this.email + "adams email account"+this.memberPackage+ "package is ");
}

}

let adam= new Member ('adam','adam@yahoo.com','12','231vfd','premium');

adam.getPackage();
adam.login();

*/

/*
let name ="alexei";

function makeUppercase(word){
return word.toUpperCase();

}

let template =
 `<h1>${makeUppercase('hello')},${name}</h1><p>this is js</p>`;
document.getElementById('template').innerHTML= template;


*/


//let mainString = 'string is ending';
//startsWith()
//endsWith()
//includes()

//console.log(mainString.startsWith('hello'));
//console.log(mainString.endsWith('ending'));
//console.log(mainString.includes('is'));


//hex value js es5 support this

//console.log(0xFF);

//binary suports only es6

//console.log(0b1010111);

//octal
//console.log(0o543);


//console.log(Number.isFinite(NaN)); //NaN , null , infinity is false

//console.log(Number.isNaN(NaN));// only thing is nan would be true in function Isnan

//console.log(Number.isInteger(-2));
//console.log(Number.isInteger(Infinity));


//default parameter

/*
function meet ($meeting = 'hello'){

    console.log($meeting);

    
}

meet()

*/

///spread operator
/*
let args = [ 1,2,3];
let args2 = [ 4,5,6];
function mainlife (){


    console.log(args+','+ args2);
}


mainlife(...args, ...args2) //es6 method
//mainlife.apply(null, args);  // this is es5 method


*/




// set , map . weakSET, weakmap

/*
let myArray = [ 11,2,44,1,2,2];

let Myset  = new Set(myArray);


Myset.add(22);
Myset.add({a:1,b:2});
Myset.delete(2);
Myset.clear('2');
console.log(Myset);

console.log(Myset.size);


Myset.forEac(function(val)
{
    console.log(val)
});


let myMap = new Map ([['a1','hello',], ['b2'],['c1']]);
myMap.set(['a4','a5']);

myMap.delete(['a1']);

console.log(myMap);




//weak set / weak map


let nemoweakset = new WeakSet();

let nemo1 = {
    make : 'golden ', 
    model: '1',
    
}

nemoweakset.add(nemo1);



let nemo2 = {
    make : 'brown', 
    model: '2',
    
}

nemoweakset.add(nemo2);
nemoweakset.delete(nemo1);

console.log(nemoweakset);




let nemoWeakMap = new WeakMap();

let first = {
    id: 1
}



let nemo1 = {
    make : 'golden ', 
    model: '1'
    
}



let second = {
    id :2
}

let nemo2 = {
    make : 'blue', 
    model: '111'
    
}

nemoWeakMap.set(first,nemo1);

nemoWeakMap.set(second,nemo2);



console.log(nemoWeakMap);
*/


//arrow function

/*
let mainvariabke = function(a,b){


    let sum = a+b;
    console.log(sum)
    return false;


}

*/

/*
let mainvariabke =(a,b)=>{


    let sum = a+b;
    console.log(sum)
    return false;


}


mainvariabke(2,1);
*/


//promisess
//immediatley resolved

let mypromise = Promise.resolve("main")


mypromise.then((res) => console.log(res));

var myPromise = new Promise(function( resolve, reject){
    setTimeout(() => resolve(4), 2000);


})
myPromise.then((res) =>{

    res +=3;
    console.log(res)
})



/*
function getData(method, url){

    return new Promise (function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function(){
            if (this.status >= 200 && this.status <300){
                resolve(xhr.response);


             }else {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        }
    };

    xhr.onerror = function(){
        reject({
            status: this.status,
            statusText: xhr.statusText
        });
    };
    xhr.send();
 });

}

getData('GET', 'https://jsonplaceholder.typicode.com/todos').then(function(data){


console.log(data)

let todos = JSON.parse(data);
let output  
}).catch(function(err){
    console.log(err);
});

*/