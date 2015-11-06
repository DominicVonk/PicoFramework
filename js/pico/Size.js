Pico.Size = class Size {
	constructor(width, height) {
		this._width = width;
		this._height = height;
	}
	set width(width) {
		this._width = width
	}
	get width() {
		return this._width
	}
	set height(height) {
		this._height = height;
	}
	get height() {
		return this._height;
	}
}