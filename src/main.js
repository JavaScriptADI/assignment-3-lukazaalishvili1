// 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// 2
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 3
let sum = 0; //sum equals to 0;
for (let i = 1; i <= 50; i++) {
    //Iteration will happen 50 times
    sum += i; //sum's = 1+2+3+4...+48+49+50;
}
console.log(sum); //it will print sum after 50 iterations(1275)

//4
for (let i = 0; i < 10; i += 2) {
    //Iteration will happen 5 times first when i =0, then i=2, then i=4, then i=6, then i=8,i will encrease by 2 each time
    console.log(i);
}

//5 break statement stops the loop; in this example break statement will stop the loop when i =7
for (let i = 0; i < 10; i++) {
    if (i == 7) {
        break;
    }
    console.log(i);
}

//6  continue statement skips the current iteration and continues with the next one; in this example continue statement will skip the iteration when i =7 and will continue when i =8 ,it will print 0,1,2,3,4,5,6,8,9
for (let i = 0; i < 10; i++) {
    if (i == 7) {
        continue;
    }
    console.log(i);
}
//7

let randomNum;
while (randomNum !== 27) {
    randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum);
}

//8
for (let i = 0; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//9
for (let i = 0; i < 100; i++) {
    console.log(Math.floor(Math.random() * 100) + 1);
}

//10
let sumOfEvens = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 2 == 0) {
        sumOfEvens += i;
    }
}
console.log(sumOfEvens);

//11
let sumOfDivisibles = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sumOfDivisibles += i;
    }
}
console.log(sumOfDivisibles);

//12

let sumOfBothDivisibles = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        sumOfBothDivisibles += i;
    }
}
console.log(sumOfBothDivisibles);

//13
let passwordLength = 9;
let password = "";
for (let i = 0; i < passwordLength; i++) {
    // printable chars are from 33 - 126,number of printable chars are 126-33 +1, printable chars starts at 33
    let randomCharNum = Math.floor(Math.random() * 126 - 33 + 1) + 33;
    password += String.fromCharCode(randomCharNum); //num to char
}
console.log(password);

// 14

let str = "";
for (let i = 0; i < 10; i++) {
    str += Math.random() > 0.5 ? " " : "?";
}
console.log(str);

for (let i = 0; i < str.length; i++) {
    if (str[i] == "?") {
        console.log(`index of ? is ${i}`);
        break;
    }
}

// 15
let locationOfBox = Math.floor(Math.random() * 8);
let topWall = "";
for (let i = 0; i < 10; i++) {
    topWall += "#";
}

console.log(topWall);

for (let i = 0; i < 8; i++) {
    if (i == locationOfBox) {
        console.log("#?       #");
    } else {
        console.log("#        #");
    }
}
//top wall == bottom wall
console.log(topWall);
