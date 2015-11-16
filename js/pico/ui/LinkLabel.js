Pico.UI.LinkLabel = class LinkLabel extends Pico.UI.Label {
	constructor(text, link) {
		super(text);
		/* Private variable name declaration */
		this._private.href = Symbol();
		/* End private variable name declaration */
		this.private('domElement').className = 'pico-linklabel';
		this.private('href', link);
		this.foreground = Pico.Colors.PicoLink;
		var oldfont = this.font;
		oldfont.underline = true;
		this.font = oldfont;
		this.cursor = Pico.Cursors.Pointer;
		var obj = this;
		this._domElement.addEventListener('click', function(e) {
			window.open(obj.private('href'), 'new');
		});
	}
	set href(href) {
		this.private('href', href);
	}
	get href() {
		return this.private('href');
	}
}