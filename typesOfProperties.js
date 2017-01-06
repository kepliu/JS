var persion1 = {
	_name : "Nicholas",
	get name() {
		console.log("Reading name");
		return this._name;
	},
	set name(value) {
		console.log("Setting name to %s", value);
		this._name= value;
	}
};
console.log(persion1.name);
persion1.name = "Greg";
console.log(persion1.name);
                                    