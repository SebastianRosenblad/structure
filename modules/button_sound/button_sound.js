var button_sound = function(p_unique_name) {
	this.m_class_name = "button_sound";
	this.m_unique_name = p_unique_name;
	this.m_handlebars = [];
	
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
button_sound.prototype = Object.create(base_module.prototype);

button_sound.prototype._specific_initialize = function() {
	var self = this;
	var sound = 1;
	var html_class = [this.m_class_name + "_off " + this.m_unique_name + " ui_button no_select",
					  this.m_class_name + " " + this.m_unique_name + " ui_button no_select"];
	
	$("#" + this.m_unique_name).click(function() {
		sound = (sound + 1) % 2;
		$("#" + self.m_unique_name).attr("class", html_class[sound]);
	});
};