requirejs.config({
	paths: {
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min',
		'tmpl': 'lib/tmpl',
		'model': 'app/model',
		'view': 'app/view',
		'controller': 'app/controller'
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		},
		'tmpl': {
			exports: 'tmpl'
		}
	}
});

require(
	['jquery', 
	'tmpl', 
	'model', 
	'view', 
	'controller'],
	
	
	function ($, tmpl, model, view, controller) {
		
		var firstToDoList = ['1. Wake up and make coffee', 'Что-то еще нужно было сегодня сделать...'];
		var model = new model(firstToDoList);
		var view = new view(model);
		var controller = new controller(model, view);
	}
	
);