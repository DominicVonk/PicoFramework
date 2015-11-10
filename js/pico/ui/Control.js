Pico.UI.Control = class Control {
	constructor() {
		this._events = {};
		this._listeners = {};
		this._domElement = document.createElement('pico');
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
		this._domElement.style.overflow = 'hidden';
		this.size = new Pico.Size(0,0);
		this.position = new Pico.Position(0,0);
		this.padding = new Pico.Padding(0);
		this.margin = new Pico.Margin(0);
		this.visible = true;
		this.cursor = Pico.Cursors.Default;
		this.foreground = Pico.Colors.PicoText;
		this.background = Pico.Colors.PicoWindow;
	}

	set margin(margin) {
		if (margin instanceof Pico.Margin) {
			this._margin = new Pico.Margin(margin.top, margin.left, margin.bottom, margin.right, this);
		}
	}
	get margin() {
		return this._margin;
	}
	set padding(padding) {
		if (padding instanceof Pico.Padding) {
			this._padding = new Pico.Padding(padding.top, padding.left, padding.bottom, padding.right, this);
		}
	}
	get padding() {
		return this._padding;
	}
	set background(color) {
		if (color instanceof Pico.Color) {
			this._background = color;
		} else {
			this._background = new Pico.Color(color);
		}
		this._domElement.style.backgroundColor = this._background.toRgba();
		this.eventBackgroundChanged.trigger();
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
		this.eventForegroundChanged.trigger();
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
			this._position = new Pico.Position(position.x, position.y, this);
			this.eventMoved.trigger();
		}
	}
	get position() {
		return this._position;
	}

	set size(size) {
		if (size instanceof Pico.Size) {
			this._size = new Pico.Size(size.width, size.height, this);
			this.eventResized.trigger();
		}
	}
	get size() {
		return this._size;
	}

	set visible(visible) {
		this._visible = visible;
		this._domElement.style.display = this._visible ? 'block' : 'none';
		this.eventVisibleChanged.trigger();
	}
	get visible() {
		return this._visible;
	}

	get domElement() {
		return this._domElement;
	}
}