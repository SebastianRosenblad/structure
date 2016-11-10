var ui_field = function(p_unique_name) {
	this.m_class_name = "ui_field";
	this.m_unique_name = p_unique_name;
	this.m_handlebars = [];
	
	var handelbar_object = {"html":"", "expressions":"", "append":""};
	handelbar_object.html = [
		'<div id="{{unique_name}}" class="{{class_name}} {{unique_name}} {{ui_styles}}"><div id="{{unique_name}}_content">{{content}}</div></div>'
	].join('\n');
	handelbar_object.expressions = {
		class_name: this.m_class_name,
		unique_name: this.m_unique_name,
		ui_styles: "no_select",
		content: "Name and stuff"
	};
	this.m_handlebars.push(handelbar_object);
};
ui_field.prototype = Object.create(base_module.prototype);

ui_field.prototype.update_content = function(p_text) {
	var ele = document.getElementById(this.m_unique_name + "_content");
	ele.parentNode.removeChild(ele);
	
	var hb_html = [
		'<div id="{{unique_name}}_content">{{content}}</div>'
	].join('\n');
	var hb_expressions = {
		unique_name: this.m_unique_name,
		content: p_text
	};
	this._append_html(hb_expressions, hb_html, "#" + this.m_unique_name);
};