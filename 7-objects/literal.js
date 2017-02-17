// 1 - Create an object literal
// named prime with the properties:
// - city
// - state
// - zip
// Assign the values based on Prime's
// address.

var prime = {
  city: 'Bloomington',
  state: 'MN',
  zip: '55341'
}


// 2 - Using dot notation, create a
// new property for prime. This property
// will be called address and will
// take the value of Prime's street
// address.

prime.address = '9401 James Ave S #152'

// 3 - Using dot notation, create a
// new method for prime. This method
// will console log out the complete
// address of prime. Call the new
// property/method print.


prime.addressConcat = function(){
  //code changed to reference 'this.xxx'.
  console.log(this.address +' '+ this.city + ' ' + this.state + ' ' + this.zip);
}

prime.addressConcat();


//Ok, I see what you mean.  One of the object's methods is called, and therefore
//it will use it's own attributes.  Therefore, we use 'this' to pull in those attributes.
