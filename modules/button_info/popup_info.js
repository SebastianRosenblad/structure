var popup_info = function(p_unique_name) {
	this.m_class_name = "popup_info";
	this.m_unique_name = p_unique_name;
	
	this.m_template = [
		'<div id="{{unique_name}}" class="{{class_name}} {{unique_name}}">{{content}}</div>'
	].join('\n');
	
	this.m_template_data = {
		class_name: this.m_class_name,
		unique_name: this.m_unique_name,
		content: ""
	};
};
popup_info.prototype = Object.create(base_module.prototype);