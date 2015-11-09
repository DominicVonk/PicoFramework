var mainForm = new Pico.UI.Window('MainForm');
mainForm.size = new Pico.Size(300,300);
mainForm.position = new Pico.Position(40, 40);
var label = new Pico.UI.Label('Boo');
label.size = new Pico.Size(40, 20);
label.position = new Pico.Position(20, 20);


var linkLabel = new Pico.UI.LinkLabel('google', 'http://www.google.nl');
linkLabel.size = new Pico.Size(60, 20);
linkLabel.position = new Pico.Position(20, 40);


var picture = new Pico.UI.Picture('img/cappuccino.jpg');
picture.size = new Pico.Size(80, 80);
picture.position = new Pico.Position(100, 100);
picture.sizeMode = Pico.SizeMode.Cover;
picture.verticalAlignMode = Pico.VerticalAlignMode.Center;
picture.alignMode = Pico.AlignMode.Center;
picture.eventClick.add(function() {
	alert('clicked');
});
mainForm.elements.add(label, linkLabel, picture);
mainForm.show();