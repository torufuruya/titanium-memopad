var tabGroup = Ti.UI.createTabGroup();

var win1 = Ti.UI.createWindow({
	url: 'win1.js',
	title: 'Memo',
	backgroundColor: '#888'
});

var win2 = Ti.UI.createWindow({
	url: 'win2.js',
	title: 'List',
	backgroundColor: '#444'
});

var tab1 = Ti.UI.createTab({
	icon: 'KS_nav_views.png',
	title: 'Memo',
	window: win1,
});

var tab2 = Ti.UI.createTab({
	icon: 'KS_nav_ui.png',
	title: 'List',
	window: win2,
});

var db = Ti.Database.open('mydb');
db.execute('create table if not exists text (title text)');
db.execute('delete from text');

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.open();