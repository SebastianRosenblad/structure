var button_info = function(p_unique_name, p_parent_name, p_classes) {
	this.m_class_name = "button_info";
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
	
	unique_ui_elements.push("#" + this.m_unique_name + "_popup");
};
button_info.prototype = Object.create(base_module.prototype);

button_info.prototype._specific_initialize = function() {
	var m_popup_info = new window["popup_info"](this.m_unique_name + "_popup", "#hider");
	m_popup_info.initialize(this.m_class_name);
	
	var self = this;
	
	$("#" + this.m_unique_name).click(function() {
		$("#" + self.m_unique_name + "_popup").toggle();
		hide_unique_ui_elements("#" + self.m_unique_name + "_popup");
	});
};