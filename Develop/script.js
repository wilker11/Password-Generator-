var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

var choices;
// this is the Upper Case function 
var toUpper = function (x) {
    return x.toUpperCase();
};
