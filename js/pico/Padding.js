Pico.Padding = class Padding {
	constructor(top, left, bottom, right, picoObject) {
		this._top = top;
		if (typeof left !== "undefined") {
			this._left = left;
			this._bottom = bottom;
			this._right = right;
		} else {
			this._left = top;
			this._bottom = top;
			this._right = top;
		}

		if (typeof picoObject !== "undefined") {
			this._picoObject = picoObject;
		}
		this.apply();
		
	}
	set top(top) {
		this._top = top;
		this.apply();
	}
	get top() {
		return this._top;
	}
	set left(left) {
		this._left = left;
		this.apply();
	}
	get left() {
		return this._left;
	}
	set bottom(bottom) {
		this._bottom = bottom;
		this.apply();
	}
	get bottom() {
		return this._bottom;
	}
	set right(right) {
		this._right = right;
		this.apply();
	}
	get right() {
		return this._right;
	}
	apply() {
		if (typeof this._picoObject !== "undefined") {
			this._picoObject.private('domElement').style.padding = this._top + 'px ' + this._right + 'px ' + this._bottom + 'px ' + this._left + 'px';
		}
	}
}