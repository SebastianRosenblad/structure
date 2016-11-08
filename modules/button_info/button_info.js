var button_info = function(p_unique_name) {
	this.m_class_name = "button_info";
	this.m_unique_name = p_unique_name;
	
	this.m_template = [
		'<div id="{{id_name}}">{{content}}</div>'
	].join('\n');
	
	this.m_template_data = {
		id_name: this.m_class_name,
		content: ""
	};
};
button_info.prototype = Object.create(base_module.prototype);

button_info.prototype.specific_initialize = function(p_append) {
	new Opentip("#" + this.m_class_name, "Help", { style: "ui_help" });
};