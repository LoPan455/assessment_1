// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle

function RightTriangle(side1,side2,base){
  side1,
  side2,
  base,
  area = function(base, side1){
    return (this.side1 * this.base) / 2;
  },

  perimeter =  function(side1,side2,side3){
    return (this.side1 + this.side2 + this.side3);
  }



}




// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.

new RightTriangle(2,3,4);
console.log(area());
