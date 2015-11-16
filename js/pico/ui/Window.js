Pico.UI.Window = class Window extends Pico.UI.Panel {
	constructor(title) {
		super();
		/* Private variable name declaration */
		this._private.title = Symbol();
		this._private.titleElement = Symbol();
		this._private.minimizeElement = Symbol();
		/* End private variable name declaration */
		this.visible = false;
		this.private('title', title === undefined ? '' : title);
		this.private('titleElement', Pico.UI._newDomElement());
		this.private('titleElement').className = 'pico-window-title';
		this.private('titleElement').innerHTML = this.private('title');
		this.private('minimizeElement', Pico.UI._newDomElement());
		this.private('minimizeElement').className = 'pico-minimize';
		this.private('minimizeElement').innerHTML = '–︎';
		this.private('domElement').className = 'pico-window';
		this.private('domElement').appendChild(this.private('titleElement'));
		this.private('domElement').appendChild(this.private('minimizeElement'));
		var diff = {};
		var move = false;
		var open = true;
		var obj = this;
		this.private('minimizeElement').addEventListener('click', function(e) {
			if (!open) {
				e.target.innerHTML = '–︎';
				obj.private('domElement').style.height = obj.size.height + 'px';
				if (obj.position.y + obj.size.height >= window.innerHeight) {
					obj.position = new Pico.Position(obj.position.x, obj.position.y - (obj.position.y + obj.size.height - window.innerHeight));
				}
				obj.private('elements')._domElement.style.display = 'block';
			} else {
				e.target.innerHTML = '◻';
				obj.private('domElement').style.height = 20 + 'px';
				obj.private('elements')._domElement.style.display = 'none';
			}
			open = !open;
		});
		this.private('titleElement').addEventListener('mousedown', function(e) {
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
				if (x + obj.private('titleElement').clientWidth >= window.innerWidth) {
					x = window.innerWidth - obj.private('titleElement').clientWidth-1;
				}
				if (y + obj.private('domElement').clientHeight >= window.innerHeight) {
					y = window.innerHeight - obj.private('domElement').clientHeight;
				}
				
				obj.position = new Pico.Position(x, y);
			}
		});
		window.addEventListener('mouseup', function() {
			move = false;
		})
	}
	set title(title) {
		this.private('title', title);
		this.private('titleElement').innerHTML = this.private('title');
	}
	get title() {
		return this.private('title');
	}
	show() {
		this.visible = true;
		document.body.appendChild(this.private('domElement'));
	}
	hide() {
		this.visible = false;
		document.body.removeChild(this.private('domElement'));
	}
}
		