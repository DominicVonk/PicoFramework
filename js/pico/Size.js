Pico.Size = class Size {
	constructor(width, height, picoObject) {
		this._width = width;
		this._height = height;
		if (typeof picoObject !== "undefined") {
			this._picoObject = picoObject;
		}
		this.apply();
	}
	set width(width) {
		this._width = width;
		this.apply();
	}
	get width() {
		return this._width
	}
	set height(height) {
		this._height = height;
		this.apply();
	}
	get height() {
		return this._height;
	}
	apply() {
		if (typeof this._picoObject !== "undefined") {
			this._picoObject.private('domElement').style.height = this._height + 'px';
			this._picoObject.private('domElement').style.width = this._width + 'px';
		}
	}
}