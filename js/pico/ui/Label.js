Pico.UI.Label = class Label extends Pico.UI.PicoObject {
	constructor(text) {
		super();
		this._text = text === undefined ? '' : text;
		this._domElement.className = 'pico-label';
		this._domElement.innerHTML = this._text;
		this._font = new Pico.Font();
		this._alignMode = Pico.AlignMode.Left;
		var cssArgs = this._font.toCSSArgs();
		this._domElement.style.fontSize = cssArgs.fontSize;
		this._domElement.style.fontWeight = cssArgs.fontWeight;
		this._domElement.style.textDecoration = cssArgs.textDecoration;
		this._domElement.style.fontStyle = cssArgs.fontStyle;
		this._domElement.style.fontFamily = cssArgs.fontFamily;
		if (this._alignMode === Pico.AlignMode.Left) {
			this._domElement.style.textAlign = 'left';
		} else if (this._alignMode === Pico.AlignMode.Center) {
			this._domElement.style.textAlign = 'center';
		} else if (this._alignMode === Pico.AlignMode.Right) {
			this._domElement.style.textAlign = 'right';
		}
	}
	set font(font) {
		if (font instanceof Pico.Font) {
			this._font = font;
			var cssArgs = this._font.toCSSArgs();
			this._domElement.style.fontSize = cssArgs.fontSize;
			this._domElement.style.fontWeight = cssArgs.fontWeight;
			this._domElement.style.textDecoration = cssArgs.textDecoration;
			this._domElement.style.fontStyle = cssArgs.fontStyle;
			this._domElement.style.fontFamily = cssArgs.fontFamily;
		}
	}
	get font() {
		return Object.create(this._font);
	}

	set text(text) {
		this._text = text;
		this._domElement.innerHTML = this._text;
	}
	get text() {
		return this._text;
	}

	set alignMode(alignMode) {
		this._alignMode = alignMode;
		if (this._alignMode === Pico.AlignMode.Left) {
			this._domElement.style.textAlign = 'left';
		} else if (this._alignMode === Pico.AlignMode.Center) {
			this._domElement.style.textAlign = 'center';
		} else if (this._alignMode === Pico.AlignMode.Right) {
			this._domElement.style.textAlign = 'right';
		}
	}

	get alignMode() {
		return this._alignMode;
	}
}