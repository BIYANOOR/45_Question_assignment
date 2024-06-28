//Question.1:Install Node.js, TypeScript and VS Code on your computer.
console.log("Installd Node.js, TypeScript and VS Code in my computer");
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question.1 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Installation done on my laptop successfully 😀
///Question.2:Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName: string  = "Sobia Furqan"
console.log(`Hello ${personName}, would you like to learn some JavaScript Today?`);
// Store a persons name in a variable and print a message to that person done 😀
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question.2 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.3:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Store the person's name in a variable
let person_Name: string = "Sobia Furqan";

// Print the person's name in lowercase
console.log(person_Name.toLowerCase());

// Print the person's name in uppercase
console.log(person_Name.toUpperCase());

// Print the person's name in titlecase
console.log(person_Name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question.3 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.4:Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
const fam_person = `Albert Einstein`;
const fam_quote = `"A person who never made a mistake did not tried anything new"`;
console.log(`${fam_person} once said, ${fam_quote}`);
// Famous Quote by Albert Einstein done successfully😀
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question.4 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.5:Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let message: string  = `${fam_person}once said ,"${fam_quote}"`;
console.log(message)
//message print successfully😀
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .5 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.6:Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let name_with_white_space = "\t \n Sobia Furqan😀\t \n"
console.log(name_with_white_space)
//now with stripped method
let strippedName:string=name_with_white_space.trim()
console.log("strippedName:",strippedName);
//assignment name with \t and\n and stripped method done successfully😀
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question.6 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question .7and 8://: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
let a = 2;
let b = 4;
let c = 6;
let d = 10;
let e = 80;

console.log(e/d);
console.log(d-a);
console.log(c+a);
console.log(a*b);
//with number dirrect operation (as i am little bit confuse which one is correct kindly consider the correct one)
console.log(80/10);
console.log(10-2);
console.log(6+2);
console.log(2*4);
//assignment operator done successfully😀
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question .7-8 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.9:Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let my_favourite_number = 25;
let my_message = `${my_favourite_number} is my favourite number😀`
console.log(my_message)
//my favourite number reveal through message done successfully 😀
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question .9 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.10Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//ctrl+question
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let myName: string  = "Sobia Furqan"
console.log(`Asslam-O-Alikum ${myName}, would you like to learn some JavaScript Today?`);
// Store my name in  persons name in a variable and print a message for myself  done 😀

//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
const famPerson = `Albert Einstein`;
const famQuote = `"A person who never made a mistake did not tried anything new"`;
console.log(`${famPerson} once said, ${famQuote}`);
// Famous Quote by Albert Einstein done successfully😀
//adding comit done successfully😀
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .10 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.11:Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let friend_names:string[] = ["Fatima","Azra","Amna","Hina"]
//with loop method/syntax
for(let i = 0 ;i <friend_names.length;i++){
console.log(friend_names[i])}
//with for each method /syntax 
friend_names.forEach(
    friend_names =>{
        console.log(friend_names);
    }
);
//with for loop method /syntax
for (const friendNames of friend_names){
    console.log(friendNames)
};//Array friend_names print successfully with three different methods 😀
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .11 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.12:Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
//this question is with continuation  with question 12 so array friend_name is used
//with loop method/syntax
for(let i = 0 ;i <friend_names.length;i++)
console.log(`Hi,${friend_names}[i]!how are you`);

//with for each method /syntax 
friend_names.forEach(
    friend_names =>{
        console.log(`Hello,${friend_names}`);
    }
);
//with for loop method /syntax
for (const friendNames of friend_names){
    console.log(`Goodbye,${friendNames}! I will meet you again`)};
   // send message to each friend in array done successfully😀
   console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .12 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
  // Question.13:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
  let myOwnTransport:string[] = ["Car","Bus","Bike"];
  
//with for each method /syntax 
myOwnTransport.forEach(
    myOwnTransport =>{
        console.log(`Hello friends i will soon buy a ,${myOwnTransport}`);
    }
);
//with for loop method /syntax
for (const TransportNames of myOwnTransport){
    console.log(`one day I will buy ,${TransportNames} `)};
   // printing transport name arry with msg done successfully with two different mehods😀
   console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question.13 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
  //Question.14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
  let guestList:string[]=["Fatima","Azra","Sobi"]
  guestList.forEach(
    guest=>{
        console.log(`Dear,${guest},you are invited to very special family dinner on sunday 8 pm sharp`)
    }
  )
      //sending message to guest list successfully     
  console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .14 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
  //Question.15:Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
  //to remove guest who cant make dinned from list
let unAbleToAttendDinner :string=guestList.splice(1,1)[0];
console.log(`${ unAbleToAttendDinner} can't make dinner`);
//pushing new guest
guestList.push("Noor") ;
console.log(guestList)
console.log(`Dear,${guestList},you are invited to very special family dinner on sunday 8 pm sharp`)
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .15 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.16:More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
guestList.push("Saba","sara","Hira");
console.log(guestList)
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .16  done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
let removedGuest1=guestList.pop();
console.log( removedGuest1);
console.log(`sorry😞 ${ removedGuest1} you cant attend dinner due to unavailability of table`);
console.log(guestList)
//second guest removal from list
let removedGuest2=guestList.pop();
console.log( removedGuest2);
console.log(`sorry😞 ${ removedGuest2} you cant attend dinner due to unavailability of table`);
console.log(guestList)
//third guest removal from list
let removedGuest3=guestList.pop();
console.log( removedGuest3);
console.log(`sorry 😞 ${ removedGuest3} you cant attend dinner due to unavailability of table`);
console.log(guestList)
//forth guest removal from list
let removedGuest4=guestList.pop();
console.log( removedGuest4);
console.log(`sorry😞 ${ removedGuest4} you cant attend dinner due to unavailability of table`);
console.log(guestList)
//now we have to remove two guest together from list for empty array
let removedGuest5=guestList.pop();
let removedGuest6=guestList.pop();
console.log( removedGuest5,removedGuest6);
console.log(`sorry 😞 ${ removedGuest5}, and ${removedGuest6} you both cant attend dinner due to unavailability of table`);
console.log(guestList)
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .17 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.18:Seeing the World: Think of at least five places in the world you’d like to visit.
let world_places1_to_visit="Paris"
let world_places2_to_visit="Spain"
let world_places3_to_visit="Itlay"
let world_places4_to_visit="France"
let world_places5_to_visit="Japan"
console.log(`🌍  places of world where i want to visit
     🗺️   ${world_places1_to_visit},${world_places2_to_visit},${world_places3_to_visit},${ world_places4_to_visit},${world_places5_to_visit}`)
// Store the locations in a array. Make sure the array is not in alphabetical order.
let placesToVisit:string[]=["Paris","Spain","Itlay","France","Japan"]
//Print your array in its original order.
console.log("Orignal order ",placesToVisit)
//Print your array in alphabetical order without modifying the actual list.
console.log(" In alphabetic order  🔤 :",placesToVisit.slice().sort());
//Show that your array is still in its original order by printing it.
console.log( "orignal order" ,placesToVisit);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("◀️ reverse order:",placesToVisit.slice().sort().reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("back to orignal order again :",placesToVisit.reverse().reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(" In alphabetic order  🔤 changed again :",placesToVisit.slice().sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("◀️ reverse order changed again :",placesToVisit.slice().sort().reverse());
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .18 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.19:Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`In our previous program 14 through 18 we add and remove guest from our guest list following the given instruction  in the end we have   ${guestList.length}  guest in our guest list and its an empty array`);
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .19 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.20:Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let bakraEidDinnerMenu :string[]=["Tikka","Karhai","Qorma","Biryani","Seekh Kabab","Chapli Kabab"]  
console.log(bakraEidDinnerMenu );
console.log( bakraEidDinnerMenu.forEach(Dish=>{console.log(Dish)
}) );
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .20 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.21:They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
interface toys{
    nameOfToy:string,
    price:number,
    discription:string
}
let myObjToy1 = {
                          nameOfToy: "Talking parrot",
                          price : 1500,
                        discription : "its a talkback/repeating speech toy for kids"
                };
 let myObjToy2 = {
                    nameOfToy: "Building blocks",
                    price : 1000,
                  discription : "its a constructive toy for kids to enhance their critical thinking "
          };
          console.log(myObjToy1)
          console.log(myObjToy2)
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .21 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.22:Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
                                                           console.log("Intentional Error")
let intentionalError :number[] = [1,2,3,4,5];
console.log(intentionalError[10]);
console.log("reason of error:there is no value exist on number 10 that's why it shows an error undefined")

console.log("Intentional Error 2-type error")
console.log("let intentionalError2 :string[] = [1,2,3,4,5];");
console.log ("this code will show an error")
console.log("correct explicit typing:","let intentionalError2 :number[] = [1,2,3,4,5];")
console.log( "intentionalError2" [10]);
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .22 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.23:Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
console.log("test.1")
let car = 'subaru'
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru');

console.log("test.2");

console.log("Is Acar == 'subaru'? I predict true.")
console.log(car == 'subaru');

console.log("test.3");

console.log("Is car1 === 'subaru'? I predict true.")
console.log(car === 'subaru');

console.log("test.4");

console.log("Is car1 !== 'subaru'? I predict false.")
console.log(car !== 'subaru');

console.log("test.5");

console.log("Is car == 'subaru'? I predict false.")
console.log(car == 'toyota');

console.log("test.6");
let Acar='toyota'
console.log("Is Acar == 'subaru'? I predict false.")
console.log(Acar == 'subaru');

console.log("test.7");

console.log("Is Acar >5 'subaru'? I predict false.")
console.log(car.length >10);

console.log("test.8");

console.log("Is Acar >6 'subaru'? I predict false.")
console.log(car.length >8);

console.log("test.9");

console.log("Is Acar <9 'subaru'? I predict false.")
console.log(car.length <6);

console.log("test.10");

console.log("Is Acar >=6 'subaru'? I predict true.")
console.log(car.length >=6);
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .23 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.24:More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings")
let string1 = "hello";
let string2 = "world";
console.log(string1 === "hello"); // True
console.log(string1 !== "hello"); // False
console.log(string2 === "world"); // True
console.log(string2 !== "world"); // False
// Tests for equality and inequality with strings done successfully

// Tests using the lower case function
console.log("Tests using the lower case function")
let mixedCaseString = "HeLLo WoRLd";
console.log(mixedCaseString.toLowerCase() === "hello world"); // True
console.log(mixedCaseString.toLowerCase() === "HELLO WORLD"); // False
// Tests using the lower case function done successfully

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to")
let num1 = 10;
let num2 = 20;
console.log(num1 === 10); // True
console.log(num1 !== 10); // False
console.log(num1 > 5); // True
console.log(num1 < 5); // False
console.log(num2 >= 20); // True
console.log(num2 <= 15); // False
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to done successfully

//Tests using "and" and "or" operators
console.log("Tests using and & or operators")
let a1 = 5;
let b1 = 10;
let c1 = 15;
console.log(a1 < b1 && b1 < c1); // True
console.log(a1 > b1 && b1 > c1); // False
console.log(a1 < b1 || b1 > c1); // True
console.log(a1> b1 || b1 > c1); // False
// Tests using "and" and "or" operators done successfully

//Test whether an item is in a array
console.log("Test whether an item is in a array")
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana")); // True
console.log(fruits.includes("grape")); // False
// Test whether an item is in an array done successfully done successfully

//Test whether an item is not in a array
console.log("Test whether an item is not in a array")
let animals = ["dog", "cat", "rabbit"];
console.log(!animals.includes("lion")); // True
console.log(!animals.includes("cat")); // False
// Test whether an item is not in an array done successfully
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .24 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.25:Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let alien_color = 'green';

if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
} else {
    console.log("The player did not earn any points.");
}

//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alien_color_fail = 'red';

if (alien_color_fail === 'green') {
    // This block will not execute
    console.log("The player just earned 5 points.")};
    console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .25 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.26:Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let alien_color_if = 'green';

if (alien_color_if === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
let alien_color_else = 'red';

if (alien_color_else === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}
//• Write one version of this program that runs the if block and another that runs the else block.
let alien_color_else_if = 'yellow';
 if (alien_color_else_if === 'yellow') {
    console.log(" if block : The player just earned 10 points for shooting the alien.");
} else if (alien_color_else_if === 'red') {
    console.log("The player just earned 15 points for shooting the alien.");
}

//program that run else block
let alien_color_else1_if = 'yellow';

 if (alien_color_else_if === 'red') {
    console.log("The player just earned 10 points for shooting the alien.");
 }
else { (alien_color_else === 'yellow') 
        console.log(" else  block : The player just earned 15 points for shooting the alien.");
}
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .26 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.27:Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
let alien_color_green = 'green';

if (alien_color_green === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color_green === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color_green === 'red') {
    console.log("The player earned 15 points.");
}
//• If the alien is yellow, print a message that the player earned 10 points.
let alien_color_yellow = 'yellow';

if (alien_color_yellow === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color_yellow === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color_yellow === 'red') {
    console.log("The player earned 15 points.");
}
//• If the alien is red, print a message that the player earned 15 points.
let alien_color_red = 'red';

if (alien_color_red === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color_red === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color_red === 'red') {
    console.log("The player earned 15 points.");
}
//• Write three versions of this program, making sure each message is printed for the appropriate color alien done successfully
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .27 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.28:Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
let ageOfPerson1: number = 1.5;

if (ageOfPerson1 < 2) {
    console.log("The person is a baby.");
} else if (ageOfPerson1 >= 2 && ageOfPerson1 < 4) {
    console.log("The person is a toddler.");
} else if (ageOfPerson1  >= 4 && ageOfPerson1 < 13) {
    console.log("The person is a kid.");
} else if (ageOfPerson1 >= 13 && ageOfPerson1 < 20) {
    console.log("The person is a teenager.");
} else if (ageOfPerson1 >= 20 && ageOfPerson1 < 65) {
    console.log("The person is an adult.");
} else if (ageOfPerson1 >= 65) {
    console.log("The person is an elder.");
}
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
let ageOfPerson2: number = 3;

if (ageOfPerson2 < 2) {
    console.log("The person is a baby.");
} else if (ageOfPerson2 >= 2 && ageOfPerson2 < 4) {
    console.log("The person is a toddler.");
} else if (ageOfPerson2  >= 4 && ageOfPerson2 < 13) {
    console.log("The person is a kid.");
} else if (ageOfPerson2 >= 13 && ageOfPerson2 < 20) {
    console.log("The person is a teenager.");
} else if (ageOfPerson2 >= 20 && ageOfPerson2 < 65) {
    console.log("The person is an adult.");
} else if (ageOfPerson2 >= 65) {
    console.log("The person is an elder.");
}
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
let ageOfPerson3: number = 12;

if (ageOfPerson3 < 2) {
    console.log("The person is a baby.");
} else if (ageOfPerson3 >= 2 && ageOfPerson3 < 4) {
    console.log("The person is a toddler.");
} else if (ageOfPerson3  >= 4 && ageOfPerson3 < 13) {
    console.log("The person is a kid.");
} else if (ageOfPerson3 >= 13 && ageOfPerson3 < 20) {
    console.log("The person is a teenager.");
} else if (ageOfPerson3 >= 20 && ageOfPerson3 < 65) {
    console.log("The person is an adult.");
} else if (ageOfPerson3 >= 65) {
    console.log("The person is an elder.");
}
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
let ageOfPerson4: number = 15;

if (ageOfPerson4 < 2) {
    console.log("The person is a baby.");
} else if (ageOfPerson4 >= 2 && ageOfPerson4 < 4) {
    console.log("The person is a toddler.");
} else if (ageOfPerson4  >= 4 && ageOfPerson4 < 13) {
    console.log("The person is a kid.");
} else if (ageOfPerson4 >= 13 && ageOfPerson4 < 20) {
    console.log("The person is a teenager.");
} else if (ageOfPerson4 >= 20 && ageOfPerson4 < 65) {
    console.log("The person is an adult.");
} else if (ageOfPerson4 >= 65) {
    console.log("The person is an elder.");
}
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
let ageOfPerson5: number = 22;

if (ageOfPerson5 < 2) {
    console.log("The person is a baby.");
} else if (ageOfPerson5 >= 2 && ageOfPerson5 < 4) {
    console.log("The person is a toddler.");
} else if (ageOfPerson5  >= 4 && ageOfPerson5 < 13) {
    console.log("The person is a kid.");
} else if (ageOfPerson5 >= 13 && ageOfPerson5 < 20) {
    console.log("The person is a teenager.");
} else if (ageOfPerson5 >= 20 && ageOfPerson5 < 65) {
    console.log("The person is an adult.");
} else if (ageOfPerson5 >= 65) {
    console.log("The person is an elder.");
}
//• If the person is age 65 or older, print a message that the person is an elder.
let ageOfPerson6: number = 66;

if (ageOfPerson6 < 2) {
    console.log("The person is a baby.");
} else if (ageOfPerson6 >= 2 && ageOfPerson6 < 4) {
    console.log("The person is a toddler.");
} else if (ageOfPerson6  >= 4 && ageOfPerson6 < 13) {
    console.log("The person is a kid.");
} else if (ageOfPerson4 >= 13 && ageOfPerson6 < 20) {
    console.log("The person is a teenager.");
} else if (ageOfPerson6 >= 20 && ageOfPerson6 < 65) {
    console.log("The person is an adult.");
} else if (ageOfPerson6 >= 65) {
    console.log("The person is an elder.");
}
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .28 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.29:Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
console.log("Array of favorite fruits")
let favorite_fruits: string[] = ["apple", "banana", "mango"];

// Independent if statements checking for certain fruits
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes("mango")) {
    console.log("You really like mangos!");
}

if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes("grape")) {
    console.log("You really like grapes!");
}
//• Make a array of your three favorite fruits and call it favorite_fruits.
let myFavoriteFruits: string[] = ["Apple", "Banana", "Mango"];

console.log(`"${myFavoriteFruits}",are my favourite fruits`)
console.log(myFavoriteFruits)
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

if (myFavoriteFruits.includes("apple")) {
    console.log("I really like apples!");
}

if (myFavoriteFruits.includes("banana")) {
    console.log("I really like bananas!");
}

if (myFavoriteFruits.includes("mango")) {
    console.log("I really like mangos!");
}

if (myFavoriteFruits.includes("orange")) {
    console.log("I really like oranges!");
}

if (myFavoriteFruits.includes("grape")) {
    console.log("I really like grapes!");
}
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .29 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.30:Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// Array of usernames
let usernames: string[] = ["Ali", "Rukhsana", "Bilal", "Admin", "Fareeda", "Fatima"];
console.log(usernames)
// Loop through the array and print greetings
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
for (let username of usernames) {
    if (username === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    } else {
       
     console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .30 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.31:No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
let username: string[] = ["Ali", "Rukhsana", "Bilal", "Admin", "Fareeda", "Fatima"];

// Check if the array is empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    // Loop through the array and print greetings
    for (let username of usernames) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in.`);
        }
    }
}
//• Remove all of the usernames from your array, and make sure the correct message is printed.
// Array of usernames
let usernames1: string[] = ["Ali", "Rukhsana", "Bilal", "Admin", "Fareeda", "Fatima"];

// Check if the array is empty
if (usernames1.length === 0) {
    console.log("We need to find some users!");
} else {
    // Loop through the array and print greetings
    for (let username of usernames) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆question .31 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.32:Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
let current_users: string[] = ["Ali", "Rukhsana", "Bilal", "Admin", "Fareeda", "Fatima"];
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users: string[] = ["Eman", "Farah", "Ali", "Fareeda", "Saad"];
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
let current_users_lower: string[] = current_users.map(username => username.toLowerCase());
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
for (let new_user of new_users) {
    let new_user_lower = new_user.toLowerCase();
    
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`Username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`Username '${new_user}' is available.`);
    }
}
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question .32 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.33:Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.

