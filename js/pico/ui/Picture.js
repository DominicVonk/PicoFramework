Pico.UI.Picture = class Picture extends Pico.UI.PicoObject {
	constructor(image) {
		super();
		this._image = image;
		this._sizeMode = Pico.SizeMode.Normal;
		this._domElement.className = 'pico-picture';
		this._domElement.style.backgroundImage = 'url(' + this._image + ')';
	}
	set image (image) {
		this._image = image;
		this._domElement.style.backgroundImage = 'url(' + image + ')';
	}
	get image () {
		return this._image;
	}
	set size (size) {
		super.size = size;
		if (this._sizeMode === Pico.SizeMode.Normal) {
			this._domElement.style.webkitBackgroundSize = '';
			this._domElement.style.backgroundSize = '';
		} else if (this._sizeMode === Pico.SizeMode.Cover) {
			this._domElement.style.webkitBackgroundSize = 'cover';
			this._domElement.style.backgroundSize = 'cover';
		} else if (this._sizeMode === Pico.SizeMode.Contain) {
			this._domElement.style.webkitBackgroundSize = 'contain';
			this._domElement.style.backgroundSize = 'contain';
		} else if (this._sizeMode === Pico.SizeMode.Stretch) {
			this._domElement.style.webkitBackgroundSize = size.width + 'px ' + size.height + 'px';
			this._domElement.style.backgroundSize = size.width + 'px ' + size.height + 'px';
		}
	}
	get size() {
		return super.size;
	}
	set sizeMode (sizeMode) {
		this._sizeMode = sizeMode;
		this.size = this.size;
	}
	get sizeMode () {
		return this._sizeMode;
	}
};