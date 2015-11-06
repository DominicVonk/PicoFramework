Pico.UI._Elements = class Elements {
	constructor(domElement)  {
		this._array = [];
		this._domElement = domElement;
	}
	add(arg) {
		this._array.push(arg);
		this._domElement.appendChild(arg.domElement);
	}
	get(i) {
		return this.array[i];
	}
	removeLast() {
		var item = this._array.pop();
		this._domElement.removeChild(item.domElement);
		return item;
	}
	removeAt(i) {
		var item = this._array.splice(i, 1);
		this._domElement.removeChild(item.domElement);
		return item;
	}
	addAt(i, arg) {
		var item = this._array.splice(i, 0, arg);
		if (this._domElement.childNodes[i] === this._domElement.lastChild) {
			this._domElement.appendChild(arg.domElement);
		} else {
			this._domElement.insertBefore(arg.domElement, this._domElement.childNodes[i].nextSibling);
		}
	}
}