//• Loop through the array.

//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let number of numbers) {
    // Determine the ordinal ending based on the number
    let ordinal: string;
    if (number === 1) {
        ordinal = "st";
    } else if (number === 2) {
        ordinal = "nd";
    } else if (number === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }
    
    // Print the number with its ordinal ending
    console.log(`${number}${ordinal}`);
}

console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question .33 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.34:Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

// Store pizza names in an array
let pizzas: string[] = ["Pepperoni", "Chicken cheese ", "BBQ Chicken"];

// Print each pizza name using a for loop
console.log("My favorite pizzas:");
for (let pizza of pizzas) {
    console.log(pizza);
}

// Print a statement about liking each pizza
console.log("\nStatements about my favorite pizzas:");
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Print a closing statement
console.log("\nI really love pizza!");
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question .34 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.35:Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// Store animal names in an array
let Animals: string[] = ["Dog🦮", "Cat🐈", "Rabbit🐇"];

// Print each animal name using a for loop
console.log("List of animals:");
for (let animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("\nStatements about each animal:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} is a great pet.`);
}

// Print a closing statement about their common characteristic
console.log("\n They all are great domestic/pet animals🐈🦮🐇 ");
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question .35 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.36:T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
//In this step i Define the make_shirt function
function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and it says: "${message}".`);
}

// Call the function
make_shirt("Medium", "Hello, World!");
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question .36 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");

//Question.37:Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message
let size="Large";
let newMessage= "I love TypeScript";
console.log(`The shirt size is ${size} and it says: "${newMessage}".`);
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question .37 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.38:Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// Define the describe_city function with a default parameter
function describe_city(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Tokyo","Japan"); // Using default country "Unknown"
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question .38 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.39:City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with different city-country pairs
let result1 = city_country("Lahore", "Pakistan");
let result2 = city_country("Allaska", "US");
let result3 = city_country("Bejing", "China");

// Print the returned values
console.log(result1);
console.log(result2);
console.log(result3);
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question .39 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.40:Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
    let album: Record<string, any> = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Create albums for Pakistani artists
let album1 = make_album("Atif Aslam", "Doorie", 12);
let album2 = make_album("Ali Zafar", "Huqa Pani", 10);
let album3 = make_album("Strings", "Dhaani",);

// Print each album object to show the album information
console.log(album1);
console.log(album2);
console.log(album3);
let album4 = make_album("Noori", "Sun Ve Balori", 8);
console.log(album4);
let allAlbums = [album1, album2, album3, album4];
console.log(allAlbums);

console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question .40 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.41:Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Array of magician's names
let magicians: string[] = ["Hamoon jadoger", "Nastoor jin", "Bilpatori", "Imran megician"];

// Call the function to show all magicians
show_magicians(magicians);
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question .41 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.42:Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Define the make_great function to modify magicians' names
function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    magicians.forEach(magician => {
        greatMagicians.push(magician + " the Great");
    });
    return greatMagicians;
}

// Function to create an array of magician's names and display them
function main(): void {
    // Array of magician's names
    let magicians: string[] = ["Hamoon jadoger", "Nastoor jin", "Bilpatori", "Imran megician"];

    // Call make_great to modify the magicians array
    let greatMagicians = make_great(magicians);

    // Print the original magicians list
    console.log("Original Magicians:");
    show_magicians(magicians);

    // Print the modified magicians list
    console.log("\nGreat Magicians:");
    show_magicians(greatMagicians);
}

// Execute the main function
main();
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question .42 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.43:Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function makeGreat(magicians: string[]): string[] {
    // Adds 'the Great' to each magician's name.
    return magicians.map(magician => magician + " the Great");
}

function showMagicians(magicians: string[]): void {
    // Prints the name of each magician in the list.
    magicians.forEach(magician => console.log(magician));
}

// List of magicians' names
 magicians = ["Hamoon jadoger", "Nastoor jin", "Bilpatori", "Imran megician"];


// Call makeGreat with a copy of the original array
const greatMagicians: string[] = makeGreat([...magicians]);

// Show original magicians
console.log("Original magicians:");
showMagicians(magicians);
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question .43 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.44:Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function orderSandwich(...items: string[]): void {
    console.log("Sandwich with the following items:");
    items.forEach(item => console.log(`- ${item}`));
    console.log("\n");
}

// Call the function three times with different number of arguments
orderSandwich("jam", "Cheese", "Lettuce", "Tomato");
orderSandwich("chicken", "chilli", "mayonise");
orderSandwich("Peanut Butter", "Jelly");
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question .44 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");
//Question.45:Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer: string, model: string, ...options: { [key: string]: any }[]): object {
    // Create the car object with manufacturer and model
    let car: { [key: string]: any } = {
        manufacturer: manufacturer,
        model: model,
    };

    // Merge additional options into the car object
    options.forEach(option => {
        for (let key in option) {
            if (option.hasOwnProperty(key)) {
                car[key] = option[key];
            }
        }
    });

    return car;
}

// Call the function with required information and two other name-value pairs
let car1 = createCar("Toyota", "Camry", { color: "blue" }, { feature: "sunroof" });
let car2 = createCar("Ford", "Mustang", { color: "red" }, { transmission: "manual" });
let car3 = createCar("Tesla", "Model S", { color: "white" }, { autopilot: true });

console.log(car1);
console.log(car2);
console.log(car3);
console.log("🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆Question .45 done successfully🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆");


console.log("⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐")
console.log("⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ Assignment done ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐");
console.log("⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐")