function User(name, ssn){
  var social = ssn;
  this.name = name;
  // Adds a so-called 'getter' function to allow reading private variables
  this.getSSN = function(){
    return social;
  }
}
var mike = new User('Mike', 274164398);
console.log(mike.getSSN()); // 274164398
