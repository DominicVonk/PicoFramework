Pico.UI.Panel = class Panel extends Pico.UI.Control {
	constructor() {
		super();
		this._domElements = Pico.UI._newDomElement();
		this._domElements.className = 'pico-elements';
		this._domElement.appendChild(this._domElements);
		this._domElement.className = 'pico-panel';
		this._elements = new Pico.UI._Elements(this._domElements);
	}
	get elements() {
		return this._elements;
	}

}