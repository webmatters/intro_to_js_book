// Function Requirements
// Accept string as an argument
// if the string is > 10 characters
//    Return an ALL CAPS version of the string
// else Return the original string

function checkString(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}
