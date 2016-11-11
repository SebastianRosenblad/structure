var button_sound = function(p_unique_name, p_parent_name, p_classes) {
	this.m_class_name = "button_sound";
	this.m_unique_name = p_unique_name;
	this.m_styles = p_classes = p_classes == undefined ? "" : p_classes.join(" ");
	
	var template = [
		'<div id="{{unique_name}}" class="{{class_name}} {{unique_name}} {{style_classes}}">{{content}}</div>'
	].join('\n');
	var expressions = {
		unique_name: this.m_unique_name,
		class_name: this.m_class_name,
		style_classes: this.m_styles,
		content: ""
	};
	this._append_html(expressions, template, p_parent_name);
};
button_sound.prototype = Object.create(base_module.prototype);

button_sound.prototype._specific_initialize = function() {
	var self = this;
	var sound = 1;
	var html_class = [this.m_class_name + "_off " + this.m_unique_name + " " + this.m_styles,
					  this.m_class_name + " " + this.m_unique_name + " " + this.m_styles];
	
	$("#" + this.m_unique_name).click(function() {
		sound = (sound + 1) % 2;
		$("#" + self.m_unique_name).attr("class", html_class[sound]);
	});
};