/*
    file:   bookstore.js
    desc:   bookstore assignment #1
            database book information 
    author: loes
    date:   05/11/16
*/

// import 'commander' (https://www.npmjs.com/package/commander)
var program = require('commander');

// database of book information
var book1_titel = "Dutch Republic in the Seventeenth Century";
var book1_author = "Prak, Maarten";
var book1_price = 32.95;
var book1_kind = "Paperback";

var book2_titel = "Dutch Culture in the Golden Age";
var book2_author = "Price, J";
var book2_price = 31.95;
var book2_kind = "Hardcover";

var book3_titel = "Dutch landscapes in the Golden Age";
var book3_author = "Scott, J";
var book3_price = 29.50;
var book3_kind = "Paperback";

var book4_titel = "Celebrating in the Golden Age";
var book4_author = "Bouffard-Veilleux, Mickael";
var book4_price = 9.90;
var book4_kind = "Paperback";

var book5_titel = "Rijks masters of the Golden Age";
var book5_author = "Wanders, Marcel";
var book5_price = 114.95;
var book5_kind = "Hardcover";

// initialise program (aka commander) 
program
  .version('0.1')
  .option('-t, --titel [string]', 'book information', 'empty') // add option --titel with default value "empty"
  .parse(process.argv);

// check what the value of titel is regardless of if it matches or not
console.log(program.titel); // this line can be commented out

// match value of input's "titel" argument
switch(program.titel)
{
    case book1_titel:
        // input match book1
        console.log(book1_titel);  // print titel
        console.log(book1_author);   // print author
        console.log(book1_price);   // print price
        console.log(book1_kind);    // print kind
        break;
    case book2_titel:
        // input match book2
        console.log(book2_titel);  // print titel
        console.log(book2_author);   // print author
        console.log(book2_price);   // print price
        console.log(book2_kind);    // print kind
        break;
    case book3_titel:
        // input match book3
        console.log(book3_titel);  // print titel
        console.log(book3_author);   // print author
        console.log(book3_price);   // print price
        console.log(book3_kind);    // print kind
        break;
    case book4_titel:
        // input match book4
        console.log(book4_titel);  // print titel
        console.log(book4_author);   // print author
        console.log(book4_price);   // print price
        console.log(book4_kind);    // print kind
        break;
    case book5_titel:
        // input match book5
        console.log(book5_titel);  // print titel
        console.log(book5_author);   // print author
        console.log(book5_price);   // print price
        console.log(book5_kind);    // print kind
        break;
    default:
        // default message if no match
        console.log('...');
        break;
}