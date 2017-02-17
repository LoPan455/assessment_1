// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle

function RightTriangle(side1,side2,base){
  this.side1 = side1;
  this.side2 = side2;
  this.base = base;
  this.area = function(base, side1){
    return (this.side1 * this.base) / 2;
  },

  this.perimeter = function(side1,side2,base){
    return (this.side1 + this.side2 + this.base);
  }



}




// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.

var triangleOne = new RightTriangle(2,3,4);
console.log(triangleOne.area());
console.log(triangleOne.perimeter());

var triangleTwo = new RightTriangle (4,5,6);
console.log(triangleTwo.area());
console.log(triangleTwo.perimeter());
