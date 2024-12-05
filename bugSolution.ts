function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
//Solution 1:  Modify the function to accept an array of strings
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}
console.log(greeterArray(user));

//Solution 2: Access the array element directly
console.log(greeter(user[0]));