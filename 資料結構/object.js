/** @format */

let Harry = {
  name: "Harry Potter",
  age: 40,
  married: true,
  sayHi() {
    console.log("Harry:Hi!");
  },
};
console.log(Harry.age);
console.log(Harry["name"]);
Harry.sayHi();
