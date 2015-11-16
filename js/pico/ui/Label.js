Pico.UI.Label = class Label extends Pico.UI.Control {
	constructor(text) {
		super();
		/* Private variable name declaration */
		this._private.text = Symbol();
		this._private.alignMode = Symbol();
		this._private.font = Symbol();
		/* End private variable name declaration */
		this.private('text', text === undefined ? '' : text);
		this.private('domElement').className = 'pico-label';
		this.private('domElement').innerHTML = this.private('text');
		this.private('font', new Pico.Font());
		this.private('alignMode', Pico.AlignMode.Left);
		var cssArgs = this.private('font').toCSSArgs();
		this.private('domElement').style.fontSize = cssArgs.fontSize;
		this.private('domElement').style.fontWeight = cssArgs.fontWeight;
		this.private('domElement').style.textDecoration = cssArgs.textDecoration;
		this.private('domElement').style.fontStyle = cssArgs.fontStyle;
		this.private('domElement').style.fontFamily = cssArgs.fontFamily;
		this.private('domElement').style.textAlign = this.private('alignMode');
	}
	set font(font) {
		if (font instanceof Pico.Font) {
			this.private('font', font);
			var cssArgs = this.private('font').toCSSArgs();
			this.private('domElement').style.fontSize = cssArgs.fontSize;
			this.private('domElement').style.fontWeight = cssArgs.fontWeight;
			this.private('domElement').style.textDecoration = cssArgs.textDecoration;
			this.private('domElement').style.fontStyle = cssArgs.fontStyle;
			this.private('domElement').style.fontFamily = cssArgs.fontFamily;
		}
	}
	get font() {
		return Object.create(this.private('font'));
	}

	set text(text) {
		this.private('text', text);
		this.private('domElement').innerHTML = this.private('text');
	}
	get text() {
		return this.private('text');
	}

	set alignMode(alignMode) {
		this.private('alignMode', alignMode);
		this.private('domElement').style.textAlign = this.private('alignMode');
	}

	get alignMode() {
		return this.private('alignMode');
	}
}