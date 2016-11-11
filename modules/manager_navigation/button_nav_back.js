var button_nav_back = function(p_unique_name, p_parent_name, p_classes) {
	this.m_class_name = "button_nav_back";
	this.m_unique_name = p_unique_name;
	
	p_classes = p_classes == undefined ? [] : p_classes;
	
	var template = [
		'<div id="{{unique_name}}" class="{{style_classes}} {{class_name}} {{unique_name}}">{{content}}</div>'
	].join('\n');
	var expressions = {
		unique_name: this.m_unique_name,
		class_name: this.m_class_name,
		style_classes: p_classes.join(" "),
		content: ""
	};
	this._append_html(expressions, template, p_parent_name);
};
button_nav_back.prototype = Object.create(base_module.prototype);