
// A wrapper function for accessing form elements using objects

var Bindr = Bindr || {};

Bindr.Bindr =  function (elemID){
	this.elem = document.getElementById(elemID);
	this.val = function(){
		var handlr = Bindr.BindrHandlr(this.elem.type);
		return handlr(this.elem);
	}
};

Bindr.BindrHandlr = function(elemName){
	this.handles = {
		'text': function(elem){
			return elem.value;
		},
		'checkbox': function(elem){
			return elem.checked;
		},
		'radio': function(elem){
			return document.querySelector('input[name = "' + elem.name + '"]:checked').value;
		}
	};

	return this.handles[elemName];
}
