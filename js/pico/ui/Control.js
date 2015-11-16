/* Private names */
Pico.UI.Control = class Control {
	constructor() {
		/* Private variable name declaration */
		this._private = {};
		this._private.events = Symbol();
		this._private.listeners = Symbol();
		this._private.domElement = Symbol();
		this._private.margin = Symbol();
		this._private.padding = Symbol();
		this._private.background = Symbol();
		this._private.foreground = Symbol();
		this._private.cursor = Symbol();
		this._private.position = Symbol();
		this._private.size = Symbol();
		this._private.visible = Symbol();
		/* End private variable name declaration */

		this.private('events', {});
		this.private('listeners', {});
		this.private('domElement', Pico.UI._newDomElement());
		this.private('domElement').style.overflow = 'hidden';
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
		this.size = new Pico.Size(0,0);
		this.position = new Pico.Position(0,0);
		this.padding = new Pico.Padding(0);
		this.margin = new Pico.Margin(0);
		this.visible = true;
		this.cursor = Pico.Cursors.Default;
		this.foreground = Pico.Colors.PicoText;
		this.background = Pico.Colors.PicoWindow;
	}
	private (get, set) {
		if (typeof set !== "undefined") {
			this[this._private[get]] = set;
		}
		return this[this._private[get]];
	}
	set margin(margin) {
		if (margin instanceof Pico.Margin) {
			this.private('margin', new Pico.Margin(margin.top, margin.left, margin.bottom, margin.right, this));
		}
	}
	get margin() {
		return this.private('margin');
	}
	set padding(padding) {
		if (padding instanceof Pico.Padding) {
			this.private('padding', new Pico.Padding(padding.top, padding.left, padding.bottom, padding.right, this));
		}
	}
	get padding() {
		return this.private('padding');
	}
	set background(color) {
		if (color instanceof Pico.Color) {
			this.private('background', color);
		} else {
			this.private('background', new Pico.Color(color));
		}
		this.private('domElement').style.backgroundColor = this.private('background').toRgba();
		this.eventBackgroundChanged.trigger();
	}
	get background() {
		return Object.create(this.private('background'));
	}

	set foreground(color) {
		if (color instanceof Pico.Color) {
			this.private('foreground', color);
		} else {
			this.private('foreground', new Pico.Color(color));
		}
		this.private('domElement').style.color = this.private('foreground').toRgba();
		this.eventForegroundChanged.trigger();
	}
	get foreground() {
		return Object.create(this.private('foreground'));
	}

	set cursor(cursor) {
		if (cursor instanceof Pico.Cursor) {
			this.private('cursor', cursor);
			this.private('domElement').style.cursor = this.private('cursor').style;
		}
	}
	get cursor() {
		return Object.create(this.private('cursor'));
	}

	set position(position) {
		if (position instanceof Pico.Position) {
			this.private('position', new Pico.Position(position.x, position.y, this));
			this.eventMoved.trigger();
		}
	}
	get position() {
		return this.private('position');
	}

	set size(size) {
		if (size instanceof Pico.Size) {
			this.private('size', new Pico.Size(size.width, size.height, this));
			this.eventResized.trigger();
		}
	}
	get size() {
		return this.private('size');
	}

	set visible(visible) {
		this.private('visible', visible);
		this.private('domElement').style.display = this.private('visible') ? 'block' : 'none';
		this.eventVisibleChanged.trigger();
	}
	get visible() {
		return this.private('visible');
	}

}