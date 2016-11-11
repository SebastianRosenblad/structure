var button_nav_forward = function(p_unique_name, p_parent_name, p_classes) {
	this.m_class_name = "button_nav_forward";
	this.m_unique_name = p_unique_name;
	
	p_classes = p_classes == undefined ? [] : p_classes;
	
	var template = [
		'<div id="{{unique_name}}" class="{{class_name}} {{unique_name}} {{style_classes}}">{{content}}</div>'
	].join('\n');
	var expressions = {
		unique_name: this.m_unique_name,
		class_name: this.m_class_name,
		style_classes: p_classes.join(" "),
		content: ""
	};
	this._append_html(expressions, template, p_parent_name);
};
button_nav_forward.prototype = Object.create(base_module.prototype);