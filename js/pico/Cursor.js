Pico.Cursor = class Cursor {
	constructor(name, noImage) {
		this._name = name;
		this._noImage = noImage;
	}
	set image(image) {
		this._name = image;
		this._noImage = false;
	}
	get image() {
		return this._name;
	}
	get style() {
		if (this._noImage) {
			return this._name;
		} else {
			return 'url(' + this._name + ')';
		}
	}
}

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