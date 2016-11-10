var button_info = function(p_unique_name) {
	this.m_class_name = "button_info";
	this.m_unique_name = p_unique_name;
	this.m_handlebars = [];
	this.m_popup_info;
	
	var handelbar_object = {"html":"", "expressions":"", "append":""};
	handelbar_object.html = [
		'<div id="{{unique_name}}" class="{{class_name}} {{unique_name}} {{button_styles}}">{{content}}</div>'
	].join('\n');
	handelbar_object.expressions = {
		class_name: this.m_class_name,
		unique_name: this.m_unique_name,
		button_styles: "ui_button no_select",
		content: ""
	};
	this.m_handlebars.push(handelbar_object);
};
button_info.prototype = Object.create(base_module.prototype);

button_info.prototype._specific_initialize = function() {
	this.m_popup_info = new window["popup_info"](this.m_unique_name + "_popup");
	this.m_popup_info.initialize("#hider", this.m_class_name);
	
	var self = this;
	
	$("#" + this.m_unique_name).click(function() {
		$("#" + self.m_unique_name + "_popup").toggle();
	});
};