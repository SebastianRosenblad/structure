var button_subtitles = function(p_unique_name, p_parent_name, p_classes) {
	this.m_class_name = "button_subtitles";
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
button_subtitles.prototype = Object.create(base_module.prototype);

button_subtitles.prototype._specific_initialize = function() {
	var m_popup_subtitles = new window["popup_subtitles"](this.m_unique_name + "_popup", "#hider");
	m_popup_subtitles.initialize(this.m_class_name);
	
	var self = this;
	
	$("#" + this.m_unique_name).click(function() {
		$("#" + self.m_unique_name + "_popup").toggle();
	});
};