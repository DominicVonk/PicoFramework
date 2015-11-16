Pico.UI.Picture = class Picture extends Pico.UI.Control {
	constructor(image) {
		super();
		/* Private variable name declaration */
		this._private.image = Symbol();
		this._private.sizeMode = Symbol();
		this._private.imageRepeat = Symbol();
		this._private.alignMode = Symbol();
		this._private.verticalAlignMode = Symbol();
		/* End private variable name declaration */
		this.private('image', image);
		this.private('sizeMode', Pico.SizeMode.Normal);
		this.private('imageRepeat', true);
		this.private('domElement').className = 'pico-picture';
		this.private('domElement').style.backgroundImage = 'url(' + this.private('image') + ')';
		this.private('alignMode', Pico.AlignMode.Left);
		this.private('verticalAlignMode', Pico.VerticalAlignMode.Top);
		this.private('domElement').style.backgroundPosition = this.private('verticalAlignMode') + ' ' + this.private('alignMode');
		this.private('domElement').style.backgroundRepeat = this.private('imageRepeat') ? 'repeat' : 'no-repeat';
	}
	set image (image) {
		this.private('image', image);
		this.private('domElement').style.backgroundImage = 'url(' + image + ')';
	}
	get image () {
		return this.private('image');
	}
	set size (size) {
		super.size = size;
		if (this.private('sizeMode') === Pico.SizeMode.Normal) {
			this.private('domElement').style.webkitBackgroundSize = '';
			this.private('domElement').style.backgroundSize = '';
		} else if (this.private('sizeMode') === Pico.SizeMode.Cover) {
			this.private('domElement').style.webkitBackgroundSize = 'cover';
			this.private('domElement').style.backgroundSize = 'cover';
		} else if (this.private('sizeMode') === Pico.SizeMode.Contain) {
			this.private('domElement').style.webkitBackgroundSize = 'contain';
			this.private('domElement').style.backgroundSize = 'contain';
		} else if (this.private('sizeMode') === Pico.SizeMode.Stretch) {
			this.private('domElement').style.webkitBackgroundSize = size.width + 'px ' + size.height + 'px';
			this.private('domElement').style.backgroundSize = size.width + 'px ' + size.height + 'px';
		}
	}
	get size() {
		return super.size;
	}
	set sizeMode (sizeMode) {
		this.private('sizeMode', sizeMode);
		this.size = this.size;
	}
	get sizeMode () {
		return this.private('sizeMode');
	}
	set alignMode (alignMode) {
		this.private('alignMode', alignMode);
		this.private('domElement').style.backgroundPosition = this.private('verticalAlignMode') + ' ' + this.private('alignMode');
	}
	get alignMode () {
		return this.private('alignMode');
	}
	set verticalAlignMode(verticalAlignMode) {
		this.private('verticalAlignMode', verticalAlignMode);
		this.private('domElement').style.backgroundPosition = this.private('verticalAlignMode') + ' ' + this.private('alignMode');
	}
	get verticalAlignMode() {
		return this.private('verticalAlignMode');
	}
	set imageRepeat(imageRepeat) {
		this.private('imageRepeat', imageRepeat);
		this.private('domElement').style.backgroundRepeat = this.private('imageRepeat') ? 'repeat' : 'no-repeat';
	}
	get imageRepeat() {
		return this.private('imageRepeat');
	}
};