
// A wrapper function for accessing form elements using objects

function Bindr(elemID){
	this.elem = document.getElementById(elemID);
	this.val = function(){
		return this.elem.innerHTML;
	}
};

function BindrHandlr(){
	this.handles = {
		'span': function(){
			
		}
	}
}
