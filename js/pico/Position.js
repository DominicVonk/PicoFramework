Pico.Position = class Position {
	constructor(x, y, picoObject) {
		this._x = x;
		this._y = y;
		if (typeof picoObject !== "undefined") {
			this._picoObject = picoObject;
		}
		this.apply();
	}
	set x(x) {
		this._x = x;
		this.apply();
	}
	get x() {
		return this._x;
	}
	set y(y) {
		this._y = y;
		this.apply();
	}
	get y() {
		return this._y;
	}
	apply() {
		if (typeof this._picoObject !== "undefined") {
			this._picoObject.domElement.style.left = this._x + 'px';
			this._picoObject.domElement.style.top = this._y + 'px';
		}
	}
}