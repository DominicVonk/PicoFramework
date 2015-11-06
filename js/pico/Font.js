Pico.FontStyle = {
	ExtraLight: 0,
	ExtraLightItalic: 1,
	Light: 2,
	LightItalic: 3,
	Book: 4,
	BookItalic: 5,
	Normal: 6,
	Italic: 7,
	Medium: 8,
	MediumItalic: 9,
	SemiBold: 10,
	SemiBoldItalic: 11,
	Bold: 2,
	BoldItalic: 3,
	Black: 14,
	BlackItalic: 15,
	ExtraBlack: 16,
	ExtraBlackItalic: 17
};
Pico.Font = class Font {
	constructor(family = 'Arial', size = 14, type = Pico.FontStyle.Normal, underline = false) {
		this._family = family;
		this._size = size;
		this._type = type;
		this._underline = underline;
	}
	set family(family) {
		this._family = family;
	}
	get family() {
		return this._family;
	}
	set size(size) {
		this._size = size;
	}
	get size() {
		return this._size;
	}
	set type(type) {
		if (this._type > -1 && this.type < 18) {
			this._type = type;
		} else {
			this._type = Pico.FontStyle.Normal;
		}
	}
	get type() {
		return this._type;
	}
	set underline(underline) {
		this._underline = underline;
	}
	get underline() {
		return this._underline;
	}
	toCSSArgs() {
		return {
			fontFamily: '"' + this._family + '", sans-serif',
			fontSize: this._size + 'px',
			fontStyle: (this._type % 2 == 1 ? 'italic' : 'normal'),
			fontWeight: (Math.floor(this._type / 2) + 1) * 100,
			textDecoration: (this._underline ? 'underline' : 'none')
		};
	}
}