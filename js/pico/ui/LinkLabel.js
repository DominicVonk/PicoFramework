Pico.UI.LinkLabel = class LinkLabel extends Pico.UI.Label {
	constructor(text, link) {
		super(text);
		this._href = link;
		this.foreground = Pico.Colors.PicoLink;
		var oldfont = this.font;
		oldfont.underline = true;
		this.font = oldfont;
		this.cursor = Pico.Cursors.Pointer;
		var obj = this;
		this._domElement.addEventListener('click', function(e) {
			window.open(obj._href, 'new');
		});
	}
	set href(href) {
		this._href = href;
	}
	get href() {
		return this._href;
	}
}