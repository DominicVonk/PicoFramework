Pico.UI.Panel = class Panel extends Pico.UI.Control {
	constructor() {
		super();
		/* Private variable name declaration */
		this._private.elements = Symbol();
		this._private.domElements = Symbol();
		/* End private variable name declaration */
		this.private('domElements', Pico.UI._newDomElement());
		this.private('domElements').className = 'pico-elements';
		this.private('domElement').appendChild(this.private('domElements'));
		this.private('domElement').className = 'pico-panel';
		this.private('elements', new Pico.UI._Elements(this.private('domElements')));
	}
	get elements() {
		return this.private('elements');
	}

}