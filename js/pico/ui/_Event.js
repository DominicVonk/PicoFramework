Pico.UI._Event = class Event {
	constructor(control, eventName, jsEvent)  {
		this._array = [];
		this._control = control;
		this._jsEvent = jsEvent;
		this._eventName = eventName;
		var obj = this;
		this._listener = function(e) {
			for (var i = 0; i < obj._array.length; i++) {
				obj._array[i](this._control, e);
			}
		};
		this._eventSet = false;
	}
	add(...arg) {
		for(var i = 0; i < arg.length; i++) {
			this._array.push(arg[i]);
		}
		if (!this._eventSet) {
			if (this._jsEvent) {
				this._control.private('domElement').addEventListener(this._eventName, this._listener);
			}
			this._eventSet = true;
		}
	}
	remove(ev) {
		if (this._array.indexOf(ev) === -1) {
			this._array.splice(this._array.indexOf(ev), 1);
		}
		if (this._eventSet && this._array.length === 0) {
			if (this._jsEvent) {
				this._control.private('domElement').removeEventListener(this._eventName, this._listener);
			}
			this._eventSet = false;
		}
	}
	trigger() {
		this._listener(this._control);
	}
}