Pico.UI.TextBox = class TextBox extends Pico.UI.Label {
	constructor(defaultText) {
		super(defaultText);
		this._domElement.style.border = '1px solid #686868';
		this.padding = new Pico.Padding(5,5,5,5);
		this._domElement.contentEditable = true;
		this._domElement.style.outline = '0';
		this._domElement.className = "pico-textbox";
		var obj = this;
		this._multiline = false;
		this._domElement.addEventListener('keydown', function(e) {
			if (!obj._multiline) {
				if (e.keyCode == 13) {
					e.preventDefault();
				}
			}
		});
		this._domElement.addEventListener('paste', function (e) {
    		e.preventDefault();
    		var data = e.clipboardData.getData("text/plain");
    		if (!obj._multiline) {
    			data = data.replace(/\r\n/g, ' ').replace(/\n/g, ' ');
    		}
    		document.execCommand('inserttext', false, data);
		});
		this._domElement.addEventListener('keyup', function() {
			obj._text = obj._domElement.innerHTML.replace(/<div>(.*?)<\/div>/g, '$1\n').replace(/<br>/g, '\n');
		});
	}

	set text(text) {
		this._text = text;
		this._domElement.innerHTML = this._text.replace(/\n/g, '<br>');
	}
	get text() {
		return this._text;
	}
	set multiline(multiline) {
		this._multiline = multiline;
	}

	get multiline() {
		return this._multiline;
	}
};