Pico.UI.Button = class Button extends Pico.UI.Label {
	constructor(text) {
		super(text);
		this.private('domElement').style.borderRadius = '3px';
		this.padding = new Pico.Padding(5,5,5,5);
		this.background = new Pico.Color(70, 70, 70);
		this.private('domElement').className = 'pico-button';
		this.cursor = Pico.Cursors.Pointer;
		this.private('domElement').style.mozTransition = 'background-image 300ms ease';
		this.private('domElement').style.webkitTransition = 'background-image 300ms ease';
		this.private('domElement').style.msTransition = 'background-image 300ms ease';
		this.private('domElement').style.oTransition = 'background-image 300ms ease';
		this.private('domElement').style.backgroundImage = 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHByZXNlcnZlQXNwZWN0UmF0aW89ImZhbHNlIj48ZGVmcz4gPGxpbmVhckdyYWRpZW50IGlkPSJsZ3JhZCIgeDE9IjUwJSIgeTE9IjEwMCUiIHgyPSI1MCUiIHkyPSIwJSIgPiA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMCwwLDApO3N0b3Atb3BhY2l0eTowLjEiIC8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjU1LDI1NSwyNTUpO3N0b3Atb3BhY2l0eTowLjEiIC8+PC9saW5lYXJHcmFkaWVudD4gPC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjbGdyYWQpIi8+PC9zdmc+)';
		var obj = this;
		this.private('domElement').addEventListener('mouseenter', function() {
			obj.private('domElement').style.backgroundImage = 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHByZXNlcnZlQXNwZWN0UmF0aW89ImZhbHNlIj48ZGVmcz4gPGxpbmVhckdyYWRpZW50IGlkPSJsZ3JhZCIgeDE9IjUwJSIgeTE9IjEwMCUiIHgyPSI1MCUiIHkyPSIwJSIgPiA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjU1LDI1NSwyNTUpO3N0b3Atb3BhY2l0eTowLjEiIC8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMCwwLDApO3N0b3Atb3BhY2l0eTowLjEiIC8+PC9saW5lYXJHcmFkaWVudD4gPC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjbGdyYWQpIi8+PC9zdmc+)';
		});
		this.private('domElement').addEventListener('mouseleave', function() {
			obj.private('domElement').style.backgroundImage = 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHByZXNlcnZlQXNwZWN0UmF0aW89ImZhbHNlIj48ZGVmcz4gPGxpbmVhckdyYWRpZW50IGlkPSJsZ3JhZCIgeDE9IjUwJSIgeTE9IjEwMCUiIHgyPSI1MCUiIHkyPSIwJSIgPiA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMCwwLDApO3N0b3Atb3BhY2l0eTowLjEiIC8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjU1LDI1NSwyNTUpO3N0b3Atb3BhY2l0eTowLjEiIC8+PC9saW5lYXJHcmFkaWVudD4gPC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjbGdyYWQpIi8+PC9zdmc+)';
		});
	}
};
