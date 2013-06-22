Ti.UI.currentWindow.addEventListener('focus', function() {
	init();
});

var getData = function() {
	var db = Ti.Database.open('mydb');
	var rows = db.execute('select * from text');
	var data = [];

	while (rows.isValidRow()) {
		var v = {title: rows.field(0)};
		data.push(v);
		rows.next();
	}

	rows.close();
	db.close();	
	return data;
};

var init = function() {
	var table = Ti.UI.createTableView({
		data: getData(),
		touchEnabled : false
	});
	
	var view = Ti.UI.createView();
	view.add(table);
	Ti.UI.currentWindow.add(view);
};