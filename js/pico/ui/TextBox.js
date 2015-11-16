Pico.UI.TextBox = class TextBox extends Pico.UI.Label {
	constructor(defaultText) {
		super(defaultText);
		/* Private variable name declaration */
		this._private.multiline = Symbol();
		/* End private variable name declaration */
		this.private('domElement').style.border = '1px solid #686868';
		this.padding = new Pico.Padding(5,5,5,5);
		this.private('domElement').contentEditable = true;
		this.private('domElement').style.outline = '0';
		this.private('domElement').className = "pico-textbox";
		this.eventTextChanged = new Pico.UI._Event(this, 'textchanged');
		var obj = this;
		this.private('multiline', false);
		this.private('domElement').addEventListener('keydown', function(e) {
			if (!obj.private('multiline')) {
				if (e.keyCode == 13) {
					e.preventDefault();
				}
			}
		});
		this.private('domElement').addEventListener('paste', function (e) {
    		e.preventDefault();
    		var data = e.clipboardData.getData("text/plain");
    		if (!obj.private('multiline')) {
    			data = data.replace(/\r\n/g, ' ').replace(/\n/g, ' ');
    		}
    		document.execCommand('inserttext', false, data);
    		obj.eventTextChanged.trigger();
		});
		this.private('domElement').addEventListener('keyup', function() {
			obj.private('text', obj.private('domElement').innerHTML.replace(/<div>(.*?)<\/div>/g, '$1\n').replace(/<br>/g, '\n'));
			obj.eventTextChanged.trigger();
		});
	}

	set text(text) {
		this.private('text', text);
		this.private('domElement').innerHTML = this._text.replace(/\n/g, '<br>');
	}
	get text() {
		return this.private('text');
	}
	set multiline(multiline) {
		this.private('multiline', multiline);
	}

	get multiline() {
		return this.private('multiline');
	}
};