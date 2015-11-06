Pico.Color = class Color {
	constructor(red, green, blue, alpha) {
		if (typeof green === "undefined") {
			if (red.substr(0, 1) === '#') {
				var hex = red.substr(1).split('');
				if (hex.length == 3) {
					this._red = parseInt(hex[0] + hex[0], 16);
					this._green = parseInt(hex[1] + hex[1], 16);
					this._blue = parseInt(hex[2] + hex[2], 16);	
				} else {
					this._red = parseInt(hex[0] + hex[1], 16);
					this._green = parseInt(hex[2] + hex[3], 16);
					this._blue = parseInt(hex[4] + hex[5], 16);	
				}
				this._alpha = 100;
			} else {
				var color = (color+'').toLowerCase();
				for(var c in Pico.Colors) {
					if (Pico.Colors.hasOwnProperty(c) && (c+'').toLowerCase() == color) {
						var _color = Pico.Colors[c];
						this._red = _color.red;
						this._green = _color.green;
						this._blue = _color.blue;
						this._alpha = _color.alpha;
						break;
					}
				}
			}
		} else {
			if (typeof alpha === "undefined") {
				this._red = red;
				this._green = green;
				this._blue = blue;
				this._alpha = 100;
			} else {
				this._red = red;
				this._green = green;
				this._blue = blue;
				this._alpha = alpha;
			}
		}
	}

	get alpha() {
		return this._alpha;
	}
	set alpha(alpha) {
		this._alpha = alpha;
	}
	get red() {
		return this._red;
	}
	set red(red) {
		this._red = red;
	}
	get green() {
		return this._green;
	}
	set green(green) {
		this._green = green;
	}
	get blue() {
		return this._blue;
	}
	set blue(blue) {
		this._blue = blue;
	}
	
	toRgba() {
		return 'rgba(' + this._red + ', ' + this._green  + ', ' + this._blue + ', ' + Math.floor(this._alpha/100) + ')';
	}
	toRgb() {
		return 'rgb(' + this._red + ', ' + this._green  + ', ' + this._blue + ')';
	}
	toHex() {
		var r = this._red < 17 ? '0' + this._red.toString(16) : this._red.toString(16);
		var g = this._green < 17 ? '0' + this._green.toString(16) : this._green.toString(16);
		var b = this._blue < 17 ? '0' + this._blue.toString(16) : this._blue.toString(16);
		return '#' + r + g + b;
	};
	static fromRgba(red, green, blue, alpha) {
		return new Pico.Color(red, green, blue, alpha);
	}
	static fromRgb(red, green, blue) {
		return new Pico.Color(red, green, blue, 100);
	};
	static fromHex(hex) {
		return new Pico.Color(hex);
	};
	static fromColorName(color) {
		return new Pico.Color(color);
	};

}

