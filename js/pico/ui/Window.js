Pico.UI.Window = class Window extends Pico.UI.Panel {
	constructor(title) {
		super();
		this.visible = false;
		this._title = title === undefined ? '' : title;
		this._titleElement = Pico.UI._newDomElement();
		this._titleElement.className = 'pico-window-title';
		this._titleElement.innerHTML = this._title;
		this._minimizeElement = Pico.UI._newDomElement();
		this._minimizeElement.className = 'pico-minimize';
		this._minimizeElement.innerHTML = '–︎';
		this._domElement.className = 'pico-window';
		this._domElement.appendChild(this._titleElement);
		this._domElement.appendChild(this._minimizeElement);
		var diff = {};
		var move = false;
		var open = true;
		var obj = this;
		this._minimizeElement.addEventListener('click', function(e) {
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
		this._titleElement.addEventListener('mousedown', function(e) {
			diff.x = e.offsetX;
			diff.y = e.offsetY;
			move = true;
		});
		var obj = this;
		window.addEventListener('mousemove', function(e) {
			if (move) {
				var x = e.pageX;
				var y = e.pageY;
				x = x-diff.x;
				y = y-diff.y;
				if (x < 0) {
					x = 0;
				}
				if (y < 0) {
					y = 0;
				}
				if (x + obj._titleElement.clientWidth >= window.innerWidth) {
					x = window.innerWidth - obj._titleElement.clientWidth-1;
				}
				if (y + obj._domElement.clientHeight >= window.innerHeight) {
					y = window.innerHeight - obj._domElement.clientHeight;
				}
				
				obj.position = new Pico.Position(x, y);
			}
		});
		window.addEventListener('mouseup', function() {
			move = false;
		})
	}
	set title(title) {
		this._title = title;
		this._titleElement.innerHTML = this._title;
	}
	get title() {
		return this._title;
	}
	show() {
		this.visible = true;
		document.body.appendChild(this._domElement);
	}
	hide() {
		this.visible = false;
		document.body.removeChild(this._domElement);
	}
}
		