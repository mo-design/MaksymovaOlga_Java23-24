define(
	'controller',
	['model', 'view'],
	function() {
		function Controller(model, view) {

		
		var self = this;
		
		view.elements.addBtn.on('click', addItem);
		view.elements.listContainer.on('click', '.item-delete', removeItem);
		view.elements.listContainer.on('click', '.item-edit', editItem);
		
		
		$(".item-value").keypress(function(e){
	     	 if(e.keyCode==13){
	     	addItem();
	     	}
	    });
			 
			 	 
		
		function addItem(){
			
			var newItem = view.elements.input.val();
			model.addItem(newItem);
			view.renderList(model.data);
			view.elements.input.val('');
			
		};
		
		function removeItem(){
			
			var item = $(this).attr('data-value');
			model.removeItem(item);
			view.renderList(model.data);
			
		};
		
		
		
		function editItem(){
			
			var item = $(this).attr('data-value');
			var newItem = prompt('Здесь можно изменить текст ;-)');
			if (newItem.length > 0) {model.editItem(item, newItem);};
			view.renderList(model.data);
			
		};
		
		
		
		}
		return Controller;
	}
);
