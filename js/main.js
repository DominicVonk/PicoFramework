var obj = new Pico.UI.Label('boo');
var win = new Pico.UI.Window('Title');

win.elements.add(obj);
win.size = new Pico.Size(100,100);
win.position = new Pico.Position(200, 201);
win.show();
obj.visible = true;
obj.size = new Pico.Size(20, 20);
obj.position = new Pico.Position(10, 10);