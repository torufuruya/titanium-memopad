var view = Ti.UI.createView();
var tf = Ti.UI.createTextField({
	color: '#333333',
	hintText: 'write a memo',
	height: 35,
	width: 300,
	top: 10,
	left: 10,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
var button = Ti.UI.createButton({
	title: 'save',
	top: 55,
	left: 10,
	width: 100,
	height: 50
});
button.addEventListener('click', function(e) {
	var db = Ti.Database.open('mydb');
	var input = tf.getValue();
	db.execute('insert into text (title) values (?)', input);
	db.close();
})

view.add(tf);
view.add(button);
Ti.UI.currentWindow.add(view);