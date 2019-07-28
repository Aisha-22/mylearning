var num1 = 13;

var num2 = 3;

var sum = num1 + num2;

var mynum1 = 22;

var mynum2 = 3;

var mysum = mynum1 + mynum2;

// var mpilo = "watermelon served with icecream and vodka";

// console.log("hello world");
// console.log(num2);
// console.log("mpilo");
// // console.log(mpilo);
// // document.write(mpilo);
// console.log("the sum of 2 numbers is: " + sum);
// console.log("1 + 1 = " + sum);
// document.write("<br /> The sum of num 1 and num2 is "+sum);


function aishasChangeEditon(){

    document.getElementById('firstName').innerHTML = num1  + "+" + num2 + "="  + sum;
}

function HlatshwayochangeEditon(){
    document.getElementById('lastName').innerHTML = mynum1 + "+" + mynum2 + "=" + mysum;
}

function nameChangeID(name, firstNum, SwcondNum, theSum){

}
// string = "Aisha is pretty"
// int = 1
//float or doubl = 1.1 , 0.8
//boolean true or false
//null 
//undefined


//array int [1,2,3,4]
//array srting ["Aisha is their sister", "Mpilo", "Damian"]
//array bool [true,false,true]

// console.log("Monday - Friday")
// console.log("########################################");
// console.log("Wake UP");
// console.log("Bath");
// console.log("Brush Teeth");
// console.log("getDRessed");
// console.log("Go to work");
// console.log("\n///////////////////////////");

// console.log("Saturday");
// console.log("########################################");
// console.log("Wake UP");
// console.log("Bath");
// console.log("Brush Teeth");
// console.log("getDRessed");
// console.log("Go to church");
// console.log("\n///////////////////////////");


// console.log("Sunday")
// console.log("########################################");

// console.log("Go to baby shower");
// console.log("\n///////////////////////////");


function dailyRoutine(myDay, myactivityonday){
    console.log("########################################");
    console.log(myDay);
    console.log("Wake UP");
    console.log("Bath");
    console.log("Brush Teeth");
    console.log("getDRessed");
    console.log("do my make up");
    console.log(myactivityonday);
    console.log("\n///////////////////////////");

}

dailyRoutine("monday-Friday","Go to work");
dailyRoutine("Saturday","Go to church");
dailyRoutine("Sunday","Go to babyshower");
dailyRoutine("Public holiday","Go to the mall");
nameChangeID("Damian", 52, 80, theSum);
nameChangeID("Hlat", 32, 43, theSum)