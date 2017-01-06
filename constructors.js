
function Person1(name) {
	this.name = name;
	this.sayName = function(){
		console.log(this.name);
	};
}
var person1 =  new Person1("person1");
console.log(person1.name);
person1.sayName();
person1.name = "person11";
person1.sayName();
function Person2(name) {
	Object.defineProperty(this, "name", {
		get: function() {
			return name;
		},
		set: function(newName) {
			console.log("set name to " + newName);
			name = newName;
		},
		enumerable:true,
		configurable: true
	});
	this.sayName = function() {
		console.log(name);
	};
}

var person2 = new Person2("Greg");
person2.sayName();
person2.name = "Nicholas";
person2.sayName();

/**
function Person3(name) {
	get name() {
		return name;
	 },
	 set name(value) {
		name = value;
	},
	this

**/
	