Pico.Colors = {
	AliceBlue: new Pico.Color('#F0F8FF'),
	AntiqueWhite: new Pico.Color('#FAEBD7'),
	Aqua: new Pico.Color('#00FFFF'),
	Aquamarine: new Pico.Color('#7FFFD4'),
	Azure: new Pico.Color('#F0FFFF'),
	Beige: new Pico.Color('#F5F5DC'),
	Bisque: new Pico.Color('#FFE4C4'),
	Black: new Pico.Color('#000000'),
	BlanchedAlmond: new Pico.Color('#FFEBCD'),
	Blue: new Pico.Color('#0000FF'),
	BlueViolet: new Pico.Color('#8A2BE2'),
	Brown: new Pico.Color('#A52A2A'),
	BurlyWood: new Pico.Color('#DEB887'),
	CadetBlue: new Pico.Color('#5F9EA0'),
	Chartreuse: new Pico.Color('#7FFF00'),
	Chocolate: new Pico.Color('#D2691E'),
	Coral: new Pico.Color('#FF7F50'),
	CornflowerBlue: new Pico.Color('#6495ED'),
	Cornsilk: new Pico.Color('#FFF8DC'),
	Crimson: new Pico.Color('#DC143C'),
	Cyan: new Pico.Color('#00FFFF'),
	DarkBlue: new Pico.Color('#00008B'),
	DarkCyan: new Pico.Color('#008B8B'),
	DarkGoldenRod: new Pico.Color('#B8860B'),
	DarkGray: new Pico.Color('#A9A9A9'),
	DarkGreen: new Pico.Color('#006400'),
	DarkKhaki: new Pico.Color('#BDB76B'),
	DarkMagenta: new Pico.Color('#8B008B'),
	DarkOliveGreen: new Pico.Color('#556B2F'),
	DarkOrange: new Pico.Color('#FF8C00'),
	DarkOrchid: new Pico.Color('#9932CC'),
	DarkRed: new Pico.Color('#8B0000'),
	DarkSalmon: new Pico.Color('#E9967A'),
	DarkSeaGreen: new Pico.Color('#8FBC8F'),
	DarkSlateBlue: new Pico.Color('#483D8B'),
	DarkSlateGray: new Pico.Color('#2F4F4F'),
	DarkTurquoise: new Pico.Color('#00CED1'),
	DarkViolet: new Pico.Color('#9400D3'),
	DeepPink: new Pico.Color('#FF1493'),
	DeepSkyBlue: new Pico.Color('#00BFFF'),
	DimGray: new Pico.Color('#696969'),
	DodgerBlue: new Pico.Color('#1E90FF'),
	FireBrick: new Pico.Color('#B22222'),
	FloralWhite: new Pico.Color('#FFFAF0'),
	ForestGreen: new Pico.Color('#228B22'),
	Fuchsia: new Pico.Color('#FF00FF'),
	Gainsboro: new Pico.Color('#DCDCDC'),
	GhostWhite: new Pico.Color('#F8F8FF'),
	Gold: new Pico.Color('#FFD700'),
	GoldenRod: new Pico.Color('#DAA520'),
	Gray: new Pico.Color('#808080'),
	Green: new Pico.Color('#008000'),
	GreenYellow: new Pico.Color('#ADFF2F'),
	HoneyDew: new Pico.Color('#F0FFF0'),
	HotPink: new Pico.Color('#FF69B4'),
	IndianRed: new Pico.Color('#CD5C5C'),
	Indigo: new Pico.Color('#4B0082'),
	Ivory: new Pico.Color('#FFFFF0'),
	Khaki: new Pico.Color('#F0E68C'),
	Lavender: new Pico.Color('#E6E6FA'),
	LavenderBlush: new Pico.Color('#FFF0F5'),
	LawnGreen: new Pico.Color('#7CFC00'),
	LemonChiffon: new Pico.Color('#FFFACD'),
	LightBlue: new Pico.Color('#ADD8E6'),
	LightCoral: new Pico.Color('#F08080'),
	LightCyan: new Pico.Color('#E0FFFF'),
	LightGoldenRodYellow: new Pico.Color('#FAFAD2'),
	LightGray: new Pico.Color('#D3D3D3'),
	LightGreen: new Pico.Color('#90EE90'),
	LightPink: new Pico.Color('#FFB6C1'),
	LightSalmon: new Pico.Color('#FFA07A'),
	LightSeaGreen: new Pico.Color('#20B2AA'),
	LightSkyBlue: new Pico.Color('#87CEFA'),
	LightSlateGray: new Pico.Color('#778899'),
	LightSteelBlue: new Pico.Color('#B0C4DE'),
	LightYellow: new Pico.Color('#FFFFE0'),
	Lime: new Pico.Color('#00FF00'),
	LimeGreen: new Pico.Color('#32CD32'),
	Linen: new Pico.Color('#FAF0E6'),
	Magenta: new Pico.Color('#FF00FF'),
	Maroon: new Pico.Color('#800000'),
	MediumAquaMarine: new Pico.Color('#66CDAA'),
	MediumBlue: new Pico.Color('#0000CD'),
	MediumOrchid: new Pico.Color('#BA55D3'),
	MediumPurple: new Pico.Color('#9370DB'),
	MediumSeaGreen: new Pico.Color('#3CB371'),
	MediumSlateBlue: new Pico.Color('#7B68EE'),
	MediumSpringGreen: new Pico.Color('#00FA9A'),
	MediumTurquoise: new Pico.Color('#48D1CC'),
	MediumVioletRed: new Pico.Color('#C71585'),
	MidnightBlue: new Pico.Color('#191970'),
	MintCream: new Pico.Color('#F5FFFA'),
	MistyRose: new Pico.Color('#FFE4E1'),
	Moccasin: new Pico.Color('#FFE4B5'),
	NavajoWhite: new Pico.Color('#FFDEAD'),
	Navy: new Pico.Color('#000080'),
	OldLace: new Pico.Color('#FDF5E6'),
	Olive: new Pico.Color('#808000'),
	OliveDrab: new Pico.Color('#6B8E23'),
	Orange: new Pico.Color('#FFA500'),
	OrangeRed: new Pico.Color('#FF4500'),
	Orchid: new Pico.Color('#DA70D6'),
	PaleGoldenRod: new Pico.Color('#EEE8AA'),
	PaleGreen: new Pico.Color('#98FB98'),
	PaleTurquoise: new Pico.Color('#AFEEEE'),
	PaleVioletRed: new Pico.Color('#DB7093'),
	PapayaWhip: new Pico.Color('#FFEFD5'),
	PeachPuff: new Pico.Color('#FFDAB9'),
	Peru: new Pico.Color('#CD853F'),
	Pink: new Pico.Color('#FFC0CB'),
	Plum: new Pico.Color('#DDA0DD'),
	PowderBlue: new Pico.Color('#B0E0E6'),
	Purple: new Pico.Color('#800080'),
	RebeccaPurple: new Pico.Color('#663399'),
	Red: new Pico.Color('#FF0000'),
	RosyBrown: new Pico.Color('#BC8F8F'),
	RoyalBlue: new Pico.Color('#4169E1'),
	SaddleBrown: new Pico.Color('#8B4513'),
	Salmon: new Pico.Color('#FA8072'),
	SandyBrown: new Pico.Color('#F4A460'),
	SeaGreen: new Pico.Color('#2E8B57'),
	SeaShell: new Pico.Color('#FFF5EE'),
	Sienna: new Pico.Color('#A0522D'),
	Silver: new Pico.Color('#C0C0C0'),
	SkyBlue: new Pico.Color('#87CEEB'),
	SlateBlue: new Pico.Color('#6A5ACD'),
	SlateGray: new Pico.Color('#708090'),
	Snow: new Pico.Color('#FFFAFA'),
	SpringGreen: new Pico.Color('#00FF7F'),
	SteelBlue: new Pico.Color('#4682B4'),
	Tan: new Pico.Color('#D2B48C'),
	Teal: new Pico.Color('#008080'),
	Thistle: new Pico.Color('#D8BFD8'),
	Tomato: new Pico.Color('#FF6347'),
	Turquoise: new Pico.Color('#40E0D0'),
	Violet: new Pico.Color('#EE82EE'),
	Wheat: new Pico.Color('#F5DEB3'),
	White: new Pico.Color('#FFFFFF'),
	WhiteSmoke: new Pico.Color('#F5F5F5'),
	Yellow: new Pico.Color('#FFFF00'),
	YellowGreen: new Pico.Color('#9ACD32'),
	Transparent: new Pico.Color(0, 0, 0, 0),
	PicoWindow: new Pico.Color(40,40,40,100),
	PicoText: new Pico.Color(240, 240, 240, 100)
};