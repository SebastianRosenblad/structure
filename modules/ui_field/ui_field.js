var ui_field = function(p_unique_name, p_parent_name, p_classes) {
	this.m_class_name = "ui_field";
	this.m_unique_name = p_unique_name;
	
	p_classes = p_classes == undefined ? [] : p_classes;
	
	var template = [
		'<div id="{{unique_name}}" class="{{class_name}} {{unique_name}} {{style_classes}}"><div id="{{unique_name}}_content">{{content}}</div></div>'
	].join('\n');
	var expressions = {
		unique_name: this.m_unique_name,
		class_name: this.m_class_name,
		style_classes: p_classes.join(" "),
		content: ""
	};
	this._append_html(expressions, template, p_parent_name);
};
ui_field.prototype = Object.create(base_module.prototype);

ui_field.prototype.update_content = function(p_title, p_subtitle) {
	var content_element = document.getElementById(this.m_unique_name + "_content");
	content_element.parentNode.removeChild(content_element);
	
	var template = [
		'<div id="{{unique_name}}_content"><h1>{{title}}</h1><h2>{{subtitle}}</h2></div>'
	].join('\n');
	var expressions = {
		unique_name: this.m_unique_name,
		title: p_title,
		subtitle: p_subtitle
	};
	this._append_html(expressions, template, "#" + this.m_unique_name);
};