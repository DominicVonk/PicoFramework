Pico.UI.PicoObject = class PicoObject {
	constructor() {
		this._size = new Pico.Size(0,0);
		this._position = new Pico.Position(0,0);
		this._visible = true;
		this._cursor = Pico.Cursors.Default;
		this._foreground = Pico.Colors.PicoText;
		this._background = Pico.Colors.PicoWindow;
		this._domElement = document.createElement('pico');
		this._domElement.style.width = this._size.width+ 'px';
		this._domElement.style.height = this._size.height+ 'px';
		this._domElement.style.top = this._position.y+ 'px';
		this._domElement.style.left = this._position.x+ 'px';
		this._domElement.style.display = this._visible ? 'block' : 'none';
		this._domElement.style.backgroundColor = this._background.toRgba();
		this._domElement.style.color = this._foreground.toRgba();
		this._domElement.style.cursor = this._cursor.style;
		this._domElement.style.overflow = 'hidden';
	}

	set background(color) {
		if (color instanceof Pico.Color) {
			this._background = color;
		} else {
			this._background = new Pico.Color(color);
		}
		this._domElement.style.backgroundColor = this._background.toRgba();
	}
	get background() {
		return Object.create(this._background);
	}

	set foreground(color) {
		if (color instanceof Pico.Color) {
			this._foreground = color;
		} else {
			this._foreground = new Pico.Color(color);
		}
		this._domElement.style.color = this._foreground.toRgba();
	}
	get foreground() {
		return Object.create(this._foreground);
	}

	set cursor(cursor) {
		if (cursor instanceof Pico.Cursor) {
			this._cursor = cursor;
			this._domElement.style.cursor = this._cursor.style;
		}
	}
	get cursor() {
		return Object.create(this._cursor);
	}

	set position(position) {
		if (position instanceof Pico.Position) {
			this._position = position;
			this._domElement.style.top = this._position.y + 'px';
			this._domElement.style.left = this._position.x + 'px';
		}
	}
	get position() {
		return Object.create(this._position);
	}

	set size(size) {
		if (size instanceof Pico.Size) {
			this._size = size;
			this._domElement.style.width = this._size.width+ 'px';
			this._domElement.style.height = this._size.height+ 'px';
		}
	}
	get size() {
		return Object.create(this._size);
	}

	set visible(visible) {
		this._visible = visible;
		this._domElement.style.display = this._visible ? 'block' : 'none';
	}
	get visible() {
		return this._visible;
	}

	get domElement() {
		return this._domElement;
	}
}