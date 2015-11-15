Pico.UI.ProgressBar = class ProgressBar extends Pico.UI.Control {
	constructor(percentage, min, max) {
		super();
		this._innerDom = Pico.UI._newDomElement();
		this._minimum = typeof min !== "undefined" ? min : 0;
		this._maximum = typeof max !== "undefined" ? max : 100;
		this._percentage = typeof percentage !== "undefined" ? percentage : 0;
		if (this._percentage < min) {
			this._percentage = min;
		}
		if (this._percentage > max) {
			this._percentage = max;
		}
		this._domElement.className = 'pico-progressbar';
		this._innerDom.className = 'pico-progressbar-inner';
		this._innerDom.style.height = '100%';
		this._domElement.appendChild(this._innerDom);
		this._apply();
	}
	set percentage(percentage) {
		this._percentage = percentage;
		this._apply();
	}
	get percentage() {
		return this._percentage;
	}
	set minimum(minimum) {
		this._minimum = minimum;
		this._apply();
	}
	get minimum() {
		return this._minimum;
	}
	set maximum(maximum) {
		this._maximum = maximum;
		this._apply();
	}
	get maximum() {
		return this._maximum;
	}
	set size(size) {
		super.size = size;
		if (typeof this._innerDom !== "undefined") {
			this._apply();
		}
	}
	get size() {
		return super.size;
	}
	_apply() {
		this._innerDom.style.width = ((this._percentage - this._minimum) / (this._maximum - this._minimum) * this.size.width) + 'px';
	}
}