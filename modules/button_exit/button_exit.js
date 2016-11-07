var button_exit = function() {
	this.m_class_name = "button_exit";
	
	this.m_template = [
		'<div id="{{id_name}}">{{content}}</div>'
	].join('\n');
	
	this.m_template_data = {
		id_name: this.m_class_name,
		content: "Exit"
	};
};
button_exit.prototype = Object.create(base_module.prototype);