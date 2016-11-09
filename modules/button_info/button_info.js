var button_info = function(p_unique_name) {
	this.m_class_name = "button_info";
	this.m_unique_name = p_unique_name;
	this.m_popup_info;
	
	this.m_template = [
		'<div id="{{unique_name}}" class="{{class_name}} {{unique_name}}">{{content}}</div>'
	].join('\n');
	
	this.m_template_data = {
		class_name: this.m_class_name,
		unique_name: this.m_unique_name,
		content: ""
	};
};
button_info.prototype = Object.create(base_module.prototype);

button_info.prototype.specific_initialize = function() {
	new Opentip("#" + this.m_unique_name, "Help", { style: "ui_help" });
	
	this.m_popup_info = new window["popup_info"](this.m_unique_name + "_popup");
	this.m_popup_info.initialize("#hider", this.m_class_name);
	
	$("#" + this.m_unique_name).click(function() {
		$("#" + this.m_unique_name + "_popup").toggle();
		console.log("#" + this.m_unique_name + "_popup");
	});
};