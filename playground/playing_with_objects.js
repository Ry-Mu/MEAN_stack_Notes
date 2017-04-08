var Todd = {
  name: "Todd",
  sayName: function(){
    console.log("Todd")
  }
}

//You make objects with the {} sign.
//You separate atttributes by commas,
//and are key:value pairs. You can put a function in an attribute

Todd.sayName();

//The (); is important. I think its to invoke an object.


//Below is an alternative way to make objects, many at once.
function NewPerson(name){
  return {
    name: name,
    sayName: function(){
      console.log(name)
    }
  }
}

var Jay = NewPerson("Jay");
var Sara = NewPerson("Sara");

Jay.sayName();
Sara.sayName();

//new keyword: this
function Person(name){
  console.log(this)
  this.name = name;
  this.sayName = function(){
    console.log(name);
  }
}

//another new keyword: new. This basically says take everything in Person, construct as, and put it into an object.
var Jimmy = new Person("Jimmy");
Jimmy.sayName();
