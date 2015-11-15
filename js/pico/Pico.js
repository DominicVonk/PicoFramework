if (!Object.create) {
	Object.create = function(proto) {
	    function F(){}
	    F.prototype = proto;
	    return new F;
	}
}

var Pico = {
	UI: {
		_newDomElement: function() {
			var domElement = document.createElement('pico');
			return domElement;
		}
	}
};