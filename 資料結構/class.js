/** @format */

// let c1 = {
//     radius:10,
//     getArea(){
//         return (Math.PI * this.radius * this.radius);
//     }
// }

class Circle {
  constructor(r) {
    this.radius = r;
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

let c1 = new Circle(5);

console.log(c1.radius);
console.log(c1.getArea());
