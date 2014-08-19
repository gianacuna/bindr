
// A wrapper function for accessing form elements using objects

var Bindr = Bindr || {};

Bindr.Bindr =  function (elemID){
	this.elem = document.getElementById(elemID);
	this.val = function(){
		var handlr = Bindr.Get(this.elem.type);
		return handlr(this.elem);
	};
	this.set = function(val){

	}
};

Bindr.Get = function(elemName){
	this.handles = {
		'text': function(elem){
			return elem.value;
		},
		'textarea': function(elem){
			return elem.value;
		}
		'checkbox': function(elem){
			return elem.checked;
		},
		'radio': function(elem){
			return document.querySelector('input[name = "' + elem.name + '"]:checked').value;
		}
	};

	return this.handles[elemName];
}

Bindr.Set = function(elemName){
	this.handles = {
		'text': function(elem, val){
			elem.value = val;
		},
		'textarea': function(elem, val){
			elem.value = val;
		},
		'checkbox': function(elem, val){
			elem.checked = val;
		},
		'radio': function(elem, val){
			var radios = document.querySelectorAll('input[name = "' + elem.name + '"]:checked').value;
			for(var i = 0; i <= radios.length; i++)
			{
				if (radios[i].value == val){
					radios[i].checked = true;
				}
			}
		}
	};
}
