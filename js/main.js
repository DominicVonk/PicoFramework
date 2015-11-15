var mainForm = new Pico.UI.Window('MainForm');
mainForm.size = new Pico.Size(300,300);
mainForm.position = new Pico.Position(40, 40);
var label = new Pico.UI.TextBox();
label.size = new Pico.Size(200, 20);
label.position = new Pico.Position(20, 20);

var linkLabel = new Pico.UI.CheckBox('google');
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

var button = new Pico.UI.Button('Hallo');
button.size = new Pico.Size(60,24);
button.position = new Pico.Position(100,200);
button.alignMode = Pico.AlignMode.Center;

var progress = new Pico.UI.ProgressBar(10);
progress.size = new Pico.Size(100, 10);
progress.position = new Pico.Position(190, 200);

mainForm.elements.add(progress);
mainForm.elements.add(label, linkLabel, picture, button);
mainForm.show();