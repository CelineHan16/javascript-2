// types of data
// string
// number
// boolean


// var message = prompt("What is your message?", "no message");
// if (message === "") {
//   message = "no message";
// }
// alert(message);

// var year = prompt("What year KG gained independence?"); //prompt
// if(year === "1991") {
//   alert("Correct!");
// }
// else {
//   alert("Incorrect")
// }

var example = "Hello " + "World"; // we can use only "+" with STRINGS
// console.log(example);

var example1 = 200 + 200;
var example2 = "10" + "10";
// console.log(example2);

// var age = prompt("How old are you?");
// var year = 2020 - age;
// console.log(year);

// var year = prompt("When year Kyrgyzstan gained independance?");
// if(year > 1991) {
//   alert("This year is after independence year.");
// }
// else if  year === "1991";{
//   alert("You got it!")
// }
// else {
//   alert("This year is before independence year.");
// }

// var currentNumber = 10;
// var stopNumber = 0;
// while (currentNumber > stopNumber) {
//   currentNumber = currentNumber - 1;
//   console.log(currentNumber);
// }


// for (var i=100; i>=0; i--) {
//   if(i % 5  === 0 )
//   console.log(i);
// }

// console.log(10%3);

var country = prompt("What is the country you want to know capital of?");
if (country === "USA") {
  alert("Washington");
}
else if (country === "Kyrgyzstan") {
  alert("Bishkek");
}
else if (country === "Russia") {
  alert("Moscow");
}
else if (country === "Kazakhstan") {
  alert("Nur-Sultan");
}
else if (country === "Italy") {
  alert("Rome");
}
else if (country === "France") {
  alert("Paris");
}
else if (country === "Germany") {
  alert("Berlin");
}
else if (country === "UK") {
  alert("London");
}
else if (country === "Netherlands") {
  alert("Amsterdam");
}
else if (country === "Norway") {
  alert("Oslo");
}
else if (country === "China") {
  alert("Pekin");
} 
else if (country === "South Korea") {
  alert("Seoul");
}
else if (country === "Japan") {
  alert("Tokyo");
}
else {
  alert("We don't know that country");
}