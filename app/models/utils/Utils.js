Function.prototype.aeEntityInheritsFrom = function(parent) {
	if(parent.constructor == Function) { //Normal Inheritance
		this.prototype = new parent;
		this.prototype.constructor = this;
		this.prototype.parent = parent.prototype;
	} else  { //Pure Virtual Inheritance
		this.prototype = parent;
		this.prototype.constructor = this;
		this.prototype.parent = parent;
	}
	return this;
}