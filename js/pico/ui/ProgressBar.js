Pico.UI.ProgressBar = class ProgressBar extends Pico.UI.Control {
	constructor(percentage, min, max) {
		super();
		/* Private variable name declaration */
		this._private.innerDom = Symbol();
		this._private.minimum = Symbol();
		this._private.maximum = Symbol();
		this._private.percentage = Symbol();
		/* End private variable name declaration */
		this.private('innerDom', Pico.UI._newDomElement());
		this.private('minimum', typeof min !== "undefined" ? min : 0);
		this.private('maximum', typeof max !== "undefined" ? max : 100);
		this.private('percentage', typeof percentage !== "undefined" ? percentage : 0);
		if (this.private('percentage') < min) {
			this.private('percentage', min);
		}
		if (this.private('percentage') > max) {
			this.private('percentage', max);
		}
		this.private('domElement').className = 'pico-progressbar';
		this.private('innerDom').className = 'pico-progressbar-inner';
		this.private('innerDom').style.height = '100%';
		this.private('domElement').appendChild(this.private('innerDom'));
		this._apply();
	}
	set percentage(percentage) {
		this.private('percentage', percentage);
		this._apply();
	}
	get percentage() {
		return this.private('percentage');
	}
	set minimum(minimum) {
		this.private('minimum', minimum);
		this._apply();
	}
	get minimum() {
		return this.private('minimum');
	}
	set maximum(maximum) {
		this.private('maximum', maximum);
		this._apply();
	}
	get maximum() {
		return this.private('maximum');
	}
	set size(size) {
		super.size = size;
		if (typeof this.private('innerDom') !== "undefined") {
			this._apply();
		}
	}
	get size() {
		return super.size;
	}
	_apply() {
		this.private('innerDom').style.width = ((this.private('percentage') - this.private('minimum')) / (this.private('maximum') - this.private('minimum')) * this.size.width) + 'px';
	}
}