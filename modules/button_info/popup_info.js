var popup_info = function(p_unique_name, p_parent_name) {
	this.m_class_name = "popup_info";
	this.m_unique_name = p_unique_name;
	
	var template = [
		'<div id="{{unique_name}}" class="{{class_name}} {{unique_name}}">{{content}}</div>'
	].join('\n');
	var expressions = {
		class_name: this.m_class_name,
		unique_name: this.m_unique_name,
		content: ""
	};
	this._append_html(expressions, template, p_parent_name);
};
popup_info.prototype = Object.create(base_module.prototype);