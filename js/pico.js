'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

if (!Object.create) {
	Object.create = function (proto) {
		function F() {}
		F.prototype = proto;
		return new F();
	};
}

var Pico = {
	UI: {}
};
Pico.AlignMode = {
	Left: 'left',
	Center: 'center',
	Right: 'right'
};
Pico.VerticalAlignMode = {
	Top: 'top',
	Center: 'center',
	Bottom: 'bottom'
};
Pico.Color = (function () {
	function Color(red, green, blue, alpha) {
		_classCallCheck(this, Color);

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
				var color = (color + '').toLowerCase();
				for (var c in Pico.Colors) {
					if (Pico.Colors.hasOwnProperty(c) && (c + '').toLowerCase() == color) {
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

	_createClass(Color, [{
		key: 'toRgba',
		value: function toRgba() {
			return 'rgba(' + this._red + ', ' + this._green + ', ' + this._blue + ', ' + Math.floor(this._alpha / 100) + ')';
		}
	}, {
		key: 'toRgb',
		value: function toRgb() {
			return 'rgb(' + this._red + ', ' + this._green + ', ' + this._blue + ')';
		}
	}, {
		key: 'toHex',
		value: function toHex() {
			var r = this._red < 17 ? '0' + this._red.toString(16) : this._red.toString(16);
			var g = this._green < 17 ? '0' + this._green.toString(16) : this._green.toString(16);
			var b = this._blue < 17 ? '0' + this._blue.toString(16) : this._blue.toString(16);
			return '#' + r + g + b;
		}
	}, {
		key: 'alpha',
		get: function get() {
			return this._alpha;
		},
		set: function set(alpha) {
			this._alpha = alpha;
		}
	}, {
		key: 'red',
		get: function get() {
			return this._red;
		},
		set: function set(red) {
			this._red = red;
		}
	}, {
		key: 'green',
		get: function get() {
			return this._green;
		},
		set: function set(green) {
			this._green = green;
		}
	}, {
		key: 'blue',
		get: function get() {
			return this._blue;
		},
		set: function set(blue) {
			this._blue = blue;
		}
	}], [{
		key: 'fromRgba',
		value: function fromRgba(red, green, blue, alpha) {
			return new Pico.Color(red, green, blue, alpha);
		}
	}, {
		key: 'fromRgb',
		value: function fromRgb(red, green, blue) {
			return new Pico.Color(red, green, blue, 100);
		}
	}, {
		key: 'fromHex',
		value: function fromHex(hex) {
			return new Pico.Color(hex);
		}
	}, {
		key: 'fromColorName',
		value: function fromColorName(color) {
			return new Pico.Color(color);
		}
	}]);

	return Color;
})();

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
	PicoWindow: new Pico.Color(40, 40, 40, 100),
	PicoText: new Pico.Color(240, 240, 240, 100),
	PicoLink: new Pico.Color(64, 164, 255)
};
Pico.Cursor = (function () {
	function Cursor(name, noImage) {
		_classCallCheck(this, Cursor);

		this._name = name;
		this._noImage = noImage;
	}

	_createClass(Cursor, [{
		key: 'image',
		set: function set(image) {
			this._name = image;
			this._noImage = false;
		},
		get: function get() {
			return this._name;
		}
	}, {
		key: 'style',
		get: function get() {
			if (this._noImage) {
				return this._name;
			} else {
				return 'url(' + this._name + ')';
			}
		}
	}]);

	return Cursor;
})();

Pico.Cursors = {
	Auto: new Pico.Cursor('auto', true),
	Default: new Pico.Cursor("default", true),
	ContextMenu: new Pico.Cursor("context-menu", true),
	Help: new Pico.Cursor("help", true),
	Pointer: new Pico.Cursor("pointer", true),
	Progress: new Pico.Cursor("progress", true),
	Wait: new Pico.Cursor("wait", true),
	Cell: new Pico.Cursor("cell", true),
	Crosshair: new Pico.Cursor("crosshair", true),
	Text: new Pico.Cursor("text", true),
	Alias: new Pico.Cursor("alias", true),
	Copy: new Pico.Cursor("copy", true),
	Move: new Pico.Cursor("move", true),
	NResize: new Pico.Cursor("n-resize", true),
	EResize: new Pico.Cursor("e-resize", true),
	SResize: new Pico.Cursor("s-resize", true),
	WResize: new Pico.Cursor("w-resize", true),
	NSResize: new Pico.Cursor("ns-resize", true),
	EWResize: new Pico.Cursor("ew-resize", true),
	NEResize: new Pico.Cursor("ne-resize", true),
	NWResize: new Pico.Cursor("nw-resize", true),
	SEResize: new Pico.Cursor("se-resize", true),
	SWResize: new Pico.Cursor("sw-resize", true),
	NESWResize: new Pico.Cursor("nesw-resize", true),
	NWSEResize: new Pico.Cursor("nwse-resize", true)
};
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
Pico.Font = (function () {
	function Font() {
		var family = arguments.length <= 0 || arguments[0] === undefined ? 'Arial' : arguments[0];
		var size = arguments.length <= 1 || arguments[1] === undefined ? 14 : arguments[1];
		var type = arguments.length <= 2 || arguments[2] === undefined ? Pico.FontStyle.Normal : arguments[2];
		var underline = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

		_classCallCheck(this, Font);

		this._family = family;
		this._size = size;
		this._type = type;
		this._underline = underline;
	}

	_createClass(Font, [{
		key: 'toCSSArgs',
		value: function toCSSArgs() {
			return {
				fontFamily: '"' + this._family + '", sans-serif',
				fontSize: this._size + 'px',
				fontStyle: this._type % 2 == 1 ? 'italic' : 'normal',
				fontWeight: (Math.floor(this._type / 2) + 1) * 100,
				textDecoration: this._underline ? 'underline' : 'none'
			};
		}
	}, {
		key: 'family',
		set: function set(family) {
			this._family = family;
		},
		get: function get() {
			return this._family;
		}
	}, {
		key: 'size',
		set: function set(size) {
			this._size = size;
		},
		get: function get() {
			return this._size;
		}
	}, {
		key: 'type',
		set: function set(type) {
			if (this._type > -1 && this.type < 18) {
				this._type = type;
			} else {
				this._type = Pico.FontStyle.Normal;
			}
		},
		get: function get() {
			return this._type;
		}
	}, {
		key: 'underline',
		set: function set(underline) {
			this._underline = underline;
		},
		get: function get() {
			return this._underline;
		}
	}]);

	return Font;
})();
Pico.Position = (function () {
	function Position(x, y) {
		_classCallCheck(this, Position);

		this._x = x;
		this._y = y;
	}

	_createClass(Position, [{
		key: 'x',
		set: function set(x) {
			this._x = x;
		},
		get: function get() {
			return this._x;
		}
	}, {
		key: 'y',
		set: function set(y) {
			this._y = y;
		},
		get: function get() {
			return this._y;
		}
	}]);

	return Position;
})();
Pico.Size = (function () {
	function Size(width, height) {
		_classCallCheck(this, Size);

		this._width = width;
		this._height = height;
	}

	_createClass(Size, [{
		key: 'width',
		set: function set(width) {
			this._width = width;
		},
		get: function get() {
			return this._width;
		}
	}, {
		key: 'height',
		set: function set(height) {
			this._height = height;
		},
		get: function get() {
			return this._height;
		}
	}]);

	return Size;
})();
Pico.SizeMode = {
	Normal: 1,
	Cover: 2,
	Contain: 3,
	Stretch: 4
};
Pico.UI.Control = (function () {
	function Control() {
		_classCallCheck(this, Control);

		this._size = new Pico.Size(0, 0);
		this._position = new Pico.Position(0, 0);
		this._visible = true;
		this._cursor = Pico.Cursors.Default;
		this._foreground = Pico.Colors.PicoText;
		this._background = Pico.Colors.PicoWindow;
		this._events = {};
		this._listeners = {};
		this._domElement = document.createElement('pico');
		this._domElement.style.width = this._size.width + 'px';
		this._domElement.style.height = this._size.height + 'px';
		this._domElement.style.top = this._position.y + 'px';
		this._domElement.style.left = this._position.x + 'px';
		this._domElement.style.display = this._visible ? 'block' : 'none';
		this._domElement.style.backgroundColor = this._background.toRgba();
		this._domElement.style.color = this._foreground.toRgba();
		this._domElement.style.cursor = this._cursor.style;
		this._domElement.style.overflow = 'hidden';
		this.eventClick = new Pico.UI._Event(this, 'click', true);
		this.eventMouseDown = new Pico.UI._Event(this, 'mousedown', true);
		this.eventMouseUp = new Pico.UI._Event(this, 'mouseup', true);
		this.eventMouseMove = new Pico.UI._Event(this, 'mousemove', true);
		this.eventMouseEnter = new Pico.UI._Event(this, 'mouseenter', true);
		this.eventMouseLeave = new Pico.UI._Event(this, 'mouseleave', true);
		this.eventResized = new Pico.UI._Event(this, 'resized', true);
		this.eventBackgroundChanged = new Pico.UI._Event(this, 'backgroundChanged');
		this.eventForegroundChanged = new Pico.UI._Event(this, 'foregroundChanged');
		this.eventVisibleChanged = new Pico.UI._Event(this, 'visiblechanged');
		this.eventMoved = new Pico.UI._Event(this, 'moved');
	}

	_createClass(Control, [{
		key: 'background',
		set: function set(color) {
			if (_instanceof(color, Pico.Color)) {
				this._background = color;
			} else {
				this._background = new Pico.Color(color);
			}
			this._domElement.style.backgroundColor = this._background.toRgba();
			this.eventBackgroundChanged.trigger();
		},
		get: function get() {
			return Object.create(this._background);
		}
	}, {
		key: 'foreground',
		set: function set(color) {
			if (_instanceof(color, Pico.Color)) {
				this._foreground = color;
			} else {
				this._foreground = new Pico.Color(color);
			}
			this._domElement.style.color = this._foreground.toRgba();
			this.eventForegroundChanged.trigger();
		},
		get: function get() {
			return Object.create(this._foreground);
		}
	}, {
		key: 'cursor',
		set: function set(cursor) {
			if (_instanceof(cursor, Pico.Cursor)) {
				this._cursor = cursor;
				this._domElement.style.cursor = this._cursor.style;
			}
		},
		get: function get() {
			return Object.create(this._cursor);
		}
	}, {
		key: 'position',
		set: function set(position) {
			if (_instanceof(position, Pico.Position)) {
				this._position = position;
				this._domElement.style.top = this._position.y + 'px';
				this._domElement.style.left = this._position.x + 'px';
				this.eventMoved.trigger();
			}
		},
		get: function get() {
			return Object.create(this._position);
		}
	}, {
		key: 'size',
		set: function set(size) {
			if (_instanceof(size, Pico.Size)) {
				this._size = size;
				this._domElement.style.width = this._size.width + 'px';
				this._domElement.style.height = this._size.height + 'px';
				this.eventResized.trigger();
			}
		},
		get: function get() {
			return Object.create(this._size);
		}
	}, {
		key: 'visible',
		set: function set(visible) {
			this._visible = visible;
			this._domElement.style.display = this._visible ? 'block' : 'none';
			this.eventVisibleChanged.trigger();
		},
		get: function get() {
			return this._visible;
		}
	}, {
		key: 'domElement',
		get: function get() {
			return this._domElement;
		}
	}]);

	return Control;
})();
Pico.UI.Label = (function (_Pico$UI$Control) {
	_inherits(Label, _Pico$UI$Control);

	function Label(text) {
		_classCallCheck(this, Label);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Label).call(this));

		_this._text = text === undefined ? '' : text;
		_this._domElement.className = 'pico-label';
		_this._domElement.innerHTML = _this._text;
		_this._font = new Pico.Font();
		_this._alignMode = Pico.AlignMode.Left;
		var cssArgs = _this._font.toCSSArgs();
		_this._domElement.style.fontSize = cssArgs.fontSize;
		_this._domElement.style.fontWeight = cssArgs.fontWeight;
		_this._domElement.style.textDecoration = cssArgs.textDecoration;
		_this._domElement.style.fontStyle = cssArgs.fontStyle;
		_this._domElement.style.fontFamily = cssArgs.fontFamily;
		_this._domElement.style.textAlign = _this._alignMode;
		return _this;
	}

	_createClass(Label, [{
		key: 'font',
		set: function set(font) {
			if (_instanceof(font, Pico.Font)) {
				this._font = font;
				var cssArgs = this._font.toCSSArgs();
				this._domElement.style.fontSize = cssArgs.fontSize;
				this._domElement.style.fontWeight = cssArgs.fontWeight;
				this._domElement.style.textDecoration = cssArgs.textDecoration;
				this._domElement.style.fontStyle = cssArgs.fontStyle;
				this._domElement.style.fontFamily = cssArgs.fontFamily;
			}
		},
		get: function get() {
			return Object.create(this._font);
		}
	}, {
		key: 'text',
		set: function set(text) {
			this._text = text;
			this._domElement.innerHTML = this._text;
		},
		get: function get() {
			return this._text;
		}
	}, {
		key: 'alignMode',
		set: function set(alignMode) {
			this._alignMode = alignMode;
			this._domElement.style.textAlign = this._alignMode;
		},
		get: function get() {
			return this._alignMode;
		}
	}]);

	return Label;
})(Pico.UI.Control);
Pico.UI.LinkLabel = (function (_Pico$UI$Label) {
	_inherits(LinkLabel, _Pico$UI$Label);

	function LinkLabel(text, link) {
		_classCallCheck(this, LinkLabel);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(LinkLabel).call(this, text));

		_this2._href = link;
		_this2.foreground = Pico.Colors.PicoLink;
		var oldfont = _this2.font;
		oldfont.underline = true;
		_this2.font = oldfont;
		_this2.cursor = Pico.Cursors.Pointer;
		var obj = _this2;
		_this2._domElement.addEventListener('click', function (e) {
			window.open(obj._href, 'new');
		});
		return _this2;
	}

	_createClass(LinkLabel, [{
		key: 'href',
		set: function set(href) {
			this._href = href;
		},
		get: function get() {
			return this._href;
		}
	}]);

	return LinkLabel;
})(Pico.UI.Label);
Pico.UI.Panel = (function (_Pico$UI$Control2) {
	_inherits(Panel, _Pico$UI$Control2);

	function Panel() {
		_classCallCheck(this, Panel);

		var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Panel).call(this));

		_this3._domElements = document.createElement('pico');
		_this3._domElements.className = 'pico-elements';
		_this3._domElement.appendChild(_this3._domElements);
		_this3._domElement.className = 'pico-panel';
		_this3._elements = new Pico.UI._Elements(_this3._domElements);
		return _this3;
	}

	_createClass(Panel, [{
		key: 'elements',
		get: function get() {
			return this._elements;
		}
	}]);

	return Panel;
})(Pico.UI.Control);
Pico.UI.Picture = (function (_Pico$UI$Control3) {
	_inherits(Picture, _Pico$UI$Control3);

	function Picture(image) {
		_classCallCheck(this, Picture);

		var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Picture).call(this));

		_this4._image = image;
		_this4._sizeMode = Pico.SizeMode.Normal;
		_this4._imageRepeat = true;
		_this4._domElement.className = 'pico-picture';
		_this4._domElement.style.backgroundImage = 'url(' + _this4._image + ')';
		_this4._alignMode = Pico.AlignMode.Left;
		_this4._verticalAlignMode = Pico.VerticalAlignMode.Top;
		_this4._domElement.style.backgroundPosition = _this4._verticalAlignMode + ' ' + _this4._alignMode;
		_this4._domElement.style.backgroundRepeat = _this4._imageRepeat ? 'repeat' : 'no-repeat';
		return _this4;
	}

	_createClass(Picture, [{
		key: 'image',
		set: function set(image) {
			this._image = image;
			this._domElement.style.backgroundImage = 'url(' + image + ')';
		},
		get: function get() {
			return this._image;
		}
	}, {
		key: 'size',
		set: function set(size) {
			_set(Object.getPrototypeOf(Picture.prototype), 'size', size, this);
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
		},
		get: function get() {
			return _get(Object.getPrototypeOf(Picture.prototype), 'size', this);
		}
	}, {
		key: 'sizeMode',
		set: function set(sizeMode) {
			this._sizeMode = sizeMode;
			this.size = this.size;
		},
		get: function get() {
			return this._sizeMode;
		}
	}, {
		key: 'alignMode',
		set: function set(alignMode) {
			this._alignMode = alignMode;
			this._domElement.style.backgroundPosition = this._verticalAlignMode + ' ' + this._alignMode;
		},
		get: function get() {
			return this._alignMode;
		}
	}, {
		key: 'verticalAlignMode',
		set: function set(verticalAlignMode) {
			this._verticalAlignMode = verticalAlignMode;
			this._domElement.style.backgroundPosition = this._verticalAlignMode + ' ' + this._alignMode;
		},
		get: function get() {
			return this._verticalAlignMode;
		}
	}, {
		key: 'imageRepeat',
		set: function set(imageRepeat) {
			this._imageRepeat = imageRepeat;
			this._domElement.style.backgroundRepeat = this._imageRepeat ? 'repeat' : 'no-repeat';
		},
		get: function get() {
			return this._imageRepeat;
		}
	}]);

	return Picture;
})(Pico.UI.Control);
Pico.UI.Window = (function (_Pico$UI$Panel) {
	_inherits(Window, _Pico$UI$Panel);

	function Window(title) {
		_classCallCheck(this, Window);

		var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(Window).call(this));

		_this5.visible = false;
		_this5._title = title === undefined ? '' : title;
		_this5._titleElement = document.createElement('pico');
		_this5._titleElement.className = 'pico-window-title';
		_this5._titleElement.innerHTML = _this5._title;
		_this5._minimizeElement = document.createElement('pico');
		_this5._minimizeElement.className = 'pico-minimize';
		_this5._minimizeElement.innerHTML = '–︎';
		_this5._domElement.className = 'pico-window';
		_this5._domElement.appendChild(_this5._titleElement);
		_this5._domElement.appendChild(_this5._minimizeElement);
		var diff = {};
		var move = false;
		var open = true;
		var obj = _this5;
		_this5._minimizeElement.addEventListener('click', function (e) {
			if (!open) {
				e.target.innerHTML = '–︎';
				obj._domElement.style.height = obj.size.height + 'px';
				if (obj.position.y + obj.size.height >= window.innerHeight) {
					obj.position = new Pico.Position(obj.position.x, obj.position.y - (obj.position.y + obj.size.height - window.innerHeight));
				}
				obj._elements._domElement.style.display = 'block';
			} else {
				e.target.innerHTML = '◻';
				obj._domElement.style.height = 20 + 'px';
				obj._elements._domElement.style.display = 'none';
			}
			open = !open;
		});
		_this5._titleElement.addEventListener('mousedown', function (e) {
			diff.x = e.offsetX;
			diff.y = e.offsetY;
			move = true;
		});
		var obj = _this5;
		window.addEventListener('mousemove', function (e) {
			if (move) {
				var x = e.pageX;
				var y = e.pageY;
				if (x < 0) {
					x = 0;
				}
				if (y < 0) {
					y = 0;
				}
				if (x < diff.x) {
					diff.x = x;
				}
				if (y <= diff.y) {
					diff.y = y;
				}
				x = x - diff.x;
				y = y - diff.y;
				if (x + obj._titleElement.clientWidth >= window.innerWidth) {
					x = window.innerWidth - obj._titleElement.clientWidth - 1;
				}
				if (y + obj._domElement.clientHeight >= window.innerHeight) {
					y = window.innerHeight - obj._domElement.clientHeight;
				}

				obj.position = new Pico.Position(x, y);
			}
		});
		window.addEventListener('mouseup', function () {
			move = false;
		});
		return _this5;
	}

	_createClass(Window, [{
		key: 'show',
		value: function show() {
			this.visible = true;
			document.body.appendChild(this._domElement);
		}
	}, {
		key: 'hide',
		value: function hide() {
			this.visible = false;
			document.body.removeChild(this._domElement);
		}
	}, {
		key: 'title',
		set: function set(title) {
			this._title = title;
			this._titleElement.innerHTML = this._title;
		},
		get: function get() {
			return this._title;
		}
	}]);

	return Window;
})(Pico.UI.Panel);

