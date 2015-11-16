Pico.UI._Elements = class Elements {
	constructor(domElement)  {
		this._array = [];
		this._domElement = domElement;
	}
	add(...arg) {
		
		for(var i = 0; i < arg.length; i++) {
			this._array.push(arg[i]);
			this._domElement.appendChild(arg[i].private('domElement'));
		}
	}
	get(i) {
		return this.array[i];
	}
	removeLast() {
		var item = this._array.pop();
		this._domElement.removeChild(item.private('domElement'));
		return item;
	}
	removeAt(i) {
		var item = this._array.splice(i, 1);
		this._domElement.removeChild(item.private('domElement'));
		return item;
	}
	addAt(i, ...arg) {
		var item = this._array.splice(i, 0, arg);
		if (this._domElement.childNodes[i] === this._domElement.lastChild) {
			for(var i = 0; i < arg.length; i++) {
				this._domElement.appendChild(arg[i].private('domElement'));
			}
		} else {
			for(var i = 0; i < arg.length; i++) {
				this._domElement.insertBefore(arg[i].private('domElement'), this._domElement.childNodes[i].nextSibling);
			}
		}
	}
}