Pico.UI._Elements = (function () {
	function Elements(domElement) {
		_classCallCheck(this, Elements);

		this._array = [];
		this._domElement = domElement;
	}

	_createClass(Elements, [{
		key: 'add',
		value: function add() {
			for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
				arg[_key] = arguments[_key];
			}

			for (var i = 0; i < arg.length; i++) {
				this._array.push(arg[i]);
				this._domElement.appendChild(arg[i].domElement);
			}
		}
	}, {
		key: 'get',
		value: function get(i) {
			return this.array[i];
		}
	}, {
		key: 'removeLast',
		value: function removeLast() {
			var item = this._array.pop();
			this._domElement.removeChild(item.domElement);
			return item;
		}
	}, {
		key: 'removeAt',
		value: function removeAt(i) {
			var item = this._array.splice(i, 1);
			this._domElement.removeChild(item.domElement);
			return item;
		}
	}, {
		key: 'addAt',
		value: function addAt(i) {
			for (var _len2 = arguments.length, arg = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
				arg[_key2 - 1] = arguments[_key2];
			}

			var item = this._array.splice(i, 0, arg);
			if (this._domElement.childNodes[i] === this._domElement.lastChild) {
				for (var i = 0; i < arg.length; i++) {
					this._domElement.appendChild(arg[i].domElement);
				}
			} else {
				for (var i = 0; i < arg.length; i++) {
					this._domElement.insertBefore(arg[i].domElement, this._domElement.childNodes[i].nextSibling);
				}
			}
		}
	}]);

	return Elements;
})();
Pico.UI._Event = (function () {
	function Event(control, eventName, jsEvent) {
		_classCallCheck(this, Event);

		this._array = [];
		this._control = control;
		this._jsEvent = jsEvent;
		this._eventName = eventName;
		var obj = this;
		this._listener = function (e) {
			for (var i = 0; i < obj._array.length; i++) {
				obj._array[i](this._control, e);
			}
		};
		this._eventSet = false;
	}

	_createClass(Event, [{
		key: 'add',
		value: function add() {
			for (var _len3 = arguments.length, arg = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				arg[_key3] = arguments[_key3];
			}

			for (var i = 0; i < arg.length; i++) {
				this._array.push(arg[i]);
			}
			if (!this._eventSet) {
				if (this._jsEvent) {
					this._control.domElement.addEventListener(this._eventName, this._listener);
				}
				this._eventSet = true;
			}
		}
	}, {
		key: 'remove',
		value: function remove(ev) {
			if (this._array.indexOf(ev) === -1) {
				this._array.splice(this._array.indexOf(ev), 1);
			}
			if (this._eventSet && this._array.length === 0) {
				if (this._jsEvent) {
					this._control.domElement.removeEventListener(this._eventName, this._listener);
				}
				this._eventSet = false;
			}
		}
	}, {
		key: 'trigger',
		value: function trigger() {
			this._listener(this._control);
		}
	}]);

	return Event;
})();
//# sourceMappingURL=pico.js.map
